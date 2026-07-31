(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-86-61": {
    encouragement: "先找高低壓位置，再用北半球近地風繞低壓逆時鐘判斷。",
    keyIdea: "圖中臺北吹東北風，蘭嶼位於颱風西北側而吹北風。",
    steps: ["由等壓線判兩地相對低壓的位置。", "依逆時鐘環流得到臺北東北風、蘭嶼北風。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "臺北風向不是南風。" }, B: { verdict: "incorrect", reason: "臺北不在吹西南風的位置。" },
      C: { verdict: "correct", reason: "臺北位於東北季風控制區，主要吹東北風。" }, D: { verdict: "incorrect", reason: "臺北不是正東風。" },
      E: { verdict: "correct", reason: "蘭嶼相對低壓中心的位置使風由北方吹來。" }, F: { verdict: "incorrect", reason: "蘭嶼風向並非西北風。" },
      G: { verdict: "incorrect", reason: "蘭嶼不在吹東南風的位置。" }, H: { verdict: "incorrect", reason: "蘭嶼當時不是南風。" }
    },
    takeaway: "風向題先定位，再套用北半球低壓逆時鐘環流。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-86-62": {
    encouragement: "三角與半圓分列鋒面兩側是滯留鋒，連續圖位置不變就是滯留。",
    keyIdea: "日本外海至中國東南的鋒面是滯留鋒，一天內大致留在原處。",
    steps: ["辨認圖上的鋒面符號為滯留鋒。", "比較一天前後位置，鋒面沒有明顯移動。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "符號不是單純冷鋒。" }, B: { verdict: "incorrect", reason: "符號不是暖鋒。" },
      C: { verdict: "incorrect", reason: "三角與半圓不在同側，並非囚錮鋒。" }, D: { verdict: "correct", reason: "兩種符號分居兩側，代表滯留鋒。" },
      E: { verdict: "incorrect", reason: "圖中沒有明顯向東南移。" }, F: { verdict: "incorrect", reason: "也沒有向西北移。" },
      G: { verdict: "correct", reason: "前後圖顯示鋒面大致停留原處。" }
    },
    takeaway: "滯留鋒的兩側氣團勢均力敵，移動通常很慢。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-89-15": {
    encouragement: "冷鋒坡面較陡，冷空氣像楔子鑽入暖空氣下方。",
    keyIdea: "正式圖 C 顯示冷空氣由乙側推進，暖空氣沿陡鋒面快速上升。",
    steps: ["先找近地面前進的冷空氣楔。", "再確認暖空氣被迫沿陡面上升，選 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的鋒面坡度或氣流方向不像冷鋒。" }, B: { verdict: "incorrect", reason: "B 較接近暖鋒的緩坡抬升。" },
      C: { verdict: "correct", reason: "C 呈現冷空氣主動推進、暖空氣陡升。" }, D: { verdict: "incorrect", reason: "D 的冷暖空氣位置或箭頭方向相反。" }
    },
    takeaway: "冷鋒陡、暖鋒緩，是剖面判讀的重要線索。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-89-18": {
    encouragement: "梅雨期的關鍵是滯留鋒橫跨臺灣附近。",
    keyIdea: "乙圖有東西向滯留鋒位於臺灣附近，是典型梅雨天氣。",
    steps: ["辨認四圖中的鋒面種類與位置。", "乙圖的滯留鋒正影響臺灣。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲圖的天氣系統不符合梅雨滯留鋒。" }, B: { verdict: "correct", reason: "乙圖顯示滯留鋒位於臺灣附近。" },
      C: { verdict: "incorrect", reason: "丙圖主要受其他季節系統控制。" }, D: { verdict: "incorrect", reason: "丁圖沒有臺灣梅雨期的鋒面配置。" }
    },
    takeaway: "臺灣梅雨常由滯留鋒帶來連續降雨。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-89-22": {
    encouragement: "岩脈一定比被它切過的地層年輕，用兩個定年值夾住地層年代。",
    keyIdea: "Y 層早於穿過它的 2 百萬年岩脈、晚於下方約 5 百萬年界線，屬上新世。",
    steps: ["用截切關係建立 Y 層的年代上、下限。", "對照地質年代表，範圍落在上新世。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "更新世太年輕，不符合岩脈夾出的範圍。" }, B: { verdict: "correct", reason: "Y 層年代範圍落在上新世。" },
      C: { verdict: "incorrect", reason: "中新世比推得的 Y 層年代更老。" }, D: { verdict: "incorrect", reason: "漸新世明顯過老。" },
      E: { verdict: "incorrect", reason: "始新世也不在定年範圍內。" }
    },
    takeaway: "定年配合截切關係，可以把地層年代夾在一段範圍內。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-61": {
    encouragement: "地層對比要比標準化石，不是只看上下位置或厚度。",
    keyIdea: "依相同化石帶，ㄈ不對應辰、ㄉ不對應巳，因此 D、E 是錯誤配對。",
    steps: ["逐層比對兩地相同標準化石。", "A、B、C 可對應，D、E 的化石時代不一致。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題目選錯誤；ㄅ與子含相同時代化石，可對比。" }, B: { verdict: "incorrect", reason: "ㄆ與丑的化石帶相符。" },
      C: { verdict: "incorrect", reason: "ㄇ與寅可依標準化石對比。" }, D: { verdict: "correct", reason: "ㄈ與辰的化石時代不同，不能對比。" },
      E: { verdict: "correct", reason: "ㄉ與巳也不是同一化石帶。" }
    },
    takeaway: "標準化石像地層的年代標籤。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-66": {
    encouragement: "沿分類樹逐關卡計數，不必一次看完十二種礦物。",
    keyIdea: "依顏色、光澤與硬度逐層分類後，e、f、g、h 分別為 3、1、5、2。",
    steps: ["按圖 18 每個判準把十二種礦物分組。", "逐末端計數得到 3、1、5、2，對應 H。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "e、f、g、h 計數不全符合。" }, B: { verdict: "incorrect", reason: "e、f 的數量錯誤。" },
      C: { verdict: "incorrect", reason: "e、f、h 與分類結果不符。" }, D: { verdict: "incorrect", reason: "四個分支計數未完全正確。" },
      E: { verdict: "incorrect", reason: "e、f 的計數不對。" }, F: { verdict: "incorrect", reason: "e、f、h 至少有誤。" },
      G: { verdict: "incorrect", reason: "g、h 的數量不符。" }, H: { verdict: "correct", reason: "3、1、5、2 完全符合分類後計數。" },
      I: { verdict: "incorrect", reason: "h 應為 2，不是 3。" }
    },
    takeaway: "分類題逐層分流並在末端點數最可靠。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-67": {
    encouragement: "能刮傷硬度 4 的金屬，礦物硬度必須大於 4。",
    keyIdea: "表中摩氏硬度大於 4 的礦物共有 8 種。",
    steps: ["從表中逐一圈出硬度大於 4 的礦物。", "計數得到 8 種。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高硬度礦物不只 4 種。" }, B: { verdict: "incorrect", reason: "計數不是 5。" },
      C: { verdict: "incorrect", reason: "仍漏算兩種。" }, D: { verdict: "incorrect", reason: "仍少算一種。" },
      E: { verdict: "correct", reason: "表中共有 8 種礦物硬度大於 4。" }, F: { verdict: "incorrect", reason: "沒有 9 種。" },
      G: { verdict: "incorrect", reason: "沒有 10 種。" }
    },
    takeaway: "較硬礦物能刮傷較軟物質，硬度相等則不一定留下凹痕。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-68": {
    encouragement: "兩礦物互劃時，留下凹痕的是較軟的那一個。",
    keyIdea: "石英刮正長石、角閃石刮黑雲母、方解石刮高嶺石，故 A、D、F。",
    steps: ["從表中比較每一對礦物硬度。", "確認選項所說留下凹痕者是否較軟。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "石英硬度較高，正長石會留下凹痕。" }, B: { verdict: "incorrect", reason: "鈉長石較硬，受損的應是高嶺石。" },
      C: { verdict: "incorrect", reason: "霞石比白雲母硬，留下凹痕者應是白雲母。" }, D: { verdict: "correct", reason: "角閃石較硬，黑雲母受損。" },
      E: { verdict: "incorrect", reason: "橄欖石通常較輝石硬，不應是橄欖石受損。" }, F: { verdict: "correct", reason: "方解石較硬，高嶺石留下凹痕。" },
      G: { verdict: "incorrect", reason: "石英較硬，應由方解石留下凹痕。" }
    },
    takeaway: "互劃比較時，傷痕留在硬度較小者表面。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-91-49": {
    encouragement: "相對濕度可看實際水氣量占同溫飽和值的比例。",
    keyIdea: "甲點實際水氣量約為該溫度飽和值的五分之一，接近 20%。",
    steps: ["由甲點讀實際水氣量。", "同溫度向上讀飽和曲線，相除約為 0.2。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10% 低於圖中比例。" }, B: { verdict: "correct", reason: "實際量約占飽和值五分之一，即約 20%。" },
      C: { verdict: "incorrect", reason: "30% 偏高。" }, D: { verdict: "incorrect", reason: "40% 明顯高估。" },
      E: { verdict: "incorrect", reason: "甲點未達飽和值一半。" }
    },
    takeaway: "相對濕度＝實際水氣量÷同溫度飽和水氣量。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-92-64": {
    encouragement: "溫帶氣旋成熟後，移動較快的冷鋒追上暖鋒，會形成囚錮鋒。",
    keyIdea: "連續圖最後階段是冷鋒追上暖鋒的囚錮鋒，正式選項 C。",
    steps: ["依 1 到 4 追蹤冷、暖鋒距離縮短。", "最後兩鋒接合，對照囚錮鋒符號 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 不是冷暖鋒接合的符號。" }, B: { verdict: "incorrect", reason: "B 仍表示未囚錮的鋒面。" },
      C: { verdict: "correct", reason: "C 的三角與半圓在同側，代表囚錮鋒。" }, D: { verdict: "incorrect", reason: "D 的符號或配置不符最後階段。" }
    },
    takeaway: "冷鋒追上暖鋒，就是溫帶氣旋進入囚錮階段。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-22": {
    encouragement: "沿等壓線判風時，北半球低壓在風向左側附近。",
    keyIdea: "圖中臺灣位於低壓東側吹南風，琉球位於另一側吹西南風。",
    steps: ["找出兩地相對低壓與等壓線的位置。", "套用逆時鐘近地環流，得到南風與西南風。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩地風向都不符圖中環流。" }, B: { verdict: "incorrect", reason: "臺灣不是西風。" },
      C: { verdict: "incorrect", reason: "琉球不是東北風。" }, D: { verdict: "incorrect", reason: "臺灣不是北風。" },
      E: { verdict: "correct", reason: "臺灣南風、琉球西南風符合等壓線配置。" }, F: { verdict: "incorrect", reason: "臺灣風向判反。" }
    },
    takeaway: "風向是風吹來的方向，判讀時別把箭頭去向當名稱。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-41": {
    encouragement: "板塊分離造中洋脊，碰撞造褶皺山脈，錯動造轉形斷層。",
    keyIdea: "甲是張裂中洋脊、乙是聚合褶皺山脈、丙是錯動斷層，選 A、E、I。",
    steps: ["由箭頭判甲分離、乙聚合、丙水平錯動。", "將三種運動配對典型地形。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲為張裂邊界，可形成中洋脊。" }, B: { verdict: "incorrect", reason: "甲不是碰撞褶皺帶。" },
      C: { verdict: "incorrect", reason: "甲不是隱沒形成的火山島弧。" }, D: { verdict: "incorrect", reason: "乙為聚合，不形成中洋脊。" },
      E: { verdict: "correct", reason: "乙碰撞擠壓可形成褶皺山脈。" }, F: { verdict: "incorrect", reason: "乙不是水平錯動。" },
      G: { verdict: "incorrect", reason: "丙不是張裂谷。" }, H: { verdict: "incorrect", reason: "丙不形成褶皺山脈。" },
      I: { verdict: "correct", reason: "丙水平錯動對應轉形或平移斷層。" }
    },
    takeaway: "分離、聚合、錯動，分別對應中洋脊、山脈、轉形斷層。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-93-42": {
    encouragement: "板塊浮在較軟的軟流圈上；大陸板塊上層是大陸地殼。",
    keyIdea: "圖中 X 是板塊下方的軟流圈，Y 是乙右側板塊上層的大陸地殼。",
    steps: ["看 X 位於兩板塊下方，判為軟流圈。", "乙右側厚而浮高的上層 Y 是大陸地殼。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "X 位於岩石圈下方，為軟流圈。" }, B: { verdict: "incorrect", reason: "X 不是海洋地殼。" },
      C: { verdict: "incorrect", reason: "X 也不是大陸地殼。" }, D: { verdict: "incorrect", reason: "Y 是板塊上層，不是軟流圈。" },
      E: { verdict: "incorrect", reason: "乙右側 Y 的厚度與位置不屬海洋地殼。" }, F: { verdict: "correct", reason: "Y 為大陸板塊上層的大陸地殼。" }
    },
    takeaway: "地殼是板塊上層，軟流圈則在板塊下方。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-1": {
    encouragement: "先用上下關係排沉積，再看哪個事件截切或改變前面的地層。",
    keyIdea: "剖面關係顯示乙先發生，再有甲，最後才是丙。",
    steps: ["找出三事件各自影響哪些既有岩層。", "被影響者較早，依序得到乙→甲→丙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不是最早事件。" }, B: { verdict: "incorrect", reason: "乙應早於甲。" },
      C: { verdict: "correct", reason: "截切與覆蓋關係支持乙、甲、丙。" }, D: { verdict: "incorrect", reason: "丙不是最早。" },
      E: { verdict: "incorrect", reason: "順序把最晚的丙放在最前。" }
    },
    takeaway: "地質事件先後可用覆蓋與截切關係建立。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-7": {
    encouragement: "日全食只出現在月球本影落到地球的狹小區域。",
    keyIdea: "圖中月球本影落在乙位置，乙地觀察者可見日全食。",
    steps: ["沿太陽光線找月球後方最暗的本影。", "本影與地球表面交於乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不在月球本影內。" }, B: { verdict: "correct", reason: "乙位於本影落點，可見日全食。" },
      C: { verdict: "incorrect", reason: "丙未被本影掃過。" }, D: { verdict: "incorrect", reason: "丁位於地球另一側或本影外。" }
    },
    takeaway: "本影看日全食，半影只能看日偏食。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-8": {
    encouragement: "降雨稀釋海水、蒸發濃縮海水，但鹽度變化會稍微落後。",
    keyIdea: "依每月降雨減蒸發的累積效果，鹽度先降後升的時序對應圖 D。",
    steps: ["逐月比較降雨與蒸發，判斷海水變淡或變鹹。", "把變化累積成連續曲線，選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的高低時序與水量收支不符。" }, B: { verdict: "incorrect", reason: "B 未呈現降雨與蒸發的累積效果。" },
      C: { verdict: "incorrect", reason: "C 的鹽度升降方向有月份顛倒。" }, D: { verdict: "correct", reason: "D 符合雨多變淡、蒸發多變鹹及時間累積。" },
      E: { verdict: "incorrect", reason: "E 的曲線轉折與柱狀資料不一致。" }
    },
    takeaway: "海面鹽度是淡水收支累積後的結果。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-9": {
    encouragement: "臺灣位在低壓東南側時，逆時鐘環流會帶來西南風。",
    keyIdea: "低壓位於臺灣西北方，臺灣近地面主要吹西南風。",
    steps: ["定位低壓中心在臺灣西北側。", "依北半球逆時鐘環流判為西南風。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "西北風對應低壓另一側。" }, B: { verdict: "correct", reason: "臺灣在低壓東南側，吹西南風。" },
      C: { verdict: "incorrect", reason: "東北風不符低壓位置。" }, D: { verdict: "incorrect", reason: "東南風也不是此側環流風向。" }
    },
    takeaway: "低壓位置一確定，風向就能用逆時鐘規則推出。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-94-10": {
    encouragement: "低壓北移後，西南氣流把暖濕水氣送進臺灣，迎風山區雨量最大。",
    keyIdea: "正式圖 A 把豪雨集中在西南氣流迎風的中南部山區。",
    steps: ["由低壓環流判斷臺灣吹西南風。", "配合地形抬升，找中南部西南迎風坡高雨量，選 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 的豪雨區位於西南氣流迎風坡，符合地形效應。" }, B: { verdict: "incorrect", reason: "B 的最大雨區位置不符主要水氣來向。" },
      C: { verdict: "incorrect", reason: "C 把豪雨放在較不利的背風區。" }, D: { verdict: "incorrect", reason: "D 的分布未反映西南風與中央山脈。" }
    },
    takeaway: "臺灣豪雨分布常是風向加地形共同決定。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-96-28": {
    encouragement: "颱風增強時中心氣壓下降，登陸受地形破壞後氣壓回升。",
    keyIdea: "龍王颱風先增強、登陸後快速減弱，中心氣壓先降後升，對應 A。",
    steps: ["沿路徑找登陸前後時間。", "登陸前增強氣壓降，登陸後減弱氣壓升。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 呈現登陸前下降、登陸後回升。" }, B: { verdict: "incorrect", reason: "B 全程下降，不符登陸後減弱。" },
      C: { verdict: "incorrect", reason: "C 的轉折時機或方向不符。" }, D: { verdict: "incorrect", reason: "D 近乎不變，與颱風強度變化不符。" }
    },
    takeaway: "颱風越強中心氣壓通常越低。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-96-33": {
    encouragement: "東北外海是菲律賓海板塊向北隱沒，震源會沿板塊向北加深。",
    keyIdea: "正式圖 C 顯示海溝附近淺震，往北震源逐漸加深。",
    steps: ["先找板塊由南向北隱沒的方向。", "選擇震源深度沿該方向加深的 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的深度排列方向不符隱沒。" }, B: { verdict: "incorrect", reason: "B 未呈現正確斜向震源帶。" },
      C: { verdict: "correct", reason: "C 呈現由海溝淺震向北加深。" }, D: { verdict: "incorrect", reason: "D 把深淺分布顛倒。" },
      E: { verdict: "incorrect", reason: "E 的震源分布不符合隱沒面。" }
    },
    takeaway: "隱沒帶震源由海溝附近淺，沿隱沒方向逐漸變深。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-96-41": {
    encouragement: "面向北方時星空繞天球北極逆時鐘轉；弧長比例可估曝光時間。",
    keyIdea: "星跡逆時鐘、約兩小時多，圓弧中心是天球北極，不一定正好是北極星。",
    steps: ["由星跡方向判為逆時鐘。", "用弧長占一圈比例估兩小時多，並辨認旋轉中心為天球北極。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "北方星空周日運動為逆時鐘。" }, B: { verdict: "incorrect", reason: "不是順時鐘。" },
      C: { verdict: "correct", reason: "弧長約占全天旋轉的十分之一，約兩小時多。" }, D: { verdict: "incorrect", reason: "弧長不足四小時多。" },
      E: { verdict: "incorrect", reason: "北極星接近中心但不等於精確中心。" }, F: { verdict: "correct", reason: "所有星跡共同圓心是天球北極。" }
    },
    takeaway: "北極星靠近天球北極，但兩者不是完全同一點。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-96-42": {
    encouragement: "沉積、褶皺、侵蝕、岩脈與斷層，逐一用覆蓋和截切排序。",
    keyIdea: "地層 6 早於褶皺，褶皺早於侵蝕面乙；地層 6 也早於岩脈，岩脈早於斷層甲。",
    steps: ["看 0～8 層先沉積後一起褶皺，再被乙削平。", "岩脈切地層後又被甲斷層錯開，得到 A、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地層 6 沉積後褶皺，最後形成侵蝕面乙。" }, B: { verdict: "incorrect", reason: "地層 6 早於岩脈與斷層。" },
      C: { verdict: "incorrect", reason: "侵蝕面乙晚於褶皺，不是最早。" }, D: { verdict: "incorrect", reason: "岩脈早於斷層甲，順序寫反。" },
      E: { verdict: "correct", reason: "地層 6 先沉積，岩脈後侵入，再被甲錯動。" }
    },
    takeaway: "切過別人的事件較晚，被切者較早。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-97-29": {
    encouragement: "砂岩由砂粒組成，粒徑約 0.0625～2 毫米，薄片要看比例尺。",
    keyIdea: "正式圖 B 的顆粒大小落在砂級，且呈碎屑顆粒互相膠結。",
    steps: ["利用各圖比例尺估算顆粒直徑。", "B 的顆粒屬砂級並符合碎屑岩結構。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 顆粒尺度或組織不符合砂岩。" }, B: { verdict: "correct", reason: "B 顆粒大小為砂級，且有膠結碎屑。" },
      C: { verdict: "incorrect", reason: "C 的晶體互鎖較像結晶岩。" }, D: { verdict: "incorrect", reason: "D 顆粒尺度或結構不是砂岩。" }
    },
    takeaway: "判砂岩不能只看顆粒像不像，還要對照比例尺。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-97-35": {
    encouragement: "颱風眼氣壓最低，離眼越遠氣壓越高，所以剖面像中間最低的谷。",
    keyIdea: "甲到乙氣壓下降、乙颱風眼最低、再往丙回升，對應 B。",
    steps: ["確認乙是颱風眼，應為最低氣壓。", "甲、丙位於兩側，曲線向兩端升高。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 沒有在乙形成最低谷。" }, B: { verdict: "correct", reason: "B 在乙最低，向甲、丙兩側升高。" },
      C: { verdict: "incorrect", reason: "C 在乙形成高值，方向相反。" }, D: { verdict: "incorrect", reason: "D 的最低點不在乙。" },
      E: { verdict: "incorrect", reason: "E 的單向變化不符穿越颱風眼。" }
    },
    takeaway: "穿過颱風中心的氣壓剖面應呈中間低、兩側高。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-97-36": {
    encouragement: "從月球看見的地球亮面，和地球看見的月球亮面互補。",
    keyIdea: "照片中的地球接近滿地，相對地從地球看月球接近新月，正式圖 D。",
    steps: ["判讀照片中地球受光比例。", "地相與月相互補，對照月相圖選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的月相與照片地相不互補。" }, B: { verdict: "incorrect", reason: "B 的受光比例不符。" },
      C: { verdict: "incorrect", reason: "C 不是當時地球所見月相。" }, D: { verdict: "correct", reason: "D 與照片中的地相呈互補關係。" },
      E: { verdict: "incorrect", reason: "E 的明暗方向或比例不對。" }
    },
    takeaway: "滿地對新月，新地對滿月，地相與月相互補。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-13": {
    encouragement: "斜向波浪會造成沿岸漂沙，防波堤上游側堆積、下游側侵蝕。",
    keyIdea: "依圖中沿岸漂沙方向，正式圖 C 正確畫出一側堆積、另一側侵蝕。",
    steps: ["由波浪斜入射判沿岸漂沙方向。", "沙先被防波堤攔住的一側堆積，另一側缺沙侵蝕。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的兩側變化與漂沙方向不符。" }, B: { verdict: "incorrect", reason: "B 把侵蝕與堆積側畫反。" },
      C: { verdict: "correct", reason: "C 正確呈現上游堆積、下游侵蝕。" }, D: { verdict: "incorrect", reason: "D 未反映防波堤阻斷漂沙。" },
      E: { verdict: "incorrect", reason: "E 的海岸線變化方向不合理。" }
    },
    takeaway: "防波堤會截斷沿岸漂沙，兩側常出現一積一蝕。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-15": {
    encouragement: "臺灣十二月太陽偏南，上午影子偏西北、下午偏東北。",
    keyIdea: "比較 10～14 時遮棚陰影移動範圍，丁車格能持續受到遮蔽。",
    steps: ["判斷冬季太陽位於南側天空。", "追蹤上午至下午影子由西北轉東北，丁位於共同陰影區。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲在部分時段會被陽光照到。" }, B: { verdict: "incorrect", reason: "乙無法從上午到下午都保持遮蔭。" },
      C: { verdict: "incorrect", reason: "丙在影子移動後會曝曬。" }, D: { verdict: "correct", reason: "丁落在 10～14 時遮棚陰影共同覆蓋區。" }
    },
    takeaway: "影子方向和太陽相反，且會隨時間由西向東移動。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-18": {
    encouragement: "逆斷層面由地表線向地下傾斜，沿傾向一側深度逐漸增加。",
    keyIdea: "依車籠埔斷層傾向，甲至丁的深度剖面符合正式圖 B。",
    steps: ["由題組地表變形判斷斷層傾斜方向。", "把傾斜面投影到甲至丁路線，對照 B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的深度變化方向不符斷層傾向。" }, B: { verdict: "correct", reason: "B 正確畫出斷層面沿剖面的深度變化。" },
      C: { verdict: "incorrect", reason: "C 把深淺關係畫反。" }, D: { verdict: "incorrect", reason: "D 的斷層面形狀不符合單一逆斷層。" },
      E: { verdict: "incorrect", reason: "E 的深度趨勢與地表斷層線不相容。" }
    },
    takeaway: "地表斷層線只是交點，地下還要依傾向延伸成斷層面。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-19": {
    encouragement: "表面溫度由赤道向高緯降低；鹽度在副熱帶高、赤道和高緯較低。",
    keyIdea: "正式圖 B 同時呈現溫度向北降低與鹽度中緯度較高。",
    steps: ["先找虛線由低緯往高緯下降。", "再找實線在副熱帶達高值、兩端較低，選 B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的溫度或鹽度緯向趨勢錯誤。" }, B: { verdict: "correct", reason: "B 符合溫度遞減與副熱帶高鹽。" },
      C: { verdict: "incorrect", reason: "C 的鹽度高低位置不符蒸發降雨分布。" }, D: { verdict: "incorrect", reason: "D 把溫度趨勢畫反或過度簡化。" },
      E: { verdict: "incorrect", reason: "E 未同時符合兩種性質。" }, F: { verdict: "incorrect", reason: "F 的曲線配置不符北半球海面資料。" }
    },
    takeaway: "海溫主要看日照緯度，鹽度還要看蒸發與降雨。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-98-20": {
    encouragement: "空氣上升膨脹降溫、下降壓縮增溫，山頂應是最低溫。",
    keyIdea: "由甲升到乙溫度下降，再降到丙而升高，正式圖 D 呈 V 形。",
    steps: ["甲到乙上升，溫度隨高度降低。", "乙到丙下降，溫度回升，最低點在乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 在乙形成最高溫，與上升降溫相反。" }, B: { verdict: "incorrect", reason: "B 全程下降，忽略下山增溫。" },
      C: { verdict: "incorrect", reason: "C 全程上升，與上山降溫不符。" }, D: { verdict: "correct", reason: "D 在山頂乙最低，兩側較暖。" },
      E: { verdict: "incorrect", reason: "E 幾乎不變，忽略絕熱溫度變化。" }
    },
    takeaway: "沒有外界熱交換時，上升冷卻、下降增溫。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-99-21": {
    encouragement: "莫拉克豪雨最強時，颱風西移後引進強盛西南氣流。",
    keyIdea: "路徑丙段最有利西南氣流持續撞上臺灣山區，帶來豪雨。",
    steps: ["比較各路段颱風中心相對臺灣位置。", "丙段使暖濕西南氣流長時間進入臺灣。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、乙階段尚非西南氣流最強時。" }, B: { verdict: "incorrect", reason: "乙段的環流與水氣輸送不如丙。" },
      C: { verdict: "correct", reason: "丙段引進強西南氣流並受地形抬升，最易豪雨。" }, D: { verdict: "incorrect", reason: "丁段系統遠離，主要豪雨已減弱。" }
    },
    takeaway: "颱風豪雨可發生在中心之外，關鍵是水氣輸送與地形。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-99-30": {
    encouragement: "北緯 40.7° 夏至太陽從東北升、正午在南方高空、往西北落。",
    keyIdea: "正午太陽仰角約 72.8°，軌跡偏南且東北升西北落，對應圖 B。",
    steps: ["正午仰角＝90°－40.7°＋23.5°≈72.8°。", "結合夏至日出東北、日落西北，選 B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的正午高度或方位不符北緯 40.7°。" }, B: { verdict: "correct", reason: "B 正確呈現夏至高仰角與東北升西北落。" },
      C: { verdict: "incorrect", reason: "C 的太陽路徑偏向錯誤半側天空。" }, D: { verdict: "incorrect", reason: "D 的最高高度或起落位置不符。" }
    },
    takeaway: "北回歸線以北，正午太陽全年都在南方天空。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-99-61": {
    encouragement: "作用力慢慢累積，超過臨界值就地震並突然下降；滑移越大下降越多。",
    keyIdea: "依四次地震間隔與滑移量，正式圖 B 正確呈現鋸齒狀累積和不同降幅。",
    steps: ["把四次古地震年代標在時間軸。", "事件間作用力上升，事件時下降，降幅依滑移量調整。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的地震時點或降幅與資料不符。" }, B: { verdict: "correct", reason: "B 同時符合持續累積、臨界破裂與滑移相關降幅。" },
      C: { verdict: "incorrect", reason: "C 未在正確事件時點下降或未達臨界。" }, D: { verdict: "incorrect", reason: "D 的作用力變化方向或降幅關係錯誤。" }
    },
    takeaway: "斷層應力像慢慢拉緊的橡皮筋，地震時突然釋放。",
    reviewStatus: "approved", reviewerRole: "earth"
  }
});
