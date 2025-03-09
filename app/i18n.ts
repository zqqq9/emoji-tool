// 国际化配置 - 仅支持英语
import { createTranslator } from 'next-intl';

// 英文翻译
const enMessages = {
  EmojiGenerator: {
    title: 'Emoji Generator',
    description: 'Create custom emojis with AI. Type your idea and generate unique images.',
    categoryEmoji: 'Emoji',
    categorySticker: 'Sticker',
    categoryIcon: 'Icon',
    inputPlaceholder: 'Describe your emoji idea...',
    generateButton: 'Generate',
    generating: 'Generating...',
    loadingMessage: 'Creating your emoji...',
    copyButton: 'Copy',
    downloadButton: 'Download',
    tryExample: 'Try an Example',
    errorGenerating: 'Error generating the image. Please try again.',
    copiedToClipboard: 'Copied to clipboard!',
    errorCopying: 'Error copying the image. Please try the download button instead.',
    failedToCopy: 'Failed to copy image. Please try the download button instead.',
    exampleEmoji1: 'happy cat',
    exampleEmoji2: 'surprised panda',
    exampleEmoji3: 'laughing pizza',
    exampleSticker1: 'cute dog with sunglasses',
    exampleSticker2: 'rainbow unicorn',
    exampleSticker3: 'excited robot',
    exampleIcon1: 'email icon',
    exampleIcon2: 'settings gear',
    exampleIcon3: 'chat bubble',
    backgroundColorTitle: 'Background Color',
    transparentBackground: 'Transparent',
    whiteBackground: 'White',
    blackBackground: 'Black',
    colorfulBackground: 'Colorful',
    gradientBackground: 'Gradient',
    artStyleTitle: 'Art Style',
    cartoonStyle: 'Cartoon',
    pixelStyle: 'Pixel Art',
    watercolorStyle: 'Watercolor',
    sketchStyle: 'Sketch',
    threeDStyle: '3D',
    realisticStyle: 'Realistic',
    customizeTitle: 'Customize Your Emoji',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'Create unique emojis with the power of artificial intelligence',
    getStarted: 'Get Started',
    features: {
      title: 'AI Magic for Emoji Creation',
      instant: {
        title: 'Instant Creation',
        description: 'Using advanced AI technology, turn your text descriptions into vibrant emoji images in seconds. No design experience needed.',
      },
      quality: {
        title: 'High Quality',
        description: 'Generated emojis are high-definition with transparent backgrounds, perfect for chat apps and social platforms. Copy or download with one click.',
      },
      limitless: {
        title: 'Limitless Creativity',
        description: 'Your imagination is the only limit. From cute animals to abstract concepts, the AI can bring any idea to life as an emoji.',
      },
    },
    howToUse: {
      title: 'How to Use',
      step1: {
        title: 'Enter Description',
        description: 'Describe the emoji you want in the input field. Try "happy cat", "surprised panda" or any creative idea. More detail yields better results.',
      },
      step2: {
        title: 'Generate Image',
        description: 'Click the "Generate" button and let the AI process your description. The creation takes just a few seconds, please be patient.',
      },
      step3: {
        title: 'Save and Share',
        description: 'Once generated, you can copy the emoji for immediate use in chat applications or download it to keep permanently.',
      },
    },
    examples: {
      title: 'Try These Examples'
    }
  }
};

// 获取翻译消息 - 简化版本，只支持英语
export async function getMessages() {
  return enMessages;
}

// 创建翻译器 - 仅支持英语
export function getTranslator(namespace?: string) {
  return createTranslator({ locale: 'en', messages: enMessages, namespace });
} 