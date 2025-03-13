import createMiddleware from 'next-intl/middleware';
import { locales } from './app/i18n';
import { NextRequest, NextResponse } from 'next/server';

// 创建处理域名重定向的中间件
function redirectMiddleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // 添加调试信息
  console.log(`处理请求: ${request.url}, 主机名: ${hostname}, 协议: ${request.nextUrl.protocol}`);
  
  // 检查是否需要重定向
  if (hostname === 'www.emoji-gen.com') {
    // 只将 www 子域名重定向到主域名
    const newUrl = new URL(url.pathname + url.search, 'https://emoji-gen.com');
    console.log(`重定向 www 到非 www: ${request.url} -> ${newUrl.toString()}`);
    
    // 设置较长的缓存控制头，防止浏览器缓存重定向
    return NextResponse.redirect(newUrl, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } else if (hostname === 'emoji-gen.com' && !request.nextUrl.protocol.includes('https')) {
    // 将 HTTP 重定向到 HTTPS
    const newUrl = new URL(url.pathname + url.search, 'https://emoji-gen.com');
    console.log(`重定向 HTTP 到 HTTPS: ${request.url} -> ${newUrl.toString()}`);
    
    // 设置较长的缓存控制头，防止浏览器缓存重定向
    return NextResponse.redirect(newUrl, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  }
  
  // 重要：检查是否有循环重定向的迹象
  const referer = request.headers.get('referer') || '';
  if (referer.includes('emoji-gen.com') && hostname.includes('emoji-gen.com')) {
    console.log(`检测到可能的重定向循环: ${referer} -> ${request.url}`);
    // 如果检测到可能的循环，不执行重定向
    return null;
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