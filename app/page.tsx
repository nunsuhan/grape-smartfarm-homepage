import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Hero } from '@/components/sections/hero';
import { LazySection } from '@/components/lazy-section';
import { Footer } from '@/components/footer';

const Problem = dynamic(() => import('@/components/sections/problem').then(m => ({ default: m.Problem })), { ssr: false });
const Solution = dynamic(() => import('@/components/sections/solution').then(m => ({ default: m.Solution })), { ssr: false });
const Technology = dynamic(() => import('@/components/sections/technology').then(m => ({ default: m.Technology })), { ssr: false });
const GAPCertification = dynamic(() => import('@/components/sections/gap-certification').then(m => ({ default: m.GAPCertification })), { ssr: false });
const BlockchainTraceability = dynamic(() => import('@/components/sections/blockchain-traceability').then(m => ({ default: m.BlockchainTraceability })), { ssr: false });
const ExportReadiness = dynamic(() => import('@/components/sections/export-readiness').then(m => ({ default: m.ExportReadiness })), { ssr: false });
const Product = dynamic(() => import('@/components/sections/product').then(m => ({ default: m.Product })), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-black text-white selection:bg-secondary-gold">
      {/* 시범 농가 이벤트 배너 */}
      <div className="fixed top-0 left-0 right-0 z-[200] bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-2.5 px-4 text-sm">
        <span className="font-bold">🎉 시범 농가 50% 할인 모집</span>
        <span className="mx-2 opacity-60">|</span>
        <span className="opacity-90">5농가 선착순 · 마감 3/20</span>
        <Link href="/trial" className="ml-3 underline font-bold hover:opacity-80">신청하기 →</Link>
      </div>
      <div className="h-10" />
      <Hero />
      <LazySection minHeight="600px">
        <Problem />
      </LazySection>
      <LazySection minHeight="500px">
        <Solution />
      </LazySection>
      <LazySection minHeight="600px">
        <Technology />
      </LazySection>
      <LazySection minHeight="600px">
        <GAPCertification />
      </LazySection>
      <LazySection minHeight="500px">
        <BlockchainTraceability />
      </LazySection>
      <LazySection minHeight="600px">
        <ExportReadiness />
      </LazySection>
      <LazySection minHeight="400px">
        <Product />
      </LazySection>
      <Footer />
    </main>
  );
}
