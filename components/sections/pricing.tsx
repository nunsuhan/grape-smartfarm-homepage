'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Check } from 'lucide-react';
import { useModal } from '../providers/modal-provider';

const plans = [
    {
        name: "1차 평생회원",
        price: "₩490,000",
        period: "/ 1회",
        badge: "86% 할인",
        desc: "선착순 100명 한정 특가",
        features: ["평생 무제한 이용", "모든 기능 포함", "1:1 전문가 지원"],
        highlight: true,
        goldBorder: true
    },
    {
        name: "2차 평생회원",
        price: "₩790,000",
        period: "/ 1회",
        badge: "오픈 예정",
        desc: "1차 마감 후 인상 가격",
        features: ["평생 무제한 이용", "모든 기능 포함", "일반 고객 지원"],
        highlight: false,
        goldBorder: false
    },
    {
        name: "연간 정기",
        price: "₩360,000",
        period: "/ 년",
        badge: "월 3만원",
        desc: "합리적인 연간 구독",
        features: ["연간 무제한 이용", "모든 기능 포함", "데이터 내보내기"],
        highlight: false,
        goldBorder: false
    },
    {
        name: "월간 플랜",
        price: "₩59,000",
        period: "/ 월",
        badge: null,
        desc: "가볍게 시작하는 월 구독",
        features: ["월간 이용", "기본 기능 포함", "커뮤니티 접근"],
        highlight: false,
        goldBorder: false
    }
];

export function Pricing() {
    const { openModal } = useModal();

    return (
        <Section id="pricing" className="bg-neutral-black">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4">Pricing Plans</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                        합리적인 가격으로<br />시작하는 스마트 농업
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.goldBorder
                                ? 'bg-neutral-900 border-secondary-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                                : 'bg-neutral-black border-white/10 hover:border-white/30'
                                }`}
                        >
                            {plan.badge && (
                                <div className={`absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-xs font-bold px-3 py-1 rounded-full shadow-lg ${plan.goldBorder ? 'bg-secondary-gold text-neutral-black' : 'bg-secondary-purple text-white'
                                    }`}>
                                    {plan.badge}
                                </div>
                            )}

                            <h4 className="text-lg font-bold text-white mb-2">{plan.name}</h4>
                            <div className="mb-1">
                                <span className="text-2xl font-bold text-white">{plan.price}</span>
                                <span className="text-neutral-500 text-xs">{plan.period}</span>
                            </div>
                            <p className="text-neutral-cream/60 text-sm mb-6 pb-6 border-b border-white/10 h-[60px]">
                                {plan.desc}
                            </p>

                            <ul className="space-y-3 mb-8 h-[120px]">
                                {plan.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-2 text-sm text-neutral-cream/80">
                                        <Check className={`w-4 h-4 ${plan.goldBorder ? 'text-secondary-gold' : 'text-neutral-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => {
                                    if (plan.goldBorder) {
                                        openModal(undefined, 'membership');
                                    } else {
                                        openModal('investment', 'contact');
                                    }
                                }}
                                className={`w-full py-3 rounded-lg font-bold transition-all ${plan.goldBorder
                                    ? 'bg-secondary-gold text-neutral-black hover:bg-white shadow-lg shadow-secondary-gold/20'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                시작하기
                            </button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
