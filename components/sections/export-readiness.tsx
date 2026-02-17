'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import {
    TrendingUp,
    CheckCircle2,
    Banknote,
    Truck,
    Building2,
    Users,
    Phone,
    ArrowRight,
    Sprout,
    ClipboardCheck,
    Package,
} from 'lucide-react';

const timeline = [
    {
        phase: '1단계',
        period: '1~3개월',
        title: '기초 구축',
        icon: Sprout,
        color: 'bg-blue-400',
        tasks: [
            'FarmSense 앱 설치 및 농장 등록',
            '센서 장치 연동 (자동 데이터 수집 시작)',
            'GAP 기본교육 이수',
            '토양·수질 검사 신청',
        ],
    },
    {
        phase: '2단계',
        period: '4~6개월',
        title: 'GAP 인증 취득',
        icon: ClipboardCheck,
        color: 'bg-violet-400',
        tasks: [
            '일일 작업 기록 습관화 (앱 입력)',
            'GAP 6대 기록 자동 축적',
            'GAP 인증 심사 신청',
            '블록체인 봉인 데이터 누적',
        ],
    },
    {
        phase: '3단계',
        period: '7~12개월',
        title: '수출 준비 완료',
        icon: Package,
        color: 'bg-secondary-gold',
        tasks: [
            '수출 준비도 80% 이상 달성',
            'QR 코드 생성 및 제품 부착',
            '수출 검역 서류 자동 생성',
            '바이어 미팅 및 계약 추진',
        ],
    },
];

const roiData = {
    costs: [
        { label: 'FarmSense 시스템', amount: '50만원' },
        { label: 'GAP 인증 비용', amount: '30만원' },
        { label: '교육 비용', amount: '20만원' },
    ],
    benefits: [
        { label: 'GAP 프리미엄 가격 (10~30%↑)', amount: '300만원' },
        { label: '수출·대형마트 신규 판로', amount: '200만원' },
        { label: '비용 절감 + 정부 지원금', amount: '100만원' },
    ],
};

const successStories = [
    {
        region: '경기도 포도 농가',
        before: '전통 재배, 내수 한정',
        after: '일본 수출 계약, 가격 40% 인상',
        icon: Truck,
    },
    {
        region: '전라도 딸기 단체',
        before: '개별 농가 영세 경영',
        after: '대형마트 정기 공급, 매출 200%↑',
        icon: Building2,
    },
    {
        region: '강원도 사과 농가',
        before: '품질 불균일, 신뢰도 낮음',
        after: '프리미엄 브랜드, 재구매율 80%',
        icon: Users,
    },
];

const govSupport = [
    { item: 'GAP 인증수수료', support: '50~70% 정부 지원' },
    { item: '블록체인 시스템 구축비', support: '50~80% 정부 지원' },
    { item: 'GAP 교육비', support: '전액 지원' },
    { item: '수출 마케팅·물류비', support: '일부 지원 (aT)' },
];

export function ExportReadiness() {
    return (
        <Section id="export-readiness" className="bg-neutral-black">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-4"
                    >
                        Getting Started
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                    >
                        시작부터 수출까지<br />
                        <span className="text-secondary-gold">12개월 로드맵</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-cream/70 max-w-2xl mx-auto text-lg"
                    >
                        앱 설치부터 수출 계약까지, 단계별로 따라오시면 됩니다
                    </motion.p>
                </div>

                {/* 3-Phase Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {timeline.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="relative p-6 rounded-2xl bg-white/5 border border-white/10"
                        >
                            {/* Phase Badge */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-10 h-10 rounded-full ${phase.color} flex items-center justify-center`}>
                                    <phase.icon className="w-5 h-5 text-black" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-secondary-gold">{phase.phase} · {phase.period}</div>
                                    <h4 className="text-lg font-bold text-white">{phase.title}</h4>
                                </div>
                            </div>

                            {/* Tasks */}
                            <ul className="space-y-3">
                                {phase.tasks.map((task, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-secondary-green mt-0.5 flex-shrink-0" />
                                        <span className="text-sm text-neutral-cream/70">{task}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Arrow to next */}
                            {i < timeline.length - 1 && (
                                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                    <ArrowRight className="w-5 h-5 text-white/20" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* ROI Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <h4 className="text-center text-2xl font-serif font-bold text-white mb-10">
                        연간 100만원 투자, 600만원 수익
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cost */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-red-400/20">
                            <div className="flex items-center gap-2 mb-6">
                                <Banknote className="w-6 h-6 text-red-400" />
                                <h5 className="text-lg font-bold text-white">연간 비용</h5>
                            </div>
                            <div className="space-y-4">
                                {roiData.costs.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-sm text-neutral-cream/70">{item.label}</span>
                                        <span className="text-sm font-mono text-red-400">{item.amount}</span>
                                    </div>
                                ))}
                                <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">합계</span>
                                    <span className="text-lg font-mono font-bold text-red-400">100만원</span>
                                </div>
                            </div>
                        </div>

                        {/* Benefit */}
                        <div className="p-6 rounded-2xl bg-white/5 border border-secondary-green/20">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-6 h-6 text-secondary-green" />
                                <h5 className="text-lg font-bold text-white">연간 기대 수익</h5>
                            </div>
                            <div className="space-y-4">
                                {roiData.benefits.map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <span className="text-sm text-neutral-cream/70">{item.label}</span>
                                        <span className="text-sm font-mono text-secondary-green">{item.amount}</span>
                                    </div>
                                ))}
                                <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">합계</span>
                                    <span className="text-lg font-mono font-bold text-secondary-green">600만원</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROI Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-secondary-gold/10 to-secondary-green/10 border border-secondary-gold/20 text-center"
                    >
                        <div className="text-sm text-neutral-cream/60 mb-1">순수익 500만원</div>
                        <div className="text-5xl font-mono font-bold text-secondary-gold">ROI 500%</div>
                        <div className="text-sm text-neutral-cream/50 mt-2">
                            정부 지원금 활용 시 실질 부담은 더욱 낮아집니다
                        </div>
                    </motion.div>
                </motion.div>

                {/* Success Stories */}
                <div className="mb-20">
                    <h4 className="text-center text-2xl font-serif font-bold text-white mb-10">
                        실제 도입 농가 성과
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {successStories.map((story, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <story.icon className="w-8 h-8 text-secondary-gold mb-4" />
                                <h5 className="text-base font-bold text-white mb-3">{story.region}</h5>
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs px-1.5 py-0.5 rounded bg-red-400/20 text-red-400 flex-shrink-0">전</span>
                                        <span className="text-sm text-neutral-cream/50">{story.before}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-xs px-1.5 py-0.5 rounded bg-secondary-green/20 text-secondary-green flex-shrink-0">후</span>
                                        <span className="text-sm text-secondary-green font-medium">{story.after}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Government Support */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                >
                    <h4 className="text-center text-2xl font-serif font-bold text-white mb-8">
                        정부 지원 받으세요
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {govSupport.map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                                <span className="text-sm text-neutral-cream/70">{item.item}</span>
                                <span className="text-sm font-medium text-secondary-green">{item.support}</span>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { name: 'GAP 인증', org: '농산물품질관리원', tel: '1544-8572' },
                            { name: '수출 지원', org: '한국농수산식품유통공사', tel: '1577-9700' },
                            { name: '시스템 문의', org: 'FarmSense', tel: '1522-1234' },
                        ].map((contact, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm">
                                <Phone className="w-3.5 h-3.5 text-secondary-gold" />
                                <span className="text-neutral-cream/60">{contact.name}</span>
                                <span className="text-white font-medium">{contact.tel}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}
