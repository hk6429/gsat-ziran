window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-88-11": {
    encouragement: "這題要分清楚「看血液是否凝集」和「讀取 DNA 序列」；古代滴血只能觀察血液混合後的外觀。",
    keyIdea: "血液混合後是否凝集，反映的是紅血球表面抗原與血漿抗體的反應。",
    steps: [
      "滴血認親把兩人的血直接混合，只能觀察是否出現凝集。",
      "凝集是抗體辨認紅血球表面抗原後造成的現象。",
      "DNA 比對需要萃取、增幅或定序等技術，肉眼混血無法完成。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "把血液混合後觀察凝集，最接近血型抗原與抗體的比對。" },
      B: { verdict: "incorrect", reason: "DNA 比對不能靠幾滴血直接混合觀察，必須使用分子生物技術分析。" },
      C: { verdict: "incorrect", reason: "滴血法沒有同時分析 DNA 與蛋白質，只是觀察血液混合後的反應。" }
    },
    takeaway: "血液凝集看抗原抗體；確認親子關係則要靠 DNA 鑑定。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-13": {
    encouragement: "先記住族群密度的定義：同一物種在「單位空間」內有多少個體。",
    keyIdea: "族群密度是單位面積或單位體積內的族群個體數。",
    steps: [
      "族群是同一時間、同一地區內的同種生物。",
      "密度必須把個體數除以所占的面積或體積。",
      "生態系的非生物因子很多，物種越多通常也越有機會維持穩定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "非生物環境因子不只列出的五種，還包括礦物質、鹽度、酸鹼值等。" },
      B: { verdict: "correct", reason: "族群密度就是單位空間中某一族群的個體數。" },
      C: { verdict: "incorrect", reason: "物種較多的生態系通常食物網較複雜，面對干擾時往往較有調節能力。" },
      D: { verdict: "incorrect", reason: "個體即使暫時獨處，仍與其他生物及非生物環境互動，不能由閉關推論個體可完全獨立存在。" }
    },
    takeaway: "族群密度＝個體數÷空間大小。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-14": {
    encouragement: "石蕊試紙就是酸鹼偵探：藍變紅是酸性，紅變藍是鹼性，沒有明顯變化接近中性。",
    keyIdea: "胃液呈酸性、唾液接近中性、小腸液偏鹼性。",
    steps: [
      "甲使藍色石蕊變紅，表示甲呈酸性，符合胃液。",
      "乙沒有明顯變色，表示接近中性，符合唾液。",
      "丙使紅色石蕊變藍，表示呈鹼性，符合小腸液。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲酸性為胃液、乙近中性為唾液、丙鹼性為小腸液，三者都吻合。" },
      B: { verdict: "incorrect", reason: "小腸液偏鹼，不會使藍色石蕊變紅；胃液也不是近中性。" },
      C: { verdict: "incorrect", reason: "乙近中性較符合唾液，丙呈鹼性較符合小腸液，兩者顛倒。" },
      D: { verdict: "incorrect", reason: "甲呈酸性應為胃液，丙呈鹼性不可能是胃液。" }
    },
    takeaway: "胃液酸、唾液近中性、小腸液偏鹼。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-76": {
    encouragement: "把基因型分成兩類就容易了：異型合子有兩種等位基因，同型合子則有兩個相同等位基因。",
    keyIdea: "在孟德爾完全顯性的遺傳中，異型合子表現顯性；顯性同型與隱性同型分別表現顯性、隱性。",
    steps: [
      "以 A 為顯性、a 為隱性：異型合子 Aa 表現顯性性狀。",
      "同型合子 AA 表現顯性性狀，aa 表現隱性性狀。",
      "題目限定孟德爾遺傳，不能把不完全顯性的中間型混入判斷。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "完全顯性時，異型合子 Aa 會表現顯性性狀。" },
      B: { verdict: "incorrect", reason: "完全顯性時，異型合子的隱性等位基因不會決定外表的隱性性狀。" },
      C: { verdict: "incorrect", reason: "中間型屬不完全顯性，不是本題所指的孟德爾完全顯性關係。" },
      D: { verdict: "correct", reason: "顯性同型合子 AA 會表現顯性性狀。" },
      E: { verdict: "correct", reason: "隱性同型合子 aa 會表現隱性性狀。" },
      F: { verdict: "incorrect", reason: "一對等位基因不一定只表現顯性；aa 時會表現隱性性狀。" },
      G: { verdict: "incorrect", reason: "一對等位基因也不會只表現隱性；有顯性等位基因時通常表現顯性。" }
    },
    takeaway: "Aa 顯性、AA 顯性、aa 隱性，是完全顯性的基本判讀。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-3": {
    encouragement: "同樣的葡萄糖完全氧化，總能量相同；差別在能量最後以什麼形式出現。",
    keyIdea: "燃燒主要把能量變成熱；細胞呼吸則能把部分能量暫存於 ATP。",
    steps: [
      "反應物與最終產物相同時，完整反應釋放的總能量相同。",
      "試管燃燒快速進行，能量大多直接成為熱。",
      "細胞以多步驟氧化葡萄糖，將部分能量轉存到 ATP。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "等量葡萄糖完全氧化成相同產物，釋放的總能量不會因地點而變多。" },
      B: { verdict: "incorrect", reason: "試管燃燒沒有細胞的酵素與磷酸化系統，不會製造 ATP。" },
      C: { verdict: "incorrect", reason: "生物體內有部分能量先儲存在 ATP，不是全部立刻以熱散失。" },
      D: { verdict: "correct", reason: "兩者總能量相同；燃燒以熱釋出，細胞呼吸可將部分能量儲存在 ATP。" }
    },
    takeaway: "總能量相同，細胞的巧妙之處是能把一部分裝進 ATP。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-4": {
    encouragement: "竹子有維管束，關鍵不在「有沒有管線」，而在「有沒有能持續製造新木質部的形成層」。",
    keyIdea: "多數竹類維管束缺乏活躍形成層，因此通常不能持續次生增粗。",
    steps: [
      "木本雙子葉植物可由形成層向內、外產生新維管組織而增粗。",
      "竹子雖有木質部與韌皮部，但維管束通常沒有活躍形成層。",
      "缺少持續的次生生長，莖達一定粗度後便不再明顯增粗。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "竹莖內有散生的維管束，並非沒有維管束。" },
      B: { verdict: "incorrect", reason: "竹子不能持續增粗不是因為維管束隨生長退化。" },
      C: { verdict: "correct", reason: "竹子的維管束通常沒有活躍形成層，不能持續產生次生木質部與韌皮部。" },
      D: { verdict: "incorrect", reason: "題目關鍵是缺乏活躍形成層，不是形成層所生細胞老化。" }
    },
    takeaway: "植物能否持續長粗，要看形成層是否能持續活動。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-7": {
    encouragement: "突變先產生差異，環境再篩選差異；天擇不是照需求製造突變。",
    keyIdea: "自然選擇改變不同遺傳變異留下後代的機會，因而影響演化方向。",
    steps: [
      "突變是變異來源之一，發生方向不是由生物需要決定。",
      "環境使某些可遺傳變異較有利，帶有它們的個體留下較多後代。",
      "只有能進入後代的遺傳變異，才能長期改變族群。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "天擇不會為了適應而主動製造突變，只會篩選已存在的變異。" },
      B: { verdict: "correct", reason: "環境選擇會改變各種遺傳特徵在族群中的比例，因此影響演化方向。" },
      C: { verdict: "incorrect", reason: "體細胞變異通常不會傳給後代，難以成為族群演化的材料。" },
      D: { verdict: "incorrect", reason: "演化不要求體細胞與生殖細胞同時變異，重點是變異能否遺傳。" }
    },
    takeaway: "突變提供材料，天擇負責篩選，遺傳讓變化累積。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-61": {
    encouragement: "先用大分類判斷：脊椎動物多為閉鎖式；昆蟲與甲殼類等節肢動物多為開放式。",
    keyIdea: "節肢動物採開放式循環，蛇與青蛙等脊椎動物採閉鎖式循環。",
    steps: [
      "開放式循環的體液會離開血管，直接流入體腔周圍。",
      "蝗蟲、蟑螂是昆蟲，螃蟹是甲殼類，三者都屬節肢動物。",
      "蛇與青蛙是脊椎動物，血液在心臟與血管內循環。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "蛇是爬蟲類脊椎動物，具有閉鎖式循環。" },
      B: { verdict: "correct", reason: "蝗蟲是昆蟲，血淋巴進入體腔，屬開放式循環。" },
      C: { verdict: "incorrect", reason: "青蛙是兩生類脊椎動物，具有閉鎖式循環。" },
      D: { verdict: "correct", reason: "蟑螂是昆蟲，血淋巴會流入體腔並接觸器官，屬開放式循環。" },
      E: { verdict: "correct", reason: "螃蟹是甲殼類節肢動物，採開放式循環。" }
    },
    takeaway: "昆蟲、甲殼類多為開放式；脊椎動物為閉鎖式。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-62": {
    encouragement: "吸氣時想像胸腔像打氣筒被拉大：橫膈收縮下移，胸腔變大，空氣才會進來。",
    keyIdea: "橫膈收縮會下移，使胸腔體積增加、壓力下降並造成吸氣。",
    steps: [
      "橫膈肌收縮時由拱形變得較平，胸腔底部向下移。",
      "胸腔體積增大，肺隨之擴張。",
      "肺內壓力下降，外界空氣流入。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "橫膈收縮變平，會使胸腔底部下移。" },
      B: { verdict: "incorrect", reason: "橫膈收縮造成的是吸氣，不是呼氣。" },
      C: { verdict: "correct", reason: "橫膈下移使胸腔上下徑增加，胸腔擴大。" },
      D: { verdict: "incorrect", reason: "胸腔體積增加時，肺內壓力會下降而非上升。" },
      E: { verdict: "incorrect", reason: "吸氣時肺臟擴張，不是受到壓縮。" }
    },
    takeaway: "橫膈收縮：下移、胸腔變大、壓力下降、吸氣。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-63": {
    encouragement: "判斷激素時先問：它會不會改變血糖，或促進身體使用、製造與儲存葡萄糖？",
    keyIdea: "胰島素、升糖素（舊稱抗胰島素）、腎上腺素與腎上腺皮質素都參與醣類代謝調節。",
    steps: [
      "胰島素促進細胞利用葡萄糖及合成肝糖，使血糖下降。",
      "升糖素與腎上腺素可促進肝糖分解，使血糖上升。",
      "腎上腺皮質素可促進糖質新生，也會影響醣類利用。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "副甲狀腺素主要調節血鈣與磷酸鹽，不是主要醣類代謝激素。" },
      B: { verdict: "correct", reason: "腎上腺皮質素可促進糖質新生並影響血糖調節。" },
      C: { verdict: "correct", reason: "腎上腺素可促進肝糖分解，讓緊急狀態下血糖升高。" },
      D: { verdict: "correct", reason: "胰島素促進細胞攝取與利用葡萄糖，也促進肝糖合成。" },
      E: { verdict: "correct", reason: "題目所稱抗胰島素即升糖素，可促進肝糖分解並提高血糖。" },
      F: { verdict: "incorrect", reason: "動情素主要調節女性生殖系統與第二性徵，不是主要醣類代謝激素。" },
      G: { verdict: "incorrect", reason: "黃體激素主要維持子宮內膜與懷孕環境，不是主要醣類代謝激素。" }
    },
    takeaway: "胰島素降血糖；升糖素與腎上腺素升血糖；皮質素也會影響糖代謝。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-13": {
    encouragement: "二氧化碳在血液裡不只「溶著走」；大部分會先轉成較容易運送的碳酸氫根。",
    keyIdea: "血液中的二氧化碳主要以碳酸氫根離子 HCO3− 的形式運送。",
    steps: [
      "組織產生的二氧化碳擴散進紅血球。",
      "二氧化碳與水形成碳酸，再解離成氫離子與碳酸氫根。",
      "碳酸氫根進入血漿運送到肺，再轉回二氧化碳呼出。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "碳酸 H2CO3 只是短暫中間物，並非血中二氧化碳最主要的運送形式。" },
      B: { verdict: "incorrect", reason: "一部分二氧化碳會與血紅素結合，但比例低於碳酸氫根形式。" },
      C: { verdict: "incorrect", reason: "生理酸鹼值下主要形成 HCO3−，不是大量形成 CO3²−。" },
      D: { verdict: "correct", reason: "血液中的二氧化碳大部分轉變成碳酸氫根 HCO3− 運送。" }
    },
    takeaway: "血中二氧化碳的主要交通工具是碳酸氫根。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-15": {
    encouragement: "肌肉收縮不是蛋白質自己縮短，而是粗、細肌絲彼此滑動，讓整段肌節變短。",
    keyIdea: "肌原纖維由粗肌絲與細肌絲等蛋白質構成，收縮時肌絲互相滑動。",
    steps: [
      "一條肌纖維就是一個細長的肌細胞，內含許多肌原纖維。",
      "肌原纖維由肌凝蛋白粗肌絲與肌動蛋白細肌絲規則排列。",
      "收縮時肌絲長度大致不變，而是彼此滑動使肌節縮短。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "肌原纖維主要由粗、細兩類絲狀蛋白質排列構成。" },
      B: { verdict: "incorrect", reason: "粗細肌絲本身不明顯縮短，而是互相滑動造成肌肉收縮。" },
      C: { verdict: "incorrect", reason: "關係相反：許多肌原纖維位於一條肌纖維之內。" },
      D: { verdict: "incorrect", reason: "肌纖維才是肌細胞；肌原纖維是肌細胞內的收縮構造。" }
    },
    takeaway: "肌纖維是細胞；肌原纖維在細胞內；粗細肌絲靠滑動收縮。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-19": {
    encouragement: "鈣不只和骨骼有關，也參與神經與肌肉運作；血鈣過低時，肌肉容易不正常收縮。",
    keyIdea: "血液中鈣離子濃度過低會提高神經肌肉興奮性，可能造成痙攣。",
    steps: [
      "神經傳遞與肌肉收縮都需要適當的離子濃度。",
      "血鈣過低時，神經與肌肉細胞較容易被刺激。",
      "因此肌肉可能出現不自主收縮或痙攣。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鉀離子異常會影響神經與心肌，但本題典型的低濃度痙攣指低血鈣。" },
      B: { verdict: "incorrect", reason: "鈉離子參與動作電位與體液平衡，但不是本題所問的典型低血鈣痙攣。" },
      C: { verdict: "incorrect", reason: "鎂不足也可能影響肌肉功能，但課程中造成手足痙攣的代表性原因是低血鈣。" },
      D: { verdict: "correct", reason: "鈣離子過低會使神經肌肉興奮性升高，容易發生痙攣。" },
      E: { verdict: "incorrect", reason: "銅是微量元素，低血銅不是本題所述肌肉痙攣的主要判斷。" }
    },
    takeaway: "低血鈣不只傷骨，也可能讓神經肌肉過度興奮而痙攣。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-22": {
    encouragement: "尿液形成分三關：腎小球濾過、腎小管再吸收、腎小管分泌；先確認物質移動方向。",
    keyIdea: "腎小球可讓水與小分子進入腎小管，大分子蛋白質與血球通常留在血液。",
    steps: [
      "腎小球血壓推動水與多種小分子進入鮑氏囊。",
      "濾液流經腎小管時，有用物質與大部分水再回到微血管。",
      "正常尿液幾乎沒有葡萄糖與胺基酸，因它們會被大量再吸收。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "腎小球濾過主要由血壓推動，不是全程都直接消耗細胞能量。" },
      B: { verdict: "incorrect", reason: "正常情況下葡萄糖會在腎小管被幾乎完全再吸收，不會隨尿液排出。" },
      C: { verdict: "correct", reason: "水、鹽類離子與胺基酸等小分子可經腎小球濾過進入腎小管；游離的小分子脂肪酸也可隨濾液進入。" },
      D: { verdict: "incorrect", reason: "移動方向說反了：是腎小管把物質再吸收到旁邊微血管，而且胺基酸通常幾乎全被回收。" }
    },
    takeaway: "先濾小分子，再把水和有用物質從腎小管收回血液。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-70": {
    encouragement: "卵有沒有殼，可從胚胎在哪裡發育判斷：陸地產卵的爬蟲、鳥與單孔類需要卵殼保護。",
    keyIdea: "烏龜、蜥蜴與鴨嘴獸的卵有卵殼；人、青蛙與金魚沒有這種卵殼。",
    steps: [
      "爬蟲類與鳥類的羊膜卵有卵殼，可減少水分散失並保護胚胎。",
      "鴨嘴獸雖是哺乳類，卻屬會產卵的單孔類，卵也有殼。",
      "兩生類與多數魚類的卵外為膠質包覆，人類胚胎則在子宮內發育。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "人類胚胎在子宮內發育，不會產下有卵殼的卵。" },
      B: { verdict: "correct", reason: "烏龜是爬蟲類，產有卵殼的羊膜卵。" },
      C: { verdict: "incorrect", reason: "青蛙卵外主要是膠質層，沒有硬質或革質卵殼。" },
      D: { verdict: "incorrect", reason: "金魚卵沒有爬蟲、鳥類那樣的卵殼。" },
      E: { verdict: "correct", reason: "蜥蜴是爬蟲類，卵具有保護胚胎的卵殼。" },
      F: { verdict: "correct", reason: "鴨嘴獸是單孔類哺乳動物，會產具有殼的卵。" }
    },
    takeaway: "爬蟲類、鳥類與單孔類的胚胎都可在有殼的羊膜卵中發育。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-1": {
    encouragement: "生產者會製造葡萄糖，但也要把葡萄糖分解取能；生產和呼吸是兩件不同的事。",
    keyIdea: "生產者與消費者都會進行細胞呼吸，分解葡萄糖並取得可用能量。",
    steps: [
      "植物等生產者藉光合作用製造有機物。",
      "生產者與消費者都需要細胞呼吸，把有機物能量轉成 ATP。",
      "能量沿食物鏈傳遞時逐層散失為熱，最後仍會離開生態系。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "能量到高級消費者後仍會因呼吸散失為熱，也可進入分解者，不是到此停止。" },
      B: { verdict: "correct", reason: "生產者與消費者都可進行細胞呼吸，分解葡萄糖釋放能量。" },
      C: { verdict: "incorrect", reason: "消費者多半間接由食物取得太陽能，不是直接吸收陽光獲能。" },
      D: { verdict: "incorrect", reason: "營養階層間通常只有約一成能量傳到下一層，不是約九成。" }
    },
    takeaway: "植物會光合作用，也會呼吸；能量傳遞會逐層大量散失。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-2": {
    encouragement: "能不能自己製造養分，是判斷生產者的關鍵；菟絲子沒有葉綠素，只能向宿主取食。",
    keyIdea: "菟絲子寄生其他植物取得有機養分，因此在生態系中屬消費者。",
    steps: [
      "生產者能以光能或化學能製造有機物。",
      "菟絲子缺乏葉綠素，不能正常行光合作用製造足夠養分。",
      "它從宿主植物吸取水分與有機養分，屬寄生性的消費者。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "菟絲子缺乏葉綠素，不能靠光合作用成為自營生產者。" },
      B: { verdict: "incorrect", reason: "分解者分解遺體與排遺；菟絲子是吸取活宿主養分。" },
      C: { verdict: "correct", reason: "菟絲子從其他生物取得有機養分，因此屬消費者。" },
      D: { verdict: "incorrect", reason: "清除者取食生物遺體，菟絲子則寄生在活植物上。" }
    },
    takeaway: "寄生植物雖然是植物，也可能因向宿主取食而屬消費者。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-4": {
    encouragement: "空氣中氮氣很多，但多數生物沒有直接拆開氮氣分子的工具，必須靠微生物先轉換。",
    keyIdea: "一般動植物不能直接利用大氣氮，需利用已固定成含氮化合物的氮。",
    steps: [
      "氮氣 N2 的化學鍵穩定，多數生物不能直接利用。",
      "固氮菌可把氮氣轉成其他含氮化合物。",
      "植物可吸收銨鹽或硝酸鹽，動物再由食物取得含氮物質。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "一般動物與植物都不能直接利用空氣中的氮氣。" },
      B: { verdict: "incorrect", reason: "根瘤菌屬於細菌，不是真菌；它會與豆科植物根部形成互利共生。" },
      C: { verdict: "incorrect", reason: "植物除了硝酸鹽，也可吸收銨鹽等含氮離子。" },
      D: { verdict: "incorrect", reason: "直接固定氮氣的是固氮菌；硝化細菌主要把銨鹽轉成亞硝酸鹽或硝酸鹽。" }
    },
    takeaway: "固氮把空氣氮變成可用形式；植物吸收後，氮才進入食物網。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-6": {
    encouragement: "台灣山很高，海拔改變會帶來氣溫與森林組成的變化；中低海拔常見樟科與殼斗科闊葉樹。",
    keyIdea: "台灣約 1000～2000 公尺的中低海拔森林，多為樟科、殼斗科等闊葉林。",
    steps: [
      "低海拔較溫暖，但台灣森林不能全部概括成熱帶雨林。",
      "約 1000～2000 公尺常見常綠闊葉林，樟科與殼斗科很有代表性。",
      "更高海拔氣溫低，逐漸轉成針葉林、高山灌叢與草原。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "台灣低海拔森林類型受季風、乾濕季與地形影響，不全是熱帶雨林。" },
      B: { verdict: "incorrect", reason: "動植物種類繁多就表示物種歧異度較高，不是很小。" },
      C: { verdict: "incorrect", reason: "三千公尺以上接近森林線，常見針葉林或更高處的灌叢、草原，不是典型針闊葉混合林。" },
      D: { verdict: "correct", reason: "台灣約 1000～2000 公尺的森林常以樟科與殼斗科闊葉樹為主。" }
    },
    takeaway: "海拔上升、氣溫下降，台灣植被會由闊葉林逐漸轉向針葉林與高山植群。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-10": {
    encouragement: "族群不是固定不動的數字；食物、天氣、疾病、競爭等因素都會讓密度上下變化。",
    keyIdea: "自然族群密度同時受生物因素與非生物因素影響，通常會隨時間波動。",
    steps: [
      "出生、死亡、移入與移出會直接改變族群大小。",
      "食物、掠食與疾病屬生物因素；溫度、雨量與災害屬非生物因素。",
      "這些條件不斷改變，所以自然族群密度通常不是永久固定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不同物種的壽命、生殖與死亡情形不同，年齡結構不會大致相同。" },
      B: { verdict: "incorrect", reason: "還要考慮移入、移出與棲地面積，只有出生率和死亡率不足以決定密度。" },
      C: { verdict: "incorrect", reason: "閉鎖環境仍可能因資源耗盡、疾病或族群過小而波動甚至滅絕，不保證穩定。" },
      D: { verdict: "correct", reason: "自然環境中的食物、競爭、氣候與災害等因素會使族群密度波動。" }
    },
    takeaway: "族群四個直接變動來源：出生、死亡、移入、移出。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-11": {
    encouragement: "判斷族群要同時通過三關：同種、同地區、同時間；名稱太籠統、可能混有多種生物就不算。",
    keyIdea: "蟻窩的同種螞蟻、珊瑚礁上的石蓴與庭院的黃花酢醬草都可各自構成族群。",
    steps: [
      "甲是一個蟻窩內同種螞蟻，可視為同地區的同種生物。",
      "乙石蓴、丁黃花酢醬草都指出特定種類與地點。",
      "丙的浮游藻類、戊的細菌都可能包含許多物種，不能直接視為單一族群。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丙「浮游藻類」可能包含多種藻類，不符合單一物種的族群定義。" },
      B: { verdict: "correct", reason: "甲、乙、丁都指出特定地點內的同種生物，可各自構成一個族群。" },
      C: { verdict: "incorrect", reason: "此組包含可能有多種生物的丙，因此不全是族群。" },
      D: { verdict: "incorrect", reason: "戊「手上的細菌」可能包含多種細菌，屬群集概念而非單一族群。" }
    },
    takeaway: "族群不是「一群生物」，而是同時同地的同種生物。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-13": {
    encouragement: "不是所有微生物都有害，也不是所有細菌都怕短時間煮沸；內孢子就是耐受力很強的休眠構造。",
    keyIdea: "部分細菌可形成耐熱內孢子，普通煮沸未必能完全去除。",
    steps: [
      "抗生素只對某些細菌有效，感染不一定都由細菌造成。",
      "環境微生物有許多無害種類，不能全部叫致病菌。",
      "某些細菌形成內孢子後耐熱、耐乾燥，需更嚴格滅菌。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "感染可能由病毒、真菌或細菌造成，不能未經診斷就把抗生素當成最佳方法。" },
      B: { verdict: "incorrect", reason: "污水含有多種微生物，其中許多不是致病菌。" },
      C: { verdict: "incorrect", reason: "腸胃道感染可能由細菌分裂增殖，但登革熱病毒須在宿主細胞內複製，不行分裂生殖。" },
      D: { verdict: "correct", reason: "某些細菌的內孢子耐熱，普通煮沸不一定能將其完全殺死。" }
    },
    takeaway: "抗生素不能亂用；要消滅內孢子，需比一般煮沸更嚴格的滅菌條件。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-1": {
    encouragement: "先把每句成語變成「誰吃誰」，再從植物或植食動物往上數營養階層。",
    keyIdea: "依本題的簡化分類，取食其他動物的消費者包括螳螂、黃雀、鷸、漁翁與走狗，共五種。",
    steps: [
      "蟬、蚌與兔在題述食物關係中是被捕食的一方，可視為較低營養階層。",
      "螳螂捕蟬、黃雀捕螳螂、鷸取食蚌、漁翁取得鷸蚌、走狗捕兔。",
      "依題目採用的消費者分類，這五種取食其他動物的角色列入二級消費者。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "依題述食性逐一判斷，螳螂、黃雀、鷸、漁翁與走狗共五種列為二級消費者。" },
      B: { verdict: "incorrect", reason: "把所有掠食動物都算成二級消費者會多算；營養階層要看牠實際吃的對象。" },
      C: { verdict: "incorrect", reason: "成語中並非七種動物都直接取食初級消費者。" },
      D: { verdict: "incorrect", reason: "不是所有出現的動物都屬二級消費者，初級與更高級消費者不能混算。" }
    },
    takeaway: "營養階層不是看動物兇不兇，而是看牠在這條食物鏈中吃誰。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-3": {
    encouragement: "題目問「錯誤的理由」：外來種造成危害，通常是牠吃本地種、搶資源或帶病，不是牠被本地種吃。",
    keyIdea: "外來種成為本地生物的新食物，本身不必然構成外來種危害。",
    steps: [
      "外來種可能帶入新病原，讓本地物種缺乏抵抗力。",
      "也可能大量繁殖、競爭資源，或與近緣本地種雜交。",
      "若外來種只是成為本地生物的獵物，描述的是牠被取食，不是它危害本地生態的原因。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "帶入當地原本沒有的病原，確實可能傷害缺乏抵抗力的本地物種。" },
      B: { verdict: "correct", reason: "外來種成為本地生物的新獵物，表示外來種被取食，不能作為其造成危害的一般理由。" },
      C: { verdict: "incorrect", reason: "與本地近緣種雜交可能改變原族群基因組成，確實可能造成危害。" },
      D: { verdict: "incorrect", reason: "外來種若缺少天敵而大量繁殖，會競爭資源並排擠原生種。" }
    },
    takeaway: "外來種危害常來自帶病、捕食、競爭、雜交與快速繁殖。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-5": {
    encouragement: "野生稻還有四成存活，表示族群內不是每株都一樣；人工品種全滅，提示遺傳組成太一致。",
    keyIdea: "人工育種若使遺傳變異降低，面對同一病原時可能缺乏任何抗病個體。",
    steps: [
      "野生品種有 40% 存活，表示族群內可能存在抗病相關遺傳差異。",
      "人工育種常選擇特定性狀，使栽培族群遺傳組成較一致。",
      "若大家都缺少抗病等位基因，同一病原可能使整片作物死亡。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題目沒有證據顯示人工品種剛好產生使其全滅的新突變。" },
      B: { verdict: "incorrect", reason: "「適應能力較好」只是現象描述，沒有指出造成差異的遺傳原因。" },
      C: { verdict: "incorrect", reason: "同樣都是水稻品種，差異是族群內的遺傳多樣性，不是物種多樣性。" },
      D: { verdict: "correct", reason: "人工品種遺傳變異較少時，可能沒有任何抗病個體，因此遭感染後全數枯死。" }
    },
    takeaway: "遺傳多樣性像備用方案，環境改變時可能保住族群的一部分。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-6": {
    encouragement: "水壩會改變水流、泥沙與魚類通道，但水庫本身常被用來調節與供應灌溉用水。",
    keyIdea: "「嚴重影響灌溉用水」不是水壩完工必然造成的生態浩劫，水庫反而常具供水功能。",
    steps: [
      "攔截泥沙會使下游獲得的無機鹽與有機物減少。",
      "水流變慢會使泥沙與污染物較容易沉積，也會阻礙魚類移動。",
      "水庫通常可儲水供灌溉，因此不能把下游灌溉嚴重缺水當成必然結果。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水壩攔住泥沙與有機碎屑，確實可能使下游土壤獲得的養分減少。" },
      B: { verdict: "incorrect", reason: "壩前流速降低，容易造成泥沙淤積與污染物聚積。" },
      C: { verdict: "correct", reason: "水庫常有蓄水與調節灌溉用水功能，下游灌溉嚴重受損不是完工啟用必然造成的生態浩劫。" },
      D: { verdict: "incorrect", reason: "水壩可能阻斷洄游路徑並改變棲地，使魚種與漁產減少。" }
    },
    takeaway: "評估水壩要同時看泥沙、流量、魚道與供水功能。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-8": {
    encouragement: "看到水變綠、藻類暴增、魚蝦減少，就要想到營養鹽過多造成的優養化。",
    keyIdea: "含氮、磷廢水使藻類大量生長，分解作用耗氧後會讓魚蝦缺氧。",
    steps: [
      "生活污水帶入氮、磷等營養鹽，刺激藻類大量繁殖。",
      "藻類死亡後，細菌分解遺體會消耗水中氧氣。",
      "水體缺氧、透光降低且環境惡化，魚蝦便會減少。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "營養鹽廢水會造成優養化，藻類暴增與後續缺氧都不利魚蝦。" },
      B: { verdict: "incorrect", reason: "上游溶氧高不等於優養化；優養化是營養鹽過多造成的。" },
      C: { verdict: "incorrect", reason: "因果倒置：藻類先因營養鹽增加而暴增，魚蝦才因環境惡化而減少。" },
      D: { verdict: "incorrect", reason: "污染下游仍有許多細菌，尤其分解有機物的細菌可能大量繁殖。" }
    },
    takeaway: "優養化的常見連鎖：營養鹽增加→藻類暴增→分解耗氧→魚蝦減少。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-9": {
    encouragement: "殺蟲劑不是訓練斑蚊變強，而是留下原本就帶有抗藥差異的少數個體。",
    keyIdea: "族群原有遺傳變異，殺蟲劑篩選出抗藥個體，使抗藥基因比例上升。",
    steps: [
      "第一次噴藥殺死多數敏感斑蚊，但少數帶抗藥基因者存活。",
      "存活者繁殖，把抗藥基因傳給後代。",
      "一年後族群中抗藥個體比例提高，同劑量殺蟲效果便下降。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "殺蟲劑主要扮演選擇壓力，不是依需要定向製造抗藥突變。" },
      B: { verdict: "incorrect", reason: "抗藥性主要來自可遺傳差異，不是體內累積殺蟲劑而獲得。" },
      C: { verdict: "correct", reason: "原族群中已有少數帶抗藥基因者，噴藥後存活並繁殖，使抗藥性增加。" },
      D: { verdict: "incorrect", reason: "第一次仍有 1% 存活正提示族群內可能原本就有遺傳變異。" }
    },
    takeaway: "抗藥性演化是「先有差異，再被篩選」，不是用藥後才按需要變出來。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-10": {
    encouragement: "能量每往上一層都會大量損失；人若直接吃生產者，就少經過好幾次轉手。",
    keyIdea: "縮短食物鏈、直接取食生產者，可把最多能量供應給人類。",
    steps: [
      "藻類與浮游植物等生產者固定太陽能。",
      "能量傳到蝦、小魚、大魚時，每一層都因呼吸與活動散失許多。",
      "人直接食用生產者，能避開多層傳遞損失。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "均衡食用仍包含多個高營養階層，總能量轉換損失較多。" },
      B: { verdict: "correct", reason: "直接食用藻類與浮游生物使食物鏈最短，可利用的能量最多。" },
      C: { verdict: "incorrect", reason: "小魚已經歷至少一層能量損失，不如直接吃生產者有效率。" },
      D: { verdict: "incorrect", reason: "大魚位於較高營養階層，可供人利用的能量最少，無法養活最多人口。" }
    },
    takeaway: "食物鏈越短，人能取得的總能量通常越多。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-19": {
    encouragement: "海洋面積很大，不代表每處都適合許多物種；陽光與營養鹽集中的淺海才是生物熱區。",
    keyIdea: "淺海光線與養分較充足，物種通常比廣大但較缺光、缺養分的大洋區豐富。",
    steps: [
      "約 200 公尺內的淺海多位於大陸棚，陽光可到達。",
      "大陸棚常有陸地輸入的營養鹽，生產力與物種數較高。",
      "大洋區雖遼闊，但許多區域缺乏光線或營養鹽，不能由面積直接推論物種更多。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "以約 200 公尺為界區分淺海與較深、較遠水域，是課程中的常見劃分。" },
      B: { verdict: "incorrect", reason: "淺海大陸棚光線與營養鹽較充足，生物種類繁多，敘述正確。" },
      C: { verdict: "correct", reason: "大洋區雖空間大，但許多區域缺光或缺乏營養鹽，物種不會因此遠多於淺海區。" },
      D: { verdict: "incorrect", reason: "潮間帶位於高潮線與低潮線間，生物確需適應海浪、乾濕與鹽度變化。" }
    },
    takeaway: "生物多樣性要看光、養分與棲地，不是只看空間有多大。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-34": {
    encouragement: "保育不是只保護看起來可愛或有用的物種；掠食者也是維持食物網平衡的重要一環。",
    keyIdea: "消滅原生掠食者會破壞食物網與族群調節，違反維持物種多樣性的原則。",
    steps: [
      "野狼控制草食動物數量，也會間接影響植物與其他物種。",
      "自然火災有時是草原生態系正常干擾，部分物種已適應它。",
      "任意引進或放生外來種可能形成新競爭、捕食或疾病風險。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "把原野上的野狼全部消滅會移除重要掠食者，破壞食物網與物種多樣性。" },
      B: { verdict: "incorrect", reason: "自然發生的週期性火災可參與草原更新，不一定應全面排除。" },
      C: { verdict: "incorrect", reason: "避免放生外來寵物可降低牠們與原生種競爭，符合保育原則。" },
      D: { verdict: "incorrect", reason: "不任意引進外地天敵可避免天敵轉而傷害非目標原生種，符合保育原則。" }
    },
    takeaway: "保育要維持整張食物網，不能為保護一種生物就消滅另一個原生物種。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-48": {
    encouragement: "演化不是一條「低等變高等」的梯子，而是族群從共同祖先分支，適應不同環境。",
    keyIdea: "現代人共享祖先，不同族群外形屬種內變異；工業革命後人口快速增加並加重環境壓力。",
    steps: [
      "人類與現生猴類有共同祖先，不是由今天的猴子直接變來。",
      "現代人各族群仍屬同一物種，外形差異是種內變異。",
      "工業革命改善生產與醫療後，人口快速增長，資源消耗與污染也增加。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "人類使用火遠早於新石器時代，並非到新石器時代才完成。" },
      B: { verdict: "incorrect", reason: "人類與現生猴類是共享祖先的不同演化支系，不是人類由現生猴子演化而來。" },
      C: { verdict: "correct", reason: "工業革命後人口大幅增長，資源使用、棲地改變與污染對環境形成重大壓力。" },
      D: { verdict: "correct", reason: "現代人源自共同祖先，各族群形態差異仍屬同一物種內的變異。" },
      E: { verdict: "incorrect", reason: "人類先經歷採集與漁獵生活，農業社會在更晚才出現。" }
    },
    takeaway: "人類與其他靈長類共享祖先；全世界現代人都屬同一物種。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-50": {
    encouragement: "病毒很小、沒有完整細胞構造，也沒有自己的複製工廠，所以必須借用宿主細胞。",
    keyIdea: "SARS 病原是冠狀病毒；病毒比細菌小，只能在活細胞內複製。",
    steps: [
      "SARS 是由新型冠狀病毒引起。",
      "病毒尺度通常小於大腸桿菌等細菌，也沒有細胞核等完整細胞構造。",
      "病毒需進入宿主細胞，利用宿主的系統複製遺傳物質與製造蛋白質。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "SARS 的病原體是 SARS 冠狀病毒，屬冠狀病毒。" },
      B: { verdict: "correct", reason: "冠狀病毒顆粒通常遠小於大腸桿菌細胞。" },
      C: { verdict: "correct", reason: "病毒缺乏獨立複製所需的完整系統，只能在宿主細胞內增殖。" },
      D: { verdict: "incorrect", reason: "使細胞死亡不等於分解者；病毒不是以分解遺體取得能量的生物。" },
      E: { verdict: "incorrect", reason: "病毒不是細胞，沒有細胞核與核膜；遺傳物質由蛋白質外殼等構造包覆。" }
    },
    takeaway: "病毒不是完整細胞：體積小、無細胞核、必須寄生在活細胞內複製。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-53": {
    encouragement: "目標是增加氧氣，就要找能在艱困環境中行光合作用、釋放氧氣的先驅生物。",
    keyIdea: "藍綠菌能行產氧光合作用，並曾對地球早期大氣氧氣增加有重要貢獻。",
    steps: [
      "火星大氣富含二氧化碳，但題目希望逐步增加氧氣。",
      "藍綠菌構造簡單、可行光合作用並釋放氧氣。",
      "參照地球早期歷史，藍綠菌是改變大氣成分的重要生物。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地衣雖耐受逆境，但是真菌與光合夥伴的共生體，不如藍綠菌直接對應地球早期增氧歷程。" },
      B: { verdict: "incorrect", reason: "眼蟲是真核生物，對環境與液態水條件的需求較複雜，不是最適合的第一批先驅。" },
      C: { verdict: "incorrect", reason: "真菌不能行光合作用，不會直接利用二氧化碳釋放氧氣。" },
      D: { verdict: "incorrect", reason: "變形蟲是消費者，需要攝食有機物，不能自行產氧。" },
      E: { verdict: "correct", reason: "藍綠菌可行產氧光合作用，能利用光能固定二氧化碳並釋放氧氣。" }
    },
    takeaway: "想增加氧氣，要找能產氧光合作用的生物；藍綠菌是早期地球的重要增氧者。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-57": {
    encouragement: "四個空格分別問疾病、器官、要轉殖的資訊與運送資訊的工具；逐格判斷就不會被長句嚇到。",
    keyIdea: "糖尿病可用胰島素治療；胰島素來自胰臟，製造它需轉殖胰島素基因並使用載體。",
    steps: [
      "胰島素不足或作用異常與糖尿病有關，早期藥用胰島素由豬、牛胰臟取得。",
      "要讓微生物製造人體胰島素，需提供編碼胰島素的基因，而不是把蛋白質本身當遺傳指令。",
      "基因先接入質體等載體，再送入微生物表現。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "胰島素治療的是糖尿病，來源是胰臟，基因也需放入載體，不是此組合。" },
      B: { verdict: "incorrect", reason: "前兩格與載體正確，但轉殖的是胰島素生成基因，不是胰島素蛋白質。" },
      C: { verdict: "incorrect", reason: "疾病應為糖尿病，而且必須轉殖生成基因，不是蛋白質。" },
      D: { verdict: "incorrect", reason: "胰島素不是由腦下垂體製造，基因也不組裝在粒線體中。" },
      E: { verdict: "incorrect", reason: "疾病、器官、轉殖材料與載體四格皆未正確配對。" },
      F: { verdict: "correct", reason: "糖尿病、胰臟、胰島素生成基因、載體依序符合疾病治療與基因工程流程。" }
    },
    takeaway: "基因工程是把「基因指令」裝進「載體」，再交給細胞製造蛋白質。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-63": {
    encouragement: "器官常有多種功能，但先看它被歸在哪個系統，以及題目是否把其他器官的工作塞給它。",
    keyIdea: "肺泡負責氣體交換；肝臟製造膽汁、血漿蛋白並進行解毒與物質轉化。",
    steps: [
      "肺泡壁薄且周圍微血管密布，適合氧氣與二氧化碳交換。",
      "肝臟屬消化系統重要附屬器官，具有製造膽汁、合成蛋白質與解毒功能。",
      "卵巢分泌動情素與黃體素；腎臟則屬泌尿系統。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "肺泡周圍有豐富微血管，薄壁構造可進行氧氣與二氧化碳交換。" },
      B: { verdict: "correct", reason: "肝臟能製造膽汁、合成多種血漿蛋白，也能代謝酒精與轉化有毒物質。" },
      C: { verdict: "incorrect", reason: "子宮提供胚胎發育場所，但動情素與黃體素主要由卵巢及懷孕時的胎盤等分泌。" },
      D: { verdict: "incorrect", reason: "列出的腎臟功能多數正確，但腎臟屬泌尿系統，不是循環系統器官。" }
    },
    takeaway: "肺泡換氣、肝臟代謝與解毒、卵巢分泌性激素、腎臟形成尿液。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-11": {
    encouragement: "看到根瘤菌就找豆科植物；落花生雖然名字有「生」，分類上仍是豆科。",
    keyIdea: "豆科植物可與根瘤菌共生，讓根瘤菌固定空氣中的氮氣。",
    steps: [
      "根瘤菌住在豆科植物根部形成的根瘤中。",
      "根瘤菌把氮氣轉為可進入生物體利用的含氮化合物。",
      "四個選項中只有落花生屬豆科。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "玉米是禾本科，通常不形成豆科植物那樣的根瘤菌根瘤。" },
      B: { verdict: "incorrect", reason: "水稻是禾本科，不靠根瘤菌根瘤固定空氣氮。" },
      C: { verdict: "incorrect", reason: "甘蔗也是禾本科，不是典型與根瘤菌形成根瘤的植物。" },
      D: { verdict: "correct", reason: "落花生是豆科植物，可與根瘤菌共生並利用其固定的氮。" }
    },
    takeaway: "根瘤菌的經典搭檔是豆科植物，例如落花生、大豆與豌豆。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-12": {
    encouragement: "多樣性像生態系的替補陣容：某一物種受影響時，其他物種可能補上相近功能。",
    keyIdea: "物種多樣性高通常使食物網較複雜，生態系面對干擾時較有維持功能的能力。",
    steps: [
      "群集由同一地區的多個不同物種族群共同構成。",
      "面積、地形與氣候會提供不同棲地，影響物種數與分布。",
      "物種多樣性增加通常讓能量路徑與生態功能較有替代性。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同一種生物構成的是族群；群集包含多個不同物種的族群。" },
      B: { verdict: "incorrect", reason: "區域面積、地形與氣候都會影響棲地種類及物種多樣性。" },
      C: { verdict: "correct", reason: "物種多樣性較高時，食物網與功能替代通常較完整，生態系較能抵抗干擾。" },
      D: { verdict: "incorrect", reason: "單一物種密度增加不等於物種種類增加，甚至可能排擠其他物種。" }
    },
    takeaway: "物種多樣性看的是種類與分布，不是某一物種有多少隻。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-14": {
    encouragement: "群集消長像一場接力：先驅生物改變環境，接著讓其他物種逐步進入，不是瞬間換班。",
    keyIdea: "群集會隨時間逐步改變；依題目採用的傳統模式，最後可形成相對穩定的巔峰群集。",
    steps: [
      "初級消長從幾乎沒有土壤的環境開始，通常比仍保有土壤的次級消長慢。",
      "先驅草本植物先進入，之後才逐步出現灌木與喬木。",
      "長時間後，群集可進入物種組成相對穩定的階段。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "初級消長需先形成土壤，通常比保有土壤與種子庫的次級消長慢。" },
      B: { verdict: "incorrect", reason: "群集消長通常是長期、連續而逐步的物種替換，不是斷續且快速。" },
      C: { verdict: "incorrect", reason: "受土石流干擾後若仍有土壤，通常先出現生長快速的草本，而非先出現小灌木。" },
      D: { verdict: "correct", reason: "依傳統消長概念，經長時間演替後可形成相對穩定的巔峰群集。" }
    },
    takeaway: "初級消長慢、次級消長快；常由草本到灌木，再到較穩定群集。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-16": {
    encouragement: "演化需要差異；沒有遺傳變異，天擇就沒有材料可以篩選。",
    keyIdea: "遺傳物質變異是演化的重要原料，地理隔離、生殖隔離與天擇則能推動族群分化。",
    steps: [
      "突變與基因重組可產生可遺傳差異。",
      "地理隔離減少族群間基因交流，兩群可能各自演化。",
      "若進一步形成生殖隔離，就可能產生新物種；天擇會改變各特徵比例。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "地理隔離可減少基因交流，使族群在不同環境中分化，敘述正確。" },
      B: { verdict: "incorrect", reason: "生殖隔離阻止族群交配產生可育後代，是物種形成的重要條件，敘述正確。" },
      C: { verdict: "incorrect", reason: "天擇使有利遺傳特徵較容易留下，能推動族群演化，敘述正確。" },
      D: { verdict: "correct", reason: "遺傳物質變異並非不利於演化；它提供天擇與族群分化所需的變異材料。" }
    },
    takeaway: "變異提供材料、隔離減少交流、天擇改變比例，三者共同推動演化。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
