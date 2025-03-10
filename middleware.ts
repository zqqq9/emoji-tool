import createMiddleware from 'next-intl/middleware';
import { locales } from './app/i18n';

// 创建国际化中间件
export default createMiddleware({
  // 支持的地区语言列表
  locales: locales,
  // 默认语言
  defaultLocale: 'en'
});

// 匹配需要国际化的路径
export const config = {
  // 匹配所有路径，除了 api 路由、静态资源、图片等
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 