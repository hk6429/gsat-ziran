(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-44": {
    encouragement: "生質能源若取代部分煤與石油，可以同時少排一些溫室氣體與造成酸雨的氣體。",
    keyIdea: "永續生質燃料可減少化石燃料的淨二氧化碳與含硫汙染排放。",
    steps: [
      "植物生長時會由大氣吸收二氧化碳；若原料能持續補種，燃燒排碳可部分回到短期碳循環。",
      "用生質能源取代部分化石燃料，有機會減緩大氣二氧化碳累積與溫室效應。",
      "生質燃料通常含硫量較煤低，取代高硫化石燃料可減少二氧化硫排放。",
      "二氧化硫減少可降低酸雨形成機會。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水質優養化主要源自水體中氮、磷養分過多，使用生質能源不會直接解決。" },
      B: { verdict: "incorrect", reason: "土石流主要和坡地、地質、豪雨與植被破壞有關，並非生質能源直接改善的問題。" },
      C: { verdict: "correct", reason: "永續生質能源取代化石燃料，有機會降低額外二氧化碳累積，減緩溫室效應。" },
      D: { verdict: "incorrect", reason: "地層下陷多由地下水超抽等原因造成，和改用生質能源沒有直接關係。" },
      E: { verdict: "correct", reason: "以低硫生質燃料取代煤等高硫燃料，可減少二氧化硫排放與酸雨。" }
    },
    takeaway: "能源替代要看排放來源：少用化石燃料可同時影響碳排與含硫空氣汙染。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-100-45": {
    encouragement: "判斷臺灣已商業使用的再生能源，先找技術成熟、已能穩定併網的風力與水力。",
    keyIdea: "風力與水力是臺灣已投入商業發電的再生能源；核能不列為再生能源。",
    steps: [
      "再生能源來自可持續補充的自然能流。",
      "臺灣已有風力機組利用風推動發電機，也長期有水力發電廠運轉。",
      "核能燃料鈾是有限礦產，不屬題目所稱再生能源。",
      "以該學年度臺灣商業應用狀況，潮汐與海流發電尚未成為成熟商轉來源。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核能雖可發電，但鈾燃料有限，未被歸入再生能源。" },
      B: { verdict: "incorrect", reason: "潮汐發電當時在臺灣尚未成為商業化常態電源。" },
      C: { verdict: "correct", reason: "臺灣已有商業運轉的風力發電機組，風能可持續補充。" },
      D: { verdict: "incorrect", reason: "海流發電仍有技術與成本挑戰，當時尚非臺灣商業使用的成熟電源。" },
      E: { verdict: "correct", reason: "臺灣已有多座水力發電設施，水循環可持續提供能源。" }
    },
    takeaway: "「可再生」和「低碳」不是完全同義；核能低碳，但不列為再生能源。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-38": {
    encouragement: "回聲時間走的是去、回兩段路；頻率變低再告訴你魚群正在遠離。",
    keyIdea: "距離d＝vt/2；回聲頻率下降是都卜勒效應，表示反射物遠離。",
    steps: [
      "50毫秒＝0.050秒，聲波在這段時間走過船到魚群再回船的往返路程。",
      "往返路程＝1520×0.050＝76公尺。",
      "船到魚群的單程距離是76/2＝38公尺。",
      "回聲頻率下降表示反射聲波產生紅移，魚群相對船隻遠離。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "距離38公尺正確，但頻率下降表示遠離，不是接近。" },
      B: { verdict: "incorrect", reason: "76公尺是聲波往返總路程，而且接近判斷也與頻率下降相反。" },
      C: { verdict: "correct", reason: "單程距離38公尺；回聲頻率降低表示魚群正在遠離船隻。" },
      D: { verdict: "incorrect", reason: "運動狀態為遠離正確，但距離漏除以2，應為38公尺。" },
      E: { verdict: "incorrect", reason: "魚群若相對靜止，回聲頻率不會因都卜勒效應而下降。" }
    },
    takeaway: "回聲測距要除以2；頻率升高看接近，頻率降低看遠離。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-39": {
    encouragement: "把鈾看核分裂、把氘看氫同位素，就能分開處理核能與化學性質。",
    keyIdea: "核能反應符合質能守恆；氘有一質子一中子，形成重水後化學性質與水相似。",
    steps: [
      "臺灣傳統核能電廠以鈾核分裂釋能，不是核融合。",
      "核反應前後少量質量差依E＝mc²轉為能量，總質能守恆。",
      "氫、氘、氚是同一元素的不同同位素，不是同素異形體。",
      "氘核有一質子、一中子；氘與氧形成重水，電子結構近似普通水，所以化學性質相似。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核能電廠主要讓鈾-235發生核分裂，不是把鈾進行核融合。" },
      B: { verdict: "correct", reason: "核反應遵守總質能守恆，質量差可依愛因斯坦E＝mc²對應釋放能量。" },
      C: { verdict: "incorrect", reason: "氫、氘、氚是質子數相同、中子數不同的同位素，不是同素異形體。" },
      D: { verdict: "incorrect", reason: "中性氘原子有1個電子，原子核含1個質子與1個中子，不是2個中子。" },
      E: { verdict: "correct", reason: "重水由氘和氧組成，電子結構與普通水相近，因此化學性質相似。" }
    },
    takeaway: "同位素改變原子核中子數，化學性質多半相近，核性質卻可能很不同。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-40": {
    encouragement: "演化順序先從最早的海洋與原核生物開始，再出現真核細胞和更複雜生命。",
    keyIdea: "生命先在海洋發展；原核的細菌、古菌早於具有細胞核的真核生物。",
    steps: [
      "早期地球海洋提供較穩定環境，生命先在海中出現與演化。",
      "之後部分生物才逐步適應陸地環境。",
      "細菌與古菌屬原核生物，沒有真正細胞核，出現得較早。",
      "真核生物的細胞核與複雜胞器是在更晚的演化階段形成。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地球生命演化先在海洋發生，之後才有生物逐步登上陸地。" },
      B: { verdict: "incorrect", reason: "域、界、種是人為分類階層，不是生物依序「生成」的演化步驟。" },
      C: { verdict: "correct", reason: "原核的細菌與古菌早於具有細胞核的真核生物。" },
      D: { verdict: "incorrect", reason: "多細胞生物先有細胞、組織，再形成器官，最後整合成器官系統。" },
      E: { verdict: "incorrect", reason: "細菌與古菌本來就是無細胞核的原核生物，不是原始細胞生成細胞核後才演化出來。" }
    },
    takeaway: "複雜生命的階層大致由細胞到組織、器官、器官系統；真核生物晚於原核生物。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-37": {
    encouragement: "同樣照明需要多少電，直接看lm/W；效率越高，所需功率越小、浪費成熱的能量通常也越少。",
    keyIdea: "相同流明下耗電量與發光效率成反比；LED效率是鎢絲燈泡20倍。",
    steps: [
      "藍光頻率高於紅光，由E＝hf可知藍光光子能量較大。",
      "同樣照明時，鎢絲燈15 lm/W比螢光燈75 lm/W效率低，需要更多電能，更多能量成為熱。",
      "螢光燈與LED效率比75：300，所以螢光燈耗電是LED的4倍，不是1/4。",
      "LED與鎢絲燈效率比300：15＝20，因此鎢絲燈耗電約LED的20倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "藍光頻率較高，單一光子能量大於紅光，不是紅光較大。" },
      B: { verdict: "incorrect", reason: "油燈直接燃燒燃料並排放二氧化碳，排放情況不會和各種用電燈具簡單相同。" },
      C: { verdict: "correct", reason: "相同照明下鎢絲燈耗電較多，且大量電能轉為熱，所以產熱多於螢光燈。" },
      D: { verdict: "incorrect", reason: "螢光燈效率只有LED的1/4，故相同照明需用LED的4倍電能。" },
      E: { verdict: "correct", reason: "效率300/15＝20，相同照明時鎢絲燈耗電約為LED的20倍。" }
    },
    takeaway: "lm/W越大越省電；相同照明的耗電倍數要用效率反過來比較。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-38": {
    encouragement: "破壞化學鍵需要較高單一光子能量；紫外線頻率比紅外線高，所以更有能力破壞鍵結。",
    keyIdea: "光子能量E＝hf，紫外線頻率高於紅外線，光子能量也較大。",
    steps: [
      "臭氧能吸收部分紫外線，保護地表生物。",
      "雷射方向集中、能量可精準控制，可用於手術與光碟讀取。",
      "光纖利用全反射導引光線前進。",
      "紅外線頻率低、光子能量小於紫外線，因此較不容易直接破壞原子間鍵結。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；臭氧層會吸收太陽紫外線中的重要部分。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；高能量密度雷射可精準切割或凝固組織。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；光碟利用雷射讀取凹坑與平面造成的反射差異。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；光纖可藉全反射限制並導引光的路徑。" },
      E: { verdict: "correct", reason: "這是錯誤敘述；紫外線光子能量較高，比紅外線更容易破壞化學鍵。" }
    },
    takeaway: "比較光的化學作用先看頻率：頻率越高，單一光子能量越大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-39": {
    encouragement: "生物發光不是浪費熱的偶然現象，而是長期演化後保留下來、能幫助生存或繁殖的適應。",
    keyIdea: "生物發光能力能提供溝通、誘餌、防禦等功能，是自然選擇下的適應結果。",
    steps: [
      "不同發光生物可發出不同波長，並非全部侷限在藍綠光。",
      "螢火蟲以化學反應產生冷光，熱量比例低，不是熱輻射。",
      "能幫助求偶、誘捕或避敵的發光特徵，會提高生存與繁殖機會。",
      "經世代自然選擇後，發光能力成為生物適應的一部分。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "許多海洋發光偏藍綠，但生物發光波長並非全部只能位於藍綠帶。" },
      B: { verdict: "incorrect", reason: "螢火蟲發的是化學冷光，不是因高溫產生的一閃一閃熱輻射。" },
      C: { verdict: "correct", reason: "發光可用於溝通、求偶、誘捕或防禦，是自然選擇形成的適應結果。" },
      D: { verdict: "incorrect", reason: "甲藻是否歸為雙鞭毛蟲取決於分類特徵，不是因為會發光而改名。" },
      E: { verdict: "incorrect", reason: "多數植物從光取得能量進行光合作用，但不會因此主動發光。" }
    },
    takeaway: "生物特徵若能提升生存或繁殖成功，便可能在演化中成為適應。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-105-40": {
    encouragement: "天體送來的光像一封有延遲的信；光譜能讀成分，但看到的不一定是天體現在的樣子。",
    keyIdea: "元素會留下特徵吸收譜線，可用來判斷恆星大氣組成。",
    steps: [
      "遙遠天體的光需要時間到達地球，所以看到的是它過去的樣貌。",
      "恆星較熱內部發出連續光，穿過較冷外層氣體時，特定波長被元素吸收。",
      "每種元素的譜線位置不同，像身分條碼。",
      "顏色主要反映表面溫度；視亮度還同時受本身光度與距離影響。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "仙女座光傳到地球需要很久，我們看到的是它過去的外貌，不是此刻狀態。" },
      B: { verdict: "correct", reason: "不同元素有特徵吸收譜線，可由恆星吸收光譜判斷氣體組成。" },
      C: { verdict: "incorrect", reason: "恆星偏紅主要表示表面溫度較低，不能單靠顏色斷定年齡較老。" },
      D: { verdict: "incorrect", reason: "絕對星等數字越小通常越亮；溫度高也不保證半徑相同，不能說一定越大。" },
      E: { verdict: "incorrect", reason: "看起來明亮可能因本身很亮或距離較近，不能只憑視亮度判斷距離。" }
    },
    takeaway: "光譜看成分與溫度；天體距離不能只靠肉眼明亮程度判斷。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-106-37": {
    encouragement: "微生物分解最在意能不能呼吸、溫度水分是否合適、酸鹼是否能運作；光線通常不是主要限制。",
    keyIdea: "微生物分解主要受氧氣、溫度、溼度與pH影響，光照度影響相對最小。",
    steps: [
      "曝氣度決定好氧分解者可取得多少氧氣。",
      "溫度影響酵素反應速率，溼度影響微生物生存與物質運送。",
      "pH值會影響酵素與微生物族群。",
      "長毛象遺體的微生物分解不以光合作用為主，因此光照度影響最小。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "分解者主要靠有機物取得能量，不需光合作用，所以光照度相對影響最小。" },
      B: { verdict: "incorrect", reason: "曝氣度改變氧氣供應，會明顯影響好氧微生物分解。" },
      C: { verdict: "incorrect", reason: "溫度直接影響微生物酵素活性與繁殖速率。" },
      D: { verdict: "incorrect", reason: "水是代謝與物質運輸所需，溼度太低會強烈抑制分解。" },
      E: { verdict: "incorrect", reason: "pH會影響酵素構形與微生物種類，因此會影響分解。" }
    },
    takeaway: "分解者不是植物；判斷分解快慢先看溫度、水分、氧氣與酸鹼。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-38": {
    encouragement: "五個反應都有二氧化碳出現，但前四個本身就是常見產碳過程；最後一個的主要目的其實是煉鐵。",
    keyIdea: "氧化鐵被一氧化碳還原時，主要反應功能是金屬冶煉，二氧化碳只是伴隨產物。",
    steps: [
      "碳酸鈣熱分解是工業製石灰並放出二氧化碳。",
      "酒精發酵、葡萄糖呼吸與甲烷燃燒都是常見二氧化碳來源。",
      "Fe₂O₃與CO反應時，CO的工作是奪取氧，使氧化鐵還原成鐵。",
      "此反應的主要分類與目的為煉鐵的氧化還原，不是主要用來產生二氧化碳。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碳酸鈣熱分解會直接釋放CO₂，是水泥、石灰製程的重要排放來源。" },
      B: { verdict: "incorrect", reason: "酒精發酵會把葡萄糖轉成乙醇與CO₂，是典型產生二氧化碳的反應。" },
      C: { verdict: "incorrect", reason: "有氧呼吸會大量把葡萄糖中的碳轉成CO₂。" },
      D: { verdict: "incorrect", reason: "甲烷完全燃燒的主要含碳產物就是CO₂。" },
      E: { verdict: "correct", reason: "此反應主要是以CO還原氧化鐵來煉鐵，CO₂為還原過程的伴隨產物。" }
    },
    takeaway: "判斷「主要反應」不只看生成物，還要看反應的核心用途與物質轉換。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-106-40": {
    encouragement: "暖化、聖嬰、懸浮微粒與臭氧洞常被混在一起；逐一分清原因，就能避免概念打結。",
    keyIdea: "水氣與氟氯碳化物也是溫室氣體；減少畜牧可降低甲烷與相關碳排。",
    steps: [
      "聖嬰是海氣系統自然變動，不是全球暖化直接造成。",
      "燃煤排CO₂會增暖，但部分懸浮微粒會反射陽光而產生冷卻作用。",
      "牛隻消化會排甲烷，飼養與運輸也伴隨二氧化碳排放。",
      "臭氧洞主要由氟氯碳化物破壞臭氧造成，和全球暖化不是同一問題。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聖嬰是熱帶太平洋海氣耦合的週期變動，不能簡化說由全球暖化造成。" },
      B: { verdict: "incorrect", reason: "CO₂會增暖，但部分懸浮微粒能反射太陽光而冷卻，並非兩者都一定增溫。" },
      C: { verdict: "correct", reason: "減少牛肉需求可降低牛隻甲烷排放，以及畜牧生產鏈的二氧化碳排放。" },
      D: { verdict: "correct", reason: "水氣和氟氯碳化物都能吸收地表紅外線，也屬溫室氣體。" },
      E: { verdict: "incorrect", reason: "臭氧洞不是全球暖化造成；蒙特婁議定書主要處理破壞臭氧層物質。" }
    },
    takeaway: "同一物質可能牽涉不同環境議題，但暖化、空汙與臭氧洞仍要分開找因果。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-37": {
    encouragement: "核反應式也像化學式要守恆，只要分別守住質量數與原子序，就能解出所有代號。",
    keyIdea: "中子為ⁱ₀n，所以a＝0、b＝1；硼-11再分成一個鋰-7與一個α粒子。",
    steps: [
      "中子原子序為0、質量數為1，所以a＝0、b＝1。",
      "¹⁰₅B吸收中子成為¹¹₅B，因此c＝5。",
      "第二式需滿足11＝7x＋4y與5＝3x＋2y。",
      "解得x＝1、y＝1，所以只有乙與丁正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲錯誤：中子不帶電，原子序a應為0；乙b＝1正確。" },
      B: { verdict: "incorrect", reason: "乙正確，但丙錯誤；¹¹B的原子序c仍為5，不是4。" },
      C: { verdict: "incorrect", reason: "丁x＝1正確，但丙c＝4錯誤。" },
      D: { verdict: "incorrect", reason: "丁正確，但甲a＝1錯誤；中子的a應為0。" },
      E: { verdict: "correct", reason: "中子質量數b＝1，且反應守恆解得鋰-7係數x＝1，所以乙丁正確。" }
    },
    takeaway: "核反應配平要同時守恆上方質量數與下方原子序。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-38": {
    encouragement: "日本位於中緯度西風帶，空氣主要由西往東，所以福島東側海域較容易先接到輻射塵。",
    keyIdea: "中緯度盛行西風使福島上空汙染向東輸送，東方濃度通常高於西岸。",
    steps: [
      "福島位於北半球中緯度，對流層中高空主要受西風帶影響。",
      "西風表示空氣大致由西向東移動。",
      "輻射塵進入西風帶後，主要被帶往福島東方太平洋。",
      "相同距離比較時，下風處東方海域濃度通常高於上風處日本西岸。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "中緯度西風主要把輻射塵向東輸送，不是因科氏力直接飄向南方。" },
      B: { verdict: "correct", reason: "福島位於西風帶，東方是下風處，相同距離下輻射塵濃度通常較高。" },
      C: { verdict: "incorrect", reason: "黑潮在日本附近主要沿岸向東北，但不能概括所有輻射汙染都只隨黑潮往北。" },
      D: { verdict: "incorrect", reason: "大氣與海洋傳輸路徑、時間不同，不能斷言臺灣東部一定比美國西岸先觀測到。" },
      E: { verdict: "incorrect", reason: "福島所在緯度並非形成深水下沉的主要區域，表層汙染也不會必然立即進入全球溫鹽環流。" }
    },
    takeaway: "判斷空氣汙染擴散，先找上風與下風；日本中緯度上空主要由西風帶向東輸送。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-107-39": {
    encouragement: "兩個原子核都帶正電，靠近時會互相排斥；高溫就是讓它們跑得夠快，闖過這道能量門檻。",
    keyIdea: "高溫提高氘、氚原子核動能，使其有機會克服庫侖排斥並靠近到強力作用範圍。",
    steps: [
      "氘核與氚核都帶正電，遠距離先受到靜電排斥。",
      "溫度非常高時，粒子平均動能大幅增加。",
      "部分原子核碰撞能量足以克服庫侖位壘，靠得非常近。",
      "進入極短距離後，強力能將核子結合，發生核融合。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "高溫提高核動能，使氘、氚核能克服正電核間庫侖排斥並接近融合。" },
      B: { verdict: "incorrect", reason: "高溫主要增加粒子動能，不是把核內夸克強作用本身調強。" },
      C: { verdict: "incorrect", reason: "高溫電漿中電子與原子核分離，不是電子熔入原子核後才融合。" },
      D: { verdict: "incorrect", reason: "核融合的靠近條件不是弱作用增強；關鍵是克服庫侖排斥後強力接手。" },
      E: { verdict: "incorrect", reason: "原子核不會像日常物質熔成液態再自然混合，這是量子尺度核反應。" }
    },
    takeaway: "核融合兩段式：高動能克服電斥力，靠近後由強力完成結合。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-50": {
    encouragement: "電子要跨越能隙，單一光子的能量必須夠大；增加光子數量不能補救每顆光子能量不足。",
    keyIdea: "價帶能量低於導電帶；光子能量E＝hf，只能靠提高頻率增加單一光子能量。",
    steps: [
      "導電帶位於價帶上方，電子從價帶躍遷到導電帶需要吸收至少等於能隙的能量。",
      "不是任何供能都一定足夠，能量低於能隙時仍無法躍遷。",
      "改變入射角、照光面積或強度主要改變入射光子數，不改變單一光子能量。",
      "提高頻率f會依E＝hf增加每顆光子能量，可能讓原本無法躍遷的電子成功跨越能隙。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若提供的能量低於能隙，電子仍不能從價帶跳到導電帶，並非供能就必可。" },
      B: { verdict: "correct", reason: "價帶位於較低能量，導電帶位於較高能量，中間相差能隙。" },
      C: { verdict: "incorrect", reason: "光子能量由頻率決定，改變入射角不會改變頻率與單一光子能量。" },
      D: { verdict: "incorrect", reason: "增加強度與面積只增加光子數；若每顆光子能量不足，電子仍無法跨越能隙。" },
      E: { verdict: "correct", reason: "提高光頻率會增加E＝hf，使原本能量不足的光子可能達到能隙門檻。" }
    },
    takeaway: "跨能隙看的是每顆光子夠不夠力，不是光子總共有多少顆。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-40": {
    encouragement: "題目已說雲內總液態水量相近；船跡變亮的關鍵不是水變多，而是同樣的水分成更多小水滴。",
    keyIdea: "同體積水分成更多小雲滴會增加總表面積，提高雲的陽光反射率。",
    steps: [
      "船舶排出小顆粒，提供水氣凝結的凝結核。",
      "在液態水含量相同下，凝結核增加會形成數量更多、尺寸更小的雲滴。",
      "小水滴的表面積與體積比A/V較大，全部雲滴總表面積增加。",
      "更多光被散射、反射回太空，所以船跡雲在可見光影像中更亮。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題目已說液態水含量在空間上近似不變，變亮不是因船排水氣讓總水量增加。" },
      B: { verdict: "incorrect", reason: "船舶顆粒使雲滴數量增多、尺寸變小，不是形成更多大雲滴。" },
      C: { verdict: "correct", reason: "更多小雲滴讓同樣水量具有更大的總表面積，增強陽光反射。" },
      D: { verdict: "incorrect", reason: "題目談的是整群雲滴總表面積；不能說單一小滴反射量一定大於單一大滴。" },
      E: { verdict: "correct", reason: "人為小顆粒增加凝結核與小雲滴數，可提高雲的陽光反射能力。" }
    },
    takeaway: "同樣水量切得越細，總表面積越大；雲滴越多越小，雲通常越亮。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-108-42": {
    encouragement: "氮循環只要記三條路：固氮把N₂帶進生物圈、硝化把銨氧化、脫氮把硝酸鹽送回N₂。",
    keyIdea: "藍綠菌可固氮；硝化將NH₄⁺氧化為NO₂⁻；脫氮還原含氮化合物產生N₂。",
    steps: [
      "海洋中的部分藍綠菌具有固氮能力，可把N₂轉成可利用含氮物。",
      "氨化作用是分解有機氮形成氨或銨，不是把N₂變NH₃。",
      "硝化細菌以氧化反應把NH₄⁺轉成NO₂⁻，再可轉成NO₃⁻。",
      "脫氮細菌把硝酸鹽等還原成N₂，使氮回到大氣。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "根瘤菌生活在豆科根瘤並進行固氮；菌根是植物根與真菌共生，兩者不能混稱。" },
      B: { verdict: "correct", reason: "海洋中有能固氮的藍綠菌，可將大氣或水中的N₂轉成生物可用含氮物。" },
      C: { verdict: "incorrect", reason: "N₂轉NH₃是固氮；氨化是有機含氮物分解成氨或銨。" },
      D: { verdict: "correct", reason: "硝化作用第一階段可將NH₄⁺氧化為NO₂⁻。" },
      E: { verdict: "correct", reason: "脫氮細菌還原硝酸鹽等，產生N₂回到大氣，完成循環。" }
    },
    takeaway: "固氮：N₂進來；硝化：銨被氧化；脫氮：N₂回大氣。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-109-37": {
    encouragement: "神經衝動不是整條軸突同時改變，而是膜電位像接力一樣沿軸突一段段傳下去。",
    keyIdea: "動作電位是單一細胞膜局部電位的連續變化，會沿軸突傳播。",
    steps: [
      "靜止時細胞膜內外離子分布不同，因此兩側電位不同。",
      "神經元受刺激後，局部離子通道開啟，膜電位先在一小段改變。",
      "這段變化再觸發旁邊膜區，讓電位變化沿軸突陸續前進。",
      "動作電位發生在細胞膜上，不是只發生在兩個神經細胞之間。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "靜止膜電位正是由膜兩側離子與電荷分布不均造成。" },
      B: { verdict: "incorrect", reason: "神經訊息傳遞是膜電位變化的傳播，不能簡化成固定電流由細胞本體一路流向軸突。" },
      C: { verdict: "correct", reason: "動作電位會使軸突各相鄰區段的膜電位依序改變，形成神經衝動傳播。" },
      D: { verdict: "incorrect", reason: "動作電位發生在單一神經細胞的細胞膜；細胞間傳遞則經突觸。" },
      E: { verdict: "incorrect", reason: "肌肉細胞等其他可興奮細胞也能產生動作電位，不只神經元。" }
    },
    takeaway: "神經衝動是膜電位的接力傳播，不是電荷從頭到尾一次跑完整條軸突。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-51": {
    encouragement: "人體搬椅子不可能百分之百有效率；化學能除了做功，也一定有一部分變成熱。",
    keyIdea: "食物化學能經代謝供肌肉收縮，再增加椅子重力位能；能量轉換同時產熱。",
    steps: [
      "食物中的化學能經細胞代謝轉成可供肌肉使用的化學能。",
      "肌肉收縮對椅子作功，把椅子抬高並增加重力位能。",
      "人體代謝與肌肉收縮效率不是100%。",
      "一部分化學能會成為體熱，因此不能說全部都轉成肌肉作功能量。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是合理敘述；食物化學能經代謝提供肌肉收縮所需能量。" },
      B: { verdict: "incorrect", reason: "這是合理敘述；肌肉對椅子向上作功，使椅子重力位能增加。" },
      C: { verdict: "correct", reason: "這是錯誤敘述；能量轉換有效率限制，部分食物化學能成為熱，不會全部進入肌肉作功。" },
      D: { verdict: "incorrect", reason: "這是合理敘述；代謝與肌肉收縮過程都會產生熱能。" }
    },
    takeaway: "生物能量轉換也遵守能量守恆，但有用功只占一部分，其餘常轉成熱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
