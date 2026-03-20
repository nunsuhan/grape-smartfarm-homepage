'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { useLocale, Locale } from '@/lib/i18n';

type LayerStyle = 'edge' | 'collect' | 'store' | 'analyze' | 'decide' | 'serve';

interface ArchLayer {
  label: string;
  style: LayerStyle;
  blocks: { ko: string[]; en: string[] };
}

const LAYERS: ArchLayer[] = [
  { label: 'Edge', style: 'edge', blocks: { ko: ['IoT 센서', '엣지 게이트웨이', '열화상 카메라', 'LoRa 통신'], en: ['IoT Sensors', 'Edge Gateway', 'Thermal Camera', 'LoRa Network'] } },
  { label: 'Collection', style: 'collect', blocks: { ko: ['기상 API', '공공데이터', 'RGB 카메라', '모바일 입력'], en: ['Weather API', 'Public Data', 'RGB Camera', 'Mobile Input'] } },
  { label: 'Storage', style: 'store', blocks: { ko: ['멀티크롭 DB', '시계열 저장소', '이미지 저장소', 'RAG 벡터DB'], en: ['Multi-Crop DB', 'Time Series', 'Image Store', 'RAG VectorDB'] } },
  { label: 'Analysis', style: 'analyze', blocks: { ko: ['CEI 엔진', '병해 AI', '수확 예측', '양액 최적화'], en: ['CEI Engine', 'Disease AI', 'Yield Forecast', 'Nutrient Opt.'] } },
  { label: 'Decision', style: 'decide', blocks: { ko: ['환경 권고', '방제 알림', '관수 처방', '수출 판정'], en: ['Climate Advisory', 'Pest Alert', 'Irrigation Rx', 'Export Decision'] } },
  { label: 'Service', style: 'serve', blocks: { ko: ['모바일 앱', '웹 대시보드', 'REST API', '알림 시스템'], en: ['Mobile App', 'Web Dashboard', 'REST API', 'Notification'] } },
];

const LAYER_STYLES: Record<LayerStyle, string> = {
  edge: 'bg-amber-100 text-amber-800 border-amber-200',
  collect: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  store: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  analyze: 'bg-blue-50 text-blue-800 border-blue-200',
  decide: 'bg-violet-50 text-violet-800 border-violet-200',
  serve: 'bg-pink-50 text-pink-800 border-pink-200',
};

function Connector() {
  return (
    <div className="flex ml-[80px] md:ml-[140px] py-1 items-center justify-center">
      <div className="flex items-center gap-1">
        <div className="w-[3px] h-[3px] rounded-full bg-txt-3/40" />
        <div className="w-[3px] h-[3px] rounded-full bg-txt-3/40" />
        <div className="w-[3px] h-[3px] rounded-full bg-txt-3/40" />
      </div>
    </div>
  );
}

export function Technology() {
  const { locale, t } = useLocale();

  return (
    <Section id="technology" alt>
      <Container>
        <SectionHeader eyebrow={t('tech.eyebrow')} title={t('tech.title')} description={t('tech.desc')} />
        <div className="max-w-[1000px] mx-auto">
          {LAYERS.map((layer, i) => (
            <div key={layer.label}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-stretch gap-0 mb-0.5"
              >
                <div className="w-[80px] md:w-[140px] font-mono text-[10px] md:text-[11px] tracking-[1px] uppercase text-txt-3 flex items-center justify-end pr-4 md:pr-5 flex-shrink-0">
                  {layer.label}
                </div>
                <div className="flex-1 flex gap-1.5">
                  {layer.blocks[locale].map((block) => (
                    <div key={block} className={`flex-1 py-3.5 px-2 md:px-3 rounded-sm text-[11px] md:text-xs font-semibold text-center border leading-snug ${LAYER_STYLES[layer.style]}`}>
                      {block}
                    </div>
                  ))}
                </div>
              </motion.div>
              {i < LAYERS.length - 1 && <Connector />}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
