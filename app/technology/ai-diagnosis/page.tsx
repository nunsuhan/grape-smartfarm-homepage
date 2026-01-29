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
                    </motion.div>
                </Container>
            </Section>

            {/* Introduction: Why Photo Only Is Not Enough */}
            <Section className="py-20 border-b border-white/5">
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
            <Section className="py-20 border-y border-white/5">
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

            {/* Detailed Comparison: Mildew vs Burn */}
            <Section className="py-20 bg-neutral-900">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-secondary-gold font-bold tracking-wider uppercase text-sm">Focus</span>
                            <h2 className="text-3xl font-serif font-bold text-white mt-2 mb-6">
                                헷갈리는 포도 잎 증상: 노균병인가, 약해인가?
                            </h2>
                            <p className="text-neutral-cream/70">
                                포도 농사에서 가장 구분하기 어려운 것이 바로 노균병(질병)과 약해(생리장해)입니다.<br />
                                FarmSense는 육안의 한계를 넘기 위해 발생 환경을 분석합니다.
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto mb-16 rounded-xl border border-white/10 shadow-2xl">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="p-6 text-white font-bold border-b border-white/10 w-1/4">구분</th>
                                        <th className="p-6 text-red-300 font-bold border-b border-white/10 w-1/3">노균병 (Downy Mildew)</th>
                                        <th className="p-6 text-blue-300 font-bold border-b border-white/10 w-1/3">약해 (Pesticide Burn)</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-neutral-black text-neutral-cream/80">
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-white">주요 원인</td>
                                        <td className="p-6">곰팡이균 <span className="text-neutral-500 text-sm">(습한 환경)</span></td>
                                        <td className="p-6">농약 살포 오류 <span className="text-neutral-500 text-sm">(희석 배수, 고온기)</span></td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-white">잎 앞면</td>
                                        <td className="p-6">부정형의 노란 '기름 얼룩' 형태 증상</td>
                                        <td className="p-6">잎 가장자리나 약제가 고인 부분에 갈색 반점</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-white">잎 뒷면</td>
                                        <td className="p-6 text-red-300 font-medium">흰색 곰팡이(포자)가 솜털처럼 형성</td>
                                        <td className="p-6">곰팡이가 없으며 깨끗함</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-white">발생 시기</td>
                                        <td className="p-6">장마철, 야간 습도가 높고 선선할 때</td>
                                        <td className="p-6">농약 살포 직후 2~3일 이내 급격히 발생</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-white">확산 여부</td>
                                        <td className="p-6">시간이 지날수록 주변 잎과 나무로 확산</td>
                                        <td className="p-6">더 이상 번지지 않고 정체됨</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Environment Checklist */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                    <Thermometer className="w-5 h-5" /> 노균병일 확률이 높은 경우
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-neutral-cream/80">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span>최근 비가 자주 왔거나 상대 습도가 80% 이상 지속된 경우</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-cream/80">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span>야간 온도가 15~25°C 사이로 선선한 상태가 유지된 경우</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-blue-950/20 border border-blue-500/20 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
                                    <CloudSun className="w-5 h-5" /> 약해일 확률이 높은 경우
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-neutral-cream/80">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span>농약 살포 당일 낮 최고 기온이 30°C 이상의 고온이었던 경우</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-neutral-cream/80">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <span>최근 서로 다른 계통의 농약을 혼용하여 살포한 이력이 있는 경우</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Photo Guide */}
            <Section className="py-20 border-b border-white/5">
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
                        <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">더 자세한 정보 검색</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                            {[
                                {
                                    icon: Search,
                                    title: "현장애로기술사례",
                                    code: "elctrnCvpl",
                                    desc: "실제 농가들이 겪은 노균병과 약해의 상담 사례 키워드 조회"
                                },
                                {
                                    icon: BookOpen,
                                    title: "농업용어사전",
                                    code: "farmDic",
                                    desc: "'노균병'이나 '약해'의 정확한 정의와 병징 설명 확인"
                                },
                                {
                                    icon: UserCheck,
                                    title: "현장기술지원",
                                    code: "sptTchnlgySport",
                                    desc: "전문가들이 현장에서 진단한 유사 사례 리포트 참고"
                                }
                            ].map((item, i) => (
                                <a key={i} href="#" className="block p-6 bg-neutral-900 rounded-xl border border-white/10 hover:border-secondary-gold/50 transition-colors group">
                                    <item.icon className="w-8 h-8 text-neutral-500 group-hover:text-secondary-gold mb-4 transition-colors" />
                                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                    <code className="text-xs font-mono text-white/30 mb-3 block">{item.code}</code>
                                    <p className="text-sm text-neutral-cream/60">{item.desc}</p>
                                </a>
                            ))}
                        </div>

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
                    </div>
                </Container>
            </Section>
        </main>
    );
}
