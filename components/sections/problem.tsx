'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import { AlertTriangle, Clock, Database } from 'lucide-react';

const problems = [
    {
        icon: AlertTriangle,
        title: "경험으로만 짓는 농사",
        desc: "잘하는 분들이 은퇴하면, 그 노하우도 같이 사라집니다.",
        image: "/images/generated/problem_experience.webp"
    },
    {
        icon: Clock,
        title: "눈으로 보면 이미 늦습니다",
        desc: "병이 눈에 보일 때는 이미 퍼진 뒤입니다. 매년 포도 병해 피해가 2,000억 원입니다.",
        image: "/images/generated/leaf_symptoms.webp"
    },
    {
        icon: Database,
        title: "여기저기 흩어진 정보",
        desc: "날씨는 기상청에서, 온습도는 센서에서, 일지는 따로 쓰고... 팜센스가 한번에 보여드립니다.",
        image: "/images/generated/problem_data.webp"
    }
];

export function Problem() {
    return (
        <Section id="problem" className="bg-neutral-900 border-b border-white/10">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">The Problem</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        대한민국 포도 농가의
                        <span className="text-red-400"> 위기</span>
                    </h3>
                    <p className="text-neutral-cream/60">
                        포도 농가가 매일 마주하는 세 가지 문제입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-w-0">
                    {problems.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors text-center h-full flex flex-col items-center overflow-hidden"
                        >
                            {/* Icon or Image */}
                            {item.image ? (
                                <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden border border-white/10">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        quality={65}
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-400/10 text-red-400 mb-6 shrink-0">
                                    <item.icon className="w-8 h-8" />
                                </div>
                            )}

                            <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                            <p className="text-neutral-cream/70 leading-relaxed grow">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
