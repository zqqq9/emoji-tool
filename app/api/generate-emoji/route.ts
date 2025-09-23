// API endpoint for generating AI images
import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';

// 错误消息
const errorMessages = {
  textRequired: "Text input is required",
  failedToGenerate: "Failed to generate image. Please try again later.",
  modelError: "An error occurred with the AI model. Please try again."
};

// 图像样式类型
type StyleType = "emoji" | "sticker" | "icon";

// 背景色类型
type BackgroundColorType = 'transparent' | 'white' | 'black' | 'colorful' | 'gradient';

// 艺术风格类型
type ArtStyleType = 'cartoon' | 'pixel' | 'watercolor' | 'sketch' | 'threeD' | 'realistic' | 'monster';

// 不同样式的提示词模板（英文）
const promptTemplates = {
  emoji: "An emoji-style icon of {text}. Bright colors, simple shapes, cute style",
  sticker: "A sticker-style image of {text}. Vibrant, cute, cartoonish, with transparent background",
  icon: "A minimalist icon of {text}. Clean lines, flat design, suitable for UI"
};

// 不同背景色的提示词片段
const backgroundDescriptions = {
  transparent: "with transparent background",
  white: "with white background",
  black: "with black background",
  colorful: "with colorful background",
  gradient: "with gradient background"
};

// 不同艺术风格的提示词片段
const artStyleDescriptions = {
  cartoon: "in cartoon style",
  pixel: "in pixel art style",
  watercolor: "in watercolor painting style",
  sketch: "in hand-drawn sketch style",
  threeD: "in 3D rendering style",
  realistic: "in realistic style",
  monster: "in a Labubu-inspired cute monster style: big expressive eyes, fluffy ears, mischievous, hand-drawn look, soft pastel colors"
};

/**
 * 使用智谱AI的Cogview API生成图像
 */
async function generateImage(
  text: string, 
  style: string = "emoji", 
  backgroundColor: BackgroundColorType = "transparent",
  artStyle: ArtStyleType = "cartoon"
) {
  try {
    // 选择提示词模板
    const templateKey = style as StyleType;
    const template = promptTemplates[templateKey] || promptTemplates.emoji;
    
    // 构建完整的提示词，包括背景色和艺术风格
    const backgroundDesc = backgroundDescriptions[backgroundColor] || "";
    const artStyleDesc = artStyleDescriptions[artStyle] || "";
    
    // 组合提示词（默认）
    let prompt = template.replace('{text}', text);
    
    // 添加艺术风格描述（通用）
    if (artStyleDesc) {
      prompt += ` ${artStyleDesc}`;
    }
    
    // 添加背景色描述
    if (backgroundColor !== 'transparent' || style !== 'sticker') { // sticker样式默认就是透明背景
      prompt += ` ${backgroundDesc}`;
    }

    // Labubu 风格强化：当 artStyle=labubu 时，将 Labubu 设为主词，用户文本作为修饰/元素
    if (artStyle === 'monster') {
      const safeDescriptor = (text || '').trim();
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
      const refImg = siteUrl ? `${siteUrl.replace(/\/$/, '')}/images/labubu.png` : '';
      const labubuTemplate =
        [
          // 主体与风格
          'An emoji-style icon of a 拉布布风格可爱怪物 as the MAIN SUBJECT, centered and iconic',
          'STYLE ANCHOR: Labubu style, Labubu look, Labubu character cues',
          'Playful, mischievous, soft pastel palette, clean silhouette, bold readable outlines',
          // 面部结构细节
          'HEAD: rounded-teardrop head with a slightly high forehead; face occupies ~70% of head area',
          'EYES: very large oval eyes, slightly wide-set, glossy multi-point specular highlights, dark pupils, subtle gradient iris, thick black outline',
          'NOSE: tiny dot or small inverted triangular nose placed low on the face',
          'MOUTH: small simple line or slight horizontal oval, subtle smile; tiny triangular teeth along the lip line; no detailed lips',
          'CHEEKS: faint blush on both cheeks to enhance cuteness',
          'EARS: long upright fluffy bunny-like ears with softly rounded tips; inner ear pale pink',
          'HAIRLINE: serrated furry edge around the face mask area (iconic Labubu outline)',
          'EYEBROWS: minimal or none; keep expression focused on eye shape and mouth curve',
          // 质感与线条
          'LINEWORK: clean bold contour lines; micro-fur texture only as subtle shading; avoid heavy realism',
          'PROPORTIONS: head-to-body about 2:1 if body appears; keep body extremely simplified',
          // 环境与安全约束
          'BACKGROUND: plain or transparent; avoid complex scenes',
          'NEGATIVE: avoid realistic humans, complex backgrounds, text, brand logos, and clutter',
          (safeDescriptor ? `ADJECTIVES / ACCESSORIES (secondary only): ${safeDescriptor}` : ''),
          (refImg ? `STYLE REFERENCE IMAGE: ${refImg}` : '')
        ].filter(Boolean).join('. ') + '.';

      prompt = labubuTemplate;
      // 叠加艺术风格与背景说明
      if (artStyleDesc) prompt += ` ${artStyleDesc}`;
      if (backgroundColor !== 'transparent' || style !== 'sticker') prompt += ` ${backgroundDesc}`;
    }

    console.log("Generating image with enhanced prompt:", prompt);

    // 智谱AI Cogview API 配置
    const apiKey = "3a959996b699416d9d2b3699bc7c22e5.nGahnDA9PZc3JMrq";
    const apiUrl = "https://open.bigmodel.cn/api/paas/v4/images/generations";
    
    // 生成请求ID
    const requestId = crypto.randomUUID();
    
    // 构建API请求
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'cogview-3-flash', // 使用Cogview模型
        prompt: prompt,    // 提示词
        request_id: requestId,
        n: 1,              // 生成1张图片
        width: 512,        // 图片宽度
        height: 512        // 图片高度
      })
    });

    if (!response.ok) {
      console.error("Cogview API error:", response.status, await response.text());
      throw new Error(`API responded with status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Cogview API Response:", result);

    // 解析响应 - 提取图像URL
    if (result && result.data && Array.isArray(result.data) && result.data.length > 0 && result.data[0].url) {
      const originalImageUrl = result.data[0].url;
      
      // 创建代理URL，通过我们的API代理访问图像
      const proxyImageUrl = `/api/proxy-image?url=${encodeURIComponent(originalImageUrl)}`;
      
      return {
        imageUrl: proxyImageUrl,
        prompt: prompt
      };
    } else {
      console.error("Unexpected Cogview API response format:", result);
      throw new Error("Unexpected API response format");
    }
  } catch (error) {
    console.error("Error calling Cogview API:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { 
      text, 
      style = "emoji",
      backgroundColor = "transparent",
      artStyle = "cartoon"
    } = await request.json();
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: errorMessages.textRequired },
        { status: 400 }
      );
    }
    
    // 使用智谱AI Cogview API生成图像
    const imageResult = await generateImage(text, style, backgroundColor, artStyle);
    
    // 返回图像URL和提示词
    return NextResponse.json({
      success: true,
      imageUrl: imageResult.imageUrl,
      prompt: imageResult.prompt,
    }, {
      headers: {
        // 添加CORS头，允许前端请求资源
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (error) {
    console.error("Error generating image:", error);
    
    // 处理错误信息
    let errorMessage = errorMessages.failedToGenerate;
    if (error instanceof Error) {
      errorMessage = error.message || errorMessages.modelError;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 