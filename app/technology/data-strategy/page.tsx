'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Database, Network, LineChart, Target, Layers, Lock, Cpu, Globe } from 'lucide-react';

export default function DataStrategyPage() {
    return (
        <main className="min-h-screen bg-neutral-black pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,166,0,0.1),transparent_50%)]" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
                            우리는 단순 앱이 아니라<br />
                            <span className="text-secondary-gold text-glow">데이터 플랫폼</span>입니다
                        </h1>
                        <p className="text-xl text-neutral-cream/80 max-w-2xl mx-auto leading-relaxed">
                            농가가 보내는 수십만 장의 사진은 단순한 이미지가 아닙니다.<br />
                            위치, 환경, 시기, 품종, 결과가 결합된 <span className="text-white font-bold">대체 불가능한 자산</span>입니다.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Moat Section */}
            <section className="py-20 bg-neutral-black/50">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
                                압도적인 데이터 해자 (Moat)
                            </h2>
                            <p className="text-neutral-cream/80 mb-8 leading-relaxed">
                                전 세계 어디에도 '한국형 맞춤 포도 데이터'는 존재하지 않습니다.
                                PlantVillage, Plantix 등 글로벌 기업도 보유하지 못한
                                독자적인 데이터를 구축합니다.
                            </p>

                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Database className="w-5 h-5 text-secondary-gold" />
                                        <h3 className="font-bold text-white">데이터 1장의 가치</h3>
                                    </div>
                                    <p className="text-sm text-neutral-cream/70">
                                        이미지 + 위치 + 환경 + 시기 + 품종 + 진단 결과
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Lock className="w-5 h-5 text-secondary-gold" />
                                        <h3 className="font-bold text-white">진입 장벽</h3>
                                    </div>
                                    <p className="text-sm text-neutral-cream/70">
                                        데이터가 쌓일수록 경쟁자가 모방할 수 없는 격차 발생
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary-gold/20 blur-[100px] rounded-full" />
                            <div className="relative grid grid-cols-2 gap-4">
                                {[
                                    { icon: Target, label: "위치 정보" },
                                    { icon: Globe, label: "환경 데이터" },
                                    { icon: Layers, label: "생육 시기" },
                                    { icon: Cpu, label: "AI 진단값" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        className="aspect-square flex flex-col items-center justify-center p-6 rounded-2xl bg-neutral-black border border-white/10 hover:border-secondary-gold/50 transition-colors"
                                    >
                                        <item.icon className="w-8 h-8 text-secondary-gold mb-3" />
                                        <span className="font-bold text-white">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Network Effect */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-gold/10 rounded-full blur-[120px]" />
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                            강력한 네트워크 효과
                        </h2>
                        <p className="text-neutral-cream/80">
                            사용자가 늘어날수록 AI가 똑똑해지고, 더 많은 혜택이 돌아가는 선순환 구조
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary-gold/30 to-transparent -translate-y-1/2 lg:scale-x-75" />

                        {[
                            {
                                step: "01",
                                title: "농가 유입 증가",
                                desc: "무료 AI 진단으로 농가 확보",
                                icon: Network
                            },
                            {
                                step: "02",
                                title: "데이터 축적",
                                desc: "다양한 환경의 병해충 데이터 확보",
                                icon: Database
                            },
                            {
                                step: "03",
                                title: "AI 정확도 향상",
                                desc: "더 정교한 진단 서비스 제공",
                                icon: LineChart
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="relative z-10 bg-neutral-black p-8 rounded-2xl border border-white/10 text-center group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-secondary-gold/10 rounded-full flex items-center justify-center group-hover:bg-secondary-gold/20 transition-colors">
                                    <item.icon className="w-8 h-8 text-secondary-gold" />
                                </div>
                                <span className="text-4xl font-bold text-white/5 absolute top-4 right-6 select-none">
                                    {item.step}
                                </span>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-neutral-cream/70">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Revenue & Exit Strategy */}
            <section className="py-20 bg-neutral-black/50 border-t border-white/10">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Revenue Models */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-secondary-gold pl-4">
                                수익 다각화 모델
                            </h3>
                            <div className="space-y-6">
                                {[
                                    { title: "구독료", desc: "프리미엄 기능 및 심층 리포트 제공" },
                                    { title: "데이터 라이선싱", desc: "농업 연구소, 지자체에 가공 데이터 판매" },
                                    { title: "연구 용역", desc: "스마트팜 기술 개발 및 실증 연구 참여" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-gold mt-2.5 shrink-0" />
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{item.title}</h4>
                                            <p className="text-neutral-cream/60 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Exit Scenario */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-8 border-l-4 border-secondary-gold pl-4">
                                Exit 시나리오
                            </h3>
                            <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl border border-white/10">
                                <h4 className="text-xl font-bold text-white mb-4">
                                    글로벌 농업 AI 기업 M&A
                                </h4>
                                <p className="text-neutral-cream/80 mb-6 leading-relaxed">
                                    단순한 앱 서비스 기업이 아닌, <br />
                                    <span className="text-secondary-gold">독보적인 농업 데이터 자산</span>을 보유한<br />
                                    데이터 플랫폼으로서의 가치를 인정받습니다.
                                </p>
                                <ul className="space-y-2 text-sm text-neutral-cream/60">
                                    <li className="flex items-center gap-2">
                                        <span className="text-secondary-gold">✓</span>
                                        데이터의 희소성
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-secondary-gold">✓</span>
                                        검증된 AI 모델
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-secondary-gold">✓</span>
                                        충성도 높은 농가 네트워크
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
