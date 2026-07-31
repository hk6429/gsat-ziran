window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-103-10": {
    encouragement: "判斷多樣性增減時，先看人類活動是增加棲地種類，還是把自然環境變得更單一。",
    keyIdea: "把水泥地改成生態池，可增加水域棲地與可利用資源，讓更多物種進入。",
    steps: [
      "水泥地能提供的棲所與食物很少，生物種類通常不多。",
      "生態池增加水域、岸邊與水生植物等微棲地。",
      "其他選項都是把自然、多樣的棲地改成較單一的人造環境。",
      "因此水泥地改建為生態池最可能增加當地生物多樣性。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "自然林通常有多層次植被與多種生物；改成單一樹種的人造林容易降低多樣性。" },
      B: { verdict: "correct", reason: "生態池比水泥地多出水域、岸帶與植物等棲地，可供更多物種生活。" },
      C: { verdict: "incorrect", reason: "野生池塘改成單一養殖吳郭魚的環境，會減少原有物種與棲地差異。" },
      D: { verdict: "incorrect", reason: "填海造田會破壞濕地與潮間帶棲地，使原有物種失去生活空間。" },
      E: { verdict: "incorrect", reason: "河岸槽化會讓水流與岸邊構造單一，減少水生與河岸生物可利用的棲地。" }
    },
    takeaway: "棲地越多樣，通常越能容納不同物種；把自然環境單一化常會降低多樣性。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-11": {
    encouragement: "演化證據要看「它真的能證明到哪一層」，不能把有限證據推得太遠。",
    keyIdea: "昆蟲與爬蟲類分屬不同門，胚胎相似也不能推論牠們在綱的階層具有共同祖先。",
    steps: [
      "化石、同源構造、胚胎、地理分布與 DNA 都能提供演化線索。",
      "鯨鰭與鳥翼內部骨骼基本排列相似，可支持脊椎動物前肢的同源關係。",
      "昆蟲屬節肢動物門，爬蟲類屬脊索動物門，分類差異遠高於綱。",
      "所以把兩者共同祖先限制在「綱」的階層，是錯誤推論。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "化石形態可推測外形，所在地層與同層其他證據也能協助推測生活環境，此敘述正確。" },
      B: { verdict: "incorrect", reason: "鯨鰭與麻雀翅膀都是脊椎動物前肢的變形，骨骼基本排列相似，屬同源構造。" },
      C: { verdict: "correct", reason: "昆蟲與爬蟲類連門都不同，不能由胚胎發育推論兩者在綱的階層共享祖先。" },
      D: { verdict: "incorrect", reason: "相同類群化石分布在今日分離的大陸，可作為推測古大陸位置的線索。" },
      E: { verdict: "incorrect", reason: "DNA 序列越相似通常表示共同祖先較近，可用來推測親緣遠近。" }
    },
    takeaway: "證據能支持演化關係，但分類階層必須核對；不同門的生物不可能同綱。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-27": {
    encouragement: "重組 DNA 的關鍵是把不同來源的 DNA 接在一起；只要找出有「外來基因」的成果即可。",
    keyIdea: "轉殖微生物製造胰島素與抗蟲玉米，都需要把目標基因接入載體或受體 DNA。",
    steps: [
      "重組 DNA 是把不同來源的 DNA 片段連接成新的 DNA 分子。",
      "酵母菌製造人類胰島素，需先把人類胰島素基因送入酵母菌。",
      "抗蟲玉米需把抗蟲基因轉入玉米細胞。",
      "試管嬰兒、核移植複製與放射線誘變都不必把不同來源 DNA 接合。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "試管嬰兒是在體外完成受精與早期胚胎培養，沒有必須重組 DNA。" },
      B: { verdict: "incorrect", reason: "桃莉羊以體細胞核移植複製，核心技術不是接合不同來源的 DNA 片段。" },
      C: { verdict: "correct", reason: "需把人類胰島素基因接入可在酵母菌表現的 DNA，才能讓酵母菌製造胰島素。" },
      D: { verdict: "correct", reason: "抗蟲玉米含外來抗蟲基因，製作過程涉及重組 DNA 與基因轉殖。" },
      E: { verdict: "incorrect", reason: "放射線是提高隨機突變機率，不是把外來 DNA 片段接入植物。" }
    },
    takeaway: "看到「轉殖基因、微生物製藥」，多半涉及重組 DNA；誘變與核移植則不一定。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-28": {
    encouragement: "無氧呼吸產物不只一種，先找所有類型共有的結果，再看酵母與肌肉各自產生什麼。",
    keyIdea: "無氧代謝仍可由糖解產生少量 ATP；酵母產酒精，缺氧肌肉主要產乳酸。",
    steps: [
      "沒有氧時，細胞仍可在細胞質進行糖解，得到少量 ATP。",
      "種子淹水後根部缺氧，會由有氧呼吸轉向無氧代謝。",
      "酵母菌進行酒精發酵，可把葡萄糖轉成酒精與二氧化碳。",
      "人體肌肉缺氧時進行乳酸發酵，不會累積酒精。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不是所有無氧代謝都產生二氧化碳；乳酸發酵就不會釋放二氧化碳，因此不能一概而論。" },
      B: { verdict: "correct", reason: "無氧條件下的糖解能以受質層次磷酸化產生少量 ATP。" },
      C: { verdict: "correct", reason: "種子淹水過久時組織缺氧，會改以無氧代謝暫時取得能量。" },
      D: { verdict: "correct", reason: "酵母菌的酒精發酵會產生乙醇，因此可用來釀葡萄酒。" },
      E: { verdict: "incorrect", reason: "人體肌肉缺氧時主要形成乳酸，不是酒精。" }
    },
    takeaway: "共同點是少量 ATP；酵母產酒精，肌肉產乳酸。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-29": {
    encouragement: "這題把三個環境議題放在一起；分別對應臭氧層、酸雨與食物鏈累積，就不會混淆。",
    keyIdea: "氟氯碳化物破壞臭氧、含硫氣體造成酸化、DDT 造成生物放大；二氧化碳主要影響溫室效應。",
    steps: [
      "復育若只增加少數近親個體的數量，不會自動提高遺傳多樣性。",
      "氟氯碳化物在高空釋放氯自由基，會加速臭氧分解。",
      "含硫污染物可形成酸性物質，降低水體與土壤 pH。",
      "DDT 難分解、難排除，會沿食物鏈在高營養級放大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "復育能增加個體數，但若繁殖來源少，可能仍有近親繁殖，不能保證有效提高遺傳多樣性。" },
      B: { verdict: "correct", reason: "氟氯碳化物會在平流層促進臭氧分解，是臭氧層破洞擴大的原因之一。" },
      C: { verdict: "correct", reason: "含硫氣體氧化後可形成酸性物質，進入水體會改變水生棲地與水源的酸鹼值。" },
      D: { verdict: "incorrect", reason: "二氧化碳增加主要加強溫室效應；到達地表的紫外線增加主要和臭氧層變薄有關。" },
      E: { verdict: "correct", reason: "DDT 不易代謝排除，會在個體內累積並沿食物鏈造成生物放大。" }
    },
    takeaway: "CFC 對臭氧層、CO₂ 對溫室效應、硫氧化物對酸雨、DDT 對生物放大。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-30": {
    encouragement: "中心法則可拆成兩箭頭：DNA 轉錄成 RNA；RNA 再到核糖體轉譯成蛋白質。",
    keyIdea: "真核細胞的轉錄以 DNA 一股為模板合成 RNA；轉譯在細胞質中的核糖體進行。",
    steps: [
      "轉錄時 DNA 局部解開，由 RNA 聚合酶讀取其中一股。",
      "RNA 聚合酶依互補規則合成 RNA，這一步多在細胞核內進行。",
      "成熟 RNA 進入細胞質，由核糖體進行轉譯。",
      "因此 B、E 正確；轉錄與轉譯的名稱、酵素不能互換。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核糖體是轉譯場所；真核細胞的 DNA 轉錄主要在細胞核內進行。" },
      B: { verdict: "correct", reason: "轉譯由細胞質中的核糖體讀取 mRNA，並組合胺基酸。" },
      C: { verdict: "incorrect", reason: "DNA 訊息抄錄成 RNA 稱為轉錄，不是轉譯。" },
      D: { verdict: "incorrect", reason: "轉錄需要 RNA 聚合酶；DNA 聚合酶主要負責 DNA 複製。" },
      E: { verdict: "correct", reason: "轉錄時 DNA 兩股局部分開，RNA 聚合酶只以其中一股為模板合成 RNA。" }
    },
    takeaway: "DNA→RNA 是轉錄、用 RNA 聚合酶；RNA→蛋白質是轉譯、在核糖體。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-39": {
    encouragement: "大氣中氮很多，但多數生物不能直接使用；要先靠少數原核生物把氮氣轉成可利用形式。",
    keyIdea: "固氮能力只存在部分原核生物；真核生物本身不能固氮，但可與固氮菌共生取得氮源。",
    steps: [
      "固氮是把大氣氮轉為生物可利用含氮物質的過程。",
      "只有部分細菌、藍綠菌具有固氮酵素，不是所有原核生物都有。",
      "已知真核生物不能靠自身酵素完成固氮。",
      "水稻田的共生藍綠菌、豆科根部的根瘤菌可提供含氮物質，減少肥料需求。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "固氮只見於部分原核生物，許多細菌與古菌並不具有固氮能力。" },
      B: { verdict: "correct", reason: "真核生物本身沒有已知的完整固氮系統，不能自行把氮氣固定成可用氮源。" },
      C: { verdict: "incorrect", reason: "植物主要吸收硝酸根、銨離子等含氮離子，不是直接吸收一氧化氮作為主要氮源。" },
      D: { verdict: "correct", reason: "能固氮的共生藍綠菌可增加稻田可利用氮，因而降低氮肥需求。" },
      E: { verdict: "correct", reason: "根瘤菌將氮氣轉成可利用含氮物質，與其共生的植物可獲得氮源。" }
    },
    takeaway: "植物不直接用氮氣；固氮菌是把大氣氮送進生物世界的重要入口。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-53": {
    encouragement: "長題組最有效的方法是把每個選項回到原文定位，不必一次記住整段。",
    keyIdea: "棉纖維來自種皮毛細胞，種仁富含蛋白質與脂質；反芻動物可無毒消化含棉酚種子。",
    steps: [
      "原文明說棉花屬 Gossypium，科名 Malvaceae 不是屬名，不能組成二名法學名。",
      "種皮毛細胞形成纖維，種仁含豐富蛋白質與脂質。",
      "棉酚對人有毒，但反芻動物能無毒消化，因此種子可作牛羊飼料。",
      "棉酚能保護植株抵禦蟲害，表示它對昆蟲有不利作用。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "二名法需用「屬名＋種小名」；Malvaceae 是科名，不能與 Gossypium 組成該物種學名。" },
      B: { verdict: "correct", reason: "題幹直接指出棉花纖維由種子的種皮毛細胞形成。" },
      C: { verdict: "correct", reason: "題幹明確說明種仁含有豐富蛋白質與脂質。" },
      D: { verdict: "correct", reason: "牛、羊是反芻動物，依題幹可無毒消化棉酚，因此棉籽可作為其飼料。" },
      E: { verdict: "incorrect", reason: "棉酚能保護植株免受蟲害，表示會抑制或傷害昆蟲，不能說對昆蟲不具毒性。" }
    },
    takeaway: "讀資料題要逐句回找證據；學名則必須是屬名加種小名，不是科名加屬名。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-54": {
    encouragement: "基因沉默只是把開關轉小，不是把基因從細胞裡刪掉；這是本題最重要的區別。",
    keyIdea: "基改棉花仍在各器官細胞保有棉酚相關基因，只選擇性降低種子中的表現。",
    steps: [
      "同一植株多數體細胞具有相同 DNA，葉、莖、花與種子都含棉酚相關基因。",
      "RNA 干擾降低的是種子內基因表現，不是移除該基因。",
      "葉、莖與花仍表現棉酚，所以植株可保留抗蟲能力。",
      "研究已證明可遺傳，但題幹說基因穩定性尚未確定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "棉酚相關基因存在於植株各器官的細胞中，不是只有繁殖器官才有。" },
      B: { verdict: "correct", reason: "原文指出雜交得到的無棉酚品種失去保護，容易受蟲害而大幅減產。" },
      C: { verdict: "incorrect", reason: "基因轉殖可只降低種子棉酚，葉、莖、花仍有棉酚，因此仍可抵禦蟲害。" },
      D: { verdict: "incorrect", reason: "可遺傳性已證實，但題幹明說基因穩定性尚未確定，不能說兩者都確定。" },
      E: { verdict: "correct", reason: "基因沉默改變表現量而非刪除基因，所以葉、莖、花與種子細胞仍含相關基因。" }
    },
    takeaway: "有基因不等於一定大量表現；基因沉默是在特定組織降低表現，不是刪除 DNA。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-13": {
    encouragement: "把細胞放進不同濃度溶液時，先判斷水往哪裡移動；高張外液會把水拉出細胞。",
    keyIdea: "紅血球在高張溶液中失水萎縮；植物分裂形成細胞板，根尖進行有絲分裂。",
    steps: [
      "高張溶液的溶質濃度較高，水會由紅血球內淨移向外液。",
      "紅血球失水後體積縮小，呈現皺縮狀態。",
      "洋蔥鱗葉表皮通常沒有葉綠體；洋蔥根尖主要進行有絲分裂。",
      "植物胞質分裂由中央形成細胞板，不像動物細胞由外向內凹陷。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "洋蔥鱗葉表皮細胞通常不具葉綠體，無法觀察葉綠體隨細胞質流動。" },
      B: { verdict: "correct", reason: "高張外液使水由紅血球內流出，紅血球因此萎縮。" },
      C: { verdict: "incorrect", reason: "植物細胞有細胞壁，胞質分裂時由中央形成細胞板，不是形成向內凹陷的分裂溝。" },
      D: { verdict: "incorrect", reason: "洋蔥根尖生長點是體細胞有絲分裂旺盛處，不是減數分裂場所。" },
      E: { verdict: "incorrect", reason: "0.4～0.6% NaCl 低於常用等張濃度約 0.9%，紅血球會吸水膨脹，形態會改變。" }
    },
    takeaway: "紅血球：高張失水縮、低張吸水脹；植物胞質分裂則形成細胞板。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-14": {
    encouragement: "看到 10 灰、10 白的 1：1 比例，可以反推這是最典型的「雜合顯性×隱性」試交結果。",
    keyIdea: "灰色 G 為顯性，白色必為 gg；Gg×gg 的子代預期一半 Gg 灰色、一半 gg 白色。",
    steps: [
      "白色小鼠沒有顯性 G，基因型一定是 gg。",
      "子代出現白色，表示灰色親本也能提供 g，因此灰色親本是 Gg。",
      "Gg 產生 G、g 兩種配子，gg 只產生 g 配子。",
      "子代為 1/2 Gg 灰色與 1/2 gg 白色，最符合 10：10。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "GG×Gg 的子代都有至少一個 G，應全部為灰色，不會出現白色。" },
      B: { verdict: "incorrect", reason: "GG×gg 的子代全為 Gg，應全部灰色。" },
      C: { verdict: "incorrect", reason: "Gg×Gg 預期表徵約 3 灰：1 白，不是 1：1。" },
      D: { verdict: "correct", reason: "Gg×gg 預期產生一半 Gg 灰色、一半 gg 白色，符合觀察。" },
      E: { verdict: "incorrect", reason: "gg×gg 的子代全是 gg，應全部白色。" }
    },
    takeaway: "單基因完全顯性中，1：1 表徵比常指向 Gg×gg。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-35": {
    encouragement: "核酸的名稱雖有兩種，但基本零件相同：都是由核苷酸接成長鏈。",
    keyIdea: "核酸以核苷酸為單元，包括 RNA 與 DNA；主要元素含磷而非硫，RNA 通常不是雙股螺旋。",
    steps: [
      "核苷酸由磷酸、五碳糖與含氮鹼基組成，是核酸單元。",
      "依五碳糖與鹼基差異，核酸分為核糖核酸 RNA 與去氧核糖核酸 DNA。",
      "核酸主要含 C、H、O、N、P，選項把 P 錯換成 S。",
      "DNA 常為雙股螺旋；RNA 多為單股，不能說所有核酸都雙股。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "DNA 與 RNA 都是由核苷酸聚合形成，核苷酸是核酸的單元體。" },
      B: { verdict: "incorrect", reason: "真核生物的主要遺傳物質是 DNA，不是 RNA。" },
      C: { verdict: "incorrect", reason: "核酸主要元素為 C、H、O、N、P，磷是磷酸基的成分；S 不是基本構成元素。" },
      D: { verdict: "correct", reason: "核酸可分為核糖核酸 RNA 與去氧核糖核酸 DNA。" },
      E: { verdict: "incorrect", reason: "RNA 通常是單股；不是所有核酸都具有雙股螺旋結構。" }
    },
    takeaway: "核酸兩類 DNA、RNA；共同單元是核苷酸，共同重要元素包含 P。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-36": {
    encouragement: "減數分裂Ⅱ很像一次有絲分裂：二分體排中央、中節分開、姊妹染色分體分離。",
    keyIdea: "植物減數分裂Ⅱ可見二分體排列、中節分裂與細胞板形成；聯會只在減數分裂Ⅰ。",
    steps: [
      "減數分裂Ⅰ結束後，每條染色體仍由兩條姊妹染色分體組成，稱二分體。",
      "中期Ⅱ二分體排列在赤道面。",
      "後期Ⅱ中節分裂，姊妹染色分體移向兩極。",
      "植物細胞完成胞質分裂時可形成細胞板。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高等植物細胞通常沒有中心體；而且 DNA 與相關構造的複製發生在減數分裂前的間期。" },
      B: { verdict: "incorrect", reason: "同源染色體聯會形成四分體發生在前期Ⅰ，減數分裂Ⅱ不再聯會。" },
      C: { verdict: "correct", reason: "中期Ⅱ時，每條仍含兩條姊妹染色分體的二分體排列於細胞中央。" },
      D: { verdict: "correct", reason: "後期Ⅱ中節分裂，使姊妹染色分體分開並移向兩極。" },
      E: { verdict: "correct", reason: "植物細胞在減數分裂Ⅱ完成胞質分裂時可形成細胞板。" }
    },
    takeaway: "減一分同源染色體；減二中節分裂，分開姊妹染色分體。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-55": {
    encouragement: "生殖構造名稱容易混淆，可以沿著精子和卵的路線逐站核對功能。",
    keyIdea: "攝護腺分泌精液成分，副睪使精子成熟並暫存，受精通常發生在輸卵管。",
    steps: [
      "精子在睪丸形成後進入副睪成熟並儲存，再經輸精管送出。",
      "儲精囊的名稱容易誤導，它主要分泌富含養分的液體，不是儲存精子的囊。",
      "攝護腺也分泌精液中的部分液體。",
      "卵巢分泌動情素、黃體素；FSH、LH 主要由腦垂腺前葉分泌。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "儲精囊主要分泌精液中的液體；精子主要在副睪成熟與儲存。" },
      B: { verdict: "correct", reason: "攝護腺會分泌液體成為精液的一部分，協助精子活動與存活。" },
      C: { verdict: "correct", reason: "精子離開睪丸後會在副睪逐漸成熟，並可暫時儲存在副睪。" },
      D: { verdict: "incorrect", reason: "卵巢主要分泌動情素與黃體素；FSH、LH 主要由腦垂腺前葉分泌。" },
      E: { verdict: "correct", reason: "人類精子與卵通常在輸卵管相遇並完成受精。" }
    },
    takeaway: "副睪存精、儲精囊與攝護腺供液、輸卵管是常見受精場所。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-56": {
    encouragement: "免疫反應可以分工：先到的是非專一性防禦；抗體負責辨識與標記，不是自己把病原直接分解。",
    keyIdea: "非專一性反應啟動較快；組織胺增加微血管通透性；重組抗原蛋白可作為疫苗材料。",
    steps: [
      "皮膚、吞噬與發炎等非專一性防禦通常先啟動。",
      "受傷處釋放組織胺，使微血管擴張、通透性增加，幫助免疫成分進入組織。",
      "T 細胞可辨識並殺死受感染細胞，但不是用吞噬方式。",
      "抗原蛋白可用重組 DNA 技術製造作疫苗；抗體結合後仍需其他免疫機制清除病原。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "發炎、吞噬等非專一性防禦可迅速啟動，通常早於需要辨識、增殖的專一性反應。" },
      B: { verdict: "incorrect", reason: "細胞毒性 T 細胞能辨識並誘導受感染細胞死亡，但不以吞噬方式清除它。" },
      C: { verdict: "correct", reason: "組織胺會使局部微血管通透性增加，讓白血球與血漿成分較易進入受傷區。" },
      D: { verdict: "correct", reason: "具有抗原性的病毒蛋白可用重組技術大量製造，作為不含完整病毒的疫苗材料。" },
      E: { verdict: "incorrect", reason: "抗體會專一結合、標記或中和抗原，但不會自行把病原體直接分解。" }
    },
    takeaway: "抗體負責辨識與標記；真正清除還要靠吞噬、補體或其他免疫細胞。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-58": {
    encouragement: "高山空氣仍約有相同比例的氧，但整體氣壓下降，所以每一口氣能推進血液的氧變少。",
    keyIdea: "玉山頂總氣壓較低，氧氣比例近似不變，但氧分壓低於平地，導致氧較難擴散入血。",
    steps: [
      "空氣中氧、氮的比例在一般高山與平地大致相同。",
      "海拔升高時大氣壓下降，各氣體的分壓也一起下降。",
      "肺泡氧分壓降低，使氧進入血液的推動力減小。",
      "因此部分人會缺氧、呼吸困難，直接原因是氧分壓降低。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "玉山頂氧氣在空氣中的比例沒有高於平地，主要差別是總氣壓較低。" },
      B: { verdict: "incorrect", reason: "氮氣比例也大致不變，不會因上山而升高。" },
      C: { verdict: "correct", reason: "高山總氣壓低，使氧分壓降低，氧較難由肺泡擴散進血液，可能造成呼吸困難。" },
      D: { verdict: "incorrect", reason: "玉山頂氧分壓低於平地，不是高於平地。" },
      E: { verdict: "incorrect", reason: "高山氮分壓也會降低，但氮不是人體呼吸利用的氣體，不能解釋缺氧症狀。" },
      F: { verdict: "incorrect", reason: "高山總氣壓下降，氮分壓不會高於平地。" }
    },
    takeaway: "高山缺氧不是氧比例變少，而是總氣壓與氧分壓下降。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-59": {
    encouragement: "物質循環要真的有原子或分子在環境與生物間轉換；只談能量推動，不一定有物質循環。",
    keyIdea: "光合作用、燃燒與反硝化分別參與碳循環或氮循環；核能與水力發電主要描述能量轉換。",
    steps: [
      "光合作用吸收二氧化碳並合成有機物，把碳帶入生物體。",
      "火力發電燃燒含碳燃料，將碳以二氧化碳形式送回大氣。",
      "反硝化細菌可把硝酸鹽轉成氮氣，使氮回到大氣。",
      "核分裂與水推渦輪描述的是能量取得，並非題目所指的生態系物質循環。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "植物吸收大氣二氧化碳合成有機物，是碳循環的重要步驟。" },
      B: { verdict: "incorrect", reason: "核能電廠以核分裂釋放能量，重點不是碳、氮等物質在生態系中的循環。" },
      C: { verdict: "correct", reason: "火力發電燃燒化石燃料會釋放二氧化碳，使儲存的碳回到大氣。" },
      D: { verdict: "incorrect", reason: "水流推動渦輪主要是能量轉換；此事件本身不是生物地球化學物質循環步驟。" },
      E: { verdict: "correct", reason: "反硝化細菌把硝酸鹽轉為氮氣，是氮循環中氮回到大氣的過程。" }
    },
    takeaway: "碳循環看光合與燃燒；氮循環看固氮、硝化與反硝化。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-17": {
    encouragement: "膜的層數可以用位置記：細胞核被核膜包圍，而核膜由內外兩層膜構成。",
    keyIdea: "選項中只有細胞核具有雙層核膜；高基氏體、溶體、內質網與液胞皆為單層膜構造。",
    steps: [
      "細胞核外有內核膜與外核膜，合稱雙層核膜。",
      "高基氏體、內質網與液胞都屬內膜系統，由單層單位膜圍成。",
      "溶體也是單層膜囊泡。",
      "因此選項中具有雙層膜的是細胞核。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高基氏體由扁平囊堆疊而成，每個囊由單層單位膜包圍。" },
      B: { verdict: "incorrect", reason: "溶體是由單層膜包住水解酵素的囊泡。" },
      C: { verdict: "incorrect", reason: "內質網是連續的單層膜系統，不是雙層膜胞器。" },
      D: { verdict: "correct", reason: "細胞核外的核膜由內核膜與外核膜兩層構成。" },
      E: { verdict: "incorrect", reason: "液胞外圍是單層液胞膜。" }
    },
    takeaway: "核、粒線體、葉綠體有雙層膜；內質網、高基氏體、溶體、液胞是單層膜。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-19": {
    encouragement: "把這套技術想成剪貼文件：先拿出質體、剪開、放入目標片段、黏好，最後送回細菌。",
    keyIdea: "製備重組 DNA 的順序是萃取質體→限制酶切開→混合外源基因→連接酶接合→導入細菌。",
    steps: [
      "先由細菌萃取可作載體的質體，對應 III。",
      "用限制酶切開質體 DNA，對應 II。",
      "把外源基因與已切開的載體混合，再用 DNA 連接酶接合，依序為 IV、V。",
      "最後把重組 DNA 導入細菌，取得含重組 DNA 的細菌，為 I。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "I 必須在重組 DNA 已完成並導入細菌後才發生，不能排在混合與連接之前。" },
      B: { verdict: "incorrect", reason: "尚未由細菌萃取質體就不能先完成切開與導入，III 的位置錯誤。" },
      C: { verdict: "correct", reason: "III→II→IV→V→I 正好是取質體、切開、混合、接合、導入細菌的合理順序。" },
      D: { verdict: "incorrect", reason: "尚未取得並切開載體就先連接、導入，不符合實驗步驟。" },
      E: { verdict: "incorrect", reason: "DNA 連接酶應在質體切開並與外源基因混合之後使用，不能排在最前面。" }
    },
    takeaway: "重組 DNA 五步：取、切、混、接、送。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-32": {
    encouragement: "判斷含氮廢物，就先看原料分子裡有沒有氮；核酸與蛋白質都有，醣和脂肪通常沒有。",
    keyIdea: "DNA 含含氮鹼基，血紅素含蛋白質；分解後的含氮部分可形成含氮廢物。",
    steps: [
      "DNA 的核苷酸含有含氮鹼基，因此 DNA 本身含氮。",
      "血紅素的珠蛋白部分由胺基酸組成，胺基酸含胺基氮。",
      "動物分解胺基酸與含氮鹼基後，會形成氨、尿素或尿酸等含氮廢物。",
      "脂肪、肝醣與纖維素主要由碳、氫、氧構成，不是含氮廢物的主要來源。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "DNA 的含氮鹼基含氮，分解代謝後可產生含氮廢物。" },
      B: { verdict: "correct", reason: "血紅素含珠蛋白，蛋白質胺基酸中的氮經代謝後可形成尿素等含氮廢物。" },
      C: { verdict: "incorrect", reason: "一般脂肪主要由甘油與脂肪酸組成，主要元素為碳、氫、氧，不含氮。" },
      D: { verdict: "incorrect", reason: "肝醣是葡萄糖聚合成的多醣，主要只含碳、氫、氧。" },
      E: { verdict: "incorrect", reason: "纖維素也是葡萄糖聚合的多醣，不含氮；而且人體缺少纖維素酶，不能有效分解。" }
    },
    takeaway: "含氮廢物主要來自蛋白質與核酸，不是來自醣類或一般脂肪。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
