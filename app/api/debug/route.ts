import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // 获取所有请求头
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  
  // 获取 cookies
  const cookies: Record<string, string> = {};
  request.cookies.getAll().forEach(cookie => {
    cookies[cookie.name] = cookie.value;
  });
  
  // 获取 URL 参数
  const searchParams: Record<string, string> = {};
  request.nextUrl.searchParams.forEach((value, key) => {
    searchParams[key] = value;
  });
  
  // 返回详细的请求信息
  return NextResponse.json({
    message: '调试信息',
    timestamp: new Date().toISOString(),
    requestInfo: {
      url: request.url,
      method: request.method,
      hostname: request.headers.get('host') || '',
      protocol: request.nextUrl.protocol,
      pathname: request.nextUrl.pathname,
      search: request.nextUrl.search,
      ip: request.ip || '',
      geo: request.geo || {},
    },
    headers: headers,
    cookies: cookies,
    searchParams: searchParams,
    nextUrl: {
      href: request.nextUrl.href,
      origin: request.nextUrl.origin,
      protocol: request.nextUrl.protocol,
      host: request.nextUrl.host,
      hostname: request.nextUrl.hostname,
      port: request.nextUrl.port,
      pathname: request.nextUrl.pathname,
      search: request.nextUrl.search,
      hash: request.nextUrl.hash,
    }
  }, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
} 