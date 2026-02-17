'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const screenshots = [
    {
        src: "/images/screenshots/app-dashboard.png",
        title: "실시간 대시보드",
        desc: "센서 데이터와 PMI 지수를 한눈에 확인하세요."
    },
    {
        src: "/images/screenshots/app-diagnosis-result.png",
        title: "AI 병해 진단 결과",
        desc: "78% 이상의 정확도로 병해를 분석하고 처방을 제시합니다."
    },
    {
        src: "/images/screenshots/app-chat-conversation.png",
        title: "AI 영농 상담",
        desc: "궁금한 점은 언제든 물어보세요. 검증된 자료로 답변합니다."
    }
];

export function AppGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-30%"]);

    return (
        <Section className="bg-neutral-900 border-b border-white/10 py-32 overflow-hidden">
            <Container className="mb-16">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">
                            App Interface
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            직관적인 <span className="text-secondary-green">모바일 경험</span>
                        </h3>
                        <p className="text-lg text-neutral-cream/80 leading-relaxed">
                            복잡한 데이터도 한눈에 파악할 수 있도록 설계되었습니다.<br />
                            현장에서 필요한 모든 기능을 손안에서 만나보세요.
                        </p>
                    </motion.div>
                </div>
            </Container>

            {/* Horizontal Scroll Gallery */}
            <div ref={targetRef} className="relative h-[600px] w-full">
                <div className="flex gap-8 px-[10vw] absolute left-0 top-0">
                    {screenshots.map((shot, index) => (
                        <motion.div
                            key={index}
                            className="relative group"
                            whileHover={{ y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Phone Frame */}
                            <div className="relative w-[300px] h-[600px] bg-neutral-800 rounded-[40px] border-[8px] border-neutral-700 shadow-2xl overflow-hidden aspect-[9/19.5]">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-700 rounded-b-xl z-20" />
                                <Image
                                    src={shot.src}
                                    alt={shot.title}
                                    fill
                                    className="object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>

                            {/* Caption */}
                            <div className="absolute -bottom-16 left-0 w-full text-center">
                                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-secondary-gold transition-colors">{shot.title}</h4>
                                <p className="text-sm text-gray-400">{shot.desc}</p>
                            </div>
                        </motion.div>
                    ))}

                    {/* More to come placeholder */}
                    <div className="w-[300px] h-[600px] flex items-center justify-center">
                        <div className="text-center p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                            <p className="text-white/60 mb-4">더 많은 기능이<br />준비되어 있습니다</p>
                            <button className="flex items-center gap-2 text-secondary-gold font-bold mx-auto hover:underline">
                                전체 기능 보기 <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
