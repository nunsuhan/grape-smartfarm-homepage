'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Container } from '@/components/ui/container';
import Link from 'next/link';

interface Post {
    id: string;
    category: string;
    title: string;
    author: string;
    content: string;
    date: string;
    answer?: string;
}

export default function BoardDetailPage() {
    const router = useRouter();
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [deleteMode, setDeleteMode] = useState(false);
    const [deletePassword, setDeletePassword] = useState('');
    const [deleteError, setDeleteError] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        fetch(`/api/board/${id}`)
            .then((r) => r.json())
            .then((data) => { setPost(data); setLoading(false); })
            .catch(() => setLoading(false));
    }, [id]);

    const handleDelete = async () => {
        setDeleting(true);
        setDeleteError('');
        try {
            const res = await fetch(`/api/board/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password: deletePassword }),
            });
            const data = await res.json();
            if (!res.ok) {
                setDeleteError(data.error || '삭제 실패');
                return;
            }
            router.push('/support/board');
        } catch {
            setDeleteError('서버 오류가 발생했습니다.');
        } finally {
            setDeleting(false);
        }
    };

    if (loading) return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black pt-20 flex items-center justify-center">
                <p className="text-neutral-cream/40">불러오는 중...</p>
            </main>
            <Footer />
        </>
    );

    if (!post) return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black pt-20 flex flex-col items-center justify-center gap-4">
                <p className="text-neutral-cream/40">글을 찾을 수 없습니다.</p>
                <Link href="/support/board" className="text-secondary-gold hover:underline text-sm">목록으로</Link>
            </main>
            <Footer />
        </>
    );

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-3xl py-12">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-neutral-cream/50 mb-8">
                        <Link href="/support" className="hover:text-secondary-gold transition-colors">고객지원</Link>
                        <span>›</span>
                        <Link href="/support/board" className="hover:text-secondary-gold transition-colors">농가의 소리</Link>
                        <span>›</span>
                        <span className="text-white">상세보기</span>
                    </div>

                    {/* Post */}
                    <div className="border border-white/10 rounded-xl overflow-hidden mb-6">
                        <div className="bg-white/5 border-b border-white/10 px-6 py-5">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-neutral-cream/60">
                                    [{post.category}]
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${post.answer
                                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                    : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                                    {post.answer ? '답변완료' : '답변대기'}
                                </span>
                            </div>
                            <h1 className="text-xl font-bold text-white mb-3">{post.title}</h1>
                            <div className="flex gap-4 text-xs text-neutral-cream/40">
                                <span>작성자: {post.author}</span>
                                <span>작성일: {post.date}</span>
                            </div>
                        </div>
                        <div className="px-6 py-6">
                            <p className="text-neutral-cream/80 leading-relaxed whitespace-pre-line text-sm">
                                {post.content}
                            </p>
                        </div>
                    </div>

                    {/* Answer */}
                    {post.answer && (
                        <div className="border border-green-500/30 rounded-xl overflow-hidden mb-8">
                            <div className="bg-green-500/10 border-b border-green-500/20 px-6 py-3">
                                <span className="text-green-400 font-bold text-sm">팜센스 고객지원팀 답변</span>
                            </div>
                            <div className="px-6 py-6">
                                <p className="text-neutral-cream/80 leading-relaxed whitespace-pre-line text-sm">
                                    {post.answer}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Delete confirm */}
                    {deleteMode && (
                        <div className="mb-6 p-5 bg-red-500/10 border border-red-500/30 rounded-xl">
                            <p className="text-red-400 font-semibold mb-3 text-sm">정말 삭제하시겠습니까?</p>
                            <div className="flex gap-3">
                                <input
                                    type="password"
                                    placeholder="비밀번호 입력"
                                    value={deletePassword}
                                    onChange={(e) => setDeletePassword(e.target.value)}
                                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-red-400 transition-colors"
                                />
                                <button
                                    onClick={handleDelete}
                                    disabled={deleting}
                                    className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 transition text-sm disabled:opacity-50"
                                >
                                    {deleting ? '삭제 중...' : '삭제 확인'}
                                </button>
                                <button
                                    onClick={() => { setDeleteMode(false); setDeleteError(''); }}
                                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition text-sm"
                                >
                                    취소
                                </button>
                            </div>
                            {deleteError && <p className="text-red-400 text-xs mt-2">{deleteError}</p>}
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                        <Link href="/support/board" className="px-5 py-2.5 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-sm">
                            ← 목록
                        </Link>
                        <div className="flex gap-2">
                            <Link
                                href={`/support/board/${id}/edit`}
                                className="px-5 py-2.5 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-sm"
                            >
                                수정
                            </Link>
                            <button
                                onClick={() => setDeleteMode(true)}
                                className="px-5 py-2.5 bg-red-500/20 text-red-400 font-bold rounded-lg hover:bg-red-500/30 transition-all text-sm border border-red-500/30"
                            >
                                삭제
                            </button>
                        </div>
                    </div>

                </Container>
            </main>
            <Footer />
        </>
    );
}
