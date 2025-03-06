import { NextRequest, NextResponse } from 'next/server';

/**
 * 代理图像内容，解决跨域问题
 */
export async function GET(request: NextRequest) {
  // 从URL参数中获取图像URL
  const url = request.nextUrl.searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: 'Image URL is required' }, { status: 400 });
  }
  
  try {
    // 获取图像内容
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }
    
    // 获取图像的二进制数据
    const imageData = await response.arrayBuffer();
    
    // 获取内容类型
    const contentType = response.headers.get('content-type') || 'image/png';
    
    // 返回图像数据，设置适当的内容类型
    return new NextResponse(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return NextResponse.json({ error: 'Failed to proxy image' }, { status: 500 });
  }
} 