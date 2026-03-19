'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const platformSteps = [
  {
    title: 'Farm Sensors',
    description: 'IoT sensor network collecting real-time environmental and crop data',
    icon: '📡',
  },
  {
    title: 'Environment Data',
    description: 'Climate, soil moisture, temperature, and humidity monitoring',
    icon: '🌡️',
  },
  {
    title: 'AI Crop Analysis',
    description: 'Machine learning models for growth prediction and disease detection',
    icon: '🤖',
  },
  {
    title: 'Quality Intelligence',
    description: 'Yield prediction, sugar content analysis, and quality assessment',
    icon: '📊',
  },
  {
    title: 'Blockchain Traceability',
    description: 'Immutable production records and supply chain transparency',
    icon: '⛓️',
  },
  {
    title: 'Export Markets',
    description: 'Verified premium produce connecting to international markets',
    icon: '🌍',
  },
];

export function PlatformVisualization() {
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
              FarmSense Platform Flow
            </h2>
            <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto">
              From farm sensors to export markets — a complete agricultural intelligence platform
            </p>
          </motion.div>

          {/* Desktop: Horizontal flow */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-purple via-secondary-gold to-primary-purple transform -translate-y-1/2" />
              
              <div className="grid grid-cols-6 gap-4 relative z-10">
                {platformSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-neutral-black border-2 border-secondary-gold/30 flex items-center justify-center text-2xl mb-4">
                      {step.icon}
                    </div>
                    <Card className="bg-neutral-black/80 border-white/10 backdrop-blur-sm">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-center">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-neutral-cream/60 text-center">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                    
                    {index < platformSteps.length - 1 && (
                      <div className="absolute top-8 right-0 w-full h-0.5 bg-secondary-gold/30 transform translate-x-1/2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical stack */}
          <div className="md:hidden space-y-6">
            {platformSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-black border-2 border-secondary-gold/30 flex items-center justify-center text-xl">
                  {step.icon}
                </div>
                <Card className="flex-1 bg-neutral-black/80 border-white/10">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-neutral-cream/60">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {index < platformSteps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-secondary-gold/30 to-transparent transform translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-neutral-cream/70 max-w-3xl mx-auto">
              FarmSense transforms agricultural data into actionable intelligence from farm production to export markets.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/platform"
                className="px-8 py-3 bg-primary-purple hover:bg-primary-purple/80 text-white font-medium rounded-lg transition-colors"
              >
                Explore Platform
              </a>
              <a
                href="/solutions"
                className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
              >
                View Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}