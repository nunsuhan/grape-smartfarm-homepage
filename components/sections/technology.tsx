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
        value: '조기 감지 우선',
        desc: '병명을 정확히 맞추는 것보다, 병이 오고 있다는 것을 빨리 캐치하는 것이 더 중요합니다. 24-48시간 내 발견 시 방제 효과 3배 이상 증가.',
        stack: ['5개 앙상블 모델', 'YOLOv8-cls', 'ResNet50', 'ViT'],
    },
    {
        icon: LineChart,
        title: 'PMI 예방 경보 시스템',
        value: '48시간 사전 경보',
        desc: '환경 데이터를 분석하여 병해 발생 위험도를 사전에 예측. PMI 등급 체계로 안전/주의/경고/위험/긴급 단계별 조치 안내.',
        stack: ['PMI 엔진', '온도/습도 분석', '엽면습윤 시간', '포자 형성 조건'],
    },
    {
        icon: Database,
        title: 'RAG Knowledge System',
        value: '129K 문서',
        desc: '4,595개 학술 논문, 네이버 밴드 Q&A 15,000+, YouTube 자막 500+ 영상을 통합한 거대 지식 베이스. 농장별 컨텍스트 기반 맞춤형 답변.',
        stack: ['ChromaDB', 'ko-sbert-nli', 'GPT-4 Turbo', 'Claude 3.5'],
    },
    {
        icon: Cpu,
        title: 'DSS 의사결정 지원',
        value: 'GDD + DOSAVIÑA',
        desc: '적산온도(GDD) 기반 생육단계 예측과 수관 체적(TRV) 기반 최적 농약 살포량 계산. 과잉 살포 방지로 환경 부하 감소.',
        stack: ['GDD Algorithm', 'DOSAVIÑA', 'TRV 계산', '재배방식 보정'],
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
