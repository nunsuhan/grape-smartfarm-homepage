# 05-export-pages.md — FarmSense 콘텐츠 백업
> 원본 경로: app/export/, app/export-intelligence/
> 추출일: 2026-03-19

---

## app/export/page.tsx — 파일 없음

---

## app/export-intelligence/page.tsx — Export Intelligence (수입 바이어용 영어 페이지)

**H1:** Building the Next-Generation Premium Produce Supply Chain
**부제:** Partnership Opportunity for Import Partners
**설명:** FarmSense is an agricultural intelligence platform with working sensor data, AI crop analysis, and blockchain traceability technology. We are seeking import partners to co-build a verified premium supply chain from Korean farms to Asian markets.

### whatWeHave 배열 (보유 역량)

| title | description | icon | color |
|-------|-------------|------|-------|
| Smart Farming Platform | Real-time sensor monitoring, AI crop diagnosis, growth prediction — Live and operational | Cpu | blue |
| Grape Intelligence System | Data-driven cultivation model for premium grape production — Deployed | Database | purple |
| Blockchain Traceability | Immutable production records from farm to shipment — Technology ready | Shield | green |
| Regional Partnership | Collaboration with agricultural technology centers in Daegu/Gyeongbuk region — Active | Users | orange |

### timelinePhases 배열 (파트너십 타임라인)

| phase | title | description | partnerGains |
|-------|-------|-------------|-------------|
| Phase 1 (2026 H2) | Pilot Program | 5~10 farms, trial shipments to Singapore/Taiwan, co-develop quality standards with import partner | Early access to pilot data, influence on quality standards, first-mover advantage |
| Phase 2 (2027) | Scale Program | 30~50 farms, regular monthly supply, established quality verification process | Stable supply volume, established quality metrics, blockchain traceability deployment |
| Phase 3 (2028+) | Full Network | 100+ farms, multi-crop expansion, full blockchain traceability deployed | Diversified product portfolio, automated supply chain, premium brand positioning |

### targetProfile 배열 (목표 제품 프로필)

| label | value |
|-------|-------|
| Crop | Premium Grapes (Shine Muscat, Campbell Early) |
| Target Sugar Content | 18–22 Brix |
| Target Acidity | 0.4–0.7% |
| Harvest Window | August – September |
| Production Region | Daegu / Gyeongbuk, South Korea |

### platformFlow 배열 (플랫폼 작동 흐름)

1. Farm Sensors — IoT sensor network collecting real-time data
2. Crop Data — Environmental and growth data aggregation
3. AI Analysis — Machine learning models for quality prediction
4. Quality Assessment — Brix, acidity, size analysis
5. Blockchain Record — Immutable production history
6. Export Ready — Verified premium produce for international markets

### partnerBenefits 배열

| title | description |
|-------|-------------|
| Early Mover Advantage | Join from pilot phase to shape quality standards and supply processes |
| Data Transparency | Full access to production data and blockchain verification |
| Co-Brand Opportunity | Joint development of premium produce brand for target market |

**파트너십 모델:**
- FarmSense (Technology + Data) + Import Partner (Market + Distribution) = Verified Premium Supply Chain

**CTA:**
- Schedule a Video Call: export@farmsense.kr?subject=Partnership%20Inquiry
- Download Platform Overview: /downloads/farmsense-platform-overview.pdf
- Email: export@farmsense.kr
- Location: Daegu, South Korea

---

## app/export/country-requirements/page.tsx — 주요국 수출 요건

### 일본 🇯🇵

**개요:** 한국산 포도의 최대 수출 시장. 식물검역과 잔류농약 기준이 매우 엄격합니다.

**식물검역:**
- 수출검역증명서 필수 (농림축산검역본부 발급)
- 꽃매미, 감귤궤양병균 등 금지 병해충 검사
- 훈증 처리 필요 시 메틸브로마이드(MB) 또는 저온처리
- 식물검역소 현장 검사 후 합격 시 선적 가능

**잔류농약 기준:**
- 일본 후생노동성 식품위생법 기준 적용
- 일률기준: 미등록 농약 0.01ppm (한국 PLS와 유사)
- 포도 주요 농약별 MRL(잔류허용기준) 사전 확인 필수
- 출하 전 민간 검사기관 사전 검사 권장

**필요 서류:**
- 식물검역증명서 (Phytosanitary Certificate)
- 원산지증명서 (Certificate of Origin)
- 선하증권 (B/L) 또는 항공화물운송장 (AWB)
- 상업송장 (Commercial Invoice), 포장명세서 (Packing List)
- 잔류농약검사성적서 (바이어 요청 시)

**콜드체인·물류:**
- 포도: 0~2°C, 상대습도 90~95% 유지
- 항공 운송 기준 수확 후 48시간 이내 도착 목표
- MAP(Modified Atmosphere Packaging) 포장 권장
- pre-cooling(예냉) 필수: 수확 후 4시간 이내 5°C 이하

### 미국 🇺🇸

**개요:** FDA 등록과 FSMA 준수가 핵심. 2026년부터 이력추적 Section 204가 본격 시행됩니다.

**FDA 규제:**
- 식품시설등록(FFR): 미국에 식품을 수출하는 모든 시설 등록 필수
- 사전통보(Prior Notice): 화물 도착 전 FDA에 사전 신고
- FSVP(외국공급자검증프로그램): 미국 수입자가 해외 공급자 검증 의무
- 농산물 안전 규칙(Produce Safety Rule): 재배·수확·포장 단계 안전 기준

**FSMA Section 204 이력추적:**
- 2026년 1월부터 시행 — 지정된 식품의 완전 이력추적 의무
- KDE(핵심데이터요소): 재배자, 수확일, 냉각시설, 운송업체 등 필수 기록
- CTE(핵심추적이벤트): 수확, 냉각, 포장, 선적 등 각 이벤트별 기록
- FarmSense 블록체인 기록이 Section 204 요구사항을 자동 충족

---

## app/export/data-documents/page.tsx — 수출 서류 데이터 전략

### traditionalDocs 배열 (기존 수출 서류)

| name | desc | pain | FarmSense 디지털화 |
|------|------|------|-----------------|
| 영농일지 | 매일 작업 내역을 수기 기록 | 빠짐없이 작성하기 어렵고, 분실 위험 | 디지털화 가능 |
| 농약사용대장 | 살포 약제·일자·량 기록 | 기준 초과 여부 수동 확인 필요 | 디지털화 가능 |
| GAP 인증서 | 우수농산물관리 인증 증명 | 유효기간 관리, 갱신 누락 위험 | 연계 |
| 검역증명서 | 수출 농산물 검역 적합 증명 | 발급에 3~5일 소요, 현장 심사 필요 | 연계 |
| 원산지증명서 | 원산지 확인 (FTA 활용) | 발급 기관 방문 또는 온라인 신청 | 연계 |
| 잔류농약검사성적서 | 농약 잔류량 적합 판정 | 검사 기관 의뢰, 결과까지 7~14일 | 연계 |
| 토양검정성적서 | 토양 유해물질 검사 결과 | 연 1회 필수, 갱신 잊기 쉬움 | 디지털화 가능 |
| 수질검사성적서 | 농업용수 적합성 확인 | 검사 주기 관리 필요 | 디지털화 가능 |

### DailySeal 봉인 원리 (4단계)

1. **데이터 수집**: IoT 센서(온·습도, 토양수분 등)와 앱 입력(살포, 수확 등)으로 기록이 자동 생성됩니다.
2. **SHA-256 해시 체인**: 각 기록에 SHA-256 해시를 계산하고, 이전 기록의 해시와 연결합니다. 한 글자라도 바뀌면 전체 체인이 깨집니다.
3. **Merkle Root 봉인**: 매일 자정, 하루치 기록들의 해시를 트리 구조로 합산하여 Merkle Root를 생성합니다. 이것이 DailySeal입니다.
4. **QR 코드 발급**: 수확 후 로트(LOT)별 QR 코드를 생성합니다. 바이어가 스캔하면 봉인 상태와 전체 이력을 확인할 수 있습니다.

### QR 검증 정보

| label | value |
|-------|-------|
| 농장·품종 | 생산지, 품종, 재배 면적 |
| 센서 기록 수 | 온습도·토양·조도 등 일별 데이터 |
| 살포 기록 | 약제명, 날짜, 사용량, PHI 준수 여부 |
| 해시체인 검증 | 정상(Intact) / 변조 감지(Tampered) |
| 검역 적합 | PASS / WARNING / FAIL 자동 판정 |
| 봉인 상태 | 최근 DailySeal 해시값 + 봉인 일시 |

### 바이어 실사 대응

- 바이어가 "지난 6개월 살포 기록 보내달라" 요청
  - 기존: 수기 대장 사진 촬영 → 이메일 → 영문 번역 별도
  - FarmSense: 앱에서 기간 선택 → PDF 자동 생성 → 영문 리포트 포함 → 1분 완료

---

## app/export/gap-certification/page.tsx — GAP 인증 완벽 가이드

**eyebrow:** Export · Certification
**H1:** GAP 인증 완벽 가이드
**배지:** 유효기간 2년 / 정부 지원 50~70% / 수출 필수 인증

### certProcess 배열 (GAP 인증 절차 6단계)

| step | title | desc |
|------|-------|------|
| 1 | 기본교육 이수 | GAP 기본교육(6시간)을 이수하고 수료증을 발급받습니다. 농업기술센터, 농관원 등에서 수시 개최합니다. |
| 2 | 인증 신청 | GAP정보서비스(gap.go.kr)에서 온라인 신청하거나, 농관원 지역사무소에 서류를 제출합니다. |
| 3 | 현장 심사 | 심사원이 농장을 방문하여 포장 환경, 용수, 자재 보관, 기록 관리 상태를 확인합니다. |
| 4 | 잔류농약 검사 | 공인 검사기관에서 농산물 시료의 잔류농약 분석을 실시합니다. PLS 기준 적합 판정 필요. |
| 5 | 인증서 발급 | 심사 적합 판정 후 GAP 인증서가 발급됩니다. 유효기간 2년, 연 1회 사후관리 심사. |
| 6 | 인증마크 표시 | 인증받은 농산물에 GAP 인증마크를 부착하고, 인증번호와 유효기간을 표시합니다. |

### gapChecklist 배열 (20항목 + FarmSense 매핑)

| id | category | item | farmsense |
|----|----------|------|-----------|
| 1 | 교육 | GAP 기본교육 이수 (농가·작업자) | 교육 이수일·대상자 등록, 이수증 사진 업로드, 재교육 알림 |
| 2 | 서류 | 인증신청서, 위해요소관리계획서, 영농기록 준비 | 기본 정보·포장 정보 입력, 위험요소 템플릿 제공, 영농기록 자동 축적 → PDF/엑셀 내보내기 |
| 3 | 포장관리 | 포장(블록)별 위치·면적·작목 정리 | 포장 지도 등록(GPS/지도), 면적·작목·품종 설정, 포장별 작업·자재 기록 분리 |
| 4 | 종자관리 | 종자·묘 공급처, 품종, 처리내역 기록 | 종자/묘 입고·사용 기록 양식, 사진·라벨 첨부, 포장별 종자 이력 관리 |
| 5 | 토양·비료 | 토양검정 결과, 시비처방서, 비료 사용량 기록 | 토양검정 결과·처방서 저장, 비료 시기·종류·량 입력, 누적 사용량 조회 |
| 6 | 용수관리 | 용수원, 수질검사 결과, 위해요소 여부 | 용수원 등록, 수질검사 결과 업로드, 검사주기 알림, 수질 센서 연동 |
| 7 | 농약관리 | 등록약제 사용, 사용기준(횟수·간격·수확 전 며칠까지 가능한지) 준수 | 농약 DB 연동, 살포 시 기준 자동 체크, 사용횟수·간격·약 친 후 며칠 지나야 따는지 경고 |
| 8 | 농약기록 | 날짜, 포장, 약제명, 희석배수, 사용량, 작업자 기록 | 농약 작업 등록 화면, 유량센서 기반 사용량 자동계산, 사진 첨부 |
| 9 | 자재보관 | 농약·비료 보관창고 분리보관, 잠금, 누출 방지 | 자재 보관 위생 체크리스트, 정기 점검 일정·알림, 점검 기록·사진 저장 |
| 10 | 수확위생 | 수확도구·용기 세척·위생관리 기록 | 수확 후 도구·용기 세척 체크리스트 자동 생성, 사진 + 담당자 서명 |
| 11 | 작업장위생 | 수확·선별·포장 작업장 바닥·벽, 해충 차단 | 수확·선별·포장 위생 체크리스트, 사진 포함 일지 작성 |
| 12 | 작업자안전 | 손씻기 시설, 보호구 착용, 안전교육 | 작업자 등록, 위생·안전 점검표, PPE 착용 체크, 사고 신고 기록 |
| 13 | 환경보전 | 폐비닐·농약용기·폐기물 처리 계획·실행 | 폐기물 처리 기록(수거일·업체·수량), 사진 첨부, 분기 정리 알림 |
| 14 | 이력추적 | 포장→수확→선별→출하 로트별 이력번호 관리 | 로트ID 자동 생성, 작업·자재 기록 연결, QR/바코드 생성, 출하 기록 |
| 15 | 영농일지 | 연간 재배일지 정리 | 모든 작업을 타입별 기록, 기간·포장별 필터링, 연간 일지 자동 생성 |
| 16 | 내부심사 | 자체 점검 연 1회 실시, 개선조치 기록 | GAP 내부심사 템플릿, 점검 결과·위반사항·개선계획 기록 |
| 17 | 교육기록 | GAP·안전·위생 교육 날짜·참석자·내용 기록 | 교육 일정 등록, 참석자 체크, 사진·자료 첨부, 다음 교육 알림 |
| 18 | 문서보관 | 문서·기록 최소 2~3년 보관 체계 확보 | 클라우드 저장, 연도·포장별 검색, 기간별 ZIP/PDF/엑셀 일괄 다운로드 |
| 19 | 심사대비 | 인증심사·사후관리 자료 꾸러미 준비 | GAP 심사 모드: 기간 선택 → 모든 기록을 한 번에 PDF 묶음 출력 |
| 20 | 인증마크 | 인증마크 표시기준 준수, 인증기간 확인 | 인증기간·번호·품목 등록, 만료 3~6개월 전 알림, 표시 안내 |

### costInfo 배열 (비용 정보)

| label | value | note |
|-------|-------|------|
| 인증 신청수수료 | 약 5만원 | 정부 지원 받으면 1~2만원이면 됩니다 |
| 잔류농약 검사비 | 약 3~10만원 (검사 항목 수에 따라) | 농관원 무료 검사 활용 가능 |
| GAP 기본교육 | 무료 (정부 지원) | 농업기술센터, 농관원 등에서 실시 |
| 컨설팅 비용 | 무료~30만원 | 농관원 무료 컨설팅 또는 민간 컨설팅 |
| 유효기간 | 2년 (연 1회 사후관리) | 갱신 시 동일 절차, 비용 감면 |

### PLS 정보

| term | desc |
|------|------|
| PLS란? | 허가된 약만 쓸 수 있는 규정입니다. 허가 안 된 약이 검출되면 불합격입니다. |
| 왜 중요한가? | GAP 인증과 수출 모두 PLS 기준 준수가 필수입니다. 미등록 농약 사용 시 인증 취소 사유가 됩니다. |
| FarmSense 대응 | 허가된 약만 쓸 수 있고, 허가 안 된 약이 검출되면 불합격입니다. 팜센스가 자동으로 체크해줍니다. |

### 관련 기관

| name | role | tel | url |
|------|------|-----|-----|
| 국립농산물품질관리원 | GAP 인증·심사 | 1544-8572 | naqs.go.kr |
| GAP 정보서비스 | 온라인 신청·조회 | - | gap.go.kr |
| 농업기술센터 | 교육·토양검정 | 지역별 상이 | - |
| 한국농수산식품유통공사 | 수출 지원·마케팅 | 1577-9700 | at.or.kr |

---

## app/export/roadmap/page.tsx — 수출 준비 로드맵

**H1:** 수출 준비 로드맵
**설명:** 앱 설치부터 첫 수출까지 **12개월, 3단계**로 완성합니다.

### roadmapPhases 배열

**1단계 (1~3개월): 기초 구축 — 시스템 설치 + GAP 준비 시작**
| task | detail |
|------|--------|
| FarmSense 앱 설치 및 농장 등록 | 포장(블록)별 위치·면적·작목 설정, 센서 연동 |
| IoT 센서 장치 설치·연동 | 온습도, 토양수분, 조도 센서 자동 데이터 수집 시작 |
| GAP 기본교육 이수 | 6시간 교육 수료, 이수증 앱에 등록 |
| 토양·수질 검사 신청 | 농업기술센터 검정, 결과 앱에 자동 등록 |
| 영농일지 기록 습관화 | 매일 작업 입력 → FarmSense가 GAP 형식으로 자동 변환 |
**마일스톤:** FarmSense 데이터 수집 시작, GAP 교육 완료

**2단계 (4~6개월): GAP 인증 취득 — GAP 6대 기록 축적 + 인증 심사**
| task | detail |
|------|--------|
| GAP 6대 기록 자동 축적 | 토양·비료·농약·수확·영농일지·교육 기록이 앱에서 자동 누적 |
| 내부심사(자체점검) 실시 | FarmSense GAP 템플릿으로 자체 점검, 부족 항목 보완 |
| 위생·안전 체크리스트 정착 | 수확도구 세척, 작업장 위생, 작업자 안전 기록 루틴화 |
| GAP 인증 심사 신청 | 농관원 또는 인증기관에 신청, 현장 심사 대비 |
| 블록체인 DailySeal 데이터 누적 | 매일 봉인되는 데이터가 3개월 이상 축적 → 신뢰도 확보 |
**마일스톤:** GAP 인증서 취득, 블록체인 이력 3개월+ 축적

**3단계 (7~12개월): 수출 준비 완료 — 수출 서류 + 바이어 매칭 + 첫 수출**
| task | detail |
|------|--------|
| 수출 준비도 80% 이상 달성 | FarmSense 대시보드에서 점수 확인, 부족 항목 집중 보완 |
| QR 코드 생성 및 제품 부착 | 로트(LOT)별 QR 코드 발급, 포장 박스에 부착 |
| 수출 검역 서류 자동 생성 | FarmSense가 영농일지·농약기록·검역정보를 PDF로 일괄 출력 |
| 수출 바이어 매칭 및 계약 | aT(한국농수산식품유통공사) 수출지원사업 활용, 바이어 미팅 |
| 첫 수출 선적 | 콜드체인 확보, 검역 합격, 선적 → 수출 완료! |
**마일스톤:** 첫 수출 성공, 프리미엄 가격 확보

### ROI 분석

**연간 비용:**
| label | amount | note |
|-------|--------|------|
| FarmSense 시스템 (연) | 50만원 | 센서 + 앱 구독 |
| GAP 인증 비용 | 30만원 | 신청료 + 검사비 |
| GAP 교육비 | 0원 | 정부 전액 지원 |
**합계: 80만원**

**연간 기대 수익:**
| label | amount | note |
|-------|--------|------|
| GAP 프리미엄 가격 (10~30%↑) | 300만원 | 1,000만원 매출 기준 |
| 수출·대형마트 판로 확대 | 200만원 | 신규 매출 |
| 비용 절감 + 정부 지원금 | 100만원 | 노동 절감, 보조금 |
**합계: 600만원** | **ROI: 650%** (순수익 520만원)

### successStories 배열 (성공 사례)

| region | size | before | after | period |
|--------|------|--------|-------|--------|
| 경기도 포도 농가 | 3,000평 | 전통 재배, 로컬 경매 출하, kg당 8,000원 | 일본 수출 계약 체결, kg당 12,000원 (50%↑) | 도입 후 10개월 |
| 전라도 딸기 농가 단체 | 10농가 공동 | 개별 출하, 가격 교섭력 약함 | 대형마트 정기 공급, 연 매출 200% 증가 | 도입 후 8개월 |
| 강원도 사과 농가 | 5,000평 | 품질 불균일, 반품률 높음 | AI 품질 관리로 반품률 5% → 0.5%, 프리미엄 브랜드화 | 도입 후 12개월 |

### govSupport 배열 (정부 지원 제도)

| program | org | detail |
|---------|-----|--------|
| GAP 인증 지원 | 농관원 / 지자체 | 인증수수료 50~70% 감면, 교육비 전액 지원, 컨설팅 무료 |
| 스마트팜 보급 사업 | 농림축산식품부 | IoT·센서 장비 구입비 50~80% 보조, 시설현대화 자금 지원 |
| 수출농업 육성사업 | aT (한국농수산식품유통공사) | 수출 마케팅·물류비 일부 지원, 바이어 매칭 프로그램, 해외 전시회 참가 지원 |
| 블록체인 실증사업 | 과학기술정보통신부 | 블록체인 시스템 구축비 50~80% 지원, 이력추적 시스템 개발 보조 |
| 농업인 역량강화 | 농업기술센터 | ICT 활용 교육, 수출 실무 교육, GAP·친환경 인증 교육 무료 제공 |

### contacts 배열 (관련 기관 연락처)

| name | org | tel |
|------|-----|-----|
| GAP 인증 문의 | 국립농산물품질관리원 | 1544-8572 |
| 수출 지원 | 한국농수산식품유통공사(aT) | 1577-9700 |
| 스마트팜 지원 | 농림축산식품부 | 044-201-1491 |
| 시스템 문의 | FarmSense | 1522-1234 |
