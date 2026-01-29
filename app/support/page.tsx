'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function SupportPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#0D0D1A] pt-24 pb-16">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">문의하기</h1>
                        <p className="text-gray-400">
                            빠른 답변을 위해 자세히 적어주세요
                        </p>
                    </div>

                    {submitted ? (
                        <div className="text-center p-12 bg-gray-800 rounded-2xl">
                            <div className="text-5xl mb-4">✅</div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                문의가 접수되었습니다
                            </h2>
                            <p className="text-gray-400">
                                1-2일 내에 답변드리겠습니다.
                            </p>
                        </div>
                    ) : (
                        <form
                            action="https://formspree.io/f/xvgelwkv"
                            method="POST"
                            onSubmit={() => setSubmitted(true)}
                            className="bg-gray-800 rounded-2xl p-8 space-y-6"
                        >
                            <input type="hidden" name="_subject" value="[FarmSense] 문의" />

                            {/* 문의 유형 */}
                            <div>
                                <label className="block text-gray-300 mb-2">문의 유형 *</label>
                                <select
                                    name="category"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                                >
                                    <option value="">선택해주세요</option>
                                    <option value="사용법">사용법 문의</option>
                                    <option value="오류">오류/버그 신고</option>
                                    <option value="결제">결제/환불 문의</option>
                                    <option value="제안">기능 제안</option>
                                    <option value="단체">조합/단체 도입</option>
                                    <option value="파트너십">파트너십 문의</option>
                                    <option value="투자">투자 문의</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>

                            {/* 이름/연락처 */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">이름 *</label>
                                    <input
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">연락처</label>
                                    <input
                                        name="phone"
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                                    />
                                </div>
                            </div>

                            {/* 이메일 */}
                            <div>
                                <label className="block text-gray-300 mb-2">이메일 *</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                                />
                            </div>

                            {/* 농장명 */}
                            <div>
                                <label className="block text-gray-300 mb-2">농장명</label>
                                <input
                                    name="farm"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                                />
                            </div>

                            {/* 문의 내용 */}
                            <div>
                                <label className="block text-gray-300 mb-2">문의 내용 *</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
                                    placeholder="문의 내용을 자세히 적어주세요"
                                />
                            </div>

                            {/* 개인정보 동의 */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" required className="w-5 h-5" />
                                <span className="text-gray-400 text-sm">
                                    개인정보 수집·이용에 동의합니다
                                </span>
                            </label>

                            {/* 제출 버튼 */}
                            <button
                                type="submit"
                                className="w-full py-4 bg-secondary-gold text-black font-bold rounded-xl hover:bg-white transition"
                            >
                                문의하기
                            </button>
                        </form>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
