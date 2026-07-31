(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-87-24": {
    encouragement: "鏡面大不一定贏；若先避開大氣干擾，小一點的太空望遠鏡也能看得更清楚。",
    keyIdea: "太空望遠鏡位於大氣層外，可避開大氣擾動、吸收與散射造成的影像干擾。",
    steps: ["地面星光穿過大氣時會被擾動與散射，影像容易模糊。", "赫伯望遠鏡在太空中避開這些影響，因此能有效觀測銀河中心。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "太空觀測可避開大氣擾動與散射，得到較清楚的影像。" },
      B: { verdict: "incorrect", reason: "部分紅外線波段可在乾燥高山地面觀測，不是只有太空才能做。" },
      C: { verdict: "incorrect", reason: "北半球許多地區仍可在適當季節與時段觀測銀河中心方向。" },
      D: { verdict: "incorrect", reason: "離地六百公里相較銀河中心的巨大距離幾乎可忽略，不是優勢來源。" }
    },
    takeaway: "太空望遠鏡的關鍵優勢是避開大氣，不是明顯靠近天體。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-25": {
    encouragement: "恆星像燃料消耗者：質量越大雖燃料多，卻燒得快得更多。",
    keyIdea: "大質量恆星核心溫度高、核融合速率快，壽命反而遠短於太陽。",
    steps: ["手槍星質量很大，核心重力壓縮強，核融合反應非常快速。", "它的光度達太陽一千萬倍，燃料消耗遠快於太陽，因此壽命極短。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "質量增加不會讓壽命按比例增加，因核融合速率增長得更快。" },
      B: { verdict: "incorrect", reason: "壽命不是單純用質量的倒數估算，還要考慮光度與燃料消耗率。" },
      C: { verdict: "incorrect", reason: "恆星壽命與質量高度相關，大質量星通常壽命短。" },
      D: { verdict: "correct", reason: "小慧指出質量越大、壽命越短，符合大質量恆星快速耗盡燃料的原理。" }
    },
    takeaway: "大質量恆星雖燃料多，但燃燒速度更驚人，所以壽命更短。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-26": {
    encouragement: "物體越冷，主要輻射的波長越長；3 K 宇宙背景已落在很長的波段。",
    keyIdea: "宇宙微波背景溫度約 3 K，主要輻射位於微波，屬無線電波範圍。",
    steps: ["太陽高溫主要放可見光，人體較冷主要放紅外線。", "宇宙背景更冷，主要波長更長，應用無線電波望遠鏡觀測。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "伽瑪射線波長極短、能量高，不符合 3 K 低溫熱輻射。" },
      B: { verdict: "incorrect", reason: "X 光也是高能短波輻射，不是宇宙微波背景的主要波段。" },
      C: { verdict: "incorrect", reason: "紫外線波長比可見光短，對應更高能量，不符合 3 K。" },
      D: { verdict: "incorrect", reason: "可見光對應數千 K 等較高溫物體，3 K 太低。" },
      E: { verdict: "correct", reason: "3 K 背景主要是微波，微波屬於無線電波。" }
    },
    takeaway: "溫度越低，熱輻射峰值波長越長；3 K 背景要用微波觀測。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-27": {
    encouragement: "光譜紅移就像救護車聲音變低，表示光源正在遠離。",
    keyIdea: "天體遠離時，光波被拉長，光譜線向較長波長的紅端移動。",
    steps: ["比較星系光譜線與實驗室標準位置。", "若線移向紅端，代表波長變長，星系正遠離觀測者。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "靜止光源的特徵光譜線不會出現系統性都卜勒紅移。" },
      B: { verdict: "incorrect", reason: "向我們接近會使波長縮短，呈藍移。" },
      C: { verdict: "correct", reason: "紅移表示光波被拉長，星系正離我們遠去。" },
      D: { verdict: "incorrect", reason: "紅移與遠離有明確規律，不是無常規可尋。" }
    },
    takeaway: "紅移遠離、藍移接近。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-29": {
    encouragement: "海底擴張最有力的證據應該直接記錄海床從中洋脊向兩側生成。",
    keyIdea: "中洋脊兩側對稱的地磁條帶，記錄新海洋地殼在中洋脊形成後向兩側移動。",
    steps: ["岩漿在中洋脊冷卻時會記錄當時地磁方向。", "地磁反轉形成交替條帶，若兩側對稱，表示海床由中軸向外擴張。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "相同陸相化石支持大陸曾相連，但不如海底磁條帶直接證明海床擴張。" },
      B: { verdict: "correct", reason: "中洋脊兩側對稱磁條帶直接記錄海洋地殼同步生成與向外移動。" },
      C: { verdict: "incorrect", reason: "海岸線契合支持大陸漂移的想法，但不是海床生成的直接紀錄。" },
      D: { verdict: "incorrect", reason: "各洲相同年代煤層可反映古氣候，不能直接證明海底擴張。" }
    },
    takeaway: "中洋脊對稱地磁條帶，是海底擴張的直接證據。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-15": {
    encouragement: "儲油層要有空間存油，也要讓油能流動；砂岩常同時具備這兩點。",
    keyIdea: "砂岩顆粒間常有連通孔隙，孔隙率與滲透率較佳，適合作儲油層。",
    steps: ["孔隙率決定能儲存多少流體。", "滲透率決定孔隙是否連通、油氣能否流動；砂岩常兩者皆佳。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "砂岩顆粒間常有連通孔隙，是常見油氣儲集岩。" },
      B: { verdict: "incorrect", reason: "頁岩孔隙細且滲透率低，較常作油母岩或封閉層。" },
      C: { verdict: "incorrect", reason: "未破裂花岡岩結晶緊密，原生孔隙與滲透率低。" },
      D: { verdict: "incorrect", reason: "大理岩再結晶後通常緻密，並非典型重要儲油層。" },
      E: { verdict: "incorrect", reason: "玄武岩多為緻密火成岩，除非裂隙發達，否則不是典型儲集岩。" }
    },
    takeaway: "油氣儲層要有孔隙可存、孔道可通；砂岩最典型。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-17": {
    encouragement: "標準化石要幫忙精準定年，所以要「活得短、分布廣、又好認」。",
    keyIdea: "標準化石生存年代要短、演化快、分布廣且容易辨認，才能縮小地層年代範圍。",
    steps: ["生存期短可讓化石對應較窄的年代。", "分布廣、數量多且特徵明顯，才容易跨地區比對。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "演化快會使不同年代形態有明顯差異，有利定年。" },
      B: { verdict: "correct", reason: "生存期限長會跨越太多年代，難以精準判定地層時間，因此不是理想特性。" },
      C: { verdict: "incorrect", reason: "分布範圍廣有利不同地區地層對比。" },
      D: { verdict: "incorrect", reason: "個體數多使化石較容易被找到。" },
      E: { verdict: "incorrect", reason: "形態明顯、容易鑑定可降低誤判。" }
    },
    takeaway: "標準化石的口訣：時短、地廣、量多、好認。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-19": {
    encouragement: "兩顆造父變星週期相同，代表本身光度相同；五個星等差正好對應十倍距離。",
    keyIdea: "相同絕對星等時，視星等相差 5，距離比為 10。",
    steps: ["甲、乙週期相同，所以絕對星等 M 相同。", "公式相減得視星等差 14－9＝5＝5 log(d乙/d甲)，所以距離比為 10。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙視星等較大、看起來較暗，在光度相同下應更遠，不會只有甲的 0.1 倍。" },
      B: { verdict: "incorrect", reason: "距離相同且光度相同時視星等應相同，但兩者差 5 星等。" },
      C: { verdict: "correct", reason: "5＝5 log 距離比，所以 log 距離比＝1，乙距離是甲的 10 倍。" },
      D: { verdict: "incorrect", reason: "距離 100 倍會使視星等相差 10，不是 5。" },
      E: { verdict: "incorrect", reason: "距離 1000 倍會使視星等差更大，達 15 星等。" }
    },
    takeaway: "同光度恆星相差 5 星等，距離相差 10 倍。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-20": {
    encouragement: "氣壓梯度力就像球從高處往低處滾，方向由高壓直指低壓。",
    keyIdea: "氣壓梯度力垂直等壓線，方向由高壓指向低壓。",
    steps: ["等壓線上各點氣壓相同，沿線移動沒有氣壓差。", "最大氣壓變化在法線方向，因此力垂直等壓線由高往低。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "氣壓梯度力沿等壓線法線，由高壓指向低壓。" },
      B: { verdict: "incorrect", reason: "方向顛倒；大氣受力由高壓往低壓。" },
      C: { verdict: "incorrect", reason: "純氣壓梯度力應垂直等壓線，不是固定夾 45 度。" },
      D: { verdict: "incorrect", reason: "既非 45 度，也不會由低壓指向高壓。" },
      E: { verdict: "incorrect", reason: "平行等壓線方向氣壓不變，不會產生氣壓梯度力。" }
    },
    takeaway: "氣壓梯度力永遠垂直等壓線，由高壓指向低壓。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-23": {
    encouragement: "題目已用秒差距表示距離，只要按比例換成光年即可。",
    keyIdea: "1 秒差距約為 3.26 光年；24 秒差距約為 24 × 3.26＝78 光年。",
    steps: ["由題目 8 秒差距約 26 光年，可知每秒差距約 3.25 光年。", "24 是 8 的 3 倍，所以距離也是 26 的 3 倍，約 78 光年。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "8 光年小於題給 8 秒差距的 26 光年，不符合比例。" },
      B: { verdict: "incorrect", reason: "秒差距和光年不是一比一，24 秒差距不等於 24 光年。" },
      C: { verdict: "incorrect", reason: "26 光年對應題給的 8 秒差距，24 秒差距應更遠。" },
      D: { verdict: "incorrect", reason: "50 光年不是由 24÷8 的三倍比例算得。" },
      E: { verdict: "correct", reason: "24 秒差距是 8 秒差距的三倍，距離約 26×3＝78 光年。" }
    },
    takeaway: "秒差距也是距離單位；1 秒差距約 3.26 光年。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-24": {
    encouragement: "臭氧層名稱已提示臭氧集中區；它主要位在對流層上方的平流層。",
    keyIdea: "平流層臭氧吸收太陽短波紫外線，保護地表生物。",
    steps: ["對流層之上是平流層。", "臭氧在平流層中濃度相對較高，能吸收大量有害紫外線。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "對流層也有少量臭氧，但保護地球的臭氧層不集中在此。" },
      B: { verdict: "correct", reason: "臭氧層主要位於平流層，負責吸收大量紫外線。" },
      C: { verdict: "incorrect", reason: "增溫層高度遠高於臭氧主要集中的區域。" },
      D: { verdict: "incorrect", reason: "中氣層位於平流層上方，不是臭氧層主要位置。" }
    },
    takeaway: "保護生物的臭氧層主要在平流層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-25": {
    encouragement: "臭氧變少後，紫外線增加；紫外線最直接的危險是傷害遺傳物質。",
    keyIdea: "較多紫外線到達地表會損傷 DNA，提高突變與皮膚癌等風險。",
    steps: ["臭氧層吸收紫外線，破洞使更多紫外線穿透。", "紫外線可破壞 DNA 結構，使細胞突變機率增加。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "臭氧減少會讓紫外線傷害增加，不是降低。" },
      B: { verdict: "correct", reason: "紫外線可損傷 DNA，使突變機會增加。" },
      C: { verdict: "incorrect", reason: "DNA 損傷可能增加癌症風險，不會抑制癌症。" },
      D: { verdict: "incorrect", reason: "過量紫外線會傷害生物組織，不是普遍促進生長。" }
    },
    takeaway: "臭氧少、紫外線多、DNA 突變風險高。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-26": {
    encouragement: "高空臭氧有保護作用，但含氯、氟的人造氣體會破壞這層保護網。",
    keyIdea: "氟氯碳化物在高空釋出含氯物質，可催化分解臭氧，是臭氧層破壞的重要人為原因。",
    steps: ["氟氯碳化物可長時間留在大氣並到達平流層。", "紫外線使其釋出氯，氯能反覆催化破壞臭氧分子。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "臭氧帶有特殊氣味，不是無色無味的普通氧氣。" },
      B: { verdict: "incorrect", reason: "臭氧 O₃ 和氧氣 O₂ 是同素異形體，不是氧的同位素。" },
      C: { verdict: "incorrect", reason: "臭氧吸收紫外線造成平流層增溫，不能等同溫室氣體吸收地表紅外線的溫室效應。" },
      D: { verdict: "correct", reason: "大量使用氟氯碳化物會釋出破壞臭氧的氯，是臭氧層耗損主因之一。" }
    },
    takeaway: "O₂ 與 O₃ 是同素異形體；氟氯碳化物會破壞平流層臭氧。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-63": {
    encouragement: "溫室氣體要能吸收地表放出的紅外線；二氧化碳和水氣都是重要成員。",
    keyIdea: "二氧化碳與水氣會吸收地表紅外線並向各方向再放射，形成天然保溫作用。",
    steps: ["地表吸收太陽短波後，主要放出紅外線長波。", "二氧化碳與水氣能吸收部分紅外線，使近地面保留較多熱能。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "二氧化碳能吸收特定紅外線波段，是重要溫室氣體。" },
      B: { verdict: "incorrect", reason: "二氧化氮並非題目基礎分類中的主要天然溫室成分。" },
      C: { verdict: "incorrect", reason: "臭氧可影響輻射，但本題要求兩項主要吸收地面輻射的成分，官方配對不含臭氧。" },
      D: { verdict: "incorrect", reason: "氮氣占大氣最多，但幾乎不吸收地表主要紅外線波段。" },
      E: { verdict: "correct", reason: "水氣是大氣中非常重要且含量可變的溫室氣體。" }
    },
    takeaway: "大氣最多的氮氣不是主要溫室氣體；二氧化碳與水氣才會明顯吸收地表紅外線。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-74": {
    encouragement: "恆星顏色就是溫度尺：偏藍最熱、偏紅最冷。",
    keyIdea: "熱輻射溫度越高，主要放光波長越短，因此藍星比黃星熱，黃星又比紅星熱。",
    steps: ["藍光波長比黃光、紅光短，對應較高表面溫度。", "所以由高到低應排藍、黃、紅。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "紅星是三者中最冷，不應排最前。" },
      B: { verdict: "incorrect", reason: "紅色不會比藍色恆星更熱。" },
      C: { verdict: "incorrect", reason: "藍星應是最高溫，不應排最後。" },
      D: { verdict: "incorrect", reason: "藍星比黃星熱，順序前兩項顛倒。" },
      E: { verdict: "incorrect", reason: "紅星比黃星冷，後兩項顛倒。" },
      F: { verdict: "correct", reason: "藍色最高溫、黃色居中、紅色最低溫。" }
    },
    takeaway: "恆星溫度由高到低：藍、黃、紅。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-14": {
    encouragement: "颱風豪雨若碰上農曆十六、十七的大潮滿潮，陸地排水會更加困難。",
    keyIdea: "滿月前後潮差大；颱風風暴潮若和滿潮疊加，易造成海水倒灌與沿海淹水。",
    steps: ["農曆十六、十七接近滿月大潮，滿潮水位較高。", "颱風低氣壓與強風又把海水推向岸邊，兩者疊加加重災情。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "沿岸上升流會影響海溫與營養鹽，不會直接造成海水倒灌。" },
      B: { verdict: "correct", reason: "大潮滿潮水位高，再疊加颱風風暴潮，最容易使海水倒灌。" },
      C: { verdict: "incorrect", reason: "黑潮流量不是造成臺灣西部或全臺沿岸淹水的主要因素。" },
      D: { verdict: "incorrect", reason: "短時間海水受颱風增溫造成的熱膨脹遠小於風暴潮與滿潮作用。" }
    },
    takeaway: "颱風加大潮滿潮，是沿海淹水與海水倒灌的危險組合。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-23": {
    encouragement: "研究久遠地質事件要相信現在可觀察的作用也曾在過去運作，這就是均變說。",
    keyIdea: "赫頓的均變說主張現在是了解過去的鑰匙，可用今日地質作用推論古代事件。",
    steps: ["觀察現今河流、火山、侵蝕與沉積如何改變地表。", "假設相同自然規律在古代也運作，再由岩層反推古生代事件。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "韋格納的大陸漂移說解釋大陸移動，不是所有古代地質推論的基本原則。" },
      B: { verdict: "incorrect", reason: "海斯的海底擴張說解釋海洋地殼生成，範圍較特定。" },
      C: { verdict: "incorrect", reason: "赫伯研究宇宙膨脹，與古生代地質推論無關。" },
      D: { verdict: "correct", reason: "赫頓提出均變思想，以現今作用解讀古代地質紀錄。" },
      E: { verdict: "incorrect", reason: "達爾文天擇說解釋生物演化，不是地質作用推古的核心學說。" }
    },
    takeaway: "均變說：以今日看得到的自然作用，解讀過去留下的地質紀錄。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-65": {
    encouragement: "月球總以同一面向地球，不代表地球也不轉；站在月球會看到地球有盈虧。",
    keyIdea: "月球同步自轉使近地面向地球；從月球看地球會有相位變化，而月球目前沒有地球式板塊運動。",
    steps: ["地球會自轉，所以不會永遠同一面向月球。", "日光照亮地球的角度會變，月面觀測者可見地球盈虧；月球內部活動弱，無板塊運動。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地球自轉約一天一周，會讓不同地區輪流面向月球。" },
      B: { verdict: "correct", reason: "太陽、地球、月球相對位置改變，從月球看地球也會有盈虧相位。" },
      C: { verdict: "incorrect", reason: "月海是玄武岩平原，名稱中的海不代表有大量液態水。" },
      D: { verdict: "incorrect", reason: "月海正是由古代玄武岩質熔岩填充形成，月球可找到玄武岩。" },
      E: { verdict: "correct", reason: "月球沒有像地球一樣持續運作的板塊構造系統。" }
    },
    takeaway: "月海不是海水；月球有玄武岩、無現代板塊運動，從月球也能看見地球盈虧。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-4": {
    encouragement: "這題是在讀三人的話，不需要替他們補新理論；逐句比對即可。",
    keyIdea: "甲只說由公式外推會產生矛盾，並未明確斷言一定是哪一條理論錯；乙、丙對超光速的看法相反。",
    steps: ["甲指出赫伯定律外推可能與相對論衝突，但只說『違反』，未明說赫伯定律一定錯。", "乙說觀測速度永遠小於光速；丙卻認為星系可超光速，兩人論點不一致。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲指出表面矛盾，卻沒有明確判定應捨棄赫伯定律或哪個前提。" },
      B: { verdict: "incorrect", reason: "乙明說觀測到的星系奔離速度永遠比光速小。" },
      C: { verdict: "incorrect", reason: "丙主張星系不是物質，因此認為奔離速度可以比光速快。" },
      D: { verdict: "incorrect", reason: "乙認為不能超光速，丙認為可以，兩者不一致。" }
    },
    takeaway: "論證題先忠實整理每個人的原話，再判斷彼此是否一致。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-7": {
    encouragement: "大氣分層題先抓住對流層有水氣、雲雨與溫室氣體。",
    keyIdea: "對流層含大部分水氣，也含二氧化碳；兩者可吸收地表紅外線並形成保溫作用。",
    steps: ["大氣由地面向上分層，不是因陽光先照到哪裡就形成哪一層。", "對流層集中了水氣與天氣現象，水氣和二氧化碳都是溫室氣體。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "最外層不是對流層；對流層位於最靠近地面的地方。" },
      B: { verdict: "incorrect", reason: "紫外線會被氧氣與臭氧大量吸收，抵達地面時已減少。" },
      C: { verdict: "correct", reason: "水氣與二氧化碳可吸收地表紅外線，具有天然保溫作用。" },
      D: { verdict: "incorrect", reason: "水循環與雲雨主要發生在整個對流層，不只在對流層頂交界。" }
    },
    takeaway: "對流層有水氣、雲雨與主要天氣，也是溫室作用重要區域。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-9": {
    encouragement: "秋冬颱風影響北部、東北部時，常要注意颱風環流和東北季風的共伴。",
    keyIdea: "象神颱風與東北季風交互作用，為臺灣北部與東北部帶來持續暖濕氣流與地形抬升豪雨。",
    steps: ["十月底東北季風已可能影響臺灣。", "東北季風和颱風外圍水氣共伴，氣流迎向北部、東北部山區而抬升降雨。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "西風噴流在高空，並非此次臺灣迎風面豪雨的主要近地面共伴系統。" },
      B: { verdict: "incorrect", reason: "西南氣流較常加重臺灣中南部迎風面降雨，不符此題北部、東北部重點。" },
      C: { verdict: "incorrect", reason: "東南信風不是臺灣秋季此次颱風豪雨的主要交互作用。" },
      D: { verdict: "correct", reason: "東北季風與颱風水氣共伴，配合北部、東北部地形造成豪雨。" }
    },
    takeaway: "秋颱北東部豪雨，常見颱風外圍水氣加東北季風共伴。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-11": {
    encouragement: "古文中的「斗牛」不是地面景物，而是古人劃分天空的星宿名稱。",
    keyIdea: "斗宿與牛宿都屬中國古代二十八星宿，用來描述月亮所在的天空區域。",
    steps: ["上下文在描述月亮升起與天空位置。", "因此斗、牛是天文星宿名稱，不是斗笠、水牛或兩座山。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "斗宿與牛宿都是二十八星宿，符合古文天象描述。" },
      B: { verdict: "incorrect", reason: "文中在描寫月亮位於星空，不是地面斗笠與水牛。" },
      C: { verdict: "incorrect", reason: "斗、牛不是兩座山名，而是古代星空分區。" }
    },
    takeaway: "古文天象中的斗、牛，指二十八星宿的斗宿與牛宿。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-21": {
    encouragement: "沿岸海床緊接陸地，通常還位在淺而平緩的大陸棚上。",
    keyIdea: "沿岸區從高潮線、低潮線向外延伸的淺海海床，多屬大陸棚。",
    steps: ["大陸棚接在海岸外側，水深較淺、坡度平緩。", "大陸坡、海溝與洋底盆地都位於更外、更深的海域。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海溝是狹長深陷地形，不是一般沿岸海床。" },
      B: { verdict: "correct", reason: "沿岸區通常位在接連陸地的淺海大陸棚上。" },
      C: { verdict: "incorrect", reason: "大陸坡位於大陸棚外緣，水深快速增加，不是主要沿岸區。" },
      D: { verdict: "incorrect", reason: "大陸緣積在大陸坡外側，已屬較深海域。" },
      E: { verdict: "incorrect", reason: "洋底盆地遠離海岸且水深很大。" }
    },
    takeaway: "沿岸淺海多屬大陸棚。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-15": {
    encouragement: "同樣頻率下，一秒振動次數相同；每秒走過越長波長，速度就越快。",
    keyIdea: "波速＝頻率×波長；頻率相同時，波長越長，傳播速率越快。",
    steps: ["使用 v＝fλ。", "兩波頻率 f 相同，波長 λ 較大者，波速 v 較大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "波高與波長沒有必然一增一減的固定關係。" },
      B: { verdict: "incorrect", reason: "風速越大通常能給海面更多能量，使波高增加。" },
      C: { verdict: "incorrect", reason: "風速大通常傳給海水的能量更多，不是更少。" },
      D: { verdict: "correct", reason: "依 v＝fλ，頻率相同時波長較長者速度較快。" }
    },
    takeaway: "波速等於頻率乘波長；固定頻率下，長波走得快。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-17": {
    encouragement: "鏡片在冷氣車內被降溫，出車後遇到暖濕空氣，水氣便在冷表面凝結。",
    keyIdea: "當潮濕空氣接觸低於露點的冷鏡片，水氣凝結成小水滴使鏡片模糊。",
    steps: ["強冷氣讓眼鏡鏡片溫度降低。", "下車後車外水氣接觸冷鏡片並冷卻到露點，凝結成小水滴。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "車外水氣在冰冷鏡片上達到露點並凝結，正是模糊原因。" },
      B: { verdict: "incorrect", reason: "水氣多寡不是唯一關鍵，必須有冷鏡片讓空氣降到露點。" },
      C: { verdict: "incorrect", reason: "雨天車外濕度通常不小，且此說法也無法解釋凝結。" },
      D: { verdict: "incorrect", reason: "車外通常比強冷氣車內暖，不是更冷。" }
    },
    takeaway: "暖濕空氣遇冷表面降到露點，就會凝結起霧。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-18": {
    encouragement: "沉積構造是在沉積或沉積物變形時留下；斷層則是岩層受力破裂錯動。",
    keyIdea: "層理、波痕、粒級層與交錯層都是沉積構造；斷層屬地質構造。",
    steps: ["水流、風與沉積過程會留下層理、波痕等特徵。", "斷層由岩石受力破裂並錯動形成，不是沉積作用本身造成。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "斷層是岩層破裂錯動的構造，不屬沉積構造。" },
      B: { verdict: "incorrect", reason: "層理是沉積物分層堆積的基本沉積構造。" },
      C: { verdict: "incorrect", reason: "波痕由水流或風作用於鬆散沉積物形成。" },
      D: { verdict: "incorrect", reason: "粒級層記錄顆粒由粗到細等沉積變化。" },
      E: { verdict: "incorrect", reason: "交錯層由沙丘、河流等沉積面遷移形成。" }
    },
    takeaway: "斷層是破裂錯動；其餘常見層理與波痕是沉積構造。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-22": {
    encouragement: "人類鑽不到岩石圈底部，但地震波能穿過深處並回傳介質變化。",
    keyIdea: "地震波速度會隨岩石性質改變；岩石圈底界可由波速明顯變化判定。",
    steps: ["地震波可穿越地球內部，速度受溫度、密度與剛性影響。", "岩石圈進入較軟的軟流圈時波速改變，可據此估算底界深度。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地震波能探測深部，波速急變可標示不同力學層邊界。" },
      B: { verdict: "incorrect", reason: "聲納適合用水中聲波測海底，不足以探測深部岩石圈底界。" },
      C: { verdict: "incorrect", reason: "衛星遙測主要觀察地表或重磁場，不能直接精確看到岩石圈底界。" },
      D: { verdict: "incorrect", reason: "陸地鑽探深度遠小於多數岩石圈厚度。" },
      E: { verdict: "incorrect", reason: "海底鑽探也無法直接鑽穿整個岩石圈。" }
    },
    takeaway: "深部地球看不到也鑽不到時，地震波就是最重要的探測工具。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-4": {
    encouragement: "現代暖化要找能長期加強溫室效應的因素，核心就是二氧化碳增加。",
    keyIdea: "燃燒化石燃料增加人為二氧化碳，森林減少又降低吸收量，使大氣溫室效應增強。",
    steps: ["人類燃燒煤、石油與天然氣，快速把地下碳轉成大氣二氧化碳。", "綠色植物減少使光合作用吸收二氧化碳的能力下降，兩者共同推升濃度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "硫酸鹽等氣膠常反射陽光，短期效果較偏向降溫，不是百年暖化主因。" },
      B: { verdict: "correct", reason: "人為二氧化碳排放增加且植物吸收減少，會加強溫室效應。" },
      C: { verdict: "incorrect", reason: "火山與聖嬰可造成短期波動，不能解釋百年持續升溫主趨勢。" },
      D: { verdict: "incorrect", reason: "臭氧洞主要增加紫外線，不是現代全球暖化的主要原因。" }
    },
    takeaway: "百年暖化主因是人類增加溫室氣體；臭氧洞是另一個環境問題。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-12": {
    encouragement: "向地下走通常壓力和溫度都增加；向高空走則要分不同大氣層判斷。",
    keyIdea: "越深入地球內部，上方岩石重量增加，且更接近地球內部熱源，所以岩壓與岩溫都增大。",
    steps: ["地下越深，上覆岩層越厚，岩壓越大。", "地溫一般也隨深度增加；大氣溫度則不會在每一層都同方向變化。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地下越深，上覆岩石重量越大且地溫通常越高，因此岩壓、岩溫皆增。" },
      B: { verdict: "incorrect", reason: "海水越深水壓越大；深海水溫雖常較低，但不能說兩者都變小。" },
      C: { verdict: "incorrect", reason: "平流層氣壓隨高度降低，但氣溫通常隨高度升高。" },
      D: { verdict: "incorrect", reason: "對流層中氣壓、氣溫通常都隨高度增加而降低，不是變大。" }
    },
    takeaway: "地下越深岩壓、岩溫越大；高空氣壓下降，但氣溫要看大氣分層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-6": {
    encouragement: "海面每天最常見的波浪，主要就是風把能量傳給水面。",
    keyIdea: "風吹過海面時摩擦並傳遞能量，形成一般風浪。",
    steps: ["風與海面接觸，透過摩擦把動能傳給海水。", "風持續越久、風速越大、吹送距離越長，通常風浪越明顯。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "一般海面波浪最主要由風吹海面、傳入能量形成。" },
      B: { verdict: "incorrect", reason: "河流入海只影響河口局部水流，不是廣大海面波浪主因。" },
      C: { verdict: "incorrect", reason: "日月引力主要造成潮汐，不是一般短週期風浪。" },
      D: { verdict: "incorrect", reason: "溫鹽變化主要驅動密度環流，不是海面常見波浪主因。" }
    },
    takeaway: "風造成一般海浪；日月引力造成潮汐；海底劇烈擾動可造成海嘯。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
