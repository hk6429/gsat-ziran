window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-83-1": {
    encouragement: "顯微鏡倍率越低，看到的範圍越大；先抓住這條規則就能排除其他染色敘述。",
    keyIdea: "低倍鏡視野範圍較大，因此同一標本中可看到較多細胞。",
    steps: [
      "低倍鏡放大較少，但視野直徑與面積較大。",
      "高倍鏡只放大較小區域，所以看到的細胞數較少。",
      "亞甲藍主要增加細胞核對比；一般表皮細胞也不一定有葉綠體。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "亞甲藍主要用來增加細胞核等構造的對比，光學顯微鏡看不到核糖體。" },
      B: { verdict: "incorrect", reason: "一般葉片表皮細胞通常沒有葉綠體，葉片綠色主要來自葉肉細胞。" },
      C: { verdict: "incorrect", reason: "碘液主要用來檢驗澱粉，不是讓葉綠體更清楚。" },
      D: { verdict: "correct", reason: "低倍鏡視野較大，同一標本中可同時看到較多細胞。" }
    },
    takeaway: "低倍視野大、細胞多；高倍視野小、細節多。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-83-2": {
    encouragement: "O 型子女最有提示力：父母都必須能提供 i；再配合一人 A 型、一人 B 型即可。",
    keyIdea: "能生 O 型 ii 子女，A 型父親需為 IAi，B 型母親需為 IBi。",
    steps: [
      "O 型子女基因型是 ii，兩個 i 必須各來自一位親代。",
      "A 型親代若帶 i，基因型為 IAi；B 型親代若帶 i，基因型為 IBi。",
      "IAi×IBi 可產生 A、B、AB、O 四種血型。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "IAIA 與 IBIB 只能生 IAIB 的 AB 型子女。" },
      B: { verdict: "incorrect", reason: "IAIA 親代不能提供 i，因此不可能生 O 型子女。" },
      C: { verdict: "incorrect", reason: "兩位親代都只有 IA 或 i，不能提供 IB，無法生 B 型子女。" },
      D: { verdict: "correct", reason: "IAi×IBi 可分別產生 IAi、IBi、IAIB、ii，包含 A、B、AB、O 型。" }
    },
    takeaway: "看到 O 型子女，就知道兩位親代都帶 i。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-83-4": {
    encouragement: "減數分裂是為了把染色體套數減半，主要出現在形成配子或孢子的過程。",
    keyIdea: "花藥中的細胞經減數分裂形成小孢子，再發育成花粉粒。",
    steps: [
      "雄蕊花藥要形成花粉，先由小孢子母細胞進行減數分裂。",
      "受精卵發育、種子萌發與表皮更新都靠有絲分裂。",
      "因此只有花粉形成過程需要減數分裂。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "受精卵以有絲分裂增加細胞數並形成胚。" },
      B: { verdict: "correct", reason: "花藥中的小孢子母細胞需經減數分裂形成單套小孢子，之後發育成花粉。" },
      C: { verdict: "incorrect", reason: "種子萌發時胚細胞進行有絲分裂與伸長，不是減數分裂。" },
      D: { verdict: "incorrect", reason: "表皮細胞產生新細胞屬體細胞有絲分裂。" }
    },
    takeaway: "形成配子或孢子要減數分裂；生長與修補多靠有絲分裂。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-84-3": {
    encouragement: "砍伐雨林直接影響的是物質循環與棲地；臭氧層、酸雨則不是由砍樹直接造成。",
    keyIdea: "雨林砍伐會減少光合作用、干擾碳氧循環，並造成大量物種失去棲地。",
    steps: [
      "樹木減少使光合作用與碳固定量下降，碳、氧循環受到影響。",
      "熱帶雨林棲地複雜、物種多，破壞後許多生物可能滅絕。",
      "臭氧破洞與酸化主要另有化學污染來源，不能直接歸因於砍伐。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙合理，但丁的湖泊酸化不是砍伐雨林必然造成的直接後果。" },
      B: { verdict: "incorrect", reason: "丙合理；甲、丁分別偏向臭氧破壞與酸性污染，並非砍伐的直接結果。" },
      C: { verdict: "correct", reason: "雨林減少會干擾碳氧循環，也會使大量物種失去棲地而減少。" },
      D: { verdict: "incorrect", reason: "甲與丁不屬大量砍伐雨林的直接、主要後果。" }
    },
    takeaway: "森林的兩大價值：參與碳氧循環，並提供高度多樣的棲地。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-84-4": {
    encouragement: "A 型與 B 型親代若都帶 i，四種血型都有可能出現；題目問可能性，要保留所有基因型組合。",
    keyIdea: "A 型可能是 IAi，B 型可能是 IBi；此交配可產生 A、B、AB、O 四種血型。",
    steps: [
      "A 型親代可能提供 IA 或 i，B 型親代可能提供 IB 或 i。",
      "四種配子組合為 IAIB、IAi、IBi、ii。",
      "分別對應 AB、A、B、O 型，且與子女性別無關。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若雙方帶 i，除了 A、B 外也可能有 AB 與 O 型。" },
      B: { verdict: "incorrect", reason: "此項漏掉兩位親代各提供 i 時可能出現的 O 型。" },
      C: { verdict: "incorrect", reason: "此項漏掉 IA 與 IB 結合形成的 AB 型。" },
      D: { verdict: "correct", reason: "IAi×IBi 可產生 A、B、AB、O 四種血型。" },
      E: { verdict: "incorrect", reason: "ABO 基因在體染色體，血型可能性不依兒子或女兒而不同。" }
    },
    takeaway: "ABO 血型是體染色體遺傳，和性別無關。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-84-5": {
    encouragement: "消化起點可以沿消化道記：澱粉在口腔、蛋白質在胃、脂肪主要在小腸。",
    keyIdea: "脂肪的主要化學消化由小腸中的脂肪酶開始進行。",
    steps: [
      "口腔唾液澱粉酶先分解澱粉。",
      "胃蛋白酶在胃中開始蛋白質消化。",
      "膽汁乳化脂肪，胰脂肪酶在小腸分解脂肪。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "澱粉最先在口腔受唾液澱粉酶作用，不是胃。" },
      B: { verdict: "correct", reason: "脂肪主要到小腸後，受膽汁乳化並由脂肪酶進行化學消化。" },
      C: { verdict: "incorrect", reason: "蛋白質主要從胃開始受胃蛋白酶分解。" },
      D: { verdict: "incorrect", reason: "澱粉雖會在小腸繼續消化，但最先開始於口腔。" }
    },
    takeaway: "口腔澱粉、胃蛋白、小腸脂肪，是常用的消化起點口訣。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-84-10": {
    encouragement: "一般雨水本來略酸；真正造成酸雨的是含硫、含氮污染物形成較強的酸。",
    keyIdea: "燃燒含硫燃料產生硫氧化物，溶入雨水形成酸性物質，是酸雨重要來源。",
    steps: [
      "工廠、燃煤等排放二氧化硫等硫氧化物。",
      "硫氧化物在大氣中反應並溶於水，形成酸性降水。",
      "汽機車氮氧化物也可參與酸雨；酸雨會傷害植物、水域與建物。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "硫氧化物溶入雲雨並形成硫酸等，是酸雨的重要成因。" },
      B: { verdict: "incorrect", reason: "一般 CO₂ 溶水只使自然雨水略酸，通常不足以造成題目所稱的酸雨污染。" },
      C: { verdict: "incorrect", reason: "汽機車排放的氮氧化物也可形成硝酸，與酸雨有關。" },
      D: { verdict: "incorrect", reason: "酸雨會傷害植物葉片、土壤與根系，也會影響水生生物。" }
    },
    takeaway: "酸雨主要看硫氧化物與氮氧化物，不是自然濃度的二氧化碳。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-17": {
    encouragement: "酵素是催化工具，不是所有蛋白質；相同反應在動植物中常會用到功能相近的酵素。",
    keyIdea: "相似的生化反應需要相似催化功能，動植物細胞可具有功能相近的酵素。",
    steps: [
      "多數酵素是蛋白質，但結構蛋白、抗體等蛋白質不是酵素。",
      "酵素離開細胞後，只要條件合適仍可催化。",
      "分解不同受質需要具專一性的不同酵素。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "蛋白質種類很多，只有具有催化功能的一部分是酵素。" },
      B: { verdict: "incorrect", reason: "酵素在試管或消化道中，只要溫度、酸鹼值合適仍可作用。" },
      C: { verdict: "correct", reason: "動植物若進行相似代謝反應，常需要功能相似的酵素催化。" },
      D: { verdict: "incorrect", reason: "澱粉酶專一分解澱粉，不能切斷纖維素不同型態的鍵結。" }
    },
    takeaway: "酵素有專一性；多數酵素是蛋白質，但蛋白質不全是酵素。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-18": {
    encouragement: "生態系少不了分解者；微生物把遺體拆回小分子，讓物質能再被利用。",
    keyIdea: "細菌、真菌等分解者能分解生物遺體與殘留物，推動物質循環。",
    steps: [
      "生物與非生物環境都不可缺，不能硬分誰一定較重要。",
      "分解者把遺體有機物分解，釋放無機養分。",
      "藻類在有光與合適條件下可於潮濕陸地生活；光也會影響植物發育與開花。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "理化因素與生物因素都會限制生存，不能概括說一方必然更重要。" },
      B: { verdict: "correct", reason: "許多微生物是分解者，可分解動植物遺體與排泄殘留物。" },
      C: { verdict: "incorrect", reason: "部分藻類可生活在潮濕土壤、岩石或共生體中，不只在水中光合。" },
      D: { verdict: "incorrect", reason: "光週期與光質會影響植物生長、休眠與開花。" }
    },
    takeaway: "分解者把有機物還原成可循環的養分，是生態系清道夫。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-21": {
    encouragement: "黃脂兔和白脂兔吃同樣色素卻結果不同，差別最可能在能不能把黃色素分解。",
    keyIdea: "白脂兔能分解食物中的黃色素，所以不累積黃脂；黃脂兔缺少此分解能力。",
    steps: [
      "黃色素來自飼料，不是兔子自行合成。",
      "黃脂兔吃到黃色素才累積，表示它不能有效分解。",
      "白脂兔吃同樣飼料仍不形成黃脂，表示具有分解黃色素的酵素。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "黃色素由胡蘿蔔等飼料提供，黃脂兔不必自行合成。" },
      B: { verdict: "incorrect", reason: "白脂不是因合成白色色素，而是沒有累積黃色素。" },
      C: { verdict: "incorrect", reason: "黃脂兔會累積黃色素，表示分解能力不足，不是具有分解酵素。" },
      D: { verdict: "correct", reason: "白脂兔能把攝入的黃色素分解，因此不在脂肪中累積。" }
    },
    takeaway: "表徵常由基因與環境共同決定；飼料提供色素，基因決定能否分解。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-25": {
    encouragement: "失重時下肢不再因重力蓄積較多血液，體液會往上半身重新分布。",
    keyIdea: "地球重力使直立者下肢靜脈回流較困難；進入太空後體液上移，臉腫腿細。",
    steps: [
      "在地球直立時，重力使較多血液與組織液分布於下肢。",
      "微重力環境解除這個上下差異，體液向胸部與頭部移動。",
      "所以臉部較膨、腿部稍細，第二句可解釋第一句。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩句皆正確，且地球重力造成的下肢液體分布正能解釋失重後體液上移。" },
      B: { verdict: "incorrect", reason: "第二句不只正確，也能直接解釋第一句的臉膨、腿細。" },
      C: { verdict: "incorrect", reason: "第二句對直立時重力影響靜脈回流的描述正確。" },
      D: { verdict: "incorrect", reason: "太空人初入微重力時確會出現上半身體液增加現象。" },
      E: { verdict: "incorrect", reason: "兩句均有生理依據，不是都錯。" }
    },
    takeaway: "微重力會讓原本受重力拉向下肢的體液重新往上半身分布。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-26": {
    encouragement: "擴散和滲透都不限定活細胞；主動運輸才需要膜蛋白與能量。",
    keyIdea: "細胞膜上的運輸蛋白使細胞能以能量進行主動運輸。",
    steps: [
      "擴散可在非生物系統發生，不需要活細胞。",
      "滲透是水通過選擇性膜的移動，動植物細胞都會發生。",
      "主動運輸需細胞膜運輸蛋白與 ATP，能逆濃度梯度搬運物質。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "動物細胞也會因滲透而吸水或失水，不是只有植物有滲透壓。" },
      B: { verdict: "incorrect", reason: "香水在空氣中散開等非生物情境也會發生擴散。" },
      C: { verdict: "correct", reason: "細胞膜上的幫浦等蛋白可利用能量進行主動運輸。" },
      D: { verdict: "incorrect", reason: "滲透專指水通過選擇性膜，不是任何物質有濃度差都叫滲透。" }
    },
    takeaway: "擴散看各種粒子；滲透只看水；主動運輸要膜蛋白與能量。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-27": {
    encouragement: "開花植物的受精地點在胚珠內；授粉只是把花粉送到柱頭，還不是受精。",
    keyIdea: "花粉管進入胚珠後，精核與卵核在胚珠內完成受精。",
    steps: [
      "花粉落在柱頭後萌發花粉管。",
      "花粉管穿過花柱進入子房內的胚珠。",
      "精核與胚珠中的卵核結合，形成受精卵。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "無性生殖如分裂、出芽不需減數分裂。" },
      B: { verdict: "correct", reason: "開花植物精核沿花粉管到胚珠，與卵核在胚珠內受精。" },
      C: { verdict: "incorrect", reason: "胚根發育成幼根；胚軸連接胚根與子葉，不是胚軸形成幼根。" },
      D: { verdict: "incorrect", reason: "有性生殖經重組與配子結合，子代不會與親代遺傳性狀完全相同。" }
    },
    takeaway: "授粉在柱頭，受精在胚珠；胚根才發育成幼根。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-28": {
    encouragement: "物鏡外觀可幫忙辨認倍率：短的是低倍、長的是高倍；高倍觀察則只用細調節。",
    keyIdea: "複式顯微鏡的低倍物鏡較短，高倍物鏡較長。",
    steps: [
      "低倍物鏡工作距離較長，鏡筒本身通常較短。",
      "高倍視野較暗，需要較多光線。",
      "高倍時只用細調節輪，避免鏡頭撞破玻片。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "弱光時用凹面鏡聚光較合適；凸面鏡較常用於光線充足時。" },
      B: { verdict: "correct", reason: "同一組物鏡通常低倍較短，高倍較長。" },
      C: { verdict: "incorrect", reason: "高倍視野較暗，需要調整光圈或光源增加亮度。" },
      D: { verdict: "incorrect", reason: "高倍只能用細調節輪微調焦距，粗調容易撞到玻片。" }
    },
    takeaway: "低倍物鏡短、高倍物鏡長；高倍只用細調節。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-29": {
    encouragement: "把污染物對應影響：硫氧化物造成酸雨，一氧化碳主要妨礙血紅素運氧。",
    keyIdea: "燃煤會排放含硫氣體，形成硫酸等酸性物質，造成酸雨。",
    steps: [
      "煤中的硫燃燒後形成二氧化硫等。",
      "硫氧化物在大氣中反應並溶於雨水，使雨水 pH 降低。",
      "逆溫是暖空氣蓋住近地冷空氣；汽車也會排氮氧化物。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "逆溫是上方暖空氣覆蓋下方冷空氣，阻止垂直對流；選項寫反。" },
      B: { verdict: "incorrect", reason: "汽車高溫燃燒會產生氮氧化物。" },
      C: { verdict: "incorrect", reason: "一氧化碳主要與血紅素結合造成缺氧，不是主要溫室氣體。" },
      D: { verdict: "correct", reason: "燃煤排放硫氧化物，會形成酸性降水。" }
    },
    takeaway: "逆溫困住污染；燃煤硫氧化物造成酸雨；一氧化碳妨礙運氧。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-49": {
    encouragement: "動植物細胞都有核糖體製造蛋白質，也都由細胞核中的遺傳訊息調控活動。",
    keyIdea: "核糖體是共同的蛋白質合成場所；細胞核掌握遺傳訊息並調控細胞。",
    steps: [
      "動植物細胞都有細胞膜、細胞質、核糖體與細胞核。",
      "核糖體依 mRNA 訊息組合胺基酸。",
      "細胞核的 DNA 透過基因表現調控細胞活動。",
      "染色體由 DNA 與蛋白質構成，不等同單一 DNA 分子。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高基氏體動植物都有；中心粒常見於動物細胞，不是植物特有。" },
      B: { verdict: "correct", reason: "動植物細胞的核糖體都負責蛋白質合成。" },
      C: { verdict: "incorrect", reason: "動物細胞可有小液泡、囊泡，且還有其他儲存方式。" },
      D: { verdict: "correct", reason: "細胞核保存 DNA，透過基因表現調控動植物細胞活動。" },
      E: { verdict: "incorrect", reason: "染色體由 DNA 和蛋白質組成，不能簡化成 DNA 就是染色體。" }
    },
    takeaway: "核糖體做蛋白質；細胞核管基因；染色體是 DNA 加蛋白質的組合。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-50": {
    encouragement: "先把兩條運輸路線分開：木質部運水，韌皮部運糖；再判斷各自受到哪些力量影響。",
    keyIdea: "木質部的細管構造有毛細作用；韌皮部運輸有機物不由蒸散直接控制。",
    steps: [
      "木質部由導管、管胞等構成，篩管屬韌皮部。",
      "水在細小導管中會受到附著力、凝聚力影響，產生毛細作用；蒸散拉力則是水上升的重要力量。",
      "韌皮部靠糖源與糖庫間的壓力流運送有機物，不直接受蒸散控制。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "篩管屬韌皮部，不是木質部。" },
      B: { verdict: "incorrect", reason: "導管之間可經穿孔與紋孔連通，水柱不是彼此完全獨立。" },
      C: { verdict: "correct", reason: "木質部的導管很細，水分會因附著力與凝聚力產生毛細作用；這是木質部水分運輸涉及的作用之一。" },
      D: { verdict: "incorrect", reason: "根壓只能把水推升一段有限距離，不能保證在沒有蒸散拉力時仍把水輸送到葉部。" },
      E: { verdict: "correct", reason: "韌皮部運輸由糖的裝載、卸載與壓力差驅動，不由蒸散直接控制。" }
    },
    takeaway: "木質部的細管有毛細作用，蒸散拉力也很重要；韌皮部運糖則不受蒸散直接控制。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-51": {
    encouragement: "等位基因是一對版本；中間型遺傳則是雜合子表現介於兩親之間。",
    keyIdea: "R 與 r 是同一基因的等位基因；紫茉莉花色是不完全顯性的中間型遺傳。",
    steps: [
      "同一基因座的不同版本稱等位基因，例如 R 與 r。",
      "紫茉莉紅花 RR、白花 rr，雜合 Rr 為粉紅花。",
      "豌豆主要自花授粉，色盲兒子的 X 來自母親，多數性狀也可能受多基因控制。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "豌豆主要自花授粉，容易保存純系，不是因異花授粉。" },
      B: { verdict: "correct", reason: "R 與 r 位於同一基因座、控制同一性狀，是一對等位基因。" },
      C: { verdict: "incorrect", reason: "男子的 X 染色體來自母親，Y 才來自父親，色盲基因不直接由父傳子。" },
      D: { verdict: "incorrect", reason: "身高等許多性狀由多個基因與環境共同影響。" },
      E: { verdict: "correct", reason: "紫茉莉雜合子呈粉紅色，介於紅、白之間，屬中間型遺傳。" }
    },
    takeaway: "等位基因是同一位置的不同版本；不完全顯性讓雜合子呈中間表徵。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-16": {
    encouragement: "物質通路要依器官順序排列：組織產生二氧化碳，血液送到肺泡，再呼出體外。",
    keyIdea: "二氧化碳由組織進入血液，運到肺泡後擴散進空氣並排出。",
    steps: [
      "細胞呼吸產生二氧化碳，先擴散到組織微血管。",
      "靜脈血將它送到右心，再經肺循環到肺部。",
      "二氧化碳由血液擴散進肺泡，最後呼出大氣。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "葉製造的糖主要由韌皮部篩管運輸，不是木質部導管。" },
      B: { verdict: "incorrect", reason: "尿液由腎經輸尿管到膀胱，再經尿道排出；順序寫反。" },
      C: { verdict: "correct", reason: "組織產生的二氧化碳進入血液，運到肺泡後排入大氣。" },
      D: { verdict: "incorrect", reason: "右心室血液先進肺動脈，到肺後再由肺靜脈回左心房。" }
    },
    takeaway: "肺循環：右心室→肺動脈→肺→肺靜脈→左心房。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-17": {
    encouragement: "組織需要氧，所以到組織微血管時，氧合血紅素會把氧釋放出來。",
    keyIdea: "組織氧分壓低，氧合血紅素解離成血紅素與氧，氧再擴散進細胞。",
    steps: [
      "肺泡附近氧分壓高，血紅素在肺部結合氧。",
      "組織代謝消耗氧，使組織氧分壓較低。",
      "氧合血紅素在組織微血管解離並釋放氧。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "血紅素與氧結合主要在肺泡微血管，不是組織微血管。" },
      B: { verdict: "correct", reason: "組織需氧且氧分壓低，氧合血紅素在此解離並釋氧。" },
      C: { verdict: "incorrect", reason: "碳酸轉成二氧化碳主要在肺部，以利呼出。" },
      D: { verdict: "incorrect", reason: "與血紅素結合的二氧化碳主要在肺部釋放，不是組織端。" }
    },
    takeaway: "肺部血紅素抓氧，組織端血紅素放氧。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-18": {
    encouragement: "基因重組需要來自兩個配子的遺傳物質重新組合，因此有性生殖最符合。",
    keyIdea: "減數分裂與受精使父母雙方基因重新組合，造成有性生殖子代差異。",
    steps: [
      "減數分裂產生不同基因組合的配子。",
      "受精時兩個配子隨機結合，再組成新的基因型。",
      "分裂、出芽與營養繁殖多直接複製單一親代。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "分裂生殖由單一細胞複製分開，通常沒有兩親基因重組。" },
      B: { verdict: "incorrect", reason: "出芽由親體有絲分裂形成芽體，遺傳組成通常近似親代。" },
      C: { verdict: "correct", reason: "有性生殖經減數分裂與配子結合，會產生新的基因組合。" },
      D: { verdict: "incorrect", reason: "營養繁殖利用根莖葉體細胞，通常不經配子重組。" }
    },
    takeaway: "有性生殖的優勢是重組增加變異；無性生殖則快速保留親代特性。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-19": {
    encouragement: "純黃與純綠先得到全為雜合的 F1；F1 互交的表徵期望值就是經典 3：1。",
    keyIdea: "單性狀完全顯性中，Aa×Aa 的 F2 表徵比約為顯性 3：隱性 1。",
    steps: [
      "純黃 AA×純綠 aa，F1 全為 Aa 黃色。",
      "F1 Aa×Aa 產生 AA、Aa、Aa、aa。",
      "前三種表現黃色，aa 綠色，理論比 3：1。",
      "實驗有限樣本可接近但不必正好 3.00：1.00。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "2.96：1.00 很接近理論的 3：1，符合抽樣波動。" },
      B: { verdict: "incorrect", reason: "約 1：1 比較像雜合顯性個體與隱性個體試交。" },
      C: { verdict: "incorrect", reason: "此項隱性多於顯性，與 Aa×Aa 的 3：1 相反。" },
      D: { verdict: "incorrect", reason: "幾乎全為顯性不符合兩個雜合子互交仍有 1/4 隱性子代。" }
    },
    takeaway: "Aa×Aa：基因型 1：2：1，表徵型 3：1。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-24": {
    encouragement: "兒子的 X 一定來自母親；女兒則各從父母得到一條 X。",
    keyIdea: "色盲女子 XcXc 與正常男子 XCY 生下的兒子都從母親得到 Xc，因此全為色盲。",
    steps: [
      "色盲女子基因型為 XcXc，所有卵都帶 Xc。",
      "正常男子產生 XC 或 Y 精子。",
      "兒子得到母親 Xc 與父親 Y，基因型 XcY，皆色盲。",
      "女兒得到父親 XC，為帶因但正常。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "女兒還會從正常父親得到 XC，因此為 XCXc 帶因者，通常不色盲。" },
      B: { verdict: "correct", reason: "所有兒子都從色盲母親得到 Xc，從父親得到 Y，因此皆色盲。" },
      C: { verdict: "incorrect", reason: "兒子的 X 來自不帶因母親，會正常；父親只給兒子 Y。" },
      D: { verdict: "incorrect", reason: "女兒會從正常且不帶因母親得到 XC，即使父親給 Xc，也只是帶因。" }
    },
    takeaway: "X 聯隱性遺傳：兒子的 X 看母親，父親的 X 只給女兒。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-25": {
    encouragement: "族群密度會隨出生、死亡、遷入、遷出改變；其他條件不變時，出生率提高就會增加。",
    keyIdea: "出生率提高會增加族群個體數，若面積與其他因素不變，密度上升。",
    steps: [
      "族群密度是單位面積或體積中的個體數。",
      "出生與遷入使個體數增加，死亡與遷出使個體數減少。",
      "其他條件固定時，出生率增加會提高密度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "極相是群集演替的相對穩定階段，不是單一族群的動態平衡。" },
      B: { verdict: "correct", reason: "出生率提高使個體數增加，面積與其他因素不變時族群密度上升。" },
      C: { verdict: "incorrect", reason: "負荷量指環境能長期支持的某族群最大個體數，不是物種數。" },
      D: { verdict: "incorrect", reason: "群落演替通常由較簡單走向較複雜，不是趨向單純。" }
    },
    takeaway: "密度變化四項：出生、死亡、遷入、遷出；負荷量看可支持的個體數。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-31": {
    encouragement: "分解大分子通常釋放能量；把二氧化碳和水合成葡萄糖則需要輸入能量。",
    keyIdea: "光合作用合成葡萄糖是吸能的同化作用，需要光能。",
    steps: [
      "脂肪酸氧化是分解反應，會釋放能量。",
      "蛋白質、澱粉、脂肪水解也是把大分子拆小。",
      "由二氧化碳與水合成高能量葡萄糖，需要光能投入。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "脂肪酸完全氧化會釋放能量，不是主要耗能反應。" },
      B: { verdict: "incorrect", reason: "蛋白質水解成胺基酸是分解反應。" },
      C: { verdict: "incorrect", reason: "澱粉水解成葡萄糖是分解反應。" },
      D: { verdict: "correct", reason: "由二氧化碳與水合成葡萄糖需把光能轉成化學能，因此要消耗能量。" },
      E: { verdict: "incorrect", reason: "脂肪水解成脂肪酸與甘油是分解反應。" }
    },
    takeaway: "由小合大通常耗能，由大拆小通常釋能或較不需額外能量。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-32": {
    encouragement: "光反應用水與光，產生氧、ATP、NADPH；二氧化碳要到碳反應才使用。",
    keyIdea: "二氧化碳不直接參與光反應，而是在葉綠體基質的碳反應被固定。",
    steps: [
      "類囊體光反應分解水並釋放氧。",
      "電子傳遞製造 ATP 與 NADPH。",
      "二氧化碳在碳反應進入有機物，不屬光反應。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氧是水在光反應中分解後的產物。" },
      B: { verdict: "correct", reason: "二氧化碳在碳反應被固定，不直接參與光反應。" },
      C: { verdict: "incorrect", reason: "水是光反應的原料，提供電子與氫並釋放氧。" },
      D: { verdict: "incorrect", reason: "ATP 是光反應的重要能量產物。" },
      E: { verdict: "incorrect", reason: "NADPH 是光反應形成的還原力，供碳反應使用。" }
    },
    takeaway: "光反應：水→氧＋ATP＋NADPH；碳反應才用 CO₂。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-33": {
    encouragement: "肌肉收縮是肌絲彼此滑動，不是肌動蛋白或肌凝蛋白本身縮短。",
    keyIdea: "滑動肌絲使肌節縮短、Z 線靠近，但粗細肌絲長度不變。",
    steps: [
      "神經衝動改變肌細胞膜離子狀態並引發鈣離子訊號。",
      "肌凝蛋白拉動肌動蛋白，使兩種肌絲相對滑動。",
      "肌節與 Z 線間距縮短，橫紋位置改變，但肌絲本身不縮短。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "肌絲長度維持不變，是彼此滑動；因此「肌絲縮短」錯誤。" },
      B: { verdict: "incorrect", reason: "肌動、肌凝蛋白肌絲相對滑動是收縮核心，此敘述正確。" },
      C: { verdict: "incorrect", reason: "肌節縮短會使橫紋各帶位置與寬度關係改變。" },
      D: { verdict: "incorrect", reason: "神經衝動與動作電位會造成細胞膜內外離子分布改變。" },
      E: { verdict: "incorrect", reason: "肌節縮短時兩端 Z 線彼此靠近。" }
    },
    takeaway: "肌肉收縮：肌絲不變長，滑動使肌節變短。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-34": {
    encouragement: "縮腳反射要快，訊息在脊髓就完成感覺到運動的接線，不必先等大腦決定。",
    keyIdea: "撤退反射的中樞在脊髓，反射弧包含感覺、聯絡與運動神經元。",
    steps: [
      "痛覺受器把訊息經感覺神經元送入脊髓。",
      "脊髓聯絡神經元迅速傳給運動神經元。",
      "肌肉收縮把腳縮回；之後訊息才上傳大腦形成痛覺。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "立即縮回的反射動作可由脊髓完成，不需大腦先下令。" },
      B: { verdict: "incorrect", reason: "脊髓是此撤退反射的整合中樞。" },
      C: { verdict: "incorrect", reason: "感覺神經元把疼痛刺激訊息送入脊髓。" },
      D: { verdict: "incorrect", reason: "聯絡神經元在脊髓內連接感覺與運動神經元。" },
      E: { verdict: "incorrect", reason: "運動神經元把命令送到屈肌，使腳縮回。" }
    },
    takeaway: "反射弧：受器→感覺神經→脊髓聯絡神經→運動神經→動器。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-36": {
    encouragement: "血液運送二氧化碳有三種形式，其中最大宗是轉成碳酸氫根。",
    keyIdea: "大部分二氧化碳在紅血球中轉成碳酸氫根，再隨血漿運送。",
    steps: [
      "組織二氧化碳沿分壓差擴散進血液，不需主動運輸。",
      "紅血球內酵素加速二氧化碳與水形成碳酸。",
      "碳酸解離成氫離子與碳酸氫根，後者是主要運輸形式。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "二氧化碳沿濃度或分壓差擴散進血液，不需 ATP。" },
      B: { verdict: "incorrect", reason: "主要酵素催化的是 CO₂ 與水形成碳酸，不是催化它和血紅素結合。" },
      C: { verdict: "correct", reason: "人體大部分二氧化碳轉成碳酸氫根，溶在血漿中運送。" },
      D: { verdict: "incorrect", reason: "只有少部分二氧化碳直接溶於血漿，不是大部分以氣體狀態。" },
      E: { verdict: "incorrect", reason: "部分二氧化碳與血紅素結合，但比例小於碳酸氫根形式。" }
    },
    takeaway: "二氧化碳運輸以碳酸氫根最多，血紅素結合與直接溶解較少。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-42": {
    encouragement: "遠洋沒有可供大型植物扎根的海底淺區，主要靠漂浮在透光層的浮游植物生產。",
    keyIdea: "遠洋透光層的主要生產者是微小浮游藻類與藍綠菌。",
    steps: [
      "生產者需有光，集中在海洋上層透光區。",
      "遠洋離岸、海底深，大型附著藻與水草難以扎根。",
      "因此漂浮的浮游植物構成主要初級生產。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "溪流可由附著藻與河岸輸入有機物支持，不以浮游植物為主要生產者。" },
      B: { verdict: "incorrect", reason: "潮間帶常有大型海藻、鹽生植物或底棲微藻。" },
      C: { verdict: "correct", reason: "遠洋透光層主要由浮游植物進行光合作用，支撐海洋食物網。" },
      D: { verdict: "incorrect", reason: "沼澤主要生產者多為挺水、沉水植物等大型植物。" },
      E: { verdict: "incorrect", reason: "江河流動快、混濁度可高，主要生產者不一定以浮游植物為主。" }
    },
    takeaway: "遠洋食物網的底層，是透光層中的浮游植物。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-61": {
    encouragement: "天擇要有兩個前提：族群中先有可遺傳差異，個體之間再競爭有限資源。",
    keyIdea: "族群內遺傳變異提供材料，生存競爭造成差異繁殖，天擇因此改變族群。",
    steps: [
      "同一族群個體具有可遺傳變異。",
      "資源有限，個體之間存在生存與繁殖競爭。",
      "環境篩選較有利變異，讓其後代比例增加。",
      "天擇不會為需要而創造新性狀。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "體細胞突變通常不能遺傳給後代，不是物種演化的主要材料。" },
      B: { verdict: "correct", reason: "族群內可遺傳變異是天擇能選擇的必要材料。" },
      C: { verdict: "incorrect", reason: "天擇篩選已存在的變異，不會主動創造需要的新性狀。" },
      D: { verdict: "correct", reason: "有限資源造成同種個體間生存競爭，讓適應度差異顯現。" },
      E: { verdict: "incorrect", reason: "環境可改變表徵，但非遺傳的表徵改變本身不等於演化。" }
    },
    takeaway: "達爾文天擇：先有遺傳變異，再有生存競爭與差異繁殖。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-68": {
    encouragement: "桃莉沒有精卵結合，遺傳核心來自一個乳腺細胞核，所以屬無性複製。",
    keyIdea: "體細胞核移植不經受精，屬無性生殖；桃莉的核 DNA 與供核羊相同。",
    steps: [
      "去除卵細胞原有細胞核，再放入乳腺體細胞核。",
      "過程沒有精子與卵核結合，也沒有兩親基因重組。",
      "胚胎核遺傳物質來自供核羊，因此主要遺傳性狀與供核羊相同。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "沒有配子結合，由體細胞核複製形成個體，屬無性生殖。" },
      B: { verdict: "incorrect", reason: "有性生殖需配子結合，本題完全不需雄羊精子。" },
      C: { verdict: "incorrect", reason: "供核 DNA 沒有與另一套核 DNA 重組。" },
      D: { verdict: "correct", reason: "桃莉的核 DNA 來自乳腺細胞供體，因此主要核遺傳性狀被保留。" },
      E: { verdict: "incorrect", reason: "去核卵羊只提供細胞質與粒線體，桃莉不會與它具有相同的全部遺傳性狀。" }
    },
    takeaway: "複製羊看供核者決定核遺傳；卵細胞提供細胞質與粒線體。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-3": {
    encouragement: "染色體要平均分到兩端，靠的是紡錘絲連接中節並拉動。",
    keyIdea: "紡錘絲附著染色體中節，在分裂時把姊妹染色分體拉向兩極。",
    steps: [
      "細胞分裂時形成紡錘體。",
      "紡錘絲連接染色體的中節區域。",
      "後期紡錘絲使染色分體分向兩極，確保平均分配。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高等植物洋蔥細胞通常沒有中心粒。" },
      B: { verdict: "incorrect", reason: "洋蔥等高等植物細胞分裂時不形成典型星狀體。" },
      C: { verdict: "correct", reason: "紡錘絲連接並移動染色體，使兩套染色體分到兩個子細胞。" },
      D: { verdict: "incorrect", reason: "植物細胞形成細胞板，不以動物細胞的分裂溝完成分裂。" }
    },
    takeaway: "染色體移動靠紡錘絲；植物分細胞質靠細胞板。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-4": {
    encouragement: "葉片蒸散像從上方拉水，維持木質部水柱一路由根上升。",
    keyIdea: "蒸散使葉片水勢降低並產生拉力，是根水上升到葉的主要力量。",
    steps: [
      "葉片氣孔散失水蒸氣，使葉細胞缺水。",
      "水分由木質部補入葉片，水分子內聚力維持連續水柱。",
      "蒸散拉力沿水柱傳到根部，將水向上拉。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "代謝太廣泛，不是根水上升到葉的直接主要作用。" },
      B: { verdict: "incorrect", reason: "光合作用會用水，但水上升的主要拉力來自蒸散。" },
      C: { verdict: "incorrect", reason: "呼吸供能可支持吸收，卻不是木質部水柱上升的主要物理力量。" },
      D: { verdict: "correct", reason: "葉片蒸散造成負壓拉力，配合水分子內聚力將水由根送到葉。" }
    },
    takeaway: "木質部水上升主力是蒸散拉力，根壓是輔助。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-5": {
    encouragement: "吸氣要讓空氣進肺，肺內壓力必須先低於外界大氣壓。",
    keyIdea: "吸氣時橫膈與外肋間肌收縮，胸腔擴大、肺內壓下降，空氣流入。",
    steps: [
      "橫膈收縮下移，肋骨上提，使胸腔容積增加。",
      "肺隨胸腔擴張，肺內氣壓下降。",
      "當肺內壓小於大氣壓，空氣沿壓力差進入。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "胸腔擴大時肺內壓力下降，不是上升。" },
      B: { verdict: "incorrect", reason: "吸氣時橫膈肌收縮並下移，不是舒張。" },
      C: { verdict: "incorrect", reason: "吸氣時外肋間肌收縮，肋骨上提外擴，不是下降。" },
      D: { verdict: "correct", reason: "肺內壓低於大氣壓時，外界空氣才會流入肺。" }
    },
    takeaway: "吸氣：胸腔大、肺壓低、空氣進；呼氣則相反。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-6": {
    encouragement: "肌肉收縮先由離子訊號啟動；肌動、肌凝蛋白本身不會縮短。",
    keyIdea: "神經刺激造成細胞膜電位與鈣離子濃度改變，進而啟動肌絲滑動。",
    steps: [
      "動作電位改變肌細胞膜內外離子分布。",
      "肌漿網釋放鈣離子，使肌凝蛋白能拉動肌動蛋白。",
      "肌絲滑動、肌節縮短，但兩種肌絲長度不變，橫紋不會消失。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "肌肉收縮伴隨鈉、鉀與鈣離子濃度或分布改變。" },
      B: { verdict: "incorrect", reason: "肌動蛋白絲不縮短，而是相對肌凝蛋白滑動。" },
      C: { verdict: "incorrect", reason: "肌凝蛋白絲本身長度也不變。" },
      D: { verdict: "incorrect", reason: "橫紋各帶寬度會改變，但明暗橫紋不會完全消失。" }
    },
    takeaway: "離子啟動滑動肌絲；收縮的是肌節，不是肌絲。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-7": {
    encouragement: "光合作用把陽光儲存在葡萄糖化學鍵中，本質就是能量形式轉換。",
    keyIdea: "光合作用將光能轉換並儲存在有機物的化學能中。",
    steps: [
      "葉綠素吸收光能，光反應製造 ATP、NADPH。",
      "碳反應利用這些能量合成醣類。",
      "能量最後儲存在葡萄糖等有機物化學鍵中。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光合作用的起始能量是光能，不只是化學能互轉。" },
      B: { verdict: "incorrect", reason: "雖有部分能量散成熱，但主要成果不是把光能變熱。" },
      C: { verdict: "incorrect", reason: "光合作用不以熱能作為主要輸入。" },
      D: { verdict: "correct", reason: "光能經光合作用轉成葡萄糖等有機物中的化學能。" }
    },
    takeaway: "光合作用存能：光能→化學能；呼吸作用則釋放有機物化學能。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-8": {
    encouragement: "山崩後裸露、乾燥且養分少，最先進入的會是耐逆境、擴散快的先驅草本。",
    keyIdea: "芒草種子易散布、耐貧瘠與強光，能優先占據山崩土石地。",
    steps: [
      "山崩後仍有土壤，但環境日照強、乾燥且不穩定。",
      "先驅植物需生長快、種子易傳播、耐貧瘠。",
      "芒草比需要水域的藻、蘆葦或生長較慢的杜鵑更適合先出現。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "藻類多需水域或持續潮濕環境，不是土石堆積坡地的主要先驅植被。" },
      B: { verdict: "correct", reason: "芒草耐強光、貧瘠與擾動，種子易散播，常是裸露坡地先驅植物。" },
      C: { verdict: "incorrect", reason: "蘆葦主要適合濕地與水邊，不一定適合乾燥山崩地。" },
      D: { verdict: "incorrect", reason: "杜鵑為木本灌木，建立速度通常慢於先驅草本。" }
    },
    takeaway: "先驅植物的本事是耐苦、長得快、傳得遠。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-9": {
    encouragement: "綠蠵龜是爬蟲類：體內受精、上岸產有殼的大卵，但母龜不留下孵卵。",
    keyIdea: "綠蠵龜卵有卵殼與卵膜保護，並含足夠養分供胚胎在陸地發育。",
    steps: [
      "海龜在體內完成受精，母龜上岸挖洞產卵。",
      "卵具保護性卵殼與胚膜，可減少水分散失。",
      "卵黃提供胚胎養分；母龜產卵掩埋後離開。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "綠蠵龜為爬蟲類，行體內受精，不是水中體外受精。" },
      B: { verdict: "incorrect", reason: "海龜卵較大且含豐富卵黃，足以支持胚胎發育。" },
      C: { verdict: "correct", reason: "海龜卵外有卵殼與胚膜，能保護陸地上的胚胎。" },
      D: { verdict: "incorrect", reason: "母龜產卵並覆沙後離開，不會留下來孵蛋到幼龜出生。" }
    },
    takeaway: "爬蟲類卵適應陸地：體內受精、有殼、有胚膜、有卵黃。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-12": {
    encouragement: "雙子葉莖的維管束像一圈小包排列；形成層讓它能持續向內外增生。",
    keyIdea: "雙子葉植物莖的維管束通常成環狀排列；單子葉莖多散生且缺乏連續形成層。",
    steps: [
      "雙子葉莖橫切面可見維管束排成一圈。",
      "維管束形成層可向內形成次生木質部、向外形成次生韌皮部。",
      "單子葉維管束多散生，通常不能像木本雙子葉植物持續增粗。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "典型雙子葉植物莖的維管束呈環狀排列。" },
      B: { verdict: "incorrect", reason: "多數單子葉植物莖缺乏連續維管束形成層，不會用同樣方式加粗。" },
      C: { verdict: "incorrect", reason: "韌皮部糖的裝載與卸載需能量，運輸不是完全不耗能。" },
      D: { verdict: "incorrect", reason: "剝除韌皮部會阻斷葉製造的糖運往根部，植物無法長期正常生長。" }
    },
    takeaway: "雙子葉維管束成環，可有形成層增粗；韌皮部斷掉會讓根缺糖。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
