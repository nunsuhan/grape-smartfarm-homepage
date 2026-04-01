import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import { 
  MapPin, Cpu, Target, Shield, Users, Calendar,
  ArrowRight, CheckCircle, TrendingUp, Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: '인증 농가 네트워크',
  description: '팜센스(FarmSense) 인증 농가 네트워크 — 센서 모니터링 생산 데이터, AI 품질 분석, 블록체인 인증으로 프리미엄 농산물 수출을 지원합니다.',
  keywords: '팜센스, 인증 농가, verified farm network, smart agriculture platform, farm data verification',
};

export default function VerifiedFarmsPage() {
  const verificationProcess = [
    {
      step: '1',
      title: 'Farm Onboarding',
      description: 'Sensor installation, baseline data collection, farm profile setup',
      icon: Users
    },
    {
      step: '2',
      title: 'Data Monitoring',
      description: 'Real-time environment and crop growth tracking, automated data collection',
      icon: Cpu
    },
    {
      step: '3',
      title: 'Quality Verification',
      description: 'AI-based quality analysis, grading, and predictive quality assessment',
      icon: Target
    },
    {
      step: '4',
      title: 'Blockchain Certification',
      description: 'Immutable production record issuance, traceability certification',
      icon: Shield
    }
  ];

  const networkStatus = [
    { label: 'Current Phase', value: 'Pilot Network Building' },
    { label: 'Target Region', value: 'Daegu / Gyeongbuk, South Korea' },
    { label: 'Primary Crop', value: 'Premium Grapes' },
    { label: 'Pilot Target', value: '5–10 farms (2026)' },
    { label: 'Scale Target', value: '50+ farms (2027)' },
    { label: 'Technology Status', value: 'Deployed and operational' }
  ];

  const verificationCriteria = [
    {
      category: 'Farm Location',
      icon: MapPin,
      items: ['GPS-verified farm coordinates', 'Regional climate zone verification', 'Soil type analysis']
    },
    {
      category: 'Production Data',
      icon: Cpu,
      items: ['Sensor-monitored temperature/humidity', 'Soil moisture tracking', 'Growth stage monitoring']
    },
    {
      category: 'Quality Metrics',
      icon: Target,
      items: ['Sugar content (Brix) analysis', 'Acidity measurement', 'Size and color grading']
    },
    {
      category: 'Certification',
      icon: Shield,
      items: ['Blockchain production record', 'Export compliance verification', 'Traceability certification']
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              FarmSense Verified Farm Network
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              Building a Network of Data-Verified Farms for Premium Export
            </p>
            <p className="text-lg text-neutral-cream/60 max-w-3xl mx-auto">
              FarmSense is building a verified farm network where every farm's production data 
              is monitored, analyzed, and recorded on blockchain.
              We are currently onboarding pilot farms in the Daegu/Gyeongbuk region.
            </p>
          </div>
        </Container>
      </section>

      {/* Section 1: Verification Process */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Verification Process
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                4-step process for farm verification and data certification
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verificationProcess.map((process) => {
                const Icon = process.icon;
                return (
                  <div key={process.step} className="relative">
                    <Card className="bg-neutral-black/50 border-white/10 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-secondary-gold/10 text-secondary-gold font-bold rounded-full w-10 h-10 flex items-center justify-center">
                            {process.step}
                          </div>
                          <CardTitle className="text-xl">{process.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-neutral-cream/70">{process.description}</p>
                      </CardContent>
                    </Card>

                    {process.step !== '4' && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-secondary-gold/50" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2: Network Status */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Network Status
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                Current status and development roadmap
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {networkStatus.map((status) => (
                <Card key={status.label} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-neutral-cream/60">{status.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-semibold text-white">{status.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-secondary-gold/5 border border-secondary-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-secondary-gold" />
                <h3 className="text-xl font-bold text-white">Development Roadmap</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-gold mb-2">2026</div>
                  <p className="text-neutral-cream/70">Pilot network establishment (5-10 farms)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-gold mb-2">2027</div>
                  <p className="text-neutral-cream/70">Regional scale-up (30-50 farms)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-gold mb-2">2028+</div>
                  <p className="text-neutral-cream/70">National expansion & multi-crop</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 3: What Verified Means */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                What "Verified" Means
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                Comprehensive criteria for farm verification and data certification
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {verificationCriteria.map((criteria) => {
                const Icon = criteria.icon;
                return (
                  <Card key={criteria.category} className="bg-neutral-black/50 border-white/10">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/10 p-2 rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-xl">{criteria.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {criteria.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-secondary-gold mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-cream/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Data Transparency Commitment</h3>
              <p className="text-neutral-cream/70 mb-4">
                Every verified farm provides transparent access to production data through the FarmSense platform. 
                Import partners can view real-time monitoring data, quality metrics, and blockchain certification 
                for complete supply chain transparency.
              </p>
              <div className="flex items-center gap-2 text-secondary-gold">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Data accessible to verified import partners</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 4: CTA */}
      <section className="py-20 bg-white/[0.02] border-t border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              For Import Partners
            </h2>
            <p className="text-xl text-neutral-cream/70 mb-12 max-w-3xl mx-auto">
              Our verified farm network data will be available to import partners 
              for supply chain transparency and quality assurance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/export-intelligence"
                className="px-8 py-3 bg-secondary-gold hover:bg-secondary-gold/90 text-neutral-black font-medium rounded-lg transition-colors"
              >
                Partner With Us
              </a>
              <a
                href="mailto:export@farmsense.kr?subject=Verified%20Farm%20Network%20Inquiry"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                Request Network Access
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Network Access Tiers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">Pilot Partner</h4>
                  <p className="text-sm text-neutral-cream/70">Access to pilot farm data, co-development opportunity</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">Verified Partner</h4>
                  <p className="text-sm text-neutral-cream/70">Full network access, priority supply allocation</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">Strategic Partner</h4>
                  <p className="text-sm text-neutral-cream/70">Custom farm network development, joint branding</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}