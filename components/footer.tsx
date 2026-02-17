'use client';

import { Container } from './ui/container';
import Link from 'next/link';
import { useModal } from './providers/modal-provider';

const footerLinks = {
    tech: {
        title: '기술력',
        links: [
            { label: '기술 문서', href: '/technology/docs' },
            { label: 'AI 병해 진단', href: '/technology/ai-diagnosis' },
            { label: '병해 예측 (PMI)', href: '/technology/pmi-dss' },
            { label: 'RAG 시스템', href: '/technology/rag-system' },
            { label: '센서 네트워크', href: '/technology/sensor-system' },
            { label: '블록체인 추적성', href: '/technology/blockchain' },
        ],
    },
    info: {
        title: '재배 정보',
        links: [
            { label: '병해충 관리', href: '/grape-info' },
            { label: '재배 기술', href: '/grape-info' },
            { label: '월별 가이드', href: '/grape-info' },
            { label: '기후·환경', href: '/grape-info' },
        ],
    },
    smartfarm: {
        title: '스마트팜',
        links: [
            { label: '대시보드', href: '/smartfarm/dashboard' },
            { label: '센서 모니터링', href: '/smartfarm/sensors' },
            { label: 'AI 상담', href: '/smartfarm/ai-chat' },
            { label: '영농일지', href: '/smartfarm/field-book' },
            { label: '커뮤니티', href: '/smartfarm/community' },
        ],
    },
    support: {
        title: '고객지원',
        links: [
            { label: 'FAQ', href: '/faq' },
            { label: '센서 설치 도우미', href: '/sensor-installation-guide' },
            { label: 'AI 스마트 도우미', href: '/support/ai-assistant' },
            { label: '문의하기', href: '/support' },
        ],
    },
};

export function Footer() {
    const { openModal } = useModal();

    return (
        <footer className="bg-neutral-black py-16 border-t border-white/10 text-neutral-cream/60">
            <Container>
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8 mb-14">
                    {/* Brand Column - spans 2 on md */}
                    <div className="col-span-2 space-y-4">
                        <Link href="/" className="text-2xl font-serif font-bold text-white block">
                            팜센스(FarmSense)
                        </Link>
                        <p className="text-sm leading-relaxed">
                            팜센스(FarmSense)는 데이터와 AI로<br />
                            포도 농가의 의사결정을 돕는 플랫폼
                        </p>
                        <a
                            href="mailto:contact@farmsense.kr"
                            className="text-sm hover:text-secondary-gold transition-colors block"
                        >
                            contact@farmsense.kr
                        </a>

                        {/* FarmSense / About */}
                        <div className="pt-4 border-t border-white/10 space-y-2">
                            <Link href="/about" className="text-sm hover:text-secondary-gold transition-colors block">
                                우리의 가치
                            </Link>
                            <button
                                onClick={() => openModal('partnership', 'contact')}
                                className="text-left text-sm hover:text-secondary-gold transition-colors block"
                            >
                                제휴 문의
                            </button>
                            <a
                                href="/downloads/farmsense.apk"
                                download
                                className="text-left text-sm hover:text-secondary-gold transition-colors block"
                            >
                                APK 다운로드
                            </a>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-wider">
                                {section.title}
                            </h4>
                            <div className="flex flex-col gap-2.5 text-sm">
                                {section.links.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="hover:text-secondary-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; 2026 FarmSense. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-secondary-gold transition-colors">
                            개인정보처리방침
                        </Link>
                        <Link href="/privacy-policy" className="hover:text-secondary-gold transition-colors">
                            이용약관
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
