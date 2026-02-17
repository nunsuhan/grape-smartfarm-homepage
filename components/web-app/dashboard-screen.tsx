'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ArrowRight, Scan, MessageSquare, Book, Calendar, Activity } from 'lucide-react';
import { AppScreen } from './types';

interface DashboardScreenProps {
    onNavigate: (screen: AppScreen) => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex flex-col h-full bg-[#F0FDF4] text-neutral-900 overflow-y-auto custom-scrollbar font-sans relative">
            {/* Header */}
            <div className="px-6 py-4 flex justify-between items-center sticky top-0 bg-[#F0FDF4]/95 backdrop-blur-sm z-20">
                <h1 className="text-2xl font-bold text-[#14532d] tracking-tight font-serif">FarmSense</h1>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => onNavigate('login')}
                        className="bg-[#059669] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-sm hover:bg-[#047857] transition-colors"
                    >
                        로그인
                    </button>
                    <button
                        className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 border border-gray-100"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>

            <div className="px-6 pb-24">
                <h2 className="text-lg font-bold text-gray-900 mb-4 mt-2">주요 서비스</h2>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Farm Doctor */}
                    <button
                        onClick={() => onNavigate('diagnosis')}
                        className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100/50 text-left hover:shadow-md transition-all group flex flex-col justify-between h-[180px]"
                    >
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">팜닥터</h4>
                            <p className="text-xs text-gray-500 mt-1">이상 징후 모니터링</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center relative -mr-2 -mb-2">
                                <Scan className="w-8 h-8 text-green-400" />
                                <div className="absolute inset-0 border-2 border-green-500/30 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </button>

                    {/* AI Counselor */}
                    <button
                        onClick={() => onNavigate('rag-chat')}
                        className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100/50 text-left hover:shadow-md transition-all group flex flex-col justify-between h-[180px]"
                    >
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">AI 상담소</h4>
                            <p className="text-xs text-gray-500 mt-1">24시간 전문가 답변</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className="w-16 h-16 rounded-full bg-blue-500/15 flex items-center justify-center relative -mr-2 -mb-2">
                                <MessageSquare className="w-8 h-8 text-blue-400" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full border-2 border-white" />
                            </div>
                        </div>
                    </button>

                    {/* Farming Log */}
                    <button
                        onClick={() => onNavigate('farming-log')}
                        className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100/50 text-left hover:shadow-md transition-all group flex flex-col justify-between h-[180px]"
                    >
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">영농 일지</h4>
                            <p className="text-xs text-gray-500 mt-1">꼼꼼한 성장 기록</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-orange-400" />
                            </div>
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center relative -mr-2 -mb-2">
                                <Book className="w-8 h-8 text-orange-400" />
                            </div>
                        </div>
                    </button>

                    {/* Schedule */}
                    <button
                        className="bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100/50 text-left hover:shadow-md transition-all group flex flex-col justify-between h-[180px]"
                    >
                        <div>
                            <h4 className="font-bold text-gray-900 text-lg">농작업 일정</h4>
                            <p className="text-xs text-gray-500 mt-1">놓치기 쉬운 할 일</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4 text-purple-400" />
                            </div>
                            <div className="w-16 h-16 rounded-full bg-purple-500/15 flex items-center justify-center relative -mr-2 -mb-2">
                                <Calendar className="w-8 h-8 text-purple-400" />
                            </div>
                        </div>
                    </button>
                </div>

                {/* DSS Card */}
                <button className="w-full bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100/50 text-left hover:shadow-md transition-all group relative overflow-hidden">
                    <div className="relative z-10">
                        <h4 className="font-bold text-gray-900 text-lg mb-1">의사결정 지원 시스템</h4>
                        <p className="text-sm text-gray-500 mb-3">데이터 기반 최적 생육 관리</p>
                        <p className="text-xs text-gray-400 font-medium">관수 • 비료 • 방제 • 환경 • 수확량 • 맞춤계획</p>
                        <div className="mt-4 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4 text-gray-600" />
                        </div>
                    </div>
                    <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                        <Activity className="w-40 h-40 text-green-300" />
                    </div>
                </button>
            </div>

            {/* Hamburger Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-black/20 z-40 backdrop-blur-[1px]"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute top-0 right-0 w-[80%] h-full bg-white z-50 rounded-l-[2rem] p-8 text-gray-900 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                                <h2 className="text-xl font-bold text-green-300">Menu</h2>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                    <Menu className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <button onClick={() => { setIsMenuOpen(false); onNavigate('diagnosis'); }} className="flex items-center gap-4 text-lg font-medium hover:text-green-400 transition-colors w-full text-left p-2 hover:bg-green-500/10 rounded-xl">
                                    <Scan className="w-5 h-5" />
                                    병해 진단
                                </button>
                                <button onClick={() => { setIsMenuOpen(false); onNavigate('rag-chat'); }} className="flex items-center gap-4 text-lg font-medium hover:text-green-400 transition-colors w-full text-left p-2 hover:bg-green-500/10 rounded-xl">
                                    <MessageSquare className="w-5 h-5" />
                                    AI 상담
                                </button>
                                <button onClick={() => { setIsMenuOpen(false); onNavigate('farming-log'); }} className="flex items-center gap-4 text-lg font-medium hover:text-green-400 transition-colors w-full text-left p-2 hover:bg-green-500/10 rounded-xl">
                                    <Book className="w-5 h-5" />
                                    영농일지
                                </button>
                                <button className="flex items-center gap-4 text-lg font-medium hover:text-green-400 transition-colors w-full text-left p-2 hover:bg-green-500/10 rounded-xl opacity-60">
                                    <Calendar className="w-5 h-5" />
                                    농작업 일정
                                </button>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 text-center text-gray-300 text-sm">
                                FarmSense v1.0.2
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
