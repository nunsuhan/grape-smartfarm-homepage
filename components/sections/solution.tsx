'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Solution() {
    return (
        <Section id="solution" className="bg-neutral-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">Our Solution</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                        데이터 + AI = 예측 가능한 농업
                    </h3>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1 p-6 bg-neutral-800/50 rounded-2xl border border-secondary-purple/30 text-center w-full min-w-0 flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/generated/sensor_device.jpg"
                                alt="Sensor Device"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-secondary-purple font-mono font-bold mb-2">Step 1</div>
                        <div className="text-2xl font-bold text-white mb-2">데이터 수집</div>
                        <div className="text-sm text-neutral-cream/60">4억+ 센서 데이터(TimescaleDB)</div>
                    </motion.div>

                    <div className="hidden md:flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-neutral-500" />
                    </div>
                    <div className="md:hidden flex items-center justify-center py-2">
                        <ArrowRight className="w-6 h-6 text-neutral-500 rotate-90" />
                    </div>

                    {/* Step 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 p-6 bg-neutral-800/50 rounded-2xl border border-secondary-gold/30 text-center w-full min-w-0 ring-1 ring-secondary-gold/20 flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-white/5">
                            <Image
                                src="/images/generated/rag_diagram.png"
                                alt="RAG Analysis"
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                        <div className="text-secondary-gold font-mono font-bold mb-2">Step 2</div>
                        <div className="text-2xl font-bold text-white mb-2">AI 분석/예측</div>
                        <div className="text-sm text-neutral-cream/60">PMI≥0.5 48h, ≥0.7 24h 경보</div>
                    </motion.div>

                    <div className="hidden md:flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-neutral-500" />
                    </div>
                    <div className="md:hidden flex items-center justify-center py-2">
                        <ArrowRight className="w-6 h-6 text-neutral-500 rotate-90" />
                    </div>

                    {/* Step 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 p-6 bg-neutral-800/50 rounded-2xl border border-secondary-green/30 text-center w-full min-w-0 flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/generated/app_dashboard_hand.png"
                                alt="Smart Farming App"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-secondary-green font-mono font-bold mb-2">Step 3</div>
                        <div className="text-2xl font-bold text-white mb-2">실행 가이드</div>
                        <div className="text-sm text-neutral-cream/60">RAG 기반 처방·TRV 살포량</div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <div className="text-3xl font-bold text-secondary-green mb-1">48h</div>
                            <div className="text-sm text-neutral-cream/70">PMI 사전 경보</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <div className="text-3xl font-bold text-blue-400 mb-1">20-30%</div>
                            <div className="text-sm text-neutral-cream/70">TRV 기반 농약 절감</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <div className="text-3xl font-bold text-purple-400 mb-1">~3초</div>
                            <div className="text-sm text-neutral-cream/70">4→10-Class 진단</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <div className="text-3xl font-bold text-yellow-400 mb-1">LAI 3.5~4</div>
                            <div className="text-sm text-neutral-cream/70">수확량 최적 구간</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                            <div className="text-3xl font-bold text-red-400 mb-1">15-20%</div>
                            <div className="text-sm text-neutral-cream/70">모니터링 자동화</div>
                        </div>
                    </div>
                    <p className="text-xl font-serif italic text-neutral-cream/80">
                        "FarmSense는 PMI·GDD·TRV·LAI 등 논문 검증 알고리즘으로 농업인의 직감에 과학을 더합니다."
                    </p>
                </motion.div>

            </Container>
        </Section>
    );
}
