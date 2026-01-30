'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Container } from './ui/container';
import { ChevronDown } from 'lucide-react';
import { useModal } from './providers/modal-provider';

const navItems = [
    { label: '문제 정의', href: '/#problem' },
    {
        label: '기술력 (Technology)',
        href: '/technology/docs',
        dropdown: [
            { label: '기술 문서 (검증·로직)', href: '/technology/docs' },
            { label: '열화상·RGB-D 설치 필요성', href: '/technology/camera-necessity' },
            { label: 'AI 병해충 진단 (Vision)', href: '/technology/ai-diagnosis' },
            { label: 'PMI-DSS 의사결정', href: '/technology/pmi-dss' },
            { label: '대화형 농업 비서 (RAG)', href: '/technology/rag-system' },
            { label: '데이터 수집 전략', href: '/technology/data-strategy' },
            { label: 'IoT 센서 네트워크', href: '/technology/sensor-system' },
        ]
    },
    { label: '센서 설치 도우미', href: '/sensor-installation-guide' },
    {
        label: '지능형 로직',
        href: '/intelligent-logic',
        dropdown: [
            { label: '관수_물관리', href: '/intelligent-logic/irrigation-water' },
            { label: '병해충관리', href: '/intelligent-logic/pesticide-spray' },
            { label: '비료_시비량', href: '/intelligent-logic/fertilizer-application' },
            { label: '수확량_예측', href: '/intelligent-logic/yield-prediction' },
            { label: '포도_재배기술', href: '/intelligent-logic/grape-cultivation' },
            { label: '환경제어_센서', href: '/intelligent-logic/environmental-control' },
        ]
    },
    {
        label: '고객지원',
        href: '/faq',
        dropdown: [
            { label: 'FAQ', href: '/faq' },
            { label: 'AI 스마트 도우미', href: '/support/ai-assistant' },
            { label: '문의하기', href: '/support' },
        ]
    },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const { openModal } = useModal();
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [mobileExpandedIdx, setMobileExpandedIdx] = useState<number | null>(null);
    const pathname = usePathname();

    // 라이트 모드 페이지 경로 확인
    const isLightModePage = pathname?.startsWith('/sensor-installation-guide') || 
                            pathname?.startsWith('/intelligent-logic');

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // 모바일 메뉴: body에 포탈로 렌더링해 fixed가 뷰포트 기준으로 동작하도록
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const mobileMenuContent = (
        <AnimatePresence>
            {isMobileMenuOpen && (
            <motion.div
                key="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-[#0a0a0a] z-[110] pt-24 px-6 md:hidden overflow-y-auto"
                style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
                <nav className="flex flex-col gap-6 text-lg font-medium text-neutral-cream/90">
                    {navItems.map((item, idx) => (
                        <div key={idx} className="border-b border-white/10 pb-4 last:border-0">
                            <div className="flex items-center justify-between w-full">
                                {item.dropdown ? (
                                    <button
                                        type="button"
                                        onClick={() => setMobileExpandedIdx(mobileExpandedIdx === idx ? null : idx)}
                                        className="flex items-center justify-between w-full py-2 hover:text-secondary-gold transition-colors text-left"
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown className={clsx(
                                            "w-5 h-5 transition-transform duration-200",
                                            mobileExpandedIdx === idx ? "rotate-180" : ""
                                        )} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 hover:text-secondary-gold transition-colors w-full"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>

                            <AnimatePresence>
                                {item.dropdown && mobileExpandedIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-white/5 rounded-lg mt-2"
                                    >
                                        {item.dropdown.map((subItem, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                href={subItem.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-3 text-sm hover:text-secondary-gold transition-colors border-b border-white/5 last:border-0"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>
            </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <motion.header
            className={clsx(
                'fixed top-0 left-0 right-0 z-[100] transition-colors duration-300',
                isLightModePage || isScrolled || isMobileMenuOpen 
                    ? 'bg-neutral-black/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
                    : 'bg-transparent'
            )}
        >
            <Container className="flex items-center justify-between h-20">
                <Link href="/" className="text-2xl font-serif font-bold text-white z-[101] relative cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                    FarmSense
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-cream/80 pointer-events-auto z-[102]">
                    {navItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative h-20 flex items-center"
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center gap-1 hover:text-secondary-gold transition-colors"
                            >
                                {item.label}
                                {item.dropdown && (
                                    <ChevronDown className={clsx(
                                        "w-4 h-4 transition-transform duration-200",
                                        hoveredIdx === idx ? "rotate-180" : ""
                                    )} />
                                )}
                            </Link>

                            <AnimatePresence>
                                {item.dropdown && hoveredIdx === idx && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, display: 'none' }}
                                        animate={{ opacity: 1, y: 0, display: 'block' }}
                                        exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-4 w-48 pt-2"
                                    >
                                        <div className="bg-[#1A1A2E] border border-white/10 rounded-xl p-2 shadow-xl backdrop-blur-md overflow-hidden">
                                            {item.dropdown.map((subItem, subIdx) => (
                                                <Link
                                                    key={subIdx}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 rounded-lg hover:bg-white/5 text-sm hover:text-secondary-gold transition-colors"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Toggle - 높은 z로 항상 클릭 가능 */}
                <button
                    type="button"
                    className="md:hidden relative z-[120] p-3 -m-1 text-white touch-manipulation"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <div className="w-6 h-5 flex flex-col justify-between pointer-events-none">
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white origin-left transition-all"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-white transition-all"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white origin-left transition-all"
                        />
                    </div>
                </button>

                {/* 모바일 메뉴: body 포탈로 전체 화면 표시 */}
                {mounted && createPortal(mobileMenuContent, document.body)}
            </Container>
        </motion.header>
    );
}
