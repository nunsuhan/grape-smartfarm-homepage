'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModal } from './providers/modal-provider';
import { Toast } from './ui/toast';

const tabs = [
    { id: 'partnership', label: '문의하기' },
] as const;

export function ContactModal() {
    const { isOpen, activeTab, closeModal, openModal, modalType } = useModal();
    const [showToast, setShowToast] = useState(false);

    // Only render if open and type is contact
    const shouldRender = isOpen && modalType === 'contact';

    // Local state for the form to preserve input when switching tabs if needed
    // But typically reset on close. For now, let's keep it simple.
    const [form, setForm] = useState({
        name: '',
        company: '',
        contact: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const response = await fetch("https://formspree.io/f/xvgelwkv", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setShowToast(true);
                setForm({ name: '', company: '', contact: '', email: '', message: '' });

                // Show toast for a moment before closing modal
                setTimeout(() => {
                    closeModal();
                    setShowToast(false);
                }, 2000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    // Reset form when opening?
    useEffect(() => {
        if (isOpen) {
            // Optional: clear form
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {shouldRender && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-neutral-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-[500px] bg-neutral-black border border-secondary-gold rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-serif font-bold text-white">문의하기</h2>
                            <button onClick={closeModal} className="text-neutral-cream/50 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Tabs */}
                            <div className="flex p-1 bg-white/5 rounded-lg mb-6">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => openModal(tab.id as any)}
                                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === tab.id
                                            ? 'bg-secondary-gold text-neutral-black shadow-sm'
                                            : 'text-neutral-cream/60 hover:text-white'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Form */}
                            <form
                                action="https://formspree.io/f/xvgelwkv"
                                method="POST"
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <input
                                    type="hidden"
                                    name="inquiry_type"
                                    value={tabs.find(t => t.id === activeTab)?.label || activeTab}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        name="name"
                                        placeholder="이름 *"
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors text-white placeholder:text-neutral-500"
                                    />
                                    <input
                                        name="company"
                                        placeholder="회사/농장명"
                                        value={form.company}
                                        onChange={e => setForm({ ...form, company: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors text-white placeholder:text-neutral-500"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        required
                                        name="phone"
                                        placeholder="연락처 *"
                                        value={form.contact}
                                        onChange={e => setForm({ ...form, contact: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors text-white placeholder:text-neutral-500"
                                    />
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="이메일 *"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors text-white placeholder:text-neutral-500"
                                    />
                                </div>

                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    placeholder="문의 내용"
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors resize-none text-white placeholder:text-neutral-500"
                                />

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-secondary-gold text-neutral-black font-bold rounded-lg hover:bg-white transition-colors shadow-lg shadow-secondary-gold/10"
                                >
                                    문의하기
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <Toast message="문의가 접수되었습니다. 빠른 시일 내 답변 드리겠습니다." isVisible={showToast} onClose={() => setShowToast(false)} />
                </div>
            )}
        </AnimatePresence>
    );
}
