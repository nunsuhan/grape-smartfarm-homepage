# Antigravity 프롬프트 - 홈페이지 리디자인

```
홈페이지 전체 색상을 보라색 계열로 변경하고, 앱 미리보기 섹션을 입체적으로 리디자인해줘.

## 1. 색상 변경 (전체 사이트)

### 기존 → 변경

| 요소 | 기존 | 변경 |
|------|------|------|
| 배경 | #0D0D1A (다크 네이비) | 보라색 그라데이션 |
| 그라데이션 | 없음 | #1a0a2e → #2d1b4e → #0d0619 |
| 액센트 | #FFD700 (골드) | 유지 (골드) |
| 텍스트 | 흰색 | 유지 |

### CSS 변수

```css
:root {
  --bg-dark: #0d0619;
  --bg-purple-1: #1a0a2e;
  --bg-purple-2: #2d1b4e;
  --bg-purple-3: #3d2566;
  --accent-gold: #FFD700;
  --text-white: #ffffff;
  --text-gray: #a0a0a0;
}

body {
  background: linear-gradient(180deg, 
    var(--bg-purple-1) 0%, 
    var(--bg-purple-2) 50%, 
    var(--bg-dark) 100%
  );
}
```

---

## 2. 앱 미리보기 섹션 리디자인

### 현재 문제
- 4개 아이폰이 평면적으로 나열됨
- 사이드바가 걸림
- 입체감 없음

### 변경 디자인

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│               📱 FarmSense 앱 미리보기                       │
│     농가 맞춤형 스마트팜 앱으로 더 쉽고 정확한 농장 관리      │
│                                                             │
│                                                             │
│           ┌─────┐                                           │
│          /       \     ┌─────┐                              │
│         │  홈    │    /       \     ┌─────┐                │
│         │ 대시   │   │ 진단   │    /       \               │
│         │ 보드   │   │ 결과   │   │  PMI   │               │
│         │        │   │        │   │  상세   │               │
│          \       /   │        │   │        │               │
│           └─────┘     \       /    \       /               │
│                        └─────┘      └─────┘                │
│                                                             │
│    (3개 아이폰이 부채꼴/원근감 있게 배치)                    │
│                                                             │
│            [앱 다운로드]  [자세히 보기]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 구현 방식

```tsx
// 3개 아이폰 입체 배치
<div className="relative h-[600px] flex items-center justify-center">
  
  {/* 왼쪽 아이폰 - 살짝 뒤로 + 왼쪽 회전 */}
  <div className="absolute left-[10%] transform -rotate-y-12 scale-90 z-10
                  transition-all duration-300 hover:scale-95 hover:z-30">
    <PhoneMockup image="/images/screenshots/home_dashboard.png" />
  </div>
  
  {/* 중앙 아이폰 - 가장 앞 + 크게 */}
  <div className="absolute z-20 transform scale-100
                  transition-all duration-300 hover:scale-105">
    <PhoneMockup image="/images/screenshots/diagnosis_result.png" />
  </div>
  
  {/* 오른쪽 아이폰 - 살짝 뒤로 + 오른쪽 회전 */}
  <div className="absolute right-[10%] transform rotate-y-12 scale-90 z-10
                  transition-all duration-300 hover:scale-95 hover:z-30">
    <PhoneMockup image="/images/screenshots/pmi_detail.png" />
  </div>
  
</div>
```

### PhoneMockup 컴포넌트

```tsx
const PhoneMockup = ({ image }) => (
  <div className="relative w-[280px] h-[580px]">
    {/* 아이폰 프레임 */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 
                    rounded-[40px] p-2 shadow-2xl shadow-purple-500/20">
      
      {/* 노치 */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 
                      w-24 h-6 bg-black rounded-full z-10" />
      
      {/* 스크린 */}
      <div className="w-full h-full bg-gray-900 rounded-[36px] overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      
    </div>
    
    {/* 반사 효과 */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent 
                    rounded-[40px] pointer-events-none" />
  </div>
);
```

### 3D 효과 (CSS perspective)

```css
.phone-container {
  perspective: 1000px;
}

.phone-left {
  transform: rotateY(15deg) translateX(-50px) scale(0.9);
  filter: brightness(0.9);
}

.phone-center {
  transform: rotateY(0deg) scale(1);
  z-index: 20;
}

.phone-right {
  transform: rotateY(-15deg) translateX(50px) scale(0.9);
  filter: brightness(0.9);
}

.phone-left:hover,
.phone-right:hover {
  transform: rotateY(0deg) scale(1);
  filter: brightness(1);
  z-index: 30;
}
```

---

## 3. 스크린샷 변경

### 사용할 스크린샷 (3개)

| 위치 | 화면 | 파일명 |
|------|------|--------|
| 왼쪽 | 홈 대시보드 | home_dashboard.png |
| 중앙 | **진단 결과 (노균병 사진 포함)** | diagnosis_result.png |
| 오른쪽 | PMI 상세 | pmi_detail.png |

### 진단 결과 화면 - 노균병 사진 채우기

진단 결과 화면에서 "[촬영된 사진]" placeholder 대신 
실제 노균병 감염 포도잎 사진을 넣어줘.

사진 파일: `/public/images/disease/downy_mildew.jpg`

```tsx
// DiagnosisResult 화면에서
<div className="w-full h-[200px] bg-gray-800 rounded-lg overflow-hidden">
  <img 
    src="/images/disease/downy_mildew.jpg" 
    alt="노균병 감염 포도잎"
    className="w-full h-full object-cover"
  />
</div>
```

---

## 4. 히어로 섹션도 같은 스타일로

첫 번째 스크린샷처럼:
- 배경에 포도밭 사진 (어둡게 처리)
- 3개 아이폰 입체 배치
- 오른쪽에 체크리스트:
  ✓ 실시간 생육 환경 모니터링 대시보드
  ✓ 스마트폰 촬영으로 3초 만에 병해 진단
  ✓ AI 챗봇을 통한 영농 지식 즉시 검색
  ✓ 작업 스케줄 관리 및 알림 서비스
  ✓ 데이터 기반 수확 시기 예측

---

## 5. 전체 적용

- 모든 섹션 배경색 보라색 그라데이션으로 통일
- 카드/박스 배경: rgba(45, 27, 78, 0.5) + backdrop-blur
- 테두리: rgba(147, 51, 234, 0.3)
- 호버 효과: 보라색 글로우

이렇게 수정해줘!
```
