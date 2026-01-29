'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { FileText, PenTool, CheckCircle2, ChevronRight, AlertTriangle, Lock, ArrowRightLeft, Scale } from 'lucide-react';
import { useModal } from '../providers/modal-provider';

export function AdvocacyCampaign() {
    const { openModal } = useModal();
    const [signedCount, setSignedCount] = useState(1284);
    const [isSigned, setIsSigned] = useState(false);
    const [message, setMessage] = useState('');

    const handleSign = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSigned) {
            setSignedCount(prev => prev + 1);
            setIsSigned(true);
            // Here you would typically send data to backend
        }
    };

    return (
        <Section className="bg-neutral-black relative border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Manifesto */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold rounded-full border border-red-500/20">
                                진행중인 캠페인
                            </span>
                            <span className="text-secondary-green font-mono text-xs tracking-widest uppercase">
                                Data Sovereignty
                            </span>
                        </div>

                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                            농업 데이터의 주인은 <br />
                            바로 <span className="text-secondary-green underline decoration-secondary-green/30 underline-offset-8">'농민'</span>입니다!
                        </h3>

                        <p className="text-xl text-neutral-cream/80 mb-8 leading-relaxed font-light">
                            디지털 소작농이 아닌, <strong className="text-white font-bold">데이터 주권자</strong>로 서기 위한 <br />
                            농민 서명 운동에 동참해주세요.
                        </p>

                        <div className="bg-neutral-900/50 border-l-4 border-red-500/50 p-6 mb-8 rounded-r-lg">
                            <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                                <AlertTriangle className="w-5 h-5 text-red-400" />
                                우리는 요구합니다 (농업 데이터 3대 권리)
                            </h4>
                            <ul className="space-y-3 mt-4">
                                <li className="flex gap-3 text-neutral-cream/80 text-sm">
                                    <ArrowRightLeft className="w-5 h-5 text-secondary-green shrink-0" />
                                    <div>
                                        <strong className="text-white block">1. 데이터 이동권 (Portability)</strong>
                                        "내 데이터, 내 마음대로 옮길 수 있게 하라!" 기업의 울타리에 갇히지 않을 권리.
                                    </div>
                                </li>
                                <li className="flex gap-3 text-neutral-cream/80 text-sm">
                                    <Lock className="w-5 h-5 text-secondary-green shrink-0" />
                                    <div>
                                        <strong className="text-white block">2. 수리할 권리와 접근권 (Access)</strong>
                                        "내 트랙터인데, 왜 내 맘대로 못 고칩니까?" 기계 데이터에 접근할 권리.
                                    </div>
                                </li>
                                <li className="flex gap-3 text-neutral-cream/80 text-sm">
                                    <Scale className="w-5 h-5 text-secondary-green shrink-0" />
                                    <div>
                                        <strong className="text-white block">3. 공정 거래 (Fairness)</strong>
                                        불공정 약관 폐지 및 표준 계약서 의무화.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <button
                                onClick={() => openModal(undefined, 'policy')}
                                className="w-full flex items-center justify-between gap-4 group p-5 border border-white/10 rounded-lg hover:border-secondary-green/50 hover:bg-secondary-green/5 transition-all text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary-green/20 transition-colors">
                                        <FileText className="w-6 h-6 text-white group-hover:text-secondary-green transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg group-hover:text-secondary-green transition-colors">
                                            정책 건의안 전문 보기
                                        </div>
                                        <div className="text-sm text-neutral-cream/60 mt-1">
                                            디지털 농업의 공정 전환을 위한 정책 건의서 (DAPI-2026-KR-01)
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-secondary-green transition-colors" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Column: Participation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5 shadow-2xl sticky top-24"
                    >
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <div>
                                <h4 className="text-xl font-bold text-white">서명 운동 참여하기</h4>
                                <p className="text-sm text-neutral-cream/60 mt-1">여러분의 서명이 법 제정의 씨앗이 됩니다</p>
                            </div>
                            {/* <div className="text-right">
                                <div className="text-3xl font-mono font-bold text-secondary-gold">
                                    {signedCount.toLocaleString()}
                                </div>
                                <div className="text-xs text-neutral-cream/50">현재 참여 인원</div>
                            </div> */}
                        </div>

                        {!isSigned ? (
                            <form onSubmit={handleSign} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs text-neutral-cream/60 mb-1">성함</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 text-white focus:outline-none focus:border-secondary-green transition-colors" placeholder="홍길동" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-neutral-cream/60 mb-1">지역/작물</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 text-white focus:outline-none focus:border-secondary-green transition-colors" placeholder="김천 / 포도" required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs text-neutral-cream/60 mb-1">정부와 기업에 바란다 (한마디)</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 text-white h-32 focus:outline-none focus:border-secondary-green transition-colors resize-none mb-1"
                                        placeholder="데이터 주권 회복을 위한 응원의 한마디를 남겨주세요."
                                    ></textarea>
                                    <p className="text-[10px] text-neutral-cream/40 text-right">개인정보는 서명 용도로만 사용됩니다.</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-secondary-green text-black font-bold py-4 rounded hover:bg-secondary-green/90 transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(75,183,117,0.2)] hover:shadow-[0_0_30px_rgba(75,183,117,0.4)]"
                                >
                                    <PenTool className="w-5 h-5" />
                                    서명 및 동참하기
                                </button>
                            </form>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-secondary-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-secondary-green" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3">서명해 주셔서 감사합니다!</h4>
                                <p className="text-neutral-cream/70 leading-relaxed mb-8">
                                    농민이 주인이 되는 데이터 세상을<br />
                                    FarmSense가 함께 만들어가겠습니다.<br />
                                    <span className="text-sm opacity-60 mt-2 block">(제출된 의견은 국회 전달용 자료집에 수록됩니다)</span>
                                </p>
                                <button
                                    onClick={() => setIsSigned(false)}
                                    className="text-sm text-neutral-cream/40 hover:text-white underline"
                                >
                                    다른 분 서명하기
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
