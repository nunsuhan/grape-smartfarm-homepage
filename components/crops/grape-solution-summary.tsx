/**
 * GrapeSolutionSummary
 * /crops/grape 상단에 위치하는 FarmSense 포도 솔루션 3블록 요약
 * LegacyGrapeDetail의 풀버전 앞에 배치해 "서비스 설명" 층을 명확히 분리
 */

const summaryBlocks = [
  {
    icon: '🛡',
    module: 'FarmSense Protect',
    title: '노균병·탄저병·잿빛곰팡이병 AI 조기 경보',
    desc: '포도 농가 환경 센서 데이터로 훈련된 AI가 병해 전조 신호를 육안 확인 전 3~14일 전에 포착합니다. PMI 기반 발병 위험 지수로 예방 방제 타이밍을 데이터로 결정합니다.',
    stats: [
      { label: '조기 감지 리드타임', value: '3~14일' },
      { label: '모니터링 병해', value: '4종+' },
    ],
    color: 'green',
  },
  {
    icon: '📈',
    module: 'FarmSense Grow + Yield',
    title: 'GDD·TRV·LAI·VitiCanopy 통합 수확 예측',
    desc: '생장도일(GDD), 온도 위험값(TRV), 엽면적지수(LAI), VitiCanopy 수관 분석을 기상·센서 데이터에 통합해 생육 단계와 수확 예정일, 관리 타이밍을 자동 제안합니다.',
    stats: [
      { label: '알고리즘', value: '4종 통합' },
      { label: '참여 농가', value: '150+' },
    ],
    color: 'blue',
  },
  {
    icon: '🌏',
    module: 'FarmSense Trace + Export',
    title: '블록체인 생산 이력과 수출 기준 관리',
    desc: '포도 생산·방제·온도·습도 이력을 블록체인에 기록해 수출·유통 단계에서 신뢰를 증명합니다. MRL 기준 이력 관리와 등급 판정 데이터를 현장에서 자동 누적합니다.',
    stats: [
      { label: '이력 기록 방식', value: '블록체인' },
      { label: '지원 기준', value: 'GAP·MRL' },
    ],
    color: 'purple',
  },
];

const colorMap = {
  green:  { border: 'border-green-500/20',  icon: 'bg-green-500/10 text-green-400',  stat: 'text-green-400',  module: 'text-green-400' },
  blue:   { border: 'border-blue-500/20',   icon: 'bg-blue-500/10 text-blue-400',    stat: 'text-blue-400',   module: 'text-blue-400' },
  purple: { border: 'border-purple-500/20', icon: 'bg-purple-500/10 text-purple-400', stat: 'text-purple-400', module: 'text-purple-400' },
};

export function GrapeSolutionSummary() {
  return (
    <section aria-labelledby="grape-solution-summary-heading" className="mb-16 mt-4">

      {/* 헤더 */}
      <header className="text-center mb-10">
        <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-3">
          FarmSense for Grapes
        </p>
        <h2 id="grape-solution-summary-heading" className="text-2xl md:text-3xl font-serif font-bold mb-4">
          포도 농가를 위한 데이터 기반 의사결정 엔진
        </h2>
        <p className="text-neutral-cream/60 max-w-2xl mx-auto leading-relaxed text-sm">
          150+ 포도 농가 데이터와 8종 환경 센서, PMI·GDD·TRV·LAI·VitiCanopy를
          통합한 포도 전용 DSS로 병해 예방부터 수출 등급 관리까지 지원합니다.
        </p>
      </header>

      {/* 3블록 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryBlocks.map((block) => {
          const c = colorMap[block.color as keyof typeof colorMap];
          return (
            <div
              key={block.module}
              className={`p-6 bg-white/5 rounded-xl border ${c.border} hover:bg-white/[0.07] transition-colors`}
            >
              {/* 아이콘 + 모듈명 */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${c.icon}`}>
                  {block.icon}
                </div>
                <span className={`font-mono text-[10px] tracking-[1.5px] uppercase font-semibold ${c.module}`}>
                  {block.module}
                </span>
              </div>

              {/* 타이틀 + 설명 */}
              <h3 className="text-base font-semibold mb-2 text-white leading-snug">
                {block.title}
              </h3>
              <p className="text-sm text-neutral-cream/60 leading-relaxed mb-5">
                {block.desc}
              </p>

              {/* 통계 미니 배지 */}
              <div className="flex flex-wrap gap-2">
                {block.stats.map((s) => (
                  <div key={s.label} className="bg-white/[0.04] border border-white/10 rounded-lg px-3 py-1.5 text-center">
                    <div className={`text-sm font-bold ${c.stat}`}>{s.value}</div>
                    <div className="text-[10px] text-neutral-cream/40 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
