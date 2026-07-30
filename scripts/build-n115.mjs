import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "115");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));
const writtenKey = JSON.parse(await fs.readFile(path.join(officialDir, "written-answers.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/115_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["E","天文與宇宙","量綱與估算"],2:["E","天文與宇宙","科學推理"],3:["E","天文與宇宙","電磁波"],
  4:["E","大氣與天氣","圖表判讀"],5:["E","地質與地史","圖表判讀"],6:["E","大氣與天氣","情境推理"],
  7:["E","地震與海嘯","防災素養"],8:["E","地震與海嘯","計算推理"],9:["E","氣候變遷","資料判讀"],
  10:["P","運動學","圖表判讀"],11:["P","牛頓力學","向量判讀"],12:["P","能量與作功","守恆推理"],
  13:["P","波動與光","都卜勒效應"],14:["P","基本交互作用","尺度比較"],15:["P","電場與電位","單位判讀"],
  16:["P","電場與電位","圖形判讀"],17:["P","熱學","比例推理"],18:["P","核能","計算推理"],
  19:["C","酸鹼反應","物質性質"],20:["C","熱化學","相圖判讀"],21:["C","酸鹼平衡","資料判讀"],
  22:["C","熱化學","化學計量"],23:["C","原子結構與週期性","趨勢比較"],24:["C","化學鍵與結構","模型判讀"],
  25:["C","溶解度","資料判讀"],26:["C","分離技術","實驗設計"],27:["C","離子反應","證據推理"],
  28:["B","光合作用","實驗設計"],29:["B","細胞代謝","情境推理"],30:["B","細胞學說","科學史"],
  31:["B","遺傳學","譜系判讀"],32:["B","能量代謝","分子結構"],33:["B","分子生物學","實驗操作"],
  34:["B","演化與地史","圖表判讀"],35:["B","演化與分類","證據推理"],36:["B","演化與分類","親緣推論"],
  37:["B","基因表現","因果推論"],38:["B","基因表現","科學建模"],39:["B","演化與分類","親緣推論"],
  40:["B","生態與交互作用","資料判讀"],41:["B","生態與交互作用","證據推論"],42:["C","有機化學","分子結構"],
  43:["C","有機化學","性質推理"],44:["C","膠體與奈米材料","實驗原理"],45:["C","化學計量","資料判讀"],
  46:["C","化學計量","計算推理"],47:["P","量子現象","能階躍遷"],48:["P","量子現象","計算推理"],
  49:["P","波動與光","作圖表達"],50:["E","海洋與潮汐","資料作圖"],51:["E","海洋與潮汐","週期推理"],
  52:["X","能源科技","跨科整合"],53:["P","電磁感應","證據推理"],54:["E","地質年代","放射性定年"],
  55:["E","地質年代","證據評估"],56:["E","行星科學","資料判讀"]
};

const pageMap = new Map([
  ...[1,2,3,4].map(n=>[n,[2]]), ...[5,6].map(n=>[n,[3]]), ...[7,8,9].map(n=>[n,[4]]),
  ...[10,11,12].map(n=>[n,[5]]), ...[13,14,15,16].map(n=>[n,[6]]), ...[17,18,19,20].map(n=>[n,[7]]),
  ...[21,22,23].map(n=>[n,[8]]), ...[24,25,26,27].map(n=>[n,[9]]), ...[28,29,30].map(n=>[n,[10]]),
  ...[31,32,33,34].map(n=>[n,[11]]), [35,[12]], [36,[12]], [37,[12]], [38,[12,13]], [39,[12,13]],
  [40,[14,15]], [41,[14,15]], [42,[14,15]], [43,[14,15]], [44,[16]], [45,[16]], [46,[16,17]],
  [47,[17]], [48,[17]], [49,[17]], [50,[18]], [51,[18]], [52,[18,19]], [53,[18,19]],
  [54,[20]], [55,[20]], [56,[20]]
]);

// 大考中心選項分析表的 T 組答對率；多選題只有各選項畫記率，不能冒充整題得分率。
const singlePass = {
  1:.66,2:.89,3:.56,4:.58,5:.49,6:.52,10:.78,13:.72,14:.30,15:.45,16:.42,17:.65,18:.22,
  19:.83,20:.40,21:.75,22:.46,24:.56,28:.20,29:.50,30:.53,33:.60,34:.78,36:.50,
  40:.58,43:.47,47:.64,51:.36,55:.29,56:.59
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

// 轉錄輔助站缺號時，直接依官方 PDF 人工補錄；圖形選項保留空字串並由官方頁影像呈現。
const officialFallbacks = {
  16: {
    stem: "假設氫原子中的質子位於 x 軸原點，則下列何者最接近電子所受靜電力 F 隨著位置 x 的變化？（令靜電力 F 朝 +x 方向為正值）",
    options: { A:"", B:"", C:"", D:"", E:"" }
  },
  20: {
    stem: "相圖是表示物質的狀態（常見有固態、液態、氣態）與溫度、壓力的關係圖，可得知熔點與沸點會隨著壓力而改變。圖 8 是化合物甲的相圖，表 2 列出化合物甲在 1.0 大氣壓下的一些物理性質。若取 20.0 克的甲，在 1.0 大氣壓下，由 0 ℃加熱至 150 ℃，則所需的熱量約是多少（kJ）？",
    options: { A:"4.2", B:"5.8", C:"7.4", D:"21.0", E:"29.0" }
  },
  36: {
    stem: "分子生物學發達前，圖 12 表示現生四足類合理的親緣關係之一。科學家在侏羅紀的地層發現一塊恐龍之長骨，並從骨腔中採樣。假設此採樣可獲得約 200 個鹼基對的 DNA 序列，若將此序列與現生生物之序列比對並推論之，則該恐龍最可能插入圖中的哪一分支，形成新的節點？",
    options: { A:"①", B:"②", C:"③", D:"④", E:"⑤" }
  },
  39: {
    stem: "Dmrt1 基因從「共同祖先」之祖先型演化出線蟲、昆蟲和魚類，乃至兩生類、爬蟲類、鳥類和哺乳類等不同衍生型的版本，形成一個基因族。發展至今，此基因族高度保守，而且其成員間能忠實反映類群演化的分子性狀。今以巴西龜的 Dmrt1 基因對青蛙、大鼠、蛇、蜥蜴、鱷魚及鳥的同源 DNA 做親緣分析，得圖 14，則下列圖示哪些合理？（應選 2 項）",
    options: { A:"", B:"", C:"", D:"", E:"" }
  },
  40: {
    stem: "根據圖 16 的結果，相較於野生型菸草，下列敘述何者錯誤？",
    options: {
      A:"不含尼古丁的花朵每天被蜂鳥到訪的數量較少",
      B:"缺乏苄丙酮或尼古丁及兩者都缺乏的花朵，蜂鳥停留時間變長",
      C:"花蜜不含尼古丁的基改型果實成熟率較低",
      D:"花蜜中只有苄丙酮的基改型被取食的量較多",
      E:"本結果已達成基改使果實成熟率提升的目的"
    }
  },
  41: {
    stem: "根據圖 16 結果，顯示苄丙酮與尼古丁對蜂鳥吸食花蜜有不同的影響，試推論其影響並說明推論理由。（4 分）",
    options: {}
  },
  47: {
    stem: "關於圖 17 汞原子能階之間的躍遷，下列何者可以發出波長為 365 nm 的 UV 光波？",
    options: { A:"E₁→E₃", B:"E₁→E₄", C:"E₂→E₄", D:"E₂→E₅", E:"E₃→E₄" }
  },
  52: {
    stem: "若設置圖 20 的水車發電機系統之海域每日有二次漲潮，平均每一次漲潮時經過水車發電機系統通道的海水體積 V 約為 2.5×10⁶ m³，這些海水因為漲潮而被抬升的平均高度 h 約為 4 m。取重力加速度 g＝10 m/s²，1 度電能＝1 kWh＝3.6×10⁶ J，海水密度 ρ 約為 10³ kg/m³。假設該設施將海水的重力位能轉為電能的效率約為 25%，則下列敘述哪些正確？（應選 2 項）",
    options: {
      A:"平均每一次漲潮，進入該水車發電機系統的海水重力位能增加 ρgh",
      B:"平均每一次退潮，該水車發電機系統轉換海水重力位能的數量級為百萬焦耳",
      C:"該海域每年漲潮次數約為 365 次",
      D:"該水車發電機系統每年產生電能約為 10⁷ 度",
      E:"該水車發電機系統的運作機制牽涉萬有引力的作用與電磁感應"
    }
  },
  53: {
    stem: "某同學用手帶動磁鐵相對於線圈運動，以模擬潮汐驅動圖 21 發電設施中磁鐵相對於線圈的運動，如圖 22 所示，並將線圈串接檢流計 G。依表 10 回答：（a）當 z＜0 時，說明研判感應電流 I 方向為正或負的理由。（b）考量感應電流量值較大的一列數據，說明研判其屬於 z＜0 或 z＞0 的理由。（c）描繪表 10 中所有 8 個數據點。（4 分）",
    options: {}
  },
  54: {
    stem: "若要透過定年方法來瞭解隕石的形成時間，請於表中勾選絕對不適合的放射性元素，並試由半衰期、母元素與子元素的測量限制來說明原因（20 字以內）？（4 分）",
    options: {}
  },
  56: {
    stem: "當隕石掉到地球表面時可能形成隕石坑，然而與地球相比，月球上有更多的隕石坑。若以相同的原理推論並參考表 12 的數據，以下行星中何者表面較容易發現隕石坑？",
    options: { A:"金星", B:"火星", C:"木星", D:"土星", E:"天王星" }
  }
};

async function fetchQuestion(no) {
  const response = await fetch(`${TRANSCRIPT_URL}${no}/x`);
  if (!response.ok) {
    if (officialFallbacks[no]) return officialFallbacks[no];
    throw new Error(`第 ${no} 題轉錄頁 HTTP ${response.status}`);
  }
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
    id: `學-115-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: typeof answer === "string" && answer.length > 1,
    written: answer == null,
    pages: pageMap.get(no).map(page => `img/official/115/page-${String(page).padStart(2, "0")}.jpg`),
    ...transcript,
    source: "大考中心 115 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  if (writtenKey.answers[String(no)]) q.referenceAnswer = writtenKey.answers[String(no)];
  return q;
});

const bank = {
  year: 115,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 56,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0q054346117821958325/06-115%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E5%8D%B7.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0Q064393450164866355/06-%E8%87%AA%E7%84%B6%E9%81%B8%E9%A0%85%E5%88%86%E6%9E%90.pdf",
    writtenAnswers: writtenKey.url
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n115.js"), output);
console.log(`BUILD_N115=PASS questions=${questions.length} choice=${questions.filter(q=>!q.written).length} written=${questions.filter(q=>q.written).length}`);
