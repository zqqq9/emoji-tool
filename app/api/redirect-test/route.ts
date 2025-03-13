import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const referer = request.headers.get('referer') || '';
  const userAgent = request.headers.get('user-agent') || '';
  
  // 返回请求信息，用于调试
  return NextResponse.json({
    message: '重定向测试 API',
    timestamp: new Date().toISOString(),
    requestInfo: {
      url: request.url,
      method: request.method,
      hostname: hostname,
      protocol: request.nextUrl.protocol,
      pathname: request.nextUrl.pathname,
      search: request.nextUrl.search,
    },
    headers: {
      referer: referer,
      userAgent: userAgent,
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