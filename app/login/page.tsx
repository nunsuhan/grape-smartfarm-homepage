'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useAuthStore } from '@/lib/auth-store';

type Step = 'phone' | 'otp';

function formatPhone(value: string): string {
  const d = value.replace(/[^0-9]/g, '').slice(0, 11);
  if (d.length < 4) return d;
  if (d.length < 8) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
}

function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[^0-9]/g, '');
  return /^01[016789]\d{7,8}$/.test(cleaned);
}

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoggedIn, hydrated, hydrate } = useAuthStore();

  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [sendLoading, setSendLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [resendCooldown, setResendCooldown] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resendTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const otpInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (hydrated && isLoggedIn) {
      const next = searchParams.get('next') || '/account';
      router.replace(next);
    }
  }, [hydrated, isLoggedIn, router, searchParams]);

  // Main countdown timer
  useEffect(() => {
    if (countdown <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [countdown > 0 ? 'active' : 'inactive']); // eslint-disable-line react-hooks/exhaustive-deps

  // Resend cooldown timer
  useEffect(() => {
    if (resendCooldown <= 0) {
      if (resendTimerRef.current) clearInterval(resendTimerRef.current);
      return;
    }
    resendTimerRef.current = setInterval(() => {
      setResendCooldown((c) => {
        if (c <= 1) {
          clearInterval(resendTimerRef.current!);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => {
      if (resendTimerRef.current) clearInterval(resendTimerRef.current);
    };
  }, [resendCooldown > 0 ? 'active' : 'inactive']); // eslint-disable-line react-hooks/exhaustive-deps

  const cleanedPhone = phone.replace(/[^0-9]/g, '');

  const handleSendCode = async () => {
    if (!isValidPhone(phone)) return;
    setSendLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/phone/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanedPhone }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStep('otp');
        setOtp('');
        setCountdown(180);
        setResendCooldown(60);
        setTimeout(() => otpInputRef.current?.focus(), 100);
      } else {
        setError(data.message || data.error || 'SMS 발송에 실패했습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    } finally {
      setSendLoading(false);
    }
  };

  const handleVerify = useCallback(async (code: string) => {
    if (code.length !== 6 || verifyLoading) return;
    setVerifyLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/phone/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanedPhone, code }),
      });
      const data = await res.json();
      // Django SimpleJWT: { access, refresh } 또는 { token, refresh } 둘 다 처리
      const accessToken = data.access || data.token;
      const refreshToken = data.refresh;
      if (res.ok && (accessToken || data.success)) {
        // Store tokens in localStorage
        if (accessToken) localStorage.setItem('farmsense_access', accessToken);
        if (refreshToken) localStorage.setItem('farmsense_refresh', refreshToken);

        // Also set cookie for middleware
        if (accessToken) {
          document.cookie = `access_token=${accessToken}; path=/; max-age=${7 * 24 * 3600}; SameSite=Lax`;
        }

        // Hydrate auth store
        hydrate();

        // Redirect based on user type
        if (data.is_new_user) {
          router.push('/payment?welcome=1');
        } else {
          router.push(searchParams.get('next') || '/account');
        }
      } else {
        setError(data.message || data.error || '인증에 실패했습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    } finally {
      setVerifyLoading(false);
    }
  }, [cleanedPhone, verifyLoading, hydrate, router, searchParams]);

  const handleResend = async () => {
    if (resendCooldown > 0) return;
    setSendLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/phone/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: cleanedPhone }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setCountdown(180);
        setResendCooldown(60);
        setOtp('');
        otpInputRef.current?.focus();
      } else {
        setError(data.message || data.error || 'SMS 발송에 실패했습니다.');
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.');
    } finally {
      setSendLoading(false);
    }
  };

  const handleOtpChange = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, '').slice(0, 6);
    setOtp(cleaned);
    if (cleaned.length === 6) {
      handleVerify(cleaned);
    }
  };

  const handleGoBack = () => {
    setStep('phone');
    setOtp('');
    setError('');
    setCountdown(0);
    setResendCooldown(0);
  };

  const formatCountdown = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  if (hydrated && isLoggedIn) return null;

  return (
    <main className="min-h-screen bg-[#111] text-white flex items-center justify-center px-4 font-sans">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold tracking-tight">
              Farm<span className="text-green-400">Sense</span>
            </span>
          </Link>
        </div>

        {step === 'phone' && (
          <div className="space-y-6">
            <h1 className="text-xl font-bold text-center">
              휴대폰 번호로 시작하세요
            </h1>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  휴대폰 번호
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  placeholder="010-1234-5678"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-base placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                  autoComplete="tel"
                  autoFocus
                />
              </div>

              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}

              <button
                onClick={handleSendCode}
                disabled={!isValidPhone(phone) || sendLoading}
                className="w-full py-3.5 bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-base"
              >
                {sendLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    발송 중...
                  </span>
                ) : (
                  '인증번호 받기'
                )}
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 leading-relaxed">
              인증번호를 받으시면{' '}
              <Link href="/terms" className="text-green-400 hover:underline">
                이용약관
              </Link>
              과{' '}
              <Link href="/privacy" className="text-green-400 hover:underline">
                개인정보처리방침
              </Link>
              에 동의한 것으로 간주됩니다.
            </p>
          </div>
        )}

        {step === 'otp' && (
          <div className="space-y-6">
            <div>
              <button
                onClick={handleGoBack}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors mb-3"
              >
                <ArrowLeft className="w-4 h-4" />
                {formatPhone(cleanedPhone)} 로 발송
              </button>
              <h1 className="text-xl font-bold">인증번호 6자리</h1>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  ref={otpInputRef}
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => handleOtpChange(e.target.value)}
                  disabled={countdown === 0}
                  placeholder="000000"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-center text-2xl tracking-[0.4em] placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50"
                  autoComplete="one-time-code"
                />
                <div className="flex items-center justify-between mt-2">
                  <span
                    className={`text-sm font-mono ${
                      countdown > 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {countdown > 0
                      ? `유효시간 ${formatCountdown(countdown)}`
                      : '인증시간이 만료되었습니다'}
                  </span>
                  <button
                    onClick={handleResend}
                    disabled={resendCooldown > 0 || sendLoading}
                    className="text-sm text-green-400 hover:text-green-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors"
                  >
                    {resendCooldown > 0
                      ? `재발송 (${resendCooldown}초)`
                      : '재발송'}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  {error}
                </div>
              )}

              <button
                onClick={() => handleVerify(otp)}
                disabled={otp.length !== 6 || verifyLoading || countdown === 0}
                className="w-full py-3.5 bg-green-600 hover:bg-green-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors text-base"
              >
                {verifyLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    확인 중...
                  </span>
                ) : (
                  '확인'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
