import type { Metadata } from 'next';
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { ModalProvider } from '@/components/providers/modal-provider';
import { ContactModal } from '@/components/contact-modal';
import { MembershipModal } from '@/components/membership-modal';
import { PolicyModal } from '@/components/policy-modal';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'FarmSense - 데이터 기반 AI 영농 의사결정 지원 시스템 (DSS)',
  description: '단순한 진단을 넘어선 예방적 관리. 4억 개의 센서 데이터와 VitiCanopy 알고리즘으로 포도 농사의 모든 의사결정을 지원합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-neutral-black text-neutral-cream font-sans antialiased overflow-x-hidden selection:bg-secondary-gold selection:text-neutral-black">
        <ModalProvider>
          <Navbar />
          {children}
          <ContactModal />
          <MembershipModal />
          <PolicyModal />
        </ModalProvider>
      </body>
    </html>
  );
}
