(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-110-31": {
    encouragement: "把螺線管想成一根可以開關的磁鐵，磁場方向與強弱就不會混在一起。",
    keyIdea: "通電螺線管的兩端像磁鐵的 N、S 極，內部磁場方向可用安培右手定則判斷。",
    steps: [
      "穩定電流流過螺線管時，會在管內外建立磁場。",
      "螺線管內部的磁力線較密，磁場通常比外側強。",
      "四指沿線圈電流方向彎曲，拇指所指就是管內磁場方向，也指向螺線管的 N 極。",
      "因此兩端可視為 N、S 極，且方向可用右手定則判斷。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "長螺線管的磁場主要集中在管內，外側磁場不是最大。" },
      B: { verdict: "incorrect", reason: "載流螺線管內中心附近的磁場較強且近似均勻，不是零。" },
      C: { verdict: "correct", reason: "通電螺線管的磁場形狀近似棒形磁鐵，因此兩端相當於 N 極與 S 極。" },
      D: { verdict: "incorrect", reason: "螺線管內磁場強度和電流量值有關；其他條件相同時，電流越大，磁場越強。" },
      E: { verdict: "correct", reason: "右手四指沿線圈電流方向，拇指可指出管內磁場與 N 極方向。" }
    },
    takeaway: "螺線管記兩件事：內部磁場較強；右手四指跟電流、拇指指 N 極。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-32": {
    encouragement: "這題只要先判斷磁鐵帶來的磁場，再用「感應磁場反抗變化」就能推出原磁場方向。",
    keyIdea: "N 極朝下接近時，向下磁通量增加；楞次定律使感應磁場向上。",
    steps: [
      "棒形磁鐵的 N 極朝下，N 極外的磁力線向外，所以穿過下方螺線管的磁場方向向下。",
      "磁鐵接近時，向下的磁通量增加；感應電流要反抗此變化，因此產生向上的感應磁場。",
      "題目說導線原有電流增大，表示感應電流和原電流同方向。",
      "因此管內原磁場向上；電流增大後方向不變、磁場變強。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若原磁場向下，向上感應電流會使原電流減小，和題目觀察不符。" },
      B: { verdict: "correct", reason: "感應電流產生向上磁場且使原電流增大，可知原電流所產生的磁場也向上。" },
      C: { verdict: "incorrect", reason: "題目明說電流增大；螺線管磁場與電流相關，因此磁場不會減弱。" },
      D: { verdict: "correct", reason: "原電流和感應電流同方向，總電流增加，所以向上的磁場方向不變而強度增加。" },
      E: { verdict: "incorrect", reason: "電流量值已增加，其他條件不變時，螺線管磁場強度也會增加。" }
    },
    takeaway: "楞次定律先判斷感應磁場；再看感應電流讓原電流增加或減少，就能反推原磁場。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-33": {
    encouragement: "核能題先分清楚「分裂」和「融合」：地上核電廠主要分裂，太陽主要融合。",
    keyIdea: "鈾-235 可核分裂釋能；原子彈與核電廠都能利用分裂；太陽靠核融合並損失少量質量。",
    steps: [
      "鈾-235 吸收中子後可發生核分裂，並釋出大量能量。",
      "原子彈讓分裂鏈式反應快速進行；核電廠則控制反應速率，兩者都可用核分裂。",
      "太陽內部把較輕的原子核融合成較重的原子核，並將少量質量轉成能量。",
      "太陽持續輻射能量，所以其總質量會隨時間略微減少。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核分裂主要產生較輕原子核、中子與能量，不是因為「都會放出夸克」才可發電。" },
      B: { verdict: "correct", reason: "原子彈與現行核能電廠都能利用重原子核分裂所釋放的能量。" },
      C: { verdict: "correct", reason: "鈾-235 是可分裂核種，核分裂能量可被核電廠轉為電能。" },
      D: { verdict: "incorrect", reason: "太陽能板利用光電效應把日光轉成電能，不是直接把核能轉成電能。" },
      E: { verdict: "correct", reason: "太陽靠核融合發光；輻射出去的能量對應少量質量，因此總質量逐漸減少。" }
    },
    takeaway: "核電廠：受控核分裂；原子彈：快速核分裂；太陽：核融合。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-57": {
    encouragement: "判斷力學能時，找「物體在動、位置高度改變、彈簧形變」這三個線索就好。",
    keyIdea: "力學能包含動能、重力位能與彈性位能。",
    steps: [
      "隕石下墜時，重力位能轉成動能。",
      "彈簧振盪時，彈性位能與物體動能來回轉換。",
      "水力發電時，水的重力位能轉成流動與渦輪的動能，再轉成電能。",
      "燃煤與太陽能板主要涉及化學能、熱能或光能，不以力學能轉換為核心。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "隕石落向月球時高度降低、速率增加，重力位能轉成動能。" },
      B: { verdict: "correct", reason: "彈簧與物體振盪時，彈性位能和動能會週期性互換。" },
      C: { verdict: "incorrect", reason: "煤燃燒主要是化學能轉成熱能，題述過程不以力學能轉換為主。" },
      D: { verdict: "incorrect", reason: "太陽能板以光電效應將光能直接轉成電能，沒有必要經過力學能。" },
      E: { verdict: "correct", reason: "水庫水的重力位能先轉成水流與渦輪的動能，涉及力學能轉換。" }
    },
    takeaway: "力學能三兄弟：動能、重力位能、彈性位能。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-58": {
    encouragement: "終端速率不用硬背數字；想像降落傘張開後空氣阻力變大，人就必須降到更慢才重新平衡。",
    keyIdea: "終端速率時重力與阻力平衡；截面積增大會使新的終端速率降低。",
    steps: [
      "打開傘前達到 v₁ 時，向下重力和向上空氣阻力平衡。",
      "降落傘張開使截面積大增，在相同速率下會產生更大的空氣阻力。",
      "此時阻力大於重力，跳傘者減速。",
      "直到較低速率 v₂ 時阻力再度等於重力，因此 v₁＞v₂。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題目未保證起跳初速 v₀ 大於終端速率；一般是下落後加速到 v₁。" },
      B: { verdict: "correct", reason: "張傘後截面積增大，同樣重力可在較低速率下與阻力平衡，所以 v₁＞v₂。" },
      C: { verdict: "incorrect", reason: "v₀ 與 v₂ 的大小不能只由題目保證，初速可能高於或低於張傘後終端速率。" },
      D: { verdict: "incorrect", reason: "張傘的目的就是增大阻力、降低終端速率，不會使 v₂ 大於 v₁。" },
      E: { verdict: "incorrect", reason: "截面積改變後，達到平衡所需的速率也改變，兩個終端速率不相等。" }
    },
    takeaway: "質量相同時，迎風面積越大，終端速率通常越小。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-1": {
    encouragement: "三個事件只要抓住年代：先發現原子核，再有波耳軌道，夸克則晚得多。",
    keyIdea: "拉塞福金箔實驗早於波耳原子模型，而夸克是二十世紀後期才被提出與證實。",
    steps: [
      "拉塞福以 α 粒子散射實驗發現原子具有很小而集中的原子核，對應丙。",
      "之後波耳提出電子只能在特定軌道與能階運行，對應乙。",
      "夸克模型與相關實驗證據出現在更晚的二十世紀後半，對應甲。",
      "所以時間順序為丙→乙→甲。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "夸克的發現最晚，不會排在原子核與波耳模型之前。" },
      B: { verdict: "incorrect", reason: "夸克仍是三者中最晚，不能排第一。" },
      C: { verdict: "incorrect", reason: "波耳特定軌道模型建立在原子核模型之後，乙不會早於丙。" },
      D: { verdict: "incorrect", reason: "乙雖早於夸克甲，但原子核丙還要更早，不能排最後。" },
      E: { verdict: "correct", reason: "先有金箔實驗的原子核，再有特定軌道模型，最後才發現夸克。" }
    },
    takeaway: "簡化時序：拉塞福原子核 → 波耳特定軌道 → 夸克。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-2": {
    encouragement: "相機放手時不是靜止，它還帶著熱氣球向上的 5 m/s；把這個初速放進公式就能算對。",
    keyIdea: "忽略阻力時可用 v²＝v₀²＋2gh；速度量值不受正負方向選擇影響。",
    steps: [
      "相機離手瞬間仍以 5.0 m/s 向上，所以初速量值 v₀＝5.0 m/s。",
      "相機從 100 m 高處落到地面，重力使其增加的速率平方為 2gh＝2×10×100。",
      "因此落地前 v²＝5²＋2000＝2025。",
      "√2025＝45，所以速度量值約為 45 m/s。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "55 m/s 相當於把初速直接和落下所得速率相加，沒有依平方關係計算。" },
      B: { verdict: "correct", reason: "由 v²＝5²＋2×10×100＝2025，得到 v＝45 m/s。" },
      C: { verdict: "incorrect", reason: "35 m/s 對應的動能不足以反映 100 m 高度所減少的重力位能。" },
      D: { verdict: "incorrect", reason: "25 m/s 遠低於由 100 m 自由落下應達到的速率。" },
      E: { verdict: "incorrect", reason: "15 m/s 只比初速大一點，不符合相機經過 100 m 落差的加速結果。" }
    },
    takeaway: "物體從移動中的載具放開時，會保留載具當下的速度，不是從靜止開始。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-24": {
    encouragement: "量子現象的兩個招牌證據很好認：光電效應看見光的粒子性，原子線光譜看見能階。",
    keyIdea: "光電效應支持光的粒子性；氫原子的離散光譜可由量子化能階解釋。",
    steps: [
      "電子通過雙狹縫形成干涉條紋，是電子波動性的證據。",
      "氫原子只能在特定能階間躍遷，因此放出的光只含特定波長，形成線光譜。",
      "光電效應要用一個個光子傳遞能量，顯示光具有粒子性。",
      "許多量子現象超出古典電磁理論能完整解釋的範圍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電子雙狹縫的干涉條紋顯示電子具有波動性，不是粒子性的證據。" },
      B: { verdict: "incorrect", reason: "氫原子只放出特定波長，屬於不連續的線光譜，不是連續光譜。" },
      C: { verdict: "correct", reason: "光電效應顯示光以一個個光子傳遞能量，是光具有粒子性的證據。" },
      D: { verdict: "incorrect", reason: "古典電磁理論無法完整解釋光電效應與離散能階等量子現象。" },
      E: { verdict: "correct", reason: "電子在特定能階間躍遷會產生特定波長，能解釋氫原子線光譜。" }
    },
    takeaway: "干涉看波動性；光電效應看粒子性；原子線光譜看量子化能階。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-40": {
    encouragement: "題目多加了「一次直接轉換」這道門檻；先把中間步驟寫出來，就知道哪些不能選。",
    keyIdea: "風力可把動能經發電機直接轉成電能；太陽能電池可把光能直接轉成電能。",
    steps: [
      "風推動葉片與發電機轉動，是動能轉成電能的一次主要轉換。",
      "太陽能電池利用光電效應，讓光能直接轉成電能。",
      "水力發電要先把水的位能轉成水流與渦輪的動能，再轉成電能。",
      "天然氣也要先把化學能變成熱能、動能，才由發電機產電。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乾電池主要將化學能直接轉成電能，不是熱能轉電能。" },
      B: { verdict: "incorrect", reason: "水的位能先轉成水流和渦輪動能，再轉成電能，不是一次直接轉換。" },
      C: { verdict: "correct", reason: "風的動能帶動發電機，可視為動能直接轉為電能。" },
      D: { verdict: "correct", reason: "太陽能電池利用光電效應，把吸收的光能直接轉成電能。" },
      E: { verdict: "incorrect", reason: "天然氣的化學能要先經燃燒成熱，再推動渦輪，並非一次直接轉成電能。" }
    },
    takeaway: "看能源轉換別只看起點和終點；題目若問「直接」，中間是否還有熱能或動能非常重要。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-45": {
    encouragement: "先記住一句話：「速率不變」不一定「速度不變」；繞圓時方向一直變，所以仍需要合力。",
    keyIdea: "等速度直線運動合力為零；等速圓周運動需要向心力，衛星的向心力由重力提供。",
    steps: [
      "民航機等速度直線飛行時，速度大小與方向都不變，加速度為零，所以合力為零。",
      "衛星等速繞地球時速度方向持續改變，具有向心加速度，合力不為零。",
      "在理想圓軌道中，地球重力正好提供衛星需要的向心力。",
      "衛星一旦在軌道上，可在不持續點火的情況下靠慣性與重力運行。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "等速度直線飛行表示加速度為零，依牛頓第二定律可知合力為零。" },
      B: { verdict: "incorrect", reason: "衛星雖然速率不變，方向卻持續改變，仍有向心加速度與向心合力。" },
      C: { verdict: "correct", reason: "人造衛星繞地球的向心力由地球對它的重力提供。" },
      D: { verdict: "correct", reason: "理想穩定軌道不需持續燃燒燃料推進；衛星靠慣性前進並受重力彎轉。" },
      E: { verdict: "incorrect", reason: "戰鬥機的向心合力可由機翼升力、重力等共同提供，不一定只有重力。" }
    },
    takeaway: "等速度直線：合力為零；等速圓周：速率不變但方向改變，合力指向圓心。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-5": {
    encouragement: "防靜電服的任務就是讓多餘電荷容易離開；電阻越小越好，抓住這點就能找出錯句。",
    keyIdea: "導電性越好代表電阻越小，電荷越容易移動並導走。",
    steps: [
      "石化環境中，靜電放電可能引燃易燃氣體，所以要避免電荷累積。",
      "在布料中混入導電纖維，可提供電荷移動與接地導出的路徑。",
      "每單位長度電阻越小，電荷越容易流動。",
      "D 說電阻越大反而越容易流動，方向完全相反，因此是不正確敘述。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "這是正確敘述；金屬或導電有機材料都可用來製成導電纖維。" },
      B: { verdict: "incorrect", reason: "這是正確敘述；均勻混入適量導電纖維可讓織物具有防靜電能力。" },
      C: { verdict: "incorrect", reason: "這是正確敘述；導電織物可讓電荷移動，降低服裝表面累積靜電。" },
      D: { verdict: "correct", reason: "這是題目要找的錯誤敘述；電阻越大越妨礙電荷流動，並非越容易導走。" },
      E: { verdict: "incorrect", reason: "這是正確敘述；接地可把多餘電荷導走，中和也能減少淨電荷累積。" }
    },
    takeaway: "防靜電要讓電荷容易流動：導電性高，也就是電阻低。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-6": {
    encouragement: "電磁感應只問一件事：穿過大線圈的磁通量有沒有改變；逐項檢查就能找到不可能的一項。",
    keyIdea: "只有大線圈所包圍的磁通量隨時間改變，才會在大線圈中產生感應電流。",
    steps: [
      "移動小線圈、改變小線圈電壓、交換電源正負端或切換小線圈電流，都會改變穿過大線圈的磁場。",
      "磁通量改變時，大線圈產生感應電動勢。",
      "大線圈必須形成閉合迴路，感應電流才會流過檢流計。",
      "只切換大線圈自己的開關，若外來磁場維持不變，就不會創造持續的感應電動勢。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "小線圈進出會改變大線圈所穿過的磁通量，因此可能產生感應電流。" },
      B: { verdict: "incorrect", reason: "改變小線圈電壓會改變其電流與磁場，進而改變大線圈磁通量。" },
      C: { verdict: "incorrect", reason: "交換正負端會改變小線圈電流與磁場方向，磁通量改變可產生感應電流。" },
      D: { verdict: "incorrect", reason: "小線圈通電與斷電會使磁場由有到無或由無到有，可在大線圈產生瞬間感應電流。" },
      E: { verdict: "correct", reason: "只開關大線圈而不改變外來磁通量，沒有感應電動勢，因此不可能靠這項操作產生感應電流。" }
    },
    takeaway: "電磁感應的開關不在「電路有沒有動」，而在「磁通量有沒有隨時間改變」。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-21": {
    encouragement: "密閉、定容、加熱三個關鍵字各管一件事：分子數不變、體積不變、平均動能增加。",
    keyIdea: "密閉瓶不漏氣，所以分子數不變；溫度升高時，分子平均動能與總動能都增加。",
    steps: [
      "金屬瓶密閉，氦原子不能進出，因此加熱前後分子數相同。",
      "把瓶子放入沸水後，瓶內氣體溫度上升。",
      "氣體分子平均動能和絕對溫度成正比，所以加熱後平均動能較大。",
      "分子數不變且平均動能增加，瓶內氣體總動能也增加。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "瓶子密閉且沒有漏氣，氦氣分子無法進出，所以分子數不變。" },
      B: { verdict: "incorrect", reason: "加熱不會讓密閉瓶中的氦氣分子消失，分子數不會變少。" },
      C: { verdict: "incorrect", reason: "置入沸水前溫度較低，因此分子平均動能較小，不是較大。" },
      D: { verdict: "correct", reason: "加熱使絕對溫度升高，分子平均動能也跟著增加。" },
      E: { verdict: "incorrect", reason: "分子數雖不變，但每個分子的平均動能增加，所以總動能也增加。" }
    },
    takeaway: "密閉決定粒子數，溫度決定平均動能；兩個條件不要混在一起。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-22": {
    encouragement: "四種基本力分工很清楚：日常接觸靠電磁力、原子核靠強力、粒子衰變常靠弱力。",
    keyIdea: "強力在原子核尺度克服質子排斥；弱力使自由中子衰變，且作用距離比強力更短。",
    steps: [
      "摩擦力和正向力來自接觸面原子間的電磁作用，不是重力。",
      "原子核內質子互相靜電排斥，但短距離強力能把核子束縛在一起。",
      "單獨中子不穩定，可經弱作用衰變成質子、電子與反微中子。",
      "強力作用尺度約為原子核大小，弱力的作用範圍還要更短。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "摩擦力與正向力主要源自原子間的電磁作用，不是重力。" },
      B: { verdict: "correct", reason: "核子間的強力在極短距離內足以克服質子間的靜電排斥，使原子核能穩定存在。" },
      C: { verdict: "correct", reason: "自由中子的 β 衰變由弱作用造成，產物包含質子、電子與反微中子。" },
      D: { verdict: "incorrect", reason: "原子核中的中子是否衰變取決於能量與核結構，不是因強力「克服弱力」而極易衰變。" },
      E: { verdict: "correct", reason: "強力的有效範圍約在原子核尺度，弱作用的有效距離更短。" }
    },
    takeaway: "接觸力—電磁力；核子黏合—強力；β 衰變—弱力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-50": {
    encouragement: "潛艇雖然向上移動，卻正在減速，所以加速度其實向下；先抓這個方向，受力式就會對。",
    keyIdea: "上升減速代表合力向下；浮力向上，重力與水阻力都向下。",
    steps: [
      "潛艇向上運動時，水的阻力方向與運動相反，所以阻力 Fᵣ 向下。",
      "重力 mg 向下，浮力 Fʙ 向上。",
      "潛艇正在減速上升，因此加速度與速度反向，也就是向下。",
      "向下合力表示 mg＋Fᵣ＞Fʙ，整理得 Fʙ−Fᵣ＜mg。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Fʙ＋Fᵣ＝mg 沒有依力的實際方向相加，且會導出不符合減速上升的關係。" },
      B: { verdict: "incorrect", reason: "Fʙ−Fᵣ＝mg 表示合力為零，潛艇會等速上升，不是減速。" },
      C: { verdict: "correct", reason: "上升減速需要向下合力，所以 mg＋Fᵣ＞Fʙ，等價於 Fʙ−Fᵣ＜mg。" },
      D: { verdict: "incorrect", reason: "Fʙ＋Fᵣ＜mg 把向下的阻力當成與向上浮力同方向，受力方向不正確。" },
      E: { verdict: "incorrect", reason: "Fʙ−Fᵣ＞mg 會使向上合力為正，潛艇應加速上升，和題意相反。" }
    },
    takeaway: "物體往上不代表合力向上；若它往上減速，速度向上、加速度與合力都向下。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-108-51": {
    encouragement: "週期從 24 小時縮成 3 小時，看似只差 8 倍；用克卜勒定律後，軌道半徑正好差 4 倍。",
    keyIdea: "繞同一顆地球時 T²∝r³；重力 F∝1/r²。",
    steps: [
      "同步衛星週期約 24 小時，新衛星週期 3 小時，所以週期比為 24／3＝8。",
      "由 T²∝r³，可得軌道半徑比 r同步／r新＝8^(2/3)＝4。",
      "兩衛星質量相同，所受重力和軌道半徑平方成反比。",
      "新衛星距離縮為 1/4，重力變為 4²＝16 倍。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "週期比 8 對應半徑比 4；重力反比於半徑平方，所以新衛星受力為 16 倍。" },
      B: { verdict: "incorrect", reason: "8 是週期倍數，不能直接當成重力倍數。" },
      C: { verdict: "incorrect", reason: "兩衛星軌道半徑不同，所受地球重力不會相同。" },
      D: { verdict: "incorrect", reason: "新衛星軌道較低、離地球較近，重力應較大，不是縮成 1/8。" },
      E: { verdict: "incorrect", reason: "1/16 是把距離與重力關係顛倒；半徑較小應使重力增加 16 倍。" }
    },
    takeaway: "衛星週期先用 T²∝r³ 換成半徑，再用 F∝1/r² 比重力。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-15": {
    encouragement: "把四位同學的話分開判斷，不必一次處理全部：核子之間有強力，弱力範圍很短，牛頓也沒有直接量到蘋果引力。",
    keyIdea: "質子—中子與中子—中子間都有強力；弱力作用距離短於電磁力。",
    steps: [
      "原子核中的質子與中子都是核子，彼此有強力，所以甲正確。",
      "中子與中子之間也有強力，所以乙正確。",
      "弱力只在極短距離明顯，電磁力卻可延伸到很遠，所以丙錯誤。",
      "牛頓由天體與地面運動推論萬有引力，並非直接量測蘋果和地球間引力隨距離的變化，所以丁錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不只甲正確，乙所說的中子與中子間也有強力。" },
      B: { verdict: "incorrect", reason: "乙正確，但甲也正確，因此不能選「僅有乙」。" },
      C: { verdict: "incorrect", reason: "丙錯誤；弱力作用距離遠比電磁力短。" },
      D: { verdict: "incorrect", reason: "丁錯誤；牛頓沒有直接量測蘋果與地球之間微小引力的距離平方關係。" },
      E: { verdict: "correct", reason: "甲、乙都正確，而丙、丁錯誤，所以僅有甲乙。" },
      F: { verdict: "incorrect", reason: "甲正確，但丁錯誤；牛頓的萬有引力定律並非由該直接量測得到。" }
    },
    takeaway: "強力會作用在各種核子配對之間，包括質子—中子與中子—中子。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-18": {
    encouragement: "光電效應最關鍵的不是光有多亮，而是頻率必須先跨過一道門檻。",
    keyIdea: "單一光子能量 E＝hf；頻率低於截止頻率時，再強的光也不能打出光電子。",
    steps: [
      "金屬要放出電子，單一光子能量必須大於金屬的逸出功。",
      "由 E＝hf 可知，光子能量由頻率決定。",
      "因此入射光頻率必須高於某個截止頻率，才會產生光電子。",
      "這種一個光子把能量交給一個電子的結果，支持光的粒子性。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "光電子數目主要和高於門檻後的光強度、光子數有關，不是簡單與頻率成正比。" },
      B: { verdict: "incorrect", reason: "光再強，若頻率低於截止頻率，單一光子能量仍不足，不能產生光電子。" },
      C: { verdict: "correct", reason: "存在截止頻率表示能量以一個個 hf 的光子傳遞，是光具有粒子性的關鍵證據。" },
      D: { verdict: "incorrect", reason: "要產生光電子需頻率夠高，也就是波長小於某上限，不是波長須大於特定值。" },
      E: { verdict: "incorrect", reason: "光電效應沒有要求波長與強度都大於門檻；真正必要的是頻率高於截止頻率。" }
    },
    takeaway: "光電效應先看頻率門檻，再看光強度；低頻光不是加亮就能成功。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-61": {
    encouragement: "碰撞題先守住兩條原則：兩球互推力量一樣大，沒有外力時總動量守恆。",
    keyIdea: "碰撞內力大小相等、方向相反；由題述碰撞前後速度可推出甲球質量較小。",
    steps: [
      "碰撞時甲、乙互相施力，依牛頓第三定律，兩球受力量值相同。",
      "水平軌道光滑，系統沒有水平外力，所以碰撞前後總動量向量和不變。",
      "設甲、乙質量為 m、M；由動量守恆可整理成 2mv₀＝M(v₀−u)，其中乙碰後速率 u＜v₀。",
      "因 v₀−u＜v₀，可得 2m＜M，所以甲球質量比乙球小。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碰撞時兩球互為作用力與反作用力，受力量值相同，不是甲較大。" },
      B: { verdict: "correct", reason: "軌道光滑、無水平外力，因此兩球系統總動量在碰撞前後守恆。" },
      C: { verdict: "incorrect", reason: "總動量向量和保持不變，不會因乙球變慢就整體變小。" },
      D: { verdict: "correct", reason: "由 2mv₀＝M(v₀−u) 且 u＜v₀，可知 2m＜M，因此甲球質量較小。" },
      E: { verdict: "incorrect", reason: "甲速率大小不變、乙速率卻變小，系統總動能減少，因此不是彈性碰撞。" }
    },
    takeaway: "碰撞中每球動量會變，但封閉系統的總動量不變；是否彈性還要另查總動能。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-106-14": {
    encouragement: "聲音也是波，只要是波常見的反射、折射、干涉、繞射和都卜勒效應，它都能做到。",
    keyIdea: "聲波具有一般波動現象，也會因聲源與聽者相對運動產生都卜勒效應。",
    steps: [
      "聲波進入溫度或介質不同的區域，速率改變，可發生折射。",
      "兩列聲波重疊會干涉；遇到與波長相近的障礙或開口會繞射。",
      "聲波遇到牆面可反射，回聲就是例子。",
      "聲源與聽者有相對運動時，聽到的頻率改變，這是都卜勒效應。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "聲波不只有折射與反射，也會干涉、繞射並產生都卜勒效應。" },
      B: { verdict: "incorrect", reason: "反射與都卜勒效應會發生，但折射、干涉、繞射也同樣能發生在聲波上。" },
      C: { verdict: "incorrect", reason: "甲、丁、戊正確，但還漏掉聲波的干涉乙與繞射丙。" },
      D: { verdict: "incorrect", reason: "甲乙丙丁都正確，但聲波也會有都卜勒效應戊。" },
      E: { verdict: "correct", reason: "折射、干涉、繞射、反射與都卜勒效應都能在聲波上觀察到。" }
    },
    takeaway: "聲波的五種常見現象：反射、折射、干涉、繞射、都卜勒效應。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  }
});
