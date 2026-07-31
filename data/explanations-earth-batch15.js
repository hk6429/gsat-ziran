(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-109-20": {
    encouragement: "先看圖上真正提供哪些量；等時線加距離能求速度，卻沒有波高與週期資料。",
    keyIdea: "圖 5 有傳播距離與到達時間，因此可推知海嘯波的行進速度。",
    steps: ["等時線提供海嘯傳到各處所需時間。", "配合地圖距離可用距離除以時間估算速度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中沒有相鄰波峰到達的時間間隔，不能求週期。" },
      B: { verdict: "incorrect", reason: "沒有波峰間距資料，不能判斷波長。" },
      C: { verdict: "incorrect", reason: "等時線不表示海面起伏高度。" },
      D: { verdict: "correct", reason: "地圖距離和到達時間皆可讀出，因此能推知行進速度。" },
      E: { verdict: "incorrect", reason: "沿岸最大高度還受海岸地形影響，圖中沒有提供。" }
    },
    takeaway: "只用圖中確實提供的資料推論，不把等時線當成波高線。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-109-21": {
    encouragement: "震源由淺到深排成斜帶，就像替隱沒板塊畫出地下路徑。",
    keyIdea: "臺灣南部的震源帶向東加深，表示歐亞板塊向東隱沒到菲律賓海板塊下方。",
    steps: ["沿圖中震源深度變化找出傾斜方向。", "南部震源向東變深，判定歐亞板塊向東隱沒。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩板塊不只錯動，也有聚合與隱沒。" },
      B: { verdict: "incorrect", reason: "東北外海是菲律賓海板塊向北隱沒，不是逆衝到上方。" },
      C: { verdict: "incorrect", reason: "東北外海隱沒者不是歐亞板塊。" },
      D: { verdict: "incorrect", reason: "南部歐亞板塊是向下隱沒，不是逆衝到上方。" },
      E: { verdict: "correct", reason: "南部震源深度分布支持歐亞板塊向東隱沒。" }
    },
    takeaway: "震源深度的斜向排列可顯示板塊隱沒方向。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-109-65": {
    encouragement: "分段看聲速曲線：淺海主要受降溫影響，深海主要受增壓影響。",
    keyIdea: "溫度越高、壓力越高都會使海水聲速增加，所以選 A、D。",
    steps: ["淺層向下溫度下降、聲速也下降，表示溫度與聲速同向。", "深層壓力向下增加、聲速回升，表示壓力提高聲速。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由淺層曲線可知溫度較高時聲速較高。" },
      B: { verdict: "incorrect", reason: "曲線不支持溫度越高聲速越低。" },
      C: { verdict: "incorrect", reason: "溫度會影響聲速，不能說沒有影響。" },
      D: { verdict: "correct", reason: "深層壓力增加時聲速回升，顯示壓力越高聲速越高。" },
      E: { verdict: "incorrect", reason: "深海資料顯示壓力提高不是使聲速下降。" },
      F: { verdict: "incorrect", reason: "壓力是影響深海聲速的重要因素。" }
    },
    takeaway: "海水聲速會受溫度、鹽度與壓力共同影響。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-109-66": {
    encouragement: "沉積層用上下關係排序，火成岩則用截切關係判先後。",
    keyIdea: "A、B、C、D 依序沉積後才被火成岩 I 侵入；沒有定年資料只能判相對年代。",
    steps: ["地層未倒轉，越下方越老，得到 A→B→C→D。", "I 截切既有岩層所以最晚；但無法知道確切年數。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "I 截切 C，不能在 C 形成之前侵入。" },
      B: { verdict: "correct", reason: "地層 A、B、C、D 依序形成，I 截切它們而最晚。" },
      C: { verdict: "incorrect", reason: "剖面形狀不能證明是火山，也不能說 I 與 C 同時形成。" },
      D: { verdict: "incorrect", reason: "截切者較晚，I 應比被截切的 A、B、C 年輕。" },
      E: { verdict: "correct", reason: "只能排相對先後，缺少化石與定年便無法得知確切年代。" }
    },
    takeaway: "截切者較晚；相對年代不等於確切年代。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-17": {
    encouragement: "深海中溫度先快速下降後趨穩，壓力持續增加；聲速是兩種效果的合成。",
    keyIdea: "正式圖 E 同時呈現溫度隨深度降低、壓力增加，以及聲速先降後升。",
    steps: ["下潛時溫度下降、壓力近似持續增加。", "淺層降溫使聲速降，深層增壓使聲速回升，對照選 E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的溫度、壓力或聲速趨勢至少有一項與深海不符。" },
      B: { verdict: "incorrect", reason: "B 未正確呈現壓力隨深度持續增加。" },
      C: { verdict: "incorrect", reason: "C 的聲速變化未反映淺層降溫與深層增壓。" },
      D: { verdict: "incorrect", reason: "D 將部分海水性質的深度趨勢畫反。" },
      E: { verdict: "correct", reason: "E 完整符合深海溫度、壓力和聲速的典型變化。" }
    },
    takeaway: "聲速曲線轉折是溫度效應與壓力效應接力的結果。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-21": {
    encouragement: "按颱風路徑逐時移動，豪雨區也會隨迎風坡位置改變。",
    keyIdea: "05、11、17 時的雨量圖依序是乙、丙、甲，所以答案 D。",
    steps: ["05 時颱風尚在東側，先對應乙。", "登陸後再向西移，雨區依序轉成丙、甲。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不是清晨颱風仍在東側時的雨量分布。" },
      B: { verdict: "incorrect", reason: "甲與乙的時間位置不符颱風東向西移動。" },
      C: { verdict: "incorrect", reason: "中午與傍晚的雨區先後判反。" },
      D: { verdict: "correct", reason: "乙、丙、甲符合 05、11、17 時的路徑與迎風雨區變化。" },
      E: { verdict: "incorrect", reason: "丙不是最早的 05 時分布。" }
    },
    takeaway: "颱風雨量不只看中心，也要看當時哪個坡面迎風。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-22": {
    encouragement: "兩小時調查要完整落在低潮附近，還要選東岸午後山影可遮陽的時段。",
    keyIdea: "7 月 13 日下午 3 時接近適合的低潮窗口，且太陽在西側、山脈能替東岸遮陽。",
    steps: ["先由潮汐圖找可連續工作約兩小時的低潮時段。", "再選午後太陽在西側、中央山脈可遮蔽臺東的日期與時間。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "上午東岸直接受日照，且潮位條件不如 E。" },
      B: { verdict: "incorrect", reason: "雖是下午，但該時段潮位不適合完整兩小時調查。" },
      C: { verdict: "incorrect", reason: "上午容易曝曬，潮位窗口也不理想。" },
      D: { verdict: "incorrect", reason: "上午 10 時無山影遮陽，安全性較差。" },
      E: { verdict: "correct", reason: "下午 3 時兼顧低潮與山脈遮蔭，最適合調查。" }
    },
    takeaway: "戶外地質調查要把自然條件與人員安全一起考量。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-35": {
    encouragement: "年雨量看總量，降雨強度還要搭配降雨日數，兩者不能混為一談。",
    keyIdea: "圖表顯示後期豐水年雨量增加，且降雨日數沒有同比增加，因此強度提高。",
    steps: ["比較 1989～2009 各豐水年的年雨量，整體增加。", "再配合降雨日資料，判讀豐水年平均降雨強度增加。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "後期標示的豐水年年雨量呈增加趨勢。" },
      B: { verdict: "incorrect", reason: "枯水年資料沒有顯示年雨量一路增加。" },
      C: { verdict: "incorrect", reason: "由題圖不能得到枯水年降雨強度持續降低。" },
      D: { verdict: "correct", reason: "豐水年雨量增加而降雨日未同幅增加，強度因而提高。" },
      E: { verdict: "incorrect", reason: "兩時段豐枯水年出現頻率並非差異不大。" }
    },
    takeaway: "降雨量除以降雨日數，才是平均降雨強度。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-62": {
    encouragement: "煤層向東傾 45°，往西走時煤層相對會升高；水平挖不到就往上找。",
    keyIdea: "從甲往西 100 公尺，45° 傾角使煤層位置上升約 100 公尺，因此乙點往上挖。",
    steps: ["在東西剖面畫出向東下傾 45° 的煤層。", "向西水平移 100 公尺，煤層相對升高 100 公尺。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "45° 下水平與垂直位移相等，煤層在乙上方約 100 公尺。" },
      B: { verdict: "incorrect", reason: "煤層向東下傾，往西後不會在更深處。" },
      C: { verdict: "incorrect", reason: "煤層走向南北，往南同高度不會更接近煤層。" },
      D: { verdict: "incorrect", reason: "往北沿走向挖也不改變與煤層的垂直距離。" },
      E: { verdict: "incorrect", reason: "繼續向西水平挖會讓煤層相對位置更高。" }
    },
    takeaway: "傾角題先畫側視剖面，走向方向則不改變岩層高度。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-65": {
    encouragement: "南太平洋環流受科氏力影響，西側流速快，所以西邊等高線應更密。",
    keyIdea: "正式圖 A 顯示副熱帶環流海面高度配置，且澳洲東側的等高線最密。",
    steps: ["南半球環流與海面坡度方向要符合科氏力平衡。", "西側邊界流較快，等高線應在澳洲東側最密，選 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 的高低配置與西側密集等高線都符合南太平洋環流。" },
      B: { verdict: "incorrect", reason: "B 的海面高低或等高線密集側不符南半球環流。" },
      C: { verdict: "incorrect", reason: "C 未把最大高度梯度放在大洋西側。" },
      D: { verdict: "incorrect", reason: "D 的等高線配置會導出不合理的流向。" },
      E: { verdict: "incorrect", reason: "E 的中心高低與西側強流特徵不符。" }
    },
    takeaway: "等高線越密代表海面坡度越大，海流通常越快。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-110-68": {
    encouragement: "環境溫度下降得比上升氣塊快，大氣就不穩定；逆溫則像蓋子阻擋混合。",
    keyIdea: "星期一溫度隨高度降得快，較不穩定；星期二有較穩定層結，易累積污染。",
    steps: ["比較兩天環境溫度曲線斜率，星期一較利於氣塊持續上升。", "星期二穩定度較高，垂直混合弱，污染物較難擴散。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "星期一環境遞減率較大，大氣較不穩定、易對流。" },
      B: { verdict: "incorrect", reason: "星期二較穩定，不利雲層旺盛垂直發展。" },
      C: { verdict: "incorrect", reason: "星期一反而較容易有垂直發展的雲。" },
      D: { verdict: "correct", reason: "星期二垂直混合弱，污染物較容易滯留。" },
      E: { verdict: "incorrect", reason: "兩天穩定度不同，雲的垂直發展厚度不會約略相同。" }
    },
    takeaway: "不穩定利於對流，穩定層結則容易累積空氣污染。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-111-29": {
    encouragement: "用截切與覆蓋判年代：被覆蓋的較老，打在別人上面的隕石坑較新。",
    keyIdea: "三角洲丙先形成，小隕石坑甲打在其上，風成沙丘乙最後覆蓋部分地貌。",
    steps: ["丙三角洲是承載其他地貌的底層，最老。", "甲形成後又被乙沙丘影響，順序為丙→甲→乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不比作為底層的丙更老。" },
      B: { verdict: "incorrect", reason: "乙沙丘不是三者中最老。" },
      C: { verdict: "incorrect", reason: "丙最老正確，但乙與甲的先後顛倒。" },
      D: { verdict: "correct", reason: "覆蓋與截切關係顯示丙、甲、乙由老到新。" },
      E: { verdict: "incorrect", reason: "乙不是最先形成，丙也不是最後。" }
    },
    takeaway: "地貌相對年代看誰覆蓋誰、誰截切誰。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-111-30": {
    encouragement: "面向東方時，星跡傾角可反映緯度；赤道附近星星近乎垂直升起。",
    keyIdea: "甲的星跡接近垂直，位置接近赤道；乙的斜率顯示北半球約 45°。",
    steps: ["比較甲星跡與地平線，近乎垂直表示低緯。", "乙星跡的傾斜方向與角度對應北半球約 45°。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不是高於 45° 的北半球高緯地區。" },
      B: { verdict: "incorrect", reason: "乙的星跡方向不支持南半球低緯。" },
      C: { verdict: "correct", reason: "甲星跡近乎垂直東升，表示相當接近赤道。" },
      D: { verdict: "incorrect", reason: "甲緯度較低，不是比乙高。" },
      E: { verdict: "correct", reason: "乙的星跡傾角符合北半球約 45°。" }
    },
    takeaway: "向東拍星跡時，星跡與地平線的角度可估觀測緯度。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-111-33": {
    encouragement: "春分後太陽沿黃道向北到夏至，再向南經秋分到冬至。",
    keyIdea: "正式天球圖的春分、夏至、秋分、冬至依序標為丁、丙、乙、甲。",
    steps: ["先找黃道與天球赤道的兩個交點，即春分與秋分。", "再找黃道最北、最南點，排成丁→丙→乙→甲。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不是春分起點，順序方向也不符太陽周年運動。" },
      B: { verdict: "incorrect", reason: "乙應在夏至之後，不是春分。" },
      C: { verdict: "incorrect", reason: "這個排列把黃道運動方向排反。" },
      D: { verdict: "correct", reason: "丁、丙、乙、甲依序是春分、夏至、秋分、冬至。" },
      E: { verdict: "incorrect", reason: "丙是夏至附近，不是春分起點。" }
    },
    takeaway: "春分到冬至依序經過夏至與秋分。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-111-34": {
    encouragement: "秋季東亞長帶雲常是鋒面，旁邊旋轉雲團則可能是颱風。",
    keyIdea: "乙是熱帶低壓雲系，臺灣同受甲鋒面與乙水氣影響，東北部須防豪雨。",
    steps: ["辨認甲為鋒面長雲帶、乙為旋轉熱帶雲系。", "臺灣位在兩系統共同影響區，迎風東北部雨勢強。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲長帶雲主要由鋒面形成，不是黑潮暖水單獨造成。" },
      B: { verdict: "correct", reason: "乙有旋轉且組織完整的雲系，符合颱風或熱帶低壓。" },
      C: { verdict: "correct", reason: "臺灣位在鋒面與熱帶系統水氣共同作用的位置。" },
      D: { verdict: "incorrect", reason: "乙是熱帶系統，不是冷暖氣團交會形成的溫帶氣旋。" },
      E: { verdict: "correct", reason: "東北風與豐沛水氣使臺灣東北部有豪雨風險。" }
    },
    takeaway: "鋒面加颱風水氣常會放大臺灣秋季豪雨。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-111-35": {
    encouragement: "用距離除以黑潮速度估時間，就能檢查「一兩天」是否合理。",
    keyIdea: "臺灣到九州相距數百至上千公里，以 1 m/s 漂流需多日，C 的一至兩天明顯太短。",
    steps: ["1 m/s 約等於每天 86 公里。", "臺灣至九州距離遠大於 172 公里，因此不可能只差一至兩天。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "幼魚隨流漂送時，其分布確可提供黑潮流況線索。" },
      B: { verdict: "incorrect", reason: "冬季黑潮支流進入臺灣海峽可解釋兩岸捕獲鰻苗。" },
      C: { verdict: "correct", reason: "題目要找顯著錯誤；依速度估算，一至兩天不足以漂到九州。" },
      D: { verdict: "incorrect", reason: "黑潮與支流可把鰻苗帶往東亞多地。" },
      E: { verdict: "incorrect", reason: "污染與棲地破壞確可能降低鰻魚產量。" }
    },
    takeaway: "遇到速度敘述，換算成每天距離最容易抓出不合理值。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-112-1": {
    encouragement: "把基隆、彭佳嶼放在颱風路徑兩側，再隨中心通過追蹤逆時鐘風向。",
    keyIdea: "西北颱通過兩站之間時，兩站都可能由北風轉成南風。",
    steps: ["颱風接近前，兩站位於環流前側，主要受偏北風。", "中心通過後相對位置改變，風向轉為偏南。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "基隆在中心通過前後的相對位置改變，可由北風轉南風。" },
      B: { verdict: "correct", reason: "彭佳嶼也會隨颱風中心通過而由北風轉南風。" },
      C: { verdict: "incorrect", reason: "基隆的轉向次序不是由南轉北。" },
      D: { verdict: "incorrect", reason: "彭佳嶼的轉向次序與此相反。" },
      E: { verdict: "incorrect", reason: "中心通過會使基隆風向明顯改變，不會持續南風。" }
    },
    takeaway: "颱風風向要看測站在中心移動前後的相對方位。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-112-2": {
    encouragement: "看機率曲線時，把低溫、高溫、平均值和作物區間分開比較。",
    keyIdea: "依正式圖，A 對現今低溫事件機率的判讀錯誤，其餘敘述符合兩曲線與生存區間。",
    steps: ["先比較現今與未來兩條分布曲線的位置與面積。", "再逐項對照甲至乙的可生存區間，找出與圖不符的 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "題目要選錯誤；正式曲線不支持現今低溫事件機率較高。" },
      B: { verdict: "incorrect", reason: "未來曲線在高溫端的面積較小，敘述符合圖示。" },
      C: { verdict: "incorrect", reason: "未來分布中心較現今偏低，平均溫度較低。" },
      D: { verdict: "incorrect", reason: "未來較冷的分布使耐低溫作物較容易生存。" },
      E: { verdict: "incorrect", reason: "未來落入甲至乙區間的曲線面積較大，適應機率較高。" }
    },
    takeaway: "機率題要比較曲線下的面積，不只看最高點。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-112-5": {
    encouragement: "潮位曲線可直接比較乾潮時間、潮差與水體交換能力。",
    keyIdea: "各站乾潮不同步；花蓮潮差小，潮汐交換弱，污染物較難擴散。",
    steps: ["比較四條曲線谷底時間，並不完全相同。", "花蓮潮差最小，港灣水體交換較弱。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "有些站的潮型不能簡化成每日固定兩次完整週期。" },
      B: { verdict: "correct", reason: "四站曲線谷底出現時間不完全相同。" },
      C: { verdict: "incorrect", reason: "7 月 27 日 9 時各站曲線斜率不同，並非都在退潮。" },
      D: { verdict: "incorrect", reason: "圖中臺北港潮差沒有大於馬祖。" },
      E: { verdict: "correct", reason: "花蓮潮差較小，潮汐帶動的交換弱，污染物較難擴散。" }
    },
    takeaway: "潮差越小，單靠潮汐造成的港灣換水通常越弱。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-112-7": {
    encouragement: "平均日雨量要用月總雨量除以真正降雨日數，再比較各月。",
    keyIdea: "依表計算，8 月每個降雨日的平均雨量大於 6 月，所以 D 正確。",
    steps: ["排除只有雨跡的日子，求實際降雨日數。", "用月雨量除以日數，比較 8 月與 6 月。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "全年總雨量除以 12 後沒有超過 200 mm。" },
      B: { verdict: "incorrect", reason: "表中夏季總雨量高於冬季。" },
      C: { verdict: "incorrect", reason: "12 月每個降雨日平均量不是全年最大。" },
      D: { verdict: "correct", reason: "依表中雨量和降雨日數計算，8 月平均日雨量較 6 月大。" },
      E: { verdict: "incorrect", reason: "排除雨跡日後，實際降雨日數未超過半年。" }
    },
    takeaway: "總量大不一定強度大，還要除以發生天數。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-112-53": {
    encouragement: "同位素比例是來源指紋，不等於鉛濃度；要看兩條資料各自代表什麼。",
    keyIdea: "1920 年後鉛同位素比例下降，與石油燃料帶來不同來源的鉛相符。",
    steps: ["分清楚圖中的鉛濃度與同位素比例。", "比對時間變化，1920 年後比例下降可連結石油使用。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鉛同位素比例不能用來推算空氣二氧化碳含量。" },
      B: { verdict: "incorrect", reason: "鉛濃度並非從 1760 年起一路穩定上升。" },
      C: { verdict: "incorrect", reason: "同位素比例反映來源，不能直接換算鉛濃度。" },
      D: { verdict: "correct", reason: "1920 年後比例下降與石油及其相關鉛來源增加相符。" },
      E: { verdict: "incorrect", reason: "禁用含鉛汽油不會讓自然界的同位素比例變成 0。" }
    },
    takeaway: "濃度告訴我們有多少，同位素比例常告訴我們從哪裡來。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-113-32": {
    encouragement: "北半球近地風繞低壓逆時鐘吹，鋒面兩側的氣溫與天氣也不同。",
    keyIdea: "依丁相對低壓與鋒面的位置，丁地近地面約吹西北風。",
    steps: ["先找低壓中心並套用逆時鐘環流。", "再確認丁位於冷鋒後方，風向約為西北。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲位置的環流風向不是西風。" },
      B: { verdict: "incorrect", reason: "乙不在四點中最冷的冷氣團位置。" },
      C: { verdict: "incorrect", reason: "丙靠近低壓與鋒面，氣壓不會最高。" },
      D: { verdict: "correct", reason: "丁在冷鋒後方，依逆時鐘環流約吹西北風。" },
      E: { verdict: "incorrect", reason: "乙所在位置不是圖中主要鋒面陰雨帶。" }
    },
    takeaway: "天氣圖先判低壓環流，再用鋒面位置修正風與天氣。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-114-13": {
    encouragement: "季節溫差最大要同時讓近日點加強該半球夏季，並讓黃赤交角變大。",
    keyIdea: "正式圖 A 的半球夏季接近近日點且黃赤交角最大，因此冬夏溫差最大。",
    steps: ["離太陽近時接收能量較多，若正逢該半球夏季會加熱夏天。", "黃赤交角越大，夏冬日照差也越大；兩條件同時符合 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 同時具備夏季近日點與較大黃赤交角，季節差最大。" },
      B: { verdict: "incorrect", reason: "B 的近日點季節或傾角組合不如 A 放大溫差。" },
      C: { verdict: "incorrect", reason: "C 未讓距日效應與軸傾效應同向加強。" },
      D: { verdict: "incorrect", reason: "D 的黃赤交角較小或近日點時機不利於最大溫差。" },
      E: { verdict: "incorrect", reason: "E 的兩項條件沒有同時達到最大季節反差。" }
    },
    takeaway: "季節差看軸傾，也看近日點落在哪個季節。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-114-14": {
    encouragement: "地表遠離斷層代表張裂，是正斷層；再用震央與測站位置判斷傾向。",
    keyIdea: "此斷層為張裂形成的正斷層，斷層面向東傾斜，所以選 A、E。",
    steps: ["地震時兩側遠離斷層，顯示伸張作用，判為正斷層。", "結合震央在斷層東側與測站位置，判斷斷層面向東傾。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由震央與斷層位置可判斷斷層面往地下向東延伸。" },
      B: { verdict: "incorrect", reason: "地下延伸方向不是向西。" },
      C: { verdict: "incorrect", reason: "地表運動是遠離斷層的伸張，不是水平錯動。" },
      D: { verdict: "incorrect", reason: "逆斷層由擠壓形成，與觀測到的伸張方向不符。" },
      E: { verdict: "correct", reason: "兩側向外運動表示伸張，符合正斷層。" }
    },
    takeaway: "擠壓常形成逆斷層，伸張常形成正斷層。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-114-45": {
    encouragement: "颱風中心通過時氣壓最低，所以曲線谷底要對準三角形。",
    keyIdea: "31 日 15 時中心通過，正式圖 B 的氣壓先降、三角形處最低、之後回升。",
    steps: ["中心接近時與測站距離縮短，氣壓下降。", "15 時通過後距離增大，氣壓回升，對照選 B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的最低氣壓沒有準確對應中心通過時刻。" },
      B: { verdict: "correct", reason: "B 在三角形處達最低，前降後升，符合颱風通過。" },
      C: { verdict: "incorrect", reason: "C 沒有呈現中心通過時的明顯最低氣壓。" },
      D: { verdict: "incorrect", reason: "D 的突變或最低點時序不符合穩定移動的颱風。" },
      E: { verdict: "incorrect", reason: "E 氣壓近乎不變，與中心直接通過不符。" }
    },
    takeaway: "颱風中心通過的氣壓曲線通常呈先降後升的谷形。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-83-13": {
    encouragement: "等值線最內圈的數值最高，污染源通常就在高值中心附近。",
    keyIdea: "正式圖中污染濃度最高值包圍乙區，所以主要污染源位於乙。",
    steps: ["由外向內讀污染濃度等值線。", "找出最高濃度封閉中心，位置是乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不在濃度最高的封閉中心。" },
      B: { verdict: "correct", reason: "乙位於最高污染濃度核心，最可能是主要污染源。" },
      C: { verdict: "incorrect", reason: "丙位於污染向下風處擴散的區域，不是源頭。" },
      D: { verdict: "incorrect", reason: "丁的濃度低於乙，較不像主要排放位置。" }
    },
    takeaway: "等值線圖的封閉高值中心常指出污染源位置。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-83-14": {
    encouragement: "污染會從源頭往下風處拉長，先由乙看濃度帶延伸方向。",
    keyIdea: "污染帶由西南往東北擴散，表示風從西南方吹來，是西南風。",
    steps: ["以乙污染源為起點，看等值線向哪一側拖長。", "下風處在東北，因此來向是西南。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若吹東北風，污染帶應往西南延伸。" },
      B: { verdict: "incorrect", reason: "西北風會使污染主要往東南擴散，與圖不符。" },
      C: { verdict: "incorrect", reason: "東南風的下風方向是西北，不符合污染帶。" },
      D: { verdict: "correct", reason: "西南風把乙的污染物帶往東北，符合等值線分布。" }
    },
    takeaway: "風向名稱指風從哪裡來，污染尾巴則指向風要去的地方。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-83-15": {
    encouragement: "沿甲到乙再到丙讀等值線，經過污染中心時濃度最高。",
    keyIdea: "路線由外圍進入乙的高值中心再離開，濃度先升後降，對應圖 C。",
    steps: ["甲到乙逐步跨入較高濃度等值線。", "越過乙往丙又跨回較低值，因此曲線先升後降。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的變化沒有在乙附近形成正確的高峰。" },
      B: { verdict: "incorrect", reason: "B 的單調變化不符經過污染中心。" },
      C: { verdict: "correct", reason: "C 顯示甲到乙上升、乙到丙下降，符合等值線。" },
      D: { verdict: "incorrect", reason: "D 的峰谷位置或變化方向與沿線讀值不符。" }
    },
    takeaway: "把路線每次穿越的等值線依序記下，就能畫出剖面曲線。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-83-16": {
    encouragement: "地層對比靠相同標準化石對齊，再看其中哪段在甲地中斷。",
    keyIdea: "依兩地化石帶對齊後，甲地缺少乙地的第 4、5 層。",
    steps: ["用上下兩組共同化石作為對齊基準。", "比較基準間的層序，乙的 4、5 層在甲沒有出現。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第 2、3 層仍可在甲地找到對應。" },
      B: { verdict: "incorrect", reason: "第 3 層不是缺失層，只有後續層段中斷。" },
      C: { verdict: "correct", reason: "化石對比顯示甲地缺少乙地第 4、5 層。" },
      D: { verdict: "incorrect", reason: "第 6 層可由化石與甲地上部對比，不是缺失層。" }
    },
    takeaway: "地層厚薄可不同，標準化石仍能幫我們對準同一時代。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-84-20": {
    encouragement: "能維持對比，代表剩下的化石生存年代交集仍只落在原本中段。",
    keyIdea: "拿掉 A1 後，B2 與 C1 的生存期交集仍能鎖定甲地中段。",
    steps: ["找 A1、B2、C1 三條生存期限的共同交集。", "逐一拿掉一種，只有拿掉 A1 仍不改變可對比區段。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "即使沒有 A1，B2 與 C1 的交集仍可鎖定相同中段。" },
      B: { verdict: "incorrect", reason: "若缺少 B2，剩餘化石的年代交集會變寬，不能維持原結論。" },
      C: { verdict: "incorrect", reason: "若缺少 C1，也無法把對比範圍限制在原點狀區。" }
    },
    takeaway: "化石群對比看的是生存年代的共同交集。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-84-26": {
    encouragement: "把表中的高度與氣溫點一一標上，連線即可看出對流層降溫、平流層升溫。",
    keyIdea: "正式圖 C 正確通過表列各點，呈現低層降溫、中段近等溫、較高處升溫。",
    steps: ["依高度順序標出每個溫度資料點。", "比較四圖，只有 C 的折線轉折位置與數值相符。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的溫度轉折高度或方向不符合表格。" },
      B: { verdict: "incorrect", reason: "B 未呈現 12～20 公里附近近似等溫。" },
      C: { verdict: "correct", reason: "C 依序符合降溫、近等溫與再升溫的表列資料。" },
      D: { verdict: "incorrect", reason: "D 將部分高度的溫度變化方向畫反。" }
    },
    takeaway: "資料作圖先標點再連線，不要只靠記憶猜大氣曲線。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-85-2": {
    encouragement: "同一張天氣圖上，氣壓最高的位置就是等壓線標值最大或最靠近高壓中心處。",
    keyIdea: "正式圖中丁最接近高壓中心，氣壓高於甲、乙、丙。",
    steps: ["讀取四地附近的等壓線數值。", "比較後丁的氣壓值最高。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲附近等壓線數值低於丁。" },
      B: { verdict: "incorrect", reason: "乙不是最接近高壓中心的位置。" },
      C: { verdict: "incorrect", reason: "丙受到較低氣壓系統影響，數值不最高。" },
      D: { verdict: "correct", reason: "丁靠近圖中高壓中心，四地中氣壓最高。" }
    },
    takeaway: "判氣壓高低直接讀等壓線，不用由天氣現象猜。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-85-3": {
    encouragement: "天氣圖判溫度要看緯度、氣團與鋒面位置，暖氣團內通常較熱。",
    keyIdea: "丙位在較低緯且暖氣團控制區，四地中氣溫最高。",
    steps: ["先用鋒面分出冷、暖氣團。", "再比較緯度，丙同時位於暖側與較低緯。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲受較冷氣團影響，溫度低於丙。" },
      B: { verdict: "incorrect", reason: "乙的位置或氣團條件不如丙溫暖。" },
      C: { verdict: "correct", reason: "丙在暖氣團且緯度較低，氣溫最高。" },
      D: { verdict: "incorrect", reason: "丁雖氣壓高，但高氣壓不代表一定最熱。" }
    },
    takeaway: "氣壓最高不等於氣溫最高，兩題要分開判讀。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-85-12": {
    encouragement: "冬季東北季風會把中國沿岸冷流往南推，是判讀臺灣海流圖的明顯線索。",
    keyIdea: "圖中臺灣海峽有明顯南下沿岸流，代表冬季海流型態。",
    steps: ["觀察臺灣西側海流是否由北向南。", "南下冷流受東北季風加強，因此判為冬季。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "春季季風轉換，海流型態不會如此明顯南下。" },
      B: { verdict: "incorrect", reason: "夏季西南季風下，臺灣海峽主要流向偏北。" },
      C: { verdict: "incorrect", reason: "秋季雖開始轉換，但圖示是典型冬季流場。" },
      D: { verdict: "correct", reason: "東北季風使中國沿岸冷流南下，符合圖中冬季海流。" }
    },
    takeaway: "臺灣海峽冬季常見南下冷流，夏季則多偏北流。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-86-5": {
    encouragement: "河水入海時淡水密度較小在上層外流，較鹹海水由下層補入。",
    keyIdea: "正式圖 A 畫出表層河水向海、底層海水向河口的典型河口環流。",
    steps: ["淡水較輕，會浮在鹹水上方向外流。", "為補充流出的水，底層海水向河口內流，對照 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 正確呈現表層向海、底層向陸的兩層流。" },
      B: { verdict: "incorrect", reason: "B 的上下層流向不符合淡水較輕的分層。" },
      C: { verdict: "incorrect", reason: "C 將河水與海水的主要位置或方向畫反。" },
      D: { verdict: "incorrect", reason: "D 未呈現河口鹽度分層造成的補償流。" }
    },
    takeaway: "河口常是上淡下鹹、上層出海下層入河。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-86-7": {
    encouragement: "地貌年代看重疊：被覆蓋、被截切的較老，蓋在上面的較新。",
    keyIdea: "影像中甲先形成，之後乙覆蓋或截切甲，丙又影響乙，順序為甲、乙、丙。",
    steps: ["找出甲與乙的重疊邊界，甲較老。", "再看丙位於前兩者之上或截切它們，丙最年輕。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "重疊與截切關係顯示甲→乙→丙由老到新。" },
      B: { verdict: "incorrect", reason: "丙不是最老，而是較晚形成的地貌。" },
      C: { verdict: "incorrect", reason: "甲早於乙，兩者先後不能對調。" },
      D: { verdict: "incorrect", reason: "丙形成晚於甲，不會夾在乙與甲之間。" }
    },
    takeaway: "行星表面沒有文字年代時，重疊與撞擊關係就是時間線。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-88-22": {
    encouragement: "哈伯定律是速度和距離成正比，所以圖形要通過原點並向右上直線增加。",
    keyIdea: "正式圖 A 呈現 v＝H₀d 的正比直線。",
    steps: ["距離加倍時，退行速度也應加倍。", "四圖中只有 A 是通過原點的正斜率直線。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 為通過原點的正比直線，符合哈伯定律。" },
      B: { verdict: "incorrect", reason: "B 不是速度隨距離成正比增加。" },
      C: { verdict: "incorrect", reason: "C 的彎曲或反向關係不符合 v＝H₀d。" },
      D: { verdict: "incorrect", reason: "D 未呈現距離越遠退行越快的線性關係。" }
    },
    takeaway: "哈伯定律的圖像關鍵是通過原點的上升直線。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-89-13": {
    encouragement: "週期就是相鄰兩個相同狀態之間的時間，最好量波峰到下一個波峰。",
    keyIdea: "圖中相鄰亮度高峰約相隔 5.5 天。",
    steps: ["在曲線上選兩個連續波峰。", "讀出兩者時間差約為 5.5 天。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2.0 天只是曲線一小段，尚未完成一次明暗循環。" },
      B: { verdict: "incorrect", reason: "3.5 天沒有回到相同亮度變化狀態。" },
      C: { verdict: "correct", reason: "相鄰兩個同相位高峰相差約 5.5 天。" },
      D: { verdict: "incorrect", reason: "7.0 天長於圖中一個完整週期。" },
      E: { verdict: "incorrect", reason: "20 天包含多次變化，不是單一週期。" }
    },
    takeaway: "週期要量同相位到下一次同相位，不是任選兩點。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-10": {
    encouragement: "「既望」是農曆十六日前後，月亮接近滿月，只要找幾乎全亮的月相。",
    keyIdea: "七月既望的月相接近滿月，正式圖 C 最符合。",
    steps: ["望日是農曆十五，既望約是十六日。", "此時月面幾乎全亮，對照圖示選 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的受光比例與接近滿月不符。" },
      B: { verdict: "incorrect", reason: "B 顯示的月相離望日仍較遠。" },
      C: { verdict: "correct", reason: "C 呈現接近滿月的月面，符合七月既望。" },
      D: { verdict: "incorrect", reason: "D 的明暗方向或受光比例不是既望月相。" },
      E: { verdict: "incorrect", reason: "E 接近新月或弦月型態，與詩文不符。" }
    },
    takeaway: "朔是新月、望是滿月，既望就是滿月剛過。",
    reviewStatus: "approved", reviewerRole: "earth"
  },
  "學-90-23": {
    encouragement: "逆溫就是高度增加時，氣溫反而上升；在圖上找一段往暖的一側偏。",
    keyIdea: "正式圖 B 顯示近地冷、上方較暖的逆溫層，可抑制垂直對流。",
    steps: ["正常對流層氣溫隨高度下降。", "若某層反而隨高度升溫就是逆溫，四圖中 B 符合。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 主要呈現隨高度正常降溫，沒有清楚逆溫層。" },
      B: { verdict: "correct", reason: "B 有一段溫度隨高度上升，形成穩定逆溫。" },
      C: { verdict: "incorrect", reason: "C 的溫度垂直變化不符合題述近地逆溫。" },
      D: { verdict: "incorrect", reason: "D 未呈現暖空氣覆蓋冷空氣的結構。" }
    },
    takeaway: "逆溫像一個暖蓋子，會讓近地污染物不易向上擴散。",
    reviewStatus: "approved", reviewerRole: "earth"
  }
});
