'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, Thermometer, Droplets, ShieldCheck, PlayCircle, BookOpen, AlertCircle } from 'lucide-react';
import { clsx } from 'clsx';
import Link from 'next/link';
import { TechnologyBlogFooter } from '@/components/technology-blog-footer';

export default function DiseaseLogicPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-3xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-red-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span>
                            FarmSense Logic Vol.3
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            병해충 및 방제 타이밍 로직
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            병원균 생존 임계값 기반의 방제 의사결정 (Natural Suppression Model)
                        </p>

                        {/* Mode Toggle */}
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
                                    mode === 'technical' ? "bg-white text-red-600 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
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
                            {/* Simple Content */}
                            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1 space-y-4">
                                    <h2 className="text-2xl font-bold text-neutral-900 flex items-center gap-3">
                                        <Bug className="text-red-500 w-8 h-8" />
                                        "약을 칠까 말까?" 고민 끝!
                                    </h2>
                                    <p className="text-lg text-neutral-600 leading-relaxed">
                                        비 온다고 무조건 약을 치지 마세요. FarmSense는 <strong>'병원균이 살 수 있는 날씨인가?'</strong>를 먼저 계산합니다.
                                        <br /><br />
                                        예를 들어, <strong>흰가루병</strong>은 너무 더우면(35°C) 스스로 죽습니다. 이때는 약을 칠 필요가 없죠.
                                    </p>
                                    <Link href="/technology/ai-diagnosis" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline mt-2">
                                        AI 병해충 진단 기술 더 보기 &rarr;
                                    </Link>
                                </div>

                                <div className="w-full md:w-80 bg-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-inner">
                                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 text-center">방제 알림 시뮬레이션</div>
                                    <div className="space-y-3">
                                        <div className="bg-white p-3 rounded-lg border border-neutral-100 flex items-center justify-between shadow-sm">
                                            <span className="text-sm font-medium text-neutral-600">현재 상태</span>
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">안전</span>
                                        </div>
                                        <div className="bg-white p-3 rounded-lg border border-red-100 ring-1 ring-red-100 flex items-center justify-between shadow-sm">
                                            <span className="text-sm font-medium text-neutral-600">내일 예측</span>
                                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full font-bold animate-pulse">노균병 위험!</span>
                                        </div>
                                        <div className="text-[11px] text-neutral-400 text-center pt-2">
                                            근거: 온도 18°C + 습도 95% 지속
                                        </div>
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
                                <h2>Pathogen Survival Thresholds</h2>
                                <p>
                                    단순 기상 예보가 아닌, 병원균(Fungi)의 포자 형성 및 발아 조건을 정밀하게 모델링합니다.
                                    아래 데이터는 <strong>Archivist</strong>가 원문(통합해충관리...알고리즘.pdf)에서 추출한 무손실 임계값입니다.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Downy Mildew */}
                                <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
                                        <Droplets className="w-5 h-5" /> 1. 노균병 (Downy Mildew)
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                            <div className="text-xs font-bold text-neutral-400 uppercase mb-1">Temperature Window</div>
                                            <div className="text-2xl font-bold text-neutral-900">14.9 ~ 20.3°C</div>
                                            <div className="text-xs text-blue-600 mt-1">Optimum range for sporulation</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                                            <div className="text-xs font-bold text-neutral-400 uppercase mb-1">Humidity</div>
                                            <div className="text-2xl font-bold text-neutral-900">RH $\ge$ 95%</div>
                                            <div className="text-xs text-blue-600 mt-1">Duration: &ge; 4 hours (Night)</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Powdery Mildew */}
                                <div className="border border-red-200 bg-red-50/50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <Thermometer className="w-5 h-5" /> 2. 흰가루병 (Powdery Mildew)
                                    </h3>
                                    <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm mb-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm font-bold text-neutral-700">Natural Suppression</div>
                                            <div className="text-2xl font-bold text-red-600">35°C</div>
                                        </div>
                                        <div className="text-xs text-neutral-500 mt-1">High temp inhibits fungal growth</div>
                                    </div>
                                    <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg border border-neutral-800">
                                        <CodeBlock
                                            language="python"
                                            filename=""
                                            code={`def natural_suppression(temp_history):
    # If temp >= 35°C for 15+ mins
    high_temp_duration = 0
    for t in temp_history:
        if t >= 35.0:
            high_temp_duration += 1
            
    if high_temp_duration >= 15:
        return "RISK_DECREASING"
    return "RISK_MONITORING"`}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                                <h4 className="flex items-center gap-2 font-bold text-neutral-900 mb-4">
                                    <PlayCircle className="w-4 h-4" /> Validated Evidence
                                </h4>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li className="flex gap-2">
                                        <span className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">01:28</span>
                                        <span>95% 습도 환경에서의 노균병 포자 발아 실제 관찰</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-mono text-xs bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-700">03:45</span>
                                        <span>35도 고온 챔버에서의 흰가루병균 사멸 실험</span>
                                    </li>
                                </ul>
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>

                <TechnologyBlogFooter />
            </Container>
        </main>
    );
}
