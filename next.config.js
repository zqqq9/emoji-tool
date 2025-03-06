/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

// 使用默认配置，无需指定路径
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
};

module.exports = withNextIntl(nextConfig); 