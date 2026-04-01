import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Residue · 잔류농약 관리',
  description: '팜센스(FarmSense) Residue — PLS 대응 잔류농약 안전 관리로 안전한 농산물을 출하하세요.',
};

const features = [
  { title: '농약 살포 이력 기록', desc: '농약 품목, 살포량, 살포일, 작업자를 체계적으로 기록하여 영농일지를 자동 생성합니다.' },
  { title: '안전 사용 기준 자동 확인', desc: 'PLS 기준에 따른 농약 안전 사용 기준(희석배수, 살포 횟수)을 자동으로 확인합니다.' },
  { title: '출하 가능일 계산', desc: '농약별 안전사용 기준일수를 적용하여 안전한 출하 가능일을 자동으로 계산합니다.' },
  { title: 'GAP 인증 연계', desc: '농약 관리 기록을 GAP 인증 심사 자료로 바로 활용할 수 있도록 서식에 맞춰 제공합니다.' },
];

export default function ResiduePage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Residue · 잔류농약 관리</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">PLS 대응 잔류농약 안전 관리</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            PLS(농약 허용물질목록 관리제도) 시행으로 잔류농약 관리의 중요성이 높아졌습니다.
            팜센스 Residue는 농약 살포 이력을 체계적으로 기록하고, 안전 사용 기준 준수 여부를 자동으로 확인합니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            출하 가능일 자동 계산과 GAP 인증 연계 기능으로 수출 규격에 맞는 안전한 농산물 생산을 지원합니다.
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
          <a href="/smartfarm/field-book" className="px-8 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 text-white font-medium text-lg transition-colors">
            농약 이력 관리
          </a>
        </div>
      </div>
    </main>
  );
}
