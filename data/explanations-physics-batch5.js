(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-103-34": {
    encouragement: "科學史配對不用全部背，抓住四位關鍵人物：厄斯特、法拉第、馬克士威、赫茲。",
    keyIdea: "馬克士威從理論預測電磁波，並推得它的速率等於光速。",
    steps: [
      "厄斯特先發現電流能產生磁場。",
      "法拉第發現變動磁場能產生感應電流。",
      "馬克士威整理電磁理論，預測電磁波存在，並由理論算出其傳播速率。",
      "赫茲後來用實驗產生並偵測電磁波。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第一位發現電磁感應的是法拉第，不是馬克士威。" },
      B: { verdict: "incorrect", reason: "第一位發現電流磁效應的是厄斯特，不是馬克士威。" },
      C: { verdict: "correct", reason: "馬克士威由電磁理論預測變動電場與磁場能以電磁波形式傳播。" },
      D: { verdict: "incorrect", reason: "以實驗證實電磁波存在的是赫茲；馬克士威的貢獻主要是理論預測。" },
      E: { verdict: "correct", reason: "馬克士威由方程式導出電磁波傳播速率，並發現其數值等於光速。" }
    },
    takeaway: "厄斯特看見電生磁、法拉第看見磁生電、馬克士威預測電磁波、赫茲實驗證實。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-35": {
    encouragement: "牛頓微粒說能解釋光線直進和反射，但遇到需要波動觀念或錯估介質中光速的現象就卡住了。",
    keyIdea: "薄膜色彩來自干涉；牛頓微粒說也錯誤預測光進入玻璃後會變快。",
    steps: [
      "針孔成像、影子與凸面鏡成像，都可用光線直進和反射描述。",
      "肥皂泡色彩來自薄膜前後表面反射光的干涉，需要波動觀念。",
      "牛頓微粒說雖能設法描述折射方向，卻預測光進入較密介質會加速。",
      "實際上光由空氣進玻璃會減速，因此 E 所述完整現象無法由原微粒說正確解釋。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "針孔成像可由光沿直線傳播解釋，符合牛頓微粒說可處理的範圍。" },
      B: { verdict: "correct", reason: "肥皂泡絢麗色彩來自薄膜干涉，是波動現象，古典微粒說無法解釋。" },
      C: { verdict: "incorrect", reason: "明顯影子源自光線直進，微粒沿直線運動的想法可以解釋。" },
      D: { verdict: "incorrect", reason: "凸面鏡擴大視野可由光的反射與幾何光線解釋。" },
      E: { verdict: "correct", reason: "牛頓微粒說對折射介質中光速的預測與實測相反，無法正確解釋進玻璃後減速。" }
    },
    takeaway: "薄膜干涉顯示光的波動性；光進玻璃會減速，也是舊微粒說的重要難題。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-40": {
    encouragement: "電磁波不像聲音要靠空氣，它自己帶著互相垂直的電場與磁場，就能在真空前進。",
    keyIdea: "電磁波不需介質；電場、磁場與傳播方向三者互相垂直。",
    steps: [
      "電磁波是隨時間變化的電場與磁場共同傳播。",
      "它能通過真空，所以不需要空氣或其他物質介質。",
      "電場振盪方向垂直於傳播方向。",
      "磁場也垂直於傳播方向，並與電場互相垂直。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "光、無線電波等電磁波都能在真空傳播，不需要物質介質。" },
      B: { verdict: "correct", reason: "電磁波是橫波，電場振盪方向與波的傳播方向垂直。" },
      C: { verdict: "incorrect", reason: "磁場振盪方向也與傳播方向垂直，不是平行。" },
      D: { verdict: "incorrect", reason: "電磁波沒有必須振動的物質介質，因此不能用「介質振動方向」描述。" },
      E: { verdict: "incorrect", reason: "電磁波不靠介質振動傳遞，這個平行關係沒有適用對象。" }
    },
    takeaway: "電磁波三垂直：電場垂直磁場，兩者也都垂直傳播方向。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-22": {
    encouragement: "光與聲音都會繞射，但聲音波長大得多，遇到樹木間隙時更容易明顯繞過去。",
    keyIdea: "障礙物或開口尺度接近波長時，繞射最明顯。",
    steps: [
      "樹木擋住視線，代表可見光大致沿直線前進，繞射不明顯。",
      "人的語音波長約為數十公分到數公尺，和樹木間距較接近。",
      "聲波因此能繞過樹幹、穿過林木間隙到達聽者。",
      "所以看不見人仍可聽見聲音。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光速遠大於聲速；看不見人不是因聲音比光更快。" },
      B: { verdict: "incorrect", reason: "關鍵是聲波繞射，不是聲音能量一定比光強或直接穿透樹木。" },
      C: { verdict: "correct", reason: "語音波長與林木間距尺度相近，容易產生明顯繞射而繞過障礙。" },
      D: { verdict: "incorrect", reason: "聲波頻率遠低於可見光，且是否到達也不是由所謂機率決定。" },
      E: { verdict: "incorrect", reason: "聲波波長其實比可見光長很多；長波較容易對林木尺度產生繞射。" }
    },
    takeaway: "繞射是否明顯，要比較波長和障礙物或開口的尺度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-26": {
    encouragement: "微波爐要同時滿足兩件事：容器不能是金屬，食物最好含有能吸收微波的水分。",
    keyIdea: "含水食物能有效吸收微波；紙容器可讓微波通過，金屬容器則不適合。",
    steps: [
      "微波使食物中的極性分子，尤其水分子，隨電場變化而運動並產熱。",
      "咖啡含大量水，能有效吸收微波。",
      "紙杯通常可讓微波穿過，不會像金屬反射微波或產生放電危險。",
      "乾燥香菇與麵粉水分少，加熱效果較差。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鋁罐是金屬，會反射微波並可能在尖角處放電，不適合放進微波爐。" },
      B: { verdict: "incorrect", reason: "紙盒可用，但乾燥香菇含水量少，不是五項中最容易以微波加熱者。" },
      C: { verdict: "incorrect", reason: "茶水含水，但不鏽鋼杯是金屬，會阻擋微波並可能造成危險。" },
      D: { verdict: "correct", reason: "咖啡含大量水可吸收微波，紙杯又能讓微波通過，是最合適組合。" },
      E: { verdict: "incorrect", reason: "塑膠盒若材質合格或許可用，但乾燥麵粉水分少，微波加熱效率較差。" }
    },
    takeaway: "微波加熱首選「含水食物＋非金屬耐熱容器」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-33": {
    encouragement: "原子核要穩定，靠的是核子彼此間的強力；中子雖不帶電，仍能和其他核子互相吸引。",
    keyIdea: "質子、 中子都是核子，質子—質子、質子—中子、中子—中子間都有強力。",
    steps: [
      "質子帶正電，質子間的電磁力是排斥，不能用來穩定原子核。",
      "中子不帶電，因此質子與中子間沒有一般庫侖靜電吸引。",
      "強力會作用在核子之間，包括三種核子配對。",
      "弱力主要參與某些粒子衰變，不是束縛原子核的主要力量。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "質子同帶正電，彼此的電磁力是排斥，反而不利於原子核穩定。" },
      B: { verdict: "incorrect", reason: "中子不帶淨電荷，質子與中子間不是靠庫侖電磁力束縛。" },
      C: { verdict: "correct", reason: "兩個質子都是核子，在核內短距離會有吸引性的強作用。" },
      D: { verdict: "correct", reason: "質子與中子之間有強作用，是原子核能束縛的重要原因。" },
      E: { verdict: "correct", reason: "中子與中子同為核子，彼此也有強作用。" },
      F: { verdict: "incorrect", reason: "弱作用可造成 β 衰變，但不是把中子彼此束縛成穩定原子核的主要力量。" }
    },
    takeaway: "強力不看核子是否帶電：三種核子配對之間都存在。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-34": {
    encouragement: "這題不用補充新聞背景，只要依文章判讀「尚待確認、不帶電、支持標準模型」三個明確資訊。",
    keyIdea: "依題文，證實希格斯玻色子可支持標準模型，並解釋某些基本粒子如何獲得質量。",
    steps: [
      "文章說當時探測到「極可能」是希格斯的新粒子，仍有待確認。",
      "希格斯假說認為某些基本粒子和希格斯場交互作用而獲得質量。",
      "若實驗確認希格斯玻色子存在，就能支持此假說與標準模型。",
      "文中也明說希格斯玻色子不帶電荷。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "依文章當時資訊，新粒子仍有待確認，不能說已被確認。" },
      B: { verdict: "incorrect", reason: "希格斯玻色子是標準模型的預測，不是題文所說由相對論必然預測。" },
      C: { verdict: "correct", reason: "題文指出希格斯場與粒子交互作用，可解釋某些基本粒子為何具有質量。" },
      D: { verdict: "correct", reason: "文章明說若經實驗證實希格斯玻色子存在，就可支持標準模型理論。" },
      E: { verdict: "incorrect", reason: "題文指出希格斯玻色子不帶電荷，此選項說它帶有電量，和文章相反。" }
    },
    takeaway: "閱讀題以本文證據作答：尚待確認、不帶電、能支持標準模型與質量來源解釋。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-51": {
    encouragement: "非彈性碰撞不守恆動能，但光滑水平面仍守恆總動量；把向右設正就能一行算出。",
    keyIdea: "碰撞前後總動量守恆：M(2.0)＝M(−0.50)＋4M v。",
    steps: [
      "以向右為正，碰撞前總動量為 2.0M。",
      "碰撞後小質點 M 反彈向左，動量是 −0.50M。",
      "設 4M 質點向右速率為 v，動量守恆得 2.0M＝−0.50M＋4Mv。",
      "整理得 4v＝2.5，所以 v＝0.625 m/s，約為 0.63 m/s。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若 4M 質點仍靜止，碰撞後總動量會是向左的 −0.50M，不守恆。" },
      B: { verdict: "incorrect", reason: "0.38 m/s 代回後的總動量不足 2.0M，無法守恆。" },
      C: { verdict: "correct", reason: "由 2.0＝−0.50＋4v 得 v＝0.625 m/s，四捨五入為 0.63 m/s。" },
      D: { verdict: "incorrect", reason: "0.94 m/s 會使碰撞後總動量大於碰撞前。" },
      E: { verdict: "incorrect", reason: "2.5 m/s 是把 2.5M 的待補動量直接當速率，漏除以質量 4M。" }
    },
    takeaway: "方向要帶正負號；非彈性碰撞仍可用總動量守恆。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-52": {
    encouragement: "火星不是地球衛星，而是繞太陽的外行星；它離太陽較遠，所以公轉一圈也較久。",
    keyIdea: "火星以橢圓軌道繞太陽，軌道半徑大於地球，公轉週期約 1.88 地球年。",
    steps: [
      "火星和地球一樣是太陽的行星，不是地球衛星。",
      "火星軌道位於地球軌道外側，距太陽通常更遠。",
      "依克卜勒第三定律，繞同一顆太陽時，軌道越大的行星週期越長。",
      "因此火星公轉一圈超過一個地球年。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "月球是地球衛星，火星則是獨立繞太陽運行的行星。" },
      B: { verdict: "incorrect", reason: "火星位於地球軌道外側，比地球離太陽更遠，不是更靠近太陽。" },
      C: { verdict: "incorrect", reason: "火星公轉週期約 1.88 地球年，並不和地球相同。" },
      D: { verdict: "incorrect", reason: "晝夜主要來自行星自轉，是否擁有衛星不是形成晝夜的原因。" },
      E: { verdict: "correct", reason: "火星沿橢圓軌道繞太陽，軌道較大，因此公轉週期超過一個地球年。" }
    },
    takeaway: "晝夜看自轉，年長看公轉；火星軌道在地球外側，所以火星年更長。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-22": {
    encouragement: "高空彈跳中能量會在位能與動能間交換，阻力則把一部分力學能變成熱；熱不會自己完整變回有方向的運動。",
    keyIdea: "重力位能、彈性位能與動能可互換；阻力耗散的熱能不會自發轉回整體動能。",
    steps: [
      "下落時重力位能減少並轉成動能。",
      "繩索伸長後，動能與重力位能可轉成彈性位能。",
      "反彈上升時，彈性位能可再轉成動能與重力位能。",
      "空氣阻力與繩內摩擦把部分力學能變成熱，熱不會自發集中轉回跳者動能。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "繩索回縮可把彈性位能轉成向上的動能，之後再增加重力位能，這種轉換可能發生。" },
      B: { verdict: "incorrect", reason: "伸長的繩索回縮會拉動彈跳者，彈性位能可轉成動能。" },
      C: { verdict: "incorrect", reason: "彈跳者下落加速時，重力位能會轉成動能。" },
      D: { verdict: "incorrect", reason: "彈跳者向上運動時速度降低，動能可轉成重力位能。" },
      E: { verdict: "correct", reason: "阻力造成的熱是耗散能量，不會自發、有方向地重新轉成彈跳者整體動能，最不可能發生。" }
    },
    takeaway: "阻力的作用是把有用的力學能分散成熱，使每次反彈高度逐漸降低。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-23": {
    encouragement: "兩粒子質量不同、電量不同都不影響第三定律：彼此施力永遠等大反向。",
    keyIdea: "庫侖力是一對作用力與反作用力，質子與氦核所受力量值相同。",
    steps: [
      "質子和氦原子核彼此以靜電力作用。",
      "庫侖定律算出的同一對粒子作用力，使用相同電量乘積與距離。",
      "依牛頓第三定律，質子推氦核與氦核推質子的力大小相等、方向相反。",
      "所以質子受力為 F 時，氦核受力量值也是 F。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氦核質量是 4 倍只會影響加速度，不會使這一對作用力縮成 F/4。" },
      B: { verdict: "incorrect", reason: "氦核電量是 2 倍已同時出現在彼此的庫侖力中，不會讓其中一方只受 F/2。" },
      C: { verdict: "correct", reason: "兩者互施的靜電力是一對作用力與反作用力，量值同為 F。" },
      D: { verdict: "incorrect", reason: "氦核不會因帶 2 倍電荷就受到質子所受力的 2 倍；同一對交互作用力等大。" },
      E: { verdict: "incorrect", reason: "質量 4 倍不代表受力 4 倍；它代表在同樣力下加速度較小。" }
    },
    takeaway: "作用力看交互作用，質量影響的是 a＝F/m 中的加速度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-24": {
    encouragement: "波跨介質時有一個東西由波源鎖定不變，那就是頻率；速率改變後，波長才跟著變。",
    keyIdea: "聲波由空氣進水時頻率不變，水中聲速較大，因此波長增加。",
    steps: [
      "教練聲帶振動決定聲音的頻率。",
      "聲波穿過空氣與水的界面時，振動必須連續，所以頻率不變。",
      "聲速在水中比空氣中大。",
      "由 v＝fλ，頻率不變而速率增加，水中的波長也變長。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "跨界面會有部分能量反射，不能直接斷定水中聲音強度一定比空氣中強。" },
      B: { verdict: "correct", reason: "聲音頻率由聲源決定，通過介質界面時保持不變。" },
      C: { verdict: "incorrect", reason: "聲音在水中的傳播速率通常比空氣中大，不是較小。" },
      D: { verdict: "incorrect", reason: "頻率不變但速率增加，由 λ＝v/f 可知水中波長會變長。" },
      E: { verdict: "incorrect", reason: "若不是垂直入射，聲速改變會造成折射，方向不一定相同。" }
    },
    takeaway: "波跨介質：頻率不變；速率與波長依 v＝fλ 一起調整。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-25": {
    encouragement: "太空幾乎沒有物質，傳導和對流都缺少幫手；還能把熱送走的主要方式只剩輻射。",
    keyIdea: "熱輻射可在真空傳播；熱傳導與對流都需要物質。",
    steps: [
      "傳導需要粒子碰撞或晶格振動，必須有物質接觸。",
      "對流需要液體或氣體整體流動。",
      "太空近似真空，缺乏足夠物質來進行傳導與對流。",
      "人體仍會發出紅外線電磁波而散熱，所以太空衣主要防範輻射熱交換。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "太空近似真空，外界沒有足夠物質與太空人接觸來進行主要熱傳導。" },
      B: { verdict: "correct", reason: "人體會以紅外線輻射放熱，而電磁輻射可穿過真空，是主要散熱方式。" },
      C: { verdict: "incorrect", reason: "對流需要氣體或液體流動，真空中無法形成外部對流。" },
      D: { verdict: "incorrect", reason: "現代物理不以「熱質」流動解釋熱傳播。" },
      E: { verdict: "incorrect", reason: "傳導與對流在近真空太空都不是主要對外散熱方式。" }
    },
    takeaway: "真空中沒有傳導、對流的介質，但電磁輻射仍能傳熱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-28": {
    encouragement: "輸電損耗題的固定路線：先看變壓器讓電壓怎麼變，再用功率固定求電流，最後平方算熱損。",
    keyIdea: "副線圈圈數減半使輸電電壓減半；定功率下電流加倍，I²R 損耗變四倍。",
    steps: [
      "理想變壓器電壓比等於圈數比，副線圈由 200 匝比例降為 100 匝比例，輸出電壓減半。",
      "輸送功率 P＝VI 保持不變，電壓減半時，電流必須變為 2 倍。",
      "傳輸線熱損功率為 P損＝I²R。",
      "電流變 2 倍，損耗變成 2²＝4 倍。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "輸電電壓減半使電流加倍，線損與 I² 成正比，所以變為 4 倍。" },
      B: { verdict: "incorrect", reason: "2 倍只算到電流的一次方，漏掉熱損功率中的平方。" },
      C: { verdict: "incorrect", reason: "電壓降低時為維持相同功率，電流增加，線損不會減成一半。" },
      D: { verdict: "incorrect", reason: "1/4 是高壓輸電時電流減半的情況；本題輸電電壓反而減半。" },
      E: { verdict: "incorrect", reason: "輸電線電阻雖不變，電流已加倍，因此熱損功率一定改變。" }
    },
    takeaway: "定功率輸電：電壓降一半 → 電流兩倍 → I²R 線損四倍。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-41": {
    encouragement: "液晶與電漿都能顯示彩色，也都要加電壓；差別在一個轉動液晶控光，一個讓氣體放電發光。",
    keyIdea: "液晶靠電場改變液晶排列控制背光；電漿靠氣體放電激發螢光材料。",
    steps: [
      "兩種電視都可搭配接收器處理空中電磁波訊號，也都用 RGB 像素組成彩色影像。",
      "液晶顯示器加電場改變液晶分子排列，調節背光通過量。",
      "電漿顯示器則在像素內使氣體放電，產生紫外線激發螢光材料。",
      "電子束撞擊螢光幕是傳統映像管原理，不是液晶與電漿共同原理。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；兩者接上適當接收系統，都可顯示由空中電磁波傳來的影像訊號。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；液晶需電場控制排列，電漿也需外加電壓使氣體放電。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；兩者都以紅、綠、藍子像素組合顯示多種色彩。" },
      D: { verdict: "correct", reason: "這是錯誤敘述；只有液晶以電場改變分子排列，電漿是氣體放電，不是液晶排列。" },
      E: { verdict: "correct", reason: "這是錯誤敘述；電子束撞擊螢光幕是映像管技術，不是液晶與電漿兩者共同原理。" }
    },
    takeaway: "液晶：轉動分子控背光；電漿：氣體放電激發螢光；電子束則屬傳統映像管。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-42": {
    encouragement: "要看色散，光源必須先含有多種顏色，再配上能讓不同波長偏折不同程度的透明元件。",
    keyIdea: "白光配三稜鏡或有曲面的玻璃，可分離出不同顏色；單色光無法展開成光譜。",
    steps: [
      "色散是不同波長的光因折射率不同而分開。",
      "太陽光與白熾燈光都含多種可見光波長。",
      "三稜鏡可明顯分光；透明玻璃彈珠的曲面也能折射並分離不同顏色。",
      "雷射與單色 LED 主要只有窄波長範圍，難以觀察多色光譜。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "雷射近似單色光，即使經凸透鏡折射也沒有多種顏色可分離。" },
      B: { verdict: "correct", reason: "太陽光是白光，三稜鏡對不同波長折射角不同，可清楚觀察色散。" },
      C: { verdict: "incorrect", reason: "綠光雷射近似單色，凹透鏡只能使光發散，不能形成多色色散。" },
      D: { verdict: "correct", reason: "白熾燈含連續多色光，透明玻璃彈珠的曲面折射可使不同色光分離。" },
      E: { verdict: "incorrect", reason: "紅色 LED 波長範圍窄，透明玻璃塊也不利於把多色光展開，因此不適合觀察色散。" }
    },
    takeaway: "色散實驗要「多色光源＋能產生波長差異折射的元件」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-67": {
    encouragement: "跳遠離地後就是斜拋：水平方向等速、鉛直方向受固定重力加速度，合起來是等加速度運動。",
    keyIdea: "忽略空氣阻力時只受恆定重力，因此加速度固定；同高度起落的速率量值相同。",
    steps: [
      "起跳後到落地前只受重力，重力加速度大小與方向近似固定向下。",
      "因此速度會持續改變，但加速度保持不變，屬等加速度運動。",
      "起跳點和落地點同高，忽略阻力時力學能守恆。",
      "兩點重力位能相同，所以動能與速率也相同。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鉛直速度受重力持續改變，整體速度向量不會保持不變。" },
      B: { verdict: "correct", reason: "只受固定向下的重力，質心加速度恆為 g，屬等加速度運動。" },
      C: { verdict: "incorrect", reason: "跳遠軌跡近似拋物線，不是圓周運動。" },
      D: { verdict: "incorrect", reason: "最高點鉛直速度為零，速率通常最小，不是最大。" },
      E: { verdict: "correct", reason: "起跳與落地同高且無阻力，力學能守恆，所以落地前速率等於起跳時速率。" }
    },
    takeaway: "斜拋只受重力時是等加速度運動；回到原高度時，速率回到原來大小。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-25": {
    encouragement: "耳溫槍內放的是紅外線感測器，答案其實已藏在器材名稱裡：它接收的是熱輻射。",
    keyIdea: "耳膜會發出與溫度相關的紅外線，耳溫槍藉接收輻射估計溫度。",
    steps: [
      "任何高於絕對零度的物體都會發出熱輻射。",
      "人體溫度下的主要熱輻射落在紅外線範圍。",
      "耳溫槍探測耳膜發出的紅外線強度。",
      "儀器再依輻射訊號換算耳溫，不必靠耳膜直接接觸探頭。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "現代熱學沒有熱質流動的說法，耳溫槍也不是收集某種熱物質。" },
      B: { verdict: "correct", reason: "耳膜發出的紅外線以電磁輻射傳到感測器，儀器據此估算溫度。" },
      C: { verdict: "incorrect", reason: "空氣導熱慢，且題目特別指出使用紅外線元件，主要原理不是空氣傳導。" },
      D: { verdict: "incorrect", reason: "探頭附近空氣對流不是紅外線耳溫槍快速測溫的主要依據。" },
      E: { verdict: "incorrect", reason: "探測端不需直接碰到耳膜，測量主要不是皮膚接觸傳導。" }
    },
    takeaway: "非接觸式溫度計多半接收紅外線熱輻射。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-26": {
    encouragement: "平靜水面像一整面鏡子；海浪把鏡子切成許多朝向不同的小面，反射光就散開了。",
    keyIdea: "平滑表面產生規則反射形成清楚像；粗糙或起伏表面產生漫反射。",
    steps: [
      "平靜湖面的各處法線方向近似一致，反射光有規律，可形成倒影。",
      "有浪海面的每一小塊表面傾斜方向不同。",
      "依反射定律，各小面把光反射到不同方向。",
      "反射光分散後無法形成清楚影像，這就是漫反射。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "看不見倒影的主因是表面方向混亂造成漫反射，不是不同色光分開的色散。" },
      B: { verdict: "incorrect", reason: "海水含鹽會略改變折射率，但岸邊倒影消失的關鍵是海面不平。" },
      C: { verdict: "correct", reason: "波浪使各處表面朝向不同，反射光散向各方，無法形成清楚倒影。" },
      D: { verdict: "incorrect", reason: "由空氣看海面倒影不是靠全反射，且鹽分造成的折射率差不是主要原因。" },
      E: { verdict: "incorrect", reason: "海面大小不會使影像全部透射；只要表面平滑仍可能看見反射像。" }
    },
    takeaway: "能不能成清楚倒影，看表面是否平滑，不是只看材料是不是水。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-40": {
    encouragement: "聲波前進時，空氣分子只在原位置附近前後振動；傳出去的是擾動與能量，不是整群空氣。",
    keyIdea: "空氣中的聲波是縱波，分子沿傳播方向來回振動，形成週期性疏密與壓力變化。",
    steps: [
      "聲源振動推擠附近空氣，造成壓縮與稀疏區。",
      "每個空氣分子只在平衡位置附近來回振動，不會一路跟著聲音前進。",
      "分子振動方向和聲波傳播方向平行，因此聲波是縱波。",
      "壓縮、稀疏交替通過，使空氣壓力與密度週期性變化。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聲波能傳遞能量；它不把介質整體搬走，但選項說不能傳播能量是錯的。" },
      B: { verdict: "incorrect", reason: "空氣分子只在原位置附近振動，不會隨聲波一直往前移動。" },
      C: { verdict: "correct", reason: "空氣中的聲波是縱波，分子沿著聲波傳播方向前後來回振動。" },
      D: { verdict: "incorrect", reason: "與傳播方向垂直的振動屬橫波特徵，不是空氣聲波的主要振動方式。" },
      E: { verdict: "correct", reason: "聲波的壓縮與稀疏使通過處的空氣壓力、密度都呈週期性改變。" }
    },
    takeaway: "聲波傳能不搬空氣；空氣分子沿傳播方向來回振動，形成疏密波。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
