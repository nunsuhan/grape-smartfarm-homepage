import Link from 'next/link';
import { Camera, Terminal, AlertCircle, ArrowRight, MessageSquare, Phone } from 'lucide-react';

export function TechnologyBlogFooter() {
    return (
        <section className="mt-20 pt-16 border-t border-neutral-200">
            <div className="max-w-3xl mx-auto px-6 mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                        설정이 어려우신가요? <br className="hidden md:block" />
                        <span className="text-blue-400">AI에게 사진을 찍어 물어보세요</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* KT Guide */}
                    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-blue-200 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-500/15 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">CASE 1. KT 연동</span>
                            <Phone className="w-4 h-4 text-neutral-400" />
                        </div>
                        <div className="aspect-[4/3] bg-white rounded-lg border border-neutral-200 mb-4 flex items-center justify-center relative overflow-hidden group">
                            {/* Placeholder for KT Screenshot */}
                            <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center text-neutral-400">
                                <Terminal className="w-8 h-8 mb-2 opacity-50" />
                                <span className="text-xs">KT API 키 발급 화면</span>
                            </div>
                        </div>
                        <h3 className="font-bold text-neutral-900 mb-2">KT 스마트팜 연동</h3>
                        <p className="text-sm text-neutral-600 mb-4">
                            "1588-0114에 전화해서 받은 API 키를 어디에 넣어야 할지 모르겠다면?"
                        </p>
                        <Link href="/support/ai-assistant" className="block w-full bg-white border border-white/20 text-neutral-cream/80 text-center py-3 rounded-xl font-medium hover:bg-white/5 hover:border-blue-300 hover:text-blue-400 transition-all flex items-center justify-center gap-2">
                            <MessageSquare className="w-4 h-4" /> AI 답변 보기
                        </Link>
                    </div>

                    {/* Sensor Guide */}
                    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-green-500/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <span className="bg-green-500/15 text-green-400 px-3 py-1 rounded-full text-xs font-bold">CASE 2. 센서 등록</span>
                            <AlertCircle className="w-4 h-4 text-neutral-400" />
                        </div>
                        <div className="aspect-[4/3] bg-white rounded-lg border border-neutral-200 mb-4 flex items-center justify-center relative overflow-hidden group">
                            {/* Placeholder for Sensor Screenshot */}
                            <div className="absolute inset-0 bg-neutral-100 flex flex-col items-center justify-center text-neutral-400">
                                <Camera className="w-8 h-8 mb-2 opacity-50" />
                                <span className="text-xs">센서 S/N 부착면</span>
                            </div>
                        </div>
                        <h3 className="font-bold text-neutral-900 mb-2">센서 등록 오류 해결</h3>
                        <p className="text-sm text-neutral-600 mb-4">
                            "센서 뒷면의 시리얼 번호(S/N) 사진을 찍으면 AI가 숫자를 읽어줍니다."
                        </p>
                        <Link href="/support/ai-assistant" className="block w-full bg-white border border-white/20 text-neutral-cream/80 text-center py-3 rounded-xl font-medium hover:bg-white/5 hover:border-green-300 hover:text-green-400 transition-all flex items-center justify-center gap-2">
                            <MessageSquare className="w-4 h-4" /> AI 답변 보기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
