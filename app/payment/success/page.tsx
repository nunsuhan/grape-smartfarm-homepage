'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { getAccessToken } from '@/lib/api-client';

interface PaymentInfo {
  orderName: string;
  amount: number;
  method?: string;
  approvedAt?: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const [info, setInfo] = useState<PaymentInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const confirmedRef = useRef(false);

  useEffect(() => {
    // 중복 호출 방지 (React StrictMode 2회 실행 + 리렌더 대비)
    if (confirmedRef.current) return;
    confirmedRef.current = true;

    const paymentKey = searchParams.get('paymentKey');
    const orderId    = searchParams.get('orderId');
    const amount     = searchParams.get('amount');

    if (!paymentKey || !orderId || !amount) {
      setError('결제 정보가 올바르지 않습니다.');
      setLoading(false);
      return;
    }

    const token = getAccessToken();
    fetch('/api/billing/payment/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount: Number(amount),
      }),
    })
      .then(async (r) => {
        const data = await r.json();

        // 400: 이미 처리된 결제(중복) → 성공으로 간주
        if (r.status === 400) {
          const msg: string = data.error || data.message || data.detail || '';
          if (
            msg.includes('이미') ||
            msg.includes('already') ||
            msg.includes('duplicate') ||
            msg.includes('ALREADY')
          ) {
            setInfo({
              orderName:  'FarmSense 연간 구독',
              amount:     Number(amount),
              approvedAt: undefined,
            });
            return;
          }
          setError(msg || '결제 승인에 실패했습니다.');
          return;
        }

        if (!r.ok) {
          setError(data.error || data.message || data.detail || `결제 승인 실패 (${r.status})`);
          return;
        }

        // 성공 — Django 응답: { success, payment: {...} } 또는 { success, orderName, amount, ... }
        const payment = data.payment ?? data;
        setInfo({
          orderName:  payment.orderName  ?? data.orderName  ?? 'FarmSense 연간 구독',
          amount:     payment.amount     ?? data.amount     ?? Number(amount),
          method:     payment.method     ?? data.method,
          approvedAt: payment.approvedAt ?? data.approvedAt,
        });
      })
      .catch(() => {
        setError('결제 승인 요청 중 오류가 발생했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-gray-400 text-sm">결제 승인 처리 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
          <span className="text-3xl">✕</span>
        </div>
        <h1 className="text-2xl font-bold text-white">결제 승인 실패</h1>
        <p className="text-gray-400 text-sm">{error}</p>
        <Link
          href="/payment"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
        >
          다시 시도
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
        <span className="text-3xl">✓</span>
      </div>
      <h1 className="text-3xl font-bold text-white">결제 완료</h1>
      {info && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">서비스</span>
            <span className="text-white font-semibold">{info.orderName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">결제 금액</span>
            <span className="text-green-400 font-bold">
              {info.amount.toLocaleString()}원
            </span>
          </div>
          {info.method && (
            <div className="flex justify-between">
              <span className="text-gray-400">결제 수단</span>
              <span className="text-white">{info.method}</span>
            </div>
          )}
          {info.approvedAt && (
            <div className="flex justify-between">
              <span className="text-gray-400">승인 일시</span>
              <span className="text-white text-xs">
                {new Date(info.approvedAt).toLocaleString('ko-KR')}
              </span>
            </div>
          )}
        </div>
      )}
      <p className="text-gray-400 text-sm">팜센스 서비스가 즉시 활성화됩니다.</p>
      <Link
        href="/smartfarm/dashboard"
        className="inline-block px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
      >
        대시보드로 이동 →
      </Link>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      <Container className="max-w-lg py-24">
        <Suspense fallback={<div className="text-center text-gray-400">처리 중...</div>}>
          <SuccessContent />
        </Suspense>
      </Container>
    </main>
  );
}
