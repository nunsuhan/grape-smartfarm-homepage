'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import {
    QrCode,
    Lock,
    ShieldCheck,
    ArrowDown,
    Smartphone,
    Eye,
    FileCheck,
    UserCheck,
    Truck,
    CheckCircle2,
} from 'lucide-react';

const farmerSteps = [
    {
        step: '1',
        title: '평소대로 앱 사용',
        desc: '센서 데이터 자동 수집, 살포·비료·수확 기록을 앱에서 입력하면 끝',
        icon: Smartphone,
        note: '농가가 할 일은 이것뿐',
        color: 'text-blue-400',
    },
    {
        step: '2',
        title: '매일 자동 봉인',
        desc: '매일 자정, 하루치 기록이 자동으로 SHA-256 해시 봉인됩니다',
        icon: Lock,
        note: '수동 조작 불필요',
        color: 'text-violet-400',
    },
    {
        step: '3',
        title: 'QR 코드 부착',
        desc: '수확 후 QR 코드를 생성해서 박스에 부착하면 이력추적 완료',
        icon: QrCode,
        note: '앱에서 QR 생성 → 인쇄',
        color: 'text-secondary-gold',
    },
    {
        step: '4',
        title: '바이어·검역관 검증',
        desc: 'QR 스캔 한 번으로 생산 이력·검역 적합성·봉인 상태를 즉시 확인',
        icon: Eye,
        note: '별도 서류 제출 불필요',
        color: 'text-secondary-green',
    },
];

const whySealing = [
    {
        icon: ShieldCheck,
        title: '수출 신뢰 확보',
        desc: '바이어가 QR 스캔만으로 데이터 조작 여부 즉시 확인 — 수출 계약 성사율 UP',
    },
    {
        icon: UserCheck,
        title: '농가 보호',
        desc: '허위 고발·오해 발생 시 블록체인 기록이 법적 증거로 농가를 보호합니다',
    },
    {
        icon: FileCheck,
        title: '수출 서류 자동화',
        desc: '기존 수일 걸리던 수출 서류를 실시간 PDF로 자동 생성, 검역 보고서 포함',
    },
    {
        icon: Truck,
        title: '글로벌 기준 충족',
        desc: '일본·미국·EU 등 주요 수입국의 이력추적 요구사항을 자동으로 충족합니다',
    },
];

const qrInfo = [
    { label: '품종·농장 정보', value: 'Shine Muscat, 농장 ID' },
    { label: '총 기록 수', value: '센서·살포·비료·수확' },
    { label: '해시체인 검증', value: '정상 / 이상 여부' },
    { label: '검역 판정', value: 'pass · warning · fail' },
    { label: '농약 안전기간', value: 'PHI 준수 자동 확인' },
    { label: '봉인 상태', value: '최근 봉인 해시 + 일자' },
];

export function BlockchainTraceability() {
    return (
        <Section id="blockchain-traceability" dark className="overflow-hidden">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4"
                    >
                        Blockchain Traceability
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        기록만 하세요,<br />
                        <span className="text-violet-400">봉인은 자동입니다</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-cream/70 max-w-2xl mx-auto text-lg"
                    >
                        블록체인 기술이 어렵게 느껴지시나요?
                        농가는 앱만 사용하면 됩니다. 봉인·검증·증명은 시스템이 알아서 합니다.
                    </motion.p>
                </div>

                {/* Farmer Usage Flow */}
                <div className="max-w-3xl mx-auto mb-20">
                    <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center text-xl font-bold text-white mb-10"
                    >
                        농가 이용 흐름 4단계
                    </motion.h4>

                    <div className="space-y-3">
                        {farmerSteps.map((step, i) => (
                            <div key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-gold/30 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-gold/10 flex items-center justify-center">
                                        <span className="text-lg font-mono font-bold text-secondary-gold">{step.step}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <h5 className="text-lg font-bold text-white">{step.title}</h5>
                                            <step.icon className={`w-5 h-5 ${step.color}`} />
                                        </div>
                                        <p className="text-sm text-neutral-cream/70 mb-1">{step.desc}</p>
                                        <span className="text-xs font-mono text-secondary-green/70">{step.note}</span>
                                    </div>
                                </motion.div>
                                {i < farmerSteps.length - 1 && (
                                    <div className="flex justify-center py-1">
                                        <ArrowDown className="w-4 h-4 text-white/15" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Sealing - Farmer Benefit Focus */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {whySealing.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <item.icon className="w-7 h-7 text-secondary-gold" />
                                <h5 className="text-lg font-bold text-white">{item.title}</h5>
                            </div>
                            <p className="text-sm text-neutral-cream/70 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* QR Scan Result Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto"
                >
                    <h4 className="text-center text-xl font-bold text-white mb-8">
                        바이어가 QR 스캔하면 보이는 정보
                    </h4>

                    <div className="p-6 rounded-2xl bg-white/5 border border-secondary-gold/20">
                        {/* Mock QR Header */}
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                <QrCode className="w-10 h-10 text-neutral-800" />
                            </div>
                            <div>
                                <div className="text-xs font-mono text-secondary-gold">KR-2026-SM-15-LOT001</div>
                                <div className="text-lg font-bold text-white">Shine Muscat</div>
                                <div className="flex items-center gap-1 text-xs text-secondary-green">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>검역 적합 (PASS)</span>
                                </div>
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            {qrInfo.map((info, i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/5">
                                    <div className="text-[10px] font-mono text-neutral-cream/40 uppercase mb-1">{info.label}</div>
                                    <div className="text-sm text-white">{info.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-xs text-neutral-cream/40 mt-4">
                        바이어·소비자 누구나 QR 스캔으로 생산 이력을 투명하게 확인할 수 있습니다
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
}
