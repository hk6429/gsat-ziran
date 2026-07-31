window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-101-17": {
    encouragement: "這題不是要背年代，而是分辨哪些說法符合化學發展的基本事實。把明顯誇大的敘述先刪掉，就會很好判斷。",
    keyIdea: "實驗、原子學說與人造新材料都是化學發展的重要內容；天然食物仍由化合物組成，輕油裂解也不是新能源。",
    steps: [
      "先看甲、乙、丙：化學重視實驗證據；道耳頓的原子學說奠定近代化學基礎；化學技術也能製造自然界原本沒有的新材料，三句都合理。",
      "再看丁：天然食物同樣由水、醣類、蛋白質等化合物組成，不能說天然食物不是化合物。",
      "最後看戊：輕油裂解是把石油原料轉成較小分子，仍依賴化石資源，不是取代化石燃料的新能源。",
      "因此合理的是甲、乙、丙，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、乙雖然正確，但丙所說的「化學技術可研製自然界原本沒有的新材料」也正確，因此只選甲乙不完整。" },
      B: { verdict: "incorrect", reason: "丙正確，但丁錯誤；天然有機食物仍由許多化合物組成，不能把「天然」等同於「不是化合物」。" },
      C: { verdict: "incorrect", reason: "丁、戊都不合理：天然食物仍含化合物，輕油裂解使用的原料也來自石油，並不是新能源。" },
      D: { verdict: "correct", reason: "甲強調實驗、乙指出道耳頓原子學說的重要性、丙說明化學能製造新材料，三項都符合化學發展事實。" },
      E: { verdict: "incorrect", reason: "乙正確，但丁與戊錯誤；這個組合把兩個錯誤敘述一起選入。" }
    },
    takeaway: "看到「天然就不是化合物」或「加工石油就是新能源」這類過度簡化的說法，要停下來檢查。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-18": {
    encouragement: "先不用管放出多少熱，只要從碳原子數找到燃燒了多少莫耳乙醇，就能把 Q 放大成一莫耳的數值。",
    keyIdea: "一莫耳乙醇完全燃燒會生成二莫耳二氧化碳；二氧化碳與石灰水生成碳酸鈣的莫耳比為一比一。",
    steps: [
      "乙醇完全燃燒可寫成 C₂H₅OH＋3O₂→2CO₂＋3H₂O，所以一莫耳乙醇會生成二莫耳 CO₂。",
      "CO₂ 被過量石灰水完全吸收時，一莫耳 CO₂ 生成一莫耳 CaCO₃；0.10 莫耳 CaCO₃ 代表原本有 0.10 莫耳 CO₂。",
      "產生 0.10 莫耳 CO₂，只需燃燒 0.10÷2＝0.05 莫耳乙醇；題目說這時放熱為 Q。",
      "一莫耳是 0.05 莫耳的 20 倍，因此一莫耳乙醇燃燒放熱為 20Q，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Q 是 0.05 莫耳乙醇燃燒的熱量，不是一莫耳乙醇的燃燒熱。" },
      B: { verdict: "incorrect", reason: "5Q 只相當於 0.25 莫耳乙醇燃燒，沒有依一莫耳乙醇生成二莫耳 CO₂ 的比例換算完整。" },
      C: { verdict: "incorrect", reason: "10Q 相當於 0.50 莫耳乙醇燃燒；少算了一莫耳乙醇會產生兩莫耳 CO₂ 的係數關係。" },
      D: { verdict: "correct", reason: "0.10 莫耳 CO₂ 來自 0.05 莫耳乙醇，因此一莫耳乙醇的放熱量是 Q 的 1÷0.05＝20 倍。" },
      E: { verdict: "incorrect", reason: "50Q 相當於把乙醇莫耳數判得過小；由反應係數可知實際燃燒的是 0.05 莫耳，不是 0.02 莫耳。" }
    },
    takeaway: "燃燒熱換算先沿著「乙醇→CO₂→CaCO₃」找莫耳比，再把熱量按莫耳數放大。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-34": {
    encouragement: "判斷化學鍵時，先把物質分成「金屬與非金屬組合」、「只有非金屬」以及「金屬合金」三類，就不容易混淆。",
    keyIdea: "不同非金屬原子通常以共價鍵形成分子；金屬與非金屬形成的鹽類以離子鍵為主，合金則以金屬鍵為主。",
    steps: [
      "Fe₂O₃ 由金屬鐵與非金屬氧組成，主要是離子化合物；青銅與 K 金都是合金，主要呈金屬鍵。",
      "N₂O₄ 只含氮、氧兩種非金屬，分子內以共價鍵連接。",
      "HCl 的氫與氯也都是非金屬，氣態氯化氫分子內為共價鍵。",
      "因此應選 C、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "三氧化二鐵由金屬鐵與非金屬氧形成，通常歸類為離子化合物，主要鍵結不是共價鍵。" },
      B: { verdict: "incorrect", reason: "青銅是以銅為主的合金，原子間主要是金屬鍵。" },
      C: { verdict: "correct", reason: "四氧化二氮 N₂O₄ 由氮、氧兩種非金屬元素組成，分子內原子以共價鍵相連。" },
      D: { verdict: "correct", reason: "氯化氫 HCl 由氫、氯兩種非金屬形成，H—Cl 是共價鍵。" },
      E: { verdict: "incorrect", reason: "十八開金是金與其他金屬組成的合金，主要鍵結屬於金屬鍵。" }
    },
    takeaway: "只有非金屬元素組成的分子，通常先想到共價鍵；合金則先想到金屬鍵。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-35": {
    encouragement: "把食鹽、乙醇、乙酸分別想成「離子鹽、中性分子、弱酸分子」，五個選項就能逐一拆開。",
    keyIdea: "NaCl 是高熔點的離子化合物；乙醇為中性分子且幾乎不導電；乙酸是弱酸分子化合物。",
    steps: [
      "NaCl 溶於水後得到 Na⁺、Cl⁻，溶液近中性；乙醇不明顯電離，水溶液也近中性；乙酸會部分電離，呈酸性。",
      "相同濃度時，完全電離的 NaCl 導電性通常強於只部分電離的乙酸，乙醇則很弱。",
      "NaCl 的離子晶格使熔點遠高於乙醇與乙酸；乙醇和乙酸本身都是以共價鍵形成的分子化合物。",
      "所以正確的是 A、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "NaCl 水溶液與乙醇水溶液通常近中性；乙酸會釋出 H⁺，水溶液呈酸性。" },
      B: { verdict: "incorrect", reason: "相同濃度下，NaCl 是強電解質，能產生較多可移動離子；弱酸乙酸並不是三者中導電性最好者。" },
      C: { verdict: "incorrect", reason: "NaCl 是離子固體，離子間作用力強，熔點比乙醇與乙酸高，不是最低。" },
      D: { verdict: "correct", reason: "乙醇與乙酸都由非金屬原子以共價鍵組成，且以分子形式存在，屬於分子化合物。" },
      E: { verdict: "incorrect", reason: "NaCl 是離子化合物，較易溶於水等極性溶劑，不易溶於一般揮發性有機溶劑。" }
    },
    takeaway: "離子鹽常見特徵是高熔點、溶於水後可導電；分子化合物則要再看是否會電離。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-36": {
    encouragement: "生活化學題最怕被熟悉的名稱帶著走。逐句問「人體真的能消化嗎？」「真的是聚合物嗎？」就能抓出關鍵。",
    keyIdea: "咖啡因可提神；蛋白質由胺基酸構成。人體缺乏分解纖維素的酵素，蔗糖也不是聚合物。",
    steps: [
      "咖啡因會刺激中樞神經，對多數人具有提神效果，所以甲正確。",
      "纖維素雖是醣類，但人體缺乏纖維素酶，不能把它消化成葡萄糖。",
      "蛋白質是許多胺基酸以胜肽鍵連接而成，與生長、修補組織有關。",
      "寡醣不是因為比葡萄糖分子小而易吸收；蔗糖是雙醣，也不是由很多單體組成的聚合物，因此答案為 A、C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "咖啡因能刺激中樞神經系統，因此茶與咖啡常能讓多數人暫時較清醒。" },
      B: { verdict: "incorrect", reason: "人體缺乏纖維素酶，不能有效切斷纖維素的鍵結並消化成葡萄糖。" },
      C: { verdict: "correct", reason: "蛋白質由胺基酸聚合而成，是人體生長、維持與修補組織所需的重要物質。" },
      D: { verdict: "incorrect", reason: "寡醣由少數單醣連接而成，分子比葡萄糖大；有些寡醣也不會被人體小腸直接消化吸收。" },
      E: { verdict: "incorrect", reason: "澱粉是多醣聚合物，但蔗糖只由一個葡萄糖與一個果糖組成，屬雙醣，不是巨大聚合物。" }
    },
    takeaway: "「屬於醣類」不代表人體一定能消化；「含兩個單醣」也不等於聚合物。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-37": {
    encouragement: "題目已把反應型態說得很完整：單一元素去取代化合物中的另一元素。只要逐項找出這個結構即可。",
    keyIdea: "單置換反應的形式是「元素單質＋化合物→新化合物＋另一元素單質」。",
    steps: [
      "氫氣還原氧化銅可寫成 H₂＋CuO→Cu＋H₂O，符合單質加化合物，生成另一單質與另一化合物。",
      "鋅放入硫酸銅溶液可寫成 Zn＋CuSO₄→ZnSO₄＋Cu，也符合單置換。",
      "CO 本身是化合物，不是元素單質；銀又不能從硫酸銅中置換出銅。",
      "因此選 A、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "H₂ 是元素單質，CuO 是化合物，反應生成元素單質 Cu 與化合物 H₂O，完全符合題目定義。" },
      B: { verdict: "incorrect", reason: "CO 與 O₂ 燃燒生成 CO₂，產物只有一種化合物，沒有生成另一種元素單質。" },
      C: { verdict: "incorrect", reason: "CO 是由碳、氧組成的化合物，不是題目要求的「單一元素的物質」。" },
      D: { verdict: "incorrect", reason: "銀的活性比銅低，銀棒放入硫酸銅溶液不會把銅置換出來，通常不發生此單置換反應。" },
      E: { verdict: "correct", reason: "鋅的活性比銅高，可由 Zn＋CuSO₄→ZnSO₄＋Cu 置換出銅，符合單置換反應形式。" }
    },
    takeaway: "先確認反應物中有元素單質，再看產物是否出現另一種元素單質。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-40": {
    encouragement: "同分異構物的第一關不是看名稱像不像，而是先核對「分子式完全相同、結構不同」。",
    keyIdea: "葡萄糖與果糖同為 C₆H₁₂O₆；蔗糖與麥芽糖同為 C₁₂H₂₂O₁₁，但結構不同。",
    steps: [
      "先檢查分子式：只有分子式相同的兩種化合物，才有可能互為同分異構物。",
      "葡萄糖與果糖都是 C₆H₁₂O₆，但官能基與原子排列不同。",
      "蔗糖與麥芽糖都是 C₁₂H₂₂O₁₁，但由不同單醣或不同方式連接。",
      "氧與臭氧、金剛石與 C₆₀ 是同一元素形成的不同單質，屬同素異形體；因此答案為 B、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氧氣 O₂ 與臭氧 O₃ 的分子式不同，兩者是氧元素的同素異形體，不是同分異構物。" },
      B: { verdict: "correct", reason: "葡萄糖與果糖的分子式同為 C₆H₁₂O₆，但結構不同，符合同分異構物定義。" },
      C: { verdict: "incorrect", reason: "金剛石與 C₆₀ 都是碳元素形成的單質，屬同素異形體，不用同分異構物描述。" },
      D: { verdict: "incorrect", reason: "蛋白質與耐綸是不同種類的聚合物，沒有一個共同且完全相同的分子式可供判定為異構物。" },
      E: { verdict: "correct", reason: "蔗糖與麥芽糖的分子式同為 C₁₂H₂₂O₁₁，但單醣組成與連接方式不同。" }
    },
    takeaway: "異構物先核對分子式；同一元素形成的不同單質則叫同素異形體。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-47": {
    encouragement: "原子題把質子、中子、電子分成三欄計算，就不會被質量數與原子序混在一起。",
    keyIdea: "原子序＝質子數；中性原子的電子數＝質子數；中子數＝質量數－原子序。",
    steps: [
      "²¹⁰Po 的質子數為 84、中子數為 210－84＝126；²²⁶Ra 的質子數為 88、中子數為 226－88＝138。",
      "兩者中子數相差 12，質子數相差 4。",
      "題目說的是中性原子，因此電子數分別為 84 與 88，相差 4。",
      "所以只有 C 正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Po 的中子數是126，Ra 的中子數是138，相差12，不是16。" },
      B: { verdict: "incorrect", reason: "質子數等於原子序，88－84＝4，並非16。" },
      C: { verdict: "correct", reason: "中性原子的電子數等於質子數，所以兩者電子數相差88－84＝4。" },
      D: { verdict: "incorrect", reason: "釙與鐳都可在自然界放射性衰變系列中以微量存在，不能說自然界完全不存在。" },
      E: { verdict: "incorrect", reason: "放射性來自不穩定原子核的衰變，常見會放出 α、β 粒子或 γ 射線；X 光主要不是這兩者核衰變的共同來源。" }
    },
    takeaway: "質量數不是中子數；先用「質量數－原子序」算中子，再比較。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-101-61": {
    encouragement: "倍比定律的門檻很嚴格：必須是同樣兩種元素形成的不同化合物。先過這一關，答案幾乎就出現了。",
    keyIdea: "倍比定律比較同兩元素形成的不同化合物；固定其中一元素質量時，另一元素的質量呈簡單整數比。",
    steps: [
      "先找由完全相同兩種元素組成的不同化合物。",
      "Pb₃O₄ 與 PbO 都只含鉛、氧，而且組成比例不同，符合比較條件。",
      "若固定鉛的量，兩者所結合的氧量可化成簡單整數比，能說明倍比定律。",
      "其他選項不是化合物，或兩物質的元素種類並不相同，因此答案為 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "C₆₀ 與 C₈₀ 都是只含碳的單質，不是由兩種元素組成的不同化合物。" },
      B: { verdict: "correct", reason: "Pb₃O₄ 與 PbO 都只由鉛、氧組成，兩者的鉛氧比例不同，可用來說明倍比定律。" },
      C: { verdict: "incorrect", reason: "SiO₂ 含矽、氧，CO₂ 含碳、氧；其中一種元素不同，不能比較同兩元素的組成比例。" },
      D: { verdict: "incorrect", reason: "GaCl₃ 與 AlCl₃ 分別含鎵與鋁，不是同樣兩種元素形成的化合物。" },
      E: { verdict: "incorrect", reason: "Al(OH)₃ 含鋁、氧、氫三種元素，Al₂O₃ 只含鋁、氧，不符合只比較同兩元素化合物的條件。" }
    },
    takeaway: "倍比定律先檢查：兩個物質是不是都只由同樣的兩種元素組成。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-15": {
    encouragement: "這題也先做資格審查：兩個物質必須由同樣兩種元素組成，而且要是不同化合物。",
    keyIdea: "H₂O／H₂O₂ 與 NO／NO₂ 都是同兩元素形成、比例不同的化合物，可呈現倍比定律。",
    steps: [
      "甲的 O₂、O₃ 都是氧的單質，不是兩元素化合物，所以不合。",
      "丙的 H₂O、H₂O₂ 都由氫與氧組成；固定氫的質量時，氧的質量比為 1：2。",
      "丁的 NO、NO₂ 都由氮與氧組成；固定氮的質量時，氧的質量比也為 1：2。",
      "乙的兩物質不含相同兩種元素，戊的一個物質多了氫，因此應選丙、丁，也就是 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是氧與臭氧，兩者都是單質；乙的 CO 與 NO 也不是同樣兩種元素組成，所以兩項都不合。" },
      B: { verdict: "incorrect", reason: "丙可說明倍比定律，但甲的氧與臭氧是同素異形體，不是兩元素化合物。" },
      C: { verdict: "incorrect", reason: "乙的兩物質分別含碳或氮，元素種類不同；戊的 Ca(OH)₂ 又比 CaO 多了氫元素。" },
      D: { verdict: "correct", reason: "H₂O／H₂O₂ 與 NO／NO₂ 都由相同兩元素形成，固定一元素時，另一元素的質量呈簡單整數比。" },
      E: { verdict: "incorrect", reason: "丁符合，但戊不符合；CaO 只含鈣、氧，Ca(OH)₂ 還含氫，並非同兩元素化合物。" }
    },
    takeaway: "倍比定律不是看到「比例不同」就算，還要先確認是相同兩元素的化合物。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-17": {
    encouragement: "這題不用知道 X、Y、Z、W 是什麼，只要守住總質量不會憑空增加或消失。",
    keyIdea: "依質量守恆，2 克 X 與 4 克 Y 完全反應時，生成的 W 為 1 克。",
    steps: [
      "反應物總質量為 2＋4＝6 克。",
      "生成物總質量也必須是 6 克；已知 Z 為 5 克，所以 W 為 6－5＝1 克。",
      "也就是每 2 克 X 對應生成 1 克 W。",
      "要生成 3 克 W，X 需要 2×3＝6 克，答案為 E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2 克 X 只能生成 1 克 W，不足以生成題目要求的 3 克 W。" },
      B: { verdict: "incorrect", reason: "把 W 的目標質量直接當成 X 的質量，沒有使用 2 克 X 對應 1 克 W 的比例。" },
      C: { verdict: "incorrect", reason: "4 克 X 依比例只能生成 2 克 W，仍少於 3 克。" },
      D: { verdict: "incorrect", reason: "由固定反應比例可知 X 的需要量應是 W 的兩倍，5 克不符合此比例。" },
      E: { verdict: "correct", reason: "每生成 1 克 W 需 2 克 X，因此生成 3 克 W 需 6 克 X。" }
    },
    takeaway: "先用質量守恆補出未知產物的質量，再用同一反應的固定比例放大。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-18": {
    encouragement: "電子能階像一階一階的樓梯，不是連續斜坡。抓住這個畫面，就能找到錯誤敘述。",
    keyIdea: "原子的電子能階是離散的；電子躍遷時吸收或放出特定能量，因此形成特定頻率的光。",
    steps: [
      "電子只能處在允許的特定能階，從高能階降到低能階時，會放出等於兩能階差的能量。",
      "因為能階差是特定值，所以單一種類原子的發射光譜是特定頻率的線光譜，不是連續頻率。",
      "加熱或照光可提供能量讓電子升階；霓虹燈與煙火顏色也都和電子躍遷有關。",
      "因此錯誤的是 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "本題問「錯誤」敘述。電子能階是離散的，降階放出的光具有特定頻率，不是連續頻率。" },
      B: { verdict: "incorrect", reason: "本題要選錯誤項；一般而言電子位於離核較遠的能階時，能量較高，此敘述正確。" },
      C: { verdict: "incorrect", reason: "原子吸收適量的熱或光能後，電子確實可能躍遷至較高能階，所以不是錯誤項。" },
      D: { verdict: "incorrect", reason: "霓虹燈通電後，受激電子回到較低能階會放出特定顏色的光，此敘述正確。" },
      E: { verdict: "incorrect", reason: "煙火中的金屬元素受熱後發生電子躍遷，回到低能階時放出特定顏色的光，此敘述正確。" }
    },
    takeaway: "原子光譜之所以有特定顏色，是因電子能階像樓梯一樣不連續。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-19": {
    encouragement: "反應名稱不一定能保證氧化數改變；但只要元素單質真的參與反應並變成化合物，氧化數就一定會從 0 改變。",
    keyIdea: "元素單質的氧化數為 0；它參與化學反應形成化合物時，氧化數會改變，因此必為氧化還原反應。",
    steps: [
      "氧化還原反應的判準，是反應前後至少有元素的氧化數改變。",
      "結合、分解、酸鹼與沉澱只是反應外形或現象，其中都有可能出現氧化數不變的反應。",
      "元素單質的氧化數是 0；若它作為反應物參與並生成化合物，該元素的氧化數必由 0 改變。",
      "因此一定屬於氧化還原反應的是 E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "結合反應不一定是氧化還原，例如 CaO＋CO₂→CaCO₃ 中各元素氧化數都未改變。" },
      B: { verdict: "incorrect", reason: "分解反應不一定改變氧化數，例如 CaCO₃→CaO＋CO₂ 中各元素氧化數不變。" },
      C: { verdict: "incorrect", reason: "一般酸鹼中和的本質是 H⁺與 OH⁻生成水，元素氧化數通常不變。" },
      D: { verdict: "incorrect", reason: "沉澱反應常只是離子重新組合，例如 Ag⁺與 Cl⁻形成 AgCl，氧化數沒有改變。" },
      E: { verdict: "correct", reason: "元素單質的氧化數為0；它參與反應形成化合物時氧化數改變，必伴隨電子轉移。" }
    },
    takeaway: "判斷氧化還原不要只看反應名稱，最可靠的方法是檢查氧化數有沒有改變。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-20": {
    encouragement: "先認出食鹽遇濃硫酸會產生氯化氫，接著用「很容易溶於水、溶液呈酸性」判斷即可。",
    keyIdea: "NaCl 與濃 H₂SO₄ 反應可生成無色、具刺激性的 HCl 氣體；HCl 極易溶於水形成鹽酸。",
    steps: [
      "食鹽 NaCl 與濃硫酸作用會產生 HCl 氣體，反應中各元素氧化數沒有改變。",
      "HCl 是無色氣體，而且非常容易溶於水，所以不適合用排水集氣法。",
      "HCl 溶於水形成強酸鹽酸，會和大理石的 CaCO₃ 反應並放出 CO₂。",
      "因此正確的是 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "淡黃綠色是氯氣 Cl₂ 的特徵；氯化氫 HCl 是無色、有刺激性氣味的氣體。" },
      B: { verdict: "incorrect", reason: "HCl 極易溶於水，用排水法會讓大量氣體溶入水中，無法有效收集。" },
      C: { verdict: "incorrect", reason: "NaCl 與 H₂SO₄ 反應時沒有元素氧化數改變，屬酸與鹽的反應，不是氧化還原反應。" },
      D: { verdict: "correct", reason: "HCl 的水溶液是鹽酸，可與大理石 CaCO₃ 反應，因此會侵蝕大理石。" },
      E: { verdict: "incorrect", reason: "HCl 溶於水呈酸性，酚酞在酸性溶液中無色，不會呈粉紅色。" }
    },
    takeaway: "氯化氫是無色、極易溶於水的酸性氣體；不要和黃綠色的氯氣混在一起。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-38": {
    encouragement: "自來水處理其實是一條很生活化的流程：先讓雜質聚集沉降，再用強氧化劑消毒，最後保留少量餘氯。",
    keyIdea: "明礬幫助微粒凝聚沉降；氯與臭氧靠氧化力消毒；煮沸可去除大部分餘氯。",
    steps: [
      "氯氣與臭氧消毒都利用氧化作用破壞微生物，不是利用還原能力。",
      "湖水、雨水中的懸浮雜質通常經混凝、沉澱與過濾去除，不是主要靠離心。",
      "加入明礬可使細小懸浮物凝聚成較大顆粒並沉降，使水澄清。",
      "自來水保留少量餘氯可抑制輸送途中再污染，而煮沸能去除大部分餘氯，因此選 B、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "加氯消毒利用的是含氯物種的氧化能力，以破壞微生物，不是利用還原能力。" },
      B: { verdict: "correct", reason: "臭氧 O₃ 具有強氧化性，可氧化並破壞微生物，因此能用於消毒。" },
      C: { verdict: "incorrect", reason: "一般淨水程序主要用混凝、沉澱與過濾去除雜質，不是以離心力作為自來水處理的主要方法。" },
      D: { verdict: "correct", reason: "明礬在水處理中能促使細小懸浮顆粒凝聚，形成較大絮狀物後沉降，使水變澄清。" },
      E: { verdict: "correct", reason: "保留少量餘氯可持續抑菌；煮沸能使大部分餘氯逸散或分解，降低氯味。" }
    },
    takeaway: "淨水的「澄清」與「消毒」不同：明礬負責聚集雜質，氯或臭氧負責殺菌。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-102-49": {
    encouragement: "先用元素種類淘汰含氮的物質，再從剩下選項判斷哪些是烷烴的含氧衍生物。",
    keyIdea: "乙醇與乙酸都常見、只含 C、H、O，並可視為烷烴的氫被含氧官能基取代後形成的衍生物。",
    steps: [
      "條件丙要求只含碳、氫、氧，因此含氮的乙胺、核酸與胺基酸先排除。",
      "乙醇 C₂H₅OH 可看成乙烷的一個氫被羥基取代，屬烷烴衍生物。",
      "乙酸 CH₃COOH 也只含 C、H、O，屬常見含氧有機物與烷烴衍生物。",
      "所以符合三項條件的是 A、C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "乙醇是生活中常見的醇類，只含 C、H、O，可視為乙烷的氫被羥基取代形成的衍生物。" },
      B: { verdict: "incorrect", reason: "乙胺的分子含氮，不符合分子只由碳、氫、氧三種元素構成的條件。" },
      C: { verdict: "correct", reason: "乙酸是食醋中的常見有機物，只含 C、H、O，屬含羧基的烷烴衍生物。" },
      D: { verdict: "incorrect", reason: "核酸含有氮、磷等元素，不符合只含 C、H、O 的條件，也不是簡單的烷烴衍生物。" },
      E: { verdict: "incorrect", reason: "胺基酸至少含有胺基中的氮，因此不符合只含碳、氫、氧的條件。" }
    },
    takeaway: "看到元素組成限制，先用它快速淘汰；含「胺」或「核酸」通常要注意氮元素。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-103-12": {
    encouragement: "平均原子量是把很多原子的資料平均後得到的數字，不代表自然界一定有一顆原子剛好就是這個質量。",
    keyIdea: "銀的單一原子只會是題目給的同位素質量之一；107.9 amu 是依天然含量算出的加權平均。",
    steps: [
      "題目指出銀原子有兩種同位素，單一原子的質量分別約為 107 amu 或 109 amu。",
      "107.9 amu 是把大量銀原子依 51.35% 與 48.65% 的比例加權平均後得到。",
      "平均值介於兩種同位素質量之間，但不是任一銀原子的實際質量。",
      "所以任一銀原子質量恰為 107.9 amu 的機率是 0%，答案為 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "單一銀原子的質量是約107或109 amu；107.9是大量銀原子的加權平均，因此機率為0%。" },
      B: { verdict: "incorrect", reason: "2.70% 不是任何一種同位素的天然含量，也不能由平均值的小數部分當作機率。" },
      C: { verdict: "incorrect", reason: "48.65% 是質量約109 amu之銀同位素的天然含量，不是質量107.9 amu原子的比例。" },
      D: { verdict: "incorrect", reason: "51.35% 是質量約107 amu之銀同位素的天然含量，不代表該原子質量為107.9 amu。" },
      E: { verdict: "incorrect", reason: "平均原子量描述整批天然銀的平均，不表示每一顆銀原子都具有107.9 amu的質量。" }
    },
    takeaway: "週期表上的原子量常是同位素的加權平均，不是單一原子的固定質量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-103-14": {
    encouragement: "同溫同壓下，氣體體積比就等於反應係數比。把一氧化碳消耗掉的氧氣與生成的二氧化碳分開記即可。",
    keyIdea: "由 2CO＋O₂→2CO₂，40 L CO 會消耗 20 L O₂並生成 40 L CO₂。",
    steps: [
      "反應式為 2CO＋O₂→2CO₂；同溫同壓下，體積比為 2：1：2。",
      "40 L CO 完全反應會消耗 20 L O₂，並生成 40 L CO₂。",
      "設反應前 O₂ 為 x L，反應後剩下 x－20 L；反應後總體積為 40＋(x－20)＝70。",
      "解得 x＝50，因此氧氣反應前為 50 L、反應後為 30 L，答案為 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若反應前為60 L，消耗20 L後應剩40 L，不會是選項所列的20 L；反應後總體積也不是70 L。" },
      B: { verdict: "correct", reason: "50 L O₂消耗20 L後剩30 L，加上生成的40 L CO₂，總體積正好是70 L。" },
      C: { verdict: "incorrect", reason: "氧氣參與反應後體積必減少20 L，不可能反應前後都維持40 L。" },
      D: { verdict: "incorrect", reason: "若反應前只有30 L，反應後應剩10 L，不會增加成50 L。" },
      E: { verdict: "incorrect", reason: "20 L O₂會被40 L CO完全消耗，反應後應為0 L，而不是60 L。" }
    },
    takeaway: "同溫同壓的氣體反應，可直接用平衡係數換體積；反應物的體積只會因消耗而減少。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-103-31": {
    encouragement: "這題一次考四件事，但可以分開處理：先看熱量正負，再看配平、氧化數與酸鹼性。",
    keyIdea: "ΔH＝＋68 kJ 表示吸熱；式子已配平；N₂中的氮被氧化；NO₂ 溶於水形成酸。",
    steps: [
      "ΔH 為正值，代表系統吸收熱量，因此這是吸熱反應，不是放熱反應。",
      "N₂＋2O₂→2NO₂ 的氮、氧原子數左右相等，符合質量守恆；生成2莫耳NO₂共吸收68 kJ，所以每莫耳生成熱是34 kJ。",
      "氮由 N₂ 中的0價升到 NO₂ 中的＋4價，被氧化，因此 N₂ 是還原劑，不是氧化劑。",
      "NO₂ 溶於水會形成酸性物質，可使藍色石蕊變紅，所以選 C、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "ΔH＝＋68 kJ 是正值，表示反應吸熱，不是放熱。" },
      B: { verdict: "incorrect", reason: "反應式生成2莫耳NO₂時吸收68 kJ，所以每莫耳NO₂的生成熱應為＋34 kJ/mol，不是68 kJ/mol。" },
      C: { verdict: "correct", reason: "左、右兩側都有2個氮原子與4個氧原子，反應式符合原子數與質量守恆。" },
      D: { verdict: "incorrect", reason: "N₂中的氮由0價升為＋4價，氮氣被氧化並使氧氣被還原，因此氮氣扮演還原劑。" },
      E: { verdict: "correct", reason: "NO₂ 溶於水會形成硝酸、亞硝酸等酸性物質，可使藍色石蕊試紙變紅。" }
    },
    takeaway: "ΔH 正負、反應係數、氧化數與酸鹼性要分開判斷，不要讓一個錯誤牽動全部。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-103-55": {
    encouragement: "只看分子式就能做：C₆H₁₂ 比相同碳數的烷烴 C₆H₁₄ 少兩個氫，表示有一個不飽和度。",
    keyIdea: "一般烯烴與單環環烷烴都可符合 CₙH₂ₙ；C₆H₁₂ 因此可能是烯烴或環烷烴。",
    steps: [
      "六個碳的直鏈飽和烷烴分子式應為 C₆H₁₄；題目的 C₆H₁₂ 少了兩個氫。",
      "少兩個氫可由一個 C＝C 雙鍵造成，因此可能是烯烴。",
      "也可由碳鏈首尾相接形成一個環，因成環同樣少兩個氫，所以可能是環烷烴。",
      "若再有一個環加雙鍵或一個三鍵，會再少氫，不符合 C₆H₁₂；因此選 B、C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "含6個碳的直鏈烷烴分子式是 C₆H₁₄，不是 C₆H₁₂。" },
      B: { verdict: "correct", reason: "單環環烷烴通式為 CₙH₂ₙ；當 n＝6 時正是 C₆H₁₂。" },
      C: { verdict: "correct", reason: "只有一個雙鍵的開鏈烯烴通式為 CₙH₂ₙ，因此可為 C₆H₁₂。" },
      D: { verdict: "incorrect", reason: "環烯烴同時有一個環與一個雙鍵，通式約為 CₙH₂ₙ₋₂；六個碳應為 C₆H₁₀。" },
      E: { verdict: "incorrect", reason: "只有一個三鍵的炔烴通式為 CₙH₂ₙ₋₂；六個碳應為 C₆H₁₀，不是 C₆H₁₂。" }
    },
    takeaway: "相對於烷烴每少兩個氫，代表多一個不飽和度；一個環或一個雙鍵都算一個。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
