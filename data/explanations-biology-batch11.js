window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-83-45": {
    encouragement: "把手肘想成門軸：手肘是支點，二頭肌拉橈骨的位置在支點和手中物體之間。",
    keyIdea: "二頭肌作用於前臂屬第三類槓桿，施力點位於支點與抗力點之間。",
    steps: [
      "手肘關節是轉動中心，也就是支點。",
      "二頭肌附著橈骨處是施力點。",
      "手或手中物體是抗力點，因此施力點在中間。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "抗力點在中間是第二類槓桿，例如踮腳；手肘屈曲不是這種排列。" },
      B: { verdict: "correct", reason: "二頭肌在橈骨的附著點位於手肘支點與手部抗力點之間。" },
      C: { verdict: "incorrect", reason: "支點在中間是第一類槓桿，例如蹺蹺板，不符合二頭肌屈肘。" }
    },
    takeaway: "二頭肌屈肘：手肘是支點、肌肉附著處是施力點、手部是抗力點。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-23": {
    encouragement: "先判斷兩句真偽，再看第二句是否說明第一句的原因；腎小球濾過正是由壓力差推動。",
    keyIdea: "腎小球微血管壓力較高，可把水與小分子壓入鮑氏囊形成濾液。",
    steps: [
      "水、離子、葡萄糖等小分子可由腎小球濾入鮑氏囊。",
      "血球與大分子蛋白質通常被濾過屏障留下。",
      "腎小球內壓力高於囊腔，正是小分子被推入濾液的原因。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩句皆正確，而且腎小球內較高的液體壓力能解釋水與小分子被濾出的現象。" },
      B: { verdict: "incorrect", reason: "第二句不只正確，也直接說明第一句腎小球濾過的推動力量。" },
      C: { verdict: "incorrect", reason: "第二句的壓力差是腎小球濾過的重要條件，不能判為錯誤。" },
      D: { verdict: "incorrect", reason: "第一句描述的是題目採用的腎小球小分子濾過現象，並非錯誤。" },
      E: { verdict: "incorrect", reason: "水與多種小分子可被濾出，且濾過由壓力差推動，兩句都不是錯誤。" }
    },
    takeaway: "腎小球像高壓濾網：小分子通過，大分子與血球留下。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-22": {
    encouragement: "先看個體丁外表正常，再看他的父母生出患病丙，表示父母都帶有隱性基因。",
    keyIdea: "鐮刀型嚴重患者為 ISsISs；正常表型可為 IAIA 或 IAIS。",
    steps: [
      "丙患病，基因型必為 ISIS，父母各提供一個 IS。",
      "父母表型正常，因此兩人都是 IAIS。",
      "正常的丁可能是 IAIA 或 IAIS，但絕不可能是 ISIS。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "IAIA 會呈正常表型，符合丁在族譜中的空白符號，因此仍有可能。" },
      B: { verdict: "incorrect", reason: "題幹明定 IAIS 功能正常，也符合丁的正常表型，因此可能存在。" },
      C: { verdict: "correct", reason: "ISIS 會表現嚴重鐮刀型貧血，但丁在族譜中是正常男性，所以絕不可能。" },
      D: { verdict: "incorrect", reason: "雖無法在 IAIA 與 IAIS 間確定，但能明確排除會患病的 ISIS。" }
    },
    takeaway: "隱性患者必為兩個隱性基因；正常者可能是純合，也可能是帶因者。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-23": {
    encouragement: "甲、乙都正常卻生出患病的戊，這是判斷隱性遺傳帶因者最有力的線索。",
    keyIdea: "正常雙親若生出隱性患者，雙親必須各帶一個隱性等位基因。",
    steps: [
      "戊為患者，基因型是 ISIS。",
      "戊的兩個 IS 必須各由甲、乙提供。",
      "甲、乙本人正常，因此只能都是 IAIS。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若乙為 IAIA，無法提供 IS，甲乙便不可能生出 ISIS 的戊。" },
      B: { verdict: "correct", reason: "甲、乙皆為 IAIS 時，每人都可提供 IS，能生出 ISIS 患者。" },
      C: { verdict: "incorrect", reason: "乙若為 ISIS 應表現嚴重貧血，但族譜顯示乙正常。" },
      D: { verdict: "incorrect", reason: "甲為 IAIA 時不能提供 IS；乙為 ISIS 又會患病，兩處都與族譜不符。" }
    },
    takeaway: "正常父母生出隱性患者，通常表示父母都是異型合子帶因者。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-86-59": {
    encouragement: "動、植物細胞有很多共同胞器；典型植物細胞特有的線索是細胞壁與大型中央液泡。",
    keyIdea: "題表中植物細胞特有的兩種構造是細胞壁與大液泡，即 A、D。",
    steps: [
      "粒線體與高基氏體存在於動、植物真核細胞。",
      "中心體是典型動物細胞常見構造。",
      "細胞壁與大型中央液泡是典型植物細胞的重要特徵。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 代表細胞壁；植物細胞外有細胞壁，動物細胞沒有。" },
      B: { verdict: "incorrect", reason: "B 代表粒線體，動物與植物細胞都可用它進行有氧呼吸。" },
      C: { verdict: "incorrect", reason: "C 代表高基氏體，動、植物真核細胞都具有此胞器。" },
      D: { verdict: "correct", reason: "D 代表大液泡；成熟植物細胞常有大型中央液泡，典型動物細胞沒有。" },
      E: { verdict: "incorrect", reason: "E 代表中心體，反而是典型動物細胞常見的構造。" }
    },
    takeaway: "植物特徵：細胞壁、大液泡；動植物共有：粒線體、高基氏體。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-6": {
    encouragement: "棋盤格每一格就是「列配子＋欄配子」；先補 1～4，再計算同基因型出現次數。",
    keyIdea: "1～4 分別為 RRYY、RrYY、RRYy、RrYy；錯的是把單格標號當成出現機率排序。",
    steps: [
      "依配子組合補得 1=RRYY、2=RrYY、3=RRYy、4=RrYy。",
      "四者都至少有一個 R 與一個 Y，所以表型相同。",
      "整個 16 格中 RrYy 出現 4 次；各標號本身都是單一格，不能排成 4>3>2>1。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "逐格合併雌雄配子後，1、2、3、4 的基因型確為題列順序，敘述正確。" },
      B: { verdict: "incorrect", reason: "四種基因型都有顯性 R 與 Y，表現型相同，敘述正確。" },
      C: { verdict: "incorrect", reason: "RRYY 只能由 RY 與 RY 結合，在 16 格中確實只出現一次。" },
      D: { verdict: "incorrect", reason: "RrYy 可由四組配子組合形成，所以在棋盤格中出現四次。" },
      E: { verdict: "correct", reason: "標號 1～4 各代表一個格子的基因型，不能依標號大小推成機率 4>3>2>1。" }
    },
    takeaway: "棋盤格機率看同基因型占幾格，不看題目標上的數字大小。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-16": {
    encouragement: "顯性特徵只要有一個大寫基因就會出現；先把甲乙丙丁的基因型從格子讀出。",
    keyIdea: "丁位於 wr×wr，基因型為 wwrr，因此沒有美人尖也不會捲舌。",
    steps: [
      "甲=WWRR，兩個顯性性狀都有。",
      "乙=WwRr，也有美人尖且會捲舌；丙=wwRR，無美人尖但會捲舌。",
      "丁=wwrr，兩項皆為隱性表現。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲為 WWRR，不但有美人尖，也有 R 而會捲舌。" },
      B: { verdict: "incorrect", reason: "乙為 WwRr，有 W 所以有美人尖，也有 R 而會捲舌。" },
      C: { verdict: "incorrect", reason: "丙為 wwRR，會捲舌但沒有顯性 W，因此沒有美人尖。" },
      D: { verdict: "correct", reason: "丁為 wwrr，兩對基因都是隱性同型合子，所以兩項顯性性狀都不表現。" }
    },
    takeaway: "有大寫顯性基因就表現；只有 wwrr 才兩項顯性性狀都沒有。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-17": {
    encouragement: "半透膜兩側是純水與蔗糖溶液，水會由水較多的一側移向溶質較多的一側。",
    keyIdea: "漏斗內是水、外側是蔗糖溶液，水經滲透作用流出漏斗，使液面下降。",
    steps: [
      "半透膜可讓水通過，但蔗糖不易通過。",
      "漏斗內純水的水勢較高，燒杯蔗糖溶液水勢較低。",
      "水由漏斗流向燒杯，漏斗長頸液面下降。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "液面上升要有水由燒杯進入漏斗，但本題外側蔗糖溶液反而吸引水流出。" },
      B: { verdict: "incorrect", reason: "兩側濃度不同，會發生淨滲透，不會維持原液面不變。" },
      C: { verdict: "correct", reason: "水由漏斗內純水跨膜移向外側蔗糖溶液，因此漏斗液面下降。" }
    },
    takeaway: "滲透時，水由溶質少的一側流向溶質多的一側。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-62": {
    encouragement: "兩種鳥從蛋期就在相同環境長大，卻仍各唱各物種的歌，這正是控制環境後看遺傳的設計。",
    keyIdea: "相同後天環境下仍出現物種特有歌聲，支持唱歌行為主要受遺傳影響。",
    steps: [
      "研究者把兩種鳥從蛋孵化後放在相同環境飼養。",
      "長大後兩種雄鳥仍唱各自物種典型歌聲。",
      "環境相同但結果不同，差異最可能與遺傳有關。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩種幼鳥接受相同飼養環境仍唱不同物種的歌，顯示後天環境影響有限。" },
      B: { verdict: "incorrect", reason: "研究比較的是一起長大的兩種鳥，沒有證據顯示歌聲差異由年齡造成。" },
      C: { verdict: "correct", reason: "排除主要飼養環境差異後仍保留物種特有歌聲，支持遺傳決定。" },
      D: { verdict: "incorrect", reason: "實驗沒有測量或比較聲帶構造，不能由結果直接得到這個結論。" }
    },
    takeaway: "控制環境後差異仍存在，才有理由把原因指向遺傳。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-90-64": {
    encouragement: "每個選項要同時檢查三件事：激素名稱、分泌器官、生理作用；一處錯就不能選。",
    keyIdea: "副甲狀腺素調節血鈣；腦垂腺的促甲狀腺激素刺激甲狀腺。",
    steps: [
      "甲狀腺素提高基礎代謝率。",
      "胰島素由胰臟分泌；腎上腺素主要來自腎上腺髓質。",
      "副甲狀腺素與促甲狀腺激素的來源、功能皆配對正確。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲狀腺素來源正確，但它會提高而非降低基礎代謝率。" },
      B: { verdict: "correct", reason: "副甲狀腺分泌副甲狀腺素，主要調節血液鈣離子濃度。" },
      C: { verdict: "incorrect", reason: "胰島素確會促進細胞利用葡萄糖，但它由胰臟而非脾臟分泌。" },
      D: { verdict: "incorrect", reason: "腎上腺素主要由腎上腺髓質分泌，不是腎上腺皮質。" },
      E: { verdict: "correct", reason: "腦垂腺分泌促甲狀腺激素，會刺激甲狀腺分泌甲狀腺素。" }
    },
    takeaway: "內分泌題要把「來源→激素→目標作用」整條連起來。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-8": {
    encouragement: "只讀表中數字，不替表格補故事：每個時間點的鳥類物種數都高於哺乳類。",
    keyIdea: "砍伐前後所有調查時點，鳥類物種數都比哺乳類多。",
    steps: [
      "砍伐前：鳥 90 種，大於哺乳類 45 種。",
      "砍伐後各時點，鳥類 44～80 種，也都高於哺乳類 20～35 種。",
      "表格只給物種數，不能推斷優勢種或已恢復巔峰群落。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "砍伐後兩類動物物種數合計都低於砍伐前，不能說多樣性更高。" },
      B: { verdict: "incorrect", reason: "六年後物種數仍未恢復到砍伐前，沒有證據已成巔峰群落。" },
      C: { verdict: "correct", reason: "表中砍伐前與砍伐後每個時點，鳥類物種數均高於哺乳類。" },
      D: { verdict: "incorrect", reason: "優勢種要看個體數或生物量，只有物種數不能判斷誰是優勢種。" }
    },
    takeaway: "物種數、多樣性、個體數與優勢種是不同概念，不能混用。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-9": {
    encouragement: "森林砍伐後土壤仍在，種子、根與微生物也可能保留，所以是次級消長。",
    keyIdea: "原有森林受砍伐後重新發展，屬於保有土壤基礎的次級消長。",
    steps: [
      "初級消長從裸岩等幾乎沒有土壤的環境開始。",
      "森林砍伐通常不會把土壤完全移除。",
      "原地群集在既有土壤上恢復，因此屬次級消長。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "年消長指季節性週期變化；表格呈現的是砍伐後多年恢復，不是年消長。" },
      B: { verdict: "incorrect", reason: "砍伐後仍保有土壤與部分生物基礎，不是從無土環境開始的初級消長。" },
      C: { verdict: "incorrect", reason: "鳥類物種數逐年恢復是受干擾後演替，不是固定季節的年消長。" },
      D: { verdict: "correct", reason: "森林受砍伐後在原有土壤上重新建立群集，符合次級消長。" }
    },
    takeaway: "有土壤的災後恢復多是次級消長；從裸岩開始才是初級消長。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-58": {
    encouragement: "先找第八天受粉，再追蹤三條曲線；水分充足的甲在受粉後澱粉明顯上升。",
    keyIdea: "官方圖 19 顯示，水分充足組甲的子房澱粉在受粉後快速增加。",
    steps: [
      "甲每日澆水 200 mL，屬水分充足組。",
      "第八天受粉後，甲曲線先略降再快速升到最高。",
      "缺水乙、丙後期澱粉都偏低，注糖也沒有讓它持續上升。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "缺水組乙的澱粉在受粉後明顯下降，並非持續上升。" },
      B: { verdict: "correct", reason: "水分充足組甲在受粉後的後期曲線快速上升，符合圖中結果。" },
      C: { verdict: "incorrect", reason: "缺水加蔗糖的丙在受粉後先大幅下降，沒有持續上升。" },
      D: { verdict: "incorrect", reason: "受粉前乙、丙澱粉量相近，圖中看不出加蔗糖已補高子房澱粉。" }
    },
    takeaway: "讀曲線先標事件時間，再比較事件前後與處理組差異。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-59": {
    encouragement: "產量看子房乾重：缺水兩組都比水足組低，即使加糖也沒有完全救回。",
    keyIdea: "乾旱在受粉前已影響果實發育，外加蔗糖無法使產量恢復正常。",
    steps: [
      "甲水足，受粉後子房乾重升到最高。",
      "乙缺水、丙缺水加糖，後期乾重都低於甲。",
      "差異在受粉前已有跡象，因此產量不只由受粉決定。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丙雖加蔗糖，最終乾重仍低於水分充足的甲，未恢復正常產量。" },
      B: { verdict: "correct", reason: "缺水組產量較低，且受粉前差異已出現，顯示影響與是否受粉沒有太大關聯。" },
      C: { verdict: "incorrect", reason: "乾旱的不利影響在受粉前就已存在，不是受粉後才明顯降低。" },
      D: { verdict: "incorrect", reason: "水分與受粉前花序發育都會影響產量，受粉不是唯一因素。" }
    },
    takeaway: "受粉成功不保證高產量；受粉前的水分與養分狀態也很重要。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-41": {
    encouragement: "把文章畫成箭頭：菌絲給白蟻吃、植物給有蹄類吃、有蹄類給獅子吃，就能看出關係。",
    keyIdea: "文中同時出現掠食、食物鏈，以及白蟻培養菌類的互利共生。",
    steps: [
      "獅子吃有蹄類，屬掠食。",
      "植物→有蹄類→獅子形成食物鏈。",
      "白蟻提供植物碎屑培養菌，並取食菌絲，雙方互利。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "獅子捕食有蹄類動物，文章明確描述掠食關係。" },
      B: { verdict: "incorrect", reason: "文章沒有描述兩種生物爭奪同一有限資源，不能判為競爭。" },
      C: { verdict: "incorrect", reason: "文中沒有一方寄居並使宿主受害的描述，不屬寄生。" },
      D: { verdict: "correct", reason: "植物、有蹄類與獅子之間形成能量依序傳遞的食物鏈。" },
      E: { verdict: "correct", reason: "白蟻給菌類培養材料並取得菌絲食物，雙方都獲益，屬互利共生。" }
    },
    takeaway: "吃活獵物是掠食；依序誰吃誰是食物鏈；雙方獲利是互利共生。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-42": {
    encouragement: "白蟻雖小，卻連結分解、植物生長與上層消費者；移除它會產生連鎖效應。",
    keyIdea: "白蟻減少會使碎屑分解變慢，植物與有蹄類資源下降，最後獅子也減少。",
    steps: [
      "白蟻不再搬運、利用植物碎屑，碎屑分解速度下降。",
      "白蟻排泄物減少，周圍植物得到的養分也減少。",
      "植物與有蹄類減少後，獅子的食物來源下降。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "植物減少會使有蹄類減少，獅子可利用的獵物下降，因此數量可能減少。" },
      B: { verdict: "incorrect", reason: "白蟻減少後利用碎屑的速度下降，植物碎屑較可能累積而非減少。" },
      C: { verdict: "incorrect", reason: "少了白蟻排泄物補充養分，周圍植物生長不會因此加快。" },
      D: { verdict: "incorrect", reason: "植物資源下降時，有蹄類食物減少，數量不會因此增加。" },
      E: { verdict: "correct", reason: "白蟻搬運碎屑並培養菌類，白蟻被殺後這條分解途徑會變慢。" }
    },
    takeaway: "食物網中移除一種生物，影響常會沿養分循環與食物鏈向外擴散。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-49": {
    encouragement: "比較有隔絕 UV-B 的甲組，和沒有隔絕的乙、丙組；三種兩棲類死亡率都明顯升高。",
    keyIdea: "暴露 UV-B 的乙、丙組死亡率高於隔絕 UV-B 的甲組，顯示 UV-B 會影響胚胎發育。",
    steps: [
      "甲組隔絕 UV-B；乙、丙組都能接受 UV-B。",
      "蠑螈、蛙、蟾蜍在乙、丙組死亡率都高於甲組。",
      "三種生物呈一致方向，支持 UV-B 會造成不利影響。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗只測卵與胚胎死亡率，不能直接斷言整個蠑螈族群已瀕臨絕種。" },
      B: { verdict: "correct", reason: "三種兩棲類在接受 UV-B 時死亡率都明顯較高，顯示發育受到影響。" },
      C: { verdict: "incorrect", reason: "水黴菌是直接死因，但實驗顯示 UV-B 會提高受感染死亡的風險，不能只歸因水黴。" },
      D: { verdict: "incorrect", reason: "表格是死亡率而非族群數量，且蛙與蟾蜍的差異落在誤差範圍，不能精確排序。" }
    },
    takeaway: "判讀實驗先看控制變因：是否隔絕 UV-B 是三組間的關鍵差異。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-50": {
    encouragement: "所有死亡胚胎都感染水黴，但暴露 UV-B 的組別死得更多，最合理是 UV-B 讓胚胎更容易受感染。",
    keyIdea: "UV-B 可能先傷害胚胎防禦能力，再增加水黴菌感染死亡。",
    steps: [
      "甲組隔絕 UV-B，死亡率最低。",
      "乙、丙組接受 UV-B，死亡率都明顯較高。",
      "死因均為水黴感染，合理連結是 UV-B 提高感染易感性。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗沒有直接測量水黴菌生長量，不能說 UV-B 會增強水黴菌生長。" },
      B: { verdict: "incorrect", reason: "隔絕與未隔絕組死亡率有明顯差異，足以支持死亡和 UV-B 有關。" },
      C: { verdict: "incorrect", reason: "甲組仍有部分死亡是水黴感染造成，不是因為缺乏 UV-B。" },
      D: { verdict: "correct", reason: "接受 UV-B 的胚胎水黴感染死亡率較高，合理推論 UV-B 使其更容易被感染。" }
    },
    takeaway: "相關結果可支持合理機制，但不能聲稱實驗未直接測量的細節。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-51": {
    encouragement: "結論要比單次實驗保守：資料支持臭氧減少、UV-B 增加會影響兩棲類，不代表是唯一原因。",
    keyIdea: "較多 UV-B 會提高兩棲類胚胎死亡風險，因此臭氧層破壞可能影響族群數量。",
    steps: [
      "臭氧層可吸收 UV-B，破壞後到達地表的 UV-B 增加。",
      "實驗顯示 UV-B 暴露組的胚胎死亡率較高。",
      "胚胎存活下降長期可能使補充進族群的個體減少。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗沒有研究蛙、蟾蜍與蠑螈之間的競爭或取代關係。" },
      B: { verdict: "correct", reason: "臭氧層破壞使 UV-B 增加，而 UV-B 暴露提高胚胎死亡率，可能降低族群量。" },
      C: { verdict: "incorrect", reason: "蠑螈暴露組死亡率接近九成，不能說不足以影響族群量。" },
      D: { verdict: "incorrect", reason: "實驗顯示是否接受 UV-B 與死亡率明顯相關，不能說和紫外線無關。" }
    },
    takeaway: "科學結論用「可能影響」最合適，不把一項風險說成唯一原因。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-57": {
    encouragement: "配對題要找談同一證據的正反說法；體型龐大這一點在甲學者四項論點中沒有對應。",
    keyIdea: "乙的遷移、羽毛、獵物比、骨骼管脈都能和甲的論點配對，只有巨大體型無配對。",
    steps: [
      "論點六對論點一：北極生存或季節遷移。",
      "論點七、八、九分別對論點二、三、四。",
      "論點五只談恐龍體型，甲沒有使用體型作證據。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "論點五談巨大體型，甲學者的四項恆溫證據中沒有相同主題可配對。" },
      B: { verdict: "incorrect", reason: "論點六的季節遷移可回應論點一的北極圈恐龍化石。" },
      C: { verdict: "incorrect", reason: "論點七對羽毛功能的解釋，可與論點二的保溫羽毛配對。" },
      D: { verdict: "incorrect", reason: "論點八討論獵物與獵食者比，可和論點三配對。" },
      E: { verdict: "incorrect", reason: "論點九討論骨骼管脈化，可和論點四配對。" }
    },
    takeaway: "找成對論證，要看是否針對同一份證據提出不同解釋。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-58": {
    encouragement: "題目問乙學者如何解釋北極恐龍能曬到陽光；直接回到他的論點六即可。",
    keyIdea: "乙學者主張恐龍會隨季節遷到較溫暖、陽光較多的地區。",
    steps: [
      "北極冬季日照少且寒冷。",
      "論點六提出恐龍冬季會離開寒冷區域。",
      "移到低緯或較暖地區，就仍有機會接受陽光。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "乙的論點六明說恐龍冬天會遷往陽光較多、氣候較暖的區域。" },
      B: { verdict: "incorrect", reason: "板塊移動需地質長時間，不是個別恐龍隨季節曬到陽光的方法。" },
      C: { verdict: "incorrect", reason: "文章沒有提出恐龍冬眠，而且冬眠也不能解釋牠如何曬到陽光。" },
      D: { verdict: "incorrect", reason: "北極熊與恐龍不生活在同一地質年代，且食物也不能解釋日照問題。" }
    },
    takeaway: "閱讀題以文中證據作答；不要加入文章未提到的冬眠或其他想像。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-92-67": {
    encouragement: "把相鄰兩階段存活數相除，就會發現剛出生到十歲損失最大，成年後下降較慢。",
    keyIdea: "幼年死亡率極高、成年後存活率較高，最合理推測成年個體受到的天敵壓力較小。",
    steps: [
      "1000 隻新生個體到 1～10 歲只剩 100 隻，幼年死亡率約九成。",
      "成年後各十年階段雖持續下降，但不像幼年一次驟減。",
      "這種存活型態支持成年後天敵威脅較低。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "成年後各階段存活數下降較緩，最符合長大後天敵壓力明顯降低的推論。" },
      B: { verdict: "incorrect", reason: "新生到十歲的死亡比例遠高於後續階段，各年齡存活率並不相似。" },
      C: { verdict: "incorrect", reason: "新生 1000 隻只剩 100 隻進入下一階段，幼年死亡率非常高。" },
      D: { verdict: "incorrect", reason: "存活表沒有提供食物種類或營養階層，無法判斷牠是高階消費者。" }
    },
    takeaway: "存活曲線看每一階段「留下多少比例」，不能只看最後壽命多長。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-16": {
    encouragement: "題目已排除體型、生長、行為與繁殖差異，剩下最能和體色連結的就是偽裝與捕食。",
    keyIdea: "環境若讓綠色較顯眼，綠蚱蜢更容易被天敵發現，褐色比例便上升。",
    steps: [
      "兩型只有體色不同，其他特性相同。",
      "二十年後褐色比例增加，表示褐色可能在新環境較有利。",
      "體色最直接影響隱蔽效果與被捕食機率。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題幹已說兩型行為等特性相同，沒有飛行能力較差的證據。" },
      B: { verdict: "incorrect", reason: "題幹明確排除生長情形差異，不能用生長速度解釋。" },
      C: { verdict: "incorrect", reason: "兩型繁殖能力相同，綠蚱蜢不會因產卵較少而下降。" },
      D: { verdict: "correct", reason: "體色會影響偽裝；若綠色在改變後的棲地較顯眼，就較易被天敵捕食。" }
    },
    takeaway: "當其他條件被控制，只剩體色差異時，優先思考偽裝與天擇。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-17": {
    encouragement: "同一物種的兩種體色比例反轉，最合理不是突然都生病，而是環境改變了哪種顏色較有利。",
    keyIdea: "棲地環境改變可改變不同體色的偽裝效果，使族群比例隨天擇改變。",
    steps: [
      "1980 年綠色多，2000 年褐色多。",
      "若背景顏色或植被改變，天敵較容易發現的體色也會改變。",
      "長期差異存活與繁殖會讓兩型比例反轉。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩次調查呈現明顯比例差異，不能沒有證據就把結果全部當成錯誤。" },
      B: { verdict: "correct", reason: "棲地顏色、植被或其他生態條件改變，最能解釋不同體色受天擇後比例反轉。" },
      C: { verdict: "incorrect", reason: "若所有天敵都同樣減少，不一定能解釋為何褐色增加而綠色減少。" },
      D: { verdict: "incorrect", reason: "細菌感染不會合理地把族群穩定分成綠、褐兩種並造成方向性比例反轉。" }
    },
    takeaway: "環境改變不會指揮生物變色，而是改變既有體色的存活機會。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-93-44": {
    encouragement: "答案都藏在短文數字與因果句裡；遇到「引進」「沒有影響」等文章沒說或相反的字眼就要小心。",
    keyIdea: "豐沛雨量會改變鮭魚數量；84～86 年幼鮭超過族群一半且總數逾千，因此幼鮭逾 500。",
    steps: [
      "文中明說颱風、梅雨的豐沛雨量會影響鮭魚數量與分布。",
      "84～86 年總數都超過 1000 尾。",
      "同時幼鮭比例超過一半，所以每年幼鮭數都超過 500 尾。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "文章強調新生幼鮭加入量與天災影響，沒有證明成鮭生殖率是所有因素中最重要。" },
      B: { verdict: "correct", reason: "短文明確指出颱風或梅雨帶來的豐沛雨量會使鮭魚數量波動。" },
      C: { verdict: "incorrect", reason: "民國七十六年是調查開始時間，文章沒有說櫻花鉤吻鮭當年由日本引進。" },
      D: { verdict: "incorrect", reason: "短文說天災會使整個鮭魚分布向下游移動，不能說對分布沒有影響。" },
      E: { verdict: "correct", reason: "84～86 年總數逾千且幼鮭占一半以上，因此幼鮭數必定超過 500 尾。" }
    },
    takeaway: "閱讀數據題可把「超過 1000 的一半」直接換成「超過 500」。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-44": {
    encouragement: "表格給的是物種數，不是個體數；先比較火災前後，再避免把物種數誤叫成優勢種。",
    keyIdea: "火災後三類物種數都下降；爬蟲類在火災前與四年後都是三類中最高。",
    steps: [
      "火災前共 340 種，兩年後降為 145 種，物種多樣性下降。",
      "爬蟲類火災前 150 種、四年後 75 種，兩時點都高於另兩類。",
      "八年後爬蟲 100 種只是原先的 2/3 物種數，不能稱個體數。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "優勢種要看個體數、生物量或覆蓋度，表中只有各類物種數，不能判斷。" },
      B: { verdict: "correct", reason: "火災後哺乳類、鳥類、爬蟲類物種數都低於火災前，多樣性下降。" },
      C: { verdict: "incorrect", reason: "八年後三類物種數仍未恢復到火災前，不能說已恢復巔峰群落。" },
      D: { verdict: "incorrect", reason: "100 確為 150 的 2/3，但表格是爬蟲類物種數，不是爬蟲個體數。" },
      E: { verdict: "correct", reason: "火災前爬蟲 150 種、四年後 75 種，兩時點都高於鳥類與哺乳類。" }
    },
    takeaway: "物種數和個體數不能互換；優勢種也不能只由物種數判定。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-45": {
    encouragement: "森林大火後土壤仍在，是次級消長；表中的多年改變也屬年際變動。",
    keyIdea: "火災後在既有土壤上恢復是次級消長，動物物種數回升主要靠火場外族群重新遷入。",
    steps: [
      "森林火災通常留下土壤、種子庫與部分生物。",
      "因此恢復從既有基礎開始，屬次級消長。",
      "哺乳類、鳥類與爬蟲類能移動，火災後的物種回升主要靠周邊棲地個體重新遷入。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "初級消長從無土壤環境開始；森林火災後通常仍有土壤。" },
      B: { verdict: "correct", reason: "群集在火災後保留的土壤上重新建立，符合次級消長。" },
      C: { verdict: "correct", reason: "三類都是可移動的動物，火災後重新出現的物種主要由周邊未受災棲地移入。" },
      D: { verdict: "incorrect", reason: "表格呈現火災後長期恢復的消長過程，不是每年規律反覆的年變動現象。" },
      E: { verdict: "incorrect", reason: "物種回升主要是群集恢復與遷入，不是高溫誘發大量新基因突變。" }
    },
    takeaway: "災後物種回來主要靠存留、繁殖與遷入，不是突然突變出許多新物種。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-66": {
    encouragement: "好標題要同時包住原因與結果：文章從溫度談到鉀離子、氣孔，再談蒸散速率。",
    keyIdea: "文章主軸是溫度如何透過保衛細胞影響氣孔與蒸散作用。",
    steps: [
      "文章比較不同溫度下鉀離子進出保衛細胞的速率。",
      "鉀離子改變膨壓與氣孔開閉。",
      "氣孔開閉又改變蒸散，因此標題應是溫度對蒸散的影響。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "文章只研究某種植物，沒有說它是熱帶植物，也不以植物類型為主題。" },
      B: { verdict: "incorrect", reason: "研究的是葉片保衛細胞與氣孔，不是根部調節溫度。" },
      C: { verdict: "correct", reason: "全文核心是溫度改變鉀離子運輸、氣孔開閉與蒸散速率。" },
      D: { verdict: "incorrect", reason: "因果方向相反；文章探討溫度影響蒸散，不是蒸散改變大氣氣溫。" },
      E: { verdict: "incorrect", reason: "文章是氣孔開閉影響蒸散，並非蒸散反過來控制氣孔。" }
    },
    takeaway: "選標題要抓完整因果鏈，不只挑文章中出現過的名詞。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-67": {
    encouragement: "鉀離子進得多、出得少，保衛細胞吸水、膨壓升高，氣孔就更容易打開。",
    keyIdea: "鉀離子進出速率的差值會改變保衛細胞膨壓，因而控制氣孔。",
    steps: [
      "20～28℃時 K⁺ 進入速率增加、離開速率降低。",
      "細胞內溶質增加會吸引水進入，膨壓上升。",
      "保衛細胞彎曲後氣孔打開，蒸散增加。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "25℃時鉀離子淨流入較明顯，保衛細胞膨壓應比 15℃高。" },
      B: { verdict: "correct", reason: "鉀離子進出速率差會改變細胞內溶質與膨壓，進而影響氣孔開閉。" },
      C: { verdict: "incorrect", reason: "蒸散具有降溫作用，葉溫不會因此比氣溫上升得更快。" },
      D: { verdict: "incorrect", reason: "文章指出 20～28℃較易膨壓上升並開孔，打開比例不會較低。" }
    },
    takeaway: "保衛細胞：離子進→水進→膨壓升→氣孔開。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-68": {
    encouragement: "把文章分兩段畫線：K⁺進入速率一路升；K⁺離開速率先升，到 20℃後轉降。",
    keyIdea: "實線 Kin 隨溫度持續增加，虛線 Kout 在約 20℃達高點後下降，對應圖 A。",
    steps: [
      "13～20℃時，Kin 與 Kout 都隨溫度上升。",
      "20～28℃時，Kin 繼續上升，Kout 反而下降。",
      "只有 A 同時呈現實線續升、虛線先升後降。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "實線隨溫度持續上升，虛線約 20℃後下降，完整符合文章兩個溫度區間。" },
      B: { verdict: "incorrect", reason: "B 的虛線在 20℃後近乎持平，沒有呈現文中所說的降低。" },
      C: { verdict: "incorrect", reason: "C 的虛線在 20℃前已先下降，與 13～20℃應上升不符。" },
      D: { verdict: "incorrect", reason: "D 的兩條線都持續上升，沒有顯示 Kout 在 20～28℃下降。" }
    },
    takeaway: "文字轉曲線時，逐區間標出「上升、下降、轉折點」。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-101-3": {
    encouragement: "面對新疾病，基因型越少越危險，因為全族群可能都缺少能抵抗病毒的版本。",
    keyIdea: "甲經十代後仍只有 10 種基因型，五品種中遺傳多樣性最低，滅絕風險最大。",
    steps: [
      "比較 F10 基因型種類：甲 10、乙 20、丙 40、丁 30、戊 15。",
      "基因型種類越多，越可能有少數個體具抗病能力。",
      "甲變異最少，遇到新病毒時全數易感的風險最高。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲只有 10 種基因型，是五者最低，面對新疾病時缺乏抗病變異的風險最大。" },
      B: { verdict: "incorrect", reason: "乙有 20 種基因型，比甲多，保有抗病個體的機會較高。" },
      C: { verdict: "incorrect", reason: "丙有 40 種基因型，多樣性最高，滅絕風險相對最低。" },
      D: { verdict: "incorrect", reason: "丁有 30 種基因型，遺傳多樣性明顯高於甲。" },
      E: { verdict: "incorrect", reason: "戊有 15 種基因型，雖不高，但仍多於甲的 10 種。" }
    },
    takeaway: "遺傳多樣性像風險分散：變異越多，越可能有人能撐過新環境。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-106-5": {
    encouragement: "Rh− 母親原本沒有 D 抗原也沒有 D 抗體；接觸 Rh＋ 胎兒紅血球後，才可能被刺激產生抗體。",
    keyIdea: "Rh− 母親生產 Rh＋ 胎兒時，胎兒血進入母體可能誘發 D 抗體。",
    steps: [
      "Rh＋ 紅血球表面有 D 抗原，Rh− 沒有。",
      "案例三母親 Rh−、胎兒 Rh＋，兩者抗原不同。",
      "生產傷口可能讓胎兒紅血球進入母體，引發母親免疫反應。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "Rh＋ 母親自己就有 D 抗原，正常情況下不會對自己的抗原產生 D 抗體。" },
      B: { verdict: "incorrect", reason: "Rh− 胎兒沒有 D 抗原，無法刺激 Rh＋ 母親產生針對 D 的抗體。" },
      C: { verdict: "correct", reason: "Rh− 母親在生產 Rh＋ 胎兒時可能接觸 D 抗原，之後產生 D 抗體。" },
      D: { verdict: "incorrect", reason: "案例四母親、胎兒都 Rh−，沒有 D 抗原可刺激母親。" },
      E: { verdict: "incorrect", reason: "案例四母親的 Rh− 紅血球沒有 D 抗原，D 抗體不會因此凝集自己的紅血球。" }
    },
    takeaway: "產生抗體要先遇到對應抗原；Rh− 母親遇 Rh＋ 胎兒才有致敏風險。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-12": {
    encouragement: "若光週期會控制開花，不同日照長度應出現明顯分界；表中 6～24 小時都約 91～96 天開花。",
    keyIdea: "各光照長度的平均開花時間接近，沒有臨界日長跡象。",
    steps: [
      "最短 6 小時與最長 24 小時都約 92～93 天開花。",
      "所有處理僅在 91～96 天間小幅波動。",
      "沒有日照超過或低於某值便大幅提早、延後的分界。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若是臨界日長 8 小時的長日植物，6 小時處理應明顯不同，但表中沒有。" },
      B: { verdict: "incorrect", reason: "16 小時前後的開花天數沒有明顯分界，不能判為長日植物。" },
      C: { verdict: "incorrect", reason: "短日植物在超過臨界日長後應受抑制，但長日照組仍正常開花。" },
      D: { verdict: "incorrect", reason: "16 小時上下各組開花時間相近，不支持短日植物臨界值。" },
      E: { verdict: "correct", reason: "6～24 小時光照下開花時間都相近，表示光週期對此植物開花沒有明顯影響。" }
    },
    takeaway: "找臨界值要看資料是否出現明顯分界；只有小幅波動不能硬切界線。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-111-19": {
    encouragement: "螢光和 DNA 含量成正比；複製後 DNA 加倍，分裂完成後每個子細胞回到原來含量。",
    keyIdea: "雙套細胞分裂後仍為雙套，但每個子細胞 DNA 含量低於剛完成複製時。",
    steps: [
      "間期 S 期前，雙套細胞有一份基本 DNA 含量。",
      "S 期完成後 DNA 加倍，但染色體套數仍是雙套。",
      "有絲分裂完成，DNA 平均分到兩個雙套子細胞，單一細胞螢光降低。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "有絲分裂不會把雙套體細胞變成單套，子細胞仍是雙套。" },
      B: { verdict: "correct", reason: "分裂完成的子細胞仍為雙套，且單一細胞 DNA 量比複製完成時低，螢光較弱。" },
      C: { verdict: "incorrect", reason: "DNA 複製使 DNA 量加倍，但不會把染色體套數變成三套。" },
      D: { verdict: "incorrect", reason: "DNA 複製發生於間期的 S 期，不是有絲分裂期。" },
      E: { verdict: "incorrect", reason: "完成 DNA 複製後仍在間期末段，接著才進入分裂期，不是再進入間期。" }
    },
    takeaway: "DNA 加倍不等於染色體套數加倍；有絲分裂後子細胞套數不變。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-111-23": {
    encouragement: "表格能回答體長，不能直接回答肌肉密度或分泌量差多少；推論要守住資料邊界。",
    keyIdea: "河水兩組都較短，可能缺乏生長條件；GH 轉殖魚在河水仍遠長於控制組，表示 GH 仍高量表現。",
    steps: [
      "控制組：試驗場 82 cm、河水 53 cm，河水生長較差。",
      "GH 組：試驗場 166 cm、河水 152 cm，河水仍有明顯轉殖效果。",
      "體長資料不能直接換算肌肉密度或比較兩環境的激素分泌量。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "正常魚本來就會分泌生長激素，控制組只是沒有額外轉殖 GH 基因。" },
      B: { verdict: "incorrect", reason: "表格只有體長，沒有測量肌肉質量或體積，無法判斷肌肉密度。" },
      C: { verdict: "correct", reason: "控制組與轉殖組在河水都較短，合理推測河水缺少某些大西洋鮭生長條件。" },
      D: { verdict: "correct", reason: "河水中的轉殖魚仍達 152 cm、遠長於控制組 53 cm，支持仍有高量 GH 作用。" },
      E: { verdict: "incorrect", reason: "體長不能直接換算 GH 分泌量，也沒有證據顯示河水分泌量高於試驗場。" }
    },
    takeaway: "資料量到體長，就先只談生長結果；未測的肌肉密度與激素量不能硬推。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-111-52": {
    encouragement: "高頻代表變化得快；心跳每分鐘多次，比呼吸等生理節律更快地改變血流速度。",
    keyIdea: "血流速度的高頻週期變化主要由每次心臟收縮與舒張造成。",
    steps: [
      "心室收縮會把血快速推出，使血流速度與壓力升高。",
      "舒張時推力下降，形成快速反覆的脈動。",
      "呼吸頻率通常低於心跳，因此多對應較低頻變化。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "呼吸會影響循環，但頻率通常低於心跳，不是血流高頻成分的主要來源。" },
      B: { verdict: "correct", reason: "心臟每次收縮、舒張都造成血流快速脈動，是高頻成分的主要來源。" },
      C: { verdict: "incorrect", reason: "排泄過程不會以快速週期直接推動血液流速。" },
      D: { verdict: "incorrect", reason: "酒精發酵不是人體血液循環的週期性推動機制。" },
      E: { verdict: "incorrect", reason: "能量產生是細胞代謝過程，不會直接形成固定高頻血流波動。" }
    },
    takeaway: "血流的快速脈動跟著心跳，較慢起伏才可能和呼吸等節律有關。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-113-39": {
    encouragement: "選育需要族群內有差異可選；一直只留最快者，久了可用的有利變異就會越來越少。",
    keyIdea: "純種賽馬長期定向選育後，有利跑速的遺傳變異接近選盡，進步便趨緩。",
    steps: [
      "早期族群內跑速相關遺傳差異較多，選最快者繁殖有效。",
      "反覆選育使有利等位基因比例提高，也讓族群變得較一致。",
      "可再被選出的有利變異變少，後續進展自然下降。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "族群大小可能影響變異，但題目最直接的長期選育限制是可用遺傳變異耗盡。" },
      B: { verdict: "correct", reason: "長期只選跑快者繁殖後，族群內能再提升速度的有利基因變異可能已接近選盡。" },
      C: { verdict: "incorrect", reason: "早期已有明顯進展，沒有證據顯示 1950 年後只是計畫突然執行不徹底。" },
      D: { verdict: "incorrect", reason: "跑速包含可遺傳成分，否則早期選育不會持續得到進展。" },
      E: { verdict: "incorrect", reason: "傳統選育不必依靠轉殖基因，缺少可轉殖基因不是效果趨緩的主要解釋。" }
    },
    takeaway: "人工選擇不是無限進步；沒有足夠遺傳變異，就沒有材料可再選。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-113-40": {
    encouragement: "捕器閉合時水由內層流到外層，因此外層膨壓增大、內層膨壓減小，葉片就向內合攏。",
    keyIdea: "外層細胞吸水膨壓升高，內層失水膨壓降低，兩側差異造成捕器彎曲閉合。",
    steps: [
      "細胞膜施加於細胞壁的壓力可視為膨壓。",
      "水由內層細胞流向外層細胞。",
      "外層膨壓增大、內層膨壓減小，葉片曲率改變而閉合。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此方向會使外層變鬆、內層變飽滿，與題文所述閉合時水流方向相反。" },
      B: { verdict: "correct", reason: "外層吸水後膨壓變大，內層失水後膨壓變小，能促使兩側葉片合攏。" },
      C: { verdict: "incorrect", reason: "內外層同時膨壓變小缺乏兩側差異，不能解釋快速彎曲方向。" },
      D: { verdict: "incorrect", reason: "內外層同時膨壓變大也無法形成題述的相反形變。" },
      E: { verdict: "incorrect", reason: "電位變化會引發水分重新分布與膨壓改變，不是只有電位改變。" }
    },
    takeaway: "植物快速運動常靠不同位置的水分與膨壓改變，不需要肌肉。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-113-42": {
    encouragement: "14 μC 是兩次觸發累積的門檻，不代表每次都至少 14；達門檻後水向外層移動使葉片閉合。",
    keyIdea: "累積電量達 14 μC 會促使水由內層流向外層而閉合；反向流動可使葉片張開。",
    steps: [
      "第一次觸發會被電位狀態記住，不是靠葉片彈力記憶。",
      "兩次充電總量達 14 μC 才快速閉合，所以單次可小於 14。",
      "閉合時水由內層到外層；張開時方向相反。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第一次觸發的記憶來自電位與儲存電量，不是葉片彎曲的彈力。" },
      B: { verdict: "incorrect", reason: "14 μC 是累積門檻，單次觸發產生的充電量可以小於 14 μC。" },
      C: { verdict: "correct", reason: "累積電量達門檻後，水快速由內層移到外層，改變膨壓並使捕器閉合。" },
      D: { verdict: "correct", reason: "若水由外層回到內層，膨壓差反轉，可使閉合葉片重新張開。" },
      E: { verdict: "incorrect", reason: "題文說 pH 大於 4.5 時即使觸發產生電位也無法閉合，不是提高電量門檻就能解決。" }
    },
    takeaway: "先累積電訊號，再改變水分與膨壓，是捕蠅草快速閉合的關鍵。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-115-37": {
    encouragement: "雌雄都有同一套基因，差別在不同溫度下哪些基因被開啟；再用轉錄在核、轉譯在質的規則判斷。",
    keyIdea: "Kdm6b 蛋白在細胞核促進 Dmrt1 轉錄；兩基因的 RNA 都到細胞質轉譯。",
    steps: [
      "Dmrt1 在 26℃表現並促進雄性發育，32℃則幾乎不表現。",
      "Kdm6b 蛋白量高時會促進 Dmrt1 產生 RNA，表示作用於細胞核轉錄。",
      "真核細胞兩基因都在核內轉錄，RNA 再到細胞質核糖體轉譯。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "雌性在 32℃是 Dmrt1 不表現，不代表基因從雌性基因組中消失。" },
      B: { verdict: "correct", reason: "Dmrt1 在雄性發育條件下表現，合理推論其蛋白質會促進雄性性器官發育。" },
      C: { verdict: "incorrect", reason: "Dmrt1 與 Kdm6b 都是真核細胞基因，兩者都在細胞核內轉錄。" },
      D: { verdict: "correct", reason: "兩基因轉錄出的 RNA 都會到細胞質，由核糖體進行轉譯。" },
      E: { verdict: "correct", reason: "Kdm6b 蛋白能促進 Dmrt1 基因產生 RNA，因此會在細胞核協助其轉錄。" }
    },
    takeaway: "基因是否存在和是否表現不同；轉錄在細胞核，轉譯在細胞質。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
