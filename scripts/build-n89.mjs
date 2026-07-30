import { buildLegacy } from "./legacy-builder.mjs";

const questionNumbers = [
  ...Array.from({ length: 49 }, (_, index) => index + 1),
  ...Array.from({ length: 17 }, (_, index) => index + 61)
];

const topicByNo = {
  1: "細胞分裂與生物類群", 2: "著絲點辨識", 3: "細胞呼吸與能量", 4: "竹莖與形成層",
  5: "根部水分運輸", 6: "雙因子遺傳", 7: "突變與演化", 8: "肺泡氣體交換",
  9: "遺傳與環境", 10: "砂囊消化功能", 11: "有絲分裂順序", 12: "池塘生態系生產者",
  13: "造父變星週期", 14: "颱風與海水滿潮", 15: "冷鋒剖面", 16: "冬季日出方位",
  17: "變質礦物生成條件", 18: "梅雨天氣圖", 19: "天氣系統移動", 20: "台灣天氣型態",
  21: "地質年代與化石", 22: "岩脈相對年代", 23: "均變說", 24: "赫羅圖與恆星壽命",
  25: "酸鹼指示劑", 26: "蔬菜色素與酸鹼", 27: "離子交換樹脂", 28: "純水製備",
  29: "核子醫學", 30: "沸點鑑別", 31: "硝酸銀鑑別", 32: "核反應方程式",
  33: "氯及其化合物", 34: "化學電池", 35: "酸鹼滴定", 36: "斜面運動",
  37: "碰撞作用力", 38: "浮力與液體密度", 39: "水的相圖", 40: "聲波繞射",
  41: "折射與全反射", 42: "靜電感應", 43: "地球半徑估算", 44: "大氣質量估算",
  45: "電表與電路", 46: "陰極射線與X射線", 47: "映像管電視", 48: "質能互換",
  49: "載流導線受力", 61: "開放式循環", 62: "橫膈與呼吸", 63: "血糖調節激素",
  64: "孟德爾實驗材料", 65: "月球與地球觀測", 66: "家用清潔劑反應", 67: "氧化還原配平",
  68: "聲速與距離定位", 69: "電磁感應", 70: "腎臟功能", 71: "地震規模與震度",
  72: "P波速度估算", 73: "地震波比較", 74: "二氧化碳檢驗", 75: "天然氣成分",
  76: "不完全燃燒", 77: "乾電池串聯電路"
};

function category(no) {
  if (no <= 12 || [61, 62, 63, 64, 70].includes(no)) return "B";
  if ((no >= 13 && no <= 24) || [65, 71, 72, 73].includes(no)) return "E";
  if ((no >= 25 && no <= 35) || [66, 67, 74, 75, 76].includes(no)) return "C";
  return "P";
}

const pageRanges = [
  [1, 5, 2],
  [6, 9, 3],
  [10, 12, 4],
  [13, 15, 5],
  [16, 17, 6],
  [18, 22, 7],
  [23, 26, 8],
  [27, 29, 9],
  [30, 36, 10],
  [37, 41, 11],
  [42, 47, 12],
  [48, 49, 13],
  [61, 65, 13],
  [66, 69, 14],
  [70, 72, 15],
  [73, 77, 16]
];

const transcriptOverrides = {
  68: {
    stem: "一儲氣槽因不慎爆炸，小美位於圖 18 的甲地，先看到火光，5 秒後才聽到爆炸聲；小明位於乙地，看到火光後 10 秒才聽到爆炸聲。若聲速為 v₀ 公尺／秒，則爆炸的儲氣槽可能位於圖 18 的哪些方塊區？（應選二項）",
    options: Object.fromEntries("ABCDEFGHIJKLMNOPQRST".split("").map(label => [label, "圖示區域（請參照官方原卷）"]))
  },
  77: {
    stem: "地震後停電，小馬利用兩個 1.5V 乾電池及標示 3V、5W 的小燈泡自製簡易手電筒，下列哪些電路正確？（應選二項）",
    options: Object.fromEntries("ABCDE".split("").map(label => [label, "圖示選項（請參照官方原卷）"]))
  }
};

await buildLegacy({
  year: 89,
  duration: 100,
  questionNumbers,
  officialTextFile: "sources/official/89/89-natural-test-raw.txt",
  imageOnlyQuestions: {
    68: "ABCDEFGHIJKLMNOPQRST".split("")
  },
  transcriptOverrides,
  topics: questionNumbers.map(no => topicByNo[no]),
  category,
  pageRanges,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0j076475349569761568/89%E5%B9%B4%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E7%A7%91.pdf",
    stats: "https://www.ceec.edu.tw/xmdoc/cont?sid=0J053505772779664324&xsmsid=0J018604485538810196"
  }
});
