import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const officialDir = path.join(root, "sources", "official", "114");
const answerKey = JSON.parse(await fs.readFile(path.join(officialDir, "answer-key.json"), "utf8"));
const writtenKey = JSON.parse(await fs.readFile(path.join(officialDir, "written-answers.json"), "utf8"));

// 刷題王只作為文字轉錄輔助；正式題面、答案與統計一律以專案內的大考中心原始 PDF 為準。
const TRANSCRIPT_URL = "https://www.shuati.tw/q/114_gsat_%E8%87%AA%E7%84%B6_";

const subjects = {
  E: "地球科學",
  P: "物理",
  C: "化學",
  B: "生物",
  X: "跨科整合"
};

const meta = {
  1:["B","細胞分裂","概念辨析"],2:["B","能量代謝","系統思考"],3:["B","細胞觀察","實驗操作"],
  4:["B","遺傳學","概念辨析"],5:["B","分子生物學","證據推理"],6:["B","生殖與發育","因果推論"],
  7:["B","演化與分類","親緣判讀"],8:["B","演化與分類","圖形判讀"],9:["B","基因表現","科學閱讀"],
  10:["E","天文與宇宙","分類判讀"],11:["E","天文與宇宙","電磁波"],12:["E","天文與宇宙","情境推理"],
  13:["E","氣候變遷","圖形判讀"],14:["E","地震與防災","空間推理"],15:["E","板塊構造","圖形判讀"],
  16:["E","岩石與板塊","概念辨析"],17:["E","海洋學","資料判讀"],18:["E","天文與宇宙","計算推理"],
  19:["P","圓周運動","萬有引力"],20:["P","能量與環境","量綱估算"],21:["P","能量與作功","計算推理"],
  22:["P","運動學","比例推理"],23:["P","波動與光","都卜勒效應"],24:["P","量子現象","能階判讀"],
  25:["P","量子現象","實驗推論"],26:["P","基本交互作用","概念辨析"],27:["P","電磁感應","生活應用"],
  28:["C","物質性質","概念辨析"],29:["C","化學實驗","實驗設計"],30:["C","分離技術","方法判斷"],
  31:["C","有機化學","化學計量"],32:["C","元素分析","計算推理"],33:["C","高分子","結構判讀"],
  34:["C","氣體溶解度","資料判讀"],35:["C","氧化還原","實驗推論"],36:["C","化學計量","計算推理"],
  37:["B","基因表現","資料判讀"],38:["B","基因表現","資料作圖"],39:["B","分子演化","證據推理"],
  40:["X","聖嬰現象","海氣交互作用"],41:["X","聖嬰現象","資料判讀"],42:["X","海洋生態系","系統思考"],
  43:["X","海洋生態系","因果連結"],44:["E","大氣與天氣","測量推理"],45:["E","颱風","圖表判讀"],
  46:["E","颱風","環流推理"],47:["P","電學","量綱判讀"],48:["P","電學","比例推理"],
  49:["P","電學","圖表計算"],50:["X","光觸媒","跨科整合"],51:["X","光觸媒","計算論證"],
  52:["X","光觸媒","氧化還原"],53:["C","光觸媒","圖表計算"],54:["C","化學反應式","符號表達"],
  55:["C","燃燒反應","資料判讀"],56:["C","烷類","線性推算"],57:["C","燃燒反應","化學計量"]
};

const pageMap = new Map([
  ...[1,2,3,4,5].map(n=>[n,[2]]), ...[6,7,8].map(n=>[n,[3]]), ...[9,10,11,12,13].map(n=>[n,[4]]),
  ...[14,15].map(n=>[n,[5]]), ...[16,17,18,19].map(n=>[n,[6]]), ...[20,21,22,23,24].map(n=>[n,[7]]),
  ...[25,26,27].map(n=>[n,[8]]), ...[28,29].map(n=>[n,[9]]), ...[30,31,32,33].map(n=>[n,[10]]),
  ...[34,35,36].map(n=>[n,[11]]), [37,[12]], [38,[12,13]], [39,[12,13]],
  [40,[14]], [41,[14]], [42,[14,15]], [43,[14,15]], [44,[15,16]], [45,[15,16]], [46,[15,16]],
  [47,[16,17]], [48,[16,17]], [49,[16,17]], [50,[18]], [51,[18]], [52,[18,19]], [53,[18,19]],
  [54,[18,19]], [55,[20]], [56,[20]], [57,[20]]
]);

// 大考中心工作報告選項分析表的 T 組答對率；多選題只有各選項畫記率，不能冒充整題得分率。
const singlePass = {
  1:.32,3:.43,7:.81,12:.55,13:.58,15:.71,17:.54,18:.60,20:.64,21:.43,22:.61,24:.65,
  25:.74,26:.56,27:.83,32:.59,34:.63,36:.56,45:.77,48:.56,55:.41
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

// 轉錄輔助站缺號時，直接依官方 PDF 補錄；圖形選項保留空字串，由官方頁影像呈現。
const officialFallbacks = {
  2: {
    stem: "圖 1 為一個封閉生態系統之示意圖，由甲及乙兩個子系統構成。一個子系統表示植物供給人食物、氧氣及淨水，另一個子系統表示人供給植物二氧化碳及代謝水，並消耗食物，因而達成此系統之平衡。有關此系統圖所表達之資訊，下列哪些正確？（應選 2 項）",
    options: {
      A:"甲子系統之示意為光合作用",
      B:"乙子系統中的 O₂ 是由 CO₂ 分解而來",
      C:"乙子系統在植物細胞葉綠體中進行",
      D:"甲子系統內箭號右側可加上「代謝能量」之輸出",
      E:"乙子系統表示光合作用，可加上「太陽熱能」的輸入"
    }
  },
  7: {
    passage: "2017 年古生物學家利用已有的恐龍化石，配合相關分類群的資料，重新建立恐龍分類群間的演化關係如圖 2，並建議以此重新決定恐龍的歸類範圍。",
    stem: "早期學者認為：「現生的麻雀和已滅絕的三角龍有一個最近的共同祖先；而此祖先所有的後代歸類為恐龍。」依圖 2，早期學者認為的恐龍應該從哪一個共同祖先開始算起？",
    options: { A:"丁", B:"戊", C:"己", D:"庚", E:"辛" }
  },
  8: {
    passage: "2017 年古生物學家利用已有的恐龍化石，配合相關分類群的資料，重新建立恐龍分類群間的演化關係如圖 2，並建議以此重新決定恐龍的歸類範圍。",
    stem: "若依據圖 2 的演化關係，艾雷拉龍、祿豐龍和梁龍也屬於恐龍類群，則下列演化分支圖哪些正確？（應選 3 項）",
    options: { A:"", B:"", C:"", D:"", E:"" }
  },
  13: {
    stem: "冬、夏溫差會影響冰原的面積，進而影響地球平均反照率，造成氣候改變。陸地面積、與太陽的距離、以及黃赤交角的大小都可能影響冬、夏溫差。如果地表海陸分布的情況與現今相同，地球自轉及公轉在下列何種情形下，會在南半球或北半球出現最大的冬、夏溫差？",
    options: { A:"", B:"", C:"", D:"", E:"" }
  },
  38: {
    stem: "研究者將原先畜養於 28℃ 淡水池和鹹水池的虱目魚移至 18℃，逐時測量 RGN mRNA 相對量。（a）依表 2 數據，在圖 9 乙補足養殖池乙的變化趨勢。（b）綜合圖 8 與圖 9 甲，判斷圖 9 甲來自哪種養殖池並說明理由。（4 分）",
    options: {}
  },
  40: {
    stem: "依圖 10 的太平洋葉綠素濃度灰階圖回答：（a）圖 10 甲為聖嬰或反聖嬰年？（b）圖 10 甲中美國本土西岸近海的葉綠素濃度高或低？（c）該區葉綠素濃度主要受何種海水運動影響？（4 分）",
    options: {}
  },
  43: {
    stem: "依文本及上題資訊，以直線連接表層營養鹽、二氧化碳、磷蝦（消費者生物量）、鯨魚排泄物（鐵離子）等因子，與「使葉綠素濃度或顏色提升／下降」的影響。（4 分）",
    options: {}
  },
  46: {
    stem: "依康芮颱風情境回答：（a）形成其幾近直接朝向臺灣路徑的主要天氣系統。（b）颱風由東南往西北通過蘭嶼前後，當地主要風向的變化。（c）若與南海同緯度另一颱風產生藤原效應，康芮移動路徑應往哪一方向修正？（4 分）",
    options: {}
  },
  49: {
    stem: "圖 15 為細胞膜 Na⁺ 通道導通時的簡化直流電路，圖 16 為 Iₙₐ－V 實驗數據與趨勢線。已知 V＝Eₙₐ＋IₙₐRₙₐ，分析並計算（a）平衡電壓 Eₙₐ，（b）電阻值 Rₙₐ。（4 分）",
    options: {}
  },
  51: {
    stem: "（a）欲啟動未摻雜二氧化鈦光觸媒的催化反應，可允許的最長波長約為多少 nm？（b）摻雜少量鋅離子後，恰可用波長 400 nm 的光激發催化，判斷能隙相對 3.2 eV 的變化並說明理由。（4 分）",
    options: {}
  },
  53: {
    stem: "圖 17 顯示不同照光時間下，每克觸媒催化所產生的氫氣量。使用 1.0 克觸媒、照光 6 小時時，Zn-TiO₂ 的氫氣生成量為 TiO₂ 的幾倍？（2 分）",
    options: {}
  },
  54: {
    stem: "四氯化鈦與水反應生成二氧化鈦，同時生成氯化氫。寫出係數為最簡整數的化學反應式。（2 分）",
    options: {}
  },
  56: {
    stem: "（a）根據表 3 推測丙烷分子式並計算分子量。（b）假設莫耳燃燒熱與烷類碳數大致呈線性關係，列式推算丙烷的莫耳燃燒熱。（4 分）",
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
for (let start = 1; start <= 57; start += 8) {
  const batch = [];
  for (let no = start; no < Math.min(start + 8, 58); no += 1) batch.push(fetchQuestion(no));
  transcripts.push(...await Promise.all(batch));
}

const questions = transcripts.map((transcript, index) => {
  const no = index + 1;
  const [cat, ...tags] = meta[no];
  const answer = answerKey.answers[String(no)];
  const q = {
    no,
    id: `學-114-${no}`,
    cat,
    subject: subjects[cat],
    tags,
    answer,
    multi: typeof answer === "string" && answer.length > 1,
    written: answer == null,
    pages: pageMap.get(no).map(page => `img/official/114/page-${String(page).padStart(2, "0")}.jpg`),
    ...transcript,
    source: "大考中心 114 學年度學測自然考科試題"
  };
  if (singlePass[no] != null) q.pass = singlePass[no];
  if (writtenKey.answers[String(no)]) q.referenceAnswer = writtenKey.answers[String(no)];
  return q;
});

const bank = {
  year: 114,
  era: "學測",
  subject: "自然",
  duration: 110,
  questionCount: 57,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0p080497875174268441/114%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E8%A9%A6%E9%A1%8C%E5%AE%9A%E7%A8%BF.pdf",
    answers: answerKey.url,
    stats: "https://www.ceec.edu.tw/files/file_pool/1/0p188512837190430548/114%E5%AD%B8%E5%B9%B4%E5%BA%A6%E5%AD%B8%E7%A7%91%E8%83%BD%E5%8A%9B%E6%B8%AC%E9%A9%97%E5%B7%A5%E4%BD%9C%E5%A0%B1%E5%91%8A%28%E5%85%AC%E5%91%8A%29_114.07.pdf",
    writtenAnswers: writtenKey.url
  },
  questions
};

const output = `window.BANK = window.BANK || [];\nwindow.BANK.push(${JSON.stringify(bank, null, 2)});\n`;
await fs.writeFile(path.join(root, "data", "n114.js"), output);
console.log(`BUILD_N114=PASS questions=${questions.length} choice=${questions.filter(q=>!q.written).length} written=${questions.filter(q=>q.written).length}`);
