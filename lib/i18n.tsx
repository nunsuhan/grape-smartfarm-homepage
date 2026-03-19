'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Locale = 'ko' | 'en';

// ── Locale Detection ──
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'ko';

  // 1. Check URL path for buyer pages (force English)
  const buyerPaths = ['/export-intelligence', '/verified-farms', '/importer', '/blockchain'];
  if (buyerPaths.some((p) => window.location.pathname.startsWith(p))) {
    return 'en';
  }

  // 2. Check localStorage preference
  const saved = localStorage.getItem('farmsense-locale');
  if (saved === 'ko' || saved === 'en') return saved;

  // 3. Check browser language
  const lang = navigator.language || (navigator as any).userLanguage || '';
  if (lang.startsWith('ko')) return 'ko';

  // 4. Default: Korean users → ko, others → en
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  if (tz.includes('Seoul') || tz.includes('Asia/Seoul')) return 'ko';

  return 'en';
}

// ── Context ──
interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ko',
  setLocale: () => {},
  t: (key) => key,
});

export function useLocale() {
  return useContext(LocaleContext);
}

// ── Provider ──
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko');

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('farmsense-locale', l);
  };

  const t = (key: string): string => {
    return translations[locale]?.[key] || translations['ko']?.[key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

// ── Translations ──
const translations: Record<Locale, Record<string, string>> = {
  ko: {
    // Nav
    'nav.platform': 'Platform',
    'nav.solutions': '솔루션',
    'nav.modules': '모듈',
    'nav.crops': '작물',
    'nav.export': '수출·인증',
    'nav.technology': '기술',
    'nav.partners': '파트너',
    'nav.about': '소개',
    'nav.contact': '문의하기',

    // Hero
    'hero.eyebrow': 'Data Infrastructure for Premium Agriculture',
    'hero.title.1': '농업 데이터를',
    'hero.title.2': '수익으로',
    'hero.title.3': ' 바꾸다',
    'hero.sub.1': '센서가 아닙니다. ',
    'hero.sub.bold': '데이터 플랫폼',
    'hero.sub.2': '입니다.',
    'hero.sub.3': '수집 → 분석 → 의사결정 → 수익화까지, 하나의 플랫폼으로.',

    // Value chain
    'vc.sensors': 'Sensors',
    'vc.farm_data': 'Farm Data',
    'vc.platform': 'FarmSense',
    'vc.ai_platform': 'AI Platform',
    'vc.intelligence': 'Intelligence',
    'vc.crop_ai': 'Crop AI',
    'vc.output': 'Output',
    'vc.premium': 'Premium Produce',
    'vc.market': 'Market',
    'vc.export': 'Export',

    // Solutions
    'sol.eyebrow': 'Solutions',
    'sol.title': '문제를 해결합니다',
    'sol.desc': '농가가 겪는 실제 문제에서 출발합니다. 각 솔루션은 모듈 조합으로 동작합니다.',
    'sol.problem_label': 'Problem → Solution',
    'sol.irrigation.title': '💧 스마트 관수',
    'sol.irrigation.desc': '토양수분 + 열화상 CWSI로 수분 스트레스를 실시간 감지. 생육단계별 최적 관수량을 자동 처방하여 과습·건조 피해를 예방합니다.',
    'sol.irrigation.modules': 'Grow + Water + Climate',
    'sol.disease.title': '🛡 병해 사전 예측',
    'sol.disease.desc': '연속 고습도 환경 모니터링으로 병해 발생 5일 전 경고. RGB + 열화상 AI 진단으로 초기 감염을 포착하고, 적합한 방제 약제를 권고합니다.',
    'sol.disease.modules': 'Climate + Protect + Trace',
    'sol.yield.title': '📈 수확량 예측',
    'sol.yield.desc': 'GDD 모델 + 환경 데이터 + 과실 생장 추적으로 수확량과 최적 수확일을 예측. 당도·착색도 기반 품질 등급을 사전 판정합니다.',
    'sol.yield.modules': 'Grow + Yield + Climate',
    'sol.export.title': '📋 수출 인증 자동화',
    'sol.export.desc': '3일 걸리던 수출 서류를 30분으로. GAP 기록, PHI 자동 계산, 잔류농약 예측, 시장별 MRL 기준 충족 여부를 원클릭으로 확인합니다.',
    'sol.export.modules': 'Trace + Export + Protect',
    'sol.coldchain.title': '🌡 콜드체인 모니터링',
    'sol.coldchain.desc': '수확 후 저장·운송·통관까지 온도·습도 이력을 실시간 추적. CCLI(콜드체인물류위험지수)로 품질 이탈 구간을 즉시 감지합니다.',
    'sol.coldchain.modules': 'Export + Climate',

    // Modules
    'mod.eyebrow': 'Platform Modules',
    'mod.title': '7개 모듈, 하나의 플랫폼',
    'mod.desc': '각 모듈은 독립적으로 작동하면서 데이터로 연결됩니다. 작물이 바뀌어도 플랫폼은 그대로.',
    'mod.grow.title': '생육 분석',
    'mod.grow.desc': 'GDD 기반 생육단계 추적, 품종별 생장 모델, BBCH 페놀로지 매핑. 작물별 최적 생육 경로를 데이터로 설계합니다.',
    'mod.climate.title': '환경 관리',
    'mod.climate.desc': 'CEI(작물환경지수)로 온실 환경을 점수화. 온도, 습도, CO₂, 일사량 통합 모니터링 + 환기 최적화 권고.',
    'mod.protect.title': '병해충 방제',
    'mod.protect.desc': 'RGB + 열화상 이중 진단. 10클래스 AI 분류(탄저, 노균, 흰가루 등) + GDD 기반 해충 발생 예측. 약제 PHI 자동 체크.',
    'mod.water.title': '관수·양액 관리',
    'mod.water.desc': '토양수분 센서 + 열화상 CWSI로 수분 스트레스 감지. EC/pH 양액 최적화. 생육단계별 관수 처방 자동 권고.',
    'mod.yield.title': '수확·품질 분석',
    'mod.yield.desc': '당도, 산도, 착색도, 과중 추적. 수확량 예측 + 품질 등급 판정. 최적 수확 타이밍을 AI로 산출합니다.',
    'mod.trace.title': '생산 이력',
    'mod.trace.desc': '센서 데이터 자동 기록 + 농약 살포 이력. GAP 인증 70% 자동화, PHI 자동 계산, 영농일지 자동 생성.',
    'mod.export.title': '수출 인텔리전스',
    'mod.export.desc': 'ERI(수출적합도지수)로 수출 가능 여부 사전 판정. 시장별(일본/동남아) 기준 충족 여부 + 부족 항목 알림.',

    // Crops
    'crops.eyebrow': 'Crop Intelligence',
    'crops.title': '작물이 바뀌어도, 플랫폼은 같습니다',
    'crops.desc': '멀티크롭 아키텍처 — 작물 추가 시 데이터만 연결하면 전체 모듈이 동작합니다.',
    'crops.live': '운영중',
    'crops.ready': '데이터 준비',
    'crops.plan': '예정',

    // Export Intelligence
    'exp.eyebrow': 'Export Intelligence',
    'exp.title': '수출의 모든 과정을 데이터로',
    'exp.desc': '한국 프리미엄 농산물의 수출 경쟁력을 데이터 기반으로 끌어올립니다.',
    'exp.premium.title': 'Premium Produce Program',
    'exp.premium.desc': '생육 전 과정의 데이터를 기반으로 프리미엄 등급을 인증. 당도, 착색, 무농약 이력이 수출 프리미엄을 만듭니다.',
    'exp.verification.title': 'Production Data Verification',
    'exp.verification.desc': '센서 자동 기록 + 블록체인 검증으로 생산 이력의 무결성을 보장. GAP 인증 서류의 70%를 자동 생성합니다.',
    'exp.partnership.title': 'Importer Partnership',
    'exp.partnership.desc': '수입바이어에게 실시간 생육 데이터와 품질 리포트를 공유. 신뢰 기반의 장기 파트너십을 구축합니다.',
    'exp.blockchain.title': 'Blockchain Traceability',
    'exp.blockchain.desc': '수확 → 저장 → 운송 → 통관까지 모든 이력을 블록체인에 기록. 소비자가 QR코드로 전 과정을 확인합니다.',

    // Technology
    'tech.eyebrow': 'Technology',
    'tech.title': '6-Layer 데이터 플랫폼',
    'tech.desc': '센서 엣지부터 서비스 레이어까지, 6개 레이어로 데이터가 흐릅니다.',

    // Data
    'data.eyebrow': 'Platform Data',
    'data.title': '데이터가 플랫폼의 핵심입니다',
    'data.desc': '더 많은 농가, 더 많은 데이터, 더 정확한 권고.',
    'data.env.label': '환경 센서 레코드',
    'data.env.desc': '온도, 습도, 토양수분, CO₂, 일사량 — 1분 단위 실시간 수집',
    'data.rag.label': 'RAG 문서',
    'data.rag.desc': '논문, 공공데이터, 현장 Q&A — 포도 전문 지식 베이스',
    'data.img.label': '병해 학습 이미지',
    'data.img.desc': 'AIHub + 현장 라벨링 — 10클래스 한국 포도 병해 특화',
    'data.mod.label': '플랫폼 모듈',
    'data.mod.desc': '생육 → 환경 → 방제 → 관수 → 수확 → 이력 → 수출',

    // Footer
    'footer.tagline': 'Data Infrastructure for Premium Agriculture',
    'footer.copyright': '© 2026 FarmSense. Agricultural Intelligence Platform.',
  },

  en: {
    // Nav
    'nav.platform': 'Platform',
    'nav.solutions': 'Solutions',
    'nav.modules': 'Modules',
    'nav.crops': 'Crops',
    'nav.export': 'Export',
    'nav.technology': 'Technology',
    'nav.partners': 'Partners',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.eyebrow': 'Data Infrastructure for Premium Agriculture',
    'hero.title.1': 'Turn Farm Data',
    'hero.title.2': 'Into Revenue',
    'hero.title.3': '',
    'hero.sub.1': "It's not a sensor. It's a ",
    'hero.sub.bold': 'data platform',
    'hero.sub.2': '.',
    'hero.sub.3': 'From collection to analysis, decision-making, and monetization — one platform.',

    // Value chain
    'vc.sensors': 'Sensors',
    'vc.farm_data': 'Farm Data',
    'vc.platform': 'FarmSense',
    'vc.ai_platform': 'AI Platform',
    'vc.intelligence': 'Intelligence',
    'vc.crop_ai': 'Crop AI',
    'vc.output': 'Output',
    'vc.premium': 'Premium Produce',
    'vc.market': 'Market',
    'vc.export': 'Export',

    // Solutions
    'sol.eyebrow': 'Solutions',
    'sol.title': 'We Solve Real Problems',
    'sol.desc': 'Starting from real challenges farmers face. Each solution operates through module combinations.',
    'sol.problem_label': 'Problem → Solution',
    'sol.irrigation.title': '💧 Smart Irrigation',
    'sol.irrigation.desc': 'Real-time water stress detection via soil moisture + thermal CWSI. Auto-prescribes optimal irrigation volume by growth stage to prevent over/under-watering.',
    'sol.irrigation.modules': 'Grow + Water + Climate',
    'sol.disease.title': '🛡 Disease Prediction',
    'sol.disease.desc': 'Continuous high-humidity monitoring alerts 5 days before disease onset. RGB + thermal AI diagnosis catches early infection and recommends appropriate pesticides.',
    'sol.disease.modules': 'Climate + Protect + Trace',
    'sol.yield.title': '📈 Yield Forecast',
    'sol.yield.desc': 'GDD model + environmental data + fruit growth tracking predicts yield and optimal harvest date. Pre-determines quality grade based on sugar content and coloring.',
    'sol.yield.modules': 'Grow + Yield + Climate',
    'sol.export.title': '📋 Export Certification',
    'sol.export.desc': 'Export documentation from 3 days to 30 minutes. GAP records, auto PHI calculation, residue prediction, and market-specific MRL compliance in one click.',
    'sol.export.modules': 'Trace + Export + Protect',
    'sol.coldchain.title': '🌡 Cold Chain Monitoring',
    'sol.coldchain.desc': 'Real-time temperature/humidity tracking from harvest through storage, transport, and customs. CCLI (Cold Chain Logistics Risk Index) instantly detects quality deviations.',
    'sol.coldchain.modules': 'Export + Climate',

    // Modules
    'mod.eyebrow': 'Platform Modules',
    'mod.title': '7 Modules, One Platform',
    'mod.desc': 'Each module operates independently, connected by data. Change the crop, keep the platform.',
    'mod.grow.title': 'Growth Analysis',
    'mod.grow.desc': 'GDD-based growth stage tracking, variety-specific growth models, BBCH phenology mapping. Design optimal growth paths with data.',
    'mod.climate.title': 'Environment Management',
    'mod.climate.desc': 'CEI (Cultivation Environment Index) scores greenhouse environments. Integrated monitoring of temperature, humidity, CO₂, solar radiation + ventilation optimization.',
    'mod.protect.title': 'Pest & Disease Control',
    'mod.protect.desc': 'Dual RGB + thermal diagnosis. 10-class AI classification (anthracnose, downy mildew, powdery mildew, etc.) + GDD-based pest prediction. Auto PHI check.',
    'mod.water.title': 'Irrigation & Nutrient',
    'mod.water.desc': 'Soil moisture sensors + thermal CWSI for water stress detection. EC/pH nutrient optimization. Auto-prescribed irrigation by growth stage.',
    'mod.yield.title': 'Harvest & Quality',
    'mod.yield.desc': 'Track sugar content, acidity, coloring, fruit weight. Yield prediction + quality grading. AI-calculated optimal harvest timing.',
    'mod.trace.title': 'Production Records',
    'mod.trace.desc': 'Auto sensor data logging + pesticide application history. 70% GAP certification automation, auto PHI calculation, auto farm diary.',
    'mod.export.title': 'Export Intelligence',
    'mod.export.desc': 'ERI (Export Readiness Index) pre-determines export eligibility. Market-specific (Japan/SEA) compliance checking + gap alerts.',

    // Crops
    'crops.eyebrow': 'Crop Intelligence',
    'crops.title': 'Change the Crop, Keep the Platform',
    'crops.desc': 'Multi-crop architecture — connect data for a new crop, and all modules activate automatically.',
    'crops.live': 'Live',
    'crops.ready': 'Data Ready',
    'crops.plan': 'Planned',

    // Export Intelligence
    'exp.eyebrow': 'Export Intelligence',
    'exp.title': 'Data-Driven Export, End to End',
    'exp.desc': 'Elevating the export competitiveness of Korean premium produce through data.',
    'exp.premium.title': 'Premium Produce Program',
    'exp.premium.desc': 'Data-verified premium grading across the entire cultivation process. Sugar content, coloring, and pesticide-free records create export premiums.',
    'exp.verification.title': 'Production Data Verification',
    'exp.verification.desc': 'Auto sensor logging + blockchain verification ensures production record integrity. 70% of GAP certification documents auto-generated.',
    'exp.partnership.title': 'Importer Partnership',
    'exp.partnership.desc': 'Share real-time growth data and quality reports with importers. Build trust-based long-term partnerships.',
    'exp.blockchain.title': 'Blockchain Traceability',
    'exp.blockchain.desc': 'Every record from harvest → storage → transport → customs on blockchain. Consumers verify the entire chain via QR code.',

    // Technology
    'tech.eyebrow': 'Technology',
    'tech.title': '6-Layer Data Platform',
    'tech.desc': 'Data flows through 6 layers, from sensor edge to service layer.',

    // Data
    'data.eyebrow': 'Platform Data',
    'data.title': 'Data Is the Core of the Platform',
    'data.desc': 'More farms, more data, more accurate recommendations.',
    'data.env.label': 'Environmental Sensor Records',
    'data.env.desc': 'Temperature, humidity, soil moisture, CO₂, solar radiation — collected every minute',
    'data.rag.label': 'RAG Documents',
    'data.rag.desc': 'Research papers, public data, field Q&A — grape-specialized knowledge base',
    'data.img.label': 'Disease Training Images',
    'data.img.desc': 'AIHub + field labeling — 10-class Korean grape disease specialized',
    'data.mod.label': 'Platform Modules',
    'data.mod.desc': 'Growth → Climate → Protection → Irrigation → Harvest → Records → Export',

    // Footer
    'footer.tagline': 'Data Infrastructure for Premium Agriculture',
    'footer.copyright': '© 2026 FarmSense. Agricultural Intelligence Platform.',
  },
};
