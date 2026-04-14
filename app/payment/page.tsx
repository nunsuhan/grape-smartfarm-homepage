'use client';

import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

// 토스페이먼츠 SDK 타입
declare global {
  interface Window {
    TossPayments: (clientKey: string) => {
      requestPayment: (method: string, options: Record<string, unknown>) => Promise<void>;
    };
  }
}

const PLANS = [
  { id: 'starter_monthly', name: '스타터 (월간)', amount: 10000 },
  { id: 'pro_monthly', name: '프로 (월간)', amount: 29900 },
  { id: 'export_monthly', name: '수출팜 (월간)', amount: 59900 },
  { id: 'starter_yearly', name: '스타터 (연간)', amount: 100000 },
  { id: 'pro_yearly', name: '프로 (연간)', amount: 299000 },
  { id: 'export_yearly', name: '수출팜 (연간)', amount: 599000 },
  { id: 'lifetime', name: '평생회원권', amount: 490000 },
];

// 테스트 클라이언트 키 (카드사 심사용 — 실서비스 전환 시 실제 키로 교체)
const TOSS_CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || 'test_ck_Poxy1XQL8R96EXw9Zxg9r7nO5Wml';

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState(PLANS[1]);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // 토스페이먼츠 SDK 로드
    if (document.querySelector('script[src*="tosspayments"]')) {
      setSdkReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://js.tosspayments.com/v1/payment';
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.head.appendChild(script);
    scriptRef.current = script;
  }, []);

  const handlePayment = async () => {
    if (!sdkReady) return;
    if (!customerName.trim() || !customerEmail.trim()) {
      alert('이름과 이메일을 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const tossPayments = window.TossPayments(TOSS_CLIENT_KEY);
      const orderId = `farmsense_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

      await tossPayments.requestPayment('카드', {
        amount: selectedPlan.amount,
        orderId,
        orderName: `FarmSense ${selectedPlan.name}`,
        customerName: customerName.trim(),
        customerEmail: customerEmail.trim(),
        successUrl: `${window.location.origin}/payment/success`,
        failUrl: `${window.location.origin}/payment/fail`,
      });
    } catch (err: unknown) {
      if (err instanceof Error && err.message !== 'PAYMENT_CANCELED') {
        console.error('결제 오류:', err);
        alert('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      <Container className="max-w-xl py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">서비스 결제</h1>
          <p className="text-gray-400 text-sm">팜센스(FarmSense) 구독 신청</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
          {/* 플랜 선택 */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-3">플랜 선택</label>
            <div className="space-y-2">
              {PLANS.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl border text-sm transition-colors ${
                    selectedPlan.id === plan.id
                      ? 'border-green-500 bg-green-500/10 text-white'
                      : 'border-white/10 bg-white/3 text-gray-300 hover:border-white/30'
                  }`}
                >
                  <span>{plan.name}</span>
                  <span className="font-bold">{plan.amount.toLocaleString()}원</span>
                </button>
              ))}
            </div>
          </div>

          {/* 고객 정보 */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">이름</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="홍길동"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">이메일</label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="farm@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500"
            />
          </div>

          {/* 결제 금액 표시 */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 flex justify-between items-center">
            <span className="text-sm text-gray-300">결제 금액</span>
            <span className="text-lg font-bold text-green-400">
              {selectedPlan.amount.toLocaleString()}원
            </span>
          </div>

          {/* 결제 버튼 */}
          <button
            onClick={handlePayment}
            disabled={!sdkReady || loading}
            className="w-full py-4 bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-sm"
          >
            {loading ? '처리 중...' : !sdkReady ? 'SDK 로딩 중...' : `신용카드로 결제하기 (${selectedPlan.amount.toLocaleString()}원)`}
          </button>

          <p className="text-center text-xs text-gray-500">
            결제는 토스페이먼츠를 통해 안전하게 처리됩니다.{' '}
            <Link href="/refund-policy" className="text-green-400 hover:underline">환불 정책 보기</Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
