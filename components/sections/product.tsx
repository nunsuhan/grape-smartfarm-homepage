'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Check } from 'lucide-react';
import { useModal } from '../providers/modal-provider';

const features = [
    "AI 이상 징후 조기 감지 (24-48시간 골든타임)",
    "PMI 기반 48시간 사전 경보 시스템",
    "RAG 기반 맞춤형 영농 상담 (129K 문서)",
    "GDD + DOSAVIÑA 기반 정밀 의사결정",
    "실시간 센서 모니터링 및 자동 알림"
];

export function Product() {
    const { openModal } = useModal();
    return (
        <Section id="product" className="bg-neutral-black relative">
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-black via-primary-grape/10 to-neutral-black" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">
                        Our Product
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                        조기 감지부터 예방까지<br />
                        <span className="text-secondary-green">완전한 농업 솔루션</span>
                    </h3>
                    <p className="text-lg text-neutral-cream/80 mb-12 leading-relaxed">
                        FarmSense는 단순한 모니터링 도구가 아닙니다. <br />
                        병해충 조기 감지, 환경 모니터링, 의사결정 지원 시스템(DSS)을 통합하여<br />
                        농가의 생산성 향상과 품질 관리를 지원하는 AI 기반 통합 플랫폼입니다.
                    </p>

                    <div className="flex justify-center mb-12">
                        <ul className="space-y-4 text-left inline-block">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-cream">
                                    <div className="w-6 h-6 rounded-full bg-secondary-green/20 flex items-center justify-center text-secondary-green shrink-0">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        onClick={() => openModal('partnership')}
                        className="px-10 py-4 bg-secondary-green text-white text-lg font-bold rounded-full hover:bg-white hover:text-secondary-green hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-[0_0_20px_rgba(74,124,63,0.3)]"
                    >
                        도입 문의하기
                    </button>
                </motion.div>
            </Container>
        </Section>
    );
}
