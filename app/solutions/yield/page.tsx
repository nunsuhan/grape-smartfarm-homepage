import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yield · 수확·품질',
  description: '팜센스(FarmSense) Yield — 수확 시기 예측과 품질 분석으로 고품질 농산물을 생산하세요.',
};

const features = [
  { title: '당도 예측 (목표: 18-22 Brix)', desc: '생육 환경 데이터와 AI 모델을 결합하여 수확 시 당도를 사전 예측합니다.' },
  { title: '수확 최적 시기 판단', desc: '적산온도, 착색도, 당도 예측값을 종합하여 최적의 수확 시기를 판단합니다.' },
  { title: '품질 데이터 기록', desc: '수확 시 당도, 무게, 색도 등 품질 데이터를 체계적으로 기록하고 관리합니다.' },
  { title: '연도별 품질 비교', desc: '연도별 품질 데이터를 비교 분석하여 재배 기술 향상의 기초 자료로 활용합니다.' },
];

export default function YieldPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Yield · 수확·품질</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">수확 시기 예측과 품질 분석</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            팜센스 Yield는 생육 환경 데이터를 분석하여 수확 시 예상 당도(목표 18-22 Brix)를 미리 예측합니다.
            수확 시기를 너무 이르거나 늦지 않게 최적화하여 품질과 수익성을 동시에 높입니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            수확 품질 데이터의 체계적 기록과 연도별 비교 분석으로 해마다 더 나은 품질의 농산물을 생산할 수 있습니다.
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
            품질 데이터 확인
          </a>
        </div>
      </div>
    </main>
  );
}
