import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export const metadata = {
    title: '문의 게시판 - FarmSense 고객지원',
    description: 'FarmSense 고객 문의 게시판',
};

const samplePosts = [
    {
        id: 5,
        category: '결제',
        title: '연간 구독 결제 후 요금제 변경이 가능한가요?',
        author: '김**',
        date: '2026-02-25',
        status: '답변완료',
    },
    {
        id: 4,
        category: '사용법',
        title: '센서 연동 방법을 모르겠어요',
        author: '박**',
        date: '2026-02-22',
        status: '답변완료',
    },
    {
        id: 3,
        category: '오류',
        title: 'AI 병해 진단 사진 업로드가 안 됩니다',
        author: '이**',
        date: '2026-02-20',
        status: '답변완료',
    },
    {
        id: 2,
        category: '수출농가',
        title: 'PLS 농약안전사용기준 기능은 어떻게 사용하나요?',
        author: '최**',
        date: '2026-02-18',
        status: '답변완료',
    },
    {
        id: 1,
        category: '기타',
        title: '앱 설치가 안 됩니다 (안드로이드)',
        author: '정**',
        date: '2026-02-15',
        status: '답변완료',
    },
];

const statusStyle: Record<string, string> = {
    '답변완료': 'bg-green-500/20 text-green-400 border border-green-500/30',
    '답변대기': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
    '처리중': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
};

const categoryStyle: Record<string, string> = {
    '결제': 'text-blue-400',
    '사용법': 'text-green-400',
    '오류': 'text-red-400',
    '수출농가': 'text-secondary-gold',
    '기타': 'text-neutral-cream/50',
};

export default function BoardPage() {
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
                            <span className="text-white">문의 게시판</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-1">문의 게시판</h1>
                                <p className="text-neutral-cream/50 text-sm">
                                    궁금하신 점을 남겨주시면 1-2일 내에 답변드립니다.
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
                            { label: '전체 문의', value: '5' },
                            { label: '답변 완료', value: '5' },
                            { label: '평균 답변 시간', value: '1일' },
                        ].map((s) => (
                            <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                <p className="text-2xl font-bold text-white">{s.value}</p>
                                <p className="text-xs text-neutral-cream/50 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Board Table */}
                    <div className="border border-white/10 rounded-xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 bg-white/5 border-b border-white/10 px-5 py-3 text-xs font-bold text-neutral-cream/50 uppercase tracking-wider">
                            <div className="col-span-1">번호</div>
                            <div className="col-span-2">분류</div>
                            <div className="col-span-5">제목</div>
                            <div className="col-span-2">작성자</div>
                            <div className="col-span-1">날짜</div>
                            <div className="col-span-1 text-center">상태</div>
                        </div>

                        {/* Rows */}
                        {samplePosts.map((post, i) => (
                            <div
                                key={post.id}
                                className={`grid grid-cols-12 items-center px-5 py-4 border-b border-white/5 hover:bg-white/[0.03] transition-colors ${i % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
                            >
                                <div className="col-span-1 text-sm text-neutral-cream/40">{post.id}</div>
                                <div className={`col-span-2 text-xs font-semibold ${categoryStyle[post.category] ?? 'text-neutral-cream/50'}`}>
                                    [{post.category}]
                                </div>
                                <div className="col-span-5">
                                    <Link
                                        href={`/support/board/${post.id}`}
                                        className="text-sm text-neutral-cream/90 hover:text-secondary-gold transition-colors line-clamp-1"
                                    >
                                        {post.title}
                                    </Link>
                                </div>
                                <div className="col-span-2 text-xs text-neutral-cream/50">{post.author}</div>
                                <div className="col-span-1 text-xs text-neutral-cream/40">{post.date.slice(5)}</div>
                                <div className="col-span-1 flex justify-center">
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusStyle[post.status]}`}>
                                        {post.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-white font-semibold mb-1">자주 묻는 질문 먼저 확인해보세요</p>
                            <p className="text-neutral-cream/50 text-sm">FAQ에서 빠르게 답변을 찾을 수 있습니다.</p>
                        </div>
                        <Link
                            href="/faq"
                            className="px-5 py-2.5 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-sm shrink-0"
                        >
                            FAQ 보기
                        </Link>
                    </div>

                </Container>
            </main>
            <Footer />
        </>
    );
}
