'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Trash2, Bot, User, Loader2, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useChat, type ChatMessage } from '@/hooks/use-chat';
import { cn } from '@/lib/utils';

const QUICK_QUESTIONS = [
  '현재 병해 위험도는?',
  '오늘 관수 해야 할까요?',
  '탄저병 방제법 알려줘',
  '현재 성장 단계 정보',
];

export default function AIChatPage() {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput('');
    sendMessage(text);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">AI 상담</h1>
          <p className="text-muted-foreground">포도 재배에 관한 질문을 해보세요</p>
        </div>
        {messages.length > 0 && (
          <Button variant="ghost" size="sm" onClick={clearMessages}>
            <Trash2 className="mr-1.5 h-4 w-4" />
            대화 초기화
          </Button>
        )}
      </div>

      <Card className="flex flex-1 flex-col overflow-hidden">
        <CardHeader className="border-b py-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Bot className="h-5 w-5 text-primary" />
            포도 재배 AI 어시스턴트
          </CardTitle>
        </CardHeader>

        {/* Messages */}
        <ScrollArea className="flex-1" ref={scrollRef}>
          <div className="space-y-4 p-4">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Bot className="h-12 w-12 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground mb-6">
                  포도 재배에 관한 궁금한 점을 물어보세요.<br />
                  농장 환경 데이터를 기반으로 맞춤 답변을 드립니다.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {QUICK_QUESTIONS.map((q) => (
                    <Button
                      key={q}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => sendMessage(q)}
                    >
                      {q}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="border-t p-4">
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <Input
              placeholder="질문을 입력하세요..."
              className="flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';

  return (
    <div className={cn('flex gap-3', isUser && 'flex-row-reverse')}>
      <div className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
        isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
      )}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      <div className={cn(
        'max-w-[80%] rounded-lg px-4 py-2.5',
        isUser
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted'
      )}>
        {message.loading ? (
          <div className="flex items-center gap-2 text-sm">
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            답변 생성 중...
          </div>
        ) : (
          <>
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>

            {/* Sources */}
            {message.sources && message.sources.length > 0 && (
              <div className="mt-3 space-y-1 border-t border-border/30 pt-2">
                <p className="text-xs font-medium opacity-70">참고 자료</p>
                {message.sources.slice(0, 3).map((src, i) => (
                  <div key={i} className="flex items-center gap-1 text-xs opacity-60">
                    <ExternalLink className="h-3 w-3" />
                    {src.title}
                    {src.score != null && (
                      <Badge variant="secondary" className="ml-1 h-4 text-[9px]">
                        {(src.score * 100).toFixed(0)}%
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Confidence */}
            {message.confidence != null && !isUser && (
              <div className="mt-1 text-[10px] opacity-50">
                신뢰도: {(message.confidence * 100).toFixed(0)}%
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
