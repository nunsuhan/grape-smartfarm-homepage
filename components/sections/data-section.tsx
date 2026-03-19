'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { useLocale } from '@/lib/i18n';

const DATA_CARDS = [
  { category: 'Environmental', number: '16.5M+', labelKey: 'data.env.label', descKey: 'data.env.desc' },
  { category: 'Growth', number: '154K+', labelKey: 'data.rag.label', descKey: 'data.rag.desc' },
  { category: 'Quality', number: '78K+', labelKey: 'data.img.label', descKey: 'data.img.desc' },
  { category: 'Supply Chain', number: '7', labelKey: 'data.mod.label', descKey: 'data.mod.desc' },
];

export function DataSection() {
  const { t } = useLocale();

  return (
    <Section id="data">
      <Container>
        <SectionHeader eyebrow={t('data.eyebrow')} title={t('data.title')} description={t('data.desc')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {DATA_CARDS.map((card, i) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-surface border border-default rounded-card p-7"
            >
              <p className="font-mono text-[10px] tracking-[2px] uppercase text-txt-3 mb-2.5">{card.category}</p>
              <p className="text-[32px] font-extrabold tracking-tight bg-gradient-to-r from-accent to-mod-grow bg-clip-text text-transparent mb-1">
                {card.number}
              </p>
              <p className="text-sm font-semibold mb-1.5">{t(card.labelKey)}</p>
              <p className="text-xs text-txt-3 leading-relaxed">{t(card.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
