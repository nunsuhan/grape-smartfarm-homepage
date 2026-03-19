/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint 빌드 시 스킵 (eslint.config.mjs가 ESLint 9 문법을 사용하지만
    // Vercel 환경에서 ESLint 8만 설치되므로 충돌 발생. CI/로컬에서 별도 실행)
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/register',
        destination: 'https://api.farmsense.kr/register/',
        permanent: false, // 307 — 추후 URL 변경 가능성 있으므로 임시 리다이렉트
      },
    ];
  },
};

module.exports = nextConfig;
