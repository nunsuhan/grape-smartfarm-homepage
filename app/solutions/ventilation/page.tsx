import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ventilation · 환기 관리',
  description: '팜센스(FarmSense) Ventilation — 하우스 환기 자동화 및 최적 환기 전략으로 병해를 예방하세요.',
};

const features = [
  { title: '환기 필요 시점 실시간 알림', desc: '하우스 내 온도·습도·CO2 수준이 임계치를 초과하면 즉시 환기 알림을 발송합니다.' },
  { title: '최적 환기 시간대 추천', desc: '외부 기상 조건과 내부 환경을 분석하여 하루 중 최적의 환기 시간대를 추천합니다.' },
  { title: '환기 전후 환경 변화 기록', desc: '환기 전후의 환경 변화를 자동으로 기록하여 환기 효과를 분석합니다.' },
  { title: '병해 예방을 위한 환기 가이드', desc: '노균병·잿빛곰팡이병 등 습도 관련 병해 예방을 위한 맞춤 환기 전략을 제공합니다.' },
];

export default function VentilationPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ventilation · 환기 관리</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">하우스 환기 자동화 및 최적 환기 전략</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            하우스 환기는 병해 예방과 작물 생육에 직결되는 핵심 관리 요소입니다.
            팜센스 Ventilation은 실시간 환경 데이터를 분석하여 환기가 필요한 시점을 자동으로 감지하고 알림을 발송합니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            외부 기상 조건과 내부 환경을 종합적으로 고려한 최적 환기 전략으로 에너지 효율과 작물 건강을 동시에 확보합니다.
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
            환기 현황 확인
          </a>
        </div>
      </div>
    </main>
  );
}
