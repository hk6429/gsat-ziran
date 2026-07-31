(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-84-59": {
    encouragement: "只要比較砂粒和原子的直徑倍率，再把倍率取三次方，就能估原子數量級。",
    keyIdea: "物體所含原子數約等於體積比；0.1 mm與0.1 nm的直徑差約10⁶倍。",
    steps: [
      "砂粒直徑0.1 mm＝10⁻⁴ m。",
      "一般原子直徑約10⁻¹⁰ m，長度倍率約10⁶。",
      "體積倍率約為(10⁶)³＝10¹⁸。",
      "考慮原子間空隙與估算誤差，最接近選項為10¹⁷。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁶只接近直徑倍率，沒有將三維體積倍率取三次方。" },
      B: { verdict: "incorrect", reason: "10⁹仍遠低於砂粒與原子的體積比。" },
      C: { verdict: "incorrect", reason: "10¹³比合理的10¹⁷至10¹⁸量級少了數萬倍。" },
      D: { verdict: "correct", reason: "砂粒與原子直徑差約10⁶倍，體積比約10¹⁸，最接近10¹⁷。" }
    },
    takeaway: "由長度估數量時，三維物體通常要把長度倍率取三次方。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-60": {
    encouragement: "放射性來自不穩定原子核，不是溫度高低；冷凍無法把核種變穩定。",
    keyIdea: "核分裂會改變核種並產生放射性產物；放射性衰變率不會靠低溫冷凍清除。",
    steps: [
      "鈾-235吸收慢中子後分裂成不同的較輕原子核。",
      "部分分裂產物非常不穩定，會持續放射。",
      "質量虧損可依E＝mc²釋放大量能量。",
      "降溫只改變物質熱運動，通常不改變原子核衰變性質。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；核分裂後會形成不同元素或同位素。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；許多分裂產物具有強烈放射性。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；核反應每單位質量釋能遠大於化學燃燒。" },
      D: { verdict: "correct", reason: "這是錯誤敘述；冷凍不能消除不穩定原子核的放射性。" }
    },
    takeaway: "化學與溫度主要影響電子和分子，放射性則是原子核層次的性質。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-40": {
    encouragement: "幾何光學用光線直進、反射與折射；肥皂泡彩色則需要薄膜干涉。",
    keyIdea: "肥皂泡彩紋源自薄膜上下表面反射光的干涉，不能只用幾何光線解釋。",
    steps: [
      "針孔成像、影子、面鏡成像與月食都可用光線路徑描述。",
      "肥皂膜有內外兩個反射面。",
      "兩束反射光走過不同路程，會互相增強或抵銷。",
      "不同波長增強的位置不同，因此出現彩色。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "針孔成像可用光沿直線傳播解釋，屬幾何光學。" },
      B: { verdict: "incorrect", reason: "樹影由光直進及物體遮擋形成，可用幾何光學解釋。" },
      C: { verdict: "correct", reason: "肥皂泡彩色主要是薄膜干涉，需要光的波動性。" },
      D: { verdict: "incorrect", reason: "面鏡成像依反射定律作圖即可解釋。" },
      E: { verdict: "incorrect", reason: "月食是地球遮擋太陽光形成影區，可用光線直進說明。" }
    },
    takeaway: "看到薄膜彩色、繞射條紋或偏振時，要想到波動光學。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-41": {
    encouragement: "以21°C為基準看兩球：小球高8度、兩倍質量的大球低4度，熱量剛好互抵。",
    keyIdea: "相同材質下熱容量與質量成正比；兩金屬相對21°C的熱量變化恰好相消。",
    steps: [
      "設a球質量m、比熱c，若降到21°C放熱mc×8。",
      "b球質量2m，若升到21°C吸熱2mc×4。",
      "兩者熱量皆為8mc，正好相等。",
      "水原本也是21°C，因此整體平衡溫度仍為21°C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "29°C是a球初溫，系統接觸後不可能全部回到最高初溫。" },
      B: { verdict: "incorrect", reason: "20°C會使原本21°C的水也放熱，不符合兩金屬在21°C已可熱量平衡。" },
      C: { verdict: "incorrect", reason: "17°C是b球初溫，達熱平衡後溫度必高於此值。" },
      D: { verdict: "correct", reason: "a球降8°C放熱與兩倍質量b球升4°C吸熱相等，水維持21°C。" },
      E: { verdict: "incorrect", reason: "21°C可由熱量守恆直接得到，並非所有選項都錯。" }
    },
    takeaway: "熱平衡要比較熱容量m c，不是只把初溫做簡單平均。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-46": {
    encouragement: "光進入水中會向法線偏折，水下光線變得較直，池底影子因此較短。",
    keyIdea: "陽光由空氣進入水中時折射角小於入射角，使裝水池的桿影縮短。",
    steps: [
      "空池中陽光沿原斜直線照到池底。",
      "進入水中時，光由低折射率到高折射率介質。",
      "折射光向法線偏折，水中路徑較接近鉛直。",
      "同樣深度的水平位移較小，所以裝水池影子較短。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水中折射光更接近法線，影子應較短而不是較長。" },
      B: { verdict: "incorrect", reason: "水會使光線折射，因此兩池影長不會相同。" },
      C: { verdict: "correct", reason: "空池光線不向法線折射，水平位移較大，所以桿影較長。" },
      D: { verdict: "incorrect", reason: "只要是斜射且由空氣入水，折射方向固定使水池影子較短。" }
    },
    takeaway: "光由空氣進水會向法線偏折，水下看起來也常有深度變淺的效果。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-69": {
    encouragement: "找能量形式互換：位能變動能、熱物傳熱、煞車動能變熱，都是能量守恆。",
    keyIdea: "A、C、D分別呈現力學能轉換、熱量轉移與動能轉熱能。",
    steps: [
      "落石下降時重力位能轉為動能，得到v²＝2g(h₀−h)。",
      "熱鐵與冷水交換能量，鐵失熱、水得熱。",
      "煞車時車的動能轉為煞車裝置與環境的熱。",
      "槍後座與黏合碰撞方向主要是動量守恆例子。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "落石的重力位能減少並轉為動能，是力學能守恆例子。" },
      B: { verdict: "incorrect", reason: "槍與子彈反向運動主要用系統動量守恆解釋。" },
      C: { verdict: "correct", reason: "鐵塊放出的熱由水吸收，呈現能量由高溫物轉移到低溫物。" },
      D: { verdict: "correct", reason: "煞車使車的動能轉為熱，總能量並未消失。" },
      E: { verdict: "incorrect", reason: "碰撞後方向由碰撞前總動量決定，是動量守恆的應用。" }
    },
    takeaway: "能量守恆常追蹤「能量變成哪一種形式」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-70": {
    encouragement: "動量守恆最常出現在短暫互動：射擊後座與兩球碰撞。",
    keyIdea: "槍彈系統及碰撞球系統在外力衝量可忽略時總動量守恆。",
    steps: [
      "射擊前槍彈總動量近似為零。",
      "子彈向前後，槍必須有向後動量。",
      "兩球相向等速碰撞時，較重球的動量量值較大。",
      "黏合後總動量方向沿原本較重球方向。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "落石公式主要由力學能守恆推得，不是動量守恆的典型例子。" },
      B: { verdict: "correct", reason: "子彈向前與槍身後退，使槍彈系統總動量維持原值。" },
      C: { verdict: "incorrect", reason: "鐵塊與水的溫度變化主要是熱能守恆與熱傳。" },
      D: { verdict: "incorrect", reason: "煞車過程受地面外力，且重點是動能轉為熱能。" },
      E: { verdict: "correct", reason: "輕重球等速相向時重球動量較大，黏合體沿總動量方向運動。" }
    },
    takeaway: "碰撞與爆炸先看動量；升降與發熱通常先看能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-79": {
    encouragement: "真空中兩球自由落下的速度與加速度相同，但重力mg會因質量不同而不同。",
    keyIdea: "忽略空氣阻力時自由落體加速度皆為g；同高度同初速使速度相同，重球所受重力較大。",
    steps: [
      "真空排除浮力與空氣阻力差異。",
      "兩球都由相同高度靜止落下，加速度皆為g。",
      "相同時間速度v＝gt，因此兩球速度相同。",
      "鉛球質量較大，重力mg較大，所以乒乓球受重力較小。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同時刻兩球速度相同，乒乓球不會較大。" },
      B: { verdict: "incorrect", reason: "真空中自由落體不因質量而有較小速度。" },
      C: { verdict: "correct", reason: "相同初始條件與相同g使兩球各時刻速度相同。" },
      D: { verdict: "incorrect", reason: "乒乓球加速度不會比鉛球大，兩者皆為g。" },
      E: { verdict: "incorrect", reason: "鉛球雖較重，自由落體加速度仍與乒乓球相同。" },
      F: { verdict: "correct", reason: "等效原理使不同質量物體在同地點自由落體加速度相同。" },
      G: { verdict: "incorrect", reason: "乒乓球質量較小，所受重力mg不會較大。" },
      H: { verdict: "correct", reason: "乒乓球質量較小，所以所受地球重力量值小於鉛球。" },
      I: { verdict: "incorrect", reason: "兩球質量不同，所受重力mg也不同，不能說相同。" }
    },
    takeaway: "重力大小不同仍可有相同加速度，因為a＝F/m中的質量會約掉。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-53": {
    encouragement: "照三人的假設逐項看：不論空阻是v或v²，只要速度增加，總阻力都增加。",
    keyIdea: "甲R＝bv，乙R＝a＋bv，丙R＝a＋bv²；三式都隨v增加。",
    steps: [
      "甲認為地阻為零、空阻與v成正比。",
      "乙認為地阻固定、空阻與v成正比。",
      "丙認為地阻固定、空阻與v²成正比。",
      "三種總阻力都會隨車速提高而變大。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "三人的空氣阻力都隨速度增加，因此各自主張的總阻力都變大。" },
      B: { verdict: "incorrect", reason: "甲的R與v成正比，但乙還有固定地阻，R不與v純正比。" },
      C: { verdict: "incorrect", reason: "丙的總阻力是固定項加bv²，不是整體與v²純正比。" },
      D: { verdict: "incorrect", reason: "乙、丙都認為空氣阻力隨速度變化，總阻力不會與車速無關。" }
    },
    takeaway: "有固定項a時，a＋bv不等於與v成正比。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-54": {
    encouragement: "這題只要忠實讀三人的假設：甲直接主張輪胎阻力f恆為零。",
    keyIdea: "甲認為等速時地面輪胎阻力f＝0，因此與載重量無關。",
    steps: [
      "甲把f視為等速時為零的靜摩擦力。",
      "所以在甲的模型中，不論載客多少，f都等於零。",
      "乙與丙則主張f與汽車重量成正比。",
      "空氣阻力f′在丙模型中與v²有關，題目同速時不由載重直接決定。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲主張等速時f恆為零，所以自然與載重量無關。" },
      B: { verdict: "incorrect", reason: "乙明確主張輪胎阻力f與汽車重量成正比。" },
      C: { verdict: "incorrect", reason: "甲的f始終為零，不會因載重變輕而再變小。" },
      D: { verdict: "incorrect", reason: "丙主張空阻f′與速度平方有關，不能說載重變輕就必然變小。" }
    },
    takeaway: "模型判讀題要依題目角色的假設作答，不必先判斷誰最符合真實世界。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-47": {
    encouragement: "變壓器靠交流電產生變動磁場，再由變動磁通量在另一線圈感應電壓。",
    keyIdea: "變壓器利用電流磁效應與電磁感應，並能隔離兩個未直接相連的電路。",
    steps: [
      "一次線圈交流電在鐵心中建立交變磁場。",
      "磁通量持續變化，在二次線圈產生感應電動勢。",
      "匝數比決定升壓或降壓。",
      "能量經磁場耦合傳送，兩線圈不必電線直連。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鐵心是易磁化的軟磁材料，不是永久磁鐵。" },
      B: { verdict: "correct", reason: "一次線圈電流的磁效應建立交變磁場，是變壓的第一步。" },
      C: { verdict: "incorrect", reason: "電流熱效應只造成損耗，不是變壓器工作的核心原理。" },
      D: { verdict: "correct", reason: "變動磁場在二次線圈產生感應電動勢，形成輸出電壓。" },
      E: { verdict: "correct", reason: "兩線圈可沒有導線直接相連，仍透過共同磁通轉移電能。" }
    },
    takeaway: "變壓器是「電生變動磁、變動磁再生電」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-10": {
    encouragement: "重量百分比先換成各金屬質量，再用體積＝質量÷密度相加。",
    keyIdea: "合金總體積近似為各成分體積和；金450 g、銀50 g。",
    steps: [
      "金的質量為500×0.90＝450 g，銀為50 g。",
      "取金密度約19.3 g/cm³，體積約450/19.3＝23.3 cm³。",
      "銀密度約10.5 g/cm³，體積約50/10.5＝4.8 cm³。",
      "總體積約28.1 cm³，完全浸水排開同體積水。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "17.6 cm³小於僅金成分約23.3 cm³的體積。" },
      B: { verdict: "incorrect", reason: "22.6 cm³未正確加上銀成分體積。" },
      C: { verdict: "correct", reason: "金與銀體積約23.3＋4.8＝28.1 cm³。" },
      D: { verdict: "incorrect", reason: "30.0 cm³接近但未使用兩種金屬密度精確加總。" }
    },
    takeaway: "重量百分比不能直接平均密度；先算各成分體積再相加。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-18": {
    encouragement: "微波爐正常電流約900÷110＝8.2 A，保險裝置要略高於正常值。",
    keyIdea: "I＝P/V；保險絲額定電流應略高於正常工作電流，又不能高得失去保護。",
    steps: [
      "微波爐功率900 W、電壓110 V。",
      "正常電流I＝P/V≈900/110≈8.2 A。",
      "1 A與5 A會在正常使用時熔斷。",
      "10 A略高於正常電流且仍有保護作用，最合適。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 A遠低於8.2 A正常電流，微波爐一開就容易斷電。" },
      B: { verdict: "incorrect", reason: "5 A仍低於正常工作電流，無法維持微波爐運轉。" },
      C: { verdict: "correct", reason: "10 A稍高於約8.2 A正常電流，能運作並提供過電流保護。" },
      D: { verdict: "incorrect", reason: "50 A過高，故障電流可能已造成導線過熱卻仍不切斷。" }
    },
    takeaway: "保險絲不是越大越好，要略高於正常工作電流。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-57": {
    encouragement: "先找實際到達收集板的日照功率，再乘面積、效率與30天時數。",
    keyIdea: "題組資料顯示約一半入射能到達地表；發電量＝日照×比例×面積×效率×時間。",
    steps: [
      "大氣頂平均350 W/m²，約50%到達地表，成為175 W/m²。",
      "2000 m²收集板接收功率約350 kW。",
      "效率20%，平均電功率約70 kW。",
      "30天＝720 h，發電70×720＝5.04×10⁴ kWh。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2.10×10³度低估了面積、時間或效率的乘積。" },
      B: { verdict: "incorrect", reason: "4.20×10³度仍遠小於70 kW連續720小時的電量。" },
      C: { verdict: "correct", reason: "平均電功率70 kW乘720 h，得到5.04×10⁴度。" },
      D: { verdict: "incorrect", reason: "1.01×10⁵度相當於未扣除約一半大氣損失。" }
    },
    takeaway: "度數就是kW×h；功率算完後別忘了乘總時數。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-6": {
    encouragement: "筆尖和像相隔約兩倍玻璃厚度，表示主要反射面在玻璃背後的金屬膜。",
    keyIdea: "家用背鍍鏡的主要反射來自玻璃後方不透光金屬膜。",
    steps: [
      "光先從空氣進入透明玻璃。",
      "光穿過玻璃到達背面的金屬鍍層。",
      "金屬膜強烈反射光，再穿過玻璃回到眼睛。",
      "反射面在玻璃後方，因此筆尖與像有約兩倍厚度的間隔。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "玻璃前表面只有少量反射，不能形成主要清晰鏡像。" },
      B: { verdict: "incorrect", reason: "折射只改變光線方向，不是鏡像形成的主要原因。" },
      C: { verdict: "incorrect", reason: "主要反射面不是普通背面玻璃界面，而是其上的金屬膜。" },
      D: { verdict: "correct", reason: "光穿過玻璃後由背面金屬膜反射，符合像與筆尖的間距。" }
    },
    takeaway: "一般鏡子真正主要反光的是背面金屬鍍層。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-10": {
    encouragement: "電磁感應就是磁通量改變生電；發電機把轉動的力學能變成電能。",
    keyIdea: "發電機與變壓器都利用電磁感應；需有變動磁通量。",
    steps: [
      "法拉第發現變動磁通量可產生感應電動勢。",
      "發電機讓線圈與磁場相對運動，使磁通量改變。",
      "輸出的電能來自外界帶動轉子的力學能。",
      "變壓器可依匝數比升壓或降壓，且通常需交流。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "厄斯特發現電流磁效應；電磁感應由法拉第等人發現。" },
      B: { verdict: "correct", reason: "發電機用磁通量變化產生感應電流，將力學能轉成電能。" },
      C: { verdict: "incorrect", reason: "穩定直流不會持續改變磁通量，通常需交流或相對運動。" },
      D: { verdict: "incorrect", reason: "變壓器改變線圈匝數比，既可升壓也可降壓。" }
    },
    takeaway: "厄斯特是電生磁；法拉第是變動磁生電。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-55": {
    encouragement: "落下越快，迎面撞上的空氣越多，阻力增大，直到與重力平衡成終端速度。",
    keyIdea: "空氣阻力隨物體速率增大；淨力與加速度則逐漸減小。",
    steps: [
      "物體剛落下速度小，空氣阻力小，重力占優勢。",
      "速度增加後，空氣阻力隨之增大。",
      "淨向下力mg−f變小，所以加速度逐漸減小。",
      "達終端速度時f＝mg，加速度為零，但重力仍存在。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "阻力增加會使淨力下降，因此加速度量值逐漸變小。" },
      B: { verdict: "incorrect", reason: "1.4秒時物體已在運動，空氣阻力不會為零。" },
      C: { verdict: "incorrect", reason: "阻力會隨速度改變，不是全程固定值。" },
      D: { verdict: "correct", reason: "物體速度越快，與空氣作用越強，阻力量值越大。" },
      E: { verdict: "incorrect", reason: "重力mg不會在2秒時消失；終端速度只是阻力與重力平衡。" }
    },
    takeaway: "終端速度不是沒有重力，而是阻力剛好平衡重力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-67": {
    encouragement: "所有坡道都光滑無阻力，所以球在每條坡道上的力學能都守恆。",
    keyIdea: "只有重力作功時，動能與位能互換，總力學能不變。",
    steps: [
      "甲、乙、丙坡道上球會升降，位能與動能都隨時間改變。",
      "但坡道光滑，正向力不作功，力學能守恆。",
      "丁為水平延伸，球高度不變，所以重力位能不變。",
      "丁上也無摩擦，因此力學能同樣不變。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲坡道上的球高度改變，所以重力位能隨時間改變。" },
      B: { verdict: "incorrect", reason: "乙坡道上速度隨高度改變，動能並非固定。" },
      C: { verdict: "correct", reason: "丙坡道光滑，只有重力作功，因此總力學能不變。" },
      D: { verdict: "incorrect", reason: "丁情境的完整運動仍包含小球先由 P 沿左坡下降，這一段高度改變，因此重力位能不會全程固定。" },
      E: { verdict: "correct", reason: "丁情境全程無阻力，重力位能與動能互換後總力學能仍守恆。" }
    },
    takeaway: "力學能是否守恆看有沒有非保守力作功，不是看動能或位能各自是否固定。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-64": {
    encouragement: "電梯下降減速時，加速度向上，地板支持力必大於體重。",
    keyIdea: "N−mg＝ma；最後4秒由2 m/s減至0，加速度向上0.5 m/s²。",
    steps: [
      "學生體重mg＝50×10＝500 N。",
      "下降初段加速向下，N小於500 N；等速段N＝500 N。",
      "最後4秒由2 m/s減至0，加速度量值a＝0.5 m/s²且向上。",
      "N＝m(g＋a)＝50×10.5＝525 N，為三段最大值。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "25 N只是ma的量值，不是地板總支持力。" },
      B: { verdict: "incorrect", reason: "50是學生質量數值，單位也不是支持力牛頓。" },
      C: { verdict: "incorrect", reason: "500 N是等速階段支持力，最後減速階段更大。" },
      D: { verdict: "correct", reason: "下降減速時N＝50(10＋0.5)＝525 N。" },
      E: { verdict: "incorrect", reason: "550 N對應向上1 m/s²，與4秒減去2 m/s不符。" }
    },
    takeaway: "電梯加速度向上時變重、向下時變輕；判斷看加速度方向。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-42": {
    encouragement: "要減少受傷，就讓繩子多伸長一些、把停下來的時間拉長；尼龍最適合吸收衝擊。",
    keyIdea: "同樣衝量下，延長減速時間可降低平均拉力；較有彈性的尼龍繩能提供緩衝。",
    steps: [
      "登山者由相同高度落下，繩子需使其速度降為零。",
      "速度改變相近，所需衝量相近。",
      "F平均Δt＝Δp，減速時間越長，平均力越小。",
      "尼龍繩較能彈性伸長，可延長減速距離與時間。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "棉繩強度與動態承重表現不如專用尼龍登山繩。" },
      B: { verdict: "correct", reason: "尼龍繩具有合適延展性，可吸收墜落能量並降低衝擊力。" },
      C: { verdict: "incorrect", reason: "碳纖維剛性高、伸長小，停下時間短，衝擊力較大。" },
      D: { verdict: "incorrect", reason: "鋼索非常剛硬，幾乎不伸長，不能良好緩衝墜落。" },
      E: { verdict: "incorrect", reason: "蜘蛛絲雖強韌，但依題組材料曲線與實際登山用途，尼龍有更合適的伸長緩衝。" }
    },
    takeaway: "安全繩不只要夠強，也要能適度伸長來降低停止時的衝擊。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-44": {
    encouragement: "無摩擦時，木塊動能與彈簧位能來回交換，總量不變。",
    keyIdea: "½mv²＝½kx²；到最壓縮處速度為零、彈簧力kx最大。",
    steps: [
      "剛接觸彈簧時能量為½mv²。",
      "最大壓縮時全部轉為½kx²，所以x＝v√(m/k)。",
      "彈簧回復時把位能還給木塊，回到起點速率恢復v。",
      "彈簧力kx隨壓縮量增加，在最短時最大。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由½mv²＝½kx²可得x＝v√(m/k)。" },
      B: { verdict: "incorrect", reason: "壓縮時木塊動能逐漸轉為彈簧位能，動能不守恆。" },
      C: { verdict: "correct", reason: "無摩擦使力學能守恆，回到原位置時速率恢復為v。" },
      D: { verdict: "incorrect", reason: "剛開始壓縮時x接近0，彈簧力kx最小。" },
      E: { verdict: "correct", reason: "最大壓縮量時kx最大，因此彈簧作用力最大。" }
    },
    takeaway: "彈簧越壓越用力；無摩擦時能量會完整地還回來。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-45": {
    encouragement: "有摩擦時，一部分力學能一路轉成熱，所以壓得較少、彈回也較慢。",
    keyIdea: "摩擦作負功使力學能持續下降，最大壓縮量與返回速率都小於無摩擦值。",
    steps: [
      "木塊向左壓縮彈簧時，摩擦力持續消耗力學能。",
      "到停止點可存入彈簧的能量小於原動能，所以壓縮量較小。",
      "彈回時摩擦再次消耗能量。",
      "回到起始位置時動能小於原來，速率小於v。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "摩擦耗能使½kx²小於原½mv²，因此x小於v√(m/k)。" },
      B: { verdict: "correct", reason: "往返兩段都受摩擦耗能，回到原處速率必小於v。" },
      C: { verdict: "incorrect", reason: "速率等於v只會出現在無摩擦、力學能完整回復時。" },
      D: { verdict: "incorrect", reason: "力學能在後續彈回過程仍會因摩擦繼續下降，最大壓縮時不是全程最小。" },
      E: { verdict: "incorrect", reason: "系統力學能從一開始就因摩擦下降，最大值在運動初始，不在最大壓縮處。" }
    },
    takeaway: "摩擦讓往返運動不對稱地耗能，回程不可能恢復原速。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-16": {
    encouragement: "功率—時間圖下方的面積就是能量；三角形面積一眼可算。",
    keyIdea: "E＝∫Pdt；圖中底30 s、高300 W的三角形面積為4500 J。",
    steps: [
      "功率是每秒消耗的能量。",
      "總能量等於P-t圖曲線下的面積。",
      "圖形可視為底30 s、高300 W的三角形。",
      "E＝½×30×300＝4500 J。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "150是平均功率的瓦特數，不是總能量焦耳。" },
      B: { verdict: "incorrect", reason: "3000 J未完整計入整個30秒曲線下面積。" },
      C: { verdict: "correct", reason: "三角形面積½×30 s×300 W＝4500 J。" },
      D: { verdict: "incorrect", reason: "6000 J不是題圖功率曲線下的面積。" },
      E: { verdict: "incorrect", reason: "9000 J相當於把300 W維持30秒，忽略功率並非全程最大。" }
    },
    takeaway: "速度圖面積是位移，功率圖面積是能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-17": {
    encouragement: "把上一題4500 J換成mgh，再除以每層3公尺即可。",
    keyIdea: "高度h＝E/(mg)＝9 m，相當於3層樓高。",
    steps: [
      "克服重力能量E＝4500 J。",
      "甲生質量50 kg，g＝10 m/s²。",
      "h＝E/(mg)＝4500/(50×10)＝9 m。",
      "每層3 m，所以9÷3＝3層。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一層3 m只增加1500 J位能，不是4500 J。" },
      B: { verdict: "correct", reason: "4500 J對應高度9 m，除以每層3 m得到3層。" },
      C: { verdict: "incorrect", reason: "五層需增加7500 J位能，高於題圖能量。" },
      D: { verdict: "incorrect", reason: "七層高度21 m，所需能量為10500 J。" },
      E: { verdict: "incorrect", reason: "九層需13500 J，遠大於4500 J。" }
    },
    takeaway: "樓層題先由mgh求總高度，再除以單層高度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-55": {
    encouragement: "手機直立時，一條彈簧被拉長、另一條被壓短，兩者差值共同支撐重量。",
    keyIdea: "上下彈簧合力為k(d₁−d₂)，平衡時等於Mg。",
    steps: [
      "平放時兩彈簧自然長皆為d₀。",
      "直立後上彈簧伸長d₁−d₀，下彈簧壓縮d₀−d₂。",
      "兩者向上彈力和為k[(d₁−d₀)+(d₀−d₂)]＝k(d₁−d₂)。",
      "靜力平衡k(d₁−d₂)＝Mg，所以g＝k(d₁−d₂)/M。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此式把M與k位置顛倒且多出2，量綱也不是加速度。" },
      B: { verdict: "incorrect", reason: "重力加速度應與彈簧常數k成正比，不是與M/k成正比。" },
      C: { verdict: "incorrect", reason: "兩彈簧的形變效果相加後沒有額外除以2。" },
      D: { verdict: "correct", reason: "由k(d₁−d₂)＝Mg可得g＝k(d₁−d₂)/M。" },
      E: { verdict: "incorrect", reason: "此式量綱不符，且形變差應在分子而不是分母。" }
    },
    takeaway: "兩條彈簧共同作用時，先把各自形變產生的力方向畫清楚。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-58": {
    encouragement: "合併前65個太陽質量、合併後62個，少掉3個太陽質量轉成重力波能量。",
    keyIdea: "輻射能E＝Δmc²，Δm＝3M☉≈6×10³⁰ kg。",
    steps: [
      "初始總質量為36＋29＝65 M☉。",
      "新黑洞質量62 M☉，質量差3 M☉。",
      "Δm≈3×2.0×10³⁰＝6.0×10³⁰ kg。",
      "E＝Δmc²≈6.0×10³⁰×(3×10⁸)²＝5.4×10⁴⁷ J。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3.0只是太陽質量差的數字，不是焦耳能量。" },
      B: { verdict: "incorrect", reason: "65是合併前太陽質量總數，不是輻射能量。" },
      C: { verdict: "incorrect", reason: "3.0×10¹⁷ J遠低於數個太陽質量轉能量的量級。" },
      D: { verdict: "incorrect", reason: "1.8×10³⁹ J仍比代入c²所得結果小數億倍。" },
      E: { verdict: "correct", reason: "3個太陽質量依E＝mc²轉換約為5.4×10⁴⁷ J。" }
    },
    takeaway: "極少比例的質量乘上光速平方，也能成為極巨大能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-52": {
    encouragement: "題組直接說微結構讓光走更長、吸收更多波長，這兩點就是效率提升原因。",
    keyIdea: "增加光在元件內路徑與擴大吸收波長範圍，都能提高被吸收光能比例。",
    steps: [
      "表面微結構讓入射光在電池內走更長路徑。",
      "路徑越長，光被材料吸收的機會越高。",
      "能吸收的日光波長範圍越廣，可利用的光能越多。",
      "題文沒有把溫度、電阻係數或日地距離列為此改良機制。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "工作溫度可能在其他情況影響電池，但不是上文指出的兩項微結構因素。" },
      B: { verdict: "correct", reason: "光在內部路徑增長，提高被吸收並轉成電能的機會。" },
      C: { verdict: "incorrect", reason: "題文沒有說微結構藉改變內外電阻係數提升效率。" },
      D: { verdict: "correct", reason: "可吸收幾乎全部波段日光，代表更多入射光能可被利用。" },
      E: { verdict: "incorrect", reason: "太陽距離影響入射強度，不是電池把已接收光能轉電能的內部效率。" }
    },
    takeaway: "效率看輸入光能中有多少被吸收並成功轉成電能。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-53": {
    encouragement: "微結構約150～250 nm，氫原子直徑約0.1 nm，相除就是一千多倍。",
    keyIdea: "200 nm÷0.1 nm約2×10³，最接近1000倍。",
    steps: [
      "光碟微結構尺寸量級約200 nm。",
      "氫原子直徑量級約0.1 nm。",
      "倍率約200/0.1＝2000。",
      "在選項中最接近10³，也就是1000。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.1倍表示微結構比原子還小，與奈米尺寸資料不符。" },
      B: { verdict: "incorrect", reason: "微結構不是單一原子大小，而是跨越許多原子。" },
      C: { verdict: "incorrect", reason: "10倍只有約1 nm，仍遠小於150～250 nm。" },
      D: { verdict: "correct", reason: "200 nm與0.1 nm相除約2000，量級最接近1000倍。" },
      E: { verdict: "incorrect", reason: "10000倍對應約1000 nm，比題述微結構大數倍。" }
    },
    takeaway: "估數量級不必追求最後一位，先抓10的次方最重要。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-55": {
    encouragement: "水位升高5公尺時增加的水量，就近似水面積乘5公尺。",
    keyIdea: "滿水位附近面積A≈ΔV/Δh＝47百萬m³/5m＝9.4百萬m²。",
    steps: [
      "表中245 m水量1217百萬m³，250 m為1264百萬m³。",
      "增加水量ΔV＝1264−1217＝47百萬m³。",
      "水位增加Δh＝5 m。",
      "A≈ΔV/Δh＝47/5＝9.4百萬m²。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "15百萬m²乘5 m會增加75百萬m³，超過表中47。" },
      B: { verdict: "correct", reason: "47百萬m³除以5 m，得到9.4百萬m²。" },
      C: { verdict: "incorrect", reason: "6.5百萬m²只會對應約32.5百萬m³增量。" },
      D: { verdict: "incorrect", reason: "5.1百萬m²低估了滿水位附近的體積變化。" },
      E: { verdict: "incorrect", reason: "0.10百萬m²與大型水庫水量變化量級明顯不符。" }
    },
    takeaway: "體積小變化可用底面積×高度變化估算。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-56": {
    encouragement: "每秒30立方公尺水下降160公尺，先算水力功率，再乘25%效率。",
    keyIdea: "P水＝ρQgh＝48 MW，電功率為0.25×48＝12 MW。",
    steps: [
      "每秒質量流率ρQ＝1000×30＝30000 kg/s。",
      "滿水位到發電機高度差160 m。",
      "水力功率＝30000×10×160＝4.8×10⁷ W＝48 MW。",
      "電能效率25%，輸出＝48×0.25＝12 MW。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "ρQgh乘25%得到1.2×10⁷ W，也就是12 MW。" },
      B: { verdict: "incorrect", reason: "4 MW未正確使用160 m落差或25%效率。" },
      C: { verdict: "incorrect", reason: "12 kW比正確值小1000倍，混淆了kW與MW。" },
      D: { verdict: "incorrect", reason: "4 kW遠低於大型水流與160 m落差可提供的功率。" },
      E: { verdict: "incorrect", reason: "1.5 kW與每秒30噸水的能量量級完全不符。" }
    },
    takeaway: "水力發電功率可用質量流率×g×落差×效率。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-43": {
    encouragement: "速度圖可判斷高度變化：速度為正時上升，速度為負時下降。",
    keyIdea: "槓鈴位能隨高度變化；戊到庚期間主要向下運動，所以位能減少。",
    steps: [
      "速度圖在時間軸上方代表槓鈴向上，位能增加。",
      "在時間軸下方代表向下，位能減少。",
      "戊到庚之間速度為負，直到庚附近回到零。",
      "因此這段高度下降、重力位能減少。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "零秒到甲速度量值由約0.6降至較小，動能沒有增加。" },
      B: { verdict: "incorrect", reason: "丁到戊速度仍為正，槓鈴上升，位能增加。" },
      C: { verdict: "correct", reason: "戊到庚速度為負，槓鈴向下移動，所以位能減少。" },
      D: { verdict: "incorrect", reason: "位能最低點取決於累積高度，不是速度最負的己時刻。" },
      E: { verdict: "incorrect", reason: "丙時刻仍在上升，後續到丁、戊高度還會增加。" }
    },
    takeaway: "速度正負決定位置增減；速度最小不等於位置最低。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-44": {
    encouragement: "先從圖估甲到乙的加速度約5 m/s²，再把重力也加進選手向上施力。",
    keyIdea: "向上加速時F−mg＝ma，所以F＝m(g＋a)。",
    steps: [
      "槓鈴質量100 kg。",
      "由甲到乙速度增加量除時間，平均加速度約5 m/s²向上。",
      "受力方程F−mg＝ma。",
      "F＝100×(10＋5)＝1500 N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "100 N遠小於槓鈴本身1000 N重量，無法使其向上加速。" },
      B: { verdict: "incorrect", reason: "500 N仍小於重量，合力會向下。" },
      C: { verdict: "incorrect", reason: "1000 N只平衡重量，無法產生圖示向上加速度。" },
      D: { verdict: "correct", reason: "F＝m(g＋a)＝100×15＝1500 N。" },
      E: { verdict: "incorrect", reason: "3200 N會造成約22 m/s²向上加速度，遠大於速度圖斜率。" }
    },
    takeaway: "向上加速時施力大於重量，向下加速時施力小於重量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-59": {
    encouragement: "終端速度由mg＝kv²決定；增加小體積重物使m變大，而降落傘與截面積不變。",
    keyIdea: "v終端＝√(mg/k)；加重會提高開傘前與開傘後的終端速度。",
    steps: [
      "未開傘時k較小，開傘後截面積增加使k較大。",
      "同一配置加重後m增加，終端速度都會提高。",
      "所以開傘後新速度v₄大於原開傘後v₂。",
      "未開傘的v₃又大於開傘後的v₄，因此也必大於v₂。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "加重但截面積近似不變，v₃應大於原本v₁，不是v₁較大。" },
      B: { verdict: "incorrect", reason: "同一次加重跳傘中，開傘使k大增，因此v₄小於v₃。" },
      C: { verdict: "correct", reason: "相同降落傘下增加總質量，使開傘後終端速度v₄大於v₂。" },
      D: { verdict: "correct", reason: "v₃是加重且未開傘的終端速度，必大於原本開傘後較小的v₂。" },
      E: { verdict: "incorrect", reason: "加重會提高終端速度，所以v₄不會等於v₂。" }
    },
    takeaway: "終端速度隨質量增大而升高，隨阻力係數與截面積增大而降低。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-37": {
    encouragement: "每公斤水下降100公尺，位能減少量就是gh。",
    keyIdea: "單位質量重力位能u＝gh＝10×100＝1000 J/kg。",
    steps: [
      "重力位能U＝mgh。",
      "每公斤能量u＝U/m＝gh。",
      "代入g＝10 m/s²、h＝100 m。",
      "u＝1000 J/kg＝10³ J/kg。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁰ J/kg只相當於0.1 m落差，遠小於100 m。" },
      B: { verdict: "incorrect", reason: "10¹ J/kg少了100倍。" },
      C: { verdict: "incorrect", reason: "10² J/kg對應約10 m落差，不是100 m。" },
      D: { verdict: "correct", reason: "gh＝10×100＝1000 J/kg＝10³ J/kg。" },
      E: { verdict: "incorrect", reason: "10⁴ J/kg相當於1000 m落差，比題設大10倍。" }
    },
    takeaway: "單位質量的重力位能不需要知道水量，直接算gh。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-27": {
    encouragement: "氣囊達半壓約需30 ms；駕駛速度由30降到15 m/s，套F＝mΔv/Δt。",
    keyIdea: "安全帶與車體在0.030 s內使50 kg駕駛減速15 m/s，平均定力約2.5×10⁴ N。",
    steps: [
      "由正式充氣圖，飽和壓力一半約在30 ms＝0.030 s。",
      "54 km/h＝15 m/s，速度由30降至15 m/s。",
      "加速度量值a＝15/0.030＝500 m/s²。",
      "F＝ma＝50×500＝25000 N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "150000 N對應3000 m/s²，遠大於圖示時間內的速度變化。" },
      B: { verdict: "correct", reason: "50×(30−15)/0.030＝25000 N。" },
      C: { verdict: "incorrect", reason: "8880 N未正確使用30 ms充氣時間與15 m/s速度改變。" },
      D: { verdict: "incorrect", reason: "1000 N只造成20 m/s²，30 ms內只能改變0.6 m/s。" },
      E: { verdict: "incorrect", reason: "250 N過小，無法在撞擊短時間內顯著降低駕駛速度。" }
    },
    takeaway: "碰撞時間越短，同樣速度改變需要的平均力越大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-20": {
    encouragement: "一年電能約4.3×10¹⁷ J，每公斤冰融化要3.2×10⁵ J，相除即可。",
    keyIdea: "融冰質量m＝E/L，約1.3×10¹² kg。",
    steps: [
      "每公斤融化熱80 kcal≈80×4 kJ＝320 kJ＝3.2×10⁵ J。",
      "比特幣年耗能約4.3×10¹⁷ J。",
      "m＝4.3×10¹⁷÷3.2×10⁵。",
      "約1.3×10¹² kg，量級為10¹²。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10¹⁰ kg需要的熱量只約3.2×10¹⁵ J，比年耗能小百倍。" },
      B: { verdict: "correct", reason: "總能量除以每公斤融化熱約得1.3×10¹² kg。" },
      C: { verdict: "incorrect", reason: "10¹⁶ kg融化需約3.2×10²¹ J，遠超題設能量。" },
      D: { verdict: "incorrect", reason: "10²⁰ kg比合理融冰量大八個數量級。" },
      E: { verdict: "incorrect", reason: "10²⁴ kg是行星尺度質量，與題設能耗完全不符。" }
    },
    takeaway: "相變題用總能量除以單位質量潛熱，不需計算溫度變化。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-21": {
    encouragement: "先算抬升一座水庫所需mgh，再用全年總能量相除。",
    keyIdea: "一庫需約3.2×10¹⁵ J；4.3×10¹⁷ J可抬升約1.3×10²座。",
    steps: [
      "一座水庫水質量＝8.0×10⁷×1000＝8.0×10¹⁰ kg。",
      "抬高4000 m所需E＝mgh＝8.0×10¹⁰×10×4000。",
      "得到3.2×10¹⁵ J。",
      "4.3×10¹⁷÷3.2×10¹⁵≈1.3×10²座。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "能量比值約134，量級最接近10²座。" },
      B: { verdict: "incorrect", reason: "10⁵座需要約3.2×10²⁰ J，超過年耗能近千倍。" },
      C: { verdict: "incorrect", reason: "10⁸座所需能量比題設大約百萬倍。" },
      D: { verdict: "incorrect", reason: "10¹¹座已遠超全球年耗能可負擔的抬升數量。" },
      E: { verdict: "incorrect", reason: "10¹⁴座完全不符合mgh估算的能量量級。" }
    },
    takeaway: "巨大能耗也可用熟悉物體的mgh換算，幫助理解量級。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-22": {
    encouragement: "光走10分鐘的距離，太空船走200天；先各自換成秒再比較。",
    keyIdea: "地火距離約c×600 s＝1.8×10¹¹ m；除以200天得約10⁴ m/s。",
    steps: [
      "火星訊號10分鐘到地球，距離約3×10⁸×600＝1.8×10¹¹ m。",
      "太空船飛行時間200天＝200×86400≈1.7×10⁷ s。",
      "平均速率＝1.8×10¹¹÷1.7×10⁷。",
      "約1.0×10⁴ m/s。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10 m/s在200天只能走約1.7×10⁸ m，遠不足地火距離。" },
      B: { verdict: "incorrect", reason: "10² m/s仍比所需平均速率小約100倍。" },
      C: { verdict: "correct", reason: "1.8×10¹¹ m除以約1.7×10⁷ s，量級為10⁴ m/s。" },
      D: { verdict: "incorrect", reason: "10⁶ m/s會在約兩天走完，不需200天。" },
      E: { verdict: "incorrect", reason: "10⁸ m/s接近光速量級，遠高於此太空船平均速率。" }
    },
    takeaway: "電磁訊號用分鐘，太空船用天，單位統一後才能比較速度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-47": {
    encouragement: "由平衡電壓公式看量綱：電量e乘電壓E是能量，αT也必須是能量。",
    keyIdea: "1 V＝1 J/C，因此eE為J；公式αT/e為電壓，所以αT也為J。",
    steps: [
      "E在題組代表電壓，e代表基本電量。",
      "電量×電壓＝C×J/C＝J，所以eE是能量。",
      "對數沒有單位，αT/e必須和電壓同單位。",
      "因此αT＝e×電壓，也具有能量單位。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "eE是電量乘電壓，單位C·V＝J，與能量相同。" },
      B: { verdict: "incorrect", reason: "T是絕對溫度，單位為K，不是能量。" },
      C: { verdict: "incorrect", reason: "α/e少了溫度T，依公式不會單獨具有能量單位。" },
      D: { verdict: "incorrect", reason: "溫度除以電量的單位K/C，並非焦耳。" },
      E: { verdict: "correct", reason: "由αT/e具有電壓單位可知αT具有電量×電壓，即能量單位。" }
    },
    takeaway: "量綱分析能在不代數字時快速判斷物理式是否合理。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-48": {
    encouragement: "濃度比固定時，公式裡只有絕對溫度T改變；攝氏要先加273。",
    keyIdea: "平衡電壓量值與絕對溫度成正比，27°C與17°C分別約300 K與290 K。",
    steps: [
      "濃度內外比固定，對數項固定。",
      "α與e也是常數，所以|E|∝T。",
      "27°C≈300 K，17°C≈290 K。",
      "電壓比為300/290。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣體與熱力學公式需用絕對溫度，不能直接用攝氏27/17。" },
      B: { verdict: "incorrect", reason: "不但使用攝氏，比例方向也與較高溫電壓較大相反。" },
      C: { verdict: "correct", reason: "絕對溫度比為(27＋273)/(17＋273)＝300/290。" },
      D: { verdict: "incorrect", reason: "290/300是較低溫對較高溫的反向比值。" },
      E: { verdict: "incorrect", reason: "38/36與攝氏轉開爾文或題設公式都沒有對應。" }
    },
    takeaway: "只要公式涉及T，通常指開爾文絕對溫度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
