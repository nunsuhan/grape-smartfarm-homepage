'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Eye,
  MessageSquare,
  Clock,
  User,
  Microscope,
  ThumbsUp,
  Share2,
  Tag,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { SEED_ISSUES, COMMUNITY_POSTS } from '@/lib/demo-data';

// Demo comments for seed issues
const demoComments = [
  {
    id: 'c1',
    author: '화성포도농부',
    body: '저도 올해 GDD가 빠르게 올라가는 것 같아서 전정을 2주 앞당겼습니다. 작년에 늦게 전정해서 착과율이 좀 떨어졌거든요.',
    created_at: '2026-02-03T10:30:00Z',
    likes: 8,
  },
  {
    id: 'c2',
    author: '영동포도마스터',
    body: 'GDD 기준으로 전정하는 게 더 정확한 것 같습니다. 날짜 기준은 매년 기온 차이가 크니까요. 특히 올해처럼 이상기온이 심한 해에는 더더욱요.',
    created_at: '2026-02-05T14:20:00Z',
    likes: 12,
  },
  {
    id: 'c3',
    author: '포도새싹농부',
    body: '첫해라서 GDD 개념이 생소한데, FarmSense 대시보드에서 자동으로 추적해주니 편합니다. 전정 시기 알림도 받을 수 있으면 좋겠어요.',
    created_at: '2026-02-07T09:15:00Z',
    likes: 5,
  },
  {
    id: 'c4',
    author: '이천샤인',
    body: '샤인머스켓 기준으로는 GDD 130~140 사이에 전정하면 좋은 결과를 얻었습니다. 품종마다 차이가 있어서 참고만 해주세요.',
    created_at: '2026-02-10T16:45:00Z',
    likes: 15,
  },
];

export default function CommunityDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // Find the post
  const seedIssue = SEED_ISSUES.find((s) => s.id === id);
  const freePost = COMMUNITY_POSTS.find((p) => p.id === id);

  if (!seedIssue && !freePost) {
    return (
      <div className="text-center py-20">
        <p className="text-neutral-cream/40">게시글을 찾을 수 없습니다</p>
        <Link
          href="/smartfarm/community"
          className="text-purple-400 text-sm mt-2 inline-block hover:underline"
        >
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  // Render Seed Issue Detail
  if (seedIssue) {
    return (
      <div className="space-y-6 max-w-3xl">
        {/* Back link */}
        <Link
          href="/smartfarm/community"
          className="inline-flex items-center gap-1 text-sm text-neutral-cream/40 hover:text-neutral-cream transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          커뮤니티로 돌아가기
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-full bg-primary-purple/20 text-purple-400 text-xs font-semibold flex items-center gap-1">
              <Microscope className="w-3 h-3" />
              딥리서치
            </span>
            {seedIssue.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-neutral-cream/40"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl font-serif font-bold text-white leading-tight">
            {seedIssue.title}
          </h1>

          <div className="flex items-center gap-4 mt-3 text-xs text-neutral-cream/40">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {seedIssue.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {new Date(seedIssue.created_at).toLocaleDateString('ko-KR')}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {seedIssue.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" />
              {seedIssue.comments_count}
            </span>
          </div>
        </motion.div>

        {/* Data Points */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {seedIssue.data_points.map((dp, i) => (
              <Card key={i}>
                <CardContent className="p-4 text-center">
                  <p className="text-xs text-neutral-cream/40">{dp.label}</p>
                  <p className="text-xl font-bold text-white mt-1">
                    {dp.value}
                  </p>
                  {dp.diff && (
                    <p className="text-xs text-secondary-gold mt-1">
                      {dp.diff}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none text-sm text-neutral-cream/80 leading-relaxed">
                {seedIssue.body.split('\n\n').map((para, i) => (
                  <p key={i} className="mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Discussion Points */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-secondary-gold/20">
            <CardContent className="p-6">
              <h3 className="text-sm font-bold text-secondary-gold mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                토론 포인트
              </h3>
              <ul className="space-y-2">
                {seedIssue.discussion_points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-neutral-cream/70 pl-4 border-l-2 border-secondary-gold/30 py-1"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-neutral-cream/60 hover:text-neutral-cream transition-colors">
            <ThumbsUp className="w-4 h-4" />
            유용해요
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-neutral-cream/60 hover:text-neutral-cream transition-colors">
            <Share2 className="w-4 h-4" />
            공유하기
          </button>
        </div>

        {/* Comments */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-serif font-bold text-white mb-4">
            댓글 {demoComments.length}개
          </h3>

          <div className="space-y-4">
            {demoComments.map((comment, i) => (
              <Card key={comment.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-primary-purple/20 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {comment.author}
                    </span>
                    <span className="text-[10px] text-neutral-cream/30 ml-auto">
                      {new Date(comment.created_at).toLocaleDateString(
                        'ko-KR'
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-cream/70 leading-relaxed">
                    {comment.body}
                  </p>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="flex items-center gap-1 text-[10px] text-neutral-cream/30 hover:text-neutral-cream transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      {comment.likes}
                    </button>
                    <button className="text-[10px] text-neutral-cream/30 hover:text-neutral-cream transition-colors">
                      답글
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comment Input */}
          <Card className="mt-4">
            <CardContent className="p-4">
              <textarea
                placeholder="의견을 남겨주세요... (데모 모드에서는 입력만 가능합니다)"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 resize-none h-24 transition-colors"
              />
              <div className="flex justify-end mt-2">
                <button className="px-4 py-2 rounded-lg bg-primary-purple hover:bg-primary-purple/80 text-sm text-white font-medium transition-colors">
                  댓글 작성
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Render Free Post Detail
  return (
    <div className="space-y-6 max-w-3xl">
      {/* Back link */}
      <Link
        href="/smartfarm/community"
        className="inline-flex items-center gap-1 text-sm text-neutral-cream/40 hover:text-neutral-cream transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        커뮤니티로 돌아가기
      </Link>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-3">
          {freePost!.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-white/5 text-[10px] text-neutral-cream/40"
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl font-serif font-bold text-white">
          {freePost!.title}
        </h1>

        <div className="flex items-center gap-4 mt-3 text-xs text-neutral-cream/40">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {freePost!.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {new Date(freePost!.created_at).toLocaleDateString('ko-KR')}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            {freePost!.views}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            {freePost!.comments_count}
          </span>
        </div>
      </motion.div>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-neutral-cream/80 leading-relaxed">
              {freePost!.body}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-neutral-cream/60 hover:text-neutral-cream transition-colors">
          <ThumbsUp className="w-4 h-4" />
          유용해요
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-neutral-cream/60 hover:text-neutral-cream transition-colors">
          <Share2 className="w-4 h-4" />
          공유하기
        </button>
      </div>

      {/* Comment Input */}
      <Card>
        <CardContent className="p-4">
          <h3 className="text-sm font-bold text-white mb-3">댓글</h3>
          <textarea
            placeholder="의견을 남겨주세요... (데모 모드에서는 입력만 가능합니다)"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 resize-none h-24 transition-colors"
          />
          <div className="flex justify-end mt-2">
            <button className="px-4 py-2 rounded-lg bg-primary-purple hover:bg-primary-purple/80 text-sm text-white font-medium transition-colors">
              댓글 작성
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
