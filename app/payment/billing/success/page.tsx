'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('farmsense_access') || getCookie('access_token');
}

function BillingSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [billingInfo, setBillingInfo] = useState<{
    amount: number;
    orderName: string;
    approvedAt?: string;
  } | null>(null);

  // 토스가 successUrl에 붙여주는 파라미터
  const authKey     = searchParams.get('authKey') || '';
  const customerKey = searchParams.get('customerKey') || '';

  useEffect(() => {
    const run = async () => {
      if (!authKey || !customerKey) {
        setErrorMsg('빌링 인증 정보가 누락됐습니다. (authKey 또는 customerKey 없음)');
        setLoading(false);
        return;
      }

      const token = getToken();
      if (!token) {
        setErrorMsg('로그인 정보가 만료됐습니다. 다시 로그인해주세요.');
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/api/billing/confirm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          // ★ Django는 snake_case(auth_key, customer_key) 기대
          body: JSON.stringify({
            auth_key:     authKey,
            customer_key: customerKey,
          }),
        });

        const data = await res.json();

        if (res.ok && (data.success || data.billing_key || data.billingKey)) {
          setDone(true);
          setBillingInfo({
            amount:     data.amount     ?? 10000,
            orderName:  data.orderName  ?? 'FarmSense 월간 구독',
            approvedAt: data.approvedAt ?? undefined,
          });
          // 5초 후 계정 페이지로 이동
          setTimeout(() => router.push('/account'), 5000);
        } else {
          const msg = data.message || data.error || data.detail || '빌링키 등록에 실패했습니다.';
          setErrorMsg(`${msg} (HTTP ${res.status})`);
        }
      } catch (err) {
        console.error('Billing confirm error:', err);
        setErrorMsg('구독 등록 요청 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [authKey, customerKey]); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-gray-400 text-sm">카드 등록 처리 중...</p>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto text-3xl">✕</div>
        <h1 className="text-2xl font-bold">카드 등록 실패</h1>
        <p className="text-gray-400 text-sm">{errorMsg}</p>
        <Link
          href="/payment"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-sm font-bold text-white transition-colors"
        >
          다시 시도
        </Link>
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
          <span className="text-white font-semibold">{billingInfo?.orderName ?? 'FarmSense 월간 구독'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">결제 주기</span>
          <span className="text-white font-semibold">매월 자동결제</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">결제 금액</span>
          <span className="text-green-400 font-bold">
            {billingInfo ? `${billingInfo.amount.toLocaleString()}원/월` : '10,000원/월'}
          </span>
        </div>
        {billingInfo?.approvedAt && (
          <div className="flex justify-between">
            <span className="text-gray-400">결제 일시</span>
            <span className="text-white text-xs">
              {new Date(billingInfo.approvedAt).toLocaleString('ko-KR')}
            </span>
          </div>
        )}
      </div>

      <p className="text-gray-400 text-xs">
        카드가 등록되어 오늘부터 서비스가 활성화됩니다.<br />
        5초 후 계정 페이지로 이동합니다.
      </p>

      <div className="flex gap-4 justify-center">
        <Link
          href="/account"
          className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-sm"
        >
          계정으로 이동 →
        </Link>
        <Link
          href="/support"
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors text-sm"
        >
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
