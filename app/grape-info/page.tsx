'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { BookOpen, Clock, Tag, ChevronRight } from 'lucide-react';
import { DEMO_BLOG_ARTICLES, BLOG_CATEGORIES, type BlogCategory } from '@/lib/demo-data';

export default function GrapeInfoPage() {
    const [category, setCategory] = useState<BlogCategory>('all');

    const filtered =
        category === 'all'
            ? DEMO_BLOG_ARTICLES
            : DEMO_BLOG_ARTICLES.filter((a) => a.category === category);

    return (
        <main className="min-h-screen bg-neutral-black pt-20">
            {/* Hero */}
            <section className="relative py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(74,124,63,0.12),transparent_50%)]" />
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-green/20 border border-secondary-green/30 text-secondary-green text-sm mb-6">
                            <BookOpen className="w-4 h-4" />
                            데이터 기반 재배 인사이트
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-serif font-bold text-white mb-4">
                            포도 재배 정보
                        </h1>
                        <p className="text-lg text-neutral-cream/70">
                            딥리서치 기반의 포도 재배 기술과 병해충 관리 정보를 제공합니다
                        </p>
                    </motion.div>
                </Container>
            </section>

            {/* Category Filter */}
            <section className="sticky top-20 z-30 bg-neutral-black/95 backdrop-blur-md border-b border-white/10">
                <Container>
                    <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
                        {BLOG_CATEGORIES.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => setCategory(cat.value)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                    category === cat.value
                                        ? 'bg-secondary-green text-white'
                                        : 'bg-white/5 text-neutral-cream/60 hover:bg-white/10 hover:text-neutral-cream'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Article Grid */}
            <section className="py-12">
                <Container>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((article, i) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.4 }}
                            >
                                <Link href={`/grape-info/${article.id}`}>
                                    <article className="group h-full flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary-green/30 hover:bg-white/[0.07] transition-all duration-300">
                                        {/* Category Badge */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-secondary-green/20 text-secondary-green">
                                                {article.categoryLabel}
                                            </span>
                                            <span className="flex items-center gap-1 text-[11px] text-neutral-cream/40">
                                                <Clock className="w-3 h-3" />
                                                {article.read_time}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-secondary-green transition-colors line-clamp-2">
                                            {article.title}
                                        </h2>

                                        {/* Summary */}
                                        <p className="text-sm text-neutral-cream/60 leading-relaxed mb-4 line-clamp-3 flex-1">
                                            {article.summary}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {article.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-cream/40"
                                                >
                                                    <Tag className="w-2.5 h-2.5" />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-3 border-t border-white/10">
                                            <span className="text-[11px] text-neutral-cream/30">
                                                {new Date(article.created_at).toLocaleDateString('ko-KR')}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-secondary-green/70 group-hover:text-secondary-green transition-colors">
                                                읽기
                                                <ChevronRight className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20 text-neutral-cream/40">
                            해당 카테고리의 글이 없습니다.
                        </div>
                    )}
                </Container>
            </section>
        </main>
    );
}
