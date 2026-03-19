// 접속 국가 감지 로직 (동기 버전)
export function detectLocale(): 'ko' | 'en' {
  // 1순위: localStorage에 사용자가 수동 선택한 값
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('farmsense-locale');
    if (saved === 'ko' || saved === 'en') return saved;
  }
  
  // 2순위: 브라우저 언어
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language || navigator.languages?.[0] || '';
    if (lang.startsWith('ko')) return 'ko';
  }
  
  // 3순위: timezone으로 한국 판별
  if (typeof Intl !== 'undefined') {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === 'Asia/Seoul') return 'ko';
  }
  
  // 기본값: 해외 바이어로 간주 → 영문
  return 'en';
}

export function setLocale(locale: 'ko' | 'en') {
  localStorage.setItem('farmsense-locale', locale);
}

// 바이어 페이지 목록
export const buyerPages = [
  '/export-intelligence',
  '/verified-farms', 
  '/data-intelligence',
  '/grape-intelligence',
  '/agriculture-data-platform',
];

// 현재 경로가 바이어 페이지인지 확인
export function isBuyerPage(pathname: string): boolean {
  return buyerPages.some(p => pathname.startsWith(p));
}