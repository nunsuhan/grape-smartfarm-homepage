import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';
import { InvestorPlatformArchitecture } from '@/components/sections/investor-platform-architecture';

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-purple/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              FarmSense Platform
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              Transforming agricultural data into actionable intelligence from farm production to export markets.
            </p>
            <p className="text-lg text-neutral-cream/60">
              FarmSense integrates sensor networks, AI analysis, and blockchain traceability to create a complete agricultural intelligence platform.
            </p>
          </div>
        </Container>
      </section>

      {/* Platform Diagram Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Platform Architecture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-12">
              {[
                { title: 'Farm Sensors', desc: 'IoT sensor network collecting real-time data' },
                { title: 'Environment Data', desc: 'Climate, soil, and crop condition monitoring' },
                { title: 'AI Crop Analysis', desc: 'Machine learning models for growth prediction' },
                { title: 'Quality Intelligence', desc: 'Yield and quality assessment algorithms' },
                { title: 'Blockchain Traceability', desc: 'Immutable production records' },
                { title: 'Export Markets', desc: 'Verified premium produce supply chain' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <Card className="h-full bg-neutral-black/50 border-white/10">
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardContent>
                  </Card>
                  {index < 5 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-6 h-0.5 bg-secondary-gold/30 transform translate-x-full -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-neutral-cream/70">
                This end-to-end platform connects farm production with global markets through verified data intelligence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Target Audience Sections */}
      <section className="py-20 bg-white/5">
        <Container>
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Who Uses FarmSense Platform
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-neutral-black/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary-gold">Farmers</CardTitle>
                <CardDescription>Smart farming support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-cream/70">
                  <li>• Real-time crop monitoring</li>
                  <li>• Disease prediction and prevention</li>
                  <li>• Irrigation optimization</li>
                  <li>• Yield prediction</li>
                  <li>• Production cost reduction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-neutral-black/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary-gold">Importers</CardTitle>
                <CardDescription>Premium produce supply chain</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-cream/70">
                  <li>• Verified production data</li>
                  <li>• Blockchain traceability</li>
                  <li>• Quality assurance</li>
                  <li>• Residue risk management</li>
                  <li>• Supply chain transparency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-neutral-black/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-secondary-gold">Government & Research</CardTitle>
                <CardDescription>Agricultural data platform</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-neutral-cream/70">
                  <li>• Regional crop monitoring</li>
                  <li>• Climate impact analysis</li>
                  <li>• Policy decision support</li>
                  <li>• Agricultural research data</li>
                  <li>• Export certification support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Platform Benefits */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Platform Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
                  <p className="text-neutral-cream/70">
                    Transform raw sensor data into actionable insights for every stage of crop production.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Export Readiness</h3>
                  <p className="text-neutral-cream/70">
                    Meet international standards with verified production data and blockchain traceability.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Risk Reduction</h3>
                  <p className="text-neutral-cream/70">
                    Predict and prevent crop diseases, optimize resource use, and manage residue risks.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Market Access</h3>
                  <p className="text-neutral-cream/70">
                    Connect with premium markets through verified quality and transparent supply chains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <InvestorPlatformArchitecture />
      <Footer />
    </main>
  );
}