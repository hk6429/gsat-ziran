window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-94-27": {
    encouragement: "同位素題只要分清楚三個數字：原子序是質子數，質量數約等於質子加中子，平均原子量則落在兩種同位素之間。",
    keyIdea: "兩同位素含量相近且平均原子量為80，可推得質量數約為79與81；中子數分別是79－35與81－35。",
    steps: [
      "溴的原子序35表示每個溴原子都有35個質子。",
      "兩種同位素百分率幾乎相同，平均原子量80約是兩者質量數的中間值，因此質量數最可能是79與81。",
      "中子數＝質量數－質子數，所以分別為79－35＝44與81－35＝46。",
      "答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "43與45對應的質量數會是78與80，平均約79，不符合題目給的平均原子量80。" },
      B: { verdict: "incorrect", reason: "79與81是兩種同位素的質量數，不是中子數；還必須各減去35個質子。" },
      C: { verdict: "incorrect", reason: "42與44對應質量數77與79，平均約78，與溴的平均原子量80不符。" },
      D: { verdict: "correct", reason: "兩同位素質量數約79、81，扣除35個質子後，中子數分別為44、46。" },
      E: { verdict: "incorrect", reason: "45與47對應質量數80與82，平均約81，比題目的平均原子量80大。" }
    },
    takeaway: "算中子數永遠記得「質量數－原子序」，不要把質量數直接當成中子數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-94-28": {
    encouragement: "4×10⁻³看起來複雜，但pH一定在2與3之間：因為它比10⁻³大，酸性也比pH 3更強。",
    keyIdea: "pH＝－log[H⁺]＝－log(4×10⁻³)≈2.40，最接近2.5。",
    steps: [
      "若[H⁺]＝1×10⁻³ M，pH會是3；本題濃度是它的4倍，所以pH要比3小。",
      "計算pH＝－log(4×10⁻³)＝3－log4。",
      "log4約0.60，因此pH約3－0.60＝2.40。",
      "最接近2.5，答案為 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "pH 1.4代表[H⁺]約4×10⁻² M，比題目的4×10⁻³ M大約10倍。" },
      B: { verdict: "correct", reason: "－log(4×10⁻³)約為2.40，在選項中最接近2.5。" },
      C: { verdict: "incorrect", reason: "pH 3.8代表氫離子濃度比10⁻³ M還低，與題目4×10⁻³ M的方向相反。" },
      D: { verdict: "incorrect", reason: "pH 6.3接近中性，所對應的氫離子濃度遠低於題目數值。" },
      E: { verdict: "incorrect", reason: "pH 9.4屬鹼性，但可樂含酸且[H⁺]為4×10⁻³ M，明顯呈酸性。" }
    },
    takeaway: "看到a×10⁻ⁿ時，pH會接近n，但a大於1會讓pH再比n小一些。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-24": {
    encouragement: "這題先算三聚氰胺裡的氮占多少重量，再和16.6%相比；兩個百分比一除就完成。",
    keyIdea: "C₃H₆N₆中氮的質量為6×14＝84，含氮率84/126＝66.7%，約為16.6%的4倍。",
    steps: [
      "一莫耳三聚氰胺含6莫耳氮原子，氮的總質量為6×14＝84克。",
      "三聚氰胺莫耳質量126克，所以氮的質量百分率為84÷126×100%≈66.7%。",
      "再和正常蛋白質平均含氮量16.6%比較：66.7÷16.6≈4.0。",
      "因此約為4倍，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2倍只相當於約33.2%含氮率，遠低於三聚氰胺實際約66.7%。" },
      B: { verdict: "incorrect", reason: "3倍約為49.8%，仍小於由6個氮原子算出的66.7%。" },
      C: { verdict: "correct", reason: "三聚氰胺含氮率84/126＝66.7%，除以16.6%約等於4。" },
      D: { verdict: "incorrect", reason: "5倍會是83%左右，超過三聚氰胺實際含氮比例。" },
      E: { verdict: "incorrect", reason: "6倍接近100%，不可能符合三聚氰胺還含有碳、氫的分子組成。" }
    },
    takeaway: "元素質量百分率＝分子中該元素總質量÷分子量，再乘100%。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-25": {
    encouragement: "中性分子的總電子數，就是所有原子的原子序加總。氮算7、氧算8，逐項代入即可。",
    keyIdea: "N₂O₃含2×7＋3×8＝38個電子。",
    steps: [
      "中性氮原子有7個電子，中性氧原子有8個電子。",
      "對每個分子使用「氮原子數×7＋氧原子數×8」。",
      "N₂O₃的電子數為2×7＋3×8＝14＋24＝38。",
      "所以答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NO含7＋8＝15個電子，不是38個。" },
      B: { verdict: "incorrect", reason: "NO₃含7＋3×8＝31個電子，仍少於38個。" },
      C: { verdict: "incorrect", reason: "N₂O含2×7＋8＝22個電子，遠少於題目的38個電子。" },
      D: { verdict: "correct", reason: "N₂O₃含2個氮與3個氧，總電子數2×7＋3×8＝38。" },
      E: { verdict: "incorrect", reason: "N₂O₅含2×7＋5×8＝54個電子，多於38個。" }
    },
    takeaway: "中性分子總電子數可直接把各元素的「原子序×原子個數」全部加起來。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-26": {
    encouragement: "有機物污染會讓水中微生物大量消耗氧氣。想恢復魚類與好氧生物，就要先把溶氧補回來。",
    keyIdea: "向河水通入氧氣可提高溶氧，幫助好氧分解並改善水生生物的生存環境。",
    steps: [
      "大量有機污染物被微生物分解時，會消耗河水中的氧氣。",
      "溶氧太低會產生厭氧分解與臭味，也讓魚類等生物難以生存。",
      "向水中輸送O₂可增加溶氧，支持好氧微生物處理污染，也有利自然生態恢復。",
      "因此答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "通入CO₂會增加水中碳酸、降低pH，不能補充水生生物呼吸所需的溶氧。" },
      B: { verdict: "incorrect", reason: "CO有毒且不是水生生物呼吸需要的氣體，無法改善缺氧問題。" },
      C: { verdict: "incorrect", reason: "氯氣可消毒但也具強氧化性與毒性，直接大量通入河川會傷害生物，並非恢復自然生態的作法。" },
      D: { verdict: "correct", reason: "O₂能提高水中溶氧，促進好氧分解並供魚類等生物呼吸。" },
      E: { verdict: "incorrect", reason: "H₂不是一般水生生物呼吸所需氣體，也不能取代O₂改善河川缺氧。" }
    },
    takeaway: "有機污染常造成「微生物耗氧→水體缺氧→臭味與生物死亡」，曝氣補氧可打斷這條鏈。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-29": {
    encouragement: "會爆炸的前提是氣體能燃燒，並和空氣中的氧形成可燃混合物。先把不能燃燒的氣體排除。",
    keyIdea: "甲烷、氫氣與一氧化碳都是可燃性氣體；二氧化碳不可燃，二氧化氮也不是一般燃料。",
    steps: [
      "CH₄、H₂與CO都能和O₂發生快速放熱的燃燒反應。",
      "它們與空氣在密閉容器中混合並點燃時，反應快速產生高溫高壓，可能爆炸。",
      "CO₂已是碳高度氧化後的產物，不能再作一般燃料；NO₂主要是氧化性、毒性氣體，不屬題目所指可燃氣體。",
      "所以甲、乙、丙正確，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲烷與氫氣可燃，但丁的CO₂不會燃燒，不能組成正確三項。" },
      B: { verdict: "incorrect", reason: "氫氣與CO可燃，但戊的NO₂不是一般可燃燃料。" },
      C: { verdict: "incorrect", reason: "CO可燃，但CO₂與NO₂都不屬於會和空氣形成可燃爆炸混合物的燃料。" },
      D: { verdict: "correct", reason: "CH₄、H₂、CO都能與空氣中的O₂快速燃燒，密閉點燃時可能爆炸。" },
      E: { verdict: "incorrect", reason: "甲烷與氫氣可燃，但NO₂不是可燃氣體，因此戊不應選。" }
    },
    takeaway: "判斷爆炸風險先找「可燃氣體＋氧氣＋點火」，三個條件缺一不可。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-30": {
    encouragement: "甲烷燃燒時1公升甲烷需要2公升氧氣。先用540公升氧氣反推甲烷量，再除以每分鐘流量。",
    keyIdea: "CH₄＋2O₂→CO₂＋2H₂O；540 L O₂對應270 L CH₄，供氣30 L/min可用9分鐘。",
    steps: [
      "平衡式顯示CH₄與O₂的莫耳比為1：2；同溫同壓下氣體體積比也為1：2。",
      "消耗540 L O₂，需要的CH₄體積為540÷2＝270 L。",
      "天然氣供應速率是每分鐘30 L。",
      "可維持時間為270÷30＝9分鐘，答案為 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4.5分鐘只供應135 L甲烷，只會消耗270 L氧氣，是題目氧氣量的一半。" },
      B: { verdict: "correct", reason: "540 L氧氣可燃燒270 L甲烷；以30 L/min供氣可維持270÷30＝9分鐘。" },
      C: { verdict: "incorrect", reason: "18分鐘會供應540 L甲烷，而這需要1080 L氧氣，超過題目給的兩倍。" },
      D: { verdict: "incorrect", reason: "36分鐘所需甲烷為1080 L，會消耗2160 L氧氣，遠超過540 L。" },
      E: { verdict: "incorrect", reason: "72分鐘是把燃燒係數方向與供氣量都放大後的結果，不符合1：2體積比。" }
    },
    takeaway: "同溫同壓的氣體可直接用平衡係數當體積比，再用體積÷流量求時間。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-42": {
    encouragement: "三個分解反應都有共同產物W。先由Q是可燃元素氣體認出H₂，再由水可分解成H₂與O₂找出W。",
    keyIdea: "Q為H₂時，Y可為H₂O、W為O₂；液態且能置換Ag的元素R是Hg，所以正確為C、D。",
    steps: [
      "Q只由一種元素構成且可燃，最合理是H₂；水分解可同時生成H₂與O₂，因此Y可為H₂O，W為O₂。",
      "P是鹽且其水溶液遇AgNO₃產生白色沉澱，可聯想到Cl⁻生成AgCl；例如KClO₃分解產生O₂與KCl。",
      "R在常溫為液態，又是能從AgNO₃置換出Ag的金屬元素，符合汞Hg；HgO分解可生成共同產物O₂與Hg。",
      "所以C、D正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "P本身要是一種可形成水溶液的鹽；AgCl難溶於水，不能形成題述水溶液再與AgNO₃反應。" },
      B: { verdict: "incorrect", reason: "O₂只由一種元素組成但不是可燃氣體，而是助燃氣體；Q應為H₂。" },
      C: { verdict: "correct", reason: "Hg是常溫常壓下呈液態的金屬，活性又比Ag大，可從AgNO₃中置換出Ag。" },
      D: { verdict: "correct", reason: "H₂O可分解成共同產物O₂與可燃元素氣體H₂，符合Y→W＋Q。" },
      E: { verdict: "incorrect", reason: "KBr不會依題述分解成共同的O₂與液態金屬Hg；若產生Br₂也不能對上置換Ag的金屬線索。" }
    },
    takeaway: "多條反應共用產物時，先從最明確的物性線索反推出一條，再用共同產物串回其他反應。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-98-64": {
    encouragement: "題幹其實給了身分證：來自建材中鈾的衰變、是放射性惰性氣體、會累積在不通風室內。",
    keyIdea: "鈾衰變系列會產生放射性氡氣Rn；氡可由土壤與建材逸出並在室內累積。",
    steps: [
      "題目指出污染物由鈾等元素衰變而來，所以它本身也和放射性衰變系列有關。",
      "它是惰性氣體，化學反應性低，因此能由建材孔隙逸散到空氣。",
      "氡Rn正是鈾衰變系列產生的放射性稀有氣體，通風不良時可能在室內累積。",
      "因此答案為 E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氦雖是稀有氣體，但不是題目所述鈾衰變後造成室內肺癌風險的主要污染氣體。" },
      B: { verdict: "incorrect", reason: "氖主要由空氣分離取得，並非建材中鈾衰變所釋出的放射性室內污染物。" },
      C: { verdict: "incorrect", reason: "氬是空氣中的常見稀有氣體，天然主要同位素穩定，不符合題述放射性風險。" },
      D: { verdict: "incorrect", reason: "氪不是鈾衰變系列中由土壤與建材逸出的主要放射性氣體。" },
      E: { verdict: "correct", reason: "氡是鈾衰變系列產生的放射性稀有氣體，可從土壤、磚瓦逸出並在不通風室內累積。" }
    },
    takeaway: "室內放射性氣體污染的關鍵字是「鈾衰變、建材、通風不良、氡」。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-19": {
    encouragement: "雙氧水的正式名稱是過氧化氫，記住它比水多一個氧原子即可。",
    keyIdea: "水是H₂O，過氧化氫是H₂O₂。",
    steps: [
      "名稱「過氧化氫」表示由氫、氧組成的特定化合物。",
      "一個過氧化氫分子含2個氫原子與2個氧原子。",
      "所以分子式寫成H₂O₂。",
      "答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "O₂－H₂O不是單一化合物的標準分子式，而像把氧氣與水分開書寫。" },
      B: { verdict: "incorrect", reason: "H₂O₃含3個氧原子，不是常見雙氧水過氧化氫的組成。" },
      C: { verdict: "incorrect", reason: "HO₂的原子數比例雖可約成1：2，但不能把過氧化氫的實際分子式H₂O₂約分。" },
      D: { verdict: "correct", reason: "過氧化氫每個分子含2個H與2個O，分子式為H₂O₂。" },
      E: { verdict: "incorrect", reason: "H₃O₂含3個氫，不符合過氧化氫分子的實際原子組成。" }
    },
    takeaway: "分子式表示一個分子的實際原子個數，H₂O₂不能像比例一樣約成HO。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-23": {
    encouragement: "隨手抓的一把海砂，裡面通常不只一種顆粒。只要組成不固定，就不是純物質。",
    keyIdea: "天然海砂含不同礦物、岩屑、貝殼碎片等，成分比例不固定，屬混合物。",
    steps: [
      "元素只含一種原子；化合物與其他純物質都要有固定組成與特定性質。",
      "海灘砂粒可能包含石英、長石、岩石碎屑、貝殼碎片與其他物質。",
      "不同地點或不同一把砂的成分比例都可能改變。",
      "因此海砂屬混合物，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "海砂不是只由一種元素原子構成，常含多種礦物與生物碎片。" },
      B: { verdict: "incorrect", reason: "純物質的組成固定，但任意一把海砂的各種顆粒比例並不固定。" },
      C: { verdict: "incorrect", reason: "單一化合物有固定元素比例；海砂含多種不同化合物與物質。" },
      D: { verdict: "correct", reason: "海砂由多種礦物、岩屑與貝殼等成分混合，比例可變，所以是混合物。" },
      E: { verdict: "incorrect", reason: "聚合物由大量重複單元連接成大分子，海砂不是這類單一大分子材料。" }
    },
    takeaway: "天然材料若可看見或推知含多種成分，而且比例不固定，通常判為混合物。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-28": {
    encouragement: "同溫同壓下氣體體積比就是分子數比。把A₂與B₂提供的原子數換成比例，就能得到甲的分子式。",
    keyIdea: "10 mL A₂與30 mL B₂的分子數比1：3，提供A、B原子數比也是1：3，因此實驗式為AB₃。",
    steps: [
      "A₂與B₂體積比10：30＝1：3，所以分子數比也是1：3。",
      "每個A₂含2個A，每個B₂含2個B；兩者都乘2後，A：B原子數比仍是1：3。",
      "甲的實驗式為AB₃；題目又說分子式與實驗式相同。",
      "因此甲的分子式是AB₃，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "AB要求A、B原子比1：1，但反應物提供的原子比是1：3。" },
      B: { verdict: "incorrect", reason: "AB₂的A、B比為1：2，少算了30 mL B₂相對於10 mL A₂的3倍關係。" },
      C: { verdict: "correct", reason: "A₂與B₂分子數比1：3，兩者每個分子都含2個同種原子，所以產物原子比為A：B＝1：3。" },
      D: { verdict: "incorrect", reason: "A₂B₃的A、B比為2：3，不等於反應物提供的1：3。" },
      E: { verdict: "incorrect", reason: "A₂B的A、B比為2：1，不但數值不合，方向也和B較多的資料相反。" }
    },
    takeaway: "雙原子分子兩邊都乘2時比例不變；10：30可直接化成產物中的1：3。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-29": {
    encouragement: "先由上一題寫出反應：1份A₂加3份B₂會生成2份AB₃。接著只用體積縮半、壓力加倍即可。",
    keyIdea: "A₂＋3B₂→2AB₃；10 mL A₂與30 mL B₂在原條件下生成20 mL AB₃，壓到10 mL時壓力由1 atm變2 atm。",
    steps: [
      "依原子守恆，反應式為A₂＋3B₂→2AB₃。",
      "同溫同壓下，10 mL A₂恰好生成2倍體積，也就是20 mL AB₃。",
      "降溫回27℃後溫度與原條件相同；把氣體由20 mL壓縮到10 mL，體積變為一半。",
      "由P₁V₁＝P₂V₂，P₂＝1×20÷10＝2 atm，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.5 atm會出現在體積加倍的情況；本題是把20 mL壓縮成10 mL。" },
      B: { verdict: "incorrect", reason: "若壓力仍1 atm，同溫下20 mL產物不會在莫耳數不變時自行變成10 mL。" },
      C: { verdict: "incorrect", reason: "1.5 atm不符合體積恰好縮成一半的反比關係，壓力應加倍。" },
      D: { verdict: "correct", reason: "產物原為20 mL、1 atm，同溫壓至10 mL後，壓力為1×20/10＝2 atm。" },
      E: { verdict: "incorrect", reason: "3 atm代表體積應壓成原來三分之一左右，不是由20 mL變10 mL。" }
    },
    takeaway: "同溫、同量氣體下，體積減半會使壓力加倍。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-39": {
    encouragement: "這題分成「怎麼收集」與「氮氣支不支持燃燒」兩部分；再留意鎂是少數能在氮氣中繼續反應的金屬。",
    keyIdea: "N₂難溶於水，可排水收集；不支持火柴燃燒，但高溫鎂能和N₂形成Mg₃N₂。",
    steps: [
      "實驗室製氮通常不是加熱NaNO₃與CaCl₂；加熱試管也應略微傾斜以維持安全。",
      "氮氣在水中溶解度小，可用排水集氣法收集。",
      "一般火柴需要O₂支持燃燒，放入N₂會熄滅。",
      "燃燒中的鎂反應性高，可繼續和N₂反應生成氮化鎂，因此選 C、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "加熱硝酸鈉與氯化鈣不會成為常用的氮氣製備反應，無法依此直接得到N₂。" },
      B: { verdict: "incorrect", reason: "加熱裝有固體的試管時通常要讓管口略向下並朝無人處，不應直立加熱，以免冷凝液回流造成破裂。" },
      C: { verdict: "correct", reason: "N₂在水中溶解度低且不會明顯與水反應，可用排水集氣法收集。" },
      D: { verdict: "correct", reason: "N₂不支持一般火柴燃燒，火柴進入氮氣瓶後會因缺氧熄滅。" },
      E: { verdict: "correct", reason: "高溫鎂的反應性很強，可和N₂形成Mg₃N₂，因此點燃的鎂帶能繼續燃燒。" }
    },
    takeaway: "氮氣通常不助燃，但「通常」有例外；活潑的高溫鎂可直接和氮氣反應。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-40": {
    encouragement: "熱化學式的－484 kJ屬於整條反應，也就是生成2莫耳水蒸氣；先除以2，再判斷液態水還會多放出凝結熱。",
    keyIdea: "生成2 mol H₂O(g)放熱484 kJ，故每1 mol放熱242 kJ；生成液態水還會額外放出凝結熱。",
    steps: [
      "ΔH＝－484 kJ表示反應放熱，周遭會吸收到熱而升溫。",
      "反應生成2 mol H₂O(g)，所以每生成1 mol放熱484÷2＝242 kJ。",
      "生成物能量比反應物低484 kJ，不是高；若生成液態水，水蒸氣再凝結還會放熱，總放熱量大於484 kJ。",
      "1 mol H₂只反應一半的反應式並放熱242 kJ，因此正確為 A、B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "整式生成2 mol H₂O(g)放熱484 kJ，所以每1 mol放熱242 kJ。" },
      B: { verdict: "correct", reason: "反應為放熱反應，釋出的能量傳給周遭，可使周遭溫度上升。" },
      C: { verdict: "incorrect", reason: "放熱反應的生成物能量較低；2H₂O(g)應比反應物低484 kJ，不是高484 kJ。" },
      D: { verdict: "correct", reason: "若生成液態水，氣態水凝結還會再放熱，因此放熱量的絕對值會大於484 kJ。" },
      E: { verdict: "incorrect", reason: "1 mol H₂是限量試劑，只能進行半次反應並消耗0.5 mol O₂，能量變化為放熱242 kJ。" }
    },
    takeaway: "熱化學數值要跟反應係數一起縮放；產物由氣態變液態還會多放出凝結熱。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-41": {
    encouragement: "生活藥物題用「用途配名稱」即可：小蘇打制酸、盤尼西林抗菌、氫氧化鋁中和胃酸、阿司匹靈是乙醯水楊酸。",
    keyIdea: "青黴素是抗生素，Al(OH)₃是制酸劑，阿司匹靈為乙醯水楊酸；NaHCO₃不是消炎藥，磺胺類也不是一般止瀉藥分類。",
    steps: [
      "NaHCO₃可中和胃酸，常見用途是制酸，不是消炎。",
      "青黴素又稱盤尼西林，是抗生素；Al(OH)₃能與胃中的HCl反應，具有制酸作用。",
      "磺胺類是抗菌藥物，不宜直接說成最普遍的止瀉藥。",
      "阿司匹靈的化學名稱是乙醯水楊酸，因此選 B、C、E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NaHCO₃主要利用鹼性中和胃酸，屬制酸用途，不是消炎藥。" },
      B: { verdict: "correct", reason: "青黴素的英文penicillin常譯為盤尼西林，是用來對抗特定細菌的抗生素。" },
      C: { verdict: "correct", reason: "Al(OH)₃可與胃酸HCl中和，降低過多酸度，因此具有制酸作用。" },
      D: { verdict: "incorrect", reason: "磺胺類主要是抗菌藥物，不能概括為止瀉藥中最普遍的一類。" },
      E: { verdict: "correct", reason: "阿司匹靈的化學名稱為乙醯柳酸，也稱乙醯水楊酸。" }
    },
    takeaway: "藥物名稱相似不代表用途相同；先問它是中和酸、抗菌，還是止痛消炎。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-59": {
    encouragement: "白天看到綠色是反射光，從杯內透出看到紅色是透射光。把「看到哪種顏色」對回光的去向即可。",
    keyIdea: "酒杯反射綠光、透過紅光，所以金銀奈米顆粒對綠光的反射能力高於紅光。",
    steps: [
      "白天外部光照下酒杯呈綠色，表示返回眼睛的反射光以綠光較強。",
      "由內照明時透射光呈紅色，表示紅光比綠光更容易穿透。",
      "因此奈米顆粒對綠光的反射能力高於對紅光的反射能力。",
      "答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 nm＝10⁻⁹ m，而1 m＝100 cm，所以1 nm＝10⁻⁷ cm，不是10⁻⁹ cm。" },
      B: { verdict: "incorrect", reason: "一般二氧化矽玻璃不會呈現題述雙色效果，特殊現象來自其中的金、銀奈米顆粒。" },
      C: { verdict: "incorrect", reason: "若對紅、綠光反射能力相同，就不會在反射光中明顯呈綠色。" },
      D: { verdict: "correct", reason: "外部照射時觀察到綠色反射光，表示奈米顆粒對綠光的反射比紅光強。" },
      E: { verdict: "incorrect", reason: "酒杯會把綠光反射出來，不能說對綠光的吸收比紅光更強；透射光則以紅色為主。" }
    },
    takeaway: "物體在反射光下呈哪個顏色，通常表示那個顏色被反射得較多。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-65": {
    encouragement: "不用先畫臭氧結構，只要知道每個氧原子有6個價電子，三個氧直接相加即可。",
    keyIdea: "O₃有3個氧原子，每個氧有6個價電子，所以總價電子數為18。",
    steps: [
      "氧位於第16族，每個中性氧原子有6個價電子。",
      "臭氧分子O₃由3個氧原子組成。",
      "總價電子數為3×6＝18。",
      "答案為 B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "16不是3個氧原子的價電子總和；每個氧有6個，應算3×6。" },
      B: { verdict: "correct", reason: "O₃含3個氧原子，每個提供6個價電子，共18個。" },
      C: { verdict: "incorrect", reason: "20比正確總數多2個，等於無故加入一對電子。" },
      D: { verdict: "incorrect", reason: "22無法由3個中性氧原子的價電子數相加得到。" },
      E: { verdict: "incorrect", reason: "24是把每個氧周圍追求的8個電子直接乘3，但共用的鍵結電子不能這樣當作分子總價電子。" }
    },
    takeaway: "分子總價電子數先由各原子的族數相加；八隅體的8不能直接拿來乘原子數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-66": {
    encouragement: "臭氧可畫成一個O—O單鍵加一個O＝O雙鍵；單鍵是一對、雙鍵是兩對，合起來三對。",
    keyIdea: "O₃的共振路易斯結構中，一條單鍵含1對鍵結電子，一條雙鍵含2對，共3對鍵結電子。",
    steps: [
      "先用18個價電子畫出符合八隅體的臭氧路易斯結構。",
      "三個氧之間形成一條單鍵與一條雙鍵；實際結構可用兩個共振式表示。",
      "單鍵有1對鍵結電子，雙鍵有2對鍵結電子。",
      "總共有1＋2＝3對，答案為 C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1對只計入其中一條單鍵，漏掉另一側雙鍵中的2對鍵結電子。" },
      B: { verdict: "incorrect", reason: "2對像是把兩條O—O連接都當單鍵，會無法讓合理的臭氧路易斯結構滿足電子配置。" },
      C: { verdict: "correct", reason: "臭氧的一條單鍵提供1對、一條雙鍵提供2對，合計3對鍵結電子。" },
      D: { verdict: "incorrect", reason: "4對代表兩條都是雙鍵，但那不是符合O₃總價電子數與形式電荷的主要路易斯表示。" },
      E: { verdict: "incorrect", reason: "5對超過臭氧兩個原子連接位置所需的鍵結電子對數。" }
    },
    takeaway: "數鍵結電子對時，單鍵算1對、雙鍵算2對、三鍵算3對。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-99-67": {
    encouragement: "題目故意把原子、分子、離子混在一起。各找一個反例，就能檢查「一定」這兩個字是否站得住腳。",
    keyIdea: "同元素微粒可含不同原子數；總質子數相同也未必同元素；離子的質子數與電子數不同，因此甲乙丙皆錯。",
    steps: [
      "甲錯：O原子與O₂分子都只由氧元素構成，但總質子數分別8與16。",
      "乙錯：不同組合的微粒可能剛好有相同總質子數，例如Ne原子有10個質子，CH₄分子也共有6＋4＝10個質子。",
      "丙錯：中性原子、分子的質子與電子總數相等，但陽離子失去電子、陰離子得到電子，不會相等。",
      "因此甲、乙、丙都不正確，丁的判斷正確，答案為 D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲忽略同一元素可形成含不同原子數的微粒，例如O與O₂的總質子數不同。" },
      B: { verdict: "incorrect", reason: "乙把「總質子數相同」誤當成同元素；分子中多個原子的質子加總可能和另一元素原子相同。" },
      C: { verdict: "incorrect", reason: "丙只適用中性微粒；離子因失去或得到電子，總電子數不等於總質子數。" },
      D: { verdict: "correct", reason: "甲、乙、丙都可被原子、分子或離子的反例推翻，所以丁的綜合判斷正確。" },
      E: { verdict: "incorrect", reason: "甲乙丙不是都正確，反而三者都因忽略不同微粒型態而錯誤。" }
    },
    takeaway: "科學敘述出現「一定」時，只要找到一個合理反例，就能證明它不成立。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
