(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-90-8": {
    encouragement: "天氣變化主要發生在我們生活的對流層，從地面往上約十公里。",
    keyIdea: "水氣、雲、雨與大部分空氣都集中在對流層，因此主要天氣現象出現在 0～10 公里。",
    steps: ["先找氣溫隨高度大致下降的最低層大氣，這就是對流層。", "題圖中對流層約由地面延伸到 10 公里，所以選 A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "0～10 公里約為對流層，水氣最多，雲雨與主要天氣變化都集中在此。" },
      B: { verdict: "incorrect", reason: "10～15 公里接近對流層頂與低平流層，天氣活動已明顯減少。" },
      C: { verdict: "incorrect", reason: "15～20 公里屬平流層低部，空氣穩定且水氣少。" },
      D: { verdict: "incorrect", reason: "20～30 公里位於平流層，並非日常雲雨主要發生的高度。" }
    },
    takeaway: "日常天氣主要發生在離地約 0～10 多公里的對流層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-16": {
    encouragement: "星等、顏色與距離是三種不同資訊，分開判斷就不容易混淆。",
    keyIdea: "紅色恆星表面溫度通常比藍色恆星低；星等越小越亮，周日運動則繞天球北極。",
    steps: ["恆星顏色可反映表面溫度：藍色較熱，紅色較冷。", "因此紅色星比藍色星溫度低的 C 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "視星等數值越小看起來越亮，所以 1.8 星等比 3.3 星等亮，不是較暗。" },
      B: { verdict: "incorrect", reason: "北方星空周日運動繞天球北極，不是繞天狼星。" },
      C: { verdict: "correct", reason: "恆星顏色由紅到藍，表面溫度大致由低到高，所以紅星較冷。" },
      D: { verdict: "incorrect", reason: "影像中角距較近只代表天空方向接近，不能保證兩星在三維空間的真實距離最近。" }
    },
    takeaway: "藍星比紅星熱；視星等越小越亮；天空角距不等於真實空間距離。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-19": {
    encouragement: "錯開的兩段中洋脊之間，板塊沿水平方向互相擦過，這一段就是轉形斷層。",
    keyIdea: "中洋脊被橫向錯開時，兩段脊之間的活動斷層屬轉形斷層。",
    steps: ["甲丁與丙己都是張裂、生成新海洋地殼的中洋脊。", "連接兩段錯開中洋脊的丙丁段以水平錯動為主，稱為轉形斷層。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "正斷層是地殼張裂時上下盤垂直錯動，不能專指連接錯開中洋脊的段落。" },
      B: { verdict: "incorrect", reason: "逆斷層形成於擠壓環境，與洋脊間的水平錯動不合。" },
      C: { verdict: "correct", reason: "丙丁段連接兩段錯開的中洋脊，板塊沿此水平相對移動，是轉形斷層。" },
      D: { verdict: "incorrect", reason: "一般平移斷層描述水平錯動，但板塊邊界上連接洋脊的專有名稱是轉形斷層。" }
    },
    takeaway: "連接兩段錯開中洋脊的活動水平斷層，稱為轉形斷層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-20": {
    encouragement: "新海底在中洋脊誕生，之後被推向兩側，所以離脊越遠，年齡越老。",
    keyIdea: "中洋脊持續噴發形成最年輕海洋地殼，兩側海底隨擴張遠離而逐漸變老。",
    steps: ["岩漿在中洋脊上湧、冷卻，形成新的玄武岩海洋地殼。", "海底向兩側擴張，因此年齡以中洋脊最年輕，離脊越遠越老。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "中洋脊是新海洋地殼生成處，兩側岩石年齡隨距離增加而變老。" },
      B: { verdict: "incorrect", reason: "乙丙段不是生成新海底的中洋脊中心，不能以它為最年輕帶。" },
      C: { verdict: "incorrect", reason: "丙丁是轉形斷層，且題述把最老、最年輕關係顛倒。" },
      D: { verdict: "incorrect", reason: "丁戊並非中洋脊中心，年齡也不會由此向外變年輕。" }
    },
    takeaway: "海底年齡像書頁：中洋脊中央最新，向兩側逐漸變老。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-42": {
    encouragement: "地球一年繞 360°，先算每天，再乘一個月的天數就能完成兩個答案。",
    keyIdea: "地球每天公轉約 360÷365≈1°；一次滿月到下次滿月約 29.5 天，共前進約 30°。",
    steps: ["每日公轉角度約為 360°÷365，接近 1°。", "朔望月約 29.5 天，地球約前進 29.5×1°，接近 30°。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "360°除以約 365 天，地球每天平均公轉約 1°。" },
      B: { verdict: "incorrect", reason: "每天 15°會在 24 天繞完一圈，遠快於實際一年。" },
      C: { verdict: "incorrect", reason: "每天 30°只需 12 天繞日一周，不合理。" },
      D: { verdict: "incorrect", reason: "每天 45°只需 8 天完成公轉，與一年週期不符。" },
      E: { verdict: "incorrect", reason: "一個月不只前進 1°，因為每天就約前進 1°。" },
      F: { verdict: "incorrect", reason: "一個月約 29.5 天，公轉角度接近 30°，不是 15°。" },
      G: { verdict: "correct", reason: "滿月到下次滿月約 29.5 天，地球約公轉 30°。" },
      H: { verdict: "incorrect", reason: "45°相當於約一個半月的公轉量，高於一個朔望月。" }
    },
    takeaway: "地球每天公轉約 1°，一個月約前進 30°。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-43": {
    encouragement: "題目要選錯誤敘述；分清楚真正的運動與示意圖上的甲、乙位置即可。",
    keyIdea: "地球和月球其實共同繞質量中心，不可簡化成地球繞月球；月球從甲到乙未必正好是滿月到滿月。",
    steps: ["地球自轉並繞太陽由西向東公轉，月球也由西向東繞地球。", "B 把地月運動說成地球繞月球；E 又誤把圖中甲到乙直接當成兩次滿月，兩者錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地球確實同時自轉並繞太陽公轉，所以這句不是錯誤敘述。" },
      B: { verdict: "correct", reason: "題目要選錯誤；一般描述是月球繞地球，不能說地球另外繞月球公轉。" },
      C: { verdict: "incorrect", reason: "從地球北極上方看，地球繞太陽公轉方向為自西向東，這句正確。" },
      D: { verdict: "incorrect", reason: "月球繞地球公轉也是自西向東，這句正確。" },
      E: { verdict: "correct", reason: "圖中甲到乙代表月球完成一圈相對恆星的運動，但地球也已前進，不能直接等同滿月到滿月。" }
    },
    takeaway: "月球繞地一圈的恆星月，比滿月到滿月的朔望月短。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-52": {
    encouragement: "平均坡度就是高度差除以河長，兩條河各算一次便能比較。",
    keyIdea: "淡水河源頭約 3500 公尺、長 159 公里，平均坡度大於源頭 500 公尺、長 86 公里的基隆河，平均流速也較大。",
    steps: ["淡水河平均坡度約 3500÷159≈22 公尺／公里。", "基隆河約 500÷86≈5.8 公尺／公里；淡水河坡度較大，水流平均也較快。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "淡水河平均坡度約 22 公尺／公里，高於基隆河約 5.8，平均流速通常也較大。" },
      B: { verdict: "incorrect", reason: "淡水河的源頭高度相對河長所算坡度並不較小。" },
      C: { verdict: "incorrect", reason: "坡度較大通常使重力驅動的水流較快，不會平均流速反而較小。" },
      D: { verdict: "incorrect", reason: "淡水河平均坡度不是較小，因此整組配對不成立。" }
    },
    takeaway: "河床平均坡度＝源頭與下游高度差÷河長；坡度大通常流速較快。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-53": {
    encouragement: "大潮發生在太陽、地球、月球接近一直線的朔或望，再用日期判斷是哪一個。",
    keyIdea: "報導日期接近農曆初一，太陽與月球在地球同側，月相為朔並形成大潮。",
    steps: ["朔與望時，太陽和月球的潮汐作用方向接近，潮差較大。", "依題目日期換算接近農曆初一，因此這次大潮對應朔。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "當時接近農曆初一的新月，月相為朔，也容易出現大潮。" },
      B: { verdict: "incorrect", reason: "上弦月時日月方向約成直角，通常形成小潮。" },
      C: { verdict: "incorrect", reason: "望也可能形成大潮，但題目所給日期並非農曆十五附近。" },
      D: { verdict: "incorrect", reason: "下弦月的日月潮汐作用部分抵銷，通常是小潮。" }
    },
    takeaway: "朔、望容易大潮；上弦、下弦容易小潮。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-91-55": {
    encouragement: "豪雨分級先看 24 小時累積量；425 毫米已遠超過豪雨門檻。",
    keyIdea: "單日降雨 425 毫米高於豪雨門檻 130 毫米，也不可能在完全沒有任何一小時大雨的情況下累積至此。",
    steps: ["題文給的 24 小時雨量為 425 毫米，已超過豪雨的 130 毫米門檻。", "若每小時都低於 15 毫米，24 小時最多低於 360 毫米；425 毫米表示至少曾達大雨時雨量條件。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "425 毫米超過 130 毫米，且由總量可知至少一小時達到大雨條件，所以必屬豪雨以上。" },
      B: { verdict: "incorrect", reason: "24 小時總量已達豪雨門檻，不能只稱大雨；用平均值也不能否定豪雨分級。" },
      C: { verdict: "incorrect", reason: "即使未逐時列出，425 毫米大於 24×15＝360 毫米，必有至少一小時超過 15 毫米。" }
    },
    takeaway: "判雨量等級要同時看 24 小時累積量與必要的逐時門檻。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-11": {
    encouragement: "氣壓隨高度上升會降低，但越往高空，下降速度反而逐漸變慢。",
    keyIdea: "低空空氣密度大，氣壓隨高度下降較快；高空空氣稀薄，氣壓變化率較小，因此 D 錯誤。",
    steps: ["氣壓來自上方空氣重量，越高處上方空氣越少，所以氣壓降低。", "氣壓曲線在高空逐漸變平，表示隨高度的變化率不是變大，而是變小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣壓與高度有規律關係，氣壓計確實可校正成高度計，所以這句正確。" },
      B: { verdict: "incorrect", reason: "一大氣壓約等於 76 公分水銀柱造成的壓力，這句正確。" },
      C: { verdict: "incorrect", reason: "約 8 公里高處氣壓已低於海平面的一半，符合氣壓曲線。" },
      D: { verdict: "correct", reason: "題目要選錯誤；越高空氣越稀薄，氣壓隨高度的下降率反而逐漸減小。" }
    },
    takeaway: "氣壓隨高度降低，而且低空降得快、高空降得慢。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-14": {
    encouragement: "裂谷的名字就透露板塊正被拉開；張力會讓上盤下滑，形成正斷層。",
    keyIdea: "東非裂谷是大陸張裂中的板塊邊界，主要受張力作用並形成正斷層。",
    steps: ["裂谷表示地殼被拉張、變薄，兩側板塊逐漸分離。", "張力使斷層上盤相對下滑，主要形成正斷層，因此選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聚合邊界與逆斷層屬擠壓環境，不會形成典型裂谷。" },
      B: { verdict: "incorrect", reason: "張裂邊界判斷正確，但張力主要形成正斷層，不是逆斷層。" },
      C: { verdict: "incorrect", reason: "正斷層正確，但東非裂谷不是聚合邊界。" },
      D: { verdict: "correct", reason: "東非裂谷由地殼張裂形成，斷層以正斷層為主。" }
    },
    takeaway: "張裂→正斷層與裂谷；擠壓→逆斷層與山脈。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-15": {
    encouragement: "板塊不只是薄薄的地殼，而是地殼加上最上部堅硬地函。",
    keyIdea: "板塊就是岩石圈，包含地殼和上部地函最上方，因此底面落在地函內。",
    steps: ["岩石圈由地殼與上部地函最上方的堅硬部分組成。", "所以板塊底面已穿過地殼底部，位於地函內。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "板塊厚度超過地殼，還包含一部分上部地函，底面不在地殼內。" },
      B: { verdict: "correct", reason: "岩石圈板塊包含上部地函最上方，底面位於地函。" },
      C: { verdict: "incorrect", reason: "內地核位於地球最深處，遠低於板塊底面。" },
      D: { verdict: "incorrect", reason: "外地核也遠深於岩石圈板塊，且為液態金屬層。" }
    },
    takeaway: "板塊＝岩石圈＝地殼＋部分上部地函。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-16": {
    encouragement: "中洋脊被一段段水平錯開，就會在地圖上呈鋸齒狀。",
    keyIdea: "張裂性的中洋脊常被轉形斷層分段錯開，組合後形成鋸齒狀板塊邊界。",
    steps: ["印度洋中的板塊分離，主要邊界是生成新海底的中洋脊。", "中洋脊各段由水平錯動的轉形斷層連接，所以外形呈鋸齒狀。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "中洋脊判斷正確，但造成脊段水平錯開的是轉形斷層，不是一系列正斷層。" },
      B: { verdict: "incorrect", reason: "隱沒帶屬聚合邊界，不可能稱為張裂性隱沒帶。" },
      C: { verdict: "incorrect", reason: "前半仍把張裂環境誤稱為隱沒帶。" },
      D: { verdict: "correct", reason: "張裂中洋脊被一系列錯動性的轉形斷層連接，形成鋸齒狀。" }
    },
    takeaway: "海底鋸齒狀邊界常是中洋脊加轉形斷層的組合。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-18": {
    encouragement: "P 波總比 S 波快；離震源越遠，兩者到達時間差通常越大。",
    keyIdea: "近震測站的 P、S 波走過距離較短，速度差累積出的到時差也較小。",
    steps: ["P 波速度大於 S 波，所以任何測站都是 P 波先到。", "距離增加時，快慢兩波的旅行時間差逐漸拉大，因此越近震央差距越小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "S 波速度低於 P 波，不會大於 P 波。" },
      B: { verdict: "incorrect", reason: "由走時曲線判斷，不能把乙說成比甲更接近而違反圖中的到時資料。" },
      C: { verdict: "incorrect", reason: "P 波速度最快，甲、乙兩站都應先收到 P 波，不是 S 波。" },
      D: { verdict: "correct", reason: "測站越接近震央，P、S 波傳播時間都短，兩者到時差也較小。" }
    },
    takeaway: "P 波先到、S 波後到；P-S 到時差可用來估震源距離。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-39": {
    encouragement: "氣塊比周圍暖就比較輕、會繼續上升；把氣塊線和環境線比較即可。",
    keyIdea: "潮濕氣塊 Y 每公里只降溫 6°C，比環境的 6.5°C 慢，因此在 3 公里以下仍較暖、有上升加速度。",
    steps: ["比較降溫率：環境 W 每公里降 6.5°C，潮濕氣塊 Y 只降 6°C。", "Y 上升後會比同高度環境暖、密度小，因此低於 3 公里時仍受向上浮力。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Y 的降溫比環境慢，在 1.5 公里以上仍可比環境暖，不會立刻失去上升加速度。" },
      B: { verdict: "incorrect", reason: "乾燥氣塊 X 每公里降 10°C，降溫比環境快，不會在所有 3 公里以下高度都有上升加速度。" },
      C: { verdict: "correct", reason: "潮濕氣塊 Y 比環境降溫慢，3 公里以下保持較暖，具有向上浮力。" },
      D: { verdict: "incorrect", reason: "環境氣溫隨高度下降是常態，不能因此說整層大氣一定做垂直上升。" }
    },
    takeaway: "氣塊溫度高於同高度環境時較輕，會受到向上浮力。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-65": {
    encouragement: "南半球的科氏偏轉方向和北半球相反，但低壓仍然是空氣往中心流。",
    keyIdea: "南半球低壓近地面氣流向中心輻合，並受科氏力向左偏，形成順時鐘旋入。",
    steps: ["低壓中心氣壓較低，近地面空氣由外圍往中心流。", "南半球移動物體向左偏，合成後形成順時鐘旋入中心。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "南半球低壓氣流向中心輻合並順時鐘旋轉。" },
      B: { verdict: "incorrect", reason: "順時鐘方向正確，但低壓應旋入中心，不是旋離。" },
      C: { verdict: "incorrect", reason: "旋入中心正確，但南半球低壓不是逆時鐘旋轉。" },
      D: { verdict: "incorrect", reason: "逆時鐘且旋離中心較接近南半球高壓，不是低壓。" }
    },
    takeaway: "南半球低壓順時鐘旋入；高壓逆時鐘旋出。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-92-66": {
    encouragement: "臺灣冬季常有冷鋒，暖鋒卻不常直接通過；抓住這個區域特性就能找出錯誤句。",
    keyIdea: "臺灣冬季並不是暖鋒必經之地，少下雪主要與緯度低、近海且近地面溫度不夠低有關。",
    steps: ["東亞冬季溫帶氣旋多向東北移，冷鋒可南伸並接近臺灣。", "暖鋒通常位於低壓東側偏北，並非臺灣必經，所以 B 錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "依圖的冷鋒移動，臺灣仍在鋒面到達前的區域，這句可成立。" },
      B: { verdict: "correct", reason: "題目要選錯誤；臺灣不是暖鋒必經地，少雪也不能用此理由解釋。" },
      C: { verdict: "incorrect", reason: "氣旋發展時冷鋒可向南延伸，圖中長度增加的描述符合紀錄。" },
      D: { verdict: "incorrect", reason: "中緯度西風帶中的低壓通常往東或東北移動，與圖示一致。" }
    },
    takeaway: "臺灣冬季常受冷鋒影響，但不是暖鋒必經之地。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-4": {
    encouragement: "照片中的星系是由大量恆星組成的巨大系統，銀河系只是宇宙眾多星系之一。",
    keyIdea: "甲、乙都是銀河系外的其他星系，和銀河系同屬由大量恆星組成的星系系統。",
    steps: ["影像中散點狀恆星多是銀河系內較近的前景星。", "具有完整延展結構的甲、乙則是遙遠的河外星系，不屬於銀河系。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "畫面中的前景恆星不必屬於甲或乙，許多是銀河系內的星。" },
      B: { verdict: "incorrect", reason: "甲、乙是獨立的河外星系，不屬於我們銀河系。" },
      C: { verdict: "correct", reason: "甲、乙都是銀河系之外、與銀河系同類的大型恆星系統。" },
      D: { verdict: "incorrect", reason: "甲與乙都呈現獨立星系結構，沒有一個是銀河系本身。" }
    },
    takeaway: "星系是龐大恆星系統；夜空影像可同時拍到銀河系前景星與遙遠河外星系。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-5": {
    encouragement: "照片上看起來大，不一定真的比較近，因為我們不知道兩個星系本身的真實大小。",
    keyIdea: "只知道影像角大小，無法區分是本體較大還是距離較近，必須用其他測距方法。",
    steps: ["影像大小同時受天體真實大小與距離影響。", "題目沒有提供甲、乙的真實尺度，因此不能只靠照片判斷遠近。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不同星系的真實大小差異很大，不能假設都一樣大。" },
      B: { verdict: "incorrect", reason: "距離遠確實會看起來小，但甲也可能本來就較大，單靠影像不能確定。" },
      C: { verdict: "incorrect", reason: "同樣忽略了兩星系真實體積未知，不能斷言乙較近。" },
      D: { verdict: "correct", reason: "缺少真實尺度或標準燭光等資訊，需用其他方法才能判斷星系距離。" }
    },
    takeaway: "角大小不能單獨決定距離，還需要知道真實大小或其他測距指標。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-29": {
    encouragement: "頁岩受熱與受壓後變成其他岩石，這是變質作用，不會變成火成岩。",
    keyIdea: "題圖中的頁岩及其受不同程度變質形成的岩石都不是由岩漿冷卻形成，因此火成岩為 0 種。",
    steps: ["頁岩原本是沉積岩。", "受溫度與壓力改變形成板岩、片岩或片麻岩等變質岩，圖中沒有岩漿冷卻的火成岩。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "圖中是頁岩與其變質產物，沒有由岩漿冷卻形成的火成岩，所以為 0 種。" },
      B: { verdict: "incorrect", reason: "圖中沒有任何一種岩石經岩漿冷卻形成，不能算 1 種。" },
      C: { verdict: "incorrect", reason: "把變質產物誤算成火成岩，實際不是 2 種。" },
      D: { verdict: "incorrect", reason: "三種新岩石是變質程度不同的產物，不是三種火成岩。" },
      E: { verdict: "incorrect", reason: "頁岩本身也屬沉積岩，更不可能四種全是火成岩。" }
    },
    takeaway: "岩漿冷卻形成火成岩；原岩受熱受壓但未熔融，形成變質岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-30": {
    encouragement: "從頁岩一路變成片理更明顯、礦物更粗的岩石，代表變質程度越來越強。",
    keyIdea: "下方箭頭表示溫度與壓力作用增強，因此是由弱趨強的變質作用。",
    steps: ["頁岩在熱與壓力下，礦物重新排列並逐漸長大，形成不同變質岩。", "沿箭頭方向岩石變質特徵越明顯，所以變質作用由弱趨強。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中不是岩石在地表破碎分解的風化作用。" },
      B: { verdict: "incorrect", reason: "沉積作用是顆粒堆積，不會把頁岩改造成這些變質岩。" },
      C: { verdict: "incorrect", reason: "作用種類不是沉積作用，即使趨勢寫增強也不成立。" },
      D: { verdict: "incorrect", reason: "變質作用判斷正確，但箭頭方向是由弱變強，不是由強變弱。" },
      E: { verdict: "correct", reason: "沿箭頭溫壓條件增強，岩石的變質程度由弱趨強。" }
    },
    takeaway: "變質程度增加時，常見礦物重結晶、片理變明顯與晶粒變粗。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-93-31": {
    encouragement: "強烈變質需要高溫高壓，最常出現在板塊互相靠近、擠壓的地方。",
    keyIdea: "聚合板塊邊界有擠壓、深埋與岩漿熱源，是區域變質作用最常發生的環境。",
    steps: ["上一題箭頭代表逐漸增強的變質作用。", "板塊聚合會使岩石受擠壓、深埋並升溫，因此最常形成大範圍變質岩。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "張裂邊界以拉張和岩漿上湧為主，不是強烈區域變質最典型的位置。" },
      B: { verdict: "correct", reason: "聚合邊界的高壓、深埋與造山作用很適合產生區域變質。" },
      C: { verdict: "incorrect", reason: "錯動邊界可有局部剪切變質，但不如聚合造山帶普遍。" },
      D: { verdict: "incorrect", reason: "把張裂與錯動並列仍漏掉最典型的聚合邊界。" }
    },
    takeaway: "聚合造山帶是高溫高壓區域變質作用的主要舞臺。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-94-2": {
    encouragement: "題目直接說『侵入岩脈』，表示岩漿進入裂隙後冷卻，所以一定是火成岩。",
    keyIdea: "侵入岩脈由岩漿侵入既有岩層並冷卻凝固形成，分類上屬火成岩。",
    steps: ["『侵入』表示熔融岩漿進入原有地層。", "岩漿冷卻凝固所形成的岩石就是火成岩。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "沉積岩由沉積物堆積、壓密與膠結形成，不稱侵入岩脈。" },
      B: { verdict: "correct", reason: "丙是岩漿侵入後冷卻形成的岩脈，屬火成岩。" },
      C: { verdict: "incorrect", reason: "變質岩是原岩受熱受壓改變，並非岩漿凝固的岩脈。" },
      D: { verdict: "incorrect", reason: "『侵入岩脈』已足以判斷其為火成岩，資料並不不足。" }
    },
    takeaway: "岩脈、岩床等侵入體都是岩漿冷卻形成的火成岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-94-3": {
    encouragement: "褶皺表示原本平坦的地層被大力擠彎，是劇烈地殼變動很直接的證據。",
    keyIdea: "大範圍地層褶皺需要強烈擠壓，最能顯示此區曾經歷劇烈地殼變動。",
    steps: ["沉積地層原本大致水平堆積。", "甲褶皺把多層岩層一起彎曲，代表曾受到強烈構造擠壓。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "褶皺需由強烈擠壓使整套岩層彎曲，最能指出劇烈地殼運動。" },
      B: { verdict: "incorrect", reason: "岩漿沿裂隙侵入可形成岩脈，但不一定表示整區地殼受到最劇烈變形。" },
      C: { verdict: "incorrect", reason: "n、o 的成岩作用主要反映沉積物變成岩石，不是劇烈構造變動。" },
      D: { verdict: "incorrect", reason: "p、q 的形成也屬地層成岩過程，證據不如褶皺直接。" }
    },
    takeaway: "原本平坦的沉積層若大幅彎曲，表示曾受強烈擠壓造山。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-94-62": {
    encouragement: "直接把 130～200 毫米對照分級門檻，就能精準命名。",
    keyIdea: "24 小時雨量達 130 毫米是豪雨，達 200 毫米才是大豪雨，因此 130～未滿 200 為豪雨但未及大豪雨。",
    steps: ["先看下限 130 毫米，已達豪雨標準。", "再看上限未達 200 毫米，因此尚未進入大豪雨標準。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "超大豪雨需達 350 毫米，遠高於題目範圍。" },
      B: { verdict: "correct", reason: "130～未滿 200 毫米正是豪雨、但未達大豪雨的範圍。" },
      C: { verdict: "incorrect", reason: "大豪雨需至少 200 毫米，題目統計範圍尚未達到。" },
      D: { verdict: "incorrect", reason: "雨量已達 130 毫米豪雨門檻，不只能稱為大雨。" }
    },
    takeaway: "雨量分級要用門檻區間判讀：達下限、未達下一級。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-19": {
    encouragement: "火山島由岩漿噴出、冷卻堆成，岩石分類自然是火成岩。",
    keyIdea: "夏威夷火山島由熱點岩漿反覆噴發並凝固形成，主要岩石是玄武岩質火成岩。",
    steps: ["熱點讓地函岩漿上湧到海底或地表。", "岩漿冷卻凝固成玄武岩，長期堆積形成火山島。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "島嶼由岩漿噴發、冷卻形成，主要是玄武岩等火成岩。" },
      B: { verdict: "incorrect", reason: "雖可有沉積物覆蓋，島體主體不是沉積岩。" },
      C: { verdict: "incorrect", reason: "島嶼形成主因不是原岩受高溫高壓變質。" },
      D: { verdict: "incorrect", reason: "題文已說由岩漿凝固形成，資料足以判定為火成岩。" }
    },
    takeaway: "火山噴發形成的島嶼，主體通常由火成岩構成。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-20": {
    encouragement: "比較地球構造體積時，越深、越厚、包圍範圍越大的層通常體積越大。",
    keyIdea: "地函從地殼下延伸到約 2900 公里深，厚度與全球範圍都遠大於地殼和板塊。",
    steps: ["夏威夷島與鏈狀島嶼只是地表很小區域，先排除。", "地函包圍全球且厚約 2900 公里，體積大於地殼與單一太平洋板塊。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "夏威夷群島只占地表極小部分，體積遠小於地球內部圈層。" },
      B: { verdict: "incorrect", reason: "鏈狀火山島嶼雖延伸很長，總體積仍遠小於地函。" },
      C: { verdict: "incorrect", reason: "地殼很薄，全球地殼體積也比厚達數千公里的地函小。" },
      D: { verdict: "incorrect", reason: "太平洋板塊只是岩石圈的一部分，厚度與體積都不及整個地函。" },
      E: { verdict: "correct", reason: "地函範圍遍及全球、厚度約 2900 公里，是選項中體積最大的。" }
    },
    takeaway: "地函是地球體積最大的主要固體圈層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-21": {
    encouragement: "夏威夷熱點火山最特別的地方，就是它在板塊中央，而不是三種板塊交界。",
    keyIdea: "夏威夷熱點位於太平洋板塊內部，岩漿由較深處上湧，並不位於板塊邊界。",
    steps: ["夏威夷群島離中洋脊、海溝與主要轉形邊界都很遠。", "鏈狀火山由太平洋板塊越過固定熱點形成，所以熱點在板塊內部。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "夏威夷不位於中洋脊等張裂性板塊交界。" },
      B: { verdict: "incorrect", reason: "附近沒有海溝或隱沒帶，並非聚合性邊界。" },
      C: { verdict: "incorrect", reason: "夏威夷火山鏈不是由兩板塊水平錯動的邊界形成。" },
      D: { verdict: "correct", reason: "夏威夷熱點位於太平洋板塊內部，不在板塊交界處。" }
    },
    takeaway: "熱點火山可出現在板塊內部，並記錄板塊移動方向。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-26": {
    encouragement: "臺北雨量的兩個明顯高峰，一個在初夏梅雨季，一個在夏秋颱風季。",
    keyIdea: "臺北月雨量初夏受梅雨鋒面影響上升，夏末秋初又因颱風降雨形成第二高峰。",
    steps: ["5～6 月梅雨鋒面常滯留臺灣附近，形成第一個雨量高峰。", "7～9 月颱風帶來強降雨，形成另一個高峰。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "冷鋒不是臺北年雨量第二個主要高峰的主因。" },
      B: { verdict: "correct", reason: "兩個高峰分別對應初夏梅雨與夏秋颱風。" },
      C: { verdict: "incorrect", reason: "春雨與梅雨時間接近，無法解釋相隔較遠的第二高峰。" },
      D: { verdict: "incorrect", reason: "颱風確實造成一個高峰，但另一個主要高峰是梅雨，不是冷鋒。" }
    },
    takeaway: "臺灣常見降雨季節來源包括春雨、梅雨、颱風與冬季東北季風。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-45": {
    encouragement: "海洋垂直分層很好記：上層混合、中層快速降溫、深層低溫穩定。",
    keyIdea: "甲是溫度近乎均勻的混合層；乙是溫度快速下降的斜溫層；丙是低溫深水層。",
    steps: ["表層受風浪攪拌，甲層上下溫度差小，稱混合層。", "中層乙溫度下降最快；最深丙層溫度最低且變化較小。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "丙位於最深層，海水溫度最低。" },
      B: { verdict: "incorrect", reason: "乙的溫度垂直變化大，應稱斜溫層，不是混合層。" },
      C: { verdict: "incorrect", reason: "溫度變化最大的斜溫層是乙，不是深層丙。" },
      D: { verdict: "correct", reason: "甲受風浪混合，上下溫度差小，屬混合層。" },
      E: { verdict: "incorrect", reason: "乙層的降溫率遠大於每公里 1°C，圖示數值不支持此說。" }
    },
    takeaway: "海洋三層：混合層、斜溫層、深水層。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-57": {
    encouragement: "溫度升高時，空氣能容納的水氣會增加，而且增加速度不是直線，而是越來越快。",
    keyIdea: "由飽和水氣壓曲線讀值，25°C 到 30°C 約由 32 百帕升到 42 百帕，增加約 10 百帕。",
    steps: ["在曲線上讀 25°C 的飽和水氣壓，約為 32 百帕。", "再讀 30°C 約為 42 百帕，相減約增加 10 百帕。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "溫度升高會使飽和水氣壓增加，不會減少 5 百帕。" },
      B: { verdict: "incorrect", reason: "曲線由 25°C 到 30°C 的增量約 10 百帕，不只 5 百帕。" },
      C: { verdict: "correct", reason: "約 42−32＝10 百帕，符合曲線讀值。" },
      D: { verdict: "incorrect", reason: "飽和水氣壓會隨溫度明顯上升，不會保持不變。" }
    },
    takeaway: "氣溫越高，飽和水氣壓越大，空氣可容納的水氣也越多。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-60": {
    encouragement: "比較穩定度要看地表和高空的溫差：地表變暖、高空不變，對流更容易發展。",
    keyIdea: "地表與低層升溫 2°C，但對流層頂溫度不變，使垂直溫差增大，大氣穩定度下降。",
    steps: ["未來地表大氣變暖，而對流層頂溫度維持原值。", "上下溫差變大，暖空氣更容易上升，垂直對流增強，所以穩定度下降。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地表相對高空更暖會增加浮力，不會讓大氣更穩定。" },
      B: { verdict: "incorrect", reason: "上下溫差已改變，穩定度不會保持不變。" },
      C: { verdict: "correct", reason: "低層增暖、高層不變使溫度遞減更陡，對流較易發生，穩定度下降。" },
      D: { verdict: "incorrect", reason: "題目已提供地表與對流層頂溫度變化，足以判斷穩定度趨勢。" }
    },
    takeaway: "低層變暖而高層不變，會加大垂直溫差並降低大氣穩定度。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-95-64": {
    encouragement: "判斷矽酸鹽先看化學成分；方解石含碳酸根，不是矽氧四面體礦物。",
    keyIdea: "方解石主要成分為碳酸鈣 CaCO₃，屬碳酸鹽礦物；其餘選項都是矽酸鹽礦物。",
    steps: ["石英、長石、雲母、橄欖石的結構都含矽與氧。", "方解石化學式為 CaCO₃，核心陰離子是碳酸根，因此不屬矽酸鹽。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "石英成分為 SiO₂，屬矽酸鹽類的架狀結構礦物。" },
      B: { verdict: "incorrect", reason: "長石由矽氧、鋁氧四面體構成，屬矽酸鹽礦物。" },
      C: { verdict: "incorrect", reason: "雲母具有片狀矽酸鹽結構。" },
      D: { verdict: "incorrect", reason: "橄欖石由獨立矽氧四面體與鎂、鐵組成，屬矽酸鹽。" },
      E: { verdict: "correct", reason: "方解石是碳酸鈣，屬碳酸鹽礦物，不是矽酸鹽。" }
    },
    takeaway: "方解石 CaCO₃ 是碳酸鹽；石英、長石、雲母、橄欖石都是矽酸鹽。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-40": {
    encouragement: "大氣各層的升降溫規律可以用口訣記：降、升、降、升。",
    keyIdea: "對流層平均每公里降約 6.5°C；中氣層頂約在 90 公里，兩項符合圖示。",
    steps: ["由地面向上，溫度趨勢依序為對流層降、平流層升、中氣層降、熱氣層升。", "圖中中氣層頂約 90 公里，對流層平均遞減率約 −6.5°C／公里，所以 D、E 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "平流層因臭氧吸收紫外線，溫度大致隨高度上升。" },
      B: { verdict: "incorrect", reason: "圖中熱氣層可出現更高的動能溫度，不能說地表溫度最高。" },
      C: { verdict: "incorrect", reason: "熱氣層吸收高能太陽輻射，溫度隨高度增加，不是遞減。" },
      D: { verdict: "correct", reason: "中氣層頂約位於 80～90 公里，與圖中的約 90 公里相符。" },
      E: { verdict: "correct", reason: "對流層環境氣溫平均每上升 1 公里約下降 6.5°C。" }
    },
    takeaway: "大氣溫度由低到高的趨勢：對流層降、平流層升、中氣層降、熱氣層升。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-96-56": {
    encouragement: "把大氣頂端能量乘上穿透到地表的比例，就能得到地表接收功率。",
    keyIdea: "依題組全球能量收支，約一半入射太陽輻射到達並被地表接收；350 W/m² 的一半約 175 W/m²。",
    steps: ["題組指出吸收、反射與散射比例採全球年平均，地表約得到入射能量的一半。", "350×0.5＝175 W/m²，因此選 B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "50 W/m²只占入射量約七分之一，低於題組所給到達地表比例。" },
      B: { verdict: "correct", reason: "大氣頂端 350 W/m² 約有一半到達地表，計算得 175 W/m²。" },
      C: { verdict: "incorrect", reason: "1380 W/m²高於大氣頂端全年平均 350 W/m²，不符合能量守恆。" },
      D: { verdict: "incorrect", reason: "350 W/m²假設全部穿透大氣，忽略了吸收、反射與散射。" }
    },
    takeaway: "地表接收量＝大氣頂入射量×穿透到地表的比例。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-32": {
    encouragement: "逐一在剖面上找證據：有地層就有沉積、有切面就有侵蝕、有岩脈就有侵入；沒畫出的才是答案。",
    keyIdea: "剖面顯示沉積、侵蝕、傾斜與火成岩侵入，但沒有上盤相對下滑的正斷層。",
    steps: ["多層地層代表沉積，截切面代表侵蝕，丁、庚代表火成岩侵入。", "地層傾斜也清楚可見，唯一沒有顯示的是正斷層。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中多層沉積岩本身就證明曾有沉積作用。" },
      B: { verdict: "incorrect", reason: "不整合或被削平的界面顯示曾發生侵蝕。" },
      C: { verdict: "correct", reason: "圖中沒有呈現上盤相對下滑的正斷層構造。" },
      D: { verdict: "incorrect", reason: "原本近水平的沉積層已傾斜，圖中有地層傾斜證據。" },
      E: { verdict: "incorrect", reason: "丁層與庚層明確是侵入火成岩，顯示火成岩侵入。" }
    },
    takeaway: "地質剖面要用『看得到的構造證據』逐項排除。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-34": {
    encouragement: "北半球颱風逆時鐘旋轉：眼的西側吹北風、東側吹南風，中心風弱。",
    keyIdea: "甲在颱風眼西側，風由北往南；乙是風眼近乎無風；丙在東側，風由南往北。",
    steps: ["北半球低壓、颱風的近地面風大致逆時鐘旋入。", "由西到東的甲、乙、丙依序位於眼西側、風眼、眼東側，因此為北風、近無風、南風。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙位在颱風眼，不應判為明顯西風；甲、丙方向也不符逆時鐘環流。" },
      B: { verdict: "correct", reason: "眼西側甲吹北風、風眼乙近乎無風、眼東側丙吹南風。" },
      C: { verdict: "incorrect", reason: "甲、丙若為東西風，不符合兩點位於颱風中心東西兩側的環流方向。" },
      D: { verdict: "incorrect", reason: "乙在風眼內不應吹南風。" },
      E: { verdict: "incorrect", reason: "把颱風眼東西兩側的南北風向完全顛倒。" }
    },
    takeaway: "北半球颱風逆時鐘：中心西側多北風，東側多南風。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-97-68": {
    encouragement: "先比較層級：星座是視覺分區、星團是銀河系內群體、星系才是最大的獨立系統。",
    keyIdea: "仙女座大星系不屬銀河系且尺度最大；天琴座肉眼恆星都是銀河系內的恆星。",
    steps: ["M31 是銀河系外的另一個大型星系，尺度遠超星團與星座中個別恆星。", "肉眼能分辨的天琴座亮星都位於銀河系內，遙遠河外星系不會以單顆恆星被肉眼看見。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "M31 是銀河系外的獨立星系，不屬於銀河系。" },
      B: { verdict: "correct", reason: "M31 不屬銀河系，且完整星系的尺度大於昴宿星團與星座內的恆星群。" },
      C: { verdict: "incorrect", reason: "昴宿星團屬銀河系，但它只是星團，不是三者中最大的系統。" },
      D: { verdict: "incorrect", reason: "昴宿星團確實屬於銀河系，且也不是最大。" },
      E: { verdict: "correct", reason: "天琴座中肉眼可見的單顆恆星都位於我們銀河系內。" },
      F: { verdict: "incorrect", reason: "其他星系的個別恆星太遙遠，無法以肉眼作為天琴座的亮星看見。" }
    },
    takeaway: "尺度概念：恆星＜星團＜星系；星座只是從地球看出的天空區域。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-98-11": {
    encouragement: "片麻岩的礦物常排列成明暗相間的條帶，是高溫高壓變質留下的線索。",
    keyIdea: "五種岩石中，片麻岩具有明顯定向排列與片麻狀構造，屬變質岩。",
    steps: ["先找礦物有方向性排列或條帶的岩石。", "片麻岩由原岩在高溫高壓下重結晶，常形成明暗相間條帶。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "玄武岩由熔岩快速冷卻形成，屬火成岩。" },
      B: { verdict: "correct", reason: "片麻岩具有變質作用造成的片麻狀條帶，是變質岩。" },
      C: { verdict: "incorrect", reason: "礫岩由圓礫堆積、膠結形成，屬沉積岩。" },
      D: { verdict: "incorrect", reason: "花岡岩由地下岩漿緩慢冷卻形成，屬火成岩。" },
      E: { verdict: "incorrect", reason: "砂岩由砂粒壓密膠結形成，屬沉積岩。" }
    },
    takeaway: "片麻岩是變質岩；玄武岩、花岡岩是火成岩；礫岩、砂岩是沉積岩。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-98-12": {
    encouragement: "把五種岩石逐一分類後再數量，答案就很清楚。",
    keyIdea: "玄武岩、花岡岩是火成岩；礫岩、砂岩是沉積岩；片麻岩是變質岩，數量為 2、2、1。",
    steps: ["火成岩有玄武岩、花岡岩，共 2 種；沉積岩有礫岩、砂岩，共 2 種。", "變質岩只有片麻岩，共 1 種，因此選 E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中明明有玄武岩和花岡岩兩種火成岩，不是 0 種。" },
      B: { verdict: "incorrect", reason: "火成岩與沉積岩都各有 2 種，變質岩不是 3 種。" },
      C: { verdict: "incorrect", reason: "火成岩不只 1 種，變質岩也只有 1 種。" },
      D: { verdict: "incorrect", reason: "火成岩 2 種正確，但沉積岩應有 2 種、變質岩只有 1 種。" },
      E: { verdict: "correct", reason: "火成岩 2 種、沉積岩 2 種、變質岩 1 種，分類完全正確。" },
      F: { verdict: "incorrect", reason: "火成岩沒有 3 種，沉積岩也不只 1 種。" },
      G: { verdict: "incorrect", reason: "片麻岩是變質岩，因此變質岩不可能為 0 種。" }
    },
    takeaway: "依成因分類後再計數，比只看外觀更可靠。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  }
});
