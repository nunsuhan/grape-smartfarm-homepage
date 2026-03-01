import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Container } from '@/components/ui/container';
import { AlertTriangle, ArrowRight, Camera, MessageSquareHeart } from 'lucide-react';
import Link from 'next/link';

export default function AiDiagnosisWhyPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-white selection:bg-secondary-gold">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/70 via-neutral-black/50 to-neutral-black z-10" />
                    <div className="w-full h-full bg-cover bg-center opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1591080469184-188b0a99057b?q=80&w=2669&auto=format&fit=crop")' }}></div>
                </div>
                <Container className="relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
                        AI 병해 진단,<br className="md:hidden" /> 솔직하게 말씀드립니다
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-cream/80 max-w-3xl mx-auto font-light">
                        이상 감지는 유효합니다. 병명 진단은 참고용입니다.
                    </p>
                </Container>
            </section>

            {/* 솔직한 현황 고지 */}
            <section className="py-16 bg-orange-500/5 border-y border-orange-500/20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-8 h-8 text-orange-400 shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-orange-300 mb-3">팜센스 AI 진단 현황 — 솔직한 고지</h2>
                                <ul className="space-y-3 text-neutral-cream/80 text-sm leading-relaxed">
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 shrink-0">•</span>
                                        현재 모델은 <strong className="text-white">10가지 주요 병해</strong>를 기준으로 학습됐습니다. 생리장해·작물보호제 반응(약해)은 아직 학습 데이터가 부족합니다.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 shrink-0">•</span>
                                        <strong className="text-white">병명 진단 정확도는 약 50% 수준</strong>입니다. 비슷한 증상의 병해를 혼동할 수 있으니 결과는 참고용으로만 활용하세요.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 shrink-0">•</span>
                                        <strong className="text-white">확증 편향 방지</strong>를 위해 AI가 제시하는 병명에 과도하게 의존하지 않도록 의도적으로 신뢰도를 낮게 표시합니다.
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-orange-400 shrink-0">•</span>
                                        현재 AI가 신뢰할 수 있는 역할은 <strong className="text-white">"정상 vs 이상" 감지</strong>입니다. 뭔가 이상하다는 신호를 빨리 포착하는 것이 핵심 가치입니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 문제: 왜 병해 진단이 어려운가 */}
            <section className="py-20 bg-neutral-black">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold">
                            "병해를 발견했을 때는<br />이미 늦었습니다"
                        </h2>
                        <p className="text-neutral-cream/60">이 문장은 여전히 사실입니다. 다만 AI가 해결하는 방식이 다릅니다.</p>

                        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3 text-red-400">늦은 발견</h3>
                                <p className="text-neutral-cream/70">육안으로 증상이 보일 때는 이미 병원균이 주변으로 확산된 상태입니다.</p>
                                <p className="text-secondary-gold text-sm mt-3">→ AI가 "이상 감지"로 조기 알림</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3 text-red-400">오진 위험</h3>
                                <p className="text-neutral-cream/70">비슷한 증상의 병해를 혼동하면 잘못된 약제 사용으로 내성만 키웁니다.</p>
                                <p className="text-orange-400 text-sm mt-3">→ AI도 동일한 위험 있음. 병명은 참고만</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3 text-red-400">인력 한계</h3>
                                <p className="text-neutral-cream/70">수천 평의 농장을 매일 꼼꼼히 점검하는 것은 물리적으로 불가능합니다.</p>
                                <p className="text-secondary-gold text-sm mt-3">→ AI가 24시간 이상 징후 모니터링</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* AI가 실제로 잘하는 것 vs 못하는 것 */}
            <section className="py-20 bg-white/[0.02] border-y border-white/10">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">AI가 실제로 잘하는 것과 못하는 것</h2>
                        <p className="text-neutral-cream/50">과장 없이 현재 수준을 말씀드립니다</p>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                            <p className="text-green-400 font-bold text-sm mb-4 tracking-widest uppercase">잘 합니다</p>
                            <ul className="space-y-3 text-neutral-cream/80 text-sm">
                                {[
                                    '정상 잎과 이상 잎 구분 (이상 감지)',
                                    '노균병·흰가루병 등 주요 10종 병해 후보 제시',
                                    '환경 데이터(온도·습도)로 병해 발생 위험도 계산',
                                    '연속 사진으로 증상 진행 추이 추적',
                                    '24시간 자동 모니터링 알림',
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-green-400 shrink-0">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                            <p className="text-red-400 font-bold text-sm mb-4 tracking-widest uppercase">아직 부족합니다</p>
                            <ul className="space-y-3 text-neutral-cream/80 text-sm">
                                {[
                                    '병명을 확정적으로 진단 (약 50% 수준)',
                                    '생리장해(칼슘 결핍·일소 등) 구분',
                                    '작물보호제 반응(약해) 판별',
                                    '학습하지 않은 희귀 병해 인식',
                                    '복합 병해(두 가지 동시 발생) 구분',
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-red-400 shrink-0">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 논문 기준 수치 (오해 없이) */}
            <section className="py-20 bg-neutral-black">
                <Container>
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-white mb-2">학계 연구 기준 성능 (참고)</h2>
                        <p className="text-neutral-cream/40 text-sm">아래 수치는 팜센스의 현재 성능이 아닌, 관련 학술 논문의 연구 결과입니다.<br />통제된 데이터셋 환경에서의 수치이며, 실제 현장 적용 시 달라질 수 있습니다.</p>
                    </div>

                    <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                            <div className="text-4xl font-bold text-secondary-gold/60 mb-2">99.17%</div>
                            <div className="text-sm text-white mb-1">흑부병/Esca 구분</div>
                            <div className="text-xs text-neutral-cream/30">논문 기준 (Information Processing in Agriculture)</div>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                            <div className="text-4xl font-bold text-secondary-gold/60 mb-2">97.22%</div>
                            <div className="text-sm text-white mb-1">포도 병해 7종 분류</div>
                            <div className="text-xs text-neutral-cream/30">논문 기준 (Frontiers in Plant Science)</div>
                        </div>
                        <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                            <div className="text-4xl font-bold text-secondary-gold/60 mb-2">~50%</div>
                            <div className="text-sm text-white mb-1">팜센스 현재 병명 진단</div>
                            <div className="text-xs text-neutral-cream/30">현장 조건 기준 (솔직한 현재 수준)</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 농가 사진 수집 읍소 */}
            <section className="py-24 bg-secondary-gold/5 border-y border-secondary-gold/20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="text-5xl mb-6">🙏</div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            농가 여러분의 사진이<br />
                            <span className="text-secondary-gold">AI를 완성합니다</span>
                        </h2>
                        <p className="text-neutral-cream/70 text-lg leading-relaxed mb-8">
                            지금 병명 진단이 50%인 이유는 단 하나입니다.<br />
                            <strong className="text-white">현장 사진 데이터가 부족하기 때문입니다.</strong><br /><br />
                            농가에서 실제로 겪으신 병해 사진과 진단 병명을 올려주시면,
                            그 데이터가 쌓일수록 팜센스 AI는 점점 정확해집니다.<br />
                            <span className="text-secondary-gold">여러분이 올린 사진 한 장이 전국 포도 농가의 방패가 됩니다.</span>
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left mb-8">
                            <p className="text-secondary-gold font-semibold mb-3 flex items-center gap-2">
                                <Camera className="w-4 h-4" /> 이런 사진을 올려주세요
                            </p>
                            <ul className="space-y-2 text-sm text-neutral-cream/70">
                                <li className="flex gap-2"><span className="text-secondary-gold">•</span>진단받은 (또는 확인된) 병해 사진 + 병명</li>
                                <li className="flex gap-2"><span className="text-secondary-gold">•</span>약해·생리장해로 확인된 사진 + 원인</li>
                                <li className="flex gap-2"><span className="text-secondary-gold">•</span>잎 앞면/뒷면 모두, 증상 부위 클로즈업</li>
                                <li className="flex gap-2"><span className="text-secondary-gold">•</span>발생 시기·지역·품종 메모 포함 시 더욱 도움됩니다</li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/support/board/write" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-gold text-neutral-black font-bold rounded-full hover:brightness-110 transition">
                                <MessageSquareHeart className="w-5 h-5" />
                                병해 사진 올리러 가기
                            </Link>
                            <Link href="/technology/ai-diagnosis" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition">
                                AI 진단 기술 상세 보기 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* AI + 농민 역할 분담 */}
            <section className="py-24 bg-neutral-black">
                <Container>
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto">
                        <div className="flex justify-center items-center gap-4 mb-8 text-4xl">
                            <span>🤖</span>
                            <span className="text-white/20">+</span>
                            <span>👁️</span>
                            <span className="text-white/20">=</span>
                            <span>🎯</span>
                        </div>
                        <h2 className="text-3xl font-serif font-bold mb-6">AI와 농민이 함께할 때 가장 완벽합니다</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-left bg-black/30 p-6 rounded-xl mb-6">
                            <div>
                                <h4 className="font-bold text-secondary-gold mb-2">🤖 AI의 역할</h4>
                                <ul className="text-sm space-y-1 text-neutral-cream/70">
                                    <li>• 24시간 이상 징후 자동 감지</li>
                                    <li>• 병해 후보 목록 제시 (참고용)</li>
                                    <li>• 환경 조건 기반 발생 위험도 계산</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-2">👁️ 농민의 역할</h4>
                                <ul className="text-sm space-y-1 text-neutral-cream/70">
                                    <li>• AI 알림 확인 후 현장 직접 확인</li>
                                    <li>• 병명 최종 판단 (전문가 상담 포함)</li>
                                    <li>• 확인된 사진 데이터 제보로 AI 개선 기여</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-neutral-cream/50 text-sm">
                            팜센스는 농민의 판단을 대체하지 않습니다. 더 빠르게, 더 많이 볼 수 있도록 돕습니다.
                        </p>
                    </div>
                </Container>
            </section>

            {/* References */}
            <section className="py-12 bg-neutral-black border-t border-white/10">
                <Container>
                    <div className="text-sm text-neutral-cream/40 max-w-4xl mx-auto">
                        <h4 className="font-bold text-neutral-cream/60 mb-6 uppercase tracking-wider text-xs">참고 문헌 (학술 연구 기준)</h4>
                        <ul className="space-y-4">
                            {[
                                {
                                    num: '[1]', title: 'Frontiers in Plant Science (2020)',
                                    desc: '"Grape Leaf Disease Identification Using Improved Deep CNNs" (연구 기준 97.22%)',
                                    href: 'https://www.frontiersin.org/articles/10.3389/fpls.2020.01082/full',
                                },
                                {
                                    num: '[2]', title: 'Information Processing in Agriculture (2020)',
                                    desc: '"Automatic grape leaf diseases identification via UnitedModel" (연구 기준 99.17%)',
                                    href: 'https://doi.org/10.1016/j.inpa.2019.10.003',
                                },
                                {
                                    num: '[3]', title: 'PMC/NCBI (2021)',
                                    desc: '"Grape Leaf Black Rot Detection Based on Deep Learning" (연구 기준 98.23%)',
                                    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8277438/',
                                },
                            ].map((ref) => (
                                <li key={ref.num} className="flex gap-2">
                                    <span className="text-secondary-gold shrink-0">{ref.num}</span>
                                    <div>
                                        <p className="font-bold text-neutral-cream/80">{ref.title}</p>
                                        <p className="mb-1">{ref.desc}</p>
                                        <a href={ref.href} target="_blank" rel="noopener noreferrer" className="text-secondary-gold/70 hover:text-secondary-gold hover:underline break-all">{ref.href}</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
