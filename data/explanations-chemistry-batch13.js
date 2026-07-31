window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-91-23": {
    encouragement: "先認出氦是單原子、氮是雙原子，再檢查粒子是否都像氣體一樣分散。",
    keyIdea: "氦氣以單顆He存在，氮氣以N₂分子存在；STP下兩者都是均勻混合的氣體。",
    steps: ["小白球應一顆顆分開，大灰球應兩顆成一組。", "氣體粒子彼此距離大且混合均勻，符合這兩點的是A圖。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "小白球單獨存在、大灰球兩兩成對，而且都分散在容器中。" },
      B: { verdict: "incorrect", reason: "大灰球聚集在底部，像凝聚態，不符合STP下氮氣的狀態。" },
      C: { verdict: "incorrect", reason: "圖中把小白球也畫成兩顆一組，但氦氣是單原子氣體。" },
      D: { verdict: "incorrect", reason: "大灰球被畫成單顆，沒有呈現氮氣以N₂分子存在。" }
    },
    takeaway: "粒子圖先看分子組成，再看固、液、氣的排列疏密。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-28": {
    encouragement: "這題不用背完整反應機制，只要比較各曲線先後變化，就能找出證據最薄弱的推論。",
    keyIdea: "濃度消長可提示反應物與產物，但兩種物質同時增加，不能直接說其中一種生成另一種。",
    steps: ["NO下降最快，NO₂隨後上升；RH下降時O₃、PAN逐漸增加。", "O₃與PAN主要是一起增加，圖中沒有O₃被消耗來生成PAN的明顯證據，故D最不合理。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NO曲線比RH更快降到接近零，符合「NO消失較快」。" },
      B: { verdict: "incorrect", reason: "NO快速下降後NO₂上升，支持NO轉變成NO₂的推論。" },
      C: { verdict: "incorrect", reason: "RH與NO₂後來減少，而PAN與O₃增加，這是合理的整體推論。" },
      D: { verdict: "correct", reason: "O₃與PAN大致同時生成，不能由圖判定O₃是生成PAN的反應物。" }
    },
    takeaway: "曲線的先後與增減能支持反應關係，但「一起上升」不等於「甲生成乙」。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-32": {
    encouragement: "把分餾塔想成一座溫度由下往上降低的高塔，較重、較難揮發的成分會先在較低處流出。",
    keyIdea: "烴的碳數愈多，平均分子量與沸點通常愈高，因此較靠下方的丙餾分比甲重。",
    steps: ["丙餾分的碳數約13～19，屬於較大的烴分子。", "甲在塔的較高處流出，分子通常較小，所以丙的平均分子量較大，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩個出口位置不同，代表冷凝溫度與餾分沸點範圍不同。" },
      B: { verdict: "incorrect", reason: "甲位於較高處，收集的是較易揮發、平均分子量較小的餾分。" },
      C: { verdict: "correct", reason: "丙含碳數較多的烴，平均分子量比甲出口的餾分大。" },
      D: { verdict: "incorrect", reason: "分餾主要依沸點分開，兩餾分的平均碳數與平均分子量並不相同。" }
    },
    takeaway: "分餾塔通常是：愈上方，沸點與分子量愈小；愈下方則愈大。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-33": {
    encouragement: "先用出口高低判斷分子大小，再連到常見用途，就不必死背每個名稱。",
    keyIdea: "分餾塔底部留下最難揮發、碳鏈最長、分子量最大的殘餘物，可作瀝青。",
    steps: ["塔頂餾分最輕，往下分子量與沸點逐漸增加。", "丁在底部，會得到非常重的殘餘物，因此D正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "塔頂輕質氣體常作燃料氣；飛機燃油主要是較重的煤油餾分。" },
      B: { verdict: "incorrect", reason: "工業溶劑通常不是碳數超過30的超重餾分。" },
      C: { verdict: "incorrect", reason: "汽油來自較輕餾分，含鉛汽油還須後續添加含鉛抗震劑，不會直接流出。" },
      D: { verdict: "correct", reason: "塔底丁出口留下分子量很大的難揮發殘餘物，例如瀝青。" }
    },
    takeaway: "石油分餾看出口高度：上輕下重，塔底常是潤滑油、蠟或瀝青等重質物。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-56": {
    encouragement: "都市淨水不是一次完成，而是先讓小雜質聚成大顆粒，再沉降、過濾與消毒。",
    keyIdea: "鋁鹽在水中形成膠狀絮體，能吸附細小懸浮物，使它們聚集後沉降。",
    steps: ["混濁水中的微小顆粒太小，不容易自行沉下。", "加入鋁鹽可形成絮體，捲帶雜質沉降，因此D正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "活性炭擅長吸附氣味與部分溶解性有機物，但不是用來先去除大量不溶固體。" },
      B: { verdict: "incorrect", reason: "氯化的主要功能是消毒殺菌，不是去除無機沉澱。" },
      C: { verdict: "incorrect", reason: "一般自來水過濾多用砂濾等方式，並非通常在最後全面採逆滲透。" },
      D: { verdict: "correct", reason: "鋁鹽形成膠狀絮體後能吸附懸浮微粒，使雜質變大並容易沉降。" }
    },
    takeaway: "混凝沉降是把看不見的小顆粒「抱成一團」，再讓它們沉下來。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-64": {
    encouragement: "黑點靠不靠近靶心看準確度；黑點彼此靠不靠近看精密度，分開判斷就很簡單。",
    keyIdea: "丙的黑點雖偏離中心，卻聚得很緊，所以精密度高；甲較分散，精密度低。",
    steps: ["先不看靶心，只比較每組黑點彼此的距離。", "丙比甲集中，因此丙的精密度比甲高，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的黑點較分散，精密度不如聚得很緊的乙。" },
      B: { verdict: "incorrect", reason: "乙與丙都很集中，不能說乙明顯比丙精密。" },
      C: { verdict: "correct", reason: "丙的黑點集中成一小群，而甲較分散，所以丙精密度較高。" },
      D: { verdict: "incorrect", reason: "丙雖集中但偏離靶心；乙更靠近中心，準確度較高。" }
    },
    takeaway: "準確＝接近真值；精密＝多次測量彼此接近。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-65": {
    encouragement: "精密度只看同一物質多次測量是否集中，不要被熔點高低帶走。",
    keyIdea: "表中不同物質的測量散布程度不同，顯示精密度不一定相同。",
    steps: ["比較每一列多次測量值的差距。", "有的只差0.5℃，有的相差數℃，因此B合理。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "表中沒有呈現熔點愈高、測量就一定愈分散的固定關係。" },
      B: { verdict: "correct", reason: "不同物質各次測量的散布不同，精密度確實不一定相同。" },
      C: { verdict: "incorrect", reason: "這一組混合物較分散，且單一例子也不能推出混合物總是更精密。" },
      D: { verdict: "incorrect", reason: "苯的讀值可到0.1℃，不能說最佳精密度只能到1℃。" }
    },
    takeaway: "判斷精密度要看重複數據的散布，不能只看數值大小。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-66": {
    encouragement: "真正重要的是樣品和溫度計汞珠是否處在相近的受熱位置；毛細管空白上端的位置不影響樣品溫度。",
    keyIdea: "樣品需靠近汞珠，讓溫度計讀值代表樣品溫度；空的管口高低與測量無關。",
    steps: ["檢查各操作是否改變樣品相對於汞珠的位置。", "C只說空管上端高過最低刻度，沒有移動樣品，因此不影響準確度。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "樣品低於汞珠，兩處受熱溫度可能不同，會造成讀值誤差。" },
      B: { verdict: "incorrect", reason: "樣品端偏離溫度計，無法保證兩者處在相同溫度區域。" },
      C: { verdict: "correct", reason: "只改變毛細管空白上端的位置，不影響樣品與汞珠的相對位置。" },
      D: { verdict: "incorrect", reason: "樣品範圍高過汞珠，整段樣品受熱可能不均，影響熔點判讀。" }
    },
    takeaway: "溫度測量要讓感溫部位貼近樣品，才量得到樣品真正的溫度。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-91-67": {
    encouragement: "遇到「總是」「平均值」「主要因為」要特別小心；直接用表中的反例檢查最快。",
    keyIdea: "異丁醇分子量比環己烷小，熔點卻較高，因此兩者熔點差不能用分子量差異解釋。",
    steps: ["環己烷分子量約84，異丁醇約74。", "較輕的異丁醇熔點反而較高，顯示極性等因素更重要，選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "異丁醇比環己烷輕，熔點卻較高，已構成反例。" },
      B: { verdict: "incorrect", reason: "苯與環己烷混合物的熔點不是兩者熔點的簡單平均。" },
      C: { verdict: "correct", reason: "異丁醇分子量較小卻熔點較高，所以分子量差不是這個高低的原因。" },
      D: { verdict: "incorrect", reason: "苯也有苯環但熔點低；苯甲酸較高還與羧酸的強分子間作用力有關。" }
    },
    takeaway: "熔點同時受分子量、極性、分子形狀與排列方式影響，不能只看單一因素。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-26": {
    encouragement: "乾電池先找會失去電子的鋅殼；失去電子的一極就是負極。",
    keyIdea: "鋅殼被氧化並供應電子，是乾電池的負極；石墨棒主要負責導電。",
    steps: ["鋅較容易失去電子：Zn→Zn²⁺＋2e⁻。", "電子由鋅殼流出，所以鋅殼是負極，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "鋅殼發生氧化並放出電子，是乾電池的負極。" },
      B: { verdict: "incorrect", reason: "MnO₂會參與陰極反應，不只是加速反應而不改變的催化劑。" },
      C: { verdict: "incorrect", reason: "石墨棒主要作為導電集流體，並不是還原劑。" },
      D: { verdict: "incorrect", reason: "石墨棒本身通常不被還原，也不是氧化劑。" }
    },
    takeaway: "原電池中發生氧化、放出電子的一極是負極。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-31": {
    encouragement: "同樣都是五個碳，分子裡原本含的氧愈多，完全氧化時通常需要外加的氧就愈少。",
    keyIdea: "完全氧化一莫耳CₓHᵧOᵤ所需O₂為x＋y/4－u/2；C₅H₁₂需氧量最大。",
    steps: ["四個選項都有5個碳，比較氫數與分子內已有的氧。", "C₅H₁₂完全燃燒需8 mol O₂，其他含氧化合物需要較少，故選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "C₅H₁₂＋8O₂→5CO₂＋6H₂O，每莫耳需8莫耳氧氣，四者最大。" },
      B: { verdict: "incorrect", reason: "C₅H₁₂O分子已含一個氧，完全氧化需7.5莫耳O₂，少於A。" },
      C: { verdict: "incorrect", reason: "C₅H₁₀O完全氧化需7莫耳O₂，少於A。" },
      D: { verdict: "incorrect", reason: "C₅H₁₀O₂已有兩個氧，完全氧化只需6.5莫耳O₂。" }
    },
    takeaway: "比較COD時，可把分子本身已有的氧看成「已先完成一部分氧化」。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-92-45": {
    encouragement: "先看等溫線穿過哪一條兩相共存區，再記得三態共存只會出現在特定條件。",
    keyIdea: "甲溫度可有固、氣共存；液、氣可在乙的共存區共存；高於丙溫度不可能三態共存。",
    steps: ["依圖中甲的粗線位置，甲對應固態與氣態共存。", "三態共存只在三相交會的特定溫度，因此高於丙時不成立，選B、D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的共存區連接固態與氣態，不是固態與液態。" },
      B: { verdict: "correct", reason: "甲等溫線的粗線位在固、氣兩態共存區。" },
      C: { verdict: "incorrect", reason: "乙等溫線可通過液、氣兩態共存區，因此兩態可以共存。" },
      D: { verdict: "correct", reason: "三態共存只出現在三相交會的特定條件，高於丙溫度便無法三態共存。" }
    },
    takeaway: "相圖中的線或區域代表兩態共存，三態共存只在三條邊界交會處。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-3": {
    encouragement: "液體溫度計的填充物必須在整段測量範圍內保持液態，檢查熔點與沸點就好。",
    keyIdea: "要量400～600℃，材料的熔點必須低於400℃，沸點必須高於600℃。",
    steps: ["先刪除熔點高於400℃的材料，因為測量時仍是固體。", "再刪除沸點低於600℃者，只有銦符合，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鋁的熔點660℃，在400～600℃仍未熔化。" },
      B: { verdict: "incorrect", reason: "鈣的熔點839℃，無法作為這段溫度的液柱。" },
      C: { verdict: "incorrect", reason: "汞在356.6℃已沸騰，還沒到400℃就不能正常量測。" },
      D: { verdict: "correct", reason: "銦在156℃熔化、2080℃才沸騰，400～600℃間可保持液態。" },
      E: { verdict: "incorrect", reason: "鎢的熔點3410℃，在測量範圍中仍是固體。" }
    },
    takeaway: "溫度計工作範圍必須落在填充物的熔點與沸點之間。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-13": {
    encouragement: "先抓題目的用途「感冒時退熱、止痛」，再從十個名稱中找對應藥物。",
    keyIdea: "阿斯匹靈具有解熱、止痛作用，是傳統感冒藥常見成分。",
    steps: ["感冒藥主要要緩解發燒、頭痛等症狀。", "十個選項中阿斯匹靈最符合解熱止痛用途，選H。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "多醣主要是醣類大分子，不是傳統解熱止痛成分。" },
      B: { verdict: "incorrect", reason: "嗎啡是強效麻醉性止痛藥，不作一般感冒藥主要成分。" },
      C: { verdict: "incorrect", reason: "苯甲酸常作防腐劑，不是主要解熱止痛藥。" },
      D: { verdict: "incorrect", reason: "咖啡因可提神，但不是傳統感冒藥的主要解熱成分。" },
      E: { verdict: "incorrect", reason: "纖維素常作賦形或包覆材料，本身不負責解熱止痛。" },
      F: { verdict: "incorrect", reason: "檸檬酸可調味或參與發泡，不是主要藥效成分。" },
      G: { verdict: "incorrect", reason: "氧化鋁是無機材料，不是常見感冒藥主成分。" },
      H: { verdict: "correct", reason: "阿斯匹靈具有解熱與止痛作用，符合傳統感冒藥用途。" },
      I: { verdict: "incorrect", reason: "碳酸氫鈉可與酸反應發泡或制酸，不是主要解熱止痛成分。" },
      J: { verdict: "incorrect", reason: "氫氧化鎂主要作制酸劑或緩瀉劑。" }
    },
    takeaway: "共用選項題先把每種物質的主要用途配對，再回到題幹挑選。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-14": {
    encouragement: "看到酸加入水後冒泡，可以立刻想到酸與碳酸氫鹽反應會放出二氧化碳。",
    keyIdea: "檸檬酸與碳酸氫鈉反應產生CO₂，形成沖泡時看見的氣泡。",
    steps: ["檸檬酸提供酸性的H⁺。", "H⁺與HCO₃⁻反應生成水和CO₂，故另一成分是I。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "多醣遇檸檬酸不會快速放出二氧化碳。" },
      B: { verdict: "incorrect", reason: "嗎啡不是製造發泡效果的碳酸氫鹽。" },
      C: { verdict: "incorrect", reason: "苯甲酸也是酸性物質，和檸檬酸混合不會產生所需氣泡。" },
      D: { verdict: "incorrect", reason: "咖啡因不會與檸檬酸反應放出CO₂。" },
      E: { verdict: "incorrect", reason: "纖維素不會在沖泡時和檸檬酸快速發泡。" },
      F: { verdict: "incorrect", reason: "題幹已經指出含檸檬酸，另一成分應能和酸反應。" },
      G: { verdict: "incorrect", reason: "氧化鋁不是發泡錠常用的二氧化碳來源。" },
      H: { verdict: "incorrect", reason: "阿斯匹靈是藥效成分，不會與檸檬酸產生大量氣泡。" },
      I: { verdict: "correct", reason: "碳酸氫鈉遇酸會生成CO₂，正是沖泡時的氣泡。" },
      J: { verdict: "incorrect", reason: "氫氧化鎂可中和酸，但不含碳酸根，不會放出CO₂。" }
    },
    takeaway: "酸＋碳酸氫鹽會產生鹽、水和二氧化碳。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-15": {
    encouragement: "題幹已給關鍵詞「合法興奮劑」，日常最熟悉的答案就是咖啡中的咖啡因。",
    keyIdea: "咖啡因能刺激中樞神經、減輕嗜睡感，因此可能少量加入感冒藥。",
    steps: ["先排除制酸劑、材料與一般藥物成分。", "咖啡因具有提神作用，最符合題意，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "多醣是營養或結構性大分子，沒有題述的提神作用。" },
      B: { verdict: "incorrect", reason: "嗎啡會抑制中樞神經且具成癮風險，不是用來減輕嗜睡。" },
      C: { verdict: "incorrect", reason: "苯甲酸主要作防腐用途，不是興奮劑。" },
      D: { verdict: "correct", reason: "咖啡因是合法的中樞神經興奮劑，可幫助提神。" },
      E: { verdict: "incorrect", reason: "纖維素不是會作用於神經系統的興奮劑。" },
      F: { verdict: "incorrect", reason: "檸檬酸主要提供酸味或發泡反應，不負責提神。" },
      G: { verdict: "incorrect", reason: "氧化鋁是無機材料，不是興奮劑。" },
      H: { verdict: "incorrect", reason: "阿斯匹靈用於解熱止痛，不是中樞興奮劑。" },
      I: { verdict: "incorrect", reason: "碳酸氫鈉可制酸或發泡，沒有提神作用。" },
      J: { verdict: "incorrect", reason: "氫氧化鎂主要作制酸劑或緩瀉劑。" }
    },
    takeaway: "咖啡因常見於咖啡、茶，也是一種合法的中樞神經興奮劑。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-26": {
    encouragement: "先由圖找出生成Z和消耗X的比例，再用質量守恆補出Y，完全不用求分子量。",
    keyIdea: "圖示20克Z由15克X反應生成；縮小為4克Z時需3克X，因此Y為1克。",
    steps: ["由圖讀得20克Z對應消耗15克X，所以4克Z需3克X。", "依質量守恆，Y的質量＝4－3＝1克，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "4克產物減去3克X，恰有1克Y參與反應。" },
      B: { verdict: "incorrect", reason: "3/2是反應式中Y與Z係數比的一部分，不能直接當質量比。" },
      C: { verdict: "incorrect", reason: "若Y為2克，X與Y總質量會是5克，不等於4克Z。" },
      D: { verdict: "incorrect", reason: "3克是由圖求得的X質量，不是Y的質量。" },
      E: { verdict: "incorrect", reason: "直接把係數3/2乘質量，忽略X、Y、Z的分子量不同。" }
    },
    takeaway: "反應式係數是粒子數或莫耳比；題目給質量圖時，要搭配質量守恆。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-33": {
    encouragement: "金屬和稀酸反應的基本型是「金屬＋酸→鹽＋氫氣」，先套這個骨架。",
    keyIdea: "鋅與稀硫酸反應生成硫酸鋅與氫氣：Zn＋H₂SO₄→ZnSO₄＋H₂。",
    steps: ["鋅取代酸中的氫，形成Zn²⁺與H₂。", "Zn²⁺和SO₄²⁻組成ZnSO₄，完整式子是E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "SO₃不是鋅與稀硫酸反應放出的氣體，產物化學式也不合理。" },
      B: { verdict: "incorrect", reason: "稀硫酸與鋅通常放出H₂，不是SO₂。" },
      C: { verdict: "incorrect", reason: "反應不會生成H₂S，且ZnO₄不是正確的鹽化學式。" },
      D: { verdict: "incorrect", reason: "不會以水蒸氣作主要氣體產物，硫酸根也不會變成亞硫酸根。" },
      E: { verdict: "correct", reason: "產物為H₂氣體與可溶的ZnSO₄，原子數也已平衡。" }
    },
    takeaway: "活潑金屬遇稀酸常產生氫氣，酸根通常保留並與金屬離子形成鹽。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-47": {
    encouragement: "紫甘藍像酸鹼偵探：紅色代表酸性；先找哪一極產生H⁺，再決定金戒指的位置。",
    keyIdea: "陽極進行氧化，水可生成H⁺使溶液變紅；金較不易反應，應放在陽極取代會溶解的鐵。",
    steps: ["鐵若作陽極容易先被氧化溶解，干擾水生成H⁺。", "改用金作陽極，水氧化產生H⁺，該側紫甘藍汁變紅，選A、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "金較不易氧化，放在陽極可讓水的氧化反應正常發生。" },
      B: { verdict: "incorrect", reason: "問題出在鐵陽極容易溶解；把金放陰極不能排除這項干擾。" },
      C: { verdict: "incorrect", reason: "先藍後綠代表鹼性增強，是陰極產生OH⁻的一側。" },
      D: { verdict: "incorrect", reason: "藍色也是鹼性表現，不是金陽極一側的顏色。" },
      E: { verdict: "correct", reason: "陽極附近產生H⁺而呈酸性，紫甘藍汁會轉紅。" }
    },
    takeaway: "水電解時，陽極附近偏酸、陰極附近偏鹼；指示劑能把差異顯示出來。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-93-54": {
    encouragement: "數字看起來很大時，照「原子數→莫耳數→質量→公斤」四站前進，就不會亂。",
    keyIdea: "總碳原子數為10⁹×7.2×10¹⁷＝7.2×10²⁶，再用亞佛加厥數換算質量。",
    steps: ["總原子數＝7.2×10²⁶，約為1200 mol碳。", "質量＝1200×12＝14400 g＝14.4 kg，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.12 kg少算了整束十億條奈米碳管的巨大倍數。" },
      B: { verdict: "incorrect", reason: "2.40 kg不是依總原子數除以亞佛加厥數所得。" },
      C: { verdict: "incorrect", reason: "7.20 kg只有正確值的一半。" },
      D: { verdict: "correct", reason: "7.2×10²⁶個碳原子相當於1200 mol，即14.4 kg。" },
      E: { verdict: "incorrect", reason: "28.8 kg是正確值的兩倍，可能多乘了一次係數2。" }
    },
    takeaway: "微觀粒子換質量：先除以6.0×10²³求莫耳，再乘莫耳質量。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-24": {
    encouragement: "溶解度曲線只要看同一溫度的高度；曲線近乎水平，就表示那段溫度影響很小。",
    keyIdea: "圖中50～60℃曲線大致水平，因此兩個溫度的溶解度約相同。",
    steps: ["沿著曲線比較50℃與60℃的高度。", "兩點幾乎一樣高，所以C正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "曲線並非一路隨溫度上升，不能說溶解度持續增大。" },
      B: { verdict: "incorrect", reason: "這種鹽降溫時溶解度未明顯下降，降溫不利於大量析晶。" },
      C: { verdict: "correct", reason: "50～60℃的曲線近乎水平，溶解度大致相等。" },
      D: { verdict: "incorrect", reason: "由圖讀得10℃的溶解度約為10克，不是18克；投入30克後仍會有約20克未溶。" }
    },
    takeaway: "溶解度是特定溫度下的飽和上限，不等於實際投入或實際溶解的任意質量。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-46": {
    encouragement: "曲線愈往右，代表分子整體跑得愈快、溫度愈高；但同溫下仍有快有慢。",
    keyIdea: "T₃分布最偏右，溫度最高；升溫增加高動能分子的比例，使有效碰撞增多。",
    steps: ["依曲線由左到右判得T₁＜T₂＜T₃。", "升溫後更多分子具有足夠能量參與反應，所以反應加快，選A、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "T₃曲線最往高速側移，T₂次之，T₁最低。" },
      B: { verdict: "incorrect", reason: "曲線位置顯示T₃最高，不是最低。" },
      C: { verdict: "incorrect", reason: "同一溫度下仍呈分布曲線，表示分子速率並不完全相同。" },
      D: { verdict: "correct", reason: "升溫使高動能分子比例增加，有效碰撞更多，反應速率增快。" },
      E: { verdict: "incorrect", reason: "升溫時高動能分子數目應增加，不是減少。" }
    },
    takeaway: "溫度代表分子平均動能，但一群分子的速率仍然有分布。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-54": {
    encouragement: "電解池兩極的名稱很多，但最穩的口訣只有一個：陽極氧化、陰極還原。",
    keyIdea: "陽極發生失去電子的氧化反應；水電解時陽極產生氧氣。",
    steps: ["陽極把電子送往外電路，電極附近物質失去電子。", "失去電子就是氧化，因此選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "還原反應發生在陰極，不是陽極。" },
      B: { verdict: "incorrect", reason: "中和是酸與鹼反應，不是陽極的基本電極反應分類。" },
      C: { verdict: "correct", reason: "陽極進行氧化反應，水電解時可生成氧氣。" },
      D: { verdict: "incorrect", reason: "燃燒是與氧快速反應，不是陽極反應的通稱。" }
    },
    takeaway: "記住「陽氧陰還」：陽極氧化，陰極還原。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-55": {
    encouragement: "找異常值時，先比相同條件的實驗；第1與第2次條件完全相同，最容易抓出離群值。",
    keyIdea: "同為20分鐘、1%硫酸鈉時，第2次氣體量明顯偏高，且不符合其他實驗的時間比例。",
    steps: ["第1、2次條件相同，理應得到接近的氣體體積。", "第2次的25.0與50.1 mL明顯高於整體規律，應刪除，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第1次數據與第4次按時間比例換算相當接近，並非離群值。" },
      B: { verdict: "correct", reason: "相同條件下第2次比第1次高約四分之一，也偏離其他實驗的線性趨勢。" },
      C: { verdict: "incorrect", reason: "第3次與同條件的第5次幾乎相同，重現性良好。" },
      D: { verdict: "incorrect", reason: "第4次是第1次時間的三倍，氣體量也約三倍，符合規律。" },
      E: { verdict: "incorrect", reason: "第5次與第3次數據非常接近，不應刪除。" }
    },
    takeaway: "判斷人為誤差要找同條件重複實驗，並檢查是否符合整體比例。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-94-56": {
    encouragement: "電解質的工作是幫助導電，最好不要自己在電極上搶先反應。",
    keyIdea: "Cu²⁺容易在陰極得到電子析出銅，會干擾原本的水電解，因此CuSO₄不能替代。",
    steps: ["檢查各物質的離子是否會比水更容易在電極反應。", "Cu²⁺會在陰極還原成銅，改變產氣結果，所以選C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "稀硫酸能提供可移動離子並協助導電，不會析出金屬。" },
      B: { verdict: "incorrect", reason: "在本題條件下Mg²⁺不易在水溶液陰極析出，較不干擾水的電解。" },
      C: { verdict: "correct", reason: "Cu²⁺容易得到電子形成銅，會和產氫反應競爭並改變實驗。" },
      D: { verdict: "incorrect", reason: "K⁺不易在水溶液中析出，K₂SO₄可主要作導電電解質。" }
    },
    takeaway: "選電解質不只要能導電，也要避免離子在電極上發生額外反應。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-49": {
    encouragement: "反應係數就藏在濃度變化量裡；只看起點和終點相差多少即可。",
    keyIdea: "由圖得X減少0.2 M、Y減少0.4 M、Z增加0.2 M，比例為1：2：1。",
    steps: ["讀圖：ΔX＝−0.2、ΔY＝−0.4、ΔZ＝＋0.2 M。", "將比例化簡成1：2：1，反應式為X＋2Y→Z，選B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此式要求X與Y等量消耗，但圖中Y的消耗量是X的兩倍。" },
      B: { verdict: "correct", reason: "X、Y、Z的濃度變化量比正好是1：2：1。" },
      C: { verdict: "incorrect", reason: "圖中不是X消耗較多，而是Y消耗較多。" },
      D: { verdict: "incorrect", reason: "Z的增加量與X減少量相同，不是兩倍。" },
      E: { verdict: "incorrect", reason: "雖然X與Y消耗比正確，但Z係數應是1，不是2。" }
    },
    takeaway: "固定體積下，濃度變化量的比就是反應係數的比。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-95-50": {
    encouragement: "催化劑像走捷徑：只讓系統更快到達同一個平衡，不會把終點搬走。",
    keyIdea: "催化劑同時加快正、逆反應，所以初始濃度與平衡濃度不變，只縮短達到平衡的時間。",
    steps: ["先保留原圖的起點與最後平台高度。", "再選出曲線較早變平、但終點相同的A圖。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "三條曲線起點與平衡濃度不變，只更快到達平台，符合催化劑作用。" },
      B: { verdict: "incorrect", reason: "曲線變化較慢，沒有呈現催化劑使反應加快。" },
      C: { verdict: "incorrect", reason: "圖中改變了X、Y、Z的平衡濃度，催化劑不會改變平衡組成。" },
      D: { verdict: "incorrect", reason: "此圖的終點濃度與原圖不同，等於改變了反應平衡。" },
      E: { verdict: "incorrect", reason: "圖中反應物幾乎耗盡、產物大增，並非只加快到達原平衡。" }
    },
    takeaway: "催化劑改變到達平衡的速度，不改變平衡常數與平衡濃度。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-23": {
    encouragement: "離子不難找：數字是質子數，黑點是電子數；兩者不一樣就是帶電。",
    keyIdea: "D圖原子核有12個質子，核外只有10個電子，淨電荷為＋2，是離子。",
    steps: ["逐圖比較質子數和黑點總數。", "D的12個質子與10個電子不相等，因此是Mg²⁺，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "9個質子配9個電子，正負電量相抵，是中性原子。" },
      B: { verdict: "incorrect", reason: "10個質子配10個電子，總電荷為零。" },
      C: { verdict: "incorrect", reason: "11個質子配11個電子，是中性原子。" },
      D: { verdict: "correct", reason: "12個質子只有10個電子，少兩個電子而帶＋2電荷。" }
    },
    takeaway: "淨電荷＝質子數－電子數；不等於零時就是離子。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-25": {
    encouragement: "先從「易溶、鹼性、有氣味、比空氣輕」認出氨，再選不能用水、且適合輕氣體的收集法。",
    keyIdea: "丙是NH₃，極易溶於水且比空氣輕，應用向下排空氣法收集。",
    steps: ["丙的密度比0.60且水溶液呈鹼性，可判定為氨氣。", "氨不能排水收集，又比空氣輕，應使用倒置容器的B裝置。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A是排水集氣法；氨極易溶於水，會大量溶解而收集不到。" },
      B: { verdict: "correct", reason: "倒置集氣瓶可讓較輕的氨上升並把空氣向下排出。" },
      C: { verdict: "incorrect", reason: "正立集氣瓶較適合比空氣重的氣體，氨容易向上逸散。" }
    },
    takeaway: "選收氣法先看是否溶於水，再比較氣體與空氣的密度。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-27": {
    encouragement: "放熱溶解可想成系統本來就會放熱；再升溫時，平衡會讓溶解變少。",
    keyIdea: "若升溫使溶解度下降，表示溶解方向放熱；圖中無水Na₂SO₄曲線隨溫度升高而下降。",
    steps: ["在圖上找溫度升高時向下走的溶解度曲線。", "Na₂SO₄的曲線明顯下降，故其溶解為放熱，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NaNO₃溶解度隨溫度大幅上升，較符合吸熱溶解。" },
      B: { verdict: "incorrect", reason: "CaCl₂曲線隨溫度上升而增大，並非本圖判定的放熱曲線。" },
      C: { verdict: "incorrect", reason: "KCl曲線緩慢上升，表示升溫有利於溶解。" },
      D: { verdict: "incorrect", reason: "十水合硫酸鈉曲線在所示範圍先上升，不能選作持續下降的曲線。" },
      E: { verdict: "correct", reason: "無水Na₂SO₄的溶解度隨溫度上升而下降，顯示溶解方向放熱。" }
    },
    takeaway: "由曲線判斷：升溫溶得更多通常是吸熱；升溫反而溶得更少通常是放熱。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-96-53": {
    encouragement: "把能量圖想成山坡：活化能是要翻過的山高，反應熱是起點與終點的高度差。",
    keyIdea: "生成HI放熱9 kJ；I₂昇華吸熱；放熱反應的逆向活化能比正向高9 kJ。",
    steps: ["式（2）把9 kJ寫在產物側，正反應為放熱。", "正、逆活化能相差9 kJ；催化劑同時加快兩向，平衡時兩速率相等但不為零，選A、B、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "熱量在產物側，生成HI時放出9 kJ，是放熱反應。" },
      B: { verdict: "correct", reason: "固態碘變成氣態需克服粒子間作用力，因此必須吸熱。" },
      C: { verdict: "incorrect", reason: "催化劑降低正、逆反應的活化能，兩個方向都會加快。" },
      D: { verdict: "correct", reason: "正反應放熱9 kJ，所以逆反應活化能＝169＋9＝178 kJ。" },
      E: { verdict: "incorrect", reason: "化學平衡是動態平衡，正逆反應仍持續，且速率相等而不為零。" }
    },
    takeaway: "催化劑不改變能量高低差；平衡也不是停止，而是正逆反應同速進行。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-42": {
    encouragement: "題目要的是「固體表面催化」，找出反應物在固體催化劑表面進行的例子即可。",
    keyIdea: "MnO₂催化H₂O₂分解，以及汽車觸媒轉化器，都是在固體表面進行的催化反應。",
    steps: ["先確認反應中是否明確存在不被消耗的固體催化劑。", "C的MnO₂與E的觸媒表面符合，選C、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一般汽油燃燒是燃料與氧氣反應，題目未提供固體表面催化劑。" },
      B: { verdict: "incorrect", reason: "氫氣在氧氣中燃燒不必依靠固體表面催化。" },
      C: { verdict: "correct", reason: "H₂O₂分子在固體MnO₂表面加速分解，屬表面催化。" },
      D: { verdict: "incorrect", reason: "銅和汞離子發生置換反應，固體銅是反應物，不是催化劑。" },
      E: { verdict: "correct", reason: "CO在汽車觸媒轉化器的固體觸媒表面被氧化成CO₂。" },
      F: { verdict: "incorrect", reason: "這是溶液中的離子生成BaSO₄沉澱，不是固體表面催化。" }
    },
    takeaway: "催化劑會提供較容易反應的路徑，但反應前後本身不被永久消耗。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-53": {
    encouragement: "氫氧化鋁很特別，酸太多或鹼太多都會幫它溶解，所以中間最低、兩邊較高。",
    keyIdea: "0.0001 M HCl約為pH 4，此時溶解度2.0×10⁻² M，遠大於接近中性的純水。",
    steps: ["0.0001 M HCl的[H⁺]＝10⁻⁴ M，所以pH約4。", "表中pH 4的溶解度遠大於pH約7的純水，因此選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "pH 6的溶解度很小，不是表中的最大值。" },
      B: { verdict: "incorrect", reason: "酸性愈強時Al(OH)₃會被H⁺消耗而更易溶，趨勢相反。" },
      C: { verdict: "incorrect", reason: "強鹼中會形成可溶的鋁酸根物種，OH⁻愈多時溶解度反而增加。" },
      D: { verdict: "correct", reason: "pH 4時為2.0×10⁻² M，明顯大於純水附近的溶解度。" }
    },
    takeaway: "兩性氫氧化物能溶於酸，也能溶於強鹼。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-54": {
    encouragement: "數值從十億分之一跨到十分之一時，普通刻度會擠在一起；對數能把每個十倍差距排開。",
    keyIdea: "溶解度跨越多個10的次方，取log後可把乘10轉成等距加1，最方便作圖。",
    steps: ["表中溶解度約從10⁻⁷到10⁻¹，跨越六個數量級。", "取log能壓縮範圍又保留倍數差異，選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "全部乘1000只換單位，最大與最小的倍數差仍不變。" },
      B: { verdict: "incorrect", reason: "全部除1000同樣不能縮小相對範圍。" },
      C: { verdict: "incorrect", reason: "加1000會讓所有小數值看起來幾乎相同，反而看不出變化。" },
      D: { verdict: "incorrect", reason: "減1000也會把差異淹沒在接近−1000的數值中。" },
      E: { verdict: "correct", reason: "log可將跨多個數量級的資料壓縮到有限且易比較的尺度。" }
    },
    takeaway: "資料跨很多個10倍時，對數座標比直接放大或縮小更好讀。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-55": {
    encouragement: "分層只靠兩件事：先判斷當時是固體還是液體，再讓密度小的浮在上面。",
    keyIdea: "0℃時水有冰與液態水共存；冰密度最小，四氯化碳液體密度最大。",
    steps: ["0℃時冰浮在液態水上。", "液態CCl₄比水密度大而沉底，順序為冰、水、CCl₄，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "密度由小到大為H₂O(s)、H₂O(l)、CCl₄(l)，正好由上到下排列。" },
      B: { verdict: "incorrect", reason: "CCl₄液體密度最大，不會浮在最上層。" },
      C: { verdict: "incorrect", reason: "液態CCl₄比液態水密度大，應在水的下方。" },
      D: { verdict: "incorrect", reason: "0℃時CCl₄為液態，而且冰應浮在液態水上。" },
      E: { verdict: "incorrect", reason: "0℃有冰水共存，且此時不應列出固態CCl₄。" }
    },
    takeaway: "互不相溶物質分層時，密度愈小的位置愈上方。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-97-56": {
    encouragement: "這題仍用同一招：從圖判斷−20℃有哪些相，再依密度曲線由小排到大。",
    keyIdea: "圖示條件下有冰、液態CCl₄與固態CCl₄；密度依序增加，因此由上到下為D。",
    steps: ["由圖判讀−20℃時水為固態，CCl₄有液、固兩相。", "比較密度：冰最小，液態CCl₄次之，固態CCl₄最大，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "−20℃時不列液態水，且還需考慮CCl₄的固相。" },
      B: { verdict: "incorrect", reason: "−20℃下水不是液態層。" },
      C: { verdict: "incorrect", reason: "冰的密度比液態CCl₄小，應位在更上方。" },
      D: { verdict: "correct", reason: "依圖中各相與密度，由上而下是冰、液態CCl₄、固態CCl₄。" },
      E: { verdict: "incorrect", reason: "固態CCl₄密度較大，應沉在液態CCl₄下方。" }
    },
    takeaway: "相態決定有哪些層，密度則決定每一層的上下順序。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-23": {
    encouragement: "鐵鏽形成可想成一個小電池反應；除了氧，還需要水讓離子能移動。",
    keyIdea: "鐵在有氧又有水的環境中較容易發生電化學腐蝕，形成含水的鐵鏽。",
    steps: ["氧是氧化劑，但腐蝕反應還需要能傳遞離子的環境。", "水提供這個環境，所以鐵生鏽還必須有水，選A。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水能讓離子移動並參與鏽蝕反應，是鐵生鏽的重要條件。" },
      B: { verdict: "incorrect", reason: "鹽會加速鏽蝕，但不是所有生鏽情況都必須有鹽。" },
      C: { verdict: "incorrect", reason: "氮氣通常相當安定，不是鐵生鏽的必要反應物。" },
      D: { verdict: "incorrect", reason: "氯或氯離子可能加速腐蝕，但並非生鏽必備條件。" },
      E: { verdict: "incorrect", reason: "一般空氣中的氧氣已足以參與鏽蝕，不需要臭氧。" }
    },
    takeaway: "鐵生鏽的基本條件是氧和水；鹽常是加速者，不是必要條件。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-31": {
    encouragement: "先把克數換成莫耳，再依反應式乘4，最後記得只反應50%。",
    keyIdea: "3.42克蔗糖為0.01 mol，反應一半是0.005 mol，可生成0.020 mol CO₂。",
    steps: ["蔗糖莫耳數＝3.42÷342＝0.010 mol，實際發酵0.005 mol。", "CO₂為0.005×4＝0.020 mol；STP體積＝0.020×22.4 L＝448 mL，選D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "112 mL少算了反應式中1莫耳蔗糖生成4莫耳CO₂的比例。" },
      B: { verdict: "incorrect", reason: "224 mL相當於0.010 mol CO₂，仍少了一半。" },
      C: { verdict: "incorrect", reason: "336 mL不符合0.020 mol乘22.4 L/mol的換算。" },
      D: { verdict: "correct", reason: "0.020 mol CO₂在STP下體積為0.448 L，即448 mL。" },
      E: { verdict: "incorrect", reason: "896 mL是把蔗糖當成100%發酵，漏掉題目的50%。" }
    },
    takeaway: "計量題依序做：質量→莫耳→係數比→氣體體積，並在正確位置套用百分率。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-63": {
    encouragement: "酚酞在偏鹼時變色，所以只要看滴定曲線的陡直區是否穿過約pH 8～10。",
    keyIdea: "甲、乙、丙的當量點陡變區都涵蓋酚酞變色範圍；丁的陡變區偏酸，不適合。",
    steps: ["在四條曲線上找酸鹼恰好反應附近的陡直區。", "甲、乙、丙的陡直區穿過酚酞範圍，丁沒有，因此選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丁的當量點陡變區偏酸，不適合用偏鹼變色的酚酞。" },
      B: { verdict: "incorrect", reason: "此組包含不適合的丁，反而漏掉適合的甲。" },
      C: { verdict: "incorrect", reason: "丁不適合，而丙的陡直區可涵蓋酚酞變色範圍。" },
      D: { verdict: "incorrect", reason: "同樣錯把丁列入，且漏掉可用酚酞的乙。" },
      E: { verdict: "correct", reason: "甲、乙、丙在終點附近都快速穿過約pH 8～10，能清楚顯色。" }
    },
    takeaway: "選指示劑不是只看終點pH，而是看它的變色範圍是否落在曲線陡直區。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-98-65": {
    encouragement: "反應後可能形成好幾種鹽，最不容易溶的那一種會最先以晶體跑出來。",
    keyIdea: "飽和食鹽水吸收NH₃與CO₂後生成NaHCO₃；表中NaHCO₃溶解度最低，容易析晶。",
    steps: ["反應可形成NaHCO₃與NH₄Cl。", "30℃時NaHCO₃溶解度只有12.1 g/100 g水，是表中最低，因此析出B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "NaCl溶解度36.5，且本來就在食鹽水中，不是新生成的低溶解度晶體。" },
      B: { verdict: "correct", reason: "NaHCO₃溶解度最低，生成後最容易超過飽和而析出。" },
      C: { verdict: "incorrect", reason: "Na₂CO₃溶解度30.0，且這個步驟先生成NaHCO₃。" },
      D: { verdict: "incorrect", reason: "(NH₄)₂CO₃溶解度較高，不會優先析出。" },
      E: { verdict: "incorrect", reason: "NH₄Cl溶解度41.1，會留在溶液中，不是主要晶體。" }
    },
    takeaway: "複分解析晶題可比較溶解度：新產物中溶解度最小者最容易沉澱或析出。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  }
});
