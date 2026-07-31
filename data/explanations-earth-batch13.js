(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-90-6": {
    encouragement: "油氣要能儲存，需有多孔隙儲集層和低孔隙蓋層，還要有封閉構造。",
    keyIdea: "圖中甲為緻密蓋層、乙為多孔隙儲集層，褶皺造成構造封閉。",
    steps: ["比較岩性，甲需阻擋油氣，孔隙率小於乙。", "油氣聚集在彎曲岩層頂部，屬構造封閉。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲若孔隙率較大便不利封閉，且圖示為構造封閉。" },
      B: { verdict: "incorrect", reason: "構造封閉正確，但甲孔隙率應小於乙。" },
      C: { verdict: "incorrect", reason: "孔隙率關係正確，但封閉來自褶皺構造，不是地層尖滅。" },
      D: { verdict: "correct", reason: "低孔隙甲作蓋層，高孔隙乙儲油氣，褶皺形成構造封閉。" }
    },
    takeaway: "油氣藏需要儲集層、蓋層與封閉構造。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-12": {
    encouragement: "溶氧越高代表污染越輕，先把曲線高低翻成污染程度即可。",
    keyIdea: "1980 年甲橋附近溶氧高於 1900 年，表示污染較輕。",
    steps: ["題目給定溶氧與污染成反比。", "比較甲橋附近三年曲線，1980 年溶氧較 1900 年高。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1900 年溶氧較高時污染應較輕，不是較嚴重。" },
      B: { verdict: "incorrect", reason: "三年曲線並非一路持續改善，不能推論單調趨勢。" },
      C: { verdict: "correct", reason: "1980 年溶氧較高，依反比關係表示污染比 1900 年輕。" },
      D: { verdict: "incorrect", reason: "污染與距橋遠近不是固定單調關係，還受污染源與自淨作用影響。" }
    },
    takeaway: "水中溶氧低常表示有機污染較嚴重。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-91-14": {
    encouragement: "溫鹽圖上若兩群資料各自聚成不同帶，通常代表不同來源的水團。",
    keyIdea: "南海與黑潮的溫鹽關係形成兩組不同曲線，顯示是不同水團。",
    steps: ["同一水團具有相對穩定的溫鹽特徵。", "圖中南海與黑潮資料帶分離，所以可分成兩個水團。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鹽分會增加海水密度，海水密度大於純水。" },
      B: { verdict: "incorrect", reason: "正式曲線顯示鹽度變化幅度並非南海較大。" },
      C: { verdict: "correct", reason: "兩組溫鹽曲線不同，表示水體來源與性質不同。" },
      D: { verdict: "incorrect", reason: "高於 20°C 時，圖中黑潮鹽度並非一律低於南海。" }
    },
    takeaway: "溫度與鹽度像水團的身分證。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-91-54": {
    encouragement: "颱風在臺灣西南方時，北半球逆時鐘環流會讓臺北吹東南風。",
    keyIdea: "依報導與路徑，臺北位於低壓中心東北側，風由東南吹來。",
    steps: ["北半球低壓近地面逆時鐘旋入。", "把臺北放在納莉颱風中心東北側，得到東南風。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "東北風不符合中心東北側的逆時鐘環流切向。" },
      B: { verdict: "incorrect", reason: "西北風通常出現在低壓中心西南側附近。" },
      C: { verdict: "incorrect", reason: "西南風對應中心東南側，與當時位置不符。" },
      D: { verdict: "correct", reason: "臺北在中心東北側，逆時鐘環流帶來東南風。" }
    },
    takeaway: "先定位颱風中心，再用逆時鐘環流判風向。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-92-17": {
    encouragement: "箭頭方向不同不一定代表整塊板塊旋轉，還要看是否只是圖面上的局部運動分量。",
    keyIdea: "圖中非洲板塊箭頭不能據此推成順時鐘旋轉，因此 D 錯誤。",
    steps: ["東非裂谷、紅海與亞丁灣都顯示張裂，可長期擴大。", "非洲板塊兩箭頭的局部方向不足以證明整體順時鐘旋轉。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "持續張裂確可能使東非次板塊與非洲大陸分離。" },
      B: { verdict: "incorrect", reason: "兩側相對分離可解釋亞丁灣為張裂產物。" },
      C: { verdict: "incorrect", reason: "紅海若持續張裂，長期可擴大成更寬廣海洋。" },
      D: { verdict: "correct", reason: "題目要選錯誤；局部箭頭不能直接判定非洲板塊順時鐘旋轉。" }
    },
    takeaway: "板塊運動要看相對運動，不能只憑兩支箭頭猜整體旋轉。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-51": {
    encouragement: "兩行星最接近時，要讓火星靠近太陽、地球離太陽較遠，兩者又位於同側。",
    keyIdea: "火星近日點加地球遠日點，能讓兩條軌道上的實際間距最小。",
    steps: ["火星在近日點時向內靠近地球軌道。", "地球在遠日點時向外靠近火星軌道，兩者距離最小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地球近日點會離火星軌道更遠。" },
      B: { verdict: "incorrect", reason: "火星遠日點使它離地球軌道更遠。" },
      C: { verdict: "correct", reason: "火星近日點、地球遠日點讓兩軌道間距最小。" },
      D: { verdict: "incorrect", reason: "地球位置也會影響兩行星距離。" },
      E: { verdict: "incorrect", reason: "火星位置同樣不能忽略。" }
    },
    takeaway: "行星最近距離同時受兩者軌道位置影響。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-65": {
    encouragement: "直接在深度小於 0.5 公里的區域比較兩條孔隙率曲線即可。",
    keyIdea: "正式圖中淺部砂岩曲線位於粉砂岩左側，孔隙率較小。",
    steps: ["鎖定深度 0～0.5 公里。", "同深度讀圖，砂岩孔隙率低於粉砂岩。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.5 公里處砂岩不大於粉砂岩。" },
      B: { verdict: "incorrect", reason: "題圖的判讀重點是小於 0.5 公里的整段，不只單點。" },
      C: { verdict: "incorrect", reason: "淺部砂岩曲線沒有位在較高孔隙率側。" },
      D: { verdict: "incorrect", reason: "兩條曲線在淺部並不重合。" },
      E: { verdict: "correct", reason: "深度小於 0.5 公里時，砂岩孔隙率較粉砂岩小。" }
    },
    takeaway: "比較曲線要固定同一深度再讀數。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-66": {
    encouragement: "曲線隨深度改變得越快，斜率越大，孔隙率變化率也越大。",
    keyIdea: "粉砂岩孔隙率曲線下降較陡，隨埋深壓密的變化率較大。",
    steps: ["比較相同深度範圍內兩曲線的水平位移。", "粉砂岩孔隙率減少量較大，因此變化率較大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "砂岩曲線隨深度變化較緩。" },
      B: { verdict: "correct", reason: "粉砂岩曲線變化較陡，孔隙率變化率較大。" },
      C: { verdict: "incorrect", reason: "兩條曲線斜率不同。" },
      D: { verdict: "incorrect", reason: "圖中沒有在 0.5 公里前後互換大小的趨勢。" },
      E: { verdict: "incorrect", reason: "此分段描述也不符合正式曲線。" }
    },
    takeaway: "曲線斜率可表示物理量隨深度的變化快慢。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-67": {
    encouragement: "把圖上兩種岩石的孔隙體積讀出後相除，就能得到倍數。",
    keyIdea: "正式圖與題設換算得到其中一者孔隙體積約為另一者 1.75 倍。",
    steps: ["由曲線讀取指定深度的兩種孔隙率。", "孔隙體積＝岩石總體積×孔隙率，相除約得 1.75。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.3 倍明顯低於依孔隙率換算結果。" },
      B: { verdict: "incorrect", reason: "0.57 是 1.75 的倒數，顛倒了比較順序。" },
      C: { verdict: "incorrect", reason: "1.2 倍低估兩者孔隙體積差。" },
      D: { verdict: "correct", reason: "依正式曲線與體積條件換算，比例約 1.75 倍。" },
      E: { verdict: "incorrect", reason: "3 倍高估圖示差距。" }
    },
    takeaway: "孔隙體積＝總體積×孔隙率，注意題目比較順序。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-49": {
    encouragement: "海底擴張速率就是距離除以年代，注意把百萬年換成題目單位。",
    keyIdea: "由正式磁條帶圖讀得約 100 公里對 4 千萬年，速率約 2.5 公里／百萬年。",
    steps: ["讀中洋脊到指定年代海底的距離與時間。", "距離除以時間約為 2.5，選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "50 高估海床在指定年代移動距離。" },
      B: { verdict: "incorrect", reason: "25 仍比圖示速率大一個數量級。" },
      C: { verdict: "incorrect", reason: "5 約為正確值兩倍。" },
      D: { verdict: "correct", reason: "依距離與年代相除，平均速率約 2.5。" },
      E: { verdict: "incorrect", reason: "0.5 低估海底擴張速率。" }
    },
    takeaway: "擴張速率＝離脊距離÷海底年齡。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-50": {
    encouragement: "在磁條帶上找最近一次極性改變，再把百萬年換算成年。",
    keyIdea: "正式圖最近的反轉界線約 0.4 百萬年前，即 40 萬年前。",
    steps: ["由中洋脊中央往外找灰白第一次交界。", "圖上年代約 0.4 Ma，換算為 40 萬年。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 萬年比圖示最近反轉年代年輕太多。" },
      B: { verdict: "correct", reason: "0.4 百萬年就是 40 萬年。" },
      C: { verdict: "incorrect", reason: "100 萬年已超過最近反轉界線。" },
      D: { verdict: "incorrect", reason: "200 萬年對應更外側古老海底。" },
      E: { verdict: "incorrect", reason: "400 萬年遠老於圖中的最近反轉。" }
    },
    takeaway: "1 百萬年等於 100 萬年。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-51": {
    encouragement: "若古地磁方向和現在相同，羅盤所指磁極方向也和現代一致。",
    keyIdea: "灰色磁條代表正常磁極期，磁場方向與現今地球自轉方向關係相同。",
    steps: ["題圖說灰色代表與現在地磁方向相同。", "因此該時期磁場相對自轉的方向也與現在相同。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "正常磁極期的地磁方向與現今相同。" },
      B: { verdict: "incorrect", reason: "這描述的是反向磁極期。" },
      C: { verdict: "incorrect", reason: "地磁軸方向不能簡化成從地理南極到北極的表面箭頭。" },
      D: { verdict: "incorrect", reason: "同樣混淆地理極與題目所比的自轉方向。" }
    },
    takeaway: "海底磁條保存地磁正常與反轉時期。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-52": {
    encouragement: "聲波往返時間要先除以二，再乘上海水聲速。",
    keyIdea: "正式脈衝圖的往返時間配合 1500 m/s，水深約 500 m。",
    steps: ["從發射到反射訊號讀出往返時間。", "水深＝聲速×往返時間÷2，約 500 m。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "300 m 低於依往返時間計算值。" },
      B: { verdict: "correct", reason: "代入圖示時間並除以二，約得 500 m。" },
      C: { verdict: "incorrect", reason: "760 m 與脈衝間隔不符。" },
      D: { verdict: "incorrect", reason: "988 m 高估水深。" },
      E: { verdict: "incorrect", reason: "4940 m 遠超過圖中聲波往返時間所示。" }
    },
    takeaway: "回聲測深一定要把往返距離除以二。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-53": {
    encouragement: "這題同樣抓住聲波來回：六秒走的是上下兩趟。",
    keyIdea: "發射與反射峰相差約 6 秒，水深＝1500×6÷2＝4500 公尺。",
    steps: ["正式圖讀出同一脈衝發射與回波相差約 6 秒。", "1500×6÷2＝4500 m。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1500 m只相當於約 2 秒往返。" },
      B: { verdict: "incorrect", reason: "3000 m需要約 4 秒往返。" },
      C: { verdict: "correct", reason: "6 秒往返對應單程 4500 m。" },
      D: { verdict: "incorrect", reason: "9000 m忘了將往返距離除以二。" },
      E: { verdict: "incorrect", reason: "15000 m與圖示回波時間不符。" }
    },
    takeaway: "聲納距離＝聲速×時間÷2。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-63": {
    encouragement: "直接比較圖中各季節事件的點數，颱風雨期最多。",
    keyIdea: "1950～2003 年間 130～200 mm 的事件，以 7～9 月颱風雨期出現最多。",
    steps: ["依正式統計圖把事件按四個降雨期分類。", "颱風雨期的資料點數最多。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "春雨期事件數少於颱風雨期。" },
      B: { verdict: "incorrect", reason: "梅雨期雖有豪雨，但數量不是最多。" },
      C: { verdict: "correct", reason: "圖中颱風雨期事件出現次數最多。" },
      D: { verdict: "incorrect", reason: "秋雨期點數較少。" }
    },
    takeaway: "臺灣強降雨常集中在颱風季。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-64": {
    encouragement: "這題要讀年份與雨量高低，不只數事件次數。",
    keyIdea: "正式統計圖中 1977 年的平均日降雨量最高。",
    steps: ["找所有資料點中垂直位置最高者。", "最高點對應年份為 1977 年。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "秋雨期在圖中不只一次。" },
      B: { verdict: "correct", reason: "1977 年資料點的平均日降雨量最高。" },
      C: { verdict: "incorrect", reason: "1975 年後仍可見非颱風雨期事件。" },
      D: { verdict: "incorrect", reason: "圖中春雨與梅雨不能概括成春雨一定較大。" }
    },
    takeaway: "讀散點統計要分清楚次數、年份與數值大小。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-22": {
    encouragement: "熱點固定、板塊移動，所以離現今熱點越遠的火山島越老。",
    keyIdea: "從 4、3、2 到主島 1，年齡逐漸變年輕，正式選項 C 符合。",
    steps: ["主島 1 正位在仍活動的熱點上，年齡最年輕。", "沿火山鏈遠離主島，島嶼離開熱點越久、年齡越老。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "曲線沒有呈現由老島向主島逐漸變年輕。" },
      B: { verdict: "incorrect", reason: "圖示趨勢或排序與熱點模型不符。" },
      C: { verdict: "correct", reason: "正式圖 C 顯示 4→3→2→1 年齡逐步下降。" },
      D: { verdict: "incorrect", reason: "年齡不會在中途任意反轉。" },
      E: { verdict: "incorrect", reason: "各島不會同齡，因形成後板塊持續移動。" }
    },
    takeaway: "熱點火山鏈可記錄板塊移動方向與時間。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-23": {
    encouragement: "中秋是滿月，月球位在地球背向太陽的一側。",
    keyIdea: "正式位置甲位於日地連線外側，地球看見月球全亮面。",
    steps: ["中秋月相是望、也就是滿月。", "滿月時地球在太陽與月球之間，對應甲。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲位於地球背日側，從地球看是滿月。" },
      B: { verdict: "incorrect", reason: "乙對應弦月位置。" },
      C: { verdict: "incorrect", reason: "丙靠近日月同側，接近新月。" },
      D: { verdict: "incorrect", reason: "丁是另一弦月位置。" }
    },
    takeaway: "滿月時排列近似太陽—地球—月球。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-24": {
    encouragement: "月食只能發生在滿月附近，所以位置和上一題相同。",
    keyIdea: "月偏食時月球進入地球影子，必須在地球背日側的甲。",
    steps: ["月食需要地球位於太陽與月球之間。", "正式圖中滿月位置是甲，因此選 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲在地球背日側，月球可能進入地影發生月偏食。" },
      B: { verdict: "incorrect", reason: "弦月時日地月近直角，不能發生月食。" },
      C: { verdict: "incorrect", reason: "丙接近新月位置，可能相關的是日食。" },
      D: { verdict: "incorrect", reason: "另一弦月位置也不會進入地球影子。" }
    },
    takeaway: "月食在滿月，日食在新月。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-43": {
    encouragement: "四站氣壓都偏高，代表可能被大型高壓氣團籠罩。",
    keyIdea: "高氣壓型可由冬季極地大陸氣團或夏季太平洋高壓造成。",
    steps: ["表中氣壓約 1022～1035 hPa，沒有低壓或鋒面特徵。", "因此合理天氣型是極地大陸氣團或太平洋高壓。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "颱風中心是強低壓，不符全區高壓。" },
      B: { verdict: "incorrect", reason: "熱低壓也不會出現 1035 hPa 高值。" },
      C: { verdict: "incorrect", reason: "梅雨鋒面需明顯氣團交界，不是單一高壓場。" },
      D: { verdict: "correct", reason: "冬季極地大陸氣團可帶來強高壓。" },
      E: { verdict: "correct", reason: "夏季太平洋高壓也能造成大範圍高壓天氣。" }
    },
    takeaway: "高壓可來自冬季大陸冷高壓或夏季副熱帶高壓。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-44": {
    encouragement: "高壓中心下降、等壓線越密風越強，這兩個讀圖規則最關鍵。",
    keyIdea: "丙氣壓最高有下降氣流；丁附近等壓線比甲密，風速較大。",
    steps: ["丙為最高壓中心，空氣下沉。", "比較甲、丁等壓線間距，丁壓力梯度較大、風較強。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "丙在高壓中心，主要為下降氣流。" },
      B: { verdict: "correct", reason: "丁附近等壓線較密，風速比甲大。" },
      C: { verdict: "incorrect", reason: "乙的風向依等壓線並非南風。" },
      D: { verdict: "incorrect", reason: "甲的風向也不符合南風。" },
      E: { verdict: "incorrect", reason: "丙高壓下降氣流通常晴朗，不需嚴防豪雨。" }
    },
    takeaway: "等壓線密風強；高壓下降多晴。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-58": {
    encouragement: "強烈颱風近地面需要高溫又接近飽和，找曲線上暖且水氣壓高的點。",
    keyIdea: "正式飽和曲線圖中乙代表高溫、高飽和水氣壓，最符合颱風雲雨區。",
    steps: ["颱風由暖海面供應大量水氣，近地面氣溫高。", "雲雨區空氣濕度高、接近飽和，對應乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的溫濕條件不足以代表強烈颱風雲雨區。" },
      B: { verdict: "correct", reason: "乙同時高溫且接近飽和曲線，水氣充足。" },
      C: { verdict: "incorrect", reason: "丙未同時具備高溫與高飽和水氣壓。" },
      D: { verdict: "incorrect", reason: "丁的位置與颱風近地面暖濕狀態不符。" }
    },
    takeaway: "颱風能量來自暖海面與大量水氣凝結。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-95-59": {
    encouragement: "判斷海溫增加要找會增加地球能量或加強溫室效應的項目。",
    keyIdea: "正式表中 II、IV 會造成全球海溫增加。",
    steps: ["逐項判斷是否增加溫室氣體或海洋吸收熱量。", "表中符合者為 II 與 IV。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "I 不是造成全球海溫增加的正確組合。" },
      B: { verdict: "incorrect", reason: "I、III 中含不符合增溫機制的項目。" },
      C: { verdict: "correct", reason: "II、IV 都會增加地球系統熱量或溫室效應。" },
      D: { verdict: "incorrect", reason: "並非 I～IV 全部都會造成海溫增加。" }
    },
    takeaway: "全球海溫變化要從能量收支與溫室效應判斷。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-96-29": {
    encouragement: "秋颱配合東北季風，臺灣東北迎風面容易出現豪雨。",
    keyIdea: "龍王颱風在秋季由東側接近，易使東北部迎風面降下豪雨。",
    steps: ["正式路徑顯示颱風由臺灣東方接近並通過。", "秋季東北風與颱風環流共同供應水氣，東北部雨勢強。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "路徑起點不代表颱風在花蓮東方 100 公里才生成。" },
      B: { verdict: "incorrect", reason: "秋季主要配合東北季風，不是容易引進西南季風。" },
      C: { verdict: "incorrect", reason: "圖中沒有以東北轉向作為減弱主要描述。" },
      D: { verdict: "correct", reason: "秋颱環流與迎風地形使東北部容易豪雨。" }
    },
    takeaway: "秋颱常要注意東北季風共伴效應。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-96-32": {
    encouragement: "臺灣中部受板塊擠壓，常見上盤抬升的逆斷層。",
    keyIdea: "正式剖面中甲斷層使地層受擠壓縮短，上盤相對上升，屬逆斷層。",
    steps: ["觀察斷層兩側同層位移方向。", "上盤相對抬升且區域受擠壓，判為逆斷層。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "正斷層形成於拉張，上盤下滑，與圖不符。" },
      B: { verdict: "correct", reason: "上盤抬升、地層縮短，符合逆斷層。" },
      C: { verdict: "incorrect", reason: "圖示主要是垂直剖面的上下錯移，不是平移。" },
      D: { verdict: "incorrect", reason: "轉形斷層是板塊邊界專名，不適用此陸上剖面。" }
    },
    takeaway: "擠壓形成逆斷層，拉張形成正斷層。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-97-28": {
    encouragement: "中心露出最老地層是背斜；褶皺軸南北延伸，擠壓方向與它垂直。",
    keyIdea: "正式剖面中央地層最老，為背斜；朝北觀察的剖面呈東西向，代表東西擠壓。",
    steps: ["地層 1 最老且位於褶皺核心，判定背斜。", "剖面是朝北看到的東西向切面，形成褶皺的主要擠壓為東西向。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "中心老地層不是向斜。" },
      B: { verdict: "incorrect", reason: "構造與應力方向都不符。" },
      C: { verdict: "correct", reason: "老地層在核心為背斜，且由東西向擠壓形成。" },
      D: { verdict: "incorrect", reason: "背斜正確，但南北向應力不符合剖面縮短方向。" }
    },
    takeaway: "背斜中心老、向斜中心新。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-97-31": {
    encouragement: "用疊置、切割與包裹關係逐步排先後，不必一次看完整張圖。",
    keyIdea: "正式剖面由老到新為辛、己、戊、丙、丁、庚、乙、甲。",
    steps: ["未倒轉沉積層由下而上判斷辛、己、戊、丙。", "丁包丙碎塊故晚於丙；庚再切入，最後乙覆蓋、甲為地表。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "把地表甲排成最老，顛倒疊置順序。" },
      B: { verdict: "incorrect", reason: "庚與丁、丙的切割包裹先後不符。" },
      C: { verdict: "incorrect", reason: "庚不應早於己、戊等被切地層。" },
      D: { verdict: "correct", reason: "完整符合疊置、包裹與侵入切割關係。" },
      E: { verdict: "incorrect", reason: "丁包有丙碎塊，丁必須比丙晚，不能排在丙之前。" }
    },
    takeaway: "包裹物比包它的岩體老，切割者比被切者新。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-97-46": {
    encouragement: "日落位置往一側移動，可用季節變化與太陽軌跡傾斜判半球。",
    keyIdea: "正式疊圖顯示拍攝地在北半球，日期位於冬至之後到夏至之前。",
    steps: ["由日落軌跡斜向判斷天球運動方向，定位北半球。", "日落位置朝夏至方向移動，表示時間在冬至後、夏至前。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "正式軌跡傾斜方向符合北半球日落。" },
      B: { verdict: "incorrect", reason: "南半球的日行軌跡傾斜方向相反。" },
      C: { verdict: "incorrect", reason: "赤道日落軌跡會近乎垂直，不符照片。" },
      D: { verdict: "incorrect", reason: "夏至後日落位置會往冬至方向移，不是圖示方向。" },
      E: { verdict: "correct", reason: "冬至後到夏至前，北半球日落點逐漸向北移。" },
      F: { verdict: "incorrect", reason: "秋分後到冬至前的位移方向相反。" },
      G: { verdict: "incorrect", reason: "範圍太寬，包含位移方向相反的兩段。" }
    },
    takeaway: "北半球冬至後日落點向北移，夏至後向南移。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-17": {
    encouragement: "921 斷層雖由兩板塊碰撞造成，但題中四點都還在歐亞板塊上的臺灣西部。",
    keyIdea: "車籠埔斷層是歐亞板塊內受碰撞擠壓形成，四地皆屬歐亞板塊。",
    steps: ["臺灣板塊交界主要在東部花東縱谷附近。", "圖中甲乙丙丁位於臺灣西部車籠埔斷層周圍，皆在歐亞板塊。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "四地都位於臺灣西部的歐亞板塊範圍。" },
      B: { verdict: "incorrect", reason: "菲律賓海板塊主要在臺灣東側，不包含四地。" },
      C: { verdict: "incorrect", reason: "丙丁也未跨到菲律賓海板塊。" },
      D: { verdict: "incorrect", reason: "甲乙不在菲律賓海板塊，分組方式錯誤。" }
    },
    takeaway: "斷層不一定正好就是板塊邊界。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-50": {
    encouragement: "日本海位置比臺灣更北，冬季同一時刻太陽在更高緯度會較早落下。",
    keyIdea: "男主角在日本海看到夕陽時，較南方臺灣日落較晚，整個太陽仍在海平面上。",
    steps: ["十二月北半球越北白晝越短、日落越早。", "日本海比臺灣北，因此日本海日落時臺灣太陽尚未落下。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "臺灣緯度較低，冬季日落較晚，太陽仍在海平面上。" },
      B: { verdict: "incorrect", reason: "兩地緯度不同，日落時刻與高度不會相同。" },
      C: { verdict: "incorrect", reason: "臺灣太陽尚未開始沒入，不是約三分之一。" },
      D: { verdict: "incorrect", reason: "也不會已經沒入一半。" },
      E: { verdict: "incorrect", reason: "臺灣日落較晚，不會同時完全落下。" }
    },
    takeaway: "冬季同經度附近，較高緯度地區白晝較短。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-52": {
    encouragement: "每天約航行一段固定距離，七天航程直接對照題目給的比例即可。",
    keyIdea: "依短文航線與船速估算，臺灣到日本約需 7 天。",
    steps: ["短文明說男主角經過七天航行抵達。", "因此航程天數直接為 7。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "短文記載七天航行，答案為 7。" },
      B: { verdict: "incorrect", reason: "21 天是短文所述三倍，沒有依據。" },
      C: { verdict: "incorrect", reason: "42 天遠超過題文航程。" },
      D: { verdict: "incorrect", reason: "70 天與短文記載不符。" }
    },
    takeaway: "題組先抓明確文字證據，再決定是否需要計算。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-99-24": {
    encouragement: "GPS 箭頭若兩側相向是擠壓逆斷層，若沿斷層錯開則是平移。",
    keyIdea: "正式位移圖顯示龍門山南段以逆衝為主，北段水平錯動較明顯。",
    steps: ["比較斷層南段兩側箭頭，呈互相靠近，代表擠壓逆斷層。", "北段箭頭沿斷層方向錯開，顯示平移成分較強。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "南北段機制配對與 GPS 箭頭相反。" },
      B: { verdict: "incorrect", reason: "南段不是張裂正斷層。" },
      C: { verdict: "incorrect", reason: "南段機制仍寫成正斷層，錯誤。" },
      D: { verdict: "correct", reason: "南段擠壓逆衝、北段平移，符合位移箭頭。" }
    },
    takeaway: "GPS 同震位移方向能幫助判斷斷層機制。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-99-60": {
    encouragement: "長期滑移速率就是累積滑移量除以經過時間。",
    keyIdea: "由正式圖累計約 12 公尺滑移、跨約 2400 年，平均約 5 mm/年。",
    steps: ["把四次古地震滑移量累加，約得 12 公尺。", "12 m÷2400 年＝0.005 m/年＝5 mm/年。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 mm/年低估圖中累積滑移。" },
      B: { verdict: "correct", reason: "累積滑移除以時間約為 5 mm/年。" },
      C: { verdict: "incorrect", reason: "15 mm/年高估約三倍。" },
      D: { verdict: "incorrect", reason: "25 mm/年更遠高於圖示結果。" }
    },
    takeaway: "平均速率＝總變化量÷總時間，單位要換成毫米。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-107-20": {
    encouragement: "潮時每天約延後 50 分鐘，所以隔天同一時刻還沒到最低潮。",
    keyIdea: "隔天低潮比前一天晚，11 時潮位仍下降，潮間帶已出現但尚未最寬。",
    steps: ["今天 11 時低潮，隔天低潮約延後 50 分鐘。", "隔天 11 時仍在退潮階段，潮間帶出現且潮位下降。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "低潮尚未到，潮位持續下降，潮間帶已露出。" },
      B: { verdict: "incorrect", reason: "此時尚在往延後的低潮前進，不是上升。" },
      C: { verdict: "incorrect", reason: "不是最高潮，且最高潮時潮間帶較窄。" },
      D: { verdict: "incorrect", reason: "最低潮時潮間帶應最寬，不會消失。" },
      E: { verdict: "incorrect", reason: "低潮時間會延後，不會仍固定在 11 時。" }
    },
    takeaway: "月球公轉使潮時每天約晚 50 分鐘。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-107-32": {
    encouragement: "車籠埔斷層受擠壓形成逆斷層，抬升的一側就是上盤。",
    keyIdea: "正式照片與剖面顯示左側上盤抬升，斷層為逆斷層。",
    steps: ["921 地震由板塊擠壓造成，車籠埔斷層是逆斷層。", "照片中左側河堤被抬高，故左側是上盤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不是拉張形成的正斷層。" },
      B: { verdict: "correct", reason: "車籠埔斷層為擠壓逆斷層。" },
      C: { verdict: "incorrect", reason: "主要位移不是純水平平移。" },
      D: { verdict: "incorrect", reason: "右側沒有被抬升為上盤。" },
      E: { verdict: "correct", reason: "左側相對上升，為逆斷層上盤。" },
      F: { verdict: "incorrect", reason: "由位移高低可以判斷上下盤。" }
    },
    takeaway: "逆斷層上盤相對上升。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-107-33": {
    encouragement: "火山沒有固定鬧鐘，但可用氣體、地震與地表變形監測活動。",
    keyIdea: "氣體量與成分可監測岩漿活動；圖中 1600～2000 年爆發記錄較前千年密集。",
    steps: ["岩漿上升會改變火山氣體排放，可作預警線索。", "比較正式時間圖，近四百年爆發記錄較前一千年頻繁。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "爆發間隔不固定，不能說有特定週期。" },
      B: { verdict: "incorrect", reason: "維蘇威為中酸性火山，主要不是玄武岩。" },
      C: { verdict: "correct", reason: "火山氣體量與成分變化能反映岩漿活動。" },
      D: { verdict: "incorrect", reason: "維蘇威爆炸式噴發不同於澎湖玄武岩較寧靜噴發。" },
      E: { verdict: "correct", reason: "正式爆發史顯示 1600～2000 年事件較密集。" }
    },
    takeaway: "火山監測看地震、氣體與地表變形，不靠固定週期。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-109-36": {
    encouragement: "閃電需要強烈對流讓冰晶碰撞帶電，不是只要下雨就會發生。",
    keyIdea: "閃電多在對流層強對流雲中；夏季午後常見，冬季地形層狀降雨較少。",
    steps: ["雷雨雲位在對流層，強烈上升下降使粒子碰撞分離電荷。", "夏季熱對流強，冬季東北季風地形雨較穩定，閃電較少。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "劇烈天氣雲系主要位在對流層。" },
      B: { verdict: "correct", reason: "夏季午後熱對流旺盛，容易形成雷雨。" },
      C: { verdict: "correct", reason: "冬季地形抬升常形成較穩定層狀降雨，不易閃電。" },
      D: { verdict: "incorrect", reason: "並非所有鋒面降雨都有足夠強對流。" },
      E: { verdict: "incorrect", reason: "颱風雨帶也可能有強對流與閃電。" }
    },
    takeaway: "閃電關鍵是強對流，不是單純有降水。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-16": {
    encouragement: "在走時圖找 P、S 曲線相差 8 秒的位置，再往下讀距離。",
    keyIdea: "正式走時曲線顯示 P-S 到時差 8 秒對應約 60 公里。",
    steps: ["在各距離比較 S 波與 P 波旅行時間差。", "差為 8 秒處往距離軸讀值，約 60 km。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "40 km 時到時差小於 8 秒。" },
      B: { verdict: "incorrect", reason: "50 km 仍略小於圖示差值。" },
      C: { verdict: "correct", reason: "60 km 處兩曲線相差約 8 秒。" },
      D: { verdict: "incorrect", reason: "70 km 的到時差更大。" },
      E: { verdict: "incorrect", reason: "80 km 也超過 8 秒。" }
    },
    takeaway: "P-S 到時差可估測站到震源距離。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-63": {
    encouragement: "距離公式只需比較 m-M；數值越大，距離越遠。",
    keyIdea: "五顆星中戊的 m-M 最大，因此距離最遠。",
    steps: ["計算表中每顆的 m-M：甲-3.3、乙-2.8、丙-2.9、丁-2.2、戊-1.1。", "m-M 最大的是戊，依公式 d 最大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的 m-M 最小，距離不是最遠。" },
      B: { verdict: "incorrect", reason: "乙的 m-M 小於戊。" },
      C: { verdict: "incorrect", reason: "丙的 m-M 也小於戊。" },
      D: { verdict: "incorrect", reason: "丁雖較前幾項大，仍小於戊。" },
      E: { verdict: "correct", reason: "戊的 m-M=-1.1 為最大，距離最遠。" }
    },
    takeaway: "距離模數 m-M 越大，恆星越遠。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-64": {
    encouragement: "光譜型溫度順序記成 OBAFGKM，越靠前越熱。",
    keyIdea: "乙為 A 型星，在 M、A、K、M、G 中表面溫度最高。",
    steps: ["依光譜型由熱到冷為 O、B、A、F、G、K、M。", "五顆中只有乙是 A 型，因此最熱。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是 M 型，屬低溫紅星。" },
      B: { verdict: "correct", reason: "乙是 A 型，比 G、K、M 型都熱。" },
      C: { verdict: "incorrect", reason: "丙為 K 型，低於 A 型。" },
      D: { verdict: "incorrect", reason: "丁也是 M 型，溫度低。" },
      E: { verdict: "incorrect", reason: "戊為 G 型，仍不及 A 型熱。" }
    },
    takeaway: "恆星光譜型 OBAFGKM 由熱到冷。",
    reviewStatus: "approved", reviewerRole: "earth"
  }
});
