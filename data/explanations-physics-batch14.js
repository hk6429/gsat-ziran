(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-95-65": {
    encouragement: "壓力乘上每秒流過的體積，就是推動血液所需的功率。",
    keyIdea: "流量Q＝Av，流體功率P＝壓力差×體積流率。",
    steps: ["血液體積流率Q＝5.0×10⁻⁴×0.20＝1.0×10⁻⁴ m³/s。", "功率P＝12000×1.0×10⁻⁴＝1.2 W。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.20是題目給的流速，不是壓力作功的功率。" },
      B: { verdict: "correct", reason: "壓力乘體積流率得12000×10⁻⁴＝1.2 W。" },
      C: { verdict: "incorrect", reason: "6.0 W沒有正確乘上血管截面積所決定的流量。" },
      D: { verdict: "incorrect", reason: "2400把壓力與流速直接相乘，漏掉截面積。" }
    },
    takeaway: "流體輸送功率可用P＝ΔpAv快速計算。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-95-66": {
    encouragement: "血液會流動並把熱帶到全身，這就是流體的對流傳熱。",
    keyIdea: "物質整體移動並攜帶熱量，稱為對流。",
    steps: ["熱交換器先改變流經其中血液的溫度。", "血液循環把較冷或較熱的血液送到各處。", "熱量主要隨流體整體移動，因此是對流。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "輻射不需要血液循環，並非題述主要機制。" },
      B: { verdict: "incorrect", reason: "傳導是相鄰粒子間傳熱，不能描述血液整體流動。" },
      C: { verdict: "correct", reason: "循環血液攜帶熱量移動，正是對流傳熱。" },
      D: { verdict: "incorrect", reason: "散射描述波改變方向，不是熱量傳播方式。" }
    },
    takeaway: "液體或氣體靠整體流動搬運熱量，就是對流。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-95-68": {
    encouragement: "把人體近似成60公斤的水，用mcΔT算熱量，再換成度數。",
    keyIdea: "一度電＝3.6×10⁶ J；人體升溫約20°C需約5×10⁶ J。",
    steps: ["由圖讀得15至16時約升溫20°C。", "Q≈60×4200×20≈5.0×10⁶ J。", "換算電能為5.0×10⁶÷3.6×10⁶≈1.4度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1400度比人體升溫所需能量大約千倍。" },
      B: { verdict: "incorrect", reason: "70度仍遠高於mcΔT換算所得。" },
      C: { verdict: "correct", reason: "約5.0×10⁶ J換算後約為1.4度電。" },
      D: { verdict: "incorrect", reason: "0.33度只能提供約1.2×10⁶ J，不足以升溫。" },
      E: { verdict: "incorrect", reason: "0.07度能量更小，與60公斤人體升溫不符。" }
    },
    takeaway: "焦耳換度數時，將能量除以3.6×10⁶。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-96-17": {
    encouragement: "在還沒熔化的斜線區，用熱量除以質量與溫升就能求比熱。",
    keyIdea: "定功率加熱時Q＝Pt＝mcΔT。",
    steps: ["正式圖中前4分鐘固體由20°C升到820°C，ΔT約800 K。", "吸熱Q＝200×240＝48000 J。", "c＝48000÷(0.1×800)＝600 J/(kg·K)。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10遠低於由加熱曲線斜率算得的比熱。" },
      B: { verdict: "correct", reason: "代入Pt＝mcΔT可得比熱約600 J/(kg·K)。" },
      C: { verdict: "incorrect", reason: "1000會對應較小溫升，與正式曲線不符。" },
      D: { verdict: "incorrect", reason: "4800是把質量或加熱時間單位換算錯誤的結果。" }
    },
    takeaway: "分鐘要先換成秒，質量公克也要換成公斤。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-96-43": {
    encouragement: "靜摩擦會跟著外力增加，直到最大值；開始滑動後動摩擦較小且近似固定。",
    keyIdea: "O到P物體靜止，P為最大靜摩擦；Q到R外力增加而動摩擦固定，故加速度增加。",
    steps: ["O到P摩擦力等於外力，合力為零，物體保持靜止。", "P點是靜摩擦力可達的最大值。", "滑動後摩擦力降為較小的動摩擦力。", "Q到R外力增大而動摩擦近似不變，所以合力與加速度增加。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "小外力會被靜摩擦平衡，物體不會立即運動。" },
      B: { verdict: "correct", reason: "O到P合力為零，物體維持靜止。" },
      C: { verdict: "correct", reason: "P點對應最大靜摩擦力。" },
      D: { verdict: "incorrect", reason: "P點物體仍靜止，合力與加速度為零。" },
      E: { verdict: "correct", reason: "Q到R外力增大而動摩擦固定，加速度愈來愈大。" }
    },
    takeaway: "靜摩擦不是固定值，而是會配合外力直到上限。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-100-48": {
    encouragement: "把抽水看成把一大桶水抬高，先算五小時共有多少電能，再用位能反推水量。",
    keyIdea: "抽蓄水力把電能轉成重力位能，使用 Pt＝ρVgh。",
    steps: ["10萬瓩＝1.0×10⁸ W，5小時＝1.8×10⁴ s。", "可用電能E＝Pt＝1.8×10¹² J。", "明潭上下池水面落差約400 m，所以V＝E/(ρgh)＝1.8×10¹²÷(1000×10×400)≈4.5×10⁵ m³。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁴ m³太少，代回ρVgh只需約4×10¹⁰ J。" },
      B: { verdict: "correct", reason: "計算得到約4.5×10⁵ m³，最接近5×10⁵ m³。" },
      C: { verdict: "incorrect", reason: "5×10⁸ m³比計算值大約一千倍。" },
      D: { verdict: "incorrect", reason: "10⁹ m³所需位能遠超過五小時可提供的電能。" },
      E: { verdict: "incorrect", reason: "2×10¹¹ m³更不符合能量守恆的數量級。" }
    },
    takeaway: "抽水量可用V＝Pt/(ρgh)估算，時間記得換成秒。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-26": {
    encouragement: "同方向電流的線圈就像兩塊相對的磁鐵，彼此會拉近。",
    keyIdea: "同軸圓線圈通同方向電流時，相對兩面形成異名磁極，因此互相吸引。",
    steps: ["先用右手定則判斷三線圈的磁場方向相同。", "相鄰線圈彼此相對的兩面是異名磁極。", "所以甲、丙都受到乙線圈指向乙的吸引力。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、丙與乙的電流方向相同，兩側都應吸引，不會一吸一斥。" },
      B: { verdict: "incorrect", reason: "甲也應受到乙吸引，不是排斥。" },
      C: { verdict: "incorrect", reason: "同方向的平行電流彼此吸引，並非兩側都排斥。" },
      D: { verdict: "correct", reason: "甲與丙都和乙通同方向電流，因此兩者均受乙吸引。" },
      E: { verdict: "incorrect", reason: "載流線圈會產生磁場並彼此施力，不是沒有作用。" }
    },
    takeaway: "判斷線圈磁力時，可先記住同方向的平行電流互相吸引。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-27": {
    encouragement: "變壓器只要把電壓比和圈數比排成同一方向，就能一步算出。",
    keyIdea: "理想變壓器滿足Vs/Vp＝Ns/Np。",
    steps: ["主線圈電壓Vp＝6000 V，圈數比Np:Ns＝3:200。", "Vs＝6000×200÷3＝400000 V＝4×10⁵ V。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4×10⁶ V比正確值大十倍，是指數讀錯。" },
      B: { verdict: "correct", reason: "副線圈電壓為4×10⁵ V，符合升壓變壓器的圈數比。" },
      C: { verdict: "incorrect", reason: "2×10⁴ V沒有依200/3的比例放大。" },
      D: { verdict: "incorrect", reason: "2×10³ V反而低於輸入電壓，與副線圈圈數較多不符。" },
      E: { verdict: "incorrect", reason: "90 V是把比例方向弄反且數值也不符。" }
    },
    takeaway: "副線圈圈數較多就是升壓；代公式前先用這點檢查答案方向。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-103-19": {
    encouragement: "行星靠近太陽時像溜滑梯滑到低處，位能降低、速度就會變快。",
    keyIdea: "行星繞太陽時力學能守恆，距太陽最近處速率與動能最大。",
    steps: ["太陽位在右焦點，不在橢圓中心。", "正式圖中甲點最靠近右焦點的太陽。", "距離最小時重力位能最低，轉成的動能最多，因此甲點動能最大。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲離太陽最近，依能量守恆其速率與動能最大。" },
      B: { verdict: "incorrect", reason: "乙離太陽比甲遠，動能較小。" },
      C: { verdict: "incorrect", reason: "丙不是近日點，速率不會最大。" },
      D: { verdict: "incorrect", reason: "丁與太陽的距離較大，動能低於甲。" },
      E: { verdict: "incorrect", reason: "戊接近遠日點，正是速率較慢的位置。" }
    },
    takeaway: "橢圓軌道先找焦點：近日點最快，遠日點最慢。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-103-63": {
    encouragement: "速度—時間圖下的面積就是距離，把三塊面積加起來即可。",
    keyIdea: "總路程等於速率—時間圖下的面積。",
    steps: ["前2秒加速區是三角形，面積＝2×2÷2＝2 m。", "最後4秒減速區也是三角形，面積＝4×2÷2＝4 m。", "等速區面積為2t₀，總路程12＝2＋2t₀＋4。", "解得t₀＝3.0 s。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "t₀＝2.5 s時總路程只有11 m。" },
      B: { verdict: "correct", reason: "t₀＝3.0 s時三區面積合計2＋6＋4＝12 m。" },
      C: { verdict: "incorrect", reason: "t₀＝3.5 s會得到13 m。" },
      D: { verdict: "incorrect", reason: "t₀＝4.0 s會得到14 m。" },
      E: { verdict: "incorrect", reason: "t₀＝4.5 s會得到15 m。" }
    },
    takeaway: "運動圖遇到距離，先想圖線下方的面積。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-103-66": {
    encouragement: "作用力與反作用力一定分別作用在兩個物體上，用這個規則逐對檢查最穩。",
    keyIdea: "第三定律力對大小相等、方向相反、作用在不同物體；靜止且細線無質量使各力量值相等。",
    steps: ["W₁是地球拉球，W₂是球拉地球，兩力成一對。", "T₁是線拉球，T₃是球拉線，兩力也成一對。", "球靜止使T₁＝W₁；細線質量可忽略且靜止，使T₁、T₂、T₃量值相同。", "因此五個力的量值都相等。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "T₁與T₂都是懸線對外物的力，不是同一交互作用的兩端。" },
      B: { verdict: "correct", reason: "W₁與W₂分別是地球拉球、球拉地球，互為作用與反作用。" },
      C: { verdict: "correct", reason: "T₁是線拉球，T₃是球拉線，正是一對第三定律力。" },
      D: { verdict: "incorrect", reason: "T₁與W₁都作用在金屬球上，只是平衡力，不是作用反作用力。" },
      E: { verdict: "correct", reason: "球與無質量細線都靜止，使所有列出的力量值相等。" }
    },
    takeaway: "同一物體上的兩個平衡力，不會互為作用力與反作用力。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-108-7": {
    encouragement: "原子光譜像每種原子的專屬條碼，也透露原子內能量不是連續變化。",
    keyIdea: "元素有特徵光譜；離散譜線是原子能階不連續的證據。",
    steps: ["不同元素的譜線位置組合不同，可以用來辨識元素，所以甲正確。", "物體顏色還受吸收、反射與多種光混合影響，不能只歸因於原子譜線，所以乙不完整。", "原子只放出特定能量的光子，表示能階是不連續的，所以丙正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "除了甲以外，丙的能階說法也正確。" },
      B: { verdict: "incorrect", reason: "乙把物體呈色原因過度簡化，而且甲、丙才正確。" },
      C: { verdict: "incorrect", reason: "甲的特徵光譜辨識法也正確，不只丙。" },
      D: { verdict: "correct", reason: "甲的元素條碼與丙的不連續能階都符合原子光譜概念。" },
      E: { verdict: "incorrect", reason: "乙並非完整正確，且漏掉正確的甲。" }
    },
    takeaway: "看到一條條分開的原子譜線，就要想到特徵光譜與量子化能階。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-83-35": {
    encouragement: "一顆水平射出、一顆直接落下，但垂直方向其實做同一件事。",
    keyIdea: "不計空氣阻力時，水平與垂直運動互不影響，兩球垂直加速度皆為g。",
    steps: ["兩球同高度、同時釋出，初始垂直速度都為零。", "質量不同不影響自由落體加速度，兩球垂直加速度都為g。", "落下同一高度所需時間相同，因此同時著地。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲路徑雖較長，但著地時間由相同的垂直落下運動決定。" },
      B: { verdict: "incorrect", reason: "甲有水平速度不會縮短垂直落下所需時間。" },
      C: { verdict: "incorrect", reason: "乙重力較大，但質量也較大，重力加速度仍相同。" },
      D: { verdict: "correct", reason: "兩球垂直初速與加速度相同，又落下同樣高度，所以同時著地。" }
    },
    takeaway: "水平拋射的著地時間只看垂直方向，不看水平速度與質量。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-83-68": {
    encouragement: "先用右手判正電荷，再記得β粒子帶負電，把方向反過來即可。",
    keyIdea: "磁力方向為q(v×B)；β⁻粒子帶負電。",
    steps: ["速度由南向北，磁場垂直向下。", "右手判斷正電荷的v×B會指向西。", "β⁻粒子帶負電，受力方向與正電荷相反，所以向東偏轉。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "負電β粒子的磁力方向與v×B相反，指向東。" },
      B: { verdict: "incorrect", reason: "西方是相同速度與磁場下正電荷的受力方向。" },
      C: { verdict: "incorrect", reason: "磁力必與磁場及速度垂直，不會沿磁場向下。" },
      D: { verdict: "incorrect", reason: "速度與磁場互相垂直，帶電粒子會受到磁力。" }
    },
    takeaway: "負電荷做完右手定則後，要把最後方向反轉。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-84-45": {
    encouragement: "米尺下落的20公分就是反應時間內的自由落體距離。",
    keyIdea: "由靜止自由落下使用h＝(1/2)gt²。",
    steps: ["將20 cm換成0.20 m。", "0.20＝(1/2)×10×t²，所以t²＝0.04。", "t＝0.20 s。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.02 s只能落下約0.002 m，遠少於20 cm。" },
      B: { verdict: "correct", reason: "代入自由落體公式可得反應時間0.2 s。" },
      C: { verdict: "incorrect", reason: "2 s會落下約20 m，不是20 cm。" },
      D: { verdict: "incorrect", reason: "20 s的落下距離更巨大，且把題目數字直接當時間。" }
    },
    takeaway: "長度先換成公尺，再用t＝√(2h/g)。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-84-47": {
    encouragement: "瓶裡的水沒有全流光，是因為瓶內上方壓力較小，外面的大氣幫忙托住水。",
    keyIdea: "倒立水瓶達平衡時，瓶內水面上方壓力低於外界大氣壓。",
    steps: ["水先流出一部分，瓶內上方形成低壓空間。", "瓶口處內外水壓平衡時，外界大氣壓配合水柱壓力托住瓶內的水。", "因此上方不是完全真空，而是壓力略小於大氣壓的空間。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "瓶中仍可能有少量空氣或水蒸氣，不能說是完全真空。" },
      B: { verdict: "correct", reason: "要支撐高於盤面的水柱，瓶內上方壓力必須小於大氣壓。" },
      C: { verdict: "incorrect", reason: "大氣壓與瓶內低壓能使水柱平衡，水不會立刻漏光。" }
    },
    takeaway: "倒立飲水器靠壓力差控制出水，不是靠真空把水吸住。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-85-43": {
    encouragement: "判斷第三定律力對時，只要問：另一個力是不是作用在另一個物體上？",
    keyIdea: "作用力與反作用力作用在不同物體；F、W、N都作用在木塊上。",
    steps: ["F是人對木塊的力，反作用力是木塊對人的力。", "W是地球對木塊的力，反作用力是木塊對地球的力。", "N是桌面對木塊的力，反作用力是木塊對桌面的力。", "所以F、W、N彼此都不是作用力與反作用力。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "F與W都作用在木塊上，來源也不同，不成第三定律力對。" },
      B: { verdict: "incorrect", reason: "F與N同樣都作用在木塊上，不是彼此的反作用力。" },
      C: { verdict: "incorrect", reason: "W與N是木塊鉛直方向可能的平衡力，不是作用反作用力。" },
      D: { verdict: "incorrect", reason: "三個力不可能同時彼此成對，且它們全作用在同一物體。" },
      E: { verdict: "correct", reason: "F、W、N各自的反作用力都作用在其他物體，未列在這三力中。" }
    },
    takeaway: "同一物體上的力可以平衡，但不會互為作用力與反作用力。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-91-57": {
    encouragement: "把豪雨想成鋪在整個集水寬度上的一層水，再集中倒進100公尺寬的水庫。",
    keyIdea: "每單位紙面深度的雨水體積守恆；45°山坡的水平寬度等於山高。",
    steps: ["兩座山的坡角都是45°、山高500 m，所以每側山坡的水平集水寬度為500 m。", "總集水寬度＝500＋100＋500＝1100 m。", "400 mm降雨量＝0.4 m，每單位紙面深度的雨水截面積＝0.4×1100＝440 m²。", "全部流入寬100 m的水庫，水位上升440÷100＝4.4 m，約4 m。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2 m只計入部分山坡集水，低估兩側流入水庫的雨水。" },
      B: { verdict: "correct", reason: "體積守恆算得水位約升4.4 m，最接近4 m。" },
      C: { verdict: "incorrect", reason: "降雨量按水平投影面積計算，不需再乘斜坡長的√2。" },
      D: { verdict: "incorrect", reason: "20 m比0.4×1100/100的結果大很多。" },
      E: { verdict: "incorrect", reason: "40 m相當於把公厘換公尺或集水寬度比例算錯。" }
    },
    takeaway: "降雨量乘水平集水面積得到水量，不能直接乘斜坡表面積。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-86-51": {
    encouragement: "忽略電池內部電阻後，燈泡兩端就是完整的1.1伏特。",
    keyIdea: "電阻消耗功率可用P＝V²/R。",
    steps: ["燈泡電阻R＝3.0 Ω，電池電壓V＝1.1 V。", "忽略溶液與鹽橋電阻，燈泡承受完整電壓。", "P＝1.1²÷3.0≈0.40 W。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3.3 W接近把電壓與電阻直接相乘，並非功率公式。" },
      B: { verdict: "incorrect", reason: "1.2是1.1²的近似，還沒有除以3.0 Ω。" },
      C: { verdict: "incorrect", reason: "1.1是電壓數值，不是燈泡功率。" },
      D: { verdict: "correct", reason: "P＝V²/R＝1.21/3.0≈0.40 W。" },
      E: { verdict: "incorrect", reason: "0.36不是依1.1 V與3.0 Ω算出的功率。" }
    },
    takeaway: "已知電壓與電阻求功率，直接用P＝V²/R最省步驟。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-86-52": {
    encouragement: "電池做大不等於每單位電荷得到更多能量，所以電動勢不會跟著尺寸放大。",
    keyIdea: "同種電極與相同電解質決定電池電動勢，電極面積與厚度不改變電動勢。",
    steps: ["鋅銅電池的電動勢由兩電極材料與化學反應決定。", "增加金屬片面積或厚度可影響可供反應量與內電阻，但不改變單位電荷獲得的能量。", "所以電動勢仍為1.1 V。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電動勢不會因幾何尺寸改變而降為0.28 V。" },
      B: { verdict: "incorrect", reason: "把尺寸加倍不會讓電動勢減半。" },
      C: { verdict: "correct", reason: "材料與電解質未變，電池電動勢仍是1.1 V。" },
      D: { verdict: "incorrect", reason: "電極變大不等於串聯兩顆電池，電壓不會加倍。" },
      E: { verdict: "incorrect", reason: "面積與厚度同時增加也不會把電動勢變成四倍。" }
    },
    takeaway: "電池電壓看材料組合；要提高電壓通常需把電池串聯。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-52": {
    encouragement: "相鄰彈簧圈的電流方向相同，像兩條同向平行電線，會互相吸引。",
    keyIdea: "同方向平行電流互相吸引，使通電彈簧各圈間距縮短。",
    steps: ["電流沿著螺旋彈簧前進，相鄰兩圈在對應位置的電流方向相同。", "同方向平行電流因磁效應互相吸引。", "各圈彼此拉近，因此間距縮短。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "通電後各圈產生磁場與磁力，間距會受影響。" },
      B: { verdict: "incorrect", reason: "造成明顯作用的是電流磁效應，不是把移動電荷當成靜電互斥。" },
      C: { verdict: "incorrect", reason: "雖然結果是縮短，但原因不是電荷靜電相吸。" },
      D: { verdict: "incorrect", reason: "磁效應造成相鄰同向電流吸引，不會使間距伸長。" },
      E: { verdict: "correct", reason: "相鄰圈的同向電流互吸，所以彈簧圈距縮短。" }
    },
    takeaway: "同向電流互吸、反向電流互斥，是判斷載流導線受力的好口訣。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-53": {
    encouragement: "電子要順利飛到螢幕，就要盡量不要在半路撞到空氣分子。",
    keyIdea: "映像管需維持低壓，減少電子束與氣體分子的碰撞與散射。",
    steps: ["陰極射線是高速電子束。", "若管內氣壓高，空氣分子多，電子較容易碰撞而偏離或失去能量。", "降低氣壓可增加電子平均自由路徑，使影像更清楚。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "增加空氣分子會增加碰撞，不會增加由燈絲放出的電子數。" },
      B: { verdict: "correct", reason: "降低氣壓能減少電子與空氣分子的碰撞，讓電子束較集中。" },
      C: { verdict: "incorrect", reason: "電子能量主要由加速電壓決定，不是由氣體壓力增強。" },
      D: { verdict: "incorrect", reason: "氣壓會影響碰撞次數，因此會影響映像效果。" }
    },
    takeaway: "需要粒子束直線前進的裝置，通常要抽成低壓或真空。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-54": {
    encouragement: "正式圖已把三圈與五圈標清楚，電壓照圈數比例放大即可。",
    keyIdea: "變壓器不改變頻率，輸出電壓與線圈匝數成正比。",
    steps: ["輸入端3圈、輸出端5圈，所以Vs/Vp＝5/3。", "Vs＝120×5/3＝200 V。", "變壓器輸出交流頻率仍與輸入相同，為60 Hz。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "變壓器不會把60 Hz改成100 Hz，且輸出電壓應升高。" },
      B: { verdict: "incorrect", reason: "頻率不會降為36 Hz，120 V也未反映匝數比。" },
      C: { verdict: "correct", reason: "頻率維持60 Hz，電壓依5/3倍升為200 V。" },
      D: { verdict: "incorrect", reason: "72 V是把3/5的降壓比例用反了。" },
      E: { verdict: "incorrect", reason: "頻率雖正確，但輸出圈數較多，電壓不會仍是120 V。" }
    },
    takeaway: "變壓器改電壓、不改頻率；圈數多的一側電壓高。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-56": {
    encouragement: "AM的名字就是振幅調變，環境雜訊若動到振幅，訊號就容易受干擾。",
    keyIdea: "AM以振幅承載資訊，FM以頻率承載資訊；電磁波在同一介質中的速率相同。",
    steps: ["AM與FM都是電磁波，在同一介質中傳播速率相同。", "許多環境干擾容易改變接收波的振幅。", "AM把資訊放在振幅上，因此較容易受這類干擾。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "AM與FM在相同介質中的電磁波速率相同。" },
      B: { verdict: "incorrect", reason: "FM也不會因調變方式不同而傳得比較快。" },
      C: { verdict: "correct", reason: "AM訊息由振幅變化承載，振幅雜訊會直接干擾訊號。" },
      D: { verdict: "incorrect", reason: "一般雜訊較常改變振幅，FM可用限制振幅方式減少影響。" },
      E: { verdict: "incorrect", reason: "AM承載資訊的是振幅，不是頻率。" }
    },
    takeaway: "AM看振幅，FM看頻率；調變方式不會改變電磁波本身的傳播速率。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-57": {
    encouragement: "按弦的位置會改變真正振動的弦長，弦愈短，音調愈高。",
    keyIdea: "同一條弦在張力近似相同時，振動長度愈短，頻率愈高。",
    steps: ["正式圖中乙點比甲點更靠近琴身的琴橋。", "手指按在乙處時，從按壓點到琴橋的有效弦長較短。", "弦長縮短使振動頻率增加，因此音調較高。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聲音在同一空氣中的傳播速率不因按弦位置而變。" },
      B: { verdict: "incorrect", reason: "乙處產生較高頻率，但空氣中的聲速仍相同。" },
      C: { verdict: "incorrect", reason: "甲處的有效弦長較長，音調較低。" },
      D: { verdict: "correct", reason: "按乙處使有效弦長較短，所以頻率與音調較高。" }
    },
    takeaway: "樂器按弦主要改變頻率與音調，不改變聲音在空氣中的速度。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-36": {
    encouragement: "水銀高度差就是額外壓力，先算前後氣體壓力，再用波以耳定律。",
    keyIdea: "定溫氣體滿足P₁V₁＝P₂V₂。",
    steps: ["正式裝置中氣體壓力高於大氣壓；起初P₁＝760＋380＝1140 mmHg。", "降低水銀槽後P₂＝760＋190＝950 mmHg。", "V₂/V₁＝P₁/P₂＝1140/950＝1.20，所以體積增加20%。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "壓力降低時體積應增加，不會減半。" },
      B: { verdict: "correct", reason: "由1140V＝950V₂可得V₂＝1.2V。" },
      C: { verdict: "incorrect", reason: "壓力比只有1.2，不是1.5。" },
      D: { verdict: "incorrect", reason: "壓力沒有減半，所以體積不會加倍。" },
      E: { verdict: "incorrect", reason: "定溫下壓力改變，體積會依反比改變。" }
    },
    takeaway: "開口式壓力計要先看哪邊水銀較高，才能判斷氣壓是加高度差還是減高度差。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-41": {
    encouragement: "光路可以倒著走，這個「可逆性」常能直接找出正確選項。",
    keyIdea: "光的折射路徑具有可逆性；頻率跨介面不變。",
    steps: ["題目已知光由水沿AO進入玻璃後沿OB前進。", "依光路可逆性，若光從B沿BO射回，必會由O沿OA折射。", "圖中光進玻璃時向法線偏，表示玻璃折射率較大、光速與波長較小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光由折射率較小的水進入較大的玻璃，不會產生全反射。" },
      B: { verdict: "correct", reason: "折射光路可逆，從BO入射會沿OA回到水中。" },
      C: { verdict: "incorrect", reason: "玻璃折射率較大，所以光在玻璃中較慢，在水中較快。" },
      D: { verdict: "incorrect", reason: "光跨越介面時頻率由光源決定，維持不變。" },
      E: { verdict: "incorrect", reason: "頻率不變但速率改變，因此波長也會改變。" }
    },
    takeaway: "折射題先用光路可逆性，再記住跨介面頻率不變。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-42": {
    encouragement: "中性金屬球一開始會因電荷重新分布而被吸引；碰到後帶同號電，就改成排斥。",
    keyIdea: "靜電感應造成先吸引，接觸導電後兩球帶同號電而排斥。",
    steps: ["帶電甲靠近中性乙時，乙內電荷重新分布，靠近甲的一側帶異號，因此乙被吸引。", "乙碰到甲後，電荷可在兩金屬球間移動。", "分開前兩球帶同號電，因此彼此排斥，乙離開甲。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "中性導體受感應後先被吸引，不是先排斥。" },
      B: { verdict: "incorrect", reason: "接觸後乙取得與甲同號的淨電荷，會被排斥離開。" },
      C: { verdict: "correct", reason: "感應使乙先被吸引，接觸帶同號電後再被排斥。" },
      D: { verdict: "incorrect", reason: "乙初始中性仍會因靜電感應受到吸引。" },
      E: { verdict: "incorrect", reason: "金屬球內自由電荷可移動，所以乙會受明顯靜電力。" }
    },
    takeaway: "中性導體也會被帶電體吸引；接觸後則要重新判斷淨電荷。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-90-75": {
    encouragement: "碰觸會真的交換電荷；只靠近再分開，電荷只是暫時重新分布。",
    keyIdea: "接觸導電會分配淨電荷；不接觸的靜電感應不改變孤立金屬球的總電量。",
    steps: ["X原本中性、Y帶正電；兩球碰觸時電子重新分配，分開後X帶正電。", "若只靠近不碰觸，X內部雖暫時電荷分離，但總電量仍為零。", "移開Y後電荷重新均勻，X仍不帶電。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "碰觸後兩球分享原有正淨電荷，X成為帶正電。" },
      B: { verdict: "incorrect", reason: "X不會在與正電Y接觸後得到負的淨電荷。" },
      C: { verdict: "incorrect", reason: "接觸提供電荷移動路徑，X分開後不再保持中性。" },
      D: { verdict: "incorrect", reason: "只靠近時沒有跨球電荷轉移，分開後X不會留下正電。" },
      E: { verdict: "incorrect", reason: "感應只使X內部暫時分離正負電，總電量不是負值。" },
      F: { verdict: "correct", reason: "未碰觸便沒有淨電荷轉移，移開Y後X仍不帶電。" }
    },
    takeaway: "是否接觸是關鍵：接觸可轉移淨電荷，只靠近通常只造成暫時感應。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-93-61": {
    encouragement: "先把每種燈的功率乘上發光效率，就能比較每顆實際發出多少光。",
    keyIdea: "光通量＝耗電功率×發光效率。",
    steps: ["15 W白熾燈泡的光通量＝15×8＝120 lm。", "每顆2000年白光LED的光通量＝0.07×15＝1.05 lm。", "需要顆數＝120÷1.05≈114.3，約115顆。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "35顆只能提供約36.8 lm，遠少於120 lm。" },
      B: { verdict: "incorrect", reason: "60顆約提供63 lm，仍只有目標的一半左右。" },
      C: { verdict: "incorrect", reason: "85顆約提供89.3 lm，不足以取代15 W白熾燈泡。" },
      D: { verdict: "correct", reason: "120÷1.05約為114.3，取整數約需115顆。" },
      E: { verdict: "incorrect", reason: "145顆會提供約152 lm，超過題目要求且不是最接近值。" }
    },
    takeaway: "效率的單位lm/W乘上功率W，就得到光通量lm。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-93-62": {
    encouragement: "只比較要被替換的白熾燈部分，再用兩種燈的效率比換算最清楚。",
    keyIdea: "相同照度下，耗電量與發光效率成反比。",
    steps: ["100 W白熾燈效率為15 lm/W，預期LED效率為45 lm/W，是三倍。", "相同光通量下，LED只需原用電量的1/3。", "原白熾燈用電6億度，改用LED需2億度，因此節省4億度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "效率提升三倍，不只節省1億度。" },
      B: { verdict: "incorrect", reason: "2億度是更換後所需用電，不是節省量。" },
      C: { verdict: "incorrect", reason: "節省量應由6億減2億，並非3億。" },
      D: { verdict: "correct", reason: "LED用電為6億÷3＝2億度，所以每年省4億度。" },
      E: { verdict: "incorrect", reason: "LED仍需2億度，不可能把原6億度只剩1億度而省5億。" }
    },
    takeaway: "題目說取代白熾燈，就只計算那6億度，不要把日光燈的12億度也換掉。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-94-48": {
    encouragement: "兩塊金屬的動能都變成熱；看速率平方，就能快速判斷溫升倍率。",
    keyIdea: "兩相同金屬塊對撞後，溫升ΔT與v²成正比，與兩塊同時放大的質量無關。",
    steps: ["原本總動能為2×(1/2)mv²＝mv²，吸熱總熱容量為2mc。", "若每塊質量變2m，動能與熱容量都變兩倍，溫升仍是ΔT。", "若速率變2v，總動能變四倍，而熱容量不變，所以溫升變4ΔT。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "每塊質量同時加倍時，動能與熱容量同比增加，溫升不變。" },
      B: { verdict: "incorrect", reason: "質量加倍不會使溫升加倍，因為吸收同樣每單位質量的能量。" },
      C: { verdict: "incorrect", reason: "速率加倍使動能變四倍，不是兩倍，因此溫升不是2ΔT。" },
      D: { verdict: "correct", reason: "動能與v²成正比，速率2v使溫升成為4ΔT。" }
    },
    takeaway: "碰撞轉熱的比例題，先抓住動能含有速度平方。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-95-28": {
    encouragement: "重力的力對要在物體與地球之間找，不要被天平平衡的畫面混淆。",
    keyIdea: "W甲是地球拉甲，G甲是甲拉地球，兩者互為作用力與反作用力。",
    steps: ["W甲作用在甲物體上，施力者是地球。", "G甲作用在地球上，施力者是甲物體。", "兩力來自同一個甲與地球的萬有引力交互作用，因此成一對。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "W甲與W乙分別作用在兩個物體，卻來自兩組不同的地球引力交互作用。" },
      B: { verdict: "incorrect", reason: "N甲與W甲都作用在甲物體上，是平衡力而不是第三定律力對。" },
      C: { verdict: "incorrect", reason: "N甲與N乙是天平分別作用於甲、乙的力，不是彼此的反作用力。" },
      D: { verdict: "correct", reason: "W甲是地球拉甲，G甲是甲拉地球，正好交換施力者與受力者。" }
    },
    takeaway: "第三定律力對可用「A拉B、B拉A」來辨認。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-95-51": {
    encouragement: "先把表中的P乘V，會發現都約等於0.50，圖形關係就清楚了。",
    keyIdea: "定溫氣體滿足PV為定值，因此P對V是反比曲線，P對1/V是過原點直線。",
    steps: ["表中1.00×0.50、2.50×0.20、5.00×0.10都約為0.50。", "所以P＝0.50/V，P對V應為下降的雙曲線，甲圖符合。", "令x＝1/V後P＝0.50x，P對1/V應為正比直線，丁圖符合。", "戊圖雖畫水平，但正式圖的PV值約畫在1.0，與資料的0.50不符。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲圖呈現V愈大、P依反比下降的曲線，位置也符合資料點。" },
      B: { verdict: "incorrect", reason: "乙圖把橫軸標成1/V，卻仍畫下降曲線，方向與P∝1/V相反。" },
      C: { verdict: "incorrect", reason: "丙圖的點列與1/V數值、比例直線關係不相符。" },
      D: { verdict: "correct", reason: "丁圖把P對1/V畫成通過原點附近的正比直線，符合表中資料。" },
      E: { verdict: "incorrect", reason: "資料的PV約為0.50 atm·L，正式戊圖水平值約1.0，數值不符。" }
    },
    takeaway: "圖形不只看形狀，也要核對座標軸與數值刻度。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-95-52": {
    encouragement: "外推到表格以外時，選直線關係通常比延伸彎曲線更可靠。",
    keyIdea: "P與1/V成正比，用丁圖的直線外推較穩定。",
    steps: ["定溫下PV≈0.50，所以P＝0.50×(1/V)。", "丁圖正是P對1/V的直線，容易延伸到較小壓力。", "令P＝0.5 atm可得1/V＝1，亦即V約1.0 L。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲圖是彎曲的P—V反比圖，往資料範圍外延伸較不易準確。" },
      B: { verdict: "incorrect", reason: "乙圖座標與點列關係本來就不符合實驗資料。" },
      C: { verdict: "incorrect", reason: "丙圖沒有正確呈現P與1/V的線性關係。" },
      D: { verdict: "correct", reason: "丁圖為P對1/V的正比直線，最適合用直線外推。" },
      E: { verdict: "incorrect", reason: "戊圖的縱軸是PV且正式數值畫錯，也不能直接讀出V。" }
    },
    takeaway: "把反比關係改畫成P對1/V的直線，能讓內插與外推更容易。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-97-3": {
    encouragement: "這題只要歐姆定律，溫度曲線是給下一題使用的。",
    keyIdea: "串聯電阻的電流I＝V/R。",
    steps: ["電源電壓V＝42 V，電阻R＝20 Ω。", "I＝42÷20＝2.1 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "依I＝V/R可得2.1 A。" },
      B: { verdict: "incorrect", reason: "4.2 A相當於使用10 Ω，與題目20 Ω不符。" },
      C: { verdict: "incorrect", reason: "20是電阻的歐姆數，不是電流。" },
      D: { verdict: "incorrect", reason: "42是電壓數值，不能直接當安培。" },
      E: { verdict: "incorrect", reason: "840是42×20的乘積，歐姆定律應相除。" }
    },
    takeaway: "已知電壓與電阻，電流就是電壓除以電阻。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-97-4": {
    encouragement: "加熱曲線的水平平臺就是熔化時間，這段電能全部拿去改變物態。",
    keyIdea: "熔化熱L＝Pt/m，電功率P＝VI。",
    steps: ["由前題I＝2.1 A，所以加熱功率P＝42×2.1＝88.2 W。", "正式圖中60°C熔化平臺約維持5分鐘，即300 s。", "熔化能量Q≈88.2×300＝26460 J≈6300 cal。", "L＝6300÷180＝35 cal/g。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "840 cal/g遠高於依平臺時間算出的熔化熱。" },
      B: { verdict: "correct", reason: "平臺約5分鐘的電能除以180 g，得到約35 cal/g。" },
      C: { verdict: "incorrect", reason: "20 cal/g對應的熔化時間太短，與曲線平臺不符。" },
      D: { verdict: "incorrect", reason: "10 cal/g只需約2分鐘，少於正式圖的平臺時間。" },
      E: { verdict: "incorrect", reason: "4.2是焦耳與卡的換算因子，不是熔化熱答案。" }
    },
    takeaway: "物態變化的水平線段看時間長度；焦耳換卡再除以質量。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-97-8": {
    encouragement: "電子帶負電，所以電子繞行方向與傳統電流方向相反。",
    keyIdea: "負電荷移動形成的傳統電流方向相反；右手握拳可判電流環的N極。",
    steps: ["正式圖中電子沿順時針方向運動。", "因電子帶負電，等效傳統電流方向為逆時針。", "右手手指沿逆時針電流彎曲，大拇指指向紙面外，因此N極朝紙面外。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電子雖順時針運動，但傳統電流方向要反轉成逆時針。" },
      B: { verdict: "incorrect", reason: "原子核帶正電、電子帶負電，兩者是異性電荷。" },
      C: { verdict: "correct", reason: "逆時針等效電流依右手定則產生朝紙面外的磁場，該側為N極。" },
      D: { verdict: "incorrect", reason: "庫侖力隨距離平方反比而減弱，不像彈簧拉得愈遠力愈強。" }
    },
    takeaway: "電子方向先反轉成電流方向，再使用右手定則。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-98-4": {
    encouragement: "從降溫曲線讀出50分鐘後的溫度，再用mcΔT就能算熱量。",
    keyIdea: "水損失的熱量Q＝mcΔT。",
    steps: ["3.0 L水的質量約為3.0 kg。", "正式圖中水溫由98°C降到約85°C，溫差約13°C。", "Q≈3.0×4.2×10³×13≈1.64×10⁵ J。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "5.5×10⁴ J只相當於約4.4°C的降溫，少於圖示。" },
      B: { verdict: "correct", reason: "依圖讀得約13°C溫差，mcΔT約為1.6×10⁵ J。" },
      C: { verdict: "incorrect", reason: "2.2×10⁵ J對應約17.5°C降溫，比圖中的溫差大。" },
      D: { verdict: "incorrect", reason: "2.9×10⁵ J對應約23°C降溫，明顯超過曲線讀值。" }
    },
    takeaway: "曲線題先讀起點與終點的溫差，再代熱量公式。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-98-5": {
    encouragement: "要維持98°C，電熱器就要補回同溫度下原本每分鐘散失的熱。",
    keyIdea: "穩定保溫時吸熱率等於散熱率；使用題給初始降溫率0.32°C/min。",
    steps: ["98°C時每分鐘若斷電會降0.32°C。", "50分鐘等效溫降＝0.32×50＝16°C。", "需補熱量Q＝3.0×4.2×10³×16≈2.02×10⁵ J。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2.9×10⁴ J遠不足以補回50分鐘的散熱。" },
      B: { verdict: "incorrect", reason: "5.5×10⁴ J只補得約4.4°C的熱量。" },
      C: { verdict: "incorrect", reason: "1.5×10⁵ J低於依題給散熱率算得的約2.0×10⁵ J。" },
      D: { verdict: "correct", reason: "以98°C時的散熱率計算，50分鐘約需補2.0×10⁵ J。" }
    },
    takeaway: "保溫不是把水繼續加熱，而是持續補回散失的能量。",
    reviewStatus: "approved", reviewerRole: "physics"
  }
});
