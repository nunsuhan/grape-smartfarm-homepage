'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import {
    Shield, Link2, Hash, QrCode, Lock, ArrowRight, Database,
    CheckCircle, Layers, Globe, FileCheck, PackageCheck, Anchor,
} from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

const CHAIN_LAYERS = [
    {
        label: '기록 단위',
        method: 'SHA-256 해시 재계산 → current_hash 대조',
        guarantee: '개별 레코드 변조 탐지',
        color: '#3B82F6',
    },
    {
        label: '체인 단위',
        method: 'previous_hash 연결 검증 + 시퀀스 연속성',
        guarantee: '삽입 / 삭제 / 순서 변조 탐지',
        color: '#8B5CF6',
    },
    {
        label: '일별 단위',
        method: 'Merkle Root 재계산 → seal.merkle_root 대조',
        guarantee: '당일 전체 데이터 변조 탐지',
        color: '#22C55E',
    },
    {
        label: '봉인 단위',
        method: 'seal_data JSON → SHA-256 → seal_hash 대조',
        guarantee: '봉인 자체의 변조 탐지',
        color: '#F59E0B',
    },
];

const DATA_FLOW = [
    { icon: Database, label: 'IoT / 앱 데이터 수집', desc: '센서, 살포, 수확 기록' },
    { icon: Hash, label: 'SHA-256 해시 체인', desc: 'ImmutableRecord (Append-only)' },
    { icon: Anchor, label: 'DailySeal 봉인', desc: 'Merkle Root + 농가 서명' },
    { icon: QrCode, label: 'QR 코드 발급', desc: '소비자 / 바이어 검증' },
];

const PROTECTION = [
    { level: 'DB 레벨', detail: 'on_delete=PROTECT, Admin 삭제·수정 권한 제거' },
    { level: '모델 레벨', detail: 'save() 시 해시 자동 계산 (최초 생성 시만)' },
    { level: '서비스 레벨', detail: '봉인 후 수정 시 새 버전 생성 (원본 보존)' },
    { level: 'API 레벨', detail: 'QR 코드 기반 외부 검증 (/api/trace/verify/)' },
];

const FUTURE_STEPS = [
    { label: 'Hyperledger Fabric 연동', desc: '분산 원장 앵커링으로 제3자 검증 가능', status: '예정' },
    { label: 'NCP Blockchain Service', desc: '네이버 클라우드 블록체인 서비스 연동 옵션', status: '옵션' },
    { label: 'NFT 인증서', desc: 'LOT별 NFT 발행으로 프리미엄 가치 부여', status: '예정' },
    { label: 'GAP / 수출 인증 연계', desc: '센서 데이터 이력으로 GAP 심사 자동 대응', status: '예정' },
];

export default function BlockchainPage() {
    return (
        <main className="min-h-screen bg-neutral-black pt-20">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.12),transparent_50%)]" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-purple/20 border border-primary-purple/30 text-purple-400 text-sm mb-6">
                            <Shield className="w-4 h-4" />
                            블록체인 추적성 시스템
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
                            중국산 저가 포도에 대한<br />
                            <span className="text-purple-400 text-glow">가격 방어 전략</span>
                        </h1>
                        <p className="text-xl text-neutral-cream/80 max-w-2xl mx-auto leading-relaxed">
                            SHA-256 해시 체인 + Merkle Root 봉인 + QR 코드 검증으로<br />
                            재배 이력의 <span className="text-white font-bold">위변조를 원천 차단</span>합니다.
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* 왜 필요한가 */}
            <section className="py-20 bg-neutral-black/50">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6 text-center">
                            왜 블록체인 추적성인가?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            {[
                                {
                                    icon: Shield,
                                    title: '원산지 증명',
                                    desc: '센서 데이터 + 농약 이력 + 수확 기록을 해시 체인으로 연결하여 국산 포도의 진위를 증명합니다.',
                                    color: '#8B5CF6',
                                },
                                {
                                    icon: PackageCheck,
                                    title: 'GAP·수출 인증',
                                    desc: '봉인된 재배 이력이 GAP 심사 증빙자료로 활용되며, 바이어에게 품질 신뢰를 제공합니다.',
                                    color: '#22C55E',
                                },
                                {
                                    icon: QrCode,
                                    title: '소비자 검증',
                                    desc: 'QR 코드 하나로 소비자가 직접 재배 환경, 농약 사용 내역, 수확일을 확인할 수 있습니다.',
                                    color: '#F59E0B',
                                },
                            ].map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                                    >
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                            style={{ backgroundColor: `${item.color}20` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: item.color }} />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-neutral-cream/70 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 데이터 흐름 */}
            <section className="py-20">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            데이터 흐름
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            수집 → 해시 체인 → 봉인 → QR 검증의 4단계 파이프라인
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {DATA_FLOW.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center h-full">
                                            <div className="w-10 h-10 rounded-full bg-primary-purple/20 flex items-center justify-center mx-auto mb-3">
                                                <span className="text-sm font-bold text-purple-400">{i + 1}</span>
                                            </div>
                                            <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                            <h3 className="text-sm font-bold text-white mb-1">{step.label}</h3>
                                            <p className="text-xs text-neutral-cream/50">{step.desc}</p>
                                        </div>
                                        {i < DATA_FLOW.length - 1 && (
                                            <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 z-10" />
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 위변조 방지 4계층 */}
            <section className="py-20 bg-neutral-black/50">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            위변조 방지 4계층
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            각 계층이 독립적으로 검증하여 어떤 변조도 즉시 탐지합니다
                        </p>

                        <div className="space-y-4">
                            {CHAIN_LAYERS.map((layer, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: `${layer.color}20` }}
                                    >
                                        <Layers className="w-5 h-5" style={{ color: layer.color }} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base font-bold text-white mb-1">{layer.label}</h3>
                                        <p className="text-sm text-neutral-cream/60">{layer.method}</p>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5" style={{ color: layer.color }} />
                                        <span className="text-xs text-neutral-cream/70">{layer.guarantee}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 불변성 보장 장치 */}
            <section className="py-20">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            불변성 보장 장치
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            코드 전 계층에서 데이터 무결성을 보호합니다
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {PROTECTION.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <Lock className="w-4 h-4 text-secondary-gold" />
                                        <h3 className="text-sm font-bold text-white">{item.level}</h3>
                                    </div>
                                    <p className="text-sm text-neutral-cream/60">{item.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 아키텍처 다이어그램 */}
            <section className="py-20 bg-neutral-black/50">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            시스템 아키텍처
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            어댑터 패턴으로 Hyperledger Fabric 전환이 코드 변경 없이 가능합니다
                        </p>

                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 font-mono text-sm">
                            <div className="space-y-6 text-neutral-cream/80">
                                {/* Current */}
                                <div>
                                    <span className="text-secondary-green font-bold">현재 운영 (MVP)</span>
                                    <div className="mt-2 pl-4 border-l-2 border-secondary-green/30 space-y-1">
                                        <p>BlockchainAdapter (ABC)</p>
                                        <p className="pl-4 text-secondary-green">└─ LocalHashChain <span className="text-neutral-cream/40">← 현재 활성</span></p>
                                        <p className="pl-4 text-neutral-cream/40">└─ HyperledgerFabricAdapter <span>← 플러그인 포인트</span></p>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-4">
                                    <span className="text-secondary-gold font-bold">Fallback 전략</span>
                                    <div className="mt-2 pl-4 border-l-2 border-secondary-gold/30 space-y-1 text-xs sm:text-sm">
                                        <p>record() → LocalHashChain.record()</p>
                                        <p className="pl-8">→ Fabric 시도 → <span className="text-secondary-green">성공</span>: tx_id 업데이트</p>
                                        <p className="pl-8 text-neutral-cream/40">→ Fabric 시도 → <span className="text-red-400">실패</span>: local_hash 유지 (서비스 중단 없음)</p>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-4">
                                    <span className="text-purple-400 font-bold">설정 전환</span>
                                    <div className="mt-2 pl-4 border-l-2 border-primary-purple/30 space-y-1 text-xs sm:text-sm">
                                        <p><span className="text-neutral-cream/40"># settings.py</span></p>
                                        <p>BLOCKCHAIN_BACKEND = <span className="text-secondary-green">&apos;traceability.blockchain.LocalHashChain&apos;</span></p>
                                        <p className="text-neutral-cream/40">→ <span className="text-secondary-gold">&apos;traceability.blockchain.HyperledgerFabricAdapter&apos;</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* DailySeal → 수출 서류 대체 */}
            <section className="py-20">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            DailySeal 봉인 = 수출 서류
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            매일 자동 생성되는 DailySeal이 기존 수출 증빙 서류를 대체합니다
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            {/* 기존 방식 */}
                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                                <h3 className="text-lg font-bold text-red-400 mb-4">기존 수출 서류 방식</h3>
                                <div className="space-y-3">
                                    {[
                                        '수기 영농일지 작성 → 스캔 제출',
                                        '농약 사용 대장 별도 관리',
                                        'GAP 심사 시 서류 일괄 준비',
                                        '바이어 요청 시 증빙 수집에 수일 소요',
                                        '서류 위변조 가능성 → 신뢰도 한계',
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-neutral-cream/60">
                                            <span className="text-red-400 mt-0.5">✕</span>
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* DailySeal 방식 */}
                            <div className="p-6 rounded-2xl bg-secondary-green/5 border border-secondary-green/20">
                                <h3 className="text-lg font-bold text-secondary-green mb-4">DailySeal 자동 봉인</h3>
                                <div className="space-y-3">
                                    {[
                                        '센서 데이터 자동 수집 → 매일 봉인',
                                        '농약 살포 기록 해시 체인 자동 연결',
                                        'GAP 심사: DailySeal 이력 즉시 제출',
                                        '바이어 검증: QR 스캔으로 즉시 확인',
                                        'SHA-256 + Merkle Root → 위변조 불가',
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-neutral-cream/60">
                                            <CheckCircle className="w-4 h-4 text-secondary-green shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* DailySeal 포함 내용 */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-base font-bold text-white mb-4 text-center">DailySeal 1건에 포함되는 수출 증빙 데이터</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { title: '환경 센서 요약', detail: '기온·습도·토양수분 min/avg/max', color: '#3B82F6' },
                                    { title: '농약 살포 이력', detail: '약제명, 살포량, 시각, 살포자', color: '#EF4444' },
                                    { title: '비료 시비 기록', detail: 'N-P-K 비율, 시비량, 방법', color: '#22C55E' },
                                    { title: '이상 알림 내역', detail: '병해 위험도, 센서 이상, 대응 조치', color: '#F59E0B' },
                                    { title: 'Merkle Root', detail: '당일 전체 기록의 해시 트리 루트', color: '#8B5CF6' },
                                    { title: '농가 서명', detail: '봉인 확인 서명 + 타임스탬프', color: '#EC4899' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                                        <div
                                            className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                                            style={{ backgroundColor: item.color }}
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-white">{item.title}</p>
                                            <p className="text-xs text-neutral-cream/50">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 수출 / 바이어 설명 */}
            <section className="py-20 bg-neutral-black/50">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-12 text-center">
                            수출 · 바이어 문서
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Globe className="w-5 h-5 text-secondary-gold" />
                                    <h3 className="text-lg font-bold text-white">English Summary</h3>
                                </div>
                                <p className="text-sm text-neutral-cream/70 leading-relaxed">
                                    All farm records (sensor data, pesticide application, harvest)
                                    are stored in a <span className="text-white font-medium">SHA-256 hash chain</span> with
                                    per-farm sequencing. Daily records are aggregated into a
                                    <span className="text-white font-medium"> Merkle tree</span>, and the root hash
                                    is sealed into a <span className="text-white font-medium">DailySeal</span> with farmer signature.
                                    Each DailySeal serves as a <span className="text-white font-medium">digital export certificate</span>,
                                    replacing traditional paper-based compliance documentation for GAP
                                    certification and buyer due diligence. Tamper-evident daily snapshots
                                    are verifiable via QR code.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <FileCheck className="w-5 h-5 text-secondary-green" />
                                    <h3 className="text-lg font-bold text-white">한글 요약</h3>
                                </div>
                                <p className="text-sm text-neutral-cream/70 leading-relaxed">
                                    모든 농장 데이터(센서, 농약 살포, 수확)를 SHA-256 해시 체인에 기록합니다.
                                    매일 자동으로 <span className="text-white font-medium">Merkle Root</span>를 계산하고
                                    봉인하여 데이터의 위변조를 원천 차단합니다.
                                    DailySeal은 <span className="text-white font-medium">디지털 수출 증빙 서류</span>로서
                                    기존 수기 서류를 대체하며, GAP 인증 심사와 바이어 실사에 즉시 활용됩니다.
                                    QR 코드로 외부 검증이 가능하며, 향후 Hyperledger Fabric 등 분산 원장으로 확장 가능한 구조입니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* LOT 관리 및 QR 검증 */}
            <section className="py-20 bg-neutral-black/50">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            LOT 관리 · QR 검증
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            수확 단위(LOT)별 이력을 관리하고 소비자가 직접 검증합니다
                        </p>

                        <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
                            <div className="grid md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-secondary-green/20 flex items-center justify-center mx-auto mb-4">
                                        <Link2 className="w-8 h-8 text-secondary-green" />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">LOT 등록</h3>
                                    <p className="text-sm text-neutral-cream/60">
                                        수확 단위별 이력 관리<br />
                                        기간별 DailySeal 집합 → Merkle Root
                                    </p>
                                </div>
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-primary-purple/20 flex items-center justify-center mx-auto mb-4">
                                        <QrCode className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">QR 코드 생성</h3>
                                    <p className="text-sm text-neutral-cream/60">
                                        LOT 정보 + 검증 URL 인코딩<br />
                                        포장지·라벨 부착
                                    </p>
                                </div>
                                <div>
                                    <div className="w-16 h-16 rounded-2xl bg-secondary-gold/20 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-secondary-gold" />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">소비자 검증</h3>
                                    <p className="text-sm text-neutral-cream/60">
                                        /api/trace/verify/&#123;qr_code&#125;/<br />
                                        재배 환경 · 농약 이력 · 수확일 확인
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 향후 확장 로드맵 */}
            <section className="py-20">
                <Container>
                    <motion.div {...fadeUp} className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 text-center">
                            확장 로드맵
                        </h2>
                        <p className="text-center text-neutral-cream/60 mb-12">
                            현재 MVP에서 분산 원장 · NFT까지의 확장 계획
                        </p>

                        <div className="space-y-4">
                            {FUTURE_STEPS.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-center gap-4 p-5 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <div className="w-8 h-8 rounded-full bg-primary-purple/20 flex items-center justify-center shrink-0">
                                        <span className="text-xs font-bold text-purple-400">{i + 1}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold text-white">{step.label}</h3>
                                        <p className="text-xs text-neutral-cream/50">{step.desc}</p>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-secondary-gold/20 text-secondary-gold shrink-0">
                                        {step.status}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>
        </main>
    );
}
