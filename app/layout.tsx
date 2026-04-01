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
  title: {
    default: '팜센스(FarmSense) — AI 기반 스마트팜 데이터 플랫폼',
    template: '%s | 팜센스(FarmSense)',
  },
  description: '팜센스(FarmSense)는 IoT 센서 데이터와 AI로 포도·딸기 농가의 병해 예측, 스마트 관개, 수확량 예측, 수출 인증을 지원하는 스마트팜 플랫폼입니다.',
  keywords: ['팜센스', 'FarmSense', '스마트팜', '스마트농업', 'AI 농업', '포도 스마트팜', '딸기 스마트팜', '병해 예측', '농업 IoT', '수출 농산물', '농업 데이터', 'smart farm', 'precision agriculture'],
  authors: [{ name: '팜센스(FarmSense)', url: 'https://www.farmsense.kr' }],
  creator: '팜센스(FarmSense)',
  publisher: '팜센스(FarmSense)',
  metadataBase: new URL('https://www.farmsense.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '팜센스(FarmSense) — AI 기반 스마트팜 데이터 플랫폼',
    description: '팜센스(FarmSense)는 IoT 센서와 AI로 포도·딸기 농가의 병해 예측, 관개, 수확량 예측, 수출 인증을 지원합니다.',
    url: 'https://www.farmsense.kr',
    siteName: '팜센스(FarmSense)',
    type: 'website',
    locale: 'ko_KR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '팜센스(FarmSense) - AI 기반 스마트팜 플랫폼',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '팜센스(FarmSense) — AI 기반 스마트팜 데이터 플랫폼',
    description: '팜센스(FarmSense)는 IoT 센서와 AI로 포도·딸기 농가의 병해 예측, 관개, 수확량 예측, 수출 인증을 지원합니다.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'S0SiqIb99SVtRMruIDO1RQbUGdCJPFMVaESjvl2tN_Q',
    other: {
      'naver-site-verification': ['3fed7c10cda65e8b16dbb7b1586410eb4a47cf07', '826f5525970841d32acf51809f32c1f64150a163'],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://www.farmsense.kr" />
      </head>
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
