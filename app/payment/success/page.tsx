'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [info, setInfo] = useState<{ orderName?: string; amount?: string } | null>(null);

  useEffect(() => {
    const paymentKey = searchParams.get('paymentKey');
    const orderId = searchParams.get('orderId');
    const amount = searchParams.get('amount');
    const orderName = searchParams.get('orderName');

    if (paymentKey && orderId && amount) {
      // 실서비스: 서버사이드에서 결제 승인 API 호출
      // POST https://api.tosspayments.com/v1/payments/confirm
      setInfo({ orderName: orderName ?? '구독 서비스', amount });
    }
  }, [searchParams]);

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
              {Number(info.amount).toLocaleString()}원
            </span>
          </div>
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
