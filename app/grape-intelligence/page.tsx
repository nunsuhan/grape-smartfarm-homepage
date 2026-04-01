import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포도 인텔리전스',
  description: '팜센스(FarmSense) 데이터 기반 포도 재배 인텔리전스 시스템 — 생장 모델, 품질 예측, 환경 모니터링으로 정밀 포도 재배를 지원합니다.',
  keywords: '팜센스, 포도 인텔리전스, grape intelligence, precision viticulture, grape growth model',
};

import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';

const growthStages = [
  {
    stage: 'Dormancy',
    period: '12월-2월',
    keyMetrics: ['온도 누적', '휴면 깨짐', '가지 상태'],
    monitoring: '겨울 동안의 나무 상태와 휴면 깊이 모니터링',
    icon: '🌙',
  },
  {
    stage: 'Flowering',
    period: '3월-4월',
    keyMetrics: ['개화율', '수정 성공률', '기상 조건'],
    monitoring: '개화 시기와 조건에 따른 수확량 예측',
    icon: '🌸',
  },
  {
    stage: 'Coloring',
    period: '6월-7월',
    keyMetrics: ['색소 축적', '당도 변화', '산도 변화'],
    monitoring: '과실 발달과 품질 형성 과정 추적',
    icon: '🎨',
  },
  {
    stage: 'Harvest',
    period: '8월-9월',
    keyMetrics: ['최적 수확 시기', '품질 지수', '수확 효율'],
    monitoring: '수확 시기 결정과 품질 최적화',
    icon: '✂️',
  },
];

const qualityMetrics = [
  {
    metric: 'Sugar Content',
    unit: '°Brix',
    target: '18-22°Brix',
    importance: '당도는 포도의 품질과 가격을 결정하는 가장 중요한 요소',
    monitoring: '주간 당도 변화 추적 및 예측',
  },
  {
    metric: 'Acidity',
    unit: 'pH',
    target: '3.2-3.8 pH',
    importance: '산도는 포도의 신선함과 균형을 결정',
    monitoring: '산도 변화와 당산비 최적화',
  },
  {
    metric: 'Berry Size',
    unit: 'mm',
    target: '18-22mm',
    importance: '과실 크기는 시장성과 소비자 선호도에 영향',
    monitoring: '과실 발달 추적 및 크기 예측',
  },
  {
    metric: 'Cluster Weight',
    unit: 'g',
    target: '300-500g',
    importance: '송이 무게는 수확량과 포장 효율성 결정',
    monitoring: '송이 발달과 최종 무게 예측',
  },
];

const environmentalData = [
  {
    factor: 'Temperature',
    optimal: '15-30°C',
    impact: '생장 속도, 당도 축적, 색소 형성에 직접적 영향',
    monitoring: '주야간 온도차와 생장 적산 온도 추적',
  },
  {
    factor: 'Humidity',
    optimal: '60-80%',
    impact: '병해충 발생, 증산 작용, 과실 품질에 영향',
    monitoring: '상대 습도와 이슬점 관리',
  },
  {
    factor: 'Solar Radiation',
    optimal: '6-8 hours/day',
    impact: '광합성 효율, 당도 축적, 색소 형성 결정',
    monitoring: '일사량과 광합성 활성도 측정',
  },
  {
    factor: 'Irrigation',
    optimal: '주기적 관리',
    impact: '수분 스트레스 관리, 과실 크기와 품질 결정',
    monitoring: '토양 수분과 관수 시기 최적화',
  },
];

export default function GrapeIntelligencePage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Grape Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              데이터 기반 포도 재배 지능 시스템
            </p>
            <p className="text-lg text-neutral-cream/60">
              FarmSense의 포도 특화 AI 모델과 센서 데이터를 통한 정밀 농업 솔루션
              <br />
              지자체, 농업기술센터, 연구기관을 위한 종합 포도 재배 인텔리전스
            </p>
          </div>
        </Container>
      </section>

      {/* Grape Growth Model */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                포도 생장 모델 (Grape Growth Model)
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                포도의 생장 주기별 데이터 기반 모니터링과 관리 최적화
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {growthStages.map((stage) => (
                <Card key={stage.stage} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{stage.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{stage.stage}</CardTitle>
                          <CardDescription>{stage.period}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-cream/70 mb-4 text-sm">
                      {stage.monitoring}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-neutral-cream/80 text-sm">주요 지표:</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.keyMetrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs border border-green-500/20"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-neutral-cream/70 max-w-3xl mx-auto">
                각 생장 단계별 최적의 환경 조건과 관리 방법을 데이터로 검증하고,
                AI 모델을 통해 다음 단계의 생장을 예측합니다.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Prediction */}
      <section className="py-20 bg-white/5">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                품질 예측 시스템 (Quality Prediction)
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                실시간 품질 모니터링과 수확 시기 최적화
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {qualityMetrics.slice(0, 2).map((metric) => (
                  <Card key={metric.metric} className="bg-neutral-black/50 border-white/10">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{metric.metric}</CardTitle>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-cream/60 border border-white/10">
                          {metric.target}
                        </span>
                      </div>
                      <CardDescription>{metric.unit}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-cream/70 mb-3 text-sm">
                        {metric.importance}
                      </p>
                      <div className="p-3 bg-green-500/10 rounded border border-green-500/20">
                        <p className="text-sm text-green-400">
                          {metric.monitoring}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-6">
                {qualityMetrics.slice(2, 4).map((metric) => (
                  <Card key={metric.metric} className="bg-neutral-black/50 border-white/10">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{metric.metric}</CardTitle>
                        <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-cream/60 border border-white/10">
                          {metric.target}
                        </span>
                      </div>
                      <CardDescription>{metric.unit}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-cream/70 mb-3 text-sm">
                        {metric.importance}
                      </p>
                      <div className="p-3 bg-blue-500/10 rounded border border-blue-500/20">
                        <p className="text-sm text-blue-400">
                          {metric.monitoring}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-white/10 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">종합 품질 지수 (Quality Index)</h3>
                  <p className="text-neutral-cream/70">
                    네 가지 품질 지표를 종합한 AI 기반 품질 예측 모델로
                    최적 수확 시기와 시장 등급을 예측합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Environmental Data */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                환경 데이터 모니터링 (Environmental Data)
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                포도 재배에 최적화된 환경 조건 관리와 모니터링
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {environmentalData.map((env) => (
                <Card key={env.factor} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{env.factor}</CardTitle>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-neutral-cream/60 border border-white/10">
                        최적: {env.optimal}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-neutral-cream/80 text-sm mb-1">영향:</h4>
                        <p className="text-neutral-cream/70 text-sm">{env.impact}</p>
                      </div>
                      <div className="p-3 bg-purple-500/10 rounded border border-purple-500/20">
                        <h4 className="font-semibold text-purple-400 text-sm mb-1">모니터링:</h4>
                        <p className="text-purple-300/80 text-sm">{env.monitoring}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Applications for Government & Tech Centers */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                지자체 및 농업기술센터 활용 방안
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                지역 농업 발전과 정책 수립을 위한 데이터 기반 솔루션
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">지역 단위 모니터링</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      '지역별 포도 재배 현황 실시간 모니터링',
                      '기후 변화에 따른 재배 패턴 분석',
                      '병해충 발생 예측 및 대응 체계',
                      '수확량 예측과 시장 공급 계획',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-neutral-cream/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">정책 결정 지원</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      '농업 보조금 배분 최적화',
                      '신품종 도입 효과 분석',
                      '재배 기술 보급 효과 평가',
                      '수출 지원 정책 수립',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-neutral-cream/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">연구 및 교육</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      '농업 교육용 실시간 데이터 제공',
                      '연구 기관과의 데이터 공유',
                      '신기술 실증 연구 지원',
                      '농업인 교육 프로그램 개발',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-neutral-cream/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              포도 재배 데이터 인텔리전스 시작하기
            </h2>
            <p className="text-xl text-neutral-cream/80 mb-8">
              지자체, 농업기술센터, 연구기관을 위한 맞춤형 포도 재배 솔루션
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?type=government"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
              >
                정부/기관 문의
              </a>
              <a
                href="/data-intelligence"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                데이터 인텔리전스 보기
              </a>
            </div>
            <p className="text-neutral-cream/60 mt-8 text-sm">
              농업기술센터 협력 문의: partnership@farmsense.kr
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}