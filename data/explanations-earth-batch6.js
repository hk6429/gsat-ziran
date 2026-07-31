(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-83-11": {
    encouragement: "沉積物還不是沉積岩，抓住最後的固結步驟就能答對。",
    keyIdea: "鬆散沉積物要經壓密、膠結等成岩作用，才會固結成沉積岩。",
    steps: ["岩石風化後先成為鬆散沉積物。", "沉積物堆積後經壓密與膠結，才形成沉積岩。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "沉積物可來自火成岩、變質岩或舊沉積岩，不是原先都屬沉積岩。" },
      B: { verdict: "incorrect", reason: "岩石熔融會形成岩漿，冷卻後成火成岩，不是沉積岩。" },
      C: { verdict: "incorrect", reason: "火成岩風化後只成為沉積物，還未固結成岩。" },
      D: { verdict: "correct", reason: "沉積物經壓密、膠結等成岩作用後，才固結為沉積岩。" }
    },
    takeaway: "風化產生沉積物；成岩作用才把沉積物變成沉積岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-83-21": {
    encouragement: "天空中看起來靠近的星星，不代表在太空中也靠近。",
    keyIdea: "星座是從地球看見的投影圖案，同一星座中的星星可位於不同距離。",
    steps: ["天頂距離與星星在天空的方向有關，不是實際距離。", "星座只把同方向的星星連成圖形，因此各星距離不必相同。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "離天頂較遠只代表天空方向不同，不能判斷實際距離。" },
      B: { verdict: "incorrect", reason: "星星在天球上的角距離，不能直接換成離地球的遠近。" },
      C: { verdict: "incorrect", reason: "七夕相會是傳說；星星不會在當天改變距離並靠在一起。" },
      D: { verdict: "correct", reason: "星座是二維投影，同一星座的星星實際可有很不同的距離。" }
    },
    takeaway: "天球上的位置是方向，不能直接代表三維空間中的距離。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-83-22": {
    encouragement: "把光度想成燈泡本身的功率，亮度則是你站在某處實際收到的光。",
    keyIdea: "視亮度同時受天體光度與距離影響，因此相同光度在不同距離會呈現不同亮度。",
    steps: ["光度是星球本身每秒發出的總能量。", "距離越遠，能量分散範圍越大，地球收到的亮度越小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高光度遠星與低光度近星可能看起來同樣亮，不能由亮度相同判定距離相同。" },
      B: { verdict: "incorrect", reason: "顏色主要和表面溫度有關，不由視亮度是否相同決定。" },
      C: { verdict: "incorrect", reason: "相同光度的星若距離不同，視亮度也會不同。" },
      D: { verdict: "correct", reason: "兩星可有相同光度，但因距離不同而呈現不同視亮度。" }
    },
    takeaway: "本身多會發光看光度；地球看起來多亮還要把距離算進去。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-83-23": {
    encouragement: "恆星顏色就像加熱金屬的顏色，能提示表面溫度。",
    keyIdea: "恆星表面溫度越高越偏藍，溫度較低則偏紅。",
    steps: ["恆星近似熱輻射光源，光譜分布受溫度控制。", "比較顏色即可粗略判斷表面溫度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "恆星大小會影響總光度，但不能直接決定其顏色。" },
      B: { verdict: "correct", reason: "恆星表面溫度會改變主要放光波段，因此和顏色密切相關。" },
      C: { verdict: "incorrect", reason: "亮度受光度與距離影響，亮不代表一定偏某種顏色。" },
      D: { verdict: "incorrect", reason: "距離主要改變看起來的亮度，一般不直接改變恆星本身顏色。" }
    },
    takeaway: "恆星顏色是溫度線索：藍星熱、紅星冷。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-17": {
    encouragement: "油母岩要能保存大量有機物，顏色深、顆粒細的頁岩是重要線索。",
    keyIdea: "黑色頁岩形成於較缺氧的細粒沉積環境，容易保存有機物並成為油氣來源岩。",
    steps: ["油母岩需要含有豐富有機質。", "黑色頁岩顆粒細且常形成於缺氧環境，有機物較不易完全分解。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "石英砂岩孔隙可作儲集層，但通常不是有機質最豐富的油母岩。" },
      B: { verdict: "correct", reason: "黑色頁岩常富含保存下來的有機質，是典型油母岩。" },
      C: { verdict: "incorrect", reason: "角礫岩由粗大碎屑組成，通常不利大量細小有機質保存。" },
      D: { verdict: "incorrect", reason: "鹽岩是蒸發礦物沉積，常可作封閉層，但不是最佳油母岩。" }
    },
    takeaway: "黑色頁岩富有機質，常是油母岩；砂岩較常扮演儲集層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-18": {
    encouragement: "火成岩的酸鹼分類可直接看二氧化矽含量，石英多就往酸性想。",
    keyIdea: "酸性岩漿二氧化矽含量高，冷卻後的岩石較容易含有大量石英。",
    steps: ["石英的主要成分是二氧化矽。", "酸性火成岩含矽量最高，因此最容易富含石英。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "酸性火成岩二氧化矽含量高，常含較多石英。" },
      B: { verdict: "incorrect", reason: "中性火成岩含矽量居中，石英量通常少於酸性岩。" },
      C: { verdict: "incorrect", reason: "基性火成岩含矽較低，常含輝石、橄欖石等礦物。" },
      D: { verdict: "incorrect", reason: "超基性火成岩含矽最低，通常不含大量石英。" }
    },
    takeaway: "石英多代表二氧化矽多，最符合酸性火成岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-21": {
    encouragement: "從海岸走向深海：大陸棚平緩，大陸坡才會突然變陡。",
    keyIdea: "大陸坡位在大陸棚外緣，海底深度快速增加，是大陸邊緣坡度最大的區段。",
    steps: ["大陸棚是陸地向海延伸的淺而平緩區。", "越過棚緣後進入大陸坡，海床在短距離內快速變深。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "大陸棚是坡度最平緩的海底區之一。" },
      B: { verdict: "correct", reason: "大陸坡由棚緣快速下降到深海，坡度最大。" },
      C: { verdict: "incorrect", reason: "大陸緣積由沉積物堆積形成，坡度比大陸坡緩。" },
      D: { verdict: "incorrect", reason: "深海平原地勢廣闊而平坦，不是最陡區。" }
    },
    takeaway: "大陸棚平、大陸坡陡、大陸緣積再變緩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-32": {
    encouragement: "視亮度要問「本身發多少光」和「離我們多遠」，再拆解本身光度的來源。",
    keyIdea: "恆星視亮度直接由光度與距離決定；光度則和表面積、表面溫度直接相關。",
    steps: ["表面積越大、溫度越高，恆星總光度通常越大。", "光度相同時，距離越遠視亮度越低；化學組成不是此基礎關係中的直接量。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "表面積會影響恆星發出的總能量，進而直接影響視亮度。" },
      B: { verdict: "correct", reason: "在此基礎模型中，化學組成不直接出現在光度與距離決定視亮度的關係裡。" },
      C: { verdict: "incorrect", reason: "表面溫度會強烈影響每單位面積放出的能量。" },
      D: { verdict: "incorrect", reason: "光由星球向外分散，距離直接決定地球收到多少能量。" }
    },
    takeaway: "視亮度直接看光度與距離；光度再看大小與溫度。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-33": {
    encouragement: "赫伯定律先求奔離速度，而速度可以從光譜紅移量測。",
    keyIdea: "先量星系光譜線偏移，利用都卜勒效應求奔離速度，再用赫伯定律換算距離。",
    steps: ["比較星系光譜線與實驗室標準波長，得到紅移量。", "由紅移求奔離速度，再代入速度與距離成正比的赫伯定律。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "星系質量不是赫伯定律直接用來求距離的觀測量。" },
      B: { verdict: "incorrect", reason: "發光度可用於其他距離方法，但赫伯定律需要先知道奔離速度。" },
      C: { verdict: "incorrect", reason: "星系半徑大小不是赫伯定律中的直接變數。" },
      D: { verdict: "correct", reason: "光譜線紅移可給出奔離速度，進而由赫伯定律求距離。" }
    },
    takeaway: "赫伯距離法：量光譜紅移、求奔離速度、換算星系距離。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-84-34": {
    encouragement: "三條資料各指向一種岩石：高密度看玄武岩、高矽看花岡岩、易溶看蒸發岩。",
    keyIdea: "玄武岩密度較大，花岡岩矽含量高，蒸發岩鹽類多而易溶於水。",
    steps: ["X 密度最高，最符合富鎂鐵的玄武岩。", "Z 矽含量最高是花岡岩；Y 溶解度最大是蒸發岩。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Y 溶解度最大應是蒸發岩，不會是玄武岩。" },
      B: { verdict: "correct", reason: "Z 高矽為花岡岩、X 高密度為玄武岩、Y 易溶為蒸發岩。" },
      C: { verdict: "incorrect", reason: "X 密度高而 Z 含矽高，花岡岩與玄武岩的配對顛倒。" },
      D: { verdict: "incorrect", reason: "Y 應是蒸發岩，不是玄武岩；X 也不應是最易溶的蒸發岩。" }
    },
    takeaway: "岩性判讀可同時用密度、含矽量與溶解度交叉確認。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-5": {
    encouragement: "太空望遠鏡雖避開大氣，仍會繞到地球背後，不可能永遠盯住同一目標。",
    keyIdea: "低地球軌道望遠鏡常受地球遮蔽而中斷觀測，但能避開大氣吸收與擾動。",
    steps: ["赫伯望遠鏡在約六百公里高空繞地球，目標有時會被地球擋住。", "位於大氣層外可觀測紫外線，也能取得較清晰影像。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "這是錯誤敘述；環繞地球時目標常被地球遮蔽，不能持續不間斷觀測。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；太空中可避開大氣對紫外線的吸收。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；太空觀測可避開大氣擾動與散射光。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；沒有大氣擾動時影像通常比地面觀測清晰。" }
    },
    takeaway: "太空望遠鏡避開大氣，但低軌道仍有地球遮蔽與觀測時段限制。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-9": {
    encouragement: "把三種代表化石放回地質年代：三葉蟲最早，菊石其次，貨幣蟲最晚。",
    keyIdea: "三葉蟲盛於古生代，菊石盛於中生代，貨幣蟲常代表新生代早期。",
    steps: ["古生代先出現大量三葉蟲。", "中生代菊石繁盛；新生代才常見貨幣蟲類。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲三葉蟲、乙菊石、丙貨幣蟲依序對應古生代、中生代、新生代。" },
      B: { verdict: "incorrect", reason: "貨幣蟲類比菊石晚，不應排在菊石之前。" },
      C: { verdict: "incorrect", reason: "此順序由新到舊，和地層生成先後相反。" },
      D: { verdict: "incorrect", reason: "菊石所代表的中生代晚於三葉蟲繁盛的古生代。" }
    },
    takeaway: "代表化石時間線：三葉蟲—古生代，菊石—中生代，貨幣蟲—新生代。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-10": {
    encouragement: "岩漿降溫時，先結晶的礦物需要在較高溫度就能成為固體。",
    keyIdea: "冷卻結晶順序反映結晶溫度；最先析出的甲礦物結晶溫度最高。",
    steps: ["岩漿由高溫逐步降溫。", "甲最先結晶，表示它在四種礦物中能於最高溫形成，也就是熔點最高。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "四種礦物依序析出，顯示它們結晶溫度不同。" },
      B: { verdict: "correct", reason: "甲在溫度最高時最先結晶，因此熔點最高。" },
      C: { verdict: "incorrect", reason: "丁最後才在低溫結晶，熔點應較低。" },
      D: { verdict: "incorrect", reason: "只知道四種礦物的先後，未提供礦物種類，不能判定岩漿一定是酸性。" }
    },
    takeaway: "岩漿冷卻時先結晶的礦物，結晶溫度與熔點較高。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-11": {
    encouragement: "花岡岩和大陸地殼是一組；玄武岩才是海洋地殼代表。",
    keyIdea: "大陸地殼平均成分偏花岡岩質，海洋地殼則偏玄武岩質。",
    steps: ["花岡岩含矽較高、密度較小，是大陸地殼代表岩石。", "中洋脊與洋底盆地屬海洋地殼，以玄武岩質為主。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "大陸地殼平均偏花岡岩質，花岡岩是代表性岩石。" },
      B: { verdict: "incorrect", reason: "多數海底山由玄武岩質火山活動形成。" },
      C: { verdict: "incorrect", reason: "中洋脊生成玄武岩質海洋地殼，不以花岡岩為主。" },
      D: { verdict: "incorrect", reason: "洋底盆地下方是玄武岩質海洋地殼。" }
    },
    takeaway: "大陸花岡岩質，海洋玄武岩質。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-13": {
    encouragement: "污染氣體遇水可形成酸，最怕酸的岩石就是含碳酸鈣的大理岩。",
    keyIdea: "二氧化碳與二氧化硫形成酸性水，大理岩的方解石容易和酸反應而被溶蝕。",
    steps: ["污染氣體溶入雨水後使水呈酸性。", "大理岩主要含碳酸鈣，遇酸反應快，雕刻細節容易受損。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "花崗岩主要為矽酸鹽礦物，通常比大理岩耐酸。" },
      B: { verdict: "incorrect", reason: "安山岩不以碳酸鈣為主，耐酸性通常優於大理岩。" },
      C: { verdict: "incorrect", reason: "砂岩耐久性因膠結物而異，但不是四者中最典型易受酸溶蝕者。" },
      D: { verdict: "correct", reason: "大理岩富含方解石，會和酸反應，最不適合嚴重酸性污染環境。" }
    },
    takeaway: "酸雨環境要避開含碳酸鈣的大理岩與石灰岩建材。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-14": {
    encouragement: "海砂最大的鋼筋危險不是砂粒，而是附著的鹽。",
    keyIdea: "海鹽中的氯離子會破壞鋼筋保護層並加速腐蝕，因此海砂需除鹽。",
    steps: ["海砂帶有海水留下的鹽分。", "氯離子進入混凝土後會加速鋼筋鏽蝕，降低結構安全。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "石英是砂的主要穩定顆粒，不是造成鋼筋鏽蝕的主因。" },
      B: { verdict: "incorrect", reason: "貝殼碎屑可能影響材料品質，但不如鹽中氯離子直接造成腐蝕。" },
      C: { verdict: "correct", reason: "鹽分中的氯離子會加速鋼筋腐蝕，必須盡量洗除。" },
      D: { verdict: "incorrect", reason: "長石顆粒不會像氯鹽那樣直接加速鋼筋鏽蝕。" }
    },
    takeaway: "海砂建材的關鍵風險是鹽分與氯離子造成鋼筋腐蝕。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-15": {
    encouragement: "岩石若有一小部分熔化，整體會變軟，P、S 波都會慢下來。",
    keyIdea: "上部地函低速帶含少量熔融物質，降低岩石剛性，使地震波速下降。",
    steps: ["地震波速度和介質彈性、剛性有關。", "部分熔融使岩石剛性降低，因此 P、S 波都比周圍慢。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地函低速帶不是由大量二氧化碳聚集形成。" },
      B: { verdict: "correct", reason: "高溫造成少量部分熔融，降低介質剛性，使地震波減速。" },
      C: { verdict: "incorrect", reason: "地球深部高壓下不會存在大量空洞；大量空隙也無法穩定存在。" },
      D: { verdict: "incorrect", reason: "低速帶位於上部地函，不是大量黏土礦物聚集區。" }
    },
    takeaway: "低速帶不是空洞，而是高溫、少量部分熔融使岩石變得較軟。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-16": {
    encouragement: "長石比石英容易風化；砂岩還留很多長石，表示它沒有被搬太久。",
    keyIdea: "大量長石能保存下來，代表母岩風化不充分、搬運距離短並快速沉積。",
    steps: ["長石在地表較容易化學風化成黏土。", "若沉積物仍富含長石，表示侵蝕後很快在附近堆積。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "快速侵蝕、短距搬運與快速沉積，可讓易風化的長石來不及被破壞。" },
      B: { verdict: "incorrect", reason: "長時間河流搬運會使長石持續風化、磨損，比例通常下降。" },
      C: { verdict: "incorrect", reason: "富有機質深海環境不能直接解釋砂岩含大量長石。" },
      D: { verdict: "incorrect", reason: "長石的抗風化能力比石英弱，不是因特別耐風化而留下。" }
    },
    takeaway: "砂岩富長石，通常表示來源近、搬運短、沉積快。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-1": {
    encouragement: "新聞常把規模和震度混用；先分清一場地震的大小與各地搖晃程度。",
    keyIdea: "規模描述地震釋放能量，一場地震只有一個主要規模；震度則因地點而異。",
    steps: ["新聞中的 5.2 是表示地震整體大小的數值，應稱規模。", "嘉義房屋受損屬當地搖晃與建物條件，不能反推外海地震不可能造成。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "利用多測站 P、S 波資料可以估算震源位置與深度。" },
      B: { verdict: "correct", reason: "5.2 是地震規模；「強度」不是此處正確的地震學名稱。" },
      C: { verdict: "incorrect", reason: "地震波可傳到嘉義，若建物脆弱仍可能造成損害。" },
      D: { verdict: "incorrect", reason: "有感地震是人能感覺到的地震，不是只有儀器測得到。" },
      E: { verdict: "incorrect", reason: "臺灣各地及周邊不同板塊構造都會發生地震，震央不只在花蓮外海。" }
    },
    takeaway: "規模看地震本身能量，震度看各地實際搖晃。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-3": {
    encouragement: "在題目給的選項中，先比較緯度造成的日照與晝夜條件，別被城市面積干擾。",
    keyIdea: "臺北緯度較低，全年晝夜長短差異較小；東京緯度較高，日照時間變化較明顯。",
    steps: ["城市面積大小不是控制氣溫日變化的主要因素。", "四個選項中，緯度造成的晝夜與日照差異是最合理的氣候解釋。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "接收陽光較多會提高平均溫度，不能單獨說明晝夜溫差一定較小。" },
      B: { verdict: "correct", reason: "臺北緯度較低，晝夜長短差異較小，是四個選項中合理的日照條件解釋。" },
      C: { verdict: "incorrect", reason: "臺灣與本州島的總面積不會直接決定臺北與東京單站的晝夜溫差。" },
      D: { verdict: "incorrect", reason: "行政城市面積大小不會使地表散熱快慢按比例改變。" }
    },
    takeaway: "判斷城市氣候要看緯度、海陸位置等環境因素，不看行政面積。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-4": {
    encouragement: "大陸棚就像大陸邊緣浸在海水下的平緩平台。",
    keyIdea: "大陸棚緊接海岸，水深較淺、坡度平緩；外側才接陡峭大陸坡。",
    steps: ["由海岸向外先遇到寬廣平緩的大陸棚。", "越過棚緣後才進入坡度較大的大陸坡與更深海區。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "大陸棚接連海岸，是坡度平緩的淺海海底。" },
      B: { verdict: "incorrect", reason: "大陸邊緣坡度最大的是大陸坡，不是大陸棚。" },
      C: { verdict: "incorrect", reason: "最接近洋底盆地的是較外側的大陸緣積，不是靠岸的大陸棚。" },
      D: { verdict: "incorrect", reason: "連接大陸坡外側且再變平緩的是大陸緣積。" }
    },
    takeaway: "海岸向深海依序可想成：大陸棚、大陸坡、大陸緣積、深海平原。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-57": {
    encouragement: "逐一問「這個現象是否同時需要日、月、地三者」，答案就會浮現。",
    keyIdea: "月相由日光照亮月球及地球觀測方向決定；潮汐則同時受月球、太陽對地球海水的引力影響。",
    steps: ["月相需要太陽照明、月球位置與地球觀測者三者關係。", "潮汐主要由月球與太陽對地球海水的引潮力共同造成。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "四季主要由地球公轉與地軸傾斜造成，不必用月球位置解釋。" },
      B: { verdict: "correct", reason: "月相取決於太陽照亮月球以及從地球看到亮面多少。" },
      C: { verdict: "incorrect", reason: "晝夜交替主要由地球自轉與太陽光造成，月球不是必要因素。" },
      D: { verdict: "incorrect", reason: "太陽仰角變化主要涉及地球自轉、公轉與地軸傾斜，不需月球。" },
      E: { verdict: "correct", reason: "地球潮汐同時受到月球與太陽引力影響，需考慮三者相對位置。" }
    },
    takeaway: "同時牽涉日月地的典型現象是月相與潮汐。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-58": {
    encouragement: "大潮發生在日、月、地引潮力方向接近同一直線時；滿月就是其中一種排列。",
    keyIdea: "農曆十五前後為滿月，太陽與月球引潮力共同加強，容易形成大潮。",
    steps: ["滿月約在農曆十五前後，日、地、月大致排列成一直線。", "太陽與月球的引潮效果加強，使滿潮更高；依題目分組應選 A 與 D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "農曆十五前後接近滿月，會出現朔望大潮。" },
      B: { verdict: "incorrect", reason: "初七、初八接近上弦月，通常是潮差較小的小潮。" },
      C: { verdict: "incorrect", reason: "初一前後也可有大潮，但本題月相配對只提供滿月與弦月，官方組合為十五前後。" },
      D: { verdict: "correct", reason: "滿月時日、地、月近一直線，引潮力疊加形成大潮。" },
      E: { verdict: "incorrect", reason: "弦月時日月引潮力方向近直角，通常形成小潮。" }
    },
    takeaway: "滿月與新月附近是大潮；上弦、下弦附近是小潮。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-15": {
    encouragement: "割劃測試比較的是硬度；能刮傷玻璃的材料必須比玻璃硬。",
    keyIdea: "金剛石的摩氏硬度最高，能在較軟的玻璃表面留下刮痕。",
    steps: ["兩種材料互相割劃時，較硬者會刮傷較軟者。", "金剛石硬度高於玻璃，因此常用於切割玻璃。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "解理描述礦物沿特定方向裂開，不是切割玻璃的主要能力。" },
      B: { verdict: "incorrect", reason: "有稜角不代表一定能刮傷玻璃，還要有足夠硬度。" },
      C: { verdict: "incorrect", reason: "晶形是否完美與能否割劃玻璃沒有直接關係。" },
      D: { verdict: "correct", reason: "金剛石是最硬的天然礦物，可刮傷玻璃。" },
      E: { verdict: "incorrect", reason: "條痕是礦物粉末顏色，不是切割用途所利用的性質。" }
    },
    takeaway: "硬度是抵抗刮擦的能力；硬的礦物能刮傷較軟材料。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-16": {
    encouragement: "花岡岩即使在地表被撿到，也可能原先在地下慢慢冷卻，後來才因抬升侵蝕露出。",
    keyIdea: "花岡岩晶體粗大，表示岩漿在地下緩慢冷卻，有充分時間結晶，屬深成岩。",
    steps: ["觀察花岡岩可直接看見石英、長石等粗大晶體。", "晶體粗代表冷卻慢，因此形成於地下深處，後來才出露地表。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "在地表撿到只代表現在出露，不能說形成時一定在地表。" },
      B: { verdict: "incorrect", reason: "花岡岩主要含石英、長石與雲母，不以橄欖石、輝石為主。" },
      C: { verdict: "correct", reason: "粗大結晶表示岩漿緩慢冷卻，符合深成岩特徵。" },
      D: { verdict: "incorrect", reason: "玻璃質與看不到晶體是快速冷卻的火山岩特徵，不是花岡岩。" },
      E: { verdict: "incorrect", reason: "葉理是部分變質岩特徵，花岡岩的礦物通常呈鑲嵌結晶。" }
    },
    takeaway: "晶體粗大表示冷卻慢；花岡岩是地下形成的深成岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-17": {
    encouragement: "大理岩由石灰岩變質而來，礦物可能相近，但結晶組織會重新排列。",
    keyIdea: "石灰岩在未熔融狀態下受高溫、高壓變質，方解石再結晶形成大理岩。",
    steps: ["石灰岩主要含方解石，變質時方解石會再結晶。", "再結晶改變岩石組織，但不需要讓岩石熔融。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "大理岩經再結晶，組織與原來沉積形成的石灰岩不同。" },
      B: { verdict: "incorrect", reason: "大理岩主要由石灰岩變質，不是花岡岩。" },
      C: { verdict: "incorrect", reason: "大理岩主要礦物是方解石；石英集合體形成的是石英岩。" },
      D: { verdict: "incorrect", reason: "大理岩是岩石種類，可在世界許多地區形成，不只雲南大理。" },
      E: { verdict: "incorrect", reason: "變質作用在固態下進行；若熔融再冷卻會形成火成岩。" }
    },
    takeaway: "石灰岩固態再結晶成大理岩；變質不等於熔融。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-19": {
    encouragement: "變質岩不一定都有條紋；礦物若沒有定向排列，就可能不具葉理。",
    keyIdea: "葉理常由片狀礦物受定向壓力排列形成，大理岩、石英岩等可不具葉理。",
    steps: ["板岩、片岩等常具葉理。", "方解石或石英再結晶形成的岩石可呈塊狀，因此不能說所有變質岩都有葉理。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；板岩具有板狀葉理。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；石灰岩變質、再結晶可形成大理岩。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；石英岩通常為不具葉理的變質岩。" },
      D: { verdict: "correct", reason: "這是錯誤敘述；大理岩、石英岩等變質岩不一定具有葉理。" },
      E: { verdict: "incorrect", reason: "這是正確敘述；橄欖岩受含水變質可形成蛇紋岩。" }
    },
    takeaway: "變質岩有葉理與無葉理兩類，不能看到「變質」就認定一定有條紋。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-21": {
    encouragement: "上升氣流需要空氣被抬起、加熱或在低壓聚集；高壓中心則常相反。",
    keyIdea: "地面高壓區空氣下沉後向外輻散，不會在附近形成主要垂直上升運動。",
    steps: ["地形、暖海面與地表加熱都能使空氣向上。", "低壓近地面輻合後上升；高壓則下沉並在地面向外輻散。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣流遇山坡被迫抬升，會產生垂直上升。" },
      B: { verdict: "incorrect", reason: "冷空氣經暖海面受熱後密度降低，容易產生對流上升。" },
      C: { verdict: "incorrect", reason: "空氣受暖地表加熱會膨脹、密度降低而上升。" },
      D: { verdict: "incorrect", reason: "空氣向低壓中心輻合後無法都堆在地面，會轉為上升。" },
      E: { verdict: "correct", reason: "地面高壓通常對應上空空氣下沉，抵達地面後再向外輻散。" }
    },
    takeaway: "低壓輻合上升，高壓下沉輻散。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-22": {
    encouragement: "水氣來自地表蒸發，越靠近地面越多，因此主要集中在最底層大氣。",
    keyIdea: "大氣水氣含量變化很大，主要集中在對流層，並參與雲雨與天氣現象。",
    steps: ["海洋、湖泊與地表供應水氣，來源位於大氣底部。", "高度增加後氣溫降低且遠離水氣來源，所以水氣主要在對流層。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水蒸氣本身已是水的氣態，不會輕易被氧氣再氧化成一般化合物。" },
      B: { verdict: "incorrect", reason: "水氣會隨地點、季節與天氣大幅改變，含量並不固定。" },
      C: { verdict: "correct", reason: "水氣來源在地表，且大部分雲雨發生在對流層，因此此層最豐富。" },
      D: { verdict: "incorrect", reason: "水氣是大氣中含量變化最大的氣體之一，不是變化最小。" },
      E: { verdict: "incorrect", reason: "空氣總比例有限，水氣增加時其他乾空氣成分的相對比例不會跟著增加。" }
    },
    takeaway: "水氣多在對流層，而且是隨天氣變動很大的大氣成分。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-23": {
    encouragement: "越往高處，上方壓著的空氣越少，所以氣壓一定往下降。",
    keyIdea: "近地面可粗估每上升約十公尺氣壓下降一百帕，也就是約一百帕斯卡。",
    steps: ["氣壓來自上方空氣柱重量，高度增加時上方空氣變少。", "近地面常用每上升約十公尺下降一百帕作粗略估算。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高度增加時氣壓應降低，且 6.5 是常見的每公里氣溫降幅，不是氣壓升幅。" },
      B: { verdict: "correct", reason: "近地面每上升約十公尺，氣壓約下降一百帕，是可用的粗略關係。" },
      C: { verdict: "incorrect", reason: "大氣垂直方向氣壓變化通常比同距離的水平方向大。" },
      D: { verdict: "incorrect", reason: "空氣越緻密，同樣高度差包含的空氣重量越大，氣壓下降反而越快。" },
      E: { verdict: "incorrect", reason: "空氣越稀薄，同樣高度差的空氣重量越小，氣壓遞減率越小。" }
    },
    takeaway: "氣壓隨高度上升而下降；空氣越密，垂直氣壓下降得越快。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
