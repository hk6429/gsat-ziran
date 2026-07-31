(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-102-6": {
    encouragement: "表格資訊很多，但用「石英、晶體大小、層理」三個線索就能逐一認出岩石。",
    keyIdea: "花岡岩晶體粗大且常含石英；玄武岩晶體細小且不含石英；砂岩屬沉積岩，具有層理。",
    steps: [
      "甲含石英、正長石與雲母，且晶體大而明顯，符合花岡岩。",
      "乙不含石英、晶體細小，且含輝石與橄欖石，符合玄武岩。",
      "丙具有層理，並含石英、長石與黏土礦物，符合砂岩。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲為粗粒且含石英的花岡岩；乙為細粒基性玄武岩；丙為有層理的砂岩。" },
      B: { verdict: "incorrect", reason: "乙沒有層理且含橄欖石、輝石，應是玄武岩，不是砂岩。" },
      C: { verdict: "incorrect", reason: "甲含石英且晶體粗大，應是花岡岩；乙才是玄武岩。" },
      D: { verdict: "incorrect", reason: "甲不是玄武岩，丙也不是花岡岩；丙的層理顯示它是砂岩。" },
      E: { verdict: "incorrect", reason: "甲沒有層理且晶體粗大，不是砂岩；丙有層理，才是砂岩。" }
    },
    takeaway: "粗粒含石英看花岡岩，細粒基性看玄武岩，有層理看砂岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-7": {
    encouragement: "這題把聖嬰轉成氣壓訊號；先找東太平洋偏低、西太平洋偏高的年份。",
    keyIdea: "聖嬰時暖水與對流向東移，使東太平洋氣壓偏低、西太平洋氣壓偏高。",
    steps: [
      "先比較每一年東、西太平洋的氣壓異常，不只看單一地區。",
      "聖嬰需要東太平洋相對低壓、西太平洋相對高壓。",
      "2028 年東太平洋為 -2、西太平洋為 +2，最符合聖嬰型態。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2024 年東、西太平洋都是 -2，沒有呈現聖嬰所需的東低西高氣壓差。" },
      B: { verdict: "incorrect", reason: "2026 年東太平洋 +1、西太平洋 -1，較接近東高西低的反聖嬰型態。" },
      C: { verdict: "correct", reason: "2028 年東太平洋氣壓偏低、西太平洋偏高，符合聖嬰時對流東移的氣壓配置。" },
      D: { verdict: "incorrect", reason: "2022 與 2026 都是東太平洋比西太平洋氣壓高，方向和聖嬰相反。" },
      E: { verdict: "incorrect", reason: "2024 年東西兩側同為 -2，不能只因東太平洋偏低就和 2028 一起判為聖嬰。" }
    },
    takeaway: "用氣壓判斷聖嬰要看東西差：東太平洋偏低、西太平洋偏高。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-8": {
    encouragement: "太陽風雖然叫作「風」，其實不是普通空氣，而是從太陽飛出的帶電粒子。",
    keyIdea: "太陽風主要由帶電粒子組成，受地球磁場導引後可在極區激發高層大氣，產生極光。",
    steps: [
      "太陽風中的質子、電子等粒子帶有電荷。",
      "地球磁場會影響帶電粒子的路徑，使許多粒子往南北磁極附近移動。",
      "粒子撞擊高層大氣，使氣體受激後發光，形成極光。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "太陽目前的主要能量來自核心的核融合，不是太陽風。" },
      B: { verdict: "incorrect", reason: "太陽風主要包含電子、質子等帶電粒子，不是以不帶電粒子為主。" },
      C: { verdict: "incorrect", reason: "地球磁場會使太陽風粒子較容易進入磁極附近，不是赤道受影響最大。" },
      D: { verdict: "correct", reason: "太陽風帶電粒子可沿磁場進入極區，撞擊高層大氣並激發氣體發出極光。" }
    },
    takeaway: "太陽風是帶電粒子流；地球磁場把影響集中到極區，因而形成極光。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-27": {
    encouragement: "臺灣天氣題先把季節和迎風面配對，就能避開看似熟悉的錯誤說法。",
    keyIdea: "梅雨與颱風是南部重要雨源；北部除這兩者外，也受東北季風與夏季午後雷陣雨影響。",
    steps: [
      "梅雨由滯留鋒造成，不是單純暖鋒通過。",
      "秋颱配合東北季風，主要容易使北部、東北部迎風面豪雨，不是西南氣流帶雨到東北部。",
      "逐區整理雨源後，可選出南部的梅雨、颱風與北部的東北季風、午後雷陣雨。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "臺灣梅雨主要和滯留鋒及西南氣流有關，不能說是暖鋒通過造成。" },
      B: { verdict: "incorrect", reason: "秋颱造成東北部大量降水常是颱風環流與東北季風共伴，不是引進西南氣流到東北部。" },
      C: { verdict: "correct", reason: "梅雨季與颱風季帶來的降水，都是臺灣南部重要水源。" },
      D: { verdict: "incorrect", reason: "東北季風帶來的冬雨多為地形抬升形成的穩定降雨，不是通常都伴隨雷聲閃電。" },
      E: { verdict: "correct", reason: "北部冬季受東北季風影響，夏季也有午後雷陣雨，兩者都是重要降水來源。" }
    },
    takeaway: "梅雨看滯留鋒，秋颱東北部豪雨看東北季風共伴；不同地區的主要雨源也不同。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-42": {
    encouragement: "CTD 的三個英文字母已給提示：C 代表 conductivity，也就是導電度。",
    keyIdea: "海水含鹽離子越多，導電能力通常越強；CTD 以導電度配合溫度與壓力換算鹽度。",
    steps: [
      "鹽溶於水後形成帶電離子，使海水能導電。",
      "儀器量得導電度，再配合溫度、壓力校正。",
      "因此 CTD 用來換算鹽度的直接量測值是導電度。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "CTD 的 C 就是導電度；海水導電度可配合溫度、壓力換算鹽度。" },
      B: { verdict: "incorrect", reason: "海水穩定度是密度分層的結果，不是 CTD 直接用來換算鹽度的電學量。" },
      C: { verdict: "incorrect", reason: "濁度反映水中懸浮顆粒多寡，和溶解鹽離子的鹽度不是同一性質。" },
      D: { verdict: "incorrect", reason: "氯度曾是估算鹽度的方法，但現代 CTD 現場主要直接量測導電度。" },
      E: { verdict: "incorrect", reason: "密度同時受溫度、鹽度與壓力影響，CTD 不是先量密度再換算鹽度。" }
    },
    takeaway: "CTD：導電度、溫度、深度；其中導電度是換算海水鹽度的關鍵。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-2": {
    encouragement: "這題找「不是直接因素」；能改變地球能量收支或熱量分配的才是氣候主角。",
    keyIdea: "地球磁場反轉主要改變磁場方向，並不直接大幅改變全球能量收支或熱量分配。",
    steps: [
      "海陸分布、溫鹽環流會重新分配熱量。",
      "大型火山噴發可用氣膠改變入射太陽能；地球軌道變化也會改變日照分配。",
      "磁場反轉不屬於上述直接控制氣候能量的主要機制。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海陸分布會影響反照率、海流與季風，能直接改變熱量分配。" },
      B: { verdict: "incorrect", reason: "大型火山噴發把氣膠送入高空，可反射陽光並使全球短期降溫。" },
      C: { verdict: "correct", reason: "地磁反轉主要是磁場方向改變，並非直接造成全球氣候變遷的主要因素。" },
      D: { verdict: "incorrect", reason: "溫鹽環流會搬運大量海洋熱能，改變可直接影響區域甚至全球氣候。" },
      E: { verdict: "incorrect", reason: "地球軌道參數變化會改變不同緯度與季節得到的日照，是長期氣候變化因素。" }
    },
    takeaway: "判斷氣候因素時，問它是否會直接改變能量收支或熱量分配。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-4": {
    encouragement: "氣壓就是上方空氣的重量比例，用海平面與高山氣壓相減即可。",
    keyIdea: "海拔三千公尺處還有約 700 百帕的上方空氣；海平面到該高度間約占總空氣重量的 30%。",
    steps: [
      "把海平面平均氣壓近似看成 1000 百帕，也就是整個空氣柱的 100%。",
      "三千公尺處氣壓約 700 百帕，代表其上方仍有約 70%的空氣重量。",
      "三千公尺以下所占比例為 100% − 70% = 30%。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10%只相當於約 100 百帕的氣壓差，題目從海平面到三千公尺約差 300 百帕。" },
      B: { verdict: "incorrect", reason: "20%仍低於由 1000 與 700 百帕差值換算出的約 30%。" },
      C: { verdict: "correct", reason: "海平面約 1000 百帕，三千公尺約 700 百帕，兩者差 300 百帕，約占 30%。" },
      D: { verdict: "incorrect", reason: "40%代表三千公尺處只剩約 600 百帕，和題給 700 百帕不符。" },
      E: { verdict: "incorrect", reason: "50%表示三千公尺以下已占一半空氣重量，但題給氣壓顯示只占約三成。" }
    },
    takeaway: "某高度以下的空氣重量比例，可用海平面氣壓減該高度氣壓，再除以海平面氣壓。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-24": {
    encouragement: "海嘯靠岸時可想成波浪進入淺水區：前進受阻，能量被擠得更高。",
    keyIdea: "海嘯進入淺水區後速度變慢，波長縮短，波高通常增大。",
    steps: [
      "海嘯波速和水深有關，水越淺，傳播速度越慢。",
      "後方波仍持續推進，能量在較短距離內集中。",
      "因此海嘯接近岸邊時常出現波速變慢、波高變高。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海嘯進入水深較小的近岸區，波速會降低，不會變快。" },
      B: { verdict: "incorrect", reason: "海嘯波速受水深控制，從深海到淺海不會保持不變。" },
      C: { verdict: "correct", reason: "淺水區的海嘯傳播速度比深海慢。" },
      D: { verdict: "correct", reason: "海嘯進入淺水區後能量集中、波長縮短，波高通常會上升。" },
      E: { verdict: "incorrect", reason: "近岸淺化作用會讓波高改變，通常不是維持原來高度。" },
      F: { verdict: "incorrect", reason: "海嘯靠岸時常因淺化作用而增高，不是變得更低。" }
    },
    takeaway: "海嘯靠岸的典型變化是「速度慢、波高高」。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-25": {
    encouragement: "把颱風由中心向外分成颱風眼、眼牆與外圍，就能判斷氣壓、風雨的差異。",
    keyIdea: "颱風中心氣壓最低；最強風雨通常集中在颱風眼周圍的眼牆。",
    steps: [
      "颱風是強烈低壓系統，越靠近中心，氣壓大致越低。",
      "颱風眼內常有下沉氣流，風雨反而較弱。",
      "眼牆有旺盛上升氣流，因此風速與降雨通常最大。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "颱風是低壓系統，中心颱風眼的海平面氣壓最低。" },
      B: { verdict: "incorrect", reason: "眼牆靠近低壓中心，氣壓很低，不是整個颱風中最高的位置。" },
      C: { verdict: "incorrect", reason: "眼牆的氣壓梯度很大，通常是風速最強區域，不是最小。" },
      D: { verdict: "correct", reason: "眼牆有強烈上升對流與積雨雲，通常降雨最大。" },
      E: { verdict: "incorrect", reason: "颱風眼內常以下沉氣流為主，最強上升運動位在眼牆。" }
    },
    takeaway: "颱風眼氣壓最低但較平靜；眼牆才是風雨最強的區域。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-26": {
    encouragement: "地球各圈層不是各自生活，而是一直交換物質與能量。",
    keyIdea: "地球系統的物質可在圈層間循環，主要外來能量來源是太陽。",
    steps: [
      "地球系統常分岩石圈、水圈、大氣圈與生物圈，各部分互相影響。",
      "水、碳等物質會在不同圈層間移動並循環。",
      "太陽供應大部分地表作用與生態系運轉所需能量。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "四大圈層通常包含生物圈；外太空不是用來取代生物圈的地球圈層。" },
      B: { verdict: "correct", reason: "水循環、碳循環等都顯示物質能在不同圈層間反覆移動。" },
      C: { verdict: "incorrect", reason: "生物會改變大氣成分、土壤與水循環，因此生態改變也可能影響地球系統平衡。" },
      D: { verdict: "incorrect", reason: "板塊變化雖慢，卻會影響地形、火山、大氣成分與長期氣候，不能說不重要。" },
      E: { verdict: "correct", reason: "太陽輻射驅動天氣、水循環與光合作用，是地球表層系統主要能量來源。" }
    },
    takeaway: "地球系統靠圈層互動運作：物質循環，能量主要來自太陽。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-37": {
    encouragement: "雷雨需要不穩定、充足水氣與抬升；找出缺少這些條件的環境即可。",
    keyIdea: "乾冷且穩定的極地大陸氣團中心，以及以下沉氣流為主的太平洋高壓中心，都不利雷雨。",
    steps: [
      "極地大陸氣團中心乾冷，水氣少且大氣通常穩定。",
      "太平洋高壓中心的空氣下沉增溫，會抑制雲向上發展。",
      "鋒面、西南氣流與夏日午後加熱都能提供水氣或舉升，較容易發生雷雨。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "極地大陸氣團中心通常乾冷、穩定，缺少充沛水氣與強烈上升運動。" },
      B: { verdict: "incorrect", reason: "春季鋒面可迫使暖濕空氣上升，在條件合適時能形成雷雨。" },
      C: { verdict: "incorrect", reason: "梅雨季西南氣流帶來大量暖濕空氣，有利對流與雷雨發展。" },
      D: { verdict: "incorrect", reason: "夏日下午地面強烈加熱使空氣上升，是臺灣常見雷雨條件。" },
      E: { verdict: "correct", reason: "太平洋高壓中心以下沉氣流為主，大氣較穩定，會抑制積雨雲。" }
    },
    takeaway: "雷雨怕乾、怕穩定、怕下沉；水氣多、抬升強、不穩定才容易發展。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-41": {
    encouragement: "我們觀測宇宙時也會被自己的銀河系擋住，就像隔著一片有灰塵的玻璃看遠方。",
    keyIdea: "銀河系盤面的恆星、氣體與塵埃會遮蔽後方星系，形成繞天球一圈的低星系數區域。",
    steps: [
      "我們位在銀河系盤面內，沿盤面方向會穿過大量恆星與星際塵埃。",
      "銀河盤在天球上投影成繞天空一圈的大圓。",
      "塵埃吸收與散射遠方星系的可見光，使這一帶觀測到的星系較少。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "該區星系看似較少主要是觀測受到遮蔽，不代表宇宙中真的形成一圈星系空洞。" },
      B: { verdict: "incorrect", reason: "仙女座星系只占天空一小區，不可能遮成環繞全天的大圓。" },
      C: { verdict: "incorrect", reason: "大小麥哲倫星系的角範圍有限，也不會在天球形成一整圈遮蔽。" },
      D: { verdict: "correct", reason: "銀河系盤面環繞天球成大圓，其中的氣體與塵埃會遮住盤面後方的星系。" },
      E: { verdict: "incorrect", reason: "觀測到的大圓分布和銀河盤方向吻合，不是宇宙物質被分成兩大部分。" }
    },
    takeaway: "沿銀河盤面看出去，星際塵埃遮蔽最強，因此較難看見銀河系外的星系。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-43": {
    encouragement: "到時差可以先換成距離，再回推地震發生時間；分兩個測站算就不亂。",
    keyIdea: "P、S 波速為 6、4 公里／秒時，到時差每 12 公里增加 1 秒。",
    steps: [
      "到時差為 d/4 − d/6 = d/12；甲站差 10 秒，所以距震源 120 公里。",
      "P 波到甲站需 120 ÷ 6 = 20 秒，因此地震發生於 9:25:10。",
      "乙站差 30 秒，距離 360 公里，P 波需 60 秒，所以在 9:26:10 到達。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "9:25:40只比甲站 P 波晚 10 秒，但乙站比甲站遠 240 公里，P 波需多走 40 秒。" },
      B: { verdict: "incorrect", reason: "9:25:50只多 20 秒，沒有完整反映兩測站 P 波旅行時間的 40 秒差。" },
      C: { verdict: "incorrect", reason: "9:26:00比甲站晚 30 秒，仍少了 10 秒。" },
      D: { verdict: "correct", reason: "乙站 P 波比甲站晚 40 秒，由 9:25:30 加 40 秒得到 9:26:10。" },
      E: { verdict: "incorrect", reason: "9:26:20比正確到時晚了 10 秒，相當於多算了部分旅行時間。" }
    },
    takeaway: "先用 P、S 到時差求距離，再用 P 波旅行時間回推發震與到站時刻。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-45": {
    encouragement: "光譜題抓住三種情境：熱而密發連續光、熱稀薄氣體發明線、連續光穿冷氣體出暗線。",
    keyIdea: "白熾燈泡產生連續光譜；原子中電子由高能階回到低能階時，會放出特定波長的發射線。",
    steps: [
      "白熾燈絲是高溫且緻密的固體，會發出連續光譜。",
      "低溫氣體位在連續光源前方，會吸收特定波長，形成吸收暗線。",
      "受激電子回到較低能階時，放出固定能量的光子，形成發射明線。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "高溫緻密的白熾燈絲會發出涵蓋連續波長的連續光譜。" },
      B: { verdict: "incorrect", reason: "低溫氣體包圍或位於連續光源前方時，主要吸收特定波長，形成吸收暗線，不是發光明線。" },
      C: { verdict: "incorrect", reason: "各種元素的原子都有自己的能階，都可能產生具有特徵的發射或吸收光譜。" },
      D: { verdict: "incorrect", reason: "太陽可見光是連續光譜上疊有許多吸收暗線，不是單純發射光譜。" },
      E: { verdict: "correct", reason: "電子由高能階跳回低能階會放出特定能量光子，呈現特定波長的發射明線。" }
    },
    takeaway: "電子上跳吸收能量、下跳放出光；連續光穿過較冷氣體會留下吸收暗線。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-47": {
    encouragement: "氣象名詞只要回到量測方式，就能判斷敘述是否合理。",
    keyIdea: "乾濕球溫差越大代表空氣越乾；雲量與雲狀目前仍常需人工目視判讀。",
    steps: [
      "濕球蒸發越快就降溫越多；乾燥空氣中蒸發強，因此乾濕球溫差大。",
      "相對濕度要同時比較氣溫與露點，只知道露點本身不夠。",
      "雲形複雜且變化快，傳統地面站仍仰賴人工辨認雲量與雲狀。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "北風是從北方吹來、往南方吹的風，不是向北吹。" },
      B: { verdict: "correct", reason: "空氣越乾，濕球水分蒸發越快、降溫越多，所以乾濕球溫差越大、相對濕度越小。" },
      C: { verdict: "incorrect", reason: "相對濕度取決於氣溫與實際水氣；相同露點在不同氣溫下會有不同相對濕度。" },
      D: { verdict: "incorrect", reason: "氣壓與溫度會影響儀器量測，氣壓計不應任意放在日照加熱處。" },
      E: { verdict: "correct", reason: "雲量和雲狀需要辨認天空覆蓋比例與雲的外形，傳統觀測仍常由人員目視完成。" }
    },
    takeaway: "風向說風吹來的方向；乾濕球溫差越大越乾；相對濕度不能只看露點。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-19": {
    encouragement: "隱沒帶像斜插進地球的板塊，地震可以一路變深；中洋脊只在淺處裂開。",
    keyIdea: "隱沒板塊可產生淺、中、深源地震；中洋脊岩石在淺部張裂，以淺源地震為主。",
    steps: [
      "聚合邊界的隱沒板塊由海溝向地函深處延伸。",
      "板塊沿隱沒方向可在不同深度破裂，形成由淺到深的地震帶。",
      "中洋脊的張裂與岩漿活動集中在地殼淺部，所以主要是淺源地震。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "隱沒板塊可深入數百公里，因此隱沒帶也會有深源地震。" },
      B: { verdict: "incorrect", reason: "隱沒帶不只淺源地震；中洋脊也不是以中源地震為典型。" },
      C: { verdict: "incorrect", reason: "地震深度分布說反了：隱沒帶可深，中洋脊主要淺。" },
      D: { verdict: "correct", reason: "隱沒帶沿下沉板塊可有淺、中、深源地震；中洋脊以淺源地震為主。" },
      E: { verdict: "incorrect", reason: "中洋脊沒有深入地函的冷隱沒板塊，不會典型地出現由淺到深的地震。" }
    },
    takeaway: "隱沒帶地震由淺到深；中洋脊張裂發生在淺部，所以地震以淺源為主。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-24": {
    encouragement: "湧升流雖然流得慢，卻會把深層冷水與營養鹽送到海面，影響很大。",
    keyIdea: "湧升流常由風或地形造成，帶來低溫、高營養鹽的深層水；聖嬰時祕魯湧升流會減弱。",
    steps: [
      "風把沿岸表水推離海岸時，深層水會上升補充；海底地形也能迫使水流上升。",
      "深層水通常較冷，且累積有機物分解釋出的營養鹽。",
      "聖嬰時東太平洋暖水加深，祕魯外海湧升冷水受到抑制。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海洋垂直流速通常遠小於水平流速，湧升流不需要很快也能長期搬運水體。" },
      B: { verdict: "correct", reason: "聖嬰時祕魯外海暖水層增厚，冷水湧升會顯著減弱，嚴重時近似消失。" },
      C: { verdict: "correct", reason: "沿岸風造成表水輻散，或海底地形抬升水流，都能形成湧升流。" },
      D: { verdict: "incorrect", reason: "湧升流把深層冷水帶上來，表層海水溫度通常較低。" },
      E: { verdict: "correct", reason: "深層水含有較多由有機物分解釋出的營養鹽，湧升後使表層營養鹽增加。" }
    },
    takeaway: "湧升流的三個關鍵：風或地形造成、表面變冷、營養鹽增加。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-65": {
    encouragement: "冰期進入間冰期時，先想「冰變少」對海水與陸地重量造成的兩種影響。",
    keyIdea: "陸冰融化會使海平面上升；卸除冰層重量後，原本下沉的陸地會逐漸回彈上升。",
    steps: [
      "冰川與冰原融化，把原本在陸地上的水送入海洋，海平面上升。",
      "厚冰曾把地殼向下壓；融冰卸載後，地殼因均衡作用逐漸抬升。",
      "融冰淡水反而可能削弱溫鹽環流，與火山熱點活動也沒有直接必然關係。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "陸地冰川、冰原融化後水進入海洋，使全球平均海平面上升。" },
      B: { verdict: "correct", reason: "冰層重量移除後，原先被壓低的陸地會發生冰後回彈，逐漸抬升。" },
      C: { verdict: "incorrect", reason: "大量淡水注入會降低高緯海水鹽度與密度，可能削弱深層水形成和溫鹽環流。" },
      D: { verdict: "incorrect", reason: "升溫通常使蒸發量增加，不是降低；全球降雨分布也不會簡化為處處變少。" },
      E: { verdict: "incorrect", reason: "熱點火山主要受地球內部作用控制，不會因冰期轉間冰期就必然旺盛。" }
    },
    takeaway: "融陸冰會同時造成海平面上升，以及冰層卸載地區的地殼回彈。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-67": {
    encouragement: "空氣翻過山頂後下降，就像被壓縮的打氣筒：壓力與溫度都會上升。",
    keyIdea: "空氣下沉時受壓絕熱增溫，氣壓上升、飽和水氣壓增加，相對濕度下降。",
    steps: [
      "空氣從山頂往低處移動，外界氣壓增大，空氣受到壓縮而升溫。",
      "溫度升高會使飽和水氣壓增加，也就是空氣容納水氣的能力變強。",
      "若沒有新的水氣加入，實際水氣相對於飽和值的比例降低，因此相對濕度下降。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "下沉空氣受壓縮會絕熱增溫，不是溫度下降。" },
      B: { verdict: "correct", reason: "由山頂下降到平原，海拔降低，上方空氣重量增加，因此氣壓上升。" },
      C: { verdict: "incorrect", reason: "空氣下沉增溫；溫度越高，飽和水氣壓越高，不是下降。" },
      D: { verdict: "correct", reason: "增溫使飽和水氣壓上升，而水氣沒有相同比例增加，所以相對濕度降低。" },
      E: { verdict: "incorrect", reason: "在水氣量未流失的絕熱壓縮中，總氣壓上升，水氣分壓不會因下沉而降低。" }
    },
    takeaway: "越山後下沉：氣壓升、溫度升、飽和水氣壓升、相對濕度降。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-105-22": {
    encouragement: "地球若收到的能量比放出的多，就像存款一直增加，平均溫度自然會上升。",
    keyIdea: "地球能量不平衡時，淨吸收能量為正會使系統累積熱能並升溫。",
    steps: [
      "比較地表接收與放出的能量，不必先計算複雜數字。",
      "若接收大於放出，多出的能量會留在地球系統中。",
      "能量持續累積，會使平均溫度上升，直到建立新的平衡。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "冬季高緯較冷主要因太陽高度角低、白晝短，單位面積日照少，不是距太陽明顯較遠。" },
      B: { verdict: "incorrect", reason: "地球主要以電磁輻射把能量送入太空；真空中無法靠一般物質傳導散熱。" },
      C: { verdict: "correct", reason: "接收能量大於放出能量時，地球系統累積熱能，平均溫度會上升。" },
      D: { verdict: "incorrect", reason: "溫室氣體主要吸收地表放出的紅外線長波輻射，不是以吸收太陽短波為主。" },
      E: { verdict: "incorrect", reason: "地表吸收太陽能後主要以紅外線長波放出；反射才仍屬太陽短波。" }
    },
    takeaway: "地球主要靠輻射交換能量；收得比放得多就升溫，放得比收得多就降溫。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
