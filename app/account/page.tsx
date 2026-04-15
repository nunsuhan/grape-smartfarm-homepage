'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { useAuthStore } from '@/lib/auth-store';
import { getAccessToken } from '@/lib/api-client';
import { Loader2 } from 'lucide-react';

interface Subscription {
  plan: string;
  status: string;
  current_period_end?: string;
}

export default function AccountPage() {
  const router = useRouter();
  const { user, isLoggedIn, hydrated, logout, hydrate } = useAuthStore();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [subLoading, setSubLoading] = useState(true);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchSubscription = async () => {
      try {
        const token = getAccessToken();
        const res = await fetch('/api/billing/subscription', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setSubscription(data);
        }
      } catch {
        // 구독 정보 조회 실패 무시
      } finally {
        setSubLoading(false);
      }
    };
    fetchSubscription();
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!hydrated || !isLoggedIn) return null;

  return (
    <main className="min-h-screen bg-[#111] text-white pt-20 font-sans">
      <Container className="max-w-md py-14">
        <h1 className="text-2xl font-bold mb-8">마이페이지</h1>

        {/* 사용자 정보 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 mb-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">계정 정보</h2>
          <div className="space-y-2 text-sm">
            {user?.phone && (
              <div className="flex justify-between">
                <span className="text-gray-400">휴대폰</span>
                <span className="font-semibold">{user.phone}</span>
              </div>
            )}
            {user?.username && (
              <div className="flex justify-between">
                <span className="text-gray-400">사용자명</span>
                <span className="font-semibold">{user.username}</span>
              </div>
            )}
            {user?.email && (
              <div className="flex justify-between">
                <span className="text-gray-400">이메일</span>
                <span className="font-semibold">{user.email}</span>
              </div>
            )}
            {user?.farm_name && (
              <div className="flex justify-between">
                <span className="text-gray-400">농장명</span>
                <span className="font-semibold">{user.farm_name}</span>
              </div>
            )}
          </div>
        </div>

        {/* 구독 상태 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 mb-6">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider">구독 상태</h2>
          {subLoading ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
            </div>
          ) : subscription ? (
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">요금제</span>
                <span className="font-semibold">{subscription.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">상태</span>
                <span className={`font-semibold ${subscription.status === 'active' ? 'text-green-400' : 'text-yellow-400'}`}>
                  {subscription.status === 'active' ? '활성' : subscription.status}
                </span>
              </div>
              {subscription.current_period_end && (
                <div className="flex justify-between">
                  <span className="text-gray-400">다음 결제일</span>
                  <span className="font-semibold">{subscription.current_period_end}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-gray-400">
              <p>구독 중인 요금제가 없습니다.</p>
              <Link href="/payment" className="text-green-400 hover:underline mt-2 inline-block">
                요금제 시작하기 →
              </Link>
            </div>
          )}
        </div>

        {/* 액션 버튼 */}
        <div className="space-y-3">
          <Link
            href="/payment"
            className="block w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors text-center text-base"
          >
            결제 / 요금제 변경
          </Link>
          <button
            onClick={handleLogout}
            className="w-full py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 font-medium rounded-xl transition-colors text-base"
          >
            로그아웃
          </button>
        </div>
      </Container>
    </main>
  );
}
