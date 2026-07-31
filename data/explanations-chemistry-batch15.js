window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-102-16": {
    encouragement: "實驗操作題先看安全，再看器材是否用在正確用途；你不必一次記很多規則。",
    keyIdea: "甲、乙操作正確；丙直接由原瓶取液、丁以酒精燈互點、戊直立集氫氣都不恰當。",
    steps: ["逐圖檢查取藥、點火與集氣方式，只有甲、乙符合規範。", "因此正確組合是甲、乙，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲可沿玻璃棒傾倒液體，乙可用藥匙與摺紙把粉末送入試管。" },
      B: { verdict: "incorrect", reason: "丙直接用滴管伸入原試藥瓶取液，容易污染整瓶試藥。" },
      C: { verdict: "incorrect", reason: "丁用一盞燃燒中的酒精燈點另一盞，酒精可能外漏而起火。" },
      D: { verdict: "incorrect", reason: "戊把集氣瓶直立收集比空氣輕的氫氣，氣體容易逸散。" },
      E: { verdict: "incorrect", reason: "丙、丁、戊均有不當之處，不能列入正確操作。" }
    },
    takeaway: "取藥要防污染、點酒精燈用火柴、氫氣用向下排空氣法收集。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-31": {
    encouragement: "稀釋酸液時，先算前兩次，再記得非常稀時pH會靠近7，就能避開陷阱。",
    keyIdea: "0.01 M鹽酸pH為2；稀釋一千倍約為pH 5，再稀釋會趨近中性而不會變成鹼性。",
    steps: ["原鹽酸[H⁺]＝10⁻² M，呈酸性並使藍色石蕊變紅。", "一千倍稀釋約為10⁻⁵ M；繼續稀釋時水的自解離不可忽略，pH趨近7。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "原液pH＝2，依題示指示劑範圍呈紅色。" },
      B: { verdict: "correct", reason: "強酸使藍色石蕊試紙變成紅色。" },
      C: { verdict: "incorrect", reason: "稀釋一千倍後pH約5，應落在黃色範圍，不是題述顏色。" },
      D: { verdict: "incorrect", reason: "酸液只加水不會因稀釋而成為pH 8的鹼液。" },
      E: { verdict: "correct", reason: "再大量稀釋時pH只會逐漸接近7，不會升到11。" }
    },
    takeaway: "酸愈稀，pH愈接近7；不能只用倍數一直把pH加下去。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-64": {
    encouragement: "溶解度圖的縱軸通常是「每100克水可溶多少克」，先確認基準就不會混淆。",
    keyIdea: "160℃時溶解度約為100 g溶質／100 g水，所以飽和溶液中溶質與水等重。",
    steps: ["讀圖得160℃時100 g水可溶約100 g溶質，形成約200 g飽和溶液。", "因此100 g飽和溶液含約50 g溶質，而100 g水可溶約100 g溶質。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "溶質與水質量比約1：1，所以100 g溶液約含50 g溶質。" },
      B: { verdict: "incorrect", reason: "100 g是以水為基準的可溶溶質量，不是100 g溶液所含的溶質量。" },
      C: { verdict: "correct", reason: "依曲線，160℃時100 g水約可溶100 g溶質。" },
      D: { verdict: "incorrect", reason: "圖給的是總溶質對水的關係，不能把硝酸鉀直接判成溶液的50 wt%。" },
      E: { verdict: "incorrect", reason: "兩種溶質即使質量相同，分子量不同，莫耳數也不會相同。" }
    },
    takeaway: "溶解度的分母是溶劑質量；飽和溶液質量還要加上溶質。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-13": {
    encouragement: "曲線題不必猜公式，只要在指定溫度畫一條直線，比較交點高度。",
    keyIdea: "50℃時甲、乙兩曲線幾乎相交，表示兩者溶解度接近。",
    steps: ["沿50℃向上讀圖，甲、乙的交點高度幾乎相同。", "其餘敘述不是全溫度成立，就是讀錯80℃或冷卻後是否析晶。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩曲線會交會，不能說所有溫度下甲都較大。" },
      B: { verdict: "incorrect", reason: "80℃兩者的圖上數值並不是恰好兩倍。" },
      C: { verdict: "incorrect", reason: "乙在約40℃後隨溫度升高反而下降，不是持續增加。" },
      D: { verdict: "correct", reason: "50℃時兩曲線高度幾乎相同，溶解度相近。" },
      E: { verdict: "incorrect", reason: "20 g乙配50 g水相當於40 g／100 g水，冷到50℃仍未超過溶解度，不會析晶。" }
    },
    takeaway: "比較溶解度時，固定同一溫度讀縱軸；析晶要看濃度是否超過曲線。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-58": {
    encouragement: "元素推理像排小拼圖：先用原子序與週期關係列出可能組合，再逐一檢查總和。",
    keyIdea: "符合題目關係且原子序總和為27的組合共有兩組。",
    steps: ["逐項套入相對位置與原子序條件，可得N、C、Si與Na、Mg、Be兩組。", "兩組原子序總和都為27，因此共有2組，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不只一組；兩組元素配置都能同時滿足條件。" },
      B: { verdict: "correct", reason: "N/C/Si與Na/Mg/Be兩組皆符合，故數目為2。" },
      C: { verdict: "incorrect", reason: "找不到第三組仍符合全部相對位置與總和條件。" },
      D: { verdict: "incorrect", reason: "四組會包含至少兩組不符合週期關係或原子序總和。" },
      E: { verdict: "incorrect", reason: "符合條件的可能性已被限制為兩組，不是五組。" }
    },
    takeaway: "元素位置題要同時檢查週期關係與原子序，不能只符合其中一項。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-59": {
    encouragement: "判斷金屬時，把上一題找到的兩組逐組分類即可，不用重新推一次。",
    keyIdea: "兩組候選中，只有Na、Mg、Be三者全都是金屬。",
    steps: ["N、C、Si這組含非金屬與類金屬，並非全為金屬。", "Na、Mg、Be均為金屬，所以符合者只有1組，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "只有Na、Mg、Be這一組的三個元素全屬金屬。" },
      B: { verdict: "incorrect", reason: "另一組含N、C與Si，不是第二組全金屬組合。" },
      C: { verdict: "incorrect", reason: "候選本來只有兩組，更不可能有三組全金屬。" },
      D: { verdict: "incorrect", reason: "題目條件下沒有四組全金屬配置。" },
      E: { verdict: "incorrect", reason: "題目條件下沒有五組全金屬配置。" }
    },
    takeaway: "先完成候選組合，再套性質分類，能減少重複推理。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-60": {
    encouragement: "這題可以用化學式逐條驗證；一條不合就淘汰，不必硬猜元素。",
    keyIdea: "K、O、Cl、Mg與Na、O、Br、Ca兩組能符合題列各項性質與化學式。",
    steps: ["檢查甲的金屬性、甲與乙及丙形成的化學式，再核對丙單質顏色。", "A與C能全部對上；其他組至少在金屬軟硬或化學式上衝突。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "K柔軟，能形成K₂O、KCl；Cl₂有色，MgO為離子固體且Mg常溫為固體。" },
      B: { verdict: "incorrect", reason: "Be並非題述的柔軟金屬，且相關氯化物化學式也無法全對上。" },
      C: { verdict: "correct", reason: "Na、O、Br、Ca可分別符合Na₂O、NaBr、Br₂有色與CaO等條件。" },
      D: { verdict: "incorrect", reason: "Ca與O形成CaO，不符合題目要求的甲₂乙型化學式。" },
      E: { verdict: "incorrect", reason: "K與Cl形成KCl，不會形成K₂Cl。" }
    },
    takeaway: "主族元素化合物的下標，可由常見離子電荷交叉配平。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-61": {
    encouragement: "球棒模型只要先數每種原子，再把題目要求的兩種數量相加即可。",
    keyIdea: "模型分子式為C₉H₁₃NO₂，因此C＋O＝11，N＋H＝14。",
    steps: ["依模型顏色與鍵結數出C₉H₁₃NO₂。", "逐項相加：C＋O＝11、N＋H＝14，故選B、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "C＋H＝9＋13＝22，不是21。" },
      B: { verdict: "correct", reason: "C＋O＝9＋2＝11。" },
      C: { verdict: "incorrect", reason: "N＋O＝1＋2＝3，不是4。" },
      D: { verdict: "correct", reason: "N＋H＝1＋13＝14。" },
      E: { verdict: "incorrect", reason: "C＋N＝9＋1＝10，不是9。" }
    },
    takeaway: "模型計數時先寫完整分子式，再做加總，最不容易漏算。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-9": {
    encouragement: "反應關係圖可以當成「誰能和誰配對」；找出能連到三種溶液的物質即可。",
    keyIdea: "Na₂CO₃可分別與酸產氣，並與Ba²⁺、Pb²⁺形成沉澱，正好有三種明顯反應。",
    steps: ["碳酸根遇HCl產生CO₂，遇BaCl₂與Pb(NO₃)₂形成白色沉澱。", "這個反應連線數與圖中溶液2相符，因此選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "HCl雖能和碳酸鹽反應，但無法呈現圖中所需的三組連線。" },
      B: { verdict: "incorrect", reason: "BaCl₂的沉澱反應對象不足以符合溶液2的連線型態。" },
      C: { verdict: "incorrect", reason: "Pb(NO₃)₂的反應組合與圖中指定位置的連線數不合。" },
      D: { verdict: "correct", reason: "Na₂CO₃可與HCl、BaCl₂、Pb(NO₃)₂產生氣體或沉澱。" },
      E: { verdict: "incorrect", reason: "NaCl與題中多數溶液混合沒有明顯反應，連線太少。" }
    },
    takeaway: "碳酸根的兩個辨識重點：遇酸產CO₂，遇部分金屬離子形成沉澱。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-12": {
    encouragement: "赫斯定律只做三件事：反向就變號、倍乘就乘熱量、最後把式子相加。",
    keyIdea: "把三條已知反應調整後相加，目標反應熱約為20.5 kJ，取21 kJ。",
    steps: ["反應Ⅰ乘1/3得−16.17 kJ；反應Ⅲ乘2/3得＋14.67 kJ；反應Ⅱ反向再乘2得＋22 kJ。", "三者相加約20.5 kJ，依選項取21 kJ，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "15 kJ沒有包含三條反應正確倍乘與變號後的總和。" },
      B: { verdict: "correct", reason: "−16.17＋14.67＋22約為20.5 kJ，四捨五入為21 kJ。" },
      C: { verdict: "incorrect", reason: "29 kJ是調整係數或反向變號出錯才會得到的值。" },
      D: { verdict: "incorrect", reason: "44 kJ只接近其中一項倍乘值，沒有消去中間物。" },
      E: { verdict: "incorrect", reason: "61 kJ未依目標反應正確組合已知熱化學方程式。" }
    },
    takeaway: "赫斯定律的反應式怎麼乘，反應熱就跟著乘；反向時正負號交換。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-32": {
    encouragement: "先分清「離子之間」和「多原子離子內部」：外面多為離子鍵，內部多為共價鍵。",
    keyIdea: "NaCl、Na₂SO₄整體有離子鍵；NH₄⁺中的N－H為共價鍵。",
    steps: ["金屬陽離子與陰離子之間形成離子鍵，所以NaCl與Na₂SO₄符合。", "多原子離子內部原子以共價鍵相連，因此NH₄⁺內的N－H是共價鍵。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Na⁺與Cl⁻以靜電作用形成離子鍵。" },
      B: { verdict: "incorrect", reason: "NH₄Cl整體是NH₄⁺與Cl⁻組成的離子化合物，不是分子化合物。" },
      C: { verdict: "correct", reason: "Na₂SO₄含Na⁺與SO₄²⁻之間的離子鍵。" },
      D: { verdict: "correct", reason: "NH₄⁺內部N與H共享電子，N－H屬共價鍵。" },
      E: { verdict: "incorrect", reason: "SO₄²⁻內部的S－O是共價鍵，不是離子鍵。" }
    },
    takeaway: "多原子離子像一個整體：內部共價、與外部相反電荷離子之間為離子鍵。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-48": {
    encouragement: "看陌生有機結構時，先圈官能基，再判斷溶解性與立體形狀，比背名稱可靠。",
    keyIdea: "酚酞含酚羥基與內酯結構，水溶性差，通常配成酒精與水的指示劑溶液。",
    steps: ["結構中的－OH接在芳香環上，是酚羥基；環狀酯是內酯，不是羧酸。", "分子不易溶於水，因此常以酒精幫助溶解，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "酚酞是弱酸型指示劑，不是強鹼。" },
      B: { verdict: "incorrect", reason: "檸檬汁呈酸性，酚酞在酸性中通常無色。" },
      C: { verdict: "incorrect", reason: "圖中是內酯結構，沒有游離的－COOH羧基。" },
      D: { verdict: "incorrect", reason: "中央碳的立體鍵結使三個環不會全部共平面。" },
      E: { verdict: "correct", reason: "酚酞水溶性差，常以酒精與水配製成指示劑。" }
    },
    takeaway: "辨認官能基要看原子怎麼連，不只看有沒有O或OH。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-49": {
    encouragement: "石油題抓兩條主線：分餾看沸點，汽油品質看抗爆震能力。",
    keyIdea: "重質油可裂解或重組；MTBE的辛烷值高，可提高汽油抗爆震性。",
    steps: ["汽油分子較小、沸點較低；柴油分餾溫度通常較高。", "重質烴可加工成較有價值的小分子，MTBE則用來提升辛烷值。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "汽油的平均沸點較低，分餾溫度通常低於柴油。" },
      B: { verdict: "incorrect", reason: "正壬烷辛烷值低，不代表汽油中絕對不能含有正壬烷。" },
      C: { verdict: "correct", reason: "重質烴可經裂解、重組等程序轉成較輕或較高價值的成分。" },
      D: { verdict: "correct", reason: "MTBE辛烷值高，加入汽油可提升抗爆震能力。" },
      E: { verdict: "incorrect", reason: "MTBE的結構含5個碳原子，不是4個。" }
    },
    takeaway: "辛烷值代表抗爆震性，不是某一種分子的含量百分比。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-50": {
    encouragement: "導電性表格很好判：固態、溶液都要分開看，因為離子能不能移動是關鍵。",
    keyIdea: "甲為H₂、乙為離子化合物、丙為金屬、丁為H₂O；甲與丁有共價鍵，乙固態不導電。",
    steps: ["由沸點與組成辨認甲為H₂、丁為水；固態導電的丙是金屬。", "乙固態不導電但水溶液導電，符合離子化合物，據此逐項判斷。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "H₂分子中兩個H以共價鍵相連。" },
      B: { verdict: "incorrect", reason: "離子固體中的離子被固定，固態時通常不能導電。" },
      C: { verdict: "correct", reason: "丙固態可導電，符合金屬具有可移動電子的特徵。" },
      D: { verdict: "correct", reason: "水分子內O－H為共價鍵。" },
      E: { verdict: "incorrect", reason: "丙具有延展性，但乙為離子晶體，通常硬而脆。" }
    },
    takeaway: "離子化合物要熔融或溶於水後離子可移動，才容易導電。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-52": {
    encouragement: "原子經濟率只看「投入的原子有多少進入目標產物」，依係數算質量即可。",
    keyIdea: "原子經濟率＝目標產物總式量／全部反應物總式量×100%。",
    steps: ["目標產物質量份額＝2×147＝294。", "反應物總質量份額＝342＋3×32＋2×17＝472，294÷472約62%，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "51%不是依平衡係數計算出的294÷472。" },
      B: { verdict: "correct", reason: "294÷472×100%約為62.3%，取62%。" },
      C: { verdict: "incorrect", reason: "73%高估進入目標產物的原子比例。" },
      D: { verdict: "incorrect", reason: "84%忽略了反應中形成副產物的原子。" },
      E: { verdict: "incorrect", reason: "95%表示幾乎所有原子進入產品，與反應式不符。" }
    },
    takeaway: "原子經濟率用化學方程式的式量算，不用實驗產率或反應速率。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-53": {
    encouragement: "模型題找酒精，只要找到碳連著氧、氧又連著氫的C－O－H片段。",
    keyIdea: "甲、乙、丁含羥基C－O－H，屬醇；丙、戊主要是羰基C＝O。",
    steps: ["逐個找氧原子是否以單鍵同時連接碳與氫。", "甲、乙、丁符合，丙、戊只有羰基，故選A、B、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲模型含C－O－H羥基，屬醇類。" },
      B: { verdict: "correct", reason: "乙模型含連在碳上的－OH，屬醇類。" },
      C: { verdict: "incorrect", reason: "丙的氧形成C＝O羰基，沒有酒精所需的羥基。" },
      D: { verdict: "correct", reason: "丁含C－O－H結構，符合醇類官能基。" },
      E: { verdict: "incorrect", reason: "戊含羰基而非羥基，不屬於酒精。" }
    },
    takeaway: "看到氧還不夠；醇的判斷重點是是否有C－O－H。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-53": {
    encouragement: "環烯命名先把雙鍵兩端定為1、2號，再選讓取代基號碼最小的方向。",
    keyIdea: "結構Ⅱ的雙鍵在環戊烯1、2位，兩個甲基可編為1、3位。",
    steps: ["雙鍵碳固定從1、2開始編號。", "比較兩個方向後，甲基位置最小為1、3，所以選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1,2編法沒有依正確方向標出第二個甲基的位置。" },
      B: { verdict: "correct", reason: "以雙鍵為1、2號並取最低定位數後，名稱為1,3-二甲基環戊烯。" },
      C: { verdict: "incorrect", reason: "1,4不是可得到最低取代基定位數的編號。" },
      D: { verdict: "incorrect", reason: "2,3忽略雙鍵碳編號應優先由1開始。" },
      E: { verdict: "incorrect", reason: "3,5沒有遵守環烯雙鍵優先與最低定位數原則。" }
    },
    takeaway: "環烯編號：雙鍵先拿到1、2，再讓取代基號碼組最小。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-106-49": {
    encouragement: "萃取與界面題先判斷「溶不溶」，再看界面活性劑是否能幫忙分散。",
    keyIdea: "墨水不易溶於水、可溶於乙酸乙酯；界面活性劑可讓它在水中分散得較均勻。",
    steps: ["墨水在水中不均勻而在乙酸乙酯中較均勻，顯示兩者溶解性不同。", "十二烷基磺酸鈉具有親水、親油兩端，可協助墨水分散。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "墨水加入水後分布不均，支持其不易溶於水。" },
      B: { verdict: "correct", reason: "十二烷基磺酸鈉是界面活性劑，可使墨水較均勻分散於水。" },
      C: { verdict: "correct", reason: "實驗中墨水在乙酸乙酯層表現出較好的溶解性。" },
      D: { verdict: "incorrect", reason: "乙酸乙酯密度小於水且墨水偏好該層，藍色不應主要在下層。" },
      E: { verdict: "incorrect", reason: "加少量CaCl₂可能影響界面活性劑，卻不能直接推得穩定形成題述兩層結果。" }
    },
    takeaway: "相似相溶決定偏好哪一層；界面活性劑則幫助原本不相溶的物質分散。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-107-2": {
    encouragement: "古文題先把物質特徵翻成現代語言：液態金屬與黃色固體就是很明顯的線索。",
    keyIdea: "姹女指汞，黃芽指硫；兩者反應形成較穩定的硫化汞。",
    steps: ["常溫呈液態、可流動的金屬對應汞Hg；黃色固體對應硫S。", "Hg與S可生成HgS，因此選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "汞與硫能反應生成硫化汞，符合文中兩物質特徵。" },
      B: { verdict: "incorrect", reason: "氯在常溫是黃綠色氣體，不符合黃色針狀固體的描述。" },
      C: { verdict: "incorrect", reason: "液態金屬汞的線索不能對應題述的其他金屬組合。" },
      D: { verdict: "incorrect", reason: "碘為紫黑色固體，顏色與黃芽不符。" },
      E: { verdict: "incorrect", reason: "所列組合無法同時符合液態金屬與黃色固體兩項線索。" }
    },
    takeaway: "汞是常溫液態金屬；硫常見為黃色固體，兩者可形成HgS。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-107-41": {
    encouragement: "判斷推論題要分清「結論正確」和「理由足夠」；只看一個數字常會過度推論。",
    keyIdea: "乙的碳四鍵原則與丙的碳鏈不飽和度推理正確，甲以氫數大小否定分子式並不可靠。",
    steps: ["碳在常見有機物中最多形成四個共價鍵，乙正確。", "丙依碳碳單、雙鍵改變氫數的規則推理正確；甲的判斷規則並不存在。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "只有甲正確不成立；甲用氫數一定大於碳數作判準是錯的。" },
      B: { verdict: "incorrect", reason: "甲錯、乙對，不能選甲乙。" },
      C: { verdict: "incorrect", reason: "甲的理由錯誤，即使搭配丙也不能成立。" },
      D: { verdict: "incorrect", reason: "甲仍然錯誤，並非三項都對。" },
      E: { verdict: "correct", reason: "只有乙、丙的化學推理成立。" }
    },
    takeaway: "有機分子可先用碳四鍵與不飽和度檢查，別自創「氫一定比碳多」的規則。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-108-41": {
    encouragement: "氧化還原不必背箭頭名稱，只要標出氮的氧化數，變大是氧化、變小是還原。",
    keyIdea: "亞硝酸根中的N由＋3變＋5是氧化；由＋3變0是還原。",
    steps: ["標示NH₃/NH₄⁺為−3、NO₂⁻為＋3、NO₃⁻為＋5、N₂為0。", "丙氧化數上升，丁氧化數下降，故選C、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲由NH₃到NH₄⁺，N都為−3，沒有氧化還原。" },
      B: { verdict: "incorrect", reason: "乙由−3升到＋3，是氧化而不是還原。" },
      C: { verdict: "correct", reason: "丙由NO₂⁻的＋3升到NO₃⁻的＋5，屬氧化。" },
      D: { verdict: "correct", reason: "丁由NO₂⁻的＋3降到N₂的0，屬還原。" },
      E: { verdict: "incorrect", reason: "戊由N₂的0降到NH₃的−3，是還原而非氧化。" }
    },
    takeaway: "氧化數上升＝氧化；氧化數下降＝還原。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-109-11": {
    encouragement: "氣體溶解度差很多時，可先認出最高的氨與氯化氫，再從最低端找氫氣。",
    keyIdea: "圖中丁的溶解度約0.021，最符合極難溶於水的H₂。",
    steps: ["常見數值可排序為NH₃、HCl、CO₂、O₂、H₂，其中H₂最低。", "丁位在最低溶解度附近，因此丁為氫氣，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氨極易溶於水，應對應圖中最高的甲。" },
      B: { verdict: "incorrect", reason: "氯化氫很易溶於水，應對應高溶解度的乙。" },
      C: { verdict: "correct", reason: "氫氣在水中溶解度很小，符合丁約0.021的數值。" },
      D: { verdict: "incorrect", reason: "氧氣雖難溶，但溶解度仍略高於氫氣，較符合戊。" },
      E: { verdict: "incorrect", reason: "二氧化碳能與水作用，溶解度明顯高於丁，較符合丙。" }
    },
    takeaway: "NH₃、HCl極易溶於水；H₂、O₂難溶，且H₂更低。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-109-12": {
    encouragement: "選製氣裝置時分三關：怎麼產生、能不能碰水、氣體比空氣輕還是重。",
    keyIdea: "乙為HCl，極易溶於水且比空氣重，應以固體加濃酸製取並向上排空氣收集。",
    steps: ["HCl不能用排水集氣，否則會大量溶解。", "HCl比空氣重，集氣瓶直立，用向上排空氣法，符合C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "裝置採排水集氣，HCl會大量溶於水而無法收集。" },
      B: { verdict: "incorrect", reason: "同樣讓HCl接觸水，不適合極易溶於水的氣體。" },
      C: { verdict: "correct", reason: "可由固體氯化物與濃酸製HCl，並以直立集氣瓶向上排空氣收集。" },
      D: { verdict: "incorrect", reason: "集氣瓶方向較適合比空氣輕的氣體，與HCl密度不符。" },
      E: { verdict: "incorrect", reason: "導氣與集氣方向無法有效排出瓶內空氣並留住較重的HCl。" }
    },
    takeaway: "極易溶於水的氣體不用排水法；比空氣重者用向上排空氣法。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-110-51": {
    encouragement: "異構物先數分子式；碳、氫、氧數量都相同，結構不同，才可能互為異構物。",
    keyIdea: "甲與己、丙與庚、乙與戊分子式相同而結構不同。",
    steps: ["逐一數每個結構的C、H、O，先把分子式相同者配對。", "符合者為甲己、丙庚、乙戊，故選A、C、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲與己分子式相同，但原子連接方式不同。" },
      B: { verdict: "incorrect", reason: "甲與庚的分子式不相同，不能互為異構物。" },
      C: { verdict: "correct", reason: "丙與庚具有相同分子式、不同結構。" },
      D: { verdict: "correct", reason: "乙與戊分子式相同，雙鍵周圍排列不同。" },
      E: { verdict: "incorrect", reason: "丁與己的分子式不同，不符合異構物定義。" }
    },
    takeaway: "異構物的第一關永遠是分子式相同，之後才比較結構。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-110-52": {
    encouragement: "同一組結構再看一次即可：雙鍵限制旋轉會有幾何異構，飽和分子通常含氫較多。",
    keyIdea: "乙、戊為幾何異構物；丙、庚為飽和醇，在同碳數下氫數達上限。",
    steps: ["乙與戊的雙鍵兩側取代基排列不同，形成幾何異構。", "丙與庚無環、無多重鍵，屬飽和醇，含氫數符合上限。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丁雖是烴，但碳氫原子本身沒有題述的孤電子對。" },
      B: { verdict: "correct", reason: "乙、戊因C＝C不能自由旋轉而形成幾何異構物。" },
      C: { verdict: "incorrect", reason: "圖中只有甲具芳香環，不能說有兩種芳香族化合物。" },
      D: { verdict: "incorrect", reason: "具有環或多重鍵的結構數不是題述的六種。" },
      E: { verdict: "correct", reason: "丙、庚為飽和醇，沒有環或多重鍵造成的缺氫。" }
    },
    takeaway: "雙鍵可能帶來順反異構；每多一個環或雙鍵，通常會少兩個氫。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-12": {
    encouragement: "相圖題只要先找到溫度與壓力交點，再看它落在哪一區或邊界。",
    keyIdea: "甲烷水合物可燃；在0℃、10 atm時不在水合物穩定區，所以不會形成。",
    steps: ["甲烷水合物受熱或點燃會釋出可燃的甲烷。", "依圖判讀0℃、10 atm低於穩定所需壓力，不形成水合物。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水合物中含甲烷，釋出後可被點燃。" },
      B: { verdict: "incorrect", reason: "甲烷氣體與液態水可同時存在，不是絕對不能共存。" },
      C: { verdict: "incorrect", reason: "0℃、140 atm落在水合物穩定區，不是水合物與冰的共存邊界。" },
      D: { verdict: "incorrect", reason: "−15℃且高壓時仍可位於水合物穩定區，不能說一定不存在。" },
      E: { verdict: "correct", reason: "0℃、10 atm低於圖示穩定壓力，甲烷水合物不會形成。" }
    },
    takeaway: "相圖上的區域表示穩定相，線才表示兩相平衡共存。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-15": {
    encouragement: "這題把浮力換成密度，再把溶解度換成濃度；一步一步算就會到答案。",
    keyIdea: "浮力得溶液密度1.20 g/mL；45℃飽和組成約100 g水配40 g溶質。",
    steps: ["100 cm³物體在液中減重120 g重，故溶液密度＝120÷100＝1.20 g/mL。", "140 g飽和液體積116.7 mL；溶質40÷75 mol，濃度約4.6 M，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2.8 M未同時使用圖上溶解度與浮力算得的密度。" },
      B: { verdict: "incorrect", reason: "3.4 M低估每公升飽和溶液所含溶質莫耳數。" },
      C: { verdict: "incorrect", reason: "4.0 M仍低於依40 g、75 g/mol及116.7 mL算得的值。" },
      D: { verdict: "correct", reason: "(40/75)÷0.1167約為4.57 M，取4.6 M。" },
      E: { verdict: "incorrect", reason: "5.3 M高估圖上45℃可溶的溶質量。" }
    },
    takeaway: "莫耳濃度的分母是溶液體積；可用密度把溶液質量換成體積。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-37": {
    encouragement: "圖表能直接支持的才算答案；分子量、粒徑等沒有測量，就不要替圖多做推論。",
    keyIdea: "油母質殘留率隨二鉻酸濃度明顯下降，木炭則幾乎不受濃度影響。",
    steps: ["同一時間比較，油母質殘留較少，表示它較容易被二鉻酸氧化。", "木炭三條曲線接近，顯示殘留率沒有因濃度不同而明顯改變。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "反應殘留率不能直接比較兩者碳質的分子量。" },
      B: { verdict: "incorrect", reason: "圖中沒有量測顆粒大小，不能由曲線推出粒徑。" },
      C: { verdict: "correct", reason: "油母質殘留率下降較多，表示較容易和二鉻酸溶液反應。" },
      D: { verdict: "incorrect", reason: "實驗是氧化反應，不能說油母質中的碳較容易被還原。" },
      E: { verdict: "correct", reason: "木炭在三種濃度下的殘留率曲線相近，沒有明顯差異。" }
    },
    takeaway: "只下圖表能支持的結論；沒量分子量、粒徑，就不能從反應快慢硬推。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-55": {
    encouragement: "柱狀圖先算「減少量占原來多少」，再把最後濃度和兩條標準線比較。",
    keyIdea: "兩杯移除率都超過70%；溶液二處理後低於50 ppb，同時符合EPA與WHO標準。",
    steps: ["溶液一約由480降至85，溶液二約由190降至30，兩者移除率皆超過70%。", "只有溶液二最後低於50 ppb；實驗是在測試MOF吸附六價鉻的能力。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩杯濃度都下降超過原值的70%。" },
      B: { verdict: "incorrect", reason: "圖中降幅明顯大於30%，不是兩杯都低於30%。" },
      C: { verdict: "incorrect", reason: "溶液一最後約85 ppb，高於WHO的50 ppb標準。" },
      D: { verdict: "correct", reason: "溶液二最後約30 ppb，低於EPA 100與WHO 50 ppb兩項標準。" },
      E: { verdict: "correct", reason: "比較吸附前後六價鉻濃度，正是在測MOF於水中的吸附能力。" }
    },
    takeaway: "移除率看相對降幅；是否合格則看最後濃度，不要混成同一件事。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-56": {
    encouragement: "公平比較實驗要控制初始濃度相同，再看不同材料處理後剩下多少。",
    keyIdea: "材料種類是操縱變因，三組初始濃度應相同；聚合物單獨幾乎不能移除六價鉻。",
    steps: ["比較MOF、MOF@聚合物與聚合物時，應讓起始六價鉻濃度一致。", "圖中聚合物處理後仍接近初始值，而複合材料的效果未比MOF差。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "研究者主動改變的是吸附材料種類，屬操縱變因。" },
      B: { verdict: "correct", reason: "公平比較三種材料時，六價鉻初始濃度必須相同。" },
      C: { verdict: "incorrect", reason: "聚合物單獨結果與複合材料不同，不能說它對複合結果毫無影響。" },
      D: { verdict: "incorrect", reason: "MOF@聚合物最後濃度不高於MOF，圖未顯示吸附能力被犧牲。" },
      E: { verdict: "correct", reason: "聚合物處理後濃度幾乎未降，表示單獨使用幾乎沒有移除能力。" }
    },
    takeaway: "實驗比較只改一個主要變因；柱子愈低，代表剩餘污染物愈少。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-25": {
    encouragement: "先用前三組找固定質量比，再看最後一組誰過量；這比直接猜元素快得多。",
    keyIdea: "反應中金屬與氧的質量比為1.8：1.6＝1.125；可得M＝27、x＝3，丁有氧氣剩餘。",
    steps: ["由甲得消耗金屬3.4−1.6＝1.8 g，金屬／氧＝1.125；2M：16x＝1.125，所以M＝9x。", "20＜M＜30且x為整數，得x＝3、M＝27，M₂O₃式量102；丁多通入1.6 g氧氣。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "由M＝9x及原子量範圍可得x＝3，不是1。" },
      B: { verdict: "incorrect", reason: "M原子量為27 amu，不是24 amu。" },
      C: { verdict: "correct", reason: "M₂O₃式量＝2×27＋3×16＝102 g/mol。" },
      D: { verdict: "incorrect", reason: "丙恰好生成10.2 g氧化物，金屬已完全反應，沒有金屬剩餘。" },
      E: { verdict: "correct", reason: "丁與丙產物同為10.2 g，多通入的1.6 g氧氣未反應而剩餘。" }
    },
    takeaway: "產物質量減去氧氣質量，就是實際反應的金屬質量。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-26": {
    encouragement: "開閥後只有丁剩下的氧氣會跑到甲；追蹤那1.6克氧最後去了哪裡即可。",
    keyIdea: "丁剩餘1.6 g O₂流入甲並與甲剩餘金屬反應，使甲固體增加1.6 g。",
    steps: ["前三容器顯示初始金屬為5.4 g；甲只反應1.8 g，仍有3.6 g金屬。", "丁剩餘1.6 g O₂進入甲並被消耗，所以甲固體質量增加1.6 g，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣體由丁流向甲後被消耗，不能只由流向判定甲最後壓力較大。" },
      B: { verdict: "correct", reason: "丁剩餘的1.6 g氧氣在甲形成固體氧化物，甲固體增重1.6 g。" },
      C: { verdict: "incorrect", reason: "原本的氣體轉成固體，兩容器固體總質量會增加1.6 g。" },
      D: { verdict: "incorrect", reason: "總物質質量守恆，但題述把容器內狀態與開閥前個別總量混為一談。" },
      E: { verdict: "incorrect", reason: "丁原有10.2 g固體，甲最後固體總量不會與它相等。" }
    },
    takeaway: "密閉系統總質量守恆，但氣體轉成固體時，固體質量會增加。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-27": {
    encouragement: "把X、Y代回熟悉實驗：過氧化氫製氧，氧氣氧化硫化氫得到淡黃色硫。",
    keyIdea: "Y為氧、X為硫；硫比氧易失去價電子，O₂助燃，O₂與S₈皆為共價分子。",
    steps: ["過氧化氫在MnO₂催化下產生O₂，所以Y＝O；O₂使H₂S生成淡黃色S，故X＝S。", "同族向下非金屬性減弱、半徑增大，並據O₂與S₈性質判斷選項。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同族中O在S上方，氧的非金屬性比硫強。" },
      B: { verdict: "correct", reason: "硫在氧下方，較容易失去價電子。" },
      C: { verdict: "incorrect", reason: "同族向下原子半徑增大，所以S半徑大於O。" },
      D: { verdict: "correct", reason: "錐形瓶產生的O₂具有助燃性。" },
      E: { verdict: "correct", reason: "O₂與常見S₈均由非金屬原子以共價鍵形成分子。" }
    },
    takeaway: "同族向下：原子半徑變大、非金屬性減弱；氧氣助燃但本身不一定可燃。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-13": {
    encouragement: "表格題先看比值離理論值多遠，再想樣品雜質與氧化是否能解釋差異。",
    keyIdea: "純FeS₂的S/Fe比為2；樣品含氧化鐵可使實測比小於2，且表中硫未完全轉成硫酸根。",
    steps: ["FeS₂每1個Fe配2個S，所以純樣品理論[S總]/[Fe總]＝2。", "實測約1.7且[S總]大於[SO₄²⁻]，支持含氧化鐵與硫未完全氧化。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "純FeS₂中S與Fe的原子數比為2：1，理論比值為2。" },
      B: { verdict: "incorrect", reason: "表中氧分壓愈高，[Fe總]愈高，並非溶解量減少。" },
      C: { verdict: "correct", reason: "若混有氧化鐵，會增加Fe而不增加S，使S/Fe小於2。" },
      D: { verdict: "incorrect", reason: "只能看出隨氧分壓增加而上升，不能保證純氧時必大於1.46。" },
      E: { verdict: "correct", reason: "0.21 atm下S總/Fe仍大於硫酸根/Fe，表示仍有部分硫不是SO₄²⁻。" }
    },
    takeaway: "理論比值用化學式求；總量大於某一形態的量，代表仍有其他形態存在。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-17": {
    encouragement: "看曲線斜率就能讀速率；再用「疏水會浮在水面」判斷材料角色。",
    keyIdea: "油脂性矽烷使咖啡粉表面疏水而漂浮；40至50分鐘斜率大小約0.02 kg/(m²·min)。",
    steps: ["疏水表面不易被水潤濕，咖啡粉較能留在水面上。", "40到50分鐘由約−0.6降至−0.8，速率大小＝0.2÷10＝0.02。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "油脂性矽烷具疏水效果，可幫助咖啡粉漂浮並避免沉降。" },
      B: { verdict: "incorrect", reason: "題述材料不是以親水、提高與水互溶性來作用。" },
      C: { verdict: "incorrect", reason: "使粉末留在表面主要是疏水性，不是讓它懸浮於整杯水中的界面活性劑作用。" },
      D: { verdict: "incorrect", reason: "實驗要保持粉末在表面，不是凝成塊後沉入水中。" },
      E: { verdict: "correct", reason: "曲線在40至50分鐘的重量變化率大小約0.02 kg/(m²·min)。" }
    },
    takeaway: "曲線平均速率＝縱軸變化量÷時間；若縱軸下降，談快慢時常取其大小。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-48": {
    encouragement: "反應式已把電子數寫出來；配合溶解性與可燃性，就能逐項完成。",
    keyIdea: "三種產物每莫耳所需電子比為1：2：3；NaOH可吸收CO₂；甲醇與正丙醇可燃。",
    steps: ["由半反應式讀出甲醇、乙烯、正丙醇每莫耳分別需6、12、18 mol電子。", "再用CO₂與NaOH反應、醇的水溶性與可燃性檢查其餘選項。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "6：12：18約分後為1：2：3。" },
      B: { verdict: "correct", reason: "NaOH可吸收混合氣中的CO₂，留下不易與NaOH反應的乙烯。" },
      C: { verdict: "incorrect", reason: "正丙醇可與水良好互溶，不會因不溶而在容器內分層。" },
      D: { verdict: "incorrect", reason: "以每莫耳CO₂計算，三條反應都需6 mol電子，並沒有不同。" },
      E: { verdict: "correct", reason: "甲醇與正丙醇在常溫常壓可揮發，且都屬易燃有機物。" }
    },
    takeaway: "比較係數時先確認基準：是每莫耳產物，還是每莫耳CO₂。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-50": {
    encouragement: "讀地球歷史圖先對準時間軸，再把礦物形成和氧氣變化的先後順序分開。",
    keyIdea: "縞狀鐵礦形成時氧氣尚未大增；鐵氧化物難溶，19億年前形成礦床時Fe²⁺供應應增加。",
    steps: ["圖示24至35億年前已有大量縞狀鐵礦，而大氣氧氣的大幅增加發生在其後。", "Fe₂O₃、Fe₃O₄為難溶離子固體；形成新礦床需要海中Fe²⁺來源增加。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Fe²⁺形成Fe₂O₃時鐵的氧化數上升，是氧化而不是還原。" },
      B: { verdict: "correct", reason: "圖中主要縞狀鐵礦先形成，之後大氣氧氣才大幅上升。" },
      C: { verdict: "correct", reason: "Fe₂O₃與Fe₃O₄都是難溶於水的鐵氧化物。" },
      D: { verdict: "incorrect", reason: "兩者是由離子構成的固體，不屬於分子化合物。" },
      E: { verdict: "correct", reason: "19億年前出現縞狀鐵礦，表示當時海水中應有較多Fe²⁺可被氧化沉澱。" }
    },
    takeaway: "金屬離子與氧形成難溶氧化物會沉澱；先後關係要直接按時間軸判讀。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-52": {
    encouragement: "這題只要求「觀察或合理推論」；對照圖中的高峰、氧氣曲線與生物時間線即可。",
    keyIdea: "縞狀鐵礦主要集中約24億年前；現代氧多使Fe²⁺濃度低，細菌可生活於極低氧環境。",
    steps: ["圖中最大縞狀鐵礦相對含量出現在約24億年前，且現代氧氣遠高於早期。", "細菌的時間線延伸到極早、低氧時期，支持其可在極低氧下生存。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "圖中最高、最主要的縞狀鐵礦峰約位於24億年前。" },
      B: { verdict: "incorrect", reason: "岩漿提供Fe²⁺不代表沉積形成的縞狀鐵礦屬火成岩。" },
      C: { verdict: "correct", reason: "今日海水含氧較多，Fe²⁺易被氧化沉澱，因此濃度比25億年前低。" },
      D: { verdict: "incorrect", reason: "大氣氧氣含量在地史中有明顯階段性變化，不是線性增加。" },
      E: { verdict: "correct", reason: "細菌早在大氣含氧極低時已存在，表示有些細菌可適應極低氧環境。" }
    },
    takeaway: "物質來源不等於岩石分類；岩石要依最後形成過程分類。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-28": {
    encouragement: "複雜結構不用完整命名，先數碳氫氧並比較分子式，就能判斷異構關係。",
    keyIdea: "化合物甲分子式為C₂₁H₃₀O₅；甲、乙分子式相同但結構不同，互為異構物。",
    steps: ["依線角式數端點、轉折點與官能基，甲為C₂₁H₃₀O₅。", "乙具有相同原子數但連接方式不同，因此兩者互為結構異構物。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由線角式計數可得甲的分子式C₂₁H₃₀O₅。" },
      B: { verdict: "incorrect", reason: "甲、乙都不是只有20個碳，線段端點與轉折點需全部計入。" },
      C: { verdict: "correct", reason: "甲、乙分子式相同、結構不同，符合異構物定義。" },
      D: { verdict: "incorrect", reason: "題目只說各自吸光度與濃度成正比，不能直接把苦度判為與兩者總濃度成反比。" },
      E: { verdict: "incorrect", reason: "異辛烷用來萃取苦味物質並形成分層，不是為了讓酸與啤酒更均勻混合。" }
    },
    takeaway: "線角式每個端點與轉折點都是碳；異構物必須同分子式、不同結構。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-29": {
    encouragement: "測量流程題抓兩件事：每次只改一個條件，以及吸光度會隨萃取層濃度改變。",
    keyIdea: "強酸與弱酸造成的差異會影響測值；步驟二是液－液萃取。",
    steps: ["實驗一、二使用強酸且結果接近，實驗三改用弱酸後苦度大降，顯示酸的強弱會影響測量。", "異辛烷與水相分層，苦味物質轉入異辛烷層，這是萃取。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "只改酸的種類與濃度後測值明顯改變，顯示酸強弱會影響苦度測量。" },
      B: { verdict: "incorrect", reason: "異辛烷加倍會稀釋萃取層，吸光度約減半，苦度不會變成約53。" },
      C: { verdict: "incorrect", reason: "加入NaOH會使弱酸型苦味物質更易成酸根留在水層，酸根濃度不會下降。" },
      D: { verdict: "incorrect", reason: "啤酒量加倍而其他步驟不變，萃取物增加，測得苦度不會變低。" },
      E: { verdict: "correct", reason: "利用互不相溶的水相與異辛烷相轉移溶質，正是液－液萃取法。" }
    },
    takeaway: "萃取靠溶質在兩個不互溶液層間的偏好不同；酸鹼狀態會改變這種偏好。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  }
});
