import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import { 
  Cpu, Database, Shield, Globe, Users, Target, 
  Calendar, TrendingUp, ArrowRight, CheckCircle,
  Zap, Building, Package, Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Export Intelligence — FarmSense Agricultural Data Platform',
  description: 'FarmSense export partnership program. Verified premium produce with smart farming data, AI quality analysis, and blockchain traceability for import partners in Singapore and Taiwan.',
  keywords: 'agricultural data platform, premium grape supply chain, blockchain traceability agriculture, smart farming data platform, grape traceability, Korea premium grape export',
};

export default function ExportIntelligencePage() {
  const whatWeHave = [
    {
      title: 'Smart Farming Platform',
      description: 'Real-time sensor monitoring, AI crop diagnosis, growth prediction — Live and operational',
      icon: Cpu,
      color: 'blue'
    },
    {
      title: 'Grape Intelligence System',
      description: 'Data-driven cultivation model for premium grape production — Deployed',
      icon: Database,
      color: 'purple'
    },
    {
      title: 'Blockchain Traceability',
      description: 'Immutable production records from farm to shipment — Technology ready',
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Regional Partnership',
      description: 'Collaboration with agricultural technology centers in Daegu/Gyeongbuk region — Active',
      icon: Users,
      color: 'orange'
    }
  ];

  const timelinePhases = [
    {
      phase: 'Phase 1 (2026 H2)',
      title: 'Pilot Program',
      description: '5~10 farms, trial shipments to Singapore/Taiwan, co-develop quality standards with import partner',
      partnerGains: 'Early access to pilot data, influence on quality standards, first-mover advantage'
    },
    {
      phase: 'Phase 2 (2027)',
      title: 'Scale Program',
      description: '30~50 farms, regular monthly supply, established quality verification process',
      partnerGains: 'Stable supply volume, established quality metrics, blockchain traceability deployment'
    },
    {
      phase: 'Phase 3 (2028+)',
      title: 'Full Network',
      description: '100+ farms, multi-crop expansion, full blockchain traceability deployed',
      partnerGains: 'Diversified product portfolio, automated supply chain, premium brand positioning'
    }
  ];

  const targetProfile = [
    { label: 'Crop', value: 'Premium Grapes (Shine Muscat, Campbell Early)' },
    { label: 'Target Sugar Content', value: '18–22 Brix' },
    { label: 'Target Acidity', value: '0.4–0.7%' },
    { label: 'Harvest Window', value: 'August – September' },
    { label: 'Production Region', value: 'Daegu / Gyeongbuk, South Korea' }
  ];

  const platformFlow = [
    { step: 'Farm Sensors', description: 'IoT sensor network collecting real-time data' },
    { step: 'Crop Data', description: 'Environmental and growth data aggregation' },
    { step: 'AI Analysis', description: 'Machine learning models for quality prediction' },
    { step: 'Quality Assessment', description: 'Brix, acidity, size analysis' },
    { step: 'Blockchain Record', description: 'Immutable production history' },
    { step: 'Export Ready', description: 'Verified premium produce for international markets' }
  ];

  const partnerBenefits = [
    {
      title: 'Early Mover Advantage',
      description: 'Join from pilot phase to shape quality standards and supply processes'
    },
    {
      title: 'Data Transparency',
      description: 'Full access to production data and blockchain verification'
    },
    {
      title: 'Co-Brand Opportunity',
      description: 'Joint development of premium produce brand for target market'
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section - Honest Partnership Tone */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Building the Next-Generation Premium Produce Supply Chain
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              Partnership Opportunity for Import Partners
            </p>
            <p className="text-lg text-neutral-cream/60 max-w-3xl mx-auto">
              FarmSense is an agricultural intelligence platform with working sensor data, 
              AI crop analysis, and blockchain traceability technology.
              We are seeking import partners to co-build a verified premium supply chain 
              from Korean farms to Asian markets.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 1: What We Have */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                What We Have — Technology & Partnerships
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                Our current operational capabilities and active partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatWeHave.map((item) => {
                const Icon = item.icon;
                const colorClasses = {
                  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
                  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
                  green: 'bg-green-500/10 border-green-500/20 text-green-400',
                  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400'
                };

                return (
                  <Card key={item.title} className={`bg-neutral-black/50 ${colorClasses[item.color as keyof typeof colorClasses]} border`}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/10 p-2 rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-cream/70">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: What We're Building Together */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                What We're Building Together — Partnership Timeline
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                A phased approach to building a verified premium supply chain
              </p>
            </div>

            <div className="space-y-12">
              {timelinePhases.map((phase, index) => (
                <div key={phase.phase} className="relative">
                  {/* Timeline connector */}
                  {index < timelinePhases.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-secondary-gold/30 -z-10" />
                  )}

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                      <div className="bg-secondary-gold/10 border border-secondary-gold/30 rounded-xl p-6 text-center">
                        <div className="text-2xl font-bold text-secondary-gold mb-2">{phase.phase}</div>
                        <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                      </div>
                    </div>

                    <div className="md:w-3/4 space-y-4">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Program Scope</h4>
                        <p className="text-neutral-cream/70">{phase.description}</p>
                      </div>

                      <div className="bg-secondary-gold/5 border border-secondary-gold/20 rounded-xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-5 h-5 text-secondary-gold" />
                          <h4 className="text-lg font-semibold text-white">What import partner gains at this stage</h4>
                        </div>
                        <p className="text-neutral-cream/70">{phase.partnerGains}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: Target Product Profile */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Target Product Profile
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                Quality specifications based on regional production data and FarmSense growth models
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {targetProfile.map((item) => (
                <Card key={item.label} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-neutral-cream/60">{item.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-cream/50">
                * Target specifications based on regional production data and FarmSense growth models
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: Platform Capabilities */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                How Our Platform Works
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                From farm sensors to export-ready premium produce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {platformFlow.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="bg-neutral-black/50 border-white/10 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-secondary-gold/10 text-secondary-gold font-bold rounded-full w-8 h-8 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <CardTitle className="text-xl">{step.step}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-cream/70">{step.description}</p>
                    </CardContent>
                  </Card>

                  {index < platformFlow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-secondary-gold/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-neutral-cream/60">
                Each step is monitored and verified through our agricultural intelligence platform
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 5: Partnership Model */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Partnership Model
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                Combining technology with market expertise
              </p>
            </div>

            {/* Partnership Flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">FarmSense</h3>
                  <p className="text-neutral-cream/70">Technology + Data</p>
                </div>
              </div>

              <div className="text-3xl text-secondary-gold">+</div>

              <div className="text-center">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">Import Partner</h3>
                  <p className="text-neutral-cream/70">Market + Distribution</p>
                </div>
              </div>

              <div className="text-3xl text-secondary-gold">=</div>

              <div className="text-center">
                <div className="bg-secondary-gold/10 border border-secondary-gold/30 rounded-xl p-6">
                  <Package className="w-12 h-12 text-secondary-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">Verified Premium Supply Chain</h3>
                  <p className="text-neutral-cream/70">Data-Verified Premium Produce</p>
                </div>
              </div>
            </div>

            {/* Partner Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerBenefits.map((benefit) => (
                <Card key={benefit.title} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-cream/70">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 6: CTA */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Let's Build This Together
            </h2>
            <p className="text-xl text-neutral-cream/70 mb-12 max-w-3xl mx-auto">
              We're looking for import partners who see the opportunity in data-verified premium produce.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:export@farmsense.kr?subject=Partnership%20Inquiry"
                className="px-8 py-3 bg-secondary-gold hover:bg-secondary-gold/90 text-neutral-black font-medium rounded-lg transition-colors"
              >
                Schedule a Video Call
              </a>
              <a
                href="/downloads/farmsense-platform-overview.pdf"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                Download Platform Overview
              </a>
            </div>

            <div className="text-neutral-cream/60">
              <p className="mb-2">Email: export@farmsense.kr</p>
              <p>Location: Daegu, South Korea</p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}