'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Globe, TrendingUp, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ExportProgram() {
  return (
    <Section id="export-program" className="bg-neutral-black">
      <Container>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">
              FarmSense Export Program
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Premium Korean Produce for International Markets
            </h3>
            <p className="text-xl text-neutral-cream/70 max-w-3xl mx-auto mb-8">
              We're building a verified supply chain connecting Korean premium farms 
              to import partners in Singapore, Taiwan, and beyond.
              Technology is ready. We're looking for partners.
            </p>
          </motion.div>

          {/* Program Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Global Market Access</h4>
              </div>
              <p className="text-neutral-cream/70 mb-4">
                Connect with premium markets through verified quality and transparent supply chains.
              </p>
              <ul className="space-y-2 text-sm text-neutral-cream/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Singapore & Taiwan markets</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Premium produce positioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>Data-verified quality assurance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Verified Supply Chain</h4>
              </div>
              <p className="text-neutral-cream/70 mb-4">
                Blockchain-tracked production data from farm to market for complete transparency.
              </p>
              <ul className="space-y-2 text-sm text-neutral-cream/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Real-time farm monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>AI quality prediction</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span>Immutable blockchain records</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white">Partnership Model</h4>
              </div>
              <p className="text-neutral-cream/70 mb-4">
                Co-building premium supply chains with import partners from pilot phase.
              </p>
              <ul className="space-y-2 text-sm text-neutral-cream/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Early mover advantage</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Co-developed quality standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Joint brand development</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/export-intelligence"
              className="inline-flex items-center gap-2 px-8 py-3 bg-secondary-gold hover:bg-secondary-gold/90 text-neutral-black font-medium rounded-lg transition-colors group"
            >
              Explore Partnership
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-neutral-cream/60 text-sm mt-4">
              Technology deployed. Pilot farms onboarding. Import partners welcome.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}