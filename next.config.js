/** @type {import('next').NextConfig} */
const nextConfig = {
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