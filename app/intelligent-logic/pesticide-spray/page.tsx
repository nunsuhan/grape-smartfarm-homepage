'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, Thermometer, Droplets, ShieldCheck, BookOpen, AlertCircle, Leaf, Wind, Sun } from 'lucide-react';
import { clsx } from 'clsx';

export default function PesticideSprayPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-3xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-red-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-red-600"></span>
                            FarmSense Logic Vol.2
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            병해충관리
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            IPM 기반 병원균 임계값·기후 대응 질병관리 및 생리 장해 완화
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

                            {/* IPM 개요 */}
                            <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                                    <ShieldCheck className="text-red-500 w-6 h-6" />
                                    통합 병해충 관리(IPM)란?
                                </h3>
                                <p className="text-neutral-700 leading-relaxed mb-4">
                                    농약만 의존하지 않고 <strong>예방·모니터링·경제적 피해 수준(ET)</strong>을 먼저 보고, 필요할 때만 화학 방제를 쓰는 방식입니다.
                                    FarmSense는 포자 발아 조건(온도·습도·강수)을 계산해 &quot;오늘은 약을 칠 필요 없다&quot;를 먼저 알려줍니다.
                                </p>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li className="flex gap-2"><span className="text-red-500 font-bold">1.</span> 예방: 재배 환경·품종·관리로 발병 위험 낮추기</li>
                                    <li className="flex gap-2"><span className="text-red-500 font-bold">2.</span> 모니터링: 병원균 생존 임계값 기반 위험일 산출</li>
                                    <li className="flex gap-2"><span className="text-red-500 font-bold">3.</span> 방제: 생물·물리·화학 방제를 단계별로 조합</li>
                                </ul>
                            </div>

                            {/* 기후 변화와 질병 관리 */}
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
                                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    기후 변화에 대응하는 포도 질병 관리
                                </h4>
                                <p className="text-neutral-700 leading-relaxed text-sm">
                                    기온·습도 변화로 병원균 분포와 발생 시기가 달라집니다. FarmSense는 <strong>기상 데이터와 병원균 임계값</strong>을 결합해 위험일을 예측하고, 
                                    품종 선택·환기·관수·시비와 연동해 질병 발생을 줄이는 관리안을 제안합니다.
                                </p>
                            </div>

                            {/* 생리 장해 완화 */}
                            <div className="border border-neutral-200 rounded-xl p-6 bg-white">
                                <h4 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                                    <Leaf className="w-5 h-5 text-green-600" />
                                    생리 장해 완화
                                </h4>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    병원균이 아닌 <strong>일소과, 동해, 물·영양 스트레스</strong> 등 생리적 원인도 수확량·품질을 해칩니다. 
                                    FarmSense는 관수·비료·캐노피 관리 로직과 연동해 과다 일사·동결·스트레스를 완화하는 관리 시점을 안내합니다.
                                </p>
                            </div>

                            {/* 결론 및 제언 */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                                <h4 className="font-bold text-neutral-900 mb-3">결론 및 제언</h4>
                                <ul className="space-y-2 text-sm text-neutral-700">
                                    <li><strong>1.</strong> IPM: 예방·모니터링 우선, 경제적 피해 수준 초과 시에만 선택적 방제</li>
                                    <li><strong>2.</strong> 병원균 임계값: 노균병·흰가루병 등 온도·습도 조건 기반 위험일 산출</li>
                                    <li><strong>3.</strong> 기후 대응: 품종·환경 관리·예측 모델로 질병·생리 장해 완화</li>
                                </ul>
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
                                <h2>IPM & Pathogen Survival Thresholds</h2>
                                <p>
                                    통합 병해충 관리(IPM)와 병원균(Fungi) 포자 형성·발아 조건을 정밀 모델링합니다.
                                    아래 데이터는 원문(통합해충관리·알고리즘 및 기후 대응 질병관리 자료)에서 추출한 임계값입니다.
                                </p>
                            </div>

                            {/* IPM Framework */}
                            <div className="border-l-4 border-red-600 pl-6 py-1">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">IPM Framework</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                    예방(Prevention) → 모니터링(Monitoring) → 경제적 피해 수준(ET) 판단 → 생물·물리·화학 방제 조합.
                                    FarmSense는 환경·기상 데이터와 병원균 임계값을 결합해 ET 도달 전 위험일을 산출합니다.
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
                                            <div className="text-2xl font-bold text-neutral-900">RH ≥ 95%</div>
                                            <div className="text-xs text-blue-600 mt-1">Duration: ≥ 4 hours (Night)</div>
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

                            {/* 기후 변화 대응 질병 관리 */}
                            <div className="border-l-4 border-amber-500 pl-6 py-1">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-amber-600" /> 기후 변화 대응 질병 관리
                                </h3>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                                    기온·습도·강수 패턴 변화에 따라 병원균 분포·발생 시기가 이동합니다. 예측 모델은 기상 데이터와 병원균 임계값을 결합해 위험일을 산출하고,
                                    품종·환기·관수·시비와 연동해 질병 발생을 줄이는 관리안을 제안합니다.
                                </p>
                            </div>

                            {/* 생리 장해 완화 */}
                            <div className="border-l-4 border-green-500 pl-6 py-1">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                                    <Sun className="w-5 h-5 text-green-600" /> 생리 장해 완화
                                </h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    일소과, 동해, 물·영양 스트레스 등 비병원성 장해는 관수·비료·캐노피 관리 로직과 연동해 완화합니다.
                                    FarmSense는 관수_물관리·비료_시비량·환경제어_센서 로직과 연계해 과다 일사·동결·스트레스 시점을 안내합니다.
                                </p>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                                <h4 className="flex items-center gap-2 font-bold text-neutral-900 mb-4">
                                    <BookOpen className="w-4 h-4" /> Validated Evidence
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
            </Container>
        </main>
    );
}
