(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-41": {
    encouragement: "判斷電器是否非交流不可，只要問：它是不是需要持續變動的磁場？",
    keyIdea: "電磁爐與變壓器都靠電磁感應，需要隨時間變動的交流電；純電阻加熱或發光可用直流。",
    steps: [
      "電磁爐要讓線圈磁場持續改變，才能在鍋底感應出電流。",
      "變壓器也要靠變動磁通量，在副線圈感應電壓。",
      "交流電會不斷改變大小與方向，能提供所需的變動磁場。",
      "電鍋、傳統燈泡與電烤箱主要靠電阻熱效應，直流也能工作。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "電磁爐需交流電產生變動磁場，才能在鍋底持續感應電流並加熱。" },
      B: { verdict: "incorrect", reason: "電鍋主要以電阻發熱，合適電壓的直流也能產生熱，不一定非交流不可。" },
      C: { verdict: "incorrect", reason: "傳統燈絲燈泡靠電流熱效應發光，直流電也能使燈絲發熱。" },
      D: { verdict: "incorrect", reason: "電烤箱的電熱絲可用直流產熱，沒有必須使用交流的物理需求。" },
      E: { verdict: "correct", reason: "變壓器靠變動磁通量在副線圈產生感應電壓，穩定直流無法持續變壓。" }
    },
    takeaway: "需要持續電磁感應的電器才非交流不可；單純電阻發熱不一定。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-47": {
    encouragement: "抽蓄發電就像大型充電電池：離峰用電把水抬高，需要電時再讓水落下發電。",
    keyIdea: "抽水時電能轉為水的重力位能；放水時位能轉為動能，再由發電機轉成電能。",
    steps: [
      "離峰多餘電力帶動馬達與水泵，把下池的水抽到上池。",
      "水升高後儲存重力位能。",
      "用電高峰時讓水向下流，重力位能先轉成水流動能。",
      "水流推動渦輪與發電機，最後轉回電能。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "抽水儲能與放水發電的完整順序正是電能→水的位能→水的動能→電能。" },
      B: { verdict: "incorrect", reason: "抽水的目的是先增加水的位能，不是先把電能儲成水的動能。" },
      C: { verdict: "incorrect", reason: "抽蓄過程不涉及燃料化學能，起始能源是離峰電力。" },
      D: { verdict: "incorrect", reason: "電能不需先變成化學能，水泵直接以機械作用把水抬高。" },
      E: { verdict: "incorrect", reason: "抽蓄系統的儲能起點是電能，不是化學能。" }
    },
    takeaway: "抽蓄水力是用高度存電：低谷抽水存位能，高峰放水再發電。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-64": {
    encouragement: "選項中四個名字都是電磁波，只有宇宙射線主要是高速粒子，所以不一定以光速前進。",
    keyIdea: "可見光、紫外線、紅外線、無線電波都是真空中以光速傳播的電磁波；宇宙射線多為有質量粒子。",
    steps: [
      "電磁波在真空中的傳播速率都是光速 c。",
      "可見光、紫外線、紅外線和無線電波只是波長不同，本質都屬電磁波。",
      "宇宙射線主要由高速質子、原子核等帶電粒子組成。",
      "這些粒子有靜止質量，雖可非常接近光速，卻不能達到光速。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "可見光是電磁波，在真空中以光速傳播。" },
      B: { verdict: "correct", reason: "宇宙射線主要是有質量的高速粒子，速率可接近但不等於光速。" },
      C: { verdict: "incorrect", reason: "紫外線屬電磁波，在真空中以光速傳播。" },
      D: { verdict: "incorrect", reason: "紅外線也是電磁波，不因人眼看不見就改變真空傳播速率。" },
      E: { verdict: "incorrect", reason: "無線電波波長較長，但仍是電磁波，在真空中同樣以光速傳播。" }
    },
    takeaway: "電磁波都以光速走；宇宙射線名稱有「射線」，本質卻多是高速粒子。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-100-66": {
    encouragement: "地球與火星最大的保護差異在大氣層：地球濃密大氣會讓較多小隕石先摩擦、碎裂、燒蝕。",
    keyIdea: "地球大氣比火星濃密，隕石穿越時損失較多質量與能量，因此較不易形成大量大坑。",
    steps: [
      "隕石進入行星大氣後，會高速壓縮空氣並受到阻力。",
      "地球大氣比火星濃密，隕石受到的阻力與加熱更明顯。",
      "許多較小隕石會燒蝕、破碎，甚至未到地面就消失。",
      "到達地面的質量與動能較小，能造成的隕石坑也較小或較少。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不能說地球表面各處都比火星堅硬；岩性不同也不是最主要、最普遍的差異。" },
      B: { verdict: "correct", reason: "地球大氣較濃密，使隕石穿越時阻力、加熱與燒蝕更強，落地質量較小。" },
      C: { verdict: "incorrect", reason: "重力較大會使隕石加速，不代表通過大氣時間較久；核心差異是大氣密度。" },
      D: { verdict: "incorrect", reason: "一般隕石多近似電中性，地球磁場不是使其加速落下與燒蝕的主要原因。" },
      E: { verdict: "incorrect", reason: "電離層不會普遍把隕石加速落下；造成顯著燒蝕的是整體大氣阻力。" }
    },
    takeaway: "行星大氣像隕石的防護罩；越濃密，越能讓隕石在落地前損失質量與能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-11": {
    encouragement: "先由 5 秒內速度變化求加速度，再由 ma 找合力；推進力扣掉合力就是阻力。",
    keyIdea: "飛機加速度 a＝Δv/Δt；水平方向淨力＝推進力−阻力＝ma。",
    steps: [
      "飛機由靜止在 5 s 後達 10 m/s，所以 a＝10/5＝2 m/s²。",
      "質量為 10⁴ kg，因此合力 ma＝10⁴×2＝2×10⁴ N。",
      "推進力向前為 4×10⁴ N，阻力向後。",
      "由 4×10⁴−阻力＝2×10⁴，得到阻力為 2×10⁴ N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4×10⁵ N 比推進力還大十倍，會使飛機向後加速，不符題意。" },
      B: { verdict: "incorrect", reason: "2×10⁵ N 大於推進力，淨力方向會向後，不可能使飛機向前加速。" },
      C: { verdict: "incorrect", reason: "若阻力等於 4×10⁴ N，合力為零，飛機不會由靜止加速到 10 m/s。" },
      D: { verdict: "correct", reason: "阻力＝推進力−ma＝4×10⁴−2×10⁴＝2×10⁴ N。" },
      E: { verdict: "incorrect", reason: "4×10³ N 會使合力為 3.6×10⁴ N，對應加速度 3.6 m/s²，不符速度資料。" }
    },
    takeaway: "有阻力時別直接用推進力算 ma；真正的 ma 是所有力相加後的合力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-16": {
    encouragement: "測量點抬高後，血液柱壓力變小；再用血液和水銀密度比換算高度即可。",
    keyIdea: "測量點比心臟高 41 cm 時，血壓降低相當於 41 cm 血液柱，換成水銀柱約 30 mm。",
    steps: [
      "測量點升高 41 cm，從心臟到測量點的血液柱造成壓力下降。",
      "同一壓力差滿足 ρ血g h血＝ρ汞g h汞。",
      "h汞＝(1.0/13.6)×41 cm，約為 3.0 cm。",
      "3.0 cm＝30 mm，因此讀值降低約 30 mmHg。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "測量點升高會使靜水壓降低，不是升高；且 41 cm 血液柱也不等於 41 mmHg。" },
      B: { verdict: "incorrect", reason: "30 mm 的量值接近，但方向錯誤；手臂抬高後讀值應下降。" },
      C: { verdict: "incorrect", reason: "測量點與心臟有高度差時，血液柱會造成額外靜水壓差，讀值會改變。" },
      D: { verdict: "correct", reason: "41 cm 血液柱換算約為 3.0 cm＝30 mm 水銀柱，而且高度上升使讀值降低。" },
      E: { verdict: "incorrect", reason: "下降方向正確，但忽略血液與水銀密度不同，不能把 41 cm 直接當 41 mmHg。" }
    },
    takeaway: "血壓測量點要與心臟同高；抬高讀值偏低，放低讀值偏高。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-17": {
    encouragement: "樹葉間的小縫就像針孔相機，影像會上下、左右都顛倒，所以西北缺角會翻到東南。",
    keyIdea: "針孔成像形成倒立實像，方位會旋轉 180°。",
    steps: [
      "樹葉縫隙很小，可視為許多針孔。",
      "陽光沿直線穿過小孔，在地面形成太陽的倒立實像。",
      "倒立實像不只上下相反，也左右相反，相當於方位轉 180°。",
      "太陽西北方缺角，地面光影就會在東南方缺角。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "東北只改變了南北方向，沒有同時完成針孔像的左右顛倒。" },
      B: { verdict: "correct", reason: "西北方經上下、左右同時顛倒後成為東南方。" },
      C: { verdict: "incorrect", reason: "若缺角仍在西北，就不是針孔形成的倒立實像。" },
      D: { verdict: "incorrect", reason: "西南只改變東西方向，漏掉上下方向也會顛倒。" },
      E: { verdict: "incorrect", reason: "針孔像會保留日偏食輪廓，因此仍可看見缺角。" }
    },
    takeaway: "針孔成像方位轉 180°：北變南、東變西。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-20": {
    encouragement: "先看熱水降到 0°C 能放出多少熱，再判斷這些熱夠融化多少冰；不需要猜最後溫度。",
    keyIdea: "熱水冷卻放熱 100×1×100＝10000 cal，可融化 10000/80＝125 g 冰。",
    steps: [
      "100 g、100°C 的水降到 0°C，放熱 Q＝mcΔT＝100×1×100＝10000 cal。",
      "冰原本就是 0°C，不需先升溫，吸熱只用於融化。",
      "可融冰質量＝Q/熔化熱＝10000/80＝125 g。",
      "原有 150 g 冰，所以剩下 150−125＝25 g。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "150 g 表示完全沒有冰融化，但熱水冷卻一定會放熱使部分冰融化。" },
      B: { verdict: "incorrect", reason: "若剩 100 g，只融 50 g，僅吸收 4000 cal，未用完熱水可放出的 10000 cal。" },
      C: { verdict: "correct", reason: "10000 cal 可融化 125 g 冰，因此 150−125＝25 g 未融。" },
      D: { verdict: "incorrect", reason: "若只剩 10 g，就融化 140 g，需要 11200 cal，超過熱水能提供的熱。" },
      E: { verdict: "incorrect", reason: "融光 150 g 冰需 12000 cal，大於熱水冷卻到 0°C 的 10000 cal。" }
    },
    takeaway: "有冰剩下時，平衡溫度就是 0°C；先用放熱量除以熔化熱求融冰質量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-22": {
    encouragement: "拍手和回音同步，表示一次拍手間隔正好等於聲音往返峭壁的時間。",
    keyIdea: "20 次拍手用 6 秒，週期約 0.3 秒；回音路程是距離的兩倍。",
    steps: [
      "拍手頻率約為 20/6 次每秒，所以相鄰拍手間隔為 6/20＝0.3 s。",
      "節奏與回音同步，表示聲音往返峭壁約用 0.3 s。",
      "聲音往返總路程＝340×0.3＝102 m。",
      "單程距離為一半，約 51 m，最接近 50 m。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "340 m 是聲音走 1 秒的單程距離，沒有使用 0.3 s 拍手間隔和往返條件。" },
      B: { verdict: "incorrect", reason: "120 m 高於由聲速乘往返時間再除以 2 的約 51 m。" },
      C: { verdict: "incorrect", reason: "約 102 m 是聲音往返總路程，峭壁單程距離還要除以 2。" },
      D: { verdict: "correct", reason: "距離＝340×(6/20)÷2≈51 m，最接近 50 m。" },
      E: { verdict: "incorrect", reason: "20 m 對應往返時間約 0.12 s，無法與 0.3 s 的拍手節奏同步。" }
    },
    takeaway: "回音測距一定記得除以 2，因為聲音走了去、回兩段路。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-25": {
    encouragement: "核反應像做原子帳本：質量數與原子序在反應前後都要平衡，中子數再用相減即可。",
    keyIdea: "氪-86與鉛-208融合放出中子得 X-293；每次 α 衰變使質量數減4、原子序減2。",
    steps: [
      "86＋208＝294，放出一個中子後，X 的質量數為 293；原子序 36＋82＝118。",
      "X 發生 α 衰變後，Y 的質量數 293−4＝289、原子序 118−2＝116。",
      "Y 再 α 衰變，Z 的質量數為 285、原子序為 114。",
      "Z 中子數＝285−114＝171；Y 中子數＝289−116＝173。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確反應式；質量數 86＋208＝1＋293，原子序 36＋82＝118。" },
      B: { verdict: "incorrect", reason: "這是正確反應式；X-293 放出 α 粒子後成為原子序 116、質量數 289 的 Y。" },
      C: { verdict: "incorrect", reason: "這是正確反應式；Y-289 再放出 α 粒子後成為 Z-285，原子序 114。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；Z 的中子數為 285−114＝171。" },
      E: { verdict: "correct", reason: "這是題目要找的錯誤敘述；Y 的中子數應為 289−116＝173，不是 116。" }
    },
    takeaway: "核種中子數＝質量數−原子序；α 衰變則是質量數減4、原子序減2。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-37": {
    encouragement: "折射造成的視覺位置很好記：從空氣看水底會變淺；從水中看空氣裡的物體會顯得更高。",
    keyIdea: "跨水—空氣界面的折射使水下物體看起來較淺，也使水中觀察者看到的空中物體較高。",
    steps: [
      "人從空氣看水中青蛙，來自青蛙的光離開水時偏離法線。",
      "眼睛把折射光反向延伸，會把青蛙判在較靠近水面的地方，因此看起來較淺。",
      "青蛙從水中看空氣中的路燈，光進水時偏向法線。",
      "反向延伸後，路燈看起來比實際位置更高；無水時則沒有這個折射效果。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "塘中有水時會在水面折射，觀察到的高度與深度都會改變。" },
      B: { verdict: "correct", reason: "滿水時折射使水中青蛙看到的空中路燈顯得更高；無水時較低。" },
      C: { verdict: "incorrect", reason: "滿水時路燈的視高度應增加，不是降低。" },
      D: { verdict: "correct", reason: "人由空氣看水底，青蛙的視深度變淺；無水時才看到較真實的較深位置。" },
      E: { verdict: "incorrect", reason: "水中物體由空氣看會顯得較淺，選項把滿水與無水的深度關係顛倒。" }
    },
    takeaway: "空氣看水底：變淺；水中看空中：變高。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-53": {
    encouragement: "鯉魚躍出就是鉛直上拋；最高點速度為零，利用 20 公分高度可快速估算總時間。",
    keyIdea: "h＝v₀²/2g，或上升時間 t＝√(2h/g)；上下對稱後總時間約0.4秒。",
    steps: [
      "最大高度 h＝0.20 m，取 g 約 10 m/s²。",
      "上升時間 t上＝√(2h/g)＝√(0.04)＝0.20 s。",
      "忽略阻力且回到同一水面高度，下落時間也約 0.20 s。",
      "總時間約 0.40 s；最高點瞬間速率為零。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "上升與下降各約 0.20 s，因此離水到回水總共約 0.40 s。" },
      B: { verdict: "incorrect", reason: "近地面 20 cm 高度差太小，鯉魚所受重力可視為固定，不會越高越大。" },
      C: { verdict: "incorrect", reason: "上升越高時速率越小，所以動能越小，不是越大。" },
      D: { verdict: "incorrect", reason: "最高點鉛直速度降為零，速率最小而非最大。" },
      E: { verdict: "correct", reason: "鯉魚在最高點由上升轉為下降，瞬間速度與速率皆為零。" }
    },
    takeaway: "鉛直上拋最高點：速度零、加速度仍向下；同高度起落時間對稱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-62": {
    encouragement: "衛星沒有向前推力也不會直飛出去，因為地球重力一直把速度方向拉向地心。",
    keyIdea: "等速圓周運動的加速度與合力都指向圓心，衛星所需向心力由萬有引力提供。",
    steps: [
      "衛星速率不變，但速度方向持續改變，因此仍有加速度。",
      "圓周運動的向心加速度沿半徑指向圓心，也就是地心。",
      "地球對衛星的萬有引力也指向地心。",
      "因此萬有引力正好提供衛星繞行所需的向心力。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "地球對衛星的萬有引力指向地心，正好擔任圓周運動的向心力。" },
      B: { verdict: "incorrect", reason: "向心加速度與切線速度垂直，不沿切線同向。" },
      C: { verdict: "incorrect", reason: "向心加速度指向圓心，不沿軌道切線反向；反向切線加速度會使速率降低。" },
      D: { verdict: "correct", reason: "衛星加速度沿衛星與地心連線，方向朝向地心。" },
      E: { verdict: "incorrect", reason: "加速度若背離地心，衛星軌跡會向外彎，無法維持繞地圓周運動。" }
    },
    takeaway: "圓周運動：速度沿切線，向心加速度與向心力指向圓心。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-1": {
    encouragement: "只要把50公里／小時換成公尺／秒，再乘0.5秒，就能看出LED多爭取了多少煞車距離。",
    keyIdea: "50 km/h約為13.9 m/s，半秒前進距離約7 m。",
    steps: [
      "把 50 km/h 除以 3.6，得到約 13.9 m/s。",
      "汽車等速前進，距離＝速率×時間。",
      "在 0.5 s 內前進 13.9×0.5＝6.95 m。",
      "最接近 7 m。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3 m 對應速率只有約 6 m/s，低於題目的 50 km/h。" },
      B: { verdict: "correct", reason: "50÷3.6×0.5≈6.94 m，約為 7 m。" },
      C: { verdict: "incorrect", reason: "12 m 高估半秒行進距離，相當於約 86 km/h 的車速。" },
      D: { verdict: "incorrect", reason: "25 m 是把 50 km/h 的數字直接乘 0.5，沒有先換成 m/s。" }
    },
    takeaway: "km/h 換 m/s 要除以3.6；半秒看似很短，時速50仍會走近7公尺。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-2": {
    encouragement: "潮汐不是地球自己拉海水就能解釋，真正造成海水隆起差異的是月球與太陽的引力。",
    keyIdea: "地球潮汐主要受到月球引力，也受太陽引力影響。",
    steps: [
      "太陽內部核融合把少量質量轉成輻射能。",
      "太陽能電池可用光電效應直接輸出直流電。",
      "使用日光、風等再生能源，運轉時通常不需燃燒化石燃料。",
      "潮汐的週期性起伏主要源自月球與太陽對地球各處海水的引力差。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；太陽輻射能來自內部核融合的質能轉換。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；日光發電運轉時不燃燒燃料，可降低額外二氧化碳排放。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；太陽能電池直接把光能轉成直流電能。" },
      D: { verdict: "correct", reason: "這是錯誤敘述；潮汐主要與月球、太陽引力有關，不是完全源自地球對海水的重力。" }
    },
    takeaway: "潮汐能源的天文來源主要是月球與太陽造成的引力差。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-3": {
    encouragement: "測不準不是儀器太差，而是量子世界本身的限制；一個量可以很準，代價是搭配的另一個量更不準。",
    keyIdea: "位置與動量的測不準乘積有下限，但原理不禁止只把其中一個量測得非常精確。",
    steps: [
      "測不準原理限制的是一對共軛物理量的「同時」精確程度。",
      "若把位置測得很精確，動量的不確定度就必須增大，反之亦然。",
      "因此單獨追求其中一個量的精確度，不會被同一個固定下限單獨卡住。",
      "此限制是量子態的基本性質，不是換更好的儀器就能完全消除。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "位置×動量的單位是作用量 J·s，不是功率單位瓦特 W。" },
      B: { verdict: "correct", reason: "原理限制兩者同時精確；可讓位置非常精確，但此時動量不確定度會相應增加。" },
      C: { verdict: "incorrect", reason: "測不準是量子物理的根本限制，不只是實驗儀器解析度不足。" },
      D: { verdict: "incorrect", reason: "光子也遵守量子力學與測不準關係，不會因以光速運動就例外。" }
    },
    takeaway: "測不準限制的是成對物理量的同時精確度，不等於所有單項測量都不能很準。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-7": {
    encouragement: "家庭三線供電可想成中性線在中間，另外兩條交流火線分居兩側；電壓方向每半週都會互換。",
    keyIdea: "中性線接地近似0 V，兩火線相對中性線皆為110 V交流，瞬時值會正負交替。",
    steps: [
      "中性線接地，電位近似地面電位。",
      "另外兩條輸電線各自與中性線形成 110 V 交流電源。",
      "交流電壓方向隨時間改變，所以相對中性線的瞬時電壓有時為正、有時為負。",
      "兩火線彼此相位相反，兩線間可提供約 220 V。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "任一火線相對中性線為110 V交流，瞬時極性會交替，因此可有正、負110 V方向。" },
      B: { verdict: "incorrect", reason: "交流電壓會正負變化，不能用中性線電壓「永遠低於」火線概括。" },
      C: { verdict: "incorrect", reason: "中性線接地後相對地球近似0 V，不是三條線都相對地球110 V。" },
      D: { verdict: "incorrect", reason: "火線與中性線約110 V，但兩條火線之間約220 V，不是任兩條都110 V。" }
    },
    takeaway: "三線式家庭供電：火線對中性線110 V，兩火線彼此約220 V。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-56": {
    encouragement: "光雖然沒有靜止質量，卻有動量；完全反射時動量方向翻轉，所以壓力效果是吸收的兩倍。",
    keyIdea: "入射光功率 P＝1500 W；完全反射的力 F＝2P/c。",
    steps: [
      "面積 1.0 m²，每平方公尺每秒入射能量 1.5 kJ，所以總功率 P＝1500 J/s。",
      "由 E＝pc，光每秒帶來的動量為 P/c。",
      "完全反射時光子動量由向前變向後，動量改變量是原來的2倍。",
      "F＝2P/c＝3000/(3×10⁸)＝1.0×10⁻⁵ N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.5×10⁻⁵ N 是只算光被吸收的 P/c，漏掉完全反射使動量改變加倍。" },
      B: { verdict: "correct", reason: "完全反射時 F＝2P/c＝2×1500/(3×10⁸)＝1.0×10⁻⁵ N。" },
      C: { verdict: "incorrect", reason: "0.5×10⁻² N 比正確結果大約500倍，未正確使用光速的數量級。" },
      D: { verdict: "incorrect", reason: "1.0×10⁻² N 比 2P/c 的結果大1000倍，明顯高估光壓。" }
    },
    takeaway: "光被吸收：F＝P/c；光完全反射：F＝2P/c。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-1": {
    encouragement: "互推時兩人受到的力一定等大反向；用任一人的動量改變除以0.01秒，都會得到同一答案。",
    keyIdea: "平均力＝動量改變量÷作用時間；兩人的Δp量值皆為5 kg·m/s。",
    steps: [
      "甲由靜止變為0.1 m/s，動量改變量＝50×0.1＝5 kg·m/s。",
      "乙由靜止變為反向0.2 m/s，量值＝25×0.2＝5 kg·m/s。",
      "作用時間為0.01 s，所以平均力＝5/0.01＝500 N。",
      "依牛頓第三定律，兩人受力方向相反。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲、乙的Δp量值都為5 kg·m/s，除以0.01 s皆得500 N，方向相反。" },
      B: { verdict: "incorrect", reason: "250 N只會在衝量為2.5 N·s時成立，和兩人的動量改變5 N·s不符。" },
      C: { verdict: "incorrect", reason: "互推力是一對作用反作用力，量值必相同，不能甲500 N、乙250 N。" },
      D: { verdict: "incorrect", reason: "同樣違反牛頓第三定律；兩人平均推力不會因質量不同而有不同量值。" }
    },
    takeaway: "作用反作用力等大反向；質量不同造成的是加速度與速度變化不同。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-97-2": {
    encouragement: "三杯熱水條件相同，差別只在放入的材料比熱；比熱越大，金屬升溫時吸熱越多，水就降溫越多。",
    keyIdea: "相同質量與初溫下，比熱較大的物體從熱水吸收較多熱，使平衡水溫較低。",
    steps: [
      "三杯水的質量、初溫相同，三塊材料的質量與初溫也相同。",
      "材料從室溫升到平衡溫度，需要吸收熱量 mcΔT。",
      "碳比熱最大，從甲杯吸熱最多，使甲杯水降溫最多。",
      "鉛比熱最小，使丙杯水降溫最少，所以水溫甲＜乙＜丙。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碳比熱最大會從水吸收更多熱，甲杯水溫應最低，不是最高。" },
      B: { verdict: "correct", reason: "比熱碳＞銅＞鉛，材料吸熱能力依序下降，因此平衡水溫甲＜乙＜丙。" },
      C: { verdict: "incorrect", reason: "三種材料比熱不同，吸熱量不同，平衡水溫不會完全相同。" },
      D: { verdict: "incorrect", reason: "銅與鉛比熱不同，所以乙、丙平衡水溫不會相等。" },
      E: { verdict: "incorrect", reason: "碳與銅比熱不同，甲、乙平衡水溫不會相同，而且甲應較低。" }
    },
    takeaway: "相同質量、相同升溫下，比熱越大吸熱越多，熱水就被冷卻得越明顯。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
