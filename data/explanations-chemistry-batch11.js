window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-17": {
    encouragement: "先數電子，就能把三個圖認成氫、氧與鋁，再用電荷平衡選化學式。",
    keyIdea: "甲有1個電子是H，乙為2、6的O，丙為2、8、3的Al；穩定化合物是Al(OH)₃。",
    steps: ["甲只有1個電子，是氫；乙差2個電子滿外層，是氧。", "丙最外層有3個電子，容易形成Al³⁺。", "H與O組成OH⁻，Al³⁺需配3個OH⁻才電中性，所以答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Mg(OH)₂含鎂，但圖中的丙是鋁，不是鎂。" },
      B: { verdict: "incorrect", reason: "MgOH不只用了錯誤元素，Mg²⁺與一個OH⁻也無法電荷平衡。" },
      C: { verdict: "incorrect", reason: "AlOH中Al³⁺只配一個OH⁻，總電荷不是零。" },
      D: { verdict: "incorrect", reason: "Al(OH)₂中兩個OH⁻只能抵銷+2，不能抵銷Al³⁺。" },
      E: { verdict: "correct", reason: "Al³⁺與3個OH⁻組成Al(OH)₃，元素與總電荷都符合。" }
    },
    takeaway: "離子化合物的下標要讓正、負電荷總和為零。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-18": {
    encouragement: "甲是氫、乙是氧，兩者最穩定的化合物就是日常熟悉的水。",
    keyIdea: "H與O形成H₂O；水近中性、純水導電差，可和酒精以任意比例混合。",
    steps: ["甲為H、乙為O，最穩定化合物是H₂O。", "純水幾乎沒有可自由移動的離子，導電性差且接近中性。", "水和酒精都能形成氫鍵，可彼此互溶，所以選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "純水只有極少量H⁺與OH⁻，不是良導體。" },
      B: { verdict: "incorrect", reason: "純水在常溫下接近中性，不是酸性物質。" },
      C: { verdict: "incorrect", reason: "純水也不是鹼性物質，其H⁺與OH⁻濃度相等。" },
      D: { verdict: "incorrect", reason: "汽油主要是非極性烴類，極性的水不易溶於其中。" },
      E: { verdict: "correct", reason: "水與酒精分子間可形成氫鍵，因此兩者能以任意比例互溶。" }
    },
    takeaway: "判斷溶解常用「性質相近較易互溶」：極性的水容易和有極性OH基的酒精混合。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-19": {
    encouragement: "丙的電子排列是2、8、3，也就是鋁；記住鋁能和酸、強鹼反應放出氫氣。",
    keyIdea: "鋁是兩性金屬，和鹽酸或濃度適當的NaOH溶液反應都可產生H₂。",
    steps: ["由最外層3個電子判斷丙為鋁。", "鋁與鹽酸反應，Al變成Al³⁺並放出H₂。", "鋁與強鹼也可形成鋁酸根並放出H₂，因此答案A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "鋁和鹽酸或NaOH溶液反應時，水或H⁺被還原，可收集到氫氣。" },
      B: { verdict: "incorrect", reason: "反應中沒有適合產生氧氣的氧化過程，主要氣體是氫氣。" },
      C: { verdict: "incorrect", reason: "氫氧根是溶液中的離子或反應物之一，不是可分離出的主要產物。" },
      D: { verdict: "incorrect", reason: "鋁常形成+3價，不會以穩定的一價鋁離子作為此反應產物。" },
      E: { verdict: "incorrect", reason: "鋁也不是形成二價離子；其最常見穩定氧化態為+3。" }
    },
    takeaway: "鋁、鋅等兩性金屬的特色，是能和酸反應，也能和強鹼反應。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-22": {
    encouragement: "把224毫升先換成二氧化碳莫耳數，再由一比一關係求碳酸鹽莫耳質量。",
    keyIdea: "標準狀態224 mL CO₂為0.010 mol，所以0.84 g MCO₃也是0.010 mol，莫耳質量84。",
    steps: ["224 mL＝0.224 L，標準狀態下為0.224÷22.4＝0.010 mol CO₂。", "MCO₃與CO₂的係數比為1：1，所以MCO₃也是0.010 mol。", "MCO₃莫耳質量為0.84÷0.010＝84，扣掉CO₃的60，M＝24，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Be原子量9，BeCO₃莫耳質量69，與算出的84不符。" },
      B: { verdict: "correct", reason: "Mg原子量24，MgCO₃莫耳質量24＋60＝84，完全吻合。" },
      C: { verdict: "incorrect", reason: "CaCO₃莫耳質量100，0.010 mol會是1.00 g，不是0.84 g。" },
      D: { verdict: "incorrect", reason: "ZnCO₃莫耳質量125，比題目算出的84大很多。" },
      E: { verdict: "incorrect", reason: "BaCO₃莫耳質量197，也不符合0.84 g與0.010 mol的關係。" }
    },
    takeaway: "碳酸鹽遇酸每1 mol通常放出1 mol CO₂，可用氣體體積反推金屬。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-36": {
    encouragement: "莫耳日的10月23日6時02分，是把6.02×10²³這個數字藏進日期和時間。",
    keyIdea: "莫耳是物質量單位，一莫耳含亞佛加厥數個指定粒子，但電子總數仍看每個粒子含幾個電子。",
    steps: ["10、23與6：02對應6.02×10²³。", "莫耳不是濃度，而是計數大量微粒的物質量單位。", "一莫耳的定義與亞佛加厥數相連，因此選C、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "「莫耳」不是人的姓名，莫耳日是化學界用亞佛加厥數設計的趣味節日。" },
      B: { verdict: "incorrect", reason: "莫耳是物質量單位，不是溶液濃度，也不是重量百分濃度的倍數。" },
      C: { verdict: "correct", reason: "10月23日6時02分正好把6.02×10²³拆成日期與時間。" },
      D: { verdict: "correct", reason: "一莫耳包含亞佛加厥數個指定基本粒子，莫耳也是SI基本單位之一。" },
      E: { verdict: "incorrect", reason: "一莫耳物質有一莫耳基本粒子，但每粒子可能含許多電子，電子總數不一定只是一個亞佛加厥數。" }
    },
    takeaway: "莫耳像化學家的「一打」，只是每一組不是12個，而是6.022×10²³個。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-37": {
    encouragement: "先記一條主線：吸熱ΔH為正，放熱ΔH為負，再逐項判斷。",
    keyIdea: "蒸發吸熱、燃燒放熱；ΔH還會受物質的固液氣狀態影響。",
    steps: ["液體蒸發要克服分子間吸引力，所以吸熱。", "汽油燃燒把化學能釋出，屬放熱。", "放熱反應ΔH<0，常使周圍或未控溫系統升溫，故選A、B、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水分子離開液面成為氣體要吸收能量，所以蒸發是吸熱。" },
      B: { verdict: "correct", reason: "汽油燃燒會把化學能轉成熱與光，是典型放熱反應。" },
      C: { verdict: "incorrect", reason: "ΔH為正表示系統吸收熱量，應是吸熱反應。" },
      D: { verdict: "incorrect", reason: "同一物質的固態、液態、氣態熱含量不同，因此反應熱會受狀態影響。" },
      E: { verdict: "correct", reason: "ΔH為負表示系統放熱；若未把熱移走，反應系統溫度會上升。" }
    },
    takeaway: "判斷正負號：熱進系統是正，熱離開系統是負。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-38": {
    encouragement: "把糖分成單醣、雙醣、多醣，再問人體能不能消化，就能快速排除。",
    keyIdea: "蔗糖是雙醣；單醣可代謝供能；人體沒有分解纖維素所需的酵素。",
    steps: ["葡萄糖與果糖都是單醣，但彼此不是同一物質。", "蔗糖由兩個單醣單元組成，屬雙醣。", "人體可利用單醣產能，卻不能消化纖維素，因此選A、C。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "蔗糖水解可得葡萄糖與果糖，是由兩個單醣單元組成的雙醣。" },
      B: { verdict: "incorrect", reason: "葡萄糖與果糖是兩種不同的單醣，葡萄糖不是果糖的一種。" },
      C: { verdict: "correct", reason: "葡萄糖等單醣可進入細胞呼吸，轉換成細胞可使用的能量。" },
      D: { verdict: "incorrect", reason: "阿司巴丹是人工甜味劑，結構不是醣類，也不屬於單醣。" },
      E: { verdict: "incorrect", reason: "人體可消化澱粉，卻缺少纖維素酶，不能把纖維素大量分解成葡萄糖。" }
    },
    takeaway: "澱粉和纖維素都由葡萄糖組成，但連接方式不同，人體只容易消化澱粉。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-39": {
    encouragement: "電池題先抓三件事：是否氧化還原、能否充電、串並聯影響電壓。",
    keyIdea: "化學電池靠氧化還原供電；並聯不提高電壓；鋅銅電池的鋅極是負極。",
    steps: ["電子轉移的氧化還原反應能形成電流。", "鎳鎘與鉛蓄電池都可逆向充電。", "並聯主要增加可供電量，電壓近似不變，所以選A、B、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "一處氧化放出電子、另一處還原接受電子，外電路因此有電流。" },
      B: { verdict: "correct", reason: "鎳鎘電池是二次電池，可用外加電能使反應逆向而充電。" },
      C: { verdict: "incorrect", reason: "鋅銅電池放電時鋅被氧化，是負極；銅極接受電子，是正極。" },
      D: { verdict: "incorrect", reason: "相同乾電池並聯後電壓近似單顆電池，串聯才會讓電壓相加。" },
      E: { verdict: "correct", reason: "鉛蓄電池的鉛板接在電池負端；充、放電時外接端的正負標示不互換。" }
    },
    takeaway: "相同電池：串聯加電壓，並聯增加可供電流與使用時間。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-43": {
    encouragement: "石化燃料含硫會形成SO₂；引擎高溫又會促使空氣產生NO₂。",
    keyIdea: "燃料與交通造成的主要酸性空氣污染物包括SO₂與NOₓ。",
    steps: ["含硫燃料燃燒會把硫氧化成SO₂。", "汽機車引擎高溫使N₂與O₂反應形成NO，再轉成NO₂。", "兩者都是常見空氣污染物，所以選C、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂是可燃氣體，不是石化與汽機車排放中的主要空氣污染物。" },
      B: { verdict: "incorrect", reason: "H₂S有毒且有臭味，但不是一般石化燃燒與汽機車造成的主要污染氣體。" },
      C: { verdict: "correct", reason: "含硫煤與油品燃燒會排放SO₂，可造成呼吸刺激與酸雨。" },
      D: { verdict: "correct", reason: "引擎高溫形成NOₓ，其中NO₂是重要交通空氣污染物。" },
      E: { verdict: "incorrect", reason: "NH₃主要和畜牧、肥料等排放較相關，不是題述來源的主要污染物。" }
    },
    takeaway: "SO₂常追到燃料中的硫，NOₓ常追到燃燒時的高溫。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-46": {
    encouragement: "生質酒精的核心是先把大分子醣拆成小糖，再讓微生物發酵。",
    keyIdea: "蔗糖、澱粉、纖維素與半纖維素都能成為原料，但它們在細胞中的位置並不相同。",
    steps: ["甘蔗蔗糖與玉米澱粉已有成熟製酒精技術。", "秸稈的纖維素、半纖維素也能水解成糖再發酵。", "小糖分子量遠小於聚合物纖維素，因此選A、B、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "蔗糖可直接水解發酵，澱粉也能先水解成葡萄糖後製成酒精。" },
      B: { verdict: "correct", reason: "半纖維素與纖維素可經前處理和水解成可發酵的小分子糖。" },
      C: { verdict: "incorrect", reason: "纖維素在細胞壁；蔗糖多在細胞液，澱粉多儲於質體，並非全在細胞壁。" },
      D: { verdict: "incorrect", reason: "蔗糖可在液胞，但澱粉和細胞壁纖維素不都位於液胞。" },
      E: { verdict: "correct", reason: "蔗糖、木糖、葡萄糖是小分子；纖維素由許多葡萄糖單元連接，分子量大得多。" }
    },
    takeaway: "生質酒精不只看含不含碳，更要看原料能否被拆成微生物可發酵的糖。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-59": {
    encouragement: "題目問肉眼看得到，就找白煙、沉澱或顏色消失；只有溫度改變不算。",
    keyIdea: "濃HCl與濃NH₃成白煙、HCl與Ag⁺成白色AgCl、酸使鹼性酚酞褪色。",
    steps: ["先找氣體反應形成的白煙與離子反應形成的沉澱。", "再檢查指示劑是否真的換顏色。", "A有白煙、C有白色沉澱、E由粉紅變無色，故選A、C、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "HCl與NH₃氣體相遇生成細小NH₄Cl固體，會看到白煙。" },
      B: { verdict: "incorrect", reason: "等量等濃度強酸強鹼中和後仍是無色溶液，沒有指示劑時肉眼看不出。" },
      C: { verdict: "correct", reason: "Ag⁺與Cl⁻結合成難溶的白色AgCl沉澱。" },
      D: { verdict: "incorrect", reason: "石蕊原本已是紅色，加入酸後仍呈紅色，肉眼沒有顏色改變。" },
      E: { verdict: "correct", reason: "原先少量NaOH使酚酞呈粉紅色，加入較多HCl中和後會變無色。" }
    },
    takeaway: "無色酸鹼中和可能有放熱，但若沒有指示劑，肉眼通常看不到明顯變化。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-60": {
    encouragement: "溫度一定先換成K，再看表格中哪個組合維持固定。",
    keyIdea: "固定莫耳數氣體符合PV/T為常數，因此可整理成P＝T/(kV)。",
    steps: ["0℃與273℃分別換成273 K與546 K。", "逐列計算可發現PV/T皆相同。", "令PV/T＝1/k，移項得P＝T/(kV)，答案A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "P＝T/(kV)等同PV/T＝1/k，符合表中四組資料。" },
      B: { verdict: "incorrect", reason: "V＝PT/k表示壓力和溫度增加時體積都增加，與固定體積下P隨T增加的資料不符。" },
      C: { verdict: "incorrect", reason: "PV＝k/T讓絕對溫度愈高時PV愈小，恰與氣體定律相反。" },
      D: { verdict: "incorrect", reason: "V＝kP/T表示體積與壓力成正比，但定溫時兩者應成反比。" },
      E: { verdict: "incorrect", reason: "P＝kTV會讓定溫時壓力隨體積增加，與波以耳定律相反。" }
    },
    takeaway: "固定量氣體的整合關係是PV/T＝常數，T必須用絕對溫標K。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-61": {
    encouragement: "沿用表中的PV/T常數，只要一次代入就能求出絕對溫度。",
    keyIdea: "由第一列得PV/T＝30/273；新狀態PV＝20，所以T＝182 K＝−91℃。",
    steps: ["用表中第一列：k＝1×30÷273＝30/273。", "新狀態10×2÷T＝30/273，解得T＝182 K。", "攝氏溫度為182－273＝−91℃，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "182 K換成攝氏為−91℃，與氣體定律計算一致。" },
      B: { verdict: "incorrect", reason: "100℃是373 K，代入會使PV大於題目的20 atm·L。" },
      C: { verdict: "incorrect", reason: "182是算出的絕對溫度K，不是攝氏溫度。" },
      D: { verdict: "incorrect", reason: "273℃等於546 K，和表中高溫資料相當，無法得到題設PV。" },
      E: { verdict: "incorrect", reason: "373℃等於646 K，溫度更高，和計算結果差距更大。" }
    },
    takeaway: "氣體定律算出的T是K；最後題目若問℃，記得再減273。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-62": {
    encouragement: "抓住題目給的線索：丙遇水會放氧，這正是過氧化鈉的特色。",
    keyIdea: "Na₂O₂與水生成NaOH和O₂，因此丙是Na₂O₂。",
    steps: ["題幹明說所列鈉化合物中Na₂O₂與水會產生氧。", "反應式「丙＋水→丁＋氧氣」直接對上這項性質。", "所以丙為Na₂O₂，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Na₂O與水只生成NaOH，不會同時放出O₂。" },
      B: { verdict: "correct", reason: "Na₂O₂與水反應可生成NaOH並放出氧氣，完全符合線索。" },
      C: { verdict: "incorrect", reason: "NaOH溶於水不會因而產生氧氣。" },
      D: { verdict: "incorrect", reason: "NaHCO₃受熱或遇酸可產生CO₂，不是遇水放O₂。" },
      E: { verdict: "incorrect", reason: "Na₂CO₃溶於水形成鹼性溶液，但不會放出氧氣。" }
    },
    takeaway: "過氧化物含有特殊的過氧鍵，和水反應時可能產生氧氣。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-100-63": {
    encouragement: "上一題已找出丙是Na₂O₂，把它和水反應的生成物寫出來即可。",
    keyIdea: "2Na₂O₂＋2H₂O→4NaOH＋O₂，所以丁為NaOH。",
    steps: ["丙是過氧化鈉Na₂O₂。", "Na₂O₂遇水生成氫氧化鈉並放出氧氣。", "題目把溶液產物稱為丁，因此丁是NaOH，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "反應物中沒有氯元素，不可能生成NaCl。" },
      B: { verdict: "incorrect", reason: "Na₂O是另一種鈉氧化物，不是Na₂O₂加水的溶液產物。" },
      C: { verdict: "incorrect", reason: "Na₂O₂是丙本身，不是該反應生成的丁。" },
      D: { verdict: "correct", reason: "過氧化鈉與水反應生成NaOH溶液及O₂，故丁為NaOH。" },
      E: { verdict: "incorrect", reason: "反應沒有碳來源，不能生成NaHCO₃。" }
    },
    takeaway: "判斷化學反應產物時，先做元素守恆；沒有出現的元素不會憑空生成。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-19": {
    encouragement: "把四個現象一起用：強導電、近中性、可形成兩種白色沉澱，答案會收斂到鈣鹽。",
    keyIdea: "CaCl₂是近中性的強電解質；Ca²⁺可形成CaCO₃與Ca(OH)₂白色沉澱。",
    steps: ["極佳導電表示溶液中有許多離子，先排除蔗糖。", "pH近純水，排除明顯鹼性的Na₂CO₃與KOH。", "Ca²⁺能與碳酸根、氫氧根形成白色沉澱，故選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NaCl雖導電且近中性，但Na⁺不會和碳酸根或OH⁻形成白色沉澱。" },
      B: { verdict: "correct", reason: "CaCl₂為近中性強電解質，Ca²⁺可生成白色CaCO₃與Ca(OH)₂。" },
      C: { verdict: "incorrect", reason: "蔗糖溶於水主要以分子存在，導電性很差，也不會形成所述沉澱。" },
      D: { verdict: "incorrect", reason: "Na₂CO₃溶液呈鹼性，且加入NaOH不會產生新的白色沉澱。" },
      E: { verdict: "incorrect", reason: "KOH是強鹼，pH不會接近純水，加入NaOH也沒有沉澱。" }
    },
    takeaway: "未知液鑑定要交叉使用所有現象，不能只憑「會導電」就下結論。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-39": {
    encouragement: "電解KI水溶液時，陰極產氫和OH⁻，陽極產碘；把兩端分開記就不會混。",
    keyIdea: "陰極水被還原成H₂並留下OH⁻；陽極I⁻被氧化成黃褐色I₂。",
    steps: ["陰極發生還原：水得電子生成H₂與OH⁻。", "陽極發生氧化：I⁻失電子生成I₂。", "因此陽極黃褐、陰極加酚酞變粉紅，選B、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "陰極附近累積OH⁻，溶液會變鹼性，不是酸性。" },
      B: { verdict: "correct", reason: "陽極產生I₂，溶在含I⁻的水溶液中會呈黃褐色。" },
      C: { verdict: "incorrect", reason: "陰極氣泡是水被還原產生的H₂，不是O₂。" },
      D: { verdict: "correct", reason: "陰極附近含較多OH⁻而呈鹼性，酚酞會顯粉紅色。" },
      E: { verdict: "incorrect", reason: "I₂較易進入正己烷層，靜置後應分成兩層並顯色，不是持久混濁乳液。" }
    },
    takeaway: "電解水溶液：陰極看還原，陽極看氧化；再由產物判斷顏色與酸鹼。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-101-60": {
    encouragement: "前文線索可找出甲是鈹、乙是氧；金屬和非金屬形成的固體通常是離子化合物。",
    keyIdea: "甲為Be、乙為O，組成BeO；Be²⁺與O²⁻以離子鍵形成固體。",
    steps: ["甲最外兩層各有2電子，對應電子排列2、2的Be。", "乙是地殼主要元素且價電子為6，對應O。", "Be是金屬、O是非金屬，BeO屬離子化合物，故選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙是氧，屬第16族氧族，不是第17族鹵素。" },
      B: { verdict: "incorrect", reason: "氧的原子序為8，中性氧原子有8個電子，不是4個。" },
      C: { verdict: "incorrect", reason: "甲是Be而非Mg，所以化合物是BeO，不是MgO。" },
      D: { verdict: "incorrect", reason: "甲、乙不是Mg和Cl，且題組判得的化學式也不是MgCl₂。" },
      E: { verdict: "correct", reason: "金屬Be形成Be²⁺、非金屬O形成O²⁻，BeO為離子固體。" }
    },
    takeaway: "辨認元素後再判鍵結：金屬與非金屬常以電子轉移形成離子化合物。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-30": {
    encouragement: "先算兩物質莫耳數，再用2KI：1Pb(NO₃)₂找限量試劑。",
    keyIdea: "KI有0.0003 mol、Pb(NO₃)₂有0.0002 mol；KI不足，產生黃色PbI₂，且含鉛廢液須專收。",
    steps: ["KI為0.1×0.003＝0.0003 mol；硝酸鉛為0.1×0.002＝0.0002 mol。", "0.0002 mol硝酸鉛需0.0004 mol KI，所以KI是限量試劑。", "再加KI仍可與剩餘Pb²⁺沉澱，並注意重金屬回收，選C、D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "PbI₂沉澱是黃色，不是白色。" },
      B: { verdict: "incorrect", reason: "依2：1係數，KI量不足而先用完，硝酸鉛不是限量試劑。" },
      C: { verdict: "correct", reason: "溶液仍有剩餘Pb²⁺，再加入KI會繼續生成PbI₂沉澱。" },
      D: { verdict: "correct", reason: "鉛離子具毒性，含鉛反應廢液必須歸入重金屬廢液回收。" },
      E: { verdict: "correct", reason: "只清洗未接觸鉛鹽的KI容器時不含重金屬，可依一般無機廢液規範處理。" }
    },
    takeaway: "先算限量試劑能判斷反應後剩什麼；廢液分類則看是否含有重金屬。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-39": {
    encouragement: "工業廢水通常依序做沉澱、過濾、中和、曝氣與生物處理。",
    keyIdea: "強鹼可沉澱重金屬；曝氣補氧；活性污泥中的微生物分解有機物。",
    steps: ["先調整pH，使重金屬形成難溶氫氧化物。", "過濾後把水調回適當pH並增加溶氧。", "再利用活性污泥分解有機污染物，故選B、D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碳酸鈉呈鹼性，加入後通常提高pH，不會使pH小於7。" },
      B: { verdict: "correct", reason: "許多重金屬離子在鹼性下形成難溶氫氧化物，可沉澱後過濾。" },
      C: { verdict: "incorrect", reason: "實務應用適合且可控制的酸調中性，不會指定用食用醋酸作工業標準處理。" },
      D: { verdict: "correct", reason: "把水灑成水幕可增大與空氣接觸面積，促進氧氣溶入水中。" },
      E: { verdict: "correct", reason: "活性污泥含微生物，可攝取並分解廢水中的有機物。" }
    },
    takeaway: "廢水處理不是一步完成，而是把不同污染物交給最適合的物理、化學或生物方法。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-48": {
    encouragement: "先把七種物質依常溫狀態分類，再另外數「整個固體都是鍵結網絡」的物質。",
    keyIdea: "H₂O、Br₂為液體，CO₂為氣體，其餘四種為固體；SiO₂與Si是網狀固體。",
    steps: ["常溫下H₂O、Br₂液態，CO₂氣態。", "SiO₂、MgO、Ca、Si皆為固體，共4種。", "其中SiO₂與Si具有延伸的共價網狀結構，共2種，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "液體有H₂O和Br₂兩種，不是1種。" },
      B: { verdict: "incorrect", reason: "七種物質中常溫氣體只有CO₂，並非2種。" },
      C: { verdict: "incorrect", reason: "SiO₂、MgO、Ca、Si共4種固體，不是3種。" },
      D: { verdict: "correct", reason: "SiO₂和元素Si皆由共價鍵向外延伸成網狀固體。" }
    },
    takeaway: "「固體」是狀態；「網狀固體」是結構，兩者不能直接當成同一分類。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-50": {
    encouragement: "白色AgCl證明濾液仍有Ag⁺；既然銀尚未用完，鐵會優先析出較易還原的銀。",
    keyIdea: "少量Fe先還原Ag⁺成Ag；濾液仍含Ag⁺，因此析出物只有Ag，濾液含Ag⁺、Cu²⁺、Fe²⁺。",
    steps: ["L加食鹽水出白色沉澱，表示仍有Ag⁺生成AgCl。", "Ag⁺的還原傾向比Cu²⁺強；Ag⁺尚存時，少量Fe主要先析出Ag。", "Fe被氧化成Fe²⁺，原有Cu²⁺仍在，故選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Ag⁺尚未耗完時，Fe不會只析出較不易還原的Cu，且濾液不會只剩Ag⁺。" },
      B: { verdict: "incorrect", reason: "析出物不應是Cu；少量Fe會優先還原Ag⁺。" },
      C: { verdict: "incorrect", reason: "既然濾液仍有Ag⁺，表示反應尚停在優先析銀階段，不會同時析出Cu。" },
      D: { verdict: "incorrect", reason: "M為Ag雖對，但濾液不只Cu²⁺，還有未反應Ag⁺與生成Fe²⁺。" },
      E: { verdict: "correct", reason: "M為Ag；L中保留Ag⁺、Cu²⁺，並新增由鐵氧化形成的Fe²⁺。" }
    },
    takeaway: "金屬置換要比較還原先後；檢驗到某離子仍存在，也是在告訴你反應進行到哪一步。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-62": {
    encouragement: "題目條件可以用一組具體例子檢查：X取鋰、Y取氯，就會看出正確敘述。",
    keyIdea: "符合條件的一種組合是Li與Cl：兩者差一週期，Li⁺與Cl⁻的價電子層相差兩層，Cl₂為共價分子。",
    steps: ["Y能以共價鍵形成元素單質，表示Y可為非金屬。", "以X＝Li、Y＝Cl檢查：原子序都小於20且Y>X。", "Li⁺最外層在第1層、Cl⁻在第3層，相差兩層，故A、E可成立。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Y由共價鍵形成元素單質，符合非金屬元素如Cl形成Cl₂的特徵。" },
      B: { verdict: "incorrect", reason: "符合條件的X可為Li；Li容易失電子成Li⁺，不是成陰離子。" },
      C: { verdict: "incorrect", reason: "以符合條件的Li⁺為例，其電子排列是2，不是2、8、8。" },
      D: { verdict: "incorrect", reason: "符合條件的Y可為Cl，Cl⁻有18個電子，不能因此斷定其離子只有2個電子。" },
      E: { verdict: "correct", reason: "Y可為第3週期的Cl，且與第2週期的Li相差一個週期。" }
    },
    takeaway: "遇到「有哪些可能」的題目，可先找一組完全符合條件的元素作為驗證例。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-63": {
    encouragement: "價電子1可代表H或鹼金屬，價電子6可代表O或S；分別檢查共價與離子情況。",
    keyIdea: "H與O可形成共價H₂O；Li或Na與O可形成離子型Li₂O或Na₂O，兩者都是Q₂R。",
    steps: ["若Q是H、R是O，可共享電子形成H₂O型共價化合物。", "若Q是Li或Na、R是O或S，Q⁺與R²⁻組成Q₂R型離子化合物。", "因此可能型態為A、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "Q＝H、R＝O時可形成H₂O，是Q₂R型共價化合物。" },
      B: { verdict: "incorrect", reason: "一價Q與二價陰離子R電荷平衡應為Q₂R，不是QR₂。" },
      C: { verdict: "incorrect", reason: "價電子1與6的常見元素不會以QR₆滿足兩者穩定價鍵。" },
      D: { verdict: "incorrect", reason: "H與O、S的典型共價化合物為H₂O、H₂S，即Q₂R而非QR₂。" },
      E: { verdict: "correct", reason: "Q為+1金屬離子、R為−2非金屬離子時，電中性式為Q₂R。" },
      F: { verdict: "incorrect", reason: "Q⁺與R²⁻的電荷比例不是1：6，QR₆無法達成電荷平衡。" }
    },
    takeaway: "同一組價電子數可能形成共價或離子化合物，關鍵在Q究竟是氫還是金屬。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-102-65": {
    encouragement: "分清楚三種作用力：晶體內離子吸引、分子內共價鍵、分子彼此間吸引力。",
    keyIdea: "KNO₃晶體靠離子靜電作用；170℃後曲線突升，可能代表溶質與溶劑作用屬性劇變。",
    steps: ["KNO₃由K⁺與NO₃⁻組成，晶格靠正負離子吸引。", "溶液中的鹽主要解離成離子，不以完整KNO₃、NaNO₃分子存在。", "曲線到170℃後突然陡升，可推測溶質—溶劑作用出現劇變，故選A、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "KNO₃晶體的K⁺與NO₃⁻間主要靠庫侖靜電作用維持。" },
      B: { verdict: "incorrect", reason: "溶劑分子彼此之間是分子間作用力，不是把不同分子以共價鍵連在一起。" },
      C: { verdict: "incorrect", reason: "KNO₃與NaNO₃溶於水後大部分解離成K⁺、Na⁺與NO₃⁻。" },
      D: { verdict: "incorrect", reason: "110～160℃曲線平順增加，沒有證據顯示作用力的屬性在此範圍改變。" },
      E: { verdict: "correct", reason: "170℃後溶解度突然大幅上升，可合理推測溶質—溶劑作用的性質或強度劇烈改變。" }
    },
    takeaway: "圖表出現斜率突然改變，常提示系統的作用方式或狀態可能已經不同。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-15": {
    encouragement: "pH先換H⁺；已知OH⁻則用[H⁺][OH⁻]＝10⁻¹⁴換算。",
    keyIdea: "甲[H⁺]＝10⁻² M；乙[OH⁻]＝10⁻³ M，所以乙[H⁺]＝10⁻¹¹ M，兩者相差10⁹倍。",
    steps: ["甲pH＝2，所以[H⁺]＝10⁻² M。", "乙[H⁺]＝10⁻¹⁴÷10⁻³＝10⁻¹¹ M。", "甲除以乙為10⁻²÷10⁻¹¹＝10⁹，答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "10⁻⁹是把相除順序顛倒後的結果；題目問甲是乙的幾倍。" },
      B: { verdict: "incorrect", reason: "10⁻⁵沒有正確運用水的離子積10⁻¹⁴。" },
      C: { verdict: "incorrect", reason: "兩瓶濃度相差多個10倍，不可能只有2/3倍。" },
      D: { verdict: "incorrect", reason: "10⁵低估了指數差；−2與−11相差9個指數。" },
      E: { verdict: "correct", reason: "10⁻²與10⁻¹¹相除為10⁹，甲的H⁺濃度是乙的十億倍。" }
    },
    takeaway: "指數相除要相減：10ᵃ÷10ᵇ＝10ᵃ⁻ᵇ。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-16": {
    encouragement: "氧化還原看元素的氧化數是否改變；沉澱、中和或分解不一定有電子轉移。",
    keyIdea: "Zn＋CuSO₄→ZnSO₄＋Cu中，Zn由0變+2，Cu由+2變0，是氧化還原。",
    steps: ["逐項檢查反應前後同一元素的氧化數。", "A、B是離子結合，C是碳酸鹽分解，氧化數不變；D是核反應。", "E同時有Zn氧化與Cu²⁺還原，所以選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NH₃與HCl形成NH₄Cl是酸鹼反應，N、H、Cl氧化數未改變。" },
      B: { verdict: "incorrect", reason: "BaSO₄沉澱反應只是離子重新組合，各元素氧化數不變。" },
      C: { verdict: "incorrect", reason: "CaCO₃分解成CaO與CO₂時，Ca、C、O的氧化數都沒有改變。" },
      D: { verdict: "incorrect", reason: "鈾裂變改變的是原子核，屬核反應，不是電子轉移的化學氧化還原。" },
      E: { verdict: "correct", reason: "Zn失電子成Zn²⁺，Cu²⁺得電子成Cu，明確發生電子轉移。" }
    },
    takeaway: "有元素單質參與或生成時值得優先檢查氧化數，但最後仍要逐元素確認。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-17": {
    encouragement: "先用五天總能量求葡萄糖莫耳數，再依兩個反應式一路換到LiOH。",
    keyIdea: "五天能量63000 kJ，需22.5 mol葡萄糖，產135 mol CO₂，需270 mol LiOH＝6.50 kg。",
    steps: ["五天能量＝3000×5×4.2＝63000 kJ。", "葡萄糖為63000÷2800＝22.5 mol，產CO₂為22.5×6＝135 mol。", "每1 mol CO₂需2 mol LiOH，所以LiOH為270×24＝6480 g，約6.50 kg，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.108 kg只相當於4.5 mol LiOH，遠不足吸收五天產生的CO₂。" },
      B: { verdict: "incorrect", reason: "0.538 kg忽略了葡萄糖產生6倍CO₂及LiOH的2倍係數。" },
      C: { verdict: "incorrect", reason: "3.20 kg約是正確值的一半，常見原因是漏掉每mol CO₂需要2 mol LiOH。" },
      D: { verdict: "correct", reason: "270 mol LiOH乘莫耳質量24 g/mol約為6.48 kg，最接近6.50 kg。" },
      E: { verdict: "incorrect", reason: "32.0 kg是所需量近5倍，與兩反應式的係數換算不符。" }
    },
    takeaway: "長串計量題一次只跨一座橋：能量→葡萄糖→CO₂→吸收劑。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-33": {
    encouragement: "每個反應先配成最簡整數，再分別加總左右係數，不要只靠目測。",
    keyIdea: "A、D、E配平後，左側係數總和都比右側少2。",
    steps: ["A配成2NH₃→N₂＋3H₂，左2、右4。", "D配成Ca(HCO₃)₂＋2HCl→CaCl₂＋2CO₂＋2H₂O，左3、右5。", "E配平後左側總和3、右側總和5，因此選A、D、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "2NH₃→N₂＋3H₂的左右係數總和為2與4，左邊少2。" },
      B: { verdict: "incorrect", reason: "Fe₂O₃＋3CO→2Fe＋3CO₂的左右總和為4與5，只少1。" },
      C: { verdict: "incorrect", reason: "配平為一份苯二酚加一份H₂O₂生成一份苯醌和兩份水，左右總和2與3，只少1。" },
      D: { verdict: "correct", reason: "係數依序1、2、1、2、2，左總和3、右總和5，正好少2。" },
      E: { verdict: "correct", reason: "配平後乙炔與2份銀氨試劑生成銀鹽、2份銨鹽與2份氨，左右總和3與5。" }
    },
    takeaway: "係數總和題的關鍵不是反應種類，而是先確實守恆每一種原子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-56": {
    encouragement: "把常見糖的成分、檢驗與水解產物分開判斷，就不容易被「全部」騙到。",
    keyIdea: "紅糖白糖主成分是蔗糖；纖維素可水解成葡萄糖；碘液可檢驗澱粉。",
    steps: ["蔗糖是雙醣，紅糖與白砂糖都以它為主。", "纖維素能水解出葡萄糖，再發酵製酒精。", "澱粉遇碘呈藍黑色，因此選A、B、C。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "紅糖含較多糖蜜、白砂糖純度較高，但兩者主要成分皆為蔗糖。" },
      B: { verdict: "correct", reason: "纖維素由葡萄糖單元構成，水解後的糖可供微生物發酵製乙醇。" },
      C: { verdict: "correct", reason: "碘分子進入澱粉螺旋結構會顯藍黑色，可作澱粉檢驗。" },
      D: { verdict: "incorrect", reason: "蔗糖水解得到一分子葡萄糖與一分子果糖，不是兩分子葡萄糖。" },
      E: { verdict: "incorrect", reason: "並非所有醣類都符合(CH₂O)ₙ，例如去氧核糖的組成就不符合此簡式。" }
    },
    takeaway: "看到「均、皆、全部」要特別小心，只要有一個合理反例，整句就不成立。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-103-57": {
    encouragement: "官能基辨認可找形狀：—COOH、—OH與—CONH—，不必先讀完整長鏈。",
    keyIdea: "玻尿酸結構中可見羧基、許多羥基與醯胺基，沒有鹵素或酯基。",
    steps: ["找C同時連O與OH的—COOH，這是羧基。", "找直接連在碳上的多個—OH，這是羥基。", "找—CONH—，這是醯胺基，所以選A、D、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "結構中有—COOH，可辨認為羧基。" },
      B: { verdict: "incorrect", reason: "圖中沒有F、Cl、Br、I等鹵素原子，因此沒有鹵基。" },
      C: { verdict: "incorrect", reason: "酯基應為—COO—連接兩個碳片段；圖中對應含氮部分是醯胺，不是酯。" },
      D: { verdict: "correct", reason: "糖環上可見多個—OH，都是羥基。" },
      E: { verdict: "correct", reason: "結構具有—NHCO—連接，屬於醯胺基。" }
    },
    takeaway: "官能基像結構式中的積木；先圈出小片段，再命名會比看整個大分子容易。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-10": {
    encouragement: "圖中4號和其餘四瓶都反應，還能和KI形成黃色沉澱，特徵指向硝酸鉛。",
    keyIdea: "Pb(NO₃)₂可與KI、HCl、BaCl₂、Na₂CO₃分別形成難溶鉛鹽，其中PbI₂為黃色。",
    steps: ["先由黃色沉澱鎖定PbI₂，表示4號可提供Pb²⁺。", "Pb²⁺和Cl⁻、CO₃²⁻也會形成沉澱。", "五種溶液中能提供Pb²⁺的是Pb(NO₃)₂，答案E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "KI只能和含Pb²⁺者產生黃色PbI₂，自己不會和其餘四瓶都沉澱。" },
      B: { verdict: "incorrect", reason: "HCl可和碳酸鹽產氣、和Pb²⁺沉澱，但不能和四種溶液全都形成沉澱。" },
      C: { verdict: "incorrect", reason: "BaCl₂主要和CO₃²⁻形成BaCO₃，無法符合四條皆為沉澱反應。" },
      D: { verdict: "incorrect", reason: "Na₂CO₃可沉澱Ba²⁺、Pb²⁺並與酸產氣，但和KI不會沉澱。" },
      E: { verdict: "correct", reason: "Pb(NO₃)₂可與其他四瓶形成PbI₂、PbCl₂、PbCO₃等沉澱，PbI₂呈黃色。" }
    },
    takeaway: "反應關係圖可同時看「連線數量」與「特殊顏色」，兩條線索一起用更可靠。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-11": {
    encouragement: "設Y原子量為1份，X就是2份；再試每個化學式能否讓X、Y總質量相等。",
    keyIdea: "若化學式為XₐYᵦ，質量比是2a：b；要成1：1就需b＝2a，所以XY₂。",
    steps: ["令X、Y相對原子量分別為2m與m。", "化合物中質量相等，表示X原子總質量2ma等於Y的mb。", "所以b＝2a，最簡化學式XY₂，答案B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "XY的X、Y質量比為2：1，不是1：1。" },
      B: { verdict: "correct", reason: "XY₂中X質量為2m，兩個Y總質量也為2m，正好1：1。" },
      C: { verdict: "incorrect", reason: "XY₄的質量比為2m：4m＝1：2，Y太多。" },
      D: { verdict: "incorrect", reason: "X₄Y的質量比為8m：m＝8：1，與題目差很遠。" },
      E: { verdict: "incorrect", reason: "X₂Y的質量比為4m：m＝4：1，不相等。" }
    },
    takeaway: "化學式的下標是原子個數比；乘上原子量後，才是題目給的質量比。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-104-54": {
    encouragement: "同分異構物要同時滿足兩件事：原子數相同，但原子的連接方式不同。",
    keyIdea: "由模型逐顆計數，乙與丙的分子式相同；兩者碳骨架與官能基位置不同。",
    steps: ["依圖例分別數碳、氫、氧原子。", "比較五個模型，只有乙與丙的各元素原子數完全相同。", "再看連接方式並不相同，因此乙、丙互為同分異構物，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲與乙的元素原子數組合不同，分子式不相同。" },
      B: { verdict: "correct", reason: "乙與丙含相同數目的C、H、O，但碳鏈與含氧位置不同，符合同分異構物。" },
      C: { verdict: "incorrect", reason: "丙與丁在模型中含氫數或連結形成的不飽和程度不同，分子式不相同。" },
      D: { verdict: "incorrect", reason: "丁與戊的原子數並非完全一致，不能只因都有氧就判為異構物。" },
      E: { verdict: "incorrect", reason: "乙與丁的分子式不同，不符合「同分」這個必要條件。" }
    },
    takeaway: "判斷同分異構物的順序：先比完整分子式，再比結構；不能只看外形相似。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-7": {
    encouragement: "先由電子排列認出五種元素，再找最容易再得到一個電子的非金屬。",
    keyIdea: "戊為2、8、7的Cl，距離穩定外層只差1電子，是五者中活性最大的非金屬。",
    steps: ["甲、乙、丙、丁、戊依序可辨為Li、C、Ne、Mg、Cl。", "Li、Mg是金屬；Ne外層已滿，十分安定。", "Cl只差1電子就滿外層，得電子傾向強，故選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是Li，屬活潑金屬，不是非金屬。" },
      B: { verdict: "incorrect", reason: "乙是C，雖是非金屬，但取得電子的傾向不如Cl強。" },
      C: { verdict: "incorrect", reason: "丙是Ne，最外層已滿，化學活性很低。" },
      D: { verdict: "incorrect", reason: "丁是Mg，屬於容易失去兩個電子的金屬。" },
      E: { verdict: "correct", reason: "戊是Cl，最外層7電子，很容易再得1電子形成穩定Cl⁻。" }
    },
    takeaway: "同一週期的非金屬通常愈靠右得電子能力愈強，但最右端惰性氣體已滿層而不活潑。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-8": {
    encouragement: "把電子數直接認成元素，再逐句檢查；質量數減中子數還能求原子序。",
    keyIdea: "質量數14、中子8，質子數為6，元素是電子排列2、4的碳，也就是乙。",
    steps: ["五圖依序為Li、C、Ne、Mg、Cl。", "X的質子數＝14－8＝6，所以X是碳。", "碳的中性原子電子排列2、4，對應乙，故選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是Li，常失電子形成Li⁺，與非金屬主要組成離子化合物，不是分子化合物。" },
      B: { verdict: "correct", reason: "14－8＝6個質子，原子序6為碳，圖乙正是2、4的電子排列。" },
      C: { verdict: "incorrect", reason: "丙是Ne，最外層8電子，十分安定而不易反應。" },
      D: { verdict: "incorrect", reason: "丁是Mg，通常失去2個電子形成Mg²⁺，不是失去1個電子。" },
      E: { verdict: "incorrect", reason: "戊是Cl，電子有三層，位於第3週期，不是第2週期。" }
    },
    takeaway: "核種題的基本式：質量數＝質子數＋中子數；質子數就是原子序。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-12": {
    encouragement: "先從直線圖把變化量0.80換成呼氣濃度，再乘血液與呼氣的2100倍。",
    keyIdea: "變化量0.80對應呼氣酒精0.40 mg/L；血液為840 mg/L＝0.840 g/L，除46得0.018 M。",
    steps: ["由圖讀出變化量0.80時，呼氣濃度約0.40 mg/L。", "血液濃度＝0.40×2100＝840 mg/L＝0.840 g/L。", "乙醇莫耳質量46，0.840÷46≈0.018 mol/L，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.084 M相當於約3.86 g/L，遠高於由圖與比例算出的0.840 g/L。" },
      B: { verdict: "correct", reason: "0.840 g/L除以46 g/mol約為0.018 mol/L。" },
      C: { verdict: "incorrect", reason: "0.18 M比正確值大10倍，常是毫克換克時少除一個10。" },
      D: { verdict: "incorrect", reason: "0.36 M沒有依乙醇莫耳質量46進行正確換算。" },
      E: { verdict: "incorrect", reason: "0.84是血液酒精的g/L數值，不是mol/L數值。" }
    },
    takeaway: "濃度單位轉換要分兩步：mg/L先變g/L，再除莫耳質量變mol/L。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-13": {
    encouragement: "沿用上一題讀出的呼氣濃度，直接和法規上限0.25 mg/L比較即可。",
    keyIdea: "儀器變化量0.80對應呼氣酒精約0.40 mg/L，大於0.25 mg/L。",
    steps: ["由圖讀出呼氣酒精濃度約0.40 mg/L。", "法規上限是0.25 mg/L。", "0.40>0.25，所以已超標，答案A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "呼氣濃度約0.40 mg/L，明確超過題目給的0.25 mg/L上限。" },
      B: { verdict: "incorrect", reason: "0.40不是低於0.25，不能判為未超標。" },
      C: { verdict: "incorrect", reason: "圖上變化量、換算直線與法規值都已提供，資訊足以確定。" }
    },
    takeaway: "判斷是否超標時，兩邊要使用同一單位再比較。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-14": {
    encouragement: "流程圖最後能回到X，且X先分解成兩種氣體再點燃重組，最符合水的循環。",
    keyIdea: "水可電解成H₂與O₂；兩氣體點燃後又生成水，因此X是H₂O。",
    steps: ["圖中X是液體，經步驟①變成兩種氣體。", "水電解正好生成H₂與O₂。", "兩氣體混合點燃又生成水，能在步驟⑤回到X，故選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "過氧化氫分解主要生成水與氧氣，不會直接得到兩種氣體再點燃回復。" },
      B: { verdict: "correct", reason: "液態水可電解為H₂、O₂，兩者燃燒後又形成液態水，符合整個循環。" },
      C: { verdict: "incorrect", reason: "氧氣在常溫常壓是氣體，而圖中X用方框表示液體。" },
      D: { verdict: "incorrect", reason: "氫氣也是氣體，不符合X的液體符號與分解流程。" },
      E: { verdict: "incorrect", reason: "SO₂為氣體，且不能以圖示兩氣體點燃的方式簡單回到SO₂液體。" }
    },
    takeaway: "流程圖先讀圖例：方框與圓圈代表的狀態，本身就是重要線索。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-105-15": {
    encouragement: "鋅和稀硫酸的反應是製氫氣的經典實驗，看到Zn＋酸就先想到H₂。",
    keyIdea: "Zn＋H₂SO₄→ZnSO₄＋H₂，故Z為氫氣。",
    steps: ["鋅比氫活潑，可把酸中的H⁺還原成氫氣。", "反應式為Zn＋H₂SO₄→ZnSO₄＋H₂。", "圖中的Z是生成氣體，所以答案D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "過氧化氫不是鋅與稀硫酸反應的生成物。" },
      B: { verdict: "incorrect", reason: "水不是此金屬置換酸反應中收集到的氣體Z。" },
      C: { verdict: "incorrect", reason: "這個反應沒有氧化水或氧離子來放出O₂。" },
      D: { verdict: "correct", reason: "鋅失電子成Zn²⁺，酸中的H⁺得電子結合成H₂氣體。" },
      E: { verdict: "incorrect", reason: "硫酸根在反應中留在溶液形成ZnSO₄，不會變成SO₂。" }
    },
    takeaway: "活潑金屬加非氧化性稀酸，常見產物是鹽和氫氣。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  }
});
