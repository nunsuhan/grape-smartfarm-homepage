'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { useLocale } from '@/lib/i18n';

const SOLUTIONS = [
  { titleKey: 'sol.irrigation.title', descKey: 'sol.irrigation.desc', modulesKey: 'sol.irrigation.modules', hoverBorder: 'hover:border-cyan-500/25', topBar: 'bg-cyan-400' },
  { titleKey: 'sol.disease.title', descKey: 'sol.disease.desc', modulesKey: 'sol.disease.modules', hoverBorder: 'hover:border-rose-500/25', topBar: 'bg-rose-500' },
  { titleKey: 'sol.yield.title', descKey: 'sol.yield.desc', modulesKey: 'sol.yield.modules', hoverBorder: 'hover:border-amber-500/25', topBar: 'bg-amber-400' },
  { titleKey: 'sol.export.title', descKey: 'sol.export.desc', modulesKey: 'sol.export.modules', hoverBorder: 'hover:border-pink-500/25', topBar: 'bg-pink-400' },
  { titleKey: 'sol.coldchain.title', descKey: 'sol.coldchain.desc', modulesKey: 'sol.coldchain.modules', hoverBorder: 'hover:border-blue-500/25', topBar: 'bg-blue-500' },
];

export function Solutions() {
  const { t } = useLocale();

  return (
    <Section id="solutions" alt>
      <Container>
        <SectionHeader eyebrow={t('sol.eyebrow')} title={t('sol.title')} description={t('sol.desc')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative bg-surface border border-default rounded-card p-8 transition-all duration-300 hover:-translate-y-1 ${sol.hoverBorder}`}
            >
              <div className={`absolute -top-px left-6 right-6 h-0.5 rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${sol.topBar}`} />
              <p className="font-mono text-[11px] tracking-[1.5px] uppercase text-txt-3 mb-1.5">{t('sol.problem_label')}</p>
              <h3 className="text-xl font-bold mb-2.5 tracking-tight">{t(sol.titleKey)}</h3>
              <p className="text-sm text-txt-2 leading-relaxed mb-4">{t(sol.descKey)}</p>
              <p className="font-mono text-xs text-accent font-semibold opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {t(sol.modulesKey)} →
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
