'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Sprout, Sun, Calculator, Scan, BookOpen, Scaling } from 'lucide-react';
import { clsx } from 'clsx';
import { TechnologyBlogFooter } from '@/components/technology-blog-footer';

export default function YieldLogicPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-yellow-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
                            FarmSense Logic Vol.4
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            수확량 예측 및 생육 시뮬레이션
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed font-serif">
                            GDD(적산온도)와 AI 비전(Vision)을 결합한 하이브리드 수확량 예측
                        </p>

                        {/* Mode Toggle */}
                        <div className="flex items-center gap-1 bg-white/10 p-1 rounded-lg w-fit">
                            <button
                                onClick={() => setMode('simple')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                    mode === 'simple' ? "bg-neutral-black text-neutral-cream shadow-sm border border-white/10" : "text-neutral-cream/60 hover:text-white"
                                )}
                            >
                                요약 (Farmers)
                            </button>
                            <button
                                onClick={() => setMode('technical')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                    mode === 'technical' ? "bg-white text-yellow-600 shadow-sm border border-white/10" : "text-neutral-cream/60 hover:text-white"
                                )}
                            >
                                상세 (Engineers)
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl py-12">
                <AnimatePresence mode="wait">
                    {mode === 'simple' ? (
                        <motion.div
                            key="simple"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-12"
                        >
                            {/* Simple Content */}
                            <div className="border border-white/10 rounded-xl p-8 bg-white shadow-sm">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <BarChart className="text-yellow-600 w-8 h-8" />
                                    "올해 몇 박스나 나올까?" 미리 알려드립니다
                                </h2>
                                <p className="text-lg text-neutral-cream/70 leading-relaxed mb-6">
                                    농사의 가장 큰 고민은 '수확량'입니다. FarmSense는 단순히 감으로 찍는 것이 아니라,
                                    <strong>꽃 피는 시기의 날씨(GDD)</strong>와 <strong>카메라로 찍은 실제 송이 수</strong>를
                                    종합하여 수확량을 과학적으로 계산해냅니다.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white/5 p-4 rounded-lg border border-neutral-100 text-center">
                                        <Scan className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                                        <div className="font-bold text-white">1. 찰칵! 송이 세기</div>
                                        <div className="text-xs text-neutral-cream/60 mt-1">AI 자동 카운팅</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg border border-neutral-100 text-center">
                                        <Sun className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                                        <div className="font-bold text-white">2. 햇빛 계산</div>
                                        <div className="text-xs text-neutral-cream/60 mt-1">적산온도 누적</div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg border border-neutral-100 text-center">
                                        <Sprout className="w-8 h-8 mx-auto text-green-500 mb-2" />
                                        <div className="font-bold text-white">3. 과거 비교</div>
                                        <div className="text-xs text-neutral-cream/60 mt-1">작년 데이터 분석</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="technical"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-16"
                        >
                            <div className="prose prose-neutral max-w-none">
                                <h2>Yield Component Weighting Analysis</h2>
                                <p>
                                    수확량 예측 모델의 정확도를 높이기 위해 각 요소별 가중치를 할당합니다.
                                    Cluster Count(송이 수)가 가장 결정적(Critical)이며,
                                    그 다음으로 Berry Count(알 수), Weight(무게) 순으로 영향력을 가집니다.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-8 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-center">
                                    <div className="w-32 h-32 rounded-full border-8 border-yellow-400 flex items-center justify-center bg-white shadow-sm">
                                        <span className="text-2xl font-bold text-white">60%</span>
                                    </div>
                                    <div className="mt-3 font-bold text-white">Cluster Count</div>
                                </div>
                                <div className="text-2xl text-neutral-cream/40">&gt;</div>
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full border-4 border-blue-400 flex items-center justify-center bg-white shadow-sm">
                                        <span className="text-xl font-bold text-white">30%</span>
                                    </div>
                                    <div className="mt-3 font-bold text-white">Berry Count</div>
                                </div>
                                <div className="text-2xl text-neutral-cream/40">&gt;</div>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full border-2 border-neutral-400 flex items-center justify-center bg-white shadow-sm">
                                        <span className="text-lg font-bold text-white">10%</span>
                                    </div>
                                    <div className="mt-3 font-bold text-white">Weight</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-yellow-600" />
                                    Growing Degree Days (GDD) Calculation
                                </h3>
                                <div className="bg-neutral-900 p-6 rounded-lg text-white shadow-lg">
                                    <div className="flex justify-center mb-6">
                                        <code className="text-lg md:text-xl font-mono">
                                            {'$$ GDD = \\sum (\\frac{ T_{ max } + T_{ min }}{2} - T_{ base }) $$'}
                                        </code>
                                    </div>
                                    <ul className="space-y-2 text-sm text-neutral-cream/50 border-t border-neutral-800 pt-4">
                                        <li>{'$T_{ max }$: Daily Maximum Temperature'}</li>
                                        <li>{'$T_{ min }$: Daily Minimum Temperature'}</li>
                                        <li>{'T_base: Base Temperature (10°C for Grapes)'}</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                                    <CodeBlock
                                        language="python"
                                        filename="Yield_Model.py"
                                        code={`def calculate_accumulated_gdd(weather_data, t_base=10):
    total_gdd = 0
    for day in weather_data:
        avg_temp = (day.t_max + day.t_min) / 2
        gdd = avg_temp - t_base
        
        # GDD cannot be negative (no growth below base temp)
        if gdd < 0: 
            gdd = 0
            
        total_gdd += gdd
    return total_gdd

def estimate_harvest_date(current_gdd):
    TARGET_GDD = 1800 # Example for Shine Muscat
    return estimate_days_remaining(TARGET_GDD - current_gdd)`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <TechnologyBlogFooter />
            </Container>
        </main>
    );
}
