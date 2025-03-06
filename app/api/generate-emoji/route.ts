// API endpoint for generating AI images
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// OpenRouter API配置
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const OPENROUTER_IMAGE_API_URL = "https://openrouter.ai/api/v1/images/generations";
const SITE_URL = process.env.SITE_URL || "https://emoji-tool.vercel.app";

// 错误消息的多语言支持
const errorMessages = {
  en: {
    textRequired: "Text input is required",
    failedGenerate: "Failed to generate image",
    modelError: "Error with AI model response"
  },
  zh: {
    textRequired: "需要输入文字",
    failedGenerate: "生成图像失败",
    modelError: "AI模型响应出错"
  }
};

// 样式类型
type StyleType = "emoji" | "sticker" | "icon";
type LanguageType = "en" | "zh";

// 为不同的场景定义prompt模板
const promptTemplates = {
  en: {
    emoji: "Create a cute cartoon emoji style image of {description}. Make it simple, colorful, and expressive.",
    sticker: "Create a cute sticker design of {description}. Make it vibrant, with simple background.",
    icon: "Create a minimalist icon representing {description}. Use simple shapes and colors."
  },
  zh: {
    emoji: "创建一个可爱的卡通emoji风格图像，表现{description}。让它简单、多彩且富有表现力。",
    sticker: "创建一个可爱的{description}贴纸设计。让它色彩鲜艳，背景简单。",
    icon: "创建一个代表{description}的极简主义图标。使用简单的形状和颜色。"
  }
};

// 生成图像
async function generateImage(text: string, language: LanguageType = "en", style: string = "emoji") {
  try {
    // 确保style是有效的
    const validStyle = (style === "emoji" || style === "sticker" || style === "icon") ? style : "emoji";
    
    // 获取对应样式的prompt模板
    const promptTemplate = promptTemplates[language][validStyle as StyleType];
    
    // 替换描述
    const prompt = promptTemplate.replace("{description}", text);
    
    // 调用图像生成API
    const response = await axios.post(
      OPENROUTER_IMAGE_API_URL,
      {
        model: "stability/sdxl-turbo", // 使用稳定的图像生成模型
        prompt: prompt,
        n: 1, // 生成一张图片
        size: "512x512",
        response_format: "url"
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": SITE_URL,
          "X-Title": "Emoji Tool"
        }
      }
    );

    // 检查响应格式
    if (response.data && response.data.data && response.data.data.length > 0) {
      // 返回生成的图像URL
      return {
        imageUrl: response.data.data[0].url,
        prompt: prompt
      };
    } else {
      console.error("Unexpected API response structure:", response.data);
      throw new Error("Unexpected API response structure");
    }
  } catch (error) {
    console.error("Error calling OpenRouter Image API:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("API Error Response:", error.response.data);
    }
    throw error;
  }
}

export async function POST(request: NextRequest) {
  // 尝试从请求头中获取语言
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  const lang = acceptLanguage.includes('zh') ? 'zh' : 'en';
  const errors = errorMessages[lang as LanguageType];

  try {
    // Parse the request body
    const { text, style = "emoji" } = await request.json();
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: errors.textRequired },
        { status: 400 }
      );
    }
    
    // 使用OpenRouter API生成图像
    const imageResult = await generateImage(text, lang as LanguageType, style);
    
    // 返回图像URL和提示词
    return NextResponse.json({
      success: true,
      imageUrl: imageResult.imageUrl,
      prompt: imageResult.prompt,
      text
    });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json(
      { error: errors.failedGenerate },
      { status: 500 }
    );
  }
} 