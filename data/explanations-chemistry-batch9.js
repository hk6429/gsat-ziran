window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-88-30": {
    encouragement: "硫酸的四種用途牽涉不同反應，只要分清楚氧化、脫水、電池與製氣，就能穩穩判斷。",
    keyIdea: "濃硫酸可和食鹽反應放出HCl；它也有氧化性與脫水性，不宜和這些性質混為酸鹼反應。",
    steps: [
      "鋅製氫通常用稀硫酸；濃硫酸有氧化性，反應不會單純只產生H₂。",
      "紙張變黑是濃硫酸奪走水分的脫水作用；鉛蓄電池放電是氧化還原反應。",
      "濃硫酸沸點高且不易揮發，可把食鹽中的HCl以氣體形式趕出。",
      "所以答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗室以鋅製氫通常加入稀硫酸；濃硫酸具氧化性，可能生成SO₂而非單純H₂。" },
      B: { verdict: "incorrect", reason: "紙張主要含纖維素，遇濃硫酸變黑是被強烈脫水留下碳，不是酸鹼中和。" },
      C: { verdict: "incorrect", reason: "鉛蓄電池放電時鉛與二氧化鉛發生電子轉移，核心是氧化還原而非酸鹼反應。" },
      D: { verdict: "correct", reason: "濃硫酸可提供H⁺並利用不揮發性，使NaCl轉成可逸出的HCl氣體。" }
    },
    takeaway: "濃硫酸常見三種角色：強酸、脫水劑與氧化劑；判題要看實際反應物。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-31": {
    encouragement: "這題不必背所有纖維結構，先找元素差異：哪一種沒有含氮的醯胺或蛋白質結構。",
    keyIdea: "絲與羊毛是含氮蛋白質，耐綸也含氮；棉的主要成分纖維素只含C、H、O。",
    steps: [
      "絲與羊毛由蛋白質組成，蛋白質的胺基酸結構含氮。",
      "耐綸的聚醯胺鏈也含氮，且可和水形成氫鍵。",
      "棉主要是纖維素，基本元素為C、H、O，不含氮。",
      "因此差異最明顯的是棉，答案C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "絲的主要成分是蛋白質，含有氮元素與可形成氫鍵的醯胺結構。" },
      B: { verdict: "incorrect", reason: "耐綸是聚醯胺合成纖維，主鏈含氮，和絲、羊毛都有含氮結構。" },
      C: { verdict: "correct", reason: "棉的主要成分纖維素由C、H、O組成，不含氮，和其他三種最不同。" },
      D: { verdict: "incorrect", reason: "羊毛主要成分為角蛋白，屬含氮的蛋白質纖維，不是元素組成最不同者。" }
    },
    takeaway: "天然纖維不代表成分相同：棉是纖維素，絲與羊毛則是蛋白質。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-32": {
    encouragement: "急救用小蘇打中和，先判斷阿司匹靈是酸；再從能被胃壁吸收與藥物性質判斷它是弱酸。",
    keyIdea: "小蘇打呈弱鹼性，可中和弱酸性的阿司匹靈；弱酸未解離型較容易穿過胃壁。",
    steps: [
      "NaHCO₃水溶液呈弱鹼性，能中和酸性物質。",
      "既然可用小蘇打進行酸鹼中和，阿司匹靈應屬酸而不是鹼。",
      "阿司匹靈在胃中仍有相當比例為未解離、較脂溶的分子，符合弱酸特性。",
      "所以答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若阿司匹靈是強鹼，再灌入呈弱鹼性的小蘇打不會達到酸鹼中和目的。" },
      B: { verdict: "incorrect", reason: "小蘇打本身也是弱鹼性物質，不能用來中和另一種弱鹼。" },
      C: { verdict: "incorrect", reason: "阿司匹靈含羧酸基但只部分解離，化學分類為弱酸，不是完全解離的強酸。" },
      D: { verdict: "correct", reason: "阿司匹靈是含羧酸基的弱酸，可被NaHCO₃中和並轉成較水溶的鹽。" }
    },
    takeaway: "含羧酸基的常見有機酸多屬弱酸；加入碳酸氫鈉可中和並常伴隨CO₂生成。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-33": {
    encouragement: "pH就是氫離子濃度的負對數；把3×10⁻⁵拆成10⁻⁵再微調即可。",
    keyIdea: "pH＝－log[H⁺]；－log(3.0×10⁻⁵)約為5－0.48＝4.52。",
    steps: [
      "代入[H⁺]＝3.0×10⁻⁵ M。",
      "pH＝－log(3.0×10⁻⁵)＝5－log3.0。",
      "log3.0約0.48，所以pH約4.52。",
      "最接近4.5，答案B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "pH 3.5代表[H⁺]約3×10⁻⁴ M，比題目濃度大約十倍。" },
      B: { verdict: "correct", reason: "由－log(3.0×10⁻⁵)計算得約4.52，因此最接近4.5。" },
      C: { verdict: "incorrect", reason: "pH 5.5對應[H⁺]約3×10⁻⁶ M，比題目所給濃度小約十倍。" },
      D: { verdict: "incorrect", reason: "pH 6.5已接近中性，對應H⁺濃度遠低於題目的3.0×10⁻⁵ M。" }
    },
    takeaway: "科學記號前面的係數越大，pH會比單看10的次方所得整數稍微小一些。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-35": {
    encouragement: "一法拉第就是1莫耳電子；分別用生成H₂要2電子、生成O₂要4電子來換算。",
    keyIdea: "陰極2H⁺＋2e⁻→H₂；陽極2H₂O→O₂＋4H⁺＋4e⁻。",
    steps: [
      "96500 C約為1 mol電子。",
      "每生成1 mol H₂需要2 mol電子，所以得到0.5 mol H₂。",
      "每生成1 mol O₂需要4 mol電子，所以得到0.25 mol O₂。",
      "因此答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 mol電子不足以同時生成1 mol H₂與1 mol O₂，所需電子數被大幅低估。" },
      B: { verdict: "incorrect", reason: "生成1 mol H₂需2 mol電子，題目只有1 mol電子，不能得到1 mol H₂。" },
      C: { verdict: "incorrect", reason: "0.5 mol H₂正確，但0.5 mol O₂需要2 mol電子，不符合輸入的1 mol電子。" },
      D: { verdict: "correct", reason: "1 mol電子可生成0.5 mol H₂或0.25 mol O₂，且兩者體積比仍為2：1。" }
    },
    takeaway: "電解水時H₂：O₂＝2：1；用電子莫耳數算時，分別除以2與4。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-64": {
    encouragement: "每種淨水材料功能不同：離子交換抓離子、活性碳吸附小分子、紫外光抑制微生物。",
    keyIdea: "離子交換可去除溶解鹽類的離子；紫外光可使微生物失去活性。",
    steps: [
      "離子交換樹脂能以樹脂上的離子交換水中的陽、陰離子，降低無機鹽含量。",
      "紫外光能破壞微生物的遺傳物質，減少活細菌。",
      "活性碳主要吸附溶解性有機物與異味，不是專門攔截不溶固體。",
      "所以正確選項為B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "蒸餾可有效留下不揮發鹽類，但部分揮發性有機小分子可能隨蒸氣帶出，不能一概去除。" },
      B: { verdict: "correct", reason: "離子交換樹脂能交換水中的陽離子與陰離子，可降低溶解的無機鹽類。" },
      C: { verdict: "incorrect", reason: "不溶固體通常以濾網或濾材截留；活性碳主要吸附溶解性有機物、色素與異味。" },
      D: { verdict: "correct", reason: "適當劑量紫外光能破壞細菌等微生物的遺傳物質，降低活菌數量。" }
    },
    takeaway: "淨水功能要對應材料：過濾固體、活性碳吸附、樹脂除離子、紫外光殺菌。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-65": {
    encouragement: "煙火顏色來自受熱原子或離子的特徵發光；白亮光則常來自鎂的劇烈燃燒。",
    keyIdea: "金屬鹽受熱可發出特徵焰色；鎂燃燒會產生強烈白光。",
    steps: [
      "煙火中的金屬鹽受熱後，電子被激發到較高能階。",
      "電子回到較低能階時放出特定波長的色光，形成不同顏色。",
      "鎂燃燒時放出極亮白光，可提供煙火的白色亮光。",
      "所以選C、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "煙火高溫會破壞多數有機染料，典型焰色主要不是靠有機染料燃燒產生。" },
      B: { verdict: "incorrect", reason: "氖、氬適合放電燈管發光，煙火的多彩焰色主要由金屬鹽受熱造成。" },
      C: { verdict: "correct", reason: "鎂在空氣中燃燒會放出非常明亮的白光，可作煙火與照明材料。" },
      D: { verdict: "correct", reason: "不同金屬離子具有特徵發射光譜，金屬鹽受熱可呈現不同焰色。" }
    },
    takeaway: "煙火色彩看金屬鹽的特徵焰色；鎂則常提供明亮白光。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-66": {
    encouragement: "同素異形體要同時符合兩件事：只由同一元素組成，但原子排列或分子形式不同。",
    keyIdea: "石墨與鑽石都是碳單質；白磷與赤磷都是磷單質，兩組皆結構不同。",
    steps: [
      "先確認是否為單質且元素種類相同。",
      "石墨與鑽石都是C，原子排列不同；白磷與赤磷都是P，結構不同。",
      "重水與水是同位素組成差異，U-238與U-235則是同位素，不是同素異形體。",
      "所以選A、C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "石墨與鑽石都只含碳元素，但碳原子的排列與鍵結方式不同，互為同素異形體。" },
      B: { verdict: "incorrect", reason: "水與重水都是化合物，差別在氫同位素H與D，不屬於單質的同素異形體。" },
      C: { verdict: "correct", reason: "白磷與赤磷都只由磷元素組成，但磷原子的組合方式不同，互為同素異形體。" },
      D: { verdict: "incorrect", reason: "CO與CO₂是碳氧比例不同的兩種化合物，不是同一元素形成的不同單質。" },
      E: { verdict: "incorrect", reason: "U-238與U-235質子數相同、中子數不同，互為同位素而非同素異形體。" }
    },
    takeaway: "同位素差在中子數；同素異形體差在同一元素單質的結構，兩者不要混淆。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-88-77": {
    encouragement: "逐項問「有沒有新物質生成」；只有物態、溫度或電子能階改變的現象，不算化學反應。",
    keyIdea: "霧生成、太陽能加熱、冷媒循環與霓虹燈發光都未生成新物質。",
    steps: [
      "霧是水蒸氣凝結；冷媒與太陽能熱水器主要涉及物態或熱能轉移。",
      "霓虹燈是氣體原子受激發再放光，原子種類沒有改變。",
      "生鏽、水煤氣製造、呼吸與螢火蟲發光都牽涉化學物質轉換。",
      "因此沒有化學反應的是B、C、F、H。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鐵生鏽會生成含水氧化鐵等新物質，屬於氧化還原的化學反應。" },
      B: { verdict: "correct", reason: "霧是水蒸氣凝結成小水滴，只改變水的物態，沒有生成新物質。" },
      C: { verdict: "correct", reason: "太陽能熱水器主要把太陽輻射轉為熱，使水升溫，水的化學組成不變。" },
      D: { verdict: "incorrect", reason: "螢火蟲發光由螢光素等物質發生生物化學反應並釋放光能。" },
      E: { verdict: "incorrect", reason: "製造水煤氣時C與H₂O反應生成CO和H₂，明顯產生新的物質。" },
      F: { verdict: "correct", reason: "冰箱冷媒主要反覆蒸發與凝結來搬運熱量，正常循環不改變化學組成。" },
      G: { verdict: "incorrect", reason: "植物呼吸會使葡萄糖與氧反應生成CO₂和水，屬於化學反應。" },
      H: { verdict: "correct", reason: "霓虹燈中氣體原子受電激發後放光，回到原狀而未形成新的化學物質。" }
    },
    takeaway: "判斷化學變化的標準是是否產生新物質，不是只看有沒有發光或溫度改變。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-25": {
    encouragement: "胃液是強酸性環境，先估pH約在1到2，再直接對照紫甘藍汁的顏色表。",
    keyIdea: "胃液含鹽酸，pH通常接近2；題目表中pH 2時紫甘藍汁呈紅色。",
    steps: [
      "胃液含HCl，屬於酸性很強的消化液。",
      "題目以與胃液pH相當的溶液測試，可對照表中的低pH端。",
      "表中pH 2對應紅色。",
      "因此答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "胃液pH約在1至2，依題目色表，紫甘藍汁在pH 2附近呈紅色。" },
      B: { verdict: "incorrect", reason: "粉紫色對應表中的pH 4，酸性比一般胃液弱，並非最相當的顏色。" },
      C: { verdict: "incorrect", reason: "藍紫色對應pH 6，已接近中性，和含鹽酸的胃液酸度差距很大。" },
      D: { verdict: "incorrect", reason: "綠色對應偏鹼性的pH 8至10，和強酸性的胃液方向相反。" },
      E: { verdict: "incorrect", reason: "黃色對應表中pH 12的強鹼環境，不可能是胃液的酸性條件。" }
    },
    takeaway: "天然指示劑要搭配色表判讀；胃液屬低pH，所以落在紫甘藍汁的紅色區。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-26": {
    encouragement: "題目希望紫甘藍顯綠色，先從色表找出偏鹼性，再選廚房中能造成弱鹼環境的物質。",
    keyIdea: "紫甘藍汁在pH 8至10呈綠色；小蘇打NaHCO₃水溶液呈弱鹼性。",
    steps: [
      "由表格可知，紫甘藍汁在偏鹼的pH 8至10會呈綠色。",
      "小蘇打溶於水後呈弱鹼性，可把環境推向綠色區。",
      "醋呈酸性；砂糖、油與食鹽不會提供同樣的鹼性。",
      "所以答案為E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "白砂糖水通常近中性，不足以把紫甘藍色素推到pH 8以上的綠色區。" },
      B: { verdict: "incorrect", reason: "食醋含醋酸會降低pH，使紫甘藍汁偏紅或粉紫，而不是呈綠色。" },
      C: { verdict: "incorrect", reason: "沙拉油不溶於水，也不會提供OH⁻形成題目所需的弱鹼環境。" },
      D: { verdict: "incorrect", reason: "一般食鹽NaCl水溶液接近中性，無法使紫甘藍指示劑明顯轉綠。" },
      E: { verdict: "correct", reason: "小蘇打NaHCO₃水溶液呈弱鹼性，能使紫甘藍汁進入綠色的pH範圍。" }
    },
    takeaway: "紫甘藍是天然酸鹼指示劑：酸偏紅、近中性偏紫、鹼性可轉藍綠。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-27": {
    encouragement: "陽離子交換樹脂只抓帶正電的離子；先把NaCl與MgCl₂拆成離子就能作答。",
    keyIdea: "水樣中的陽離子為Na⁺與Mg²⁺，兩者可被陽離子交換樹脂交換除去。",
    steps: [
      "NaCl在水中解離成Na⁺與Cl⁻。",
      "MgCl₂解離成Mg²⁺與Cl⁻。",
      "陽離子交換樹脂處理正離子，所以會交換Na⁺和Mg²⁺。",
      "答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Na⁺是陽離子但Cl⁻是陰離子，陽離子交換樹脂不能把兩者都除去。" },
      B: { verdict: "incorrect", reason: "Cl⁻與OH⁻都帶負電，應由陰離子交換樹脂處理，不是甲裝置的目標。" },
      C: { verdict: "incorrect", reason: "Mg²⁺可被交換，但H⁺通常是樹脂釋出的交換離子，原中性鹽水並非以H⁺為待除雜質。" },
      D: { verdict: "correct", reason: "Na⁺與Mg²⁺都是水樣中的陽離子，可被陽離子交換樹脂保留並交換出去。" },
      E: { verdict: "incorrect", reason: "Na⁺是待除陽離子，但H⁺是陽離子樹脂交換後可能進入水中的離子，不是原鹽類的組合。" }
    },
    takeaway: "離子交換先看電荷：陽樹脂除正離子，陰樹脂除負離子。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-28": {
    encouragement: "第一柱去掉金屬陽離子後，水中還留下Cl⁻；第二柱就要交換陰離子，並讓H⁺與OH⁻合成水。",
    keyIdea: "去離子水需依序使用陽、陰離子交換樹脂；陰離子樹脂可移除Cl⁻並釋出OH⁻。",
    steps: [
      "陽離子樹脂把Na⁺、Mg²⁺換成H⁺，溶液M仍含Cl⁻。",
      "第二柱需用陰離子交換樹脂，把Cl⁻換成OH⁻。",
      "H⁺與OH⁻結合成H₂O，最後得到接近純水的流出液。",
      "所以X為陰離子交換樹脂，答案A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "陰離子交換樹脂能除去Cl⁻並釋出OH⁻，與前柱產生的H⁺結合成水。" },
      B: { verdict: "incorrect", reason: "單次加入中和試劑會引入新的正、負離子，不能達成真正去除溶解鹽類的目的。" },
      C: { verdict: "incorrect", reason: "活性碳主要吸附有機物、色素與異味，不能有效交換並移除Cl⁻。" },
      D: { verdict: "incorrect", reason: "矽膠主要用作乾燥劑吸附水分，不適合從水溶液中除去氯離子。" },
      E: { verdict: "incorrect", reason: "細砂能過濾懸浮顆粒，但溶解的Cl⁻會隨水通過，無法製成去離子水。" }
    },
    takeaway: "完全去離子通常要成對使用陽離子與陰離子交換樹脂。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-29": {
    encouragement: "半生期越短代表同一段時間內衰變得越快；這是四個選項中最直接可靠的判斷。",
    keyIdea: "相同初始原子數與相同時間下，半生期較短的核種衰變常數較大，衰變數較多。",
    steps: [
      "放射性衰變速率與尚未衰變原子數及衰變常數有關。",
      "半生期越短，衰變常數越大，樣品減少得越快。",
      "兩樣品初始原子數相同，所以同一時段內短半生期核種衰變較多。",
      "因此答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Co-60半生期約數年且常作外部放射治療源，不能概括成短半生期並以口服注射診療。" },
      B: { verdict: "incorrect", reason: "核磁共振主要利用原子核在磁場中的共振訊號，不需以放射性同位素衰變成像。" },
      C: { verdict: "correct", reason: "半生期短表示衰變機率較大，在相同初始原子數與時間下，衰變原子較多。" },
      D: { verdict: "incorrect", reason: "放射性同位素用途很多，除滅菌外還包括示蹤、診斷與治療，且不只利用γ射線。" }
    },
    takeaway: "半生期是衰變快慢的指標：半生期短，同樣時間內衰變比例較大。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-30": {
    encouragement: "純物質沸點固定、混合物常有沸程；再確認兩種物質的沸點是否落在50到120°C即可。",
    keyIdea: "純水與KCl溶液、純己烷與柴油，都可在指定溫區藉固定沸點或沸程加以區分。",
    steps: [
      "甲中純水約100°C沸騰，KCl溶液沸點較高且隨濃度改變，可在指定區間分辨。",
      "丁中純己烷約69°C有固定沸點，柴油是多種烴混合物，呈現較廣沸程。",
      "空氣與N₂沸點遠低於50°C；金與合金沸點遠高於120°C。",
      "所以可用此法區分甲、丁，答案D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲確實可測沸點區分，但丁也能在50至120°C觀察己烷固定沸點與柴油差異。" },
      B: { verdict: "incorrect", reason: "空氣與N₂在常壓的沸點都遠低於50°C，指定溫區內不能靠沸點完成區分。" },
      C: { verdict: "incorrect", reason: "乙的兩種氣體沸點不在50至120°C，因此把乙列入不符合實驗溫度範圍。" },
      D: { verdict: "correct", reason: "甲可比較純水與鹽水的沸點，丁可比較己烷固定沸點與柴油的沸程。" },
      E: { verdict: "incorrect", reason: "丁可在此溫區測量，但乙的空氣與純氮需在極低溫才能液化並測沸點。" }
    },
    takeaway: "用沸點辨純物與混合物前，還要確認實際沸點落在儀器可測的溫度範圍。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-31": {
    encouragement: "硝酸銀是找Cl⁻的經典試劑；KCl溶液有Cl⁻，純水沒有，會立刻出現明顯差異。",
    keyIdea: "Ag⁺＋Cl⁻→AgCl白色沉澱，可立即區分KCl水溶液與純水。",
    steps: [
      "KCl水溶液含有Cl⁻，加入AgNO₃可生成白色AgCl。",
      "純水不含足量Cl⁻，不會出現這個沉澱。",
      "氣體、烴類或金屬組別不能以同一個立即沉澱反應可靠區分。",
      "所以只有甲，答案A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "KCl溶液遇AgNO₃立刻產生白色AgCl，純水無此現象，因此甲可立即鑑別。" },
      B: { verdict: "incorrect", reason: "金銅合金與純金不是靠AgNO₃產生特徵沉澱來立即區分，反應也不如甲直接。" },
      C: { verdict: "incorrect", reason: "甲可以用AgCl沉澱判別，但丙並沒有同樣明確且立即的選擇性沉澱證據。" },
      D: { verdict: "incorrect", reason: "丁的柴油與己烷都不提供Cl⁻，加入AgNO₃不會形成可供辨認的AgCl。" },
      E: { verdict: "incorrect", reason: "空氣、N₂、柴油與己烷都不能用AgNO₃水溶液的Cl⁻沉澱反應立即區分。" }
    },
    takeaway: "硝酸銀檢驗氯離子會生成白色AgCl沉澱，是常見的定性分析。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-32": {
    encouragement: "核反應也遵守守恆：上標質量數相加、下標原子序相加，分別列式就能找到氧核。",
    keyIdea: "⁴₂He＋¹⁴₇N→¹⁷₈O＋¹₁p，同時守恆質量數18與原子序9。",
    steps: [
      "反應前質量數為4＋14＝18；放出質子的質量數為1，所以氧核為17。",
      "反應前原子序為2＋7＝9；質子原子序為1，所以氧核原子序為8。",
      "原子序8確實是氧，因此核種為¹⁷₈O。",
      "答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若生成O-15再加質子，產物質量數總和只有16，不能等於反應物的18。" },
      B: { verdict: "incorrect", reason: "O-16與質子的質量數總和為17，仍少於反應前的總質量數18。" },
      C: { verdict: "correct", reason: "O-17加上一個質子後，質量數總和18、原子序總和9，兩者都守恆。" },
      D: { verdict: "incorrect", reason: "O-18再加質子會使產物質量數總和成為19，比反應物總和18多1。" },
      E: { verdict: "incorrect", reason: "O-19與質子合計質量數20，明顯不符合核反應前後質量數守恆。" }
    },
    takeaway: "核反應配平有兩本帳：質量數與原子序都要分別守恆。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-33": {
    encouragement: "氯氣會消毒與漂白，正因它具有氧化性；看到「強還原劑」就要立刻警覺。",
    keyIdea: "Cl₂容易得到電子形成Cl⁻，常表現為氧化劑，不是強還原劑。",
    steps: [
      "Cl₂可在水中形成具殺菌漂白作用的含氯物種。",
      "漂白粉與含氯漂白水也利用含氯氧化劑的作用。",
      "氯在反應中常由0價降到－1價，表示得到電子並氧化別人。",
      "所以錯誤的是E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鹽酸能溶解鐵鏽，也會腐蝕鐵並破壞保護層，因此這項應用與風險敘述正確。" },
      B: { verdict: "incorrect", reason: "氯氣有毒，但控制劑量後可利用其氧化性消毒自來水與游泳池。" },
      C: { verdict: "incorrect", reason: "部分家用漂白水含次氯酸鈉等含氯成分，能以氧化作用漂白殺菌。" },
      D: { verdict: "incorrect", reason: "氯氣與石灰乳反應可製得漂白粉，屬常見含氯漂白劑製法。" },
      E: { verdict: "correct", reason: "此敘述錯誤；Cl₂容易得到電子變Cl⁻，通常是強氧化劑而不是強還原劑。" }
    },
    takeaway: "漂白與殺菌常來自氧化作用；氯及次氯酸鹽都是常見氧化劑。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-34": {
    encouragement: "電池外電路只讓電子通過；陽、陰離子是在電解質內移動，不會沿導線跑到另一極。",
    keyIdea: "負極發生氧化並放出電子，電子經外電路到正極；離子在內部電解質移動維持電中性。",
    steps: [
      "化學電池以氧化還原反應把化學能轉成電能。",
      "負極發生氧化，電子由負極經導線流向正極。",
      "導線傳遞的是電子；離子則在電解質或鹽橋內遷移。",
      "所以D的敘述錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "要形成可用的電位差與外電路，化學電池需要正極和負極兩個電極。" },
      B: { verdict: "incorrect", reason: "電池內一處氧化、一處還原，電子轉移正是氧化還原反應的核心。" },
      C: { verdict: "incorrect", reason: "負極氧化產生的電子會經外部導線流到正極，這是電流形成方式。" },
      D: { verdict: "correct", reason: "此敘述錯誤；正離子不能沿金屬外電路移動，離子是在電解質內遷移。" },
      E: { verdict: "incorrect", reason: "完整電池可拆成氧化與還原兩個半電池，各包含電極與相應電解質環境。" }
    },
    takeaway: "電池中電子走外電路，離子走內電路；兩條移動路徑不要混淆。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-35": {
    encouragement: "滴定終點表示反應達到化學計量關係，但溶液酸鹼性還要看生成的鹽是否水解。",
    keyIdea: "當量點不一定pH 7；強酸弱鹼或弱酸強鹼滴定的生成鹽會使溶液偏酸或偏鹼。",
    steps: [
      "滴定終點用指示劑顏色判斷，應接近當量點。",
      "酸與鹼反應依可反應H⁺、OH⁻當量配比，不一定莫耳數一比一。",
      "弱酸或弱鹼形成的鹽會水解，所以當量點不一定中性。",
      "因此答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "指示劑本身是弱酸或弱鹼，加入過多會消耗滴定劑並改變終點判讀。" },
      B: { verdict: "correct", reason: "例如弱酸與強鹼滴定的當量點會偏鹼，因此達終點時不一定呈中性。" },
      C: { verdict: "incorrect", reason: "多質子酸或多羥基鹼的反應係數不一定1：1，應比較反應當量而非單純莫耳數。" },
      D: { verdict: "incorrect", reason: "酸鹼中和依粒子數與反應係數進行，沒有要求酸與鹼的質量相等。" },
      E: { verdict: "incorrect", reason: "滴定液過稀會需要很大體積、終點不銳利並增加操作誤差，不是愈稀愈好。" }
    },
    takeaway: "滴定的化學計量看反應式；終點pH則看酸鹼強弱與生成鹽的性質。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-66": {
    encouragement: "家用清潔劑最危險的組合之一就是「酸＋含氯漂白劑」，會把有毒氯氣釋放出來。",
    keyIdea: "次氯酸鈉遇酸會形成次氯酸，進一步與Cl⁻作用釋放Cl₂有毒氣體。",
    steps: [
      "漂白水或漂白粉中的次氯酸鹽在酸性下會轉成較不穩定的含氯物種。",
      "若加入鹽酸，酸性與Cl⁻共同促使Cl₂逸出。",
      "氯氣刺激眼睛與呼吸道，濃度高時可致命。",
      "因此不可混合的是A、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "鹽酸提供H⁺與Cl⁻，和次氯酸鈉混合可釋放有毒的Cl₂氣體。" },
      B: { verdict: "incorrect", reason: "肥皂雖可能和酸鹼互相影響清潔效果，但不是本題釋放氯氣的關鍵含氯氧化劑。" },
      C: { verdict: "incorrect", reason: "一般洗碗精不是強酸，也不提供題目所需的次氯酸鹽與鹽酸組合。" },
      D: { verdict: "correct", reason: "含NaClO的漂白劑遇鹽酸會發生反應，產生刺激且有毒的氯氣。" },
      E: { verdict: "incorrect", reason: "含NaOH的通樂與鹽酸主要會劇烈中和放熱，但官方所指有毒氣體組合是酸與含氯漂白劑。" }
    },
    takeaway: "含氯漂白劑絕對不要與酸性清潔劑混用，也應保持通風並遵照標示。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-67": {
    encouragement: "這題雖選項是數字，先用半反應配平就會得到x、y、z三個清楚係數。",
    keyIdea: "酸性條件下：2MnO₄⁻＋5C₂O₄²⁻＋16H⁺→2Mn²⁺＋10CO₂＋8H₂O。",
    steps: [
      "Mn由＋7降至＋2，每個Mn得5電子；2個Mn共得10電子。",
      "草酸根中每個碳由＋3升至＋4，一個C₂O₄²⁻共失2電子，所以需5個。",
      "配平Mn與C可得y＝2、z＝10，再以H⁺、H₂O配平電荷與氫氧。",
      "因此x、y、z為5、2、10，對應E、B、J。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "數字1不是x、y、z中的任何一個；配平結果分別為5、2、10。" },
      B: { verdict: "correct", reason: "反應物有2個MnO₄⁻，產物須有2個Mn²⁺，所以y＝2。" },
      C: { verdict: "incorrect", reason: "數字3無法同時滿足錳、碳原子與電子轉移守恆，不是三個目標係數。" },
      D: { verdict: "incorrect", reason: "數字4不是配平後的草酸根、Mn²⁺或CO₂係數，三者為5、2、10。" },
      E: { verdict: "correct", reason: "每個草酸根失2電子，2個MnO₄⁻共需10電子，所以x＝5。" },
      F: { verdict: "incorrect", reason: "若x為6會提供12個碳原子與12電子，超過2個MnO₄⁻所需的10電子。" },
      G: { verdict: "incorrect", reason: "數字7不符合任何目標係數，也會破壞反應前後碳或錳原子守恆。" },
      H: { verdict: "incorrect", reason: "8是完整方程式中H₂O的係數，不是題目要求的x、y或z。" },
      I: { verdict: "incorrect", reason: "數字9不是配平所得的草酸根、Mn²⁺或CO₂係數，因此不應勾選。" },
      J: { verdict: "correct", reason: "5個C₂O₄²⁻共含10個碳，全部形成CO₂，因此z＝10。" },
      K: { verdict: "incorrect", reason: "數字11會使CO₂碳原子數超過反應物所含10個碳，不能守恆。" },
      L: { verdict: "incorrect", reason: "數字12不是目標係數；酸性完整配平中的H⁺係數其實為16。" }
    },
    takeaway: "氧化還原配平先守電子，再守原子與電荷；酸性環境最後用H⁺與H₂O補齊。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-74": {
    encouragement: "澄清石灰水變混濁是辨認二氧化碳的經典現象，因為會生成白色碳酸鈣。",
    keyIdea: "CO₂＋Ca(OH)₂→CaCO₃↓＋H₂O，CaCO₃沉澱使石灰水混濁。",
    steps: [
      "澄清石灰水含有Ca(OH)₂。",
      "CO₂通入後形成難溶的CaCO₃白色微粒。",
      "懸浮沉澱讓原本澄清的溶液看起來混濁。",
      "所以氣泡可能含CO₂，答案D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "O₂不會在一般條件下與石灰水生成白色CaCO₃沉澱，因此不會造成此混濁。" },
      B: { verdict: "incorrect", reason: "H₂難溶於水且不和Ca(OH)₂形成難溶鹽，無法解釋混濁。" },
      C: { verdict: "incorrect", reason: "CO在此條件下不會和石灰水形成碳酸鈣，不能用這項檢驗確認。" },
      D: { verdict: "correct", reason: "CO₂與Ca(OH)₂反應生成白色CaCO₃沉澱，使澄清石灰水變混濁。" },
      E: { verdict: "incorrect", reason: "SO₂也可能和鹼反應，但本題石灰水經典檢驗與官方答案指向CO₂的碳酸鈣沉澱。" },
      F: { verdict: "incorrect", reason: "CH₄在常溫下不會直接和石灰水反應形成沉澱，需燃燒後的CO₂才會使其混濁。" }
    },
    takeaway: "二氧化碳檢驗：通入澄清石灰水，生成碳酸鈣而變混濁。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-75": {
    encouragement: "天然氣與沼氣雖來源不同，最具代表性的主要可燃成分都是甲烷。",
    keyIdea: "天然氣主要含CH₄；有機物缺氧分解形成的沼氣也以CH₄為主要可燃成分。",
    steps: [
      "天然氣是地層中的氣態化石燃料，主要成分為甲烷。",
      "沼氣來自有機物在缺氧環境下被微生物分解，也產生大量甲烷。",
      "CH₄可燃，能解釋地表逸出氣體燃燒的現象。",
      "所以答案為F。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "O₂是助燃氣體，不是天然氣或沼氣中提供燃料熱值的主要成分。" },
      B: { verdict: "incorrect", reason: "H₂雖可燃，但一般天然氣與沼氣並不是以氫氣作為主要成分。" },
      C: { verdict: "incorrect", reason: "CO有毒且可燃，但不是天然氣與沼氣最主要、最具代表性的成分。" },
      D: { verdict: "incorrect", reason: "CO₂可存在於沼氣中但不燃燒，不能解釋逸出氣體作為主要燃料。" },
      E: { verdict: "incorrect", reason: "SO₂具刺激性且不可燃，並非天然氣與沼氣的主要組成。" },
      F: { verdict: "correct", reason: "CH₄是天然氣的主要成分，也是沼氣中最主要的可燃性氣體。" }
    },
    takeaway: "甲烷CH₄是天然氣與沼氣共同的重要成分，完全燃燒生成CO₂和水。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-89-76": {
    encouragement: "「無色、無味、無臭卻致命」加上燃燒不完全，這組線索直接指向一氧化碳。",
    keyIdea: "含碳燃料缺氧燃燒會生成CO；CO會和血紅素牢固結合，阻礙血液運氧。",
    steps: [
      "瓦斯若氧氣不足，碳無法完全氧化成CO₂，可能形成CO。",
      "CO無色無味，人體無法靠感官察覺。",
      "CO與血紅素結合能力很強，會造成組織缺氧甚至死亡。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "O₂無色無味但可支持生命與燃燒，並不是瓦斯不完全燃燒的有毒碳產物。" },
      B: { verdict: "incorrect", reason: "H₂無色無味且可燃，但不是含碳瓦斯不完全燃燒形成的主要有毒氣體。" },
      C: { verdict: "correct", reason: "CO由含碳燃料不完全燃燒產生，無色無味且會阻礙血液運氧，毒性很強。" },
      D: { verdict: "incorrect", reason: "CO₂會造成高濃度窒息，但不是題目強調的不完全燃燒與血紅素中毒氣體。" },
      E: { verdict: "incorrect", reason: "SO₂具有明顯刺激性氣味，不符合無色、無味、無臭的線索。" },
      F: { verdict: "incorrect", reason: "CH₄是瓦斯燃料本身，並非燃燒不完全後生成、以血紅素作用致毒的氣體。" }
    },
    takeaway: "一氧化碳無法用感官察覺；燃燒設備必須保持通風並定期檢查。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-34": {
    encouragement: "蔗糖與食鹽都不會讓水明顯偏酸或偏鹼，所以測pH很難分辨；其他方法都有離子線索。",
    keyIdea: "NaCl是電解質且含Na⁺、Cl⁻；蔗糖是非電解質，但兩者水溶液都大致呈中性。",
    steps: [
      "食鹽溶液能導電、鈉有黃色焰色、Cl⁻可和Ag⁺形成AgCl。",
      "蔗糖溶液幾乎不導電，也沒有上述Na⁺與Cl⁻反應。",
      "然而蔗糖與NaCl都不明顯水解，兩杯溶液pH都接近中性。",
      "因此不適合的是測pH，答案C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NaCl溶液含可移動離子而能導電，蔗糖溶液幾乎不解離，可用導電度區分。" },
      B: { verdict: "incorrect", reason: "食鹽中的Na⁺會產生明顯黃色焰色，蔗糖不含鈉，可用焰色反應區分。" },
      C: { verdict: "correct", reason: "NaCl與蔗糖的水溶液都大致呈中性，pH相近，不能作為可靠區分方法。" },
      D: { verdict: "incorrect", reason: "食鹽中的Cl⁻遇AgNO₃形成白色AgCl，蔗糖溶液沒有此沉澱，可加以區分。" }
    },
    takeaway: "辨識溶液要找特徵離子或導電差異；pH只適合酸鹼性不同的樣品。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-36": {
    encouragement: "先配平再用莫耳質量比較：1莫耳甲烷需要2莫耳氧氣，換成克數就能抓到錯誤。",
    keyIdea: "16 g CH₄完全燃燒需64 g O₂，所以1 g CH₄需4 g O₂，不是2 g。",
    steps: [
      "反應式顯示1 mol CH₄需要2 mol O₂。",
      "1 mol CH₄為16 g，2 mol O₂為64 g。",
      "因此1 g CH₄需要64÷16＝4 g O₂。",
      "選項B說2 g，故B錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲烷中的碳被氧化、氧氣被還原，反應有氧化數改變，確實屬氧化還原。" },
      B: { verdict: "correct", reason: "此敘述錯誤；16 g CH₄需64 g O₂，因此1 g甲烷應需4 g氧氣。" },
      C: { verdict: "incorrect", reason: "供氧不足時碳可能只氧化成有毒的CO，這是不完全燃燒的正確描述。" },
      D: { verdict: "incorrect", reason: "依題給氣態方程式，反應前1＋2共3莫耳氣體，反應後1＋2也共3莫耳，敘述正確。" }
    },
    takeaway: "化學方程式係數是莫耳比，不是質量比；換成克數要再乘莫耳質量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-37": {
    encouragement: "營養題逐項找關鍵例外：纖維素不能消化、必需胺基酸不能自製、礦物質雖少仍必需。",
    keyIdea: "脂質能供能並形成脂肪組織；人體不能消化纖維素，也需從食物取得必需胺基酸與礦物質。",
    steps: [
      "人體有分解澱粉的酵素，但缺少分解纖維素的酵素。",
      "部分胺基酸是必需胺基酸，必須由食物攝取。",
      "礦物質需求量雖少，仍參與造血、神經與體液平衡。",
      "脂質既可供能也能形成脂肪組織，所以答案C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "澱粉與纖維素都是多醣，但人體缺乏纖維素酶，纖維素不能被正常消化吸收。" },
      B: { verdict: "incorrect", reason: "人體無法自行合成所有胺基酸，必需胺基酸需要從飲食中取得。" },
      C: { verdict: "correct", reason: "脂質可分解供應能量，也能儲存在脂肪細胞中形成脂肪組織。" },
      D: { verdict: "incorrect", reason: "礦物質需求量雖小，但缺乏鐵、鈉等仍會影響造血、神經與體液平衡。" }
    },
    takeaway: "需要量少不等於不重要；維生素與礦物質都是維持生理功能的必需營養素。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-38": {
    encouragement: "同濃度同體積時，強酸會充分中和OH⁻；弱酸只部分解離，因此混合後留下的鹼性最強。",
    keyIdea: "CH₃COOH是弱酸；與等體積0.1 M NaOH混合時，所得醋酸根水解使溶液偏鹼。",
    steps: [
      "HCl與HNO₃為一元強酸，會和等莫耳NaOH接近完全中和。",
      "H₂SO₄可提供更多酸性當量，混合液不會有最高pH。",
      "CH₃COOH是弱酸，與NaOH形成CH₃COO⁻，醋酸根會水解產生OH⁻。",
      "所以混合後pH最大的是D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂SO₄可提供兩個酸性氫，和同體積NaOH混合後酸性當量較多，pH不會最大。" },
      B: { verdict: "incorrect", reason: "HCl為強酸，與等莫耳強鹼中和後接近中性，pH低於醋酸鹽溶液。" },
      C: { verdict: "incorrect", reason: "HNO₃也是一元強酸，和等莫耳NaOH中和後形成近中性的NaNO₃溶液。" },
      D: { verdict: "correct", reason: "CH₃COOH為弱酸，生成的CH₃COO⁻會水解產生OH⁻，使當量點溶液偏鹼。" }
    },
    takeaway: "弱酸強鹼滴定的當量點偏鹼，因為生成的弱酸根會和水反應產生OH⁻。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-39": {
    encouragement: "直接看化學式：金屬氫氧化物通常能提供OH⁻；酸與中性醇則不會。",
    keyIdea: "Mg(OH)₂雖難溶，但溶解部分會解離出OH⁻，使水溶液呈鹼性。",
    steps: [
      "NO₂溶於水會形成含氮酸；H₃PO₄本身就是酸。",
      "CH₃OH是甲醇，水溶液大致不呈明顯鹼性。",
      "Mg(OH)₂是金屬氫氧化物，溶解部分提供OH⁻。",
      "因此答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NO₂與水反應可生成HNO₂、HNO₃等酸性物質，使溶液呈酸性。" },
      B: { verdict: "incorrect", reason: "H₃PO₄是磷酸，能在水中釋放H⁺，溶液呈酸性而非鹼性。" },
      C: { verdict: "incorrect", reason: "CH₃OH是分子化合物甲醇，在水中不會大量解離產生OH⁻。" },
      D: { verdict: "correct", reason: "Mg(OH)₂雖溶解度小，但溶解後釋放OH⁻，使其水溶液呈鹼性。" }
    },
    takeaway: "難溶不等於不呈鹼性；金屬氫氧化物只要有少量溶解，仍可使溶液含OH⁻。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-65": {
    encouragement: "氫元素很靈活：可當燃料，也能呈＋1、0、－1三種氧化數；再用分子量比較密度。",
    keyIdea: "H₂燃燒產物主要為水；氫在化合物與單質中可有多種氧化數，且H₂密度約為空氣的1/14。",
    steps: [
      "H₂完全燃燒生成水，若來源與製程合宜，可作低污染燃料。",
      "氫在HCl中為＋1、H₂中為0、金屬氫化物中為－1。",
      "同溫同壓氣體密度比約等於莫耳質量比，H₂／空氣約2／29≈1／14。",
      "所以正確選項為A、B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "氫氣使用端完全燃燒主要生成水，不產生含碳廢氣，可視為低污染燃料。" },
      B: { verdict: "correct", reason: "氫在一般化合物可為＋1，在H₂為0，在NaH等金屬氫化物為－1。" },
      C: { verdict: "incorrect", reason: "地球上的氫多存在水與有機物等化合物中，游離H₂在大氣中的含量很少。" },
      D: { verdict: "correct", reason: "H₂莫耳質量約2、空氣平均約29，同溫同壓密度比約2/29，接近1/14。" },
      E: { verdict: "incorrect", reason: "工業氫氣多由天然氣蒸氣重組等方法製得，電解水耗電較高，並非因最經濟而占多數。" }
    },
    takeaway: "氫氣很輕且燃燒產水；但整體是否低碳，還要看氫氣的製造能源來源。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-72": {
    encouragement: "氣體定律只要牢記三件事：溫度用K、定溫PV固定、混合時分壓與分體積可相加。",
    keyIdea: "查理定律、道耳頓分壓定律與理想氣體體積加成，可判斷A、D、E。",
    steps: [
      "定壓下V與絕對溫度T成正比，因此相對0°C體積，每升1°C改變約1/273。",
      "定溫定量時PV固定，所以V與P成反比，不是與平方根成反比。",
      "理想氣體混合時，總壓為分壓和；定溫定壓下總體積可視為各分體積和。",
      "因此選A、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "定壓下由查理定律，體積每升高1°C約增加其0°C體積的1/273。" },
      B: { verdict: "incorrect", reason: "波以耳定律指出定溫時V與P成反比，也就是V∝1/P，不是1/√P。" },
      C: { verdict: "incorrect", reason: "氣體體積與絕對溫度K成正比，攝氏0°C不代表零體積，不能直接以攝氏溫度成正比。" },
      D: { verdict: "correct", reason: "互不反應氣體在定溫定容下遵守道耳頓定律，總壓等於各氣體分壓總和。" },
      E: { verdict: "correct", reason: "理想且互不反應的氣體在相同溫壓下混合，總體積可視為各成分分體積之和。" }
    },
    takeaway: "氣體定律的溫度一律用K；混合氣體則記住總壓等於各分壓相加。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-90-73": {
    encouragement: "一氧化碳的兩個招牌特徵是「水煤氣成分、具有還原性」以及「無色無味卻劇毒」。",
    keyIdea: "CO可還原金屬氧化物，也是水煤氣成分；它與血紅素結合造成缺氧中毒。",
    steps: [
      "水煤氣由CO與H₂組成，CO中的碳還可被氧化成CO₂，因此具有還原性。",
      "CO無色無味，在空氣中即使濃度不高也可能造成嚴重中毒。",
      "光合作用用CO₂；黃綠色漂白氣體是Cl₂；吸收紫外線的是O₃。",
      "所以選A、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水煤氣含CO與H₂，CO可從金屬氧化物奪氧並被氧化成CO₂，具有還原性。" },
      B: { verdict: "incorrect", reason: "綠色植物光合作用需要的是CO₂，不是會造成中毒的一氧化碳。" },
      C: { verdict: "incorrect", reason: "黃綠色、有毒且水溶液可殺菌漂白描述的是Cl₂，不是無色CO。" },
      D: { verdict: "incorrect", reason: "約占空氣1%且不活潑的氣體是Ar；CO在空氣中僅有極少量且具有反應性。" },
      E: { verdict: "correct", reason: "CO無色無味且毒性強，會與血紅素結合，少量累積也可能致命。" },
      F: { verdict: "incorrect", reason: "平流層中吸收紫外線並保護生物的是O₃，並非具還原性的CO。" }
    },
    takeaway: "CO與CO₂要分清：CO劇毒且可還原，CO₂則是光合作用原料與溫室氣體。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-24": {
    encouragement: "鉛和碳同族，常見氧化數可到＋4；把PbO₂中鉛的氧化數算出來就能確認最高氧化物。",
    keyIdea: "PbO₂中Pb為＋4，是鉛與氧形成的高氧化態穩定化合物。",
    steps: [
      "氧在一般氧化物中為－2，PbO₂的兩個氧合計－4。",
      "中性化合物總氧化數為0，所以Pb為＋4。",
      "這是第14族鉛可形成的最高常見氧化態之一。",
      "因此答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "強酸通常使許多重金屬化合物溶解成離子，不是把鉛、鎘普遍沉澱除去的方法。" },
      B: { verdict: "incorrect", reason: "鉛蓄電池充電是放電反應的逆向，兩極的PbSO₄分別轉回Pb與PbO₂，不是都生成PbSO₄。" },
      C: { verdict: "correct", reason: "PbO₂中氧合計－4，因此Pb為＋4，屬鉛的最高常見氧化態穩定化合物。" },
      D: { verdict: "incorrect", reason: "PbO₂應稱二氧化鉛，氧為－2，不是含O₂²⁻過氧根的「過氧化鉛」。" }
    },
    takeaway: "化合物命名不能只看氧原子數；二氧化物與過氧化物的氧化數和結構不同。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-25": {
    encouragement: "兩筒都是100克，重水每個分子較重；先比18與20的分子量，就能檢查各百分比。",
    keyIdea: "H₂O分子量約18，D₂O約20；重水分子量約多11%，但H原子量只有D的一半左右。",
    steps: [
      "普通氫原子量約1，重氫約2，所以H₂O約18、D₂O約20。",
      "重水分子量比水多(20－18)/18≈11%，密度也較大，同質量體積較小。",
      "但氫的原子量1只約為重氫2的50%，絕不是89%。",
      "所以不正確的是C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "重水密度約比水大一成多，同為100 g時體積約小一成，敘述方向與近似值合理。" },
      B: { verdict: "incorrect", reason: "D₂O分子較重且實測密度比H₂O約高一成，說重水密度約大12%可接受。" },
      C: { verdict: "correct", reason: "此敘述不正確；H原子量約1、D約2，所以H只約為D的50%，不是89%。" },
      D: { verdict: "incorrect", reason: "D₂O約20、H₂O約18，增加比例(20－18)/18約11%，敘述正確。" }
    },
    takeaway: "同位素會改變分子量與密度；百分比要先寫出基準量，再用差值除以基準。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-26": {
    encouragement: "Na失去1電子、Cl得到1電子後，各自達到鄰近惰性氣體的電子數，這是離子鍵形成的核心。",
    keyIdea: "Na⁺有10電子如Ne；Cl⁻有18電子如Ar，兩者皆具惰性氣體電子組態但電子數不同。",
    steps: [
      "Na原子序11，形成Na⁺後剩10電子，和Ne相同。",
      "Cl原子序17，形成Cl⁻後有18電子，和Ar相同。",
      "NaCl晶體由離子晶格構成，不存在一顆顆獨立NaCl分子。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氯化鈉是延伸的離子晶格，通常以NaCl化學式單位表示，不以獨立NaCl分子為最小單位。" },
      B: { verdict: "incorrect", reason: "Na⁺有10個電子而Cl⁻有18個電子，兩者電子數並不相同。" },
      C: { verdict: "correct", reason: "Na⁺的10電子同Ne，Cl⁻的18電子同Ar，兩者都達到惰性氣體電子數。" },
      D: { verdict: "incorrect", reason: "晶體穩定來自整體晶格能最低，不能簡化成每一個引力恰等於斥力的逐項抵消。" }
    },
    takeaway: "主族原子形成離子時常趨近惰性氣體電子組態，但不同離子的電子總數不一定相同。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-27": {
    encouragement: "pH的定義永遠回到氫離子濃度：pH＝－log[H⁺]，不論酸性或鹼性都一樣。",
    keyIdea: "鹼性溶液雖含較多OH⁻，其pH仍由[H⁺]定義；極濃溶液的pH也可能超出0到14。",
    steps: [
      "常溫純水[H⁺]約10⁻⁷ M，所以pH約7，不是0。",
      "pH刻度0到14是稀水溶液常見範圍，濃酸濃鹼可超出。",
      "pH在所有水溶液中都定義為－log[H⁺]。",
      "因此答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "常溫純水中[H⁺]約10⁻⁷ M，代入定義得到pH約7，而不是0。" },
      B: { verdict: "incorrect", reason: "高濃度強酸的有效氫離子濃度可能大於1，計算所得pH可能為0或負值。" },
      C: { verdict: "incorrect", reason: "濃鹼的pH可能大於14，因此0至14不是所有鹼性溶液不可超越的絕對範圍。" },
      D: { verdict: "correct", reason: "不論溶液酸鹼，pH都由氫離子濃度（更精確為活度）的負對數定義。" }
    },
    takeaway: "0到14是常見範圍，不是pH的硬邊界；定義始終是－log[H⁺]。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-29": {
    encouragement: "先算胃酸莫耳數，再依3莫耳HCl配1莫耳Al(OH)₃，最後乘78 g/mol。",
    keyIdea: "0.3 L×0.060 M＝0.018 mol HCl；所需Al(OH)₃為0.006 mol，即0.468 g。",
    steps: [
      "胃液中的HCl為0.3×0.060＝0.018 mol。",
      "反應式顯示1 mol Al(OH)₃中和3 mol HCl，所以需0.018÷3＝0.006 mol。",
      "Al(OH)₃莫耳質量為27＋3×(16＋1)＝78 g/mol。",
      "質量0.006×78＝0.468 g，約0.47 g，答案B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.26 g只約0.0033 mol Al(OH)₃，最多中和約0.010 mol HCl，不足所需。" },
      B: { verdict: "correct", reason: "0.018 mol HCl需0.006 mol Al(OH)₃，乘78 g/mol得0.468 g，約0.47 g。" },
      C: { verdict: "incorrect", reason: "1.4 g約為正確值的三倍，常見原因是忽略1 mol Al(OH)₃可中和3 mol HCl。" },
      D: { verdict: "incorrect", reason: "4.2 g遠超過中和0.018 mol HCl所需，未依反應係數與莫耳質量正確換算。" }
    },
    takeaway: "中和計算固定流程：M×V求莫耳數，再用係數比，最後換算質量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-30": {
    encouragement: "胃藥需要能中和胃酸又不能太強烈腐蝕；難溶的氫氧化鎂正好符合。",
    keyIdea: "Mg(OH)₂可提供OH⁻中和HCl，且溶解度較低、作用較溫和，是常見制酸劑。",
    steps: [
      "制酸劑需能消耗過多H⁺，所以應具有適度鹼性。",
      "Mg(OH)₂和HCl反應生成MgCl₂與水。",
      "KOH腐蝕性太強；NH₄Cl呈酸性；醋酸鈉不是典型安全有效的胃藥成分。",
      "因此答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Mg(OH)₂是難溶鹼，可較溫和地中和胃酸，常作制酸劑成分。" },
      B: { verdict: "incorrect", reason: "KOH是強鹼且腐蝕性高，直接服用會傷害組織，不適合作為胃藥。" },
      C: { verdict: "incorrect", reason: "NH₄Cl水溶液呈酸性，不能用來中和胃中過量的HCl。" },
      D: { verdict: "incorrect", reason: "醋酸鈉雖可水解呈弱鹼性，但並非題目情境中合適且常用的制酸劑。" }
    },
    takeaway: "藥用制酸劑不只要能中和酸，也要考慮鹼性強弱、溶解度與安全性。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-91-31": {
    encouragement: "把線索逐一對上：固體、不溶、燃燒只出CO₂與水，濃硫酸又能把它脫水焦黑，最像纖維素。",
    keyIdea: "植物纖維主要為纖維素，可寫成Cₙ(H₂O)ₙ；濃硫酸脫水後留下黑色碳。",
    steps: [
      "燃燒只收集CO₂與H₂O，表示主要只含C、H、O，可排除含氮蛋白質。",
      "樣品是固體且不溶於水與一般有機溶劑，不符合液態乙醇或水溶性果糖。",
      "濃硫酸具脫水性，能從纖維素中奪水並留下焦黑的碳。",
      "所以答案為植物纖維C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙醇在常溫為液體且可和水互溶，不符合題目固體、不溶於水的性質。" },
      B: { verdict: "incorrect", reason: "果糖雖只含C、H、O，但易溶於水，與樣品不溶於水的觀察衝突。" },
      C: { verdict: "correct", reason: "植物纖維的纖維素為不溶固體，濃硫酸可將其脫水而焦黑並產生水蒸氣。" },
      D: { verdict: "incorrect", reason: "蛋白質通常含N，有些還含S，完全燃燒產物不應只考慮CO₂與H₂O。" }
    },
    takeaway: "濃硫酸使紙張、棉花等纖維素焦黑，是強烈脫水後留下碳的結果。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
