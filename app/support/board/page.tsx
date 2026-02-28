'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

interface Post {
    id: string;
    category: string;
    title: string;
    author: string;
    date: string;
    answer?: string;
}

const categoryColor: Record<string, string> = {
    '사용법': 'text-green-400',
    '오류': 'text-red-400',
    '결제': 'text-blue-400',
    '수출농가': 'text-secondary-gold',
    '제안': 'text-purple-400',
    '기타': 'text-neutral-cream/50',
};

export default function BoardPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/board')
            .then((r) => r.json())
            .then((data) => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
            .catch(() => setLoading(false));
    }, []);

    const answered = posts.filter((p) => p.answer).length;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-5xl py-12">

                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-neutral-cream/50 mb-3">
                            <Link href="/support" className="hover:text-secondary-gold transition-colors">고객지원</Link>
                            <span>›</span>
                            <span className="text-white">농가의 소리</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-1">농가의 소리</h1>
                                <p className="text-neutral-cream/50 text-sm">
                                    농가 여러분의 의견과 문의를 남겨주세요. 1-2일 내에 답변드립니다.
                                </p>
                            </div>
                            <Link
                                href="/support/board/write"
                                className="px-5 py-2.5 bg-secondary-gold text-neutral-black font-bold rounded-lg hover:brightness-110 transition-all text-sm"
                            >
                                글쓰기
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                            { label: '전체 글', value: String(posts.length) },
                            { label: '답변 완료', value: String(answered) },
                            { label: '답변 대기', value: String(posts.length - answered) },
                        ].map((s) => (
                            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-white">{loading ? '-' : s.value}</p>
                                <p className="text-xs text-neutral-cream/50 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Board Table */}
                    <div className="border border-white/10 rounded-xl overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 px-5 py-3 text-xs font-bold text-neutral-cream/50 uppercase tracking-wider">
                            <div className="col-span-2">분류</div>
                            <div className="col-span-6">제목</div>
                            <div className="col-span-2">작성자</div>
                            <div className="col-span-1">날짜</div>
                            <div className="col-span-1 text-center">상태</div>
                        </div>

                        {loading ? (
                            <div className="py-16 text-center text-neutral-cream/40 text-sm">불러오는 중...</div>
                        ) : posts.length === 0 ? (
                            <div className="py-16 text-center text-neutral-cream/40 text-sm">
                                아직 등록된 글이 없습니다.<br />
                                <Link href="/support/board/write" className="text-secondary-gold hover:underline mt-2 inline-block">첫 번째 글을 작성해보세요</Link>
                            </div>
                        ) : (
                            posts.map((post, i) => (
                                <div
                                    key={post.id}
                                    className={`grid grid-cols-12 items-center px-5 py-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors ${i % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                                >
                                    <div className={`col-span-2 text-xs font-semibold ${categoryColor[post.category] ?? 'text-neutral-cream/50'}`}>
                                        [{post.category}]
                                    </div>
                                    <div className="col-span-6">
                                        <Link
                                            href={`/support/board/${post.id}`}
                                            className="text-sm text-neutral-cream/90 hover:text-secondary-gold transition-colors line-clamp-1"
                                        >
                                            {post.title}
                                        </Link>
                                    </div>
                                    <div className="col-span-2 text-xs text-neutral-cream/50">{post.author}</div>
                                    <div className="col-span-1 text-xs text-neutral-cream/40">{post.date?.slice(5)}</div>
                                    <div className="col-span-1 flex justify-center">
                                        <span className={`text-xs px-2 py-0.5 rounded-full border ${post.answer
                                            ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                            : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                                            {post.answer ? '답변완료' : '답변대기'}
                                        </span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* FAQ 링크 */}
                    <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-white font-semibold mb-1">자주 묻는 질문 먼저 확인해보세요</p>
                            <p className="text-neutral-cream/50 text-sm">FAQ에서 빠르게 답변을 찾을 수 있습니다.</p>
                        </div>
                        <Link href="/faq" className="px-5 py-2.5 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-sm shrink-0">
                            FAQ 보기
                        </Link>
                    </div>

                </Container>
            </main>
            <Footer />
        </>
    );
}
