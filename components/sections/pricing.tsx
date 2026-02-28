'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Check, X } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "무료",
        price: "₩0",
        period: "",
        badge: null,
        desc: "기본 기능으로 시작",
        features: [
            { label: "기본 환경 모니터링", included: true },
            { label: "영농일지 (월 10건)", included: true },
            { label: "기상 정보", included: true },
            { label: "커뮤니티", included: true },
            { label: "AI 병해 진단", included: false },
            { label: "PLS 농약안전사용기준", included: false },
        ],
        highlight: false,
        goldBorder: false,
        cta: "무료로 시작",
        ctaHref: "/smartfarm/dashboard",
    },
    {
        name: "일반",
        price: "₩5,000",
        period: "/ 월",
        annualPrice: "연 ₩20,000",
        badge: "인기",
        desc: "스마트팜 핵심 기능 전체",
        features: [
            { label: "무료 기능 전체", included: true },
            { label: "AI 병해 진단 (무제한)", included: true },
            { label: "병해 예측 (PMI)", included: true },
            { label: "센서 연동 무제한", included: true },
            { label: "데이터 분석 리포트", included: true },
            { label: "PLS 농약안전사용기준", included: false },
        ],
        highlight: false,
        goldBorder: false,
        cta: "시작하기",
        ctaHref: "/smartfarm/dashboard",
    },
    {
        name: "수출농가",
        price: "₩10,000",
        period: "/ 월",
        annualPrice: "연 ₩50,000",
        badge: "수출 특화",
        desc: "수출 기준 충족 + PLS 관리",
        features: [
            { label: "일반 기능 전체", included: true },
            { label: "PLS 농약안전사용기준", included: true },
            { label: "수출 이력 추적 (블록체인)", included: true },
            { label: "잔류농약 기록 관리", included: true },
            { label: "수출 서류 지원", included: true },
            { label: "전담 고객 지원", included: true },
        ],
        highlight: true,
        goldBorder: true,
        cta: "수출농가 시작",
        ctaHref: "/smartfarm/dashboard",
    },
];

export function Pricing() {
    return (
        <Section id="pricing" className="bg-neutral-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">Pricing Plans</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                        합리적인 가격으로<br />시작하는 스마트 농업
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${plan.goldBorder
                                ? 'bg-neutral-900 border-secondary-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                                : 'bg-neutral-black border-white/10 hover:border-white/30'
                                }`}
                        >
                            {plan.badge && (
                                <div className={`absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold px-3 py-1 rounded-full shadow-lg ${plan.goldBorder ? 'bg-secondary-gold text-neutral-black' : 'bg-green-600 text-white'}`}>
                                    {plan.badge}
                                </div>
                            )}

                            <h4 className="text-lg font-bold text-white mb-2">{plan.name}</h4>
                            <div className="mb-1">
                                <span className="text-2xl font-bold text-white">{plan.price}</span>
                                <span className="text-neutral-500 text-xs">{plan.period}</span>
                            </div>
                            {'annualPrice' in plan && (
                                <p className="text-xs text-neutral-cream/50 mb-1">{plan.annualPrice} (연 결제 시)</p>
                            )}
                            <p className="text-neutral-cream/60 text-sm mb-6 pb-6 border-b border-white/10">
                                {plan.desc}
                            </p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm">
                                        {feature.included
                                            ? <Check className={`w-4 h-4 shrink-0 ${plan.goldBorder ? 'text-secondary-gold' : 'text-green-500'}`} />
                                            : <X className="w-4 h-4 shrink-0 text-neutral-600" />
                                        }
                                        <span className={feature.included ? 'text-neutral-cream/80' : 'text-neutral-600 line-through'}>
                                            {feature.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.ctaHref}
                                className={`w-full py-3 rounded-lg font-bold transition-all text-center block ${plan.goldBorder
                                    ? 'bg-secondary-gold text-neutral-black hover:bg-white shadow-lg shadow-secondary-gold/20'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link href="/pricing" className="text-sm text-neutral-cream/50 hover:text-secondary-gold transition-colors underline underline-offset-4">
                        전체 기능 상세 비교 보기 →
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
