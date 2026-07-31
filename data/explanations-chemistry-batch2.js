window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-115-19": {
    encouragement: "先看石蕊的顏色變化，就能把問題縮小成「哪一個反應得到酸性溶液」。",
    keyIdea: "藍色石蕊變紅表示溶液呈酸性。",
    steps: ["逐項判斷反應後水溶液的酸鹼性。", "二氧化硫溶於雨水會形成酸性溶液，因此選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鈉和水反應生成氫氧化鈉，溶液呈鹼性。" },
      B: { verdict: "incorrect", reason: "氧化鈣和水形成氫氧化鈣，溶液呈鹼性。" },
      C: { verdict: "incorrect", reason: "雙氧水分解主要生成水和氧氣，不會得到酸性溶液。" },
      D: { verdict: "correct", reason: "二氧化硫溶於雨水形成酸性溶液，可使藍色石蕊變紅。" },
      E: { verdict: "incorrect", reason: "小蘇打水溶液呈弱鹼性。" }
    },
    takeaway: "藍色石蕊變紅，就是在找酸性溶液。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-115-22": {
    encouragement: "數字雖多，但把兩種產物各自換成莫耳數，就能分開計算。",
    keyIdea: "反應放熱量等於兩種產物各自生成量乘上每莫耳放熱量的總和。",
    steps: ["P₄O₆ 為 5.5÷220＝0.025 mol，P₄O₁₀ 為 21.3÷284＝0.075 mol。", "放熱量為 0.025×1640＋0.075×3000＝266 kJ；放熱的 ΔH 為負值。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "把兩個每莫耳放熱量直接相加，沒有依實際莫耳數換算。" },
      B: { verdict: "incorrect", reason: "反應是放熱，Q 不應為正值。" },
      C: { verdict: "correct", reason: "實際共放出 266 kJ，所以 Q＝−266 kJ。" },
      D: { verdict: "incorrect", reason: "此數值沒有同時計入兩種氧化物的生成熱，且符號錯誤。" },
      E: { verdict: "incorrect", reason: "只用單一比例估算會漏掉另一種產物的放熱量。" }
    },
    takeaway: "混合生成物要分別算熱量，放熱的 ΔH 記得加負號。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-30": {
    encouragement: "這題逐項問自己「利用了什麼性質差異」就能判斷。",
    keyIdea: "分離方法要配合溶解度、沸點或顆粒移動性等性質差異。",
    steps: ["再結晶需要合適溶劑；蒸餾利用沸點差；層析利用移動與吸附差異。", "逐項比對後，A、C 的方法與物質性質相符。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "硝酸鉀在水中的溶解度隨溫度變化明顯，適合用水再結晶；汽油不合適。" },
      B: { verdict: "incorrect", reason: "硫酸銅溶液中沒有硫酸鈉，不能憑空結晶出硫酸鈉。" },
      C: { verdict: "correct", reason: "蒸餾可取得水，剩餘濃縮鹽水可再結晶取得氯化鈉。" },
      D: { verdict: "incorrect", reason: "葉綠素沸點高且受熱可能分解，蒸餾時先餾出的是溶劑，不是葉綠素。" },
      E: { verdict: "incorrect", reason: "兩種無機鹽離子不適合用一般濾紙層析有效分離。" }
    },
    takeaway: "先找性質差異，再選對應的分離方法。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-31": {
    encouragement: "兩個反應都產生水，但反應物的本質不一樣，逐點比較就好。",
    keyIdea: "乙酸是弱電解質，HCl 是強電解質；蒸餾看沸點，中和通常放熱。",
    steps: ["酯化不是 H⁺與 OH⁻直接中和，不能和強酸強鹼共用同一淨離子式。", "再判斷電解質、化合物種類、蒸餾原理與熱效應，可得 B、D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "酯化反應不是 H⁺＋OH⁻→H₂O 的中和淨離子反應。" },
      B: { verdict: "correct", reason: "乙酸與 HCl 溶於水都可產生 H⁺，兩者都是電解質。" },
      C: { verdict: "incorrect", reason: "乙酸與 HCl 都是以共價鍵形成的分子化合物，不是離子化合物。" },
      D: { verdict: "correct", reason: "蒸餾正是利用各成分沸點不同來分離乙酸乙酯。" },
      E: { verdict: "correct", reason: "強酸與強鹼的中和反應會放出熱量。" }
    },
    takeaway: "產物同樣有水，不代表兩個反應的原理完全相同。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-32": {
    encouragement: "百分比題先假設有 100 克樣品，計算會變得很直接。",
    keyIdea: "各元素質量除以原子量，再化成最簡整數比即可得到分子式。",
    steps: ["以 100 克計，C、H、N、O 的莫耳數約為 5.98、7.65、0.332、0.997。", "全部除以最小值 0.332，比例約為 18：23：1：3。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "此式的氮有 2 個、氧有 2 個，與元素分析比例不符。" },
      B: { verdict: "incorrect", reason: "碳、氫、氮比例都不符合 18：23：1。" },
      C: { verdict: "correct", reason: "C₁₈H₂₃NO₃ 正好符合計算出的 18：23：1：3。" },
      D: { verdict: "incorrect", reason: "碳數、氫數與氧數都和莫耳比不符。" },
      E: { verdict: "incorrect", reason: "此式含 2 個氮，與計算出的 1 個氮不符。" }
    },
    takeaway: "重量百分比先換莫耳數，再找最簡整數比。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-33": {
    encouragement: "把「大分子由什麼小單元接起來」配對，就能快速完成。",
    keyIdea: "澱粉、纖維素由葡萄糖構成；蛋白質由胺基酸構成；核酸由核苷酸構成。",
    steps: ["逐一回想四類生物大分子的基本組成單元。", "A 與 E 的單體配對正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "纖維素與澱粉都是由許多葡萄糖單元連接而成。" },
      B: { verdict: "incorrect", reason: "蛋白質的基本單元是胺基酸，不是核苷酸。" },
      C: { verdict: "incorrect", reason: "DNA 的基本單元是核苷酸，不是葡萄糖和胺基酸。" },
      D: { verdict: "incorrect", reason: "脂肪通常由甘油與脂肪酸形成，不是脂肪酸反覆聚合的聚合物。" },
      E: { verdict: "correct", reason: "RNA 是由核苷酸連接而成的聚合物。" }
    },
    takeaway: "蛋白質找胺基酸，核酸找核苷酸，澱粉與纖維素找葡萄糖。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-114-57": {
    encouragement: "燃燒題把甲烷、丙烷與丁烷的平衡式分開看，就不會混在一起。",
    keyIdea: "完全燃燒的氧氣、水、二氧化碳與熱量，都要依化學式和質量換算。",
    steps: ["甲烷完全燃燒式為 CH₄＋2O₂→CO₂＋2H₂O。", "比較每克燃料的耗氧、產水與產碳量後，可判斷 A、E。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "CH₄＋2O₂→CO₂＋2H₂O 已配平，是甲烷完全燃燒式。" },
      B: { verdict: "incorrect", reason: "等莫耳的丙烷與丁烷燃燒熱不同，放熱不會剛好各占一半。" },
      C: { verdict: "incorrect", reason: "每克甲烷所需氧氣莫耳數比每克丙烷、丁烷多，不會相同。" },
      D: { verdict: "incorrect", reason: "每克甲烷產生的水莫耳數也比丙烷、丁烷多。" },
      E: { verdict: "correct", reason: "產生相同熱量時，甲烷的單位能量碳排較低，生成 CO₂ 較少。" }
    },
    takeaway: "比較燃料要換成相同質量或相同能量，不能只看反應係數。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-10": {
    encouragement: "不用把五個式子都完整燃燒，只要用碳數和氫數算 CO₂／水重量比。",
    keyIdea: "CₓHᵧ 完全燃燒生成 x mol CO₂ 和 y／2 mol H₂O。",
    steps: ["二氧化碳與水的重量比為 44x：9y。", "丁 C₆H₈ 的比值是 264：72＝11：3。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "C₁₉H₁₉N₇O₆ 的碳氫比例算不出 11：3。" },
      B: { verdict: "incorrect", reason: "C₂₀H₃₀O 的 CO₂／水重量比不是 11：3。" },
      C: { verdict: "incorrect", reason: "C₂₈H₄₄O 的碳氫比例不符合題目。" },
      D: { verdict: "correct", reason: "C₆H₈ 燃燒生成 6CO₂ 與 4H₂O，重量比正是 11：3。" },
      E: { verdict: "incorrect", reason: "C₂₉H₅₀O₂ 生成的水比例較高，不符合 11：3。" }
    },
    takeaway: "燃燒產物重量比，可直接由分子式的碳氫數計算。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-11": {
    encouragement: "先把 X、Y 認出來：第二週期 4 個價電子是碳，6 個是氧。",
    keyIdea: "X＝C、Y＝O，再用原子結構與 CO、CO₂ 性質逐項判斷。",
    steps: ["X 是碳，Y 是氧，所以 XY＝CO，XY₂＝CO₂。", "比較半徑、中子質子比、孤對電子與水溶液酸鹼性，可得 B、D、E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "同週期由左到右原子半徑通常變小，所以氧半徑小於碳。" },
      B: { verdict: "correct", reason: "¹²C 有 6 質子6中子，¹⁶O 有8質子8中子，比值都為1。" },
      C: { verdict: "incorrect", reason: "CO 與 CO₂ 分子式不同，不能互為同分異構物。" },
      D: { verdict: "correct", reason: "CO₂ 共有4對孤對電子，CO 共有2對，正好是2倍。" },
      E: { verdict: "correct", reason: "CO₂ 溶於水可形成碳酸，使水溶液呈弱酸性。" }
    },
    takeaway: "先由價電子認元素，再把代號換成熟悉的 CO 與 CO₂。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-12": {
    encouragement: "目標是把硫化物變成硫酸根，也就是要讓硫被氧化。",
    keyIdea: "要完成氧化，需要選氧化劑；過氧化氫可提供氧化作用。",
    steps: ["硫化物中的硫氧化數較低，變成 SO₄²⁻時氧化數升高。", "H₂O₂ 是選項中合適的氧化劑，因此選 B。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氨水主要表現鹼性，不能把硫化物完全氧化成硫酸根。" },
      B: { verdict: "correct", reason: "過氧化氫具有氧化性，可將硫化物氧化成 SO₄²⁻。" },
      C: { verdict: "incorrect", reason: "鋅金屬常作還原劑，方向與題目需要相反。" },
      D: { verdict: "incorrect", reason: "鹽酸提供酸性環境，但不是完成此氧化的氧化劑。" },
      E: { verdict: "incorrect", reason: "氯化鉀是穩定鹽類，沒有足夠氧化能力。" }
    },
    takeaway: "氧化數要升高，就要找能接受電子的氧化劑。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-14": {
    encouragement: "先配平，再換算莫耳數；兩個步驟就能到答案。",
    keyIdea: "配平後 1 mol 硼烷氨生成 3 mol 氫氣。",
    steps: ["配平為 H₃NBH₃＋HCl＋3H₂O→H₃BO₃＋NH₄Cl＋3H₂。", "1.54÷30.8＝0.050 mol，氫氣為0.150 mol，體積0.150×24.5＝3.68 L。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "只按 1：1 估算，漏掉配平後會生成3倍莫耳的氫氣。" },
      B: { verdict: "incorrect", reason: "硼烷氨莫耳質量或氫氣係數換算不正確。" },
      C: { verdict: "correct", reason: "0.050 mol 硼烷氨生成0.150 mol氫氣，即3.68 L。" },
      D: { verdict: "incorrect", reason: "此值高估了硼烷氨的莫耳數。" },
      E: { verdict: "incorrect", reason: "沒有依1.54克與30.8 g/mol正確換算。" }
    },
    takeaway: "化學計量先配平，係數比才是莫耳比。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-15": {
    encouragement: "想讓氣球最容易浮起，就要讓混合氣體的平均質量越小。",
    keyIdea: "雜質比例相同時，雜質的莫耳質量越小，混合氣體越輕。",
    steps: ["各店氦氣都有1%雜質，所以只比較雜質的莫耳質量。", "Ne 為20.2，比 N₂、O₂、Ar、CO₂ 都小，因此選 C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CO₂ 的莫耳質量44，是五種雜質中最重的。" },
      B: { verdict: "incorrect", reason: "N₂ 的莫耳質量28，比氖氣20.2重。" },
      C: { verdict: "correct", reason: "氖氣的莫耳質量20.2最小，混合後氣體最輕。" },
      D: { verdict: "incorrect", reason: "氬氣的莫耳質量40，會讓混合氣體較重。" },
      E: { verdict: "incorrect", reason: "氧氣的莫耳質量32，比氖氣重。" }
    },
    takeaway: "同體積比例下，選莫耳質量最小的雜質，氣球會更容易浮起。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-16": {
    encouragement: "把黑色咖啡粉想成更會吸收陽光的表面，就能理解。",
    keyIdea: "碳化後顏色較深，吸收光與熱的能力增加，可促進水揮發。",
    steps: ["水揮發需要吸收能量。", "碳化咖啡粉較能吸收光和熱，讓表面得到更多能量，因此選 D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "咖啡粉不會和水一起變成氣體，變輕也不是主要原因。" },
      B: { verdict: "incorrect", reason: "粉末沒有把水擠出容器，題目觀察的是揮發增加。" },
      C: { verdict: "incorrect", reason: "碳化粉末不因易溶於水而促進揮發。" },
      D: { verdict: "correct", reason: "碳化後吸光、吸熱效果較強，可提供更多水揮發所需能量。" },
      E: { verdict: "incorrect", reason: "是否容易吸水不是揮發加快的主要能量來源。" }
    },
    takeaway: "深色碳化材料更能吸收光熱，能幫助水揮發。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-113-47": {
    encouragement: "只要寫出五種物質最熟悉的結構，就能找出雙鍵。",
    keyIdea: "CO₂ 含 C＝O 雙鍵，乙烯含 C＝C 雙鍵。",
    steps: ["水、甲醇與正丙醇只有單鍵。", "二氧化碳與乙烯具有雙鍵，因此選 A、D。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "二氧化碳的結構為 O＝C＝O，具有雙鍵。" },
      B: { verdict: "incorrect", reason: "水的兩個 O−H 鍵都是單鍵。" },
      C: { verdict: "incorrect", reason: "甲醇 CH₃OH 中只有單鍵。" },
      D: { verdict: "correct", reason: "乙烯 C₂H₄ 含有一個 C＝C 雙鍵。" },
      E: { verdict: "incorrect", reason: "正丙醇的碳碳鍵與碳氧鍵皆為單鍵。" }
    },
    takeaway: "CO₂ 找 C＝O，乙烯找 C＝C，兩者都有雙鍵。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-24": {
    encouragement: "這題把硝酸銨拆成 NH₄⁺ 和 NO₃⁻，很多敘述就會清楚。",
    keyIdea: "硝酸銨是離子化合物，水溶液偏酸，受熱分解同時發生氧化與還原。",
    steps: ["NH₄NO₃ 由 NH₄⁺與 NO₃⁻組成；NH₄⁺水解使溶液偏酸。", "配平 2NH₄NO₃→2N₂＋O₂＋4H₂O，係數和為9。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "硝酸銨由兩種離子構成，整體是離子化合物，不是分子化合物。" },
      B: { verdict: "correct", reason: "NH₄⁺會和水作用產生 H⁺，所以 [H⁺]＞[OH⁻]。" },
      C: { verdict: "correct", reason: "硝酸銨提供氮元素，植物製造核酸和蛋白質都需要氮。" },
      D: { verdict: "incorrect", reason: "NH₄⁺中的氮被氧化，NO₃⁻中的氮被還原，不是所有氮都被氧化。" },
      E: { verdict: "correct", reason: "平衡式係數為2、2、1、4，總和為9。" }
    },
    takeaway: "先拆離子，再看水解與氧化數，能同時解開多個選項。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-45": {
    encouragement: "pH 每差1，氫離子濃度就差10倍；這題只差1.3。",
    keyIdea: "氫離子濃度與 pH 呈十倍關係，pH下降1.3代表濃度增加10¹·³倍。",
    steps: ["pH 由6.6降到5.3，差值為1.3。", "10¹·³＝10×10⁰·³≈10×2＝20，所以增加約20倍。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1.3是 pH 差，不是氫離子濃度直接增加1.3倍。" },
      B: { verdict: "incorrect", reason: "pH 是對數尺度，不能把1.3當作13%。" },
      C: { verdict: "correct", reason: "10¹·³約等於20，氫離子濃度增加約20倍。" },
      D: { verdict: "incorrect", reason: "pH下降代表氫離子濃度增加，不是減少。" },
      E: { verdict: "incorrect", reason: "方向錯誤，且倍率也不是10%。" }
    },
    takeaway: "pH 是對數尺度，差1.3約等於濃度差20倍。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-112-46": {
    encouragement: "乳酪形成時 pH 下降，先抓住「酸化讓酪蛋白凝聚」這條主線。",
    keyIdea: "發酵產酸會降低 pH，改變酪蛋白表面性質並使其凝聚。",
    steps: ["乳酸發酵可在缺氧條件進行，進行時 pH 會下降。", "低 pH 改變酪蛋白親水性，使其凝聚；乳清蛋白較留在水相。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乳酸發酵不必以氧氣作為必要反應物。" },
      B: { verdict: "incorrect", reason: "能進行發酵不代表微生物在有氧環境一定無法存活。" },
      C: { verdict: "incorrect", reason: "發酵產酸會使 pH 下降到凝聚範圍，不是回升到6.6。" },
      D: { verdict: "correct", reason: "pH 改變蛋白質帶電狀態，也會改變酪蛋白的親水性與凝聚情形。" },
      E: { verdict: "correct", reason: "酸性條件下酪蛋白較易凝聚，乳清蛋白相對較容易留在水中。" }
    },
    takeaway: "發酵產酸使 pH 降低，酪蛋白因此改變性質並凝聚。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-9": {
    encouragement: "科學史不用全背，抓住「愛因斯坦用光子解釋光電效應」即可。",
    keyIdea: "光電效應的光子模型由愛因斯坦提出。",
    steps: ["逐項配對科學家與主要貢獻。", "只有愛因斯坦用光子模型解釋光電效應的敘述正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "馬克士威建立電磁理論，但經典電磁波模型無法完整解釋光電效應。" },
      B: { verdict: "correct", reason: "愛因斯坦以光量子概念成功解釋光電效應。" },
      C: { verdict: "incorrect", reason: "拉塞福以 α 粒子散射實驗探究原子結構，不是電子撞擊氫原子。" },
      D: { verdict: "incorrect", reason: "氫原子光譜在波耳模型提出前已被觀測。" },
      E: { verdict: "incorrect", reason: "拉塞福原子模型先提出，波耳模型在其後加以發展。" }
    },
    takeaway: "光電效應連結愛因斯坦與光子模型。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-10": {
    encouragement: "荷質比就是「電荷數除以質量」，三個離子各算一次即可。",
    keyIdea: "H⁺、He²⁺、Li⁺的荷質比分別約為1、0.5、0.145。",
    steps: ["H⁺為1÷1＝1，He²⁺為2÷4＝0.5。", "Li⁺為1÷6.9≈0.145，所以 H⁺＞He²⁺＞Li⁺。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "三個計算值依序為1、0.5、約0.145，順序正確。" },
      B: { verdict: "incorrect", reason: "H⁺質量最小，荷質比不是最小而是最大。" },
      C: { verdict: "incorrect", reason: "Li⁺的電荷只有1且質量最大，荷質比最小。" },
      D: { verdict: "incorrect", reason: "Li⁺與H⁺的質量不同，荷質比不相等。" },
      E: { verdict: "incorrect", reason: "Li⁺與H⁺荷質比不相等，He²⁺也不是最小。" }
    },
    takeaway: "荷質比直接用電荷數除以原子量比較。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-14": {
    encouragement: "依序完成體積換質量、質量換莫耳、燃燒係數換二氧化碳。",
    keyIdea: "辛烷每1 mol完全燃燒生成8 mol二氧化碳。",
    steps: ["50 L×0.70 kg/L＝35 kg辛烷，約為35000÷114＝307 mol。", "生成約307×8×44＝108000 g CO₂；108÷16≈6.8天。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "漏算辛烷每莫耳會生成8莫耳二氧化碳。" },
      B: { verdict: "incorrect", reason: "體積、密度或燃燒係數的換算不完整。" },
      C: { verdict: "correct", reason: "約生成108公斤CO₂，相當於森林約6.8天的吸收量。" },
      D: { verdict: "incorrect", reason: "此值約為正確結果的兩倍，換算中重複計算了比例。" },
      E: { verdict: "incorrect", reason: "沒有正確把50公升依密度換成35公斤辛烷。" }
    },
    takeaway: "燃料題按照體積、質量、莫耳、係數的順序換算。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-111-41": {
    encouragement: "要測黑碳，就把黑碳完全燃燒成可被吸收、秤重的產物。",
    keyIdea: "完全燃燒後，以吸收管分別吸收水與二氧化碳，可準確回推碳含量。",
    steps: ["黑碳完全燃燒主要轉成 CO₂，樣品中的氫則形成水。", "過氯酸鎂吸水、氫氧化鈉吸收CO₂，分別秤重可準確定量。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "直接秤重會把灰分與其他不燃物也算入，不能準確代表黑碳。" },
      B: { verdict: "incorrect", reason: "有機溶劑潤洗不能保證只留下黑碳。" },
      C: { verdict: "incorrect", reason: "CO₂會溶於水，不適合用排水集氣準確定量。" },
      D: { verdict: "correct", reason: "分別吸收水與CO₂並秤重，可由CO₂量回推黑碳含量。" },
      E: { verdict: "incorrect", reason: "黑碳不會在此條件下定量轉成甲烷，難以準確測量。" }
    },
    takeaway: "把碳定量變成 CO₂，再用吸收增重回推最可靠。",
    reviewStatus: "approved", reviewerRole: "chemistry"
  },
  "學-110-5": {
    encouragement: "看碳的氧化數有沒有改變，就能找出例外。",
    keyIdea: "只有形成碳酸鈣時，碳仍維持＋4，沒有氧化還原。",
    steps: ["呼吸、成煤、燃燒與光合作用都有元素氧化數改變。", "CO₂ 變成 CaCO₃ 時碳都是＋4，因此選 D。"],
    optionAnalysis: {
      A:{verdict:"incorrect",reason:"葡萄糖中的碳轉成CO₂，碳的氧化數改變。"}, B:{verdict:"incorrect",reason:"碳水化合物轉成煤時碳的氧化態改變。"},
      C:{verdict:"incorrect",reason:"燃燒時碳被氧化成CO₂。"}, D:{verdict:"correct",reason:"CO₂中的碳與CO₃²⁻中的碳都是＋4，只是形成沉澱。"}, E:{verdict:"incorrect",reason:"光合作用將CO₂中的碳還原成葡萄糖。"}
    },
    takeaway:"氧化數不變的沉澱反應，不屬於氧化還原。", reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-6": {
    encouragement:"先用題目給的 pH 範圍判斷，不必額外背很多資料。",
    keyIdea:"鹼性物質能使潤溼的紅色石蕊試紙變藍。",
    steps:["胃乳含制酸劑，通常呈鹼性。","鹼性胃乳使紅色石蕊變藍，因此選 B。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"血漿約呈弱鹼性，不會使藍色石蕊變紅。"},B:{verdict:"correct",reason:"制酸劑呈鹼性，可使潤溼紅色石蕊變藍。"},
      C:{verdict:"incorrect",reason:"鹽酸使藍色石蕊變紅，不會把試紙變白。"},D:{verdict:"incorrect",reason:"乙酸乙酯近中性，不會使紅色石蕊變藍。"},E:{verdict:"incorrect",reason:"pH 6.4未達石蕊變藍所需的8.3以上。"}
    },
    takeaway:"紅變藍找鹼性，藍變紅找酸性。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-8": {
    encouragement:"從原子序5排電子：2、3，就能逐項判斷。",
    keyIdea:"硼有3個價電子，BH₃中的硼周圍只有6個電子。",
    steps:["硼平均原子量不是整數，顯示自然界有同位素。","BH₃形成三個鍵，硼只得到6個價電子，不符合八隅體。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"平均原子量10.81顯示硼有不同同位素。"},B:{verdict:"incorrect",reason:"平均原子量不能代表每個硼原子都固定有5個中子。"},C:{verdict:"incorrect",reason:"硼的電子排列為2、3，有3個價電子。"},D:{verdict:"correct",reason:"BH₃中的硼只有三個鍵，周圍共6個電子。"},E:{verdict:"incorrect",reason:"NH₄BF₄由NH₄⁺和BF₄⁻組成，屬離子化合物。"}
    },
    takeaway:"BH₃是常見的不滿足八隅體例子。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-9": {
    encouragement:"四種物質燃燒產物相同，可用燃燒熱反推原物質能量。",
    keyIdea:"燃燒越少放熱，表示原物質本身能量越低、生成熱越負。",
    steps:["四者都含3個碳、6個氫，完全燃燒的CO₂與H₂O量相同。","燃燒熱由−2060到−1530逐漸較不負，生成熱順序相反，得 A。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"丙酸最穩定、生成熱最低，依序為丙酸＜丙酮＜丙醛＜丙烯。"},B:{verdict:"incorrect",reason:"丙酮燃燒比丙醛少放熱，生成熱應比丙醛低。"},C:{verdict:"incorrect",reason:"丙烯燃燒放熱最多，生成熱不是排在丙酮之前。"},D:{verdict:"incorrect",reason:"此順序把燃燒熱與生成熱的關係顛倒。"},E:{verdict:"incorrect",reason:"丙烯不應排在最低，丙酸才是最低。"}
    },
    takeaway:"產物相同時，燃燒越少放熱代表原物質能量越低。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-10": {
    encouragement:"把兩個線索拆開：半導體需要矽，人體需要氧。",
    keyIdea:"石英砂主要成分是SiO₂，不溶於水，含矽與氧。",
    steps:["半導體工業的重要元素是矽。","選項中同時含矽、含人體需要的氧且不溶於水的是石英砂。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"石英砂SiO₂含矽與氧，且不溶於水。"},B:{verdict:"incorrect",reason:"硫化鉛不含半導體工業主要需要的矽。"},C:{verdict:"incorrect",reason:"氯化鈣可溶於水且不含矽。"},D:{verdict:"incorrect",reason:"氧化鐵不含矽。"},E:{verdict:"incorrect",reason:"大理石CaCO₃不含矽。"}
    },
    takeaway:"石英砂是SiO₂，也是製取矽的重要來源。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-27": {
    encouragement:"設乙烯 x mol、氫氣 y mol，兩條資訊就能解出來。",
    keyIdea:"C₂H₄＋H₂→C₂H₆；乙烯全反應後，總莫耳數恰等於原氫氣莫耳數。",
    steps:["28x＋2y＝94；反應後總莫耳為x＋(y−x)＝y＝5。","代入得x＝3，生成3 mol乙烷並剩2 mol氫氣。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"兩個分子合成一個分子，總分子數減少。"},B:{verdict:"incorrect",reason:"原氫氣是5 mol，不是3 mol。"},C:{verdict:"correct",reason:"由質量式解得乙烯為3 mol。"},D:{verdict:"correct",reason:"5 mol氫氣消耗3 mol後還剩2 mol。"},E:{verdict:"incorrect",reason:"乙烯有3 mol且全反應，應生成3 mol乙烷。"}
    },
    takeaway:"先用反應後總莫耳求一個未知數，再用質量守恆求另一個。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-48": {
    encouragement:"直接沿著兩個半反應看「誰被消耗、誰生成」即可。",
    keyIdea:"放電消耗NH₄Cl與MnO₂；鋅被氧化，廢料可經處理回收MnO₂。",
    steps:["正極反應消耗NH₄Cl、MnO₂，負極反應生成Zn²⁺。","依溶解性過濾再加熱，可除碳並把Mn₂O₃轉回MnO₂。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"NH₄Cl放電時被消耗，所以新電池含量較高。"},B:{verdict:"incorrect",reason:"反應不是單純累積游離ZnCl₂，不能據此說廢電池ZnCl₂較高。"},C:{verdict:"correct",reason:"MnO₂在正極反應中被消耗。"},D:{verdict:"incorrect",reason:"負極持續生成Zn²⁺，並非逐漸變少。"},E:{verdict:"correct",reason:"水洗過濾保留不溶物，加熱可除碳並氧化Mn₂O₃回收MnO₂。"}
    },
    takeaway:"電池物質增減要以半反應中的反應物與生成物判斷。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-49": {
    encouragement:"把H₃BNH₃想成與乙烷相似的單鍵骨架，再檢查八隅體。",
    keyIdea:"氨硼烷有B−N單鍵且滿足八隅體；BN網狀結構中B、N交替連接。",
    steps:["氮的孤對電子提供給缺電子的硼形成B−N鍵。","形成後B與N皆達八隅體；類金剛石BN中每個原子連四個異種原子。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"氮的孤對電子已用來形成B−N配位鍵，結構中不保留1對孤對電子。"},B:{verdict:"correct",reason:"H₃BNH₃具有一個B−N單鍵。"},C:{verdict:"correct",reason:"形成B−N鍵後B與N周圍皆有8個電子。"},D:{verdict:"incorrect",reason:"類石墨BN在同一層中是B、N交替連接，不是分成純硼層與純氮層。"},E:{verdict:"correct",reason:"類金剛石BN中每個B與四個N相連，每個N也與四個B相連。"}
    },
    takeaway:"氮把孤對電子提供給硼，形成滿足八隅體的B−N鍵。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-50": {
    encouragement:"題目已把四個反應列出來，依式子判斷即可。",
    keyIdea:"臭氧由氧氣經光化學反應形成；NO生成吸熱，對流層臭氧是污染物。",
    steps:["O原子與O₂形成O₃；式1吸熱表示NO能量較高。","再判斷路易斯結構與酸鹼性，可得A、B、D。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"O₃可畫出雙鍵位置不同的等價共振結構。"},B:{verdict:"correct",reason:"O₂經反應產生O原子，再與O₂結合形成O₃。"},C:{verdict:"incorrect",reason:"NO₂溶於水形成酸性物質，水溶液不呈鹼性。"},D:{verdict:"correct",reason:"N₂與O₂生成NO是吸熱反應，NO總熱含量較高。"},E:{verdict:"incorrect",reason:"對流層臭氧是污染物，不能上升去修補平流層臭氧洞。"}
    },
    takeaway:"對流層臭氧是光化學污染物，不是修補臭氧層的好臭氧。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-110-53": {
    encouragement:"關鍵是小分子只是被關在C₆₀裡，沒有和外界或碳籠成鍵。",
    keyIdea:"A@C₆₀是固定組成的內嵌化合物，小分子與碳籠隔絕。",
    steps:["C₆₀與石墨都是碳元素形成的不同單質。","被封入的小分子不與碳籠成鍵，也不能和外界溶液反應。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"C₆₀與石墨都是碳的同素異形體。"},B:{verdict:"correct",reason:"H₂@C₆₀具有固定組成，可視為純物質。"},C:{verdict:"incorrect",reason:"H₂O@C₆₀是固定結構，不是任意比例混合物。"},D:{verdict:"incorrect",reason:"H₂被封在籠內，氫與碳之間沒有共價鍵。"},E:{verdict:"incorrect",reason:"HF被碳籠隔絕，無法接觸NaOH進行酸鹼反應。"}
    },
    takeaway:"@表示封裝而非成鍵，內部分子與外界隔絕。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-13": {
    encouragement:"固體與水溶液都不導電，代表溶於水後仍不形成離子。",
    keyIdea:"葡萄糖是分子化合物，溶於水但不解離，水溶液近中性且不導電。",
    steps:["先排除會產生離子的鹽類與酸。","葡萄糖可溶於水但保持分子狀態，因此選E。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"苯甲酸在水中可部分解離，水溶液呈酸性。"},B:{verdict:"incorrect",reason:"醋酸鈉是離子化合物，水溶液可導電。"},C:{verdict:"incorrect",reason:"KI溶於水形成K⁺與I⁻，可導電。"},D:{verdict:"incorrect",reason:"NH₄Cl溶於水形成離子且溶液偏酸。"},E:{verdict:"correct",reason:"葡萄糖溶於水仍為中性分子，不產生可導電離子。"}
    },
    takeaway:"能溶於水不等於會解離；葡萄糖溶液不導電。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-14": {
    encouragement:"兩式分別配平後，把所有係數列出來就好。",
    keyIdea:"平衡式係數集合中沒有3。",
    steps:["4NH₃＋5O₂→4NO＋6H₂O。","2NO＋O₂→2NO₂；出現1、2、4、5、6，沒有3。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"第二式O₂係數是1。"},B:{verdict:"incorrect",reason:"第二式NO與NO₂係數都是2。"},C:{verdict:"correct",reason:"兩個最簡整數平衡式都沒有係數3。"},D:{verdict:"incorrect",reason:"第一式NH₃與NO係數是4。"},E:{verdict:"incorrect",reason:"第一式O₂係數是5。"}
    },
    takeaway:"配平後再比較係數，避免只靠目測。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-15": {
    encouragement:"赫斯定律就像方程式加減：目標式缺什麼，就把已知式反轉或縮放。",
    keyIdea:"第一式取一半，第二式反向，相加得到目標式。",
    steps:["½(A＋2B→AB₂)的熱為½ΔH₁。","將B＋C→BC反向，熱為−ΔH₂；相加得½ΔH₁−ΔH₂。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"第一式乘½、第二式反向後相加，正是½ΔH₁−ΔH₂。"},B:{verdict:"incorrect",reason:"第一式應乘½，不是維持ΔH₁。"},C:{verdict:"incorrect",reason:"反應熱依反應式線性加減，不做平方相除。"},D:{verdict:"incorrect",reason:"赫斯定律不是把兩個反應熱相除。"},E:{verdict:"incorrect",reason:"反應式相加時，反應熱也相加，不相乘。"}
    },
    takeaway:"反應式怎麼反轉縮放，ΔH就跟著變號縮放。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-16": {
    encouragement:"三欄各自找代表：網狀固體、良導體、同族最小原子。",
    keyIdea:"Si為網狀固體，Mg導電導熱佳，N是第15族半徑最小。",
    steps:["逐欄檢查每組，不必三個元素互相比較。","只有B的Si、Mg、N依序符合三項條件。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"Ar為惰性氣體，不是導電導熱佳的元素態。"},B:{verdict:"correct",reason:"Si是網狀固體，Mg是良導體，N為同族半徑最小。"},C:{verdict:"incorrect",reason:"磷的元素態不是題目所指的典型共價網狀固體。"},D:{verdict:"incorrect",reason:"Si為半導體，導電性不如金屬，第二欄不符。"},E:{verdict:"incorrect",reason:"Al在第13族中不是原子半徑最小，硼才是。"}
    },
    takeaway:"表格配對題要逐欄驗證，三欄都對才算正確。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-32": {
    encouragement:"把豆漿步驟中的「倒出上層液」和「用篩子」連到分離方法。",
    keyIdea:"緩慢倒出液體是傾析；利用篩子留下固體是過濾。",
    steps:["步驟1傾斜盆子倒水，屬傾析。","步驟2與5使用篩子分離固液，屬過濾。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"流程沒有把液體汽化再冷凝，不是蒸餾。"},B:{verdict:"incorrect",reason:"流程沒有利用吸附與移動速率差，不是層析。"},C:{verdict:"correct",reason:"篩子讓液體通過、固體留下，原理類似過濾。"},D:{verdict:"correct",reason:"傾斜容器緩慢倒出水，屬於傾析。"},E:{verdict:"incorrect",reason:"流程沒有先溶解再因溶解度改變形成晶體。"}
    },
    takeaway:"篩子對應過濾，慢慢倒出上層液對應傾析。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-56": {
    encouragement:"把每種材料最醒目的性質抓出來，就能配對。",
    keyIdea:"硫酸鉀同時含離子鍵與硫酸根內共價鍵；甲烷穩定且難溶水。",
    steps:["甲要同時有離子鍵和共價鍵，符合K₂SO₄。","乙在空氣穩定且難溶水，可為CH₄；其餘配對與導電、延展性不符。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"K₂SO₄中離子間為離子作用，SO₄²⁻內有共價鍵。"},B:{verdict:"correct",reason:"甲烷在空氣中可穩定存在，且難溶於水。"},C:{verdict:"incorrect",reason:"題述丙可導電，符合石墨，不是金剛石。"},D:{verdict:"incorrect",reason:"丁易溶於水且溶液導電，不符合碳化矽。"},E:{verdict:"incorrect",reason:"有延展性的戊應是金屬鎂，不是脆性的氯化鈉。"}
    },
    takeaway:"材料配對先抓導電、溶解、鍵結與延展性。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-58": {
    encouragement:"混合等體積會讓濃度差先除以2，這是最容易漏掉的一步。",
    keyIdea:"pH6代表混合後多出1.0×10⁻⁶ M的H⁺；混合前濃度差是其2倍。",
    steps:["pH6得[H⁺]＝10⁻⁶ M，表示鹽酸略過量。","等體積混合使濃度差減半，所以原濃度差為2.0×10⁻⁶ M。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"忘了等體積混合後總體積加倍，原濃度差需乘2。"},B:{verdict:"correct",reason:"鹽酸較多2.0×10⁻⁶ M，混合後剩1.0×10⁻⁶ M H⁺。"},C:{verdict:"incorrect",reason:"pH小於7表示酸過量，不是鹼過量。"},D:{verdict:"incorrect",reason:"過量方向錯誤，應是鹽酸較多。"},E:{verdict:"incorrect",reason:"不只方向錯誤，數值也不符合等體積稀釋。"}
    },
    takeaway:"等體積酸鹼混合，過量濃度差會因總體積加倍而減半。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-60": {
    encouragement:"放電時沿著電子流看：LiC₆放出電子，所以它被氧化。",
    keyIdea:"放電反應自發放熱；Li⁺與電子由石墨釋出，移往另一電極。",
    steps:["式1向右時LiC₆失去電子，是氧化反應。","放電可輸出能量，總反應放熱；Li⁺和電子離開石墨。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"LiC₆失去電子，是還原劑而非氧化劑。"},B:{verdict:"incorrect",reason:"鑽石三維緊密網狀不利鋰離子在層間嵌入與移動。"},C:{verdict:"correct",reason:"電池放電輸出能量，總反應由左向右為放熱。"},D:{verdict:"correct",reason:"放電時LiC₆釋出Li⁺與電子。"},E:{verdict:"incorrect",reason:"鋰離子不是金屬鋰，起火風險不能說成Li⁺遇水燃燒。"}
    },
    takeaway:"放電時負極材料失去電子，反應放出可用能量。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-109-61": {
    encouragement:"三個實驗線索交叉比對，銀離子會同時符合。",
    keyIdea:"Ag⁺與I⁻、Cl⁻都沉澱，也能氧化Ni與Cu金屬。",
    steps:["AgI與AgCl皆難溶，符合第一項。","Ni、Cu都能置換Ag⁺；Ni變Ni²⁺使溶液呈綠色。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"Fe³⁺不會和Cl⁻形成題述沉澱，條件不全符。"},B:{verdict:"correct",reason:"Ag⁺形成AgI、AgCl，且可被Ni與Cu置換成銀。"},C:{verdict:"incorrect",reason:"Cu²⁺與Cl⁻通常不形成此沉澱，銅片也不會置換自身離子。"},D:{verdict:"incorrect",reason:"Pb²⁺雖可形成鹵化物沉澱，但不能同時完整符合金屬置換線索。"},E:{verdict:"incorrect",reason:"汞離子的沉澱與置換現象不符合三項完整條件。"}
    },
    takeaway:"沉澱反應加上金屬置換，可以鎖定銀離子。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-14": {
    encouragement:"完全燃燒只要配平氧氣係數，再由大排到小。",
    keyIdea:"CₓHᵧO𝓏燃燒需氧量為x＋y/4−z/2。",
    steps:["乙烷需3.5，甲醚與乙醇各需3，乙炔需2.5，乙酸需2 mol O₂。","順序為乙烷＞甲醚＝乙醇＞乙炔＞乙酸。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"乙醇需氧量小於乙烷，且乙酸不是與乙炔相等。"},B:{verdict:"incorrect",reason:"乙炔需氧量不會大於乙烷。"},C:{verdict:"correct",reason:"各燃燒係數依序為3.5、3、3、2.5、2。"},D:{verdict:"incorrect",reason:"乙炔與乙烷需氧量不同，乙酸也不大於甲醚。"},E:{verdict:"incorrect",reason:"乙烷的需氧量最高，不應排在後面。"}
    },
    takeaway:"等莫耳燃燒比較，直接比較平衡式的氧氣係數。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-15": {
    encouragement:"同位素題分開數中子，週期表題用「同週期向右半徑變小」。",
    keyIdea:"兩個指定水分子的中子總數都為9。",
    steps:["¹⁷O有9中子；¹⁶O有8中子，²H另有1中子。","兩個分子的中子總數相同，因此選A。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"9與8＋1都等於9個中子。"},B:{verdict:"incorrect",reason:"同週期Na、Mg、Al半徑依序變小，Na最大。"},C:{verdict:"incorrect",reason:"第17族室溫下有液態溴與固態碘，不全是氣體。"},D:{verdict:"incorrect",reason:"週期表左下元素較容易失去電子。"},E:{verdict:"incorrect",reason:"Be是鹼土金屬，不是類金屬。"}
    },
    takeaway:"質量數減原子序就是中子數。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-16": {
    encouragement:"先用OH⁻換算Ca(OH)₂，再由反應係數找到乙炔。",
    keyIdea:"CaC₂生成等莫耳Ca(OH)₂與C₂H₂；1 mol Ca(OH)₂含2 mol OH⁻。",
    steps:["0.020 mol OH⁻代表0.010 mol Ca(OH)₂。","乙炔也是0.010 mol，質量0.010×26＝0.26 g。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"把OH⁻直接除錯或少算了乙炔莫耳質量。"},B:{verdict:"correct",reason:"0.010 mol乙炔乘26 g/mol為0.26 g。"},C:{verdict:"incorrect",reason:"反應係數不是讓乙炔變成0.015 mol。"},D:{verdict:"incorrect",reason:"把0.020 mol OH⁻誤當成0.020 mol乙炔。"},E:{verdict:"incorrect",reason:"沒有依Ca(OH)₂含兩個OH⁻換算。"}
    },
    takeaway:"看到Ca(OH)₂要記得一莫耳含兩莫耳OH⁻。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-29": {
    encouragement:"把甲烷、丙烷、丁烷依碳鏈變長來比較。",
    keyIdea:"三者常溫皆為氣體；碳鏈越長，沸點與碳質量百分率通常越高。",
    steps:["甲烷、丙烷、丁烷在常溫常壓下皆為氣體。","由CH₄到C₃H₈、C₄H₁₀，碳質量百分率增加。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"液化天然氣與液化石油氣液體密度皆小於水。"},B:{verdict:"incorrect",reason:"丙烷沸點低於丁烷，丙烷比例升高會使平均沸點降低。"},C:{verdict:"correct",reason:"甲烷、丙烷、丁烷常溫常壓下都是氣體。"},D:{verdict:"incorrect",reason:"相同莫耳下丙烷、丁烷含更多可燃碳氫，放熱多於甲烷。"},E:{verdict:"correct",reason:"碳重量百分率依甲烷、丙烷、丁烷逐漸增加。"}
    },
    takeaway:"烷類碳鏈變長時，沸點與碳比例會改變。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-30": {
    encouragement:"層析操作抓兩件事：成分吸附力不同，展開液可以調整。",
    keyIdea:"濾紙層析利用各成分對濾紙與展開液親和力不同來分離。",
    steps:["樣品應點成小而集中的斑點，且起點不能浸入展開液。","改變展開液會改變成分移動情形與分離效果。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"各成分吸附力與溶解性不同，移動距離因而不同。"},B:{verdict:"incorrect",reason:"持續接觸會讓樣品斑點擴散，降低分離效果。"},C:{verdict:"incorrect",reason:"展開液液面須低於樣品起始點，不能接觸起始線。"},D:{verdict:"incorrect",reason:"應在展開液前緣接近停止線時取出，不是等最快成分到線。"},E:{verdict:"correct",reason:"展開液成分會改變各物質的親和力與移動速度。"}
    },
    takeaway:"樣品點要小、液面要低，展開液會影響分離。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-31": {
    encouragement:"沿著放電反應看Pb、PbO₂與H₂SO₄的增減即可。",
    keyIdea:"放電時兩極都形成較重的PbSO₄，硫酸被消耗；充電反向。",
    steps:["Pb與PbO₂都轉成PbSO₄，所以兩極質量增加。","H₂SO₄被消耗而濃度下降；充電時同一PbSO₄分別被氧化、還原。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"陽極Pb形成含硫酸根的PbSO₄，質量增加。"},B:{verdict:"correct",reason:"陰極PbO₂轉成PbSO₄，電極質量增加。"},C:{verdict:"correct",reason:"放電總反應消耗硫酸並生成水，硫酸濃度降低。"},D:{verdict:"correct",reason:"充電時PbSO₄分別變回Pb與PbO₂，同一物質兼作被還原與被氧化者。"},E:{verdict:"incorrect",reason:"鉛有毒，廢電池應專業回收，不能掩埋。"}
    },
    takeaway:"鉛蓄電池放電時兩極增重、硫酸濃度下降。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-34": {
    encouragement:"先由百分比找R與Q的質量關係，再求乙的下標。",
    keyIdea:"可求得乙為R₂Q₄，燃燒式R₂Q₄＋3O₂→2RO₂＋2Q₂O。",
    steps:["由甲R₂Q₆中Q占20%，得R原子量為Q的12倍；乙中Q占1/7，得a＝4。","配平後x＝3、y＝2、z＝2，x＋y＋z＝7。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"由乙的質量比例算得a＝4，不是2。"},B:{verdict:"correct",reason:"R₂Q₄完全燃燒需要3 mol O₂。"},C:{verdict:"correct",reason:"2個R原子生成2 mol RO₂，所以y＝2。"},D:{verdict:"incorrect",reason:"4個Q原子生成2 mol Q₂O，所以z＝2。"},E:{verdict:"correct",reason:"3＋2＋2＝7。"}
    },
    takeaway:"百分比先求元素質量比，再用原子守恆配平。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-64": {
    encouragement:"不用畫得很漂亮，先數兩個離子的總價電子。",
    keyIdea:"NO₃⁻與CO₃²⁻都有24個價電子，且都有共振結構。",
    steps:["NO₃⁻為5＋3×6＋1＝24；CO₃²⁻為4＋3×6＋2＝24。","兩者價電子總數相同，因此選E。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"兩者共振式都包含一個雙鍵，不是只有單鍵。"},B:{verdict:"incorrect",reason:"硝酸根可畫出讓中心氮滿足八隅體的結構。"},C:{verdict:"incorrect",reason:"兩者中心原子都沒有孤對電子。"},D:{verdict:"incorrect",reason:"兩者總價電子與鍵結型態相似，孤對電子總數相同。"},E:{verdict:"correct",reason:"NO₃⁻與CO₃²⁻都共有24個價電子。"}
    },
    takeaway:"先數總價電子，再判斷鍵與孤對電子。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-108-68": {
    encouragement:"抓住三個性質：石油醚比水輕、油性染料親油、肥皂可乳化。",
    keyIdea:"石油醚在上層；肥皂使油水乳化；Mg²⁺使肥皂失效而再分層。",
    steps:["步驟2油水分層，紅色油相在上；步驟3肥皂使界面模糊。","加入MgCl₂形成難溶鎂皂，乳化失效，再恢復紅色上層。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"石油醚比水密度小且染料親油，紅色有機層在上。"},B:{verdict:"incorrect",reason:"水密度較大，應在下層。"},C:{verdict:"incorrect",reason:"加入肥皂後會乳化，不會保持清楚兩層。"},D:{verdict:"correct",reason:"肥皂使油滴分散，界面不清且整體呈淡紅。"},E:{verdict:"correct",reason:"Mg²⁺破壞肥皂乳化，重新分層且紅色油相在上。"}
    },
    takeaway:"界面活性劑讓油水乳化，硬水離子會削弱效果。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-4": {
    encouragement:"各寫一次完全燃燒式，水的係數就是答案。",
    keyIdea:"甲醇每莫耳生成2莫耳水，乙醇每莫耳生成3莫耳水。",
    steps:["2CH₃OH＋3O₂→2CO₂＋4H₂O，所以每莫耳甲醇得2莫耳水。","C₂H₅OH＋3O₂→2CO₂＋3H₂O，所以比為2：3。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"兩種醇所含氫原子數不同，產水量不相同。"},B:{verdict:"incorrect",reason:"甲醇與乙醇產水係數不是1：2。"},C:{verdict:"incorrect",reason:"甲醇每莫耳不是只生成1莫耳水。"},D:{verdict:"correct",reason:"每莫耳甲醇與乙醇分別生成2與3莫耳水。"},E:{verdict:"incorrect",reason:"把兩者順序顛倒了。"}
    },
    takeaway:"完全燃燒先配平，產物係數就是莫耳比。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-6": {
    encouragement:"二乙醚與1-丁醇都含4個碳、10個氫、1個氧，差在連接方式。",
    keyIdea:"兩者分子式同為C₄H₁₀O，是結構不同的同分異構物。",
    steps:["相同分子式代表分子量、碳數與完全燃燒耗氧量相同。","醚基與羥基連接方式不同，所以結構式不同。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"示性式分別呈現醚與醇的官能基，不相同。"},B:{verdict:"incorrect",reason:"分子式相同，所以分子量相同。"},C:{verdict:"correct",reason:"原子連接方式不同，結構式不同。"},D:{verdict:"incorrect",reason:"兩者都含4個碳原子。"},E:{verdict:"incorrect",reason:"分子式相同，完全燃燒所需氧氣也相同。"}
    },
    takeaway:"同分子式但不同官能基，就是結構異構物。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-7": {
    encouragement:"實驗安全以「先預防、受傷立刻沖洗」為原則。",
    keyIdea:"實驗前讀懂步驟；操作腐蝕性藥品要戴合適手套。",
    steps:["甲是事前預防，正確；丙能降低皮膚接觸腐蝕物風險。","燙傷與眼睛濺藥都應先大量沖水，不可先塗藥或閉眼等待。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"甲正確，但乙應先以流動冷水沖洗，不先塗藥膏。"},B:{verdict:"correct",reason:"甲的事前閱讀與丙的防護手套都正確。"},C:{verdict:"incorrect",reason:"丁應立即在洗眼器下大量沖洗，不應閉眼直接送走。"},D:{verdict:"incorrect",reason:"乙、丁的緊急處置都不正確。"},E:{verdict:"incorrect",reason:"丙正確，但丁錯誤。"}
    },
    takeaway:"化學意外先大量沖水，再尋求專業處理。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-8": {
    encouragement:"依序平衡金屬、氮、氫、氧，很快能找到NO係數。",
    keyIdea:"平衡式為3Cu＋8HNO₃→3Cu(NO₃)₂＋4H₂O＋2NO。",
    steps:["先令Cu與Cu(NO₃)₂係數同為3。","完成氮、氫、氧守恆後，NO係數為2。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"NO設為1時無法用最小整數同時平衡所有原子。"},B:{verdict:"correct",reason:"最簡整數平衡式中NO係數是2。"},C:{verdict:"incorrect",reason:"3是Cu與Cu(NO₃)₂的係數。"},D:{verdict:"incorrect",reason:"4是H₂O的係數。"},E:{verdict:"incorrect",reason:"平衡式中沒有係數5。"}
    },
    takeaway:"配平後再讀係數，NO前面是2。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-36": {
    encouragement:"題目明說「放出226 kJ」，先把放熱的正負與倍數抓穩。",
    keyIdea:"放熱反應ΔH＝−226 kJ；逆反應吸熱，反應量加倍熱量也加倍。",
    steps:["正向反應放熱，可把226 kJ寫在生成物側。","逆向需吸收226 kJ；反應物加倍則放熱452 kJ。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"反應放熱會使未控溫系統有升溫趨勢。"},B:{verdict:"correct",reason:"把226 kJ列在生成物側可表示放熱。"},C:{verdict:"incorrect",reason:"放熱反應的ΔH應為−226 kJ。"},D:{verdict:"correct",reason:"逆反應要吸收等量熱。"},E:{verdict:"incorrect",reason:"莫耳數加倍時應放出452 kJ。"}
    },
    takeaway:"放熱ΔH為負，逆反應變吸熱，倍數也要跟著變。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-42": {
    encouragement:"找最大氫數時，用有機分子的飽和上限來判斷。",
    keyIdea:"含C、H、N、O的中性分子，氫數上限為2C＋2＋N＝7。",
    steps:["氧不影響飽和氫數上限，C＝2、N＝1。","n最大為2×2＋2＋1＝7。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"n＝1不飽和程度高，不是最大值。"},B:{verdict:"incorrect",reason:"n＝3仍可再增加氫。"},C:{verdict:"incorrect",reason:"n＝5不是飽和上限。"},D:{verdict:"correct",reason:"C₂含一個N時飽和氫數上限為7。"},E:{verdict:"incorrect",reason:"n＝9超過碳、氮正常價數允許的上限。"}
    },
    takeaway:"飽和氫上限可用2C＋2＋N快速判斷。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-43": {
    encouragement:"最小氫數要讓分子保持合理價鍵，同時增加不飽和程度。",
    keyIdea:"在題目給定的奇數中，C₂HNO可形成合理的高度不飽和結構，n最小為1。",
    steps:["氮使允許的氫數為奇數，候選是1、3、5、7。","n＝1仍能形成符合價數的分子，因此是最小值。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"C₂HNO可藉多鍵滿足原子價數，n＝1可成立。"},B:{verdict:"incorrect",reason:"n＝3可以成立但不是最小。"},C:{verdict:"incorrect",reason:"n＝5比可行的1大。"},D:{verdict:"incorrect",reason:"n＝7是飽和上限，不是最小。"},E:{verdict:"incorrect",reason:"n＝9超過合理上限。"}
    },
    takeaway:"最大氫數看飽和，最小氫數看多鍵能否滿足價數。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-44": {
    encouragement:"每項先算陰離子莫耳數，再乘上沉澱式需要的Ag⁺數。",
    keyIdea:"10 mL乘濃度得莫耳數；CrO₄²⁻每莫耳消耗2莫耳Ag⁺。",
    steps:["A到E消耗Ag⁺依序約為0.001、0.002、0.006、0.008、0.005 mol。","最大是0.4 M鉻酸根，選D。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"Cl⁻為0.001 mol，只消耗0.001 mol Ag⁺。"},B:{verdict:"incorrect",reason:"OH⁻為0.002 mol，消耗量小於D。"},C:{verdict:"incorrect",reason:"0.003 mol S²⁻消耗0.006 mol Ag⁺，仍小於D。"},D:{verdict:"correct",reason:"0.004 mol CrO₄²⁻形成Ag₂CrO₄，消耗0.008 mol Ag⁺。"},E:{verdict:"incorrect",reason:"Br⁻為0.005 mol，只消耗0.005 mol Ag⁺。"}
    },
    takeaway:"沉澱計量要同時看濃度、體積和電荷係數。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-45": {
    encouragement:"把醣類、蛋白質、油脂分開判斷，不要混在同一套規則。",
    keyIdea:"蛋白質由胺基酸以肽鍵連接；單醣與雙醣分類不同；飽和脂肪酸無雙鍵。",
    steps:["蛋白質與醣類的基本分類可直接判斷B、D。","兩種不同胺基酸排列次序可交換，形成兩種二肽。"],
    optionAnalysis:{
      A:{verdict:"incorrect",reason:"果糖為單醣，麥芽糖與乳糖為雙醣，分子式不全相同。"},B:{verdict:"correct",reason:"蛋白質是胺基酸以肽鍵連成的聚合物。"},C:{verdict:"correct",reason:"AB與BA排列不同，可形成兩種線性二肽。"},D:{verdict:"correct",reason:"葡萄糖是單醣，蔗糖是雙醣，兩者都屬碳水化合物。"},E:{verdict:"incorrect",reason:"飽和脂肪酸碳鏈不含C＝C雙鍵。"}
    },
    takeaway:"胺基酸順序會影響二肽；飽和脂肪酸沒有碳碳雙鍵。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-46": {
    encouragement:"找因人類活動明顯增加的溫室氣體，排除主要空氣成分與水氣。",
    keyIdea:"CO₂、CH₄、N₂O都會因燃燒、農業與工業活動增加。",
    steps:["化石燃料提高CO₂，畜牧與廢棄物提高CH₄，農業施肥等提高N₂O。","N₂不是溫室氣體；水氣主要是氣候回饋。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"畜牧、稻田與廢棄物分解等人類活動會增加CH₄。"},B:{verdict:"correct",reason:"燃燒化石燃料與土地利用改變會增加CO₂。"},C:{verdict:"correct",reason:"施肥與工業活動會增加N₂O。"},D:{verdict:"incorrect",reason:"N₂雖占大氣多數，但不是主要溫室氣體。"},E:{verdict:"incorrect",reason:"水氣主要隨溫度變化形成回饋，不列為題目要找的人為直接增加項。"}
    },
    takeaway:"人為增加的三個重點是CO₂、CH₄與N₂O。",reviewStatus:"approved",reviewerRole:"chemistry"
  },
  "學-107-47": {
    encouragement:"石油題抓住「分餾、混合物、辛烷值」三個核心。",
    keyIdea:"原油可分餾成多種餾分；辛烷值越高，抗震爆能力越好。",
    steps:["原油依沸點差分餾得到石油氣到瀝青等餾分。","石油醚是混合物；無鉛不等於不震爆；辛烷值衡量抗震爆。"],
    optionAnalysis:{
      A:{verdict:"correct",reason:"所列物質都是原油分餾可得到的不同餾分。"},B:{verdict:"incorrect",reason:"碳鏈變長時每公斤燃燒熱通常不會因分子量大而更高。"},C:{verdict:"incorrect",reason:"石油醚是低沸點烴類混合物，不是ROR′結構的醚類純物質。"},D:{verdict:"incorrect",reason:"無鉛只表示不添加鉛，不能保證完全不發生震爆。"},E:{verdict:"correct",reason:"辛烷值越高代表抗震爆表現越好。"}
    },
    takeaway:"石油醚不是醚；辛烷值看抗震爆，不看含鉛。",reviewStatus:"approved",reviewerRole:"chemistry"
  }
});
