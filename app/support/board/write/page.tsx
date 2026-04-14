'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

export default function BoardWritePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        category: '',
        title: '',
        author: '',
        content: '',
        password: '',
        passwordConfirm: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (form.password !== form.passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (form.password.length < 4) {
            setError('비밀번호는 4자 이상 입력해주세요.');
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/board', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: form.category,
                    title: form.title,
                    author: form.author,
                    content: form.content,
                    password: form.password,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.error || '글 작성에 실패했습니다.');
                return;
            }

            const post = await res.json();
            router.push(`/support/board/${post.id}`);
        } catch {
            setError('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-secondary-gold transition-colors";

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-3xl py-12">

                    <div className="flex items-center gap-2 text-sm text-neutral-cream/50 mb-8">
                        <Link href="/support" className="hover:text-secondary-gold transition-colors">고객지원</Link>
                        <span>›</span>
                        <Link href="/support/board" className="hover:text-secondary-gold transition-colors">농가의 소리</Link>
                        <span>›</span>
                        <span className="text-white">글쓰기</span>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-8 pb-4 border-b border-white/10">글쓰기</h1>

                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* 분류 */}
                        <div>
                            <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                분류 <span className="text-red-400">*</span>
                            </label>
                            <select
                                required
                                value={form.category}
                                onChange={(e) => setForm({ ...form, category: e.target.value })}
                                className={inputClass}
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

                        {/* 이름 */}
                        <div>
                            <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                작성자 <span className="text-red-400">*</span>
                            </label>
                            <input
                                required
                                placeholder="이름 또는 닉네임"
                                value={form.author}
                                onChange={(e) => setForm({ ...form, author: e.target.value })}
                                className={inputClass}
                            />
                        </div>

                        {/* 제목 */}
                        <div>
                            <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                제목 <span className="text-red-400">*</span>
                            </label>
                            <input
                                required
                                placeholder="제목을 입력해주세요"
                                value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })}
                                className={inputClass}
                            />
                        </div>

                        {/* 내용 */}
                        <div>
                            <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                내용 <span className="text-red-400">*</span>
                            </label>
                            <textarea
                                required
                                rows={8}
                                placeholder="내용을 입력해주세요"
                                value={form.content}
                                onChange={(e) => setForm({ ...form, content: e.target.value })}
                                className={`${inputClass} resize-none`}
                            />
                        </div>

                        {/* 비밀번호 */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                    비밀번호 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="password"
                                    required
                                    placeholder="수정·삭제 시 필요"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    className={inputClass}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-neutral-cream/80 mb-2">
                                    비밀번호 확인 <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="password"
                                    required
                                    placeholder="비밀번호 재입력"
                                    value={form.passwordConfirm}
                                    onChange={(e) => setForm({ ...form, passwordConfirm: e.target.value })}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                        <p className="text-xs text-neutral-cream/40 -mt-4">비밀번호는 글 수정·삭제 시 사용됩니다.</p>

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
                                disabled={loading}
                                className="flex-1 py-4 bg-secondary-gold text-neutral-black font-bold rounded-xl hover:brightness-110 transition disabled:opacity-50"
                            >
                                {loading ? '등록 중...' : '글 등록'}
                            </button>
                        </div>
                    </form>
                </Container>
            </main>
        </>
    );
}
