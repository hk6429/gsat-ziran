(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-100-24": {
    encouragement: "兩條導線離甲點一樣遠，先各用右手定則判方向，再把磁場相加。",
    keyIdea: "長直導線磁場繞著導線成圓；甲點處兩導線的磁場都穿出紙面。",
    steps: ["正式圖中兩導線電流分別沿兩條對角線流過原點。", "右手拇指沿各電流方向，彎曲四指可得甲點的磁場方向。", "兩個磁場在甲點都垂直穿出紙面，因此相加而不抵消。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩導線在甲點的磁場同向，量值不會相消為零。" },
      B: { verdict: "incorrect", reason: "長直導線在紙面內，甲點磁場垂直紙面，不沿+y。" },
      C: { verdict: "incorrect", reason: "磁場不沿−y，而是垂直紙面。" },
      D: { verdict: "incorrect", reason: "右手定則判得兩個貢獻都不是穿入紙面。" },
      E: { verdict: "correct", reason: "兩條導線在甲點都產生穿出紙面的磁場，合磁場也穿出。" }
    },
    takeaway: "磁場疊加前先逐條導線判方向；同向相加、反向才相減。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-100-28": {
    encouragement: "速度圖跨過零就代表換方向；一旦折返，路徑長一定大於位移量值。",
    keyIdea: "位移是速度—時間圖的帶正負面積，路徑長則把各面積都取正值。",
    steps: ["0到2秒速度皆為正，質點尚未折返，所以位移量值等於路徑長。", "2秒後速度變負，質點開始反向。", "因此0到3秒已有正向與反向路程，位移量值小於路徑長。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "位移量值不可能大於實際走過的路徑長。" },
      B: { verdict: "incorrect", reason: "0到2秒沒有換方向，所以兩者相等而非小於。" },
      C: { verdict: "incorrect", reason: "2到3秒已反向，路徑長會大於位移量值。" },
      D: { verdict: "correct", reason: "0到3秒跨越速度零點並折返，因此位移量值小於路徑長。" },
      E: { verdict: "incorrect", reason: "0到6秒包含長時間反向運動，不能把帶正負面積與總路程視為相等。" }
    },
    takeaway: "判位移與路程，第一眼先看速度有沒有變號。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-100-29": {
    encouragement: "碎冰加熱會依序經過融冰、熱水升溫、沸騰三段，兩次物態變化都會出現平臺。",
    keyIdea: "一大氣壓下冰在0°C熔化、水在100°C沸騰；物態變化時溫度維持不變。",
    steps: ["碎冰起初低於或等於0°C，先升到0°C並在熔化時保持0°C。", "冰全融後，液態水由0°C升到100°C。", "最後已有0.10 kg水汽化，但仍剩正沸騰的水，所以曲線終點應在100°C平臺。", "正式選項中只有D依序呈現這兩個平臺。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "一路斜升沒有0°C熔化與100°C沸騰平臺。" },
      B: { verdict: "incorrect", reason: "圖中出現不合理的溫度突跳，穩定加熱不會讓溫度瞬間躍升。" },
      C: { verdict: "incorrect", reason: "此圖未完整呈現冰熔化及水沸騰兩次定溫過程。" },
      D: { verdict: "correct", reason: "先在0°C熔化、再升溫、最後在100°C沸騰，順序完全符合。" },
      E: { verdict: "incorrect", reason: "圖中的多個階梯與物質只有熔化、沸騰兩次物態變化不符。" }
    },
    takeaway: "加熱曲線的水平段不是沒吸熱，而是熱量正在改變物態。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-100-42": {
    encouragement: "磁力線圖除了形狀，箭頭方向也要一起鏡射；這正是本題容易漏看的地方。",
    keyIdea: "磁棒外部磁力線由N極指向S極；關於x軸上下對稱，關於y軸只鏡射形狀會使方向不符。",
    steps: ["正式圖中N極在左、S極在右，外部磁力線由左往右。", "跨越x軸鏡射時，上下位置交換，但由N到S的左右方向不變。", "因此II對III、I對IV的分布與方向都能完全對上。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "I跨y軸到II後左右方向被鏡射，與真實由N到S的方向不一致。" },
      B: { verdict: "correct", reason: "II跨x軸鏡射到III，形狀與磁力線方向都相同。" },
      C: { verdict: "incorrect", reason: "IV跨y軸到III時，箭頭方向不能與真實磁力線完全相同。" },
      D: { verdict: "correct", reason: "I跨x軸鏡射到IV，磁棒上下對稱且左右方向不變。" },
      E: { verdict: "incorrect", reason: "I關於x軸只會到IV，不會直接與對角的III完全重合。" }
    },
    takeaway: "向量圖做鏡射時，不能只比曲線形狀，箭頭方向也必須一致。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-21": {
    encouragement: "三種圖要用三種讀法：位移圖看彎曲、速度圖看斜率、加速度圖直接讀。",
    keyIdea: "5秒時甲、乙的圖線斜率皆不再改變，所以加速度為0；丙加速度為0.2 m/s²。",
    steps: ["甲的位移—時間圖是直線，速度固定，所以加速度為0。", "乙在5秒時速度—時間圖為水平線，斜率為0，所以加速度為0。", "丙的加速度—時間圖在5秒直接讀得約0.2 m/s²。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲與乙加速度皆為0，丙大於0，因此甲＝乙＜丙。" },
      B: { verdict: "incorrect", reason: "甲與丙不相等，丙加速度較大。" },
      C: { verdict: "incorrect", reason: "乙的加速度為0，不等於丙。" },
      D: { verdict: "incorrect", reason: "甲、乙不是正加速度，且兩者相等。" },
      E: { verdict: "incorrect", reason: "丙的加速度最大，不是最小。" }
    },
    takeaway: "先確認縱軸是位置、速度還是加速度，才知道要看斜率或直接讀值。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-43": {
    encouragement: "水到空氣要離開法線，空氣到水要靠近法線，照這兩句檢查光路即可。",
    keyIdea: "光由水進空氣折射角變大；由空氣進水折射角變小；斜入射通常會偏折。",
    steps: ["由水下射向岸上時，光從高折射率進低折射率，折射後應遠離法線，正式圖的丙符合。", "由岸上射向水下時，光從低折射率進高折射率，折射後應靠近法線，正式圖的己符合。", "乙、戊斜穿介面卻不偏折，並非可能光路。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲在水到空氣後向法線靠近，折射方向相反。" },
      B: { verdict: "incorrect", reason: "乙斜入射卻不偏折，不符合折射定律。" },
      C: { verdict: "correct", reason: "丙由水到空氣後遠離法線，是可能路徑。" },
      D: { verdict: "incorrect", reason: "丁由空氣入水後偏向錯誤的一側，沒有靠近法線。" },
      E: { verdict: "correct", reason: "己由空氣進水後靠近法線，是可能路徑。" }
    },
    takeaway: "低折射率進高折射率靠近法線，反過來則遠離法線。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-64": {
    encouragement: "有空氣阻力時，較重的球要到更大速率，阻力才足以平衡重力。",
    keyIdea: "相同阻力常數k下，終端速率vt＝mg/k，與質量成正比。",
    steps: ["正式速度圖顯示甲終端速率約10 m/s、乙約20 m/s。", "終端時mg＝kvt，兩球k相同，所以質量比等於終端速率比。", "因此m₂＞m₁，且乙球全程較快，先到地面。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "兩球終端速率不同，質量不相等，也不會同時到地面。" },
      B: { verdict: "correct", reason: "乙終端速率較大代表m₂＞m₁，且乙較早抵達地面。" },
      C: { verdict: "incorrect", reason: "雖判對乙先到，但質量大小方向相反。" },
      D: { verdict: "incorrect", reason: "m₂不是較小，兩球也不會同時抵達。" },
      E: { verdict: "incorrect", reason: "m₂確實較大，但較快的是乙，不是甲。" }
    },
    takeaway: "線性阻力模型中，終端速率愈大通常代表mg/k愈大。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-65": {
    encouragement: "終端速率就是重力與阻力剛好平衡的時刻，代一個等式就能求k。",
    keyIdea: "終端狀態滿足mg＝kvt。",
    steps: ["甲球質量0.2 kg，重力mg＝0.2×10＝2 N。", "由正式圖讀得甲球終端速率約10 m/s。", "k＝mg/vt＝2÷10＝0.2 kg/s。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "k＝0.1時終端速率會是20 m/s，不是甲圖的10 m/s。" },
      B: { verdict: "correct", reason: "代入mg＝kvt可得k＝0.2 kg/s。" },
      C: { verdict: "incorrect", reason: "k＝4會使終端速率只有0.5 m/s。" },
      D: { verdict: "incorrect", reason: "10是重力加速度數值，不是阻力常數。" },
      E: { verdict: "incorrect", reason: "40遠大於由圖與平衡式得到的0.2。" }
    },
    takeaway: "看到速度最後變水平，就可用終端平衡mg＝kv。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-101-66": {
    encouragement: "忽略空氣阻力後，水平方向完全沒有力，水平速度自然保持不變。",
    keyIdea: "拋體運動水平方向加速度為0，所以vx為正的水平線。",
    steps: ["棒球出手時具有向前的水平速度。", "飛行中水平方向不受外力，ax＝0。", "因此落地前vx始終維持同一正值，正式圖A符合。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A為固定正值的水平線，符合水平方向等速度。" },
      B: { verdict: "incorrect", reason: "三角形表示水平速度先增後減，需有水平加速度。" },
      C: { verdict: "incorrect", reason: "曲線先增後降為零，不符合無水平外力。" },
      D: { verdict: "incorrect", reason: "U形曲線代表水平速度改變，與ax＝0矛盾。" },
      E: { verdict: "incorrect", reason: "V形線代表水平速度先減後增，也需要水平合力。" }
    },
    takeaway: "拋體的上下速度會變，但忽略阻力時水平速度不變。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-102-23": {
    encouragement: "先從磁力線看出P點的合磁場，再用右手握住螺線管判電流方向。",
    keyIdea: "螺線管電流方向由右手定則決定；正式合磁場顯示螺線管須提供對應方向的磁場。",
    steps: ["磁棒N極朝向螺線管，正式虛線顯示兩者磁場在空間中重新合成，電流不可能為零。", "依圖示P點附近所需的螺線管磁場方向，右手大拇指沿螺線管磁場方向。", "從P點右方的眼睛觀看，四指彎曲方向為順時針。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中磁力線受螺線管影響，表示螺線管確實有電流。" },
      B: { verdict: "incorrect", reason: "P點合磁場不能只由圖中的上方位置直覺判成向上。" },
      C: { verdict: "incorrect", reason: "P點合磁場也不是單純向下，需配合磁力線切線與螺線管方向。" },
      D: { verdict: "correct", reason: "依正式磁力線配合右手定則，從右方看電流為順時針。" },
      E: { verdict: "incorrect", reason: "逆時針會產生相反的螺線管磁場，無法形成圖示分布。" }
    },
    takeaway: "磁場方向看磁力線切線；線圈電流再用右手握拳反推。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-102-25": {
    encouragement: "感應電流看的是原電流變化有多快，不是原電流本身有多大。",
    keyIdea: "感應電流與磁通量變化率成正比；I₁只在t₁到t₂間快速改變。",
    steps: ["t₁以前I₁近似不變為零，感應電流I₂為零。", "t₁到t₂間I₁呈S形快速上升，其斜率先增後減，所以I₂形成一個脈衝。", "t₂以後I₁雖維持較大定值，但磁通量不再改變，I₂回到零。", "正式選項B正好呈現只在t₁到t₂出現的脈衝。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A讓I₂在t₂後維持定值，但穩定磁通不會持續感應電流。" },
      B: { verdict: "correct", reason: "B只在I₁改變的t₁到t₂間出現脈衝，之後歸零。" },
      C: { verdict: "incorrect", reason: "C讓I₂隨時間一直增加，並非取決於I₁的變化率。" },
      D: { verdict: "incorrect", reason: "D在t₂後仍拖著長尾，與I₁已不再改變不符。" },
      E: { verdict: "incorrect", reason: "E在t₁以前已有電流，且隨I₁上升反而降為零，時序不對。" }
    },
    takeaway: "互感題看到原電流的轉折，就去找只在轉折期間出現的感應訊號。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-102-40": {
    encouragement: "先從曲線讀出一天後剩下正常功率的比例，再把電量換成家庭使用月數。",
    keyIdea: "餘熱功率Pr＝rP；度數是功率乘時間。",
    steps: ["正式圖在停機一天後讀得r約5×10⁻³。", "一小時餘熱發電量≈64萬×0.005＝3200度。", "該用戶每月320度，所以3200度可用10個月，約300天。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "3小時只需約1.3度，遠低於餘熱一小時的電量。" },
      B: { verdict: "incorrect", reason: "3天家庭用電量遠少於3200度。" },
      C: { verdict: "incorrect", reason: "30天約用320度，只有計算值的十分之一。" },
      D: { verdict: "correct", reason: "3200度等於10個月用電，約為300天。" },
      E: { verdict: "incorrect", reason: "3000天多算十倍，等於把比例讀成5×10⁻²。" }
    },
    takeaway: "圖表比例先乘回原功率，再用相同的電量單位比較。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-102-54": {
    encouragement: "速度—時間圖下方的面積就是位移，用方格估面積就能得到答案。",
    keyIdea: "0到2秒位移等於v—t曲線下的面積。",
    steps: ["正式曲線從0快速上升，2秒時接近6 m/s。", "用方格或梯形分段估算曲線下面積，平均速度約4.5 m/s。", "位移≈4.5×2＝9 m。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4 m代表平均速度僅2 m/s，低估圖中大部分時間的速率。" },
      B: { verdict: "incorrect", reason: "6 m仍低估曲線下的面積。" },
      C: { verdict: "correct", reason: "由圖積分估得約9 m，最符合。" },
      D: { verdict: "incorrect", reason: "12 m等於全程都以6 m/s行進，但前段速率較低。" },
      E: { verdict: "incorrect", reason: "14 m甚至超過6×2的上限，不可能。" }
    },
    takeaway: "曲線下方面積可用平均高度乘底寬做快速估算。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-103-62": {
    encouragement: "先從原合力箭頭拆出水平與斜向兩個分力，就能反推三個電荷的吸斥關係。",
    keyIdea: "原圖顯示Y吸引Z且作用較強、X排斥Z且較弱；交換位置後合力轉向右上。",
    steps: ["原合力向左下；其中Y與Z在水平線上，所以Y對Z提供較強的向左吸引力。", "X位於Z的左上方，X對Z須為沿斜線向右下的排斥力，才能形成向下分量。", "交換X、Y位置後，近處X改為向右排斥，遠處Y改為向左上吸引。", "向右分量較強且仍有向上分量，合力指向右上，為D。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "交換後斜向分力改成向左上，不會保留向下分量。" },
      B: { verdict: "incorrect", reason: "水平兩力不會恰好抵消成純向下，且垂直分量方向已向上。" },
      C: { verdict: "incorrect", reason: "左下是原合力方向，位置交換後吸斥分力配置已改變。" },
      D: { verdict: "correct", reason: "近處同號排斥向右較強，遠處異號吸引提供向上分量，合力向右上。" },
      E: { verdict: "incorrect", reason: "向左分量不足以壓過近處X造成的向右排斥。" }
    },
    takeaway: "向量題可先把合力拆成沿各連線的分力，再判吸引或排斥。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-103-67": {
    encouragement: "僵硬程度就是圖中F除以伸長量，挑一個遠離原點的資料點算最穩。",
    keyIdea: "S＝F/ΔL，毫米必須換成公尺。",
    steps: ["由正式圖取約F＝700 N、ΔL＝29 mm＝0.029 m。", "S≈700÷0.029≈2.4×10⁴ N/m。", "與其他資料點的斜率也相近，因此選E。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "4.0×10⁻⁵把比值倒置且單位不符。" },
      B: { verdict: "incorrect", reason: "6.5×10⁻¹遠小於圖線斜率，並漏掉毫米換公尺。" },
      C: { verdict: "incorrect", reason: "6.5×10² N/m仍比700/0.029小很多。" },
      D: { verdict: "incorrect", reason: "1.0×10³ N/m不足以對應數百牛頓只伸長數十毫米。" },
      E: { verdict: "correct", reason: "700 N除以0.029 m約為2.4×10⁴ N/m。" }
    },
    takeaway: "圖上若用mm，代入N/m前一定先除以1000換成m。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-103-68": {
    encouragement: "圖15的箭頭已標出向上代表更僵硬，只要比較兩條曲線的高低與趨勢。",
    keyIdea: "視力正常曲線較高；台階落差愈大，僵硬程度愈低。",
    steps: ["同一台階落差下，正式圖的視力正常曲線位於視力模糊曲線上方，所以正常時較僵硬。", "兩種視力條件下，曲線都隨台階落差由小到大而下降。", "因此落差大時下肢較柔軟。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "圖中視力正常的僵硬程度較高，不是較柔軟。" },
      B: { verdict: "correct", reason: "正常視力曲線較高，表示下肢較僵硬。" },
      C: { verdict: "incorrect", reason: "兩條曲線有明顯高低差，視力狀態會影響僵硬程度。" },
      D: { verdict: "correct", reason: "落差變大時S下降，表示下肢較柔軟。" },
      E: { verdict: "incorrect", reason: "圖示趨勢是落差愈大愈不僵硬。" },
      F: { verdict: "incorrect", reason: "台階落差改變時曲線明顯下降，並非沒有影響。" }
    },
    takeaway: "先讀坐標箭頭的物理意義，再比較曲線高低與斜率。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-1": {
    encouragement: "能量的焦耳可以拆成「力乘距離」，再把牛頓換成基本單位。",
    keyIdea: "1 J＝1 N·m＝1 kg·m²/s²。",
    steps: ["牛頓N的基本單位是kg·m/s²。", "能量＝力×距離，所以再乘一個m。", "得到kg·m²/s²，正式選項C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A的單位沒有形成力乘距離，並非能量。" },
      B: { verdict: "incorrect", reason: "kg·m/s²是力的單位牛頓，不是能量。" },
      C: { verdict: "correct", reason: "kg·m²/s²正是焦耳的基本單位。" },
      D: { verdict: "incorrect", reason: "kg·m/s是動量的單位。" },
      E: { verdict: "incorrect", reason: "kg·m²/s少一個時間倒數，較接近角動量單位。" }
    },
    takeaway: "焦耳口訣：公斤乘公尺平方，再除以秒平方。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-2": {
    encouragement: "先把四個真實運動各自翻成圖形，再去找整組配對，不必逐列猜答案。",
    keyIdea: "靜止高度不變、等速上爬為直線上升、落果為向下彎曲、小鳥越飛越高為加速上升。",
    steps: ["凹洞（I）固定不動，對應水平線丙。", "松鼠（II）等速上爬，對應斜直線乙。", "果實（III）落下愈來愈快，對應向下彎的丁。", "小鳥（IV）越飛越高，正式圖以向上彎的甲表示；整組為甲IV、乙II、丙I、丁III。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A把甲配成靜止凹洞，與甲上升曲線不符。" },
      B: { verdict: "incorrect", reason: "B未把水平線丙配給高度固定的凹洞。" },
      C: { verdict: "incorrect", reason: "C把上升、下降或靜止的曲線配錯。" },
      D: { verdict: "incorrect", reason: "D未同時符合松鼠等速直線與果實加速下降。" },
      E: { verdict: "correct", reason: "E的甲IV、乙II、丙I、丁III逐一符合四種運動。" }
    },
    takeaway: "高度—時間圖的斜率是鉛直速度，曲線愈陡代表升降愈快。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-27": {
    encouragement: "靜止的兩物體互相施力時，第三定律保證兩支力箭頭等長、反向。",
    keyIdea: "所有交互作用力皆成對等大反向；另外還要判斷吸引或排斥方向。",
    steps: ["正電點電荷會因感應吸引中性金屬球，兩力等大反向，A圖正確。", "同號點電荷應互斥、異號應互吸，逐一檢查B、C箭頭。", "磁鐵也遵守第三定律，並依相對磁極判吸斥；正式E圖方向與等長皆正確。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "正電荷吸引感應極化的中性金屬球，兩箭頭相向且等長。" },
      B: { verdict: "incorrect", reason: "兩個正電荷應互相排斥，正式圖的箭頭方向不符。" },
      C: { verdict: "incorrect", reason: "正負電荷雖互吸，但正式圖箭頭沒有正確呈現等大反向。" },
      D: { verdict: "incorrect", reason: "圖示磁極組合的吸斥方向與箭頭不一致。" },
      E: { verdict: "correct", reason: "磁鐵交互作用方向正確，且兩力等大反向。" }
    },
    takeaway: "先判吸或斥，再用第三定律檢查箭頭是否等長反向。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-28": {
    encouragement: "觀測頻率變高就是藍移、代表接近；變低就是紅移、代表遠離。",
    keyIdea: "電磁波都卜勒效應：接近使頻率升高，遠離使頻率降低。",
    steps: ["正式表A由微波觀測成紅外線，頻率升高，推論接近正確。", "D由紫光觀測成紅外線，頻率降低，推論遠離正確。", "其餘列的頻率高低變化與接近、遠離推論不一致。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "紅外線頻率高於微波，為藍移，表示波源接近。" },
      B: { verdict: "incorrect", reason: "微波降到無線電波是紅移，應推論遠離而非接近。" },
      C: { verdict: "incorrect", reason: "紫光升到紫外線是藍移，應是接近而非遠離。" },
      D: { verdict: "correct", reason: "紫光降到紅外線是紅移，表示波源遠離。" },
      E: { verdict: "incorrect", reason: "頻率不變不能支持表中所寫的接近推論。" }
    },
    takeaway: "先排出觀測前後頻率高低，再判接近或遠離。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-41": {
    encouragement: "同樣粗細時能吊多重，關鍵看材料斷裂前能承受的最大應力。",
    keyIdea: "最大張力Fmax＝極限強度Tmax×截面積A；截面相同就比較極限強度。",
    steps: ["五種繩索的粗細相同，所以截面積A相同。", "長度不影響材料的極限強度。", "正式表3中碳纖維繩的極限強度最大，因此可懸吊重量最大。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "棉繩的極限強度較低，會較早斷裂。" },
      B: { verdict: "incorrect", reason: "尼龍繩雖有彈性，但表中極限強度不是最高。" },
      C: { verdict: "correct", reason: "碳纖維繩在表3的極限強度最大，同截面可承受最大張力。" },
      D: { verdict: "incorrect", reason: "鋼索強度高，但仍低於表中的碳纖維繩。" },
      E: { verdict: "incorrect", reason: "蜘蛛絲很有韌性，但表列極限強度不是五者最大。" }
    },
    takeaway: "能不能吊得重看極限強度；拉起來有多硬則看力常數，兩者不要混淆。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-43": {
    encouragement: "把極限強度想成每平方公尺能承受多少牛頓，用張力除以它就是所需面積。",
    keyIdea: "不斷裂條件為A≥F/Tmax。",
    steps: ["正式表3給蜘蛛絲極限強度約1.0×10⁹ Pa。", "最小面積A＝5000÷(1.0×10⁹)＝5×10⁻⁶ m²。", "與正式選項E相符。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "2×10⁻³ m²比依強度計算的最小面積大約數百倍。" },
      B: { verdict: "incorrect", reason: "2×10⁻⁴ m²仍過大，不是最小截面積。" },
      C: { verdict: "incorrect", reason: "5×10⁻⁴ m²的指數與5000/10⁹不符。" },
      D: { verdict: "incorrect", reason: "2×10⁵ m²方向與數量級都錯，面積應非常小。" },
      E: { verdict: "correct", reason: "5000 N除以10⁹ N/m²得到5×10⁻⁶ m²。" }
    },
    takeaway: "壓力或應力的Pa就是N/m²，所以力除以Pa會得到m²。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-104-44": {
    encouragement: "動能損失同時跟密度和路程成正比，用水中的已知值做比例最簡單。",
    keyIdea: "ΔE與ρL成正比。",
    steps: ["水中基準為ρ＝1000 kg/m³、L＝1 m、損失200 MeV。", "空氣中ρ＝1.2 kg/m³、L＝1000 m。", "比例＝(1.2×1000)/(1000×1)＝1.2。", "損失＝200×1.2＝240 MeV。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.24只計密度比，漏乘空氣中的1000 m路程。" },
      B: { verdict: "incorrect", reason: "2.4仍少算一百倍，不符合ρL比例。" },
      C: { verdict: "incorrect", reason: "24比正確值小十倍。" },
      D: { verdict: "correct", reason: "密度路程乘積是水中基準的1.2倍，所以損失240 MeV。" },
      E: { verdict: "incorrect", reason: "2400多算十倍。" }
    },
    takeaway: "比例題把密度與路程一起比較，單位相同後再相乘。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-105-4": {
    encouragement: "把兩條導線分開判磁場，再在每個象限相加，複雜圖就會變簡單。",
    keyIdea: "水平向右電流在上方產生穿出、下方穿入；鉛直向下電流在右方穿出、左方穿入。",
    steps: ["象限I位於水平線上方、鉛直線右方，兩磁場皆穿出。", "象限III位於水平線下方、鉛直線左方，兩磁場皆穿入。", "象限II與IV的兩磁場反向，依距離可能相消或由其中一方占優勢。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "象限II或IV仍可能有穿出紙面的區域，不只象限I。" },
      B: { verdict: "incorrect", reason: "除象限II外，象限IV也存在兩磁場可相消的位置。" },
      C: { verdict: "incorrect", reason: "象限III兩磁場同向穿入，不會有零磁場區域。" },
      D: { verdict: "correct", reason: "象限III中兩導線磁場都穿入紙面，所以合磁場處處穿入。" },
      E: { verdict: "incorrect", reason: "象限IV兩磁場反向，方向會隨離兩導線的距離改變。" }
    },
    takeaway: "兩導線題先做一張各自的方向表，再判同向相加或反向相減。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-105-6": {
    encouragement: "兩點位移永遠相反，表示它們永遠差半個週期；再配合時間圖讀週期。",
    keyIdea: "相距1.5 cm的兩點相位差為π，故距離是奇數個半波長；圖中週期T＝0.4 s。",
    steps: ["甲、乙位移和恆為零，兩點相位永遠相反。", "最簡單情況下1.5 cm＝λ/2，所以λ＝3.0 cm。", "正式時間圖相鄰同相狀態相隔0.4 s。", "波速v＝λ/T＝3.0/0.4＝7.5 cm/s。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "12 cm/s對應波長4.8 cm，1.5 cm不是其奇數半波長。" },
      B: { verdict: "correct", reason: "λ＝3.0 cm、T＝0.4 s時波速為7.5 cm/s。" },
      C: { verdict: "incorrect", reason: "5.0 cm/s對應λ＝2.0 cm，兩點不會恆為反相。" },
      D: { verdict: "incorrect", reason: "4.5 cm/s對應λ＝1.8 cm，不符合1.5 cm的反相條件。" },
      E: { verdict: "incorrect", reason: "3.0 cm/s對應λ＝1.2 cm，1.5 cm不是奇數個半波長。" }
    },
    takeaway: "位移永遠相反代表相位差固定為180°，不是偶然某一刻相反。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-105-41": {
    encouragement: "平均力就是動量改變除以碰撞時間，圖上讀前後速度即可。",
    keyIdea: "衝量FavgΔt＝mΔv。",
    steps: ["網球質量50 g＝0.050 kg。", "正式圖中速度約由+40 m/s變為−40 m/s，Δv量值約80 m/s。", "碰撞變速時間約0.20 s。", "Favg≈0.050×80÷0.20＝20 N。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.02 N比動量變化所需平均力小約千倍。" },
      B: { verdict: "incorrect", reason: "0.2 N無法在0.2秒內使速度反向80 m/s。" },
      C: { verdict: "incorrect", reason: "2 N仍少一個數量級。" },
      D: { verdict: "correct", reason: "mΔv/Δt約為20 N。" },
      E: { verdict: "incorrect", reason: "200 N比圖示變速時間算出的值大十倍。" }
    },
    takeaway: "速度反向時Δv要用末速減初速，量值是兩邊速率相加。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-105-42": {
    encouragement: "實驗圖是一條直線，代表每多一份撞擊能量，鐵樁就多深入固定距離。",
    keyIdea: "若阻力近似固定，克服阻力作功Fd與深入距離d成正比。",
    steps: ["鐵塊下落高度h₁−h₂決定碰撞前能量。", "正式圖顯示h₁−h₂與深入距離h₂−h₃成正比。", "碰撞條件固定時，進入岩層的能量與深入距離成正比，表示平均阻力近似不隨距離改變。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "若平均阻力與深入距離成正比，作功會與距離平方相關，圖不會是此直線關係。" },
      B: { verdict: "correct", reason: "固定平均阻力使作功Fd正比於深入距離，符合圖線。" },
      C: { verdict: "incorrect", reason: "圖中量測的是高度與距離，不能推出移動時間正比。" },
      D: { verdict: "incorrect", reason: "資料也不足以判定移動時間固定。" },
      E: { verdict: "incorrect", reason: "鐵塊與鐵樁黏在一起是非彈性碰撞，動能不守恆。" }
    },
    takeaway: "圖呈能量對距離直線時，可聯想到固定力作功W＝Fd。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-105-43": {
    encouragement: "把上一題直線關係和自由落體速度公式接起來，就能判斷曲線彎向。",
    keyIdea: "v²＝2g(h₁−h₂)，且圖14顯示h₁−h₂與d＝h₂−h₃成正比，所以v∝√d。",
    steps: ["鐵塊碰撞前速率平方與下落高度h₁−h₂成正比。", "碰撞質量固定，所以碰後進入岩層的初速v也與碰撞前速率成固定比例。", "圖14給h₁−h₂∝h₂−h₃，因此v∝√(h₂−h₃)。", "平方根圖形由原點上升但斜率逐漸變小，為C。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A是線性關係，但速度是距離的平方根。" },
      B: { verdict: "incorrect", reason: "B隨距離增加而下降，方向相反。" },
      C: { verdict: "correct", reason: "C為上升且向下凹的平方根曲線。" },
      D: { verdict: "incorrect", reason: "D向上凹，代表速度增長愈來愈快，較像平方關係。" },
      E: { verdict: "incorrect", reason: "E為負斜率直線，不符合速率為正且隨深入距離增加。" }
    },
    takeaway: "自由落體常出現v²與高度成正比，所以v圖通常是平方根形。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-106-29": {
    encouragement: "楞次定律只做一件事：感應電流總想阻止原本磁通量的改變。",
    keyIdea: "長直導線在下方導線環產生穿入紙面的磁場。",
    steps: ["I固定時磁通不變，環上沒有感應電流。", "I增大時穿入磁通增強，環要產生穿出磁場，所以i為逆時針。", "I減小時穿入磁通減弱，環要補回穿入磁場，所以i為順時針。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "I為定值時磁通不變，i＝0。" },
      B: { verdict: "correct", reason: "I增大時需用逆時針電流產生穿出磁場以抵抗增加。" },
      C: { verdict: "incorrect", reason: "順時針會產生穿入磁場，反而幫助原磁通增加。" },
      D: { verdict: "incorrect", reason: "I減小時逆時針會讓穿入磁場減得更快。" },
      E: { verdict: "correct", reason: "I減小時順時針產生穿入磁場，阻止磁通減少。" }
    },
    takeaway: "先判原磁場穿入或穿出，再判它是在增加還是減少。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-106-60": {
    encouragement: "加速度圖先累積成速度：正面積讓車加快，零維持速度，負面積讓車慢下來。",
    keyIdea: "0–20秒a＝0.5使速度升到10 m/s；20–60秒等速；60–85秒a＝−0.4恰使速度降到0。",
    steps: ["車由靜止出發，前20秒速度增加0.5×20＝10 m/s。", "20到60秒加速度為0，所以以10 m/s等速前進。", "60到85秒速度改變−0.4×25＝−10 m/s，85秒恰好停止。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0到20秒有正加速度，速度持續增加，不是等速。" },
      B: { verdict: "incorrect", reason: "20到60秒加速度為0但速度仍是10 m/s，不是靜止。" },
      C: { verdict: "correct", reason: "這40秒加速度為0，汽車以10 m/s等速前進。" },
      D: { verdict: "incorrect", reason: "負加速度只把速度降到0，期間尚未變成負速度。" },
      E: { verdict: "correct", reason: "25秒的減速量正好10 m/s，所以t＝85秒速度為0。" }
    },
    takeaway: "負加速度不等於負速度；要把加速度隨時間累積後才知道速度。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-106-61": {
    encouragement: "總距離可以分成加速、等速、減速三段，各段用平均速度乘時間。",
    keyIdea: "速度由0升到10、維持10、再降到0；距離是速度—時間圖面積。",
    steps: ["0到20秒：平均速度(0＋10)/2＝5 m/s，距離100 m。", "20到60秒：10 m/s等速40秒，距離400 m。", "60到85秒：平均速度(10＋0)/2＝5 m/s，距離125 m。", "總距離＝100＋400＋125＝625 m。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "三段距離相加正好625 m。" },
      B: { verdict: "incorrect", reason: "525 m漏算或少算前段100 m。" },
      C: { verdict: "incorrect", reason: "485 m沒有正確計入兩段三角形面積。" },
      D: { verdict: "incorrect", reason: "300 m低估40秒等速段本身就有400 m。" },
      E: { verdict: "incorrect", reason: "100 m只等於最初加速段距離。" }
    },
    takeaway: "加速度已知時先求各段速度，距離再用平均速度或v—t面積。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-16": {
    encouragement: "球愈快，空氣阻力愈大，所以加速度會逐漸變小，最後速率趨近固定值。",
    keyIdea: "落下時mg−阻力＝ma；阻力隨速率增加，終端速率時合力為0。",
    steps: ["剛釋放時速率0、阻力很小，球以接近g的加速度加速。", "速率增加後阻力增大，淨加速度逐漸減少。", "最後阻力等於重力，速率趨近一條水平線而不再增加。", "正式圖E呈現先快增、後漸平的形狀。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "直線增加代表加速度固定，忽略了阻力會隨速率增大。" },
      B: { verdict: "incorrect", reason: "一開始就維持固定速率，不符合由靜止釋放。" },
      C: { verdict: "incorrect", reason: "向上彎表示加速度愈來愈大，與阻力增加相反。" },
      D: { verdict: "incorrect", reason: "速率不會由大值開始再下降，題目是由靜止落下。" },
      E: { verdict: "correct", reason: "速率由0上升且斜率逐漸變小，最後趨近終端速率。" }
    },
    takeaway: "速率—時間圖的斜率是加速度；終端速率對應斜率趨近0。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-17": {
    encouragement: "每個線圈都用右手定則判一次，正式圖中兩個磁場在中點同向。",
    keyIdea: "圓形電流在線圈軸上的磁場方向由右手定則決定，磁場可疊加。",
    steps: ["依正式圖左線圈電流方向，以右手四指沿電流彎曲，大拇指在中點指向東。", "右線圈同樣使用右手定則，在中點也產生向東磁場。", "兩磁場相加，所以合磁場向東。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "兩線圈在中點的磁場都指向東，合磁場向東。" },
      B: { verdict: "incorrect", reason: "右手定則判得不是向西。" },
      C: { verdict: "incorrect", reason: "線圈軸線是東西向，軸上磁場不向北。" },
      D: { verdict: "incorrect", reason: "中點磁場沿線圈共同軸線，不向上。" },
      E: { verdict: "incorrect", reason: "正式電流方向使兩磁場同向，不是相反抵消。" }
    },
    takeaway: "相對線圈不要憑磁極外觀猜，逐圈用右手定則最可靠。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-29": {
    encouragement: "主迴路通穩定直流後，磁針會持續偏轉；次迴路只在電流剛改變時感應。",
    keyIdea: "穩定電流持續產生磁場，但感應電流只在磁通改變時出現。",
    steps: ["接通甲迴路後，穩定電流在磁針處產生向東磁場，與地磁合成使N極停在北偏東。", "接通瞬間甲電流由0增加，穿過乙迴路的磁通改變，檢流計短暫偏轉。", "甲電流穩定後磁通不再改變，乙迴路感應電流回到0。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲迴路穩定電流仍有磁場，磁針不會回復正北。" },
      B: { verdict: "correct", reason: "甲磁場向東與地磁向北合成，磁針最後維持北偏東。" },
      C: { verdict: "correct", reason: "乙迴路只在接通瞬間有感應電流，之後指針回零。" },
      D: { verdict: "incorrect", reason: "感應電流不會在甲電流穩定後持續存在。" },
      E: { verdict: "incorrect", reason: "磁針可持續偏轉，但檢流計電流不會維持穩定。" }
    },
    takeaway: "磁效應看有沒有電流；電磁感應則看磁通量有沒有改變。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-30": {
    encouragement: "乙迴路被拉遠時磁通持續減少，所以在移動期間會一直有感應電流。",
    keyIdea: "甲穩定電流使磁針維持北偏東；乙遠離時依楞次定律產生由北向南的檢流計電流。",
    steps: ["甲迴路電流維持穩定，所以磁針仍受向東磁場影響，保持北偏東。", "乙迴路向東遠離甲，穿過乙的磁通量持續減少。", "依楞次定律，乙產生電流維持原磁通方向；由正式接線判得流經G由北向南。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲電流仍在，磁針不會回正北。" },
      B: { verdict: "correct", reason: "磁針維持北偏東，且乙移動期間磁通持續改變，所以G持續有電流。" },
      C: { verdict: "incorrect", reason: "乙正在遠離，磁通改變，不會一直顯示零電流。" },
      D: { verdict: "incorrect", reason: "由楞次定律與正式線路方向，G電流不是南向北。" },
      E: { verdict: "correct", reason: "為阻止原磁通減少，感應電流經G由北向南。" }
    },
    takeaway: "線圈持續移動就可能持續感應；方向用「阻止磁通改變」判斷。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-56": {
    encouragement: "手機的加速度感測器在自由落體時會像失重一樣讀到接近零，這是辨認關鍵。",
    keyIdea: "物體被釋放且彈簧尚未拉緊時作自由落體，加速度計的固有加速度讀值近0。",
    steps: ["甲、乙階段物體仍被手或裝置支撐，感測器讀值約為重力加速度。", "正式圖在丙時刻附近出現接近0的平坦區，表示物體已放手且彈簧尚未明顯施力。", "丁、戊附近彈簧開始拉伸並振動，讀值劇烈變化，不是純自由落體。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "甲時物體仍受支撐，感測器不是失重讀值。" },
      B: { verdict: "incorrect", reason: "乙接近釋放轉換點，尚不是完整穩定的自由落體區段。" },
      C: { verdict: "correct", reason: "丙前後讀值接近0，對應放手後、彈簧作用前的自由落體。" },
      D: { verdict: "incorrect", reason: "丁附近彈簧已明顯施力，讀值快速振盪。" },
      E: { verdict: "incorrect", reason: "戊時系統已受彈簧作用並逐漸回到受力狀態。" }
    },
    takeaway: "加速度計在桌上讀到約g，在自由落體反而讀到接近0。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-57": {
    encouragement: "雙黑洞愈靠近繞得愈快，重力波就會愈密、愈強，最後合併後迅速衰減。",
    keyIdea: "黑洞併合訊號是頻率與振幅同時增加的chirp，合併後出現短暫衰減振鈴。",
    steps: ["旋近階段軌道週期縮短，所以波峰間隔愈來愈小。", "能量輻射增強，使振幅逐漸增大。", "合併後新黑洞回復穩定，訊號快速衰減。", "正式圖A呈現先增頻增幅、再突然衰減的形狀。"],
    optionAnalysis: {
      A: { verdict: "correct", reason: "A同時呈現愈來愈密、振幅增大及合併後衰減。" },
      B: { verdict: "incorrect", reason: "B的振幅與頻率演化沒有符合旋近時同步增強。" },
      C: { verdict: "incorrect", reason: "C只在中間突然出現大脈衝，缺少逐步增頻的旋近訊號。" },
      D: { verdict: "incorrect", reason: "D的強訊號時序與合併後衰減方向不符。" },
      E: { verdict: "incorrect", reason: "E呈現相反的疏密或振幅演化，不是雙黑洞chirp。" }
    },
    takeaway: "看到雙星併合波形，要找「愈來愈密、愈來愈高、最後衰減」。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-107-59": {
    encouragement: "圖的距離單位是百萬光年，讀到1300後還要再乘一百萬。",
    keyIdea: "重力波速率近似光速；走多少光年就約需多少年。",
    steps: ["由正式圖在z≈0.1讀得距離約1300百萬光年。", "1300百萬光年＝1.3×10⁹光年。", "重力波以光速傳播，所需時間約1.3×10⁹年。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "1300漏掉橫軸的百萬光年單位。" },
      B: { verdict: "incorrect", reason: "2000年與星系的十億光年距離不相稱。" },
      C: { verdict: "incorrect", reason: "2.0×10⁶年仍比圖讀距離小數百倍。" },
      D: { verdict: "incorrect", reason: "1.3×10⁸年少一個數量級。" },
      E: { verdict: "correct", reason: "1300百萬光年以光速傳播約需1.3×10⁹年。" }
    },
    takeaway: "光年本來就是光一年走的距離，換時間時數字相同。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-3": {
    encouragement: "行星速度一定沿軌道切線，而且離焦點上的太陽愈近，速率愈快。",
    keyIdea: "橢圓軌道近日點快、遠日點慢，速度方向處處與軌道相切。",
    steps: ["太陽位於焦點F，因此左側P比右側Q更靠近太陽。", "依能量守恆，P點速率大於Q點。", "行星速度要沿橢圓切線；正式圖B同時畫對方向與長短。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "A雖畫出切線方向，但P、Q箭頭等長，忽略近日點較快。" },
      B: { verdict: "correct", reason: "B中P、Q速度皆切向，且靠近焦點的P箭頭較長。" },
      C: { verdict: "incorrect", reason: "C的P點速度方向或箭頭長短與軌道運動不符。" },
      D: { verdict: "incorrect", reason: "D的兩箭頭等長，且P處切線方向也不正確。" },
      E: { verdict: "incorrect", reason: "E所標P、Q的速度方向與該位置的橢圓切線未同時吻合。" }
    },
    takeaway: "軌道圖先檢查箭頭是否切線，再比較離焦點遠近決定速率。",
    reviewStatus: "approved", reviewerRole: "physics"
  },
  "學-109-4": {
    encouragement: "每個選項只需算左端電荷受到另外兩顆的力，再注意同號斥、異號吸。",
    keyIdea: "庫侖力量值k|q₁q₂|/r²；距離2R會讓力除以4。",
    steps: ["把kQ²/R²當成1個力單位，分別計算中間電荷與右端電荷的貢獻。", "B中左端+2Q受中間+Q排斥為2單位，受右端+2Q排斥為(4/4)＝1單位。", "兩力同向向左，合力3單位，大於其他選項。"],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "中間排斥2單位、右端異號吸引1單位，方向相反，合力僅1單位。" },
      B: { verdict: "correct", reason: "兩個同號排斥力同向相加為2＋1＝3單位，最大。" },
      C: { verdict: "incorrect", reason: "兩個吸引力雖同向，但量值為2＋0.5＝2.5單位，小於B。" },
      D: { verdict: "incorrect", reason: "近處排斥2與遠處吸引0.5反向，合力1.5單位。" },
      E: { verdict: "incorrect", reason: "近處吸引2與遠處排斥0.5反向，合力也只有1.5單位。" }
    },
    takeaway: "庫侖力比較要同時看電量乘積、距離平方與方向。",
    reviewStatus: "approved", reviewerRole: "physics"
  }
});
