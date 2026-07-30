import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "111");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));
const writtenKey = JSON.parse(await fs.readFile(path.join(officialDir, "written-answers.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/111_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["P","運動學","空間判讀"],2:["P","運動學","向量判讀"],3:["P","萬有引力","比例推理"],
  4:["P","基本交互作用","概念辨析"],5:["P","動能","計算推理"],6:["P","電磁感應","方向判讀"],
  7:["P","熱輻射","圖形判讀"],8:["P","溫室效應","因果推論"],9:["C","化學史","概念辨析"],
  10:["C","離子結構","比例推理"],11:["C","層析法","實驗判讀"],12:["C","甲烷水合物","結構判讀"],
  13:["C","酸鹼指示劑","資訊統整"],14:["C","燃燒反應","化學計量"],15:["C","溶解度","實驗推論"],
  16:["C","分子結構","電子判讀"],17:["C","原子結構","圖形判讀"],18:["B","酵素作用","科學應用"],
  19:["B","有絲分裂","概念辨析"],20:["B","細胞分裂","實驗取樣"],21:["B","細胞代謝","概念辨析"],
  22:["B","遺傳學","科學史"],23:["B","基因轉殖","實驗推論"],24:["B","核糖核酸","概念辨析"],
  25:["B","核酸疫苗","資料判讀"],26:["B","演化分類","同源構造"],27:["B","自然選擇","概念辨析"],
  28:["E","火星環境","概念辨析"],29:["E","行星地質","影像判讀"],30:["E","星跡","空間判讀"],
  31:["E","天體光譜","概念辨析"],32:["E","水循環","能量轉換"],33:["E","天球運動","空間判讀"],
  34:["E","天氣系統","衛星判讀"],35:["E","氣候系統","推論評估"],36:["E","海水鹽度","計算推理"],
  37:["C","氧化反應","資料判讀"],38:["C","反應速率","圖形判讀"],39:["E","黑碳效應","資料規劃"],
  40:["E","冰雪消融","因果推論"],41:["C","元素分析","實驗設計"],42:["E","碳循環","概念辨析"],
  43:["E","海岸地形","地質作用"],44:["E","放射定年","概念辨析"],45:["E","地殼抬升","圖形表達"],
  46:["B","核酸結構","圖形判讀"],47:["B","病毒分類","概念辨析"],48:["B","親緣關係","圖形表達"],
  49:["P","週期運動","圖形判讀"],50:["P","都卜勒效應","比例推理"],51:["P","波的折射","圖形表達"],
  52:["B","循環系統","科學應用"],53:["B","血液組成","尺度判讀"],54:["B","循環系統","比例推理"],
  55:["C","吸附材料","資料判讀"],56:["C","實驗設計","變因控制"],57:["C","氧化還原","反應式平衡"],
  58:["P","基本量","概念辨析"],59:["P","電磁力","方向判讀"],60:["P","電磁天平","計算推理"]
};

const pageMap = new Map([
  ...[1,2,3,4].map(n=>[n,[2]]), ...[5,6].map(n=>[n,[3]]), ...[7,8,9,10,11].map(n=>[n,[4]]),
  ...[12,13].map(n=>[n,[5]]), ...[14,15,16].map(n=>[n,[6]]), ...[17,18,19].map(n=>[n,[7]]),
  ...[20,21,22,23].map(n=>[n,[8]]), ...[24,25].map(n=>[n,[9]]), ...[26,27,28,29].map(n=>[n,[10]]),
  ...[30,31,32].map(n=>[n,[11]]), ...[33,34,35].map(n=>[n,[12]]), ...[36,37].map(n=>[n,[13]]),
  ...[38,39,40,41,42].map(n=>[n,[13,14]]), ...[43,44,45].map(n=>[n,[15]]),
  ...[46,47,48].map(n=>[n,[16]]), [49,[16,17]], ...[50,51,52,53,54].map(n=>[n,[17]]),
  ...[55,56].map(n=>[n,[18]]), ...[57,58,59].map(n=>[n,[19]]), [60,[19,20]]
]);

// 大考中心工作報告的 P 值；多選題以得分率呈現，故本站只採未加星號的單選題答對率。
const singlePass = {
  1:.70,3:.61,5:.59,7:.43,9:.35,10:.65,11:.57,13:.33,14:.52,15:.30,16:.55,
  19:.32,29:.68,31:.67,33:.62,35:.40,36:.55,41:.56,43:.60,50:.31,52:.71,
  53:.55,58:.69
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
  38: {
    stem: "文獻中常以二鉻酸溶液分離不屬於黑碳的物質。根據圖 17，甲、乙、丙三種溶液中的二鉻酸濃度大小關係為何？（2 分）",
    options: {}
  },
  40: {
    stem: "若黑碳沉降到極區冰川表面，對冰雪消融速率有何種影響？填入適當詞彙。（2 分）",
    options: {}
  },
  45: {
    stem: "若海岸海階主要由偶發大地震造成，且兩次地震之間無明顯抬升與海水面變化，依表 3 畫出 T0 到 T3 期間累積高程隨時間的變化圖。（2 分）並列式計算平均抬升速率，單位為 mm／年，計算至小數點第一位。（2 分）",
    options: {}
  },
  48: {
    stem: "依圖 20 的新冠病毒完整基因體親緣關係網絡圖，繪出蝙蝠病毒 RNA、X、Y、Z 的分支關係圖。（3 分）並寫出哪一地點的病毒 RNA 與 X 和蝙蝠病毒 RNA 親緣關係最接近。（1 分）",
    options: {}
  },
  51: {
    stem: "圖 22 顯示波由波速較慢的介質 A 射入波速較快的介質 B。請在作答區畫出：（1）法線；（1 分）（2）波進入介質 B 後的折射線，只需畫出偏右上、偏左下或沿虛線不偏折的示意。（1 分）",
    options: {}
  },
  54: {
    stem: "若血流儀雷射光精準射入某器官的動脈 A、微血管 C 與靜脈 V，反射雷射光的頻率變化分別為 ΔfA、ΔfC、ΔfV，依血管功能、管壁與管腔等因素推斷，三者大小關係應如何？（2 分）",
    options: {}
  },
  57: {
    stem: "在酸性水溶液中，二鉻酸根與亞鐵離子反應生成三價鉻、三價鐵與水。試問此反應屬於哪一類反應？並寫出平衡反應式的最簡整數係數。（4 分）",
    options: {}
  },
  60: {
    stem: "電磁天平動態模式有 V＝fBv，靜態模式有 FB＝fBI。表 5 與圖 28給出線圈速度與感應電壓數據；靜態平衡時線圈電流 I＝40 mA，重力加速度 g＝9.8 m／s²。以 kg 為單位計算待測物質量，須寫出步驟並四捨五入至小數第一位。（4 分）",
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
    id: `學-111-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: typeof answer === "string" && answer.length > 1,
    written: answer == null,
    pages: pageMap.get(no).map(page => `img/official/111/page-${String(page).padStart(2, "0")}.jpg`),
    ...transcript,
    source: "大考中心 111 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  if (writtenKey.answers[String(no)]) q.referenceAnswer = writtenKey.answers[String(no)];
  return q;
});

const bank = {
  year: 111,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 60,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0m053364692537358519/06-111%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0m214373166642054972/111%E5%AD%B8%E5%B9%B4%E5%BA%A6%E5%AD%B8%E7%A7%91%E8%83%BD%E5%8A%9B%E6%B8%AC%E9%A9%97%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A%28%E5%85%AC%E5%91%8A%29_11107.pdf",
    writtenAnswers: writtenKey.url
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n111.js"), output);
console.log(`BUILD_N111=PASS questions=${questions.length} choice=${questions.filter(q=>!q.written).length} written=${questions.filter(q=>q.written).length}`);
