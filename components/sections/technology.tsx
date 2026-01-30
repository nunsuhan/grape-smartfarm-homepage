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
        icon: Scan,
        title: 'AI 이상 징후 감지',
        value: '4-Class → 10-Class',
        desc: '4-Class 필터(정상/병해/해충/기타) 후 10-Class 정밀 진단. 24-48시간 골든타임 내 발견 시 방제 효과 3배 이상(Caffi et al., Mills Chart 기반).',
        stack: ['4-Class 필터', '10-Class 진단', 'YOLOv8-cls', 'EfficientNet'],
    },
    {
        icon: LineChart,
        title: 'PMI 예방 경보 시스템',
        value: 'PMI≥0.7 24h, ≥0.5 48h',
        desc: '흰가루병: 21~30°C·40~70% RH 최적 조건. 노균병: 엽면습윤 12h(20°C) 감염. PMI≥0.7 24h 내 방제, ≥0.5 48h 내 예방 권장(Carisse, Caffi 등).',
        stack: ['PMI 엔진', '21~30°C·40~70% RH', '엽면습윤 12h', 'Mills Chart'],
    },
    {
        icon: Database,
        title: 'RAG Knowledge System',
        value: '4,595 논문·129K 문서',
        desc: '4,595개 학술 논문 PDF, 밴드 Q&A 15,000+, YouTube 500+ 영상. ChromaDB·ko-sbert 기반 287K 청크 검색 후 농장별 맞춤 처방 생성.',
        stack: ['ChromaDB', '287K chunks', 'ko-sbert-nli', 'GPT-4/Claude'],
    },
    {
        icon: Cpu,
        title: 'DSS 의사결정 지원',
        value: 'GDD T_base 10°C, TRV·LAI',
        desc: 'GDD(T_base 10°C)로 발아~수확 단계 예측. TRV=(H×W×10,000)/R, LWA 0.2~1.0으로 살포량 계산. LAI 3.5~4.0 최적 수확량(Gil, De Bei 등).',
        stack: ['GDD T_base 10°C', 'TRV·LWA', 'DOSAVIÑA', 'LAI 3.5~4.0'],
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
                        조기 감지부터 예방까지<br />
                        <span className="text-secondary-purple">완전한 농업 솔루션</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, i) => {
                        const isDss = tech.title.includes('DSS');
                        const isDiag = tech.title.includes('AI 이상') || tech.title.includes('데이터 기반');

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

                        const isPmi = tech.title.includes('PMI');
                        const isRag = tech.title.includes('RAG');
                        
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {isDss || isPmi ? (
                                    <Link href="/technology/pmi-dss" className="block h-full cursor-pointer">
                                        <CardContent />
                                    </Link>
                                ) : isDiag ? (
                                    <Link href="/technology/ai-diagnosis" className="block h-full cursor-pointer">
                                        <CardContent />
                                    </Link>
                                ) : isRag ? (
                                    <Link href="/technology/rag-system" className="block h-full cursor-pointer">
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
