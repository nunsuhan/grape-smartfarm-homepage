'use client';

import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Sprout, ClipboardCheck, Package, CheckCircle2, ArrowRight,
    Banknote, TrendingUp, Phone, Building2, Users, Truck,
    Smartphone, Shield, Globe, Leaf, GraduationCap, BarChart3,
    Calendar, Target,
} from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

/* ────────── 12개월 3단계 로드맵 ────────── */
const roadmapPhases = [
    {
        phase: '1단계',
        period: '1~3개월',
        title: '기초 구축',
        subtitle: '시스템 설치 + GAP 준비 시작',
        icon: Sprout,
        color: 'bg-blue-500',
        lightColor: 'bg-blue-500/10 border-blue-500/20',
        accentColor: 'text-blue-400',
        tasks: [
            { task: 'FarmSense 앱 설치 및 농장 등록', detail: '포장(블록)별 위치·면적·작목 설정, 센서 연동' },
            { task: 'IoT 센서 장치 설치·연동', detail: '온습도, 토양수분, 조도 센서 자동 데이터 수집 시작' },
            { task: 'GAP 기본교육 이수', detail: '6시간 교육 수료, 이수증 앱에 등록' },
            { task: '토양·수질 검사 신청', detail: '농업기술센터 검정, 결과 앱에 자동 등록' },
            { task: '영농일지 기록 습관화', detail: '매일 작업 입력 → FarmSense가 GAP 형식으로 자동 변환' },
        ],
        milestone: 'FarmSense 데이터 수집 시작, GAP 교육 완료',
    },
    {
        phase: '2단계',
        period: '4~6개월',
        title: 'GAP 인증 취득',
        subtitle: 'GAP 6대 기록 축적 + 인증 심사',
        icon: ClipboardCheck,
        color: 'bg-violet-500',
        lightColor: 'bg-violet-500/10 border-violet-500/20',
        accentColor: 'text-violet-400',
        tasks: [
            { task: 'GAP 6대 기록 자동 축적', detail: '토양·비료·농약·수확·영농일지·교육 기록이 앱에서 자동 누적' },
            { task: '내부심사(자체점검) 실시', detail: 'FarmSense GAP 템플릿으로 자체 점검, 부족 항목 보완' },
            { task: '위생·안전 체크리스트 정착', detail: '수확도구 세척, 작업장 위생, 작업자 안전 기록 루틴화' },
            { task: 'GAP 인증 심사 신청', detail: '농관원 또는 인증기관에 신청, 현장 심사 대비' },
            { task: '블록체인 DailySeal 데이터 누적', detail: '매일 봉인되는 데이터가 3개월 이상 축적 → 신뢰도 확보' },
        ],
        milestone: 'GAP 인증서 취득, 블록체인 이력 3개월+ 축적',
    },
    {
        phase: '3단계',
        period: '7~12개월',
        title: '수출 준비 완료',
        subtitle: '수출 서류 + 바이어 매칭 + 첫 수출',
        icon: Package,
        color: 'bg-amber-500',
        lightColor: 'bg-amber-500/10 border-amber-500/20',
        accentColor: 'text-amber-400',
        tasks: [
            { task: '수출 준비도 80% 이상 달성', detail: 'FarmSense 대시보드에서 점수 확인, 부족 항목 집중 보완' },
            { task: 'QR 코드 생성 및 제품 부착', detail: '로트(LOT)별 QR 코드 발급, 포장 박스에 부착' },
            { task: '수출 검역 서류 자동 생성', detail: 'FarmSense가 영농일지·농약기록·검역정보를 PDF로 일괄 출력' },
            { task: '수출 바이어 매칭 및 계약', detail: 'aT(한국농수산식품유통공사) 수출지원사업 활용, 바이어 미팅' },
            { task: '첫 수출 선적', detail: '콜드체인 확보, 검역 합격, 선적 → 수출 완료!' },
        ],
        milestone: '첫 수출 성공, 프리미엄 가격 확보',
    },
];

/* ────────── ROI 분석 ────────── */
const roiData = {
    costs: [
        { label: 'FarmSense 시스템 (연)', amount: '50만원', note: '센서 + 앱 구독' },
        { label: 'GAP 인증 비용', amount: '30만원', note: '신청료 + 검사비' },
        { label: 'GAP 교육비', amount: '0원', note: '정부 전액 지원' },
    ],
    benefits: [
        { label: 'GAP 프리미엄 가격 (10~30%↑)', amount: '300만원', note: '1,000만원 매출 기준' },
        { label: '수출·대형마트 판로 확대', amount: '200만원', note: '신규 매출' },
        { label: '비용 절감 + 정부 지원금', amount: '100만원', note: '노동 절감, 보조금' },
    ],
};

/* ────────── 성공 사례 ────────── */
const successStories = [
    {
        region: '경기도 포도 농가',
        size: '3,000평',
        before: '전통 재배, 로컬 경매 출하, kg당 8,000원',
        after: '일본 수출 계약 체결, kg당 12,000원 (50%↑)',
        period: '도입 후 10개월',
        icon: Truck,
    },
    {
        region: '전라도 딸기 농가 단체',
        size: '10농가 공동',
        before: '개별 출하, 가격 교섭력 약함',
        after: '대형마트 정기 공급, 연 매출 200% 증가',
        period: '도입 후 8개월',
        icon: Building2,
    },
    {
        region: '강원도 사과 농가',
        size: '5,000평',
        before: '품질 불균일, 반품률 높음',
        after: 'AI 품질 관리로 반품률 5% → 0.5%, 프리미엄 브랜드화',
        period: '도입 후 12개월',
        icon: Users,
    },
];

/* ────────── 정부 지원 제도 ────────── */
const govSupport = [
    {
        program: 'GAP 인증 지원',
        org: '농관원 / 지자체',
        detail: '인증수수료 50~70% 감면, 교육비 전액 지원, 컨설팅 무료',
        icon: Shield,
    },
    {
        program: '스마트팜 보급 사업',
        org: '농림축산식품부',
        detail: 'IoT·센서 장비 구입비 50~80% 보조, 시설현대화 자금 지원',
        icon: Smartphone,
    },
    {
        program: '수출농업 육성사업',
        org: 'aT (한국농수산식품유통공사)',
        detail: '수출 마케팅·물류비 일부 지원, 바이어 매칭 프로그램, 해외 전시회 참가 지원',
        icon: Globe,
    },
    {
        program: '블록체인 실증사업',
        org: '과학기술정보통신부',
        detail: '블록체인 시스템 구축비 50~80% 지원, 이력추적 시스템 개발 보조',
        icon: BarChart3,
    },
    {
        program: '농업인 역량강화',
        org: '농업기술센터',
        detail: 'ICT 활용 교육, 수출 실무 교육, GAP·친환경 인증 교육 무료 제공',
        icon: GraduationCap,
    },
];

/* ────────── 관련 기관 ────────── */
const contacts = [
    { name: 'GAP 인증 문의', org: '국립농산물품질관리원', tel: '1544-8572' },
    { name: '수출 지원', org: '한국농수산식품유통공사(aT)', tel: '1577-9700' },
    { name: '스마트팜 지원', org: '농림축산식품부', tel: '044-201-1491' },
    { name: '시스템 문의', org: 'FarmSense', tel: '1522-1234' },
];

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            <Container className="max-w-5xl pt-20 pb-12 space-y-20">
                {/* Hero */}
                <section className="space-y-6">
                    <div className="flex items-center gap-2 text-amber-400 font-bold tracking-wide text-sm uppercase">
                        <span className="w-2 h-2 rounded-full bg-amber-600" />
                        Export · Roadmap
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        수출 준비 로드맵
                    </h1>
                    <p className="text-xl text-neutral-cream/70 leading-relaxed">
                        앱 설치부터 첫 수출까지 <strong className="text-amber-400">12개월, 3단계</strong>로 완성합니다.
                        단계별 체크리스트를 따라오시면 됩니다.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-400 font-medium flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> 1~3개월: 기초
                        </span>
                        <span className="px-3 py-1.5 rounded-full bg-violet-500/15 text-violet-400 font-medium flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> 4~6개월: GAP
                        </span>
                        <span className="px-3 py-1.5 rounded-full bg-amber-500/15 text-amber-400 font-medium flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> 7~12개월: 수출
                        </span>
                    </div>
                    <div className="border-b border-white/10" />
                </section>
                {/* ── 1. 3단계 로드맵 ── */}
                <section>
                    <div className="space-y-12">
                        {roadmapPhases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {/* Phase Header */}
                                <div className={`p-6 rounded-t-xl border ${phase.lightColor}`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center flex-shrink-0`}>
                                            <phase.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className={`text-xs font-mono font-bold ${phase.accentColor}`}>
                                                {phase.phase} · {phase.period}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                                            <p className="text-sm text-neutral-cream/70">{phase.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tasks */}
                                <div className="border border-t-0 border-white/10 rounded-b-xl divide-y divide-white/10">
                                    {phase.tasks.map((task, j) => (
                                        <div key={j} className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors">
                                            <CheckCircle2 className={`w-5 h-5 ${phase.accentColor} mt-0.5 flex-shrink-0`} />
                                            <div>
                                                <h4 className="font-bold text-white text-sm">{task.task}</h4>
                                                <p className="text-xs text-neutral-cream/60 mt-0.5">{task.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="p-4 bg-white/5">
                                        <div className="flex items-center gap-2">
                                            <Target className={`w-4 h-4 ${phase.accentColor}`} />
                                            <span className={`text-sm font-bold ${phase.accentColor}`}>마일스톤:</span>
                                            <span className="text-sm text-neutral-cream/80">{phase.milestone}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Arrow between phases */}
                                {i < roadmapPhases.length - 1 && (
                                    <div className="flex justify-center py-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-px h-4 bg-white/20" />
                                            <ArrowRight className="w-5 h-5 text-neutral-cream/40 rotate-90" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── 2. ROI 분석 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-8">
                        ROI 분석: 연간 100만원 투자, 600만원 수익
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Cost */}
                        <motion.div {...fadeUp} className="p-6 rounded-xl bg-red-500/10 border border-red-500/20">
                            <div className="flex items-center gap-2 mb-5">
                                <Banknote className="w-5 h-5 text-red-500" />
                                <h3 className="text-lg font-bold text-white">연간 비용</h3>
                            </div>
                            <div className="space-y-3">
                                {roiData.costs.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm text-neutral-cream/80">{item.label}</span>
                                            <span className="text-xs text-neutral-cream/50 ml-2">{item.note}</span>
                                        </div>
                                        <span className="text-sm font-mono font-bold text-red-400">{item.amount}</span>
                                    </div>
                                ))}
                                <div className="border-t border-red-500/20 pt-3 flex justify-between">
                                    <span className="font-bold text-white">합계</span>
                                    <span className="text-lg font-mono font-bold text-red-400">80만원</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Benefit */}
                        <motion.div {...fadeUp} className="p-6 rounded-xl bg-green-500/10 border border-green-500/20">
                            <div className="flex items-center gap-2 mb-5">
                                <TrendingUp className="w-5 h-5 text-green-400" />
                                <h3 className="text-lg font-bold text-white">연간 기대 수익</h3>
                            </div>
                            <div className="space-y-3">
                                {roiData.benefits.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm text-neutral-cream/80">{item.label}</span>
                                            <span className="text-xs text-neutral-cream/50 ml-2">{item.note}</span>
                                        </div>
                                        <span className="text-sm font-mono font-bold text-green-400">{item.amount}</span>
                                    </div>
                                ))}
                                <div className="border-t border-green-500/20 pt-3 flex justify-between">
                                    <span className="font-bold text-white">합계</span>
                                    <span className="text-lg font-mono font-bold text-green-400">600만원</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ROI Banner */}
                    <motion.div
                        {...fadeUp}
                        className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-green-500/10 border border-amber-500/20 text-center"
                    >
                        <div className="text-sm text-neutral-cream/60 mb-1">순수익 520만원</div>
                        <div className="text-5xl font-mono font-bold text-amber-400">ROI 650%</div>
                        <div className="text-sm text-neutral-cream/60 mt-2">정부 지원금 활용 시 실질 부담은 더욱 낮아집니다</div>
                    </motion.div>
                </section>

                {/* ── 3. 예상 도입 효과 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-8">
                        도입 시 예상 효과
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {successStories.map((story, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 rounded-xl border border-white/10 hover:border-amber-300 transition-colors"
                            >
                                <story.icon className="w-8 h-8 text-amber-500 mb-3" />
                                <h4 className="font-bold text-white mb-1">{story.region}</h4>
                                <p className="text-xs text-neutral-cream/50 mb-3">{story.size} · {story.period}</p>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/15 text-red-400 flex-shrink-0 font-bold">전</span>
                                        <span className="text-sm text-neutral-cream/60">{story.before}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/15 text-green-400 flex-shrink-0 font-bold">후</span>
                                        <span className="text-sm text-green-400 font-medium">{story.after}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── 4. 정부 지원 제도 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-8">
                        활용 가능한 정부 지원 제도
                    </motion.h2>

                    <div className="space-y-4">
                        {govSupport.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 hover:border-amber-300 transition-colors"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                                    <item.icon className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-white">{item.program}</h4>
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-neutral-cream/60">{item.org}</span>
                                    </div>
                                    <p className="text-sm text-neutral-cream/70 leading-relaxed">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── 5. 관련 기관 연락처 ── */}
                <section>
                    <motion.h2 {...fadeUp} className="text-3xl font-bold text-white mb-8">
                        관련 기관 연락처
                    </motion.h2>
                    <div className="flex flex-wrap gap-3">
                        {contacts.map((contact, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10"
                            >
                                <Phone className="w-4 h-4 text-amber-500" />
                                <div>
                                    <div className="text-xs text-neutral-cream/60">{contact.name}</div>
                                    <div className="text-sm font-bold text-white">{contact.tel}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="border-t border-white/10 pt-12">
                    <h3 className="text-xl font-bold text-white mb-6">수출 · 인증 더 알아보기</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'GAP 인증 완벽 가이드', href: '/export/gap-certification', desc: '인증 절차 20항목 체크리스트' },
                            { label: '수출 서류 데이터 전략', href: '/export/data-documents', desc: '블록체인 디지털 증빙' },
                            { label: '주요국 수출 요건', href: '/export/country-requirements', desc: '일본·미국·EU·동남아' },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group p-5 rounded-xl border border-white/10 hover:border-amber-300 hover:bg-amber-500/10 transition-all"
                            >
                                <h4 className="font-bold text-white group-hover:text-amber-400 mb-1 flex items-center gap-2">
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
