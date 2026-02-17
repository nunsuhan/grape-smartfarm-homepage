'use client';

import { Container } from '@/components/ui/container';
import { Camera, MessageSquare, Smartphone, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function SensorInstallationGuidePage() {
    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            {/* Header */}
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            AI 활용 센서 설치 가이드
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            센서 설치 도우미
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed font-serif">
                            복잡한 시스템을 배울 필요 없이, 이미 손안에 있는 AI(Gemini, ChatGPT 등)를 최고의 기술자로 만드는 가이드입니다.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl py-12">
                <div className="space-y-16">
                    {/* 핵심 개념 */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            <MessageSquare className="w-8 h-8 text-blue-400" />
                            AI를 기술자로 만드는 방법
                        </h2>
                        <div className="bg-blue-500/10 border-l-4 border-blue-600 p-6 rounded-lg">
                            <p className="text-lg text-neutral-cream/80 leading-relaxed">
                                <strong className="text-blue-900">"이 센서를 어떻게 연결하나요?"</strong>라는 질문 대신,
                                <br />
                                <strong className="text-blue-900">"센서 단자대 사진을 찍고 AI에게 '이 배선도대로 연결된 게 맞니?'라고 물어보세요"</strong>
                            </p>
                        </div>
                    </section>

                    {/* 시나리오 1: 센서 배선 확인 */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Camera className="w-6 h-6 text-green-400" />
                            시나리오 1: 센서 배선 확인
                        </h3>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-500/15 p-3 rounded-lg">
                                        <Smartphone className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white mb-2">1단계: 사진 촬영</h4>
                                        <p className="text-neutral-cream/70 mb-4">
                                            센서 단자대나 배선 상태를 명확하게 촬영합니다. 조명이 충분하고, 모든 연결부가 보이도록 촬영하세요.
                                        </p>
                                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                                            <div className="flex items-center gap-2 mb-2">
                                                <ImageIcon className="w-4 h-4 text-neutral-cream/60" />
                                                <span className="text-sm font-medium text-neutral-cream/80">참고 이미지 위치</span>
                                            </div>
                                            <p className="text-xs text-neutral-cream/60">
                                                실제 앱 화면: FarmSense 앱 → 센서 설정 → 배선 확인 화면
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-500/15 p-3 rounded-lg">
                                        <MessageSquare className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white mb-2">2단계: AI에게 질문하기</h4>
                                        <div className="bg-neutral-900 rounded-lg p-4 text-white font-mono text-sm">
                                            <div className="mb-2 text-neutral-cream/50">AI 프롬프트 예시:</div>
                                            <div className="space-y-2">
                                                <div className="text-green-400">"이 센서 배선 사진을 보여드립니다. 배선도대로 연결된 게 맞는지 확인해주세요."</div>
                                                <div className="text-green-400">"배선도: [배선도 이미지 첨부]"</div>
                                                <div className="text-green-400">"실제 연결 상태: [촬영한 사진 첨부]"</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/15 p-3 rounded-lg">
                                        <CheckCircle className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-white mb-2">3단계: AI 답변 확인</h4>
                                        <p className="text-neutral-cream/70">
                                            AI가 배선 상태를 분석하고, 잘못된 연결이 있으면 구체적으로 지적해줍니다.
                                            올바른 연결 방법도 함께 제시합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 시나리오 2: KT 스마트팜 API 키 입력 */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Camera className="w-6 h-6 text-orange-400" />
                            시나리오 2: KT 스마트팜 연동 - API 키 입력
                        </h3>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4">
                                <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 rounded">
                                    <p className="text-sm text-neutral-cream/80">
                                        <strong>중요:</strong> API 키 입력 화면을 촬영할 때는 개인정보가 노출되지 않도록 주의하세요.
                                        키의 일부만 보이도록 촬영하거나, 마스킹 처리된 화면을 사용하세요.
                                    </p>
                                </div>

                                <div className="bg-neutral-900 rounded-lg p-4 text-white font-mono text-sm">
                                    <div className="mb-2 text-neutral-cream/50">AI 프롬프트 예시:</div>
                                    <div className="space-y-2">
                                        <div className="text-green-400">"KT 스마트팜 연동을 위해 API 키를 입력해야 합니다."</div>
                                        <div className="text-green-400">"이 화면에서 어디에 키를 입력해야 하나요? [화면 캡처 첨부]"</div>
                                        <div className="text-green-400">"API 키는 어디서 발급받나요?"</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 시나리오 3: 센서 S/N 부착 위치 */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <Camera className="w-6 h-6 text-red-400" />
                            시나리오 3: 센서 S/N 부착 위치 확인
                        </h3>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8 shadow-sm">
                            <div className="space-y-4">
                                <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded">
                                    <p className="text-sm text-neutral-cream/80">
                                        <strong>팁:</strong> 센서 시리얼 넘버(S/N)를 앱에 등록할 때, 정확한 위치에 부착되어 있는지 확인이 필요합니다.
                                    </p>
                                </div>

                                <div className="bg-neutral-900 rounded-lg p-4 text-white font-mono text-sm">
                                    <div className="mb-2 text-neutral-cream/50">AI 프롬프트 예시:</div>
                                    <div className="space-y-2">
                                        <div className="text-green-400">"센서에 S/N이 부착되어 있는데, 이 위치가 맞나요? [센서 사진 첨부]"</div>
                                        <div className="text-green-400">"S/N을 앱에 입력할 때 주의할 점이 있나요?"</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 데이터 입력 품질 향상 가이드 */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-yellow-600" />
                            데이터 입력(사진 찍기) 품질 향상 가이드
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" />
                                    좋은 사진
                                </h4>
                                <ul className="space-y-2 text-sm text-neutral-cream/80">
                                    <li>• 충분한 조명</li>
                                    <li>• 모든 연결부가 명확히 보임</li>
                                    <li>• 초점이 맞춰져 있음</li>
                                    <li>• 배경이 깔끔함</li>
                                </ul>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    나쁜 사진
                                </h4>
                                <ul className="space-y-2 text-sm text-neutral-cream/80">
                                    <li>• 어두운 조명</li>
                                    <li>• 흔들려서 흐릿함</li>
                                    <li>• 일부만 보임</li>
                                    <li>• 복잡한 배경</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 실전 활용 팁 */}
                    <section className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">실전 활용 팁</h3>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">명확한 질문하기</h4>
                                        <p className="text-sm text-neutral-cream/70">
                                            "이게 맞나요?"보다는 "이 배선도대로 연결된 게 맞는지 확인해주세요"처럼 구체적으로 질문하세요.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">관련 자료 함께 제공</h4>
                                        <p className="text-sm text-neutral-cream/70">
                                            배선도, 매뉴얼, 오류 메시지 등 관련 자료를 함께 첨부하면 더 정확한 답변을 받을 수 있습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">단계별 확인</h4>
                                        <p className="text-sm text-neutral-cream/70">
                                            복잡한 작업은 여러 단계로 나누어 각 단계마다 AI에게 확인받으세요.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    );
}
