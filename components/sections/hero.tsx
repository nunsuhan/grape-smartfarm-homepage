'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/images/hero_bg.png"
        alt="FarmSense - AI 기반 프리미엄 농산물 데이터 인프라"
        fill
        className="object-cover"
        priority
      />

      {/* 어두운 오버레이 — 텍스트 가독성 확보 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 mx-auto flex h-full min-h-[85vh] max-w-6xl items-center px-6">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-medium tracking-[0.25em] text-green-300 uppercase">
            Data Infrastructure for Premium Agriculture
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            농업 데이터를<br />
            <span className="text-green-300">수익으로</span> 바꾸다
          </h1>

          <p className="text-lg leading-relaxed text-white/90">
            <strong className="text-white">데이터 플랫폼</strong>으로 농업의 미래를 열다.<br />
            수집 → 분석 → 의사결정 → 수익화까지, 하나의 플랫폼으로.
          </p>

          {/* 파이프라인 */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full border border-green-400/30 bg-green-500/20 px-3 py-1.5 text-green-200">⚡ AI Platform</span>
            <span className="text-white/40">→</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white/80">🍇 Premium</span>
            <span className="text-white/40">→</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-white/80">🌍 Export</span>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/register" className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-700 transition">
              🍇 내 농장 등록하기 →
            </a>
            <a href="#solutions" className="rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
              서비스 둘러보기
            </a>
          </div>

          {/* 하단 3카드 */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-white">📊 매일 아침 리포트</p>
              <p className="text-xs text-white/60">어제 기상 + 오늘 위험 알림</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-white">🛡 병해 5일 전 경고</p>
              <p className="text-xs text-white/60">노균·흰가루·탄저 예측</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-white">✈️ 수출 MRL 자동 체크</p>
              <p className="text-xs text-white/60">일본·동남아 기준 실시간</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
