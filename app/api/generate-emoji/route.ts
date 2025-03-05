// API endpoint for generating emoji images
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { text } = await request.json();
    
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: "Text input is required" },
        { status: 400 }
      );
    }
    
    // 使用第三方免费emoji API
    // 这里我们使用Emoji API（https://emoji-api.com/）或类似服务
    
    // 从文字中提取关键词或情感
    const keywords = text.toLowerCase().split(/\s+/);
    const commonEmotions = [
      "happy", "sad", "angry", "love", "cool", "party", "fire", "heart", 
      "star", "laugh", "smile", "cry", "scared", "confused", "thumbsup"
    ];
    
    // 尝试匹配关键词
    let searchTerm = "smile"; // 默认搜索词
    for (const word of keywords) {
      if (commonEmotions.includes(word)) {
        searchTerm = word;
        break;
      }
    }
    
    // 使用GitHub的emoji API (完全免费且可靠)
    const imageUrl = `https://api.github.com/emojis`;
    
    // 获取GitHub的emoji列表
    const githubResponse = await fetch(imageUrl);
    if (!githubResponse.ok) {
      throw new Error('Failed to fetch emoji list from GitHub');
    }
    
    const emojiList = await githubResponse.json();
    
    // 选择适合的emoji
    let selectedEmojiUrl = '';
    
    // 尝试直接匹配关键词
    if (emojiList[searchTerm]) {
      selectedEmojiUrl = emojiList[searchTerm];
    } else {
      // 否则根据第一个字符选择随机emoji
      const emojiKeys = Object.keys(emojiList);
      const randomIndex = text.charCodeAt(0) % emojiKeys.length;
      selectedEmojiUrl = emojiList[emojiKeys[randomIndex]];
    }
    
    // 返回emoji图片URL
    return NextResponse.json({
      success: true,
      imageUrl: selectedEmojiUrl,
      text
    });
  } catch (error) {
    console.error("Error generating emoji:", error);
    return NextResponse.json(
      { error: "Failed to generate emoji" },
      { status: 500 }
    );
  }
} 