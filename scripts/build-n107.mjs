import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "107");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));
const transcriptBase = "https://www.shuati.tw/q/107_gsat_%E8%87%AA%E7%84%B6_";

const subjects = { E:"地球科學", P:"物理", C:"化學", B:"生物", X:"跨科整合" };
const topics = [
  "元素週期","元素性質","溶解與熱效應","燃料電池","酸鹼中和","異構物","實驗安全","反應式平衡",
  "細胞代謝","酵素活性","植物繁殖","光週期","生物元素","水波","基本交互作用","空氣阻力",
  "磁場","光電效應","月球地質","潮汐","海浪","颱風風場","氣壓變化","花構造",
  "血球","排泄","神經系統","太陽閃焰","電流磁效應","電磁感應","繞射","斷層",
  "火山","都市氣候","天氣觀測","熱化學","核反應","全球環流","核融合","能量代謝",
  "化學鍵","有機分子式","有機分子式","沉澱反應","生物分子","溫室氣體","石油煉製","細胞分裂",
  "性聯遺傳","基因改造","演化","族群成長","海洋生態","族群","重力加速度","自由落體",
  "重力波","質能互換","宇宙距離","圓周運動","動量守恆","永續發展","日冕","月相曆法",
  "月球軌道","天然氣水合物","地球分層","地震"
];

function category(no) {
  if (no >= 37 && no <= 40) return "X";
  if ((no >= 1 && no <= 8) || no === 36 || (no >= 41 && no <= 47)) return "C";
  if ((no >= 9 && no <= 13) || (no >= 24 && no <= 27) || (no >= 48 && no <= 54)) return "B";
  if ((no >= 14 && no <= 18) || (no >= 28 && no <= 31) || (no >= 55 && no <= 61)) return "P";
  return "E";
}

const pageRanges = [
  [1,3,2],[4,9,3],[10,15,4],[16,20,5],[21,23,6],[24,28,7],[29,32,8],
  [33,36,9],[37,39,10],[40,45,11],[46,52,12],[53,56,13],[57,59,14],
  [60,63,15],[64,68,16]
];
function pageFor(no) {
  return pageRanges.find(([start, end]) => no >= start && no <= end)[2];
}

// 工作報告題號前有星號者為多選題得分率，本站只採未加星號的單選題答對率。
const singlePass = {
  1:.68,2:.59,3:.35,4:.50,5:.34,6:.70,7:.88,8:.49,9:.38,10:.61,11:.36,12:.63,
  13:.27,14:.40,15:.53,16:.49,17:.50,18:.58,19:.59,20:.43,21:.66,22:.58,23:.53,
  37:.57,38:.47,39:.47,41:.39,42:.36,43:.38,44:.35,50:.71,52:.50,53:.23,
  55:.29,56:.16,57:.34,58:.31,59:.32,60:.23,63:.56,64:.52,66:.29
};

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

async function fetchQuestion(no) {
  const response = await fetch(`${transcriptBase}${no}/x`);
  if (!response.ok) throw new Error(`第 ${no} 題轉錄頁 HTTP ${response.status}`);
  return parseTranscript(await response.text(), no);
}

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
    id: `學-107-${no}`,
    cat,
    subject: subjects[cat],
    tags: [topics[index], ability(transcript)],
    answer,
    multi: answer.length > 1,
    written: false,
    pages: [`img/official/107/page-${String(pageFor(no)).padStart(2, "0")}.jpg`],
    ...transcript,
    source: "大考中心 107 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) question.pass = singlePass[no];
  return question;
});

const bank = {
  year: 107,
  era: "學測",
  subject: "自然",
  duration: 100,
  questionCount: 68,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0j076536210924409058/05-107%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7%E5%AE%9A%E7%A8%BF.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0j051826568834816834/107%E5%AD%B8%E6%B8%AC%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A.pdf"
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n107.js"), output);
console.log(`BUILD_N107=PASS questions=${questions.length} choice=${questions.length} written=0`);
