'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Camera, Upload, RefreshCw, Activity, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

interface DiagnosisFlowProps {
    onBack: () => void;
}

export function DiagnosisFlow({ onBack }: DiagnosisFlowProps) {
    const [step, setStep] = useState<'upload' | 'scanning' | 'result'>('upload');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [result, setResult] = useState<any>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                uploadAndDiagnose(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadAndDiagnose = async (file: File) => {
        setStep('scanning');
        // Mock delay
        setTimeout(() => {
            setResult({
                results: [
                    { disease_kr: "노균병", disease: "downy_mildew", probability: 0.78 }
                ],
                recommendations: "병원균은 병든 잎이나 오염된 토양에서 월동하므로, 병든 잎은 즉시 제거하여 소각해야 합니다. 통풍과 채광을 좋게 하고 질소 비료의 과용을 피하세요."
            });
            setStep('result');
        }, 3000);
    };

    const resetDiagnosis = () => {
        setImagePreview(null);
        setStep('upload');
        setResult(null);
    };

    return (
        <div className="flex flex-col h-full bg-black text-white relative">
            {/* Header */}
            <div className="p-4 flex items-center gap-4 bg-black/50 backdrop-blur z-10 absolute top-0 w-full">
                <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                <h2 className="text-lg font-bold">병해 진단</h2>
            </div>

            <div className="flex-1 relative">
                <AnimatePresence mode="wait">
                    {/* ... Upload Step ... */}
                    {step === 'upload' && (
                        <motion.div
                            key="upload"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center h-full gap-8 bg-neutral-900"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-secondary-gold/20 blur-3xl rounded-full" />
                                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center relative border border-white/10">
                                    <Camera className="w-10 h-10 text-white/50" />
                                </div>
                            </div>
                            <div className="text-center space-y-2 z-10">
                                <h3 className="text-2xl font-bold text-white">사진 촬영</h3>
                                <p className="text-sm text-gray-400">
                                    증상이 있는 부위를<br />화면 중앙에 맞춰 촬영해주세요
                                </p>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="w-[80%] bg-white text-black font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors mt-8 shadow-lg shadow-white/10"
                            >
                                <Camera className="w-5 h-5" />
                                촬영하기
                            </button>
                        </motion.div>
                    )}

                    {/* ... Scanning Step ... */}
                    {step === 'scanning' && imagePreview && (
                        <motion.div
                            key="scanning"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20"
                        >
                            <Image
                                src={imagePreview}
                                alt="Scanning"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-scan-line animate-scan pointer-events-none" />

                            <div className="absolute bottom-20 left-0 right-0 text-center z-30">
                                <div className="inline-block bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="font-bold text-white">AI 분석중...</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ... Result Step ... */}
                    {step === 'result' && imagePreview && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="h-full bg-slate-50 flex flex-col"
                        >
                            <div className="relative w-full h-[40%] bg-black">
                                <Image
                                    src={imagePreview}
                                    alt="Result"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

                                <button onClick={onBack} className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur rounded-full text-white hover:bg-black/50 transition-colors z-20">
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 bg-white -mt-6 rounded-t-[2rem] p-6 relative z-10 shadow-xl overflow-y-auto">
                                <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-1 bg-red-500/15 text-red-400 text-xs font-bold rounded">위험</span>
                                            <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {result?.results?.[0]?.disease_kr}
                                        </h2>
                                        <p className="text-sm text-gray-500">진단 확률 {Math.round((result?.results?.[0]?.probability || 0) * 100)}%</p>
                                    </div>
                                    <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center border border-red-100">
                                        <AlertTriangle className="w-7 h-7 text-red-500" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Activity className="w-4 h-4 text-blue-500" />
                                            AI 처방 가이드
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {result?.recommendations}
                                        </p>
                                    </div>

                                    <button
                                        onClick={resetDiagnosis}
                                        className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <RefreshCw className="w-5 h-5" />
                                        새로운 진단
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
