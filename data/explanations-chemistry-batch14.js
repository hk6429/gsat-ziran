window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-85-33": {
    encouragement: "固定體積時，壓力和絕對溫度成正比；把體積壓小，只要比較直線斜率就好。",
    keyIdea: "理想氣體滿足P＝nRT/V；V變小後，P對T圖的斜率nR/V會變大。",
    steps: ["原來的丙線代表較大的固定體積。", "壓小體積後，同溫壓力較高，應選比丙更陡且通過原點的甲線，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丙是原來體積的實驗線，體積壓小後斜率必須增加。" },
      B: { verdict: "correct", reason: "甲通過原點且比丙陡，表示同溫下壓力較大、體積較小。" },
      C: { verdict: "incorrect", reason: "戊比丙平緩，代表體積變大而不是變小。" },
      D: { verdict: "incorrect", reason: "乙不是通過絕對零度原點的正比直線，不符合固定量理想氣體。" },
      E: { verdict: "incorrect", reason: "丁的斜率比丙小，與壓縮後壓力升高的結果相反。" }
    },
    takeaway: "P－T圖在定體積下是直線；體積愈小，直線斜率愈大。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-85-34": {
    encouragement: "開關打開後兩球壓力相同；把兩邊原有的PV加起來，再除以總體積即可。",
    keyIdea: "定溫下總莫耳數守恆，所以平衡壓力P＝(P₁V₁＋P₂V₂)/(V₁＋V₂)。",
    steps: ["原有PV總和＝1.5×0.4＋3×0.2＝1.2 atm·L。", "總體積為0.6 L，平衡壓力＝1.2÷0.6＝2 atm，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 atm低於依兩球氣體總量算得的平衡壓力。" },
      B: { verdict: "incorrect", reason: "1.5 atm只等於左球原壓力，沒有算入右球氣體。" },
      C: { verdict: "correct", reason: "兩邊PV總和除以總體積，得到2 atm。" },
      D: { verdict: "incorrect", reason: "2.5 atm不是由總氣體量與總體積守恆算出的結果。" }
    },
    takeaway: "同溫混合氣體時，可用總PV除以總體積求最後壓力。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-85-38": {
    encouragement: "三份金屬莫耳數相同，所以最後產生的氫氣一樣多；不同的只是反應快慢。",
    keyIdea: "Li、Na、K與水反應的莫耳比相同，終點氣體體積相同；活性K＞Na＞Li。",
    steps: ["等莫耳Li、Na、K最後都產生等莫耳H₂，因此三條曲線平台相同。", "K最快、Na次之、Li最慢，符合A圖。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "三者終點相同，且K最早到平台、Na次之、Li最慢。" },
      B: { verdict: "incorrect", reason: "把三者最後產氣量畫成不同，但等莫耳金屬應產生等量H₂。" },
      C: { verdict: "incorrect", reason: "三條曲線完全重合，忽略K、Na、Li反應速率不同。" },
      D: { verdict: "incorrect", reason: "雖呈現Li較慢，卻把最後產氣量畫成Li最多。" },
      E: { verdict: "incorrect", reason: "平台高度不同，且等莫耳條件下終點不應依金屬活性改變。" }
    },
    takeaway: "反應速率決定多久完成；反應物莫耳數與係數決定最後產物量。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-85-39": {
    encouragement: "未飽和溶液要變飽和，就要讓溶解度降低；看兩條曲線往哪個方向下降。",
    keyIdea: "甲的溶解度隨溫度上升而增加，降溫可降低溶解度；乙則相反，要升溫。",
    steps: ["甲曲線向右上升，所以降低甲的溫度可讓飽和上限下降。", "乙曲線向右下降，所以升高乙的溫度可讓飽和上限下降，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "升高甲的溫度會提高甲的溶解度，使它離飽和更遠。" },
      B: { verdict: "incorrect", reason: "降低乙的溫度會提高乙的溶解度，不利於達到飽和。" },
      C: { verdict: "correct", reason: "甲降溫、乙升溫都會使各自的溶解度下降。" },
      D: { verdict: "incorrect", reason: "甲升溫與乙降溫都會使溶解度提高，方向完全相反。" }
    },
    takeaway: "不加溶質而要變飽和，可調溫讓「可溶上限」降到目前濃度。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-85-55": {
    encouragement: "安全題先問自己：會不會造成強烈放熱噴濺，或讓有毒物直接進入口中？",
    keyIdea: "水不可直接倒入濃硫酸；實驗室也絕不可用嘴吸取液體。",
    steps: ["B把水加入濃硫酸，局部劇烈放熱，可能沸騰噴濺。", "D以口吸移液管，可能把化學品吸入口中，兩者都絕對禁止。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖示以手輕搧氣味到鼻前，不把鼻子直接湊近，是正確聞氣味方式。" },
      B: { verdict: "correct", reason: "水直接加入濃硫酸會在表面急遽放熱並噴濺，必須改成酸慢慢加到水中。" },
      C: { verdict: "incorrect", reason: "圖示為摺疊濾紙並放入漏斗，是一般過濾的正常操作。" },
      D: { verdict: "correct", reason: "用嘴吸移液管可能誤吸有毒或腐蝕性液體，絕對禁止。" },
      E: { verdict: "incorrect", reason: "量筒讀值時讓視線與液面同高，可避免視差。" }
    },
    takeaway: "稀釋強酸要「酸入水」，吸量液體要用安全吸球，絕不用嘴。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-86-30": {
    encouragement: "燒杯刻度只能估讀，先看相鄰刻度差，再讀凹液面的最低點。",
    keyIdea: "圖中每小格50 mL，水面最低點約在370 mL；燒杯不能讀到小數後兩位。",
    steps: ["以水的凹液面最低點對刻度，位置約在350與400 mL之間。", "合理估讀為370 mL，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "凹液面最低點約對到370 mL，且精度符合燒杯粗略刻度。" },
      B: { verdict: "incorrect", reason: "385 mL高於圖示液面位置，也超出燒杯可合理估讀的細度。" },
      C: { verdict: "incorrect", reason: "400 mL刻度高於凹液面最低點。" },
      D: { verdict: "incorrect", reason: "不但位置不對，燒杯也不可能精確量到0.01 mL。" }
    },
    takeaway: "透明水溶液讀凹液面最低點；儀器刻度多粗，答案就不能寫得過度精密。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-87-5": {
    encouragement: "類金屬就在週期表金屬與非金屬交界的階梯線附近，直接找兩區邊界。",
    keyIdea: "圖中丁為金屬區、戊為非金屬區，兩者交界分布著常見類金屬。",
    steps: ["週期表左下多為金屬，右上多為非金屬。", "類金屬沿兩者交界排列，即丁、戊區域之間，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙、丙主要位在金屬區內部，不是金屬與非金屬的交界。" },
      B: { verdict: "incorrect", reason: "丙、丁仍以金屬元素區域為主，不是階梯狀邊界。" },
      C: { verdict: "correct", reason: "丁與戊交界正是金屬、非金屬性質轉換的階梯區。" },
      D: { verdict: "incorrect", reason: "戊與己靠近非金屬和惰性氣體區，不是類金屬主要位置。" },
      E: { verdict: "incorrect", reason: "乙與丁並非圖中相鄰的金屬、非金屬邊界。" }
    },
    takeaway: "類金屬常沿B、Si、Ge等元素所在的階梯線分布。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-88-27": {
    encouragement: "把電子和核內粒子分開比較：電子質量大約只有質子或中子的兩千分之一。",
    keyIdea: "電子遠輕於質子、中子與由多個核子組成的α粒子。",
    steps: ["氫離子幾乎就是一個質子，氫原子還多一個電子。", "電子本身質量最小，因此選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氫離子H⁺主要是一個質子，質量約為電子的1836倍。" },
      B: { verdict: "incorrect", reason: "氫原子含質子與電子，總質量遠大於單一電子。" },
      C: { verdict: "correct", reason: "電子是選項中質量最小的基本粒子。" },
      D: { verdict: "incorrect", reason: "中子質量與質子相近，遠大於電子。" },
      E: { verdict: "incorrect", reason: "α粒子由兩個質子和兩個中子組成，質量最大。" }
    },
    takeaway: "原子的質量幾乎集中在原子核；電子質量非常小。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-88-28": {
    encouragement: "純物質看的是組成是否固定，不是能不能被化學方法分解。",
    keyIdea: "純氯化鈉具有固定組成，是純物質；糖水與不鏽鋼都是混合物。",
    steps: ["元素與化合物都可以是純物質，只要組成固定。", "食鹽題意指氯化鈉，組成固定，所以B正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "純水雖能被電解成別種物質，仍是組成固定的純化合物。" },
      B: { verdict: "correct", reason: "氯化鈉具有固定的Na與Cl比例，屬純物質。" },
      C: { verdict: "incorrect", reason: "糖水含糖和水，比例可變，是均勻混合物。" },
      D: { verdict: "incorrect", reason: "不鏽鋼是鐵、鉻、鎳等形成的合金，屬混合物。" }
    },
    takeaway: "純物質包括元素與化合物；溶液和合金通常是混合物。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-88-29": {
    encouragement: "陰極射線是電子束，方向從負極射向正極；先檢查每張圖的電極方向。",
    keyIdea: "A圖把射線與陰影方向畫反；正確裝置應由陰極放出電子，障礙物在後方投影。",
    steps: ["電子從負極出發，沿近似直線朝正極方向運動。", "A圖標示的正負極與陰影位置不符合這條路徑，因此A不正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "圖中正極在射線來源一側，且陰影位置與陰極射線行進方向不合。" },
      B: { verdict: "incorrect", reason: "陰極射線能推動小轉輪，可顯示電子束具有動量，裝置合理。" },
      C: { verdict: "incorrect", reason: "電子束可受電場偏轉，且偏向正極板，圖示原理正確。" }
    },
    takeaway: "陰極射線帶負電，從陰極出發，會往電場的正極方向偏轉。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-88-34": {
    encouragement: "相圖先找高壓低溫、居中區域與低壓高溫區，通常依序是固、液、氣。",
    keyIdea: "圖中甲位於低溫側為固態，乙在兩條相界間為液態，丙在高溫低壓側為氣態。",
    steps: ["低溫的甲區對應固態，高溫低壓的丙區對應氣態。", "剩下中央乙區為液態，所以順序固、液、氣，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲在低溫側，不可能是氣態；丙在高溫側也不是固態。" },
      B: { verdict: "incorrect", reason: "甲、乙的固氣判定顛倒，乙位於液態區。" },
      C: { verdict: "correct", reason: "甲、乙、丙依序位於固態、液態、氣態區。" },
      D: { verdict: "incorrect", reason: "把甲判成液態、乙判成氣態，與相界位置不符。" },
      E: { verdict: "incorrect", reason: "乙不是氣態、丙也不是液態。" }
    },
    takeaway: "相圖的區域代表單一相；跨過邊界才會改變物態。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-35": {
    encouragement: "化學反應會重新組合原子，但不會憑空增加或消失；再看圖上是否把熱寫在產物側。",
    keyIdea: "氫與氧生成水是放熱的化學變化，反應前後H、O原子數各自守恆。",
    steps: ["反應前是H₂、O₂，反應後變成H₂O，分子種類已改變。", "圖示產生熱且各原子數守恆，因此D正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂和O₂轉成H₂O，分子種類明顯改變。" },
      B: { verdict: "incorrect", reason: "O₂是雙原子分子，但H₂O一個分子有三個原子。" },
      C: { verdict: "incorrect", reason: "原子種類守恆是化學反應特徵之一，不代表只是物理變化。" },
      D: { verdict: "correct", reason: "反應放熱，且反應前後氫、氧原子數目分別相同。" }
    },
    takeaway: "化學變化會產生新分子，但元素種類與各元素原子數保持守恆。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-40": {
    encouragement: "氨氣非常易溶於水、密度又比空氣小，所以要用乾燥且倒置的容器收集。",
    keyIdea: "製備試管需加熱且管口略向下；NH₃不能排水，應以向下排空氣法收集。",
    steps: ["排除用水集氣的C、D，因為NH₃會迅速溶於水。", "氨比空氣輕，應進入倒置集氣管，符合A圖。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "加熱裝置正確，且以倒置乾燥容器收集比空氣輕、易溶於水的NH₃。" },
      B: { verdict: "incorrect", reason: "集氣管正立，較適合比空氣重的氣體，NH₃容易由上方逸出。" },
      C: { verdict: "incorrect", reason: "使用排水集氣法，NH₃會大量溶於水。" },
      D: { verdict: "incorrect", reason: "同樣經水收集，不適用於極易溶於水的氨氣。" }
    },
    takeaway: "收氣法先看水溶性，再看密度：NH₃用向下排空氣法。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-41": {
    encouragement: "實驗儀器各有用途；溫度計是量溫度，不是攪拌棒。",
    keyIdea: "NaOH溶解會放熱，用溫度計攪拌不但易損壞，也會影響安全與測量。",
    steps: ["逐項檢查圖示操作是否符合儀器用途。", "B把溫度計當攪拌棒使用，是不正確操作。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "火焰騰空表示空氣混入過多，適度減小空氣孔可使火焰穩定。" },
      B: { verdict: "correct", reason: "溫度計玻璃易破，不能代替攪拌棒攪拌NaOH溶液。" },
      C: { verdict: "incorrect", reason: "視線與液面刻度同高可減少視差，讀值較準確。" },
      D: { verdict: "incorrect", reason: "依圖示輕彎滴管尾端可把尖端氣泡移出，是該滴管的正確準備操作。" }
    },
    takeaway: "攪拌要用玻璃棒；量溫度才用溫度計。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-42": {
    encouragement: "鋅銅電池中，U形管不是裝飾，它讓離子移動，維持兩杯溶液的電中性。",
    keyIdea: "鹽橋內裝電解質溶液；鋅杯配鋅鹽、銅杯配銅鹽，伏特計同號相接。",
    steps: ["U形管是鹽橋，內含不干擾反應的電解質。", "因此A正確；其餘選項把溶液、離子方向或儀表接法弄反。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "U形鹽橋內含電解質溶液，讓離子遷移並完成內部電路。" },
      B: { verdict: "incorrect", reason: "銅極所在燒杯通常盛銅鹽溶液，不是鋅鹽。" },
      C: { verdict: "incorrect", reason: "鹽橋陽離子會移向正極槽以補充被消耗的正離子，不是游向負極。" },
      D: { verdict: "incorrect", reason: "量正電壓時，電池正極應接伏特計正端。" }
    },
    takeaway: "鹽橋負責離子導電與電中性；外電路則由電子導電。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-43": {
    encouragement: "氣體的體積會隨絕對溫度平順增加；看300 K時哪些曲線已進入斜直線氣體段。",
    keyIdea: "圖中300 K時甲與丙都在氣態膨脹線上；乙、丁仍在凝聚態範圍。",
    steps: ["在橫軸找到300 K，向上比較四條曲線所在區段。", "甲、丙呈氣體體積隨溫度增加的斜線，因此選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙到約370 K才出現汽化的大幅體積變化，300 K不是氣態。" },
      B: { verdict: "incorrect", reason: "丙是氣態，但乙在300 K仍不是氣態。" },
      C: { verdict: "incorrect", reason: "丁在約310 K附近才改變狀態，300 K尚非氣態。" },
      D: { verdict: "correct", reason: "甲與丙在300 K都位於連續的氣體膨脹線。" },
      E: { verdict: "incorrect", reason: "乙、丁在300 K都沒有進入圖中的氣態線段。" }
    },
    takeaway: "物質汽化時體積會突然大增；汽化後的氣體體積隨溫度近似線性增加。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-44": {
    encouragement: "一大氣壓下，水在約373 K沸騰；找圖中在這個溫度體積突然增大的物質。",
    keyIdea: "乙在約370多K發生液氣相變，最符合水的正常沸點373 K。",
    steps: ["水在1 atm的沸點是100℃＝373 K。", "圖中乙在約373 K出現汽化的體積突增，所以選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲在很低溫就已進入氣態，不符合水的沸點。" },
      B: { verdict: "correct", reason: "乙的沸點約在373 K，與水在1 atm的沸點相符。" },
      C: { verdict: "incorrect", reason: "丙在圖示低溫範圍已是氣體，不像水。" },
      D: { verdict: "incorrect", reason: "丁的相變溫度約310 K，明顯低於水的沸點。" }
    },
    takeaway: "攝氏溫度加273可換成K；100℃就是約373 K。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-90-74": {
    encouragement: "三段敘述各有招牌線索：硫酸與硫酸鋇、矽半導體與玻璃、氮氧化物與酸雨。",
    keyIdea: "甲為S、乙為Si、丙為N，對應選項E。",
    steps: ["胃部X光造影用難溶BaSO₄，且H₂SO₄是重要工業酸，所以甲為S。", "半導體與SiO₂玻璃指向Si；汽車NOₓ形成酸性溶液指向N，故選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "把甲判成N，但題述重要工業酸與硫酸鋇應指向S。" },
      B: { verdict: "incorrect", reason: "乙不是B；廣泛半導體材料與玻璃光纖主要指矽。" },
      C: { verdict: "incorrect", reason: "甲雖可能誤認P，但胃部造影鹽BaSO₄明確含S。" },
      D: { verdict: "incorrect", reason: "丙不是C；都市空污中的NOₓ與水形成酸性物質，元素是N。" },
      E: { verdict: "correct", reason: "S、Si、N依序完整符合硫酸、矽材料與氮氧化物三段線索。" },
      F: { verdict: "incorrect", reason: "乙與丙對調；半導體玻璃是Si，空污酸性氧化物是N。" }
    },
    takeaway: "生活用途可反推元素：硫酸鋇找S、晶片玻璃找Si、NOₓ找N。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-58": {
    encouragement: "先用最直接的觀察：溶液無色可排除藍色銅離子；已證明有碳酸根時，鈣離子不能同時存在。",
    keyIdea: "無水CuSO₄溶水呈藍色，故D不存在；粉末含Na₂CO₃時若有CaCl₂會生成沉澱，與透明溶液矛盾。",
    steps: ["實驗一得到無色透明溶液，排除會形成藍色Cu²⁺溶液的D。", "實驗二證明有Na₂CO₃；若同時有CaCl₂，實驗一會有CaCO₃沉澱，所以C也不存在。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "後續氯離子檢驗受加入鹽酸干擾，不能確定原粉末沒有NaCl。" },
      B: { verdict: "incorrect", reason: "KCl無色且可溶，報告不能證明它一定不存在。" },
      C: { verdict: "correct", reason: "已知有Na₂CO₃時，若含CaCl₂會生成CaCO₃沉澱，不會得到透明溶液X。" },
      D: { verdict: "correct", reason: "無水CuSO₄溶於水會產生藍色Cu²⁺溶液，與無色溶液X不符。" },
      E: { verdict: "incorrect", reason: "BaCl₂加入酸化後溶液產生白色沉澱，正支持Na₂SO₄存在。" },
      F: { verdict: "incorrect", reason: "加入鹽酸冒氣泡證明原粉末含Na₂CO₃。" }
    },
    takeaway: "混合物鑑定要把顏色、沉澱與氣體三種證據串在一起。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-59": {
    encouragement: "冒氣泡與酸化後的鋇鹽沉澱，是辨認碳酸根和硫酸根的兩個清楚指紋。",
    keyIdea: "HCl使CO₃²⁻放出CO₂，證明Na₂CO₃；酸化後Ba²⁺仍形成BaSO₄，證明Na₂SO₄。",
    steps: ["實驗二加鹽酸產生氣泡，表示有Na₂CO₃，選F。", "除去碳酸根後加BaCl₂仍有白色BaSO₄，表示有Na₂SO₄，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "AgCl檢驗前已加入鹽酸，無法確定氯離子原本來自NaCl。" },
      B: { verdict: "incorrect", reason: "同樣無法由氯離子結果區分或確認KCl。" },
      C: { verdict: "incorrect", reason: "若含CaCl₂並同時含Na₂CO₃，實驗一應出現沉澱，故它反而被排除。" },
      D: { verdict: "incorrect", reason: "溶液X無色，排除會產生藍色溶液的CuSO₄。" },
      E: { verdict: "correct", reason: "酸化後與Ba²⁺形成不溶白色BaSO₄，證明Na₂SO₄存在。" },
      F: { verdict: "correct", reason: "與HCl反應放出CO₂氣泡，證明Na₂CO₃存在。" }
    },
    takeaway: "CO₃²⁻遇酸放CO₂；SO₄²⁻遇Ba²⁺形成不溶BaSO₄。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-60": {
    encouragement: "題目只要回答有誰、沒有誰；做到能提供這些證據的步驟就可以停。",
    keyIdea: "實驗一至三已足以判斷C、D不存在與E、F存在；實驗四、五不會增加答案所需資訊。",
    steps: ["實驗一到三已取得無色、遇酸放氣及酸化後鋇鹽沉澱的關鍵證據。", "實驗四只是分離沉澱；實驗五又受先前加入HCl干擾，所以D、E可省略。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗一的無色透明結果可排除CuSO₄，且為後續溶液檢驗必要起點。" },
      B: { verdict: "incorrect", reason: "實驗二證明Na₂CO₃存在，也是排除CaCl₂的重要證據。" },
      C: { verdict: "incorrect", reason: "實驗三證明酸化後仍有硫酸根沉澱，確認Na₂SO₄存在。" },
      D: { verdict: "correct", reason: "只回答58、59時，看到實驗三沉澱已足夠，不必再完全沉澱、過濾。" },
      E: { verdict: "correct", reason: "鹽酸在實驗二已加入Cl⁻，之後AgCl沉澱不能判斷原粉末的NaCl或KCl。" }
    },
    takeaway: "探究實驗要問每一步是否真的增加可判讀的新證據。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-13": {
    encouragement: "沉澱化學式先看離子電荷：Ni²⁺和S²⁻正負剛好一比一。",
    keyIdea: "Ni²⁺與S²⁻以1：1組合，形成電中性的NiS黑色沉澱。",
    steps: ["硝酸鎳提供Ni²⁺，硫化鈉提供S²⁻。", "電荷大小相同、符號相反，化學式為NiS，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Ni²⁺和S²⁻以1：1比例形成電中性的NiS。" },
      B: { verdict: "incorrect", reason: "Ni₂S會留下總電荷＋2，不能形成中性化合物。" },
      C: { verdict: "incorrect", reason: "NiS₂若把硫視為S²⁻，總負電過多。" },
      D: { verdict: "incorrect", reason: "Ag₂S是銀離子與硫離子的沉澱，本題溶液提供的是Ni²⁺。" },
      E: { verdict: "incorrect", reason: "MgS₂元素與比例都不合，本題沉澱含鎳。" }
    },
    takeaway: "離子化合物的下標要讓總正電與總負電恰好抵消。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-14": {
    encouragement: "分離不是一次全沉掉，而是每一步只沉一種；照表格從最有選擇性的試劑開始。",
    keyIdea: "依序用Cl⁻沉Ag⁺、SO₄²⁻沉Ba²⁺、S²⁻沉Ni²⁺，最後OH⁻沉Mg²⁺。",
    steps: ["先加NaCl只除Ag⁺，再加Na₂SO₄只除Ba²⁺。", "剩下Ni²⁺、Mg²⁺時，Na₂S只沉NiS，最後NaOH沉Mg(OH)₂，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一開始加NaOH會同時沉澱Ag⁺、Mg²⁺與Ni²⁺，無法分開。" },
      B: { verdict: "incorrect", reason: "先加Na₂S會同時沉澱Ag₂S與NiS。" },
      C: { verdict: "incorrect", reason: "Na₂SO₄雖可先除Ba²⁺，但接著Na₂S會同時沉Ag⁺與Ni²⁺。" },
      D: { verdict: "incorrect", reason: "前兩步可行，但第三步NaOH會同時沉Mg²⁺與Ni²⁺。" },
      E: { verdict: "correct", reason: "每一步依序只沉Ag⁺、Ba²⁺、Ni²⁺、Mg²⁺，可達到分離。" }
    },
    takeaway: "選擇性沉澱要安排順序，讓每次加入試劑只抓走一種離子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-66": {
    encouragement: "理想氣體的指標PV/nRT等於1；曲線愈接近虛線1，就愈理想。",
    keyIdea: "低壓、高溫可減弱分子體積與分子間作用力的影響，使真實氣體接近理想氣體。",
    steps: ["由圖20在常溫1 atm比較，N₂最接近1；高溫時三條曲線都趨近1。", "綜合兩圖，壓力趨近0且溫度很高時皆近理想，選B、D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖19在0℃低壓附近，H₂比CH₄更接近理想氣體線。" },
      B: { verdict: "correct", reason: "圖20常溫附近N₂曲線最靠近PV/nRT＝1。" },
      C: { verdict: "incorrect", reason: "同莫耳下體積很小代表壓力很大，高壓時偏離理想狀態更明顯。" },
      D: { verdict: "correct", reason: "圖20顯示溫度升高後，各氣體曲線都逐漸靠近1。" },
      E: { verdict: "correct", reason: "兩圖共同支持低壓、高溫時分子間影響最小，四種氣體皆較理想。" },
      F: { verdict: "incorrect", reason: "高壓、接近0 K正是分子作用最明顯的條件，最不理想。" }
    },
    takeaway: "真實氣體在「低壓、高溫」時最接近理想氣體。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-43": {
    encouragement: "環己烷層出現顏色表示有碘I₂；碘離子要在失電子的陽極變成碘。",
    keyIdea: "Y側發生2I⁻→I₂＋2e⁻，所以Y電極是陽極；電解池陽極接直流電源正極。",
    steps: ["Y試管環己烷顯色，證明Y側生成I₂。", "I⁻氧化成I₂發生在陽極，而電解池陽極是正極，選A、C。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "電解池的陽極連接直流電源正極。" },
      B: { verdict: "incorrect", reason: "負極是陰極，會進行還原，不會把I⁻氧化成I₂。" },
      C: { verdict: "correct", reason: "Y側生成I₂，代表I⁻失電子，該電極是陽極。" },
      D: { verdict: "incorrect", reason: "陰極進行還原；Y側觀察到的是I⁻氧化產物。" }
    },
    takeaway: "電解池中陽極接正極並發生氧化；陰極接負極並發生還原。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-44": {
    encouragement: "先把兩極半反應寫出來：Y產碘，X則是水還原成氫氣與OH⁻。",
    keyIdea: "陰極X產H₂與OH⁻；陽極Y產I₂。混合後仍留下KOH，使整體呈鹼性。",
    steps: ["X陰極：2H₂O＋2e⁻→H₂＋2OH⁻，所以有氣泡。", "Y陽極：2I⁻→I₂＋2e⁻；整體生成KOH，混合後呈鹼性，選A、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "X為陰極，水被還原產生H₂氣泡。" },
      B: { verdict: "incorrect", reason: "Y主要氧化I⁻生成I₂，不能由此說pH必然逐漸下降。" },
      C: { verdict: "incorrect", reason: "X側沒有生成I₂，加入澱粉不會出現碘的藍黑色。" },
      D: { verdict: "correct", reason: "總反應留下KOH；取出隔板混合後，溶液呈鹼性。" }
    },
    takeaway: "KI水溶液電解：陽極產碘，陰極產氫氣與氫氧根。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-59": {
    encouragement: "木炭不是全是碳，先乘90%；再用C變CO₂時的質量比44/12換算。",
    keyIdea: "10 kg木炭含9 kg碳；完全燃燒後CO₂質量為9×44/12＝33 kg。",
    steps: ["碳的質量＝10×90%＝9 kg。", "C＋O₂→CO₂，12 g C生成44 g CO₂，所以9×44/12＝33 kg，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "44是CO₂莫耳質量，不能直接當成公斤答案。" },
      B: { verdict: "correct", reason: "9 kg碳依44/12的質量比生成33 kg CO₂。" },
      C: { verdict: "incorrect", reason: "22 kg少算了由9 kg碳換算出的完整CO₂質量。" },
      D: { verdict: "incorrect", reason: "11 kg只相當於部分換算，沒有正確套用44/12。" },
      E: { verdict: "incorrect", reason: "5.5 kg甚至小於原有碳質量，不符合氧加入後CO₂質量增加。" }
    },
    takeaway: "燃燒後CO₂比原碳更重，是因為氧氣中的氧也進入產物。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-99-31": {
    encouragement: "加入鹼後，溶液會先到中性；BTB在中性時呈綠色，酚酞仍無色。",
    keyIdea: "由酸性黃色走向鹼性藍色時，BTB會經過中性綠色。",
    steps: ["甲杯起初含HCl，BTB呈黃色。", "接近中和點時BTB呈綠色、PP仍無色，所以X為綠色，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "黃色是起始酸性顏色，不是由黃轉藍之間的新顏色X。" },
      B: { verdict: "correct", reason: "BTB在中性附近呈綠色，正是黃色到藍色的過渡。" },
      C: { verdict: "incorrect", reason: "PP雖在中性無色，但溶液中還有呈綠色的BTB。" },
      D: { verdict: "incorrect", reason: "紫色需同時有藍色BTB與粉紅PP，較強鹼時才可能出現。" },
      E: { verdict: "incorrect", reason: "PP要到pH約8.2以上才變粉紅，中性時不顯色。" }
    },
    takeaway: "多種指示劑混在一起時，要把每一種當下的顏色疊加判斷。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-99-32": {
    encouragement: "把酸鹼莫耳數算清楚，就知道最後是強鹼性；再把BTB藍與PP粉紅混在一起。",
    keyIdea: "HCl有0.003 mol，NaOH有0.004 mol，剩0.001 mol OH⁻；BTB藍、PP粉紅合看呈紫色。",
    steps: ["酸＝0.1×0.030＝0.003 mol；鹼＝0.2×0.020＝0.004 mol，鹼過量。", "強鹼性下BTB為藍、PP為粉紅，混合呈紫色，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "黃色表示酸性，但計算得NaOH過量。" },
      B: { verdict: "incorrect", reason: "綠色接近中性；最後仍有0.001 mol OH⁻。" },
      C: { verdict: "incorrect", reason: "兩種指示劑在強鹼中都會顯色，不會無色。" },
      D: { verdict: "correct", reason: "藍色BTB與粉紅色PP共同顯色，整體呈紫色。" },
      E: { verdict: "incorrect", reason: "只考慮PP的粉紅，漏掉同時存在的藍色BTB。" }
    },
    takeaway: "先以莫耳數判酸鹼，再決定各指示劑顏色，順序最穩。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-99-46": {
    encouragement: "題幹已把反應物、產物都列好；配平後再看誰的氧化數升降。",
    keyIdea: "配平得x＝2、y＝6；生成的有機物在反應式中明列為CH₂O。",
    steps: ["由H守恆：16＝4＋2y，得y＝6；再由O守恆得x＝2。", "H₂S中的S由−2升到0，是還原劑；CO₂中的C由＋4降到0，是氧化劑，故只有E正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂S中的S氧化數上升、失去電子，所以H₂S是還原劑。" },
      B: { verdict: "incorrect", reason: "CO₂中的C得到電子、氧化數下降，因此CO₂是氧化劑。" },
      C: { verdict: "incorrect", reason: "配平氧原子可得x＝2，不是4。" },
      D: { verdict: "incorrect", reason: "配平氫原子可得y＝6，不是4。" },
      E: { verdict: "correct", reason: "反應式明列硫化菌生成的有機物質為CH₂O。" }
    },
    takeaway: "氧化數上升者是還原劑；氧化數下降者是氧化劑。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-99-47": {
    encouragement: "逐一看H、O、S在反應前後的氧化數；只有氫一直保持＋1。",
    keyIdea: "H在H₂S、CH₂O與H₂O中皆為＋1；S由−2變0，部分O由0變−2。",
    steps: ["反應前H₂S中的H為＋1，產物CH₂O與H₂O中的H也都是＋1。", "S與O有氧化數改變，所以只有H前後相同，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "所有含氫物質中H的氧化數皆為＋1。" },
      B: { verdict: "incorrect", reason: "O₂中的O為0，進入產物後為−2，氧化數改變。" },
      C: { verdict: "incorrect", reason: "H₂S中的S為−2，生成S₈後為0。" },
      D: { verdict: "incorrect", reason: "H不變，但O有一部分由0降為−2。" },
      E: { verdict: "incorrect", reason: "O與S都在反應中改變氧化數。" }
    },
    takeaway: "判氧化數要追蹤同一元素在反應物與產物中的數值。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-99-63": {
    encouragement: "先守恆氮原子：左邊共有4個N，所以氣體X最自然是NO₂。",
    keyIdea: "硝酸銅熱分解為CuO、NO₂與O₂，配平式為2Cu(NO₃)₂→2CuO＋4NO₂＋O₂。",
    steps: ["左邊有4個N，若X為NO₂，係數n＝4可守恆氮。", "再檢查氧：左12個，右2＋8＋2＝12個，完全平衡，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若生成NO，配合題式的O₂仍無法得到常見且正確的配平結果。" },
      B: { verdict: "correct", reason: "令n＝4時，Cu、N、O三種原子都守恆，X為NO₂。" },
      C: { verdict: "incorrect", reason: "N₂O的氮氧比例與硝酸銅典型熱分解產物不符。" },
      D: { verdict: "incorrect", reason: "N₂O₃不能和題式中的CuO、O₂一起完成正確配平。" },
      E: { verdict: "incorrect", reason: "N₂O₅不是硝酸銅加熱時放出的主要含氮氣體。" }
    },
    takeaway: "金屬硝酸鹽熱分解常見產物包含金屬氧化物、NO₂與O₂。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-99-64": {
    encouragement: "鹵素可先當成氫來算不飽和度；要有苯環，至少需要4個不飽和度。",
    keyIdea: "C₈H₆Br₄把Br換算成H後為C₈H₁₀，不飽和度為4，符合一個苯環。",
    steps: ["鹵素在不飽和度計算中視同H，公式為(2C＋2－H－X)/2。", "B得(18－6－4)/2＝4，足以形成苯環；其餘皆小於4。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "C₇H₇Cl₃的不飽和度為3，不足以包含苯環。" },
      B: { verdict: "correct", reason: "C₈H₆Br₄的不飽和度為4，符合苯環的基本不飽和度。" },
      C: { verdict: "incorrect", reason: "C₈H₆F₆的不飽和度為3，不足以形成苯環。" },
      D: { verdict: "incorrect", reason: "C₉H₉Cl₅的不飽和度為3，不符合苯衍生物。" },
      E: { verdict: "incorrect", reason: "C₉H₇F₉的不飽和度為2，更不足以形成苯環。" }
    },
    takeaway: "一個苯環含三個雙鍵加一個環，總不飽和度為4。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-20": {
    encouragement: "分子物質通常熔、沸點較低；金屬鍵與離子鍵物質往往熔點很高。",
    keyIdea: "甲、丁都是共價鍵且熔沸點低，最可能由獨立分子組成。",
    steps: ["甲在極低溫就熔沸、25℃為氣體，符合小分子元素。", "丁在0～100℃為液體，也符合分子化合物；所以選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙為金屬鍵固體，不是單元素分子或分子化合物。" },
      B: { verdict: "incorrect", reason: "丙是高熔點離子固體，不由獨立分子組成。" },
      C: { verdict: "correct", reason: "甲與丁都呈現低熔沸點的分子物質特徵。" },
      D: { verdict: "incorrect", reason: "乙、丙分別為金屬晶體與離子晶體。" },
      E: { verdict: "incorrect", reason: "丁可能是分子物質，但丙是離子化合物。" }
    },
    takeaway: "低熔沸點常提示分子物質；高熔點常見於離子晶體或金屬晶體。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-21": {
    encouragement: "判物態只要把溫度和熔點、沸點排在同一條線上：低於熔點是固體，介於兩者是液體。",
    keyIdea: "丙熔點800℃、沸點1413℃；500℃低於熔點，所以丙為固體。",
    steps: ["依序比較各選項溫度與物質的熔點、沸點。", "500℃低於丙的800℃熔點，只有C正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的沸點−253℃，0℃遠高於沸點，應為氣體。" },
      B: { verdict: "incorrect", reason: "乙的熔點1535℃，0℃低於熔點，應為固體。" },
      C: { verdict: "correct", reason: "500℃低於丙的熔點800℃，因此丙仍為固體。" },
      D: { verdict: "incorrect", reason: "1000℃介於乙的熔點1535℃以下，乙仍是固體，不是氣體。" },
      E: { verdict: "incorrect", reason: "1000℃高於丁的沸點100℃，丁應為氣體。" }
    },
    takeaway: "T＜熔點為固體；熔點＜T＜沸點為液體；T＞沸點為氣體。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-20": {
    encouragement: "能量圖只看起點與終點：產物比反應物高是吸熱，低則放熱。",
    keyIdea: "NO生成時產物能量高於N₂、O₂，所以吸熱；H₂O生成則產物較低而放熱。",
    steps: ["圖5的H₂O產物較低，生成水是放熱。", "圖6的NO產物較高，生成NO要吸熱，因此選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂O生成物能量低於反應物，生成反應是放熱。" },
      B: { verdict: "correct", reason: "NO生成物能量較高，反應需吸收能量。" },
      C: { verdict: "incorrect", reason: "氫燃燒生成水蒸氣就是圖5的放熱反應。" },
      D: { verdict: "incorrect", reason: "NO分解是圖6生成反應的逆反應，應放熱。" },
      E: { verdict: "incorrect", reason: "H₂O分解是生成水的逆反應，需要吸熱。" }
    },
    takeaway: "逆反應的熱效應正負相反：正向放熱，逆向就吸熱。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-38": {
    encouragement: "看樹脂名稱就知道原本可交換的離子：RNa換出Na⁺，R′OH換出OH⁻。",
    keyIdea: "甲以Na⁺交換Ca²⁺，可用濃NaCl再生；乙以OH⁻交換SO₄²⁻。",
    steps: ["CaSO₄先過甲：Ca²⁺被樹脂抓住，Na⁺進入水中；飽和食鹽水可補回Na⁺。", "再過乙：SO₄²⁻被抓住，OH⁻釋出，所以選B、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是RNa型，Ca²⁺交換的是Na⁺，不是H⁺。" },
      B: { verdict: "correct", reason: "高濃度Na⁺可把樹脂上的Ca²⁺換下，使RNa型樹脂再生。" },
      C: { verdict: "incorrect", reason: "乙為R′OH型，陰離子交換的是OH⁻，不是H⁺。" },
      D: { verdict: "correct", reason: "SO₄²⁻被乙樹脂吸附時，樹脂釋出OH⁻。" },
      E: { verdict: "incorrect", reason: "乙樹脂要恢復OH型應使用提供OH⁻的鹼液，不是鹽酸。" }
    },
    takeaway: "陽離子交換樹脂換正離子，陰離子交換樹脂換負離子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-59": {
    encouragement: "把電子一層層排：甲的最外兩層都各有2個電子，總共就是2、2。",
    keyIdea: "電子組態2、2對應原子序4的Be。",
    steps: ["第一層有2個電子，第二層也有2個，總電子數為4。", "中性原子序等於電子數，所以甲是Be，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Li的電子排列為2、1，最外層不是2個。" },
      B: { verdict: "incorrect", reason: "Na為2、8、1，最外兩層不是各2個。" },
      C: { verdict: "incorrect", reason: "C為2、4，第二層有4個電子。" },
      D: { verdict: "correct", reason: "Be的電子排列是2、2，完全符合題述。" },
      E: { verdict: "incorrect", reason: "Mg為2、8、2，次外層有8個電子。" }
    },
    takeaway: "中性原子的總電子數等於原子序；先寫分層電子數最清楚。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-62": {
    encouragement: "這題問錯誤敘述；圖能告訴我們放熱與濃度，卻不能說強鹼一定是哪一種。",
    keyIdea: "強酸強鹼中和的熱量取決於H⁺與OH⁻反應；僅靠溫升不能辨認強鹼是NaOH。",
    steps: ["三條線ΔT皆為正，且鹼過量，所以反應後升溫、pH＞7。", "斜率可比較鹽酸濃度，但任何強鹼都可提供OH⁻，不能推出一定是NaOH，故選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中ΔT皆大於0，表示各組反應後溫度都升高。" },
      B: { verdict: "incorrect", reason: "題目明說強鹼過量，反應後溶液應呈鹼性，pH＞7。" },
      C: { verdict: "correct", reason: "KOH等其他強鹼也會有相似中和放熱，不能由圖指定為NaOH。" },
      D: { verdict: "incorrect", reason: "同體積下斜率愈大表示HCl莫耳數愈多，濃度為甲＞乙＞丙。" },
      E: { verdict: "incorrect", reason: "由甲線讀圖，4 mL時ΔT約為4℃。" }
    },
    takeaway: "圖表能支持到哪裡就說到哪裡；相同現象不一定能唯一辨認物質。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-63": {
    encouragement: "先在乙線找到5毫升對應的溫升，再水平移到甲線讀體積。",
    keyIdea: "5 mL乙的ΔT約2.5℃；甲線達到相同ΔT時體積約3 mL。",
    steps: ["由圖20讀出乙溶液5 mL產生的ΔT約為2.5℃。", "在同一高度找到甲線，再向下讀得約3 mL，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 mL甲的溫升明顯低於5 mL乙。" },
      B: { verdict: "incorrect", reason: "2 mL甲仍未達到乙在5 mL時的溫升。" },
      C: { verdict: "correct", reason: "甲約3 mL與乙5 mL在圖上對應相近的ΔT。" },
      D: { verdict: "incorrect", reason: "4 mL甲的ΔT約4℃，高於題目要求。" },
      E: { verdict: "incorrect", reason: "5 mL甲的溫升更高，不會與5 mL乙相同。" }
    },
    takeaway: "比較兩條曲線的同一結果，可畫水平線找出各自對應的輸入量。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  }
});
