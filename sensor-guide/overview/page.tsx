'use client';

import Link from 'next/link';

export default function OverviewPage() {
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
          <span className="text-white">개요</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">📋 FarmSense 센서 시스템 개요</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">FarmSense란?</h2>
          <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
            <p className="text-purple-200 leading-relaxed">
              FarmSense는 포도 농가를 위한 저비용 스마트팜 솔루션입니다. 
              기존 KT/SK 스마트팜 대비 <span className="text-green-300 font-semibold">1/5~1/10 비용</span>으로 
              센서 시스템을 구축할 수 있습니다.
            </p>
            <p className="text-purple-200 leading-relaxed mt-4">
              LoRa 무선 통신과 태양광 전원을 사용하여 <span className="text-green-300 font-semibold">전기선/통신선 없이</span> 
              완전 무선으로 동작합니다. 농가에서 직접 조립하고 설치할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">시스템 구성</h2>
          <div className="bg-purple-900/50 rounded-xl p-6 border border-purple-600">
            <pre className="text-purple-200 text-sm overflow-x-auto">
{`
┌─────────────────────────────────────────────────────────────────────┐
│                      FarmSense 시스템 구조                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   [과수원]                                                          │
│                                                                     │
│   🌡️ 센서 노드 1 ──┐                                               │
│   🌡️ 센서 노드 2 ──┼── LoRa 무선 (1~5km) ──→ 📡 게이트웨이         │
│   🌡️ 센서 노드 3 ──┘        (무료)              │                  │
│                                                  │                  │
│   ☀️ 태양광 전원                                 │                  │
│   🔋 배터리 백업                                 │                  │
│                                            WiFi/LTE                │
│                                                  │                  │
│                                                  ↓                  │
│                                         ☁️ FarmSense 서버           │
│                                                  │                  │
│                                                  ↓                  │
│                                           📱 농가 앱               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
`}
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">예상 비용</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-xl font-bold text-white mb-4">기본형</h3>
              <p className="text-4xl font-bold text-green-300 mb-4">37만원</p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>✅ 센서 노드 2개</li>
                <li>✅ 게이트웨이 1개</li>
                <li>✅ 태양광 전원</li>
                <li>✅ WiFi 연결</li>
              </ul>
              <p className="text-purple-300 text-sm mt-4">월 비용: 0원</p>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-green-500 border-2">
              <h3 className="text-xl font-bold text-white mb-4">표준형 ⭐</h3>
              <p className="text-4xl font-bold text-green-300 mb-4">60만원</p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>✅ 센서 노드 4개</li>
                <li>✅ 게이트웨이 1개</li>
                <li>✅ 태양광 전원</li>
                <li>✅ LTE 모뎀 포함</li>
              </ul>
              <p className="text-purple-300 text-sm mt-4">월 비용: 5,000원 (LTE)</p>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-xl font-bold text-white mb-4">프리미엄</h3>
              <p className="text-4xl font-bold text-green-300 mb-4">100만원</p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>✅ 센서 노드 8개</li>
                <li>✅ CO2/광량 센서</li>
                <li>✅ 게이트웨이 1개</li>
                <li>✅ 전문 설치 포함</li>
              </ul>
              <p className="text-purple-300 text-sm mt-4">월 비용: 5,000원 (LTE)</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-900/30 rounded-lg border border-yellow-600">
            <p className="text-yellow-200 text-sm">
              💡 <strong>비교:</strong> KT/SK 스마트팜은 300~500만원 + 월 3~5만원입니다. 
              FarmSense는 최대 <strong>90% 비용 절감</strong>이 가능합니다.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">난이도</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 text-center">
              <div className="text-4xl mb-4">🟢</div>
              <h3 className="text-lg font-bold text-white mb-2">하드웨어 조립</h3>
              <p className="text-green-300 font-semibold">쉬움</p>
              <p className="text-purple-300 text-sm mt-2">납땜 불필요, 커넥터 연결만</p>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 text-center">
              <div className="text-4xl mb-4">🟡</div>
              <h3 className="text-lg font-bold text-white mb-2">펌웨어 설치</h3>
              <p className="text-yellow-300 font-semibold">보통</p>
              <p className="text-purple-300 text-sm mt-2">Arduino IDE 사용, 복사-붙여넣기</p>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600 text-center">
              <div className="text-4xl mb-4">🟢</div>
              <h3 className="text-lg font-bold text-white mb-2">현장 설치</h3>
              <p className="text-green-300 font-semibold">쉬움</p>
              <p className="text-purple-300 text-sm mt-2">기둥에 고정, 전원 연결</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">측정 항목</h2>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">항목</th>
                  <th className="px-4 py-3 text-center text-white">센서</th>
                  <th className="px-4 py-3 text-center text-white">정확도</th>
                  <th className="px-4 py-3 text-left text-white">용도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr>
                  <td className="px-4 py-3 text-white">🌡️ 온도</td>
                  <td className="px-4 py-3 text-center text-purple-200">SHT31-D</td>
                  <td className="px-4 py-3 text-center text-green-300">±0.2°C</td>
                  <td className="px-4 py-3 text-purple-200">착색 관리, 동해 예방</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">💧 습도</td>
                  <td className="px-4 py-3 text-center text-purple-200">SHT31-D</td>
                  <td className="px-4 py-3 text-center text-green-300">±2%</td>
                  <td className="px-4 py-3 text-purple-200">병해 예방, 환기 관리</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">🌱 토양수분</td>
                  <td className="px-4 py-3 text-center text-purple-200">정전식</td>
                  <td className="px-4 py-3 text-center text-green-300">상대값</td>
                  <td className="px-4 py-3 text-purple-200">관수 시점 결정</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">💨 CO2 (선택)</td>
                  <td className="px-4 py-3 text-center text-purple-200">MH-Z19B</td>
                  <td className="px-4 py-3 text-center text-green-300">±50ppm</td>
                  <td className="px-4 py-3 text-purple-200">시설 환기 관리</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">☀️ 일조량 (선택)</td>
                  <td className="px-4 py-3 text-center text-purple-200">BH1750</td>
                  <td className="px-4 py-3 text-center text-green-300">±20%</td>
                  <td className="px-4 py-3 text-purple-200">차광막 관리</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">주요 특징</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-bold text-white mb-3">🔋 완전 무선</h3>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• 태양광 + 배터리로 전원 독립</li>
                <li>• LoRa 무선 통신 (1~5km)</li>
                <li>• 배선 공사 불필요</li>
              </ul>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-bold text-white mb-3">💰 저비용</h3>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• KT/SK 대비 1/5~1/10 가격</li>
                <li>• 월 통신비 0원 (WiFi) 또는 5천원 (LTE)</li>
                <li>• 정부 보조금 활용 가능</li>
              </ul>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-bold text-white mb-3">🛠️ DIY 가능</h3>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• 농가에서 직접 조립/설치</li>
                <li>• 상세한 가이드 제공</li>
                <li>• 오픈소스 펌웨어</li>
              </ul>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-bold text-white mb-3">🤖 AI 연동</h3>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• FarmSense 앱과 자동 연동</li>
                <li>• AI 병해 예측/방제 추천</li>
                <li>• 실시간 알림</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t border-purple-700">
          <Link href="/sensor-guide" className="text-purple-300 hover:text-white">← 센서 가이드 메인</Link>
          <Link href="/sensor-guide/sensors" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg">다음: 센서 목록 →</Link>
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
