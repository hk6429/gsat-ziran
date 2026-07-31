(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-106-28": {
    encouragement: "四種基本力不用比一個抽象的大小，先看它們「作用在哪裡、能傳多遠」就能判斷。",
    keyIdea: "質子間同時有重力、靜電力與強力；強力只作用於核子尺度，靜電力的範圍則很遠。",
    steps: [
      "任何有質量的兩物體間都有重力，所以兩質子間仍有重力，只是非常微弱。",
      "質子都帶正電，彼此有排斥的靜電力。",
      "質子也是核子，在原子核的短距離內還會受到強力。",
      "靜電力能作用到很遠，作用範圍大於極短程的弱力。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩個質子都有質量，因此仍存在重力交互作用，只是比其他作用弱很多。" },
      B: { verdict: "correct", reason: "靜電力是長程作用，弱力只在極短距離明顯，所以靜電力作用範圍較大。" },
      C: { verdict: "correct", reason: "原子核內兩質子既帶同號電荷，又是核子，因此同時有靜電力與強力。" },
      D: { verdict: "incorrect", reason: "核外電子和質子之間有靜電力，但強力不作用在電子上。" },
      E: { verdict: "incorrect", reason: "只有重力與靜電力符合特定情況下的距離平方反比；強力、弱力不遵守這個簡單公式。" }
    },
    takeaway: "先看粒子身分：有質量就有重力、帶電就有靜電力、核子近距離間才有強力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-30": {
    encouragement: "波粒二象性有兩個經典證據：雙狹縫看波動，光電效應看粒子。",
    keyIdea: "光子能量 E＝hf；雙狹縫呈現干涉；愛因斯坦以光量子解釋光電效應。",
    steps: [
      "由 E＝hf 可知，光頻率越高，單一光子能量越大。",
      "楊氏雙狹縫出現明暗干涉條紋，證明光具有波動性。",
      "光電效應需要頻率高於門檻；愛因斯坦用一個個光子傳能成功解釋。",
      "電子等物質粒子也能產生干涉，因此波粒二象性不只屬於光。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "光量子能量 E＝hf，頻率 f 越高，光子能量越大。" },
      B: { verdict: "correct", reason: "雙狹縫干涉是典型波動現象，因此驗證光具有波動性。" },
      C: { verdict: "incorrect", reason: "光電效應需要光子能量夠高，也就是頻率高、波長短；不是波長越長越容易。" },
      D: { verdict: "incorrect", reason: "電子、原子等物質也有物質波，可呈現波粒二象性，不只光子具有。" },
      E: { verdict: "correct", reason: "愛因斯坦用量子化光子能量解釋光電效應，支持光的粒子性。" }
    },
    takeaway: "高頻光子能量大；雙狹縫證明波動性，光電效應證明粒子性。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-31": {
    encouragement: "宇宙背景輻射可以想成宇宙非常早期留下的微弱餘溫，比恆星更早，也比星光波長更長。",
    keyIdea: "宇宙微波背景在恆星形成前已存在，今日溫度約 2.7 K，主要波長屬微波。",
    steps: [
      "宇宙微波背景來自早期宇宙變得透明的時期，當時第一批恆星尚未形成。",
      "宇宙膨脹使這些光的波長不斷拉長，今日主要落在微波範圍。",
      "微波波長比恆星可見光長，背景溫度也遠低於恆星表面。",
      "它在各方向非常均勻，只帶有很小的溫度起伏。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "宇宙微波背景在恆星形成前就已出現，因此存在時間比恆星年齡更長。" },
      B: { verdict: "incorrect", reason: "背景輻射溫度約 2.7 K，遠低於數千 K 的一般恆星表面。" },
      C: { verdict: "incorrect", reason: "宇宙微波背景近似連續的黑體光譜，不是和恆星譜線一樣都呈不連續線譜。" },
      D: { verdict: "correct", reason: "微波的波長約毫米等級，明顯比數百奈米的可見光長。" },
      E: { verdict: "incorrect", reason: "宇宙微波背景在各方向非常均勻；恆星光反而集中在特定天體方向。" }
    },
    takeaway: "宇宙微波背景：比恆星更古老、溫度更低、波長更長、方向分布更均勻。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-32": {
    encouragement: "拉塞福實驗的驚喜在於：大多數粒子直走，少數卻被一個很小、很集中的正電核心大力推開。",
    keyIdea: "α 粒子帶正電，會受正電原子核排斥；少數大角度散射證明正電荷集中在小原子核。",
    steps: [
      "α 粒子帶正電，電子帶負電，所以兩者仍有靜電吸引。",
      "原子核帶正電，會排斥靠近的 α 粒子。",
      "電子質量很小，無法讓高速 α 粒子產生少見的大角度偏轉。",
      "大角度散射表示原子的正電荷與大部分質量集中在極小區域。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "α 粒子帶正電、電子帶負電，兩者之間存在靜電吸引力。" },
      B: { verdict: "incorrect", reason: "α 粒子與原子核都帶正電，彼此是靜電排斥，不是吸引。" },
      C: { verdict: "correct", reason: "電子損失能量後會落到較低能量、平均距離原子核更近的狀態。" },
      D: { verdict: "incorrect", reason: "電子太輕，無法造成 α 粒子的大角度散射；主要作用者是原子核。" },
      E: { verdict: "correct", reason: "少數 α 粒子大角度偏轉，顯示正電荷集中在很小且帶正電的原子核。" }
    },
    takeaway: "金箔實驗的大角度散射，證明原子大多是空間，正電荷集中在極小原子核。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-58": {
    encouragement: "向心力公式裡速度有平方；速度加倍，不是力加倍，而是變成四倍。",
    keyIdea: "相同質量與彎道半徑下，向心力 F＝mv²/r，和速率平方成正比。",
    steps: [
      "自行車轉同一個彎，圓弧半徑 r 不變，質量 m 也不變。",
      "向心力公式是 F＝mv²/r。",
      "速率由 v 變成 2v，新的向心力為 m(2v)²/r。",
      "(2v)²＝4v²，所以需要原來 4 倍的向心力。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1/4 是把平方關係顛倒；速率增大時，所需向心力應增加。" },
      B: { verdict: "incorrect", reason: "1/2 只像是做了反比，不符合 F 與 v² 成正比。" },
      C: { verdict: "incorrect", reason: "速率改變會改變向心力需求，不會仍維持原來大小。" },
      D: { verdict: "incorrect", reason: "2 倍只計到速率的一次方，漏掉公式中的平方。" },
      E: { verdict: "correct", reason: "F'／F＝(2v)²／v²＝4，所以所需向心力為 4 倍。" }
    },
    takeaway: "轉彎速率變成 n 倍，所需向心力會變成 n² 倍。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-59": {
    encouragement: "兩球碰撞時互推的力量一樣大、時間也一樣長，所以先得到相同衝量，再用質量比較速度變化。",
    keyIdea: "作用反作用力帶來等量反向衝量；Δv＝Δp/m，所以質量較小者速度變化較大。",
    steps: [
      "碰撞期間，甲對乙與乙對甲的力大小相等、方向相反。",
      "作用時間相同，所以兩球動量變化量的量值相同。",
      "甲質量是乙的 2 倍；在相同 Δp 下，Δv＝Δp/m。",
      "乙質量較小，因此乙的速度變化量是甲的 2 倍。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩球互受等大反向力且作用時間相同，所以動量變化量的量值相同。" },
      B: { verdict: "incorrect", reason: "甲、乙的衝量量值相同，因此甲的動量變化量不會是乙的 2 倍。" },
      C: { verdict: "correct", reason: "相同動量變化下，速度變化與質量成反比；乙質量為甲一半，所以 Δv 為 2 倍。" },
      D: { verdict: "incorrect", reason: "彈性碰撞只保證兩球總動能守恆，不代表甲的動能變化量是乙的 2 倍。" },
      E: { verdict: "incorrect", reason: "依牛頓第三定律，乙與甲所受撞擊力的量值相同，不是 2 倍。" }
    },
    takeaway: "碰撞時兩球 Δp 量值相同；同樣的 Δp，質量越小，Δv 越大。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-1": {
    encouragement: "器材題可以從「要量什麼」反推：力用彈簧秤、磁針看磁場、檢流計看微小電流、雷射做干涉。",
    keyIdea: "示範實驗的器材要能直接顯示欲觀察的物理量。",
    steps: [
      "摩擦力是力，適合用彈簧秤測量。",
      "載流導線會產生磁場，可用羅盤磁針偏轉來觀察。",
      "電磁感應產生的電流通常很小，用檢流計偵測。",
      "雙狹縫需要方向穩定、單色性佳的光源，雷射最合適。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "四組配對都正確：彈簧秤測力、羅盤看磁場、檢流計測感應電流、雷射做干涉。" },
      B: { verdict: "incorrect", reason: "磁效應應以羅盤觀察，電磁感應才用檢流計；此選項把兩者對調。" },
      C: { verdict: "incorrect", reason: "雷射不能直接測摩擦力，彈簧秤也不是雙狹縫光源。" },
      D: { verdict: "incorrect", reason: "檢流計不是測力工具，彈簧秤也無法偵測微小感應電流。" },
      E: { verdict: "incorrect", reason: "羅盤、彈簧秤、雷射與檢流計在四個實驗中的用途全被錯置。" }
    },
    takeaway: "器材對應：彈簧秤—力、羅盤—磁場、檢流計—小電流、雷射—干涉。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-2": {
    encouragement: "控制變因題先找兩組唯一不同之處：同光源、同植物，差別只剩太空與地面的重力環境。",
    keyIdea: "對照實驗中，唯一刻意改變的因素就是要研究的自變因。",
    steps: [
      "甲、乙使用相同植物、相同光源，其他條件也相同。",
      "甲在太空、乙在地面，最明顯差異是受到的有效重力環境不同。",
      "比較兩者生長方向與過程，可以辨識植物對重力的反應。",
      "所以這個實驗主要研究重力作用的影響。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "強作用發生在原子核尺度，太空與地面的強作用沒有被刻意改變。" },
      B: { verdict: "incorrect", reason: "弱作用主要參與粒子衰變，不是此植物對照實驗的變因。" },
      C: { verdict: "incorrect", reason: "兩組使用相同光源與條件，沒有特別改變電磁作用來比較。" },
      D: { verdict: "correct", reason: "太空與地面的主要控制差異是重力環境，因此可研究重力對植物生長的影響。" },
      E: { verdict: "incorrect", reason: "光合作用是生物過程，不是四種基本作用；而且兩組光照條件相同。" }
    },
    takeaway: "對照實驗先找唯一差異；唯一差異就是實驗要檢驗的因素。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-29": {
    encouragement: "譜線從 486 nm 移到更長波長，就是紅移；移得越多，代表遠離越快、通常也越遠。",
    keyIdea: "紅移表示星系遠離；依哈伯定律，遠離速率越大，距離越遠。",
    steps: [
      "甲的譜線由 486 nm 變成 492 nm，乙變成 500 nm，兩者波長都變長，都是紅移。",
      "紅移表示兩星系相對地球遠離。",
      "乙的波長增加量 14 nm，大於甲的 6 nm，所以乙遠離得較快。",
      "依哈伯定律，乙也比甲距離更遠；我們看到的是光過去出發時的狀態。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲譜線變長是紅移，表示遠離地球，不是靠近。" },
      B: { verdict: "correct", reason: "乙的譜線由 486 nm 移到 500 nm，發生紅移，表示正在遠離地球。" },
      C: { verdict: "incorrect", reason: "乙紅移量較大，依哈伯定律乙較遠，因此甲不是較遠者。" },
      D: { verdict: "correct", reason: "甲紅移量 6 nm 小於乙的 14 nm，所以甲的遠離速率較小。" },
      E: { verdict: "incorrect", reason: "星光傳到地球需要時間，我們觀測到的是星系過去發出的光，不是它們此刻剛發出的光。" }
    },
    takeaway: "譜線紅移越大 → 遠離越快；符合哈伯定律時 → 距離也越遠。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-31": {
    encouragement: "電磁爐加熱靠的是「變動磁場造成感應電流」；讓磁場更強或線圈更多，就能增強感應。",
    keyIdea: "交流電流產生變動磁場；提高電壓、電流或線圈匝數可增強鍋底感應電流與熱效應。",
    steps: [
      "交流電流在線圈中建立隨時間變化的磁場，鍋底因此產生感應電流。",
      "在其他條件不變時，提高交流電壓或電流可讓線圈磁場與磁通變化更強。",
      "增加線圈匝數也能增強線圈所產生的磁場。",
      "永久磁鐵只有穩定磁場；高壓直流穩定後也沒有持續磁通變化，無法有效持續加熱。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "其他條件不變時，提高交流電壓可增大線圈電流與變動磁場，使鍋底感應加熱增強。" },
      B: { verdict: "correct", reason: "交流電流增大會增強變動磁場，進而增大鍋底感應電流與發熱功率。" },
      C: { verdict: "incorrect", reason: "永久磁鐵提供近似不變的磁場，不會自行造成持續的感應電流來加速加熱。" },
      D: { verdict: "incorrect", reason: "直流電穩定後磁場不再隨時間改變，鍋底無法維持感應電流。" },
      E: { verdict: "correct", reason: "增加線圈匝數能增強磁場及磁通變化，提升鍋底的感應加熱效果。" }
    },
    takeaway: "電磁爐需要交流造成變動磁場；穩定直流或靜止永久磁鐵都不夠。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-46": {
    encouragement: "體重計不是量質量變了，而是量地板支持力；先由讀數求加速度，再分兩段算位移。",
    keyIdea: "體重計讀數對應支持力 N；由 N−mg＝ma 求每段加速度。",
    steps: [
      "前 10 s 讀 60 kgw，即 N＝600 N；mg＝500 N，所以 a＝(600−500)/50＝2 m/s² 向上。",
      "前段由靜止出發，位移 s₁＝at²/2＝100 m，10 s 後速率為 20 m/s。",
      "後 20 s 讀 45 kgw，即 N＝450 N，所以 a＝(450−500)/50＝−1 m/s²。",
      "後段速度由 20 m/s 降到 0，位移 s₂＝平均速率 10×20＝200 m；總位移 300 m。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "100 m 只算到最初 10 秒加速上升的位移，漏掉後面 20 秒。" },
      B: { verdict: "incorrect", reason: "150 m 不符合兩段加速度與時間計算所得的位移總和。" },
      C: { verdict: "incorrect", reason: "200 m 是後 20 秒減速階段的位移，還要加前段 100 m。" },
      D: { verdict: "incorrect", reason: "250 m 少算了 50 m，並非兩段運動位移的正確總和。" },
      E: { verdict: "correct", reason: "前段 100 m、後段 200 m，總位移為 300 m。" }
    },
    takeaway: "體重計變重代表向上加速度，變輕代表向下加速度；分段運動要逐段累加位移。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-105-47": {
    encouragement: "衛星質量看似是干擾資訊；把重力當向心力後，衛星自己的質量會直接約掉。",
    keyIdea: "圓軌道衛星速率 v＝√(GM地/r)，只和中心天體質量與軌道半徑有關。",
    steps: [
      "地球重力 GM地m/r² 提供衛星向心力 mv²/r。",
      "等式兩邊都有衛星質量 m，可以約掉。",
      "整理得 v＝√(GM地/r)，所以速率與軌道半徑平方根成反比。",
      "因此 v₁/v₂＝√(R₂/R₁)。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "軌道半徑越大，速率越小，因此不能是 √(R₁/R₂) 的正比形式。" },
      B: { verdict: "correct", reason: "由 v∝1/√r，可得 v₁/v₂＝√(R₂/R₁)。" },
      C: { verdict: "incorrect", reason: "衛星質量會在重力等於向心力的式子中約掉，不應留下 M₁、M₂。" },
      D: { verdict: "incorrect", reason: "此式不但保留衛星質量，也把正確的半徑反比關係寫錯。" },
      E: { verdict: "incorrect", reason: "雖含 R₂/R₁，但仍多出 M₁/M₂；圓軌道速率與衛星自身質量無關。" }
    },
    takeaway: "同繞地球的衛星：軌道越低，跑得越快；自身質量不影響圓軌道速率。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-4": {
    encouragement: "右手定則只要把拇指指向電流的北方，再看電纜正下方四指朝哪裡即可。",
    keyIdea: "長直導線電流向北時，導線正下方的磁場指向西方。",
    steps: [
      "右手拇指指向電流方向，也就是由南向北。",
      "其餘四指環繞導線的方向就是磁場方向。",
      "在導線正下方，電流造成的磁場指向西。",
      "羅盤原受地磁指北，加入向西磁場後，N 極會由北向西偏轉。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "電流向北時，導線正下方的磁場向西，因此磁針 N 極由北偏向西。" },
      B: { verdict: "incorrect", reason: "向東是把右手環繞方向判反；正下方磁場應向西。" },
      C: { verdict: "incorrect", reason: "磁針原先 N 極受地磁指北，不會突然以南方作為起始方向。" },
      D: { verdict: "incorrect", reason: "此選項同時把起始的地磁方向與電流磁場方向都判錯。" },
      E: { verdict: "incorrect", reason: "大電流會在羅盤處產生額外磁場，磁針不會維持完全不動。" }
    },
    takeaway: "長直導線用右手握：拇指指電流，四指繞出的方向就是磁場。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-29": {
    encouragement: "光電效應的核心是「光子把電子打出來」，所以一端連到愛因斯坦，一端連到光的粒子性。",
    keyIdea: "愛因斯坦以光量子解釋光電效應，這也成為光具有粒子性的證據。",
    steps: [
      "古典波動理論無法解釋光電效應的截止頻率。",
      "愛因斯坦提出光由一個個能量 hf 的光子組成。",
      "單一光子把能量交給金屬電子，能量足夠時電子逸出。",
      "因此光電效應同時和愛因斯坦理論、光的波粒二象性有關。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "愛因斯坦用光量子能量 E＝hf 成功解釋光電效應。" },
      B: { verdict: "incorrect", reason: "靜電感應是導體內電荷重新分布，不是光照金屬放出電子的光電效應。" },
      C: { verdict: "correct", reason: "光電效應支持光具有粒子性，和干涉所顯示的波動性合起來就是波粒二象性。" },
      D: { verdict: "incorrect", reason: "閃電是空氣被擊穿後的大量放電現象，並非光電效應。" },
      E: { verdict: "incorrect", reason: "蝙蝠主要利用超聲波回聲定位，和光電效應無關。" }
    },
    takeaway: "光電效應＝愛因斯坦光量子理論＝光粒子性的證據。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-104-46": {
    encouragement: "先把兩車碰後共同速度算出來，再只看小孩速度改變多少；安全帶的力就能由衝量求得。",
    keyIdea: "完全非彈性碰撞先用總動量守恆；安全帶平均力 F＝mΔv/Δt。",
    steps: [
      "汽車、駕駛與小孩總質量為 920＋60＋20＝1000 kg，以 30 m/s 前進；卡車 2000 kg，以 15 m/s 同向前進。",
      "兩車糾結後共同速率 v＝(1000×30＋2000×15)/(3000)＝20 m/s。",
      "小孩由 30 m/s 降到 20 m/s，速度改變量值為 10 m/s。",
      "平均力＝20×10/0.2＝1000 N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3000 N 高估小孩在 0.2 s 內速度改變 10 m/s 所需的平均力。" },
      B: { verdict: "incorrect", reason: "2500 N 並非由小孩質量 20 kg、Δv＝10 m/s 與 0.2 s 算得。" },
      C: { verdict: "incorrect", reason: "2000 N 相當於漏用正確碰後共同速率或碰撞時間。" },
      D: { verdict: "incorrect", reason: "1500 N 仍高於衝量 mΔv＝200 N·s 除以 0.2 s 的結果。" },
      E: { verdict: "correct", reason: "F＝mΔv/Δt＝20×10/0.2＝1000 N。" }
    },
    takeaway: "兩車黏住先用動量守恆求共同速度；乘客受力再用衝量除以碰撞時間。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-18": {
    encouragement: "尺度題從熟悉的層級排：地球繞太陽、太陽系在銀河系裡、銀河系又屬於星系團。",
    keyIdea: "正確宇宙尺度為地球＜太陽＜太陽系＜銀河系＜星系團。",
    steps: [
      "地球是行星，體積小於恆星太陽。",
      "太陽與所有繞行天體構成太陽系，所以太陽小於太陽系。",
      "太陽系只是銀河系中的一小部分。",
      "許多星系共同組成星系團，因此銀河系小於星系團。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "原子遠小於紅血球，正確局部順序應為夸克＜原子核＜原子＜紅血球。" },
      B: { verdict: "incorrect", reason: "原子比細胞核小得多，選項把原子與細胞核的順序顛倒。" },
      C: { verdict: "incorrect", reason: "地球小於木星，而且銀河系是星系團成員，不能比星系團更大。" },
      D: { verdict: "incorrect", reason: "銀河系小於包含許多星系的星系團，最後兩者順序相反。" },
      E: { verdict: "correct", reason: "地球＜太陽＜太陽系＜銀河系＜星系團的層級完全正確。" }
    },
    takeaway: "宇宙地址：地球在太陽系，太陽系在銀河系，銀河系在星系團。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-20": {
    encouragement: "每種元素都有像條碼一樣獨特的光譜，混合氣體裡只要出現氦的譜線，就能精準認出它。",
    keyIdea: "元素原子的能階不同，會產生特有的線光譜，可用來辨認氣體成分。",
    steps: [
      "不同元素的電子能階排列不同。",
      "電子躍遷時放出的光波長因此各有一組特徵。",
      "把混合氣體光譜和氦的標準譜線比對，就能判斷是否含氦。",
      "顏色、密度、折射率等整體性質容易受混合比例影響，辨識不如光譜精確。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "氦具有獨特線光譜，觀察是否出現其特徵譜線可精確辨認氦。" },
      B: { verdict: "incorrect", reason: "壓力隨溫度的變化主要反映氣體定律，無法精確指出混合氣體中是哪種元素。" },
      C: { verdict: "incorrect", reason: "少量氦加入混合氣體未必能用肉眼看出顏色，而且許多氣體本來無色。" },
      D: { verdict: "incorrect", reason: "混合氣體密度受各成分比例共同影響，不能唯一證明其中含氦。" },
      E: { verdict: "incorrect", reason: "折射率也受混合比例與其他氣體影響，不如元素特徵光譜具有專一性。" }
    },
    takeaway: "元素光譜就像原子的身分條碼，是辨認混合氣體成分的精準工具。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-21": {
    encouragement: "題目已給最強提示：它和中子變成質子、電子的衰變屬於同一種作用，那就是弱力。",
    keyIdea: "自由中子的 β 衰變由弱作用造成，因此題述影響核融合反應速率的也是弱力。",
    steps: [
      "中子衰變成質子、電子與反微中子的過程稱為 β 衰變。",
      "β 衰變是弱交互作用的典型現象。",
      "題目明說影響核融合速率的主要作用與此衰變屬於同一種基本交互作用。",
      "因此答案是弱力。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "靜電力會影響帶正電原子核彼此靠近，但不是題目提示的中子 β 衰變作用。" },
      B: { verdict: "incorrect", reason: "強力負責近距離束縛核子，但中子變成質子與電子的過程不是由強力主導。" },
      C: { verdict: "correct", reason: "中子的 β 衰變由弱作用造成，依題目「同一種基本交互作用」可鎖定弱力。" },
      D: { verdict: "incorrect", reason: "重力使太陽物質聚集，但不會直接使中子發生 β 衰變。" },
      E: { verdict: "incorrect", reason: "電力與磁力同屬電磁作用，不能解釋中子轉變成其他粒子的 β 衰變。" }
    },
    takeaway: "看到 β 衰變、中子轉質子，先想到弱交互作用。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-22": {
    encouragement: "都卜勒效應不挑波的種類，只要波源和觀察者有相對運動，接收到的頻率就可能改變。",
    keyIdea: "聲波與各種波長的電磁波都能發生都卜勒效應。",
    steps: [
      "都卜勒效應來自波源與觀察者的相對運動。",
      "它可出現在需要介質的聲波，也可出現在不需介質的電磁波。",
      "超聲波、可聽聲、次聲波都屬聲波，因此都適用。",
      "無線電波、可見光、X 光也都屬電磁波，同樣適用。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光是橫向電磁波，也會有紅移、藍移等都卜勒效應，所以不只縱波適用。" },
      B: { verdict: "incorrect", reason: "電磁波不需介質仍能發生都卜勒效應，因此不只適用於機械波。" },
      C: { verdict: "correct", reason: "不同波長的聲波與電磁波，只要存在相對運動，都可能呈現都卜勒效應。" },
      D: { verdict: "incorrect", reason: "X 光仍是電磁波，也能發生都卜勒頻移，沒有波長更短就失效的界線。" },
      E: { verdict: "incorrect", reason: "次聲波只是頻率低於人耳範圍，仍是聲波，也會有都卜勒效應。" }
    },
    takeaway: "都卜勒效應的條件是相對運動，不是特定波長、頻率或是否需要介質。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-103-23": {
    encouragement: "先把時速換成秒速，再用「動量改變÷時間」；這題三步就能完成。",
    keyIdea: "平均力 F＝mΔv/Δt，且 108 km/h＝30 m/s。",
    steps: [
      "把 108 km/h 除以 3.6，得到 30 m/s。",
      "棒球原本靜止，所以速度改變量是 30 m/s。",
      "動量改變量 Δp＝mΔv＝0.15×30＝4.5 kg·m/s。",
      "平均力 F＝Δp/Δt＝4.5/0.15＝30 N。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "16 N 並非以 0.15 kg、30 m/s 與 0.15 s 代入衝量公式所得。" },
      B: { verdict: "correct", reason: "F＝0.15×30÷0.15＝30 N。" },
      C: { verdict: "incorrect", reason: "45 是把數值或小數位處理錯誤；正確動量改變是 4.5 kg·m/s。" },
      D: { verdict: "incorrect", reason: "108 是題目給的 km/h 數值，不能直接當成牛頓。" },
      E: { verdict: "incorrect", reason: "200 N 遠高於在 0.15 秒內把 0.15 kg 棒球加速到 30 m/s 所需的平均力。" }
    },
    takeaway: "力和動量的橋梁：F平均＝mΔv/Δt；時速先除以 3.6 換成 m/s。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
