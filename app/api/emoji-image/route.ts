import { NextRequest, NextResponse } from "next/server";

// Mapping of common words/emotions to emoji Unicode characters
const emojiMap: Record<string, string> = {
  "happy": "😊",
  "sad": "😢",
  "angry": "😠",
  "love": "❤️",
  "laugh": "😂",
  "smile": "😃",
  "cry": "😭",
  "cool": "😎",
  "surprised": "😲",
  "confused": "😕",
  "sick": "🤒",
  "tired": "😴",
  "thinking": "🤔",
  "worried": "😟",
  "scared": "😱",
  "heart": "❤️",
  "star": "⭐",
  "fire": "🔥",
  "thumbsup": "👍",
  "thumbsdown": "👎",
  "ok": "👌",
  "yes": "✅",
  "no": "❌",
  "sun": "☀️",
  "moon": "🌙",
  "rain": "🌧️",
  "snow": "❄️",
  "party": "🎉",
  "gift": "🎁",
  "music": "🎵",
  "food": "🍔",
  "fruit": "🍎",
  "cat": "🐱",
  "dog": "🐶",
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get('text');
    
    if (!text) {
      return new NextResponse('Text parameter is required', { status: 400 });
    }
    
    // Find an appropriate emoji based on the text
    const lowerText = text.toLowerCase();
    let emoji = "😊"; // Default emoji
    
    // Check if any of the words in our mapping are in the input text
    for (const [key, value] of Object.entries(emojiMap)) {
      if (lowerText.includes(key)) {
        emoji = value;
        break;
      }
    }
    
    // If no match found, use the first character's code to select a random emoji
    if (emoji === "😊" && text.length > 0) {
      const emojiValues = Object.values(emojiMap);
      const charCode = text.charCodeAt(0) % emojiValues.length;
      emoji = emojiValues[charCode];
    }
    
    // Create an SVG with the emoji and text
    const svg = `
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white"/>
      <text x="50%" y="50%" font-family="Arial" font-size="200" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
      <text x="50%" y="85%" font-family="Arial" font-size="40" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
    `;
    
    // Return the SVG as an image
    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error("Error generating emoji image:", error);
    return new NextResponse('Error generating emoji image', { status: 500 });
  }
} 