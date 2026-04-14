'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';

export default function SupportPage() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        try {
            const res = await fetch('https://formspree.io/f/xvgelwkv', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                const data = await res.json();
                setError(data?.errors?.[0]?.message || '제출에 실패했습니다. 다시 시도해주세요.');
            }
        } catch {
            setError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-secondary-gold transition-colors";

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black pt-24 pb-16">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">문의하기</h1>
                        <p className="text-gray-400">빠른 답변을 위해 자세히 적어주세요</p>
                    </div>

                    {submitted ? (
                        <div className="text-center p-12 bg-gray-800 rounded-2xl">
                            <div className="text-5xl mb-4">✅</div>
                            <h2 className="text-2xl font-bold text-white mb-2">문의가 접수되었습니다</h2>
                            <p className="text-gray-400">1-2일 내에 답변드리겠습니다.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 space-y-6">
                            <input type="hidden" name="_subject" value="[FarmSense] 문의" />

                            {error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            {/* 문의 유형 */}
                            <div>
                                <label className="block text-gray-300 mb-2">문의 유형 *</label>
                                <select name="category" required className={inputClass}>
                                    <option value="">선택해주세요</option>
                                    <option value="사용법">사용법 문의</option>
                                    <option value="오류">오류/버그 신고</option>
                                    <option value="결제">결제/환불 문의</option>
                                    <option value="수출농가">수출농가 플랜</option>
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
                                    <input name="name" required className={inputClass} />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">연락처</label>
                                    <input name="phone" className={inputClass} />
                                </div>
                            </div>

                            {/* 이메일 */}
                            <div>
                                <label className="block text-gray-300 mb-2">이메일 *</label>
                                <input name="email" type="email" required className={inputClass} />
                            </div>

                            {/* 농장명 */}
                            <div>
                                <label className="block text-gray-300 mb-2">농장명</label>
                                <input name="farm" className={inputClass} />
                            </div>

                            {/* 문의 내용 */}
                            <div>
                                <label className="block text-gray-300 mb-2">문의 내용 *</label>
                                <textarea
                                    name="message"
                                    rows={6}
                                    required
                                    placeholder="문의 내용을 자세히 적어주세요"
                                    className={`${inputClass} resize-none`}
                                />
                            </div>

                            {/* 개인정보 동의 */}
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" required className="w-5 h-5 accent-green-500" />
                                <span className="text-gray-400 text-sm">개인정보 수집·이용에 동의합니다</span>
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-secondary-gold text-black font-bold rounded-xl hover:brightness-110 transition disabled:opacity-50"
                            >
                                {loading ? '전송 중...' : '문의하기'}
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </>
    );
}
