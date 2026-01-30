'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { Wind, Thermometer, Wifi, AlertTriangle } from 'lucide-react';

export default function SensorEnvironmentPage() {
    return (
        <main className="min-h-screen bg-neutral-900 pt-20">
            <Section className="py-20 bg-neutral-900 border-b border-white/5">
                <Container className="max-w-4xl">
                    <span className="text-green-400 font-medium tracking-wider text-sm uppercase flex items-center gap-2">
                        <Wind className="w-4 h-4" /> Field Guide
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
                        실패하지 않는 환경 센서 배치
                    </h1>
                    <p className="text-neutral-400 mt-4 text-lg">
                        센서 값 하나가 농사를 망칠 수도 있습니다. <br />
                        직사광선 노출, 습도 포화, 전파 간섭 등 현장에서 가장 많이 겪는 실패 사례와 해결책을 공유합니다.
                    </p>
                </Container>
            </Section>

            <Section className="py-12">
                <Container className="max-w-4xl space-y-12">

                    {/* 1. Temp/Humi Sensor Placement */}
                    <div className="bg-[#1A1A2E] border border-white/10 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Thermometer className="text-red-400 w-6 h-6" />
                            온습도 센서, '여기'에는 절대 달지 마세요!
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">❌ 나쁜 예시 (Bad)</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-neutral-400 text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span><strong>직사광선 노출:</strong> 센서가 태양열을 받아 실제 기온보다 5~10도 높게 측정됩니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-neutral-400 text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span><strong>잎에 닿게 설치:</strong> 증산작용으로 인해 국소 습도가 비정상적으로 높게 나옵니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-neutral-400 text-sm">
                                        <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span><strong>하우스 천장 근처:</strong> 열기가 고이는 곳이라 작물 생육 환경과 다릅니다.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-white">✅ 좋은 예시 (Good)</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                                        <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 text-xs font-bold">V</div>
                                        <span><strong>백엽상(Radiation Shield)</strong> 내부에 설치하여 직사광선을 차단합니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                                        <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 text-xs font-bold">V</div>
                                        <span><strong>지면 1.5m 높이:</strong> 포도나무의 열매가 맺히는 높이(결실권)에 위치시킵니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-neutral-300 text-sm">
                                        <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 text-xs font-bold">V</div>
                                        <span><strong>바람이 잘 통하는 곳:</strong> 공기가 순환되어 평균적인 대기 온도를 대변해야 합니다.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2. Soil Sensor Installation */}
                    <div className="bg-[#1A1A2E] border border-white/10 p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Wifi className="text-amber-400 w-6 h-6" />
                            토양 센서 & 무선 노드 전파 관리
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-white mb-2">📡 Metal Obstruction (금속 장애물)</h4>
                                <p className="text-sm text-neutral-400">
                                    비닐하우스 파이프는 전파를 반사하거나 차단합니다. 무선 노드(ESP32)의 안테나는 파이프 기둥 바로 옆이 아닌,
                                    <strong>개방된 공간(통로 중앙) 상단</strong>에 매다는 것이 가장 좋습니다.
                                </p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                <h4 className="font-bold text-white mb-2">💧 Drip Loop (물방울 고리)</h4>
                                <p className="text-sm text-neutral-400">
                                    센서 선을 따라 빗물이나 결로가 흘러내려 보드(PCB)로 들어가는 것을 막기 위해,
                                    전선을 <strong>U자 형태</strong>로 구부려 설치하세요. 물방울이 전선을 타고 내려가다 바닥으로 떨어지게 해야 합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                </Container>
            </Section>
        </main>
    );
}
