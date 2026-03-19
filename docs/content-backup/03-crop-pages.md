# 03-crop-pages.md — FarmSense 콘텐츠 백업
> 원본 경로: app/crops/
> 추출일: 2026-03-19

---

## app/crops/page.tsx — 작물 목록 페이지

**Hero:**
- H1: FarmSense Crops
- 부제: Specialized agricultural intelligence solutions for different crops.
- 설명: Each crop has unique requirements — FarmSense provides tailored solutions for optimal growth and quality.

### crops 배열

| name | scientific | description | features | href |
|------|-----------|-------------|----------|------|
| Strawberry | Fragaria × ananassa | 187농가 데이터 기반 딸기 재배 최적 전략. 품종별 특성부터 환경 관리까지 종합 솔루션. | 품종 최적화, 환경 제어, 병해 관리, 수익 분석 | /crops/strawberry |
| Grape | Vitis vinifera | 포도 재배를 위한 종합적인 스마트팜 솔루션. 생육 모니터링, 당도 분석, 수확 예측까지. | 생육 모델, 당도 분석, 수확 예측, 병해 관리 | /crops/grape |
| Melon | Cucumis melo | 멜론의 최적 성장을 위한 환경 제어 및 품질 관리 솔루션. | 환경 제어, 당도 관리, 크기 예측, 수확 시기 | /crops/melon |
| Apple | Malus domestica | 사과 재배를 위한 정밀 농업 솔루션. 개화기부터 수확까지 전 과정 관리. | 개화 모니터링, 과실 발달, 색상 관리, 저장 최적화 | /crops/apple |
| Other Crops | Various | 다양한 작물을 위한 맞춤형 스마트팜 솔루션. 연구 중인 작물 포함. | 맞춤형 모델, 작물 특화, 데이터 분석, 시범 적용 | /crops/other |

**Platform Benefits:**
- Tailored Algorithms: Each crop has unique growth patterns. Crop-specific AI models for accurate predictions.
- Optimal Resource Use: Water, fertilizer, and other resources used efficiently for each crop type.
- Quality Optimization: Optimize for the specific quality requirements of each crop.
- Market Alignment: Align production with market demands and export requirements.

---

## app/crops/grape/page.tsx — 포도 재배 페이지

**metadata:**
- title: 포도 재배 | FarmSense
- description: 팜센스 포도 재배 종합 가이드. 샤인머스캣부터 캠벨얼리까지 데이터 기반 포도 재배를 시작하세요.

**CropLayout stats:**
| label | value | color |
|-------|-------|-------|
| 농가 데이터 | 150+ 농가 분석 | green |
| 센서 네트워크 | 8종 환경 센서 | purple |
| AI 진단 | 실시간 병해충 분석 | blue |
| 데이터 상태 | 운영중 데이터 | yellow |

### varieties 배열 (주요 품종)

| name | desc |
|------|------|
| 샤인머스캣 | 당도 높고 씨 없는 청포도. 수출 시장에서 인기 높은 프리미엄 품종. |
| 캠벨얼리 | 국내 소비가 많은 대표 적포도. 병해 관리가 재배 성패의 핵심. |
| 거봉 | 알이 크고 당도 높은 흑포도. 적절한 적방·적립 관리가 중요. |

### diseases 배열 (주요 병해충)

| name | desc |
|------|------|
| 노균병 | 고온 다습 환경에서 발생. 환기 관리와 예방적 방제가 중요. |
| 탄저병 | 과실에 갈색 병반 형성. 수확 전 방제 이력 관리 필수. |
| 갈색무늬병 | 잎에 갈색 반점 형성. 조기 발견 시 피해를 최소화할 수 있음. |
| 잿빛곰팡이병 | 과방 내부에서 발생. 봉지 씌우기 전 방제 철저히 필요. |

### managementPoints 배열 (관리 포인트)

| title | desc |
|-------|------|
| 봉지 씌우기 | 탄저병·잿빛곰팡이 예방과 품질 향상을 위해 적기에 봉지를 씌웁니다. |
| 적립·적방 | 과방당 알 수를 조절하여 당도와 크기의 균일도를 높입니다. |
| 당도 관리 | 수확 2-3주 전부터 관수를 줄이고 적산온도를 관리하여 당도를 높입니다. |
| 수확 후 처리 | 예냉 처리와 적정 온도 저장으로 신선도를 유지하고 유통 기간을 늘립니다. |

**CTA:** 내 포도밭 관리하기 → /smartfarm/dashboard

---

## app/crops/strawberry/page.tsx — 딸기 재배 페이지

**metadata:**
- title: 딸기 재배 | FarmSense
- description: 팜센스 딸기 재배 종합 가이드. 187농가 데이터에서 찾은 최적 재배 전략, 품종별 특성부터 환경 관리까지.

**CropLayout stats:**
| label | value | color |
|-------|-------|-------|
| 환경 레코드 | 913,587 환경 레코드 | green |
| 농가 분석 | 187농가 분석 | purple |
| 센서 종류 | 9작물 22종 센서 | blue |
| 데이터 상태 | 운영중 데이터 | yellow |

### varieties 배열 (품종별 특성)

| name | description | 관부직경 | 초장 | 엽수 | kg당 단가 |
|------|-------------|---------|------|------|----------|
| 설향 | kg당 10,008원, 관부직경 18.7mm, 초장 34.7mm, 엽수 11.6매. 단동에서 안정적인 생육. | 18.7mm | 34.7mm | 11.6매 | 10,008원/kg |
| 금실 | kg당 13,014원 (설향 대비 +30% 프리미엄), 관부직경 23.7mm로 생육 최강. 연동 재배 최적. | 23.7mm | 35.7mm | 9.7매 | 13,014원/kg (+30%) |
| 킹스베리 | kg당 9,794원, 관부직경 16.6mm, 초장 37.5mm, 엽수 10.6매. 경제적인 대량 재배 품종. | 16.6mm | 37.5mm | 10.6매 | 9,794원/kg |

**ANOVA:** 모든 생육 지표 p<0.001 (착색도 F=953.7, 엽수 F=83.0, 초장 F=35.1)

### cultivationTypes 배열 (재배유형별 전략)

**연동 재배:**
- 금실은 연동에서만 장점 발휘. 단동이면 설향이 안정적.
- 습도 안정성 높음 (p=0.011)
- 금실 관부직경 26.4mm
- 설향 관부직경 19.8mm
- 잿빛곰팡이 위험 감소
- 난방방식별 차이: 전기/팰릿: 15.16°C vs 등유: 13.26°C (차이 +1.9°C)

**단동 재배:**
- 단동 재배 시 설향이 더 안정적인 생육 특성 보임
- 금실 관부직경 16.3mm (-38%)
- 설향 관부직경 17.7mm (-12%)
- 야간 최저기온 5.25°C

### keyFindings 배열 (환경-생육 핵심 발견, 187농가)

| 항목 | 상관관계 | 설명 |
|------|----------|------|
| CO₂와 관부직경 | r=0.470 (p<0.001) | 가장 강한 상관 관계. 700ppm 이상 유지 시 관부직경 20mm+ 달성 가능. |
| 온도와 관부직경 | r=0.379 (p<0.001) | 두 번째로 강한 상관. 적정 온도 관리가 생육에 중요. |
| 농가간 EC 편차 | CV=69.4% | 양액 관리 수준 차이가 품질을 결정합니다. 표준화 필요. |
| 농가간 CO₂ 편차 | CV=37.5% | 시비 격차 큼. CO₂ 피크 시간 07시 (새벽 축적 → 일출 후 소비) |
| 측창개도 vs 온도 | r=0.362 (p<0.001) | 환기 효과 확인. 평균 일교차 6.03°C (딸기 적정 범위) |

**환경→생육 회귀 R²: 0.221** — CO₂가 주요인. 농가간 관리 수준 차이가 품질 결정.

### ceiComponents 배열 (딸기 CEI 작물환경지수)

**CEI = 습도 50% + CO₂ 30% + 온도 20%**
**전체 평균: 38.9** (0~100, 낮을수록 양호)

| 지표 | 가중치 | 적정 범위 | 비고 |
|------|--------|---------|------|
| 습도 | 50% | 60-80% | 잿빛곰팡이 위험 관리 |
| CO₂ | 30% | 600-1,000ppm | 생육 최대 변수 (r=0.470) |
| 온도 | 20% | 주간 20-25°C / 야간 8-12°C | 생육 속도 및 품질 |

**최고 위험 농가:** PF_0000778_01 (CEI: 70.9) — 습도+온도 관리 부족

### diseases 배열 (병해 위험 관리)

| 병해 | 위험도 | 발생 조건 | 예방 전략 |
|------|--------|---------|---------|
| 잿빛곰팡이 | HIGH RISK | 습도 90%+ 4시간 연속 | 환기 관리, 습도 80% 이하 유지 |
| 흰가루병 | MEDIUM RISK | 습도 변동 + 15-25°C | 온도·습도 안정화, 예방적 방제 |

**FarmSense Climate 환기 최적화 원리:**
- Boulard-Kittas 물리 모델 + 혁신밸리 실측 데이터 기반
- 풍압환기 + 부력환기 통합 계산 (Boulard-Kittas 공식)
- 목표 온도/습도 → 최적 천창/측창 개도율 자동 산출
- Magnus 이슬점 계산 → 결로까지 남은 시간 표시
- 24시간 스케줄: 계절×생육단계별 시간대 환기 계획 자동 생성

---

## app/crops/apple/page.tsx — 사과 재배 페이지

- **현재 상태:** 서비스 준비 중
- 메시지: "팜센스 사과 서비스는 현재 준비 중입니다. 포도 서비스를 먼저 이용해보세요."
- CTA: 포도 서비스 보기 → /crops/grape

---

## app/crops/melon/page.tsx — 참외 재배 페이지

- **현재 상태:** 서비스 준비 중
- 메시지: "팜센스 참외 서비스는 현재 준비 중입니다. 포도 서비스를 먼저 이용해보세요."
- CTA: 포도 서비스 보기 → /crops/grape

---

## app/crops/other/page.tsx — 기타 작물 페이지

- **현재 상태:** 서비스 준비 중
- 메시지: "팜센스 기타 작물 서비스는 현재 준비 중입니다. 포도 서비스를 먼저 이용해보세요."
- CTA: 포도 서비스 보기 → /crops/grape
