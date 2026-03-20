'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AlertCircle, Thermometer, CloudRain, Calendar, Camera, Search, BookOpen, UserCheck, ArrowRight, CheckCircle2, CloudSun } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AiDiagnosisPage() {
    return (
        <main className="bg-neutral-black min-h-screen pt-20">
            {/* Hero Section */}
            <Section className="relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-gold/10 to-transparent pointer-events-none" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-gold/10 border border-secondary-gold/20 text-secondary-gold text-sm font-medium">
                            FarmSense 병해진단 서비스
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            데이터로 읽는<br />
                            <span className="text-secondary-gold">포도의 신호</span>
                        </h1>
                        <p className="text-xl text-neutral-cream/80 leading-relaxed max-w-2xl mx-auto">
                            진단 모델의 한계와 농가의 역할을 재정의하며,<br />
                            현상을 정확히 이해하고 대처할 수 있도록 돕습니다.
                        </p>

                        {/* 솔직한 현황 고지 */}
                        <div className="mt-10 max-w-2xl mx-auto bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 text-left">
                            <p className="text-orange-300 font-bold text-sm mb-3 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4" /> 현재 AI 진단 수준 — 솔직하게 말씀드립니다
                            </p>
                            <ul className="space-y-2 text-sm text-neutral-cream/70">
                                <li className="flex gap-2"><span className="text-orange-400 shrink-0">•</span><strong className="text-white">이상 감지 (정상/비정상 구분)</strong>는 신뢰도 있게 작동합니다.</li>
                                <li className="flex gap-2"><span className="text-orange-400 shrink-0">•</span>
                                    <span><strong className="text-white">병명 진단은 약 50% 수준</strong>입니다. 결과는 참고용으로만 활용하세요.</span>
                                </li>
                                <li className="flex gap-2 pl-4 border-l border-orange-500/30">
                                    <span className="text-neutral-cream/50 text-xs leading-relaxed">
                                        노균병·탄저병 두 가지만 놓고 보면 98% 정확도를 달성했습니다. 그러나 흰가루병·갈색무늬병·생리장해 등을 입력하면
                                        AI가 이를 노균 또는 탄저로 잘못 진단하는 <strong className="text-white">확증 편향</strong>이 발생했습니다.
                                        학습 데이터가 노균·탄저에 편중되어 있기 때문입니다. 이 문제를 인지하고
                                        <strong className="text-white"> 의도적으로 전체 정확도를 낮추는 대신 이상증상 발견에 집중</strong>하는 방향으로 전환했습니다.
                                    </span>
                                </li>
                                <li className="flex gap-2"><span className="text-secondary-gold shrink-0">→</span>매일 보내드리는 카톡에 사진을 첨부하여 보내 주시면 AI 개선에 직접 기여하실 수 있습니다.</li>
                            </ul>
                        </div>
                    </motion.div>
                </Container>
            </Section>

            {/* Introduction: Why Photo Only Is Not Enough */}
            <Section className="py-20 border-b border-white/10">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6">
                                        왜 병해진단은 단순한 사진 한 장으로 부족할까요?
                                    </h2>
                                    <div className="space-y-6 text-lg text-neutral-cream/80 leading-relaxed">
                                        <p>
                                            포도 농사에서 가장 흔한 <span className="text-white font-bold">노균병, 흑두병, 그리고 생리장해와 약해</span>는
                                            육안으로 보기에 매우 유사한 양상을 띱니다. 현재 전 세계 어떤 AI 모델도 현장의 복잡한 변수 속에서
                                            사진만으로 이들을 100% 구분해내는 것은 불가능에 가깝습니다.
                                        </p>
                                        <p className="text-secondary-gold font-medium">
                                            FarmSense는 무책임한 정답을 내놓기보다, 농민 여러분이 현상을 정확히 이해하고 대처할 수 있도록 돕는
                                            '데이터 조력자'가 되고자 합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative h-64 md:h-auto min-h-[400px]">
                                    <Image
                                        src="/images/generated/diagnosis_complexity.jpg?v=2"
                                        alt="유사한 병징의 복잡성"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/50 to-transparent md:hidden" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-transparent to-transparent hidden md:block" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Reality Check */}
            <Section className="py-20 bg-neutral-900/50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Items Side */}
                        <div className="space-y-6">
                            {[
                                {
                                    icon: AlertCircle,
                                    title: "비슷한 병징의 함정",
                                    desc: "노균병의 초기 증상과 약해로 인한 잎 변색은 전문가조차 혼동하기 쉽습니다."
                                },
                                {
                                    icon: CloudRain,
                                    title: "환경 데이터의 중요성",
                                    desc: "병은 어느 날 갑자기 생기는 것이 아니라, 특정 온도와 습도 조건이 충족될 때 발생합니다."
                                },
                                {
                                    icon: UserCheck,
                                    title: "농가의 예찰 우선",
                                    desc: "AI는 보조 도구일 뿐입니다. 농가에서 병징을 미리 알고 대처하는 것이 가장 빠른 해결책입니다."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-neutral-black border border-white/10 p-6 md:p-8 rounded-xl hover:border-secondary-gold/30 transition-colors group flex gap-6 items-start"
                                >
                                    <div className="shrink-0 p-3 rounded-lg bg-secondary-gold/10 text-secondary-gold group-hover:scale-110 transition-transform mt-1">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-neutral-cream/70 leading-relaxed text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden border border-white/10"
                        >
                            <Image
                                src="/images/generated/reality_check_side.jpg?v=2"
                                alt="Diagnosis Reality Check"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent lg:bg-gradient-to-l" />
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* FarmSense Process */}
            <Section className="py-20 border-y border-white/10">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">
                        확률로 분석하는 지능형 진단 시스템
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "환경 변수 종합 분석",
                                desc: "농장에 설치된 IoT 센서의 실시간 기록(온도, 습도, 일사량 등)을 분석합니다."
                            },
                            {
                                step: "02",
                                title: "병해 발생 확률 제시",
                                desc: "현재 환경 조건에서 해당 병징이 나타날 통계적 확률을 알려드립니다. (예: 노균병 70%, 약해 30%)"
                            },
                            {
                                step: "03",
                                title: "전문 자료 연동",
                                desc: "농촌진흥청의 실시간 기술 지원 데이터와 연관 사례를 매칭하여 제공합니다."
                            },
                            {
                                step: "04",
                                title: "분석 내용 공유",
                                desc: "같은 지역, 비슷한 환경의 농가들과 분석 내용을 공유하여 함께 토론하고 대처합니다."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-5xl font-serif font-bold text-white/5 absolute top-4 right-4">{item.step}</div>
                                <h3 className="text-lg font-bold text-secondary-gold mb-4 relative z-10">{item.title}</h3>
                                <p className="text-neutral-cream/70 text-sm leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>


            {/* Photo Guide */}
            <Section className="py-20 border-b border-white/10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">
                                영농일지 사진 활용 팁<br />
                                <span className="text-secondary-gold text-2xl">조기 발견의 기술</span>
                            </h2>
                            <p className="text-neutral-cream/70 mb-8">
                                영농일지에 올리는 사진 한 장이 농장 전체를 살립니다.<br />
                                다음과 같이 기록해 보세요.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "잎 뒷면을 찍으세요",
                                        desc: "노균병은 뒷면의 흰 포자로 확진합니다. 앞면만 찍으면 약해와 구분이 거의 불가능합니다."
                                    },
                                    {
                                        title: "전체 분포를 찍으세요",
                                        desc: "특정 구역(예: 약대가 멈췄던 곳)에만 증상이 있다면 약해일 가능성이 큽니다."
                                    },
                                    {
                                        title: "날짜와 매칭하세요",
                                        desc: "증상이 발견된 날짜와 농약 살포 날짜를 비교하는 것만으로도 원인의 80%를 알 수 있습니다."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-secondary-gold text-neutral-black font-bold flex items-center justify-center shrink-0">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-neutral-cream/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] bg-neutral-900/50 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/tech/dss_high_res.jpg"
                                alt="스마트폰으로 포도 잎의 뒷면을 촬영하는 모습"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Resources & Conclusion */}
            <Section className="py-20">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center bg-gradient-to-br from-secondary-gold/20 to-transparent p-12 rounded-3xl border border-secondary-gold/20">
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">
                                FarmSense는 농민의 경험을 존중합니다
                            </h3>
                            <p className="text-neutral-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
                                기술은 거들 뿐, 농사의 주인은 농민입니다.<br />
                                FarmSense는 과학적인 환경 분석 데이터와 AI의 통계적 확률을 결합하여,<br />
                                여러분의 소중한 포도밭을 지키는 가장 객관적인 근거를 제시하겠습니다.
                            </p>
                        </div>

                        {/* 카톡 보고서 안내 */}
                        <div className="mt-12 bg-white/5 border border-secondary-gold/20 rounded-2xl p-8 text-center">
                            <div className="text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-bold text-white mb-3">매일 카톡 보고서를 받아보세요</h3>
                            <p className="text-neutral-cream/60 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
                                FarmSense는 매일 저녁 카톡으로 농장 환경 보고서를 보내드립니다.<br />
                                사진을 습관처럼 올려주시면, AI가 환경 데이터와 결합하여 더 정확한 보고서를 만들어 드립니다.
                            </p>
                            <p className="text-neutral-cream/50 text-xs mb-6 max-w-xl mx-auto">
                                사진이 쌓일수록 보고서의 정확도가 올라갑니다.<br />
                                오늘의 사진 한 장이 내일의 정밀 진단이 됩니다.
                            </p>
                            <a href="/support/ai-assistant" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-gold text-neutral-black font-bold rounded-full hover:brightness-110 transition text-sm">
                                <ArrowRight className="w-4 h-4" /> 카톡 보고서 알아보기
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
