'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

type Tab = 'basic' | 'optional';

const SEASON_COLORS: Record<string, string> = {
  '11~2월': 'text-blue-400',
  '3~4월': 'text-green-400',
  '5~6월': 'text-yellow-400',
  '6~7월': 'text-orange-400',
  '8~9월': 'text-red-400',
  '10~11월': 'text-purple-400',
};

function ServiceTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([period, service], i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white/3' : 'bg-white/5'}>
              <td className={`px-4 py-3 font-bold w-20 flex-shrink-0 border-r border-white/5 ${SEASON_COLORS[period] ?? 'text-neutral-cream/70'}`}>
                {period}
              </td>
              <td className="px-4 py-3 text-neutral-cream/75 leading-relaxed whitespace-pre-line">{service}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SensorCard({ sensor }: { sensor: {
  icon: string; name: string; unit: string;
  role: string; specs: string[]; services: [string, string][]; tags?: string[];
  note?: string; recommended?: string;
}}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="text-3xl flex-shrink-0">{sensor.icon}</span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="font-bold text-white text-lg">{sensor.name}</h3>
              {sensor.tags?.map(t => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">{t}</span>
              ))}
            </div>
            <p className="text-sm text-neutral-cream/60">{sensor.role}</p>
          </div>
        </div>
        <span className="text-neutral-cream/40 text-xl mt-1">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="border-t border-white/10 p-6 space-y-5">
          <div>
            <h4 className="text-sm font-bold text-neutral-cream/60 mb-2 uppercase tracking-wide">사양</h4>
            <ul className="space-y-1">
              {sensor.specs.map((s, i) => (
                <li key={i} className="text-sm text-neutral-cream/70 flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">·</span>{s}
                </li>
              ))}
            </ul>
          </div>

          {sensor.note && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-sm text-amber-200">
              ⚠️ {sensor.note}
            </div>
          )}

          <div>
            <h4 className="text-sm font-bold text-green-400 mb-1 uppercase tracking-wide">이 센서로 받는 알림</h4>
            <p className="text-xs text-neutral-cream/50 mb-2">센서를 설치하면 시기에 맞게 자동으로 알림이 옵니다</p>
            <ServiceTable rows={sensor.services} />
          </div>

          {sensor.recommended && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 text-sm text-blue-200">
              💡 추천 대상: {sensor.recommended}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const GATEWAY = {
  icon: '📡', name: 'LoRa 게이트웨이 (SenseCAP M2)', unit: '대',
  role: '밭 센서들의 LoRa 무선 신호를 받아서 FarmSense 서버에 전송하는 중계 장비',
  specs: [
    '수신 반경: 2~10km (센서 수십 개까지 커버)',
    '8채널 동시 수신',
    '유선 인터넷 또는 LTE 라우터 연결',
    '전원: AC 어댑터 (콘센트 필요)',
    '한 번 설치하면 하우스 추가해도 게이트웨이는 그대로',
  ],
  services: [['연중', '밭 전체 센서 데이터 실시간 수신\n인터넷 단절 감지 및 경보']],
  note: '집 또는 밭 근처 전기가 있는 곳에 설치',
};

const LTE_ROUTER = {
  icon: '🌐', name: 'LTE 라우터 + IoT 유심', unit: '대',
  role: '밭에 인터넷이 없어도 LTE 통신망으로 게이트웨이를 서버에 연결',
  specs: [
    'LTE Cat.4 (다운 150Mbps)',
    'IoT 전용 유심 (KT/SKT)',
    '월 데이터 사용량: 0.5MB 이하 (센서 데이터는 매우 작음)',
    '집에 유선 인터넷이 있으면 LTE 라우터 불필요',
    '월 유지비: IoT 전용 유심 요금 (별도 안내)',
  ],
  services: [['연중', '인터넷 없는 밭에서도 데이터 전송\n월 0.5MB 이하 — 유심 요금 최소']],
};

const HUB = {
  icon: '🔋', name: '센서 허브 — 데이터로거 (SenseCAP S2100)', unit: '개',
  role: '센서 여러 개를 연결하는 본체. 측정 데이터를 LoRa 무선으로 게이트웨이에 전송',
  specs: [
    'RS485 / 아날로그(4~20mA, 0~10V) / GPIO 입력',
    'LoRa 무선 내장 (전선 없이 게이트웨이까지 전송)',
    '방수 IP66 (비·눈·먼지·자외선 OK)',
    '배터리 19Ah 내장 (최대 10년, 교체 가능)',
    '외부 12V DC 연결 시 배터리는 백업으로 전환',
    '블루투스 내장 → 스마트폰 앱에서 1분 셋업',
    '사용 온도: -40°C ~ 85°C',
    '나중에 센서를 추가할 때 프로브만 꽂으면 됨',
  ],
  services: [['연중', '연결된 모든 센서 데이터 1시간 간격 전송\n배터리 잔량 모니터링\n통신 이상 시 즉시 경보']],
};

const TEMP_HUM = {
  icon: '🌡️', name: '대기 온·습도 센서', unit: '개',
  role: '하우스/밭 안의 온도와 습도를 실시간으로 측정',
  specs: ['온도: -40°C ~ 85°C (정확도 ±0.2°C)', '습도: 0 ~ 100% RH (정확도 ±1.8%)'],
  services: [
    ['11~2월', '서리·한파 경보 (영하 2℃ 이하 즉시 알림)\n동해 위험 추적'],
    ['3~4월', '냉해 경보 (발아 후 6℃ 이하 3시간 노출)\n비가림 환기 타이밍 (30℃ 넘기 전에 알림)\n이슬점 계산 → 결로 위험 경보'],
    ['5~6월', '꽃떨이 방지 (고온·저습 조건 감지)\n노균병·회색곰팡이 위험도 계산 (습도 85% 이상 지속 시 "방제하세요")'],
    ['6~7월', '고온 스트레스 경보 (35℃ 이상 "차광·환기")\n장마철 탄저병·노균병 집중 경보\n비 그친 틈새 환기 ("오후 2~4시 지금 열기")'],
    ['8~9월', '일교차 모니터링 (착색·당도 향상 추적)\n후기 병해 경보'],
    ['10~11월', '저온 요구도 추적 (7.2℃ 이하 누적시간)\n내년 발아 예측'],
  ] as [string, string][],
};

const SOIL_MOISTURE = {
  icon: '💧', name: '흙 속 물기 센서 × 2개', unit: '세트',
  role: '흙이 마른지 축축한지 2개 깊이에서 측정 — 물 줄 타이밍과 과관수 감지',
  specs: [
    '흙 속 물기(체적 수분): 0 ~ 100%',
    '흙 속 온도: -40 ~ 80°C',
    '1번 센서: 깊이 20~30cm (뿌리가 물 먹는 곳 → 마르면 "물 줄 때!")',
    '2번 센서: 깊이 50~60cm (여기까지 젖으면 "물 너무 줬다!")',
  ],
  services: [
    ['11~2월', '겨울 물주기 필요 여부 알림\n해동기 흙 물기 부족 감지'],
    ['3~4월', '발아기 물주기 관리 (균일 발아 유도)\n과습 주의 알림'],
    ['5~6월', '지베렐린 처리 전 흙 물기 가이드\n과관수 방지 ("수세 강할 때 물 줄이세요")\n물주기 추천 (리터 단위)'],
    ['6~7월', '장마 중 과습 경보 ("배수 확인하세요")\n장마 후 물주기 재개 타이밍'],
    ['8~9월', '열과 방지 ("3일 간격 소량 관수")\n당도 올리기 ("수확 2주 전 물주기 멈추세요")'],
    ['10~11월', '밑거름 후 물주기 가이드\n흙 회복 관리'],
  ] as [string, string][],
};

const OPTIONAL_SENSORS = [
  {
    icon: '☀️', name: '일사량 센서 (SenseCAP S2102)', unit: '개',
    role: '햇빛의 세기를 측정 — 관수 정확도 30% 향상, 광합성 효율 진단',
    tags: ['모든 농가 추천'],
    specs: ['빛의 세기(조도): 0 ~ 188,000 Lux (정확도 ±5%)'],
    services: [
      ['3~9월', '관수 정확도 30% 향상 — 증발산량(ET₀) 정확 계산\n"오늘 해가 강하니 물을 20% 더 줘야 합니다"'],
      ['5~8월', '광합성 효율 진단 — 차광 해제/유지 타이밍\nVPD(건조도) 계산 → 분무 살수 권장 알림'],
      ['8~9월', '착색 예측 정밀도 향상 — "착색 시작 예상: 8/15"'],
      ['연중', '일조시간 누적 기록 — 연간 리포트 자동 계산'],
    ] as [string, string][],
    recommended: '모든 농가. 기본 다음으로 효과 큰 센서',
  },
  {
    icon: '💨', name: 'CO₂ + 온·습도 센서 (SenseCAP S2103)', unit: '개',
    role: '하우스 안 이산화탄소 농도 측정 — 환기 타이밍 고도화',
    tags: ['하우스 전용'],
    specs: [
      'CO₂: 400 ~ 10,000 ppm (정확도 ±30ppm + 3%)',
      '온도: -40 ~ 85°C / 습도: 0 ~ 100% RH',
    ],
    services: [
      ['연중', '환기 타이밍 고도화 — CO₂ 농도로 환기 효율 정확 측정\n광합성 한계 진단 — CO₂ < 350ppm이면 광합성 느려짐\n하우스 공기 순환 상태 모니터링'],
    ] as [string, string][],
    note: '비가림은 옆이 뚫려서 CO₂ 측정 의미 없음 — 하우스 전용',
    recommended: '하우스(시설) 재배 농가',
  },
  {
    icon: '🧂', name: '흙 물기 + 온도 + 소금기(EC) 센서 (SenseCAP S2105)', unit: '개',
    role: '흙 속 물기·온도·소금기를 동시 측정 — 비료 과다 실시간 감지',
    tags: ['하우스 필수급'],
    specs: [
      '흙 속 물기: 0 ~ 100%',
      '흙 속 온도: -40 ~ 80°C',
      '흙 소금기(EC): 0 ~ 23 dS/m',
      '기본 흙 물기 센서 2개를 이걸로 교체 가능',
    ],
    services: [
      ['연중', '비료 과다 실시간 감지 — "EC 3.2, 비료 과다! 물로 씻어내세요"\n염류 집적 사전 차단\n물주기+비료 자동 추천 (물만 vs 물+비료 구분)\n수확 전 당도 관리 — EC 조절로 당도 극대화'],
      ['연간', '토양 소금기 연간 변화 리포트'],
    ] as [string, string][],
    recommended: '하우스 농가(필수급), 비가림도 비료 많이 쓰면 권장',
  },
  {
    icon: '🧪', name: '흙 산도(pH) 센서 (SenseCAP S2106)', unit: '개',
    role: '흙의 산도(pH)를 측정 — 비료 흡수 효율 진단, 석회 시비 타이밍 결정',
    specs: ['흙 pH: 0 ~ 14 (정확도 ±0.3)', '포도 적정 pH: 5.5 ~ 6.5'],
    services: [
      ['연중', '흙 산도 이탈 경보 — pH < 5.0 "석회 시비 필요", pH > 7.0 "유황 처리 필요"\n양분 흡수 효율 진단 — 비료를 줘도 포도가 못 먹는 원인 파악'],
      ['10~12월', '석회 시비 시기·양 추천 — "12월에 석회 ○○kg/평 시비하세요"'],
      ['연간', 'pH 연간 변화 그래프 + 개선 추천'],
    ] as [string, string][],
    note: '흙 pH는 변화가 느려 주 1회 측정으로 충분',
    recommended: '흙 산도 문제 농가, 석회 시비 타이밍을 데이터로 잡고 싶은 농가',
  },
  {
    icon: '🌡️', name: '정밀 온도 3채널 센서 (SenseCAP S2107)', unit: '개',
    role: '3곳 온도를 동시 측정 — 일소 경보, 뿌리 활성도, 과실-대기 온도차 분석',
    specs: [
      'PT1000 백금저항 온도계 × 3채널 동시',
      '측정 범위: -50°C ~ 300°C (정확도 ±0.1°C)',
      '채널 1: 포도 과실 표면 온도',
      '채널 2: 흙 온도 (뿌리 활성도)',
      '채널 3: 수관(잎 덩어리) 온도',
    ],
    services: [
      ['6~8월', '일소(햇빛 화상) 경보 — 과실 표면 40°C 이상 즉시 알림\n과실-대기 온도차 분석 → 분무 살수 추천'],
      ['3~4월', '뿌리 활성도 추적 — 흙 온도 15°C 도달 → "물주기 시작"'],
      ['연중', '3곳 동시 온도 비교 데이터 기록'],
    ] as [string, string][],
    recommended: '일소 피해 반복 농가, 수출·연구용 정밀 품질 관리',
  },
  {
    icon: '🌤️', name: '기상스테이션 8종 (SenseCAP S2120)', unit: '대',
    role: '온도·습도·풍속·풍향·강우량·일사량·UV·기압 8가지 동시 측정',
    tags: ['수출 농가'],
    specs: [
      '대기 온도 / 대기 습도 / 풍속 / 풍향 / 강우량 / 일사량 / UV 지수 / 기압 동시 측정',
      '비가림/하우스 바깥, 탁 트인 곳에 폴대로 설치',
      '온습도 150cm 높이, 풍속 300cm 이상 높이 권장',
    ],
    services: [
      ['11~2월', '서리 정밀 예보 — 기상청보다 내 밭에 맞는 서리 경보\n풍속 경보 — "비닐 점검하세요"'],
      ['3~9월', 'ET₀ 증발산량 자동 계산 → 관수 추천량 리터 단위 제시\n병해 모델 고도화 — 노균병·탄저병 포자 비산 위험도'],
      ['6~8월', '강우 정밀 기록 — 내 밭에 실제로 비가 얼마나 왔는지\nUV 지수 기록 → 과실 일소 경보 연동'],
      ['연중', '기압 급락 → 날씨 급변 사전 감지\n충해 예측 정확도 향상 — 풍속+강우+습도 조합'],
    ] as [string, string][],
    recommended: '수출 농가, 면적 넓은 농가, 기상청 예보만으론 부족하다고 느끼는 농가',
  },
];

export default function SensorsPage() {
  const [tab, setTab] = useState<Tab>('basic');

  return (
    <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
      {/* 헤더 */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.08),transparent_60%)]" />
        <Container className="max-w-5xl py-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400 font-bold tracking-wide text-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              FarmSense 센서 카탈로그
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              포도 농가를 위한<br />
              <span className="text-green-400">산업용 LoRaWAN 센서</span>
            </h1>
            <div className="flex flex-wrap gap-3 text-sm">
              {['IP66 방수', '배터리 최대 10년', '블루투스 1분 셋업', '앱 무료 포함'].map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-white/10 text-neutral-cream/80 border border-white/10">{tag}</span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container className="max-w-5xl py-12">

        {/* 탭 */}
        <div className="flex gap-2 border-b border-white/10 mb-10">
          {([['basic', '기본 세트 (필수)'], ['optional', '추가 센서 (선택)']] as [Tab, string][]).map(([id, label]) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-5 py-3 text-sm font-medium rounded-t-lg transition-all ${tab === id ? 'bg-white/10 text-white border-b-2 border-green-400' : 'text-neutral-cream/50 hover:text-neutral-cream/80'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'basic' && (
          <div className="space-y-8">
            {/* 기본 장비 (농가당 1회) */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">기본 장비 — 농가당 1회 설치</h2>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-cream/60">집에 설치</span>
              </div>
              <SensorCard sensor={GATEWAY as any} />
              <SensorCard sensor={LTE_ROUTER as any} />
            </section>

            {/* 하우스 1동 기본 세트 */}
            <section className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">하우스 1동 기본 세트</h2>
                <span className="text-xs px-2 py-1 rounded bg-white/10 text-neutral-cream/60">동마다 설치</span>
              </div>
              <SensorCard sensor={HUB as any} />
              <SensorCard sensor={TEMP_HUM as any} />
              <SensorCard sensor={SOIL_MOISTURE as any} />
            </section>

            {/* 상담 신청 CTA */}
            <section className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">센서 구성 상담</h2>
              <p className="text-neutral-cream/60 text-sm mb-6">농장 규모와 재배 형태에 맞는 최적 구성을 안내해드립니다.<br />기본 세트만으로 환기·관수·병해·서리·당도 등 연중 35가지 이상 알림을 받을 수 있습니다.</p>
              <Link href="/support" className="inline-block px-8 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold transition-colors">
                견적 및 상담 문의 →
              </Link>
            </section>
          </div>
        )}

        {tab === 'optional' && (
          <div className="space-y-4">
            <p className="text-neutral-cream/60 text-sm mb-6">기본 세트에 추가하면 더 정밀한 서비스를 받을 수 있습니다. 필요한 것만 골라 설치하면 됩니다.</p>
            {OPTIONAL_SENSORS.map((s) => (
              <SensorCard key={s.name} sensor={s as any} />
            ))}

            {/* 상담 CTA */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8 text-center">
              <p className="text-neutral-cream/60 text-sm mb-4">필요한 센서만 골라 추가할 수 있습니다. 구성 상담은 아래에서 문의해주세요.</p>
              <Link href="/support" className="inline-block px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors">
                센서 구성 상담 →
              </Link>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
}
