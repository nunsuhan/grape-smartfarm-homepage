# 02-main-page.md — FarmSense 콘텐츠 백업
> 원본 경로: components/sections/*, components/footer.tsx
> 추출일: 2026-03-19

---

## Hero (components/sections/hero.tsx)

**아이브로:** Data Infrastructure for Premium Agriculture

**H1:**
> 농업 데이터를
> **수익으로** 바꾸다

**서브카피:**
> 센서가 아닙니다. **데이터 플랫폼**입니다.
> 수집 → 분석 → 의사결정 → 수익화까지, 하나의 플랫폼으로.

**파이프라인 배지:**
`🌡 Sensors` → `⚡ AI Platform` (강조) → `🍇 Premium` → `🌍 Export`

**CTA 버튼:**
- 🍇 내 농장 등록하기 → (`/register`)
- 서비스 둘러보기 (`#solutions`)

**미니 서비스 카드:**
| 아이콘 | 라벨 | 설명 |
|--------|------|------|
| 📊 | 매일 아침 리포트 | 어제 기상 + 오늘 위험 알림 |
| 🛡 | 병해 5일 전 경고 | 노균·흰가루·탄저 예측 |
| ✈️ | 수출 MRL 자동 체크 | 일본·동남아 기준 실시간 |

---

## Solutions (components/sections/solutions.tsx)

**섹션:** id="solutions" (배경 alt)

**eyebrow:** Solutions
**title:** 문제를 해결합니다
**desc:** 농가가 겪는 실제 문제에서 출발합니다. 각 솔루션은 모듈 조합으로 동작합니다.

### SOLUTIONS 배열

| # | 제목 | 설명 | 모듈 조합 | 색상 |
|---|------|------|-----------|------|
| 1 | 💧 스마트 관수 | 토양수분 + 열화상 CWSI로 수분 스트레스를 실시간 감지. 생육단계별 최적 관수량을 자동 처방하여 과습·건조 피해를 예방합니다. | Grow + Water + Climate | cyan |
| 2 | 🛡 병해 사전 예측 | 연속 고습도 환경 모니터링으로 병해 발생 5일 전 경고. RGB + 열화상 AI 진단으로 초기 감염을 포착하고, 적합한 방제 약제를 권고합니다. | Climate + Protect + Trace | rose |
| 3 | 📈 수확량 예측 | GDD 모델 + 환경 데이터 + 과실 생장 추적으로 수확량과 최적 수확일을 예측. 당도·착색도 기반 품질 등급을 사전 판정합니다. | Grow + Yield + Climate | amber |
| 4 | 📋 수출 인증 자동화 | 3일 걸리던 수출 서류를 30분으로. GAP 기록, PHI 자동 계산, 잔류농약 예측, 시장별 MRL 기준 충족 여부를 원클릭으로 확인합니다. | Trace + Export + Protect | pink |
| 5 | 🌡 콜드체인 모니터링 | 수확 후 저장·운송·통관까지 온도·습도 이력을 실시간 추적. CCLI(콜드체인물류위험지수)로 품질 이탈 구간을 즉시 감지합니다. | Export + Climate | blue |

---

## Modules (components/sections/modules.tsx)

**섹션:** id="modules"

**eyebrow:** Platform Modules
**title:** 7개 모듈, 하나의 플랫폼
**desc:** 각 모듈은 독립적으로 작동하면서 데이터로 연결됩니다. 작물이 바뀌어도 플랫폼은 그대로.

### MODULES 배열

| key | icon | label | 제목(ko) | 설명(ko) | 태그(ko) |
|-----|------|-------|----------|----------|----------|
| grow | 🌱 | FarmSense Grow | 생육 분석 | GDD 기반 생육단계 추적, 품종별 생장 모델, BBCH 페놀로지 매핑. 작물별 최적 생육 경로를 데이터로 설계합니다. | GDD 모델, 생장 예측, BBCH 단계, 수확 적기 |
| climate | 🌡 | FarmSense Climate | 환경 관리 | CEI(작물환경지수)로 온실 환경을 점수화. 온도, 습도, CO₂, 일사량 통합 모니터링 + 환기 최적화 권고. | CEI 지수, 실시간 모니터링, 환기 제어, 벤치마크 |
| protect | 🛡 | FarmSense Protect | 병해충 방제 | RGB + 열화상 이중 진단. 10클래스 AI 분류(탄저, 노균, 흰가루 등) + GDD 기반 해충 발생 예측. 약제 PHI 자동 체크. | AI 진단, 조기 경보, 열화상, PHI 관리 |
| water | 💧 | FarmSense Water | 관수·양액 관리 | 토양수분 센서 + 열화상 CWSI로 수분 스트레스 감지. EC/pH 양액 최적화. 생육단계별 관수 처방 자동 권고. | CWSI, 양액 처방, EC/pH, 토양 배수 |
| yield | 📈 | FarmSense Yield | 수확·품질 분석 | 당도, 산도, 착색도, 과중 추적. 수확량 예측 + 품질 등급 판정. 최적 수확 타이밍을 AI로 산출합니다. | 당도 추적, 수확량 예측, 등급 판정, 품종별 품질 |
| trace | 📋 | FarmSense Trace | 생산 이력 | 센서 데이터 자동 기록 + 농약 살포 이력. GAP 인증 70% 자동화, PHI 자동 계산, 영농일지 자동 생성. | 자동 기록, GAP 인증, PHI 관리, 영농일지 |
| export | 🌏 | FarmSense Export | 수출 인텔리전스 | ERI(수출적합도지수)로 수출 가능 여부 사전 판정. 시장별(일본/동남아) 기준 충족 여부 + 부족 항목 알림. | ERI 지수, 시장별 기준, 블록체인, 수출 서류 |

---

## Crops (components/sections/crops.tsx)

**섹션:** id="crops" (배경 alt)

**eyebrow:** Crop Intelligence
**title:** 작물이 바뀌어도, 플랫폼은 같습니다
**desc:** 멀티크롭 아키텍처 — 작물 추가 시 데이터만 연결하면 전체 모듈이 동작합니다.

### CROPS 배열

| 이모지 | 한국명 | Intel 명칭 | 상태 | 링크 |
|--------|--------|-----------|------|------|
| 🍇 | 포도 | Grape Intelligence | 운영중 (live) | /crops/grape |
| 🍓 | 딸기 | Strawberry Intelligence | 운영중 (live) | /crops/strawberry |
| 🍅 | 토마토 | Tomato Intelligence | 데이터 준비 (ready) | - |
| 🫑 | 파프리카 | Paprika Intelligence | 데이터 준비 (ready) | - |
| 🥒 | 오이 | Cucumber Intelligence | 데이터 준비 (ready) | - |
| 🍈 | 참외 | Korean Melon Intelligence | 예정 (plan) | - |
| 🍎 | 사과 | Apple Intelligence | 예정 (plan) | - |

---

## Technology (components/sections/technology.tsx)

**섹션:** id="technology" (배경 alt)

**eyebrow:** Technology
**title:** 6-Layer 데이터 플랫폼
**desc:** 센서 엣지부터 서비스 레이어까지, 6개 레이어로 데이터가 흐릅니다.

### LAYERS 배열 (6개 레이어)

| 레이어명 | 한국어 블록 | 영어 블록 |
|---------|------------|---------|
| Edge | IoT 센서, 엣지 게이트웨이, 열화상 카메라, LoRa 통신 | IoT Sensors, Edge Gateway, Thermal Camera, LoRa Network |
| Collection | 기상 API, 공공데이터, RGB 카메라, 모바일 입력 | Weather API, Public Data, RGB Camera, Mobile Input |
| Storage | 멀티크롭 DB, 시계열 저장소, 이미지 저장소, RAG 벡터DB | Multi-Crop DB, Time Series, Image Store, RAG VectorDB |
| Analysis | CEI 엔진, 병해 AI, 수확 예측, 양액 최적화 | CEI Engine, Disease AI, Yield Forecast, Nutrient Opt. |
| Decision | 환경 권고, 방제 알림, 관수 처방, 수출 판정 | Climate Advisory, Pest Alert, Irrigation Rx, Export Decision |
| Service | 모바일 앱, 웹 대시보드, REST API, 알림 시스템 | Mobile App, Web Dashboard, REST API, Notification |

---

## DataSection (components/sections/data-section.tsx)

**섹션:** id="data"

**eyebrow:** Platform Data
**title:** 데이터가 플랫폼의 핵심입니다
**desc:** 더 많은 농가, 더 많은 데이터, 더 정확한 권고.

### DATA_CARDS 배열

| category | 수치 | 라벨(ko) | 설명(ko) |
|----------|------|----------|---------|
| Environmental | 16.5M+ | 환경 센서 레코드 | 온도, 습도, 토양수분, CO₂, 일사량 — 1분 단위 실시간 수집 |
| Growth | 154K+ | RAG 문서 | 논문, 공공데이터, 현장 Q&A — 포도 전문 지식 베이스 |
| Quality | 78K+ | 병해 학습 이미지 | AIHub + 현장 라벨링 — 10클래스 한국 포도 병해 특화 |
| Supply Chain | 7 | 플랫폼 모듈 | 생육 → 환경 → 방제 → 관수 → 수확 → 이력 → 수출 |

---

## Footer (components/footer.tsx)

**로고:** Farm**Sense** (vine-500 녹색 박스에 'F')

**태그라인:** Data Infrastructure for Premium Agriculture

**연락처:**
- 웹: farmsense.kr
- 이메일: contact@farmsense.kr

**저작권:** © 2026 FarmSense. Agricultural Intelligence Platform.
