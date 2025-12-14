import type { Metadata } from 'next';
import { Playfair_Display, Inter, Space_Mono } from 'next/font/google';
import './globals.css';
import { ModalProvider } from '@/components/providers/modal-provider';
import { ContactModal } from '@/components/contact-modal';
import { MembershipModal } from '@/components/membership-modal';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'FarmSense - AI 포도 농업 솔루션',
  description: '287,000 지식 청크와 4억 센서 데이터를 기반으로 한 대한민국 유일의 포도 전문 AI 플랫폼',
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
          {children}
          <ContactModal />
          <MembershipModal />
        </ModalProvider>
      </body>
    </html>
  );
}
