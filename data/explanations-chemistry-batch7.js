window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-83-24": {
    encouragement: "清潔劑要一端抓水、一端抓油，把這兩端接在同一個分子上，最自然就是一條長鏈。",
    keyIdea: "清潔劑常有親水頭與長碳鏈親油尾，形成長鏈形分子。",
    steps: [
      "親油部分通常是較長的碳氫鏈，能和油污產生作用。",
      "親水部分位在鏈的一端，能留在水中。",
      "因此整個分子常呈一端親水、一端親油的長鏈形，答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "單一清潔劑分子不是球形；許多分子聚集後才可能形成球狀微胞。" },
      B: { verdict: "incorrect", reason: "環形無法表現常見清潔劑的長碳鏈親油尾結構。" },
      C: { verdict: "correct", reason: "長碳鏈可作親油尾，鏈端的極性基團作親水頭，能把油污帶入水中。" },
      D: { verdict: "incorrect", reason: "分子由原子鍵結形成，並不會排成題目所指的立方體形清潔劑分子。" }
    },
    takeaway: "清潔劑分子可想成「親水頭＋親油長尾」，聚在油污外面後讓油污分散於水。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-25": {
    encouragement: "四句話分別檢查氧化數、氮循環、腐敗氣味與岩石成分，就能找到唯一正確者。",
    keyIdea: "石灰岩主要含CaCO₃；CO中的碳不是最高氧化數，氮氣需固氮，腐臭也不是CO造成。",
    steps: [
      "CO中氧為－2，所以碳為＋2；CO₂中的碳可達＋4，故A錯。",
      "大氣N₂要先經固氮轉成可利用含氮物，不是單靠雨水直接帶入生物圈。",
      "生物腐臭常和含硫、含氮物質有關；石灰岩則含大量CaCO₃。",
      "因此答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CO中碳為＋2價，CO₂與碳酸鹽中的碳可為＋4價，才是更高氧化數。" },
      B: { verdict: "incorrect", reason: "大氣N₂很穩定，通常需經固氮作用轉成含氮化合物，生物才能利用。" },
      C: { verdict: "incorrect", reason: "CO無色無臭；腐敗臭味常來自H₂S、NH₃或其他含硫含氮物質。" },
      D: { verdict: "correct", reason: "石灰岩的主要成分是碳酸鈣CaCO₃，因此地殼石灰岩中含大量碳酸鈣。" }
    },
    takeaway: "一氧化碳沒有氣味；石灰岩的代表成分則是碳酸鈣。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-26": {
    encouragement: "把每種氣體想成溶進雨水後會變什麼；不會形成酸的就是CO。",
    keyIdea: "CO不會直接和水形成酸；CO₂、NO經氧化後及SO₂都能造成酸性物質。",
    steps: [
      "CO₂溶於水可形成碳酸，SO₂溶於水可形成亞硫酸等酸性物質。",
      "NO可在空氣中被氧化成NO₂，再與水形成酸。",
      "CO在一般大氣與水蒸氣條件下不會形成相應的酸性水溶液。",
      "所以答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "CO不會像CO₂或SO₂那樣直接溶於水形成酸性物質。" },
      B: { verdict: "incorrect", reason: "CO₂與水建立平衡可形成H₂CO₃，使水溶液呈弱酸性。" },
      C: { verdict: "incorrect", reason: "NO可被空氣中的O₂氧化成NO₂，後續與水反應形成含氮酸性物質。" },
      D: { verdict: "incorrect", reason: "SO₂溶於水可形成H₂SO₃等酸性物質，也是酸雨前驅物。" }
    },
    takeaway: "酸雨常見前驅物是硫氧化物與氮氧化物；CO₂也能使水呈弱酸性。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-28": {
    encouragement: "逐項問「碰水會不會劇烈放熱、噴濺或產生腐蝕性物質」，最溫和的就是明礬。",
    keyIdea: "鉀、濃硫酸與P₂O₅遇水都可能劇烈反應；鋁明礬可較平穩溶於水。",
    steps: [
      "鉀遇水會快速產生H₂並放熱；濃硫酸加水也會大量放熱，可能噴濺。",
      "P₂O₅吸水性強，遇水反應形成磷酸並放熱。",
      "鋁明礬是常見可溶鹽，在室溫下與水接觸相對不易發生危險。",
      "因此答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鉀會和水劇烈反應，放出H₂與大量熱，甚至可能起火。" },
      B: { verdict: "incorrect", reason: "濃硫酸稀釋強烈放熱，若操作不當會沸騰噴濺造成灼傷。" },
      C: { verdict: "correct", reason: "鋁明礬可在水中逐漸溶解，室溫正常接觸相較其他三者安全。" },
      D: { verdict: "incorrect", reason: "P₂O₅會強烈吸水並生成磷酸，反應放熱且產物具腐蝕性。" }
    },
    takeaway: "判斷化學安全不能只看能否溶於水，還要看接觸水時的反應速度與放熱量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-29": {
    encouragement: "元素不能用一般化學方法再分成更簡單物質；甲能分解成乙、丙，已經給出最直接線索。",
    keyIdea: "能受熱分解成兩種較簡單純物質的甲必為化合物，不可能是元素。",
    steps: [
      "元素只含一種元素成分，不能靠一般加熱化學反應分解成其他純物質。",
      "甲受熱得到純物質乙與氣體丙，表示甲至少含可重新組合的不同成分。",
      "所以甲不可能是元素，A正確。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲能以化學反應分解成兩種純物質，表示甲是化合物，不可能是元素。" },
      B: { verdict: "incorrect", reason: "具有物質特性的最小單元不一定是原子，也可能是分子或離子組成單位。" },
      C: { verdict: "incorrect", reason: "同兩元素可形成比例不同的化合物，例如CO與CO₂，性質並不相同。" },
      D: { verdict: "incorrect", reason: "乾淨空氣仍含N₂、O₂、Ar等多種氣體，是均勻混合物，不是純化合物。" }
    },
    takeaway: "能再分解的是化合物；空氣雖均勻、看不出分層，仍是混合物。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-30": {
    encouragement: "奶粉乾燥既要除水，也要避免太高溫破壞食品；降低壓力就能讓水較低溫沸騰。",
    keyIdea: "真空會降低水的沸點，使水分在較低溫度快速蒸發，較適合食品乾燥。",
    steps: [
      "液面上壓力降低時，水不必加熱到100℃就能沸騰。",
      "真空蒸發能加快除水，又可減少長時間高溫對奶粉成分的影響。",
      "因此最合適的是D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "瞬間高溫雖快，但題目比較的原理中，仍可能使食品局部受高溫影響。" },
      B: { verdict: "incorrect", reason: "加壓會提高水的沸點，反而需要更高溫才容易沸騰蒸發。" },
      C: { verdict: "incorrect", reason: "加熱通風可除水，但通常需要較多熱能，對熱敏感食品不如真空蒸發合適。" },
      D: { verdict: "correct", reason: "真空降低外壓與沸點，可在較低溫度加速水分蒸發並保護食品品質。" }
    },
    takeaway: "外壓越低，沸點越低；真空乾燥能用較低溫度帶走水分。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-31": {
    encouragement: "氧化物比金屬重了多少，就是加入的氧。再換算成每8克氧能結合多少金屬即可。",
    keyIdea: "2.0克金屬結合0.8克氧；克當量是與8克氧結合的金屬質量，所以為20克。",
    steps: [
      "加入的氧質量為2.8－2.0＝0.8克。",
      "0.8克氧和2.0克金屬反應。",
      "換成8克氧時，金屬質量為2.0×(8÷0.8)＝20克。",
      "答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10克相當於把氧的基準換算少一半；克當量要以8克氧為基準。" },
      B: { verdict: "correct", reason: "0.8克氧結合2.0克金屬，8克氧結合20克金屬，所以克當量為20。" },
      C: { verdict: "incorrect", reason: "40克是正確換算值的2倍，沒有符合2.0：0.8的實驗質量比。" },
      D: { verdict: "incorrect", reason: "60克會要求金屬與氧質量比為7.5：1，與題目的2.5：1不符。" },
      E: { verdict: "incorrect", reason: "80克遠高於按8克氧換算所得的20克。" }
    },
    takeaway: "先用總質量差找氧，再按定義換成與8克氧反應的金屬質量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-32": {
    encouragement: "不必被反應名稱影響，直接看元素氧化數有沒有改變；完全不變的就是答案。",
    keyIdea: "CaCO₃與HCl反應時各元素氧化數不變，只是酸與碳酸鹽反應。",
    steps: [
      "水煤氣反應中C由0升到＋2，H由＋1降到0；鋅與酸反應也有Zn、H氧化數改變。",
      "哈柏反應中N與H都由0價變成化合物中的價態。",
      "CaCO₃＋2HCl→CaCl₂＋H₂O＋CO₂中，Ca、C、H、Cl、O氧化數都不變。",
      "因此答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "C由焦煤中的0價變成CO中的＋2價，水中H由＋1價變成H₂的0價，屬氧化還原。" },
      B: { verdict: "incorrect", reason: "Zn由0價變＋2價，H⁺由＋1價變H₂的0價，發生電子轉移。" },
      C: { verdict: "correct", reason: "碳在CaCO₃與CO₂中都為＋4價，其他元素氧化數也不變，不是氧化還原。" },
      D: { verdict: "incorrect", reason: "N₂、H₂中的元素皆為0價，生成NH₃後N為－3、H為＋1，氧化數改變。" }
    },
    takeaway: "酸產氣反應不一定是氧化還原；碳酸鹽放CO₂時，碳仍可能維持＋4價。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-33": {
    encouragement: "倍比定律要比較「同兩種元素形成的不同化合物」。先檢查是不是化合物，就能排除氧和臭氧。",
    keyIdea: "O₂與O₃都是氧元素的單質，不是兩元素化合物，不能用倍比定律說明。",
    steps: [
      "倍比定律適用於同樣兩種元素形成的不同化合物。",
      "CO／CO₂、H₂O／H₂O₂、N₂O／NO₂都由同兩元素以不同整數比組成。",
      "O₂與O₃只含氧一種元素，是同素異形體而非化合物。",
      "答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "O₂與O₃都是氧的單質，只含一種元素，不能用兩元素化合物的倍比定律說明。" },
      B: { verdict: "incorrect", reason: "CO與CO₂都只含C、O，固定碳量時氧量為簡單整數比，可用倍比定律。" },
      C: { verdict: "incorrect", reason: "H₂O與H₂O₂都只含H、O，固定氫量時氧量比為1：2。" },
      D: { verdict: "incorrect", reason: "N₂O與NO₂都由N、O形成，換成固定氮量後氧量呈簡單整數比。" }
    },
    takeaway: "倍比定律的第一關：兩個物質都必須是由相同兩元素形成的化合物。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-34": {
    encouragement: "燃燒題只要看分子式：4個碳變4個CO₂，6個氫變3個H₂O。",
    keyIdea: "1 mol C₄H₆完全燃燒生成4 mol CO₂與3 mol H₂O，共7 mol。",
    steps: [
      "每個C最後進入CO₂，所以4個C生成4 mol CO₂。",
      "每個H₂O含2個H，所以6個H生成6÷2＝3 mol H₂O。",
      "產物總莫耳數為4＋3＝7 mol，答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4 mol只計入CO₂，漏掉同時生成的3 mol水蒸氣。" },
      B: { verdict: "incorrect", reason: "5 mol沒有依6個氫原子正確換出3 mol H₂O。" },
      C: { verdict: "incorrect", reason: "6 mol像把氫原子數直接當水莫耳數，未除以每個水含2個H。" },
      D: { verdict: "correct", reason: "C₄H₆燃燒生成4 mol CO₂與3 mol H₂O，合計7 mol。" },
      E: { verdict: "incorrect", reason: "10 mol把產物量高估；原子守恆只支持4 mol CO₂與3 mol H₂O。" }
    },
    takeaway: "烴CₓHᵧ完全燃燒會生成x mol CO₂與y/2 mol H₂O。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-55": {
    encouragement: "混合鹽度一定落在0.3%和3.3%之間。設海水占x，就能用加權平均求比例。",
    keyIdea: "3.3x＋0.3(1－x)＝1.5，解得海水40%、淡水60%，比例2：3。",
    steps: [
      "設混合水中海水比例為x，淡水比例為1－x。",
      "依鹽度加權：3.3x＋0.3(1－x)＝1.5。",
      "解得3.0x＝1.2，所以x＝0.4，淡水為0.6。",
      "海水：淡水＝0.4：0.6＝2：3，答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "海水40%、淡水60%時，鹽度為3.3%×0.4＋0.3%×0.6＝1.5%。" },
      B: { verdict: "incorrect", reason: "海水占60%會使鹽度為2.1%，高於題目的1.5%。" },
      C: { verdict: "incorrect", reason: "3：4表示海水約42.9%，加權鹽度約1.59%，不是1.5%。" },
      D: { verdict: "incorrect", reason: "4：3表示海水超過一半，混合鹽度會明顯高於1.5%。" }
    },
    takeaway: "混合濃度＝各成分濃度×各自比例後相加。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-58": {
    encouragement: "同溫同壓下，1：3：2的氣體體積比就是分子數比。逐項數反應前原子能不能平均分給2個產物分子。",
    keyIdea: "A₃＋3AB₂可提供A₆B₆，平均形成2個A₃B₃分子；其他選項會留下半個原子。",
    steps: [
      "假設甲、乙、丙分子數比為1：3：2。",
      "若乙為AB₂，反應物共有A原子3＋3＝6個、B原子3×2＝6個。",
      "分成2個丙分子後，每個可含A₃B₃，原子數皆為整數。",
      "其他乙分子式分配給2個產物時會出現半個A或B，因此答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A₃＋3AB共有A₆B₃，分成2個產物時每個會有1.5個B，不可能。" },
      B: { verdict: "correct", reason: "A₃＋3AB₂共有A₆B₆，可形成2個A₃B₃，完全符合原子守恆。" },
      C: { verdict: "incorrect", reason: "A₃＋3A₂B共有A₉B₃，分成2個分子會出現4.5個A與1.5個B。" },
      D: { verdict: "incorrect", reason: "A₃＋3A₂B₂共有A₉B₆，分成2個產物會有4.5個A，無法成為完整分子。" }
    },
    takeaway: "氣體反應體積比可當分子數比，再用原子守恆檢查每個產物的原子數必為整數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-35": {
    encouragement: "電解水需要外加電源，不是自己發電；電能被儲存在生成的氫氣與氧氣中。",
    keyIdea: "電解把電能轉成化學能，氫氣在陰極生成。",
    steps: [
      "水不會自行大量分解，必須由外界提供電能。",
      "電能推動反應生成H₂與O₂，能量轉存於化學產物。",
      "還原產生H₂的位置是陰極，不是正極陽極。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電解水需要吸收外界電能才能進行，不是自行釋熱驅動的放熱反應。" },
      B: { verdict: "incorrect", reason: "H⁺或水在陰極得到電子形成H₂；陽極則產生O₂。" },
      C: { verdict: "correct", reason: "外加電能使水分解，能量儲存在H₂、O₂產物中，是電能轉化為化學能。" },
      D: { verdict: "incorrect", reason: "電解水會消耗電能，不會產生可供用戶使用的淨電能。" }
    },
    takeaway: "電解槽用電促進反應；電池則由自發反應供電，方向不要混淆。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-36": {
    encouragement: "金屬活動性順序越靠左越容易失去電子；但鈉放進水溶液時，會先和水劇烈反應。",
    keyIdea: "NaCl可增加水溶液導電性、加速鐵的電化學腐蝕，造成海砂屋鋼筋易鏽蝕。",
    steps: [
      "Al、Mg都比Zn活潑，可置換Zn²⁺，不必說兩者都需外加能量。",
      "Na在MgSO₄水溶液會先和水反應，不能簡單視為析出Mg。",
      "鹽中的離子提高水膜導電性，能加快鋼筋腐蝕。",
      "因此D正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Al與Mg都排在Zn左側，具有置換Zn²⁺的趨勢，不能說兩反應都必須外加能量。" },
      B: { verdict: "incorrect", reason: "Mg比Fe活潑，可還原Fe離子；「兩者均須外界供能」並不成立。" },
      C: { verdict: "incorrect", reason: "Na遇水先形成NaOH與H₂，不會在水溶液中單純把Mg²⁺還原成Mg析出。" },
      D: { verdict: "correct", reason: "NaCl提高水分導電性並促進電化學腐蝕，使海砂屋鋼筋更易生鏽。" }
    },
    takeaway: "活動性表用在水溶液時還要先問：非常活潑的金屬會不會先和水反應。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-37": {
    encouragement: "重新設定一種溫標，不會改變華氏或絕對溫標的定義；水的冰點仍是273 K。",
    keyIdea: "新溫標只改新刻度，水在1 atm的冰點仍為0℃＝32℉＝273 K。",
    steps: [
      "物理溫度沒有因新刻度而改變，只有標示數字不同。",
      "水的冰點在絕對溫標仍約273 K，故B正確。",
      "高山沸點低於100℃，在反向的新溫標會對應正值，不是負值。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "新設溫標不會改變華氏溫標，水在1 atm的冰點仍是32℉。" },
      B: { verdict: "correct", reason: "水的冰點物理狀態不變，在絕對溫標仍約為273 K。" },
      C: { verdict: "incorrect", reason: "水在1 atm的沸點約373 K，不會因另設刻度變成173 K。" },
      D: { verdict: "incorrect", reason: "新溫標由沸點0到冰點100反向增加；高山沸點較低，刻度應大於0而非負值。" }
    },
    takeaway: "不同溫標只是同一溫度的不同標號，不會改變物質真正的冰點與沸點。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-38": {
    encouragement: "把27℃換成300 K、300 mL換成0.300 L，先用PV＝nRT求莫耳數，再算莫耳質量。",
    keyIdea: "n≈0.0122 mol，莫耳質量0.537÷0.0122≈44 g/mol，對應CO₂。",
    steps: [
      "P＝1 atm、V＝0.300 L、T＝300 K。",
      "n＝PV/RT＝1×0.300÷(0.082×300)≈0.0122 mol。",
      "莫耳質量M＝0.537÷0.0122≈44 g/mol。",
      "CO₂為12＋2×16＝44，答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NO莫耳質量30 g/mol，小於計算得到的約44 g/mol。" },
      B: { verdict: "incorrect", reason: "NO₂莫耳質量46 g/mol，接近但不如CO₂的44符合計算值。" },
      C: { verdict: "incorrect", reason: "CO莫耳質量28 g/mol，明顯低於實驗所得約44。" },
      D: { verdict: "correct", reason: "CO₂莫耳質量為44 g/mol，與氣體資料算出的結果一致。" }
    },
    takeaway: "氣體分子量題先求n，再用樣品質量÷n；溫度一定要用K。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-39": {
    encouragement: "平衡不是停止，而是正、逆反應一樣快；加壓則會把平衡推向氣體分子數較少的一側。",
    keyIdea: "N₂＋3H₂⇌2NH₃左側4份氣體、右側2份，加壓有利生成NH₃。",
    steps: [
      "平衡時正逆反應速率相等但都不為零，組成也不必等於係數比。",
      "反應物側有4 mol氣體，生成物側有2 mol氣體。",
      "加壓時平衡傾向氣體莫耳數較少的右側，因此促進NH₃生成。",
      "答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "化學平衡是動態平衡，NH₃生成與分解速率相等但都持續進行，不趨近零。" },
      B: { verdict: "incorrect", reason: "3：1：2是反應係數比，不是達平衡時三種氣體必有的體積比。" },
      C: { verdict: "incorrect", reason: "3克H₂為1.5 mol，1克N₂僅約0.036 mol，兩者不按3：1莫耳比，也不會生成2克NH₃。" },
      D: { verdict: "correct", reason: "加壓使平衡移向氣體莫耳數較少的2NH₃一側，增加氨的生成。" }
    },
    takeaway: "平衡看的是速率相等；壓力影響則比較反應式左右的氣體係數總和。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-40": {
    encouragement: "兩個分子形狀很像，差別主要在SiH₄較大、電子較多，所以分子間吸引力更強。",
    keyIdea: "SiH₄極化性較高，凡得瓦力比CH₄強，因此沸點較高。",
    steps: [
      "CH₄與SiH₄都是對稱四面體、整體非極性，也都不能形成氫鍵。",
      "SiH₄分子較大、電子雲較容易變形。",
      "因此SiH₄分子間凡得瓦力較強，需要較多能量分開，沸點較高。",
      "答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "SiH₄分子較大且電子較多，極化性較高，分子間凡得瓦力比CH₄強。" },
      B: { verdict: "incorrect", reason: "SiH₄與CH₄皆為對稱四面體且整體非極性，幾何構造類似。" },
      C: { verdict: "incorrect", reason: "沸騰主要克服分子間作用力，不是打斷分子內Si—H或C—H共價鍵。" },
      D: { verdict: "incorrect", reason: "氫鍵通常需H直接連N、O或F；SiH₄與CH₄都不能形成典型氫鍵。" }
    },
    takeaway: "比較相似非極性分子的沸點時，通常分子越大、電子越多，凡得瓦力越強。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-42": {
    encouragement: "油脂是非極性物質，選性質相近的非極性溶劑最容易把它溶開。",
    keyIdea: "相似相溶：汽油與油脂都以非極性碳氫結構為主，去油效果最佳。",
    steps: [
      "油脂含長碳氫鏈，整體偏非極性。",
      "汽油主要由非極性烴組成，能和油脂產生良好作用。",
      "水、醋酸偏極性，酒精也含強極性羥基，溶解大量油脂不如汽油。",
      "答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "汽油是非極性烴類混合物，與非極性油脂性質相近，能有效溶解油污。" },
      B: { verdict: "incorrect", reason: "酒精雖能溶部分有機物，但羥基使其較極性，溶解油脂通常不如汽油。" },
      C: { verdict: "incorrect", reason: "清水為高度極性溶劑，無清潔劑幫助時難以溶解非極性油脂。" },
      D: { verdict: "incorrect", reason: "醋酸具有極性且呈酸性，不是清除大量非極性油脂的最佳溶劑。" }
    },
    takeaway: "相似相溶：非極性油污優先找非極性溶劑，極性鹽類則常用水。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-43": {
    encouragement: "要算電子質量，需要先知道電子電量e，也要知道荷質比e/m；兩個實驗剛好各給一項。",
    keyIdea: "湯木生測得e/m，米立坎測得e，兩者相除可求m。",
    steps: [
      "湯木生陰極射線實驗得到電子荷質比e/m。",
      "米立坎油滴實驗測得基本電荷e。",
      "用m＝e÷(e/m)即可求電子質量。",
      "所以需要乙、丁，答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "拉塞福與侖琴實驗不是求電子質量所必需，加入四者並非最直接組合。" },
      B: { verdict: "incorrect", reason: "缺少米立坎測得的電子電量e，只有e/m仍不能單獨算出m。" },
      C: { verdict: "correct", reason: "湯木生給e/m、米立坎給e，兩項資料可由m＝e÷(e/m)求得電子質量。" },
      D: { verdict: "incorrect", reason: "米立坎與X射線實驗的組合缺少電子荷質比e/m。" }
    },
    takeaway: "知道荷質比還不夠；再知道電荷量，才能把電子質量分離算出。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-82": {
    encouragement: "法拉第常數是一莫耳電子帶的總電量，除以一顆電子的電量，就得到一莫耳有幾顆電子。",
    keyIdea: "F＝Nₐe，所以Nₐ＝F/e，需要電子電荷e與法拉第常數F。",
    steps: [
      "一顆電子電量大小為e。",
      "一莫耳電子共有Nₐ顆，總電量為Nₐe，也就是法拉第常數F。",
      "因此Nₐ＝F/e，需要參數C與F。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣體常數R可用於氣體方程式，但不能單獨把每莫耳粒子數直接算出。" },
      B: { verdict: "incorrect", reason: "標準狀態莫耳體積描述一莫耳氣體體積，仍缺少單顆粒子尺度資料。" },
      C: { verdict: "correct", reason: "電子電荷e提供單一電子所帶電量，是用總電量反推粒子數的分母。" },
      D: { verdict: "incorrect", reason: "電子質量與法拉第常數沒有形成最簡單求Nₐ的直接關係。" },
      E: { verdict: "incorrect", reason: "重力常數描述萬有引力，與一莫耳電子的電量無直接關係。" },
      F: { verdict: "correct", reason: "法拉第常數F是一莫耳電子的總電量，配合e可由Nₐ＝F/e求值。" },
      G: { verdict: "incorrect", reason: "普朗克常數連結光子能量與頻率，不是這個電量計算法所需。" }
    },
    takeaway: "「一莫耳總量÷單一粒子量」就是粒子個數；本題用F÷e。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-30": {
    encouragement: "只按稀釋倍數會算到pH 8，但酸液加純水不會因此變成鹼性；極稀時水自己的H⁺不能忽略。",
    keyIdea: "pH 5酸液稀釋1000倍後，酸提供的H⁺低於純水約10⁻⁷ M的尺度，溶液趨近中性pH 7。",
    steps: [
      "甲液[H⁺]約10⁻⁵ M，1 mL稀釋到1 L是1000倍。",
      "若只算溶質會得10⁻⁸ M，但純水本身在常溫已有約10⁻⁷ M的H⁺。",
      "加入水只讓酸性變弱，不會把酸直接稀釋成pH 8的鹼液；結果接近pH 7。",
      "答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "pH 8呈鹼性；只加純水稀釋酸液不會讓它跨過中性變成鹼性。" },
      B: { verdict: "correct", reason: "酸被極度稀釋後，水的自解離不可忽略，溶液pH趨近7。" },
      C: { verdict: "incorrect", reason: "pH 6仍比極度稀釋後的結果酸很多，未完整反映1000倍稀釋。" },
      D: { verdict: "incorrect", reason: "pH維持5代表濃度未變，但加水到原體積1000倍必會降低酸性。" },
      E: { verdict: "incorrect", reason: "pH 4表示酸性變強，與加水稀釋的方向相反。" }
    },
    takeaway: "極稀酸鹼不能忽略水的自解離；只加水會讓pH靠近7，不會越過7。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-31": {
    encouragement: "同一壓力下乙的沸點高很多，表示乙分子間拉得更緊；換到1 atm，順序仍不會顛倒。",
    keyIdea: "乙因氫鍵而分子間作用力較強，沸點高於甲；錯誤是說1 atm時甲沸點較高。",
    steps: [
      "在相同40/76 atm下，乙沸點63.5℃高於甲的－37.8℃，表示乙分子間作用力較強。",
      "升溫會使兩者蒸氣壓都上升。",
      "改到1 atm時兩者沸點都提高，但乙仍高於甲。",
      "所以錯誤的是A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "本題問錯誤項；乙分子間作用力較強，在1 atm的沸點仍應高於甲。" },
      B: { verdict: "incorrect", reason: "本題要選錯誤項；溫度升高時液體分子較易逸出，兩者蒸氣壓都會升高。" },
      C: { verdict: "incorrect", reason: "乙在相同外壓下需更高溫才沸騰，表示乙的分子間作用力較大。" },
      D: { verdict: "incorrect", reason: "乙能形成氫鍵，較強分子間作用力可合理說明其沸點高於甲。" }
    },
    takeaway: "相同外壓下，沸點較高通常表示分子間作用力較強。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-32": {
    encouragement: "看到「所有金屬」要特別小心，只要找到汞或鈉等反例，就能判斷這句過度絕對。",
    keyIdea: "金屬性質差異很大；汞常溫為液體，鈉很軟且熔點遠低於800℃。",
    steps: [
      "鋁是地殼含量最多的金屬元素，銀導電性佳，金延展性佳。",
      "金屬氧化物多呈鹼性，但也有兩性或呈酸性者。",
      "汞常溫為液體，鈉柔軟且約98℃即熔化，推翻「都很硬、熔點都高於800℃」。",
      "所以錯誤的是D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "本題問錯誤項；鋁是地殼中含量最豐富的金屬元素。" },
      B: { verdict: "incorrect", reason: "銀具有非常高的電導率，作為導電性最佳金屬的敘述正確。" },
      C: { verdict: "incorrect", reason: "金的延展性極佳，可拉成細絲或壓成薄片，此敘述正確。" },
      D: { verdict: "correct", reason: "汞常溫為液體，鈉等金屬很軟且熔點低，金屬並非都硬或熔點超過800℃。" },
      E: { verdict: "incorrect", reason: "許多金屬氧化物呈鹼性，但確有兩性或酸性氧化物，選項已保留少數例外。" }
    },
    takeaway: "材料性質遇到「所有、一定」時，用已知反例檢查最有效。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-35": {
    encouragement: "先算NaN₃的莫耳質量：一個Na加三個N，剛好是65 g/mol。",
    keyIdea: "NaN₃莫耳質量＝23＋3×14＝65 g/mol，所以65克是1 mol。",
    steps: [
      "NaN₃莫耳質量為23＋3×14＝65 g/mol。",
      "莫耳數＝質量÷莫耳質量＝65÷65＝1 mol。",
      "答案為E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "6.5 mol NaN₃質量應為6.5×65＝422.5克，不是65克。" },
      B: { verdict: "incorrect", reason: "3.7 mol會需要約240.5克NaN₃，遠高於題目樣品。" },
      C: { verdict: "incorrect", reason: "2.3 mol約重149.5克，與65克不符。" },
      D: { verdict: "incorrect", reason: "1.4 mol約重91克，仍高於題目給的65克。" },
      E: { verdict: "correct", reason: "NaN₃莫耳質量正好65 g/mol，因此65克就是1 mol。" }
    },
    takeaway: "化學式中的下標要乘進莫耳質量：NaN₃有三個N。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-36": {
    encouragement: "上一題得到1 mol NaN₃；配平後每2 mol NaN₃產生3 mol N₂，所以會有1.5 mol氣體。",
    keyIdea: "2NaN₃→2Na＋3N₂；1 mol NaN₃生成1.5 mol N₂，在25℃、1 atm約36.7 L，最接近35 L。",
    steps: [
      "配平分解式為2NaN₃→2Na＋3N₂。",
      "1 mol NaN₃生成3/2＝1.5 mol N₂。",
      "V＝nRT/P≈1.5×0.082×298÷1≈36.7 L。",
      "最接近35 L，答案為E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "15 L低估N₂量；1.5 mol氣體在室溫下遠大於15 L。" },
      B: { verdict: "incorrect", reason: "20 L甚至小於1 mol氣體在25℃的約24.5 L，無法對應1.5 mol。" },
      C: { verdict: "incorrect", reason: "25 L接近1 mol室溫氣體體積，漏掉反應係數產生1.5 mol N₂。" },
      D: { verdict: "incorrect", reason: "30 L仍低於理想氣體式算得約36.7 L。" },
      E: { verdict: "correct", reason: "1.5 mol N₂在1 atm、25℃約36.7 L，選項中35 L最接近。" }
    },
    takeaway: "安全氣囊計算要先配平NaN₃分解式，再把N₂莫耳數換成體積。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-37": {
    encouragement: "先算K₂Cr₂O₇中Cr的氧化數，再逐項找相同數值。",
    keyIdea: "K₂Cr₂O₇中Cr為＋6；K₂MnO₄中Mn也為＋6。",
    steps: [
      "設Cr為x：2(+1)＋2x＋7(－2)＝0，解得x＝＋6。",
      "K₂MnO₄中2(+1)＋x＋4(－2)＝0，解得Mn＝＋6。",
      "所以答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Cl₂O₇中Cl為＋7價，不等於Cr的＋6價。" },
      B: { verdict: "incorrect", reason: "Cr₂O₃中Cr為＋3價，與K₂Cr₂O₇中的＋6不同。" },
      C: { verdict: "incorrect", reason: "SO₂是中性分子，兩個氧合計為－4，因此S為＋4價，不是＋6價。" },
      D: { verdict: "correct", reason: "K₂MnO₄中Mn的氧化數為＋6，與K₂Cr₂O₇中的Cr相同。" }
    },
    takeaway: "中性化合物各元素氧化數總和為0，可用一元一次方程式求未知價數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-81": {
    encouragement: "pH大於純水表示呈鹼性。八種液體中，找會產生OH⁻或能接受H⁺的兩種即可。",
    keyIdea: "氨水與蘇打粉NaHCO₃水溶液呈鹼性，pH大於純水。",
    steps: [
      "氨與水作用可增加OH⁻，氨水呈鹼性。",
      "NaHCO₃水溶液通常呈弱鹼性。",
      "雨水、果汁、可樂、胃液、HCl與檸檬汁都偏酸。",
      "因此選A、H。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "NH₃與水作用形成少量NH₄⁺、OH⁻，氨水pH大於純水。" },
      B: { verdict: "incorrect", reason: "天然雨水溶有CO₂形成碳酸，通常略呈酸性，pH低於純水。" },
      C: { verdict: "incorrect", reason: "番茄汁含有檸檬酸等有機酸，pH通常低於純水，不是鹼性溶液。" },
      D: { verdict: "incorrect", reason: "可樂含碳酸、磷酸等成分，pH低於純水。" },
      E: { verdict: "incorrect", reason: "胃液含有鹽酸HCl，作用是幫助消化，因此呈明顯酸性而不是鹼性。" },
      F: { verdict: "incorrect", reason: "1.0 M HCl是強酸溶液，pH遠低於純水。" },
      G: { verdict: "incorrect", reason: "檸檬汁含有檸檬酸，會增加溶液中的H⁺，所以pH低於純水。" },
      H: { verdict: "correct", reason: "蘇打粉NaHCO₃溶於水後溶液呈弱鹼性，pH大於純水。" }
    },
    takeaway: "常見飲料與果汁多含酸；氨水和小蘇打水則是常見鹼性液體。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-32": {
    encouragement: "三種鐵材最大的差別之一是含碳量：生鐵最高，熟鐵最低，鋼居中。",
    keyIdea: "含碳量順序為生鐵＞鋼＞熟鐵。",
    steps: [
      "高爐煉出的生鐵含碳量較高，硬而脆。",
      "鋼經調整碳含量，含碳量低於生鐵。",
      "熟鐵接近純鐵，含碳量最低。",
      "答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "生鐵含碳最高，鋼居中，熟鐵最低，順序完全正確。" },
      B: { verdict: "incorrect", reason: "鋼的含碳量低於生鐵，不能排在生鐵之前。" },
      C: { verdict: "incorrect", reason: "熟鐵的含碳量最低，生鐵的含碳量最高，因此熟鐵不會排在生鐵之前。" },
      D: { verdict: "incorrect", reason: "此選項把熟鐵放成最高，但熟鐵最接近低碳的純鐵。" }
    },
    takeaway: "含碳越多通常越硬脆：生鐵最高、鋼可調、熟鐵最低。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-33": {
    encouragement: "爆炸要同時有燃料與氧化劑，比例還要接近平衡反應。2份H₂配1份O₂正好完全反應。",
    keyIdea: "2H₂＋O₂→2H₂O；H₂：O₂＝2：1是恰好完全反應的爆炸性混合物。",
    steps: [
      "純H₂缺少氣球內的O₂，純O₂本身也不是燃料；He則不反應。",
      "反應式需要H₂與O₂體積比2：1。",
      "D恰好含燃料與氧化劑的正確比例，能在點燃時快速釋放最多能量。",
      "答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣球內只有H₂、沒有預先混合的O₂，反應條件不如正確混合物完整。" },
      B: { verdict: "incorrect", reason: "He不燃燒也不助燃，會稀釋H₂，且氣球內缺少足量O₂。" },
      C: { verdict: "incorrect", reason: "O₂能助燃但He惰性，混合物中沒有可燃性燃料。" },
      D: { verdict: "correct", reason: "H₂與O₂體積比2：1正好符合平衡式，點燃可快速完全反應並大量放熱。" },
      E: { verdict: "incorrect", reason: "O₂本身不燃燒，只能支持其他燃料燃燒，純氧氣球不是最強爆炸組合。" }
    },
    takeaway: "最快速的氣體燃燒通常需要燃料與氧化劑先均勻混合，並接近反應係數比。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
