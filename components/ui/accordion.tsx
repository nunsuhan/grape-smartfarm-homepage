'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

export function AccordionItem({ title, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <span className={clsx(
                    "text-lg font-bold transition-colors",
                    isOpen ? "text-secondary-gold" : "text-white group-hover:text-secondary-gold/80"
                )}>
                    {title}
                </span>
                <ChevronDown
                    className={clsx(
                        "w-5 h-5 text-white/50 transition-transform duration-300",
                        isOpen && "rotate-180 text-secondary-gold"
                    )}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-neutral-cream/70 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function Accordion({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-3xl mx-auto bg-white/5 rounded-2xl p-2 px-8">
            {children}
        </div>
    );
}
