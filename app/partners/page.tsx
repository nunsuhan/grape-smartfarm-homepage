import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const partnerTypes = [
  {
    type: 'Farmers',
    description: 'Smart farming support for modern agricultural producers',
    benefits: [
      'Real-time crop monitoring and alerts',
      'AI-powered disease prediction',
      'Resource optimization (water, fertilizer)',
      'Yield and quality improvement',
      'Export market access support',
    ],
    icon: '👨‍🌾',
    color: 'from-green-500/20 to-emerald-600/20',
  },
  {
    type: 'Importers',
    description: 'Premium produce supply chain partners',
    benefits: [
      'Verified production data',
      'Blockchain traceability',
      'Consistent quality assurance',
      'Residue risk management',
      'Supply chain transparency',
    ],
    icon: '🏢',
    color: 'from-blue-500/20 to-cyan-600/20',
  },
  {
    type: 'Government & Research',
    description: 'Agricultural data platform for policy and research',
    benefits: [
      'Regional crop monitoring data',
      'Climate impact analysis',
      'Policy decision support',
      'Agricultural research collaboration',
      'Export certification support',
    ],
    icon: '🏛️',
    color: 'from-purple-500/20 to-violet-600/20',
  },
];

const partnershipModels = [
  {
    title: 'Technology Partnership',
    description: 'Integrate FarmSense platform with existing agricultural systems',
    features: ['API Integration', 'Data Sharing', 'Custom Development', 'Technical Support'],
  },
  {
    title: 'Supply Chain Partnership',
    description: 'Connect premium produce from farms to international markets',
    features: ['Quality Assurance', 'Traceability', 'Market Access', 'Logistics Support'],
  },
  {
    title: 'Research Collaboration',
    description: 'Joint research projects and data sharing for agricultural innovation',
    features: ['Data Access', 'Joint Studies', 'Publication', 'Technology Transfer'],
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              FarmSense Partners
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              Building the future of agriculture through strategic partnerships
            </p>
            <p className="text-lg text-neutral-cream/60">
              We collaborate with farmers, importers, government agencies, and research institutions to transform agricultural data into actionable intelligence.
            </p>
          </div>
        </Container>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Our Partner Ecosystem
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner) => (
              <Card key={partner.type} className="bg-neutral-black/50 border-white/10">
                <div className={`h-2 bg-gradient-to-r ${partner.color} rounded-t-xl`} />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{partner.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{partner.type}</CardTitle>
                      <CardDescription>{partner.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {partner.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-neutral-cream/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-gold mt-1.5 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a
                      href={`/partners/${partner.type.toLowerCase()}`}
                      className="text-secondary-gold text-sm font-medium hover:underline"
                    >
                      Learn about {partner.type} partnerships →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white/5">
        <Container>
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Partnership Models
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipModels.map((model) => (
              <Card key={model.title} className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {model.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-cream/60 border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Partnership Success Stories
            </h2>
            
            <div className="space-y-8">
              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">Grape Export to Singapore</CardTitle>
                  <CardDescription>Farmers + Importers Partnership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-cream/70 mb-4">
                    10개 포도 농가와 싱가포르 수입업체의 협력을 통해 블록체인 추적성이 적용된 프리미엄 포도를 정기적으로 수출하고 있습니다. 생산 데이터 검증을 통해 가격 프리미엄을 실현했습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs border border-green-500/20">
                      +30% Price Premium
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20">
                      Monthly Export
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs border border-purple-500/20">
                      Blockchain Verified
                    </span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-black/50 border-white/10">
                <CardHeader>
                  <CardTitle className="text-xl">Regional Agricultural Monitoring</CardTitle>
                  <CardDescription>Government Partnership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-cream/70 mb-4">
                    지자체와의 협력을 통해 지역 단위 농작물 모니터링 시스템을 구축했습니다. 기후 변화 영향 분석과 정책 결정 지원을 위한 데이터 플랫폼으로 활용되고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs border border-green-500/20">
                      5,000+ Hectares
                    </span>
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20">
                      Real-time Monitoring
                    </span>
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs border border-purple-500/20">
                      Policy Support
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-purple/10 to-secondary-gold/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Become a FarmSense Partner
            </h2>
            <p className="text-xl text-neutral-cream/80 mb-8">
              Join our ecosystem and help transform agriculture through data and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?type=partnership"
                className="px-8 py-3 bg-primary-purple hover:bg-primary-purple/80 text-white font-medium rounded-lg transition-colors"
              >
                Request Partnership Info
              </a>
              <a
                href="/platform"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                Learn About Platform
              </a>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}