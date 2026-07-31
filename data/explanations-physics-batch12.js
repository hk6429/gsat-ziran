(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-88-68": {
    encouragement: "先看連接方式就很快：兩燈泡只有一條電流路徑，所以是串聯。",
    keyIdea: "串聯電路各處電流相同；電壓降為 V＝IR，電阻較大的燈泡分到較大的電壓。",
    steps: [
      "甲、乙燈泡串在同一條沒有分岔的路徑上。",
      "串聯電路中，通過兩燈泡的電流相同。",
      "由 V＝IR，同一電流下，3 Ω的乙燈泡電壓降大於2 Ω的甲燈泡。",
      "因此甲燈泡兩端的電位差小於乙燈泡。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩燈泡串聯在同一條電流路徑上，通過它們的電流相同。" },
      B: { verdict: "incorrect", reason: "串聯電路沒有分流，甲燈泡的電流不會比乙燈泡大。" },
      C: { verdict: "incorrect", reason: "兩燈泡電阻不同，在相同電流下的電壓降不會相等。" },
      D: { verdict: "incorrect", reason: "甲的電阻2 Ω小於乙的3 Ω，所以甲的電壓降較小而非較大。" },
      E: { verdict: "correct", reason: "由V＝IR可知，相同電流下電阻較小的甲燈泡電位差較小。" }
    },
    takeaway: "串聯先記住電流相同，再用V＝IR比較各元件的電壓。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-89-36": {
    encouragement: "平直斜面最重要的線索是角度不變，因此沿斜面的重力分量也不變。",
    keyIdea: "光滑固定斜面上，沿斜面的合力mg sinθ固定，所以加速度固定，速度持續增加。",
    steps: [
      "斜面光滑，沒有摩擦力。",
      "沿斜面向下的力為mg sinθ，斜面角度固定。",
      "由F＝ma可得加速度a＝g sinθ，量值不變。",
      "物體由靜止下滑，在固定加速度下速度愈來愈大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "加速度雖不變，但物體持續加速，速度不會保持不變。" },
      B: { verdict: "incorrect", reason: "速度會增加，但斜面角度固定使加速度維持固定。" },
      C: { verdict: "incorrect", reason: "沿斜面合力向下，物體的速度不會愈來愈小。" },
      D: { verdict: "correct", reason: "沿斜面的重力分量固定，因此加速度不變而速度逐漸增加。" },
      E: { verdict: "incorrect", reason: "速度確實增加，但固定斜面上的加速度不會逐漸變小。" }
    },
    takeaway: "固定斜角、無摩擦時，斜面運動就是加速度不變的運動。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-26": {
    encouragement: "靠近最低點時，物體正在接近轉折位置；轉折點的速度一定會回到零。",
    keyIdea: "彈簧振動在兩端點速度為零，在平衡位置附近速度最大。",
    steps: [
      "b點是物體振動的最低位置，也是運動方向即將反轉的位置。",
      "物體由上往下靠近b點時，向下速度仍為正，但量值逐漸減少。",
      "到達b點的瞬間，物體短暫停止。",
      "因此速率逐漸減慢並趨近零。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "速率最大出現在平衡位置附近，不是在最低轉折點附近。" },
      B: { verdict: "incorrect", reason: "靠近最低點時速率會減小，不能同時說速率最大。" },
      C: { verdict: "correct", reason: "最低點是轉折點，物體愈接近b點速率愈小，最後成為零。" },
      D: { verdict: "incorrect", reason: "由上往下靠近b點時正在減速，不是從接近零逐漸加快。" },
      E: { verdict: "incorrect", reason: "物體只在b點瞬間速率為零，靠近過程並非等速。" }
    },
    takeaway: "振動兩端點速度為零；通過中間平衡位置時速度最大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-27": {
    encouragement: "彈簧拉得愈長，回拉的力量愈大；從c往b正是在增加伸長量。",
    keyIdea: "彈簧對物體的力方向向上，量值依虎克定律F＝kx隨伸長量增加。",
    steps: [
      "物體位於彈簧下方，彈簧對物體的拉力方向向上。",
      "物體由c往b移動時，彈簧被拉得更長。",
      "由F＝kx，伸長量x增加，彈力量值也增加。",
      "所以彈力方向向上且愈來愈大。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "往b點移動時彈簧伸長量增加，因此向上的彈力逐漸加大。" },
      B: { verdict: "incorrect", reason: "方向雖向上，但彈簧愈拉愈長，彈力量值應增加。" },
      C: { verdict: "incorrect", reason: "彈簧伸長量正在改變，依F＝kx，彈力不會保持固定。" },
      D: { verdict: "incorrect", reason: "彈簧是從上方拉住物體，對物體的作用力不是向下。" },
      E: { verdict: "incorrect", reason: "彈力方向不是向下，而且伸長量增加時彈力也不會減少。" }
    },
    takeaway: "判斷彈力時先看方向，再用伸長量大小判斷力的量值。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-28": {
    encouragement: "彈簧秤讀的是物體的視重量；浮力愈大，秤的讀數就愈小。",
    keyIdea: "物體完全浸沒後，浮力只和液體密度與排開體積有關，與深度無關。",
    steps: [
      "四鋁塊質量與體積相同，所以重力都相同。",
      "W1的鋁塊在空氣中，幾乎沒有浮力，讀數最大。",
      "W2浸在較上層的甲液，受到浮力，讀數下降。",
      "W3、W4都完全浸在較密的乙液，浮力相同且較大，所以兩讀數相等並最小。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "浸入液體的鋁塊受到浮力，彈簧秤讀數不會都和空氣中相同。" },
      B: { verdict: "incorrect", reason: "乙液中的浮力大於甲液，W2不會和W3、W4相等。" },
      C: { verdict: "correct", reason: "空氣中讀數最大，甲液中次之；乙液中兩球完全浸沒，讀數相同且最小。" },
      D: { verdict: "incorrect", reason: "浮力會減少秤的讀數，浸入液體後讀數應變小而非變大。" },
      E: { verdict: "incorrect", reason: "同一液體中完全浸沒的相同物體，浮力不因深度增加，所以W3＝W4。" }
    },
    takeaway: "視重量＝真重量－浮力；完全浸沒後，不要把深度誤當成浮力大小的決定因素。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-90-47": {
    encouragement: "溢出的水剛好等於金屬球排開的水，先比體積，再比密度就能完成。",
    keyIdea: "完全浸沒時，排開水的體積等於金屬球體積；金屬密度大於水，所以同體積水較輕。",
    steps: [
      "金屬球完全沉入水中，排開水的體積等於球的體積。",
      "排開的水全部溢入小燒杯，因此小燒杯水的體積等於金屬球體積。",
      "金屬球會沉入水中，表示金屬的密度大於水。",
      "同體積下，密度較小的水重量較輕。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "球完全浸沒時，溢出水的體積正好等於金屬球的體積。" },
      B: { verdict: "incorrect", reason: "兩者體積相等，但水的密度小於金屬，所以水不會較重。" },
      C: { verdict: "correct", reason: "溢出水與球體積相等，而同體積的水比金屬球輕。" },
      D: { verdict: "incorrect", reason: "金屬與水密度不同，兩者重量不相等，不能由等重推出體積關係。" },
      E: { verdict: "incorrect", reason: "小燒杯中的水與球體積相等，而且兩者重量也不相等。" }
    },
    takeaway: "排水法的核心是「浸沒體積＝排開液體體積」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-35": {
    encouragement: "圖上的d愈大，代表那個頻率要更大聲才聽得到，也就是聽力損失愈明顯。",
    keyIdea: "此人的聽力在約4000 Hz附近損失最大，高頻成分較不容易聽見。",
    steps: [
      "d是此人相對正常聽力所需增加的分貝數。",
      "圖中低頻的d接近零，高頻約4000 Hz附近的d很大。",
      "親友說話中的較高頻成分會被削弱得比較多。",
      "少了較高頻的感受，整體聽起來會偏低沉。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "他對部分頻率較不敏感，通常不會因此覺得隔音效果比正常者差。" },
      B: { verdict: "incorrect", reason: "低頻處d接近零只表示接近正常，並不代表比正常者更好。" },
      C: { verdict: "incorrect", reason: "高頻處d明顯較大，代表高頻聽力受損而非更佳。" },
      D: { verdict: "correct", reason: "較高頻聲音被削弱得更多，親友說話會讓他感覺比以往低沉。" }
    },
    takeaway: "聽力圖的門檻上升代表更難聽見，不是聽力變好。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-37": {
    encouragement: "加色混合可用三句記：紅加綠是黃、紅加藍是洋紅、綠加藍是青。",
    keyIdea: "紅綠藍是光的三原色，兩兩相加成黃、洋紅、青，三色相加成白。",
    steps: [
      "三個單色區依序是紅、綠、藍。",
      "紅光與藍光重疊形成洋紅。",
      "紅光與綠光形成黃，綠光與藍光形成青。",
      "紅、綠、藍三色等強度重疊形成白光。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "七區依序符合紅、綠、藍、洋紅、黃、青、白的加色混合結果。" },
      B: { verdict: "incorrect", reason: "紅綠藍三原色光同時重疊會形成白光，不是黑色。" },
      C: { verdict: "incorrect", reason: "圖中第2區屬綠光、第3區屬藍光，這兩區次序沒有對調。" },
      D: { verdict: "incorrect", reason: "紅綠重疊應為黃色，三色重疊應為白色，並非紫色與黑色。" }
    },
    takeaway: "光愈加愈亮；三原色光全加得到白色，和顏料混色不同。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-39": {
    encouragement: "判斷觸電要找完整回路；只有碰一條完全浮接的線，電流沒有回到線圈的路。",
    keyIdea: "與地絕緣的次級電路只碰單一導線時無法形成閉合回路；接地系統則可能經人體與地形成回路。",
    steps: [
      "圖10的次級線圈甲、乙兩端都沒有接地。",
      "小明只碰甲或乙其中一條時，人體到地面沒有接回線圈另一端。",
      "因此沒有完整電流回路，不會有持續觸電電流。",
      "圖11的丁端接地，碰到未接地的丙端才可能經人體與地形成回路。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲、乙所在的次級電路與地絕緣，只碰其中一線無法形成閉合回路。" },
      B: { verdict: "incorrect", reason: "丁線本身接地，人體與地面近似同電位，碰丁不一定造成觸電。" },
      C: { verdict: "incorrect", reason: "甲與乙都屬浮接電路，單獨碰觸任一端都不形成完整回路。" },
      D: { verdict: "incorrect", reason: "丙是相對地有電位差的一端，赤腳碰觸可能經地線形成電流回路。" }
    },
    takeaway: "是否觸電不只看碰到哪條線，更要確認人體是否成為閉合回路的一部分。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-91-48": {
    encouragement: "交流電的電壓與方向會隨時間改變；接地線上的各點則維持相同的零電位。",
    keyIdea: "交流電流大小與方向週期變化；乙、丁都接地，所以電位永遠相等。",
    steps: [
      "丙、丁接在交流電源形成的照明支路中。",
      "交流電使支路電流隨時間改變，方向也會反覆交換。",
      "乙與丁都直接連到零電位地線。",
      "因此乙、丁電位相同，而丙、甲相對地的瞬時電位不會永遠固定為正值。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "交流電的瞬時電壓會變，使流經丙、丁的電流大小隨時間改變。" },
      B: { verdict: "incorrect", reason: "110 V是交流電的有效值，丙的瞬時電壓不會永遠固定為110 V。" },
      C: { verdict: "correct", reason: "乙與丁都接在同一條零電位地線上，因此兩點電位相等。" },
      D: { verdict: "incorrect", reason: "交流電極性會交換，丙的電位不會永遠高於丁。" },
      E: { verdict: "incorrect", reason: "甲的交流電位有正有負，不會永遠高於接地的乙。" },
      F: { verdict: "incorrect", reason: "交流電方向週期反轉，電流不會永遠由丙流向丁。" }
    },
    takeaway: "有效值110 V不等於瞬時電壓固定110 V；交流電會隨時間反向。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-40": {
    encouragement: "先用歐姆定律算出人體電流，再回到圖上比較「無法自行脫離」的門檻。",
    keyIdea: "全身溼透時電阻約5 kΩ，接觸110 V會有約22 mA電流，已超過60 Hz的脫離門檻。",
    steps: [
      "溼透人體的電阻約為5000 Ω。",
      "依I＝V/R，I＝110÷5000＝0.022 A。",
      "0.022 A等於22 mA。",
      "由圖判讀，60 Hz時22 mA已高於無法自行脫離的最低電流。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中的感覺門檻並不是隨頻率愈高就一路降低，不能作此推論。" },
      B: { verdict: "incorrect", reason: "圖只比較不同頻率的生理門檻，不能徹底證明所有直流情境都較安全或危險。" },
      C: { verdict: "correct", reason: "溼透時電流約22 mA，超過60 Hz下無法自行脫離的門檻。" },
      D: { verdict: "incorrect", reason: "任何人體通電表演都有危險，圖也不能支持100 Hz就安全的說法。" }
    },
    takeaway: "觸電題先算I＝V/R；皮膚潮溼使電阻降低，電流會大幅增加。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-92-46": {
    encouragement: "公式已把答案藏在裡面：原子核質量等於核子總質量再扣掉結合能對應的質量。",
    keyIdea: "穩定原子核有質量虧損；輕核融合到較高平均結合能時會釋放能量。",
    steps: [
      "式中的AE/c²為形成原子核時減少的質量。",
      "所以穩定原子核質量小於分開的質子與中子質量總和。",
      "氫-2屬輕核，融合後平均每核子結合能提高，會釋放能量。",
      "鐵-56附近平均結合能已很高，再融合成更重核不會像輕核融合那樣放能。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "較重的穩定原子核通常中子數多於質子數，Z與N不必相等。" },
      B: { verdict: "correct", reason: "公式要扣除正的AE/c²，所以原子核質量小於各核子質量總和。" },
      C: { verdict: "incorrect", reason: "鐵-56已在高平均結合能區，再融合成更重核不會以質量減少來釋能。" },
      D: { verdict: "correct", reason: "氫-2融合成較重的輕核時平均結合能增加，質量虧損轉成能量。" }
    },
    takeaway: "輕核靠融合放能，重核可靠分裂放能，方向都朝向平均結合能較高的核。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-12": {
    encouragement: "身體向前傾是慣性表現；真正讓人減速的是車地板向後的摩擦力。",
    keyIdea: "車煞車時，人體傾向維持原來向前速度，地板以向後摩擦力使人體減速。",
    steps: [
      "煞車前，人和車一起向前運動。",
      "車先減速，但人的身體因慣性傾向維持原速度。",
      "腳與地板接觸，地板對人施加向後摩擦力。",
      "下半身先被帶慢，上半身仍往前，因此看起來向前傾。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "車輪沒有直接對站在車內的曾同學施加向前作用力。" },
      B: { verdict: "incorrect", reason: "主要使人體減速的是腳與地板間的摩擦，不是車內空氣推動。" },
      C: { verdict: "correct", reason: "地板提供向後摩擦力使人體減速，而慣性讓上半身暫時保持向前運動。" },
      D: { verdict: "incorrect", reason: "煞車不會改變重力向下的方向，重力仍指向地心。" }
    },
    takeaway: "慣性不是一個向前推人的力；減速所需的實際水平力來自地板摩擦。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-24": {
    encouragement: "圖上張開代表排斥、靠攏代表吸引；從已知的甲正電一路判斷即可。",
    keyIdea: "同號電荷排斥、異號電荷吸引；圖中甲乙互斥，丙丁互相吸引。",
    steps: [
      "甲、乙兩球的線向外張開，表示兩球互相排斥。",
      "甲帶正電，因此乙也帶正電。",
      "沿圖中相鄰球的偏轉方向追蹤，丙與已判定為正電的球呈同號排斥，所以丙帶正電。",
      "丙、丁彼此靠攏，表示兩球異號，因此丁帶負電。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丙、丁在圖中互相靠近，若兩者都帶正電應互相排斥。" },
      B: { verdict: "correct", reason: "丙為正、丁為負時兩球異號相吸，符合圖中彼此靠攏的情形。" },
      C: { verdict: "incorrect", reason: "丙若帶負電，會與相鄰的正電球相吸，不符合圖中對丙電性的判讀。" },
      D: { verdict: "incorrect", reason: "丙、丁若都帶負電會同號排斥，不會呈現圖中的靠攏狀態。" }
    },
    takeaway: "靜電小球圖先判斷「靠近或張開」，再用同號斥、異號吸逐段推回去。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-25": {
    encouragement: "連通器的水面會等高；壺嘴越低，能裝到溢出的水位就越低。",
    keyIdea: "澆水壺本體與壺嘴構成連通器，開始流出時的水面高度由壺嘴出口高度決定。",
    steps: [
      "水壺內部和壺嘴相通，靜止時兩邊自由液面同高。",
      "加水到壺嘴出口高度後，水便開始流出。",
      "圖中乙、丙的壺嘴出口等高，且都高於甲。",
      "三壺截面積相同，因此乙、丙裝水量相等且都大於甲。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的壺嘴出口較低，開始溢流時的水位較低，裝水量不會較多。" },
      B: { verdict: "correct", reason: "乙、丙出口同高而甲較低，所以乙與丙的水量相等且大於甲。" },
      C: { verdict: "incorrect", reason: "丙與甲的出口高度不同，兩壺能裝到溢出的水量不相等。" },
      D: { verdict: "incorrect", reason: "乙與丙的壺嘴出口等高，截面積又相同，水量應相等。" },
      E: { verdict: "incorrect", reason: "甲的出口高度較低，三壺開始溢流時的水位並不都相同。" }
    },
    takeaway: "茶壺、澆水壺等連通器的液面高度由出口位置限制，不由壺嘴彎曲形狀決定。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-93-64": {
    encouragement: "擺錘沿圓弧移動，繩張力沿繩方向；兩個方向互相垂直，所以張力不作功。",
    keyIdea: "力與位移垂直時作功為零；單擺週期與擺錘質量無關。",
    steps: [
      "擺錘瞬間位移方向沿圓弧切線。",
      "繩張力方向沿著繩子、指向懸點。",
      "半徑方向與切線方向垂直。",
      "由W＝Fs cos90°＝0，繩張力不作功。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "重力在下降時作正功、上升時作負功，只是完整往返的淨功可能為零。" },
      B: { verdict: "incorrect", reason: "題給週期公式2π√(l/g)不含質量，擺錘變重不會使週期變長。" },
      C: { verdict: "correct", reason: "張力沿半徑、位移沿切線，兩者垂直，所以張力不作功。" },
      D: { verdict: "incorrect", reason: "動能與位能會互相轉換，並非每一瞬間都彼此相等。" }
    },
    takeaway: "力學能守恆不代表動能永遠等於位能，而是兩者總和保持不變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-35": {
    encouragement: "找出數列多久重複一次，再用每秒位元數除以一個週期的位元數。",
    keyIdea: "訊號每5個位元重複一次，播放頻率＝9600 bit/s÷5 bit＝1920 Hz。",
    steps: [
      "數列可分成00001、00001、00001……。",
      "所以一個完整週期包含5個位元。",
      "每秒傳送9600個位元。",
      "每秒完成的週期數為9600÷5＝1920。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "9600是每秒位元數，不是一個5位元週期的重複頻率。" },
      B: { verdict: "incorrect", reason: "4900沒有由9600除以完整週期的5個位元得到。" },
      C: { verdict: "correct", reason: "訊號每5個位元重複，頻率為9600÷5＝1920 Hz。" },
      D: { verdict: "incorrect", reason: "960 Hz相當於把週期誤算成10個位元，實際最小週期是5個位元。" },
      E: { verdict: "incorrect", reason: "480 Hz相當於把週期誤算成20個位元，與數列重複方式不符。" }
    },
    takeaway: "數位訊號的聲音頻率看「重複週期」，不是直接等於位元傳輸率。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-38": {
    encouragement: "相變時會出現定溫區段；圖中較高溫的相變點就是沸點。",
    keyIdea: "定壓加熱時，液體沸騰會在沸點吸熱並維持溫度，圖中液氣轉換發生在80°C。",
    steps: [
      "物質起初為固體，最後變成氣體，會依序經過熔化與沸騰。",
      "圖中40°C附近第一次出現體積突變，對應熔化。",
      "圖中80°C附近第二次出現明顯體積突變，對應液體變氣體。",
      "因此此物質的沸點為80°C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "100°C是圖中加熱後氣體的溫度，不是液氣相變發生的溫度。" },
      B: { verdict: "correct", reason: "圖中液體轉成氣體的體積突增發生在80°C，所以沸點為80°C。" },
      C: { verdict: "incorrect", reason: "60°C位於液態升溫區段，沒有出現液氣相變。" },
      D: { verdict: "incorrect", reason: "40°C附近對應固體熔化，是熔點而不是沸點。" },
      E: { verdict: "incorrect", reason: "30°C仍在固態升溫區段，並非相變溫度。" }
    },
    takeaway: "同一張加熱圖中，低溫平台通常是熔點，高溫平台通常是沸點。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-94-39": {
    encouragement: "每個資料點相隔相同時間，所以相鄰點的溫度差可以直接比較升溫快慢。",
    keyIdea: "相同功率、相同時間吸收相同熱量；液態每段升溫較多，表示液態較容易升溫。",
    steps: [
      "熱源功率穩定，而且每隔相同時間量一次。",
      "固態區相鄰資料點約升高10°C。",
      "液態區相鄰資料點約升高20°C。",
      "相同熱量下液態溫升較大，因此液態比固態容易升溫。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "相同加熱時間內液態的溫度增加較多，表示液態較容易升溫。" },
      B: { verdict: "incorrect", reason: "圖中熔化時體積增大，表示固體密度較大，不能推出固體會浮在液體上。" },
      C: { verdict: "incorrect", reason: "氣體凝結成液體時體積會大幅縮小，不是膨脹。" },
      D: { verdict: "incorrect", reason: "由圖中體積對溫度的斜率判讀，液態每升1°C的體積增加不比固態大。" }
    },
    takeaway: "同功率加熱下，溫度升得愈快，代表該狀態的熱容量愈小。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-30": {
    encouragement: "等速率圓周運動的速率不變，但速度方向一直轉彎，所以一定有向心加速度。",
    keyIdea: "圓周運動的加速度與合力都指向圓心。",
    steps: [
      "飛機沿圓形軌道運動，速度方向時時改變。",
      "速度改變代表存在加速度。",
      "等速率圓周運動的加速度指向圓心。",
      "依牛頓第二定律，合力方向與加速度方向相同，也指向圓心。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "速率雖固定，但速度包含方向，方向持續改變所以速度不固定。" },
      B: { verdict: "incorrect", reason: "飛機在水平圓周上高度不變，重力不提供其動能變化。" },
      C: { verdict: "incorrect", reason: "加速度指向圓心，與瞬間前進的切線方向垂直。" },
      D: { verdict: "correct", reason: "等速率圓周運動需要指向圓心的向心加速度，因此合力也指向圓心。" }
    },
    takeaway: "「等速率」不等於「等速度」；只要方向改變，物體就有加速度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-31": {
    encouragement: "音調看同一時間內振動幾次；波形愈密，頻率愈高，音調也愈高。",
    keyIdea: "同一時間軸上，甲的週期比乙短，所以甲頻率較高、音調較高。",
    steps: [
      "四個波形共用0到10毫秒的時間軸。",
      "比較甲、乙，甲在相同時間內完成的振動次數較多。",
      "振動次數多代表頻率較高。",
      "頻率愈高，聽到的音調愈高。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中丙的振幅小於丁，丙的響度不會大於丁。" },
      B: { verdict: "correct", reason: "甲在相同時間內振動次數比乙多，因此頻率與音調都較高。" },
      C: { verdict: "incorrect", reason: "丁與甲的波形形狀不同，表示兩者音色不相同。" },
      D: { verdict: "incorrect", reason: "四種聲波都在相同空氣中傳播，聲速主要由介質決定，並不因波形而不同。" }
    },
    takeaway: "看波形：振幅對應響度、頻率對應音調、形狀差異對應音色。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-33": {
    encouragement: "綠色地毯主要反射綠光；照明中沒有綠光時，它就很難把光反射到眼睛。",
    keyIdea: "洋紅光由紅光與藍光組成，不含綠光，因此綠色物體在洋紅光下近似黑色。",
    steps: [
      "綠色地毯在白光下呈綠色，是因為主要反射綠光。",
      "若照射光中沒有綠光，地毯就缺少可反射的主要色光。",
      "洋紅光是紅光與藍光的混合，不含綠光。",
      "所以綠色地毯在洋紅光下最可能看起來近似黑色。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "白光含有綠光，地毯可反射綠光，仍會呈現綠色。" },
      B: { verdict: "incorrect", reason: "黃光含紅光與綠光，其中綠光仍可被地毯反射。" },
      C: { verdict: "incorrect", reason: "青光含綠光與藍光，地毯仍可反射其中的綠光。" },
      D: { verdict: "correct", reason: "洋紅光只有紅與藍、不含綠光，綠色地毯幾乎無光可反射而顯黑。" }
    },
    takeaway: "物體看到什麼顏色，要同時看照明光含哪些色光，以及物體能反射哪些色光。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-35": {
    encouragement: "合力為零時，兩個電荷造成的電場要大小相等、方向相反；先找可能的位置再算距離。",
    keyIdea: "異號且電量不同的兩固定電荷，零電場點在較小電量電荷的外側。",
    steps: [
      "在兩電荷之間，＋4Q的電場與－Q的電場方向相同，無法抵銷。",
      "零電場點應在電量較小的－Q右側，也就是x＞9a。",
      "設該點到－Q距離為d，到＋4Q距離為d＋4a。",
      "令4/(d＋4a)²＝1/d²，可得d＝4a，所以x＝9a＋4a＝13a。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "x＝3a位於＋4Q左側，兩電場大小不符合抵銷條件。" },
      B: { verdict: "incorrect", reason: "x＝7a位於兩異號電荷之間，兩電場方向相同，不可能相消。" },
      C: { verdict: "incorrect", reason: "x＝11a時到－Q僅2a，－Q造成的電場仍過強，兩力不平衡。" },
      D: { verdict: "correct", reason: "x＝13a時距兩電荷分別8a與4a，4/(8a)²＝1/(4a)²，電場正好抵銷。" },
      E: { verdict: "incorrect", reason: "x＝15a時距離為10a與6a，兩電場量值不相等。" }
    },
    takeaway: "異號電荷之間的電場同向，零電場點要到外側尋找。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-95-36": {
    encouragement: "圖給的是每分鐘耗能，不是總耗能；走得快也會縮短回家時間。",
    keyIdea: "總能量＝每單位時間耗能率×時間，而固定路程下時間與速率成反比。",
    steps: [
      "由圖讀出1.0 m/s時每分鐘約消耗1.2 kJ。",
      "2.0 m/s時每分鐘約消耗3.5 kJ。",
      "走相同路程，2.0 m/s所需時間是1.0 m/s的一半。",
      "總能量比約為3.5×1/2÷1.2≈1.46，最接近1.5。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "把耗能率與時間一起計算，總能量比約1.46，最接近1.5。" },
      B: { verdict: "incorrect", reason: "2.0忽略了圖上耗能率不是恰為兩倍，也可能忽略快走所需時間減半。" },
      C: { verdict: "incorrect", reason: "2.5高於由圖讀值並乘上時間比例所得的約1.5。" },
      D: { verdict: "incorrect", reason: "3.0接近只比較耗能率的結果，沒有把行走時間減半算進去。" },
      E: { verdict: "incorrect", reason: "3.5是2.0 m/s附近的每分鐘耗能值，不是兩種總能量的倍數。" }
    },
    takeaway: "遇到固定路程問題，功率或耗能率要乘上時間，不能只比較圖上的高度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-11": {
    encouragement: "作用力與反作用力一定作用在不同物體上，而且是同一種交互作用的一對。",
    keyIdea: "地球吸引浮體的重力W，與浮體吸引地球的力Fᴬ互為作用力與反作用力。",
    steps: [
      "W是地球對浮體的萬有引力。",
      "Fᴬ是浮體對地球的萬有引力。",
      "兩力來自同一個地球與浮體的引力交互作用。",
      "它們大小相等、方向相反，並分別作用在浮體與地球上。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Fᴬ是浮體對地球的引力，Fᴮ是水對浮體的浮力，兩者不是同一交互作用。" },
      B: { verdict: "incorrect", reason: "S₁、S₂都是水對同一浮體的壓力，不是分別作用在兩個物體上的一對力。" },
      C: { verdict: "incorrect", reason: "P₁、P₂都是大氣壓力造成的作用，並非物體彼此施力的一對。" },
      D: { verdict: "correct", reason: "Fᴬ是浮體吸引地球，W是地球吸引浮體，正是引力的作用與反作用。" },
      E: { verdict: "incorrect", reason: "浮力與重力都作用在浮體上，即使平衡也不是作用力與反作用力。" }
    },
    takeaway: "平衡力作用在同一物體；作用力與反作用力則分別作用在兩個物體。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-12": {
    encouragement: "聲波跨介質時，振動節奏由聲源決定，所以頻率不變。",
    keyIdea: "折射時頻率保持不變；聲速在水中較快，因此波長會變長。",
    steps: [
      "聲源的振動頻率決定每秒產生多少個波峰。",
      "波進入水中時，介面兩側的振動必須連續，所以頻率不變。",
      "因此f₁＝f₂。",
      "又因水中聲速較快，由v＝fλ可知水中波長較長。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "聲波跨越空氣與水的介面時，頻率由聲源決定而保持不變。" },
      B: { verdict: "incorrect", reason: "水中聲速比空氣快，頻率不變時波長會變長，不會相等。" },
      C: { verdict: "incorrect", reason: "進入新介質不會讓聲源每秒振動次數增加，所以f₂不大於f₁。" },
      D: { verdict: "incorrect", reason: "聲音在水中速度較快，依λ＝v/f，λ₂應大於λ₁。" }
    },
    takeaway: "波跨介質：頻率不變，速度與波長依新介質一起改變。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-96-16": {
    encouragement: "加熱曲線的水平平台代表持續吸熱但溫度不升，這正是相變正在進行。",
    keyIdea: "4到8分鐘溫度維持熔點，金屬正在熔化，因此固態與液態共存。",
    steps: [
      "熱源持續以固定功率供熱。",
      "圖中4到8分鐘溫度保持不變。",
      "吸收的熱量用來破壞固態結構，而不是提高溫度。",
      "這段時間金屬正在熔化，所以固態與液態同時存在。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若已完全成為液態，持續加熱通常會使溫度再上升，不會整段維持平台。" },
      B: { verdict: "incorrect", reason: "題目從固態金屬開始加熱，此平台是第一次相變，不是已完全氣化。" },
      C: { verdict: "correct", reason: "平台期間金屬正在熔化，尚未熔完前固態與液態會同時存在。" },
      D: { verdict: "incorrect", reason: "液態與氣態共存對應沸騰平台，不是此固體首次受熱的熔化平台。" }
    },
    takeaway: "加熱曲線平台不代表停止吸熱，而是熱量正用在改變物態。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-6": {
    encouragement: "奈米儲存靠原子一顆一顆排列；原子尺度比現有記憶單元小很多，密度自然大幅提高。",
    keyIdea: "原子直徑約0.1 nm，以單原子代表位元可達約10¹⁵ byte/cm²，遠超過10⁸ byte/cm²。",
    steps: [
      "一般原子直徑約0.1 nm＝10⁻⁸ cm，不是10 nm。",
      "若每個位元約占一個原子的平方尺度，每平方公分約可排10¹⁶個位元。",
      "8個位元為1 byte，所以密度約為10¹⁵ byte/cm²量級。",
      "和目前10⁸ byte/cm²相比，高出約數百萬倍以上，當然超過數萬倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氫原子的尺度約0.1 nm量級，10 nm大了約一百倍。" },
      B: { verdict: "incorrect", reason: "探針頭愈小愈能分辨相鄰原子，直徑變大反而降低空間解析能力。" },
      C: { verdict: "correct", reason: "以原子尺度估算的儲存密度可比10⁸ byte/cm²高出數百萬倍，確實超過數萬倍。" },
      D: { verdict: "incorrect", reason: "代表位元的原子愈大，每個位元占的面積愈大，儲存密度反而降低。" }
    },
    takeaway: "儲存單元愈小，同一面積能放的位元愈多；面積密度要用長度尺度的平方估算。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-102-66": {
    encouragement: "同一高度滑下時，重力位能轉成動能，質量會在等式兩邊一起消掉。",
    keyIdea: "光滑無阻力時，球的速度與質量無關；水平無阻力軌道可說明慣性。",
    steps: [
      "由mgh＝½mv²，質量m可約掉，所以不同質量小球到坡底速度相同。",
      "質量不同時重力mg不同，不能說它們所受重力相同。",
      "丁坡道水平且無阻力，球到達後沒有水平合力使它停下。",
      "因此球會維持等速度前進，支持動者恆動的慣性想法。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同一高度滑下時質量會在能量式中消去，較重球不會比較快。" },
      B: { verdict: "incorrect", reason: "坡底速度與質量無關，較輕球也不會比較快。" },
      C: { verdict: "incorrect", reason: "重力為mg，質量不同的小球所受重力量值不同。" },
      D: { verdict: "correct", reason: "丁為無阻力的水平軌道，球沒有水平合力，會保持等速度而不自行停下。" },
      E: { verdict: "correct", reason: "丁坡道的想像實驗說明無外力時運動會持續，可推論動者恆動。" }
    },
    takeaway: "物體不是一定要有力才會運動；力的作用是改變速度。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-30": {
    encouragement: "楞次定律像一位阻止變化的守門員：靠近時推開，離開時拉回。",
    keyIdea: "感應電流產生的磁力會阻礙磁通量變化，並把機械能轉成電能與熱。",
    steps: [
      "磁鐵接近線圈時，穿過線圈的磁通量增加。",
      "線圈產生磁場抵抗增加，因此對接近的磁鐵產生排斥。",
      "磁鐵離開時，線圈改為吸引磁鐵，仍阻礙它離開。",
      "這種阻力將振動機械能轉成電能並在燈泡耗散，所以振幅逐漸減小。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "磁鐵接近時感應磁場要阻止靠近，因此線圈對磁鐵產生排斥力。" },
      B: { verdict: "correct", reason: "依楞次定律，線圈以排斥作用阻礙磁鐵造成的磁通量增加。" },
      C: { verdict: "incorrect", reason: "磁鐵離開時線圈會吸引它，以阻礙磁通量減少，不是排斥。" },
      D: { verdict: "incorrect", reason: "磁通量改變會產生感應電流及磁力，作用力並非零。" },
      E: { verdict: "correct", reason: "感應電流讓機械能轉成電能與燈泡熱能，即使無摩擦振幅仍會衰減。" }
    },
    takeaway: "楞次定律的重點不是固定吸引或排斥，而是永遠阻礙造成磁通量改變的運動。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-3": {
    encouragement: "行星離太陽愈遠，公轉一圈不只路更長，速度也更慢，所以週期增加得很快。",
    keyIdea: "克卜勒第三定律T²∝r³；軌道半徑為地球30倍時，週期為√(30³)倍。",
    steps: [
      "某行星軌道半徑4500百萬公里，是地球150百萬公里的30倍。",
      "由T²∝r³，可得T＝30^(3/2)個地球年。",
      "30^(3/2)＝30√30，約為30×5.48。",
      "結果約164年，最接近160年。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "軌道半徑是地球30倍，不可能仍只需1年公轉。" },
      B: { verdict: "incorrect", reason: "30年只把半徑倍率直接當週期倍率，沒有使用T²∝r³。" },
      C: { verdict: "incorrect", reason: "50年遠小於依克卜勒第三定律算得的約164年。" },
      D: { verdict: "incorrect", reason: "100年仍低於30^(3/2)約164年的結果。" },
      E: { verdict: "correct", reason: "T＝√(30³)≈164地球年，最接近160年。" }
    },
    takeaway: "行星週期不是與軌道半徑成正比，而是T∝r^(3/2)。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-30": {
    encouragement: "同一高度是關鍵：上升與下降時速率相同，但方向相反。",
    keyIdea: "忽略空氣阻力時力學能守恆；同高度的位能與動能相同，加速度皆為向下g。",
    steps: [
      "整段運動只受重力，加速度始終為向下g。",
      "甲、乙位於相同高度，所以重力位能相同。",
      "總力學能守恆，因此兩時刻動能也相同。",
      "兩者速率相同但方向相反，所以速度不相同。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "小球全程只受重力，加速度在上升與下降時都同為向下g。" },
      B: { verdict: "incorrect", reason: "甲時速度向上、乙時速度向下，即使速率相同，速度仍不相同。" },
      C: { verdict: "correct", reason: "兩時刻高度相同，所以相對同一基準的重力位能相同。" },
      D: { verdict: "correct", reason: "力學能守恆且位能相同，因此兩時刻的動能相同。" },
      E: { verdict: "incorrect", reason: "地面到甲包含較長的上升歷程，最高點到乙的時間不一定與它相同。" }
    },
    takeaway: "速度是向量；同高度上升與下降的速率相同，不代表速度相同。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-55": {
    encouragement: "相鄰節氣掃過的角度相同，花的時間愈短，平均每秒掃過的角度就愈大。",
    keyIdea: "平均角速度＝固定角度÷時距；冬季時距最短，所以平均角速度最大。",
    steps: [
      "題目設定相鄰節氣所對應的夾角都約15°。",
      "平均每秒掃過角度等於15°除以兩節氣的時距。",
      "表中冬季時距14天17時27分最短。",
      "分母最小，所以ω冬最大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "春季時距不是四季中最短，因此ω春不會最大。" },
      B: { verdict: "incorrect", reason: "夏季時距最長，相同角度除以較長時間，平均角速度反而較小。" },
      C: { verdict: "incorrect", reason: "秋季時距仍長於冬季，ω秋小於ω冬。" },
      D: { verdict: "correct", reason: "冬季掃過相同約15°所需時間最短，所以平均每秒掃過角度最大。" },
      E: { verdict: "incorrect", reason: "四季時距不同，掃過相同角度的平均角速度不會全都相等。" }
    },
    takeaway: "比較平均速率時，走同樣的量，時間愈短就代表平均速率愈大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-56": {
    encouragement: "克卜勒第二定律直接告訴我們：行星與太陽連線在相同時間掃過相同面積。",
    keyIdea: "地球公轉時面積速度保持不變，所以四季的每秒掃掠面積相等。",
    steps: [
      "克卜勒第二定律又稱等面積定律。",
      "它表示行星與太陽連線在相同時間內掃過相同面積。",
      "題目比較的是每秒掃過的面積，也就是面積速度。",
      "因此λ春、λ夏、λ秋、λ冬都相等。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "等面積定律表示面積速度不隨季節改變，春季不會特別最大。" },
      B: { verdict: "incorrect", reason: "夏季雖運行較慢，但距太陽較遠，兩效果配合使每秒掃掠面積仍相同。" },
      C: { verdict: "incorrect", reason: "秋季的每秒掃掠面積不會大於其他季節。" },
      D: { verdict: "incorrect", reason: "冬季運行較快，但離太陽較近，每秒掃掠面積仍不會較大。" },
      E: { verdict: "correct", reason: "依克卜勒等面積定律，地球在四季的每秒掃掠面積都相等。" }
    },
    takeaway: "行星近日點跑得快、遠日點跑得慢，正好讓面積速度維持固定。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-57": {
    encouragement: "相同角度中冬季花最少時間，表示地球跑得最快；依等面積定律，跑最快時離太陽最近。",
    keyIdea: "地球接近太陽時公轉較快；冬季節氣時距最短，對應近日點附近。",
    steps: [
      "相鄰節氣夾角近似相同，冬季完成這段角度所需時間最短。",
      "因此冬季的平均角速度最大，公轉較快。",
      "依克卜勒等面積定律，行星離太陽較近時必須跑得較快。",
      "所以可推論冬季時地球距太陽最近。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "配合等面積定律，節氣時距能幫助判斷公轉快慢與距日遠近。" },
      B: { verdict: "incorrect", reason: "冬季時距最短代表掃過相同角度較快，不是運行最慢。" },
      C: { verdict: "correct", reason: "冬季時距最短、運行最快，依等面積定律可推論距太陽最近。" },
      D: { verdict: "incorrect", reason: "夏季時距最大表示運行較慢，對應距太陽較遠而非最近。" },
      E: { verdict: "incorrect", reason: "相同夾角在不同半徑形成的弧長不同，四季路徑長不會必然相同。" }
    },
    takeaway: "近日點速度快、遠日點速度慢，是克卜勒等面積定律的直接結果。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-31": {
    encouragement: "光雖大多直進，但遇到擋板邊緣會繞進影子區；波長愈長，繞得愈明顯。",
    keyIdea: "光的繞射使部分光進入幾何陰影區，繞射角大致隨波長增加。",
    steps: [
      "擋板頂端是光波遇到的邊緣。",
      "波通過邊緣會發生繞射，不再只沿幾何直線前進。",
      "因此部分光能進入y＜0的陰影區。",
      "波長愈長，相對於障礙尺度愈大，繞射角也愈明顯。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "擋板邊緣會使光發生繞射，所以光可能進入y＜0的幾何陰影區。" },
      B: { verdict: "incorrect", reason: "題目沒有不同介質的界面，進入陰影區不是由折射造成。" },
      C: { verdict: "correct", reason: "波長愈長，繞射現象愈明顯，進入y＜0區域的偏折角愈大。" },
      D: { verdict: "incorrect", reason: "光也具有波動性，邊緣繞射使y＜0區域仍可能有微弱亮度。" },
      E: { verdict: "incorrect", reason: "頻率愈高代表波長愈短，繞射角通常反而較小。" }
    },
    takeaway: "遇到狹縫或邊緣時要想到繞射；波長相對障礙愈大，繞射愈顯著。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-60": {
    encouragement: "週期變成8倍時，利用T²∝r³可直接看出軌道半徑變成4倍。",
    keyIdea: "圓軌道衛星遵守T²∝r³，r是到地心距離，不是離地高度。",
    steps: [
      "原衛星到地心距離約6400＋720＝7120 km。",
      "新舊週期比為800÷100＝8。",
      "由(r新/r舊)³＝8²＝64，可得r新/r舊＝4。",
      "新軌道半徑約28480 km，扣掉地球半徑得約22080 km，最接近22000 km。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "新軌道半徑約4×7120 km，扣除地球半徑後約22000 km。" },
      B: { verdict: "incorrect", reason: "16000 km低於依T²∝r³算得的約22000 km離地高度。" },
      C: { verdict: "incorrect", reason: "2800 km沒有正確使用8倍週期所對應的4倍地心距離。" },
      D: { verdict: "incorrect", reason: "920 km只比原高度略高，無法讓週期從100分鐘增加到800分鐘。" },
      E: { verdict: "incorrect", reason: "150 km比原衛星還低，週期不可能反而增加到8倍。" }
    },
    takeaway: "衛星定律中的r一律先用「地球半徑＋離地高度」換成地心距離。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-23": {
    encouragement: "同一空氣中的五音聲速相同；先用角音求聲速，再換算羽音波長。",
    keyIdea: "同介質聲速相同，所有聲波都能繞射；由v＝fλ可得羽音波長約77.3 cm。",
    steps: [
      "角音聲速v＝330 Hz×1.03 m≈340 m/s。",
      "五音都在相同空氣中，傳播速率皆約340 m/s。",
      "羽音波長λ＝340÷440≈0.773 m＝77.3 cm。",
      "聲波具有波動性，因此五音都可能發生干涉與繞射。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "五音在相同狀況的空氣中傳播，聲速相同，不是宮音最慢。" },
      B: { verdict: "incorrect", reason: "商音也是聲波，只要條件合適同樣能發生干涉。" },
      C: { verdict: "correct", reason: "五音都是波，遇到孔洞或障礙邊緣時都能發生繞射。" },
      D: { verdict: "incorrect", reason: "同聲速下頻率愈高波長愈短，徵音392 Hz的波長小於角音330 Hz。" },
      E: { verdict: "correct", reason: "由340 m/s÷440 Hz≈0.773 m，羽音波長約77.3公分。" }
    },
    takeaway: "同介質中v固定；頻率愈高，波長就愈短。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-54": {
    encouragement: "水從高處往低處流，先失去高度帶來的能量，再由發電機轉成電能。",
    keyIdea: "水力發電主要將水的重力位能，經動能與機械能，最後轉換成電能。",
    steps: [
      "高處水庫中的水因高度而具有重力位能。",
      "水向下流動時，重力位能轉成動能。",
      "水流推動渦輪，帶動發電機。",
      "發電機再把機械能轉成電能。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水力發電不是利用水溫降低所釋出的熱能。" },
      B: { verdict: "incorrect", reason: "水沒有在過程中發生化學反應，主要能源不是化學能。" },
      C: { verdict: "correct", reason: "高處的水下降時釋放重力位能，最後經渦輪與發電機轉成電能。" },
      D: { verdict: "incorrect", reason: "發電模式的能量方向是水的力學能轉成電能，不是電能推水上升。" },
      E: { verdict: "incorrect", reason: "水不是被彈性壓縮的物體，沒有以彈性位能作為主要來源。" }
    },
    takeaway: "一般水力發電的起點是高處水的重力位能。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-15": {
    encouragement: "電子也有波動性；速度改變會改變電子的物質波波長，因此條紋位置會跟著改變。",
    keyIdea: "雙狹縫干涉顯示電子的波動性，電子速度不同會使德布羅意波長不同。",
    steps: [
      "干涉條紋是波從兩狹縫疊加後互相增強與抵銷的結果。",
      "電子能形成干涉條紋，表示電子具有波動性。",
      "電子的德布羅意波長與動量成反比。",
      "速度改變會改變動量與波長，所以干涉條紋圖樣也會改變。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "亮暗帶來自機率振幅的干涉，不代表暗帶電子的速率一定較小。" },
      B: { verdict: "incorrect", reason: "即使一次只發射一個電子仍可累積干涉條紋，不是電子間靜電力造成。" },
      C: { verdict: "incorrect", reason: "干涉條紋主要顯示電子的波動性，而不只是粒子性。" },
      D: { verdict: "correct", reason: "電子速度改變會改變德布羅意波長，使干涉條紋間距與圖樣改變。" },
      E: { verdict: "incorrect", reason: "若確定電子通過哪個狹縫，路徑資訊會破壞原本的干涉圖樣。" }
    },
    takeaway: "微觀粒子同時具有粒子與波動特性；雙狹縫條紋是波動性的關鍵證據。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
