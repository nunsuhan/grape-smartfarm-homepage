import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '농업 데이터 플랫폼',
  description: '팜센스(FarmSense) 농업 데이터 플랫폼 — 정부기관, 연구기관, 기술센터를 위한 지역 농업 인텔리전스 및 정책 지원 서비스입니다.',
  keywords: '팜센스, 농업 데이터 플랫폼, agricultural data platform, agriculture intelligence, farm data analytics',
};

import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';

const platformComponents = [
  {
    component: 'Sensor Network',
    description: '농장 전반에 배치된 IoT 센서 네트워크',
    capabilities: ['실시간 환경 데이터 수집', '원격 모니터링', '에너지 효율적 운영', '확장 가능한 아키텍처'],
    icon: '📡',
    color: 'from-green-500/20 to-emerald-600/20',
  },
  {
    component: 'Crop Growth Data',
    description: '작물 생장과 발달 데이터 수집 및 분석',
    capabilities: ['생장 단계 모니터링', '건강 지표 추적', '수확량 예측', '품질 변화 분석'],
    icon: '📈',
    color: 'from-blue-500/20 to-cyan-600/20',
  },
  {
    component: 'Quality Data',
    description: '품질 평가와 시장 적합성 데이터',
    capabilities: ['품질 지표 측정', '시장 등급 분류', '저장 조건 모니터링', '유통 기한 예측'],
    icon: '🔬',
    color: 'from-yellow-500/20 to-amber-600/20',
  },
  {
    component: 'Regional Analysis',
    description: '지역 단위 농업 데이터 통합 분석',
    capabilities: ['지역별 비교 분석', '기후 영향 평가', '정책 효과 분석', '시장 트렌드 예측'],
    icon: '🗺️',
    color: 'from-purple-500/20 to-violet-600/20',
  },
];

const applications = [
  {
    area: 'Policy Support',
    title: '정책 결정 지원',
    description: '데이터 기반 농업 정책 수립과 평가',
    examples: [
      '보조금 배분 최적화',
      '작물 재배 권장안 개발',
      '기후 변화 대응 전략',
      '지역 농업 발전 계획',
    ],
  },
  {
    area: 'Crop Analysis',
    title: '작물 분석 및 모니터링',
    description: '지역 단위 작물 성장과 건강 상태 분석',
    examples: [
      '병해충 발생 예측',
      '수확량 예측 모델',
      '품질 변화 추적',
      '재배 방법 비교 평가',
    ],
  },
  {
    area: 'Regional Agriculture Intelligence',
    title: '지역 농업 인텔리전스',
    description: '지역 농업 현황과 발전 방향 분석',
    examples: [
      '지역 특화 작물 선정',
      '시장 접근성 분석',
      '인프라 계획 수립',
      '교육 프로그램 개발',
    ],
  },
];

const stakeholders = [
  {
    group: '지자체 (Local Government)',
    needs: '지역 농업 발전, 정책 효과 평가, 예산 배분 최적화',
    benefits: [
      '데이터 기반 정책 결정',
      '지역 농업 현황 실시간 모니터링',
      '정책 효과 측정 및 평가',
      '주민 서비스 향상',
    ],
  },
  {
    group: '농업기술센터 (Agricultural Technology Centers)',
    needs: '농업인 교육, 기술 보급, 현장 문제 해결',
    benefits: [
      '실시간 농장 데이터 접근',
      '교육 자료 개발 지원',
      '기술 실증 연구 데이터',
      '농업인 맞춤형 조언',
    ],
  },
  {
    group: '연구기관 (Research Institutions)',
    needs: '농업 연구, 데이터 분석, 논문 발표',
    benefits: [
      '대규모 농업 데이터셋',
      '장기적 추세 분석',
      '연구 협력 기회',
      '실험 설계 지원',
    ],
  },
];

export default function AgricultureDataPlatformPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              FarmSense Agricultural Data Platform
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              농업 데이터 플랫폼
            </p>
            <p className="text-lg text-neutral-cream/60">
              지자체, 농업기술센터, 연구기관을 위한 종합 농업 데이터 플랫폼
              <br />
              정책 지원, 작물 분석, 지역 농업 인텔리전스를 위한 데이터 기반 솔루션
            </p>
          </div>
        </Container>
      </section>

      {/* Platform Components */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                플랫폼 구성 요소
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                FarmSense 농업 데이터 플랫폼의 핵심 구성 요소
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformComponents.map((component) => (
                <Card key={component.component} className="bg-neutral-black/50 border-white/10">
                  <div className={`h-2 bg-gradient-to-r ${component.color} rounded-t-xl`} />
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{component.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{component.component}</CardTitle>
                        <CardDescription className="text-sm">{component.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-neutral-cream/80 text-sm">주요 기능:</h4>
                      <ul className="space-y-1">
                        {component.capabilities.map((capability, index) => (
                          <li key={index} className="text-xs text-neutral-cream/60 flex items-start">
                            <span className="w-1 h-1 rounded-full bg-white/40 mt-1.5 mr-2 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Platform Applications */}
      <section className="py-20 bg-white/5">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                플랫폼 활용 분야
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                농업 데이터 플랫폼의 주요 활용 분야와 적용 사례
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applications.map((app) => (
                <Card key={app.area} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-cream/80 text-sm">적용 예시:</h4>
                      <ul className="space-y-2">
                        {app.examples.map((example, index) => (
                          <li key={index} className="flex items-start text-sm text-neutral-cream/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stakeholder Benefits */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                이해관계자별 혜택
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                각 이해관계자에게 제공되는 맞춤형 가치와 혜택
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stakeholders.map((stakeholder) => (
                <Card key={stakeholder.group} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">{stakeholder.group}</CardTitle>
                    <CardDescription>{stakeholder.needs}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-cream/80 text-sm">주요 혜택:</h4>
                      <ul className="space-y-2">
                        {stakeholder.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-neutral-cream/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Data Platform Architecture */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                데이터 플랫폼 아키텍처
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                확장 가능하고 안전한 농업 데이터 플랫폼 구조
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transform -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                {[
                  { layer: '데이터 수집', tech: 'IoT Sensors, Drones, Manual Input', icon: '📥' },
                  { layer: '데이터 처리', tech: 'Data Cleaning, Normalization, Storage', icon: '⚙️' },
                  { layer: '데이터 분석', tech: 'AI Models, Statistical Analysis', icon: '📊' },
                  { layer: '인사이트 생성', tech: 'Dashboards, Reports, Alerts', icon: '💡' },
                  { layer: '응용 프로그램', tech: 'APIs, Mobile Apps, Web Interfaces', icon: '📱' },
                ].map((item, index) => (
                  <div key={item.layer} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-black border-2 border-green-500/30 flex items-center justify-center text-2xl mx-auto mb-4">
                      {item.icon}
                    </div>
                    <Card className="bg-neutral-black/80 border-white/10">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{item.layer}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-neutral-cream/60">{item.tech}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-neutral-cream/70 max-w-3xl mx-auto">
                각 계층은 독립적으로 운영되며 API를 통해 통합되어,
                다양한 응용 프로그램과 시스템과의 연동이 가능합니다.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Implementation & Partnership */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">
                플랫폼 도입 및 협력
              </h2>
              <p className="text-xl text-neutral-cream/70">
                지자체, 농업기술센터, 연구기관을 위한 맞춤형 도입 방안
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">플랫폼 도입 절차</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {[
                      { step: '1. 요구사항 분석', desc: '기관별 필요와 목표 파악' },
                      { step: '2. 맞춤형 설정', desc: '플랫폼 구성과 인터페이스 맞춤화' },
                      { step: '3. 시범 운영', desc: '제한적 규모에서의 테스트와 조정' },
                      { step: '4. 전면 도입', desc: '전체 시스템 운영과 직원 교육' },
                      { step: '5. 지속적 지원', desc: '기술 지원과 기능 업데이트' },
                    ].map((item) => (
                      <li key={item.step} className="flex items-start">
                        <span className="font-semibold text-green-400 mr-3">{item.step}</span>
                        <span className="text-neutral-cream/70 text-sm">{item.desc}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">협력 모델</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <h4 className="font-semibold text-blue-400 mb-2">라이선스 구매</h4>
                      <p className="text-sm text-neutral-cream/70">
                        기관 내부 사용을 위한 플랫폼 라이선스
                      </p>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <h4 className="font-semibold text-green-400 mb-2">연구 협력</h4>
                      <p className="text-sm text-neutral-cream/70">
                        공동 연구 프로젝트와 데이터 공유
                      </p>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <h4 className="font-semibold text-purple-400 mb-2">컨설팅 서비스</h4>
                      <p className="text-sm text-neutral-cream/70">
                        농업 데이터 분석과 정책 컨설팅
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              농업 데이터 플랫폼 시작하기
            </h2>
            <p className="text-xl text-neutral-cream/80 mb-8">
              지자체, 농업기술센터, 연구기관을 위한 데이터 기반 농업 솔루션
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?type=platform-inquiry"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
              >
                플랫폼 도입 문의
              </a>
              <a
                href="/data-intelligence"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                데이터 인텔리전스 보기
              </a>
            </div>
            <p className="text-neutral-cream/60 mt-8 text-sm">
              기관 협력 문의: government@farmsense.kr | 전화: 02-XXXX-XXXX
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}