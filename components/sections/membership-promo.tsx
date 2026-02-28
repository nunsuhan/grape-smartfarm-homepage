'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useModal } from '../providers/modal-provider';

export function MembershipPromo() {
    const { openModal } = useModal();

    return (
        <Section id="membership-promo" className="bg-neutral-900 border-b border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary-gold/5" />

            <Container className="relative z-10">
                <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-neutral-black to-neutral-black/80 border border-secondary-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-gold/20 text-secondary-gold text-xs font-bold mb-4">
                                <Sparkles className="w-3 h-3" />
                                <span>Founding Lifetime Member</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                                창립 평생회원 <span className="text-secondary-gold">100명 한정</span> 모집
                            </h3>
                            <p className="text-neutral-cream/70 mb-4">
                                지금 가입하면 평생 무료 업데이트, 1:1 전문가 컨설팅 포함
                            </p>

                            <div className="flex items-center md:justify-start justify-center gap-4 text-sm">
                                <div className="text-neutral-500 line-through">₩3,600,000</div>
                                <div className="text-2xl font-bold text-white">₩490,000 <span className="text-red-500 text-sm font-normal">(86% OFF)</span></div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <div className="text-sm text-secondary-gold font-bold animate-pulse">
                                🔥 현재 76명 신청 / 24자리 남음
                            </div>
                            <button
                                onClick={() => openModal('investment', 'membership')}
                                className="group relative px-8 py-4 bg-gradient-to-r from-secondary-gold to-yellow-600 text-neutral-black font-bold rounded-full hover:scale-105 transition-transform overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    평생회원 신청하기 <ArrowRight className="w-4 h-4" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>

                    </div>
                </div>
            </Container>
        </Section>
    );
}
