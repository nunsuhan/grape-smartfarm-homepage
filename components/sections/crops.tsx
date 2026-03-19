'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { useLocale } from '@/lib/i18n';

type CropStatus = 'live' | 'ready' | 'plan';

interface CropDef {
  emoji: string;
  ko: string;
  intel: string;
  status: CropStatus;
  href?: string;
}

const CROPS: CropDef[] = [
  { emoji: '🍇', ko: '포도', intel: 'Grape Intelligence',        status: 'live',  href: '/crops/grape' },
  { emoji: '🍓', ko: '딸기', intel: 'Strawberry Intelligence',   status: 'live',  href: '/strawberry' },
  { emoji: '🍅', ko: '토마토', intel: 'Tomato Intelligence',     status: 'ready' },
  { emoji: '🫑', ko: '파프리카', intel: 'Paprika Intelligence',  status: 'ready' },
  { emoji: '🥒', ko: '오이',    intel: 'Cucumber Intelligence',  status: 'ready' },
  { emoji: '🍈', ko: '참외',    intel: 'Korean Melon Intelligence', status: 'plan' },
  { emoji: '🍎', ko: '사과',    intel: 'Apple Intelligence',     status: 'plan' },
];

const STATUS_STYLES: Record<CropStatus, string> = {
  live:  'bg-mod-grow/[0.12] text-mod-grow',
  ready: 'bg-mod-yield/[0.12] text-mod-yield',
  plan:  'bg-white/[0.04] text-txt-3',
};

const STATUS_KEY: Record<CropStatus, string> = {
  live:  'crops.live',
  ready: 'crops.ready',
  plan:  'crops.plan',
};

// ── 카드 내부 콘텐츠 (live/non-live 공통) ─────────────────────
function CropCardBody({
  crop,
  locale,
  statusLabel,
}: {
  crop: CropDef;
  locale: string;
  statusLabel: string;
}) {
  return (
    <>
      <span className="text-4xl block mb-2.5">{crop.emoji}</span>
      <p className="text-[15px] font-bold mb-0.5">
        {locale === 'ko' ? crop.ko : crop.intel.replace(' Intelligence', '')}
      </p>
      <p className="font-mono text-[10px] text-accent tracking-[1px] uppercase mb-2.5">
        {crop.intel}
      </p>
      <span className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wide ${STATUS_STYLES[crop.status]}`}>
        {statusLabel}
      </span>
      {/* live 작물에만 "상세 보기" 힌트 표시 */}
      {crop.href && (
        <span className="mt-3 block text-[10px] text-accent/70 group-hover:text-accent transition-colors">
          {locale === 'ko' ? '상세 보기 →' : 'View details →'}
        </span>
      )}
    </>
  );
}

// ── 메인 섹션 ─────────────────────────────────────────────────
export function Crops() {
  const { locale, t } = useLocale();

  return (
    <Section id="crops" alt>
      <Container>
        <SectionHeader
          eyebrow={t('crops.eyebrow')}
          title={t('crops.title')}
          description={t('crops.desc')}
        />
        <div className="flex gap-4 flex-wrap justify-center max-w-[1200px] mx-auto">
          {CROPS.map((crop, i) => {
            const cardClass = `w-[164px] p-7 px-5 bg-surface border border-default rounded-card text-center transition-all duration-300 hover:border-accent hover:-translate-y-0.5${crop.href ? ' group' : ''}`;
            const body = (
              <CropCardBody crop={crop} locale={locale} statusLabel={t(STATUS_KEY[crop.status])} />
            );

            return (
              <motion.div
                key={crop.ko}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={cardClass}
              >
                {crop.href ? (
                  <Link href={crop.href} className="block">
                    {body}
                  </Link>
                ) : body}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
