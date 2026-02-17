'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
    return (
        <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.webp"
                    alt="Vineyard Background"
                    fill
                    className="object-cover"
                    priority
                    quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/60 via-neutral-black/30 to-neutral-black" />
            </div>

            {/* Center Text */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="relative z-10 flex items-center justify-center px-6"
            >
                <h1
                    className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] font-serif font-bold tracking-tight leading-[1.2] text-center"
                    style={{
                        color: '#FFFFFF',
                        textShadow: '0 0 80px rgba(74,124,63,0.25), 0 0 160px rgba(74,124,63,0.1)',
                    }}
                >
                    <span style={{ color: 'rgba(255,255,255,0.95)' }}>
                        의사결정 지원 시스템
                    </span>
                </h1>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent" />
                </div>
            </motion.div>
        </div>
    );
}
