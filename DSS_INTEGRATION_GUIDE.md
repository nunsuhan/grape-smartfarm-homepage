\# FarmSense DSS 연동 가이드



\## 📋 개요

서버에 구현된 DSS(의사결정지원시스템) API를 프론트엔드 화면에 연동하는 가이드입니다.



---



\## 🔗 DSS API 목록



\### Base URL

```

https://farmsense.kr/api/v1/dss/farms/{farm\_id}/

```



\### 1. 💧 관수(물관리) API



| 기능 | Method | URL | 설명 |

|------|--------|-----|------|

| 관수 권장량 | POST | `/irrigation/` | 현재 환경 기반 관수량 계산 |

| 연간 관수 계획 | GET | `/irrigation/plan/` | 월별 관수 계획 조회 |



\*\*요청 예시 (관수 권장량):\*\*

```javascript

const response = await fetch(`${API\_BASE}/v1/dss/farms/${farmId}/irrigation/`, {

&nbsp; method: 'POST',

&nbsp; headers: {

&nbsp;   'Content-Type': 'application/json',

&nbsp;   'Authorization': `Bearer ${token}`

&nbsp; },

&nbsp; body: JSON.stringify({

&nbsp;   soil\_moisture: 45,        // 토양수분 (%)

&nbsp;   temperature: 28,          // 온도 (°C)

&nbsp;   humidity: 65,             // 습도 (%)

&nbsp;   solar\_radiation: 15,      // 일사량 (MJ/m²)

&nbsp;   growth\_stage: '과실비대기',

&nbsp;   area\_pyeong: 1000,        // 면적 (평)

&nbsp;   variety: '샤인머스켓',

&nbsp;   terrain: '평지',

&nbsp;   surface\_management: '무피복',

&nbsp;   grape\_type: '청포도'

&nbsp; })

});

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "success": true,

&nbsp; "farm\_id": "farm-123",

&nbsp; "data": {

&nbsp;   "recommended\_amount\_liter": 2500,

&nbsp;   "recommended\_amount\_per\_tree": 25,

&nbsp;   "irrigation\_needed": true,

&nbsp;   "urgency": "normal",

&nbsp;   "message": "토양수분이 적정 범위보다 낮습니다. 관수를 권장합니다.",

&nbsp;   "next\_irrigation": "2026-01-19T06:00:00"

&nbsp; }

}

```



---



\### 2. 🧪 비료 API



| 기능 | Method | URL | 설명 |

|------|--------|-----|------|

| 비료 권장량 | POST | `/fertilizer/` | 생육단계별 시비량 계산 |

| 증상 진단 | POST | `/fertilizer/diagnose/` | 결핍 증상 진단 |



\*\*요청 예시 (비료 권장량):\*\*

```javascript

const response = await fetch(`${API\_BASE}/v1/dss/farms/${farmId}/fertilizer/`, {

&nbsp; method: 'POST',

&nbsp; headers: {

&nbsp;   'Content-Type': 'application/json',

&nbsp;   'Authorization': `Bearer ${token}`

&nbsp; },

&nbsp; body: JSON.stringify({

&nbsp;   variety: '샤인머스켓',

&nbsp;   growth\_stage: '과실비대기',

&nbsp;   target\_yield\_ton: 2.0,    // 목표 수확량 (톤)

&nbsp;   area\_10a: 1.0,            // 면적 (10a = 1000㎡)

&nbsp;   soil\_ph: 6.5,             // 토양 pH (선택)

&nbsp;   soil\_om: 2.5,             // 유기물 함량 (선택)

&nbsp;   soil\_texture: '양토'

&nbsp; })

});

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "success": true,

&nbsp; "data": {

&nbsp;   "nitrogen\_kg": 12.5,

&nbsp;   "phosphorus\_kg": 8.0,

&nbsp;   "potassium\_kg": 15.0,

&nbsp;   "recommended\_fertilizer": \[

&nbsp;     {"name": "요소", "amount\_kg": 27, "timing": "3월 상순"},

&nbsp;     {"name": "용과린", "amount\_kg": 40, "timing": "3월 상순"},

&nbsp;     {"name": "염화칼리", "amount\_kg": 25, "timing": "5월 하순"}

&nbsp;   ],

&nbsp;   "message": "과실비대기에는 칼리 시비가 중요합니다."

&nbsp; }

}

```



\*\*요청 예시 (증상 진단):\*\*

```javascript

const response = await fetch(`${API\_BASE}/v1/dss/farms/${farmId}/fertilizer/diagnose/`, {

&nbsp; method: 'POST',

&nbsp; body: JSON.stringify({

&nbsp;   symptom: '황화',           // 황화, 괴사, 위축 등

&nbsp;   leaf\_position: '하위엽',   // 상위엽, 하위엽, 전체

&nbsp;   growth\_stage: '과실비대기'

&nbsp; })

});

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "success": true,

&nbsp; "data": {

&nbsp;   "suspected\_deficiency": "질소",

&nbsp;   "confidence": 0.85,

&nbsp;   "symptoms\_match": \["하위엽 황화", "생육 불량"],

&nbsp;   "recommendation": "요소 0.3% 엽면시비 권장",

&nbsp;   "severity": "moderate"

&nbsp; }

}

```



---



\### 3. 🌱 생육단계 API



| 기능 | Method | URL | 설명 |

|------|--------|-----|------|

| 생육단계 조회 | GET | `/growth-stage/` | 현재 생육단계 확인 |



\*\*요청 예시:\*\*

```javascript

const response = await fetch(

&nbsp; `${API\_BASE}/v1/dss/farms/${farmId}/growth-stage/?variety=shine\_muscat`

);

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "current\_stage": "과실비대기",

&nbsp; "stage\_code": "fruit\_enlargement",

&nbsp; "progress\_percent": 65,

&nbsp; "days\_in\_stage": 25,

&nbsp; "expected\_next\_stage": "착색기",

&nbsp; "days\_to\_next": 15,

&nbsp; "key\_tasks": \[

&nbsp;   "적과 작업",

&nbsp;   "봉지씌우기",

&nbsp;   "관수 관리"

&nbsp; ]

}

```



---



\### 4. 🛡️ 살포량 계산 API (DOSAVIÑA)



| 기능 | Method | URL | 설명 |

|------|--------|-----|------|

| 살포량 계산 | POST | `/spray-volume/` | 농약 살포량 계산 |



\*\*요청 예시:\*\*

```javascript

const response = await fetch(`${API\_BASE}/v1/dss/farms/${farmId}/spray-volume/`, {

&nbsp; method: 'POST',

&nbsp; body: JSON.stringify({

&nbsp;   row\_spacing: 3.0,         // 열간 거리 (m)

&nbsp;   vine\_spacing: 2.5,        // 주간 거리 (m)

&nbsp;   canopy\_height: 1.8,       // 수관 높이 (m)

&nbsp;   canopy\_width: 1.2,        // 수관 폭 (m)

&nbsp;   leaf\_density: 'medium',   // low, medium, high

&nbsp;   sprayer\_type: 'airblast', // airblast, backpack

&nbsp;   target\_coverage: 'full'   // light, moderate, full

&nbsp; })

});

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "success": true,

&nbsp; "data": {

&nbsp;   "spray\_volume\_per\_ha": 850,

&nbsp;   "spray\_volume\_per\_tree": 2.1,

&nbsp;   "dilution\_factor": 500,

&nbsp;   "nozzle\_recommendation": "중형 노즐",

&nbsp;   "pressure\_bar": 8,

&nbsp;   "speed\_kmh": 5

&nbsp; }

}

```



---



\### 5. 📊 대시보드 API



| 기능 | Method | URL | 설명 |

|------|--------|-----|------|

| 대시보드 | GET | `/dashboard/` | 종합 현황 조회 |



\*\*요청 예시:\*\*

```javascript

const response = await fetch(`${API\_BASE}/v1/dss/farms/${farmId}/dashboard/`);

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "farm\_id": "farm-123",

&nbsp; "growth\_stage": "과실비대기",

&nbsp; "sensor\_summary": {

&nbsp;   "temperature": 26.5,

&nbsp;   "humidity": 68,

&nbsp;   "soil\_moisture": 42

&nbsp; },

&nbsp; "alerts": \[

&nbsp;   {"type": "irrigation", "level": "warning", "message": "토양수분 부족"},

&nbsp;   {"type": "disease", "level": "info", "message": "탄저병 주의 기간"}

&nbsp; ],

&nbsp; "today\_tasks": \[

&nbsp;   {"task": "관수", "status": "pending", "recommended\_time": "06:00"},

&nbsp;   {"task": "환기", "status": "completed"}

&nbsp; ],

&nbsp; "weekly\_summary": {

&nbsp;   "irrigation\_count": 3,

&nbsp;   "spray\_count": 1,

&nbsp;   "fertilizer\_applied": true

&nbsp; }

}

```



---



\### 6. 🩺 통합 진단 API (dss/diagnose)



| 기능 | Method | URL | 설명 |

|------|--------|-----|------|

| AI 통합 진단 | POST | `/api/dss/diagnose/` | 이미지 + 센서 융합 진단 |



\*\*요청 예시:\*\*

```javascript

const formData = new FormData();

formData.append('image', imageFile);



const response = await fetch('https://farmsense.kr/api/dss/diagnose/', {

&nbsp; method: 'POST',

&nbsp; body: formData

});

```



\*\*응답 예시:\*\*

```json

{

&nbsp; "status": "success",

&nbsp; "visual\_result": {

&nbsp;   "disease": "탄저병",

&nbsp;   "confidence": 0.89

&nbsp; },

&nbsp; "context": {

&nbsp;   "risk\_score": 0.75,

&nbsp;   "anomaly\_score": 0.3

&nbsp; },

&nbsp; "final\_diagnosis": {

&nbsp;   "disease": "탄저병",

&nbsp;   "severity": "중증",

&nbsp;   "confidence": 0.92,

&nbsp;   "recommendation": "만코지 수화제 살포 권장"

&nbsp; }

}

```



---



\## 📱 화면별 연동 가이드



\### 1. 홈 화면 (HomeScreen)

\*\*연동 API:\*\* `/dashboard/`

```tsx

// 홈 화면에 오늘의 할 일, 알림 표시

useEffect(() => {

&nbsp; const fetchDashboard = async () => {

&nbsp;   const res = await dssApi.getDashboard(farmId);

&nbsp;   setAlerts(res.alerts);

&nbsp;   setTodayTasks(res.today\_tasks);

&nbsp; };

&nbsp; fetchDashboard();

}, \[farmId]);

```



\### 2. 팜닥터 결과 화면 (DiagnosisResultScreen)

\*\*연동 API:\*\* `/api/dss/diagnose/` (이미 사용 중이면 유지)



예방 가이드 섹션 추가:

```tsx

// 센서 데이터 기반 위험도 표시

<View style={styles.preventionCard}>

&nbsp; <Text>🛡️ 예방 가이드</Text>

&nbsp; <Text>현재 환경 위험도: {riskScore}%</Text>

&nbsp; <Text>{recommendation}</Text>

</View>

```



\### 3. 물관리 화면 (신규 또는 기존 화면에 추가)

\*\*연동 API:\*\* `/irrigation/`, `/irrigation/plan/`

```tsx

// 관수 권장량 조회

const getIrrigationRecommendation = async () => {

&nbsp; const res = await dssApi.getIrrigation(farmId, {

&nbsp;   soil\_moisture: sensorData.soil\_moisture,

&nbsp;   temperature: sensorData.temperature,

&nbsp;   humidity: sensorData.humidity,

&nbsp;   growth\_stage: currentStage,

&nbsp;   area\_pyeong: farmInfo.area

&nbsp; });

&nbsp; setIrrigationData(res.data);

};

```



\### 4. 비료관리 화면 (신규 또는 기존 화면에 추가)

\*\*연동 API:\*\* `/fertilizer/`, `/fertilizer/diagnose/`



\### 5. 농약관리 화면 (PesticideManagementScreen)

\*\*연동 API:\*\* `/spray-volume/`



---



\## 📁 프론트엔드 API 서비스 파일 생성



\### `src/services/dssApi.ts` (신규 생성)

```typescript

import apiClient from './api';



const DSS\_BASE = '/v1/dss/farms';



export const dssApi = {

&nbsp; // 대시보드

&nbsp; getDashboard: async (farmId: string) => {

&nbsp;   const response = await apiClient.get(`${DSS\_BASE}/${farmId}/dashboard/`);

&nbsp;   return response.data;

&nbsp; },



&nbsp; // 생육단계

&nbsp; getGrowthStage: async (farmId: string, variety: string = 'shine\_muscat') => {

&nbsp;   const response = await apiClient.get(`${DSS\_BASE}/${farmId}/growth-stage/?variety=${variety}`);

&nbsp;   return response.data;

&nbsp; },



&nbsp; // 관수 권장량

&nbsp; getIrrigation: async (farmId: string, data: any) => {

&nbsp;   const response = await apiClient.post(`${DSS\_BASE}/${farmId}/irrigation/`, data);

&nbsp;   return response.data;

&nbsp; },



&nbsp; // 연간 관수 계획

&nbsp; getIrrigationPlan: async (farmId: string, areaPyeong: number) => {

&nbsp;   const response = await apiClient.get(`${DSS\_BASE}/${farmId}/irrigation/plan/?area\_pyeong=${areaPyeong}`);

&nbsp;   return response.data;

&nbsp; },



&nbsp; // 비료 권장량

&nbsp; getFertilizer: async (farmId: string, data: any) => {

&nbsp;   const response = await apiClient.post(`${DSS\_BASE}/${farmId}/fertilizer/`, data);

&nbsp;   return response.data;

&nbsp; },



&nbsp; // 증상 진단

&nbsp; diagnoseSymptom: async (farmId: string, data: any) => {

&nbsp;   const response = await apiClient.post(`${DSS\_BASE}/${farmId}/fertilizer/diagnose/`, data);

&nbsp;   return response.data;

&nbsp; },



&nbsp; // 살포량 계산

&nbsp; getSprayVolume: async (farmId: string, data: any) => {

&nbsp;   const response = await apiClient.post(`${DSS\_BASE}/${farmId}/spray-volume/`, data);

&nbsp;   return response.data;

&nbsp; },

};



export default dssApi;

```



---



\## ✅ 작업 우선순위



\### 1단계 (필수)

\- \[ ] `dssApi.ts` 서비스 파일 생성

\- \[ ] HomeScreen에 대시보드 알림 연동



\### 2단계 (권장)

\- \[ ] 팜닥터 결과 화면에 예방 가이드 추가

\- \[ ] 기존 PesticideManagementScreen에 살포량 계산 연동



\### 3단계 (선택)

\- \[ ] 물관리 전용 화면 생성

\- \[ ] 비료관리 전용 화면 생성



---



\## ⚠️ 주의사항



1\. \*\*farm\_id 필수\*\*: 모든 DSS API는 farm\_id가 필요합니다

2\. \*\*인증 토큰\*\*: 일부 API는 인증이 필요합니다

3\. \*\*센서 데이터 연동\*\*: 관수/비료 API는 현재 센서 데이터를 함께 전송하면 더 정확한 결과



---



\## 📞 문의

백엔드 API 관련: 문수

