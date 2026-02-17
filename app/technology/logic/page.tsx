'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Droplets, FlaskConical, Bug, BarChart, Grape, ArrowRight } from 'lucide-react';

const logicModules = [
    {
        title: "관수 및 물관리",
        subtitle: "Soil Water Potential Logic",
        description: "토양수분장력 -10/-15/-20 kPa 임계값을 기반으로 생육 단계별 정밀 관수를 수행합니다.",
        icon: <Droplets className="w-8 h-8 text-blue-400" />,
        href: "/technology/logic/water",
        color: "blue"
    },
    {
        title: "비료 및 양분 처방",
        subtitle: "Nutrient Balance Control",
        description: "생육 단계별 NPK 비율(30-10-10 등) 최적화 및 3.0 dS/m EC 안전 차단 로직을 적용합니다.",
        icon: <FlaskConical className="w-8 h-8 text-green-400" />,
        href: "/technology/logic/fertilizer",
        color: "green"
    },
    {
        title: "병해충 방제 타이밍",
        subtitle: "Pest Risk Model & Natural Suppression",
        description: "노균병/흰가루병균의 생존/사멸 온도 임계값($14.9 \sim 35^\circ C$)을 분석하여 방제 적기를 판단합니다.",
        icon: <Bug className="w-8 h-8 text-red-400" />,
        href: "/technology/logic/disease",
        color: "red"
    },
    {
        title: "수확량 예측 (Yield)",
        subtitle: "Hybrid AI Stacking",
        description: "GDD(적산온도)와 AI 비전(송이 개수 인식)을 결합하여 생산량을 과학적으로 시뮬레이션합니다.",
        icon: <BarChart className="w-8 h-8 text-secondary-gold" />,
        href: "/technology/logic/yield",
        color: "gold"
    },
    {
        title: "포도 전문 재배기술",
        subtitle: "Grapevine Physiology",
        description: "안토시아닌 합성 최적 온도($26^\circ C$) 관리와 Soft Sensor 기반 생육 진단 기술을 제공합니다.",
        icon: <Grape className="w-8 h-8 text-purple-400" />,
        href: "/technology/logic/grape",
        color: "purple"
    }
];

export default function LogicHubPage() {
    return (
        <main className="min-h-screen bg-neutral-900 pt-20">
            <Section className="py-20 border-b border-white/10 bg-neutral-black">
                <Container className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-secondary-gold font-medium tracking-wider uppercase text-sm">FarmSense Intelligence</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                            농업은 감(Feeling)이 아니라 <br className="hidden md:block" />
                            <span className="text-secondary-gold">데이터(Logic)</span>입니다
                        </h1>
                        <p className="text-neutral-400 text-lg mt-6">
                            FarmSense의 모든 의사결정은 수백 편의 논문과 현장 데이터에 기반합니다. <br className="hidden md:block" />
                            우리가 사용하는 5가지 핵심 알고리즘을 투명하게 공개합니다.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            <Section className="py-20">
                <Container className="max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {logicModules.map((module, idx) => (
                            <Link key={idx} href={module.href} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="h-full bg-neutral-black border border-white/10 p-8 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all relative overflow-hidden flex flex-col"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                    <div className="mb-6 relative z-10 w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                                        {module.icon}
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wide">{module.subtitle}</div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary-gold transition-colors flex items-center gap-2">
                                            {module.title}
                                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {module.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
