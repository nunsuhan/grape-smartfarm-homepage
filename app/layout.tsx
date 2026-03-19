import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/providers/providers';
import { Navbar } from '@/components/navbar';

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
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans overflow-x-hidden">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
