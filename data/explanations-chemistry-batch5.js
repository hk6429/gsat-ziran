window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-95-2": {
    encouragement: "先抓住聚合物的特徵：要由許多小單元連成長鏈或網狀大分子。逐項想它的組成，就能找出例外。",
    keyIdea: "澱粉、塑膠、纖維素與蛋白質都是大分子；肥皂主要是脂肪酸鹽的小分子離子化合物。",
    steps: [
      "澱粉與纖維素由許多葡萄糖單元連接，蛋白質由許多胺基酸連接，都是天然聚合物。",
      "多數塑膠由許多單體聚合而成，是合成聚合物。",
      "肥皂的主要成分是脂肪酸鈉鹽或鉀鹽，雖有長碳鏈，但不是許多單體反覆連成的聚合物。",
      "因此不是聚合物的是 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "澱粉由許多葡萄糖單元連接而成，屬於天然聚合物。" },
      B: { verdict: "correct", reason: "肥皂主要是脂肪酸的鈉鹽或鉀鹽，單一分子雖有長碳鏈，卻不是由大量重複單元聚合而成。" },
      C: { verdict: "incorrect", reason: "塑膠通常由大量小分子單體經聚合反應連接，屬於合成聚合物。" },
      D: { verdict: "incorrect", reason: "纖維素由大量葡萄糖單元以特定鍵結連成長鏈，是天然聚合物。" },
      E: { verdict: "incorrect", reason: "蛋白質由許多胺基酸以胜肽鍵連接而成，是生物聚合物。" }
    },
    takeaway: "分子有長碳鏈不一定就是聚合物，還要看是否由許多重複單元連接。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-95-3": {
    encouragement: "酸雨進入湖水後，哪種岩石能像制酸劑一樣消耗酸，就能讓pH變化最小。",
    keyIdea: "石灰岩含大量CaCO₃，能與酸反應，對酸雨具有緩衝作用。",
    steps: [
      "酸雨會增加湖水中的H⁺，使pH下降。",
      "石灰岩的主要成分CaCO₃可與H⁺反應，消耗進入水中的酸。",
      "花崗岩、安山岩與玄武岩主要是矽酸鹽礦物，對酸的中和能力通常不如碳酸鹽岩。",
      "所以石灰岩地區湖水的pH受酸雨影響最小，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "花崗岩以矽酸鹽礦物為主，缺少大量可快速中和酸的碳酸鈣，緩衝酸雨能力較弱。" },
      B: { verdict: "incorrect", reason: "安山岩主要也是矽酸鹽組成，不能像石灰岩中的CaCO₃那樣有效消耗H⁺。" },
      C: { verdict: "correct", reason: "石灰岩富含CaCO₃，可與酸反應並消耗H⁺，使湖水pH較不容易因酸雨大幅下降。" },
      D: { verdict: "incorrect", reason: "玄武岩雖可長期風化，但在四個選項中，立即中和酸與緩衝pH的能力不如碳酸鹽石灰岩。" }
    },
    takeaway: "碳酸鈣不只存在制酸劑，也能讓石灰岩地區的水體較能抵抗酸化。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-95-37": {
    encouragement: "先配平反應，再把34克與66克各換成莫耳，就能清楚看出哪一種反應物先用完。",
    keyIdea: "2NH₃＋CO₂→(NH₂)₂CO＋H₂O；2 mol NH₃恰好消耗1 mol CO₂，生成1 mol尿素與1 mol水。",
    steps: [
      "34克NH₃為34÷17＝2.0 mol；66克CO₂為66÷44＝1.5 mol。",
      "平衡式需要2 mol NH₃配1 mol CO₂，所以2.0 mol NH₃只消耗1.0 mol CO₂，NH₃為限量試劑。",
      "CO₂剩下1.5－1.0＝0.5 mol，質量為0.5×44＝22克。",
      "同時生成1.0 mol尿素與1.0 mol水，質量分別60克、18克，因此選 C、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "正確配平需在NH₃前加係數2：2NH₃＋CO₂→(NH₂)₂CO＋H₂O；選項未配平氮與氫。" },
      B: { verdict: "incorrect", reason: "2.0 mol NH₃恰好是反應所需量，會全部用完，不會剩下8.5克。" },
      C: { verdict: "correct", reason: "1.5 mol CO₂中只有1.0 mol與2.0 mol NH₃反應，剩0.5 mol，即22克。" },
      D: { verdict: "correct", reason: "依2：1係數，2.0 mol NH₃生成1.0 mol尿素；尿素莫耳質量60，所以生成60克。" },
      E: { verdict: "correct", reason: "生成尿素與水的莫耳比為1：1，因此生成1.0 mol水，也就是18克。" }
    },
    takeaway: "限量試劑題一定先配平；剩餘量與產物量都由同一組係數比算出。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-95-39": {
    encouragement: "電池名稱容易混在一起，這題只問電解液是不是鹼性氫氧化物。把每種電池的典型電解液逐一配對即可。",
    keyIdea: "傳統乾電池使用銨鹽糊狀電解液，鉛蓄電池使用硫酸；其餘所列鹼性、水銀與鎳鎘電池常用KOH等鹼性電解液。",
    steps: [
      "一般乾電池的電解液主要含NH₄Cl、ZnCl₂等，不是鹼性氫氧化物。",
      "鹼性電池、水銀電池與鎳鎘電池常使用KOH等鹼性氫氧化物水溶液。",
      "鉛蓄電池以稀硫酸作電解液，也不是鹼性氫氧化物。",
      "所以應選 A、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "傳統鋅錳乾電池使用含NH₄Cl、ZnCl₂的糊狀電解液，不使用鹼性氫氧化物。" },
      B: { verdict: "incorrect", reason: "鹼性電池之所以稱為鹼性，正是因為常以KOH等鹼性氫氧化物作電解液。" },
      C: { verdict: "incorrect", reason: "水銀電池通常使用KOH或NaOH等鹼性電解液，不符合題目要求。" },
      D: { verdict: "incorrect", reason: "鎳鎘電池常以KOH水溶液作電解液，屬鹼性氫氧化物。" },
      E: { verdict: "correct", reason: "鉛蓄電池的電解液是稀硫酸，屬酸性電解液，不是鹼性氫氧化物。" }
    },
    takeaway: "乾電池看銨鹽，鉛蓄電池看硫酸；名稱含「鹼性」的電池則直接提醒電解液特性。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-19": {
    encouragement: "題目給了兩個線索：受熱會凝固，而且含氮。先用含氮排除醣類與油脂，就只剩蛋白質。",
    keyIdea: "蛋白質受熱會變性凝固，且由含氮的胺基酸組成；燃燒時可能產生有臭味的含氮物質。",
    steps: [
      "澱粉與乳糖屬醣類，主要含C、H、O；牛脂主要是脂質，也以C、H、O為主。",
      "蛋白質由胺基酸組成，含有氮元素。",
      "蛋白質受熱會變性、凝固；燃燒含氮蛋白質時可能產生具有臭味的含氮化合物。",
      "因此答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "澱粉是多醣，主要含C、H、O，不具有題目所強調的含氮特徵，加熱也不是典型蛋白質凝固現象。" },
      B: { verdict: "incorrect", reason: "牛脂主要由甘油與脂肪酸形成，通常不含氮，也不會呈現蛋白質受熱變性凝固的特徵。" },
      C: { verdict: "correct", reason: "蛋白質含氮，受熱會變性凝固；燃燒時也可能產生有臭味的含氮物質。" },
      D: { verdict: "incorrect", reason: "乳糖是雙醣，主要只含C、H、O，不符合燃燒產生含氮化合物的線索。" }
    },
    takeaway: "看到「受熱凝固＋含氮」可聯想到蛋白質的變性與胺基酸組成。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-20": {
    encouragement: "熱塑性塑膠的名字已經提示「受熱可塑形」。這題要找的是把聚合物鍵結說錯的選項。",
    keyIdea: "熱塑性塑膠的分子內主要以共價鍵連接，不是離子鍵；多數又是不良導體與不良熱導體。",
    steps: [
      "熱塑性塑膠多由石化原料製成，加熱時分子鏈較能滑動而軟化，冷卻後再固化。",
      "聚合物長鏈中的原子主要靠共價鍵相連，分子鏈之間則有分子間作用力。",
      "一般塑膠缺少可自由移動的電子或離子，因此通常不易導電，也不易傳熱。",
      "所以錯誤的是 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "本題問錯誤項。許多熱塑性塑膠的單體來自石油化學工業，此敘述合理。" },
      B: { verdict: "incorrect", reason: "加熱軟化、冷卻固化並可重複塑形，正是熱塑性塑膠的重要特徵。" },
      C: { verdict: "correct", reason: "熱塑性塑膠的高分子鏈主要由共價鍵連接，不是由正負離子以離子鍵構成。" },
      D: { verdict: "incorrect", reason: "一般塑膠沒有大量可移動電荷，且熱傳導能力低，所以通常不導電、也不易傳熱。" }
    },
    takeaway: "塑膠是共價高分子；「熱塑性」描述受熱軟化的性質，不代表分子由離子鍵組成。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-22": {
    encouragement: "把每個選項都換成「幾莫耳氫原子」比較，數字就會非常清楚。",
    keyIdea: "分子數先換莫耳，再乘每個分子含的H原子數；8克CH₄含2 mol氫原子，最多。",
    steps: [
      "A有3.01×10²³個H₂分子，也就是0.5 mol H₂，含1.0 mol H原子；B約含0.834 mol H原子。",
      "C的8.5克NH₃為0.5 mol NH₃，每個有3個H，所以含1.5 mol H原子。",
      "D的8克CH₄為8÷16＝0.5 mol CH₄，每個有4個H，所以含2.0 mol H原子。",
      "2.0 mol最大，因此答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3.01×10²³個H₂是0.5 mol分子，每個含2個H，因此只有1.0 mol H原子。" },
      B: { verdict: "incorrect", reason: "5.02×10²³個H原子約為0.834 mol，少於其他多個選項。" },
      C: { verdict: "incorrect", reason: "8.5克NH₃是0.5 mol NH₃，含0.5×3＝1.5 mol H原子，仍少於D。" },
      D: { verdict: "correct", reason: "8克CH₄是0.5 mol，每個分子有4個H，所以含2.0 mol、即1.204×10²⁴個H原子。" }
    },
    takeaway: "比較原子數時，統一換成「物質莫耳數×每分子原子個數」。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-37": {
    encouragement: "金屬形成陽離子的動作就是失去電子。把這一句翻成氧化還原語言，答案就出來了。",
    keyIdea: "離子化傾向大的金屬容易失去電子形成陽離子，因此容易被氧化。",
    steps: [
      "金屬原子形成陽離子時，會把電子交出去。",
      "失去電子稱為氧化，所以離子化傾向愈大，愈容易被氧化。",
      "獲得電子才稱為還原，方向與題目所述金屬形成陽離子相反。",
      "因此應選 B、C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "被還原表示獲得電子；離子化傾向大的金屬反而容易失去電子。" },
      B: { verdict: "correct", reason: "金屬失去電子形成陽離子的過程就是氧化，因此離子化傾向大者較易被氧化。" },
      C: { verdict: "correct", reason: "「較易成陽離子」直接表示金屬原子較容易失去價電子。" },
      D: { verdict: "incorrect", reason: "容易獲得電子通常是非金屬形成陰離子的傾向，與金屬形成陽離子的方向相反。" }
    },
    takeaway: "失去電子是氧化、得到電子是還原；金屬成陽離子屬前者。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-38": {
    encouragement: "鉛蓄電池放電時，硫酸被用掉並生成水；兩個電極最後都轉成較重的硫酸鉛。抓住這兩條主線即可。",
    keyIdea: "放電總反應為Pb＋PbO₂＋2H₂SO₄→2PbSO₄＋2H₂O，故硫酸濃度與溶液密度下降，兩極重量都增加。",
    steps: [
      "放電時H₂SO₄被消耗並生成H₂O，所以電解液中的硫酸濃度下降。",
      "硫酸濃度降低後，電解液密度也跟著下降，這就是能用比重判斷充電狀態的原因。",
      "負極Pb轉成PbSO₄，加入了硫酸根；正極PbO₂也轉成莫耳質量較大的PbSO₄。",
      "因此兩極重量都增加，正確選項為 B、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "放電總反應會消耗H₂SO₄並生成水，所以硫酸濃度不是增大，而是減小。" },
      B: { verdict: "correct", reason: "放電時硫酸參與反應生成PbSO₄與水，電解液中的硫酸濃度下降。" },
      C: { verdict: "incorrect", reason: "硫酸濃度降低並增加水的比例後，電解液密度會降低，不會增大。" },
      D: { verdict: "correct", reason: "鉛蓄電池放電愈多，硫酸濃度愈低，溶液比重也愈小。" },
      E: { verdict: "correct", reason: "負極Pb與正極PbO₂都轉成PbSO₄，兩個電極都結合了額外成分，重量皆增加。" },
      F: { verdict: "incorrect", reason: "負極重量確實增加，但正極PbO₂轉成PbSO₄後重量也增加，不是減少。" }
    },
    takeaway: "鉛蓄電池放電可記成「酸變淡、比重降、兩極都變成PbSO₄而增重」。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-49": {
    encouragement: "第一個化合物是XY，等於先告訴我們X與Y一比一時的質量比；再拿第二組質量和它比較即可。",
    keyIdea: "第一個XY中X/Y質量比為9.34/2.00＝4.67；第二個的X/Y為4.67/3.00，表示每個X配的Y數變成3倍。",
    steps: [
      "第一個化合物是XY，所以一個X原子量與一個Y原子量的比為9.34：2.00＝4.67：1。",
      "第二個化合物有4.67克X與3.00克Y；相較第一個比例，X量是一半，Y量卻是1.5倍。",
      "因此每相同份量X所搭配的Y，是第一個化合物的1.5÷0.5＝3倍。",
      "第一個是XY，第二個就是XY₃，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "X₂Y代表每個Y搭配更多X，但第二組資料顯示相對於X，Y的比例反而增加。" },
      B: { verdict: "incorrect", reason: "XY₂只把Y/X比例加倍；由兩組質量比較可知實際增加到3倍。" },
      C: { verdict: "incorrect", reason: "X₃Y會讓X/Y原子比變大，方向和第二組Y相對更多的資料相反。" },
      D: { verdict: "correct", reason: "第二組每相同份量X所結合的Y是第一組的3倍；由XY可推得第二個為XY₃。" },
      E: { verdict: "incorrect", reason: "X₂Y₂可約成XY，組成比例與第一個化合物相同，不能符合第二組不同的質量比。" }
    },
    takeaway: "倍比題先固定其中一元素的量，再比較另一元素增加成幾倍。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-96-50": {
    encouragement: "三瓶藥劑可以分兩關辨認：先用BaCl₂找硫酸根，再用AgNO₃沉澱在氨水中的溶解性分HCl與HI。",
    keyIdea: "SO₄²⁻生成白色BaSO₄；Cl⁻生成白色AgCl且可溶於過量氨水；I⁻生成AgI且不溶於氨水。",
    steps: [
      "只有甲加入BaCl₂產生白色沉澱，表示甲含SO₄²⁻，所以甲是H₂SO₄。",
      "乙、丙加入AgNO₃都沉澱，表示可分別是含I⁻的HI與含Cl⁻的HCl。",
      "AgCl白色沉澱可溶於過量氨水，AgI沉澱不溶；只有丙的沉澱溶解，所以丙是HCl、乙是HI。",
      "順序為甲H₂SO₄、乙HI、丙HCl，答案為 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "H₂SO₄與BaCl₂生成BaSO₄；HI生成不溶於氨水的AgI；HCl生成可溶於過量氨水的AgCl，完全符合觀察。" },
      B: { verdict: "incorrect", reason: "若甲是HI，加入BaCl₂不會產生題目所述的BaSO₄白色沉澱。" },
      C: { verdict: "incorrect", reason: "此選項把乙、丙顛倒；HCl的AgCl可溶於氨水，應是丙，不是乙。" },
      D: { verdict: "incorrect", reason: "HCl無法在加入BaCl₂時形成甲所見的白色BaSO₄；CH₃COOH與AgNO₃也不會形成題述丙沉澱。" }
    },
    takeaway: "定性分析要把「是否沉澱」和「沉澱能否再溶解」兩層證據一起使用。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-10": {
    encouragement: "把「導體」與「電解質」分開判斷：前者能導電，後者溶於水或熔融時能產生離子。",
    keyIdea: "酒精是分子化合物，純物質不導電，溶於水也幾乎不電離，因此既非導體也非電解質。",
    steps: [
      "黃銅與石墨都有可移動電子，能導電。",
      "食鹽與醋酸鉀是離子化合物，在熔融或水溶液中可產生移動離子，屬電解質。",
      "酒精由中性分子組成，沒有自由移動電荷，溶於水後也不明顯電離。",
      "所以答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "固態食鹽雖不易導電，但熔融或溶於水會產生Na⁺、Cl⁻，所以食鹽是電解質。" },
      B: { verdict: "incorrect", reason: "黃銅是金屬合金，具有可移動電子，是導體。" },
      C: { verdict: "correct", reason: "酒精沒有自由移動電子，溶於水後也幾乎不產生離子，因此既非導體也非電解質。" },
      D: { verdict: "incorrect", reason: "醋酸鉀是離子化合物，溶於水解離成K⁺與CH₃COO⁻，屬電解質。" },
      E: { verdict: "incorrect", reason: "石墨具有可在層內移動的電子，能導電，所以是導體。" }
    },
    takeaway: "「固體當下不導電」不等於「不是電解質」；還要看熔融或溶於水後是否產生離子。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-11": {
    encouragement: "元素符號重視大小寫，逐個核對即可。先記常見的一字母符號B，再看Ti、Cr、As、Kr。",
    keyIdea: "硼、鈦、鉻、砷、氪的元素符號依序是B、Ti、Cr、As、Kr。",
    steps: [
      "硼是B，不是Ba、Be或Br；鈦是Ti。",
      "鉻是Cr，砷是As，氪是Kr。",
      "五個符號依序組成[B、Ti、Cr、As、Kr]。",
      "因此答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Ba是鋇、Ca是鈣、Ar是氬，與題目的硼、鉻、砷不符。" },
      B: { verdict: "incorrect", reason: "Be是鈹、Ni是鎳、Cs是銫、Sn是錫，只有末項Cr也不是氪Kr。" },
      C: { verdict: "incorrect", reason: "Br是溴、Li是鋰、Cf是鉲、Am是鋂、K是鉀，五項都不是題目要求的順序。" },
      D: { verdict: "correct", reason: "B、Ti、Cr、As、Kr正好依序代表硼、鈦、鉻、砷、氪。" },
      E: { verdict: "incorrect", reason: "第二項Ni是鎳而非鈦，最後K是鉀而非氪Kr。" }
    },
    takeaway: "元素符號第二個字母必須小寫；K是鉀，Kr才是氪。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-12": {
    encouragement: "氟氯碳化合物的環境問題，關鍵是高空中釋出的氯會破壞臭氧。",
    keyIdea: "CFC進入平流層後受紫外光分解，產生的含氯自由基會催化破壞O₃，因此禁用是為了保護臭氧層。",
    steps: [
      "含氟氯碳化合物在低空相當穩定，可逐漸到達平流層。",
      "在強紫外光下，CFC可釋出含氯活性粒子，反覆促使臭氧O₃分解。",
      "臭氧層減少會使更多有害紫外線到達地表。",
      "所以禁用CFC冷媒主要是保護臭氧，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CFC管制不是因為會大量消耗一般大氣中的O₂，而是會催化破壞平流層O₃。" },
      B: { verdict: "incorrect", reason: "氮氣是大氣主要成分，但不是CFC造成臭氧層問題時要保護的目標氣體。" },
      C: { verdict: "correct", reason: "CFC釋出的含氯活性粒子會催化分解臭氧，因此禁用是為了保護臭氧層。" },
      D: { verdict: "incorrect", reason: "二氧化碳與溫室效應有關，但題目所述全面禁用CFC冷媒的核心原因是臭氧層破壞。" },
      E: { verdict: "incorrect", reason: "水蒸氣不是CFC在平流層中主要破壞的氣體。" }
    },
    takeaway: "CFC的經典環境危害是破壞臭氧層；不要和二氧化碳造成的溫室效應混為一談。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-15": {
    encouragement: "逐組找出會不會沉澱、氧化、酸鹼反應或燃燒；只有在常溫下缺少啟動條件的一組能安穩共存。",
    keyIdea: "H₂、O₂、N₂在常溫常壓且未點燃時反應速率很慢，可暫時共存；其他各組會發生明顯反應。",
    steps: [
      "Ag⁺與CrO₄²⁻會形成Ag₂CrO₄沉澱；NO會被O₂氧化成NO₂。",
      "CO₂會與Ca(OH)₂反應生成CaCO₃；Na會迅速與水、乙醇反應。",
      "H₂與O₂雖可燃燒，但常溫下若沒有火花、加熱或催化，活化能使反應不易自行開始，N₂也很穩定。",
      "因此不易引起反應的是 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "AgNO₃提供的Ag⁺會與K₂CrO₄提供的CrO₄²⁻形成Ag₂CrO₄沉澱。" },
      B: { verdict: "incorrect", reason: "NO在常溫下可被O₂氧化成NO₂，因此三種氣體不會長期保持原狀。" },
      C: { verdict: "correct", reason: "H₂與O₂需要點火等方式跨越活化能障礙；在常溫常壓且無火源時與N₂可暫時共存。" },
      D: { verdict: "incorrect", reason: "CO₂會與Ca(OH)₂水溶液反應生成CaCO₃白色沉澱。" },
      E: { verdict: "incorrect", reason: "金屬Na會迅速與水反應，也能與乙醇反應並放出H₂，不能安穩共存。" }
    },
    takeaway: "「熱力學上能反應」不等於常溫下立刻反應；但沉澱、酸鹼與活潑金屬反應通常會直接發生。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-16": {
    encouragement: "平均原子量就是兩種同位素質量依天然比例做加權平均，較多的同位素會把答案拉得更靠近自己。",
    keyIdea: "原子量＝10.0129×19.91%＋11.0093×80.09%≈10.81。",
    steps: [
      "把百分率換成小數：19.91%＝0.1991，80.09%＝0.8009。",
      "分別計算兩種同位素的貢獻：10.0129×0.1991與11.0093×0.8009。",
      "相加約得10.81 amu；因質量11.0093的同位素占約80%，平均值也應較接近11。",
      "取到小數點後二位為10.81，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "加權平均一定介於10.0129與11.0093之間，不可能降到5.00。" },
      B: { verdict: "incorrect", reason: "10.01接近較少的同位素質量，但它只占19.91%，不能代表整體平均。" },
      C: { verdict: "incorrect", reason: "10.50接近兩者等量時的平均；實際較重同位素占80.09%，平均應更接近11。" },
      D: { verdict: "correct", reason: "10.0129×0.1991＋11.0093×0.8009約等於10.81。" },
      E: { verdict: "incorrect", reason: "11.01接近較重同位素本身的質量，但仍有19.91%的較輕同位素會把平均值拉低。" }
    },
    takeaway: "加權平均先檢查合理範圍：答案要落在兩種同位素質量之間，並靠近含量較高者。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-17": {
    encouragement: "同位素符號左下角的數字是原子序。原子序5先認出是硼，再排電子就能得到最外層電子數。",
    keyIdea: "X的原子序為5，是硼；中性原子有5個電子，排列為內層2個、外層3個。",
    steps: [
      "題目兩個同位素都是原子序5，表示它們是同一元素，元素X為硼。",
      "中性硼原子的電子數等於質子數，共5個。",
      "第一層放2個電子，剩下3個位於第二層，也就是最外層。",
      "因此最外層有3個電子，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "原子序5的中性原子共有5個電子，電子排列2、3，最外層不是1個。" },
      B: { verdict: "incorrect", reason: "2個電子位於第一層內層；最外層第二層另有3個電子。" },
      C: { verdict: "correct", reason: "硼的5個電子排列為2、3，所以最外層電子數是3。" },
      D: { verdict: "incorrect", reason: "最外層4個電子對應原子序6的碳，不是原子序5的X。" },
      E: { verdict: "incorrect", reason: "最外層5個電子對應原子序7的氮；X的原子序是5。" }
    },
    takeaway: "同位素中子數可不同，但同一元素的原子序與中性原子的電子排列相同。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-18": {
    encouragement: "ppm先換成每公升有幾毫克，再處理稀釋與莫耳質量，三步就能完成。",
    keyIdea: "水溶液2 ppm約為2 mg/L；稀釋成兩倍體積後為1 mg/L，再除以O₃莫耳質量48得約2×10⁻⁵ M。",
    steps: [
      "稀水溶液中2 ppm可近似為每公升含2 mg O₃。",
      "加入純水使體積變為2倍，溶質量不變，所以濃度減半為1 mg/L。",
      "1 mg＝0.001 g，O₃莫耳質量為3×16＝48 g/mol。",
      "莫耳濃度為0.001÷48≈2.08×10⁻⁵ M，最接近2×10⁻⁵ M，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1×10⁻⁴ M相當於每公升約4.8 mg O₃，高於稀釋後的1 mg/L。" },
      B: { verdict: "incorrect", reason: "2×10⁻⁴ M高估約10倍；換算時必須把毫克改成克。" },
      C: { verdict: "incorrect", reason: "5×10⁻⁵ M相當於2.4 mg/L，甚至高於稀釋前後應有的1 mg/L。" },
      D: { verdict: "correct", reason: "稀釋後1 mg/L＝0.001 g/L，除以48 g/mol得2.08×10⁻⁵ mol/L。" },
      E: { verdict: "incorrect", reason: "1×10⁻⁵ M相當於0.48 mg/L，約是正確濃度的一半，等於多稀釋了一次。" }
    },
    takeaway: "ppm轉莫耳濃度要依序做：mg/L→g/L→mol/L。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-40": {
    encouragement: "「均勻混合」就是不分層。用相似相溶判斷：水能與極性且可形成強作用力的液體互溶。",
    keyIdea: "丙酮、酒精與食醋可和水形成均一溶液；汽油與甲苯以非極性烴為主，會和水分層。",
    steps: [
      "甲管汽油與乙管甲苯主要是非極性烴，和極性水作用弱，攪拌後仍會分層。",
      "丙管丙酮的羰基有明顯極性，可與水互溶。",
      "丁管酒精有羥基，可和水形成氫鍵；戊管食醋本來就是乙酸水溶液，再加水仍均勻。",
      "因此均勻混合的是丙、丁、戊，也就是 C、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "汽油是多種非極性烴的混合物，與極性水不互溶，靜置後會分層。" },
      B: { verdict: "incorrect", reason: "甲苯以非極性的芳香烴結構為主，和水的互溶性很低，不會形成均一溶液。" },
      C: { verdict: "correct", reason: "丙酮的羰基具有極性，能與水分子產生強作用，可均勻互溶。" },
      D: { verdict: "correct", reason: "酒精的羥基能和水形成氫鍵，所以酒精與水可均勻混合。" },
      E: { verdict: "correct", reason: "食醋本身是乙酸的水溶液，加入更多蒸餾水後仍維持均一相。" }
    },
    takeaway: "不是所有有機物都不溶於水；羥基、羰基等極性官能基能大幅提高與水的互溶性。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-97-41": {
    encouragement: "六個反應看起來都會發生，但只有檢查氧化數，才能知道是否真的有電子轉移。",
    keyIdea: "PbS與O₂反應時硫被氧化、氧被還原；Cl₂與水反應時氯同時升、降氧化數，兩者皆為氧化還原。",
    steps: [
      "B中PbS的S由－2升到0，O₂的O由0降到－2，氧化數改變。",
      "D中Cl₂的Cl原為0價，生成HOCl中的＋1價Cl與HCl中的－1價Cl，是歧化反應。",
      "A、C、E只是結合、酸鹼或離子重新組合，相關元素氧化數不變。",
      "F是AgCl沉澱反應，Ag仍＋1、Cl仍－1，因此答案為 B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CaO與H₂O生成Ca(OH)₂時，Ca仍＋2、H仍＋1、O仍－2，沒有氧化數改變。" },
      B: { verdict: "correct", reason: "PbS中的S由－2價變為S單質的0價而被氧化，O₂由0價變為－2價而被還原。" },
      C: { verdict: "incorrect", reason: "碳酸鹽與酸反應生成CO₂時，碳仍為＋4價，其他元素氧化數也沒有改變。" },
      D: { verdict: "correct", reason: "Cl₂中的0價Cl同時形成HOCl中的＋1價與HCl中的－1價，發生氧化與還原。" },
      E: { verdict: "incorrect", reason: "Si在SiO₂與SiF₄中都為＋4價，H、O、F的氧化數也不變。" },
      F: { verdict: "incorrect", reason: "Ag⁺與Cl⁻形成AgCl沉澱，只是離子重新配對，氧化數維持＋1與－1。" }
    },
    takeaway: "有新物質生成不代表氧化還原；判斷時直接追蹤各元素反應前後的氧化數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
