'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Camera, MessageSquare, CheckCircle2, Copy, Smartphone, Zap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AiAssistantPage() {
    const [activeTab, setActiveTab] = useState<'app' | 'sensor'>('app');

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('프롬프트가 복사되었습니다! AI 채팅창에 붙여넣으세요.');
    };

    return (
        <main className="min-h-screen bg-neutral-900 pt-20">
            {/* Hero Section */}
            <Section className="py-20 border-b border-white/10 bg-gradient-to-b from-neutral-900 to-[#111]">
                <Container className="max-w-5xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-secondary-gold/10 text-secondary-gold px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Zap className="w-4 h-4" />
                            <span>AI Self-Diagnosis Assistant</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            전화보다 빠른 <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-gold to-yellow-200">
                                AI 시각 진단
                            </span>
                        </h1>
                        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                            사용 중인 ChatGPT, Gemini에게 사진만 보여주세요.<br />
                            복잡한 설정값도, 어려운 배선 연결도 1분이면 해결됩니다.
                        </p>
                    </motion.div>
                </Container>
            </Section>

            {/* 3-Step Process (Infographic) */}
            <Section className="py-16 bg-neutral-black">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                        {/* Connecting Lines (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-white/10 via-secondary-gold/50 to-white/10 z-0"></div>

                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <Camera className="w-10 h-10 text-blue-400" />
                            </div>
                            <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded text-xs font-bold mb-3">STEP 01</div>
                            <h3 className="text-xl font-bold text-white mb-2">찍으세요</h3>
                            <p className="text-neutral-400 text-sm">
                                오류 화면이나 센서 배선을<br />
                                카메라로 선명하게 촬영합니다.
                            </p>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <MessageSquare className="w-10 h-10 text-secondary-gold" />
                            </div>
                            <div className="bg-secondary-gold/10 text-secondary-gold px-3 py-1 rounded text-xs font-bold mb-3">STEP 02</div>
                            <h3 className="text-xl font-bold text-white mb-2">물어보세요</h3>
                            <p className="text-neutral-400 text-sm">
                                아래 '마법의 질문'을 복사해서<br />
                                AI에게 사진과 함께 보내세요.
                            </p>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                <CheckCircle2 className="w-10 h-10 text-green-400" />
                            </div>
                            <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded text-xs font-bold mb-3">STEP 03</div>
                            <h3 className="text-xl font-bold text-white mb-2">해결 완료!</h3>
                            <p className="text-neutral-400 text-sm">
                                AI가 알려주는 순서대로<br />
                                따라하면 즉시 해결됩니다.
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </Section>

            {/* Prompt Generator Section */}
            <Section className="py-20 bg-neutral-900">
                <Container className="max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">상황별 마법의 질문 (Propmts)</h2>
                        <p className="text-neutral-400">
                            가장 자주 겪는 상황입니다. 버튼을 눌러 질문을 복사하세요.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="bg-white/5 p-1 rounded-lg flex space-x-1">
                            <button
                                onClick={() => setActiveTab('app')}
                                className={`px-6 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'app'
                                        ? 'bg-secondary-gold text-black shadow-lg'
                                        : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                <Smartphone className="w-4 h-4" /> 앱 설정/등록 화면
                            </button>
                            <button
                                onClick={() => setActiveTab('sensor')}
                                className={`px-6 py-3 rounded-md text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'sensor'
                                        ? 'bg-secondary-gold text-black shadow-lg'
                                        : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                <Zap className="w-4 h-4" /> 센서 배선/설치
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <AnimatePresence mode="wait">
                        {activeTab === 'app' ? (
                            <motion.div
                                key="app"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="space-y-6"
                            >
                                <PromptCard
                                    title="KT 스마트팜 API 연동"
                                    situation="KT API 발급 화면을 캡처하고..."
                                    prompt="이 화면에서 API Key라고 적힌 곳에 문자로 받은 번호를 넣으면 되니?"
                                    onCopy={copyToClipboard}
                                />
                                <PromptCard
                                    title="센서 등록 (S/N 입력)"
                                    situation="센서 뒷면 라벨이나 박스 사진을 찍고..."
                                    prompt="이 사진에서 앱에 입력해야 할 센서 ID(S/N)가 어떤 숫자니?"
                                    onCopy={copyToClipboard}
                                />
                                <PromptCard
                                    title="연결 오류 메시지 해결"
                                    situation="에러 메시지가 뜬 화면을 캡처하고..."
                                    prompt="앱에 이런 글자가 뜨는데, 내가 뭘 더 눌러야 해결되니?"
                                    onCopy={copyToClipboard}
                                    warning="Tip: 에러 코드가 잘 보이게 찍으세요!"
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sensor"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="space-y-6"
                            >
                                <PromptCard
                                    title="전선 연결(배선) 확인"
                                    situation="센서 단자대(터미널)에 선이 꽂힌 상태를 찍고..."
                                    prompt="지금 내가 연결한 전선 색깔이 올바른 순서인지 봐줘. '빨간색'은 VCC, '검정색'은 GND에 연결된 것처럼 보이니? 위험해 보이면 알려줘."
                                    onCopy={copyToClipboard}
                                    warning="주의: 전원 코드를 뽑고 촬영하세요!"
                                />
                                <PromptCard
                                    title="센서 상태 LED 확인"
                                    situation="깜빡이는 불빛을 찍거나 동영상으로 보여주며..."
                                    prompt="지금 LED 불빛이 몇 초 간격으로 깜빡이는지 봐줘. 이게 정상 작동 표시인지, 에러 표시인지 매뉴얼 기준으로 판단해 줄 수 있니?"
                                    onCopy={copyToClipboard}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Placeholders for actual screenshots (Mapping Guide) */}
                    <div className="mt-16 border-t border-white/10 pt-10">
                        <div className="bg-white/10 rounded-xl p-8 text-center border border-white/10 border-dashed">
                            <h3 className="text-lg font-bold text-white mb-2">📷 실제 화면 예시 (업데이트 예정)</h3>
                            <p className="text-neutral-400 text-sm mb-6">
                                농민분들이 가장 많이 질문하신 실제 화면들을 준비 중입니다.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto opacity-75">
                                <div className="space-y-2">
                                    <div className="aspect-video bg-white/5 rounded flex items-center justify-center text-xs text-neutral-500 border border-white/10">
                                        KT 연동 화면.jpg
                                    </div>
                                    <p className="text-xs text-secondary-gold">
                                        "고객센터(1588-0114) 전화 후 API 키를 문자로 받아 입력하세요"
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <div className="aspect-video bg-white/5 rounded flex items-center justify-center text-xs text-neutral-500 border border-white/10">
                                        센서 등록 화면.jpg
                                    </div>
                                    <p className="text-xs text-neutral-400">
                                        센서 종류 선택 및 S/N 입력 예시
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}

function PromptCard({ title, situation, prompt, onCopy, warning }: { title: string, situation: string, prompt: string, onCopy: (text: string) => void, warning?: string }) {
    return (
        <div className="bg-white/10 border border-white/10 rounded-xl p-6 hover:border-secondary-gold/50 transition-colors group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        {title}
                        {warning && <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">{warning}</span>}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">📸 {situation}</p>
                </div>
                <button
                    onClick={() => onCopy(prompt)}
                    className="bg-secondary-gold/10 hover:bg-secondary-gold text-secondary-gold hover:text-black px-4 py-2 rounded-md font-medium text-sm transition-all border border-secondary-gold/20 shrink-0 flex items-center"
                >
                    <Copy className="w-4 h-4 mr-2" />
                    질문 복사하기
                </button>
            </div>
            <div className="bg-black/40 rounded-lg p-4 font-mono text-sm text-neutral-300 border border-white/10 relative group-hover:bg-black/60 transition-colors">
                "{prompt}"
            </div>
        </div>
    );
}
