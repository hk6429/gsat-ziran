window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-105-48": {
    encouragement: "先由價電子認出X是鎂、Y是氯，就能用離子固體的共同性質判斷。",
    keyIdea: "Mg²⁺與Cl⁻形成MgCl₂；離子固體硬而脆，不具有延展性。",
    steps: ["X為Mg、Y為Cl，化學式是MgCl₂。", "離子熔融後可導電，但晶體受力易錯位碎裂，故錯誤的是D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Mg²⁺與Cl⁻靠靜電吸引形成離子鍵，敘述正確。" },
      B: { verdict: "incorrect", reason: "MgCl₂可被極性的水分子水合，易溶於水。" },
      C: { verdict: "incorrect", reason: "熔融時離子可移動，因此能導電。" },
      D: { verdict: "correct", reason: "延展性是金屬常見性質；離子晶體通常硬而脆。" },
      E: { verdict: "incorrect", reason: "一個Mg²⁺需兩個Cl⁻平衡電荷，正是XY₂。" }
    },
    takeaway: "離子固體：固態不導電、熔融可導電，而且通常硬脆。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-49": {
    encouragement: "把代號換回H、C、N、O，再看中心原子是否還剩未成鍵電子。",
    keyIdea: "Q、Z、W、T依序可視為H、C、N、O；CH₄的碳四個價電子全用來成鍵。",
    steps: ["由題組價電子判得Q＝H、Z＝C、W＝N、T＝O。", "CH₄有四條C—H鍵，沒有孤電子對，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "QY對應HCl，Cl仍有三對孤電子。" },
      B: { verdict: "correct", reason: "ZQ₄為CH₄，碳的四個價電子全參與四條鍵。" },
      C: { verdict: "incorrect", reason: "WQ₃為NH₃，氮上保留一對孤電子。" },
      D: { verdict: "incorrect", reason: "ZT₂為CO₂，每個氧仍各有兩對孤電子。" },
      E: { verdict: "incorrect", reason: "T₂為O₂，兩個氧原子上都有孤電子對。" }
    },
    takeaway: "畫路易斯結構時，先滿足鍵結，再把剩餘價電子補成孤對。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-50": {
    encouragement: "曲線上的點代表飽和上限；曲線下方只是未飽和，不代表溶解度改變。",
    keyIdea: "55℃時甲曲線較高；40℃點①為乙的50 g/100 g水；點②兩者都是同一濃度。",
    steps: ["直接讀曲線比較同溫高度。", "再分清溶解度與實際濃度，得到A、B、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "55℃時甲曲線在乙上方，甲的溶解度較大。" },
      B: { verdict: "correct", reason: "點①位於40℃、50 g/100 g水的位置。" },
      C: { verdict: "incorrect", reason: "曲線只顯示溶解度，不能判斷溶解是吸熱或放熱。" },
      D: { verdict: "correct", reason: "點②同時代表相同溶質質量與水量，重量百分濃度相同。" },
      E: { verdict: "incorrect", reason: "甲從60降到20的溶解度落差較大，析出量應較多。" }
    },
    takeaway: "曲線高度看溶解度，降溫析出量看前後高度差。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-51": {
    encouragement: "鎳比銅活潑，所以鎳失電子、銅離子得電子；沿著這條主線逐項檢查。",
    keyIdea: "Ni被氧化、Cu²⁺被還原；鋅銅電池電壓更大，惰性碳棒可替代不參與反應的電極。",
    steps: ["反應為Ni＋Cu²⁺→Ni²⁺＋Cu。", "依溶液顏色、活性差與電極是否參與反應，選A、D、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Cu²⁺被消耗，硫酸銅藍色會變淺。" },
      B: { verdict: "incorrect", reason: "Ni²⁺持續生成，綠色不會因反應而變淺。" },
      C: { verdict: "incorrect", reason: "交換金屬片後反應條件改變，不能維持原來0.57 V。" },
      D: { verdict: "correct", reason: "鋅與銅活性差比鎳與銅大，電池電壓較高。" },
      E: { verdict: "correct", reason: "若溶液中的離子自行氧化還原，惰性碳棒可作導電電極。" }
    },
    takeaway: "電池顏色題先找哪個有色離子被消耗或生成。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-52": {
    encouragement: "把四種金屬排成鋅＞鎳＞銅＞銀，再數左邊金屬比右邊活潑的配對。",
    keyIdea: "同方向配對除Ni—Cu外，還有Zn—Ni、Zn—Cu、Zn—Ag、Ni—Ag、Cu—Ag，共5種。",
    steps: ["電子由較活潑金屬流向較不活潑金屬。", "列出四金屬的所有兩兩組合並扣除Ni—Cu，得到5種。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "符合方向的配對不只1種。" },
      B: { verdict: "incorrect", reason: "只算2種會漏掉多個含鋅或銀的組合。" },
      C: { verdict: "incorrect", reason: "四種金屬的有效組合多於3種。" },
      D: { verdict: "incorrect", reason: "扣除原鎳銅電池後仍有5種，不是4種。" },
      E: { verdict: "correct", reason: "逐一列舉可得5種同方向電池。" }
    },
    takeaway: "組合題不要心算猜數量，列出所有配對最穩。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-106-8": {
    encouragement: "只含碳氫氧、溶液受熱放氣，最典型就是碳酸分解成水和二氧化碳。",
    keyIdea: "H₂CO₃受熱可分解為H₂O與CO₂，莫耳質量為62 g/mol。",
    steps: ["候選無機酸為碳酸H₂CO₃。", "計算2×1＋12＋3×16＝62，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "28不符合H₂CO₃的組成質量。" },
      B: { verdict: "incorrect", reason: "29不是常見含C、H、O且受熱放氣化合物的莫耳質量。" },
      C: { verdict: "incorrect", reason: "31只有碳酸莫耳質量的一半。" },
      D: { verdict: "incorrect", reason: "58未把H₂CO₃的三個氧完整計入。" },
      E: { verdict: "correct", reason: "H₂CO₃莫耳質量正好是62 g/mol。" }
    },
    takeaway: "碳酸不穩定，容易分解成水與二氧化碳。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-106-26": {
    encouragement: "用離子電子數倒推原子序：X是Na、Z是F，再由相差電子數找Y、W。",
    keyIdea: "X、Y、Z、W分別為Na、Ca、F、S；穩定式為CaF₂與Na₂S。",
    steps: ["X⁺有10電子，X原子11電子；Z⁻有10電子，Z原子9電子。", "Y為20電子的Ca，W為16電子的S，故選A、C、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Z為氟，是非金屬。" },
      B: { verdict: "incorrect", reason: "Na最外層電子在第三層M層，不是L層。" },
      C: { verdict: "correct", reason: "Ca²⁺與兩個F⁻形成CaF₂，即YZ₂。" },
      D: { verdict: "incorrect", reason: "Ca²⁺與S²⁻應為CaS，即YW。" },
      E: { verdict: "correct", reason: "兩個Na⁺配一個S²⁻，化學式Na₂S即X₂W。" }
    },
    takeaway: "陽離子電子數要把失去的電子加回；陰離子則扣掉多出的電子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-106-27": {
    encouragement: "鋅銅電池記一條：鋅送出電子，銅離子接收電子。",
    keyIdea: "Zn→Zn²⁺＋2e⁻發生在負極；Cu²⁺＋2e⁻→Cu發生在正極。",
    steps: ["鋅較活潑，發生氧化。", "電子由鋅負極流向銅正極，所以選A、C。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "鋅失去電子形成Zn²⁺，是氧化反應。" },
      B: { verdict: "incorrect", reason: "原電池中氧化發生在負極。" },
      C: { verdict: "correct", reason: "銅離子在銅極得電子還原成銅。" },
      D: { verdict: "incorrect", reason: "電子由負極流向正極，方向寫反。" },
      E: { verdict: "incorrect", reason: "簡單鋅銅電池不是設計成可逆充電的二次電池。" }
    },
    takeaway: "氧化失電子在負極；還原得電子在正極。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-107-1": {
    encouragement: "由表中位置和原子序總和，可找出X、Y、Z是Na、C、O。",
    keyIdea: "C與O可組成CO或CO₂氣體；Na的價電子數為1。",
    steps: ["三元素原子序11＋6＋8＝25。", "逐句判斷後只有丙、丁正確，答案C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲錯：C和O兩種都是非金屬。" },
      B: { verdict: "incorrect", reason: "乙錯：O容易得到兩電子，不是失去兩電子。" },
      C: { verdict: "correct", reason: "CO、CO₂可為氣體，且Na有1個價電子。" },
      D: { verdict: "incorrect", reason: "甲錯誤，即使丙正確也不能選。" },
      E: { verdict: "incorrect", reason: "乙錯誤，丁正確仍不足。" }
    },
    takeaway: "週期表位置可同時提供金屬性、價電子與常見離子線索。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-107-3": {
    encouragement: "60克全部溶在200毫升水中，先換成每100毫升至少溶多少。",
    keyIdea: "60/200＝30 g/100 mL，且仍是澄清溶液，所以101℃溶解度大於30。",
    steps: ["把實驗濃度換算成30 g/100 mL水。", "無水氯化鈣溶解放熱；裝置與溫度計用法另有安全問題，故選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "燒杯不應密閉加熱，圖示蓋住容器有風險。" },
      B: { verdict: "correct", reason: "60克已完全溶於200 mL水，溶解度必大於30 g/100 mL。" },
      C: { verdict: "incorrect", reason: "無水氯化鈣溶解明顯放熱。" },
      D: { verdict: "incorrect", reason: "升溫主因是溶解放熱，不是突沸使溫度上升。" },
      E: { verdict: "incorrect", reason: "溫度計易破，不能拿來當攪拌棒。" }
    },
    takeaway: "觀察到沸騰不代表外界仍在加熱，放熱溶解也可能讓水升溫。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-107-5": {
    encouragement: "加鹼前導電高，中和時下降，過當量後又因多出OH⁻而上升。",
    keyIdea: "H⁺移動快；加入NaOH後H⁺被Na⁺取代，導電度降至當量點最低，再回升。",
    steps: ["0到1 L逐漸中和，導電度下降。", "超過1 L後OH⁻累積，導電度上升，符合E圖。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "導電度不會從零開始一路增加。" },
      B: { verdict: "incorrect", reason: "當量點後有過量OH⁻，不會繼續降到零。" },
      C: { verdict: "incorrect", reason: "加入鹼前的強酸導電度應高，不是接近零。" },
      D: { verdict: "incorrect", reason: "圖中當量點反而成高點，趨勢相反。" },
      E: { verdict: "correct", reason: "先降至當量點最低，再因過量NaOH而回升。" }
    },
    takeaway: "強酸強鹼滴定的導電曲線像淺V字。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-108-13": {
    encouragement: "水與乙酸乙酯不互溶，萃取要用能分開兩液層並放液的器材。",
    keyIdea: "分液漏斗可搖盪萃取、靜置分層，再由活栓分離液層。",
    steps: ["咖啡因在水層與乙酸乙酯層間分配。", "選有塞子與活栓的分液漏斗E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圓底燒瓶適合加熱反應，不便分開液層。" },
      B: { verdict: "incorrect", reason: "容量瓶用於定容，不用來萃取。" },
      C: { verdict: "incorrect", reason: "錐形瓶可混合，卻沒有活栓分液。" },
      D: { verdict: "incorrect", reason: "燒杯無法精確放出上下液層。" },
      E: { verdict: "correct", reason: "分液漏斗正是液—液萃取與分層的專用器材。" }
    },
    takeaway: "看到兩種不互溶液體的萃取，優先想到分液漏斗。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-108-32": {
    encouragement: "燃燒區先用氧化銅供氧，氣體再依序通過吸水與吸二氧化碳的管柱。",
    keyIdea: "CuO放在高溫燃燒處乙；先吸水、後以NaOH吸CO₂，所以NaOH在丁。",
    steps: ["氧化銅是氧化劑，置於乙處幫助完全燃燒。", "丙先用Mg(ClO₄)₂吸水，丁再用NaOH吸CO₂，選A、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "乙處受熱，適合放CuO促進完全氧化。" },
      B: { verdict: "incorrect", reason: "CuO提供氧並被還原，是氧化劑。" },
      C: { verdict: "incorrect", reason: "吸水管應在吸CO₂管之前，即丙處。" },
      D: { verdict: "correct", reason: "NaOH置於丁處吸收已除水氣體中的CO₂。" },
      E: { verdict: "incorrect", reason: "只需量樣品與兩吸收管增重，不必靠CuO重量推算氧含量。" }
    },
    takeaway: "吸收順序不能交換，否則後一管可能同時吸到兩種產物。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-108-33": {
    encouragement: "26℃曲線約40 g/100 g水；題目只有50克水，所以最多溶20克。",
    keyIdea: "30克中有10克未溶；加25克水或升到38℃都恰可形成飽和溶液。",
    steps: ["26℃、50克水最多溶約20克KNO₃。", "依曲線換算加水、升溫與降溫，選A、B、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "30－20＝10克未溶。" },
      B: { verdict: "correct", reason: "75克水在此溫度可溶30克，恰為飽和。" },
      C: { verdict: "incorrect", reason: "溶解度由溫度決定，不因加水量而變大。" },
      D: { verdict: "correct", reason: "38℃溶解度約60，50克水恰可溶30克。" },
      E: { verdict: "incorrect", reason: "20℃時50克水約溶16克，只比原先溶解量少4克。" }
    },
    takeaway: "溶解度以100克水為基準，遇到50克水要先乘二分之一。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-108-66": {
    encouragement: "直接從草甘膦結構圈出C、H、O、N、P，再比各類物質。",
    keyIdea: "草甘膦含CHONP；核苷酸也含糖、含氮鹼基與磷酸，元素種類相同。",
    steps: ["由結構列出五種元素C、H、O、N、P。", "只有核苷酸同時具有這五種元素，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一般胺基酸主要含CHON，不一定含P。" },
      B: { verdict: "incorrect", reason: "葡萄糖只含C、H、O。" },
      C: { verdict: "correct", reason: "核苷酸含C、H、O、N及磷酸中的P。" },
      D: { verdict: "incorrect", reason: "一般脂肪酸主要含C、H、O。" },
      E: { verdict: "incorrect", reason: "蔗糖也只含C、H、O。" }
    },
    takeaway: "判元素組成要逐種列出，不必先算每種原子數。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-108-67": {
    encouragement: "在長結構中只找小片段：—COOH是羧基，—NH—是胺基。",
    keyIdea: "草甘膦含羧基與胺基；含磷酸基上的OH不列作醇類羥基。",
    steps: ["左端辨認—COOH。", "中央辨認胺態N—H，故選B、C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "結構中的OH屬羧酸或磷酸部分，不是題目所指獨立羥基。" },
      B: { verdict: "correct", reason: "左端—C(=O)OH是羧基。" },
      C: { verdict: "correct", reason: "分子中有與碳相連的含氮胺基。" },
      D: { verdict: "incorrect", reason: "氮沒有直接接羰基碳，不是醯胺。" },
      E: { verdict: "incorrect", reason: "沒有—C(=O)O—連接兩個碳的酯基。" }
    },
    takeaway: "官能基看連接方式，不是只看到OH或N就直接命名。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-109-17": {
    encouragement: "同電子數比較時，質子愈多拉得愈緊；同族往下則多一層電子殼。",
    keyIdea: "等電子陽離子原子序愈大半徑愈小；同族同電荷離子往下半徑變大。",
    steps: ["用核吸引力判斷乙正確、丙錯誤。", "用電子層數判斷丁正確，答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的18電子離子數量判讀不符表格。" },
      B: { verdict: "incorrect", reason: "丙把等電子陰離子的趨勢寫反。" },
      C: { verdict: "incorrect", reason: "甲與丙都不是正確組合。" },
      D: { verdict: "correct", reason: "乙的核吸引趨勢與丁的同族向下趨勢都正確。" },
      E: { verdict: "incorrect", reason: "丁雖正確，但甲不正確。" }
    },
    takeaway: "離子半徑先比電子層；層數相同再比核電荷。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-109-31": {
    encouragement: "精密稀釋需要準確量取原液，再準確定容。",
    keyIdea: "以容量吸管量取原液，移入容量瓶後加水至刻度。",
    steps: ["用E容量吸管取固定體積1.00 M NaOH。", "用D容量瓶稀釋至刻度，選D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "燒杯刻度粗略，不能準確定容。" },
      B: { verdict: "incorrect", reason: "量筒精度不足以配製標準濃度。" },
      C: { verdict: "incorrect", reason: "錐形瓶適合混合，不適合準確定容。" },
      D: { verdict: "correct", reason: "容量瓶可把溶液精確定容到標線。" },
      E: { verdict: "correct", reason: "容量吸管可精確移取所需原液體積。" }
    },
    takeaway: "配製稀溶液的標準搭檔：容量吸管加容量瓶。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-109-57": {
    encouragement: "吸水管增重換氫，吸CO₂管增重換碳，剩餘質量就是氧。",
    keyIdea: "C、H、O莫耳比為6：12：1，實驗式C₆H₁₂O，對應環己醇A。",
    steps: ["10.8 mg H₂O含1.2 mg H；26.4 mg CO₂含7.2 mg C，剩1.6 mg O。", "莫耳比0.6：1.2：0.1＝6：12：1，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "環己醇分子式C₆H₁₂O，完全符合分析比。" },
      B: { verdict: "incorrect", reason: "不含氧，和樣品剩餘的氧質量不符。" },
      C: { verdict: "incorrect", reason: "酚的氫數較少，不是C₆H₁₂O。" },
      D: { verdict: "incorrect", reason: "此烴不含氧且不飽和度不同。" },
      E: { verdict: "incorrect", reason: "環己烯醇比C₆H₁₂O少兩個氫。" }
    },
    takeaway: "燃燒分析固定路線：CO₂算C、H₂O算H、總質量差算O。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-109-59": {
    encouragement: "布洛芬結構先看碳骨架、羧基和雙鍵位置，就能逐項排除。",
    keyIdea: "C—C為共價鍵；酸性來自—COOH；苯環雙鍵不形成一般順反異構。",
    steps: ["辨認羧基造成酸性。", "檢查鍵結與異構條件，選A、B。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "有機分子的碳原子以共享電子的共價鍵相連。" },
      B: { verdict: "correct", reason: "羧基可釋放H⁺，使水溶液呈酸性。" },
      C: { verdict: "incorrect", reason: "O—H是共價鍵，布洛芬固體不是離子晶體。" },
      D: { verdict: "incorrect", reason: "苯環碳的價電子用於成鍵，沒有孤電子對。" },
      E: { verdict: "incorrect", reason: "雙鍵在芳香環中，不符合開鏈雙鍵順反異構的條件。" }
    },
    takeaway: "有雙鍵不一定有順反異構，還要看每個雙鍵碳是否各接兩種不同基團。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-110-4": {
    encouragement: "模型能告訴你原子與分子數，卻沒有畫出能量高低。",
    keyIdea: "反應是一種化合物分解成元素單質與另一化合物；是否吸熱不能由模型判斷。",
    steps: ["前後逐顆數原子，可確認質量守恆與分解反應。", "圖中沒有能量資訊，所以B是錯誤敘述。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一種反應物變成多種產物，確為分解反應。" },
      B: { verdict: "correct", reason: "分子圖沒有熱量或能階資料，不能斷定吸熱。" },
      C: { verdict: "incorrect", reason: "前後兩種原子數量相同，符合質量守恆。" },
      D: { verdict: "incorrect", reason: "產物含元素的標準態單質，其標準生成熱為0。" },
      E: { verdict: "incorrect", reason: "兩種化合物由同元素以不同整數比組成，符合倍比定律。" }
    },
    takeaway: "粒子模型可判物質組成，不能憑空判斷反應熱。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-110-7": {
    encouragement: "醇類要找到「碳接OH」，只有看到氧還不夠。",
    keyIdea: "四個模型中甲與丁具有羥基，乙屬羧酸型、丙為醚型，因此共有2個醇。",
    steps: ["找出氧同時連著氫與碳的模型。", "符合者為甲、丁，共2個，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "至少甲與丁都具有醇羥基。" },
      B: { verdict: "incorrect", reason: "符合醇類的不只1個。" },
      C: { verdict: "correct", reason: "甲與丁各有碳—氧—氫結構，共2個。" },
      D: { verdict: "incorrect", reason: "乙或丙的含氧連接方式不屬醇，未達3個。" },
      E: { verdict: "incorrect", reason: "並非所有含氧分子都是醇。" }
    },
    takeaway: "官能基由連接關係決定：C—O—H才是醇的羥基。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-110-28": {
    encouragement: "紫色最後分成紅、藍兩圈，直接證明原染料至少有兩種成分。",
    keyIdea: "成分和水、濾紙的作用力不同，移動距離不同而被分離。",
    steps: ["觀察到兩種色帶，判定紫色染料是混合物。", "不同附著力造成不同移動距離，選C、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一個色帶仍可能含多種物質，不能證明各自純。" },
      B: { verdict: "incorrect", reason: "移動距離不能直接換成分子量大小。" },
      C: { verdict: "correct", reason: "至少出現紅、藍兩成分，原紫色染料是混合物。" },
      D: { verdict: "correct", reason: "兩成分對濾紙與水的作用不同，移動距離因此不同。" },
      E: { verdict: "incorrect", reason: "這是物理分離，不是紫色純物質和水反應生成新物質。" }
    },
    takeaway: "層析是利用作用力差異分離混合物，不是化學反應。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-11": {
    encouragement: "Rf是成分移動距離除以同一次展開液距離，因此也能比較平均速率。",
    keyIdea: "相同時間內乙、丙距離約為8：5，所以速率比也是8：5。",
    steps: ["從圖估乙與丙離起始線的距離。", "同時間速率比等於距離比，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙接近停止線，Rf遠大於0.2。" },
      B: { verdict: "incorrect", reason: "甲與丙的Rf相加明顯大於0.6。" },
      C: { verdict: "correct", reason: "乙、丙移動距離約8：5，速率比相同。" },
      D: { verdict: "incorrect", reason: "Rf不能直接判斷分子量順序。" },
      E: { verdict: "incorrect", reason: "在固定條件下距離同比增加，Rf比值不會因此變大。" }
    },
    takeaway: "Rf是比值，展開更久不代表Rf一定變大。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-13": {
    encouragement: "先讀1：9混合液呈鹼性，確定乙是鹼；再由酸過量時仍不太酸判斷甲是弱酸。",
    keyIdea: "乙為NH₃弱鹼，甲為CH₃COOH弱酸，最符合三組指示劑結果。",
    steps: ["甲：乙＝1：9時pH>8，乙是鹼。", "9：1時仍落在pH 4～7.5，甲不是強酸，故選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "HCl為強酸，酸過量時pH會低於表中綠色範圍。" },
      B: { verdict: "incorrect", reason: "乙若為HCl，乙大量時不會呈鹼性。" },
      C: { verdict: "incorrect", reason: "NaCl中性，無法在甲大量時呈現弱酸結果。" },
      D: { verdict: "incorrect", reason: "甲若為NH₃，甲大量的9：1應呈鹼性。" },
      E: { verdict: "correct", reason: "弱酸醋酸與弱鹼氨水可符合三種混合比例的顏色。" }
    },
    takeaway: "指示劑不是只判酸鹼，也能用顏色範圍縮小pH。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-16": {
    encouragement: "圖中共有四個氮；逐一看它們的正常鍵數，每個各留一對孤電子。",
    keyIdea: "腈基、環上與胺基的四個中性氮，各有一對孤電子，共4對。",
    steps: ["先在結構中圈出4個N。", "依路易斯結構補滿價電子，每個N各1對，共4對，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "只算到2對會漏掉另外兩個氮。" },
      B: { verdict: "correct", reason: "四個氮各有一對，合計4對。" },
      C: { verdict: "incorrect", reason: "部分氮不是兩對孤電子，總數不到6。" },
      D: { verdict: "incorrect", reason: "把每個氮都算成兩對會違反其鍵結狀態。" },
      E: { verdict: "incorrect", reason: "結構中的氮不足以提供10對孤電子。" }
    },
    takeaway: "氮通常有5個價電子；中性三鍵氮常留一對孤電子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-17": {
    encouragement: "橫軸是質子數、縱軸是質量數；相減就得到中子數。",
    keyIdea: "a是C、b是F，同週期C半徑較大；f中子19個、e中子16個。",
    steps: ["同週期由左到右原子半徑變小，故A正確。", "用質量數減質子數比較f、e，故E正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "C在F左側，同週期原子半徑較大。" },
      B: { verdict: "incorrect", reason: "d、e質子數不同，是不同元素，不是同位素。" },
      C: { verdict: "incorrect", reason: "c的Na氧化物鹼性比d的Si氧化物強。" },
      D: { verdict: "incorrect", reason: "h為Ca有2個價電子，f為S有6個。" },
      E: { verdict: "correct", reason: "f為35－16＝19中子，e為31－15＝16中子。" }
    },
    takeaway: "同位素一定要質子數相同；中子數不同才是其次。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-19": {
    encouragement: "指示劑會變色，是因自身的酸式與鹼式結構不同。",
    keyIdea: "指示劑會與H⁺或OH⁻建立酸鹼平衡，pH改變使不同顏色形式比例改變。",
    steps: ["把指示劑視為弱酸或弱鹼。", "pH改變就是促使它發生酸鹼反應，答案A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "指示劑藉可逆酸鹼反應改變分子結構與顏色。" },
      B: { verdict: "incorrect", reason: "中性食鹽水中的甲基紅偏黃色，不一定是橙色。" },
      C: { verdict: "incorrect", reason: "等莫耳強酸強鹼中和近中性，酚酞無色。" },
      D: { verdict: "incorrect", reason: "pH每差1代表H⁺差10倍，不是簡單2倍。" },
      E: { verdict: "incorrect", reason: "混合兩指示劑不會自動提升辨識強酸強鹼的有效性。" }
    },
    takeaway: "pH是對數尺度，差1就是氫離子濃度差10倍。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-20": {
    encouragement: "KNO₃溶解明顯吸熱；把它加入外杯，外杯降溫就會冷卻試管。",
    keyIdea: "外杯KNO₃溶解吸熱，試管內飽和KNO₃因降溫而析晶，故D正確。",
    steps: ["由表知KNO₃溶解度隨溫度變化大。", "外杯溶解吸熱降溫，使試管飽和液析晶，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "陡峭的甲曲線是KNO₃，不是KCl。" },
      B: { verdict: "incorrect", reason: "交點約在32～34，並非36～37。" },
      C: { verdict: "incorrect", reason: "蒸發後會析出KCl，溶液重量百分濃度不是所述25%。" },
      D: { verdict: "correct", reason: "外杯溶解KNO₃吸熱降溫，試管溶解度下降而結晶。" },
      E: { verdict: "incorrect", reason: "一次冷卻結晶與過濾無法把兩種可溶鹽完全分離。" }
    },
    takeaway: "溶解度差可做分離，但通常是富集，不等於一次就完全純化。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-21": {
    encouragement: "相圖上的線是兩相共存，三條線交會點才是三相共存。",
    keyIdea: "1 atm沸點445℃；圖有斜方—單斜—液體三相點；兩種固體互為同素異形體。",
    steps: ["沿1 atm水平線讀出沸點。", "找三相交點並辨認兩固態轉換，選A、B、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "1 atm液—氣相界交於445℃。" },
      B: { verdict: "correct", reason: "圖中有斜方硫、單斜硫、液硫三條相界交點。" },
      C: { verdict: "incorrect", reason: "圖中另有兩固態與氣態可共存的三相點。" },
      D: { verdict: "incorrect", reason: "沒有斜方硫、液態硫、氣態硫三相交會點。" },
      E: { verdict: "correct", reason: "兩者都是元素硫的不同晶體結構，可互相轉化。" }
    },
    takeaway: "同素異形體是同一元素、不同結構，不是不同元素。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-22": {
    encouragement: "對流層臭氧是污染物；真正保護地球的是平流層臭氧。",
    keyIdea: "光化學煙霧產生的低空臭氧不會跑去修補臭氧層，反而傷害呼吸道。",
    steps: ["檢查圖中氧化還原與能量來源。", "分清對流層與平流層臭氧，錯誤為E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NO與O₃間有氧化數變化，屬氧化還原。" },
      B: { verdict: "incorrect", reason: "丙烯轉成含氧醛類，是被氧化。" },
      C: { verdict: "incorrect", reason: "NO₂分解需吸收紫外線能量，屬吸熱。" },
      D: { verdict: "incorrect", reason: "O與O₂成鍵生成O₃會釋放能量。" },
      E: { verdict: "correct", reason: "對流層臭氧是污染物，不能修補平流層臭氧洞。" }
    },
    takeaway: "同是臭氧，位置不同角色相反：高空保護、近地污染。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-23": {
    encouragement: "依常見鍵數辨認：碳四鍵、氧兩鍵、氮三鍵、氫一鍵。",
    keyIdea: "圖中W為N、X為C、Y為O、Z為H；孤電子共7對即14個。",
    steps: ["由每個代號的鍵數辨認元素。", "依圖示孤對逐一加總為14電子，選A、D、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "W呈氮的典型三鍵與一孤對配置。" },
      B: { verdict: "incorrect", reason: "X形成四鍵，應為碳，不是氧。" },
      C: { verdict: "incorrect", reason: "Y形成氧的兩鍵結構，不是碳。" },
      D: { verdict: "correct", reason: "Z只形成一鍵，對應氫。" },
      E: { verdict: "correct", reason: "各N、O的孤電子合計7對，也就是14個電子。" }
    },
    takeaway: "看不懂代號時，用常見價數反推元素很有效。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-18": {
    encouragement: "表格同時給狀態與加水結果，先選能用水造成「一溶一不溶」的組合。",
    keyIdea: "乙加水成懸浮沉澱、丁完全溶解，可用水再過濾；丁也可能是離子化合物。",
    steps: ["乙與丁混合加水，丁進水相、乙留固體。", "過濾可分乙與水；丁高熔點且水溶，可能為離子物，選A、C、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "加水後丁溶、乙不溶，可接著過濾分離。" },
      B: { verdict: "incorrect", reason: "丙與水液體分層，應用分液，不是蒸發結晶。" },
      C: { verdict: "correct", reason: "乙在水中為懸浮固體，可用濾紙留下。" },
      D: { verdict: "incorrect", reason: "甲溶液僅呈弱酸性，丙又與水分層，不能判為強電解質。" },
      E: { verdict: "correct", reason: "丁高熔點且溶水，符合離子化合物的可能特徵。" }
    },
    takeaway: "混合物分離先看物態：固液用過濾，不互溶液體用分液。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-34": {
    encouragement: "三條曲線和CO₂資料都往下，表示氣體通常在冷水中更容易溶解。",
    keyIdea: "乙正確；飲料進入體內升溫使CO₂溶解度下降而逸出，丙也正確。",
    steps: ["圖與數據都顯示0～60℃升溫時溶解度降低。", "4℃飲料進入體內升溫會放出CO₂，故選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的0℃大小順序讀反，NH₃並非最小。" },
      B: { verdict: "incorrect", reason: "只有乙正確仍漏掉丙。" },
      C: { verdict: "incorrect", reason: "只有丙正確仍漏掉乙。" },
      D: { verdict: "incorrect", reason: "甲不正確。" },
      E: { verdict: "correct", reason: "升溫使氣體溶解度下降，也能解釋喝汽水打嗝。" }
    },
    takeaway: "氣體溶解度通常隨溫度升高而降低。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-36": {
    encouragement: "先從氫氣反推副反應的氧氣，再從總氧氣扣掉。",
    keyIdea: "0.40 mol H₂伴生0.20 mol O₂；其餘1.20 mol O₂來自製甲醇，對應0.80 mol甲醇。",
    steps: ["水分解H₂：O₂＝2：1，所以副產O₂為0.20 mol。", "主反應O₂為1.20 mol，依3：2換得甲醇0.80 mol，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.4只直接照抄氫氣量，未做兩段係數換算。" },
      B: { verdict: "incorrect", reason: "未正確扣除副反應氧氣。" },
      C: { verdict: "correct", reason: "1.20×2/3＝0.80 mol甲醇。" },
      D: { verdict: "incorrect", reason: "把總氧氣直接換算會高估。" },
      E: { verdict: "incorrect", reason: "1.2是主反應氧氣量，不是甲醇量。" }
    },
    takeaway: "有副反應時，先把副產物份額扣掉再算主反應。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-115-20": {
    encouragement: "沿1 atm加熱路徑，只跨過熔點，不跨沸點，所以算升溫、熔化、再升溫。",
    keyIdea: "20 g為0.2 mol；三段熱量約1.0＋0.8＋2.4＝4.2 kJ。",
    steps: ["固體0→50℃需0.2×100×50＝1000 J，熔化需0.2×4.0＝0.8 kJ。", "液體50→150℃需0.2×120×100＝2400 J，合計4.2 kJ，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "三段熱量相加為4.2 kJ。" },
      B: { verdict: "incorrect", reason: "多算了不存在的相變或溫區。" },
      C: { verdict: "incorrect", reason: "把部分比熱或相變熱重複計入。" },
      D: { verdict: "incorrect", reason: "20 g不是20 mol，不能直接用莫耳熱資料。" },
      E: { verdict: "incorrect", reason: "150℃尚未越過1 atm沸點，不需汽化熱。" }
    },
    takeaway: "加熱曲線分段算；每跨一條相界才加入一次潛熱。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-115-21": {
    encouragement: "顏色先換成pH範圍，再記得pH愈低，氫離子濃度愈高。",
    keyIdea: "丙約pH3.2～4.4、乙約6.0～7.6、丁大於8.4，因此[H⁺]丙＞乙＞丁。",
    steps: ["由各指示劑顏色界定每瓶pH。", "把pH順序反轉成[H⁺]順序，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲與丙範圍重疊，無法確定甲一定大於丙。" },
      B: { verdict: "incorrect", reason: "乙近中性，氫離子濃度應高於鹼性的丁。" },
      C: { verdict: "incorrect", reason: "戊只知pH<8.2，無法確定丁與戊間完整順序。" },
      D: { verdict: "incorrect", reason: "丙偏酸，[H⁺]應大於乙。" },
      E: { verdict: "correct", reason: "丙pH最低、乙其次、丁最高，所以[H⁺]依序遞減。" }
    },
    takeaway: "pH大小與氫離子濃度大小方向相反。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-115-23": {
    encouragement: "先由位置認出甲Na、乙Be、丙C、丁N、戊Cl，再套週期趨勢。",
    keyIdea: "Na易失1電子；Cl得電子趨勢強於N，也遠強於Na。",
    steps: ["依週期表格位辨認五元素。", "檢查金屬失電子與非金屬得電子趨勢，選A、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Na有1個價電子，容易形成Na⁺。" },
      B: { verdict: "incorrect", reason: "非金屬性應Cl＞N＞C，即戊＞丁＞丙。" },
      C: { verdict: "incorrect", reason: "碳在自然界有碳-12、碳-13等同位素。" },
      D: { verdict: "incorrect", reason: "Be的原子半徑不會小於同週期右側的C、N。" },
      E: { verdict: "correct", reason: "獲電子趨勢Cl＞N＞Na，即戊＞丁＞甲。" }
    },
    takeaway: "同週期往右：原子半徑通常變小，非金屬性與得電子趨勢增強。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-115-24": {
    encouragement: "金屬不是一顆顆獨立分子，而是金屬陽離子排列在可移動電子海中。",
    keyIdea: "B圖顯示規則排列的正離子與離域電子，正是金屬鍵模型。",
    steps: ["鈉的價電子可在整個金屬晶體中移動。", "選出正離子晶格加電子海的B圖。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "畫成定向連線網絡，不符合金屬電子海模型。" },
      B: { verdict: "correct", reason: "正離子排列並由離域電子包圍，代表金屬鈉。" },
      C: { verdict: "incorrect", reason: "像共價網狀結構，不是鈉金屬。" },
      D: { verdict: "incorrect", reason: "正負離子交錯是離子晶體模型。" },
      E: { verdict: "incorrect", reason: "有限原子團簇不能代表延伸的金屬晶格。" }
    },
    takeaway: "金屬導電與延展性，都和可移動的離域電子有關。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-115-43": {
    encouragement: "孤對電子只要看O與N：羰基氧兩對，兩個中性氮各一對。",
    keyIdea: "苄丙酮有一個O共2對孤電子；尼古丁有兩個N也共2對，數目相同。",
    steps: ["苄丙酮羰基O有2對孤電子。", "尼古丁兩個N各1對，共2對，所以選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩者元素種類與分子式不同，不是同分異構物。" },
      B: { verdict: "incorrect", reason: "等重時莫耳數與含碳比例不同，CO₂莫耳數不相同。" },
      C: { verdict: "incorrect", reason: "由結構逐鍵計數，兩者C—H鍵數不同。" },
      D: { verdict: "incorrect", reason: "氫原子只有2個價電子的穩定配置，不符合八隅體。" },
      E: { verdict: "correct", reason: "苄丙酮的O與尼古丁的兩個N都合計提供2對孤電子。" }
    },
    takeaway: "八隅體有例外，最常見的就是氫只需要2個電子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  }
});
