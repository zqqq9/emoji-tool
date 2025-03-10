// 国际化配置 - 支持多语言
import { createTranslator } from 'next-intl';

// 定义支持的语言列表
export const locales = ['en', 'zh', 'es', 'fr', 'ar', 'ru', 'pt', 'ja', 'de', 'hi', 'ko', 'it', 'nl', 'tr', 'pl', 'sv', 'he', 'id'];

// 英文翻译
const enMessages = {
  Navbar: {
    home: 'Home',
    blog: 'Blog',
    about: 'About'
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
  }
};

// 中文翻译
const zhMessages = {
  Navbar: {
    home: '首页',
    blog: '博客',
    about: '关于'
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
    post1Date: '2023年11月5日',
    
    post2Title: 'AI如何改变数字表达',
    post2Excerpt: '人工智能正在改变我们在线表达自己的方式...',
    post2Date: '2023年12月12日'
  }
};

// 西班牙语翻译
const esMessages = {
  Navbar: {
    home: 'Inicio',
    blog: 'Blog',
    about: 'Acerca de'
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
    recentPosts: 'Publicaciones Recientes',
    featuredDescription: 'En la era digital, los emojis se han convertido en un lenguaje universal—más de 6 mil millones se envían diariamente, transcendiéndose las barreras culturales y lingüísticas. Sin embargo, las bibliotecas tradicionales de emojis son limitadas. Entra en los generadores de emojis de IA, una innovación revolucionaria que está cambiando cómo nos comunicamos visualmente.',
    mainArticle: {
      title: 'La Evolución e Impacto del Generador de Emojis IA en la Comunicación Moderna',
      date: '10 de Mayo de 2023',
      author: 'Equipo Emoji'
    },
    backToBlog: 'Volver al Blog',
    post0Title: 'Primeros pasos con AI Emoji Generator',
    post0Excerpt: 'Aprende a crear tu primer emoji generado por IA en menos de un minuto...',
    post0Date: '15 de Oct, 2023',
    
    post1Title: 'Top 10 ideas creativas de emojis para probar',
    post1Excerpt: '¿Buscando inspiración? Aquí hay diez conceptos creativos de emoji que nuestros usuarios adoran...',
    post1Date: '3 de Oct, 2023',
    
    post2Title: 'El futuro de la IA en el diseño creativo',
    post2Excerpt: 'Cómo la inteligencia artificial está transformando la creatividad digital y lo que significa para los diseñadores...',
    post2Date: '28 de Sep, 2023'
  }
};

// 法语翻译
const frMessages = {
  Navbar: {
    home: 'Accueil',
    blog: 'Blog',
    about: 'À propos'
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
        description: 'Votre imagination est la seule limite. Des animaux mignons aux concepts abstraits, l\'IA peut donner vie à n\'importe quelle idée sous forme d\'emoji.',
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
      paragraph1: 'Notre générateur d\'emoji utilise des modèles d\'IA avancés pour transformer des descriptions textuelles en images vibrantes et uniques. En coulisses, nous utilisons une technologie de génération d\'images de pointe qui a été spécifiquement formée pour créer des graphiques de style emoji.',
      paragraph2: 'L\'IA comprend les descriptions en langage naturel et les visualise dans divers styles artistiques, vous offrant une liberté créative complète sans avoir besoin de compétences en design.'
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
  }
};

// 日语翻译
const jaMessages = {
  Navbar: {
    home: 'ホーム',
    blog: 'ブログ',
    about: '概要'
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
      date: '2023年5月10日',
      author: '絵文字チーム'
    },
    backToBlog: 'ブログに戻る',
    post0Title: 'AI表情生成器入门指南',
    post0Excerpt: '学习如何在不到一分钟的时间内创建您的第一个AI生成的表情符号...',
    post0Date: '2023年10月15日',
    
    post1Title: '值得一试的10个创意表情想法',
    post1Excerpt: '寻找灵感？这里有十个我们用户喜爱的创意表情概念...',
    post1Date: '2023年10月3日',
    
    post2Title: 'AI在创意设计中的未来',
    post2Excerpt: '人工智能如何改变数字创意领域，以及这对设计师意味着什么...',
    post2Date: '2023年9月28日'
  }
};

// 德语翻译
const deMessages = {
  Navbar: {
    home: 'Startseite',
    blog: 'Blog',
    about: 'Über uns'
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
      title: 'KI-Magie für die Emoji-Erstellung',
      instant: {
        title: 'Sofortige Erstellung',
        description: 'Mit fortschrittlicher KI-Technologie verwandeln Sie Ihre Textbeschreibungen in Sekundenschnelle in lebendige Emoji-Bilder. Keine Design-Erfahrung erforderlich.',
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
      paragraph1: 'Wir glauben daran, Technologie mit minimaler Reibung zugänglich zu machen. Deshalb erfordert AI Emoji Generator keine Anmeldung, keine Kontoerstellung und keine persönlichen Informationen. Besuchen Sie einfach die Website, geben Sie Ihre Idee ein und generieren Sie sofort einzigartige Emojis.',
      paragraph2: 'Ihre Kreationen gehören Ihnen, um sie zu behalten und nach Belieben zu verwenden. Laden Sie sie herunter, kopieren Sie sie und teilen Sie sie auf all Ihren Lieblingsplattformen und Apps.'
    }
  },
  Blog: {
    title: 'Blog',
    highlight: 'AI Emoji Generator',
    featured: 'Featured',
    comingSoon: 'Weitere Blogbeiträge in Kürze!',
    readMore: 'Weiterlesen',
    recentPosts: 'Neueste Beiträge',
    featuredDescription: 'In the digital age, emojis have become a universal language—over 6 billion are sent daily, transcending cultural and linguistic barriers. Yet traditional emoji libraries are limited. Enter AI emoji generators, a game-changing innovation reshaping how we communicate visually.',
    mainArticle: {
      title: 'Die Entwicklung und Auswirkung des KI-Emoji-Generators in der modernen Kommunikation',
      date: '10. Mai 2023',
      author: 'Emoji-Team'
    },
    backToBlog: 'Zurück zum Blog',
    post0Title: 'Erste Schritte mit dem AI Emoji Generator',
    post0Excerpt: 'Lernen Sie, wie Sie Ihren ersten KI-generierten Emoji in weniger als einer Minute erstellen...',
    post0Date: '15. Okt 2023',
    
    post1Title: 'Top 10 kreative Emoji-Ideen zum Ausprobieren',
    post1Excerpt: 'Suchen Sie nach Inspiration? Hier sind zehn kreative Emoji-Konzepte, die unsere Benutzer lieben...',
    post1Date: '3. Okt 2023',
    
    post2Title: 'Die Zukunft der KI im kreativen Design',
    post2Excerpt: 'Wie künstliche Intelligenz die digitale Kreativität verändert und was das für Designer bedeutet...',
    post2Date: '28. Sep 2023'
  }
};

// 俄语翻译
const ruMessages = {
  Navbar: {
    home: 'Главная',
    blog: 'Блог',
    about: 'О нас'
  },
  EmojiGenerator: {
    title: 'Генератор эмодзи',
    description: 'Создавайте пользовательские эмодзи с помощью ИИ. Введите свою идею и создайте уникальные изображения.',
    categoryEmoji: 'Эмодзи',
    categorySticker: 'Стикер',
    categoryIcon: 'Иконка',
    inputPlaceholder: 'Опишите вашу идею эмодзи...',
    generateButton: 'Создать',
    generating: 'Создание...',
    loadingMessage: 'Создание вашего эмодзи...',
    copyButton: 'Копировать',
    downloadButton: 'Скачать',
    tryExample: 'Попробуйте пример',
    errorGenerating: 'Ошибка при создании изображения. Пожалуйста, попробуйте снова.',
    copiedToClipboard: 'Скопировано в буфер обмена!',
    errorCopying: 'Ошибка при копировании изображения. Попробуйте использовать кнопку скачивания.',
    failedToCopy: 'Не удалось скопировать изображение. Попробуйте использовать кнопку скачивания.',
    exampleEmoji1: 'счастливый кот',
    exampleEmoji2: 'удивленная панда',
    exampleEmoji3: 'смеющаяся пицца',
    exampleSticker1: 'милый пес в солнечных очках',
    exampleSticker2: 'радужный единорог',
    exampleSticker3: 'взволнованный робот',
    exampleIcon1: 'иконка электронной почты',
    exampleIcon2: 'шестеренка настроек',
    exampleIcon3: 'чат-пузырь',
    backgroundColorTitle: 'Цвет фона',
    transparentBackground: 'Прозрачный',
    whiteBackground: 'Белый',
    blackBackground: 'Черный',
    colorfulBackground: 'Разноцветный',
    gradientBackground: 'Градиент',
    artStyleTitle: 'Художественный стиль',
    cartoonStyle: 'Мультяшный',
    pixelStyle: 'Пиксельный',
    watercolorStyle: 'Акварель',
    sketchStyle: 'Эскиз',
    threeDStyle: '3D',
    realisticStyle: 'Реалистичный',
    customizeTitle: 'Настройте ваш эмодзи',
  },
  Home: {
    title: 'AI Emoji Generator',
    subtitle: 'Создавайте уникальные эмодзи с помощью искусственного интеллекта',
    getStarted: 'Начать',
    features: {
      title: 'Магия ИИ для создания эмодзи',
      instant: {
        title: 'Мгновенное создание',
        description: 'Используя передовые технологии ИИ, превратите ваши текстовые описания в яркие изображения эмодзи за считанные секунды. Опыт в дизайне не требуется.',
      },
      quality: {
        title: 'Высокое качество',
        description: 'Созданные эмодзи имеют высокое разрешение с прозрачным фоном, идеально подходят для чат-приложений и социальных платформ. Копируйте или скачивайте одним кликом.',
      },
      limitless: {
        title: 'Безграничное творчество',
        description: 'Ваше воображение - единственный предел. От милых животных до абстрактных концепций, ИИ может воплотить в эмодзи любую идею.',
      },
    },
    howToUse: {
      title: 'Как использовать',
      step1: {
        title: 'Введите описание',
        description: 'Опишите желаемый эмодзи в поле ввода. Попробуйте "счастливый кот", "удивленная панда" или любую творческую идею. Больше деталей дает лучшие результаты.',
      },
      step2: {
        title: 'Создайте изображение',
        description: 'Нажмите кнопку "Создать" и позвольте ИИ обработать ваше описание. Создание занимает всего несколько секунд, пожалуйста, наберитесь терпения.',
      },
      step3: {
        title: 'Сохраните и поделитесь',
        description: 'После создания вы можете скопировать эмодзи для немедленного использования в чат-приложениях или скачать, чтобы сохранить навсегда.',
      },
    },
    examples: {
      title: 'Попробуйте эти примеры'
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
      paragraph2: 'ИИ понимает описания на естественном языке и визуализирует их в различных художественных стилях, давая вам полную творческую свободу без необходимости навыков дизайна.'
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
    post0Title: 'AI表情生成器入门指南',
    post0Excerpt: '学习如何在不到一分钟的时间内创建您的第一个AI生成的表情符号...',
    post0Date: '2023年10月15日',
    
    post1Title: '值得一试的10个创意表情想法',
    post1Excerpt: '寻找灵感？这里有十个我们用户喜爱的创意表情概念...',
    post1Date: '2023年10月3日',
    
    post2Title: 'AI在创意设计中的未来',
    post2Excerpt: '人工智能如何改变数字创意领域，以及这对设计师意味着什么...',
    post2Date: '2023年9月28日'
  }
};

// 所有语言的翻译消息
const messages = {
  en: enMessages,
  zh: zhMessages,
  es: esMessages,
  fr: frMessages,
  ja: jaMessages,
  de: deMessages,
  ru: ruMessages,
  // 其他语言暂时使用英文
  pt: enMessages,
  ar: enMessages,
  hi: enMessages,
  ko: enMessages,
  it: enMessages,
  nl: enMessages,
  tr: enMessages,
  pl: enMessages,
  sv: enMessages,
  he: enMessages,
  id: enMessages,
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