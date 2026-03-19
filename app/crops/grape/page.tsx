import type { Metadata } from 'next';
import { CropLayout } from '@/components/crops/crop-layout';
import { GrapeSolutionSummary } from '@/components/crops/grape-solution-summary';
import { LegacyGrapeDetail } from '@/components/sections/legacy-grape-detail';

export const metadata: Metadata = {
  title: '포도 재배 | FarmSense',
  description: '팜센스 포도 재배 종합 가이드. 샤인머스캣부터 캠벨얼리까지 데이터 기반 포도 재배를 시작하세요.',
};

const varieties = [
  { name: '샤인머스캣', desc: '당도 높고 씨 없는 청포도. 수출 시장에서 인기 높은 프리미엄 품종.' },
  { name: '캠벨얼리', desc: '국내 소비가 많은 대표 적포도. 병해 관리가 재배 성패의 핵심.' },
  { name: '거봉', desc: '알이 크고 당도 높은 흑포도. 적절한 적방·적립 관리가 중요.' },
];

const diseases = [
  { name: '노균병', desc: '고온 다습 환경에서 발생. 환기 관리와 예방적 방제가 중요.' },
  { name: '탄저병', desc: '과실에 갈색 병반 형성. 수확 전 방제 이력 관리 필수.' },
  { name: '갈색무늬병', desc: '잎에 갈색 반점 형성. 조기 발견 시 피해를 최소화할 수 있음.' },
  { name: '잿빛곰팡이병', desc: '과방 내부에서 발생. 봉지 씌우기 전 방제 철저히 필요.' },
];

const managementPoints = [
  { title: '봉지 씌우기', desc: '탄저병·잿빛곰팡이 예방과 품질 향상을 위해 적기에 봉지를 씌웁니다.' },
  { title: '적립·적방', desc: '과방당 알 수를 조절하여 당도와 크기의 균일도를 높입니다.' },
  { title: '당도 관리', desc: '수확 2-3주 전부터 관수를 줄이고 적산온도를 관리하여 당도를 높입니다.' },
  { title: '수확 후 처리', desc: '예냉 처리와 적정 온도 저장으로 신선도를 유지하고 유통 기간을 늘립니다.' },
];

export default function GrapePage() {
  return (
    <CropLayout
      title="포도 스마트팜"
      description="샤인머스캣부터 캠벨얼리까지 데이터 기반 포도 재배 종합 가이드"
      stats={[
        { label: '농가 데이터', value: '150+ 농가 분석', color: 'green' },
        { label: '센서 네트워크', value: '8종 환경 센서', color: 'purple' },
        { label: 'AI 진단', value: '실시간 병해충 분석', color: 'blue' },
        { label: '데이터 상태', value: '운영중 데이터', color: 'yellow' },
      ]}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6">주요 품종</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {varieties.map((v) => (
            <div key={v.name} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-2">{v.name}</h3>
              <p className="text-neutral-cream/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6">주요 병해충</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {diseases.map((d) => (
            <div key={d.name} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-2">{d.name}</h3>
              <p className="text-neutral-cream/60 text-sm leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6">관리 포인트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {managementPoints.map((m) => (
            <div key={m.title} className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
              <p className="text-neutral-cream/60 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 text-center">
        <a href="/smartfarm/dashboard" className="px-8 py-4 rounded-full bg-primary-green hover:bg-primary-green/90 text-white font-medium text-lg transition-colors">
          내 포도밭 관리하기
        </a>
      </div>

      {/* 2. FarmSense 포도 솔루션 요약 — 상세 설명(LegacyGrapeDetail) 앞 요약층 */}
      <GrapeSolutionSummary />

      {/* 3. 포도 전용 풀버전 상세 설명 */}
      <LegacyGrapeDetail />
    </CropLayout>
  );
}