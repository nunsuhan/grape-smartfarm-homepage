/**
 * LegacyGrapeDetail
 * farmsense.kr 포도 전용 콘텐츠를 요약·재구성한 섹션 (GRAPE_ONLY + 포도 맥락 강한 CROP_COMMON)
 * app/crops/grape/page.tsx 에서만 사용
 * ─ 루트 <section> + 내부 논리 블록별 <section aria-labelledby>
 * ─ H1 없음: 페이지 H1은 CropLayout이 담당, 이 컴포넌트는 H2/H3만 사용
 */

const problemStats = [
  { value: '약 8%', label: '국내 스마트팜 보급률', sub: '92%는 여전히 경험 의존 재배' },
  { value: '2,000억+', label: '포도 연간 병해 피해액 (원)', sub: '노균병·탄저병 중심 반복 피해' },
  { value: '60세+', label: '포도 농가 평균 연령', sub: '고령화로 정밀 관리 부담 증가' },
  { value: '3종 이상', label: '분절된 정보 소스', sub: '기상·센서·영농일지 각각 관리' },
];

const problemPoints = [
  {
    title: '경험에만 의존하는 재배',
    desc: '수십 년 경험을 가진 농업인도 기후 변화와 신품종 병해 앞에서는 데이터 없이 대응하기 어렵습니다. 노하우는 전수되지 않고, 해마다 같은 실수가 반복됩니다.',
  },
  {
    title: '분절된 데이터, 활용 불가',
    desc: '기상청 데이터, 센서 수치, 영농일지가 제각각 흩어져 있습니다. 이를 통합해 의사결정으로 연결하는 시스템 없이는 데이터는 쌓이기만 할 뿐입니다.',
  },
  {
    title: '포도 병해의 반복 피해',
    desc: '노균병·탄저병·잿빛곰팡이병은 매년 포도 농가에 막대한 피해를 입힙니다. 발생 후 방제는 이미 늦습니다. 기상 패턴을 읽고 예방하는 것이 유일한 해법입니다.',
  },
  {
    title: '수확 시기·품질 예측 불가',
    desc: '적산온도와 당도 변화를 객관적 지표로 추적하지 않으면 최적 수확 시기를 놓쳐 시장 등급과 수익이 떨어집니다.',
  },
];

const grapeCoreTech = [
  {
    tag: 'AI 이상 징후 감지',
    title: '포도 병해 조기 경보',
    desc: '포도 농가 환경 센서 데이터로 훈련된 AI가 노균병·탄저병·잿빛곰팡이병의 전조 이상 징후를 육안 확인 수일~수주 전에 포착합니다. FarmSense Protect 모듈이 포도 생육 단계별 위험도를 실시간으로 추적합니다.',
    color: 'green',
  },
  {
    tag: 'PMI 예방 경보',
    title: 'PMI — 포도 전용 발병 위험 지수',
    desc: 'Plant-Disease Meteorological Index(PMI)를 포도 주요 병해에 맞게 보정한 모델로, 기온·습도·강우 패턴을 분석해 발병 고위험 시점을 사전에 경보합니다. 방제 타이밍을 감이 아닌 데이터로 결정합니다.',
    color: 'blue',
  },
  {
    tag: 'RAG 지식 시스템',
    title: '포도 재배 지식 AI 어시스턴트',
    desc: '농업 논문, 포도 재배 Q&A, 현장 영상 데이터를 기반으로 구축된 RAG(검색 증강 생성) 시스템이 현장 질문에 근거 있는 처방을 즉시 제공합니다.',
    color: 'purple',
  },
  {
    tag: 'DSS 의사결정 지원',
    title: 'DSS — GDD·TRV·LAI·VitiCanopy 통합',
    desc: '생장도일(GDD), 온도 위험값(TRV), 엽면적지수(LAI), VitiCanopy 수관 분석을 기상·센서·영농일지에 통합 적용해 생육 단계별 관리 시점, 적정 살포량, 수확 예측일을 자동 제안합니다.',
    color: 'yellow',
  },
];

const productSummary = [
  '노균병·탄저병·잿빛곰팡이병 AI 조기 경보 (육안 확인 전 3~14일)',
  'PMI 기반 포도 전용 기상-발병 위험 지수',
  'GDD·TRV·LAI·VitiCanopy 통합 DSS — 수확일 자동 예측',
  'RAG 지식 시스템 — 논문 기반 포도 처방 AI 상담',
  '8종 환경 센서 + 기상 데이터 통합 실시간 모니터링',
  '블록체인 생산 이력 — 수출·유통 신뢰성 강화',
];

const colorMap: Record<string, string> = {
  green: 'bg-green-500/10 border-green-500/20 text-green-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
};

export function LegacyGrapeDetail() {
  return (
    <section aria-label="FarmSense 포도 전용 솔루션 상세" className="mt-20">

      {/* ── 섹션 헤더 ── */}
      <header className="text-center border-t border-white/10 pt-16 mb-14">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-3">
          FarmSense 포도 전용 솔루션
        </p>
        <h2 id="grape-crisis-heading" className="text-3xl md:text-4xl font-serif font-bold mb-4">
          대한민국 포도 농가의 위기와 해법
        </h2>
        <p className="text-neutral-cream/60 max-w-2xl mx-auto leading-relaxed">
          경험 의존 재배의 한계, 반복되는 병해 피해, 분절된 데이터.
          FarmSense는 데이터와 AI로 포도 농가의 의사결정을 돕습니다.
        </p>
      </header>

      {/* ── 1. 문제 정의: 통계 + 4 문제 카드 ── */}
      <section aria-labelledby="grape-crisis-heading" className="mb-14 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {problemStats.map((s) => (
            <div key={s.label} className="p-5 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm font-medium text-neutral-cream/70 mb-1">{s.label}</div>
              <div className="text-xs text-neutral-cream/40">{s.sub}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-cream/30 text-right">
          * 농진청·한국농촌경제연구원 자료 기준 (2023)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problemPoints.map((p) => (
            <div key={p.title} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-base font-semibold mb-2 text-red-400">{p.title}</h3>
              <p className="text-sm text-neutral-cream/60 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. 솔루션 오버뷰 ── */}
      <section aria-labelledby="grape-solution-heading" className="mb-14">
        <div className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-2xl border border-green-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="grape-solution-heading" className="text-2xl md:text-3xl font-serif font-bold mb-4">
              데이터 + AI = 예측 가능한 포도 농업
            </h2>
            <p className="text-neutral-cream/70 leading-relaxed mb-6">
              FarmSense는 단순한 진단을 넘어선 예방적 관리를 제공합니다.
              PMI·GDD·TRV·LAI 등 논문 검증 지표와 VitiCanopy 알고리즘으로
              포도 농업인의 직감에 과학을 더합니다.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm text-neutral-cream/70">
              <span className="text-green-400">✓</span>
              조기 감지부터 예방까지 완전한 포도 농업 솔루션
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. 포도 전용 핵심 기술 4카드 ── */}
      <section aria-labelledby="grape-tech-heading" className="mb-14">
        <h2 id="grape-tech-heading" className="text-2xl font-serif font-bold mb-8 text-center">
          포도 전용 핵심 기술
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {grapeCoreTech.map((tech) => (
            <div
              key={tech.tag}
              className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors"
            >
              <span className={`inline-block px-2 py-1 rounded text-xs font-medium mb-3 border ${colorMap[tech.color]}`}>
                {tech.tag}
              </span>
              <h3 className="text-lg font-semibold mb-3 text-white">{tech.title}</h3>
              <p className="text-sm text-neutral-cream/60 leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. 제품 요약 ── */}
      <section aria-labelledby="grape-product-heading">
        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
          <h2 id="grape-product-heading" className="text-xl font-serif font-bold mb-6">
            조기 감지부터 수확까지 — 포도 완전 솔루션
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {productSummary.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="text-primary-green mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                <span className="text-neutral-cream/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </section>
  );
}
