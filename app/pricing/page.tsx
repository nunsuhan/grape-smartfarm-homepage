import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Check } from 'lucide-react';

export const metadata = {
  title: '요금제 안내 | 팜센스(FarmSense)',
  description: 'FarmSense 스마트팜 구독 서비스. 월 10,000원 / 연 100,000원 단일 요금제.',
};

const FEATURES = [
  'AI 병해 진단 및 예측 알림',
  '관개·시비 자동 추천',
  '수확량 예측 리포트',
  '영농일지 기록 및 분석',
  '카카오톡·SMS 알림 연동',
  'FarmSense 앱 (Android)',
  '블록체인 생산이력 추적 (베타)',
];


export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">

      {/* 헤더 */}
      <section className="py-16 text-center border-b border-white/10">
        <Container>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold mb-4 uppercase tracking-wider">
            요금제 안내
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">단순하고 합리적인 가격</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            복잡한 플랜 없이 하나의 요금제로 모든 기능을 사용하세요.
          </p>
        </Container>
      </section>

      {/* 요금제 카드 2개 */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">

            {/* 월간 */}
            <div className="relative rounded-2xl border border-green-500/60 bg-green-500/8 p-8 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-2">월간 구독</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">1만</span>
                  <span className="text-xl font-bold text-white">원</span>
                  <span className="text-gray-400 text-sm ml-1">/월</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">매월 자동결제 · 첫 14일 무료</p>
              </div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/payment?cycle=monthly"
                className="block text-center py-3 px-6 rounded-xl font-bold text-sm bg-green-600 hover:bg-green-500 text-white transition-colors">
                월간 구독 시작하기
              </Link>
            </div>

            {/* 연간 */}
            <div className="relative rounded-2xl border border-yellow-500/50 bg-yellow-500/6 p-8 flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-black text-xs font-black rounded-full whitespace-nowrap">
                2개월 무료 — 연 20,000원 절약
              </div>
              <div className="mb-6">
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2">연간 구독</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white">10만</span>
                  <span className="text-xl font-bold text-white">원</span>
                  <span className="text-gray-400 text-sm ml-1">/년</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">월 환산 약 8,333원 · 연 1회 결제</p>
              </div>
              <ul className="space-y-2.5 flex-1 mb-8">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href="/payment?cycle=yearly"
                className="block text-center py-3 px-6 rounded-xl font-bold text-sm bg-yellow-500 hover:bg-yellow-400 text-black transition-colors">
                연간 구독 시작하기
              </Link>
            </div>

          </div>
        </Container>
      </section>

      {/* 결제 안내 */}
      <section className="py-12 border-t border-white/10">
        <Container className="max-w-2xl">
          <div className="bg-white/5 rounded-2xl p-8 text-sm text-gray-400 space-y-2 leading-relaxed">
            <p className="text-white font-bold mb-4">결제 및 환불 안내</p>
            <p>· 월간 구독: 매월 결제일에 카드 자동결제 (언제든지 해지 가능)</p>
            <p>· 연간 구독: 1회 결제 후 1년간 이용</p>
            <p>· 결제 수단: 신용카드·체크카드 (국내외 전 카드 지원)</p>
            <p>· 14일 이내 미사용 시 전액 환불 가능</p>
            <p>· 자세한 내용은{' '}
              <Link href="/refund-policy" className="text-green-400 hover:underline">환불·취소 정책</Link>을 참고하세요.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}
