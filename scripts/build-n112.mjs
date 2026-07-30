import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "112");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));
const writtenKey = JSON.parse(await fs.readFile(path.join(officialDir, "written-answers.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/112_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["E","颱風與天氣","空間判讀"],2:["E","氣候變遷","機率判讀"],3:["E","太陽系天體","證據推理"],
  4:["E","海洋波浪","概念辨析"],5:["E","潮汐","圖形判讀"],6:["E","大氣溼度","概念辨析"],
  7:["E","降水觀測","資料判讀"],8:["E","海水鹽度","因果推論"],9:["E","板塊構造","概念辨析"],
  10:["B","病毒與宿主","圖形判讀"],11:["B","病毒感染","證據推理"],12:["B","分子演化","科學閱讀"],
  13:["B","顯微觀察","實驗設計"],14:["B","細胞構造","概念辨析"],15:["B","減數分裂","計算推理"],
  16:["B","生物演化","概念辨析"],17:["B","生物分類","科學論證"],18:["B","遺傳學","實驗推論"],
  19:["C","酸鹼指示劑","資料判讀"],20:["C","溶解度","實驗推論"],21:["C","同素異形體","相圖判讀"],
  22:["C","光化學煙霧","反應推理"],23:["C","分子結構","結構判讀"],24:["C","化學反應","化學計量"],
  25:["C","氣體反應","計算推理"],26:["C","氣體定律","實驗推論"],27:["C","元素週期性","實驗設計"],
  28:["P","物理學史","概念辨析"],29:["P","電磁波","科學應用"],30:["P","波動干涉","計算推理"],
  31:["P","波粒二象性","概念辨析"],32:["P","都卜勒效應","計算推理"],33:["P","落體運動","圖形判讀"],
  34:["P","能源科技","概念辨析"],35:["P","能量守恆","因果推論"],36:["P","磁力平衡","受力分析"],
  37:["P","水力發電","計算推理"],38:["P","水力發電","變因判讀"],39:["P","碳排減量","資訊統整"],
  40:["P","水力發電","符號表達"],41:["E","行星環境","科學應用"],42:["E","恆星觀測","概念辨析"],
  43:["E","行星運動","資料判讀"],44:["E","恆星亮度","科學解釋"],45:["C","酸鹼平衡","計算推理"],
  46:["C","發酵作用","概念辨析"],47:["C","反應式平衡","變因控制"],48:["B","遺傳學","資料論證"],
  49:["B","遺傳與演化","概念辨析"],50:["B","族譜分析","證據推理"],51:["P","放射衰變","概念辨析"],
  52:["P","基本交互作用","符號表達"],53:["E","地球化學","圖形判讀"],54:["E","工業革命","證據推理"],
  55:["B","微生物競爭","資料判讀"],56:["B","抗藥性","實驗設計"],57:["B","自然選擇","科學解釋"],
  58:["B","生物大分子","結構判讀"],59:["B","生物大分子","概念辨析"],60:["C","莫耳濃度","計算推理"]
};

const pageMap = new Map([
  ...[1,2,3,4].map(n=>[n,[2]]), ...[5,6,7].map(n=>[n,[3]]), ...[8,9,10].map(n=>[n,[4]]),
  ...[11,12,13,14,15,16].map(n=>[n,[5]]), ...[17,18,19].map(n=>[n,[6]]),
  ...[20,21].map(n=>[n,[7]]), ...[22,23,24].map(n=>[n,[8]]), ...[25,26,27].map(n=>[n,[9]]),
  ...[28,29,30,31].map(n=>[n,[10]]), ...[32,33,34].map(n=>[n,[11]]), ...[35,36].map(n=>[n,[12]]),
  ...[37,38,39,40].map(n=>[n,[13]]), ...[41,42,43,44].map(n=>[n,[14]]),
  ...[45,46,47].map(n=>[n,[15]]), ...[48,49,50].map(n=>[n,[16]]), [51,[17]],
  ...[52,53,54].map(n=>[n,[17,18]]), [55,[18]], ...[56,57,58].map(n=>[n,[19]]),
  ...[59,60].map(n=>[n,[20]])
]);

// 大考中心工作報告選項分析表的 T 組整題答對率；多選題只公布各選項畫記率。
const singlePass = {
  2:.85,3:.71,4:.58,7:.66,9:.64,10:.46,13:.35,14:.68,15:.48,18:.52,19:.55,
  20:.19,22:.52,26:.24,28:.63,30:.40,32:.51,33:.38,34:.72,36:.29,37:.62,
  38:.47,39:.44,41:.48,42:.77,43:.74,45:.50,53:.53,55:.55,56:.56,58:.55
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

// 轉錄輔助站未收錄非選擇題，依大考中心試題 PDF 補錄題幹；正式頁影像保留完整圖表。
const officialFallbacks = {
  40: {
    stem: "以 E₁ 代表每部水力發電機一年可提供的電能，M 代表 N 部發電機一年可達成的二氧化碳減排量。（a）利用數值常數、uʷ 與表 5 的參數符號，以數學式表示 E₁。（2 分）（b）利用 E₁ 與表 5 的參數符號，以數學式表示 M。（2 分）",
    options: {}
  },
  44: {
    stem: "從火星觀察織女星所得到的絕對星等和地球上觀測到的有何差異？在表 7 填入＞、＜或＝，並解釋原因。（2 分）",
    options: {}
  },
  47: {
    stem: "（a）依小花的預期，寫出乳糖在水溶液中發酵生成乳酸的化學反應式，物質須以分子式表示並以最簡係數平衡。（2 分）（b）若要知道熟成時間對乳酪製作的影響，應挑選表 8 中哪三組條件比較？（1 分）說明根據。（1 分）",
    options: {}
  },
  50: {
    stem: "依圖 14 的顯性遺傳性多囊性腎臟病族譜回答：（a）缺漏的 III-5 成員應為何種圖形？（1 分）（b）哪一對父母及其所有子女的罹病分布，恰好表現孟德爾模式中的體染色體遺傳？（1 分）說明判斷原因。（2 分）",
    options: {}
  },
  52: {
    stem: "在式（2）所示鈾-238 衰變為鈾-234 的 3 個階段中，涉及強作用與弱作用的衰變各為何？（2 分）",
    options: {}
  },
  54: {
    stem: "從圖 15 的數據分析，此地運輸業的蒸汽機應在何時開始大量使用煤作為燃料？推論依據為何？（4 分）",
    options: {}
  },
  57: {
    stem: "廣泛使用抗生素使抗藥性細菌增加的演化力為何？（2 分）",
    options: {}
  },
  60: {
    stem: "路鄧素與抗生素 T 對細菌 S 的最低抑菌濃度分別為 2.0 μg/mL 與 1.5×10⁻⁶ M。若以莫耳濃度比較，何種抗生素所需濃度較低？路鄧素莫耳質量為 782 g/mol，需寫出計算過程。（2 分）",
    options: {}
  }
};

async function fetchQuestion(no) {
  if (officialFallbacks[no]) return officialFallbacks[no];
  const response = await fetch(`${TRANSCRIPT_URL}${no}/x`);
  if (!response.ok) throw new Error(`第 ${no} 題轉錄頁 HTTP ${response.status}`);
  return parseTranscript(await response.text(), no);
}

const transcripts = [];
for (let start = 1; start <= 60; start += 8) {
  const batch = [];
  for (let no = start; no < Math.min(start + 8, 61); no += 1) batch.push(fetchQuestion(no));
  transcripts.push(...await Promise.all(batch));
}

const questions = transcripts.map((transcript, index) => {
  const no = index + 1;
  const [cat, ...tags] = meta[no];
  const answer = answerKey.answers[String(no)];
  const q = {
    no,
    id: `學-112-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: typeof answer === "string" && answer.length > 1,
    written: answer == null,
    pages: pageMap.get(no).map(page => `img/official/112/page-${String(page).padStart(2, "0")}.jpg`),
    ...transcript,
    source: "大考中心 112 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  if (writtenKey.answers[String(no)]) q.referenceAnswer = writtenKey.answers[String(no)];
  return q;
});

const bank = {
  year: 112,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 60,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0n045354345199955411/06-112%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0n222520808124000728/112%E5%AD%B8%E5%B9%B4%E5%BA%A6%E5%AD%B8%E6%B8%AC%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A%28%E5%85%AC%E5%91%8A%29_112.0809.pdf",
    writtenAnswers: writtenKey.url
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n112.js"), output);
console.log(`BUILD_N112=PASS questions=${questions.length} choice=${questions.filter(q=>!q.written).length} written=${questions.filter(q=>q.written).length}`);
