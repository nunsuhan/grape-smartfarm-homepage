'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type TabType = 'investment' | 'partnership' | 'demo';
type ModalType = 'contact' | 'membership' | 'policy';

interface ModalContextType {
    isOpen: boolean;
    modalType: ModalType;
    activeTab: TabType;
    openModal: (tab?: TabType, type?: ModalType) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>('investment');
    const [modalType, setModalType] = useState<ModalType>('contact');

    const openModal = (tab: TabType = 'investment', type: ModalType = 'contact') => {
        setActiveTab(tab);
        setModalType(type);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider value={{ isOpen, activeTab, modalType, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
