# 06-intelligent-logic-pages.md — FarmSense 콘텐츠 백업
> 원본 경로: app/intelligent-logic/
> 추출일: 2026-03-19

---

## app/intelligent-logic/page.tsx — 인텔리전트 로직 목록

**eyebrow:** FarmSense · Intelligent Logic
**H1:** 스마트팜 제어 로직
**설명:** 센서 데이터를 의사결정으로 변환하는 핵심 알고리즘과 제어 로직을 공개합니다.

### logicCategories 배열

| title | href | description |
|-------|------|-------------|
| 관수_물관리 | /intelligent-logic/irrigation-water | 토양 수분 퍼텐셜 기반 정밀 관개 제어 로직 |
| 병해충관리 | /intelligent-logic/pesticide-spray | 병원균 생존 임계값·IPM 기반 방제 타이밍 결정 |
| 비료_시비량 | /intelligent-logic/fertilizer-application | 생육 단계별 NPK 밸런싱 및 EC 피드백 제어 |
| 수확량_예측 | /intelligent-logic/yield-prediction | GDD와 AI 비전을 결합한 하이브리드 수확량 예측 |
| 포도_재배기술 | /intelligent-logic/grape-cultivation | 안토시아닌 합성 최적화 및 Soft Sensor 성장 분석 |
| 환경제어_센서 | /intelligent-logic/environmental-control | 온도, 습도, 조도 등 환경 센서 기반 제어 로직 |

---

## app/intelligent-logic/grape-cultivation/page.tsx — 포도 재배기술

**eyebrow:** FarmSense Logic Vol.5
**H1:** 포도_재배기술
**설명:** 안토시아닌(색소) 합성 최적화 및 Soft Sensor 성장 분석을 통한 최고급 포도 생산

**인터페이스:** 요약 (Farmers) / 상세 (Engineers) 토글

### 요약 (Farmers 모드)

**핵심 개념:**
포도 색깔이 예쁘게 들려면 온도가 중요합니다. FarmSense는 포도가 색소를 가장 잘 만드는 **'골든 타임 온도(약 26도)'**를 유지하도록 환기팬을 조절합니다. 또한, 잎을 굳이 따지 않아도 사진만으로 잎의 건강 상태(엽록소)를 분석합니다.

- 표준 전정 기술
- 잎 제거 효과 (Leaf Removal Effect)

---

## app/intelligent-logic/environmental-control/page.tsx — 환경제어_센서

**eyebrow:** FarmSense Logic Vol.6
**H1:** 환경제어_센서
**설명:** 온도, 습도, 조도 등 환경 센서 기반 제어 로직 및 최적 생육 환경 유지

**인터페이스:** 요약 (Farmers) / 상세 (Engineers) 토글

---

## 나머지 intelligent-logic 페이지

### app/intelligent-logic/irrigation-water/page.tsx — 관수_물관리
- 토양 수분 퍼텐셜 기반 정밀 관개 제어 로직

### app/intelligent-logic/fertilizer-application/page.tsx — 비료_시비량
- 생육 단계별 NPK 밸런싱 및 EC 피드백 제어

### app/intelligent-logic/pesticide-spray/page.tsx — 병해충관리
- 병원균 생존 임계값·IPM 기반 방제 타이밍 결정

### app/intelligent-logic/yield-prediction/page.tsx — 수확량_예측
- GDD와 AI 비전을 결합한 하이브리드 수확량 예측
