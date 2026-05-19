# compress-images.ps1
# Convert PNG images to JPEG and update data.js

param([int]$Quality = 85)

$ImgDir = Join-Path $PSScriptRoot "images"
$DataJs = Join-Path $PSScriptRoot "data.js"

Add-Type -AssemblyName System.Drawing

$src     = [System.IO.File]::ReadAllText($DataJs, [System.Text.Encoding]::UTF8)
$q       = [char]34
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params  = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)

$pngs = Get-ChildItem -Path $ImgDir -Filter "ex-*.png" -ErrorAction SilentlyContinue
if (-not $pngs) { Write-Host "No PNG files found in $ImgDir"; exit }

Write-Host "Converting $($pngs.Count) PNG files to JPEG (quality $Quality)..." -ForegroundColor Cyan

$total = 0; $saved = 0

foreach ($png in $pngs) {
    $jpg  = [System.IO.Path]::ChangeExtension($png.FullName, ".jpg")
    $before = $png.Length

    try {
        $img = [System.Drawing.Image]::FromFile($png.FullName)
        $img.Save($jpg, $encoder, $params)
        $img.Dispose()

        $after = (Get-Item $jpg).Length
        $pct   = [math]::Round((1 - $after / $before) * 100)
        Write-Host "  $($png.Name) -> $([math]::Round($before/1KB))KB -> $([math]::Round($after/1KB))KB (-$pct%)" -ForegroundColor Green

        # Update data.js path
        $id      = [regex]::Match($png.Name, '\d+').Value
        $oldPath = "images/ex-$id.png"
        $newPath = "images/ex-$id.jpg"
        $src     = $src.Replace($q + $oldPath + $q, $q + $newPath + $q)

        Remove-Item $png.FullName
        $total += $before; $saved += ($before - $after)
    } catch {
        Write-Host "  FAILED $($png.Name): $_" -ForegroundColor Red
    }
}

[System.IO.File]::WriteAllText($DataJs, $src, [System.Text.Encoding]::UTF8)

Write-Host ""
Write-Host "Done. Total saved: $([math]::Round($saved/1MB, 1)) MB ($([math]::Round($saved/$total*100))% reduction)" -ForegroundColor Cyan
Write-Host "data.js updated." -ForegroundColor Cyan
