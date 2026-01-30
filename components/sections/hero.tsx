'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '../providers/modal-provider';

const stats = [
    { label: '지식 문서', value: '129K+', sub: 'RAG Knowledge Base' },
    { label: '학술 논문', value: '4,595개', sub: 'PDF Documents' },
    { label: '센서 데이터', value: '4억+', sub: 'Data Points' },
    { label: '병해 감지', value: '8종', sub: '이상 징후 조기 감지' },
];

export function Hero() {
    const { openModal } = useModal();

    return (
        <div className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-black">
            {/* Background Image - Static */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.png"
                    alt="Vineyard Background"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/70 via-neutral-black/20 to-neutral-black" />
            </div>

            <Container className="relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    {/* Text Backdrop for better readability */}
                    <div className="absolute inset-0 -m-8 bg-neutral-black/10 blur-xl rounded-full -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4 drop-shadow-md">
                            AI 기반 포도 스마트팜 통합 관리 플랫폼
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                            병해충 조기 감지부터<br className="md:hidden" />
                            <span className="text-secondary-green drop-shadow-[0_4px_8px_rgba(0,0,0,1)] stroke-black">예방 농업</span>까지
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-cream/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-10">
                            FarmSense는 3,000개 이상 학술 논문과 실증 데이터를 기반으로<br className="hidden md:block" />
                            농가의 생산성 향상과 품질 관리를 지원합니다.
                        </p>

                        {/* 핵심 가치 4가지 */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-secondary-green mb-1">조기 감지</div>
                                <div className="text-xs text-neutral-cream/70">병명 확정 전 이상 징후 포착</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-blue-400 mb-1">예방 농업</div>
                                <div className="text-xs text-neutral-cream/70">PMI 기반 48시간 사전 경보</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-purple-400 mb-1">데이터 기반</div>
                                <div className="text-xs text-neutral-cream/70">3,000+ 논문 기반 RAG 시스템</div>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                                <div className="text-2xl font-bold text-yellow-400 mb-1">데이터 축적</div>
                                <div className="text-xs text-neutral-cream/70">국가 농업 연구 기반 마련</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-8 py-4 bg-secondary-green text-neutral-black font-bold text-lg rounded hover:bg-secondary-green/90 transition-all shadow-[0_0_20px_rgba(75,183,117,0.3)] hover:shadow-[0_0_30px_rgba(75,183,117,0.5)]">
                                시스템 소개 보기
                            </button>
                        </div>
                    </motion.div>


                </div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-12 w-full"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                            <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-2 group-hover:text-secondary-gold transition-colors shadow-sm">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-neutral-cream/90">{stat.label}</div>
                            <div className="text-xs text-neutral-cream/50 mt-1 group-hover:text-neutral-cream/80 transition-colors">{stat.sub}</div>
                        </div>
                    ))}
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </motion.div>
        </div>
    );
}
