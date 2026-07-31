(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-109-46": {
    encouragement: "作用力與反作用力一定作用在不同物體上，而且是同一種交互作用。",
    keyIdea: "兩磁鐵互相排斥，左磁鐵受F₁、右磁鐵受F₂，兩力等大反向。",
    steps: ["先找施力者與受力者互換的一對力。", "F₁與F₂都是兩磁鐵彼此施加的磁力，作用在不同磁鐵上。", "所以A是牛頓第三定律的一對力。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "F₁、F₂是兩磁鐵互相施力，等大、反向且作用在不同物體。" },
      B: { verdict: "incorrect", reason: "f₁、f₂分別是桌面對不同磁鐵的摩擦力，並非彼此的一對力。" },
      C: { verdict: "incorrect", reason: "F₁與f₁都作用在左磁鐵上，只是平衡力。" },
      D: { verdict: "incorrect", reason: "T₁與W₁都作用在左磁鐵上，不是作用與反作用。" },
      E: { verdict: "incorrect", reason: "F₁作用在左磁鐵，f₂是桌面作用於右磁鐵，交互作用不同。" }
    },
    takeaway: "第三定律看不同物體；平衡力則可能同時作用在同一物體。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-47": {
    encouragement: "兩磁鐵都靜止，先分別寫水平方向合力為零。",
    keyIdea: "磁力F₁、F₂互為作用反作用而等大；各磁鐵的摩擦力分別平衡磁力，所以f₁＝f₂。",
    steps: ["左磁鐵平衡得f₁＝F₁，右磁鐵平衡得f₂＝F₂。", "第三定律給F₁＝F₂，因此f₁＝f₂。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "W₁本身已是重力量值，不能再乘g與力比較。" },
      B: { verdict: "incorrect", reason: "W₂已是重力，不是質量；W₂g的單位也不是力。" },
      C: { verdict: "incorrect", reason: "題目明說兩磁鐵質量不同，所以重量不相等。" },
      D: { verdict: "incorrect", reason: "T₁、T₂分別平衡不同重量，質量不同時張力不同。" },
      E: { verdict: "correct", reason: "兩磁力等大，靜摩擦各自平衡磁力，因此f₁＝f₂。" }
    },
    takeaway: "看到靜力平衡，就依水平、鉛直方向分開列式。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-48": {
    encouragement: "碰撞前後先分清楚：碰撞會損失能量，碰撞後擺升則力學能守恆。",
    keyIdea: "原能量為m乙gL；黏合後共同升高L/2，保留能量為(m甲＋m乙)gL/2。",
    steps: ["令m甲/m乙＝α，原來只有乙球在高度L，總能量為m乙gL。", "碰後兩球黏住並升高L/2，剩餘能量為(1＋α)m乙gL/2。", "損失比例＝1−(1＋α)/2＝(1−α)/2。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1/α未由碰前、碰後能量相減得到，且α＜1時還會大於1。" },
      B: { verdict: "incorrect", reason: "少算了乙球質量所保留的位能。" },
      C: { verdict: "correct", reason: "損失能量除以原能量正是(1−α)/2。" },
      D: { verdict: "incorrect", reason: "(1＋α)/2是碰後保留的比例，不是損失比例。" },
      E: { verdict: "incorrect", reason: "完全非彈性碰撞會損失力學能。" }
    },
    takeaway: "損失比例＝一減掉保留比例。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-49": {
    encouragement: "先由擺升高度求碰後速度，再用碰撞瞬間的動量守恆。",
    keyIdea: "乙球碰前速度為√(2gL)，黏合後速度為√(gL)，所以1＋α＝√2。",
    steps: ["乙球由水平位置落下L，碰前速率為√(2gL)。", "兩球黏合後能升高L/2，碰後速率為√(gL)。", "動量守恆：m乙√(2gL)＝(1＋α)m乙√(gL)，得α＝√2−1約0.41。", "最接近0.4，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.9與計算值約0.41差距很大。" },
      B: { verdict: "incorrect", reason: "0.6仍高於由動量與擺高求得的比值。" },
      C: { verdict: "correct", reason: "√2−1約0.414，最接近0.4。" },
      D: { verdict: "incorrect", reason: "0.25低於計算值約0.41。" },
      E: { verdict: "incorrect", reason: "0.1明顯過小。" }
    },
    takeaway: "碰撞瞬間用動量；碰撞前後的擺動用力學能。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-85-83": {
    encouragement: "先記三個核心單位：電流安培、電壓伏特、電量庫侖。",
    keyIdea: "正式答案保留A、H、I、K；其中電量欄的I與K均依當年官方答案計分。",
    steps: ["電流的標準單位是安培，所以A正確。", "電壓的標準單位是伏特，所以H正確。", "電量的SI單位是庫侖；本題正式答案同時列I、K，解析忠實保留官方計分鍵，不自行刪改。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "安培是電流單位。" },
      B: { verdict: "incorrect", reason: "瓦特是功率單位，不是電流單位。" },
      C: { verdict: "incorrect", reason: "庫侖是電量單位，不是電流單位。" },
      D: { verdict: "incorrect", reason: "伏特是電壓單位，不是電流單位。" },
      E: { verdict: "incorrect", reason: "安培不是電壓單位。" },
      F: { verdict: "incorrect", reason: "瓦特不是電壓單位。" },
      G: { verdict: "incorrect", reason: "庫侖不是電壓單位。" },
      H: { verdict: "correct", reason: "伏特是電壓單位。" },
      I: { verdict: "correct", reason: "此項列在當年官方答案中，本站依正式計分鍵保留。" },
      J: { verdict: "incorrect", reason: "瓦特是功率單位，不是電量單位。" },
      K: { verdict: "correct", reason: "庫侖是電量的SI單位。" },
      L: { verdict: "incorrect", reason: "伏特是電壓單位，不是電量單位。" }
    },
    takeaway: "科學概念以A、H、K三個標準單位為核心；遇歷年答案異例要明確標示來源差異。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-85-84": {
    encouragement: "只有磁場正在改變時，另一線圈才會出現感應電流。",
    keyIdea: "打開與再關上的瞬間磁通量改變；開關保持打開後磁通不再改變。",
    steps: ["S打開瞬間，第二線圈電流由穩定值降到零，第一線圈有感應電流。", "打開一段時間後磁場維持不變，感應電流消失。", "S再關上瞬間電流由零增加，第一線圈再出現感應電流。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "打開瞬間磁通量正在減少，會有感應電流。" },
      B: { verdict: "incorrect", reason: "瞬間磁場有變化，不會完全無電流。" },
      C: { verdict: "incorrect", reason: "經一段時間磁通量已不再變化。" },
      D: { verdict: "correct", reason: "穩定無電流時磁場不變，第一線圈沒有感應電流。" },
      E: { verdict: "correct", reason: "再關上的瞬間磁通量增加，會有感應電流。" },
      F: { verdict: "incorrect", reason: "再關上的瞬間正有磁通變化。" }
    },
    takeaway: "電磁感應看的是磁通量變化，不是單看附近有沒有磁場。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-85-86": {
    encouragement: "把B₁看成總電流燈泡，再看右邊兩條並聯支路的分流。",
    keyIdea: "R₁增大使總等效電阻增大、總電流減小；並聯端電壓升高，使B₂支路更亮。",
    steps: ["B₁串聯在整個電路上，R₁增大使總電阻增大，所以B₁電流變小。", "R₁支路本身電阻增大，其電流變小。", "右側並聯部分分得的電壓上升，流過R₂與B₂支路的電流增加，B₂變亮。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "總電阻改變，B₁電流不會不變。" },
      B: { verdict: "incorrect", reason: "總電阻增大使總電流變小。" },
      C: { verdict: "correct", reason: "B₁承擔總電流，會隨總電阻增加而變小。" },
      D: { verdict: "incorrect", reason: "R₁改變會改變該支路電流。" },
      E: { verdict: "incorrect", reason: "R₁增大不會使流過自身的電流增加。" },
      F: { verdict: "correct", reason: "R₁增大後其支路電流減小。" },
      G: { verdict: "incorrect", reason: "並聯端電壓改變，B₂亮度不會不變。" },
      H: { verdict: "correct", reason: "B₂支路電流增加，因此亮度變大。" },
      I: { verdict: "incorrect", reason: "B₂獲得較大支路電壓，不會變暗。" }
    },
    takeaway: "混聯電路先判總電流，再判並聯支路的電壓與分流。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-85-87": {
    encouragement: "銅塊離水後浮力消失：上方彈簧要多拉，水槽則少承受一個向下反作用力。",
    keyIdea: "浸水時彈簧讀數W−浮力；台秤還會承受銅塊施給水的浮力反作用。",
    steps: ["銅塊離水後浮力變成零，彈簧秤須承擔完整重量，所以讀數變大。", "水不再受到銅塊向下的作用力，台秤讀數變小。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "浮力消失後，彈簧張力由W−F浮增為W。" },
      B: { verdict: "incorrect", reason: "少了浮力幫忙，彈簧讀數不會變小。" },
      C: { verdict: "incorrect", reason: "受力條件改變，讀數不會不變。" },
      D: { verdict: "incorrect", reason: "水槽少承受向下反作用力，台秤不會變大。" },
      E: { verdict: "correct", reason: "銅塊離水後不再向下壓水，台秤讀數變小。" },
      F: { verdict: "incorrect", reason: "原先浮力的反作用曾傳給台秤，離水後會消失。" }
    },
    takeaway: "浮力有反作用力：物體受水向上，水也受物體向下。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-85-88": {
    encouragement: "水平拋射的落地時間只由鉛直下落決定。",
    keyIdea: "同一高度、初始鉛直速度為零時，t＝√(2h/g)，不含水平速度與質量。",
    steps: ["鉛直方向是由高度h開始的自由落體。", "落地時間只含h與g，所以改變水平速度不影響時間。", "忽略空氣阻力時質量也不影響自由落體時間。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水平速度只改變落地點遠近，不延長下落時間。" },
      B: { verdict: "incorrect", reason: "水平與鉛直運動互相獨立，不會縮短時間。" },
      C: { verdict: "correct", reason: "同高度下落時間與水平速度無關。" },
      D: { verdict: "incorrect", reason: "無空氣阻力時重物不會落得較久。" },
      E: { verdict: "incorrect", reason: "質量加大也不會縮短自由落體時間。" },
      F: { verdict: "correct", reason: "落地時間與物體質量無關。" }
    },
    takeaway: "水平速度管水平距離，高度管落地時間。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-68": {
    encouragement: "光幾乎立刻到達，所以延遲秒數可直接換成到爆炸點的聲音距離。",
    keyIdea: "爆炸點到甲距離5v₀、到乙距離10v₀；在方格圖上是以甲、乙為圓心的兩個圓之交點。",
    steps: ["甲聽到延遲5秒，所以爆炸點離甲5v₀；乙延遲10秒，所以離乙10v₀。", "依正式方格比例，畫出兩個距離圓。", "兩圓交會落在K與N方塊。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "到甲、乙的格距不符合5v₀與10v₀。" },
      B: { verdict: "incorrect", reason: "不在兩個指定距離圓的交會範圍。" },
      C: { verdict: "incorrect", reason: "到乙的距離不足10v₀。" },
      D: { verdict: "incorrect", reason: "到甲的距離不等於5v₀。" },
      E: { verdict: "incorrect", reason: "兩個測得距離無法同時成立。" },
      F: { verdict: "incorrect", reason: "距甲過近，未達5v₀。" },
      G: { verdict: "incorrect", reason: "距甲、乙比例不符合1比2。" },
      H: { verdict: "incorrect", reason: "不在以乙為圓心、半徑10v₀的圓上。" },
      I: { verdict: "incorrect", reason: "到甲距離雖接近，但到乙距離不符。" },
      J: { verdict: "incorrect", reason: "不是兩個距離條件的交區。" },
      K: { verdict: "correct", reason: "正式圖中此區同時符合距甲5v₀、距乙10v₀。" },
      L: { verdict: "incorrect", reason: "到甲的格距超出5v₀。" },
      M: { verdict: "incorrect", reason: "位於甲附近，離甲不足5v₀。" },
      N: { verdict: "correct", reason: "此區是另一個符合兩個距離圓的交會位置。" },
      O: { verdict: "incorrect", reason: "到甲與乙的距離皆不符指定值。" },
      P: { verdict: "incorrect", reason: "離甲過遠，不能對應5秒。" },
      Q: { verdict: "incorrect", reason: "離乙不足10v₀。" },
      R: { verdict: "incorrect", reason: "沒有同時落在兩個距離圓上。" },
      S: { verdict: "incorrect", reason: "距甲明顯大於5v₀。" },
      T: { verdict: "incorrect", reason: "位於正式圖角落，兩個測距條件皆不成立。" }
    },
    takeaway: "兩個地點測距定位，就是找兩個圓的交點。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-69": {
    encouragement: "磁鐵靠近線圈與線圈靠近磁鐵是同一種相對運動，感應結果相同。",
    keyIdea: "S極靠近使磁通量增加，線圈以楞次定律產生排斥S極的磁場；正式繞線判得X經G到Y。",
    steps: ["不論移動磁鐵或線圈，只要兩者快速靠近，穿過線圈的磁通量就增加。", "線圈產生反抗靠近的磁場，依正式圖繞線可判電流由X經G流向Y。", "若兩者同速同向，彼此距離不變，沒有感應電流。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "靠近時有電流，但正式繞線方向不是Y到X。" },
      B: { verdict: "correct", reason: "磁鐵靠近時電流由X經G到Y。" },
      C: { verdict: "incorrect", reason: "線圈靠近的磁通變化相同，方向仍不是Y到X。" },
      D: { verdict: "correct", reason: "線圈靠近磁鐵時同樣由X經G到Y。" },
      E: { verdict: "incorrect", reason: "一起同速移動時相對位置不變，沒有此方向的電流。" },
      F: { verdict: "incorrect", reason: "相對位置不變，磁通量不變，也沒有反向電流。" }
    },
    takeaway: "電磁感應看相對位置是否改變，不只看誰在動。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-97-39": {
    encouragement: "台灣家用紅、黑兩條火線彼此是220 V；任一火線對白線才是110 V。",
    keyIdea: "110 V電器接紅黑會過壓；把白線與火線絞合也會讓接地系統帶電或短路。",
    steps: ["紅對白、黑對白各為110 V，是一般二孔110 V接法。", "紅對黑為220 V，會傷害110 V電器。", "黑白或紅白絞合再接另一火線，會造成危險的接地故障，因此A、D、E有害或危險。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "紅黑之間為220 V，超過電器額定110 V。" },
      B: { verdict: "incorrect", reason: "紅線對接地白線為110 V，是正常供電電壓。" },
      C: { verdict: "incorrect", reason: "黑線對接地白線同樣為110 V。" },
      D: { verdict: "correct", reason: "把黑火線與白接地線絞合，可能使接地系統帶電並造成危險。" },
      E: { verdict: "correct", reason: "把紅火線與白接地線絞合，同樣會造成危險接法。" }
    },
    takeaway: "接地線是保護用，不能和火線任意絞接。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-99-33": {
    encouragement: "A線圈在磁棒上方、B在線圈下方；兩邊的感應作用都會阻礙磁棒下落。",
    keyIdea: "楞次定律使磁力反抗磁通變化，所以磁棒在金屬管中下落較慢。",
    steps: ["磁棒遠離A，A要維持原本向下的磁通；由上看需順時針電流。", "磁棒接近B，B要反抗增加的向下磁通；由上看需逆時針電流。", "兩線圈的磁力都阻礙下落，所以A、C正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "感應電流產生向上的阻力，使管中下落較慢。" },
      B: { verdict: "incorrect", reason: "除重力外還有感應電流造成的磁力。" },
      C: { verdict: "correct", reason: "A線圈要維持向下磁通，由上看電流為順時針。" },
      D: { verdict: "incorrect", reason: "B線圈須產生向上磁場，由上看應為逆時針。" },
      E: { verdict: "incorrect", reason: "A應吸引磁棒、B應排斥磁棒，兩者都阻礙下降；選項說反了。" }
    },
    takeaway: "楞次定律的核心是反抗變化，不是永遠排斥。",
    reviewStatus: "approved", reviewerRole: "physics"
  }
});
