(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-115-15": {
    encouragement: "這題其實把定義直接告訴你了，只要把「單位電荷受到的力」翻成除法就能得分。",
    keyIdea: "電場＝靜電力÷電荷量，所以單位是牛頓／庫侖（N/C）。",
    steps: [
      "先讀題目的定義：電場是「單位正電荷所受的靜電力」。",
      "把文字寫成關係式：電場＝力÷電荷量。",
      "力的單位是 N，電荷量的單位是 C，因此電場的單位是 N/C。",
      "選項 B 正好是 N/C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "C/N 是 N/C 的倒數，表示每牛頓對應多少庫侖，不是電場的單位。" },
      B: { verdict: "correct", reason: "由電場＝力÷電荷量可知，單位就是 N/C。" },
      C: { verdict: "incorrect", reason: "V/A 由歐姆定律可知是電阻的單位 Ω，不是電場單位。" },
      D: { verdict: "incorrect", reason: "A/V 是電阻單位的倒數，代表電導，不是電場。" },
      E: { verdict: "incorrect", reason: "電場只需要一個力的單位除以電荷量，不會出現 N²/C。" }
    },
    takeaway: "遇到單位題，先把題目定義寫成除法或乘法，再代入各物理量的單位。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-17": {
    encouragement: "攝氏溫度有正有負，看起來容易亂；換成絕對溫度後，這題只剩下一個比值。",
    keyIdea: "分子平均動能和絕對溫度成正比，攝氏溫度要先加 273 轉成 K。",
    steps: [
      "月球赤道日間約為 121°C，換成絕對溫度是 121＋273＝394 K。",
      "夜間約為 −133°C，換成絕對溫度是 −133＋273＝140 K。",
      "相同氣體分子的平均動能和絕對溫度成正比。",
      "因此日間與夜間的平均動能比是 394／140。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "31／23 不是日夜絕對溫度之比，也沒有先把攝氏溫度正確換成 K。" },
      B: { verdict: "incorrect", reason: "304／296 所用的溫度數值與月球日夜溫度不符。" },
      C: { verdict: "incorrect", reason: "121／133 直接拿攝氏溫度的量值相比；平均動能不能和攝氏溫度直接成正比。" },
      D: { verdict: "incorrect", reason: "日間是 394 K，但夜間應是 140 K，不是 403 K。" },
      E: { verdict: "correct", reason: "日間 394 K、夜間 140 K，所以平均動能比為 394／140。" }
    },
    takeaway: "只要題目提到分子動能或氣體溫度比例，就要使用絕對溫度 K。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-48": {
    encouragement: "奈米看起來很小，但只要記得光子能量公式並把單位換成公尺，就能穩穩算出來。",
    keyIdea: "光子能量 E＝hf，而 f＝c/λ，所以 E＝hc/λ。",
    steps: [
      "光子能量公式是 E＝hf。",
      "光速、頻率和波長的關係是 c＝fλ，因此 f＝c/λ。",
      "代入可得 E＝hc/λ，所以 A 正確。",
      "將 λ＝13.5 nm＝13.5×10⁻⁹ m 代入，E 約為 1.5×10⁻¹⁷ J，所以 D 也正確。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "把 f＝c/λ 代入 E＝hf，正好得到 E＝hc/λ。" },
      B: { verdict: "incorrect", reason: "h/λ 的單位不是能量；公式還少了光速 c。" },
      C: { verdict: "incorrect", reason: "光子波長越短，能量越大，因此能量與 λ 成反比，不是相乘。" },
      D: { verdict: "correct", reason: "用 h≈6.63×10⁻³⁴、c≈3.0×10⁸、λ＝13.5×10⁻⁹ 計算，約得 1.5×10⁻¹⁷ J。" },
      E: { verdict: "incorrect", reason: "5×10⁻⁴⁴ J 小得不合理，也是把公式或奈米換算用錯後才會得到的數量級。" }
    },
    takeaway: "光子能量和波長成反比：波長越短，單一光子的能量越高。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-19": {
    encouragement: "衛星題先別急著碰能量，先用週期判斷誰離地球近，速度和加速度就跟著清楚了。",
    keyIdea: "繞同一顆地球時，週期較短的圓軌道半徑較小，速率與向心加速度較大。",
    steps: [
      "ISS 的週期是 90 分鐘，同步衛星的週期約是地球自轉的 24 小時，所以 ISS 週期較短。",
      "繞同一顆地球做圓周運動，週期較短代表軌道半徑較小。",
      "軌道速率 v＝√(GM/r)，半徑 r 較小時速率較大，所以 D 正確。",
      "向心加速度 a＝GM/r²，半徑較小時加速度也較大，所以 E 正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "ISS 週期遠小於同步衛星，因此軌道半徑較小，不是較大。" },
      B: { verdict: "incorrect", reason: "總力學能還含衛星質量；題目沒有說兩者質量相同，所以不能保證 ISS 的總能量較大。" },
      C: { verdict: "incorrect", reason: "重力位能 U＝−GMm/r 也受衛星質量影響，未給質量就不能斷定誰一定較大。" },
      D: { verdict: "correct", reason: "ISS 軌道半徑較小，由 v＝√(GM/r) 可知其速率一定較大。" },
      E: { verdict: "correct", reason: "ISS 離地球較近，由 a＝GM/r² 可知其加速度量值一定較大。" }
    },
    takeaway: "同繞地球的圓軌道：越靠近地球，週期越短、速率越大、加速度也越大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-24": {
    encouragement: "這題要找錯誤敘述；記住電子待在穩定能階時，不必一直補充能量，就能快速找到答案。",
    keyIdea: "電子只能處在特定能階；躍遷時才吸收或放出等於能階差的光子。",
    steps: [
      "原子中的電子可以處在不同但特定的能階。",
      "電子吸收適當能量，可以從低能階跳到高能階。",
      "電子從高能階降到低能階，會放出能量等於能階差的光子。",
      "電子留在穩定能階時不需外界持續供能，因此 D 是錯誤敘述。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；原子的電子可以具有不同的允許能量。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；氫原子的電子可在不同能階間躍遷，因此可能放出不同波長的光。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；電子吸收符合能階差的能量後，可以躍遷到較高能階。" },
      D: { verdict: "correct", reason: "這是題目要找的錯誤敘述；穩定能階不需要持續吸收光子才能維持。" },
      E: { verdict: "incorrect", reason: "這是正確敘述；電子降到較低能階時，能量差常以光子的形式放出。" }
    },
    takeaway: "電子「換能階」才交換能量；安穩待在某個能階時，不必持續補充能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-26": {
    encouragement: "日常接觸力看似和電無關，其實原子外層電子彼此排斥，正是地板能撐住人的原因。",
    keyIdea: "日常的支撐力與摩擦力主要來自原子、分子間的電磁作用。",
    steps: [
      "地板與腳接觸時，兩邊原子的電子雲很靠近。",
      "帶電粒子之間的電磁作用阻止兩個物體互相穿過，形成支撐力。",
      "原子核內的質子與中子主要靠強力束縛。",
      "因此只有 B 的敘述正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "強力的作用距離很短，主要在原子核尺度內，不會涵蓋整個原子。" },
      B: { verdict: "correct", reason: "地板和人體原子間的電磁排斥形成日常感受到的支撐力。" },
      C: { verdict: "incorrect", reason: "摩擦力主要來自接觸面原子間的電磁作用，萬有引力遠遠太弱。" },
      D: { verdict: "incorrect", reason: "電子受帶正電原子核的電磁力束縛，不是靠萬有引力。" },
      E: { verdict: "incorrect", reason: "核子間的強力足以在極短距離內克服質子靜電排斥；弱力不是用來把核子黏住的力量。" }
    },
    takeaway: "看到支撐力、摩擦力、彈力，可以往原子間的電磁作用去想。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-19": {
    encouragement: "核電廠不是把核能直接變成插座裡的電，而是先加熱、再推動機械，拆成流程就很簡單。",
    keyIdea: "核電以核分裂釋放質能，產生熱，再讓蒸汽推動渦輪機。",
    steps: [
      "反應爐中的鈾等核燃料發生核分裂，所以 E 正確。",
      "核分裂前後有少量質量差，依 E＝mc² 轉成能量，所以 A 正確。",
      "核反應釋出的能量先成為熱能，製造蒸汽。",
      "蒸汽推動渦輪機，包含熱能轉成動能，所以 C 正確。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "核分裂有少量質量轉換成能量，屬於質能轉換。" },
      B: { verdict: "incorrect", reason: "核電廠主要不是收集聲音來發電，聲能只是非必要的伴隨現象。" },
      C: { verdict: "correct", reason: "熱使水成為蒸汽，蒸汽流動並推動渦輪，包含熱能轉為動能。" },
      D: { verdict: "incorrect", reason: "現行核能電廠主要使用核分裂，不是像太陽那樣進行核融合。" },
      E: { verdict: "correct", reason: "核燃料的重原子核分裂，是現行核電廠熱能的來源。" }
    },
    takeaway: "核能發電流程可記成：核分裂與質能轉換 → 熱 → 蒸汽動能 → 電能。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-20": {
    encouragement: "四種基本作用各有工作範圍；先分清楚「長距離」與「原子核內」就能排除大半選項。",
    keyIdea: "電磁力和重力都可達很遠；強力、弱力只在比原子更小的尺度明顯。",
    steps: [
      "重力和電磁力的作用範圍都可延伸到很遠，因此 A 的「僅有重力」不對。",
      "電子和原子核的束縛主要來自電磁力，不是重力。",
      "自由中子的 β 衰變由弱作用造成，會產生質子、電子等粒子。",
      "強力與弱力的有效作用距離都小於整個原子的尺度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電磁力的作用範圍也可達無窮遠；星系以重力為主，是因大尺度物質通常近似電中性。" },
      B: { verdict: "incorrect", reason: "電子帶負電、原子核帶正電，兩者主要靠靜電吸引束縛，重力可忽略。" },
      C: { verdict: "correct", reason: "單獨中子的 β 衰變由弱作用造成，可變成質子、電子與反微中子。" },
      D: { verdict: "correct", reason: "強力和弱力都只在極短距離明顯，作用範圍小於約 10⁻¹⁰ m 的原子尺度。" },
      E: { verdict: "incorrect", reason: "強力會作用在各種核子之間，中子與中子之間也有強力。" }
    },
    takeaway: "重力、電磁力能影響遠處；強力、弱力主要處理原子核與更小尺度的現象。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-24": {
    encouragement: "把冰箱想成一臺「搬熱機」：它用電把裡面的熱搬出去，而且搬運本身還會多產生熱。",
    keyIdea: "冰箱消耗電能作功，把熱由低溫處搬到高溫處；排到室內的熱量大於從箱內取走的熱量。",
    steps: [
      "冰箱內部較冷，熱不會自動從低溫流向較高溫的房間。",
      "壓縮機消耗電能作功，讓冷媒循環，把箱內熱量帶到箱外。",
      "若在密閉隔熱室內開著冰箱門，箱內外其實是同一空間。",
      "冰箱排出的熱＝吸入的熱＋電能，所以最後室溫會上升。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "冰箱正是靠輸入電能作功，把箱內的熱搬到箱外。" },
      B: { verdict: "incorrect", reason: "壓縮機會使冷媒壓力與溫度都上升，不是降溫。" },
      C: { verdict: "correct", reason: "開門後冷熱端都在同一房間，冰箱又把電能轉成額外熱量，因此平均室溫提高。" },
      D: { verdict: "incorrect", reason: "冷媒在蒸發器吸收食物熱量時，主要處於低溫、低壓狀態。" },
      E: { verdict: "incorrect", reason: "熱不會自行由較低溫冷媒傳給較高溫空氣；冷媒須先經壓縮升溫，才可向室內放熱。" }
    },
    takeaway: "冰箱不是製造冷，而是耗電把熱搬走；搬熱過程還會向環境多排出電能轉成的熱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-25": {
    encouragement: "先把一度電換成焦耳，再乘性能係數；分成兩步就不會被科學記號嚇到。",
    keyIdea: "轉移熱能＝性能係數×輸入電能，而 1 kW·h＝3.6×10⁶ J。",
    steps: [
      "1.0 度電＝1 kW·h＝1000 W×3600 s＝3.6×10⁶ J。",
      "性能係數 2.5＝轉移熱能÷輸入的功。",
      "因此轉移熱能＝2.5×3.6×10⁶ J。",
      "算得 9.0×10⁶ J，選 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3.6×10⁶ J 只是輸入的 1 度電，還沒有乘上性能係數 2.5。" },
      B: { verdict: "incorrect", reason: "7.2×10⁶ J 等於只乘 2，沒有使用題目給的性能係數 2.5。" },
      C: { verdict: "correct", reason: "2.5×3.6×10⁶＝9.0×10⁶ J。" },
      D: { verdict: "incorrect", reason: "1.1×10⁷ J 並非 2.5 與 3.6×10⁶ 的乘積。" },
      E: { verdict: "incorrect", reason: "1.4×10⁷ J 高估了可轉移的熱量，不符合性能係數 2.5。" }
    },
    takeaway: "度電是能量單位：1 度＝3.6×10⁶ J；冰箱性能係數可大於 1，因為它是在搬熱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-28": {
    encouragement: "科學史不用全部死背，先抓四個最穩的配對，再找出把人名對錯的兩句。",
    keyIdea: "電子—湯姆森、核式原子—拉塞福、電流磁效應—厄斯特、電磁感應—法拉第。",
    steps: [
      "湯姆森以陰極射線實驗發現電子，甲正確。",
      "拉塞福由金箔散射提出核式原子模型，乙正確；厄斯特發現電流的磁效應，丙正確。",
      "馬克士威由理論推論光是電磁波，赫茲則以實驗證實，所以丁錯誤。",
      "法拉第發現電磁感應，戊正確；最早提出能量量子化的是普朗克，所以己錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、戊正確，但丁把推論光為電磁波的人誤寫成赫茲。" },
      B: { verdict: "incorrect", reason: "乙、丙正確，但己錯誤；能量量子化首先由普朗克提出。" },
      C: { verdict: "incorrect", reason: "丙、戊正確，但丁與己都把科學家的貢獻配錯。" },
      D: { verdict: "correct", reason: "甲、乙、丙、戊四項的人物與發現都配對正確。" },
      E: { verdict: "incorrect", reason: "甲、乙正確，但丁和己錯誤，因此這組不能選。" }
    },
    takeaway: "馬克士威先從理論預測電磁波，赫茲再用實驗證實；普朗克提出能量量子化。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-29": {
    encouragement: "把三個防疫措施各問一句：空氣往哪流、熱怎麼傳、額溫槍收到什麼，就能逐一判斷。",
    keyIdea: "流體由高壓流向低壓；接觸降溫靠傳導；額溫槍接收人體發出的紅外線。",
    steps: [
      "負壓病房內壓力較低，開口處的空氣較傾向由外流入內，能減少病房空氣外洩。",
      "人的體溫通常高於環境，仍持續與環境交換熱，因此不一定達到熱平衡。",
      "額頭與冰枕直接接觸，主要以熱傳導把熱交給冰枕。",
      "額溫槍不必接觸皮膚，而是接收額頭發出的紅外線；紅外線是電磁波。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "病房內壓力較低，空氣較不會由內向外流出，可降低病原隨空氣外洩的機會。" },
      B: { verdict: "incorrect", reason: "若病房內壓力較高，空氣反而會往外流，增加外洩風險。" },
      C: { verdict: "incorrect", reason: "人體會代謝產熱且常與環境有溫差，體溫穩定不代表和環境達到熱平衡。" },
      D: { verdict: "correct", reason: "額頭和冰枕直接接觸，熱由較熱的額頭傳向較冷的冰枕，主要是熱傳導。" },
      E: { verdict: "correct", reason: "額溫槍接收額頭發出的紅外線，紅外線屬於電磁波，可在空氣中傳遞熱能。" }
    },
    takeaway: "直接接觸多半是熱傳導；不用接觸就能測溫，靠的是紅外線電磁波。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-31": {
    encouragement: "干涉不是只有光能做到；把「同相加強、反相抵消」抓住，就能看懂光和粒子的共同現象。",
    keyIdea: "亮紋來自同相波相加，暗紋來自波峰與波谷抵消；物質粒子也具有波動性。",
    steps: [
      "亮紋處兩道光同相到達，可能是波峰遇波峰，也可能是波谷遇波谷。",
      "暗紋處兩道光反相到達，也就是一個波峰遇到另一個波谷而抵消。",
      "因此 C 正確，A、B 把到達的波形說得過度單一。",
      "原子、電子等粒子也有物質波性質，在適當條件下可產生雙狹縫干涉。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "亮紋不只有波峰抵達；波峰對波峰、波谷對波谷都會同相加強。" },
      B: { verdict: "incorrect", reason: "暗紋不是只有波谷抵達，而是兩道波反相、波峰與波谷彼此抵消。" },
      C: { verdict: "correct", reason: "波峰與波谷同時抵達並互相抵消，會形成干涉暗紋。" },
      D: { verdict: "correct", reason: "原子也具有物質波性質，縫距等條件適當時能觀察到干涉。" },
      E: { verdict: "incorrect", reason: "電子雖是粒子，也有波動性；適當的雙狹縫實驗可以出現干涉條紋。" }
    },
    takeaway: "光有粒子性，粒子也有波動性；雙狹縫干涉正是波粒二象性的代表證據。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-34": {
    encouragement: "五句話很多，但只要逐句標記真或假，不必一次記住整段，就能找到唯一組合。",
    keyIdea: "核分裂只有少量質量差轉成能量；待機變壓器仍可能耗電；照明效能會因燈具種類而不同。",
    steps: [
      "核分裂釋能後，產物總質量會比反應前略少，所以甲正確；但不是整塊燃料全變成能量，所以乙錯誤。",
      "變壓器接上電源且有電流時，即使電器關機也可能有待機耗電，所以丙正確。",
      "兩車各載一人通常要讓兩具引擎與兩臺車運轉，耗油不會和一車載兩人相同，所以丁錯誤。",
      "LED 把更多電能轉成可見光，通常比白熾燈有效率，所以戊的「一定相同」錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、丙正確，但乙錯誤；核分裂只把少量質量差轉成能量，不是燃料全部質量。" },
      B: { verdict: "incorrect", reason: "甲正確，但丁、戊都錯誤，不能組成正確答案。" },
      C: { verdict: "incorrect", reason: "丙正確，但乙與戊錯誤。" },
      D: { verdict: "incorrect", reason: "乙和丁都錯誤：燃料不會全部轉成能量，兩車載人也不等同一車載兩人耗油。" },
      E: { verdict: "correct", reason: "五句中只有甲與丙正確，因此答案是甲丙。" }
    },
    takeaway: "核能釋放的是很小的質量差；相同耗電功率不代表相同照明效果。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-51": {
    encouragement: "核反應式像記帳：左上角記質量數、左下角記原子序，衰變前後都要對得起來。",
    keyIdea: "α 衰變使質量數減 4、原子序減 2；β⁻ 衰變使質量數不變、原子序加 1。",
    steps: [
      "鈾-238 發生 α 衰變，放出氦-4 核，所以質量數 238→234、原子序 92→90，成為釷-234。",
      "因此 A 正確，B、C 所寫的衰變種類不符合這個變化。",
      "鉈-206 的原子序是 81，若發生 β⁻ 衰變，質量數仍為 206、原子序變成 82。",
      "原子序 82 是鉛，因此 E 正確。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "α 粒子帶走質量數 4、原子序 2，所以鈾-238 變成釷-234。" },
      B: { verdict: "incorrect", reason: "β⁻ 衰變不會讓質量數減 4、原子序減 2，因此不能由鈾-238 變成釷-234。" },
      C: { verdict: "incorrect", reason: "γ 衰變只放出電磁波，核種的質量數和原子序都不改變。" },
      D: { verdict: "incorrect", reason: "α 衰變會讓鉈-206 變成質量數 202、原子序 79 的核種，不會成為鉛-206。" },
      E: { verdict: "correct", reason: "β⁻ 衰變使原子序由 81 加 1 成為 82，質量數仍是 206，正好是鉛-206。" }
    },
    takeaway: "α：上面減 4、下面減 2；β⁻：上面不變、下面加 1；γ：兩者都不變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-4": {
    encouragement: "天氣看起來很複雜，但最常出場的其實只有兩股力量：把空氣留在地球的重力，以及分子間的電磁力。",
    keyIdea: "日常天氣的空氣壓力、碰撞、熱與相變主要涉及電磁力，空氣重量與浮力則離不開重力。",
    steps: [
      "地球重力把大氣留在地球附近，也造成空氣的重量與壓力差。",
      "空氣分子的碰撞、水分子的凝結與蒸發，主要來自原子分子間的電磁作用。",
      "強作用與弱作用主要發生在原子核或更小尺度，不直接主導日常天氣。",
      "所以應選電磁力作用 D 與重力作用 E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "弱作用主要和某些粒子衰變有關，不是風、雲、雨等日常天氣的主要作用。" },
      B: { verdict: "incorrect", reason: "強作用主要把原子核內的核子束縛在一起，不直接主導大氣運動。" },
      C: { verdict: "incorrect", reason: "自然界公認的四種基本交互作用中沒有一項叫「夸克作用」；夸克間的作用屬於強作用。" },
      D: { verdict: "correct", reason: "分子碰撞、熱傳與水的相變都和原子分子間的電磁作用密切相關。" },
      E: { verdict: "correct", reason: "重力讓大氣有重量，也影響浮力、氣壓和大尺度空氣運動。" }
    },
    takeaway: "天氣的兩大物理主角：重力管大尺度升降，電磁力管分子碰撞、熱與相變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-5": {
    encouragement: "科學記號先不用怕，把千焦耳換成焦耳，再從動能公式反推速度就好。",
    keyIdea: "動能 K＝mv²/2，因此 v＝√(2K/m)。",
    steps: [
      "先換單位：3600 kJ＝3.6×10⁶ J。",
      "由 K＝mv²/2，整理得 v²＝2K/m。",
      "代入得 v²＝2×3.6×10⁶÷720＝10⁴。",
      "開根號得到 v＝10² m/s，所以選 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由 v＝√(2K/m) 算得 100 m/s，也就是 10² m/s。" },
      B: { verdict: "incorrect", reason: "10³ m/s 的動能會是題目所給值的 100 倍，太大。" },
      C: { verdict: "incorrect", reason: "10⁴ 是 v² 的數值，不是速度 v；還要再開根號。" },
      D: { verdict: "incorrect", reason: "10⁵ m/s 遠高於由題目動能與質量算出的速度。" },
      E: { verdict: "incorrect", reason: "10⁶ m/s 會對應極大的動能，和 3600 kJ 不符。" }
    },
    takeaway: "從動能求速度時，最後別忘了開根號；v²＝10⁴，所以 v＝10²。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-58": {
    encouragement: "基本量可以想成物理世界的「基本積木」；其他量都能用這些積木組合出來。",
    keyIdea: "SI 基本量包含質量；電阻、電壓、能量與磁場都是由基本量組成的導出量。",
    steps: [
      "SI 的七個基本量包括長度、質量、時間、電流、溫度、物質量與發光強度。",
      "五個選項中，只有質量直接列在基本量中。",
      "電阻、電壓、能量與磁場都能用公斤、公尺、秒、安培等基本單位組合表示。",
      "因此答案是 A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "質量是 SI 七個基本量之一，基本單位是公斤 kg。" },
      B: { verdict: "incorrect", reason: "電阻是導出量，單位 Ω 可由 V/A 等基本單位組合而成。" },
      C: { verdict: "incorrect", reason: "電壓是每單位電荷的能量，屬於導出量。" },
      D: { verdict: "incorrect", reason: "能量可由力乘距離得到，單位 J＝kg·m²/s²，是導出量。" },
      E: { verdict: "incorrect", reason: "磁場的單位特斯拉 T 可由其他基本單位組合，不是基本量。" }
    },
    takeaway: "基本量是最底層積木；質量是基本量，能量、電壓、電阻、磁場都是導出量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-12": {
    encouragement: "把宇宙想成從「很熱、粒子分開」慢慢冷卻到「原子形成」，最後才有恆星，順序就不會亂。",
    keyIdea: "早期宇宙先有分離的電子與原子核，冷卻後形成原子，再經重力聚集形成恆星。",
    steps: [
      "宇宙早期溫度很高，電子和質子無法穩定結合，對應甲。",
      "宇宙膨脹冷卻後，電子與原子核結合，開始形成氫、氦等原子，對應乙。",
      "之後物質再受重力逐漸聚集，才形成第一批恆星，對應丙。",
      "所以時間順序是甲→乙→丙。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "先是電子與質子分離的高溫階段，再形成原子，最後才形成恆星。" },
      B: { verdict: "incorrect", reason: "氦原子形成前，必先經過電子與質子尚未結合的更早期高溫階段。" },
      C: { verdict: "incorrect", reason: "恆星需要原子氣體先存在並受重力聚集，不可能早於原子形成。" },
      D: { verdict: "incorrect", reason: "恆星不是最早出現；甲、乙都發生在恆星形成以前。" },
      E: { verdict: "incorrect", reason: "恆星形成前要先有氫、氦原子，因此乙必須排在丙之前。" }
    },
    takeaway: "宇宙演化的簡化順序：帶電粒子分離 → 原子形成 → 恆星形成。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-13": {
    encouragement: "把日常力往微觀世界追下去：物體摸得到的彈力與摩擦力，多半都來自帶電粒子的互動。",
    keyIdea: "彈力與摩擦力源自原子、分子間的電磁作用；核子束縛主要靠強力。",
    steps: [
      "物體形變時，原子間距改變，電子與原子核間的電磁作用會產生恢復原狀的彈力。",
      "兩表面接觸時，原子間的電磁作用也形成摩擦力，因此 A 正確。",
      "原子核內的核子主要靠強力束縛，不是弱力。",
      "重力本身就是四種基本交互作用之一。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "彈力與摩擦力都可追溯到接觸物體原子、分子間的電磁作用。" },
      B: { verdict: "incorrect", reason: "質子與中子在原子核內主要受強力束縛，弱力主要參與某些衰變。" },
      C: { verdict: "incorrect", reason: "強力與弱力的作用距離都很短，但不能用「一定較小」概括；弱力的特徵作用尺度通常更短。" },
      D: { verdict: "incorrect", reason: "電子目前被視為穩定的基本粒子，不會因「內部弱力」而自行衰變。" },
      E: { verdict: "incorrect", reason: "重力正是自然界四種基本交互作用之一。" }
    },
    takeaway: "日常接觸力多源自電磁力；原子核靠強力；粒子衰變常和弱力有關。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
