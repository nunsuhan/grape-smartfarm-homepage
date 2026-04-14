import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '활용 사례',
  description: '팜센스(FarmSense) 시범 농가 활용 사례를 확인하세요. 데이터 기반 스마트팜 도입 현장의 실제 경험을 소개합니다.',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">플랫폼</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">활용 사례</h1>
          <p className="text-xl text-neutral-cream/70 mb-12">시범 농가와 함께 데이터를 쌓고 있습니다.</p>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-neutral-cream/70 text-lg leading-relaxed">
              현재 시범 농가와 함께 데이터를 수집하고 있습니다. 사례가 확보되는 대로 업데이트됩니다.
            </p>
            <p className="text-neutral-cream/50 text-base leading-relaxed mt-4">
              시범 농가 모집에 관심이 있으시면 아래 링크를 통해 신청해주세요.
            </p>
          </div>

          <div className="mt-12">
            <a href="/verified-farms" className="px-8 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 text-white font-medium text-lg transition-colors">
              시범 농가 신청하기
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
