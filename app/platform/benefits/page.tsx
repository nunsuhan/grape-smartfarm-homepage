import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '팜센스 도입 효과',
  description: '팜센스(FarmSense) 도입으로 병해 피해 감소, 노동력 절감, 품질 향상, 수출 대응이 가능합니다.',
};

const benefits = [
  {
    title: '병해 피해 감소',
    subtitle: '조기 예측으로 선제 대응',
    desc: '환경 데이터 기반 병해 발생 확률 예측(PMI-DSS)으로 병해가 눈에 보이기 전에 방제합니다. 시범 농가에서 병해 피해 면적이 크게 줄어드는 효과를 확인하고 있습니다.',
  },
  {
    title: '노동력 절감',
    subtitle: '자동 모니터링으로 현장 방문 감소',
    desc: '24시간 자동 모니터링으로 매일 하우스를 확인하지 않아도 이상 상황 발생 시 즉시 알림을 받습니다. 모니터링에 쓰이는 시간을 다른 영농 작업에 활용할 수 있습니다.',
  },
  {
    title: '품질 향상',
    subtitle: '데이터 기반 관리로 당도·균일도 개선',
    desc: '수확 시기 예측과 환경 최적화를 통해 목표 당도(18-22 Brix) 달성률을 높입니다. 연도별 품질 데이터 비교로 해마다 더 나은 품질을 만들어갑니다.',
  },
  {
    title: '수출 대응',
    subtitle: '추적성 확보로 프리미엄 시장 진입',
    desc: '블록체인 기반 생산 이력 기록과 GAP 인증 연계로 수출 바이어가 요구하는 추적성 요건을 충족합니다. 검증된 생산 데이터로 프리미엄 가격을 실현합니다.',
  },
];

export default function BenefitsPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">플랫폼</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">팜센스 도입 효과</h1>
          <p className="text-xl text-neutral-cream/70 mb-12">데이터 기반 영농이 가져오는 4가지 변화</p>

          <div className="space-y-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-8 bg-white/5 rounded-xl border border-white/10">
                <h2 className="text-2xl font-serif font-bold mb-1">{b.title}</h2>
                <p className="text-primary-green text-sm font-medium mb-4">{b.subtitle}</p>
                <p className="text-neutral-cream/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
