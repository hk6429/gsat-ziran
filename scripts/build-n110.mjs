import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "110");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/110_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["B","呼吸作用","科學應用"],2:["B","生殖系統","顯微判讀"],3:["B","植物生理","光週期"],
  4:["C","化學反應","模型判讀"],5:["C","氧化還原","碳循環"],6:["C","酸鹼反應","科學應用"],
  7:["C","有機化合物","模型判讀"],8:["C","原子結構","概念辨析"],9:["C","熱化學","能量計算"],
  10:["C","物質性質","科學應用"],11:["P","光的折射","空間判讀"],12:["P","宇宙演化","時序判讀"],
  13:["P","基本交互作用","概念辨析"],14:["P","物理量單位","量綱判讀"],15:["P","物質波","實驗判讀"],
  16:["E","地震波","圖形判讀"],17:["E","海水性質","圖形判讀"],18:["E","地質年代","概念辨析"],
  19:["E","大氣運動","因果推論"],20:["E","天球運動","空間判讀"],21:["E","颱風降雨","圖形判讀"],
  22:["E","潮汐變化","情境判斷"],23:["B","生殖激素","資訊統整"],24:["B","植物組織","概念辨析"],
  25:["B","細胞膜運輸","概念辨析"],26:["B","循環系統","因果推論"],27:["C","化學計量","計算推理"],
  28:["C","層析法","實驗判讀"],29:["B","生命現象","證據評估"],30:["B","免疫作用","概念辨析"],
  31:["P","電流磁效應","概念辨析"],32:["P","電磁感應","方向判讀"],33:["P","核能","概念辨析"],
  34:["P","都卜勒效應","方向判讀"],35:["E","降雨變化","資料判讀"],36:["E","海流成因","概念辨析"],
  37:["B","呼吸系統","成分判讀"],38:["X","人體代謝","能量平衡"],39:["X","熱力學","代謝率"],
  40:["X","能量代謝","化學計算"],41:["B","族群成長","資料判讀"],42:["B","遺傳疾病","概念辨析"],
  43:["B","DNA複製","實驗推論"],44:["B","演化論","概念辨析"],45:["B","生物多樣性","資料判讀"],
  46:["B","生態系","圖形判讀"],47:["B","人工選擇","原理遷移"],48:["C","乾電池","氧化還原"],
  49:["C","化學鍵結","結構推論"],50:["C","光化學煙霧","反應平衡"],51:["C","同分異構物","結構判讀"],
  52:["C","有機化合物","概念辨析"],53:["C","分子結構","資訊統整"],54:["X","金星大氣","證據推論"],
  55:["P","萬有引力","比例推理"],56:["P","軌道運動","週期計算"],57:["P","力學能","能量轉換"],
  58:["P","流體阻力","關係判讀"],59:["P","流體阻力","比例推理"],60:["P","牛頓運動","受力分析"],
  61:["P","功能定理","計算推理"],62:["E","地層構造","空間判讀"],63:["E","恆星距離","公式計算"],
  64:["E","恆星性質","資料判讀"],65:["E","海洋環流","等高線判讀"],66:["E","恆星觀測","光色判讀"],
  67:["E","沉積環境","地層判讀"],68:["E","大氣穩定度","圖形判讀"]
};

const pageMap = new Map([
  ...[1,2,3,4].map(no=>[no,2]), ...[5,6,7,8,9,10].map(no=>[no,3]),
  ...[11,12,13,14].map(no=>[no,4]), ...[15,16,17].map(no=>[no,5]),
  ...[18,19,20,21].map(no=>[no,6]), ...[22,23].map(no=>[no,7]),
  ...[24,25,26,27].map(no=>[no,8]), ...[28,29,30].map(no=>[no,9]),
  ...[31,32,33,34].map(no=>[no,10]), ...[35,36].map(no=>[no,11]),
  ...[37,38,39,40].map(no=>[no,12]), ...[41,42].map(no=>[no,13]),
  ...[43,44,45].map(no=>[no,14]), ...[46,47,48].map(no=>[no,15]),
  ...[49,50,51,52].map(no=>[no,16]), ...[53,54,55,56,57].map(no=>[no,17]),
  ...[58,59,60,61].map(no=>[no,18]), ...[62,63,64,65].map(no=>[no,19]),
  ...[66,67,68].map(no=>[no,20])
]);

// 工作報告中的 P 值；星號題為多選題得分率，本站僅採未加星號題目的整題答對率。
const singlePass = {
  1:.85,2:.45,3:.39,4:.46,5:.47,6:.63,7:.60,8:.44,9:.57,10:.49,11:.31,
  12:.72,13:.45,14:.48,15:.40,16:.66,17:.33,18:.26,19:.71,20:.57,21:.37,
  22:.36,37:.67,39:.70,40:.54,43:.36,45:.30,47:.76,55:.42,56:.35,58:.72,
  62:.32,63:.37,64:.62,65:.46,66:.43,67:.37
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
    id: `學-110-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: answer.length > 1,
    written: false,
    pages: [`img/official/110/page-${String(pageMap.get(no)).padStart(2, "0")}.jpg`],
    ...transcript,
    source: "大考中心 110 學年度學測自然考科試題"
  };
  const alternateAnswers = answerKey.alternateAnswers?.[String(no)];
  if (alternateAnswers?.length) q.alternateAnswers = alternateAnswers;
  if (singlePass[no] != null) q.pass = singlePass[no];
  return q;
});

const bank = {
  year: 110,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 68,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0l069603548708753986/110%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0l313533864032833587/110%E5%AD%B8%E5%B9%B4%E5%BA%A6%E5%AD%B8%E6%B8%AC%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A%28%E5%85%AC%E5%91%8A%29_11011.pdf"
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n110.js"), output);
console.log(`BUILD_N110=PASS questions=${questions.length} choice=${questions.length} written=0`);
