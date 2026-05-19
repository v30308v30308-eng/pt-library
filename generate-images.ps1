# generate-images.ps1
# 執行: .\generate-images.ps1

$OutDir = Join-Path $PSScriptRoot "images"
$DataJs = Join-Path $PSScriptRoot "data.js"

# ── 顏色對照 ────────────────────────────────────────────────
$palette = @{
  stretch  = @{ a='#FFF7ED'; b='#FED7AA'; ink='#EA580C' }
  training = @{ a='#F5F3FF'; b='#DDD6FE'; ink='#7C3AED' }
  arom     = @{ a='#ECFEFF'; b='#A5F3FC'; ink='#0891B2' }
  mwm      = @{ a='#FFFBEB'; b='#FDE68A'; ink='#B45309' }
}

# ── SVG 輔助 ────────────────────────────────────────────────
function Wrap($body, $a, $b) {
"<svg xmlns=""http://www.w3.org/2000/svg"" viewBox=""0 0 280 155"">
<defs><linearGradient id=""g"" x1=""0"" y1=""0"" x2=""1"" y2=""1"">
<stop offset=""0%"" stop-color=""$a""/><stop offset=""100%"" stop-color=""$b""/>
</linearGradient></defs>
<rect width=""280"" height=""155"" fill=""url(#g)""/>
$body
</svg>"
}

function L($x1,$y1,$x2,$y2,$c,$w=2.5) {
  "<line x1=""$x1"" y1=""$y1"" x2=""$x2"" y2=""$y2"" stroke=""$c"" stroke-width=""$w"" stroke-linecap=""round""/>"
}
function CR($cx,$cy,$r,$c) {
  "<circle cx=""$cx"" cy=""$cy"" r=""$r"" fill=""white"" stroke=""$c"" stroke-width=""2.5""/>"
}
function Mat()   { "<line x1=""30"" y1=""110"" x2=""250"" y2=""110"" stroke=""#CBD5E1"" stroke-width=""1.5""/>" }
function Floor() { "<line x1=""30"" y1=""120"" x2=""250"" y2=""120"" stroke=""#CBD5E1"" stroke-width=""1.5""/>" }

# ── 姿勢模板 ────────────────────────────────────────────────
function Supine($c) {
  (Mat) + (CR 60 90 9 $c) +
  (L 69 90 162 90 $c) +
  (L 100 90 96 76 $c 2) + (L 96 76 113 72 $c 2) +
  (L 162 90 196 79 $c) + (L 196 79 198 110 $c)
}

function Prone($c) {
  (Mat) + (CR 60 88 9 $c) +
  (L 69 93 200 93 $c) +
  (L 88 93 88 110 $c 2) + (L 120 93 120 110 $c 2) +
  (L 200 93 240 93 $c)
}

function Seated($c) {
  (Floor) + (CR 140 26 9 $c) +
  (L 140 35 140 76 $c) +
  (L 125 76 105 105 $c) + (L 105 105 100 120 $c) +
  (L 155 76 175 105 $c) + (L 175 105 180 120 $c) +
  (L 134 48 116 70 $c 2) + (L 146 48 164 70 $c 2)
}

function Standing($c) {
  (Floor) + (CR 140 20 9 $c) +
  (L 140 29 140 76 $c) +
  (L 128 43 112 70 $c 2) + (L 152 43 168 70 $c 2) +
  (L 130 76 120 120 $c) + (L 150 76 160 120 $c)
}

function Quadruped($c) {
  (Floor) + (CR 68 63 9 $c) +
  (L 77 68 200 68 $c) +
  (L 90 68 90 120 $c) + (L 107 68 107 120 $c) +
  (L 183 68 183 120 $c) + (L 200 68 200 120 $c)
}

function HalfKneeling($c) {
  (Floor) + (CR 148 24 9 $c) +
  (L 148 33 148 74 $c) +
  (L 141 74 108 97 $c) + (L 108 97 82 120 $c) +
  (L 155 74 193 97 $c) + (L 193 97 193 120 $c) +
  (L 142 46 126 68 $c 2) + (L 154 46 172 68 $c 2)
}

function Sidelying($c) {
  (Mat) + (CR 62 86 9 $c) +
  (L 71 93 175 93 $c) +
  (L 96 93 88 78 $c 2) + (L 88 78 110 72 $c 2) +
  (L 175 93 218 83 $c) + (L 175 93 220 100 $c)
}

# ── 位置對照表 [id, type, pos] ──────────────────────────────
$exercises = @(
  @(1,'training','supine'),@(2,'training','quadruped'),@(3,'training','seated'),
  @(4,'arom','supine'),@(5,'arom','seated'),@(6,'training','quadruped'),
  @(8,'arom','seated'),@(9,'stretch','halfKneeling'),@(10,'arom','standing'),
  @(11,'training','quadruped'),@(12,'arom','quadruped'),@(13,'training','standing'),
  @(14,'training','supine'),@(15,'training','quadruped'),
  @(17,'training','standing'),@(18,'training','standing'),
  @(19,'training','quadruped'),@(20,'stretch','supine'),
  @(21,'training','supine'),@(22,'arom','seated'),@(23,'stretch','supine'),
  @(24,'training','standing'),@(25,'training','standing'),
  @(26,'mwm','seated'),@(27,'mwm','standing'),@(28,'mwm','standing'),
  @(29,'mwm','standing'),@(30,'mwm','standing'),
  @(31,'arom','standing'),@(32,'arom','standing'),@(33,'stretch','supine'),
  @(34,'arom','standing'),@(35,'arom','standing'),@(36,'arom','standing'),
  @(37,'arom','seated'),@(38,'stretch','seated'),@(39,'arom','supine'),
  @(40,'stretch','supine'),@(42,'stretch','standing'),@(43,'stretch','standing'),
  @(44,'stretch','standing'),@(45,'training','standing'),@(46,'training','standing'),
  @(47,'training','standing'),@(48,'training','standing'),@(49,'training','standing'),
  @(50,'arom','standing'),@(51,'arom','standing'),@(52,'arom','standing'),
  @(53,'arom','standing'),@(54,'mwm','seated'),@(55,'mwm','standing'),
  @(56,'mwm','standing'),@(57,'mwm','standing'),
  @(58,'training','standing'),@(59,'training','standing'),@(60,'training','standing'),
  @(61,'training','standing'),@(62,'training','standing'),@(63,'training','standing'),
  @(64,'training','standing'),@(65,'training','standing'),@(66,'training','standing'),
  @(67,'training','standing'),@(68,'training','standing'),@(69,'training','standing'),
  @(70,'training','standing'),@(71,'training','sidelying'),@(72,'training','standing'),
  @(73,'training','standing'),@(74,'training','seated'),@(75,'training','standing'),
  @(77,'stretch','seated'),@(78,'arom','quadruped'),@(79,'stretch','standing'),
  @(80,'stretch','prone'),@(82,'stretch','standing'),@(83,'stretch','standing'),
  @(84,'stretch','seated'),@(85,'stretch','standing'),@(86,'stretch','seated'),
  @(87,'training','standing')
)

# Wikimedia 圖片
$wikiImages = @{
   7 = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Birddog_exercise.svg'
  16 = 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Bridge_exercise.svg'
  41 = 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Diagram_showing_a_shoulder_stretch_exercise_after_breast_reconstruction_surgery_CRUK_078.svg'
  81 = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Diagram_showing_how_to_do_a_chest_stretch_exercise_after_breast_reconstruction_surgery_CRUK_142.svg'
}

# ── 生成 SVG ────────────────────────────────────────────────
$count = 0
foreach ($ex in $exercises) {
  $id   = $ex[0]
  $type = $ex[1]
  $pos  = $ex[2]
  $pal  = $palette[$type]
  $ink  = $pal.ink
  $a    = $pal.a
  $b    = $pal.b

  $body = switch ($pos) {
    'supine'       { Supine $ink }
    'prone'        { Prone $ink }
    'seated'       { Seated $ink }
    'quadruped'    { Quadruped $ink }
    'halfKneeling' { HalfKneeling $ink }
    'sidelying'    { Sidelying $ink }
    default        { Standing $ink }
  }

  $svg = Wrap $body $a $b
  $outFile = Join-Path $OutDir "ex-$id.svg"
  [System.IO.File]::WriteAllText($outFile, $svg, [System.Text.Encoding]::UTF8)
  $count++
}
Write-Host "Done: generated $count SVG files"

# ── 更新 data.js ────────────────────────────────────────────
$src = [System.IO.File]::ReadAllText($DataJs, [System.Text.Encoding]::UTF8)

# SVG 本地圖片
foreach ($ex in $exercises) {
  $id      = $ex[0]
  $imgPath = "images/ex-$id.svg"
  $src = [System.Text.RegularExpressions.Regex]::Replace(
    $src,
    "(?s)(id:\s*$id\b.*?image:\s*)""""",
    "`$1""$imgPath"""
  )
}

# Wikimedia 圖片
foreach ($kv in $wikiImages.GetEnumerator()) {
  $id  = $kv.Key
  $url = $kv.Value
  $src = [System.Text.RegularExpressions.Regex]::Replace(
    $src,
    "(?s)(id:\s*$id\b.*?image:\s*)""""",
    "`$1""$url"""
  )
}

[System.IO.File]::WriteAllText($DataJs, $src, [System.Text.Encoding]::UTF8)
Write-Host "Done: data.js updated"
