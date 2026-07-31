window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-108-58": {
    encouragement: "這題只考一條很穩的配對規則，先找出原股的 A，再看另一股和它配對的是誰。",
    keyIdea: "雙股 DNA 中，一股的 A 會與另一股的 T 配對，因此兩者在各自鏈中的百分率相同。",
    steps: [
      "DNA 兩股互補，A 與 T 配對，G 與 C 配對。",
      "已知其中一股 A 占 32%，表示這一股每 100 個鹼基中約有 32 個 A。",
      "另一股在相對位置就有 32 個 T；兩股長度相同，所以另一股 T 也占 32%。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "16% 是把 32% 再除以 2，但題目比較的是兩條等長的單股，不需要平分。" },
      B: { verdict: "incorrect", reason: "18% 無法由互補配對規則推出；另一股 T 的數量應直接等於原股 A 的數量。" },
      C: { verdict: "incorrect", reason: "24% 與題目給的 32% 沒有互補關係。" },
      D: { verdict: "correct", reason: "原股 A 占 32%，與它互補的另一股 T 就占 32%。" },
      E: { verdict: "incorrect", reason: "36% 並不是 A、T 配對後會產生的比例。" }
    },
    takeaway: "跨股比較要記得：第一股 A%＝第二股 T%，第一股 G%＝第二股 C%。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-107-51": {
    encouragement: "這題的選項看起來都在談演化，但只要分清楚「共同祖先」和「相似功能」，就能逐項排除。",
    keyIdea: "共同的基本構造或生命機制可支持共同祖先；功能相似不一定代表源自同一祖先。",
    steps: [
      "先檢查地理事實與敘述是否正確，再判斷證據能否支持共同祖先。",
      "不同哺乳動物共有以乳汁育幼的衍徵，可支持牠們源自共同祖先。",
      "麻雀與企鵝的翼同源，但蝙蝠前肢也承自四足動物共同祖先，不能把蝙蝠排除。",
      "所有細胞生物共用轉錄、轉譯等基本機制，可支持生命具有共同起源。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "厄瓜多爾本土與加拉巴哥群島都位於太平洋一側，並非分處兩大洋；此敘述的地理前提錯誤。" },
      B: { verdict: "correct", reason: "以乳汁哺育幼兒是哺乳類共享的重要特徵，可作為共同祖先的證據。" },
      C: { verdict: "correct", reason: "麻雀與企鵝的翼都是鳥類前肢的同源構造，可支持鳥類具有共同祖先；蝙蝠的翼則是獨立演化出的飛行構造，不是該鳥類祖先的後代特徵。" },
      D: { verdict: "incorrect", reason: "地層由老到新只能顯示生物隨時間改變；單靠「由簡到繁」不能直接證明某個化石就是另一個化石的祖先。" },
      E: { verdict: "correct", reason: "原核與真核生物都用轉錄、轉譯製造蛋白質，這種高度共通的基本機制支持生物可能有共同起源。" }
    },
    takeaway: "同源構造與共同生命機制能支持共同祖先；只有功能相似，證據還不夠。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-104-60": {
    encouragement: "先別被月份繞住，先判斷它喜歡「長日」還是「短日」，答案就會清楚很多。",
    keyIdea: "日照 8、11 小時會開花，13、16 小時不開花，表示它是日照縮短後才開花的短日照植物。",
    steps: [
      "由實驗可知，日照不超過約 11 小時時會開花，13 小時以上則不開花。",
      "春天發芽後，日照逐漸變長，到夏至約 14 小時，不符合開花條件。",
      "夏至後日照逐漸縮短，秋分仍約 12 小時，還沒有短到實驗中的 11 小時。",
      "接近 11 月時日照約降到 11 小時，最可能開始誘導開花。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3 月春分日照約 12 小時，而且植株才剛發芽，不符合已知的短日照條件。" },
      B: { verdict: "incorrect", reason: "6 月接近夏至，日照約 14 小時，是題目顯示不會開花的長日照。" },
      C: { verdict: "incorrect", reason: "8 月雖已過夏至，但日照通常仍超過 13 小時，尚未達開花條件。" },
      D: { verdict: "correct", reason: "11 月日照已縮短到約 11 小時，最符合實驗中會開花的日照長度。" },
      E: { verdict: "incorrect", reason: "12 月也符合短日照，但題目問「開始」開花；11 月會更早達到臨界日照。" }
    },
    takeaway: "先用實驗找出臨界日照，再沿著一年中日照長短的變化找最早符合的月份。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-96-58": {
    encouragement: "題目列出的條件很理想化，抓住「真的做得到」和「長期值得做」兩個方向即可。",
    keyIdea: "合適的生物能源材料應能永續供應，且整體投入的能源與成本要低；零消耗、零污染都不切實際。",
    steps: [
      "培養材料、製造與運送燃料都會耗能，所以不可能能源零消耗。",
      "生物能源要能長期使用，材料必須可再生、可永續經營。",
      "若投入的能源與成本太高，就失去作為替代能源的價值。",
      "基因改造只是一種可能的技術，不是所有生物能源材料都必備的條件。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "乙的永續經營與丙的低整體能源成本，都是生物能源能長期實用的必要方向。" },
      B: { verdict: "incorrect", reason: "甲的能源零消耗與丁的零污染都過度理想化，實際製程一定有能源投入，也難達到完全零污染。" },
      C: { verdict: "incorrect", reason: "乙、丙合理，但戊的基因改造不是材料必須具備的條件。" },
      D: { verdict: "incorrect", reason: "雖然乙合理，但甲與丁都要求絕對的零消耗、零污染，不符合實際製程。" },
      E: { verdict: "incorrect", reason: "甲、丁不切實際，戊也只是可選技術，不能列為必要條件。" }
    },
    takeaway: "評估能源要看全生命週期：能否再生，以及總投入是否低於可得到的效益。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-94-44": {
    encouragement: "外來種能快速擴張，通常不是突然變得更強，而是新環境少了原本限制牠的力量。",
    keyIdea: "外來種常因缺少天敵而擴張；防治時又不能任意使用強力藥劑，以免傷害其他生物與環境。",
    steps: [
      "先找紅火蟻在新環境中可能少掉的限制因素，缺少天敵會提高存活與繁殖。",
      "短時間入侵不需要假設已靠突變完成快速適應。",
      "防治藥劑若毒性太強，可能連非目標生物也一起傷害，造成二次公害。",
      "因此一項是生態上的擴張原因，一項是防治上的限制。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "入侵地若缺少能有效捕食或控制紅火蟻的天敵，族群就容易迅速增加。" },
      B: { verdict: "incorrect", reason: "題目沒有證據顯示紅火蟻必須與本土物種互利共生才能存活。" },
      C: { verdict: "incorrect", reason: "短時間內難以消滅主要不必靠新突變解釋；原有適應能力與缺少天敵已足以造成擴張。" },
      D: { verdict: "incorrect", reason: "臺灣環境不可能與原產地「完全相同」，而外來種成功也不需要兩地環境完全一致。" },
      E: { verdict: "correct", reason: "強力化學藥劑可能毒害其他生物、污染環境，因此防治時受到限制。" }
    },
    takeaway: "外來種問題要同時看兩端：為何牠擴張得快，以及為何人類不能用高風險方法一次清除。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-99-1": {
    encouragement: "生命現象的項目很多，但重點是找「所有生物都能用來描述自己生命活動」的共同特徵。",
    keyIdea: "生命共同特徵包括代謝、生長、生殖、運動或感應；不同物種之間的訊息溝通並不是所有生物都必有的共同特徵。",
    steps: [
      "先檢查每項是否能對應生命個體本身的活動。",
      "代謝是細胞內物質的合成與分解；生長是體積、物質或細胞數增加。",
      "生殖會產生與親代具有相似構造與遺傳特徵的後代，運動也可作為生物對環境反應的一部分。",
      "異種生物可能互傳訊息，但這不是所有生命都必須具備、也不是傳統歸納的基本生命現象。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "生物體或其構造會出現位置改變，例如動物移動、植物向光彎曲，可歸入生命現象。" },
      B: { verdict: "correct", reason: "異種生物間雖可能傳遞訊息，但並非所有生物都具備的基本生命現象，傳統生命特徵也不以此獨立列項。" },
      C: { verdict: "incorrect", reason: "產生與自身構造及遺傳特徵相似的後代就是生殖，是重要生命特徵。" },
      D: { verdict: "incorrect", reason: "細胞內合成與分解物質屬於代謝，是維持生命不可缺少的活動。" },
      E: { verdict: "incorrect", reason: "體積增大，以及體內物質或細胞增加，都屬於生長現象。" }
    },
    takeaway: "基本生命現象要能描述生物本身：代謝、生長、生殖、感應與運動；物種間溝通不是普遍必要條件。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-12": {
    encouragement: "生物放大不是高級消費者「製造」更多污染物，而是每吃一層就把難排出的污染物一起累積進來。",
    keyIdea: "DDT 難被生物分解與排除，會先在個體內累積，再沿食物鏈使高營養級濃度升高。",
    steps: [
      "DDT 是脂溶性且不易代謝、排出的持久性污染物。",
      "生物一生會吃下許多受污染的食物，體內 DDT 因而逐漸累積。",
      "高級消費者又會吃下許多低級消費者，所以單位體重中的 DDT 濃度可能更高。",
      "這就是生物累積進一步造成食物鏈中的生物放大。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "食物塔愈高通常總生物量愈小，不是愈大；生物放大看的是濃度，不是該營養級的總量。" },
      B: { verdict: "incorrect", reason: "關鍵不是只比較高級消費者與生產者的分解能力，而是 DDT 對各營養級生物都難代謝、難排出。" },
      C: { verdict: "correct", reason: "DDT 不易在體內分解與排出，因此會累積，並隨捕食關係在高營養級放大。" },
      D: { verdict: "incorrect", reason: "DDT 不會因為使受污染生物總生物量增加而造成放大。" }
    },
    takeaway: "先有個體內的「生物累積」，再經多次捕食形成食物鏈上的「生物放大」。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-91-3": {
    encouragement: "不用背所有元素比例，從生命物質最常見的骨架與水，就能判斷前三名。",
    keyIdea: "生物體以水和含碳有機物為主，因此碳、氫、氧是含量最多的三種元素。",
    steps: [
      "水占生物體很大比例，水由氫與氧組成。",
      "醣類、脂質、蛋白質與核酸等有機物都以碳為重要骨架。",
      "所以整體含量最多的三種元素是碳、氫、氧。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氮雖是蛋白質與核酸的重要元素，但整體含量通常低於氫。" },
      B: { verdict: "incorrect", reason: "硫只出現在部分胺基酸等物質中，含量遠少於碳。" },
      C: { verdict: "incorrect", reason: "磷與氮都很重要，但不及構成水與有機物主體的碳、氫。" },
      D: { verdict: "correct", reason: "碳形成有機物骨架，氫與氧大量存在於水及有機物中，三者含量最多。" }
    },
    takeaway: "看到生物體主要元素，先想到水的 H、O，再加上有機物骨架的 C。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-64": {
    encouragement: "孟德爾需要的是「平常能保持純種、實驗時又能控制配對」的材料，豌豆正好符合。",
    keyIdea: "豌豆通常自花授粉，能維持純系；研究者也能人工去雄、授粉來安排雜交。",
    steps: [
      "自然情況下自花授粉，同一株花粉與胚珠結合，不容易混入其他植株基因。",
      "連續自花授粉能穩定保存特定性狀的純種品系。",
      "做實驗時，孟德爾可人工去除雄蕊，再把指定植株的花粉授上去。",
      "因此 C、D 描述的是豌豆適合遺傳實驗的關鍵特性。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "豌豆主要是自花授粉，不是自然情況下容易異花授粉。" },
      B: { verdict: "incorrect", reason: "自然狀況不容易得到雜交品系；雜交是研究者人工控制授粉的結果。" },
      C: { verdict: "correct", reason: "豌豆為自花授粉植物，花的構造使自然異花授粉較不容易發生。" },
      D: { verdict: "correct", reason: "長期自花授粉能保存基因型較穩定的純種品系，方便比較性狀。" }
    },
    takeaway: "豌豆的優點可記成：自然時保純種，實驗時能人工雜交。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-10": {
    encouragement: "砂囊像鳥類體內的小磨坊，抓住「磨碎」兩個字就能選對。",
    keyIdea: "砂囊屬於胃的特化構造，靠厚實肌肉與砂礫磨碎食物，主要進行物理消化。",
    steps: [
      "鳥類沒有牙齒，吞下的食物需要在消化道內被磨碎。",
      "砂囊是胃的一部分，肌肉發達，收縮時可配合砂礫研磨食物。",
      "研磨只改變食物大小，沒有把大分子分解成小分子，因此屬物理消化。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "砂囊的確主要做物理消化，但它是胃的特化部分，不是食道。" },
      B: { verdict: "incorrect", reason: "砂囊不是食道，且它最突出的功能是研磨，不是同時作為主要化學消化場所。" },
      C: { verdict: "correct", reason: "砂囊是特化的胃，以肌肉收縮和砂礫磨碎食物，主要進行物理消化。" },
      D: { verdict: "incorrect", reason: "砂囊雖屬胃，但題目問其主要功能，應是物理研磨，不是物理與化學消化並重。" },
      E: { verdict: "incorrect", reason: "只說化學消化忽略砂囊最重要的研磨作用。" }
    },
    takeaway: "砂囊＝特化的胃＝磨碎食物＝物理消化。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-89-8": {
    encouragement: "沿著空氣通道走到最末端，真正和血液交換氣體的地方就是答案。",
    keyIdea: "肺泡壁薄、表面積大，外有微血管網，是氧氣擴散進入血液的主要位置。",
    steps: [
      "鼻孔、鼻腔、咽喉與氣管主要負責讓空氣通過、清潔與調節。",
      "空氣最後到達肺泡，肺泡壁與微血管壁都很薄。",
      "肺泡內氧分壓較高，氧氣便沿濃度差擴散進入微血管。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鼻孔只是空氣進入呼吸道的入口，不是與微血管進行氣體交換的主要場所。" },
      B: { verdict: "incorrect", reason: "鼻腔主要過濾、溫暖與濕潤空氣，不負責把大量氧氣送入血液。" },
      C: { verdict: "incorrect", reason: "咽喉是空氣通道的一部分，沒有肺泡那種薄壁與密集微血管的交換構造。" },
      D: { verdict: "incorrect", reason: "氣管負責輸送空氣，管壁較厚，不是氣體交換面。" },
      E: { verdict: "correct", reason: "肺泡緊貼微血管，兩側壁都很薄，氧氣可在此擴散進入血液。" }
    },
    takeaway: "呼吸道負責送氣，肺泡才負責把氧氣交換進血液。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-10": {
    encouragement: "光反應需要的不只是色素，還要有完整的膜上電子傳遞系統，所以不能只挑葉綠素。",
    keyIdea: "光合作用的光反應在葉綠體的類囊體膜上進行，需要葉綠素與膜上多種蛋白質共同作用。",
    steps: [
      "葉綠素負責吸收光，但電子傳遞、製造 ATP 等還需要類囊體膜上的蛋白質。",
      "只分離葉綠素會破壞完整的光反應系統，無法觀察整套反應。",
      "題目提供的材料中，完整葉綠體仍保有類囊體膜與相關酵素，因此可觀測光反應。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "植物細胞質沒有完整的類囊體膜與光反應電子傳遞鏈。" },
      B: { verdict: "correct", reason: "完整葉綠體保有類囊體膜、葉綠素和電子傳遞蛋白，可進行光反應。" },
      C: { verdict: "incorrect", reason: "單獨葉綠素只能吸收光，缺少膜上電子傳遞鏈，不能完成整套光反應。" },
      D: { verdict: "incorrect", reason: "葉綠體基質主要進行固碳反應，不是光反應的主要場所。" }
    },
    takeaway: "光反應在類囊體膜；完整反應需要色素、膜與電子傳遞蛋白一起工作。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-2": {
    encouragement: "核糖體是蛋白質工廠，想想哪種細胞需要大量製造並分泌消化酵素。",
    keyIdea: "製造蛋白質越旺盛的細胞，核糖體與粗糙內質網通常越多。",
    steps: [
      "核糖體負責把胺基酸組合成蛋白質。",
      "胰臟的腺泡細胞會大量製造並分泌澱粉酶、胰蛋白酶原等消化酵素。",
      "這些酵素是蛋白質，所以胰臟分泌細胞需要許多核糖體。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "成熟紅血球沒有細胞核與核糖體，不能再自行製造蛋白質。" },
      B: { verdict: "incorrect", reason: "白血球能製造蛋白質，但一般比較下不如胰臟腺泡細胞大量、持續分泌消化酵素。" },
      C: { verdict: "incorrect", reason: "骨骼肌細胞需要許多收縮蛋白，但成熟後的主要工作是收縮，不是大量分泌新蛋白質。" },
      D: { verdict: "correct", reason: "胰臟細胞大量製造蛋白質性消化酵素，因此具有豐富核糖體。" }
    },
    takeaway: "看到大量製造、分泌蛋白質的細胞，就要聯想到核糖體與粗糙內質網發達。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-88-1": {
    encouragement: "淋巴結可以想成免疫系統的檢查站：淋巴流過時，病原會在這裡被攔截與辨識。",
    keyIdea: "淋巴結含有許多淋巴球與吞噬細胞，能過濾淋巴並啟動免疫防禦。",
    steps: [
      "組織液進入淋巴管後形成淋巴，會流經淋巴結。",
      "淋巴結中的免疫細胞可攔截病原與異物。",
      "淋巴球在此辨識抗原、增殖並參與免疫反應，因此主要功能是防禦。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "淋巴結主要過濾淋巴；過濾血液是脾臟等器官的重要功能。" },
      B: { verdict: "correct", reason: "淋巴結集中許多免疫細胞，可攔截病原並啟動防禦反應。" },
      C: { verdict: "incorrect", reason: "氧氣主要由血液中的紅血球運送，不是淋巴結的功能。" },
      D: { verdict: "incorrect", reason: "酸鹼平衡主要靠呼吸、腎臟及血液緩衝系統調節，不是淋巴結的主要工作。" }
    },
    takeaway: "淋巴結過濾的是淋巴，重點功能是免疫防禦。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-87-40": {
    encouragement: "潮汐時間每天會往後延，不必算得很精細；兩天約延後一個半小時就能選出答案。",
    keyIdea: "受月球運動影響，相同潮況每天約延後 50 分鐘；兩天約延後 100 分鐘。",
    steps: [
      "2 月 14 日乾潮是上午 6 時 45 分。",
      "隔一天相同潮況約晚 50 分鐘，隔兩天約晚 100 分鐘。",
      "6 時 45 分加 1 小時 40 分，約為上午 8 時 25 分。",
      "乾潮時泥灘露出較多，適合詳細觀察紅樹林，所以選上午 8～9 時。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "上午 5～6 時比原本乾潮還早，沒有反映相同潮況每天延後的規律。" },
      B: { verdict: "correct", reason: "兩天後乾潮約在上午 8 時 25 分，落在上午 8～9 時。" },
      C: { verdict: "incorrect", reason: "中午 12～1 時比估計乾潮時間晚了約四小時。" },
      D: { verdict: "incorrect", reason: "下午 3～4 時不是由每日約延後 50 分鐘推得的時間。" },
      E: { verdict: "incorrect", reason: "下午 5～6 時與兩天後的預估乾潮相差太遠。" }
    },
    takeaway: "同一地點相同潮況每天約晚 50 分鐘；兩天就往後推約 100 分鐘。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-85-24": {
    encouragement: "兩句都有「絕對不會」或「完全以某形式」的味道，遇到這種敘述要特別檢查是否說得太滿。",
    keyIdea: "二氧化碳可少量與血紅素結合，但血中大部分二氧化碳會轉成碳酸氫根運送，不是以氣體狀態為主。",
    steps: [
      "組織產生的二氧化碳會擴散進入血液。",
      "一部分二氧化碳可和血紅素結合形成氨基甲醯血紅素，所以第一句錯誤。",
      "大部分二氧化碳在紅血球中轉換成碳酸氫根，隨血漿運送。",
      "因此不能說從組織到肺主要都以氣體方式運送，第二句也錯誤。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "第一句與第二句都錯誤，不符合兩句皆正確的前提。" },
      B: { verdict: "incorrect", reason: "兩句都不是正確敘述，不能只判斷解釋關係。" },
      C: { verdict: "incorrect", reason: "第一句不是正確敘述；二氧化碳確實可有一部分與血紅素結合。" },
      D: { verdict: "incorrect", reason: "第一句雖錯，但第二句也錯；二氧化碳主要以碳酸氫根形式運送。" },
      E: { verdict: "correct", reason: "二氧化碳可少量結合血紅素，且大部分轉為碳酸氫根運送，所以兩句都錯。" }
    },
    takeaway: "二氧化碳運輸三形式：多數為碳酸氫根，少量溶於血漿或與血紅素結合。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-84-2": {
    encouragement: "殺蟲劑會沿著食物鏈逐級濃縮，先找出誰站在最高營養級即可。",
    keyIdea: "不易分解、排出的殺蟲劑會造成生物放大，使最高級消費者體內濃度最高。",
    steps: [
      "浮游生物接觸池水中的殺蟲劑，污染物進入食物鏈。",
      "肉食性小動物吃下許多較低營養級生物，會累積更多殺蟲劑。",
      "食小魚的魚類位於題目所列食物鏈較高層，又吃下許多受污染獵物。",
      "因此其體內殺蟲劑濃度最高。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "浮游生物位於食物鏈較低層，是污染物進入食物鏈的起點之一，濃度通常不是最高。" },
      B: { verdict: "incorrect", reason: "肉食性小動物已有累積，但仍可能被更高營養級的魚類捕食，因此濃度低於最高級消費者。" },
      C: { verdict: "correct", reason: "食小魚的魚類位於較高營養級，會把許多獵物體內難排出的殺蟲劑一起累積。" },
      D: { verdict: "incorrect", reason: "細菌和黴菌是分解者，不能只因分解遺體就判定其殺蟲劑濃度必然最高。" }
    },
    takeaway: "生物放大看的是濃度：營養級越高，難分解污染物通常越濃。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-83-7": {
    encouragement: "突觸多不多，要看神經元彼此「接線」的地方多不多；細胞體與樹突集中處通常接點更多。",
    keyIdea: "灰質含較多神經元細胞體、樹突與突觸；白質則以成束軸突纖維為主。",
    steps: [
      "突觸常形成在一個神經元的軸突末端與另一個神經元的樹突或細胞體之間。",
      "灰質聚集較多神經元細胞體與樹突，神經訊息在此整合。",
      "白質以長距離傳導的有髓鞘軸突為主，主要工作是傳送訊息。",
      "所以灰質中的突觸通常較多。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "灰質含較多細胞體與樹突，是神經元彼此形成突觸、整合訊息的主要區域。" },
      B: { verdict: "incorrect", reason: "白質主要由成束神經纖維構成，功能偏向長距離傳導，不是突觸最密集處。" },
      C: { verdict: "incorrect", reason: "兩者組成不同，灰質的細胞體與樹突較多，因此突觸數不會相同。" },
      D: { verdict: "incorrect", reason: "雖然不同部位會有差異，但依灰質與白質的基本組成，仍可判斷灰質通常有較多突觸。" }
    },
    takeaway: "灰質重整合、突觸多；白質重傳導、軸突多。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-83-6": {
    encouragement: "穩定群落不是完全沒有生命活動，而是群落組成不再出現明顯方向性的更替。",
    keyIdea: "演替達到相對穩定時，明顯消長趨緩，物種多且食物網較複雜。",
    steps: [
      "群落演替初期，物種組成會明顯改變，消長現象較顯著。",
      "進入相對穩定階段後，群落不再有明顯、持續朝同一方向的替換，可視為消長已停止。",
      "成熟群落可利用的棲位較多，物種間關係也較多。",
      "因此生物種類多，食物網通常較複雜。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲描述明顯消長，較像演替仍在進行；丙的低多樣性與簡單食物網也不符合穩定成熟群落。" },
      B: { verdict: "incorrect", reason: "丁合理，但甲表示群落仍有明顯方向性變化，與題目的穩定狀態不符。" },
      C: { verdict: "incorrect", reason: "乙符合相對穩定，但丙的物種少、食物網簡單不是穩定成熟群落的最大特徵。" },
      D: { verdict: "correct", reason: "乙表示明顯演替趨緩，丁表示物種多、食物網複雜，兩者共同符合穩定群落。" }
    },
    takeaway: "成熟穩定群落常見兩個重點：方向性演替趨緩，以及多樣、複雜的食物網。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-83-3": {
    encouragement: "把親代各能給出的配子寫出來，兩格配對就能完成，不需要猜比例。",
    keyIdea: "白花 rr 只能產生 r 配子；粉紅花 Rr 可產生 R 或 r 配子，子代為 Rr 與 rr。",
    steps: [
      "紫茉莉為不完全顯性：RR 紅花、Rr 粉紅花、rr 白花。",
      "白花 rr 的配子只有 r。",
      "粉紅花 Rr 的配子有 R 與 r 兩種。",
      "配子結合後得到 Rr 與 rr，比例各約一半。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若子代全為 Rr，粉紅花親本就必須只能提供 R，但 Rr 也會提供 r。" },
      B: { verdict: "incorrect", reason: "若子代全為 rr，粉紅花親本就必須只能提供 r，但 Rr 也能提供 R。" },
      C: { verdict: "correct", reason: "rr 提供 r；Rr 提供 R 或 r，結合後正好得到 Rr、rr 兩種基因型。" },
      D: { verdict: "incorrect", reason: "白花親本沒有 R 等位基因，所以這組交配不可能產生 RR 子代。" }
    },
    takeaway: "不完全顯性只改變外表表現，配子形成與分離律的推法仍相同。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
