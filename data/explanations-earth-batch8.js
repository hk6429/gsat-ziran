(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-92-13": {
    encouragement: "儀器有些直接量、有些靠換算；深度常由水壓這個可靠線索推得。",
    keyIdea: "海水壓力隨深度增加，鹽溫深儀可由壓力換算深度。",
    steps: ["儀器直接量得水壓。", "利用水壓隨深度增加的關係換算下沉深度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聲納主要利用回聲時間測水深並描繪海底地形。" },
      B: { verdict: "incorrect", reason: "輪盤式採水器可在指定深度關閉不同採水瓶，取得多層海水。" },
      C: { verdict: "correct", reason: "水壓隨深度規律增加，可用壓力間接換算儀器深度。" },
      D: { verdict: "incorrect", reason: "鹽度主要由導電度配合溫度、壓力換算，不是只靠溫度和壓力。" }
    },
    takeaway: "CTD 的深度由壓力換算，鹽度則以導電度為關鍵。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-39": {
    encouragement: "太陽質量不夠大，不會走到超新星、中子星或黑洞那條路。",
    keyIdea: "太陽由星際介質形成主序星，晚年成紅巨星，最後留下白矮星。",
    steps: ["太陽目前是以氫核融合發光的主序星。", "晚年膨脹成紅巨星並拋出外層，核心成白矮星。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "星際介質、主序星、紅巨星、白矮星符合太陽質量恆星的演化。" },
      B: { verdict: "incorrect", reason: "白矮星不會再演化成黑洞；太陽核心質量也不足。" },
      C: { verdict: "incorrect", reason: "中子星通常由大質量恆星超新星後形成。" },
      D: { verdict: "incorrect", reason: "太陽不會發生核心坍縮超新星爆炸。" },
      E: { verdict: "incorrect", reason: "超新星與中子星屬大質量恆星演化路徑。" }
    },
    takeaway: "太陽晚年是紅巨星，終點為白矮星。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-52": {
    encouragement: "克卜勒第三定律只要用週期平方等於距離立方，就能估算火星距離。",
    keyIdea: "以地球為單位，P²＝a³；火星 P＝1.88 年，所以 a 約為 1.52 AU。",
    steps: ["代入 a³＝1.88²，約為 3.53。", "取立方根得到 a 約 1.52，為地球日距的 1.52 倍。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "1.52 的三次方約等於 1.88 的平方。" },
      B: { verdict: "incorrect", reason: "週期與距離不是一比一，不能直接用 1.88。" },
      C: { verdict: "incorrect", reason: "2.58 的立方遠大於 1.88 的平方。" },
      D: { verdict: "incorrect", reason: "3.76 是週期的兩倍，並非克卜勒定律結果。" }
    },
    takeaway: "行星週期與距離關係是 P²＝a³，不是直接成正比。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-94-4": {
    encouragement: "先算玉山比嘉義高約 3.8 公里，再乘每公里降 6.5℃。",
    keyIdea: "高度增加約 3.8 公里，平均降溫約 25℃，玉山七月約 3～8℃，最接近 8℃。",
    steps: ["高差約 3.8 公里，降溫約 3.8×6.5＝25℃。", "28.4－25 約 3.4℃；考慮地面熱源等，選項中 8℃最合理。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "－12℃比平均遞減率估算低太多。" },
      B: { verdict: "incorrect", reason: "－4℃仍偏低，不符合題目要求的長期七月平均。" },
      C: { verdict: "correct", reason: "8℃是選項中最接近依高差與地面條件推估的值。" },
      D: { verdict: "incorrect", reason: "18℃只下降約 10℃，低估近四公里高差。" },
      E: { verdict: "incorrect", reason: "玉山高海拔不可能和嘉義同為 28℃。" }
    },
    takeaway: "對流層平均每升一公里降約 6.5℃，再依實際地表條件選最合理值。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-94-5": {
    encouragement: "空氣下沉會被壓縮，就像打氣筒變熱，不會把高空低溫原封不動帶到地面。",
    keyIdea: "空氣下沉時外界氣壓增加，體積縮小並絕熱增溫。",
    steps: ["由高空下沉，周圍氣壓越來越大。", "空氣受壓縮，內能增加、溫度上升。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "對流層頂一般很冷，並非高於 0℃。" },
      B: { verdict: "incorrect", reason: "下沉增溫使相對濕度下降，凝結放熱不是主要原因。" },
      C: { verdict: "correct", reason: "下沉受壓縮造成絕熱增溫，抵觸電影中的急凍描述。" },
      D: { verdict: "incorrect", reason: "輻射加熱較慢，不是快速下沉空氣增溫的主要機制。" }
    },
    takeaway: "空氣上升膨脹冷卻；下降壓縮增溫。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-94-40": {
    encouragement: "地面望遠鏡要選大氣窗；可見光與部分無線電波最容易穿過。",
    keyIdea: "地球大氣對可見光與部分無線電波透明，適合地面天文觀測。",
    steps: ["大氣會吸收大部分紫外線、X 光等波段。", "可見光與無線電波有明顯大氣窗，可到達地面。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "大部分紫外線被氧與臭氧吸收。" },
      B: { verdict: "correct", reason: "可見光能大量穿透大氣，是主要地面觀測波段。" },
      C: { verdict: "incorrect", reason: "紅外線受水氣、二氧化碳吸收，只有部分窗口可用；本題不列主要答案。" },
      D: { verdict: "incorrect", reason: "微波部分可穿透，但題目官方分類以較廣的無線電波選項代表地面窗口。" },
      E: { verdict: "correct", reason: "部分無線電波可穿透大氣，適合地面電波望遠鏡。" }
    },
    takeaway: "地面天文主要利用可見光窗與無線電窗。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-25": {
    encouragement: "高空氣象資料要把儀器送上去，雷文送就是氣球攜帶的高空觀測器。",
    keyIdea: "雷文送隨探空氣球上升，可量測高空溫度、濕度、氣壓與風。",
    steps: ["探空氣球把雷文送帶入高空。", "儀器沿途量測並把資料無線傳回地面。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光譜儀可分析輻射，不是此題標準的高空垂直氣象資料收集方式。" },
      B: { verdict: "incorrect", reason: "CTD 是海洋溫鹽深儀，不量高空降水。" },
      C: { verdict: "correct", reason: "雷文送由氣球攜帶，能提供高層大氣氣象資料。" },
      D: { verdict: "incorrect", reason: "百葉箱設於近地面，無法直接觀測高空風壓溫度。" }
    },
    takeaway: "高空氣象看雷文送；海洋垂直剖面看 CTD。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-27": {
    encouragement: "平流層臭氧像保護傘，最重要功能是吸收有害紫外線。",
    keyIdea: "臭氧能吸收紫外線；其含量會隨高度、季節與人類活動變化。",
    steps: ["臭氧主要集中在平流層，不是地面。", "它吸收紫外線，降低地表生物受傷害的程度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "臭氧層主要在平流層，地面臭氧濃度不是最高。" },
      B: { verdict: "correct", reason: "臭氧能有效吸收太陽紫外線。" },
      C: { verdict: "incorrect", reason: "臭氧含量會變動，屬變動成分。" },
      D: { verdict: "incorrect", reason: "氟氯碳化物等人類活動曾使平流層臭氧減少，不是日漸增大。" }
    },
    takeaway: "臭氧集中平流層、吸收紫外線，且含量會變動。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-30": {
    encouragement: "深海沒有陽光可拍照，但聲波能在海水中傳很遠並反射回來。",
    keyIdea: "聲納發射聲波並量測海底回聲時間，可換算水深、繪製海底地形。",
    steps: ["聲波到海底後反射回船。", "用往返時間與聲速求距離，建立海底地形資料。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "深海缺光且壓力高，一般攝影機難以大範圍測深。" },
      B: { verdict: "correct", reason: "聲納不需陽光，能用回聲時間探測海底。" },
      C: { verdict: "incorrect", reason: "都卜勒雷達主要用電磁波觀測大氣，海水會強烈限制傳播。" },
      D: { verdict: "incorrect", reason: "GPS 提供船的位置，不能直接量海底深度。" }
    },
    takeaway: "海底地形靠聲納，船的位置可再配合 GPS。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-31": {
    encouragement: "規模看地震能量，震度看各地搖晃；把兩種數字分開即可。",
    keyIdea: "三次地震中最大規模為 6.7；各地觀測最大震度為 5。",
    steps: ["比較 6.7、6.4、5.2，最大規模是 6.7。", "題幹直接指出最大震度是恆春 5 級。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "正確配對最大規模 6.7 與最大震度 5。" },
      B: { verdict: "incorrect", reason: "最大震度不是 1，而是題述的 5。" },
      C: { verdict: "incorrect", reason: "5.2 是三次中最小規模。" },
      D: { verdict: "incorrect", reason: "規模與震度兩項都配錯。" },
      E: { verdict: "incorrect", reason: "1 不是最大規模，6.7 也不是震度。" },
      F: { verdict: "incorrect", reason: "規模與震度的數值角色顛倒且不符題幹。" }
    },
    takeaway: "同一地震規模固定，各地震度可不同。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-34": {
    encouragement: "太陽與滿月差 14 星等；每 5 星等亮度約差 100 倍。",
    keyIdea: "14 星等差的亮度比約為 2.512¹⁴，約四十萬倍。",
    steps: ["－12 與－26 相差 14 星等。", "10 星等差為一萬倍，再加 4 星等約 40 倍，合計約 40 萬倍。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "四百萬倍約對應更大的星等差。" },
      B: { verdict: "incorrect", reason: "一百萬倍仍高於 14 星等差的換算。" },
      C: { verdict: "correct", reason: "2.512 的 14 次方約為四十萬。" },
      D: { verdict: "incorrect", reason: "二十五萬低於標準星等換算結果。" },
      E: { verdict: "incorrect", reason: "十四萬只把星等差當近似倍數，未使用對數尺度。" }
    },
    takeaway: "星等是對數尺度：每差 5 星等，亮度差 100 倍。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-35": {
    encouragement: "顏色判溫度、絕對星等判本身光度；把兩條線索分開。",
    keyIdea: "藍色織女星溫度最高；紅色超巨星參宿四光度極大，絕對星等數值最小。",
    steps: ["藍星比黃星、紅星熱，所以織女星表面溫度最高。", "參宿四體積巨大，放到同距離比較時最亮，絕對星等最小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "織女星溫度判斷正確，但太陽不是本身光度最大者。" },
      B: { verdict: "incorrect", reason: "太陽不是三者最高溫，織女星也不是最亮超巨星。" },
      C: { verdict: "incorrect", reason: "紅色參宿四表面溫度最低，不是最高。" },
      D: { verdict: "correct", reason: "織女星藍色最熱，參宿四超巨星本身最亮、絕對星等最小。" },
      E: { verdict: "incorrect", reason: "參宿四不是最高溫，且絕對星等最小者也不是織女星。" }
    },
    takeaway: "顏色看表面溫度；絕對星等越小，本身光度越大。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-36": {
    encouragement: "大氣會擋住高能短波；X 光與伽瑪射線必須到太空接收。",
    keyIdea: "地球大氣幾乎吸收來自宇宙的 X 光與伽瑪射線，因此相關望遠鏡需設於太空。",
    steps: ["可見光、部分紅外線與無線電波有地面觀測窗口。", "X 光與伽瑪射線被大氣阻擋，必須在大氣層外觀測。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "可見光可在地面觀測，部分紅外線也有大氣窗。" },
      B: { verdict: "incorrect", reason: "X 光需太空，但無線電波可在地面觀測。" },
      C: { verdict: "incorrect", reason: "伽瑪射線需太空，但部分紅外線可在地面。" },
      D: { verdict: "correct", reason: "X 光與伽瑪射線都被大氣吸收，需太空望遠鏡。" },
      E: { verdict: "incorrect", reason: "紫外線多需太空，但無線電波不一定。" }
    },
    takeaway: "高能的 X 光、伽瑪射線天文觀測要上太空。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-54": {
    encouragement: "題幹已直接告訴近紅外線的主要吸收者，抓關鍵句即可。",
    keyIdea: "太陽近紅外線主要被大氣水氣與二氧化碳吸收。",
    steps: ["區分紫外線與近紅外線的吸收氣體。", "紫外線看臭氧、氧；近紅外線看水氣、二氧化碳。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "臭氧主要吸收紫外線，不是近紅外線主要吸收者。" },
      B: { verdict: "incorrect", reason: "近紅外線有相當部分被大氣氣體吸收，不是大部分全穿透。" },
      C: { verdict: "correct", reason: "水氣與二氧化碳是題幹指出的近紅外線主要吸收者。" },
      D: { verdict: "incorrect", reason: "臭氧與氧主要是吸收紫外線，不是反射近紅外線。" },
      E: { verdict: "incorrect", reason: "甲烷可吸收部分紅外線，但題幹的主要配對是水氣與二氧化碳。" }
    },
    takeaway: "紫外線主要被臭氧、氧吸收；近紅外線主要被水氣、二氧化碳吸收。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-55": {
    encouragement: "大氣最容易讓可見光穿過，所以地表收到的太陽能以可見光占主要部分。",
    keyIdea: "紫外線多被吸收，近紅外線也受水氣與二氧化碳吸收；可見光穿透率最高。",
    steps: ["比較三個主要太陽波段受大氣吸收程度。", "可見光很少被吸收，因此在地表接收能量中占主要部分。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "紫外線大部分被臭氧與氧吸收。" },
      B: { verdict: "incorrect", reason: "太陽能量主要不集中在微波。" },
      C: { verdict: "correct", reason: "可見光強且大氣穿透率高，是地表接收的主要波段。" },
      D: { verdict: "incorrect", reason: "近紅外線有相當部分被水氣與二氧化碳吸收。" }
    },
    takeaway: "太陽可見光最容易穿過大氣到達地表。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-65": {
    encouragement: "海嘯不只看規模，還要看海底是否突然上下移動；靠岸後會減速增高。",
    keyIdea: "海嘯進入淺水區時波速變慢、波高增加，大地震波浪因此在岸邊造成巨大災害。",
    steps: ["海底大地震若造成海床垂直位移，可推動大量海水。", "波進入淺海後速度降低、能量集中，波高上升。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "規模大但震源深或未造成海床垂直位移，也可能不產生海嘯。" },
      B: { verdict: "incorrect", reason: "海嘯由海底擾動造成，不是黑潮流速改變。" },
      C: { verdict: "incorrect", reason: "地震規模不會使震波在相同介質中的波速變快。" },
      D: { verdict: "correct", reason: "海嘯靠岸水深變淺後波速下降、波高增加，容易致災。" },
      E: { verdict: "incorrect", reason: "三百公里深的深源地震不易直接造成海床大幅垂直位移。" }
    },
    takeaway: "海嘯靠岸會慢而高；是否生成還要看海床垂直位移。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-27": {
    encouragement: "溫室效應的主角是二氧化碳，吸收的是地表放出的紅外線。",
    keyIdea: "二氧化碳吸收地表紅外線並再放射，使近地面保留更多熱能。",
    steps: ["地表吸收太陽能後以紅外線放熱。", "二氧化碳吸收部分紅外線，形成溫室保溫作用。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "宇宙射線不是溫室效應主要輻射。" },
      B: { verdict: "correct", reason: "二氧化碳與紅外線的吸收正是溫室效應核心。" },
      C: { verdict: "incorrect", reason: "二氧化碳主要吸收紅外線，不是紫外線。" },
      D: { verdict: "incorrect", reason: "題目基礎模型中的主要氣體是二氧化碳，不是二氧化氮。" },
      E: { verdict: "incorrect", reason: "氣體與波段都不是主要配對。" },
      F: { verdict: "incorrect", reason: "無線電波不是地表主要熱輻射。" }
    },
    takeaway: "溫室效應記住 CO₂ 與紅外線。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-30": {
    encouragement: "此次海嘯的關鍵不是只有『大地震』，而是海底斷層造成巨大垂直落差。",
    keyIdea: "海底地形突然垂直錯動會推動整柱海水，形成向外傳播的海嘯。",
    steps: ["巽他海溝斷層有十公尺落差，表示海床突然上下移動。", "海床推動大量海水，形成長波海嘯。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海嘯可由不同海底地震、山崩或火山造成，不只發生在海溝。" },
      B: { verdict: "incorrect", reason: "陸地斷層不會直接大幅推動海水。" },
      C: { verdict: "incorrect", reason: "大地震若未造成海床垂直位移，不一定有海嘯。" },
      D: { verdict: "correct", reason: "海底斷層巨大落差直接推動海水，是此次海嘯主因。" }
    },
    takeaway: "海嘯生成看海底是否突然垂直變形。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-33": {
    encouragement: "空氣上坡時外界氣壓變小，會膨脹並把內能用在做功上，所以降溫。",
    keyIdea: "絕熱上升的空氣會膨脹冷卻。",
    steps: ["高度增加，外界氣壓降低，空氣團體積膨脹。", "沒有外來熱量補充，膨脹做功使溫度下降。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "上升時外壓降低，不會體積縮小。" },
      B: { verdict: "incorrect", reason: "體積會膨脹，但絕熱膨脹造成降溫。" },
      C: { verdict: "incorrect", reason: "溫度下降正確，體積縮小錯誤。" },
      D: { verdict: "correct", reason: "絕熱上升時空氣膨脹並降溫。" },
      E: { verdict: "incorrect", reason: "氣壓改變會使體積與溫度都變化。" }
    },
    takeaway: "絕熱上升：膨脹、降溫。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-47": {
    encouragement: "海水密度流看溫度、鹽度；表面溫度則會隨緯度與季節改變。",
    keyIdea: "海水溫鹽差造成密度差並驅動密度流；表面水溫受日照緯度與季節影響。",
    steps: ["溫度低或鹽度高通常使海水密度增加。", "不同緯度、季節日照不同，使表面水溫改變。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海水除氯化鈉外還含鎂、鈣、硫酸根等多種離子。" },
      B: { verdict: "incorrect", reason: "表面水通常較暖但密度較小，不能說溫度、密度都大。" },
      C: { verdict: "correct", reason: "溫度與鹽度造成密度差，是密度流重要成因。" },
      D: { verdict: "correct", reason: "表面水溫受緯度日照及季節變化影響。" },
      E: { verdict: "incorrect", reason: "赤道降雨旺盛會稀釋海水，最高鹽度常在副熱帶。" }
    },
    takeaway: "密度流由溫鹽差驅動；赤道多雨不一定最鹹。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-48": {
    encouragement: "最上層大氣被高能短波加熱；平流層則靠臭氧吸收紫外線升溫。",
    keyIdea: "紫外線、X 光加熱最上層大氣；臭氧吸收紫外線使平流層溫度不再隨高度下降。",
    steps: ["高層稀薄氣體吸收高能紫外線與 X 光而升溫。", "平流層臭氧吸收紫外線，使溫度向上回升。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "無線電波能量低，不是最上層大氣主要加熱來源。" },
      B: { verdict: "correct", reason: "紫外線、X 光被高層氣體吸收，造成增溫。" },
      C: { verdict: "correct", reason: "臭氧吸收紫外線加熱平流層，使對流層頂上方溫度趨穩再升高。" },
      D: { verdict: "incorrect", reason: "最上層增溫主因是高能太陽輻射，不是人為二氧化碳。" },
      E: { verdict: "incorrect", reason: "對流不會把足夠熱量越過穩定的對流層頂來形成此結構。" }
    },
    takeaway: "大氣溫度分層要看各高度吸收哪種太陽輻射。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-61": {
    encouragement: "極圈起點等於 90° 減去自轉軸傾角。",
    keyIdea: "丙行星傾角 65°，極圈緯度為 90°－65°＝25°，極區為 25°至 90°。",
    steps: ["用極圈緯度＝90°－軸傾角。", "90－65＝25，所以南北極區從 25°延伸到 90°。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "23.5°是地球軸傾角所對應的回歸線數值，不適用丙星。" },
      B: { verdict: "correct", reason: "丙星極圈起點為 25°，極區到 90°。" },
      C: { verdict: "incorrect", reason: "65°是軸傾角，不是極圈緯度。" },
      D: { verdict: "incorrect", reason: "67.5°來自地球近似極圈，不符合 65°傾角。" },
      E: { verdict: "incorrect", reason: "有軸傾角就可定義極晝極夜區，丙星有極區。" }
    },
    takeaway: "極圈緯度＝90°－自轉軸傾角。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-62": {
    encouragement: "晝夜溫差大看大氣薄、自轉慢；溫差小看大氣厚、自轉快。",
    keyIdea: "甲大氣極薄且白天長，溫差最大；丙大氣最厚且自轉最快，溫差最小。",
    steps: ["甲氣壓僅 0.001 atm、一天 42 小時，保溫與熱量搬運弱，溫差大。", "丙氣壓 1.2 atm、一天 12 小時，熱量調節較強，溫差小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "最大是甲正確，但最小應是大氣更厚、自轉更快的丙。" },
      B: { verdict: "correct", reason: "甲最薄且慢，丙最厚且快，分別對應最大與最小溫差。" },
      C: { verdict: "incorrect", reason: "甲的大氣比乙薄得多，溫差不會最小。" },
      D: { verdict: "incorrect", reason: "乙不是溫差最大，甲的調節能力更弱。" },
      E: { verdict: "incorrect", reason: "丙大氣厚、自轉快，不會是最大溫差。" },
      F: { verdict: "incorrect", reason: "丙應為最小，不是最大。" }
    },
    takeaway: "厚大氣能搬熱、快自轉縮短加熱時間，兩者都能縮小晝夜溫差。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-63": {
    encouragement: "極地像地球的冷卻源，會送出冷氣團與冷水，影響較低緯度。",
    keyIdea: "南北極終年低溫，是全球氣候系統的重要冷源。",
    steps: ["極地接收太陽能少，長期維持低溫。", "冷空氣與冷水向低緯移動，參與全球熱量調節。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "極地持續提供冷氣團與冷水，是全球氣候冷源。" },
      B: { verdict: "incorrect", reason: "表面洋流主要受盛行風驅動，不能說都發源於極地。" },
      C: { verdict: "incorrect", reason: "極地部分積雪能多年保存並壓密成冰，不會夏季全融。" },
      D: { verdict: "incorrect", reason: "北極陸地冰川縮小會增加海水量並抬升海平面。" }
    },
    takeaway: "極地是全球冷源，透過大氣與海洋把低溫影響傳向低緯。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-64": {
    encouragement: "冰芯越深通常越老；南極保存 65 萬年，比格陵蘭 25 萬年更早。",
    keyIdea: "若兩地都達厚度極限，南極最老冰芯年代較早，表示其保存的冰層更早形成。",
    steps: ["比較題幹保存年限：南極約 65 萬年，格陵蘭約 25 萬年。", "南極記錄更久，因此最深老冰形成得更早。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "南極冰芯保存年代更久，最老冰層比格陵蘭更早形成。" },
      B: { verdict: "incorrect", reason: "氣泡主要保存當時整體空氣，不是只含二氧化碳與甲烷。" },
      C: { verdict: "incorrect", reason: "南極冰芯可研究約 65 萬年前，不只 25 萬年。" },
      D: { verdict: "incorrect", reason: "題幹指出工業革命後溫室氣體持續增加，不是甲烷逐漸降低。" }
    },
    takeaway: "冰芯氣泡保存古空氣；可研究多久取決於最老冰層年代。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-98-14": {
    encouragement: "高壓中心的空氣由上往下沉，雲不易長高，所以常見晴朗天氣。",
    keyIdea: "高壓中心下沉氣流受壓增溫，相對濕度降低，抑制凝結成雲。",
    steps: ["高空空氣向高壓中心下沉。", "下沉增溫使相對濕度降低，雲雨不易形成。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高壓中心主要不是上升氣流。" },
      B: { verdict: "incorrect", reason: "下降氣流正確，但通常帶來晴朗而非陰雨。" },
      C: { verdict: "incorrect", reason: "上升、陰雨較符合低壓中心。" },
      D: { verdict: "correct", reason: "高壓下沉增溫、抑制雲雨，常為晴朗天氣。" }
    },
    takeaway: "高壓下沉晴，低壓上升雨。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-8": {
    encouragement: "七天約是半個大潮到小潮週期，同一潮相時刻大約延後六小時。",
    keyIdea: "潮汐每天約延後 50 分鐘，七天後同樣低潮約延後 6 小時。",
    steps: ["原本低潮約上午 10 時。", "七天累積延後約 7×50 分＝350 分，接近 6 小時，因此約下午 4 時。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "上午 7 時比原低潮還早，不符合潮時每日延後。" },
      B: { verdict: "incorrect", reason: "七天後低潮不會仍固定上午 10 時。" },
      C: { verdict: "incorrect", reason: "下午 1 時只延後三小時，累積不足。" },
      D: { verdict: "correct", reason: "上午 10 時加約六小時，約為下午 4 時。" },
      E: { verdict: "incorrect", reason: "下午 7 時延後九小時，超過七日潮時累積。" }
    },
    takeaway: "潮汐時刻每天約晚 50 分鐘，七天約晚 6 小時。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-14": {
    encouragement: "凝結需要冷卻；空氣翻山後下降會增溫，所以最不容易凝結。",
    keyIdea: "背風坡空氣下降受壓增溫，相對濕度降低，不利水氣凝結。",
    steps: ["迎風坡、鋒面與熱對流都會使空氣上升冷卻。", "越山後在背風坡下沉的氣流則壓縮增溫。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "迎風坡抬升使空氣膨脹冷卻，容易凝結。" },
      B: { verdict: "correct", reason: "背風坡下沉增溫，相對濕度下降，最不易凝結。" },
      C: { verdict: "incorrect", reason: "暖空氣沿冷鋒被迫抬升會冷卻凝結。" },
      D: { verdict: "incorrect", reason: "強烈熱對流上升後會膨脹冷卻，形成積雲或積雨雲。" }
    },
    takeaway: "上升冷卻易凝結，下降增溫難凝結。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-18": {
    encouragement: "日食時月球一定在太陽與地球之間，因此月相是朔。",
    keyIdea: "日食只能發生在新月附近，月球的暗面朝向地球。",
    steps: ["日食需要日、月、地大致排成一直線，月球位於中間。", "這個位置從地球看是新月，也稱朔。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "眉月已離開精確日月同方向位置，不會發生日食。" },
      B: { verdict: "incorrect", reason: "弦月時日月在天空約相差 90°。" },
      C: { verdict: "incorrect", reason: "滿月時地球位於日月之間，可能月食而非日食。" },
      D: { verdict: "correct", reason: "新月時月球位於太陽方向，對齊時可發生日食。" }
    },
    takeaway: "日食在朔，月食在望。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-99-26": {
    encouragement: "磁針微偏是地理北與磁北不重合，不能解釋成地磁自己緩慢自轉。",
    keyIdea: "磁偏角來自地磁場方向與地理南北方向不完全一致，且會隨地點與時間改變。",
    steps: ["沈括記錄磁針不完全指南，表示存在磁偏角。", "地球可近似磁性球體，但磁軸和自轉軸不完全重合。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "這是錯誤敘述；磁偏角不是由地磁『緩慢自轉』造成。" },
      B: { verdict: "incorrect", reason: "這是正確訊息；文字顯示當時已用磁石磨針辨向。" },
      C: { verdict: "incorrect", reason: "這是合理敘述；穩定的地磁場使磁針沿磁力線方向排列。" },
      D: { verdict: "incorrect", reason: "『微偏東』正是磁方向與地理南北方向有偏角的紀錄。" },
      E: { verdict: "incorrect", reason: "地表磁場可近似來自磁軸接近地理軸的磁性球體。" }
    },
    takeaway: "磁偏角是磁北與地理北的方向差，不是地磁自轉。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
