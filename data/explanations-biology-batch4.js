window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-1": {
    encouragement: "題目已經直接告訴你病原是蛋白質；再把蛋白質拆回最小組成，就能作答。",
    keyIdea: "普里昂是具有感染性的異常蛋白質，而蛋白質的基本組成單位是胺基酸。",
    steps: [
      "先抓住題幹的關鍵字：普里昂是一種蛋白質。",
      "蛋白質是許多胺基酸以胜肽鍵連成的分子。",
      "所以問普里昂的成分時，應選胺基酸，而不是核酸或脂質的成分。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "脂肪酸是許多脂質的組成成分，不是蛋白質的基本單位。" },
      B: { verdict: "incorrect", reason: "核糖核酸就是 RNA；普里昂的感染性成分是蛋白質，不是 RNA。" },
      C: { verdict: "incorrect", reason: "去氧核糖核酸就是 DNA；普里昂不以 DNA 作為病原成分。" },
      D: { verdict: "incorrect", reason: "核苷酸是 DNA、RNA 的基本單位，不是蛋白質的基本單位。" },
      E: { verdict: "correct", reason: "普里昂是蛋白質，蛋白質由胺基酸聚合而成。" }
    },
    takeaway: "蛋白質拆成胺基酸；核酸拆成核苷酸；脂質常含脂肪酸。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-2": {
    encouragement: "這題不用背藥名，分清楚「抗生素」和「抗藥基因」各自做什麼就能排除四項。",
    keyIdea: "NDM-1 是可隨質體在細菌間移動的抗藥基因，使接收基因的細菌也可能具有抗藥性。",
    steps: [
      "NDM-1 基因不是製造抗生素，而是讓細菌能抵抗碳氫黴烯類抗生素。",
      "質體是細菌可交換的小型 DNA，能把抗藥基因帶到其他細菌。",
      "接收質體的細菌若表現 NDM-1，就可能得到相同抗藥性。",
      "這是細菌之間的基因轉移，不是把抗藥性轉給人體細胞。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NDM-1 基因的產物與分解抗生素、形成抗藥性有關，不是用來合成碳氫黴烯類抗生素。" },
      B: { verdict: "incorrect", reason: "質體攜帶的是 DNA，不是細菌用來分泌抗生素的管道；超級細菌也不是靠分泌碳氫黴烯抗生素而抗藥。" },
      C: { verdict: "incorrect", reason: "質體可使其他細菌獲得抗藥基因，不會使其他細菌改為分泌碳氫黴烯類抗生素。" },
      D: { verdict: "correct", reason: "帶有 NDM-1 的質體能在細菌間轉移，使其他細菌也可能對該類抗生素產生抗藥性。" },
      E: { verdict: "incorrect", reason: "受到感染的是病人，但 NDM-1 主要在細菌間轉移；不會因此讓病人的人體細胞得到抗藥性。" }
    },
    takeaway: "抗藥基因保護的是細菌；質體能讓這種能力在細菌之間快速擴散。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-3": {
    encouragement: "分類題最穩的方法不是看外表像不像，而是從「界」一路往下核對到兩者開始分開的位置。",
    keyIdea: "水稻與玉米同屬植物界、被子植物門、單子葉植物綱、禾本目與禾本科，但分屬不同的屬。",
    steps: [
      "分類階層越往下，條件越嚴格；同屬一科的生物一定也同目、同綱、同門、同界。",
      "人與梅花、大腸菌與酵母菌分屬不同界，不能宣稱前幾階層相同。",
      "水稻與玉米都是禾本科植物，直到科都相同，但屬與種不同。",
      "不同膚色的人仍屬同一物種，不會在種的階層分開。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "人屬動物界，梅花屬植物界，連界都不同，不可能同界、同門。" },
      B: { verdict: "incorrect", reason: "綠藻與蕨類的分類差異很早就出現，不會一路同到目。" },
      C: { verdict: "incorrect", reason: "大腸菌屬原核生物，酵母菌屬真菌，兩者不在同一界。" },
      D: { verdict: "correct", reason: "水稻與玉米皆為禾本科單子葉被子植物，從界到科相同，之後分屬稻屬與玉蜀黍屬。" },
      E: { verdict: "incorrect", reason: "白種人與黃種人都屬智人，連種的階層也相同，不是只相同到屬。" }
    },
    takeaway: "同種一定同屬；同屬一定同科。若兩者同科，科以上的階層也都相同。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-6": {
    encouragement: "「族群」不是只看一群生物聚在一起，還要同時符合相同物種、相同時間與相同地區。",
    keyIdea: "族群是同一時間生活在同一地區的同種個體集合。",
    steps: [
      "先確認是否為同一物種；只寫小魚、蕨類、竹子或細菌，可能包含許多物種。",
      "再確認個體是否生活在同一範圍並能互相影響。",
      "一個蜂窩內的蜜蜂通常屬同種，且共同生活於同一蜂窩，最符合族群定義。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "一個蜂窩內的蜜蜂通常是同一物種、同一時間共同生活的個體，可視為一個族群。" },
      B: { verdict: "incorrect", reason: "「小魚」只描述體型，水庫中可能同時有多種魚，不能確定是同種個體。" },
      C: { verdict: "incorrect", reason: "「蕨類」包含許多物種，山坡上的蕨類不一定屬同一種。" },
      D: { verdict: "incorrect", reason: "「竹子」是多種竹類的總稱，山谷中可能不只一個物種。" },
      E: { verdict: "incorrect", reason: "人的腸道內有許多不同種細菌，整體較接近多個族群共同形成的群集。" }
    },
    takeaway: "族群三條件：同種、同時、同地；少一項都不能直接判定。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-8": {
    encouragement: "地球早期沒有高等植物，最早大量把氧釋放到環境的是能行光合作用的微小生物。",
    keyIdea: "藍綠菌進行產氧型光合作用，長期釋放氧氣，促成大氣含氧量上升。",
    steps: [
      "早期地球大氣的游離氧很少。",
      "藍綠菌能利用光能，以水提供電子並釋放氧氣。",
      "氧先與海洋中的物質反應，之後逐漸累積到大氣中。",
      "因此藍綠菌出現是大氣氧增加的主要生物事件。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "火山活動主要釋放水蒸氣、二氧化碳等氣體，不是大氣氧的主要來源。" },
      B: { verdict: "incorrect", reason: "隕石撞擊不會持續製造並累積大量氧氣。" },
      C: { verdict: "incorrect", reason: "三葉蟲出現前大氣中早已有氧；動物呼吸反而會消耗氧。" },
      D: { verdict: "incorrect", reason: "氧化鐵是氧與鐵反應形成的結果，可作為已有氧的證據，不是氧氣的來源。" },
      E: { verdict: "correct", reason: "藍綠菌的產氧型光合作用長期釋放氧，促成大氣含氧量上升。" }
    },
    takeaway: "藍綠菌先製造氧；氧化鐵則留下環境中曾經有氧的證據。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-31": {
    encouragement: "根尖切片像一張班級快照：每個細胞可能在不同階段，而且大多數其實還沒進入分裂期。",
    keyIdea: "根尖生長點細胞小而排列緊密；400 倍光學顯微鏡可辨認主要有絲分裂時期。",
    steps: [
      "根尖分生組織持續產生新細胞，所以細胞小、細胞質濃、排列緊密。",
      "細胞週期中間期通常比分裂期長，因此視野中大多數細胞不會正在移動染色體。",
      "根尖體細胞進行有絲分裂，不會在中央另有一群進行減數分裂。",
      "10 倍目鏡配 40 倍物鏡為 400 倍，配合染色可分辨前、中、後、末期。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "根尖分生組織細胞剛形成且分裂旺盛，通常體積小、排列緊密。" },
      B: { verdict: "incorrect", reason: "只有有絲分裂後期的染色體會往兩極移動；多數細胞處於較久的間期。" },
      C: { verdict: "incorrect", reason: "根尖生長點的體細胞進行有絲分裂；減數分裂發生在形成生殖細胞或孢子的組織。" },
      D: { verdict: "correct", reason: "總倍率 10×40＝400 倍，經適當染色後足以依染色體位置判斷有絲分裂主要時期。" },
      E: { verdict: "incorrect", reason: "同一根尖的細胞各自進行細胞週期，會同時看到不同階段，不會全部同步。" }
    },
    takeaway: "看根尖切片要記得：多數細胞在間期，少數分別落在不同有絲分裂時期。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-32": {
    encouragement: "每個選項都先問兩件事：它屬哪一界？真正的構造或生活方式是什麼？",
    keyIdea: "部分黴菌名稱與孢子顏色有關；浮游矽藻與綠藻都能行光合作用。",
    steps: [
      "青黴、黑黴等常見名稱可依孢子團呈現的顏色而來。",
      "矽藻與綠藻具有光合色素，在有光環境能自行製造有機物。",
      "石花菜、紫菜是紅藻，不是褐藻。",
      "苔蘚仍能促進岩石風化；蕨類也有地下莖等莖部構造。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "常見黴菌可因孢子團呈現的顏色而有青黴、黑黴等名稱。" },
      B: { verdict: "incorrect", reason: "石花菜與紫菜都屬紅藻，不是褐藻。" },
      C: { verdict: "correct", reason: "矽藻與綠藻都有光合色素，可行光合作用，屬自營生物。" },
      D: { verdict: "incorrect", reason: "苔蘚雖沒有維管束，仍可分泌物質、保留水分並促進岩石表面風化。" },
      E: { verdict: "incorrect", reason: "常見蕨類具有根、莖、葉；莖常為地下莖，不是只有地上葉與地下根。" }
    },
    takeaway: "藻類先辨色素類群；蕨類有根、莖、葉；沒有維管束不代表不能影響岩石。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-33": {
    encouragement: "水耕沒有土，但植物的基本需求沒消失：根仍要吸收水、礦物質，也要呼吸。",
    keyIdea: "水耕植物仍有根並可開花結果；培養液需略酸且通氣，讓根部獲得氧氣。",
    steps: [
      "水耕只是不使用土壤，仍可提供植物所需的無機鹽、水、氧與光。",
      "題幹給的 pH 5.5～6.5 小於 7，屬微酸性，不是微鹼性。",
      "植物可用無機鹽吸收礦物養分，不必在培養液中加入有機肥。",
      "根細胞需要氧進行有氧呼吸，所以培養液通常要通氣。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "只要光照、礦物質及其他生長條件合適，水耕的開花植物仍能開花結果。" },
      B: { verdict: "incorrect", reason: "pH 5.5～6.5 低於 7，屬微酸性，不是微鹼性。" },
      C: { verdict: "incorrect", reason: "培養液以可直接吸收的無機鹽供應礦物質，不必加入有機肥料才能生長。" },
      D: { verdict: "correct", reason: "培養液通氣可供根細胞進行有氧呼吸，支持主動吸收與生長。" },
      E: { verdict: "incorrect", reason: "水耕植物仍需形成根系來吸收水與礦物質；浸在培養液中不等於不需要根。" }
    },
    takeaway: "水耕省略的是土壤，不是根；培養液要有礦物質、合適酸鹼值與氧氣。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-55": {
    encouragement: "植物沒有神經，不代表沒有感覺；向光、向地與膨壓改變都是植物回應環境的方式。",
    keyIdea: "不同組織可組成器官；植物沒有神經系統，仍能感受刺激並產生反應。",
    steps: [
      "植物器官由多種組織協同組成，例如葉含表皮、葉肉與維管束。",
      "根、莖、葉是營養器官；花、果實、種子是生殖器官。",
      "植物各器官都需要呼吸，不是營養器官只光合、生殖器官只呼吸。",
      "植物激素可參與莖的向光性與背地性，所以兩種反應都與激素有關。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "器官由多種不同組織按一定方式組成，並共同完成特定功能。" },
      B: { verdict: "incorrect", reason: "葉是營養器官，但花是生殖器官，不能把兩者都歸為營養器官。" },
      C: { verdict: "incorrect", reason: "活的營養器官與生殖器官都會呼吸；能否光合作用則取決於是否具有適合的光合組織。" },
      D: { verdict: "correct", reason: "植物雖無神經系統，仍能透過細胞訊息與激素感受光、重力、觸碰等刺激並反應。" },
      E: { verdict: "incorrect", reason: "莖的向光性與背地性都涉及生長素分布和兩側生長速率差異。" }
    },
    takeaway: "植物的感應不靠神經，仍可用激素、膨壓與生長差異完成反應。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-57": {
    encouragement: "神經系統分類先畫兩層：中樞是腦和脊髓，周圍則是連接中樞與全身的神經。",
    keyIdea: "甲與丙正確；小腦屬中樞，自律神經調節平滑肌、心肌及腺體分泌，不是腺體收縮。",
    steps: [
      "中樞神經系統包含腦與脊髓；周圍神經系統包含腦神經、脊神經等。",
      "小腦是腦的一部分，因此屬中樞神經系統，乙錯誤。",
      "自律神經系統分交感與副交感兩部分，丙正確。",
      "自律神經可調節平滑肌與心肌的活動，也調節腺體分泌；腺體不是以「收縮」作為主要反應，所以丁用詞錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲正確說明中樞與周圍兩大系統；丙也正確指出自律神經含交感與副交感神經。" },
      B: { verdict: "incorrect", reason: "此組含乙，但小腦屬中樞神經系統，乙錯誤。" },
      C: { verdict: "incorrect", reason: "此組含丁；自律神經調節腺體的是分泌活動，不能說主要調控腺體收縮。" },
      D: { verdict: "incorrect", reason: "乙將小腦歸入周圍神經，丁又把腺體作用寫成收縮，兩者都不正確。" },
      E: { verdict: "incorrect", reason: "四人中只有甲、丙的整句敘述正確，不是全部正確。" }
    },
    takeaway: "中樞＝腦＋脊髓；自律神經＝交感＋副交感，調節肌肉活動與腺體分泌。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-101-1": {
    encouragement: "細胞膜像有功能的油膜：主要是脂質和蛋白質，外側還常接著醣；DNA 則放在遺傳物質的位置。",
    keyIdea: "細胞膜主要含磷脂、蛋白質、醣類與膽固醇，不以 DNA 作為膜的結構成分。",
    steps: [
      "磷脂形成雙層，是細胞膜的基本骨架。",
      "膜蛋白負責運輸、接收訊息等功能，膜表面也可接有醣鏈。",
      "動物細胞膜含膽固醇，可調節膜的流動性。",
      "DNA 是遺傳物質，主要位於細胞核與部分胞器內，不是細胞膜成分。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "細胞膜含多種膜蛋白，負責通道、載體、受體與酵素等功能。" },
      B: { verdict: "incorrect", reason: "磷脂是細胞膜雙層的主要結構成分。" },
      C: { verdict: "incorrect", reason: "膜外側可有與脂質或蛋白質相連的醣鏈，參與細胞辨識。" },
      D: { verdict: "correct", reason: "去氧核糖核酸是 DNA，不是細胞膜的結構成分。" },
      E: { verdict: "incorrect", reason: "動物細胞膜含膽固醇，可影響膜的穩定性與流動性。" }
    },
    takeaway: "細胞膜四類常見成分：磷脂、蛋白質、醣類、膽固醇；DNA 不在其中。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-101-29": {
    encouragement: "顯微鏡題先算總倍率，再記住找像原則：低倍先找、再換高倍。",
    keyIdea: "目鏡與物鏡都利用凸透鏡成像；總倍率等於目鏡倍率乘以物鏡倍率。",
    steps: [
      "複式光學顯微鏡以物鏡先形成放大像，再由目鏡繼續放大。",
      "觀察時先用低倍物鏡，因為視野較大、較容易找到標本。",
      "物鏡由 4 倍換 40 倍，線性倍率增為 10 倍，視野面積約縮為原來的 1/100。",
      "5×40 與 10×20 都等於總倍率 200 倍。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "目鏡與物鏡都是由凸透鏡組成的鏡組，利用折射形成放大的像。" },
      B: { verdict: "incorrect", reason: "光源先經聚光構造穿過切片，再進入物鏡，並不是先經物鏡才穿過切片。" },
      C: { verdict: "incorrect", reason: "高倍率視野小，不利快速尋找；應先用低倍率找到並置中目標。" },
      D: { verdict: "incorrect", reason: "物鏡倍率增為 10 倍時，視野直徑約成 1/10，面積約成 1/100，不是放大為 100 倍。" },
      E: { verdict: "correct", reason: "5×40＝200，10×20＝200，兩種組合的總放大倍率相同。" }
    },
    takeaway: "總倍率用乘法；倍率越高，視野越小、越暗，鏡頭通常也越靠近玻片。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-101-30": {
    encouragement: "食物名稱很多，但只要分成植物、真菌與藻類三組，就能完成五界分類。",
    keyIdea: "玉米、鳥巢蕨、番茄、四季豆屬植物界；香菇、酵母菌屬真菌界；海帶、石花菜在五界系統歸原生生物界。",
    steps: [
      "先把能形成植物器官的玉米、鳥巢蕨、番茄與四季豆歸入植物界。",
      "香菇與酵母菌都是真菌，歸真菌界。",
      "五界系統中，海帶與石花菜等藻類歸原生生物界。",
      "題中共涉及三個界；同組判斷中 D、E 正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這些生物分屬植物界、真菌界與原生生物界，共三個界，不是四個。" },
      B: { verdict: "incorrect", reason: "香菇是真菌界，海帶在五界系統中歸原生生物界。" },
      C: { verdict: "incorrect", reason: "酵母菌是真菌，石花菜是紅藻，在五界系統中分屬不同界。" },
      D: { verdict: "correct", reason: "鳥巢蕨是蕨類植物，玉米是被子植物，兩者都屬植物界。" },
      E: { verdict: "correct", reason: "番茄與四季豆都是被子植物，皆屬植物界。" }
    },
    takeaway: "五界舊分類中：大型藻類歸原生生物界；酵母與菇類都歸真菌界。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-101-45": {
    encouragement: "這題只要分兩類計算：A、T 鹼基對各 2 個氫鍵；G、C 鹼基對各 3 個氫鍵。",
    keyIdea: "序列中 A、T 共 8 個位置，形成 8 組雙氫鍵；G、C 共 12 個位置，形成 12 組三氫鍵。",
    steps: [
      "序列 AACGGTCGCATCGGTCATGC 共 20 個鹼基。",
      "逐字計數得到 A＝4、T＝4，因此 A 或 T 所在的 8 個鹼基對各有 2 個氫鍵，共 8×2＝16。",
      "G＝6、C＝6，因此 G 或 C 所在的 12 個鹼基對各有 3 個氫鍵，共 12×3＝36。",
      "總氫鍵數為 16＋36＝52。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "20 只是此單股的鹼基數，也就是鹼基對數，沒有把每對的 2 或 3 個氫鍵算入。" },
      B: { verdict: "incorrect", reason: "40 等於把 20 對都當成 A-T 對計算，忽略 G-C 對有 3 個氫鍵。" },
      C: { verdict: "incorrect", reason: "48 不是依 A/T 與 G/C 的實際數量分別計算所得。" },
      D: { verdict: "correct", reason: "A、T 共 8 個位置貢獻 16 個氫鍵，G、C 共 12 個位置貢獻 36 個，合計 52。" },
      E: { verdict: "incorrect", reason: "60 等於把 20 對全當成 G-C 對，實際上有 8 對是 A-T。" }
    },
    takeaway: "氫鍵總數＝2×（A＋T）＋3×（G＋C），其中計數取任一條單股即可。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-9": {
    encouragement: "核酸的名稱雖然沒有直接寫元素，但從磷酸、五碳糖和含氮鹼基就能拼出答案。",
    keyIdea: "核酸主要含碳、氫、氧、氮、磷，不以硫作為基本結構元素。",
    steps: [
      "核苷酸由磷酸、五碳糖與含氮鹼基組成。",
      "五碳糖提供碳、氫、氧；含氮鹼基再提供氮。",
      "磷酸提供磷與氧，因此核酸常見元素為 C、H、O、N、P。",
      "硫可出現在部分胺基酸與蛋白質中，但不是核酸的基本結構元素。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "五碳糖與含氮鹼基都含碳，碳是核酸的構成元素。" },
      B: { verdict: "incorrect", reason: "含氮鹼基含有氮，氮是核酸的構成元素。" },
      C: { verdict: "incorrect", reason: "每個核苷酸都有磷酸基，磷是核酸的重要構成元素。" },
      D: { verdict: "correct", reason: "核酸的核苷酸基本構造不含硫；硫較常見於半胱胺酸、甲硫胺酸等胺基酸。" },
      E: { verdict: "incorrect", reason: "五碳糖與磷酸都含氧，氧是核酸的構成元素。" }
    },
    takeaway: "核酸元素記作 CHONP；蛋白質除了 CHON，部分還含 S。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-13": {
    encouragement: "疫苗不必讓病毒能繁殖，但一定要留下免疫系統認得出的「抗原標誌」。",
    keyIdea: "病毒外殼蛋白可作為抗原；只有外殼、沒有遺傳物質的病毒樣顆粒仍能引發免疫辨識。",
    steps: [
      "病毒沒有完整細胞構造，基本上由核酸遺傳物質與蛋白質外殼組成。",
      "病毒缺少核糖體及完整代謝系統，需進入宿主細胞才能大量製造病毒成分。",
      "疫苗須保留能被免疫系統辨識的抗原結構，才能誘發免疫反應。",
      "即使移除遺傳物質，外殼蛋白仍可保有抗原性，所以 E 是錯誤敘述。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "病毒不是細胞，不具細胞質，也沒有一般細胞的胞器，此敘述正確。" },
      B: { verdict: "incorrect", reason: "典型病毒具有 DNA 或 RNA 核酸，以及包覆核酸的蛋白質外殼，此敘述正確。" },
      C: { verdict: "incorrect", reason: "病毒缺少核糖體與完整酵素系統，無法自行製造蛋白質，此敘述正確。" },
      D: { verdict: "incorrect", reason: "失活處理須讓病毒失去感染或繁殖能力，同時保留足以被免疫系統辨識的抗原特徵，此敘述符合疫苗原理。" },
      E: { verdict: "correct", reason: "病毒外殼蛋白本身就能是抗原；沒有遺傳物質只會降低繁殖風險，不會因此失去抗原性。" }
    },
    takeaway: "疫苗的安全關鍵是不能致病；有效關鍵則是仍保有可被辨識的抗原。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-14": {
    encouragement: "三層多樣性可以用範圍判斷：同種內差異是遺傳，多種生物是物種，多種棲地才是生態系。",
    keyIdea: "草原、灌叢、樹林是不同棲地與生態系類型，同一地區同時具有這些環境就是生態系多樣性。",
    steps: [
      "遺傳多樣性看同一物種內的基因或品系差異。",
      "物種多樣性看一個區域內有多少物種及其組成。",
      "生態系多樣性看區域內是否包含不同棲地、群集與環境條件。",
      "選項 D 同時列出草原、灌叢、樹林，因此最符合生態系層級。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "生態池內多種生物形成食物網，重點是同一生態系內的物種及關係，不是多種生態系。" },
      B: { verdict: "incorrect", reason: "番茄不同品種仍屬同一物種，果色與果形差異屬遺傳多樣性。" },
      C: { verdict: "incorrect", reason: "列出樹林中的不同蛙類及數量，描述的是物種多樣性。" },
      D: { verdict: "correct", reason: "草原、灌叢與樹林具有不同環境與群集，並存於一地區代表生態系多樣性。" },
      E: { verdict: "incorrect", reason: "列舉不同兩生類物種的種類數，描述的是物種多樣性。" }
    },
    takeaway: "同種不同品系＝遺傳；多種生物＝物種；多種棲地＝生態系。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-28": {
    encouragement: "第一減數分裂最特別的主角是「同源染色體」；第二次才輪到姊妹染色分體分開。",
    keyIdea: "同源染色體聯會形成四分體，以及各對非同源染色體的獨立排列，只發生在減數分裂Ⅰ。",
    steps: [
      "減數分裂前期Ⅰ，同源染色體互相配對，形成四分體。",
      "中期Ⅰ各對同源染色體在赤道面上的方向彼此獨立，形成自由組合。",
      "第一次分裂分開的是同源染色體；第二次分裂才分開姊妹染色分體。",
      "核膜消失與紡錘體形成在兩次分裂都可能發生，不是第一次專有。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "同源染色體聯會形成四分體是前期Ⅰ的特有現象，減數分裂Ⅱ不再聯會。" },
      B: { verdict: "incorrect", reason: "兩次減數分裂都需要形成紡錘體來移動染色體，不是第一減數分裂專有。" },
      C: { verdict: "incorrect", reason: "姊妹染色分體互相分離發生於後期Ⅱ，不是第一減數分裂。" },
      D: { verdict: "incorrect", reason: "核膜與核仁可在前期Ⅰ及前期Ⅱ消失，不是只出現在第一次分裂。" },
      E: { verdict: "correct", reason: "中期Ⅰ各對同源染色體的排列方向彼此獨立，使非同源染色體自由組合。" }
    },
    takeaway: "減一分同源、減二分姊妹；聯會與自由組合是減一的代表事件。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-37": {
    encouragement: "質離就是水離開植物細胞；抓住這個方向，再判斷平衡時分子是否完全停止。",
    keyIdea: "高張蔗糖液使水外流並造成質離；平衡是雙向移動速率相等，不是水分子停止移動。",
    steps: [
      "植物細胞出現質離，表示細胞失水、原生質體縮小，因此外液對細胞是高張。",
      "浸泡初期水由細胞內淨移向細胞外，細胞液因失水而濃度升高。",
      "細胞內溶質濃度升高，使滲透壓逐漸增大，直到內外水勢達動態平衡。",
      "平衡時水仍會雙向穿膜，只是兩方向速率相同，體積不再淨改變。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "外液為高張時，水由細胞內淨流出，才會造成質離。" },
      B: { verdict: "incorrect", reason: "浸泡初期的淨移動方向是由細胞內到細胞外，不是由外向內。" },
      C: { verdict: "correct", reason: "細胞失水後細胞液濃度上升，因此細胞內滲透壓逐漸增大。" },
      D: { verdict: "correct", reason: "達平衡時仍有水分子雙向通過細胞膜，只是沒有淨移動，屬動態平衡。" },
      E: { verdict: "incorrect", reason: "蔗糖不會因平衡就大量穿過原生質膜進入液胞；液胞內主要仍是原有細胞液，只是失水濃縮。" }
    },
    takeaway: "滲透平衡不是停止移動，而是水分子兩方向移動速率相等。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-43": {
    encouragement: "先把運動分成兩類：靠兩側生長速度不同的永久彎曲，或靠膨壓改變的可逆開合。",
    keyIdea: "大豆葉片夜間閉合主要由葉枕細胞膨壓改變；其餘選項主要涉及細胞生長速率差異。",
    steps: [
      "胡瓜卷鬚纏繞是接觸後兩側生長不均造成的向性運動。",
      "根向地、莖向光都由器官兩側伸長速率不同而彎曲。",
      "芽鞘由基部向上生長也涉及細胞伸長。",
      "大豆葉夜間閉合屬睡眠運動，葉枕兩側細胞離子與水分改變造成膨壓差，可較快且可逆。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "卷鬚受碰觸後兩側生長速率不同而彎曲纏繞，屬生長造成的運動。" },
      B: { verdict: "incorrect", reason: "橫放根的向地性由生長素分布改變，造成上下側伸長速率不同。" },
      C: { verdict: "correct", reason: "大豆葉片夜間閉合主要由葉枕細胞的膨壓改變造成，不必依靠兩側長出不同長度。" },
      D: { verdict: "incorrect", reason: "莖頂向光彎曲是背光側與向光側細胞伸長速率不同造成。" },
      E: { verdict: "incorrect", reason: "芽鞘向上延伸來自基部附近細胞持續伸長，屬生長運動。" }
    },
    takeaway: "向光、向地、纏繞多靠生長差；葉片快速開合常靠膨壓差。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
