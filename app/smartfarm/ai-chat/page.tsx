'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, Leaf, Bug, Droplets, LogIn } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuthStore } from '@/lib/auth-store';
import { api } from '@/lib/api-client';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; content: string; confidence?: number }>;
  timestamp: Date;
}

const quickQuestions = [
  { icon: Leaf, text: '지금 전정해도 될까요?', color: '#22C55E' },
  { icon: Bug, text: '노균병 예방법 알려주세요', color: '#EF4444' },
  { icon: Droplets, text: '관수 시기는 언제가 좋나요?', color: '#3B82F6' },
  { icon: Sparkles, text: '올해 GDD 기준 생육 예측', color: '#F59E0B' },
];

const demoResponses: Record<string, string> = {
  '지금 전정해도 될까요?': `현재 GDD 누적이 125로, 예년 대비 18% 빠른 속도입니다.\n\n**권장 사항:**\n- 현재 휴면기이므로 전정 적기에 해당합니다\n- GDD 150 이전 전정 완료 시 수확량 평균 12% 증가 (최근 5년 화성 지역 데이터)\n- 올해 평균기온이 예년 대비 2.1°C 높아 발아가 약 7일 빨라질 수 있습니다\n\n**주의:** 야간 최저기온 -5°C 이하 예보 시 전정 상처 동해 위험이 있으니 기상 예보를 확인하세요.`,
  '노균병 예방법 알려주세요': `노균병(Downy Mildew) 예방을 위한 통합 관리 전략입니다.\n\n**환경 모니터링:**\n- PMI 지수 0.5 이상 시 주의 단계 진입\n- 습도 75% 이상 + 기온 18~25°C 조건에서 발생 위험 급증\n- 현재 PMI: 0.65 (주의 단계)\n\n**예방 조치:**\n1. 환기 강화 - 캐노피 관리로 통풍 개선\n2. 예방적 살포 - PMI 0.7 도달 전 보르도액 살포\n3. 배수 관리 - 토양 과습 방지\n4. 이병 잎 즉시 제거\n\n**추천 방제 시기:** 강우 전 48시간 이내 예방 살포가 가장 효과적입니다.`,
  '관수 시기는 언제가 좋나요?': `현재 토양수분 42.5%로 적정 범위 내에 있습니다.\n\n**관수 기준:**\n- 적정 범위: 35~55% (포도 휴면기)\n- 하한 경보: 30% 이하\n- 상한 경보: 60% 이상\n\n**현재 상태 분석:**\n- VPD(수증기압차): 0.8 kPa - 정상\n- CWSI(작물수분스트레스): 0.3 - 양호\n- 향후 48시간 강우 예보: 10~20mm\n\n**권장:** 내일 오후 강우 예보가 있으므로 현재 관수는 불필요합니다. 토양수분 35% 이하 도달 시 알림을 발송해 드리겠습니다.`,
  '올해 GDD 기준 생육 예측': `2026년 생육 예측 분석입니다.\n\n**현재 GDD 상황:**\n- 누적 GDD: 125 (기준온도 10°C)\n- 예년 동기 대비: +18% 빠름\n- 올해 평균기온: 4.2°C (예년 대비 +2.1°C)\n\n**예상 주요 생육 시기:**\n| 단계 | 예상 시기 | 예년 대비 |\n|------|-----------|----------|\n| 발아 | 3월 15일 | 7일 빠름 |\n| 개화 | 5월 20일 | 5일 빠름 |\n| 착색 | 7월 25일 | 4일 빠름 |\n| 수확 | 9월 10일 | 3일 빠름 |\n\n**시사점:** 전반적으로 생육이 빨라질 것으로 예상되므로, 전정·방제 일정을 1주일 앞당기는 것을 검토하세요.`,
};

export default function AiChatPage() {
  const { isLoggedIn } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: isLoggedIn
        ? '안녕하세요! FarmSense AI 농업 비서입니다. 내 농장 센서 데이터와 농업 지식을 기반으로 맞춤 답변을 드리겠습니다.'
        : '안녕하세요! FarmSense AI 농업 비서입니다. 포도 재배에 관한 질문을 해주세요.\n\n💡 로그인하시면 내 농장 센서 데이터를 연동한 맞춤 답변을 받을 수 있습니다.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    if (isLoggedIn) {
      // 실제 RAG API 호출
      try {
        const { data } = await api.post('/rag/smart/', {
          question: text.trim(),
          use_nongsaro: true,
        });

        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: data.answer || data.response || '응답을 처리하지 못했습니다.',
          sources: data.sources,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);
      } catch (err: any) {
        // smart 실패 시 기본 rag/ask/ 시도
        try {
          const { data } = await api.post('/rag/ask/', {
            question: text.trim(),
          });
          const aiMsg: Message = {
            id: `ai-${Date.now()}`,
            role: 'assistant',
            content: data.answer || data.response || '응답을 처리하지 못했습니다.',
            sources: data.sources,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, aiMsg]);
        } catch {
          setMessages((prev) => [
            ...prev,
            {
              id: `ai-${Date.now()}`,
              role: 'assistant',
              content: '서버 응답에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
              timestamp: new Date(),
            },
          ]);
        }
      } finally {
        setIsTyping(false);
      }
    } else {
      // 데모 모드
      setTimeout(() => {
        const response =
          demoResponses[text.trim()] ||
          `"${text.trim()}"에 대해 분석 중입니다.\n\n이 기능은 **로그인 후** RAG(Retrieval-Augmented Generation) 기반으로 작동합니다. 포도 재배 전문 문서, 센서 데이터, 기상 정보를 종합하여 맞춤 답변을 제공합니다.\n\n💡 **로그인하시면** 실시간 센서 데이터 연동, 농사로 API, 전문 문서 검색을 활용한 정확한 답변을 받을 수 있습니다.`;

        const aiMsg: Message = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
      }, 1200);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] lg:h-[calc(100vh-6rem)]">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
            <Bot className="w-6 h-6 text-purple-400" />
            AI 농업 상담
          </h1>
          <p className="text-neutral-cream/60 text-sm mt-1">
            {isLoggedIn
              ? 'RAG 기반 실시간 맞춤 답변'
              : 'RAG 기반 포도 재배 전문 AI 비서 (데모)'}
          </p>
        </div>
        {isLoggedIn && (
          <span className="px-2 py-1 rounded-full bg-secondary-green/20 text-secondary-green text-[10px] font-medium">
            실시간 연동
          </span>
        )}
      </div>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col overflow-hidden">
        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'assistant'
                      ? 'bg-primary-purple/30'
                      : 'bg-secondary-gold/30'
                  }`}
                >
                  {msg.role === 'assistant' ? (
                    <Bot className="w-4 h-4 text-purple-400" />
                  ) : (
                    <User className="w-4 h-4 text-secondary-gold" />
                  )}
                </div>
                <div className={`max-w-[80%] ${msg.role === 'user' ? '' : ''}`}>
                  <div
                    className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'assistant'
                        ? 'bg-white/5 text-neutral-cream/90'
                        : 'bg-primary-purple/20 text-white'
                    }`}
                  >
                    {msg.content.split('\n').map((line, i) => (
                      <span key={i}>
                        {line.startsWith('**') && line.endsWith('**') ? (
                          <strong className="text-white">
                            {line.replace(/\*\*/g, '')}
                          </strong>
                        ) : line.startsWith('|') ? (
                          <code className="block text-xs text-neutral-cream/60 font-mono">
                            {line}
                          </code>
                        ) : line.startsWith('- ') || line.match(/^\d+\./) ? (
                          <span className="block ml-2 text-neutral-cream/80">
                            {line}
                          </span>
                        ) : (
                          line
                        )}
                        {i < msg.content.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                  {/* Sources */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <p className="text-[10px] text-neutral-cream/30 px-1">참고 자료:</p>
                      {msg.sources.slice(0, 3).map((src, i) => (
                        <div
                          key={i}
                          className="text-[10px] text-neutral-cream/40 bg-white/5 rounded-lg px-3 py-1.5"
                        >
                          {src.title}
                          {src.confidence && (
                            <span className="ml-2 text-secondary-gold">
                              {(src.confidence * 100).toFixed(0)}%
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary-purple/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-purple-400" />
              </div>
              <div className="bg-white/5 rounded-2xl px-4 py-3 flex gap-1">
                <span className="w-2 h-2 bg-neutral-cream/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-neutral-cream/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-neutral-cream/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Quick Questions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-neutral-cream/40 mb-2">
              자주 묻는 질문
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((q, i) => {
                const Icon = q.icon;
                return (
                  <button
                    key={i}
                    onClick={() => sendMessage(q.text)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-cream/70 hover:text-neutral-cream transition-colors text-left"
                  >
                    <Icon className="w-4 h-4 shrink-0" style={{ color: q.color }} />
                    {q.text}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-white/10 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="포도 재배에 관해 질문해주세요..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-4 py-3 rounded-xl bg-primary-purple hover:bg-primary-purple/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
