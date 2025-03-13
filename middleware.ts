import createMiddleware from 'next-intl/middleware';
import { locales } from './app/i18n';
import { NextRequest, NextResponse } from 'next/server';

// 创建国际化中间件
const intlMiddleware = createMiddleware({
  // 支持的地区语言列表
  locales: locales,
  // 默认语言
  defaultLocale: 'en'
});

// 组合中间件
export default function middleware(request: NextRequest) {
  // 获取请求信息
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const referer = request.headers.get('referer') || '';
  
  console.log(`处理请求: ${request.url}, 主机名: ${hostname}, 引用: ${referer}`);
  
  // 检查是否有重定向循环的迹象
  const redirectCount = parseInt(request.headers.get('x-redirect-count') || '0');
  if (redirectCount > 2) {
    console.log(`检测到重定向循环，停止重定向: ${request.url}`);
    // 如果已经重定向超过2次，直接应用国际化中间件，不再重定向
    return intlMiddleware(request);
  }
  
  // 只处理 HTTP 到 HTTPS 的重定向，不再处理 www 到非 www 的重定向
  if (!request.nextUrl.protocol.includes('https') && hostname.includes('emoji-gen.com')) {
    const newUrl = new URL(url.pathname + url.search, 'https://' + hostname);
    console.log(`重定向 HTTP 到 HTTPS: ${request.url} -> ${newUrl.toString()}`);
    
    // 设置重定向计数头
    const headers = new Headers({
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'x-redirect-count': (redirectCount + 1).toString()
    });
    
    return NextResponse.redirect(newUrl, { headers });
  }
  
  // 应用国际化中间件
  return intlMiddleware(request);
}

// 匹配需要国际化的路径
export const config = {
  // 匹配所有路径，除了 api 路由、静态资源、图片等
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 