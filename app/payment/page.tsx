'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

declare global {
  interface Window {
    TossPayments: (clientKey: string) => {
      // v1 SDK: 첫 번째 인자가 method 문자열
      requestPayment: (method: string, options: Record<string, unknown>) => Promise<void>;
      requestBillingAuth: (method: string, options: Record<string, unknown>) => Promise<void>;
    };
  }
}

const TOSS_CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || 'test_ck_Poxy1XQL8R96EXw9Zxg9r7nO5Wml';
const MONTHLY_AMOUNT = 10000;
const YEARLY_AMOUNT  = 100000;

type Cycle = 'monthly' | 'yearly';
type Step  = 'plan' | 'pay';

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('farmsense_access');
}

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const isWelcome = searchParams.get('welcome') === '1';

  const [step,  setStep]  = useState<Step>('plan');
  const [cycle, setCycle] = useState<Cycle>('monthly');
  const [sdkReady,  setSdkReady]  = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  // 토큰 없으면 로그인으로 — window.location으로 확실하게
  useEffect(() => {
    const token = getToken();
    if (!token) {
      window.location.href = '/login?next=/payment';
    }
  }, []);

  // 토스 SDK 로드 (v1)
  useEffect(() => {
    if (document.querySelector('script[src*="tosspayments"]')) { setSdkReady(true); return; }
    const s = document.createElement('script');
    s.src = 'https://js.tosspayments.com/v1/payment';
    s.async = true;
    s.onload = () => setSdkReady(true);
    document.head.appendChild(s);
  }, []);

  // ── checkout: Django에서 customer_key 받기 ──────────────────
  const createCheckout = async (plan: 'monthly' | 'yearly'): Promise<string> => {
    const token = getToken();
    if (!token) {
      window.location.href = '/login?next=/payment';
      throw new Error('로그인이 필요합니다.');
    }

    const res = await fetch('/api/billing/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ plan }),
    });

    if (res.status === 401) {
      localStorage.removeItem('farmsense_access');
      localStorage.removeItem('farmsense_refresh');
      window.location.href = '/login?next=/payment';
      throw new Error('토큰이 만료되었습니다. 다시 로그인해주세요.');
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        (data.error || data.detail || `결제 준비 실패 (${res.status})`) as string
      );
    }

    const customerKey = (data.customer_key || data.customerKey) as string;
    if (!customerKey) throw new Error('customer_key가 응답에 없습니다.');
    return customerKey;
  };

  // ── 월간: 빌링키 발급 (자동결제) ───────────────────────────
  const handleMonthly = async () => {
    if (!sdkReady) return;
    setPayLoading(true);
    setPayError(null);
    try {
      const customerKey = await createCheckout('monthly');
      const toss = window.TossPayments(TOSS_CLIENT_KEY);

      // 토스 v1 SDK — 빌링키 발급
      await toss.requestBillingAuth('카드', {
        customerKey,
        successUrl: `${window.location.origin}/payment/billing/success`,
        failUrl:    `${window.location.origin}/payment/fail`,
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '카드 등록 중 오류가 발생했습니다.';
      if (!msg.includes('CANCEL')) setPayError(msg);
    } finally {
      setPayLoading(false);
    }
  };

  // ── 연간: 단건 결제 (customerKey 없음) ─────────────────────
  const handleYearly = async () => {
    if (!sdkReady) return;
    setPayLoading(true);
    setPayError(null);
    try {
      const toss    = window.TossPayments(TOSS_CLIENT_KEY);
      const orderId = `fs_yearly_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

      // 토스 v1 SDK — 단건결제
      await toss.requestPayment('카드', {
        amount: YEARLY_AMOUNT,
        orderId,
        orderName: 'FarmSense 연간 구독',
        successUrl: `${window.location.origin}/payment/success?type=yearly`,
        failUrl:    `${window.location.origin}/payment/fail`,
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : '결제 중 오류가 발생했습니다.';
      if (!msg.includes('CANCEL')) setPayError(msg);
    } finally {
      setPayLoading(false);
    }
  };

  const amount = cycle === 'monthly' ? MONTHLY_AMOUNT : YEARLY_AMOUNT;

  const goToStep = (s: Step) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      <Container className="max-w-md py-14">

        {/* Welcome 배너 */}
        {isWelcome && (
          <div className="bg-green-900/40 border border-green-700 rounded-lg p-4 mb-6 text-center">
            <p className="text-green-400 font-semibold">환영합니다!</p>
            <p className="text-green-300 text-sm mt-1">첫 2개월 무료체험을 시작하세요</p>
          </div>
        )}

        {/* 단계 표시 */}
        <div className="flex items-center justify-center gap-2 mb-10 text-xs">
          {(['plan', 'pay'] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                step === s
                  ? 'bg-green-500 text-white'
                  : (['plan', 'pay'] as Step[]).indexOf(step) > i
                    ? 'bg-green-800 text-green-300'
                    : 'bg-white/10 text-gray-500'
              }`}>{i + 1}</div>
              <span className={step === s ? 'text-white font-semibold' : 'text-gray-500'}>
                {s === 'plan' ? '요금제' : '결제'}
              </span>
              {i < 1 && <span className="text-gray-600 mx-1">›</span>}
            </div>
          ))}
        </div>

        {/* ─── STEP 1: 요금제 선택 ─── */}
        {step === 'plan' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">요금제 선택</h1>

            <div className="flex rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setCycle('monthly')}
                className={`flex-1 py-4 text-sm font-bold transition-colors ${cycle === 'monthly' ? 'bg-green-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
              >
                월간 구독
                <p className="text-xs font-normal opacity-70 mt-0.5">매월 자동결제</p>
              </button>
              <button
                onClick={() => setCycle('yearly')}
                className={`flex-1 py-4 text-sm font-bold transition-colors ${cycle === 'yearly' ? 'bg-green-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}
              >
                연간 구독
                <p className="text-xs font-normal mt-0.5 text-yellow-400">2개월 무료</p>
              </button>
            </div>

            <div className={`rounded-2xl border p-8 text-center space-y-3 ${cycle === 'monthly' ? 'border-green-500 bg-green-500/10' : 'border-yellow-500/50 bg-yellow-500/8'}`}>
              <p className="text-gray-400 text-sm">FarmSense 스마트팜 서비스</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-black text-white">{(amount / 10000).toFixed(0)}만</span>
                <span className="text-2xl font-bold text-white">원</span>
                <span className="text-gray-400 text-sm ml-1">/{cycle === 'monthly' ? '월' : '년'}</span>
              </div>
              {cycle === 'yearly' && <p className="text-yellow-400 text-xs">월 환산 약 8,333원 · 연 20,000원 절약</p>}
              {cycle === 'monthly' && <p className="text-gray-400 text-xs">첫 14일 무료 · 언제든지 해지 가능</p>}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">포함 기능</p>
              {[
                'AI 병해 진단 및 예측 알림',
                '관개·시비 자동 추천',
                '영농일지 및 수확량 예측',
                '카카오톡·SMS 알림 연동',
                'FarmSense 앱 (Android)',
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>{f}
                </div>
              ))}
            </div>

            <button
              onClick={() => goToStep('pay')}
              className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-base"
            >
              다음 → 결제하기
            </button>
          </div>
        )}

        {/* ─── STEP 2: 결제 ─── */}
        {step === 'pay' && (
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <div className="w-full max-w-md space-y-6">
              <div className="flex items-center gap-3">
                <button onClick={() => goToStep('plan')} className="text-gray-400 hover:text-white text-sm">← 뒤로</button>
                <h1 className="text-2xl font-bold">결제</h1>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">요금제</span>
                  <span className="font-semibold">FarmSense {cycle === 'monthly' ? '월간' : '연간'} 구독</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">결제 방식</span>
                  <span className="font-semibold">{cycle === 'monthly' ? '매월 자동결제' : '연 1회 결제'}</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between items-baseline">
                  <span className="text-gray-400">결제 금액</span>
                  <span className="text-green-400 font-black text-2xl">
                    {amount.toLocaleString()}원
                    <span className="text-sm font-normal text-gray-400">/{cycle === 'monthly' ? '월' : '년'}</span>
                  </span>
                </div>
              </div>

              {cycle === 'monthly' && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl px-4 py-3 text-xs text-blue-200 leading-relaxed">
                  카드를 한 번 등록하면 매월 자동으로 결제됩니다. 앱 내 설정에서 언제든지 해지 가능합니다.
                </div>
              )}

              <button
                onClick={cycle === 'monthly' ? handleMonthly : handleYearly}
                disabled={!sdkReady || payLoading}
                className="w-full py-4 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-bold rounded-xl transition-colors text-base"
              >
                {payLoading ? '처리 중...' : !sdkReady ? '로딩 중...' :
                  cycle === 'monthly'
                    ? `카드 등록 후 월 ${MONTHLY_AMOUNT.toLocaleString()}원 구독 시작`
                    : `연 ${YEARLY_AMOUNT.toLocaleString()}원 결제하기`
                }
              </button>

              <p className="text-center text-xs text-gray-500">
                토스페이먼츠로 안전하게 처리 ·{' '}
                <Link href="/refund-policy" className="text-green-400 hover:underline">환불 정책</Link>
              </p>
            </div>
          </div>
        )}

      </Container>
    </main>
  );
}
