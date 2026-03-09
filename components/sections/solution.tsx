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
                        병이 오기 전에, 물 줄 때를, 환기 할 때를 먼저 알려드립니다
                    </h3>
                </div>

                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
                    {/* Step 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1 p-6 bg-white/5 rounded-2xl border border-violet-400/30 text-center w-full min-w-0 flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/generated/sensor_device.webp"
                                alt="Sensor Device"
                                fill
                                className="object-cover"
                                quality={65}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-violet-400 font-mono font-bold mb-2">Step 1</div>
                        <div className="text-2xl font-bold text-white mb-2">데이터 수집</div>
                        <div className="text-sm text-neutral-cream/60">센서가 하우스 상황을 실시간 체크합니다</div>
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
                        className="flex-1 p-6 bg-white/5 rounded-2xl border border-secondary-gold/30 text-center w-full min-w-0 ring-1 ring-secondary-gold/20 flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-white/5">
                            <Image
                                src="/images/generated/rag_diagram.webp"
                                alt="RAG Analysis"
                                fill
                                className="object-contain p-2"
                                quality={65}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-secondary-gold font-mono font-bold mb-2">Step 2</div>
                        <div className="text-2xl font-bold text-white mb-2">AI 분석/예측</div>
                        <div className="text-sm text-neutral-cream/60">병해 위험을 미리 계산합니다</div>
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
                        className="flex-1 p-6 bg-white/5 rounded-2xl border border-secondary-green/30 text-center w-full min-w-0 flex flex-col items-center"
                    >
                        <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/images/generated/app_dashboard_hand.webp"
                                alt="Smart Farming App"
                                fill
                                className="object-cover"
                                quality={65}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-secondary-green font-mono font-bold mb-2">Step 3</div>
                        <div className="text-2xl font-bold text-white mb-2">실행 가이드</div>
                        <div className="text-sm text-neutral-cream/60">언제 뭘 해야 하는지 알려드립니다</div>
                    </motion.div>
                </div>


            </Container>
        </Section>
    );
}
