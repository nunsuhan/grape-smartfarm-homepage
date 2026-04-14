export type NavChild = {
  label: string;
  href: string;
  description?: string;
  disabled?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  {
    label: '작물',
    href: '/crops',
    children: [
      {
        label: '포도 스마트팜',
        href: '/crops/grape',
        description: 'GRAPE INTELLIGENCE',
      },
      {
        label: '딸기 스마트팜',
        href: '/crops/strawberry',
        description: 'STRAWBERRY INTELLIGENCE',
      },
    ],
  },
  {
    label: '기술',
    href: '/technology',
    children: [
      {
        label: '기술 문서',
        href: '/technology/docs',
        description: 'TECH OVERVIEW',
      },
      {
        label: 'AI 병해 진단',
        href: '/technology/ai-diagnosis',
        description: 'AI DIAGNOSIS',
      },
      {
        label: '병해 예측 (PMI)',
        href: '/technology/pmi-dss',
        description: 'PMI-DSS ENGINE',
      },
      {
        label: 'RAG 시스템',
        href: '/technology/rag-system',
        description: 'RAG SYSTEM',
      },
      {
        label: '블록체인 추적성',
        href: '/technology/blockchain',
        description: 'BLOCKCHAIN',
      },
    ],
  },
  {
    label: '스마트팜',
    href: '/smartfarm',
    children: [
      {
        label: '대시보드',
        href: '/smartfarm/dashboard',
        description: 'DASHBOARD',
      },
      {
        label: '센서 모니터링',
        href: '/smartfarm/sensors',
        description: 'SENSORS',
      },
      {
        label: 'AI 상담',
        href: '/smartfarm/ai-chat',
        description: 'AI CHAT',
      },
      {
        label: '영농일지',
        href: '/smartfarm/field-book',
        description: 'FIELD BOOK',
      },
      {
        label: '커뮤니티',
        href: '/smartfarm/community',
        description: 'COMMUNITY',
      },
    ],
  },
  {
    label: '고객지원',
    href: '/faq',
  },
  {
    label: '요금제',
    href: '/pricing',
  },
];
