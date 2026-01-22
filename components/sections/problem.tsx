'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import { AlertTriangle, Clock, Database } from 'lucide-react';

const problems = [
    {
        icon: AlertTriangle,
        title: "경험 의존적 재배",
        desc: "농장주의 직감에 의존하여, 전문가 은퇴 시 노하우가 단절됩니다. 데이터 없는 농업은 지속 불가능합니다.",
        image: "/images/generated/problem_experience.jpg?v=2"
    },
    {
        icon: Clock,
        title: "후행적 병해 대응",
        desc: "눈으로 확인했을 때는 이미 늦었습니다. 포도 농가의 연간 피해액은 2,000억 원에 달합니다.",
        image: "/images/generated/leaf_symptoms.jpg"
    },
    {
        icon: Database,
        title: "분절된 정보",
        desc: "기상청 데이터, 센서 데이터, 영농 일지가 모두 흩어져 있어 통합적인 의사결정이 불가능합니다.",
        image: "/images/generated/problem_data.jpg?v=2"
    }
];

export function Problem() {
    return (
        <Section id="problem" className="bg-neutral-900 border-b border-white/5">
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
                        스마트팜 보급률 8%, 우리는 아직 1차 산업에 머물러 있습니다.
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
