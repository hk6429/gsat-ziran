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

export async function buildLegacy(config) {
  const {
    year, duration, transcriptBase, topics, category, pageRanges, singlePass, official
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

  const transcripts = [];
  for (let start = 1; start <= 68; start += 8) {
    const batch = [];
    for (let no = start; no < Math.min(start + 8, 69); no += 1) batch.push(fetchQuestion(no));
    transcripts.push(...await Promise.all(batch));
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
