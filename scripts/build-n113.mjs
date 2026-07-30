import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "113");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));
const writtenKey = JSON.parse(await fs.readFile(path.join(officialDir, "written-answers.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/113_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["B","細胞分裂","圖形判讀"],2:["B","光合作用","資料判讀"],3:["B","細胞學說","概念辨析"],
  4:["B","遺傳學","科學史"],5:["B","分子生物學","科學閱讀"],6:["B","核酸結構","計算推理"],
  7:["B","生物科技","環境適應"],8:["B","演化理論","科學史"],9:["B","生物分類","概念辨析"],
  10:["C","有機化學","化學計量"],11:["C","化學鍵結","結構判讀"],12:["C","氧化還原","試劑選擇"],
  13:["C","化學實驗","觀察推理"],14:["C","氣體反應","化學計量"],15:["C","浮力與氣體","計算推理"],
  16:["C","材料化學","實驗推論"],17:["C","介面化學","因果推論"],18:["C","物質性質","資料判讀"],
  19:["P","核能發電","能量轉換"],20:["P","基本交互作用","概念辨析"],21:["P","幾何光學","成像判讀"],
  22:["P","輻射治療","資料判讀"],23:["P","輻射治療","應用推理"],24:["P","熱力學","生活應用"],
  25:["P","熱力學","計算推理"],26:["P","氣體壓力","圖形判讀"],27:["P","動量衝量","計算推理"],
  28:["E","臺灣地質","空間判讀"],29:["E","海洋學","時間尺度"],30:["E","大氣科學","凝結條件"],
  31:["E","地震預警","波動推理"],32:["E","天氣系統","圖形判讀"],33:["E","潮汐","概念辨析"],
  34:["E","大氣穩定度","計算推理"],35:["E","再生能源","資料判讀"],36:["E","海水面變化","證據推理"],
  37:["B","人擇育種","概念辨析"],38:["B","人擇育種","資料論證"],39:["B","遺傳變異","證據推理"],
  40:["B","植物生理","因果推論"],41:["B","演化與分類","同功構造"],42:["B","植物生理","資訊統整"],
  43:["P","實驗設計","變因控制"],44:["P","電磁感應","概念辨析"],45:["P","電磁感應","比例推理"],
  46:["P","電磁感應","圖形表達"],47:["C","有機化學","結構判讀"],48:["C","化學反應","概念辨析"],
  49:["C","化學計量","計算推理"],50:["C","氧化還原","地球化學"],51:["C","反應式平衡","符號表達"],
  52:["C","地球化學","證據推理"],53:["E","地球歷史","因果推論"],54:["E","天文觀測","科學史"],
  55:["E","望遠鏡","儀器原理"],56:["E","大氣吸收","科學應用"]
};

const pageMap = new Map([
  ...[1,2,3].map(n=>[n,[2]]), ...[4,5,6,7].map(n=>[n,[3]]), ...[8,9,10,11].map(n=>[n,[4]]),
  ...[12,13,14].map(n=>[n,[5]]), ...[15,16,17].map(n=>[n,[6]]), ...[18,19,20,21].map(n=>[n,[7]]),
  ...[22,23].map(n=>[n,[8]]), ...[24,25,26,27].map(n=>[n,[9]]), ...[28,29,30,31,32].map(n=>[n,[10]]),
  ...[33,34,35,36].map(n=>[n,[11]]), [37,[12]], [38,[12]], [39,[12,13]],
  [40,[14]], [41,[14]], [42,[14,15]], [43,[14,15]],
  ...[44,45,46].map(n=>[n,[16]]), ...[47,48,49].map(n=>[n,[17]]),
  ...[50,51,52].map(n=>[n,[18]]), [53,[18,19]], ...[54,55,56].map(n=>[n,[19]])
]);

// 大考中心工作報告選項分析表的 T 組整題答對率；多選題只公布各選項畫記率。
const singlePass = {
  1:.82,6:.50,8:.84,9:.31,10:.60,12:.50,14:.65,15:.52,16:.69,21:.51,25:.53,
  26:.77,27:.51,29:.65,31:.55,32:.44,36:.48,37:.84,39:.61,40:.73,44:.34,55:.55
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

  const optionPattern = /<li class="option-item"[^>]*data-label="([A-E])"[^>]*>[\s\S]*?<span class="option-label">[A-E]<\/span>([\s\S]*?)<\/li>/g;
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
    stem: "綜合圖 14 與圖 15，高產肉雞育種計畫中，同齡雞隻所呈現出的飼料轉化率顯示：（a）此選育計畫目標是否達成？（1 分）（b）比較並說明 1970 與 2000 年代的雞隻生長速率、飼料攝取的變化及兩者關聯性，以支持你的結論。（3 分）",
    options: {}
  },
  41: {
    stem: "捕蠅草與豬籠草同稱食肉植物。依表 3 的科別、地理分布、捕器結構與消化方式判斷：（a）食肉植物的捕器是否為同功構造？（1 分）（b）判定的原因為何？（3 分）",
    options: {}
  },
  43: {
    stem: "甲同學認為捕蠅草第一次觸發後儲存的電量會逐漸散去，若未在 20 秒內第二次觸發，總電量便無法達到 14 μC。請把用來驗證此看法的實驗變因與預期現象填入表格。（4 分）",
    options: {}
  },
  46: {
    stem: "磁鐵棒等速穿過環圈甲，3 秒時 S 極恰接觸環圈中心，6 秒時磁鐵棒中心在環圈中心，圖 19 已畫出 0～6 秒感應電流。（a）補畫 6～12 秒曲線並標出 N 極恰脫離環圈中心的時間。（2 分）（b）說明感應電流方向與曲線形狀的理由。（2 分）",
    options: {}
  },
  49: {
    stem: "表 5 列出甲醇、乙烯、正丙醇的市價與每莫耳電子所轉換產物的價格。（a）列式計算正丙醇的轉換產物價格。（2 分）（b）某系統只產生甲醇與正丙醇，每產生 1 莫耳混合產物需 10.8 莫耳電子，列式求兩者莫耳數比。（2 分）",
    options: {}
  },
  51: {
    stem: "無氧光自營細菌可進行反應：24Fe²⁺＋6CO₂＋xH₂O → (CH₂O)₆＋yFe(OH)₃＋zH⁺。（a）說明並求 x、y、z。（3 分）（b）(CH₂O)₆ 可能屬於醣類、蛋白質、油脂或核酸中的哪一類？（1 分）",
    options: {}
  },
  53: {
    stem: "（a）依地球歷史由早到晚排列：甲臭氧層形成、乙氧氣開始快速累積、丙生物上陸、丁縞狀鐵礦床形成。（2 分）（b）若只考量光合作用，35～22 億年前除氧氣驟增外，大氣組成還有何改變？對全球氣溫有何影響？（各 1 分）",
    options: {}
  },
  56: {
    stem: "（a）溫室氣體主要吸收哪一波段的電磁波？若以飛機攜帶望遠鏡觀測，應到大氣的哪一層？（各 1 分）（b）說明紫外線無法從地面觀測的原因。（2 分）",
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
for (let start = 1; start <= 56; start += 8) {
  const batch = [];
  for (let no = start; no < Math.min(start + 8, 57); no += 1) batch.push(fetchQuestion(no));
  transcripts.push(...await Promise.all(batch));
}

const questions = transcripts.map((transcript, index) => {
  const no = index + 1;
  const [cat, ...tags] = meta[no];
  const answer = answerKey.answers[String(no)];
  const q = {
    no,
    id: `學-113-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: typeof answer === "string" && answer.length > 1,
    written: answer == null,
    pages: pageMap.get(no).map(page => `img/official/113/page-${String(page).padStart(2, "0")}.jpg`),
    ...transcript,
    source: "大考中心 113 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  if (writtenKey.answers[String(no)]) q.referenceAnswer = writtenKey.answers[String(no)];
  return q;
});

const bank = {
  year: 113,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 56,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0o051419133380092609/06-113%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E9%A1%8C%E5%AE%9A%E7%A8%BF.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0o184530519137324116/113%E5%AD%B8%E5%B9%B4%E5%BA%A6%E5%AD%B8%E6%B8%AC%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A%28%E5%85%AC%E5%91%8A%29_11307.pdf",
    writtenAnswers: writtenKey.url
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n113.js"), output);
console.log(`BUILD_N113=PASS questions=${questions.length} choice=${questions.filter(q=>!q.written).length} written=${questions.filter(q=>q.written).length}`);
