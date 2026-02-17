'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { ArrowLeft, Clock, Tag, BookOpen, ExternalLink, MessageCircle } from 'lucide-react';
import { DEMO_BLOG_ARTICLES } from '@/lib/demo-data';

export default function BlogDetailPage() {
    const params = useParams();
    const article = DEMO_BLOG_ARTICLES.find((a) => a.id === params.id);

    if (!article) {
        return (
            <main className="min-h-screen bg-neutral-black pt-20 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-neutral-cream/60 mb-4">글을 찾을 수 없습니다.</p>
                    <Link href="/grape-info" className="text-secondary-green hover:underline">
                        목록으로 돌아가기
                    </Link>
                </div>
            </main>
        );
    }

    // 관련 글 (같은 카테고리, 현재 글 제외)
    const related = DEMO_BLOG_ARTICLES
        .filter((a) => a.category === article.category && a.id !== article.id)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-neutral-black pt-20">
            {/* Header */}
            <section className="py-12 lg:py-16 border-b border-white/10">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <Link
                            href="/grape-info"
                            className="inline-flex items-center gap-1.5 text-sm text-neutral-cream/50 hover:text-secondary-green transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            포도 재배 정보
                        </Link>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary-green/20 text-secondary-green">
                                {article.categoryLabel}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-neutral-cream/40">
                                <Clock className="w-3.5 h-3.5" />
                                {article.read_time}
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                            {article.title}
                        </h1>

                        <p className="text-lg text-neutral-cream/70 leading-relaxed mb-6">
                            {article.summary}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-cream/40">
                            <span>{article.author}</span>
                            <span>{new Date(article.created_at).toLocaleDateString('ko-KR')}</span>
                            <div className="flex gap-1.5">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/5"
                                    >
                                        <Tag className="w-2.5 h-2.5" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* Content */}
            <section className="py-12">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="prose prose-invert prose-sm max-w-none
                                prose-headings:font-serif prose-headings:text-white
                                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-2
                                prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
                                prose-p:text-neutral-cream/70 prose-p:leading-relaxed
                                prose-strong:text-white
                                prose-li:text-neutral-cream/70
                                prose-table:text-sm
                                prose-th:text-white prose-th:bg-white/5 prose-th:px-4 prose-th:py-2
                                prose-td:text-neutral-cream/60 prose-td:px-4 prose-td:py-2 prose-td:border-white/10
                                prose-code:text-secondary-green prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                            "
                        >
                            {article.content.split('\n').map((line, i) => {
                                if (line.startsWith('## ')) {
                                    return <h2 key={i}>{line.replace('## ', '')}</h2>;
                                }
                                if (line.startsWith('### ')) {
                                    return <h3 key={i}>{line.replace('### ', '')}</h3>;
                                }
                                if (line.startsWith('| ')) {
                                    // 테이블 행 처리
                                    const cells = line.split('|').filter(Boolean).map(c => c.trim());
                                    const isHeader = i > 0 && article.content.split('\n')[i + 1]?.includes('---');
                                    const isSeparator = cells.every(c => c.match(/^-+$/));
                                    if (isSeparator) return null;
                                    return (
                                        <div key={i} className="flex border-b border-white/10">
                                            {cells.map((cell, j) => (
                                                <div
                                                    key={j}
                                                    className={`flex-1 px-4 py-2 text-sm ${
                                                        isHeader ? 'font-bold text-white bg-white/5' : 'text-neutral-cream/60'
                                                    }`}
                                                >
                                                    {cell}
                                                </div>
                                            ))}
                                        </div>
                                    );
                                }
                                if (line.startsWith('- **')) {
                                    const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
                                    if (match) {
                                        return (
                                            <div key={i} className="flex items-start gap-2 ml-4 mb-2">
                                                <span className="text-secondary-green mt-1.5 text-xs">&#9679;</span>
                                                <p className="text-sm text-neutral-cream/70 m-0">
                                                    <strong className="text-white">{match[1]}</strong>
                                                    {match[2] && `: ${match[2]}`}
                                                </p>
                                            </div>
                                        );
                                    }
                                }
                                if (line.startsWith('- ')) {
                                    return (
                                        <div key={i} className="flex items-start gap-2 ml-4 mb-1.5">
                                            <span className="text-secondary-green mt-1.5 text-xs">&#9679;</span>
                                            <p className="text-sm text-neutral-cream/70 m-0">{line.replace('- ', '')}</p>
                                        </div>
                                    );
                                }
                                if (line.trim() === '') return <div key={i} className="h-2" />;
                                return <p key={i} className="text-sm text-neutral-cream/70 leading-relaxed mb-3">{line}</p>;
                            })}
                        </motion.div>

                        {/* Sources */}
                        <div className="mt-12 p-5 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                <ExternalLink className="w-4 h-4 text-secondary-gold" />
                                참고 자료
                            </h3>
                            <ul className="space-y-1.5">
                                {article.sources.map((src, i) => (
                                    <li key={i} className="text-xs text-neutral-cream/50 flex items-start gap-2">
                                        <span className="text-secondary-gold mt-0.5">&#8226;</span>
                                        {src}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 p-5 rounded-xl bg-secondary-green/10 border border-secondary-green/20 text-center">
                            <p className="text-sm text-neutral-cream/70 mb-3">
                                이 주제에 대해 더 궁금한 점이 있으신가요?
                            </p>
                            <Link
                                href="/smartfarm/ai-chat"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary-green text-white text-sm font-medium hover:bg-secondary-green/80 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                AI에게 더 물어보기
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Related Articles */}
            {related.length > 0 && (
                <section className="py-12 border-t border-white/10">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-xl font-serif font-bold text-white mb-6">관련 글</h2>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {related.map((r) => (
                                    <Link key={r.id} href={`/grape-info/${r.id}`}>
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-secondary-green/30 transition-colors">
                                            <span className="text-[10px] text-secondary-green">{r.categoryLabel}</span>
                                            <h3 className="text-sm font-bold text-white mt-1 line-clamp-2">{r.title}</h3>
                                            <p className="text-xs text-neutral-cream/40 mt-2">{r.read_time}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Container>
                </section>
            )}
        </main>
    );
}
