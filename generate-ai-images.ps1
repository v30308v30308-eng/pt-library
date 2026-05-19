# generate-ai-images.ps1
param(
    [int[]]$Ids = @(),
    [switch]$Force,
    [string]$ApiKey = $env:OPENAI_API_KEY,
    [int]$DelaySeconds = 12
)

if (-not $ApiKey) { Write-Host "ERROR: Set `$env:OPENAI_API_KEY first." -ForegroundColor Red; exit 1 }

$OutDir = Join-Path $PSScriptRoot "images"
$DataJs = Join-Path $PSScriptRoot "data.js"
if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory $OutDir | Out-Null }

$src = [System.IO.File]::ReadAllText($DataJs, [System.Text.Encoding]::UTF8)
$q   = [char]34

$exercises = @{}
$pat = "(?s)id:\s*(\d+),.*?en:\s*$q([^$q]+)$q.*?desc:\s*$q([^$q]+)$q"
foreach ($m in [regex]::Matches($src, $pat)) {
    $id = [int]$m.Groups[1].Value
    $exercises[$id] = @{ en = $m.Groups[2].Value; desc = $m.Groups[3].Value }
}
Write-Host "Parsed $($exercises.Count) exercises" -ForegroundColor Gray

# ── Step 1: GPT-4o web search → detailed visual description ───────
function Get-VisualDescription($ex) {
    $enEsc = ($ex.en) -replace '"','\"'
    $input = "Search online for how to perform the physical therapy exercise called `"$enEsc`". Based on what you find, write a detailed visual description (4-6 sentences) that describes EXACTLY how the exercise looks. Cover: (1) starting body position, (2) exact position of arms and legs, (3) what movement happens and in which direction, (4) the ending position. Use simple everyday words only — no medical or anatomical terms. The person wears athletic clothing."

    $inputEsc = $input -replace '\\','\\' -replace '"','\"' -replace "`n",'\n'
    $json  = '{"model":"gpt-4o","tools":[{"type":"web_search_preview"}],"input":"' + $inputEsc + '"}'
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
    $resp  = Invoke-RestMethod -Uri "https://api.openai.com/v1/responses" -Method POST `
        -Headers @{ Authorization="Bearer $ApiKey"; "Content-Type"="application/json; charset=utf-8" } `
        -Body $bytes -TimeoutSec 60

    $text = ($resp.output | Where-Object { $_.type -eq "message" } | Select-Object -Last 1).content |
            Where-Object { $_.type -eq "output_text" } | Select-Object -ExpandProperty text
    return $text.Trim()
}

# ── Step 2: gpt-image-1 → generate image ──────────────────────────
function Generate-Image($visualDesc, $outFile) {
    $descEsc = $visualDesc -replace '\\','\\' -replace '"','\"' -replace "`n",' '
    $prompt  = "Physical therapy exercise illustration. Clean white background. One person only, wearing teal athletic clothes. Side view, full body visible. $descEsc Simple flat 2D illustration style, clear body outline, teal and light gray colors, no text, no labels."
    $pEsc    = $prompt -replace '\\','\\' -replace '"','\"'

    $json  = '{"model":"gpt-image-1","prompt":"' + $pEsc + '","n":1,"size":"1536x1024","quality":"medium"}'
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
    $resp  = Invoke-RestMethod -Uri "https://api.openai.com/v1/images/generations" -Method POST `
        -Headers @{ Authorization="Bearer $ApiKey"; "Content-Type"="application/json; charset=utf-8" } `
        -Body $bytes -TimeoutSec 120

    $imgBytes = [System.Convert]::FromBase64String($resp.data[0].b64_json)
    [System.IO.File]::WriteAllBytes($outFile, $imgBytes)
}

# ── Main ────────────────────────────────────────────────────────
$targetIds = if ($Ids.Count -gt 0) { $Ids } else { $exercises.Keys | Sort-Object }
Write-Host "Processing $($targetIds.Count) exercises`n" -ForegroundColor Cyan
$done = 0; $skipped = 0; $failed = 0

foreach ($id in $targetIds) {
    if (-not $exercises.ContainsKey($id)) { $skipped++; continue }

    $outFile = Join-Path $OutDir "ex-$id.png"
    if ((Test-Path $outFile) -and -not $Force) {
        Write-Host "[ID $id] exists, skipping" -ForegroundColor DarkGray; $skipped++; continue
    }

    $ex = $exercises[$id]
    Write-Host "[ID $id] $($ex.en)" -ForegroundColor White

    try {
        Write-Host "  -> GPT-4o: searching exercise description..." -ForegroundColor DarkGray
        $desc = Get-VisualDescription $ex
        Write-Host "  -> $desc" -ForegroundColor DarkCyan

        Write-Host "  -> gpt-image-1: generating..." -ForegroundColor DarkGray
        Generate-Image $desc $outFile
        Write-Host "  -> OK ($([math]::Round((Get-Item $outFile).Length/1KB)) KB)" -ForegroundColor Green

        $imgPath = "images/ex-$id.png"
        $src = [System.Text.RegularExpressions.Regex]::Replace(
            $src, "(?s)(id:\s*$id\b.*?image:\s*)$q[^$q]*$q", "`${1}$q$imgPath$q"
        )
        $done++
    } catch {
        Write-Host "  -> FAILED: $_" -ForegroundColor Red
        $failed++
    }

    if ($id -ne $targetIds[-1]) {
        Write-Host "  waiting $DelaySeconds s...`n" -ForegroundColor DarkGray
        Start-Sleep -Seconds $DelaySeconds
    }
}

[System.IO.File]::WriteAllText($DataJs, $src, [System.Text.Encoding]::UTF8)
Write-Host "`nDone. OK:$done  Skipped:$skipped  Failed:$failed" -ForegroundColor Cyan
