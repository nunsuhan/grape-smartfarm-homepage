import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow · 생육 관리',
  description: '팜센스(FarmSense) Grow — 데이터 기반 작물 생육 모니터링으로 최적의 재배 환경을 만드세요.',
};

const features = [
  { title: '실시간 환경 모니터링', desc: '온도, 습도, 토양수분, 광량, CO2를 24시간 실시간으로 수집합니다.' },
  { title: '생육 단계 자동 판단', desc: 'AI가 현재 작물의 생육 단계를 자동으로 분석하고 기록합니다.' },
  { title: '최적 환경 조건 알림', desc: '생육 단계별 최적 환경 조건에서 벗어날 경우 즉시 알림을 발송합니다.' },
  { title: '생육 이력 기록 및 분석', desc: '누적된 생육 데이터를 바탕으로 연도별·시기별 비교 분석을 제공합니다.' },
];

export default function GrowPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Grow · 생육 관리</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">데이터 기반 작물 생육 모니터링</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            팜센스 Grow는 온도, 습도, 토양수분, 광량, CO2 등 생육에 영향을 미치는 핵심 환경 데이터를 실시간으로 수집합니다.
            AI 기반 생육 예측 모델이 현재 환경 조건을 분석하여 작물의 생육 상태를 진단하고, 생육 단계별 맞춤 관리 가이드를 제공합니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            데이터가 쌓일수록 예측 정확도가 높아지며, 농가 고유의 영농 노하우와 결합하여 더욱 정밀한 관리가 가능해집니다.
          </p>
        </div>

        <h2 className="text-2xl font-serif font-bold mb-6">주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {features.map((f) => (
            <div key={f.title} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-neutral-cream/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a href="/smartfarm/dashboard" className="px-8 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 text-white font-medium text-lg transition-colors">
            내 농장 시작하기
          </a>
        </div>
      </div>
    </main>
  );
}
