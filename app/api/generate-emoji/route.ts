// API endpoint for generating emoji images
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// OpenRouter API配置
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || "";
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";
const SITE_URL = process.env.SITE_URL || "https://emoji-tool.vercel.app";

// 错误消息的多语言支持
const errorMessages = {
  en: {
    textRequired: "Text input is required",
    failedGenerate: "Failed to generate emoji",
    modelError: "Error with AI model response"
  },
  zh: {
    textRequired: "需要输入文字",
    failedGenerate: "生成emoji失败",
    modelError: "AI模型响应出错"
  }
};

// 获取基于主题的emoji描述
async function getEmojiDescription(text: string, language: string = "en") {
  try {
    const response = await axios.post(
      OPENROUTER_API_URL,
      {
        model: "openai/gpt-3.5-turbo", // 使用更经济的模型以降低成本
        messages: [
          {
            role: "system", 
            content: language === "zh" 
              ? "你是一个emoji专家。根据用户的输入，生成一个emoji表情符号（只需返回一个emoji）。不要包含任何其他文本。"
              : "You are an emoji expert. Based on the user's input, generate a single emoji character (just the emoji). Do not include any other text."
          },
          {
            role: "user",
            content: text
          }
        ],
        max_tokens: 10,
        temperature: 0.7
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

    // 提取AI返回的emoji
    const emoji = response.data.choices[0]?.message?.content?.trim() || "😊";
    
    // 生成base64编码的SVG图像
    const svgContent = `
      <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="white"/>
        <text x="50%" y="50%" font-family="Arial" font-size="200" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
        <text x="50%" y="85%" font-family="Arial" font-size="40" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `;
    
    // 转换为base64
    const base64Svg = Buffer.from(svgContent).toString('base64');
    const dataUrl = `data:image/svg+xml;base64,${base64Svg}`;
    
    return {
      emoji,
      imageUrl: dataUrl
    };
  } catch (error) {
    console.error("Error calling OpenRouter API:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  // 尝试从请求头中获取语言
  const acceptLanguage = request.headers.get('Accept-Language') || '';
  const lang = acceptLanguage.includes('zh') ? 'zh' : 'en';
  const errors = errorMessages[lang];

  try {
    // Parse the request body
    const { text } = await request.json();
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: errors.textRequired },
        { status: 400 }
      );
    }
    
    // 使用OpenRouter API生成emoji
    const emojiResult = await getEmojiDescription(text, lang);
    
    // 返回emoji和图片URL
    return NextResponse.json({
      success: true,
      imageUrl: emojiResult.imageUrl,
      emoji: emojiResult.emoji,
      text
    });
  } catch (error) {
    console.error("Error generating emoji:", error);
    return NextResponse.json(
      { error: errors.failedGenerate },
      { status: 500 }
    );
  }
} 