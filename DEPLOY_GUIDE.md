# FarmSense 프론트엔드 서버 배포 가이드

## 준비사항
- ✅ 빌드 완료 (`npm run build` 실행됨)
- ✅ `privacy-policy.html` 파일 생성 완료 (`public/privacy-policy.html`)

## 배포 방법

### 방법 1: 압축 파일 생성 후 업로드 (권장)

1. **압축 파일 생성**
   ```powershell
   cd d:\homepage
   .\deploy-simple.ps1
   ```

2. **서버에 업로드**
   ```powershell
   # 생성된 압축 파일을 서버에 업로드
   scp -i "C:\Users\한문수\id_han_new" "d:\homepage\farmsense-frontend-*.zip" django@152.42.248.236:/tmp/
   ```

3. **서버에서 압축 해제 및 설치**
   ```bash
   # SSH 접속
   ssh -i "C:\Users\한문수\id_han_new" django@152.42.248.236
   
   # 서버에서 실행 (실제 경로에 맞게 수정 필요)
   cd /home/django/frontend  # 또는 실제 프론트엔드 경로
   unzip /tmp/farmsense-frontend-*.zip
   npm install --production
   ```

### 방법 2: 직접 scp로 파일 업로드

```powershell
# 서버 경로 확인 (실제 경로에 맞게 수정)
$REMOTE_PATH = "/home/django/frontend"  # 실제 경로로 변경 필요

# 각 폴더/파일 업로드
scp -i "C:\Users\한문수\id_han_new" -r "d:\homepage\app" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" -r "d:\homepage\components" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" -r "d:\homepage\lib" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" -r "d:\homepage\public" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" -r "d:\homepage\.next" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\package.json" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\package-lock.json" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\next.config.js" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\tsconfig.json" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\tailwind.config.js" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\postcss.config.js" django@152.42.248.236:$REMOTE_PATH/
scp -i "C:\Users\한문수\id_han_new" "d:\homepage\eslint.config.mjs" django@152.42.248.236:$REMOTE_PATH/
```

### 방법 3: rsync 사용 (서버에 rsync가 설치되어 있는 경우)

```powershell
# rsync로 동기화 (더 효율적)
rsync -avz -e "ssh -i C:\Users\한문수\id_han_new" `
  --exclude 'node_modules' `
  --exclude '.git' `
  --exclude 'testsprite_tests' `
  --exclude '사진' `
  d:\homepage\ django@152.42.248.236:/home/django/frontend/
```

## 업로드 후 서버에서 실행할 명령어

```bash
# 서버에 SSH 접속
ssh -i "C:\Users\한문수\id_han_new" django@152.42.248.236

# 프론트엔드 디렉토리로 이동
cd /home/django/frontend  # 실제 경로에 맞게 수정

# 의존성 설치 (필요시)
npm install --production

# Next.js 프로세스 재시작 (PM2 또는 systemd 사용 시)
# 예: pm2 restart farmsense-frontend
# 또는: systemctl restart farmsense-frontend
```

## 확인사항

1. ✅ `privacy-policy.html` 파일이 `public/` 폴더에 있는지 확인
2. ✅ 서버에서 `https://도메인/privacy-policy.html` 접근 가능한지 확인
3. ✅ 구글 플레이 콘솔에 개인정보처리방침 URL 등록

## 문제 해결

- **SSH 키 경로 문제**: 한글 경로가 문제가 될 경우, SSH 키를 영문 경로로 복사하거나 경로를 따옴표로 감싸세요
- **권한 문제**: 서버에서 파일 권한 확인 (`chmod`, `chown`)
- **빌드 오류**: 서버에서 `npm run build`를 다시 실행해보세요
