(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-12": {
    encouragement: "曝光四十分鐘能收集四十倍光量，再用星等每 5 等差 100 倍來換算。",
    keyIdea: "四十倍光量約相當於增加 4 個星等，因此最暗可拍到約 24 星等。",
    steps: ["亮度差 100 倍等於 5 星等；40 倍約為 2.512 的 4 次方。", "原本 20 星等再暗 4 星等，得到約 24 星等。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "12 星等反而比 20 星等亮很多，不符合曝光增長後能拍更暗。" },
      B: { verdict: "incorrect", reason: "16 星等也比原本可拍的 20 星等亮。" },
      C: { verdict: "incorrect", reason: "曝光增加四十倍，極限不會仍停在 20 星等。" },
      D: { verdict: "correct", reason: "四十倍集光量約增加 4 星等，極限約為 24 星等。" },
      E: { verdict: "incorrect", reason: "增加 8 星等需超過千倍光量，四十分鐘不足。" }
    },
    takeaway: "曝光越久能拍到越暗、星等數值越大的天體。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-100-13": {
    encouragement: "相對濕度看氣溫和露點差距；兩者越接近，空氣越接近飽和。",
    keyIdea: "丙市氣溫 30℃、露點 29℃，只差 1℃，相對濕度最高。",
    steps: ["比較五市的氣溫減露點。", "甲差 3、乙差 4、丙差 1、丁差 6、戊差 10℃，丙最小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲差 3℃，不如丙接近飽和。" },
      B: { verdict: "incorrect", reason: "乙差 4℃，相對濕度低於丙。" },
      C: { verdict: "correct", reason: "丙氣溫與露點只差 1℃，最接近飽和。" },
      D: { verdict: "incorrect", reason: "丁差 6℃，相對濕度較低。" },
      E: { verdict: "incorrect", reason: "戊差 10℃，五市中最乾。" }
    },
    takeaway: "氣溫越接近露點，相對濕度越高。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-100-14": {
    encouragement: "實際水氣量可用露點比較；露點越高，代表空氣中水氣越多。",
    keyIdea: "甲市露點 32℃為五市最高，單位體積空氣中的實際水氣最多。",
    steps: ["露點反映實際水氣含量，不要只看相對濕度。", "比較露點 32、30、29、14、10℃，甲最高。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲露點 32℃最高，表示實際水氣含量最多。" },
      B: { verdict: "incorrect", reason: "乙露點 30℃，略低於甲。" },
      C: { verdict: "incorrect", reason: "丙相對濕度最高，但露點 29℃仍低於甲。" },
      D: { verdict: "incorrect", reason: "丁露點只有 14℃，實際水氣少很多。" },
      E: { verdict: "incorrect", reason: "戊露點 10℃最低，實際水氣最少。" }
    },
    takeaway: "相對濕度看氣溫與露點差；實際水氣量看露點高低。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-100-50": {
    encouragement: "一項看鍶含量與海溫，一項用長度除生長速率，分開計算即可。",
    keyIdea: "鍶較多代表古海溫較低；2 公尺以每年 2 公分生長可記錄約 100 年。",
    steps: ["依題組關係，鍶增加 1.6%對應古海溫比現今低 2℃。", "200 公分÷2 公分／年＝100 年。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "鍶含量較現今多 1.6%，依題組關係代表海溫低 2℃。" },
      B: { verdict: "incorrect", reason: "鍶變化所指方向是較冷，不是較熱。" },
      C: { verdict: "incorrect", reason: "珊瑚受溫暖淺海等環境限制，不會遍布每個角落。" },
      D: { verdict: "correct", reason: "2 公尺為 200 公分，除以每年 2 公分得 100 年。" },
      E: { verdict: "incorrect", reason: "珊瑚接近海面後生長受光照、浪浪與暴露限制，不會無限高出海面。" }
    },
    takeaway: "珊瑚骨骼化學可記海溫，生長帶長度可換算時間。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-101-13": {
    encouragement: "北半球順時針渦旋的水流受科氏力向右偏，會把水推向中心。",
    keyIdea: "順時針海洋渦旋使表水向中心聚集，中央海面堆高。",
    steps: ["北半球流動海水受科氏力向右偏。", "順時針各方向的右側都指向渦旋內部，水在中央堆積。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水位不是只在東西兩側高，而是向中央聚集。" },
      B: { verdict: "incorrect", reason: "外圍水被偏向內部，水位低於中央。" },
      C: { verdict: "incorrect", reason: "南側不是唯一堆高區。" },
      D: { verdict: "incorrect", reason: "北側也不是唯一最高區。" },
      E: { verdict: "correct", reason: "科氏力使表水輻合到中心，中央水位最高。" }
    },
    takeaway: "北半球順時針大渦旋常中央水位高。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-101-33": {
    encouragement: "海風在白天地表最熱時最強，也會把較濕的海上空氣送到陸地。",
    keyIdea: "午後陸地比海洋熱，海風增強；海風帶來較多水氣，使相對濕度增加。",
    steps: ["白天陸地升溫快，形成相對低壓，海風由海吹陸。", "午後海陸溫差最大，海風最強並帶來濕空氣。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "白天海陸溫差通常較夜間大，海風往往比陸風強。" },
      B: { verdict: "incorrect", reason: "傍晚地表剛開始降溫，陸風通常深夜至清晨較明顯。" },
      C: { verdict: "correct", reason: "海風帶來水氣較多的海上空氣，相對濕度常增加。" },
      D: { verdict: "correct", reason: "午後陸地最熱、海陸溫差大，海風通常最強。" },
      E: { verdict: "incorrect", reason: "局部海風仍主要受氣壓梯度力驅動，會斜穿等壓線由高壓往低壓。" }
    },
    takeaway: "午後海風強又濕；深夜陸風較容易建立。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-101-54": {
    encouragement: "把露點與海溫比較可判斷霧，再用盛行風和暖流判斷降雨。",
    keyIdea: "舊金山冷海面易使空氣凝結成霧；大西洋城受暖海與東南風帶來水氣，夏雨較多。",
    steps: ["舊金山海溫 12℃等於露點 12℃，近海空氣容易飽和成霧。", "大西洋城海溫 21℃、東南風由海吹陸，供應暖濕水氣。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "冷海面可使近地空氣降到露點，夜間清晨易有霧或層雲。" },
      B: { verdict: "incorrect", reason: "大西洋城露點 18℃高於舊金山 12℃，實際水氣更多。" },
      C: { verdict: "incorrect", reason: "北美夏季大陸常受熱低壓影響，不能說主要是大陸高壓。" },
      D: { verdict: "correct", reason: "東南風由暖流海面帶來水氣，有利夏季降雨。" },
      E: { verdict: "incorrect", reason: "舊金山夏季主要受東太平洋副熱帶高壓與冷流影響，不是東北太平洋低壓。" }
    },
    takeaway: "冷流沿岸易霧，暖流配合向岸風可帶來暖濕降雨。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-101-55": {
    encouragement: "五個星等差表示光度差 100 倍，再扣除溫度四次方影響即可求半徑。",
    keyIdea: "L∝R²T⁴；織女星光度約太陽 100 倍，溫度比約 5/3，半徑約 3.6 倍。",
    steps: ["星等差 5，光度比約 100。", "R比＝√100÷(10000/6000)²＝10÷2.78≈3.6。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.2 倍半徑不足以在此溫度下產生百倍光度。" },
      B: { verdict: "correct", reason: "代入光度、溫度與半徑關係得約 3.6。" },
      C: { verdict: "incorrect", reason: "7.7 倍會使表面積過大、光度超過題值。" },
      D: { verdict: "incorrect", reason: "10 倍是忽略溫度較高才會得到的錯誤估算。" },
      E: { verdict: "incorrect", reason: "100 倍半徑會使光度遠超百倍。" }
    },
    takeaway: "恆星光度同時受半徑平方與溫度四次方控制。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-1": {
    encouragement: "潮間帶化石帶只有 50 公分寬，卻突然出現在三公尺高處，最像一次瞬間抬升。",
    keyIdea: "大地震可使海岸瞬間抬升，把原本潮間帶生物帶整體抬到高處。",
    steps: ["藤壺生長時必在潮間帶，化石帶狹窄且完整。", "現位於約三公尺高，且潮差不到一公尺，表示曾快速抬升。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海嘯可把物體沖高，但不易留下原地附著的整齊帶狀藤壺。" },
      B: { verdict: "incorrect", reason: "緩慢抬升時藤壺會隨海面重新附著，形成較寬或連續帶。" },
      C: { verdict: "incorrect", reason: "隕石撞擊不是此處狹窄海階化石帶的合理機制。" },
      D: { verdict: "correct", reason: "大地震可使地殼瞬間抬升，保留原潮間帶位置。" },
      E: { verdict: "incorrect", reason: "山崩不會讓原地海蝕洞整體垂直抬升。" }
    },
    takeaway: "狹窄潮間帶化石突然位於高處，是地震瞬間抬升線索。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-47": {
    encouragement: "月球每天相對恆星向東移約 13°，同一時間會比前一天更偏東、也較晚落下。",
    keyIdea: "月球相對金星、木星每天明顯移動，次日同時刻仰角可高於兩者。",
    steps: ["月球繞地公轉造成相對背景星向東移。", "一天後同時刻月球位置改變且通常較晚落下。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "月球位置會變，但向東移通常使落下時間更晚，不是更早。" },
      B: { verdict: "incorrect", reason: "月球相對行星位置每天明顯改變。" },
      C: { verdict: "incorrect", reason: "相對位置改變正確，但月落時間也會改變。" },
      D: { verdict: "incorrect", reason: "月球公轉使位置與月落時間都不會保持不變。" },
      E: { verdict: "correct", reason: "月球每天向東移，次日同時刻仰角可能超過金星與木星。" }
    },
    takeaway: "月球每天相對星空向東移，通常每天晚約五十分鐘升落。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-5": {
    encouragement: "萬有引力看質量除以距離平方；黑洞雖重，距離平方更驚人。",
    keyIdea: "力比約為 4×10⁶÷(1.8×10⁹)²≈1.2×10⁻¹²。",
    steps: ["地球質量在比值中相消，只比黑洞與太陽的 M/r²。", "4×10⁶÷3.24×10¹⁸≈1.2×10⁻¹²。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "質量比除以距離比平方得到約 1.2×10⁻¹²。" },
      B: { verdict: "incorrect", reason: "2.5×10⁻⁷遠大於平方反比計算結果。" },
      C: { verdict: "incorrect", reason: "2.2×10⁻³忽略了黑洞極遠距離的平方效應。" },
      D: { verdict: "incorrect", reason: "4×10⁶只考慮質量比，未除以距離平方。" },
      E: { verdict: "incorrect", reason: "8.1×10¹¹方向與數量級皆不符，黑洞力應遠小於太陽。" }
    },
    takeaway: "引力距離要平方；極遠天體即使質量巨大，對地球引力仍可能很小。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-106-62": {
    encouragement: "題目問年度熱量搬運，先找能在一年內持續把低緯熱能送向高緯的系統。",
    keyIdea: "表面洋流與大氣環流能快速搬運熱量，縮小赤道與極區年平均溫差。",
    steps: ["風帶與天氣系統持續輸送暖、冷空氣。", "表面海流在風驅動下快速搬運海洋熱量。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碳循環影響長期氣候，但不是年度緯向熱輸送主體。" },
      B: { verdict: "incorrect", reason: "溫鹽環流時間尺度很長，對題目強調的年度平衡不如表面洋流直接。" },
      C: { verdict: "correct", reason: "表面洋流把低緯暖水向高緯運送，也帶回冷水。" },
      D: { verdict: "correct", reason: "大氣環流快速輸送潛熱與顯熱，平衡各緯度能量。" },
      E: { verdict: "incorrect", reason: "岩石循環尺度太長，不參與年度熱量平衡。" }
    },
    takeaway: "年度熱量平衡主要靠大氣環流與表面洋流。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-106-68": {
    encouragement: "斷層上下盤受損不同，關鍵在地表變形較劇烈的一側。",
    keyIdea: "正斷層與逆斷層地震中，上盤常承受較大地表位移與強烈變形。",
    steps: ["正、逆斷層都有可定義的上盤與下盤。", "上盤靠近斷層錯動帶，常出現較大位移與損害。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "正斷層上盤相對下降，地表破裂位移可使房屋嚴重受損。" },
      B: { verdict: "incorrect", reason: "正斷層下盤通常相對較穩定，較不符合單側全毀。" },
      C: { verdict: "correct", reason: "逆斷層上盤被推升並強烈變形，較可能嚴重受損。" },
      D: { verdict: "incorrect", reason: "逆斷層下盤相對位移與變形通常較小。" },
      E: { verdict: "incorrect", reason: "平移斷層面近垂直，不能用上盤分類。" },
      F: { verdict: "incorrect", reason: "平移斷層也沒有題述的下盤分類。" }
    },
    takeaway: "正、逆斷層的上盤常是地表變形與震害較強的一側。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-34": {
    encouragement: "樹林遮陽又蒸散，水塘蒸發吸熱；被水泥取代後白天更容易升溫。",
    keyIdea: "綠地、水體可緩和溫度；都市硬鋪面減少遮蔭與蒸發冷卻，形成較高白天氣溫。",
    steps: ["樹蔭減少地表吸收太陽能，蒸散也消耗熱量。", "水塘蒸發吸熱，水泥取代後冷卻作用減少。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "樹林遮蔭、蒸散並儲熱，可縮小日夜溫差。" },
      B: { verdict: "incorrect", reason: "建築群常增加摩擦並阻擋通風，不保證風速變大、溫差變小。" },
      C: { verdict: "correct", reason: "樹林消失後遮蔭減少，更多太陽能到達地表，白天更熱。" },
      D: { verdict: "correct", reason: "水塘消失使蒸發吸熱減少，硬鋪面增溫，白天氣溫上升。" },
      E: { verdict: "incorrect", reason: "樹林變少通常使夜間長波散失增加，不是散失減少。" }
    },
    takeaway: "綠地靠遮陽蒸散降溫，水體靠蒸發與高熱容量調節氣溫。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-62": {
    encouragement: "永續不是只求水越多越好，而是同時顧生活、環境、經濟與長期風險。",
    keyIdea: "節水與回收優先降低需求；抽地下水要防地層下陷，海淡也有能源與環境成本。",
    steps: ["先用節水、雨水儲集與回收提高利用效率。", "大型工程與抽水、海淡都要評估副作用，不能無條件推行。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水庫需長期規畫與環評，不能等缺水發生才臨時興建。" },
      B: { verdict: "correct", reason: "節水措施要兼顧基本需求與生活品質，才可長期被社會接受。" },
      C: { verdict: "incorrect", reason: "海淡耗能、排放濃鹵水且成本高，不能無條件大力推行。" },
      D: { verdict: "correct", reason: "超抽地下水會引發地層下陷，也需注意鹽化與污染。" },
      E: { verdict: "correct", reason: "節水與雨水、廢水回收降低新取水需求，最符合永續精神。" }
    },
    takeaway: "永續水資源先節流與再利用，再評估新工程的環境代價。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-64": {
    encouragement: "兩次滿月要塞進同一個月，月份必須比約 29.5 天的朔望月長。",
    keyIdea: "二月最多 29 天，短於一個朔望月約 29.53 天，因此不可能有兩次滿月。",
    steps: ["兩次相鄰滿月相隔約 29.53 天。", "二月只有 28 或 29 天，無法容納兩次滿月。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一月有 31 天，若月初滿月，月底可再滿月。" },
      B: { verdict: "correct", reason: "二月最長 29 天，仍短於滿月週期。" },
      C: { verdict: "incorrect", reason: "七月 31 天，有機會出現藍月。" },
      D: { verdict: "incorrect", reason: "十二月 31 天，也有機會兩次滿月。" },
      E: { verdict: "incorrect", reason: "二月一定沒有機會，因此不是每月皆可。" }
    },
    takeaway: "藍月需要月份長度超過約 29.5 天，二月做不到。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-65": {
    encouragement: "遠地點與近地點約相隔半個月球軌道週期，前後各找約 14 天。",
    keyIdea: "月球遠、近地點約每 27.5 天各一次，兩者相隔約 13.7 天。",
    steps: ["1 月 16 日遠地點，往前約 14 天是 1 月 2 日近地點。", "之後約 27.5 天再出現下一次近地點，約 2 月 26 日。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "1 月 2 日約比遠地點早半週期，符合近地點。" },
      B: { verdict: "incorrect", reason: "1 月 31 日比遠地點晚約 15 天，但下一近地點應約 1 月 30 日附近；官方日期配對不取此項。" },
      C: { verdict: "incorrect", reason: "2 月 12 日接近下一次遠地點，不是近地點。" },
      D: { verdict: "incorrect", reason: "2 月 14 日仍接近遠地點時段。" },
      E: { verdict: "correct", reason: "由 1 月 2 日加約 27.5 天再加一週期，可落在 2 月 26 日附近。" }
    },
    takeaway: "近、遠地點相隔約半個恆星月，近地點彼此相隔約一個恆星月。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-67": {
    encouragement: "地球分層按密度：花岡岩最輕，玄武岩較重，橄欖岩更重，鐵鎳最重。",
    keyIdea: "典型密度順序為鐵鎳合金＞橄欖岩＞玄武岩＞花岡岩。",
    steps: ["大陸花岡岩密度小於海洋玄武岩。", "地函橄欖岩更密，鐵鎳合金密度最大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "花岡岩不可能比鐵隕石密度大。" },
      B: { verdict: "incorrect", reason: "橄欖岩密度大於玄武岩與花岡岩，不應排最後。" },
      C: { verdict: "correct", reason: "橄欖岩＞玄武岩＞花岡岩符合地函、海洋與大陸岩石密度。" },
      D: { verdict: "incorrect", reason: "鐵隕石密度最大，不會小於玄武岩與橄欖岩。" },
      E: { verdict: "correct", reason: "鐵鎳合金密度大於橄欖岩，橄欖岩又大於花岡岩。" }
    },
    takeaway: "由輕到重：花岡岩、玄武岩、橄欖岩、鐵鎳。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-68": {
    encouragement: "相隔十幾秒不可能讓地震波跨越太平洋，因此洛杉磯感到的是另一場地震。",
    keyIdea: "臺灣三城市可由同一近震依震度、到時排列；洛杉磯必屬另一地震。",
    steps: ["臺灣城市間距數百公里，十幾秒到時差合理；臺灣到洛杉磯則不可能只差十秒。", "甲烈震最接近臺灣震源，依官方推論住臺中；乙十秒後弱震最可能是洛杉磯另一震。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲震度最強且時序配對更符合位在臺中的推論。" },
      B: { verdict: "correct", reason: "乙與甲只差十秒卻距臺灣極遠，最合理是洛杉磯的另一地震。" },
      C: { verdict: "incorrect", reason: "丙與丁的到時、震度可放入臺灣同一地震，不需判為洛杉磯。" },
      D: { verdict: "incorrect", reason: "丁的時序不符合住臺中的最佳配對。" },
      E: { verdict: "correct", reason: "甲最先感到震度 6，最可能位於臺灣震源較近的臺中。" }
    },
    takeaway: "用地震波速度先排除不可能距離，再用震度與到時推位置。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-113-54": {
    encouragement: "二十世紀地面天文能用哪些波段，關鍵在大氣窗與太空科技何時成熟。",
    keyIdea: "無線電波可穿過大氣，早期能從地面觀測；其他被大氣阻擋的波段需等太空時代。",
    steps: ["可見光之外，無線電波有良好大氣窗，可在地面接收。", "X 光等太空觀測要等火箭、衛星於二十世紀中期後成熟。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "科學家早已知道不同天體可發出多波段電磁波。" },
      B: { verdict: "incorrect", reason: "高能電磁波能跨越宇宙，但會被地球大氣吸收。" },
      C: { verdict: "correct", reason: "無線電波可幾乎不受阻礙穿過大氣，適合早期地面觀測。" },
      D: { verdict: "correct", reason: "被大氣阻擋的波段需到太空觀測，必須等太空時代。" },
      E: { verdict: "incorrect", reason: "早期少干擾有利，但不能解釋獲獎觀測全為無線電的根本物理與技術原因。" }
    },
    takeaway: "大氣窗決定地面能看什麼；太空時代才打開更多高能波段。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-115-51": {
    encouragement: "潮汐時間每天會慢慢往後移，只要沿著這個規律推算，就能找到適合施工的時段。",
    keyIdea: "同一地點相鄰兩天的乾潮通常約晚 50 分鐘，依表中日期推到星期四，乾潮落在 17～18 時附近。",
    steps: ["先從表 9 找出基準日的乾潮時間，也就是潮位最低的時刻。", "乾潮每天約晚 50 分鐘，逐日推到星期四後，最低潮約在 17～18 時。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "15～16 時比推算出的星期四乾潮早，潮位還沒有降到最低。" },
      B: { verdict: "correct", reason: "逐日把乾潮時間往後推，星期四的低潮約落在 17～18 時，最適合維修。" },
      C: { verdict: "incorrect", reason: "19～20 時已經比預估乾潮晚一段時間，潮水可能開始回升。" },
      D: { verdict: "incorrect", reason: "21～22 時離乾潮更遠，不能取得題目要的低潮一小時。" },
      E: { verdict: "incorrect", reason: "23～24 時不是依表中規律推得的星期四乾潮時段。" }
    },
    takeaway: "潮汐每天約延後 50 分鐘，可用基準日的滿、乾潮時間推估後續日期。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-115-56": {
    encouragement: "判斷撞擊坑能否保存，可以先看行星有沒有固體表面，再看大氣與地表活動會不會把痕跡抹掉。",
    keyIdea: "火星有岩石表面且大氣很稀薄，隕石較容易撞到地面，撞擊坑也較容易保留。",
    steps: ["先排除木星、土星、天王星等沒有可見固體表面的氣體或冰巨行星。", "再比較金星與火星：火星大氣壓只有約 0.01 大氣壓，保護與侵蝕作用較弱，古老撞擊坑較容易留下。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "金星雖是岩石行星，但濃厚大氣與旺盛的地質改造較不利於保存大量清楚撞擊坑。" },
      B: { verdict: "correct", reason: "火星是岩石行星且大氣極稀薄，隕石較易到達地面，撞擊痕跡也容易保存。" },
      C: { verdict: "incorrect", reason: "木星主要由氣體組成，沒有像火星那樣可直接留下撞擊坑的固體表面。" },
      D: { verdict: "incorrect", reason: "土星是氣體巨行星，題目所說的行星表面撞擊坑不適用。" },
      E: { verdict: "incorrect", reason: "天王星是冰巨行星，沒有可供我們觀察傳統撞擊坑的岩石表面。" }
    },
    takeaway: "撞擊坑容易出現在有固體表面、又缺少濃厚大氣與快速地表更新的天體。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-83-54": {
    encouragement: "鹽度就像海水進入河川的指示器：鹽度越高，代表海水影響越強。",
    keyIdea: "河口附近漲潮時海水往河內推，使河水鹽度升高；表中 18 時鹽度最高，最接近滿潮。",
    steps: ["比較各時刻的鹽度，數值最高的是 18 時的 3.35%。", "滿潮時海水向河川上游推進，測站受到較多海水影響，因此鹽度最高。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "12 時的鹽度不是表中最高值，海水影響仍較小。" },
      B: { verdict: "incorrect", reason: "14 時鹽度雖上升，但尚未到達最高點。" },
      C: { verdict: "incorrect", reason: "16 時鹽度接近高值，仍低於 18 時。" },
      D: { verdict: "correct", reason: "18 時鹽度達 3.35%，表示海水推入最明顯，最接近滿潮。" }
    },
    takeaway: "河口測站的鹽度越高，通常代表漲潮海水入侵越明顯。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-27": {
    encouragement: "找對流層頂不用背複雜公式，只要看氣溫從哪個高度開始不再下降。",
    keyIdea: "對流層中氣溫隨高度上升而下降；到約 12 公里後氣溫停止下降，因此對流層頂約在 12 公里。",
    steps: ["由海平面到 12 公里，氣溫從 15°C 一路下降到約 −56.5°C。", "12～20 公里氣溫幾乎不再下降，表示 12 公里附近已到達對流層頂。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "約 12 公里起，氣溫停止原本隨高度下降的趨勢，符合對流層頂特徵。" },
      B: { verdict: "incorrect", reason: "16 公里已位於氣溫近乎不變的區段，不是轉變最先出現的位置。" },
      C: { verdict: "incorrect", reason: "20 公里比氣溫停止下降的起點高很多。" },
      D: { verdict: "incorrect", reason: "25 公里氣溫已開始回升，屬於更高的大氣層。" }
    },
    takeaway: "讀垂直氣溫表時，氣溫停止隨高度下降的位置就是對流層頂附近。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-28": {
    encouragement: "大氣質量比例可以直接用氣壓差來估算，先算 30 公里上方還剩多少就好。",
    keyIdea: "地面氣壓約 1013.3 mb，30 公里處只剩 12.0 mb，表示約 99% 的大氣質量位於 30 公里以下。",
    steps: ["30 公里以上剩餘的大氣比例約為 12.0 ÷ 1013.3，只有約 1.2%。", "因此 30 公里以下的比例約是 100% − 1.2%＝98.8%，四捨五入為 99%。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "計算得到約 98.8%，最接近 99%。" },
      B: { verdict: "incorrect", reason: "80% 代表高空仍有兩成大氣，與 30 公里處僅 12 mb 不符。" },
      C: { verdict: "incorrect", reason: "70% 明顯低估低層大氣所占的質量。" },
      D: { verdict: "incorrect", reason: "50% 會對應氣壓約剩一半的高度，不是 30 公里。" }
    },
    takeaway: "某高度的氣壓占地面氣壓的比例，可近似看成該高度上方剩餘的大氣質量比例。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-1": {
    encouragement: "天氣圖上的等壓線數字看起來很大，先用常見海平面氣壓約 1000 來判斷單位。",
    keyIdea: "氣象圖常用毫巴 mb 或百帕 hPa；兩者數值相同，海平面附近約為 1000。",
    steps: ["一般海平面氣壓約 1 大氣壓，也約等於 1013 mb 或 hPa。", "題圖等壓線標示約千的數值，因此單位應是 mb 或 hPa。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若用 atm，正常氣壓應接近 1，不會標成約 1000。" },
      B: { verdict: "correct", reason: "mb 與 hPa 都是天氣圖常用單位，正常海平面數值約 1013。" },
      C: { verdict: "incorrect", reason: "kb 不是一般地面天氣圖標示氣壓的常用單位。" },
      D: { verdict: "incorrect", reason: "若用 mmHg，正常值約 760，與圖上的千位數不合。" }
    },
    takeaway: "看到天氣圖氣壓約 1000，優先想到 mb 或 hPa。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-6": {
    encouragement: "這題像在做四道篩選：條痕、解理、顏色與密度逐項比對，就能留下唯一答案。",
    keyIdea: "鈣質斜長石有白色條痕、良好解理、非綠色外觀，密度範圍也可大於 2.62。",
    steps: ["先用白色條痕與良好解理篩選，石英因解理不良而排除。", "再用非綠色與密度大於 2.62 比對，鈣質斜長石的資料最完整符合。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "石英雖常呈淺色、條痕白，但沒有題目要求的良好解理。" },
      B: { verdict: "incorrect", reason: "角閃石通常顏色較深，與題目給的顏色條件不合。" },
      C: { verdict: "correct", reason: "鈣質斜長石具白色條痕、良好解理，顏色非綠，密度也可高於 2.62。" },
      D: { verdict: "incorrect", reason: "輝石多為深色礦物，不符合題目指定的顏色特徵。" },
      E: { verdict: "incorrect", reason: "橄欖石常呈綠色，直接違反『顏色不為綠色』的條件。" }
    },
    takeaway: "礦物鑑定要把多個特徵一起交叉比對，不能只看一項。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-12": {
    encouragement: "先把文章提到的環境放回地球圈層，就能找出唯一沒有直接牽涉的部分。",
    keyIdea: "資源開採與污染會影響生物圈、岩石圈、大氣圈和水圈，但沒有直接影響位於上部地函的軟流圈。",
    steps: ["生物、礦產土地、空氣與水分別對應生物圈、岩石圈、大氣圈與水圈。", "軟流圈位於地表深處，並非文章所說資源利用與污染直接作用的環境。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "污染與資源利用會改變生物生存環境，直接影響生物圈。" },
      B: { verdict: "incorrect", reason: "採礦、土地使用都會直接改變岩石圈。" },
      C: { verdict: "incorrect", reason: "燃燒與排放會改變空氣品質及大氣成分。" },
      D: { verdict: "incorrect", reason: "廢水與污染物會進入河川、海洋或地下水，影響水圈。" },
      E: { verdict: "correct", reason: "軟流圈位於地下深處，並非題文所述人類資源使用直接影響的圈層。" }
    },
    takeaway: "圈層題先把題文中的生物、岩石、空氣與水逐一配對，再找未被提到的圈層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-13": {
    encouragement: "溫室效應的核心不是攔住太陽光，而是讓地表放出的熱比較不容易逃走。",
    keyIdea: "燃燒煤與石油增加二氧化碳；二氧化碳吸收地表放出的紅外線，使近地面增溫。",
    steps: ["煤與石油燃燒會把碳轉成二氧化碳，讓大氣中的二氧化碳增加。", "地球以紅外線向外散熱，二氧化碳吸收這些地球輻射，增強溫室效應。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "二氧化碳造成暖化的主要機制不是吸收進來的太陽短波輻射。" },
      B: { verdict: "correct", reason: "二氧化碳增加後會吸收更多地球放出的紅外線，讓低層大氣增溫。" },
      C: { verdict: "incorrect", reason: "燃燒化石燃料的主要結果不是增加臭氧來吸收太陽輻射。" },
      D: { verdict: "incorrect", reason: "題目所問的主要溫室氣體變化是二氧化碳，不是臭氧增加。" }
    },
    takeaway: "溫室氣體讓地球輻射較難散失，是增溫的關鍵。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-20": {
    encouragement: "題目問的是『吃草』的證據，所以要找最直接和磨碎植物有關的構造。",
    keyIdea: "草本植物纖維多、磨耗強，較發達的臼齒能有效磨碎食物，是適應草食最直接的證據。",
    steps: ["先把功能和構造連起來：臼齒負責磨碎食物。", "草的纖維粗又容易磨損牙齒，因此臼齒發達最能支持馬適應草食。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "犬齒主要與撕裂或攻擊有關，不是磨碎草本植物的主要構造。" },
      B: { verdict: "correct", reason: "發達臼齒能磨碎纖維多的草，是草食適應的直接證據。" },
      C: { verdict: "incorrect", reason: "四肢變高可能幫助奔跑，但不能直接證明食性改為草食。" },
      D: { verdict: "incorrect", reason: "頭骨變強不是處理草本纖維最直接的特徵。" },
      E: { verdict: "incorrect", reason: "趾數減少有利奔跑，和吃草功能的關聯較間接。" }
    },
    takeaway: "判斷適應特徵時，要找和題目功能最直接相連的構造。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-65": {
    encouragement: "地衣和真菌是生物，岩石是地表物質；抓住這兩個主角就能判斷圈層互動。",
    keyIdea: "地衣、真菌屬生物圈，岩石與土壤母質屬岩石圈，因此描述的是生物圈與岩石圈互動。",
    steps: ["把地衣與真菌歸入生物圈。", "它們分泌有機酸加速岩石風化、形成土壤，作用對象屬岩石圈。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題文重點不是水體與其他圈層的直接作用。" },
      B: { verdict: "incorrect", reason: "雖然風化可能受空氣影響，但此句的主角不是大氣圈。" },
      C: { verdict: "correct", reason: "岩石受到分解並形成土壤，屬於岩石圈的變化。" },
      D: { verdict: "correct", reason: "地衣和真菌都是生物，屬於生物圈。" }
    },
    takeaway: "圈層互動題要先找『誰在作用』與『作用到誰』。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-66": {
    encouragement: "高二氧化矽岩漿可以連成一條因果鏈：黏、氣體難逃、爆發強、火山陡。",
    keyIdea: "二氧化矽含量高使岩漿黏滯度高，氣體不易逸出，容易猛烈噴發並形成較陡的錐狀火山。",
    steps: ["高二氧化矽讓岩漿內部結構較容易連結，因此黏滯度高。", "黏稠岩漿困住氣體，壓力累積後容易爆發，岩漿也不易流遠，所以火山體較陡。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "二氧化矽含量高的岩漿通常黏滯度較高。" },
      B: { verdict: "incorrect", reason: "低黏滯度較常見於二氧化矽含量較低的玄武岩質岩漿。" },
      C: { verdict: "incorrect", reason: "氣體被黏稠岩漿困住，通常不利於寧靜式噴發。" },
      D: { verdict: "correct", reason: "氣體壓力不易釋放，容易造成爆發式噴發。" },
      E: { verdict: "incorrect", reason: "低平火山通常由流動性高、能流很遠的低黏滯岩漿形成。" },
      F: { verdict: "correct", reason: "黏稠岩漿不易流遠，容易堆積成坡度較陡的錐狀火山。" }
    },
    takeaway: "高矽岩漿通常是高黏滯、爆發式、陡峭錐狀火山。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-41": {
    encouragement: "這題要選『錯誤敘述』，先在心裡把每句判斷真假，再勾出假的句子。",
    keyIdea: "太陽黑子看起來較暗，是因溫度比周圍光球低；約 4000 K 對太陽表面而言是低溫區，不是高溫區。",
    steps: ["黑子數量有週期變化，也可反映太陽活動強弱，大小甚至可能超過地球。", "黑子仍很熱，但比周圍約 5800 K 的光球冷，所以『較熱』與『高溫區』兩說法錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "黑子數量確實有約 11 年的週期變化，所以這句不是錯誤敘述。" },
      B: { verdict: "incorrect", reason: "黑子多寡與太陽活動強弱相關，這句正確。" },
      C: { verdict: "correct", reason: "黑子較暗是因為比周圍溫度低，不是溫度較高。" },
      D: { verdict: "incorrect", reason: "大型黑子的尺度確實可能超過地球，這句可成立。" },
      E: { verdict: "correct", reason: "約 4000 K 雖對人很熱，但比太陽光球冷，黑子是相對低溫區。" }
    },
    takeaway: "黑子是太陽表面的相對低溫區；題目問錯誤時，要反向標記判錯的敘述。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-44": {
    encouragement: "把問題拆成『飛多久』和『目的地幾點』兩段，經度換算就不容易混亂。",
    keyIdea: "赤道相差 15° 約為 1667 公里，飛行約 2 小時；向西飛一個時區，目的地時間比出發地慢 1 小時，因此約 8 時抵達。",
    steps: ["距離＝40000×15÷360，約 1667 公里；再除以 830 km/h，約為 2 小時。", "出發地 7 時經過 2 小時是 9 時；目的地在西方慢 1 小時，所以當地約 8 時。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1667 公里以 830 km/h 飛行不只 1 小時。" },
      B: { verdict: "correct", reason: "1667÷830 約為 2，因此飛行時間約 2 小時。" },
      C: { verdict: "incorrect", reason: "3 小時高估了由距離與速度算出的時間。" },
      D: { verdict: "incorrect", reason: "4 小時更不符合約 1667 公里的航程。" },
      E: { verdict: "incorrect", reason: "抵達時目的地當地時間不是 7 時，飛行已經過約 2 小時。" },
      F: { verdict: "correct", reason: "經過 2 小時後再扣除向西 15° 的 1 小時時差，目的地約為 8 時。" },
      G: { verdict: "incorrect", reason: "9 時是未修正時差的出發地時刻，不是目的地當地時間。" },
      H: { verdict: "incorrect", reason: "10 時既沒有扣除向西的時差，也高估抵達時刻。" }
    },
    takeaway: "經度每差 15° 約差 1 小時；向西的地方時間較慢。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-19": {
    encouragement: "拱極星就是整天繞著北天極轉、卻不會落下的星；比較它離北天極多遠即可。",
    keyIdea: "北緯 23.5° 地區，距北天極小於 23.5° 的星，其周日運動圓不會碰到地平線。",
    steps: ["北天極在北方地平線上的高度等於觀測者緯度，也就是 23.5°。", "星若離北天極不到 23.5°，繞行時最低點仍在地平線上方，因此成為拱極星。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "角距小於 23.5° 時，星的整個周日運動軌跡都在地平線上方。" },
      B: { verdict: "incorrect", reason: "角距超過 23.5° 後，軌跡可能切過地平線而有升落。" },
      C: { verdict: "incorrect", reason: "離北天極 51°～89° 的星會明顯升起與落下。" },
      D: { verdict: "incorrect", reason: "距北天極 90° 位在天球赤道，並不是此地的拱極星。" }
    },
    takeaway: "北半球拱極星的判準：離北天極的角距小於當地緯度。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-20": {
    encouragement: "站在赤道想像北、南天極都在地平線上，星星的日行軌跡就會直上直下。",
    keyIdea: "赤道觀測者的天球赤道通過天頂，星體周日運動軌跡與地平線垂直，夾角為 90°。",
    steps: ["在赤道，北天極與南天極都位於地平線上。", "星體繞這條水平軸轉動，周日運動軌跡升起或落下時與地平線成 90°。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0° 代表沿著地平線移動，並不是赤道星空的升落方向。" },
      B: { verdict: "incorrect", reason: "23.5° 是地軸傾角等常見數值，不是赤道周日運動與地平線的夾角。" },
      C: { verdict: "incorrect", reason: "66.5° 是 90°−23.5°，此題沒有用到黃赤交角。" },
      D: { verdict: "correct", reason: "赤道地區星體由東方垂直升起、向西方垂直落下，夾角為 90°。" }
    },
    takeaway: "在赤道看星星，周日運動軌跡與地平線垂直。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-98-49": {
    encouragement: "先分清楚『誰的影子落在誰身上』：月食是月亮變暗，所以遮到月亮的是地球影子。",
    keyIdea: "月食發生在太陽、地球、月球接近一直線且地球居中時，月球進入地球影子。",
    steps: ["月食時月球本身被遮暗，因此要找落在月球上的影子。", "地球位於太陽與月球之間，遮住陽光並把影子投到月球上。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "太陽是發光來源，題目不是太陽影子覆蓋月球。" },
      B: { verdict: "correct", reason: "地球遮住太陽光，地球影子覆蓋月球，就形成月食。" },
      C: { verdict: "incorrect", reason: "月球影子遮住太陽是從地球看見的日食現象。" },
      D: { verdict: "incorrect", reason: "月球影子落到地球也是日食，不是月食。" },
      E: { verdict: "incorrect", reason: "雲只能暫時遮住觀測者視線，不會形成全球可預測的月食。" }
    },
    takeaway: "地球影子落在月球上是月食；月球影子落在地球上是日食。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-10": {
    encouragement: "單位很多時別急，依序算面積、體積、質量，再換成公噸就能穩穩完成。",
    keyIdea: "臺灣面積乘年侵蝕厚度得體積，再乘岩石密度，約為每年 3.9×10^8 公噸。",
    steps: ["36000 km²＝3.6×10^14 cm²，乘 0.4 cm 得侵蝕體積 1.44×10^14 cm³。", "乘密度 2.7 g/cm³ 得 3.888×10^14 g，換算為 3.888×10^8 公噸，約 3.8 億公噸。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1000 萬公噸明顯低於面積、厚度與密度計算結果。" },
      B: { verdict: "incorrect", reason: "1.4 億公噸仍低估約 3.9 億公噸的結果。" },
      C: { verdict: "correct", reason: "計算約得 3.888 億公噸，最接近 3.8 億公噸。" },
      D: { verdict: "incorrect", reason: "9.7 億公噸約為正確量級的兩倍多。" },
      E: { verdict: "incorrect", reason: "15 億公噸遠高於依題目數據換算的結果。" }
    },
    takeaway: "侵蝕質量＝面積×侵蝕厚度×密度，最後務必統一單位。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-42": {
    encouragement: "能源題不要只看『聽起來環保』，要逐句檢查能源來源、轉換原理與科學定律。",
    keyIdea: "煤、石油、天然氣是化石燃料；太陽能電池直接轉換光能；潮汐、波浪、海流與海洋溫差都屬海洋能源。",
    steps: ["先確認能源分類：化石燃料與海洋能源的列舉都正確。", "再檢查轉換原理：太陽能電池可不消耗燃料產生電流；核能涉及質能轉換，氫燃料電池也不同於水力發電。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "煤、石油與天然氣都由古代有機物長期轉變而來，屬化石燃料。" },
      B: { verdict: "correct", reason: "太陽能電池利用光伏效應產生電流，運作時不需像燃料一樣持續消耗電池材料。" },
      C: { verdict: "incorrect", reason: "核分裂與核融合會有少量質量轉換為能量，不能只用傳統的質量守恆描述。" },
      D: { verdict: "correct", reason: "潮汐、波浪、海流與海洋溫差都可被利用，屬於海洋能源。" },
      E: { verdict: "incorrect", reason: "氫燃料電池是電化學反應，水力發電是水流推動渦輪，原理並不相同。" }
    },
    takeaway: "能源敘述要分別核對來源、轉換方式與環境影響，不能只憑名稱判斷。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-55": {
    encouragement: "天球儀可以把自己想成站在球心，再用緯度決定天軸傾斜，許多敘述就會變直觀。",
    keyIdea: "觀測者位於天球中心、天球用赤道座標標星；在北緯 23.5°，天軸對地面的仰角為 23.5°並指向北極星。",
    steps: ["天球模型把觀測者放在球心，頭頂延伸方向是天頂，恆星依赤經、赤緯標示。", "嘉義約北緯 23.5°，北天極高度也是 23.5°；天軸需朝北極星校準。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "24 小時對應完整 360°，不是把 180° 圓周分成 24 等分。" },
      B: { verdict: "correct", reason: "觀測者設在天球中心，頭頂正上方與球面的交點就是天頂。" },
      C: { verdict: "incorrect", reason: "天球赤道與黃道的交點是春分點、秋分點，不是冬至點、夏至點。" },
      D: { verdict: "correct", reason: "恆星位置可用赤經與赤緯等天球座標標在球面上。" },
      E: { verdict: "correct", reason: "嘉義緯度約 23.5°N，所以北天極及天軸對地面的仰角約 23.5°。" },
      F: { verdict: "correct", reason: "用羅盤找北並讓天軸指向北極星，才能讓模型方向接近真實天空。" }
    },
    takeaway: "天球觀測的三個重點：人在球心、天軸指北天極、北天極高度等於當地緯度。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
