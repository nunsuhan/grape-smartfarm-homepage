# 07-smartfarm-pages.md — FarmSense 콘텐츠 백업
> 원본 경로: app/smartfarm/
> 추출일: 2026-03-19

---

## app/smartfarm/page.tsx — 스마트팜 루트

- `/smartfarm` 접속 시 `/smartfarm/dashboard`로 자동 redirect

---

## app/smartfarm/dashboard/page.tsx — 대시보드

스마트팜 메인 대시보드. 실제 데이터는 로그인 후 표시되며, 비로그인 방문자는 `lib/demo-data.ts`의 DEMO_SENSOR, DEMO_RISK, DEMO_GROWTH, DEMO_TASKS 데이터를 표시합니다.

**Demo 센서 데이터:**
| 항목 | 값 | 단위 | 상태 |
|------|---|------|------|
| temperature | 24.8 | °C | normal |
| humidity | 67.2 | % | normal |
| soil_moisture | 42.5 | % | normal |
| soil_temp | 21.3 | °C | normal |

**Demo 위험 정보:**
- risk_level: 중간
- risk_score: 58
- alerts:
  - 습도 상승 추세 - 노균병 주의 (severity: caution)
  - 내일 강우 예보 - 방제 검토 (severity: info)

**Demo 생육 정보:**
- stage: dormant
- label: 휴면기
- gdd: 125

**Demo 작업 목록:**
| text | priority | done |
|------|----------|------|
| 전정 작업 준비 | high | false |
| 동해 피해 점검 | high | true |
| 토양 검사 의뢰 | medium | false |

---

## app/smartfarm/notifications/page.tsx — 알림 센터

**필터 종류:**
| value | label | icon | color |
|-------|-------|------|-------|
| all | 전체 | Bell | #F8F4E8 |
| disease | 병해 | Bug | #EF4444 |
| sensor | 센서 | Activity | #3B82F6 |
| alert | 경고 | AlertTriangle | #F59E0B |
| info | 정보 | Info | #8B5CF6 |

**Demo 알림 데이터 (DEMO_NOTIFICATIONS):**
| id | type | title | body | is_read | created_at |
|----|------|-------|------|---------|-----------|
| 1 | disease | 노균병 위험도 상승 | 습도 75% 이상 지속, PMI 지수 0.65로 주의 단계 진입 | false | 2026-02-13T09:30:00Z |
| 2 | sensor | 토양수분 하한 접근 | 토양수분 35% - 관수 검토 필요 | false | 2026-02-13T08:15:00Z |
| 3 | alert | 내일 강우 예보 | 2/14 오후 10~20mm 강우 예상, 방제 일정 조정 필요 | true | 2026-02-12T18:00:00Z |
| 4 | info | 생육 단계 업데이트 | GDD 125 누적 - 휴면기 유지 중 | true | 2026-02-12T06:00:00Z |
| 5 | disease | 흰가루병 모니터링 | 현재 위험도 낮음, 정기 관찰 권장 | true | 2026-02-11T12:00:00Z |

---

## app/smartfarm/diagnosis/page.tsx — AI 질병 진단

**H1:** AI 질병 진단
**설명:** 포도 잎 사진을 업로드하면 AI가 병해충을 진단합니다

**기능:**
- 이미지 드래그앤드롭 업로드
- 카메라 촬영
- 데모 진단 결과 표시

**riskConfig:**
| level | label | color |
|-------|-------|-------|
| safe | 안전 | #22C55E |
| watch | 주의 | #F59E0B |
| danger | 위험 | #EF4444 |

**Demo 진단 결과 (DEMO_DIAGNOSIS_RESULTS):**
| id | disease_name | confidence | risk_level | severity | early_action |
|----|-------------|-----------|-----------|---------|-------------|
| demo-1 | 탄저병 초기 징후 | 0.72 | watch | 초기 | 정기적 모니터링 및 환기 강화 필요 |
| demo-2 | 정상 (건강) | 0.95 | safe | 정상 | 특별 조치 불필요 |

---

## app/smartfarm/community/page.tsx — 커뮤니티

딥리서치 기반 포도 재배 토론 커뮤니티.

**시드 이슈 (SEED_ISSUES):**

### issue-2026-02: 휴면기 전정 시기와 GDD 관계
- **month:** 2
- **title:** 휴면기 전정 시기와 GDD 관계, 올해 최적 시기는?
- **body:** 올해 1~2월 평균기온이 예년 대비 2.1°C 높습니다. GDD 누적이 빨라지면서 전정 시기를 앞당겨야 할까요?
- **data_points:**
  - 현재 GDD: 125 (+18% 예년 대비)
  - 평균기온: 4.2°C (+2.1°C 예년 대비)
  - 예상 발아일: 3월 15일 (7일 빠름)
- **discussion_points:**
  - 전정을 앞당긴 경험이 있으신가요? 결과는 어땠나요?
  - GDD 기준 전정 vs 날짜 기준 전정, 어떤 방법을 쓰시나요?
  - 올해 전정 계획은 언제로 잡으셨나요?
- tags: 전정, GDD, 휴면기, 딥리서치

### issue-2026-01: 동계 동해 피해 예방
- **month:** 1
- **title:** 동계 동해 피해 예방, 열화상 모니터링의 실효성은?
- **body:** 지난 겨울 최저 -15°C를 기록하며 일부 농가에서 동해 피해가 발생했습니다.
- **data_points:**
  - 최저기온: -15°C (예년 -11°C 대비)
  - 동해 피해 농가: 23% (+8% 전년 대비)
  - 열화상 감지 정확도: 89%
- **discussion_points:**
  - 동해 피해를 경험하셨나요? 어떤 조치를 취하셨나요?
  - 열화상 센서 설치를 고려하고 계신가요?
  - 기존 방한 방법(짚덮기, 보온재)과 비교하면?
- tags: 동해, 열화상, 동계관리, 딥리서치

---

## app/smartfarm/field-book/page.tsx — 영농일지

GAP 인증 기록 관리, 농약 살포 이력 관리, 영농 작업 기록

---

## app/smartfarm/sensors/page.tsx — 센서 현황

농장 센서 현황 및 데이터 모니터링

---

## app/smartfarm/ai-chat/page.tsx — AI 상담

RAG 기반 포도 전문 AI 상담. 4,600편 논문 기반 답변.

---

## app/smartfarm/layout.tsx — 스마트팜 레이아웃

사이드바 기반 앱 레이아웃 (dashboard, notifications, diagnosis, community, field-book, sensors, ai-chat 메뉴)
