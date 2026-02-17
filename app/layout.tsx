import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { ModalProvider } from '@/components/providers/modal-provider';
import { QueryProvider } from '@/lib/query-provider';
import { ContactModal } from '@/components/contact-modal';
import { MembershipModal } from '@/components/membership-modal';

export const metadata: Metadata = {
  title: '팜센스(FarmSense) - 데이터 기반 AI 영농 의사결정 지원 시스템 (DSS)',
  description: '팜센스는 단순한 진단을 넘어선 예방적 관리. 4억 개의 센서 데이터와 VitiCanopy 알고리즘으로 포도 농사의 모든 의사결정을 지원합니다.',
  keywords: '팜센스, FarmSense, 스마트팜, 포도재배, AI 농업, 병해 예측, 의사결정 지원, 센서 모니터링',
  openGraph: {
    title: '팜센스(FarmSense) - 데이터 기반 AI 영농 의사결정 지원 시스템',
    description: '팜센스는 단순한 진단을 넘어선 예방적 관리. 4억 개의 센서 데이터와 VitiCanopy 알고리즘으로 포도 농사의 모든 의사결정을 지원합니다.',
    url: 'https://www.farmsense.kr',
    siteName: '팜센스(FarmSense)',
    locale: 'ko_KR',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '팜센스',
              alternateName: 'FarmSense',
              url: 'https://www.farmsense.kr',
              description: '데이터 기반 AI 영농 의사결정 지원 시스템',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-neutral-black text-neutral-cream font-sans antialiased overflow-x-hidden selection:bg-secondary-gold selection:text-neutral-black">
        <QueryProvider>
          <ModalProvider>
            <Navbar />
            {children}
            <ContactModal />
            <MembershipModal />
          </ModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
