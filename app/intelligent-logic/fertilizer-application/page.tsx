'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, AlertOctagon, Scale, BookOpen, Sprout, BarChart, Dna, Zap } from 'lucide-react';
import { clsx } from 'clsx';

export default function FertilizerApplicationPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-green-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-green-600"></span>
                            FarmSense Logic Vol.3
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            비료_시비량
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed font-serif">
                            NPK 복합비료 조절이 생장, 수확량, 과실 품질 및 분자 수준 유전자 발현에 미치는 영향
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
                                    mode === 'technical' ? "bg-green-500/20 text-green-300 shadow-sm border border-white/10" : "text-neutral-cream/60 hover:text-white"
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
                            {/* Simple Content Wrapper */}
                            <div className="bg-green-500/10 border-l-4 border-green-500 p-8 rounded-xl">
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <FlaskConical className="text-green-400 w-8 h-8" />
                                    포도가 밥을 먹어야 할 때를 정확히 압니다
                                </h2>
                                <p className="text-lg text-neutral-cream/80 leading-relaxed font-light">
                                    사람도 성장기에는 단백질이 필요하고, 나이가 들면 비타민이 중요하듯 포도도 마찬가지입니다.
                                    FarmSense는 포도가 <strong>덩치를 키울 때(질소)</strong>와 <strong>맛을 들일 때(칼륨)</strong>를 정확히 구분하여 처방합니다.
                                    <br /><br />
                                    특히 토양에 염분(비료기)이 너무 많으면 자동으로 비료를 끊고 <strong>'물만 주기(맹물 관수)'</strong>를 실행해 뿌리를 보호합니다.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <div className="text-green-400 font-bold mb-2 text-lg">1. 덩치를 키울 때 (초기)</div>
                                    <div className="text-white text-3xl font-bold mb-1">30-10-10</div>
                                    <div className="text-sm text-neutral-cream/70">질소(N) 비율을 높여 잎과 줄기를 만듭니다.</div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <div className="text-purple-400 font-bold mb-2 text-lg">2. 맛을 들일 때 (후기)</div>
                                    <div className="text-white text-3xl font-bold mb-1">14-14-30</div>
                                    <div className="text-sm text-neutral-cream/70">칼륨(K) 비율을 높여 당도를 올립니다.</div>
                                </div>
                            </div>

                            {/* 영양 생장 & 수확량/품질 트레이드오프 */}
                            <div className="border border-white/10 rounded-xl p-6 bg-white">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Sprout className="w-5 h-5 text-green-400" />
                                    영양 생장과 수확량·품질의 균형
                                </h4>
                                <div className="space-y-4">
                                    <div className="bg-green-500/10 border-l-4 border-green-500 pl-4 rounded">
                                        <p className="text-sm text-neutral-cream/80">
                                            <strong>400 mg/L 고농도</strong> NPK(20:20:20) 처리 시 줄기 높이, 엽록소, 엽면적, 건조 중량이 유의미하게 증가합니다.
                                        </p>
                                    </div>
                                    <div className="bg-yellow-500/10 border-l-4 border-yellow-500 pl-4 rounded">
                                        <p className="text-sm text-neutral-cream/80">
                                            <strong>트레이드오프:</strong> 고질소 비료는 수확량을 늘리지만 당도·안토시아닌을 낮출 수 있습니다. 칼륨 비율이 높은 Nutrivant(14:14:30)는 수확량을 유지하면서 착색·품질을 개선합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 분자 메커니즘 요약 */}
                            <div className="border border-white/10 rounded-xl p-6 bg-white">
                                <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                                    <Dna className="w-5 h-5 text-blue-400" />
                                    분자 수준의 반응
                                </h4>
                                <p className="text-sm text-neutral-cream/70 mb-3">
                                    NPK 조성은 질소·칼륨·인 대사 유전자 발현을 조절합니다. 고질소(Peters 1)는 질산환원효소·글루타민합성효소를, 고칼륨(Nutrivant)은 칼륨 수송체와 안토시아닌 생합성 유전자(CHS, F3'H, UFGT 등)를 상향 조절합니다.
                                </p>
                            </div>

                            {/* 결론 및 제언 */}
                            <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg">
                                <h4 className="font-bold text-white mb-3">결론 및 제언</h4>
                                <ul className="space-y-2 text-sm text-neutral-cream/80">
                                    <li><strong>1.</strong> 목적에 따른 비료 선택: 수확량 증대 → 고질소 / 품질(색택·당도) → 칼륨 비율 상승 또는 특수 배합</li>
                                    <li><strong>2.</strong> 생육 단계별 조절: 영양 생장기와 생식 생장기에서 비율·농도 차별화</li>
                                    <li><strong>3.</strong> 정밀 농업: 유전자 발현·토양 분석을 활용한 시비 관리</li>
                                </ul>
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
                                <div className="border-l-4 border-green-600 pl-6 py-1">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        Stage-based NPK Balancing
                                    </h2>
                                    <p className="text-neutral-cream/70 leading-relaxed text-sm">
                                        포도나무의 생물 계절 단계(Phenological Stage, E-L System)에 따라 영양소 요구도가 달라집니다.
                                        논문에 따르면 표준 양액 농도는 <strong>400 mg/L</strong> (ppm)가 최적이며,
                                        토양 EC 피드백 루프를 통해 염류 집적을 방지해야 합니다.
                                    </p>
                                </div>

                                {/* Data Table */}
                                <div className="bg-white/5 border border-white/10 rounded-lg overflow-x-auto">
                                    <table className="w-full text-sm text-left text-neutral-cream/80 min-w-[600px]">
                                        <thead className="text-xs uppercase bg-white/10 text-neutral-cream/70">
                                            <tr>
                                                <th className="px-6 py-3">E-L Stage</th>
                                                <th className="px-6 py-3">Target Nutrient</th>
                                                <th className="px-6 py-3 text-white">Recommended NPK Ratio</th>
                                                <th className="px-6 py-3">Ref. Solution</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr className="hover:bg-white">
                                                <td className="px-6 py-4 font-medium text-white">L-29 (Fruit Set Start)</td>
                                                <td className="px-6 py-4">Vegetative Growth (Yield)</td>
                                                <td className="px-6 py-4 font-mono font-bold text-green-400">30 - 10 - 10</td>
                                                <td className="px-6 py-4">Peters 1 Type</td>
                                            </tr>
                                            <tr className="hover:bg-white">
                                                <td className="px-6 py-4 font-medium text-white">L-36 (Mid Veraison)</td>
                                                <td className="px-6 py-4">Sugar & Color Accumulation</td>
                                                <td className="px-6 py-4 font-mono font-bold text-purple-400">14 - 14 - 30</td>
                                                <td className="px-6 py-4">Nutrivant Type</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* 2. EC Safety Logic */}
                                <div className="bg-red-500/10 p-6 rounded-xl border border-red-300 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-red-200 px-3 py-1 text-xs text-red-800 font-bold rounded-bl-lg">FAILSAFE PROTOCOL</div>
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <AlertOctagon className="text-red-400 w-5 h-5" /> Safety Cut-off Threshold
                                    </h3>
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        <div className="text-center w-full md:w-auto">
                                            <div className="text-4xl font-bold text-white mb-1">3.0 <span className="text-lg text-neutral-cream/60">dS/m</span></div>
                                            <div className="text-xs text-neutral-cream/70">Max Soil EC Limit</div>
                                        </div>
                                        <div className="flex-1 text-sm text-neutral-cream/80 border-l border-white/15 pl-6 h-full flex items-center">
                                            <p>
                                                If soil electrical conductivity exceeds <strong>3.0 dS/m</strong>,
                                                the fertilizer injection is immediately halted. The system switches to
                                                <span className="text-blue-400 font-bold"> 'Water Only'</span> mode to induce leaching.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <CodeBlock
                                    language="python"
                                    filename="Nutrient_Controller.py"
                                    code={`def control_fertigation_cycle(soil_ec, current_stage):
    # Safety Threshold
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

                                {/* 3. 영양 생장·수확량·품질·분자 메커니즘 상세 */}
                                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-white mb-4">2. 영양 생장에 미치는 영향</h3>
                                    <p className="text-sm text-neutral-cream/70 mb-4">
                                        포도 묘목 실험에서 NPK(20:20:20) 400 mg/L 고농도 처리구에서 줄기 높이, 엽록소 농도, 엽면적, 건조 중량이 유의미하게 증가했습니다. 
                                        팔레놉시스 난초의 경우 19-6-20 (N-P-K) 비율이 엽면적·건조 중량을 가장 효과적으로 증가시켰으며, 인(P) 함량이 높은 20-20-20은 엽록소를 감소시키는 부작용이 보고되었습니다.
                                    </p>
                                    <h3 className="text-xl font-bold text-white mb-4 mt-6">3. 수확량과 품질의 트레이드오프</h3>
                                    <div className="space-y-3 text-sm text-neutral-cream/70">
                                        <p><strong>수확량 증대:</strong> Peters 1(30:10:10), Norway(21:7:12) 등 고질소 비료는 송이 무게·전체 수확량을 크게 증가시킵니다.</p>
                                        <p><strong>품질 저하:</strong> 고질소는 TSS(당도)를 낮추고 산도(TA)를 높이며, 껍질 안토시아닌을 감소시킬 수 있습니다.</p>
                                        <p><strong>품질 향상:</strong> Zhanlan(16:16:16), Garsoni(15:15:15)는 안토시아닌 합성을 촉진합니다. Nutrivant(14:14:30)는 수확량 유지와 안토시아닌 생합성 유전자 상향 조절을 동시에 달성합니다.</p>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 mt-6">4. 분자 메커니즘 및 유전자 발현</h3>
                                    <div className="space-y-3 text-sm text-neutral-cream/70">
                                        <p><strong>질소 대사:</strong> Peters 1(30:10:10)은 VvNR(질산환원효소), VvGS(글루타민합성효소) 유전자 발현을 잎·과피에서 증가시킵니다.</p>
                                        <p><strong>칼륨·안토시아닌:</strong> Nutrivant(14:14:30)는 HKT1, SIRK, SORK 등 칼륨 수송체와 CHS, F3'H, UFGT 등 안토시아닌 구조 유전자 발현을 상향 조절합니다.</p>
                                        <p><strong>인 대사:</strong> Peters 2(20:20:20)는 PHT1-4, PHT2-1 등 인 수송체 유전자 발현을 증가시킵니다.</p>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 mt-6">5. 다른 재배 요인과의 상호작용</h3>
                                    <p className="text-sm text-neutral-cream/70 mb-2">
                                        고농도 NPK(400 mg/L)와 지베렐린(GA3) 100 mg/L 엽면 살포를 함께 처리했을 때 줄기 신장·엽면적 증가 효과가 극대화되었습니다. 
                                        난초의 경우 생식 생장(개화) 단계에서는 비료 비율보다 광주기·광질(야간 조명 중단 등)이 더 결정적일 수 있습니다.
                                    </p>
                                </div>

                                {/* Evidence Card */}
                                <div className="flex items-start gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                                    <BookOpen className="w-5 h-5 text-neutral-cream/70 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Scientific Basis</h4>
                                        <ul className="text-xs text-neutral-cream/70 mt-2 space-y-1">
                                            <li>• <strong className="text-white/90">Concentration Source:</strong> <em>포도 재배를 위한 정밀 시비 알고리즘.pdf</em> Table 2 (400 mg/L efficacy)</li>
                                            <li>• <strong className="text-white/90">EC Limit Source:</strong> Background Soil Analysis Data (3.05 dS/m noted as high salinity)</li>
                                            <li>• Research: 비료 사용 조절에 관한 딥리서치 (생장, 품질, 분자 메커니즘 통합 분석)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </main>
    );
}
