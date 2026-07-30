import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "108");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/108_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["E","太陽風","科學應用"],2:["E","聖嬰現象","概念辨析"],3:["E","恆星顏色","原理類比"],
  4:["E","海浪折射","圖形判讀"],5:["P","靜電","科學應用"],6:["P","電磁感應","實驗操作"],
  7:["P","原子光譜","科學史"],8:["P","光電效應","科學應用"],9:["B","細胞構造","概念辨析"],
  10:["B","循環系統","圖形判讀"],11:["B","生物分類","概念辨析"],12:["B","種子萌發","圖形判讀"],
  13:["C","萃取","器材選擇"],14:["C","燃燒反應","化學計量"],15:["C","元素週期","概念辨析"],
  16:["C","酸鹼滴定","化學計量"],17:["E","空氣污染","尺度估算"],18:["E","潮汐","情境推論"],
  19:["E","海嘯","資訊統整"],20:["E","月相","時空判讀"],21:["P","氣體動力論","概念辨析"],
  22:["P","基本交互作用","概念辨析"],23:["P","聲波","資料判讀"],24:["B","營養物質","生活應用"],
  25:["B","植物器官","觀察推論"],26:["B","腎元","概念辨析"],27:["B","植物向光性","實驗推論"],
  28:["B","神經系統","模型類比"],29:["C","烴類燃料","概念辨析"],30:["C","濾紙層析","實驗操作"],
  31:["C","鉛蓄電池","氧化還原"],32:["C","燃燒分析","實驗設計"],33:["C","溶解度","圖形判讀"],
  34:["C","倍比定律","化學計量"],35:["P","物理學史","科學史"],36:["B","生物學史","科學史"],
  37:["X","颱風運動","圖形判讀"],38:["X","颱風風場","等壓線判讀"],39:["P","奈米尺度","比例推理"],
  40:["X","船跡雲","因果推論"],41:["C","氧化還原","反應判讀"],42:["X","氮循環","生物轉換"],
  43:["E","板塊運動","資料判讀"],44:["E","應變率","尺度計算"],45:["E","地質剖面","構造判讀"],
  46:["E","油氣構造","剖面判讀"],47:["E","焚風","計算推理"],48:["E","海水密度","圖形判讀"],
  49:["E","海水鹽度","守恆推理"],50:["P","浮力","受力分析"],51:["P","圓周運動","比例推理"],
  52:["P","太陽電池","資訊統整"],53:["P","尺度估算","比例推理"],54:["P","水力發電","能量轉換"],
  55:["P","面積估算","圖形判讀"],56:["P","發電功率","能量計算"],57:["B","孟德爾遺傳","圖形判讀"],
  58:["B","DNA結構","比例推理"],59:["B","細胞分裂","圖形判讀"],60:["B","演化分類","親緣判讀"],
  61:["B","互利共生","概念辨析"],62:["B","海洋生態","空間判讀"],63:["C","離子檢驗","實驗設計"],
  64:["C","路易斯結構","概念辨析"],65:["C","有機化合物","分類計數"],66:["C","元素組成","資訊判讀"],
  67:["C","官能基","結構判讀"],68:["C","界面活性劑","實驗判讀"]
};

const pageMap = new Map([
  ...[1,2,3,4].map(no=>[no,2]), ...[5,6,7,8,9].map(no=>[no,3]),
  ...[10,11,12].map(no=>[no,4]), ...[13,14,15,16,17].map(no=>[no,5]),
  ...[18,19,20,21].map(no=>[no,6]), ...[22,23,24,25,26].map(no=>[no,7]),
  ...[27,28,29].map(no=>[no,8]), ...[30,31,32].map(no=>[no,9]),
  ...[33,34,35].map(no=>[no,10]), ...[36,37].map(no=>[no,11]),
  ...[38,39,40].map(no=>[no,12]), ...[41,42,43].map(no=>[no,13]),
  ...[44,45,46].map(no=>[no,14]), ...[47,48].map(no=>[no,15]),
  ...[49,50,51,52,53].map(no=>[no,16]), ...[54,55,56,57].map(no=>[no,17]),
  ...[58,59,60].map(no=>[no,18]), ...[61,62,63,64,65].map(no=>[no,19]),
  ...[66,67,68].map(no=>[no,20])
]);

// 工作報告的 P 值；星號題為多選題得分率，本站只採未加星號的單選題答對率。
const singlePass = {
  1:.80,2:.60,3:.24,4:.56,5:.63,6:.42,7:.63,8:.74,9:.46,10:.41,11:.53,
  12:.51,13:.54,14:.55,15:.45,16:.47,35:.70,36:.79,37:.48,38:.49,39:.40,
  44:.34,45:.46,46:.28,48:.38,49:.36,50:.38,51:.27,53:.56,54:.83,55:.28,
  56:.21,57:.45,58:.63,59:.31,60:.27,63:.29,64:.32,65:.25,66:.54
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
    id: `學-108-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: answer.length > 1,
    written: false,
    pages: [`img/official/108/page-${String(pageMap.get(no)).padStart(2, "0")}.jpg`],
    ...transcript,
    source: "大考中心 108 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  return q;
});

const bank = {
  year: 108,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 68,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0j196569337291350837/01-108%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7%E5%AE%9A%E7%A8%BF.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0j301533916033318514/108%E5%AD%B8%E6%B8%AC%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A_%E5%AE%8C%E6%88%90%E6%AA%9420190705.pdf"
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n108.js"), output);
console.log(`BUILD_N108=PASS questions=${questions.length} choice=${questions.length} written=0`);
