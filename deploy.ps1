# FarmSense 프론트엔드 서버 배포 스크립트
# 사용법: .\deploy.ps1

$SSH_KEY = "C:\Users\한문수\id_han_new"
$SERVER_USER = "django"
$SERVER_HOST = "152.42.248.236"
$LOCAL_PATH = "d:\homepage"
$REMOTE_PATH = "/home/django/frontend"  # 서버 경로는 실제 경로에 맞게 수정 필요

Write-Host "=== FarmSense 프론트엔드 배포 시작 ===" -ForegroundColor Green

# 1. 빌드 확인
Write-Host "`n1. 빌드 확인 중..." -ForegroundColor Yellow
if (-not (Test-Path "$LOCAL_PATH\.next")) {
    Write-Host "   .next 폴더가 없습니다. 빌드를 실행합니다..." -ForegroundColor Yellow
    Set-Location $LOCAL_PATH
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "   빌드 실패!" -ForegroundColor Red
        exit 1
    }
}

# 2. 업로드할 파일 목록
Write-Host "`n2. 업로드할 파일 준비 중..." -ForegroundColor Yellow
$filesToUpload = @(
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

# 3. scp로 파일 업로드
Write-Host "`n3. 서버에 파일 업로드 중..." -ForegroundColor Yellow
Write-Host "   SSH 키: $SSH_KEY" -ForegroundColor Gray
Write-Host "   서버: $SERVER_USER@$SERVER_HOST" -ForegroundColor Gray
Write-Host "   대상 경로: $REMOTE_PATH" -ForegroundColor Gray

foreach ($item in $filesToUpload) {
    $localItem = Join-Path $LOCAL_PATH $item
    if (Test-Path $localItem) {
        Write-Host "   업로드 중: $item" -ForegroundColor Cyan
        scp -i "`"$SSH_KEY`" -r "`"$localItem`" ${SERVER_USER}@${SERVER_HOST}:${REMOTE_PATH}/"
        if ($LASTEXITCODE -ne 0) {
            Write-Host "   $item 업로드 실패!" -ForegroundColor Red
        }
    } else {
        Write-Host "   경로 없음: $item (건너뜀)" -ForegroundColor Gray
    }
}

Write-Host "`n4. 서버에서 npm install 실행 (필요시)..." -ForegroundColor Yellow
Write-Host "   다음 명령어를 서버에서 실행하세요:" -ForegroundColor Gray
Write-Host "   ssh -i `"$SSH_KEY`" ${SERVER_USER}@${SERVER_HOST}" -ForegroundColor White
Write-Host "   cd $REMOTE_PATH && npm install --production" -ForegroundColor White

Write-Host "`n=== 배포 완료 ===" -ForegroundColor Green
Write-Host "`n참고: 서버 경로($REMOTE_PATH)가 다르면 스크립트를 수정하세요." -ForegroundColor Yellow
