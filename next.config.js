/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30일 캐시
  },
  // 정적 파일 서빙을 위한 rewrites
  async rewrites() {
    return [
      {
        source: '/webapp',
        destination: '/webapp/index.html',
      },
      {
        source: '/webapp/:path*',
        destination: '/webapp/:path*',
      },
    ];
  },
  // public 폴더의 정적 파일 허용
  trailingSlash: false,
};

module.exports = nextConfig;