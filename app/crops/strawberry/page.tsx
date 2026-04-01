import type { Metadata } from 'next';
import { CropLayout } from '@/components/crops/crop-layout';

export const metadata: Metadata = {
  title: '딸기 재배 종합 가이드',
  description: '팜센스(FarmSense) 딸기 재배 종합 가이드 — 187농가 데이터에서 찾은 최적 재배 전략, 품종별 특성부터 환경 관리까지.',
};

const varieties = [
  {
    name: '설향',
    description: 'kg당 10,008원, 관부직경 18.7mm, 초장 34.7mm, 엽수 11.6매. 단동에서 안정적인 생육.',
    stats: [
      { label: '관부직경', value: '18.7mm' },
      { label: '초장', value: '34.7mm' },
      { label: '엽수', value: '11.6매' },
      { label: 'kg당 단가', value: '10,008원/kg' },
    ],
  },
  {
    name: '금실',
    description: 'kg당 13,014원 (설향 대비 +30% 프리미엄), 관부직경 23.7mm로 생육 최강. 연동 재배 최적.',
    stats: [
      { label: '관부직경', value: '23.7mm' },
      { label: '초장', value: '35.7mm' },
      { label: '엽수', value: '9.7매' },
      { label: 'kg당 단가', value: '13,014원/kg (+30%)' },
    ],
    highlight: true,
  },
  {
    name: '킹스베리',
    description: 'kg당 9,794원, 관부직경 16.6mm, 초장 37.5mm, 엽수 10.6매. 경제적인 대량 재배 품종.',
    stats: [
      { label: '관부직경', value: '16.6mm' },
      { label: '초장', value: '37.5mm' },
      { label: '엽수', value: '10.6매' },
      { label: 'kg당 단가', value: '9,794원/kg' },
    ],
  },
];

const cultivationTypes = [
  {
    type: '연동',
    description: '금실은 연동에서만 장점 발휘. 단동이면 설향이 안정적.',
    points: [
      '습도 안정성 높음 (p=0.011)',
      '금실 관부직경 26.4mm',
      '설향 관부직경 19.8mm',
      '잿빛곰팡이 위험 감소',
    ],
    note: '난방방식별 차이: 전기/팰릿: 15.16°C vs 등유: 13.26°C (차이 +1.9°C)',
  },
  {
    type: '단동',
    description: '단동 재배 시 설향이 더 안정적인 생육 특성 보임',
    points: [
      '금실 관부직경 16.3mm (-38%)',
      '설향 관부직경 17.7mm (-12%)',
      '야간 최저기온 5.25°C',
    ],
  },
];

const keyFindings = [
  { title: 'CO₂와 관부직경', correlation: 'r=0.470 (p<0.001)', description: '가장 강한 상관 관계. 700ppm 이상 유지 시 관부직경 20mm+ 달성 가능.' },
  { title: '온도와 관부직경', correlation: 'r=0.379 (p<0.001)', description: '두 번째로 강한 상관. 적정 온도 관리가 생육에 중요.' },
  { title: '농가간 EC 편차', correlation: 'CV=69.4%', description: '양액 관리 수준 차이가 품질을 결정합니다. 표준화 필요.' },
  { title: '농가간 CO₂ 편차', correlation: 'CV=37.5%', description: '시비 격차 큼. CO₂ 피크 시간 07시 (새벽 축적 → 일출 후 소비)' },
  { title: '측창개도 vs 온도', correlation: 'r=0.362 (p<0.001)', description: '환기 효과 확인. 평균 일교차 6.03°C (딸기 적정 범위)' },
];

const ceiComponents = [
  { name: '습도', weight: '50%', range: '60-80%', note: '잿빛곰팡이 위험 관리' },
  { name: 'CO₂', weight: '30%', range: '600-1,000ppm', note: '생육 최대 변수 (r=0.470)' },
  { name: '온도', weight: '20%', range: '주간 20-25°C / 야간 8-12°C', note: '생육 속도 및 품질' },
];

const diseases = [
  { name: '잿빛곰팡이', risk: 'HIGH RISK', condition: '습도 90%+ 4시간 연속', prevention: '환기 관리, 습도 80% 이하 유지' },
  { name: '흰가루병', risk: 'MEDIUM RISK', condition: '습도 변동 + 15-25°C', prevention: '온도·습도 안정화, 예방적 방제' },
];

export default function StrawberryPage() {
  return (
    <CropLayout
      title="딸기 스마트팜"
      description="양액부터 환기까지, 187농가 데이터에서 찾은 최적 재배 전략"
      stats={[
        { label: '환경 레코드', value: '913,587 환경 레코드', color: 'green' },
        { label: '농가 분석', value: '187농가 분석', color: 'purple' },
        { label: '센서 종류', value: '9작물 22종 센서', color: 'blue' },
        { label: '데이터 상태', value: '운영중 데이터', color: 'yellow' },
      ]}
    >
      {/* 품종 정보 */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8">품종별 특성 비교</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {varieties.map((v) => (
            <div key={v.name} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-colors">
              <h3 className="text-xl font-semibold mb-3">{v.name}</h3>
              <p className="text-neutral-cream/60 text-sm leading-relaxed mb-4">{v.description}</p>
              <div className="space-y-2">
                {v.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-neutral-cream/40">{stat.label}</span>
                    <span className={`font-medium ${v.highlight && stat.label.includes('단가') ? 'text-yellow-400' : ''}`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-cream/50 italic">
          ANOVA 결과: 모든 생육 지표 p&lt;0.001 — 품종 간 차이 통계적으로 명확 (착색도 F=953.7, 엽수 F=83.0, 초장 F=35.1)
        </p>
      </section>

      {/* 재배유형별 비교 */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8">재배유형별 최적 전략</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cultivationTypes.map((type) => (
            <div key={type.type} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">{type.type} 재배</h3>
              <p className="text-neutral-cream/60 mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-neutral-cream/70">{point}</span>
                  </li>
                ))}
              </ul>
              {type.note && (
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-400">
                    <strong>난방방식별 차이:</strong> {type.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 환경-생육 핵심 발견 */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8">환경-생육 핵심 발견 (187농가 데이터)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFindings.map((finding, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold">{finding.title}</h3>
                <span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400">
                  {finding.correlation}
                </span>
              </div>
              <p className="text-sm text-neutral-cream/60 leading-relaxed">{finding.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-sm text-neutral-cream/70">
            <strong>환경→생육 회귀 R²: 0.221</strong> — CO₂가 주요인. 농가간 관리 수준 차이가 품질 결정.
          </p>
        </div>
      </section>

      {/* 딸기 CEI */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8">딸기 CEI (작물환경지수)</h2>
        <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">CEI = 습도 50% + CO₂ 30% + 온도 20%</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                전체 평균: <strong className="text-green-400">38.9</strong> (0~100, 낮을수록 양호)
              </span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 w-2/5"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ceiComponents.map((component, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">{component.name}</h4>
                  <span className="text-sm px-2 py-1 bg-white/10 rounded">{component.weight}</span>
                </div>
                <p className="text-sm text-neutral-cream/60 mb-1">적정 범위: {component.range}</p>
                <p className="text-xs text-neutral-cream/40">{component.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-400">
              <strong>최고 위험 농가:</strong> PF_0000778_01 (CEI: 70.9) — 습도+온도 관리 부족
            </p>
          </div>
        </div>
      </section>

      {/* 병해 위험 관리 */}
      <section className="mb-16">
        <h2 className="text-2xl font-serif font-bold mb-8">병해 위험 관리</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diseases.map((disease, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">{disease.name}</h3>
                <span className="px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-400">
                  {disease.risk}
                </span>
              </div>
              <p className="text-sm text-neutral-cream/60 mb-3">발생 조건: {disease.condition}</p>
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-sm text-green-400">
                  <strong>예방 전략:</strong> {disease.prevention}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
          <h3 className="text-lg font-semibold mb-3">FarmSense Climate 환기 최적화</h3>
          <ul className="space-y-2 text-sm text-neutral-cream/70">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Boulard-Kittas 물리 모델 + 혁신밸리 실측 데이터 기반</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>풍압환기 + 부력환기 통합 계산 (Boulard-Kittas 공식)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>목표 온도/습도 → 최적 천창/측창 개도율 자동 산출</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Magnus 이슬점 계산 → 결로까지 남은 시간 표시</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>24시간 스케줄: 계절×생육단계별 시간대 환기 계획 자동 생성</span>
            </li>
          </ul>
        </div>
      </section>
    </CropLayout>
  );
}