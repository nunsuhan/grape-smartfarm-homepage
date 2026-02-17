'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Cpu, Globe, Terminal, ArrowRight } from 'lucide-react';

const educationModules = [
    {
        title: "입문/초급 (DIY 기초)",
        description: "ESP32와 아두이노를 활용하여 나만의 스마트팜 센서를 직접 만들어봅니다.",
        icon: <Cpu className="w-8 h-8 text-blue-400" />,
        href: "/education/beginner",
        level: "Beginner"
    },
    {
        title: "중급/고급 (API/LoRa)",
        description: "FarmSense API와 연동하거나 LoRa 장거리 통신 네트워크를 구축합니다.",
        icon: <Globe className="w-8 h-8 text-purple-400" />,
        href: "/education/advanced",
        level: "Advanced"
    },
    {
        title: "환경제어 센서 가이드",
        description: "온실 내 센서 최적 배치 위치와 노이즈 저감 설치 노하우를 배웁니다.",
        icon: <BookOpen className="w-8 h-8 text-green-400" />,
        href: "/education/environment",
        level: "Field Guide"
    },
    {
        title: "개발자 API 문서",
        description: "센서 데이터를 FarmSense 클라우드로 전송하기 위한 REST API 규격서입니다.",
        icon: <Terminal className="w-8 h-8 text-secondary-gold" />,
        href: "/developers/api-guide",
        level: "Developer"
    }
];

export default function EducationHubPage() {
    return (
        <main className="min-h-screen bg-neutral-900 pt-20">
            <Section className="py-20 border-b border-white/10">
                <Container className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <span className="text-secondary-gold font-medium tracking-wider uppercase text-sm">FarmSense Academy</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            센서, 직접 만들고 연동하세요
                        </h1>
                        <p className="text-neutral-400 text-lg">
                            FarmSense는 폐쇄적인 시스템이 아닙니다. <br className="hidden md:block" />
                            여러분이 가진 장비 그대로, 우리의 두뇌(Brain)와 연결할 수 있습니다.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            <Section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {educationModules.map((module, idx) => (
                            <Link key={idx} href={module.href} className="group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="h-full bg-neutral-black border border-white/10 p-8 rounded-2xl hover:border-secondary-gold/50 transition-colors relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        {module.icon}
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/5 p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                                            {module.icon}
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-secondary-gold mb-1 uppercase tracking-wider">{module.level}</div>
                                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                                {module.title}
                                                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary-gold" />
                                            </h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed">
                                                {module.description}
                                            </p>
                                        </div>
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
