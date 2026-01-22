'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, User } from 'lucide-react';
import Image from 'next/image';

interface LoginScreenProps {
    onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            onLogin();
        }, 1500);
    };

    return (
        <div className="flex flex-col h-full bg-neutral-black p-6 relative">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-30">
                <Image
                    src="/images/hero_bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 flex-1 flex flex-col justify-center"
            >
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-secondary-gold rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-secondary-gold/20">
                        <span className="text-3xl">🍇</span>
                    </div>
                    <h1 className="text-2xl font-serif font-bold text-white mb-2">FarmSense</h1>
                    <p className="text-neutral-cream/60 text-sm">스마트한 포도 농사의 시작</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                        <input
                            type="email"
                            placeholder="이메일"
                            defaultValue="demo@farmsense.io"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-secondary-gold transition-colors"
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            defaultValue="********"
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-neutral-500 focus:outline-none focus:border-secondary-gold transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-secondary-gold text-black font-bold py-3 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : (
                            <>
                                로그인
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    <div className="text-center mt-4 space-y-2">
                        <button type="button" className="text-xs text-neutral-cream/50 hover:text-secondary-gold transition-colors">
                            계정이 없으신가요? 회원가입
                        </button>
                        <div className="text-[10px] text-secondary-gold/80 bg-secondary-gold/10 p-2 rounded-lg">
                            *체험용 계정으로 자동 로그인됩니다
                        </div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
