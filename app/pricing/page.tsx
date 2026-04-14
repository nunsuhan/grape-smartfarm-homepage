'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Check } from 'lucide-react';

export const metadata = undefined; // client component

const PLANS = [
  {
    id: 'starter',
    name: '스타터',
    subtitle: '소규모 농가 입문용',
    monthlyPrice: 9900,
    yearlyPrice: 99000,
    color: 'green',
    badge: null,
    features: [
      '센서 데이터 실시간 모니터링',
      '온도·습도·토양수분 기본 알림',
      '영농일지 기록',
      'AI 기본 상담 (월 30회)',
      '모바일 앱 이용 (iOS/Android)',
      '1개 농장 등록',
    ],
    cta: '스타터 시작하기',
    highlight: false,
  },
  {
    id: 'pro',
    name: '프로',
    subtitle: '전문 농가 표준 플랜',
    monthlyPrice: 29900,
    yearlyPrice: 299000,
    color: 'blue',
    badge: '가장 인기',
    features: [
      '스타터 플랜 전체 포함',
      '병해 조기 진단 AI (무제한)',
      '관개·시비 자동 추천',
      'CWSI·VPD 정밀 분석',
      '수확량 예측 리포트',
      '3개 농장 등록',
      '카카오톡 알림 연동',
      '월별 영농 분석 리포트',
    ],
    cta: '프로 시작하기',
    highlight: true,
  },
  {
    id: 'export',
    name: '수출팜',
    subtitle: '수출 농가·영농조합 전용',
    monthlyPrice: 59900,
    yearlyPrice: 599000,
    color: 'gold',
    badge: null,
    features: [
      '프로 플랜 전체 포함',
      '블록체인 생산이력 추적',
      '수출 GAP 인증 서류 자동 생성',
      '국가별 잔류농약 기준 관리',
      '냉장 콜드체인 모니터링',
      '10개 농장 등록',
      '전담 전문가 1:1 컨설팅 (월 1회)',
      '수출 바이어 매칭 지원',
    ],
    cta: '수출팜 상담받기',
    highlight: false,
  },
];

const SENSOR_PRODUCTS = [
  { name: '온도·습도 센서', price: 15000, unit: '개', desc: '하우스/노지 실시간 온습도 측정' },
  { name: '토양수분 센서', price: 12000, unit: '개', desc: '관수 타이밍 자동 판단' },
  { name: '잎 젖음 센서', price: 40000, unit: '개', desc: '곰팡이병 조기 예방' },
  { name: '토양 EC 센서', price: 40000, unit: '개', desc: '비료 과다 실시간 감지' },
  { name: '적외선 잎 온도 센서', price: 25000, unit: '개', desc: '열 스트레스·수분 부족 감지' },
  { name: 'CO₂ 센서 (하우스 전용)', price: 75000, unit: '개', desc: '환기 타이밍 자동 알림' },
  { name: '바깥 날씨 스테이션', price: 120000, unit: '세트', desc: '서리·풍속·강우량 정밀 측정' },
  { name: '열화상 카메라 (FLIR One Pro)', price: 500000, unit: '대', desc: '병 3~5일 전 조기 발견' },
  { name: '센서 게이트웨이 (LoRa)', price: 180000, unit: '대', desc: '최대 20개 센서 통합 수집' },
  { name: '평생회원권', price: 490000, unit: '회', desc: '창립 한정 · 영구 무료 업데이트 포함' },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      {/* Header */}
      <section className="py-16 text-center border-b border-white/10">
        <Container>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold mb-4 uppercase tracking-wider">
            요금제 안내
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">내 농장에 맞는 플랜 선택</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            소규모 농가부터 수출 전문 농가까지 — 모든 플랜은 14일 무료 체험 후 결제됩니다.
          </p>
        </Container>
      </section>

      {/* Subscription Plans */}
      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold text-center mb-12">구독 서비스 요금제</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlight
                    ? 'border-blue-500/60 bg-blue-950/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                    : 'border-white/10 bg-white/3'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">
                      {plan.monthlyPrice.toLocaleString()}원
                    </span>
                    <span className="text-gray-400 text-sm">/월</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-1">
                    연간 결제 시 {plan.yearlyPrice.toLocaleString()}원 (2개월 무료)
                  </p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/support"
                  className={`block text-center py-3 px-6 rounded-xl font-bold text-sm transition-colors ${
                    plan.highlight
                      ? 'bg-blue-500 hover:bg-blue-400 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sensor & Hardware Products */}
      <section className="py-20 bg-white/3 border-t border-white/10">
        <Container>
          <h2 className="text-2xl font-bold text-center mb-4">센서·하드웨어 제품 가격</h2>
          <p className="text-gray-400 text-center text-sm mb-12">
            모든 제품은 FarmSense 앱과 즉시 연동됩니다. 별도 구매 후 직접 설치 가능.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SENSOR_PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors"
              >
                <div>
                  <p className="font-semibold text-white text-sm">{product.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{product.desc}</p>
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="font-bold text-green-400 text-sm">
                    {product.price.toLocaleString()}원
                  </p>
                  <p className="text-gray-500 text-xs">/{product.unit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/sensor-configurator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-bold text-sm transition-colors"
            >
              센서 구성 자동 계산기 →
            </Link>
          </div>
        </Container>
      </section>

      {/* Notes */}
      <section className="py-12 border-t border-white/10">
        <Container className="max-w-3xl">
          <div className="bg-white/5 rounded-2xl p-8 text-sm text-gray-400 space-y-2 leading-relaxed">
            <p className="text-white font-bold mb-4">결제 및 환불 안내</p>
            <p>· 구독 요금은 매월 결제일에 자동 결제됩니다.</p>
            <p>· 결제 수단: 신용카드 (비자/마스터/국내 카드 전체 지원)</p>
            <p>· 14일 이내 미사용 시 전액 환불 가능합니다.</p>
            <p>· 센서·하드웨어 제품은 배송 완료 후 7일 이내 미개봉 시 반품 가능합니다.</p>
            <p>· 자세한 환불 정책은{' '}
              <Link href="/refund-policy" className="text-green-400 hover:underline">환불·취소 정책</Link>을 참고하세요.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
