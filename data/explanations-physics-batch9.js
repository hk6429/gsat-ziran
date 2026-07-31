(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-87-44": {
    encouragement: "做功只看力在位移方向上的分量；提起箱子有做功，水平提著走則沒有。",
    keyIdea: "功W＝Fs cosθ；抬高箱子的功為mgh，水平搬運時支持力與位移垂直。",
    steps: [
      "等速提起時，人向上的力等於箱重mg。",
      "抬高0.5 m所做的功為mgh＝2×9.8×0.5＝9.8 J。",
      "水平行走時，人對箱子的力向上、位移水平，夾角90°。",
      "水平段做功為零，所以總功為9.8 J。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水平段雖不作功，但把箱子由地面提高時已對箱子作正功。" },
      B: { verdict: "incorrect", reason: "提起箱子的功為2×9.8×0.5＝9.8 J，不是1 J。" },
      C: { verdict: "correct", reason: "垂直提升作功9.8 J，水平搬運作功0 J，合計9.8 J。" },
      D: { verdict: "incorrect", reason: "196 J是把水平10 m也錯當成沿施力方向的位移。" },
      E: { verdict: "incorrect", reason: "此值把垂直與水平距離都直接乘上重量，忽略水平段力與位移垂直。" }
    },
    takeaway: "提著重物水平走雖然會累，但對重物的力學功為零。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-46": {
    encouragement: "球不只停下來，還反向飛出；速度改變量要把前後方向一起算。",
    keyIdea: "衝量FΔt＝mΔv；反向運動時前後速度符號相反。",
    steps: [
      "設球被打出方向為正，初速度為−40 m/s，末速度為＋60 m/s。",
      "速度改變量Δv＝60−(−40)＝100 m/s。",
      "動量改變量mΔv＝0.15×100＝15 N·s。",
      "平均力F＝15÷0.02＝750 N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "15是動量改變量的數值，單位應為N·s，不是平均力。" },
      B: { verdict: "incorrect", reason: "此值沒有正確計入球反向後共100 m/s的速度改變。" },
      C: { verdict: "incorrect", reason: "150 N對應的衝量只有3 N·s，小於本題所需15 N·s。" },
      D: { verdict: "incorrect", reason: "375 N相當於漏算一半速度改變，反向前後速度應相加。" },
      E: { verdict: "correct", reason: "平均力＝0.15×(60＋40)÷0.02＝750 N。" }
    },
    takeaway: "反向碰撞的速度改變量要用末速度減帶負號的初速度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-47": {
    encouragement: "冰先融化，再由0°C升到40°C；把這兩段吸熱都算進去即可。",
    keyIdea: "熱水放熱等於冰的熔化熱加上融水升溫所吸收的熱。",
    steps: [
      "熱水由90°C降到40°C，放熱240×1×50＝12000 cal。",
      "每克0°C冰融化需80 cal。",
      "融成的水由0°C升到40°C，還需每克40 cal。",
      "每克冰共吸120 cal，所以冰量＝12000÷120＝100 g。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "50 g冰只吸收6000 cal，不足以讓240 g熱水降至40°C。" },
      B: { verdict: "correct", reason: "100 g冰融化並升至40°C共吸12000 cal，恰等於熱水放熱。" },
      C: { verdict: "incorrect", reason: "150 g冰需要18000 cal，超過熱水可放出的12000 cal。" },
      D: { verdict: "incorrect", reason: "200 g冰需要的熱量更大，最後不會達到題設40°C。" },
      E: { verdict: "incorrect", reason: "300 g冰的融化與升溫需36000 cal，遠大於熱水可提供的熱。" }
    },
    takeaway: "遇到冰的熱量題，要先算潛熱，再算融化後的水升溫。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-48": {
    encouragement: "近視眼把遠方影像聚焦在視網膜前方，需要先用凹透鏡把光線稍微發散。",
    keyIdea: "凹透鏡具有發散作用，可降低眼球系統的會聚能力，矯正近視。",
    steps: [
      "近視眼看遠物時，光線在到達視網膜前已先聚焦。",
      "表示眼球整體會聚能力太強，或眼軸太長。",
      "凹透鏡先讓入眼光線發散。",
      "眼球再將光線聚焦到較後方的視網膜上。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "凹透鏡能發散光線，降低整體會聚效果，使焦點後移到視網膜。" },
      B: { verdict: "incorrect", reason: "凸透鏡是會聚透鏡，不具有選項所說的發散作用。" },
      C: { verdict: "incorrect", reason: "凹透鏡適合矯正近視，但理由是發散光線，不是會聚。" },
      D: { verdict: "incorrect", reason: "凸透鏡會使焦點更提前，通常用於遠視矯正，不適合近視。" }
    },
    takeaway: "近視配凹透鏡發散；遠視配凸透鏡會聚。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-49": {
    encouragement: "同步衛星不是沒有重力，而是重力恰好把它拉成繞地球的圓周運動。",
    keyIdea: "地球引力提供同步衛星做等速率圓周運動所需的向心力。",
    steps: [
      "同步衛星仍在地球重力場中，受到地球吸引。",
      "它具有足夠的切向速度，不會直接掉向地面。",
      "地球引力持續改變衛星速度方向，充當向心力。",
      "其週期與地球自轉相同時，地面觀察者看來位置固定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "衛星即使很高仍受地球引力；沒有引力反而無法繞地球運行。" },
      B: { verdict: "incorrect", reason: "同步條件不需要太陽引力與地球引力相等，主要由地球引力控制軌道。" },
      C: { verdict: "incorrect", reason: "月球引力不是維持同步衛星圓軌道的主要向心力。" },
      D: { verdict: "correct", reason: "地球對衛星的萬有引力正好提供圓周運動所需的向心力。" }
    },
    takeaway: "軌道上的「失重」不是沒有重力，而是衛星與物體一起自由落體。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-50": {
    encouragement: "平面鏡的像在鏡後，距鏡面和物體一樣遠；相機要對焦到物體與像的總距離。",
    keyIdea: "平面鏡像距等於物距；人離鏡1.5 m，鏡像在鏡後1.5 m。",
    steps: [
      "人與相機都在鏡前約1.5 m。",
      "平面鏡成像在鏡後1.5 m。",
      "相機到鏡像的距離為1.5＋1.5＝3.0 m。",
      "因此鏡頭應對焦在3 m處。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1/3 m與平面鏡物距、像距關係無關，焦點不在這麼近的位置。" },
      B: { verdict: "incorrect", reason: "2/3 m小於人到鏡面的距離，不可能是鏡後虛像到相機的距離。" },
      C: { verdict: "incorrect", reason: "1.5 m只是相機到鏡面的距離，尚未加上鏡後1.5 m的像距。" },
      D: { verdict: "correct", reason: "相機到鏡面1.5 m，再到鏡後虛像1.5 m，合計3 m。" },
      E: { verdict: "incorrect", reason: "鏡像位置有限且可確定，不是在無窮遠。" }
    },
    takeaway: "拍平面鏡中的像，對焦距離是相機到鏡後虛像的距離。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-58": {
    encouragement: "金屬和木頭其實同溫；金屬只是更快把手上的熱帶走，所以感覺更冰。",
    keyIdea: "金屬熱傳導率較大，接觸時從手吸熱較快，因此冷感更強。",
    steps: [
      "手的溫度高於冬天的金屬與木材。",
      "熱量會由手流向器材。",
      "金屬導熱快，接觸處的熱能迅速傳到內部。",
      "手失熱速率較大，因此感覺金屬較冷。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "金屬導熱係數較大，能更快帶走手的熱量，所以摸起來更冰冷。" },
      B: { verdict: "incorrect", reason: "金屬導熱係數不是較小，而是通常遠大於木材。" },
      C: { verdict: "incorrect", reason: "冷感主要由接觸瞬間的熱傳速率決定，不是金屬比熱較大。" },
      D: { verdict: "incorrect", reason: "即使比熱不同，也不能直接解釋同溫金屬讓手迅速失熱的現象。" },
      E: { verdict: "incorrect", reason: "物體「含多少熱量」不是只看材質，且冷感主要關係到導熱快慢。" }
    },
    takeaway: "觸覺感受到的是熱流速率，不是直接量到物體溫度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-87-59": {
    encouragement: "水在4°C最密；更冷的水反而浮到上層，最後由表面開始結冰。",
    keyIdea: "水在4°C密度最大，低於4°C後密度減小；冰密度又小於水，所以浮在表面。",
    steps: [
      "湖面冷卻時，水溫降至4°C前密度增加而下沉。",
      "深層較暖的水上升，形成對流。",
      "低於4°C後，水越冷密度反而越小，停留在表層。",
      "表層先降到0°C結冰，冰因密度小而浮在水面。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水由較高溫降至4°C時密度會增加，不是一路越冷越小。" },
      B: { verdict: "incorrect", reason: "水低於4°C後密度反而減小，不能說越冷越大。" },
      C: { verdict: "incorrect", reason: "水在4°C時密度是最大值，不是最小值。" },
      D: { verdict: "incorrect", reason: "低於4°C後水的密度會逐漸減小，不是保持不變。" },
      E: { verdict: "correct", reason: "水在4°C密度最大，再降溫時密度變小而留在表面，因而由表面結冰。" }
    },
    takeaway: "水的反常膨脹讓湖面先結冰，也讓冰層下仍保有液態水。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-40": {
    encouragement: "蘋果拉地球和地球拉蘋果是一對作用力與反作用力，大小永遠相等。",
    keyIdea: "萬有引力具有相互性；兩物體間的引力大小相等、方向相反。",
    steps: [
      "地球與蘋果都具有質量，因此彼此吸引。",
      "萬有引力大小皆為F＝GMm/r²。",
      "交換兩物體不會改變公式中的力值。",
      "地球加速度較小只是因質量巨大，不是受力較小。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "引力是相互作用，蘋果也會以引力拉地球。" },
      B: { verdict: "incorrect", reason: "地球當然也會吸引蘋果，這正是蘋果落下的原因。" },
      C: { verdict: "incorrect", reason: "地球質量大使其加速度小，但兩者互相施加的引力量值相等。" },
      D: { verdict: "incorrect", reason: "蘋果對地球的力也不會比較大，第三定律指出兩力等大。" },
      E: { verdict: "correct", reason: "地球與蘋果互相吸引的力量值相等、方向相反，分別作用在兩物體上。" }
    },
    takeaway: "第三定律比較的是力；物體加速度不同是因質量不同。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-43": {
    encouragement: "氣體不像液體只占固定一半；剩下的氣體會擴散，最後填滿整個密閉容器。",
    keyIdea: "氣體沒有固定體積，會自由膨脹並均勻占滿可用空間。",
    steps: [
      "鋼製容器容量固定為V。",
      "抽走一半氣體後，剩下分子仍持續無規則運動。",
      "分子會散布到容器各處。",
      "因此剩餘氣體的體積仍為整個容器容量V，只是密度與壓力降低。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣體不會只縮在小於一半的區域，而會擴散到整個容器。" },
      B: { verdict: "incorrect", reason: "質量變一半不代表體積自動變一半；剛性容器中的氣體仍填滿全空間。" },
      C: { verdict: "incorrect", reason: "氣體不只占超過一半，而是會占滿整個容器。" },
      D: { verdict: "correct", reason: "剩餘氣體自由擴散後仍占滿容量V的密閉容器。" },
      E: { verdict: "incorrect", reason: "氣體體積受容器限制，不可能超過容器容量而成為2V。" }
    },
    takeaway: "氣體質量減少會降低密度與壓力，但在剛性容器中仍占滿全體積。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-44": {
    encouragement: "熱會自發由高溫流向低溫；從兩次熱流方向就能排出甲、乙、丙的溫度。",
    keyIdea: "甲傳熱給乙表示T甲＞T乙；乙傳熱給丙表示T乙＞T丙。",
    steps: [
      "熱由甲流向乙，所以甲溫度高於乙。",
      "熱由乙流向丙，所以乙溫度高於丙。",
      "合併得到T甲＞T乙＞T丙。",
      "物體所含內能多少不能只由溫度判斷。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "溫度較高不代表總內能一定較多，還與質量、材質及狀態有關。" },
      B: { verdict: "incorrect", reason: "同樣無法由熱流方向判定甲的總內能一定比乙少。" },
      C: { verdict: "correct", reason: "熱由乙流向丙，直接表示接觸當時乙的溫度高於丙。" },
      D: { verdict: "incorrect", reason: "由兩次熱流可知甲溫度最高，不是低於丙。" },
      E: { verdict: "incorrect", reason: "甲比丙高溫，接觸時熱應由甲流向丙，不是反方向。" }
    },
    takeaway: "熱流方向能比較溫度高低，不能直接比較物體「含有多少熱」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-46": {
    encouragement: "幾何光學用光線的反射、折射解釋；若關鍵是干涉、繞射或偏振，就要用波動光學。",
    keyIdea: "彩虹主要由陽光進入雨滴時的折射、色散與內反射形成，可用幾何光學描述。",
    steps: [
      "光線模型適合處理反射與折射。",
      "陽光進入雨滴後折射並色散，再於滴內反射後射出。",
      "肥皂泡與光碟彩色涉及干涉或繞射。",
      "偏振片與單狹縫現象屬波動光學。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "彩虹可由雨滴中的折射、色散與內反射光線路徑來解釋。" },
      B: { verdict: "incorrect", reason: "肥皂泡彩紋主要是薄膜上下表面反射光的干涉。" },
      C: { verdict: "incorrect", reason: "垂直偏振片阻光是偏振現象，需用光的橫波性解釋。" },
      D: { verdict: "incorrect", reason: "單狹縫繞射是光波展開與干涉的結果，不屬純幾何光學。" },
      E: { verdict: "incorrect", reason: "光碟細密軌道形成類似光柵的繞射與干涉彩色。" }
    },
    takeaway: "反射、折射常用光線模型；干涉、繞射、偏振則顯示光的波動性。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-47": {
    encouragement: "核反應只要守住質量數與原子序，缺少的粒子就能直接找出來。",
    keyIdea: "核反應前後質量數與電荷數守恆；缺少粒子的A＝1、Z＝1，是質子。",
    steps: [
      "反應前總質量數為4＋14＝18，總原子序為2＋7＝9。",
      "氧核帶走質量數17、原子序8。",
      "剩餘粒子的質量數為18−17＝1。",
      "原子序為9−8＝1，所以是¹₁H，也就是質子。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電子質量數為0、電荷數為−1，不符合剩餘的A＝1、Z＝1。" },
      B: { verdict: "incorrect", reason: "中子質量數為1但原子序為0，無法守恆總原子序9。" },
      C: { verdict: "correct", reason: "質子的質量數1、原子序1，恰好使反應前後兩項都守恆。" },
      D: { verdict: "incorrect", reason: "α粒子的質量數4、原子序2，會使反應後總數過大。" },
      E: { verdict: "incorrect", reason: "鈹核⁹₄Be的質量數與原子序都不符合本題剩餘差值。" }
    },
    takeaway: "核反應配平就像兩本帳：質量數A與原子序Z都要各自平衡。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-88-78": {
    encouragement: "用理想氣體關係V和T成正比、和P成反比，就能分別判斷高空壓力與溫度的作用。",
    keyIdea: "一定量氣體滿足V∝T/P；外壓降低使氣球膨脹，溫度降低使氣球收縮。",
    steps: [
      "氣球緩慢升起，可近似內外壓力保持平衡。",
      "高度增加時外界大氣壓力降低，氣體較容易膨脹。",
      "高空溫度降低，使分子熱運動減弱。",
      "在其他條件相同下，降溫會使氣體體積縮小。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "外界壓力減小時，氣球內氣體可膨脹到較大體積以重新平衡。" },
      B: { verdict: "incorrect", reason: "壓力降低的作用方向是使體積增大，不是縮小。" },
      C: { verdict: "incorrect", reason: "由氣體定律可知壓力會直接影響體積，不能說沒有影響。" },
      D: { verdict: "incorrect", reason: "在壓力相同時，降溫會使氣體體積縮小，不會增大。" },
      E: { verdict: "correct", reason: "溫度降低會使氣體分子熱運動減弱，有助於氣球體積變小。" },
      F: { verdict: "incorrect", reason: "氣體體積與絕對溫度有關，因此降溫並非完全沒有影響。" }
    },
    takeaway: "高空的低壓促膨脹、低溫促收縮；實際大小取決於兩種效果的合成。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-37": {
    encouragement: "撞得比較慘不代表受力比較大；兩車互推力相等，小質量摩托車加速度才更大。",
    keyIdea: "碰撞作用力與反作用力等大；由a＝F/m，質量較小者加速度較大。",
    steps: [
      "碰撞時卡車推摩托車，摩托車也推卡車。",
      "依牛頓第三定律，兩力大小相等、方向相反。",
      "摩托車質量遠小於卡車。",
      "相同力除以較小質量，摩托車加速度較大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "摩托車受力並不較小；兩車互相作用的力量值相等。" },
      B: { verdict: "incorrect", reason: "摩托車加速度較大，但受力不比卡車大。" },
      C: { verdict: "incorrect", reason: "兩車受力等大，但因質量差很多，加速度不會相同。" },
      D: { verdict: "incorrect", reason: "摩托車質量較小，所以相同力造成的加速度應較大，不是較小。" },
      E: { verdict: "correct", reason: "兩車碰撞力等大；摩托車質量較小，依a＝F/m加速度較大。" }
    },
    takeaway: "第三定律決定力等大，第二定律再決定小質量物體加速度較大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-46": {
    encouragement: "陰極射線是電子束，X射線是高頻電磁波；一個帶電、一個不帶電。",
    keyIdea: "陰極射線由電子組成，會受電磁場偏轉；X射線是電磁波，不帶電。",
    steps: [
      "陰極射線管中的陰極射線本質是高速電子流。",
      "電子帶負電，可受靜電場與磁場影響。",
      "X射線和可見光同屬電磁波，只是頻率更高。",
      "X射線不帶淨電荷，不會像電子束那樣被靜電場偏轉。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電子束可形成電流，但X射線是電磁波，不是帶電粒子流。" },
      B: { verdict: "incorrect", reason: "陰極射線會受靜電場偏轉，X射線則不會。" },
      C: { verdict: "incorrect", reason: "X射線是電磁波，但陰極射線是電子束，不是電磁波。" },
      D: { verdict: "correct", reason: "陰極射線由帶負電電子組成；X射線則是高頻電磁波。" },
      E: { verdict: "incorrect", reason: "此選項把兩者性質顛倒；電子帶電，X射線不帶電。" }
    },
    takeaway: "陰極射線看成電子粒子束；X射線看成電磁波。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-47": {
    encouragement: "映像管靠真空中的電子束撞擊螢光幕，不是靠低壓氣體顯像。",
    keyIdea: "CRT以電子槍發射、偏轉與掃描電子束，電子撞擊螢光幕形成畫面。",
    steps: [
      "映像管內近似真空，避免電子與氣體頻繁碰撞。",
      "電子槍產生電子束，經電磁場偏轉掃描螢光幕。",
      "電子撞擊螢光物質時發光形成影像。",
      "快速重複掃描配合視覺暫留，讓畫面看起來連續。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "題目問錯誤敘述；顯像的是電子束撞擊螢光幕，不是管內低壓氣體。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；傳送電視訊號的電磁波在空氣中近似以光速傳播。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；相同畫面中掃描線越密，能表現的細節通常越多。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；快速重掃利用視覺暫留使畫面不明顯閃爍。" },
      E: { verdict: "incorrect", reason: "這是正確安全提醒；映像管內部有高壓電路，接觸可能觸電。" }
    },
    takeaway: "CRT的核心是電子束、偏轉掃描與螢光幕。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-48": {
    encouragement: "先用E＝mc²算焦耳，再除以一度電的3.6×10⁶焦耳。",
    keyIdea: "1 g完全轉能量為9×10¹³ J，相當於2.5×10⁷ kWh。",
    steps: [
      "1 g＝1×10⁻³ kg。",
      "E＝mc²＝10⁻³×(3×10⁸)²＝9×10¹³ J。",
      "1度＝1 kWh＝3.6×10⁶ J。",
      "度數＝9×10¹³÷3.6×10⁶＝2.5×10⁷度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此值遠小於質能公式所得，未正確處理光速平方或電能單位換算。" },
      B: { verdict: "correct", reason: "9×10¹³ J除以3.6×10⁶ J/度，得到2.5×10⁷度。" },
      C: { verdict: "incorrect", reason: "2.5×10¹⁰多了1000倍，可能把公克換公斤的10⁻³漏掉。" },
      D: { verdict: "incorrect", reason: "9×10¹³是能量的焦耳數，不是換算後的用電度數。" },
      E: { verdict: "incorrect", reason: "9×10¹⁶是把1公克錯當1公斤代入mc²所得的焦耳量級。" }
    },
    takeaway: "質能轉換先注意公克換公斤，再用1度＝3.6×10⁶ J。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-49": {
    encouragement: "用右手判斷I×B：電流向東、力要向上，磁場就要指向北。",
    keyIdea: "載流導線受磁力方向由F＝IL×B決定。",
    steps: [
      "取東為x方向、北為y方向、上為z方向。",
      "電流方向L向東。",
      "需要磁力F向上。",
      "因為東×北＝上，所以磁場必由南向北。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "磁場若與電流同向，叉積為零，導線不會上升。" },
      B: { verdict: "incorrect", reason: "磁場與電流反向也使磁力為零，無法抬升導線。" },
      C: { verdict: "incorrect", reason: "電流向東、磁場向南時，右手定則所得磁力向下。" },
      D: { verdict: "correct", reason: "電流向東、磁場向北時，右手定則給出的磁力方向向上。" },
      E: { verdict: "incorrect", reason: "磁場向上時，磁力會在水平南北方向，不會使導線垂直上升。" }
    },
    takeaway: "磁力方向同時垂直於電流與磁場，可用右手三指互相垂直判斷。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-24": {
    encouragement: "庫侖力和電量乘積成正比、和距離平方成反比；分別算倍率再相乘。",
    keyIdea: "F∝q₁q₂/r²；一個電量變2倍、距離變2倍，合力倍率為2/4＝1/2。",
    steps: [
      "電量增加2倍，使力傾向變為2F。",
      "距離增加2倍，平方變4倍，使力除以4。",
      "合併倍率為2×1/4＝1/2。",
      "所以新斥力為F/2。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4F忽略了距離平方增加會大幅減弱庫侖力。" },
      B: { verdict: "incorrect", reason: "2F只計入電量變化，沒有除以距離倍率的平方4。" },
      C: { verdict: "incorrect", reason: "兩種效應不會完全抵消；距離平方的4倍大於電量的2倍。" },
      D: { verdict: "correct", reason: "新力/原力＝2/(2²)＝1/2，因此為F/2。" },
      E: { verdict: "incorrect", reason: "F/4只計入距離變化，漏掉其中一電量變為2倍。" }
    },
    takeaway: "反平方定律遇到距離倍率，記得先平方。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-30": {
    encouragement: "α粒子帶走2個質子與2個中子，所以原子序直接減2。",
    keyIdea: "α衰變使母核質量數減4、原子序減2。",
    steps: [
      "鈾-238的原子序92，表示核內有92個質子。",
      "α粒子是⁴₂He核，含2個質子與2個中子。",
      "放出α粒子後，剩餘核原子序為92−2＝90。",
      "因此剩餘原子核含90個質子。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "237接近質量數，不是質子數；α衰變後質量數應為234。" },
      B: { verdict: "incorrect", reason: "236既不是剩餘質量數，也不是剩餘質子數。" },
      C: { verdict: "incorrect", reason: "146是原鈾核的中子數238−92，不是衰變後質子數。" },
      D: { verdict: "incorrect", reason: "α粒子帶走2個質子，所以92應減2，不是只減1。" },
      E: { verdict: "correct", reason: "鈾核原有92個質子，放出含2質子的α粒子後剩90個。" }
    },
    takeaway: "α衰變口訣：質量數減4，原子序減2。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-31": {
    encouragement: "物體沿斜面移動，只有重力平行斜面的分量作功；垂直分量與正向力都不作功。",
    keyIdea: "功只由沿位移方向的力分量產生；重力作功mgh＝mg(s sin30°)。",
    steps: [
      "下滑2 m的垂直高度差h＝2 sin30°＝1 m。",
      "重力作功mgh＝1×9.8×1＝9.8 J。",
      "平行斜面的重力分量mg sin30°，作功也是9.8 J。",
      "垂直斜面的重力分量與正向力都垂直位移，作功為零。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "題目問錯誤敘述；重力垂直斜面的分量與位移垂直，作功應為0 J。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；mg sin30°×2 m＝9.8 J。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；總重力作功等於mgh＝9.8 J。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；斜面正向力始終垂直位移，因此不作功。" }
    },
    takeaway: "分力作功要看它是否沿位移方向，垂直位移的力作功為零。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-32": {
    encouragement: "起動器只負責幫忙點亮；燈管穩定放電後，它就退出主要工作。",
    keyIdea: "日光燈起動器用於預熱與起動，穩定發光後取走不會立即使燈熄滅。",
    steps: [
      "啟動時起動器先讓燈絲預熱。",
      "起動器斷開時，安定器產生較高感應電壓使燈管放電。",
      "燈管穩定導通後，電流可持續通過燈管。",
      "內壁螢光粉受紫外線激發發出可見光，不是靠高溫白熾。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "燈管穩定放電後，起動器已不在主要導通路徑，取走不會使燈立刻熄滅。" },
      B: { verdict: "incorrect", reason: "氖氣可低壓放電，但不能說它是所有氣體中已知最容易放電者。" },
      C: { verdict: "incorrect", reason: "日光燈管並非因不透明而更耗電；它通常比白熾燈更有效率。" },
      D: { verdict: "incorrect", reason: "傳統日光燈兩端仍有燈絲，用於起動時加熱並放出電子。" },
      E: { verdict: "incorrect", reason: "內壁物質是受紫外線激發產生螢光，不是受熱至白熾才發光。" }
    },
    takeaway: "日光燈：起動器幫啟動，安定器限流，螢光粉把紫外線轉成可見光。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-33": {
    encouragement: "熱機的方向是把部分熱能轉成力學功，不是把力學能變熱後儲存。",
    keyIdea: "熱機由高溫熱源吸熱，對外作功，再把剩餘熱排向低溫處。",
    steps: [
      "燃料燃燒或其他熱源提供熱能。",
      "工作物質膨脹，推動活塞或渦輪作功。",
      "熱機無法把吸收熱量全部轉為功，會排出廢熱。",
      "內燃機在機體內燃燒，外燃機則由外部加熱工作物質。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是可接受的正確敘述；內燃機通常功率密度與效率較佳，應用廣泛。" },
      B: { verdict: "correct", reason: "這是錯誤敘述；熱機主要把部分熱能轉為力學功，不是把力學能轉熱儲存。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；汽車引擎屬內燃機，蒸汽機車屬外燃機。" },
      D: { verdict: "incorrect", reason: "這是正確敘述；四衝程依進氣、壓縮、作功燃燒、排氣循環。" }
    },
    takeaway: "熱機吃進熱能、輸出力學功，同時一定排出部分廢熱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-46": {
    encouragement: "人耳聽不到超聲波，是因頻率超出聽覺上限，不是它跑太快或太強。",
    keyIdea: "超聲波頻率高於人耳可聽上限約20 kHz。",
    steps: [
      "人耳只能感受有限頻率範圍。",
      "高於約20 kHz的聲波稱為超聲波。",
      "它仍是機械波，可在介質中傳播與反射。",
      "聽不到的原因是耳朵對其頻率不敏感。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "超聲波頻率高，在同一聲速下波長反而較短，不是太長。" },
      B: { verdict: "correct", reason: "超聲波頻率超過人耳聽覺上限，所以人無法聽見。" },
      C: { verdict: "incorrect", reason: "超聲波可有不同強度；聽不到並非因強度太大。" },
      D: { verdict: "incorrect", reason: "同介質中的聲速近似由介質決定，超聲波不因速度太快而聽不到。" }
    },
    takeaway: "「超聲」的超是頻率超出範圍，不是速度超快。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-48": {
    encouragement: "平面鏡反射光看起來像從鏡後發出，因此形成正立、不能投影的虛像。",
    keyIdea: "平面鏡成正立、等大、左右相反的虛像，像距等於物距。",
    steps: [
      "物體光線經鏡面反射進入眼睛。",
      "眼睛把反射光反向延伸，判斷它來自鏡後。",
      "實際光線並未在鏡後會聚，所以是虛像。",
      "像的上下方向與物體相同，因此正立。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "平面鏡像雖正立，但光線沒有在像的位置實際會聚，所以不是實像。" },
      B: { verdict: "correct", reason: "平面鏡形成正立虛像，不能直接用屏幕承接。" },
      C: { verdict: "incorrect", reason: "平面鏡的反射光不在鏡後實際會聚，因此不會形成倒立實像。" },
      D: { verdict: "incorrect", reason: "平面鏡像是虛像沒錯，但方向為正立，不是倒立。" }
    },
    takeaway: "平面鏡像：正立、等大、虛像，物距等於像距。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-76": {
    encouragement: "偏振片既能把自然光篩成單一振動方向，也能轉動來檢查未知偏振方向。",
    keyIdea: "偏振片可產生線偏振光，也可作為檢偏器判斷偏振方向。",
    steps: [
      "自然光含有多個橫向振動方向。",
      "偏振片只讓沿其透光軸方向的電場振動通過。",
      "因此通過後可形成線偏振光。",
      "轉動另一片偏振片並觀察亮暗，可判斷入射光偏振方向。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "偏振片不能直接測量光速；光速需用傳播時間或其他方法測定。" },
      B: { verdict: "incorrect", reason: "偏振片不提供波長刻度，不能直接檢驗光的波長。" },
      C: { verdict: "incorrect", reason: "偏振片依振動方向篩光，不是用來量測頻率。" },
      D: { verdict: "correct", reason: "自然光通過單一偏振片後，只保留特定振動方向，可產生偏振光。" },
      E: { verdict: "correct", reason: "轉動偏振片觀察透光強弱，可判斷入射偏振光的振動方向。" },
      F: { verdict: "incorrect", reason: "偏振片會改變亮度，但單靠它不是檢驗一般光強弱的標準量測工具。" }
    },
    takeaway: "第一片可當起偏器，第二片可當檢偏器。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-34": {
    encouragement: "厚杯破裂是內外受熱不均、膨脹不同步；讓熱更快傳開可減少溫差。",
    keyIdea: "熱傳導性提高能減少玻璃內外溫差與熱應力，降低破裂風險。",
    steps: [
      "倒入熱水時，杯內壁先迅速升溫膨脹。",
      "厚玻璃外壁升溫較慢，膨脹較少。",
      "不均勻膨脹在玻璃中形成較大熱應力。",
      "提高導熱性可讓溫度較快均勻，減少應力。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "導熱較快可縮小杯壁內外溫差，使膨脹較同步，降低破裂機會。" },
      B: { verdict: "incorrect", reason: "杯子原溫越低，突然倒入熱水造成的溫差通常越大，更容易破裂。" },
      C: { verdict: "incorrect", reason: "厚度均勻仍可能因內外表面溫差而產生熱應力，不能保證不破。" },
      D: { verdict: "incorrect", reason: "主要原因是玻璃內外受熱與膨脹不均，不是玻璃比熱小於水本身。" }
    },
    takeaway: "熱衝擊看的是溫度分布不均造成的膨脹差與應力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-40": {
    encouragement: "太陽能量來自輕原子核融合成較重原子核時的質量差。",
    keyIdea: "太陽核心進行氫核融合，釋放的核能最後以光與熱輻射到太空。",
    steps: [
      "核分裂把重核分成較輕原子核，核融合則結合輕核。",
      "兩類反應都可因質量差釋放核能。",
      "太陽核心高溫高壓，能讓氫核進行融合。",
      "目前商業核電廠使用可控制核分裂，尚非核融合。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核分裂常以鈾為燃料；核融合則使用氫的同位素等輕核。" },
      B: { verdict: "incorrect", reason: "核融合釋出的能量來自原子核結合能改變，當然屬核能。" },
      C: { verdict: "incorrect", reason: "核融合的長壽命高階放射性廢料問題通常不比核分裂更嚴重。" },
      D: { verdict: "correct", reason: "太陽核心主要由氫核融合成氦，質量差轉成巨大輻射能。" },
      E: { verdict: "incorrect", reason: "可控核融合尚未成為大量商業發電技術，現有核電廠使用核分裂。" }
    },
    takeaway: "太陽靠核融合；現代商業核電廠主要靠核分裂。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-45": {
    encouragement: "液體壓力差只看密度、深度與重力；水密度較小，所以要更高水柱才能等於汞柱。",
    keyIdea: "靜水壓差ΔP＝ρgh，與容器底面積無關；液面下總壓力為大氣壓加液柱壓力。",
    steps: [
      "同一壓力差下，液柱高度與密度成反比。",
      "汞密度是水的13.6倍，所以0.76 m汞柱等效水柱高0.76×13.6 m。",
      "液體內壓力隨深度增加。",
      "開放液面下的總壓力大於表面的一大氣壓。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實際大氣壓會隨高度與天氣改變；一大氣壓是約定的標準壓力值。" },
      B: { verdict: "incorrect", reason: "密閉容器內可抽成低壓甚至近真空，壓力不一定大於外界。" },
      C: { verdict: "incorrect", reason: "液柱壓力差ρgh與底面積無關，不會和面積成反比。" },
      D: { verdict: "correct", reason: "等壓差需ρ水h水＝ρ汞×0.76，因此水柱高為0.76×13.6 m。" },
      E: { verdict: "correct", reason: "液面下一定深度的總壓力＝一大氣壓＋ρgh，所以大於一大氣壓。" }
    },
    takeaway: "靜水壓看ρgh，不看容器形狀或底面積。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-46": {
    encouragement: "高度快速改變時，外耳壓力先變、中耳來不及；吞嚥能打開耳咽管重新平衡。",
    keyIdea: "耳塞感來自鼓膜兩側壓力差；吞嚥使耳咽管開啟，讓空氣進出中耳。",
    steps: [
      "飛機升降時，外界大氣壓會快速改變。",
      "中耳若暫時封閉，內部壓力改變較慢。",
      "鼓膜兩側形成壓力差，造成不適。",
      "吞嚥打開耳咽管，使中耳與外界壓力重新接近。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "外耳與中耳壓力不相等會推擠鼓膜，造成耳塞與不舒服的感覺。" },
      B: { verdict: "incorrect", reason: "主要原因是壓力差，不是中耳與外耳溫度不同。" },
      C: { verdict: "incorrect", reason: "一般飛機或電梯升降不會讓地球重力突然大幅改變到造成耳塞。" },
      D: { verdict: "incorrect", reason: "空氣流動本身不是主要不適來源，關鍵是鼓膜兩側壓力未平衡。" },
      E: { verdict: "correct", reason: "吞嚥會打開耳咽管，讓空氣進出中耳並減小鼓膜壓力差。" }
    },
    takeaway: "耳咽管像中耳的壓力平衡通道，吞嚥可幫它短暫開啟。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-47": {
    encouragement: "EER就是每消耗一單位電能能搬走多少熱；數字越大越省電。",
    keyIdea: "EER＝冷房能力/耗電功率；換用較大的kJ取代kcal作熱量單位，數值會乘約4.184。",
    steps: [
      "甲EER＝1600 kcal/h÷720 W≈2.22 kcal/Wh。",
      "乙EER＝2000÷880≈2.27 kcal/Wh。",
      "EER越大，代表相同耗電可提供較多冷房能力。",
      "1 kcal≈4.184 kJ，改以kJ表示時EER數值變大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "交流電實功率還與功率因素有關，不是只由額定電壓乘運轉電流決定。" },
      B: { verdict: "correct", reason: "每1 kcal約為4.184 kJ，分子改用kJ表示後EER數值會變大。" },
      C: { verdict: "correct", reason: "表中EER正是冷房能力除以總額定消耗電功率所得的效率指標。" },
      D: { verdict: "incorrect", reason: "乙的EER 2.27高於甲的2.22，就節能效率而言乙稍優。" },
      E: { verdict: "incorrect", reason: "起動電流只短暫出現，保險絲規格不必高於其瞬間值；表中即為15 A小於35 A。" }
    },
    takeaway: "比較冷氣節能先看EER：同條件下數值越大越有效率。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-60": {
    encouragement: "三種交通工具各有熟悉的反作用力：汽車推地、輪船推水、火箭噴氣。",
    keyIdea: "前進皆可用牛頓第三定律理解，但所推動的對象不同。",
    steps: [
      "汽車輪胎向後推地面，地面摩擦力向前推汽車，對應甲。",
      "輪船螺旋槳向後推水，水反推輪船向前，對應乙。",
      "火箭向後噴出高速廢氣，廢氣反推火箭，且不需外界空氣，對應丙。",
      "因此配對為汽車甲、輪船乙、火箭丙。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "汽車靠地面摩擦、輪船靠推水、火箭靠噴氣，依序對應甲、乙、丙。" },
      B: { verdict: "incorrect", reason: "汽車不是靠螺旋槳推空氣，輪船也不是靠輪子推地面。" },
      C: { verdict: "incorrect", reason: "輪船需推動周圍水，不是像火箭靠攜帶的燃料與氧化劑噴氣原理分類。" },
      D: { verdict: "incorrect", reason: "汽車需藉輪胎與地面作用，不屬丙所述的火箭噴氣方式。" },
      E: { verdict: "incorrect", reason: "汽車與火箭的對應顛倒；火箭不靠地面輪胎推進。" },
      F: { verdict: "incorrect", reason: "三者全部錯置；輪船最符合推動周圍流體的乙，火箭最符合丙。" }
    },
    takeaway: "反作用推進要問：交通工具把哪個物體向後推？",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-62": {
    encouragement: "依三人的說法逐一追蹤：誰需要先加速產生機翼升力，誰離地後失去原本推進來源。",
    keyIdea: "甲、乙都以機翼壓力差升空而需跑道加速；甲的推進依賴地面，離地後便消失。",
    steps: [
      "甲與乙都認為要靠前進氣流產生機翼升力，所以需先在跑道加速。",
      "丙認為向前推進配合重力即可像軌道運動，不屬前兩人的跑道升力說法。",
      "甲的向前推力來自地面對輪胎摩擦力。",
      "飛機離地後輪胎不接觸地面，所以甲所主張的向前推進力消失；乙的螺旋槳仍可推空氣。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "依題述丙不是靠機翼壓力差起飛，不必列入必須用加速跑道者；乙升空後仍有推力。" },
      B: { verdict: "correct", reason: "甲乙需跑道加速取得升力；甲離地後失去地面摩擦推進，乙仍可推空氣。" },
      C: { verdict: "incorrect", reason: "乙的螺旋槳或渦輪在空中仍能推動空氣，因此升空後不會沒有向前推力。" },
      D: { verdict: "incorrect", reason: "乙也需要前進氣流建立機翼升力，應和甲同列需加速跑道者。" }
    },
    takeaway: "分析假說題要照題中每個人的前提推論，不要混入另一套說法。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-22": {
    encouragement: "海面已經有一大氣壓，潛入水下後還要再加上水柱壓力。",
    keyIdea: "水下總壓力P＝P大氣＋ρgh；約10 m深的水柱增加約一大氣壓。",
    steps: [
      "海面受到約1 atm大氣壓。",
      "水下10 m的水柱壓力ρgh≈1000×9.8×10≈9.8×10⁴ Pa。",
      "這接近另一個1 atm。",
      "所以水下10 m總壓力約2 atm。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "500 hPa約為0.49 atm，小於一大氣壓，不是大於。" },
      B: { verdict: "incorrect", reason: "海平面大氣壓通常接近1 atm，不會因緯度45°、0°C就變成零。" },
      C: { verdict: "correct", reason: "10 m水柱約增加1 atm，再加海面的1 atm，總壓約2 atm。" },
      D: { verdict: "incorrect", reason: "岩石密度約為水的3.3倍，同深度岩壓應比水壓大，不是小。" }
    },
    takeaway: "水下壓力要記得加上海面原有的大氣壓。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-34": {
    encouragement: "每個工具都有最擅長的任務：回聲量厚度、測力判斷能否移動、雷達看後方、導電測連接。",
    keyIdea: "依量測物理量選工具：時間回聲、力、穿透電磁波與導電性。",
    steps: [
      "超聲波往返時間配合聲速，可估石塊厚度。",
      "測力計可量推拉石塊所需的力，判斷能否移動。",
      "可穿透石塊的雷達能探測後方物體。",
      "導電性感測器可檢查兩銅把手是否電氣相連。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "測力計不能直接量石塊厚度，導電感測器也不適合判斷石塊能否移動。" },
      B: { verdict: "incorrect", reason: "導電感測器不能量厚度，超聲波也不是此處判斷可移動性的最佳工具。" },
      C: { verdict: "correct", reason: "乙測厚度、甲測所需力、丁探後方、丙測銅把手連通，依序完全符合。" },
      D: { verdict: "incorrect", reason: "第一項導電感測器不能量石塊厚度，後續工具順序也不符合任務。" }
    },
    takeaway: "選儀器先問要量的是距離、力、內部影像，還是導電連通。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-35": {
    encouragement: "先算每塊石頭平均體積，再乘常見岩石密度約每立方公尺數千公斤。",
    keyIdea: "平均每塊體積約1.1 m³，乘岩石密度約2.3～2.7×10³ kg/m³，質量約2.5×10³ kg。",
    steps: [
      "金字塔總體積約2.57×10⁶ m³。",
      "除以2.30×10⁶塊，平均每塊體積約1.12 m³。",
      "常見岩石密度約2.5×10³ kg/m³。",
      "平均質量約1.12×2.5×10³≈2.8×10³ kg，最接近2500 kg。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "500 kg除以約1.1 m³只相當於密度約450 kg/m³，遠低於岩石。" },
      B: { verdict: "incorrect", reason: "1000 kg仍只給出約900 kg/m³，接近水而不像巨石。" },
      C: { verdict: "correct", reason: "每塊約1.1 m³，乘岩石密度每立方公尺約數千公斤，最接近2500 kg。" },
      D: { verdict: "incorrect", reason: "6000 kg相當於密度超過5000 kg/m³，對一般建築石材偏高。" },
      E: { verdict: "incorrect", reason: "9000 kg對約1.1 m³石塊代表極高密度，明顯不符合一般岩石。" }
    },
    takeaway: "估算題先求單位數量的體積，再用合理密度檢查量級。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-38": {
    encouragement: "衛星不是沒有重力，而是重力讓它持續轉彎；理想圓軌道中不必一直點火維持前進。",
    keyIdea: "圓軌道衛星由地球重力提供向心力，重力不作切向功，速率可保持不變。",
    steps: [
      "飛機與衛星都受到地球重力。",
      "衛星內物體和衛星一起自由落體，所以呈現失重感。",
      "圓軌道上重力垂直於瞬時速度，只改變方向。",
      "忽略阻力時，衛星不需燃料持續提供切向動力。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "飛機乘客仍受地球重力，飛機靠升力等作用維持高度。" },
      B: { verdict: "incorrect", reason: "衛星裝備仍受重力；失重是與衛星共同自由落體造成的表觀現象。" },
      C: { verdict: "correct", reason: "理想圓軌道由重力提供向心力，不需持續燃燒燃料維持切向速度。" },
      D: { verdict: "incorrect", reason: "飛機受空氣阻力，需引擎持續提供推力才能維持等速與高度。" }
    },
    takeaway: "衛星靠重力轉彎，飛機則需持續克服空氣阻力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-43": {
    encouragement: "浴室瓷磚硬而光滑、空間又小而封閉，聲音容易多次反射並快速回到耳邊。",
    keyIdea: "硬質表面吸音少，狹小封閉空間使反射聲密集，增加混響與響度。",
    steps: [
      "瓷磚表面堅硬平滑，會反射較多聲能。",
      "浴室空間小，反射聲往返時間短。",
      "門窗關閉讓聲音不易迅速逸散。",
      "多次反射與原聲重疊，使歌聲較連貫響亮。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "瓷磚吸音少、反射強，能保留較多聲能形成明顯回聲與混響。" },
      B: { verdict: "correct", reason: "狹窄且封閉使反射路徑短、聲音不易散失，混響更明顯。" },
      C: { verdict: "incorrect", reason: "心情可能影響唱歌感受，但不是浴室改變聲音的主要物理原因。" },
      D: { verdict: "incorrect", reason: "浴室空氣中的聲速不會因空間狹窄就顯著變快；關鍵是反射。" }
    },
    takeaway: "回聲與混響強弱主要看牆面吸音能力、空間大小與開放程度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-44": {
    encouragement: "點描法要站遠才會讓眼睛把不同色點混合；近看只會看到一顆顆分開的顏料。",
    keyIdea: "甲畫法以相鄰色點的反射光在視覺中混合，乙畫法則先讓顏料進行減色混合。",
    steps: [
      "近看甲畫法時，眼睛能分辨各色小點，整體混色效果較弱。",
      "退遠後小點角距離變小，視覺把各色反射光整合。",
      "黃綠與藍綠色點都能提供綠光，遠看可形成較明亮的綠色。",
      "若先混合顏料，吸收的色光種類增加，顏色通常較暗。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "距離太近會看見獨立色點，不易出現遠看時的視覺混色效果。" },
      B: { verdict: "incorrect", reason: "乙畫法已先把顏料混合，顏色通常不會因觀看距離而顯著改變。" },
      C: { verdict: "correct", reason: "分開的黃綠與藍綠色點反射光在遠處視覺混合，可呈現較明亮綠色。" },
      D: { verdict: "incorrect", reason: "紅綠藍顏料實際混合屬減色效果，通常不比並置色點呈現更多明亮色彩。" }
    },
    takeaway: "色光混合偏向越加越亮；顏料混合因吸收增加，常越混越暗。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
