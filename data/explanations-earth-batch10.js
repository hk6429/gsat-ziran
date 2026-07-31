(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-85-6": {
    encouragement: "主序星不是恆星的終點，而是它一生中最穩定、停留最久的一段。",
    keyIdea: "主序星核心正在進行氫融合，這是恆星生命中穩定而漫長的階段，不是演化末期。",
    steps: ["主序星靠核心的氫融合產生能量，能長時間維持穩定。", "題目要選錯誤敘述，因此把主序星說成演化末期的 B 才是答案。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "太陽目前核心正在進行氫融合，確實是一顆主序星，所以這句正確。" },
      B: { verdict: "correct", reason: "主序星是恆星穩定燃燒氫的主要階段，不是演化末期，因此這句錯誤。" },
      C: { verdict: "incorrect", reason: "恆星在主序階段停留的時間通常占一生的大部分，這句正確。" },
      D: { verdict: "incorrect", reason: "主序星的核心會把氫融合成氦，這正是主序星的主要能量來源。" }
    },
    takeaway: "主序星＝核心氫融合、穩定、占恆星一生很長時間。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-7": {
    encouragement: "讀赫羅圖先記住：主序帶左上方通常是又熱、又亮、質量大的恆星。",
    keyIdea: "主序星質量越大，通常溫度與光度越高，位在主序帶左上方，但燃料消耗也更快。",
    steps: ["在赫羅圖上，左方代表高溫，上方代表高光度。", "主序帶中質量最大的星位於左上方，因此光度最大，選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "大質量星雖然燃料多，消耗速度卻更快，所以壽命反而較短。" },
      B: { verdict: "incorrect", reason: "質量最大的主序星位於左上方，不是右下方；它的溫度也較高。" },
      C: { verdict: "incorrect", reason: "質量最大不能直接推出密度最大、半徑最小，這不是赫羅圖提供的關係。" },
      D: { verdict: "correct", reason: "大質量主序星位於赫羅圖左上方，代表表面溫度高且光度大。" }
    },
    takeaway: "主序帶由左上到右下，大致由高質量、高溫、高光度排到低質量、低溫、低光度。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-85-8": {
    encouragement: "恆星會改變外形與能量來源；太陽未來先膨脹成紅巨星，再走向生命末期。",
    keyIdea: "太陽型恆星離開主序帶後會膨脹成紅巨星；白矮星體積小，紅巨星也不是單純在核心進行氫融合。",
    steps: ["太陽目前是主序星，核心氫燃料逐漸用完後會離開主序帶。", "外層膨脹、表面降溫後成為紅巨星，因此 C 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "白矮星是體積很小、密度很高的恆星殘骸，並不比一般主序星大。" },
      B: { verdict: "incorrect", reason: "紅巨星半徑很大，即使表面較冷，總光度仍可很高，不能說一定比主序星小。" },
      C: { verdict: "correct", reason: "太陽型恆星在主序階段之後會先膨脹成紅巨星。" },
      D: { verdict: "incorrect", reason: "紅巨星的核心已不再是主序星那種穩定的核心氫融合，氫融合主要移到核心外殼層。" }
    },
    takeaway: "太陽型恆星的簡化歷程：主序星→紅巨星→白矮星。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-8": {
    encouragement: "海底擴張速率就是『距離除以時間』，從磁條帶讀出一邊的距離與年代就能計算。",
    keyIdea: "依題圖的磁條帶距離與年代比例，單側海洋地殼每一百萬年向外移動約 20 公里。",
    steps: ["在中洋脊一側找同一磁性年代邊界，依比例尺讀出它離中洋脊的距離。", "用距離除以形成年代，得到單側擴張速率約 20 公里／百萬年。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10 公里／百萬年比依圖示距離與年代算出的速率小一半。" },
      B: { verdict: "correct", reason: "由磁條帶距離除以對應年代，可得約 20 公里／百萬年。" },
      C: { verdict: "incorrect", reason: "50 公里／百萬年會讓同年代海底離中洋脊更遠，與圖的比例尺不符。" },
      D: { verdict: "incorrect", reason: "100 公里／百萬年明顯高估圖示海底擴張距離。" },
      E: { verdict: "incorrect", reason: "200 公里／百萬年遠超過依磁條帶所算出的速率。" }
    },
    takeaway: "海底擴張速率＝海洋地殼離中洋脊的距離÷它的年齡。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-9": {
    encouragement: "中洋脊在大西洋中央，所以從中洋脊到最老海底只需用半個大西洋寬度來計算。",
    keyIdea: "北大西洋半寬約 3000 公里，以約 20 公里／百萬年的擴張速率推算，最老海底約 1.5 億年，屬侏羅紀。",
    steps: ["中洋脊位於中央，最老海底離脊約 6000÷2＝3000 公里。", "3000÷20＝150 百萬年，約 1.5 億年前，落在侏羅紀。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第三紀比約 1.5 億年年輕很多，無法形成 3000 公里的單側海底。" },
      B: { verdict: "correct", reason: "計算得到約 1.5 億年，地質年代屬侏羅紀。" },
      C: { verdict: "incorrect", reason: "石炭紀約三億年前，遠老於依擴張速率推算的年代。" },
      D: { verdict: "incorrect", reason: "奧陶紀約四億多年前，比北大西洋海底推算年齡老太多。" },
      E: { verdict: "incorrect", reason: "寒武紀更古老，不符合距離與擴張速率的計算。" }
    },
    takeaway: "先取海洋半寬，再用距離除以單側擴張速率，就能估海底年齡。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-10": {
    encouragement: "這題要選錯誤敘述；把化石年代、切割關係與岩性用途分開檢查會更清楚。",
    keyIdea: "菊石所在岩層遠老於 500 萬年的火成岩，因此『沉積岩層 1 比火成岩年輕』錯誤。",
    steps: ["菊石主要生活在中生代，三葉蟲主要生活在古生代，兩者都比 500 萬年前古老。", "火成岩切入既有地層也可判斷它較年輕，所以 D 的年代關係顛倒。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "含菊石的沉積岩可能形成於海洋環境，石灰岩是合理可能，所以不是錯誤項。" },
      B: { verdict: "incorrect", reason: "火成岩若切穿既有地層，可以是岩漿侵入後冷卻形成。" },
      C: { verdict: "incorrect", reason: "三葉蟲代表古生代，沉積岩層 2 確實比 500 萬年的火成岩老。" },
      D: { verdict: "correct", reason: "含菊石的地層 1 屬中生代，遠比 500 萬年的火成岩老，並非較年輕。" },
      E: { verdict: "incorrect", reason: "礫岩孔隙若彼此連通，能儲存與傳送地下水，可能成為含水層。" }
    },
    takeaway: "化石定年加上火成岩切割關係，可以判斷地層先後。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-86-11": {
    encouragement: "看到石英、正長石和白雲母，可以直接聯想到顏色較淺、矽含量高的花崗岩。",
    keyIdea: "石英與正長石是花崗岩的典型礦物，少量白雲母也常出現在花崗岩中。",
    steps: ["石英與正長石都屬富含二氧化矽的淺色礦物。", "由這組礦物組合判斷，最可能是粗粒、酸性的花崗岩。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "玄武岩以輝石、鈣質斜長石等深色礦物為主，不符合題目組合。" },
      B: { verdict: "incorrect", reason: "輝長岩是深色的基性深成岩，通常不以石英、正長石為主要成分。" },
      C: { verdict: "incorrect", reason: "橄欖岩主要含橄欖石與輝石，和題目的淺色礦物組合不同。" },
      D: { verdict: "correct", reason: "花崗岩常由石英、正長石及雲母組成，完全符合題目描述。" },
      E: { verdict: "incorrect", reason: "玻基輝橄岩不是這組富石英、正長石礦物所形成的典型岩石。" }
    },
    takeaway: "石英＋正長石＋雲母，是辨認花崗岩的重要礦物組合。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-18": {
    encouragement: "鮑氏反應系列由高溫往低溫讀，長石會從富鈣逐漸轉為富鈉，最後才出現鉀長石。",
    keyIdea: "冷卻結晶時，長石類的順序是鈣長石、鈉長石、鉀長石。",
    steps: ["系列上方代表高溫先結晶，鈣質斜長石最早形成。", "溫度降低後成分轉向鈉長石，更低溫時才形成鉀長石。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鈉長石不會早於高溫形成的鈣長石。" },
      B: { verdict: "incorrect", reason: "把鈉長石排在鈣長石之前，顛倒了斜長石的結晶順序。" },
      C: { verdict: "incorrect", reason: "鉀長石屬較低溫形成的礦物，不會最先結晶。" },
      D: { verdict: "incorrect", reason: "鉀長石不會早於鈣長石與鈉長石形成。" },
      E: { verdict: "correct", reason: "由高溫到低溫，依序為鈣長石、鈉長石、鉀長石。" }
    },
    takeaway: "長石結晶順序：高溫富鈣→較低溫富鈉→低溫鉀長石。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-87-28": {
    encouragement: "『四面體』的中心是一個矽，四個角各是一個氧，所以直接數就能得到比例。",
    keyIdea: "一個矽氧四面體含 1 個矽原子與 4 個氧原子，矽氧比為 1：4。",
    steps: ["觀察四面體中心，只有 1 個矽原子。", "四個頂點各有 1 個氧原子，共 4 個氧，因此比例為 1：4。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "1 個矽配上 4 個氧，正是單一矽氧四面體的組成。" },
      B: { verdict: "incorrect", reason: "1：3 少算了一個位於四面體頂點的氧原子。" },
      C: { verdict: "incorrect", reason: "2：3 不是單一矽氧四面體中原子的實際數量比。" },
      D: { verdict: "incorrect", reason: "3：1 把矽與氧的數量關係顛倒，且數量也不符。" },
      E: { verdict: "incorrect", reason: "4：1 把 1 個矽、4 個氧的順序顛倒了。" }
    },
    takeaway: "矽氧四面體的基本化學單位是 SiO₄。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-16": {
    encouragement: "三種同成分礦物的名字不同，是因形成溫壓不同；高溫條件對應矽線石。",
    keyIdea: "Al₂SiO₅ 的三種同質異形體中，矽線石形成於較高溫環境。",
    steps: ["紅柱石、藍晶石、矽線石成分相同，但穩定的溫度與壓力不同。", "在相圖的高溫區域，穩定礦物是矽線石，因此選 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "紅柱石較常代表低壓條件，不是三者中的高溫指標。" },
      B: { verdict: "incorrect", reason: "藍晶石主要代表高壓、較低溫的變質環境。" },
      C: { verdict: "correct", reason: "矽線石在較高溫條件下穩定，是高溫變質的指標礦物。" },
      D: { verdict: "incorrect", reason: "相圖已提供各礦物的穩定區域，因此資料足以判斷。" }
    },
    takeaway: "Al₂SiO₅ 指標：藍晶石偏高壓，紅柱石偏低壓，矽線石偏高溫。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-18": {
    encouragement: "科氏力和風速有直接關係：風被地面摩擦拖慢，科氏力也會跟著變小。",
    keyIdea: "近地面摩擦力降低風速，而科氏力大小與速度成正比，因此科氏力也減小。",
    steps: ["地面粗糙會阻礙空氣流動，使近地面風速降低。", "科氏力隨移動速度增大而增大；風速降低時，科氏力自然減小。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "摩擦使風速降低，而較慢的風受到的科氏力也較小。" },
      B: { verdict: "incorrect", reason: "風速降低不會讓科氏力增大，兩者變化方向相同。" },
      C: { verdict: "incorrect", reason: "摩擦會直接降低風速，不可能對風速沒有影響。" },
      D: { verdict: "incorrect", reason: "摩擦先改變風速，科氏力也因速度改變而受到影響。" },
      E: { verdict: "incorrect", reason: "摩擦明顯影響近地面風速，也間接改變科氏力。" }
    },
    takeaway: "摩擦力使風慢下來；風越慢，科氏力越小。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-21": {
    encouragement: "陽光斜照時，同一束能量會攤在較大的地面上；用餘弦就能算出每單位面積收到多少。",
    keyIdea: "冬至天頂角 45°，單位面積日射量約為夏至直射時的 cos45°＝1/√2。",
    steps: ["夏至接近直射，天頂角約 0°，相對日射量可視為 cos0°＝1。", "冬至天頂角 45°，相對日射量為 cos45°＝√2/2＝1/√2。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "斜射不會讓單位面積能量增加到大於夏至直射。" },
      B: { verdict: "incorrect", reason: "冬至陽光較斜，日射量不可能是夏至的 2 倍。" },
      C: { verdict: "incorrect", reason: "此選項所列倍數與 cos45° 的結果不符。" },
      D: { verdict: "incorrect", reason: "若為 1 倍表示斜射與直射相同，忽略了能量攤開的效果。" },
      E: { verdict: "correct", reason: "cos45°＝1/√2，所以冬至約為夏至的 1/√2 倍。" }
    },
    takeaway: "地面日射量約與 cos（天頂角）成正比；太陽越斜，單位面積能量越少。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-61": {
    encouragement: "沿著海岸往外看，主要生產者會由附著的大型藻類，逐漸轉成漂浮在水中的浮游植物。",
    keyIdea: "岩岸潮間帶可由大型藻類生產；離岸較遠的開放水域，主要生產者是浮游植物。",
    steps: ["甲區靠近岩岸，有基質可供大型藻類附著與接受陽光。", "丙區位於較外海的透光水層，沒有適合大型藻類固定的海床，主要靠浮游植物生產。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "岩岸提供附著面，潮間帶與淺水區的大型藻類可成為主要生產者。" },
      B: { verdict: "incorrect", reason: "近岸淺海通常光線與營養鹽充足，生物種類不會必然很少。" },
      C: { verdict: "correct", reason: "丙區較靠外海，透光層中的浮游植物是主要初級生產者。" },
      D: { verdict: "incorrect", reason: "人工魚礁通常設在較淺、可利用且適合生物棲息的海域，不會依圖把最深遠的丁區判為設置區。" }
    },
    takeaway: "有硬底可附著的淺岸常見大型藻類；開放海域主要靠浮游植物。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-71": {
    encouragement: "海溝是海底剖面上狹長而突然下陷的深谷，通常緊鄰板塊隱沒帶。",
    keyIdea: "南美洲西側外海的乙處呈狹窄深凹，位於海洋板塊隱沒處，是海溝。",
    steps: ["先找剖面中最狹窄、最深的凹陷區。", "乙處又鄰近南美洲西緣的隱沒帶，因此判定為海溝。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "大陸棚是靠岸、淺而平緩的海底，不是狹長深谷。" },
      B: { verdict: "incorrect", reason: "大陸坡是由大陸棚向深海下降的斜坡，沒有海溝那麼窄深。" },
      C: { verdict: "incorrect", reason: "大陸緣積位於坡腳、沉積物較多且坡度較緩。" },
      D: { verdict: "incorrect", reason: "深海平原寬廣平坦，不會呈現乙處的深凹形態。" },
      E: { verdict: "correct", reason: "乙處是板塊隱沒形成的狹長深凹海底地形，即海溝。" },
      F: { verdict: "incorrect", reason: "中洋脊是海底隆起的山脈，不是向下凹陷。" }
    },
    takeaway: "海溝是隱沒帶旁的狹長深谷；中洋脊則是張裂帶上的隆起。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-72": {
    encouragement: "辨認出乙是海溝後，成因就能直接連到一個板塊鑽入另一個板塊下方。",
    keyIdea: "海溝形成於聚合板塊邊界，海洋板塊向下彎曲並隱沒，造成狹長深凹。",
    steps: ["上一題判定乙處為海溝。", "海溝是海洋板塊開始隱沒的位置，所以主要成因是板塊隱沒。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一般地層下陷不足以解釋沿板塊邊界延伸的狹長深海溝。" },
      B: { verdict: "incorrect", reason: "海浪能量主要作用在海岸，不能侵蝕出深海中的巨大海溝。" },
      C: { verdict: "incorrect", reason: "岩漿侵入通常造成岩體或隆起，不是海溝的主要成因。" },
      D: { verdict: "incorrect", reason: "深源地震是隱沒過程的結果之一，不是海溝凹陷本身的主要成因。" },
      E: { verdict: "correct", reason: "海洋板塊向下彎曲並隱沒，形成海溝。" }
    },
    takeaway: "海溝、火山弧與深源地震常一起指出板塊隱沒帶。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-73": {
    encouragement: "深海平原不是最深的海溝，而是離開大陸邊緣與中洋脊後，寬廣平坦的深海底。",
    keyIdea: "剖面兩側的甲與辛都位在寬廣、坡度很小的深海底，最能代表深海平原。",
    steps: ["先排除狹窄深凹的海溝、隆起的中洋脊，以及陡斜的大陸坡。", "剩下兩側寬廣平坦的甲、辛，符合深海平原特徵。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲位於寬廣而平坦的深海底，是深海平原。" },
      B: { verdict: "incorrect", reason: "乙是狹長深凹的海溝，不是平坦的深海平原。" },
      C: { verdict: "incorrect", reason: "丙接近大陸邊緣或坡地，不是剖面中最典型的深海平原。" },
      D: { verdict: "incorrect", reason: "丁所在區段具有地形起伏，並非寬廣平坦的深海底。" },
      E: { verdict: "incorrect", reason: "戊接近大陸或洋中地形轉折，不符合深海平原判準。" },
      F: { verdict: "incorrect", reason: "己屬於隆起或坡折區，不是平坦深海底。" },
      G: { verdict: "incorrect", reason: "庚接近大陸邊緣地形，並非最典型的深海平原。" },
      H: { verdict: "correct", reason: "辛位於另一側寬廣平坦的深海底，也代表深海平原。" }
    },
    takeaway: "深海平原的關鍵外形是『深、寬、平』，不要和狹窄的海溝混淆。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-88-75": {
    encouragement: "油、氣、水會依密度分層：最輕的在上，最重的在下。",
    keyIdea: "天然氣密度最小、石油次之、鹽水最大，因此由上而下為氣、油、水。",
    steps: ["比較三者密度：天然氣最小，所以聚集在儲集層最高處。", "石油位在中間，密度最大的鹽水沉在最下方。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "把石油放在天然氣上方，不符合天然氣密度最小的分層。" },
      B: { verdict: "correct", reason: "由上而下依密度增加，正是天然氣、石油、鹽水。" },
      C: { verdict: "incorrect", reason: "鹽水密度最大，不會位在最上層。" },
      D: { verdict: "incorrect", reason: "此排列把最重的水放在上方，也把油放到氣下方之外的錯誤位置。" },
      E: { verdict: "incorrect", reason: "天然氣在上是對的，但鹽水應在石油下方，不是中間。" },
      F: { verdict: "incorrect", reason: "石油不會浮在密度更小的天然氣上方。" }
    },
    takeaway: "儲油層由上而下常是氣、油、水，依密度由小到大排列。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-16": {
    encouragement: "一月初接近冬至，北半球的太陽會從東方偏南的位置升起。",
    keyIdea: "臺灣冬季日出在東南方；一月一日接近冬至，日出約在東偏南 20°。",
    steps: ["春分與秋分太陽正東升；冬至時日出位置移到正東以南。", "一月一日離冬至不遠，依軌跡約為東偏南 20°。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "一月初接近冬至，臺灣日出約在東偏南 20°的位置。" },
      B: { verdict: "incorrect", reason: "東偏南 30°比題圖冬季軌跡所示偏南程度更大。" },
      C: { verdict: "incorrect", reason: "東偏北是北半球夏季較常見的日出方向。" },
      D: { verdict: "incorrect", reason: "一月不會從東北方升起，且 30°也與圖示不符。" },
      E: { verdict: "incorrect", reason: "正東日出主要出現在春分與秋分附近，不是一月初。" }
    },
    takeaway: "北半球冬季東南升、西南落；夏季東北升、西北落。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-17": {
    encouragement: "題目已給『低溫、高壓』兩個線索，在礦物相圖中找到同時符合的區域即可。",
    keyIdea: "Al₂SiO₅ 的三種同質異形體中，藍晶石穩定於較高壓、較低溫環境。",
    steps: ["海溝隱沒環境的岩石快速下沉，容易承受高壓但尚未升到很高溫。", "在 Al₂SiO₅ 相圖中，高壓低溫區對應藍晶石。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "紅柱石較穩定於低壓環境，不符合海溝高壓條件。" },
      B: { verdict: "correct", reason: "藍晶石是高壓、相對低溫變質環境的代表礦物。" },
      C: { verdict: "incorrect", reason: "矽線石主要代表高溫條件，不是題目的低溫高壓。" },
      D: { verdict: "incorrect", reason: "紅柱石不符合高壓條件，不能和藍晶石一起列為答案。" },
      E: { verdict: "incorrect", reason: "紅柱石與矽線石分別偏低壓或高溫，都不符合低溫高壓。" }
    },
    takeaway: "藍晶石可作為高壓、較低溫變質環境的指標。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-21": {
    encouragement: "恐龍從三疊紀出現，到白堊紀末滅絕，這三個紀都屬於中生代。",
    keyIdea: "三疊紀、侏羅紀、白堊紀合稱中生代，是恐龍繁盛的主要地質時代。",
    steps: ["由題表可見恐龍在三疊紀出現，白堊紀末滅絕。", "三疊紀、侏羅紀、白堊紀都包含在中生代，所以選 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第四紀非常年輕，恐龍早在第四紀以前就已滅絕。" },
      B: { verdict: "incorrect", reason: "第三紀開始於恐龍滅絕之後，主要是哺乳類發展的時期。" },
      C: { verdict: "correct", reason: "恐龍出現與繁盛的三疊紀、侏羅紀、白堊紀都屬中生代。" },
      D: { verdict: "incorrect", reason: "新生代始於恐龍大滅絕之後，不是恐龍主要生活時代。" },
      E: { verdict: "incorrect", reason: "古生代末才接近恐龍出現，恐龍主要繁盛在之後的中生代。" }
    },
    takeaway: "中生代三個紀依序為三疊紀、侏羅紀、白堊紀。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-24": {
    encouragement: "大質量恆星雖然燃料多，卻燒得快得多，所以壽命反而大幅縮短。",
    keyIdea: "主序星光度約隨質量的高次方增加；10 倍太陽質量的恆星壽命約只有太陽的 10⁻³。",
    steps: ["恆星壽命可粗略看成燃料量除以消耗速率；燃料約隨質量增加。", "10 倍質量恆星的光度、燃料消耗速率增加得更快，依題圖估算壽命約縮為 10⁻³。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁴ 倍表示大質量星活得更久，與燃料消耗極快的事實相反。" },
      B: { verdict: "incorrect", reason: "10² 倍仍錯把大質量星判為長壽。" },
      C: { verdict: "incorrect", reason: "兩者壽命不會相同，大質量星的光度與耗能速率高得多。" },
      D: { verdict: "incorrect", reason: "10⁻¹ 仍比題圖由質量與光度關係估出的壽命長。" },
      E: { verdict: "correct", reason: "依圖中 10 倍太陽質量星的高光度估算，壽命約為太陽的 10⁻³。" }
    },
    takeaway: "恆星質量越大，通常越亮、耗能越快、主序壽命越短。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-71": {
    encouragement: "規模描述地震本身釋放多少能量；震度描述某地搖得多強，先把兩者分清楚。",
    keyIdea: "同一次地震只有一個規模，而各地震度會因距離與地質不同；通常離震央越近震度越大。",
    steps: ["規模是地震釋放能量的量度，同一次地震不因觀測地點改變。", "震度是各地搖晃程度，一般距震央較近時會較大，因此 A、D 正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "同一次地震的規模代表其能量大小，理論上不因世界各地測站而改變。" },
      B: { verdict: "incorrect", reason: "建築物受損與人體感受用來描述震度，不是決定地震規模。" },
      C: { verdict: "incorrect", reason: "地震報告中的位置通常指震央位置，不是某一觀測站的位置。" },
      D: { verdict: "correct", reason: "在其他條件相近時，離震央越近，地震波衰減較少，震度通常越大。" },
      E: { verdict: "incorrect", reason: "7.3 是規模數值，不是各地最大震度的標示方式。" }
    },
    takeaway: "規模看地震能量、一次地震一個值；震度看各地搖晃、各地可不同。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-72": {
    encouragement: "用『距離÷時間』估波速即可；臺灣中部到臺北約兩百公里，不必用完整南北長。",
    keyIdea: "震央約在臺灣中部，到臺北約 200 公里，30 秒到達，P 波速率約 6～7 公里／秒。",
    steps: ["臺灣南北長約 400 公里，從中部到臺北約取一半，即約 200 公里。", "200÷30 約為 6.7 公里／秒，落在 5～7 公里／秒。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0～1 公里／秒太慢，30 秒無法從中部傳到臺北。" },
      B: { verdict: "incorrect", reason: "2～3 公里／秒算出的距離只有 60～90 公里，低於中部到臺北的估距。" },
      C: { verdict: "correct", reason: "約 200 公里除以 30 秒為 6.7 公里／秒，位於 5～7 範圍。" },
      D: { verdict: "incorrect", reason: "15～30 公里／秒會在 30 秒走 450～900 公里，遠超過臺灣尺度。" },
      E: { verdict: "incorrect", reason: "100～150 公里／秒遠高於地殼中常見 P 波速度。" },
      F: { verdict: "incorrect", reason: "200～385 公里／秒不符合地震波在岩石中的實際速度量級。" }
    },
    takeaway: "估算 P 波速率時先估震央到測站距離，再除以到時差。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-89-73": {
    encouragement: "地震波依到達順序很好記：P 最快、S 次之、表面波最慢且常搖得最明顯。",
    keyIdea: "P 波速度最快、最先到站；表面波速度最慢，振幅通常較大。",
    steps: ["由波形最先出現的小振動辨認 P 波，它的速度最快。", "後續是 S 波，最後到達且振幅常較大的為表面波，所以 B、G 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "P 波是三者中速度最快的，不是最慢。" },
      B: { verdict: "correct", reason: "P 代表 primary，速度最快，因此最先抵達測站。" },
      C: { verdict: "incorrect", reason: "原選項未正確指出相對應波種與振動型態，不能據此判為正確。" },
      D: { verdict: "incorrect", reason: "S 波是橫波，介質振動方向與傳播方向垂直，不是縱波。" },
      E: { verdict: "incorrect", reason: "S 波速度低於 P 波，因此不是最快。" },
      F: { verdict: "incorrect", reason: "表面波振幅通常較大，往往造成較強地表搖晃。" },
      G: { verdict: "correct", reason: "表面波沿地表傳遞，速度比 P 波、S 波慢，最後到達。" }
    },
    takeaway: "到時順序是 P 波→S 波→表面波；表面波通常慢但振幅大。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-1": {
    encouragement: "板塊隱沒剖面中，海洋板塊向下彎曲形成的深凹，就是海溝。",
    keyIdea: "甲位於海洋板塊開始隱沒的狹長凹陷處，正確名稱是海溝。",
    steps: ["觀察甲位在兩板塊聚合、海洋板塊向下彎曲的位置。", "這種海底狹長深凹地形稱為海溝。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "莫氏不連續面是地殼與地函的地下界面，不是海底凹陷地形。" },
      B: { verdict: "incorrect", reason: "火山島弧位於隱沒帶上方的火山帶，不在板塊彎下的深凹處。" },
      C: { verdict: "incorrect", reason: "軟流圈位於岩石圈下方，範圍廣且不呈海底狹長凹陷。" },
      D: { verdict: "incorrect", reason: "中洋脊形成於板塊張裂處，外形為海底隆起。" },
      E: { verdict: "correct", reason: "海洋板塊在隱沒起點向下彎曲，形成狹長深凹的海溝。" }
    },
    takeaway: "聚合邊界的隱沒起點常見海溝；張裂邊界則常見中洋脊。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-2": {
    encouragement: "黑曜岩像天然玻璃，是岩漿快速冷卻、來不及長出礦物晶體的結果。",
    keyIdea: "黑曜岩冷卻快速，礦物來不及結晶，呈玻璃質組織。",
    steps: ["黑曜岩由熔岩在地表快速冷卻形成。", "冷卻太快使原子無法排列成晶體，因此組織為玻璃質。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "片理是變質岩受定向壓力形成的組織，題目已說未受變質。" },
      B: { verdict: "incorrect", reason: "斑狀組織包含較大的斑晶，黑曜岩典型特徵是近乎無晶體的玻璃質。" },
      C: { verdict: "incorrect", reason: "粒狀組織需要較充足時間讓礦物結晶，不符合快速冷卻。" },
      D: { verdict: "correct", reason: "熔岩快速冷卻、來不及結晶，就形成黑曜岩的玻璃質組織。" },
      E: { verdict: "incorrect", reason: "微晶質仍有微小晶體，並非黑曜岩最典型的無定形玻璃組織。" }
    },
    takeaway: "快速冷卻到幾乎不結晶，會形成玻璃質的黑曜岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-3": {
    encouragement: "隱沒帶會同時出現海溝、逆斷層、不同深度地震與變質作用，可以用整組特徵判斷。",
    keyIdea: "甲處海溝的凹陷主要由海洋板塊下彎、隱沒與拖拉造成。",
    steps: ["圖示為板塊聚合隱沒環境，海洋板塊向下彎曲。", "板塊下沉拖拉使甲處形成海溝，因此 D 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聚合擠壓環境以逆斷層較常見，不是正斷層為主。" },
      B: { verdict: "incorrect", reason: "隱沒板塊沿深度可產生淺源、中源與深源地震。" },
      C: { verdict: "incorrect", reason: "深處岩石可受到高溫高壓作用而發生變質。" },
      D: { verdict: "correct", reason: "海洋板塊隱沒時向下彎曲並拖拉，造成甲處海溝凹陷。" },
      E: { verdict: "incorrect", reason: "地表火山岩冷卻通常較快，晶粒不會比地下慢冷的侵入岩更大。" }
    },
    takeaway: "隱沒帶常見海溝、逆斷層、深淺不同的地震與火山弧。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-90-5": {
    encouragement: "季節改變的不只正午高度，也會改變太陽升起與落下的南北位置。",
    keyIdea: "臺灣位於北半球，冬季太陽由東南升、西南落；夏季由東北升、西北落。",
    steps: ["冬至附近太陽直射南半球，臺灣所見日行軌跡偏南。", "因此冬季落日位置比夏季更偏南，選 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "夏至與冬至的太陽赤緯不同，落日方位不會相同。" },
      B: { verdict: "incorrect", reason: "北半球夏季落日在西偏北，不會比冬季偏南。" },
      C: { verdict: "correct", reason: "冬季太陽日行軌跡偏南，落日在西方偏南；夏季則偏北。" },
      D: { verdict: "incorrect", reason: "雖然每天會變化，仍可清楚比較冬季整體比夏季偏南。" }
    },
    takeaway: "北半球冬季日出日落偏南，夏季偏北。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-100-52": {
    encouragement: "白天天空是否明亮，主要看大氣能不能把太陽光散射到四面八方。",
    keyIdea: "水星幾乎沒有大氣，天空最暗；火星雖大氣稀薄，仍比水星能散射更多陽光。",
    steps: ["月球與水星幾乎沒有大氣，白天天空仍接近黑色。", "火星有稀薄大氣與塵埃，可散射部分陽光，因此天空比水星亮，但不如地球。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水星幾乎無大氣，散射陽光的能力比火星弱，不會更亮。" },
      B: { verdict: "incorrect", reason: "地球大氣濃厚，散射陽光明顯，水星天空不會比地球亮。" },
      C: { verdict: "correct", reason: "火星仍有稀薄大氣與塵埃散射陽光，白天天空比幾乎無大氣的水星亮。" },
      D: { verdict: "incorrect", reason: "地球大氣散射比火星強，地球白天天空通常更明亮。" },
      E: { verdict: "incorrect", reason: "三者大氣厚度不同，散射程度不同，天空不會一樣亮。" }
    },
    takeaway: "白天天空亮度和大氣散射有關：大氣越能散射陽光，天空越明亮。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-35": {
    encouragement: "宜蘭豪雨要同時看風向與地形：濕空氣被東北季風和颱風共同送來，再被山地抬升。",
    keyIdea: "颱風環流與東北季風共伴，濕氣集中到宜蘭；宜蘭位於迎風面，地形抬升又加強降雨。",
    steps: ["梅姬颱風外圍環流和東北季風方向配合，把大量水氣送往臺灣東北部。", "宜蘭面向東北風，氣流遇山抬升凝結，因此 A、C 都正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "颱風環流與東北季風共同輸送水氣，形成共伴效應並加強宜蘭豪雨。" },
      B: { verdict: "incorrect", reason: "題目情境主因是東北季風共伴，不是西南氣流造成宜蘭豪雨。" },
      C: { verdict: "correct", reason: "宜蘭位於東北季風迎風面，濕空氣受地形抬升後降雨增加。" },
      D: { verdict: "incorrect", reason: "下降氣流會抑制雲雨，不會使降雨量突然暴增。" },
      E: { verdict: "incorrect", reason: "臺灣確實可能出現單日超過 400 毫米的極端豪雨，不能因此判報導錯誤。" }
    },
    takeaway: "東北季風＋颱風共伴＋宜蘭迎風地形，會共同放大豪雨。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-46": {
    encouragement: "傍晚西方低空的細眉月是農曆月初；再用距離與月球公轉方向，就能完成三項判斷。",
    keyIdea: "傍晚西方的眉月約在農曆初四；距離是木星最遠、金星次之、月球最近，月球相對恆星向東移。",
    steps: ["傍晚西方看見亮面朝西的眉月，日期接近農曆月初，可為初四。", "太陽系尺度下木星比金星遠、月球最近；月球每天向東移，配合圖中方位可朝右下方。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "農曆初四的月球是傍晚可見於西方低空的眉月，符合照片。" },
      B: { verdict: "incorrect", reason: "農曆二十六日接近殘月，主要在清晨東方出現，不是傍晚西方。" },
      C: { verdict: "incorrect", reason: "木星通常遠於金星，不能排成金星＞木星＞月亮。" },
      D: { verdict: "correct", reason: "三者到地球的典型距離為木星最遠、金星次之、月球最近。" },
      E: { verdict: "correct", reason: "月球相對背景星向東移，依圖中西方低空的方向標示，可能朝右下方移動。" },
      F: { verdict: "incorrect", reason: "左下方與月球相對背景天體向東移的圖示方向不合。" }
    },
    takeaway: "月初眉月傍晚見於西方；月球每天相對背景星向東移約 13°。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-102-56": {
    encouragement: "日本東北地震發生在隱沒帶，先確定哪個板塊往哪裡下沉，再解讀同震位移。",
    keyIdea: "太平洋板塊向西隱沒到北美洲板塊下方，聚合擠壓造成逆斷層型地震；陸地震時多向東移。",
    steps: ["日本海溝東側的太平洋板塊向西隱沒到日本所在板塊下方。", "隱沒帶以擠壓、逆斷層為主，圖中本州多向東位移也支持上盤向海溝方向回彈。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "聚合隱沒帶受到擠壓，這次巨大地震屬逆斷層型活動。" },
      B: { verdict: "incorrect", reason: "局部沉降不能把整場隱沒帶地震判為正斷層，斷層機制仍是擠壓逆衝。" },
      C: { verdict: "incorrect", reason: "隱沒方向寫反了；不是北美洲板塊向東鑽入太平洋板塊下。" },
      D: { verdict: "correct", reason: "太平洋板塊由東向西隱沒到北美洲板塊下方，符合日本海溝構造。" },
      E: { verdict: "incorrect", reason: "圖中陸上 GPS 最大水平位移沒有達到 15 公尺，此數值高估。" }
    },
    takeaway: "日本海溝是太平洋板塊向西隱沒，巨大地震多為逆斷層型。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-6": {
    encouragement: "先跟著親潮向南，再看親潮和黑潮會合後的流向，就能追蹤表層廢水。",
    keyIdea: "親潮沿日本東北外海南下，與黑潮會合後形成向東的黑潮延伸流，把表層水帶向中太平洋。",
    steps: ["福島外海的表層水先受親潮影響向南流。", "到日本東部外海遇黑潮後，兩股海流匯入向東流的黑潮延伸，前往中太平洋。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "黑潮在日本東方會轉向東流，不會把福島外海表層水一路向西南帶回臺灣。" },
      B: { verdict: "correct", reason: "廢水先隨親潮南下，再進入向東的黑潮延伸流，流向中太平洋。" },
      C: { verdict: "incorrect", reason: "題目討論的是已在表層的廢水，不會因兩流相遇就固定湧升並滯留。" },
      D: { verdict: "incorrect", reason: "福島外海的親潮主要向南，不是先往北進日本海。" },
      E: { verdict: "incorrect", reason: "親潮與黑潮會合主要形成東向表層流，不能直接判定廢水下沉滯留。" }
    },
    takeaway: "日本東方的黑潮延伸向東流，是北太平洋重要的表層輸送帶。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-42": {
    encouragement: "沉積顆粒由粗變細，代表同一地點離岸越來越遠、水流能量越來越弱。",
    keyIdea: "由老到新顆粒逐漸變細，表示海岸線向陸地方向後退，同一地點水深增加，屬海進。",
    steps: ["河口近岸能量較強，可沉積較粗顆粒；較遠、較深水域通常沉積細顆粒。", "地層甲到丙由粗變細，代表同一地點逐漸變成較遠岸環境，因此海水相對上升、發生海進。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海退會讓海岸向海移，同一地點變得更近岸，沉積通常由細變粗。" },
      B: { verdict: "correct", reason: "海進使同一地點水深增加、離岸更遠，沉積物由粗逐漸變細。" },
      C: { verdict: "incorrect", reason: "樣本呈單向由粗到細，不需要先海退再海進的兩段變化。" },
      D: { verdict: "incorrect", reason: "若先海進後海退，粒徑應先變細再變粗，與地層順序不符。" },
      E: { verdict: "incorrect", reason: "海面保持不變，僅考慮題設因素時不易造成持續由粗到細的環境轉移。" }
    },
    takeaway: "垂直地層由粗變細常表示海進；由細變粗常表示海退。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-103-44": {
    encouragement: "題目要找錯誤敘述；鑽上部地函應優先選地殼最薄處，而不是看到一個座標就直接接受。",
    keyIdea: "海洋地殼通常較薄、大陸與高山區較厚；圖中北緯 10°、東經 15°不是取得上部地函的最佳最薄點。",
    steps: ["莫氏不連續面是地殼底部，地殼越薄，鑽到上部地函所需距離越短。", "圖中指定座標並非最薄地殼位置，因此 E 是錯誤敘述。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海洋地殼一般約數公里厚，確實大多比大陸地殼薄，這句正確。" },
      B: { verdict: "incorrect", reason: "全球多數地區地殼厚度小於 45 公里，只有部分高山大陸區更厚。" },
      C: { verdict: "incorrect", reason: "高山區常具有較厚的地殼根，地勢高與地殼厚大致相關。" },
      D: { verdict: "incorrect", reason: "莫氏不連續面位於地殼底部，各地地殼厚度不同時其深度也不同。" },
      E: { verdict: "correct", reason: "指定座標不是圖中地殼最薄處，不能說是鑽取上部地函物質的最佳位置。" }
    },
    takeaway: "要最短距離鑽到地函，應找地殼最薄的海洋區域。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-22": {
    encouragement: "颶風需要旋轉才能組織起來；赤道附近雖然很熱，科氏力卻太小。",
    keyIdea: "科氏力在赤道為零、附近也很弱，難以讓低壓氣流形成有組織的旋轉，因此少有颶風生成。",
    steps: ["熱帶海面通常夠溫暖，也能提供旺盛水氣與對流。", "但赤道附近科氏力太小，氣流不易旋轉成封閉氣旋，所以颶風少在此形成。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "赤道附近海溫通常很高，並不是因海溫太低而缺少颶風。" },
      B: { verdict: "incorrect", reason: "赤道附近並非普遍由過高氣壓阻止颶風形成。" },
      C: { verdict: "incorrect", reason: "風速弱不是最根本條件，關鍵是缺少足夠旋轉效應。" },
      D: { verdict: "correct", reason: "赤道附近科氏力接近零，低壓系統難以建立颶風所需的旋轉。" },
      E: { verdict: "incorrect", reason: "赤道暖海面常有強對流，問題不在對流不足。" }
    },
    takeaway: "颱風生成通常要離赤道至少幾個緯度，才能得到足夠科氏力。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-62": {
    encouragement: "平均密度要比較『質量÷體積』；半徑放大時，體積要記得是三次方。",
    keyIdea: "Kepler-8b 質量為木星 0.6 倍、半徑 1.4 倍，密度比為 0.6÷1.4³，約 0.2。",
    steps: ["球體體積與半徑三次方成正比，所以體積約為木星的 1.4³＝2.744 倍。", "密度比＝質量比÷體積比＝0.6÷2.744≈0.22，最接近 0.2。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2.3 倍把質量與體積關係算反，行星半徑更大但質量較小，密度不會更高。" },
      B: { verdict: "incorrect", reason: "若密度 1.0 倍，質量應與放大的體積同比增加，但題目質量只有 0.6 倍。" },
      C: { verdict: "incorrect", reason: "0.8 倍未把半徑 1.4 倍造成的體積三次方放大完整算入。" },
      D: { verdict: "incorrect", reason: "0.4 倍仍高於 0.6÷1.4³ 的計算結果。" },
      E: { verdict: "correct", reason: "0.6÷1.4³ 約為 0.22，最接近木星密度的 0.2 倍。" }
    },
    takeaway: "球體密度比較：密度比＝質量比÷半徑比³。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-63": {
    encouragement: "題文已給光譜型 F、視星等與凌日定義，逐項把資訊配回去就能判斷。",
    keyIdea: "F 型恆星表面溫度高於 G 型的太陽；凌日資料不能直接得知行星自轉，14 星等也超出肉眼極限。",
    steps: ["太陽屬 G 型，F 型恆星比 G 型表面溫度高。", "凌日週期反映行星公轉，不是自轉；視星等 14 也無法裸眼看見，因此只有 B 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "亮度週期約 3.5 天可估公轉週期，不能由此直接得到行星自轉週期。" },
      B: { verdict: "correct", reason: "F 型恆星一般比屬 G 型的太陽表面溫度高。" },
      C: { verdict: "incorrect", reason: "人眼極限約 6 星等，14 星等恆星必須藉助望遠鏡。" },
      D: { verdict: "incorrect", reason: "恆星視星等不能直接換成不自行發光行星的視星等。" },
      E: { verdict: "incorrect", reason: "凌日是行星從恆星前方通過，使恆星亮度稍微下降，不是恆星通過行星前方。" }
    },
    takeaway: "凌日法主要提供行星公轉週期與相對大小等資訊，不等於量到自轉。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-104-66": {
    encouragement: "地球一邊自轉、一邊公轉，所以再次面向太陽要比再次面向遙遠恆星多轉一點點。",
    keyIdea: "恆星日約 23 小時 56 分，太陽日約 24 小時，因此恆星日比太陽日短約 4 分鐘。",
    steps: ["地球自轉一圈後，對遙遠恆星已回到同方向，完成一個恆星日。", "但地球同時公轉了一小段，還要多轉約 1°才再次面向太陽，所以太陽日多約 4 分鐘。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "連續兩次面對太陽的時間叫太陽日，不是恆星日。" },
      B: { verdict: "incorrect", reason: "連續兩次面對遙遠恆星的時間叫恆星日，不是太陽日。" },
      C: { verdict: "correct", reason: "恆星日約 23 小時 56 分，比 24 小時太陽日短約 4 分鐘。" },
      D: { verdict: "incorrect", reason: "長短關係寫反了；太陽日比恆星日長約 4 分鐘。" },
      E: { verdict: "incorrect", reason: "太陽雖是恆星，但它距離近且地球繞它公轉，所以兩種日的基準與長度不同。" }
    },
    takeaway: "恆星日約 23 小時 56 分；平均太陽日約 24 小時。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-106-20": {
    encouragement: "黑體不是只放出一種顏色，而是同時放出很多波長，只是其中一段最強。",
    keyIdea: "任何有溫度物體都發出連續多波段輻射；8000 K 恆星不會只放射 400 奈米，因此 A 錯誤。",
    steps: ["黑體光譜跨越許多波長，溫度只會改變總強度與最強波長位置。", "即使 8000 K 恆星的峰值接近短波可見光，它仍會放出其他可見光、紅外線與紫外線。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "題目要選錯誤敘述；8000 K 恆星會放射廣泛波長，不可能只放 400 奈米。" },
      B: { verdict: "incorrect", reason: "溫度較低時峰值移向長波，3000 K 物體的最強波長可長於 700 奈米。" },
      C: { verdict: "incorrect", reason: "月光主要是反射陽光，但有溫度的月球本身也會放出紅外線等輻射。" },
      D: { verdict: "incorrect", reason: "人體有溫度會放出紅外線，所以無可見光的暗室仍能用紅外線攝影。" },
      E: { verdict: "incorrect", reason: "黑體光譜範圍很廣，6000 K 與 16000 K 恆星都會放出部分可見光。" }
    },
    takeaway: "黑體會放出連續光譜；溫度越高，峰值越往短波移，不代表只剩峰值波長。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
