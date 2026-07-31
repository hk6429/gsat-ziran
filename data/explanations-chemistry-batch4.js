window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-103-32": {
    encouragement: "這題的關鍵不是看到氣泡就急著選，而是先算兩種反應物各有幾莫耳，再找誰先用完。",
    keyIdea: "Na₂CO₃＋2HCl→2NaCl＋H₂O＋CO₂；碳酸鈉與鹽酸的反應莫耳比是 1：2。",
    steps: [
      "鹽酸莫耳數為 0.1000 L×0.40 mol/L＝0.040 mol；碳酸鈉莫耳質量為106 g/mol，所以4.24克是0.040 mol。",
      "0.040 mol Na₂CO₃ 完全反應需要0.080 mol HCl，但實際只有0.040 mol，因此HCl是限量試劑。",
      "0.040 mol HCl 可反應0.020 mol Na₂CO₃，並生成0.020 mol CO₂，質量為0.020×44＝0.88克。",
      "反應後剩下0.040－0.020＝0.020 mol Na₂CO₃，因此正確選項是 B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "完整配平應為 Na₂CO₃＋2HCl→2NaCl＋H₂O＋CO₂；選項中的HCl係數少了2，沒有配平氫與氯原子。" },
      B: { verdict: "correct", reason: "HCl只有0.040 mol，依2：1比例生成0.020 mol CO₂；0.020×44＝0.88克。" },
      C: { verdict: "incorrect", reason: "HCl可消耗0.020 mol Na₂CO₃，所以原有0.040 mol會剩0.020 mol，不是0.010 mol。" },
      D: { verdict: "correct", reason: "0.040 mol Na₂CO₃需要0.080 mol HCl才能完全反應，但只有0.040 mol HCl，因此HCl先用完。" },
      E: { verdict: "incorrect", reason: "此反應會生成可溶的NaCl、水與CO₂氣體，沒有生成難溶固體，不是沉澱反應。" }
    },
    takeaway: "限量試劑要用配平後的係數比判斷；本題每2莫耳HCl只能反應1莫耳Na₂CO₃。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-104-6": {
    encouragement: "密閉容器裡不只要算產物，還要把沒有反應完的氧氣留下來一起計算。",
    keyIdea: "CH₄＋2O₂→CO₂＋2H₂O；甲烷完全燃燒後，總分子莫耳數包含CO₂、H₂O與剩餘O₂。",
    steps: [
      "甲烷為1.6÷16＝0.10 mol，氧氣為8.0÷32＝0.25 mol。",
      "0.10 mol CH₄ 需要0.20 mol O₂，會生成0.10 mol CO₂與0.20 mol H₂O。",
      "氧氣原有0.25 mol，反應後剩0.25－0.20＝0.05 mol。",
      "容器中分子總莫耳數為0.10＋0.20＋0.05＝0.35 mol，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.20 mol只是生成水的莫耳數，漏算CO₂與剩餘O₂。" },
      B: { verdict: "incorrect", reason: "0.25 mol是反應前氧氣的莫耳數，不是燃燒後容器內所有分子的總量。" },
      C: { verdict: "incorrect", reason: "0.30 mol只把0.10 mol CO₂與0.20 mol H₂O相加，漏掉剩餘的0.05 mol O₂。" },
      D: { verdict: "correct", reason: "燃燒後有0.10 mol CO₂、0.20 mol H₂O及0.05 mol剩餘O₂，合計0.35 mol。" },
      E: { verdict: "incorrect", reason: "反應前總莫耳數是0.35 mol而不是0.40 mol；燃燒後依各成分計算也只有0.35 mol。" }
    },
    takeaway: "化學計量算完產物後，別忘了把過量反應物的剩餘量加回總量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-104-7": {
    encouragement: "判斷氧化還原最穩的方法，是檢查元素的氧化數有沒有改變，不必只靠反應名稱猜。",
    keyIdea: "鉛蓄電池放電伴隨電子轉移；其餘四項主要是酸鹼、分解或沉澱反應，氧化數不變。",
    steps: [
      "鉛蓄電池放電時，電極物質發生氧化與還原並傳遞電子，因此一定是氧化還原反應。",
      "NH₄Cl與Ca(OH)₂產生NH₃，以及H₂SO₄與NaCl產生HCl，主要是酸鹼或揮發性物質生成，氧化數不變。",
      "CaCO₃受熱分解成CaO與CO₂時，各元素氧化數不變；AgNO₃與KBr形成AgBr也只是離子交換與沉澱。",
      "所以答案為 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "鉛蓄電池靠電極上的氧化與還原反應產生電流，過程有電子轉移。" },
      B: { verdict: "incorrect", reason: "此反應是銨鹽與強鹼作用放出NH₃，各元素氧化數沒有改變。" },
      C: { verdict: "incorrect", reason: "CaCO₃→CaO＋CO₂雖是分解反應，但Ca、C、O的氧化數反應前後都不變。" },
      D: { verdict: "incorrect", reason: "Ag⁺與Br⁻結合形成AgBr沉澱，只是離子重新組合，銀與溴的氧化數未改變。" },
      E: { verdict: "incorrect", reason: "濃硫酸與NaCl生成HCl時沒有元素氧化數改變，主要利用酸與鹽反應及HCl揮發的性質。" }
    },
    takeaway: "反應看起來很劇烈不代表一定是氧化還原；真正判準是氧化數是否改變。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-104-31": {
    encouragement: "硫酸有兩個可中和的氫離子，先算「能提供多少H⁺」與「有多少OH⁻」，就能看出兩者剛好完全中和。",
    keyIdea: "0.0025 mol H₂SO₄可提供0.0050 mol H⁺，恰好中和0.0050 mol NaOH；中和放熱，Na⁺濃度為0.05 M。",
    steps: [
      "H₂SO₄莫耳數為0.0500 L×0.05 M＝0.0025 mol，可提供2倍的H⁺，即0.0050 mol。",
      "NaOH莫耳數為0.0500 L×0.10 M＝0.0050 mol，和H⁺恰好等量，因此完全中和，沒有過量H⁺或OH⁻。",
      "酸鹼中和會放熱，也不會生成沉澱或酸性氣體。",
      "Na⁺有0.0050 mol，混合後總體積為0.1000 L，所以[Na⁺]＝0.0050÷0.1000＝0.05 M；答案為 A、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "H⁺與OH⁻結合生成水的中和反應會釋放熱量。" },
      B: { verdict: "incorrect", reason: "反應生成的硫酸鈉可溶於水，不會形成難溶固體沉澱。" },
      C: { verdict: "incorrect", reason: "H₂SO₄與NaOH中和生成鹽和水，沒有生成酸性氣體。" },
      D: { verdict: "correct", reason: "Na⁺莫耳數為0.0050 mol，混合後體積0.1000 L，因此濃度是0.05 M。" },
      E: { verdict: "incorrect", reason: "H⁺與OH⁻恰好完全中和，沒有剩餘0.0050 mol OH⁻；其濃度不會是0.05 M。" }
    },
    takeaway: "多元酸要先換算可提供的H⁺總量；算濃度時還要使用混合後的總體積。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-104-51": {
    encouragement: "五個線索其實各自指向一種常見液體：酸性、最易揮發、去漬油味、水果香與最能溶鹽。",
    keyIdea: "乙酸呈酸性；乙醚最易揮發；己烷似去漬油；乙酸乙酯有水果香；水最能溶解食鹽。",
    steps: [
      "只有5號使藍色石蕊變紅，所以5號是乙酸。",
      "4號最易揮發，在選項所列液體中對應沸點低的乙醚。",
      "1號有去漬油般氣味，可判為非極性的己烷；2號有水果香，可判為酯類的乙酸乙酯。",
      "食鹽是離子化合物，在3號中的溶解度最高，所以3號是水；順序為己烷、乙酸乙酯、水、乙醚、乙酸，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1號有去漬油味應是己烷，不是丙酮；2號的水果香也較符合乙酸乙酯而非乙醇。" },
      B: { verdict: "incorrect", reason: "3號最能溶解食鹽應是水，不是乙醚；4號最易揮發才較符合乙醚。" },
      C: { verdict: "correct", reason: "依序符合去漬油味的己烷、水果香的乙酸乙酯、最能溶鹽的水、最易揮發的乙醚及呈酸性的乙酸。" },
      D: { verdict: "incorrect", reason: "4號最易揮發應是乙醚，5號呈酸性應是乙酸；此選項把4、5號排錯。" },
      E: { verdict: "incorrect", reason: "2號水果香應為乙酸乙酯，不是丙酮；5號必須是能使藍色石蕊變紅的乙酸。" }
    },
    takeaway: "物質鑑定要讓每一條線索都同時成立，而不是只對上一個特徵就作答。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-105-9": {
    encouragement: "把錶玻璃的質量扣掉，就能直接得到原溶液、溶質與水各有多重。",
    keyIdea: "溶解度是每100克水所能溶解的溶質克數；本題飽和溶液含0.7克KNO₃與1.5克水。",
    steps: [
      "溶液質量為86.2－84.0＝2.2克。",
      "水完全揮發後留下的KNO₃為84.7－84.0＝0.7克，因此原有水為2.2－0.7＝1.5克。",
      "溶解度＝0.7÷1.5×100＝46.7 g/100g水。",
      "最接近47，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "16並非由0.7克溶質與1.5克水的比例換算所得，明顯低估KNO₃的溶解度。" },
      B: { verdict: "incorrect", reason: "若把溶質質量除以整份溶液質量，會得到約32%的質量百分率，也不會得到27；溶解度的分母應是水。" },
      C: { verdict: "incorrect", reason: "0.7÷2.2×100約為32，但2.2克是整份溶液，不是水的質量，所以這是把定義用錯。" },
      D: { verdict: "correct", reason: "飽和溶液含0.7克KNO₃與1.5克水，換算為每100克水可溶約46.7克，最接近47。" },
      E: { verdict: "incorrect", reason: "54高估了溶質與水的比例；依實際質量換算只有約46.7。" }
    },
    takeaway: "溶解度的分母是溶劑水的質量，不是溶液總質量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-105-10": {
    encouragement: "混合生成CO與CO₂時，要把兩種產物的生成熱分開算，再加總。",
    keyIdea: "7.0克CO是0.25 mol，33.0克CO₂是0.75 mol；總放熱量為兩者生成熱絕對值的加權和。",
    steps: [
      "CO莫耳數為7.0÷28＝0.25 mol；CO₂莫耳數為33.0÷44＝0.75 mol。",
      "生成CO的焓變為0.25×(－110.2)＝－27.55 kJ。",
      "生成CO₂的焓變為0.75×(－393.5)＝－295.125 kJ。",
      "總焓變約－322.7 kJ，表示釋出322.7 kJ熱量，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "84.7 kJ沒有依0.25 mol CO與0.75 mol CO₂分別乘上各自生成熱後加總。" },
      B: { verdict: "incorrect", reason: "137.5 kJ接近把莫耳比例或生成熱取錯後的低估值，漏掉大部分生成CO₂的放熱。" },
      C: { verdict: "incorrect", reason: "248.2 kJ低估了0.75 mol CO₂生成時約295.1 kJ的放熱，尚未加上CO部分。" },
      D: { verdict: "correct", reason: "0.25×110.2＋0.75×393.5＝322.675，約為322.7 kJ。" },
      E: { verdict: "incorrect", reason: "457.8 kJ高估總放熱，不能把兩個「每莫耳生成熱」直接相加而不乘實際莫耳數。" }
    },
    takeaway: "產物不只一種時，每種產物都要用「實際莫耳數×莫耳生成熱」計算。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-105-11": {
    encouragement: "每杯等濃度、等體積，就可以假設每杯各有1份溶質；接著只要數混合後仍留在水中的離子份數。",
    keyIdea: "不發生反應時離子全保留；中和、沉澱或產氣會減少溶液中的離子。Na₂SO₄與NaOH混合不反應，離子總數最多。",
    steps: [
      "設每杯溶質都是n莫耳。Na₂SO₄完全解離產生3n份離子，NaOH產生2n份離子，兩者混合不反應，共5n份。",
      "NaOH與CH₃COOH中和後主要留下Na⁺、CH₃COO⁻；AgNO₃與NaCl生成AgCl沉澱，留Na⁺、NO₃⁻，都只有約2n份離子。",
      "BaCl₂與CuSO₄生成BaSO₄沉澱後，溶液主要留Cu²⁺與2Cl⁻，約3n份離子。",
      "Na₂CO₃與等莫耳HCl會消耗H⁺並形成HCO₃⁻等粒子，離子數仍少於不反應的E組，所以答案為 E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "強鹼NaOH與弱酸CH₃COOH中和，OH⁻被消耗，主要留下Na⁺與CH₃COO⁻，離子數減少。" },
      B: { verdict: "incorrect", reason: "Ba²⁺與SO₄²⁻形成BaSO₄沉澱而離開溶液，溶液主要剩Cu²⁺與Cl⁻，離子數少於E。" },
      C: { verdict: "incorrect", reason: "Ag⁺與Cl⁻形成AgCl沉澱，溶液只主要留下Na⁺與NO₃⁻，離子數大幅減少。" },
      D: { verdict: "incorrect", reason: "CO₃²⁻會與H⁺反應，等莫耳時主要轉成HCO₃⁻並消耗H⁺，因此不是單純保留所有原始離子。" },
      E: { verdict: "correct", reason: "Na₂SO₄與NaOH都是強電解質且混合後不沉澱、不產氣也不中和，3n＋2n＝5n份離子全部保留。" }
    },
    takeaway: "比較離子數先看是否發生中和、沉澱或產氣；完全不反應的強電解質組通常保留最多離子。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-105-54": {
    encouragement: "有機物名稱很多，但只要抓住官能基：羥基是醇、羧基是酸、羰基在碳鏈中間是酮。",
    keyIdea: "甲醇是最簡單的醇，丙酮是最簡單的酮；羧酸與醇可酯化生成酯。",
    steps: [
      "烴的氫被羧基—COOH取代，形成的是羧酸，不是醇。",
      "醇至少要有一個碳與一個羥基，所以CH₃OH甲醇是最簡單的醇。",
      "醚的氧兩側都要接烴基，最簡單的是二甲醚，不是乙醚；酮的羰基兩側都接碳，最少三個碳，因此丙酮最簡單。",
      "丙酸與乙醇可進行酯化生成丙酸乙酯與水，所以答案為 B、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "羧基—COOH是羧酸的官能基；烴的氫被羧基取代後形成羧酸，不是醇。" },
      B: { verdict: "correct", reason: "甲醇CH₃OH只有一個碳，是結構最簡單的醇類化合物。" },
      C: { verdict: "incorrect", reason: "乙醚通常指二乙醚C₂H₅OC₂H₅；更簡單的醚是二甲醚CH₃OCH₃。" },
      D: { verdict: "correct", reason: "酮的羰基碳兩側都要接碳原子，至少需三個碳，因此丙酮是最簡單的酮。" },
      E: { verdict: "correct", reason: "丙酸的羧基與乙醇的羥基可進行酯化，生成丙酸乙酯與水。" }
    },
    takeaway: "判斷有機物先認官能基，再看形成該官能基至少需要幾個碳。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-9": {
    encouragement: "先把硝酸銨分解式配平，再把40.0克換成莫耳，就能直接用係數比算總氣體。",
    keyIdea: "2NH₄NO₃→2N₂＋O₂＋4H₂O；2莫耳硝酸銨共生成7莫耳氣體。",
    steps: [
      "配平反應式為2NH₄NO₃→2N₂＋O₂＋4H₂O，題目條件下水為水蒸氣，也要算氣體。",
      "NH₄NO₃莫耳質量為80 g/mol，所以40.0克是0.500 mol。",
      "依係數比，每1 mol NH₄NO₃生成7÷2＝3.5 mol氣體。",
      "0.500×3.5＝1.75 mol，答案為 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "0.500 mol NH₄NO₃依2：7的比例生成0.500×3.5＝1.75 mol總氣體。" },
      B: { verdict: "incorrect", reason: "3.50 mol是1 mol NH₄NO₃可生成的氣體量，但題目只有0.500 mol硝酸銨。" },
      C: { verdict: "incorrect", reason: "5.25 mol相當於錯把產物係數或硝酸銨莫耳數放大，與2：7比例不符。" },
      D: { verdict: "incorrect", reason: "7.00是配平式右側氣體係數總和，對應的是2 mol NH₄NO₃，不是40.0克樣品。" },
      E: { verdict: "incorrect", reason: "8.75 mol遠高於0.500 mol硝酸銨依係數比能產生的氣體量。" }
    },
    takeaway: "題目明說生成水蒸氣時，H₂O也要列入氣體總莫耳數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-10": {
    encouragement: "「任何一個陽離子」表示要連最特殊的情況都成立。用H⁺這個最簡單的陽離子檢查，就能排除很多敘述。",
    keyIdea: "所有陽離子都源自原子核，因此一定有質子與原子核；H⁺可以沒有中子，也可以沒有電子。",
    steps: [
      "陽離子帶正電，必須有帶正電的質子，也必定具有包含質子的原子核，所以甲、丁一定成立。",
      "最常見氫同位素¹H的原子核只有一個質子、沒有中子；形成H⁺後仍沒有中子，因此乙不是必然。",
      "¹H失去唯一的電子後成為H⁺，可沒有電子，因此丙也不是必然。",
      "只有甲、丁正確，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲正確，但乙不是任何陽離子都成立；由¹H形成的H⁺沒有中子。" },
      B: { verdict: "incorrect", reason: "乙、丙都不是必然；H⁺可以同時沒有中子與電子。" },
      C: { verdict: "incorrect", reason: "丁正確，但丙不是必然；氫原子失去唯一電子後形成的H⁺沒有電子。" },
      D: { verdict: "correct", reason: "陽離子一定含有質子，也一定具有原子核；甲、丁對所有陽離子都成立。" },
      E: { verdict: "incorrect", reason: "丁正確，但乙不是必然，因為由¹H形成的H⁺沒有中子。" }
    },
    takeaway: "遇到「任何、必定」要用極端例子檢查；H⁺是判斷原子結構敘述的好工具。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-11": {
    encouragement: "結晶水題就是比較「失去的水」與「留下的無水鹽」各有幾莫耳。",
    keyIdea: "加熱失去0.24克水；水與MgC₂O₄的莫耳比約為2：1，因此n＝2。",
    steps: [
      "失去的結晶水質量為1.00－0.76＝0.24克，水的莫耳數為0.24÷18＝0.0133 mol。",
      "留下的MgC₂O₄莫耳數為0.76÷112＝0.00679 mol。",
      "水與MgC₂O₄的莫耳比為0.0133÷0.00679≈1.96，接近整數2。",
      "所以化學式為MgC₂O₄·2H₂O，n＝2，答案為 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若n＝1，水與無水鹽莫耳數應相等，但實際水的莫耳數約是無水鹽的2倍。" },
      B: { verdict: "correct", reason: "0.0133 mol水÷0.00679 mol MgC₂O₄≈1.96，依實驗誤差取最接近整數為2。" },
      C: { verdict: "incorrect", reason: "n＝3需要水的莫耳數約為無水鹽3倍，與實際約2倍不符。" },
      D: { verdict: "incorrect", reason: "n＝4會要求結晶水比例更高，樣品失重應大於題目的0.24克。" },
      E: { verdict: "incorrect", reason: "n＝5與計算出的水鹽莫耳比約1.96差距很大。" }
    },
    takeaway: "結晶水數目是莫耳比，不是直接拿失去的克數除以留下的克數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-12": {
    encouragement: "兩條反應的起點相同、終點只差液態水與水蒸氣；把兩個生成熱相減，就是汽化一莫耳水需要的能量。",
    keyIdea: "水的莫耳汽化熱為(－241.8)－(－285.8)＝＋44.0 kJ/mol；1.0克水約需2.4 kJ。",
    steps: [
      "生成液態水的ΔH為－285.8 kJ/mol，生成氣態水的ΔH為－241.8 kJ/mol。",
      "由液態水變成氣態水的焓變為－241.8－(－285.8)＝＋44.0 kJ/mol。",
      "1.0克水為1.0÷18＝0.0556 mol。",
      "所需能量為44.0×0.0556≈2.44 kJ，最接近2.4 kJ，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "241.8 kJ是生成1 mol氣態水的反應熱絕對值，不是1.0克液態水的汽化能。" },
      B: { verdict: "incorrect", reason: "44.0 kJ是1 mol、也就是18克水的汽化能；題目只有1.0克。" },
      C: { verdict: "incorrect", reason: "24.4 kJ把1.0克水的莫耳數換算錯了，正確應再除以18，得到約2.4 kJ。" },
      D: { verdict: "correct", reason: "44.0 kJ/mol×(1/18) mol≈2.44 kJ，最接近2.4 kJ。" },
      E: { verdict: "incorrect", reason: "0.3 kJ低估汽化所需能量；由兩式相減可得每莫耳需44.0 kJ。" }
    },
    takeaway: "熱化學式相減後得到的是每莫耳能量，別忘了再依題目實際克數換算。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-13": {
    encouragement: "反應式已經配好，只要把銅換成莫耳，沿著1：4找到硝酸莫耳數，再用濃度換體積。",
    keyIdea: "1 mol Cu需要4 mol HNO₃；6.35克Cu為0.100 mol，因此需要0.400 mol HNO₃。",
    steps: [
      "銅的莫耳數為6.35÷63.5＝0.100 mol。",
      "由Cu＋4HNO₃→Cu(NO₃)₂＋2NO₂＋2H₂O，0.100 mol Cu需要0.400 mol HNO₃。",
      "2.00 M表示每公升有2.00 mol HNO₃，所以體積V＝0.400÷2.00＝0.200 L。",
      "0.200 L＝200 mL，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "50 mL的2.00 M HNO₃只有0.100 mol，只夠反應0.025 mol Cu。" },
      B: { verdict: "incorrect", reason: "100 mL溶液含0.200 mol HNO₃，只能溶解0.050 mol Cu，仍不足。" },
      C: { verdict: "incorrect", reason: "150 mL溶液含0.300 mol HNO₃，少於反應所需的0.400 mol。" },
      D: { verdict: "correct", reason: "0.100 mol Cu需要0.400 mol HNO₃；以2.00 M換算為0.200 L，即200 mL。" },
      E: { verdict: "incorrect", reason: "300 mL含0.600 mol HNO₃，超過完全溶解6.35克銅的最低需要量。" }
    },
    takeaway: "莫耳濃度M＝mol/L；先用反應係數求需要的莫耳數，再除以濃度。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-48": {
    encouragement: "題目同時給了分子量與產氫量，兩條線索要一起符合；只符合其中一條還不能選。",
    keyIdea: "分子量為74，74克就是1 mol；產生0.5 mol H₂表示是一元醇，只有1-丁醇同時符合。",
    steps: [
      "氫氣H₂的分子量為2，未知物分子量為2×37＝74，因此74克未知物正好是1.0 mol。",
      "1.0克H₂為1.0÷2＝0.50 mol；題目說1 mol一元醇會生成0.5 mol H₂，所以未知物應是一元醇。",
      "A酯、B酮、C醚不會和鈉產生H₂；D是二元醇，而且分子量為76，不合。",
      "E的1-丁醇是分子量74的一元醇，可產生0.5 mol H₂，因此答案為 E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CH₃COOCH₃雖然分子量為74，但它是酯類，沒有醇羥基，不會依題目方式與鈉產生H₂。" },
      B: { verdict: "incorrect", reason: "CH₃CH₂COCH₃是酮類，不會與鈉釋出題目所述的氫氣，而且其分子量為72。" },
      C: { verdict: "incorrect", reason: "CH₃CH₂OCH₂CH₃是醚類，分子量雖為74，卻沒有可與鈉反應的醇羥基。" },
      D: { verdict: "incorrect", reason: "HOCH₂CH₂CH₂OH是二元醇，1 mol應產生1 mol H₂，且分子量為76，兩項都不合。" },
      E: { verdict: "correct", reason: "CH₃CH₂CH₂CH₂OH是一元醇，分子量為74；1 mol與鈉反應可產生0.5 mol、即1.0克H₂。" }
    },
    takeaway: "鑑定有機物時要同時核對分子量與官能基反應，不能只看其中一項。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-50": {
    encouragement: "判斷能否和水均勻混合，可以看分子是否有足夠強的極性，以及能否和水形成有效作用力。",
    keyIdea: "乙醇與丙酮可和水互溶；甲苯、乙酸乙酯及己烷在等體積水中會分層。",
    steps: [
      "乙醇有羥基，可和水形成氫鍵，因此可與水均勻混合。",
      "丙酮的羰基具有明顯極性，可接受水的氫鍵，也能和水互溶。",
      "甲苯與己烷以非極性烴結構為主，難溶於水。",
      "乙酸乙酯雖有極性官能基，但疏水部分仍大，只有有限水溶性；各1毫升混合會分層，所以選 B、C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲苯以非極性的苯環與甲基為主，和極性很高的水無法均勻互溶。" },
      B: { verdict: "correct", reason: "乙醇的羥基可與水形成氫鍵，乙醇和水能以任意比例均勻混合。" },
      C: { verdict: "correct", reason: "丙酮的羰基具極性，能與水分子產生強作用，因此可與水均勻混合。" },
      D: { verdict: "incorrect", reason: "乙酸乙酯在水中只有有限溶解度，1毫升乙酸乙酯與1毫升水混合時不會完全成為均一相。" },
      E: { verdict: "incorrect", reason: "己烷是非極性烴，與極性水分子作用很弱，搖晃後仍會分層。" }
    },
    takeaway: "有含氧原子不代表一定和水互溶，還要比較極性官能基與疏水碳鏈的影響。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-51": {
    encouragement: "三者元素百分比相同，代表最簡比例相同；但分子量不同，提醒我們「實驗式相同」不等於「分子式相同」。",
    keyIdea: "三者實驗式皆為CH₂O；葡萄糖與半乳糖皆為C₆H₁₂O₆且結構不同，核糖則為C₅H₁₀O₅。",
    steps: [
      "以100克樣品計，C為40.0÷12≈3.33 mol、H為6.7÷1＝6.7 mol、O為53.3÷16≈3.33 mol，最簡比約1：2：1，所以實驗式是CH₂O。",
      "CH₂O式量為30；分子量180者是(CH₂O)₆＝C₆H₁₂O₆，因此葡萄糖與半乳糖分子式相同。",
      "葡萄糖與半乳糖結構不同，所以互為異構物；核糖分子量150，是(CH₂O)₅＝C₅H₁₀O₅。",
      "故正確選項是 A、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "葡萄糖與半乳糖分子式同為C₆H₁₂O₆，但原子排列不同，因此互為異構物。" },
      B: { verdict: "incorrect", reason: "同素異形體是同一元素形成的不同單質；葡萄糖與半乳糖都是含三種元素的化合物。" },
      C: { verdict: "incorrect", reason: "異構物必須有相同分子式；核糖是C₅H₁₀O₅，與C₆H₁₂O₆的葡萄糖、半乳糖不同。" },
      D: { verdict: "correct", reason: "三者元素百分比相同，換算出的最簡整數比都是C：H：O＝1：2：1，實驗式皆為CH₂O。" },
      E: { verdict: "incorrect", reason: "葡萄糖與半乳糖為C₆H₁₂O₆，但核糖分子量150，分子式是C₅H₁₀O₅。" }
    },
    takeaway: "實驗式只表示最簡比例；要再用分子量，才能決定真正的分子式。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-52": {
    encouragement: "要讓pH小於7，就是找溶於水後能增加H⁺的物質；逐項判斷形成酸、鹼或近中性溶液即可。",
    keyIdea: "NO₂溶於水會形成酸性物質；CaO、NaHCO₃與Na₂CO₃使水偏鹼，CaCl₂近中性。",
    steps: [
      "NO₂與水反應會形成硝酸、亞硝酸等酸性物質，使H⁺增加，pH低於7。",
      "CaO與水形成Ca(OH)₂，呈鹼性；Na₂CO₃的CO₃²⁻會水解產生OH⁻，也呈鹼性。",
      "NaHCO₃水溶液通常呈弱鹼性；CaCl₂由強酸強鹼形成，基礎判斷為近中性。",
      "所以答案為 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "NO₂溶於水會生成酸性物質，增加溶液中的H⁺，使pH小於7。" },
      B: { verdict: "incorrect", reason: "CaO是鹼性氧化物，與水形成Ca(OH)₂，使溶液pH大於7。" },
      C: { verdict: "incorrect", reason: "NaHCO₃水溶液通常呈弱鹼性，不會使pH低於7。" },
      D: { verdict: "incorrect", reason: "CaCl₂在基礎酸鹼判斷中視為強酸與強鹼形成的鹽，水溶液近中性。" },
      E: { verdict: "incorrect", reason: "CO₃²⁻會與水作用產生OH⁻，Na₂CO₃水溶液呈鹼性。" }
    },
    takeaway: "非金屬氧化物常形成酸，金屬氧化物常形成鹼；鹽類則要看離子是否水解。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-53": {
    encouragement: "鑽石與石墨都是碳，但碳原子的連接方式不同。把「鑽石四面體、石墨平面三角」記成一組就很好判斷。",
    keyIdea: "鑽石是每個碳連四個碳的三維四面體網狀；石墨是每個碳連三個碳的二維層狀，並有可移動電子。",
    steps: [
      "石墨每個碳連接三個碳，留下可在層內移動的電子，所以能導電；鑽石的電子都用於局部共價鍵，不易導電。",
      "兩者都要破壞大量強共價鍵才能熔化，因此都是高熔點固體。",
      "鑽石的四面體連接向三維延伸，石墨的平面三角連接形成二維片層。",
      "所以 A、B、C 正確。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "石墨層內有可移動的離域電子，具有導電性；鑽石的價電子都固定在共價鍵中，通常不導電。" },
      B: { verdict: "correct", reason: "鑽石與石墨都具有廣大的共價鍵網狀結構，熔化需破壞強共價鍵，因此熔點都高。" },
      C: { verdict: "correct", reason: "鑽石的四面體鍵結向三個方向延伸成三維網狀；石墨則由平面片層構成二維層狀結構。" },
      D: { verdict: "incorrect", reason: "選項把兩者顛倒了；鑽石每個碳連四個碳，石墨每個碳連三個碳。" },
      E: { verdict: "incorrect", reason: "選項也把幾何形狀顛倒；鑽石碳為四面體排列，石墨層內碳為平面三角排列。" }
    },
    takeaway: "鑽石是「四個、四面體、三維」；石墨是「三個、平面三角、二維且導電」。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-54": {
    encouragement: "題目要找「不涉及」氧化還原的現象。逐項看有沒有元素得到或失去電子，就能找出單純沉澱反應。",
    keyIdea: "AgNO₃與NaCl只進行離子交換生成AgCl沉澱，各元素氧化數不變。",
    steps: [
      "煉鐵時碳或一氧化碳使鐵氧化物還原；鋁與鹽酸反應時鋁被氧化、H⁺被還原。",
      "蘋果切面褐變涉及物質被空氣中的氧氧化；銅線加熱也會被氧化成氧化銅。",
      "AgNO₃＋NaCl→AgCl↓＋NaNO₃只讓Ag⁺與Cl⁻形成沉澱，反應前後氧化數不變。",
      "因此不涉及氧化還原的是 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "煤焦及其生成的CO可奪走鐵氧化物中的氧，使鐵離子被還原；同時碳被氧化，屬氧化還原。" },
      B: { verdict: "incorrect", reason: "鋁由0價變成Al³⁺而被氧化，H⁺得到電子形成H₂而被還原。" },
      C: { verdict: "incorrect", reason: "蘋果切面接觸氧氣後發生酵素促進的氧化反應，形成褐色物質。" },
      D: { verdict: "correct", reason: "Ag⁺與Cl⁻形成AgCl沉澱時仍分別為＋1與－1價，沒有電子轉移。" },
      E: { verdict: "incorrect", reason: "銅在空氣中受熱會和氧反應形成氧化銅，銅被氧化、氧被還原。" }
    },
    takeaway: "沉澱生成常只是離子重新配對；是否為氧化還原仍要看氧化數有沒有改變。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
