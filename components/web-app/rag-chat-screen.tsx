'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Sparkles, User, Bot, Menu, MessageSquare } from 'lucide-react';

interface RAGChatScreenProps {
    onBack: () => void;
}

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    timestamp: string;
}

export function RAGChatScreen({ onBack }: RAGChatScreenProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: input,
            isBot: false,
            timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const botMsg: Message = {
                id: Date.now() + 1,
                text: "그 부분에 대해서는 농업기술센터 논문 데이터베이스를 검색 중입니다... 더 구체적으로 말씀해주시면 정확한 답변을 드릴 수 있습니다.",
                isBot: true,
                timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-full bg-slate-50 relative text-gray-900 font-sans">
            {/* Header */}
            <div className="px-6 py-4 flex items-center justify-between bg-white border-b border-gray-100 z-10 sticky top-0">
                <button onClick={onBack} className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-900" />
                </button>
                <h2 className="text-lg font-bold text-gray-900">AI 상담소</h2>
                <button className="p-2 -mr-2 hover:bg-gray-50 rounded-full">
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6" ref={scrollRef}>
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
                        <div className="w-24 h-24 bg-gray-100 rounded-[2rem] flex items-center justify-center mb-6">
                            <div className="relative">
                                <MessageSquare className="w-12 h-12 text-gray-400" />
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white"></div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2">포도 재배에 대해 무엇이든 물어보세요!</h3>
                        <p className="text-gray-400 text-sm">
                            예: 노균병 방제 방법, 샤인머스캣 당도 올리기
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-3 ${msg.isBot ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {msg.isBot && (
                                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-white shadow-md shadow-blue-500/30">
                                        <Bot className="w-6 h-6" />
                                    </div>
                                )}
                                <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${msg.isBot
                                    ? 'bg-white rounded-tl-none text-gray-800 border border-gray-100'
                                    : 'bg-green-500 text-white rounded-tr-none font-medium shadow-md shadow-green-500/20'
                                    }`}>
                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                    <span className={`text-[10px] mt-2 block ${msg.isBot ? 'text-gray-400' : 'text-white/70'}`}>
                                        {msg.timestamp}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                        {isTyping && (
                            <div className="flex gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none p-4 flex items-center gap-2 shadow-sm">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="질문을 입력하세요..."
                        className="w-full bg-gray-50 border-none rounded-[2rem] py-4 pl-6 pr-14 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 transition-all shadow-inner"
                    />
                    <button
                        onClick={handleSend}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gray-400 rounded-full hover:bg-green-500 transition-colors text-white"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
