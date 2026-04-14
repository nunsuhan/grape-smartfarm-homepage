'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { getAccessToken } from '@/lib/api-client';

function BillingSuccessContent() {
  const searchParams = useSearchParams();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [billingInfo, setBillingInfo] = useState<{
    amount: number;
    orderName: string;
    approvedAt?: string;
  } | null>(null);

  const authKey       = searchParams.get('authKey') || '';
  const customerKey   = searchParams.get('customerKey') || '';

  useEffect(() => {
    if (!authKey || !customerKey) {
      setError('빌링 인증 정보가 누락됐습니다.');
      setLoading(false);
      return;
    }

    const token = getAccessToken();
    fetch('/api/billing/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ authKey, customerKey }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setDone(true);
          setBillingInfo({
            amount: data.billing.amount,
            orderName: data.billing.orderName || 'FarmSense 월간 구독',
            approvedAt: data.billing.approvedAt,
          });
        } else {
          setError(data.message || '빌링키 등록에 실패했습니다.');
        }
      })
      .catch((err) => {
        console.error('Billing register error:', err);
        setError('구독 등록 요청 중 오류가 발생했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [authKey, customerKey]);

  if (loading) {
    return (
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-gray-400 text-sm">카드 등록 및 첫 결제 처리 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto text-3xl">✕</div>
        <h1 className="text-2xl font-bold">카드 등록 실패</h1>
        <p className="text-gray-400 text-sm">{error}</p>
        <Link href="/payment" className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 rounded-xl text-sm font-bold text-white transition-colors">다시 시도</Link>
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
          <span className="text-white font-semibold">FarmSense 월간 구독</span>
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
            <span className="text-white text-xs">{new Date(billingInfo.approvedAt).toLocaleString('ko-KR')}</span>
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
