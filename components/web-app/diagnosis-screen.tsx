'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Camera, ShieldCheck, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { DiagnosisFlow } from './diagnosis-flow'; // We'll extract the flow logic here or keep it simple

interface DiagnosisScreenProps {
    onBack: () => void;
}

export function DiagnosisScreen({ onBack }: DiagnosisScreenProps) {
    const [view, setView] = useState<'menu' | 'flow'>('menu');

    if (view === 'flow') {
        return <DiagnosisFlow onBack={() => setView('menu')} />;
    }

    return (
        <div className="flex flex-col h-full bg-slate-50 relative text-gray-900 font-sans">
            {/* Header */}
            <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-gray-100 z-10 sticky top-0">
                <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-900" />
                </button>
                <h2 className="text-lg font-bold text-gray-900">팜닥터</h2>
                <div className="w-8" />
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                <div className="mb-8">
                    <h3 className="text-gray-500 text-sm mb-4">포도 건강을 지키는 AI 주치의</h3>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">진단 서비스</h2>

                    <div className="space-y-4">
                        <button
                            onClick={() => setView('flow')}
                            className="w-full bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all group text-left"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors">
                                <Camera className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900">즉시 진단</h4>
                                <p className="text-xs text-gray-500 mt-1">사진으로 바로 병해 진단</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </button>

                        <button className="w-full bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all group text-left">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/15 transition-colors">
                                <ShieldCheck className="w-6 h-6 text-green-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900">예방 진단</h4>
                                <p className="text-xs text-gray-500 mt-1">실시간 위험도 분석</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">이력 및 가이드</h2>
                    <div className="space-y-4">
                        <button className="w-full bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all group text-left">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors">
                                <Clock className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900">진단 이력</h4>
                                <p className="text-xs text-gray-500 mt-1">나의 진단 기록</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </button>

                        <button className="w-full bg-white p-5 rounded-[1.5rem] shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all group text-left">
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/15 transition-colors">
                                <BookOpen className="w-6 h-6 text-purple-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-gray-900">처방 가이드</h4>
                                <p className="text-xs text-gray-500 mt-1">병해별 약제 검색</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
