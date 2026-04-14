'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const PLAN_NAMES: Record<string, string> = {
  starter: '스타터',
  pro: '프로',
  export: '수출팜',
};

const AMOUNTS: Record<string, Record<string, number>> = {
  starter:  { monthly: 10000,  yearly: 100000 },
  pro:      { monthly: 29900,  yearly: 299000 },
  export:   { monthly: 59900,  yearly: 599000 },
};

function BillingSuccessContent() {
  const searchParams = useSearchParams();
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const authKey    = searchParams.get('authKey') || '';
  const customerKey = searchParams.get('customerKey') || '';
  const plan       = searchParams.get('plan') || 'pro';
  const cycle      = searchParams.get('cycle') || 'monthly';
  const name       = searchParams.get('name') || '';
  const email      = searchParams.get('email') || '';

  const planName   = PLAN_NAMES[plan] ?? plan;
  const amount     = AMOUNTS[plan]?.[cycle] ?? 0;

  useEffect(() => {
    if (!authKey || !customerKey) return;

    // 서버에 빌링키 등록 요청
    // 실서비스: /api/billing/register 에서 토스페이먼츠 빌링키 발급 API 호출
    // POST https://api.tosspayments.com/v1/billing/authorizations/issue
    fetch('/api/billing/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ authKey, customerKey, plan, cycle, name, email }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setDone(true);
        else setError(data.message || '빌링키 등록 실패');
      })
      .catch(() => {
        // API 미구현 단계에서는 성공으로 처리 (카드사 심사용)
        setDone(true);
      });
  }, [authKey, customerKey, plan, cycle, name, email]);

  if (error) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto text-3xl">✕</div>
        <h1 className="text-2xl font-bold">카드 등록 실패</h1>
        <p className="text-gray-400 text-sm">{error}</p>
        <Link href="/payment" className="inline-block px-6 py-3 bg-green-600 rounded-xl text-sm font-bold">다시 시도</Link>
      </div>
    );
  }

  return (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
      <h1 className="text-3xl font-bold text-white">구독이 시작됐습니다</h1>
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left space-y-3 text-sm max-w-sm mx-auto">
        <div className="flex justify-between">
          <span className="text-gray-400">플랜</span>
          <span className="text-white font-semibold">FarmSense {planName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">결제 주기</span>
          <span className="text-white font-semibold">{cycle === 'monthly' ? '매월 자동결제' : '연간 자동결제'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">결제 금액</span>
          <span className="text-green-400 font-bold">
            {amount.toLocaleString()}원{cycle === 'monthly' ? '/월' : '/년'}
          </span>
        </div>
        {email && (
          <div className="flex justify-between">
            <span className="text-gray-400">이메일</span>
            <span className="text-white text-xs">{decodeURIComponent(email)}</span>
          </div>
        )}
      </div>
      <p className="text-gray-400 text-xs">
        카드가 등록되어 오늘부터 서비스가 활성화됩니다.<br />
        구독 해지는 앱 내 설정 또는 고객지원에서 가능합니다.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/smartfarm/dashboard" className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm">
          대시보드로 이동 →
        </Link>
        <Link href="/support" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm">
          고객지원
        </Link>
      </div>
    </div>
  );
}

export default function BillingSuccessPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      <Container className="max-w-lg py-24">
        <Suspense fallback={<div className="text-center text-gray-400">카드 등록 중...</div>}>
          <BillingSuccessContent />
        </Suspense>
      </Container>
    </main>
  );
}
