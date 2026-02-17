'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, ChevronLeft, ChevronRight, CheckCircle2, Mic, Camera, Save, Calendar, Clock } from 'lucide-react';
import { AppScreen } from './types';

interface FarmingLogScreenProps {
    onBack: () => void;
}

export function FarmingLogScreen({ onBack }: FarmingLogScreenProps) {
    const [selectedDate, setSelectedDate] = useState(18);

    return (
        <div className="flex flex-col h-full bg-slate-50 relative text-gray-900 font-sans">
            {/* Header */}
            <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-gray-100 z-10 sticky top-0">
                <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-900" />
                </button>
                <h2 className="text-lg font-bold text-gray-900">영농일지 작성</h2>
                <button className="p-2 -mr-2 bg-green-500/10 text-green-400 rounded-full w-10 h-10 flex items-center justify-center">
                    <Mic className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
                {/* Date Header */}
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800">2026년 1월 18일 (일)</h3>
                </div>

                {/* Input Card */}
                <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 min-h-[400px] flex flex-col relative">
                    {/* Action Buttons */}
                    <div className="flex gap-2 mb-4">
                        <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">
                            <span className="animate-pulse">((●))</span> 듣는 중...
                        </button>
                        <button className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                            <Camera className="w-5 h-5" />
                            사진 (0/5)
                        </button>
                    </div>

                    {/* Text Area */}
                    <textarea
                        className="w-full flex-1 resize-none outline-none text-lg placeholder-gray-400 leading-relaxed"
                        placeholder="오늘의 작업 내용을 자유롭게 기록하세요..."
                    />
                </div>
            </div>

            {/* Bottom Save Button */}
            <div className="p-6 bg-white border-t border-gray-100">
                <button className="w-full bg-green-500 hover:bg-green-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-transform active:scale-95">
                    <Save className="w-5 h-5" />
                    저장하기
                </button>
            </div>
        </div>
    );
}
