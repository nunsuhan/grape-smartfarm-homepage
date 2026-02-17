'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface Screenshot {
    image: string;
    title: string;
}

const screenshots: Screenshot[] = [
    { image: '/images/screenshots/1_home_dashboard.png', title: '메인 홈 화면' },
    { image: '/images/screenshots/app-dashboard-1.png', title: '실시간 모니터링' },
    { image: '/images/screenshots/2_diagnosis_result.png', title: '병해 위험도(Risk) 분석' },
    { image: '/images/screenshots/3_pmi_detail.png', title: '위험도 상세 리포트' },
    { image: '/images/screenshots/4_farm_sector.png', title: '농장 구역 관리' },
    { image: '/images/screenshots/ai_chat.jpg', title: 'AI 챗봇 상담' },
    { image: '/images/screenshots/farming_log.jpg', title: '영농 일지 기록' },
    { image: '/images/screenshots/settings.jpg', title: '환경 설정' },
];

export function AppScreenshotGallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % screenshots.length : null));
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : null));
        }
    };

    // Keyboard navigation
    if (typeof window !== 'undefined') {
        window.onkeydown = (e) => {
            if (selectedImageIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
    }

    return (
        <Section className="py-20 bg-neutral-900 border-b border-white/10">
            <Container>
                <div className="text-center mb-12">
                    <span className="text-secondary-gold font-mono text-sm tracking-widest uppercase">App Preview</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                        FarmSense <span className="text-secondary-green">둘러보기</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        스마트한 영농 생활의 시작
                    </p>
                </div>

                {/* Grid Gallery */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {screenshots.map((shot, index) => (
                            <motion.div
                                layout
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="group cursor-pointer"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="relative aspect-[9/19.5] rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-gray-800">
                                    <Image
                                        src={shot.image}
                                        alt={shot.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:brightness-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Container>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-[101]"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-[101] hidden md:block hover:bg-white/10 rounded-full"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-[101] hidden md:block hover:bg-white/10 rounded-full"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <div className="relative h-full w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-8" onClick={(e) => e.stopPropagation()}>
                            {/* Phone Frame in Lightbox */}
                            <motion.div
                                key={selectedImageIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative w-auto h-[70vh] md:h-[85vh] aspect-[9/19.5] rounded-[40px] border-[8px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden"
                            >
                                <Image
                                    src={screenshots[selectedImageIndex].image}
                                    alt={screenshots[selectedImageIndex].title}
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
