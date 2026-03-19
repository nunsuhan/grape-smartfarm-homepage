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
    label: '솔루션',
    href: '/#solutions',
  },
  {
    label: '작물',
    href: '/crops',
    children: [
      {
        label: '포도 재배',
        href: '/crops/grape',
        description: 'GRAPE INTELLIGENCE',
      },
      {
        label: '딸기 재배',
        href: '/crops/strawberry',
        description: 'STRAWBERRY INTELLIGENCE',
      },
      {
        label: '토마토 (준비중)',
        href: '/crops/tomato',
        description: 'TOMATO INTELLIGENCE',
        disabled: true,
      },
      // TODO: 사과·참외 등 다른 작물 추가 시 여기에 children 추가
    ],
  },
  {
    label: '수출·인증',
    href: '/#export',
  },
  {
    label: '기술',
    href: '/#technology',
  },
  {
    label: '파트너',
    href: '/#partners',
  },
  {
    label: '소개',
    href: '/#about',
  },
];
