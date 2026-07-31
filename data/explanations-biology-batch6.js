window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-105-33": {
    encouragement: "孟德爾的重點不是只看豌豆外表，而是從子代比例推回遺傳因子的運作規則。",
    keyIdea: "孟德爾提出一種性狀由一對遺傳因子控制，不同性狀的因子可彼此獨立分配。",
    steps: [
      "同一性狀選用兩種明顯相反表徵，才能追蹤因子如何傳遞。",
      "每個體有成對因子，形成配子時分離，子代再各得一個。",
      "研究兩種性狀時，他歸納不同因子可彼此獨立分配。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "孟德爾刻意選擇同一性狀的兩種明顯差異，不是主張單一性狀有很多差異。" },
      B: { verdict: "correct", reason: "他提出一種性狀由一對遺傳因子控制，形成配子時兩因子分離。" },
      C: { verdict: "correct", reason: "雙性狀實驗支持不同對遺傳因子在符合條件時彼此獨立分配。" },
      D: { verdict: "incorrect", reason: "F1 通常只表現顯性性狀，隱性性狀不會比顯性更常出現。" },
      E: { verdict: "incorrect", reason: "豌豆能自花授粉保存純系，也能人工雜交，正適合遺傳研究。" }
    },
    takeaway: "一對因子控制一種性狀；分離律管一對因子，獨立分配律看不同對因子。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-35": {
    encouragement: "原核不等於沒有細胞，而是沒有細胞核；先看每個名稱屬細菌、古菌還是真核生物。",
    keyIdea: "甲烷菌屬古菌，藍綠菌屬細菌，兩者都是原核生物。",
    steps: [
      "原核細胞沒有核膜包圍的細胞核，也沒有一般膜狀胞器。",
      "甲烷菌是古菌，藍綠菌是細菌，都屬原核生物。",
      "酵母、松與人都是真核生物，即使成熟細胞失去細胞核也不改變生物類群。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲烷菌屬古菌域，細胞沒有細胞核，為原核細胞。" },
      B: { verdict: "incorrect", reason: "酵母菌是真菌，具有真核細胞構造。" },
      C: { verdict: "correct", reason: "藍綠菌就是藍綠細菌，屬細菌域，為原核細胞。" },
      D: { verdict: "incorrect", reason: "松是植物，導管細胞雖成熟時死亡，仍源自真核植物細胞。" },
      E: { verdict: "incorrect", reason: "成熟紅血球雖無細胞核，仍是由真核的人體細胞分化而來，不是原核生物。" }
    },
    takeaway: "原核看生物類群與基本構造，不能只用成熟細胞有沒有細胞核判斷。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-55": {
    encouragement: "有性生殖的核心不是外表像不像種子，而是生命史中有沒有配子結合。",
    keyIdea: "授粉促成配子結合；水筆仔胎生苗來自受精形成的種子，兩者都與有性生殖有關。",
    steps: [
      "授粉把花粉送到柱頭，是種子植物完成受精前的重要步驟。",
      "胎生苗由受精後形成的種子在母株上萌發，來源仍是有性生殖。",
      "扦插、組織培養是不經配子結合的營養繁殖；孢子萌發本身也不等於配子結合。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "授粉讓花粉到達雌性構造，是種子植物有性生殖的重要環節。" },
      B: { verdict: "incorrect", reason: "扦插利用枝條長成新株，不經配子結合，屬無性營養繁殖。" },
      C: { verdict: "correct", reason: "水筆仔等胎生苗由受精形成的種子在母株上萌發，來源屬有性生殖。" },
      D: { verdict: "incorrect", reason: "蕨類孢子萌發產生配子體的這一步沒有配子結合，題目不將孢子繁殖本身列為有性繁殖方式。" },
      E: { verdict: "incorrect", reason: "組織培養由體細胞長成植株，不經受精，屬無性生殖。" }
    },
    takeaway: "種子或胎生苗通常源自受精；扦插與組織培養則直接複製體細胞。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-57": {
    encouragement: "擴散不需要細胞額外供能，分子會沿濃度差由高處往低處移動。",
    keyIdea: "肺泡與血液間的氧、二氧化碳交換由分壓差推動，屬簡單擴散。",
    steps: [
      "肺泡氧分壓較血液高，氧擴散入血；血液二氧化碳分壓較高，二氧化碳擴散入肺泡。",
      "胃液分泌涉及胞吐與離子運輸，不只是擴散。",
      "腎、小腸與植物根的吸收常需運輸蛋白或能量。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "氧與二氧化碳依分壓差穿過肺泡、微血管薄壁，屬簡單擴散。" },
      B: { verdict: "incorrect", reason: "胃腺細胞分泌胃液涉及主動運輸與胞吐，不是單純擴散。" },
      C: { verdict: "incorrect", reason: "腎小管再吸收包含主動運輸、促進性擴散與滲透等多種機制。" },
      D: { verdict: "incorrect", reason: "根細胞吸收礦物離子常需主動運輸，才能逆濃度梯度累積。" },
      E: { verdict: "incorrect", reason: "小腸吸收養分包含主動運輸與促進性擴散，不能概括為單純擴散。" }
    },
    takeaway: "肺泡氣體交換靠分壓差擴散；吸收離子與養分常需要運輸蛋白。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-58": {
    encouragement: "題幹已給出激素的完整路線：組織製造、進入血液、到遠處調節。",
    keyIdea: "內分泌腺把激素分泌入血液，激素到標的器官調節生理活動。",
    steps: [
      "先找題幹的三個特徵：由組織產生、進入血液、到其他器官調節。",
      "這正是內分泌訊息的傳遞方式。",
      "ATP 留在細胞供能；酵素與消化液也不符合由血液運送到標的器官調節的定義。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "ATP 是細胞內直接使用的能量分子，不會作為遠距調節物質分泌到血液。" },
      B: { verdict: "incorrect", reason: "抗體隨血液循環參與免疫防禦，但不是內分泌組織用來調節標的器官的訊息。" },
      C: { verdict: "correct", reason: "激素由內分泌組織分泌入血，運送到標的細胞後調節生理活動。" },
      D: { verdict: "incorrect", reason: "酵素催化特定化學反應，不以題幹所述方式作為遠距內分泌訊息。" },
      E: { verdict: "incorrect", reason: "消化液分泌到消化道內發揮作用，不是先進入血液到其他器官。" }
    },
    takeaway: "激素的辨認線索：內分泌、進血液、遠距標的、調節作用。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-59": {
    encouragement: "抗原像標誌，抗體像專一辨識工具；預防疫苗與緊急抗體治療要分開。",
    keyIdea: "疫苗通常提供抗原讓身體自行產生抗體；蛇毒緊急治療可直接給予專一抗體。",
    steps: [
      "抗體是 B 細胞分化後產生的蛋白質，能專一辨識抗原。",
      "預防接種多給抗原，誘發免疫記憶，不是直接注射病原體抗體。",
      "蛇毒暴露後可使用含專一抗體的抗蛇毒血清快速中和毒素。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一般預防注射提供的是疫苗抗原，讓新生兒自己的免疫系統產生抗體與記憶細胞。" },
      B: { verdict: "incorrect", reason: "抗體是免疫球蛋白，主要由胺基酸組成，不是核酸。" },
      C: { verdict: "incorrect", reason: "免疫耐受失常時可能產生攻擊自身抗原的自體抗體，形成自體免疫疾病。" },
      D: { verdict: "correct", reason: "對應蛇毒的抗體可與毒素結合，抗蛇毒血清可用於毒蛇咬傷後的緊急治療。" },
      E: { verdict: "correct", reason: "抗體具有專一性，可辨識特定病原體抗原並協助中和或清除。" }
    },
    takeaway: "疫苗是主動免疫、較慢但有記憶；抗蛇毒抗體是被動免疫、作用快。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-60": {
    encouragement: "互利共生要兩方都得到好處；只要逐一寫出甲得到什麼、乙得到什麼即可判斷。",
    keyIdea: "地衣、螞蟻與蚜蟲、豆科植物與根瘤菌都讓雙方獲益。",
    steps: [
      "地衣中藻類供有機養分，真菌供水、礦物質與棲所。",
      "螞蟻保護蚜蟲並取得蜜露；豆科植物供根瘤菌碳源，根瘤菌供含氮物質。",
      "吸盤魚與鯊魚主要是前者受益；菟絲子則傷害宿主。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "吸盤魚可搭便車並吃殘餌，鯊魚通常沒有明顯利益，較接近片利共生。" },
      B: { verdict: "correct", reason: "藻類提供光合有機物，真菌提供水分、礦物質與保護，雙方都受益。" },
      C: { verdict: "incorrect", reason: "菟絲子吸取牽牛花養分，自己受益但宿主受害，屬寄生。" },
      D: { verdict: "correct", reason: "螞蟻獲得蚜蟲蜜露，蚜蟲則得到螞蟻保護，雙方都受益。" },
      E: { verdict: "correct", reason: "豆科植物供根瘤菌有機物，根瘤菌固氮供植物可利用氮源。" }
    },
    takeaway: "互利共生要能清楚說出雙方各自得到的利益。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-1": {
    encouragement: "ATP 像可立即使用的能量零錢；ATP 相對多時，細胞才有餘力合成身體物質。",
    keyIdea: "ATP／ADP 比值高代表能量充足，可推動合成體質等耗能的同化作用。",
    steps: [
      "ATP 水解成 ADP 可釋放可用能量，ATP 多代表能量狀態佳。",
      "合成蛋白質、核酸等體質需要能量，因此在 ATP／ADP 高時較能進行。",
      "光反應還產生 NADPH；碳反應消耗 ATP，不是在光下自行製造 ATP。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高中課程通常把 ATP 末端兩個磷酸鍵視為高能磷酸鍵，不是只有一個。" },
      B: { verdict: "incorrect", reason: "雙醣水解成單醣是分解反應，不以消耗 ATP 作為必要條件。" },
      C: { verdict: "correct", reason: "ATP／ADP 高表示能量充足，可支持蛋白質等體質的合成。" },
      D: { verdict: "incorrect", reason: "光反應不只產生 ATP，也產生 NADPH，並釋放氧氣。" },
      E: { verdict: "incorrect", reason: "碳反應使用光反應提供的 ATP，不是碳反應在光照下自行產生 ATP。" }
    },
    takeaway: "ATP 多時做合成；光反應製造 ATP、NADPH，碳反應使用它們。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-2": {
    encouragement: "維管束植物包含蕨類與種子植物；找兩者都具備的構造，就能排除花、果實與種子。",
    keyIdea: "維管束植物都有根、莖、葉與維管束；花、種子、果實、花粉管只見於部分種子植物。",
    steps: [
      "蕨類是維管束植物，但沒有花、種子、果實與花粉管。",
      "裸子與被子植物也都是維管束植物，並具有葉。",
      "所以選項中所有維管束植物共有的是葉。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "蕨類與裸子植物都沒有花，花不是所有維管束植物共有。" },
      B: { verdict: "correct", reason: "蕨類、裸子植物與被子植物等維管束植物都有葉。" },
      C: { verdict: "incorrect", reason: "蕨類以孢子繁殖，不形成種子。" },
      D: { verdict: "incorrect", reason: "果實由被子植物的子房發育而成，裸子植物與蕨類沒有果實。" },
      E: { verdict: "incorrect", reason: "花粉管是種子植物受精相關構造，蕨類沒有花粉。" }
    },
    takeaway: "維管束植物＝蕨類＋種子植物；共同有根莖葉，不一定有種子與花。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-3": {
    encouragement: "種子通常是受精後的成果；利用根、莖、枝條或組織長新株則多為無性生殖。",
    keyIdea: "西瓜種子由配子結合後的胚珠發育而來，屬有性生殖。",
    steps: [
      "有性生殖的核心是精、卵配子結合形成合子。",
      "西瓜開花授粉、受精後形成種子，種子可長成新株。",
      "塊根、地下莖、扦插和組織培養都直接利用體細胞繁殖。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "西瓜種子含由受精卵發育的胚，利用種子繁殖屬有性生殖。" },
      B: { verdict: "incorrect", reason: "番薯由塊根長出新株，不經受精，屬營養繁殖。" },
      C: { verdict: "incorrect", reason: "蓮藕是地下莖，利用莖繁殖屬無性生殖。" },
      D: { verdict: "incorrect", reason: "茶樹枝條發根是扦插，直接由體細胞形成新株。" },
      E: { verdict: "incorrect", reason: "組織培養利用體細胞的全能性，不經配子結合。" }
    },
    takeaway: "種子繁殖通常有受精；根、莖、葉、枝條與組織培養多為無性繁殖。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-4": {
    encouragement: "溫度會改變反應速度與氣孔狀態，但不會把光反應原本的步驟數量變多或變少。",
    keyIdea: "溫度能影響蒸散、氣孔、二氧化碳進入與酵素活性；光反應步驟種類不因溫度改變。",
    steps: [
      "溫度升降會改變水分蒸發與保衛細胞狀態。",
      "氣孔開度改變後，二氧化碳進入葉片的速率也會改變。",
      "碳反應等酵素催化步驟受溫度影響。",
      "但既定光反應的反應步驟不會因溫度而增加或減少。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "溫度會影響水分蒸發速度，因此能改變蒸散量，此敘述合理。" },
      B: { verdict: "incorrect", reason: "溫度影響保衛細胞與植物水分狀態，可間接改變氣孔開度。" },
      C: { verdict: "incorrect", reason: "氣孔開度與分子運動受溫度影響，二氧化碳吸收速率可能改變。" },
      D: { verdict: "incorrect", reason: "酵素活性有適溫，過低反應慢、過高可能變性，此敘述合理。" },
      E: { verdict: "correct", reason: "溫度會影響反應速率，卻不會改變光反應原本包含幾個步驟，因此最不合理。" }
    },
    takeaway: "溫度影響「快慢與活性」，不會改寫一條反應途徑原有的步驟數。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-6": {
    encouragement: "加了抗凝血劑再離心，上層是血漿；先分清楚血漿中的溶解物和下沉的有形成分。",
    keyIdea: "血漿含水、電解質、抗體與血漿蛋白；血小板是有形成分，離心後不在上層血漿中。",
    steps: [
      "抗凝血使血液保持未凝固，離心後可分出上層血漿與下方血球。",
      "水、電解質、抗體及其他血漿蛋白溶在血漿中。",
      "血小板是細胞碎片，會和血球等有形成分分層，不易留在上層。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水約占血漿的大部分，容易存在上層液體。" },
      B: { verdict: "incorrect", reason: "抗體是可溶性的血漿蛋白，會存在血漿中。" },
      C: { verdict: "incorrect", reason: "鈉、氯等電解質溶於血漿水分中。" },
      D: { verdict: "correct", reason: "血小板屬血液有形成分，離心後隨細胞成分分層，最不易留在上層血漿。" },
      E: { verdict: "incorrect", reason: "白蛋白、球蛋白、纖維蛋白原等血漿蛋白位於上層血漿。" }
    },
    takeaway: "抗凝血後上層叫血漿；若讓血液凝固後，上層才叫血清。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-23": {
    encouragement: "先看物質大小與是否帶電：水和氧可被動通過；大分子與離子常需要特別機制。",
    keyIdea: "水進入根細胞可經滲透，氧進入肺泡細胞可經簡單擴散。",
    steps: [
      "水會通過選擇性膜，沿水勢差進出細胞，稱滲透。",
      "氧是小型非極性分子，可直接穿過脂雙層。",
      "澱粉太大不能用運輸蛋白整顆送入；海帶累積碘離子需主動運輸。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "根細胞外水勢較高時，水可經滲透作用進入仙人掌根細胞。" },
      B: { verdict: "correct", reason: "氧是小型非極性分子，可沿濃度差簡單擴散進入肺泡細胞。" },
      C: { verdict: "incorrect", reason: "酒精分子可直接穿過脂雙層，主要靠簡單擴散，不必主動運輸。" },
      D: { verdict: "incorrect", reason: "澱粉是巨大多醣，不能整個由一般膜運輸蛋白送入細胞。" },
      E: { verdict: "incorrect", reason: "海帶能把碘離子累積到高濃度，需能量與主動運輸，不是促進性擴散。" }
    },
    takeaway: "水看滲透、氧與酒精可簡單擴散；離子逆濃度累積通常要主動運輸。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-25": {
    encouragement: "題目問「最先開始」，先想食物進入口腔時哪種消化酵素已經出現。",
    keyIdea: "唾液澱粉酶在口腔開始分解澱粉；麵包與薯條的主要醣類都是澱粉。",
    steps: [
      "食物先進入口腔，唾液澱粉酶可立刻開始分解澱粉。",
      "麵包的麵粉與薯條的馬鈴薯都以澱粉為主要成分。",
      "牛排蛋白質主要到胃才開始消化；可樂糖分不需先分解，芭樂纖維也難被人體消化。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "牛排主要成分為蛋白質，主要從胃中受胃蛋白酶作用才開始消化。" },
      B: { verdict: "correct", reason: "麵包含大量澱粉，入口後即可受唾液澱粉酶分解。" },
      C: { verdict: "correct", reason: "薯條由馬鈴薯製成，主要含澱粉，也在口腔開始消化。" },
      D: { verdict: "incorrect", reason: "可樂中的糖多為可直接吸收的小分子，不需先由消化酵素分解。" },
      E: { verdict: "incorrect", reason: "芭樂雖有糖，但大量纖維素不能被人體酵素消化，不是最先開始消化的主要成分。" }
    },
    takeaway: "澱粉口腔開始、蛋白質胃開始、脂質主要在小腸消化。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-41": {
    encouragement: "遺傳規則不能直接把一個例子的比例套到整個人類族群；先看基因位置與控制方式。",
    keyIdea: "孟德爾因子有顯隱性；身高由多基因共同影響，每一基因的等位基因仍可有表現關係。",
    steps: [
      "孟德爾以顯性與隱性描述成對遺傳因子的表現。",
      "身高是多基因性狀，許多基因的小效果共同形成連續差異。",
      "紅綠色盲基因在 X 染色體，不在 Y；ABO 比例則受族群等位基因頻率影響。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "孟德爾發現雜合子只表現其中一種性狀，因而區分顯性與隱性因子。" },
      B: { verdict: "incorrect", reason: "孟德爾的種子形狀與顏色因子可獨立分配，不能推論位在同一染色體。" },
      C: { verdict: "correct", reason: "身高由多個基因共同控制；各基因的等位基因仍各自依其表現關係發揮作用。" },
      D: { verdict: "incorrect", reason: "常見紅綠色盲等位基因位於 X 染色體，不是 Y 染色體。" },
      E: { verdict: "incorrect", reason: "ABO 血型比例由族群中 IA、IB、i 的頻率決定，不會由獨立分配律固定成 1：3：3：9。" }
    },
    takeaway: "多基因性狀不是沒有遺傳規則，而是許多基因的效果一起疊加。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-42": {
    encouragement: "氫鍵像可重複拉開的黏扣帶；核酸要讀取資訊時，常需要暫時拆開互補鹼基。",
    keyIdea: "DNA 複製、轉錄與轉譯都會拆開互補鹼基間的氫鍵。",
    steps: [
      "DNA 複製與轉錄前，DNA 兩股的互補鹼基需局部分開。",
      "轉譯時 mRNA 密碼子與 tRNA 反密碼子先配對，再隨核糖體移動而分開。",
      "合成雙醣與連接 DNA 片段主要形成或處理共價鍵，不是打斷鹼基氫鍵。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "DNA 複製時兩股分開，A-T、G-C 間的氫鍵被打斷。" },
      B: { verdict: "correct", reason: "轉錄時 DNA 局部解旋，模板股與另一股間的氫鍵需打開。" },
      C: { verdict: "correct", reason: "轉譯過程中密碼子與反密碼子以氫鍵配對，核糖體前進時這些氫鍵會拆開。" },
      D: { verdict: "incorrect", reason: "葡萄糖合成麥芽糖形成糖苷鍵，重點是共價鍵的縮合反應。" },
      E: { verdict: "incorrect", reason: "DNA 連接酶封接的是糖磷酸骨架中的磷酸二酯共價鍵，不是鹼基氫鍵。" }
    },
    takeaway: "鹼基配對靠氫鍵；糖磷酸骨架與糖苷鍵則是較強的共價鍵。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-43": {
    encouragement: "分類範圍越小，成員通常越相近；從一個科抽兩個樣本，差異可大於同屬或同種的樣本。",
    keyIdea: "科包含多個屬，屬又包含多個種；科內任取兩個樣本的差異通常高於屬內或種內。",
    steps: [
      "分類階層由大到小為界、門、綱、目、科、屬、種。",
      "同一科的兩個樣本可能分屬不同屬，甚至不同種。",
      "因此其平均基因距離通常大於限制在同一屬或同一物種內的比較。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "目比科範圍更大，目內樣本通常差異更高，不能說科內一定高於目。" },
      B: { verdict: "incorrect", reason: "綱包含多個目與科，範圍比科大，成員通常更不相近。" },
      C: { verdict: "incorrect", reason: "門的範圍遠大於科，門內隨機樣本的基因差異通常更大。" },
      D: { verdict: "correct", reason: "同一物種成員親緣最近，科內隨機兩樣本的差異通常高於種內。" },
      E: { verdict: "correct", reason: "一科可包含多個屬，科內樣本差異通常高於限制在同一屬內的樣本。" }
    },
    takeaway: "分類越往種靠近，親緣越近、基因差異通常越小。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-46": {
    encouragement: "觀察根尖分裂要靠染色看染色體；後期姊妹染色分體會被中節拉向兩極，常呈 V 字。",
    keyIdea: "有絲分裂後期，染色分體中節朝向兩極移動，染色體可呈 V 形。",
    steps: [
      "根尖最前端是根冠，真正分裂旺盛的是後方生長點。",
      "染色體凝縮清楚時，核膜多已消失，不能同時看見完整細胞核。",
      "後期紡錘絲拉動中節，兩臂拖在後方，常呈朝兩極的 V 形。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "根尖最前端主要是根冠；分裂細胞集中在根冠後方的分生組織，不只最前端兩層。" },
      B: { verdict: "incorrect", reason: "染色體清楚可見的分裂期，核膜已解體，不能看到完整細胞核。" },
      C: { verdict: "correct", reason: "後期中節先被拉向兩極，染色體兩臂在後方，常呈 V 形移動。" },
      D: { verdict: "incorrect", reason: "間期時間較長，所以大多數細胞不在分裂期，不會約 90% 都見到染色體。" },
      E: { verdict: "incorrect", reason: "染色體需適當染色提高對比，不能因根尖細胞較易取得就省略染色。" }
    },
    takeaway: "根冠保護、生長點分裂；分裂後期看見 V 形染色體朝兩極移動。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-47": {
    encouragement: "生態系題同時談族群、群集、物質循環與氣候；逐項用定義核對最穩。",
    keyIdea: "生產者同時固定與釋放碳；臺灣海拔升高的植被變化近似全球緯度升高。",
    steps: [
      "理想、資源無限時族群呈指數成長；受環境阻力才可能趨近平衡。",
      "群集演替通常由簡單走向較複雜，物種數不會概括為一直減少。",
      "生產者光合把碳帶入有機物，也以呼吸釋放二氧化碳。",
      "海拔與緯度升高都常伴隨溫度下降，因此生態系帶狀分布可互相比擬。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "理想且資源無限時應持續指數成長；因環境限制形成邏輯斯成長才會趨近平衡。" },
      B: { verdict: "incorrect", reason: "消長是群集組成隨時間改變，過程中物種數常增加，不是通常減少。" },
      C: { verdict: "incorrect", reason: "營養階層表示物種在食物鏈中的能量來源位置，不是含有營養成分的多寡。" },
      D: { verdict: "correct", reason: "生產者以光合作用固定二氧化碳，也以呼吸作用釋放二氧化碳，參與碳的進出。" },
      E: { verdict: "correct", reason: "臺灣海拔越高通常越冷，植被變化可近似由低緯走向高緯的全球分布。" }
    },
    takeaway: "生產者不只吸碳，也會呼吸排碳；海拔與緯度可用共同的溫度梯度比較。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-11": {
    encouragement: "水筆仔胎生苗仍來自種子，所以要找同樣經過授粉、受精並形成胚的繁殖方式。",
    keyIdea: "水筆仔與二葉松都利用種子繁殖，屬種子植物的有性生殖。",
    steps: [
      "水筆仔的胚珠受精形成種子，種子在母株上先萌發成胎生苗。",
      "二葉松毬果內也形成種子，種子由受精後的胚珠發育。",
      "組織培養、不定芽與出芽都不經配子結合；孢子也不是種子。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "山蘇以孢子繁殖，沒有形成種子，與水筆仔胎生苗不同。" },
      B: { verdict: "incorrect", reason: "蘭花組織培養由體細胞增殖，屬無性繁殖。" },
      C: { verdict: "correct", reason: "二葉松毬果中形成受精後的種子，和水筆仔胎生苗都源自種子有性生殖。" },
      D: { verdict: "incorrect", reason: "落地生根的不定芽由葉片體細胞長成，不經受精。" },
      E: { verdict: "incorrect", reason: "酵母菌出芽是母細胞直接形成子細胞，屬無性生殖。" }
    },
    takeaway: "胎生苗不是無性芽體，而是已在母株上萌發的種子。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-25": {
    encouragement: "血球抹片辨認可抓兩點：紅血球無核且中央較淡，白血球有核且核形多樣。",
    keyIdea: "不同白血球核形不同；成熟紅血球無核、中央較透光，血小板也可染色觀察。",
    steps: [
      "成熟紅血球沒有細胞核，雙凹圓盤使中央較薄、較透光。",
      "白血球有細胞核，不同類型可見圓、腎形或分葉等核形。",
      "血小板雖小且是細胞碎片，染色後仍可在抹片中觀察。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "各類白血球的核形與染色特徵有明顯差異，可用於辨認。" },
      B: { verdict: "correct", reason: "成熟白血球有核，成熟人類紅血球則失去細胞核。" },
      C: { verdict: "incorrect", reason: "紅血球中央較薄，因此通常染色較淡、較透光，不是較不透光。" },
      D: { verdict: "incorrect", reason: "血小板可被染色並在抹片中看到，只是體積比血球小。" },
      E: { verdict: "correct", reason: "不同白血球可具有圓形、分葉或腎形等多種核形。" }
    },
    takeaway: "紅血球無核中央淡；白血球有核且核形多；血小板小但看得到。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-26": {
    encouragement: "排泄不只是製造尿液，肺排二氧化碳、腎排氫離子都能一起維持酸鹼平衡。",
    keyIdea: "肺排除 CO₂，腎排除 H⁺，兩者共同調節血液 pH。",
    steps: [
      "二氧化碳在血中會影響碳酸平衡，肺調節排出量可快速影響 pH。",
      "腎小管可分泌 H⁺ 並調節碳酸氫根，長期維持酸鹼恆定。",
      "腎小球濾液含小分子胺基酸；再吸收也不只發生在近曲小管。",
      "酒精抑制 ADH，不是促進 ADH。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "肺排出 CO₂ 可調節碳酸濃度，與腎臟共同維持血液 pH。" },
      B: { verdict: "incorrect", reason: "胺基酸分子小，正常可進入腎小球濾液，之後再被腎小管回收。" },
      C: { verdict: "incorrect", reason: "再吸收主要在近曲小管，但亨利氏環、遠曲小管與集尿管也會再吸收。" },
      D: { verdict: "correct", reason: "腎小管可把 H⁺ 分泌到尿液中，協助維持血液酸鹼度。" },
      E: { verdict: "incorrect", reason: "酒精會抑制 ADH 釋放，水再吸收下降、尿量增加；選項把促進寫反了。" }
    },
    takeaway: "肺管 CO₂、腎管 H⁺ 與碳酸氫根，兩者一起守住血液 pH。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-27": {
    encouragement: "腦部功能可用分工記：小腦協調、延腦維生、大腦灰質處理感覺與思考。",
    keyIdea: "小腦協調骨骼肌，延腦調節呼吸心跳吞嚥，大腦灰質是感覺知覺的重要區域。",
    steps: [
      "小腦整合姿勢與運動資訊，讓骨骼肌動作協調。",
      "延腦含生命中樞，調節呼吸、心跳、吞嚥等自動活動。",
      "大腦灰質含大量神經元細胞體，負責高等處理；白質主要傳導。",
      "調節體溫與血壓主要是下視丘，不是視丘。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "小腦可協調骨骼肌活動並維持平衡，使動作平順。" },
      B: { verdict: "incorrect", reason: "記憶、思考、判斷主要由大腦皮質灰質處理；白質主要是神經纖維傳導。" },
      C: { verdict: "incorrect", reason: "體溫與血壓等恆定調節主要由下視丘負責；視丘偏重感覺訊息中繼。" },
      D: { verdict: "correct", reason: "延腦調節呼吸、心跳、吞嚥等維持生命的重要反射活動。" },
      E: { verdict: "correct", reason: "各感覺訊息最終在大腦皮質灰質形成有意識的感覺知覺。" }
    },
    takeaway: "小腦管協調，延腦管呼吸心跳，大腦灰質管高等處理。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-48": {
    encouragement: "洋蔥根尖是植物體細胞的有絲分裂；把植物特徵與有絲分裂特徵交集即可。",
    keyIdea: "有絲分裂時核膜可消失並形成紡錘絲；植物胞質分裂可形成細胞板。",
    steps: [
      "前期核膜逐漸消失，細胞中可暫時看不到完整核膜。",
      "紡錘絲形成並移動染色體，是有絲分裂的重要構造。",
      "植物沒有典型中心粒；根尖不進行同源染色體聯會。",
      "末期胞質分裂時，中央可形成細胞板。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "有絲分裂前期核膜解體，因此可觀察到看不到核膜的細胞。" },
      B: { verdict: "incorrect", reason: "高等植物如洋蔥通常沒有中心粒，不能看到中心粒位於兩端。" },
      C: { verdict: "incorrect", reason: "四分體由同源染色體在減數分裂Ⅰ聯會形成，根尖有絲分裂不會出現。" },
      D: { verdict: "correct", reason: "根尖有絲分裂細胞會形成紡錘絲來移動染色體。" },
      E: { verdict: "correct", reason: "植物細胞在末期進行胞質分裂時，中央會形成細胞板。" }
    },
    takeaway: "植物有紡錘絲但通常無中心粒；有絲分裂無四分體，末期有細胞板。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-50": {
    encouragement: "基因改造的核心就是把選定基因接到能送入細胞的 DNA 上，所以重組 DNA 是必經關卡。",
    keyIdea: "基改黃豆必須產生含外來目標基因的重組 DNA，再送入黃豆細胞。",
    steps: [
      "先取得想加入黃豆的目標基因。",
      "把目標基因與載體 DNA 接合，形成重組 DNA。",
      "再把重組 DNA 導入黃豆細胞並篩選成功轉殖的細胞。",
      "細胞融合、卵子分離與尋找野生種都不是所有基改流程必需。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "染色體天然重組不是製作基改黃豆每次都必須安排的步驟。" },
      B: { verdict: "incorrect", reason: "基因轉殖可直接把 DNA 導入細胞，不必融合兩個黃豆細胞。" },
      C: { verdict: "correct", reason: "必須把目標基因接入載體或受體 DNA，產生重組 DNA 才能完成基因改造。" },
      D: { verdict: "incorrect", reason: "植物基因改造可由體細胞培養再生，不必先分離卵子。" },
      E: { verdict: "incorrect", reason: "目標基因可來自不同來源，找具特殊適應力的野生黃豆並非必經步驟。" }
    },
    takeaway: "基因改造必有重組 DNA；育種選拔與細胞融合是不同技術。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-53": {
    encouragement: "臺灣水域生物題可先分淡水、河口、潮間帶與外洋，再看牠是否洄游或為外來種。",
    keyIdea: "日本鰻在海洋繁殖，幼鰻進入河川成長，生活史橫跨海洋與河流。",
    steps: [
      "日本鰻屬降海洄游魚類，在海洋產卵，幼體回到河川成長。",
      "石花菜附著近岸岩礁，不是漂在大洋由黑潮運送。",
      "牡蠣可生活潮間帶；吳郭魚是外來種。",
      "黑潮主要流經臺灣東側，不在臺灣海峽。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "日本鰻在海洋繁殖、河川成長，生活史同時利用海洋與河流生態系。" },
      B: { verdict: "incorrect", reason: "石花菜是附著於近岸岩礁的紅藻，不是大洋漂流生物。" },
      C: { verdict: "incorrect", reason: "牡蠣常生活在河口與潮間帶，能承受鹽度、乾濕變化等逆境。" },
      D: { verdict: "incorrect", reason: "黑潮主流經臺灣東部外海，不是臺灣海峽的主要洋流。" },
      E: { verdict: "incorrect", reason: "吳郭魚由外地引入臺灣，不是臺灣湖泊特有種；臺灣鯛是養殖商品名稱。" }
    },
    takeaway: "日本鰻跨海河洄游；牡蠣住河口潮間帶；吳郭魚是外來養殖魚。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-54": {
    encouragement: "族群大小不會只受單一因素控制；食物、棲地、天敵、疾病與遷移都可能一起影響。",
    keyIdea: "同域族群相遇互交機會較高；同一群集中的族群空間距離小於彼此異域的族群。",
    steps: [
      "族群密度與大小同時受資源、棲地、捕食、疾病、出生死亡及遷移影響。",
      "同域表示生活範圍重疊，個體相遇互交機率通常高於異域。",
      "群集由同一地區的多個族群組成，空間隔離小於分處異域的族群。",
      "生殖隔離強弱不能只由空間距離必然判定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "密度還受食物、水、天敵、疾病與出生死亡等影響，不只由棲地面積決定。" },
      B: { verdict: "incorrect", reason: "族群大小也受棲地、天敵、競爭、疾病與遷移影響，不只看食物。" },
      C: { verdict: "correct", reason: "同域族群空間重疊，個體相遇並互交的機率通常高於分隔的異域族群。" },
      D: { verdict: "incorrect", reason: "群集中的兩個族群可能已是不同物種，生殖隔離可很強，不能說必小於異域同種族群。" },
      E: { verdict: "correct", reason: "同一群集的族群生活在同一地區，空間隔離程度必小於分處異域的同種族群。" }
    },
    takeaway: "同域、異域談空間；能否交配談生殖隔離，兩者不能完全畫上等號。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-108-9": {
    encouragement: "細菌與人體細胞差很多，但製造蛋白質這件事兩者都要做，所以都需要核糖體。",
    keyIdea: "細菌是原核細胞，人體細胞是真核細胞；兩者都有細胞膜、細胞質與核糖體。",
    steps: [
      "細菌沒有細胞核、粒線體與高基氏體等膜狀胞器。",
      "人體細胞有細胞核和多種胞器，但一般沒有細胞壁。",
      "所有細胞都需要核糖體製造蛋白質，因此兩者細胞質中都有核糖體。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "細菌沒有細胞核與粒線體；粒線體也不位於人體細胞核內。" },
      B: { verdict: "incorrect", reason: "人體細胞有高基氏體，細菌沒有膜狀高基氏體。" },
      C: { verdict: "correct", reason: "細菌與人體細胞都需製造蛋白質，所以細胞質中都有核糖體。" },
      D: { verdict: "incorrect", reason: "細菌具有細胞膜；許多細菌另外還有細胞壁。" },
      E: { verdict: "incorrect", reason: "人體細胞確實無細胞壁，但核糖體、中心粒等構造不由膜包圍。" }
    },
    takeaway: "原核、真核共同有細胞膜、細胞質、核糖體與 DNA；差別在細胞核和膜狀胞器。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-108-11": {
    encouragement: "螺旋藻雖沒有葉綠體，仍有光合膜與色素；沒有胞器不等於不能光合作用。",
    keyIdea: "藍綠菌與綠藻都能行產氧型光合作用，光反應會產生氧。",
    steps: [
      "螺旋藻是原核藍綠菌，沒有葉綠體；小球藻是真核綠藻，有葉綠體。",
      "兩者都有葉綠素等光合系統，可利用水進行產氧型光合作用。",
      "藍綠菌細胞壁含肽聚糖，綠藻細胞壁主要成分不同。",
      "三域最高階層是細菌、古菌、真核生物，不以植物作為一個域。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "小球藻有葉綠體；螺旋藻是原核生物，沒有葉綠體。" },
      B: { verdict: "correct", reason: "兩者都能進行產氧型光合作用，光反應分解水並釋放氧。" },
      C: { verdict: "incorrect", reason: "螺旋藻細胞壁含肽聚糖，小球藻細胞壁不以肽聚糖為主要成分。" },
      D: { verdict: "incorrect", reason: "螺旋藻屬細菌域，小球藻屬真核生物域；「植物」不是三域之一。" },
      E: { verdict: "incorrect", reason: "螺旋藻與小球藻都以葉綠素 a 為重要主要光合色素，不能說螺旋藻以葉黃素為主。" }
    },
    takeaway: "藍綠菌無葉綠體也能光合；三域是細菌、古菌、真核生物。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-108-24": {
    encouragement: "碳水化合物包含醣與澱粉；看食品原料時，麵粉和蔗糖正好代表這兩類。",
    keyIdea: "麵粉主成分是澱粉，蔗糖是雙醣，兩者都屬碳水化合物。",
    steps: [
      "麵粉由穀物製成，主要儲存養分為澱粉。",
      "蔗糖由葡萄糖與果糖組成，是雙醣。",
      "棕櫚油與卵磷脂屬脂質；味精是胺基酸的鹽類。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "麵粉的主要成分是澱粉，澱粉是由葡萄糖聚合的多醣。" },
      B: { verdict: "incorrect", reason: "棕櫚油主要由三酸甘油酯等脂質組成。" },
      C: { verdict: "correct", reason: "蔗糖是由兩個單醣組成的雙醣，屬碳水化合物。" },
      D: { verdict: "incorrect", reason: "味精是麩胺酸鈉，來源為胺基酸及鈉離子，不以碳水化合物為主。" },
      E: { verdict: "incorrect", reason: "大豆卵磷脂屬磷脂，是脂質的一類。" }
    },
    takeaway: "澱粉、蔗糖是碳水化合物；油與卵磷脂是脂質；味精是胺基酸鹽。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
