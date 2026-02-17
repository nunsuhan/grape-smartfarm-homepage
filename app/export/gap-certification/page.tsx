'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Shield, CheckCircle2, Clock, Banknote, AlertTriangle,
    BookOpen, GraduationCap, FlaskConical, Droplets, Leaf,
    Grape, Sparkles, Bell, FileCheck, ChevronDown, ChevronRight,
    Smartphone, Camera, BarChart3, ClipboardCheck, Trash2,
    HardHat, Package, Search, Printer, Tag, ArrowRight,
} from 'lucide-react';

/* ────────── GAP 인증 절차 6단계 ────────── */
const certProcess = [
    {
        step: 1,
        title: '기본교육 이수',
        desc: 'GAP 기본교육(6시간)을 이수하고 수료증을 발급받습니다. 농업기술센터, 농관원 등에서 수시 개최합니다.',
        icon: GraduationCap,
        color: 'text-pink-400',
        bgColor: 'bg-pink-500/10',
    },
    {
        step: 2,
        title: '인증 신청',
        desc: 'GAP정보서비스(gap.go.kr)에서 온라인 신청하거나, 농관원 지역사무소에 서류를 제출합니다.',
        icon: FileCheck,
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/10',
    },
    {
        step: 3,
        title: '현장 심사',
        desc: '심사원이 농장을 방문하여 포장 환경, 용수, 자재 보관, 기록 관리 상태를 확인합니다.',
        icon: Search,
        color: 'text-violet-400',
        bgColor: 'bg-violet-500/10',
    },
    {
        step: 4,
        title: '잔류농약 검사',
        desc: '공인 검사기관에서 농산물 시료의 잔류농약 분석을 실시합니다. PLS 기준 적합 판정 필요.',
        icon: FlaskConical,
        color: 'text-amber-400',
        bgColor: 'bg-amber-500/10',
    },
    {
        step: 5,
        title: '인증서 발급',
        desc: '심사 적합 판정 후 GAP 인증서가 발급됩니다. 유효기간 2년, 연 1회 사후관리 심사.',
        icon: Shield,
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
    },
    {
        step: 6,
        title: '인증마크 표시',
        desc: '인증받은 농산물에 GAP 인증마크를 부착하고, 인증번호와 유효기간을 표시합니다.',
        icon: Tag,
        color: 'text-secondary-gold',
        bgColor: 'bg-amber-500/10',
    },
];

/* ────────── 20개 GAP 준비 체크리스트 + FarmSense 매핑 ────────── */
const gapChecklist = [
    {
        id: 1, category: '교육',
        item: 'GAP 기본교육 이수 (농가·작업자)',
        farmsense: '교육 이수일·대상자 등록, 이수증 사진 업로드, 재교육 알림',
        icon: GraduationCap,
    },
    {
        id: 2, category: '서류',
        item: '인증신청서, 위해요소관리계획서, 영농기록 준비',
        farmsense: '기본 정보·포장 정보 입력, 위험요소 템플릿 제공, 영농기록 자동 축적 → PDF/엑셀 내보내기',
        icon: FileCheck,
    },
    {
        id: 3, category: '포장관리',
        item: '포장(블록)별 위치·면적·작목 정리',
        farmsense: '포장 지도 등록(GPS/지도), 면적·작목·품종 설정, 포장별 작업·자재 기록 분리',
        icon: BarChart3,
    },
    {
        id: 4, category: '종자관리',
        item: '종자·묘 공급처, 품종, 처리내역 기록',
        farmsense: '종자/묘 입고·사용 기록 양식, 사진·라벨 첨부, 포장별 종자 이력 관리',
        icon: Leaf,
    },
    {
        id: 5, category: '토양·비료',
        item: '토양검정 결과, 시비처방서, 비료 사용량 기록',
        farmsense: '토양검정 결과·처방서 저장, 비료 시기·종류·량 입력, 누적 사용량 조회',
        icon: FlaskConical,
    },
    {
        id: 6, category: '용수관리',
        item: '용수원, 수질검사 결과, 위해요소 여부',
        farmsense: '용수원 등록, 수질검사 결과 업로드, 검사주기 알림, 수질 센서 연동',
        icon: Droplets,
    },
    {
        id: 7, category: '농약관리',
        item: '등록약제 사용, 사용기준(횟수·간격·PHI) 준수',
        farmsense: '농약 DB 연동, 살포 시 기준 자동 체크, 사용횟수·간격·PHI 경고',
        icon: AlertTriangle,
    },
    {
        id: 8, category: '농약기록',
        item: '날짜, 포장, 약제명, 희석배수, 사용량, 작업자 기록',
        farmsense: '농약 작업 등록 화면, 유량센서 기반 사용량 자동계산, 사진 첨부',
        icon: ClipboardCheck,
    },
    {
        id: 9, category: '자재보관',
        item: '농약·비료 보관창고 분리보관, 잠금, 누출 방지',
        farmsense: '자재 보관 위생 체크리스트, 정기 점검 일정·알림, 점검 기록·사진 저장',
        icon: Package,
    },
    {
        id: 10, category: '수확위생',
        item: '수확도구·용기 세척·위생관리 기록',
        farmsense: '수확 후 도구·용기 세척 체크리스트 자동 생성, 사진 + 담당자 서명',
        icon: Sparkles,
    },
    {
        id: 11, category: '작업장위생',
        item: '수확·선별·포장 작업장 바닥·벽, 해충 차단',
        farmsense: '수확·선별·포장 위생 체크리스트, 사진 포함 일지 작성',
        icon: ClipboardCheck,
    },
    {
        id: 12, category: '작업자안전',
        item: '손씻기 시설, 보호구 착용, 안전교육',
        farmsense: '작업자 등록, 위생·안전 점검표, PPE 착용 체크, 사고 신고 기록',
        icon: HardHat,
    },
    {
        id: 13, category: '환경보전',
        item: '폐비닐·농약용기·폐기물 처리 계획·실행',
        farmsense: '폐기물 처리 기록(수거일·업체·수량), 사진 첨부, 분기 정리 알림',
        icon: Trash2,
    },
    {
        id: 14, category: '이력추적',
        item: '포장→수확→선별→출하 로트별 이력번호 관리',
        farmsense: '로트ID 자동 생성, 작업·자재 기록 연결, QR/바코드 생성, 출하 기록',
        icon: Search,
    },
    {
        id: 15, category: '영농일지',
        item: '연간 재배일지 정리',
        farmsense: '모든 작업을 타입별 기록, 기간·포장별 필터링, 연간 일지 자동 생성',
        icon: BookOpen,
    },
    {
        id: 16, category: '내부심사',
        item: '자체 점검 연 1회 실시, 개선조치 기록',
        farmsense: 'GAP 내부심사 템플릿, 점검 결과·위반사항·개선계획 기록',
        icon: Search,
    },
    {
        id: 17, category: '교육기록',
        item: 'GAP·안전·위생 교육 날짜·참석자·내용 기록',
        farmsense: '교육 일정 등록, 참석자 체크, 사진·자료 첨부, 다음 교육 알림',
        icon: GraduationCap,
    },
    {
        id: 18, category: '문서보관',
        item: '문서·기록 최소 2~3년 보관 체계 확보',
        farmsense: '클라우드 저장, 연도·포장별 검색, 기간별 ZIP/PDF/엑셀 일괄 다운로드',
        icon: FileCheck,
    },
    {
        id: 19, category: '심사대비',
        item: '인증심사·사후관리 자료 꾸러미 준비',
        farmsense: 'GAP 심사 모드: 기간 선택 → 모든 기록을 한 번에 PDF 묶음 출력',
        icon: Printer,
    },
    {
        id: 20, category: '인증마크',
        item: '인증마크 표시기준 준수, 인증기간 확인',
        farmsense: '인증기간·번호·품목 등록, 만료 3~6개월 전 알림, 표시 안내',
        icon: Tag,
    },
];

/* ────────── 비용 정보 ────────── */
const costInfo = [
    { label: '인증 신청수수료', value: '약 5만원 (소규모 농가 기준)', note: '정부 지원 시 50~70% 감면' },
    { label: '잔류농약 검사비', value: '약 3~10만원 (검사 항목 수에 따라)', note: '농관원 무료 검사 활용 가능' },
    { label: 'GAP 기본교육', value: '무료 (정부 지원)', note: '농업기술센터, 농관원 등에서 실시' },
    { label: '컨설팅 비용', value: '무료~30만원', note: '농관원 무료 컨설팅 또는 민간 컨설팅' },
    { label: '유효기간', value: '2년 (연 1회 사후관리)', note: '갱신 시 동일 절차, 비용 감면' },
];

/* ────────── PLS 정보 ────────── */
const plsInfo = [
    { term: 'PLS란?', desc: '허용물질목록 관리제도(Positive List System). 등록되지 않은 농약은 잔류허용기준 0.01ppm이 일률 적용됩니다.' },
    { term: '왜 중요한가?', desc: 'GAP 인증과 수출 모두 PLS 기준 준수가 필수입니다. 미등록 농약 사용 시 인증 취소 사유가 됩니다.' },
    { term: 'FarmSense 대응', desc: '농약 DB에 PLS 기준이 내장되어 있어, 살포 시 자동으로 적합 여부를 판정합니다.' },
];

export default function GAPCertificationPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Hero Header */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-green-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-green-600" />
                            Export · Certification
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            GAP 인증 완벽 가이드
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed">
                            우수농산물 인증(GAP)의 정의부터 신청 절차, 필수 기록, 비용, PLS 대응까지 —
                            농가가 알아야 할 모든 것을 정리했습니다.
                            <strong className="text-green-400"> FarmSense가 자동화하는 20가지 항목</strong>도 함께 확인하세요.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <span className="px-3 py-1.5 rounded-full bg-green-500/15 text-green-400 font-medium">유효기간 2년</span>
                            <span className="px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-400 font-medium">정부 지원 50~70%</span>
                            <span className="px-3 py-1.5 rounded-full bg-violet-500/15 text-violet-400 font-medium">수출 필수 인증</span>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl py-12 space-y-20">
                {/* ── 1. GAP 인증이란? ── */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-6"
                    >
                        GAP 인증이란?
                    </motion.h2>
                    <div className="prose prose-lg prose-neutral max-w-none">
                        <p className="text-neutral-cream/70 leading-8">
                            <strong>GAP(Good Agricultural Practices, 우수농산물관리)</strong>는 농산물의 안전성을 확보하기 위해
                            생산 단계부터 수확 후 관리까지 전 과정에서 농약·중금속·유해생물 등의 위해요소를 관리하는 제도입니다.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mt-6">
                            {[
                                { title: '법적 근거', desc: '농수산물 품질관리법 제6조', icon: BookOpen },
                                { title: '인증 기관', desc: '국립농산물품질관리원 (농관원)', icon: Shield },
                                { title: '핵심 목적', desc: '농산물 안전성 + 환경 보전', icon: Leaf },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 rounded-xl bg-white/5 border border-white/10"
                                >
                                    <item.icon className="w-6 h-6 text-green-400 mb-2" />
                                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-neutral-cream/70">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 2. 인증 절차 6단계 ── */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8"
                    >
                        인증 절차 6단계
                    </motion.h2>
                    <div className="space-y-4">
                        {certProcess.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-green-300 transition-colors"
                            >
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                                    <step.icon className={`w-6 h-6 ${step.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-mono font-bold text-green-400">STEP {step.step}</span>
                                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-neutral-cream/70 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── 3. GAP 준비 체크리스트 20항목 + FarmSense 매핑 ── */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-4"
                    >
                        GAP 준비 체크리스트 (20항목)
                    </motion.h2>
                    <p className="text-neutral-cream/70 mb-8">
                        각 항목을 클릭하면 FarmSense가 어떻게 자동화하는지 확인할 수 있습니다.
                    </p>

                    <div className="space-y-2">
                        {gapChecklist.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="border border-white/10 rounded-xl overflow-hidden hover:border-green-300 transition-colors"
                            >
                                <button
                                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                                    className="w-full flex items-center gap-3 p-4 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-green-500/15 text-green-400 text-xs font-bold flex items-center justify-center">
                                        {item.id}
                                    </span>
                                    <item.icon className="w-4 h-4 text-neutral-cream/50 flex-shrink-0" />
                                    <span className="flex-1 text-sm font-medium text-white">{item.item}</span>
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-cream/60 flex-shrink-0">
                                        {item.category}
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-neutral-cream/50 transition-transform ${expandedId === item.id ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {expandedId === item.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-4 pb-4 pt-0">
                                                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Smartphone className="w-4 h-4 text-green-400" />
                                                        <span className="text-xs font-bold text-green-400 uppercase">FarmSense 자동화</span>
                                                    </div>
                                                    <p className="text-sm text-green-300 leading-relaxed">{item.farmsense}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-center"
                    >
                        <p className="text-lg font-bold text-white mb-2">
                            GAP 준비에서 가장 힘든 <span className="text-green-400">기록·증빙·자체점검</span>을
                        </p>
                        <p className="text-neutral-cream/70">
                            FarmSense가 구조화된 템플릿과 자동 기록으로 대신합니다.
                            농가는 농사에 집중하세요.
                        </p>
                    </motion.div>
                </section>

                {/* ── 4. 비용 및 정부 지원 ── */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8"
                    >
                        비용 및 정부 지원
                    </motion.h2>
                    <div className="space-y-3">
                        {costInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl bg-white/5 border border-white/10"
                            >
                                <div className="flex items-center gap-2 md:w-48 flex-shrink-0">
                                    <Banknote className="w-4 h-4 text-amber-400" />
                                    <span className="font-bold text-white text-sm">{item.label}</span>
                                </div>
                                <span className="text-sm text-neutral-cream/80 md:flex-1">{item.value}</span>
                                <span className="text-xs text-green-400 font-medium">{item.note}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── 5. PLS 관련 사항 ── */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8"
                    >
                        PLS (농약잔류허용기준) 대응
                    </motion.h2>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 space-y-4">
                        {plsInfo.map((item, i) => (
                            <div key={i}>
                                <h4 className="font-bold text-amber-900 mb-1">{item.term}</h4>
                                <p className="text-sm text-amber-300 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── 6. 관련 기관 및 연락처 ── */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8"
                    >
                        관련 기관
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { name: '국립농산물품질관리원', role: 'GAP 인증·심사', tel: '1544-8572', url: 'naqs.go.kr' },
                            { name: 'GAP 정보서비스', role: '온라인 신청·조회', tel: '-', url: 'gap.go.kr' },
                            { name: '농업기술센터', role: '교육·토양검정', tel: '지역별 상이', url: '-' },
                            { name: '한국농수산식품유통공사', role: '수출 지원·마케팅', tel: '1577-9700', url: 'at.or.kr' },
                        ].map((org, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 rounded-xl bg-white/5 border border-white/10"
                            >
                                <h4 className="font-bold text-white mb-1">{org.name}</h4>
                                <p className="text-sm text-neutral-cream/60 mb-2">{org.role}</p>
                                <div className="flex items-center gap-4 text-xs">
                                    {org.tel !== '-' && (
                                        <span className="text-blue-400 font-medium">{org.tel}</span>
                                    )}
                                    {org.url !== '-' && (
                                        <span className="text-neutral-cream/50">{org.url}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── CTA: 다른 수출 · 인증 페이지 ── */}
                <section className="border-t border-white/10 pt-12">
                    <h3 className="text-xl font-bold text-white mb-6">수출 · 인증 더 알아보기</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: '블록체인 이력추적', href: '/technology/blockchain', desc: 'SHA-256 봉인 시스템' },
                            { label: '수출 서류 데이터 전략', href: '/export/data-documents', desc: '디지털 증빙 원리' },
                            { label: '주요국 수출 요건', href: '/export/country-requirements', desc: '일본·미국·EU 기준' },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group p-5 rounded-xl border border-white/10 hover:border-green-300 hover:bg-green-500/10 transition-all"
                            >
                                <h4 className="font-bold text-white group-hover:text-green-400 mb-1 flex items-center gap-2">
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
