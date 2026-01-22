\# FarmSense 웹앱 통합 작업 지시서



\## 📋 개요

FarmSense 모바일 앱을 웹앱으로 빌드하여 홈페이지에 통합하는 작업입니다.



---



\## 📁 파일 위치

\- \*\*웹앱 빌드 파일\*\*: `D:\\homepage\\public\\webapp\\`

\- \*\*접속 URL\*\*: `https://farmsense.kr/webapp/` (배포 후)

\- \*\*로컬 테스트\*\*: `http://localhost:3000/webapp/index.html`



\## 📂 webapp 폴더 구조

```

public/webapp/

├── index.html          # 메인 진입점

├── favicon.ico         # 파비콘

├── metadata.json       # 메타데이터

├── assets/             # 이미지, 폰트 등

└── \_expo/

&nbsp;   └── static/

&nbsp;       └── js/

&nbsp;           └── web/    # 번들된 JS 파일

```



---



\## 🎯 요청 작업



\### 1. 홈페이지에 웹앱 링크 추가

메인 페이지에 "앱 사용하기" 버튼 추가:

```tsx

// 예시: 헤더 또는 히어로 섹션에 추가

<Link href="/webapp/index.html">

&nbsp; <Button variant="primary">

&nbsp;   📱 웹앱으로 바로 시작하기

&nbsp; </Button>

</Link>

```



\### 2. 모바일 뷰 스타일링 (선택)

웹앱이 데스크탑에서도 모바일처럼 보이도록 `public/webapp/index.html` 수정:

```html

<head>

&nbsp; <!-- 기존 내용 위에 추가 -->

&nbsp; <style>

&nbsp;   /\* 모바일 앱 프레임 \*/

&nbsp;   html, body, #root {

&nbsp;     max-width: 430px;

&nbsp;     margin: 0 auto;

&nbsp;     min-height: 100vh;

&nbsp;     background: #ffffff;

&nbsp;   }

&nbsp;   

&nbsp;   /\* 데스크탑 배경 \*/

&nbsp;   @media (min-width: 431px) {

&nbsp;     body {

&nbsp;       background: linear-gradient(135deg, #DCFCE7 0%, #F0FDF4 100%);

&nbsp;     }

&nbsp;     html, body, #root {

&nbsp;       box-shadow: 0 0 40px rgba(0,0,0,0.15);

&nbsp;       border-radius: 20px;

&nbsp;       margin-top: 20px;

&nbsp;       margin-bottom: 20px;

&nbsp;       overflow: hidden;

&nbsp;     }

&nbsp;   }

&nbsp; </style>

</head>

```



\### 3. 네비게이션 메뉴에 추가

```tsx

// components/Header.tsx 또는 navigation 컴포넌트

const navItems = \[

&nbsp; { label: '홈', href: '/' },

&nbsp; { label: '기술소개', href: '/technology' },

&nbsp; { label: 'FAQ', href: '/faq' },

&nbsp; { label: '고객지원', href: '/support' },

&nbsp; { label: '앱 시작', href: '/webapp/index.html', highlight: true }, // 추가

];

```



\### 4. 랜딩 페이지 CTA 버튼 연결

현재 "앱 다운로드" 또는 "시작하기" 버튼이 있다면 웹앱으로 연결:

```tsx

// 기존

<Button onClick={() => alert('준비중')}>시작하기</Button>



// 변경

<Link href="/webapp/index.html">

&nbsp; <Button>지금 바로 시작하기</Button>

</Link>

```



---



\## 🔧 Next.js 설정 (필요시)



`next.config.js`에 이미 설정되어 있지만, 확인 필요:

```javascript

/\*\* @type {import('next').NextConfig} \*/

const nextConfig = {

&nbsp; async rewrites() {

&nbsp;   return \[

&nbsp;     {

&nbsp;       source: '/webapp',

&nbsp;       destination: '/webapp/index.html',

&nbsp;     },

&nbsp;   ];

&nbsp; },

};



module.exports = nextConfig;

```



---



\## ⚠️ 주의사항



1\. \*\*빌드 파일 수정 금지\*\*: `\_expo/` 폴더 내 JS 파일은 수정하지 마세요

2\. \*\*경로 유지\*\*: `/webapp/` 경로가 변경되면 앱이 작동하지 않습니다

3\. \*\*HTTPS 필수\*\*: 배포 시 HTTPS가 필요합니다 (카메라, 위치 등 기능 사용)



---



\## 🧪 테스트 체크리스트



\- \[ ] `https://farmsense.kr/webapp/` 접속 확인

\- \[ ] 홈 화면 로딩 확인

\- \[ ] 센서 데이터 표시 확인 (API 연결)

\- \[ ] AI 진단 페이지 이동 확인

\- \[ ] 모바일/데스크탑 반응형 확인



---



\## 📱 QR 코드 추가 (선택)



랜딩 페이지에 웹앱 QR 코드 추가 시:

\- URL: `https://farmsense.kr/webapp/`

\- QR 생성: https://api.qrserver.com/v1/create-qr-code/?size=200x200\&data=https://farmsense.kr/webapp/



---



\## 📞 문의

웹앱 빌드 관련 문의: 문수 (FarmSense 개발)

