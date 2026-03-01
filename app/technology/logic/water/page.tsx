'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, ArrowRight, Gauge, Activity, BookOpen, PlayCircle, Download } from 'lucide-react';
import { clsx } from 'clsx';
import { TechnologyBlogFooter } from '@/components/technology-blog-footer';

export default function WaterLogicPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Header */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            FarmSense Logic Vol.1
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            관수 및 물관리 정밀 로직:<br />
                            <span className="text-neutral-cream/60">토양 수분 퍼텐셜의 이해</span>
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed font-serif">
                            {'토양 수분 퍼텐셜(Ψ-soil)을 기반으로 한 정밀 관개 제어는 물 부족 국가에서 작물 생산성을 극대화하는 핵심 기술입니다.'}
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
                                    mode === 'technical' ? "bg-blue-500/20 text-blue-300 shadow-sm border border-white/10" : "text-neutral-cream/60 hover:text-white"
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
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-12"
                        >
                            {/* Simple Content */}
                            <section className="prose prose-lg prose-neutral max-w-none">
                                <h3 className="flex items-center gap-3 text-2xl font-bold text-white mb-6">
                                    <Droplets className="text-blue-400 w-8 h-8" />
                                    포도가 목마른 순간을 정확히 잡습니다
                                </h3>
                                <p className="text-neutral-cream/70 leading-8">
                                    기존의 스마트팜은 단순히 '오후 2시에 물 주기' 식이었다면,
                                    FarmSense는 <strong>'토양 수분 장력(힘)'</strong>을 측정합니다.
                                    포도알이 커지는 시기(비대기)와 익어가는 시기(성숙기)에 따라 물을 주는 기준이 달라야 당도가 높아집니다.
                                </p>
                            </section>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                                    <h4 className="font-bold text-white mb-4 flex items-center justify-between">
                                        생육 단계별 물 주기 기준
                                        <span className="text-xs font-normal text-neutral-cream/60 bg-white/5 border border-white/10 px-2 py-1 rounded-full">Source: 스마트 정밀 관개 로직 분석.pdf</span>
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-neutral-100 shadow-sm">
                                            <div>
                                                <div className="text-xs text-neutral-cream/60 font-bold uppercase tracking-wider mb-1">Step 1. 착립기</div>
                                                <div className="text-neutral-cream/70">알이 맺힐 때는 토양을 촉촉하게</div>
                                            </div>
                                            <div className="text-2xl font-bold text-blue-400">-10 <span className="text-sm text-neutral-cream/50">kPa</span></div>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-lg border border-blue-100 shadow-sm ring-1 ring-blue-500/20">
                                            <div>
                                                <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Step 2. 비대기 (핵심)</div>
                                                <div className="text-neutral-cream/80 font-medium">물을 가장 많이 먹고 쑥쑥 크는 시기</div>
                                            </div>
                                            <div className="text-2xl font-bold text-blue-400">-15 <span className="text-sm text-blue-400">kPa</span></div>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-neutral-100 shadow-sm">
                                            <div>
                                                <div className="text-xs text-neutral-cream/60 font-bold uppercase tracking-wider mb-1">Step 3. 성숙기</div>
                                                <div className="text-neutral-cream/70">약간 마르게 관리하여 당도 축적 유도</div>
                                            </div>
                                            <div className="text-2xl font-bold text-purple-400">-20 <span className="text-sm text-neutral-cream/50">kPa</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ) : (
                        <motion.div
                            key="technical"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-16"
                        >
                            <div className="prose prose-neutral max-w-none">
                                <h2>{'Soil Water Potential (Ψ-soil) Algorithm'}</h2>
                                <p>
                                    공기 중 VPD(수증기압 포차) 지표보다 작물의 실제 수분 스트레스를 더 직접적으로 반영하는
                                    <strong>{'토양 수분 퍼텐셜(Ψ-soil, kPa)'}</strong>을 트리거 변수로 사용합니다.
                                    이는 과일 비대율(Fruit Growth Rate)과 순광합성률($P_n$) 최적화에 기여합니다.
                                </p>
                            </div>

                            <div className="my-8 overflow-hidden border border-white/10 rounded-lg shadow-sm">
                                <table className="min-w-full divide-y divide-white/10">
                                    <thead className="bg-white/5">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-cream/60 uppercase tracking-wider">Stage</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-cream/60 uppercase tracking-wider">Diameter</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Threshold (Ψ)</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-cream/60 uppercase tracking-wider">Target</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white/5 divide-y divide-white/10 text-sm">
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-white">Early Growth</td>
                                            <td className="px-6 py-4 text-neutral-cream/60">&lt; 10mm</td>
                                            <td className="px-6 py-4 text-blue-400 font-mono font-bold">-10 kPa</td>
                                            <td className="px-6 py-4 text-neutral-cream/60">Initial Cell Division</td>
                                        </tr>
                                        <tr className="bg-blue-500/10">
                                            <td className="px-6 py-4 font-medium text-white">Rapid Growth</td>
                                            <td className="px-6 py-4 text-neutral-cream/60">10-20mm</td>
                                            <td className="px-6 py-4 text-blue-400 font-mono font-bold">-15 kPa</td>
                                            <td className="px-6 py-4 text-white">Growth Rate &gt;0.15mm²/h</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-white">Maturation</td>
                                            <td className="px-6 py-4 text-neutral-cream/60">&gt; 20mm</td>
                                            <td className="px-6 py-4 text-purple-400 font-mono font-bold">-20 kPa</td>
                                            <td className="px-6 py-4 text-neutral-cream/60">Brix Accumulation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
                                <div className="px-4 py-2 bg-neutral-800 border-b border-neutral-700 flex justify-between items-center">
                                    <span className="text-xs font-mono text-neutral-cream/50">Irrigation_Logic_Core.py</span>
                                </div>
                                <CodeBlock
                                    language="python"
                                    filename=""
                                    code={`def check_irrigation_trigger(soil_psi, berry_size):
    """
    soil_psi: Current Soil Water Potential (kPa)
    berry_size: Current Berry Diameter (mm)
    """
    trigger_threshold = -20 # Default (Maturation)

    # Stage Classification
    if berry_size < 10:
        trigger_threshold = -10 # Early Stage (Cell Division)
    elif 10 <= berry_size <= 20:
        trigger_threshold = -15 # Rapid Growth (Water Demand Peak)

    # Decision Logic (Negative Pressure)
    if soil_psi <= trigger_threshold:
        return {
            "action": "START_IRRIGATION",
            "reason": "MOISTURE_DEFICIT",
            "threshold": trigger_threshold
        }
    return {"action": "WAIT", "reason": "SUFFICIENT"}`}
                                />
                            </div>

                            {/* ── Ψ-stem 이론 배경 ── */}
                            <div className="border border-white/10 rounded-xl overflow-hidden">
                                <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                                    <h4 className="font-bold text-white flex items-center gap-2">
                                        <Gauge className="w-4 h-4 text-purple-400" />
                                        이론 배경: 왜 Ψ-stem이 가장 정확한가
                                    </h4>
                                    <p className="text-xs text-neutral-cream/40 mt-1">그리고 왜 FarmSense는 Ψ-soil을 사용하는가</p>
                                </div>
                                <div className="p-6 space-y-6">

                                    {/* 3가지 지표 비교 */}
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-white/10">
                                                    <th className="text-left py-3 px-4 text-neutral-cream/40 font-normal">지표</th>
                                                    <th className="text-left py-3 px-4 text-neutral-cream/40 font-normal">측정 위치</th>
                                                    <th className="text-left py-3 px-4 text-neutral-cream/40 font-normal">특징</th>
                                                    <th className="text-left py-3 px-4 text-neutral-cream/40 font-normal">한계</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                                <tr>
                                                    <td className="py-3 px-4 text-white font-mono">Ψ-soil</td>
                                                    <td className="py-3 px-4 text-neutral-cream/60">뿌리 주변 토양</td>
                                                    <td className="py-3 px-4 text-neutral-cream/60">저비용 센서로 연속 측정 가능</td>
                                                    <td className="py-3 px-4 text-neutral-cream/50 text-xs">토양 타입·센서 위치에 따라 오차</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 text-white font-mono">Ψ-leaf</td>
                                                    <td className="py-3 px-4 text-neutral-cream/60">잎</td>
                                                    <td className="py-3 px-4 text-neutral-cream/60">식물 내부 수분 반영</td>
                                                    <td className="py-3 px-4 text-neutral-cream/50 text-xs">햇빛·바람에 따라 낮 시간 변동 심함</td>
                                                </tr>
                                                <tr className="bg-purple-500/5">
                                                    <td className="py-3 px-4 text-purple-300 font-mono font-bold">Ψ-stem ★</td>
                                                    <td className="py-3 px-4 text-neutral-cream/80">차광 처리된 줄기</td>
                                                    <td className="py-3 px-4 text-white">식물 전체 수분 상태 반영, 오차 최소</td>
                                                    <td className="py-3 px-4 text-red-400/70 text-xs">측정 장비 350~700만원/동, 농가 비현실적</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Ψ-stem 측정 원리 */}
                                    <div className="bg-black/30 rounded-lg p-5 text-sm">
                                        <p className="text-neutral-cream/40 text-xs mb-3 font-semibold uppercase tracking-widest">Ψ-stem 측정 원리 (Pressure Bomb)</p>
                                        <div className="flex flex-wrap gap-2 items-center text-neutral-cream/70">
                                            {[
                                                '잎 1장을 호일로 차광',
                                                '1~2시간 후 증산 차단',
                                                '잎 수분 = 줄기 수분 평형',
                                                '잎 절단 → 압력 챔버 삽입',
                                                '가압 → 수액 출현 압력 기록',
                                                '그 값 = -Ψ-stem',
                                            ].map((step, i, arr) => (
                                                <div key={step} className="flex items-center gap-2">
                                                    <span className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs">{step}</span>
                                                    {i < arr.length - 1 && <span className="text-white/20 text-xs">→</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Ψ-stem 기준값 */}
                                    <div>
                                        <p className="text-neutral-cream/40 text-xs mb-3 font-semibold uppercase tracking-widest">포도 Ψ-stem 기준값 (참조)</p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {[
                                                { range: '0 ~ -0.2 MPa', label: '수분 충분', color: 'text-blue-400', bg: 'bg-blue-500/5 border-blue-500/20' },
                                                { range: '-0.4 ~ -0.6 MPa', label: '경미한 스트레스', color: 'text-yellow-400', bg: 'bg-yellow-500/5 border-yellow-500/20' },
                                                { range: '-0.6 ~ -0.8 MPa', label: '관수 트리거', color: 'text-orange-400', bg: 'bg-orange-500/5 border-orange-500/20' },
                                                { range: '-1.0 MPa 이하', label: '긴급 관수', color: 'text-red-400', bg: 'bg-red-500/5 border-red-500/20' },
                                            ].map((item) => (
                                                <div key={item.range} className={`border rounded-lg p-3 ${item.bg}`}>
                                                    <p className={`font-mono text-xs font-bold ${item.color}`}>{item.range}</p>
                                                    <p className="text-neutral-cream/60 text-xs mt-1">{item.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* FarmSense 선택 이유 */}
                                    <div className="bg-secondary-gold/5 border border-secondary-gold/20 rounded-lg p-5">
                                        <p className="text-secondary-gold text-sm font-semibold mb-2">FarmSense가 Ψ-soil을 선택한 이유</p>
                                        <p className="text-neutral-cream/60 text-sm leading-relaxed">
                                            Ψ-stem은 이론적으로 가장 정확하지만, 측정에 필요한 Stem Psychrometer는
                                            하우스 1동 기준 <strong className="text-white">350~700만원</strong>의 추가 비용이 발생합니다.
                                            FarmSense는 농가가 이미 보유한 토양수분 센서(Tensiometer, 5~15만원/개)의
                                            Ψ-soil 데이터로 동등한 관수 판단을 내립니다.
                                            Ψ-stem은 이 로직의 과학적 근거이자, 향후 고정밀 센서 연동 시의 업그레이드 경로입니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                                <h4 className="flex items-center gap-2 font-bold text-white mb-2">
                                    <BookOpen className="w-4 h-4" /> Reference Validation
                                </h4>
                                <ul className="list-disc list-inside text-sm text-neutral-cream/70 space-y-1">
                                    <li>Logic Source: <em>스마트 정밀 관개 및 생육 환경 제어 로직 분석.pdf</em> (Page 14, Table 3)</li>
                                    <li>$ET_c$ Formula: Penman-Monteith (FAO-56 Standard)</li>
                                    <li>Video Evidence: <em>완벽한_포도의_비밀을_풀다.mp4</em> (04:12)</li>
                                    <li>Stem Water Potential: Williams &amp; Trout (2005), <em>Vine and Raisin Responses to Partial Rootzone Drying</em></li>
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
