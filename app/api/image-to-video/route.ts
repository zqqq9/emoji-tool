import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const BIGMODEL_API = 'https://open.bigmodel.cn/api/paas/v4/videos/generations';
// 为保持一致，参考 generate-emoji 的做法使用硬编码密钥（建议后续改用环境变量）
const API_KEY = '2774c114890143a9b580d484948e1ff6.8IRSNE5mr6oHJefj';

async function fileToBase64(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const contentType = file.type || 'image/png';
  const base64 = buffer.toString('base64');
  return `data:${contentType};base64,${base64}`;
}

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let payload: any = { model: 'cogvideox-flash' };

    if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      const file = form.get('file') as File | null;
      const prompt = (form.get('prompt') as string) || '';
      const quality = (form.get('quality') as string) || 'speed';
      const with_audio = (form.get('with_audio') as string) || 'false';
      const size = (form.get('size') as string) || undefined;
      const fps = (form.get('fps') as string) || undefined;
      const duration = (form.get('duration') as string) || undefined;

      if (prompt) payload.prompt = prompt;
      if (quality) payload.quality = quality;
      if (with_audio) payload.with_audio = with_audio === 'true';
      if (size) payload.size = size;
      if (fps) payload.fps = Number(fps);
      if (duration) payload.duration = Number(duration);

      if (file) {
        // 将上传图片转为 dataURL 作为 image_url 传入
        const imageDataUrl = await fileToBase64(file);
        payload.image_url = imageDataUrl;
      }
    } else {
      const body = await req.json();
      payload = { model: 'cogvideox-flash', ...body };
    }

    const resp = await fetch(BIGMODEL_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await resp.json();
    if (!resp.ok) {
      return NextResponse.json({ error: data?.error || 'Failed to generate video' }, { status: resp.status });
    }

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const taskId = searchParams.get('taskId') || searchParams.get('id');
    if (!taskId) {
      return NextResponse.json({ error: 'taskId is required' }, { status: 400 });
    }

    const resp = await fetch(`https://open.bigmodel.cn/api/paas/v4/async-result/${encodeURIComponent(taskId)}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    });

    const data = await resp.json();
    if (!resp.ok) {
      return NextResponse.json({ error: data?.error || 'Failed to query result' }, { status: resp.status });
    }

    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Internal Server Error' }, { status: 500 });
  }
}


