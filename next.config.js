/** @type {import('next').NextConfig} */
const nextConfig = {
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
