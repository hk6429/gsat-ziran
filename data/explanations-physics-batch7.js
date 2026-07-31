(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-97-5": {
    encouragement: "海面本來就有一大氣壓，水下10公尺再多約一大氣壓，兩者相加即可。",
    keyIdea: "水深約10公尺產生約一大氣壓的液體壓力；總壓力還要加上海面大氣壓。",
    steps: [
      "海水密度約1000 kg/m³，和水很接近。",
      "深10 m的海水壓力ρgh約為1000×9.8×10≈9.8×10⁴ Pa，接近一大氣壓。",
      "潛水員還同時承受海面向下傳遞的一大氣壓。",
      "所以總壓力約為1＋1＝2大氣壓。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1大氣壓只算海面大氣壓，漏掉10公尺海水柱造成的壓力。" },
      B: { verdict: "correct", reason: "海面大氣壓約1 atm，10公尺海水再增加約1 atm，總計約2 atm。" },
      C: { verdict: "incorrect", reason: "3大氣壓通常要到約20公尺水深；10公尺海水只增加約1 atm。" },
      D: { verdict: "incorrect", reason: "4大氣壓遠高於10公尺水深的總壓力，約要到30公尺深才接近。" },
      E: { verdict: "incorrect", reason: "5大氣壓約對應40公尺水深，並非題目的10公尺。" }
    },
    takeaway: "水下每增加約10公尺深，總壓力大約增加1大氣壓。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-7": {
    encouragement: "若紅、橙、黃都只剩下偏綠的感覺，表示負責辨認紅光的色錐出了問題。",
    keyIdea: "600 nm色錐主要感受紅光；它異常時，長波長顏色較難與綠色區分。",
    steps: [
      "三種色錐中心波長約為600 nm紅、550 nm綠、450 nm藍。",
      "紅、橙、黃、綠的差別，需要紅色錐與綠色錐回應比例共同判斷。",
      "若600 nm紅色錐異常，長波長的紅色資訊大幅減少。",
      "大腦便較依賴綠色錐訊號，使這些顏色看起來像深淺不同的綠。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "600 nm是紅色錐的中心波長；它異常會讓紅到綠之間的顏色難以區分。" },
      B: { verdict: "incorrect", reason: "550 nm綠色錐異常會削弱綠光訊號，不會使紅、橙、黃、綠都只呈現不同程度的綠。" },
      C: { verdict: "incorrect", reason: "題目只列三種色錐中心為600、550、450 nm，沒有中心500 nm的第四種色錐。" },
      D: { verdict: "incorrect", reason: "450 nm藍色錐異常主要影響藍色相關辨色，不是紅綠系列的主要差異。" }
    },
    takeaway: "辨色不是一個波長一個開關，而是三種色錐回應比例的共同結果。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-9": {
    encouragement: "同一種空氣中，聲音快慢不看尖不尖、響不響；音調和音量改變的是頻率與振幅。",
    keyIdea: "固定介質與溫度下，聲速近似固定，與聲音頻率、振幅無關。",
    steps: [
      "音調高低主要由頻率決定，音量大小主要和振幅、強度有關。",
      "在相同空氣狀態中，這些差異不會明顯改變聲速。",
      "100層高度約330 m，自由落下末速約√(2gh)≈81 m/s。",
      "81 m/s遠小於空氣聲速約340 m/s，所以物件不會快過聲音。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "音調高代表頻率高，但相同空氣中的聲速不會因此變大。" },
      B: { verdict: "incorrect", reason: "音量大代表強度或振幅大，不代表聲波傳得更快。" },
      C: { verdict: "correct", reason: "固定空氣條件下，聲速主要由介質與溫度決定，和音調、音量均無關。" },
      D: { verdict: "incorrect", reason: "由330公尺落下的末速約81 m/s，仍遠低於約340 m/s的聲速。" }
    },
    takeaway: "聲音的頻率管音調、振幅管音量；介質與溫度才主要決定聲速。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-37": {
    encouragement: "忽略空氣阻力後，重球和輕球都只剩同一個重力加速度；質量不影響落下快慢。",
    keyIdea: "自由落體加速度皆為g，同時由靜止落下者在同一時刻有相同速度與位移。",
    steps: [
      "鐵密度大於鋁，同體積鐵球質量較大，因此兩球重量不同。",
      "但自由落體加速度F/m＝mg/m＝g，質量會約掉。",
      "兩球同時由靜止落下，經過相同時間t，速度都是gt。",
      "下落距離也都是gt²/2。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同體積鐵球質量較大，重量mg也較大，所以兩球重力不相同。" },
      B: { verdict: "correct", reason: "兩球初速相同、加速度同為g，經相同時間的下落距離皆為gt²/2。" },
      C: { verdict: "correct", reason: "兩球由靜止落下，經時間t的速度都為gt。" },
      D: { verdict: "correct", reason: "忽略阻力時，不同質量物體的自由落體加速度皆為g。" },
      E: { verdict: "incorrect", reason: "鐵與鋁密度不同，同體積實心球的質量不相同。" }
    },
    takeaway: "自由落體中重量可以不同，但加速度、同時刻速度與下落距離仍可相同。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-38": {
    encouragement: "每一次反彈離地後，最高點的位能就代表那一段飛行的力學能；高度比可直接帶出能量比。",
    keyIdea: "同一顆球的力學能與最大高度mgh成正比；最大速率則與高度平方根成正比。",
    steps: [
      "以地面為位能零點，每段飛行最高點速度為零，力學能等於mgh。",
      "高度比1：0.64，所以每段最大力學能及位能變化量比也是1：0.64。",
      "忽略空氣阻力時，每段內最大動能等於該段力學能。",
      "最大速率v＝√(2gh)，比值是1：√0.64＝1：0.8。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "每段最大動能等於mgh，最大高度比1：0.64，所以最大動能同比。" },
      B: { verdict: "correct", reason: "最大位能減最小位能就是mgh，比例等於最大高度比1：0.64。" },
      C: { verdict: "incorrect", reason: "最大力學能與高度成正比，應為1：0.64，不是1：0.8。" },
      D: { verdict: "incorrect", reason: "速率與高度平方根成正比，所以最大速率比應為1：0.8。" }
    },
    takeaway: "能量跟高度一次方成正比，速度則跟高度的平方根成正比。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-49": {
    encouragement: "加熱的能量不只讓分子跑更快，活塞還會被氣體推開；所以供熱一定大於內能增加。",
    keyIdea: "定壓加熱時Q＝ΔU＋W，單原子理想氣體ΔU＝3kNΔT/2，且膨脹作功W＞0。",
    steps: [
      "溫度增加ΔT，每個分子平均動能增加3kΔT/2。",
      "N個分子的總內能增加ΔU＝3kNΔT/2。",
      "氣壓維持不變而溫度上升，氣體必須膨脹並推動活塞作功。",
      "所加熱能Q除了增加內能，還要供應對外作功，所以Q＞3kNΔT/2。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "定壓膨脹需對活塞作正功，因此供熱Q＝ΔU＋W大於3kNΔT/2。" },
      B: { verdict: "incorrect", reason: "這只算分子內能增加，漏掉氣體膨脹推動活塞所做的功。" },
      C: { verdict: "incorrect", reason: "供熱不可能小於已增加的內能，因為還有一部分能量用於對外作功。" },
      D: { verdict: "incorrect", reason: "3kNT/2是原來的總移動動能，不是溫度增加ΔT時所需的熱量。" }
    },
    takeaway: "有活塞的定壓加熱：熱量一部分升溫，一部分推活塞作功。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-13": {
    encouragement: "輸送相同功率時，把電壓拉高就能把電流壓低，電線的I²R發熱也跟著大幅減少。",
    keyIdea: "P＝VI固定時，V升高使I減小；輸電線損耗為I²R。",
    steps: [
      "發電廠希望送到遠方的功率P保持不變。",
      "由P＝VI，升高輸電電壓V會使電流I減小。",
      "電線發熱損耗P損＝I²R，電流降低可顯著減少損耗。",
      "升壓不會改變電能傳播速率，也不是為了降低要送出的功率。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "輸電線電阻主要由材料、長度、截面與溫度決定，升壓不是要增加電阻。" },
      B: { verdict: "incorrect", reason: "電能訊號傳播速度不靠提高電壓來增加，升壓的重點是降低電流損耗。" },
      C: { verdict: "correct", reason: "相同輸送功率下V越高，I＝P/V越小，可降低I²R線損。" },
      D: { verdict: "incorrect", reason: "目的仍是輸送所需功率，不是刻意把傳輸功率減小。" }
    },
    takeaway: "高壓輸電不是送得更快，而是用較小電流送同樣功率、減少發熱浪費。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-14": {
    encouragement: "近視用凹透鏡，500度就是5屈光度；焦距用1除以5即可。",
    keyIdea: "近視鏡片為負焦度凹透鏡；500度＝5 D，焦距量值為0.20 m＝20 cm。",
    steps: [
      "近視眼的遠方影像成在視網膜前，需要凹透鏡先使光線發散。",
      "眼鏡500度代表焦度量值5 m⁻¹。",
      "焦度P＝1/f，所以|f|＝1/5 m＝0.20 m。",
      "近視鏡片焦距帶負號，種類為焦距20 cm的凹透鏡。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "近視需凹透鏡，500度對應焦距量值1/5 m＝20 cm。" },
      B: { verdict: "incorrect", reason: "焦距量值雖是20 cm，但凸透鏡會聚光，適合遠視而非近視矯正。" },
      C: { verdict: "incorrect", reason: "凹透鏡種類正確，但5 cm焦距相當於2000度，度數不符。" },
      D: { verdict: "incorrect", reason: "種類與焦距都不符；5 cm凸透鏡不是500度近視鏡片。" }
    },
    takeaway: "眼鏡度數÷100得到屈光度；焦距公尺＝1／屈光度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-44": {
    encouragement: "頭髮直豎是每根頭髮帶同號電彼此排斥；人沒被持續電擊，關鍵是塑膠凳切斷接地電流。",
    keyIdea: "人體與金屬球等電位後，頭髮帶同號電互斥；絕緣凳阻止電荷持續流向地面。",
    steps: [
      "手接觸高電壓金屬球後，電荷分布到人體與頭髮。",
      "各根頭髮帶同性電荷，彼此排斥而散開直豎。",
      "塑膠是絕緣體，使人體不易和地面形成導電通路。",
      "短暫充電後人體與金屬球近似等電位，沒有持續大電流穿身流向地面。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "各根頭髮帶同號電荷後互相排斥，因此分散並直豎。" },
      B: { verdict: "incorrect", reason: "頭髮直豎主要是髮絲彼此排斥，不是頭髮整體被金屬球直接推開。" },
      C: { verdict: "incorrect", reason: "塑膠凳不導電，作用是阻止電荷流入地面，不是把電荷導地。" },
      D: { verdict: "correct", reason: "人體和球近似等電位，又被塑膠凳與地面隔絕，所以不會形成持續的大電流。" },
      E: { verdict: "incorrect", reason: "人體含水與離子，能導電；安全原因不是人體為不良導體。" }
    },
    takeaway: "高電壓不必然等於大傷害電流；是否形成穿過人體的持續通路更關鍵。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-60": {
    encouragement: "機車沒有往下滑，表示接觸點沒有相對滑動；托住重量的就是向上的靜摩擦力。",
    keyIdea: "水平繞行圓球內壁時，支持力提供水平向心力，靜摩擦力向上平衡重力。",
    steps: [
      "機車在圓球內壁繞水平圓周，圓球支持力主要指向圓心，提供向心力。",
      "重力Mg向下，若沒有其他向上力，機車會沿壁下滑。",
      "輪胎與壁面沒有相對滑動，所以摩擦屬靜摩擦。",
      "向上的靜摩擦力平衡重力，維持機車高度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "輪胎沒有沿壁面滑動，接觸處不是動摩擦。" },
      B: { verdict: "correct", reason: "未發生相對滑動時，向上的靜摩擦力可平衡重力，防止機車下滑。" },
      C: { verdict: "incorrect", reason: "重力的反作用力是機車對地球的引力，作用在地球上，不能托住機車。" },
      D: { verdict: "incorrect", reason: "騎士屬於機車系統內部，不能靠對自身的提升力取代外界向上摩擦力。" }
    },
    takeaway: "不滑動不代表沒有摩擦；阻止即將滑動的正是靜摩擦力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-61": {
    encouragement: "圓周頂點最容易掉下來；臨界時圓球剛好不再推機車，只剩重力提供向心力。",
    keyIdea: "頂點不墜落的最小速率出現在支持力N＝0，此時Mg＝Mv²/R。",
    steps: [
      "在圓周頂點，向心方向是鉛直向下。",
      "重力Mg向下，圓球支持力若存在也指向圓心。",
      "剛好不墜落的臨界狀態是支持力降為零。",
      "由Mg＝Mv²/R，約去M後得v＝√(Rg)。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Mg/R的單位是力除長度，不是速度，量綱已不符合。" },
      B: { verdict: "incorrect", reason: "2MgR含有質量且單位不是速度，不能作為v。" },
      C: { verdict: "incorrect", reason: "√(2Rg)比臨界速率大；頂點臨界條件沒有額外的2。" },
      D: { verdict: "correct", reason: "頂點令N＝0，由Mg＝Mv²/R可得v最小＝√(Rg)。" }
    },
    takeaway: "鉛直圓周頂點臨界題：接觸力剛好為零，只剩重力當向心力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-63": {
    encouragement: "密閉、定容、升溫三個條件分別告訴你：粒子數不變、空間不變、分子跑更快。",
    keyIdea: "定容密閉理想氣體升溫時，平均動能與方均根速率增加，碰壁更猛烈使壓力上升。",
    steps: [
      "密閉容器沒有氣體進出，所以分子數不變，每個分子質量也不變。",
      "溫度代表分子平均移動動能，升溫使平均動能增加。",
      "方均根速率和絕對溫度平方根成正比，因此也增加。",
      "體積不變時，分子更快、更猛烈撞壁，使壓力增大。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "定容且分子數不變時P與絕對溫度成正比，升溫使壓力增大。" },
      B: { verdict: "correct", reason: "方均根速率v_rms與√T成正比，溫度升高時會增大。" },
      C: { verdict: "correct", reason: "理想氣體分子平均動能與絕對溫度成正比，因此升溫時增加。" },
      D: { verdict: "incorrect", reason: "容器密閉，沒有新分子進入，分子數不會因加熱而增多。" },
      E: { verdict: "incorrect", reason: "加熱改變分子運動狀態，不會使單一分子的質量增加。" }
    },
    takeaway: "升溫讓分子跑更快，不會憑空增加分子數或分子質量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-32": {
    encouragement: "零分貝不是完全沒聲音，而是人耳聽覺的參考門檻，所以空氣仍有極微小振動。",
    keyIdea: "分貝是聲音強度級的對數單位；0 dB對應非零參考強度。",
    steps: [
      "分貝描述聲音強度級，不是音調頻率。",
      "0 dB定義為接近人耳可聽門檻的參考強度，不等於零強度。",
      "只要聲強非零，空氣分子振動振幅就不是零。",
      "分貝採對數尺度，每增加10 dB，強度約增10倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "音調通常用頻率Hz描述；分貝描述聲音強度級。" },
      B: { verdict: "correct", reason: "0 dB仍對應非零參考聲強，因此空氣分子振幅很小但不為零。" },
      C: { verdict: "incorrect", reason: "長時間暴露於100 dB以上強聲可能傷害聽力與身心，不能說毫無傷害。" },
      D: { verdict: "incorrect", reason: "40 dB比20 dB高20 dB，聲強比約為100倍，不是2倍。" }
    },
    takeaway: "分貝是對數尺度；0 dB是聽覺參考門檻，不是完全沒有聲音。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-34": {
    encouragement: "角膜能聚光，靠的是空氣和角膜折射率差；進水後差距縮小，角膜聚光能力也跟著變弱。",
    keyIdea: "水的折射率比空氣更接近眼內介質，使角膜折射減弱，影像無法準確落在視網膜。",
    steps: [
      "在空氣中，空氣與角膜折射率差較大，角膜能明顯折射光線。",
      "水的光速比空氣慢，且更接近光在角膜、眼內介質中的速率。",
      "戴泳鏡時，鏡內保留空氣層，角膜仍能維持原本聚光效果。",
      "不戴泳鏡時折射率差變小，角膜聚光能力不足，所以景物模糊。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "主要問題是角膜折射能力改變，不是瞳孔縮小造成光量不足。" },
      B: { verdict: "incorrect", reason: "即使心理放鬆，水直接接觸角膜仍會改變折射，造成模糊。" },
      C: { verdict: "incorrect", reason: "清水不會靠分子碰撞把光大量散掉；水下模糊主因是折射率差改變。" },
      D: { verdict: "correct", reason: "光在水中的速率較接近眼內介質，使水—角膜界面折射減弱，難以清楚成像。" }
    },
    takeaway: "泳鏡不只是擋水，還保留一層空氣，讓角膜恢復原本的折射能力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-46": {
    encouragement: "先只看前10秒：匪車剛好加速到40 m/s；把兩車各走多遠算出來，就知道最近距離。",
    keyIdea: "匪車前10秒等加速，之後與警車同速；最近距離出現在第10秒。",
    steps: [
      "匪車由靜止以4 m/s²加速，10秒後速率v＝4×10＝40 m/s，達最高速。",
      "前10秒匪車位移s＝at²/2＝4×100/2＝200 m。",
      "警車10秒走40×10＝400 m，追回200 m；原距250 m，所以仍差50 m。",
      "10秒後兩車同為40 m/s，距離維持50 m，警車不會追上。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10秒時警車只追回200公尺，原本差250公尺，仍相距50公尺。" },
      B: { verdict: "correct", reason: "第10秒後兩車同速，當時剩50公尺，因此50公尺就是最近距離。" },
      C: { verdict: "correct", reason: "匪車前10秒位移為at²/2＝4×10²/2＝200公尺。" },
      D: { verdict: "correct", reason: "匪車10秒後速率v＝at＝4×10＝40 m/s。" },
      E: { verdict: "incorrect", reason: "警車保持40 m/s等速，動能mv²/2保持不變，不會持續增加。" }
    },
    takeaway: "追趕題先比較速度；當後車不再比前車快時，就是距離最小的時刻。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-48": {
    encouragement: "閃電的核心是短時間巨大電流：它把空氣瞬間加熱產生雷聲，也可能沿電線送進危險突波。",
    keyIdea: "閃電功率P＝VQ/t約10¹⁰ W；高熱使空氣急速膨脹形成雷聲，突波可損壞家電。",
    steps: [
      "閃電能量E＝VQ＝10⁷×20＝2×10⁸ J。",
      "在0.02秒內釋放，功率P＝E/t＝10¹⁰ W。",
      "巨大電流使放電通道空氣瞬間升到高溫並快速膨脹，形成雷聲。",
      "若突波沿屋外電線進入住宅，未拔插頭的電視可能因過高電壓受損。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "功率應為10⁷×20÷0.02＝10¹⁰ W，不是10⁷ W。" },
      B: { verdict: "incorrect", reason: "雷雲電荷分離涉及冰粒碰撞、氣流與感應等複雜機制，不能把雲地高電壓簡化認定為摩擦起電。" },
      C: { verdict: "incorrect", reason: "飛機仍可能遭雷擊，需有導電、屏蔽與雷擊防護設計，不能說不可能。" },
      D: { verdict: "correct", reason: "放電大電流使空氣瞬間高熱膨脹，產生壓力波，也就是雷聲。" },
      E: { verdict: "correct", reason: "雷擊電線會造成高電壓突波，插著電源的電視可能被突波損壞。" }
    },
    takeaway: "閃電不只電壓高，還在極短時間傳送大量能量，所以功率與破壞力都很大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-31": {
    encouragement: "衛星一直在自由落下，只是同時向前跑得夠快；維持軌道的主角是地球重力，不是太陽能。",
    keyIdea: "低軌衛星靠地球重力提供向心力；稀薄大氣阻力會使其能量降低、軌道下降。",
    steps: [
      "衛星每日繞地十多圈，角速度明顯比地球一天自轉一圈快。",
      "地球重力提供衛星圓周運動的向心力。",
      "低軌道仍有極稀薄大氣，會產生阻力並逐漸消耗軌道能量。",
      "若不修正軌道，長期阻力可使軌道高度降低。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；衛星一天繞十多圈，確實比地球一天自轉一圈快。" },
      B: { verdict: "correct", reason: "這是題目要找的錯誤敘述；太陽能供儀器用電，衛星繞行主要靠地心引力。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；低軌道仍有稀薄大氣，衛星可能受到阻力。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；大氣阻力耗散軌道能量，可使軌道逐漸接近地面。" }
    },
    takeaway: "太陽能板讓衛星設備運作；地球重力才讓衛星沿軌道繞行。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-33": {
    encouragement: "需要抓牢、煞得住的地方要大摩擦；想滑得快、滑得遠的滑雪板則希望摩擦小。",
    keyIdea: "摩擦力有時有用、有時阻礙運動；滑雪板需降低滑動阻力。",
    steps: [
      "走路靠鞋底與地面摩擦向前推，摩擦太小容易滑倒。",
      "手握工具要靠摩擦防止工具滑落。",
      "煞車靠摩擦減速，摩擦越足越容易停下。",
      "滑雪板要在雪面順暢滑行，因此板與雪的摩擦越小越好。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鞋地摩擦提供走路所需抓地力，太小反而容易滑倒。" },
      B: { verdict: "correct", reason: "滑雪希望減少阻礙前進的摩擦，使滑雪板更順暢滑行。" },
      C: { verdict: "incorrect", reason: "手與把手需要足夠摩擦才能握牢工具，並非越小越好。" },
      D: { verdict: "incorrect", reason: "煞車板靠摩擦消耗動能，摩擦太小會延長煞車距離。" }
    },
    takeaway: "摩擦沒有絕對好壞：要抓地、握牢、煞車時需要它；要滑行時希望減少它。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-34": {
    encouragement: "未加蓋的水在固定氣壓下沸騰後，更多火力只會讓更多水變成蒸氣，不會再把水溫拉高。",
    keyIdea: "固定外壓下，純水沸騰時溫度維持沸點，供熱用於汽化潛熱。",
    steps: [
      "未加蓋鍋子內水面壓力近似固定大氣壓。",
      "整鍋水已達沸點後，液態水與水蒸氣共存。",
      "繼續供熱主要用來克服分子作用、使更多水汽化。",
      "增強火力會加快沸騰與汽化，但水溫近似不變。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "固定大氣壓下水已在沸點，增強火力主要增加汽化速率，水溫不再上升。" },
      B: { verdict: "incorrect", reason: "沸騰氣泡主要是水蒸氣，不是原先溶在水中的空氣。" },
      C: { verdict: "incorrect", reason: "沸騰時對流會使水充分混合，不必攪拌才使各處溫度接近。" },
      D: { verdict: "incorrect", reason: "蓋緊使內壓升高會提高沸點，暫時停止沸騰時水溫仍可繼續升高，不是降低。" }
    },
    takeaway: "沸騰後再加熱，能量主要拿去讓液體變氣體，而不是繼續升溫。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-36": {
    encouragement: "題目問的是輸電線自己發熱，不是整個負載用電；電線損耗直接用電流平方乘電阻。",
    keyIdea: "導線因電阻產生的焦耳熱功率為P＝I²R。",
    steps: [
      "輸電線可視為具有電阻R的導體。",
      "電流I通過電阻時，每秒產生的熱能為I²R。",
      "因此輸電線本身消耗功率P線＝I²R。",
      "提高輸電電壓讓電流減小，就是利用平方關係大幅降低此損耗。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "IV描述以該元件兩端電壓計算的功率，但此處V是輸電電壓，不等於電線壓降。" },
      B: { verdict: "incorrect", reason: "IR的單位是電壓，不是功率。" },
      C: { verdict: "incorrect", reason: "V²/R需使用電線兩端的壓降；題目給的輸電電壓並非該壓降。" },
      D: { verdict: "correct", reason: "只要知道通過電線的電流I與電線電阻R，線損功率就是I²R。" }
    },
    takeaway: "輸電線發熱看I²R；電流減半，線損會降到四分之一。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-47": {
    encouragement: "黃色可以是真正約580奈米的單色光，也可以由紅光和綠光同時刺激眼睛後合成。",
    keyIdea: "人眼可由約580 nm黃光直接產生黃色視覺，也可由紅、綠光加法混色得到黃。",
    steps: [
      "可見光中約580 nm本來就位於黃色波段。",
      "眼睛以紅、綠、藍三種色錐的回應比例判斷顏色。",
      "紅光與綠光等量加法混合，會同時刺激紅、綠色錐，產生黃色感覺。",
      "藍光與綠光混合較接近青色，不是黃色。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "500 nm較接近藍綠或綠色波段，不會直接形成黃色視覺。" },
      B: { verdict: "correct", reason: "580 nm位於黃光波段，可直接讓人眼產生黃色感覺。" },
      C: { verdict: "incorrect", reason: "650 nm主要是紅光，只刺激紅色感受，不是黃色。" },
      D: { verdict: "incorrect", reason: "450 nm藍光與550 nm綠光加法混合較接近青色。" },
      E: { verdict: "correct", reason: "等量紅光與綠光進行加法混色，可讓眼睛感覺為黃色。" }
    },
    takeaway: "色光加法三組：紅＋綠＝黃，綠＋藍＝青，紅＋藍＝洋紅。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-2": {
    encouragement: "鎵柱高度和絕對溫度成直線關係；先求每升高1 K長多少，再從310 K走到沸水373 K。",
    keyIdea: "高度斜率為(5.3−1.3)/(710−310)＝0.01 μm/K。",
    steps: [
      "一大氣壓下沸水溫度100°C＝373 K。",
      "鎵柱每升高1 K的高度變化為4.0 μm／400 K＝0.01 μm/K。",
      "373 K比310 K高63 K，所以鎵柱增加0.63 μm。",
      "高度為1.3＋0.63＝1.93 μm，最接近1.9 μm。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.63 μm只是從310 K到373 K增加的高度，還要加原本1.3 μm。" },
      B: { verdict: "correct", reason: "線性內插得1.3＋(373−310)×0.01＝1.93 μm，最接近1.9。" },
      C: { verdict: "incorrect", reason: "2.6 μm對應更高溫度，超過373 K線性內插的結果。" },
      D: { verdict: "incorrect", reason: "3.7 μm已接近中高溫區，不符合沸水只比310 K高63 K。" },
      E: { verdict: "incorrect", reason: "5.3 μm是710 K時的高度，沸水只有373 K。" }
    },
    takeaway: "線性資料先求斜率，再用「新值＝起點＋斜率×變化量」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-10": {
    encouragement: "樂器音色、音調、音量都不同，但只要在同一團空氣裡，聲音傳播速度就相同。",
    keyIdea: "聲速主要由介質與溫度決定，和發聲樂器、頻率或響度無關。",
    steps: [
      "小提琴、長笛、伸縮喇叭都把聲音傳入同一演奏廳空氣。",
      "輕快、清純、宏亮分別描述旋律、音色或音量，不是介質。",
      "同一溫度與狀態的空氣中，各頻率聲音的速度近似相同。",
      "所以三種樂器聲音傳得一樣快。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "小提琴旋律輕快不代表聲波速度更快。" },
      B: { verdict: "incorrect", reason: "長笛音色清純是波形與泛音差異，不會提高空氣中的聲速。" },
      C: { verdict: "incorrect", reason: "聲音宏亮代表強度較大，不代表伸縮喇叭聲速較快。" },
      D: { verdict: "correct", reason: "三者都在相同空氣中傳播，聲速由介質與溫度決定，因此相同。" }
    },
    takeaway: "先分清楚：音調看頻率、音量看振幅、音色看波形、聲速看介質。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-18": {
    encouragement: "池底的光進入空氣時會折射，眼睛卻習慣把光當直線倒推，所以把池底判得比較靠近水面。",
    keyIdea: "水中光射入空氣時偏離法線，形成較淺的視深度。",
    steps: [
      "池底反射的光由水進入空氣，跨越兩種不同介質。",
      "光從水進空氣時，折射線偏離法線。",
      "眼睛把進入眼內的折射光沿直線反向延伸。",
      "延伸線交會位置比真正池底高，因此池水看起來較淺。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "色散是不同顏色分開，不會主要造成整個池底看起來變淺。" },
      B: { verdict: "correct", reason: "池底反射光在水面折射後進入眼睛，使池底形成位置較高的虛像。" },
      C: { verdict: "incorrect", reason: "目光不是從眼睛射出的實體光；看到池底靠的是池底光進入眼睛。" },
      D: { verdict: "incorrect", reason: "陽光在水面反射會造成眩光，但不是視深度變淺的主要原因。" }
    },
    takeaway: "由空氣看水中物體，視位置會上移，所以看起來比較淺。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-20": {
    encouragement: "燈泡接在同一電源上，剛開燈時電阻小，依V²/R可知瞬間功率反而很大。",
    keyIdea: "先由穩定狀態求電壓約110 V，再用初始電阻15 Ω算P≈810 W。",
    steps: [
      "穩定時P＝90 W、R＝135 Ω，由V²＝PR得V²＝12150 V²。",
      "電源電壓約為√12150≈110 V。",
      "剛開燈時鎢絲仍冷，電阻只有15 Ω。",
      "初始功率P＝V²/R≈12150/15＝810 W。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10 W像是把電阻變化方向用反；冷鎢絲電阻小，功率應更大。" },
      B: { verdict: "incorrect", reason: "30 W低於穩定90 W，不符合相同電壓下電阻由135 Ω降到15 Ω。" },
      C: { verdict: "incorrect", reason: "90 W是鎢絲升溫後的穩定功率，剛開燈時電阻不同。" },
      D: { verdict: "incorrect", reason: "270 W只為穩定功率3倍，但電阻其實縮為1/9，初始功率約9倍。" },
      E: { verdict: "correct", reason: "相同電壓下功率與電阻成反比，135/15＝9，所以初始功率約90×9＝810 W。" }
    },
    takeaway: "白熾燈剛開啟時燈絲冷、電阻小，瞬間電流與功率都比穩定時大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-28": {
    encouragement: "Q已經代表水每分鐘吸收的熱；只要補上90%效率與千卡轉焦耳，再除以60秒。",
    keyIdea: "輸入電能率＝(Q kcal/min×4190 J/kcal)÷(0.9×60 s/min)。",
    steps: [
      "水每分鐘吸收Q kcal，也就是4190Q J。",
      "效率90%表示水吸收能量＝0.9×輸入電能。",
      "所以每分鐘輸入電能為4190Q/0.9 J。",
      "功率再除以60秒，約為4190Q/(0.9×60)≈78Q W，最接近80Q W。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "4190/(0.9×60)≈77.6，所以功率約為80Q W。" },
      B: { verdict: "incorrect", reason: "900Q W沒有正確完成千卡轉焦耳與每分鐘轉每秒的換算。" },
      C: { verdict: "incorrect", reason: "4190Q是Q千卡換成焦耳的數值，尚未除以60秒與效率。" },
      D: { verdict: "incorrect", reason: "4650Q約是每分鐘輸入的焦耳數，不是每秒的瓦特。" }
    },
    takeaway: "瓦特是每秒焦耳；題目若給每分鐘熱量，最後一定要除以60。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-43": {
    encouragement: "熱只會自發從高溫流向低溫；質量大、含熱多或比熱大都不是判斷方向的直接標準。",
    keyIdea: "鐵傳熱給銅表示鐵較熱；銅又使水升溫表示接觸時銅較熱。",
    steps: [
      "鐵塊把熱傳給銅棒，代表接觸時鐵溫度高於銅。",
      "銅棒放入水後使水升溫，代表剛接觸時銅溫度高於水。",
      "因此鐵的溫度也高於水。",
      "熱傳方向由溫度差決定，不由物體總質量或比熱單獨決定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "熱由鐵傳銅的直接原因是鐵溫度較高，不是比較無法固定定義的「所含熱量」。" },
      B: { verdict: "correct", reason: "鐵比銅熱，而銅又比水熱，因此可判斷鐵溫度比水高。" },
      C: { verdict: "correct", reason: "水溫升高表示熱由銅流向水，所以兩者剛接觸時銅溫度較高。" },
      D: { verdict: "incorrect", reason: "銅比熱其實小於水；而熱由銅流向水的原因是銅溫度較高。" }
    },
    takeaway: "判斷熱流方向只看溫度：熱自發由高溫物體流向低溫物體。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-45": {
    encouragement: "月食和街燈人影都需要光沿直線走，障礙物後方才會留下照不到的區域。",
    keyIdea: "光直進能解釋本影、影子與針孔成像；模糊邊緣與先見光後聞聲另有原因。",
    steps: [
      "月食時地球擋住太陽光，月球進入地球影子。",
      "街燈照人時，人體阻擋直進光線，背後地面形成影子。",
      "影子邊緣模糊和光源大小形成半影有關，不只是簡單單一路徑直進。",
      "先見閃電後聞雷聲，是光速遠大於聲速。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地球阻擋直線前進的太陽光，在後方形成影區，造成月食。" },
      B: { verdict: "incorrect", reason: "影子邊緣模糊主要要考慮光源有大小而形成半影，不是單靠理想光直進即可說明。" },
      C: { verdict: "correct", reason: "人體擋住街燈直進光線，使背後形成照不到的人影。" },
      D: { verdict: "incorrect", reason: "先看見閃電後聽見雷聲是因光速比聲速大，不是光直進造成。" }
    },
    takeaway: "影子與食現象看光直進；光聲先後則看傳播速度差。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-49": {
    encouragement: "題目已鎖定不漏氣、體積固定，因此胎壓升降主要看溫度；負載變重則讓輪胎承受更大的接觸作用。",
    keyIdea: "定容氣體P與絕對溫度成正比；負載增加使輪胎與地面作用及滾動阻力增大。",
    steps: [
      "輪胎不漏氣且體積不變，氣體分子數N與體積V固定。",
      "由理想氣體關係PV＝NkT，溫度升高時胎壓上升。",
      "熱柏油與輪胎變形、摩擦會使胎內氣體升溫，所以胎壓提高。",
      "負載越重，地面支持力與輪胎變形通常越大，相關摩擦或滾動阻力也較大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "摩擦力不會在所有狀況都與胎壓成正比，還受負載、材質、變形與運動狀態影響。" },
      B: { verdict: "correct", reason: "負載增大使正向作用與輪胎變形增大，實際滾動時摩擦阻力通常也增大。" },
      C: { verdict: "correct", reason: "氣體量與體積固定時，胎內溫度升高會使壓力上升。" },
      D: { verdict: "incorrect", reason: "騎乘者重量變兩倍不會直接使密閉定容輪胎的氣體溫度或分子數變兩倍，所以胎壓不必變兩倍。" }
    },
    takeaway: "密閉定容輪胎的胎壓主要隨絕對溫度變化，不直接按騎乘者重量倍數改變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-32": {
    encouragement: "安全帶和氣囊不是讓動量變化消失，而是把停下來的時間拉長、接觸面積加大，減少受傷。",
    keyIdea: "相同動量改變下，延長停止時間可降低平均力；增加接觸面積可降低壓力。",
    steps: [
      "乘客從高速降到停止，動量改變量大致固定。",
      "由平均力F＝Δp/Δt，停止時間越長，平均力越小。",
      "安全帶需有適當伸縮，氣囊也需可壓縮，才能延長減速時間。",
      "較寬安全帶與氣囊可分散受力，降低局部壓力。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣囊若太難壓縮，停止時間較短、作用力可能較大，不是越硬越安全。" },
      B: { verdict: "incorrect", reason: "安全帶主要負責把乘客約束在座位；氣囊主要緩衝頭胸部碰撞，不能取代安全帶。" },
      C: { verdict: "correct", reason: "安全帶適度伸長可增加乘客停止時間，依F＝Δp/Δt降低平均衝擊力。" },
      D: { verdict: "incorrect", reason: "安全帶越窄，相同作用力下壓力越大，更容易造成局部傷害。" }
    },
    takeaway: "汽車安全配備的兩招：延長碰撞時間以減力，擴大受力面積以減壓。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
