window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-101-4": {
    encouragement: "先抓住病毒最重要的特徵：離開活細胞後，它自己不能進行完整的生命活動。",
    keyIdea: "病毒必須利用寄主細胞的材料與機器，才能複製核酸和製造蛋白質。",
    steps: ["題組中的病原體是病毒，不是能獨立生活的細胞。", "逐項檢查病毒的遺傳物質、繁殖方式與是否能獨立代謝。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "病毒進入寄主後，可以借用寄主的核糖體合成病毒蛋白質。" },
      B: { verdict: "incorrect", reason: "病毒以複製與組裝產生新病毒，不進行一般生物的有性生殖。" },
      C: { verdict: "incorrect", reason: "病毒的遺傳物質可能是 DNA，也可能是 RNA，不一定有 DNA。" },
      D: { verdict: "incorrect", reason: "一個病毒通常只以 DNA 或 RNA 其中一種作為遺傳物質。" },
      E: { verdict: "correct", reason: "病毒單獨存在時不能代謝與繁殖，因此不表現完整生命現象。" }
    },
    takeaway: "判斷病毒題時，記得「離開活細胞就無法自行繁殖與代謝」。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-102-36": {
    encouragement: "把半透膜想成只讓水通過的小門，水會往溶質較多的一側移動。",
    keyIdea: "滲透是水分子通過選擇性通透膜，由低溶質濃度側移向高溶質濃度側。",
    steps: ["先確認移動的是水，不是把水和溶質都算進去。", "再判斷是否耗能，以及膜蛋白能否協助水通過。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "滲透是物理現象，人工半透膜也會發生，不限於活細胞。" },
      B: { verdict: "correct", reason: "低濃度側的水移向高濃度側，因此低濃度溶液體積會減少。" },
      C: { verdict: "incorrect", reason: "滲透專指水通過半透膜，不包含溶質也一起通過。" },
      D: { verdict: "correct", reason: "細胞膜上的水通道蛋白可讓水更快通過，提高滲透效率。" },
      E: { verdict: "incorrect", reason: "水順著水勢差移動屬被動運輸，不需要細胞消耗能量。" }
    },
    takeaway: "滲透只看水：水由溶質少的一側移向溶質多的一側。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-28": {
    encouragement: "人工神經網路的名稱很難，但只要把輸入、整合、輸出對回神經元即可。",
    keyIdea: "神經元以樹突接收訊息、細胞本體整合，再經軸突輸出並由突觸傳遞。",
    steps: ["先找出圖中的輸入端、整合中心與輸出端。", "再和樹突、細胞本體、軸突及突觸逐一配對。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "輸入訊息較像由樹突接收，不是由細胞本體的軸突接收。" },
      B: { verdict: "correct", reason: "權值控制輸入訊息傳給 Y 的影響，很像突觸調節訊息傳遞。" },
      C: { verdict: "correct", reason: "Y 負責整合各項輸入，功能相當於神經元的細胞本體。" },
      D: { verdict: "incorrect", reason: "M 是整合後送出的訊息，較像軸突輸出而不是樹突。" },
      E: { verdict: "incorrect", reason: "Z 是系統執行的動作，不是負責感受刺激的受器。" }
    },
    takeaway: "神經元流程可簡記為：樹突接收、胞體整合、軸突輸出、突觸傳遞。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-112-58": {
    encouragement: "看到「把生物分子單體串成鏈」時，先從分子中的氮元素想到胺基酸。",
    keyIdea: "路鄧素是由胺基酸串接再成環的胜肽，胺基酸也是蛋白質的單體。",
    steps: ["分子含多個氮，且以單體串成鏈後成環，符合胜肽的特徵。", "胺基酸以肽鍵相連，可形成胜肽或蛋白質。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "纖維素由許多葡萄糖連接而成，不是由胺基酸組成。" },
      B: { verdict: "incorrect", reason: "核苷酸本身是核酸的單體，不是這些單體串接後的蛋白質。" },
      C: { verdict: "correct", reason: "路鄧素的單體是胺基酸，而胺基酸串接可形成蛋白質。" },
      D: { verdict: "incorrect", reason: "三酸甘油酯由甘油與三條脂肪酸組成，不是鏈狀胺基酸。" },
      E: { verdict: "incorrect", reason: "葡萄糖是醣類單體，不是胺基酸串接後形成的物質。" }
    },
    takeaway: "胺基酸是蛋白質的單體；核苷酸是核酸的單體；葡萄糖可組成多醣。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-90-20": {
    encouragement: "遠洋區看不到大型水草也沒關係，想想哪些生產者能漂在表層接受陽光。",
    keyIdea: "遠洋區的主要生產者是體型微小、能在透光層行光合作用的浮游植物。",
    steps: ["生產者必須能行光合作用，所以要位在有光的海水表層。", "遠離海岸缺少可附著的淺水底部，因此浮游植物最重要。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "大型水生植物多需固定在較淺的底部，不是遠洋區主要生產者。" },
      B: { verdict: "correct", reason: "浮游植物漂在遠洋透光層中，數量多且能進行光合作用。" },
      C: { verdict: "incorrect", reason: "石蓴多附著在沿岸淺海，不適合成為遠洋區主要生產者。" },
      D: { verdict: "incorrect", reason: "藻類範圍很廣，但題目問遠洋主要類群，應精確選浮游植物。" }
    },
    takeaway: "遠洋食物網的能量起點，多是透光層中的浮游植物。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-90-69": {
    encouragement: "粗糙內質網的「粗糙小點」就是解題關鍵：那是負責製造蛋白質的核糖體。",
    keyIdea: "粗糙內質網表面的顆粒是核糖體，核糖體負責蛋白質合成。",
    steps: ["先辨認內質網表面附著的小顆粒是核糖體。", "再把核糖體和轉譯、合成蛋白質的功能配對。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高基氏體是另一種膜狀胞器，不是附著在內質網上的顆粒。" },
      B: { verdict: "incorrect", reason: "粒線體體積較大且有雙層膜，不是內質網表面的小顆粒。" },
      C: { verdict: "correct", reason: "粗糙內質網表面的顆粒正是核糖體。" },
      D: { verdict: "incorrect", reason: "中心粒參與細胞分裂，不會密布在內質網表面。" },
      E: { verdict: "incorrect", reason: "分泌物的修飾與貯藏較接近高基氏體的功能。" },
      F: { verdict: "incorrect", reason: "細胞能量供應主要由粒線體進行，不是核糖體的功能。" },
      G: { verdict: "correct", reason: "核糖體讀取訊息 RNA，將胺基酸組成蛋白質。" },
      H: { verdict: "incorrect", reason: "細胞分裂相關構造是中心粒與紡錘體，不是核糖體。" }
    },
    takeaway: "粗糙內質網有核糖體；核糖體的工作就是合成蛋白質。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-91-68": {
    encouragement: "這題像找共同拼圖：有活性的片段一定都保留了真正重要的區域。",
    keyIdea: "比較保有活性與失去活性的片段，可把活性區縮小到第 44～196 號。",
    steps: ["1～196 有活性，表示活性區在這段之內。", "86～419 無活性但 44～419 有活性，表示 44～85 很重要；再排除 1～43 後得到 44～196。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "197～419 的片段沒有活性，因此這一段不可能單獨構成活性區。" },
      B: { verdict: "incorrect", reason: "44～419 有活性，表示即使沒有 1～43，酵素仍能作用。" },
      C: { verdict: "correct", reason: "所有有活性片段都能涵蓋 44～196，無活性片段則缺少其中關鍵部分。" },
      D: { verdict: "incorrect", reason: "1～196 已有活性，表示 197～302 並非酵素作用所必需的區段。" }
    },
    takeaway: "片段實驗要找「有活性者共同保留、無活性者缺少」的區域。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-92-68": {
    encouragement: "先把海拔換成生產力：海拔越高，題目已告訴你生產力越低。",
    keyIdea: "圖中苔蘚物種數在中海拔最高，因此對應到中等生產力時豐富度最高。",
    steps: ["圖上的物種豐富度由低海拔上升，在中海拔達高峰後下降。", "因生產力隨海拔升高而降低，高峰便落在中等生產力。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "生產力最高在低海拔，但圖中低海拔的物種豐富度不是最高。" },
      B: { verdict: "correct", reason: "豐富度高峰落在中海拔，也就是中等生產力的地區。" },
      C: { verdict: "incorrect", reason: "題幹已說生產力會隨海拔增加而降低，不是升高。" },
      D: { verdict: "incorrect", reason: "生產力假說預期越高越豐富，但本圖呈現中間最高，並不符合。" }
    },
    takeaway: "讀圖時先找最高點，再把橫軸海拔轉回題目真正關心的生產力。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-95-53": {
    encouragement: "只要看到一個隱性表現的小孩，就知道父母雙方都必須帶有隱性基因。",
    keyIdea: "長腳拇指是 tt；要生出 tt，小孩必須分別從父母各得到一個 t。",
    steps: ["那一名腳拇指較長的孩子基因型必為 tt。", "父母多數表現顯性又都能提供 t，因此最可能都是 Tt。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "TT 與 TT 的子代全是 TT，不可能出現腳拇指較長的 tt。" },
      B: { verdict: "incorrect", reason: "TT 親代只能提供 T，子代不可能得到兩個 t。" },
      C: { verdict: "correct", reason: "Tt 與 Tt 可生出 TT、Tt 和 tt，能同時解釋兩種表現型。" },
      D: { verdict: "incorrect", reason: "Tt 與 tt 生出長腳拇指的機率約一半，與 11 人僅 1 人不符。" },
      E: { verdict: "incorrect", reason: "tt 與 tt 的子代全為 tt，應全部都是腳拇指較長。" }
    },
    takeaway: "隱性子代出現時，兩位親代都一定提供了隱性等位基因。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-95-54": {
    encouragement: "圖中的甲指向病毒內部的螺旋線；題幹已直接說明它由哪兩種成分纏繞而成。",
    keyIdea: "流感病毒內部螺旋構造由單股 RNA 與核蛋白共同組成。",
    steps: ["先看正式題圖，甲指向球殼內部的螺旋構造。", "回到題幹找定義：遺傳物質和核蛋白纏繞形成螺旋。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "血凝素位在病毒外部膜套表面，不是甲所指的內部螺旋。" },
      B: { verdict: "correct", reason: "題幹明說內部螺旋構造含有核蛋白。" },
      C: { verdict: "correct", reason: "流感病毒遺傳物質是單股核糖核酸，也是螺旋構造的一部分。" },
      D: { verdict: "incorrect", reason: "基質蛋白形成球狀殼，位置不等於甲所指的螺旋構造。" },
      E: { verdict: "incorrect", reason: "神經氨酸酶鑲嵌於外部膜套，不在病毒內部螺旋中。" },
      F: { verdict: "incorrect", reason: "流感病毒的遺傳物質是 RNA，並不含去氧核糖核酸。" }
    },
    takeaway: "流感病毒內部是 RNA 加核蛋白，外部膜套才有 H 與 N 表面蛋白。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-95-61": {
    encouragement: "表格看起來很多，做法其實很單純：逐一判斷哪些物質本來就能由血液運到腦部。",
    keyIdea: "血液可帶抗體、尿素、激素、維生素、胺基酸、葡萄糖、礦物質與二氧化碳，共八種。",
    steps: ["先從表 9 的十種成分逐一檢查是否能出現在循環血液。", "澱粉不會直接進入血液，肝醣主要儲存在肝臟和肌肉，其餘八種可出現。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "逐項核對表 9，可由腦部血流帶過的成分不只六種。" },
      B: { verdict: "incorrect", reason: "排除不能直接存在血中的兩項後，仍剩八種而不是七種。" },
      C: { verdict: "correct", reason: "十項中排除澱粉與肝醣，可能流經腦部的共有八種。" },
      D: { verdict: "incorrect", reason: "至少有澱粉和肝醣不能算入，因此不會多達九種。" },
      E: { verdict: "incorrect", reason: "表中並非十種都可隨血液流經腦部，不能全部計入。" }
    },
    takeaway: "遇到計數題要逐項打勾，不要憑感覺估數量。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-95-63": {
    encouragement: "手術要選腦部最省氧的時段，因此直接找體溫最低且維持穩定的平台。",
    keyIdea: "降溫可降低腦細胞耗氧量，圖中 14～15 時體溫最低且穩定。",
    steps: ["從圖 24 找到體溫降至約 15℃的最低平台。", "選擇整段都位於最低平台的 14～15 時進行腦部手術。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10～12 時體溫仍接近正常，無法有效降低腦部耗氧量。" },
      B: { verdict: "incorrect", reason: "13 時 30 分仍處在降溫過程，尚未完全到達最低平台。" },
      C: { verdict: "correct", reason: "14～15 時體溫維持最低，最能延長腦部暫停供血的安全時間。" },
      D: { verdict: "incorrect", reason: "15～16 時開始回溫，腦細胞耗氧量也會逐漸增加。" }
    },
    takeaway: "低溫手術圖要找「最低而且穩定」的區段，不只看某一個低點。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-96-66": {
    encouragement: "第二次遇到相似抗原時抗體升得又快又高，關鍵就是第一次留下的記憶細胞。",
    keyIdea: "疫苗先建立免疫記憶，再遇到相關病毒時能迅速產生大量抗體。",
    steps: ["牛痘疫苗的抗原會啟動專一性免疫並形成記憶細胞。", "再次接觸天花病毒時，記憶細胞使次級免疫反應更快更強。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "牛痘病毒可感染人類並引起較輕反應，才可用來誘發免疫。" },
      B: { verdict: "incorrect", reason: "未接種者首次感染仍可產生抗體，只是反應較慢且風險較高。" },
      C: { verdict: "correct", reason: "接種後形成記憶細胞，再遇天花抗原便能快速產生大量抗體。" },
      D: { verdict: "incorrect", reason: "抗體主要由活化的 B 細胞分化成漿細胞後製造，不是 T 細胞。" },
      E: { verdict: "incorrect", reason: "第一次免疫反應較慢且抗體較少，不會和圖中的強烈次級反應相似。" }
    },
    takeaway: "疫苗的價值是先建立記憶細胞，讓下一次反應更快、更強。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-96-67": {
    encouragement: "圖中兩條曲線已把二氧化碳濃度分開，比較同一光強度下的高低最公平。",
    keyIdea: "控制相同光強度時，0.40% 二氧化碳組的光合作用速率高於 0.03% 組。",
    steps: ["固定同一個光強度，垂直比較兩條曲線。", "高二氧化碳曲線明顯較高，因此丁生的推論有資料支持。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光強到一定程度後曲線會進入平台，並非越強就一直升高。" },
      B: { verdict: "incorrect", reason: "只說二氧化碳越高過於廣泛，沒有交代必須控制相同光強度。" },
      C: { verdict: "incorrect", reason: "0.03% 組在較低光強時已接近平台，小於 4 也不是全程上升。" },
      D: { verdict: "correct", reason: "相同光強度下，高二氧化碳組速率較高，符合公平比較原則。" }
    },
    takeaway: "判讀實驗圖要一次只改一個變因，其他條件保持相同。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-96-68": {
    encouragement: "要測氣體 X，就先選原本光合作用最旺盛的條件，變化才容易被看見。",
    keyIdea: "圖中約 1.5 光強度、0.40% 二氧化碳時速率高且曲線仍有明顯反應空間。",
    steps: ["避免選低二氧化碳組，因速率容易先被二氧化碳限制。", "在高二氧化碳組中選 1.5 光強度，可清楚觀察加入氣體 X 後的促進或抑制。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.03% 二氧化碳已成限制因子，不利於看出氣體 X 的真正影響。" },
      B: { verdict: "incorrect", reason: "光強 3 時高二氧化碳曲線接近平台，促進效果較不容易顯現。" },
      C: { verdict: "correct", reason: "高二氧化碳且適中光強可維持較高反應，又保留上升與下降空間。" },
      D: { verdict: "incorrect", reason: "低光強加低二氧化碳同時限制光合作用，難以分辨 X 的作用。" }
    },
    takeaway: "測新因子時，要避免其他條件先成為限制因子。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-19": {
    encouragement: "能量塔由下到上是藻類、蝦、小魚、大魚；新來的鱷魚會先吃最高層獵物。",
    keyIdea: "圖中甲位在能量塔最上層，代表食物鏈中的大魚，最先受到鱷魚捕食影響。",
    steps: ["依食物鏈把藻類到大魚排成由塔底到塔頂。", "鱷魚是新增的大型掠食者，會最先影響塔頂的大魚甲。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲位於塔頂，代表大魚，最可能先成為鱷魚的獵物。" },
      B: { verdict: "incorrect", reason: "乙代表小魚，通常在大魚受到影響後才會出現間接變化。" },
      C: { verdict: "incorrect", reason: "丙代表蝦，和新進入的鱷魚之間隔著其他營養階層。" },
      D: { verdict: "incorrect", reason: "丁位於塔底代表藻類，最先受到的是間接而非直接影響。" }
    },
    takeaway: "能量塔最底層是生產者，越往上營養階層越高、能量越少。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-25": {
    encouragement: "箭頭很多時先別慌：多條食物鏈交錯就是食物網，再看濃度是否往高階增加。",
    keyIdea: "圖示為食物網，環境荷爾蒙沿食物關係有放大現象，人類也可能由其他途徑接觸。",
    steps: ["多種生物彼此有數條取食路徑，因此甲正確。", "高營養階層的人濃度最高，支持乙；圖中無法整理成四個固定階層，所以丙錯。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、乙正確，但圖中生物不能固定排成四個營養階層，丙錯。" },
      B: { verdict: "correct", reason: "食物網、生物放大與其他暴露途徑三項說法都合理。" },
      C: { verdict: "incorrect", reason: "此組合包含錯誤的丙，且漏掉圖中濃度支持的生物放大。" },
      D: { verdict: "incorrect", reason: "乙、丁合理，但丙把交錯食物網硬分四層，並不正確。" }
    },
    takeaway: "食物網可讓同一生物位於不同營養階層，不能一律硬切成固定層數。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-36": {
    encouragement: "移除最強掠食者不代表池中完全沒有掠食者，貽貝本身也會捕食其他生物。",
    keyIdea: "實驗組只移除海星；會捕食無脊椎動物和藻類的貽貝仍留在池中。",
    steps: ["先分清實驗操作只移除了海星。", "題幹說貽貝會捕食其他生物，所以實驗組仍存在掠食者。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "對照組物種數大致穩定，並沒有每年快速增加。" },
      B: { verdict: "incorrect", reason: "實驗組前幾年下降後趨於低值，並非每一年都持續下降。" },
      C: { verdict: "incorrect", reason: "題幹明說潮間池中最強勢的掠食者是海星，不是貽貝。" },
      D: { verdict: "correct", reason: "海星雖被移除，但貽貝仍會捕食無脊椎動物和藻類。" }
    },
    takeaway: "實驗移除某一種掠食者，不等於移除生態系中的所有掠食作用。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-37": {
    encouragement: "兩條曲線的差異很清楚：有海星時穩定，移除海星後物種數大幅下降。",
    keyIdea: "海星是關鍵掠食者，能壓制強勢貽貝，讓其他物種保有生存空間。",
    steps: ["比較實驗組與對照組，主要差別只有是否移除海星。", "無海星組物種數顯著下降，表示主要掠食者有助維持多樣性。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "有海星的自然對照組物種數大致穩定，並非一定逐年減少。" },
      B: { verdict: "incorrect", reason: "生產者與消費者彼此影響，增加生產者可能改變消費者組成。" },
      C: { verdict: "correct", reason: "移除主要掠食者後物種數大幅下降，正是實驗圖顯示的結果。" },
      D: { verdict: "incorrect", reason: "資料只比較有無海星，不能推論所有相同外在干擾都無法穩定。" }
    },
    takeaway: "關鍵種數量不一定多，卻可能對整個群集的物種多樣性影響很大。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-60": {
    encouragement: "沿著因果鏈走就好：鐵增加、浮游植物增加、光合作用增加、二氧化碳減少。",
    keyIdea: "若鐵肥理論成立，浮游植物增加會加強光合作用並消耗更多大氣二氧化碳。",
    steps: ["鐵質幫助植物性浮游生物生長，會提高整體光合作用。", "光合作用吸收二氧化碳，因此大氣中的二氧化碳濃度下降。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光合作用增加會消耗更多二氧化碳，不會使大氣濃度增加。" },
      B: { verdict: "correct", reason: "浮游植物光合作用增加，會使大氣中的二氧化碳濃度減少。" },
      C: { verdict: "incorrect", reason: "施鐵的目的正是促進浮游植物生長與光合作用，不是減少。" },
      D: { verdict: "incorrect", reason: "光合作用若減少，就缺乏讓二氧化碳濃度下降的主要機制。" }
    },
    takeaway: "光合作用吸收二氧化碳，呼吸作用則會把二氧化碳釋回環境。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-61": {
    encouragement: "找「不利證據」就是找哪個結果會讓碳無法長久沉到海底。",
    keyIdea: "浮游植物若大量被吃，碳會進入食物鏈並經呼吸作用回到大氣。",
    steps: ["理論成立的關鍵是浮游植物死亡後沉入海底封存碳。", "若大多被動物吃掉，碳會沿食物鏈移動並再以二氧化碳釋出。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "死後沉入海底正有助長期封存碳，反而支持這項理論。" },
      B: { verdict: "incorrect", reason: "只有少量被吃表示多數仍可能沉底，對理論較為有利。" },
      C: { verdict: "incorrect", reason: "此敘述沒有直接顯示碳被重新釋回大氣，不能構成關鍵反證。" },
      D: { verdict: "correct", reason: "大量進入食物鏈後會經呼吸作用釋回二氧化碳，不利長期封存。" }
    },
    takeaway: "碳要真正封存，不只要被吸收，還必須避免很快經食物鏈與呼吸回到大氣。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-99-9": {
    encouragement: "檢索表每個分岔都在問一個特徵；只要看該分岔兩邊的植物差在哪裡。",
    keyIdea: "地錢與其餘植物以維管束區分；滿江紅與蘇鐵之後的植物以種子區分。",
    steps: ["地錢沒有維管束，其餘四種有維管束，所以甲正確。", "滿江紅沒有種子，蘇鐵、水筆仔與百合有種子，所以乙正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲是有無維管束，乙是有無種子，兩個分類依據都正確。" },
      B: { verdict: "incorrect", reason: "甲正確，但丙分開的是裸子與被子植物，不是有無形成層。" },
      C: { verdict: "incorrect", reason: "甲正確，但丁用來區分水筆仔和百合，不是是否會開花。" },
      D: { verdict: "incorrect", reason: "乙正確，但丙不應解釋為有無形成層。" },
      E: { verdict: "incorrect", reason: "丙與丁的敘述都不能正確對應圖中的分岔特徵。" }
    },
    takeaway: "檢索表的每個問題，都必須讓分岔兩邊的生物得到不同答案。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-99-2": {
    encouragement: "圓餅大小直接代表比例，逐季比較同一個代號，就能看出最高與最低。",
    keyIdea: "圖中丁代表鳥類，冬季的丁區塊明顯比春、夏、秋都大。",
    steps: ["依題目把甲乙丙丁對回四種食物。", "只比較丁在四季圓餅中的面積，冬季最大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丙代表昆蟲，四季區塊大小有變化，並非完全不變。" },
      B: { verdict: "correct", reason: "丁代表鳥類，正式題圖中冬季的丁所占比例最大。" },
      C: { verdict: "incorrect", reason: "甲代表兔子或囓齒類，秋季所占比例不是四季最高。" },
      D: { verdict: "incorrect", reason: "圖只呈現狐狸食物比例，不能直接判定植物何時大量開花結果。" }
    },
    takeaway: "圓餅圖只能支持比例比較，不能額外推論圖中沒有測量的花期或總數。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-44": {
    encouragement: "DNA 每轉一圈約有 10 個鹼基對，而每一對又含兩個含氮鹼基。",
    keyIdea: "圖中 Y 是 DNA 的一個完整螺旋，共 10 個鹼基對，也就是 20 個含氮鹼基。",
    steps: ["從正式題圖判斷 Y 標示一個完整螺旋。", "一圈約 10 個鹼基對，每對有 2 個含氮鹼基，所以共有 20 個。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "8 個含氮鹼基只等於 4 個鹼基對，少於一個完整螺旋。" },
      B: { verdict: "incorrect", reason: "10 是一圈的鹼基對數，不是把兩股都計入的含氮鹼基總數。" },
      C: { verdict: "incorrect", reason: "12 個含氮鹼基等於 6 對，仍不足圖中 Y 的完整一圈。" },
      D: { verdict: "incorrect", reason: "16 個含氮鹼基等於 8 對，少算了完整一圈所需的鹼基對。" },
      E: { verdict: "correct", reason: "10 個鹼基對乘以每對 2 個含氮鹼基，得到 20 個。" },
      F: { verdict: "incorrect", reason: "24 個含氮鹼基等於 12 對，比圖示一個完整螺旋多。" }
    },
    takeaway: "鹼基對數乘以 2，才是雙股 DNA 的含氮鹼基總數。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-51": {
    encouragement: "活化後內質網大量增加，表示細胞正忙著製造並分泌大量蛋白質。",
    keyIdea: "此細胞是活化的 B 細胞形成的漿細胞，功能是大量分泌抗體。",
    steps: ["專一性防禦加上發達內質網，指向大量製造蛋白質的漿細胞。", "抗體是蛋白質，某些 IgE 抗體和過敏反應有關。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "組織胺主要由肥大細胞等釋放，不是漿細胞的主要產物。" },
      B: { verdict: "incorrect", reason: "血小板是血液中的細胞碎片，不是由此免疫細胞釋放。" },
      C: { verdict: "correct", reason: "漿細胞可分泌抗體，其中 IgE 抗體與過敏反應密切相關。" },
      D: { verdict: "incorrect", reason: "HIV 主要攻擊輔助型 T 細胞，不是負責分泌抗體的漿細胞。" },
      E: { verdict: "incorrect", reason: "吞噬病原體主要是巨噬細胞等，漿細胞的工作是分泌抗體。" }
    },
    takeaway: "看到發達粗糙內質網，可聯想到細胞正在大量製造分泌性蛋白質。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-53": {
    encouragement: "看箭頭方向：甲能從血液進入鮑氏囊，乙則留在血管中。",
    keyIdea: "尿素等小分子可被腎小球濾出；紅血球體積大，正常不會進入濾液。",
    steps: ["正式題圖中甲通過腎小球進入鮑氏囊，應是可濾出的小分子。", "乙沿血管離開，應是不能通過濾膜的紅血球。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "紅血球不能正常通過腎小球濾膜，不能放在甲的位置。" },
      B: { verdict: "correct", reason: "尿素可被濾入鮑氏囊，紅血球則留在血管中，符合箭頭。" },
      C: { verdict: "incorrect", reason: "葡萄糖和鈉離子都可被濾出，不能分別代表甲與留在血中的乙。" },
      D: { verdict: "incorrect", reason: "鈉離子與葡萄糖同為可濾出小分子，乙不應只留在血管。" },
      E: { verdict: "incorrect", reason: "紅血球和白血球通常都不通過濾膜，甲不會進入鮑氏囊。" }
    },
    takeaway: "腎小球可濾出水與小分子，但血球和大型蛋白質通常留在血液。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-102-61": {
    encouragement: "先找圖中的地震時間，再比較地震前後總量與黑色的「再捕捉」部分。",
    keyIdea: "地震後蛙數驟降，再捕捉個體幾乎消失，後來族群多由新捕捉個體組成。",
    steps: ["地震箭頭後長條高度大幅下降，顯示數量明顯減少。", "地震後黑色再捕捉部分很少，後來出現的多是新捕捉個體。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地震後各月被記錄到的蛙隻總量比地震前明顯降低。" },
      B: { verdict: "correct", reason: "地震後黑色再捕捉區塊大幅減少，部分月份甚至沒有。" },
      C: { verdict: "incorrect", reason: "若多為地震前存活個體，應看到較高的再捕捉比例，但圖中沒有。" },
      D: { verdict: "correct", reason: "地震後以沒有晶片的新捕捉個體為主，舊個體多未再出現。" },
      E: { verdict: "incorrect", reason: "圖中地震前也有秋冬紀錄，不能說秋冬甚至必然完全消失。" }
    },
    takeaway: "標記再捕法中，再捕捉比例可幫助判斷原族群個體是否仍然存在。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-103-50": {
    encouragement: "圖的零線很重要：上方是促進，下方是抑制；再找各曲線最高點。",
    keyIdea: "莖在 1 ppm 左右達最大促進；10⁻³ ppm 時根、芽、莖三者都在零線上方。",
    steps: ["先用零線判斷促進或抑制，再看三條曲線的高峰位置。", "莖的高峰約在 1 ppm；10⁻³ ppm 時三個部位都呈正生長率。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "低濃度時最先明顯反應的是根，不是莖，因此根較敏感。" },
      B: { verdict: "correct", reason: "莖曲線的最高點約落在 1 ppm，表示促進效果最大。" },
      C: { verdict: "incorrect", reason: "10⁻¹ ppm 時芽曲線已低於零，代表抑制，不等於剛好停止。" },
      D: { verdict: "incorrect", reason: "10⁻² ppm 時根的相對生長率約在零線，不足以說長度縮短。" },
      E: { verdict: "correct", reason: "10⁻³ ppm 時根、芽與莖三條曲線都在零線上方。" }
    },
    takeaway: "生長素濃度不同，根、芽、莖的敏感程度和反應也不同。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-104-57": {
    encouragement: "年齡結構圖先看底部寬不寬，再比較左右男女在高齡層的差異。",
    keyIdea: "甲底寬屬成長型；乙底較窄且高齡比例高，呈老年化，男性高齡者也較少。",
    steps: ["甲幼年人口多，人口傾向成長；乙幼年較少，並非成長型。", "乙國高齡女性多於男性，顯示男性死亡率較高，也較像現代臺灣。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲國底部寬、幼年人口多，較像正在成長而不是衰退。" },
      B: { verdict: "incorrect", reason: "乙國幼年人口較少、老年比例較高，不是典型增長型。" },
      C: { verdict: "correct", reason: "乙國高齡層女性明顯多於男性，可推知男性死亡率較高。" },
      D: { verdict: "correct", reason: "乙國底部較窄且中高齡比例增加，年齡組成趨向老年化。" },
      E: { verdict: "correct", reason: "臺灣少子化且高齡人口增加，年齡結構較接近乙國。" }
    },
    takeaway: "底寬常表示成長，底窄且高齡比例高則表示少子化與老年化。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-105-34": {
    encouragement: "題幹已給顯隱性，圖則只告訴你表現型比例；不要把表現型直接當成基因型。",
    keyIdea: "褐色是 TT 或 Tt，黃色是 tt；十年間褐色下降、黃色上升，但兩種等位基因仍並存。",
    steps: ["由題幹確認 T 顯性、t 隱性，先排除把 t 說成顯性的敘述。", "圖中兩種顏色十年內都存在，且褐色比例逐年降低。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "TT 與 Tt 都是褐色，表示 T 才是顯性等位基因。" },
      B: { verdict: "incorrect", reason: "圖只列褐色總比例，無法把 TT 與 Tt 分開判斷。" },
      C: { verdict: "correct", reason: "褐色與黃色個體都存在，表示族群中同時保有 T 與 t。" },
      D: { verdict: "correct", reason: "圖中的褐色實線由約九成逐年降到約四成。" },
      E: { verdict: "incorrect", reason: "圖呈現的是顏色百分比，不提供族群個體總數大小。" }
    },
    takeaway: "顯性表現型可能有兩種基因型，只有表現型比例不能直接算出 TT。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-105-61": {
    encouragement: "出生率和死亡率像水龍頭與排水口：兩者相等時水量穩定。",
    keyIdea: "資源量 R 時出生率等於死亡率；低於 R 時死亡率高於出生率，族群可能衰退。",
    steps: ["找出兩條曲線交點 R，此處出生率等於死亡率。", "R 左側出生率低於死亡率，若長期如此族群會持續減少。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "資源會影響出生率與死亡率，因此也會改變族群大小。" },
      B: { verdict: "correct", reason: "長期低於 R 時死亡率高於出生率，族群可能一路減少至滅絕。" },
      C: { verdict: "correct", reason: "R 點出生率等於死亡率，若無其他變化，族群大小可維持穩定。" },
      D: { verdict: "incorrect", reason: "實線會隨資源量上升而改變，表示出生率受資源影響。" },
      E: { verdict: "incorrect", reason: "資源增加後出生率會達平台，環境還有其他限制，不能無限成長。" }
    },
    takeaway: "出生率等於死亡率時族群穩定；出生率較低時族群會縮小。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-106-24": {
    encouragement: "睪丸切片由管壁往管腔看，細胞會從早期生殖細胞逐步成熟成精子。",
    keyIdea: "甲是雙套的早期生殖細胞；乙接近管腔、像成熟精子；丙為製造雄性激素的間質細胞。",
    steps: ["正式題圖中乙位於管腔且有精子外形，甲位於細精管壁較外側。", "丙位在細精管外的間質，會分泌雄性激素影響第二性徵。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲是較早期的生殖細胞，仍具有雙套染色體。" },
      B: { verdict: "incorrect", reason: "甲到乙需經減數分裂與分化，不是只靠一次有絲分裂。" },
      C: { verdict: "incorrect", reason: "乙已接近成熟精子形態，不再進行減數分裂。" },
      D: { verdict: "correct", reason: "乙位於管腔且外形接近之後儲存在副睪中的精子。" },
      E: { verdict: "correct", reason: "丙為間質細胞，受損會減少雄性激素並影響第二性徵。" }
    },
    takeaway: "細精管內製造精子，細精管外的間質細胞負責分泌雄性激素。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-107-10": {
    encouragement: "清潔劑條件有兩個：常溫和鹼性；要找在兩張圖都表現好的同一種酵素。",
    keyIdea: "丁在常溫附近仍有活性，且最適 pH 約為 8，適合鹼性廚房清潔劑。",
    steps: ["先看溫度圖，挑出常溫約 20～30℃有高活性的酵素。", "再看 pH 圖，丁的高峰位於鹼性的 pH 8 左右。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲雖可在常溫作用，但最適 pH 偏酸，不適合鹼性清潔劑。" },
      B: { verdict: "incorrect", reason: "乙的最適 pH 接近中性，與題目的鹼性環境不完全配合。" },
      C: { verdict: "incorrect", reason: "丙偏好較高溫，常溫下的活性不如最合適者。" },
      D: { verdict: "correct", reason: "丁在常溫仍有良好活性，且最適 pH 位於鹼性範圍。" },
      E: { verdict: "incorrect", reason: "戊最適溫度較低且最適 pH 更高，綜合條件不如丁合適。" }
    },
    takeaway: "兩張條件圖要取交集，不能只看溫度或只看 pH。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-26": {
    encouragement: "先用虛線分出腎皮質與腎髓質，再辨認腎小球、腎小管和集尿管的位置。",
    keyIdea: "V 是腎小球附近小動脈進出的腎門戶；Y 位在虛線下方的腎髓質。",
    steps: ["正式題圖中 V 位於入球與出球小動脈連接腎小球處。", "虛線下是腎髓質，Y 標在亨利氏環深部，因此 Y 細胞在髓質。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "V 位於腎小球血管極，是入球與出球小動脈進出的部位。" },
      B: { verdict: "incorrect", reason: "W 在腎小囊與近曲小管區，主要不是以分泌作用為主。" },
      C: { verdict: "incorrect", reason: "X 位於腎皮質中的腎小管，不是在收集尿液的腎盂。" },
      D: { verdict: "correct", reason: "Y 在皮髓質分界線下方的亨利氏環，位置屬腎髓質。" },
      E: { verdict: "incorrect", reason: "Z 處主要進行水與鹽類調節，氫離子通常是分泌而非再吸收。" }
    },
    takeaway: "腎小球多在皮質，亨利氏環向下伸入髓質，腎盂則負責匯集尿液。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-109-55": {
    encouragement: "實線到 2019 年，虛線是預測；先看斜率是否仍向上，再看斜率有沒有變小。",
    keyIdea: "目前人口仍增加，但預測曲線逐漸變平，表示未來成長率下降。",
    steps: ["2019 年附近曲線仍向上，所以人口是正成長。", "往未來曲線斜率逐漸變小，且每名女性略多於兩名子女可接近世代替代。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "整段曲線斜率不固定，不能用單一指數函數完整表示。" },
      B: { verdict: "correct", reason: "2019 年附近人口曲線仍然上升，表示族群仍處於正成長期。" },
      C: { verdict: "correct", reason: "未來二十年的曲線逐漸變平，代表每年的成長率逐漸下降。" },
      D: { verdict: "incorrect", reason: "目前年齡結構不能單獨決定六十年後走向，生育與死亡也會改變。" },
      E: { verdict: "correct", reason: "每名成年女性生育數略大於二，可補足雙親並抵消部分未繁殖者。" }
    },
    takeaway: "曲線仍上升代表正成長；曲線越來越平代表成長率正在下降。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-110-41": {
    encouragement: "把人口表放回 S 型曲線：早期成長很慢，工業革命後才明顯加速。",
    keyIdea: "西元 1200 年仍接近適應期；工業革命提升糧食供應，是人口快速增加的因素。",
    steps: ["表中西元 1 年到 1200 年增加不多，可對應成長初期。", "18 世紀後人口增速加快，耕作與糧食增加提供了重要條件。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "西元 1200 年人口仍成長緩慢，可視為 S 型曲線的適應期。" },
      B: { verdict: "incorrect", reason: "醫藥衛生進步降低死亡率，會促進人口增加，不是提早達平衡期。" },
      C: { verdict: "incorrect", reason: "第一型存活曲線描述死亡年齡分布，不能單獨造成指數成長。" },
      D: { verdict: "incorrect", reason: "人口總數表沒有各年齡層資料，無法判斷年齡結構圖形。" },
      E: { verdict: "correct", reason: "新耕具提升糧食產量與可利用資源，能支持更多人口快速成長。" }
    },
    takeaway: "總人口資料能看成長速度，卻不能直接推出各年齡層比例。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-111-25": {
    encouragement: "柱狀圖要同時看日期和劑量；虛線以上才具有檢測參考意義。",
    keyIdea: "合適首劑在第 22 天已有反應；第二劑後第 29 天明顯升高，60 µg 未追加組可作比較。",
    steps: ["第 22 天部分劑量已超過檢測極限，表示首劑可產生免疫原性。", "第 29 天追加組大增，但未追加的 60 µg 組沒有同樣上升。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 µg 是低劑量實驗組，不是沒有施打疫苗的控制組。" },
      B: { verdict: "incorrect", reason: "第 1 日柱高約 10，不是校正成 1，而且圖使用對數刻度。" },
      C: { verdict: "correct", reason: "第 22 天部分合適劑量已超過虛線，具有可檢測的免疫原性。" },
      D: { verdict: "correct", reason: "第 22 日追加後，第 29 日多個劑量組抗體量明顯提高。" },
      E: { verdict: "correct", reason: "60 µg 未打第二劑且反應未大幅上升，支持追加劑的重要性。" }
    },
    takeaway: "讀疫苗圖要看控制條件、施打時間，並確認數值是否超過檢測極限。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-111-46": {
    encouragement: "核苷酸只有三部分：磷酸、五碳糖、含氮鹼基；RNA 的糖是核糖。",
    keyIdea: "甲為磷酸基，乙為核糖，丙可為 A、U、C、G 中任一種含氮鹼基。",
    steps: ["圓形甲連在五碳糖外側，代表磷酸基；五角形乙是核糖。", "RNA 的鹼基包括腺嘌呤、尿嘧啶、胞嘧啶與鳥糞嘌呤。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "核苷酸模式圖中，連在五碳糖外側的甲代表磷酸基。" },
      B: { verdict: "incorrect", reason: "這是 RNA 核苷酸，乙應是核糖而不是去氧核糖。" },
      C: { verdict: "correct", reason: "胞嘧啶是 RNA 的四種含氮鹼基之一，丙可能是胞嘧啶。" },
      D: { verdict: "correct", reason: "鳥糞嘌呤也是 RNA 的含氮鹼基之一，丙可能是它。" },
      E: { verdict: "incorrect", reason: "尿嘧啶正是 RNA 特有的常見鹼基，丙當然可能是尿嘧啶。" }
    },
    takeaway: "RNA 含核糖與 A、U、C、G；DNA 含去氧核糖與 A、T、C、G。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-114-2": {
    encouragement: "先看化學式箭頭：食物加氧變成二氧化碳和水，是呼吸作用；反向才是光合作用。",
    keyIdea: "甲為呼吸作用並輸出代謝能；乙為光合作用，在植物葉綠體中進行。",
    steps: ["甲的反應物是食物與氧，產物是二氧化碳和水，判定為呼吸作用。", "乙把二氧化碳和水合成食物與氧，判定為葉綠體中的光合作用。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是分解食物並消耗氧氣的呼吸作用，不是光合作用。" },
      B: { verdict: "incorrect", reason: "光合作用釋出的氧主要來自水的分解，不是二氧化碳。" },
      C: { verdict: "correct", reason: "乙表示光合作用，主要在植物細胞的葉綠體中進行。" },
      D: { verdict: "correct", reason: "甲是呼吸作用，分解食物時會釋出可供使用的代謝能量。" },
      E: { verdict: "incorrect", reason: "光合作用需要的是太陽光能，不是把太陽熱能直接輸入反應。" }
    },
    takeaway: "呼吸作用釋放食物能量；光合作用把光能轉成有機物中的化學能。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-115-34": {
    encouragement: "這題用時間軸排除即可：恐龍大滅絕在白堊紀末，不是侏羅紀末。",
    keyIdea: "圖示寒武紀後海洋生物多樣性快速上升，奧陶紀形成並擴張古生動物相。",
    steps: ["沿圖的時間軸觀察寒武紀到奧陶紀，古生動物相快速增加。", "再用五次大滅絕與地質年代常識排除過度或錯置的敘述。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "寒武紀大爆發後，奧陶紀的古生動物相在圖中明顯快速增加。" },
      B: { verdict: "incorrect", reason: "第 1 次大滅絕後古生動物相仍大量存在，沒有幾乎全部消失。" },
      C: { verdict: "incorrect", reason: "第 3 次後仍有類群延續，不能說中生代物種都不再出現在新生代。" },
      D: { verdict: "incorrect", reason: "非鳥恐龍大量滅絕發生在白堊紀末，不是侏羅紀即將結束時。" },
      E: { verdict: "incorrect", reason: "多樣性同時受新物種形成與滅絕影響，不只由滅絕速率決定。" }
    },
    takeaway: "生物多樣性是物種形成與物種滅絕共同作用的結果。",
    reviewStatus: "approved", reviewerRole: "biology"
  }
});
