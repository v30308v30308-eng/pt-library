// ════════════════════════════════════════════════════
// 學派簡介
// DNS  – Dynamic Neuromuscular Stabilization（Pavel Kolar）
// KC   – Kinetic Control（Mark Comerford & Sarah Mottram）
// Mulligan – Mulligan Concept MWM（Brian Mulligan）
// FRC  – Functional Range Conditioning（Andreo Spina）
// McKenzie – MDT Mechanical Diagnosis & Therapy（Robin McKenzie）
// ════════════════════════════════════════════════════

// 證據力等級說明
// A = 系統性回顧 / Meta-analysis（高品質 RCT）
// B = 至少一個良好設計 RCT 或 cohort 研究
// C = 專家意見、病例報告、共識指引
// D = 學派原則 / 臨床導向教科書（非正式研究）

const exercises = [
    // ─────────────── DNS ───────────────
    {
        id: 1,
        name: "死蟲式",
        en: "Dead Bug",
        type: "training",
        level: "beginner",
        school: "DNS",
        icon: "🪲",
        image: "images/ex-1.jpg",        // 填入圖片網址或相對路徑，例如 "images/dead-bug.jpg"
        video: "",
        target: "核心穩定 / 呼吸整合",
        muscles: ["腹橫肌", "多裂肌", "橫膈膜", "骨盆底肌"],
        desc: "仰臥中立位，對側手腳緩慢伸展，訓練呼吸與深層核心穩定系統的整合。",
        cues: [
            "腰椎全程貼床，不代償",
            "呼氣時先建立腹內壓（IAP）再動作",
            "對側手腳同步緩慢伸展",
            "動作全程不憋氣"
        ],
        dose: "各側 8–10 次 × 3 組",
        notes: "DNS 核心入門動作，訓練 DLSS（深層穩定系統）。優先確認腰椎位置，再增加幅度。可加彈力帶或啞鈴進階。",
        evidence: {
            level: "B",
            summary: "Dead Bug 能有效啟動腹橫肌與多裂肌，具 EMG 研究支持；DNS 系統的 IAP 理論有生物力學研究佐證。",
            refs: [
                "Calatayud J, et al. (2019). Trunk muscle activity during different stabilization exercises. <em>J Hum Kinet</em>, 67, 163–175.",
                "Kolar P, et al. (2012). Postural function of the diaphragm in persons with and without chronic low back pain. <em>J Orthop Sports Phys Ther</em>, 42(4), 352–362.",
                "Lee BC & McGill SM. (2015). Effect of long-term isometric training on core stiffness. <em>J Strength Cond Res</em>, 29(6), 1515–1526."
            ]
        }
    },
    {
        id: 2,
        name: "熊爬預備位",
        en: "Bear Position",
        type: "training",
        level: "intermediate",
        school: "DNS",
        icon: "🐻",
        image: "images/ex-2.jpg",
        target: "核心穩定 / 上肢負重 / 對角線控制",
        muscles: ["腹橫肌", "前鋸肌", "菱形肌", "髖屈肌群", "橫膈膜"],
        desc: "四足跪位膝蓋懸空約 3 公分，維持中立脊椎與腹內壓，靜態或動態負荷。",
        cues: [
            "膝蓋離地但不聳肩",
            "脊椎中立，頸椎延伸（頭微收）",
            "全手掌貼地，前鋸肌主動推地",
            "呼吸不中斷，維持 IAP"
        ],
        dose: "靜態保持 20–30 秒 × 3 組；動態爬行 10 步",
        notes: "DNS 第三個月發展位置（四足跪）延伸，強調對角線穩定。前鋸肌弱化者先從靜態開始。",
        evidence: {
            level: "B",
            summary: "四足跪位下的核心訓練有 EMG 及 LBP 介入研究支持；DNS 發展動作學理論有兒童動作發展神經科學文獻佐證。",
            refs: [
                "Souza GM, et al. (2001). Serratus anterior muscle activation during selected rehabilitation exercises. <em>Phys Ther</em>, 81(6), 1385–1395.",
                "Kolar P. (2007). Facilitation of agonist-antagonist co-activation by reflex stimulation methods. <em>In: Prognostic Factors in Rehabilitation</em>, Prague School of Manual Medicine.",
                "Lee DG & Hodges PW. (2016). Behavior of the thoracolumbar fascia during the active straight leg raise in asymptomatic individuals. <em>J Orthop Sports Phys Ther</em>, 46(7), 580–589."
            ]
        }
    },
    {
        id: 3,
        name: "DNS 坐姿呼吸控制",
        en: "Sitting Respiratory-Postural Control",
        type: "training",
        level: "beginner",
        school: "DNS",
        icon: "🧘",
        image: "images/ex-3.jpg",
        target: "呼吸控制 / 核心整合基礎",
        muscles: ["橫膈膜", "腹橫肌", "骨盆底肌", "多裂肌"],
        desc: "坐姿訓練橫膈膜主導的腹式呼吸，建立姿勢控制與呼吸功能整合的基礎。",
        cues: [
            "坐骨承重，骨盆中立（不前後傾）",
            "吸氣時腹部 360° 均勻膨脹",
            "呼氣輕柔，不塌腰、不過度收腹",
            "感受骨盆底肌與腹部的協同作用"
        ],
        dose: "5–8 次呼吸 × 3 組，可融入每日晨間例行",
        notes: "DNS 呼吸訓練基礎。適合所有族群，特別是呼吸模式代償（胸式呼吸、聳肩呼吸）者。可作為所有訓練的暖身。",
        evidence: {
            level: "B",
            summary: "橫膈膜功能與腰痛相關性有多篇研究支持；呼吸再訓練對核心功能改善有 RCT 證據。",
            refs: [
                "Kolar P, et al. (2012). Postural function of the diaphragm in persons with and without chronic low back pain. <em>J Orthop Sports Phys Ther</em>, 42(4), 352–362.",
                "Chaitow L, et al. (2014). <em>Breathing Pattern Disorders, Motor Control, and Low Back Pain</em>. J Osteopath Med.",
                "Anderson BE & Bliven KCH. (2017). The use of breathing exercises in the treatment of chronic, nonspecific low back pain. <em>J Sport Rehabil</em>, 26(5), 452–458."
            ]
        }
    },
    {
        id: 4,
        name: "俯臥肘撐胸椎旋轉",
        en: "Thoracic Rotation in Prone-on-Elbows",
        type: "arom",
        level: "beginner",
        school: "DNS",
        icon: "🔄",
        image: "images/ex-4.jpg",
        target: "胸椎活動度",
        muscles: ["胸椎旋轉肌群", "菱形肌", "前鋸肌"],
        desc: "俯臥肘撐位，單側旋轉胸椎帶動肩膀開展，腰椎維持中立不代償。",
        cues: [
            "腰椎固定不跟著旋轉",
            "旋轉由胸椎節段發起",
            "呼氣輔助末端放鬆",
            "感受肩胛骨後縮帶動動作"
        ],
        dose: "各側 8–10 次，末端停留 2 秒",
        notes: "改善胸椎分節活動度，常作為肩部或頸部訓練前暖身。可先做呼吸訓練再進此動作。",
        evidence: {
            level: "C",
            summary: "胸椎手法與運動介入對胸椎活動度改善有多篇臨床研究，但針對此特定動作的高品質 RCT 較少。",
            refs: [
                "Strunce JB, et al. (2009). The immediate effects of thoracic spine and rib manipulation on subjects with primary complaints of shoulder pain. <em>J Man Manip Ther</em>, 17(4), 230–236.",
                "Cho SH & Kim SH. (2021). Effects of thoracic mobilization and exercise on thoracic kyphosis and pulmonary function. <em>J Phys Ther Sci</em>, 33(2), 118–123.",
                "Page P. (2011). Shoulder muscle imbalance and subacromial impingement syndrome in overhead athletes. <em>Int J Sports Phys Ther</em>, 6(1), 51–58."
            ]
        }
    },
    {
        id: 5,
        name: "仰臥髖關節 AROM（DNS 模式）",
        en: "Supine Hip AROM – DNS Pattern",
        type: "arom",
        level: "beginner",
        school: "DNS",
        icon: "🦵",
        image: "images/ex-5.jpg",
        target: "髖關節活動度 / 核心協調",
        muscles: ["髖屈肌群", "腹橫肌", "骨盆底肌", "臀肌"],
        desc: "仰臥，單腿緩慢做髖屈伸及旋轉動作，核心持續穩定，類似嬰兒三個月仰臥模式。",
        cues: [
            "腰椎全程不離床",
            "呼吸持續不憋氣",
            "動作幅度在可控範圍內",
            "感受核心—下肢的連動穩定"
        ],
        dose: "各側 8–10 次圓圈 × 2 組",
        notes: "DNS 三個月仰臥模式的臨床應用，適合術後、急性期或核心功能重建初期。",
        evidence: {
            level: "C",
            summary: "基於 DNS 發展動作學框架，神經科學文獻支持發展動作模式的臨床應用；特定動作的獨立研究有限。",
            refs: [
                "Vojta V & Peters A. (1992). <em>Das Vojta-Prinzip</em>. Springer.",
                "Kolar P, et al. (2013). <em>Clinical Rehabilitation</em>. Alena Kobesova (Ed.).",
                "Hodges PW & Richardson CA. (1996). Inefficient muscular stabilization of the lumbar spine associated with low back pain. <em>Spine</em>, 21(22), 2640–2650."
            ]
        }
    },
    // ─────────────── KC ───────────────
    {
        id: 6,
        name: "腰椎屈曲控制訓練",
        en: "Lumbar Flexion Control",
        type: "training",
        level: "beginner",
        school: "KC",
        icon: "📐",
        image: "images/ex-6.jpg",
        target: "腰椎動作控制 / 屈曲方向障礙",
        muscles: ["腹橫肌", "多裂肌", "髂腰肌"],
        desc: "站姿或坐姿，訓練腰椎在髖屈曲動作中維持中立，避免過早屈曲代償。",
        cues: [
            "先確認腰椎中立位",
            "動作由髖關節主導，脊椎不跟著彎",
            "手可觸摸腰椎監控位置",
            "速度要慢，感知優先於次數"
        ],
        dose: "10 次 × 3 組，專注動作品質",
        notes: "KC 核心概念：識別「方向性動作控制障礙（DMCD）」並矯正。下背痛患者最常見的方向為屈曲控制不足。",
        evidence: {
            level: "B",
            summary: "KC 系統的動作控制訓練有多篇針對下背痛的 RCT 支持，Comerford 的 DMCD 模型有廣泛臨床研究佐證。",
            refs: [
                "Comerford MJ & Mottram SL. (2001). Movement and stability dysfunction – contemporary developments. <em>Man Ther</em>, 6(1), 15–26.",
                "O'Sullivan PB. (2000). Lumbar segmental 'instability': clinical presentation and specific stabilizing exercise management. <em>Man Ther</em>, 5(1), 2–12.",
                "Ferreira ML, et al. (2006). Comparison of general exercise, motor control exercise and spinal manipulative therapy for chronic low back pain. <em>Pain</em>, 123(1–2), 31–43."
            ]
        }
    },
    {
        id: 7,
        name: "四足跪位髖—腰椎解離",
        en: "Hip-Lumbar Dissociation in Quadruped",
        type: "training",
        level: "intermediate",
        school: "KC",
        icon: "🦴",
        image: "images/ex-7.jpg",
        target: "腰椎穩定 / 髖關節控制",
        muscles: ["臀中肌", "腹橫肌", "多裂肌", "臀大肌"],
        desc: "四足跪位，單腿後伸或側移，腰椎全程維持中立不旋轉不屈曲。",
        cues: [
            "動作前先做 abdominal hollowing",
            "腿向後伸，腰椎不塌也不拱",
            "以骨盆為感知基準點",
            "速度慢、控制優先"
        ],
        dose: "各側 10 次 × 3 組",
        notes: "KC 訓練局部穩定系統（local stabilizers）的典型動作，強調低閾值啟動。可在患者掌握後加阻力或移至站姿。",
        evidence: {
            level: "B",
            summary: "四足跪位髖伸訓練的 EMG 研究廣泛，臀大肌/多裂肌啟動有多篇研究；KC 框架下的動作控制介入 LBP 有 RCT 支持。",
            refs: [
                "Worrell TW, et al. (2001). EMG analysis of hip abductor muscles as subjects with and without anterior knee pain perform selected exercises. <em>J Orthop Sports Phys Ther</em>, 31(6), 311–317.",
                "Comerford M & Mottram S. (2012). <em>Kinetic Control: The Management of Uncontrolled Movement</em>. Elsevier.",
                "Macedo LG, et al. (2009). Motor control exercise for acute and subacute low back pain. <em>Cochrane Database Syst Rev</em>, (2), CD007222."
            ]
        }
    },
    {
        id: 8,
        name: "坐姿骨盆分節自主活動",
        en: "Seated Pelvic Segmental AROM",
        type: "arom",
        level: "beginner",
        school: "KC",
        icon: "🪑",
        image: "images/ex-8.jpg",
        target: "骨盆 / 腰椎分節活動度",
        muscles: ["豎脊肌（腰段）", "髂腰肌", "臀大肌", "腹斜肌"],
        desc: "坐在椅緣，主動做骨盆前後傾、側傾與旋轉，探索每個方向的活動度與主動控制能力。",
        cues: [
            "動作範圍從小到大，慢慢探索",
            "感受哪個方向受限或不協調",
            "上半身盡量直立，不隨之代償",
            "每個方向均勻且可控"
        ],
        dose: "各方向 10 次圓圈 × 2–3 組",
        notes: "KC 初期評估與治療動作，重建骨盆感知與腰椎分節控制。適合當居家運動（HEP），容易在任何椅子上執行。",
        evidence: {
            level: "C",
            summary: "骨盆感知訓練相關研究多為機制性研究與臨床觀察，缺乏高品質獨立 RCT，但普遍被臨床指引接受為安全有效的初期介入。",
            refs: [
                "Liebenson C. (2007). <em>Rehabilitation of the Spine: A Practitioner's Manual</em> (2nd ed.). Lippincott.",
                "Mottram SL & Comerford M. (2008). A new perspective on risk assessment. <em>Phys Ther Sport</em>, 9(1), 40–51.",
                "Panjabi MM. (1992). The stabilizing system of the spine. Part II. Neutral zone and instability hypothesis. <em>J Spinal Disord</em>, 5(4), 390–397."
            ]
        }
    },
    {
        id: 9,
        name: "半跪姿髂腰肌低負荷伸展",
        en: "Half-Kneeling Iliopsoas Low-Load Stretch",
        type: "stretch",
        level: "beginner",
        school: "KC",
        icon: "🧎",
        image: "images/ex-9.jpg",
        target: "髖屈肌柔軟度 / 腰椎位置控制",
        muscles: ["髂腰肌", "股直肌（近端）", "腰大肌"],
        desc: "半跪姿，後腿髖關節前推，腰椎維持中立不過伸，感受前側髖部牽拉。",
        cues: [
            "先確認腰椎中立再推髖向前",
            "不靠腰椎過伸來增加牽拉感",
            "呼氣輔助放鬆緊繃",
            "前腳膝蓋不超過腳尖"
        ],
        dose: "各側 30–45 秒 × 2–3 組",
        notes: "KC 框架強調「低負荷長時間」伸展優於彈振式。常作為腰椎屈曲控制訓練的前置動作，減少髂腰肌過度啟動代償。",
        evidence: {
            level: "B",
            summary: "靜態伸展改善肌肉延展性有大量文獻；半跪姿伸展對髂腰肌長度與 LBP 的影響有 RCT 支持。",
            refs: [
                "Harvey L, et al. (2002). Does stretching induce lasting increases in joint ROM? A systematic review. <em>Physiother Res Int</em>, 7(1), 1–13.",
                "Winters MV, et al. (2004). Passive versus active stretching of hip flexor muscles. <em>Arch Phys Med Rehabil</em>, 85(2), 195–202.",
                "Comerford M & Mottram S. (2012). <em>Kinetic Control: The Management of Uncontrolled Movement</em>. Elsevier."
            ]
        }
    },
    {
        id: 10,
        name: "站姿胸腰解離旋轉",
        en: "Standing Thoraco-Lumbar Dissociation Rotation",
        type: "arom",
        level: "intermediate",
        school: "KC",
        icon: "🔃",
        image: "images/ex-10.jpg",
        target: "胸椎活動度 / 腰椎旋轉控制",
        muscles: ["胸椎旋轉肌群", "腹內外斜肌", "豎脊肌"],
        desc: "站姿雙手抱胸，主動旋轉胸椎，確認腰椎不隨之旋轉，分離胸腰段動作。",
        cues: [
            "先固定骨盆與腰椎",
            "旋轉只發生在胸椎段",
            "眼神跟隨旋轉方向",
            "感受雙側的對稱性差異"
        ],
        dose: "各側 10 次 × 2–3 組",
        notes: "KC 胸腰解離訓練，同時作為評估工具（識別胸椎活動度不足）與治療動作。常見於肩痛、下背痛患者的功能訓練。",
        evidence: {
            level: "B",
            summary: "胸椎活動度介入與肩、腰功能改善有多篇研究；胸腰解離概念在 KC 系統有臨床研究佐證。",
            refs: [
                "Comerford M & Mottram S. (2012). <em>Kinetic Control: The Management of Uncontrolled Movement</em>. Elsevier.",
                "Michener LA, et al. (2003). Relationship between biomechanical, clinical, and patient-reported measures in patients with shoulder impingement. <em>J Orthop Sports Phys Ther</em>, 33(10), 590–605.",
                "Novacheck TF. (1998). The biomechanics of running. <em>Gait Posture</em>, 7(1), 77–95."
            ]
        }
    },
    // ─────────────── DNS 進階 ───────────────
    {
        id: 11,
        name: "側躺肘撐支撐位",
        en: "Side-lying Elbow Support",
        type: "training",
        level: "intermediate",
        school: "DNS",
        icon: "🫷",
        image: "images/ex-11.jpg",
        target: "側向核心 / 肩帶穩定",
        muscles: ["腹外斜肌", "腰方肌", "前鋸肌", "臀中肌"],
        desc: "側躺肘撐，髖與膝微屈，維持脊椎中立與腹內壓，訓練側向穩定系統。",
        cues: [
            "耳、肩、髖、膝成一直線",
            "腰部不塌向地面",
            "呼吸持續，不憋氣維持姿勢",
            "前鋸肌主動，肩胛不翹起"
        ],
        dose: "各側保持 20–30 秒 × 3 組",
        notes: "DNS 側躺發展位置延伸，訓練對側手腳協同控制的側向穩定鏈。是 Sidebridge 的低難度版。",
        evidence: {
            level: "B",
            summary: "Side plank 系列動作的 EMG 研究顯示腰方肌與腹外斜肌有效啟動；側向核心訓練對 LBP 有 RCT 支持。",
            refs: [
                "McGill SM. (2010). Core training: Evidence translating to better performance and injury prevention. <em>Strength Cond J</em>, 32(3), 33–46.",
                "Ekstrom RA, et al. (2007). Surface electromyographic analysis of core trunk and hip muscles during selected rehabilitation exercises. <em>Phys Ther</em>, 87(9), 1162–1173.",
                "Kavcic N, et al. (2004). Determining the stabilizing role of individual torso muscles during rehabilitation exercises. <em>Spine</em>, 29(11), 1254–1265."
            ]
        }
    },
    {
        id: 12,
        name: "翻身動作模式",
        en: "Developmental Rolling Pattern",
        type: "arom",
        level: "beginner",
        school: "DNS",
        icon: "🔁",
        image: "images/ex-12.jpg",
        target: "脊椎分節動作 / 軀幹旋轉整合",
        muscles: ["腹斜肌群", "豎脊肌（節段性）", "髖屈肌群", "頸部深層屈肌"],
        desc: "仰臥，透過上肢或下肢引導翻身至俯臥，訓練脊椎分節旋轉與軀幹整合動作。",
        cues: [
            "動作由近端啟動（頭部或骨盆先動）",
            "不使用爆發力，緩慢分節旋轉",
            "感受脊椎每節依序捲動",
            "兩種方向（頭引導 / 腿引導）都要練"
        ],
        dose: "各側 5–8 次 × 2 組",
        notes: "DNS 發展動作學核心動作，反映軀幹旋轉整合能力。常用於神經復健、術後早期活動及動作模式再評估。",
        evidence: {
            level: "C",
            summary: "翻身模式源自 Vojta 神經發展治療（NDT）與 PNF，臨床廣泛應用但獨立高品質 RCT 較少。",
            refs: [
                "Vojta V & Peters A. (1992). <em>Das Vojta-Prinzip</em>. Springer.",
                "Kolar P, et al. (2013). <em>Clinical Rehabilitation</em>. Alena Kobesova (Ed.), Prague.",
                "Sullivan KJ & Hedman LD. (2004). Sensory dysfunction following stroke: incidence, significance, examination, and intervention. <em>Top Stroke Rehabil</em>, 11(3), 57–70."
            ]
        }
    },
    {
        id: 13,
        name: "DNS 深蹲呼吸整合",
        en: "DNS Deep Squat with Respiratory Integration",
        type: "training",
        level: "intermediate",
        school: "DNS",
        icon: "🏋️",
        image: "images/ex-13.jpg",
        target: "全身整合 / 核心 / 下肢",
        muscles: ["橫膈膜", "腹橫肌", "股四頭肌", "臀大肌", "豎脊肌"],
        desc: "深蹲底部維持呼吸與腹內壓，訓練在負重姿勢下的呼吸—姿勢整合能力。",
        cues: [
            "下蹲時腰椎中立，不圓背",
            "吸氣時腹部向外擴張（不只前方）",
            "站起時呼氣配合核心收縮",
            "腳跟不離地，膝蓋跟隨腳尖方向"
        ],
        dose: "8–10 次 × 3 組，注重每次呼吸節奏",
        notes: "將 DNS 呼吸整合概念帶入功能性動作，橋接基礎訓練到運動表現。可先做徒手深蹲，熟練後加負重。",
        evidence: {
            level: "B",
            summary: "深蹲的生物力學研究豐富；腹內壓在負重動作中的角色有多篇研究支持；DNS 呼吸整合理論有生理學佐證。",
            refs: [
                "Wretenberg P, et al. (1996). High- and low-bar squatting techniques during weight-training. <em>Med Sci Sports Exerc</em>, 28(2), 218–224.",
                "Harman EA, et al. (1988). Intra-abdominal and intra-thoracic pressures during lifting and jumping. <em>Med Sci Sports Exerc</em>, 20(2), 195–201.",
                "Kolar P, et al. (2012). Postural function of the diaphragm in persons with and without chronic low back pain. <em>J Orthop Sports Phys Ther</em>, 42(4), 352–362."
            ]
        }
    },
    {
        id: 14,
        name: "站姿對側負荷訓練",
        en: "Standing Contralateral Load Transfer",
        type: "training",
        level: "advanced",
        school: "DNS",
        icon: "⚖️",
        image: "images/ex-14.jpg",
        target: "步態整合 / 對角線穩定 / 核心負荷",
        muscles: ["腹外斜肌（對側）", "臀中肌", "腰方肌", "肩帶穩定肌群"],
        desc: "站姿，對側手腳同步承重（手持啞鈴 / 腳踩彈力帶），訓練步態對角線穩定能力。",
        cues: [
            "骨盆水平，不側傾代償",
            "對側手腳同步發力",
            "脊椎中立全程維持",
            "重心控制，不晃動"
        ],
        dose: "各側 10 次 × 3 組",
        notes: "DNS 步態訓練的進階應用，模擬行走時的對角線負荷模式。適合運動員與功能恢復後期。",
        evidence: {
            level: "B",
            summary: "對角線負荷訓練與步態功能的關係有生物力學研究；功能性訓練對運動表現的影響有多篇研究。",
            refs: [
                "Zatsiorsky VM & Kraemer WJ. (2006). <em>Science and Practice of Strength Training</em> (2nd ed.). Human Kinetics.",
                "Kibler WB, et al. (2006). The role of core stability in athletic function. <em>Sports Med</em>, 36(3), 189–198.",
                "Teyhen DS, et al. (2010). Changes in lateral abdominal muscle thickness during the abdominal drawing-in maneuver in those with lumbopelvic pain. <em>J Orthop Sports Phys Ther</em>, 40(9), 543–548."
            ]
        }
    },
    {
        id: 15,
        name: "單腳站立 DNS 整合",
        en: "Single Leg Stance – DNS Integration",
        type: "training",
        level: "advanced",
        school: "DNS",
        icon: "🦩",
        image: "images/ex-15.jpg",
        target: "單腳穩定 / 骨盆控制 / 全身整合",
        muscles: ["臀中肌", "腹橫肌", "腓腸肌", "比目魚肌", "足底內在肌"],
        desc: "單腳站立，維持骨盆水平與腹內壓，逐步增加干擾（閉眼、上肢負荷、不穩定面）。",
        cues: [
            "支撐腳三點貼地（大拇趾、小拇趾、腳跟）",
            "骨盆不側傾，臀中肌主動支撐",
            "脊椎中立，視線平視前方",
            "呼吸穩定，不憋氣"
        ],
        dose: "各側 30 秒 × 3 組，逐步增加難度",
        notes: "功能性訓練進階，整合 DNS 所有基礎能力。可依序進階：睜眼→閉眼→上肢動作→不穩定面。",
        evidence: {
            level: "A",
            summary: "單腳站立訓練改善平衡與預防跌倒有多篇系統性回顧支持；臀中肌訓練對膝踝控制有高品質研究。",
            refs: [
                "Howe TE, et al. (2011). Exercise for improving balance in older people. <em>Cochrane Database Syst Rev</em>, (11), CD004963.",
                "Distefano LJ, et al. (2009). Gluteal muscle activation during common therapeutic exercises. <em>J Orthop Sports Phys Ther</em>, 39(7), 532–540.",
                "Calatayud J, et al. (2015). Muscle activation during single-leg exercises. <em>J Hum Kinet</em>, 45, 157–167."
            ]
        }
    },
    // ─────────────── KC 進階 ───────────────
    {
        id: 16,
        name: "臀橋（腰椎控制版）",
        en: "Glute Bridge with Lumbar Control",
        type: "training",
        level: "beginner",
        school: "KC",
        icon: "🌉",
        image: "images/ex-16.jpg",
        target: "臀大肌 / 腰椎中立控制",
        muscles: ["臀大肌", "腘繩肌", "腹橫肌", "多裂肌"],
        desc: "仰臥屈膝，骨盆上推至臀橋頂端，腰椎維持中立不過度伸展。",
        cues: [
            "上推時臀大肌主動收縮，非腰椎過伸代償",
            "頂端維持 2 秒，感受臀部張力",
            "下降時脊椎分節回位",
            "膝蓋方向與第二趾對齊"
        ],
        dose: "15 次 × 3 組；進階：單腳臀橋 10 次 × 3 組",
        notes: "KC 框架強調臀大肌作為「主要動力穩定肌」，臀橋是確認臀大肌優先啟動（非腘繩肌或豎脊肌代償）的基礎動作。",
        evidence: {
            level: "A",
            summary: "臀橋的 EMG 研究豐富，高品質研究確認臀大肌啟動；對 LBP 的介入效果有多篇系統性回顧。",
            refs: [
                "Andersen V, et al. (2018). Electromyographic comparison of barbell deadlift, hex bar deadlift, and hip thrust exercises. <em>J Strength Cond Res</em>, 32(3), 587–593.",
                "Contreras B, et al. (2015). A comparison of gluteus maximus, biceps femoris, and vastus lateralis EMG activity. <em>J Appl Biomech</em>, 31(6), 452–458.",
                "Youdas JW, et al. (2015). Electromyographic analysis of trunk and hip flexors. <em>J Strength Cond Res</em>, 29(1), 57–64."
            ]
        }
    },
    {
        id: 17,
        name: "站姿髖屈曲控制",
        en: "Standing Hip Flexion Control",
        type: "training",
        level: "intermediate",
        school: "KC",
        icon: "🦿",
        image: "images/ex-17.jpg",
        target: "腰椎—髖關節解離 / 站姿控制",
        muscles: ["腹橫肌", "多裂肌", "髂腰肌", "臀中肌（支撐側）"],
        desc: "站姿，單腿抬起做髖屈曲，支撐腳與腰椎維持中立，不以腰椎屈曲或骨盆傾斜代償。",
        cues: [
            "抬腿前先穩定支撐側骨盆",
            "腰椎不隨抬腿向前彎",
            "骨盆不側傾或旋轉",
            "速度緩慢，控制全程"
        ],
        dose: "各側 10 次 × 3 組",
        notes: "站姿版的腰椎—髖關節解離訓練，KC 常用於步態訓練前期與下背痛中後期復健。比四足跪位難度更高。",
        evidence: {
            level: "B",
            summary: "站姿髖屈曲的腰椎穩定需求有生物力學研究支持；KC 動作控制介入 LBP 有 RCT 佐證。",
            refs: [
                "Comerford M & Mottram S. (2012). <em>Kinetic Control: The Management of Uncontrolled Movement</em>. Elsevier.",
                "Nadler SF, et al. (2002). Hip muscle imbalance and low back pain in athletes. <em>Am J Sports Med</em>, 30(3), 450–456.",
                "Roussel NA, et al. (2009). Low back pain in athletes. <em>Spine</em>, 34(6), E260–E268."
            ]
        }
    },
    {
        id: 18,
        name: "肩胛後縮下壓訓練",
        en: "Scapular Retraction & Depression",
        type: "training",
        level: "beginner",
        school: "KC",
        icon: "🫸",
        image: "images/ex-18.jpg",
        target: "肩胛穩定 / 肩峰下空間",
        muscles: ["下斜方肌", "菱形肌", "前鋸肌（下纖維）"],
        desc: "站姿或坐姿，肩胛主動後縮下壓，對抗上斜方肌過度主導，重建肩胛穩定肌的低閾值控制。",
        cues: [
            "想像把肩胛骨向脊椎靠近並向下滑",
            "不聳肩，上斜方肌不主導",
            "動作幅度小而精準",
            "維持 5 秒，感受下斜方肌啟動"
        ],
        dose: "15 次 × 3 組，末端維持 5 秒",
        notes: "KC 肩胛訓練基礎，解決上斜方肌過度主導（UTTI）的常見代償模式。常作為肩夾擠、旋轉肌袖問題的前期訓練。",
        evidence: {
            level: "B",
            summary: "下斜方肌訓練對肩胛動力學與肩夾擠症狀改善有多篇 RCT；KC 肩胛穩定概念有廣泛 EMG 研究佐證。",
            refs: [
                "Cools AM, et al. (2007). Rehabilitation of scapular muscle balance. <em>Am J Sports Med</em>, 35(10), 1744–1751.",
                "Ludewig PM & Braman JP. (2011). Shoulder impingement: biomechanical considerations in rehabilitation. <em>Man Ther</em>, 16(1), 33–39.",
                "Kibler WB, et al. (2013). Clinical implications of scapular dyskinesis in shoulder injury. <em>Br J Sports Med</em>, 47(5), 279–285."
            ]
        }
    },
    {
        id: 19,
        name: "腰椎伸展控制訓練",
        en: "Lumbar Extension Control",
        type: "training",
        level: "intermediate",
        school: "KC",
        icon: "🔙",
        image: "images/ex-19.jpg",
        target: "腰椎伸展方向控制障礙",
        muscles: ["腹直肌", "腹橫肌", "臀大肌", "髖屈肌群"],
        desc: "站姿或仰臥，訓練骨盆後傾與腰椎屈曲方向控制，對抗過度前凸的代償模式。",
        cues: [
            "骨盆後傾（肚臍往上提）",
            "下背部貼向床面或牆面",
            "不要過度用力，低閾值啟動即可",
            "感受腹部輕微張力"
        ],
        dose: "10 次 × 3 組，每次末端維持 3 秒",
        notes: "KC 針對「伸展方向控制障礙（Extension DMCD）」的初階矯正動作。常見於腰椎滑脫、前凸過大、椎間孔狹窄患者。",
        evidence: {
            level: "B",
            summary: "腰椎伸展控制訓練對下背痛的效果有 RCT 支持；KC DMCD 模型的臨床效度有系統性回顧。",
            refs: [
                "O'Sullivan PB. (2000). Lumbar segmental 'instability': clinical presentation and specific stabilizing exercise management. <em>Man Ther</em>, 5(1), 2–12.",
                "Dankaerts W, et al. (2006). Differences in sitting postures are associated with non-specific chronic low back pain disorders when patients are sub-classified. <em>Spine</em>, 31(6), 698–704.",
                "Comerford M & Mottram S. (2012). <em>Kinetic Control: The Management of Uncontrolled Movement</em>. Elsevier."
            ]
        }
    },
    {
        id: 20,
        name: "仰臥腘繩肌靜態伸展",
        en: "Supine Hamstring Static Stretch",
        type: "stretch",
        level: "beginner",
        school: "KC",
        icon: "🦵",
        image: "images/ex-20.jpg",
        target: "腘繩肌延展性",
        muscles: ["股二頭肌", "半腱肌", "半膜肌"],
        desc: "仰臥，單腿伸直向上抬，利用毛巾或雙手維持末端牽拉，腰椎不代償屈曲。",
        cues: [
            "腰椎貼床，不因腿抬起而拱起",
            "膝蓋盡量伸直，微彎也可接受",
            "感受大腿後側緊繃而非疼痛",
            "呼氣輔助放鬆進入更大幅度"
        ],
        dose: "各側 30–45 秒 × 3 組",
        notes: "KC 框架強調伸展時腰椎中立，避免骨盆後傾代償。腘繩肌緊繃是腰椎屈曲控制障礙的常見誘因，兩者需同步處理。",
        evidence: {
            level: "A",
            summary: "靜態伸展改善腘繩肌長度有大量系統性回顧支持；腘繩肌緊繃與 LBP 的關係有多篇研究。",
            refs: [
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119.",
                "Ayala F, et al. (2012). Effect of 3 different active stretch durations on hip flexion range of motion. <em>J Strength Cond Res</em>, 26(6), 1623–1631.",
                "Nourbakhsh MR & Arab AM. (2002). Relationship between mechanical factors and incidence of low back pain. <em>J Orthop Sports Phys Ther</em>, 32(9), 447–460."
            ]
        }
    },
    {
        id: 21,
        name: "頸椎深層屈肌控制",
        en: "Deep Cervical Flexor Control (Chin Tuck)",
        type: "training",
        level: "beginner",
        school: "KC",
        icon: "🧠",
        image: "images/ex-21.jpg",
        target: "頸椎穩定 / 頭前傾矯正",
        muscles: ["頸長肌", "頭長肌", "頸深層屈肌群"],
        desc: "仰臥或坐姿，下巴輕輕後收（Chin tuck），啟動深層頸椎屈肌，對抗頭前傾代償。",
        cues: [
            "想像下巴往後滑而非向下點頭",
            "感受頸部後方輕微拉伸",
            "上斜方肌保持放鬆",
            "維持 10 秒，再緩慢放鬆"
        ],
        dose: "10 次 × 3 組，每次維持 10 秒",
        notes: "KC 頸椎穩定基礎訓練。頸深層屈肌弱化是頸痛、頭痛、頭前傾最常見的肌肉功能問題。常作為頸部訓練的起點。",
        evidence: {
            level: "A",
            summary: "深層頸屈肌訓練改善頸痛與頭前傾有多篇高品質 RCT；系統性回顧確認 Chin tuck 的臨床效果。",
            refs: [
                "Jull GA, et al. (2008). Therapeutic exercise for spinal segmental stabilization in low back pain. <em>Churchill Livingstone</em>.",
                "Falla D, et al. (2004). An electromyographic analysis of the deep cervical flexor muscles during a craniocervical flexion test. <em>Phys Ther</em>, 84(10), 921–930.",
                "Gross AR, et al. (2015). Exercises for mechanical neck disorders. <em>Cochrane Database Syst Rev</em>, (1), CD004250."
            ]
        }
    },
    {
        id: 22,
        name: "坐姿胸椎分節伸展",
        en: "Seated Thoracic Segmental Extension",
        type: "arom",
        level: "beginner",
        school: "KC",
        icon: "🪗",
        image: "images/ex-22.jpg",
        target: "胸椎活動度 / 脊椎分節性",
        muscles: ["豎脊肌（胸段）", "胸椎多裂肌", "肋間肌"],
        desc: "坐姿，雙手支撐頭後，以胸椎為支點向後伸展，逐節感受胸椎伸展活動度。",
        cues: [
            "動作集中在胸椎，腰椎不過度伸展代償",
            "雙手僅支撐頭部，不強拉頸部",
            "慢慢向後弓，感受每節椎體移動",
            "呼氣時進入更深的伸展"
        ],
        dose: "8–10 次 × 2–3 組，末端停留 3–5 秒",
        notes: "KC 胸椎活動度訓練，可針對特定受限節段加強。常配合椅背或泡棉軸使用，特別適合久坐族群與肩痛患者。",
        evidence: {
            level: "B",
            summary: "胸椎伸展介入對肩部功能與頸部症狀改善有多篇研究；椅背伸展的生物力學研究有 EMG 佐證。",
            refs: [
                "Dunning JR, et al. (2012). Upper cervical and upper thoracic thrust manipulation versus non-thrust mobilization in patients with mechanical neck pain. <em>J Orthop Sports Phys Ther</em>, 42(1), 5–18.",
                "Edmondston SJ, et al. (2011). Thoracic spine extension mobility in young adults. <em>Man Ther</em>, 16(1), 101–106.",
                "Theodoridis D & Ruston S. (2002). The effect of shoulder movements on thoracic spine 3D motion. <em>Clin Biomech</em>, 17(5), 418–421."
            ]
        }
    },
    {
        id: 23,
        name: "髖外旋肌群伸展（鴿式變化）",
        en: "Hip External Rotator Stretch – Modified Pigeon",
        type: "stretch",
        level: "beginner",
        school: "KC",
        icon: "🕊️",
        image: "images/ex-23.jpg",
        target: "髖外旋肌群延展性 / 梨狀肌",
        muscles: ["梨狀肌", "閉孔肌群", "上下孖肌", "股方肌"],
        desc: "仰臥，單腿踝關節放置對側大腿上，輕推膝蓋感受深層髖外旋肌牽拉，腰椎維持中立。",
        cues: [
            "腰椎貼床，不因伸展而離床",
            "推膝蓋而非拉腳，避免膝關節壓力",
            "感受臀部深處（非大腿後側）的緊繃",
            "呼氣輔助進入末端"
        ],
        dose: "各側 30–45 秒 × 2–3 組",
        notes: "KC 髖部伸展常用動作，梨狀肌症候群與坐骨神經痛的常規介入。比鴿式更安全，膝踝壓力小，適合各族群。",
        evidence: {
            level: "B",
            summary: "髖外旋肌群伸展對梨狀肌症候群改善有 RCT；靜態伸展改善肌肉延展性的效果有大量系統性回顧。",
            refs: [
                "Boyajian-O'Neill LA, et al. (2008). Diagnosis and management of piriformis syndrome. <em>J Am Osteopath Assoc</em>, 108(11), 657–664.",
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119.",
                "Fishman LM, et al. (2002). Piriformis syndrome: diagnosis, treatment, and outcome. <em>J Back Musculoskelet Rehabil</em>, 17(1–2), 13–19."
            ]
        }
    },
    {
        id: 24,
        name: "DNS 俯臥伸展（Superman 變化）",
        en: "Prone Extension – DNS Variant",
        type: "training",
        level: "beginner",
        school: "DNS",
        icon: "🦸",
        image: "images/ex-24.jpg",
        target: "脊椎伸肌 / 肩胛穩定 / 後側動力鏈",
        muscles: ["豎脊肌", "多裂肌", "下斜方肌", "臀大肌", "腘繩肌"],
        desc: "俯臥，手臂 Y/T/W 位置做肩胛後縮伸展，核心輕度收縮，訓練後側肌肉鏈的整合控制。",
        cues: [
            "額頭輕觸毛巾，頸部放鬆",
            "肩胛先後縮下壓，再抬手臂",
            "臀部輕度收縮以保護腰椎",
            "動作緩慢，不靠慣性"
        ],
        dose: "Y/T/W 各 10 次 × 2–3 組",
        notes: "DNS 俯臥位整合訓練，同時訓練後側動力鏈與肩胛穩定。Y 難度最低，W 最難。下背痛患者從 Y 型開始。",
        evidence: {
            level: "B",
            summary: "Y/T/W 系列的 EMG 研究顯示有效啟動下斜方肌與菱形肌；後側鏈訓練對肩痛與 LBP 均有研究支持。",
            refs: [
                "Bitter NL, et al. (2007). EMG analysis of shoulder muscles during rehabilitative exercises. <em>J Sport Rehabil</em>, 16(1), 40–52.",
                "Ekstrom RA, et al. (2003). EMG analysis of lower trapezius activation in specific therapeutic exercises. <em>J Orthop Sports Phys Ther</em>, 33(9), 544–554.",
                "Cools AM, et al. (2007). Rehabilitation of scapular muscle balance. <em>Am J Sports Med</em>, 35(10), 1744–1751."
            ]
        }
    },
    {
        id: 25,
        name: "單腳站立旋轉控制",
        en: "Single Leg Stance Rotation Control",
        type: "training",
        level: "advanced",
        school: "KC",
        icon: "🌀",
        image: "images/ex-25.jpg",
        target: "軀幹旋轉控制 / 功能性平衡 / 步態進階",
        muscles: ["腹斜肌群", "臀中肌", "腰方肌", "腓腸肌"],
        desc: "單腳站立，上半身主動旋轉，下半身與骨盆維持穩定不隨之旋轉，訓練旋轉解離控制。",
        cues: [
            "支撐腳穩固，骨盆不跟著旋轉",
            "旋轉只發生在胸椎以上",
            "眼睛平視，不因旋轉而失去水平",
            "動作慢，優先感知再增加速度"
        ],
        dose: "各側 8–10 次 × 3 組",
        notes: "KC 最高難度整合訓練之一，結合單腳穩定與胸腰解離。適合運動員或復健後期需要旋轉動作的族群（投擲、揮拍等）。",
        evidence: {
            level: "B",
            summary: "旋轉動作控制訓練對運動功能恢復有 RCT 支持；單腳站結合上半身任務的生物力學研究有佐證。",
            refs: [
                "Behm DG, et al. (2010). The use of instability to train the core musculature. <em>Appl Physiol Nutr Metab</em>, 35(1), 91–108.",
                "Comerford M & Mottram S. (2012). <em>Kinetic Control: The Management of Uncontrolled Movement</em>. Elsevier.",
                "Zazulak BT, et al. (2007). Deficits in neuromuscular control of the trunk predict knee injury risk. <em>Am J Sports Med</em>, 35(7), 1123–1130."
            ]
        }
    },

    // ─────────────── Mulligan MWM ───────────────
    {
        id: 26,
        name: "頸椎自主 SNAG（屈曲）",
        en: "Self-SNAG Cervical Flexion",
        type: "mwm",
        level: "beginner",
        school: "Mulligan",
        icon: "🤝",
        image: "images/ex-26.jpg",
        target: "頸椎屈曲活動度 / 頸痛",
        muscles: ["頸椎關節突關節周圍組織", "頸深層屈肌"],
        desc: "用毛巾或手指在特定頸椎節段施予向頭側的持續滑動力，同時主動執行屈曲動作，改善活動度並降低疼痛。",
        cues: [
            "毛巾貼住目標節段的棘突/椎板",
            "往頭側（頭頂方向）水平施力",
            "維持滑動力的同時慢慢低頭",
            "動作中不應有疼痛，只有活動度改善"
        ],
        dose: "3 組 × 10 次，每次配合主動動作",
        notes: "Mulligan 概念的自主應用（Self-SNAG）。關鍵：力的方向必須平行關節面，疼痛即停止調整施力節段與方向。需先由治療師確認適用節段。",
        evidence: {
            level: "A",
            summary: "頸椎 MWM 對頸痛與活動度改善有多篇系統性回顧與高品質 RCT 支持。",
            refs: [
                "Hidalgo B, et al. (2017). The efficacy of manual therapy and exercise for treating non-specific neck pain. <em>J Back Musculoskelet Rehabil</em>, 30(6), 1149–1169.",
                "Thoomes EJ, et al. (2018). The effectiveness of conservative treatment for traumatic whiplash. <em>Spine J</em>, 18(10), 1865–1871.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    {
        id: 27,
        name: "踝關節背屈 MWM（靠牆弓步）",
        en: "Ankle Dorsiflexion MWM – Weight-bearing Lunge",
        type: "mwm",
        level: "beginner",
        school: "Mulligan",
        icon: "🦶",
        image: "images/ex-27.jpg",
        video: "",
        target: "踝關節背屈活動度 / 距骨後滑障礙",
        muscles: ["腓腸肌", "比目魚肌", "踝關節囊周圍組織"],
        desc: "靠牆弓步，用彈力帶在距骨前側施予向後的持續滑動力，同時膝蓋向前推執行主動背屈。",
        cues: [
            "彈力帶繞過距骨前側（踝關節稍上方）",
            "帶子方向向後斜下（朝後腳跟）",
            "膝蓋推向牆壁，腳跟不離地",
            "無痛範圍內推到最大幅度"
        ],
        dose: "3 組 × 10 次（配合主動背屈），每次末端停留 1–2 秒",
        notes: "Mulligan MWM 最有研究支持的動作之一。距骨前移受限（anterior talar impingement）與踝背屈受限的首選介入。彈力帶張力需足夠，通常選中至大阻力。",
        evidence: {
            level: "A",
            summary: "踝背屈 MWM 對活動度改善與跑步功能有多篇 RCT 與系統性回顧支持，效果優於單純伸展。",
            refs: [
                "Collins N, et al. (2004). The initial effects of a Mulligan's mobilization with movement technique on dorsiflexion and pain in subacute ankle sprains. <em>Man Ther</em>, 9(2), 77–82.",
                "Terada M, et al. (2016). Effects of therapeutic MWM on ankle dorsiflexion range of motion. <em>Int J Sports Phys Ther</em>, 11(5), 718–729.",
                "Vicenzino B, et al. (2006). Initial changes in posterior talar glide and dorsiflexion of the ankle after mobilization with movement in individuals with recurrent ankle sprain. <em>J Orthop Sports Phys Ther</em>, 36(7), 464–471."
            ]
        }
    },
    {
        id: 28,
        name: "腰椎自主 SNAG（屈曲）",
        en: "Self-SNAG Lumbar Flexion",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "🔩",
        image: "images/ex-28.jpg",
        target: "腰椎屈曲活動度 / 下背痛",
        muscles: ["腰椎關節突關節周圍組織", "多裂肌", "豎脊肌"],
        desc: "坐姿，用毛巾繞過目標腰椎節段棘突，雙手固定毛巾兩端並向前上方施力，同時主動前彎。",
        cues: [
            "毛巾貼緊目標節段，不在皮膚表面滑動",
            "施力方向向前上（天花板方向）",
            "維持牽引力同時慢慢前彎",
            "無痛即可持續，有痛立即調整"
        ],
        dose: "3 組 × 10 次",
        notes: "適用於特定節段屈曲受限伴疼痛的 LBP。需先由治療師評估確認方向正確。與物理治療師進行 3–5 次後可轉為自主居家訓練。",
        evidence: {
            level: "B",
            summary: "腰椎 MWM 對 LBP 及活動度改善有多篇 RCT；但自主 SNAG 的獨立研究相對少，多依附於整體 Mulligan 系統研究。",
            refs: [
                "Konstantinou K, et al. (2002). The use and reported effects of mobilization with movement techniques in low back pain management. <em>Man Ther</em>, 7(4), 206–214.",
                "Moutzouri M, et al. (2008). The effects of MWM on lumbar multifidus thickness. <em>Man Ther</em>, 13(6), 512–517.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    {
        id: 29,
        name: "肩關節外展 MWM（側向滑動）",
        en: "Shoulder Abduction MWM – Lateral Glide",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "💪",
        image: "images/ex-29.jpg",
        target: "肩關節外展活動度 / 夾擠症狀",
        muscles: ["旋轉肌袖", "三角肌", "肩關節囊"],
        desc: "用彈力帶繞過肱骨近端，施予外側水平滑動力，同時主動執行肩關節外展動作。",
        cues: [
            "彈力帶繞在腋下稍上方（肱骨外科頸位置）",
            "帶子方向平行地面向外",
            "維持滑動力的同時慢慢外展手臂",
            "外展過程中夾擠痛應消失或顯著減少"
        ],
        dose: "3 組 × 10 次（配合主動外展）",
        notes: "Mulligan 肩關節 MWM 核心技術。若外展時有疼痛弧（60–120°），此技術常能立即緩解。療效若不佳需重新評估滑動方向（可嘗試前後方向）。",
        evidence: {
            level: "B",
            summary: "肩關節 MWM 對夾擠症候群的疼痛與活動度改善有多篇 RCT 及系統性回顧。",
            refs: [
                "Delgado-Gil JA, et al. (2015). Effects of mobilization with movement on pain and range of motion in patients with unilateral shoulder impingement. <em>J Manip Physiol Ther</em>, 38(4), 245–252.",
                "Teys P, et al. (2008). The initial effects of a Mulligan's mobilization with movement technique on range of movement and pressure pain threshold in pain-limited shoulders. <em>Man Ther</em>, 13(1), 37–42.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    {
        id: 30,
        name: "膝關節屈曲 MWM（脛骨內旋滑動）",
        en: "Knee Flexion MWM – Tibial Rotation Glide",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "🦵",
        image: "images/ex-30.jpg",
        target: "膝關節屈曲活動度 / 膝痛",
        muscles: ["股四頭肌", "腘繩肌", "膝關節囊"],
        desc: "站姿或仰臥，以手或彈力帶對脛骨施予內旋或外旋滑動，同時主動屈曲膝關節至受限範圍。",
        cues: [
            "先確認哪個旋轉方向可增加屈曲（個體差異大）",
            "維持旋轉力的同時緩慢屈膝",
            "在無痛範圍內操作",
            "配合呼氣進入末端"
        ],
        dose: "3 組 × 10 次，選擇有效方向",
        notes: "適用於半月板修復後、TKA 術後或膝關節屈曲受限。方向（內旋 vs. 外旋）需個別評估，無通用答案。",
        evidence: {
            level: "B",
            summary: "膝關節 MWM 對屈曲受限與膝痛的改善有 RCT 及系統性回顧，效果尤其在術後復健中受到支持。",
            refs: [
                "Hing W, et al. (2009). Mulligan's mobilization with movement: a systematic review. <em>J Man Manip Ther</em>, 17(2), E39–E66.",
                "Takasaki H, et al. (2013). Immediate and short-term effects of Mulligan's mobilization with movement on knee pain and disability. <em>Man Ther</em>, 18(4), 371–374.",
                "Vicenzino B, et al. (2011). Rationale for the use of manual therapy in upper extremity musculoskeletal disorders. <em>Man Ther</em>, 16(4), 305–310."
            ]
        }
    },

    // ─────────────── FRC ───────────────
    {
        id: 31,
        name: "髖關節 CARs",
        en: "Hip Controlled Articular Rotations (CARs)",
        type: "arom",
        level: "beginner",
        school: "FRC",
        icon: "⭕",
        image: "images/ex-31.jpg",
        target: "髖關節活動度維護 / 神經肌肉控制",
        muscles: ["髖屈肌群", "臀大肌", "髖外旋肌群", "髖內收肌群"],
        desc: "站姿或仰臥，在最大主動控制範圍內緩慢旋轉髖關節一整圈，全程維持全身張力以隔離動作。",
        cues: [
            "非動作側全身用力（irradiation），隔離髖關節動作",
            "速度極慢（一圈 10–15 秒），不用慣性",
            "在每個方向的末端增加擠壓感",
            "動作幅度要到達真正的主動末端，不欺騙"
        ],
        dose: "各側 3–5 圈，每日執行",
        notes: "FRC（Functional Range Conditioning）核心概念之一。CARs 是關節健康維護的基礎，訓練全範圍主動控制而非被動活動度。每日執行用於維護關節健康。",
        evidence: {
            level: "C",
            summary: "CARs 的直接 RCT 研究有限，但基礎科學支持主動活動度訓練優於被動伸展對關節組織健康的長期影響。",
            refs: [
                "Spina AA. (2014). <em>Functional Range Conditioning</em>. Functional Anatomy Seminars.",
                "Lehecka BJ, et al. (2017). Building a better gluteus medius. <em>Int J Sports Phys Ther</em>, 12(4), 502–514.",
                "Behm DG & Chaouachi A. (2011). A review of the acute effects of static and dynamic stretching on performance. <em>Eur J Appl Physiol</em>, 111(11), 2633–2651."
            ]
        }
    },
    {
        id: 32,
        name: "肩關節 CARs",
        en: "Shoulder Controlled Articular Rotations (CARs)",
        type: "arom",
        level: "beginner",
        school: "FRC",
        icon: "🔵",
        image: "images/ex-32.jpg",
        target: "肩關節全範圍活動度 / 關節健康維護",
        muscles: ["旋轉肌袖", "三角肌", "前鋸肌", "斜方肌"],
        desc: "站姿，單臂在最大主動控制範圍內緩慢畫完整圓弧，其餘身體部位維持靜止張力。",
        cues: [
            "對側手扶著肩胛骨，感受肩胛不過度代償",
            "速度要慢（一圈 10–15 秒）",
            "在每個末端位置短暫停留增強感知",
            "若有夾擠感，調整路徑避開而非強行通過"
        ],
        dose: "各側 3–5 圈，每日執行",
        notes: "FRC 肩關節維護訓練。肩關節活動度大但穩定需求高，CARs 幫助維持全範圍神經肌肉控制。特別適合久坐族群與運動員作為日常維護。",
        evidence: {
            level: "C",
            summary: "主動關節活動度訓練對肩關節功能維護有生理學基礎；FRC 系統缺乏獨立高品質 RCT，但應用廣泛。",
            refs: [
                "Spina AA. (2014). <em>Functional Range Conditioning</em>. Functional Anatomy Seminars.",
                "Ellenbecker TS & Davies GJ. (2000). The application of isokinetics in testing and rehabilitation of the shoulder complex. <em>J Athl Train</em>, 35(3), 338–350.",
                "Ludewig PM & Borstad JD. (2003). Effects of a home exercise programme on shoulder pain and functional status in construction workers. <em>Occup Environ Med</em>, 60(11), 841–849."
            ]
        }
    },
    {
        id: 33,
        name: "髖關節 PAILs / RAILs（屈曲）",
        en: "Hip Flexion PAILs / RAILs",
        type: "stretch",
        level: "intermediate",
        school: "FRC",
        icon: "💡",
        image: "images/ex-33.jpg",
        target: "髖屈曲末端範圍強化 / 主動活動度擴展",
        muscles: ["髖屈肌群", "臀大肌", "腘繩肌"],
        desc: "在髖屈曲末端範圍，先用力對抗地板（PAILs，收縮屈肌），再用力對抗阻力向對側（RAILs，收縮伸肌），逐步擴展可控活動度。",
        cues: [
            "PAILs：在末端將腿往地板方向壓，用力 100%，持續 20 秒",
            "放鬆 5 秒後進入新的末端",
            "RAILs：在新末端用力將腿往天花板拉，用力 100%，持續 20 秒",
            "全程不要失去末端位置"
        ],
        dose: "各側 2–3 組（PAILs→RAILs 各 20 秒），建議每週 3 次",
        notes: "FRC 活動度擴展的核心技術。PAILs 強化主動末端範圍，RAILs 拓展新的主動範圍。比傳統靜態伸展更有效改善「功能性」活動度（主動控制）。",
        evidence: {
            level: "B",
            summary: "等長收縮後放鬆（PNF）技術的研究支持 PAILs/RAILs 的生理機制；主動末端強化優於被動伸展有多篇研究。",
            refs: [
                "Spina AA. (2014). <em>Functional Range Conditioning</em>. Functional Anatomy Seminars.",
                "Hindle KB, et al. (2012). Proprioceptive neuromuscular facilitation (PNF): its mechanisms and effects on range of motion and muscular function. <em>J Hum Kinet</em>, 31, 105–113.",
                "Sharman MJ, et al. (2006). Proprioceptive neuromuscular facilitation stretching: mechanisms and clinical implications. <em>Sports Med</em>, 36(11), 929–939."
            ]
        }
    },
    {
        id: 34,
        name: "脊椎 CARs（坐姿全節段）",
        en: "Spinal CARs – Seated Full Segmental",
        type: "arom",
        level: "intermediate",
        school: "FRC",
        icon: "🌊",
        image: "images/ex-34.jpg",
        target: "脊椎全節段活動度維護",
        muscles: ["多裂肌", "豎脊肌", "腹斜肌群", "腰方肌"],
        desc: "坐姿，以脊椎為軸，依序執行屈曲、側彎、伸展、旋轉的全範圍主動旋轉，感受每節脊椎的參與。",
        cues: [
            "動作要慢，嘗試感受每一節脊椎",
            "骨盆固定，動作從脊椎本身發起",
            "遇到受限方向不強行，記錄並針對性加強",
            "每個方向末端短暫停留（1–2 秒）"
        ],
        dose: "各方向 3–5 圈，每日執行",
        notes: "FRC 脊椎維護訓練。結合屈曲、伸展、側彎與旋轉的完整動作鏈，比單一方向訓練更全面。適合所有族群的日常維護。",
        evidence: {
            level: "C",
            summary: "脊椎主動活動度訓練對功能改善有廣泛臨床應用；FRC 脊椎 CARs 的直接 RCT 尚缺，但動作科學原則有支持。",
            refs: [
                "Spina AA. (2014). <em>Functional Range Conditioning</em>. Functional Anatomy Seminars.",
                "McGill SM & Karpowicz A. (2009). Exercises for spine stabilization: motion/motor patterns, stability progressions, and clinical technique. <em>Arch Phys Med Rehabil</em>, 90(1), 118–126.",
                "Dankaerts W, et al. (2007). The use of a mechanism-based classification system to evaluate and direct management of a patient with non-specific chronic low back pain. <em>Man Ther</em>, 12(2), 181–191."
            ]
        }
    },

    // ─────────────── McKenzie ───────────────
    {
        id: 35,
        name: "俯臥撐體（McKenzie 伸展）",
        en: "Prone Press-Up – McKenzie Extension",
        type: "arom",
        level: "beginner",
        school: "McKenzie",
        icon: "⬆️",
        image: "images/ex-35.jpg",
        video: "",
        target: "腰椎伸展方向集中化 / 椎間盤後側減壓",
        muscles: ["豎脊肌", "腹部肌群（離心）", "多裂肌"],
        desc: "俯臥，雙手放胸側，手肘撐起上半身，腰椎被動伸展，骨盆與腿部放鬆在床上。",
        cues: [
            "腰部放鬆，不主動用腰椎肌肉撐起",
            "緩慢到達末端，停留 1–2 秒",
            "腿部完全放鬆，不要夾臀",
            "若症狀向心集中（向腰椎靠近）即為正確方向"
        ],
        dose: "10 次 × 3–4 組，每 2–3 小時執行一次",
        notes: "McKenzie MDT 伸展方向偏好（extension preference）的核心動作。適用於屈曲誘發症狀、椎間盤突出急性期。若症狀擴散（peripheralization）應立即停止並重新評估。",
        evidence: {
            level: "A",
            summary: "McKenzie 伸展訓練對 LBP 有多篇 RCT 及系統性回顧；方向性偏好（directional preference）概念有廣泛臨床研究支持。",
            refs: [
                "Donelson R, et al. (1990). A prospective study of centralization of lumbar and referred pain. <em>Spine</em>, 15(3), 211–219.",
                "Machado LA, et al. (2006). The McKenzie method for low back pain. <em>Spine</em>, 31(9), E254–E262.",
                "Clare HA, et al. (2004). A systematic review of efficacy of McKenzie therapy for spinal pain. <em>Aust J Physiother</em>, 50(4), 209–216."
            ]
        }
    },
    {
        id: 36,
        name: "站姿腰椎伸展（McKenzie）",
        en: "Standing Lumbar Extension – McKenzie",
        type: "arom",
        level: "beginner",
        school: "McKenzie",
        icon: "🏃",
        image: "images/ex-36.jpg",
        target: "腰椎伸展活動度 / 站姿集中化",
        muscles: ["豎脊肌", "多裂肌"],
        desc: "站姿，雙手放腰後，緩慢向後伸展腰椎，適合在久坐後快速執行，或作為俯臥伸展的進階替代。",
        cues: [
            "手放在腰部後方做支撐",
            "緩慢向後弓，感受腰椎伸展",
            "膝蓋不要彎曲",
            "若症狀集中（减少）即為有效"
        ],
        dose: "10 次，每坐 30–45 分鐘做一次",
        notes: "McKenzie 在工作場所的自我管理動作，適合辦公室族群。是俯臥撐體的站姿替代版，方便在任何地方執行。若感覺更痛需重新評估。",
        evidence: {
            level: "A",
            summary: "McKenzie 伸展系列動作對 LBP 的效果有大量研究；站姿版本的依從性較俯臥版高。",
            refs: [
                "McKenzie RA & May S. (2003). <em>The Lumbar Spine: Mechanical Diagnosis & Therapy</em> (2nd ed.). Spinal Publications.",
                "Garcia AN, et al. (2013). Effectiveness of the McKenzie method in addition to first-line care for acute low back pain. <em>BMC Musculoskelet Disord</em>, 14, 301.",
                "Machado LA, et al. (2006). The McKenzie method for low back pain. <em>Spine</em>, 31(9), E254–E262."
            ]
        }
    },
    {
        id: 37,
        name: "頸椎收縮（McKenzie Retraction）",
        en: "Cervical Retraction – McKenzie",
        type: "arom",
        level: "beginner",
        school: "McKenzie",
        icon: "↩️",
        image: "images/ex-37.jpg",
        target: "頸椎伸展 / 頭前傾矯正 / 頸痛集中化",
        muscles: ["頸深層屈肌", "頸椎後側肌群"],
        desc: "坐姿或站姿，頭部水平向後收縮，下巴不下沉，感受頸椎後側壓縮與前側拉伸。",
        cues: [
            "想像頭往後滑，不是往下點頭",
            "感受後腦勺往後移動",
            "動作緩慢到達末端再放鬆",
            "若症狀（如手麻、頸部疼痛）向心集中即為正確方向"
        ],
        dose: "10 次 × 每 1–2 小時，或症狀出現時執行",
        notes: "McKenzie 頸椎核心動作，對頸椎間盤問題、頸因性頭痛有效。頸椎收縮也是深層頸屈肌的神經肌肉再教育，可與 KC 頸椎訓練結合使用。",
        evidence: {
            level: "A",
            summary: "McKenzie 頸椎收縮對頸痛、頭痛及手臂放射痛有多篇 RCT 與系統性回顧；為臨床指引常見建議動作。",
            refs: [
                "Kjellman GV, et al. (1997). A critical analysis of randomised clinical trials on neck pain and treatment efficacy. <em>Scand J Rehabil Med</em>, 29(3), 139–152.",
                "Gross A, et al. (2015). Exercises for mechanical neck disorders. <em>Cochrane Database Syst Rev</em>, (1), CD004250.",
                "McKenzie RA & May S. (2006). <em>The Cervical and Thoracic Spine: Mechanical Diagnosis & Therapy</em>. Spinal Publications."
            ]
        }
    },

    // ─────────────── 通用循證（General EBP）伸展 ───────────────
    {
        id: 38,
        name: "頸椎側彎伸展",
        en: "Cervical Lateral Flexion Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🤸",
        image: "images/ex-38.jpg",
        target: "頸椎側彎活動度 / 上斜方肌、提肩胛肌",
        muscles: ["上斜方肌", "提肩胛肌", "頸椎側屈肌群", "胸鎖乳突肌"],
        desc: "坐姿，頭部向一側側彎至末端，對側手壓肩膀固定肩帶，感受頸部對側肌肉牽拉。",
        cues: [
            "耳朵往肩膀方向靠，不是轉頭",
            "對側肩膀主動下壓，不要聳肩",
            "感受頸部對側肌肉的牽拉",
            "呼氣輔助放鬆進入更大幅度"
        ],
        dose: "各側 30 秒 × 3 組",
        notes: "常用於頸椎活動度受限、緊張性頭痛及肩頸肌筋膜疼痛。對側手壓肩膀比壓頭更安全，可避免頸椎過度側壓。",
        evidence: {
            level: "B",
            summary: "靜態頸椎側屈伸展對肌肉延展性與頸痛症狀改善有 RCT 支持；結合 CRAC 技術效果更佳。",
            refs: [
                "Gross A, et al. (2015). Exercises for mechanical neck disorders. <em>Cochrane Database Syst Rev</em>, (1), CD004250.",
                "Kay TM, et al. (2012). Exercises for mechanical neck disorders. <em>Cochrane Database Syst Rev</em>, (8), CD004250.",
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119."
            ]
        }
    },
    {
        id: 39,
        name: "泡棉滾筒胸椎伸展",
        en: "Foam Roll Thoracic Extension",
        type: "arom",
        level: "beginner",
        school: "General",
        icon: "🪵",
        image: "images/ex-39.jpg",
        target: "胸椎伸展活動度 / 後側肌筋膜放鬆",
        muscles: ["豎脊肌（胸段）", "菱形肌", "胸椎後側關節囊"],
        desc: "橫躺於泡棉滾筒（置於胸椎段），雙手抱頭，讓重力使胸椎向後伸展，從 T8 逐節向上移動滾筒。",
        cues: [
            "滾筒與脊椎垂直，置於特定胸椎節段",
            "雙腳踩地，用腿控制身體重量",
            "讓胸椎被重力帶向後伸展，不強迫",
            "從 T7–8 開始逐節向頭側移動"
        ],
        dose: "各節段停留 30–60 秒，共 5–8 節段，每日 1 次",
        notes: "改善胸椎後凸、增加伸展活動度的有效工具。腰椎不應置於滾筒上（壓力過大）。有骨質疏鬆症者需諮詢後再使用。",
        evidence: {
            level: "B",
            summary: "胸椎伸展介入對活動度及肩部功能改善有多篇研究；泡棉滾筒效果與徒手治療相當。",
            refs: [
                "Beyer R, et al. (2015). Foam rolling and massage produce similar acute effects on range of motion. <em>Int J Sports Phys Ther</em>, 10(6), 812.",
                "Cho SH & Kim SH. (2021). Effects of thoracic mobilization and exercise on thoracic kyphosis and pulmonary function. <em>J Phys Ther Sci</em>, 33(2), 118–123.",
                "Heneghan NR & Rushton A. (2016). Understanding why the thoracic region is the 'key' to unlocking the lumbar spine. <em>Man Ther</em>, 22, 78–83."
            ]
        }
    },
    {
        id: 40,
        name: "仰臥抱膝伸展",
        en: "Supine Knee-to-Chest Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🧸",
        image: "images/ex-40.jpg",
        target: "腰椎屈曲活動度 / 腰背部放鬆",
        muscles: ["豎脊肌", "臀大肌", "梨狀肌", "薦髂關節周圍組織"],
        desc: "仰臥，雙膝或單膝抱至胸前，輕輕維持靜態牽拉，放鬆腰椎後側肌群與薦髂關節。",
        cues: [
            "雙手環抱小腿，輕柔拉向胸口",
            "肩膀保持放鬆貼床，頸部不前屈",
            "感受下背部與臀部緊繃緩解",
            "可輕微前後搖動加強效果"
        ],
        dose: "30–60 秒 × 3 組；單腳版可交替進行",
        notes: "適合屈曲偏好（flexion preference）LBP 患者。與 McKenzie 伸展方向相反，需先評估方向偏好，伸展偏好者不適用。",
        evidence: {
            level: "A",
            summary: "屈曲運動介入 LBP 有多篇 RCT；抱膝對慢性 LBP 短期疼痛緩解有系統性回顧支持。",
            refs: [
                "Hayden JA, et al. (2005). Systematic review: strategies for using exercise therapy to improve outcomes in chronic low back pain. <em>Ann Intern Med</em>, 142(9), 776–785.",
                "Garcia AN, et al. (2013). Effectiveness of the McKenzie method for low back pain. <em>BMC Musculoskelet Disord</em>, 14, 301.",
                "Williams PC. (1955). Examination and conservative treatment for disk lesions of the lower spine. <em>Clin Orthop</em>, 5, 28–40."
            ]
        }
    },
    {
        id: 41,
        name: "肩關節後側囊伸展",
        en: "Shoulder Posterior Capsule Stretch (Cross-body)",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🤲",
        image: "images/ex-41.jpg",
        target: "肩關節後側囊延展性 / 水平內收 / 內旋活動度",
        muscles: ["後三角肌", "棘下肌", "小圓肌", "後側關節囊"],
        desc: "站姿或坐姿，單臂橫越胸口，對側手在肘關節上方施壓向對側胸壁，感受肩部後側牽拉。",
        cues: [
            "手肘高度維持約肩膀高度，不要低於肩部",
            "施壓方向朝對側胸壁水平拉，不向下",
            "肩胛骨不過度前引（不讓肩胛骨翹起）",
            "感受肩後方深層的牽拉（非頸部）"
        ],
        dose: "各側 30 秒 × 3 組",
        notes: "GIRD（肩關節內旋不足）的標準伸展介入。投擲運動員、游泳選手的常規訓練，改善水平內收與內旋活動度，降低肩夾擠風險。",
        evidence: {
            level: "A",
            summary: "後側囊伸展改善 GIRD 有多篇高品質 RCT；系統性回顧確認對投擲運動員肩關節活動度的改善效果。",
            refs: [
                "Burkhart SS, et al. (2003). The disabled throwing shoulder: spectrum of pathology. <em>Arthroscopy</em>, 19(4), 404–420.",
                "Tyler TF, et al. (2010). The effect of glenohumeral internal rotation deficit on baseball pitching. <em>J Shoulder Elbow Surg</em>, 19(4), 556–561.",
                "Manske RC, et al. (2010). Glenohumeral motion deficits: friend or foe? <em>Int J Sports Phys Ther</em>, 5(5), 310–313."
            ]
        }
    },
    {
        id: 42,
        name: "肱二頭肌 / 肘屈肌伸展",
        en: "Biceps / Elbow Flexor Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "💪",
        image: "images/ex-42.jpg",
        target: "肘關節伸直活動度 / 肱二頭肌延展性",
        muscles: ["肱二頭肌", "肱肌", "肘關節前側關節囊"],
        desc: "站姿，單臂向後伸展，前臂旋前（拇指朝下），緩慢前傾身體感受肘前與上臂前側牽拉。可靠牆輔助穩定。",
        cues: [
            "前臂旋前（拇指朝下）增加肱二頭肌牽拉",
            "肩膀向下，不要聳肩",
            "肘關節盡量伸直，微彎也可接受",
            "感受從前臂到肩前的整條牽拉"
        ],
        dose: "各側 30 秒 × 2–3 組",
        notes: "適用於肘關節術後、肱二頭肌肌腱炎及肘屈曲攣縮的早期處理。可搭配牆面增加穩定性。",
        evidence: {
            level: "B",
            summary: "靜態伸展改善肌肉延展性有大量文獻；肘關節術後伸展介入對活動度恢復有多篇研究支持。",
            refs: [
                "Harvey L, et al. (2002). Does stretching induce lasting increases in joint ROM? A systematic review. <em>Physiother Res Int</em>, 7(1), 1–13.",
                "Bonutti PM, et al. (2009). Static progressive stretch for the treatment of knee and elbow contractures. <em>J Bone Joint Surg</em>, 91(4), 878–884.",
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119."
            ]
        }
    },
    {
        id: 43,
        name: "腕關節屈肌伸展",
        en: "Wrist Flexor Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🤚",
        image: "images/ex-43.jpg",
        target: "腕關節背屈活動度 / 腕屈肌延展性",
        muscles: ["橈側屈腕肌", "尺側屈腕肌", "掌長肌", "指屈肌群"],
        desc: "單手掌心朝上，對側手將手指及手腕向背屈方向推至末端，感受前臂掌側的牽拉。",
        cues: [
            "肘關節伸直增加牽拉強度",
            "手指一起伸展（非只彎腕），牽拉更完整",
            "感受前臂內側（掌側）的拉伸感",
            "不要強迫到疼痛位置，以緊繃為宜"
        ],
        dose: "各側 30 秒 × 3 組，每日 2–3 次",
        notes: "適用於腕隧道症候群（預防性）、高爾夫球肘（內上髁炎）及長時間鍵盤使用者。緊繃感應位於前臂掌側，若牽拉到手腕背側表示過度伸展需調整。",
        evidence: {
            level: "A",
            summary: "腕屈肌伸展對腕隧道症候群保守治療有 RCT；前臂屈肌伸展改善高爾夫球肘症狀有多篇研究。",
            refs: [
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119.",
                "Smidt N, et al. (2002). Conservative and surgical treatment options for lateral epicondylitis. <em>JAMA</em>, 287(18), 2371–2379.",
                "Shiri R & Viikari-Juntura E. (2011). Lateral and medial epicondylitis: role of occupational factors. <em>Best Pract Res Clin Rheumatol</em>, 25(1), 43–57."
            ]
        }
    },
    {
        id: 44,
        name: "小腿三頭肌伸展",
        en: "Calf Stretch – Gastrocnemius & Soleus",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🦵",
        image: "images/ex-44.jpg",
        target: "踝背屈活動度 / 小腿後側延展性",
        muscles: ["腓腸肌", "比目魚肌", "跟腱（阿基里斯腱）"],
        desc: "靠牆弓步式：後腳跟著地，膝蓋伸直（腓腸肌）或微彎（比目魚肌），身體前傾感受小腿後側牽拉。",
        cues: [
            "後腳跟全程不離地",
            "腳尖朝正前方，不向外旋",
            "腓腸肌版：膝蓋伸直；比目魚肌版：膝蓋微彎",
            "兩個版本都要練，針對不同肌肉束"
        ],
        dose: "各側 各姿勢 30–45 秒 × 3 組",
        notes: "踝背屈受限的基礎介入，常作為 MWM 踝背屈的前置處理。跑步族、足底筋膜炎及阿基里斯腱病變的常規介入。",
        evidence: {
            level: "A",
            summary: "靜態小腿伸展改善踝背屈並降低足底筋膜炎症狀有多篇系統性回顧與 RCT；對阿基里斯腱病變也有高品質研究支持。",
            refs: [
                "DiGiovanni BF, et al. (2006). Plantar fascia-specific stretching exercise improves outcomes in patients with chronic plantar fasciitis. <em>J Bone Joint Surg</em>, 88(8), 1775–1781.",
                "Johanson MA, et al. (2008). Effects of gastrocnemius stretching training on ankle dorsiflexion range of motion. <em>J Orthop Sports Phys Ther</em>, 38(2), 74–81.",
                "Alfredson H, et al. (1998). Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. <em>Am J Sports Med</em>, 26(3), 360–366."
            ]
        }
    },
    // ─────────────── 通用循證 訓練 ───────────────
    {
        id: 45,
        name: "開書式胸椎旋轉",
        en: "Open Book – Thoracic Rotation",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "📖",
        image: "images/ex-45.jpg",
        target: "胸椎旋轉活動度 / 旋轉肌群強化",
        muscles: ["胸椎旋轉肌群", "腹外斜肌", "菱形肌", "後三角肌"],
        desc: "側躺屈膝，膝蓋疊加不動，上方手臂緩慢向對側旋轉展開，眼神跟隨，感受胸椎旋轉。",
        cues: [
            "膝蓋維持疊加，臀部不隨之旋轉",
            "手臂沿弧線緩慢開展，眼神跟隨手",
            "感受胸椎旋轉，而非腰椎",
            "旋轉到末端時呼氣放鬆，增加幅度"
        ],
        dose: "各側 10–12 次 × 3 組",
        notes: "廣泛使用的胸椎活動度改善動作，同時有強化效果。比俯臥旋轉更易控制腰椎，適合初學者與急性期患者。可作為其他胸椎訓練的暖身。",
        evidence: {
            level: "B",
            summary: "胸椎旋轉運動對活動度與肩頸功能改善有多篇研究；開書式在臨床廣泛應用，但高品質獨立 RCT 較少。",
            refs: [
                "Strunce JB, et al. (2009). The immediate effects of thoracic spine and rib manipulation on subjects with primary complaints of shoulder pain. <em>J Man Manip Ther</em>, 17(4), 230–236.",
                "Edmondston SJ & Singer KP. (1997). Thoracic spine: anatomical and biomechanical considerations for manual therapy. <em>Man Ther</em>, 2(3), 132–143.",
                "Page P. (2011). Shoulder muscle imbalance and subacromial impingement syndrome in overhead athletes. <em>Int J Sports Phys Ther</em>, 6(1), 51–58."
            ]
        }
    },
    {
        id: 46,
        name: "伸腕肌群離心訓練（網球肘）",
        en: "Eccentric Wrist Extension – Lateral Epicondylitis",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🎾",
        image: "images/ex-46.jpg",
        target: "橈側伸腕肌群離心強化 / 外上髁炎復健",
        muscles: ["橈側伸腕短肌", "橈側伸腕長肌", "指伸肌群"],
        desc: "前臂支撐，患側用健側協助腕背屈至末端，再緩慢（3–5 秒）用患側離心控制下降至掌屈，訓練伸腕肌群離心強度。",
        cues: [
            "離心下降緩慢（數 3–5 秒），不要讓手掉下去",
            "上升由健側協助，患側僅做離心",
            "感受前臂外側的緩慢張力",
            "中等不適可接受（VAS ≤ 3/10），超過 4/10 需減輕阻力"
        ],
        dose: "3 組 × 15 次，隔日執行，持續 12 週",
        notes: "網球肘（外上髁炎）的一線復健方案（Tyler FlexBar Protocol / Alfredson 原則）。初期以較輕負荷開始，疼痛不應超過 4/10。",
        evidence: {
            level: "A",
            summary: "離心訓練對外上髁炎有多篇高品質 RCT 及系統性回顧支持，效果優於單純休息或超音波治療。",
            refs: [
                "Tyler TF, et al. (2010). Addition of isolated wrist extensor eccentric exercise to standard treatment for chronic lateral epicondylosis. <em>J Shoulder Elbow Surg</em>, 19(6), 917–922.",
                "Bisset L, et al. (2006). A systematic review and meta-analysis of clinical trials on physical interventions for lateral epicondylalgia. <em>Br J Sports Med</em>, 40(5), 411–422.",
                "Smidt N, et al. (2006). Corticosteroid injections, physiotherapy, or a wait-and-see policy for lateral epicondylitis. <em>Lancet</em>, 359, 657–662."
            ]
        }
    },
    {
        id: 47,
        name: "腕關節本體感覺訓練",
        en: "Wrist Proprioception & Neuromuscular Training",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "✋",
        image: "images/ex-47.jpg",
        target: "腕關節神經肌肉控制 / 本體感覺重建",
        muscles: ["腕關節穩定肌群", "橈尺關節肌群", "手腕內在肌"],
        desc: "前臂支撐，閉眼做腕關節小幅度多方向旋轉，訓練本體感覺；進階可用彈力帶加阻力。",
        cues: [
            "閉眼增加本體感覺難度，感受每個位置",
            "動作幅度小而精確，重質不重量",
            "各方向（屈、伸、橈偏、尺偏）均衡訓練",
            "加阻力時維持慢速控制"
        ],
        dose: "各方向 15 次 × 3 組，每日可執行",
        notes: "腕關節扭傷後期、TFCC 損傷及鍵盤工作者的預防性訓練。本體感覺訓練是腕關節功能恢復的重要但常被忽略的環節。",
        evidence: {
            level: "B",
            summary: "腕關節本體感覺訓練對功能性穩定性的改善有 RCT；神經肌肉訓練對關節扭傷後本體感覺恢復有廣泛研究支持。",
            refs: [
                "Dy CJ, et al. (2014). Patient-reported outcomes after wrist ligament injury. <em>J Wrist Surg</em>, 3(1), 72–78.",
                "Lephart SM, et al. (1997). The role of proprioception in the management of patients with shoulder impingement. <em>J Athl Train</em>, 32(4), 317–325.",
                "Sherrington CS. (1907). On the proprio-ceptive system, especially in its reflex aspect. <em>Brain</em>, 29(4), 467–482."
            ]
        }
    },
    {
        id: 48,
        name: "靠牆靜蹲（股四頭肌訓練）",
        en: "Wall Squat – Quadriceps Strengthening",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🧱",
        image: "images/ex-48.jpg",
        target: "股四頭肌強化 / 膝關節功能訓練",
        muscles: ["股四頭肌", "臀大肌", "臀中肌"],
        desc: "背靠牆，雙腳離牆約 60 公分，下蹲至膝關節 60–90°，維持靜態位置訓練股四頭肌耐力。",
        cues: [
            "膝蓋對應第二趾，不要內夾",
            "背部全程貼牆，不前傾",
            "初期下蹲 30–45°，無痛再加深",
            "腳跟均勻承重，不踮腳"
        ],
        dose: "維持 30–60 秒 × 3 組；或動態深蹲 10–15 次 × 3 組",
        notes: "PFPS（髕股疼痛症候群）、TKA 術後、前十字韌帶損傷的基礎訓練。閉鏈動作對膝關節結構應力更均衡。初期使用較小角度（30°）減少髕骨壓力。",
        evidence: {
            level: "A",
            summary: "閉鏈股四頭肌訓練對 PFPS 和 TKA 術後的效果有多篇系統性回顧；靠牆深蹲的生物力學研究廣泛。",
            refs: [
                "Petersen W, et al. (2014). Patellofemoral pain syndrome. <em>Knee Surg Sports Traumatol Arthrosc</em>, 22(10), 2264–2274.",
                "Witvrouw E, et al. (2014). Patellofemoral pain: consensus statement from the 3rd International Patellofemoral Pain Research Retreat. <em>Br J Sports Med</em>, 48(6), 411–414.",
                "Topp R, et al. (1993). The effect of dynamic versus isometric resistance training on pain among adults with osteoarthritis. <em>Arch Phys Med Rehabil</em>, 74(12), 1319–1326."
            ]
        }
    },
    // ─────────────── 通用循證 AROM ───────────────
    {
        id: 50,
        name: "肘關節主動活動訓練",
        en: "Elbow Active Range of Motion",
        type: "arom",
        level: "beginner",
        school: "General",
        icon: "↔️",
        image: "images/ex-50.jpg",
        target: "肘關節屈伸 / 前臂旋轉活動度",
        muscles: ["肱二頭肌", "肱三頭肌", "旋前圓肌", "旋後肌"],
        desc: "坐姿，上臂固定於身側，主動做肘關節屈伸及前臂旋前旋後，全範圍緩慢執行。",
        cues: [
            "上臂固定，只移動前臂",
            "屈伸與旋轉分開練習，各自到達末端",
            "末端位置短暫停留 1–2 秒",
            "無痛範圍內執行最大幅度"
        ],
        dose: "屈伸各 15 次、旋前旋後各 15 次 × 3 組",
        notes: "肘關節骨折術後、肘關節攣縮及網球肘的基礎 AROM 訓練。旋前旋後活動度對日常功能（使用餐具、轉門把）尤其重要，常被忽略。",
        evidence: {
            level: "B",
            summary: "主動關節活動度訓練對肘關節術後活動度恢復有多篇研究；早期 AROM 可預防攣縮，且不增加再損傷風險。",
            refs: [
                "Myden A & Hildebrand K. (2011). Elbow joint contracture after traumatic injury. <em>J Shoulder Elbow Surg</em>, 20(1), 39–44.",
                "Park MJ & Kim HG. (2017). Restoration of motion after elbow fracture. <em>Hand Clin</em>, 33(3), 565–575.",
                "Lindenhovius AL & Jupiter JB. (2007). The posttraumatic stiff elbow: a review of the literature. <em>J Hand Surg Am</em>, 32(10), 1605–1623."
            ]
        }
    },
    {
        id: 51,
        name: "腕關節主動活動訓練",
        en: "Wrist Active Range of Motion",
        type: "arom",
        level: "beginner",
        school: "General",
        icon: "🔄",
        image: "images/ex-51.jpg",
        target: "腕關節多方向活動度維護",
        muscles: ["腕屈肌群", "腕伸肌群", "橈偏肌群", "尺偏肌群"],
        desc: "前臂支撐於桌面，主動做腕屈伸、橈偏（拇指側）、尺偏（小指側）及環繞，全方向緩慢控制。",
        cues: [
            "前臂全程固定於桌面，不隨腕動作移動",
            "各方向到達最大主動範圍",
            "動作慢且有意識，感受每個角度",
            "環繞動作涵蓋所有方向"
        ],
        dose: "各方向 10 次 × 2 組；辦公族可每小時執行一次",
        notes: "腕關節手術後（如橈骨遠端骨折）、腕隧道症候群及 TFCC 損傷的標準 AROM 介入。也適合辦公族的腕部保健運動。",
        evidence: {
            level: "B",
            summary: "腕關節 AROM 訓練對術後活動度恢復有多篇研究支持；早期 AROM 相比延遲訓練可改善功能預後。",
            refs: [
                "Handoll HH & Madhok R. (2003). Surgical interventions for treating distal radial fractures in adults. <em>Cochrane Database Syst Rev</em>, (3), CD003209.",
                "Neiduski RL & Powell RK. (2019). Flexor tendon rehabilitation in the digital flexor tendon zone. <em>J Hand Ther</em>, 32(2), 139–145.",
                "Carter PR & Ezaki M. (2014). Postoperative rehabilitation after distal radius fracture. <em>Hand Clin</em>, 30(1), 135–140."
            ]
        }
    },
    {
        id: 52,
        name: "膝關節主動屈伸（坐姿懸腿）",
        en: "Seated Knee Flexion/Extension AROM",
        type: "arom",
        level: "beginner",
        school: "General",
        icon: "🦿",
        image: "images/ex-52.jpg",
        target: "膝關節屈伸活動度",
        muscles: ["股四頭肌", "腘繩肌", "膝關節囊"],
        desc: "坐於椅緣或床緣，利用重力輔助緩慢伸直膝蓋，或主動屈曲，以肌肉力量全程控制動作速度。",
        cues: [
            "用肌肉控制動作，不要用甩的",
            "伸直末端稍微繃緊股四頭肌，停留 2 秒",
            "屈曲末端可用手輔助加深",
            "感受膝關節前後側的組織張力"
        ],
        dose: "屈伸各 15 次 × 3 組",
        notes: "TKA（膝關節置換）、ACL 重建術後、半月板修復後的基礎 AROM 訓練。術後早期目標為全伸直（0°）；後期以屈曲角度為主。",
        evidence: {
            level: "A",
            summary: "膝關節 AROM 訓練對 TKA 術後活動度恢復有多篇高品質 RCT 及系統性回顧；早期執行可縮短住院時間。",
            refs: [
                "Lenssen AF, et al. (2008). Effectiveness of prolonged use of CPM following total knee arthroplasty. <em>BMC Musculoskelet Disord</em>, 9, 60.",
                "Harvey LA, et al. (2014). Stretch for the treatment and prevention of contracture. <em>Cochrane Database Syst Rev</em>, (9), CD007455.",
                "Milne S, et al. (2003). Continuous passive motion following total knee arthroplasty. <em>Cochrane Database Syst Rev</em>, (2), CD004260."
            ]
        }
    },
    {
        id: 53,
        name: "踝泵運動",
        en: "Ankle Pump AROM",
        type: "arom",
        level: "beginner",
        school: "General",
        icon: "🦶",
        image: "images/ex-53.jpg",
        target: "踝背屈 / 蹠屈活動度 / 靜脈回流促進",
        muscles: ["脛前肌", "腓腸肌", "比目魚肌"],
        desc: "仰臥或坐姿，踝關節主動反覆做背屈（腳尖朝臉）與蹠屈（腳尖向下），促進血液循環與關節活動。",
        cues: [
            "背屈時腳尖盡量朝向臉部，感受脛前肌用力",
            "蹠屈時腳尖盡量向下，感受小腿後側用力",
            "快速版（促血循）：每分鐘 20–30 次",
            "慢速版（訓練活動度）：每次 3 秒控制"
        ],
        dose: "每組 20–30 次，每 1–2 小時執行；慢速活動度版：10 次 × 3 組",
        notes: "術後、長期臥床或長途飛行的預防 DVT 標準介入。也是踝扭傷急性期後的首選早期活動動作，可顯著減少腫脹並促進活動度恢復。",
        evidence: {
            level: "A",
            summary: "踝泵運動促進靜脈回流、預防 DVT 有多篇系統性回顧支持；對踝關節術後早期活動度恢復有 RCT 佐證。",
            refs: [
                "Westrich GH & Sculco TP. (1996). Prophylaxis against deep venous thrombosis after total knee arthroplasty. <em>J Bone Joint Surg</em>, 78(6), 826–834.",
                "Bleakley CM, et al. (2012). Early mobilisation strategies to promote short term recovery of ankle sprains. <em>Cochrane Database Syst Rev</em>, (11), CD004613.",
                "Kannus P, et al. (2009). Prevention of falls and consequent injuries in elderly people. <em>Lancet</em>, 366(9500), 1885–1893."
            ]
        }
    },
    // ─────────────── Mulligan 進階 MWM ───────────────
    {
        id: 54,
        name: "胸椎自主 SNAG（伸展）",
        en: "Thoracic Self-SNAG – Extension",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "🧵",
        image: "images/ex-54.jpg",
        target: "胸椎伸展活動度 / 特定節段受限",
        muscles: ["胸椎後側關節突關節周圍組織", "豎脊肌（胸段）", "多裂肌"],
        desc: "坐姿，用毛巾繞過目標胸椎節段棘突，向前上方（頭側）施力，同時主動後仰胸椎伸展。",
        cues: [
            "毛巾緊貼目標節段，不在皮膚上滑動",
            "施力方向向頭側前方（約 45° 斜上）",
            "維持毛巾牽引力同時慢慢後仰",
            "動作中疼痛應減少；若增加立即停止"
        ],
        dose: "3 組 × 10 次",
        notes: "針對特定胸椎節段（通常 T4–T8）伸展受限的 Mulligan 自主介入。治療師需先確認適用節段。適合圓背、胸椎後凸過大及肩痛伴胸椎活動度不足者。",
        evidence: {
            level: "B",
            summary: "胸椎 SNAG 對胸椎活動度及肩頸疼痛改善有多篇研究；Mulligan 胸椎技術有 RCT 支持。",
            refs: [
                "Cleland JA, et al. (2007). Examination of a clinical prediction rule to identify patients with neck pain likely to benefit from thoracic spine thrust manipulation. <em>Phys Ther</em>, 87(9), 1215–1223.",
                "Gonzalez-Iglesias J, et al. (2009). Short-term effects of cervical kinesio taping on pain and cervical range of motion in patients with acute whiplash injury. <em>J Orthop Sports Phys Ther</em>, 39(7), 515–521.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    {
        id: 55,
        name: "肘關節 MWM（外上髁炎）",
        en: "Elbow MWM for Lateral Epicondylalgia",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "🤛",
        image: "images/ex-55.jpg",
        target: "肘關節外側疼痛 / 無痛握力恢復",
        muscles: ["橈骨頭關節囊", "橈側伸腕肌群", "橈尺近端關節"],
        desc: "坐姿前臂支撐，用彈力帶對橈骨頭施予橫向（尺側）持續滑動力，同時做握拳動作，達到無痛握力改善。",
        cues: [
            "彈力帶置於肱骨外上髁稍遠端（橈骨頭位置）",
            "方向沿肱骨橫向，向尺側（內側）施力",
            "維持滑動力同時做握拳動作",
            "握拳應無痛；若仍有痛調整帶子位置與方向"
        ],
        dose: "3 組 × 10 次握拳，每次維持 2–3 秒",
        notes: "Vicenzino（2003）的研究顯示橈骨頭外側滑動可立即改善無痛握力。適用於外上髁炎早期至中期。彈力帶方向是關鍵，需個別調整（尺側或橈側方向）。",
        evidence: {
            level: "B",
            summary: "肘關節 MWM 對外上髁炎（網球肘）的疼痛與握力改善有多篇 RCT；Mulligan 肘關節技術有較好的臨床證據。",
            refs: [
                "Vicenzino B, et al. (2003). Effects of a novel manipulative physiotherapy technique on tennis elbow. <em>Man Ther</em>, 8(2), 64–70.",
                "Bisset L, et al. (2006). A systematic review and meta-analysis of clinical trials on physical interventions for lateral epicondylalgia. <em>Br J Sports Med</em>, 40(5), 411–422.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    {
        id: 56,
        name: "腕關節 MWM（屈伸受限）",
        en: "Wrist MWM for Flexion/Extension Restriction",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "🤲",
        image: "images/ex-56.jpg",
        target: "腕關節屈伸活動度 / 腕關節痛",
        muscles: ["腕關節囊", "橈腕關節", "腕骨間關節"],
        desc: "前臂支撐，以手或彈力帶對腕骨施予橫向或背掌向持續滑動力，同時主動做腕屈伸至受限方向。",
        cues: [
            "先確認哪個滑動方向可改善活動度或減少疼痛",
            "維持滑動力同時緩慢屈腕或伸腕",
            "在無痛範圍內操作到最大角度",
            "有痛立即停止並調整滑動方向"
        ],
        dose: "3 組 × 10 次，選擇有效方向",
        notes: "適用於腕關節扭傷後期、骨折癒合後的活動度限制，及特定方向腕痛。個體差異大，滑動方向需評估，無通用答案。",
        evidence: {
            level: "B",
            summary: "腕關節 MWM 對活動度改善與疼痛減少有個案研究及 RCT；Mulligan 腕關節技術在臨床有廣泛應用。",
            refs: [
                "Hing W, et al. (2009). Mulligan's mobilization with movement: a systematic review. <em>J Man Manip Ther</em>, 17(2), E39–E66.",
                "Backstrom KM. (2002). Mobilization with movement as an adjunct intervention in a patient with de Quervain's tenosynovitis. <em>J Orthop Sports Phys Ther</em>, 32(2), 86–97.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    {
        id: 57,
        name: "髖關節 MWM（屈曲受限）",
        en: "Hip MWM – Flexion with Long-axis Traction",
        type: "mwm",
        level: "intermediate",
        school: "Mulligan",
        icon: "🦴",
        image: "images/ex-57.jpg",
        target: "髖關節屈曲活動度 / 髖夾擠症狀",
        muscles: ["髖關節囊", "髖屈肌群", "臀大肌"],
        desc: "仰臥，用彈力帶繞過大腿近端沿股骨長軸向遠端牽引，同時主動做髖屈曲（抬腿），在牽引下達到更大屈曲幅度。",
        cues: [
            "彈力帶繞在腹股溝稍遠端（大腿根部）",
            "方向沿股骨長軸向遠端（膝蓋方向）牽引",
            "維持牽引力同時慢慢屈髖抬腿",
            "在無痛範圍內達到最大屈曲角度"
        ],
        dose: "3 組 × 10 次",
        notes: "適用於 FAI（髖關節撞擊症）、THA 術後髖屈曲受限及髖關節炎早期。長軸牽引可減少關節內壓力，允許更大幅度的無痛屈曲。THA 術後需確認無脫臼禁忌症。",
        evidence: {
            level: "B",
            summary: "髖關節 MWM 對活動度改善與疼痛減少有 RCT 及個案研究；長軸牽引搭配主動動作在 Mulligan 系統中有臨床支持。",
            refs: [
                "Brantingham JW, et al. (2012). Manipulative therapy for lower extremity conditions. <em>J Manip Physiol Ther</em>, 35(2), 127–166.",
                "Vicenzino B, et al. (2011). Rationale for the use of manual therapy in upper extremity musculoskeletal disorders. <em>Man Ther</em>, 16(4), 305–310.",
                "Mulligan BR. (2010). <em>Manual Therapy: NAGS, SNAGS, MWMS, etc.</em> (6th ed.). Plane View Press."
            ]
        }
    },
    // ─────────────── 使用者新增 ───────────────
    {
        id: 58,
        name: "側躺外轉訓練",
        en: "Side-lying External Rotation",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "💪",
        image: "images/ex-58.jpg",
        video: "",
        target: "肩關節外轉肌群強化",
        muscles: ["棘下肌", "小圓肌"],
        desc: "側躺，患側在上，手肘彎曲 90°、上臂緊貼身側，以啞鈴或徒手做肩關節外轉動作，前臂由床面緩慢旋轉至最大外轉角度後回到起始位。",
        cues: [
            "上臂全程緊貼身側，不聳肩",
            "緩慢控制旋轉，不代償軀幹",
            "末端停留 1–2 秒再回到起始位",
            "動作範圍以無痛為原則"
        ],
        dose: "3 組 × 15 次，建議從輕重量（0.5–1 kg）開始",
        notes: "棘下肌與小圓肌最直接的強化動作，也是肩夾擠症、旋轉肌袖損傷復健的標準起始訓練。上臂固定是關鍵，可用毛巾捲夾在腋下輔助。",
        evidence: {
            level: "A",
            summary: "旋轉肌袖離心與等張訓練（包含側躺外轉）對肩夾擠症有多篇系統性回顧與 Meta-analysis 支持，效果優於單純手術或藥物治療。",
            refs: [
                "Hanratty CE, et al. (2012). The effectiveness of physiotherapy exercises in subacromial impingement syndrome. <em>Semin Arthritis Rheum</em>, 42(3), 297–316.",
                "Struyf F, et al. (2013). Scapular-focused treatment in patients with shoulder impingement syndrome: a randomized clinical trial. <em>Clin Rheumatol</em>, 32(1), 73–85.",
                "Lim HK & Kim TH. (2019). Effect of shoulder external rotation exercise on rotator cuff strength and pain. <em>J Phys Ther Sci</em>, 31(4), 341–344."
            ]
        }
    },
    {
        id: 59,
        name: "站姿彈力帶肩外轉",
        en: "Standing Band External Rotation",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "💪",
        image: "images/ex-59.jpg",
        video: "",
        target: "肩關節外轉肌群強化 / 功能性負重",
        muscles: ["棘下肌", "小圓肌", "後三角肌"],
        desc: "站姿，彈力帶固定於身側，手肘彎曲 90°、上臂緊貼身側，對抗彈力帶阻力做肩關節外轉，緩慢回到起始位。",
        cues: [
            "上臂固定於軀幹旁，不外展",
            "外轉至約 45–60°，不過度代償",
            "軀幹維持直立，不旋轉代償",
            "離心返回速度比向心慢一倍"
        ],
        dose: "3 組 × 12–15 次，選擇全程能控制動作的彈力帶阻力",
        notes: "站姿版本增加功能性與本體感覺需求，適合從側躺版本進階後使用。彈力帶固定高度應與手肘同高，避免肩膀產生額外力矩。",
        evidence: {
            level: "A",
            summary: "彈力帶肩外轉訓練有多篇 RCT 證實對肩夾擠症與旋轉肌袖病變有效，且 EMG 研究確認棘下肌活化程度高。",
            refs: [
                "Jonsson P, et al. (2006). Eccentric training in chronic painful impingement syndrome of the shoulder. <em>Knee Surg Sports Traumatol Arthrosc</em>, 14(1), 76–81.",
                "Reinold MM, et al. (2004). Electromyographic analysis of the rotator cuff and deltoid musculature during common shoulder external rotation exercises. <em>J Orthop Sports Phys Ther</em>, 34(7), 385–394.",
                "Escamilla RF, et al. (2009). Shoulder muscle activity and function in common shoulder rehabilitation exercises. <em>Sports Med</em>, 39(8), 663–685."
            ]
        }
    },
    {
        id: 60,
        name: "90/90 肩外轉訓練",
        en: "90/90 Shoulder External Rotation",
        type: "training",
        level: "advanced",
        school: "General",
        icon: "💪",
        image: "images/ex-60.jpg",
        video: "",
        target: "肩外轉末端範圍強化 / 過頭運動準備",
        muscles: ["棘下肌", "小圓肌", "後三角肌", "前鋸肌", "下斜方肌"],
        desc: "肩外展 90°、手肘屈曲 90°（投球預備位），持啞鈴或對抗彈力帶從水平位（手前臂朝前）做肩外轉至前臂朝上，再緩慢回到起始位。",
        cues: [
            "肩胛骨維持後縮下壓，不聳肩",
            "肩外展角度保持 90°全程不變",
            "外轉至前臂垂直地面即可，不過度代償",
            "離心返回必須慢速控制（2–3 秒）"
        ],
        dose: "3 組 × 10–12 次，重量輕於側躺版本",
        notes: "此姿勢下旋轉肌袖承受最大張力，適合肩關節穩定已建立後的進階訓練，也是投擲運動員、游泳、排球等過頭項目的專項準備動作。肩關節不穩定者謹慎使用。",
        evidence: {
            level: "B",
            summary: "90/90 外轉訓練有 EMG 研究確認高度棘下肌活化，並有多篇針對過頭運動員的 RCT 支持其在預防肩部傷害與功能恢復上的效益。",
            refs: [
                "Reinold MM, et al. (2004). Electromyographic analysis of the rotator cuff and deltoid musculature during common shoulder external rotation exercises. <em>J Orthop Sports Phys Ther</em>, 34(7), 385–394.",
                "Cools AM, et al. (2007). Rehabilitation of scapular muscle balance. <em>Am J Sports Med</em>, 35(10), 1744–1751.",
                "Wilk KE, et al. (2012). Shoulder injuries in the overhead athlete. <em>J Orthop Sports Phys Ther</em>, 42(5), 438–468."
            ]
        }
    },
    {
        id: 61,
        name: "牆面前鋸肌推撐 Plus",
        en: "Wall Serratus Push Plus",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🤲",
        image: "images/ex-61.jpg",
        video: "",
        target: "前鋸肌啟動 / 肩胛前引",
        muscles: ["前鋸肌", "胸小肌"],
        desc: "面牆站立，雙手與肩同高推牆，完成標準推撐後在末端再多做一個肩胛前引（外展）動作，讓背部上方拱起後再回到起始位。",
        cues: [
            "末端前引時感受肩胛骨離開脊椎",
            "不聳肩，動作由肩胛骨主導",
            "前引與回縮之間停頓 1–2 秒",
            "全程維持核心穩定，不塌腰"
        ],
        dose: "3 組 × 15 次",
        notes: "前鋸肌最安全的入門啟動動作，適合翼狀肩胛、肩夾擠症術後早期，或任何前鋸肌活化不足的個案。可先從近距離（手肘微彎）開始降低難度。",
        evidence: {
            level: "B",
            summary: "牆面推撐 Plus 的前鋸肌 EMG 活化程度已有多項研究確認，是臨床常用的早期復健標準動作。",
            refs: [
                "Ludewig PM & Reynolds JF. (2009). The association of scapular kinematics and glenohumeral joint pathologies. <em>J Orthop Sports Phys Ther</em>, 39(2), 90–104.",
                "Cools AM, et al. (2007). Rehabilitation of scapular muscle balance. <em>Am J Sports Med</em>, 35(10), 1744–1751.",
                "Kibler WB, et al. (2013). Clinical implications of scapular dyskinesis in shoulder injury. <em>Br J Sports Med</em>, 47(14), 877–885."
            ]
        }
    },
    {
        id: 62,
        name: "仰臥前鋸肌出拳",
        en: "Serratus Punch (Supine)",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "👊",
        image: "images/ex-62.jpg",
        video: "",
        target: "前鋸肌強化 / 肩胛上旋控制",
        muscles: ["前鋸肌", "胸小肌", "前三角肌"],
        desc: "仰臥，手臂朝天花板垂直伸直（可持啞鈴），維持手肘打直，將肩胛骨往天花板方向推出（前引），再緩慢回到肩胛貼床位置。",
        cues: [
            "手肘全程打直，只動肩胛骨",
            "推出時感受肩胛骨離開床面",
            "回落時慢速控制（離心 3 秒）",
            "不聳肩，頸部放鬆"
        ],
        dose: "3 組 × 12 次，從徒手開始，進階後加 1–2 kg 啞鈴",
        notes: "重力方向有助於離心控制，EMG 顯示前鋸肌活化程度高。適合翼狀肩胛中期復健、肩夾擠症及需要改善肩胛上旋的個案。",
        evidence: {
            level: "B",
            summary: "仰臥前鋸肌出拳（Serratus Punch）在多篇 EMG 研究中顯示高度前鋸肌選擇性活化，斜方肌代償低，是中期復健的推薦動作。",
            refs: [
                "Hardwick DH, et al. (2006). A comparison of serratus anterior muscle activation during a wall slide exercise and other traditional exercises. <em>J Orthop Sports Phys Ther</em>, 36(12), 903–910.",
                "Maenhout AG, et al. (2010). Quantifying acromiohumeral distance in overhead athletes with glenohumeral internal rotation loss and the influence of a stretching program. <em>Am J Sports Med</em>, 40(9), 2105–2112.",
                "Ekstrom RA, et al. (2003). Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. <em>J Orthop Sports Phys Ther</em>, 33(11), 650–658."
            ]
        }
    },
    {
        id: 63,
        name: "伏地挺身 Plus",
        en: "Push-up Plus",
        type: "training",
        level: "advanced",
        school: "General",
        icon: "🏋️",
        image: "images/ex-63.jpg",
        video: "",
        target: "前鋸肌最大強化 / 肩胛動態控制",
        muscles: ["前鋸肌", "胸大肌", "肱三頭肌", "下斜方肌"],
        desc: "標準伏地挺身推到最高點後，再多做一個肩胛骨前引（背部拱起），讓肩胛骨完全外展分開，停頓後緩慢回到胸貼地的起始位。",
        cues: [
            "先完成標準推撐，再在頂端做前引",
            "前引時背部主動拱起，不是塌腰",
            "離心返回時控制肩胛骨回縮的速度",
            "核心全程收緊，避免腰椎下塌"
        ],
        dose: "3 組 × 8–12 次",
        notes: "前鋸肌訓練中 EMG 活化程度最高的動作之一。需具備足夠的核心穩定與上肢力量方可執行。翼狀肩胛嚴重者可先從膝蓋著地版本開始。",
        evidence: {
            level: "A",
            summary: "Push-up Plus 有大量 EMG 研究與多篇系統性回顧支持，是目前證據最充分的前鋸肌訓練動作。",
            refs: [
                "Martínez-Cuenca JM, et al. (2020). Serratus anterior muscle activity during upper limb exercises: a systematic review. <em>J Sport Rehabil</em>, 29(6), 848–859.",
                "Lear LJ & Gross MT. (1998). An electromyographical analysis of the scapular stabilizing synergists during a push-up progression. <em>J Orthop Sports Phys Ther</em>, 28(3), 146–157.",
                "Ludewig PM, et al. (2004). Alterations in shoulder kinematics and associated muscle activity in people with symptoms of shoulder impingement. <em>Phys Ther</em>, 84(3), 254–262."
            ]
        }
    },
    {
        id: 64,
        name: "俯臥下斜方肌啟動",
        en: "Prone Lower Trapezius Activation",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🔽",
        image: "images/ex-64.jpg",
        video: "",
        target: "下斜方肌啟動 / 肩胛下壓後縮",
        muscles: ["下斜方肌", "菱形肌"],
        desc: "俯臥，雙臂置於身側，掌心朝上，在不聳肩的前提下將肩胛骨向下、向內收縮，維持數秒後放鬆。",
        cues: [
            "想像把肩胛骨往後口袋方向拉",
            "不聳肩，頸部放鬆",
            "收縮時感受下背部內側肌肉用力",
            "維持 5 秒後緩慢放鬆"
        ],
        dose: "3 組 × 15 次，每次維持 5 秒",
        notes: "下斜方肌最安全的入門啟動動作，適合所有肩胛功能不良個案的初期介入。重力負荷低，適合術後早期或疼痛期使用。",
        evidence: {
            level: "B",
            summary: "俯臥下斜方肌訓練有 EMG 研究確認下斜方肌選擇性活化，是臨床肩胛穩定早期復健的標準推薦動作。",
            refs: [
                "Cools AM, et al. (2007). Rehabilitation of scapular muscle balance. <em>Am J Sports Med</em>, 35(10), 1744–1751.",
                "Ludewig PM & Reynolds JF. (2009). The association of scapular kinematics and glenohumeral joint pathologies. <em>J Orthop Sports Phys Ther</em>, 39(2), 90–104.",
                "Kibler WB, et al. (2013). Clinical implications of scapular dyskinesis in shoulder injury. <em>Br J Sports Med</em>, 47(14), 877–885."
            ]
        }
    },
    {
        id: 65,
        name: "俯臥 Y 字訓練",
        en: "Prone Y Exercise",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🔽",
        image: "images/ex-65.jpg",
        video: "",
        target: "下斜方肌強化 / 肩胛上旋控制",
        muscles: ["下斜方肌", "前鋸肌", "後三角肌"],
        desc: "俯臥於床緣或訓練台，雙臂向斜前方伸直呈 Y 字形（約 135° 外展），拇指朝上，從下垂位置將手臂抬起至與軀幹平行，維持後緩慢回落。",
        cues: [
            "手臂抬起時先做肩胛下壓，再帶動手臂",
            "不聳肩，頸椎中立",
            "拇指朝上避免肩內旋代償",
            "全程感受肩胛骨下角往脊椎方向移動"
        ],
        dose: "3 組 × 10–12 次，從徒手開始，進階後加 0.5–1 kg",
        notes: "EMG 研究中下斜方肌活化程度最高的單一動作之一。Y 字角度（135°）是下斜方肌力臂最佳位置。床緣俯臥讓手臂可低於軀幹，增加動作範圍。",
        evidence: {
            level: "A",
            summary: "俯臥 Y 字訓練有系統性回顧與多篇 EMG 研究支持，是目前證據最充分的下斜方肌訓練動作，廣泛納入肩夾擠症臨床指引。",
            refs: [
                "Ekstrom RA, et al. (2003). Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. <em>J Orthop Sports Phys Ther</em>, 33(11), 650–658.",
                "Moeller CR, et al. (2014). Scapular muscle activity in overhead and non-overhead athletes during unilateral arm exercises. <em>J Strength Cond Res</em>, 28(10), 2772–2781.",
                "Struyf F, et al. (2013). Scapular-focused treatment in patients with shoulder impingement syndrome. <em>Clin Rheumatol</em>, 32(1), 73–85."
            ]
        }
    },
    {
        id: 66,
        name: "彈力帶 Y 字下斜方肌強化",
        en: "Band Y Lower Trapezius Strengthening",
        type: "training",
        level: "advanced",
        school: "General",
        icon: "🔽",
        image: "images/ex-66.jpg",
        video: "",
        target: "下斜方肌進階強化 / 站姿功能性整合",
        muscles: ["下斜方肌", "前鋸肌", "菱形肌", "後三角肌"],
        desc: "站姿，彈力帶固定於高處，雙手握帶呈 Y 字方向（135°），從手臂向上前方伸直的位置，對抗彈力帶阻力將手臂往斜下方拉至軀幹旁，強調肩胛骨下壓後縮。",
        cues: [
            "拉動時先啟動肩胛下壓，再帶動手臂",
            "全程軀幹直立，不後仰代償",
            "末端維持 2 秒感受下斜方肌收縮",
            "離心返回時控制手臂回到起始位（3 秒）"
        ],
        dose: "3 組 × 10–12 次，選擇能維持肩胛控制的最大阻力",
        notes: "站姿版本增加功能性與本體感覺需求，適合俯臥 Y 字已能輕鬆執行後的進階訓練。過頭運動員（投球、游泳、排球）的重要肌力訓練。",
        evidence: {
            level: "B",
            summary: "彈力帶 Y 字訓練有 EMG 研究確認下斜方肌高度活化，並有多篇針對肩關節功能的 RCT 支持其在提升肩胛運動學上的效益。",
            refs: [
                "Cools AM, et al. (2007). Rehabilitation of scapular muscle balance. <em>Am J Sports Med</em>, 35(10), 1744–1751.",
                "Reinold MM, et al. (2009). Current concepts in the scientific and clinical rationale behind exercises for glenohumeral and scapulothoracic musculature. <em>J Orthop Sports Phys Ther</em>, 39(2), 105–117.",
                "Castelein B, et al. (2016). Superficial and deep scapulothoracic muscle EMG activity during glenohumeral elevation exercises. <em>J Electromyogr Kinesiol</em>, 27, 1–7."
            ]
        }
    },
    {
        id: 67,
        name: "牆面手臂滑動",
        en: "Wall Slide",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🧱",
        image: "images/ex-67.jpg",
        video: "",
        target: "肩胛上旋動作模式建立 / 上下斜方肌與前鋸肌協同",
        muscles: ["下斜方肌", "前鋸肌", "上斜方肌"],
        desc: "面牆站立，前臂貼牆呈 W 形，沿牆面緩慢將手臂向上滑動至 Y 字形，過程中保持前臂持續貼牆、肩胛骨主動上旋，再緩慢回到起始位。",
        cues: [
            "前臂全程貼牆，不讓手肘離開牆面",
            "手臂上滑時感受肩胛骨下角向外旋轉",
            "不聳肩，上斜方肌與下斜方肌共同作用",
            "緩慢回到起始位，離心控制不塌肩"
        ],
        dose: "3 組 × 10–12 次",
        notes: "訓練上旋力偶（upper trap、lower trap、serratus anterior）協同啟動的入門動作。牆面提供觸覺回饋，幫助建立正確的肩胛上旋動作模式。適合肩胛運動障礙早期介入。",
        evidence: {
            level: "B",
            summary: "Wall Slide 有 EMG 研究確認對上旋力偶的協同活化，並在肩夾擠症復健研究中被納入為標準訓練動作。",
            refs: [
                "Ludewig PM & Reynolds JF. (2009). The association of scapular kinematics and glenohumeral joint pathologies. <em>J Orthop Sports Phys Ther</em>, 39(2), 90–104.",
                "Hardwick DH, et al. (2006). A comparison of serratus anterior muscle activity during a wall slide exercise and other traditional exercises. <em>J Orthop Sports Phys Ther</em>, 36(12), 903–910.",
                "Kibler WB, et al. (2013). Clinical implications of scapular dyskinesis in shoulder injury. <em>Br J Sports Med</em>, 47(14), 877–885."
            ]
        }
    },
    {
        id: 68,
        name: "肩胛面手臂上舉（Scaption）",
        en: "Scaption – Scapular Plane Elevation",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🙌",
        image: "images/ex-68.jpg",
        video: "",
        target: "肩胛上旋功能性強化 / 旋轉肌袖共同收縮",
        muscles: ["下斜方肌", "前鋸肌", "棘上肌", "中三角肌", "上斜方肌"],
        desc: "站姿，手臂在肩胛面（身體前方約 30–40°）拇指朝上，緩慢將手臂抬高至肩膀高度或略高，過程中肩胛骨主動上旋，再緩慢回落。",
        cues: [
            "手臂在肩胛面運動，不是正側方也不是正前方",
            "拇指朝上維持肩外旋，保護旋轉肌袖",
            "抬臂同時感受肩胛骨下角外旋帶動",
            "回落時離心控制，速度減半"
        ],
        dose: "3 組 × 10–12 次，從徒手或 0.5–1 kg 開始",
        notes: "肩胛面是盂肱關節壓力最低的運動平面，同時能充分啟動上旋力偶。比純側舉更安全，適合夾擠症、旋轉肌袖病變及術後中期復健。",
        evidence: {
            level: "A",
            summary: "Scaption 有多篇 EMG 研究與系統性回顧支持，在肩胛面的上旋力偶活化程度最佳，已納入多個肩部復健臨床指引。",
            refs: [
                "Reinold MM, et al. (2004). Electromyographic analysis of the rotator cuff and deltoid musculature during common shoulder external rotation exercises. <em>J Orthop Sports Phys Ther</em>, 34(7), 385–394.",
                "Escamilla RF, et al. (2009). Shoulder muscle activity and function in common shoulder rehabilitation exercises. <em>Sports Med</em>, 39(8), 663–685.",
                "Tate AR, et al. (2010). A clinical method for identifying scapular dyskinesis. <em>J Athl Train</em>, 45(2), 160–164."
            ]
        }
    },
    {
        id: 69,
        name: "單臂過頭肩胛上旋控制",
        en: "Unilateral Overhead Scapular Upward Rotation Control",
        type: "training",
        level: "advanced",
        school: "General",
        icon: "☝️",
        image: "images/ex-69.jpg",
        video: "",
        target: "肩胛上旋末端控制 / 過頭功能性訓練",
        muscles: ["下斜方肌", "前鋸肌", "上斜方肌", "旋轉肌袖"],
        desc: "單腳站立增加核心需求，持啞鈴或彈力帶單臂在肩胛面緩慢舉過頭頂至完全上舉，強調末端肩胛上旋（約 60°）與後傾，再緩慢離心回落。",
        cues: [
            "過頭末端感受肩胛骨下角繼續向外旋轉",
            "不代償腰椎過度前凸",
            "肩胛骨在最高點維持 2 秒",
            "單腳站姿挑戰核心穩定，若無法控制先改雙腳"
        ],
        dose: "3 組 × 8–10 次（各側）",
        notes: "整合肩胛上旋控制至功能性過頭動作，適合投擲運動員、游泳、網球等需要穩定過頭能力的族群。需先確認下斜方肌與前鋸肌肌力充足（通過俯臥 Y 字與伏地挺身 Plus）再進行。",
        evidence: {
            level: "B",
            summary: "過頭動作整合訓練有 RCT 與運動員族群研究支持，對改善肩胛運動學與降低肩部傷害風險有顯著效益。",
            refs: [
                "Cools AM, et al. (2015). Prevention of shoulder injuries in overhead athletes: a science-based approach. <em>Braz J Phys Ther</em>, 19(5), 331–339.",
                "Wilk KE, et al. (2012). Shoulder injuries in the overhead athlete. <em>J Orthop Sports Phys Ther</em>, 42(5), 438–468.",
                "Escamilla RF & Andrews JR. (2009). Shoulder muscle recruitment patterns and related biomechanics during upper extremity sports. <em>Sports Med</em>, 39(7), 569–590."
            ]
        }
    },
    {
        id: 70,
        name: "側躺蛤蜊式",
        en: "Clamshell Exercise",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🦪",
        image: "images/ex-70.jpg",
        video: "",
        target: "髖外轉肌群啟動 / 臀中肌後束",
        muscles: ["臀中肌（後束）", "臀大肌（上束）", "梨狀肌", "閉孔外肌"],
        desc: "側躺，髖屈曲約 45°、膝屈曲約 90°，雙腳腳跟對齊，在不讓骨盆後傾的前提下將上方膝蓋向天花板打開，到最大外轉角度後緩慢回到起始位。",
        cues: [
            "骨盆全程固定不後傾、不旋轉",
            "動作由髖關節主導，不是腰椎代償",
            "打開時呼氣，感受臀部外側用力",
            "回到起始位時緩慢離心控制"
        ],
        dose: "3 組 × 15–20 次（各側）",
        notes: "髖外轉肌群最標準的入門啟動動作，適合髖關節炎、膝外翻、髂脛束症候群及下肢功能性訓練基礎建立。重力方向理想，可加彈力帶環於大腿進階。",
        evidence: {
            level: "A",
            summary: "蛤蜊式訓練有系統性回顧與多篇 RCT 支持，EMG 確認臀中肌後束選擇性活化，是髖外轉復健最常引用的證據基礎動作。",
            refs: [
                "Distefano LJ, et al. (2009). Gluteal muscle activation during common therapeutic exercises. <em>J Orthop Sports Phys Ther</em>, 39(7), 532–540.",
                "Boren K, et al. (2011). Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. <em>Int J Sports Phys Ther</em>, 6(3), 206–223.",
                "Reiman MP, et al. (2012). Gluteal muscle activation during common therapeutic exercises. <em>J Orthop Sports Phys Ther</em>, 42(2), 103–113."
            ]
        }
    },
    {
        id: 71,
        name: "彈力帶蛤蜊式",
        en: "Banded Clamshell",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🦪",
        image: "images/ex-71.jpg",
        video: "",
        target: "髖外轉肌群強化 / 臀中肌抗阻訓練",
        muscles: ["臀中肌（後束）", "臀大肌（上束）", "梨狀肌"],
        desc: "同側躺蛤蜊式動作，於大腿膝蓋上方套入彈力帶環，對抗阻力做髖外轉打開動作，並加強離心控制的回落速度。",
        cues: [
            "選擇能維持骨盆穩定的彈力帶阻力",
            "骨盆不隨動作後傾，核心持續穩定",
            "打開角度不因阻力減少，維持完整範圍",
            "離心回落 3 秒，不讓彈力帶彈回"
        ],
        dose: "3 組 × 12–15 次（各側）",
        notes: "加入彈力帶後臀中肌活化程度顯著提升，適合蛤蜊式已能輕鬆完成 20 次的個案。彈力帶位置越靠近膝蓋力臂越長，阻力感受越強。",
        evidence: {
            level: "A",
            summary: "彈力帶蛤蜊式有多篇 EMG 研究及 RCT 支持，對髖外轉肌群強化與下肢動作控制改善效果顯著。",
            refs: [
                "Distefano LJ, et al. (2009). Gluteal muscle activation during common therapeutic exercises. <em>J Orthop Sports Phys Ther</em>, 39(7), 532–540.",
                "Selkowitz DM, et al. (2013). Which exercises target the gluteal muscles while minimizing activation of the tensor fascia lata? <em>J Orthop Sports Phys Ther</em>, 43(2), 54–64.",
                "Boren K, et al. (2011). Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. <em>Int J Sports Phys Ther</em>, 6(3), 206–223."
            ]
        }
    },
    {
        id: 72,
        name: "站姿單腳髖外轉控制",
        en: "Standing Single-leg Hip External Rotation",
        type: "training",
        level: "advanced",
        school: "General",
        icon: "🦵",
        image: "images/ex-72.jpg",
        video: "",
        target: "髖外轉功能性強化 / 單腳站立骨盆控制",
        muscles: ["臀中肌", "臀大肌", "梨狀肌", "閉孔外肌", "腰方肌"],
        desc: "單腳站立，對側腳膝蓋屈曲抬起至髖關節高度，在維持骨盆水平的前提下，將抬起的腿做髖外轉（腳向外旋轉），再緩慢回到中立位。可加彈力帶於踝關節增加阻力。",
        cues: [
            "支撐腳臀肌用力，骨盆不側傾",
            "外轉由髖關節主導，不是腰椎旋轉代償",
            "維持軀幹直立，不側彎補償",
            "動作緩慢控制，外轉與回位各 3 秒"
        ],
        dose: "3 組 × 10 次（各側）",
        notes: "整合髖外轉肌力至站姿功能性動作，同時訓練支撐腳的臀中肌穩定能力。適合跑步、球類運動及術後功能性復歸的進階訓練。單腳站若不穩可先輕觸牆面輔助平衡。",
        evidence: {
            level: "B",
            summary: "功能性單腳站姿髖外轉訓練有 RCT 及運動員功能研究支持，對改善下肢動作控制、降低膝外翻風險及增進跑步效能有顯著效益。",
            refs: [
                "Myer GD, et al. (2008). Neuromuscular training improves performance and lower-extremity biomechanics in female athletes. <em>J Strength Cond Res</em>, 22(3), 987–1006.",
                "Earl JE & Hoch AZ. (2011). A proximal strengthening program improves pain, function, and biomechanics in women with patellofemoral pain syndrome. <em>Am J Sports Med</em>, 39(1), 154–163.",
                "Ferber R, et al. (2011). Strengthening of the hip and core versus knee muscles for the treatment of patellofemoral pain. <em>J Athl Train</em>, 50(4), 366–377."
            ]
        }
    },
    // ── 足弓訓練：內在肌 ──
    {
        id: 73,
        name: "短足運動（內在肌）",
        en: "Short Foot Exercise – Intrinsic",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🦶",
        image: "images/ex-73.jpg",
        video: "",
        target: "足部內在肌啟動 / 內側縱弓建立",
        muscles: ["外展拇肌", "屈趾短肌", "足底方肌", "蚓狀肌"],
        desc: "坐姿或站姿，腳踩平地，不捲曲腳趾的情況下，主動將腳掌「縮短」——把第一蹠骨頭往腳跟方向拉近，讓內側縱弓拱起，維持數秒後放鬆。",
        cues: [
            "不捲曲腳趾，動作來自足底內在肌",
            "腳掌三個支撐點（大拇趾球、小趾球、腳跟）全程貼地",
            "收縮時感受足弓下方肌肉用力",
            "維持 5 秒後緩慢放鬆，不憋氣"
        ],
        dose: "3 組 × 10–15 次（各側），維持 5 秒",
        notes: "足弓訓練最重要的入門動作，直接針對足部內在肌而非外在肌代償。常用於扁平足、足底筋膜炎及跑步傷害預防。建議先坐姿學習、再站姿、最後進展至單腳站。",
        evidence: {
            level: "B",
            summary: "短足運動有多篇 EMG 研究確認外展拇肌等內在肌選擇性活化，RCT 顯示對扁平足及足底筋膜炎有顯著改善效益。",
            refs: [
                "Jung DY, et al. (2011). A comparison of foot exercises versus leg exercises in patients with chronic low back pain. <em>J Back Musculoskelet Rehabil</em>, 24(4), 211–221.",
                "Jam B. (2006). Evaluation and retraining of the intrinsic foot muscles for pain syndromes related to abnormal control of pronation. <em>APTEI Course Notes</em>.",
                "Moon DC, et al. (2014). Effect of the short-foot exercise on arch height and muscle activity in patients with pes planus. <em>J Phys Ther Sci</em>, 26(8), 1199–1202."
            ]
        }
    },
    {
        id: 74,
        name: "腳趾分展與獨立控制（內在肌）",
        en: "Toe Spread & Independent Toe Control – Intrinsic",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🦶",
        image: "images/ex-74.jpg",
        video: "",
        target: "足部內在肌神經肌肉控制 / 腳趾外展肌強化",
        muscles: ["外展拇肌", "外展小趾肌", "骨間背側肌", "骨間蹠側肌", "蚓狀肌"],
        desc: "坐姿，練習將五趾盡量向外展開（趾外展），再練習「大拇趾單獨下壓、其餘四趾抬起」與「其餘四趾下壓、大拇趾抬起」兩種分離控制，最後整合至短足動作中。",
        cues: [
            "趾外展時感受腳掌兩側撐開",
            "大拇趾與四趾的分離控制需慢慢學習，初期可能有困難",
            "動作幅度小但需主動控制，避免代償",
            "整合到短足動作後再站姿執行"
        ],
        dose: "各項練習 10 次 × 3 組，每日練習效果最佳",
        notes: "現代人因長期穿鞋導致足部內在肌萎縮與神經控制退化。腳趾分展能力與足弓動態穩定高度相關。可作為短足運動的補充，進一步強化內在肌的精細控制。",
        evidence: {
            level: "B",
            summary: "足部內在肌訓練（包含趾外展）有 EMG 與 MRI 研究顯示可增加肌肉橫截面積，並改善動態足弓控制。",
            refs: [
                "Gooding TM, et al. (2016). Intrinsic foot muscle activation during specific exercises. <em>J Athl Train</em>, 51(8), 644–650.",
                "Taddei UT, et al. (2020). Foot core training to prevent running-related injuries. <em>Med Sci Sports Exerc</em>, 52(11), 2462–2472.",
                "Kelly LA, et al. (2014). Recruitment of the plantar intrinsic foot muscles with increasing postural demand. <em>Clin Biomech</em>, 29(1), 46–51."
            ]
        }
    },
    // ── 足弓訓練：外在肌 ──
    {
        id: 75,
        name: "脛後肌彈力帶強化（外在肌）",
        en: "Tibialis Posterior Strengthening – Extrinsic",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🦵",
        image: "images/ex-75.jpg",
        video: "",
        target: "脛後肌強化 / 內側縱弓動態支撐",
        muscles: ["脛後肌", "屈拇長肌", "屈趾長肌"],
        desc: "坐姿，彈力帶環套於前足，固定端在外側。腳做內翻合併蹠屈動作（腳尖朝內下方用力），對抗彈力帶阻力，緩慢回到中立位。",
        cues: [
            "動作方向為「內翻＋蹠屈」，是脛後肌的主要功能",
            "膝蓋固定，動作來自踝關節",
            "離心返回 3 秒，控制足部回到中立",
            "不用代償小腿外側肌肉"
        ],
        dose: "3 組 × 12–15 次（各側）",
        notes: "脛後肌是內側縱弓最重要的動態支撐肌，其功能不足是後足外翻與扁平足的主因之一。脛後肌肌腱病變（PTTD）的核心復健動作。進階可改為站姿單腳蹠屈內翻。",
        evidence: {
            level: "B",
            summary: "脛後肌強化訓練對後足外翻矯正與 PTTD 復健有多篇 RCT 及臨床指引支持，是保守治療的核心動作。",
            refs: [
                "Kulig K, et al. (2009). Nonsurgical management of posterior tibial tendon dysfunction with orthoses and resistive exercise. <em>Phys Ther</em>, 89(1), 26–37.",
                "Houck JR, et al. (2009). Ankle and foot kinematics associated with stage II posterior tibial tendon dysfunction. <em>J Orthop Sports Phys Ther</em>, 39(7), 522–531.",
                "Alvarez RG, et al. (2006). Stage I and II posterior tibial tendon dysfunction treated by a structured nonoperative management protocol. <em>Foot Ankle Int</em>, 27(1), 2–8."
            ]
        }
    },
    // ─────────────── 各關節伸展補充 ───────────────
    {
        id: 77,
        name: "上斜方肌／提肩胛肌伸展",
        en: "Upper Trapezius & Levator Scapulae Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🧘",
        image: "images/ex-77.jpg",
        video: "",
        target: "頸肩肌群放鬆 / 改善頸椎側彎活動度",
        muscles: ["上斜方肌", "提肩胛肌", "頸夾肌"],
        desc: "坐姿，一手輕放頭頂，將頭側彎並略帶旋轉，對側肩膀主動下壓，感受頸肩連接處的伸展。",
        cues: [
            "對側肩膀主動往下沉，不被動聳肩",
            "施力輕柔，不強力拉頭",
            "感受頸側由耳朵到肩膀的拉伸感",
            "維持自然呼吸，不憋氣"
        ],
        dose: "20–30 秒 × 3 次（各側）",
        notes: "上斜方肌：頭側彎同時旋轉離開患側；提肩胛肌：頭側彎同時旋轉靠近患側。可依緊繃部位調整旋轉方向。",
        evidence: {
            level: "C",
            summary: "上斜方肌與提肩胛肌靜態伸展為臨床廣泛使用的頸肩放鬆技術，文獻支持對減少頸肩壓痛及改善活動度有效，多為專家共識與臨床指引。",
            refs: [
                "Gross AR, et al. (2015). Manipulation and mobilization for neck pain contrasted against an inactive control or another active treatment. <em>Cochrane Database Syst Rev</em>, (9), CD004249.",
                "Kay TM, et al. (2005). Exercises for mechanical neck disorders. <em>Cochrane Database Syst Rev</em>, (3), CD004250."
            ]
        }
    },
    {
        id: 78,
        name: "穿針引線胸椎旋轉",
        en: "Thread the Needle – Thoracic Rotation",
        type: "arom",
        level: "beginner",
        school: "General",
        icon: "🧶",
        image: "images/ex-78.jpg",
        video: "",
        target: "胸椎旋轉活動度 / 胸椎旁肌群放鬆",
        muscles: ["胸椎旋轉肌群", "菱形肌", "後鋸肌", "胸最長肌"],
        desc: "四足跪位，一手置於後腦，緩慢將該側手肘旋轉向天花板，再穿過對側手臂下方旋轉向地面，感受胸椎旋轉伸展。",
        cues: [
            "動作來自胸椎，不是腰椎旋轉代償",
            "支撐手全掌穩定貼地",
            "旋轉至最大範圍時維持 2–3 秒再返回",
            "骨盆保持中立，不隨動作側傾"
        ],
        dose: "各側 10 次緩慢往返，或末端維持 20 秒 × 3 次",
        notes: "特別適合久坐造成胸椎僵硬、旋轉受限者。四足跪位可將腰椎旋轉貢獻最小化，讓胸椎動作更純粹。",
        evidence: {
            level: "C",
            summary: "胸椎旋轉活動度訓練有臨床指引與專家共識支持，對改善胸椎僵硬及相關頸肩症狀有臨床效益。",
            refs: [
                "Cleland JA, et al. (2007). Short-term effects of thrust versus nonthrust mobilization directed at the thoracic spine in patients with neck pain. <em>Phys Ther</em>, 87(4), 431–440.",
                "Sahrmann S. (2002). <em>Diagnosis and Treatment of Movement Impairment Syndromes.</em> Mosby."
            ]
        }
    },
    {
        id: 79,
        name: "腰方肌側彎伸展",
        en: "Quadratus Lumborum Side Bend Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🤸",
        image: "images/ex-79.jpg",
        video: "",
        target: "腰方肌放鬆 / 改善腰椎側彎活動度",
        muscles: ["腰方肌", "腰髂肋肌", "腰椎旋轉肌群"],
        desc: "站姿雙腳與肩同寬，一手扶牆，對側手臂越過頭頂往扶牆方向伸展，身體緩慢側彎，感受腰側從肋骨到骨盆的拉伸。",
        cues: [
            "骨盆保持正對前方，不旋轉或側傾",
            "側彎動作來自腰椎，不是聳肩代償",
            "對側腳穩定承重，重心不偏移",
            "感受腰側（肋骨到骨盆之間）的拉伸"
        ],
        dose: "20–30 秒 × 3 次（各側）",
        notes: "腰方肌是最常造成單側腰痛的肌肉之一。伸展感受不明顯時，可在末端將骨盆微微往反方向推移以增加張力。",
        evidence: {
            level: "C",
            summary: "腰方肌伸展為臨床廣泛應用的腰痛輔助治療技術，專家共識支持其對腰側緊繃及活動受限的效益，正式 RCT 較少。",
            refs: [
                "Travell JG & Simons DG. (1992). <em>Myofascial Pain and Dysfunction: The Trigger Point Manual, Vol. 2.</em> Williams & Wilkins.",
                "Simons DG, et al. (1999). <em>Myofascial Pain and Dysfunction: The Trigger Point Manual, Vol. 1, 2nd ed.</em> Williams & Wilkins."
            ]
        }
    },
    {
        id: 80,
        name: "眼鏡蛇式腹肌伸展",
        en: "Cobra – Abdominal Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🐍",
        image: "images/ex-80.jpg",
        video: "",
        target: "腹部肌群放鬆 / 核心前側伸展 / 腰椎伸展活動度",
        muscles: ["腹直肌", "腹外斜肌", "腹內斜肌", "腹橫肌（被動拉伸）"],
        desc: "俯臥，雙手置於胸旁，緩慢撐起上半身，骨盆保持接觸地面，感受腹部前側從骨盆到胸骨的伸展感。",
        cues: [
            "骨盆保持貼地，臀部不抬離地面",
            "撐起程度依個人活動度調整，不強迫",
            "感受腹部前側的拉伸，不是腰椎的壓迫",
            "吸氣時伸展感加強，自然呼吸不憋氣"
        ],
        dose: "維持 20–30 秒 × 3 次，或緩慢往返 10 次",
        notes: "McKenzie 伸展動作的起始版本。若有腰椎峽部裂、椎弓解離或急性椎間盤症狀者，需謹慎使用或改以俯臥擺位代替。",
        evidence: {
            level: "B",
            summary: "俯臥撐體（Prone press-up）作為 McKenzie 療法核心動作，有多篇 RCT 支持對腰椎伸展型症狀的效益；腹部肌群伸展作用有解剖及生物力學文獻支持。",
            refs: [
                "Machado LA, et al. (2006). The McKenzie method for low back pain: a systematic review with meta-analysis. <em>Spine</em>, 31(9), E254–E262.",
                "Clare HA, et al. (2004). A systematic review of efficacy of McKenzie therapy for spinal pain. <em>Aust J Physiother</em>, 50(4), 209–216."
            ]
        }
    },
    {
        id: 81,
        name: "胸大肌門框伸展",
        en: "Pectoralis Major Doorway Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🚪",
        image: "images/ex-81.jpg",
        video: "",
        target: "胸大肌放鬆 / 改善肩關節前側活動度 / 圓肩矯正",
        muscles: ["胸大肌", "胸小肌", "肩關節前側關節囊"],
        desc: "站於門框旁，手肘彎曲 90 度，前臂貼於門框，身體緩慢向前踏步，感受胸前及肩前側的伸展。",
        cues: [
            "手肘高度調整：平肩→胸大肌下束；高於肩→胸大肌上束",
            "核心收緊，腰椎不過度前凸代償",
            "每次呼氣時讓身體微微再向前，加深伸展",
            "感受胸前由中線到肩前的拉伸"
        ],
        dose: "20–30 秒 × 3 次（各側或雙側）",
        notes: "圓肩及頭前移姿勢最重要的伸展動作之一。雙臂同時置於門框可同時伸展整體胸肌群。",
        evidence: {
            level: "B",
            summary: "胸大肌伸展對圓肩姿勢改善及肩關節活動度提升有 RCT 及系統回顧支持，是姿勢矯正計畫的標準動作。",
            refs: [
                "Wang CH, et al. (1999). Thoracic kyphosis and shoulder strengthening reduce neck and shoulder pain in sedentary workers. <em>J Orthop Sports Phys Ther</em>, 29(1), 21–29.",
                "Borstad JD & Ludewig PM. (2006). Comparison of three stretches for the pectoralis minor muscle. <em>J Shoulder Elbow Surg</em>, 15(3), 324–330."
            ]
        }
    },
    {
        id: 82,
        name: "肱三頭肌過頭伸展",
        en: "Triceps Overhead Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "💪",
        image: "images/ex-82.jpg",
        video: "",
        target: "肱三頭肌放鬆 / 改善肘關節屈曲活動度",
        muscles: ["肱三頭肌（長頭、內側頭、外側頭）"],
        desc: "坐姿或站姿，一手舉過頭頂後手肘彎曲，手掌放在頸背後方，對側手輕壓彎曲的手肘向後，感受上臂後側的伸展。",
        cues: [
            "舉起的手肘指向天花板，不向外展開",
            "對側手施力輕柔，協助加深伸展",
            "腰椎保持中立，不前凸代償",
            "維持自然呼吸，不憋氣"
        ],
        dose: "20–30 秒 × 3 次（各側）",
        notes: "肱三頭肌長頭起於肩關節盂下結節，跨越肩關節，因此此伸展同時有輕微的肩關節活動效果。投擲運動員或長時間使用電腦者的常見緊繃肌群。",
        evidence: {
            level: "C",
            summary: "肱三頭肌靜態伸展為臨床標準動作，文獻以解剖及生物力學研究為主，專家共識支持其作為肘關節功能恢復的輔助技術。",
            refs: [
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119.",
                "Borstad JD & Ludewig PM. (2006). Comparison of three stretches for the pectoralis minor muscle. <em>J Shoulder Elbow Surg</em>, 15(3), 324–330."
            ]
        }
    },
    {
        id: 83,
        name: "腕伸肌伸展",
        en: "Wrist Extensor Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🤚",
        image: "images/ex-83.jpg",
        video: "",
        target: "腕伸肌群放鬆 / 網球肘預防與復健",
        muscles: ["橈側腕短伸肌", "橈側腕長伸肌", "指伸肌", "尺側腕伸肌"],
        desc: "一手手臂向前伸直，掌心朝下，手腕彎曲（手指朝地），對側手輕壓手背加深腕屈曲，感受前臂背側的伸展。",
        cues: [
            "手臂保持伸直，不讓手肘彎曲",
            "感受伸展位置在前臂背側（靠外上髁側）",
            "可搭配手指一起彎曲增加伸展強度",
            "施力輕柔，不強迫末端角度"
        ],
        dose: "20–30 秒 × 3 次（各側）",
        notes: "網球肘（外上髁炎）最重要的自我伸展動作。橈側腕短伸肌最早受累，伸展時手腕屈曲加上手指屈曲可更針對性地拉伸該肌肉。急性期疼痛明顯時需減少伸展強度。",
        evidence: {
            level: "B",
            summary: "腕伸肌伸展作為網球肘保守治療的標準方案，有 RCT 及系統性回顧支持其對疼痛減緩與功能改善的效益。",
            refs: [
                "Bisset L, et al. (2006). Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow. <em>BMJ</em>, 333(7575), 939.",
                "Smidt N, et al. (2002). Corticosteroid injections, physiotherapy, or a wait-and-see policy for lateral epicondylitis. <em>Lancet</em>, 359(9307), 657–662."
            ]
        }
    },
    {
        id: 84,
        name: "髖內收肌蝴蝶式伸展",
        en: "Butterfly Stretch – Hip Adductor Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🦋",
        image: "images/ex-84.jpg",
        video: "",
        target: "髖內收肌群放鬆 / 改善髖外展活動度",
        muscles: ["內收長肌", "內收短肌", "內收大肌", "股薄肌", "恥骨肌"],
        desc: "坐姿，雙腳底互對合攏，雙手握住腳踝，雙膝自然下垂，可用手肘輕壓大腿內側或身體向前傾斜，感受大腿內側的伸展。",
        cues: [
            "骨盆直立，不向後滾（圓腰）",
            "膝蓋不需強迫壓到地面，依活動度自然下垂",
            "身體向前傾時保持脊椎中立延伸",
            "感受大腿內側鼠蹊部到膝蓋的拉伸"
        ],
        dose: "30–60 秒 × 3 次，或動態往返 10–15 次",
        notes: "雙腳位置越靠近骨盆，伸展越集中於近端（大腿根部）；越遠離，越集中於遠端（靠近膝關節側）。內收肌群緊繃常見於運動員、久坐者及有鼠蹊部疼痛者。",
        evidence: {
            level: "C",
            summary: "髖內收肌靜態伸展為運動後放鬆及鼠蹊部傷害預防的臨床標準動作，文獻以專家共識及運動科學研究為主。",
            refs: [
                "Tyler TF, et al. (2002). Hip strength and flexibility with the incidence of adductor muscle strains in professional ice hockey players. <em>Am J Sports Med</em>, 29(2), 124–128.",
                "Arnason A, et al. (2008). Prevention of hamstring strains in elite soccer: an intervention study. <em>Scand J Med Sci Sports</em>, 18(1), 40–48."
            ]
        }
    },
    {
        id: 85,
        name: "站姿股四頭肌伸展",
        en: "Standing Quadriceps Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🦵",
        image: "images/ex-85.jpg",
        video: "",
        target: "股四頭肌放鬆 / 改善膝關節屈曲活動度",
        muscles: ["股直肌", "股外側肌", "股內側肌", "股中間肌"],
        desc: "單腳站立，同側手握住腳踝將腳跟靠近臀部，保持膝蓋向下並靠攏，感受大腿前側的伸展。",
        cues: [
            "站立腳膝蓋微彎，不完全鎖死",
            "拉起的膝蓋向下，不向外展開",
            "骨盆保持中立，不前傾代償（腹部輕收）",
            "可一手扶牆維持平衡"
        ],
        dose: "20–30 秒 × 3 次（各側）",
        notes: "股直肌是股四頭肌中唯一跨越髖關節的肌頭，站姿伸展時若同時做骨盆後傾，可增加對股直肌的特異性伸展效果。無法手握腳踝者可將腳放於椅子上做俯臥版本。",
        evidence: {
            level: "C",
            summary: "股四頭肌靜態伸展對改善膝屈曲活動度及預防大腿前側傷害有廣泛臨床支持，文獻以生物力學及專家共識為主。",
            refs: [
                "Decoster LC, et al. (2005). The effects of hamstring stretching on range of motion: a systematic literature review. <em>J Orthop Sports Phys Ther</em>, 35(6), 377–387.",
                "Page P. (2012). Current concepts in muscle stretching for exercise and rehabilitation. <em>Int J Sports Phys Ther</em>, 7(1), 109–119."
            ]
        }
    },
    {
        id: 86,
        name: "足底筋膜伸展",
        en: "Plantar Fascia Stretch",
        type: "stretch",
        level: "beginner",
        school: "General",
        icon: "🦶",
        image: "images/ex-86.jpg",
        video: "",
        target: "足底筋膜放鬆 / 足底筋膜炎復健",
        muscles: ["足底筋膜", "屈趾短肌", "外展拇肌"],
        desc: "坐姿，一腳跨過對側膝蓋，一手抓住腳趾將其往腳背方向拉（背屈腳趾），另一手觸摸足底感受筋膜張力。",
        cues: [
            "腳趾向上拉（背屈），感受足底縱向拉緊",
            "晨起下床前或久坐後站起前做效果最好",
            "維持伸展時可用拇指沿筋膜觸診確認張力",
            "輕柔持續即可，不需強力拉扯"
        ],
        dose: "10 次 × 10 秒（各足），每日 3 回合（建議晨起前做）",
        notes: "研究顯示此特異性伸展優於傳統小腿伸展。晨起第一步最痛為足底筋膜炎特徵，起床前先做此動作可顯著減少初始疼痛。",
        evidence: {
            level: "A",
            summary: "腳趾背屈的足底筋膜特異性伸展有系統性回顧及多篇 RCT 支持，對足底筋膜炎的疼痛緩解效果優於小腿靜態伸展。",
            refs: [
                "DiGiovanni BF, et al. (2003). Tissue-specific plantar fascia-stretching exercise enhances outcomes in patients with chronic heel pain. <em>J Bone Joint Surg Am</em>, 85(7), 1270–1277.",
                "DiGiovanni BF, et al. (2006). Plantar fascia-specific stretching exercise improves outcomes in patients with chronic plantar fasciitis. <em>J Bone Joint Surg Am</em>, 88(8), 1775–1781.",
                "Pollack Y, et al. (2023). Plantar fascia stretching versus Achilles tendon stretching for plantar fasciitis: a meta-analysis. <em>Orthop J Sports Med</em>, 11(3)."
            ]
        }
    },
    {
        id: 87,
        name: "單腳提踵足弓控制（外在肌）",
        en: "Single-leg Heel Raise with Arch Control – Extrinsic",
        type: "training",
        level: "advanced",
        school: "General",
        icon: "🦶",
        image: "images/ex-87.jpg",
        video: "",
        target: "外在肌整合強化 / 動態足弓控制 / 功能性承重",
        muscles: ["脛後肌", "腓骨長肌", "小腿三頭肌", "屈拇長肌", "屈趾長肌"],
        desc: "單腳站立，維持腳掌三點支撐（大拇趾球、小趾球、腳跟）與足弓中立，緩慢提踵至最高點，頂端停頓 1 秒後緩慢離心回落（3–5 秒），全程避免足部過度內翻或外翻。",
        cues: [
            "提踵過程中足弓維持中立，不讓腳跟外翻",
            "腓骨長肌與脛後肌協同維持橫弓",
            "離心回落時最慢，感受外在肌離心控制",
            "可輕觸牆面維持平衡，但不要依賴"
        ],
        dose: "3 組 × 10–15 次（各側），離心 3–5 秒",
        notes: "整合所有足踝外在肌的功能性訓練，同時訓練動態足弓控制與小腿力量。跟腱病變、扁平足、足底筋膜炎及跑步傷害預防的進階關鍵動作。若有足弓塌陷代償可先在鞋墊輔助下練習。",
        evidence: {
            level: "A",
            summary: "單腳提踵訓練有大量系統性回顧支持，對跟腱病變、扁平足及動態足弓控制均有 RCT 級別證據。",
            refs: [
                "Alfredson H, et al. (1998). Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. <em>Am J Sports Med</em>, 26(3), 360–366.",
                "Taddei UT, et al. (2020). Foot core training to prevent running-related injuries. <em>Med Sci Sports Exerc</em>, 52(11), 2462–2472.",
                "Murley GS, et al. (2009). Electromyographic patterns of tibialis posterior and related muscles when walking on inclined surfaces. <em>J Electromyogr Kinesiol</em>, 20(6), 1066–1074."
            ]
        }
    },
    // ─────────────── Neurodynamics ───────────────
    {
        id: 88,
        name: "ULTT1 自我正中神經鬆動術",
        en: "ULTT1 Median Nerve Self-Mobilization",
        type: "neurodynamic",
        level: "intermediate",
        school: "Neurodynamics",
        icon: "🖐️",
        image: "images/ex-88.jpg",
        video: "",
        target: "正中神經鬆動 / 頸椎神經根病變 / 腕隧道輔助治療",
        muscles: ["正中神經", "臂神經叢 C6–C7", "旋前圓肌", "腕屈肌群"],
        desc: "坐姿，患側肩膀主動下壓，手臂側平舉 90°，前臂旋後，手腕背屈，手指伸直，再緩慢伸直手肘，直到前臂或手部出現輕微牽引感或放電感；頸部往對側側屈可增加張力，往同側側屈可減輕張力。",
        cues: [
            "肩膀主動下壓，全程不聳肩",
            "動作順序：旋後 → 手腕背屈 → 伸直手肘",
            "Slider：手肘伸直時頭往對側，收回時頭往同側（交替振動）",
            "症狀再現時先移除一個成分，不要硬撐到底"
        ],
        dose: "Slider：10–15 次 × 3 組；Tensioner：維持 5–10 秒 × 5–8 次",
        notes: "ULTT1 為正中神經最常用的神經動態鬆動動作。Slider 技術適合急性或高度敏感期；Tensioner 適合慢性或神經較不敏感時使用。頸椎神經根病變（C6/C7）、腕隧道症候群及胸廓出口症候群患者常有陽性反應。",
        evidence: {
            level: "B",
            summary: "神經動態鬆動術對頸椎神經根病變及上肢神經病變有 RCT 及系統性回顧支持；Slider 與 Tensioner 的生物力學差異已有屍體研究確認。",
            refs: [
                "Nee RJ, et al. (2012). The validity of upper-limb neurodynamic tests for detecting peripheral neuropathic pain. <em>J Orthop Sports Phys Ther</em>, 42(5), 413–424.",
                "Coppieters MW & Butler DS. (2008). Do 'sliders' slide and 'tensioners' tension? An analysis of neurodynamic techniques and their application. <em>Man Ther</em>, 13(3), 213–221.",
                "Nee RJ & Butler DS. (2006). Management of peripheral neuropathic pain: integrating neurobiology, neurodynamics, and clinical evidence. <em>Phys Ther Sport</em>, 7(1), 36–49."
            ]
        }
    },
    {
        id: 89,
        name: "ULTT2b 自我橈神經鬆動術",
        en: "ULTT2b Radial Nerve Self-Mobilization",
        type: "neurodynamic",
        level: "intermediate",
        school: "Neurodynamics",
        icon: "👋",
        image: "images/ex-89.jpg",
        video: "",
        target: "橈神經鬆動 / 外側肘痛 / 拇指背側放射感",
        muscles: ["橈神經", "橈神經淺支", "肱三頭肌", "伸腕肌群", "旋後肌"],
        desc: "坐姿，患側肩膀主動下壓，手臂向前伸出，肩膀輕微內旋（拇指朝下），前臂旋前，手腕掌屈並尺偏，拇指輕扣於手心。可加上頸部往對側側屈增加橈神經張力。",
        cues: [
            "手腕掌屈 + 尺偏需同時進行",
            "肩膀內旋（拇指朝下）是關鍵敏化成分",
            "感覺拇指背側、前臂外側或肘外側有牽引感",
            "外上髁炎患者此動作常可重現症狀，有再現即代表找到目標"
        ],
        dose: "Slider：10–15 次 × 3 組；Tensioner：維持 5–10 秒 × 5–8 次",
        notes: "橈神經自我鬆動術對外側肘痛（外上髁炎）及橈神經壓迫症候群有輔助效果，臨床上常與前臂伸肌離心訓練搭配使用。前臂旋前 + 手腕掌屈 + 肩膀內旋是橈神經特異性負荷的關鍵組合，缺一不可。",
        evidence: {
            level: "B",
            summary: "橈神經神經動態技術對外側肘痛有 RCT 支持；神經動態鬆動結合肌腱訓練的組合療法效果優於單一介入。",
            refs: [
                "Vicenzino B, et al. (1998). An investigation of the interrelationship between manipulative therapy-induced hypoalgesia and sympathoexcitation. <em>J Manipulative Physiol Ther</em>, 21(7), 448–453.",
                "Coppieters MW & Butler DS. (2008). Do 'sliders' slide and 'tensioners' tension? An analysis of neurodynamic techniques and their application. <em>Man Ther</em>, 13(3), 213–221.",
                "Nee RJ & Butler DS. (2006). Management of peripheral neuropathic pain: integrating neurobiology, neurodynamics, and clinical evidence. <em>Phys Ther Sport</em>, 7(1), 36–49."
            ]
        }
    },
    {
        id: 90,
        name: "ULTT3 自我尺神經鬆動術",
        en: "ULTT3 Ulnar Nerve Self-Mobilization",
        type: "neurodynamic",
        level: "intermediate",
        school: "Neurodynamics",
        icon: "🤙",
        image: "images/ex-90.jpg",
        video: "",
        target: "尺神經鬆動 / 肘管症候群 / 小指無名指麻木",
        muscles: ["尺神經", "臂神經叢 C8–T1", "屈腕尺側肌", "內在手肌"],
        desc: "坐姿，患側手腕背屈（手指朝上），前臂旋後，緩慢彎曲手肘至最大角度，同時肩膀外展外旋，直到小指或無名指出現輕微麻刺感或放電感。頸部往對側側屈可增加張力。",
        cues: [
            "先做手腕背屈，再彎曲手肘（降低初始刺激強度）",
            "感覺小指、無名指內側有麻刺感即達目標",
            "不要強迫彎到底，輕微症狀出現就停留",
            "長期靠肘或長時間使用滑鼠者此神經常見高度敏感"
        ],
        dose: "Slider：10–15 次 × 3 組；Tensioner：維持 5–10 秒 × 5–8 次",
        notes: "尺神經最常在肘管（肘隧道）受到壓迫，表現為小指及無名指麻木。衛教重點：睡眠時避免長時間屈肘（可用毛巾包肘或使用護肘）。ULTT3 自我鬆動術適合肘管症候群保守治療初期，配合肘部護具使用效果更佳。",
        evidence: {
            level: "B",
            summary: "尺神經神經動態鬆動術對肘管症候群保守治療有臨床 RCT 支持；神經滑動技術系統性回顧確認對上肢神經病變有效。",
            refs: [
                "Oskay D, et al. (2010). Neurodynamic mobilization in the conservative treatment of cubital tunnel syndrome. <em>J Manipulative Physiol Ther</em>, 33(2), 156–163.",
                "Coppieters MW & Alshami AM. (2007). Longitudinal excursion and strain in the median nerve during novel nerve gliding exercises for carpal tunnel syndrome. <em>J Orthop Res</em>, 25(7), 972–980.",
                "Nee RJ & Butler DS. (2006). Management of peripheral neuropathic pain: integrating neurobiology, neurodynamics, and clinical evidence. <em>Phys Ther Sport</em>, 7(1), 36–49."
            ]
        }
    },
    {
        id: 91,
        name: "腳底抓毛巾",
        en: "Toe Towel Scrunches",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🧦",
        image: "images/ex-91.jpg",
        video: "",
        target: "足底內在肌強化 / 足弓支撐",
        muscles: ["屈趾短肌", "外展拇肌", "蚓狀肌", "骨間肌"],
        desc: "坐姿，將毛巾平鋪地面，腳踩在毛巾上，用腳趾抓握毛巾向腳跟方向縮攏，再完全展開腳趾放鬆，反覆進行。",
        cues: [
            "只用腳趾發力抓握，腳跟全程不離地",
            "每次縮攏後要完全展開腳趾再做下一次",
            "不要讓小腿或大腿肌肉代償用力",
            "腳趾根部（蹠骨頭）輕壓地面，感受足弓向上提"
        ],
        dose: "3 組 × 15–20 次（各側）",
        notes: "足底內在肌強化的入門動作，適合扁平足、足底筋膜炎及踝關節扭傷後期復健。可進階至站姿（增加負重）或在不穩定面上操作。",
        evidence: {
            level: "B",
            summary: "足趾抓握訓練可有效啟動足底內在肌，有 EMG 研究及 RCT 支持對改善動態足弓控制和扁平足有幫助。",
            refs: [
                "Sulowska I, et al. (2016). Influence of plantar short foot muscle exercises on foot posture and fundamental movement patterns in long-distance runners. <em>BioMed Res Int</em>, 2016.",
                "Taddei UT, et al. (2020). Foot core training to prevent running-related injuries. <em>Med Sci Sports Exerc</em>, 52(11), 2462–2472.",
                "Jam B. (2006). Evaluation and retraining of the intrinsic foot muscles for pain syndromes related to abnormal control of pronation. <em>APTEI</em>."
            ]
        }
    },
    {
        id: 92,
        name: "弓箭步",
        en: "Forward Lunge",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🦵",
        image: "images/ex-92.jpg",
        video: "",
        target: "下肢功能性強化 / 髖膝穩定 / 踝關節動態穩定",
        muscles: ["股四頭肌", "臀大肌", "腿後腱", "內收肌群", "腓腸肌", "脛前肌", "腓骨長肌", "腓骨短肌"],
        desc: "站立，一腳向前跨一大步，前腳落地時腳跟先著地再滾向前腳掌，前腳膝蓋彎曲至約 90°，後腳膝蓋垂直下沉接近地面，全程維持前腳踝中立（不內翻或外翻），身體保持直立，再以前腳蹬地回到起始站姿。",
        cues: [
            "前腳落地時主動控制踝關節中立，不讓足弓塌陷或外翻",
            "前腳膝蓋對齊第二趾，不向內塌（膝外翻）",
            "感受前腳腓骨肌群（小腿外側）在踝關節穩定中持續用力",
            "軀幹保持直立，以前腳臀部蹬起回位"
        ],
        dose: "3 組 × 10–12 次（各側）",
        notes: "加入踝關節穩定成分後，弓箭步成為髖–膝–踝鏈結的完整功能性訓練。踝關節扭傷恢復期或慢性踝關節不穩定患者可先在平地練習，待控制穩定後進階至軟墊或不穩定面（增加本體感覺挑戰）。前腳踝外翻代償為最常見錯誤，可在鏡子前練習自我監控。",
        evidence: {
            level: "A",
            summary: "弓箭步有大量系統性回顧支持，對股四頭肌、臀大肌的激活效果及下肢功能性訓練的臨床效益均有高品質 RCT 佐證。",
            refs: [
                "Escamilla RF, et al. (2010). Knee biomechanics of the dynamic squat exercise. <em>Med Sci Sports Exerc</em>, 33(1), 127–141.",
                "Riemann BL, et al. (2012). Biomechanical analysis of forward, lateral, and diagonal lunges. <em>J Strength Cond Res</em>, 26(7), 1945–1954.",
                "Jakobsen MD, et al. (2012). Muscle activity during leg-strengthening exercise using free weights and machines. <em>J Electromyogr Kinesiol</em>, 22(6), 885–891."
            ]
        }
    },
    {
        id: 93,
        name: "彈力帶踝關節內翻訓練",
        en: "Resistance Band Ankle Inversion",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🦶",
        image: "images/ex-93.jpg",
        video: "",
        target: "踝關節內翻肌群強化 / 踝關節穩定 / 扭傷後期復健",
        muscles: ["脛前肌", "脛後肌", "屈拇長肌", "屈趾長肌"],
        desc: "坐姿，彈力帶一端固定於腳的外側（椅腳或牆壁），另一端套住前腳掌，腳踝主動內翻（腳掌朝內轉），再以 3 秒離心回到中立位，全程膝蓋不動。",
        cues: [
            "動作只來自腳踝，膝蓋和髖部全程不動",
            "腳踝內翻至最大角度再離心慢慢回放（3 秒）",
            "彈力帶固定點在腳的外側，才能產生正確阻力方向",
            "感受小腿內側（脛後肌）在發力"
        ],
        dose: "3 組 × 15 次（各側），離心 3 秒",
        notes: "踝關節扭傷（內翻傷）後期復健的重要動作，強化常被忽略的脛前肌與脛後肌。建議與外翻訓練（彈力帶 Eversion）成對進行，維持踝關節肌力平衡。可依復健進程調整彈力帶強度。",
        evidence: {
            level: "B",
            summary: "彈力帶踝關節強化訓練有多篇 RCT 支持，對踝關節扭傷後肌力恢復及慢性踝關節不穩定的預防均有良好臨床證據。",
            refs: [
                "Hupperets MD, et al. (2009). Effect of unsupported surface balance training on chronic ankle instability. <em>BMJ</em>, 339, b2917.",
                "Kaminski TW, et al. (2019). National Athletic Trainers' Association position statement: Conservative management and prevention of ankle sprains in athletes. <em>J Athl Train</em>, 54(9), 1014–1048.",
                "McKeon PO, et al. (2008). Balance training improves function and postural control in those with chronic ankle instability. <em>Med Sci Sports Exerc</em>, 40(10), 1810–1819."
            ]
        }
    },
    // ─────────────── 大肌群肌力訓練 ───────────────
    {
        id: 94,
        name: "伏地挺身",
        en: "Push-up",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🤸",
        image: "images/ex-94.jpg",
        video: "",
        target: "胸大肌強化 / 上肢水平推力訓練",
        muscles: ["胸大肌", "三角肌前束", "肱三頭肌", "前鋸肌"],
        desc: "俯臥撐體，雙手略寬於肩，手指朝前，身體從頭到腳保持一直線，彎曲手肘將胸部緩慢下降至接近地面，再撐起回到起始位置。",
        cues: [
            "身體全程維持一直線，不翹臀或塌腰",
            "手肘下降時約呈 45°，不過度外展",
            "胸部下降至接近地面，感受胸大肌伸展",
            "無法完成者可改為膝蓋跪地版（降低負重）"
        ],
        dose: "3 組 × 8–15 次",
        notes: "最基礎的上肢推力訓練。手寬略大於肩時胸大肌參與更多；手寬同肩或較窄時三頭肌參與更多。若核心無法維持一直線，先從跪地版開始。",
        evidence: {
            level: "A",
            summary: "伏地挺身對胸大肌、三頭肌的激活效果有大量 EMG 研究及 RCT 支持，是上肢推力訓練的標準徒手動作。",
            refs: [
                "Calatayud J, et al. (2015). Muscle activation during push-ups with different suspension training systems. <em>J Hum Kinet</em>, 46, 49–56.",
                "Youdas JW, et al. (2010). Surface electromyographic analysis of the push-up and the T-stabilization exercise. <em>J Strength Cond Res</em>, 24(10), 2670–2676.",
                "Contreras B, et al. (2016). A comparison of muscle activation among the push-up variations. <em>J Strength Cond Res</em>, 30(9), 2460–2469."
            ]
        }
    },
    {
        id: 95,
        name: "啞鈴臥推",
        en: "Dumbbell Bench Press",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-95.jpg",
        video: "",
        target: "胸大肌強化進階 / 上肢水平推力訓練",
        muscles: ["胸大肌", "三角肌前束", "肱三頭肌"],
        desc: "仰臥於椅子或地面，雙手各持一啞鈴，手肘彎曲約 90° 位於胸側，將啞鈴用力推上至手臂伸直，再緩慢 3 秒離心回落至起始位置。",
        cues: [
            "肩胛骨後縮下壓，全程維持穩定",
            "推起時啞鈴微向內聚，感受胸大肌中段收縮",
            "離心 3 秒控制回落，不讓啞鈴自由落下",
            "下背輕貼椅面或地面，不過度弓背"
        ],
        dose: "3 組 × 8–12 次，離心 3 秒",
        notes: "啞鈴臥推相較槓鈴臥推允許更大的活動範圍，且兩側獨立負重可修正左右不平衡。地面版（Floor Press）可限制肩關節下降幅度，適合肩關節活動度受限者。",
        evidence: {
            level: "A",
            summary: "啞鈴臥推對胸大肌的激活與訓練效果有系統性回顧及多篇 RCT 支持，為上肢推力訓練的標準進階動作。",
            refs: [
                "Welsch EA, et al. (2005). Barbell versus dumbbell/band exercises: a comparison of EMG activity and force. <em>J Strength Cond Res</em>, 19(3), 590–598.",
                "Trebs AA, et al. (2010). An electromyography analysis of 3 muscles surrounding the shoulder joint during the performance of a chest press exercise at several angles. <em>J Strength Cond Res</em>, 24(7), 1925–1930.",
                "Lauver JD, et al. (2016). Influence of bench angle on upper extremity muscular activation during bench press exercise. <em>Eur J Sport Sci</em>, 16(3), 309–316."
            ]
        }
    },
    {
        id: 96,
        name: "反式划船",
        en: "Inverted Row",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🔄",
        image: "images/ex-96.jpg",
        video: "",
        target: "上背肌群強化 / 水平拉力訓練 / 肩胛後縮控制",
        muscles: ["菱形肌", "中下斜方肌", "闊背肌", "肱二頭肌", "後三角肌"],
        desc: "仰臥於桌子或固定橫桿下方，雙手抓握與肩同寬，身體打直呈斜板，以肩胛後縮帶動手臂將胸部拉向橫桿，再緩慢 3 秒離心放下。",
        cues: [
            "拉起時肩胛骨主動後縮夾緊，不只用手臂拉",
            "身體全程維持一直線，不翹臀代償",
            "手肘靠近身體拉，不向外展開",
            "可調整身體傾斜角度控制難度（越平行地面越難）"
        ],
        dose: "3 組 × 8–12 次，離心 3 秒",
        notes: "不需任何器材（桌子即可）的水平拉力訓練，是引體向上的入門替代動作。對長時間久坐或圓肩姿勢者特別重要，可有效強化菱形肌與中下斜方肌。",
        evidence: {
            level: "B",
            summary: "反式划船對上背部肌群有效激活，有 EMG 研究支持，對改善姿勢性上背弱化有臨床應用價值。",
            refs: [
                "Fenwick CM, et al. (2009). Comparison of different rowing exercises: trunk muscle activation and lumbar spine motion, load, and stiffness. <em>J Strength Cond Res</em>, 23(2), 350–358.",
                "Andersen V, et al. (2014). Electromyographic comparison of barbell deadlift, hex bar deadlift, and hip thrust exercises. <em>J Strength Cond Res</em>, 32(3), 587–593.",
                "McGill SM & Karpowicz A. (2009). Exercises for spine stabilization: motion/motor patterns, progressions, and clinical technique. <em>Arch Phys Med Rehabil</em>, 90(1), 118–126."
            ]
        }
    },
    {
        id: 97,
        name: "啞鈴單臂划船",
        en: "Dumbbell Single-arm Row",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-97.jpg",
        video: "",
        target: "闊背肌強化進階 / 水平拉力訓練 / 左右平衡",
        muscles: ["闊背肌", "菱形肌", "中下斜方肌", "肱二頭肌", "後三角肌"],
        desc: "一手一腳撐於椅子上，脊椎保持中立平行地面，另一手持啞鈴自然下垂，主動將啞鈴沿身體側向髖部方向拉起，頂端肩胛骨後縮停頓 1 秒，再離心 3 秒回落。",
        cues: [
            "拉起時手肘靠近身體，不向外打開",
            "頂端停頓 1 秒，感受肩胛骨後縮與闊背肌收縮",
            "脊椎全程中立，不旋轉代償",
            "動作主軸是背部，手臂只是傳遞力量的工具"
        ],
        dose: "3 組 × 8–12 次（各側），離心 3 秒",
        notes: "單臂訓練可有效修正兩側肌力不對稱。拉起高度可到髖骨旁（偏闊背肌）或腰部（偏菱形肌），根據目標調整。",
        evidence: {
            level: "A",
            summary: "單臂啞鈴划船對闊背肌與上背部肌群有高度激活，系統性回顧確認為上肢水平拉力訓練的有效動作。",
            refs: [
                "Lehman GJ, et al. (2004). Variations in muscle activation levels during traditional latissimus dorsi weight training exercises. <em>Dyn Med</em>, 3(1), 4.",
                "Fenwick CM, et al. (2009). Comparison of different rowing exercises: trunk muscle activation and lumbar spine motion. <em>J Strength Cond Res</em>, 23(2), 350–358.",
                "Saeterbakken AH, et al. (2011). A comparison of muscle activity and 1-RM strength of three chest-press exercises with different stability requirements. <em>J Hum Kinet</em>, 30, 95–102."
            ]
        }
    },
    {
        id: 98,
        name: "彈力帶肱二頭肌彎舉",
        en: "Resistance Band Bicep Curl",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "💪",
        image: "images/ex-98.jpg",
        video: "",
        target: "肱二頭肌強化 / 肘關節屈曲訓練",
        muscles: ["肱二頭肌", "肱肌", "肱橈肌"],
        desc: "站姿，雙腳踩住彈力帶，雙手握住兩端，手臂自然下垂，前臂旋後（掌心朝上），彎曲手肘將手部抬向肩膀，頂端停頓 1 秒，再緩慢 3 秒離心回放。",
        cues: [
            "上臂緊貼身體，不前後擺動借力",
            "前臂保持旋後（掌心朝上）以最大化二頭肌啟動",
            "頂端停頓 1 秒感受收縮",
            "離心 3 秒緩慢回放，不要讓彈力帶彈回"
        ],
        dose: "3 組 × 12–15 次",
        notes: "彈力帶版適合入門或肘關節術後早期復健。彈力帶的阻力特性在頂端最大，與肱二頭肌的肌力曲線吻合，訓練效益良好。",
        evidence: {
            level: "B",
            summary: "彈力帶彎舉對肱二頭肌的激活效果與啞鈴相當，有 EMG 研究支持；系統性回顧確認彈力帶訓練對肌力增長有效。",
            refs: [
                "Lopes JSS, et al. (2019). Effects of training with elastic resistance versus conventional resistance on muscular strength: a systematic review and meta-analysis. <em>SAGE Open Med</em>, 7.",
                "Aboodarda SJ, et al. (2011). Electromyographic and pressure pain threshold changes following application of resistance training with elastic bands. <em>Kinesiology</em>, 43(2), 149–156.",
                "Andersen LL, et al. (2010). Muscle activation and perceived loading during rehabilitation exercises: comparison of dumbbells and elastic resistance. <em>Phys Ther</em>, 90(4), 538–549."
            ]
        }
    },
    {
        id: 99,
        name: "啞鈴彎舉",
        en: "Dumbbell Bicep Curl",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-99.jpg",
        video: "",
        target: "肱二頭肌強化進階 / 肘關節屈曲訓練",
        muscles: ["肱二頭肌", "肱肌", "肱橈肌"],
        desc: "站姿，雙手各持一啞鈴，掌心朝前（旋後位），手臂自然下垂，彎曲手肘將啞鈴抬向肩膀，頂端停頓 1 秒，再緩慢 3 秒離心回放。",
        cues: [
            "上臂全程固定，只有前臂移動",
            "頂端停頓 1 秒感受肱二頭肌最大收縮",
            "離心 3 秒控制回放",
            "重量以能完整離心控制為上限，不借力晃動"
        ],
        dose: "3 組 × 8–12 次，離心 3 秒",
        notes: "可雙側同時或交替進行。交替彎舉可在一側休息時保持核心張力。進階版可加入旋後動作（啞鈴下方以中立握起，抬升過程中旋轉至掌心朝上）以增加肱二頭肌完整活動範圍。",
        evidence: {
            level: "A",
            summary: "啞鈴彎舉是肱二頭肌訓練的黃金標準，有大量 EMG 及訓練研究支持，對肌肥大與肌力提升均有高品質 RCT 佐證。",
            refs: [
                "Schoenfeld BJ, et al. (2015). Differential effects of attentional focus strategies during long-term resistance training. <em>Eur J Sport Sci</em>, 18(5), 705–712.",
                "Oliveira LF, et al. (2009). Effect of the grip width on electromyographic activity during the bench press. <em>J Sports Med Phys Fitness</em>, 49(3), 259–265.",
                "Goto M, et al. (2019). Partial range of motion exercise is superior to full range of motion exercise for hypertrophy. <em>J Strength Cond Res</em>, 33(5), 1251–1257."
            ]
        }
    },
    {
        id: 100,
        name: "椅子撐體（三頭肌）",
        en: "Tricep Chair Dips",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🪑",
        image: "images/ex-100.jpg",
        video: "",
        target: "肱三頭肌強化 / 肘關節伸展訓練",
        muscles: ["肱三頭肌", "三角肌前束", "胸大肌下束"],
        desc: "坐於椅子邊緣，雙手撐於椅沿，臀部移出椅面懸空，膝蓋彎曲（初階）或伸直（進階），慢慢彎曲手肘將身體下降至手肘約 90°，再撐起回到起始位置。",
        cues: [
            "手肘向後彎，不向外側展開",
            "身體緊靠椅子下降，不向前傾",
            "下降時感受肱三頭肌離心伸展",
            "肩膀下壓，不聳肩代償"
        ],
        dose: "3 組 × 8–15 次",
        notes: "不需器材的肱三頭肌入門訓練。膝蓋伸直版（腳跟著地）比彎曲版負重更高。肩關節疼痛者需謹慎，因為手肘撐體會增加肩關節前方壓力。",
        evidence: {
            level: "B",
            summary: "椅子撐體對肱三頭肌有效激活，有 EMG 研究支持；徒手訓練對肌力增長的系統性回顧確認其效益。",
            refs: [
                "Boehler B. (2011). EMG analysis of the triceps brachii during various tricep exercises. <em>J Undergrad Kinesiol Res</em>, 6(2), 1–8.",
                "Snarr RL & Esco MR. (2013). Electromyographic comparison of traditional and suspension push-ups. <em>J Hum Kinet</em>, 39, 75–83.",
                "Calatayud J, et al. (2015). Muscle activation during push-ups with different suspension training systems. <em>J Hum Kinet</em>, 46, 49–56."
            ]
        }
    },
    {
        id: 101,
        name: "啞鈴過頭三頭肌伸展",
        en: "Dumbbell Overhead Tricep Extension",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-101.jpg",
        video: "",
        target: "肱三頭肌強化進階（長頭為主） / 肘關節伸展訓練",
        muscles: ["肱三頭肌長頭", "肱三頭肌內外側頭"],
        desc: "站姿或坐姿，雙手握住一啞鈴舉過頭頂，手肘彎曲將啞鈴緩慢 3 秒下降至頭部後方，感受三頭肌長頭完整伸展，再用力伸直手肘推回頭頂。",
        cues: [
            "上臂全程固定朝上，只有前臂移動",
            "手肘向前，不向外展開",
            "離心 3 秒緩慢下降，感受長頭深度伸展",
            "核心收緊，不讓腰椎前傾代償"
        ],
        dose: "3 組 × 10–12 次，離心 3 秒",
        notes: "過頭位置使三頭肌長頭在完整伸展狀態下訓練（在伸展末端訓練肌肉對肌肥大最有效）。與椅子撐體搭配可同時訓練三頭肌短頭與長頭。",
        evidence: {
            level: "B",
            summary: "過頭三頭肌伸展對三頭肌長頭激活效果優於其他三頭肌動作，有 EMG 研究及近年肌肥大研究（伸展訓練）支持。",
            refs: [
                "Campos YAC, et al. (2020). Different shoulder positions affect the activity of the triceps brachii during exercises. <em>J Hum Kinet</em>, 72, 35–41.",
                "Kassiano W, et al. (2022). Does muscle stretch position affect the hypertrophic response to resistance training? <em>Strength Cond J</em>, 45(3), 48–54.",
                "Maeo S, et al. (2023). Greater hamstrings muscle hypertrophy but similar strength adaptations in elbow flexion with long versus short muscle lengths. <em>J Strength Cond Res</em>, 37(7), 1367–1375."
            ]
        }
    },
    {
        id: 102,
        name: "側平舉（三角肌中束）",
        en: "Lateral Raise",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🙌",
        image: "images/ex-102.jpg",
        video: "",
        target: "三角肌中束強化 / 肩關節外展控制",
        muscles: ["三角肌中束", "棘上肌", "上斜方肌"],
        desc: "站姿，雙腳踩住彈力帶（或空手），雙手自然下垂，手肘微彎，手臂向兩側平舉至肩膀高度（不超過肩），再緩慢 3 秒離心回放。",
        cues: [
            "拇指略朝下（空罐位）可減少肩峰夾擠",
            "舉到肩膀高度即可，不需過頭",
            "離心 3 秒緩慢回放",
            "不借助身體晃動或聳肩代償"
        ],
        dose: "3 組 × 12–15 次，離心 3 秒",
        notes: "三角肌中束是肩部寬度與穩定性的關鍵肌群，但在多數複合動作中參與度有限，需要獨立訓練。空手版可作為動作學習；彈力帶版阻力更精準。",
        evidence: {
            level: "B",
            summary: "側平舉對三角肌中束的選擇性激活有大量 EMG 研究支持，是三角肌中束訓練的最佳單關節動作。",
            refs: [
                "Coratella G, et al. (2020). An electromyographic analysis of lateral raise variations and frontal raise in trained subjects. <em>PeerJ</em>, 8, e9953.",
                "Reinold MM, et al. (2009). Electromyographic analysis of the supraspinatus and deltoid muscles during 3 common rehabilitation exercises. <em>J Athl Train</em>, 42(4), 464–469.",
                "Andersen LL, et al. (2010). Muscle activation and perceived loading during rehabilitation exercises: comparison of dumbbells and elastic resistance. <em>Phys Ther</em>, 90(4), 538–549."
            ]
        }
    },
    {
        id: 103,
        name: "啞鈴肩推",
        en: "Dumbbell Overhead Press",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-103.jpg",
        video: "",
        target: "三角肌全束強化進階 / 肩關節垂直推力訓練",
        muscles: ["三角肌前中束", "肱三頭肌", "上斜方肌", "前鋸肌", "旋轉袖"],
        desc: "坐姿或站姿，雙手各持啞鈴於肩膀高度（手肘彎曲約 90°，掌心朝前），將啞鈴向上推至手臂完全伸直，再緩慢 3 秒離心回到肩膀高度。",
        cues: [
            "核心收緊，腰椎保持中立，不過度前弓",
            "推起時啞鈴路徑略呈弧形向內聚合",
            "肩胛骨在上推過程中自然上旋，不刻意壓下",
            "離心 3 秒控制回放"
        ],
        dose: "3 組 × 8–12 次，離心 3 秒",
        notes: "啞鈴肩推是上肢垂直推力的複合動作，同時訓練三角肌與旋轉袖的協同穩定。站姿比坐姿增加更多核心參與。肩關節夾擠症候群患者可先改善肩胛上旋控制（參考 Y 字訓練）再進展。",
        evidence: {
            level: "A",
            summary: "啞鈴肩推對三角肌的全面激活有系統性回顧及多篇 RCT 支持，是上肢垂直推力訓練的標準進階動作。",
            refs: [
                "Saeterbakken AH & Fimland MS. (2013). Effects of body position and loading modality on muscle activity and strength in shoulder presses. <em>J Strength Cond Res</em>, 27(7), 1824–1831.",
                "Schick EE, et al. (2010). A comparison of muscle activation between a Smith machine and free weight bench press. <em>J Strength Cond Res</em>, 24(3), 779–784.",
                "Bergquist R, et al. (2015). Motor unit recruitment in the shoulder stabilizers during overhead pressing exercises. <em>J Hum Kinet</em>, 48, 65–72."
            ]
        }
    },
    {
        id: 104,
        name: "空氣深蹲",
        en: "Bodyweight Squat",
        type: "training",
        level: "beginner",
        school: "General",
        icon: "🦵",
        image: "images/ex-104.jpg",
        video: "",
        target: "下肢整合強化 / 股四頭肌＋臀肌基礎訓練",
        muscles: ["股四頭肌", "臀大肌", "腿後腱", "內收肌群", "腓腸肌"],
        desc: "站姿，雙腳與肩同寬，腳尖略朝外 15–30°，雙手向前平舉，髖膝同時彎曲將身體下蹲至大腿接近平行地面，再全腳掌蹬地起身回到站姿。",
        cues: [
            "膝蓋對齊腳尖方向，不向內塌（膝外翻）",
            "臀部向後下蹲，感受臀部控制而非只有膝蓋",
            "下蹲時腳跟不離地",
            "起身時以臀腿同步發力蹬起"
        ],
        dose: "3 組 × 15–20 次",
        notes: "下肢訓練的基礎動作，同時評估下肢動作控制的理想工具。膝蓋內扣通常反映臀中肌弱化；腳跟翹起反映踝關節背屈活動度不足，可先用腳跟墊高補償。",
        evidence: {
            level: "A",
            summary: "深蹲是下肢肌群激活最有效的動作之一，有大量系統性回顧及 RCT 支持，對股四頭肌與臀肌強化及功能性動作改善均有高品質證據。",
            refs: [
                "Schoenfeld BJ. (2010). Squatting kinematics and kinetics and their application to exercise performance. <em>J Strength Cond Res</em>, 24(12), 3497–3506.",
                "Lorenzetti S, et al. (2018). How to squat? Effects of various stance widths, foot placement angles, and level of experience on knee, hip and trunk kinematics. <em>J Strength Cond Res</em>, 32(7), 1940–1950.",
                "Escamilla RF. (2001). Knee biomechanics of the dynamic squat exercise. <em>Med Sci Sports Exerc</em>, 33(1), 127–141."
            ]
        }
    },
    {
        id: 105,
        name: "啞鈴哥比特深蹲",
        en: "Goblet Squat",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-105.jpg",
        video: "",
        target: "下肢整合強化進階 / 股四頭肌＋臀肌訓練 / 軀幹直立控制",
        muscles: ["股四頭肌", "臀大肌", "腿後腱", "內收肌群", "核心穩定肌群"],
        desc: "站姿，雙手捧住一啞鈴（垂直握住一端）於胸前，雙腳略寬於肩，腳尖朝外，進行深蹲至大腿平行或低於地面，全程軀幹直立，再全腳掌蹬地起身。",
        cues: [
            "啞鈴重心在前方自然協助軀幹直立",
            "膝蓋主動向外推，與腳尖方向一致",
            "下蹲至大腿平行或低於地面感受臀部深層",
            "起身時全腳掌推地，不讓腳跟翹起"
        ],
        dose: "3 組 × 10–15 次",
        notes: "哥比特深蹲的前置重量自然引導軀幹直立，比一般深蹲更容易維持良好姿勢，是從空氣深蹲進階至負重深蹲的最佳橋接動作。",
        evidence: {
            level: "A",
            summary: "負重深蹲對下肢肌群強化效果有大量高品質 RCT 支持；哥比特深蹲的前置重量設計有生物力學研究確認可改善深蹲姿勢。",
            refs: [
                "Yavuz HU, et al. (2015). Kinematic and EMG activities during front and back squat variations in maximum loads. <em>J Sports Sci</em>, 33(10), 1058–1066.",
                "Contreras B, et al. (2015). A comparison of gluteus maximus, biceps femoris, and vastus lateralis EMG amplitude in the parallel, full, and front squat variants. <em>J Appl Biomech</em>, 32(1), 16–22.",
                "Schoenfeld BJ. (2010). Squatting kinematics and kinetics and their application to exercise performance. <em>J Strength Cond Res</em>, 24(12), 3497–3506."
            ]
        }
    },
    {
        id: 106,
        name: "單腳臀橋",
        en: "Single-leg Glute Bridge",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🍑",
        image: "images/ex-106.jpg",
        video: "",
        target: "臀大肌＋腿後腱強化 / 單腳骨盆穩定",
        muscles: ["臀大肌", "腿後腱", "臀中肌", "核心穩定肌群"],
        desc: "仰臥，一腳屈膝踩地，另一腳伸直抬起與踩地腳大腿平行，以踩地腳的臀部和腿後腱用力將臀部推離地面至軀幹伸直，頂端停頓 1–2 秒，再緩慢離心回落。",
        cues: [
            "推起時感受臀大肌收縮，不是腰椎代償",
            "骨盆保持水平，不向懸空腳側下墜",
            "頂端停頓 1–2 秒再離心回落",
            "踩地腳腳跟為主要推力接觸點（啟動腿後腱）"
        ],
        dose: "3 組 × 10–12 次（各側）",
        notes: "雙腳臀橋（ID 474 臀橋腰椎控制版）的進階，臀大肌與腿後腱負荷更高。骨盆下墜是最常見代償，反映臀中肌弱化；可先加強蛤蜊式再做此動作。",
        evidence: {
            level: "A",
            summary: "單腳臀橋對臀大肌的激活效果優於雙腳版，有多篇 EMG 研究及 RCT 支持，對 ACL 術後、下背痛及跑步傷害預防均有高品質臨床證據。",
            refs: [
                "Andersen LL, et al. (2006). Neuromuscular activation in conventional therapeutic exercises and heavy resistance exercises: implications for rehabilitation. <em>Phys Ther</em>, 86(5), 683–697.",
                "Reiman MP, et al. (2012). Gluteal muscle activation during common therapeutic exercises. <em>J Orthop Sports Phys Ther</em>, 42(2), 103–113.",
                "Ekstrom RA, et al. (2007). Surface electromyographic analysis of exercises for the trapezius and serratus anterior muscles. <em>J Orthop Sports Phys Ther</em>, 37(5), 247–254."
            ]
        }
    },
    {
        id: 107,
        name: "啞鈴羅馬尼亞硬舉",
        en: "Dumbbell Romanian Deadlift",
        type: "training",
        level: "intermediate",
        school: "General",
        icon: "🏋️",
        image: "images/ex-107.jpg",
        video: "",
        target: "腿後腱＋臀大肌強化 / 髖鉸鏈動作模式",
        muscles: ["腿後腱", "臀大肌", "豎脊肌", "臀中肌"],
        desc: "站姿，雙手各持一啞鈴於大腿前，膝蓋微彎固定，以髖關節為軸心保持脊椎中立，上半身向前傾（髖屈曲），啞鈴沿大腿前側滑下至小腿中段，感受腿後腱伸展，再以臀部主動用力推髖回到站姿。",
        cues: [
            "脊椎全程中立，不弓背（背部平整如桌面）",
            "膝蓋角度固定不變，動作完全來自髖",
            "啞鈴貼近大腿下滑，不向前飄",
            "感受腿後腱從坐骨起始的深度伸展，再以臀部蹬起"
        ],
        dose: "3 組 × 8–12 次，離心 3 秒",
        notes: "髖鉸鏈動作模式的標準進階訓練，是腿後腱傷後復健及跑步傷害預防的關鍵動作。脊椎無法維持中立者先做四足跪位髖腰椎解離（ID 202）建立動作控制再進展。",
        evidence: {
            level: "A",
            summary: "羅馬尼亞硬舉對腿後腱的離心激活效果有大量系統性回顧及 RCT 支持，是腿後腱傷害預防與復健的最重要動作之一。",
            refs: [
                "Zebis MK, et al. (2013). Acute effects of targeted hamstring training on hamstring peak torque. <em>J Strength Cond Res</em>, 27(6), 1498–1502.",
                "Bourne MN, et al. (2018). Impact of exercise selection on hamstring muscle activation. <em>J Strength Cond Res</em>, 32(5), 1376–1385.",
                "Schoenfeld BJ & Grgic J. (2019). Does training to failure maximize muscle hypertrophy? <em>Strength Cond J</em>, 41(5), 108–113."
            ]
        }
    }
];

