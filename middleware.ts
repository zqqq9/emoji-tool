import createMiddleware from 'next-intl/middleware';
import { locales } from './app/i18n';
import { NextRequest, NextResponse } from 'next/server';

// 创建处理域名重定向的中间件
function redirectMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // 检查是否需要重定向
  if (hostname === 'www.emoji-gen.com' || hostname === 'emoji-gen.com' && !request.nextUrl.protocol.includes('https')) {
    // 构建新的 URL
    const newUrl = new URL(url.pathname + url.search, 'https://emoji-gen.com');
    return NextResponse.redirect(newUrl);
  }
  
  return null;
}

// 创建国际化中间件
const intlMiddleware = createMiddleware({
  // 支持的地区语言列表
  locales: locales,
  // 默认语言
  defaultLocale: 'en'
});

// 组合中间件
export default function middleware(request: NextRequest) {
  // 首先检查是否需要域名重定向
  const redirectResponse = redirectMiddleware(request);
  if (redirectResponse) return redirectResponse;
  
  // 否则应用国际化中间件
  return intlMiddleware(request);
}

// 匹配需要国际化的路径
export const config = {
  // 匹配所有路径，除了 api 路由、静态资源、图片等
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 