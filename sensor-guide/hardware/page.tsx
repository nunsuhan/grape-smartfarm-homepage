'use client';

import Link from 'next/link';

export default function HardwarePage() {
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
          <span className="text-white">하드웨어 구성</span>
        </nav>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">🔧 하드웨어 구성</h1>

        {/* 센서 노드 BOM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📦 센서 노드 부품 목록 (BOM)</h2>
          <p className="text-purple-200 mb-4">
            태양광 전원 + LoRa 무선 통신이 가능한 완전 무선 센서 노드입니다.
          </p>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">품목</th>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">수량</th>
                  <th className="px-4 py-3 text-right text-white">단가</th>
                  <th className="px-4 py-3 text-right text-white">소계</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr>
                  <td className="px-4 py-3 text-white">MCU + LoRa</td>
                  <td className="px-4 py-3 text-purple-200">Heltec LoRa32 V3</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">25,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">25,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">온습도 센서</td>
                  <td className="px-4 py-3 text-purple-200">SHT31-D 방수형</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">25,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">25,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">토양수분 센서</td>
                  <td className="px-4 py-3 text-purple-200">정전식</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">8,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">8,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">태양광 패널</td>
                  <td className="px-4 py-3 text-purple-200">6V 3W</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">8,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">8,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">충전 컨트롤러</td>
                  <td className="px-4 py-3 text-purple-200">TP4056 + 보호회로</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">2,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">2,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">리튬 배터리</td>
                  <td className="px-4 py-3 text-purple-200">18650 3.7V 3000mAh</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">5,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">5,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">방수 케이스</td>
                  <td className="px-4 py-3 text-purple-200">IP65 100×68×50mm</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">8,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">8,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">LoRa 안테나</td>
                  <td className="px-4 py-3 text-purple-200">868/915MHz 스프링</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">2,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">2,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">케이블/커넥터</td>
                  <td className="px-4 py-3 text-purple-200">점퍼선, 커넥터 세트</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">3,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">3,000원</td>
                </tr>
              </tbody>
              <tfoot className="bg-purple-700">
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-right text-white font-bold">센서 노드 총합</td>
                  <td className="px-4 py-3 text-right text-green-300 font-bold">86,000원</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* 게이트웨이 BOM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📡 게이트웨이 부품 목록</h2>
          <p className="text-purple-200 mb-4">
            센서 노드의 데이터를 수신하여 서버로 전송하는 게이트웨이입니다. 농가당 1개 필요합니다.
          </p>
          <div className="bg-purple-800/50 rounded-xl overflow-hidden border border-purple-600">
            <table className="w-full">
              <thead className="bg-purple-700">
                <tr>
                  <th className="px-4 py-3 text-left text-white">품목</th>
                  <th className="px-4 py-3 text-left text-white">모델</th>
                  <th className="px-4 py-3 text-center text-white">수량</th>
                  <th className="px-4 py-3 text-right text-white">단가</th>
                  <th className="px-4 py-3 text-right text-white">소계</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-700">
                <tr>
                  <td className="px-4 py-3 text-white">메인보드</td>
                  <td className="px-4 py-3 text-purple-200">라즈베리파이 4B 2GB</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">70,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">70,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">LoRa 수신 모듈</td>
                  <td className="px-4 py-3 text-purple-200">SX1262 HAT</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">35,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">35,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">LTE 모뎀 (선택)</td>
                  <td className="px-4 py-3 text-purple-200">SIM7600 4G</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">50,000원</td>
                  <td className="px-4 py-3 text-right text-yellow-300">50,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">안테나</td>
                  <td className="px-4 py-3 text-purple-200">LoRa + LTE 외장</td>
                  <td className="px-4 py-3 text-center text-purple-200">2</td>
                  <td className="px-4 py-3 text-right text-purple-200">10,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">20,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">태양광 패널</td>
                  <td className="px-4 py-3 text-purple-200">12V 20W</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">25,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">25,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">배터리</td>
                  <td className="px-4 py-3 text-purple-200">12V 7Ah 납축전지</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">20,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">20,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">충전 컨트롤러</td>
                  <td className="px-4 py-3 text-purple-200">PWM 12V</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">8,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">8,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">방수 케이스</td>
                  <td className="px-4 py-3 text-purple-200">IP65 200×150×100mm</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">20,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">20,000원</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-white">케이블/설치자재</td>
                  <td className="px-4 py-3 text-purple-200">-</td>
                  <td className="px-4 py-3 text-center text-purple-200">1</td>
                  <td className="px-4 py-3 text-right text-purple-200">10,000원</td>
                  <td className="px-4 py-3 text-right text-green-300">10,000원</td>
                </tr>
              </tbody>
              <tfoot className="bg-purple-700">
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-right text-white font-bold">게이트웨이 총합 (LTE 포함)</td>
                  <td className="px-4 py-3 text-right text-green-300 font-bold">258,000원</td>
                </tr>
                <tr>
                  <td colSpan={4} className="px-4 py-3 text-right text-white">WiFi만 사용 시</td>
                  <td className="px-4 py-3 text-right text-green-300">208,000원</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* 회로도 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">⚡ 회로 연결도</h2>
          
          <h3 className="text-xl font-semibold text-white mb-4">센서 노드 연결</h3>
          <div className="bg-purple-900/50 rounded-xl p-6 border border-purple-600 mb-6">
            <pre className="text-purple-200 text-sm overflow-x-auto">
{`
┌─────────────────────────────────────────────────────────┐
│                    센서 노드 연결도                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   [태양광 6V 3W]                                        │
│         │                                               │
│         ↓                                               │
│   [TP4056 충전모듈]──────[18650 배터리]                  │
│         │                                               │
│         ↓ 3.3V                                          │
│   ┌─────────────────────────────┐                       │
│   │     Heltec LoRa32 V3        │                       │
│   │                             │                       │
│   │  3.3V ──→ SHT31 VCC        │     [SHT31-D 온습도]   │
│   │  GND  ──→ SHT31 GND        │           │           │
│   │  GPIO21(SDA) ──→ SHT31 SDA │           │           │
│   │  GPIO22(SCL) ──→ SHT31 SCL │           │           │
│   │                             │                       │
│   │  3.3V ──→ 토양센서 VCC     │     [토양수분 센서]    │
│   │  GND  ──→ 토양센서 GND     │           │           │
│   │  GPIO36(ADC) ──→ 토양 AOUT │           │           │
│   │                             │                       │
│   │  [LoRa 내장] ──→ 안테나     │     [LoRa 안테나]     │
│   │                             │                       │
│   └─────────────────────────────┘                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">게이트웨이 연결</h3>
          <div className="bg-purple-900/50 rounded-xl p-6 border border-purple-600">
            <pre className="text-purple-200 text-sm overflow-x-auto">
{`
┌─────────────────────────────────────────────────────────┐
│                    게이트웨이 연결도                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   [태양광 12V 20W]                                      │
│         │                                               │
│         ↓                                               │
│   [PWM 충전 컨트롤러]──────[12V 배터리]                  │
│         │                                               │
│         ↓ 5V (USB 출력)                                 │
│   ┌─────────────────────────────┐                       │
│   │     라즈베리파이 4B         │                       │
│   │                             │                       │
│   │  GPIO ──→ SX1262 LoRa HAT  │     [LoRa 수신]       │
│   │           │                 │         │             │
│   │           └──→ 안테나       │     [LoRa 안테나]     │
│   │                             │                       │
│   │  USB ──→ SIM7600 LTE 모뎀  │     [LTE 모뎀]        │
│   │          │                  │     (선택사항)        │
│   │          └──→ LTE 안테나   │                       │
│   │                             │                       │
│   │  WiFi ──→ 농가 공유기      │     [인터넷 연결]     │
│   │                             │                       │
│   └─────────────────────────────┘                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
`}
            </pre>
          </div>
        </section>

        {/* 전력 계산 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔋 전력 계산</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-xl font-semibold text-white mb-4">센서 노드</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-purple-700">
                  <tr>
                    <td className="py-2 text-purple-200">ESP32 딥슬립</td>
                    <td className="py-2 text-right text-green-300">10μA</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-200">ESP32 활성</td>
                    <td className="py-2 text-right text-yellow-300">80mA</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-200">SHT31 측정</td>
                    <td className="py-2 text-right text-yellow-300">1.5mA</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-200">LoRa 전송</td>
                    <td className="py-2 text-right text-yellow-300">120mA (0.5초)</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 p-3 bg-green-900/30 rounded-lg">
                <p className="text-green-200 text-sm">
                  <strong>결과:</strong> 10분 주기 동작 시<br/>
                  일일 소비: ~50mAh<br/>
                  배터리 3000mAh → <strong>60일</strong> (태양광 없이)<br/>
                  태양광 3W → <strong>무한 동작</strong>
                </p>
              </div>
            </div>

            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-xl font-semibold text-white mb-4">게이트웨이</h3>
              <table className="w-full text-sm">
                <tbody className="divide-y divide-purple-700">
                  <tr>
                    <td className="py-2 text-purple-200">라즈베리파이 4B</td>
                    <td className="py-2 text-right text-yellow-300">3~6W</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-200">LoRa HAT</td>
                    <td className="py-2 text-right text-green-300">0.5W</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-200">LTE 모뎀 (전송 시)</td>
                    <td className="py-2 text-right text-yellow-300">2W</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-purple-200">평균 총합</td>
                    <td className="py-2 text-right text-yellow-300">~5W</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 p-3 bg-yellow-900/30 rounded-lg">
                <p className="text-yellow-200 text-sm">
                  <strong>결과:</strong><br/>
                  일일 소비: 5W × 24h = 120Wh<br/>
                  태양광 20W: ~80Wh/일 (4시간 기준)<br/>
                  배터리 7Ah × 12V = 84Wh<br/>
                  <strong>흐린 날 1~2일 버팀</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 설치 팁 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💡 설치 팁</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-3">게이트웨이 위치</h3>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>✅ 농가 건물 지붕 또는 높은 곳</li>
                <li>✅ 태양광 패널이 남향</li>
                <li>✅ LoRa 안테나가 과수원 방향</li>
                <li>✅ WiFi 신호 범위 내 (WiFi 사용 시)</li>
              </ul>
            </div>
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-3">센서 노드 위치</h3>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>✅ 포도나무 사이 기둥에 설치</li>
                <li>✅ 태양광 패널이 위로 향함</li>
                <li>✅ 토양센서는 뿌리 근처 땅에 삽입</li>
                <li>✅ 직사광선 피해 온습도 센서 배치</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <div className="flex justify-between items-center pt-8 border-t border-purple-700">
          <Link href="/sensor-guide/sensors" className="text-purple-300 hover:text-white flex items-center gap-2">
            ← 이전: 센서 목록
          </Link>
          <Link href="/sensor-guide/firmware" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            다음: 펌웨어 설치 →
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
