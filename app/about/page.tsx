'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import Link from 'next/link';
import {
    Heart, Shield, Users, Sprout, Database, Brain,
    ArrowRight, ChevronRight, Grape, Leaf, BookOpen,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const VALUES = [
    {
        icon: Heart,
        title: '데이터 주권은 농가에게',
        desc: '수집된 모든 데이터의 소유권은 농가에 있습니다. 우리는 도구를 만들 뿐, 농가의 데이터를 팔지 않습니다. 블록체인 해시 체인으로 데이터 무결성을 보장하고, 농가가 원할 때 언제든 자신의 데이터를 내려받을 수 있습니다.',
        color: '#8B5CF6',
    },
    {
        icon: Users,
        title: '경험을 대체하지 않고, 돕는다',
        desc: '30년 농사 경험은 어떤 AI도 대체할 수 없습니다. FarmSense는 농가의 경험에 데이터 근거를 더합니다. "이 시기에 방제하면 좋겠다"는 감에 "PMI 지수 0.65, 48시간 내 감염 확률 78%"라는 숫자를 더하는 것입니다.',
        color: '#22C55E',
    },
    {
        icon: Shield,
        title: '국산 농산물의 가치를 증명한다',
        desc: '저가 수입 농산물과의 가격 경쟁이 아니라, 가치 경쟁을 합니다. 센서 데이터 기반 재배 이력, 블록체인 봉인, QR 검증으로 "이 포도가 어떤 환경에서, 어떤 관리를 받으며 자랐는지"를 소비자에게 투명하게 보여줍니다.',
        color: '#F59E0B',
    },
    {
        icon: Sprout,
        title: '함께 만들어가는 플랫폼',
        desc: '농가의 피드백이 곧 다음 업데이트입니다. 현장에서 실제로 필요한 기능을 듣고, 현장에서 검증하고, 현장에서 완성합니다. 기술자가 아니라 농업인이 방향을 정합니다.',
        color: '#3B82F6',
    },
];

const TECH_STACK = [
    { icon: Brain, label: 'AI 병해충 진단', desc: '촬영 한 장으로 질병 판별' },
    { icon: Database, label: '데이터 기반 의사결정', desc: 'PMI·CWSI·GDD 복합 분석' },
    { icon: Shield, label: '블록체인 추적성', desc: '해시 체인 + QR 검증' },
    { icon: Leaf, label: 'RAG 농업 비서', desc: '논문 기반 맞춤 답변' },
];

const TIMELINE = [
    { phase: '지금', items: ['센서 모니터링', 'AI 병해 진단', '영농일지', '딥리서치 정보'] },
    { phase: '다음 단계', items: ['블록체인 LOT 추적', 'QR 소비자 검증', 'GAP 인증 연계', '수출 서류 자동화'] },
    { phase: '장기 비전', items: ['전국 포도 농가 네트워크', '품종별 최적 재배 모델', '탄소발자국 추적', 'NFT 인증서'] },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black pt-20">
                {/* Hero */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,124,63,0.1),transparent_60%)]" />
                    <Container>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
                                기술은<br />
                                <span className="text-secondary-green text-glow">농가를 위해</span> 존재합니다
                            </h1>
                            <p className="text-xl text-neutral-cream/70 leading-relaxed">
                                FarmSense는 포도 농가가 더 나은 판단을 내릴 수 있도록<br className="hidden sm:block" />
                                데이터와 AI로 돕는 의사결정 지원 시스템입니다.
                            </p>
                        </motion.div>
                    </Container>
                </section>

                {/* Values */}
                <section className="py-20 bg-neutral-black/50">
                    <Container>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-serif font-bold text-white mb-12 text-center"
                        >
                            우리가 지향하는 가치
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {VALUES.map((v, i) => {
                                const Icon = v.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ backgroundColor: `${v.color}20` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: v.color }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                                        <p className="text-sm text-neutral-cream/60 leading-relaxed">{v.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* What We Build */}
                <section className="py-20">
                    <Container>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center mb-12"
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                                무엇을 만드는가
                            </h2>
                            <p className="text-neutral-cream/60">
                                현장에서 실제로 쓸 수 있는 도구를 만듭니다
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                            {TECH_STACK.map((t, i) => {
                                const Icon = t.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08, duration: 0.5 }}
                                        className="p-5 rounded-xl bg-white/5 border border-white/10 text-center"
                                    >
                                        <Icon className="w-8 h-8 text-secondary-green mx-auto mb-3" />
                                        <h3 className="text-sm font-bold text-white mb-1">{t.label}</h3>
                                        <p className="text-xs text-neutral-cream/50">{t.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                {/* Timeline */}
                <section className="py-20 bg-neutral-black/50">
                    <Container>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-serif font-bold text-white mb-12 text-center"
                        >
                            어디로 가는가
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {TIMELINE.map((t, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15, duration: 0.5 }}
                                    className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                            i === 0
                                                ? 'bg-secondary-green/20 text-secondary-green'
                                                : i === 1
                                                ? 'bg-secondary-gold/20 text-secondary-gold'
                                                : 'bg-primary-purple/20 text-purple-400'
                                        }`}>
                                            {i + 1}
                                        </div>
                                        <h3 className="text-base font-bold text-white">{t.phase}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {t.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-sm text-neutral-cream/60">
                                                <ChevronRight className="w-3.5 h-3.5 text-secondary-green shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    {i < TIMELINE.length - 1 && (
                                        <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/15 z-10" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <Container>
                        <div className="max-w-2xl mx-auto text-center">
                            <Grape className="w-12 h-12 text-secondary-green mx-auto mb-6" />
                            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4">
                                직접 체험해보세요
                            </h2>
                            <p className="text-neutral-cream/60 mb-8">
                                로그인 없이도 대시보드, AI 상담, 재배 정보를 둘러볼 수 있습니다.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/smartfarm/dashboard"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary-green text-white font-medium hover:bg-secondary-green/80 transition-colors"
                                >
                                    스마트팜 둘러보기
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/grape-info"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-neutral-cream/80 font-medium hover:bg-white/10 transition-colors"
                                >
                                    재배 정보 읽기
                                    <BookOpen className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}
