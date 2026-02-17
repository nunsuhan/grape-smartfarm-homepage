'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Globe, CheckCircle2, AlertTriangle, FileText, Thermometer,
    Shield, ArrowRight, ChevronDown, Truck, Package, Leaf,
    ClipboardCheck, Building2,
} from 'lucide-react';
import { clsx } from 'clsx';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

/* ────────── 국가별 수출 요건 ────────── */
const countries = [
    {
        id: 'japan',
        flag: '🇯🇵',
        name: '일본',
        color: 'border-red-400/30 bg-red-500/10',
        accentColor: 'text-red-400',
        tagColor: 'bg-red-500/20 text-red-300',
        overview: '한국산 포도의 최대 수출 시장. 식물검역과 잔류농약 기준이 매우 엄격합니다.',
        sections: [
            {
                title: '식물검역',
                items: [
                    '수출검역증명서 필수 (농림축산검역본부 발급)',
                    '꽃매미, 감귤궤양병균 등 금지 병해충 검사',
                    '훈증 처리 필요 시 메틸브로마이드(MB) 또는 저온처리',
                    '식물검역소 현장 검사 후 합격 시 선적 가능',
                ],
            },
            {
                title: '잔류농약 기준',
                items: [
                    '일본 후생노동성 식품위생법 기준 적용',
                    '일률기준: 미등록 농약 0.01ppm (한국 PLS와 유사)',
                    '포도 주요 농약별 MRL(잔류허용기준) 사전 확인 필수',
                    '출하 전 민간 검사기관 사전 검사 권장',
                ],
            },
            {
                title: '필요 서류',
                items: [
                    '식물검역증명서 (Phytosanitary Certificate)',
                    '원산지증명서 (Certificate of Origin)',
                    '선하증권 (B/L) 또는 항공화물운송장 (AWB)',
                    '상업송장 (Commercial Invoice), 포장명세서 (Packing List)',
                    '잔류농약검사성적서 (바이어 요청 시)',
                ],
            },
            {
                title: '콜드체인·물류',
                items: [
                    '포도: 0~2°C, 상대습도 90~95% 유지',
                    '항공 운송 기준 수확 후 48시간 이내 도착 목표',
                    'MAP(Modified Atmosphere Packaging) 포장 권장',
                    'pre-cooling(예냉) 필수: 수확 후 4시간 이내 5°C 이하',
                ],
            },
        ],
    },
    {
        id: 'usa',
        flag: '🇺🇸',
        name: '미국',
        color: 'border-blue-400/30 bg-blue-500/10',
        accentColor: 'text-blue-400',
        tagColor: 'bg-blue-500/20 text-blue-300',
        overview: 'FDA 등록과 FSMA 준수가 핵심. 2026년부터 이력추적 Section 204가 본격 시행됩니다.',
        sections: [
            {
                title: 'FDA 규제',
                items: [
                    '식품시설등록(FFR): 미국에 식품을 수출하는 모든 시설 등록 필수',
                    '사전통보(Prior Notice): 화물 도착 전 FDA에 사전 신고',
                    'FSVP(외국공급자검증프로그램): 미국 수입자가 해외 공급자 검증 의무',
                    '농산물 안전 규칙(Produce Safety Rule): 재배·수확·포장 단계 안전 기준',
                ],
            },
            {
                title: 'FSMA Section 204 이력추적',
                items: [
                    '2026년 1월부터 시행 — 지정된 식품의 완전 이력추적 의무',
                    'KDE(핵심데이터요소): 재배자, 수확일, 냉각시설, 운송업체 등 필수 기록',
                    'CTE(핵심추적이벤트): 수확, 냉각, 포장, 선적 등 각 이벤트별 기록',
                    'FarmSense 블록체인 기록이 Section 204 요구사항을 자동 충족',
                ],
            },
            {
                title: '식물검역',
                items: [
                    'APHIS(동식물건강검사청) 수입허가 필요',
                    '한국산 포도: 현재 수출 프로토콜 확인 필요 (품목별 상이)',
                    '식물검역증명서 + APHIS 수입허가서 매칭',
                    '해충 검사 및 필요 시 처리 조건 충족',
                ],
            },
        ],
    },
    {
        id: 'eu',
        flag: '🇪🇺',
        name: 'EU',
        color: 'border-indigo-400/30 bg-indigo-500/10',
        accentColor: 'text-indigo-400',
        tagColor: 'bg-indigo-500/20 text-indigo-300',
        overview: 'Farm to Fork 전략에 따라 지속가능성과 이력추적을 강화하고 있습니다.',
        sections: [
            {
                title: 'Farm to Fork 전략',
                items: [
                    '2030년까지 화학농약 사용 50% 감축 목표',
                    '유기농 경작지 25% 달성 목표',
                    '지속가능한 식품 시스템 라벨링 강화',
                    '탄소발자국 표시 의무화 검토 중',
                ],
            },
            {
                title: '이력추적 규제',
                items: [
                    'EU General Food Law(Reg. 178/2002): 1단계 전·후 추적 의무',
                    '식품사업자는 공급자와 고객 정보를 5년간 보관',
                    '문제 발생 시 24시간 이내 신속 추적 가능해야 함',
                    'RASFF(신속경보시스템)에 등록된 문제 이력 확인',
                ],
            },
            {
                title: '잔류농약 · 검역',
                items: [
                    'EU MRL 데이터베이스 기준 적용 (EFSA 관리)',
                    '미등록 농약 0.01ppm 기본 적용 (일본과 유사)',
                    '식물건강증명서(Phytosanitary Certificate) 필수',
                    'TRACES(Trade Control and Expert System) 등록',
                ],
            },
        ],
    },
    {
        id: 'sea',
        flag: '🌏',
        name: '동남아시아',
        color: 'border-emerald-400/30 bg-emerald-500/10',
        accentColor: 'text-emerald-400',
        tagColor: 'bg-emerald-500/20 text-emerald-300',
        overview: '급성장 시장. 상대적으로 진입장벽이 낮지만, 국가별 기준 차이에 유의해야 합니다.',
        sections: [
            {
                title: '태국',
                items: [
                    '태국 FDA(อย.) 등록 및 수입허가 필요',
                    '식물검역증명서 + 건강증명서',
                    '잔류농약 기준: Codex 기준 준용 (MRL)',
                    '한-ASEAN FTA 활용 시 관세 혜택',
                ],
            },
            {
                title: '베트남',
                items: [
                    '식물검역법에 따른 검역 검사',
                    '수입식품 등록 및 라벨링 규정 준수',
                    '잔류농약: QCVN 기준 적용',
                    '최근 프리미엄 과일 수요 급증 (샤인머스캣 포함)',
                ],
            },
            {
                title: '싱가포르',
                items: [
                    'SFA(Singapore Food Agency) 수입허가',
                    '농약 잔류 기준: AVA MRL 또는 Codex 기준',
                    '수입 시 매 건별 검사 또는 표본 검사',
                    '높은 구매력 — 프리미엄 포도 시장 형성',
                ],
            },
        ],
    },
];

/* ────────── 공통 필요 서류 체크리스트 ────────── */
const commonDocs = [
    { doc: '식물검역증명서 (Phytosanitary Certificate)', required: ['일본', '미국', 'EU', '동남아'], note: '농림축산검역본부 발급' },
    { doc: '원산지증명서 (Certificate of Origin)', required: ['일본', '미국', 'EU', '동남아'], note: '대한상공회의소 또는 관세청' },
    { doc: '상업송장 (Commercial Invoice)', required: ['일본', '미국', 'EU', '동남아'], note: '수출자 작성' },
    { doc: '포장명세서 (Packing List)', required: ['일본', '미국', 'EU', '동남아'], note: '수출자 작성' },
    { doc: '선하증권 (B/L) / 항공운송장 (AWB)', required: ['일본', '미국', 'EU', '동남아'], note: '운송사 발급' },
    { doc: 'GAP 인증서', required: ['일본', 'EU'], note: '바이어 요구 시 필수화 추세' },
    { doc: '잔류농약검사성적서', required: ['일본', '미국', 'EU'], note: '공인검사기관 발급' },
    { doc: 'FDA 시설등록 확인서', required: ['미국'], note: '미국 수출 시 필수' },
    { doc: 'TRACES 등록 확인', required: ['EU'], note: 'EU 수출 시 필수' },
];

/* ────────── 수출 절차 흐름 ────────── */
const exportFlow = [
    { step: 1, title: '수출 계약', desc: '바이어와 가격·수량·납기 합의', icon: Building2 },
    { step: 2, title: '생산·기록', desc: 'GAP 기준 재배 + FarmSense 자동 기록', icon: Leaf },
    { step: 3, title: '수확·예냉', desc: '품질 선별 + 콜드체인 시작', icon: Thermometer },
    { step: 4, title: '검역 신청', desc: '식물검역소에 검역 검사 신청', icon: ClipboardCheck },
    { step: 5, title: '서류 준비', desc: '검역증·원산지·송장 등 서류 확보', icon: FileText },
    { step: 6, title: '선적·통관', desc: '항공/해운 운송 + 수입국 통관', icon: Truck },
    { step: 7, title: '검증·인도', desc: '바이어 QR 검증 → 최종 인도', icon: Package },
];

export default function CountryRequirementsPage() {
    const [activeCountry, setActiveCountry] = useState('japan');

    const selected = countries.find(c => c.id === activeCountry)!;

    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Hero */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                            Export · Country Requirements
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            주요국 수출 요건
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed">
                            일본, 미국, EU, 동남아시아 — 주요 수출 대상국의 검역 규제, 잔류농약 기준,
                            필요 서류를 한눈에 비교합니다.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl py-12 space-y-20">
                {/* ── 1. 국가 탭 선택 ── */}
                <section>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {countries.map((country) => (
                            <button
                                key={country.id}
                                onClick={() => setActiveCountry(country.id)}
                                className={clsx(
                                    'px-4 py-2.5 rounded-lg text-sm font-medium transition-all border',
                                    activeCountry === country.id
                                        ? `${country.tagColor} border-current shadow-sm`
                                        : 'bg-white/5 text-neutral-cream/70 border-white/10 hover:border-white/20'
                                )}
                            >
                                <span className="mr-1.5">{country.flag}</span>
                                {country.name}
                            </button>
                        ))}
                    </div>

                    {/* 선택된 국가 상세 */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={`p-6 rounded-xl border ${selected.color} mb-8`}>
                                <h2 className={`text-2xl font-bold ${selected.accentColor} mb-2`}>
                                    {selected.flag} {selected.name} 수출 요건
                                </h2>
                                <p className="text-neutral-cream/80">{selected.overview}</p>
                            </div>

                            <div className="space-y-6">
                                {selected.sections.map((section, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-5 rounded-xl border border-white/10"
                                    >
                                        <h3 className={`text-lg font-bold ${selected.accentColor} mb-4`}>
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {section.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-neutral-cream/80 leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </section>

                {/* ── 2. 공통 필요 서류 체크리스트 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-4">
                        공통 필요 서류 체크리스트
                    </motion.h2>
                    <p className="text-neutral-cream/70 mb-8">
                        국가별로 필요한 서류를 한눈에 확인하세요. 체크 표시가 있는 국가에서 해당 서류가 필요합니다.
                    </p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="border-b-2 border-white/10">
                                    <th className="text-left py-3 px-3 font-bold text-white">서류</th>
                                    <th className="text-center py-3 px-2 font-bold text-white">🇯🇵</th>
                                    <th className="text-center py-3 px-2 font-bold text-white">🇺🇸</th>
                                    <th className="text-center py-3 px-2 font-bold text-white">🇪🇺</th>
                                    <th className="text-center py-3 px-2 font-bold text-white">🌏</th>
                                    <th className="text-left py-3 px-3 font-bold text-white hidden md:table-cell">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commonDocs.map((row, i) => (
                                    <motion.tr
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.03 }}
                                        className="border-b border-white/10 hover:bg-white/5"
                                    >
                                        <td className="py-3 px-3 font-medium text-white">{row.doc}</td>
                                        {['일본', '미국', 'EU', '동남아'].map((country, j) => (
                                            <td key={j} className="py-3 px-2 text-center">
                                                {row.required.includes(country) ? (
                                                    <CheckCircle2 className="w-4 h-4 text-green-500 mx-auto" />
                                                ) : (
                                                    <span className="text-neutral-cream/40">—</span>
                                                )}
                                            </td>
                                        ))}
                                        <td className="py-3 px-3 text-neutral-cream/60 hidden md:table-cell">{row.note}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── 3. 수출 절차 전체 흐름 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-8">
                        수출 절차 전체 흐름
                    </motion.h2>

                    <div className="space-y-3">
                        {exportFlow.map((step, i) => (
                            <div key={i}>
                                <motion.div
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-blue-300 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/15 flex items-center justify-center">
                                        <span className="text-sm font-mono font-bold text-blue-400">{step.step}</span>
                                    </div>
                                    <step.icon className="w-5 h-5 text-neutral-cream/50 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">{step.title}</h4>
                                        <p className="text-sm text-neutral-cream/70">{step.desc}</p>
                                    </div>
                                </motion.div>
                                {i < exportFlow.length - 1 && (
                                    <div className="flex justify-center py-0.5">
                                        <div className="w-px h-3 bg-white/20" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <motion.div
                        {...fadeUp}
                        className="mt-8 p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center"
                    >
                        <p className="text-sm text-blue-300">
                            <strong>FarmSense는 2~5단계를 자동화합니다.</strong> 생산 기록, 예냉 데이터, 검역 서류, QR 검증까지
                            앱 하나로 관리하세요.
                        </p>
                    </motion.div>
                </section>

                {/* ── CTA ── */}
                <section className="border-t border-white/10 pt-12">
                    <h3 className="text-xl font-bold text-white mb-6">수출 · 인증 더 알아보기</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'GAP 인증 완벽 가이드', href: '/export/gap-certification', desc: '인증 절차 20항목' },
                            { label: '수출 서류 데이터 전략', href: '/export/data-documents', desc: '블록체인 디지털 증빙' },
                            { label: '수출 준비 로드맵', href: '/export/roadmap', desc: '12개월 단계별 전략' },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group p-5 rounded-xl border border-white/10 hover:border-blue-300 hover:bg-blue-500/10 transition-all"
                            >
                                <h4 className="font-bold text-white group-hover:text-blue-400 mb-1 flex items-center gap-2">
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
