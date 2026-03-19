import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/footer';

const dataTypes = [
  {
    category: 'Farm Data',
    description: 'Real-time sensor data from agricultural operations',
    metrics: ['Temperature', 'Humidity', 'Soil Moisture', 'Light Intensity', 'CO2 Levels'],
    volume: '4억+ 데이터 포인트',
    icon: '🌱',
    color: 'from-green-500/20 to-emerald-600/20',
  },
  {
    category: 'Climate Data',
    description: 'Environmental and meteorological information',
    metrics: ['Weather Patterns', 'Rainfall', 'Wind Speed', 'Solar Radiation', 'Microclimate'],
    volume: '연간 50TB+',
    icon: '🌤️',
    color: 'from-blue-500/20 to-cyan-600/20',
  },
  {
    category: 'Crop Growth Data',
    description: 'Plant development and health indicators',
    metrics: ['Growth Rate', 'Leaf Area', 'Fruit Development', 'Disease Indicators', 'Stress Levels'],
    volume: '2천만+ 이미지',
    icon: '📈',
    color: 'from-yellow-500/20 to-amber-600/20',
  },
  {
    category: 'Quality Data',
    description: 'Product quality and market readiness metrics',
    metrics: ['Sugar Content', 'Acidity', 'Size/Weight', 'Color', 'Defect Detection'],
    volume: '500만+ 측정값',
    icon: '🔬',
    color: 'from-purple-500/20 to-violet-600/20',
  },
];

const useCases = [
  {
    audience: 'Investors',
    title: 'Agricultural Technology Investment',
    description: 'Data-driven insights for agtech investment decisions and market analysis.',
    benefits: [
      'Market size and growth potential analysis',
      'Technology adoption metrics',
      'ROI projections based on real farm data',
      'Competitive landscape intelligence',
    ],
  },
  {
    audience: 'Research Institutions',
    title: 'Agricultural Research & Development',
    description: 'Comprehensive datasets for crop science, climate impact studies, and agricultural innovation.',
    benefits: [
      'Long-term crop performance data',
      'Climate change impact analysis',
      'New cultivation method validation',
      'Academic research collaboration',
    ],
  },
  {
    audience: 'Government Agencies',
    title: 'Policy & Regional Planning',
    description: 'Data intelligence for agricultural policy, regional development, and food security planning.',
    benefits: [
      'Regional crop yield forecasting',
      'Resource allocation optimization',
      'Climate adaptation strategies',
      'Export market development',
    ],
  },
];

export default function DataIntelligencePage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Data Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              FarmSense transforms agricultural data into actionable intelligence
            </p>
            <p className="text-lg text-neutral-cream/60">
              Comprehensive data platform combining farm sensors, climate monitoring, crop analysis, and quality assessment
              for informed decision-making across the agricultural value chain.
            </p>
          </div>
        </Container>
      </section>

      {/* Data Types Overview */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Agricultural Data Ecosystem
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                Four core data categories powering the FarmSense intelligence platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataTypes.map((data) => (
                <Card key={data.category} className="bg-neutral-black/50 border-white/10">
                  <div className={`h-2 bg-gradient-to-r ${data.color} rounded-t-xl`} />
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{data.icon}</div>
                      <div>
                        <CardTitle className="text-xl">{data.category}</CardTitle>
                        <CardDescription className="text-sm">{data.volume}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-cream/70 mb-4 text-sm">
                      {data.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-neutral-cream/80 text-sm">Key Metrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {data.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-2 py-1 bg-white/5 rounded text-xs text-neutral-cream/60 border border-white/10"
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
          </div>
        </Container>
      </section>

      {/* Data Intelligence Flow */}
      <section className="py-20 bg-white/5">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                From Data to Intelligence
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                How FarmSense transforms raw agricultural data into actionable insights
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transform -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                {[
                  { step: 'Data Collection', desc: 'IoT sensors, drones, and manual inputs', icon: '📡' },
                  { step: 'Data Processing', desc: 'Cleaning, normalization, and storage', icon: '⚙️' },
                  { step: 'AI Analysis', desc: 'Machine learning models and pattern recognition', icon: '🤖' },
                  { step: 'Insight Generation', desc: 'Actionable recommendations and predictions', icon: '💡' },
                  { step: 'Decision Support', desc: 'Farm management and business intelligence', icon: '📊' },
                ].map((item, index) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-black border-2 border-purple-500/30 flex items-center justify-center text-2xl mx-auto mb-4">
                      {item.icon}
                    </div>
                    <Card className="bg-neutral-black/80 border-white/10">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{item.step}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-neutral-cream/60">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-neutral-cream/70 max-w-3xl mx-auto">
                This end-to-end process turns terabytes of agricultural data into practical intelligence
                for farmers, researchers, and decision-makers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases for Different Audiences */}
      <section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Intelligence Applications
              </h2>
              <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
                How different stakeholders leverage FarmSense data intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase) => (
                <Card key={useCase.audience} className="bg-neutral-black/50 border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{useCase.audience}</CardTitle>
                      <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-cream/60 border border-white/10">
                        {useCase.title.split(' ')[0]}
                      </span>
                    </div>
                    <CardDescription>{useCase.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-cream/70 mb-6">
                      {useCase.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-cream/80 text-sm">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-neutral-cream/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 mr-2 flex-shrink-0" />
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

      {/* Platform Capabilities */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Platform Capabilities
              </h2>
              <p className="text-xl text-neutral-cream/70">
                Advanced features for comprehensive agricultural data intelligence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
                  <p className="text-neutral-cream/70">
                    Live data processing and visualization for immediate decision-making and trend analysis.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Predictive Modeling</h3>
                  <p className="text-neutral-cream/70">
                    AI-powered forecasts for crop yields, disease outbreaks, and market trends.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Data Integration</h3>
                  <p className="text-neutral-cream/70">
                    Seamless connection with existing farm management systems and external data sources.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Custom Reporting</h3>
                  <p className="text-neutral-cream/70">
                    Tailored dashboards and reports for different stakeholders and use cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Access Agricultural Data Intelligence
            </h2>
            <p className="text-xl text-neutral-cream/80 mb-8">
              Explore how FarmSense data intelligence can support your research, investment, or policy decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?type=data-intelligence"
                className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors"
              >
                Request Data Access
              </a>
              <a
                href="/platform"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                View Platform Overview
              </a>
            </div>
            <p className="text-neutral-cream/60 mt-8 text-sm">
              For research collaboration inquiries: research@farmsense.kr
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}