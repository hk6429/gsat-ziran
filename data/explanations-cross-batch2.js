(window.LEARNING_DATA.explanations ||= {});
Object.assign(window.LEARNING_DATA.explanations, {
  "學-103-38": {
    encouragement: "這題把雷雨、細菌與肥料放在一起，其實只要逐項檢查反應條件和化學式，就能穩穩判斷。",
    keyIdea: "雷電可使氮、氧反應，硝化細菌會氧化亞硝酸根；硫酸銨須符合離子電荷平衡。",
    steps: [
      "雷電提供高能量，使穩定的氮氣與氧氣生成一氧化氮。",
      "硝化作用可把亞硝酸根NO₂⁻再氧化為硝酸根NO₃⁻。",
      "硫酸根帶2個負電，需搭配2個帶1個正電的銨根，所以硫酸銨為(NH₄)₂SO₄。",
      "工業合成氨需要高溫、高壓與觸媒，並非實驗室常溫常壓即可完成。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "雷電能提供足夠能量，讓N₂與O₂反應生成NO，反應可寫成N₂＋O₂→2NO。" },
      B: { verdict: "correct", reason: "硝化細菌可進行氧化作用，把NO₂⁻轉為氧化數更高的NO₃⁻。" },
      C: { verdict: "incorrect", reason: "硫酸根SO₄²⁻需配上2個NH₄⁺才電中性，正確化學式是(NH₄)₂SO₄。" },
      D: { verdict: "correct", reason: "植物吸收銨根與硝酸根後，可合成胺基酸、蛋白質及核酸等含氮物質。" },
      E: { verdict: "incorrect", reason: "氮氣合成氨需高溫、高壓與觸媒；氨可製尿素，不是題目所說的尿酸。" }
    },
    takeaway: "寫離子化合物先平衡總電荷；判斷反應也要留意是否需要特殊溫度、壓力或觸媒。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-104-37": {
    encouragement: "想像陽光照不到的深海：水冷、沒有光合作用，而且冷水通常密度較大，答案就會浮現。",
    keyIdea: "六、七百公尺深海水溫低、葉綠素少、密度較大，鹽類比例不會突然大幅改變。",
    steps: [
      "太陽主要加熱海洋表層，深度增加後水溫通常下降。",
      "深處光線不足，植物性浮游生物難以行光合作用，所以葉綠素濃度較低。",
      "低溫使海水密度增加，深層海水通常比表面海水密度大。",
      "深水仍是海水，氯化鈉在鹽類中的比例不會因深度而大幅增加。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "陽光加熱集中在海表，六、七百公尺深處獲得的太陽能少，因此水溫較低。" },
      B: { verdict: "incorrect", reason: "深度改變不會使海鹽組成中的氯化鈉比例突然大幅上升。" },
      C: { verdict: "incorrect", reason: "深處沒有光合作用補充氧，生物呼吸與分解還會耗氧，氧含量不一定較表層高。" },
      D: { verdict: "correct", reason: "深海光線微弱，能行光合作用的浮游植物較少，所以葉綠素濃度較低。" },
      E: { verdict: "correct", reason: "深層海水溫度低；其他條件相近時，較冷的海水密度較大。" }
    },
    takeaway: "比較表層與深層海水，可依序想到光照、溫度、光合作用與密度。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-106-39": {
    encouragement: "能量流圖看起來複雜，但只盯著地表這一個框，套用「流入＝流出」就能算出X。",
    keyIdea: "地表維持平均恆溫時，吸收的太陽輻射與大氣回射總和，等於直接向太空輻射與傳給大氣的能量。",
    steps: [
      "地表流入能量為吸收太陽輻射168，加上大氣回射324，共492 W/m²。",
      "地表直接向太空輻射40 W/m²。",
      "地表平均恆溫，能量不能持續累積，因此492＝40＋X。",
      "解得X＝452 W/m²。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由地表能量守恆，X＝168＋324－40＝452 W/m²。" },
      B: { verdict: "incorrect", reason: "492是地表吸收的總能量，尚未扣除直接向太空輻射的40 W/m²。" },
      C: { verdict: "incorrect", reason: "324是大氣回射給地表的能量，不是地表傳給大氣的X。" },
      D: { verdict: "incorrect", reason: "235是整個地球系統吸收太陽輻射的平均功率，不等於X。" },
      E: { verdict: "incorrect", reason: "168只是地表直接吸收的太陽輻射，還漏掉大氣回射與地表向太空輻射。" }
    },
    takeaway: "能量流圖先圈定研究對象，再把箭頭分成流入與流出，最不容易漏算。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-107-40": {
    encouragement: "不用把黑色素想成神奇燃料；抓住題意的重點：它讓放射線照射時的電子傳遞更活躍。",
    keyIdea: "某些含黑色素真菌在游離輻射下可提升電子傳遞活性，但不會改變每個NADH本身所能提供的能量。",
    steps: [
      "題組指出含黑色素的新型隱球菌受到放射線照射後，電子傳遞活動增強。",
      "電子傳遞速率提高，不代表單一NADH含有的化學能增加。",
      "真菌接收的是游離輻射，不是先吸收核反應產生的熱。",
      "因此可肯定黑色素介入與電子傳遞活性增加，但不能直接等同植物的光合作用。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "依題組實驗，受放射線照射的含黑色素新型隱球菌可提高電子傳遞鏈速率。" },
      B: { verdict: "incorrect", reason: "放射線可能改變電子傳遞速率，但不會增加每一個NADH分子原本可釋出的總能量。" },
      C: { verdict: "incorrect", reason: "隱球菌利用的是放射線造成的作用，不能說成先吸收核反應熱能再轉為ATP。" },
      D: { verdict: "incorrect", reason: "葉綠素參與完整的光合作用，把光能轉存於有機物；題意不足以把黑色素與它視為完全類似。" },
      E: { verdict: "correct", reason: "題組證據支持某些真菌因黑色素介入，在γ射線照射時電子傳遞活性增加。" }
    },
    takeaway: "實驗證據支持到哪裡就推論到哪裡；速率變快，不等於每個分子的能量變多。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-108-37": {
    encouragement: "路徑圖每隔6小時留一點，所以相鄰點越遠代表越快；沿時間順序看疏密即可選曲線。",
    keyIdea: "固定時間間隔下，路徑點距越大，平均速率越大；圖中颱風先減速後加速。",
    steps: [
      "每兩個相鄰位置點相隔相同的6小時，因此可直接用點距比較速率。",
      "由8月6日向臺灣移動時，相鄰點距逐漸縮小，表示速率下降。",
      "接近並通過臺灣後，相鄰點距又逐漸拉大，表示速率回升。",
      "所以速率對時間應呈先降後升的U形趨勢。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "路徑點間距明顯改變，颱風速率不是全程固定。" },
      B: { verdict: "incorrect", reason: "圖中前段點距縮小，代表一開始不是持續加速。" },
      C: { verdict: "incorrect", reason: "後段點距重新拉大，速率不是一路下降。" },
      D: { verdict: "correct", reason: "相鄰點距先縮小再增大，對應速率先下降再上升的U形曲線。" },
      E: { verdict: "incorrect", reason: "此曲線表示先加速後減速，和路徑點距的先縮小後增大相反。" }
    },
    takeaway: "等時間取樣的運動圖，不必先算數字：看點距疏密就能判斷快慢變化。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-108-38": {
    encouragement: "颱風風速不是只看離中心多遠；先找平靜的風眼，再看等壓線哪裡最密。",
    keyIdea: "颱風眼附近風弱；眼牆等壓線最密、氣壓梯度最大、風速最強，外圍風速較小。",
    steps: [
      "甲位於颱風中心的風眼，風速通常很小但不必恰為零。",
      "乙靠近眼牆且等壓線最密，單位距離氣壓變化最大，風速最強。",
      "丙離中心較遠，等壓線較疏，風速小於乙。",
      "符合「甲弱、乙最強、丙次之」且數值合理的是3、35、12 m/s。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "甲在風眼約3 m/s，乙近眼牆可達35 m/s，丙在外圍約12 m/s，順序符合圖示。" },
      B: { verdict: "incorrect", reason: "此組數值讓風速由甲到丙一路增加，未反映乙附近等壓線最密。" },
      C: { verdict: "incorrect", reason: "乙、丙等壓線疏密不同，兩地不應同為45 m/s，且丙外圍風速不合理地過大。" },
      D: { verdict: "incorrect", reason: "甲在颱風眼，不可能比眼牆附近的乙吹得更強。" },
      E: { verdict: "incorrect", reason: "丙的等壓線比乙疏，風速應小於乙，不會是40 m/s。" }
    },
    takeaway: "等壓線越密，氣壓梯度通常越大、風越強；但颱風正中心的風眼反而較平靜。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-109-38": {
    encouragement: "圖上的100 μV像一把尺；先比波形上下高度，再處理μV與mV，不必被密密麻麻的波嚇到。",
    keyIdea: "腦電波振幅看上下起伏大小；電壓單位是伏特，1 mV等於1000 μV。",
    steps: [
      "電壓是單位電荷的電位能差，單位為伏特，不是焦耳或安培。",
      "圖中深睡δ波上下起伏最大，清醒活動β波起伏最小。",
      "睏倦入眠θ波的上下高度明顯大於清醒休息α波。",
      "圖示尺度為100 μV，清醒活動的起伏遠小於1 mV。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "電壓是每單位電荷的電位能差，並不是電能本身；焦耳是能量單位。" },
      B: { verdict: "incorrect", reason: "電壓單位是伏特；安培是電流單位，電壓也不是國際單位制的基本量。" },
      C: { verdict: "incorrect", reason: "圖中深睡δ波的上下起伏最大，不是最微弱。" },
      D: { verdict: "incorrect", reason: "清醒活動β波振幅很小，而且1 mV＝1000 μV，遠大於圖示振幅。" },
      E: { verdict: "correct", reason: "依相同比例圖形比較，睏倦入眠θ波的上下起伏大於清醒休息α波。" }
    },
    takeaway: "振幅看垂直高度，頻率看單位時間內幾個週期；μV換mV要記得相差1000倍。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-109-39": {
    encouragement: "在圖上框出1秒，數一數完成幾個波，就能直接估算頻率。",
    keyIdea: "頻率是每秒週期數，f＝1/T；睏倦入眠的θ波在1秒內超過5個週期。",
    steps: [
      "波速關係為v＝fλ，所以頻率f＝v/λ。",
      "在圖示1秒尺度內，θ波完成約7個週期，頻率約7 Hz。",
      "深睡δ波週期較長、頻率最低，但一個週期仍明顯不到2秒。",
      "清醒β波雖頻率較高，仍只是每秒數十次的量級，不會超過1000 Hz。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "正確關係是v＝fλ，因此頻率等於波速除以波長，不是兩者乘積。" },
      B: { verdict: "incorrect", reason: "深睡δ波在相同時間內週期數最少，所以頻率最低。" },
      C: { verdict: "incorrect", reason: "由1秒尺度可見δ波在約1秒內已有數個起伏，週期不會大於2秒。" },
      D: { verdict: "correct", reason: "θ波在1秒內約完成7個週期，因此頻率約7 Hz，確實大於5 Hz。" },
      E: { verdict: "incorrect", reason: "β波頻率雖最高，但由圖只能估到每秒數十次，遠不到1000 Hz。" }
    },
    takeaway: "直接在時間尺內數週期：1秒有幾個完整週期，頻率就約為幾Hz。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-38": {
    encouragement: "把人體當成會調節散熱的系統：下視丘像恆溫控制器，熱時幫忙多散熱、少產熱。",
    keyIdea: "下視丘調控體溫；高溫時增加皮膚血流與散熱，並避免提高代謝產熱。",
    steps: [
      "體溫恆定表示身體產熱與向環境散失的淨熱量維持平衡。",
      "人體可調整題目中的ΔQ，也就是身體離開的淨熱量。",
      "體溫調節中樞位於下視丘。",
      "環境高溫時，皮膚血管擴張以增加散熱，甲狀腺素也不會上升來增加產熱。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "身體可藉皮膚血流、流汗等方式調整淨散熱量ΔQ，以維持體溫。" },
      B: { verdict: "correct", reason: "下視丘能偵測並整合體溫訊息，是人體重要的體溫調節中樞。" },
      C: { verdict: "incorrect", reason: "高溫時通常增加皮膚血流，讓熱較容易由體內傳到體表散出，不是減少血流。" },
      D: { verdict: "incorrect", reason: "甲狀腺素會提高代謝產熱；高溫時不會調高它來「減緩」產熱。" },
      E: { verdict: "incorrect", reason: "靜止休息且體溫穩定時，單位時間散出的淨熱量可反映基礎代謝率，並非不包含。" }
    },
    takeaway: "熱環境的調節方向是「多散熱、少產熱」；下視丘負責統整這些反應。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-110-39": {
    encouragement: "題目已給每公斤1瓦特，先算全身代謝功率，再挑單位是瓦特且符號正確的式子。",
    keyIdea: "50公斤學生的基礎代謝率為50 W；題目定義代謝率為−ΔU/Δt。",
    steps: [
      "每公斤基礎代謝率約1.0 W，質量50 kg，所以全身代謝率為50 W。",
      "題幹將−ΔU/Δt定義為代謝率，負號表示體內儲存的化學能被消耗。",
      "功率的單位是瓦特，也就是焦耳/秒。",
      "因此應寫成|−ΔU/Δt|＝50 W。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "ΔW/Δt是對外作功率；學生靜止躺著時，50 W指的是代謝率，不是對外作功率。" },
      B: { verdict: "incorrect", reason: "ΔW是能量，單位應為焦耳；少了除以時間，不能用瓦特表示。" },
      C: { verdict: "correct", reason: "依題幹定義，代謝率為−ΔU/Δt；50 kg×1.0 W/kg＝50 W。" },
      D: { verdict: "incorrect", reason: "−ΔU是能量變化，未除以時間時不能等於50瓦特。" },
      E: { verdict: "incorrect", reason: "ΔQ本身是熱量，單位應為焦耳；若表示功率必須寫成ΔQ/Δt。" }
    },
    takeaway: "看到瓦特就檢查是否為「能量除以時間」；只有能量變化量不能直接用瓦特。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-40": {
    encouragement: "這題只是兩次單位轉換：先把瓦特乘時間變成焦耳，再用每公克16千焦耳換成葡萄糖質量。",
    keyIdea: "消耗能量E＝Pt；葡萄糖每公克釋放16 kJ，所以質量等於總能量除以16 kJ/g。",
    steps: [
      "代謝功率為50 W＝50 J/s，2小時＝7200秒。",
      "總消耗能量為50×7200＝360000 J＝360 kJ。",
      "每公克葡萄糖釋放16 kJ。",
      "消耗質量＝360÷16＝22.5公克。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "0.450公克只含7.2 kJ，遠小於兩小時以50 W消耗的360 kJ。" },
      B: { verdict: "correct", reason: "50 J/s×7200 s＝360 kJ，再除以16 kJ/g，得到22.5 g。" },
      C: { verdict: "incorrect", reason: "62.5公克是把1000 kJ除以16 kJ/g所得，並非本題的360 kJ。" },
      D: { verdict: "incorrect", reason: "360是總能量的千焦耳數，不是葡萄糖的公克數。" },
      E: { verdict: "incorrect", reason: "450公克葡萄糖可釋放7200 kJ，等於把秒與小時的換算處理錯誤。" }
    },
    takeaway: "瓦特乘秒得到焦耳；算完能量後再除以每公克可提供的能量。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-110-54": {
    encouragement: "科學推論要保留可能性：觀測到PH₃是線索，但不能立刻宣布有生命，也不能排除未知反應。",
    keyIdea: "既有資料支持生命或未知化學反應兩種可能；PH₃含低氧化數的磷，可氧化成磷的含氧酸。",
    steps: [
      "地球大氣中的PH₃來自微生物，因此金星PH₃可成為「可能有微生物」的線索。",
      "但這只是可能性，不等於證明；金星也可能存在尚未知的非生物化學反應。",
      "PH₃容易被氧化，這項化學性質不會因在地球就自動消失。",
      "磷被氧化後可與氧、氫形成磷的含氧酸。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "由地球PH₃與微生物的關聯，可合理提出金星可能存在微生物，但仍需更多證據。" },
      B: { verdict: "incorrect", reason: "題目已說PH₃容易氧化，到了地球也不會因此變成完全不會氧化。" },
      C: { verdict: "incorrect", reason: "目前已知來源有限，不代表能斷言所有無生命星球都絕不可能由未知反應產生PH₃。" },
      D: { verdict: "correct", reason: "PH₃中的磷可被氧化到較高氧化數，產生如磷酸等磷的含氧酸。" },
      E: { verdict: "correct", reason: "已知天文、地質機制不能解釋時，仍可提出存在未知化學反應的可能性。" }
    },
    takeaway: "「目前不知道」不等於「一定沒有」；好的科學結論會區分線索、可能性與證明。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-114-41": {
    encouragement: "先讀圖例：越黑代表葉綠素越高；再把赤道信風、湧升流與中緯度洋流接起來。",
    keyIdea: "反聖嬰年信風增強，使赤道湧升與高葉綠素水域向西延伸；中緯度分布也受表面洋流控制。",
    steps: [
      "葉綠素濃度反映浮游植物多寡，而浮游植物受洋流帶來的營養鹽影響。",
      "反聖嬰年時太平洋東風信風增強，不是赤道西風變弱。",
      "較強信風加強赤道湧升與向西流動，使高葉綠素帶向西延伸，因此甲為反聖嬰年。",
      "中緯度的營養鹽與生產力分布，也會受到北太平洋表面洋流系統影響。"
    ],
    optionAnalysis: {
      A: { verdict: "correct", reason: "洋流會搬運營養鹽與浮游植物，因此流速和流向能影響葉綠素濃度分布。" },
      B: { verdict: "incorrect", reason: "反聖嬰年主要是赤道東風信風增強；乙的葉綠素較低也不能歸因於「西風較弱」。" },
      C: { verdict: "correct", reason: "反聖嬰年信風增強，使赤道湧升與高葉綠素水域向西延伸，符合甲圖。" },
      D: { verdict: "correct", reason: "中緯度水團與營養鹽會受北太平洋表面環流搬運，因而影響高葉綠素區域。" },
      E: { verdict: "incorrect", reason: "澳洲東岸是否高葉綠素不能只用低水溫解釋；關鍵通常是營養鹽供應與海水運動。" }
    },
    takeaway: "海水冷不等於葉綠素一定高；浮游植物能否繁盛，還要看洋流與營養鹽。",
    reviewStatus: "approved",
    reviewerRole: "earth"
  },
  "學-114-42": {
    encouragement: "把關係畫成一圈：鯨魚供鐵給矽藻，矽藻餵磷蝦，磷蝦再餵鯨魚；少一環會一路連鎖下降。",
    keyIdea: "鯨魚減少會使鐵離子供應下降，造成矽藻、磷蝦與整體食物網衰退，形成惡性循環。",
    steps: [
      "鯨魚排泄物提供矽藻生長所需的鐵離子。",
      "鯨魚接近局部滅絕後，鐵供應下降，使矽藻數量減少。",
      "磷蝦以矽藻為食，因此食物減少後磷蝦也會下降。",
      "鯨魚再因磷蝦減少而更缺食物，長期可能讓生態系崩解。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "題目圖例中灰階值越小代表葉綠素越高；矽藻下降時不會使灰階值變小。" },
      B: { verdict: "incorrect", reason: "鯨魚排泄物減少會降低鐵離子供應，矽藻缺乏必要營養，數量應下降。" },
      C: { verdict: "correct", reason: "矽藻是磷蝦的食物；矽藻減少後，磷蝦會因食物不足而下降。" },
      D: { verdict: "incorrect", reason: "生產者與消費者都可能下降，生態系總生物質量不會因此上升。" },
      E: { verdict: "correct", reason: "鯨魚、矽藻與磷蝦形成互相支持的循環，長期失衡可能使整個系統崩解。" }
    },
    takeaway: "食物網不只是誰吃誰；動物提供的養分也可能回頭支撐生產者。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  },
  "學-114-52": {
    encouragement: "這題可分兩條線：先數自由基的價電子，再看水變成氫、氧時氧化數如何改變。",
    keyIdea: "OH自由基共有7個價電子；水裂解需要吸收能量，且同時發生氫的還原與氧的氧化。",
    steps: [
      "氧有6個價電子、氫有1個，OH自由基合計7個價電子。",
      "二氧化鈦是難溶於水的固體，可作為光觸媒。",
      "水裂解需要光能驅動，生成較高化學能的氫氣與氧氣，所以是吸熱反應。",
      "水中氫由＋1變0、氧由−2變0，同時有還原與氧化。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "OH自由基的價電子總數為氧的6個加氫的1個，共7個，並有未成對電子。" },
      B: { verdict: "incorrect", reason: "二氧化鈦通常是難溶於水的固體，不是可溶性化合物。" },
      C: { verdict: "correct", reason: "把穩定的水分解成氫氣與氧氣需外界供給光能，屬吸熱反應。" },
      D: { verdict: "incorrect", reason: "氫氧自由基使有機物被氧化成CO₂，本身扮演強氧化劑，不是還原劑。" },
      E: { verdict: "correct", reason: "氫由＋1還原成0，氧由−2氧化成0，因此水裂解是氧化還原反應。" }
    },
    takeaway: "自由基不一定滿八隅體；判斷氧化還原則直接比較反應前後氧化數。",
    reviewStatus: "approved",
    reviewerRole: "chemistry"
  },
  "學-115-52": {
    encouragement: "數字雖大，照著「體積變質量、位能乘效率、焦耳換度數」三段算，就不會迷路。",
    keyIdea: "海水重力位能為ρVgh；全年約730次漲潮，發電量約5×10⁶度，數量級為10⁷度。",
    steps: [
      "每次海水質量m＝ρV＝10³×2.5×10⁶＝2.5×10⁹ kg。",
      "每次增加位能mgh＝2.5×10⁹×10×4＝1.0×10¹¹ J。",
      "轉成電能為25%×10¹¹＝2.5×10¹⁰ J，約6.9×10³度。",
      "每天2次、每年約730次，全年約5.1×10⁶度，數量級可寫成10⁷度。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "ρgh是單位體積海水的位能變化；全部海水還要乘體積V，應為ρVgh。" },
      B: { verdict: "incorrect", reason: "每次可轉換的重力位能約10¹¹ J，是千億焦耳量級，不是百萬焦耳。" },
      C: { verdict: "incorrect", reason: "每天漲潮2次，所以一年約2×365＝730次，不是365次。" },
      D: { verdict: "correct", reason: "全年約5.1×10⁶度，取數量級與題目近似精度，可表示為約10⁷度。" },
      E: { verdict: "correct", reason: "潮汐源自天體萬有引力，發電機則以電磁感應把機械能轉為電能。" }
    },
    takeaway: "總位能一定要有總質量m＝ρV；「度」是kWh，換算時再用1度＝3.6×10⁶ J。",
    reviewStatus: "approved",
    reviewerRole: "physics"
  },
  "學-98-58": {
    encouragement: "全球暖化的方向很一致：怕熱的物種受壓力，季節性活動延後或提前，喜冷物種通常往更冷處移動。",
    keyIdea: "氣候暖化會改變生物物候與分布；冬季變暖可使紫斑蝶向南越冬遷徙時間延後。",
    steps: [
      "溫度升高會改變開花、遷徙等季節性生命活動。",
      "冬季較晚變冷時，紫斑蝶不必那麼早往南方越冬，因此遷徙時間可能延後。",
      "珊瑚、櫻花鉤吻鮭等對高溫敏感的生物，暖化下通常面臨壓力而非增加。",
      "喜冷的高山生物會往更高、更冷處移動，不會往較暖的低海拔。"
    ],
    optionAnalysis: {
      A: { verdict: "incorrect", reason: "氣溫偏暖通常使許多春季植物提早達到開花所需條件，不是必然延後開花。" },
      B: { verdict: "incorrect", reason: "鹿角珊瑚對高溫敏感，海水過暖會造成白化與死亡，不會因此更加繁盛。" },
      C: { verdict: "correct", reason: "秋冬降溫較晚時，紫斑蝶可延後由北往南前往較暖地區越冬的時間。" },
      D: { verdict: "incorrect", reason: "櫻花鉤吻鮭喜冷水，水溫升高會縮小適生環境，數量不會因此增加。" },
      E: { verdict: "incorrect", reason: "楚南氏山椒魚偏好冷涼高山環境，暖化時較可能往更高海拔移動，而不是往低處。" }
    },
    takeaway: "判斷暖化影響先問物種喜冷還是喜熱，再思考牠會往哪裡移、活動時間如何改變。",
    reviewStatus: "approved",
    reviewerRole: "biology"
  }
});
