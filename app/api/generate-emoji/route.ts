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

// 不同样式的提示词模板（英文）
const promptTemplates = {
  emoji: "An emoji-style icon of {text}. Bright colors, simple shapes, cute style",
  sticker: "A sticker-style image of {text}. Vibrant, cute, cartoonish, with transparent background",
  icon: "A minimalist icon of {text}. Clean lines, flat design, suitable for UI"
};

/**
 * 使用智谱AI的Cogview API生成图像
 */
async function generateImage(text: string, style: string = "emoji") {
  try {
    // 选择提示词模板
    const templateKey = style as StyleType;
    const template = promptTemplates[templateKey] || promptTemplates.emoji;
    const prompt = template.replace('{text}', text);

    console.log("Generating image with prompt:", prompt);

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
    const { text, style = "emoji" } = await request.json();
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: errorMessages.textRequired },
        { status: 400 }
      );
    }
    
    // 使用智谱AI Cogview API生成图像
    const imageResult = await generateImage(text, style);
    
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