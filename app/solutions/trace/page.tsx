import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trace · 블록체인 추적 | FarmSense',
  description: '생산 이력 블록체인 기록으로 신뢰할 수 있는 농산물을 만드세요.',
};

const features = [
  { title: '생산 데이터 자동 블록체인 기록', desc: '센서 데이터, 농약 이력, 수확 정보가 자동으로 블록체인에 기록되어 위변조가 불가합니다.' },
  { title: 'QR코드 생성 및 인쇄', desc: '포장 박스에 부착할 QR코드를 자동 생성하여 소비자가 생산 이력을 쉽게 확인할 수 있습니다.' },
  { title: '소비자 추적 페이지', desc: 'QR 스캔 시 농가 정보, 재배 환경, 품질 데이터를 보여주는 소비자용 페이지를 제공합니다.' },
  { title: '수출 서류 자동 연계', desc: '블록체인 기록 데이터를 수출 서류(검역증, 원산지 증명)와 자동으로 연계합니다.' },
];

export default function TracePage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">솔루션</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Trace · 블록체인 추적</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">생산 이력 블록체인 기록</p>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-neutral-cream/80 text-lg leading-relaxed mb-6">
            팜센스 Trace는 생산 과정의 모든 데이터를 블록체인에 자동으로 기록합니다.
            재배 환경, 농약 사용 이력, 수확 품질까지 위변조 불가한 기록으로 농산물의 신뢰성을 증명합니다.
          </p>
          <p className="text-neutral-cream/80 text-lg leading-relaxed">
            QR코드 하나로 소비자와 바이어가 농장부터 식탁까지의 모든 이력을 확인할 수 있어 프리미엄 가격 실현이 가능합니다.
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
            블록체인 기록 확인
          </a>
        </div>
      </div>
    </main>
  );
}
