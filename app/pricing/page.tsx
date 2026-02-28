import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Check, X, Minus } from 'lucide-react';

export const metadata = {
    title: '요금제 상세 비교 - FarmSense',
    description: 'FarmSense 무료 / 일반 / 수출농가 요금제 기능 상세 비교',
};

const features = [
    {
        category: '기본 기능',
        items: [
            { label: '기본 환경 모니터링 (온·습도, 강우량)', free: true, general: true, export: true },
            { label: '기상 정보 제공', free: true, general: true, export: true },
            { label: '커뮤니티', free: true, general: true, export: true },
            { label: '영농일지', free: '월 10건', general: '무제한', export: '무제한' },
        ],
    },
    {
        category: 'AI · 진단',
        items: [
            { label: 'AI 병해 진단', free: false, general: true, export: true },
            { label: '병해 예측 (PMI)', free: false, general: true, export: true },
            { label: 'AI 스마트 도우미 상담', free: false, general: true, export: true },
            { label: 'RAG 기반 농업 지식 검색', free: false, general: true, export: true },
        ],
    },
    {
        category: '센서 · 데이터',
        items: [
            { label: '센서 연동', free: '1개', general: '무제한', export: '무제한' },
            { label: '데이터 분석 리포트', free: false, general: true, export: true },
            { label: '데이터 내보내기 (CSV)', free: false, general: true, export: true },
            { label: '장기 데이터 보관', free: '3개월', general: '1년', export: '무제한' },
        ],
    },
    {
        category: '수출농가 전용',
        items: [
            { label: 'PLS 농약안전사용기준 관리', free: false, general: false, export: true },
            { label: '잔류농약 기록 관리', free: false, general: false, export: true },
            { label: '수출 이력 추적 (블록체인)', free: false, general: false, export: true },
            { label: '수출 서류 지원', free: false, general: false, export: true },
        ],
    },
    {
        category: '고객 지원',
        items: [
            { label: '커뮤니티 지원', free: true, general: true, export: true },
            { label: '이메일 지원', free: false, general: true, export: true },
            { label: '전담 고객 지원', free: false, general: false, export: true },
        ],
    },
];

function Cell({ value }: { value: boolean | string }) {
    if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === false) return <X className="w-5 h-5 text-neutral-600 mx-auto" />;
    return <span className="text-xs text-neutral-cream/70">{value}</span>;
}

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-5xl py-12">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4 pb-4 border-b-4 border-green-600">
                            요금제 상세 비교
                        </h1>
                        <p className="text-neutral-cream/60">나에게 맞는 플랜을 선택하세요</p>
                    </div>

                    {/* Plan Header Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                        <div className="col-span-1" />
                        {[
                            { name: '무료', price: '₩0', sub: '', badge: null, highlight: false },
                            { name: '일반', price: '₩5,000', sub: '월 / 연 ₩20,000', badge: '인기', highlight: false },
                            { name: '수출농가', price: '₩10,000', sub: '월 / 연 ₩50,000', badge: '수출 특화', highlight: true },
                        ].map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative p-5 rounded-xl border text-center ${plan.highlight
                                    ? 'bg-neutral-900 border-secondary-gold shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                                    : 'bg-neutral-900 border-white/10'
                                    }`}
                            >
                                {plan.badge && (
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full ${plan.highlight ? 'bg-secondary-gold text-neutral-black' : 'bg-green-600 text-white'}`}>
                                        {plan.badge}
                                    </div>
                                )}
                                <p className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-secondary-gold' : 'text-white'}`}>{plan.name}</p>
                                <p className="text-2xl font-bold text-white">{plan.price}</p>
                                {plan.sub && <p className="text-xs text-neutral-cream/50 mt-1">{plan.sub}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Feature Comparison Table */}
                    <div className="rounded-xl border border-white/10 overflow-hidden">
                        {features.map((section, si) => (
                            <div key={si}>
                                {/* Category Header */}
                                <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                                    <div className="col-span-4 px-5 py-3">
                                        <span className="text-xs font-bold text-secondary-gold uppercase tracking-wider">{section.category}</span>
                                    </div>
                                </div>
                                {/* Feature Rows */}
                                {section.items.map((item, ii) => (
                                    <div
                                        key={ii}
                                        className={`grid grid-cols-4 border-b border-white/5 items-center ${ii % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                                    >
                                        <div className="px-5 py-4 text-sm text-neutral-cream/80">{item.label}</div>
                                        <div className="px-5 py-4 text-center"><Cell value={item.free} /></div>
                                        <div className="px-5 py-4 text-center"><Cell value={item.general} /></div>
                                        <div className="px-5 py-4 text-center"><Cell value={item.export} /></div>
                                    </div>
                                ))}
                            </div>
                        ))}

                        {/* CTA Row */}
                        <div className="grid grid-cols-4 bg-white/5 items-center py-6 px-5 gap-4">
                            <div className="text-sm text-neutral-cream/60">앱에서 결제</div>
                            <div className="text-center">
                                <a href="/smartfarm/dashboard" className="inline-block px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-bold hover:bg-white/20 transition-all">
                                    무료 시작
                                </a>
                            </div>
                            <div className="text-center">
                                <a href="/smartfarm/dashboard" className="inline-block px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-bold hover:bg-green-500 transition-all">
                                    일반 시작
                                </a>
                            </div>
                            <div className="text-center">
                                <a href="/smartfarm/dashboard" className="inline-block px-4 py-2 rounded-lg bg-secondary-gold text-neutral-black text-sm font-bold hover:brightness-110 transition-all">
                                    수출농가 시작
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="mt-8 p-5 rounded-xl bg-white/5 border border-white/10 text-sm text-neutral-cream/60 space-y-2">
                        <p>• 결제는 <strong className="text-neutral-cream/80">팜센스(FarmSense) 앱</strong> 내에서 이루어집니다.</p>
                        <p>• 연 결제 시 월 결제 대비 할인이 적용됩니다.</p>
                        <p>• <strong className="text-neutral-cream/80">PLS(농약허용물질목록관리제도)</strong>는 수출농가 플랜에서만 제공됩니다.</p>
                        <p>• 환불·취소 정책은 <a href="/refund-policy" className="text-green-400 hover:text-green-300 underline">환불·취소 정책 페이지</a>를 참고하세요.</p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/15 text-neutral-cream/70 text-sm">
                        © 2026 FarmSense. All rights reserved.
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
