'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Check } from 'lucide-react';
import { useModal } from '../providers/modal-provider';

const features = [
    "실시간 생육 환경 모니터링 대시보드",
    "AI 이미지 분석을 통한 병해 위험도 측정",
    "AI 챗봇을 통한 영농 지식 즉시 검색",
    "데이터 기반 방제 및 영농 알림",
    "데이터 기반 수확 시기 예측"
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
                        데이터가 보여주는<br />
                        <span className="text-secondary-green">투명한 농장</span>
                    </h3>
                    <p className="text-lg text-neutral-cream/80 mb-12 leading-relaxed">
                        FarmSense는 단순한 모니터링 도구가 아닙니다. <br />
                        데이터를 수집하고, 분석하여, 농부가 해야 할 일을 정확히 알려주는
                        인공지능 파트너입니다.
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
