import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protect · 병해충 예측 | FarmSense',
  description: 'AI 기반 병해충 사전 예방 시스템으로 작물을 지키세요.',
};

const features = [
  { title: '병해 발생 확률 예측 (PMI-DSS)', desc: '환경 데이터를 분석하여 노균병·탄저병 등 주요 병해의 발생 확률을 사전 예측합니다.' },
  { title: 'AI 사진 진단', desc: '스마트폰으로 촬영한 작물 사진을 AI가 분석하여 병해충 증상을 즉시 진단합니다.' },
  { title: '방제 시기 자동 추천', desc: '병해 위험도와 날씨 예보를 고려하여 최적의 방제 시기를 자동으로 추천합니다.' },
  { title: '지역별 병해 발생 현황', desc: '인근 농가의 병해 발생 현황을 공유하여 사전 경보 체계를 구축합니다.' },
];

export default function ProtectPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Protect · 병해충 예측</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">AI 기반 병해충 사전 예방 시스템</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            팜센스 Protect는 PMI-DSS(병해 예측 의사결정 지원 시스템)를 통해 환경 데이터 기반으로 병해 발생 확률을 사전 예측합니다.
            병해가 눈에 보이기 전에 선제적으로 대응할 수 있어 약제 사용량을 줄이고 작물 피해를 최소화합니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            AI 사진 진단 기능으로 현장에서 즉시 병해충 여부를 확인하고, 방제 시기와 방법을 추천받을 수 있습니다.
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
          <a href="/smartfarm/ai-chat" className="px-8 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 text-white font-medium text-lg transition-colors">
            병해 진단하기
          </a>
        </div>
      </div>
    </main>
  );
}
