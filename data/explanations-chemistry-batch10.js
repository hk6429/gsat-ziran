window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-92-7": {
    encouragement: "焚化適合可燃、含水少且不會產生大量有毒物的廢棄物，從材質逐組排除即可。",
    keyIdea: "廢紙與乾樹葉可燃且熱值較合適；金屬玻璃宜回收，廚餘含水高，電路板與輪胎可能產生污染。",
    steps: ["先排除不可燃且可回收的金屬、玻璃。", "廚餘含水高，焚燒耗能；電路板與輪胎燃燒污染風險高。", "廢紙與樹葉較適合焚化，因此答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鐵鋁罐與玻璃不易燃燒，且有回收再利用價值，不適合送進焚化爐。" },
      B: { verdict: "incorrect", reason: "蔬果殘渣與廚餘含水量高，焚燒需先消耗大量能量蒸發水分。" },
      C: { verdict: "incorrect", reason: "電路板含金屬與複雜材料，廢輪胎燃燒也易產生黑煙及有害污染物。" },
      D: { verdict: "correct", reason: "廢紙與乾樹葉主要為可燃有機物，含水較低，較適合以焚化處理。" }
    },
    takeaway: "廢棄物處理要看材質：能回收先回收，高含水堆肥，適合燃燒者才焚化。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-23": {
    encouragement: "太空梭外殼要承受上千度高溫，先找熔點高、導熱較慢且不易燃燒的材料。",
    keyIdea: "耐熱陶瓷可承受高溫且熱傳導較低，適合作為隔熱防護材料。",
    steps: ["金屬容易導熱，塑膠與一般高分子遇高溫會軟化或分解。", "耐熱陶瓷具有高熔點、耐氧化與低導熱等特性。", "因此最適合的是陶瓷材料，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "金屬雖可耐一定高溫，但導熱快，會把外部熱量迅速傳向太空梭內部。" },
      B: { verdict: "incorrect", reason: "一般玻璃受急遽溫差容易軟化或熱裂，不如專用耐熱陶瓷適合。" },
      C: { verdict: "incorrect", reason: "多數塑膠在數百度前就會軟化、燃燒或分解，無法承受上千度。" },
      D: { verdict: "correct", reason: "耐熱陶瓷熔點高、導熱較低且耐氧化，可作太空梭外殼隔熱材料。" },
      E: { verdict: "incorrect", reason: "一般有機高分子含碳氫結構，高溫下易分解或燃燒，耐熱性不足。" }
    },
    takeaway: "極高溫隔熱材料常用陶瓷，因為它耐熱、耐氧化且不易把熱快速傳入。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-24": {
    encouragement: "鴉片來自罌粟，其中最具代表性的天然生物鹼就是嗎啡。",
    keyIdea: "嗎啡是鴉片中的主要活性與成癮成分；海洛因則是由嗎啡再加工的衍生物。",
    steps: ["鴉片是罌粟乳汁乾燥後的產物。", "其中含多種生物鹼，以嗎啡的止痛、成癮作用最具代表性。", "所以答案為C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海洛因通常由嗎啡經化學改造製得，不是天然鴉片中主要原有成分。" },
      B: { verdict: "incorrect", reason: "安非他命是人工合成的中樞神經興奮劑，並非來自鴉片的主要毒性成分。" },
      C: { verdict: "correct", reason: "嗎啡是鴉片中重要的天然生物鹼，具有強效止痛作用，也容易造成依賴。" },
      D: { verdict: "incorrect", reason: "尼古丁主要存在於菸草，與罌粟鴉片的主要成分來源不同。" }
    },
    takeaway: "來源要分清：嗎啡來自鴉片，尼古丁來自菸草，安非他命則屬合成興奮劑。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-27": {
    encouragement: "三步驟各看一個明顯訊號：出現固體、酸鹼反應、最後電子轉移。",
    keyIdea: "Mg²⁺生成Mg(OH)₂為沉澱；Mg(OH)₂與HCl為中和；熔融鹽電解為氧化還原。",
    steps: ["加入Ca(OH)₂使Mg²⁺形成難溶Mg(OH)₂，屬沉澱反應。", "Mg(OH)₂與HCl生成MgCl₂和水，屬酸鹼中和。", "電解MgCl₂使Mg²⁺得電子成Mg，屬氧化還原，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "步驟Ⅰ主要產生Mg(OH)₂沉澱，步驟Ⅱ才是酸鹼中和，分類順序不對。" },
      B: { verdict: "incorrect", reason: "步驟Ⅰ是沉澱正確，但Mg(OH)₂與HCl沒有氧化數改變，不是氧化還原。" },
      C: { verdict: "incorrect", reason: "步驟Ⅰ不以生成水為主要特徵，而是形成Mg(OH)₂固體；步驟Ⅱ也不是沉澱。" },
      D: { verdict: "correct", reason: "三步依序為形成沉澱、酸鹼中和、熔融鹽電解的氧化還原反應。" }
    },
    takeaway: "反應分類看證據：生成難溶固體是沉澱，酸加鹼是中和，電子轉移是氧化還原。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-28": {
    encouragement: "離子的電子數可以反推質子數：正二價少兩電子，負一價多一電子。",
    keyIdea: "X²⁺有18電子，所以X為Z=20；Y⁻有18電子，所以Y為Z=17的氯。",
    steps: ["X²⁺比中性原子少2電子，因此X有20質子；Y⁻多1電子，因此Y有17質子。", "兩者都有20中子，X質量數40，Y質量數37。", "氯-35與Y的氯-37同質子不同中子，互為同位素，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "X有20質子與20中子，質量數應為40，不是38。" },
      B: { verdict: "correct", reason: "Y原子序17且本核種質量數37，氯-35與它質子相同、中子不同，互為同位素。" },
      C: { verdict: "incorrect", reason: "X與Y是不同元素的離子，不是同一元素形成的不同單質結構。" },
      D: { verdict: "incorrect", reason: "X有20個質子、Y有17個質子，兩者質子數並不相同。" }
    },
    takeaway: "離子反推原子序：陽離子要把失去的電子加回，陰離子要扣掉多得的電子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-29": {
    encouragement: "氧化物分解後少掉的0.48克就是氧；先求氧莫耳數，再由M₂O₃比例找到金屬。",
    keyIdea: "0.48 g O為0.03 mol O，對應0.01 mol M₂O₃與0.02 mol M；1.12/0.02=56。",
    steps: ["氧質量為1.60－1.12＝0.48 g，即0.03 mol氧原子。", "M₂O₃中O與M莫耳比3：2，所以M為0.03×2/3＝0.02 mol。", "M原子量為1.12÷0.02＝56，答案C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "原子量28會使0.02 mol金屬只有0.56 g，與殘留1.12 g不符。" },
      B: { verdict: "incorrect", reason: "原子量42對應0.84 g金屬，仍低於實驗得到的1.12 g。" },
      C: { verdict: "correct", reason: "金屬為0.02 mol且質量1.12 g，原子量1.12/0.02正好為56。" },
      D: { verdict: "incorrect", reason: "原子量70會使0.02 mol金屬質量1.40 g，超過實際殘渣。" },
      E: { verdict: "incorrect", reason: "原子量84對應1.68 g金屬，甚至超過原氧化物總質量1.60 g。" }
    },
    takeaway: "金屬氧化物組成題：質量差求氧，再用化學式莫耳比回推金屬。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-30": {
    encouragement: "低鈉鹽不是不帶電，而是用其他陽離子取代部分Na⁺，最常見的是K⁺。",
    keyIdea: "以KCl取代部分NaCl可降低每份鹽中的Na⁺，整體仍保持電中性。",
    steps: ["金屬鈉非常活潑，食鹽中存在的是Na⁺而非金屬鈉。", "低鈉鹽常混合KCl，以K⁺取代部分Na⁺。", "每種鹽仍各自電中性，因此答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "低鈉鹽不含活潑的金屬鈉，而是含有離子化合物中的Na⁺。" },
      B: { verdict: "incorrect", reason: "低鈉鹽通常以KCl取代部分NaCl，組成與一般純NaCl食鹽不同。" },
      C: { verdict: "incorrect", reason: "任何大量存在的鹽都維持總電荷平衡，不會因降低Na⁺就成為不電中性。" },
      D: { verdict: "correct", reason: "加入KCl可用K⁺取代部分Na⁺，使相同份量產品所含鈉離子較少。" }
    },
    takeaway: "食品標示的「低鈉」常靠鉀鹽部分取代鈉鹽，不代表完全沒有鈉。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-33": {
    encouragement: "先用24.5 L/mol把氮氣換成莫耳，再照2：3係數比回推NaN₃。",
    keyIdea: "73.5 L N₂為3 mol；2NaN₃生成3N₂，所以需2 mol NaN₃，即130 g。",
    steps: ["氮氣莫耳數為73.5÷24.5＝3 mol。", "反應式顯示生成3 mol N₂需2 mol NaN₃。", "NaN₃質量為2×65.0＝130 g，答案C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "6.5 g只有0.1 mol NaN₃，最多生成0.15 mol N₂，遠不足73.5 L。" },
      B: { verdict: "incorrect", reason: "65 g為1 mol NaN₃，只能生成1.5 mol N₂，也就是36.75 L。" },
      C: { verdict: "correct", reason: "3 mol N₂依2：3係數比需2 mol NaN₃，質量正好為130 g。" },
      D: { verdict: "incorrect", reason: "260 g為4 mol NaN₃，會生成6 mol N₂，是題目所需量的兩倍。" }
    },
    takeaway: "氣體化學計量先用莫耳體積換莫耳，再用反應係數比，不要直接比克數。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-47": {
    encouragement: "氮氧化物常和交通污染、光化學煙霧一起出現；觸媒轉化器則把它們轉回N₂。",
    keyIdea: "NOₓ參與光化學煙霧；汽車觸媒可將NOₓ還原成較無害的N₂。",
    steps: ["高溫引擎使空氣中的N₂與O₂反應生成NOₓ。", "NOₓ參與陽光下的連鎖反應，形成光化學煙霧。", "觸媒轉化器促進NOₓ轉成N₂，因此選B、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NO₂遇水形成硝酸、亞硝酸等酸性物質，不會形成鹼性溶液。" },
      B: { verdict: "correct", reason: "光化學煙霧的反應系統常含NO、NO₂等氮氧化物及臭氧。" },
      C: { verdict: "incorrect", reason: "NO有奇數個價電子，是自由基，N與O無法在單一電子點式中都滿足八隅體。" },
      D: { verdict: "incorrect", reason: "汽機車NO主要由引擎高溫使空氣N₂與O₂反應形成，不是燃油不完全燃燒直接產物。" },
      E: { verdict: "correct", reason: "觸媒轉化器可促進NOₓ還原為N₂，降低氮氧化物排放。" }
    },
    takeaway: "汽車NOₓ源於高溫，不完全燃燒則常產生CO；兩類污染成因不同。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-48": {
    encouragement: "甲烷分子量16，其中4克來自氫；再用燃燒是放熱反應判斷能量高低。",
    keyIdea: "CH₄中氫質量百分比4/16=25%；燃燒放熱表示反應物能量高於產物。",
    steps: ["CH₄莫耳質量為12＋4＝16，氫占4/16＝25%。", "完全燃燒式為CH₄＋2O₂→CO₂＋2H₂O，只需2 mol O₂。", "放熱反應釋出能量，故反應物能量較高，選A、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "1 mol CH₄中氫質量4 g、總質量16 g，百分比為25%。" },
      B: { verdict: "incorrect", reason: "純甲烷本身無臭，家用瓦斯的警示氣味來自另外添加的臭味劑。" },
      C: { verdict: "incorrect", reason: "配平反應式顯示1 mol CH₄完全燃燒只需2 mol O₂，不是3 mol。" },
      D: { verdict: "correct", reason: "甲烷燃燒會放熱，表示反應物降低到較低能量的產物並釋出能量。" }
    },
    takeaway: "燃料本身未必有臭味；天然氣加臭是為了讓外洩能被及早察覺。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-59": {
    encouragement: "答案直接藏在文章目的句：加入有毒且難移除的物質，是為了讓工業酒精不能拿來喝。",
    keyIdea: "工業酒精變性是為防止被冒充食用酒販售，並保護稅制與公共安全。",
    steps: ["工業酒精稅負較低，若冒充食用酒可非法牟利。", "加入甲醇等有毒且難移除物質，使它無法安全飲用。", "所以目的為防止轉售假酒，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "文章沒有說甲醇是為提高溶解力，而是利用其毒性與難分離性阻止飲用。" },
      B: { verdict: "correct", reason: "變性可避免便宜工業酒精被冒充食用酒販賣，防止逃稅與危害。" },
      C: { verdict: "incorrect", reason: "甲醇本身不是靠強烈惡臭警告民眾，誤飲時反而非常危險。" },
      D: { verdict: "incorrect", reason: "甲醇不會把酒精染成粉紅色，文章也未以顏色作為變性方法。" }
    },
    takeaway: "變性酒精是加入不可食用成分的工業乙醇，絕對不能當飲料。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-60": {
    encouragement: "甲醇與乙醇都有小型碳鏈和OH基，能和水形成氫鍵，因此都可和水互溶。",
    keyIdea: "低碳醇的極性OH基可與水形成氫鍵；甲醇、乙醇皆能和水任意比例互溶。",
    steps: ["甲醇與乙醇同屬醇類，結構只差一個CH₂。", "兩者OH基都能與水形成氫鍵，水溶性很高。", "變性只是在乙醇中混入有毒物，並未改造乙醇分子，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "蒸餾依沸點而非生化性質分離，且文章指出一般蒸餾難以有效移除甲醇。" },
      B: { verdict: "incorrect", reason: "同系列相差一個碳時性質通常相近，不會因此變得非常不同。" },
      C: { verdict: "incorrect", reason: "變性酒精是混入甲醇等物質，乙醇分子的化學結構本身沒有被改變。" },
      D: { verdict: "correct", reason: "甲醇與乙醇的OH基都能和水形成氫鍵，因此可與水任意比例互溶。" }
    },
    takeaway: "混合不等於化學改造；變性酒精仍含乙醇，只是又加入有毒成分。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-61": {
    encouragement: "5000 ppm就是質量分率0.005；兩種液體密度相同時，體積分率也可直接照比例換算。",
    keyIdea: "5000 ppm=5000×10⁻⁶=0.005；600 mL×0.005=3 mL。",
    steps: ["把5000 ppm換成0.005，也就是0.5%。", "一瓶0.6 L等於600 mL。", "密度相同時甲醇體積為600×0.005＝3 mL，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 mL只占600 mL的約0.00167，相當於約1667 ppm，不是5000 ppm。" },
      B: { verdict: "correct", reason: "5000 ppm為0.005，乘一瓶600 mL得到3 mL甲醇。" },
      C: { verdict: "incorrect", reason: "5 mL占600 mL約0.00833，相當於8333 ppm，超過題目濃度。" },
      D: { verdict: "incorrect", reason: "6 mL占600 mL為1%，也就是10000 ppm，是題目濃度兩倍。" }
    },
    takeaway: "ppm先乘10⁻⁶換成比例；密度相同時，質量比與體積比的數值一致。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-63": {
    encouragement: "文章已指出甲醇代謝成甲酸會降低血液pH，小蘇打的任務就是中和這些酸。",
    keyIdea: "NaHCO₃是弱鹼性緩衝物，可消耗酸性代謝物，提高過低的血液pH。",
    steps: ["甲醇在體內轉成甲醛，再氧化成甲酸。", "甲酸累積會使血液pH下降，造成代謝性酸中毒。", "碳酸氫鈉可中和H⁺，所以答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "延緩甲醇氧化是乙醇競爭酵素的作用，不是碳酸氫鈉的主要目的。" },
      B: { verdict: "incorrect", reason: "碳酸氫鈉不會直接把甲醇分解，它主要調整酸鹼平衡。" },
      C: { verdict: "incorrect", reason: "碳酸氫鈉不是選擇性和甲醛反應的解毒劑，重點是中和酸性產物。" },
      D: { verdict: "correct", reason: "HCO₃⁻可消耗H⁺，中和甲酸等酸性代謝物並提高過低的血液pH。" }
    },
    takeaway: "碳酸氫鈉處理的是酸中毒，不代表能消除甲醇本身；中毒仍需立即專業醫療。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-1": {
    encouragement: "天然物質也全由化學物質組成，所以聲稱「天然卻不含化學物質」本身就矛盾。",
    keyIdea: "物質都具有化學組成；天然與人工只說明來源，不代表有無化學物質。",
    steps: ["水、糖與植物成分都是天然物質，也都是化學物質。", "因此「天然配製」不能推出「不含化學物質」。", "最不科學的是C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "適量含氟牙膏可增強牙齒抗酸能力，降低蛀牙風險，敘述有科學基礎。" },
      B: { verdict: "incorrect", reason: "大量流汗會流失水與電解質，適量含鹽飲料可協助補充。" },
      C: { verdict: "correct", reason: "天然物質仍由分子、離子等化學物質組成，因此此廣告語概念自相矛盾。" },
      D: { verdict: "incorrect", reason: "碘是甲狀腺激素所需元素，碘鹽可預防缺碘造成的甲狀腺腫大。" },
      E: { verdict: "incorrect", reason: "合格礦泉水可含少量礦物離子，這項敘述沒有否定基本化學概念。" }
    },
    takeaway: "「化學物質」不是有害物的同義詞；水、空氣與天然食品都由化學物質組成。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-32": {
    encouragement: "先配平碳和氫得到6CO₂、5H₂O，再用氧原子守恆找O₂。",
    keyIdea: "C₆H₁₀O₅＋6O₂→6CO₂＋5H₂O，每個有機物分子需6個氧分子。",
    steps: ["6個碳生成6CO₂，10個氫生成5H₂O。", "產物共有17個O，原有機物已有5個，還缺12個O。", "12個O來自6個O₂，所以答案F。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1個O₂只補2個氧，無法滿足完全氧化所缺的12個氧原子。" },
      B: { verdict: "incorrect", reason: "2個O₂僅提供4個氧，配平後產物所需氧仍不足。" },
      C: { verdict: "incorrect", reason: "3個O₂提供6個氧，只達正確需求量的一半。" },
      D: { verdict: "incorrect", reason: "4個O₂提供8個氧，尚缺4個氧原子才能完全生成CO₂與水。" },
      E: { verdict: "incorrect", reason: "5個O₂提供10個氧，仍比所缺的12個氧少2個。" },
      F: { verdict: "correct", reason: "6個O₂提供12個氧，加原分子5個氧，正好等於產物17個氧。" }
    },
    takeaway: "燃燒配平順序常用碳、氫、最後氧，最不容易漏算。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-46": {
    encouragement: "左側變藍綠表示OH⁻增加；電解水在陰極產生OH⁻，而電解槽陰極是負極。",
    keyIdea: "陰極發生還原：2H₂O＋2e⁻→H₂＋2OH⁻，使紫甘藍指示劑轉為鹼性色。",
    steps: ["左側由紫轉藍綠，表示溶液變鹼、OH⁻增加。", "水在接受電子的陰極生成H₂與OH⁻。", "電解槽陰極連負端，所以選B、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "陽極附近通常因水氧化而增加H⁺，會呈酸性色，不符合左側藍綠。" },
      B: { verdict: "correct", reason: "陰極接受電子並使水生成OH⁻，正好解釋左側溶液變鹼。" },
      C: { verdict: "incorrect", reason: "電解槽正極是陽極，附近呈酸性，不是左側電極。" },
      D: { verdict: "correct", reason: "外加電源把電子送至陰極，所以電解槽中的陰極就是負極。" }
    },
    takeaway: "電解水局部變色：陰極產OH⁻呈鹼性，陽極產H⁺呈酸性。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-20": {
    encouragement: "60克葡萄糖是三分之一莫耳；每莫耳完全燃燒產生6莫耳水。",
    keyIdea: "C₆H₁₂O₆＋6O₂→6CO₂＋6H₂O，60/180×6×18=36 g。",
    steps: ["葡萄糖莫耳質量180，60克為1/3 mol。", "1 mol葡萄糖產6 mol水，因此生成2 mol水。", "2×18＝36克，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "9克僅為0.5 mol水，低於反應係數算出的2 mol。" },
      B: { verdict: "incorrect", reason: "18克是1 mol水，只達正確生成量的一半。" },
      C: { verdict: "incorrect", reason: "27克為1.5 mol水，未依每莫耳葡萄糖產6莫耳水換算。" },
      D: { verdict: "correct", reason: "60克葡萄糖為1/3 mol，生成2 mol水，即36克。" },
      E: { verdict: "incorrect", reason: "45克為2.5 mol水，超過配平反應式可生成的2 mol。" }
    },
    takeaway: "質量計量先換莫耳、套係數比、最後再換回克數。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-21": {
    encouragement: "活性碳擅長吸附有機物和異味，但溶解的金屬離子要靠離子交換等方法。",
    keyIdea: "活性碳不是普遍去除金屬離子的材料；其餘選項分別是消毒、曝氣、凝聚與軟化。",
    steps: ["活性碳多孔，可吸附部分有機雜質。", "金屬離子溶於水，通常需離子交換、沉澱等方式去除。", "所以把兩者都說能有效吸附的B錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "控制劑量通氯可殺死水中微生物，是常見消毒方法。" },
      B: { verdict: "correct", reason: "此敘述錯誤；活性碳善於吸附有機物，但不能普遍有效移除金屬離子。" },
      C: { verdict: "incorrect", reason: "曝氣可增加溶氧，幫助好氧微生物分解有機污染物。" },
      D: { verdict: "incorrect", reason: "明礬形成膠羽並吸附細小懸浮物，使其聚集後沉降。" },
      E: { verdict: "incorrect", reason: "鈉型樹脂可用Na⁺交換Ca²⁺、Mg²⁺，降低硬度。" }
    },
    takeaway: "淨水沒有萬用材料：活性碳吸附有機物，離子交換處理溶解離子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-22": {
    encouragement: "質量數1的氫是最簡單原子：核內只有一個質子，核外一個電子。",
    keyIdea: "氫-1含1質子、0中子；中性原子另有1電子。",
    steps: ["原子序1表示有1個質子。", "質量數1＝質子＋中子，所以中子為0。", "中性氫另有1電子，答案C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氫-1沒有中子，而且原子核必須含一個質子。" },
      B: { verdict: "incorrect", reason: "氫-1有質子但沒有中子，中性狀態還有一個電子。" },
      C: { verdict: "correct", reason: "氫-1由一個質子與一個電子組成，原子核中沒有中子。" },
      D: { verdict: "incorrect", reason: "把中子列入會使質量數成為2，對應重氫而非氫-1。" }
    },
    takeaway: "氫-1是常見核種中唯一沒有中子的原子核。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-23": {
    encouragement: "四個都是直鏈烷類，碳鏈越長、電子越多，分子間分散力越強，沸點越高。",
    keyIdea: "同系列非極性分子中，分子量與接觸面積增加會增強凡得瓦力。",
    steps: ["CH₄到C₄H₁₀碳鏈逐漸增長。", "較大分子電子雲較易極化，分散力較強。", "丁烷需最高溫才汽化，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CH₄分子最小、分散力最弱，因此沸點最低而非最高。" },
      B: { verdict: "incorrect", reason: "乙烷比甲烷沸點高，但分子仍小於丙烷與丁烷。" },
      C: { verdict: "incorrect", reason: "丙烷分散力不及碳鏈更長的丁烷，所以沸點較低。" },
      D: { verdict: "correct", reason: "丁烷分子量與接觸面積最大，分散力最強，沸點最高。" }
    },
    takeaway: "同類直鏈分子通常碳鏈越長，分子間作用力越強，沸點越高。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-25": {
    encouragement: "向下排氣法用來收集比空氣輕又不能排水的氣體，五個產物中氨最符合。",
    keyIdea: "NH₃分子量17，比空氣輕且極易溶於水，適合向下排空氣收集。",
    steps: ["先比較氣體分子量與空氣平均29。", "NH₃為17，比空氣輕；又極易溶於水，不能排水收集。", "因此應用向下排氣法，答案A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "NH₃比空氣輕且極易溶於水，適合用向下排空氣法收集。" },
      B: { verdict: "incorrect", reason: "Cl₂分子量約71，比空氣重，應用向上排空氣法。" },
      C: { verdict: "incorrect", reason: "O₂微溶於水，通常可用排水法收集較純氣體。" },
      D: { verdict: "incorrect", reason: "HCl比空氣重且極易溶於水，適合向上排空氣而非向下。" },
      E: { verdict: "incorrect", reason: "CO₂分子量44比空氣重，不能用向下排空氣法收集。" }
    },
    takeaway: "排空氣方向看密度：比空氣輕用向下排氣，比空氣重用向上排氣。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-26": {
    encouragement: "濃硫酸讓糖變黑是脫水，不是酸和鹼互相中和。",
    keyIdea: "濃硫酸會從蔗糖中奪走H、O形成水，留下黑色碳。",
    steps: ["方糖主要是蔗糖，不是鹼性物質。", "濃硫酸強烈脫水，使蔗糖碳化變黑。", "所以把它說成酸鹼反應的D錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "硫酸可作強酸催化劑，促進乙酸相關脫水生成乙酐，敘述可成立。" },
      B: { verdict: "incorrect", reason: "硫酸是無機強酸，乙酸是有機弱酸，分類正確。" },
      C: { verdict: "incorrect", reason: "稀釋濃硫酸應把酸慢慢加入大量水中並攪拌散熱。" },
      D: { verdict: "correct", reason: "此敘述錯誤；糖變黑是濃硫酸脫水造成碳化，不是酸鹼中和。" },
      E: { verdict: "incorrect", reason: "甲醇與CO可經金屬催化羰基化大量製備乙酸，屬工業方法。" }
    },
    takeaway: "濃硫酸碰糖變黑的關鍵字是「脫水碳化」，不是「酸鹼中和」。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-29": {
    encouragement: "氟氯碳化合物名稱已提示只含碳、氟、氯；看到氫就可排除。",
    keyIdea: "CFC應含C、F、Cl而不含H；CHCl₃沒有F且含H。",
    steps: ["逐式檢查是否同時含C、F、Cl。", "A、B、D都只由這三元素組成。", "CHCl₃含H且沒有F，所以答案C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CCl₂F₂含碳、氯、氟且不含氫，是典型氟氯碳化合物。" },
      B: { verdict: "incorrect", reason: "CFCl₃同時含C、F、Cl，符合CFC的元素組成。" },
      C: { verdict: "correct", reason: "CHCl₃是氯仿，含氫且完全沒有氟，不屬於氟氯碳化合物。" },
      D: { verdict: "incorrect", reason: "CFCl₂CFCl₂只含碳、氟、氯，仍屬氟氯碳化合物。" }
    },
    takeaway: "化合物名稱常能反推元素組成；CFC就是碳、氟、氯化合物。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-30": {
    encouragement: "假設成品總體積100立方公分，用密度算實際玻璃體積，剩下的就是氣泡。",
    keyIdea: "100 cm³成品質量230 g，相當於230/2.5=92 cm³純玻璃，氣泡占8%。",
    steps: ["設成品100 cm³，質量為2.3×100＝230 g。", "230 g無氣泡玻璃體積為230÷2.5＝92 cm³。", "氣泡體積100－92＝8 cm³，占8%，答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4%只是假設密度差0.2除以錯誤基準所得，沒有用純玻璃密度換算體積。" },
      B: { verdict: "incorrect", reason: "5%代表玻璃占95 cm³，但95×2.5＝237.5 g，不符實際230 g。" },
      C: { verdict: "incorrect", reason: "6%會使純玻璃體積94 cm³、質量235 g，仍高於題目成品質量。" },
      D: { verdict: "incorrect", reason: "7%對應93 cm³玻璃與232.5 g，沒有符合密度2.3所得230 g。" },
      E: { verdict: "correct", reason: "100 cm³成品中實際玻璃92 cm³，剩餘8 cm³為氣泡，因此占8%。" }
    },
    takeaway: "含孔隙材料密度下降；假設總體積100，能把百分比問題變成直觀體積差。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-45": {
    encouragement: "兩個錯誤都在「結構完全相同」：棉與達克綸不同，蔗糖水解也得到兩種不同單醣。",
    keyIdea: "纖維素是葡萄糖聚合物，達克綸是聚酯；蔗糖水解生成葡萄糖與果糖。",
    steps: ["棉纖維素與達克綸聚酯的單體、鍵結都不同。", "蔗糖由葡萄糖與果糖組成，水解產物不是兩個相同分子。", "所以錯誤為D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碘遇澱粉會形成藍黑色複合物，可作澱粉檢驗，敘述正確。" },
      B: { verdict: "incorrect", reason: "NaHCO₃與Mg(OH)₂都能中和胃酸，是常見制酸劑成分。" },
      C: { verdict: "incorrect", reason: "茶與咖啡都可含咖啡因，會刺激中樞神經而有提神作用。" },
      D: { verdict: "correct", reason: "此敘述錯誤；纖維素是多醣，達克綸是聚酯，重複單元完全不同。" },
      E: { verdict: "correct", reason: "此敘述錯誤；蔗糖水解生成葡萄糖與果糖，是兩種結構不同的單醣。" }
    },
    takeaway: "天然與合成纖維可同樣是高分子，但單體與連接方式可能完全不同。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-57": {
    encouragement: "題幹中的鉻只是吹氣檢測試劑，不會進入人體；酒精主要由肝臟代謝。",
    keyIdea: "肝臟負責大部分乙醇代謝，長期或過量飲酒會增加肝臟損傷風險。",
    steps: ["吹氣試驗的二鉻酸根在儀器中，不是酒精本身成分。", "乙醇進入人體後主要在肝臟被氧化代謝。", "過量會傷害肝功能，因此答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "酒精飲料不含題目檢測液中的鉻離子，神經變慢主要是乙醇作用。" },
      B: { verdict: "incorrect", reason: "體內沒有靠酒精結合鉻離子造成遲鈍；鉻是吹氣檢測反應的一部分。" },
      C: { verdict: "incorrect", reason: "酒精造成中樞抑制，不是因促使全身改做無氧呼吸而精神不濟。" },
      D: { verdict: "correct", reason: "肝臟是乙醇氧化代謝的主要器官，過量飲酒容易造成脂肪肝等損害。" }
    },
    takeaway: "檢測試劑與體內致效物要分開；酒精影響神經，也增加肝臟代謝負擔。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-58": {
    encouragement: "先用K、Cr、S依序配平，可得到x=2、y=8、z=2，再逐項比較。",
    keyIdea: "平衡式係數為2K₂Cr₂O₇＋8H₂SO₄＋3乙醇→2Cr₂(SO₄)₃＋2K₂SO₄＋3乙酸＋11H₂O。",
    steps: ["4個Cr要求x=2；4個K再要求z=2。", "產物硫酸根共有6＋2＝8個，因此y=8。", "只有y>x+z，即8>4，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "z=2而y=8，所以z不大於y。" },
      B: { verdict: "correct", reason: "x=2、y=8、z=2，故y=8確實大於x+z=4。" },
      C: { verdict: "incorrect", reason: "x+y=2+8=10，不等於12。" },
      D: { verdict: "incorrect", reason: "y+z=8+2=10，不等於6。" },
      E: { verdict: "incorrect", reason: "x+y+z=2+8+2=12，不等於15。" }
    },
    takeaway: "複雜方程式可先配平只出現一次的元素，再用氫氧檢查。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-4": {
    encouragement: "放電時負極鋅失去電子；能獲得電子的一定是正極附近被還原的物質。",
    keyIdea: "碳鋅電池中Zn被氧化，MnO₂參與正極還原反應並獲得電子。",
    steps: ["鋅負極放出電子形成氧化反應。", "電子經外電路到正極，二氧化錳參與還原。", "所以獲得電子的是MnO₂，答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鋅在負極被氧化並失去電子，不是獲得電子。" },
      B: { verdict: "incorrect", reason: "碳棒主要導電並提供反應位置，本身不是主要受電子物質。" },
      C: { verdict: "incorrect", reason: "NH₄Cl主要作電解質，不是題目所問的主要受還原物。" },
      D: { verdict: "incorrect", reason: "ZnCl₂屬電解質組成，並非正極主要獲得電子的活性物。" },
      E: { verdict: "correct", reason: "MnO₂在正極反應中被還原，會接受由鋅負極送來的電子。" }
    },
    takeaway: "原電池負極氧化失電子，正極還原得電子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-6": {
    encouragement: "Pb²⁺要配兩個Cl⁻才能電荷相抵，所以沉澱化學式直接是PbCl₂。",
    keyIdea: "Pb²⁺＋2Cl⁻→PbCl₂(s)，離子化合物化學式需總電荷為零。",
    steps: ["硝酸鉛提供Pb²⁺，食鹽提供Cl⁻。", "一個Pb²⁺需要兩個Cl⁻平衡電荷。", "白色沉澱為PbCl₂，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NaNO₃是可溶的旁觀離子組合，不是白色沉澱。" },
      B: { verdict: "incorrect", reason: "Na₂NO₃的電荷比例不正確，也不是硝酸鹽的正確化學式。" },
      C: { verdict: "incorrect", reason: "PbCl中＋2與－1電荷未平衡，化學式不能成立。" },
      D: { verdict: "correct", reason: "Pb²⁺與兩個Cl⁻形成電中性的難溶PbCl₂白色沉澱。" },
      E: { verdict: "incorrect", reason: "反應物沒有提供OH⁻，所以不會生成Pb(OH)₂。" }
    },
    takeaway: "寫離子化合物化學式，第一關就是正負電荷總和為零。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-7": {
    encouragement: "分離要每次只沉澱一種：由表格找選擇性最高的試劑順序。",
    keyIdea: "SO₄²⁻先沉Pb²⁺，Cl⁻再沉Ag⁺，最後S²⁻沉Ni²⁺。",
    steps: ["依表格，Na₂SO₄只使三者中的Pb²⁺沉澱。", "濾掉PbSO₄後，以NaCl沉澱AgCl。", "最後用Na₂S沉澱NiS，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "先加NaCl會同時沉澱Ag⁺與Pb²⁺，無法分開。" },
      B: { verdict: "correct", reason: "硫酸根選擇Pb²⁺、氯離子再選Ag⁺、硫離子最後沉Ni²⁺。" },
      C: { verdict: "incorrect", reason: "NaCl第一步會同時除去Ag⁺、Pb²⁺，失去分離效果。" },
      D: { verdict: "incorrect", reason: "Na₂S第二步會同時沉澱剩餘Ag⁺與Ni²⁺。" },
      E: { verdict: "incorrect", reason: "Na₂S一開始會讓Ag⁺、Pb²⁺、Ni²⁺都沉澱，完全無法分離。" }
    },
    takeaway: "分步沉澱要從最具選擇性的試劑開始，每步過濾後再加下一種。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-8": {
    encouragement: "離子化合物通常熔沸點高，水溶液又因大量離子而導電強；甲同時符合。",
    keyIdea: "甲高溫才分解且1 M溶液導電明顯，最像離子化合物。",
    steps: ["離子晶格作用強，通常需高能量破壞。", "溶於水後產生大量離子，導電電流大。", "甲到400°C仍未沸騰且導電強，答案A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲具極高熱穩定範圍且溶液強導電，符合離子晶體特徵。" },
      B: { verdict: "incorrect", reason: "乙沸點較低且導電很弱，較像分子化合物。" },
      C: { verdict: "incorrect", reason: "丙低沸點又幾乎不導電，明顯不像離子化合物。" },
      D: { verdict: "incorrect", reason: "丁沸點低，雖略導電仍較像部分電離的分子物質。" },
      E: { verdict: "incorrect", reason: "戊沸點極低，常溫可能為氣體，應為分子化合物而非離子晶體。" }
    },
    takeaway: "判斷離子化合物可合看兩證據：高熔沸點與熔融／水溶液能導電。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-9": {
    encouragement: "分子化合物要看低沸點；強電解質又要看水溶液導電很強，戊正好兩者兼具。",
    keyIdea: "戊沸點−84.8°C顯示為小分子，溶液電流最大顯示幾乎完全電離。",
    steps: ["低沸點排除離子晶體，表示分子間作用力較弱。", "強電解質在水中產生大量離子，電流高。", "戊同時低沸點、強導電，所以答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲高溫分解且導電強，較像離子化合物，不是分子化合物。" },
      B: { verdict: "incorrect", reason: "乙雖可能為分子物質，但導電電流太小，不屬強電解質。" },
      C: { verdict: "incorrect", reason: "丙低沸點但幾乎不導電，較像非電解質。" },
      D: { verdict: "incorrect", reason: "丁為低沸點分子物質，但導電程度遠低於戊，較像弱電解質。" },
      E: { verdict: "correct", reason: "戊沸點極低顯示分子性，溶液電流最大則顯示為強電解質。" }
    },
    takeaway: "像HCl這類物質本身是分子，溶於水卻可完全電離成強電解質。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-67": {
    encouragement: "先算每小時需要多少克純葡萄糖，再除以溶液的5%含量。",
    keyIdea: "100/670 mol能量所需葡萄糖約26.9 g；5%溶液需26.9/0.05≈537 g。",
    steps: ["100千卡需葡萄糖100÷670 mol。", "純葡萄糖質量為100÷670×180≈26.9 g。", "5%溶液質量為26.9÷0.05≈537 g，至少選540 g，答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "33.8克的5%溶液只有1.69克葡萄糖，能量遠不足100千卡。" },
      B: { verdict: "incorrect", reason: "67.5克溶液只含3.38克葡萄糖，不足所需約26.9克。" },
      C: { verdict: "incorrect", reason: "135克溶液含6.75克葡萄糖，仍只有所需量約四分之一。" },
      D: { verdict: "incorrect", reason: "270克溶液含13.5克葡萄糖，約為需求的一半。" },
      E: { verdict: "correct", reason: "540克5%溶液含27克葡萄糖，可提供約100.5千卡，達到最低需求。" }
    },
    takeaway: "重量百分濃度5%表示每100克溶液只有5克溶質，不能把溶液全當葡萄糖。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-21": {
    encouragement: "常溫下甲烷是氣體、水是液體、食鹽是固體，因此熔點由低到高很容易排序。",
    keyIdea: "甲烷熔點約91 K、水273 K、NaCl離子晶體約1074 K。",
    steps: ["甲烷小分子作用力弱，熔點最低。", "水在273 K熔化；NaCl離子晶格強，熔點最高。", "合理配對為91、273、1074，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲烷不可能有1074 K高熔點，NaCl也不可能低到91 K。" },
      B: { verdict: "correct", reason: "甲烷91 K、水273 K、NaCl 1074 K符合分子力與離子晶格強弱。" },
      C: { verdict: "incorrect", reason: "把甲烷排到水的熔點並把水排到91 K，物態常識不符。" },
      D: { verdict: "incorrect", reason: "甲烷與NaCl的高低熔點位置錯置，離子晶體應最高。" },
      E: { verdict: "incorrect", reason: "水的熔點不是1074 K，NaCl也不是273 K。" }
    },
    takeaway: "熔點可反映粒子間作用力：小分子低，氫鍵物質較高，離子晶體更高。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-24": {
    encouragement: "紅石蕊變藍先認出鹼；BTB變黃再認出酸，剩下自然是中性鹽水。",
    keyIdea: "甲為NaOH、丙為HCl；等量0.1 M中和生成NaCl，乙原本也是NaCl。",
    steps: ["甲使紅石蕊變藍，所以甲是NaOH。", "丙使BTB變黃，所以丙是HCl。", "甲丙等量中和留NaCl，乙即NaCl，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鹽酸不能使紅石蕊變藍，因此甲不可能是鹽酸。" },
      B: { verdict: "correct", reason: "甲為NaOH、丙為HCl，剩餘乙為NaCl，且中和蒸乾得到白色NaCl。" },
      C: { verdict: "incorrect", reason: "中性NaCl不會使紅石蕊變藍，因此甲不能是NaCl。" },
      D: { verdict: "incorrect", reason: "甲若為HCl不會使紅石蕊變藍，丙NaCl也不會讓BTB變黃。" }
    },
    takeaway: "指示劑先辨酸鹼，中和後蒸乾得到的鹽可作第二層驗證。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-26": {
    encouragement: "把溶解度、酸鹼性、氣味和相對密度一起交叉比對，每種氣體都有獨特組合。",
    keyIdea: "CO₂酸性且密度1.53；O₂微溶且1.11；NH₃易溶鹼性且0.60；H₂極輕且0.07。",
    steps: ["甲酸性且較重，是CO₂；乙微溶且略重於空氣，是O₂。", "丙易溶、鹼性、有味，是NH₃。", "丁極輕且難溶，是H₂，因此答案C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氧氣水溶液不呈酸性，氫氣也不可能有相對空氣密度1.11。" },
      B: { verdict: "incorrect", reason: "氨應有氣味且水溶液呈鹼性，不符合甲的酸性無味。" },
      C: { verdict: "correct", reason: "四者的溶解度、酸鹼性、氣味與密度比全都逐一吻合。" },
      D: { verdict: "incorrect", reason: "甲的酸性與1.53密度明確是CO₂，不是O₂；乙才是O₂。" }
    },
    takeaway: "鑑定氣體不要只靠一項性質，要把密度、溶解度與化學反應一起使用。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-39": {
    encouragement: "同位素看質子數，離子看質子與電子是否相等；兩條規則分開套用即可。",
    keyIdea: "甲乙同為2質子但中子不同；丙丁同為3質子但中子不同；丙3p、2e為離子。",
    steps: ["甲乙質子數同為2、中子不同，互為同位素。", "丙丁質子數同為3、中子不同，也互為同位素。", "丙質子3電子2，帶＋1電，是離子，所以選A、E、F。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲乙都有2個質子但中子分別1、2，互為同位素。" },
      B: { verdict: "incorrect", reason: "乙有2個質子、丙有3個質子，是不同元素，不是同位素。" },
      C: { verdict: "incorrect", reason: "丙質子數與甲乙不同，三者不可能全是同一元素的同位素。" },
      D: { verdict: "incorrect", reason: "乙質子與電子皆2，是中性原子；丁質子與電子皆3，也不是離子。" },
      E: { verdict: "correct", reason: "丙丁都有3個質子但中子為3、4，互為同位素。" },
      F: { verdict: "correct", reason: "丙有3個質子卻只有2個電子，淨帶＋1電，確實是離子。" }
    },
    takeaway: "同位素比質子與中子；離子則比質子與電子，判斷標準不同。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-51": {
    encouragement: "鹽酸加小蘇打產生CO₂；它比空氣重又不助燃，所以會從低處開始讓蠟燭熄滅。",
    keyIdea: "HCl＋NaHCO₃→NaCl＋CO₂＋H₂O；CO₂下沉並排開空氣。",
    steps: ["酸與碳酸氫鹽反應放出CO₂。", "CO₂密度比空氣大，先累積在容器底部。", "CO₂不助燃，因此低蠟燭先熄、再往高處，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鹽酸與NaHCO₃產生的是CO₂，不是一氧化碳。" },
      B: { verdict: "incorrect", reason: "此酸鹼反應不會生成O₂，氧元素最後在CO₂與水中。" },
      C: { verdict: "incorrect", reason: "CO₂不助燃，不會讓低處火焰逐漸旺盛。" },
      D: { verdict: "correct", reason: "較重的CO₂由底部累積並排開空氣，使蠟燭由低到高依序熄滅。" },
      E: { verdict: "incorrect", reason: "CO₂會降低火焰周圍氧濃度，蠟燭一定受到影響。" }
    },
    takeaway: "CO₂比空氣重且不助燃，因此可呈現像液體般由低處逐步滅火的效果。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-52": {
    encouragement: "NaOH有0.2莫耳；若每個CO₂最後變一個HCO₃⁻，就需要0.2莫耳CO₂與NaHCO₃。",
    keyIdea: "0.2 L×1 M=0.2 mol NaOH；CO₂與NaHCO₃生成比1：1，需0.2×84=16.8 g。",
    steps: ["NaOH莫耳數為0.200×1＝0.200 mol。", "完全吸收成HCO₃⁻時，每1 mol CO₂消耗1 mol OH⁻。", "產生0.2 mol CO₂需0.2 mol NaHCO₃，即16.8 g，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "21.0克為0.25 mol NaHCO₃，超過最低需要的0.20 mol。" },
      B: { verdict: "correct", reason: "0.20 mol NaHCO₃質量為0.20×84＝16.8克，恰好提供所需CO₂。" },
      C: { verdict: "incorrect", reason: "8.4克只有0.10 mol，生成CO₂不足以消耗0.20 mol NaOH。" },
      D: { verdict: "incorrect", reason: "4.2克為0.05 mol，只達需求量四分之一。" },
      E: { verdict: "incorrect", reason: "2.1克為0.025 mol，遠少於所需0.20 mol。" }
    },
    takeaway: "溶液反應先用M×V求莫耳，再沿著一比一反應關係換到固體質量。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  }
});
