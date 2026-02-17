'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { motion } from 'framer-motion';
import { FileText, Database, Target, Search, Brain, MessageSquare, ArrowRight, ExternalLink, Check, X } from 'lucide-react';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

export default function RagSystemPage() {

    return (
        <main className="bg-neutral-black min-h-screen pt-20">
            {/* Hero */}
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-purple/20 to-transparent pointer-events-none" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            RAG System
                        </h1>
                        <p className="text-xl text-neutral-cream/80 leading-relaxed max-w-2xl mx-auto">
                            Retrieval-Augmented Generation for Precision Agriculture:
                            LLM의 추론 능력과 방대한 농업 지식베이스의 결합
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* Metrics */}
            <Section className="py-12 border-b border-white/10">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Database, label: "Knowledge Chunks", value: "287,000", suffix: "+" },
                            { icon: FileText, label: "Technical Papers", value: "4,600", suffix: "" },
                            { icon: Target, label: "Accuracy", value: "90", suffix: "%" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:border-secondary-gold/50 transition-colors"
                            >
                                <item.icon className="w-10 h-10 text-secondary-gold mx-auto mb-4" />
                                <div className="text-4xl font-bold text-white mb-2">
                                    {item.value}<span className="text-secondary-gold">{item.suffix}</span>
                                </div>
                                <div className="text-neutral-cream/60">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Why This Matters */}
            <Section className="py-20 bg-neutral-900 border-b border-white/10">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-16 text-center">Why RAG?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 rounded-2xl bg-red-950/20 border border-red-900/30">
                            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                                <X className="w-6 h-6" /> 기존 방식
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-neutral-cream/70">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                    <span>인터넷 검색: 정보 과부하로 신뢰할 수 있는 정보 선별 불가능</span>
                                </li>
                                <li className="flex items-start gap-3 text-neutral-cream/70">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                    <span>기술센터: 연결이 어렵고 야간/휴일 상담 불가</span>
                                </li>
                                <li className="flex items-start gap-3 text-neutral-cream/70">
                                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                                    <span>일반 챗봇: 농업 전문성이 부족하고 '할루시네이션(거짓 정보)' 위험</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl bg-green-950/20 border border-green-900/30 relative overflow-hidden">
                            <div className="absolute inset-0 bg-secondary-purple/5 pointer-events-none" />
                            <h3 className="text-xl font-bold text-secondary-purple mb-6 flex items-center gap-2">
                                <Check className="w-6 h-6" /> FarmSense RAG
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-start gap-3 text-white">
                                    <Check className="w-5 h-5 text-secondary-purple shrink-0" />
                                    <span>4,600편 논문 기반: 검증된 학술 데이터에 기반한 정확한 답변</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <Check className="w-5 h-5 text-secondary-purple shrink-0" />
                                    <span>24시간 즉시 응답: 언제 어디서나 2.3초 이내 해결책 제시</span>
                                </li>
                                <li className="flex items-start gap-3 text-white">
                                    <Check className="w-5 h-5 text-secondary-purple shrink-0" />
                                    <span>출처 명시: 답변의 근거가 되는 문서 출처를 투명하게 공개</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* How It Works */}
            <Section className="py-20">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Search,
                                title: "1. Retrieval",
                                desc: "사용자의 질문과 가장 관련성 높은 정보를 28만개의 지식 청크에서 벡터 유사도 검색으로 찾아냅니다."
                            },
                            {
                                icon: Brain,
                                title: "2. Augmentation",
                                desc: "검색된 전문 지식을 LLM 프롬프트에 컨텍스트로 주입하여 할루시네이션을 방지하고 전문성을 더합니다."
                            },
                            {
                                icon: MessageSquare,
                                title: "3. Generation",
                                desc: "검증된 농업 지식을 바탕으로 사용자의 상황에 맞는 구체적이고 실행 가능한 답변을 생성합니다."
                            }
                        ].map((step, i) => (
                            <div key={i} className="relative p-6 bg-neutral-900 rounded-xl border border-white/10">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary-purple rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg">
                                    {i + 1}
                                </div>
                                <step.icon className="w-10 h-10 text-white/50 mb-4 ml-4" />
                                <h3 className="text-xl font-bold text-white mb-2 ml-4">{step.title}</h3>
                                <p className="text-neutral-cream/70 ml-4 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Technical Details & Architecture */}
            <Section className="py-20 bg-neutral-900 border-y border-white/10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-white mb-6">
                                Technical Details
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-secondary-purple font-bold mb-2">Vector Database</h4>
                                    <p className="text-neutral-cream/70">
                                        고성능 분산 벡터 데이터베이스를 사용하여 밀리초 단위의 검색 속도를 보장합니다.
                                        모든 농업 지식 데이터는 OpenAI의 text-embedding-ada-002 모델을 통해 벡터화되었습니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-secondary-purple font-bold mb-2">Hybrid Search</h4>
                                    <p className="text-neutral-cream/70">
                                        단순 키워드 매칭(BM25)과 의미 기반 벡터 검색(Dense Retrieval)을 결합하여
                                        전문 용어와 자연어 질의 모두에 대해 정확한 결과를 제공합니다.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-secondary-purple font-bold mb-2">Source Attribution</h4>
                                    <p className="text-neutral-cream/70">
                                        생성된 모든 답변은 참조한 원문 논문이나 기술 문서의 출처를 명시하여
                                        정보의 신뢰성을 투명하게 검증할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-gradient-to-br from-secondary-purple/20 to-secondary-gold/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
                            {/* Architecture Diagram Placeholder */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
                            <div className="relative z-10 w-full h-full p-8 flex flex-col justify-center items-center">
                                <div className="text-center space-y-4">
                                    <div className="bg-neutral-black/80 backdrop-blur-md p-4 rounded-xl border border-secondary-purple/50 shadow-xl">
                                        <Database className="w-12 h-12 text-secondary-purple mx-auto mb-2" />
                                        <div className="text-xs font-mono text-secondary-purple">Vector DB (Chroma)</div>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-white/30 rotate-90 mx-auto" />
                                    <div className="bg-neutral-black/80 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl">
                                        <Brain className="w-12 h-12 text-white mx-auto mb-2" />
                                        <div className="text-xs font-mono text-white">LLM (GPT-4)</div>
                                    </div>
                                </div>
                                <div className="mt-8 text-sm font-mono text-white/50">System Architecture</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Real Results */}
            <Section className="py-20">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Real Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                            <div className="text-4xl font-bold text-white mb-2">90%</div>
                            <div className="text-neutral-cream/60">응답 정확도</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                            <div className="text-4xl font-bold text-white mb-2">2.3s</div>
                            <div className="text-neutral-cream/60">평균 응답 시간</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl border border-white/10 text-center">
                            <div className="text-4xl font-bold text-white mb-2">4.5<span className="text-xl text-white/50">/5.0</span></div>
                            <div className="text-neutral-cream/60">농가 사용자 만족도</div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Use Cases */}
            <Section className="py-20 bg-neutral-900 border-y border-white/10">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">Use Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 bg-black/20 rounded-xl border border-white/10 hover:border-secondary-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">긴급 병해충 진단</h3>
                            <p className="text-neutral-cream/70 mb-4">
                                "포도잎에 하얀 곰팡이가 피었는데 어떻게 해야 하나요?"
                            </p>
                            <div className="p-4 bg-white/5 rounded-lg text-sm text-neutral-300">
                                → 흰가루병(Powdery Mildew) 증상으로 보입니다. 초기 단계이므로 석회유황합제를
                                100배 희석하여 살포하는 것을 권장합니다 (Smith et al., 2019).
                            </div>
                        </div>
                        <div className="p-8 bg-black/20 rounded-xl border border-white/10 hover:border-secondary-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">재배 기술 자문</h3>
                            <p className="text-neutral-cream/70 mb-4">
                                "샤인머스켓 당도를 높이려면 수확 전 관리를 어떻게 해야 하나요?"
                            </p>
                            <div className="p-4 bg-white/5 rounded-lg text-sm text-neutral-300">
                                → 착색기 이후에는 관수량을 평소의 70% 수준으로 줄여주세요.
                                또한 인산가리 엽면시비가 당도 향상에 도움을 줍니다 (RDA Guide, 2023).
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Related Papers */}
            <Section className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Related Papers</h2>
                        <ul className="space-y-4">
                            {[
                                {
                                    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
                                    authors: "Lewis et al.",
                                    venue: "NeurIPS 2020",
                                    url: "https://arxiv.org/abs/2005.11401"
                                },
                                {
                                    title: "Text Embeddings by Weakly-Supervised Contrastive Pre-training",
                                    authors: "Wang et al.",
                                    venue: "arXiv 2022",
                                    url: "https://arxiv.org/abs/2212.03533"
                                },
                                {
                                    title: "ChromaDB: AI-native open-source embedding database",
                                    authors: "Chroma",
                                    venue: "GitHub 2023",
                                    url: "https://github.com/chroma-core/chroma"
                                }
                            ].map((paper, i) => (
                                <li key={i}>
                                    <a
                                        href={paper.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex gap-4 p-4 hover:bg-white/5 rounded-lg transition-colors group"
                                    >
                                        <span className="text-secondary-purple font-mono font-bold group-hover:text-secondary-gold transition-colors">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1">
                                            <div className="text-white font-medium group-hover:underline flex items-center gap-2">
                                                {paper.title}
                                                <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-secondary-gold" />
                                            </div>
                                            <div className="text-sm text-neutral-500">
                                                {paper.authors}, <span className="text-white/40">{paper.venue}</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </Section>

            {/* FAQ */}
            <Section className="py-20 bg-neutral-900 border-t border-white/10">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">자주 묻는 질문</h2>
                    <Accordion>
                        <AccordionItem title="인터넷 없이도 사용할 수 있나요?">
                            현재는 방대한 지식 베이스(28만 청크)와 실시간 연동을 위해 인터넷 연결이 필요합니다.
                            향후 일부 경량화된 모델을 탑재하여 오프라인 모드를 지원할 예정입니다.
                        </AccordionItem>
                        <AccordionItem title="어떤 질문을 할 수 있나요?">
                            포도 재배, 병해충 관리, 토양 관리, 농약 사용법, 수확 시기, 품종 특성 등
                            농업 전반에 대한 기술적인 질문부터 기상 상황에 따른 대처법까지 다양하게 질문할 수 있습니다.
                        </AccordionItem>
                        <AccordionItem title="답변의 정확도는 믿을 수 있나요?">
                            네, 모든 답변은 검증된 학술 논문과 기술 문서를 근거로 생성되며,
                            참고한 문헌의 출처를 함께 표시하므로 사용자가 직접 신뢰성을 확인할 수 있습니다.
                            또한 불확실한 정보는 답변하지 않도록 설계되어 있습니다.
                        </AccordionItem>
                    </Accordion>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="py-20 bg-gradient-to-t from-secondary-purple/20 to-transparent">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            FarmSense의 RAG 기술을 직접 경험해보세요
                        </h2>
                        <p className="text-neutral-cream/70 mb-8 max-w-2xl mx-auto">
                            실제 데이터 기반의 놀라운 정확도를 확인하실 수 있습니다.
                        </p>
                        <a
                            href="/downloads/farmsense.apk"
                            download
                            className="inline-flex items-center gap-2 bg-secondary-purple text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all shadow-lg shadow-secondary-purple/20"
                        >
                            APK 다운로드
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
