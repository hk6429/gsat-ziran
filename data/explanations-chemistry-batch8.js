window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-83-27": {
    encouragement: "先找出小水珠的來源，再判斷它後來去了哪裡，兩次相變化就能把整題串起來。",
    keyIdea: "冰冷表面使空氣中的水蒸氣凝結；表面回暖後，液態水再汽化進入空氣。",
    steps: [
      "剛從冰箱取出的西瓜表面溫度低，會冷卻附近空氣。",
      "空氣中的水蒸氣遇冷凝結成小水珠，水不是從完整西瓜內滲出。",
      "西瓜在室內逐漸回暖後，小水珠汽化並擴散到空氣中。",
      "所以答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "完整西瓜表面的小水珠主要來自空氣中的水蒸氣，不是西瓜內的水遇熱滲出。" },
      B: { verdict: "incorrect", reason: "後段的汽化方向雖合理，但小水珠最初並不是由西瓜內部的水滲出。" },
      C: { verdict: "incorrect", reason: "小水珠確實由水蒸氣凝結而來，但久置消失是汽化，不是被果皮重新吸收。" },
      D: { verdict: "correct", reason: "空氣中水蒸氣先在冰冷表面凝結，表面回暖後再汽化並擴散至空氣。" }
    },
    takeaway: "冰飲或冷水果表面的水珠來自空氣；「遇冷凝結、回暖汽化」是完整過程。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-59": {
    encouragement: "這個實驗要測空氣原本含多少二氧化碳，所以反應開始前要先把氫氧化鈉和空氣隔開。",
    keyIdea: "氫氧化鈉會吸收CO₂；油層先隔絕空氣，避免正式測量前就發生吸收。",
    steps: [
      "氫氧化鈉溶液能和空氣中的CO₂反應。",
      "若準備裝置時溶液已接觸瓶內空氣，部分CO₂會提早被吸收。",
      "在液面滴油可形成暫時隔離層，等傾倒試管後才開始反應。",
      "因此答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "油層可能稍微減少水分蒸發，但本實驗的關鍵是避免NaOH提早吸收CO₂。" },
      B: { verdict: "correct", reason: "油層隔開NaOH溶液與瓶內空氣，使CO₂吸收反應在指定步驟才開始。" },
      C: { verdict: "incorrect", reason: "界面劑通常幫助兩相接觸；此處的油反而是要暫時阻止溶液接觸空氣。" },
      D: { verdict: "incorrect", reason: "機油沒有加快NaOH吸收CO₂的催化作用，而是扮演物理隔離層。" }
    },
    takeaway: "測量某氣體被吸收造成的壓力差時，要先避免吸收劑提前接觸待測氣體。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-60": {
    encouragement: "水面齊平就是一個重要訊號：管內外同高度時，兩邊壓力相等，才能建立公平的起點。",
    keyIdea: "連通液面等高時，瓶內氣壓等於外界大氣壓；夾管後可固定測量的初始狀態。",
    steps: [
      "先讓玻璃管內外水面齊平，此時水柱沒有壓力差。",
      "因此錐形瓶內氣體壓力與外界大氣壓相等。",
      "再夾緊橡皮管，便能保存這個已知的初始壓力，觀察吸收CO₂後的改變。",
      "所以答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "水面齊平先使瓶內壓力等於外界，再夾管可暫時固定測量的初始壓力。" },
      B: { verdict: "incorrect", reason: "這個步驟調整的是氣體壓力基準，並不能直接阻止NaOH溶液中的水蒸發。" },
      C: { verdict: "incorrect", reason: "傾倒試管時溶液本來就要流到錐形瓶底，並非靠水面齊平防止外流。" },
      D: { verdict: "incorrect", reason: "後續水柱上升正是量測現象；本步驟的主要目的不是永久防止水進入。" }
    },
    takeaway: "壓力計液面等高代表兩側壓力相等，可用來設定實驗的初始壓力。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-61": {
    encouragement: "不用重新推整套氣體定律，只要把「水柱高度」換算成「汞柱高度」即可。",
    keyIdea: "同一壓力下，液柱高度與液體密度成反比；汞密度是水的13.6倍。",
    steps: [
      "實驗量到的壓力差相當於h公分水柱。",
      "汞的密度為水的13.6倍，同一壓力只需較短的汞柱。",
      "所以等效汞柱高度為h÷13.6公分。",
      "答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "高度換算要使用密度倍數的乘除，不是把13.6直接加在水柱高度上。" },
      B: { verdict: "incorrect", reason: "13.6是密度比，不是帶有公分單位的固定高度，不能直接相減。" },
      C: { verdict: "incorrect", reason: "汞比水密度大，同壓力所需汞柱應更短，乘13.6反而會變得更長。" },
      D: { verdict: "correct", reason: "同壓力下密度與高度成反比，因此h公分水柱等於h÷13.6公分汞柱。" }
    },
    takeaway: "水柱換算成汞柱要除以13.6；較密的液體用較短液柱就能平衡同一壓力。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-83-62": {
    encouragement: "替代藥品只要保留同一功能即可：能把空氣中的二氧化碳吸收掉。",
    keyIdea: "石灰水中的Ca(OH)₂可與CO₂反應生成CaCO₃沉澱和水。",
    steps: [
      "原實驗利用NaOH吸收瓶內CO₂，使氣體總壓下降。",
      "石灰水也能與CO₂反應：CO₂＋Ca(OH)₂→CaCO₃＋H₂O。",
      "增加石灰水用量可提供足夠吸收能力，因此能達到相同目的。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "汞在這些條件下不會選擇性吸收空氣中的CO₂，無法造成所需壓力變化。" },
      B: { verdict: "incorrect", reason: "鹽酸水溶液本身呈酸性，不能像鹼液一樣有效吸收並固定CO₂。" },
      C: { verdict: "correct", reason: "石灰水含Ca(OH)₂，會和CO₂形成CaCO₃沉澱，可移除瓶內CO₂。" },
      D: { verdict: "incorrect", reason: "燃燒蠟燭會消耗O₂並產生CO₂和水，改變多種氣體，不能單獨測CO₂分壓。" }
    },
    takeaway: "要替換實驗試劑，應比對它的功能；NaOH與石灰水都能吸收二氧化碳。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-41": {
    encouragement: "酸鹼滴定最怕待測NaOH在測量前自己變質；其他操作只要把體積與濃度算清楚仍可滴定。",
    keyIdea: "NaOH溶液久置會吸收空氣中的CO₂而被消耗，使原本含量改變。",
    steps: [
      "滴定要測的是NaOH原本的含量，所以待測物在滴定前不能改變。",
      "NaOH會吸收空氣中的CO₂，生成碳酸鹽而降低有效鹼量。",
      "留置數日會讓樣品組成改變，造成系統性誤差。",
      "答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "排除滴定管尖端氣泡可讓刻度變化真正對應流出體積，反而提高準確度。" },
      B: { verdict: "incorrect", reason: "標準酸稀釋後若濃度已準確知道，仍可用新的濃度與滴定體積計算NaOH。" },
      C: { verdict: "incorrect", reason: "加入蒸餾水只改變NaOH濃度與總體積，不改變錐形瓶內NaOH的莫耳數。" },
      D: { verdict: "correct", reason: "NaOH久置會吸收空氣中CO₂而變成碳酸鹽，使待測NaOH含量在滴定前改變。" }
    },
    takeaway: "滴定可容許已知的稀釋，但不能讓待測物在測量前與空氣反應而變質。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-84-44": {
    encouragement: "燃燒熱可想成「拆鍵要花能量，成鍵會放能量」，把兩邊各自加總就能完成。",
    keyIdea: "反應熱約為斷鍵能總和減成鍵能總和；CH₄＋2O₂→CO₂＋2H₂O。",
    steps: [
      "反應物需斷4個C－H鍵與2個O＝O鍵，需4×414＋2×497＝2650 kJ。",
      "生成物形成2個C＝O鍵與4個O－H鍵，釋放2×803＋4×463＝3458 kJ。",
      "反應熱為2650－3458＝－808 kJ/mol，表示每莫耳甲烷放出808 kJ。",
      "因此莫耳燃燒熱為808 kJ/mol，答案B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "379 kJ沒有完整計入甲烷燃燒時所有C－H、O＝O、C＝O及O－H鍵。" },
      B: { verdict: "correct", reason: "斷鍵需2650 kJ、成鍵放3458 kJ，兩者相差808 kJ，反應為放熱。" },
      C: { verdict: "incorrect", reason: "1656 kJ只等於4個C－H鍵的總鍵能，尚未完成反應物與生成物比較。" },
      D: { verdict: "incorrect", reason: "2532 kJ不是完整的斷鍵能減成鍵能結果，也忽略了正負放熱關係。" }
    },
    takeaway: "鍵能估算反應熱：先配平，再算「斷掉的鍵－形成的鍵」。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-52": {
    encouragement: "先記住NO₂有色、N₂O₄無色，再分清楚「剛壓縮」和「重新達平衡」兩個時刻。",
    keyIdea: "2NO₂(g)⇌N₂O₄(g)；壓縮瞬間濃度增加而色深，之後平衡偏向氣體莫耳數較少的一側。",
    steps: [
      "兩筒起初裝入相同80 mL平衡混合氣，所以NO₂莫耳數相同。",
      "右筒被壓縮後，NO₂濃度先增加，紅棕色加深；平衡隨後偏向N₂O₄。",
      "若把體積拉回原狀並等待，溫度與體積條件恢復，兩筒最後顏色相同。",
      "反應式2NO₂⇌N₂O₄的係數總和為3，故依官方答案選A、B、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩筒起初取自相同平衡混合氣且體積同為80 mL，因此NO₂初始莫耳數相同。" },
      B: { verdict: "correct", reason: "壓縮右筒使有色NO₂在較小體積中的濃度增大，短時間觀察會看到顏色加深。" },
      C: { verdict: "incorrect", reason: "壓縮會立即提高NO₂濃度並擾動平衡，因此右筒顏色不可能完全沒有變化。" },
      D: { verdict: "correct", reason: "槓桿拉回原體積並等待重新平衡後，兩筒的溫度、體積與總組成條件相同，顏色相同。" },
      E: { verdict: "correct", reason: "平衡反應可寫成2NO₂(g)⇌N₂O₄(g)，最簡整數係數總和為2＋1＝3。" }
    },
    takeaway: "壓縮有色氣體平衡時，要分辨濃度的立即變化與平衡移動後的變化。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-53": {
    encouragement: "密閉裝置中即使出現沉澱，所有物質仍留在系統內，所以總質量不會改變。",
    keyIdea: "CuSO₄＋2NaOH→Cu(OH)₂↓＋Na₂SO₄；密閉系統遵守質量守恆。",
    steps: [
      "Cu²⁺與OH⁻結合形成難溶的Cu(OH)₂沉澱。",
      "反應沒有產生逸出的氣體，而且裝置密閉。",
      "反應前後原子只重新排列，整個裝置的總質量保持不變。",
      "所以正確選項為B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "雖然會產生沉澱，但沉澱仍在密閉裝置中，整體質量不會因此增加。" },
      B: { verdict: "correct", reason: "CuSO₄提供Cu²⁺，NaOH提供OH⁻，兩者形成藍色Cu(OH)₂沉澱。" },
      C: { verdict: "incorrect", reason: "此沉澱反應不產生氣體；即使有物態改變，密閉系統總質量也不會減少。" },
      D: { verdict: "correct", reason: "密閉裝置在反應前後秤量相同，可直接說明化學反應遵守質量守恆。" },
      E: { verdict: "incorrect", reason: "正確反應為CuSO₄＋2NaOH→Cu(OH)₂＋Na₂SO₄，選項方程式的物質與係數不守恆。" }
    },
    takeaway: "產生沉澱不代表質量增加；密閉系統中反應前後總質量守恆。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-54": {
    encouragement: "鈉和水的三個觀察重點是：放出氫氣、留下鹼性溶液，而且電子發生轉移。",
    keyIdea: "2Na＋2H₂O→2NaOH＋H₂；生成氫氣與鹼，並屬於氧化還原反應。",
    steps: [
      "濾紙吸水後，金屬鈉接觸水並快速反應，生成NaOH與H₂。",
      "NaOH使酚酞呈粉紅色，氫氣可在漏斗頂端被點燃。",
      "Na由0價變＋1價，氫由＋1價變0價，表示有電子轉移。",
      "所以正確選項為A、D、E。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "濾紙吸水使鈉與水接觸，反應會放熱並產生可燃性的氫氣。" },
      B: { verdict: "incorrect", reason: "反應生成NaOH使溶液呈鹼性，酚酞遇鹼會變粉紅色，不會維持無色。" },
      C: { verdict: "incorrect", reason: "酚酞只是酸鹼指示劑，用來顯示NaOH生成，並不會催化或減慢反應。" },
      D: { verdict: "correct", reason: "反應產生的氫氣聚集到漏斗頂端，在適當操作下可用火點燃。" },
      E: { verdict: "correct", reason: "Na失去電子由0價變＋1價，水中的氫得到電子變成H₂，屬氧化還原反應。" }
    },
    takeaway: "活性金屬鈉遇水會生成鹼與氫氣；看到氧化數改變即可判定為氧化還原。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-82": {
    encouragement: "噴泉的關鍵不是氣體會不會反應，而是它能否快速大量溶於少量水，讓瓶內壓力驟降。",
    keyIdea: "HCl與NH₃都極易溶於水；氣體溶解使瓶內壓力下降，外界液體便被壓入形成噴泉。",
    steps: [
      "滴入少量水後，若瓶內氣體迅速溶解，氣相粒子數會大幅減少。",
      "瓶內壓力降低，外界大氣壓把液體推入燒瓶。",
      "HCl和NH₃在水中的溶解度都很高，最容易產生明顯噴泉。",
      "因此選E、F。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "N₂在水中的溶解度很低，少量水無法使瓶內氣壓快速大幅下降。" },
      B: { verdict: "incorrect", reason: "O₂僅微溶於水，氣相莫耳數不會迅速減少到足以形成強烈噴泉。" },
      C: { verdict: "incorrect", reason: "CO₂能溶於水但溶解速度與程度不如HCl、NH₃，題設典型噴泉不選它。" },
      D: { verdict: "incorrect", reason: "CH₄為非極性且難溶於水，滴入水後瓶內壓力不會顯著降低。" },
      E: { verdict: "correct", reason: "HCl極易溶於水形成鹽酸，氣體迅速被移出氣相，使瓶內壓力下降。" },
      F: { verdict: "correct", reason: "NH₃極易溶於水並與水作用，能迅速降低瓶內氣壓而產生噴泉。" },
      G: { verdict: "incorrect", reason: "He是惰性且在水中溶解度很低，無法靠滴入少量水造成明顯壓力差。" }
    },
    takeaway: "噴泉實驗判斷口訣：氣體要非常易溶於水，溶解後瓶內壓力才會迅速下降。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-85-85": {
    encouragement: "原子序給質子數；中性再把電子數配成相同，最後用質量數減質子數找中子。",
    keyIdea: "中性原子中電子數＝質子數＝原子序；中子數＝質量數－原子序。",
    steps: [
      "Na原子序11，表示原子核中有11個質子。",
      "中性原子的電子數等於質子數，所以有11個電子。",
      "中子數為23－11＝12。",
      "因此中子選B、電子選E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "11是鈉的原子序，也就是質子數；中子數應用質量數23再減去11。" },
      B: { verdict: "correct", reason: "質量數＝質子數＋中子數，因此鈉的中子數為23－11＝12。" },
      C: { verdict: "incorrect", reason: "23是質量數，包含質子與中子，不是只有中子的數目。" },
      D: { verdict: "incorrect", reason: "34是23與11相加的結果，但中子數應該用質量數減去原子序。" },
      E: { verdict: "correct", reason: "中性鈉原子的正負電荷相抵，電子數等於質子數，也就是11。" },
      F: { verdict: "incorrect", reason: "12是鈉原子的中子數；中性原子的電子數應等於原子序11。" },
      G: { verdict: "incorrect", reason: "23是質量數，電子質量不列入質量數，不能把質量數當成電子數。" },
      H: { verdict: "incorrect", reason: "34不是由中性條件得到的電子數；鈉原子只有11個質子與11個電子。" }
    },
    takeaway: "看到核種資料就先寫：p＝Z、e＝Z（中性）、n＝A－Z。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-31": {
    encouragement: "週期表現在依原子序排列；再用金屬、類金屬、非金屬的大致位置逐項排除。",
    keyIdea: "現代週期表按原子序排列，元素常概分為金屬、類金屬與非金屬。",
    steps: [
      "現代週期表的排列依據是原子序，也就是質子數，不是原子量。",
      "金屬多在左側與中央，非金屬多在右上，類金屬沿兩者交界分布。",
      "依導電性與其他性質可大致分成金屬、類金屬、非金屬三類。",
      "所以答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "現代週期表依原子序由小到大排列，原子量不是最根本的排序依據。" },
      B: { verdict: "correct", reason: "金屬通常良好導電，非金屬多不良導電，類金屬具有介於兩者間的性質。" },
      C: { verdict: "incorrect", reason: "週期表左下方主要是活潑金屬，許多與水反應形成鹼性溶液，不是酸性非金屬。" },
      D: { verdict: "incorrect", reason: "類金屬沿金屬與非金屬交界呈階梯狀分布，並非都位於中央或統稱B族。" }
    },
    takeaway: "現代週期表以原子序排列；類金屬沿金屬與非金屬的交界分布。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-34": {
    encouragement: "先把pH翻成H⁺或OH⁻濃度，再乘體積算莫耳數，會發現酸鹼剛好互相抵消。",
    keyIdea: "pH 0的HCl為1 M；pH 13的NaOH有[OH⁻]＝0.1 M，兩者所給莫耳數相等。",
    steps: [
      "1 mL、1 M HCl含H⁺為0.001 L×1 mol/L＝0.001 mol。",
      "pH 13表示pOH 1，所以NaOH的[OH⁻]＝0.1 M；10 mL含0.001 mol OH⁻。",
      "H⁺與OH⁻等莫耳完全中和，強酸強鹼混合後近中性。",
      "因此pH為7.0，答案B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "pH 13是原NaOH溶液的數值；混入等莫耳H⁺後，OH⁻已被完全中和。" },
      B: { verdict: "correct", reason: "酸提供0.001 mol H⁺，鹼提供0.001 mol OH⁻，恰好完全中和而近pH 7。" },
      C: { verdict: "incorrect", reason: "題目使用強酸與強鹼且莫耳數相等，理想計算不會留下酸使pH降到6.5。" },
      D: { verdict: "incorrect", reason: "pH 1表示仍有大量過量H⁺，但本題H⁺與OH⁻已等量反應完畢。" }
    },
    takeaway: "酸鹼混合不能直接平均pH；一定先由濃度與體積算H⁺、OH⁻莫耳數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-35": {
    encouragement: "等質量比較粒子多寡，可用「每莫耳分子含幾個電子÷莫耳質量」來快速判斷。",
    keyIdea: "等質量物質的電子總數與「每化學式單位電子數／莫耳質量」成正比。",
    steps: [
      "H₂每個分子2電子、莫耳質量約2.02，電子數與質量比約0.99。",
      "H₂O為10/18、NaCl為28/58.5、Cu為29/63.5，三者比值都較小。",
      "所以同質量下，氫氣含有最多分子，也具有最多電子。",
      "答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "H₂的電子數／莫耳質量約為2/2.02，四種物質中最大，等質量含電子最多。" },
      B: { verdict: "incorrect", reason: "H₂O每分子10電子但莫耳質量約18，10/18小於H₂的2/2.02。" },
      C: { verdict: "incorrect", reason: "NaCl每單位28電子、莫耳質量58.5，電子數與質量比低於氫氣。" },
      D: { verdict: "incorrect", reason: "Cu每原子29電子但原子量63.5很大，等質量下原子數較少，電子總數不是最多。" }
    },
    takeaway: "等質量比較微粒或電子數，不能只看單一粒子的電子多，要同時除以莫耳質量。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-36": {
    encouragement: "把鹼金屬直接寫成和水的通式，就能同時判斷溶液酸鹼性與逸出氣體。",
    keyIdea: "2M＋2H₂O→2MOH＋H₂；鹼金屬遇水生成鹼性氫氧化物並放出氫氣。",
    steps: [
      "鹼金屬與水反應會失去電子，水中的氫形成H₂。",
      "另一產物是可溶的金屬氫氧化物，使溶液呈鹼性。",
      "氣體是氫氣，不是氧氣；氫氧化物單純溶於水也不會再放氫。",
      "所以答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鹼金屬不是單純溶解，而是和水反應；逸出的氣體是H₂而不是O₂。" },
      B: { verdict: "correct", reason: "鹼金屬與水生成金屬氫氧化物，使溶液呈鹼性，同時放出H₂。" },
      C: { verdict: "incorrect", reason: "鹼金屬氧化物遇水通常生成鹼性氫氧化物，不會使溶液呈酸性或釋放O₂。" },
      D: { verdict: "incorrect", reason: "鹼金屬氫氧化物溶於水會解離而呈鹼性，但這個溶解過程不會產生H₂。" }
    },
    takeaway: "鹼金屬遇水的兩個結果：形成鹼性溶液、放出可燃的氫氣。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-37": {
    encouragement: "氧化還原題先替碳標氧化數；CO₂中的碳是＋4，已到常見最高氧化態。",
    keyIdea: "CO₂中氧為－2，碳為＋4；碳由CO₂進入有機物是被還原，但不會生成單質碳與氧氣。",
    steps: [
      "中性CO₂中兩個氧合計－4，因此碳必須是＋4。",
      "碳常見氧化態的上限為＋4，所以CO₂中的碳已處高氧化態。",
      "光合作用會把CO₂中的碳還原成有機物，同時由水產生O₂，不是直接生成碳單質。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "石墨是碳單質，不能概括說成主要由甲烷還原形成；甲烷中的碳反而是－4價。" },
      B: { verdict: "incorrect", reason: "CO₂中的碳已為＋4價，溶於水形成碳酸或碳酸鹽時碳仍為＋4，沒有再被氧化。" },
      C: { verdict: "correct", reason: "CO₂中每個氧為－2，故碳為＋4，已是碳在常見化合物中的最高氧化態。" },
      D: { verdict: "incorrect", reason: "光合作用把CO₂還原成醣類等有機物，氧氣主要來自水，並非生成碳單質與氧。" }
    },
    takeaway: "判斷碳循環中的氧化還原，先看碳的氧化數：CO₂為＋4、CH₄為－4。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-38": {
    encouragement: "臭氧層的保護作用是「吸收」紫外光並發生光化學變化，不是像鏡子把光反射走。",
    keyIdea: "O₃吸收高能紫外光後可分解，將紫外光能量轉入化學變化，減少到達地表的紫外線。",
    steps: [
      "臭氧分子能吸收特定波段的紫外光。",
      "吸收能量後，O₃可分解成O₂與O等物種。",
      "紫外光的能量被大氣中的化學過程吸收，抵達地表的量便減少。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "近地面臭氧是空氣污染物，不能用汽車廢氣產生的臭氧補充平流層臭氧。" },
      B: { verdict: "incorrect", reason: "臭氧主要藉吸收紫外光並發生光化學反應來保護地表，不是單純把紫外光反射。" },
      C: { verdict: "correct", reason: "O₃吸收紫外光後可分解，紫外光能量因此被消耗，到達地表的紫外線減少。" },
      D: { verdict: "incorrect", reason: "O₂與O₃是由同種元素組成的不同單質，分子組成不同，不只是同一物質的能量態。" }
    },
    takeaway: "臭氧與氧氣是同素異形體；臭氧層靠吸收紫外光，而不是靠反射。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-39": {
    encouragement: "題目已把生成物寫在箭號右邊，直接讀出兩種氣體，就是水煤氣的組成。",
    keyIdea: "C(s)＋H₂O(g)→CO(g)＋H₂(g)，水煤氣是CO與H₂的混合氣。",
    steps: [
      "反應物是固態碳與水蒸氣。",
      "生成物欄列出一氧化碳CO與氫氣H₂。",
      "兩種氣體同時生成並混合，這個混合物稱為水煤氣。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "水煤氣不是依收集方法命名的單一H₂，而是反應同時生成的兩種氣體混合物。" },
      B: { verdict: "incorrect", reason: "反應產物不只有CO，還有等莫耳生成的H₂，因此不能只稱一氧化碳。" },
      C: { verdict: "correct", reason: "反應式右側同時生成CO與H₂，所以水煤氣就是這兩種氣體的混合物。" },
      D: { verdict: "incorrect", reason: "水蒸氣位於反應物一側並被消耗，水煤氣的主要生成物組成不含水蒸氣。" }
    },
    takeaway: "讀化學反應式時，箭號左邊是反應物、右邊是生成物；水煤氣＝CO＋H₂。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-40": {
    encouragement: "先把12克碳換成1莫耳，再看反應式每1莫耳碳會生成幾莫耳氣體。",
    keyIdea: "1 mol C生成1 mol CO與1 mol H₂，共2 mol氣體；STP下每莫耳氣體約22.4 L。",
    steps: [
      "12 g碳÷12 g/mol＝1 mol碳。",
      "依反應式，1 mol碳生成1 mol CO和1 mol H₂，合計2 mol水煤氣。",
      "STP下體積為2×22.4＝44.8 L。",
      "所以答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "11.2 L只相當於STP下0.5 mol氣體，低估了反應生成的兩種氣體總量。" },
      B: { verdict: "incorrect", reason: "22.4 L只計入1 mol氣體，但1 mol碳會同時生成1 mol CO與1 mol H₂。" },
      C: { verdict: "correct", reason: "12 g碳為1 mol，可生成共2 mol的CO與H₂，STP體積為44.8 L。" },
      D: { verdict: "incorrect", reason: "67.2 L相當於3 mol氣體，反應式每1 mol碳只會生成總共2 mol氣體。" }
    },
    takeaway: "題目問混合氣總體積時，要把各氣體莫耳數相加後再乘22.4 L/mol。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-60": {
    encouragement: "乾冰是分子固體：先看CO₂分子內原子怎麼連，再看分子彼此靠什麼吸引。",
    keyIdea: "CO₂分子內有共價鍵；非極性CO₂分子間主要有凡得瓦力。",
    steps: [
      "每個CO₂分子中，碳與氧藉共用電子形成共價鍵。",
      "乾冰由許多中性的CO₂分子聚集，不是離子晶體或金屬晶體。",
      "分子彼此主要靠倫敦分散力，屬凡得瓦力。",
      "因此選B、D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "乾冰由中性CO₂分子組成，晶體中沒有正、負離子形成離子鍵。" },
      B: { verdict: "correct", reason: "單一CO₂分子內的C與O藉共用電子對形成共價鍵。" },
      C: { verdict: "incorrect", reason: "CO₂不是金屬元素組成，也沒有自由電子海，因此不具有金屬鍵。" },
      D: { verdict: "correct", reason: "非極性的CO₂分子彼此主要由倫敦分散力吸引，屬於凡得瓦力。" },
      E: { verdict: "incorrect", reason: "CO₂分子沒有與N、O或F直接相連的氫原子，分子間不能形成氫鍵。" }
    },
    takeaway: "分子固體要分兩層看：分子內是化學鍵，分子間則是較弱的作用力。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-63": {
    encouragement: "先用三條線索交叉確認甲：無色、平均分子量約29，而且能讓蠟燭燃燒一段時間。",
    keyIdea: "空氣無色、平均分子量約29，含約五分之一O₂，因此支持燃燒但不會永久燃燒。",
    steps: [
      "甲是無色氣體，平均分子量28±1，可先保留N₂、CO或空氣等候選。",
      "蠟燭在甲中可繼續燃燒，表示甲含有助燃的O₂。",
      "倒蓋後燃燒一段時間才熄滅且水面上升，符合空氣中O₂被消耗的現象。",
      "所以甲是空氣，答案C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂雖無色且可燃，但分子量只有2，也不能單獨支持蠟燭持續燃燒。" },
      B: { verdict: "incorrect", reason: "純O₂能強烈助燃，但分子量32超出28±1，且不符合空氣比例消耗的觀察。" },
      C: { verdict: "correct", reason: "空氣平均分子量約29且含O₂，能支持蠟燭燃燒一段時間，線索全部吻合。" },
      D: { verdict: "incorrect", reason: "CO分子量28但具有毒性與可燃性，並不能像含氧空氣一樣支持蠟燭燃燒。" },
      E: { verdict: "incorrect", reason: "CO₂分子量44且不助燃，蠟燭放入其中會熄滅，不符合甲的現象。" },
      F: { verdict: "incorrect", reason: "NO₂呈紅棕色且分子量46，不符合甲為無色、平均分子量約29的描述。" },
      G: { verdict: "incorrect", reason: "1 M NaCl是水溶液而不是氣體，與甲被描述為無色氣體不符。" },
      H: { verdict: "incorrect", reason: "1 M KMnO₄是紫色水溶液，不是無色氣體，也不可能是甲。" },
      I: { verdict: "incorrect", reason: "1 M NaOH是水溶液而不是氣體，且題目已確認甲屬於氣態物質。" },
      J: { verdict: "incorrect", reason: "1 M HCl是酸性水溶液，不是題目所描述的無色氣體甲。" },
      K: { verdict: "incorrect", reason: "1 M醋酸是液體溶液，物態與甲的無色氣體條件直接衝突。" },
      L: { verdict: "incorrect", reason: "蒸餾水在實驗條件下是液體，不能解釋甲的氣體性質與燃燒實驗。" }
    },
    takeaway: "鑑定未知物要把多條證據一起用；空氣的平均分子量約29，且只含部分助燃氧氣。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-64": {
    encouragement: "乙有三個直接線索：無色氣體、使藍石蕊變紅，而且會讓燃燒中的蠟燭熄滅。",
    keyIdea: "CO₂無色、不助燃，溶於潮濕試紙形成碳酸而呈酸性。",
    steps: [
      "乙使藍石蕊試紙變紅，表示氣體遇水後呈酸性。",
      "乙又能使燃燒中的蠟燭立即熄滅，表示不助燃。",
      "CO₂無色，溶於水形成碳酸，且常用來滅火。",
      "所以乙是CO₂，答案E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂無色但不會使濕潤藍石蕊變紅，而且它本身是可燃性氣體。" },
      B: { verdict: "incorrect", reason: "O₂無色且助燃，會使蠟燭燃燒更旺，不符合立即熄滅與酸性線索。" },
      C: { verdict: "incorrect", reason: "空氣通常不使藍石蕊明顯變紅，也能讓蠟燭繼續燃燒一段時間。" },
      D: { verdict: "incorrect", reason: "CO雖無色且不助燃，但不會溶於試紙水分形成酸使藍石蕊變紅。" },
      E: { verdict: "correct", reason: "CO₂無色、不助燃，溶於水形成碳酸，能使濕潤藍石蕊轉紅。" },
      F: { verdict: "incorrect", reason: "NO₂溶於水可呈酸性且不助燃，但氣體本身為紅棕色，不符合無色。" },
      G: { verdict: "incorrect", reason: "1 M NaCl是無色水溶液而不是氣體，無法作為容器中的乙氣體。" },
      H: { verdict: "incorrect", reason: "1 M KMnO₄是紫色液體，物態與顏色都不符合無色氣體乙。" },
      I: { verdict: "incorrect", reason: "1 M NaOH是鹼性水溶液，會使紅石蕊變藍，與乙呈酸性相反。" },
      J: { verdict: "incorrect", reason: "選項是1 M HCl水溶液，不是氣體；雖呈酸性但物態不符。" },
      K: { verdict: "incorrect", reason: "1 M醋酸為酸性液體溶液，不能解釋乙作為氣體使蠟燭熄滅。" },
      L: { verdict: "incorrect", reason: "蒸餾水為中性液體，不是氣體，也不會使藍石蕊轉紅。" }
    },
    takeaway: "CO₂的辨識組合是「無色、酸性、不助燃」；NO₂雖酸性但呈紅棕色。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-65": {
    encouragement: "丙是無色液體、不改變藍石蕊，加入硝酸銀卻立刻出現白色沉澱，關鍵就是Cl⁻。",
    keyIdea: "Ag⁺＋Cl⁻→AgCl白色沉澱；中性的NaCl溶液同時符合不改變藍石蕊。",
    steps: [
      "丙是無色液體且不使藍石蕊變紅，排除明顯酸性溶液。",
      "加入AgNO₃立刻形成白色沉澱，顯示溶液含Cl⁻。",
      "1 M NaCl既含Cl⁻又近中性，完全符合兩項觀察。",
      "所以丙為NaCl水溶液，答案G。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂是氣體，不是丙所描述的無色液體，也無法直接提供Cl⁻沉澱。" },
      B: { verdict: "incorrect", reason: "O₂在室溫下為氣體，物態不符合丙，且不會和AgNO₃形成AgCl。" },
      C: { verdict: "incorrect", reason: "空氣是氣體混合物而非液體，也沒有足量Cl⁻造成白色AgCl沉澱。" },
      D: { verdict: "incorrect", reason: "CO是氣體且不含氯元素，無法解釋加入AgNO₃後的白色沉澱。" },
      E: { verdict: "incorrect", reason: "CO₂是氣體並會使水呈酸性，也不含形成AgCl所需的Cl⁻。" },
      F: { verdict: "incorrect", reason: "NO₂為紅棕色氣體，物態和顏色都不符合丙的無色液體。" },
      G: { verdict: "correct", reason: "NaCl水溶液無色且近中性，Cl⁻遇Ag⁺立即形成白色AgCl沉澱。" },
      H: { verdict: "incorrect", reason: "KMnO₄水溶液呈紫色，不符合丙為無色液體，且不是白色AgCl的來源。" },
      I: { verdict: "incorrect", reason: "NaOH溶液呈鹼性且不含Cl⁻，不能生成題目觀察到的白色AgCl沉澱。" },
      J: { verdict: "incorrect", reason: "HCl含Cl⁻雖可生成AgCl，但它會使藍石蕊變紅，與丙不變色矛盾。" },
      K: { verdict: "incorrect", reason: "醋酸溶液會呈酸性且不含Cl⁻，加入AgNO₃不會立刻生成AgCl。" },
      L: { verdict: "incorrect", reason: "蒸餾水無色且近中性，但不含Cl⁻，加入AgNO₃不會出現白色沉澱。" }
    },
    takeaway: "白色AgCl是氯離子的明顯線索；再用石蕊排除同樣含Cl⁻但呈酸性的HCl。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-86-66": {
    encouragement: "丁會使藍石蕊變紅，卻不與硝酸銀產生白色沉澱，所以要找「酸性但不含Cl⁻」的溶液。",
    keyIdea: "醋酸呈酸性且不含Cl⁻；HCl雖酸，但會和AgNO₃產生AgCl白色沉澱。",
    steps: [
      "丁是無色液體且使藍石蕊變紅，表示它是酸性水溶液。",
      "加入AgNO₃無可見反應，表示沒有足量Cl⁻形成AgCl。",
      "醋酸符合酸性、無色且不含Cl⁻三項條件。",
      "所以丁為1 M醋酸，答案K。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂是氣體而非酸性液體，也不能解釋藍石蕊變紅的觀察。" },
      B: { verdict: "incorrect", reason: "O₂是氣體且不會形成酸性水溶液，物態與石蕊結果都不符合。" },
      C: { verdict: "incorrect", reason: "空氣是氣體混合物，不是丁所描述的無色酸性液體。" },
      D: { verdict: "incorrect", reason: "CO是無色氣體，難溶於水且不會使藍石蕊明顯變紅。" },
      E: { verdict: "incorrect", reason: "CO₂雖可使水呈酸性，但候選E為氣體，與丁被確認為液體不符。" },
      F: { verdict: "incorrect", reason: "NO₂是紅棕色氣體，無論顏色或物態都不符合無色液體丁。" },
      G: { verdict: "incorrect", reason: "NaCl溶液近中性，不使藍石蕊變紅，而且遇AgNO₃會生成AgCl。" },
      H: { verdict: "incorrect", reason: "KMnO₄水溶液呈紫色，不符合無色；它也不是題目所需的酸性溶液。" },
      I: { verdict: "incorrect", reason: "NaOH為鹼性溶液，會使紅石蕊變藍，與丁使藍石蕊變紅相反。" },
      J: { verdict: "incorrect", reason: "HCl雖呈酸性，但含Cl⁻，加入AgNO₃應立即生成白色AgCl沉澱。" },
      K: { verdict: "correct", reason: "醋酸溶液無色且呈酸性，又不含Cl⁻，所以加入AgNO₃無明顯反應。" },
      L: { verdict: "incorrect", reason: "蒸餾水近中性，不會使藍石蕊變紅，因此不能是酸性的丁。" }
    },
    takeaway: "同樣呈酸性的溶液，可再用特徵離子反應區分；AgNO₃能辨認HCl中的Cl⁻。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-1": {
    encouragement: "溫室效應的重點是地球放出的紅外線被吸收，不是陽光中的紫外線被二氧化碳擋住。",
    keyIdea: "CO₂吸收地表放出的紅外線，減少熱能直接散逸到太空，使近地表增暖。",
    steps: [
      "太陽短波輻射進入地表後，地表再以紅外線形式向外放熱。",
      "CO₂能吸收部分紅外線並再輻射，使熱較不易直接逃到太空。",
      "紫外線與臭氧層問題屬另一機制，不能當成溫室增暖的主要理由。",
      "所以答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "CO₂造成溫室效應主要吸收地表放出的紅外線，不是大量吸收太陽紫外線。" },
      B: { verdict: "correct", reason: "CO₂吸收紅外線並減少地表熱能直接散逸，使近地表能量累積、溫度升高。" },
      C: { verdict: "incorrect", reason: "臭氧層破壞會增加地表紫外線，但不是CO₂溫室效應使地表升溫的主要機制。" },
      D: { verdict: "incorrect", reason: "選項把臭氧層與紫外線的關係說反，也沒有說明紅外線熱能被保留的機制。" }
    },
    takeaway: "溫室效應看紅外線；臭氧層保護看紫外線，兩個環境議題不要混在一起。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-2": {
    encouragement: "肥料常用「氮長葉、磷長根花果、鉀強壯」來記；題目要促進葉片就找氮肥。",
    keyIdea: "氮是葉綠素與蛋白質的重要元素，氮肥能促進莖葉生長；尿素含氮量高。",
    steps: [
      "植物葉片發育需要合成葉綠素與蛋白質，氮元素很重要。",
      "尿素CO(NH₂)₂含有氮，是常見氮肥。",
      "硫酸鉀主要供鉀，過磷酸鈣與磷酸二氫鈣主要供磷。",
      "所以答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "尿素含豐富氮元素，屬氮肥，能促進植物莖葉與葉綠素相關生長。" },
      B: { verdict: "incorrect", reason: "硫酸鉀主要提供鉀元素，較偏向增強植株健壯與抗逆性，不是主要促葉氮肥。" },
      C: { verdict: "incorrect", reason: "過磷酸鈣主要提供磷，通常較著重根系、開花與結果發育。" },
      D: { verdict: "incorrect", reason: "磷酸二氫鈣主要是磷肥來源，促進葉片發育的直接效果不如氮肥尿素。" }
    },
    takeaway: "肥料三要素簡記：氮促莖葉、磷助根與花果、鉀使植株健壯。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-3": {
    encouragement: "從豆腐的原料大豆想起：大豆是植物性蛋白質的重要來源。",
    keyIdea: "豆腐由豆漿中的大豆蛋白凝固製成，主要營養素是蛋白質。",
    steps: [
      "黃豆磨成豆漿後，其中含有大量大豆蛋白。",
      "加入凝固劑使蛋白質聚集，便形成豆腐。",
      "因此豆腐最具代表性的主要營養素是蛋白質。",
      "答案為C。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "豆腐可含少量油脂，但製作時凝固的主體是大豆蛋白，油脂不是最主要答案。" },
      B: { verdict: "incorrect", reason: "豆腐所含醣類並非其最具代表性的主要營養成分，不能取代蛋白質。" },
      C: { verdict: "correct", reason: "豆腐是將豆漿中的大豆蛋白凝固而成，因此以蛋白質為主要營養素。" },
      D: { verdict: "incorrect", reason: "豆腐含有部分維生素與礦物質，但其凝固主體與主要營養特色仍是蛋白質。" }
    },
    takeaway: "從食品原料與製程判斷營養：豆漿凝固成豆腐，核心物質是大豆蛋白。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-4": {
    encouragement: "平衡不是反應停止，而是正、逆反應仍同時進行，只是速率剛好相等。",
    keyIdea: "化學動態平衡時，正反應速率等於逆反應速率，各物質濃度維持不變但不必按係數比。",
    steps: [
      "達平衡後，N₂與H₂仍會形成NH₃。",
      "同時NH₃也持續分解成N₂與H₂。",
      "兩方向速率相等，因此各物質量不再有淨變化。",
      "所以答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "平衡是動態狀態，N₂與H₂仍持續反應形成NH₃，只是沒有淨變化。" },
      B: { verdict: "incorrect", reason: "反應式係數左側總和4、右側2，本來就不相等；平衡也不要求分子總數相等。" },
      C: { verdict: "incorrect", reason: "1：3：2是反應係數比，不代表平衡時三種物質的實際莫耳數比。" },
      D: { verdict: "correct", reason: "達動態平衡時，生成NH₃的正反應速率恰等於NH₃分解的逆反應速率。" }
    },
    takeaway: "化學平衡的核心不是「停住」，而是「正逆反應速率相等」。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-7": {
    encouragement: "暖暖包打開才發熱，表示關鍵反應物來自空氣；鐵粉最常和氧氣發生放熱氧化。",
    keyIdea: "鐵粉接觸空氣中的O₂後被氧化，形成氧化鐵類物質並放出熱量。",
    steps: [
      "真空包裝時缺少氧氣，鐵粉氧化很慢，不會明顯發熱。",
      "打開封口後，空氣中的O₂進入包內。",
      "鐵被O₂氧化的過程放熱，碳粉、鹽與水分可幫助反應進行。",
      "所以答案為B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "N₂性質穩定，在暖暖包條件下不會作為主要氧化劑和鐵粉快速放熱反應。" },
      B: { verdict: "correct", reason: "O₂會氧化鐵粉，形成氧化鐵類物質並釋放熱能，是暖暖包主要熱源。" },
      C: { verdict: "incorrect", reason: "CO₂不是暖暖包中氧化鐵粉的主要反應物，含量也遠低於空氣中的O₂。" },
      D: { verdict: "incorrect", reason: "水分能幫助離子移動與腐蝕反應，但鐵被氧化所需的主要氧化劑是O₂。" },
      E: { verdict: "incorrect", reason: "Ar是惰性氣體，通常不與鐵粉發生化學反應，也不會提供放熱來源。" }
    },
    takeaway: "暖暖包利用鐵粉的緩慢氧化放熱；密封隔絕氧氣就能延後反應。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-8": {
    encouragement: "先用加熱前後的質量差找出水，再把水和無水鹽都換成莫耳數，比值就是x。",
    keyIdea: "結晶水莫耳數÷無水Na₂CO₃莫耳數，可求得Na₂CO₃·xH₂O中的x。",
    steps: [
      "失去的水質量為0.572－0.212＝0.360 g，即0.360÷18＝0.020 mol。",
      "Na₂CO₃莫耳質量為106 g/mol，0.212 g為0.212÷106＝0.002 mol。",
      "水與Na₂CO₃莫耳比為0.020：0.002＝10：1。",
      "所以x＝10，答案D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "x＝2只代表每莫耳Na₂CO₃帶2莫耳水，遠少於由0.360 g水算出的10倍莫耳比。" },
      B: { verdict: "incorrect", reason: "水與無水鹽的莫耳數不是3：1；實際為0.020：0.002＝10：1。" },
      C: { verdict: "incorrect", reason: "x＝8沒有符合質量差所代表的0.020 mol水，計算出的整數比應為10。" },
      D: { verdict: "correct", reason: "結晶水0.020 mol、Na₂CO₃為0.002 mol，兩者莫耳比10：1，所以x＝10。" },
      E: { verdict: "incorrect", reason: "x＝12會需要0.024 mol水，與實際由加熱減少質量算出的0.020 mol不符。" }
    },
    takeaway: "結晶水題固定三步：質量差求水、殘渣求鹽、兩者莫耳數化最簡整數比。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-9": {
    encouragement: "共存題要逐組找「酸鹼反應、沉澱或快速氧化」；只要有一個明顯反應就不能共存不變。",
    keyIdea: "H₂、O₂、N₂在0°C且未點燃時可共存；其餘組合會發生氧化、吸收或沉澱反應。",
    steps: [
      "H₂與O₂雖能燃燒，但在0°C、沒有點火或催化條件時可和N₂一起存在。",
      "NO會被O₂氧化成NO₂；CO₂會和Ca(OH)₂形成CaCO₃。",
      "AgNO₃與NaCl混合會立即形成AgCl沉澱。",
      "因此答案為A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "在0°C且沒有點火條件下，H₂與O₂不會自行快速反應，N₂也很穩定，三者可共存。" },
      B: { verdict: "incorrect", reason: "NO會被O₂氧化成NO₂，使容器內物質組成改變，不能維持原樣共存。" },
      C: { verdict: "incorrect", reason: "CO₂會與Ca(OH)₂反應生成CaCO₃沉澱和水，因此混合後會發生變化。" },
      D: { verdict: "incorrect", reason: "Ag⁺遇Cl⁻會立即形成白色AgCl沉澱，另外Ag⁺也可和CrO₄²⁻形成沉澱。" }
    },
    takeaway: "判斷溶液或氣體能否共存，要檢查是否會生成沉澱、氣體、弱電解質或發生氧化還原。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-10": {
    encouragement: "油脂加強鹼共煮就是經典的皂化反應，產物名稱已藏在「皂化」兩字裡。",
    keyIdea: "油脂與NaOH或KOH加熱水解，生成脂肪酸鹽與甘油；脂肪酸鹽就是肥皂。",
    steps: [
      "廢食油主要成分是三酸甘油酯等油脂。",
      "油脂和強鹼加熱會水解，稱為皂化反應。",
      "產物中的長鏈脂肪酸鈉鹽或鉀鹽可作為肥皂。",
      "所以答案為D。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "面霜是乳化配方產品，不是廢食油和強鹼皂化後的直接主要產物。" },
      B: { verdict: "incorrect", reason: "蠟燭常以石蠟或蠟類製成，油脂和強鹼共煮不會直接變成蠟燭原料。" },
      C: { verdict: "incorrect", reason: "機油主要為礦物油或合成潤滑油，並非食用油經強鹼水解的產物。" },
      D: { verdict: "correct", reason: "油脂與強鹼發生皂化，生成長鏈脂肪酸鹽，這類物質就是肥皂。" },
      E: { verdict: "incorrect", reason: "瀝青是石油加工所得的重質材料，不是廢食油與強鹼共煮後形成。" }
    },
    takeaway: "油脂＋強鹼加熱→脂肪酸鹽（肥皂）＋甘油，這個反應叫皂化。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-11": {
    encouragement: "把三種材料的特徵分開看：絲是蛋白質會有異味且怕鹼，棉怕酸，耐綸受測試影響較小。",
    keyIdea: "絲為蛋白質纖維，燃燒有特殊異味且受鹼破壞；棉為纖維素受強酸破壞；耐綸熔成小珠。",
    steps: [
      "甲靠近火焰稍縮、燃燒有異味且浸NaOH變脆，符合蛋白質纖維絲。",
      "乙遇火無明顯熔縮、無異味且被硫酸破壞，符合纖維素棉。",
      "丙尖端熔成小珠且對兩種溶液較穩定，符合合成纖維耐綸。",
      "所以甲絲、乙棉、丙耐綸，答案B。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲在鹼中變脆且燃燒有異味，較像蛋白質絲而不是纖維素棉；甲乙判反。" },
      B: { verdict: "correct", reason: "甲符合絲的蛋白質特性，乙符合棉的纖維素特性，丙熔成小珠符合耐綸。" },
      C: { verdict: "incorrect", reason: "甲沒有合成纖維典型的熔珠表現，丙才是熔成小珠且耐化學處理的耐綸。" },
      D: { verdict: "incorrect", reason: "丙的熔珠與耐酸鹼特徵不像蛋白質絲；甲才呈現絲受鹼破壞與異味特徵。" }
    },
    takeaway: "纖維鑑別要整合燃燒、熔融、氣味及耐酸鹼性，不能只靠單一現象。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-12": {
    encouragement: "先用質量數每次減4找α次數，再用原子序追蹤β⁻每次加1，就不會混亂。",
    keyIdea: "α衰變使A減4、Z減2；β⁻衰變使A不變、Z加1。",
    steps: [
      "質量數由238降到206，相差32，因此需要32÷4＝8次α衰變。",
      "8次α後原子序由92降到92－16＝76。",
      "要到鉛的82，還需6次β⁻衰變，每次使原子序增加1。",
      "所以為8α、6β⁻，答案A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "8次α使質量數減32、原子序降到76，再6次β⁻使原子序升到82。" },
      B: { verdict: "incorrect", reason: "8次α後若再有8次β⁻，原子序會由76升到84，不是鉛的82。" },
      C: { verdict: "incorrect", reason: "10次α會使質量數由238降到198，與題目終點206不符。" },
      D: { verdict: "incorrect", reason: "10次α已使質量數錯誤；再配10次β⁻也無法同時符合質量數206與原子序82。" }
    },
    takeaway: "核衰變追蹤表：α是A－4、Z－2；β⁻是A不變、Z＋1。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-13": {
    encouragement: "實驗順序抓住「先量原料與初溫、再反應與末溫、最後計算」即可。",
    keyIdea: "溶解熱實驗需先知道溶質莫耳數與水的初溫，再記錄溶解後溫度，求ΔT後計算熱量。",
    steps: [
      "先稱鹽並換算莫耳數f，再量水的初始溫度d。",
      "把鹽加入水中並攪拌溶解a，接著記錄溶液末溫e。",
      "由初末溫求溫度變化c，再結合熱量與莫耳數計算莫耳溶解熱b。",
      "順序為f、d、a、e、c、b，答案A。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "先量鹽量與初溫，再溶解、量末溫、求溫差，最後計算，順序完整合理。" },
      B: { verdict: "incorrect", reason: "在尚未加入鹽之前不能把第二次量溫當作溶解後末溫，步驟e的位置過早。" },
      C: { verdict: "incorrect", reason: "尚未取得質量、溫差等資料就先計算莫耳溶解熱，實驗順序顛倒。" },
      D: { verdict: "incorrect", reason: "加入鹽以前沒有先量水的初始溫度，之後便無法正確求得溫度變化。" },
      E: { verdict: "incorrect", reason: "一開始就加鹽卻尚未量初溫與鹽的莫耳數，會失去必要的基準資料。" }
    },
    takeaway: "熱量實驗順序：量初始條件→進行反應→量最後狀態→算溫差與莫耳熱。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-14": {
    encouragement: "找哪項產品的關鍵元素可直接取自空氣；硝酸的氮可以從空氣中的N₂開始製備。",
    keyIdea: "工業上可由空氣分離N₂，先製氨再經氧化製硝酸；其他選項主要原料來自礦石或石油。",
    steps: [
      "空氣約含78% N₂，是大量且可分離的含氮原料。",
      "工業上N₂與H₂先製NH₃，再可把NH₃氧化製成HNO₃。",
      "鋁與水泥需礦物原料；汽油與聚乙烯主要來自石油。",
      "所以答案為E。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "鋁主要由鋁土礦等含鋁礦石提煉，空氣不是鋁元素的工業原料來源。" },
      B: { verdict: "incorrect", reason: "汽油主要由原油分餾與加工取得，不能直接以空氣作為主要原料。" },
      C: { verdict: "incorrect", reason: "聚乙烯以乙烯聚合製成，乙烯通常來自石油裂解，不是從空氣取得。" },
      D: { verdict: "incorrect", reason: "水泥主要使用石灰石、黏土等礦物原料，關鍵固體原料不取自空氣。" },
      E: { verdict: "correct", reason: "硝酸所需的氮可由空氣中的N₂取得，經製氨與氧化等工業步驟生產。" }
    },
    takeaway: "空氣不只是氧氣來源；其中大量的N₂也是氨、硝酸與氮肥工業的重要原料。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-62": {
    encouragement: "向上排空氣法適合比空氣重、又不方便用水收集的氣體，先比較莫耳質量再看溶解性。",
    keyIdea: "Cl₂、HCl、SO₂都比空氣重，且會溶於水或與水反應，適合向上排空氣收集。",
    steps: [
      "空氣平均莫耳質量約29 g/mol；比它重的氣體可沉在集氣瓶下方，把空氣向上排出。",
      "Cl₂約71、HCl約36.5、SO₂約64 g/mol，三者都比空氣重。",
      "它們又會溶於水或與水作用，不適合直接用排水法。",
      "因此選B、F、G。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "H₂莫耳質量只有2，遠比空氣輕，應考慮向下排空氣法或排水法收集。" },
      B: { verdict: "correct", reason: "Cl₂莫耳質量約71，比空氣重且會溶於水，可用向上排空氣法收集。" },
      C: { verdict: "incorrect", reason: "O₂雖略比空氣重，但難溶於水，實驗室通常優先用排水法取得較純氧氣。" },
      D: { verdict: "incorrect", reason: "N₂莫耳質量28，與空氣相近且難溶於水，不適合作為向上排空氣法的典型氣體。" },
      E: { verdict: "incorrect", reason: "NH₃莫耳質量17，比空氣輕，且極易溶於水，應用向下排空氣法收集。" },
      F: { verdict: "correct", reason: "HCl莫耳質量36.5比空氣重，又極易溶於水，適合向上排空氣法。" },
      G: { verdict: "correct", reason: "SO₂莫耳質量64比空氣重且可溶於水，適合由下方進氣把空氣向上排出。" },
      H: { verdict: "incorrect", reason: "CO莫耳質量28與空氣相近，且有毒，不能靠向上排空氣法有效分層收集。" }
    },
    takeaway: "向上排空氣＝氣體比空氣重；若氣體易溶於水，更需要用排空氣法。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-63": {
    encouragement: "題目問「不正確」，先記小蘇打會稍溶於水，而且水溶液呈弱鹼性，就能找到兩項。",
    keyIdea: "NaHCO₃可溶於水且水溶液呈弱鹼性；遇酸或受熱都可放出CO₂。",
    steps: [
      "小蘇打是碳酸氫鈉NaHCO₃，可溶於水但溶解度不算很大。",
      "HCO₃⁻在水中使溶液呈弱鹼性，不是弱酸性。",
      "它遇HCl及受熱都能產生CO₂，也常作烘焙膨鬆劑。",
      "所以不正確的是A、C。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "此敘述不正確；NaHCO₃能溶於水，只是溶解度有限，不能說完全不溶。" },
      B: { verdict: "incorrect", reason: "NaHCO₃與HCl反應會形成H₂CO₃，隨即分解放出CO₂與水，此敘述正確。" },
      C: { verdict: "correct", reason: "此敘述不正確；NaHCO₃水溶液通常呈弱鹼性，而不是弱酸性。" },
      D: { verdict: "incorrect", reason: "NaHCO₃受熱可分解為Na₂CO₃、CO₂與H₂O，因此此敘述正確。" },
      E: { verdict: "incorrect", reason: "小蘇打受熱或遇酸會產生CO₂使麵糰膨鬆，所以常作麵包發粉成分。" },
      F: { verdict: "incorrect", reason: "小蘇打的正式化學名稱確實是碳酸氫鈉，因此此敘述正確。" },
      G: { verdict: "incorrect", reason: "碳酸氫鈉的化學式為NaHCO₃，元素比例與電荷都正確。" }
    },
    takeaway: "小蘇打NaHCO₃三大特性：弱鹼性、遇酸放CO₂、受熱也放CO₂。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-87-64": {
    encouragement: "同位素只看質子數是否相同；中子數不同反而正是同位素彼此的差別。",
    keyIdea: "同位素具有相同原子序，也就是相同質子數，但中子數與質量數不同。",
    steps: [
      "逐項比較質子數p，只有甲與丁都含6個質子。",
      "甲有6個中子、丁有7個中子，所以兩者質量數不同。",
      "相同質子數表示同一元素，不同中子數表示不同同位素。",
      "因此選A、D。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲含6個質子，與丁的質子數相同；兩者中子數不同，正好互為同位素。" },
      B: { verdict: "incorrect", reason: "乙含7個質子，其他選項沒有另一個質子數同為7但中子數不同的原子核。" },
      C: { verdict: "incorrect", reason: "丙含8個質子，與甲、乙、丁、戊的質子數都不同，沒有配對同位素。" },
      D: { verdict: "correct", reason: "丁與甲都含6個質子，但丁有7個中子、甲有6個中子，因此互為同位素。" },
      E: { verdict: "incorrect", reason: "戊含9個質子，沒有另一選項也含9個質子，不能和其他原子核互為同位素。" }
    },
    takeaway: "判斷同位素先比質子數：質子相同、中子不同，才是同一元素的不同同位素。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  }
});
