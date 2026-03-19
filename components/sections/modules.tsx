'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { useLocale } from '@/lib/i18n';

type ModuleKey = 'grow' | 'climate' | 'protect' | 'water' | 'yield' | 'trace' | 'export';

interface ModuleDef {
  key: ModuleKey;
  icon: string;
  label: string;
  titleKey: string;
  descKey: string;
  tags: { ko: string[]; en: string[] };
}

const MODULES: ModuleDef[] = [
  { key: 'grow', icon: '🌱', label: 'FarmSense Grow', titleKey: 'mod.grow.title', descKey: 'mod.grow.desc', tags: { ko: ['GDD 모델', '생장 예측', 'BBCH 단계', '수확 적기'], en: ['GDD Model', 'Growth Prediction', 'BBCH Stages', 'Harvest Timing'] } },
  { key: 'climate', icon: '🌡', label: 'FarmSense Climate', titleKey: 'mod.climate.title', descKey: 'mod.climate.desc', tags: { ko: ['CEI 지수', '실시간 모니터링', '환기 제어', '벤치마크'], en: ['CEI Index', 'Real-time Monitoring', 'Ventilation', 'Benchmarking'] } },
  { key: 'protect', icon: '🛡', label: 'FarmSense Protect', titleKey: 'mod.protect.title', descKey: 'mod.protect.desc', tags: { ko: ['AI 진단', '조기 경보', '열화상', 'PHI 관리'], en: ['AI Diagnosis', 'Early Warning', 'Thermal', 'PHI Management'] } },
  { key: 'water', icon: '💧', label: 'FarmSense Water', titleKey: 'mod.water.title', descKey: 'mod.water.desc', tags: { ko: ['CWSI', '양액 처방', 'EC/pH', '토양 배수'], en: ['CWSI', 'Nutrient Rx', 'EC/pH', 'Soil Drainage'] } },
  { key: 'yield', icon: '📈', label: 'FarmSense Yield', titleKey: 'mod.yield.title', descKey: 'mod.yield.desc', tags: { ko: ['당도 추적', '수확량 예측', '등급 판정', '품종별 품질'], en: ['Brix Tracking', 'Yield Forecast', 'Grading', 'Variety Quality'] } },
  { key: 'trace', icon: '📋', label: 'FarmSense Trace', titleKey: 'mod.trace.title', descKey: 'mod.trace.desc', tags: { ko: ['자동 기록', 'GAP 인증', 'PHI 관리', '영농일지'], en: ['Auto Logging', 'GAP Cert.', 'PHI Mgmt', 'Farm Diary'] } },
  { key: 'export', icon: '🌏', label: 'FarmSense Export', titleKey: 'mod.export.title', descKey: 'mod.export.desc', tags: { ko: ['ERI 지수', '시장별 기준', '블록체인', '수출 서류'], en: ['ERI Index', 'Market Standards', 'Blockchain', 'Export Docs'] } },
];

const MODULE_COLORS: Record<ModuleKey, { bar: string; icon: string; label: string }> = {
  grow:    { bar: 'bg-mod-grow',    icon: 'bg-mod-grow/10 text-mod-grow',       label: 'text-mod-grow' },
  climate: { bar: 'bg-mod-climate', icon: 'bg-mod-climate/10 text-mod-climate', label: 'text-mod-climate' },
  protect: { bar: 'bg-mod-protect', icon: 'bg-mod-protect/10 text-mod-protect', label: 'text-mod-protect' },
  water:   { bar: 'bg-mod-water',   icon: 'bg-mod-water/10 text-mod-water',     label: 'text-mod-water' },
  yield:   { bar: 'bg-mod-yield',   icon: 'bg-mod-yield/10 text-mod-yield',     label: 'text-mod-yield' },
  trace:   { bar: 'bg-mod-trace',   icon: 'bg-mod-trace/10 text-mod-trace',     label: 'text-mod-trace' },
  export:  { bar: 'bg-mod-export',  icon: 'bg-mod-export/10 text-mod-export',   label: 'text-mod-export' },
};

export function Modules() {
  const { locale, t } = useLocale();

  return (
    <Section id="modules">
      <Container>
        <SectionHeader eyebrow={t('mod.eyebrow')} title={t('mod.title')} description={t('mod.desc')} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((mod, i) => {
            const colors = MODULE_COLORS[mod.key];
            return (
              <motion.div
                key={mod.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group bg-surface border border-default rounded-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-hover relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.bar}`} />
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center text-lg ${colors.icon}`}>
                    {mod.icon}
                  </div>
                  <div>
                    <p className={`font-mono text-[11px] tracking-[1.5px] uppercase ${colors.label}`}>{mod.label}</p>
                    <h3 className="text-xl font-bold tracking-tight">{t(mod.titleKey)}</h3>
                  </div>
                </div>
                <p className="text-sm text-txt-2 leading-relaxed mb-4">{t(mod.descKey)}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mod.tags[locale].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/[0.03] border border-default rounded-xs text-[11px] text-txt-2 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
