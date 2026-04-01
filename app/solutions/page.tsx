import type { Metadata } from 'next';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: '스마트팜 솔루션',
  description: '팜센스(FarmSense)의 8가지 스마트팜 솔루션으로 데이터 기반 영농을 시작하세요.',
};

const solutions = [
  {
    title: 'Grow · 생육 관리',
    desc: '실시간 생육 데이터 수집과 AI 기반 생육 예측으로 최적의 재배 환경을 만드세요.',
    href: '/solutions/grow',
  },
  {
    title: 'Climate · 환경 분석',
    desc: '기상 데이터와 하우스 환경을 통합 분석하여 환경 변화에 선제적으로 대응하세요.',
    href: '/solutions/climate',
  },
  {
    title: 'Protect · 병해충 예측',
    desc: 'PMI-DSS로 병해 발생을 사전 예측하고 AI 사진 진단으로 즉시 대응하세요.',
    href: '/solutions/protect',
  },
  {
    title: 'Ventilation · 환기 관리',
    desc: '최적 환기 시점 알림과 환기 전략으로 병해를 예방하고 생육을 촉진하세요.',
    href: '/solutions/ventilation',
  },
  {
    title: 'Yield · 수확·품질',
    desc: '당도 예측(목표 18-22 Brix)과 수확 최적 시기 판단으로 품질을 높이세요.',
    href: '/solutions/yield',
  },
  {
    title: 'Residue · 잔류농약',
    desc: 'PLS 기준 농약 이력 관리와 출하 가능일 계산으로 안전한 농산물을 출하하세요.',
    href: '/solutions/residue',
  },
  {
    title: 'Trace · 블록체인 추적',
    desc: '생산 이력을 블록체인에 자동 기록하고 QR코드로 소비자에게 투명하게 공개하세요.',
    href: '/solutions/trace',
  },
  {
    title: 'DSS · 의사결정 지원',
    desc: '모든 데이터를 종합한 AI 영농 추천으로 매일 최선의 의사결정을 하세요.',
    href: '/solutions/dss',
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">FarmSense 솔루션</h1>
          <p className="text-xl text-neutral-cream/70">
            생육 관리부터 블록체인 추적까지, 데이터 기반 스마트팜 솔루션 8가지를 제공합니다.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group p-6 bg-white/5 rounded-xl border border-white/10 hover:border-primary-green/40 hover:bg-white/8 transition-all duration-200"
              >
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary-green transition-colors">{s.title}</h2>
                <p className="text-neutral-cream/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-primary-green text-sm font-medium">자세히 보기 →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
