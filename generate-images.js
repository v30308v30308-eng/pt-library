// generate-images.js
// 執行: node generate-images.js
// 生成所有動作的 SVG 示意圖，並更新 data.js 的 image 欄位

const fs   = require('fs');
const path = require('path');

const OUT_DIR  = path.join(__dirname, 'images');
const DATA_JS  = path.join(__dirname, 'data.js');

// ── 顏色對照（與 styles.css 一致） ──────────────────────────
const palette = {
  stretch:  { a:'#FFF7ED', b:'#FED7AA', ink:'#EA580C' },
  training: { a:'#F5F3FF', b:'#DDD6FE', ink:'#7C3AED' },
  arom:     { a:'#ECFEFF', b:'#A5F3FC', ink:'#0891B2' },
  mwm:      { a:'#FFFBEB', b:'#FDE68A', ink:'#B45309' },
};

// ── SVG 輔助函式 ────────────────────────────────────────────
const W = 280, H = 155;

function wrap(body, a, b) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0%" stop-color="${a}"/><stop offset="100%" stop-color="${b}"/>
</linearGradient></defs>
<rect width="${W}" height="${H}" fill="url(#g)"/>
${body}
</svg>`;
}

const ln = (x1,y1,x2,y2,c,w=2.5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

const cr = (cx,cy,r,c) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="white" stroke="${c}" stroke-width="2.5"/>`;

const floor = (c) =>
  `<line x1="30" y1="120" x2="250" y2="120" stroke="#CBD5E1" stroke-width="1.5"/>`;

const mat = () =>
  `<line x1="30" y1="110" x2="250" y2="110" stroke="#CBD5E1" stroke-width="1.5"/>`;

// ── 7 種姿勢模板 ────────────────────────────────────────────

function posSupine(c) {
  // 仰臥：頭在左，身體水平，膝蓋彎曲
  return mat() +
    cr(60,90,9,c) +
    ln(69,90,162,90,c) +
    ln(100,90,96,76,c,2)+ln(96,76,113,72,c,2) +
    ln(162,90,196,79,c) +
    ln(196,79,198,110,c);
}

function posProne(c) {
  // 俯臥：頭在左，身體水平面朝下，手肘撐起上半身
  return mat() +
    cr(60,88,9,c) +
    ln(69,93,200,93,c) +
    ln(88,93,88,110,c,2)+ln(120,93,120,110,c,2) +
    ln(200,93,240,93,c);
}

function posSeated(c) {
  // 坐姿：身體直立，腿向前彎
  return floor(c) +
    cr(140,26,9,c) +
    ln(140,35,140,76,c) +
    ln(125,76,105,105,c)+ln(105,105,100,120,c) +
    ln(155,76,175,105,c)+ln(175,105,180,120,c) +
    ln(134,48,116,70,c,2)+ln(146,48,164,70,c,2);
}

function posStanding(c) {
  // 站姿：直立，雙臂自然垂下
  return floor(c) +
    cr(140,20,9,c) +
    ln(140,29,140,76,c) +
    ln(128,43,112,70,c,2)+ln(152,43,168,70,c,2) +
    ln(130,76,120,120,c)+ln(150,76,160,120,c);
}

function posQuadruped(c) {
  // 四足跪：面朝右，手腳撐地，脊椎水平
  return floor(c) +
    cr(68,63,9,c) +
    ln(77,68,200,68,c) +
    ln(90,68,90,120,c)+ln(107,68,107,120,c) +
    ln(183,68,183,120,c)+ln(200,68,200,120,c);
}

function posHalfKneeling(c) {
  // 半跪姿：右腿在前膝蓋彎曲，左腿在後膝蓋跪地
  return floor(c) +
    cr(148,24,9,c) +
    ln(148,33,148,74,c) +
    ln(141,74,108,97,c)+ln(108,97,82,120,c) +
    ln(155,74,193,97,c)+ln(193,97,193,120,c) +
    ln(142,46,126,68,c,2)+ln(154,46,172,68,c,2);
}

function posSidelying(c) {
  // 側臥：頭在左，身體側躺
  return mat() +
    cr(62,86,9,c) +
    ln(71,93,175,93,c) +
    ln(96,93,88,78,c,2)+ln(88,78,110,72,c,2) +
    ln(175,93,218,83,c) +
    ln(175,93,220,100,c);
}

// ── 各動作位置對照表 ────────────────────────────────────────
// id → 姿勢
const posMap = {
   1:'supine',        // Dead Bug
   2:'quadruped',     // Bear Position
   3:'seated',        // DNS 坐姿呼吸
   4:'supine',        // DNS 仰臥旋轉
   5:'seated',        // DNS 坐姿骨盆
   6:'quadruped',     // KC 腰椎屈曲控制
   // 7: Wikimedia
   8:'seated',        // KC 坐姿骨盆 AROM
   9:'halfKneeling',  // KC 髂腰肌伸展
  10:'standing',      // KC 站姿胸腰解離
  11:'quadruped',     // DNS 爬行預備
  12:'quadruped',     // DNS 對角線爬行
  13:'standing',      // DNS 站姿
  14:'supine',        // DNS 仰臥
  15:'quadruped',     // DNS 四足跪
  // 16: Wikimedia
  17:'standing',      // KC 站姿髖屈曲控制
  18:'standing',      // KC 肩胛後縮下壓
  19:'quadruped',     // KC 腰椎伸展控制
  20:'supine',        // KC 腘繩肌伸展
  21:'supine',        // KC 深層頸屈肌
  22:'seated',        // KC 坐姿胸椎分節
  23:'supine',        // KC 髖外旋伸展
  24:'standing',      // DNS 站姿平衡
  25:'standing',      // KC 單腳旋轉控制
  26:'seated',        // Mulligan 頸椎
  27:'standing',      // Mulligan 踝
  28:'standing',      // Mulligan 腰椎
  29:'standing',      // Mulligan 肩
  30:'standing',      // Mulligan 膝
  31:'standing',      // FRC 髖 AROM
  32:'standing',      // FRC 肩 AROM
  33:'supine',        // FRC 髖 PAILs/RAILs
  34:'standing',      // 髖 AROM
  35:'standing',      // 腰椎 AROM
  36:'standing',      // 腰椎 AROM
  37:'seated',        // 頸椎 AROM
  38:'seated',        // 頸椎側彎伸展
  39:'supine',        // 泡棉滾筒胸椎伸展
  40:'supine',        // 仰臥抱膝
  // 41: Wikimedia
  42:'standing',      // 肱二頭肌伸展
  43:'standing',      // 腕屈肌伸展
  44:'standing',      // 小腿三頭肌伸展
  45:'standing',      // 肩
  46:'standing',      // 肘
  47:'standing',      // 腕
  48:'standing',      // 膝
  49:'standing',      // 踝
  50:'standing',      // 肘 AROM
  51:'standing',      // 腕 AROM
  52:'standing',      // 膝 AROM
  53:'standing',      // 踝 AROM
  54:'seated',        // 胸椎 MWM
  55:'standing',      // 肘 MWM
  56:'standing',      // 腕 MWM
  57:'standing',      // 髖 MWM
  58:'standing',      // 肩訓練
  59:'standing',      // 肩訓練
  60:'standing',      // 肩訓練
  61:'standing',      // 肩訓練
  62:'standing',      // 肩訓練
  63:'standing',      // 肩訓練
  64:'standing',      // 肩訓練
  65:'standing',      // 肩訓練
  66:'standing',      // 肩訓練
  67:'standing',      // 肩訓練
  68:'standing',      // 肩訓練
  69:'standing',      // 肩訓練
  70:'standing',      // 髖訓練
  71:'sidelying',     // 蛤蜊式
  72:'standing',      // 站姿髖外轉
  73:'standing',      // 短足運動
  74:'seated',        // 腳趾控制
  75:'standing',      // 脛後肌
  77:'seated',        // 上斜方肌伸展
  78:'quadruped',     // 穿針引線
  79:'standing',      // 腰方肌側彎
  80:'prone',         // 眼鏡蛇腹肌伸展
  // 81: Wikimedia
  82:'standing',      // 肱三頭肌過頭
  83:'standing',      // 腕伸肌伸展
  84:'seated',        // 蝴蝶式
  85:'standing',      // 站姿股四頭肌
  86:'seated',        // 足底筋膜
  87:'standing',      // 單腳提踵
};

// Wikimedia 圖片（不生成 SVG，直接寫入 data.js）
const wikiImages = {
   7: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Birddog_exercise.svg',
  16: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Bridge_exercise.svg',
  41: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Diagram_showing_a_shoulder_stretch_exercise_after_breast_reconstruction_surgery_CRUK_078.svg',
  81: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Diagram_showing_how_to_do_a_chest_stretch_exercise_after_breast_reconstruction_surgery_CRUK_142.svg',
};

// Exercise type 對照
const typeMap = {
  1:'training',2:'training',3:'training',4:'arom',5:'arom',
  6:'training',7:'training',8:'arom',9:'stretch',10:'arom',
  11:'training',12:'arom',13:'training',14:'training',15:'training',
  16:'training',17:'training',18:'training',19:'training',20:'stretch',
  21:'training',22:'arom',23:'stretch',24:'training',25:'training',
  26:'mwm',27:'mwm',28:'mwm',29:'mwm',30:'mwm',
  31:'arom',32:'arom',33:'stretch',34:'arom',35:'arom',36:'arom',37:'arom',
  38:'stretch',39:'arom',40:'stretch',41:'stretch',42:'stretch',43:'stretch',44:'stretch',
  45:'training',46:'training',47:'training',48:'training',49:'training',
  50:'arom',51:'arom',52:'arom',53:'arom',
  54:'mwm',55:'mwm',56:'mwm',57:'mwm',
  58:'training',59:'training',60:'training',61:'training',62:'training',63:'training',
  64:'training',65:'training',66:'training',67:'training',68:'training',69:'training',
  70:'training',71:'training',72:'training',
  73:'training',74:'training',75:'training',
  77:'stretch',78:'arom',79:'stretch',80:'stretch',81:'stretch',
  82:'stretch',83:'stretch',84:'stretch',85:'stretch',86:'stretch',
  87:'training',
};

const posFn = {
  supine:       posSupine,
  prone:        posProne,
  seated:       posSeated,
  standing:     posStanding,
  quadruped:    posQuadruped,
  halfKneeling: posHalfKneeling,
  sidelying:    posSidelying,
};

// ── 生成 SVG 並寫檔 ─────────────────────────────────────────
let generated = 0;
for (const [id, pos] of Object.entries(posMap)) {
  const nid  = Number(id);
  const type = typeMap[nid] || 'training';
  const pal  = palette[type];
  const body = (posFn[pos] || posStanding)(pal.ink);
  const svg  = wrap(body, pal.a, pal.b);
  fs.writeFileSync(path.join(OUT_DIR, `ex-${nid}.svg`), svg, 'utf8');
  generated++;
}
console.log(`✓ 生成 ${generated} 個 SVG`);

// ── 更新 data.js 的 image 欄位 ──────────────────────────────
let src = fs.readFileSync(DATA_JS, 'utf8');

// SVG 圖片（本地路徑）
for (const id of Object.keys(posMap)) {
  const nid = Number(id);
  const imgPath = `images/ex-${nid}.svg`;
  // 精準替換：在 id: NID 之後的第一個 image: ""
  // 使用分段替換策略：找到 id 區塊後替換 image 欄位
  src = src.replace(
    new RegExp(`(id:\\s*${nid},[\\s\\S]*?image:\\s*)""`),
    `$1"${imgPath}"`
  );
}

// Wikimedia 圖片（外部 URL）
for (const [id, url] of Object.entries(wikiImages)) {
  src = src.replace(
    new RegExp(`(id:\\s*${id},[\\s\\S]*?image:\\s*)""`),
    `$1"${url}"`
  );
}

fs.writeFileSync(DATA_JS, src, 'utf8');
console.log('✓ data.js 已更新');
