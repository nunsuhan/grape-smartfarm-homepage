'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const platformFlow = [
  {
    step: 'Farm Sensors',
    description: 'IoT sensor network collecting real-time farm data',
    icon: '📡',
    metrics: ['Temperature', 'Humidity', 'Soil Moisture', 'Light', 'CO2'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    step: 'Crop Data Platform',
    description: 'Centralized data aggregation and processing',
    icon: '💾',
    metrics: ['Data Storage', 'Real-time Processing', 'API Integration', 'Data Security'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    step: 'AI Crop Intelligence',
    description: 'Machine learning models for agricultural insights',
    icon: '🤖',
    metrics: ['Growth Prediction', 'Disease Detection', 'Yield Forecasting', 'Quality Analysis'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    step: 'Quality Intelligence',
    description: 'Comprehensive quality assessment and grading',
    icon: '🔬',
    metrics: ['Sugar Content', 'Size/Weight', 'Color Analysis', 'Defect Detection'],
    color: 'from-yellow-500 to-amber-600',
  },
  {
    step: 'Blockchain Traceability',
    description: 'Immutable records and supply chain transparency',
    icon: '⛓️',
    metrics: ['Production Records', 'Quality Certificates', 'Shipment Tracking', 'QR Verification'],
    color: 'from-indigo-500 to-blue-600',
  },
  {
    step: 'Export Markets',
    description: 'Verified premium produce for international markets',
    icon: '🌍',
    metrics: ['Singapore', 'Taiwan', 'Japan', 'Other Markets'],
    color: 'from-red-500 to-orange-600',
  },
];

export function EnhancedPlatformViz() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-neutral-black to-primary-purple/5">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              FarmSense Platform Architecture
            </h2>
            <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
              From farm sensors to export markets — a complete agricultural intelligence platform
            </p>
          </motion.div>

          {/* Desktop: Horizontal Flow */}
          <div className="hidden lg:block">
            <div className="flex items-stretch justify-center gap-4">
              {platformFlow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 max-w-[180px]"
                >
                  <Card className="bg-neutral-black/50 border-white/10 h-full">
                    <CardHeader>
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <CardTitle className="text-lg">{item.step}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-cream/60 mb-3">{item.description}</p>
                      <div className="space-y-1">
                        {item.metrics.map((metric) => (
                          <div key={metric} className="text-xs text-neutral-cream/40">
                            • {metric}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Vertical Stack */}
          <div className="lg:hidden">
            <div className="space-y-4">
              {platformFlow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-neutral-black/50 border-white/10">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{item.icon}</div>
                        <CardTitle className="text-lg">{item.step}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-cream/60 mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-2 py-1 bg-white/5 rounded text-xs text-neutral-cream/60"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-bold mb-6">
                Complete Agricultural Intelligence Platform
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-lg mb-2">For Farmers</h4>
                  <p className="text-neutral-cream/60 text-sm">
                    Data-driven farming decisions and productivity optimization
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-lg mb-2">For Importers</h4>
                  <p className="text-neutral-cream/60 text-sm">
                    Verified premium produce with complete traceability
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-lg mb-2">For Government</h4>
                  <p className="text-neutral-cream/60 text-sm">
                    Regional agriculture intelligence and policy support
                  </p>
                </div>
              </div>

              {/* FarmSense Export Program Section */}
              <div className="mt-12 mb-8 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 rounded-2xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-serif font-bold text-white mb-2">FarmSense Export Program</h4>
                  <p className="text-secondary-gold font-medium mb-4">Premium Korean Produce for International Markets</p>
                  <p className="text-neutral-cream/70 max-w-2xl mx-auto">
                    We&apos;re building a verified supply chain connecting Korean premium farms 
                    to import partners in Singapore, Taiwan, and beyond. 
                    Technology is ready. We&apos;re looking for partners.
                  </p>
                </div>
                <div className="flex justify-center">
                  <a
                    href="/export-intelligence"
                    className="px-6 py-2 bg-secondary-gold hover:bg-secondary-gold/90 text-neutral-black font-medium rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    Explore Partnership
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/platform"
                  className="px-8 py-3 bg-primary-purple hover:bg-primary-purple/80 text-white font-medium rounded-lg transition-colors"
                >
                  Explore Platform Details
                </a>
                <a
                  href="/contact"
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
                >
                  Request Platform Demo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}