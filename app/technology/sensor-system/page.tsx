'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Wifi, Server, Activity, Thermometer, Radio, Zap, ArrowRight, ExternalLink, Check, X } from 'lucide-react';
import { useModal } from '@/components/providers/modal-provider';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

export default function SensorSystemPage() {
    const { openModal } = useModal();

    return (
        <main className="bg-neutral-black min-h-screen pt-20">
            {/* Hero */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Smart Sensors
                        </h1>
                        <p className="text-xl text-neutral-cream/80 leading-relaxed max-w-2xl mx-auto">
                            IoT Network & Environmental Monitoring:
                            초정밀 센서 기술로 완성하는 보이지 않는 곳의 관리
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Metrics */}
            <Section className="py-12 border-b border-white/5">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Server, label: "Data Points", value: "400", suffix: "M+" },
                            { icon: Wifi, label: "Sensor Types", value: "12", suffix: " types" },
                            { icon: Activity, label: "Anomaly Detection", value: "94", suffix: "%" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:border-secondary-gold/50 transition-colors"
                            >
                                <item.icon className="w-10 h-10 text-secondary-gold mx-auto mb-4" />
                                <div className="text-4xl font-bold text-white mb-2">
                                    {item.value}<span className="text-secondary-gold">{item.suffix}</span>
                                </div>
                                <div className="text-neutral-cream/60">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Why This Matters */}
            <Section className="py-20 bg-neutral-900 border-b border-white/5">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">Why Smart Sensors?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 rounded-2xl bg-red-950/20 border border-red-900/30">
                            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                <X className="w-6 h-6" /> 기존 방식
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-neutral-cream/70">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                    <span>감각 의존: "대충 덥네/습하네" 느낌으로 판단하여 오차 발생</span>
                                </li>
                                <li className="flex items-start gap-3 text-neutral-cream/70">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                    <span>수동 관리: 하루 종일 하우스에 붙어서 창을 열고 닫아야 하는 노동</span>
                                </li>
                                <li className="flex items-start gap-3 text-neutral-cream/70">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                    <span>사후 약방문: 이미 고온 장애나 냉해를 입은 후에야 문제 인지</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl bg-green-950/20 border border-green-900/30 relative overflow-hidden">
                            <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
                            <h3 className="text-xl font-bold text-green-500 mb-6 flex items-center gap-2">
                                <Check className="w-6 h-6" /> FarmSense IoT
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-start gap-3 text-white">
                                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                                    <span>정밀 데이터: 12가지 환경 변수를 1분 단위로 0.1% 오차범위 내 측정</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                                    <span>자동 제어: 설정값에 따라 측창/보온커튼/관수 등을 24시간 자동 제어</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                                    <span>이상 감지: 장비 고장이나 급격한 환경 변화 시 즉시 스마트폰 알림</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* How It Works */}
            <Section className="py-20">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Thermometer,
                                title: "1. Sensing",
                                desc: "온도, 습도, CO2, 지온, 지습 등 12가지 핵심 환경 변수를 1분 단위로 오차 범위 0.1% 내에서 측정합니다."
                            },
                            {
                                icon: Radio,
                                title: "2. Transmission",
                                desc: "LoRaWAN 저전력 장거리 통신 기술을 사용하여 통신 비용 없이 반경 2km 내의 데이터를 안정적으로 전송합니다."
                            },
                            {
                                icon: Zap,
                                title: "3. Processing",
                                desc: "수집된 데이터는 엣지 디바이스에서 1차 보정 후 클라우드로 전송되어 이상 징후를 즉시 판별합니다."
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative p-6 bg-neutral-900 rounded-xl border border-white/10">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
                                    {i + 1}
                                </div>
                                <step.icon className="w-10 h-10 text-green-500 mb-4 ml-4" />
                                <h3 className="text-xl font-bold text-white mb-2 ml-4">{step.title}</h3>
                                <p className="text-neutral-cream/70 ml-4 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Technical Details */}
            <Section className="py-20 bg-neutral-900 border-y border-white/5">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">
                                Massive IoT Grid
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-green-500 font-bold mb-2">Multi-Sensor Fusion</h4>
                                    <p className="text-neutral-cream/70">
                                        단일 센서의 오차를 최소화하기 위해 다중 센서 간의 상관관계를 분석하여
                                        데이터 무결성을 검증합니다. (예: 일사량과 온도의 관계 분석)
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-green-500 font-bold mb-2">Automated Calibration</h4>
                                    <p className="text-neutral-cream/70">
                                        센서 노후화에 따른 드리프트 현상을 AI가 자동으로 감지하고 보정하여
                                        장기간 사용에도 초기 성능을 유지합니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-green-500 font-bold mb-2">Robust Hardware</h4>
                                    <p className="text-neutral-cream/70">
                                        IP67 방수/방진 등급의 하드웨어 설계로 고온다습한 하우스 환경과
                                        외부 노지 환경에서도 내구성을 보장합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-gradient-to-br from-green-900/20 to-secondary-gold/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
                            {/* Placeholder for Technical Diagram */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700" />
                            <div className="relative z-10 w-full h-full p-8 flex flex-col justify-center items-center">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="bg-neutral-black/80 backdrop-blur-md p-3 rounded-lg border border-green-500/30 text-center animate-pulse">
                                        <Thermometer className="w-8 h-8 text-green-500 mx-auto mb-1" />
                                        <div className="text-xs text-white">Temp/Hum</div>
                                    </div>
                                    <div className="bg-neutral-black/80 backdrop-blur-md p-3 rounded-lg border border-green-500/30 text-center">
                                        <Activity className="w-8 h-8 text-green-500 mx-auto mb-1" />
                                        <div className="text-xs text-white">Soil Moist</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="h-8 w-0.5 bg-green-500/50" />
                                    <div className="bg-neutral-black backdrop-blur-xl p-4 rounded-full border-2 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] z-20">
                                        <Wifi className="w-8 h-8 text-white add-ping" />
                                    </div>
                                    <div className="h-8 w-0.5 bg-green-500/50" />
                                    <div className="bg-neutral-900/90 p-3 rounded-lg border border-white/20 text-center w-32">
                                        <Server className="w-6 h-6 text-white/50 mx-auto mb-1" />
                                        <div className="text-[10px] text-white/50 tracking-wider">CLOUD SERVER</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Use Cases */}
            <Section className="py-20">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-secondary-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">정밀 환경 제어</h3>
                            <p className="text-neutral-cream/70 mb-4">
                                "하우스 온도는 맞는데 작물 상태가 왜 이럴까요?"
                            </p>
                            <div className="p-4 bg-black/30 rounded-lg text-sm text-neutral-300">
                                → 공기 온도가 아닌 '엽온(잎의 온도)'과 '근권 수분(뿌리 근처 수분)'을
                                측정하여 식물이 실제로 느끼는 스트레스를 94%의 정확도로 감지해 냅니다.
                            </div>
                        </div>
                        <div className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-secondary-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">장비 고장 조기 경보</h3>
                            <p className="text-neutral-cream/70 mb-4">
                                "겨울밤 보일러가 고장난 줄 모르고 잤다가 냉해를 입었습니다."
                            </p>
                            <div className="p-4 bg-black/30 rounded-lg text-sm text-neutral-300">
                                → 온도가 설정 범위 밖으로 급격히 떨어지는 패턴을 즉시 감지하여
                                새벽 2시에도 전화 알림을 발송하여 치명적인 사고를 막았습니다.
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Related Papers */}
            <Section className="py-20 border-t border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Papers</h2>
                        <ul className="space-y-4">
                            {[
                                {
                                    title: "Wireless sensor networks for agriculture",
                                    authors: "Ojha et al.",
                                    venue: "Computers and Electronics in Agriculture 2015",
                                    url: "https://doi.org/10.1016/j.compag.2015.08.011"
                                },
                                {
                                    title: "TimescaleDB Documentation",
                                    authors: "Timescale",
                                    venue: "2024",
                                    url: "https://docs.timescale.com/"
                                },
                                {
                                    title: "스마트팜코리아",
                                    authors: "농림축산식품부",
                                    venue: "공식 사이트",
                                    url: "https://www.smartfarmkorea.net/"
                                }
                            ].map((paper, i) => (
                                <li key={i}>
                                    <a
                                        href={paper.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-4 p-4 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group"
                                    >
                                        <span className="text-green-500 font-mono font-bold group-hover:text-secondary-gold transition-colors">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1">
                                            <div className="text-white font-medium group-hover:underline flex items-center gap-2">
                                                {paper.title}
                                                <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-secondary-gold" />
                                            </div>
                                            <div className="text-sm text-neutral-500">
                                                {paper.authors}, <span className="text-white/40">{paper.venue}</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="py-20 bg-neutral-900 border-t border-white/5">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">자주 묻는 질문</h2>
                    <Accordion>
                        <AccordionItem title="설치가 어렵지 않은가요? 전기 공사가 필요한가요?">
                            FarmSense 센서는 복잡한 배선이나 전기 공사가 필요 없는 무선(Wireless) 방식입니다.
                            배터리로 최대 2년까지 작동하며, 원하는 위치에 센서를 꽂기만 하면 자동으로 네트워크에 연결되는 Plug & Play 방식을 채택했습니다.
                        </AccordionItem>
                        <AccordionItem title="정전이 되어도 작동하나요?">
                            네, 센서는 배터리로 구동되므로 정전과 무관하게 데이터를 수집합니다.
                            게이트웨이(수신기)에는 비상 배터리가 내장되어 있어 정전 발생 시에도 약 6시간 동안 데이터 전송 및 정전 알림 발송이 가능합니다.
                        </AccordionItem>
                        <AccordionItem title="타사 제어기(컨트롤러)와 호환 되나요?">
                            대부분의 국내 시판 스마트팜 제어기와 호환됩니다.
                            Modbus, RS485 등 산업 표준 통신 프로토콜을 지원하며, 호환이 되지 않는 구형 장비의 경우 별도의 컨버터를 제공하여 연동을 도와드립니다.
                        </AccordionItem>
                    </Accordion>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-gradient-to-t from-green-900/20 to-transparent">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            보이지 않는 것까지 관리하세요
                        </h2>
                        <p className="text-neutral-cream/70 mb-8 max-w-2xl mx-auto">
                            FarmSense IoT 센서가 24시간 당신의 농장을 지켜드립니다.
                        </p>
                        <button
                            onClick={() => openModal('demo')}
                            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-900 transition-all shadow-lg shadow-green-500/20"
                        >
                            시연 신청하기
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
