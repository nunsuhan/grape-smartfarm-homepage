import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

// ── Google Form URL (시범농가 신청) ─────────────────────────────
// TODO: 실제 구글 폼 URL로 교체
const TRIAL_FORM_URL = 'https://forms.gle/placeholder';

// ── "유일" 배지 문구 — 업데이트가 필요하면 여기만 수정 ───────────
const FLIR_UNIQUE_CLAIM = '2026.03 기준, 한국 딸기 스마트팜 서비스 중 열화상 통합 서비스 유일';

export const metadata: Metadata = {
  title: '달콤이 — 딸기 수경재배 AI 스마트팜',
  description:
    '팜센스(FarmSense) 달콤이 — 양액 자동 분석, 스마트 환기, FLIR 열화상까지. 기존 비닐하우스에 바로 적용하는 딸기 전용 AI 스마트팜 플랫폼.',
  keywords:
    '팜센스, 딸기 스마트팜, 수경재배, 양액관리, 환기자동화, 열화상, AI농업, 달콤이, FarmSense',
  openGraph: {
    title: '팜센스 달콤이 — 딸기 수경재배 AI 스마트팜',
    description: '양액·환기·열화상을 한 앱으로. 딸기 전용 AI 플랫폼.',
    images: [{ url: '/images/hero-strawberry-greenhouse.jpg' }],
  },
};

// ── 데이터 ─────────────────────────────────────────────────────

const painPoints = [
  {
    icon: '💧',
    question: '양액 EC/pH를 감으로 조절하고 계신가요?',
    desc: '생육단계가 바뀔 때마다 적정 농도가 달라지는데, 매번 수동으로 맞추기 어렵습니다. 달콤이는 설향 기준 5단계 EC를 자동 판정합니다.',
  },
  {
    icon: '🌬️',
    question: '환기 타이밍, 온도만 보고 여닫으시나요?',
    desc: '온도만으로는 부족합니다. 풍속, 습도, 하우스 구조까지 고려해야 최적 환기가 됩니다. Kittas 물리 모델이 계절·생육단계별 최적 환기를 계산합니다.',
  },
  {
    icon: '🌡️',
    question: '하우스 안 온도 불균일, 눈으로 확인하시나요?',
    desc: '육안으로 잡을 수 없는 환기 사각지대와 뿌리 과열 구간을 FLIR 열화상으로 한눈에 확인합니다.',
  },
];

const features = [
  {
    icon: '💧',
    title: '생육단계별 양액 자동 분석',
    module: 'Nutrient AI',
    bullets: [
      '설향 기준 EC 0.6~1.8 dS/m, 5단계 자동 판정',
      '배액 EC 분석으로 양분 흡수율 실시간 확인',
      '품종별 보정 — 설향·죽향·금실·베리스타',
      '팁번·칼슘결핍·철결핍 등 생리장해 자동 경고',
    ],
    highlights: [
      { value: 'EC 0.6 → 1.8', label: '정식기 → 저온단일기' },
      { value: '최대 30%', label: '품종별 EC 차이 자동 반영' },
    ],
    source: '농촌진흥청(RDA) 딸기 배양액 기준 + 전남농업기술원 실증',
    color: 'blue',
  },
  {
    icon: '🌬️',
    title: '물리 모델 기반 환기 최적화',
    module: 'Climate AI',
    bullets: [
      'Kittas(1997) 자연환기 모델 적용',
      '한국 단동/연동 비닐하우스 실측 파라미터 (Cd 0.42, Cw 0.12)',
      '생육단계 × 계절별 최적 환기 횟수 자동 계산',
      '권장 환기창 개폐율 실시간 제안',
    ],
    highlights: [
      { value: '1~30 ACH', label: '육묘기 ↔ 착과기 자동 전환' },
      { value: '최대 5배', label: '풍향별 환기율 차이 자동 보정' },
    ],
    source: '서울대 여욱현 박사논문(2021) 한국 비닐하우스 CFD 검증',
    color: 'emerald',
  },
  {
    icon: '🔥',
    title: '열화상 카메라로 보이지 않는 문제를 봅니다',
    module: 'FLIR Thermal',
    bullets: [
      'FLIR One Pro 스마트폰 부착형으로 간편 촬영',
      '수분 스트레스, 뿌리 과열, 환기 사각지대 자동 감지',
      'CWSI(작물수분스트레스지수) 실시간 산출',
      '야간 냉해 위험 조기 경고',
    ],
    highlights: [
      { value: '+2°C', label: '잎 온도 상승 = 수분 스트레스 신호' },
      { value: 'CWSI 0.55+', label: '즉시 관개 필요 기준' },
    ],
    source: 'Celiktopuz et al. 2023 딸기 CWSI 실측',
    color: 'red',
    badge: FLIR_UNIQUE_CLAIM,
  },
];

const steps = [
  {
    step: '01',
    icon: '📡',
    title: '센서 설치',
    items: [
      'LoRa 센서 키트 설치 (기본 22만원 + 동당 10만원)',
      '온습도 + 토양수분 + EC/pH 측정',
      '설치 시간: 약 2시간',
    ],
  },
  {
    step: '02',
    icon: '📱',
    title: '앱 연동',
    items: [
      '달콤이 앱 설치 (Android)',
      '하우스 정보 입력 (규격, 환기창 면적, 품종)',
      '실시간 모니터링 시작',
    ],
  },
  {
    step: '03',
    icon: '🤖',
    title: 'AI 분석 시작',
    items: [
      '양액/환기/열화상 분석 자동 실행',
      '위험 감지 시 카카오톡 알림',
      '일일 리포트 자동 생성',
    ],
  },
];

const comparisonRows = [
  { feature: '딸기 전용 엔진',         farmmorning: '❌ 범용', nthing: '❌ 식물공장', nonghyup: '❌ 범용', dalcomi: '✅' },
  { feature: '생육단계별 양액 분석',    farmmorning: '❌',      nthing: '△',          nonghyup: '❌',      dalcomi: '✅' },
  { feature: '물리모델 환기 분석',      farmmorning: '❌',      nthing: '△',          nonghyup: '❌',      dalcomi: '✅' },
  { feature: 'FLIR 열화상',            farmmorning: '❌',      nthing: '❌',          nonghyup: '❌',      dalcomi: '✅' },
  { feature: '소규모 단동 지원',        farmmorning: '△',      nthing: '❌',          nonghyup: '✅',      dalcomi: '✅' },
  { feature: '초기 비용',              farmmorning: '높음',    nthing: '매우 높음',   nonghyup: '240만원', dalcomi: '22만원~' },
];

const colorMap = {
  blue:    { card: 'border-blue-500/30 hover:border-blue-500/50',       icon: 'bg-blue-500/10 text-blue-400',       hl: 'text-blue-400',    src: 'text-blue-400/60',   mod: 'text-blue-400' },
  emerald: { card: 'border-emerald-500/30 hover:border-emerald-500/50', icon: 'bg-emerald-500/10 text-emerald-400', hl: 'text-emerald-400', src: 'text-emerald-400/60', mod: 'text-emerald-400' },
  red:     { card: 'border-red-500/30 hover:border-red-500/50',         icon: 'bg-red-500/10 text-red-400',         hl: 'text-red-400',     src: 'text-red-400/60',    mod: 'text-red-400' },
  slate:   { card: 'border-white/20 hover:border-white/30',             icon: 'bg-white/10 text-white/70',          hl: 'text-white/80',    src: 'text-white/40',      mod: 'text-white/60' },
};

// ── 페이지 ──────────────────────────────────────────────────────

export default function StrawberryLandingPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">

      {/* ════════════════════════════════════════════
          섹션 1: Hero
      ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 배경 그라디언트 (이미지 없는 경우 대체) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-neutral-black to-emerald-900/30" />
        <div className="absolute inset-0">
          {/* TODO: 실제 이미지로 교체 */}
          {/* <Image src="/images/hero-strawberry-greenhouse.jpg" alt="딸기 스마트팜 온실" fill className="object-cover opacity-30" /> */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,62,62,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,161,105,0.12),transparent_60%)]" />
        </div>

        <Container className="relative z-10 px-6 pt-28 pb-20 text-center">
          {/* 앱 배지 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-sm text-red-400 font-medium mb-8">
            <span>🍓</span>
            <span>달콤이(Dalcomi) — 딸기 전용 스마트팜 앱</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            딸기 스마트팜,{' '}
            <span className="text-red-400">달콤이</span>가 바꿉니다
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            수경재배 딸기 농가를 위한<br className="hidden md:block" />
            AI 농업 인텔리전스 플랫폼
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href={TRIAL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-red-500/20"
            >
              시범농가 신청하기 →
            </a>
            <a
              href="#features"
              className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-medium text-lg rounded-xl transition-colors"
            >
              기능 살펴보기
            </a>
          </div>

          {/* 하단 배지 */}
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {['FLIR 열화상 통합', '양액 AI 관리', '환기 자동 분석'].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-white/[0.06] border border-white/10 rounded-full text-white/60 font-medium"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          섹션 2: 문제 제기 (Pain Points)
      ════════════════════════════════════════════ */}
      <section id="pain-points" className="py-24 bg-white/[0.02] border-y border-white/5">
        <Container className="px-6">
          <div className="text-center mb-14">
            <p className="text-red-400 text-sm font-medium uppercase tracking-widest mb-3">Pain Points</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              딸기 수경재배, 이런 고민 있으시죠?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((p) => (
              <div key={p.question} className="p-7 bg-white/5 border border-white/10 rounded-2xl hover:border-red-500/30 transition-colors">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-white leading-snug">
                  {p.question}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          섹션 3: 핵심 기능 3가지
      ════════════════════════════════════════════ */}
      <section id="features" className="py-24">
        <Container className="px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-3">Core Features</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">핵심 기능 3가지</h2>
          </div>

          <div className="space-y-8">
            {features.map((feat, i) => {
              const c = colorMap[feat.color as keyof typeof colorMap];
              return (
                <article
                  key={feat.module}
                  className={`p-8 md:p-10 bg-white/[0.03] border rounded-2xl transition-colors ${c.card}`}
                >
                  {/* 헤더 */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${c.icon}`}>
                      {feat.icon}
                    </div>
                    <div>
                      <p className={`font-mono text-[11px] tracking-[1.5px] uppercase font-semibold ${c.mod}`}>
                        {feat.module}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{feat.title}</h3>
                    </div>
                    {/* "유일" 배지 */}
                    {feat.badge && (
                      <span className="ml-auto px-3 py-1 bg-red-500/15 border border-red-500/40 rounded-full text-xs text-red-400 font-semibold">
                        🏆 서비스 유일
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 기능 목록 */}
                    <ul className="space-y-3">
                      {feat.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-white/65">
                          <span className={`mt-0.5 flex-shrink-0 ${c.hl}`}>✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* 수치 강조 + 출처 */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {feat.highlights.map((hl) => (
                          <div key={hl.label} className="p-4 bg-white/[0.04] border border-white/10 rounded-xl text-center">
                            <div className={`text-2xl font-bold mb-1 ${c.hl}`}>{hl.value}</div>
                            <div className="text-xs text-white/40 leading-snug">{hl.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className={`text-xs ${c.src} leading-relaxed`}>
                        📄 {feat.source}
                      </p>
                      {feat.badge && (
                        <p className="text-xs text-white/30 italic">{feat.badge}</p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          섹션 4: 작동 방식 (How It Works)
      ════════════════════════════════════════════ */}
      <section id="how-it-works" className="py-24 bg-white/[0.02] border-y border-white/5">
        <Container className="px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">3단계로 시작합니다</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* 연결선 (데스크톱) */}
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-emerald-500/30 via-blue-500/30 to-red-500/30" />

            {steps.map((s, i) => (
              <div key={s.step} className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <p className="font-mono text-xs text-emerald-400/60 tracking-widest mb-1">STEP {s.step}</p>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <ul className="space-y-2 text-left">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                      <span className="text-emerald-400 mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 앱 스크린샷 placeholder */}
          <div className="mt-14 p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs text-white/50 mb-4">
              🚧 Coming Soon
            </div>
            <p className="text-white/40 text-sm">
              달콤이 앱 스크린샷 — 개발 완료 후 업데이트 예정
            </p>
            {/* TODO: <Image src="/images/app-screenshot-dalcomi.png" ... /> */}
          </div>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          섹션 5: 경쟁 비교
      ════════════════════════════════════════════ */}
      <section id="comparison" className="py-24">
        <Container className="px-6">
          <div className="text-center mb-14">
            <p className="text-red-400 text-sm font-medium uppercase tracking-widest mb-3">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              기존 서비스와 뭐가 다른가요?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="text-left py-4 px-4 text-white/40 font-medium w-[28%]">기능</th>
                  <th scope="col" className="text-center py-4 px-3 text-white/40 font-medium">팜모닝</th>
                  <th scope="col" className="text-center py-4 px-3 text-white/40 font-medium">엔씽</th>
                  <th scope="col" className="text-center py-4 px-3 text-white/40 font-medium">농협 보급형</th>
                  <th scope="col" className="text-center py-4 px-3 text-red-400 font-bold">달콤이</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/5 ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}>
                    <th scope="row" className="py-4 px-4 text-white/70 font-normal text-left">{row.feature}</th>
                    <td className="py-4 px-3 text-center text-white/50">{row.farmmorning}</td>
                    <td className="py-4 px-3 text-center text-white/50">{row.nthing}</td>
                    <td className="py-4 px-3 text-center text-white/50">{row.nonghyup}</td>
                    <td className="py-4 px-3 text-center font-bold text-emerald-400">{row.dalcomi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 text-center text-white/40 text-sm">
            대형 식물공장이 아닌, <strong className="text-white/70">기존 비닐하우스 딸기 농가</strong>를 위해 만들었습니다
          </p>
        </Container>
      </section>

      {/* ════════════════════════════════════════════
          섹션 6: CTA (구 섹션 7)
      ════════════════════════════════════════════ */}
      <section id="apply" className="py-28">
        <Container className="px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-red-400 text-sm font-medium uppercase tracking-widest mb-4">시범농가 모집</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              2026년 시범농가를<br />모집합니다
            </h2>
            <p className="text-white/60 text-lg mb-8">대구·경북 딸기 수경재배 농가 10곳</p>

            {/* 신청 조건 */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-10 text-left max-w-md mx-auto">
              <p className="text-sm font-semibold text-white/70 mb-3">신청 조건</p>
              <ul className="space-y-2 text-sm text-white/55">
                {[
                  '고설 수경재배 딸기 농가',
                  '단동 또는 연동 비닐하우스',
                  '인터넷 연결 가능 (LTE 지원)',
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={TRIAL_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-lg rounded-xl transition-colors shadow-xl shadow-red-500/20 mb-6"
            >
              시범농가 신청하기 →
            </a>
            <p className="text-white/35 text-sm">
              문의:{' '}
              <a href="mailto:contact@farmsense.kr" className="hover:text-white/60 underline underline-offset-4 transition-colors">
                contact@farmsense.kr
              </a>
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}
