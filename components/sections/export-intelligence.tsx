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
    <Section id="export" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] bg-mod-export/[0.04] rounded-full blur-[120px]" />
      </div>
      <Container className="relative">
        <SectionHeader eyebrow={t('exp.eyebrow')} title={t('exp.title')} description={t('exp.desc')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {EXPORT_CARDS.map((card, i) => (
            <motion.div
              key={card.titleKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-surface border border-default rounded-card p-7 transition-all duration-300 hover:border-mod-export/25 hover:-translate-y-0.5"
            >
              <span className="text-[28px] block mb-3.5">{card.icon}</span>
              <h3 className="text-[17px] font-bold mb-2">{t(card.titleKey)}</h3>
              <p className="text-[13px] text-txt-2 leading-relaxed">{t(card.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
