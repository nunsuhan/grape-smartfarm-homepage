'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '../providers/modal-provider';

const stats = [
    { label: '지식 청크', value: '287,000+', sub: 'RAG Knowledge' },
    { label: '연구 논문', value: '4,600+', sub: 'Embedded Papers' },
    { label: '센서 데이터', value: '4억+', sub: 'Data Points' },
    { label: '병해 예방시스템', value: '8종', sub: '사전 예방 및 관리' },
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
                            Data Sovereignty for Farmers
                        </h2>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                            농민의 땀방울을 <br className="md:hidden" />
                            <span className="text-secondary-green drop-shadow-[0_4px_8px_rgba(0,0,0,1)] stroke-black">데이터 주권</span>으로 돌려드립니다.
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-cream/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-10">
                            FarmSense는 농민이 생성한 데이터의 가치를 존중하며,<br className="hidden md:block" />
                            대한민국 농업의 디지털 공정 전환을 선도합니다.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-8 py-4 bg-secondary-green text-neutral-black font-bold text-lg rounded hover:bg-secondary-green/90 transition-all shadow-[0_0_20px_rgba(75,183,117,0.3)] hover:shadow-[0_0_30px_rgba(75,183,117,0.5)]">
                                데이터 주권 선언 참여하기
                            </button>
                            <button
                                onClick={() => openModal(undefined, 'policy')}
                                className="px-8 py-4 bg-transparent border border-white text-white font-bold text-lg rounded hover:bg-white/10 transition-all backdrop-blur-sm"
                            >
                                정책 건의안 보기
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
