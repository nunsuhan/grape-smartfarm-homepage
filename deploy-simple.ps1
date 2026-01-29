# 간단한 배포 스크립트 - 압축 파일 생성 후 수동 업로드
# 사용법: .\deploy-simple.ps1

$LOCAL_PATH = "d:\homepage"
$ARCHIVE_NAME = "farmsense-frontend-$(Get-Date -Format 'yyyyMMdd-HHmmss').zip"
$ARCHIVE_PATH = Join-Path $LOCAL_PATH $ARCHIVE_NAME

Write-Host "=== FarmSense 프론트엔드 압축 파일 생성 ===" -ForegroundColor Green

# 빌드 확인
if (-not (Test-Path "$LOCAL_PATH\.next")) {
    Write-Host "빌드 실행 중..." -ForegroundColor Yellow
    Set-Location $LOCAL_PATH
    npm run build
}

# 압축할 파일/폴더
$itemsToArchive = @(
    "app",
    "components",
    "lib", 
    "public",
    ".next",
    "package.json",
    "package-lock.json",
    "next.config.js",
    "tsconfig.json",
    "tailwind.config.js",
    "postcss.config.js",
    "eslint.config.mjs",
    ".gitignore"
)

Write-Host "`n압축 파일 생성 중: $ARCHIVE_NAME" -ForegroundColor Yellow

# PowerShell 5.0+ Compress-Archive 사용
$tempDir = Join-Path $env:TEMP "farmsense-deploy-$(Get-Random)"
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

foreach ($item in $itemsToArchive) {
    $source = Join-Path $LOCAL_PATH $item
    if (Test-Path $source) {
        Write-Host "  추가: $item" -ForegroundColor Gray
        Copy-Item -Path $source -Destination (Join-Path $tempDir $item) -Recurse -Force
    }
}

Compress-Archive -Path "$tempDir\*" -DestinationPath $ARCHIVE_PATH -Force
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "`n✓ 압축 완료: $ARCHIVE_PATH" -ForegroundColor Green
Write-Host "`n다음 단계:" -ForegroundColor Yellow
Write-Host "1. scp로 서버에 업로드:" -ForegroundColor White
Write-Host "   scp -i `"C:\Users\한문수\id_han_new`" `"$ARCHIVE_PATH`" django@152.42.248.236:/tmp/" -ForegroundColor Cyan
Write-Host "`n2. 서버에서 압축 해제:" -ForegroundColor White  
Write-Host "   ssh -i `"C:\Users\한문수\id_han_new`" django@152.42.248.236" -ForegroundColor Cyan
Write-Host "   cd /home/django/frontend  # 실제 경로에 맞게 수정" -ForegroundColor Cyan
Write-Host "   unzip /tmp/$ARCHIVE_NAME" -ForegroundColor Cyan
Write-Host "   npm install --production" -ForegroundColor Cyan
