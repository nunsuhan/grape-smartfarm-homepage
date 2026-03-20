import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FarmSense — Data Infrastructure for Premium Agriculture',
  description: 'AI 기반 스마트 농업 플랫폼. 센서 데이터 수집부터 수출 인증까지, 하나의 플랫폼으로.',
  openGraph: {
    title: 'FarmSense — Data Infrastructure for Premium Agriculture',
    description: 'AI 기반 스마트 농업 플랫폼',
    url: 'https://farmsense.kr',
    siteName: 'FarmSense',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
