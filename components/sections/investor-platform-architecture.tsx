'use client';

import { Container } from '@/components/ui/container';
import { 
  Cpu, Database, Cloud, Shield, Globe, BarChart3, 
  Users, Building, Truck, Package, CheckCircle, 
  ArrowRight, Zap, Target, TrendingUp 
} from 'lucide-react';

export function InvestorPlatformArchitecture() {
  const layers = [
    {
      title: 'Data Collection Layer',
      subtitle: '실시간 농업 데이터 수집',
      color: 'from-blue-500/20 to-blue-600/10',
      border: 'border-blue-500/30',
      icon: Cpu,
      items: [
        'Farm Sensors (IoT)',
        'Environmental Monitoring',
        'Crop Health Imaging',
        'Soil & Water Analytics'
      ]
    },
    {
      title: 'Intelligence Layer',
      subtitle: 'AI 기반 농업 인텔리전스',
      color: 'from-purple-500/20 to-purple-600/10',
      border: 'border-purple-500/30',
      icon: Database,
      items: [
        'Crop Growth Prediction',
        'Disease & Pest Detection',
        'Yield Optimization',
        'Resource Management'
      ]
    },
    {
      title: 'Platform Core',
      subtitle: 'FarmSense 플랫폼 엔진',
      color: 'from-secondary-gold/20 to-secondary-gold/10',
      border: 'border-secondary-gold/30',
      icon: Cloud,
      items: [
        'Data Integration Hub',
        'API Gateway',
        'Real-time Analytics',
        'Multi-tenant Architecture'
      ]
    },
    {
      title: 'Trust & Compliance',
      subtitle: '수출 신뢰 인프라',
      color: 'from-green-500/20 to-green-600/10',
      border: 'border-green-500/30',
      icon: Shield,
      items: [
        'Blockchain Traceability',
        'Export Compliance (PLS)',
        'Quality Certification',
        'Supply Chain Verification'
      ]
    },
    {
      title: 'Market Access',
      subtitle: '글로벌 시장 연결',
      color: 'from-orange-500/20 to-orange-600/10',
      border: 'border-orange-500/30',
      icon: Globe,
      items: [
        'Buyer Matching Platform',
        'Export Documentation',
        'Logistics Integration',
        'Market Intelligence'
      ]
    }
  ];

  const stakeholders = [
    {
      title: '농가 (Farmers)',
      icon: Users,
      benefits: ['생산 효율 향상', '품질 인증 획득', '프리미엄 가격 협상력', '데이터 소유권']
    },
    {
      title: '해외 바이어 (Buyers)',
      icon: Building,
      benefits: ['공급 안정성 보장', '품질 검증 데이터', '위험 관리', '신뢰 기반 거래']
    },
    {
      title: '정부/연구기관',
      icon: BarChart3,
      benefits: ['농업 데이터 플랫폼', '정책 효과 분석', '연구 협업', '지속가능성 모니터링']
    },
    {
      title: '투자자 (Investors)',
      icon: TrendingUp,
      benefits: ['플랫폼 수익 모델', '시장 확장성', '데이터 자산 가치', '글로벌 스케일']
    }
  ];

  const valueMetrics = [
    { label: '농가 수익 증가', value: '30-50%', icon: TrendingUp, color: 'text-green-400' },
    { label: '수출 성공률', value: '85%+', icon: CheckCircle, color: 'text-blue-400' },
    { label: '데이터 정확도', value: '95%+', icon: Target, color: 'text-purple-400' },
    { label: '시장 확장 가능성', value: '10+ 국가', icon: Globe, color: 'text-orange-400' }
  ];

  return (
    <section className="py-20 bg-neutral-black text-neutral-cream">
      <Container className="max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-gold/10 text-secondary-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            투자자용 플랫폼 구조도
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FarmSense Platform Architecture
          </h2>
          <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
            데이터 기반 농업 플랫폼으로의 전환 — 농가, 바이어, 정부, 투자자를 연결하는 
            <span className="text-secondary-gold font-semibold"> 수직 통합 아키텍처</span>
          </p>
        </div>

        {/* Platform Layers */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">5-Layer Platform Architecture</h3>
          <div className="space-y-6">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div 
                  key={layer.title}
                  className={`relative bg-gradient-to-r ${layer.color} border ${layer.border} rounded-2xl p-8`}
                >
                  {/* Layer Number */}
                  <div className="absolute -left-3 -top-3 w-12 h-12 bg-neutral-black border-2 border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{layer.title}</h4>
                        <p className="text-neutral-cream/60 mb-4">{layer.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {layer.items.map((item) => (
                          <div key={item} className="flex items-center gap-3 bg-black/30 rounded-lg p-3">
                            <ArrowRight className="w-4 h-4 text-secondary-gold" />
                            <span className="text-neutral-cream/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stakeholder Value Proposition */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Multi-Stakeholder Value Creation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholders.map((stakeholder) => {
              const Icon = stakeholder.icon;
              return (
                <div key={stakeholder.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{stakeholder.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {stakeholder.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-cream/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Metrics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Quantifiable Platform Value</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valueMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                  <p className="text-neutral-cream/70 text-sm">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform Flow Visualization */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-white mb-6 text-center">End-to-End Platform Flow</h4>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {[
              { icon: Cpu, label: 'Farm Data' },
              { icon: Database, label: 'AI Analysis' },
              { icon: Shield, label: 'Quality Cert' },
              { icon: Package, label: 'Traceability' },
              { icon: Truck, label: 'Logistics' },
              { icon: Building, label: 'Buyer Access' }
            ].map((step, index, arr) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 p-3 rounded-xl mb-2">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-neutral-cream/70">{step.label}</span>
                </div>
                {index < arr.length - 1 && (
                  <div className="hidden md:block mx-4">
                    <ArrowRight className="w-6 h-6 text-secondary-gold/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-cream/50 text-sm mt-6">
            농장 데이터 수집부터 해외 바이어 도착까지의 완전한 디지털 플랫폼 흐름
          </p>
        </div>

        {/* Investment Thesis */}
        <div className="mt-12 bg-secondary-gold/5 border border-secondary-gold/20 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-white mb-4 text-center">투자 논리 (Investment Thesis)</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-semibold text-secondary-gold mb-3">시장 기회</h5>
              <ul className="space-y-2 text-neutral-cream/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                  <span>글로벌 농업 데이터 플랫폼 시장: $45B+ (2025)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                  <span>한국 농산물 수출 시장: $10B+ 성장 잠재력</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                  <span>ESG/지속가능 농업 투자 트렌드 가속화</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-secondary-gold mb-3">경쟁 우위</h5>
              <ul className="space-y-2 text-neutral-cream/80">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                  <span>기존 스마트팜 인프라와의 플러그인 호환성</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                  <span>수출 규제(PLS)와의 실시간 연동 기술</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary-gold mt-0.5 flex-shrink-0" />
                  <span>농가-바이어-정부 3자 연결 네트워크 효과</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}