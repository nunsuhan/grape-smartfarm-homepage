'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, ArrowRight, Gauge, Activity, BookOpen, PlayCircle, Download, AlertTriangle, Thermometer, Wind, Sun } from 'lucide-react';
import { clsx } from 'clsx';

export default function IrrigationWaterPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-3xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-blue-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            FarmSense Logic Vol.1
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            관수_물관리
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            기후 변화에 대응한 정밀 물 관리: 데이터 기반 관개 전략, 기술적 접근, 그리고 생리적 영향 분석
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
                                    mode === 'technical' ? "bg-white text-blue-600 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
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
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="space-y-12"
                        >
                            {/* Simple Content */}
                            <section className="prose prose-lg prose-neutral max-w-none">
                                <h3 className="flex items-center gap-3 text-2xl font-bold text-neutral-900 mb-6">
                                    <Droplets className="text-blue-600 w-8 h-8" />
                                    포도가 목마른 순간을 정확히 잡습니다
                                </h3>
                                <p className="text-neutral-600 leading-8">
                                    기존의 스마트팜은 단순히 '오후 2시에 물 주기' 식이었다면,
                                    FarmSense는 <strong>'토양 수분 장력(힘)'</strong>을 측정합니다.
                                    포도알이 커지는 시기(비대기)와 익어가는 시기(성숙기)에 따라 물을 주는 기준이 달라야 당도가 높아집니다.
                                </p>
                            </section>

                            {/* 기후 변화와 물 관리의 중요성 */}
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
                                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    기후 변화와 물 관리의 중요성
                                </h4>
                                <p className="text-neutral-700 leading-relaxed">
                                    전 세계적으로 포도 재배 지역은 기후 변화로 인한 극심한 가뭄, 폭염, 그리고 강우 패턴의 변화에 직면해 있습니다. 
                                    한국과 같이 장마철 집중 호우와 생육기 가뭄이 교차하는 환경에서는 가뭄 스트레스뿐만 아니라 과습(침수) 피해에 대한 관리도 중요합니다.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="border border-neutral-200 rounded-xl p-6 bg-neutral-50">
                                    <h4 className="font-bold text-neutral-900 mb-4 flex items-center justify-between">
                                        생육 단계별 물 주기 기준
                                        <span className="text-xs font-normal text-neutral-500 bg-white border border-neutral-200 px-2 py-1 rounded-full">Source: 스마트 정밀 관개 로직 분석.pdf</span>
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-100 shadow-sm">
                                            <div>
                                                <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Step 1. 착립기</div>
                                                <div className="text-neutral-600">알이 맺힐 때는 토양을 촉촉하게</div>
                                            </div>
                                            <div className="text-2xl font-bold text-blue-600">-10 <span className="text-sm text-neutral-400">kPa</span></div>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-lg border border-blue-100 shadow-sm ring-1 ring-blue-500/20">
                                            <div>
                                                <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Step 2. 비대기 (핵심)</div>
                                                <div className="text-neutral-700 font-medium">물을 가장 많이 먹고 쑥쑥 크는 시기</div>
                                            </div>
                                            <div className="text-2xl font-bold text-blue-700">-15 <span className="text-sm text-blue-400">kPa</span></div>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-neutral-100 shadow-sm">
                                            <div>
                                                <div className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">Step 3. 성숙기</div>
                                                <div className="text-neutral-600">약간 마르게 관리하여 당도 축적 유도</div>
                                            </div>
                                            <div className="text-2xl font-bold text-purple-600">-20 <span className="text-sm text-neutral-400">kPa</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* 주요 관개 전략 */}
                                <div className="border border-neutral-200 rounded-xl p-6 bg-white">
                                    <h4 className="font-bold text-neutral-900 mb-4">주요 관개 전략</h4>
                                    <div className="space-y-4">
                                        <div className="border-l-4 border-green-500 pl-4">
                                            <h5 className="font-semibold text-neutral-900 mb-2">조절된 부족 관개 (RDI)</h5>
                                            <p className="text-sm text-neutral-600">
                                                특정 생육 단계에 의도적으로 수분 스트레스를 주어 영양 생장을 억제하고 과실 품질을 높입니다. 
                                                베레종 이후 RDI는 수확량 손실 없이 물을 절약하고 베리 색상을 개선합니다.
                                            </p>
                                        </div>
                                        <div className="border-l-4 border-blue-500 pl-4">
                                            <h5 className="font-semibold text-neutral-900 mb-2">부분 뿌리 건조 (PRD)</h5>
                                            <p className="text-sm text-neutral-600">
                                                뿌리 영역의 반쪽은 관개하고 다른 반쪽은 건조하게 유지하며 주기적으로 위치를 바꿉니다. 
                                                극심한 수분 스트레스 없이 영양 생장을 억제하고 물 사용 효율을 높입니다.
                                            </p>
                                        </div>
                                        <div className="border-l-4 border-purple-500 pl-4">
                                            <h5 className="font-semibold text-neutral-900 mb-2">지속적 부족 관개 (SDI)</h5>
                                            <p className="text-sm text-neutral-600">
                                                생육 기간 전체에 걸쳐 증발산량(ETc)의 일정 비율(예: 50%)만 공급합니다. 
                                                물 생산성이 높고 베리 색상 개선 효과가 크지만, 장기적인 수확량 감소 위험이 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 관개 기술 */}
                                <div className="border border-neutral-200 rounded-xl p-6 bg-white">
                                    <h4 className="font-bold text-neutral-900 mb-4">관개 기술 및 시스템</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <h5 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                                <Droplets className="w-4 h-4 text-blue-600" />
                                                지중 점적 관개 (SDI)
                                            </h5>
                                            <p className="text-xs text-neutral-600">
                                                물을 뿌리 근처 지하로 직접 공급하여 증발을 줄이고 잡초 생장을 억제합니다. 
                                                표면 점적 관개 대비 물 사용 효율과 수확량이 더 높습니다.
                                            </p>
                                        </div>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <h5 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                                <Sun className="w-4 h-4 text-yellow-600" />
                                                미세 살수 및 냉각
                                            </h5>
                                            <p className="text-xs text-neutral-600">
                                                폭염 시 과실 온도를 낮추어 일소 피해를 줄이고, 극한 고온 시 베리 품질 저하를 방지합니다.
                                            </p>
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
                                <h2>1. 기후 변화와 물 관리의 중요성</h2>
                                <p>
                                    전 세계적으로 포도 재배 지역은 기후 변화로 인한 극심한 가뭄, 폭염, 그리고 강우 패턴의 변화에 직면해 있습니다. 
                                    물 부족은 포도의 수확량과 품질에 직접적인 위협이 되며, 지속 가능한 포도 재배를 위해서는 물 사용 효율(WUE)을 극대화하는 정밀 관개 전략이 필수적입니다.
                                </p>
                                <p>
                                    특히, 한국과 같이 장마철 집중 호우와 생육기 가뭄이 교차하는 환경에서는 가뭄 스트레스뿐만 아니라 과습(침수) 피해에 대한 관리도 중요합니다.
                                </p>

                                <h2>2. Soil Water Potential (Ψ-soil) Algorithm</h2>
                                <p>
                                    공기 중 VPD(수증기압 포차) 지표보다 작물의 실제 수분 스트레스를 더 직접적으로 반영하는
                                    <strong>토양 수분 퍼텐셜(Ψ-soil, kPa)</strong>을 트리거 변수로 사용합니다.
                                    이는 과일 비대율(Fruit Growth Rate)과 순광합성률(P_n) 최적화에 기여합니다.
                                </p>
                            </div>

                            <div className="my-8 overflow-hidden border border-neutral-200 rounded-lg shadow-sm">
                                <table className="min-w-full divide-y divide-neutral-200">
                                    <thead className="bg-neutral-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">Stage</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">Diameter</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-900 uppercase tracking-wider">Threshold (Ψ)</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-neutral-500 uppercase tracking-wider">Target</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-neutral-200 text-sm">
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-neutral-900">Early Growth</td>
                                            <td className="px-6 py-4 text-neutral-500">&lt; 10mm</td>
                                            <td className="px-6 py-4 text-blue-600 font-mono font-bold">-10 kPa</td>
                                            <td className="px-6 py-4 text-neutral-500">Initial Cell Division</td>
                                        </tr>
                                        <tr className="bg-blue-50/30">
                                            <td className="px-6 py-4 font-medium text-neutral-900">Rapid Growth</td>
                                            <td className="px-6 py-4 text-neutral-500">10-20mm</td>
                                            <td className="px-6 py-4 text-blue-700 font-mono font-bold">-15 kPa</td>
                                            <td className="px-6 py-4 text-neutral-900">Growth Rate &gt;0.15mm²/h</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-medium text-neutral-900">Maturation</td>
                                            <td className="px-6 py-4 text-neutral-500">&gt; 20mm</td>
                                            <td className="px-6 py-4 text-purple-600 font-mono font-bold">-20 kPa</td>
                                            <td className="px-6 py-4 text-neutral-500">Brix Accumulation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
                                <div className="px-4 py-2 bg-neutral-800 border-b border-neutral-700 flex justify-between items-center">
                                    <span className="text-xs font-mono text-neutral-400">Irrigation_Logic_Core.py</span>
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

                            {/* 물 관리 모니터링 지표 */}
                            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">물 관리 모니터링 및 스케줄링</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                                            <Gauge className="w-5 h-5 text-green-600" />
                                            식물 기반 지표
                                        </h4>
                                        <div className="bg-white p-4 rounded-lg border border-neutral-200">
                                            <div className="mb-3">
                                                <div className="text-sm font-semibold text-neutral-700 mb-1">줄기 수분 포텐셜 (Ψ-stem)</div>
                                                <p className="text-sm text-neutral-600 mb-2">
                                                    포도나무의 수분 상태를 나타내는 가장 신뢰할 수 있는 지표입니다.
                                                </p>
                                                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                                                    <div className="text-lg font-bold text-green-700">-0.8 MPa 이상</div>
                                                    <div className="text-xs text-neutral-600">수분 스트레스가 거의 없는 상태 (관개 기준값)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                                            <Activity className="w-5 h-5 text-blue-600" />
                                            토양 기반 지표
                                        </h4>
                                        <div className="bg-white p-4 rounded-lg border border-neutral-200">
                                            <div className="mb-3">
                                                <div className="text-sm font-semibold text-neutral-700 mb-1">토양 수분 장력</div>
                                                <p className="text-sm text-neutral-600 mb-2">
                                                    텐시오미터나 센서를 이용하여 토양 수분 장력을 측정하고 자동 관수 시스템을 구축할 수 있습니다.
                                                </p>
                                                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                                                    <div className="text-lg font-bold text-blue-700">-60 kPa</div>
                                                    <div className="text-xs text-neutral-600">샤인머스켓 시설 재배 관수 개시점 (물 사용량 39% 절약, 당도 우수)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                                            <Thermometer className="w-5 h-5 text-red-600" />
                                            원격 탐사 및 AI 기술
                                        </h4>
                                        <div className="bg-white p-4 rounded-lg border border-neutral-200">
                                            <ul className="space-y-2 text-sm text-neutral-600">
                                                <li>• <strong>작물 수분 스트레스 지수 (CWSI):</strong> 열화상 카메라를 이용한 캐노피 온도 측정</li>
                                                <li>• <strong>의사 결정 지원 시스템 (DSS):</strong> 머신러닝을 활용한 토양 수분 변화 예측 및 주간 관개 계획 수립</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 특수 상황에서의 물 관리 */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">특수 상황에서의 물 관리</h3>
                                
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-red-600" />
                                            과습 및 침수
                                        </h4>
                                        <p className="text-sm text-neutral-600">
                                            7일간의 침수는 포도나무의 광합성 속도와 수액 흐름을 현저히 감소시킵니다. 
                                            배수 불량은 뿌리 활력을 떨어뜨려 오히려 수분 흡수를 저해하므로 철저한 배수 관리가 필요합니다.
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-neutral-900 mb-2">질병과 관개</h4>
                                        <p className="text-sm text-neutral-600">
                                            바이러스에 감염된 포도나무의 경우, 일반적인 부족 관개(RDI) 전략이 오히려 해로울 수 있습니다. 
                                            감염된 나무에는 충분한 물을 공급(Ψ-stem &gt; -0.8 MPa 유지)하여 스트레스를 줄이는 것이 중요합니다.
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-neutral-900 mb-2">염류 피해</h4>
                                        <p className="text-sm text-neutral-600">
                                            관개 용수의 염도가 높거나 토양 염류 집적이 있는 경우, 부족 관개는 토양 내 삼투 포텐셜을 낮추어 
                                            식물의 물 흡수를 더욱 방해합니다. 이 경우 적절한 용탈(leaching)을 위한 추가적인 물 공급이 필요합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 결론 및 제언 */}
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">결론 및 제언</h3>
                                <p className="text-neutral-700 mb-4 font-semibold">
                                    최신 연구들은 획일적인 물 공급에서 벗어나 <strong>데이터 기반의 정밀 관개</strong>로 전환할 것을 강력히 시사합니다.
                                </p>
                                <ul className="space-y-2 text-sm text-neutral-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">1.</span>
                                        <span><strong>지표 활용:</strong> Ψ-stem -0.8 MPa 또는 토양 수분 장력 -60 kPa와 같은 명확한 생리적/토양학적 임계값을 설정하여 자동화된 관개 시스템을 도입</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">2.</span>
                                        <span><strong>기술 도입:</strong> 물 부족 지역에서는 증발을 최소화하고 뿌리 발달을 돕는 지중 점적 관개(SDI)나 직접 뿌리 영역 관개(DRZ) 도입을 적극 고려</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">3.</span>
                                        <span><strong>품종 및 상황별 맞춤:</strong> 테이블 포도와 양조용 포도의 목표 품질이 다르므로 RDI 적용 시기를 달리해야 하며, 바이러스 감염 등 수세가 약한 나무에는 부족 관개를 지양</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-600 font-bold">4.</span>
                                        <span><strong>기후 대응:</strong> 가뭄뿐만 아니라 집중 호우에 대비한 배수 시스템과 폭염에 대비한 미세 살수 시스템 등 복합적인 기후 적응형 물 관리 시스템 필요</span>
                                    </li>
                                </ul>
                            </div>

                            {/* 주요 관개 전략 상세 */}
                            <div className="bg-white border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">3. 주요 관개 전략 (Irrigation Strategies)</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">3.1. 조절된 부족 관개 (Regulated Deficit Irrigation, RDI)</h4>
                                        <p className="text-sm text-neutral-700 mb-3">
                                            RDI는 특정 생육 단계(주로 착과 후 베레종 이전, 또는 베레종 이후)에 의도적으로 수분 스트레스를 주어 영양 생장을 억제하고 과실 품질을 높이는 전략입니다.
                                        </p>
                                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                            <p className="text-sm text-neutral-700 mb-2"><strong>효과:</strong></p>
                                            <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside">
                                                <li>영양 생장 과다를 막고 포도알의 피부 대 과육 비율을 높여 안토시아닌, 페놀, 향기 성분의 농축을 유도</li>
                                                <li>'Crimson Seedless' 품종의 경우, 베레종 이후 RDI는 수확량 손실 없이 물을 절약하고 베리 색상을 개선</li>
                                                <li>착과 초기(세포 분열기)의 수분 스트레스는 베리 크기와 수확량을 영구적으로 감소시킬 수 있음</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">3.2. 부분 뿌리 건조 (Partial Root-zone Drying, PRD)</h4>
                                        <p className="text-sm text-neutral-700 mb-3">
                                            PRD는 뿌리 영역의 반쪽은 관개하고 다른 반쪽은 건조하게 유지하며 주기적으로 그 위치를 바꾸는 방식입니다.
                                        </p>
                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                            <p className="text-sm text-neutral-700 mb-2"><strong>메커니즘:</strong></p>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                건조한 뿌리에서 생성된 아브시스산(ABA)이 기공을 부분적으로 닫게 하여 증산을 줄이지만, 
                                                젖은 뿌리 덕분에 식물의 수분 상태(수분 포텐셜)는 유지됩니다.
                                            </p>
                                            <p className="text-sm text-neutral-600">
                                                <strong>장점:</strong> RDI와 달리 극심한 수분 스트레스 없이 영양 생장을 억제하고 물 사용 효율을 높일 수 있습니다. 
                                                그러나 설치 비용이 높고 토양 유형에 따라 효과가 달라질 수 있습니다.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">3.3. 지속적 부족 관개 (Sustained Deficit Irrigation, SDI)</h4>
                                        <p className="text-sm text-neutral-700 mb-3">
                                            생육 기간 전체에 걸쳐 증발산량(ETc)의 일정 비율(예: 50%)만 공급하는 방식입니다.
                                        </p>
                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                                            <p className="text-sm text-neutral-600">
                                                일부 연구에서는 SDI가 RDI보다 물 생산성(Water Productivity)이 더 높고 베리 색상 개선 효과가 컸으나, 
                                                장기적인 수확량 감소 위험이 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 관개 기술 상세 */}
                            <div className="bg-white border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">4. 관개 기술 및 시스템</h3>
                                
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-2">4.1. 점적 관개 및 지중 점적 관개</h4>
                                        <div className="space-y-3">
                                            <div className="bg-neutral-50 p-4 rounded-lg">
                                                <p className="text-sm font-semibold text-neutral-700 mb-1">표면 점적 관개(SD)</p>
                                                <p className="text-xs text-neutral-600">가장 보편적이나 표면 증발 손실이 발생할 수 있습니다.</p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                                <p className="text-sm font-semibold text-neutral-700 mb-1">지중 점적 관개(SDI)</p>
                                                <p className="text-xs text-neutral-600 mb-2">
                                                    물을 뿌리 근처 지하로 직접 공급하여 증발을 줄이고 잡초 생장을 억제합니다. 
                                                    SD보다 물 사용 효율과 수확량이 더 높은 경향이 있습니다.
                                                </p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                                                <p className="text-sm font-semibold text-neutral-700 mb-1">직접 뿌리 영역 관개 (DRZ)</p>
                                                <p className="text-xs text-neutral-600">
                                                    수직 튜브를 통해 뿌리 깊은 곳(예: 60cm)으로 직접 물을 공급하는 혁신적인 방식입니다. 
                                                    SD 대비 수확량은 9~12%, 물 사용 효율은 9~11% 향상되었으며, 뿌리가 더 깊게 뻗도록 유도하여 가뭄 저항성을 높였습니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-2">4.2. 미세 살수 및 냉각 관개</h4>
                                        <p className="text-sm text-neutral-600">
                                            폭염 시 과실 온도를 낮추기 위해 미세 살수(Sprinkler)를 이용한 증발 냉각이 사용됩니다. 
                                            이는 과실의 일소 피해(Sunburn)를 줄이고, 극한 고온 시 베리의 품질 저하를 방지하는 데 효과적입니다. 
                                            또한, 봄철 늦서리 피해 방지를 위해서도 사용됩니다.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-2">4.3. 멀칭(Mulching) 활용</h4>
                                        <p className="text-sm text-neutral-600">
                                            점적 관개와 플라스틱 멀칭을 결합한 방식(DIPM)은 단순 점적 관개보다 수확량을 35~40% 증가시키고 
                                            비용 대비 효과가 뛰어난 것으로 분석되었습니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 모니터링 및 스케줄링 상세 */}
                            <div className="bg-white border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">5. 물 관리 모니터링 및 스케줄링</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">5.1. 식물 기반 지표 (Plant-based Indicators)</h4>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-neutral-700 mb-2">줄기 수분 포텐셜 (Ψ-stem)</p>
                                            <p className="text-xs text-neutral-600 mb-3">
                                                포도나무의 수분 상태를 나타내는 가장 신뢰할 수 있는 지표로 간주됩니다.
                                            </p>
                                            <div className="bg-white p-3 rounded border border-neutral-200">
                                                <p className="text-sm text-neutral-700 mb-1"><strong>임계값:</strong></p>
                                                <ul className="text-xs text-neutral-600 space-y-1 list-disc list-inside">
                                                    <li>-0.8 MPa 이상이면 수분 스트레스가 거의 없는 상태</li>
                                                    <li>이를 기준으로 관개 시점을 결정하면 불필요한 관수를 줄이면서 생육을 유지</li>
                                                    <li>테이블 포도의 경우 -0.8 MPa ~ -1.0 MPa 사이가 베리 색상 발현에 최적</li>
                                                </ul>
                                            </div>
                                            <p className="text-xs text-neutral-500 mt-3">
                                                기타: 잎 수분 포텐셜(Ψ-leaf), 수액 흐름(Sap flow), 잎의 기공 전도도(g_s) 등이 사용됩니다.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">5.2. 토양 기반 지표 (Soil-based Indicators)</h4>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-neutral-700 mb-2">토양 수분 장력</p>
                                            <p className="text-xs text-neutral-600 mb-3">
                                                텐시오미터나 센서를 이용하여 토양 수분 장력을 측정하고 자동 관수 시스템을 구축할 수 있습니다.
                                            </p>
                                            <div className="bg-white p-3 rounded border border-neutral-200">
                                                <p className="text-sm text-neutral-700 mb-1"><strong>샤인머스켓 시설 재배 연구:</strong></p>
                                                <p className="text-xs text-neutral-600">
                                                    <strong>-60 kPa</strong>를 관수 개시점으로 설정했을 때, -30 kPa 대비 물 사용량을 39% 절약하면서도 당도 등 과실 품질이 우수했습니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">5.3. 원격 탐사 및 AI 기술</h4>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-neutral-700 mb-2">작물 수분 스트레스 지수 (CWSI)</p>
                                            <p className="text-xs text-neutral-600 mb-3">
                                                열화상 카메라 등을 이용해 캐노피 온도를 측정하여 산출합니다. 
                                                저비용 적외선 센서 네트워크를 통해 Ψ-stem을 추정하고 관개 지도를 작성할 수 있습니다.
                                            </p>
                                            <p className="text-sm font-semibold text-neutral-700 mb-2">의사 결정 지원 시스템 (DSS)</p>
                                            <p className="text-xs text-neutral-600">
                                                인공신경망(ANN) 등 머신러닝을 활용하여 토양 수분 변화를 예측하고 주간 관개 계획을 수립하는 모델이 개발되고 있습니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 특수 상황 상세 */}
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">6. 특수 상황에서의 물 관리</h3>
                                
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-neutral-900 mb-2">6.1. 과습 및 침수</h4>
                                        <p className="text-sm text-neutral-600">
                                            한국과 같은 기후에서는 장마철 침수가 문제입니다. 7일간의 침수는 포도나무('캠벨얼리', '진옥')의 
                                            광합성 속도와 수액 흐름을 현저히 감소시키며, 스트레스 지수(CWSI)를 높입니다. 
                                            배수 불량은 뿌리 활력을 떨어뜨려 오히려 수분 흡수를 저해하므로 철저한 배수 관리가 필요합니다.
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-neutral-900 mb-2">6.2. 질병과 관개</h4>
                                        <p className="text-sm text-neutral-600">
                                            'Grapevine Red Blotch Virus (GRBV)'와 같은 바이러스에 감염된 포도나무의 경우, 
                                            일반적인 부족 관개(RDI) 전략이 오히려 해로울 수 있습니다. 
                                            감염된 나무에 충분한 물을 공급(Ψ-stem &gt; -0.8 MPa 유지)하여 스트레스를 줄이는 것이 
                                            광합성과 당 축적을 돕고 과실 품질 저하를 완화하는 데 도움이 됩니다.
                                        </p>
                                    </div>

                                    <div className="bg-white p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-neutral-900 mb-2">6.3. 염류 피해</h4>
                                        <p className="text-sm text-neutral-600">
                                            관개 용수의 염도가 높거나 토양 염류 집적이 있는 경우, 부족 관개는 토양 내 삼투 포텐셜을 낮추어 
                                            식물의 물 흡수를 더욱 방해하고 수확량을 감소시킵니다. 
                                            이 경우 적절한 용탈(leaching)을 위한 추가적인 물 공급이 고려되어야 합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 결론 및 제언 */}
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">7. 결론 및 제언</h3>
                                <p className="text-neutral-700 mb-4 font-semibold">
                                    최신 연구들은 획일적인 물 공급에서 벗어나 <strong>데이터 기반의 정밀 관개</strong>로 전환할 것을 강력히 시사합니다.
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2">1. 지표 활용</p>
                                        <p className="text-sm text-neutral-600">
                                            Ψ-stem -0.8 MPa 또는 토양 수분 장력 -60 kPa와 같은 명확한 생리적/토양학적 임계값을 설정하여 자동화된 관개 시스템을 도입해야 합니다.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2">2. 기술 도입</p>
                                        <p className="text-sm text-neutral-600">
                                            물 부족 지역에서는 증발을 최소화하고 뿌리 발달을 돕는 지중 점적 관개(SDI)나 직접 뿌리 영역 관개(DRZ) 도입을 적극 고려해야 합니다.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2">3. 품종 및 상황별 맞춤</p>
                                        <p className="text-sm text-neutral-600">
                                            테이블 포도와 양조용 포도의 목표 품질(크기 vs. 성분 농축)이 다르므로 RDI 적용 시기를 달리해야 하며, 
                                            바이러스 감염 등 수세가 약한 나무에는 부족 관개를 지양해야 합니다.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2">4. 기후 대응</p>
                                        <p className="text-sm text-neutral-600">
                                            가뭄뿐만 아니라 집중 호우에 대비한 배수 시스템과 폭염에 대비한 미세 살수 시스템 등 
                                            복합적인 기후 적응형 물 관리 시스템이 필요합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                                <h4 className="flex items-center gap-2 font-bold text-neutral-900 mb-2">
                                    <BookOpen className="w-4 h-4" /> Reference Validation
                                </h4>
                                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                                    <li>Logic Source: <em>스마트 정밀 관개 및 생육 환경 제어 로직 분석.pdf</em> (Page 14, Table 3)</li>
                                    <li>ET_c Formula: Penman-Monteith (FAO-56 Standard)</li>
                                    <li>Video Evidence: <em>완벽한_포도의_비밀을_풀다.mp4</em> (04:12)</li>
                                    <li>Research: 포도 재배를 위한 정밀 물 관리 심층 리서치 보고서</li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </main>
    );
}
