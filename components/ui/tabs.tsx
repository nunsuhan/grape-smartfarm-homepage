'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
    const [activeTab, setActiveTab] = React.useState(defaultTab || tabs[0].id);

    return (
        <div className="w-full">
            <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={clsx(
                            'relative px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap',
                            activeTab === tab.id ? 'text-secondary-gold' : 'text-neutral-400 hover:text-white'
                        )}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary-gold"
                            />
                        )}
                    </button>
                ))}
            </div>

            <div className="relative min-h-[400px]">
                {/* 
                   Use key to force re-render or AnimatePresence for transitions. 
                   Simple conditional rendering is safer for complex content.
                 */}
                {tabs.map((tab) => (
                    <div key={tab.id} className={clsx(activeTab === tab.id ? 'block' : 'hidden')}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {tab.content}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
