/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

// 使用默认配置，无需指定路径
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // 添加重定向规则
  async redirects() {
    return [
      // 注意：Next.js 内部重定向只能处理路径，不能处理域名
      // 对于域名级别的重定向，需要在 DNS 或服务器级别配置
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.emoji-gen.com',
          },
        ],
        destination: 'https://emoji-gen.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig); 