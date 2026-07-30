import { buildLegacy } from "./legacy-builder.mjs";

const questionNumbers = [
  ...Array.from({ length: 60 }, (_, index) => index + 1),
  ...Array.from({ length: 7 }, (_, index) => index + 81)
];

const topicByNo = {
  1: "池塘生態系", 2: "生物累積", 3: "熱帶雨林", 4: "ABO 血型",
  5: "食物消化", 6: "消化器官", 7: "血液循環", 8: "色盲遺傳",
  9: "性聯遺傳", 10: "酸雨", 11: "滲透作用", 12: "反射弧",
  13: "內分泌腺", 14: "光合作用", 15: "腎元", 16: "呼吸運動",
  17: "油母岩", 18: "火成岩", 19: "變質礦物", 20: "化石對比",
  21: "海底地形", 22: "轉形斷層", 23: "地震分布", 24: "低速帶",
  25: "地核狀態", 26: "大氣溫度結構", 27: "對流層頂", 28: "大氣壓力",
  29: "露點", 30: "望遠鏡解析力", 31: "恆星距離", 32: "恆星亮度",
  33: "赫伯定律", 34: "岩石判定", 35: "水的電解", 36: "氧化還原",
  37: "溫標", 38: "理想氣體", 39: "化學平衡", 40: "分子間作用力",
  41: "酸鹼滴定", 42: "相似相溶", 43: "電子質量", 44: "化學鍵能",
  45: "自由落體", 46: "力學能", 47: "大氣壓力", 48: "氣體定律",
  49: "薄透鏡", 50: "日光能量", 51: "聲速", 52: "聲音頻率",
  53: "聲波", 54: "並聯電路", 55: "電磁學史", 56: "氣體溶解度",
  57: "變壓器", 58: "原子構造", 59: "原子數量級", 60: "核分裂",
  81: "基因與細胞", 82: "亞佛加厥常數", 83: "週期表元素辨識",
  84: "週期表元素辨識", 85: "週期表元素辨識", 86: "週期表元素辨識",
  87: "週期表元素辨識"
};

function category(no) {
  if (no <= 16 || no === 81) return "B";
  if (no <= 34) return "E";
  if ((no >= 35 && no <= 44) || no >= 82) return "C";
  return "P";
}

const pageRanges = [
  [1, 5, 2], [6, 10, 3], [11, 14, 4], [15, 19, 5],
  [20, 24, 6], [25, 27, 7], [28, 33, 8], [34, 40, 9],
  [41, 47, 10], [48, 55, 11], [56, 60, 12],
  [81, 82, 13], [83, 87, 14]
];

const elementOptions = Object.fromEntries(
  Array.from({ length: 26 }, (_, index) => {
    const label = String.fromCharCode(65 + index);
    return [label, `元素代碼 ${label.toLowerCase()}`];
  })
);

const periodicPassage = "第 83–87 題為題組。題組以小寫英文字母代表週期表中的二十六個元素，請依官方原卷表三及十二項提示判斷各元素的代碼。";
const transcriptOverrides = {
  81: {
    options: {
      A: "醣類", B: "核酸", C: "脂肪酸", D: "蛋白質",
      E: "甲", F: "乙", G: "丙", H: "丁", I: "戊", J: "己"
    }
  },
  ...Object.fromEntries(
  [
    [83, "矽"],
    [84, "氮"],
    [85, "鎵"],
    [86, "溴"],
    [87, "硫"]
  ].map(([no, element]) => [no, {
    passage: periodicPassage,
    stem: `元素「${element}」所代表的代碼為何？`,
    options: elementOptions
  }])
  )
};

await buildLegacy({
  year: 84,
  duration: 100,
  questionNumbers,
  officialTextFile: "sources/official/84/84-natural-test-raw.txt",
  officialTextTransform: raw => raw.replace(
    /8\s+3\.矽\s+84\.氮\s+85\.鎵\s*\n86\.溴\s+87\.硫\s+88\.鈉\s+F/,
    "83. 矽\n84. 氮\n85. 鎵\n86. 溴\n87. 硫\n88. 鈉 F"
  ),
  imageOnlyQuestions: {
    6: ["A", "B", "C", "D"],
    12: ["A", "B", "C", "D"],
    26: ["A", "B", "C", "D"],
    49: ["A", "B", "C", "D"],
    83: Object.keys(elementOptions),
    84: Object.keys(elementOptions),
    85: Object.keys(elementOptions),
    86: Object.keys(elementOptions),
    87: Object.keys(elementOptions)
  },
  transcriptOverrides,
  topics: questionNumbers.map(no => topicByNo[no]),
  category,
  pageRanges,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0j076471086515691444/84%E5%B9%B4%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E7%A7%91.pdf",
    stats: "https://www.ceec.edu.tw/xmdoc/cont?sid=0J053505772779664324&xsmsid=0J018604485538810196"
  }
});
