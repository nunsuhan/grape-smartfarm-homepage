import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Container } from '@/components/ui/container';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Check, AlertTriangle, ArrowRight, Search, Target, Zap, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function AiDiagnosisWhyPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-white selection:bg-secondary-gold">
            <Navbar />

            {/* Section 1: Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/70 via-neutral-black/50 to-neutral-black z-10" />
                    {/* Placeholder for background image */}
                    <div className="w-full h-full bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1591080469184-188b0a99057b?q=80&w=2669&auto=format&fit=crop")' }}></div>
                </div>

                <Container className="relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
                        AI 병해 진단, <br className="md:hidden" />왜 필요한가?
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-cream/90 max-w-3xl mx-auto font-light">
                        사람 눈에 보이기 3일 전,<br className="md:hidden" /> AI는 이미 알고 있습니다.
                    </p>
                </Container>
            </section>

            {/* Section 2: Problem */}
            <section className="py-20 bg-neutral-black">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-medium animate-pulse">
                            <AlertTriangle size={18} />
                            <span>전세계 농업 손실의 35%가 병해충입니다</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold">
                            "병해를 발견했을 때는<br />이미 늦었습니다"
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3 text-red-400">늦은 발견</h3>
                                <p className="text-neutral-cream/70">육안으로 증상이 보일 때는 이미 병원균이 주변으로 확산된 상태입니다.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3 text-red-400">오진 위험</h3>
                                <p className="text-neutral-cream/70">비슷한 증상의 병해를 혼동하여 잘못된 약제를 사용하면 내성만 키웁니다.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <h3 className="text-xl font-bold mb-3 text-red-400">인력 한계</h3>
                                <p className="text-neutral-cream/70">수천 평의 농장을 매일 꼼꼼히 점검하는 것은 물리적으로 불가능합니다.</p>
                            </div>
                        </div>
                        <p className="text-sm text-neutral-cream/40 text-right mt-4">출처: 국제농업연구센터 (ICAR)</p>
                    </div>
                </Container>
            </section>

            {/* Section 3: Comparison Table */}
            <section className="py-20 bg-[#1A0A2E]">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">왜 AI 진단인가?</h2>
                        <p className="text-neutral-cream/60">전통적인 육안 검사와 AI 정밀 진단의 차이</p>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6 font-bold text-center">
                            <div className="text-neutral-cream/60">구분</div>
                            <div className="text-neutral-cream">육안 검사</div>
                            <div className="text-secondary-gold">AI 진단</div>
                        </div>

                        <div className="divide-y divide-white/5 bg-neutral-black/40 backdrop-blur-sm">
                            {[
                                { label: '초기 탐지', human: '증상 발현 후', ai: '증상 발현 3일 전' },
                                { label: '정확도', human: '경험에 의존', ai: '95-99%' },
                                { label: '일관성', human: '피로시 저하', ai: '항상 일정' },
                                { label: '속도', human: '수백 그루/일', ai: '수천 장/시간' },
                                { label: '기록', human: '수기/기억', ai: '자동 저장 & 분석' },
                            ].map((item, idx) => (
                                <div key={idx} className="grid grid-cols-3 p-6 text-center hover:bg-white/5 transition-colors">
                                    <div className="font-medium text-neutral-cream/80">{item.label}</div>
                                    <div className="text-neutral-cream/60">{item.human}</div>
                                    <div className="font-bold text-secondary-gold">{item.ai}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 4: 4 Strong Points */}
            <section className="py-24 bg-neutral-black relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary-purple/20 blur-[120px] rounded-full pointer-events-none" />

                <Container>
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">AI가 더 강력한 4가지 순간</h2>
                        <p className="text-neutral-cream/60">인간의 눈으로는 놓치기 쉬운 영역을 AI가 보완합니다</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                            <CardHeader>
                                <Search className="w-10 h-10 text-secondary-gold mb-4" />
                                <CardTitle className="text-xl">초기 미세 반점</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-cream/70 mb-4">0.5mm 이하의 아주 작은 병반도 놓치지 않고 감지합니다.</p>
                                <ul className="text-sm text-neutral-cream/50 space-y-2">
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 0.5mm 이하 감지</li>
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 잎 뒷면 초기 증상</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                            <CardHeader>
                                <Target className="w-10 h-10 text-secondary-gold mb-4" />
                                <CardTitle className="text-xl">유사 병해 구분</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-cream/70 mb-4">탄저병, 흑부병, 노균병 등 육안으로 구별하기 힘든 7종의 병해를 명확히 구분합니다.</p>
                                <ul className="text-sm text-neutral-cream/50 space-y-2">
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 7종 분류 정확도 97.22%</li>
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 흑부병/Esca 99.17% 정확도</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                            <CardHeader>
                                <Zap className="w-10 h-10 text-secondary-gold mb-4" />
                                <CardTitle className="text-xl">대면적 스캔</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-cream/70 mb-4">1,000장의 사진을 분석해도 첫 장과 동일한 정확도로 판단합니다.</p>
                                <ul className="text-sm text-neutral-cream/50 space-y-2">
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 피로도 0%</li>
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 24시간 분석 가능</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                            <CardHeader>
                                <BarChart className="w-10 h-10 text-secondary-gold mb-4" />
                                <CardTitle className="text-xl">객관적 기록</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-neutral-cream/70 mb-4">"좀 심해졌네"가 아닌 "감염 면적 12%에서 18%로 증가"로 수치화합니다.</p>
                                <ul className="text-sm text-neutral-cream/50 space-y-2">
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 감염 추세 데이터화</li>
                                    <li className="flex items-center gap-2"><Check size={14} className="text-secondary-gold" /> 방제 효과 정량 분석</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* Section 5: Research Stats */}
            <section className="py-20 bg-gradient-to-r from-[#1A0A2E] to-neutral-black">
                <Container>
                    <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        <div className="p-4">
                            <div className="text-5xl md:text-6xl font-bold text-secondary-gold mb-4">99.17%</div>
                            <div className="text-xl font-medium text-white mb-2">분류 정확도</div>
                            <div className="text-sm text-neutral-cream/50">흑부병/Esca 구분 (Information Processing in Agriculture)</div>
                        </div>
                        <div className="p-4">
                            <div className="text-5xl md:text-6xl font-bold text-secondary-gold mb-4">3일</div>
                            <div className="text-xl font-medium text-white mb-2">조기 발견</div>
                            <div className="text-sm text-neutral-cream/50">증상 발현 전 탐지 (Nature Scientific Reports)</div>
                        </div>
                        <div className="p-4">
                            <div className="text-5xl md:text-6xl font-bold text-secondary-gold mb-4">97.22%</div>
                            <div className="text-xl font-medium text-white mb-2">다중 병해 진단</div>
                            <div className="text-sm text-neutral-cream/50">포도 병해 7종 분류 (Frontiers in Plant Science)</div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 6: Recommendation */}
            <section className="py-24 bg-neutral-black">
                <Container>
                    <div className="bg-gradient-to-br from-white/10 to-transparent p-8 md:p-12 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto">
                        <div className="flex justify-center items-center gap-4 mb-8 text-4xl">
                            <span>🤖</span>
                            <span className="text-white/20">+</span>
                            <span>👁️</span>
                            <span className="text-white/20">=</span>
                            <span>🎯</span>
                        </div>

                        <h2 className="text-3xl font-serif font-bold mb-6">AI와 농민이 함께할 때 가장 완벽합니다</h2>
                        <div className="space-y-6 text-lg text-neutral-cream/80 leading-relaxed">
                            <p>
                                "AI가 모든 것을 대체할 수는 없습니다.<br />
                                하지만 <strong>초기 미세 증상은 AI가 사람보다 훨씬 잘 찾아냅니다.</strong>"
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 text-left bg-black/30 p-6 rounded-xl">
                                <div>
                                    <h4 className="font-bold text-secondary-gold mb-2">🤖 AI의 역할</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• 수만 장의 사진 초고속 스캔</li>
                                        <li>• 육안으로 안 보이는 미세 병반 탐지</li>
                                        <li>• 객관적인 데이터 기록</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">👁️ 농민의 역할</h4>
                                    <ul className="text-sm space-y-1">
                                        <li>• 밭의 전체적인 맥락 파악</li>
                                        <li>• AI 결과를 바탕으로 한 최종 판단</li>
                                        <li>• 현장 경험을 통한 조치</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="font-medium text-white pt-4">
                                함께 사용할 때 99% 이상의 방제 효과를 달성할 수 있습니다.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link href="/technology/ai-diagnosis" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary-gold text-neutral-black font-bold rounded-full hover:bg-white transition-colors">
                                FarmSense AI 체험해보기 <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Section 8: References */}
            <section className="py-12 bg-[#0D0619] border-t border-white/5">
                <Container>
                    <div className="text-sm text-neutral-cream/40 max-w-4xl mx-auto">
                        <h4 className="font-bold text-neutral-cream/60 mb-6 uppercase tracking-wider text-xs">참고 문헌</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-2">
                                <span className="text-secondary-gold shrink-0">[1]</span>
                                <div>
                                    <p className="font-bold text-neutral-cream/80">Frontiers in Plant Science (2020)</p>
                                    <p className="mb-1">"Grape Leaf Disease Identification Using Improved Deep CNNs" (정확도 97.22%)</p>
                                    <a href="https://www.frontiersin.org/articles/10.3389/fpls.2020.01082/full" target="_blank" rel="noopener noreferrer" className="text-secondary-gold/70 hover:text-secondary-gold hover:underline break-all">
                                        https://www.frontiersin.org/articles/10.3389/fpls.2020.01082/full
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-secondary-gold shrink-0">[2]</span>
                                <div>
                                    <p className="font-bold text-neutral-cream/80">Information Processing in Agriculture (2020)</p>
                                    <p className="mb-1">"Automatic grape leaf diseases identification via UnitedModel" (정확도 99.17%)</p>
                                    <a href="https://doi.org/10.1016/j.inpa.2019.10.003" target="_blank" rel="noopener noreferrer" className="text-secondary-gold/70 hover:text-secondary-gold hover:underline break-all">
                                        https://doi.org/10.1016/j.inpa.2019.10.003
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-secondary-gold shrink-0">[3]</span>
                                <div>
                                    <p className="font-bold text-neutral-cream/80">PMC/NCBI (2021)</p>
                                    <p className="mb-1">"Grape Leaf Black Rot Detection Based on Deep Learning" (정확도 98.23%)</p>
                                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8277438/" target="_blank" rel="noopener noreferrer" className="text-secondary-gold/70 hover:text-secondary-gold hover:underline break-all">
                                        https://pmc.ncbi.nlm.nih.gov/articles/PMC8277438/
                                    </a>
                                </div>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-secondary-gold shrink-0">[4]</span>
                                <div>
                                    <p className="font-bold text-neutral-cream/80">Nature Scientific Reports (2024)</p>
                                    <p className="mb-1">"Hyperspectral imaging for early detection" (초기 탐지 3일 전)</p>
                                    <a href="https://www.nature.com/articles/s41598-024-78650-6" target="_blank" rel="noopener noreferrer" className="text-secondary-gold/70 hover:text-secondary-gold hover:underline break-all">
                                        https://www.nature.com/articles/s41598-024-78650-6
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
