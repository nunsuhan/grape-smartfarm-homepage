'use client';

import Link from 'next/link';

export default function ApiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      <header className="bg-purple-900/50 backdrop-blur-sm border-b border-purple-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">🍇 FarmSense</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-purple-200 hover:text-white">홈</Link>
            <Link href="/sensor-guide" className="text-white font-semibold">센서 가이드</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="text-purple-300 text-sm">
          <Link href="/sensor-guide" className="hover:text-white">센서 가이드</Link>
          <span className="mx-2">/</span>
          <span className="text-white">서버 연동 API</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">🌐 서버 연동 API</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">기본 정보</h2>
          <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
            <table className="w-full">
              <tbody className="divide-y divide-purple-700">
                <tr>
                  <td className="py-3 text-purple-300">Base URL</td>
                  <td className="py-3 text-white font-mono">https://farmsense.kr/api/v1</td>
                </tr>
                <tr>
                  <td className="py-3 text-purple-300">인증 방식</td>
                  <td className="py-3 text-white">Bearer Token</td>
                </tr>
                <tr>
                  <td className="py-3 text-purple-300">Content-Type</td>
                  <td className="py-3 text-white font-mono">application/json</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">센서 데이터 전송</h2>
          <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">POST</span>
              <code className="text-white font-mono">/sensor/data</code>
            </div>
            
            <h4 className="text-white font-semibold mt-6 mb-3">Headers</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</pre>
            </div>

            <h4 className="text-white font-semibold mt-6 mb-3">Request Body</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">{`{
  "sensor_id": "SENSOR001",
  "temperature": 25.5,
  "humidity": 65,
  "soil_moisture": 42,
  "co2": 450,           // 선택
  "light": 12000        // 선택
}`}</pre>
            </div>

            <h4 className="text-white font-semibold mt-6 mb-3">Response (성공)</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">{`{
  "status": "ok",
  "message": "Data received",
  "timestamp": "2025-01-22T10:30:00Z",
  "sensor_id": "SENSOR001"
}`}</pre>
            </div>

            <h4 className="text-white font-semibold mt-6 mb-3">Response (에러)</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-red-400 text-sm">{`{
  "status": "error",
  "message": "Invalid API key",
  "code": 401
}`}</pre>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">센서 데이터 조회</h2>
          <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">GET</span>
              <code className="text-white font-mono">/sensor/data/{'{sensor_id}'}</code>
            </div>

            <h4 className="text-white font-semibold mt-6 mb-3">Query Parameters</h4>
            <table className="w-full text-sm">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-2 text-left text-white">파라미터</th>
                  <th className="px-4 py-2 text-left text-white">타입</th>
                  <th className="px-4 py-2 text-left text-white">설명</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr>
                  <td className="px-4 py-2 text-purple-200 font-mono">start_date</td>
                  <td className="px-4 py-2 text-purple-200">string</td>
                  <td className="px-4 py-2 text-purple-200">시작일 (YYYY-MM-DD)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-purple-200 font-mono">end_date</td>
                  <td className="px-4 py-2 text-purple-200">string</td>
                  <td className="px-4 py-2 text-purple-200">종료일 (YYYY-MM-DD)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-purple-200 font-mono">limit</td>
                  <td className="px-4 py-2 text-purple-200">integer</td>
                  <td className="px-4 py-2 text-purple-200">최대 개수 (기본: 100)</td>
                </tr>
              </tbody>
            </table>

            <h4 className="text-white font-semibold mt-6 mb-3">Response</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">{`{
  "status": "ok",
  "sensor_id": "SENSOR001",
  "data": [
    {
      "timestamp": "2025-01-22T10:30:00Z",
      "temperature": 25.5,
      "humidity": 65,
      "soil_moisture": 42
    },
    {
      "timestamp": "2025-01-22T10:20:00Z",
      "temperature": 25.3,
      "humidity": 66,
      "soil_moisture": 43
    }
  ],
  "count": 2
}`}</pre>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">예제 코드</h2>
          
          <div className="space-y-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-4">Python</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm">{`import requests

API_URL = "https://farmsense.kr/api/v1/sensor/data"
API_KEY = "YOUR_API_KEY"

data = {
    "sensor_id": "SENSOR001",
    "temperature": 25.5,
    "humidity": 65,
    "soil_moisture": 42
}

response = requests.post(
    API_URL,
    headers={"Authorization": f"Bearer {API_KEY}"},
    json=data
)

print(response.json())`}</pre>
              </div>
            </div>

            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-4">cURL</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm">{`curl -X POST https://farmsense.kr/api/v1/sensor/data \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"sensor_id":"SENSOR001","temperature":25.5,"humidity":65,"soil_moisture":42}'`}</pre>
              </div>
            </div>

            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-4">Arduino/ESP32</h3>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-green-400 text-sm">{`#include <HTTPClient.h>
#include <ArduinoJson.h>

void sendData(float temp, float humi, int soil) {
  HTTPClient http;
  http.begin("https://farmsense.kr/api/v1/sensor/data");
  http.addHeader("Authorization", "Bearer YOUR_API_KEY");
  http.addHeader("Content-Type", "application/json");
  
  StaticJsonDocument<200> doc;
  doc["sensor_id"] = "SENSOR001";
  doc["temperature"] = temp;
  doc["humidity"] = humi;
  doc["soil_moisture"] = soil;
  
  String json;
  serializeJson(doc, json);
  
  int code = http.POST(json);
  http.end();
}`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">에러 코드</h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">코드</th>
                  <th className="px-4 py-3 text-left text-white">설명</th>
                  <th className="px-4 py-3 text-left text-white">해결 방법</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr>
                  <td className="px-4 py-3 text-yellow-300 font-mono">400</td>
                  <td className="px-4 py-3 text-purple-200">잘못된 요청</td>
                  <td className="px-4 py-3 text-purple-200">JSON 형식 확인</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-red-300 font-mono">401</td>
                  <td className="px-4 py-3 text-purple-200">인증 실패</td>
                  <td className="px-4 py-3 text-purple-200">API 키 확인</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-red-300 font-mono">404</td>
                  <td className="px-4 py-3 text-purple-200">센서 없음</td>
                  <td className="px-4 py-3 text-purple-200">sensor_id 확인</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-red-300 font-mono">429</td>
                  <td className="px-4 py-3 text-purple-200">요청 한도 초과</td>
                  <td className="px-4 py-3 text-purple-200">잠시 후 재시도</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-red-300 font-mono">500</td>
                  <td className="px-4 py-3 text-purple-200">서버 오류</td>
                  <td className="px-4 py-3 text-purple-200">관리자 문의</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t border-purple-700">
          <Link href="/sensor-guide/firmware" className="text-purple-300 hover:text-white">← 이전: 펌웨어 설치</Link>
          <Link href="/sensor-guide/troubleshooting" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg">다음: 문제 해결 →</Link>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-purple-700 mt-16">
        <div className="max-w-6xl mx-auto text-center text-purple-300">
          <p>© 2025 FarmSense</p>
        </div>
      </footer>
    </div>
  );
}
