'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LoginScreen } from './login-screen';
import { DashboardScreen } from './dashboard-screen';
import { DiagnosisScreen } from './diagnosis-screen';
import { RAGChatScreen } from './rag-chat-screen';
import { FarmingLogScreen } from './farming-log-screen';
import { AppScreen } from './types';

export function WebAppContainer() {
    const [currentScreen, setCurrentScreen] = useState<AppScreen>('login');

    const navigateTo = (screen: AppScreen) => {
        setCurrentScreen(screen);
    };

    return (
        <div className="w-full h-full bg-neutral-black overflow-hidden relative">
            <AnimatePresence mode="wait">
                {currentScreen === 'login' && (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="w-full h-full"
                    >
                        <LoginScreen onLogin={() => navigateTo('dashboard')} />
                    </motion.div>
                )}
                {currentScreen === 'dashboard' && (
                    <motion.div
                        key="dashboard"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="w-full h-full"
                    >
                        <DashboardScreen
                            onNavigate={navigateTo}
                        />
                    </motion.div>
                )}
                {currentScreen === 'diagnosis' && (
                    <motion.div
                        key="diagnosis"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="w-full h-full"
                    >
                        <DiagnosisScreen
                            onBack={() => navigateTo('dashboard')}
                        />
                    </motion.div>
                )}
                {currentScreen === 'rag-chat' && (
                    <motion.div
                        key="rag-chat"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="w-full h-full"
                    >
                        <RAGChatScreen
                            onBack={() => navigateTo('dashboard')}
                        />
                    </motion.div>
                )}
                {currentScreen === 'farming-log' && (
                    <motion.div
                        key="farming-log"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="w-full h-full"
                    >
                        <FarmingLogScreen
                            onBack={() => navigateTo('dashboard')}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
