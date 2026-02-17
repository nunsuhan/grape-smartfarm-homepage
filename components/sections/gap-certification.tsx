'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import {
    FlaskConical,
    Droplets,
    Leaf,
    Grape,
    BookOpen,
    GraduationCap,
    CheckCircle2,
    Sparkles,
    Bell,
} from 'lucide-react';

const gapSteps = [
    {
        icon: FlaskConical,
        title: '토양·수질 검사',
        color: 'text-amber-400',
        bgColor: 'bg-amber-400/10',
        what: '농업기술센터에서 검사받기',
        how: '검사 성적서를 앱에서 촬영하면 자동 등록',
        auto: '적합/부적합 자동 판정, 갱신 시기 알림',
        cycle: '1년 1회 필수',
    },
    {
        icon: Leaf,
        title: '비료 사용 기록',
        color: 'text-green-400',
        bgColor: 'bg-green-400/10',
        what: '비료 시비할 때마다 기록',
        how: '비료 바코드 스캔 → 사용량 입력 → 자동 저장',
        auto: 'AI가 GAP 기준에 맞는 시비량 추천',
        cycle: '시비 시마다',
    },
    {
        icon: Grape,
        title: '수확 기록',
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/10',
        what: '수확할 때 품질·수량 기록',
        how: '등급 선택 + 수확량 입력, 당도·산도 측정값 기록',
        auto: 'PHI(안전사용기간) 자동 확인 → 수확 가능 여부 알림',
        cycle: '수확 시마다',
    },
    {
        icon: BookOpen,
        title: '영농일지',
        color: 'text-secondary-gold',
        bgColor: 'bg-secondary-gold/10',
        what: '매일의 농작업 기록',
        how: '센서·날씨·작업 내역이 자동으로 일지에 통합',
        auto: '별도 작성 불필요 — FarmSense가 매일 자동 생성',
        cycle: '매일 자동',
    },
    {
        icon: GraduationCap,
        title: '교육 이수',
        color: 'text-pink-400',
        bgColor: 'bg-pink-400/10',
        what: 'GAP 기본교육 수료하기',
        how: '수료증 촬영 → 앱에 등록, 유효기간 자동 추적',
        auto: '갱신 30일 전 알림, 교육기관 안내',
        cycle: 'GAP 인증 전 필수',
    },
    {
        icon: Droplets,
        title: '농약 살포 기록',
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/10',
        what: '농약 살포할 때마다 기록',
        how: '농약 바코드 스캔 → 살포량·면적 입력, GPS 자동 기록',
        auto: 'PLS 적합 여부 + PHI 수확 가능일 자동 계산',
        cycle: '살포 시마다',
    },
];

const automations = [
    {
        icon: Sparkles,
        title: '영농일지 → GAP 기록 자동 변환',
        desc: '평소대로 앱에 작업 기록만 하면 GAP 필수 기록이 자동 생성됩니다',
    },
    {
        icon: Bell,
        title: '누락·갱신 알림',
        desc: '토양검사 만료, 교육 갱신, 미등록 기록이 있으면 푸시 알림으로 안내합니다',
    },
    {
        icon: CheckCircle2,
        title: '수출 준비도 자동 점수',
        desc: '6대 기록 완성도를 0~100%로 계산, 80% 이상이면 수출 준비 완료 표시',
    },
];

export function GAPCertification() {
    return (
        <Section id="gap-certification" className="bg-neutral-black">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4"
                    >
                        GAP Certification Guide
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        GAP 인증, 이렇게 하세요<br />
                        <span className="text-secondary-green">FarmSense가 대부분 자동화</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-cream/90 max-w-2xl mx-auto text-lg"
                    >
                        GAP 인증에 필요한 6가지 기록 — 바코드 스캔과 간단한 입력만 하면
                        나머지는 FarmSense가 알아서 정리합니다
                    </motion.p>
                </div>

                {/* How-To Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {gapSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-gold/30 transition-colors"
                        >
                            {/* Title */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                                    <step.icon className={`w-5 h-5 ${step.color}`} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                    <span className="text-xs font-mono text-secondary-green">{step.cycle}</span>
                                </div>
                            </div>

                            {/* What / How / Auto */}
                            <div className="space-y-3">
                                <div>
                                    <div className="text-[10px] font-mono text-secondary-gold/80 uppercase mb-1">농가가 할 일</div>
                                    <p className="text-sm text-white font-medium">{step.what}</p>
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-blue-400/80 uppercase mb-1">앱에서 하는 법</div>
                                    <p className="text-sm text-neutral-cream/90">{step.how}</p>
                                </div>
                                <div className="pt-2 border-t border-white/10">
                                    <div className="text-[10px] font-mono text-secondary-green/80 uppercase mb-1">자동화 기능</div>
                                    <p className="text-sm text-secondary-green/80">{step.auto}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Automation Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h4 className="text-center text-xl font-bold text-white mb-8">
                        농가는 농사에 집중, 서류는 FarmSense가
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {automations.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-secondary-gold/20 text-center"
                            >
                                <item.icon className="w-8 h-8 text-secondary-gold mx-auto mb-3" />
                                <h5 className="text-sm font-bold text-white mb-2">{item.title}</h5>
                                <p className="text-xs text-neutral-cream/80 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Export Score Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl bg-white/5 border border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-1 text-center md:text-left">
                            <h5 className="text-lg font-bold text-white mb-2">수출 준비 완료도</h5>
                            <p className="text-sm text-neutral-cream/80">
                                6가지 기록을 채울수록 점수가 올라갑니다.<br />
                                80% 이상이면 수출 준비 완료!
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="flex justify-between text-xs text-neutral-cream/50 mb-2">
                                <span>0%</span>
                                <span className="text-secondary-gold font-bold">80% 수출 가능</span>
                                <span>100%</span>
                            </div>
                            <div className="relative h-4 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '85%' }}
                                    transition={{ delay: 0.5, duration: 1.2 }}
                                    className="h-full rounded-full bg-gradient-to-r from-secondary-gold to-secondary-green"
                                />
                                <div className="absolute left-[80%] top-0 h-full w-px bg-white/40" />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-2xl font-mono font-bold text-secondary-green">85%</span>
                                <span className="text-xs text-neutral-cream/50 ml-1">예시</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* GAP 인증 비용 안내 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <p className="text-sm text-neutral-cream/50">
                        GAP 인증 신청수수료 5만원 · 유효기간 2년 · 정부 지원 시 50~70% 감면
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
}
