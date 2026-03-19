'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { useLocale } from '@/lib/i18n';

const EXPORT_CARDS = [
  { icon: '🏅', titleKey: 'exp.premium.title', descKey: 'exp.premium.desc' },
  { icon: '✅', titleKey: 'exp.verification.title', descKey: 'exp.verification.desc' },
  { icon: '🤝', titleKey: 'exp.partnership.title', descKey: 'exp.partnership.desc' },
  { icon: '🔗', titleKey: 'exp.blockchain.title', descKey: 'exp.blockchain.desc' },
];

export function ExportIntelligence() {
  const { t } = useLocale();

  return (
    <Section id="export" className="relative bg-vine-900 text-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-harvest-400/[0.06] rounded-full blur-[120px]" />
      </div>
      <Container className="relative">
        {/* 섹션 헤더 — 다크 배경에서 흰색 텍스트로 재정의 */}
        <div className="text-center mb-14">
          <p className="font-mono text-[11px] font-semibold tracking-[3px] uppercase text-harvest-400 mb-3.5">
            {t('exp.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-[48px] font-extrabold tracking-tight leading-tight mb-3.5 text-white">
            {t('exp.title')}
          </h2>
          <p className="text-white/65 text-base max-w-[560px] mx-auto leading-relaxed">
            {t('exp.desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {EXPORT_CARDS.map((card, i) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white/[0.06] border border-white/10 rounded-card p-7 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span className="text-[28px] block mb-3.5">{card.icon}</span>
              <h3 className="text-[17px] font-bold mb-2 text-white">{t(card.titleKey)}</h3>
              <p className="text-[13px] text-white/60 leading-relaxed">{t(card.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
