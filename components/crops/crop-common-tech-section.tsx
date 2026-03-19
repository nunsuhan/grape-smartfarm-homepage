/**
 * CropCommonTechSection
 * 작물 종류에 관계없이 재사용 가능한 공통 코어 엔진 소개 섹션
 * CROP_COMMON 콘텐츠 — 포도 외 사과·배·토마토 등 다른 작물 페이지에서도 재사용 가능
 *
 * 메인 홈 Technology(아키텍처 레이어) / Modules(기능 나열)와 메시지 차별화:
 * → 이 섹션은 "왜 작물별 전용 엔진이 필요한가"에 집중합니다.
 *
 * Props:
 *   cropName?: string — 특정 작물 맥락을 강조할 때 선택적으로 전달 (기본: 일반화 표현)
 */

interface CropCommonTechSectionProps {
  cropName?: string;
}

const whyEngineItems = [
  {
    icon: '📊',
    title: '작물마다 다른 생육 언어',
    desc: '딸기의 적정 CO₂ 농도와 포도의 GDD 누적 기준은 완전히 다릅니다. 범용 알고리즘은 작물의 생육 언어를 읽지 못합니다. FarmSense는 작물별 논문 검증 지표를 각각 탑재합니다.',
  },
  {
    icon: '🔗',
    title: '기상·센서·영농일지의 통합',
    desc: '흩어진 데이터는 통합될 때 비로소 의사결정 근거가 됩니다. 세 가지 데이터를 하나의 파이프라인으로 연결해 PMI·GDD·TRV·LAI 등 지표를 실시간으로 계산합니다.',
  },
  {
    icon: '🎯',
    title: '예측하지 않으면 항상 늦습니다',
    desc: '병해 발생 후, 수확 시기 후 — 사후 대응은 손실 이후의 이야기입니다. 작물 전용 예측 엔진이 있어야 "아직 늦지 않은 시점"에 행동할 수 있습니다.',
  },
];

const differenceRows = [
  {
    aspect: '병해 대응 방식',
    generic: '발생 후 진단·방제',
    farmsense: '기상 패턴 기반 발병 전 경보 (PMI)',
  },
  {
    aspect: '수확 시기 결정',
    generic: '경험과 육안 관찰',
    farmsense: 'GDD 적산온도 + 품질 지수 자동 예측',
  },
  {
    aspect: '처방 근거',
    generic: '구전·관행 농법',
    farmsense: 'RAG 논문 검색 + 현장 데이터 결합',
  },
  {
    aspect: '데이터 활용',
    generic: '센서 수치 확인만',
    farmsense: '기상·센서·영농일지 통합 DSS 출력',
  },
];

export function CropCommonTechSection({ cropName }: CropCommonTechSectionProps) {
  const subjectLabel = cropName ? `${cropName} 재배 농가` : '작물 재배 농가';

  return (
    <section
      aria-labelledby="crop-engine-heading"
      className="py-20 bg-white/[0.02] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── 섹션 헤더 (H2 — crops/page H1 아래) ── */}
        <header className="text-center mb-16">
          <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-3">
            FarmSense Core Engine
          </p>
          <h2 id="crop-engine-heading" className="text-3xl md:text-4xl font-serif font-bold mb-4">
            모든 작물을 위한 데이터 + AI 엔진
          </h2>
          <p className="text-neutral-cream/60 max-w-2xl mx-auto leading-relaxed">
            {subjectLabel}에게 필요한 건 기능 목록이 아닙니다.
            "왜 이 엔진이 없으면 안 되는가"를 먼저 이해하면
            FarmSense가 어떤 문제를 해결하는지 명확해집니다.
          </p>
        </header>

        {/* ── 1. 작물 전용 엔진이 필요한 이유 3블록 ── */}
        <section aria-labelledby="crop-engine-heading" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyEngineItems.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="text-base font-semibold mb-2 text-neutral-cream/90">{item.title}</h3>
                <p className="text-sm text-neutral-cream/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. 범용 vs FarmSense 비교표 ── */}
        <section aria-labelledby="crop-compare-heading" className="mb-16">
          <h3 id="crop-compare-heading" className="text-xl font-semibold mb-6 text-neutral-cream/80">
            범용 스마트팜 vs FarmSense 작물 전용 엔진
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="text-left py-3 px-4 text-neutral-cream/40 font-medium w-1/4">항목</th>
                  <th scope="col" className="text-left py-3 px-4 text-neutral-cream/40 font-medium w-[37.5%]">범용 스마트팜</th>
                  <th scope="col" className="text-left py-3 px-4 text-primary-green font-medium w-[37.5%]">FarmSense</th>
                </tr>
              </thead>
              <tbody>
                {differenceRows.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={`border-b border-white/5 ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}
                  >
                    <th scope="row" className="py-3 px-4 text-neutral-cream/50 font-normal text-left">
                      {row.aspect}
                    </th>
                    <td className="py-3 px-4 text-neutral-cream/50">{row.generic}</td>
                    <td className="py-3 px-4 text-neutral-cream/80 font-medium">{row.farmsense}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── 3. 강조 문구 ── */}
        <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-xl border border-green-500/20 text-center">
          <p className="text-lg font-medium text-neutral-cream/80">
            &ldquo;논문 검증 알고리즘으로{' '}
            <span className="text-primary-green">농업인의 직감에 과학을 더합니다.</span>&rdquo;
          </p>
          <p className="text-sm text-neutral-cream/50 mt-2">
            PMI · GDD · TRV · LAI · CEI · VitiCanopy — FarmSense 코어 알고리즘
          </p>
        </div>

      </div>
    </section>
  );
}
