window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-94-13": {
    encouragement: "年齡結構就像族群的未來預告：幼年個體多，代表後續有較多人可能進入生殖年齡。",
    keyIdea: "金字塔型年齡結構的幼年比例高，通常表示出生率高於死亡率，族群有成長趨勢。",
    steps: [
      "族群密度是單位空間內的個體數，不包含單位時間。",
      "比較幼年、成年與老年比例，可以推測族群未來增減。",
      "底部寬的金字塔型代表幼年多，通常是成長中的族群。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "族群密度是單位面積或體積內的個體數，不需要再除以時間。" },
      B: { verdict: "incorrect", reason: "年齡結構能顯示未來可生殖個體的多寡，因此可用來推測族群趨勢。" },
      C: { verdict: "correct", reason: "金字塔底部寬表示幼年個體多，通常反映出生率較高且族群正在增加。" },
      D: { verdict: "incorrect", reason: "人類幼年至中年的死亡率通常較低，進入老年後死亡率才明顯上升。" }
    },
    takeaway: "年齡結構底寬多成長、上下近等多穩定、底窄多衰退。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-15": {
    encouragement: "溫暖又有充足雨量的森林能提供許多不同棲位，通常也容納最多物種。",
    keyIdea: "台灣的熱帶季風林溫暖、雨量豐富且植被分層複雜，物種多樣性最高。",
    steps: [
      "溫度與水分會限制植物生產力及生物生存。",
      "熱帶季風林有喬木、灌木與草本等多層結構。",
      "棲地與食物種類多，能支持較多不同物種。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "熱帶季風林氣候溫暖、雨量豐富且植被分層多，通常具有最高物種多樣性。" },
      B: { verdict: "incorrect", reason: "針葉林多位於較冷的高海拔，環境限制較強，物種數通常較少。" },
      C: { verdict: "incorrect", reason: "一般闊葉林物種豐富，但題列類型中仍低於溫暖且結構複雜的熱帶季風林。" },
      D: { verdict: "incorrect", reason: "草原以草本為主，垂直分層與棲位種類通常少於森林。" }
    },
    takeaway: "氣候溫暖濕潤、棲地分層越多，通常越能支持多樣物種。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-17": {
    encouragement: "抗藥性發生在微生物族群，不是病患的基因被抗生素改變。",
    keyIdea: "微生物的突變產生抗藥差異，抗生素再篩選出能存活繁殖的個體。",
    steps: [
      "部分黴菌能製造抑制細菌的抗生素。",
      "微生物繁殖快，短時間內產生大量後代與突變機會。",
      "用藥後抗藥微生物較易存活，使抗藥基因比例升高。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "青黴菌等某些黴菌確實能產生抗生素，這項敘述正確。" },
      B: { verdict: "incorrect", reason: "繁殖快會產生大量後代，出現並累積抗藥變異的機會較高，敘述正確。" },
      C: { verdict: "incorrect", reason: "致病微生物的基因突變可造成抗藥性，之後再受抗生素篩選，敘述正確。" },
      D: { verdict: "correct", reason: "抗藥性來自微生物的遺傳變異，不是使用抗生素的病患發生抗藥基因突變。" }
    },
    takeaway: "抗生素篩選微生物，不會把病患的基因變成抗藥。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-18": {
    encouragement: "海岸生物多不多，要看是否有穩固附著面與生產者；沙粒一直移動，生活較不容易。",
    keyIdea: "沙岸底質不穩、附著生產者較少，因此生物相通常比岩岸貧乏。",
    steps: [
      "岩岸提供穩固表面，藻類與固著動物較容易附著。",
      "沙岸受浪擾動，底質移動且生產者較少。",
      "河口鹽度變化大，生物通常要能耐受廣泛鹽度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "河口鹽度隨潮汐與河水改變，魚類多需具廣鹽性，不是狹鹽性。" },
      B: { verdict: "incorrect", reason: "大陸棚淺海區一般指約水深二百公尺以內，不是二百至四百公尺。" },
      C: { verdict: "correct", reason: "沙岸底質不穩且附著藻類等生產者較少，所以生物種類通常比岩岸少。" },
      D: { verdict: "incorrect", reason: "造礁珊瑚是刺絲胞動物，不是軟體動物；珊瑚也不是生產者本身。" }
    },
    takeaway: "河口要耐鹽度變化；岩岸附著面多，沙岸底質較不穩。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-19": {
    encouragement: "環境題常考「看不見的後果」：化學物質可能破壞臭氧，也可能沿食物鏈放大。",
    keyIdea: "氟氯碳化物釋出的氯自由基會破壞平流層臭氧。",
    steps: [
      "氟氯碳化物到高空受紫外線分解，可釋出氯自由基。",
      "氯自由基會連續催化臭氧分解，使臭氧層變薄。",
      "保護區有助保存多樣性；熱廢水即使無輻射也可能傷害生態。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "氟氯碳化物在高空釋出含氯物質，會催化臭氧分解並破壞臭氧層。" },
      B: { verdict: "incorrect", reason: "國家公園與保護區的目的之一就是保存棲地與生物多樣性。" },
      C: { verdict: "incorrect", reason: "DDT 生物放大會使鳥類蛋殼變薄、易破，不是使蛋殼變硬。" },
      D: { verdict: "incorrect", reason: "核電廠溫排水即使沒有輻射，也可能升高水溫、降低溶氧並傷害珊瑚。" }
    },
    takeaway: "沒有輻射不代表沒有影響；溫度改變本身也可能造成生態壓力。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-95-16": {
    encouragement: "雌雄各半時，每兩隻蝴蝶中只有一隻雌蝶產卵，所以先把 100 除以 2。",
    keyIdea: "雌雄比 1：1 時，公式中的 f/(m+f)=1/2，下一代增加倍數為 100×1/2=50。",
    steps: [
      "每隻雌蝶平均產卵 E=100。",
      "雌雄各半，所以 f/(m+f)=1/2。",
      "代入 Nb=100×1/2=50，下一代為原族群的 50 倍。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一倍沒有把每隻雌蝶可產一百顆卵的繁殖力算入。" },
      B: { verdict: "incorrect", reason: "兩倍只反映簡單增加，沒有代入題目所給的產卵數與雌性比例。" },
      C: { verdict: "correct", reason: "雌性占一半，代入公式為 100×1/2=50 倍。" },
      D: { verdict: "incorrect", reason: "一百倍是假設每一隻親代都能各產一百顆卵，忽略雄蝶不產卵。" },
      E: { verdict: "incorrect", reason: "兩百倍同時高估了雌性比例與每隻雌蝶的產卵貢獻。" }
    },
    takeaway: "族群繁殖倍數要看雌性比例，不是只看每隻雌蝶產幾顆卵。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-95-17": {
    encouragement: "每代乘 50，就依序算 50、2500、125000、6250000，不必一次處理很大的指數。",
    keyIdea: "族群每代增為 50 倍，50 的四次方才首次超過一百萬。",
    steps: [
      "第一代：50；第二代：50²=2500。",
      "第三代：50³=125000，仍未超過一百萬。",
      "第四代：50⁴=6250000，首次超過一百萬。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一代只有 50 隻，遠低於一百萬。" },
      B: { verdict: "incorrect", reason: "兩代為 2500 隻，仍未達一百萬。" },
      C: { verdict: "incorrect", reason: "三代為 125000 隻，仍小於一百萬。" },
      D: { verdict: "correct", reason: "四代為 6250000 隻，是第一次超過一百萬。" },
      E: { verdict: "incorrect", reason: "第五代當然超過，但題目問至少幾代，第四代已達成。" }
    },
    takeaway: "遇到世代倍增題，逐代列數字，找到第一次超過門檻的世代。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-95-55": {
    encouragement: "疫苗像辨識照片；病毒表面蛋白變了，舊照片就可能認不準，所以要更新疫苗。",
    keyIdea: "流感病毒的單股 RNA 容易突變，使表面抗原改變，疫苗需依流行病毒株更新。",
    steps: [
      "流感病毒遺傳物質是單股 RNA，複製時突變率較高。",
      "突變可能改變血凝素與神經氨酸酶等表面蛋白。",
      "舊疫苗產生的抗體辨識力下降，因此常需重新接種。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "免疫系統不會固定每年全部更新，重新接種是因病毒抗原改變。" },
      B: { verdict: "incorrect", reason: "流感病毒的遺傳物質是單股 RNA，不是單股 DNA。" },
      C: { verdict: "correct", reason: "單股 RNA 複製時容易發生突變，會產生新的病毒變異。" },
      D: { verdict: "incorrect", reason: "流感潛伏期通常很短，不是感染後潛伏一年。" },
      E: { verdict: "correct", reason: "表面蛋白抗原特性改變後，先前疫苗產生的抗體可能無法有效辨識。" }
    },
    takeaway: "流感疫苗常更新，是因病毒變、抗原變，不是人體免疫每年歸零。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-95-56": {
    encouragement: "H5N1 的名稱已經給線索：H5 是血凝素第 5 型，N1 是神經氨酸酶第 1 型。",
    keyIdea: "H5N1 屬 A 型流感；H5 不同於常見人流感 H1～H3，但 N1 可見於人流感。",
    steps: [
      "A、B、C 型依核蛋白與基質蛋白抗原性分類，H5N1 屬 A 型。",
      "常見人流感血凝素為 H1、H2、H3，與 H5 不同。",
      "常見人流感神經氨酸酶包含 N1、N2，所以 H5N1 的 N1 並非完全不同。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H5N1 主要是禽流感病毒，宿主向來不是以人類細胞為主。" },
      B: { verdict: "correct", reason: "H5N1 被歸為 A 型流感，表示其核蛋白與基質蛋白抗原性符合 A 型。" },
      C: { verdict: "incorrect", reason: "H5N1 可造成禽鳥疾病，不能說只造成人流感而不造成雞的流感。" },
      D: { verdict: "correct", reason: "H5 與常見人流感的 H1、H2、H3 都不同。" },
      E: { verdict: "incorrect", reason: "N1 正是常見人流感可能具有的神經氨酸酶亞型之一。" }
    },
    takeaway: "型別看內部蛋白；H、N 亞型看病毒表面的兩種蛋白。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-96-2": {
    encouragement: "這題只選文章能直接支持的推論；不要把「部分高山」擴大成「所有高山」。",
    keyIdea: "文章明說所有蜘蛛都會吐絲，因此台灣已記錄的蜘蛛也全都會吐絲。",
    steps: [
      "先找文章中的全稱敘述：「所有蜘蛛都會吐絲」。",
      "台灣記錄到的四百多種都屬蜘蛛，因此都符合這項特徵。",
      "其他選項多把合歡山局部結果過度推廣，或加入文章沒有的比例關係。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "文章只說高山蜘蛛中狼蛛科比例高，不能推論牠是合歡山全部生物的優勢種。" },
      B: { verdict: "correct", reason: "文章指出所有蜘蛛都會吐絲，所以台灣已記錄的四百多種蜘蛛也都會吐絲。" },
      C: { verdict: "incorrect", reason: "文章描述合歡山箭竹草原，不能擴大成台灣所有三千公尺以上高山。" },
      D: { verdict: "incorrect", reason: "文章只說海拔越高種類越少，沒有證據顯示按固定比例減少。" },
      E: { verdict: "incorrect", reason: "蜘蛛有八隻腳，不是六隻腳；六隻腳是昆蟲的特徵。" }
    },
    takeaway: "科學推論不能超出資料範圍；「某地」不等於「所有地方」。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-96-46": {
    encouragement: "生態互動不一定是壞事；掠食、競爭與寄生本來就是能量流動和族群調節的一部分。",
    keyIdea: "不能一概禁止所有外來種，也不能把自然的掠食、寄生與競爭說成能量失衡。",
    steps: [
      "生物防治可利用天敵減少農藥，但引進前需做風險評估。",
      "競爭與掠食會調節族群，也是食物網能量流動的正常過程。",
      "根瘤菌與豆科植物互利：菌獲養分，植物獲可利用的氮。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "妥善評估後利用天敵可控制病蟲害，是符合永續概念的生物防治。" },
      B: { verdict: "correct", reason: "外來種並非全部有害，應依風險評估管理，不能連安全且有益的生物防治物種都一概禁止。" },
      C: { verdict: "incorrect", reason: "生物共同生活時競爭有限的空間、食物、水與陽光，是常見自然現象。" },
      D: { verdict: "correct", reason: "掠食、寄生與競爭是自然食物網的一部分，不等於造成能量流轉不平衡。" },
      E: { verdict: "incorrect", reason: "根瘤菌固定氮並獲得植物供應的養分，與豆科植物屬互利共生。" }
    },
    takeaway: "自然互動不是失衡；外來種管理也要看證據與風險，不能一刀切。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-96-48": {
    encouragement: "巢中飛出的蜂不是被「教成」的，而是蜂卵在螟蛾幼蟲體內長大。",
    keyIdea: "狩獵蜂幼蟲以螟蛾幼蟲為食物來源，這是寄生性利用，不是收養或互利共生。",
    steps: [
      "成蜂把卵產在螟蛾幼蟲體內。",
      "蜂幼蟲孵化後取食宿主組織，從中取得生長能量。",
      "最後飛出的成蜂本來就是蜂，不是螟蛾被改造成蜂。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "蜂幼蟲在螟蛾幼蟲體內發育，所需物質與能量主要來自宿主。" },
      B: { verdict: "correct", reason: "真實情況是寄生蜂利用螟蛾幼蟲，不是把牠收養長大，因此養子比喻不合生態事實。" },
      C: { verdict: "incorrect", reason: "生物種類不會因教養而改變，飛出的蜂是由蜂卵發育而來。" },
      D: { verdict: "incorrect", reason: "螟蛾幼蟲受害而蜂得利，不是雙方都受益的互利共生。" },
      E: { verdict: "incorrect", reason: "題文描述的是蜂的幼蟲利用螟蛾幼蟲，沒有證據說成蜂以螟蛾為主要食物。" }
    },
    takeaway: "寄生蜂的下一代吃宿主長大；不是教養，也不是互利共生。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-96-59": {
    encouragement: "題目短文已給三個判斷線索：海洋風險、礦物封存、目前成本；逐句對照即可。",
    keyIdea: "海洋注入可能傷害生態，礦化屬碳封存，但現階段化學轉換仍耗能且昂貴。",
    steps: [
      "二氧化碳能吸收紅外線，是重要溫室氣體。",
      "把二氧化碳大量注入海洋可能改變海水酸鹼與生態。",
      "轉成碳酸鹽可長期儲存，但題文指出目前不具經濟效益。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "二氧化碳會吸收紅外線，與溫室效應直接相關。" },
      B: { verdict: "incorrect", reason: "水域優養化主要由氮、磷營養鹽過量引起，不是二氧化碳增加。" },
      C: { verdict: "correct", reason: "大量二氧化碳進入海水可能造成酸化，進而破壞海洋生態平衡。" },
      D: { verdict: "correct", reason: "把二氧化碳轉成穩定無機碳酸鹽礦保存，屬於碳封存方式。" },
      E: { verdict: "correct", reason: "題文指出化學製程耗能高且僅小規模應用，目前尚不具經濟效益。" }
    },
    takeaway: "技術可行不等於已能大量使用，還要評估生態風險、耗能與成本。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-23": {
    encouragement: "好標題要罩住全文，不只抓一個例子；本文談來源、危害，也談防治風險。",
    keyIdea: "全文主軸是台灣外來種的引入途徑，以及以天敵防治時必須注意的風險。",
    steps: [
      "前半說明外來種可能被有意或無意帶進台灣。",
      "中段以非洲大蝸牛等例子說明可能造成農業危害。",
      "後段討論引進天敵的成效與風險，因此標題要同時涵蓋來源與防治。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水稻只在開頭作為作物例子，不能涵蓋全文的外來種與防治內容。" },
      B: { verdict: "incorrect", reason: "非洲大蝸牛只是危害案例之一，文章還討論其他外來種與天敵引進。" },
      C: { verdict: "incorrect", reason: "歐洲舞蛾與鋸針蠅是國外警示案例，不是全文唯一主題。" },
      D: { verdict: "incorrect", reason: "文章重點不是全面分析外來種對農業的利弊，而是來源、危害與防治注意事項。" },
      E: { verdict: "correct", reason: "此標題同時涵蓋外來種如何進入台灣，以及引進天敵防治時應謹慎評估。" }
    },
    takeaway: "選標題要抓全文共同主軸，不能被單一故事或例子帶走。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-24": {
    encouragement: "外來種不是天生等於壞；有些成為作物或家畜，有些卻逃逸成害，關鍵是實際影響。",
    keyIdea: "外來種可帶來農業利用價值，也可能成為害蟲；生物防治並非萬靈丹。",
    steps: [
      "稻、甘蔗、玉米等外來作物對農業有利用價值。",
      "非洲大蝸牛等逃逸後可能危害作物。",
      "引進天敵有成功案例，也可能傷害非目標物種。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "文中指出有些外來種會隨船舶、貨物或人體無意間進入，不全是刻意引進。" },
      B: { verdict: "correct", reason: "外來作物可帶來利益，但外來害蟲與失控天敵也會造成危害，確實有利有弊。" },
      C: { verdict: "incorrect", reason: "文章明說引進天敵不是萬靈丹，還可能傷害許多非目標昆蟲。" },
      D: { verdict: "incorrect", reason: "鋸針蠅在美國造成額外生態危害，不能據此建議台灣引進。" },
      E: { verdict: "incorrect", reason: "接近六十種指的是已確認的外來農業有害動物，不是台灣全部外來種。" }
    },
    takeaway: "外來種要逐案評估；引進天敵前更要確認不會攻擊本地非目標物種。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-26": {
    encouragement: "野生稻有部分存活，表示族群內有遺傳差異；題目中的病原是細菌，不要偷換成病毒。",
    keyIdea: "人工育種可能降低遺傳變異；保存野生種有助維持水稻基因庫。",
    steps: [
      "人工品種全滅支持其遺傳組成較一致、缺少抗病差異。",
      "野生與栽培水稻仍是品種差異，討論的是遺傳多樣性，不是物種多樣性。",
      "病原是細菌，不能據此推論對病毒的適應力。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲合理，但乙把同一物種內的遺傳差異誤稱為物種多樣性。" },
      B: { verdict: "incorrect", reason: "甲合理，但題目測試的是細菌感染，不能支持丙所說的病毒適應力。" },
      C: { verdict: "correct", reason: "甲指出人工品種遺傳變異少；丁指出野生種消失會讓可用基因變異降低，兩者都合理。" },
      D: { verdict: "incorrect", reason: "乙混淆物種與遺傳多樣性，丙又把細菌感染改成病毒，兩者都不成立。" },
      E: { verdict: "incorrect", reason: "丁合理，但乙所述應是遺傳多樣性較高，不是物種多樣性。" },
      F: { verdict: "incorrect", reason: "丁合理，但丙沒有資料支持，因實驗病原是細菌而非病毒。" }
    },
    takeaway: "同種不同品種的差異屬遺傳多樣性；保存野生種就是保存基因庫。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-57": {
    encouragement: "題幹已說 TNX-355 是單株抗體；所有抗體的基本分子種類都是蛋白質。",
    keyIdea: "抗體由胺基酸組成，屬蛋白質。",
    steps: [
      "單株抗體是由同一細胞株製造、辨識特定目標的抗體。",
      "抗體由多條胺基酸鏈摺疊而成。",
      "因此 TNX-355 的分子類別是蛋白質。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核酸負責儲存或傳遞遺傳資訊，抗體不是 DNA 或 RNA。" },
      B: { verdict: "incorrect", reason: "脂質可構成細胞膜與儲能，但抗體不是脂質分子。" },
      C: { verdict: "incorrect", reason: "抗體可能帶有少量醣鏈修飾，但主要分子骨架是蛋白質。" },
      D: { verdict: "incorrect", reason: "維生素是少量必需有機物，不具抗體的專一辨識構造。" },
      E: { verdict: "correct", reason: "TNX-355 是單株抗體，而抗體由胺基酸鏈構成，屬蛋白質。" }
    },
    takeaway: "看到抗體、酵素或受體，通常先想到具有特定形狀的蛋白質。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-58": {
    encouragement: "這種藥不是直接追殺病毒，而是先占住 T 細胞的入口，讓病毒難以附著。",
    keyIdea: "TNX-355 與 T 細胞表面的 CD4 受體結合，阻斷愛滋病毒進入細胞。",
    steps: [
      "愛滋病毒感染時需要辨認並結合 T 細胞表面的 CD4。",
      "TNX-355 先和 CD4 受體結合。",
      "病毒與細胞的結合受阻，便較難進入 T 細胞。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題文指定目標是 T 細胞表面的 CD4，不是 B 細胞。" },
      B: { verdict: "correct", reason: "TNX-355 會與 T 細胞表面的 CD4 受體結合，阻止病毒附著。" },
      C: { verdict: "incorrect", reason: "題文描述藥物結合的是細胞受體，不是直接結合愛滋病毒。" },
      D: { verdict: "incorrect", reason: "它主要阻斷病毒與細胞結合，不是進入細胞後直接抑制病毒複製酵素。" },
      E: { verdict: "incorrect", reason: "TNX-355 不直接殺死病毒，而是降低病毒感染 T 細胞的機會。" }
    },
    takeaway: "阻斷受體像把門鎖先蓋住，讓病毒找不到進入細胞的入口。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-97-60": {
    encouragement: "逐句檢查膜層數與呼吸位置：溶體、核糖體正確；葉綠體與粒線體的描述各錯一處。",
    keyIdea: "溶體可源自高基氏體並分解物質；核糖體無膜且負責蛋白質合成。",
    steps: [
      "溶體含分解酵素，可分解老舊胞器。",
      "核糖體不具膜，是蛋白質合成場所。",
      "葉綠體有雙層外膜；粒線體進行有氧呼吸，不是無氧呼吸。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲、乙都正確：溶體參與胞內分解，核糖體負責蛋白質合成。" },
      B: { verdict: "incorrect", reason: "甲正確，但丙把葉綠體錯說成單層膜胞器；葉綠體外有雙層膜。" },
      C: { verdict: "incorrect", reason: "甲正確，但丁錯在粒線體主要進行有氧呼吸，不是無氧呼吸。" },
      D: { verdict: "incorrect", reason: "乙正確，但丙的葉綠體膜構造描述錯誤。" },
      E: { verdict: "incorrect", reason: "乙正確，但丁把粒線體的有氧呼吸功能寫成無氧呼吸。" },
      F: { verdict: "incorrect", reason: "丙與丁各有錯誤，分別混淆葉綠體膜層與粒線體呼吸類型。" }
    },
    takeaway: "葉綠體、粒線體都有雙層外膜；粒線體是有氧呼吸的重要場所。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-27": {
    encouragement: "能大量提供熱量的三大營養素是醣類、蛋白質與脂質；礦物質和維生素不供能。",
    keyIdea: "蛋白質與碳水化合物熱量不足時，缺少的主要供能成分最可能是脂質。",
    steps: [
      "醣類與蛋白質每公克約提供 4 大卡。",
      "脂質每公克約提供 9 大卡，能量密度最高。",
      "鐵、鈉、鈣與維生素 C 不會成為主要熱量來源。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鐵是微量礦物質，參與血紅素等功能，但不提供熱量。" },
      B: { verdict: "incorrect", reason: "鈉是調節體液與神經功能的礦物質，不會提供能量。" },
      C: { verdict: "incorrect", reason: "鈣參與骨骼與細胞功能，但不是供能營養素。" },
      D: { verdict: "correct", reason: "脂質是主要供能營養素，每公克約 9 大卡，可補足標示中的熱量差額。" },
      E: { verdict: "incorrect", reason: "維生素 C 參與生理調節，不是主要能量來源。" }
    },
    takeaway: "醣類 4、蛋白質 4、脂質 9 大卡／公克；維生素與礦物質不供能。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-28": {
    encouragement: "碳水化合物是含碳的有機物，但「含碳」不代表就是碳水化合物；要找糖類與澱粉。",
    keyIdea: "澱粉、蔗糖與葡萄糖都屬碳水化合物；元素碳和水不是。",
    steps: [
      "葡萄糖是單醣，蔗糖是雙醣。",
      "澱粉由許多葡萄糖連接而成，屬多醣。",
      "碳是元素，水是無機物，兩者不屬碳水化合物。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是元素碳、乙是水，兩者都不是碳水化合物。" },
      B: { verdict: "incorrect", reason: "丙澱粉、丁蔗糖都是碳水化合物，但漏掉戊葡萄糖。" },
      C: { verdict: "incorrect", reason: "丁蔗糖與戊葡萄糖都是糖類，但漏掉同屬碳水化合物的丙澱粉。" },
      D: { verdict: "incorrect", reason: "丙、戊正確，但甲只是碳元素，且此組漏掉丁蔗糖。" },
      E: { verdict: "correct", reason: "丙澱粉、丁蔗糖、戊葡萄糖分別是多醣、雙醣、單醣，都屬碳水化合物。" }
    },
    takeaway: "葡萄糖是單醣、蔗糖是雙醣、澱粉是多醣。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-32": {
    encouragement: "低倍鏡的特色可以一起記：視野大、較亮、物鏡離玻片較遠。",
    keyIdea: "使用 4 倍最低倍物鏡時，視野最大且在相同光源下最亮。",
    steps: [
      "總倍率為 10 倍目鏡乘 4 倍物鏡，共 40 倍。",
      "倍率越低，看到的範圍越大，進入眼睛的光也較多。",
      "病毒遠小於光學顯微鏡解析極限，無法直接觀察。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "低倍物鏡較短，對焦後通常離載玻片較遠，不是最近。" },
      B: { verdict: "incorrect", reason: "4 倍物鏡倍率最低，因此能看到的視野範圍最大。" },
      C: { verdict: "correct", reason: "相同光源下，低倍鏡視野較大且通常較明亮。" },
      D: { verdict: "incorrect", reason: "一般病毒小於複式光學顯微鏡解析能力，需要電子顯微鏡等工具。" }
    },
    takeaway: "低倍：亮、大、遠；高倍：暗、小、近、細節多。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-33": {
    encouragement: "這題的陷阱在內質網：動物和植物都是真核細胞，所以兩者都有內質網。",
    keyIdea: "內質網存在於動物與植物細胞；中心粒常見於動物細胞。",
    steps: [
      "細胞核與粒線體外都有雙層膜。",
      "原生質膜與核糖體是原核、真核細胞共有構造。",
      "內質網是真核胞器，動物與植物細胞都有。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "細胞核有核膜雙層膜，粒線體也有外膜與內膜，敘述正確。" },
      B: { verdict: "incorrect", reason: "原生質膜與核糖體存在於原核及真核細胞，敘述正確。" },
      C: { verdict: "correct", reason: "中心粒常見於動物細胞，但內質網同時存在於動物與植物細胞，因此整句錯誤。" },
      D: { verdict: "incorrect", reason: "典型植物細胞具有葉綠體與細胞壁，而動物細胞沒有，敘述正確。" }
    },
    takeaway: "植物、動物都是真核細胞，共有細胞核、粒線體、內質網等胞器。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-40": {
    encouragement: "兩個生態系都有四種物種，差別在分布是否平均；越平均通常多樣性越高。",
    keyIdea: "第二生態系四種物種比例接近，均勻度較高，通常較能維持穩定。",
    steps: [
      "兩個生態系都列出甲、乙、丙、丁四種，所以物種數相同。",
      "第一生態系由甲占 85%，分布非常不均。",
      "第二生態系各物種約占四分之一，多樣性與功能替代性較高。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩個生態系都包含四種物種，第一個並沒有較多物種。" },
      B: { verdict: "incorrect", reason: "第二生態系的物種數也是四種，與第一相同。" },
      C: { verdict: "incorrect", reason: "第一生態系過度依賴物種甲，甲受衝擊時整體較容易失衡。" },
      D: { verdict: "correct", reason: "第二生態系物種比例較平均，多樣性較高，通常較有能力抵抗環境干擾。" }
    },
    takeaway: "多樣性不只看有幾種，也要看各物種分布是否均勻。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-48": {
    encouragement: "三層多樣性很好分：同種不同特徵看基因；不同物種看種類；不同環境看生態系。",
    keyIdea: "同班眼皮差異屬遺傳多樣性，紅樹林多物種屬物種多樣性，多種地景屬生態系多樣性。",
    steps: [
      "遺傳多樣性發生在同一物種個體之間。",
      "物種多樣性描述同一區域有多種生物。",
      "生態系多樣性描述森林、湖泊、溪流等不同環境類型。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "樹林與珊瑚礁及其中不同生物不是同一物種內的遺傳差異。" },
      B: { verdict: "incorrect", reason: "不同膚色的人類都屬同一物種，不能列為物種多樣性。" },
      C: { verdict: "incorrect", reason: "蟛蜞菊與玫瑰是不同物種，應屬物種多樣性，不是生態系多樣性。" },
      D: { verdict: "correct", reason: "同班同學都是人類，同一物種內單、雙眼皮差異可表現遺傳多樣性。" },
      E: { verdict: "correct", reason: "紅樹林中列出多種植物與動物，呈現物種多樣性。" },
      F: { verdict: "correct", reason: "高山、丘陵、平原、湖泊與溪流代表不同環境及生態系類型。" }
    },
    takeaway: "同種差異看遺傳、多種共存看物種、多種環境看生態系。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-98-51": {
    encouragement: "名字都有「烏」不代表親緣近；先看大分類，烏魚和白鰻都是真正的魚類。",
    keyIdea: "烏魚與白鰻都是硬骨魚；海豚、鯨是哺乳類，烏賊是軟體動物。",
    steps: [
      "烏魚具有鰓、鰭與脊椎，屬魚類。",
      "白鰻同樣是脊椎動物中的魚類。",
      "海豚和鯨以肺呼吸且哺乳；烏賊沒有脊椎。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "白鰻與烏魚都屬硬骨魚類，四個選項中親緣最近。" },
      B: { verdict: "incorrect", reason: "海豚生活在水中但屬哺乳類，與烏魚的親緣較遠。" },
      C: { verdict: "incorrect", reason: "鯨魚是以肺呼吸、哺乳的哺乳動物，不是魚類。" },
      D: { verdict: "incorrect", reason: "烏賊是頭足類軟體動物，沒有脊椎，與魚類親緣更遠。" }
    },
    takeaway: "分類看構造與演化關係，不看生活環境或名稱。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-45": {
    encouragement: "深海沒有陽光，硫化菌改用硫化氫取得能量製造有機物，功能上仍是生產者。",
    keyIdea: "硫化菌與硝化菌都能以無機物氧化取得能量並固定碳，屬化學自營生產者。",
    steps: [
      "硫化菌利用硫化氫氧化釋放的能量製造有機物。",
      "貽貝可從共生硫化菌取得養分，硫化菌扮演生產者。",
      "細菌以二分裂繁殖，不進行真核細胞式的減數分裂。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "細菌細胞壁主要含肽聚醣，不是植物細胞壁的纖維素。" },
      B: { verdict: "correct", reason: "共生硫化菌能利用化學能製造有機物，可為貽貝供應養分並扮演生產者。" },
      C: { verdict: "incorrect", reason: "硫化菌是原核生物，以二分裂繁殖，不進行減數分裂。" },
      D: { verdict: "correct", reason: "硫化菌與硝化菌都可氧化無機物取得能量，並以自營方式製造有機物。" },
      E: { verdict: "incorrect", reason: "深海熱泉微生物適應的溫度可與人體差異很大，最適溫度不必相同。" }
    },
    takeaway: "沒有陽光也能當生產者：化學自營生物用無機物的化學能製造養分。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-48": {
    encouragement: "深海熱泉沒有陽光，能量靠硫化氫；但動物呼吸需要的氧仍可能由有光海域製造後帶入。",
    keyIdea: "熱泉生態系的氧氣來自其他有光生態系；當地生物不靠葉綠體或葉綠素生產。",
    steps: [
      "深海無光，當地生產者是化學自營硫化菌。",
      "硫化菌有細胞膜，但沒有葉綠體與葉綠素。",
      "海水循環可把其他海域光合作用產生的氧帶到深海。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "濾食只描述取食方式，不能據此判定是食物網中的最高階消費者。" },
      B: { verdict: "incorrect", reason: "題文指出熱泉會熄滅，生物若不遷移就會死亡，不能在原地永續生存。" },
      C: { verdict: "correct", reason: "深海當地沒有產氧光合作用，動物使用的氧須由其他有光海域產生並隨海水帶入。" },
      D: { verdict: "incorrect", reason: "硫化菌雖構造簡單，仍有包圍細胞的細胞膜。" },
      E: { verdict: "correct", reason: "當地生產者靠化學能，不具葉綠體與葉綠素；動物也不具有這些光合構造。" }
    },
    takeaway: "熱泉食物來源可在當地形成，但呼吸用氧仍和全球海洋循環相連。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-49": {
    encouragement: "粒線體 DNA 只沿母系傳：每個孩子都從媽媽得到，但只有女兒能再傳給下一代。",
    keyIdea: "小美與外婆、媽媽、同母兄弟姐妹及阿姨的子女共享同一母系 mtDNA。",
    steps: [
      "媽媽的 mtDNA 來自外婆，所以外婆、媽媽與小美相同。",
      "同母兄弟姐妹都由同一位媽媽取得粒線體。",
      "阿姨也從外婆取得 mtDNA，因此阿姨的子女與小美相同。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "外公不會把自己的粒線體 DNA 傳給小美的媽媽。" },
      B: { verdict: "correct", reason: "外婆把 mtDNA 傳給小美的媽媽，再由媽媽傳給小美。" },
      C: { verdict: "incorrect", reason: "正常情況下爸爸的粒線體 DNA 不會傳給子女。" },
      D: { verdict: "correct", reason: "小美的 mtDNA 直接來自媽媽，因此兩者相同。" },
      E: { verdict: "correct", reason: "小美與同母兄弟都由媽媽取得粒線體 DNA。" },
      F: { verdict: "correct", reason: "小美與同母姐妹都由同一位媽媽取得粒線體 DNA。" },
      G: { verdict: "incorrect", reason: "堂姊妹屬父系親族，其 mtDNA 來自她們各自的母親，不沿小美母系。" },
      H: { verdict: "correct", reason: "阿姨與小美媽媽同由外婆取得 mtDNA，阿姨也會把它傳給自己的子女。" },
      I: { verdict: "incorrect", reason: "姑姑屬小美父系親族，姑姑子女的 mtDNA 不沿小美媽媽這條母系。" }
    },
    takeaway: "mtDNA 人人從母親得到，但傳到下一代要靠女性。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-50": {
    encouragement: "族群存在越久，通常累積的 mtDNA 變異越多；這些差異也像路標，可追查遷徙。",
    keyIdea: "非洲族群 mtDNA 多樣性最高，支持其歷史較久；比較變異可重建人類遷徙路徑。",
    steps: [
      "題文指出 mtDNA 約每若干世代產生新突變。",
      "族群存在時間越久，能累積的變異通常越多。",
      "不同地區共享或特有的變異，可用來推測分支與遷徙方向。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "現代非洲人的 mtDNA 變異最複雜，依題文邏輯表示其族群歷史較久、出現較早。" },
      B: { verdict: "incorrect", reason: "題文說即使少量精子粒線體進入卵細胞也會被破壞，不是絕對都不進入。" },
      C: { verdict: "incorrect", reason: "共同祖先不代表序列永遠相同，後代 mtDNA 已累積許多突變。" },
      D: { verdict: "incorrect", reason: "題文指出亞洲人的 mtDNA 多樣性高於歐洲人，不是歐洲較高。" },
      E: { verdict: "correct", reason: "比較各地 mtDNA 變異型的親疏與分布，可推測人類遷徙途徑。" }
    },
    takeaway: "共同祖先留下共同線索，後續突變則記錄族群分支與遷徙。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-52": {
    encouragement: "先把理由翻成生活情境：團體生活最容易讓呼吸道病原在人群中快速傳播。",
    keyIdea: "收容所災民、小學生與中學生都有密集團體生活，符合「容易傳播病原體」。",
    steps: [
      "收容所與組合屋人員集中，共用空間多。",
      "小學生、中學生長時間在班級與校園團體活動。",
      "這三群都因接觸密集而提高人傳人機會。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "醫療防疫人員優先主要因接觸病原機會高，不是免疫力一定較弱。" },
      B: { verdict: "incorrect", reason: "孕婦與幼兒優先主要考慮重症風險或免疫狀況，不是兩者都因工作接觸病原較多。" },
      C: { verdict: "correct", reason: "收容所災民、小學生與中學生都處於密集團體環境，病原較容易在人群中傳播。" },
      D: { verdict: "incorrect", reason: "災民可能有衛生環境風險，但孕婦與幼兒不能都歸因為生活環境衛生較差。" }
    },
    takeaway: "疫苗優先順序會同時考慮重症風險、暴露機會、群聚傳播與生活環境。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-100-56": {
    encouragement: "膨壓就是細胞內的水把細胞膜向外推、再壓到細胞壁上的力量。",
    keyIdea: "水進入使膨壓升高，水流出使膨壓降低；膨壓可支持草本莖並控制氣孔。",
    steps: [
      "植物細胞吸水後液泡變大，細胞內容物向細胞壁施壓。",
      "保衛細胞膨壓升高會彎曲，讓氣孔打開。",
      "草本植物缺少大量木質支撐，常依靠細胞膨壓維持挺立。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "膨壓能使植物細胞保持飽滿，與細胞及器官形狀維持有關。" },
      B: { verdict: "incorrect", reason: "水分進出會改變液泡與細胞體積，也會同步改變膨壓。" },
      C: { verdict: "correct", reason: "細胞內水分外流後，內容物對細胞壁的壓力降低，膨壓變小。" },
      D: { verdict: "correct", reason: "保衛細胞吸水、膨壓升高時會彎曲，使中央氣孔開啟。" },
      E: { verdict: "correct", reason: "草本莖木質組織較少，許多時候要靠細胞膨壓維持挺立。" }
    },
    takeaway: "吸水膨壓升、失水膨壓降；氣孔開閉與草本挺立都會用到膨壓。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-102-11": {
    encouragement: "每一個位置都有 5 種選擇，四個位置就連乘四次：5×5×5×5。",
    keyIdea: "五種鹼基組成四碼密碼子，最大組合數為 5⁴。",
    steps: [
      "第一個位置可放 5 種鹼基。",
      "四個位置彼此都各有 5 種選擇。",
      "依乘法原理共有 5×5×5×5=5⁴=625 種。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "選項代表 5⁴；四個位置各有五種可能，總數為 625。" },
      B: { verdict: "incorrect", reason: "4⁵ 把鹼基種類與密碼子長度顛倒；應是五種選擇連乘四次。" },
      C: { verdict: "incorrect", reason: "3⁴ 適用每格只有三種選擇，與題目的五種鹼基不符。" },
      D: { verdict: "incorrect", reason: "3⁵ 同時把每格選擇數與位置數都套錯。" },
      E: { verdict: "incorrect", reason: "5³ 只計算三個位置，沒有算到題目指定的第四個鹼基。" }
    },
    takeaway: "組合數＝每格選擇數的「位置數次方」，本題是 5⁴。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-8": {
    encouragement: "膽固醇屬脂質，找負責脂質合成與處理的胞器，就能鎖定平滑內質網。",
    keyIdea: "平滑內質網參與脂質與膽固醇合成。",
    steps: [
      "先判斷膽固醇是脂質，不是蛋白質或核酸。",
      "平滑內質網含有多種脂質合成酵素。",
      "藥物抑制其中酵素，便可能降低膽固醇製造。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "核糖體主要合成蛋白質，不是膽固醇等脂質的主要合成場所。" },
      B: { verdict: "correct", reason: "平滑內質網參與脂質與膽固醇合成，最符合藥物作用位置。" },
      C: { verdict: "incorrect", reason: "高基氏體主要修飾、分類與包裝物質，不是膽固醇主要合成場所。" },
      D: { verdict: "incorrect", reason: "細胞核保存 DNA 並進行轉錄，不直接執行膽固醇合成反應。" },
      E: { verdict: "incorrect", reason: "粒線體主要進行有氧呼吸與 ATP 製造，不是題述膽固醇合成胞器。" }
    },
    takeaway: "粗糙內質網偏蛋白質，平滑內質網偏脂質合成與解毒。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-9": {
    encouragement: "尿中蛋白質從正常變成過高，表示原本阻擋大分子的腎臟濾網可能受損。",
    keyIdea: "腎絲球體的過濾屏障受損時，蛋白質可能漏入尿液。",
    steps: [
      "正常腎絲球體可濾出水與小分子，但會留下血球及大分子蛋白質。",
      "服藥後尿蛋白超過正常上限，表示過濾選擇性下降。",
      "因此最可能受損的是負責濾過的絲球體。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "絲球體是血液濾過位置，屏障受損會讓原本留在血中的蛋白質漏入尿液。" },
      B: { verdict: "incorrect", reason: "入球小動脈負責把血送入絲球體，不是直接決定蛋白質能否通過的濾網。" },
      C: { verdict: "incorrect", reason: "腎小管主要負責再吸收與分泌；尿蛋白升高更直接指向絲球體濾網受損。" },
      D: { verdict: "incorrect", reason: "腎動脈輸送血液到腎臟，並非執行選擇性濾過的組織。" },
      E: { verdict: "incorrect", reason: "集尿管主要收集與濃縮尿液，不是阻擋血漿蛋白進入濾液的位置。" }
    },
    takeaway: "尿蛋白過高常提示腎絲球體這道濾網出現問題。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-48": {
    encouragement: "不要直接比腦重，要算「腦重÷體重」；小動物的腦雖輕，占身體比例可能更高。",
    keyIdea: "四種動物的 BB 比值中，小鼠最大，大象最小。",
    steps: [
      "小鼠：0.5÷24，約 2.08%。",
      "黑猩猩約 0.95%、羊 0.25%、大象約 0.20%。",
      "由大到小可判定小鼠最大、大象最小。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "計算腦重占體重比例後，小鼠約 2.08% 最大，大象約 0.20% 最小。" },
      B: { verdict: "incorrect", reason: "大象雖然腦最重，但體重也極大，所以 BB 值反而最小。" },
      C: { verdict: "incorrect", reason: "黑猩猩的 BB 值小於小鼠，而羊也不是四者中最小。" },
      D: { verdict: "incorrect", reason: "羊的 BB 值約 0.25%，不是最大；小鼠則是最大而非最小。" },
      E: { verdict: "incorrect", reason: "黑猩猩不是最大，小鼠也不是最小，兩者順序都不符計算。" }
    },
    takeaway: "比較相對大小要做除法；絕對重量最大，不代表占比最大。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-49": {
    encouragement: "推論只能用表中四種動物支持；先算 BB，再對照牠們的食性，避免擴大到所有動物。",
    keyIdea: "表中雜食的小鼠、黑猩猩 BB 值都高於草食的羊、大象。",
    steps: [
      "小鼠與黑猩猩為雜食，BB 約 2.08% 與 0.95%。",
      "羊與大象為草食，BB 約 0.25% 與 0.20%。",
      "在這四筆資料中，雜食組的 BB 值高於草食組。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "表中只有黑猩猩一種靈長類，不能由單一樣本推論整個靈長類最高。" },
      B: { verdict: "incorrect", reason: "小鼠最小但 BB 最大，資料不支持個體越小 BB 越小。" },
      C: { verdict: "incorrect", reason: "大象體重最大但 BB 最小，資料不支持體重越大 BB 越大。" },
      D: { verdict: "correct", reason: "表中雜食的小鼠、黑猩猩 BB 都高於草食的羊、大象，是資料能支持的比較。" },
      E: { verdict: "incorrect", reason: "題表沒有提供各動物社會行為強弱，無法用來檢驗這項推論。" }
    },
    takeaway: "合理推論必須有資料中的變項支持；表格沒量到的特徵不能硬推。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-103-52": {
    encouragement: "碘片要搶先讓甲狀腺吸收穩定碘；吃得越晚，放射性碘越可能已被吸收。",
    keyIdea: "放射性碘暴露後越晚服用碘片，預防效果越低。",
    steps: [
      "穩定碘可先占據甲狀腺吸收碘的位置。",
      "若已吸收大量放射性碘，再服碘片便難以阻止先前暴露。",
      "五個時間中晚上十點距污染最久，效果最低。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "污染發生時立即服用可最早阻止甲狀腺吸收放射性碘，效果不會最低。" },
      B: { verdict: "incorrect", reason: "延遲一小時雖較差，但仍早於其餘午後與晚間選項。" },
      C: { verdict: "incorrect", reason: "中午已延遲四小時，但不是題列最晚服用時間。" },
      D: { verdict: "incorrect", reason: "傍晚服用已很晚，但仍比晚上十點早四小時。" },
      E: { verdict: "correct", reason: "晚上十點距早上八點污染最久，甲狀腺可能已吸收較多放射性碘，因此預防效用最低。" }
    },
    takeaway: "碘片是預防甲狀腺吸收放射性碘，重點是及早依專業指示服用。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-61": {
    encouragement: "依題目定義，只要能吸收地表放出的紅外線並回放熱能，就屬溫室氣體。",
    keyIdea: "水蒸氣、甲烷與二氧化碳能吸收紅外線；氮氣與氧氣的主要雙原子分子吸收能力弱。",
    steps: [
      "地表吸收陽光後，會向外放出紅外線。",
      "水蒸氣、甲烷、二氧化碳的分子振動能吸收部分紅外線。",
      "氮氣與氧氣在大氣中的雙原子分子不屬主要溫室氣體。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水蒸氣能吸收紅外線，是自然溫室效應中非常重要的溫室氣體。" },
      B: { verdict: "correct", reason: "甲烷能有效吸收特定波段紅外線，屬溫室氣體。" },
      C: { verdict: "correct", reason: "二氧化碳會吸收地表放出的紅外線，是重要溫室氣體。" },
      D: { verdict: "incorrect", reason: "大氣氮主要為 N₂，幾乎不吸收造成溫室效應的紅外線。" },
      E: { verdict: "incorrect", reason: "大氣氧主要為 O₂，不是能顯著吸收紅外線的主要溫室氣體。" }
    },
    takeaway: "常見溫室氣體包括水蒸氣、二氧化碳與甲烷。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-13": {
    encouragement: "把常見生命元素換成原子序：H=1、C=6、N=7、O=8、P=15、S=16。",
    keyIdea: "脂肪主要由碳、氫、氧組成，三者原子序都不超過 10。",
    steps: [
      "多醣與脂肪主要含 C、H、O，原子序分別為 6、1、8。",
      "蛋白質常含硫 S，原子序 16。",
      "核酸含磷 P，原子序 15，也一定含氧 O。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "多醣主要由碳、氫、氧組成，這些元素原子序都不超過 10。" },
      B: { verdict: "correct", reason: "一般脂肪主要由 H、C、O 組成，原子序 1、6、8 均不超過 10。" },
      C: { verdict: "incorrect", reason: "蛋白質常含原子序 16 的硫，因此不能說通常都不超過 15。" },
      D: { verdict: "incorrect", reason: "核酸主要含 H、C、N、O、P，最高常見為原子序 15 的磷，不需 16～20。" },
      E: { verdict: "incorrect", reason: "DNA 的去氧核糖、磷酸與含氮鹼基中都含氧，因此會用到原子序 8 的氧。" }
    },
    takeaway: "生命常見六元素可記 CHONPS；脂肪主要是 C、H、O。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
