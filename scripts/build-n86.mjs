import { buildLegacy } from "./legacy-builder.mjs";

const questionNumbers = Array.from({ length: 66 }, (_, index) => index + 1);

const topicByNo = {
  1: "地震規模與震度", 2: "赫羅圖與恆星直徑", 3: "晝夜溫差", 4: "大陸棚",
  5: "河口流況", 6: "礦物鑑定", 7: "地形先後關係", 8: "海底擴張速率",
  9: "海洋地殼年代", 10: "地層相對年代", 11: "火成岩鑑定", 12: "地球圈層",
  13: "溫室效應", 14: "動植物細胞", 15: "滲透作用", 16: "生物體內運輸",
  17: "組織微血管氣體交換", 18: "生殖與基因重組", 19: "孟德爾遺傳", 20: "腎元再吸收",
  21: "腎元濾液成分", 22: "鐮刀型貧血遺傳", 23: "家族譜系基因型", 24: "色盲遺傳",
  25: "族群與群落", 26: "葉片產氧", 27: "保衛細胞與氣孔", 28: "小腸絨毛養分",
  29: "小腸絨毛結構", 30: "量器讀值", 31: "元素週期表", 32: "鐵與鋼含碳量",
  33: "氫氧混合氣爆炸", 34: "酸鹼中和", 35: "粒子與電子數", 36: "鹼金屬",
  37: "碳的氧化態", 38: "臭氧與紫外線", 39: "水煤氣成分", 40: "水煤氣體積",
  41: "萬有引力反作用力", 42: "拋體運動軌跡", 43: "力學能守恆", 44: "理想氣體",
  45: "熱平衡", 46: "液體壓力", 47: "弦振動頻率", 48: "星球表面重力",
  49: "等速圓周運動", 50: "電池內電阻", 51: "電功率", 52: "電池電動勢",
  53: "載流導線磁力", 54: "冷凍循環", 55: "彩色電視電子束", 56: "能量轉換",
  57: "日月地相對位置", 58: "潮汐與颱風", 59: "植物細胞構造", 60: "乾冰作用力",
  61: "天氣圖風向", 62: "鋒面判讀", 63: "未知物質甲", 64: "未知物質乙",
  65: "未知物質丙", 66: "未知物質丁"
};

function category(no) {
  if (no <= 13 || [57, 58, 61, 62].includes(no)) return "E";
  if ((no >= 14 && no <= 29) || no === 59) return "B";
  if ((no >= 30 && no <= 40) || no === 60 || no >= 63) return "C";
  return "P";
}

const pageRanges = [
  [1, 4, 2],
  [5, 6, 3],
  [7, 8, 4],
  [9, 13, 5],
  [14, 17, 6],
  [18, 23, 7],
  [24, 29, 8],
  [30, 36, 9],
  [37, 42, 10],
  [43, 46, 11],
  [47, 53, 12],
  [54, 60, 13],
  [61, 62, 14],
  [63, 66, 15]
];

const imageOnlyQuestions = {
  5: ["A", "B", "C", "D"],
  14: ["A", "B", "C", "D"],
  42: ["A", "B", "C", "D"],
  43: ["A", "B", "C", "D", "E"],
  46: ["A", "B", "C", "D", "E"],
  53: ["A", "B", "C", "D"],
  63: [..."ABCDEFGHIJKL"],
  64: [..."ABCDEFGHIJKL"],
  65: [..."ABCDEFGHIJKL"],
  66: [..."ABCDEFGHIJKL"]
};

const unknownSubstancesPassage = "小琪發現實驗室藥品架上有四個裝未知物質的容器，老師給他一張可能的清單如表五所示：A：H₂、B：O₂、C：空氣、D：CO、E：CO₂、F：NO₂、G：1 M NaCl 水溶液、H：1 M KMnO₄ 水溶液、I：1 M NaOH 水溶液、J：1 M HCl 水溶液、K：1 M 醋酸水溶液、L：蒸餾水。小琪將四個容器分別標上甲、乙、丙、丁，並作了一些實驗：甲、乙是無色氣體；丙、丁是無色液體；乙及丁使藍石蕊試紙呈紅色，甲及丙則不變色；甲的平均分子量是 28±1；燃燒的蠟燭置入充滿甲的瓶中可繼續燃燒，置入充滿乙的瓶中則立即熄滅；燃燒的蠟燭立於盛水燒杯中，以充滿甲的瓶倒蓋後浸入水中，蠟燭熄滅時水面停止上升；將數滴 0.1 M 硝酸銀滴入丙及丁中，丙立刻產生白色沉澱，丁則無可見反應。";
const unknownSubstancesOptions = {
  A: "H₂",
  B: "O₂",
  C: "空氣",
  D: "CO",
  E: "CO₂",
  F: "NO₂",
  G: "1 M NaCl 水溶液",
  H: "1 M KMnO₄ 水溶液",
  I: "1 M NaOH 水溶液",
  J: "1 M HCl 水溶液",
  K: "1 M 醋酸水溶液",
  L: "蒸餾水"
};
const weatherPassage = "圖 14 為 1985 年 6 月 24 日 8 時的地面天氣圖，依據此天氣圖回答第 61–62 題。";

const transcriptOverrides = {
  28: {
    stem: "下列何種物質可在丁部位發現？",
    options: {
      A: "脂肪",
      B: "胺基酸",
      C: "雙醣",
      D: "葡萄糖"
    }
  },
  56: {
    stem: "下面有關各種形態的能量相互轉換的敘述中，哪一項是錯誤的？",
    options: {
      A: "家庭瓦斯爐將化學能轉換成熱能",
      B: "水力發電機將力學能轉換成電能",
      C: "飛機噴射引擎將電能轉換成力學能",
      D: "光合作用將光能轉換成化學能",
      E: "太陽電池將光能轉換成電能"
    }
  },
  58: {
    stem: "如果颱風來臨時正逢大潮，海水漲得特別高，河口區海水倒灌嚴重造成災害，試判斷當天的農曆日期與月相。（A–C 選一項，D–E 選一項）",
    options: {
      A: "農曆日期：十五前後",
      B: "農曆日期：初七、初八",
      C: "農曆日期：初一前後",
      D: "月相：滿月",
      E: "月相：弦月"
    }
  },
  61: {
    passage: weatherPassage,
    stem: "請問當時臺北（A–D 選一項）和蘭嶼（E–H 選一項）分別吹什麼風向的風？",
    options: {
      A: "臺北：南風",
      B: "臺北：西南風",
      C: "臺北：東北風",
      D: "臺北：東風",
      E: "蘭嶼：北風",
      F: "蘭嶼：西北風",
      G: "蘭嶼：東南風",
      H: "蘭嶼：南風"
    }
  },
  62: {
    passage: weatherPassage,
    stem: "位在日本外海至大陸東南部的鋒面是何種鋒面？（A–D 選一項）這個鋒面在一天內會如何移動？（E–G 選一項）",
    options: {
      A: "冷鋒",
      B: "暖鋒",
      C: "囚錮鋒",
      D: "滯留鋒",
      E: "向東南方移動",
      F: "向西北方移動",
      G: "滯留在原處"
    }
  },
  63: { passage: unknownSubstancesPassage, stem: "未知物質甲為何？", options: unknownSubstancesOptions },
  64: { passage: unknownSubstancesPassage, stem: "未知物質乙為何？", options: unknownSubstancesOptions },
  65: { passage: unknownSubstancesPassage, stem: "未知物質丙為何？", options: unknownSubstancesOptions },
  66: { passage: unknownSubstancesPassage, stem: "未知物質丁為何？", options: unknownSubstancesOptions }
};

await buildLegacy({
  year: 86,
  duration: 100,
  questionNumbers,
  officialTextFile: "sources/official/86/86-natural-test-raw.txt",
  imageOnlyQuestions,
  transcriptOverrides,
  topics: questionNumbers.map(no => topicByNo[no]),
  category,
  pageRanges,
  official: {
    test: "https://www.ceec.edu.tw/files/file_pool/1/0j076472161952510515/86%E5%B9%B4%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E7%A7%91.pdf",
    stats: "https://www.ceec.edu.tw/xmdoc/cont?sid=0J053505772779664324&xsmsid=0J018604485538810196"
  }
});
