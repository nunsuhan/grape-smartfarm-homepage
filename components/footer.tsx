'use client';

import { Container } from './ui/container';
import Link from 'next/link';
import { useModal } from './providers/modal-provider';

export function Footer() {
    const { openModal } = useModal();

    return (
        <footer className="bg-neutral-black py-20 border-t border-white/10 text-neutral-cream/60">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-serif font-bold text-white block">
                            FarmSense
                        </Link>
                        <p className="text-sm">AI가 포도를 이해합니다</p>
                        <a href="mailto:contact@farmsense.io" className="text-sm hover:text-secondary-gold transition-colors block">
                            contact@farmsense.io
                        </a>
                        <div className="text-sm mt-4">대한민국</div>
                    </div>

                    {/* Technology Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">기술</h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <Link href="/technology/rag-system" className="hover:text-secondary-gold transition-colors">RAG 시스템</Link>
                            <Link href="/technology/ai-diagnosis" className="hover:text-secondary-gold transition-colors">AI 진단</Link>
                            <Link href="/technology/pmi-dss" className="hover:text-secondary-gold transition-colors">병해 예측</Link>
                            <Link href="/technology/sensor-system" className="hover:text-secondary-gold transition-colors">센서 연동</Link>
                            <Link href="/technology/data-strategy" className="hover:text-secondary-gold transition-colors">데이터 전략</Link>
                        </div>
                    </div>

                    {/* Service Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">서비스</h4>
                        <div className="flex flex-col gap-3 text-sm">
                            <Link href="/#product" className="hover:text-secondary-gold transition-colors">서비스 소개</Link>
                            <Link href="/#product" className="hover:text-secondary-gold transition-colors">제품 소개</Link>
                        </div>
                    </div>

                    {/* Contact Actions */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">고객지원</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/faq" className="text-sm hover:text-secondary-gold transition-colors text-left">
                                FAQ
                            </Link>
                            <Link href="/support/ai-assistant" className="text-sm hover:text-secondary-gold transition-colors text-left">
                                AI 스마트 도우미
                            </Link>
                            <Link href="/support" className="text-sm hover:text-secondary-gold transition-colors text-left">
                                1:1 문의
                            </Link>
                            <Link href="/privacy-policy" className="text-sm hover:text-secondary-gold transition-colors text-left">
                                개인정보처리방침
                            </Link>
                            <button
                                onClick={() => openModal('partnership', 'contact')}
                                className="text-left text-sm hover:text-secondary-gold transition-colors"
                            >
                                제휴 문의
                            </button>
                            <button
                                onClick={() => openModal('demo')}
                                className="text-left text-sm hover:text-secondary-gold transition-colors"
                            >
                                시연 신청
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2026 FarmSense. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-secondary-gold transition-colors">
                            개인정보처리방침
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
