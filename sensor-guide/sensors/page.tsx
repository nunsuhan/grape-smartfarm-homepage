'use client';

import Link from 'next/link';

export default function SensorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      {/* 헤더 */}
      <header className="bg-purple-900/50 backdrop-blur-sm border-b border-purple-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            🍇 FarmSense
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-purple-200 hover:text-white">홈</Link>
            <Link href="/sensor-guide" className="text-white font-semibold">센서 가이드</Link>
          </nav>
        </div>
      </header>

      {/* 브레드크럼 */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="text-purple-300 text-sm">
          <Link href="/sensor-guide" className="hover:text-white">센서 가이드</Link>
          <span className="mx-2">/</span>
          <span className="text-white">지원 센서 목록</span>
        </nav>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">🌡️ 지원 센서 목록</h1>

        {/* 온습도 센서 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">🌡️</span> 온습도 센서
          </h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">정확도</th>
                  <th className="px-4 py-3 text-center text-white">가격</th>
                  <th className="px-4 py-3 text-center text-white">추천</th>
                  <th className="px-4 py-3 text-left text-white">구매처</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr className="bg-green-900/20">
                  <td className="px-4 py-3 text-white font-semibold">SHT31-D (방수형)</td>
                  <td className="px-4 py-3 text-center text-purple-200">±0.2°C, ±2%</td>
                  <td className="px-4 py-3 text-center text-green-300">25,000원</td>
                  <td className="px-4 py-3 text-center text-yellow-300">⭐ 최고 추천</td>
                  <td className="px-4 py-3 text-purple-200">디바이스마트</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">SHT30-D</td>
                  <td className="px-4 py-3 text-center text-purple-200">±0.3°C, ±3%</td>
                  <td className="px-4 py-3 text-center text-green-300">15,000원</td>
                  <td className="px-4 py-3 text-center text-blue-300">가성비</td>
                  <td className="px-4 py-3 text-purple-200">디바이스마트</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">DHT22</td>
                  <td className="px-4 py-3 text-center text-purple-200">±0.5°C, ±2%</td>
                  <td className="px-4 py-3 text-center text-green-300">8,000원</td>
                  <td className="px-4 py-3 text-center text-gray-400">저가형</td>
                  <td className="px-4 py-3 text-purple-200">엘레파츠</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600">
            <p className="text-yellow-200 text-sm">
              💡 <strong>추천:</strong> SHT31-D 방수형을 권장합니다. DHT22보다 정확하고 장기 안정성이 우수합니다.
              농업 환경에서 방수는 필수입니다.
            </p>
          </div>
        </section>

        {/* 토양수분 센서 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">💧</span> 토양수분 센서
          </h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">방식</th>
                  <th className="px-4 py-3 text-center text-white">가격</th>
                  <th className="px-4 py-3 text-center text-white">내구성</th>
                  <th className="px-4 py-3 text-left text-white">구매처</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr className="bg-green-900/20">
                  <td className="px-4 py-3 text-white font-semibold">정전식 토양수분 센서</td>
                  <td className="px-4 py-3 text-center text-purple-200">Capacitive</td>
                  <td className="px-4 py-3 text-center text-green-300">8,000원</td>
                  <td className="px-4 py-3 text-center text-green-300">높음 (부식 방지)</td>
                  <td className="px-4 py-3 text-purple-200">브이씨텍</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">저항식 토양수분 센서</td>
                  <td className="px-4 py-3 text-center text-purple-200">Resistive</td>
                  <td className="px-4 py-3 text-center text-green-300">2,000원</td>
                  <td className="px-4 py-3 text-center text-red-300">낮음 (부식 빠름)</td>
                  <td className="px-4 py-3 text-purple-200">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-red-900/30 rounded-lg border border-red-600">
            <p className="text-red-200 text-sm">
              ⚠️ <strong>주의:</strong> 저항식 센서는 절대 사용하지 마세요! 토양에서 빠르게 부식되어 몇 주 만에 고장납니다.
              반드시 정전식(Capacitive) 센서를 선택하세요.
            </p>
          </div>
        </section>

        {/* CO2 센서 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">💨</span> CO2 센서
          </h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">방식</th>
                  <th className="px-4 py-3 text-center text-white">정확도</th>
                  <th className="px-4 py-3 text-center text-white">가격</th>
                  <th className="px-4 py-3 text-left text-white">구매처</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr className="bg-green-900/20">
                  <td className="px-4 py-3 text-white font-semibold">MH-Z19B</td>
                  <td className="px-4 py-3 text-center text-purple-200">NDIR</td>
                  <td className="px-4 py-3 text-center text-purple-200">±50ppm + 5%</td>
                  <td className="px-4 py-3 text-center text-green-300">31,000원</td>
                  <td className="px-4 py-3 text-purple-200">모터베이</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">CCS811</td>
                  <td className="px-4 py-3 text-center text-purple-200">MOX (추정)</td>
                  <td className="px-4 py-3 text-center text-red-300">낮음</td>
                  <td className="px-4 py-3 text-center text-green-300">15,000원</td>
                  <td className="px-4 py-3 text-purple-200">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600">
            <p className="text-yellow-200 text-sm">
              💡 <strong>추천:</strong> MH-Z19B는 NDIR 방식으로 실제 CO2를 측정합니다. 
              CCS811은 VOC를 측정해서 CO2를 추정하는 방식이라 정확도가 낮습니다.
            </p>
          </div>
        </section>

        {/* 일조량 센서 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">☀️</span> 일조량 센서
          </h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">측정 범위</th>
                  <th className="px-4 py-3 text-center text-white">정확도</th>
                  <th className="px-4 py-3 text-center text-white">가격</th>
                  <th className="px-4 py-3 text-left text-white">구매처</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr className="bg-green-900/20">
                  <td className="px-4 py-3 text-white font-semibold">BH1750</td>
                  <td className="px-4 py-3 text-center text-purple-200">1~65,535 lux</td>
                  <td className="px-4 py-3 text-center text-purple-200">±20%</td>
                  <td className="px-4 py-3 text-center text-green-300">7,000원</td>
                  <td className="px-4 py-3 text-purple-200">디바이스마트</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">TSL2561</td>
                  <td className="px-4 py-3 text-center text-purple-200">가시광 + 적외선</td>
                  <td className="px-4 py-3 text-center text-purple-200">높음</td>
                  <td className="px-4 py-3 text-center text-green-300">12,000원</td>
                  <td className="px-4 py-3 text-purple-200">디바이스마트</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 통신 모듈 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-3xl">📡</span> 통신 모듈
          </h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">통신 거리</th>
                  <th className="px-4 py-3 text-center text-white">전력</th>
                  <th className="px-4 py-3 text-center text-white">가격</th>
                  <th className="px-4 py-3 text-left text-white">용도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr className="bg-green-900/20">
                  <td className="px-4 py-3 text-white font-semibold">Heltec LoRa32 V3</td>
                  <td className="px-4 py-3 text-center text-green-300">1~5km</td>
                  <td className="px-4 py-3 text-center text-green-300">저전력</td>
                  <td className="px-4 py-3 text-center text-green-300">25,000원</td>
                  <td className="px-4 py-3 text-purple-200">센서 노드 (ESP32+LoRa)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">SX1262 LoRa HAT</td>
                  <td className="px-4 py-3 text-center text-green-300">1~5km</td>
                  <td className="px-4 py-3 text-center text-purple-200">중간</td>
                  <td className="px-4 py-3 text-center text-green-300">35,000원</td>
                  <td className="px-4 py-3 text-purple-200">게이트웨이 (라즈베리파이용)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">SIM7600 LTE</td>
                  <td className="px-4 py-3 text-center text-green-300">전국</td>
                  <td className="px-4 py-3 text-center text-red-300">높음</td>
                  <td className="px-4 py-3 text-center text-yellow-300">50,000원</td>
                  <td className="px-4 py-3 text-purple-200">게이트웨이 (WiFi 없을 때)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-blue-900/30 rounded-lg border border-blue-600">
            <p className="text-blue-200 text-sm">
              📡 <strong>LoRa 통신:</strong> 센서 ↔ 게이트웨이 구간은 LoRa(무료)를 사용합니다.
              게이트웨이 ↔ 서버 구간은 농가 WiFi(무료) 또는 LTE(월 5천원)를 사용합니다.
            </p>
          </div>
        </section>

        {/* 구매처 링크 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🛒 추천 구매처</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="https://www.devicemart.co.kr" target="_blank" rel="noopener noreferrer" 
               className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 hover:border-purple-400 transition-all">
              <h3 className="text-white font-semibold mb-2">디바이스마트</h3>
              <p className="text-purple-300 text-sm">국내 최대 전자부품 쇼핑몰</p>
              <p className="text-green-300 text-sm mt-2">배송: 1~2일</p>
            </a>
            <a href="https://vctec.co.kr" target="_blank" rel="noopener noreferrer"
               className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 hover:border-purple-400 transition-all">
              <h3 className="text-white font-semibold mb-2">브이씨텍</h3>
              <p className="text-purple-300 text-sm">토양센서 전문</p>
              <p className="text-green-300 text-sm mt-2">배송: 1~2일</p>
            </a>
            <a href="https://www.motorbay.co.kr" target="_blank" rel="noopener noreferrer"
               className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 hover:border-purple-400 transition-all">
              <h3 className="text-white font-semibold mb-2">모터베이</h3>
              <p className="text-purple-300 text-sm">MH-Z19B CO2 센서</p>
              <p className="text-green-300 text-sm mt-2">배송: 1~2일</p>
            </a>
            <a href="https://ko.aliexpress.com" target="_blank" rel="noopener noreferrer"
               className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 hover:border-purple-400 transition-all">
              <h3 className="text-white font-semibold mb-2">알리익스프레스</h3>
              <p className="text-purple-300 text-sm">저렴한 대량 구매</p>
              <p className="text-yellow-300 text-sm mt-2">배송: 2~4주</p>
            </a>
          </div>
        </section>

        {/* 다음 단계 */}
        <div className="flex justify-between items-center pt-8 border-t border-purple-700">
          <Link href="/sensor-guide/overview" className="text-purple-300 hover:text-white flex items-center gap-2">
            ← 이전: 개요
          </Link>
          <Link href="/sensor-guide/hardware" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            다음: 하드웨어 구성 →
          </Link>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="py-8 px-4 border-t border-purple-700 mt-16">
        <div className="max-w-6xl mx-auto text-center text-purple-300">
          <p>© 2025 FarmSense. 포도 농가를 위한 AI 스마트팜 솔루션</p>
        </div>
      </footer>
    </div>
  );
}
