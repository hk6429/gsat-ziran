window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-84-83": {
    encouragement: "這題看起來像要一次猜二十六個代碼，其實只要先抓住「同週期、同族與化合物」三類提示，就能一步步定位矽。",
    keyIdea: "提示6給出地殼含量u＞e＞g，依序對應氧、矽、鋁，所以矽的代碼是e。",
    steps: [
      "提示6說地殼中含量較多的三種元素依序為u＞e＞g；常見順序是氧＞矽＞鋁。",
      "因此u是氧、e是矽、g是鋁；再用提示1可確認e和鈉f、氬z同在第三週期。",
      "所以矽對應代碼e，也就是選E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "代碼a由表三可定位為氖，不是矽。" },
      B: { verdict: "incorrect", reason: "代碼b依提示5與12可定位為硼，不是矽。" },
      C: { verdict: "incorrect", reason: "代碼c與v、w同族且皆為金屬，可定位為鎂，不是矽。" },
      D: { verdict: "incorrect", reason: "代碼d位於第四週期且名稱含「石」部，可定位為硒，不是矽。" },
      E: { verdict: "correct", reason: "提示6的地殼含量順序u＞e＞g對應氧＞矽＞鋁，所以e就是矽。" },
      F: { verdict: "incorrect", reason: "代碼f已在表三標為鈉，不是矽。" },
      G: { verdict: "incorrect", reason: "代碼g由地殼含量提示可定位為鋁，不是矽。" },
      H: { verdict: "incorrect", reason: "代碼h與e、i同族，位於第二週期，對應碳，不是矽。" },
      I: { verdict: "incorrect", reason: "代碼i與h、e同族，位於第四週期，對應鍺，不是矽。" },
      J: { verdict: "incorrect", reason: "代碼j位於第二週期第五族，對應氮，不是矽。" },
      K: { verdict: "incorrect", reason: "代碼k位於第三週期第六族，對應硫，不是矽。" },
      L: { verdict: "incorrect", reason: "代碼l已在表三標為氦，不是矽。" },
      M: { verdict: "incorrect", reason: "代碼m位於第三週期第七族，對應氯，不是矽。" },
      N: { verdict: "incorrect", reason: "代碼n依提示12為類金屬，位於第四週期第五族，對應砷。" },
      O: { verdict: "incorrect", reason: "代碼o已在表三標為鋰，不是矽。" },
      P: { verdict: "incorrect", reason: "提示10指出常溫下為液體的元素是p，因此p是溴。" },
      Q: { verdict: "incorrect", reason: "代碼q位於第二週期第七族，對應氟，不是矽。" },
      R: { verdict: "incorrect", reason: "代碼r位於第四週期第三族，對應鎵，不是矽。" },
      S: { verdict: "incorrect", reason: "代碼s已在表三標為氫，不是矽。" },
      T: { verdict: "incorrect", reason: "代碼t已在表三標為鉀，不是矽。" },
      U: { verdict: "incorrect", reason: "提示8中的s₂u是水H₂O，所以u是氧。" },
      V: { verdict: "incorrect", reason: "代碼v與c、w同族且位於第二週期，對應鈹。" },
      W: { verdict: "incorrect", reason: "代碼w與v、c同族且位於第四週期，對應鈣。" },
      X: { verdict: "incorrect", reason: "提示8中的xs₃是PH₃，所以x是磷。" },
      Y: { verdict: "incorrect", reason: "代碼y已在表三標為氪，不是矽。" },
      Z: { verdict: "incorrect", reason: "代碼z已在表三標為氬，不是矽。" }
    },
    takeaway: "遇到代碼週期表，先用最有辨識力的提示鎖定幾個元素，再用週期與族的位置補齊。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-84": {
    encouragement: "不必把所有提示同時塞進腦中；先排好第二週期的一列，氮的位置就會很清楚。",
    keyIdea: "第二週期依序為鋰o、鈹v、硼b、碳h、氮j、氧u、氟q、氖a，所以氮是j。",
    steps: [
      "提示5、6與8可先找到第二週期的硼b、碳h、氧u，表三另給鋰o、氖a。",
      "依週期表由左到右排列，可補出鈹v、氮j、氟q。",
      "氮位在碳與氧之間，因此代碼是j，選J。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "代碼a是第二週期最右側的氖，不是氮。" },
      B: { verdict: "incorrect", reason: "代碼b依提示5與12是硼，不是氮。" },
      C: { verdict: "incorrect", reason: "代碼c位於第三週期第二族，對應鎂。" },
      D: { verdict: "incorrect", reason: "代碼d位於第四週期第六族，對應硒。" },
      E: { verdict: "incorrect", reason: "代碼e由地殼含量順序可定位為矽。" },
      F: { verdict: "incorrect", reason: "代碼f已在表三標為鈉。" },
      G: { verdict: "incorrect", reason: "代碼g由提示6可定位為鋁。" },
      H: { verdict: "incorrect", reason: "代碼h位於第二週期第四族，對應碳。" },
      I: { verdict: "incorrect", reason: "代碼i位於第四週期第四族，對應鍺。" },
      J: { verdict: "correct", reason: "第二週期第五族位在碳h與氧u之間，正是氮，因此代碼為j。" },
      K: { verdict: "incorrect", reason: "代碼k位於第三週期第六族，對應硫。" },
      L: { verdict: "incorrect", reason: "代碼l已在表三標為氦。" },
      M: { verdict: "incorrect", reason: "代碼m位於第三週期第七族，對應氯。" },
      N: { verdict: "incorrect", reason: "代碼n位於第四週期第五族，對應砷。" },
      O: { verdict: "incorrect", reason: "代碼o已在表三標為鋰。" },
      P: { verdict: "incorrect", reason: "提示10指出p是常溫液態的溴。" },
      Q: { verdict: "incorrect", reason: "代碼q位於第二週期第七族，對應氟。" },
      R: { verdict: "incorrect", reason: "代碼r位於第四週期第三族，對應鎵。" },
      S: { verdict: "incorrect", reason: "代碼s已在表三標為氫。" },
      T: { verdict: "incorrect", reason: "代碼t已在表三標為鉀。" },
      U: { verdict: "incorrect", reason: "提示8的s₂u為H₂O，所以u是氧。" },
      V: { verdict: "incorrect", reason: "代碼v位於第二週期第二族，對應鈹。" },
      W: { verdict: "incorrect", reason: "代碼w位於第四週期第二族，對應鈣。" },
      X: { verdict: "incorrect", reason: "提示8的xs₃為PH₃，所以x是磷。" },
      Y: { verdict: "incorrect", reason: "代碼y已在表三標為氪。" },
      Z: { verdict: "incorrect", reason: "代碼z已在表三標為氬。" }
    },
    takeaway: "同一週期由左到右的順序固定；先找到左右鄰居，就能鎖定中間元素。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-85": {
    encouragement: "鎵不常見也沒關係；用它在週期表的位置推理，比死背元素性質更可靠。",
    keyIdea: "硼b所在的第三族共有硼、鋁、鎵；鋁是g，因此第四週期的鎵就是r。",
    steps: [
      "提示5說b所在一族有兩個金屬，符合硼、鋁、鎵這一族；所以b是硼。",
      "提示6可知g是鋁，三者同族由上到下依序為b、g、r。",
      "鎵位於鋁下方，因此代碼是r，選R。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "代碼a是氖，不在鎵所在的第三族。" },
      B: { verdict: "incorrect", reason: "代碼b是硼，雖與鎵同族，但位於第二週期。" },
      C: { verdict: "incorrect", reason: "代碼c是鎂，位於第三週期第二族。" },
      D: { verdict: "incorrect", reason: "代碼d是硒，位於第四週期第六族。" },
      E: { verdict: "incorrect", reason: "代碼e是矽，位於第三週期第四族。" },
      F: { verdict: "incorrect", reason: "代碼f已在表三標為鈉。" },
      G: { verdict: "incorrect", reason: "代碼g是鋁，與鎵同族但在上一個週期。" },
      H: { verdict: "incorrect", reason: "代碼h是碳，位於第二週期第四族。" },
      I: { verdict: "incorrect", reason: "代碼i是鍺，與鎵同週期但在右邊一族。" },
      J: { verdict: "incorrect", reason: "代碼j是氮，位於第二週期第五族。" },
      K: { verdict: "incorrect", reason: "代碼k是硫，位於第三週期第六族。" },
      L: { verdict: "incorrect", reason: "代碼l已在表三標為氦。" },
      M: { verdict: "incorrect", reason: "代碼m是氯，位於第三週期第七族。" },
      N: { verdict: "incorrect", reason: "代碼n是砷，與鎵同週期但在第五族。" },
      O: { verdict: "incorrect", reason: "代碼o已在表三標為鋰。" },
      P: { verdict: "incorrect", reason: "提示10指出代碼p是溴。" },
      Q: { verdict: "incorrect", reason: "代碼q是氟，位於第二週期第七族。" },
      R: { verdict: "correct", reason: "第三族由上到下為硼b、鋁g、鎵r，因此鎵的代碼是r。" },
      S: { verdict: "incorrect", reason: "代碼s已在表三標為氫。" },
      T: { verdict: "incorrect", reason: "代碼t已在表三標為鉀。" },
      U: { verdict: "incorrect", reason: "代碼u是氧，位於第二週期第六族。" },
      V: { verdict: "incorrect", reason: "代碼v是鈹，位於第二週期第二族。" },
      W: { verdict: "incorrect", reason: "代碼w是鈣，位於第四週期第二族。" },
      X: { verdict: "incorrect", reason: "代碼x是磷，位於第三週期第五族。" },
      Y: { verdict: "incorrect", reason: "代碼y已在表三標為氪。" },
      Z: { verdict: "incorrect", reason: "代碼z已在表三標為氬。" }
    },
    takeaway: "同族元素在週期表中上下排列；知道同族的兩個成員，就能找到第三個。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-86": {
    encouragement: "溴有一個很好用的獨特線索：它是表中唯一在常溫下呈液態的元素。",
    keyIdea: "提示10直接指出常溫下為液體的元素是p；在這二十六個元素中，該元素就是溴。",
    steps: [
      "先看提示10：「常溫下液體的元素是p」。",
      "題表所列元素中，常溫下呈液態的是溴。",
      "所以溴的代碼是p，對應選P。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "代碼a是氖，常溫下為氣體。" },
      B: { verdict: "incorrect", reason: "代碼b是硼，常溫下為固體。" },
      C: { verdict: "incorrect", reason: "代碼c是鎂，常溫下為固體金屬。" },
      D: { verdict: "incorrect", reason: "代碼d是硒，雖與溴同週期，但不是液態元素。" },
      E: { verdict: "incorrect", reason: "代碼e是矽，常溫下為固體。" },
      F: { verdict: "incorrect", reason: "代碼f已在表三標為鈉。" },
      G: { verdict: "incorrect", reason: "代碼g是鋁，常溫下為固體金屬。" },
      H: { verdict: "incorrect", reason: "代碼h是碳，常溫下為固體。" },
      I: { verdict: "incorrect", reason: "代碼i是鍺，常溫下為固體。" },
      J: { verdict: "incorrect", reason: "代碼j是氮，常溫下為氣體。" },
      K: { verdict: "incorrect", reason: "代碼k是硫，常溫下為固體。" },
      L: { verdict: "incorrect", reason: "代碼l已在表三標為氦。" },
      M: { verdict: "incorrect", reason: "代碼m是氯，常溫下為氣體，不是溴。" },
      N: { verdict: "incorrect", reason: "代碼n是砷，常溫下為固體。" },
      O: { verdict: "incorrect", reason: "代碼o已在表三標為鋰。" },
      P: { verdict: "correct", reason: "提示10說p在常溫下為液體，正好符合溴的特徵。" },
      Q: { verdict: "incorrect", reason: "代碼q是氟，常溫下為氣體。" },
      R: { verdict: "incorrect", reason: "代碼r是鎵；題目用提示10所指的液態元素是溴p。" },
      S: { verdict: "incorrect", reason: "代碼s已在表三標為氫。" },
      T: { verdict: "incorrect", reason: "代碼t已在表三標為鉀。" },
      U: { verdict: "incorrect", reason: "代碼u是氧，常溫下為氣體。" },
      V: { verdict: "incorrect", reason: "代碼v是鈹，常溫下為固體金屬。" },
      W: { verdict: "incorrect", reason: "代碼w是鈣，常溫下為固體金屬。" },
      X: { verdict: "incorrect", reason: "代碼x是磷，常溫下為固體。" },
      Y: { verdict: "incorrect", reason: "代碼y已在表三標為氪。" },
      Z: { verdict: "incorrect", reason: "代碼z已在表三標為氬。" }
    },
    takeaway: "遇到「唯一性」很高的性質，如常溫液態，可以優先使用，最快排除其他代碼。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-87": {
    encouragement: "硫可以從「名稱含石部」與週期位置交叉確認，兩條線索會指向同一個答案。",
    keyIdea: "第三週期依序為鈉f、鎂c、鋁g、矽e、磷x、硫k、氯m、氬z，所以硫是k。",
    steps: [
      "提示1列出的f、c、g、e、x、k、m、z都在第三週期。",
      "把已知元素依週期表順序排好，可得鈉、鎂、鋁、矽、磷、硫、氯、氬。",
      "位於磷x與氯m之間的是硫k，因此選K。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "代碼a是氖，位於第二週期惰性氣體族。" },
      B: { verdict: "incorrect", reason: "代碼b是硼，不是第三週期的硫。" },
      C: { verdict: "incorrect", reason: "代碼c是第三週期的鎂。" },
      D: { verdict: "incorrect", reason: "代碼d是硒，與硫同族但在下一個週期。" },
      E: { verdict: "incorrect", reason: "代碼e是第三週期的矽。" },
      F: { verdict: "incorrect", reason: "代碼f已在表三標為鈉。" },
      G: { verdict: "incorrect", reason: "代碼g是第三週期的鋁。" },
      H: { verdict: "incorrect", reason: "代碼h是第二週期的碳。" },
      I: { verdict: "incorrect", reason: "代碼i是第四週期的鍺。" },
      J: { verdict: "incorrect", reason: "代碼j是第二週期的氮。" },
      K: { verdict: "correct", reason: "第三週期中磷x右邊、氯m左邊的位置是硫，所以代碼為k。" },
      L: { verdict: "incorrect", reason: "代碼l已在表三標為氦。" },
      M: { verdict: "incorrect", reason: "代碼m是與硫相鄰的氯。" },
      N: { verdict: "incorrect", reason: "代碼n是第四週期的砷。" },
      O: { verdict: "incorrect", reason: "代碼o已在表三標為鋰。" },
      P: { verdict: "incorrect", reason: "代碼p是第四週期的溴。" },
      Q: { verdict: "incorrect", reason: "代碼q是第二週期的氟。" },
      R: { verdict: "incorrect", reason: "代碼r是第四週期的鎵。" },
      S: { verdict: "incorrect", reason: "代碼s已在表三標為氫。" },
      T: { verdict: "incorrect", reason: "代碼t已在表三標為鉀。" },
      U: { verdict: "incorrect", reason: "代碼u是與硫同族、位於上方的氧。" },
      V: { verdict: "incorrect", reason: "代碼v是第二週期的鈹。" },
      W: { verdict: "incorrect", reason: "代碼w是第四週期的鈣。" },
      X: { verdict: "incorrect", reason: "代碼x是與硫相鄰的磷。" },
      Y: { verdict: "incorrect", reason: "代碼y已在表三標為氪。" },
      Z: { verdict: "incorrect", reason: "代碼z已在表三標為氬。" }
    },
    takeaway: "把同週期的元素照原子序排成一列，比逐個猜代碼更穩定。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-6": {
    encouragement: "水銀壓力計不用背一大串公式；先看水銀哪邊高，再比較壓力與氣體體積即可。",
    keyIdea: "兩次水銀高度差同為h，氣體壓力與體積都相同；溫度也相同，因此理想氣體的分子數相同。",
    steps: [
      "圖中開口端水銀面較高，氣體壓力為大氣壓加h，不是只有h；x、y兩次的壓力相同。",
      "管徑均勻且兩次高度差相同，水銀位置相同，所以氣體所占體積也相同。",
      "在相同溫度下，由PV＝nRT可知n相同，因此分子數一定相同，選D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣體壓力應為大氣壓76 cmHg再加上高度差h，不是只有h cmHg。" },
      B: { verdict: "incorrect", reason: "x、y量得相同高度差h，且水銀方向相同，所以兩者壓力相等。" },
      C: { verdict: "incorrect", reason: "相同高度差代表相同壓力，不能說x小於y。" },
      D: { verdict: "correct", reason: "兩次的P、V、T相同，理想氣體式PV＝nRT給出相同莫耳數，也就是相同分子數。" },
      E: { verdict: "incorrect", reason: "理想氣體可以是單一氣體，也可以是近似理想的混合氣體，不能據此判定一定為純物質。" }
    },
    takeaway: "理想氣體若壓力、體積、溫度三者都相同，莫耳數與分子數就相同。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-114-35": {
    encouragement: "這題先把反應看成「二氧化碳得到氫、變成甲醇」，再用實驗是否照光逐項檢查就好。",
    keyIdea: "二氧化碳被還原成甲醇，光照是必要條件；配平後反應式為2CO₂＋4H₂O→2CH₃OH＋3O₂。",
    steps: [
      "二氧化碳中的碳由較高氧化態變成甲醇中的碳，表示二氧化碳被還原。",
      "實驗只有照光時觀察到氧氣，關燈後沒有氧氣，支持光照是反應必要條件。",
      "檢查C、H、O原子數可知選項E的反應式已配平，因此選A、C、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "CO₂中的碳由＋4降為甲醇中的－2，氧化數下降，屬還原作用。" },
      B: { verdict: "incorrect", reason: "CO₂溶於水會形成弱酸性的碳酸溶液，不會使水溶液呈鹼性。" },
      C: { verdict: "correct", reason: "照光時有產物訊號、關燈後沒有氧氣生成，顯示光照是產生甲醇反應的必要條件。" },
      D: { verdict: "incorrect", reason: "甲醇可與水互溶，不能說甲醇與氧氣都難溶於水。" },
      E: { verdict: "correct", reason: "式子左右各有2個C、8個H與8個O，且同時表達甲醇與氧氣的生成。" }
    },
    takeaway: "判斷氧化還原看氧化數升降；判斷必要條件則看拿掉該條件後反應是否停止。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-114-55": {
    encouragement: "表格的單位不同時，先統一成「每克多少熱量」，答案就會自己排出來。",
    keyIdea: "莫耳燃燒熱除以分子量可得每克放熱：甲烷55.6、丁烷49.6、戊烷48.7 kJ/g。",
    steps: [
      "甲烷每克放熱890÷16≈55.6 kJ，丁烷為2874÷58≈49.6 kJ。",
      "戊烷為3509÷72≈48.7 kJ，因此順序是甲烷＞丁烷＞戊烷。",
      "只有選項B符合表中數值。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "任何1莫耳物質都含相同的亞佛加厥數個粒子，分子量較大不會讓分子數較多。" },
      B: { verdict: "correct", reason: "換算後甲烷、丁烷、戊烷約為55.6、49.6、48.7 kJ/g，順序正確。" },
      C: { verdict: "incorrect", reason: "丁烷與戊烷每克放熱都低於50 kJ，不能說全部大於50 kJ。" },
      D: { verdict: "incorrect", reason: "2莫耳甲烷放熱1780 kJ，大於1莫耳乙烷的1560 kJ。" },
      E: { verdict: "incorrect", reason: "由相鄰烷類的增加趨勢推估，己烷約四千多kJ/mol，不會高到6200 kJ/mol。" }
    },
    takeaway: "比較每克放熱要用「莫耳燃燒熱÷莫耳質量」，不能直接比每莫耳數值。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-115-25": {
    encouragement: "實驗方法題只要圈出動作：看到「產生固體」和「用濾紙分開」，就能直接對上名稱。",
    keyIdea: "加入試劑使離子形成沉澱是沉澱法，用濾紙留下不溶物是過濾法。",
    steps: [
      "步驟4加入NH₄ClO₄後出現沉澱，屬於用溶解度差形成固體的沉澱法。",
      "步驟4與5都以濾紙分開固體和液體，屬於過濾法。",
      "流程沒有層析、蒸餾或兩液相萃取，所以選C、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "流程沒有讓各成分在濾紙上隨溶劑移動並分出色帶，不是濾紙層析。" },
      B: { verdict: "incorrect", reason: "流程沒有加熱汽化再冷凝收集不同沸點成分，不是蒸餾。" },
      C: { verdict: "correct", reason: "步驟4與5明確使用濾紙把不溶固體和濾液分開，屬過濾法。" },
      D: { verdict: "correct", reason: "加入碳酸根或過氯酸根使特定離子形成難溶固體，屬沉澱法。" },
      E: { verdict: "incorrect", reason: "流程沒有利用互不相溶的兩種溶劑分配物質，因此不是萃取法。" }
    },
    takeaway: "沉澱法負責把溶液中的物質變成固體，過濾法再把固體從液體中取出。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-115-26": {
    encouragement: "這題的核心是看表6的溶解度差；差得越大，越容易把兩種離子分開。",
    keyIdea: "碳酸鹽去除Ca²⁺、Mg²⁺，NH₄ClO₄則讓低溶解度的KClO₄沉澱、NaClO₄留在水中。",
    steps: [
      "香蕉中的醣、脂肪、蛋白質與胺基酸都含碳，屬有機化合物。",
      "表6顯示CaCO₃、MgCO₃溶解度都低於0.01，可先沉澱去除鈣、鎂離子。",
      "KClO₄溶解度1.3，遠低於NaClO₄的209，因此可分開鉀與鈉，選A、B、C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "題列醣類、脂肪、蛋白質與胺基酸都是以含碳骨架為主的有機化合物。" },
      B: { verdict: "correct", reason: "表6中CaCO₃、MgCO₃極難溶，可形成沉澱並由過濾去除Ca²⁺、Mg²⁺。" },
      C: { verdict: "correct", reason: "KClO₄溶解度只有1.3，NaClO₄為209，鉀鹽沉澱而鈉鹽大多留在溶液中。" },
      D: { verdict: "incorrect", reason: "K₂SO₄與Na₂SO₄的溶解度分別為130與110，差異小，無法有效選擇性分離。" },
      E: { verdict: "incorrect", reason: "步驟4主要沉澱的是低溶解度KClO₄；NaClO₄溶解度高，主要留在濾液。" }
    },
    takeaway: "選沉澱劑要找「一種鹽很難溶、另一種鹽很易溶」的組合，溶解度差才有分離效果。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-115-27": {
    encouragement: "重量減少題先找會跑掉的氣體；把KClO₄分解式配平後，五個選項都能一次判斷。",
    keyIdea: "加熱時KClO₄分解為KCl與O₂：KClO₄→KCl＋2O₂，氧氣逸出使重量下降。",
    steps: [
      "沉澱主要是KClO₄，加熱後形成KCl並放出氧氣。",
      "配平式為KClO₄→KCl＋2O₂；氯由＋7降到－1，受到還原。",
      "係數和為1＋1＋2＝4，因此選A、B、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "分解產生的O₂會離開坩堝，使固體量測到的重量減少。" },
      B: { verdict: "correct", reason: "Cl在KClO₄中為＋7，在KCl中為－1，氧化數下降，所以被還原。" },
      C: { verdict: "incorrect", reason: "產物是KCl，不是KClO；題目所給最終鹽的莫耳質量也支持KCl。" },
      D: { verdict: "incorrect", reason: "由KClO₄→KCl＋2O₂可知1莫耳KClO₄產生2莫耳O₂。" },
      E: { verdict: "correct", reason: "最簡整數係數為1、1、2，總和等於4。" }
    },
    takeaway: "熱分解造成減重，通常是有氣體逸出；先配平方程式，再看氧化數與莫耳比。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-115-44": {
    encouragement: "奈米材料名稱陌生沒關係；抓住「能分散的膠體」和「沉澱洗滌」兩個實驗現象即可。",
    keyIdea: "半胱胺酸幫助ZnS量子點分散在水中，形成膠體後可讓雷射光路顯現。",
    steps: [
      "半胱胺酸可附著在量子點表面，外側親水部分幫助粒子留在水中分散。",
      "奈米粒子形成膠體，會散射雷射光，因此可以看見光束。",
      "ZnS難溶且不是分子化合物；冰乙醇用來降低溶解度、促進沉澱，所以選A、B。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "半胱胺酸可作為表面配位分子，幫助ZnS奈米粒子在水中穩定分散。" },
      B: { verdict: "correct", reason: "分散的量子點屬膠體粒子，會產生廷得耳效應，使雷射光路可見。" },
      C: { verdict: "incorrect", reason: "ZnS難溶於水，主要由Zn²⁺與S²⁻形成，不屬一般分子化合物。" },
      D: { verdict: "incorrect", reason: "刺鼻或臭味來自含硫氣體等物質；固態ZnS本身不是以氣味被聞到。" },
      E: { verdict: "incorrect", reason: "加入冰冷乙醇是降低粒子在混合溶劑中的溶解度、促進沉澱，不是增加溶解度。" }
    },
    takeaway: "膠體能散射光；沉澱洗滌時加入較差的溶劑，是為了讓產物更不容易溶解。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-115-45": {
    encouragement: "表格題不需要算複雜公式；沿著Na₂S的量增加方向，看產率與剩餘離子的變化就能判斷。",
    keyIdea: "表8顯示Na₂S由不足到過量時，產率約由18.1%升至50.2%，但未接近100%，產物兩種離子比例也接近1。",
    steps: [
      "Na₂S為5.0×10⁻⁵莫耳時產率18.1%；超過1.0×10⁻⁴莫耳的各組都高於40%。",
      "當Na₂S多於ZnSO₄的2.0×10⁻⁴莫耳時屬過量，表中產率45.5%與50.2%，都高於45%。",
      "最高只有50.2%，且Zn²⁺/S²⁻數值接近1，不支持D、E，所以選A、B、C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "表中5.0×10⁻⁵莫耳時產率已只有18.1%；依不足端趨勢，更少Na₂S時會低於20%。" },
      B: { verdict: "correct", reason: "Na₂S為1.5、2.0、3.0、4.0×10⁻⁴莫耳時，產率44.4%、44.0%、45.5%、50.2%，皆高於40%。" },
      C: { verdict: "correct", reason: "ZnSO₄為2.0×10⁻⁴莫耳；Na₂S取3.0或4.0×10⁻⁴莫耳屬過量，產率為45.5%與50.2%。" },
      D: { verdict: "incorrect", reason: "表中最高產率只有50.2%，資料不能支持產率可達100%。" },
      E: { verdict: "incorrect", reason: "各組Zn²⁺與S²⁻含量同量級，兩者比值接近1且多數小於1，並非遠大於1。" }
    },
    takeaway: "讀資料表時先找臨界值，再檢查臨界值以上或以下的每一列是否都符合敘述。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
