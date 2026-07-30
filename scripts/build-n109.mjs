import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "109");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/109_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["P","原子結構","科學史"],2:["P","自由落體","計算推理"],3:["P","行星運動","圖形判讀"],
  4:["P","靜電力","大小比較"],5:["P","電流磁效應","因果推論"],6:["E","天體觀測","光譜判讀"],
  7:["B","顯微鏡操作","實驗技能"],8:["B","細胞構造","概念辨析"],9:["B","細胞代謝","科學應用"],
  10:["B","生殖激素","圖形判讀"],11:["C","氣體製備","實驗推論"],12:["C","氣體收集","裝置判讀"],
  13:["C","物質性質","實驗判讀"],14:["C","反應式平衡","係數計算"],15:["C","熱化學","反應熱"],
  16:["C","元素性質","週期判讀"],17:["C","離子半徑","資料推論"],18:["E","大氣壓力","圖形計算"],
  19:["E","海嘯傳播","圖形判讀"],20:["E","海嘯特性","證據判讀"],21:["E","板塊構造","空間判讀"],
  22:["E","山崩因素","因果推論"],23:["E","地震災害","概念辨析"],24:["P","量子現象","概念辨析"],
  25:["P","能源效率","資料計算"],26:["B","花粉萌發","實驗判讀"],27:["B","循環系統","概念辨析"],
  28:["B","植物感應","概念辨析"],29:["B","呼吸運動","概念辨析"],30:["B","免疫作用","情境推論"],
  31:["C","溶液稀釋","器材選擇"],32:["C","分離方法","流程判讀"],33:["E","太陽黑子","概念辨析"],
  34:["E","天體亮度","星等判讀"],35:["E","颱風","概念辨析"],36:["E","閃電","資訊統整"],
  37:["X","細胞膜電位","概念辨析"],38:["X","腦電波","量綱判讀"],39:["X","腦電波","圖形判讀"],
  40:["P","能源轉換","概念辨析"],41:["B","生物分子","資訊推論"],42:["B","胞器構造","概念辨析"],
  43:["P","力學能","圖形判讀"],44:["P","牛頓運動","平均力"],45:["P","拋體運動","概念辨析"],
  46:["P","作用反作用","概念辨析"],47:["P","碰撞","關係推理"],48:["P","力學能","比例計算"],
  49:["P","動量守恆","比例推理"],50:["B","細胞分裂","概念辨析"],51:["B","ABO血型","遺傳推論"],
  52:["B","基因轉殖","原理推論"],53:["B","生物分類","科學史"],54:["B","生態消長","圖形判讀"],
  55:["B","族群成長","資料判讀"],56:["C","物質結構","資料配對"],57:["C","元素分析","化學計量"],
  58:["C","酸鹼反應","濃度計算"],59:["C","有機化合物","結構判讀"],60:["C","鋰離子電池","氧化還原"],
  61:["C","金屬活性","實驗推論"],62:["E","宇宙尺度","空間判讀"],63:["E","大氣穩定度","計算推理"],
  64:["E","天氣模式","尺度判讀"],65:["E","海水聲速","圖形推論"],66:["E","地層構造","剖面判讀"],
  67:["E","能源資源","文本辨析"],68:["E","天體週期","證據推論"]
};

const pageMap = new Map([
  ...[1,2,3].map(no=>[no,2]), ...[4,5,6,7].map(no=>[no,3]),
  ...[8,9,10].map(no=>[no,4]), ...[11,12].map(no=>[no,5]),
  ...[13,14,15,16,17].map(no=>[no,6]), ...[18,19,20].map(no=>[no,7]),
  ...[21,22,23,24].map(no=>[no,8]), ...[25,26].map(no=>[no,9]),
  ...[27,28,29,30,31].map(no=>[no,10]), ...[32,33,34,35].map(no=>[no,11]),
  ...[36,37,38].map(no=>[no,12]), ...[39,40,41,42].map(no=>[no,13]),
  ...[43,44,45].map(no=>[no,14]), ...[46,47,48,49,50].map(no=>[no,15]),
  ...[51,52,53,54].map(no=>[no,16]), ...[55,56,57].map(no=>[no,17]),
  ...[58,59,60].map(no=>[no,18]), ...[61,62,63,64,65].map(no=>[no,19]),
  ...[66,67,68].map(no=>[no,20])
]);

// 工作報告選項分析表的全體到考生（T）正確選項百分比；多選題不轉成整題答對率。
const singlePass = {
  1:.46,2:.57,3:.66,4:.51,5:.48,6:.58,7:.39,8:.49,9:.47,10:.48,11:.51,
  12:.39,13:.73,14:.71,15:.65,16:.59,17:.47,18:.69,19:.66,20:.74,21:.56,
  22:.76,23:.62,37:.38,38:.77,39:.57,41:.32,43:.38,44:.30,46:.30,47:.24,
  48:.49,49:.32,51:.57,53:.70,57:.26,58:.37,61:.37,62:.46,63:.42,64:.35,
  68:.19
};

function decode(value) {
  const named = { amp:"&", lt:"<", gt:">", quot:'"', apos:"'", nbsp:" " };
  return value
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => named[n] ?? m);
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

async function fetchQuestion(no) {
  const response = await fetch(`${TRANSCRIPT_URL}${no}/x`);
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
  const [cat, ...tags] = meta[no];
  const answer = answerKey.answers[String(no)];
  const q = {
    no,
    id: `學-109-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: answer.length > 1,
    written: false,
    pages: [`img/official/109/page-${String(pageMap.get(no)).padStart(2, "0")}.jpg`],
    ...transcript,
    source: "大考中心 109 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  return q;
});

const bank = {
  year: 109,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 68,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0k050345289916081725/05-109%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7%E5%AE%9A%E7%A8%BF.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0k226383389116909157/109%E5%AD%B8%E5%B9%B4%E5%BA%A6%E5%AD%B8%E7%A7%91%E8%83%BD%E5%8A%9B%E6%B8%AC%E9%A9%97%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A10908.pdf"
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n109.js"), output);
console.log(`BUILD_N109=PASS questions=${questions.length} choice=${questions.length} written=0`);
