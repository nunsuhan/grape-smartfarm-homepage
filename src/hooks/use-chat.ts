import { useState, useCallback } from 'react';
import { api } from '@/lib/api-client';
import { useFarmStore } from '@/stores/farm-store';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; content?: string; score?: number }>;
  confidence?: number;
  timestamp: string;
  loading?: boolean;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const selectedFarmId = useFarmStore((s) => s.selectedFarmId);

  const sendMessage = useCallback(async (text: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    };

    const placeholderId = `assistant-${Date.now()}`;
    const placeholder: ChatMessage = {
      id: placeholderId,
      role: 'assistant',
      content: '',
      timestamp: new Date().toISOString(),
      loading: true,
    };

    setMessages((prev) => [...prev, userMsg, placeholder]);
    setIsLoading(true);

    try {
      const { data } = await api.post('/v1/chat/', {
        message: text,
        farm_id: selectedFarmId,
        include_context: true,
        include_dss: true,
      });

      const assistantMsg: ChatMessage = {
        id: placeholderId,
        role: 'assistant',
        content: data.response || data.answer || '응답을 받지 못했습니다.',
        sources: data.sources,
        confidence: data.confidence,
        timestamp: data.timestamp || new Date().toISOString(),
      };

      setMessages((prev) =>
        prev.map((m) => (m.id === placeholderId ? assistantMsg : m))
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === placeholderId
            ? { ...m, content: '죄송합니다. 응답을 가져오는데 실패했습니다.', loading: false }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, [selectedFarmId]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, sendMessage, clearMessages };
}
