import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Climate · 환경 분석 | FarmSense',
  description: '기상 데이터와 하우스 환경 통합 분석으로 최적의 재배 환경을 유지하세요.',
};

const features = [
  { title: '외부 기상 vs 내부 환경 비교', desc: '외부 기상 데이터와 하우스 내부 환경을 실시간으로 비교 분석합니다.' },
  { title: '주간·월간 환경 리포트', desc: '주간 및 월간 환경 변화 추이를 한눈에 볼 수 있는 리포트를 자동 생성합니다.' },
  { title: '이상 기후 알림', desc: '이상 기후 예보 및 하우스 내 급격한 환경 변화 발생 시 즉시 알림을 발송합니다.' },
  { title: '적산온도 계산', desc: '작물 생육 단계별 적산온도를 자동 계산하여 관리 시점을 안내합니다.' },
];

export default function ClimatePage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Climate · 환경 분석</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">기상 데이터와 하우스 환경 통합 분석</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            팜센스 Climate는 외부 기상 데이터와 하우스 내부 환경 데이터를 통합 분석하여 재배 환경의 패턴을 파악합니다.
            단순 수치 모니터링을 넘어 환경 변화의 원인과 작물에 미치는 영향을 분석하여 선제적 대응을 가능하게 합니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            주간·월간 환경 리포트와 이상 기후 알림 기능으로 농가의 환경 관리 부담을 크게 줄여줍니다.
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
            환경 데이터 확인하기
          </a>
        </div>
      </div>
    </main>
  );
}
