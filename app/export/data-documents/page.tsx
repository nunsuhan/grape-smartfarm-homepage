'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    FileText, Shield, Hash, QrCode, Lock, ArrowRight, ArrowDown,
    CheckCircle2, XCircle, Smartphone, Eye, Layers, Globe,
    FileCheck, Database, Anchor, PackageCheck, ClipboardCheck,
} from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

/* ────────── 기존 수출 서류 목록 ────────── */
const traditionalDocs = [
    { name: '영농일지', desc: '매일 작업 내역을 수기 기록', pain: '빠짐없이 작성하기 어렵고, 분실 위험', digital: true },
    { name: '농약사용대장', desc: '살포 약제·일자·량 기록', pain: '기준 초과 여부 수동 확인 필요', digital: true },
    { name: 'GAP 인증서', desc: '우수농산물관리 인증 증명', pain: '유효기간 관리, 갱신 누락 위험', digital: false },
    { name: '검역증명서', desc: '수출 농산물 검역 적합 증명', pain: '발급에 3~5일 소요, 현장 심사 필요', digital: false },
    { name: '원산지증명서', desc: '원산지 확인 (FTA 활용)', pain: '발급 기관 방문 또는 온라인 신청', digital: false },
    { name: '잔류농약검사성적서', desc: '농약 잔류량 적합 판정', pain: '검사 기관 의뢰, 결과까지 7~14일', digital: false },
    { name: '토양검정성적서', desc: '토양 유해물질 검사 결과', pain: '연 1회 필수, 갱신 잊기 쉬움', digital: true },
    { name: '수질검사성적서', desc: '농업용수 적합성 확인', pain: '검사 주기 관리 필요', digital: true },
];

/* ────────── DailySeal 봉인 원리 ────────── */
const sealSteps = [
    {
        step: 1,
        title: '데이터 수집',
        desc: 'IoT 센서(온·습도, 토양수분 등)와 앱 입력(살포, 수확 등)으로 기록이 자동 생성됩니다.',
        icon: Database,
        color: 'bg-blue-500/15 text-blue-400',
    },
    {
        step: 2,
        title: 'SHA-256 해시 체인',
        desc: '각 기록에 SHA-256 해시를 계산하고, 이전 기록의 해시와 연결합니다. 한 글자라도 바뀌면 전체 체인이 깨집니다.',
        icon: Hash,
        color: 'bg-violet-500/15 text-violet-400',
    },
    {
        step: 3,
        title: 'Merkle Root 봉인',
        desc: '매일 자정, 하루치 기록들의 해시를 트리 구조로 합산하여 Merkle Root를 생성합니다. 이것이 DailySeal입니다.',
        icon: Anchor,
        color: 'bg-green-500/15 text-green-400',
    },
    {
        step: 4,
        title: 'QR 코드 발급',
        desc: '수확 후 로트(LOT)별 QR 코드를 생성합니다. 바이어가 스캔하면 봉인 상태와 전체 이력을 확인할 수 있습니다.',
        icon: QrCode,
        color: 'bg-amber-500/15 text-amber-400',
    },
];

/* ────────── QR 검증 정보 ────────── */
const qrVerifyInfo = [
    { label: '농장·품종', value: '생산지, 품종, 재배 면적' },
    { label: '센서 기록 수', value: '온습도·토양·조도 등 일별 데이터' },
    { label: '살포 기록', value: '약제명, 날짜, 사용량, PHI 준수 여부' },
    { label: '해시체인 검증', value: '정상(Intact) / 변조 감지(Tampered)' },
    { label: '검역 적합', value: 'PASS / WARNING / FAIL 자동 판정' },
    { label: '봉인 상태', value: '최근 DailySeal 해시값 + 봉인 일시' },
];

/* ────────── 바이어 실사 대응 ────────── */
const buyerResponse = [
    {
        scenario: '바이어가 "지난 6개월 살포 기록 보내달라" 요청',
        traditional: '수기 대장 사진 촬영 → 이메일 → 영문 번역 별도',
        farmsense: '앱에서 기간 선택 → PDF 자동 생성 → 영문 리포트 포함 → 1분 완료',
        icon: FileText,
    },
    {
        scenario: '수입국 검역관이 "이 데이터가 조작되지 않았다는 증거" 요구',
        traditional: '증명 방법 없음 — 신뢰 기반 거래에 의존',
        farmsense: 'QR 스캔 → SHA-256 해시체인 검증 → Merkle Root 대조 → 수학적 증명',
        icon: Shield,
    },
    {
        scenario: '대형마트 바이어가 "GAP 6대 기록 전체" 확인 요청',
        traditional: '파일철 복사 → 택배 발송 → 2~3일 소요',
        farmsense: 'GAP 심사모드 → 기간 선택 → PDF 묶음 즉시 출력 / 이메일 전송',
        icon: ClipboardCheck,
    },
];

export default function DataDocumentsPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Hero */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-violet-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-violet-600" />
                            Export · Data Strategy
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            수출 서류 데이터 전략
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed">
                            종이 서류 시대는 끝났습니다.
                            블록체인 DailySeal이 만드는 <strong className="text-violet-400">위조 불가능한 디지털 증빙</strong>으로
                            바이어 신뢰를 확보하세요.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl py-12 space-y-20">
                {/* ── 1. 기존 수출 서류 현황 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
                        기존 수출에 필요한 서류들
                    </motion.h2>
                    <p className="text-neutral-cream/70 mb-8">
                        수출 농산물에는 다양한 서류가 요구됩니다. FarmSense는 이 중 디지털화 가능한 서류를 자동 생성합니다.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b-2 border-white/10">
                                    <th className="text-left py-3 px-4 font-bold text-white">서류명</th>
                                    <th className="text-left py-3 px-4 font-bold text-white hidden md:table-cell">설명</th>
                                    <th className="text-left py-3 px-4 font-bold text-white">기존 어려움</th>
                                    <th className="text-center py-3 px-4 font-bold text-white">자동화</th>
                                </tr>
                            </thead>
                            <tbody>
                                {traditionalDocs.map((doc, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-b border-neutral-100 hover:bg-white/5"
                                    >
                                        <td className="py-3 px-4 font-medium text-white">{doc.name}</td>
                                        <td className="py-3 px-4 text-neutral-cream/60 hidden md:table-cell">{doc.desc}</td>
                                        <td className="py-3 px-4 text-neutral-cream/70">{doc.pain}</td>
                                        <td className="py-3 px-4 text-center">
                                            {doc.digital ? (
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                                            ) : (
                                                <span className="text-xs text-neutral-cream/50">수동</span>
                                            )}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── 2. DailySeal 봉인 원리 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
                        DailySeal: SHA-256 + Merkle Root 봉인
                    </motion.h2>
                    <p className="text-neutral-cream/70 mb-8">
                        매일의 농업 데이터를 암호학적으로 봉인합니다. 한 글자라도 변경하면 해시가 완전히 달라져 조작을 즉시 감지합니다.
                    </p>

                    <div className="space-y-4">
                        {sealSteps.map((step, i) => (
                            <div key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-violet-300 transition-colors"
                                >
                                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}>
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-mono font-bold text-violet-400">STEP {step.step}</span>
                                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-neutral-cream/70 leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                                {i < sealSteps.length - 1 && (
                                    <div className="flex justify-center py-1">
                                        <ArrowDown className="w-4 h-4 text-neutral-cream/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Hash Example */}
                    <motion.div
                        {...fadeUp}
                        className="mt-8 p-6 rounded-xl bg-neutral-900 text-white font-mono text-xs overflow-x-auto"
                    >
                        <div className="text-neutral-cream/50 mb-2"># 예시: 농약 살포 기록의 SHA-256 해시</div>
                        <div className="text-green-400 mb-1">input: {`{date:"2026-06-15", chemical:"포리옥신", amount:"500ml", field:"A-1"}`}</div>
                        <div className="text-amber-400">hash:  a3f2b8c1...e7d4 (64자리 16진수)</div>
                        <div className="text-neutral-cream/50 mt-3"># 사용량을 &quot;500ml&quot; → &quot;400ml&quot;로 변경하면?</div>
                        <div className="text-red-400">hash:  7e91d0f5...1a8b (완전히 다른 해시 → 변조 감지)</div>
                    </motion.div>
                </section>

                {/* ── 3. QR 코드 검증 시스템 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
                        QR 코드 검증 시스템
                    </motion.h2>
                    <p className="text-neutral-cream/70 mb-8">
                        바이어나 소비자가 QR 코드를 스캔하면 다음 정보를 즉시 확인할 수 있습니다.
                    </p>

                    <motion.div
                        {...fadeUp}
                        className="p-6 rounded-xl bg-white/5 border border-white/10"
                    >
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                            <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <QrCode className="w-10 h-10 text-neutral-cream/80" />
                            </div>
                            <div>
                                <div className="text-xs font-mono text-violet-400">KR-2026-SM-15-LOT001</div>
                                <div className="text-lg font-bold text-white">Shine Muscat</div>
                                <div className="flex items-center gap-1 text-xs text-green-400">
                                    <CheckCircle2 className="w-3 h-3" />
                                    검역 적합 (PASS) · 해시체인 정상
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {qrVerifyInfo.map((info, i) => (
                                <div key={i} className="p-3 rounded-lg bg-white/5 border border-neutral-100">
                                    <div className="text-[10px] font-mono text-neutral-cream/50 uppercase mb-1">{info.label}</div>
                                    <div className="text-sm text-white font-medium">{info.value}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── 4. 바이어 실사 대응 전략 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
                        바이어 실사 대응 전략
                    </motion.h2>
                    <p className="text-neutral-cream/70 mb-8">
                        실제 수출 현장에서 자주 발생하는 요청 시나리오와 FarmSense의 대응 방식을 비교합니다.
                    </p>

                    <div className="space-y-6">
                        {buyerResponse.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="rounded-xl border border-white/10 overflow-hidden"
                            >
                                <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
                                    <item.icon className="w-5 h-5 text-violet-400" />
                                    <span className="font-bold text-white text-sm">{item.scenario}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-4 border-b md:border-b-0 md:border-r border-neutral-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <XCircle className="w-4 h-4 text-red-400" />
                                            <span className="text-xs font-bold text-red-400 uppercase">기존 방식</span>
                                        </div>
                                        <p className="text-sm text-neutral-cream/70">{item.traditional}</p>
                                    </div>
                                    <div className="p-4 bg-green-500/10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            <span className="text-xs font-bold text-green-400 uppercase">FarmSense</span>
                                        </div>
                                        <p className="text-sm text-green-300">{item.farmsense}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── 5. FarmSense 자동화 흐름 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
                        FarmSense 데이터 자동화 흐름
                    </motion.h2>
                    <motion.div
                        {...fadeUp}
                        className="p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-center">
                            {[
                                { icon: Smartphone, label: '앱 입력 / 센서', sub: '농가 일상 기록' },
                                { icon: Database, label: 'ImmutableRecord', sub: '해시 체인 저장' },
                                { icon: Lock, label: 'DailySeal 봉인', sub: '매일 자정 자동' },
                                { icon: FileCheck, label: 'PDF 리포트', sub: 'GAP + 수출 서류' },
                                { icon: QrCode, label: 'QR 검증', sub: '바이어 즉시 확인' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-0 md:flex-col">
                                    {i > 0 && (
                                        <ArrowRight className="w-5 h-5 text-violet-400 md:hidden" />
                                    )}
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-white/5 border border-violet-500/20 flex items-center justify-center mb-2">
                                            <item.icon className="w-5 h-5 text-violet-400" />
                                        </div>
                                        <span className="text-xs font-bold text-white">{item.label}</span>
                                        <span className="text-[10px] text-neutral-cream/60">{item.sub}</span>
                                    </div>
                                    {i < 4 && (
                                        <ArrowRight className="w-4 h-4 text-violet-300 hidden md:block mt-[-24px] mx-2" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* ── CTA ── */}
                <section className="border-t border-white/10 pt-12">
                    <h3 className="text-xl font-bold text-white mb-6">수출 · 인증 더 알아보기</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'GAP 인증 완벽 가이드', href: '/export/gap-certification', desc: '인증 절차 6단계' },
                            { label: '주요국 수출 요건', href: '/export/country-requirements', desc: '일본·미국·EU 기준' },
                            { label: '수출 준비 로드맵', href: '/export/roadmap', desc: '12개월 3단계 전략' },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group p-5 rounded-xl border border-white/10 hover:border-violet-300 hover:bg-violet-500/10 transition-all"
                            >
                                <h4 className="font-bold text-white group-hover:text-violet-400 mb-1 flex items-center gap-2">
                                    {link.label}
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h4>
                                <p className="text-sm text-neutral-cream/60">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            </Container>
        </main>
    );
}
