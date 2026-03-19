'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="platform"
      className="relative min-h-[88vh] w-full overflow-hidden flex items-center"
    >
      {/* ── 배경 이미지 ─────────────────────────────────────────── */}
      {/* TODO: 실제 이미지 준비 후 아래 주석 해제, 그라디언트 div 제거 */}
      {/* <Image
        src="/hero/farmsense-hero.png"
        alt="FarmSense 스마트 농업 플랫폼 — AI 데이터 기반 프리미엄 농산물 생산"
        fill
        className="object-cover object-center"
        priority
      /> */}

      {/* 이미지 대체 그라디언트 (임시) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#1a3a20] via-[#2d5020] to-[#1a2a15]"
      >
        {/* 내부 텍스처 레이어 */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_70%_40%,rgba(120,200,80,0.25),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_20%_80%,rgba(100,60,20,0.4),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)',
          }}
        />
      </div>

      {/* ── 그라디언트 오버레이 ─────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#1E3A20]/85 via-[#1E3A20]/55 to-transparent"
      />

      {/* ── 텍스트 콘텐츠 ───────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28 md:py-36">
        <div className="max-w-[560px] space-y-7">

          {/* 아이브로 */}
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="font-mono text-[11px] tracking-[0.22em] uppercase text-vine-100/80"
          >
            Data Infrastructure for Premium Agriculture
          </motion.p>

          {/* H1 */}
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-outfit text-[clamp(36px,5.5vw,64px)] font-bold leading-[1.08] tracking-tight text-white"
          >
            농업 데이터를<br />
            <span className="text-vine-100">수익으로</span> 바꾸다
          </motion.h1>

          {/* 서브카피 */}
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-base md:text-lg leading-relaxed text-white/75"
          >
            센서가 아닙니다.{' '}
            <strong className="text-white font-semibold">데이터 플랫폼</strong>입니다.<br />
            수집 → 분석 → 의사결정 → 수익화까지, 하나의 플랫폼으로.
          </motion.p>

          {/* 파이프라인 뱃지 */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-2 text-[13px] text-white/65"
          >
            {[
              { icon: '🌡', label: 'Sensors' },
              '→',
              { icon: '⚡', label: 'AI Platform', highlight: true },
              '→',
              { icon: '🍇', label: 'Premium' },
              '→',
              { icon: '🌍', label: 'Export' },
            ].map((item, i) =>
              typeof item === 'string' ? (
                <span key={i} className="text-white/40 font-mono">{item}</span>
              ) : (
                <span
                  key={item.label}
                  className={`rounded-md px-2.5 py-1 font-medium ${
                    item.highlight
                      ? 'bg-vine-500/50 text-vine-100 border border-vine-500/60'
                      : 'bg-white/10 text-white/70 border border-white/15'
                  }`}
                >
                  {item.icon} {item.label}
                </span>
              )
            )}
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3 pt-1"
          >
            <a
              href="/register"
              className="inline-flex items-center gap-2 rounded-full bg-vine-500 px-7 py-3.5 text-[15px] font-semibold text-white
                         shadow-lg shadow-vine-900/30 hover:bg-vine-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              🍇 내 농장 등록하기 →
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-medium text-white
                         hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              서비스 둘러보기
            </a>
          </motion.div>

          {/* 미니 서비스 카드 */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-2 pt-1"
          >
            {[
              { icon: '📊', label: '매일 아침 리포트', desc: '어제 기상 + 오늘 위험 알림' },
              { icon: '🛡', label: '병해 5일 전 경고', desc: '노균·흰가루·탄저 예측' },
              { icon: '✈️', label: '수출 MRL 자동 체크', desc: '일본·동남아 기준 실시간' },
            ].map((item) => (
              <a
                key={item.label}
                href="/register"
                className="flex-1 flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl
                           bg-white/[0.08] border border-white/15 hover:bg-white/15 transition-colors"
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <div>
                  <div className="text-[12px] font-semibold text-white leading-tight">{item.label}</div>
                  <div className="text-[11px] text-white/50 leading-tight">{item.desc}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
