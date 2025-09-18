// 国际化路由布局
import { NextIntlClientProvider } from 'next-intl';
import type { Metadata } from 'next';
import { getMessages } from '../i18n';
import { locales, defaultLocale } from '../i18n';
import { SiteProvider } from '../contexts/SiteContext';
import ThemeProviderClient from '../components/ThemeProviderClient';
import Navbar from '../components/Navbar';
import '../globals.css';

// 动态 SEO 元数据（基于 locale）
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params?.locale || defaultLocale;
  const msgs = await getMessages(locale);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ai-emoji.example.com';

  // 基础文案（带回退）
  const siteTitle = 'AI Emoji Generator - Create Custom Emojis with AI';
  const siteTitleZh = 'AI表情生成器 - 使用AI创建自定义表情';
  const siteDesc = 'Create custom emojis with AI. Generate unique emojis for chat, social media, and more!';
  const siteDescZh = '使用AI创建自定义表情。为聊天与社交平台生成独特表情图像！';

  const isZh = locale.startsWith('zh');
  const title = isZh ? siteTitleZh : siteTitle;
  const description = isZh ? siteDescZh : siteDesc;

  // 语言 alternate 映射
  const languageAlternates: Record<string, string> = {};
  locales.forEach(l => {
    languageAlternates[l] = `/${l}`;
  });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: '%s | AI Emoji'
    },
    description,
    keywords: isZh
      ? ['AI 表情', '表情生成器', '文字转表情', '表情聊天', '图片转视频', '两图合成']
      : ['AI emoji', 'emoji generator', 'text to emoji', 'emoji chat', 'image to video', 'image merge'],
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: '/',
      languages: languageAlternates
    },
    openGraph: {
      type: 'website',
      locale,
      siteName: 'AI Emoji',
      title,
      description,
      url: '/',
      images: [
        { url: '/puzzle-emoji.svg' },
        { url: '/puzzle-emoji-dark.svg' }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/puzzle-emoji.svg']
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/favicon.ico'
    }
  };
}

// 国际化路由布局
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 从路由参数获取语言代码
  const locale = params.locale;
  
  // 获取翻译消息
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProviderClient>
        <SiteProvider>
          <Navbar />
          {children}
        </SiteProvider>
      </ThemeProviderClient>
    </NextIntlClientProvider>
  );
} 