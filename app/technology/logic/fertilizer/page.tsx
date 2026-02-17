'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, AlertOctagon, Scale, BookOpen, PlayCircle, Menu } from 'lucide-react';
import { clsx } from 'clsx';

export default function FertilizerLogicPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-neutral-900 pt-20">
            {/* Header Section */}
            <Section className="py-20 bg-neutral-900 border-b border-white/10">
                <Container className="max-w-5xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <span className="text-secondary-gold font-medium tracking-wider text-sm uppercase">FarmSense Logic Vol.2</span>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">
                                비료 및 양분 정밀 처방 로직
                            </h1>
                            <p className="text-neutral-400 mt-2 text-lg">
                                생육 단계(E-L Stage)별 NPK 밸런싱 및 EC 피드백 제어
                            </p>
                        </div>

                        <div className="bg-white/10 p-1 rounded-lg flex items-center self-start md:self-auto shrink-0">
                            <button
                                onClick={() => setMode('simple')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                                    mode === 'simple' ? "bg-secondary-gold text-black shadow-lg" : "text-neutral-400 hover:text-white"
                                )}
                            >
                                <BookOpen className="w-4 h-4" /> 농민용 (요약)
                            </button>
                            <button
                                onClick={() => setMode('technical')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                                    mode === 'technical' ? "bg-secondary-gold text-black shadow-lg" : "text-neutral-400 hover:text-white"
                                )}
                            >
                                <Scale className="w-4 h-4" /> 전문가용 (상세)
                            </button>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="py-12">
                <Container className="max-w-5xl">
                    <AnimatePresence mode="wait">
                        {mode === 'simple' ? (
                            <motion.div
                                key="simple"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-12"
                            >
                                {/* Simple Content Wrapper */}
                                <div className="bg-neutral-black border border-white/10 p-8 rounded-2xl shadow-xl border-l-[6px] border-l-green-500">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <FlaskConical className="text-green-400 w-8 h-8" />
                                        포도가 밥을 먹어야 할 때를 정확히 압니다
                                    </h2>
                                    <p className="text-lg text-neutral-300 leading-relaxed font-light">
                                        사람도 성장기에는 단백질이 필요하고, 나이가 들면 비타민이 중요하듯 포도도 마찬가지입니다.
                                        FarmSense는 포도가 <strong>덩치를 키울 때(질소)</strong>와 <strong>맛을 들일 때(칼륨)</strong>를 정확히 구분하여 처방합니다.
                                        <br /><br />
                                        특히 토양에 염분(비료기)이 너무 많으면 자동으로 비료를 끊고 <strong>'물만 주기(맹물 관수)'</strong>를 실행해 뿌리를 보호합니다.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                        <div className="text-green-400 font-bold mb-2 text-lg">1. 덩치를 키울 때 (초기)</div>
                                        <div className="text-white text-3xl font-bold mb-1">30-10-10</div>
                                        <div className="text-sm text-neutral-400">질소(N) 비율을 높여 잎과 줄기를 만듭니다.</div>
                                    </div>
                                    <div className="bg-white/10 p-6 rounded-xl border border-white/10">
                                        <div className="text-purple-400 font-bold mb-2 text-lg">2. 맛을 들일 때 (후기)</div>
                                        <div className="text-white text-3xl font-bold mb-1">14-14-30</div>
                                        <div className="text-sm text-neutral-400">칼륨(K) 비율을 높여 당도를 올립니다.</div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="technical"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="space-y-12"
                            >
                                <div className="space-y-8">
                                    {/* 1. Precision Nutrient Logic */}
                                    <div className="border-l-4 border-secondary-gold pl-6 py-1">
                                        <h2 className="text-2xl font-bold text-white mb-2">
                                            Stage-based NPK Balancing
                                        </h2>
                                        <p className="text-neutral-300 leading-relaxed text-sm">
                                            포도나무의 생물 계절 단계(Phenological Stage, E-L System)에 따라 영양소 요구도가 달라집니다.
                                            Source 1 논문에 따르면 표준 양액 농도는 <strong>400 mg/L</strong> (ppm)가 최적이며,
                                            토양 EC 피드백 루프를 통해 염류 집적을 방지해야 합니다.
                                        </p>
                                    </div>

                                    {/* Data Table with Horizontal Scroll for Mobile */}
                                    <div className="bg-neutral-black border border-white/10 rounded-lg overflow-x-auto">
                                        <table className="w-full text-sm text-left text-neutral-300 min-w-[600px]">
                                            <thead className="text-xs uppercase bg-neutral-black text-neutral-500">
                                                <tr>
                                                    <th className="px-6 py-3">E-L Stage</th>
                                                    <th className="px-6 py-3">Target Nutrient</th>
                                                    <th className="px-6 py-3 text-white">Recommended NPK Ratio</th>
                                                    <th className="px-6 py-3">Ref. Solution</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                <tr className="hover:bg-white/5">
                                                    <td className="px-6 py-4 font-medium text-white">L-29 (Fruit Set Start)</td>
                                                    <td className="px-6 py-4">Vegetative Growth (Yield)</td>
                                                    <td className="px-6 py-4 font-mono font-bold text-green-400">30 - 10 - 10</td>
                                                    <td className="px-6 py-4">Peters 1 Type</td>
                                                </tr>
                                                <tr className="hover:bg-white/5">
                                                    <td className="px-6 py-4 font-medium text-white">L-36 (Mid Veraison)</td>
                                                    <td className="px-6 py-4">Sugar & Color Accumulation</td>
                                                    <td className="px-6 py-4 font-mono font-bold text-purple-400">14 - 14 - 30</td>
                                                    <td className="px-6 py-4">Nutrivant Type</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 2. EC Safety Logic */}
                                    <div className="bg-neutral-black p-6 rounded-xl border border-red-500/30 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-red-500/20 px-3 py-1 text-xs text-red-400 font-bold rounded-bl-lg">FAILSAFE PROTOCOL</div>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <AlertOctagon className="text-red-400 w-5 h-5" /> Safety Cut-off Threshold
                                        </h3>
                                        <div className="flex flex-col md:flex-row gap-6 items-center">
                                            <div className="text-center w-full md:w-auto">
                                                <div className="text-4xl font-bold text-white mb-1">3.0 <span className="text-lg text-neutral-500">dS/m</span></div>
                                                <div className="text-xs text-neutral-400">Max Soil EC Limit</div>
                                            </div>
                                            <div className="flex-1 text-sm text-neutral-300 border-l border-white/10 pl-6 h-full flex items-center">
                                                <p>
                                                    If soil electrical conductivity exceeds <strong>3.0 dS/m</strong>,
                                                    the fertilizer injection is immediately halted. The system switches to
                                                    <span className="text-blue-400 font-bold"> 'Water Only'</span> mode to induce leaching based on Source 1 background data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <CodeBlock
                                        language="python"
                                        filename="Nutrient_Controller.py"
                                        code={`def control_fertigation_cycle(soil_ec, current_stage):
    # Safety Threshold (Source 1)
    # Background EC was 3.05 dS/m, so we set cut-off at 3.0
    
    if soil_ec >= 3.0:
        return {
            "mode": "WATER_ONLY",
            "reason": "SALT_ACCUMULATION_RISK"
        }
        
    # Standard Concentration
    target_ppm = 400 # mg/L
    
    # Ratio Selection
    ratio = "20-20-20"
    if current_stage == "FRUIT_SET":
        ratio = "30-10-10" # High Nitrogen
    elif current_stage == "VERAISON":
        ratio = "14-14-30" # High Potassium
        
    return {
        "mode": "FERTIGATION",
        "ratio": ratio,
        "concentration": f"{target_ppm} mg/L"
    }`}
                                    />

                                    {/* Evidence Card */}
                                    <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                                        <BookOpen className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold text-sm">Scientific Basis</h4>
                                            <ul className="text-xs text-neutral-400 mt-2 space-y-1">
                                                <li>• <strong className="text-neutral-300">Concentration Source:</strong> <em>포도 재배를 위한 정밀 시비 알고리즘.pdf</em> Table 2 (400 mg/L efficacy)</li>
                                                <li>• <strong className="text-neutral-300">EC Limit Source:</strong> Background Soil Analysis Data (3.05 dS/m noted as high salinity)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </Section>
        </main>
    );
}
