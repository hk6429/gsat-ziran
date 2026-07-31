window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-4": {
    encouragement: "兩條曲線一前一後起伏，是典型的獵物先增加、掠食者稍後跟著增加。",
    keyIdea: "甲數量多且高峰先出現，像獵物蚜蟲；乙數量少且變化稍慢，像掠食者瓢蟲。",
    steps: ["比較兩者數量，甲明顯多於乙，較符合獵物與掠食者的數量關係。", "甲先出現高峰，乙才跟著上升，符合蚜蟲增加後瓢蟲增加。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "蚜蟲是瓢蟲的獵物，數量較多且波動高峰會先於瓢蟲。" },
      B: { verdict: "incorrect", reason: "獵豹與獅子多為競爭者，不能合理解釋一前一後的週期波動。" },
      C: { verdict: "incorrect", reason: "若甲為獅子、乙為羚羊，掠食者數量反而比獵物多，不合理。" },
      D: { verdict: "incorrect", reason: "螞蟻與蚜蟲常呈互利關係，數量變化不一定是獵物先、掠食者後。" },
      E: { verdict: "incorrect", reason: "小丑魚與海葵是互利共生，通常不呈現典型捕食者與獵物週期。" }
    },
    takeaway: "獵物通常數量較多且先上升，掠食者會隔一段時間才跟著增加。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-100-5": {
    encouragement: "裸子植物、針狀葉、不常落葉三個線索，都在指向高山針葉林。",
    keyIdea: "玉山森林線以下、約 2500～3300 公尺的乙區最可能是高山針葉林。",
    steps: ["針葉林多由裸子植物組成，適合較冷的高海拔環境。", "圖中乙位於森林線下方的高海拔帶，符合針葉林分布。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲位於森林線以上，環境過冷，多為高山草原或裸地。" },
      B: { verdict: "correct", reason: "乙位於高海拔且仍在森林線下，最符合常綠針葉林。" },
      C: { verdict: "incorrect", reason: "丙海拔較低且較溫暖，較常見針闊葉混合林。" },
      D: { verdict: "incorrect", reason: "丁屬中低海拔，氣候較暖，多以闊葉林為主。" },
      E: { verdict: "incorrect", reason: "戊位於低海拔，溫度高，不是針葉裸子植物優勢區。" }
    },
    takeaway: "臺灣高山由低到高大致是闊葉林、混合林、針葉林，再到森林線以上。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-100-7": {
    encouragement: "血型族譜不用一次全算，從已知子女反推父母能提供哪些等位基因即可。",
    keyIdea: "丙的雙親都是 A 型，而丙又生出 AB 型子女，因此丙必定是 A 型。",
    steps: ["丙的父母皆為 A 型，所以丙只能是 A 型或 O 型。", "丙與丁生出 AB 型子女，丙必須提供 IA，因此丙只能是 A 型。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲與乙生有 A 型子女，甲的所有可能血型不只 O 型與 B 型。" },
      B: { verdict: "incorrect", reason: "乙生出 A 型與未知型子女，不能斷定乙所有可能只有 O 型。" },
      C: { verdict: "correct", reason: "丙由 A 型父母所生且能提供 IA 生出 AB 子女，所以必為 A 型。" },
      D: { verdict: "incorrect", reason: "丁必須提供 IB 才能生出 AB 子女，但其可能血型不只 O 與 B。" },
      E: { verdict: "incorrect", reason: "戊是甲乙的子女，依父母可能基因型不能把 AB 型列為所有可能。" }
    },
    takeaway: "AB 型子女一定分別從雙親得到 IA 與 IB，可用來反推父母。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-100-54": {
    encouragement: "物種多樣性看的是「有幾種不同生物」，不是同一物種個體的差異。",
    keyIdea: "同一地點出現麻雀與綠繡眼、藍綠菌與真菌、蟑螂蒼蠅與老鼠，都呈現不同物種。",
    steps: ["逐項找是否明確列出兩種以上不同物種。", "排除只描述不同棲地，或同種人類個體差異的選項。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "麻雀與綠繡眼是不同鳥類物種，呈現物種多樣性。" },
      B: { verdict: "correct", reason: "藍綠菌與真菌屬不同生物類群，共生也呈現多種物種。" },
      C: { verdict: "correct", reason: "蟑螂、蒼蠅與老鼠是不同物種，符合物種多樣性的描述。" },
      D: { verdict: "incorrect", reason: "只列榕樹下、草坪與池塘三種地點，未指出有哪些不同物種。" },
      E: { verdict: "incorrect", reason: "同學都是同一物種，身高體重差異屬遺傳多樣性而非物種多樣性。" }
    },
    takeaway: "同種個體不同是遺傳多樣性；不同物種共存才是物種多樣性。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-100-58": {
    encouragement: "身體遇冷會努力保溫與產熱：皮膚血管縮、代謝升高、肌肉顫抖。",
    keyIdea: "甲時段體溫下降，人體會減少散熱並增加產熱，以讓核心體溫回穩。",
    steps: ["圖中甲時段體溫低於原本水平，代表冷刺激正在作用。", "保溫反應包括皮膚血管收縮；產熱反應包括代謝增加與骨骼肌顫抖。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "皮膚血管平滑肌收縮可減少流向皮膚的血量，降低散熱。" },
      B: { verdict: "correct", reason: "提高新陳代謝可產生更多熱量，幫助體溫回升。" },
      C: { verdict: "correct", reason: "骨骼肌快速收縮形成顫抖，可增加熱量產生。" },
      D: { verdict: "incorrect", reason: "汗液蒸發會帶走熱量，寒冷時汗液分泌通常不會增加。" },
      E: { verdict: "incorrect", reason: "發燒是體溫調節設定點上升，不是短時間進入冷房的正常反應。" }
    },
    takeaway: "冷環境：血管收縮、顫抖、代謝升高；熱環境則增加排汗與皮膚血流。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-2": {
    encouragement: "有絲分裂後期的重點是染色體已分開，但中央細胞板還沒正式形成。",
    keyIdea: "正式題圖的丙指向中央細胞板；細胞板主要在末期與細胞質分裂時出現。",
    steps: ["後期可見兩組子染色體移向相反兩極，也仍有紡錘絲。", "中央新細胞板要到末期才逐漸形成，所以丙不應出現。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲指植物細胞外側的細胞壁，在分裂後期仍然存在。" },
      B: { verdict: "incorrect", reason: "乙指紡錘絲，後期需靠它讓染色體移向兩極。" },
      C: { verdict: "correct", reason: "丙指中央細胞板，通常在末期進行細胞質分裂時才形成。" },
      D: { verdict: "incorrect", reason: "丁指已移向一極的子染色體，是有絲分裂後期的重要特徵。" },
      E: { verdict: "incorrect", reason: "戊指細胞外圍構造，植物細胞分裂時仍會保留。" }
    },
    takeaway: "後期分離染色體；末期才重建細胞核並形成植物細胞板。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-5": {
    encouragement: "競爭最激烈要找「共同食物最多」的一組，而不是只看彼此有沒有箭頭。",
    keyIdea: "圖中乙、丙、丁共享多種獵物，對相同食物資源的需求重疊最大。",
    steps: ["箭頭由獵物指向掠食者，先找每個物種吃哪些獵物。", "比較各組共享獵物的數量，乙、丙、丁重疊最多。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "乙、丙、丁共同利用的獵物較多，食物資源重疊最大。" },
      B: { verdict: "incorrect", reason: "丙、戊、庚共享的食物較少，競爭程度不如乙丙丁。" },
      C: { verdict: "incorrect", reason: "甲位在較低食性位置，與庚辛的食物需求重疊不大。" },
      D: { verdict: "incorrect", reason: "丁、戊、辛之間存在不同食性位置，並非三者大量搶同一食物。" },
      E: { verdict: "incorrect", reason: "甲、乙、己的取食角色不同，共同資源不如正確組合多。" }
    },
    takeaway: "生態競爭強弱可先比較生態位重疊，尤其是共同利用的有限資源。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-6": {
    encouragement: "移除一種掠食者後，最先增加的是原本直接被它吃、而且還有其他掠食者的獵物。",
    keyIdea: "食物網中丙是戊的直接獵物；戊消失後，丙少了一項死亡來源而快速增加。",
    steps: ["沿著指向戊的箭頭找出戊原本捕食的獵物。", "比較選項，丙受到戊直接捕食，解除壓力後最先增加。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲不屬於戊消失後最直接解除捕食壓力的選項物種。" },
      B: { verdict: "incorrect", reason: "乙與戊的直接捕食關係不足以造成題述的快速增長。" },
      C: { verdict: "correct", reason: "丙是戊的直接獵物，戊滅絕後其死亡率立即降低。" },
      D: { verdict: "incorrect", reason: "丁與戊之間的關係不是最直接使丁解除捕食壓力。" },
      E: { verdict: "incorrect", reason: "己在食物網中不會因戊消失而最先出現快速增長。" }
    },
    takeaway: "食物網變動先看直接關係，再考慮後續的間接連鎖影響。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-7": {
    encouragement: "針葉林需要冷涼環境，降雨可中等；先從圖上找低溫區。",
    keyIdea: "丁位於較低年均溫、降雨量中等的區域，最符合針葉林氣候。",
    steps: ["針葉林多分布在高緯度或高海拔，年平均溫度較低。", "圖中丁的溫度低於乙丙，雨量又不像甲那麼極端乾燥。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲降雨量極少，較符合沙漠或乾燥生態系。" },
      B: { verdict: "incorrect", reason: "乙溫度較高且降雨中等，較接近溫暖草原或林地。" },
      C: { verdict: "incorrect", reason: "丙高溫高雨，較像熱帶雨林而不是針葉林。" },
      D: { verdict: "correct", reason: "丁年均溫較低且有適量降雨，符合冷涼針葉林。" },
      E: { verdict: "incorrect", reason: "戊低溫又極乾燥，較接近凍原而非能長成森林的環境。" }
    },
    takeaway: "氣候圖判生態系時，同時看溫度與降雨，不能只看其中一軸。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-8": {
    encouragement: "把溫度與鹽度的適合範圍分開比對，再取兩者共同符合的養殖池。",
    keyIdea: "X 適合較低鹽度且溫度範圍廣，可用丙丁；Y 適合高鹽且偏低溫，只適合甲。",
    steps: ["從兩張曲線讀出 X、Y 的適溫與適鹽範圍。", "將範圍和表二四池交叉比對，得到 X 配丙丁、Y 配甲。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙的高鹽高溫條件不適合圖中 Y 的最佳增長範圍。" },
      B: { verdict: "incorrect", reason: "丁屬低鹽高溫，不能列為偏好高鹽的 Y 養殖池。" },
      C: { verdict: "incorrect", reason: "甲是高鹽環境，不適合偏好低鹽度的 X 魚種。" },
      D: { verdict: "correct", reason: "丙丁符合 X 的低鹽範圍，甲符合 Y 的高鹽與適溫範圍。" },
      E: { verdict: "incorrect", reason: "此配法把 X 放高鹽池、Y 放低鹽池，正好和曲線相反。" }
    },
    takeaway: "兩變因配對題要找交集：溫度合適且鹽度也合適才算真正適合。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-49": {
    encouragement: "細胞越飽滿表示進水越多、膨壓越大；質離越明顯表示外液濃度越高。",
    keyIdea: "甲細胞最飽滿，膨壓最大；進水稀釋細胞液，使細胞內滲透壓變小。",
    steps: ["比較圖中細胞膜與細胞壁的距離，甲最飽滿、丙質離最明顯。", "甲中水進入細胞，細胞液被稀釋，因此內部滲透壓下降。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲細胞吸水最飽滿，細胞內容物推壓細胞壁的力量最大。" },
      B: { verdict: "incorrect", reason: "外觀沒有淨變化也可能有水分子雙向進出，並非完全沒有水移動。" },
      C: { verdict: "incorrect", reason: "丙造成明顯質離，表示外液蔗糖濃度最高而不是最低。" },
      D: { verdict: "correct", reason: "甲中水進入細胞使細胞液變稀，細胞內滲透壓會減小。" },
      E: { verdict: "incorrect", reason: "丙中細胞失水並發生質離，膨壓會下降而不是變大。" }
    },
    takeaway: "吸水使膨壓上升、細胞液變稀；失水使膨壓下降並可能發生質離。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-50": {
    encouragement: "短日照植物其實在意的是「連續長夜」；把每天尾端和隔天開頭接起來看。",
    keyIdea: "A、B、C 每天都有至少 8 小時連續黑暗，連做四天可達開花條件。",
    steps: ["將一天 24 小時循環接起來，計算每個選項最長的連續黑暗。", "A、B、C 的長夜至少 8 小時且持續四天，D、E 的黑暗被光打斷或不足。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "傍晚到隔日清晨的黑暗接起來共 8 小時，達到臨界夜長。" },
      B: { verdict: "correct", reason: "每天有超過 8 小時的連續黑暗，四天後可誘導開花。" },
      C: { verdict: "correct", reason: "每天的長夜明顯超過臨界 8 小時，符合長夜性植物需求。" },
      D: { verdict: "incorrect", reason: "黑暗被中間照光時段分割，單一連續夜長沒有達到要求。" },
      E: { verdict: "incorrect", reason: "兩段黑暗各自不足 8 小時，不能相加當成連續長夜。" }
    },
    takeaway: "光週期題要看最長的連續黑暗，夜間短暫照光會中斷長夜效果。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-101-52": {
    encouragement: "有凝集代表對應抗原存在：抗 A 凝集是 A 型特徵，抗 Rh 凝集就是 Rh 陽性。",
    keyIdea: "乙三者中只有抗 Rh 凝集為 O+；丙只有抗 A 凝集為 A−；丁抗 A、抗 B 都凝集為 AB−。",
    steps: ["逐列查看抗 A、抗 B 的凝集，判斷 ABO 血型。", "再看抗 Rh 是否凝集，分別加上正號或負號。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙沒有抗 A 凝集且抗 Rh 有凝集，不是 A−。" },
      B: { verdict: "incorrect", reason: "乙應為 O+，丙應為 A−，此組三人的判讀不符。" },
      C: { verdict: "incorrect", reason: "乙不具有 A、B 抗原，不能判為 AB+。" },
      D: { verdict: "correct", reason: "凝集圖依序判得乙 O+、丙 A−、丁 AB−，完全相符。" },
      E: { verdict: "incorrect", reason: "丙只有抗 A 凝集，是 A−而不是 AB−；丁才是 AB−。" }
    },
    takeaway: "抗 A 凝集表示有 A 抗原；抗 B 凝集表示有 B 抗原；抗 Rh 凝集表示 Rh+。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-102-29": {
    encouragement: "紅綠色盲是 X 聯隱性；正常男性不會只是「帶因」，女性才可能正常帶因。",
    keyIdea: "由患病父親或患病兒子可反推甲、丁、己三位正常女性一定帶因；乙、戊、庚一定不帶因。",
    steps: ["男性只有一條 X，帶色盲基因就會發病，因此正常男性不會帶因。", "沿譜系追蹤患病男性的 X 來源與女兒所得的 X，可確定女性帶因者。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "女性也能攜帶色盲基因而保持視覺正常，不是只有男性。" },
      B: { verdict: "incorrect", reason: "正常男性的唯一 X 必為正常基因，不存在正常男性帶因者。" },
      C: { verdict: "correct", reason: "譜系中甲、丁、己三位正常女性都可確定帶有色盲基因。" },
      D: { verdict: "incorrect", reason: "依譜系可確定不帶因的正常成員數並不是五位。" },
      E: { verdict: "correct", reason: "甲、丁、己雖視覺正常，但由親子關係可確定各帶一個色盲基因。" },
      F: { verdict: "correct", reason: "乙、戊、庚由性別與譜系關係可確定不攜帶色盲基因。" }
    },
    takeaway: "X 聯隱性中，正常男性不帶因；正常女性可能是異型合子帶因者。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-102-44": {
    encouragement: "能量沿食物鏈只會往上減少，所以能量最高的是生產者，最低的是最高級消費者。",
    keyIdea: "圖中能量由高到低為乙、戊、丁、甲、丙，因此丙是第四級消費者。",
    steps: ["先把能量最高的乙定為生產者。", "依能量逐級下降排列戊、丁、甲、丙，丙位於第五營養階層。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲的能量倒數第二，屬較高級消費者，不是第二營養階層。" },
      B: { verdict: "incorrect", reason: "能量最多不代表個體數一定最多，大型生產者可能數量較少。" },
      C: { verdict: "correct", reason: "丙總能量最低，位於生產者之上的第四級消費者位置。" },
      D: { verdict: "incorrect", reason: "丁是消費者但不一定只能吃肉，能量圖無法斷定食性。" },
      E: { verdict: "incorrect", reason: "能量最高的乙才是生產者，戊是初級消費者。" }
    },
    takeaway: "能量塔一定由生產者最多、向高營養階層逐級減少。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-102-45": {
    encouragement: "消長不是一種植物消失後下一種才瞬間出現，而是三者在時間上重疊、優勢依序更換。",
    keyIdea: "甲先增加後下降，乙接著成為優勢，最後丙上升並占優勢，符合圖 B。",
    steps: ["森林大火後先驅植物甲先出現並快速增加。", "環境改變後乙、丙先後增加，三者曲線應重疊且優勢順序為甲、乙、丙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "三個物種依次完全分開且都歸零，過度簡化群集消長。" },
      B: { verdict: "correct", reason: "甲先占優勢後下降，乙再上升，最後丙成為優勢，且時段互有重疊。" },
      C: { verdict: "incorrect", reason: "圖中三者高峰幾乎不重疊，不符合群集逐步替換的常見情形。" },
      D: { verdict: "incorrect", reason: "三種植物都持續累積且不衰退，無法表現優勢物種的取代。" },
      E: { verdict: "incorrect", reason: "三種植物都隨時間下降，和大火後重新建立群集的過程相反。" }
    },
    takeaway: "群集消長是物種相對優勢逐步改變，前後群集通常會有時間重疊。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-105-20": {
    encouragement: "X 聯隱性題先看男性：男性只有一條 X，正常就是 XY，患病就是 X′Y。",
    keyIdea: "2 號女性正常卻生有患病兒子，必須提供 X′，所以基因型為 X′X。",
    steps: ["患病兒子的 Y 來自父親，帶病的 X′一定來自母親 2 號。", "2 號本人正常，另一條 X 必為正常，因此是 X′X。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1 號男性患病，基因型應為 X′Y，不是正常的 XY。" },
      B: { verdict: "correct", reason: "2 號正常但有患病兒子，必為帶因女性 X′X。" },
      C: { verdict: "incorrect", reason: "5 號是正常男性，基因型應為 XY，不是 X′Y。" },
      D: { verdict: "incorrect", reason: "7 號患病男性應寫成 X′Y，不能寫成女性的 X′X′。" },
      E: { verdict: "incorrect", reason: "11 號女性正常但父親患病，至少會得到 X′，不能確定為 XX。" }
    },
    takeaway: "兒子的 X 來自母親、Y 來自父親；女兒則從父母各得到一條 X。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-106-44": {
    encouragement: "沿著演化樹由魚往人走，依共同祖先遠近排列：爬蟲、鳥、其他哺乳類、靈長類。",
    keyIdea: "蛇較早分支，雞次之；狗和猴同為哺乳類，猴又和人最近。",
    steps: ["魚已在最早分支，接著應放非鳥爬蟲類蛇，再放鳥類雞。", "狗與猴皆為哺乳類，猴和人同屬靈長類，應放在最靠近人的 4。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "狗與猴的位置顛倒，猴應比狗更接近人的分支。" },
      B: { verdict: "correct", reason: "蛇、雞、狗、猴依序代表與人共同祖先由遠到近。" },
      C: { verdict: "incorrect", reason: "蛇應比雞和狗更早分支，不能放在第三位置。" },
      D: { verdict: "incorrect", reason: "猴應最靠近人，不能早於雞與狗分支。" },
      E: { verdict: "incorrect", reason: "鳥類雞和哺乳類狗的演化位置被錯誤交換。" }
    },
    takeaway: "演化樹判親疏看最近共同祖先，不看外表像不像或誰比較進步。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-106-45": {
    encouragement: "實線是已發生、虛線是預測；曲線上升或下降，以及年齡高峰右移，就是主要線索。",
    keyIdea: "105 年人口仍增加；同一批人口五年後年齡增加，高峰右移；125 年後下降更陡。",
    steps: ["105 年仍在實線上升段，故人口持續成長。", "年齡結構會隨時間右移；預測線在 125 年後下降斜率變大。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "105 年實測人口曲線仍向上，表示總人口仍在成長。" },
      B: { verdict: "incorrect", reason: "出生數約二十萬不等於出生率 20%，分母應是總人口。" },
      C: { verdict: "correct", reason: "五年後原本人數最多的年齡層增加五歲，因此高峰向右移。" },
      D: { verdict: "correct", reason: "125 年後預測人口曲線下降更陡，表示減少速率加快。" },
      E: { verdict: "incorrect", reason: "圖中人口達高峰後下降，不是典型達承載量後維持的平台 S 型。" }
    },
    takeaway: "數量不是率；人口數要除以總人口等分母，才能稱為出生率。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-107-24": {
    encouragement: "先沿圖上的標線辨認花的四大構造，再判斷受精後各部位會變成什麼。",
    keyIdea: "丙是胚珠，受精後成種子；花原有六片花瓣，丁所指剩餘花瓣符合單子葉三的倍數。",
    steps: ["正式題圖顯示丙位於子房內，是胚珠；丁指花瓣。", "題目說已移除三片，圖中仍有三片，原有六片，符合單子葉植物特徵。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是柱頭但屬雌蕊的一部分，不是雄蕊。" },
      B: { verdict: "incorrect", reason: "乙是花藥，但其中成熟花粉為單套染色體 n。" },
      C: { verdict: "correct", reason: "丙是子房中的胚珠，完成受精後會發育成種子。" },
      D: { verdict: "correct", reason: "丁是花瓣，原有六片，符合單子葉植物花部三的倍數。" },
      E: { verdict: "incorrect", reason: "花柱與子房壁屬孢子體組織，細胞為雙套染色體 2n。" }
    },
    takeaway: "胚珠受精後成種子、子房發育成果實；花被三的倍數常見於單子葉植物。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-107-49": {
    encouragement: "色盲是 X 聯隱性；兩個患病兒子的 X 都來自母親乙。",
    keyIdea: "乙正常又能給兒子色盲基因，必有一個正常與一個色盲等位基因；戊若同型正常，子女都正常。",
    steps: ["丙、丁是色盲男性，表示母親乙必能提供色盲 X，但乙本人正常又有正常 X。", "若戊是同型合子且正常，只可能兩條都是正常 X，與丁所生兒女皆正常。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "父親甲是正常男性，唯一的 X 必為正常，不會帶色盲基因。" },
      B: { verdict: "correct", reason: "乙辨色正常，至少帶有一個正常等位基因，且另有一個色盲基因。" },
      C: { verdict: "incorrect", reason: "男性只有一條 X，不能用同型合子或異型合子描述丙丁。" },
      D: { verdict: "incorrect", reason: "即使己庚都正常，也可能只是機率結果，不能斷定戊必為同型合子。" },
      E: { verdict: "correct", reason: "戊若為同型正常女性，所有兒女都能得到正常 X，因此皆辨色正常。" }
    },
    takeaway: "X 聯性遺傳中，男性是半合子，不用同型或異型合子稱呼。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-107-52": {
    encouragement: "先判斷三種年齡圖：底寬是成長型、上下相近是穩定型、幼年少是衰退型。",
    keyIdea: "L 成長期對應 Z，M 高原期對應 Y，N 衰退期對應 X。",
    steps: ["L 族群快速增加，應搭配幼年個體多的 Z。", "M 大致穩定搭配 Y；N 下降搭配幼年少、老年多的 X。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "X 是衰退型年齡組成，不能放在快速成長的 L 階段。" },
      B: { verdict: "incorrect", reason: "Y 較穩定，不應對應最初快速增加的 L 階段。" },
      C: { verdict: "incorrect", reason: "L 對 Z 正確，但 M 與 N 的 X、Y 順序相反。" },
      D: { verdict: "incorrect", reason: "X 放在 L、Z 放在 M，都和族群成長狀態不符。" },
      E: { verdict: "incorrect", reason: "L 應是 Z 而不是 Y，後兩階段也未正確配對。" },
      F: { verdict: "correct", reason: "Z、Y、X 依序為成長型、穩定型、衰退型，正好對應 L、M、N。" }
    },
    takeaway: "年齡結構圖的幼年比例，能預告族群未來較可能成長、穩定或衰退。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-10": {
    encouragement: "血管總截面積最大時，血流速會最慢；像同一股水分散到很多小管。",
    keyIdea: "微血管總截面積最大，血流速最低，因此兩者呈負相關。",
    steps: ["沿血流順序辨認動脈、微血管、靜脈，微血管區總截面積達高峰。", "比較曲線可見總截面積上升時血流速下降，呈負相關。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "X 由心臟端一路下降，較像血壓，不是中段達峰的總截面積。" },
      B: { verdict: "incorrect", reason: "Y 在中段最低再回升，較像血流速，不是持續下降的血壓。" },
      C: { verdict: "incorrect", reason: "Z 在微血管區達最高，代表總截面積而不是血流速。" },
      D: { verdict: "incorrect", reason: "圖中血壓與總截面積不是全程固定的單一負相關關係。" },
      E: { verdict: "correct", reason: "總截面積最大的微血管區血流速最低，兩者呈負相關。" }
    },
    takeaway: "微血管總截面積大、血流慢，有利物質交換。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-12": {
    encouragement: "萌發時子葉先供應養分而變輕，下胚軸先伸長，上胚軸較晚才明顯生長。",
    keyIdea: "圖 B 同時呈現子葉持續下降、下胚軸先增加、上胚軸稍後增加。",
    steps: ["種子萌發初期消耗子葉儲存物，所以子葉相對重量下降。", "先由下胚軸把幼苗推出土面，之後上胚軸與葉片再加速生長。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中下胚軸出現太晚，不符合萌發早期先伸長的情形。" },
      B: { verdict: "correct", reason: "子葉下降、下胚軸先升、上胚軸後升，符合雙子葉萌發順序。" },
      C: { verdict: "incorrect", reason: "圖示子葉後期重新上升，不符合儲存養分持續被消耗。" },
      D: { verdict: "incorrect", reason: "上胚軸與下胚軸出現先後及子葉變化不符合萌發過程。" },
      E: { verdict: "incorrect", reason: "子葉在末期又明顯上升，和子葉養分逐步消耗不符。" }
    },
    takeaway: "萌發初期靠子葉供能；根與下胚軸先發展，上胚軸和真葉較晚。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-25": {
    encouragement: "這是根的橫切面；先看中央維管束，再找控制水分進入的內皮層。",
    keyIdea: "乙位於中央木質部，可運水與無機鹽；丙為內皮層，具有不透水的卡氏帶。",
    steps: ["正式題圖中央維管束呈根的排列，不是莖的維管束環。", "乙指木質部；丙位於內皮層，其細胞壁有防水構造。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此根的維管束排列較像單子葉植物，其葉脈較可能平行。" },
      B: { verdict: "incorrect", reason: "甲在皮層區，不是水分向上運輸的主要木質部。" },
      C: { verdict: "correct", reason: "乙位於木質部，能運送水分與溶於其中的無機鹽。" },
      D: { verdict: "correct", reason: "丙位於內皮層，卡氏帶使部分細胞壁具有不透水性。" },
      E: { verdict: "incorrect", reason: "圖中央維管束與外圍皮層配置顯示這是根的橫切面。" }
    },
    takeaway: "根的木質部運水與無機鹽；內皮層卡氏帶可控制物質進入中柱。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-27": {
    encouragement: "表格實驗先抓兩件事：頂芽感光，生長素能穿洋菜膠但不能穿雲母片。",
    keyIdea: "頂芽接受單側光並產生生長素，生長素向下影響芽鞘兩側伸長差，形成彎曲。",
    steps: ["不透光罩住頂芽或雲母片阻斷運輸時，向光性消失，表示頂芽感光並傳遞訊息。", "切除頂芽後加生長素洋菜膠仍彎曲，顯示生長素由頂芽向下調控生長。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "雲母片隔開向光面與背光面的橫向傳遞，芽鞘仍難形成兩側差異。" },
      B: { verdict: "incorrect", reason: "實驗 5 的彎曲由偏放的生長素造成，單純照光不會改變此結果。" },
      C: { verdict: "incorrect", reason: "生長素洋菜膠置中會讓兩側伸長相近，芽鞘不會明顯彎曲。" },
      D: { verdict: "correct", reason: "切除頂芽後補上含生長素膠塊仍生長，支持頂芽可產生生長素。" },
      E: { verdict: "correct", reason: "頂芽被不透光罩住就失去向光性，顯示頂芽細胞能感受光。" }
    },
    takeaway: "向光性流程是頂芽感光、生長素重新分布、背光側伸長較多而彎向光。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-57": {
    encouragement: "甲只有兩種表現型且約 3：1；乙有三種且約 1：2：1，直接對回孟德爾比例。",
    keyIdea: "甲為完全顯性的單基因遺傳；乙三種表現型呈 1：2：1，屬中間型遺傳。",
    steps: ["甲的兩柱約為 3/4 與 1/4，符合 H×H 的單基因顯隱性。", "乙三柱約為 1/4、1/2、1/4，表示異型合子有獨立中間表現型。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乙只有三種離散表現型，不是多基因造成的連續分布。" },
      B: { verdict: "correct", reason: "甲為 3：1 單基因遺傳，乙為 1：2：1 中間型遺傳。" },
      C: { verdict: "incorrect", reason: "甲不是三種 1：2：1 分布，乙也不是連續多基因分布。" },
      D: { verdict: "incorrect", reason: "甲沒有連續多種表現型，因此不能判為多基因遺傳。" },
      E: { verdict: "incorrect", reason: "二基因與三基因雜交會產生更多組合，不符合兩圖簡單比例。" }
    },
    takeaway: "完全顯性常見 3：1；中間型或共顯性常見 1：2：1。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-59": {
    encouragement: "根尖細胞會分裂，所以有複製前後兩群；成熟胚乳不分裂且通常是三套染色體。",
    keyIdea: "若根尖 2n 複製前 DNA 量為 100，成熟 3n 胚乳固定約為 150，對應圖 D。",
    steps: ["根尖主峰 100 代表 2n 細胞複製前 DNA 量，另一峰 200 代表複製後。", "胚乳是 3n，未進行分裂時 DNA 量為 100×3/2=150，形成單一峰。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 保留 100 與 200 兩峰，仍像正在分裂的二倍體細胞。" },
      B: { verdict: "incorrect", reason: "50 比二倍體複製前 DNA 還少，不可能代表三倍體胚乳。" },
      C: { verdict: "incorrect", reason: "100 只相當於一般二倍體複製前含量，不是三倍體。" },
      D: { verdict: "correct", reason: "成熟胚乳為三倍體，DNA 相對量約 150 且不分裂，呈單峰。" },
      E: { verdict: "incorrect", reason: "200 是二倍體複製後含量，高於未複製三倍體所需的 150。" }
    },
    takeaway: "被子植物胚乳通常是 3n；用倍數關係可從二倍體 DNA 量換算。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-60": {
    encouragement: "三域生命樹的重點是：真核生物和古菌的共同祖先，比和真細菌更近。",
    keyIdea: "正確生命樹應先分出真細菌，再由較近的共同祖先分出古菌與真核生物。",
    steps: ["比較每圖的分岔點，確認古菌與真核生物是否共享較近節點。", "圖 D 顯示真細菌較早分出，古菌和真核生物彼此較近。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中把真細菌與古菌排成較近親，和分子證據不符。" },
      B: { verdict: "incorrect", reason: "此圖的分岔順序未呈現古菌和真核生物共享較近祖先。" },
      C: { verdict: "incorrect", reason: "真細菌被畫成和真核生物較近，親緣關係配置錯誤。" },
      D: { verdict: "correct", reason: "真細菌先分支，古菌與真核生物共享較近共同祖先。" },
      E: { verdict: "incorrect", reason: "圖中將真細菌與真核生物配成近親，不符合三域關係。" }
    },
    takeaway: "自然分類依共同祖先建立；古菌在親緣上比真細菌更接近真核生物。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-108-62": {
    encouragement: "海洋表層有光能生產，深層雖黑暗仍有生物，能量多由上層有機物向下供應。",
    keyIdea: "近岸 Y 光照與養分充足，生產力高；M、N 深層主要仰賴 L 層產生的有機物。",
    steps: ["Y 位於近岸透光水域，光與陸源養分較充足，容易形成漁場。", "M、N 光線不足，主要利用從 L 層下沉的有機物與能量。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "X 潮間帶會週期曝氣，但藤壺、藻類等附著生物仍可生存。" },
      B: { verdict: "correct", reason: "Y 近岸透光且養分充足，初級生產力高，容易形成漁場。" },
      C: { verdict: "incorrect", reason: "Z 深海底雖無光仍有分解者與深海動物，不是完全無生物。" },
      D: { verdict: "incorrect", reason: "外海 Z 的表層養分常少於近岸 Y，生產力不一定較高。" },
      E: { verdict: "correct", reason: "M、N 缺光，能量多來自 L 層製造後下沉的有機物。" }
    },
    takeaway: "深海沒有陽光仍有生命，其能量常來自表層下沉物或少數化學合成作用。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-109-7": {
    encouragement: "鏡頭已對準卻一片空白，先處理光線，而不是立刻大幅轉動對焦旋鈕。",
    keyIdea: "圖中丙為光圈，可調整進入鏡筒的光量，先讓視野有適當亮度。",
    steps: ["確認鏡頭已對準觀測物，代表物鏡方向不是首要問題。", "正式題圖的丙位於載物臺下方，是可調進光量的光圈。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲是目鏡，通常不是視野突然全黑時首先調整的位置。" },
      B: { verdict: "incorrect", reason: "乙接近物鏡與載物臺，題目已說鏡頭對準，不必先改動。" },
      C: { verdict: "correct", reason: "丙是光圈，調整後可增加或減少進光量，使觀測物顯現。" },
      D: { verdict: "incorrect", reason: "丁是調焦旋鈕附近，應在視野有光後再用來調清晰度。" },
      E: { verdict: "incorrect", reason: "戊位於底座光源區，但一般先用光圈微調視野亮度。" }
    },
    takeaway: "顯微鏡先有光、再找像、最後細調焦距；高倍鏡只用細調節輪。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-109-10": {
    encouragement: "排卵前動情素先達高峰；排卵後黃體形成，黃體素才明顯上升。",
    keyIdea: "圖 A 顯示動情素在排卵前有主高峰、黃體期再有小高峰，黃體素則在排卵後升高。",
    steps: ["第 15 天前濾泡發育，動情素逐漸升高並在排卵前達峰。", "排卵後黃體分泌黃體素，約第 21 天達高峰，週期末兩者下降。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "實線排卵前先高峰，虛線排卵後升高，週期末一起下降。" },
      B: { verdict: "incorrect", reason: "虛線在排卵日形成尖峰，和黃體素於排卵後漸升不符。" },
      C: { verdict: "incorrect", reason: "實線只有排卵日極窄尖峰，不符合動情素較寬的週期變化。" },
      D: { verdict: "incorrect", reason: "實線早期高峰過早，且排卵附近與黃體期的形態不合理。" },
      E: { verdict: "incorrect", reason: "虛線在週期前段先達峰，顛倒了黃體素排卵後才升高的順序。" }
    },
    takeaway: "動情素主峰在排卵前，黃體素主峰在排卵後的黃體期。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-109-26": {
    encouragement: "每個結論都要在圖上找同品種、同天數、同處理時間的柱子來比較。",
    keyIdea: "零蔗糖仍有萌發；10% 可提升三天朱槿；20% 對鳳仙花不再有增益。",
    steps: ["先看 0% 各組仍有非零柱高，確認花粉可在無蔗糖時萌發。", "再逐組比較 10% 與 20% 相對於 0% 的萌發率變化。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "0% 蔗糖時仍可看到花粉萌發率大於零，表示能萌發。" },
      B: { verdict: "incorrect", reason: "一天鳳仙花在 5% 蔗糖時萌發率明顯高於 0%，有增益。" },
      C: { verdict: "correct", reason: "三天朱槿在 10% 蔗糖時的柱高高於 0%，顯示有增益。" },
      D: { verdict: "incorrect", reason: "並非所有 15% 組都低於 10%，部分朱槿處理並不符合。" },
      E: { verdict: "correct", reason: "鳳仙花在 20% 蔗糖時沒有高於 0% 對照，沒有增益。" }
    },
    takeaway: "圖表實驗比較要控制其他條件相同，才能把差異歸因於單一變因。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-109-51": {
    encouragement: "先由外祖父母的 A、B 型和 O 型孫女，判斷家族中一定藏有 i 等位基因。",
    keyIdea: "明明為 B 型且先生 X 的血型未定，依可能基因型組合，女兒可出現 A、B、AB、O 四型。",
    steps: ["O 型外甥女表示白白與 Y 都能提供 i，家族中 A、B 型者可能為異型合子。", "明明可能為 IBi，X 的血型未限定；不同可能配對可產生四種 ABO 血型。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "媽媽 A 型但需考慮家族中的 i，不能斷定是 IAIA 同型合子。" },
      B: { verdict: "incorrect", reason: "爸爸 B 型仍可能是 IBIB 或 IBi，不能直接排除同型合子。" },
      C: { verdict: "incorrect", reason: "X 未標血型，僅由 A 型兒子不能斷定 X 必為同型 A 型。" },
      D: { verdict: "incorrect", reason: "Y 與 B 型白白生出 O 型女兒，只能確定 Y 帶 i，不一定是 ii。" },
      E: { verdict: "correct", reason: "明明與 X 的可能基因型組合，可讓女兒出現 A、B、AB、O 四型。" }
    },
    takeaway: "族譜問「可能」時要保留所有不違反已知親子血型的基因型。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-109-54": {
    encouragement: "森林大火後土壤仍在，所以恢復比從裸岩開始快；群集也會逐步而連續改變。",
    keyIdea: "早期甲物種少於後期丙；乙競爭小於成熟的丁；大火後屬次級消長，較火山裸地快。",
    steps: ["圖中植被由草本、灌木到喬木，物種與結構逐漸增加。", "森林大火保留土壤與種子庫，恢復速度快於火山爆發後的初級消長。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲是早期少數先驅植物，丙已有更多草本灌木與幼樹，豐富度較高。" },
      B: { verdict: "correct", reason: "乙群集物種與個體較少，資源競爭通常小於成熟的丁群集。" },
      C: { verdict: "correct", reason: "大火後土壤仍在，次級消長通常比火山裸地的初級消長快。" },
      D: { verdict: "incorrect", reason: "巔峰群集仍會受出生死亡、擾動和氣候影響，組成不是永遠不變。" },
      E: { verdict: "incorrect", reason: "各階段會重疊並逐漸替換，植被外貌變化通常是連續的。" }
    },
    takeaway: "有土壤保留的是次級消長，通常比從裸地開始的初級消長更快。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-110-45": {
    encouragement: "多樣性不只看物種數，也看各物種數量是否均勻；丙兩者都較好。",
    keyIdea: "丙樣區物種種類多且數量分布較均勻，符合闊葉林的高物種多樣性。",
    steps: ["比較三區柱狀圖，丙包含的植物種類最多。", "丙各物種個體數也較平均，整體多樣性高於甲乙。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "針闊葉混合林不是臺灣獨有，不能說此類型為臺灣特有。" },
      B: { verdict: "incorrect", reason: "柱狀圖只有物種與數量，不能直接判斷乙受人為干擾最嚴重。" },
      C: { verdict: "incorrect", reason: "乙的物種組成不足以支持它是臺灣海拔最高的生態系。" },
      D: { verdict: "incorrect", reason: "丙的物種多樣但無海拔資料，不能精確判定在 1800～2000 公尺。" },
      E: { verdict: "correct", reason: "丙物種多且數量較均勻，符合闊葉林高多樣性的特徵。" }
    },
    takeaway: "物種多樣性同時考慮豐富度與均勻度，不是只數有幾根柱子。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-110-46": {
    encouragement: "生物量塔的數字每往上一層約只剩一成，消失的能量主要以熱散出。",
    keyIdea: "呼吸與分解把化學能轉成熱；每升一營養階層約有 80～90% 能量未傳上去。",
    steps: ["圖中生物量由 1000、200、30 到 1，逐級大幅減少。", "能量在呼吸、活動與分解中散失，主要最後成為熱能。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高營養階層不一定體型較大，例如寄生者可能比宿主小。" },
      B: { verdict: "correct", reason: "生物使用能量後，多數最終以熱能形式散失到環境。" },
      C: { verdict: "correct", reason: "呼吸作用與分解作用都會消耗有機物並造成可用能量流失。" },
      D: { verdict: "correct", reason: "相鄰階層通常只傳遞約 10～20%，所以流失約 80～90%。" },
      E: { verdict: "incorrect", reason: "圖是生物量與能量關係，不能推算族群個體數固定消失比例。" }
    },
    takeaway: "能量沿食物鏈單向流動且逐級減少，主要以熱能散失。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-111-53": {
    encouragement: "血液抹片中紅血球數量壓倒性最多，雷射遇到的主要反射物也會是紅血球。",
    keyIdea: "紅血球在血液中數量最多、占有的截面面積最大，是反射訊號的主要來源。",
    steps: ["觀察正式血液抹片，可見大量淡色圓盤狀紅血球。", "白血球與血小板數量遠少於紅血球，因此總反射以紅血球為主。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "紅血球數量最多且尺寸足以散射雷射光，是主要反射來源。" },
      B: { verdict: "incorrect", reason: "白血球雖較大但數量遠少於紅血球，不是主要總反射來源。" },
      C: { verdict: "incorrect", reason: "血小板體積小且數量低於紅血球，貢獻的反射較少。" },
      D: { verdict: "incorrect", reason: "血漿蛋白質分散在液體中，並非抹片圖中主要可見反射顆粒。" },
      E: { verdict: "incorrect", reason: "水是血漿主要成分，但題目依抹片顆粒判斷，主反射來自血球。" }
    },
    takeaway: "判斷總訊號時，不只看單個大小，也要看數量與總面積。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-112-55": {
    encouragement: "把表格換成比例：有 X 時 Y 出現得少，沒有 X 時 Y 出現得多。",
    keyIdea: "偵測到 X 時 Y 的比例明顯較低，最合理推論是 X 抑制 Y 生長。",
    steps: ["有 X 的樣本中，Y 為 17/(17+96)，比例較低。", "沒有 X 的樣本中，Y 為 15/(15+16)，比例較高，因此 X 可能抑制 Y。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "X 存在時 Y 較少出現，最符合 X 抑制 Y 生長的關係。" },
      B: { verdict: "incorrect", reason: "若 Y 抑制 X，應看到有 Y 時 X 比例下降，但表格主要支持相反方向。" },
      C: { verdict: "incorrect", reason: "資料不足以顯示雙方都互相抑制，只明顯支持 X 對 Y。" },
      D: { verdict: "incorrect", reason: "X 有無和 Y 出現比例差異很大，不能說彼此沒有影響。" },
      E: { verdict: "incorrect", reason: "若 X 促進 Y，X 存在時 Y 應較常出現，與資料相反。" }
    },
    takeaway: "列聯表要比較條件比例，不能只比較四格的原始人數。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-112-56": {
    encouragement: "廣泛使用抗生素會不斷提高選擇壓力，所以試驗要逐步增加劑量觀察細菌能否撐住。",
    keyIdea: "圖 A 隨時間階梯式增加抗生素劑量，最能模擬用藥後抗藥菌逐步被篩選。",
    steps: ["開始以較低劑量讓族群接受選擇，再逐次提高抗生素濃度。", "若細菌能在越來越高劑量下生長，就能量出抗藥性的形成與程度。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "劑量隨時間逐步提高，可持續篩選並測出能耐受更高濃度的細菌。" },
      B: { verdict: "incorrect", reason: "劑量一路降低，選擇壓力變弱，不像廣泛用藥造成的抗藥性篩選。" },
      C: { verdict: "incorrect", reason: "劑量幾乎固定，較難比較抗藥程度上限如何逐步提高。" },
      D: { verdict: "incorrect", reason: "先降後升的設計不能穩定模擬抗生素持續造成的選擇壓力。" },
      E: { verdict: "incorrect", reason: "劑量先升後降，後期反而放寬條件，不利測量最高耐受程度。" }
    },
    takeaway: "抗生素不會讓細菌主動需要變強，而是篩選出原本較能存活的抗藥個體。",
    reviewStatus: "approved", reviewerRole: "biology"
  }
});
