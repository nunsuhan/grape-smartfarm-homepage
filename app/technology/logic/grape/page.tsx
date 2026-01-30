'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion, AnimatePresence } from 'framer-motion';
import { Grape, Scissors, Palette, AreaChart, BookOpen, PlayCircle, Video } from 'lucide-react';
import { clsx } from 'clsx';
import { TechnologyBlogFooter } from '@/components/technology-blog-footer';

export default function GrapeLogicPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-3xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-purple-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            FarmSense Logic Vol.5
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            포도 전문 재배 기술
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            안토시아닌(색소) 합성 최적화 및 Soft Sensor 성장 분석을 통한 최고급 포도 생산
                        </p>

                        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg w-fit">
                            <button
                                onClick={() => setMode('simple')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                    mode === 'simple' ? "bg-white text-neutral-900 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
                                )}
                            >
                                요약 (Farmers)
                            </button>
                            <button
                                onClick={() => setMode('technical')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                    mode === 'technical' ? "bg-white text-purple-600 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
                                )}
                            >
                                상세 (Engineers)
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="max-w-3xl py-12">
                <AnimatePresence mode="wait">
                    {mode === 'simple' ? (
                        <motion.div
                            key="simple"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-12"
                        >
                            {/* Simple Wrapper */}
                            <div className="prose prose-lg prose-neutral max-w-none">
                                <h3 className="flex items-center gap-3 text-2xl font-bold text-neutral-900 mb-6">
                                    <Grape className="text-purple-600 w-8 h-8" />
                                    가장 '포도답게' 만드는 비법
                                </h3>
                                <p className="text-neutral-600 leading-8">
                                    포도 색깔이 예쁘게 들려면 온도가 중요합니다.
                                    FarmSense는 포도가 색소를 가장 잘 만드는 <strong>'골든 타임 온도(약 26도)'</strong>를 유지하도록 환기팬을 조절합니다.
                                    또한, 잎을 굳이 따지 않아도 사진만으로 잎의 건강 상태(엽록소)를 분석합니다.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-white p-2 rounded-lg border border-neutral-200"><Scissors className="w-5 h-5 text-neutral-700" /></div>
                                        <div className="font-bold text-lg text-neutral-900">표준 전정 기술</div>
                                    </div>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between items-center text-sm border-b border-neutral-200 pb-2">
                                            <span className="text-neutral-600">평덕 식재형</span>
                                            <span className="font-bold text-neutral-900">빛 투과율 우수</span>
                                        </li>
                                        <li className="flex justify-between items-center text-sm border-b border-neutral-200 pb-2">
                                            <span className="text-neutral-600">웨이크만형</span>
                                            <span className="font-bold text-neutral-900">작업 효율 높음</span>
                                        </li>
                                        <li className="flex justify-between items-center text-sm">
                                            <span className="text-neutral-600">H자형 개량</span>
                                            <span className="font-bold text-neutral-900">기계화 유리</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Palette className="w-24 h-24 text-purple-900" />
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-white p-2 rounded-lg border border-purple-100"><Palette className="w-5 h-5 text-purple-600" /></div>
                                        <div className="font-bold text-lg text-neutral-900">착색 관리 핵심</div>
                                    </div>
                                    <div className="prose prose-sm text-neutral-600">
                                        <div className="text-4xl font-extrabold text-purple-700 mb-2">26°C</div>
                                        <p className="leading-snug">
                                            이 온도에서 안토시아닌(보라색)이 가장 폭발적으로 생성됩니다. <strong className="text-red-500">35도</strong>가 넘으면 생성을 멈춥니다.
                                        </p>
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
                            <div className="space-y-8">
                                <div className="prose prose-neutral max-w-none">
                                    <h2>Temperature Impact on Anthocyanin Synthesis</h2>
                                    <p>
                                        단순 기상 예보가 아닌, 병원균(Fungi)의 포자 형성 및 발아 조건을 정밀하게 모델링합니다.
                                        아래 데이터는 <strong>Archivist</strong>가 원문에서 추출한 무손실 임계값입니다.
                                    </p>
                                </div>

                                <div className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-lg font-bold text-purple-700 flex items-center gap-2">
                                            <AreaChart className="w-5 h-5" /> Anthocyanin Biosynthesis Rate
                                        </h3>
                                        <span className="text-xs font-mono text-neutral-400 bg-neutral-100 px-2 py-1 rounded">Fig 1. Temperature Dependency</span>
                                    </div>

                                    <div className="relative h-64 w-full bg-neutral-50 rounded-lg border border-neutral-100 mb-4 overflow-hidden">
                                        {/* Chart Placeholder Logic */}
                                        <div className="absolute inset-x-0 bottom-0 top-0 flex items-end px-12 pb-8">
                                            {/* Curve approx */}
                                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                <path d="M0,100 C20,100 30,10 50,5 C60,5 70,80 100,100" fill="none" stroke="#9333ea" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                                {/* Optimal Zone */}
                                                <rect x="40" y="0" width="20" height="100" fill="rgba(147, 51, 234, 0.1)" />
                                            </svg>
                                        </div>

                                        {/* Labels */}
                                        <div className="absolute bottom-2 left-4 text-xs font-mono text-neutral-400">10°C (Min)</div>
                                        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-700 bg-white px-2 py-0.5 rounded shadow-sm border border-purple-100">26°C (Optimum)</div>
                                        <div className="absolute bottom-2 right-4 text-xs font-mono text-red-500">35°C (Max)</div>
                                    </div>
                                </div>

                                {/* Soft Sensor Logic */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50">
                                        <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                            LAI Estimation
                                        </h3>
                                        <div className="text-xs text-neutral-500 mb-2">Based on NDVI (Normalized Difference Vegetation Index)</div>
                                        <div className="bg-white p-4 rounded-lg border border-neutral-200 font-mono text-center text-lg text-neutral-800 shadow-inner">
                                            $$ y = 4.62x - 1.22 $$
                                        </div>
                                    </div>
                                    <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50">
                                        <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            SPAD (Chlorophyll)
                                        </h3>
                                        <div className="text-xs text-neutral-500 mb-2">Based on RGB Image Analysis</div>
                                        <div className="bg-white p-4 rounded-lg border border-neutral-200 font-mono text-center text-lg text-neutral-800 shadow-inner">
                                            $$ y = 0.002x^2 + 0.051 $$
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-3 rounded-full shadow-sm border border-neutral-200">
                                            <Video className="w-6 h-6 text-neutral-700" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-neutral-900">Mapped Evidence</h4>
                                            <p className="text-xs text-neutral-500">완벽한_포도의_비밀을_풀다.mp4</p>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-sm text-neutral-600 space-y-1 border-l border-neutral-200 pl-6">
                                        <p><strong className="text-purple-700">[05:12]</strong> 안토시아닌 합성과 온도 제어 챔버 실험</p>
                                        <p><strong className="text-green-700">[08:30]</strong> 비파괴 엽면적(LAI) 측정 시연</p>
                                    </div>
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
