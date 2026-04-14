import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '팜센스 작동 원리',
  description: '팜센스(FarmSense)가 어떻게 작동하는지 5단계로 알아보세요 — 센서 설치부터 AI 분석, 영농 추천까지.',
};

const steps = [
  {
    step: '1',
    title: '센서 설치',
    desc: '농가 하우스에 온도, 습도, 토양수분, CO2, 광량 센서를 설치합니다. 설치는 전문 기사가 방문하여 진행하며 1-2시간이면 완료됩니다.',
  },
  {
    step: '2',
    title: '데이터 수집',
    desc: '설치된 센서가 10분 간격으로 환경 데이터를 자동 수집합니다. 수집된 데이터는 실시간으로 팜센스 클라우드에 안전하게 저장됩니다.',
  },
  {
    step: '3',
    title: 'AI 분석',
    desc: 'AI 분석 엔진이 수집된 데이터를 바탕으로 작물 생육 상태, 병해 위험도, 환기 필요 여부를 지속적으로 분석합니다.',
  },
  {
    step: '4',
    title: '알림·추천',
    desc: '분석 결과에 따라 관수 시기, 방제 적기, 환기 필요 시점 등 영농 추천 알림을 스마트폰으로 발송합니다.',
  },
  {
    step: '5',
    title: '기록',
    desc: '모든 환경 데이터와 영농 작업 이력이 자동으로 기록됩니다. 누적된 데이터는 GAP 인증, 블록체인 추적, 연도별 분석에 활용됩니다.',
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">플랫폼</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">팜센스 작동 원리</h1>
          <p className="text-xl text-neutral-cream/70 mb-12">설치부터 데이터 기록까지, 5단계로 이루어집니다.</p>

          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green/20 border border-primary-green/40 flex items-center justify-center text-primary-green font-bold text-lg">
                  {s.step}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
                  <p className="text-neutral-cream/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
