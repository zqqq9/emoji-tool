import createMiddleware from 'next-intl/middleware';

// 配置国际化，只支持英语
export default createMiddleware({
  // 仅支持英语
  locales: ['en'],
  // 默认语言是英语
  defaultLocale: 'en',
  // 总是在URL中显示语言前缀
  localePrefix: 'always'
});

export const config = {
  // 匹配除静态资源和API路由外的所有路由
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 