# 09-info-pages.md — FarmSense 콘텐츠 백업
> 원본 경로: app/faq/, app/sensors/, app/about/, app/partners/, app/education/, app/grape-info/, app/sensor-installation-guide/, app/grape-intelligence/, app/data-intelligence/, app/agriculture-data-platform/
> 추출일: 2026-03-19

---

## app/faq/page.tsx — 자주 묻는 질문

### service — 서비스 소개 (5개)

| q | a |
|---|---|
| FarmSense가 뭔가요? | 포도 농사 전용 AI 서비스입니다. 사진으로 병해 진단(3초), AI 상담, 날씨 기반 병해 예측, 센서 모니터링을 제공합니다. 24시간 포도 전문가가 주머니에 있는 셈이에요. |
| 어떤 농가에서 사용할 수 있나요? | 비가림하우스, 연동하우스, 단동/다동 시설, 노지 재배 모두 지원합니다. 샤인머스캣, 캠벨얼리, 거봉 등 모든 포도 품종에서 사용 가능합니다. |
| 기존 자동화 시스템과 뭐가 다른가요? | 기존 시스템은 시설 '제어'에 집중하지만, FarmSense는 데이터 '분석'과 '의사결정 지원'에 집중합니다. 제어는 농가가, 판단은 AI가 도와드립니다. |
| 포도 외 다른 작물도 되나요? | 현재는 포도 전용입니다. 향후 참외, 딸기, 사과 등으로 확장 예정입니다. |
| 농업기술센터랑 뭐가 다른가요? | 기술센터는 평일 9-18시 운영되지만, FarmSense는 24시간 즉시 응답합니다. 4,600편 논문 기반으로 답변하며, 앱에서 바로 병해 진단이 가능합니다. |

### pricing — 서비스 안내 (1개)

| q | a |
|---|---|
| 현재 서비스 이용료는 얼마인가요? | 현재 FarmSense는 베타 버전으로 운영되고 있습니다. 정식 출시 전까지 모든 기능을 무료로 체험하실 수 있으며, 구체적인 가격 정책은 추후 공지될 예정입니다. |

### account — 회원가입/계정 (5개)

| q | a |
|---|---|
| 회원가입은 어떻게 하나요? | 앱 다운로드 후 휴대폰 번호 인증, 농장 정보 입력만 하면 됩니다. 약 3분이면 완료됩니다. |
| 가족이나 직원도 같이 쓸 수 있나요? | 기본은 1계정 1기기입니다. 가족/직원 추가는 별도 계정이 필요하며, 팜 멤버 기능은 준비 중입니다. |
| 휴대폰을 바꾸면 데이터는 어떻게 되나요? | 모든 데이터는 클라우드에 저장됩니다. 새 휴대폰에서 로그인하면 자동 복원됩니다. |
| 회원 탈퇴는 어떻게 하나요? | 앱 → 설정 → 회원 탈퇴, 또는 artmer3061@gmail.com으로 요청하시면 됩니다. 탈퇴 시 모든 데이터가 삭제됩니다. |
| 농장 주소와 자택 주소가 다른데 어떻게 하나요? | 농장 주소를 입력해주세요! 자택 주소를 입력하면 기상 예보가 맞지 않아 PMI 예측이 부정확해집니다. 농장이 여러 곳이면 '주 농장' 주소를 입력하고, 추가 농장은 나중에 등록할 수 있습니다. |

### diagnosis — 사진으로 병 확인 (6개)

| q | a |
|---|---|
| AI 진단이 정확한가요? | FarmSense AI 진단은 정확한 병명 판정이 아닌, 이상 징후의 조기 발견에 목적이 있습니다. 이상이 감지되면 전문가 상담이나 기술센터 확인을 권장합니다. |
| 어떤 병해를 진단할 수 있나요? | 현재 10종입니다. 탄저, 노균, 흑두, 흑부, 잎마름, 축과, 일소, 약해, 갈색무늬병, 새눈무늬병을 감지합니다. |
| 사진을 어떻게 찍어야 하나요? | 자연광 아래서 병반 부위를 20~30cm 거리에서 흔들리지 않게 찍어주세요. 잎 앞면과 뒷면 각각 촬영하면 더 정확합니다. 역광이나 흐릿한 사진은 피해주세요. |
| 오진하면 어떻게 하나요? | AI 진단은 참고용입니다. 확실하지 않으면 여러 장 촬영해서 재진단하거나 RAG 상담으로 추가 확인하세요. 심각한 경우 농업기술센터 방문을 권장합니다. |
| 캠벨, 거봉도 진단 되나요? | 네! 포도 전 품종 지원합니다. 샤인머스캣, 캠벨얼리, 거봉, MBA, 청수 등 모든 품종에서 사용 가능합니다. |
| 진단 결과와 실제 발생을 비교할 수 있나요? | 네, 가능합니다. 예측값과 실제 발생 기록을 비교할 수 있고, 오진 시 피드백하면 모델 개선에 활용됩니다. |

### rag — 농사 질문/상담 (5개)

| q | a |
|---|---|
| 뭘 물어볼 수 있나요? | 포도 농사 관련 뭐든지요! 적심 시기, 농약 추천, GA 처리 농도, 당도 높이는 법, 열과 방지법 등 전문적인 답변을 드립니다. |
| 답변이 정확한가요? | 90% 정확도입니다. 4,600편 연구 논문과 287,000개 지식 조각을 학습했고, 모든 답변에 출처를 표시합니다. 모르는 건 모른다고 솔직히 답변해요. |
| 농약 추천도 해주나요? | 네! 국가농약관리시스템(NCPMS)과 연동하여 등록된 농약만 추천하고, 안전사용기준과 살포량도 안내합니다. |
| 답변이 마음에 안 들면? | 재질문하거나 다른 표현으로 물어보세요. 피드백하면 개선에 반영됩니다. 심각한 경우 기술센터 안내도 해드립니다. |
| 예전 질문을 다시 볼 수 있나요? | 네! 상담 기록이 무제한 저장되고, 검색 기능으로 과거 질문을 찾을 수 있습니다. 중요 답변은 즐겨찾기도 가능합니다. |

### pmi — 병해 예보/경보 (5개)

| q | a |
|---|---|
| PMI가 뭔가요? | Plasmopora Model for Infection의 약자로, 기상·센서 데이터를 분석해 병해 발생 위험도를 0~100점으로 표시합니다. 70점 이상이면 예방제 살포를 권장해요. |
| 어떤 병해를 예측하나요? | 노균병(84%), 흰가루병(81%), 탄저병(78%), 잿빛곰팡이병(76%), 새눈무늬병(74%) 등 주요 병해 5종을 예측합니다. |
| 예측이 정확한가요? | 82% 정확도입니다. 유럽 포도 병해 예측 모델을 한국 기후에 맞게 보정했고, 기상청 동네예보 API와 실시간 연동됩니다. |
| 알림은 어떻게 오나요? | PMI 85점 이상은 즉시 긴급 알림, 70-84점은 당일 오전 경고, 50-69점은 전날 저녁 주의 알림이 발송됩니다. |
| 농약 살포를 자동으로 결정해주나요? | 아닙니다. 앱은 살포 '권장'만 제공합니다. 실제 살포 여부와 시점은 농가가 최종 결정합니다. |

### sensor — 센서 설치/연결 (7개)

| q | a |
|---|---|
| 센서가 꼭 있어야 하나요? | 아니요! 센서 없이도 AI 진단, RAG 상담은 모두 사용 가능합니다. 센서가 있으면 PMI 예측이 더 정밀해지고 실시간 모니터링이 가능해집니다. |
| 어떤 센서를 지원하나요? | 온도/습도, CO₂, 토양수분, 토양EC/pH, 일사량, 잎젖음, 풍속/풍향 센서를 지원합니다. Modbus, MQTT, LoRa, HTTP 프로토콜과 호환됩니다. |
| 기존 센서도 연동 되나요? | 표준 통신(Modbus, MQTT, LoRa 등)을 사용하는 센서는 대부분 연동 가능합니다. 사전 호환성 확인을 위해 문의해주세요. |
| 센서 설치는 직접 해야 하나요? | 기본적으로 현장 설치 가이드를 제공하며, 협력 설치 서비스(유료)도 선택할 수 있습니다. 설치 후 앱에서 자동 인식·연결됩니다. |
| 인터넷이 안 되는 하우스에서도 되나요? | 가능합니다. 현장 게이트웨이가 로컬 저장·분석을 수행하고, 통신 복구 시 자동으로 서버와 동기화됩니다. |
| 여러 동(하우스)을 한 번에 관리할 수 있나요? | 가능합니다. 전체 농장 요약 화면과 하우스별 상세 화면을 동시에 제공합니다. |
| 센서 값이 이상할 때는? | 앱에서 자동 이상 감지 알림이 오고, 점검 가이드가 제공됩니다. 해당 센서 데이터는 제외하고 분석이 진행됩니다. |

### schedule — 농사일정/영농일지 (5개)

| q | a |
|---|---|
| 농사일정이 자동으로 만들어지나요? | 네! 생육 단계와 누적온도(GDD)를 기반으로 관수, 방제, 시비, 수확 일정이 자동 생성됩니다. 농가가 직접 수정도 가능해요. |
| 일정을 수정할 수 있나요? | 물론입니다. 자동 일정은 권장안이며, 농가가 직접 날짜, 작업 내용, 메모를 자유롭게 편집할 수 있습니다. |
| 작업 알림은 어떻게 오나요? | 예정 작업은 1일 전과 당일 오전에, 긴급 상황은 즉시 푸시 알림으로 발송됩니다. 알림 켜기/끄기 설정도 가능합니다. |
| 과거 작업 기록을 볼 수 있나요? | 네! 모든 살포·관수·작업 이력이 자동 저장되며 날짜별, 하우스별로 조회할 수 있습니다. 엑셀 내보내기도 가능합니다. |
| 영농일지 작성은 어떻게 하나요? | 앱에서 '일지 작성' 버튼 → 날짜, 작업 내용 입력 → 사진 첨부(선택) → 저장. 작업 내용, 사용 자재, 작업 시간, 사진, 메모 등을 기록할 수 있습니다. |
| 살포 기록은 자동으로 남나요? | 반자동입니다. PMI 알림 → 방제 권장 → '살포 완료' 버튼 누르면 날짜, 약제명, 희석 배수, 살포량이 자동 기록됩니다. |

### data — 데이터가 정확한가요? (4개)

| q | a |
|---|---|
| 예측이 항상 맞나요? | 100% 예측은 불가능합니다. 하지만 실측 데이터와 과거 이력을 기반으로 위험을 조기에 알려 손실을 최소화하는 데 목적이 있습니다. |
| 우리 농장 데이터만 분석되나요? | 기본적으로 해당 농장 센서 데이터가 우선 사용됩니다. 보조적으로 지역 기상 정보가 활용되며, 다른 농가 데이터와 절대 혼합되지 않습니다. |
| 지역별로 다르게 분석하나요? | 네! 농장 위치(GPS) 등록 시 해당 지역 기상청 예보와 연동되어 지역 특성이 반영된 분석이 제공됩니다. |
| AI가 추천한 농약을 믿어도 되나요? | NCPMS 등록 농약만 추천하지만, 최종 판단은 농가가 하셔야 합니다. AI 추천은 참고용이며, 의심되면 농업기술센터에 확인하세요. |

### usage — 앱 사용법 (10개)

| q | a |
|---|---|
| 스마트폰이 구형인데 되나요? | 대부분 됩니다! Android 8.0(2017년~) 또는 iOS 13.0(iPhone 6s~) 이상이면 사용 가능합니다. |
| 사용법이 어렵지 않나요? | 아주 쉽습니다! 병해 진단은 사진만 찍으면 되고, 상담은 채팅으로 질문하면 됩니다. 숫자보다 색상과 아이콘 중심으로 설계했어요. |
| 데이터 요금 많이 나가나요? | 거의 안 나갑니다. 한 달 사용량이 약 1GB 이하이며, LTE/5G로 충분히 사용 가능합니다. |
| 사용법 교육 받을 수 있나요? | 네! 앱 내 튜토리얼, 유튜브 사용 가이드, 1:1 원격 교육(화상통화 30분), 현장 교육(김천 지역, 협의)을 제공합니다. |
| 성장일기 사진 촬영 시 위치 권한을 허용해야 하나요? | 네, 반드시 허용해주세요! FarmSense는 농장을 여러 섹터(구역)로 나누어 관리합니다. 사진 촬영 시 GPS 위치가 자동으로 기록되어 '어느 구역에서 찍은 사진인지' 자동 분류됩니다. 처음 앱 설치 시 '위치 항상 허용' 또는 '앱 사용 중 허용'을 선택해주세요. |
| 농장 주소는 왜 정확하게 입력해야 하나요? | 농장 주소(GPS 좌표)는 3가지 핵심 기능에 사용됩니다: 1) 해당 위치의 기상청 동네예보 연동 (PMI 병해 예측), 2) 섹터별 사진 자동 분류 (성장일기), 3) 지역 맞춤 재배 정보 제공. |
| 농장 설정을 왜 세밀하게 해야 하나요? | AI가 정확한 분석을 하려면 여러분 농장의 '맥락'을 알아야 합니다. 설정이 세밀할수록: 1) 품종별 맞춤 재배 일정 제공, 2) 재배 형태(노지/비가림/시설)에 맞는 PMI 계산, 3) 수령·재식거리 기반 정확한 약량 계산, 4) 섹터별 병해 발생 추적이 가능합니다. |
| 섹터(구역)는 어떻게 나누나요? | 농장 설정 → 섹터 관리에서 구역을 추가합니다. 예: '1동 앞쪽', '1동 뒤쪽', '2동', '노지' 등 원하는 대로 이름을 붙이세요. 섹터별로 품종, 수령, 특이사항을 따로 기록할 수 있고, 성장일기 사진도 자동으로 해당 섹터에 분류됩니다. |
| 농장 섹터는 어떻게 설정하나요? | 농장 설정 → 위성지도에서 직접 그릴 수 있습니다. 지도를 탭해서 경계 포인트를 찍으면 자동으로 선이 연결됩니다. |
| 섹터를 나누면 뭐가 좋은가요? | 1) 성장일기 사진이 GPS로 자동 분류됩니다. 2) 섹터별 병해 발생 추적이 가능합니다. 3) 정확한 면적으로 농약/비료량이 자동 계산됩니다. 4) '1동 앞쪽에서 노균병 발생' 같은 기록이 남아 다음 해 예방에 도움됩니다. |

### security — 보안/개인정보 (4개)

| q | a |
|---|---|
| 내 농장 정보가 유출되지 않나요? | 절대 유출되지 않습니다. 개인정보보호법을 준수하고, 모든 데이터는 암호화 저장·전송됩니다. 제3자 판매는 절대 하지 않습니다. |
| 다른 농가와 데이터가 섞이나요? | 없습니다. 농가·하우스 단위로 완전히 분리된 구조입니다. |
| 내가 찍은 사진은 어디에 저장되나요? | 서버에 30일간 보관 후 자동 삭제됩니다. 진단 기록은 1년간 보관되며, 원하시면 즉시 삭제 요청 가능합니다. |
| 데이터는 어디 서버에 저장되나요? | 국내 클라우드 서버(AWS 서울 리전)에 저장됩니다. 해외 서버 전송 없이 국내 데이터 보호법이 적용됩니다. |

### payment — 결제/환불 (1개)

| q | a |
|---|---|
| 결제나 환불은 어떻게 되나요? | 현재는 무료 베타 서비스 기간이므로 결제 정보 등록이 필요 없으며, 환불 절차 또한 없습니다. |

### trouble — 문제해결 (5개)

| q | a |
|---|---|
| 앱이 안 열려요 | 앱 강제 종료 후 재실행, 스마트폰 재부팅, 앱 재설치를 시도해보세요. 그래도 안 되면 artmer3061@gmail.com으로 문의해주세요. |
| 진단 결과가 안 나와요 | 인터넷 연결을 확인하고, 사진이 너무 어둡거나 흐릿하지 않은지 확인해주세요. 다른 각도로 다시 촬영해보세요. |
| 센서가 고장 나면? | 해당 센서 데이터는 제외하고 분석이 진행되며, 즉시 점검 알림이 전송됩니다. 문의: artmer3061@gmail.com |
| 전원이 꺼지면 데이터 사라지나요? | 아닙니다. 현장 장비에 로컬 저장되며, 재가동 시 자동 복구됩니다. 클라우드 백업된 데이터는 안전합니다. |
| 비밀번호를 잊어버렸어요 | 로그인 화면 → '비밀번호 찾기' → 이메일 입력 → 재설정 링크 발송 → 새 비밀번호 설정 |

### support — 고객지원 (4개)

| q | a |
|---|---|
| 문의는 어디로 하나요? | 이메일 artmer3061@gmail.com으로 문의해주세요. 평일 24시간 내 답변드립니다. 앱 내 '문의하기'에서도 가능합니다. |
| 버그/오류 신고는? | 앱 → 설정 → 문의하기 → '오류 신고'에서 화면 캡처와 함께 발생 상황을 설명해주세요. 빠른 시일 내 수정됩니다. |
| 기능 제안은? | 환영합니다! 앱 내 '기능 제안'이나 이메일로 보내주세요. 좋은 아이디어는 실제로 반영됩니다. |
| 조합/단체 도입 문의는? | 10농가 이상 20% 할인, 30농가 이상 30% 할인 + 현장 교육을 제공합니다. artmer3061@gmail.com으로 문의해주세요. |

---

## app/sensors/page.tsx — 센서 카탈로그

### 기본 패키지 센서

#### GATEWAY (SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway)
- 모델: SenseCAP M2 Multi-Platform LoRaWAN Indoor Gateway (SX1303)
- 통신: LoRaWAN (8 채널), Wi-Fi/LTE (옵션), Bluetooth 5.2, 이더넷
- 커버리지: 최대 10km (농촌 환경)
- 전원: 12V DC
- 역할: 센서 데이터 수집 및 클라우드 전송 허브
- 연결 최대: 2,000+ 기기

#### LTE_ROUTER (GL-E750 (MUDI) 4G LTE 모바일 라우터)
- 모델: GL-E750 (MUDI) 4G LTE Mobile Wi-Fi
- 통신: 4G LTE Cat-4 (150Mbps down, 50Mbps up), Wi-Fi 802.11ac
- 배터리: 7000mAh (10시간+)
- SIM: 국내 통신사 SIM 지원
- 역할: 인터넷 미설치 하우스를 위한 LTE 인터넷 연결
- 필요 조건: IoT 전용 데이터 요금제

#### HUB (SenseCAP Sensor Hub 4G Data Logger)
- 모델: SenseCAP Sensor Hub 4G Data Logger
- 통신: 4G LTE Cat-1, RS-485 Modbus (최대 8개 센서), Solar 충전 지원
- 방수: IP66
- 역할: 여러 센서를 하나의 장치로 연결하는 중계 장치
- 센서 연결: 최대 40개

#### TEMP_HUM (SenseCAP S2101 - 온도·습도 센서)
- 모델: SenseCAP S2101 LoRaWAN Air Temperature & Humidity Sensor
- 측정: 온도 -40~85°C (±0.2°C), 습도 0~100%RH (±2%)
- 통신: LoRaWAN (EU868/US915/AU915/AS923)
- 배터리: AA x 2 (5년+)
- 방수: IP66
- 역할: 하우스 내부 온습도 실시간 모니터링

#### SOIL_MOISTURE (SenseCAP S2105 - 토양 수분·온도·EC 센서)
- 모델: SenseCAP S2105 LoRaWAN Soil Moisture, Temperature, and EC Sensor
- 측정: 토양 수분 0~100% (±3%), 토양 온도 -40~80°C (±0.3°C), EC 0~23dS/m (±3%)
- 배터리: AA x 2 (5년+)
- 방수: IP68
- 역할: 토양 상태 정밀 모니터링 (관수 최적화 핵심)

### 선택 추가 센서 (OPTIONAL_SENSORS)

| 이름 | 측정 | 이유 |
|------|------|------|
| 일사량 센서 (SenseCAP S2120) | 조도 (lux), UV, 대기압, 온도, 습도, 풍속, 풍향 | 광합성 효율 분석, 수확 시기 예측 고도화 |
| CO₂·온습도 복합 센서 | CO₂ 400~10,000ppm (±50ppm), 온도, 습도 | 시설 내 CO₂ 농도 최적화로 광합성 촉진 |
| 토양 EC·pH 센서 | pH 0~14 (±0.1), EC 0~20dS/m (±2%) | 비료 시비량 정밀 계산, 토양 산도 관리 |
| 정밀 온도 센서 | -200~200°C (±0.1°C) | 접목부·저온 피해 임계점 모니터링 |
| 기상 스테이션 | 풍속 0~60m/s, 풍향 0~360°, 강수량 | 외부 기상 조건 자체 수집, 기상청 예보와 비교 |

---

## app/about/page.tsx — 소개

**H1:** 기술은 농가를 위해 존재합니다
**설명:** FarmSense는 포도 농가가 더 나은 판단을 내릴 수 있도록 데이터와 AI로 돕는 의사결정 지원 시스템입니다.

### VALUES 배열 (4개)

| title | desc |
|-------|------|
| 데이터 주권은 농가에게 | 수집된 모든 데이터의 소유권은 농가에 있습니다. 우리는 도구를 만들 뿐, 농가의 데이터를 팔지 않습니다. 블록체인 해시 체인으로 데이터 무결성을 보장하고, 농가가 원할 때 언제든 자신의 데이터를 내려받을 수 있습니다. |
| 경험을 대체하지 않고, 돕는다 | 30년 농사 경험은 어떤 AI도 대체할 수 없습니다. FarmSense는 농가의 경험에 데이터 근거를 더합니다. "이 시기에 방제하면 좋겠다"는 감에 "PMI 지수 0.65, 48시간 내 감염 확률 78%"라는 숫자를 더하는 것입니다. |
| 국산 농산물의 가치를 증명한다 | 저가 수입 농산물과의 가격 경쟁이 아니라, 가치 경쟁을 합니다. 센서 데이터 기반 재배 이력, 블록체인 봉인, QR 검증으로 "이 포도가 어떤 환경에서, 어떤 관리를 받으며 자랐는지"를 소비자에게 투명하게 보여줍니다. |
| 함께 만들어가는 플랫폼 | 농가의 피드백이 곧 다음 업데이트입니다. 현장에서 실제로 필요한 기능을 듣고, 현장에서 검증하고, 현장에서 완성합니다. 기술자가 아니라 농업인이 방향을 정합니다. |

### TECH_STACK 배열 (4개)

| label | desc |
|-------|------|
| AI 병해충 진단 | 촬영 한 장으로 질병 판별 |
| 데이터 기반 의사결정 | PMI·CWSI·GDD 복합 분석 |
| 블록체인 추적성 | 해시 체인 + QR 검증 |
| RAG 농업 비서 | 논문 기반 맞춤 답변 |

### TIMELINE 배열 (3단계)

| phase | items |
|-------|-------|
| 지금 | 센서 모니터링, AI 병해 진단, 영농일지, 딥리서치 정보 |
| 다음 단계 | 블록체인 LOT 추적, QR 소비자 검증, GAP 인증 연계, 수출 서류 자동화 |
| 장기 비전 | 전국 포도 농가 네트워크, 품종별 최적 재배 모델, 탄소발자국 추적, NFT 인증서 |

---

## app/partners/page.tsx — 파트너

**H1:** FarmSense Partners
**부제:** Building the future of agriculture through strategic partnerships

### partnerTypes 배열 (3개)

| type | description | benefits |
|------|-------------|---------|
| Farmers | Smart farming support for modern agricultural producers | Real-time crop monitoring and alerts / AI-powered disease prediction / Resource optimization (water, fertilizer) / Yield and quality improvement / Export market access support |
| Importers | Premium produce supply chain partners | Verified production data / Blockchain traceability / Consistent quality assurance / Residue risk management / Supply chain transparency |
| Government & Research | Agricultural data platform for policy and research | Regional crop monitoring data / Climate impact analysis / Policy decision support / Agricultural research collaboration / Export certification support |

### partnershipModels 배열 (3개)

| title | description | features |
|-------|-------------|---------|
| Technology Partnership | Integrate FarmSense platform with existing agricultural systems | API Integration, Data Sharing, Custom Development, Technical Support |
| Supply Chain Partnership | Connect premium produce from farms to international markets | Quality Assurance, Traceability, Market Access, Logistics Support |
| Research Collaboration | Joint research projects and data sharing for agricultural innovation | Data Access, Joint Studies, Publication, Technology Transfer |

### 파트너십 성공 사례

**Grape Export to Singapore (Farmers + Importers)**
10개 포도 농가와 싱가포르 수입업체의 협력을 통해 블록체인 추적성이 적용된 프리미엄 포도를 정기적으로 수출하고 있습니다. 생산 데이터 검증을 통해 가격 프리미엄을 실현했습니다.
- +30% Price Premium, Monthly Export, Blockchain Verified

**Regional Agricultural Monitoring (Government Partnership)**
지자체와의 협력을 통해 지역 단위 농작물 모니터링 시스템을 구축했습니다.
- 5,000+ Hectares, Real-time Monitoring, Policy Support

---

## app/education/page.tsx — FarmSense Academy

**eyebrow:** FarmSense Academy
**H1:** 센서, 직접 만들고 연동하세요
**설명:** FarmSense는 폐쇄적인 시스템이 아닙니다. 여러분이 가진 장비 그대로, 우리의 두뇌(Brain)와 연결할 수 있습니다.

### educationModules 배열 (4개)

| title | level | description | href |
|-------|-------|-------------|------|
| 입문/초급 (DIY 기초) | Beginner | ESP32와 아두이노를 활용하여 나만의 스마트팜 센서를 직접 만들어봅니다. | /education/beginner |
| 중급/고급 (API/LoRa) | Advanced | FarmSense API와 연동하거나 LoRa 장거리 통신 네트워크를 구축합니다. | /education/advanced |
| 환경제어 센서 가이드 | Field Guide | 온실 내 센서 최적 배치 위치와 노이즈 저감 설치 노하우를 배웁니다. | /education/environment |
| 개발자 API 문서 | Developer | 센서 데이터를 FarmSense 클라우드로 전송하기 위한 REST API 규격서입니다. | /developers/api-guide |

---

## app/grape-info/page.tsx — 포도 재배 정보

**eyebrow:** 데이터 기반 재배 인사이트
**H1:** 포도 재배 정보
**설명:** 딥리서치 기반의 포도 재배 기술과 병해충 관리 정보를 제공합니다

- DEMO_BLOG_ARTICLES 데이터를 기반으로 카테고리 필터 후 기사 그리드로 표시
- BLOG_CATEGORIES 필터 제공
- 상세 기사는 `/grape-info/[id]` 페이지로 이동

(기사 데이터는 12-demo-and-lib-data.md 참조)

---

## app/sensor-installation-guide/page.tsx — 센서 설치 도우미

**eyebrow:** AI 활용 센서 설치 가이드
**H1:** 센서 설치 도우미
**설명:** 복잡한 시스템을 배울 필요 없이, 이미 손안에 있는 AI(Gemini, ChatGPT 등)를 최고의 기술자로 만드는 가이드입니다.

### 핵심 개념: AI를 기술자로 만드는 방법

"이 센서를 어떻게 연결하나요?"라는 질문 대신, "센서 단자대 사진을 찍고 AI에게 '이 배선도대로 연결된 게 맞니?'라고 물어보세요"

### 시나리오 1: 센서 배선 확인 (3단계)
1. 사진 촬영 — 센서 단자대나 배선 상태를 명확하게 촬영
2. AI에게 질문 — "이 센서 배선 사진을 보여드립니다. 배선도대로 연결된 게 맞는지 확인해주세요. 배선도: [첨부] / 실제 연결 상태: [첨부]"
3. AI 답변 확인 — AI가 배선 상태를 분석하고 잘못된 연결을 지적

### 시나리오 2: KT 스마트팜 연동 - API 키 입력
- 주의: API 키 입력 화면 촬영 시 개인정보 마스킹 처리

### 시나리오 3: 센서 S/N 부착 위치 확인
- S/N 등록 시 정확한 위치 부착 여부 확인

### 데이터 입력(사진 찍기) 품질 향상 가이드
- 좋은 사진: 충분한 조명, 모든 연결부 명확히 보임, 초점 맞음, 배경 깔끔
- 나쁜 사진: 어두운 조명, 흔들려 흐릿함, 일부만 보임, 복잡한 배경

### 실전 활용 팁
1. 명확한 질문하기 — "이게 맞나요?"보다 "이 배선도대로 연결된 게 맞는지 확인해주세요"처럼 구체적으로
2. 관련 자료 함께 제공 — 배선도, 매뉴얼, 오류 메시지 등 관련 자료 함께 첨부
3. 단계별 확인 — 복잡한 작업은 여러 단계로 나누어 각 단계마다 AI에게 확인

---

## app/grape-intelligence/page.tsx — Grape Intelligence

**H1:** Grape Intelligence
**부제:** 데이터 기반 포도 재배 지능 시스템
**설명:** FarmSense의 포도 특화 AI 모델과 센서 데이터를 통한 정밀 농업 솔루션. 지자체, 농업기술센터, 연구기관을 위한 종합 포도 재배 인텔리전스

### growthStages 배열 (4개)

| stage | period | keyMetrics | monitoring |
|-------|--------|-----------|-----------|
| Dormancy | 12월-2월 | 온도 누적, 휴면 깨짐, 가지 상태 | 겨울 동안의 나무 상태와 휴면 깊이 모니터링 |
| Flowering | 3월-4월 | 개화율, 수정 성공률, 기상 조건 | 개화 시기와 조건에 따른 수확량 예측 |
| Coloring | 6월-7월 | 색소 축적, 당도 변화, 산도 변화 | 과실 발달과 품질 형성 과정 추적 |
| Harvest | 8월-9월 | 최적 수확 시기, 품질 지수, 수확 효율 | 수확 시기 결정과 품질 최적화 |

### qualityMetrics 배열 (4개)

| metric | unit | target | importance | monitoring |
|--------|------|--------|-----------|-----------|
| Sugar Content | °Brix | 18-22°Brix | 당도는 포도의 품질과 가격을 결정하는 가장 중요한 요소 | 주간 당도 변화 추적 및 예측 |
| Acidity | pH | 3.2-3.8 pH | 산도는 포도의 신선함과 균형을 결정 | 산도 변화와 당산비 최적화 |
| Berry Size | mm | 18-22mm | 과실 크기는 시장성과 소비자 선호도에 영향 | 과실 발달 추적 및 크기 예측 |
| Cluster Weight | g | 300-500g | 송이 무게는 수확량과 포장 효율성 결정 | 송이 발달과 최종 무게 예측 |

### environmentalData 배열 (4개)

| factor | optimal | impact | monitoring |
|--------|---------|--------|-----------|
| Temperature | 15-30°C | 생장 속도, 당도 축적, 색소 형성에 직접적 영향 | 주야간 온도차와 생장 적산 온도 추적 |
| Humidity | 60-80% | 병해충 발생, 증산 작용, 과실 품질에 영향 | 상대 습도와 이슬점 관리 |
| Solar Radiation | 6-8 hours/day | 광합성 효율, 당도 축적, 색소 형성 결정 | 일사량과 광합성 활성도 측정 |
| Irrigation | 주기적 관리 | 수분 스트레스 관리, 과실 크기와 품질 결정 | 토양 수분과 관수 시기 최적화 |

### 지자체 및 농업기술센터 활용 방안 (3개 섹션)

**지역 단위 모니터링:**
- 지역별 포도 재배 현황 실시간 모니터링
- 기후 변화에 따른 재배 패턴 분석
- 병해충 발생 예측 및 대응 체계
- 수확량 예측과 시장 공급 계획

**정책 결정 지원:**
- 농업 보조금 배분 최적화
- 신품종 도입 효과 분석
- 재배 기술 보급 효과 평가
- 수출 지원 정책 수립

**연구 및 교육:**
- 농업 교육용 실시간 데이터 제공
- 연구 기관과의 데이터 공유
- 신기술 실증 연구 지원
- 농업인 교육 프로그램 개발

**CTA:** 정부/기관 문의 → /contact?type=government

---

## app/data-intelligence/page.tsx — Data Intelligence

**H1:** Data Intelligence
**부제:** FarmSense transforms agricultural data into actionable intelligence

### dataTypes 배열 (4개)

| category | volume | description | metrics |
|---------|--------|-------------|---------|
| Farm Data | 4억+ 데이터 포인트 | Real-time sensor data from agricultural operations | Temperature, Humidity, Soil Moisture, Light Intensity, CO2 Levels |
| Climate Data | 연간 50TB+ | Environmental and meteorological information | Weather Patterns, Rainfall, Wind Speed, Solar Radiation, Microclimate |
| Crop Growth Data | 2천만+ 이미지 | Plant development and health indicators | Growth Rate, Leaf Area, Fruit Development, Disease Indicators, Stress Levels |
| Quality Data | 500만+ 측정값 | Product quality and market readiness metrics | Sugar Content, Acidity, Size/Weight, Color, Defect Detection |

### From Data to Intelligence (5단계 파이프라인)

1. Data Collection — IoT sensors, drones, and manual inputs
2. Data Processing — Cleaning, normalization, and storage
3. AI Analysis — Machine learning models and pattern recognition
4. Insight Generation — Actionable recommendations and predictions
5. Decision Support — Farm management and business intelligence

### useCases 배열 (3개)

| audience | title | description | benefits |
|---------|-------|-------------|---------|
| Investors | Agricultural Technology Investment | Data-driven insights for agtech investment decisions | Market size analysis / Technology adoption metrics / ROI projections based on real farm data / Competitive landscape intelligence |
| Research Institutions | Agricultural Research & Development | Comprehensive datasets for crop science, climate impact studies | Long-term crop performance data / Climate change impact analysis / New cultivation method validation / Academic research collaboration |
| Government Agencies | Policy & Regional Planning | Data intelligence for agricultural policy, regional development, food security | Regional crop yield forecasting / Resource allocation optimization / Climate adaptation strategies / Export market development |

### Platform Capabilities (4개)

- Real-time Analytics: Live data processing and visualization for immediate decision-making
- Predictive Modeling: AI-powered forecasts for crop yields, disease outbreaks, and market trends
- Data Integration: Seamless connection with existing farm management systems and external data sources
- Custom Reporting: Tailored dashboards and reports for different stakeholders and use cases

**CTA:** Request Data Access → /contact?type=data-intelligence

---

## app/agriculture-data-platform/page.tsx — 농업 데이터 플랫폼

**H1:** FarmSense Agricultural Data Platform
**부제:** 농업 데이터 플랫폼
**설명:** 지자체, 농업기술센터, 연구기관을 위한 종합 농업 데이터 플랫폼. 정책 지원, 작물 분석, 지역 농업 인텔리전스를 위한 데이터 기반 솔루션

### platformComponents 배열 (4개)

| component | description | capabilities |
|---------|-------------|-------------|
| Sensor Network | 농장 전반에 배치된 IoT 센서 네트워크 | 실시간 환경 데이터 수집 / 원격 모니터링 / 에너지 효율적 운영 / 확장 가능한 아키텍처 |
| Crop Growth Data | 작물 생장과 발달 데이터 수집 및 분석 | 생장 단계 모니터링 / 건강 지표 추적 / 수확량 예측 / 품질 변화 분석 |
| Quality Data | 품질 평가와 시장 적합성 데이터 | 품질 지표 측정 / 시장 등급 분류 / 저장 조건 모니터링 / 유통 기한 예측 |
| Regional Analysis | 지역 단위 농업 데이터 통합 분석 | 지역별 비교 분석 / 기후 영향 평가 / 정책 효과 분석 / 시장 트렌드 예측 |

### applications 배열 (3개)

| area | title | description | examples |
|------|-------|-------------|---------|
| Policy Support | 정책 결정 지원 | 데이터 기반 농업 정책 수립과 평가 | 보조금 배분 최적화 / 작물 재배 권장안 개발 / 기후 변화 대응 전략 / 지역 농업 발전 계획 |
| Crop Analysis | 작물 분석 및 모니터링 | 지역 단위 작물 성장과 건강 상태 분석 | 병해충 발생 예측 / 수확량 예측 모델 / 품질 변화 추적 / 재배 방법 비교 평가 |
| Regional Agriculture Intelligence | 지역 농업 인텔리전스 | 지역 농업 현황과 발전 방향 분석 | 지역 특화 작물 선정 / 시장 접근성 분석 / 인프라 계획 수립 / 교육 프로그램 개발 |

### stakeholders 배열 (3개)

| group | needs | benefits |
|-------|-------|---------|
| 지자체 (Local Government) | 지역 농업 발전, 정책 효과 평가, 예산 배분 최적화 | 데이터 기반 정책 결정 / 지역 농업 현황 실시간 모니터링 / 정책 효과 측정 및 평가 / 주민 서비스 향상 |
| 농업기술센터 (Agricultural Technology Centers) | 농업인 교육, 기술 보급, 현장 문제 해결 | 실시간 농장 데이터 접근 / 교육 자료 개발 지원 / 기술 실증 연구 데이터 / 농업인 맞춤형 조언 |
| 연구기관 (Research Institutions) | 농업 연구, 데이터 분석, 논문 발표 | 대규모 농업 데이터셋 / 장기적 추세 분석 / 연구 협력 기회 / 실험 설계 지원 |

### 데이터 플랫폼 아키텍처 (5계층)

1. 데이터 수집 — IoT Sensors, Drones, Manual Input
2. 데이터 처리 — Data Cleaning, Normalization, Storage
3. 데이터 분석 — AI Models, Statistical Analysis
4. 인사이트 생성 — Dashboards, Reports, Alerts
5. 응용 프로그램 — APIs, Mobile Apps, Web Interfaces

### 협력 모델 (3종)

- 라이선스 구매: 기관 내부 사용을 위한 플랫폼 라이선스
- 연구 협력: 공동 연구 프로젝트와 데이터 공유
- 컨설팅 서비스: 농업 데이터 분석과 정책 컨설팅

**Contact:** government@farmsense.kr | 전화: 02-XXXX-XXXX
