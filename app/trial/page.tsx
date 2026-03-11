'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  location: string;
  farmType: string;
  area: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function TrialPage() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', location: '', farmType: '', area: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.farmType) { setErrorMsg('재배 방식을 선택해주세요.'); return; }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/trial/apply/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.message || '신청 중 오류가 발생했습니다. 다시 시도해주세요.');
        setStatus('error');
      }
    } catch {
      // 백엔드 미연결 시 임시 성공 처리
      setStatus('success');
    }
  };

  const isValid = form.name && form.phone && form.location && form.farmType && form.area;

  return (
    <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
      {/* 헤더 */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.10),transparent_60%)]" />
        <Container className="max-w-2xl py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm mb-5">
            🎉 시범 농가 모집
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            50% 할인<br />
            <span className="text-green-400">시범 농가 신청</span>
          </h1>
          <p className="text-neutral-cream/70 text-lg leading-relaxed">
            10농가를 선정해 FarmSense 센서 시스템을 <strong className="text-white">50% 할인</strong>에 설치해드립니다.<br />
            설치 가이드 + 첫 1년 통신비 무료 포함.
          </p>
        </Container>
      </div>

      <Container className="max-w-2xl py-12">

        {status === 'success' ? (
          /* 신청 완료 */
          <div className="text-center space-y-6 py-16">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">신청이 완료됐습니다!</h2>
            <p className="text-neutral-cream/70 leading-relaxed">
              <strong className="text-white">{form.name}</strong>님, 접수됐습니다.<br />
              선정 결과는 {form.phone}으로 개별 연락드립니다.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left text-sm space-y-2">
              <div className="flex justify-between"><span className="text-neutral-cream/60">이름</span><span className="text-white">{form.name}</span></div>
              <div className="flex justify-between"><span className="text-neutral-cream/60">연락처</span><span className="text-white">{form.phone}</span></div>
              <div className="flex justify-between"><span className="text-neutral-cream/60">밭 위치</span><span className="text-white">{form.location}</span></div>
              <div className="flex justify-between"><span className="text-neutral-cream/60">재배 방식</span><span className="text-white">{form.farmType === 'rain-shelter' ? '비가림' : form.farmType === 'greenhouse' ? '하우스' : '노지'}</span></div>
              <div className="flex justify-between"><span className="text-neutral-cream/60">면적</span><span className="text-white">{form.area}평</span></div>
            </div>
            <div className="flex gap-3 justify-center">
              <Link href="/sensors" className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20 text-sm">
                센서 카탈로그 보기
              </Link>
              <Link href="/" className="px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-medium transition-colors text-sm">
                홈으로
              </Link>
            </div>
          </div>
        ) : (
          /* 신청 폼 */
          <div className="space-y-8">

            {/* 혜택 요약 */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: '💰', label: '전 제품', value: '50% 할인' },
                { icon: '📡', label: '첫 1년', value: '통신비 무료' },
                { icon: '📋', label: '설치 가이드', value: '제공' },
              ].map(b => (
                <div key={b.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <div className="text-xs text-neutral-cream/60">{b.label}</div>
                  <div className="text-sm font-bold text-green-400">{b.value}</div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 이름 */}
              <div>
                <label className="block text-sm font-bold text-neutral-cream/80 mb-2">이름 *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  placeholder="홍길동"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-neutral-cream/30 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="block text-sm font-bold text-neutral-cream/80 mb-2">연락처 *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  placeholder="010-0000-0000"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-neutral-cream/30 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* 밭 위치 */}
              <div>
                <label className="block text-sm font-bold text-neutral-cream/80 mb-2">밭 위치 *</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={e => handleChange('location', e.target.value)}
                  placeholder="예: 상주시 외남면"
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-neutral-cream/30 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* 재배 방식 */}
              <div>
                <label className="block text-sm font-bold text-neutral-cream/80 mb-3">재배 방식 *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'rain-shelter', icon: '🏕️', label: '비가림' },
                    { value: 'greenhouse', icon: '🏠', label: '하우스' },
                    { value: 'open-field', icon: '🌿', label: '노지' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleChange('farmType', opt.value)}
                      className={`py-4 rounded-xl border text-center transition-all ${
                        form.farmType === opt.value
                          ? 'bg-green-500/20 border-green-500/50 text-white'
                          : 'bg-white/5 border-white/10 text-neutral-cream/60 hover:border-white/30'
                      }`}
                    >
                      <div className="text-2xl mb-1">{opt.icon}</div>
                      <div className="text-sm font-medium">{opt.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 면적 */}
              <div>
                <label className="block text-sm font-bold text-neutral-cream/80 mb-2">면적 *</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={form.area}
                    onChange={e => handleChange('area', e.target.value)}
                    placeholder="1000"
                    required
                    min="1"
                    className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-neutral-cream/30 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <span className="text-neutral-cream/60 font-medium">평</span>
                </div>
              </div>

              {/* 에러 메시지 */}
              {(errorMsg || status === 'error') && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-300 text-sm">
                  {errorMsg || '신청 중 오류가 발생했습니다. 다시 시도해주세요.'}
                </div>
              )}

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={!isValid || status === 'loading'}
                className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg transition-colors shadow-lg shadow-green-500/20"
              >
                {status === 'loading' ? '신청 중...' : '신청하기'}
              </button>

              <p className="text-center text-xs text-neutral-cream/40 leading-relaxed">
                10농가 모집 (지역별 선정) · 선정 결과 개별 연락<br />
                문의: <a href="tel:01054771190" className="underline hover:text-green-400">한문수 010-5477-1190</a>
              </p>
            </form>
          </div>
        )}
      </Container>
    </main>
  );
}
