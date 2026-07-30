import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const subjects = { E:"地球科學", P:"物理", C:"化學", B:"生物", X:"跨科整合" };

function decode(value) {
  const named = { amp:"&", lt:"<", gt:">", quot:'"', apos:"'", nbsp:" " };
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name] ?? match);
}

function textFromHtml(value) {
  return decode(value)
    .replace(/<img\b[^>]*>/gi, " [圖，請參照官方原卷] ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseTranscript(html, no) {
  const blocks = [...html.matchAll(/<div class="question-text"[^>]*>\s*<span class="latex-content">([\s\S]*?)<\/span>\s*<\/div>/g)]
    .map(match => textFromHtml(match[1]))
    .filter(Boolean);
  if (!blocks.length) throw new Error(`第 ${no} 題找不到題幹`);

  const optionPattern = /<li class="option-item"[^>]*data-label="([A-F])"[^>]*>[\s\S]*?<span class="option-label">[A-F]<\/span>([\s\S]*?)<\/li>/g;
  const options = {};
  for (const match of html.matchAll(optionPattern)) {
    const content = match[2].match(/<span class="latex-content">([\s\S]*?)<\/span>/);
    options[match[1]] = content ? textFromHtml(content[1]) : "";
  }
  return {
    passage: blocks.length > 1 ? blocks.slice(0, -1).join("\n\n") : undefined,
    stem: blocks.at(-1),
    options
  };
}

function ability(transcript) {
  const text = `${transcript.passage || ""} ${transcript.stem}`;
  if (/實驗|探討|觀察|測量/.test(text)) return "實驗推論";
  if (/圖|表|曲線|示意/.test(text)) return "圖表判讀";
  if (/\d/.test(text) && /莫耳|公尺|秒|公里|能量|速率|濃度|週期/.test(text)) return "計算推理";
  if (text.length > 220) return "資訊統整";
  return "概念辨析";
}

function cleanPdfText(value) {
  let text = value
    .replace(/\f/g, "\n")
    .replace(/(?:^|\n)\s*(?:第\s*\d+\s*頁\s*\d+年學測|\d+年學測\s*第\s*\d+\s*頁|自然考科\s*共\s*\d+\s*頁|共\s*\d+\s*頁\s*自然考科|-\s*\d+\s*-)\s*(?=\n|$)/g, "\n")
    .replace(/[ \t]+\n/g, "\n");
  for (let i = 0; i < 3; i += 1) {
    text = text.replace(/([\p{Script=Han}])\s+(?=[\p{Script=Han}])/gu, "$1");
  }
  return text.replace(/\s+/g, " ").trim();
}

function parseOfficialTranscript(raw, year, imageOnlyQuestions = {}) {
  const firstSection = raw.search(/第\s*壹\s*部\s*分/);
  const source = firstSection >= 0 ? raw.slice(firstSection) : raw;
  const allMarkers = [...source.matchAll(/(?:^|\n)\s*(\d{1,2})\.\s*/gm)];
  const firstQuestion = allMarkers.findIndex((marker, index) => (
    Number(marker[1]) === 1 && Number(allMarkers[index + 1]?.[1]) === 2
  ));
  const markers = firstQuestion >= 0 ? allMarkers.slice(firstQuestion) : allMarkers;
  const selected = [];
  let markerPosition = 0;
  for (let no = 1; no <= 68; no += 1) {
    const index = markers.findIndex((marker, i) => i >= markerPosition && Number(marker[1]) === no);
    if (index < 0) throw new Error(`${year} 官方文字層缺少第 ${no} 題`);
    selected.push(markers[index]);
    markerPosition = index + 1;
  }

  const passages = {};
  return selected.map((marker, index) => {
    const no = index + 1;
    let block = source.slice(marker.index + marker[0].length, selected[index + 1]?.index ?? source.length);
    const group = block.match(/(\d{1,2}\s*[-~～]\s*\d{1,2}\s*為\s*題\s*組[\s\S]*)$/);
    if (group) {
      passages[no + 1] = cleanPdfText(group[1]);
      block = block.slice(0, group.index);
    }
    block = block.replace(/(?:二\s*、\s*多\s*選\s*題|三\s*、\s*綜\s*合\s*題|第\s*貳\s*部\s*分)[\s\S]*$/, "");
    const optionMatches = [...block.matchAll(/\(([A-F])\)/g)];
    if (optionMatches.length < 2) {
      const labels = imageOnlyQuestions[no];
      if (!labels?.length) throw new Error(`${year} 第 ${no} 題選項解析失敗`);
      return {
        stem: [passages[no], cleanPdfText(block)].filter(Boolean).join("\n\n"),
        options: Object.fromEntries(labels.map(label => [label, "圖示選項（請參照官方原卷）"]))
      };
    }
    const options = {};
    optionMatches.forEach((option, optionIndex) => {
      const value = block.slice(option.index + option[0].length, optionMatches[optionIndex + 1]?.index ?? block.length);
      options[option[1]] = cleanPdfText(value) || "圖示選項（請參照官方原卷）";
    });
    const stem = cleanPdfText(block.slice(0, optionMatches[0].index));
    return {
      stem: [passages[no], stem].filter(Boolean).join("\n\n"),
      options
    };
  });
}

export async function buildLegacy(config) {
  const {
    year, duration, transcriptBase, learnModeId, officialTextFile, imageOnlyQuestions, topics, category, pageRanges, singlePass, official
  } = config;
  const answerKey = JSON.parse(await fs.readFile(
    path.join(root, "sources", "official", String(year), "answer-key.json"),
    "utf8"
  ));
  const pageFor = no => pageRanges.find(([start, end]) => no >= start && no <= end)[2];
  const fetchQuestion = async no => {
    const response = await fetch(`${transcriptBase}${no}/x`);
    if (!response.ok) throw new Error(`第 ${no} 題轉錄頁 HTTP ${response.status}`);
    return parseTranscript(await response.text(), no);
  };

  let transcripts = [];
  if (officialTextFile) {
    const raw = await fs.readFile(path.join(root, officialTextFile), "utf8");
    transcripts = parseOfficialTranscript(raw, year, imageOnlyQuestions);
  } else if (learnModeId) {
    const response = await fetch(`https://www.learnmode.net/api/flip/qiz/${learnModeId}`);
    if (!response.ok) throw new Error(`學習吧轉錄 API HTTP ${response.status}`);
    const payload = await response.json();
    const questions = Object.values(payload.result?.questions || {}).sort((a, b) => Number(a.no) - Number(b.no));
    if (questions.length !== 68) throw new Error(`學習吧轉錄題數不符：${questions.length}`);
    transcripts = questions.map(question => {
      const options = {};
      question.options.forEach((option, index) => {
        const label = String.fromCharCode(65 + index);
        options[label] = textFromHtml(option.title) || "圖示選項（請參照官方原卷）";
      });
      return { stem: textFromHtml(question.title), options };
    });
  } else {
    for (let start = 1; start <= 68; start += 8) {
      const batch = [];
      for (let no = start; no < Math.min(start + 8, 69); no += 1) batch.push(fetchQuestion(no));
      transcripts.push(...await Promise.all(batch));
    }
  }

  const questions = transcripts.map((transcript, index) => {
    const no = index + 1;
    const cat = category(no);
    const answer = answerKey.answers[String(no)];
    const question = {
      no,
      id: `學-${year}-${no}`,
      cat,
      subject: subjects[cat],
      tags: [topics[index], ability(transcript)],
      answer,
      multi: answer.length > 1,
      written: false,
      pages: [`img/official/${year}/page-${String(pageFor(no)).padStart(2, "0")}.jpg`],
      ...transcript,
      source: `大考中心 ${year} 學年度學測自然考科試題`
    };
    const alternateAnswers = answerKey.alternateAnswers?.[String(no)];
    if (alternateAnswers?.length) question.alternateAnswers = alternateAnswers;
    if (singlePass[no] != null) question.pass = singlePass[no];
    return question;
  });

  const bank = {
    year,
    era: "學測",
    subject: "自然",
    duration,
    questionCount: 68,
    official: { ...official, answers: answerKey.url },
    questions
  };
  const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
  await fs.writeFile(path.join(root, "data", `n${year}.js`), output);
  console.log(`BUILD_N${year}=PASS questions=${questions.length} choice=${questions.length} written=0`);
}
