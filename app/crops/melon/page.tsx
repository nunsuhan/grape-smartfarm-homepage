import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '참외 재배',
  description: '팜센스(FarmSense) 참외 스마트팜 서비스 — 현재 준비 중입니다.',
  robots: { index: false, follow: false },
};

export default function MelonPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">작물</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">참외</h1>
        <p className="text-xl text-neutral-cream/70 mb-12">팜센스 참외 서비스는 현재 준비 중입니다.</p>

        <div className="p-8 bg-white/5 rounded-2xl border border-white/10 mb-16">
          <p className="text-neutral-cream/70 text-lg leading-relaxed">
            팜센스 참외 서비스는 현재 준비 중입니다. 포도 서비스를 먼저 이용해보세요.
          </p>
        </div>

        <div className="mt-8">
          <a href="/crops/grape" className="px-8 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 text-white font-medium text-lg transition-colors">
            포도 서비스 보기
          </a>
        </div>
      </div>
    </main>
  );
}
