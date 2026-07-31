window.LEARNING_DATA ||= {};
(window.LEARNING_DATA.explanations ||= {});

Object.assign(window.LEARNING_DATA.explanations, {
  "學-112-10": {
    encouragement: "題目問病毒存活，就只看病毒量，而且要比較有 2b 與失去 2b 的差異。",
    keyIdea: "若 2b 幫助 CMV 存活，正常 CMV 的病毒量應高，而失去 2b 的 CMV-2b 應明顯較低。",
    steps: ["先排除縱軸是蚜蟲產子數的 A、B、C，因為它們沒有直接測病毒存活。", "D 顯示 CMV 病毒量高、CMV-2b 低，正好支持 2b 有助存活。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A 的縱軸是蚜蟲產子數，只能看傳播者繁殖，不能直接判斷病毒存活。" },
      B: { verdict: "incorrect", reason: "B 同樣只呈現蚜蟲產子數，而且正常與缺失 2b 的差異很小。" },
      C: { verdict: "incorrect", reason: "C 是蚜蟲產子數，且缺失 2b 組反而較高，沒有支持題述。" },
      D: { verdict: "correct", reason: "D 直接測病毒量，正常 CMV 高而失去 2b 的 CMV-2b 低。" },
      E: { verdict: "incorrect", reason: "E 顯示正常與缺失 2b 的病毒量都高，無法說明 2b 有幫助。" }
    },
    takeaway: "判讀實驗先確認縱軸是否直接測到題目要驗證的結果。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-113-1": {
    encouragement: "圖中細胞扁平、不規則、有細胞核且沒有細胞壁，正是常見的口腔細胞。",
    keyIdea: "口腔黏膜細胞是扁平動物細胞，染色後可見細胞核與不規則細胞膜。",
    steps: ["圖中每個細胞都有細胞核，但外圍沒有硬直的植物細胞壁。", "扁平且不規則的排列最符合從口腔內側刮取的黏膜細胞。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "成熟紅血球沒有細胞核，白血球也不會形成圖中整片扁平排列。" },
      B: { verdict: "correct", reason: "口腔黏膜細胞扁平不規則、有細胞核且沒有細胞壁，與圖一致。" },
      C: { verdict: "incorrect", reason: "洋蔥根尖細胞有明顯細胞壁，且常見正在分裂的整齊小細胞。" },
      D: { verdict: "incorrect", reason: "洋蔥表皮呈長方形磚牆狀，細胞壁比圖中輪廓更規則。" },
      E: { verdict: "incorrect", reason: "水蘊草葉片細胞有細胞壁與葉綠體，圖中都沒有呈現。" }
    },
    takeaway: "動物細胞只有細胞膜，植物細胞另有細胞壁，形狀通常較固定。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-113-2": {
    encouragement: "把作物曲線疊到平地與山地溫度範圍上，就能判斷哪個季節效率較高。",
    keyIdea: "甲較適合較暖的平地；乙在平地冬季溫度下的光合效率高於夏季。",
    steps: ["甲在較高溫範圍仍維持較佳效率，因此相較山地更適合平地。", "乙在平地冬季約 15～20°C 效率高，夏季接近 30°C 時下降，冬季消耗二氧化碳較多。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "山地冬季溫度偏低，甲的全年光合效率並不比乙更合適。" },
      B: { verdict: "incorrect", reason: "乙在平地夏季高溫時效率下降，收成時間不會因此比冬季更短。" },
      C: { verdict: "correct", reason: "甲在平地較暖溫度範圍維持較高效率，比在山地更適合。" },
      D: { verdict: "correct", reason: "乙在平地冬季溫度下光合效率較高，消耗二氧化碳會比夏季多。" },
      E: { verdict: "incorrect", reason: "甲在平地夏季仍有較高效率，不能說冬季一定比夏季消耗更多二氧化碳。" }
    },
    takeaway: "光合效率越高，固定與消耗的二氧化碳通常越多，作物生長也可能較快。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-113-8": {
    encouragement: "親緣遠近只看最近共同祖先的位置，不看兩個名稱在圖上離多遠。",
    keyIdea: "乙與丁的共同祖先比甲與乙的共同祖先晚出現，所以乙丁比甲乙親近。",
    steps: ["甲很早便從主幹分出，甲與乙只能追溯到較靠近樹根的共同祖先。", "乙與丁在上方較晚才分開，共同祖先較近，因此甲乙小於乙丁。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲與乙、甲與丙都要追溯到甲分支的同一祖先，親疏沒有大於關係。" },
      B: { verdict: "incorrect", reason: "甲與乙、甲與丁的最近共同祖先相同，不能判定甲乙較疏。" },
      C: { verdict: "incorrect", reason: "甲與乙的共同祖先較早，不會比乙與丙的共同祖先更近。" },
      D: { verdict: "correct", reason: "乙與丁共祖較晚，親緣較近，所以甲乙的親緣小於乙丁。" },
      E: { verdict: "incorrect", reason: "丙與丁在上方分支較近，甲乙不會比丙丁親近。" }
    },
    takeaway: "共同祖先越晚、越接近端點，兩個物種的親緣通常越近。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-114-7": {
    encouragement: "題目把麻雀也算進恐龍，就要找到麻雀與三角龍最近共同祖先所在節點。",
    keyIdea: "依正式演化樹，麻雀與三角龍最近共同祖先位於庚，庚的所有後代構成題述恐龍。",
    steps: ["先從麻雀與三角龍兩個端點往回追，直到兩條路第一次會合。", "兩條分支在庚會合，因此以庚為起點可包含此祖先的所有後代。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "丁的位置太靠近樹根，會把題目定義之外的更多類群一併納入。" },
      B: { verdict: "incorrect", reason: "戊不是麻雀與三角龍兩支首次會合的最近共同祖先。" },
      C: { verdict: "incorrect", reason: "己仍不是兩個指定物種最近共同祖先的正確節點。" },
      D: { verdict: "correct", reason: "庚正是麻雀與三角龍的最近共同祖先，能包含其所有後代。" },
      E: { verdict: "incorrect", reason: "辛位於較晚的分支，無法同時包含麻雀與三角龍兩個類群。" }
    },
    takeaway: "單系群包含一個共同祖先，以及這個祖先的全部後代。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-114-8": {
    encouragement: "演化樹可以旋轉分支，只要分叉先後與共同祖先關係不變，就是同一棵樹。",
    keyIdea: "A、C、D 雖然畫法不同，仍保留圖 2 中各恐龍類群的共同祖先與分支順序。",
    steps: ["逐圖比較哪些端點先共享節點，不受左右排列或枝條傾斜影響。", "A、C、D 都能由圖 2 的分支旋轉得到；B、E 改變了親緣分組。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 保留原圖各類群的最近共同祖先關係，只是旋轉了分支方向。" },
      B: { verdict: "incorrect", reason: "B 把原圖中不應最先成為姊妹群的類群排在同一近支。" },
      C: { verdict: "correct", reason: "C 雖改變端點左右次序，但分叉順序與原演化關係一致。" },
      D: { verdict: "correct", reason: "D 可由原樹在節點處旋轉得到，沒有改變各類群的共同祖先。" },
      E: { verdict: "incorrect", reason: "E 改變了至少一組類群的最近共同祖先，不能代表圖 2。" }
    },
    takeaway: "判斷演化樹是否相同，要比節點與姊妹群，不要只比外觀排列。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-114-37": {
    encouragement: "兩張圖分開讀：甲看不同器官，乙看溫度與鹽度共同影響。",
    keyIdea: "RGN 在器官間表現不同；低溫適應不只牽涉 RGN；淡水魚適應低溫需要提高 RGN mRNA。",
    steps: ["圖甲顯示肝臟最高、其他器官較低，證明器官間表現量不同。", "圖乙顯示淡水低溫時 RGN 大增；文章又指出鈣離子調節，說明不只一項機制。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "圖甲各器官柱高差異很大，RGN 基因表現量顯然不相同。" },
      B: { verdict: "incorrect", reason: "文章指出 RGN 能與鈣離子結合，不能說抗低溫與離子濃度無關。" },
      C: { verdict: "correct", reason: "低溫調節還涉及鈣離子與基因網絡，不會只靠 RGN 一種產物。" },
      D: { verdict: "correct", reason: "淡水魚低溫時 RGN mRNA 大幅增加，支持其為適應低溫的必要反應。" },
      E: { verdict: "incorrect", reason: "圖乙比較養殖環境與溫度，題文沒有說資料來自血液樣本。" }
    },
    takeaway: "生理適應通常由多個基因、蛋白質與離子共同完成，不是一條單一路徑。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-115-28": {
    encouragement: "DNA 在分裂前的間期就先複製完成，所以最早看到雙倍 DNA 的是第一個樣態。",
    keyIdea: "正式圖 A 為進入分裂前、DNA 已複製的細胞，是五個進程中最早具有雙倍 DNA 者。",
    steps: ["細胞進入有絲分裂前，會在間期 S 期完成 DNA 複製。", "A 尚保有完整細胞核、位在其他分裂樣態之前，因此最早已形成雙倍 DNA。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 是分裂前期程最早的樣態，DNA 已在先前間期完成複製而成雙倍。" },
      B: { verdict: "incorrect", reason: "B 的染色體已開始凝縮，時間晚於 A 已完成 DNA 複製的階段。" },
      C: { verdict: "incorrect", reason: "C 已進入染色體排列階段，雙倍 DNA 形成時間更早。" },
      D: { verdict: "incorrect", reason: "D 的染色體已分向兩極，並不是最早形成雙倍 DNA 的進程。" },
      E: { verdict: "incorrect", reason: "E 已形成兩個子細胞核，時間位於有絲分裂末段。" }
    },
    takeaway: "DNA 複製發生在間期 S 期，早於染色體凝縮、排列與分離。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-115-31": {
    encouragement: "Y 與 O 型配偶生出 A、O 子女，先確定 Y 必是帶 i 的 A 型，再判斷 X。",
    keyIdea: "Y 必為 IAi；X 與 AB 型配偶能生 AB、A 子女，可為 IAi 或 IBi。",
    steps: ["Y 與 ii 配偶生出 A 與 O，Y 必須同時提供 IA 與 i，因此是 IAi。", "X 的子女為 AB 與 A，X 可是 IAi，也可用 IBi 搭配 AB 型配偶產生這些結果。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "X 為 IAi 可生 AB、A 子女，Y 為 IAi 也可與 O 型生 A、O 子女。" },
      B: { verdict: "incorrect", reason: "Y 若為 ii，和 O 型配偶只能生 O 型，無法生出圖中的 A 型子女。" },
      C: { verdict: "correct", reason: "X 為 IBi 仍可能與 AB 型配偶生 AB、A；Y 為 IAi 也符合。" },
      D: { verdict: "incorrect", reason: "X 雖可能為 IBi，但 Y 不可能是 ii，因為已有 A 型子女。" },
      E: { verdict: "incorrect", reason: "X 若為 ii，與 AB 型配偶只能生 A 或 B，不能生出 AB 型子女。" }
    },
    takeaway: "族譜推理要找每名子女的等位基因分別能由哪位親代提供。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-115-36": {
    encouragement: "恐龍與鳥類親緣最近，因此新分支要插在鳥類旁、共享最近共同祖先。",
    keyIdea: "現代證據支持鳥類屬於恐龍演化支，恐龍應插入鳥類分支旁的節點①。",
    steps: ["四足類樹中，鳥類與鱷魚較接近，恐龍又與鳥類具有更近親緣。", "要形成鳥類與恐龍的共同節點，應把恐龍分支插入鳥類旁的①。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "①緊鄰鳥類分支，可形成鳥類與恐龍最近共同祖先的新節點。" },
      B: { verdict: "incorrect", reason: "②位於鳥類與鱷魚共同支較早的位置，會把恐龍關係放得過遠。" },
      C: { verdict: "incorrect", reason: "③會使恐龍與蜥蜴類形成較近關係，不符合現代演化證據。" },
      D: { verdict: "incorrect", reason: "④靠近龜鱉類分支，不能呈現恐龍與鳥類的近親關係。" },
      E: { verdict: "incorrect", reason: "⑤接近哺乳類分支，與恐龍屬爬行類演化支的證據不符。" }
    },
    takeaway: "鳥類是現生恐龍後裔；演化樹上恐龍應與鳥類共享很近的祖先。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-115-39": {
    encouragement: "先記住三個關係：青蛙最早分出、鳥與鱷魚最近、蛇與蜥蜴最近。",
    keyIdea: "A、D 都保留正式圖中青蛙與大鼠較早分支，以及鳥鱷、蛇蜥兩組近親關係。",
    steps: ["由圖 14 判斷青蛙先分出、大鼠次之，龜位於爬行類與鳥類群之外側。", "再確認鳥與鱷魚、蛇與蜥蜴各為近親；A、D 雖旋轉分支但關係相同。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A 保留青蛙、大鼠的外群順序，也維持鳥鱷與蛇蜥的近親分組。" },
      B: { verdict: "incorrect", reason: "B 改變蛇、蜥蜴或鳥、鱷魚的最近共同祖先，與圖 14 不同。" },
      C: { verdict: "incorrect", reason: "C 的外群先後或爬行類內部分組至少有一處不符合原圖。" },
      D: { verdict: "correct", reason: "D 只是旋轉節點與調換左右，所有共同祖先關係仍與圖 14 相同。" },
      E: { verdict: "incorrect", reason: "E 把大鼠放到不正確的近支，破壞了哺乳類較早分出的關係。" }
    },
    takeaway: "演化樹可旋轉，但最近共同祖先與姊妹群不能改變。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-115-40": {
    encouragement: "四張圖各看一件事，最後再問：基改後果實成熟率真的提升了嗎？",
    keyIdea: "缺少任一花蜜成分的基改型果實成熟率都低於野生型，並未達成提升目的。",
    steps: ["圖甲至丁支持尼古丁與苄丙酮會影響訪花數、停留時間與取食量。", "圖丙顯示野生型果實成熟率最高，三種基改型都較低，因此 E 錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "不含尼古丁的兩組每日訪花數都低於野生型，敘述符合圖甲。" },
      B: { verdict: "incorrect", reason: "三種缺少成分的花朵停留時間都比野生型長，符合圖乙。" },
      C: { verdict: "incorrect", reason: "不含尼古丁的基改型成熟率低於野生型，符合圖丙。" },
      D: { verdict: "incorrect", reason: "只含苄丙酮的基改型花蜜被取食量高於野生型，符合圖丁。" },
      E: { verdict: "correct", reason: "基改型果實成熟率都沒有高於野生型，因此沒有達成提升目的。" }
    },
    takeaway: "單一行為指標變好不等於整體繁殖成功，仍要看最終果實成熟率。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-96-4": {
    encouragement: "分布圖只能說曲線顯示的範圍，看到兩群完全不重疊才可說「每一隻都更大」。",
    keyIdea: "丙島上中地雀與小地雀鳥喙分布沒有重疊，因此每隻中地雀都比小地雀大。",
    steps: ["比較丙島實線與虛線的左右範圍，兩個分布區完全分開。", "中地雀曲線全部位於較大鳥喙一側，所以可作每一隻都較大的判斷。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "丙島兩種地雀鳥喙分布不重疊，中地雀全都大於小地雀。" },
      B: { verdict: "incorrect", reason: "甲、丙兩島小地雀分布有重疊，任取個體不能保證甲都較大。" },
      C: { verdict: "incorrect", reason: "乙、丙中地雀的分布範圍有重疊，不能使用「都大於」的說法。" },
      D: { verdict: "incorrect", reason: "圖只呈現鳥喙分布，沒有提供丙島食物資源豐富程度。" },
      E: { verdict: "incorrect", reason: "即使平均值不同，也不能由圖推論乙島食物一定比較豐富。" }
    },
    takeaway: "曲線平均不同不代表每個個體都不同；只有分布不重疊才能下絕對結論。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-96-8": {
    encouragement: "兩種微藻一起養時一方被壓低是競爭；把 X 換成吃微藻的草履蟲則是捕食。",
    keyIdea: "微藻 X、Y 共用資源而競爭；草履蟲攝食微藻，形成掠食關係。",
    steps: ["兩種微藻單獨都能成長，混養後 Y 下降，表示共同爭奪光、養分與空間。", "若 X 改成草履蟲，草履蟲會吃微藻 Y，因此第二段是掠食。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩微藻混養是資源競爭；草履蟲與微藻則形成攝食的掠食關係。" },
      B: { verdict: "incorrect", reason: "兩種微藻不會互相捕食，草履蟲吃微藻也不是寄生。" },
      C: { verdict: "incorrect", reason: "混養後一方數量下降，不支持兩種微藻互利共生。" },
      D: { verdict: "incorrect", reason: "兩段都沒有雙方互利的證據，草履蟲與微藻也非片利共生。" }
    },
    takeaway: "競爭是共同資源不足；掠食是一方捕捉並攝食另一方。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-96-47": {
    encouragement: "這題問「不適宜推論」，只要圖沒有提供足夠證據，就不能說得太絕對。",
    keyIdea: "圖無法證明乙分布範圍較廣、兩極完全沒有生物，也不能支持近赤道甲一定多於乙。",
    steps: ["圖的曲線只顯示調查範圍與單位面積數量，不能外推到未調查的南北極。", "比較曲線可支持臺灣緯度與環境趨勢，但 A、B、C 的說法超過圖中證據。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲、乙曲線所涵蓋的緯度資料不支持乙南北分布顯然更廣。" },
      B: { verdict: "correct", reason: "圖未涵蓋所有南北極環境，不能斷言兩種生物在兩極都不可能存在。" },
      C: { verdict: "correct", reason: "北半球近赤道處的曲線資料不足以支持甲數量一定高於乙。" },
      D: { verdict: "incorrect", reason: "臺灣相近緯度可直接比較圖中曲線，乙的單位面積數量較高。" },
      E: { verdict: "incorrect", reason: "甲在低緯、雨多且生長季長的區域數量較高，與圖形趨勢相符。" }
    },
    takeaway: "科學圖表只能支持量測範圍內的推論，未量到的地方要保留不確定性。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-20": {
    encouragement: "演化樹上的端點不一定都活到現在，沒有碰到「現在」線的支系代表已滅絕。",
    keyIdea: "從乙到戌的各支系中，有些延伸到現在，有些在途中終止，表示存活與滅絕並存。",
    steps: ["先看虛線「現在」，碰到它的端點代表現存物種。", "有些支線在到達現在前便結束，代表該物種已滅絕，因此 C 正確。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中呈現多個起源支系，不能說所有現存生物都由同一圖示祖先而來。" },
      B: { verdict: "incorrect", reason: "部分現存生物會共享分叉節點，不能說全部來自不同祖先。" },
      C: { verdict: "correct", reason: "乙到戌的演化支中，有些抵達現在，有些提前終止，表示已有滅絕。" },
      D: { verdict: "incorrect", reason: "未與申的共同祖先比未與午更早，DNA 相似度不會更高。" }
    },
    takeaway: "演化樹中，兩物種共同祖先越近，通常 DNA 序列也越相似。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-21": {
    encouragement: "白天要讓酵素 F 更活躍，就把條件移向圖中活性最高的右上方。",
    keyIdea: "圖中 pH 越高、鎂離子越多，F 活性越高；白天兩者最可能都上升。",
    steps: ["比較三條曲線，相同鎂濃度下 pH 8 的活性高於 pH 7.5、7.0。", "每條曲線也隨鎂離子增加而上升，所以白天最可能 pH 與鎂濃度都增加。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若兩者都不變，無法利用圖示條件解釋白天酵素活性上升。" },
      B: { verdict: "incorrect", reason: "pH 與鎂都下降會使酵素活性降低，方向與白天活化相反。" },
      C: { verdict: "incorrect", reason: "鎂上升有利，但 pH 下降會使曲線落到較低活性區。" },
      D: { verdict: "incorrect", reason: "pH 上升有利，但鎂下降不利，並非圖中最能提升活性的組合。" },
      E: { verdict: "correct", reason: "pH 上升且鎂離子濃度增加，可把酵素活性推向圖中最高區。" }
    },
    takeaway: "兩變因圖要分別看各變因改變時，應變量朝哪個方向變化。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-22": {
    encouragement: "藻類需要光，越深光越少，所以應找隨深度增加而下降的曲線。",
    keyIdea: "丙族群在淺海最多、隨深度增加而減少，最符合需光合作用的藻類。",
    steps: ["光線由海面往深處迅速減弱，藻類通常集中在有光的淺層。", "圖中丙在淺海多、深海少，因此四者中最可能是藻類。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "藤壺多附著於淺海岸邊，不會隨海水深度增加而族群變大。" },
      B: { verdict: "incorrect", reason: "乙廣泛分布只表示耐受範圍廣，不能證明水壓是主要因素。" },
      C: { verdict: "correct", reason: "丙隨深度增加而下降，符合藻類需要淺海光線進行光合作用。" },
      D: { verdict: "incorrect", reason: "魚類是消費者，不能行自營生活；深海魚也不能靠光合作用。" }
    },
    takeaway: "海水越深光越弱，需光的藻類多分布在表層有光帶。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-43": {
    encouragement: "三條生存曲線分別代表早死多、各期平均死亡、老年才大量死亡。",
    keyIdea: "乙近直線代表各年齡死亡率相近；生存曲線可用於保育；丙到 75% 年齡仍逾半存活。",
    steps: ["乙曲線均勻下降，表示各年齡階段的死亡機率差異不大。", "丙前期維持高存活，75% 年齡時仍超過一半；這些資料可協助資源管理。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "乙的生存數量近似等速下降，代表各年齡死亡機率差異不大。" },
      B: { verdict: "incorrect", reason: "丙在成年期仍有大量個體存活，同種競爭對手不會最少。" },
      C: { verdict: "incorrect", reason: "一年生草本並不必然呈現甲所示大量幼體早期死亡的曲線。" },
      D: { verdict: "correct", reason: "掌握各年齡存活情形，可協助決定捕捉、利用或保育策略。" },
      E: { verdict: "correct", reason: "由丙曲線讀值，年齡百分比 75% 時仍有超過一半個體存活。" }
    },
    takeaway: "生存曲線描述不同年齡的存活比例，可找出生命史中最脆弱的階段。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-50": {
    encouragement: "實驗操弄了視覺、氣味與電訊號，唯獨沒有安排聲音的比較。",
    keyIdea: "六組實驗沒有改變或隔離聲音，因此聽覺已被排除在研究考量之外。",
    steps: ["活魚與魚肉塊可提供電覺、視覺與嗅覺的不同組合。", "各裝置沒有聲音刺激或隔音處理，所以不能用來研究聽覺。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗使用活魚、電極與絕緣裝置，明確把電覺列入比較。" },
      B: { verdict: "incorrect", reason: "食物藏在砂下或放在表面，已操弄鯊魚是否能看見食物。" },
      C: { verdict: "incorrect", reason: "魚肉血腥味隨水流擴散，實驗有考慮並比較嗅覺。" },
      D: { verdict: "correct", reason: "裝置沒有聲音刺激或隔音變因，因此聽覺未被納入考慮。" }
    },
    takeaway: "判斷控制變因，要找實驗中被刻意改變、保持或完全沒有處理的因素。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-51": {
    encouragement: "實驗己讓氣味與電訊號指向不同位置，看鯊魚最後攻擊哪一個。",
    keyIdea: "鯊魚近身後轉向砂中的電極，而非有氣味的魚肉，顯示電覺強於嗅覺。",
    steps: ["魚肉放在砂面可提供氣味，另一處砂下電極只提供類似生物電訊號。", "鯊魚靠近後攻擊電極位置，表示近身定位時電覺影響較強。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "實驗己的關鍵比較是電訊號與氣味，不支持視覺強於電覺。" },
      B: { verdict: "incorrect", reason: "鯊魚沒有選擇氣味來源魚肉，不能說嗅覺比視覺更強。" },
      C: { verdict: "correct", reason: "鯊魚選擇砂下電極而非魚肉氣味來源，顯示電覺強於嗅覺。" },
      D: { verdict: "incorrect", reason: "實驗結果不是在比較可見食物與氣味的優先順序。" }
    },
    takeaway: "鯊魚可先靠嗅覺接近，再利用電覺精確定位近處獵物。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-52": {
    encouragement: "要隔絕電傳導，就找把活魚包在絕緣容器中的那一組。",
    keyIdea: "正式圖丁把活比目魚放在以膠膜包覆的盒內，可阻隔食物與鯊魚間電訊號。",
    steps: ["活比目魚本身會產生生物電，海水能傳導此微弱訊號。", "丁以膠膜包覆容器隔開海水電路，因此可隔絕電傳導。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲只是把比目魚藏在砂中，海水與砂仍可傳遞電訊號。" },
      B: { verdict: "incorrect", reason: "乙的透明盒並未以題述方式完全阻隔食物產生的電訊號。" },
      C: { verdict: "incorrect", reason: "丙放置魚肉塊主要改變氣味來源，不是專門隔絕活魚生物電。" },
      D: { verdict: "correct", reason: "丁的活魚被膠膜包覆在盒內，能切斷海水中的電傳導路徑。" }
    },
    takeaway: "良好實驗會用絕緣材料單獨移除電訊號，再觀察行為是否改變。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-97-67": {
    encouragement: "先用父傳子的個案排除 X 聯，再用男女都患病排除 Y 聯。",
    keyIdea: "族譜有父子傳遞且男女皆患病，基因在體染色體；患病雙親能生正常子女，表示顯性。",
    steps: ["患病父親可生患病兒子，排除 X 聯；女性也患病，排除 Y 聯。", "兩名患病者生出正常子女，若為隱性不可能發生，因此是體染色體顯性。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若為隱性，兩名患病雙親都是 aa，子女應全部患病，與族譜不符。" },
      B: { verdict: "correct", reason: "患病雙親可為 Aa，生出 aa 正常子女，符合顯性遺傳。" },
      C: { verdict: "incorrect", reason: "族譜出現父親把疾病傳給兒子，排除位於 X 染色體。" },
      D: { verdict: "incorrect", reason: "族譜中有患病女性，Y 染色體基因不可能使女性患病。" },
      E: { verdict: "correct", reason: "男女都可患病且有父子傳遞，最符合基因位於體染色體。" }
    },
    takeaway: "父傳子排除 X 聯；女性患病排除 Y 聯；再用親子組合判斷顯隱性。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-35": {
    encouragement: "同源染色體沒有成對聯會，只是各自排列並被拉開，這是有絲分裂線索。",
    keyIdea: "圖中同源染色體未配成四分體，細胞正進行有絲分裂。",
    steps: ["減數分裂第一次分裂會見到同源染色體配對，形成二價體或四分體。", "正式圖中染色體各自排列、沒有同源配對，因此是有絲分裂。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "染色體各自排列且未見同源染色體聯會，符合有絲分裂。" },
      B: { verdict: "incorrect", reason: "減數第一次分裂應有同源染色體配對，圖中沒有這種特徵。" },
      C: { verdict: "incorrect", reason: "大腸桿菌是原核生物，不會形成紡錘絲進行典型有絲分裂。" },
      D: { verdict: "incorrect", reason: "依圖中染色體數，子細胞核所含 DNA 條數不只題述的兩條。" }
    },
    takeaway: "同源染色體聯會是減數分裂特徵；有絲分裂則讓染色體各自排列。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-46": {
    encouragement: "人口曲線是一路累積上升；出生率先維持高、死亡率則先下降。",
    keyIdea: "甲為人口數，乙為出生率，丙為死亡率，因此 B、D 的配對合理。",
    steps: ["甲以右軸人口數表示，從低逐漸上升後趨緩，符合人口總數。", "乙在過渡期仍高、之後下降，是出生率；丙較早下降，是死亡率。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲使用人口數刻度且持續累積，不是會升降的出生率。" },
      B: { verdict: "correct", reason: "乙較晚下降符合出生率，丙較早下降符合死亡率。" },
      C: { verdict: "incorrect", reason: "甲確為人口數，但乙是出生率，不是死亡率。" },
      D: { verdict: "correct", reason: "甲呈人口總數變化，乙呈出生率隨發展後期下降。" },
      E: { verdict: "incorrect", reason: "丙是死亡率曲線，不是會持續累積的人口總數。" }
    },
    takeaway: "死亡率先下降、出生率後下降，中間差距會造成過渡期人口快速成長。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-98-47": {
    encouragement: "出生率高於死亡率時，即使出生率正在下降，人口仍可能繼續增加。",
    keyIdea: "過渡期人口快速成長；工業後期出生死亡率都低；工業期出生率下降但仍高於死亡率。",
    steps: ["過渡期死亡率先下降而出生率仍高，兩者差距大，人口快速增加。", "工業期出生率雖下降但尚高於死亡率，人口續增；後期兩率皆低。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "過渡期出生率高、死亡率已下降，人口曲線因此快速上升。" },
      B: { verdict: "incorrect", reason: "過渡期出生率高於死亡率，否則人口不會快速成長。" },
      C: { verdict: "incorrect", reason: "人口總數會隨時間累積，工業期高於工業前期。" },
      D: { verdict: "correct", reason: "工業後期的出生率與死亡率都降到低於工業前期的水準。" },
      E: { verdict: "correct", reason: "工業期出生率雖下降但仍高於死亡率，所以人口仍持續增加。" }
    },
    takeaway: "人口增減看出生率與死亡率的相對大小，不只看其中一條升降。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-99-5": {
    encouragement: "牛樟樹是被子植物，牛樟芝是真菌，逐項比較兩大類群的基本構造。",
    keyIdea: "正確標示為甲葉綠體、丙種子、戊維管束；真菌其實有菌絲與細胞壁。",
    steps: ["牛樟樹有葉綠體、種子與維管束，牛樟芝都沒有這三者。", "牛樟芝是真菌，具有菌絲與細胞壁，因此表中把它們標成無的乙、丁錯誤。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲、丙正確，但乙把牛樟芝的菌絲標成沒有，因此不能選。" },
      B: { verdict: "correct", reason: "甲、丙、戊正確呈現植物有葉綠體、種子、維管束而真菌沒有。" },
      C: { verdict: "incorrect", reason: "丙、戊正確，但丁錯把真菌的細胞壁標示為沒有。" },
      D: { verdict: "incorrect", reason: "甲、戊正確，丁仍忽略牛樟芝作為真菌具有細胞壁。" }
    },
    takeaway: "真菌沒有葉綠體與維管束，但多具有菌絲和由幾丁質構成的細胞壁。",
    reviewStatus: "approved", reviewerRole: "biology"
  },
  "學-99-54": {
    encouragement: "複製牛的核心基因主要來自提供體細胞核的 A 牛，不是卵或代孕母牛。",
    keyIdea: "複製牛使用體細胞核移植，和精卵受精形成胚胎的試管嬰兒過程不同。",
    steps: ["A 牛提供體細胞核，B 牛提供去核卵細胞，C 牛只負責孕育。", "試管嬰兒仍由精子與卵細胞受精，與複製的體細胞核移植不同。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "如意的核基因主要來自 A 牛，不會因使用 B 牛卵細胞就與 B 表型相同。" },
      B: { verdict: "incorrect", reason: "C 牛只是代孕母牛，沒有提供如意細胞核中的染色體。" },
      C: { verdict: "correct", reason: "試管嬰兒由精卵受精，複製牛由體細胞核移植，操作原理不同。" },
      D: { verdict: "incorrect", reason: "精子只有單套染色體，不能直接取代提供細胞質與胞器的去核卵細胞。" },
      E: { verdict: "incorrect", reason: "如意由 A 牛體細胞核複製，該基因型直接為 Rr，不會有三種可能。" }
    },
    takeaway: "體細胞核決定複製動物大部分核遺傳；卵細胞提供細胞質，代孕母體提供發育環境。",
    reviewStatus: "approved", reviewerRole: "biology"
  }
});
