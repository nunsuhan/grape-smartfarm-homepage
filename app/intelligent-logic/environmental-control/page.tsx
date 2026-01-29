'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, Thermometer, Droplets, Sun, Wind, BookOpen } from 'lucide-react';
import { clsx } from 'clsx';

export default function EnvironmentalControlPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-3xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-indigo-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                            FarmSense Logic Vol.6
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            환경제어_센서
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            온도, 습도, 조도 등 환경 센서 기반 제어 로직 및 최적 생육 환경 유지
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
                                    mode === 'technical' ? "bg-white text-indigo-600 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
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
                            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm">
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                                    <Gauge className="text-indigo-600 w-8 h-8" />
                                    포도가 가장 잘 자라는 환경을 자동으로 만들어줍니다
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                                    온도, 습도, 조도(빛), 환기 등 모든 환경 요소를 센서로 측정하고,
                                    포도가 가장 잘 자라는 조건을 자동으로 유지합니다.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Thermometer className="w-6 h-6 text-indigo-600" />
                                            <h3 className="font-bold text-neutral-900">온도 제어</h3>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            낮에는 25-28°C, 밤에는 15-18°C를 유지하여 일교차를 최적화합니다.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Droplets className="w-6 h-6 text-blue-600" />
                                            <h3 className="font-bold text-neutral-900">습도 제어</h3>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            생육 단계별로 60-80% 범위를 유지하여 병해충 발생을 방지합니다.
                                        </p>
                                    </div>
                                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Sun className="w-6 h-6 text-yellow-600" />
                                            <h3 className="font-bold text-neutral-900">조도 제어</h3>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            일일 누적 광량을 계산하여 보광이 필요한 시기를 판단합니다.
                                        </p>
                                    </div>
                                    <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Wind className="w-6 h-6 text-green-600" />
                                            <h3 className="font-bold text-neutral-900">환기 제어</h3>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            환기팬과 천창을 자동으로 조절하여 온도와 습도를 최적화합니다.
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
                            <div className="prose prose-neutral max-w-none">
                                <h2>Environmental Control Algorithm</h2>
                                <p>
                                    다중 센서 데이터를 통합하여 최적 생육 환경을 유지하는 제어 로직입니다.
                                    각 환경 요소의 임계값과 제어 알고리즘을 명시합니다.
                                </p>
                            </div>

                            {/* Temperature Control */}
                            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <Thermometer className="w-5 h-5 text-indigo-600" />
                                    Temperature Control Logic
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                                        <div className="text-xs font-bold text-neutral-500 uppercase mb-2">Daytime Target</div>
                                        <div className="text-2xl font-bold text-neutral-900">25-28°C</div>
                                        <div className="text-xs text-neutral-500 mt-1">Optimal for photosynthesis</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-neutral-200">
                                        <div className="text-xs font-bold text-neutral-500 uppercase mb-2">Nighttime Target</div>
                                        <div className="text-2xl font-bold text-neutral-900">15-18°C</div>
                                        <div className="text-xs text-neutral-500 mt-1">Respiration reduction</div>
                                    </div>
                                </div>
                            </div>

                            {/* Humidity Control */}
                            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <Droplets className="w-5 h-5 text-blue-600" />
                                    Humidity Control Logic
                                </h3>
                                <div className="bg-white p-4 rounded-lg border border-neutral-200">
                                    <div className="text-xs font-bold text-neutral-500 uppercase mb-2">Target Range</div>
                                    <div className="text-2xl font-bold text-neutral-900">60-80% RH</div>
                                    <div className="text-xs text-neutral-500 mt-1">Disease prevention threshold</div>
                                </div>
                            </div>

                            {/* Light Control */}
                            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2">
                                    <Sun className="w-5 h-5 text-yellow-600" />
                                    Light Control Logic
                                </h3>
                                <div className="bg-white p-4 rounded-lg border border-neutral-200 mb-4">
                                    <div className="text-xs font-bold text-neutral-500 uppercase mb-2">Daily Light Integral (DLI)</div>
                                    <div className="text-2xl font-bold text-neutral-900">12-16 mol/m²/day</div>
                                    <div className="text-xs text-neutral-500 mt-1">Optimal for grape growth</div>
                                </div>
                                <CodeBlock
                                    language="python"
                                    filename="Light_Control.py"
                                    code={`def calculate_dli(light_sensor_data):
    """
    Calculate Daily Light Integral from sensor readings
    """
    total_light = 0
    for reading in light_sensor_data:
        # Convert lux to mol/m² (approximate conversion)
        mol_per_m2 = reading.lux * 0.0000185
        total_light += mol_per_m2
    
    return total_light

def check_supplemental_light_needed(current_dli, target_dli=14):
    if current_dli < target_dli * 0.8:
        return {
            "action": "ENABLE_SUPPLEMENTAL",
            "deficit": target_dli - current_dli
        }
    return {"action": "SUFFICIENT"}`}
                                />
                            </div>

                            {/* Reference */}
                            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                                <h4 className="flex items-center gap-2 font-bold text-neutral-900 mb-2">
                                    <BookOpen className="w-4 h-4" /> Reference
                                </h4>
                                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                                    <li>Source: <em>스마트 정밀 관개 및 생육 환경 제어 로직 분석.pdf</em></li>
                                    <li>포도 재배 적지 분석 및 생육 단계별 정밀 관리 가이드.pdf</li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </main>
    );
}
