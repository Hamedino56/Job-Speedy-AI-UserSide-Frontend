# PowerShell script to download Google Fonts locally for GDPR compliance
# Run this script: .\download-fonts.ps1

$fontsDir = Join-Path $PSScriptRoot "public\fonts"

# Create fonts directory if it doesn't exist
if (-not (Test-Path $fontsDir)) {
    New-Item -ItemType Directory -Path $fontsDir -Force | Out-Null
}

Write-Host "🚀 Starting font download for GDPR compliance..." -ForegroundColor Green
Write-Host ""

# Font URLs from Google Fonts (direct woff2 links)
$fonts = @{
    "Poppins-300.woff2" = "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2"
    "Poppins-400.woff2" = "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2"
    "Poppins-500.woff2" = "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2"
    "Poppins-600.woff2" = "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2"
    "Poppins-700.woff2" = "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2"
    "Poppins-800.woff2" = "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2"
    "Gagalin-400.woff2" = "https://fonts.gstatic.com/s/gagalin/v14/H4cBXKSlF2XlVJjAeR8.woff2"
}

$downloaded = 0
$failed = 0

foreach ($font in $fonts.GetEnumerator()) {
    $filename = $font.Key
    $url = $font.Value
    $filepath = Join-Path $fontsDir $filename
    
    Write-Host "📦 Downloading $filename..." -NoNewline
    
    try {
        # Download using Invoke-WebRequest
        $response = Invoke-WebRequest -Uri $url -OutFile $filepath -UseBasicParsing -ErrorAction Stop
        
        if (Test-Path $filepath) {
            $fileSize = (Get-Item $filepath).Length / 1KB
            Write-Host " ✓ ($([math]::Round($fileSize, 2)) KB)" -ForegroundColor Green
            $downloaded++
        } else {
            Write-Host " ✗ Failed" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host " ✗ Error: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host "✅ Download complete!" -ForegroundColor Green
Write-Host "   Downloaded: $downloaded files" -ForegroundColor Green
if ($failed -gt 0) {
    Write-Host "   Failed: $failed files" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "⚠️  Some fonts failed to download. Please download them manually:" -ForegroundColor Yellow
    Write-Host "   1. Visit: https://gwfh.mranftl.com/fonts" -ForegroundColor Yellow
    Write-Host "   2. Search for 'Poppins' and 'Gagalin'" -ForegroundColor Yellow
    Write-Host "   3. Download and extract to public/fonts/" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "🎉 All fonts downloaded successfully!" -ForegroundColor Green
    Write-Host "   Next: Run 'npm start' to test the application" -ForegroundColor Cyan
}
