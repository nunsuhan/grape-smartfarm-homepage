'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

export default function BoardWritePage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-3xl py-12">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-neutral-cream/50 mb-8">
                        <Link href="/support" className="hover:text-secondary-gold transition-colors">고객지원</Link>
                        <span>›</span>
                        <Link href="/support/board" className="hover:text-secondary-gold transition-colors">문의 게시판</Link>
                        <span>›</span>
                        <span className="text-white">글쓰기</span>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-white/10">
                        문의 작성
                    </h1>

                    {submitted ? (
                        <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
                            <div className="text-5xl mb-4">✅</div>
                            <h2 className="text-2xl font-bold text-white mb-2">문의가 접수되었습니다</h2>
                            <p className="text-neutral-cream/50 mb-6">1-2일 내에 이메일로 답변드립니다.</p>
                            <Link
                                href="/support/board"
                                className="inline-block px-6 py-3 bg-secondary-gold text-neutral-black font-bold rounded-lg hover:brightness-110 transition-all"
                            >
                                게시판으로 돌아가기
                            </Link>
                        </div>
                    ) : (
                        <form
                            action="https://formspree.io/f/xvgelwkv"
                            method="POST"
                            onSubmit={() => setSubmitted(true)}
                            className="space-y-6"
                        >
                            <input type="hidden" name="_subject" value="[FarmSense] 문의 게시판 새 글" />

                            {/* 분류 */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                    문의 분류 <span className="text-red-400">*</span>
                                </label>
                                <select
                                    name="category"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-secondary-gold transition-colors"
                                >
                                    <option value="" className="bg-neutral-900">선택해주세요</option>
                                    <option value="사용법" className="bg-neutral-900">사용법 문의</option>
                                    <option value="오류" className="bg-neutral-900">오류/버그 신고</option>
                                    <option value="결제" className="bg-neutral-900">결제/환불 문의</option>
                                    <option value="수출농가" className="bg-neutral-900">수출농가 플랜</option>
                                    <option value="제안" className="bg-neutral-900">기능 제안</option>
                                    <option value="기타" className="bg-neutral-900">기타</option>
                                </select>
                            </div>

                            {/* 이름 / 연락처 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                        이름 <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        required
                                        placeholder="홍길동"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">연락처</label>
                                    <input
                                        name="phone"
                                        placeholder="010-0000-0000"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors"
                                    />
                                </div>
                            </div>

                            {/* 이메일 */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                    이메일 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="example@email.com"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors"
                                />
                                <p className="text-xs text-neutral-cream/40 mt-1">답변은 이메일로 발송됩니다.</p>
                            </div>

                            {/* 농장명 */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">농장명</label>
                                <input
                                    name="farm"
                                    placeholder="선택 입력"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors"
                                />
                            </div>

                            {/* 제목 */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                    제목 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    name="title"
                                    required
                                    placeholder="문의 제목을 입력해주세요"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors"
                                />
                            </div>

                            {/* 내용 */}
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                    문의 내용 <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows={8}
                                    required
                                    placeholder="문의 내용을 자세히 적어주세요."
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors resize-none"
                                />
                            </div>

                            {/* 개인정보 동의 */}
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required className="w-5 h-5 mt-0.5 accent-green-500" />
                                <span className="text-neutral-cream/60 text-sm leading-relaxed">
                                    개인정보 수집·이용에 동의합니다.
                                    수집된 정보는 문의 답변 목적으로만 사용되며,
                                    답변 완료 후 파기됩니다.
                                </span>
                            </label>

                            {/* 버튼 */}
                            <div className="flex gap-3 pt-2">
                                <Link
                                    href="/support/board"
                                    className="flex-1 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition text-center"
                                >
                                    취소
                                </Link>
                                <button
                                    type="submit"
                                    className="flex-1 py-4 bg-secondary-gold text-neutral-black font-bold rounded-xl hover:brightness-110 transition"
                                >
                                    문의 등록
                                </button>
                            </div>
                        </form>
                    )}
                </Container>
            </main>
            <Footer />
        </>
    );
}
