'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  Microscope,
  MessageCircle,
  Eye,
  MessageSquare,
  TrendingUp,
  Clock,
  Tag,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SEED_ISSUES, COMMUNITY_POSTS } from '@/lib/demo-data';

type TabType = 'all' | 'research' | 'free';

const tabs: { value: TabType; label: string; icon: typeof Users }[] = [
  { value: 'all', label: '전체', icon: Users },
  { value: 'research', label: '딥리서치', icon: Microscope },
  { value: 'free', label: '자유게시판', icon: MessageCircle },
];

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const showResearch = activeTab === 'all' || activeTab === 'research';
  const showFree = activeTab === 'all' || activeTab === 'free';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
          <Users className="w-6 h-6 text-secondary-gold" />
          커뮤니티
        </h1>
        <p className="text-neutral-cream/60 text-sm mt-1">
          포도 농가의 경험과 지식을 나누고, 시기별 핵심 이슈를 함께 토론하세요
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.value
                  ? 'bg-primary-purple/20 text-white border border-primary-purple/30'
                  : 'bg-white/5 text-neutral-cream/50 hover:text-neutral-cream'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Deep Research Issues */}
      {showResearch && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Microscope className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-serif font-bold text-white">
              시기별 딥리서치 이슈
            </h2>
            <span className="ml-2 px-2 py-0.5 rounded-full bg-primary-purple/20 text-purple-400 text-xs">
              FarmSense 리서치팀
            </span>
          </div>

          <div className="space-y-4">
            {SEED_ISSUES.map((issue, i) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/smartfarm/community/${issue.id}`}>
                  <Card className="hover:border-primary-purple/30 transition-all group">
                    <CardContent className="p-6">
                      {/* Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded-full bg-primary-purple/20 text-purple-400 text-[10px] font-semibold">
                          딥리서치
                        </span>
                        <span className="text-[10px] text-neutral-cream/30">
                          {new Date(issue.created_at).toLocaleDateString(
                            'ko-KR'
                          )}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-secondary-gold transition-colors mb-2">
                        {issue.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-neutral-cream/50 line-clamp-2 mb-4">
                        {issue.body.split('\n')[0]}
                      </p>

                      {/* Data Points */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {issue.data_points.map((dp, j) => (
                          <div
                            key={j}
                            className="p-3 rounded-lg bg-white/5 text-center"
                          >
                            <p className="text-[10px] text-neutral-cream/40">
                              {dp.label}
                            </p>
                            <p className="text-sm font-bold text-white mt-0.5">
                              {dp.value}
                            </p>
                            {dp.diff && (
                              <p className="text-[10px] text-secondary-gold mt-0.5">
                                {dp.diff}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Tags & Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5 flex-wrap">
                          {issue.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-neutral-cream/40"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-neutral-cream/30">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {issue.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {issue.comments_count}
                          </span>
                          <ChevronRight className="w-4 h-4 text-neutral-cream/20 group-hover:text-secondary-gold transition-colors" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Free Posts */}
      {showFree && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-secondary-green" />
            <h2 className="text-lg font-serif font-bold text-white">
              자유게시판
            </h2>
          </div>

          <div className="space-y-3">
            {COMMUNITY_POSTS.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (showResearch ? SEED_ISSUES.length : 0) * 0.1 + i * 0.08 }}
              >
                <Link href={`/smartfarm/community/${post.id}`}>
                  <Card className="hover:border-white/20 transition-colors group">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-medium text-white group-hover:text-secondary-gold transition-colors truncate">
                            {post.title}
                          </h3>
                          <p className="text-xs text-neutral-cream/40 mt-1 line-clamp-1">
                            {post.body}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-[10px] text-neutral-cream/30">
                              {post.author}
                            </span>
                            <span className="text-[10px] text-neutral-cream/20">
                              {new Date(post.created_at).toLocaleDateString(
                                'ko-KR'
                              )}
                            </span>
                            <div className="flex gap-1.5 ml-auto">
                              {post.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-neutral-cream/30"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0 text-[10px] text-neutral-cream/30">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {post.comments_count}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
