'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

interface CodeBlockProps {
    code: string;
    language?: string;
    filename?: string;
}

export function CodeBlock({ code, language = 'json', filename }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative rounded-lg overflow-hidden bg-[#1E1E1E] border border-white/10 shadow-lg my-4 group">
            {filename && (
                <div className="flex items-center justify-between px-4 py-2 bg-[#2D2D2D] border-b border-white/5">
                    <span className="text-xs text-neutral-400 font-mono">{filename}</span>
                    <span className="text-xs text-neutral-500 uppercase">{language}</span>
                </div>
            )}

            <div className="relative p-4 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed text-[#D4D4D4]">
                    <code>{code}</code>
                </pre>
            </div>

            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 backdrop-blur-sm"
                title="Copy to clipboard"
            >
                <motion.div
                    initial={false}
                    animate={{ scale: copied ? 0.8 : 1 }}
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </motion.div>
            </button>
        </div>
    );
}
