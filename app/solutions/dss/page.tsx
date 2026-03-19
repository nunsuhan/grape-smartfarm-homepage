import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSS · 의사결정 지원 | FarmSense',
  description: '데이터 기반 영농 의사결정 시스템으로 더 스마트하게 농사 짓세요.',
};

const features = [
  { title: '오늘의 영농 추천 (종합)', desc: '생육 단계, 기상 조건, 병해 위험도를 종합하여 오늘 해야 할 영농 작업을 추천합니다.' },
  { title: '관수 시기·양 추천', desc: '토양 수분 데이터와 증발산량 계산을 기반으로 최적의 관수 시기와 양을 추천합니다.' },
  { title: '방제 적기 알림', desc: '병해 발생 확률이 높아지는 시점을 사전에 감지하여 방제 적기를 알려줍니다.' },
  { title: '주간 영농 계획', desc: '기상 예보와 작물 생육 상태를 분석하여 1주일 단위 영농 계획을 자동으로 생성합니다.' },
];

export default function DssPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">DSS · 의사결정 지원</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">데이터 기반 영농 의사결정 시스템</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            팜센스 DSS(의사결정 지원 시스템)는 생육, 환경, 병해 예측 등 모든 데이터를 종합하여 농가가 매일 해야 할 일을 알려주는 스마트 비서입니다.
            관수, 방제, 환기, 수확 시기까지 데이터에 근거한 정확한 추천으로 시행착오를 줄입니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            경험이 적은 신규 농가도 베테랑 농가 수준의 의사결정을 할 수 있도록 AI가 24시간 지원합니다.
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
            AI 상담하기
          </a>
        </div>
      </div>
    </main>
  );
}
