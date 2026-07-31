(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-67": {
    encouragement: "先把火星氣壓換成地球氣壓的比例，就能直接縮放水銀柱高度。",
    keyIdea: "同溫、同種水銀且重力近似時，水銀柱高度與大氣壓力成正比。",
    steps: ["題組資料給火星表面氣壓約為地球的0.015倍。", "760×0.015約為11 mm，所以選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "760 mm是地球的一大氣壓，不是稀薄的火星大氣。" },
      B: { verdict: "incorrect", reason: "380 mm等於地球氣壓的一半，仍遠高於火星資料。" },
      C: { verdict: "correct", reason: "760×0.015約為11 mm。" },
      D: { verdict: "incorrect", reason: "4.6 mm只約為地球值的0.006倍，比例過小。" },
      E: { verdict: "incorrect", reason: "1.8 mm與題組所給火星氣壓比例不符。" }
    },
    takeaway: "托里切利水銀柱可視為大氣壓力的刻度尺。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-5": {
    encouragement: "把問題拆成磁力方向與電流大小兩關，就不會被滑動電阻繞亂。",
    keyIdea: "彈簧變長表示磁棒受到向下磁力；滑片靠近Q會縮短接入電阻並增強電流。",
    steps: ["依正式圖的線圈繞向，P接正、Q接負時，線圈上端與磁棒下端同極，磁棒受向下排斥力。", "X移向Q使Q到X間電阻變小，電流與排斥力變大，彈簧更長。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "極性正確，但X移向Y會增大電阻、減弱磁力。" },
      B: { verdict: "correct", reason: "既產生向下排斥力，又因電阻變小而讓排斥力增強。" },
      C: { verdict: "incorrect", reason: "電源反接會使磁力方向不符合彈簧伸長。" },
      D: { verdict: "incorrect", reason: "雖然移向Q會增大電流，但電源極性造成的磁力方向錯誤。" },
      E: { verdict: "incorrect", reason: "滑片會改變接入電阻，因此會影響電流與伸長量。" }
    },
    takeaway: "可變電阻題先看實際接入的是滑片到哪一端。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-25": {
    encouragement: "表格題只要分別算電費與效率，兩條線索就很清楚。",
    keyIdea: "年電費＝功率(kW)×2000小時×2.5元；效率＝光通量÷功率。",
    steps: ["三者年電費分別為300、75、50元，加售價後為315、135、175元。", "總費用順序是白熾燈＞LED＞省電燈；效率分別約14.3、51.7、90 lm/W。", "所以B、D正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "LED年耗電20度，電費約50元，不是100元。" },
      B: { verdict: "correct", reason: "一年總費用315＞175＞135元。" },
      C: { verdict: "incorrect", reason: "省電燈總費用低於LED，後兩者次序顛倒。" },
      D: { verdict: "correct", reason: "900/10＞775/15＞860/60。" },
      E: { verdict: "incorrect", reason: "只看耗電功率，LED的10 W比省電燈15 W更省電。" }
    },
    takeaway: "功率先除以1000換成kW，才可計算度數。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-110-11": {
    encouragement: "密度由下往上變小，先翻成光速變化，再判斷光線往哪邊彎。",
    keyIdea: "越下方密度越大、光速越慢，連續折射會使光線朝較慢的下方彎曲。",
    steps: ["光速與密度成反比，所以水面附近較快、底部附近較慢。", "光每進入稍慢的一層就向法線偏折，兩道光都逐漸向下彎。", "正式圖中只有E同時畫對兩條光線。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中光路沒有呈現朝較慢下層彎曲。" },
      B: { verdict: "incorrect", reason: "其中一條光線的彎曲方向與速度梯度不符。" },
      C: { verdict: "incorrect", reason: "把光線畫向較快的上層彎，方向相反。" },
      D: { verdict: "incorrect", reason: "兩道相同光都受同一密度梯度影響，不會一上一下。" },
      E: { verdict: "correct", reason: "兩道光皆連續朝密度較大、速度較慢的下方彎曲。" }
    },
    takeaway: "漸變介質中，光線會彎向傳播較慢的一側。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-111-59": {
    encouragement: "右盤加了物體會下沉，所以左側線圈必須得到向下磁力才能恢復平衡。",
    keyIdea: "線圈與磁棒異極相吸、同極相斥；只要讓左盤受到向下磁力即可。",
    steps: ["待測物使右盤力矩增加，左側必須增加向下作用力。", "依正式圖逐一用右手定則判線圈下端磁極，A與D都會讓線圈朝下受力。", "其餘組合使線圈向上，無法補足左側力矩。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "此電流方向與磁棒配置使線圈受到向下磁力。" },
      B: { verdict: "incorrect", reason: "磁極組合使線圈受力向上，天平更不平衡。" },
      C: { verdict: "incorrect", reason: "正式圖所示磁極與電流組合造成向上磁力。" },
      D: { verdict: "correct", reason: "同時反轉線圈電流與磁棒方向後，線圈仍受向下磁力。" },
      E: { verdict: "incorrect", reason: "磁棒橫放不能提供題目所需的鉛直磁力配置。" }
    },
    takeaway: "天平題先決定需要補哪個方向的力，再判磁極。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-114-25": {
    encouragement: "電子是一顆顆到達，但很多電子累積後會顯出明暗相間的機率分布。",
    keyIdea: "雙狹縫干涉是多條平行亮紋；電子落點仍是離散的小點。",
    steps: ["單顆電子會在屏幕留下單一點。", "大量電子累積後，落點密集處形成一條條干涉亮紋。", "正式選項D同時有隨機點狀與平行條紋。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "零散團塊沒有規律的雙狹縫明暗條紋。" },
      B: { verdict: "incorrect", reason: "規則點陣不是雙狹縫干涉的連續條紋分布。" },
      C: { verdict: "incorrect", reason: "同心圓較像圓孔繞射，不是雙狹縫條紋。" },
      D: { verdict: "correct", reason: "許多離散電子點累積成相間的直條紋。" },
      E: { verdict: "incorrect", reason: "只有一條亮線，缺少多級干涉亮紋。" }
    },
    takeaway: "量子干涉不是單顆電子裂成一條線，而是大量落點呈現機率條紋。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-115-13": {
    encouragement: "靠近時藍移、遠離時紅移，先抓住甲高乙低再比曲線。",
    keyIdea: "光源靠近時頻率高於f₀，遠離時低於f₀；圓周運動使變化平滑且週期性。",
    steps: ["甲時刻恆星接近地球，所以觀測頻率高於f₀。", "乙時刻恆星遠離地球，所以頻率低於f₀。", "正式圖中E的曲線在甲為高峰、乙為低谷，且平滑週期變化。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "頻率固定不變，沒有都卜勒效應。" },
      B: { verdict: "incorrect", reason: "甲落在低頻、乙落在高頻，恰好相反。" },
      C: { verdict: "incorrect", reason: "甲乙都在低頻，與一近一遠不符。" },
      D: { verdict: "incorrect", reason: "甲乙都在高頻，無法表示乙時刻遠離。" },
      E: { verdict: "correct", reason: "甲高於f₀、乙低於f₀，並呈週期性。" }
    },
    takeaway: "靠近頻率升高，遠離頻率降低。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-115-16": {
    encouragement: "電子永遠被原點的質子吸引，只要先標方向，正負號就不會弄反。",
    keyIdea: "x＞0時力向左為負，x＜0時力向右為正；量值與1/x²成正比。",
    steps: ["電子與質子異號相吸，所以力總是指向原點。", "越靠近原點力越大，越遠則快速趨近0。", "正式圖B左右方向與反平方變化都正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "左右兩側的力方向都畫成背離原點。" },
      B: { verdict: "correct", reason: "左正右負，靠近0急遽增大、遠處趨近0。" },
      C: { verdict: "incorrect", reason: "靜電力不是隨距離線性增加。" },
      D: { verdict: "incorrect", reason: "線性且方向背離原點，兩點都不符。" },
      E: { verdict: "incorrect", reason: "兩側都為負值，忽略了x＜0時力應向+x。" }
    },
    takeaway: "畫力—位置圖時，方向決定正負，距離決定大小。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-83-56": {
    encouragement: "同一入射角下，折射率越大，光越靠近法線。",
    keyIdea: "甲位於較接近海水處、鹽度與折射率較高，因此折射角較小。",
    steps: ["題組河口圖顯示甲較受海水影響，鹽度高於乙。", "甲折射率較大，同角度入射時折射角較小。", "所以乙的折射角較大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲鹽度較高、折射率較大，折射光應更靠近法線。" },
      B: { verdict: "correct", reason: "乙折射率較小，因此折射角較大。" }
    },
    takeaway: "低折射率進高折射率，折射光會靠近法線。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-84-49": {
    encouragement: "鏡心光線是透鏡作圖最好認的一條：近似直走不偏折。",
    keyIdea: "薄透鏡兩個表面的偏折近似互相抵消，穿過鏡心的光沿原方向前進。",
    steps: ["找出每個正式圖中入射線通過鏡心的位置。", "只有C讓出射線沿原直線延伸。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中穿過鏡心後仍明顯折向錯誤方向。" },
      B: { verdict: "incorrect", reason: "出射線未沿入射線的直線延伸。" },
      C: { verdict: "correct", reason: "光線穿過鏡心後近似不偏折。" },
      D: { verdict: "incorrect", reason: "圖中把鏡心光線畫成在透鏡後轉折。" }
    },
    takeaway: "薄透鏡三條特殊光線中，過鏡心者直進。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-86-42": {
    encouragement: "獵物脫落後仍保留向右速度，同時受重力向下加速。",
    keyIdea: "地面觀察者看到水平等速、鉛直自由落體合成的拋物線。",
    steps: ["脫落瞬間水平速度仍為10 m/s，不會立刻直落。", "重力使向下速度愈來愈大，所以軌跡由水平切線逐漸向下彎。", "正式圖B符合。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "先水平再突然直落表示速度不連續。" },
      B: { verdict: "correct", reason: "由O點水平出發並平滑向下彎成拋物線。" },
      C: { verdict: "incorrect", reason: "曲線在O點不是水平切線，與初速方向不符。" },
      D: { verdict: "incorrect", reason: "直斜線表示鉛直速度固定，忽略重力加速。" }
    },
    takeaway: "拋體軌跡在起點的切線方向，就是初速度方向。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-86-43": {
    encouragement: "忽略空氣阻力時，位能雖下降，動能會等量增加。",
    keyIdea: "只有重力作功，總力學能保持不變。",
    steps: ["下降時重力位能減少。", "減少的位能全轉成動能，兩者總和不變。", "正式圖A的力學能是水平線。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "力學能不隨下降距離改變。" },
      B: { verdict: "incorrect", reason: "圖中力學能隨下降增加，違反守恆。" },
      C: { verdict: "incorrect", reason: "圖中力學能隨下降減少，但題目沒有阻力耗能。" },
      D: { verdict: "incorrect", reason: "彎曲變化也表示總能量不守恆。" }
    },
    takeaway: "沒有阻力時，動能加位能是一個固定值。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-86-50": {
    encouragement: "真實電池一通電，內部電阻也會分掉一小部分電壓。",
    keyIdea: "端電壓＝電動勢－內電阻壓降，因此放電時小於電動勢。",
    steps: ["燈泡接通後有電流，鹽橋與溶液的內電阻產生壓降。", "外部兩極量到的電位差因此小於1.1 V。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.1 V是無負載時的電動勢，未扣內部壓降。" },
      B: { verdict: "incorrect", reason: "放電時端電壓不會因內阻而大於電動勢。" },
      C: { verdict: "correct", reason: "有電流時須扣除內阻壓降，所以小於1.1 V。" },
      D: { verdict: "incorrect", reason: "在此固定放電情境，端電壓不會忽大忽小跨過電動勢。" }
    },
    takeaway: "電池有內阻時，工作中的端電壓通常低於標示電動勢。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-86-53": {
    encouragement: "磁力一定同時垂直電流與磁場，先用這條快速刪除。",
    keyIdea: "載流導線磁力方向由I×B決定，並垂直I、B。",
    steps: ["逐一檢查正式圖中I、B、F是否兩兩符合垂直關係。", "再用右手定則判I×B方向，只有C一致。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中F方向與I×B的右手定則不符。" },
      B: { verdict: "incorrect", reason: "圖示力向量不是電流與磁場叉積方向。" },
      C: { verdict: "correct", reason: "I、B、F互相垂直且F方向符合右手定則。" },
      D: { verdict: "incorrect", reason: "圖中F與B平行，不可能是磁力方向。" }
    },
    takeaway: "先檢查垂直，再用右手定則定正反。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-43": {
    encouragement: "半透膜主要讓水通過，水會往溶質濃度較高的一側移動。",
    keyIdea: "滲透作用使水由低濃度溶液流向高濃度溶液。",
    steps: ["若漏斗內蔗糖濃度大於外界10%，漏斗內是高濃度側。", "水由燒杯進入漏斗，使管內水位上升。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "滲透是被動運輸，不需生物主動耗能。" },
      B: { verdict: "correct", reason: "漏斗內較濃時，水進入漏斗而使水位上升。" },
      C: { verdict: "incorrect", reason: "濃度差正是水位改變的原因。" },
      D: { verdict: "incorrect", reason: "半透膜主要讓水通過，不是蔗糖自由進出。" },
      E: { verdict: "incorrect", reason: "蔗糖不能像水一樣自由穿過此半透膜。" }
    },
    takeaway: "滲透看水的方向：由稀往濃。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-45": {
    encouragement: "速度—時間圖下方的面積，就是走過的距離。",
    keyIdea: "把0到6秒圖形切成長方形與三角形，面積合計24 m。",
    steps: ["依正式圖把各時間區段的v-t圖面積分開計算。", "各塊面積相加得到24公尺，所以選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "6只讀到時間，未計入速度形成的面積。" },
      B: { verdict: "incorrect", reason: "12只包含部分圖形面積。" },
      C: { verdict: "incorrect", reason: "18漏算一個速度區段。" },
      D: { verdict: "correct", reason: "完整圖下面積總和為24 m。" },
      E: { verdict: "incorrect", reason: "36高估了圖下面積。" }
    },
    takeaway: "v-t圖求路程，看面積，不是只讀線的高度。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-51": {
    encouragement: "等速圓周運動中，磁力永遠指向圓心、速度永遠沿切線。",
    keyIdea: "磁力垂直速度並提供向心力；負電荷的方向與正電荷相反。",
    steps: ["正式圖磁場穿入紙面，先以正電荷用v×B判方向。", "負電荷把該方向反轉，且F必須指向圓心。", "只有C同時畫對切線速度與向心磁力。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "F未指向圓心，不能維持圓周運動。" },
      B: { verdict: "incorrect", reason: "把負電荷的磁力方向判成正電荷方向。" },
      C: { verdict: "correct", reason: "v沿切線、F垂直v並朝圓心。" },
      D: { verdict: "incorrect", reason: "速度或磁力箭頭與軌跡的切線、法線關係不符。" }
    },
    takeaway: "圓周運動圖先找切線v，再找朝心F。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-55": {
    encouragement: "電池壽命看總電流：等效電阻越大，耗電越慢。",
    keyIdea: "三燈串聯的甲等效電阻最大；乙最小；丙介於兩者。",
    steps: ["相同電池下，總電流與等效電阻成反比。", "正式電路中甲全串聯、丙混聯、乙並聯較多。", "所以壽命甲＞丙＞乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙的等效電阻小、耗電快，壽命不會長於丙。" },
      B: { verdict: "correct", reason: "等效電阻由大到小為甲、丙、乙，壽命同此順序。" },
      C: { verdict: "incorrect", reason: "乙總電流最大，不會最耐用。" },
      D: { verdict: "incorrect", reason: "甲全串聯，應比丙更省電。" },
      E: { verdict: "incorrect", reason: "把耗電最快的乙排在最前。" }
    },
    takeaway: "同電壓下，等效電阻大代表總功率小、電池較耐用。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-87-60": {
    encouragement: "半個週期後，每一點的位移都會變成原來的相反數。",
    keyIdea: "行進波經T/2相位差為π，波峰變波谷。",
    steps: ["正式圖中乙點當下位移為+4 cm。", "經T/2後位移變為−4 cm，水平位置不變。", "所以移到正下方y＝−4 cm。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "半週期後+4 cm正好變成−4 cm。" },
      B: { verdict: "incorrect", reason: "回到平衡位置只需四分之一週期。" },
      C: { verdict: "incorrect", reason: "振幅為4 cm，不會在半週期後變成−2 cm。" },
      D: { verdict: "incorrect", reason: "介質質點只上下振動，不會跑到丁的水平位置。" },
      E: { verdict: "incorrect", reason: "質點不隨波形向右搬運到戊點。" }
    },
    takeaway: "波向前傳，繩上的質點只在原地上下振動。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-37": {
    encouragement: "等速度代表合力為零，因此軌道的上坡推力剛好抵消重力分量。",
    keyIdea: "沿斜面方向，軌道施力向上坡，大小等於mg sinθ。",
    steps: ["火車等速上坡，沿坡加速度為0。", "重力沿坡分量向下，所以軌道對火車的力必須等大向上。", "正式圖A符合。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "力沿斜面向上，且保持定值以平衡重力分量。" },
      B: { verdict: "incorrect", reason: "逐漸增大的力會造成加速度，不再等速。" },
      C: { verdict: "incorrect", reason: "逐漸減小後無法持續平衡固定的重力分量。" },
      D: { verdict: "incorrect", reason: "先增後定表示前段有加速。" },
      E: { verdict: "incorrect", reason: "先變大再變小不符合全程等速。" }
    },
    takeaway: "等速度不代表沒有力，而是所有力的合力為零。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-38": {
    encouragement: "車內的人和球共享向右速度，所以在甲眼中球只會上下。",
    keyIdea: "相對火車的水平速度為零，甲看到直上直下。",
    steps: ["球離手時與等速火車有相同水平速度。", "甲也以相同速度向右，因此相對水平位移為零。", "正式圖A是同一直線上升下降。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "球相對甲直上直下並回到拋出處。" },
      B: { verdict: "incorrect", reason: "矩形路線需要突然轉向，不是自由拋體。" },
      C: { verdict: "incorrect", reason: "球不會在車內出現水平折返路線。" },
      D: { verdict: "incorrect", reason: "向右拋物線是地面觀察者所見。" },
      E: { verdict: "incorrect", reason: "向左彎表示球相對甲有水平速度。" }
    },
    takeaway: "先問觀察者與物體是否共享同一個水平速度。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-39": {
    encouragement: "站在地面的乙會看到球保留火車向右的水平速度。",
    keyIdea: "地面系中，水平等速與鉛直拋運動合成向右的拋物線。",
    steps: ["球離手時已有火車向右的水平速度。", "重力只改變鉛直速度，所以路徑平滑向右彎。", "正式圖D符合。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "直上直下是車內甲所見，不是地面乙所見。" },
      B: { verdict: "incorrect", reason: "折線與直角不符合連續運動。" },
      C: { verdict: "incorrect", reason: "水平折返與慣性不符。" },
      D: { verdict: "correct", reason: "保有向右速度，形成向右拋物線。" },
      E: { verdict: "incorrect", reason: "球不會在沒有向左力時向左彎。" }
    },
    takeaway: "同一個球，換觀察者後看到的軌跡可以不同。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-41": {
    encouragement: "先依線圈電流判軟鐵棒兩端磁極，再讓小磁針N極順著外部磁場。",
    keyIdea: "正式線圈通電後，軟鐵棒外部兩側的磁場方向都指向右方。",
    steps: ["按下開關後依正式圖的繞線與電流方向，用右手定則判磁極。", "K、L所在處的磁力線皆向右，所以兩磁針N極都向右。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩處磁場都不是向左。" },
      B: { verdict: "correct", reason: "K與L的N極都沿局部磁場指向右。" },
      C: { verdict: "incorrect", reason: "K、L不會指向相反方向。" },
      D: { verdict: "incorrect", reason: "兩側局部磁場方向相同，不是一右一左。" },
      E: { verdict: "incorrect", reason: "題圖主要磁場沿軟鐵棒方向，不是向上。" }
    },
    takeaway: "小磁針N極所指方向，就是該點磁場方向。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-42": {
    encouragement: "開關打開後磁場正在消失，乙線圈只會短暫產生反抗這個變化的電流。",
    keyIdea: "楞次定律：感應電流阻止磁通量減少；磁通停止改變後電流歸零。",
    steps: ["甲電路斷開時電流與磁場迅速減少。", "乙線圈出現瞬間感應電流，方向要維持原磁場。", "依正式繞線判得電流由a到b。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "磁通量正在改變，因此不會始終為零。" },
      B: { verdict: "incorrect", reason: "方向雖對，但感應電流不會一直穩定存在。" },
      C: { verdict: "incorrect", reason: "既非穩定電流，方向也不符楞次定律。" },
      D: { verdict: "correct", reason: "只在斷開瞬間出現由a到b的電流。" },
      E: { verdict: "incorrect", reason: "瞬間性正確，但方向應由a到b。" }
    },
    takeaway: "感應電流存在於磁通量改變期間，不是永久電流。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-88-45": {
    encouragement: "圓柱表面的法線就是通過圓心的半徑，每次折射都要以當地半徑判斷。",
    keyIdea: "入玻璃向法線偏、出玻璃離法線偏；正式圖C符合兩次折射。",
    steps: ["在左側界面由空氣進玻璃，光線靠近通過圓心的法線。", "在右側由玻璃回空氣，光線離開當地法線。", "逐圖比對後只有C兩次方向皆正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "入射時沒有向法線偏折。" },
      B: { verdict: "incorrect", reason: "第一界面的偏折方向畫反。" },
      C: { verdict: "correct", reason: "進入靠法線、離開遠法線，且光路連續。" },
      D: { verdict: "incorrect", reason: "出射時朝法線偏，與玻璃進空氣相反。" },
      E: { verdict: "incorrect", reason: "斜入射穿越曲面卻完全不偏折，不符合題圖。" }
    },
    takeaway: "曲面折射的法線不是固定方向，而是該點的半徑。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-38": {
    encouragement: "彈簧秤讀數等於重量減浮力；浮力只看排開液體的重量。",
    keyIdea: "1號在低密度上層，浮力較小；2、3排開的高密度液體總量相同。",
    steps: ["三鋁塊重量相同，讀數差異來自浮力。", "正式圖中1號受較小浮力，所以W₁較大。", "2、3雖深度不同，但排開液體情況相同，浮力相等，故W₂＝W₃。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1號與另外兩塊所受浮力不同。" },
      B: { verdict: "correct", reason: "1號浮力較小，而2、3浮力相同，所以W₁＞W₂＝W₃。" },
      C: { verdict: "incorrect", reason: "完全浸沒後，深度本身不改變浮力，W₂不大於W₃。" },
      D: { verdict: "incorrect", reason: "1號浮力較小，秤讀數應較大而非較小。" },
      E: { verdict: "incorrect", reason: "讀數不會僅因放得更深就依序變小。" }
    },
    takeaway: "完全浸沒時，浮力與液體密度、物體體積有關，和深度無關。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-39": {
    encouragement: "沿著相圖的0°C直線從高壓往低壓走，依序看穿過哪些區域。",
    keyIdea: "在0°C降壓會由液態進入固態，繼續降到三相點以下再進入氣態。",
    steps: ["10大氣壓、0°C位於液態區。", "降低壓力先穿越液固邊界成固態。", "再降到極低壓穿越昇華線成氣態。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "起始狀態不是固態，且最後會進入氣態。" },
      B: { verdict: "incorrect", reason: "漏掉起始液態階段。" },
      C: { verdict: "incorrect", reason: "0°C降壓會先進入固態，不是直接氣化。" },
      D: { verdict: "incorrect", reason: "液固先後次序顛倒。" },
      E: { verdict: "correct", reason: "沿0°C降壓依序為液態、固態、氣態。" }
    },
    takeaway: "相圖題要沿題目指定的溫度或壓力畫一條路徑。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-40": {
    encouragement: "要互看全身，只需畫兩條極限視線：眼睛對頭頂、眼睛對腳底。",
    keyIdea: "兩人的全身視線穿過牆面的範圍，正式圖落在b到d之間。",
    steps: ["由張三眼睛連到兒子頭頂與腳底，標出牆上交點。", "再由兒子眼睛連到張三頭頂與腳底。", "涵蓋四條極限視線的最小共同窗段為bd。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "ae範圍過大，不是最小窗子。" },
      B: { verdict: "incorrect", reason: "ad向上多開了一段。" },
      C: { verdict: "incorrect", reason: "be向下多開了一段。" },
      D: { verdict: "correct", reason: "bd恰好涵蓋雙方看到對方全身所需的極限視線。" },
      E: { verdict: "incorrect", reason: "cd太短，會漏掉上方視線。" }
    },
    takeaway: "視線題用直線連接眼睛與要看到的端點。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-45": {
    encouragement: "拆掉並聯支路後，電源電壓不變，但總電流會減少。",
    keyIdea: "理想伏特計量電源兩端電壓；安培計量總電流。",
    steps: ["甲電阻與另一支路並聯，拆掉甲後等效電阻變大。", "電池電壓固定，所以伏特計不變；總電流變小，所以安培計下降。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "安培計所量總電流會減少。" },
      B: { verdict: "incorrect", reason: "拆掉並聯支路不會使總電流增大。" },
      C: { verdict: "correct", reason: "V不變，A因等效電阻增大而減小。" },
      D: { verdict: "incorrect", reason: "理想電源使端電壓維持不變。" },
      E: { verdict: "incorrect", reason: "伏特計不變，安培計也不是不變。" }
    },
    takeaway: "並聯支路越多，等效電阻越小、總電流越大。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-89-77": {
    encouragement: "燈泡需要3 V，所以兩顆1.5 V電池要同方向串聯，電路也必須閉合。",
    keyIdea: "正確接法須讓兩電池電壓相加，並讓燈泡跨接串聯電池組兩端。",
    steps: ["逐圖確認兩顆電池是否正負相接而串聯。", "再確認導線與燈泡形成閉合回路。", "正式圖A、D只是畫法不同，皆提供3 V。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩電池同向串聯，燈泡跨接總電壓3 V。" },
      B: { verdict: "incorrect", reason: "圖中電池形成並聯或接點錯誤，不能得到3 V。" },
      C: { verdict: "incorrect", reason: "兩電池極性相抵，輸出電壓不是3 V。" },
      D: { verdict: "correct", reason: "雖排列不同，仍是同向串聯且回路閉合。" },
      E: { verdict: "incorrect", reason: "電池接法使電壓不能正確相加。" }
    },
    takeaway: "串聯加電壓要接一顆正極到另一顆負極。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-90-25": {
    encouragement: "平行玻璃板會讓光側移，但出射後一定和原入射光平行。",
    keyIdea: "第一次向法線偏，第二次離法線偏；兩界面平行使方向復原。",
    steps: ["空氣進玻璃時折射角變小。", "玻璃回空氣時折射角變大到原入射角。", "正式圖E呈現平行出射與側向位移。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "入射後沒有正確向法線偏折。" },
      B: { verdict: "incorrect", reason: "出射線未與入射線平行。" },
      C: { verdict: "incorrect", reason: "兩次折射方向不符合介質轉換。" },
      D: { verdict: "incorrect", reason: "圖中出射方向與平行板特性不符。" },
      E: { verdict: "correct", reason: "板內靠法線，出板後平行原光線並產生側移。" }
    },
    takeaway: "平行板改變光的位置，不改變最後的傳播方向。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-90-29": {
    encouragement: "先等速、再柔和煞停，速度圖應先水平，再平滑降到零。",
    keyIdea: "等速時v固定；煞車時v連續減少；停車後v為0。",
    steps: ["高速公路等速階段畫水平線。", "緩緩煞車代表速度連續下降而非瞬間掉到0。", "正式圖A符合兩階段。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "先維持正速度，再平滑減速至0。" },
      B: { verdict: "incorrect", reason: "先加速再減速，與起初等速不符。" },
      C: { verdict: "incorrect", reason: "先由0加速到固定速度，次序相反。" },
      D: { verdict: "incorrect", reason: "先靜止再加速，不是接近收費站煞停。" }
    },
    takeaway: "v-t圖的高度是速度，斜率才是加速度。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-90-45": {
    encouragement: "R₃變成零就是一條導線，先看它把哪些點接成同電位。",
    keyIdea: "R₃短路後改變分壓，使R₁兩端電位差增大，因此I與V都增大。",
    steps: ["依正式電路，R₃原先參與右側分壓；變為0後其兩端等電位。", "a、b間電位差因此增加。", "R₁電阻不變，I＝V/R₁也隨之增加。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "V增加且R₁固定，所以I也增加。" },
      B: { verdict: "incorrect", reason: "I變大時，固定R₁兩端的V不會反而變小。" },
      C: { verdict: "incorrect", reason: "V變大會使R₁電流變大，不是變小。" },
      D: { verdict: "incorrect", reason: "兩個量都不會減少。" },
      E: { verdict: "incorrect", reason: "R₁固定而V改變，I不可能維持不變。" }
    },
    takeaway: "零電阻可視為導線，導線相連處電位相同。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-92-36": {
    encouragement: "這題同時有水面與圓杯側面的折射，要分兩次想。",
    keyIdea: "水下部分看起來上移；圓弧杯壁又有放大變形，正式圖A同時呈現兩者。",
    steps: ["由水面看水下物體，視深較淺，所以棒的水下部分在水面處看似折起。", "由彎曲杯側觀看還會產生橫向放大，使水下棒看起來較粗。", "正式圖A的折向與粗細變化均符合。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水下棒上移折起，且經圓杯側面看來較粗。" },
      B: { verdict: "incorrect", reason: "折斷方向或粗細變化與水面、杯壁折射不符。" },
      C: { verdict: "incorrect", reason: "把水下部分畫向錯誤方向偏移。" },
      D: { verdict: "incorrect", reason: "未同時正確呈現視深變淺與杯壁放大。" }
    },
    takeaway: "多介面光學題要逐個界面追光，不要一次猜結果。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-92-37": {
    encouragement: "觸電的必要條件是火線接到外殼，而接地保護又中斷。",
    keyIdea: "乙通路使火線接外殼；甲斷路使外殼未有效接地；丙斷路使保護路徑中斷。",
    steps: ["人碰外殼且站地面，若外殼帶電就可能有電流經人體入地。", "正式圖中乙接通會讓外殼碰到火線。", "甲、丙都斷路時沒有安全接地旁路，所以B有危險。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "雖有故障接點，但接地通路完整，電流優先走低阻接地線。" },
      B: { verdict: "correct", reason: "外殼接火線且接地保護斷掉，人體可能成為通路。" },
      C: { verdict: "incorrect", reason: "乙斷路，火線未接到金屬外殼。" },
      D: { verdict: "incorrect", reason: "乙斷路，所以外殼不會因該故障帶火線電位。" }
    },
    takeaway: "接地線的作用是讓漏電走低阻路徑，不走人體。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-94-32": {
    encouragement: "每0.02秒打一點，等距直線就是速度大小、方向都不變。",
    keyIdea: "合力為零等同加速度為零，也就是速度向量不變。",
    steps: ["逐段比較相鄰點的距離與行進方向。", "正式圖中只有丙段點距相等且方向保持直線。", "所以丙段合力為零。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲段點距改變，速率正在變化。" },
      B: { verdict: "incorrect", reason: "乙段運動方向改變，存在加速度。" },
      C: { verdict: "correct", reason: "丙段等時等距且同方向，速度不變。" },
      D: { verdict: "incorrect", reason: "丁段點距或方向有變化。" },
      E: { verdict: "incorrect", reason: "戊段不是固定速度向量。" }
    },
    takeaway: "軌跡打點要同時看點距與轉彎，兩者都不變才是零合力。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-95-62": {
    encouragement: "先看活門方向判吸入，再用右手定則判甲正乙負時活塞往哪裡走。",
    keyIdea: "左活門只向外、右活門只向內；活塞下移使幫浦容積增大、壓力降低而吸血。",
    steps: ["正式圖顯示血液應由右活門吸入、左活門推出。", "甲正乙負時，依線圈電流與下方N極磁鐵判得活塞向下。", "活塞下移使幫浦內壓力降低，因此將血液吸入。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "活門方向相反：右側吸入、左側推出。" },
      B: { verdict: "incorrect", reason: "甲正乙負時活塞方向的判讀與正式線圈、磁極配置不符此敘述。" },
      C: { verdict: "correct", reason: "甲正乙負造成吸入行程，幫浦內壓下降而吸血。" },
      D: { verdict: "incorrect", reason: "反接時是推出行程，幫浦內壓力不會降低。" }
    },
    takeaway: "幫浦吸入時，腔體體積增加、內壓降低。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-96-15": {
    encouragement: "斜拋到最高點時只剩水平速度，所以動能最小但不會變成零。",
    keyIdea: "水平速度固定，鉛直速度先降到0再反向增大，總動能呈開口向上的曲線。",
    steps: ["上升時鉛直速率減小，動能下降。", "最高點仍有水平速度，動能有大於0的最低值。", "下降時鉛直速率增大，動能再上升；正式圖D符合。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "動能不會隨時間一路線性減到零。" },
      B: { verdict: "incorrect", reason: "動能不是全程固定。" },
      C: { verdict: "incorrect", reason: "曲線最低點到0，忽略最高點仍有水平動能。" },
      D: { verdict: "correct", reason: "先降後升，且最低值大於0。" }
    },
    takeaway: "斜拋最高點是鉛直速度為零，不是整體速度為零。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-96-62": {
    encouragement: "半週期後兩個行進波都上下顛倒，相加出的駐波也整體顛倒。",
    keyIdea: "經T/2每個波相位增加π，位移變號；節點位置不變。",
    steps: ["甲、乙兩波在T/2後各自變成原波形的上下反相。", "相加後丙的節點仍在原處，波腹則由上變下、由下變上。", "正式圖B就是丙的上下顛倒。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "波形與t＝0相同，應是經過整個週期才出現。" },
      B: { verdict: "correct", reason: "節點不動，所有波腹位移正負互換。" },
      C: { verdict: "incorrect", reason: "圖中節點位置改變，不是同一駐波。" },
      D: { verdict: "incorrect", reason: "畫成全在平衡線，並非一般T/2時刻。" }
    },
    takeaway: "駐波不向前搬移；半週期後只會上下反相。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-97-65": {
    encouragement: "軌道光滑就用力學能守恆；高度越高，速率越小。",
    keyIdea: "P到Q到M高度上升，所以速率遞減；Q比P高R。",
    steps: ["P點速率為2√(gR)，所以vP²＝4gR。", "P到Q上升R，能量守恆得vQ²＝4gR−2gR＝2gR。", "因此向心力mvQ²/R＝2mg，且P、Q、M速率依序減小。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高度不同，動能與速率不會相等。" },
      B: { verdict: "incorrect", reason: "上升時位能增加，速率應減小。" },
      C: { verdict: "correct", reason: "P、Q、M高度依序增加，所以速率依序減小。" },
      D: { verdict: "incorrect", reason: "Q點v²＝2gR，向心力不是4mg。" },
      E: { verdict: "correct", reason: "mv²/R＝m(2gR)/R＝2mg。" }
    },
    takeaway: "先用能量求速度，再代向心力公式，步驟最穩。",
    reviewStatus: "approved", reviewerRole: "physics"
  }
});
