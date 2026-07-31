(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-98-8": {
    encouragement: "小球碰到一端後會帶上同號電，再被推向另一端；這個過程會不斷重複。",
    keyIdea: "金屬小球先受感應吸引，接觸後帶同號電而被排斥，於兩金屬鐘間往返。",
    steps: [
      "帶電雲使避雷針端A與接地端B出現電位差。",
      "中性小球C先因靜電感應被其中一端吸引。",
      "接觸後小球取得同號電荷，隨即被該端排斥並被另一端吸引。",
      "它在A、B間反覆交換電荷，因此來回擺動撞擊兩鐘。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A、B間出現電位差後，小球會受靜電力作用，不會一直靜止。" },
      B: { verdict: "correct", reason: "小球接觸一端後帶同號電而被排斥，再被另一端吸引，所以來回撞擊。" },
      C: { verdict: "incorrect", reason: "小球碰A後會帶上與A同號的電荷，隨即受排斥，不會被永久吸住。" },
      D: { verdict: "incorrect", reason: "小球碰B後同樣會因取得同號電荷而離開，不會停在B上。" }
    },
    takeaway: "導體接觸帶電體後可能由吸引變成排斥，這能形成反覆擺動。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-9": {
    encouragement: "帶負電的雲會把電子推向避雷針下端，驗電器兩球取得同號負電後就會張開。",
    keyIdea: "同號電荷互相排斥；空氣不導電時，驗電器上的電荷不易流失。",
    steps: [
      "負電雲接近時，靜電感應使避雷針系統中的電子往下端移動。",
      "尖端放電後，與A相連的驗電器D累積負電。",
      "兩個小球都帶負電，因此互相排斥而分離。",
      "周圍空氣不導電，電荷不會迅速消失，所以小球保持張開。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩球同帶負電而互斥，且空氣不導電使電荷保留，所以持續張開。" },
      B: { verdict: "incorrect", reason: "帶負電雲造成電子往驗電器端聚集，兩球不是帶正電。" },
      C: { verdict: "incorrect", reason: "兩球雖帶負電，但題設空氣不導電，不會很快失去電荷而重新接觸。" },
      D: { verdict: "incorrect", reason: "兩球的電性判斷錯誤，而且也不會在張開後立刻恢復下垂。" }
    },
    takeaway: "驗電器張開表示兩葉或兩球帶同號電；是否維持張開要看電荷能否流失。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-45": {
    encouragement: "看位置—時間圖的斜率就是速度；完整一週期回到原位，所以平均速度一定為零。",
    keyIdea: "週期運動一週期位移為零；圖中|x|＜2 m的線段斜率量值固定。",
    steps: [
      "質點每完成一個週期都回到相同位置。",
      "平均速度等於總位移除以時間，因此任一完整週期平均速度為零。",
      "位置—時間圖的斜率代表速度。",
      "在|x|＜2 m區段圖線為固定斜率的直線，所以速率固定。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "任一完整週期的起點與終點相同，位移為零，所以平均速度為零。" },
      B: { verdict: "incorrect", reason: "一週期後動能回到原值，依功能定理外力淨功為零，不是大於零。" },
      C: { verdict: "correct", reason: "圖中|x|＜2 m時位置—時間線段斜率量值固定，表示等速率運動。" },
      D: { verdict: "incorrect", reason: "質點會反向且圖線斜率會改變，因此不是全程等速度。" }
    },
    takeaway: "位置—時間圖看斜率判速度；週期運動完整一圈的位移為零。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-53": {
    encouragement: "光線愈接近光纖軸，打到側壁時就愈斜，入射角反而愈大，較容易全反射。",
    keyIdea: "全反射需由高折射率射向低折射率，且側壁入射角大於臨界角。",
    steps: [
      "光由玻璃柱芯射向較低折射率的外層，具備全反射的介質條件。",
      "θ是光線與中心軸的夾角。",
      "θ愈小，光線打到側壁時與法線的夾角愈大。",
      "當此入射角超過臨界角，光才在柱芯內全反射。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "玻璃到低折射率外層具備全反射條件，並非一定不會發生。" },
      B: { verdict: "incorrect", reason: "θ過大時側壁入射角可能低於臨界角，光會漏出。" },
      C: { verdict: "correct", reason: "θ夠小時，光在側壁的入射角夠大，才能超過臨界角而全反射。" },
      D: { verdict: "incorrect", reason: "θ愈大，側壁入射角反而愈小，不利於全反射。" }
    },
    takeaway: "題目若給的是與軸的夾角，要先換想成與側壁法線的入射角。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-54": {
    encouragement: "找曲線向左偏得最快的區段；同樣增加100公尺，聲速減少最多就是答案。",
    keyIdea: "聲速隨深度下降最快，對應聲速—深度曲線負斜率量值最大的區段。",
    steps: [
      "比較四個100公尺深度區間的聲速變化。",
      "正式圖中靠近海面後的100至200公尺曲線向低聲速方向下降最陡。",
      "400公尺以下曲線逐漸變平，下降幅度較小。",
      "因此100至200公尺的聲速下降最快。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "圖中100至200公尺區段的聲速減少量最大，負斜率最陡。" },
      B: { verdict: "incorrect", reason: "400至500公尺仍在下降，但曲線斜率量值已較小。" },
      C: { verdict: "incorrect", reason: "700至800公尺接近聲速最低處，曲線較平，下降不快。" },
      D: { verdict: "incorrect", reason: "1000公尺附近聲速已開始受壓力影響而回升，不是下降最快。" }
    },
    takeaway: "圖表問「變化最快」時，比的是斜率大小，不是數值本身最大或最小。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-55": {
    encouragement: "聲波道中心就是聲速最低的位置；聲波向慢速區折彎，便會一直回到中心附近。",
    keyIdea: "深海聲波道的中心位於聲速曲線最低點，圖上約在700公尺深。",
    steps: [
      "聲波在聲速隨深度變化的海水中會連續折射。",
      "聲線會向聲速較慢的區域彎曲。",
      "能把聲音束縛在中心附近的位置，就是聲速最低點。",
      "由圖讀得最低點約在海下700公尺。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10公尺太接近海面，圖中聲速並非最低。" },
      B: { verdict: "incorrect", reason: "100公尺處聲速仍隨深度快速下降，尚未到最低點。" },
      C: { verdict: "incorrect", reason: "400公尺處曲線仍往較低聲速移動，中心更深。" },
      D: { verdict: "correct", reason: "圖中聲速最低點約在700公尺，聲波會折回此深度附近。" }
    },
    takeaway: "波導中心常對應波速的極小值，兩側折射會把波導回中心。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-27": {
    encouragement: "變壓器需要變動磁場；主線圈匝數愈多，同一電流形成的磁場愈強。",
    keyIdea: "理想螺線管磁場約與匝數密度及電流成正比，變壓器須使用交流電。",
    steps: [
      "主線圈通電後是鐵心中磁場的主要來源。",
      "相同線圈長度與電流下，匝數增加會增加匝數密度。",
      "因此主線圈產生的磁場變強。",
      "磁場隨交流電改變，才會在副線圈感應電壓。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "穩定直流只在開關瞬間改變磁通，無法持續使副線圈輸出交流電壓。" },
      B: { verdict: "correct", reason: "相同電流下主線圈匝數愈多，螺線管產生的磁場通常愈強。" },
      C: { verdict: "incorrect", reason: "交流電使磁場方向與強弱隨時間改變，方向不是固定不變。" },
      D: { verdict: "incorrect", reason: "理想變壓器副線圈匝數增加時，輸出電壓會上升而非下降。" },
      E: { verdict: "incorrect", reason: "鐵心可集中並增強磁通，塑膠不能提供相同的導磁效果。" }
    },
    takeaway: "變壓器靠的是「變動磁通」，所以穩定直流不能持續變壓。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-36": {
    encouragement: "圖線在時間軸同一側代表方向不變；上下跨過零則代表方向來回改變。",
    keyIdea: "直流電方向固定，交流電方向隨時間週期反轉。",
    steps: [
      "圖9的電流值維持在零線同一側，方向不變。",
      "因此圖9代表直流電。",
      "圖10的電流值正負交替，方向隨時間反轉。",
      "因此圖10代表交流電。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "家用插座通常提供交流電，碳鋅電池提供直流電，選項順序顛倒。" },
      B: { verdict: "incorrect", reason: "金屬導線的交、直流電都主要由電子運動形成，不是質子振動。" },
      C: { verdict: "correct", reason: "圖9電流方向固定；圖10正負交替，方向隨時間來回改變。" },
      D: { verdict: "correct", reason: "圖9是直流電的表示，圖10是交流電的表示。" },
      E: { verdict: "incorrect", reason: "一般交流頻率很高，燈泡可持續發亮，不能簡單判為一定閃爍。" }
    },
    takeaway: "電流—時間圖先看有沒有跨過零，就能判斷方向是否反轉。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-57": {
    encouragement: "先算每分鐘加熱水需要多少焦耳，再除以60秒就得到瓦特。",
    keyIdea: "熱功率P＝mcΔT/Δt，12 kg水升溫20°C每分鐘約需1.0×10⁶ J。",
    steps: [
      "每分鐘水量m＝12 kg，溫升ΔT＝45－25＝20°C。",
      "水的比熱約4200 J/(kg·°C)。",
      "每分鐘吸熱Q＝12×4200×20≈1.01×10⁶ J。",
      "功率P＝Q/60 s≈1.7×10⁴ W。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.0×10⁶是每分鐘吸收的能量量級，不是每秒的功率。" },
      B: { verdict: "incorrect", reason: "此值遠大於用mcΔT除以60秒所得的結果。" },
      C: { verdict: "correct", reason: "每分鐘約吸熱1.0×10⁶ J，除以60秒得約1.7×10⁴ W。" },
      D: { verdict: "incorrect", reason: "焦耳是能量單位，題目問的功率應使用瓦特。" },
      E: { verdict: "incorrect", reason: "1.7×10⁴焦耳仍是能量，不是功率單位。" }
    },
    takeaway: "瓦特等於焦耳/秒；若資料以每分鐘給出，最後別忘了除以60。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-99-58": {
    encouragement: "自然來回擺動會重複、會反向，因此要找有固定週期且正負交替的函數。",
    keyIdea: "簡諧式週期運動可用正弦或餘弦函數描述。",
    steps: [
      "手臂或辮子自然擺動會週期性回到相同狀態。",
      "角度會在左右兩側之間反覆變號。",
      "正弦函數α sin(βt)同時具有週期性與正負振盪。",
      "其餘函數大致單向增加，不能描述持續往返。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "二次函數會隨時間單向增大，不會週期性來回。" },
      B: { verdict: "incorrect", reason: "平方根函數沒有固定週期，也不會規律反向。" },
      C: { verdict: "correct", reason: "正弦函數在正負角度間週期變化，符合自然來回擺動。" },
      D: { verdict: "incorrect", reason: "線性函數只描述角度持續往單一方向改變。" },
      E: { verdict: "incorrect", reason: "對數函數沒有往返週期，不能呈現規律擺動。" }
    },
    takeaway: "看到規律往返、重複的運動，優先想到正弦或餘弦函數。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-34": {
    encouragement: "聲源往誰靠近，誰聽到的頻率就較高；側邊兩人沒有接近或遠離分量。",
    keyIdea: "聲源通過圓心時向b移動，b測得藍移、a測得紅移，c與d測得原頻率。",
    steps: [
      "汽車在O點瞬間速度由a指向b。",
      "聲源接近b，所以fb＞f0；遠離a，所以fa＜f0。",
      "對c、d而言，聲源速度與視線方向垂直，徑向速度為零。",
      "因此fc＝fd＝f0，且fb＞f0＞fa。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "a方向上聲源正在遠離，fa低於f0，而fc等於f0。" },
      B: { verdict: "incorrect", reason: "fa低於原頻率，fd等於原頻率，所以fa不大於fd。" },
      C: { verdict: "correct", reason: "c、d都與聲源速度方向垂直，兩者的都卜勒位移皆為零。" },
      D: { verdict: "incorrect", reason: "正確關係是fb最高、fc為f0、fa最低，不是fa大於fc。" },
      E: { verdict: "correct", reason: "聲源接近b、遠離a，因此fb＞f0＞fa。" }
    },
    takeaway: "都卜勒效應只看沿觀察方向的速度分量，垂直分量不改變頻率。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-56": {
    encouragement: "太空船只走轉移橢圓的一半；先找橢圓平均半徑，再用克卜勒定律算半週期。",
    keyIdea: "地火轉移橢圓半長軸約為地球與火星軌道半徑平均值，飛行時間約260天。",
    steps: [
      "火星週期為1.9年，由T²∝r³得火星軌道半徑約為1.9^(2/3)≈1.53倍。",
      "轉移橢圓半長軸約(1＋1.53)/2＝1.265倍地球軌道半徑。",
      "轉移軌道週期約1.265^(3/2)≈1.42年。",
      "太空船走半個橢圓，需約0.71年≈260天。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "600天超過轉移橢圓的完整週期量級，不是半程時間。" },
      B: { verdict: "incorrect", reason: "360天接近一地球年，高於算得的約260天。" },
      C: { verdict: "incorrect", reason: "300天略高於半個轉移週期的約260天。" },
      D: { verdict: "correct", reason: "依克卜勒第三定律，半個地火轉移橢圓約需0.71年，即約260天。" },
      E: { verdict: "incorrect", reason: "180天低於依轉移橢圓半長軸算得的飛行時間。" }
    },
    takeaway: "霍曼式轉移只走橢圓半圈，所以算出週期後還要除以二。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-60": {
    encouragement: "把木塊與吊桶分開畫受力圖，再把整個系統一起看，就能得到兩種正確式子。",
    keyIdea: "單獨吊桶用M₂g－T＝M₂a；整體系統用M₂g－f＝(M₁＋M₂)a。",
    steps: [
      "繩長固定且不打滑，木塊與吊桶加速度量值相同。",
      "對吊桶：向下重力減向上張力，M₂g－T＝M₂a₂。",
      "對整個系統：張力是內力相消，外力淨值為M₂g－f。",
      "所以a₁＝a₂＝(M₂g－f)/(M₁＋M₂)。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "吊桶還受到向上張力，所以加速度小於g。" },
      B: { verdict: "incorrect", reason: "此式忽略木塊所受動摩擦力f。" },
      C: { verdict: "correct", reason: "由吊桶受力M₂g－T＝M₂a₂，可得此式。" },
      D: { verdict: "incorrect", reason: "木塊的水平合力是T－f，不是M₂g－f直接作用在M₁上。" },
      E: { verdict: "correct", reason: "把兩物體視為整體，外力淨值M₂g－f除以總質量即得加速度。" }
    },
    takeaway: "分開看可保留張力；合在一起看時張力是內力，會互相消去。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-61": {
    encouragement: "功能定理逐個物體算，也能把兩物體合成系統算；張力在系統總功中會抵銷。",
    keyIdea: "木塊淨功為(T－f)s；兩物體總動能增加為(M₂g－f)s。",
    steps: [
      "木塊向左移s，張力作正功Ts，摩擦作負功－fs。",
      "所以K₁＝(T－f)s。",
      "吊桶下降s，重力作正功M₂gs，張力作負功－Ts。",
      "兩式相加，張力功抵銷，K₁＋K₂＝(M₂g－f)s。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "木塊的淨功為張力正功減摩擦負功，等於其動能增加。" },
      B: { verdict: "incorrect", reason: "M₂g不是作用在木塊上的力，而且摩擦功也不能忽略。" },
      C: { verdict: "incorrect", reason: "吊桶只受M₂g與T，木塊摩擦力不直接對吊桶作功。" },
      D: { verdict: "correct", reason: "全系統外力作功為重力功減摩擦功，等於兩物體總動能。" },
      E: { verdict: "incorrect", reason: "把兩物體視為系統後張力是內力，不能再額外減去Ts。" }
    },
    takeaway: "系統總能量式中，連接物體的內力功常會成對抵銷。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-1": {
    encouragement: "用圖上的180公里暴風半徑當尺，估出兩時刻距離，再除以12小時。",
    keyIdea: "21日14時到22日02時約移動120公里，平均速率約10 km/h。",
    steps: [
      "兩時刻相差12小時。",
      "用白色圓圈半徑180公里作比例尺。",
      "圖上兩預測位置距離約為半徑的三分之二，約120公里。",
      "平均速率約120÷12＝10 km/h。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "5 km/h代表12小時只走60公里，低於圖上比例估計。" },
      B: { verdict: "correct", reason: "圖上距離約120公里，除以12小時約為10 km/h。" },
      C: { verdict: "incorrect", reason: "20 km/h代表移動240公里，約超過圖示距離一倍。" },
      D: { verdict: "incorrect", reason: "30 km/h對應360公里，明顯大於圖上兩點間距。" },
      E: { verdict: "incorrect", reason: "40 km/h對應480公里，不符合暴風半徑比例尺。" }
    },
    takeaway: "地圖估速先找已知長度當比例尺，再用距離除以時間。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-2": {
    encouragement: "速率不變但方向改變，表示合力轉彎；直線段若愈走愈慢，平均合力就朝反方向。",
    keyIdea: "曲線等速率運動的合力垂直速度；後段直線減速的平均合力反向。",
    steps: [
      "22日02時至23日14時速率固定但路徑彎曲，速度方向持續改變。",
      "改變方向所需的加速度與瞬時速度垂直。",
      "23日14時後雖走直線，但圖上相同時間的位置間距逐漸縮短。",
      "24至26日間颱風減速，平均合力方向與速度相反。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "方向持續改變表示有加速度，合力不為零。" },
      B: { verdict: "correct", reason: "等速率曲線運動的加速度與合力指向轉彎內側，垂直瞬時速度。" },
      C: { verdict: "incorrect", reason: "直線前進不代表速度量值固定，圖上後段位置間距有變化。" },
      D: { verdict: "incorrect", reason: "後段若速度量值改變，仍有加速度與非零合力。" },
      E: { verdict: "correct", reason: "24至26日相同時間移動距離變小，表示減速，平均合力與速度反向。" }
    },
    takeaway: "等速率只保證快慢不變；路徑一彎，速度方向改變就仍有合力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-6": {
    encouragement: "感應電流只在磁通量改變時出現；先依圖定方向，再找能造成相反磁通變化的電流。",
    keyIdea: "依圖示線圈繞向，I₁正向增大或負向量值增大，都能產生指定的I₂正向感應電流。",
    steps: [
      "I₁維持定值時磁通量不變，不會有持續感應電流。",
      "依圖示磁場方向與楞次定律，I₁＞0且漸增時可產生I₂＞0。",
      "將I₁方向反轉後，若負值繼續減小，代表反向電流量值增加。",
      "此反向磁通的變化也依圖示繞向產生I₂＞0。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "I₁維持正的定值時磁通不變，I₂最後為零。" },
      B: { verdict: "correct", reason: "依圖示繞向，正向I₁逐漸增加的磁通變化會感應指定的I₂正向電流。" },
      C: { verdict: "incorrect", reason: "I₁為負且向零增加時，磁通變化方向與所需I₂方向不符。" },
      D: { verdict: "incorrect", reason: "I₁維持定值或為零都沒有磁通變化，無法持續感應I₂。" },
      E: { verdict: "correct", reason: "I₁為負且數值繼續減小，表示反向電流量值增加，依圖可產生I₂正向。" }
    },
    takeaway: "電磁感應看的是電流如何變化，不只看它當下是正還是負。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-7": {
    encouragement: "把攝氏轉成絕對溫度：－10°C約263 K，最接近圖中地球向外輻射曲線。",
    keyIdea: "圖中地球大氣向外輻射的外形與約260 K標準輻射體最接近。",
    steps: [
      "圖4提供220 K到300 K的標準輻射曲線。",
      "地球向外熱輻射的整體峰值與曲線約落在260 K附近。",
      "攝氏溫度＝絕對溫度－273。",
      "260 K約為－13°C，最接近－10°C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "270°C約543 K，遠高於圖中的標準輻射體範圍。" },
      B: { verdict: "incorrect", reason: "260°C約533 K，是把260 K誤看成攝氏260度。" },
      C: { verdict: "incorrect", reason: "100°C約373 K，仍明顯高於圖中匹配的約260 K。" },
      D: { verdict: "correct", reason: "－10°C約263 K，最接近圖中大氣向外熱輻射的標準曲線。" },
      E: { verdict: "incorrect", reason: "－100°C約173 K，低於圖示最低的220 K曲線。" }
    },
    takeaway: "熱輻射圖常用K；換成攝氏時記得減去約273。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-8": {
    encouragement: "CO₂增加會讓近地大氣保留更多熱，但向太空有效放射的位置更高、更冷。",
    keyIdea: "溫室氣體增加使大氣內長期平均溫度上升，而向外放射層的平均溫度下降。",
    steps: [
      "CO₂增加會吸收更多地面向上的紅外線。",
      "近地大氣得到並保留更多能量，所以ΔT內＞0。",
      "向太空有效放射的位置移到較高的大氣層。",
      "高層通常較冷，因此模型預測ΔT外＜0。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CO₂增強溫室效應後，近地大氣不是降溫。" },
      B: { verdict: "correct", reason: "更多紅外線被大氣吸收，使大氣內長期平均溫度上升。" },
      C: { verdict: "incorrect", reason: "模型曲線顯示CO₂增加會改變內外溫度，不會都維持零變化。" },
      D: { verdict: "incorrect", reason: "有效向外放射高度升高至較冷處，外部代表溫度不會上升。" },
      E: { verdict: "correct", reason: "向太空放射的有效層位於更高、更冷處，所以ΔT外＜0。" }
    },
    takeaway: "溫室效應可同時造成低層增暖與有效放射高層變冷。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-49": {
    encouragement: "直接在40秒圖上數週期：小波約每秒一次，大波約每10秒一次。",
    keyIdea: "頻率等於週期倒數；高頻成分約1 Hz，低頻成分約0.1 Hz。",
    steps: [
      "高頻小振幅波大約每1秒完成一次。",
      "所以fH≈1/1＝1 Hz。",
      "低頻大振幅波大約每10秒完成一次。",
      "所以fS≈1/10＝0.1 Hz。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10 Hz代表每0.1秒一次，圖上的小波沒有如此密集。" },
      B: { verdict: "correct", reason: "高頻小波週期約1秒，因此頻率約1 Hz。" },
      C: { verdict: "incorrect", reason: "低頻大波週期約10秒，不是1秒。" },
      D: { verdict: "correct", reason: "低頻大波約10秒一次，頻率約0.1 Hz。" },
      E: { verdict: "incorrect", reason: "10 Hz比圖中低頻成分快約一百倍。" }
    },
    takeaway: "由圖估頻率：先量相鄰波峰的時間差T，再算f＝1/T。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-111-50": {
    encouragement: "血液朝感測器靠近會使反射光頻率升高；同介質波速不變，所以波長縮短。",
    keyIdea: "反射體接近造成藍移：fR＞fI、TR＜TI、λR＜λI。",
    steps: [
      "血液中的物質朝感測器移動，反射波產生都卜勒藍移。",
      "因此反射頻率fR大於入射頻率fI。",
      "兩波在同一介質中，波速vI＝vR。",
      "由λ＝v/f，反射波頻率較高，所以λR較短。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同一介質中的入射與反射光波速相同，不是vI＞vR。" },
      B: { verdict: "incorrect", reason: "反射體接近感測器造成藍移，應為fR＞fI。" },
      C: { verdict: "incorrect", reason: "頻率較高的反射波週期較短，所以TI＞TR。" },
      D: { verdict: "correct", reason: "同波速下反射波頻率較高、波長較短，因此λI＞λR。" },
      E: { verdict: "incorrect", reason: "頻率因都卜勒效應改變，同波速下兩者波長不相等。" }
    },
    takeaway: "同介質中波速固定；頻率上升時，波長與週期都會下降。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-30": {
    encouragement: "要看見原子層間距，探測波長必須和原子尺度差不多。",
    keyIdea: "晶體原子間距約0.1 nm，也就是10⁻¹⁰ m，X光波長需同量級才能明顯繞射。",
    steps: [
      "干涉與繞射最明顯時，波長通常和結構間距相近。",
      "晶體內原子層間距約為0.1 nm。",
      "0.1 nm＝10⁻¹×10⁻⁹ m＝10⁻¹⁰ m。",
      "所以合適X光波長的數量級是10⁻¹⁰ m。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁻⁴ m是毫米以下尺度，遠大於原子間距。" },
      B: { verdict: "incorrect", reason: "10⁻⁷ m約百奈米，仍比晶體原子間距大約千倍。" },
      C: { verdict: "correct", reason: "10⁻¹⁰ m約0.1 nm，和晶體原子層間距同量級。" },
      D: { verdict: "incorrect", reason: "10⁻¹³ m比原子尺度小約千倍，不是最合適量級。" },
      E: { verdict: "incorrect", reason: "10⁻¹⁶ m接近核內更小尺度，遠小於晶格間距。" }
    },
    takeaway: "探測結構時，波長要和目標尺寸接近；原子尺度約10⁻¹⁰ m。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-32": {
    encouragement: "R₂位在血流下游的反方向；紅血球遠離R₂，反射頻率就降低。",
    keyIdea: "紅血球向右流動，對左下方R₂而言是遠離，因此f₂＜f。",
    steps: [
      "紅血球隨血液向右移動。",
      "反射後傳向R₂的方向指向左下方。",
      "紅血球相對R₂具有遠離的速度分量。",
      "遠離造成都卜勒紅移，所以R₂收到的頻率f₂小於原頻率f。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "R₁、R₂位於不同方向，紅血球相對兩者的徑向速度不同，頻率不必相等。" },
      B: { verdict: "correct", reason: "紅血球沿血流遠離R₂，使R₂接收的反射波頻率降低。" },
      C: { verdict: "incorrect", reason: "紅血球相對R₂有遠離分量，f₂不會維持原頻率。" },
      D: { verdict: "incorrect", reason: "圖中R₁與R₂的頻率大小不能由此式正確描述。" },
      E: { verdict: "incorrect", reason: "f₂應低於f，而不是高於f。" }
    },
    takeaway: "都卜勒題先畫出移動物體相對接收器是靠近還是遠離。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-33": {
    encouragement: "終端速率時向上阻力等於重量；質量比1：4：9剛好是速率比1：2：3的平方。",
    keyIdea: "終端速率滿足mg＝αv^β；由m∝v²可得β＝2。",
    steps: [
      "終端速率時加速度為零，所以F＝mg。",
      "三球質量比為1：4：9，終端速率比為1：2：3。",
      "可看出質量比等於速率比的平方。",
      "由mg＝αv^β且α固定，得到β＝2。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "β＝－1會使速率愈大阻力反而愈小，不符合資料。" },
      B: { verdict: "incorrect", reason: "β＝0表示阻力與速率無關，無法解釋不同終端速率。" },
      C: { verdict: "incorrect", reason: "β＝1/2會使質量與速率平方根成正比，和1：4：9不符。" },
      D: { verdict: "incorrect", reason: "β＝1會預測質量比等於速率比1：2：3。" },
      E: { verdict: "correct", reason: "v比1：2：3平方後正是m比1：4：9，所以β＝2。" }
    },
    takeaway: "看到成對比例資料，可試著平方或開根號找出冪次關係。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-35": {
    encouragement: "兩系統總能量都守恆，但能量最後存在哪裡不同：氣體升溫，理想彈簧則可全數回到機械能。",
    keyIdea: "汽缸振動衰減使部分機械能成為內能，h′＜h；理想等溫彈簧可回到h。",
    steps: [
      "重物壓下汽缸時，重力作功使氣體內能增加。",
      "汽缸最後停止，部分能量留在熱能中，不能全轉回位能，所以h′＜h。",
      "若理想彈簧與重物溫度不變，沒有能量耗散為熱。",
      "機械能守恆使它在最高點回到原高度h，因此h″＝h。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "總能量守恆不代表機械能全都保留，汽缸有能量轉成內能。" },
      B: { verdict: "incorrect", reason: "絕熱汽缸仍遵守總能量守恆，只是機械能轉成了內能。" },
      C: { verdict: "correct", reason: "汽缸內能增加後無法全部轉回活塞位能，所以最後高度h′低於h。" },
      D: { verdict: "incorrect", reason: "若彈簧溫度上升，部分能量成為熱能，最高點不一定回到h。" },
      E: { verdict: "correct", reason: "溫度始終不變表示無熱耗散，理想彈簧的機械能可使頂端回到h。" }
    },
    takeaway: "能量守恆包含熱能；機械能是否守恆要看有沒有轉成內能。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-36": {
    encouragement: "乙磁鐵能懸在甲上方，主要磁力必須向上，也就是兩磁鐵互相排斥。",
    keyIdea: "相對兩面為同極而排斥；直桿的正向力即可約束水平位置，不必依靠摩擦。",
    steps: [
      "乙受到向下重力，若要與甲分開懸持，需要向上的磁力。",
      "因此甲、乙相對表面為同極，磁力是排斥。",
      "乙雖因質量與磁力分布不均而傾斜，兩直桿仍可提供法向支撐。",
      "這些正向力可平衡側向作用，不必要求摩擦力存在。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "吸引力會把乙拉向下方甲磁鐵，無法提供懸持所需的向上力。" },
      B: { verdict: "correct", reason: "甲乙間排斥力支撐乙，直桿正向力即可約束，無摩擦也能平衡。" },
      C: { verdict: "incorrect", reason: "同一對相對磁極使整體呈排斥，不是左吸右斥。" },
      D: { verdict: "incorrect", reason: "整體磁力須向上排斥，不能解讀成右側主要為吸引。" },
      E: { verdict: "incorrect", reason: "兩直桿的法向力已能提供水平約束，摩擦不是維持靜止的必要條件。" }
    },
    takeaway: "受力平衡先看需要哪個方向的力，再判斷磁鐵應吸引還是排斥。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-38": {
    encouragement: "發電功率取決於每秒流入多少水，以及把水力轉成電力的效率。",
    keyIdea: "P₁＝ε μ u_w；已知水的單位質量動能u_w後，仍需質量流率μ與效率ε。",
    steps: [
      "每秒流入水質量為μ。",
      "每公斤水可提供的水力能為u_w。",
      "水力輸入功率為μu_w。",
      "乘上轉電效率ε得P₁＝εμu_w，所以要知道丙、丁。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "燃煤耗煤參數甲與單部水力發電機功率無直接關係。" },
      B: { verdict: "correct", reason: "丙是水質量流率、丁是轉換效率，兩者共同決定輸出功率。" },
      C: { verdict: "incorrect", reason: "燃煤CO₂參數乙與每日發電時間戊不能決定瞬時發電功率。" },
      D: { verdict: "incorrect", reason: "質量流率丙重要，但每日運轉時間戊決定能量而非功率。" },
      E: { verdict: "incorrect", reason: "效率丁重要，但只有每日時間戊仍缺少每秒水量。" }
    },
    takeaway: "功率看每秒能量；總能量才需要再乘上運轉時間。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-112-39": {
    encouragement: "要算每度電少排多少CO₂，只需串起「每能量耗多少煤」和「每煤排多少CO₂」。",
    keyIdea: "燃煤每單位電能排碳量＝耗煤量/電能×CO₂量/煤量，即參數甲×乙。",
    steps: [
      "甲表示燃煤發出每單位電能所需的煤質量。",
      "乙表示每單位煤質量發電時排放的CO₂質量。",
      "兩者相乘就得到每單位電能的CO₂排放量。",
      "水力發電取代該電能時，這就是可減少的排放量。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲乘乙可直接得到燃煤每單位電能的CO₂排放量。" },
      B: { verdict: "incorrect", reason: "效率丁屬水力發電參數，不能取代每電能耗煤量甲。" },
      C: { verdict: "incorrect", reason: "水流量丙與燃煤每單位電能排碳量的換算無關。" },
      D: { verdict: "incorrect", reason: "乙、丁、戊缺少每單位電能耗煤量甲。" },
      E: { verdict: "incorrect", reason: "丁、戊、己可估電廠規模，但題問每單位電能，不需這些參數。" }
    },
    takeaway: "單位分析很有用：kg煤/J乘kgCO₂/kg煤，就剩kgCO₂/J。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-21": {
    encouragement: "眼睛和相機都用凸透鏡會聚光線，在感光面形成倒立的實像。",
    keyIdea: "遠物經會聚透鏡後，在視網膜或感光元件上形成倒立實像。",
    steps: [
      "角膜與水晶體共同使入眼光線折射並會聚。",
      "相機鏡頭也利用折射把光線會聚到感光元件。",
      "光線實際會聚在屏幕上，因此形成實像。",
      "凸透鏡對遠方物體形成倒立實像。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "眼球成像主要靠角膜與水晶體的折射，不是干涉。" },
      B: { verdict: "incorrect", reason: "眼鏡以透鏡折射改變會聚位置，不是利用繞射。" },
      C: { verdict: "incorrect", reason: "提高感光度只改變亮度反應，不能把焦點移到感光元件上。" },
      D: { verdict: "correct", reason: "相機感光元件與眼睛視網膜上都形成倒立實像。" },
      E: { verdict: "incorrect", reason: "眼睛主要調整水晶體曲率來對焦，不是只靠縮放瞳孔。" }
    },
    takeaway: "瞳孔控制進光量，水晶體調焦；兩者功能不要混在一起。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-22": {
    encouragement: "X光光子能量E＝hf，所以20 MeV是4 MeV的5倍，頻率也正好5倍。",
    keyIdea: "X光皆以光速傳播且能穿透15 cm；質子、電子與α粒子則是不同粒子束。",
    steps: [
      "光子能量與頻率成正比，E＝hf。",
      "20÷4＝5，所以20 MeV X光頻率是4 MeV X光的5倍。",
      "光子在組織中仍以介質中的光速傳播，質子速度不等於光速。",
      "由吸收劑量圖可見，延伸到15 cm的只有兩種X光束。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "質子束粒子是單一質子，α粒子則含2質子與2中子，兩者不同。" },
      B: { verdict: "incorrect", reason: "射束能量不同不能直接推出粒子數密度必為37.5倍。" },
      C: { verdict: "correct", reason: "由E＝hf，光子能量5倍時頻率也為5倍。" },
      D: { verdict: "incorrect", reason: "光子以光速傳播，150 MeV質子仍有靜質量，速率小於光速。" },
      E: { verdict: "correct", reason: "圖中電子束與質子束在15 cm前停止，只有X光仍能穿透。" }
    },
    takeaway: "光子能量和頻率成正比；有靜質量的粒子再快也不等於光速。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-23": {
    encouragement: "選治療射束要讓能量集中在腫瘤深度，並盡量少傷害前後正常組織。",
    keyIdea: "質子束在約11 cm有尖峰；20 MeV X光在2至10 cm維持較高劑量。",
    steps: [
      "電子束能量集中在表淺約0至2 cm，無法有效到10 cm。",
      "質子束在約10至11 cm出現明顯布拉格峰，適合該深度腫瘤。",
      "4 MeV X光在表面劑量高且隨深度快速下降。",
      "20 MeV X光在2至10 cm的吸收劑量較合適且較均勻。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電子束約在2 cm內就大幅衰減，無法有效治療10 cm深處。" },
      B: { verdict: "correct", reason: "質子束的高劑量尖峰落在約10至11 cm，可集中殺傷該處癌細胞。" },
      C: { verdict: "incorrect", reason: "0至2 cm表淺區使用電子束更能集中能量，4 MeV X光會繼續穿透正常組織。" },
      D: { verdict: "correct", reason: "20 MeV X光在2至10 cm仍維持相對高劑量，適合此深度範圍。" },
      E: { verdict: "incorrect", reason: "電子束不到3至8 cm深處，而質子束峰值又在約11 cm，兩者組合不理想。" }
    },
    takeaway: "讀治療曲線時，不只看能不能到達，也要看能量是否集中在腫瘤位置。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-26": {
    encouragement: "在圖上找安全氣囊氣壓第一次到達保護門檻的交點，再讀時間軸。",
    keyIdea: "氣囊壓力曲線約在30 ms首次達到圖示保護駕駛人的氣壓。",
    steps: [
      "保護效果要等氣囊內氣壓達到圖中的需求門檻。",
      "從門檻水平位置找到與充氣曲線的第一次交點。",
      "再向下投影到時間軸。",
      "讀值約為30 ms。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10 ms時氣囊才剛開始充氣，氣壓仍低於保護門檻。" },
      B: { verdict: "incorrect", reason: "20 ms時曲線尚未到達所需氣壓。" },
      C: { verdict: "correct", reason: "正式圖中曲線第一次到達保護氣壓約在30 ms。" },
      D: { verdict: "incorrect", reason: "40 ms已晚於第一次達標時間，題目問至少需時。" },
      E: { verdict: "incorrect", reason: "50 ms更晚於曲線到達門檻的時間。" }
    },
    takeaway: "圖表問「至少多久」時，要找第一次跨過門檻的時刻。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-44": {
    encouragement: "楞次定律會阻礙磁鐵的運動；磁鐵一路向下，所以線圈若施力就一路向上。",
    keyIdea: "感應電流方向在進入與離開時反轉，但磁力始終阻礙向下運動。",
    steps: [
      "磁鐵接近環圈時磁通增加，感應作用排斥磁鐵。",
      "磁鐵穿過後離開時磁通減少，感應作用改為吸引磁鐵。",
      "兩階段的電流方向因此不同，量值也先增後減再反向。",
      "但兩種磁力都阻礙磁鐵向下，所以方向皆向上。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "感應電流量值不會全程持續增加，接近中心後會減弱並反向。" },
      B: { verdict: "incorrect", reason: "電流也不會全程持續減小，而是隨磁通變化率改變。" },
      C: { verdict: "incorrect", reason: "磁鐵由接近變成離開時，感應電流方向會反轉。" },
      D: { verdict: "incorrect", reason: "感應電流不會在整個穿越過程都維持同一逆時針方向。" },
      E: { verdict: "correct", reason: "感應磁力依楞次定律阻礙向下運動，因此對磁鐵的力始終向上。" }
    },
    takeaway: "感應電流方向可能反轉，但磁力的共同目標始終是阻礙原來的磁通變化。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-113-45": {
    encouragement: "感應電流看磁通變化率；速度愈快變化愈快，電流就愈大。",
    keyIdea: "磁鐵只穿過甲環圈；改乙面積不影響磁通，增大速度會增大感應電流。",
    steps: [
      "感應電流I＝|dΦ/dt|/R。",
      "磁鐵磁力線穿過甲環圈，因此改變甲面積會改變磁通。",
      "乙環圈遠離磁鐵且未被其磁力線穿過，改變乙面積不影響磁通變化。",
      "磁鐵速度增加時，同一位置的磁通變化率增加，所以I增大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "增大甲環圈面積會改變穿過的磁通與感應電流。" },
      B: { verdict: "correct", reason: "磁鐵磁通主要穿過甲，改變乙環圈面積不改變感應電流。" },
      C: { verdict: "incorrect", reason: "速度愈快，磁通變化率愈大，I不會減小。" },
      D: { verdict: "correct", reason: "在同一距離處提高磁鐵速度會提高|dΦ/dt|，所以I增大。" },
      E: { verdict: "incorrect", reason: "線圈圈數加倍會增加磁通鏈結與感應電動勢，I會改變。" }
    },
    takeaway: "法拉第定律抓三件事：磁通改多少、多久改完、線圈有幾圈。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-114-27": {
    encouragement: "無線充電不是電線偷偷連過去，而是變動磁場穿過手機線圈並產生感應電流。",
    keyIdea: "兩線圈以互感傳能，充電器線圈的變動磁場與磁力線會穿過手機線圈。",
    steps: [
      "充電器線圈中的電流快速隨時間變化。",
      "它產生隨時間變動的磁場。",
      "部分磁力線穿過手機線圈，使手機線圈磁通量改變。",
      "手機線圈因此產生感應電流，經電路為電池充電。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "手機與充電器沒有導線相連，能量不是靠導線電流直接流過去。" },
      B: { verdict: "incorrect", reason: "充電器電流快速變化，使手機線圈周圍磁場也隨時間變化。" },
      C: { verdict: "incorrect", reason: "線圈電阻與電路轉換會耗能，手機獲得能量小於充電器輸出。" },
      D: { verdict: "correct", reason: "兩線圈靠近對齊，充電器產生的磁力線會穿過手機線圈形成互感。" },
      E: { verdict: "incorrect", reason: "手機線圈也有電流與電阻，同樣可能因焦耳熱而升溫。" }
    },
    takeaway: "無線充電靠的是電磁感應，仍會有能量損耗與發熱。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-10": {
    encouragement: "速度—時間圖下的面積就是位移；兩個三角形底邊不同，很容易比較。",
    keyIdea: "加速段位移25 m，減速段位移50 m，後者為前者2倍。",
    steps: [
      "加速段0至5秒，位移為三角形面積½×5×10＝25 m。",
      "等速段5至10秒，位移為5×10＝50 m。",
      "減速段10至20秒，位移為½×10×10＝50 m。",
      "因此減速段位移是加速段的2倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "加速量值為10/5＝2 m/s²，減速量值為10/10＝1 m/s²，是一半而非2倍。" },
      B: { verdict: "incorrect", reason: "減速時動能由5×10⁴ J降為零，阻力作功為－5×10⁴ J。" },
      C: { verdict: "correct", reason: "減速三角形面積50 m，是加速三角形25 m的2倍。" },
      D: { verdict: "incorrect", reason: "加速段位移為½×5×10＝25 m，不是50 m。" },
      E: { verdict: "incorrect", reason: "總位移為25＋50＋50＝125 m，不是200 m。" }
    },
    takeaway: "速度—時間圖：斜率是加速度，圖下總面積是位移。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-11": {
    encouragement: "最後一段物體仍向上但正在減速，所以速度向上、加速度與合力向下。",
    keyIdea: "F與a永遠同方向；丙至丁上升減速，因此v向上而F、a向下。",
    steps: [
      "甲至乙向上加速，合力方向向上。",
      "乙至丙等速度，合力為零。",
      "丙至丁仍向上移動，但速度逐漸減小。",
      "所以丙至丁加速度與合力向下，和速度方向相反。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲至乙合力向上，但丙至丁減速時合力向下。" },
      B: { verdict: "incorrect", reason: "丙至丁合力向下，但甲至乙加速上升時合力向上。" },
      C: { verdict: "incorrect", reason: "丙至丁位移向上，而合力向下，兩者方向相反。" },
      D: { verdict: "correct", reason: "丙至丁速度仍向上，減速所需合力向下，因此方向相反。" },
      E: { verdict: "correct", reason: "依F＝ma，加速度與合力在任何時刻都同方向。" }
    },
    takeaway: "減速不等於往下走；可以速度向上、加速度向下。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-12": {
    encouragement: "整段從靜止出發又靜止結束，總動能變化為零；但高度上升，所以總位能增加。",
    keyIdea: "加速與減速段動能變化互相抵銷，三段總重力位能變化為正。",
    steps: [
      "甲點與丁點速度都為零，所以整段總動能變化為零。",
      "乙、丙為同一等速度，故加速段增加的動能等於減速段減少的動能。",
      "物體三段位移都向上，高度持續增加。",
      "所以三段重力位能變化總和大於零。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲至乙同時上升又加速，位能與動能都增加，兩者和不為零。" },
      B: { verdict: "correct", reason: "乙與丙速率相同，甲與丁都靜止，所以加速與減速段動能變化互相抵銷。" },
      C: { verdict: "incorrect", reason: "乙至丙等速使ΔK為零，但上升使ΔU為正，兩者和不為零。" },
      D: { verdict: "incorrect", reason: "整段起終點皆靜止，三段動能變化總和等於零。" },
      E: { verdict: "correct", reason: "物體由甲一路升到丁，總高度增加，所以三段位能變化總和為正。" }
    },
    takeaway: "動能看速率，重力位能看高度；兩者要分開判斷。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-18": {
    encouragement: "每次核分裂先用E＝Δmc²算能量，再用電功率除以33%還原所需核能功率。",
    keyIdea: "每次反應約釋放3×10⁻¹¹ J；300 MW電功率需約3×10¹⁹次反應/秒。",
    steps: [
      "每次核反應能量EN＝3.3×10⁻²⁸×(3×10⁸)²≈3×10⁻¹¹ J。",
      "發電效率33%，所以所需核能功率約300 MW÷0.33≈9×10⁸ W。",
      "反應頻率RN＝核能功率÷每次反應能量。",
      "RN≈9×10⁸÷3×10⁻¹¹≈3×10¹⁹ s⁻¹。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "質量差還要計入反應前的一顆中子與反應後的三顆中子。" },
      B: { verdict: "incorrect", reason: "質能關係是EN＝Δmc²，不是只乘一次光速。" },
      C: { verdict: "incorrect", reason: "計算得EN約3×10⁻¹¹ J，不是3×10⁻⁸ J。" },
      D: { verdict: "incorrect", reason: "電功率是核能功率的33%，所以核能功率應為Pe÷33%，不是Pe×33%。" },
      E: { verdict: "correct", reason: "以約9×10⁸ W除以每次3×10⁻¹¹ J，得約3×10¹⁹次/秒。" }
    },
    takeaway: "有效率時要先辨認輸入與輸出：輸出＝效率×輸入。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-115-47": {
    encouragement: "發光是由高能階跳到低能階；365 nm光子能量3.4 eV，要找能量差正好3.4 eV的一對。",
    keyIdea: "E₁＝－1.6 eV降到E₄＝－5.0 eV，能量差為3.4 eV。",
    steps: [
      "365 nm UV光子的能量由題幹給為3.4 eV。",
      "發光躍遷必須由較高能量降到較低能量。",
      "E₁到E₄的能量差為(－1.6)－(－5.0)＝3.4 eV。",
      "所以E₁→E₄會放出365 nm光子。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "E₁到E₃能量差為2.1 eV，不符合3.4 eV。" },
      B: { verdict: "correct", reason: "E₁到E₄下降3.4 eV，正好放出365 nm的UV光子。" },
      C: { verdict: "incorrect", reason: "E₂到E₄能量差為2.5 eV，不是3.4 eV。" },
      D: { verdict: "incorrect", reason: "E₂到E₅能量差為7.9 eV，光子能量過大。" },
      E: { verdict: "incorrect", reason: "E₃到E₄能量差只有1.3 eV，波長會比365 nm更長。" }
    },
    takeaway: "能階躍遷發光時，光子能量等於起始能階減去終止能階。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
