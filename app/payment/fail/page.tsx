'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

function FailContent() {
  const searchParams = useSearchParams();
  const errorMessage = searchParams.get('message') || '결제가 취소되었습니다.';
  const errorCode = searchParams.get('code');

  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
        <span className="text-3xl">✕</span>
      </div>
      <h1 className="text-3xl font-bold text-white">결제 실패</h1>
      <div className="bg-white/5 border border-red-500/20 rounded-xl p-5 text-left space-y-2 text-sm">
        <p className="text-gray-300">{errorMessage}</p>
        {errorCode && <p className="text-gray-500 text-xs">오류 코드: {errorCode}</p>}
      </div>
      <div className="flex gap-4 justify-center">
        <Link
          href="/payment"
          className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
        >
          다시 시도
        </Link>
        <Link
          href="/support"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm"
        >
          고객 문의
        </Link>
      </div>
    </div>
  );
}

export default function PaymentFailPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      <Container className="max-w-lg py-24">
        <Suspense fallback={<div className="text-center text-gray-400">처리 중...</div>}>
          <FailContent />
        </Suspense>
      </Container>
    </main>
  );
}
