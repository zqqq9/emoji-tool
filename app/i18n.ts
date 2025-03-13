// 国际化配置 - 支持多语言
import { createTranslator } from 'next-intl';

// 定义支持的语言列表
export const defaultLocale = 'en';
export const locales = ['en', 'zh', 'es', 'fr', 'ar', 'ru', 'pt', 'ja', 'de', 'hi'];

// 英文翻译
const enMessages = {
  Navbar: {
    home: 'Home',
    blog: 'Blog',
    about: 'About',
    emojitools: 'Emoji Tools'
  },
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
    },
    faq: {
      title: 'Frequently Asked Questions',
      question1: 'What is an AI Emoji Generator?',
      answer1: 'An AI Emoji Generator is an advanced tool that uses artificial intelligence to create custom emojis based on text descriptions. Our AI Emoji Generator transforms your ideas into unique, high-quality emoji images that can be used across various digital platforms.',
      
      question2: 'How does the AI Emoji Generator work?',
      answer2: 'Our AI Emoji Generator uses sophisticated machine learning algorithms trained on millions of images. When you enter a text description, the AI analyzes your input and generates a custom emoji that matches your description. The technology combines natural language processing with image generation capabilities to create unique visual representations of your ideas.',
      
      question3: 'Are the generated emojis free to use?',
      answer3: 'Yes! All emojis created with our AI Emoji Generator are free for personal use. You can use them in messages, social media posts, and personal projects without any restrictions. For commercial use in marketing materials, branded content, or products for sale, please refer to our terms of service.',
      
      question4: 'Can I customize the style of my emojis?',
      answer4: 'Absolutely! Our AI Emoji Generator offers various customization options. You can specify art styles (cartoon, pixel art, watercolor, etc.), background colors, and other attributes in your description. For best results, be specific about the style you want in your prompt.',
      
      question5: 'What file formats are available for download?',
      answer5: 'Generated emojis can be downloaded as PNG files with transparent backgrounds, making them perfect for use across different platforms and applications. The transparent background ensures your emojis blend seamlessly with any chat interface or document.',
      
      question6: 'Is there a limit to how many emojis I can generate?',
      answer6: 'We currently offer a generous number of free generations per day. This limit helps us maintain service quality and availability for all users. If you need to create more emojis, you can return the next day when your generation count resets.'
    },
    explanatoryText: {
      title: 'Unleash Your Creativity with AI-Powered Emoji Generation',
      paragraph1: 'The AI Emoji Generator represents a revolutionary approach to digital expression, combining cutting-edge artificial intelligence with user-friendly design. Our advanced AI technology analyzes your text descriptions and transforms them into vibrant, expressive emoji images that perfectly capture your ideas and emotions.',
      
      paragraph2: 'Unlike traditional emoji libraries that offer limited options, our AI Emoji Generator provides unlimited creative possibilities. Whether you need a happy cat wearing sunglasses, a dancing pizza with rainbow toppings, or any other imaginative concept, our AI can bring it to life as a high-quality emoji with transparent background.',
      
      paragraph3: 'The technology behind our AI Emoji Generator utilizes sophisticated deep learning models trained on diverse visual datasets. These models understand the relationships between words and images, allowing them to interpret your descriptions and generate corresponding visual elements. The AI continuously improves through machine learning, becoming more accurate and creative with each generation.',
      
      paragraph4: 'Custom emojis created with our AI Generator enhance digital communication by adding personality and context to your messages. They help convey emotions more effectively than text alone and can make your conversations more engaging and memorable. From personal chats to professional communications, custom emojis add a unique touch that stands out.',
      
      paragraph5: 'Our AI Emoji Generator is designed to be accessible to everyone, regardless of design experience or technical knowledge. The intuitive interface makes it easy to describe your emoji idea, generate the image, and download or copy it for immediate use. This democratization of creative tools empowers users to express themselves in new and exciting ways online.',
      
      paragraph6: 'Beyond personal use, the AI Emoji Generator offers valuable applications for content creators, marketers, educators, and businesses. Custom emojis can strengthen brand identity, enhance educational materials, or add visual interest to digital content. The possibilities are as limitless as your imagination.',
      
      paragraph7: 'As artificial intelligence technology continues to evolve, so too will the capabilities of our AI Emoji Generator. We are committed to incorporating the latest advancements in AI research to provide you with even more powerful and versatile emoji creation tools. Join us on this exciting journey at the intersection of artificial intelligence and creative expression.'
    }
  },
  About: {
    title: 'About',
    mission: {
      title: 'Our Mission',
      paragraph1: 'AI Emoji Generator is a free tool designed to help everyone create unique, personalized emojis using the power of artificial intelligence. We believe creative expression should be accessible to all, regardless of artistic ability or technical knowledge.',
      paragraph2: 'Our mission is to democratize digital creativity by providing cutting-edge AI tools that are simple, intuitive, and free to use. We want to help people communicate more expressively online.'
    },
    howItWorks: {
      title: 'How It Works',
      paragraph1: 'Our emoji generator uses advanced AI models to transform text descriptions into vibrant, unique images. Behind the scenes, we leverage state-of-the-art image generation technology that has been specifically trained to create emoji-style graphics.',
      paragraph2: 'The AI understands natural language descriptions and visualizes them in various artistic styles, giving you complete creative freedom without needing design skills.'
    },
    noAccount: {
      title: 'No Account Needed',
      paragraph1: 'We believe in making technology accessible with minimal friction. That\'s why AI Emoji Generator requires no sign-up, no account creation, and no personal information. Just visit the site, type your idea, and generate unique emojis instantly.',
      paragraph2: 'Your creations are yours to keep and use however you like. Download them, copy them, and share them across all your favorite platforms and apps.'
    }
  },
  Blog: {
    title: 'Blog',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'More blog posts coming soon!',
    readMore: 'Read more',
    recentPosts: 'Recent Posts',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 billion are sent daily, transcending cultural and linguistic barriers. Yet traditional emoji libraries are limited. Enter AI emoji generators, a game-changing innovation reshaping how we communicate visually.',
    mainArticle: {
      title: 'The Evolution and Impact of AI Emoji Generator in Modern Communication',
      date: 'May 10, 2023',
      author: 'Emoji Team'
    },
    backToBlog: 'Back to Blog',
    post0Title: 'Getting Started with AI Emoji Generator',
    post0Excerpt: 'Learn how to create your first AI-generated emoji in less than a minute...',
    post0Date: 'Oct 15, 2023',
    
    post1Title: 'Top 10 Creative Emoji Ideas to Try',
    post1Excerpt: 'Looking for inspiration? Here are ten creative emoji concepts that our users love...',
    post1Date: 'Nov 5, 2023',
    
    post2Title: 'How AI is Revolutionizing Digital Expression',
    post2Excerpt: 'Artificial intelligence is changing the way we express ourselves online...',
    post2Date: 'Dec 12, 2023'
  },
  EmojiTools: {
    title: 'Emoji',
    subtitle: 'Tools',
    description: 'Discover our collection of AI-powered emoji tools to create, customize, and have fun with emojis.',
    tryButton: 'Try Now'
  },
  TextToEmoji: {
    title: 'Text to Emoji',
    subtitle: 'Type any text and see it translated into emojis. No text in responses, just pure emoji expression.',
    inputPlaceholder: 'Type your text here...',
    sendButton: 'Translate'
  },
  EmojiChat: {
    title: 'Emoji Chat',
    subtitle: 'Ask any question and get answers using only emojis. AI responds with emoji-only expressions.',
    inputPlaceholder: 'Type your question here...',
    sendButton: 'Send'
  }
};

// 中文翻译
const zhMessages = {
  Navbar: {
    home: '首页',
    blog: '博客',
    about: '关于',
    emojitools: '表情工具'
  },
  EmojiGenerator: {
    title: '表情生成器',
    description: '使用AI创建自定义表情。输入你的想法，生成独特图像。',
    categoryEmoji: '表情',
    categorySticker: '贴纸',
    categoryIcon: '图标',
    inputPlaceholder: '描述你的表情想法...',
    generateButton: '生成',
    generating: '生成中...',
    loadingMessage: '正在创建你的表情...',
    copyButton: '复制',
    downloadButton: '下载',
    tryExample: '试试这些例子',
    errorGenerating: '生成图像时出错。请重试。',
    copiedToClipboard: '已复制到剪贴板！',
    errorCopying: '复制图像时出错。请尝试使用下载按钮。',
    failedToCopy: '复制图像失败。请尝试使用下载按钮。',
    exampleEmoji1: '开心的猫',
    exampleEmoji2: '惊讶的熊猫',
    exampleEmoji3: '笑着的披萨',
    exampleSticker1: '戴墨镜的可爱狗',
    exampleSticker2: '彩虹独角兽',
    exampleSticker3: '兴奋的机器人',
    exampleIcon1: '邮件图标',
    exampleIcon2: '设置齿轮',
    exampleIcon3: '聊天气泡',
    backgroundColorTitle: '背景颜色',
    transparentBackground: '透明',
    whiteBackground: '白色',
    blackBackground: '黑色',
    colorfulBackground: '彩色',
    gradientBackground: '渐变',
    artStyleTitle: '艺术风格',
    cartoonStyle: '卡通',
    pixelStyle: '像素艺术',
    watercolorStyle: '水彩',
    sketchStyle: '素描',
    threeDStyle: '3D',
    realisticStyle: '写实',
    customizeTitle: '自定义你的表情',
  },
  Home: {
    title: 'AI表情生成器',
    subtitle: '利用人工智能创造独特的表情符号',
    getStarted: '开始使用',
    features: {
      title: 'AI魔法赋能表情创作',
      instant: {
        title: '即时创建',
        description: '借助先进的AI技术，几秒钟内将文字描述转化为生动的表情图像。无需设计经验，人人都能成为创作者。',
      },
      quality: {
        title: '高品质输出',
        description: '生成的表情拥有高清品质和透明背景，可以无缝融入各种聊天应用和社交平台。一键复制或下载，即可分享。',
      },
      limitless: {
        title: '无限创意',
        description: '你的想象力是唯一的限制。从可爱的动物到奇特的概念，从情感表达到抽象艺术，AI都能将你的创意变为现实。',
      },
    },
    howToUse: {
      title: '使用方法',
      step1: {
        title: '输入描述',
        description: '在输入框中描述你想要的表情。可以尝试"开心的猫"、"惊讶的熊猫"或任何创意想法。描述越详细，结果越准确。',
      },
      step2: {
        title: '生成图像',
        description: '点击"生成"按钮，AI将处理你的描述并创建相应的表情图像。整个过程只需几秒钟，请耐心等待。',
      },
      step3: {
        title: '保存与分享',
        description: '图像生成后，你可以复制或下载。复制功能方便直接粘贴到聊天应用中，下载则可永久保存到你的设备。',
      },
    },
    examples: {
      title: '尝试这些示例'
    },
    faq: {
      title: '常见问题',
      question1: '什么是AI表情生成器？',
      answer1: 'AI表情生成器是一种高级工具，使用人工智能根据文本描述创建自定义表情。我们的AI表情生成器将您的想法转化为独特的、高质量的表情符号图像，可以在各种数字平台上使用。',
      
      question2: 'AI表情生成器如何工作？',
      answer2: '我们的AI表情生成器使用复杂的机器学习算法，经过数百万张图像的训练。当您输入文本描述时，AI会分析您的输入并生成与描述匹配的自定义表情符号。该技术结合了自然语言处理和图像生成功能，以创建独特的视觉表达您的想法。',
      
      question3: '生成的表情符号可以免费使用吗？',
      answer3: '是的！所有使用我们的AI表情生成器创建的表情符号都可以免费用于个人用途。您可以在消息、社交媒体帖子和个人项目中使用它们，而无需任何限制。对于营销材料、品牌内容或销售的产品，请参考我们的服务条款。',
      
      question4: '我可以自定义表情符号的风格吗？',
      answer4: '绝对可以！我们的AI表情生成器提供了各种自定义选项。您可以在描述中指定艺术风格（卡通、像素艺术、水彩画等）、背景颜色和其他属性。为了获得最佳效果，请在提示中明确您想要的风格。',
      
      question5: '有哪些文件格式可供下载？',
      answer5: '生成的表情符号可以下载为PNG文件，带有透明背景，使它们非常适合在不同平台和应用程序中使用。透明背景确保表情符号可以无缝融入任何聊天界面或文档。',
      
      question6: '我可以生成多少个表情符号？',
      answer6: '我们目前每天提供大量的免费生成次数。此限制有助于我们为所有用户维护服务质量和可用性。如果您需要创建更多表情符号，您可以在第二天生成次数重置后返回。'
    },
    explanatoryText: {
      title: '释放您的创造力与AI驱动的表情符号生成',
      paragraph1: 'AI表情生成器代表了数字表达方式的革命性方法，结合了尖端的人工智能与用户友好的设计。我们的高级AI技术分析您的文本描述并将其转化为生动、富有表现力的表情符号图像，完美地捕捉您的想法和情感。',
      
      paragraph2: '与提供有限选项的传统表情符号库不同，我们的AI表情生成器提供了无限的创意可能性。无论您需要一只戴着太阳镜的可爱猫、一个带有彩虹顶的跳舞披萨，还是任何其他富有想象力的概念，我们的AI都可以将其变为具有透明背景的高质量表情符号。',
      
      paragraph3: '我们的AI表情生成器技术利用复杂的深度学习模型，经过多样化的视觉数据集训练。这些模型理解单词和图像之间的关系，使它们能够解释您的描述并生成相应的视觉元素。AI通过机器学习不断改进，每次生成都会变得更加准确和富有创造力。',
      
      paragraph4: '使用我们的AI生成器创建的表情符号增强了数字通信，通过为您的消息添加个性和上下文，帮助您更有效地传达情感。它们比文本本身更能有效地传达情感，可以使您的对话更加生动和难忘。从个人聊天到专业交流，自定义表情符号为对话增添了独特的触感。',
      
      paragraph5: '我们的AI表情生成器设计为可供每个人使用，无论设计经验或技术知识如何。直观的界面使其易于描述您的表情符号想法、生成图像并立即下载或复制以供使用。这种创意工具的民主化使在线表达自己的新奇和令人兴奋的方式成为可能。',
      
      paragraph6: '超越个人使用，AI表情生成器为内容创作者、营销人员、教育工作者和企业提供了宝贵的应用。自定义表情符号可以加强品牌身份、增强教育材料或为数字内容添加视觉兴趣。可能性是无穷无尽的，就像您的想象力一样。',
      
      paragraph7: '随着人工智能技术不断发展，我们的AI表情生成器的能力也将随之发展。我们致力于将AI研究的最新进展融入其中，为您提供更多强大且多才多艺的表情符号创作工具。加入我们，在人工智能和创造性表达的交汇处踏上令人兴奋的旅程。'
    }
  },
  About: {
    title: '关于',
    mission: {
      title: '我们的使命',
      paragraph1: 'AI Emoji Generator 是一款免费工具，旨在帮助所有人利用人工智能的力量创建独特、个性化的表情符号。我们相信，无论艺术能力或技术知识如何，创意表达都应该对所有人开放。',
      paragraph2: '我们的使命是通过提供简单、直观且免费的尖端AI工具，实现数字创意的民主化。我们希望帮助人们在网上更具表现力地交流。'
    },
    howItWorks: {
      title: '工作原理',
      paragraph1: '我们的表情生成器使用先进的AI模型，将文本描述转化为生动、独特的图像。在幕后，我们利用最先进的图像生成技术，这些技术经过专门训练，可以创建表情符号风格的图形。',
      paragraph2: 'AI能够理解自然语言描述，并以各种艺术风格将其可视化，让您在不需要设计技能的情况下拥有完全的创作自由。'
    },
    noAccount: {
      title: '无需账户',
      paragraph1: '我们相信以最小的阻力使技术可访问。这就是为什么AI Emoji Generator不需要注册、不需要创建账户，也不需要个人信息。只需访问网站，输入您的想法，即时生成独特的表情符号。',
      paragraph2: '您的创作属于您自己，可以随意使用。下载它们，复制它们，并在您喜爱的所有平台和应用程序中分享它们。'
    }
  },
  Blog: {
    title: '博客',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: '更多博客文章即将推出！',
    readMore: '阅读更多',
    recentPosts: '最新文章',
    featuredDescription: '在数字时代，表情符号已成为一种全球语言——每天发送超过60亿个，跨越文化和语言障碍。然而，传统的表情符号库是有限的。进入AI表情符号生成器，一种改变沟通方式的创新，重塑我们视觉交流的方式。',
    mainArticle: {
      title: 'AI Emoji Generator在现代通信中的演变和影响',
      date: '2023年5月10日',
      author: 'Emoji团队'
    },
    backToBlog: '返回博客',
    post0Title: 'AI表情生成器入门指南',
    post0Excerpt: '学习如何在不到一分钟的时间内创建您的第一个AI生成的表情符号...',
    post0Date: '2023年10月15日',
    
    post1Title: 'Top 10创意表情想法',
    post1Excerpt: '寻找灵感？这里有十个我们用户喜爱的创意表情概念...',
    post1Date: '2023年10月3日',
    
    post2Title: 'AI如何改变数字表达',
    post2Excerpt: '人工智能正在改变我们在线表达自己的方式...',
    post2Date: '2023年12月12日'
  },
  EmojiTools: {
    title: '表情',
    subtitle: '工具',
    description: '探索我们的AI驱动表情工具集合，创建、自定义和享受表情符号的乐趣。',
    tryButton: '立即尝试'
  },
  TextToEmoji: {
    title: '文字转表情',
    subtitle: '输入任何文字，将其转换为表情符号。没有文字回应，只有纯粹的表情符号表达。',
    inputPlaceholder: '在这里输入你的文字...',
    sendButton: '翻译'
  },
  EmojiChat: {
    title: '表情符号聊天',
    subtitle: '表情符号提问，AI用表情符号回答。没有文字，只有纯粹的表情符号表达。',
    inputPlaceholder: '在这里输入你的问题...',
    sendButton: '发送'
  }
};

// 西班牙语翻译
const esMessages = {
  Navbar: {
    home: 'Inicio',
    blog: 'Blog',
    about: 'Acerca de',
    emojitools: 'Herramientas de Emoji'
  },
  EmojiGenerator: {
    title: 'Generador de Emojis',
    description: 'Crea emojis personalizados con IA. Escribe tu idea y genera imágenes únicas.',
    categoryEmoji: 'Emoji',
    categorySticker: 'Sticker',
    categoryIcon: 'Icono',
    inputPlaceholder: 'Describe tu idea para el emoji...',
    generateButton: 'Generar',
    generating: 'Generando...',
    loadingMessage: 'Creando tu emoji...',
    copyButton: 'Copiar',
    downloadButton: 'Descargar',
    tryExample: 'Prueba un ejemplo',
    errorGenerating: 'Error al generar la imagen. Inténtalo de nuevo.',
    copiedToClipboard: '¡Copiado al portapapeles!',
    errorCopying: 'Error al copiar la imagen. Intenta usar el botón de descarga.',
    failedToCopy: 'No se pudo copiar la imagen. Intenta usar el botón de descarga.',
    exampleEmoji1: 'gato feliz',
    exampleEmoji2: 'panda sorprendido',
    exampleEmoji3: 'pizza riéndose',
    exampleSticker1: 'perro con gafas de sol',
    exampleSticker2: 'unicornio arcoíris',
    exampleSticker3: 'robot emocionado',
    exampleIcon1: 'icono de correo',
    exampleIcon2: 'engranaje de configuración',
    exampleIcon3: 'burbuja de chat',
    backgroundColorTitle: 'Color de fondo',
    transparentBackground: 'Transparente',
    whiteBackground: 'Blanco',
    blackBackground: 'Negro',
    colorfulBackground: 'Colorido',
    gradientBackground: 'Degradado',
    artStyleTitle: 'Estilo artístico',
    cartoonStyle: 'Caricatura',
    pixelStyle: 'Pixel Art',
    watercolorStyle: 'Acuarela',
    sketchStyle: 'Boceto',
    threeDStyle: '3D',
    realisticStyle: 'Realista',
    customizeTitle: 'Personaliza tu emoji',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'Crea emojis únicos con el poder de la inteligencia artificial',
    getStarted: 'Comenzar',
    features: {
      title: 'Magia de IA para la creación de emojis',
      instant: {
        title: 'Creación instantánea',
        description: 'Usando tecnología avanzada de IA, convierte tus descripciones de texto en vibrantes imágenes de emoji en segundos. No se necesita experiencia en diseño.',
      },
      quality: {
        title: 'Alta calidad',
        description: 'Los emojis generados son de alta definición con fondos transparentes, perfectos para aplicaciones de chat y plataformas sociales. Copia o descarga con un solo clic.',
      },
      limitless: {
        title: 'Creatividad ilimitada',
        description: 'Tu imaginación es el único límite. Desde animales adorables hasta conceptos abstractos, la IA puede dar vida a cualquier idea como un emoji.',
      },
    },
    howToUse: {
      title: 'Cómo usar',
      step1: {
        title: 'Ingresa una descripción',
        description: 'Describe el emoji que deseas en el campo de entrada. Prueba "gato feliz", "panda sorprendido" o cualquier idea creativa. Más detalles producen mejores resultados.',
      },
      step2: {
        title: 'Genera la imagen',
        description: 'Haz clic en el botón "Generar" y deja que la IA procese tu descripción. La creación toma solo unos segundos, por favor sé paciente.',
      },
      step3: {
        title: 'Guarda y comparte',
        description: 'Una vez generado, puedes copiar el emoji para usarlo inmediatamente en aplicaciones de chat o descargarlo para guardarlo permanentemente.',
      },
    },
    examples: {
      title: 'Prueba estos ejemplos'
    },
    faq: {
      title: 'Preguntas Frecuentes',
      question1: '¿Qué es un Generador de Emojis IA?',
      answer1: 'Un Generador de Emojis IA es una herramienta avanzada que utiliza la inteligencia artificial para crear emojis personalizados basados en descripciones de texto. Nuestro Generador de Emojis IA transforma tus ideas en imágenes de emoji únicas y de alta calidad que se pueden usar en varias plataformas digitales.',
      
      question2: '¿Cómo funciona el Generador de Emojis IA?',
      answer2: 'Nuestro Generador de Emojis IA utiliza algoritmos avanzados de aprendizaje automático entrenados en millones de imágenes. Cuando ingresas una descripción de texto, el IA analiza tu entrada y genera un emoji personalizado que coincide con tu descripción. La tecnología combina el procesamiento del lenguaje natural con capacidades de generación de imágenes para crear representaciones visuales únicas de tus ideas.',
      
      question3: '¿Los emojis generados son gratuitos de usar?',
      answer3: '¡Sí! Todos los emojis creados con nuestro Generador de Emojis IA son gratuitos para uso personal. Los puedes usar en mensajes, publicaciones de redes sociales y proyectos personales sin restricciones. Para uso comercial en materiales de marketing, contenido con marca registrada o productos para la venta, por favor refiérase a nuestros términos de servicio.',
      
      question4: '¿Puedo personalizar el estilo de mis emojis?',
      answer4: '¡Absolutamente! Nuestro Generador de Emojis IA ofrece varias opciones de personalización. Puedes especificar estilos de arte (cómic, arte pixelado, acuarela, etc.), colores de fondo y otros atributos en tu descripción. Para obtener los mejores resultados, se especifique claramente el estilo que desea en su prompt.',
      
      question5: '¿Qué formatos de archivo están disponibles para descargar?',
      answer5: 'Los emojis generados se pueden descargar como archivos PNG con fondo transparente, lo que los hace perfectos para usar en varias plataformas y aplicaciones. El fondo transparente asegura que los emojis se integren perfectamente con cualquier interfaz de chat o documento.',
      
      question6: '¿Hay un límite en la cantidad de emojis que puedo generar?',
      answer6: 'Actualmente ofrecemos una cantidad generosa de generaciones gratuitas al día. Este límite nos ayuda a mantener la calidad del servicio y la disponibilidad para todos los usuarios. Si necesitas crear más emojis, puedes volver al día siguiente cuando tu contador de generación se reinicie.'
    },
    explanatoryText: {
      title: 'Desbloquea Tu Creatividad Con La Generación De Emojis AI',
      paragraph1: 'El Generador de Emojis IA representa un enfoque revolucionario para la expresión digital, combinando la inteligencia artificial avanzada con una interfaz de usuario amigable. Nuestra tecnología avanzada de IA analiza las descripciones de texto y las transforma en imágenes vibrantes y expresivas de emoji que capturan perfectamente tus ideas y emociones.',
      
      paragraph2: 'A diferencia de las bibliotecas de emojis tradicionales que ofrecen opciones limitadas, nuestro Generador de Emojis IA proporciona infinitas posibilidades creativas. Ya sea que necesites un gato feliz con gafas de sol, una pizza bailando con cubiertos de colores, o cualquier concepto imaginario, nuestro IA puede dar vida a él como un emoji de alta calidad con fondo transparente.',
      
      paragraph3: 'La tecnología detrás de nuestro Generador de Emojis IA utiliza modelos de aprendizaje profundo entrenados en conjuntos de datos visuales diversos. Estos modelos entienden las relaciones entre palabras e imágenes, permitiéndonos interpretar las descripciones y generar elementos visuales correspondientes. El IA se mejora continuamente a través del aprendizaje automático, convirtiéndose en más preciso y creativo con cada generación.',
      
      paragraph4: 'Los emojis personalizados creados con nuestro Generador de Emojis IA mejoran la comunicación digital al agregar personalidad y contexto a tus mensajes. Ayudan a transmitir emociones más efectivamente que el texto solo y pueden hacer que tus conversaciones sean más entretenidas y memorables. Desde chats personales hasta comunicaciones profesionales, los emojis personalizados agregan una única nota que se destaca.',
      
      paragraph5: 'Nuestro Generador de Emojis IA está diseñado para ser accesible para todos, independientemente de la experiencia en diseño o conocimientos técnicos. La interfaz intuitiva lo hace fácil de describir tu idea de emoji, generar la imagen y descargar o copiarla para su uso inmediato. Esta democratización de herramientas creativas impulsa a los usuarios a expresarse de nuevas y emocionantes maneras en línea.',
      
      paragraph6: 'Más allá del uso personal, el Generador de Emojis IA ofrece aplicaciones valiosas para creadores de contenido, profesionales del marketing, educadores y empresas. Los emojis personalizados pueden fortalecer la identidad de la marca, mejorar materiales educativos o agregar interés visual a contenido digital. Las posibilidades son infinitas, como tu imaginación.',
      
      paragraph7: 'A medida que la tecnología de inteligencia artificial continúa evolucionando, también lo harán las capacidades de nuestro Generador de Emojis IA. Nos comprometemos a incorporar los últimos avances en investigación de IA para proporcionarte herramientas de creación de emojis aún más poderosas y versátiles. Únete a nosotros en este emocionante viaje en la intersección de la inteligencia artificial y la expresión creativa.'
    }
  },
  About: {
    title: 'Acerca de',
    mission: {
      title: 'Nuestra Misión',
      paragraph1: 'AI Emoji Generator es una herramienta gratuita diseñada para ayudar a todos a crear emojis únicos y personalizados utilizando el poder de la inteligencia artificial. Creemos que la expresión créativa debe ser accesible para todos, independientemente de la habilidad artística o el conocimiento técnico.',
      paragraph2: 'Nuestra misión es democratizar la creatividad digital proporcionando herramientas de IA de vanguardia que sean simples, intuitivas y gratuitas. Queremos ayudar a las personas a comunicarse de manera más expresiva en línea.'
    },
    howItWorks: {
      title: 'Cómo Funciona',
      paragraph1: 'Nuestro generador de emojis utiliza modelos avanzados de IA para transformar descripciones de texto en imágenes vibrantes y únicas. Entre bastidores, aprovechamos la tecnología de generación de imágenes de última generación que ha sido específicamente entrenada para crear gráficos de estilo emoji.',
      paragraph2: 'La IA comprende descripciones en lenguaje natural y las visualiza en varios estilos artísticos, dándote completa libertad creativa sin necesidad de habilidades de diseño.'
    },
    noAccount: {
      title: 'Sin Necesidad de Cuenta',
      paragraph1: 'Creemos en hacer que la tecnología sea accesible con la mínima fricción. Es por eso que AI Emoji Generator no requiere registro, creación de cuenta ni información personal. Simplemente visita el sitio, escribe tu idea y genera emojis únicos al instante.',
      paragraph2: 'Tus creaciones son tuyas para guardar y usar como quieras. Descárgalas, cópialas y compártelas en todas tus plataformas y aplicaciones favoritas.'
    }
  },
  Blog: {
    title: 'Blog',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: '¡Más publicaciones próximamente!',
    readMore: 'Leer más',
    recentPosts: 'Publicaciones Récentes',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 mil millones se envían diariamente, transcendiéndose las barreras culturales y lingüísticas. Sin embargo, las bibliotecas tradicionales de emojis son limitadas. Entra en los generadores de emojis de IA, una innovación revolucionaria que está cambiando cómo nos comunicamos visualmente.',
    mainArticle: {
      title: 'La Evolución e Impacto del Generador de Emojis IA en la Comunicación Moderna',
      date: '10 de Mayo de 2023',
      author: 'Equipo Emoji'
    },
    backToBlog: 'Volver al Blog',
    post0Title: 'Primeros pasos con AI Emoji Generator',
    post0Excerpt: 'Aprende a crear tu primer emoji generado por IA en menos de un minuto...',
    post0Date: '15 de Oct, 2023',
    
    post1Title: 'Top 10 kreative Emoji-Ideen zum Ausprobieren',
    post1Excerpt: '¿Buscando inspiración? Aquí hay diez conceptos creativos de emoji que nuestros usuarios adoran...',
    post1Date: '3 de Oct, 2023',
    
    post2Title: 'El futuro de la IA en el diseño creativo',
    post2Excerpt: 'Cómo la inteligencia artificial está transformando la creatividad digital y lo que significa para los diseñadores...',
    post2Date: '28 de Sep, 2023'
  },
  EmojiTools: {
    title: 'Emoji',
    subtitle: 'Herramientas',
    description: 'Descubre nuestra colección de herramientas de emoji con IA para crear, personalizar y divertirte con emojis.',
    tryButton: 'Probar Ahora'
  },
  TextToEmoji: {
    title: 'Texto a Emoji',
    subtitle: 'Escribe cualquier texto y míralo traducido a emojis. Sin texto en las respuestas, solo expresión pura de emoji.',
    inputPlaceholder: 'Escribe tu texto aquí...',
    sendButton: 'Traducir'
  },
  EmojiChat: {
    title: 'Emoji Chat',
    subtitle: 'Pregunta cualquier cosa y obtén respuestas solo con emojis. AI responde con expresiones puras de emoji.',
    inputPlaceholder: 'Escribe tu pregunta aquí...',
    sendButton: 'Enviar'
  }
};

// 法语翻译
const frMessages = {
  Navbar: {
    home: 'Accueil',
    blog: 'Blog',
    about: 'À propos',
    emojitools: 'Outils Emoji'
  },
  EmojiGenerator: {
    title: 'Générateur d\'Emoji',
    description: 'Créez des emojis personnalisés avec l\'IA. Saisissez votre idée et générez des images uniques.',
    categoryEmoji: 'Emoji',
    categorySticker: 'Sticker',
    categoryIcon: 'Icône',
    inputPlaceholder: 'Décrivez votre idée d\'emoji...',
    generateButton: 'Générer',
    generating: 'Génération en cours...',
    loadingMessage: 'Création de votre emoji...',
    copyButton: 'Copier',
    downloadButton: 'Télécharger',
    tryExample: 'Essayez un exemple',
    errorGenerating: 'Erreur lors de la génération de l\'image. Veuillez réessayer.',
    copiedToClipboard: 'Copié dans le presse-papiers!',
    errorCopying: 'Erreur lors de la copie de l\'image. Essayez le bouton de téléchargement.',
    failedToCopy: 'Échec de la copie de l\'image. Essayez le bouton de téléchargement.',
    exampleEmoji1: 'chat heureux',
    exampleEmoji2: 'panda surpris',
    exampleEmoji3: 'pizza riante',
    exampleSticker1: 'chien mignon avec lunettes de soleil',
    exampleSticker2: 'licorne arc-en-ciel',
    exampleSticker3: 'robot excité',
    exampleIcon1: 'icône de courriel',
    exampleIcon2: 'engrenage de paramètres',
    exampleIcon3: 'bulle de discussion',
    backgroundColorTitle: 'Couleur de fond',
    transparentBackground: 'Transparent',
    whiteBackground: 'Blanc',
    blackBackground: 'Noir',
    colorfulBackground: 'Coloré',
    gradientBackground: 'Dégradé',
    artStyleTitle: 'Style artistique',
    cartoonStyle: 'Dessin animé',
    pixelStyle: 'Pixel Art',
    watercolorStyle: 'Aquarelle',
    sketchStyle: 'Croquis',
    threeDStyle: '3D',
    realisticStyle: 'Réaliste',
    customizeTitle: 'Personnalisez votre emoji',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'Créez des emojis uniques avec la puissance de l\'intelligence artificielle',
    getStarted: 'Commencer',
    features: {
      title: 'Magie de l\'IA pour la création d\'emojis',
      instant: {
        title: 'Création instantanée',
        description: 'Grâce à la technologie avancée de l\'IA, transformez vos descriptions textuelles en images d\'emoji vibrantes en quelques secondes. Aucune expérience en design n\'est nécessaire.',
      },
      quality: {
        title: 'Haute qualité',
        description: 'Les emojis générés sont en haute définition avec des arrière-plans transparents, parfaits pour les applications de chat et les plateformes sociales. Copiez ou téléchargez en un clic.',
      },
      limitless: {
        title: 'Créativité sans limites',
        description: 'Votre imagination est la seule limite. Des animaux mignons aux concepts abstraits, l\'IA peut donner vie à n\'importe quelle idée comme Emoji.',
      },
    },
    howToUse: {
      title: 'Comment utiliser',
      step1: {
        title: 'Saisissez une description',
        description: 'Décrivez l\'emoji que vous souhaitez dans le champ de saisie. Essayez "chat heureux", "panda surpris" ou toute idée créative. Plus de détails donnent de meilleurs résultats.',
      },
      step2: {
        title: 'Générez l\'image',
        description: 'Cliquez sur le bouton "Générer" et laissez l\'IA traiter votre description. La création ne prend que quelques secondes, veuillez être patient.',
      },
      step3: {
        title: 'Sauvegardez et partagez',
        description: 'Une fois généré, vous pouvez copier l\'emoji pour une utilisation immédiate dans les applications de chat ou le télécharger pour le conserver définitivement.',
      },
    },
    examples: {
      title: 'Essayez ces exemples'
    },
    faq: {
      title: 'Questions Fréquentes',
      question1: 'Qu\'est-ce qu\'un Générateur d\'Emoji IA?',
      answer1: 'Un Générateur d\'Emoji IA est une excellente outil qui utilise l\'intelligence artificielle pour créer des emojis personnalisés basés sur des descriptions de texte. Notre Générateur d\'Emoji IA transforme vos idées en images d\'emoji uniques et de haute qualité que vous pouvez utiliser sur diverses plateformes numériques.',
      
      question2: 'Comment fonctionne le Générateur d\'Emoji IA?',
      answer2: 'Notre Générateur d\'Emoji IA utilise des algorithmes d\'apprentissage automatique avancés entraînés sur des millions d\'images. Lorsque vous entrez une description de texte, le IA analyse votre entrée et génère un emoji personalizado que correspond à votre description. La technologie combine le traitement du langage naturel avec des capacités de génération d\'images pour créer des représentations visuelles uniques de vos idées.',
      
      question3: 'Les emojis générés sont-ils gratuits à utiliser?',
      answer3: 'Oui! Tous les emojis créés avec notre Générateur d\'Emoji IA sont gratuits pour utilisation personnelle. Vous pouvez les utiliser dans les messages, les publications de médias sociaux et les projets personnels sans restrictions. Pour utilisation commerciale dans des matériaux de marketing, contenu marqué, ou produits à vendre, veuillez vous référer à nos termes de service.',
      
      question4: 'Puis-je personnaliser le style de mes emojis?',
      answer4: 'Absolument! Notre Générateur d\'Emoji IA offre diverses options de personnalisation. Vous pouvez spécifier des styles d\'art (comique, art pixelé, aquarelle, etc.), des couleurs de fond et d\'autres attributs dans votre description. Pour obtenir les meilleurs résultats, spécifiez clairement le style que vous souhaitez dans votre prompt.',
      
      question5: 'Quels formats de fichiers sont disponibles pour téléchargement?',
      answer5: 'Les emojis générés peuvent être téléchargés sous forme de fichiers PNG avec arrière-plan transparent, ce qui les rend parfaits pour utiliser sur diverses plateformes et applications. L\'arrière-plan transparent garantit que les emojis s\'intègrent parfaitement avec toute interface de chat ou document.',
      
      question6: 'Y a-t-il une limite au nombre d\'emojis que je peux générer?',
      answer6: 'Actuellement, nous offrons une quantité généreuse de générations gratuites par jour. Ce limite nous aide à maintenir la calité du service et la disponibilité pour tous les utilisateurs. Si vous avez besoin de créer plus d\'emojis, vous pouvez revenir le jour suivant lorsque votre compteur de génération se réinitialise.'
    },
    explanatoryText: {
      title: 'Débloquez Votre Créativité Avec La Génération D\'Emoji IA',
      paragraph1: 'Le Générateur d\'Emoji IA représente une approche révolutionnaire pour l\'expression digitale, combinant l\'intelligence artificielle avancée avec une interface utilisateur conviviale. Notre technologie avancée d\'IA analyse les descriptions de texte et les transforme en images vibrantes et expressives d\'emoji qui capturant parfaitement vos idées et vos émotions.',
      
      paragraph2: 'À l\'opposé des bibliothèques d\'emojis traditionnelles qui offrent des options limitées, notre Générateur d\'Emoji IA fournit des possibilités créatives infinies. Que vous ayez besoin d\'un chat heureux avec lunettes de soleil, d\'une pizza dansant avec des couverts de couleurs, ou tout autre concept imaginaire, notre IA peut le rendre vivant comme un emoji de haute qualité avec arrière-plan transparent.',
      
      paragraph3: 'La technologie derrière notre Générateur d\'Emoji IA utilise des modèles d\'apprentissage profond entraînés sur des ensembles de données visuels diversifiés. Ces modèles comprennent les relations entre les mots et les images, nous permettant d\'interpréter les descriptions et de générer des éléments visuels correspondants. L\'IA s\'améliore continuellement grâce à l\'apprentissage automatique, se transformant en plus précis et créatif avec chaque génération.',
      
      paragraph4: 'Les emojis personnalisés créés avec notre Générateur d\'Emoji IA renforcent la communication digitale en ajoutant de la personnalité et du contexte à vos messages. Ils aident à transmettre les émotions plus efficacement que le texte seul et peuvent rendre vos conversations plus amusantes et mémorables. De simples chats à des communications professionnelles, les emojis personnalisés ajoutent une note unique qui se démarque.',
      
      paragraph5: 'Notre Générateur d\'Emoji IA est conçu pour être accessible à tous, indépendamment de l\'expérience en design ou des connaissances techniques. L\'interface intuitive le rend facile de décrire votre idée d\'emoji, de générer l\'image et de la copier ou la télécharger pour une utilisation immédiate. Cette démocratisation des outils créatifs stimule les utilisateurs à s\'exprimer de nouvelles et excitantes façons en ligne.',
      
      paragraph6: 'Au-delà de l\'utilisation personnelle, le Générateur d\'Emoji IA offre des applications précieuses pour les créateurs de contenu, les professionnels du marketing, les éducateurs et les entreprises. Les emojis personnalisés peuvent renforcer l\'identité de la marque, améliorer les matériaux éducatifs ou ajouter de l\'intérêt visuel aux contenus numériques. Les possibilités sont infinies, comme votre imagination.',
      
      paragraph7: 'À mesure que la technologie d\'intelligence artificielle continue d\'évoluer, les capacités de notre Générateur d\'Emoji IA s\'également. Nous nous engageons à intégrer les derniers avances en recherche d\'IA pour vous fournir des outils de création de emojis aún más poderosas y versátiles. Únete a nosotros en ce emocionante viaje en la intersección de la inteligencia artificial y la expresión creativa.'
    }
  },
  About: {
    title: 'À propos',
    mission: {
      title: 'Notre Mission',
      paragraph1: 'AI Emoji Generator est un outil gratuit conçu pour aider tout le monde à créer des emojis uniques et personnalisés en utilisant la puissance de l\'intelligence artificielle. Nous croyons que l\'expression créative devrait être accessible à tous, indépendamment des capacités artistiques ou des connaissances techniques.',
      paragraph2: 'Notre mission est de démocratiser la créativité numérique en fournissant des outils d\'IA de pointe qui sont simples, intuitifs et gratuits. Nous voulons aider les gens à communiquer de manière plus expressive en ligne.'
    },
    howItWorks: {
      title: 'Comment Ça Fonctionne',
      paragraph1: 'Un générateur d\'emoji utilise des modèles d\'IA avancés pour transformer des descriptions de texte en images vibrantes et uniques. En coulisses, nous utilisons une technologie de génération d\'images de pointe qui a été spécifiquement formée pour créer des graphiques de style emoji.',
      paragraph2: 'La IA comprend les descriptions en langage naturel et les visualise dans divers styles artistiques, vous offrant une liberté créative complète sans avoir besoin de compétences en design.'
    },
    noAccount: {
      title: 'Pas de Compte Nécessaire',
      paragraph1: 'Nous croyons en l\'accessibilité de la technologie avec un minimum de friction. C\'est pourquoi AI Emoji Generator ne nécessite pas d\'inscription, de création de compte ou d\'informations personnelles. Simplement visita le site, de taper votre idée, et de générer instantanément des emojis uniques.',
      paragraph2: 'Vos créations sont à vous, à conserver et à utiliser comme vous le souhaitez. Téléchargez-les, copiez-les et partagez-les sur toutes vos plateformes et applications préférées.'
    }
  },
  Blog: {
    title: 'Blog',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'More blog posts coming soon!',
    readMore: 'Lire Plus',
    recentPosts: 'Publications Récentes',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 billion are sent daily, transcending cultural and linguistic barriers. Yet traditional emoji libraries are limited. Enter AI emoji generators, a game-changing innovation reshaping how we communicate visually.',
    mainArticle: {
      title: 'L\'Évolution et l\'Impact du Générateur d\'Emojis IA dans la Communication Moderne',
      date: '10 Mai 2023',
      author: 'Équipe Emoji'
    },
    backToBlog: 'Retour au Blog',
    post0Title: 'Erste Schritte mit dem AI Emoji Generator',
    post0Excerpt: 'Lernen Sie, wie Sie Ihren ersten KI-generierten Emoji in weniger als einer Minute erstellen...',
    post0Date: '15. Okt 2023',
    
    post1Title: 'Top 10 kreative Emoji-Ideen zum Ausprobieren',
    post1Excerpt: 'Suchen Sie nach Inspiration? Hier sind zehn kreative Emoji-Konzepte, die unsere Benutzer lieben...',
    post1Date: '3. Okt 2023',
    
    post2Title: 'Die Zukunft der KI im kreativen Design',
    post2Excerpt: 'Wie künstliche Intelligenz die digitale Kreativität verändert und was das für Designer bedeutet...',
    post2Date: '28. Sep 2023'
  },
  EmojiTools: {
    title: 'Emoji',
    subtitle: 'Outils',
    description: 'Découvrez notre collection d\'outils emoji alimentés par l\'IA pour créer, personnaliser et vous amuser avec des emojis.',
    tryButton: 'Essayer Maintenant'
  },
  TextToEmoji: {
    title: 'Texte en Emoji',
    subtitle: 'Tapez n\'importe quel texte et voyez-le traduit en emojis. Pas de texte dans les réponses, juste une expression emoji pure.',
    inputPlaceholder: 'Tapez votre texte ici...',
    sendButton: 'Traduire'
  },
  EmojiChat: {
    title: 'Emoji Chat',
    subtitle: 'Preguntez n\'importe quoi et obtenez des réponses uniquement avec des emojis. AI répond avec des expressions purement emoji.',
    inputPlaceholder: 'Écrivez votre question ici...',
    sendButton: 'Envoyer'
  }
};

// 阿拉伯语翻译
const arMessages = {
  Navbar: {
    home: 'الرئيسية',
    blog: 'المدونة',
    about: 'حول',
    emojitools: 'أدوات الرموز التعبيرية'
  },
  EmojiGenerator: {
    title: 'رموز',
    subtitle: 'تعبيرية',
    description: 'اكتشف مجموعتنا من أدوات الرموز التعبيرية المدعومة بالذكاء الاصطناعي لإنشاء وتخصيص والاستمتاع بالرموز التعبيرية.',
    categoryEmoji: 'رموز',
    categorySticker: 'صور',
    categoryIcon: 'رمز',
    inputPlaceholder: 'أصف الفكرة الخاصة بك لرمز...',
    generateButton: 'إنشاء',
    generating: 'إنشاء...',
    loadingMessage: 'يتم إنشاء رمزك الخاص...',
    copyButton: 'نسخ',
    downloadButton: 'تحميل',
    tryExample: 'جرب الآن',
    errorGenerating: 'حدث خطأ أثناء إنشاء الصورة. يرجى المحاولة مرة أخرى.',
    copiedToClipboard: 'تم نسخ الصورة إلى الحافظة!',
    errorCopying: 'حدث خطأ أثناء نسخ الصورة. يرجى المحاولة مرة أخرى.',
    failedToCopy: 'فشل نسخ الصورة. يرجى المحاولة مرة أخرى.',
    exampleEmoji1: 'القط السعيد',
    exampleEmoji2: 'القط المفاجأ',
    exampleEmoji3: 'البيتزا المضحكة',
    exampleSticker1: 'كلب مع شمسيات',
    exampleSticker2: 'رينغبانو',
    exampleSticker3: 'روبوت مثير',
    exampleIcon1: 'رمز البريد',
    exampleIcon2: 'محرك الإعدادات',
    exampleIcon3: 'فقاعة الدردشة',
    backgroundColorTitle: 'لون الخلفية',
    transparentBackground: 'شفاف',
    whiteBackground: 'أبيض',
    blackBackground: 'أسود',
    colorfulBackground: 'ملون',
    gradientBackground: 'تدرج',
    artStyleTitle: 'أسلوب الفن',
    cartoonStyle: 'كاريكاتور',
    pixelStyle: 'رسوم بيزيلية',
    watercolorStyle: 'رسم بالماء',
    sketchStyle: 'رسم',
    threeDStyle: '3D',
    realisticStyle: 'واقعي',
    customizeTitle: 'تخصيص رمزك الخاص',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'إنشاء رموز خاصة بك باستخدام الذكاء الاصطناعي',
    getStarted: 'ابدأ الآن',
    features: {
      title: 'سحر الذكاء الاصطناعي لإنشاء الرموز',
      instant: {
        title: 'إنشاء لحظي',
        description: 'باستخدام تكنولوجيا ذكية متقدمة، ستحول نصوص الوصف الخاص بك إلى صور رموز حية خلال ثوانٍ قليلة. لا حاجة لخبرة التصميم.',
      },
      quality: {
        title: 'جودة عالية',
        description: 'تم إنشاء الرموز بجودة عالية مع خلفية شفافة، مثالية للتطبيقات الدردشة والشبكات الاجتماعية. انسخ أو قم بتحميل بضغطة واحدة.',
      },
      limitless: {
        title: 'إبداع لا نهائي',
        description: 'أبدأ بتخيلك فقط. من الحيوانات القديمة إلى المفاهيم المجردة، يمكن للذكاء الاصطناعي أن يجعل أي فكرة تصبح رمزًا حيًا بجودة عالية مع خلفية شفافة.',
      },
    },
    howToUse: {
      title: 'كيف تستخدم',
      step1: {
        title: 'أدخل الوصف',
        description: 'أكتب الرمز الذي تريده في مربع الإدخال. جرب "القط السعيد" أو "القط المفاجأ" أو أي فكرة مبتكرة. التفاصيل الأكثر تفضيلًا تعطي نتائج أفضل.',
      },
      step2: {
        title: 'إنشاء الصورة',
        description: 'انقر على زر "إنشاء" واترك الذكاء الاصطناعي يعالج وصفك. سيتم إنشاء الصورة في غضون ثوانٍ قليلة، يرجى الصبر.',
      },
      step3: {
        title: 'حفظ ومشاركة',
        description: 'بمجرد إنشاء الصورة، يمكنك نسخ الرمز لاستخدامه فورًا في تطبيقات الدردشة أو تحميله للحفظ بشكل دائم.',
      },
    },
    examples: {
      title: 'جرب هذه الأمثلة'
    },
    faq: {
      title: 'أسئلة شائعة',
      question1: 'ما هو مولد الرموز الذكي؟',
      answer1: 'مولد الرموز الذكي هو أداة متقدمة تستخدم الذكاء الاصطناعي لإنشاء الرموز المخصصة بناءً على وصف النص. مولد الرموز الذكي لدينا يحول أفكارك إلى صور رموز عملاقة عالية الجودة، ويمكن استخدامها على منصات رقمية متعددة.',
      
      question2: 'كيف يعمل مولد الرموز الذكي؟',
      answer2: 'يستخدم مولد الرموز الذكي خوارزميات تعلم آلي متقدمة يتم إدراجها على ملايين الصور. عندما تدخل نصًا من النص، يقوم الذكاء الاصطناعي بتحليل مدخلك وينشأ رمزًا مخصصًا يتطابق مع وصفك. تكنولوجيا التعامل مع اللغة الطبيعية والتوليد الصوري يتم استخدامها معًا لإنشاء تمثيلات عريضة فريدة من أفكارك.',
      
      question3: 'هل يمكن استخدام الرموز التي تم إنشاؤها مجانًا؟',
      answer3: 'نعم! جميع الرموز التي تم إنشاؤها باستخدام مولد الرموز الذكي لدينا مجانية للاستخدام الشخصي. يمكنك استخدامها في الرسائل، والمشاركات على وسائل التواصل الاجتماعي، والمشاريع الشخصية دون أي حصص. للاستخدام التجاري في مواد التسويق، المحتوى المملوك، أو المنتجات المعروضة للبيع، يرجى الرجوع إلى شروط خدمتنا.',
      
      question4: 'هل يمكن تخصيص نمط الرموز الخاص بي؟',
      answer4: 'بالتأكيد! مولد الرموز الذكي لدينا يوفر خيارات تخصيص متعددة. يمكنك تحديد أساليب الفن (كاريكاتور، رسوم بيزيلية، رسم بالماء، إلخ)، وألوان الخلفية، وخصائص أخرى في وصفك. للحصول على أفضل النتائج، يرجى تحديد الأسلوب الذي تريده في موجه الإدخال.',
      
      question5: 'ما هي تنسيقات الملف المتاحة للتحميل؟',
      answer5: 'يمكن تحميل الرموز التي تم إنشاؤها كملفات PNG مع خلفية شفافة، مما يجعلها مثالية للاستخدام على منصات متعددة وتطبيقات. خلفية شفافة تضمن أن الرموز تتفاعل تمامًا مع أي واجهة دردشة أو مستند.',
      
      question6: 'هل هناك حد أقصى لعدد الرموز التي يمكن إنشاؤها؟',
      answer6: 'في الوقت الحالي، نحن نقدم كمية كبيرة من التوليد المجاني يوميًا. يساعد هذا الحد في الحفاظ على جودة الخدمة والتوفر لجميع المستخدمين. إذا كنت تريد إنشاء المزيد من الرموز، يمكنك العودة يوم الغد عندما يتم إعادة ضبط عداد التوليد الخاص بك.'
    },
    explanatoryText: {
      title: 'إطلاق ذكاءك التعبيري مع إنشاء الرموز الذكي',
      paragraph1: 'يمثل مولد الرموز الذكي نهجًا مثيرًا للتعبير عبر الإنترنت، حيث يجمع بين الذكاء الاصطناعي المتقدم وواجهة المستخدم المستقلة. تكنولوجيا الذكاء الاصطناعي المتقدمة لدينا تحلل وصف النص وتحوله إلى صور رموز حية عالية الجودة، مما يمثل تمثيلًا عاليًا لأفكارك ومشاعرك.',
      
      paragraph2: 'بدلاً من تقديم خيارات مقتصرة على الرموز التعبيرية التقليدية، يوفر مولد الرموز الذكي إمكانات إبداعية غير محدودة. سواء كنت تحتاج إلى قط سعيد مع شمسيات، أو بيتزا تنادي مع طباعات الألوان، أو أي مفهوم تخيلي آخر، يمكن للذكاء الاصطناعي أن يجعله حيًا بجودة عالية مع خلفية شفافة.',
      
      paragraph3: 'تكنولوجيا مولد الرموز الذكي لدينا تستخدم أنواعًا مختلفة من نماذج التعلم العميق، التي تم إدراجها على مجموعات متنوعة من البيانات البصرية. تفهم هذه النماذج علاقات بين الكلمات والصور، مما يمكننا من تفسير الوصف وإنشاء عناصر تمثيلية تناسبه. يتحسن الذكاء الاصطناعي باستمرار من خلال التعلم الآلي، إنشاء صور جديدة وأكثر إبداعًا في كل توليد.',
      
      paragraph4: 'تستخدم الرموز التي تم إنشاؤها بواسطة مولد الرموز الذكي إلى جعل الاتصال الرقمي أكثر فعالية، عن طريق إضافة الشخصية والسياق إلى رسائلك. تساعد على نقل المشاعر بطريقة أكثر فعالية من النص البسيط فقط، ويمكن أن يجعل محادثاتك أكثر جديدة ومثيرة للذكر. من الدردشة الشخصية إلى التواصل المهني، تضيف الرموز المخصصة علامة خاصة تميزها.',
      
      paragraph5: 'مولد الرموز الذكي لدينا مصمم بحيث يكون متاحًا للجميع، بغض النظر عن تجربة التصميم أو المعرفة الفنية. واجهة مستقلة يجعل من السهل تصف رأيك لرمز الرموز، إنشاء الصورة ونسخها أو تحميلها للاستخدام الفوري.',
      
      paragraph6: 'إذا سرق الأمر بالاستخدام الشخصي، يوفر مولد الرموز الذكي تطبيقات قيمة لمنتجي المحتوى، ومحترفي التسويق، والمعلمين، والشركات. يمكن أن تحفز الرموز المخصصة تعريف العلامة التجارية، وتحسين المواد التعليمية، أو إضافة جوهر مثير للاهتمام إلى المحتوى الرقمي. الإمكانات لا تنتهي، مثل ذكائك التخيلي.',
      
      paragraph7: 'مع تطور تكنولوجيا الذكاء الاصطناعي، سيتحسن إمكانات مولد الرموز الذكي لدينا أيضًا. نحن ملزمون بدمج أحدث التقدمات في علم الذكاء الاصطناعي لتزويدك بأدوات إنشاء الرموز أكثر قوة ومتعددة الاستخدامات. إنضم إلينا في هذه الرحلة المثيرة في مجال الذكاء الاصطناعي والتعبير الإبداعي.'
    }
  },
  About: {
    title: 'حول',
    mission: {
      title: 'مهمتنا',
      paragraph1: 'AI Emoji Generator هي أداة مجانية تصمم لمساعدة كل شخص على إنشاء الرموز المميزة والمخصصة باستخدام الذكاء الاصطناعي. نحن نؤمن بأن التعبير الإبداعي يجب أن يكون متاحًا للجميع، بغض النظر عن قدرة الفن أو المعرفة الفنية.',
      paragraph2: 'مهمتنا هي تحويل الإبداع الرقمي إلى أداة مجانية متقدمة تساعد الناس على التواصل بطريقة أكثر تعبيرية عبر الإنترنت.'
    },
    howItWorks: {
      title: 'كيف يعمل',
      paragraph1: 'يستخدم مولد الرموز الذكي أنواعًا مختلفة من أنماط الذكاء الاصطناعي لتحويل الوصف إلى صور حية عملاقة وفريدة. في الخلفية، نستخدم تكنولوجيا إنتاج الصور المتقدمة، التي تم تدريبها خصيصًا لإنشاء الرسومات التعبيرية.',
      paragraph2: 'تفهم الذكاء الاصطناعي الوصف اللغوي الطبيعي ويرسمه في أنواع مختلفة من أساليب الفن، مما يمنحك كل الحرية الإبداعية من دون الحاجة إلى مهارات التصميم.'
    },
    noAccount: {
      title: 'لا تحتاج إلى حساب',
      paragraph1: 'نحن نؤمن بتسهيل الوصول إلى التكنولوجيا بأقل إحتكاك. هذا هو السبب في أن AI Emoji Generator لا يتطلب تسجيل الدخول، إنشاء حساب، أو معلومات شخصية. فقط افتح الموقع، أدخل أفكارك، وإنشاء الرموز المميزة فورًا.',
      paragraph2: 'إن أعمالك تنتمي إليك، يمكنك حفظها واستخدامها كما تريد. قم بتحميلها، نسخها، وشاركها على جميع منصاتك وتطبيقاتك المفضلة.'
    }
  },
  Blog: {
    title: 'المدونة',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'أكثر من مقال جديد سيصل قريبًا!',
    readMore: 'قراءة المزيد',
    recentPosts: 'المشاركات الأخيرة',
    featuredDescription: 'في عصر الرقمي، أصبح الرموز التعبيرية خلية اللغة العالمية - تم إرسال أكثر من 6 مليار رمز يوميًا، عبر الثقافات واللغات المختلفة. على الرغم من أن المكتبات التقليدية للرموز التعبيرية غير متاحة، يدخل المولدون الذكيون، إبداعًا مثيرًا يحول كيفية التواصل البصري.',
    mainArticle: {
      title: 'تطور وتأثير مولد الرموز الذكي في التواصل الحديث',
      date: '10 مايو 2023',
      author: 'فريق Emoji'
    },
    backToBlog: 'العودة إلى المدونة',
    post0Title: 'دليل البدء لمولد الرموز التعبيرية بالذكاء الاصطناعي',
    post0Excerpt: 'تعلم كيفية إنشاء أول رمز تعبيري مولد بالذكاء الاصطناعي في أقل من دقيقة...',
    post0Date: '15 أكتوبر 2023',
    
    post1Title: '10 أفكار إبداعية للرموز التعبيرية تستحق التجربة',
    post1Excerpt: 'تبحث عن الإلهام؟ إليك عشرة مفاهيم إبداعية للرموز التعبيرية يحبها مستخدمونا...',
    post1Date: '3 أكتوبر 2023',
    
    post2Title: 'كيف يغير الذكاء الاصطناعي التعبير الرقمي',
    post2Excerpt: 'الذكاء الاصطناعي يغير الطريقة التي نعبر بها عن أنفسنا عبر الإنترنت...',
    post2Date: '12 ديسمبر 2023'
  },
  EmojiTools: {
    title: '表情',
    subtitle: '工具',
    description: '探索我们的AI驱动表情工具集合，创建、自定义和享受表情符号的乐趣。',
    tryButton: '立即尝试'
  },
  TextToEmoji: {
    title: '文字转表情',
    subtitle: '输入任何文字，将其转换为表情符号。没有文字回应，只有纯粹的表情符号表达。',
    inputPlaceholder: '在这里输入你的文字...',
    sendButton: '翻译'
  },
  EmojiChat: {
    title: '表情符号聊天',
    subtitle: '表情符号提问，AI用表情符号回答。没有文字，只有纯粹的表情符号表达。',
    inputPlaceholder: '在这里输入你的问题...',
    sendButton: '发送'
  }
};

// 日语翻译
const jaMessages = {
  Navbar: {
    home: 'ホーム',
    blog: 'ブログ',
    about: '概要',
    emojitools: '絵文字ツール'
  },
  EmojiGenerator: {
    title: '絵文字ジェネレーター',
    description: 'AIで独自の絵文字を作成。アイデアを入力して、ユニークな画像を生成しましょう。',
    categoryEmoji: '絵文字',
    categorySticker: 'ステッカー',
    categoryIcon: 'アイコン',
    inputPlaceholder: '絵文字のアイデアを説明してください...',
    generateButton: '生成',
    generating: '生成中...',
    loadingMessage: '絵文字を作成しています...',
    copyButton: 'コピー',
    downloadButton: 'ダウンロード',
    tryExample: '例を試す',
    errorGenerating: '画像の生成中にエラーが発生しました。もう一度お試しください。',
    copiedToClipboard: 'クリップボードにコピーされました！',
    errorCopying: '画像のコピー中にエラーが発生しました。ダウンロードボタンをお試しください。',
    failedToCopy: '画像のコピーに失敗しました。ダウンロードボタンをお試しください。',
    exampleEmoji1: '幸せな猫',
    exampleEmoji2: '驚いたパンダ',
    exampleEmoji3: '笑うピザ',
    exampleSticker1: 'サングラスをかけたかわいい犬',
    exampleSticker2: '虹色のユニコーン',
    exampleSticker3: '興奮したロボット',
    exampleIcon1: 'メールアイコン',
    exampleIcon2: '設定歯車',
    exampleIcon3: 'チャットバブル',
    backgroundColorTitle: '背景色',
    transparentBackground: '透明',
    whiteBackground: '白',
    blackBackground: '黒',
    colorfulBackground: 'カラフル',
    gradientBackground: 'グラデーション',
    artStyleTitle: 'アートスタイル',
    cartoonStyle: '漫画',
    pixelStyle: 'ピクセルアート',
    watercolorStyle: '水彩画',
    sketchStyle: 'スケッチ',
    threeDStyle: '3D',
    realisticStyle: 'リアル',
    customizeTitle: '絵文字をカスタマイズ',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: '人工知能の力で独自の絵文字を作成',
    getStarted: '始める',
    features: {
      title: '絵文字作成のためのAIマジック',
      instant: {
        title: '即時作成',
        description: '高度なAI技術を使用して、テキストの説明を数秒で鮮やかな絵文字画像に変換します。デザイン経験は必要ありません。',
      },
      quality: {
        title: '高品質',
        description: '生成された絵文字は高解像度で透明な背景を持ち、チャットアプリやソーシャルプラットフォームに最適です。ワンクリックでコピーまたはダウンロードできます。',
      },
      limitless: {
        title: '無限の創造性',
        description: 'あなたの想像力だけが限界です。かわいい動物から抽象的な概念まで、AIはどんなアイデアも絵文字として具現化できます。',
      },
    },
    howToUse: {
      title: '使用方法',
      step1: {
        title: '説明を入力',
        description: '入力フィールドに欲しい絵文字を説明します。「幸せな猫」、「驚いたパンダ」など、創造的なアイデアを試してみてください。詳細が多いほど、より良い結果が得られます。',
      },
      step2: {
        title: '画像を生成',
        description: '「生成」ボタンをクリックして、AIに説明を処理させます。作成には数秒しかかかりませんが、しばらくお待ちください。',
      },
      step3: {
        title: '保存して共有',
        description: '生成後、絵文字をコピーしてチャットアプリですぐに使用したり、ダウンロードして永久に保存したりできます。',
      },
    },
    examples: {
      title: 'これらの例を試してみてください'
    },
    faq: {
      title: 'よくある質問',
      question1: 'AI絵文字ジェネレーターとは？',
      answer1: 'AI絵文字ジェネレーターは、テキストの説明に基づいてカスタム絵文字を作成するためにAIを使用する高度なツールです。AI絵文字ジェネレーターは、アイデアを独特で高品質な絵文字画像に変換します。',
      
      question2: 'AI絵文字ジェネレーターはどのように機能しますか？',
      answer2: 'AI絵文字ジェネレーターは、数百万の画像に基づいてトレーニングされた高度な機械学習アルゴリズムを使用します。テキストの説明を入力すると、AIは入力を分析し、説明に基づいてカスタム絵文字を生成します。技術は自然言語処理と画像生成機能を組み合わせて、アイデアの独自の視覚的表現を作成します。',
      
      question3: '生成された絵文字は無料で使用できますか？',
      answer3: 'はい！AI絵文字ジェネレーターで作成された絵文字は個人使用のため無料です。メッセージ、ソーシャルメディアの投稿、個人のプロジェクトで使用できます。マーケティング材料、ブランドコンテンツ、販売する製品の場合は、サービスの利用規約を参照してください。',
      
      question4: '絵文字のスタイルをカスタマイズできますか？',
      answer4: '絶対にできます！AI絵文字ジェネレーターはさまざまなカスタマイズオプションを提供します。説明にアートスタイル（コミック、ピクセルアート、アクアレル、など）、背景色、その他の属性を指定できます。最高の結果を得るために、プロンプトで明確にスタイルを指定してください。',
      
      question5: 'ダウンロード可能なファイル形式は？',
      answer5: '透明な背景を持つPNGファイルとして生成された絵文字をダウンロードできます。透明な背景により、絵文字はチャットインターフェイスやドキュメントに完全に統合できます。',
      
      question6: '絵文字を生成できる数に制限はありますか？',
      answer6: '現在、無料の生成回数を提供しています。この制限は、サービスの品質と可用性を維持するのに役立ちます。もっと絵文字が必要な場合は、翌日に生成回数がリセットされた日に戻ることができます。'
    },
    explanatoryText: {
      title: 'AI駆動の絵文字生成で創造力を解放',
      paragraph1: 'AI絵文字ジェネレーターは、デジタル表現への革命的アプローチを表しています。最先端のAI技術とユーザーフレンドリーなインターフェイスを組み合わせることで、アイデアを鮮やかで表現力豊かな絵文字画像に変換します。',
      
      paragraph2: '従来の絵文字ライブラリが提供する制限されたオプションとは異なり、AI絵文字ジェネレーターは無限のクリエイティブな可能性を提供します。サングラスをかけたかわいい猫、虹色のコニー、またはどんな想像的な概念でも、透明な背景を持つ高品質な絵文字にします。',
      
      paragraph3: 'AI絵文字ジェネレーターの技術は、さまざまな視覚的データセットに基づいてトレーニングされた複雑なディープラーニングモデルを利用します。これらのモデルは、ワードとイメージの関係を理解し、説明を解釈し、対応する視覚的要素を生成します。AIは機械学習を通じて継続的に改善され、各生成でより正確で創造的になります。',
      
      paragraph4: 'AI絵文字ジェネレーターで作成されたカスタム絵文字は、デジタル通信を強化するために使用されます。テキストのみよりもはるかに効果的に感情を伝えるのに役立ちます。テキストのみのシンプルなチャットから、プロフェッショナルなコミュニケーションまで、カスタム絵文字は独自のノートを追加します。',
      
      paragraph5: 'AI絵文字ジェネレーターは、デザインの経験や技術的な知識に関係なく、誰にでもアクセス可能に設計されています。直感的なインターフェイスにより、あなたの絵文字のアイデアを説明し、画像を生成し、使用するために即座にダウンロードまたはコピーするのが簡単になります。この創造的なツールの民主化により、オンラインで新しい刺激的な方法で自分を表現する機会がもたらされます。',
      
      paragraph6: '個人使用を超えて、AI絵文字ジェネレーターは、コンテンツクリエーター、マーケティングプロフェッショナル、教育者、および企業の貴重なアプリケーションを提供します。カスタム絵文字はブランドのアイデンティティを強化し、教育材料を強化し、デジタルコンテンツに視覚的な興味を追加することができます。可能性は無限です。',
      
      paragraph7: 'AI技術が進化するにつれて、AI絵文字ジェネレーターの能力も進化します。最新のAI研究の進歩を組み込むことにコミットしています。あなたにより強力で多才な絵文字作成ツールを提供します。この興味深い旅に参加してください。AIと創造的な表現の交差点で。'
    }
  },
  About: {
    title: '概要',
    mission: {
      title: '私たちの使命',
      paragraph1: 'AI Emoji Generatorは、人工知能の力を使用して、誰もが独自のパーソナライズされた絵文字を作成できるように設計された無料ツールです。私たちは、芸術的な能力や技術的な知識に関係なく、創造的な表現がすべての人にアクセス可能であるべきだと信じています。',
      paragraph2: '私たちの使命は、シンプルで直感的、そして無料で使える最先端のAIツールを提供することにより、デジタル創造性を民主化することです。私たちは、人々がオンラインでより表現豊かにコミュニケーションできるよう支援したいと考えています。'
    },
    howItWorks: {
      title: '仕組み',
      paragraph1: '当社の絵文字ジェネレーターは、高度なAIモデルを使用してテキストの説明を鮮やかでユニークな画像に変換します。背後では、絵文字スタイルのグラフィックを作成するために特別に訓練された最先端の画像生成技術を活用しています。',
      paragraph2: 'AIは自然言語の説明を理解し、それをさまざまな芸術的スタイルで視覚化し、デザインスキルを必要とせずに完全な創造的自由を提供します。'
    },
    noAccount: {
      title: 'アカウント不要',
      paragraph1: '私たちは、最小限の摩擦で技術をアクセス可能にすることを信じています。そのため、AI Emoji Generatorはサインアップ、アカウント作成、個人情報を必要としません。サイトを訪問し、アイデアを入力するだけで、独自の絵文字を即座に生成できます。',
      paragraph2: 'あなたの作品はあなたのものであり、好きなように保存して使用できます。ダウンロードして、コピーして、お気に入りのすべてのプラットフォームやアプリで共有しましょう。'
    }
  },
  Blog: {
    title: 'ブログ',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'More blog posts coming soon!',
    readMore: '続きを読む',
    recentPosts: '最新の投稿',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 billion are sent daily, transcending cultural and linguistic barriers. Yet traditional emoji libraries are limited. Enter AI emoji generators, a game-changing innovation reshaping how we communicate visually.',
    mainArticle: {
      title: '現代のコミュニケーションにおけるAI絵文字ジェネレーターの進化と影響',
      date: '10 maio 2023',
      author: 'Equipe Emoji'
    },
    backToBlog: 'ブログに戻る',
    post0Title: 'AI絵文字ジェネレーター入門ガイド',
    post0Excerpt: '1分以内にあなたの最初のAI生成絵文字を作成する方法を学びましょう...',
    post0Date: '2023年10月15日',
    
    post1Title: '試す価値のある10の創造的な絵文字アイデア',
    post1Excerpt: 'インスピレーションを探していますか？ユーザーに人気の10の創造的な絵文字コンセプトをご紹介します...',
    post1Date: '2023年10月3日',
    
    post2Title: 'AIがデジタル表現をどのように変革しているか',
    post2Excerpt: '人工知能がオンラインでの自己表現方法を変えつつあります...',
    post2Date: '2023年12月12日'
  },
  EmojiTools: {
    title: '絵文字',
    subtitle: 'ツール',
    description: 'AIを活用した絵文字ツールのコレクションを発見し、絵文字を作成、カスタマイズして楽しみましょう。',
    tryButton: '今すぐ試す'
  },
  TextToEmoji: {
    title: '絵文字ジェネレーター',
    subtitle: 'テキストを絵文字に変換。テキスト不要、純粋な絵文字表現のみ。',
    inputPlaceholder: 'ここにテキストを入力してください...',
    sendButton: '生成'
  },
  EmojiChat: {
    title: '絵文字チャット',
    subtitle: '表情符号で質問し、AIが表情符号で回答します。テキスト不要、純粋な表情表現のみ。',
    inputPlaceholder: 'ここに質問を入力してください...',
    sendButton: '送信'
  }
};

// 德语翻译
const deMessages = {
  Navbar: {
    home: 'Startseite',
    blog: 'Blog',
    about: 'Über uns',
    emojitools: 'Emoji-Tools'
  },
  EmojiGenerator: {
    title: 'Emoji-Generator',
    description: 'Erstellen Sie benutzerdefinierte Emojis mit KI. Geben Sie Ihre Idee ein und generieren Sie einzigartige Bilder.',
    categoryEmoji: 'Emoji',
    categorySticker: 'Sticker',
    categoryIcon: 'Icon',
    inputPlaceholder: 'Beschreiben Sie Ihre Emoji-Idee...',
    generateButton: 'Generieren',
    generating: 'Generiere...',
    loadingMessage: 'Erstelle Ihr Emoji...',
    copyButton: 'Kopieren',
    downloadButton: 'Herunterladen',
    tryExample: 'Beispiel ausprobieren',
    errorGenerating: 'Fehler beim Generieren des Bildes. Bitte versuchen Sie es erneut.',
    copiedToClipboard: 'In die Zwischenablage kopiert!',
    errorCopying: 'Fehler beim Kopieren des Bildes. Bitte versuchen Sie die Download-Schaltfläche.',
    failedToCopy: 'Fehler beim Kopieren des Bildes. Bitte versuchen Sie die Download-Schaltfläche.',
    exampleEmoji1: 'glückliche Katze',
    exampleEmoji2: 'überraschter Panda',
    exampleEmoji3: 'lachende Pizza',
    exampleSticker1: 'süßer Hund mit Sonnenbrille',
    exampleSticker2: 'Regenbogen-Einhorn',
    exampleSticker3: 'aufgeregter Roboter',
    exampleIcon1: 'E-Mail-Symbol',
    exampleIcon2: 'Einstellungsrad',
    exampleIcon3: 'Chat-Blase',
    backgroundColorTitle: 'Hintergrundfarbe',
    transparentBackground: 'Transparent',
    whiteBackground: 'Weiß',
    blackBackground: 'Schwarz',
    colorfulBackground: 'Bunt',
    gradientBackground: 'Verlauf',
    artStyleTitle: 'Kunststil',
    cartoonStyle: 'Cartoon',
    pixelStyle: 'Pixel-Art',
    watercolorStyle: 'Aquarell',
    sketchStyle: 'Skizze',
    threeDStyle: '3D',
    realisticStyle: 'Realistisch',
    customizeTitle: 'Passen Sie Ihr Emoji an',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'Erstellen Sie einzigartige Emojis mit der Kraft künstlicher Intelligenz',
    getStarted: 'Loslegen',
    features: {
      title: 'KI-Magie für die Erstellung von Emojis',
      instant: {
        title: 'Sofortige Erstellung',
        description: 'Mit fortschrittlicher KI-Technologie, verwandeln Sie Ihre Textbeschreibungen in Sekundenschnelle in lebendige Emoji-Bilder. Keine Design-Erfahrung erforderlich.',
      },
      quality: {
        title: 'Hohe Qualität',
        description: 'Die generierten Emojis sind hochauflösend mit transparentem Hintergrund, perfekt für Chat-Apps und soziale Plattformen. Kopieren oder herunterladen mit einem Klick.',
      },
      limitless: {
        title: 'Grenzenlose Kreativität',
        description: 'Ihre Fantasie ist die einzige Grenze. Des animales adorables hasta conceptos abstractos, la KI puede dar vida a cualquier idea como Emoji.',
      },
    },
    howToUse: {
      title: 'Verwendung',
      step1: {
        title: 'Beschreibung eingeben',
        description: 'Beschreiben Sie das gewünschte Emoji im Eingabefeld. Probieren Sie "glückliche Katze", "überraschter Panda" oder eine andere kreative Idee. Mehr Details führen zu besseren Ergebnissen.',
      },
      step2: {
        title: 'Bild generieren',
        description: 'Klicken Sie auf die Schaltfläche "Generieren" und lassen Sie die KI Ihre Beschreibung verarbeiten. Die Erstellung dauert nur wenige Sekunden, bitte haben Sie Geduld.',
      },
      step3: {
        title: 'Speichern und teilen',
        description: 'Nach der Generierung können Sie das Emoji kopieren, um es sofort in Chat-Anwendungen zu verwenden, oder herunterladen, um es dauerhaft zu speichern.',
      },
    },
    examples: {
      title: 'Probieren Sie diese Beispiele'
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      question1: 'Was ist ein AI Emoji Generator?',
      answer1: 'Ein AI Emoji Generator ist ein fortgeschrittenes Tool, das die künstliche Intelligenz verwendet, um benutzerdefinierte Emojis auf Basis von Textbeschreibungen zu erstellen. Unser AI Emoji Generator transformiert Ihre Ideen in einzigartige, hochwertige Emoji-Bilder, die Sie auf verschiedenen digitalen Plattformen verwenden können.',
      
      question2: 'Wie funktioniert ein AI Emoji Generator?',
      answer2: 'Unser AI Emoji Generator verwendet fortschrittliche maschinelle Lernalgorithmen, die auf Millionen von Bildern trainiert wurden. Wenn Sie eine Textbeschreibung eingeben, analysiert der IA Ihre Eingabe und generiert ein benutzerdefiniertes Emoji, das zu Ihrer Beschreibung passt. Die Technologie kombiniert die Verarbeitung natürlichen Sprachen mit Bildgenerierungsfähigkeiten, um einzigartige visuelle Darstellungen Ihrer Ideen zu erstellen.',
      
      question3: 'Sind die generierten Emojis kostenlos zu verwenden?',
      answer3: 'Ja! Alle mit unserem AI Emoji Generator erstellten Emojis sind kostenlos für persönliche Nutzung. Sie können sie in Nachrichten, sozialen Medien-Posts und persönlichen Projekten verwenden, ohne Einschränkungen. Für kommerzielle Nutzung in Marketing-Materialien, gekennzeichnetem Inhalt oder für verkaufte Produkte, bitte sich an unsere Nutzungsbedingungen.',
      
      question4: 'Kann ich den Stil meiner Emojis anpassen?',
      answer4: 'Absolut! Unser AI Emoji Generator bietet verschiedene Anpassungsoptionen. Sie können den Stil (Karikatur, Pixel-Art, Aquarell, etc.) und andere Attribute in Ihrer Beschreibung angeben. Um die besten Ergebnisse zu erzielen, seien Sie klar und deutlich, welchen Stil Sie in Ihrem Prompt möchten.',
      
      question5: 'Welche Dateiformate sind für das Herunterladen verfügbar?',
      answer5: 'Generierte Emojis können als PNG-Dateien mit transparentem Hintergrund heruntergeladen werden, was sie perfekt für die Verwendung auf verschiedenen Plattformen und Anwendungen macht. Der transparente Hintergrund garantiert, dass Emojis perfekt mit jeder Chat-Oberfläche oder Dokument verwendet werden können.',
      
      question6: 'Gibt es eine Begrenzung für die Anzahl der Emojis, die ich generieren kann?',
      answer6: 'Aktuell bieten wir eine gute Anzahl kostenloser Generierungen pro Tag. Diese Begrenzung hilft uns, die Qualität des Dienstes und die Verfügbarkeit für alle Benutzer zu gewährleisten. Wenn Sie mehr Emojis generieren müssen, können Sie am nächsten Tag zurückkehren, wenn Ihr Generierungszähler zurückgesetzt wird.'
    },
    explanatoryText: {
      title: 'Lassen Sie Ihre Kreativität mit AI-gestützter Emoji-Generierung freien Lauf',
      paragraph1: 'Der AI Emoji Generator stellt eine revolutionäre Ansatz für digitale Ausdruck, indem er fortschrittliche künstliche Intelligenz mit einer benutzerfreundlichen Oberfläche kombiniert. Unsere fortschrittliche AI-Technologie analysiert Ihre Textbeschreibungen und transformiert sie in lebendige, ausdrucksstarke Emoji-Bilder, die Ihre Ideen und Emotionen perfekt erfassen.',
      
      paragraph2: 'Im Gegensatz zu traditionellen Emoji-Bibliotheken, die begrenzte Optionen bieten, bietet unser AI Emoji Generator unbegrenzte kreative Möglichkeiten. Ob Sie einen glücklichen Katzen mit Sonnenbrille, eine Pizza tanzenden mit Regenbogen-Toppings oder einen beliebigen imaginären Begriff benötigen, unser IA kann ihn zu einem hochwertigen Emoji mit transparentem Hintergrund machen.',
      
      paragraph3: 'Die Technologie hinter unserem AI Emoji Generator verwendet fortschrittliche tiefe Lernmodelle, die auf verschiedenen visuellen Datensätzen trainiert wurden. Diese Modelle verstehen die Beziehungen zwischen Wörtern und Bildern, die uns ermöglichen, die Beschreibungen zu interpretieren und entsprechende visuelle Elemente zu generieren. Der IA wird durch maschinelles Lernen kontinuierlich verbessert, indem er neuere und kreativere Bilder generiert.',
      
      paragraph4: 'Emojis, die mit unserem Generator erstellt wurden, stärken die digitale Kommunikation, indem sie Ihren Nachrichten Persönlichkeit und Kontext hinzufügen. Sie helfen, Emotionen effektiver zu übertragen als nur Text und können Ihre Gespräche interessanter und erinnerungsvoller machen. Von einfachen Chats bis hin zu professionellen Kommunikationen, fügen benutzerdefinierte Emojis Ihrer Unterhaltung eine einzigartige Note hinzu.',
      
      paragraph5: 'Unser AI Emoji Generator ist so konzipiert, dass er jedem zugänglich ist, unabhängig von Design-Erfahrung oder technischem Wissen. Die intuitive Oberfläche macht es einfach, Ihre Emoji-Idee zu beschreiben, die Bild zu generieren und es für sofortige Verwendung herunterzuladen oder zu kopieren.',
      
      paragraph6: 'Jenseits der persönlichen Nutzung bietet der AI Emoji Generator wertvolle Anwendungen für Inhaltsersteller, Marketingspezialisten, Bildungsexperten und Unternehmen. Benutzerdefinierte Emojis können die Marke identifizieren, die Bildungsmaterialien stärken oder das visuelle Interesse an digitalen Inhalten hinzufügen.',
      
      paragraph7: 'Da sich die Technologie künstlicher Intelligenz weiter entwickelt, werden auch die Fähigkeiten unseres AI Emoji Generators weiter verbessert. Wir sind verpflichtet, die neuesten Fortschritte in der AI-Forschung zu integrieren, um Ihnen noch leistungsfähigere und vielseitigere Emoji-Erstellungstools zu bieten. Treten Sie mit uns auf dieser spannenden Reise ein, die sich an der Schnittstelle von künstlicher Intelligenz und kreativer Ausdruck schneidet.'
    }
  },
  About: {
    title: 'Über uns',
    mission: {
      title: 'Unsere Mission',
      paragraph1: 'AI Emoji Generator ist ein kostenloses Tool, das jedem helfen soll, mit der Kraft der künstlichen Intelligenz einzigartige, personalisierte Emojis zu erstellen. Wir glauben, dass kreative Ausdrucksformen für alle zugänglich sein sollten, unabhängig von künstlerischen Fähigkeiten oder technischem Wissen.',
      paragraph2: 'Unsere Mission ist es, digitale Kreativität zu demokratisieren, indem wir moderne KI-Tools bereitstellen, die einfach, intuitiv und kostenlos zu nutzen sind. Wir möchten Menschen dabei helfen, sich online ausdrucksstärker zu kommunizieren.'
    },
    howItWorks: {
      title: 'Wie es funktioniert',
      paragraph1: 'Unser Emoji-Generator verwendet fortschrittliche KI-Modelle, um Textbeschreibungen in lebendige, einzigartige Bilder zu verwandeln. Hinter den Kulissen nutzen wir modernste Bildgenerierungstechnologie, die speziell darauf trainiert wurde, Grafiken im Emoji-Stil zu erstellen.',
      paragraph2: 'Die KI versteht natürliche Sprachbeschreibungen und visualisiert sie in verschiedenen künstlerischen Stilen, was Ihnen völlige kreative Freiheit gibt, ohne dass Sie Designfähigkeiten benötigen.'
    },
    noAccount: {
      title: 'Kein Konto erforderlich',
      paragraph1: 'Nous croyons en l\'accessibilité de la technologie avec un minimum de friction. C\'est pourquoi AI Emoji Generator ne nécessite pas d\'inscription, de création de compte ou d\'informations personnelles. Simplement visita le site, de taper votre idée, et de générer instantanément des emojis uniques.',
      paragraph2: 'Ihre Kreationen gehören Ihnen, um sie zu behalten und nach Belieben zu verwenden. Laden Sie sie herunter, kopiez-les et partagez-les sur toutes vos plateformes et applications préférées.'
    }
  },
  Blog: {
    title: 'Blog',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'Weitere Blogbeiträge in Kürze!',
    readMore: 'Weiterlesen',
    recentPosts: 'Neueste Beiträge',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 mil millones se envían diariamente, transcendiéndose las barreras culturales y lingüísticas. Yet traditional emoji libraries are limited. Enter AI emoji generators, a game-changing innovation reshaping how we communicate visually.',
    mainArticle: {
      title: 'Die Entwicklung und Auswirkung des KI-Emoji-Generators in der modernen Kommunikation',
      date: '10 mai 2023',
      author: 'Équipe Emoji'
    },
    backToBlog: 'Zurück zum Blog',
    post0Title: 'Erste Schritte mit dem AI Emoji Generator',
    post0Excerpt: 'Lernen Sie, wie Sie Ihren ersten KI-generierten Emoji in weniger als einer Minute erstellen...',
    post0Date: '15 mai 2023',
    
    post1Title: 'Top 10 kreative Emoji-Ideen zum Ausprobieren',
    post1Excerpt: 'Suchen Sie nach Inspiration? Hier sind zehn kreative Emoji-Konzepte, die unsere Benutzer lieben...',
    post1Date: '3 mai 2023',
    
    post2Title: 'Die Zukunft der KI im kreativen Design',
    post2Excerpt: 'Wie künstliche Intelligenz die digitale Kreativität verändert und was das für Designer bedeutet...',
    post2Date: '28 avril 2023'
  },
  EmojiTools: {
    title: 'Emoji',
    subtitle: 'Tools',
    description: 'Entdecken Sie unsere Sammlung von KI-gestützten Emoji-Tools zum Erstellen, Anpassen und Spaß haben mit Emojis.',
    tryButton: 'Jetzt Ausprobieren'
  },
  TextToEmoji: {
    title: 'Emoji-Generator',
    subtitle: 'Text in Emojis umwandeln. Kein Text, nur purem Emoji-Ausdruck.',
    inputPlaceholder: 'Hier geben Sie Ihren Text ein...',
    sendButton: 'Generieren'
  },
  EmojiChat: {
    title: 'Emoji Chat',
    subtitle: 'Stellen Sie jede Frage und erhalten Sie Antworten nur mit Emojis. Kein Text, nur purem Emoji-Ausdruck.',
    inputPlaceholder: 'Geben Sie hier Ihre Frage ein...',
    sendButton: 'Senden'
  }
};

// 印地语翻译
const hiMessages = {
  Navbar: {
    home: 'होम',
    blog: 'ब्लॉग',
    about: 'हमारे बारे में',
    emojitools: 'इमोजी टूल्स'
  },
  EmojiGenerator: {
    title: 'इमोजी',
    subtitle: 'टूल्स',
    description: 'इमोजी बनाने, कस्टमाइज़ करने और मज़े करने के लिए हमारे AI-संचालित इमोजी टूल्स का संग्रह खोजें।',
    categoryEmoji: 'इमोजी',
    categorySticker: 'छवि',
    categoryIcon: 'आइकन',
    inputPlaceholder: 'आपकी इमोजी विचार बताएं...',
    generateButton: 'बनाएं',
    generating: 'बनाने जा रहे हैं...',
    loadingMessage: 'आपकी इमोजी बन रही है...',
    copyButton: 'कॉपी करें',
    downloadButton: 'डाउनलोड करें',
    tryExample: 'अभी आज़माएं',
    errorGenerating: 'इमोजी बनाने के दौरान त्रुटि हुई। कृपया फिर से प्रयास करें।',
    copiedToClipboard: 'इमोजी को क्लिपबोर्ड में कॉपी कर ली है!',
    errorCopying: 'इमोजी को कॉपी करने में त्रुटि हुई। कृपया डाउनलोड बटन पर प्रयास करें।',
    failedToCopy: 'इमोजी को कॉपी करने में विफल हुई। कृपया डाउनलोड बटन पर प्रयास करें।',
    exampleEmoji1: 'खुश बिल्ली',
    exampleEmoji2: 'आश्चर्यवाद पंडा',
    exampleEmoji3: 'हंसले वाली पिज्जा',
    exampleSticker1: 'सूरज के नजर आने वाली बिल्ली',
    exampleSticker2: 'रंगीन इंहोन',
    exampleSticker3: 'उत्साहित रोबोट',
    exampleIcon1: 'ईमेल आइकन',
    exampleIcon2: 'सेटिंग वोल्टेज',
    exampleIcon3: 'चैट बबल',
    backgroundColorTitle: 'बैकग्राउंड कलर',
    transparentBackground: 'सहज',
    whiteBackground: 'सफेद',
    blackBackground: 'काला',
    colorfulBackground: 'रंगीन',
    gradientBackground: 'ग्रेडिएंट',
    artStyleTitle: 'आर्ट स्टाइल',
    cartoonStyle: 'कार्टून',
    pixelStyle: 'पिक्सेल आर्ट',
    watercolorStyle: 'वॉश आर्ट',
    sketchStyle: 'स्केच',
    threeDStyle: '3D',
    realisticStyle: 'रियलिस्टिक',
    customizeTitle: 'अपनी इमोजी को कस्टमाइज़ करें',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'आधुनिक बातचीत में अपनी इमोजी बनाने के लिए AI का जादू',
    getStarted: 'अभी शुरू करें',
    features: {
      title: 'AI जादू इमोजी बनाने के लिए',
      instant: {
        title: 'तुरंत बनाना',
        description: 'उन्नत AI तकनीक का उपयोग करते हुए, आपके टेक्स्ट विवरणों को कुछ सेकंड में जोरदार इमोजी छवियों में बदल दें। डिज़ाइन अनुभव की आवश्यकता नहीं है।',
      },
      quality: {
        title: 'उच्च गुणवत्ता',
        description: 'हमारे AI द्वारा बनाए गए इमोजी उच्च प्रकाशन गुणवत्ता वाले हैं, जो चैट एप्लिकेशन और सोशल प्लेटफॉर्मों के लिए आदर्श हैं। एक क्लिक के साथ कॉपी या डाउनलोड करें।',
      },
      limitless: {
        title: 'अपरिमित क्रियवाद',
        description: 'आपकी कल्पना ही सीमा है। बिल्लियों से अवचल अवधारणाओं तक, AI कोई भी विचार को इमोजी के रूप में जीवनी देने में सक्षम है।',
      },
    },
    howToUse: {
      title: 'कैसे उपयोग करें',
      step1: {
        title: 'विवरण दर्ज करें',
        description: 'इनपुट फ़ील्ड में आपको इमोजी चाहिए जो आप चाहते हैं। "खुश बिल्ली" या "आश्चर्यवाद पंडा" या कोई भी नवीन विचार को प्रयोग करें। अधिक विवरण अधिक बेहतर परिणाम देते हैं।',
      },
      step2: {
        title: 'छवि बनाएं',
        description: '"उत्पन्न" बटन पर क्लिक करें और AI को आपके विवरण को संसाधित करने दें। बनाने में केवल कुछ सेकंड लगते हैं, कृपया थोड़ी देर इंतजार करें।',
      },
      step3: {
        title: 'सहेजें और साझा करें',
        description: 'बनाने के बाद, आप इमोजी को कॉपी करके चैट एप्लिकेशन में तुरंत उपयोग कर सकते हैं या इसे स्थायी रूप में डाउनलोड कर सकते हैं।',
      },
    },
    examples: {
      title: 'इन उदाहरणों को आज़माएं'
    },
    faq: {
      title: 'अक्सर पूछे जाने वाले प्रश्न',
      question1: 'AI इमोजी जनरेटर क्या है?',
      answer1: 'AI इमोजी जनरेटर एक उन्नत टूल है जो टेक्स्ट विवरणों पर आधारित कस्टम इमोजी बनाने के लिए AI का उपयोग करता है। AI इमोजी जनरेटर आपकी विचारों को एकीकृत उच्च गुणवत्ता वाली इमोजी छवियों में बदल देता है।',
      
      question2: 'AI इमोजी जनरेटर कैसे काम करता है?',
      answer2: 'AI इमोजी जनरेटर एक संख्या में ट्रेनिंग किए गए उन्नत मशीन लर्निंग एल्गोरिथ्म का उपयोग करता है। जब आप टेक्स्ट विवरण दर्ज करते हैं, तो AI आपके इनपुट को विश्लेषण करता है और आपके विवरण के आधार पर कस्टम इमोजी बनाता है। तकनीक विश्लेषण और छवि उत्पन्न करने की क्षमता को संयोजित करती है, जो आपके विचारों के अनुरूप विश्लेषण और उत्पन्न करने की अनुमति देती है।',
      
      question3: 'उत्पन्न इमोजी मुफ्त में उपयोग कर सकते हैं?',
      answer3: 'हाँ! AI इमोजी जनरेटर द्वारा बनाए गए इमोजी आपके व्यक्तिगत उपयोग के लिए मुफ्त हैं। आप उन्हें संदेशों, सोशल मीडिया पोस्टों और व्यक्तिगत प्रोजेक्टों में उपयोग कर सकते हैं। विपणन सामग्री, ब्रांड कंटेंट, या विक्रय की वस्तुओं के लिए, कृपया अपने सेवा की शर्तों को देखें।',
      
      question4: 'क्या मैं अपनी इमोजी का स्टाइल कस्टमाइज़ कर सकता हूं?',
      answer4: 'निश्चित है! AI इमोजी जनरेटर विभिन्न कस्टमाइज़ विकल्प प्रदान करता है। आप विवरण में आर्ट स्टाइल (कार्टून, पिक्सेल आर्ट, एक्यूआरल, आदि) और अन्य विशेषताओं को भी विवरण में दर्ज कर सकते हैं। अधिकतम परिणामों को प्राप्त करने के लिए, आपको अपने प्रोम्प्ट में स्पष्ट रूप से स्टाइल दर्ज करना होगा।',
      
      question5: 'क्या मैं डाउनलोड करने के लिए उपलब्ध फ़ाइल प्रारूप हूं?',
      answer5: 'हाँ! हमारे AI इमोजी जनरेटर द्वारा बनाए गए इमोजी को डाउनलोड करने के लिए उपलब्ध हैं। आप उन्हें चैट इंटरफ़ेस या डॉक्यूमेंट में पूर्ण रूप से इंटीग्रेट कर सकते हैं।',
      
      question6: 'क्या मैं इमोजी उत्पन्न करने के लिए सीमा है?',
      answer6: 'वर्तमान में, हम आपको बहुत बड़ी संख्या में मुफ्त उत्पन्न प्रदान करते हैं। यह सीमा हमारे सेवा गुणवत्ता और सभी उपयोगकर्ताओं के लिए उपलब्धता को बनाए रखने में मदद करती है। यदि आपको अधिक इमोजी उत्पन्न करने की आवश्यकता है, तो आप अगले दिन जब आपका उत्पन्न गणना रीसेट हो जाएगी तो वहाँ वापस जाएं।'
    },
    explanatoryText: {
      title: 'AI द्वारा उत्पन्न इमोजी उत्पादन में क्रियवाद छोड़ना',
      paragraph1: 'AI इमोजी जनरेटर डिजिटल अभिव्यक्ति के लिए एक क्रांतिकारी दृष्टिकोण है, जो उन्नत AI को उपयोगकर्ता के अनुकूल इंटरफेस के साथ जोड़ता है। हमारी उन्नत AI तकनीक टेक्स्ट विवरणों का विश्लेषण करती है और उन्हें जीवंत, अभिव्यक्तिपूर्ण इमोजी छवियों में बदल देती है, जो आपके विचारों और भावनाओं को पूरी तरह से व्यक्त करती हैं।',
      
      paragraph2: 'परंपरागत इमोजी लाइब्रेरी के विपरीत, जो सीमित विकल्प प्रदान करती हैं, हमारा AI इमोजी जनरेटर असीमित रचनात्मक संभावनाएं प्रदान करता है। चाहे आपको धूप के चश्मे वाली खुश बिल्ली, रंगीन टॉपिंग के साथ नाचती हुई पिज्जा, या कोई अन्य कल्पनाशील अवधारणा चाहिए, AI इसे पारदर्शी पृष्ठभूमि के साथ उच्च गुणवत्ता वाले इमोजी में बदल सकता है।',
      
      paragraph3: 'हमारे AI इमोजी जनरेटर के पीछे की तकनीक विविध दृश्य डेटासेट पर प्रशिक्षित जटिल डीप लर्निंग मॉडल का उपयोग करती है। ये मॉडल शब्दों और छवियों के बीच संबंधों को समझते हैं, जिससे हमें विवरणों की व्याख्या करने और उपयुक्त दृश्य तत्वों को उत्पन्न करने की अनुमति मिलती है। AI मशीन लर्निंग के माध्यम से निरंतर सुधार करती है, नई और अधिक रचनात्मक छवियां बनाती है।',
      
      paragraph4: 'हमारे जनरेटर द्वारा बनाए गए इमोजी आपके संदेशों में व्यक्तित्व और संदर्भ जोड़कर डिजिटल संचार को बढ़ाते हैं। वे केवल पाठ की तुलना में अधिक प्रभावी ढंग से भावनाओं को संप्रेषित करने में मदद करते हैं, और आपकी बातचीत को अधिक जीवंत और यादगार बना सकते हैं। व्यक्तिगत चैट से लेकर पेशेवर संचार तक, अनुकूलित इमोजी एक अनूठा स्पर्श जोड़ते हैं।',
      
      paragraph5: 'हमारा AI इमोजी जनरेटर डिजाइन अनुभव या तकनीकी ज्ञान की परवाह किए बिना सभी के लिए सुलभ होने के लिए डिज़ाइन किया गया है। सहज इंटरफ़ेस आपके इमोजी विचार का वर्णन करना, छवि उत्पन्न करना और तत्काल उपयोग के लिए इसे कॉपी या डाउनलोड करना आसान बनाता है। रचनात्मक उपकरणों का यह लोकतंत्रीकरण उपयोगकर्ताओं को ऑनलाइन नए और रोमांचक तरीकों से खुद को व्यक्त करने के लिए सशक्त बनाता है।',
      
      paragraph6: 'व्यक्तिगत उपयोग से परे, AI इमोजी जनरेटर सामग्री निर्माताओं, विपणन पेशेवरों, शिक्षकों और व्यवसायों के लिए मूल्यवान अनुप्रयोग प्रदान करता है। अनुकूलित इमोजी ब्रांड पहचान को मजबूत कर सकते हैं, शैक्षिक सामग्री को बढ़ा सकते हैं, या डिजिटल सामग्री में दृश्य रुचि जोड़ सकते हैं। संभावनाएं अनंत हैं, जैसे आपकी कल्पना।',
      
      paragraph7: 'जैसे-जैसे AI प्रौद्योगिकी विकसित होती है, हमारे AI इमोजी जनरेटर की क्षमताएं भी विकसित होंगी। हम आपको और अधिक शक्तिशाली और बहुमुखी इमोजी निर्माण उपकरण प्रदान करने के लिए AI अनुसंधान में नवीनतम प्रगति को शामिल करने के लिए प्रतिबद्ध हैं। AI और रचनात्मक अभिव्यक्ति के इस रोमांचक चौराहे पर हमारे साथ जुड़ें।'
    }
  },
  About: {
    title: 'О нас',
    mission: {
      title: 'Наша миссия',
      paragraph1: 'AI Emoji Generator - это бесплатный инструмент, разработанный чтобы помочь каждому создавать уникальные, персонализированные эмодзи с помощью искусственного интеллекта. Мы верим, что творческое самовыражение должно быть доступно всем, независимо от художественных способностей или технических знаний.',
      paragraph2: 'Наша миссия - демократизировать цифровое творчество, предоставляя передовые инструменты ИИ, которые просты, интуитивно понятны и бесплатны в использовании. Мы хотим помочь людям общаться более выразительно в интернете.'
    },
    howItWorks: {
      title: 'Как это работает',
      paragraph1: 'Наш генератор эмодзи использует продвинутые модели ИИ для преобразования текстовых описаний в яркие, уникальные изображения. За кулисами мы используем современные технологии генерации изображений, специально обученные для создания графики в стиле эмодзи.',
      paragraph2: 'AI понимает описания на естественном языке и визуализирует их в различных художественных стилях, давая вам полную творческую свободу без необходимости навыков дизайна.'
    },
    noAccount: {
      title: 'Аккаунт не требуется',
      paragraph1: 'Мы верим в обеспечение доступа к технологиям с минимальными препятствиями. Именно поэтому AI Emoji Generator не требует регистрации, создания учетной записи или личной информации. Просто посетите сайт, введите свою идею и мгновенно создавайте уникальные эмодзи.',
      paragraph2: 'Ваши творения принадлежат вам, сохраняйте и используйте их как пожелаете. Загружайте их, копируйте и делитесь ими на всех ваших любимых платформах и приложениях.'
    }
  },
  Blog: {
    title: 'Блог',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'More blog posts coming soon!',
    readMore: 'Читать далее',
    recentPosts: 'Недавние публикации',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 billion are sent daily, transcending cultural and linguistic barriers. Yet traditional emoji libraries are limited. Enter AI emoji generators, a game-changing innovation reshaping how we communicate visually.',
    mainArticle: {
      title: 'Эволюция и влияние генератора эмодзи на базе ИИ в современной коммуникации',
      date: '10 мая 2023',
      author: 'Команда Emoji'
    },
    backToBlog: 'Вернуться к блогу',
    post0Title: 'Начало работы с генератором эмодзи на базе ИИ',
    post0Excerpt: 'Узнайте, как создать свой первый эмодзи с помощью ИИ менее чем за минуту...',
    post0Date: '15 октября 2023',
    
    post1Title: 'Топ-10 креативных идей для эмодзи',
    post1Excerpt: 'Ищете вдохновение? Вот десять креативных концепций эмодзи, которые нравятся нашим пользователям...',
    post1Date: '3 октября 2023',
    
    post2Title: 'Будущее ИИ в креативном дизайне',
    post2Excerpt: 'Как искусственный интеллект меняет сферу цифрового творчества и что это значит для дизайнеров...',
    post2Date: '28 сентября 2023'
  },
  EmojiTools: {
    title: 'Эмодзи',
    subtitle: 'Инструменты',
    description: 'Откройте для себя нашу коллекцию инструментов эмодзи с искусственным интеллектом для создания, настройки и развлечения с эмодзи.',
    tryButton: 'Попробовать Сейчас'
  },
  TextToEmoji: {
    title: 'Эмоджи генератор',
    subtitle: 'Введите текст, и получите эмоджи. Без текста, только чистая эмоджи-выражение.',
    inputPlaceholder: 'Введите ваш текст здесь...',
    sendButton: 'Генерировать'
  },
  EmojiChat: {
    title: 'Эмоджи чат',
    subtitle: 'Задайте любой вопрос и получите ответы только с помощью эмодзи. Без текста, только чистая эмоджи-выражение.',
    inputPlaceholder: 'Введите ваш вопрос здесь...',
    sendButton: 'Отправить'
  }
};

// 所有语言的翻译消息
const messages = {
  en: enMessages,
  zh: zhMessages,
  es: esMessages,
  fr: frMessages,
  ar: arMessages,
  ja: jaMessages,
  de: deMessages,
  hi: hiMessages
};

// 获取翻译消息 - 根据语言代码返回相应翻译
export async function getMessages(locale = 'en') {
  // 如果请求的语言不在支持列表中，则使用英语
  return messages[locale as keyof typeof messages] || messages.en;
}

// 创建翻译器
export function getTranslator(locale = 'en', namespace?: string) {
  const msgs = messages[locale as keyof typeof messages] || messages.en;
  return createTranslator({ locale, messages: msgs, namespace });
} 