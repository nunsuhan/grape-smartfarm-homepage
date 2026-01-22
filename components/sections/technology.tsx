'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Database, Scan, LineChart, Cpu } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const technologies = [
    {
        icon: Database,
        title: 'RAG Knowledge System',
        value: '287K Chunks',
        desc: '4,600편의 농업 논문을 학습한 거대 지식 베이스. 질문에 대한 근거 기반 답변 제공.',
        stack: ['ChromaDB', 'Upstage Embedding', 'Multilingual E5'],
    },
    {
        icon: Scan,
        title: '데이터 기반 병해 진단',
        value: 'Data Helper',
        desc: '단순 사진 판독의 한계를 넘어, 환경 데이터와 연동된 통계적 확률을 제시하는 농가의 데이터 조력자.',
        stack: ['Environment Analysis', 'Probability Model', 'NCPMS Data'],
    },
    {
        icon: LineChart,
        title: '의사결정 지원 (DSS)',
        value: 'Real-time',
        desc: '생육 단계와 기상 데이터를 분석해 최적의 방제 시기와 물 관리 가이드.',
        stack: ['GDD Algorithm', 'PMI Prediction', 'DOSAVIÑA'],
    },
    {
        icon: Cpu,
        title: 'IoT Data Platform',
        value: '400M+ Points',
        desc: '초단위로 수집되는 센서 데이터. 시계열 분석을 통한 초정밀 모니터링.',
        stack: ['IoT Gateway', 'TimescaleDB', 'Edge Computing'],
    },
];

export function Technology() {
    return (
        <Section id="technology" dark className="overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <Image
                    src="/images/tech_viz.png"
                    alt="Tech Visualization"
                    fill
                    className="object-contain object-right"
                />
            </div>

            <Container>
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4"
                    >
                        Core Technology
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        데이터와 알고리즘의<br />
                        <span className="text-secondary-purple">압도적 격차</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, i) => {
                        const isDss = tech.title.includes('DSS');
                        const isDiag = tech.title.includes('데이터 기반');

                        const CardContent = () => (
                            <div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-gold/50 transition-colors overflow-hidden h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10">
                                    <tech.icon className="w-10 h-10 text-secondary-gold mb-6" />
                                    <h4 className="text-xl font-bold text-white mb-2">{tech.title}</h4>
                                    <div className="text-2xl font-mono font-bold text-secondary-green mb-4">{tech.value}</div>
                                    <p className="text-neutral-cream/70 text-sm leading-relaxed mb-6 min-h-[80px]">
                                        {tech.desc}
                                    </p>
                                    <div className="border-t border-white/10 pt-4">
                                        <div className="text-xs font-mono text-neutral-cream/50 mb-2">Tech Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {tech.stack.map((s, j) => (
                                                <span key={j} className="text-xs px-2 py-1 rounded bg-white/10 text-secondary-gold/80">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {isDss ? (
                                    <Link href="/technology/pmi-dss" className="block h-full cursor-pointer">
                                        <CardContent />
                                    </Link>
                                ) : isDiag ? (
                                    <Link href="/technology/ai-diagnosis" className="block h-full cursor-pointer">
                                        <CardContent />
                                    </Link>
                                ) : (
                                    <div className="h-full">
                                        <CardContent />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
