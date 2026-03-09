'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Check } from 'lucide-react';
import { useModal } from '../providers/modal-provider';

const features = [
    "사진 찍으면 무슨 병인지 알려드립니다",
    "병 올 위험을 이틀 전에 알려드립니다",
    "궁금한 거 물어보세요 — 논문과 전문자료 기반으로 답해드립니다",
    "언제 물 줘야 하는지, 약은 얼마나 뿌려야 하는지 알려드립니다",
    "하우스에 센서 붙이면 앱에서 바로 확인됩니다"
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
                        팜센스는 포도 농사 전용 스마트팜 서비스입니다. <br />
                        병이 오기 전에 알려주고, 물 줄 때·약 칠 때를 먼저 알려드립니다.
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
