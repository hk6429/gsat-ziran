(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-83-36": {
    encouragement: "判斷合力是否為零，不是看物體有沒有動，而是看速度有沒有改變。",
    keyIdea: "牛頓第一定律：合力為零時，物體保持靜止或做等速度直線運動。",
    steps: [
      "由F＝ma，合力為零表示加速度為零。",
      "加速度為零表示速度向量不改變。",
      "因此物體可以靜止，也可以保持等速度直線運動。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "質心靜止或做等速度運動時，加速度為零，可判斷合力為零。" },
      B: { verdict: "incorrect", reason: "物體不需要持續受力才能維持運動；合力為零時也能等速度前進。" },
      C: { verdict: "incorrect", reason: "等速率只保證快慢不變；若方向持續改變，仍有加速度與合力。" },
      D: { verdict: "incorrect", reason: "等加速度可能是不為零的固定加速度，此時合力也不為零。" }
    },
    takeaway: "合力為零對應的是「速度向量不變」，不只是「速率不變」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-37": {
    encouragement: "碰撞時兩球互推的力量一樣大、時間也一樣長；質量較小的球速度改變較多。",
    keyIdea: "作用力與反作用力大小相等，所以兩球動量改變量等大；Δv＝Δp/m。",
    steps: [
      "碰撞時鋼球與鋁球互相施力，兩力大小相等、方向相反。",
      "受力時間相同，所以兩球所得衝量與動量改變量的量值相同。",
      "速度改變量Δv＝Δp/m。",
      "鋁球質量是鋼球的1/5，因此速度改變量是鋼球的5倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "依牛頓第三定律，兩球互相施加的撞擊力量值相等，不是鋁球的5倍。" },
      B: { verdict: "incorrect", reason: "兩球受等大反向衝量，所以動量改變量的量值相等。" },
      C: { verdict: "correct", reason: "相同動量改變量除以質量，0.2 kg鋁球的速度改變是1 kg鋼球的5倍。" },
      D: { verdict: "incorrect", reason: "動能改變還和碰撞前後速度有關，不能只由質量比判定為5倍。" }
    },
    takeaway: "碰撞先用第三定律找等大衝量，再用質量判斷誰的速度改變較多。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-38": {
    encouragement: "光跨越介面時，頻率由光源決定而保持不變；改變的是速度與波長。",
    keyIdea: "折射時頻率不變，不同色光在玻璃中的速度與折射率不同，因而產生色散。",
    steps: [
      "光進入玻璃後，介質使光速改變。",
      "光源振動頻率不因介面而改變。",
      "由v＝fλ，速度改變而頻率固定時，波長會改變。",
      "不同色光折射率不同，所以偏折程度不同而形成色散。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；玻璃對各色光折射率不同，才會把白光分開。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；光速在玻璃中改變而頻率不變，因此波長改變。" },
      C: { verdict: "correct", reason: "這是錯誤敘述；光跨介面時頻率由光源決定，不會因進入三稜鏡而改變。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；不同介質中的光速不同，各色光在玻璃中的速度也略有差異。" }
    },
    takeaway: "折射的固定量是頻率；速度與波長會隨介質改變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-39": {
    encouragement: "波可以把能量送到遠方，但介質中的粒子通常只在原位附近振動。",
    keyIdea: "波傳遞能量與動量，介質本身不會跟著波整體遠走。",
    steps: [
      "波動是擾動在空間中的傳播。",
      "波可以反射、折射、干涉與繞射。",
      "介質粒子只在平衡位置附近振動。",
      "因此傳出去的是擾動與能量，不是整批介質。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是波動的正確特性；波能傳遞能量，也能攜帶動量。" },
      B: { verdict: "incorrect", reason: "干涉與繞射是波的重要共同現象，因此敘述正確。" },
      C: { verdict: "incorrect", reason: "波遇到介面可產生反射與折射，這是正確的波動特性。" },
      D: { verdict: "correct", reason: "介質粒子通常只在原位附近振動，不會隨著波一路傳播到遠方。" }
    },
    takeaway: "看見波向前，不代表介質也向前；波主要傳遞的是擾動與能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-40": {
    encouragement: "攝氏零下可以很冷，但自然界有最低溫度：絕對零度。",
    keyIdea: "溫度有下限，絕對零度約為−273.15°C，不能任意降到−1000°C。",
    steps: [
      "一大氣壓下，冰水共存的平衡溫度為0°C。",
      "一大氣壓下，純水沸點為100°C。",
      "熱力學溫度最低為0 K，也就是約−273.15°C。",
      "所以攝氏溫度不能無限制降低。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；一大氣壓下冰水平衡溫度定為0°C。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；一大氣壓下純水的正常沸點是100°C。" },
      C: { verdict: "correct", reason: "這是錯誤敘述；溫度最低約為−273.15°C，不可能低到−1000°C。" },
      D: { verdict: "incorrect", reason: "溫度沒有像絕對零度那樣的已知上限，1000°C以上也能存在。" }
    },
    takeaway: "冷有極限：0 K約等於−273.15°C；熱則沒有相同形式的固定上限。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-41": {
    encouragement: "棉被不會自己生熱，它只是讓熱量進出變慢，所以熱物與冷物都能保溫。",
    keyIdea: "保溫材料降低熱傳速率，使物體溫度較慢接近室溫。",
    steps: [
      "熱會由高溫處流向低溫處。",
      "棉被中的靜止空氣不易導熱，也抑制對流。",
      "熱物散熱變慢，冷物從環境吸熱也變慢。",
      "所以兩者都能較久保持原來溫度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "棉被會減慢環境熱量進入冰塊，因此反而能延緩融化。" },
      B: { verdict: "incorrect", reason: "棉被本身不會主動升溫，它只是減慢物體和環境間的熱交換。" },
      C: { verdict: "correct", reason: "不論物體比室溫冷或熱，棉被都可降低熱傳速率，使溫度變化較小。" },
      D: { verdict: "incorrect", reason: "塑膠桶加蓋仍會導熱與輻射散熱，外覆棉被可進一步改善保溫。" }
    },
    takeaway: "保溫不是保持「熱」，而是減慢溫度改變；冷的東西同樣適用。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-42": {
    encouragement: "能源危機並不違反能量守恆；問題在於好用的能量會變成難再利用的分散熱能。",
    keyIdea: "總能量守恆，但能源的可利用程度會下降，有限燃料也會耗盡。",
    steps: [
      "能量轉換前後總量守恆。",
      "汽油、煤等化學能使用後，多轉為分散的熱與廢氣。",
      "這些低品質能量很難完整收集再作功。",
      "因此仍有燃料耗竭與可用能源不足的危機。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "能量守恆不是只在特殊情況成立；封閉系統的總能量始終守恆。" },
      B: { verdict: "incorrect", reason: "總量不減不代表所有能量都容易再利用，能源品質會在轉換中下降。" },
      C: { verdict: "incorrect", reason: "能量形式互換時總值不會減少，減少的是容易作功的可用能量。" },
      D: { verdict: "correct", reason: "能量守恆仍成立，但燃料變成分散熱與廢氣後難以再用，所以會有能源危機。" }
    },
    takeaway: "能源問題不只看「有多少」，也要看「能不能有效拿來做事」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-43": {
    encouragement: "顯微鏡是兩段放大：物鏡先做出放大的實像，目鏡再像放大鏡觀察它。",
    keyIdea: "複式顯微鏡的物鏡形成放大實像，此像位於目鏡焦距內，再由目鏡形成放大虛像。",
    steps: [
      "物體放在短焦距物鏡焦點稍外側。",
      "物鏡先形成倒立、放大的實像。",
      "調整鏡筒，使這個中間像位於目鏡焦距內。",
      "目鏡再把中間像放大成虛像供眼睛觀看。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "物鏡先形成放大的實像，並使中間像落在目鏡焦距內以供再次放大。" },
      B: { verdict: "incorrect", reason: "物鏡形成的是可作為目鏡物體的實像，不是虛像。" },
      C: { verdict: "incorrect", reason: "物鏡不會先形成縮小虛像；顯微鏡需要先取得放大實像。" },
      D: { verdict: "incorrect", reason: "物鏡的短焦距設計是為了形成放大的實像，不是縮小實像。" }
    },
    takeaway: "顯微鏡：物鏡做放大實像，目鏡再把它當物體放大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-57": {
    encouragement: "海水含鹽密度較大；船從海水進入淡水，要排開更多水才能得到同樣浮力。",
    keyIdea: "漂浮時浮力等於船重；液體密度降低，必須增加排水體積，所以吃水變深。",
    steps: [
      "河口較接近海水，往內陸後鹽度降低、密度變小。",
      "船重不變，漂浮所需浮力也不變。",
      "由浮力＝液體密度×排水體積×g，密度變小時排水體積要增加。",
      "船因此下沉得較深，吃水深度增大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "河水密度變小是對的，但要排開更多水，因此吃水深度不是變小。" },
      B: { verdict: "incorrect", reason: "往內陸鹽度下降，河水密度通常變小，不是變大。" },
      C: { verdict: "correct", reason: "淡水密度較小，船要排開更大體積的水才能平衡船重，所以吃水變深。" },
      D: { verdict: "incorrect", reason: "吃水變深的方向正確，但原因是水的密度變小，不是變大。" },
      E: { verdict: "incorrect", reason: "船重雖不變，浮力還取決於液體密度，因此吃水深度會調整。" }
    },
    takeaway: "同一艘船在密度較小的液體中會沉得較深。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-63": {
    encouragement: "每個電臺都有自己的載波頻率；選臺就是把收音機調到與它共振。",
    keyIdea: "收音機選臺是調整接收電路的振盪頻率，使其與目標電臺載波頻率相符。",
    steps: [
      "廣播把聲音訊號載在特定頻率的電磁波上。",
      "不同電臺使用不同的載波頻率。",
      "轉動選臺旋鈕會改變調諧電路的固有頻率。",
      "頻率與目標載波相符時，該電臺訊號最容易被選出。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "選臺不是把收音機振幅調成與載波相同，而是選擇特定頻率。" },
      B: { verdict: "correct", reason: "旋鈕調整接收電路振盪頻率，使其對準目標電臺的載波頻率。" },
      C: { verdict: "incorrect", reason: "聲頻是載波中攜帶的資訊，不是選臺時要對準的高頻載波。" },
      D: { verdict: "incorrect", reason: "聲音振幅對應音量資訊，不是用來區分不同廣播電臺的主要依據。" }
    },
    takeaway: "選臺選的是載波「頻率」，不是聲音的振幅或聲頻。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-64": {
    encouragement: "檢查燈絲有沒有斷，最直接的方法是斷電後量兩端是否導通。",
    keyIdea: "用三用電表電阻檔檢查燈泡燈絲是否形成連續通路。",
    steps: [
      "先讓燈泡離開電源，避免帶電測量。",
      "把三用電表切到電阻檔。",
      "量燈泡兩接點間電阻。",
      "若顯示斷路或極大電阻，通常表示燈絲已斷。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "電阻檔可直接檢查燈絲是否導通，是判斷燈泡好壞的安全方法。" },
      B: { verdict: "incorrect", reason: "電流檔必須串聯於通電電路，直接跨接燈泡可能造成短路與儀表損壞。" },
      C: { verdict: "incorrect", reason: "燈泡規格是110 V交流電，且量到供電電壓也不能直接確認燈絲是否完好。" },
      D: { verdict: "incorrect", reason: "交流電壓檔只能確認電源兩端電壓，不能單獨判斷未通電燈泡的燈絲是否斷裂。" }
    },
    takeaway: "測元件是否斷路，用電阻檔並先斷電；電流檔不可直接跨接。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-65": {
    encouragement: "一度電就是1 kW使用1小時；把60 W先換成0.060 kW即可。",
    keyIdea: "電能＝功率×時間，60 W使用10 h消耗0.6 kWh，也就是0.6度。",
    steps: [
      "60 W＝0.060 kW。",
      "電能E＝Pt。",
      "0.060 kW×10 h＝0.60 kWh。",
      "1 kWh稱為1度電，所以答案為0.6度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.1是把110 V誤當成功率的一部分；耗電量應用60 W計算。" },
      B: { verdict: "correct", reason: "60 W＝0.060 kW，乘10小時得到0.60 kWh，也就是0.6度。" },
      C: { verdict: "incorrect", reason: "1100度遠大於實際值，且錯把電壓與時間相乘當作電能。" },
      D: { verdict: "incorrect", reason: "600是瓦時數；600 Wh＝0.600 kWh，只是0.6度。" }
    },
    takeaway: "算度數要用kW×h；瓦特先除以1000換成瓩。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-66": {
    encouragement: "接地像替漏電準備一條低阻力逃生路線，讓電流不要穿過人體。",
    keyIdea: "電器金屬外殼接地可在絕緣失效時導走漏電流，並促使保護裝置切斷電源。",
    steps: [
      "正常時金屬外殼不應帶電。",
      "若內部火線破損碰到外殼，外殼可能成為危險高電位。",
      "接地線提供低電阻通路，把漏電流導入大地。",
      "大電流也可使保險絲或斷路器動作，降低觸電風險。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "接地主要為人身安全，不是用來維持電器正負兩端電壓。" },
      B: { verdict: "incorrect", reason: "電器正常工作迴路由火線與中性線構成，不需要靠外殼接地才能運轉。" },
      C: { verdict: "correct", reason: "外殼漏電時，接地線可將電流導走並使保護裝置動作，避免電流經人體。" },
      D: { verdict: "incorrect", reason: "接地線的功能是導電保護，不是把電器產生的多餘熱量傳入地面。" }
    },
    takeaway: "接地是防漏電，不是散熱，也不是正常供電迴路的一部分。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-67": {
    encouragement: "平行電流有一個好記規則：同向相吸，反向相斥。",
    keyIdea: "載流導線產生磁場，兩條平行導線通同方向電流時互相吸引。",
    steps: [
      "每條載流導線都在周圍產生磁場。",
      "另一條導線中的電流在此磁場中受到磁力。",
      "用右手定則判斷，同方向平行電流的受力指向彼此。",
      "因此兩導線互相吸引。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "金屬導線整體近似電中性，作用力來源是電流與磁場，不是兩條帶負電導線排斥。" },
      B: { verdict: "incorrect", reason: "導線即使總電荷為零，移動電荷形成的電流仍會產生磁場與磁力。" },
      C: { verdict: "correct", reason: "兩條平行導線若電流同向，彼此受到指向對方的磁力，因此相吸。" },
      D: { verdict: "incorrect", reason: "平行電流反向時才互相排斥；題目中的電流方向相同。" }
    },
    takeaway: "平行導線的磁力口訣：同向吸、反向斥。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-83-69": {
    encouragement: "核電廠仍是用熱煮水推動渦輪；熱的來源是核反應中的質量差。",
    keyIdea: "核分裂前後的質量差依E＝mc²轉為能量，再經蒸汽渦輪與發電機發電。",
    steps: [
      "原子核分裂後，產物總質量略小於反應前。",
      "這個質量差依E＝mc²轉成大量能量。",
      "反應熱使水產生蒸汽，推動渦輪。",
      "渦輪帶動發電機，透過電磁感應產生電能。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "核反應的質量虧損轉為能量，經熱機與發電機最後產生電能。" },
      B: { verdict: "incorrect", reason: "核電廠不是直接收集原子核放出的電荷，而是先利用核反應產生的熱。" },
      C: { verdict: "incorrect", reason: "核分裂主要改變原子核，並非釋出所有外圍電子來直接發電。" },
      D: { verdict: "incorrect", reason: "中子會參與鏈反應，但核電廠不是直接收集中子動能作為電流。" }
    },
    takeaway: "核能的源頭是質量轉能量，發電端仍靠蒸汽渦輪與電磁感應。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-46": {
    encouragement: "忽略空氣阻力時，石頭飛行全程力學能守恆；最高點只是位能最大。",
    keyIdea: "拋體運動中機械能守恆，加速度始終為重力加速度。",
    steps: [
      "石頭升高時，動能轉為重力位能。",
      "最高點高度最大，因此重力位能最大。",
      "不計空氣阻力時，動能與位能總和保持不變。",
      "整段運動的加速度都為向下的g。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "最高點高度最大，由U＝mgh可知重力位能最大。" },
      B: { verdict: "incorrect", reason: "上升時動能減少、位能增加，兩者總和的力學能不變。" },
      C: { verdict: "incorrect", reason: "忽略阻力時全程力學能相同，落地瞬間不會突然變成最大。" },
      D: { verdict: "incorrect", reason: "石頭飛行全程只受重力，加速度量值始終為g，不因落地前位置而改變。" }
    },
    takeaway: "拋體最高點速度未必為零，但高度最高、位能最大；加速度仍是g。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-48": {
    encouragement: "定容氣體用絕對溫度比較；先把27°C換成300 K，再按壓力比例放大。",
    keyIdea: "定容、定量理想氣體滿足P/T為定值，溫度必須使用K。",
    steps: [
      "初溫27°C＝300 K。",
      "定容下P₁/T₁＝P₂/T₂。",
      "T₂＝300×2.5/2＝375 K。",
      "換回攝氏為375−273≈102°C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "34°C是直接用攝氏溫度乘壓力比例，未使用絕對溫度。" },
      B: { verdict: "incorrect", reason: "68°C不符合定容氣體P/T固定的比例關係。" },
      C: { verdict: "correct", reason: "300 K×(2.5/2)＝375 K，換算約為102°C。" },
      D: { verdict: "incorrect", reason: "375是開爾文溫度，換成攝氏需減273，不能直接寫375°C。" }
    },
    takeaway: "氣體定律中的溫度一定用K，最後才換回°C。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-50": {
    encouragement: "土星距離讓日照強度變成1/100，但迎光面積又變成100倍，兩者剛好抵消。",
    keyIdea: "接收總日光功率與行星截面積R²成正比，與日距r²成反比。",
    steps: [
      "日照強度隨距離平方反比，距離10倍使強度變為1/100。",
      "行星接收陽光的截面積為πR²。",
      "半徑10倍使截面積變為100倍。",
      "總接收功率比為100×1/100＝1。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此值把距離與半徑的平方效應都當成減少，沒有計入土星面積較大。" },
      B: { verdict: "incorrect", reason: "總日光能不是只按距離的一次方縮小，還要同時計算接收面積。" },
      C: { verdict: "correct", reason: "日照強度變1/100、截面積變100倍，所以總接收日光能約相同。" },
      D: { verdict: "incorrect", reason: "半徑增大雖提高接收面積，但距離增加造成的強度下降正好抵消。" },
      E: { verdict: "incorrect", reason: "10000只反映兩個平方因子相乘，卻忽略距離平方是在分母。" }
    },
    takeaway: "行星接收總陽光要同時看距離平方與半徑平方。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-51": {
    encouragement: "尖、大聲、說得快是聲音特徵，但同一空氣中的聲速主要由介質狀態決定。",
    keyIdea: "在相同空氣條件下，聲速近似與頻率、振幅及說話快慢無關。",
    steps: [
      "尖銳代表頻率較高。",
      "宏亮代表振幅或強度較大。",
      "說話快代表音節發出得密集。",
      "三者在同一空氣中傳播，聲速相同。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "頻率較高使音調較尖，但在相同空氣中不會因此傳得更快。" },
      B: { verdict: "incorrect", reason: "振幅較大使聲音較響亮，不會改變空氣中的聲速。" },
      C: { verdict: "incorrect", reason: "說話節奏較快只改變訊息排列，不會讓每個聲波傳得更快。" },
      D: { verdict: "correct", reason: "三種聲音都在相同空氣條件中傳播，因此速度近似相同。" }
    },
    takeaway: "聲音的快慢看介質；音調看頻率，響度看振幅。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-52": {
    encouragement: "同一空氣中聲速相同，所以頻率越高，波長一定越短。",
    keyIdea: "由v＝fλ，在同一介質中v固定，440 Hz的波長小於262 Hz。",
    steps: [
      "中央C頻率262 Hz，A音頻率440 Hz。",
      "兩聲音在同一空氣中速度相同。",
      "由λ＝v/f，頻率越高波長越短。",
      "弦的頻率則和有效弦長成反比，不是彈得比較快就改變固有頻率。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "440 Hz高於262 Hz，在相同聲速下，ㄌㄚ的波長較短。" },
      B: { verdict: "incorrect", reason: "同張力與線密度下，較低頻的ㄉㄡ需要較長弦，不是較短。" },
      C: { verdict: "incorrect", reason: "彈奏動作快慢主要影響起音方式，不會改變琴弦由長度、張力決定的固有頻率。" },
      D: { verdict: "incorrect", reason: "高八度頻率是原來的2倍，因此中央C高八度約524 Hz，不是880 Hz。" }
    },
    takeaway: "同介質中頻率越高、波長越短；高八度則是頻率加倍。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-53": {
    encouragement: "先把三件事分開：頻率決定音調，振幅關係響度，聲速主要由介質決定。",
    keyIdea: "聲音強度隨振幅增大；超聲波是高頻聲波，不代表速度特別快。",
    steps: [
      "超聲波的定義是頻率高於人耳可聽範圍。",
      "同一空氣中不同頻率聲波的速度近似相同。",
      "波長是相鄰同相位點，如相鄰壓縮區間的距離。",
      "振幅越大，波攜帶的能量與聲音強度通常越大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "超聲波是頻率高，不是在同一空氣中波速特別快。" },
      B: { verdict: "incorrect", reason: "頻率決定音調高低，強度主要和振幅及能量有關。" },
      C: { verdict: "incorrect", reason: "波峰到相鄰波谷只有半個波長；波長是相鄰波峰間距。" },
      D: { verdict: "correct", reason: "振幅較大的聲波通常攜帶較多能量，聲音強度也較強。" }
    },
    takeaway: "頻率、振幅、波速各管不同事情，不要把高頻誤認為高速或高強度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-54": {
    encouragement: "家電並聯時，每一台都接到完整的110 V；功率與電流再分別相加。",
    keyIdea: "並聯各支路電壓相同，總電流與總功率為各支路相加，等效電阻小於任一支路。",
    steps: [
      "三個電器並聯，所以每個電器兩端都是110 V。",
      "總功率為1000＋100＋200＝1300 W。",
      "每支路電流為P/V，總電流是三支路相加。",
      "增加並聯支路會使等效電阻變小。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "題目問錯誤敘述；並聯各支路都用110 V，電源不需把三個電壓相加成330 V。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；同時使用時總功率為各電器功率相加，共1300 W。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；各支路電流P/V相加即為電源總電流。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；並聯增加導電路徑，等效電阻小於任一支路電阻。" }
    },
    takeaway: "並聯：電壓相同，電流相加，總電阻變小。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-55": {
    encouragement: "把科學家和關鍵字配對：伏打電池、厄斯特電流磁效應、歐姆定律、法拉第感應。",
    keyIdea: "通電導線使磁針偏轉是厄斯特的發現，不是庫侖。",
    steps: [
      "伏打以不同金屬與電解質製成早期電池。",
      "厄斯特發現電流會在周圍產生磁場。",
      "歐姆整理出電壓與電流的關係。",
      "法拉第發現變動磁通量可產生感應電流。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確配對；伏打堆能提供較穩定的持續電流。" },
      B: { verdict: "correct", reason: "這是錯誤配對；通電導線使磁針偏轉是厄斯特發現的，不是庫侖。" },
      C: { verdict: "incorrect", reason: "這是正確配對；歐姆定律描述定溫下電壓與電流成正比。" },
      D: { verdict: "incorrect", reason: "這是正確配對；法拉第發現磁通量改變會產生感應電動勢。" }
    },
    takeaway: "厄斯特：電生磁；法拉第：變動的磁生電。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-56": {
    encouragement: "開瓶後壓力下降，原本溶在汽水中的二氧化碳就不容易繼續留在水裡。",
    keyIdea: "氣體在液體中的溶解度通常隨上方氣體壓力增加而增加。",
    steps: [
      "密封汽水瓶內二氧化碳壓力較高。",
      "高壓使較多二氧化碳溶在飲料中。",
      "開瓶後上方壓力突然下降。",
      "氣體溶解度降低，二氧化碳便以大量氣泡逸出。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水汽化吸熱不能主要解釋開瓶後大量二氧化碳氣泡冒出。" },
      B: { verdict: "correct", reason: "開瓶降壓使二氧化碳溶解度降低，所以原本溶解的氣體大量逸出。" },
      C: { verdict: "incorrect", reason: "汽水不是因降壓而大量沸騰；看見的氣泡主要是溶解的二氧化碳。" },
      D: { verdict: "incorrect", reason: "氣體是二氧化碳雖為事實，但單靠名稱不能解釋為何降壓後大量冒泡。" }
    },
    takeaway: "氣體溶解度和壓力有關：壓力降低，溶解氣體較容易逸出。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-57": {
    encouragement: "理想變壓器改變電壓時，功率近似不變；降壓不代表電能大量消失。",
    keyIdea: "變壓器靠交流電造成變動磁通量與感應電動勢，近似守恆輸入與輸出功率。",
    steps: [
      "交流電使一次線圈的電流與磁場持續改變。",
      "變動磁通量在二次線圈產生感應電動勢。",
      "線圈匝數比決定升壓或降壓比例。",
      "理想情況下功率近似不變，降壓時電流會相應增大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；穩定直流無法持續造成磁通量變化，變壓器需用交流。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；一次線圈電流的磁效應建立交變磁場。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；二次線圈因磁通量改變而產生感應電動勢。" },
      D: { verdict: "correct", reason: "這是錯誤敘述；理想變壓器降壓時電流增大，並不因電壓下降就損失大量電能。" }
    },
    takeaway: "變壓器改的是電壓與電流比例，不是憑空消耗大量能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-84-58": {
    encouragement: "原子很空，幾乎全部質量集中在極小原子核；中性原子的質子數和電子數相等。",
    keyIdea: "原子核含質子與中子並集中大部分質量；中性原子的電子數等於質子數。",
    steps: [
      "電子質量遠小於質子與中子。",
      "所以原子絕大部分質量集中在原子核。",
      "一般所稱中性原子總電荷為零，因此電子數等於質子數。",
      "不同同位素的中子數可不同，不必等於質子數。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲錯誤，原子質量並非均勻分布，而是主要集中在原子核。" },
      B: { verdict: "incorrect", reason: "甲錯誤且丁也不一定；質子數與中子數不必相等。" },
      C: { verdict: "correct", reason: "乙正確；中性原子的電子數與質子數相等，所以丙也正確。" },
      D: { verdict: "incorrect", reason: "乙正確，但丁錯誤；同位素正是中子數不同的同元素原子。" }
    },
    takeaway: "質量看原子核，電中性看電子數等於質子數，中子數則可以改變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-42": {
    encouragement: "超聲波的「超」是超過人耳可聽的頻率，不是速度、振幅或能量特別大。",
    keyIdea: "超聲波是頻率高於人耳聽覺上限約20 kHz的聲波。",
    steps: [
      "聲音音調由頻率決定。",
      "人耳通常只能聽到約20 Hz至20 kHz。",
      "頻率超過上限的聲波稱為超聲波。",
      "在同一介質中，它的聲速不因名稱而特別快。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "超聲波和一般聲音在相同介質中的速度近似相同，定義不是波速高。" },
      B: { verdict: "incorrect", reason: "超聲波可以很強也可以很弱，強度不是分類標準。" },
      C: { verdict: "incorrect", reason: "振幅決定強弱，超聲波不必具有較大振幅。" },
      D: { verdict: "correct", reason: "超聲波的定義就是頻率高於人耳可聽上限的聲波。" },
      E: { verdict: "incorrect", reason: "能量大小取決於振幅、頻率與波源等條件，不是超聲波的定義。" }
    },
    takeaway: "超聲波只保證「高頻」，不自動代表高速、高強度或高振幅。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-44": {
    encouragement: "光從水走向空氣是由慢到快；入射角超過臨界角時，就全部反回水中。",
    keyIdea: "光由高折射率介質射向低折射率介質，入射角大於臨界角會全反射。",
    steps: [
      "水的折射率高於空氣。",
      "光由水射向空氣時，折射角大於入射角。",
      "入射角增至臨界角時，折射光沿界面前進。",
      "再超過48.5°便發生全反射，不再有折射光進入空氣。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "入射角大於臨界角時會全部反射回水中，敘述正好相反。" },
      B: { verdict: "correct", reason: "大於48.5°會全反射，因此沒有光線折射進入空氣。" },
      C: { verdict: "incorrect", reason: "超過臨界角時不是部分折射，而是理想情況下全部反射。" },
      D: { verdict: "incorrect", reason: "小於臨界角時會同時有折射與反射，不會全部反射。" },
      E: { verdict: "incorrect", reason: "小於臨界角雖有折射光，也通常仍有部分反射，不能說全部折射。" }
    },
    takeaway: "全反射兩條件：由高折射率到低折射率，而且入射角大於臨界角。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-45": {
    encouragement: "選A原方向為正；碰撞後兩球總動量朝正方向，表示碰撞前A的正動量勝過B的反向動量。",
    keyIdea: "動量守恆；若碰撞後總動量朝A原方向，碰撞前A的動量量值必大於反向的B。",
    steps: [
      "把A原來運動方向設為正，B迎面而來所以動量為負。",
      "碰撞後A、B都朝正方向，總動量為正。",
      "動量守恆，因此碰撞前總動量也必為正。",
      "所以A碰撞前動量量值一定大於B。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "碰撞前後總動量守恆；結果總動量朝A原方向，表示A原動量量值較大。" },
      B: { verdict: "incorrect", reason: "動量較大不保證動能較大，因動能還取決於質量與速度平方。" },
      C: { verdict: "incorrect", reason: "A可能靠較大質量取得較大動量，不一定速率較大。" },
      D: { verdict: "incorrect", reason: "A也可能靠較高速率取得較大動量，不一定質量較大。" },
      E: { verdict: "incorrect", reason: "碰撞動量與物體整體質量、速度有關，無法由結果判斷密度。" }
    },
    takeaway: "迎面碰撞先選正方向，把兩球動量帶正負號再用守恆判斷。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-46": {
    encouragement: "電力線只告訴你當下正試驗電荷受力方向，不是粒子一定會走的軌道。",
    keyIdea: "電場是向量場；電力線不相交且可彎曲，但帶電粒子的運動還取決於初速度。",
    steps: [
      "每個位置的電場有大小與方向，所以是向量場。",
      "電力線切線代表該點電場方向。",
      "同一點不能同時有兩個電場方向，所以電力線不相交。",
      "粒子若有側向初速度，實際軌跡不必沿電力線。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；電場在每點都有大小與方向，屬向量場。" },
      B: { verdict: "correct", reason: "這是錯誤敘述；粒子受力沿電場，但速度方向未必沿電場，所以軌跡不一定沿電力線。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；電場與重力場都以單位試驗物所受力來描述。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；電力線相交會使交點出現兩個電場方向，不可能發生。" },
      E: { verdict: "incorrect", reason: "這是正確敘述；非均勻電場的電力線可以是曲線。" }
    },
    takeaway: "受力方向不等於運動方向；有初速度時，粒子不一定沿力線走。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-47": {
    encouragement: "只有橫波能把振動方向篩選出來，所以偏振是判斷光為橫波的關鍵證據。",
    keyIdea: "偏振現象顯示光的振動方向垂直於傳播方向，證明光是橫波。",
    steps: [
      "橫波的振動方向垂直於傳播方向。",
      "偏振片只允許特定方向的振動通過。",
      "光可產生偏振，表示它具有可篩選的橫向振動。",
      "干涉、折射與繞射則不是橫波獨有。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "干涉可發生於橫波與縱波，不能單獨證明光是橫波。" },
      B: { verdict: "correct", reason: "偏振能選定振動方向，只有橫波具此特性，因此可證明光是橫波。" },
      C: { verdict: "incorrect", reason: "折射是波速跨介質改變的結果，橫波與縱波都可能發生。" },
      D: { verdict: "incorrect", reason: "繞射是各種波都可能具有的特性，不能判斷振動方向。" },
      E: { verdict: "incorrect", reason: "全反射由介質折射率與入射角決定，不是光為橫波的專屬證據。" }
    },
    takeaway: "干涉與繞射證明光有波動性；偏振進一步證明光是橫波。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-48": {
    encouragement: "記住三個年代順序：先找到電子，再由散射實驗發現原子核，最後才發現中子。",
    keyIdea: "電子由湯姆森於1897年發現，原子核由拉塞福於1911年前後建立，中子由查兌克於1932年發現。",
    steps: [
      "陰極射線實驗先確認電子的存在。",
      "拉塞福金箔散射實驗顯示原子有小而重的原子核。",
      "中子不帶電，較難偵測，因此最後才被發現。",
      "順序為電子、原子核、中子。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "中子發現晚於原子核，不是排在原子核之前。" },
      B: { verdict: "incorrect", reason: "電子是三者中最早發現的，不是中子。" },
      C: { verdict: "correct", reason: "歷史順序為電子、原子核、中子，分別約在1897、1911、1932年。" },
      D: { verdict: "incorrect", reason: "電子的發現早於原子核，因此前兩項順序顛倒。" },
      E: { verdict: "incorrect", reason: "原子核與中子都晚於電子，且中子是三者中最後發現。" }
    },
    takeaway: "電子先、原子核次之、中子最後。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-56": {
    encouragement: "石塊離手後全程只受重力；不管上升或下降，加速度都一直向下。",
    keyIdea: "忽略空氣阻力時，鉛直拋體加速度始終為向下的g；最高點速度瞬間為零但加速度不為零。",
    steps: [
      "石塊離手後只受向下重力。",
      "所以整段飛行加速度大小與方向都相同。",
      "到最高點時，上升速度剛好降為零。",
      "但重力仍存在，所以加速度仍為向下g。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "上升與下降時都只受重力，加速度皆為相同大小且同樣向下。" },
      B: { verdict: "incorrect", reason: "速度方向會改變，但加速度方向始終向下，不會在下降時反轉。" },
      C: { verdict: "incorrect", reason: "最高點速度為零，但重力仍作用，因此加速度不是零。" },
      D: { verdict: "incorrect", reason: "最高點的瞬時速度確實為零，不能說速度不為零。" },
      E: { verdict: "correct", reason: "最高點速度瞬間為零，而加速度仍為向下的重力加速度g。" }
    },
    takeaway: "速度為零不代表加速度為零；拋體最高點正是經典例子。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-85-57": {
    encouragement: "家用燈泡兩端電壓同為110 V；功率較大代表電流較大，也代表工作電阻較小。",
    keyIdea: "定電壓下P＝VI＝V²/R；100 W燈泡比60 W燈泡電流大、電阻小。",
    steps: [
      "兩燈泡都按110 V規格使用，所以電壓不變。",
      "由I＝P/V，100 W燈泡電流較大。",
      "由R＝V²/P，功率越大，工作電阻越小。",
      "較大的電功率使每秒轉成光與熱的能量較多，因此較亮。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩燈泡都接在110 V家用電源，電壓沒有因換燈泡而升高。" },
      B: { verdict: "incorrect", reason: "定電壓下R＝V²/P，100 W燈泡的工作電阻反而較小。" },
      C: { verdict: "correct", reason: "100 W燈泡在相同110 V下，工作電阻比60 W燈泡小。" },
      D: { verdict: "correct", reason: "由I＝P/V，100 W燈泡通過的電流大於60 W燈泡。" },
      E: { verdict: "incorrect", reason: "功率提高而電壓相同時，電流應增加，不是減少。" }
    },
    takeaway: "相同電壓下，額定功率越大：電流越大、工作電阻越小。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-41": {
    encouragement: "作用力與反作用力一定連在同一對互動物體上：地球拉老鷹，老鷹也拉地球。",
    keyIdea: "萬有引力的第三定律力對為「地球對老鷹的引力」與「老鷹對地球的引力」。",
    steps: [
      "先辨認題目中的作用力：地球對老鷹的引力。",
      "反作用力要交換施力者與受力者。",
      "因此反作用力是老鷹對地球的引力。",
      "兩力大小相等、方向相反，作用在不同物體上。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "空氣浮力與地球引力是作用在老鷹上的不同力，不互為第三定律力對。" },
      B: { verdict: "incorrect", reason: "獵物對老鷹的引力對應老鷹對獵物的引力，不是地球引力的反作用力。" },
      C: { verdict: "incorrect", reason: "翅膀受到空氣作用的升力，其反作用力是翅膀推動空氣，不是地球引力。" },
      D: { verdict: "correct", reason: "地球拉老鷹的反作用力正是老鷹以等大反向引力拉地球。" }
    },
    takeaway: "找反作用力就把「誰對誰」完全對調，不能選同一物體上的另一個力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-44": {
    encouragement: "先把立方公尺換成公升、攝氏換成K，再代入PV＝nRT即可。",
    keyIdea: "理想氣體莫耳數n＝PV/RT；224 m³、1 atm、250 K約為1.1×10⁴ mol。",
    steps: [
      "體積224 m³＝224000 L，溫度−23°C約為250 K。",
      "代入n＝PV/RT。",
      "n＝1×224000÷(0.08208×250)。",
      "結果約1.09×10⁴ mol，最接近11000 mol。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.1 mol只在約數十公升的氣體中，遠小於224立方公尺冷藏庫的氣體量。" },
      B: { verdict: "incorrect", reason: "22.4 mol混淆了標準狀況下每莫耳約22.4 L；本題體積是224000 L。" },
      C: { verdict: "incorrect", reason: "224 mol未正確使用PV＝nRT，所得氣體量仍小了約50倍。" },
      D: { verdict: "incorrect", reason: "2240 mol代回理想氣體方程只能占本題約五分之一的體積。" },
      E: { verdict: "correct", reason: "由PV＝nRT計算約得1.09×10⁴ mol，最接近11000 mol。" }
    },
    takeaway: "氣體計算最常錯在單位：m³換L乘1000，攝氏換K加273。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-45": {
    encouragement: "先看熱水放到0°C最多能給多少熱，再比較能不能把等質量的冰全部融化。",
    keyIdea: "等質量70°C熱水降至0°C釋放70m cal，小於融化0°C冰所需80m cal，所以最後冰水共存於0°C。",
    steps: [
      "設熱水與冰質量都為m克。",
      "熱水從70°C降到0°C放熱Q＝m×1×70＝70m cal。",
      "要融化全部冰需Q＝m×80＝80m cal。",
      "熱量不足以融完冰，因此最後仍有冰，平衡溫度為0°C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "熱水只能融化70/80的冰，仍有冰存在；冰水共存的平衡溫度為0°C。" },
      B: { verdict: "incorrect", reason: "要升到5°C，必須先把冰全部融化，但熱水提供的熱量連融冰都不足。" },
      C: { verdict: "incorrect", reason: "直接取70°C與0°C平均忽略了冰融化需吸收大量潛熱。" },
      D: { verdict: "incorrect", reason: "熱水會把熱傳給冰而降溫，不可能混合後仍維持70°C。" }
    },
    takeaway: "冰水混合先處理融化熱；只有冰全融後，才繼續算液態水升溫。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-47": {
    encouragement: "同一條弦張力與線密度不變時，頻率和振動弦長成反比。",
    keyIdea: "弦的基頻f＝v/(2L)；波速不變時，L₂/L₁＝f₁/f₂＝440/528。",
    steps: [
      "手指壓弦會縮短可振動的有效弦長。",
      "同一條弦、張力近似不變，弦波速度近似不變。",
      "由f＝v/(2L)，頻率與弦長成反比。",
      "新弦長/原弦長＝440/528。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聲音在同一空氣中速度相同，528 Hz頻率較高，所以波長反而較短。" },
      B: { verdict: "correct", reason: "頻率與有效弦長成反比，因此弦長變為原長的440/528。" },
      C: { verdict: "incorrect", reason: "兩琴音在相同空氣中的聲速近似相同，不因頻率較高而變大。" },
      D: { verdict: "incorrect", reason: "聲速主要由空氣狀態決定，528 Hz也不會比440 Hz傳得較慢。" }
    },
    takeaway: "按弦縮短有效弦長會升高頻率；聲音進入空氣後的速度仍由空氣決定。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-48": {
    encouragement: "密度不變、質量分成八分之一，半徑會變成一半；再代入表面重力即可。",
    keyIdea: "同密度球體M∝R³；質量變1/8時半徑變1/2，表面重力g＝GM/R²變1/2。",
    steps: [
      "每個小星球質量M'＝M/8。",
      "密度不變表示體積也為原來1/8。",
      "球體體積與半徑三次方成正比，所以R'＝R/2。",
      "g'/g＝(M'/M)/(R'/R)²＝(1/8)/(1/4)＝1/2。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "只把重力加速度按質量縮成1/8，忽略小星球半徑也縮小。" },
      B: { verdict: "correct", reason: "質量變1/8、半徑變1/2，代入GM/R²得到表面重力變原來1/2。" },
      C: { verdict: "incorrect", reason: "雖然半徑縮小會增強表面重力，但質量減少更多，最後不是變2倍。" },
      D: { verdict: "incorrect", reason: "8倍和質量減少、半徑縮小的綜合效果方向不符。" }
    },
    takeaway: "星球縮放題先用密度找半徑，再代入g＝GM/R²。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-86-49": {
    encouragement: "等速圓周運動的快慢不變，但方向一直轉，所以一定有指向圓心的加速度。",
    keyIdea: "向心力垂直於瞬時速度，不作功，但造成向心加速度並改變速度方向。",
    steps: [
      "等速只表示速率不變，不表示速度向量不變。",
      "速度方向持續改變，因此有加速度。",
      "加速度與合力都指向圓心。",
      "若向心力消失，物體沿當下切線方向飛出。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "向心力與瞬時位移垂直，理想等速圓周運動中不作功。" },
      B: { verdict: "correct", reason: "向心力產生指向圓心的加速度，使速度方向持續改變。" },
      C: { verdict: "incorrect", reason: "向心力消失後物體依慣性沿切線前進，不是沿半徑向外射出。" },
      D: { verdict: "incorrect", reason: "速率雖不變，速度方向持續改變，所以速度向量並不保持不變。" }
    },
    takeaway: "圓周運動的「等速」是速率不變；速度方向仍在變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
