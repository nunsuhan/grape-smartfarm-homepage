'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export function Hero() {
  const { t } = useLocale();

  const valueChain = [
    { icon: '🔌', top: t('vc.sensors'), bottom: t('vc.farm_data'), highlight: false },
    { icon: '⚡', top: t('vc.platform'), bottom: t('vc.ai_platform'), highlight: true },
    { icon: '🧠', top: t('vc.intelligence'), bottom: t('vc.crop_ai'), highlight: false },
    { icon: '🏆', top: t('vc.output'), bottom: t('vc.premium'), highlight: false },
    { icon: '🌏', top: t('vc.market'), bottom: t('vc.export'), highlight: false },
  ];

  return (
    <section
      id="platform"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5 md:px-10 pt-28 pb-16 relative"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-accent/[0.05] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-mod-grow/[0.04] rounded-full blur-[100px]" />
      </div>

      <motion.p
        custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="font-mono text-xs font-semibold tracking-[3px] uppercase text-accent mb-6 relative"
      >
        {t('hero.eyebrow')}
      </motion.p>

      <motion.h1
        custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-[clamp(40px,6vw,76px)] font-black leading-[1.05] tracking-tighter max-w-[860px] relative"
      >
        {t('hero.title.1')}
        <br />
        <span className="bg-gradient-to-r from-accent to-mod-grow bg-clip-text text-transparent">
          {t('hero.title.2')}
        </span>
        {t('hero.title.3')}
      </motion.h1>

      <motion.p
        custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="text-lg text-txt-2 max-w-[560px] mt-6 leading-relaxed font-light relative"
      >
        {t('hero.sub.1')}
        <strong className="text-txt font-semibold">{t('hero.sub.bold')}</strong>
        {t('hero.sub.2')}
        <br />
        {t('hero.sub.3')}
      </motion.p>

      <motion.div
        custom={3} variants={fadeUp} initial="hidden" animate="visible"
        className="mt-14 flex items-center gap-0 flex-wrap justify-center relative"
      >
        {valueChain.map((node, i) => (
          <div key={node.top} className="flex items-center">
            <div
              className={`flex flex-col items-center gap-2 px-4 md:px-6 py-5 min-w-[100px] md:min-w-[130px] ${
                node.highlight
                  ? 'bg-gradient-to-br from-accent/[0.08] to-mod-grow/[0.05] border border-accent/20 rounded-2xl'
                  : ''
              }`}
            >
              <div
                className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[22px] ${
                  node.highlight
                    ? 'bg-gradient-to-br from-accent to-mod-grow'
                    : 'border border-default bg-bg-2'
                }`}
              >
                <span className={node.highlight ? 'brightness-0' : ''}>{node.icon}</span>
              </div>
              <div className="text-center">
                <span className="text-xs font-semibold text-txt-2">{node.top}</span>
                <strong className={`block text-[13px] mt-0.5 ${node.highlight ? 'text-accent' : 'text-txt'}`}>
                  {node.bottom}
                </strong>
              </div>
            </div>
            {i < valueChain.length - 1 && (
              <span className="font-mono text-lg text-accent/50 mx-1 flex-shrink-0">→</span>
            )}
          </div>
        ))}
      </motion.div>

      {/* ── CTA 버튼 ── */}
      <motion.div
        custom={4} variants={fadeUp} initial="hidden" animate="visible"
        className="mt-10 flex flex-col sm:flex-row items-center gap-4 relative"
      >
        {/* 내 농장 등록하기 */}
        <a
          href="/register"
          className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[17px] text-white
                     bg-gradient-to-r from-[#4A8B2C] to-[#7BC950]
                     shadow-[0_4px_24px_rgba(74,139,44,0.35)]
                     hover:shadow-[0_6px_32px_rgba(74,139,44,0.5)]
                     hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="text-xl">🍇</span>
          내 농장 등록하기
          <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>

        {/* 서비스 받기 */}
        <a
          href="#platform"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-[17px]
                     border border-default text-txt bg-bg-2
                     hover:border-accent/50 hover:bg-accent/[0.04]
                     hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="text-xl">📡</span>
          서비스 둘러보기
          <span className="text-txt-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </motion.div>

      {/* ── 서비스 받기 카드 ── */}
      <motion.div
        custom={5} variants={fadeUp} initial="hidden" animate="visible"
        className="mt-8 flex flex-col sm:flex-row gap-3 relative w-full max-w-[640px]"
      >
        {[
          { icon: '📊', label: '매일 아침 리포트', desc: '어제 기상 + 오늘 위험 알림' },
          { icon: '🛡', label: '병해 5일 전 경고', desc: '노균·흰가루·탄저 예측' },
          { icon: '✈️', label: '수출 MRL 자동 체크', desc: '일본·동남아 기준 실시간' },
        ].map((item) => (
          <a
            key={item.label}
            href="/register"
            className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border border-default bg-bg-2
                       hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-150 group"
          >
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div className="text-left">
              <div className="text-[13px] font-bold text-txt">{item.label}</div>
              <div className="text-[12px] text-txt-2">{item.desc}</div>
            </div>
            <span className="ml-auto text-accent/40 group-hover:text-accent text-sm transition-colors">→</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
