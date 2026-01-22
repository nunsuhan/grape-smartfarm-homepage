'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { CloudRain, TrendingUp, AlertTriangle, CloudSun, BarChart, Bell, ArrowRight, ExternalLink, Check, X } from 'lucide-react';
import { useModal } from '@/components/providers/modal-provider';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import Image from 'next/image';

const refs = [
    {
        title: "VitiCanopy: A free computer app to estimate canopy vigor and porosity for grapevine",
        authors: "De Bei et al.",
        year: "2016",
        journal: "Sensors"
    },
    {
        title: "Plant Disease Forecasting: A Comprehensive Review",
        authors: "Javaid et al.",
        year: "2022",
        journal: "Agronomy"
    },
    {
        title: "Evaluation of spectral disease index PMI to detect early wheat powdery mildew",
        authors: "ResearchGate",
        year: "2018",
        journal: "Remote Sensing"
    },
    {
        title: "Predictive Analytics for Plant Health using Machine Learning Techniques",
        authors: "IJAM",
        year: "2025",
        journal: "International Journal of Applied Mechanics"
    }
];

export default function PmiDssPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-neutral-black min-h-screen pt-20">
            {/* Hero */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Deep Logic, Transparent Output
                        </h1>
                        <p className="text-xl text-neutral-cream/80 leading-relaxed max-w-3xl mx-auto">
                            FarmSense는 "단순 진단"을 넘어섭니다.<br />
                            수만 건의 데이터와 정교한 알고리즘이 결합된 <span className="text-secondary-gold font-bold">진짜 의사결정 지원 시스템(DSS)</span>을 경험하세요.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Core Logic Breakdown */}
            <Section className="py-20 bg-neutral-900 border-y border-white/5">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">Core Algorithm Logic</h2>
                        <p className="text-neutral-cream/60">어떻게 판단하고 예측하는지, FarmSense의 두뇌를 공개합니다.</p>
                    </div>

                    <div className="space-y-24">
                        {/* 1. PMI */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                <Image
                                    src="/images/generated/tech_pmi.png"
                                    alt="PMI / PHI Diagram"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                            <div className="order-1 lg:order-2 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">
                                    <AlertTriangle className="w-3 h-3" /> Prevention
                                </div>
                                <h3 className="text-2xl font-bold text-white">PMI (Pest Management Index)</h3>
                                <p className="text-neutral-cream/70 leading-relaxed">
                                    병해충은 특정 환경 조건이 맞을 때만 발생합니다. PMI는 실시간 온습도 데이터와 잎 표면 습윤 지속 시간(Leaf Wetness Duration)을 결합하여 병원균 포자의 발아 가능성을 확률로 계산합니다.
                                </p>
                                <div className="space-y-3 font-mono text-sm bg-white/5 p-4 rounded-lg border border-white/5">
                                    <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                                        <span className="text-neutral-400">Input Data</span>
                                        <span className="text-white">Temp, Humidity, Leaf Wetness</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
                                        <span className="text-neutral-400">Logic</span>
                                        <span className="text-secondary-gold">Risk = f(T, RH, WetHours)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-400">Output</span>
                                        <span className="text-red-400 font-bold">PMI Risk Score (0~1.0)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. VitiCanopy */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-wider">
                                    <BarChart className="w-3 h-3" /> Yield Prediction
                                </div>
                                <h3 className="text-2xl font-bold text-white">VitiCanopy & Yield Algo</h3>
                                <p className="text-neutral-cream/70 leading-relaxed">
                                    스마트폰 사진 한 장으로 수관(Canopy)의 밀도와 공극률을 분석합니다. 이를 통해 광합성 효율과 엽면적(LAI)을 추정하고, 최종적으로 예상 수확량을 계산합니다.
                                </p>
                                <Accordion>
                                    <AccordionItem title="예측 로직 상세">
                                        <div className="text-sm text-neutral-400 space-y-2 font-mono">
                                            <p>1. Camera Image → Binary Thresholding</p>
                                            <p>2. Analyze Gap Fraction (공극률)</p>
                                            <p>3. Calculate LAI (Leaf Area Index)</p>
                                            <p>4. Yield = LAI × ClusterCoefficient × Area</p>
                                        </div>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                                <Image
                                    src="/images/generated/tech_yield.png"
                                    alt="VitiCanopy Yield Prediction"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>

                        {/* 3. PHI & Resource */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary-gold/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <CloudSun className="w-5 h-5 text-yellow-500" />
                                    PHI (Plant Health Index)
                                </h3>
                                <p className="text-neutral-cream/60 text-sm mb-4 leading-relaxed">
                                    이미지의 분광 분석(R-G-B Histogram)을 통해 엽록소 활성도를 수치화합니다. 육안으로 식별하기 전, 식물이 받는 미세한 스트레스를 감지하여 '건강 지수'로 표현합니다.
                                </p>
                                <div className="h-2 w-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full mt-4" />
                                <div className="flex justify-between text-xs text-neutral-500 mt-2">
                                    <span>Stress (0.0)</span>
                                    <span>Healthy (1.0)</span>
                                </div>
                            </div>

                            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-secondary-gold/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <CloudRain className="w-5 h-5 text-blue-500" />
                                    Water & Nutrient Mgt
                                </h3>
                                <p className="text-neutral-cream/60 text-sm mb-4 leading-relaxed">
                                    토양 수분 장력(pF)과 일사량 기반의 증발산량(ET) 계산법을 적용합니다.
                                    작물이 실제 필요로 하는 물의 양을 '리터(L)' 단위로 정확히 제안하여 과잉 관수 및 비료 유실을 방지합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Academic References */}
            <Section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                            <span>Scientific Basis</span>
                        </h2>
                        <div className="grid gap-4">
                            {refs.map((ref, i) => (
                                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div>
                                        <div className="font-bold text-white text-sm md:text-base group-hover:text-secondary-gold transition-colors">
                                            {ref.title}
                                        </div>
                                        <div className="text-xs text-neutral-400 mt-1">
                                            {ref.authors} • {ref.journal} ({ref.year})
                                        </div>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-neutral-600 mt-2 md:mt-0" />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8 text-xs text-neutral-500">
                            * FarmSense DSS 알고리즘은 위 논문들의 검증된 이론을 바탕으로 구현되었습니다.
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Disclaimer */}
            <Section className="py-10 bg-neutral-black border-t border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                        <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-4" />
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            본 서비스의 예측 결과는 수집된 데이터와 알고리즘에 기반한 분석 추정치입니다. <br />
                            실제 환경 변수와 국지적 특성에 따라 오차가 발생할 수 있으며, 최종 영농 의사결정은 농장주의 판단하에 진행되어야 합니다.
                            FarmSense는 의사결정을 돕는 보조 도구로서 기능합니다.
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
