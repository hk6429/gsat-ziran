(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-23": {
    encouragement: "題目已提示呼吸孔旁有防水油膜；清潔劑最可能破壞的正是這層保護。",
    keyIdea: "清潔劑可乳化或溶解油脂，使防水油膜失效，水進入呼吸孔而阻礙氣體交換。",
    steps: [
      "蟑螂以腹部呼吸孔連接氣管系統進行氣體交換。",
      "呼吸孔附近的油膜可防止水進入。",
      "清潔劑具有去油作用，會破壞防水油膜。",
      "呼吸孔進水後，氧氣交換受阻，蟑螂可能迅速窒息。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題幹重點是防水油膜被破壞，不是氣泡進入造成嗆死。" },
      B: { verdict: "incorrect", reason: "清潔劑未必具有足以短時間腐蝕致死的強鹼性，且無法解釋油膜提示。" },
      C: { verdict: "incorrect", reason: "並非所有清潔劑都含磷酸鹽，題目也沒有磷酸鹽毒性的證據。" },
      D: { verdict: "correct", reason: "清潔劑去除防水油膜後，水進入呼吸孔，會阻礙氣管系統換氣而窒息。" },
      E: { verdict: "incorrect", reason: "清潔劑中的成分不一定含大量鈉離子，也沒有離子使呼吸孔膨脹的合理機制。" }
    },
    takeaway: "題目特別提供的構造常是因果關鍵：油膜防水，清潔劑去油。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-27": {
    encouragement: "先把外星質量與長度單位換成公斤和公尺，再依密度＝質量÷體積計算。",
    keyIdea: "1☉＝4.0 kg、1⊕＝0.50 m；體積單位換算時長度倍率要立方。",
    steps: [
      "質量8☉＝8×4.0＝32 kg。",
      "體積0.8⊕³＝0.8×(0.50 m)³＝0.10 m³。",
      "平均密度ρ＝m/V＝32÷0.10。",
      "得到3.2×10² kg/m³。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2.0×10³ kg/m³不是依0.50 m的長度單位立方換算所得。" },
      B: { verdict: "correct", reason: "32 kg除以0.10 m³，平均密度為3.2×10² kg/m³。" },
      C: { verdict: "incorrect", reason: "8.0×10¹只把部分換算倍率帶入，低估了質量體積比。" },
      D: { verdict: "incorrect", reason: "4.0×10¹混淆了質量單位倍率與最後密度。" },
      E: { verdict: "incorrect", reason: "6.3×10⁻¹遠小於合理值，且體積單位的長度倍率應取三次方。" }
    },
    takeaway: "面積單位倍率要平方，體積單位倍率要立方。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-30": {
    encouragement: "三種科技各抓一個代表用途：雷射手術、半導體晶片、液晶顯示。",
    keyIdea: "手術醫療可用雷射，積體電路以半導體製成，顯示器常利用液晶控制光線。",
    steps: [
      "雷射能量集中、方向性佳，可精準切割或凝固組織，對應乙。",
      "積體電路由大量半導體元件組成，對應甲。",
      "液晶可受電場控制排列與透光量，對應丙。",
      "順序為雷射乙、半導體甲、液晶丙。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "雷射不對應積體電路的主要材料，半導體也不是手術醫療的主要配對。" },
      B: { verdict: "incorrect", reason: "雷射與手術配對正確，但半導體應配積體電路而非顯示器。" },
      C: { verdict: "incorrect", reason: "液晶顯示器的丙不應放在雷射欄，三者配對皆錯位。" },
      D: { verdict: "incorrect", reason: "雷射與半導體的對應顛倒；積體電路主要使用半導體。" },
      E: { verdict: "correct", reason: "雷射對應乙手術、半導體對應甲積體電路、液晶對應丙顯示器。" }
    },
    takeaway: "雷射重精準能量、半導體重電子元件、液晶重調控顯示。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-65": {
    encouragement: "無線電波以光速前進；把火星距離換成公尺後，用時間＝距離÷速度。",
    keyIdea: "電磁波在太空中的速率約3×10⁸ m/s，傳越6×10¹⁰ m約需200 s。",
    steps: [
      "地火距離約6×10⁷ km＝6×10¹⁰ m。",
      "無線電波是真空中的電磁波，速率約3×10⁸ m/s。",
      "t＝d/v＝6×10¹⁰÷3×10⁸。",
      "得到2×10² s，也就是200秒。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2分鐘只有120秒，比6×10⁷公里所需的光行時間短。" },
      B: { verdict: "incorrect", reason: "20分鐘是1200秒，超過本題距離的電磁波傳播時間。" },
      C: { verdict: "incorrect", reason: "2秒內光只行進約6×10⁵公里，遠小於地火距離。" },
      D: { verdict: "incorrect", reason: "20秒仍少了10倍，無線電波需要約200秒。" },
      E: { verdict: "correct", reason: "6×10¹⁰ m除以3×10⁸ m/s＝200 s。" }
    },
    takeaway: "太空通訊仍有延遲，因為光速雖快但不是無限大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-68": {
    encouragement: "地表物體的重量mg就是地球萬有引力GMm/R²，約掉物體質量m即可。",
    keyIdea: "由mg＝GMm/R²，可解得地球質量M＝gR²/G。",
    steps: [
      "地球表面質量m物體所受重力為mg。",
      "萬有引力為GMm/R²。",
      "令兩式相等並約去m，得g＝GM/R²。",
      "移項得到M＝gR²/G。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由g＝GM/R²整理，正確結果就是M＝gR²/G。" },
      B: { verdict: "incorrect", reason: "把G與g的位置顛倒，且量綱不會得到質量。" },
      C: { verdict: "incorrect", reason: "G與g相乘再除R²不符合地表重力公式。" },
      D: { verdict: "incorrect", reason: "R²應在分子、G應在分母，此式位置皆錯。" },
      E: { verdict: "incorrect", reason: "M不是gGR²的形式，代回萬有引力也無法得到地表重力g。" }
    },
    takeaway: "星球表面重力公式：g＝GM/R²。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-48": {
    encouragement: "把四種技術各抓核心：超音波回聲、內視鏡全反射、放射線核衰變、X光原子躍遷。",
    keyIdea: "醫療技術的物理原理依序為乙、丁、甲、丙。",
    steps: [
      "超音波成像利用聲波在組織界面的反射與透射，對應乙。",
      "光纖內視鏡以全反射導引光線，對應丁。",
      "部分治療用放射線來自不穩定原子核衰變，對應甲。",
      "特定波長X光可由內層電子能階躍遷產生，對應丙。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "超音波配乙正確，但內視鏡不靠原子躍遷，後三項錯位。" },
      B: { verdict: "incorrect", reason: "超音波不是核衰變產物，第一項就不符合其反射成像原理。" },
      C: { verdict: "correct", reason: "超音波乙、內視鏡丁、放射線甲、特定X光丙，四項皆正確。" },
      D: { verdict: "incorrect", reason: "超音波不以全反射為主要診斷原理，內視鏡也不靠核衰變。" },
      E: { verdict: "incorrect", reason: "超音波不是原子躍遷輻射，放射線與X光原理也配錯。" }
    },
    takeaway: "先辨認訊號是聲波、可見光纖、核輻射還是X光，再配對原理。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-101-68": {
    encouragement: "先在300 K把兩容器氣體的PV加起來，再按總體積與升溫比例求新壓力。",
    keyIdea: "理想氣體莫耳數可相加；P最終＝(P₁V₁＋P₂V₂)T最終/[V總T初]。",
    steps: [
      "300 K時兩邊的PV總量為3×20＋6×40＝300 atm·L。",
      "混合後總體積為20＋40＝60 L。",
      "若仍是300 K，壓力為300÷60＝5 atm。",
      "升溫至420 K，壓力乘420/300，得到7 atm。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3 atm只是甲容器初壓，沒有計入乙容器氣體與升溫。" },
      B: { verdict: "incorrect", reason: "4 atm既不符合氣體莫耳數相加，也未正確處理溫度比例。" },
      C: { verdict: "incorrect", reason: "5 atm是混合後仍維持300 K時的壓力，尚未升至420 K。" },
      D: { verdict: "incorrect", reason: "6 atm只是乙容器初壓，不能直接當成混合升溫後壓力。" },
      E: { verdict: "correct", reason: "先得300 K時5 atm，再乘420/300，平衡壓力為7 atm。" }
    },
    takeaway: "不同容器氣體混合可先加總PV/T，再用最後PVT狀態求解。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-21": {
    encouragement: "三個名字各有招牌：克卜勒行星定律、馬克士威電磁波、都卜勒頻移。",
    keyIdea: "克卜勒對應甲、都卜勒對應丙、馬克士威對應乙。",
    steps: [
      "克卜勒由觀測資料歸納行星運動三定律，對應甲。",
      "馬克士威由電磁方程預測電磁波及其速率，對應乙。",
      "都卜勒指出相對運動會改變觀測頻率，對應丙。",
      "題目表格順序克卜勒、都卜勒、馬克士威即甲、丙、乙。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "把都卜勒錯配成電磁波速率、馬克士威錯配成頻移。" },
      B: { verdict: "incorrect", reason: "克卜勒不是電磁波理論建立者，第一項即不正確。" },
      C: { verdict: "incorrect", reason: "三位科學家的代表性貢獻全部錯位。" },
      D: { verdict: "incorrect", reason: "克卜勒不是都卜勒效應提出者，都卜勒也不是行星定律建立者。" },
      E: { verdict: "correct", reason: "克卜勒甲、都卜勒丙、馬克士威乙，三者配對正確。" }
    },
    takeaway: "克卜勒看行星、都卜勒看頻率、馬克士威看電磁場。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-32": {
    encouragement: "光電子能量帳很簡單：一顆光子能量hf，先付逸出功，剩下才是動能。",
    keyIdea: "光電方程Kmax＝hf−φ；頻率決定單一光子能量，光強主要影響光子數。",
    steps: [
      "每個光子能量E＝hf，頻率越高能量越大。",
      "金屬逸出功φ由材料決定。",
      "超過逸出功的部分成為光電子最大動能。",
      "同頻率提高光強，主要增加每秒光子數與光電子數，不增加單顆電子最大動能。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "光子能量hf由頻率決定，頻率越高單一光子能量越大。" },
      B: { verdict: "incorrect", reason: "光強增大通常表示光子數增多，不代表單色光頻率提高。" },
      C: { verdict: "correct", reason: "同一金屬下頻率提高，使hf增加，扣除固定逸出功後光電子動能增加。" },
      D: { verdict: "incorrect", reason: "增加同頻率光強主要增加光電子數量，不提高最大動能。" },
      E: { verdict: "incorrect", reason: "不同金屬逸出功不同，所以即使同一單色光，光電子動能仍會不同。" }
    },
    takeaway: "頻率管單顆光電子能量，光強多半管光電子數量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-53": {
    encouragement: "上拋滯空時間和重力加速度成反比；先用星球質量與半徑比較g。",
    keyIdea: "g＝GM/R²，地球表面g約為火星的9.3/1.9²≈2.6倍，因此火星滯空時間約2.6倍。",
    steps: [
      "地球與火星重力比gE/gM＝(ME/MM)/(RE/RM)²。",
      "代入9.3/1.9²≈9.3/3.61≈2.6。",
      "相同初速鉛直上拋，總時間t＝2v₀/g。",
      "因此tM/tE＝gE/gM≈2.6。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.20表示火星時間更短，但火星表面重力較小，應滯空更久。" },
      B: { verdict: "incorrect", reason: "0.38約是重力倍率的倒數方向用錯，時間應與g成反比。" },
      C: { verdict: "incorrect", reason: "兩星球表面重力不同，相同初速的滯空時間不會相同。" },
      D: { verdict: "correct", reason: "地球重力約火星2.6倍，所以火星上拋滯空時間約地球2.6倍。" },
      E: { verdict: "incorrect", reason: "4.9並非由質量比除以半徑比平方所得的重力或時間倍率。" }
    },
    takeaway: "同初速上拋，重力越小，上升與落下所需時間越長。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-36": {
    encouragement: "光電效應有一道門檻：頻率不夠再亮也出不來；頻率過門檻再弱也能有少量電子。",
    keyIdea: "光具有光子性；是否逸出由頻率門檻決定，光強影響單位時間光電子數。",
    steps: [
      "光電效應顯示光能以一顆顆光子傳遞。",
      "每顆光子能量hf須至少等於金屬逸出功。",
      "低於底限頻率時，增加光強只增加低能光子數，仍無法逸出。",
      "高於底限頻率時，即使光弱，仍可能有少量光電子。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "電子一次吸收一個光子的離散能量，支持光具有粒子性。" },
      B: { verdict: "incorrect", reason: "光電效應現象早由赫茲等人觀察；愛因斯坦因理論解釋等貢獻獲獎，不是首先發現。" },
      C: { verdict: "incorrect", reason: "每秒光電子數在固定光強下近似穩定，不會因照射總時間越久就每秒越多。" },
      D: { verdict: "correct", reason: "頻率低於門檻時單顆光子能量不足，光再強也不能逸出電子。" },
      E: { verdict: "correct", reason: "頻率高於門檻時，即使光強弱、光子少，仍可產生少量光電子。" }
    },
    takeaway: "光電效應的門檻看頻率，不看總亮度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-65": {
    encouragement: "子彈卡進木塊是完全非彈性碰撞：動量守恆，但部分動能轉為熱與形變。",
    keyIdea: "系統無外水平力所以動量守恆；摩擦為內力，兩者同速後相對滑動消失。",
    steps: [
      "子彈受向左摩擦而減速，木塊受向右摩擦而加速。",
      "兩摩擦力為作用力與反作用力，等大反向。",
      "動量守恆給mv＝(M＋m)V，所以V＝mv/(M＋m)。",
      "兩者同速後不再相對滑動，摩擦消失；動能則因形變與熱而減少。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "子彈對木塊的摩擦力向右，木塊也向右位移，因此摩擦對木塊作正功。" },
      B: { verdict: "correct", reason: "子彈與木塊間摩擦力是一對第三定律力，大小相等、方向相反。" },
      C: { verdict: "incorrect", reason: "末速應為mv/(M＋m)，選項只除以M，漏掉子彈也成為總質量一部分。" },
      D: { verdict: "correct", reason: "速度相等後兩接觸面沒有相對滑動趨勢，造成加減速的摩擦力消失。" },
      E: { verdict: "incorrect", reason: "動量守恆不代表動能守恆；子彈嵌入會把部分動能轉成熱與形變能。" }
    },
    takeaway: "非彈性碰撞常是動量守恆、動能不守恆。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-3": {
    encouragement: "手機電磁波用λ＝c/f；GHz先換成10⁹ Hz。",
    keyIdea: "波長λ＝c/f，3×10⁸除以1.9×10⁹約為0.16 m。",
    steps: [
      "通訊頻率1.9 GHz＝1.9×10⁹ Hz。",
      "空氣中光速約3.0×10⁸ m/s。",
      "λ＝c/f＝3.0×10⁸÷1.9×10⁹。",
      "結果約1.58×10⁻¹ m，最接近0.16 m。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.6 m比正確值大10倍，通常是GHz指數換算少一個10。" },
      B: { verdict: "incorrect", reason: "1.0 m對應約0.3 GHz，不符合1.9 GHz的頻率。" },
      C: { verdict: "incorrect", reason: "0.33 m約對應0.9 GHz，仍比題目波長長。" },
      D: { verdict: "correct", reason: "3.0×10⁸/1.9×10⁹≈0.158 m，最接近0.16 m。" },
      E: { verdict: "incorrect", reason: "0.10 m對應約3 GHz，頻率高於題設1.9 GHz。" }
    },
    takeaway: "GHz是10⁹ Hz；頻率越高，波長越短。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-5": {
    encouragement: "大霹靂不是同時製造所有恆星；宇宙一直膨脹，而微波背景比星光更早。",
    keyIdea: "宇宙微波背景是早期宇宙遺跡；哈伯常數越大表示目前膨脹速率尺度越大。",
    steps: [
      "大霹靂後先形成基本粒子與原子，恆星是後來由氣體逐步形成。",
      "宇宙微波背景來自第一批恆星之前的早期宇宙。",
      "觀測顯示宇宙正在膨脹，不是靜止。",
      "哈伯定律v＝H₀d中，H₀越大，同距離退行速度越大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲與丙錯誤；多數恆星不是大霹靂瞬間誕生，宇宙也持續膨脹。" },
      B: { verdict: "incorrect", reason: "甲、丙都錯誤，不能選僅有這兩項。" },
      C: { verdict: "incorrect", reason: "丁正確，但甲錯誤；恆星是在宇宙演化後期逐步形成。" },
      D: { verdict: "correct", reason: "乙正確，微波背景早於星光；丁也正確，H₀越大代表膨脹越快。" },
      E: { verdict: "incorrect", reason: "除了丁之外，乙也正確，因此不是僅有丁。" }
    },
    takeaway: "時間順序：大霹靂、微波背景、第一批恆星。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-45": {
    encouragement: "先算穿過10 cm正常組織要損失多少能量，再加上穿過1 mm腫瘤所需能量。",
    keyIdea: "緲子在水中損失200 MeV/m；正常組織為3倍、腫瘤為300倍。",
    steps: [
      "正常組織每公尺損失3×200＝600 MeV，10 cm＝0.10 m，損失60 MeV。",
      "腫瘤每公尺損失300×200＝60000 MeV。",
      "腫瘤厚1.0 mm＝0.001 m，穿越需損失60 MeV。",
      "至少需60＋60＝120 MeV，才能抵達並穿過腫瘤區。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.12 MeV遠小於穿過正常組織與腫瘤的能量損失。" },
      B: { verdict: "incorrect", reason: "1.2 MeV少了兩個數量級，粒子無法到達10 cm深處。" },
      C: { verdict: "incorrect", reason: "12 MeV仍小於穿過10 cm正常組織所需的60 MeV。" },
      D: { verdict: "correct", reason: "正常組織損失60 MeV、腫瘤再損失60 MeV，合計至少120 MeV。" },
      E: { verdict: "incorrect", reason: "1200 MeV遠高於題目估算的最低需求，並非「至少約」的最接近值。" }
    },
    takeaway: "分段介質題要把每一段的「每公尺損失×路徑長」依序相加。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-5": {
    encouragement: "光先打出一顆顆電子顯示粒子性；電子穿狹縫形成條紋又顯示波動性。",
    keyIdea: "光電效應需光子概念；電子逐點落幕顯示粒子性，累積繞射條紋顯示波動性。",
    steps: [
      "光照金屬產生光電子，需用光的粒子性解釋能量一份份傳遞。",
      "電子一次在屏幕留下一個局部亮點，表現粒子性。",
      "許多電子通過單狹縫後累積成繞射條紋，表現波動性。",
      "所以電子具有波粒二象性。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光電效應重點是光的粒子性，不是光的波動性。" },
      B: { verdict: "incorrect", reason: "電子不只表現粒子性，繞射條紋也需要電子波動性。" },
      C: { verdict: "correct", reason: "光電效應需光子說；電子逐點到達又形成繞射，呈現波粒二象性。" },
      D: { verdict: "incorrect", reason: "屏幕上的單點與整體條紋分別需要電子的粒子性與波動性。" },
      E: { verdict: "incorrect", reason: "若不使用光的粒子性，就難以解釋金屬表面的光電效應。" }
    },
    takeaway: "單次事件像粒子，長期分布像波，是微觀粒子的典型波粒二象性。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-14": {
    encouragement: "屏幕上的30公分被放大2倍，先還原水槽距離，再除以5秒求波速。",
    keyIdea: "實際波速為3 cm/s；頻率3 Hz，所以波長v/f＝1 cm。",
    steps: [
      "屏幕位移30 cm、放大率2，水槽實際位移為15 cm。",
      "5秒傳15 cm，實際波速v＝3 cm/s。",
      "筆尖每秒點3次，頻率f＝3 Hz。",
      "λ＝v/f＝3÷3＝1.0 cm。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "還原放大率後波速3 cm/s，再除以3 Hz得波長1.0 cm。" },
      B: { verdict: "incorrect", reason: "2.0 cm是未正確同時處理放大率與頻率所得。" },
      C: { verdict: "incorrect", reason: "6.0 cm混淆了5秒位移與每秒點水次數。" },
      D: { verdict: "incorrect", reason: "9.0 cm相當於把波速與頻率相乘，而波長應是波速除以頻率。" },
      E: { verdict: "incorrect", reason: "12 cm遠大於相鄰波面距離，未還原投影放大效果。" }
    },
    takeaway: "影像量測先還原比例，再使用v＝fλ。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-28": {
    encouragement: "電磁波不需介質且能干涉繞射；粒子團兩天走完日地距離，直接除即可。",
    keyIdea: "電磁波是交變電場與磁場的傳播；粒子團平均速率約8.7×10⁵ m/s。",
    steps: [
      "電磁波具有波動性，可干涉與繞射，也可在真空傳播。",
      "其電場與磁場隨時間週期變動並互相垂直。",
      "兩天＝2×24×3600＝172800 s。",
      "粒子速率＝1.5×10¹¹÷172800≈8.7×10⁵ m/s。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電磁波具有一般波的干涉與繞射現象。" },
      B: { verdict: "incorrect", reason: "電磁波可以在真空中傳播，不需以帶電粒子作介質。" },
      C: { verdict: "correct", reason: "電磁波由隨時間與空間變動的電場和磁場構成。" },
      D: { verdict: "correct", reason: "日地距離除以兩天約為8.7×10⁵ m/s。" },
      E: { verdict: "incorrect", reason: "閃焰影像的光約8分鐘先到地球，不是粒子抵達後再等8分鐘才看到。" }
    },
    takeaway: "光訊號先到、慢速粒子後到，是太陽活動預警的重要時間差。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-8": {
    encouragement: "找能把光直接轉成電訊號的工具：相機感光元件與太陽能電池。",
    keyIdea: "半導體吸收光子後產生可移動電荷，可用於影像感測與太陽能發電。",
    steps: [
      "手機相機的感光元件把入射光轉為電訊號。",
      "太陽能電池把光能轉為電能。",
      "兩者都利用半導體吸收光後產生載子的光電效應。",
      "其他工具主要使用機械、電熱或一般電子控制。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鬧鐘與電動牙刷主要利用電子計時與馬達，不以光電效應為核心。" },
      B: { verdict: "incorrect", reason: "牙刷馬達和公車引擎的主要功能都不是光轉電。" },
      C: { verdict: "incorrect", reason: "手機相機使用光電效應，但烤麵包機主要是電熱效應。" },
      D: { verdict: "correct", reason: "相機感光元件與太陽能電池都會把入射光轉成電訊號或電能。" },
      E: { verdict: "incorrect", reason: "太陽能電池符合，但烤麵包機是電流熱效應，不是光電效應。" }
    },
    takeaway: "光電效應的生活線索是「光進來，電訊號或電能出來」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-35": {
    encouragement: "五位科學家各有明確招牌，逐一配對比背整列選項容易。",
    keyIdea: "庫侖丁、法拉第丙、德布羅意乙、牛頓甲、愛因斯坦戊。",
    steps: [
      "牛頓統一地面重力與天體運動，對應甲。",
      "德布羅意提出物質波，對應乙；法拉第發現電磁感應，對應丙。",
      "庫侖定律是帶電質點間反平方力，對應丁。",
      "愛因斯坦以光子假說解釋光電效應，對應戊。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "除愛因斯坦外，其餘四位科學家的主要貢獻皆錯配。" },
      B: { verdict: "correct", reason: "庫侖丁、法拉第丙、德布羅意乙、牛頓甲、愛因斯坦戊全部正確。" },
      C: { verdict: "incorrect", reason: "庫侖不是電磁感應發現者，法拉第也不是萬有引力建立者。" },
      D: { verdict: "incorrect", reason: "五項配對都不符合各科學家的代表性工作。" },
      E: { verdict: "incorrect", reason: "法拉第丙與牛頓甲正確，但庫侖、德布羅意、愛因斯坦皆錯。" }
    },
    takeaway: "牛頓重力、庫侖電力、法拉第感應、德布羅意物質波、愛因斯坦光子。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-39": {
    encouragement: "表面原子數約跟面積R²走，總原子數跟體積R³走，所以n/N和1/R成正比。",
    keyIdea: "相同材質球體的表面原子比例n/N∝R²/R³＝1/R。",
    steps: [
      "表面原子數n約與球表面積成正比，即n∝R²。",
      "總原子數N約與體積成正比，即N∝R³。",
      "所以n/N∝1/R。",
      "半徑比1.0 cm/100 nm＝10⁻²/10⁻⁷＝10⁵，小球比例大10⁵倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁻⁷不是兩球半徑比，也與小球表面比例應較大的方向相反。" },
      B: { verdict: "incorrect", reason: "10⁻⁵是半徑小球/大球之比，但n/N與半徑成反比。" },
      C: { verdict: "incorrect", reason: "半徑跨越五個數量級，表面比例不只差10倍。" },
      D: { verdict: "correct", reason: "n/N與1/R成正比，大球半徑是小球10⁵倍，所以小球比例大10⁵倍。" },
      E: { verdict: "incorrect", reason: "兩半徑相差10⁵倍，不是10⁷倍。" }
    },
    takeaway: "物體越小，表面積占體積的比例越大，奈米材料因此表面效應明顯。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-14": {
    encouragement: "把每個物理量拆成kg、m、s、A，最容易從熟悉的焦耳與瓦特開始。",
    keyIdea: "功率W＝J/s＝kg·m²/s³。",
    steps: [
      "能量1 J＝1 N·m＝kg·m²/s²。",
      "功率是能量除以時間。",
      "所以1 W＝kg·m²/s³。",
      "其他選項可由電量A·s、壓力kg/(m·s²)檢查。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電量＝電流×時間，SI基本單位應為A·s，不是A·s²。" },
      B: { verdict: "incorrect", reason: "壓力＝力/面積，單位應為kg/(m·s²)，選項少了一個s。" },
      C: { verdict: "correct", reason: "功率＝能量/時間，J/s＝kg·m²/s³。" },
      D: { verdict: "incorrect", reason: "動能單位是焦耳kg·m²/s²，選項少了一個s。" },
      E: { verdict: "incorrect", reason: "熱量也是能量，應為kg·m²/s²，不是kg·m/s。" }
    },
    takeaway: "能量是kg·m²/s²，功率再多除一個秒。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-55": {
    encouragement: "球體質量等於密度乘體積；代進g＝GM/R²後，可看出表面重力與密度×半徑成正比。",
    keyIdea: "同為球體時M∝ρR³，因此g∝ρR。",
    steps: [
      "星球質量M＝ρ×(4/3)πR³。",
      "表面重力g＝GM/R²。",
      "代入後g＝(4/3)πGρR，所以g∝ρR。",
      "倍率＝0.10×10＝1.0。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.010把密度與半徑效應都當成縮小，未注意半徑是10倍。" },
      B: { verdict: "incorrect", reason: "0.10只考慮密度倍率，漏掉半徑10倍会提高表面重力。" },
      C: { verdict: "correct", reason: "表面重力倍率＝密度倍率0.10×半徑倍率10＝1.0。" },
      D: { verdict: "incorrect", reason: "10只考慮半徑，沒有乘上密度0.10倍。" },
      E: { verdict: "incorrect", reason: "100錯把半徑平方直接保留，未先用密度求質量。" }
    },
    takeaway: "已知密度與半徑時，球形星球表面g可直接用ρR比較。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-3": {
    encouragement: "同一物體重量比就是兩星球表面g的比，使用M/R²比較。",
    keyIdea: "火星與地球表面重力比gM/gE＝(mM/mE)(rE/rM)²。",
    steps: [
      "表面重力g＝GM/R²。",
      "gM/gE＝(mM/mE)×(rE/rM)²。",
      "代入mM/mE＝1/9.3及rE/rM＝1.86。",
      "得到1.86²/9.3≈3.46/9.3≈0.37。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.10只約等於質量比，沒有計入火星半徑也較小。" },
      B: { verdict: "correct", reason: "由(1/9.3)×1.86²計算，火星重量約為地球的0.37倍。" },
      C: { verdict: "incorrect", reason: "0.72不是質量比與半徑平方比的正確組合。" },
      D: { verdict: "incorrect", reason: "火星表面重力明顯較小，不會接近地球的0.93倍。" },
      E: { verdict: "incorrect", reason: "1.86只是半徑比，不能直接當作表面重力比。" }
    },
    takeaway: "重量換星球時，同一物體質量不變，只需比較各星球的GM/R²。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-23": {
    encouragement: "太空船前往火星時全程仍遠離地球；快慢會改變紅移程度，但頻率仍低於靜止值。",
    keyIdea: "波源遠離觀察者時產生都卜勒紅移，監控站測得f＜f₀。",
    steps: [
      "太空船從地球往火星飛行，對地球監控站而言是遠離。",
      "遠離波源的波峰間距拉大，觀測頻率降低。",
      "加速遠離時紅移增強，仍有f＜f₀。",
      "等速遠離時也維持紅移；減速只是紅移變小，不會立刻變成藍移。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "加速離開地球時波源遠離，監控站測得頻率低於靜止值f₀。" },
      B: { verdict: "incorrect", reason: "只要波源相對監控站遠離，就會有都卜勒頻移，不會保持f＝f₀。" },
      C: { verdict: "incorrect", reason: "等速不代表相對速度為零；等速遠離仍會測得較低頻率。" },
      D: { verdict: "correct", reason: "太空船等速朝火星遠離地球時，監控站仍測得f＜f₀。" },
      E: { verdict: "incorrect", reason: "減速階段只要仍向外飛行，仍是紅移f＜f₀，不會變成f＞f₀。" }
    },
    takeaway: "都卜勒效應看相對速度方向，不是看物體有沒有加速度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-38": {
    encouragement: "愛因斯坦1905年的兩個代表關鍵字是光量子與質能關係。",
    keyIdea: "愛因斯坦以光子說解釋光電效應，並由相對論提出E＝mc²。",
    steps: [
      "光的直進與色散早在愛因斯坦之前已知。",
      "馬克士威理論指出光是電磁波。",
      "愛因斯坦用光量子概念說明光電效應。",
      "狹義相對論導出質量與能量的深刻關係E＝mc²。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光沿直線傳播是早期幾何光學知識，不是愛因斯坦的重要原創發現。" },
      B: { verdict: "incorrect", reason: "牛頓等人早已研究稜鏡色散，並非愛因斯坦發現。" },
      C: { verdict: "incorrect", reason: "光是電磁波主要由馬克士威理論預測、赫茲實驗驗證。" },
      D: { verdict: "correct", reason: "愛因斯坦提出光量子觀念，成功解釋光電效應的門檻與能量關係。" },
      E: { verdict: "correct", reason: "愛因斯坦相對論工作提出著名質能關係E＝mc²。" }
    },
    takeaway: "愛因斯坦的1905：光電效應、相對論與質能關係。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-11": {
    encouragement: "平均速度看總位移，平均加速度看速度向量前後差；兩個「平均」算法不同。",
    keyIdea: "回到原點所以平均速度為0；速度由＋1變−1 m/s，平均加速度量值為1 m/s²。",
    steps: [
      "溜溜球回到手中，總位移為0。",
      "平均速度＝總位移/時間＝0/2＝0。",
      "設擲出方向為正，初速＋1 m/s、末速−1 m/s。",
      "平均加速度量值＝|−1−1|/2＝1 m/s²。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "平均速度為0，但末速度方向反轉，平均加速度不是0。" },
      B: { verdict: "correct", reason: "總位移0使X＝0；速度改變量量值2 m/s除2秒得Y＝1。" },
      C: { verdict: "incorrect", reason: "回到原位置使平均速度必為0，不是0.5 m/s。" },
      D: { verdict: "incorrect", reason: "1 m/s是速率，不是平均速度；速度方向也有改變，所以平均加速度不為0。" }
    },
    takeaway: "繞一圈回原點，平均速度可為零，但平均速率通常不為零。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-27": {
    encouragement: "每分鐘流過0.6公斤水，升溫40°C；直接用Q＝mcΔT。",
    keyIdea: "水的比熱約1 kcal/(kg·°C)，每分鐘吸熱0.6×1×40＝24 kcal。",
    steps: [
      "每分鐘水質量m＝0.6 kg。",
      "溫度變化ΔT＝60−20＝40°C。",
      "水比熱c＝1 kcal/(kg·°C)。",
      "Q＝mcΔT＝0.6×1×40＝24 kcal。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.6千卡只把每分鐘質量數值當熱量，未乘溫差40°C。" },
      B: { verdict: "incorrect", reason: "12千卡相當於只計20°C溫升，題目實際升溫40°C。" },
      C: { verdict: "correct", reason: "0.6 kg×1 kcal/(kg·°C)×40°C＝24 kcal。" },
      D: { verdict: "incorrect", reason: "36千卡不符合0.6公斤水升高40°C的熱量。" }
    },
    takeaway: "連續水流可先以「每分鐘」為一批，照樣套Q＝mcΔT。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-40": {
    encouragement: "核反應配平兩本帳：原子序決定w，質量數決定中子數x。",
    keyIdea: "核反應前後原子序與質量數分別守恆，解得w＝36、x＝3。",
    steps: [
      "原子序守恆：92＝56＋w，所以w＝36。",
      "質量數左側為235＋1＝236。",
      "右側為141＋92＋x＝233＋x。",
      "令236＝233＋x，得到x＝3。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "w＝34會使右側總原子序90，不等於左側92；x＝5也破壞質量數守恆。" },
      B: { verdict: "incorrect", reason: "w＝35與x＝4都各差1，無法同時守恆原子序和質量數。" },
      C: { verdict: "incorrect", reason: "w與x皆不符合兩條守恆方程。" },
      D: { verdict: "incorrect", reason: "w＝36正確，但x應為3，不是2。" },
      E: { verdict: "correct", reason: "原子序守恆得w＝36，質量數守恆得x＝3。" }
    },
    takeaway: "核方程先配下標原子序，再配上標質量數。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-54": {
    encouragement: "冰箱內真正吸走食物熱量的是冷媒蒸發的地方，也就是汽化器。",
    keyIdea: "冷媒在汽化器中低壓蒸發並吸收冰箱內熱量，達成冷卻。",
    steps: [
      "冷媒經膨脹閥後壓力與溫度降低。",
      "低溫冷媒進入冰箱內部的汽化器。",
      "冷媒汽化需要吸收潛熱，熱量來自食物與箱內空氣。",
      "吸熱後冷媒蒸氣再回壓縮器循環。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "壓縮器負責提高冷媒壓力與溫度，本身不是箱內主要吸熱部位。" },
      B: { verdict: "incorrect", reason: "凝結器通常在冰箱外側，把冷媒熱量排到室內環境。" },
      C: { verdict: "incorrect", reason: "膨脹閥負責降壓與控制流量，不是主要吸收食物熱量的換熱器。" },
      D: { verdict: "correct", reason: "冷媒在汽化器中蒸發吸收潛熱，直接帶走冰箱內食物與空氣的熱。" }
    },
    takeaway: "汽化吸熱、凝結放熱；冰箱內汽化，冰箱外凝結。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-55": {
    encouragement: "螢幕用光的加色三原色混出各種顏色：紅、綠、藍。",
    keyIdea: "顯示器的加色三原色為紅光、綠光、藍光。",
    steps: [
      "彩色螢幕每個像素含三種發光成分。",
      "紅、綠、藍光以不同比例疊加。",
      "三色同時較強時可形成接近白光。",
      "因此電子束需分別控制紅、綠、藍螢光材料。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "紅、黃、綠缺少藍光，無法作為完整加色三原色。" },
      B: { verdict: "incorrect", reason: "黃光可由紅綠光相加產生，不是螢幕的基本三原色之一。" },
      C: { verdict: "correct", reason: "紅、綠、藍是光的加色三原色，可調配出多種螢幕顏色。" },
      D: { verdict: "incorrect", reason: "紅黃藍常被視為傳統顏料概念，不是顯示器加色三原色。" },
      E: { verdict: "incorrect", reason: "橙與紫都能由其他色光混合產生，並非螢幕三個基色。" }
    },
    takeaway: "螢幕是光的RGB加色；印刷顏料則是另一套減色系統。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-56": {
    encouragement: "噴射引擎燃燒燃料，來源是化學能，不是電能。",
    keyIdea: "能量轉換要看最初能源；噴射引擎主要把燃料化學能轉為氣流與飛機的力學能。",
    steps: [
      "瓦斯爐燃燒把化學能轉為熱能。",
      "水力發電把水的力學能經發電機轉為電能。",
      "噴射引擎燃燒燃料產生高速氣流，來源是化學能。",
      "光合作用與太陽電池分別把光能轉為化學能與電能。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；瓦斯燃燒釋放化學能並轉成熱。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；水輪機的力學能由發電機轉成電能。" },
      C: { verdict: "correct", reason: "這是錯誤敘述；飛機噴射引擎主要把燃料化學能轉為力學能，不是電能。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；植物把光能儲存在葡萄糖等物質的化學能中。" },
      E: { verdict: "incorrect", reason: "這是正確敘述；太陽電池利用光伏效應把光能轉成電能。" }
    },
    takeaway: "判斷能量轉換，先找設備真正消耗的能源。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-43": {
    encouragement: "北極到赤道是一段四分之一圓周，定義給出其長約一千萬公尺。",
    keyIdea: "地球四分之一子午線長約10⁷ m，所以2πR約4×10⁷ m，R約6×10⁶ m。",
    steps: [
      "一公尺定義使北極到赤道弧長約10⁷ m。",
      "這段是地球大圓周長的1/4。",
      "所以地球圓周約4×10⁷ m。",
      "R＝周長/(2π)≈4×10⁷/6.28≈6×10⁶ m。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "6×10⁴ m只有60公里，遠小於地球半徑。" },
      B: { verdict: "correct", reason: "由四分之一圓周10⁷ m估得地球半徑約6×10⁶ m。" },
      C: { verdict: "incorrect", reason: "6×10⁸ m比正確地球半徑大約100倍。" },
      D: { verdict: "incorrect", reason: "6×10¹⁰ m已接近天文尺度，不符合地球大小。" },
      E: { verdict: "incorrect", reason: "6×10¹² m遠大於地球，量級明顯不合理。" }
    },
    takeaway: "地球半徑約6.4×10⁶ m，是常用的量級。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-44": {
    encouragement: "大氣壓就是整柱空氣重量除以地球表面積；反過來可求空氣總質量。",
    keyIdea: "P＝Mg/(4πR²)，所以M＝P·4πR²/g，量級約5×10¹⁸ kg。",
    steps: [
      "地球表面積約4π(6×10⁶)²≈4.5×10¹⁴ m²。",
      "大氣總作用力F＝PA≈1.01×10⁵×4.5×10¹⁴≈4.5×10¹⁹ N。",
      "空氣重量Mg＝F。",
      "除以g約10 m/s²，質量約4.5×10¹⁸ kg，最接近5×10¹⁸ kg。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "5×10¹⁴ kg少了約四個數量級，接近表面積數值而非空氣質量。" },
      B: { verdict: "incorrect", reason: "5×10¹⁶ kg仍比由壓力乘表面積所得的質量小約100倍。" },
      C: { verdict: "correct", reason: "以P·4πR²/g估算約4.5×10¹⁸ kg，最接近5×10¹⁸ kg。" },
      D: { verdict: "incorrect", reason: "5×10²⁰ kg比估算值大約100倍。" },
      E: { verdict: "incorrect", reason: "5×10²² kg已接近地球質量的百分之一，遠高於實際大氣量級。" }
    },
    takeaway: "壓力乘面積得到總力，再除以g可估上方物質總質量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-77": {
    encouragement: "金屬比熱越大，同樣升溫能吸較多熱，也會把水降得更多、最後溫度較低。",
    keyIdea: "熱平衡由m金c金(T−5)＝m水c水(25−T)決定；鋁比熱大於銅。",
    steps: [
      "兩杯水與金屬質量、初溫皆相同，差別只有金屬比熱。",
      "鋁比熱0.217大於銅0.093 cal/(g·°C)。",
      "鋁要升高相同溫度需吸更多熱，因此使水降溫較多，平衡溫度較低。",
      "所以銅塊最後溫度較高，鋁塊吸熱較多。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩金屬比熱不同，與相同水量達平衡後的溫度不會相同。" },
      B: { verdict: "correct", reason: "銅比熱較小，吸熱能力較弱，水降溫較少，所以平衡溫度較高。" },
      C: { verdict: "incorrect", reason: "鋁比熱較大會吸走較多熱，使該杯平衡溫度較低。" },
      D: { verdict: "incorrect", reason: "鋁使水降溫較多，因此兩塊金屬吸收的熱量不相同。" },
      E: { verdict: "incorrect", reason: "銅的比熱較小且該杯水降溫較少，吸熱量不是較多。" },
      F: { verdict: "correct", reason: "鋁比熱較大，使水釋放較多熱量，因此鋁塊吸熱較多。" }
    },
    takeaway: "比熱大代表每升高一度能吸收較多熱，會更明顯拉低熱水溫度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-61": {
    encouragement: "太空近乎真空，輪胎沒有地面可推、螺旋槳沒有空氣可推；只有自行噴氣仍能前進。",
    keyIdea: "甲依賴地面摩擦、乙依賴周圍空氣，均不適用真空；丙的火箭式噴氣可用。",
    steps: [
      "甲的推進需要輪胎接觸地面，太空中沒有跑道。",
      "乙的螺旋槳或渦輪需要把周圍空氣向後推，真空中沒有空氣。",
      "丙攜帶燃料與必要反應物，向後噴出廢氣。",
      "噴氣反作用不需外界介質，因此只有丙可用於太空。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丙的火箭式噴氣可在真空運作，不應列為不能使用。" },
      B: { verdict: "correct", reason: "甲需要地面、乙需要空氣，兩種原理在近真空太空都無法使用。" },
      C: { verdict: "incorrect", reason: "丙能在太空噴氣推進；真正受限的是甲與乙。" },
      D: { verdict: "incorrect", reason: "不只甲不能用，乙的螺旋槳在真空中也無空氣可推。" },
      E: { verdict: "incorrect", reason: "乙確實不能用，但甲同樣缺少地面摩擦，選項不完整。" }
    },
    takeaway: "火箭不必推空氣，它把自己攜帶的物質向後噴出。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-63": {
    encouragement: "依白努利概念，流速較快處壓力較小；若上下流速一樣，就沒有壓力差升力。",
    keyIdea: "甲乙假說中，機翼上方流速較快、壓力較低，才有向上升力。",
    steps: [
      "穩定氣流中，其他條件相近時流速越快、靜壓越低。",
      "要有向上升力，機翼下方壓力必須大於上方。",
      "因此上方空氣流速要大於下方。",
      "若上下流速相等，壓力差消失，飛機無法靠此升力平衡重力而會下降。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "固定高度需升力平衡重力，依此模型應是上方流速較大，不是下方。" },
      B: { verdict: "incorrect", reason: "離地所需下方高壓，應對應上方流速較快，而非下方較快。" },
      C: { verdict: "incorrect", reason: "上下流速相等時壓力近似相等，無法產生題述壓力差升力。" },
      D: { verdict: "correct", reason: "依甲乙的模型，上下流速相等會失去向上升力，飛行高度因重力而下降。" }
    },
    takeaway: "這類假說題要忠實依題目模型推論：流速差造成壓力差與升力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-52": {
    encouragement: "汽車等速度表示加速度為零，所以向前推力和向後總阻力必須平衡。",
    keyIdea: "等速直線運動時合力為零，F與R等大反向。",
    steps: [
      "汽車沿直線等速度前進，速度向量不變。",
      "因此加速度a＝0。",
      "由ΣF＝ma，水平方向合力為零。",
      "向前推力F必等於向後總阻力R的量值。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "推力向前、總阻力向後，兩者方向相反而非相同。" },
      B: { verdict: "correct", reason: "等速使水平合力為零，所以推力與總阻力量值相同。" },
      C: { verdict: "incorrect", reason: "空氣阻力f′是總阻力R的一部分，方向與R相同。" },
      D: { verdict: "incorrect", reason: "總阻力R＝f＋f′大於或等於f；等速時F＝R，不會小於f。" }
    },
    takeaway: "等速不代表沒有力，而是所有力的向量和為零。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-55": {
    encouragement: "先寫三人的阻力R，再用P＝Rv；括號裡速度的次方就是n。",
    keyIdea: "甲R＝bv、乙R＝a＋bv、丙R＝a＋bv²，乘v後分別對應n＝1、1、2。",
    steps: [
      "甲認為地面阻力0、空阻∝v，所以R＝bv。",
      "乙認為固定地阻a加空阻bv，所以R＝a＋bv。",
      "丙認為固定地阻a加空阻bv²，所以R＝a＋bv²。",
      "由P＝Rv＝v(a＋bvⁿ)，得到甲n＝1、乙n＝1、丙n＝2。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的空阻與v成正比，n應為1；丙的空阻與v²成正比，n應為2。" },
      B: { verdict: "incorrect", reason: "乙主張空阻與v成正比，n不是2；丙則不是1。" },
      C: { verdict: "correct", reason: "甲與乙的速度項都是bv，n＝1；丙是bv²，n＝2。" },
      D: { verdict: "incorrect", reason: "乙的空阻不是速度平方，只有丙的n＝2。" }
    },
    takeaway: "功率P＝阻力R×速度v；先整理阻力函數最清楚。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-56": {
    encouragement: "車輪真正得到的力學功率Fv只有燃料功率的12%，所以燃料輸入要除以0.12。",
    keyIdea: "效率η＝有效輸出功率/輸入功率＝0.12，因此輸入功率＝Fv/0.12。",
    steps: [
      "汽車等速時推力F與阻力平衡。",
      "車輪推進的有效力學功率為P有效＝Fv。",
      "這只占燃料每秒總能量的12%。",
      "所以燃料輸入功率P輸入＝Fv/0.12。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Fvt是有效機械能，不是汽油燃燒提供的總能量；總能量還要除以0.12。" },
      B: { verdict: "correct", reason: "有效功率Fv只占輸入的12%，所以燃料每秒提供Fv/0.12。" },
      C: { verdict: "incorrect", reason: "每單位里程耗油量應是G/v，不是G乘v。" },
      D: { verdict: "incorrect", reason: "v/G代表每單位油量可走的距離，與每單位里程耗油量互為倒數。" }
    },
    takeaway: "效率題：輸入＝有效輸出÷效率；每公里耗油則是每小時耗油÷每小時公里。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
