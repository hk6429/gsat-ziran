import { buildLegacy } from "./legacy-builder.mjs";

const questionNumbers = Array.from({ length: 69 }, (_, index) => index + 1);

const topicByNo = {
  1: "顯微鏡觀察", 2: "ABO 血型", 3: "中間型遺傳", 4: "減數分裂",
  5: "植物維管束", 6: "穩定群落", 7: "神經系統", 8: "生物累積",
  9: "血液循環", 10: "細菌生長", 11: "沉積岩", 12: "岩石組織",
  13: "空氣污染源", 14: "風向判讀", 15: "污染濃度曲線", 16: "地層對比",
  17: "地層傾斜", 18: "潮汐週期", 19: "地震波", 20: "地震定位",
  21: "恆星距離", 22: "恆星亮度", 23: "恆星顏色", 24: "清潔劑結構",
  25: "碳氮循環", 26: "酸性氣體", 27: "凝結與蒸發", 28: "化學品安全",
  29: "元素與原子", 30: "水分蒸發", 31: "金屬當量", 32: "氧化還原",
  33: "倍比定律", 34: "燃燒反應", 35: "水平拋射", 36: "合力判斷",
  37: "碰撞與動量", 38: "光的色散", 39: "波動", 40: "溫度",
  41: "熱傳導", 42: "能源轉換", 43: "複式顯微鏡", 44: "拮抗肌",
  45: "槓桿", 46: "肌肉收縮", 47: "光合作用", 48: "滲透作用",
  49: "光合作用實驗", 50: "地表輻射", 51: "高低氣壓", 52: "季風",
  53: "紅樹林適應", 54: "潮汐與鹽度", 55: "鹽度混合", 56: "折射率",
  57: "浮力", 58: "氣體反應", 59: "實驗隔絕空氣", 60: "分壓實驗",
  61: "氣體分壓", 62: "二氧化碳吸收", 63: "電磁波選台", 64: "三用電表",
  65: "電能", 66: "電器接地", 67: "電流磁效應", 68: "帶電粒子磁偏轉",
  69: "核能發電"
};

function category(no) {
  if (no <= 10 || (no >= 44 && no <= 49) || no === 53) return "B";
  if ((no >= 11 && no <= 23) || (no >= 50 && no <= 52) || no === 54) return "E";
  if ((no >= 24 && no <= 34) || no === 55 || (no >= 58 && no <= 62)) return "C";
  return "P";
}

const pageRanges = [
  [1, 7, 2], [8, 12, 3], [13, 16, 4], [17, 21, 5],
  [22, 31, 6], [32, 39, 7], [40, 46, 8], [47, 50, 9],
  [51, 55, 10], [56, 61, 11], [62, 69, 12]
];

const estuaryPassage = "第 53–57 題為綜合型題組。某河口附近如圖 18 所示。由於受潮水影響，河水一旦混入海水，則依二者混合比例不同，其鹽度也會不同；高低潮線之間為藻類、蟹類、紅樹林等多種生物的棲息地。";
const transcriptOverrides = Object.fromEntries(
  Array.from({ length: 5 }, (_, index) => [index + 53, { passage: estuaryPassage }])
);

await buildLegacy({
  year: 83,
  duration: 100,
  questionNumbers,
  officialTextFile: "sources/official/83/83-natural-test-raw.txt",
  officialTextTransform: raw => raw.slice(raw.indexOf("\f") + 1),
  imageOnlyQuestions: {
    10: ["A", "B", "C", "D"],
    15: ["A", "B", "C", "D"]
  },
  transcriptOverrides,
  topics: questionNumbers.map(no => topicByNo[no]),
  category,
  pageRanges,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0j076470638342632904/83%E5%B9%B4%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E7%A7%91.pdf",
    stats: "https://www.ceec.edu.tw/xmdoc/cont?sid=0J053505772779664324&xsmsid=0J018604485538810196"
  }
});
