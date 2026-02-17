'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Crown } from 'lucide-react';
import { useModal } from './providers/modal-provider';
import { Toast } from './ui/toast';

export function MembershipModal() {
    const { isOpen, modalType, closeModal } = useModal();
    const [showToast, setShowToast] = useState(false);
    const [form, setForm] = useState({
        name: '',
        company: '',
        contact: '',
        email: '',
        message: ''
    });

    // Only render if open and type is membership
    const shouldRender = isOpen && modalType === 'membership';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            // Append explicit type for clarity in email
            formData.append('submission_type', 'LIFETIME_MEMBERSHIP');

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

                setTimeout(() => {
                    closeModal();
                    setShowToast(false);
                }, 2000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

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
                        className="absolute inset-0 bg-neutral-black/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-[500px] bg-neutral-black border border-secondary-gold rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-secondary-gold/20 bg-secondary-gold/5">
                            <div className="flex items-center gap-3">
                                <Crown className="w-6 h-6 text-secondary-gold" />
                                <h2 className="text-xl font-serif font-bold text-white">평생회원 신청</h2>
                            </div>
                            <button onClick={closeModal} className="text-neutral-cream/50 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-neutral-cream/70 mb-6 text-sm leading-relaxed">
                                FarmSense 평생회원이 되신 것을 환영합니다.<br />
                                아래 정보를 남겨주시면 담당자가 VIP 전담 상담을 도와드립니다.
                            </p>

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
                                    value="LIFETIME_MEMBERSHIP"
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
                                    name="message"
                                    rows={3}
                                    placeholder="추가 요청사항이 있으시다면 적어주세요"
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-secondary-gold transition-colors resize-none text-white placeholder:text-neutral-500"
                                />

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-secondary-gold to-[#F5D061] text-neutral-black font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shadow-secondary-gold/20 flex items-center justify-center gap-2"
                                >
                                    <Crown className="w-4 h-4" />
                                    평생회원 상담 신청하기
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <Toast message="VIP 상담 신청이 접수되었습니다." isVisible={showToast} onClose={() => setShowToast(false)} />
                </div>
            )}
        </AnimatePresence>
    );
}
