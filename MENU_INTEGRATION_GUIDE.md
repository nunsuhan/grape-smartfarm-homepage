\# FarmSense 메뉴 통합 가이드



\## 📋 개요

기존 분산된 기능들을 통합하고, 리네이밍하여 사용자 경험을 개선합니다.



---



\## 🔄 변경 사항 요약



| 기존 | 변경 | 설명 |

|------|------|------|

| AI 병해진단 | \*\*🩺 팜닥터\*\* | DSS 연동, 예방/조기진단 기능 추가 |

| 역분석 | \*\*🎯 맞춤 재배 계획\*\* | 목표 생산량 기반 환경 최적화 |

| 농작업 일정 | \*\*🌱 스마트팜 관리\*\* | DSS 통합 (물/비료/방제/환경/수확) |



---



\## 📱 새로운 메뉴 구조



\### 하단 탭 (MainTabNavigator)

```

┌──────┬──────┬──────┬──────┬──────┐

│  🏠  │  🩺  │  🌱  │  📝  │  👤  │

│  홈  │팜닥터│스마트│영농  │ 내   │

│      │      │ 팜   │일지  │ 농장 │

└──────┴──────┴──────┴──────┴──────┘

```



\### 1. 🏠 홈 (HomeTab)

\- 실시간 센서 현황

\- 오늘의 알림/권장사항  

\- 날씨 정보

\- 빠른 메뉴 (팜닥터, 일지작성, Q\&A)



\### 2. 🩺 팜닥터 (FarmDoctor) - \*\*신규 탭\*\*

```

팜닥터

├── 📸 즉시 진단

│   └── 사진 촬영 → AI 분석 → 결과/처방

├── 🔮 예방 진단 (DSS 연동)

│   └── 센서 데이터 기반 병해 위험도 예측

│   └── "현재 환경에서 탄저병 발생 위험 높음" 등

├── 📊 진단 이력

│   └── 과거 진단 기록 조회

└── 💊 처방 가이드

&nbsp;   └── 진단 결과 기반 농약 추천

&nbsp;   └── 안전사용기준(PHI) 안내

```



\### 3. 🌱 스마트팜 관리 (SmartFarm) - \*\*DSS 통합\*\*

```

스마트팜 관리

├── 💧 물관리

│   ├── 오늘의 관수 계획

│   ├── 관수 실행 기록

│   └── 토양수분 현황 (센서 연동)

├── 🧪 비료관리

│   ├── 시비 계획 수립

│   ├── 시비 기록

│   └── 토양 영양 분석

├── 🛡️ 방제관리

│   ├── 농약 살포 계획

│   ├── 살포 기록

│   ├── 농약 재고 관리

│   └── 안전사용기준(PHI) 알림

├── 🌡️ 환경관리

│   ├── 온습도 현황

│   ├── 환기 제어 (스마트팜 연동)

│   └── 환경 이력 그래프

├── 📈 수확량 예측

│   └── AI 기반 예상 수확량

│   └── 목표 대비 달성률

└── 🎯 맞춤 재배 계획 (구 역분석)

&nbsp;   ├── 목표 생산량 설정

&nbsp;   ├── GAP 분석 (현재 vs 최적)

&nbsp;   ├── 개선 권장사항

&nbsp;   └── 벤치마크 비교

```



\### 4. 📝 영농일지 (FarmingLog) - 기존 유지

\- 일지 작성

\- 일지 목록/검색

\- 사진 첨부



\### 5. 👤 내 농장 (MyFarm) - 기존 유지

\- 프로필

\- 시설 정보

\- 센서 관리

\- 알림 설정

\- 커뮤니티



---



\## 🩺 팜닥터 상세 설계



\### 메인 화면 (FarmDoctorScreen.tsx)

```

┌─────────────────────────────────────────┐

│  🩺 팜닥터                               │

│  "포도 건강을 지키는 AI 주치의"          │

├─────────────────────────────────────────┤

│                                         │

│  ┌─────────────┐  ┌─────────────┐       │

│  │ 📸          │  │ 🔮          │       │

│  │ 즉시 진단   │  │ 예방 진단   │       │

│  │             │  │             │       │

│  │ 사진으로    │  │ 센서 기반   │       │

│  │ 바로 진단   │  │ 위험도 예측 │       │

│  └─────────────┘  └─────────────┘       │

│                                         │

│  ⚠️ 오늘의 건강 알림                    │

│  ┌─────────────────────────────────┐    │

│  │ 🟡 탄저병 주의                   │    │

│  │ 현재 고온다습 환경 (28°C, 85%)   │    │

│  │ → 예방 살균제 살포 권장          │    │

│  └─────────────────────────────────┘    │

│                                         │

│  📊 최근 진단 이력                       │

│  • 01/15 - 정상 (잎 사진)               │

│  • 01/10 - 탄저병 의심 → 치료 완료      │

│                                         │

└─────────────────────────────────────────┘

```



\### 예방 진단 (DSS 연동)

```typescript

// API 호출 예시

const preventionDiagnosis = await dssApi.getPrediction({

&nbsp; farm\_id: farmId,

&nbsp; sensor\_data: currentSensorData,

&nbsp; weather\_forecast: weatherData,

});



// 응답 예시

{

&nbsp; "risks": \[

&nbsp;   {

&nbsp;     "disease": "탄저병",

&nbsp;     "risk\_level": 0.85,  // 85% 위험

&nbsp;     "factors": \["고온", "고습도", "연속 강우"],

&nbsp;     "prevention": "예방 살균제(만코지 수화제) 살포 권장"

&nbsp;   },

&nbsp;   {

&nbsp;     "disease": "노균병", 

&nbsp;     "risk\_level": 0.42,

&nbsp;     "factors": \["야간 저온", "이슬"],

&nbsp;     "prevention": "환기 강화, 야간 보온"

&nbsp;   }

&nbsp; ]

}

```



---



\## 🌱 스마트팜 관리 상세 설계



\### 메인 화면 (SmartFarmScreen.tsx)

```

┌─────────────────────────────────────────┐

│  🌱 스마트팜 관리                        │

├─────────────────────────────────────────┤

│                                         │

│  📊 오늘의 현황                          │

│  ┌────┬────┬────┬────┐                  │

│  │26°C│72% │45% │850 │                  │

│  │온도│습도│토양│CO2 │                  │

│  └────┴────┴────┴────┘                  │

│                                         │

│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │

│  │💧       │ │🧪       │ │🛡️       │   │

│  │물관리   │ │비료관리 │ │방제관리 │   │

│  └─────────┘ └─────────┘ └─────────┘   │

│                                         │

│  ┌─────────┐ ┌─────────┐ ┌─────────┐   │

│  │🌡️       │ │📈       │ │🎯       │   │

│  │환경관리 │ │수확예측 │ │재배계획 │   │

│  └─────────┘ └─────────┘ └─────────┘   │

│                                         │

│  📋 오늘의 할 일                         │

│  ☑️ 오전 10시 - 관수 예정               │

│  ☐ 오후 2시 - 엽면시비                  │

│  ☐ 환기창 점검                          │

│                                         │

└─────────────────────────────────────────┘

```



---



\## 📁 파일 구조 변경



\### 신규 생성 파일

```

src/screens/

├── farmDoctor/

│   ├── FarmDoctorScreen.tsx       # 팜닥터 메인

│   ├── InstantDiagnosisScreen.tsx # 즉시 진단 (기존 DiagnosisScreen 리네임)

│   ├── PreventionScreen.tsx       # 예방 진단 (DSS 연동)

│   ├── DiagnosisHistoryScreen.tsx # 진단 이력

│   └── PrescriptionScreen.tsx     # 처방 가이드

├── smartFarm/

│   ├── SmartFarmScreen.tsx        # 스마트팜 메인

│   ├── IrrigationScreen.tsx       # 물관리

│   ├── FertilizerScreen.tsx       # 비료관리

│   ├── PesticideScreen.tsx        # 방제관리 (기존 PesticideManagement 이동)

│   ├── EnvironmentScreen.tsx      # 환경관리

│   ├── YieldPredictionScreen.tsx  # 수확량 예측

│   └── CultivationPlanScreen.tsx  # 맞춤 재배 계획 (기존 ReverseAnalysis 이동)

```



\### 네비게이션 변경

```typescript

// MainTabNavigator.tsx 수정

<Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: '홈' }} />

<Tab.Screen name="FarmDoctor" component={FarmDoctorStackNavigator} options={{ title: '팜닥터' }} />

<Tab.Screen name="SmartFarm" component={SmartFarmStackNavigator} options={{ title: '스마트팜' }} />

<Tab.Screen name="FarmingLog" component={FarmingLogStackNavigator} options={{ title: '영농일지' }} />

<Tab.Screen name="MyFarm" component={SettingsStackNavigator} options={{ title: '내농장' }} />

```



---



\## 🔗 API 엔드포인트



\### 팜닥터 API

| 기능 | Method | URL |

|------|--------|-----|

| 즉시 진단 | POST | `/api/diagnosis/diagnoses/` |

| 예방 진단 | POST | `/api/dss/prevention-diagnosis/` |

| 진단 이력 | GET | `/api/diagnosis/diagnoses/` |

| 처방 조회 | GET | `/api/diagnosis/diagnoses/{id}/prescription/` |



\### 스마트팜 관리 API

| 기능 | Method | URL |

|------|--------|-----|

| 관수 계획 | GET/POST | `/api/dss/irrigation/` |

| 비료 계획 | GET/POST | `/api/dss/fertilizer/` |

| 방제 계획 | GET/POST | `/api/dss/pesticide/` |

| 환경 현황 | GET | `/api/sensor/current/` |

| 수확량 예측 | POST | `/api/dss/yield-prediction/` |

| 맞춤 재배 계획 | POST | `/api/reverse-analysis/analyze/` |



---



\## ⚠️ 주의사항



1\. \*\*기존 화면 유지\*\*: DiagnosisScreen, ReverseAnalysisScreen 등은 삭제하지 말고 새 위치로 import 경로만 변경

2\. \*\*점진적 마이그레이션\*\*: 한 번에 모두 변경하지 말고 탭 하나씩 추가

3\. \*\*API 호환성\*\*: 기존 API 엔드포인트는 그대로 유지



---



\## 📞 문의

백엔드 API 관련: 문수 (FarmSense 개발)

