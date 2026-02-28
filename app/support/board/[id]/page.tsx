import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = [
    {
        id: 5,
        category: '결제',
        title: '연간 구독 결제 후 요금제 변경이 가능한가요?',
        author: '김**',
        date: '2026-02-25',
        status: '답변완료',
        content: `안녕하세요. 연간 구독을 결제했는데, 중간에 수출농가 플랜으로 업그레이드가 가능한지 궁금합니다.

업그레이드하면 차액만 결제하면 되는지, 아니면 새로 결제해야 하는지도 알려주시면 감사하겠습니다.`,
        answer: `안녕하세요, 팜센스 고객지원팀입니다.

연간 구독 중 요금제 변경은 앱 내 '설정 > 요금제 변경' 메뉴에서 가능합니다.

업그레이드 시 잔여 기간에 대한 차액이 계산되어 추가 결제됩니다. 별도로 기존 구독을 해지하실 필요 없습니다.

추가 문의사항이 있으시면 언제든지 남겨주세요. 감사합니다.`,
    },
    {
        id: 4,
        category: '사용법',
        title: '센서 연동 방법을 모르겠어요',
        author: '박**',
        date: '2026-02-22',
        status: '답변완료',
        content: `앱을 설치했는데 센서 연동하는 방법을 모르겠습니다. 블루투스로 연결해야 하나요?`,
        answer: `안녕하세요, 팜센스 고객지원팀입니다.

센서 연동은 앱 내 '센서 관리 > 센서 추가' 메뉴에서 진행하시면 됩니다.

Wi-Fi 방식으로 연결되며, 센서 기기 하단의 QR코드를 스캔하시면 자동으로 등록됩니다. 자세한 방법은 [센서 설치 도우미](/sensor-installation-guide) 페이지를 참고해 주세요.

감사합니다.`,
    },
    {
        id: 3,
        category: '오류',
        title: 'AI 병해 진단 사진 업로드가 안 됩니다',
        author: '이**',
        date: '2026-02-20',
        status: '답변완료',
        content: `사진을 찍어서 업로드하려고 하면 "업로드 실패" 메시지가 뜨면서 안됩니다. 안드로이드 14 갤럭시 S24입니다.`,
        answer: `안녕하세요, 팜센스 고객지원팀입니다.

안드로이드 14 환경에서 권한 정책이 변경되어 발생하는 문제입니다. 아래 방법으로 해결해 주세요.

1. 설정 > 앱 > 팜센스 > 권한 > 사진/미디어 접근 권한을 '모든 사진 허용'으로 변경
2. 앱 재실행 후 재시도

조치 후에도 동일한 문제가 발생하시면 다시 문의해 주세요. 감사합니다.`,
    },
    {
        id: 2,
        category: '수출농가',
        title: 'PLS 농약안전사용기준 기능은 어떻게 사용하나요?',
        author: '최**',
        date: '2026-02-18',
        status: '답변완료',
        content: `수출농가 플랜으로 업그레이드했는데, PLS 기능이 어디 있는지 찾기가 어렵습니다.`,
        answer: `안녕하세요, 팜센스 고객지원팀입니다.

PLS 기능은 앱 내 '영농 관리 > PLS 안전사용기준' 메뉴에서 이용하실 수 있습니다.

농약 검색 후 해당 작물(포도)에 사용 가능 여부, 희석 배수, 수확 전 안전 사용일수를 확인하실 수 있습니다. 기록된 내역은 수출 서류 작성 시 자동으로 연동됩니다.

감사합니다.`,
    },
    {
        id: 1,
        category: '기타',
        title: '앱 설치가 안 됩니다 (안드로이드)',
        author: '정**',
        date: '2026-02-15',
        status: '답변완료',
        content: `APK 파일을 다운로드해서 설치하려고 하면 "설치가 차단되었습니다" 메시지가 뜹니다.`,
        answer: `안녕하세요, 팜센스 고객지원팀입니다.

외부 APK 설치 시 안드로이드 보안 설정으로 인해 차단될 수 있습니다. 아래 단계를 따라주세요.

1. 설정 > 보안 > 출처를 알 수 없는 앱 설치 허용
2. 또는 설정 > 앱 > 브라우저/파일관리자 > 출처를 알 수 없는 앱 설치 허용
3. 다시 APK 파일을 실행하여 설치

안드로이드 버전에 따라 메뉴 위치가 다를 수 있습니다. 설치 후에는 보안을 위해 다시 해당 설정을 비활성화하시는 것을 권장드립니다.

감사합니다.`,
    },
];

export function generateStaticParams() {
    return posts.map((p) => ({ id: String(p.id) }));
}

export default function BoardDetailPage({ params }: { params: { id: string } }) {
    const post = posts.find((p) => p.id === Number(params.id));
    if (!post) notFound();

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
                        <span className="text-white">상세보기</span>
                    </div>

                    {/* Post */}
                    <div className="border border-white/10 rounded-xl overflow-hidden mb-6">
                        {/* Post Header */}
                        <div className="bg-white/5 border-b border-white/10 px-6 py-5">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-neutral-cream/60">
                                    [{post.category}]
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${post.status === '답변완료' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                                    {post.status}
                                </span>
                            </div>
                            <h1 className="text-xl font-bold text-white mb-3">{post.title}</h1>
                            <div className="flex gap-4 text-xs text-neutral-cream/40">
                                <span>작성자: {post.author}</span>
                                <span>작성일: {post.date}</span>
                            </div>
                        </div>

                        {/* Post Content */}
                        <div className="px-6 py-6">
                            <p className="text-neutral-cream/80 leading-relaxed whitespace-pre-line text-sm">
                                {post.content}
                            </p>
                        </div>
                    </div>

                    {/* Answer */}
                    {post.answer && (
                        <div className="border border-green-500/30 rounded-xl overflow-hidden mb-8">
                            <div className="bg-green-500/10 border-b border-green-500/20 px-6 py-3 flex items-center gap-2">
                                <span className="text-green-400 font-bold text-sm">팜센스 고객지원팀 답변</span>
                            </div>
                            <div className="px-6 py-6">
                                <p className="text-neutral-cream/80 leading-relaxed whitespace-pre-line text-sm">
                                    {post.answer}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                        <Link
                            href="/support/board"
                            className="px-5 py-2.5 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-sm"
                        >
                            ← 목록으로
                        </Link>
                        <Link
                            href="/support/board/write"
                            className="px-5 py-2.5 bg-secondary-gold text-neutral-black font-bold rounded-lg hover:brightness-110 transition-all text-sm"
                        >
                            문의 작성
                        </Link>
                    </div>

                </Container>
            </main>
            <Footer />
        </>
    );
}
