// 国际化路由布局
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from '../i18n';
import { SiteProvider } from '../contexts/SiteContext';
import ThemeProviderClient from '../components/ThemeProviderClient';
import Navbar from '../components/Navbar';
import '../globals.css';

// 元数据
export const metadata = {
  title: 'AI Emoji Generator - Create Custom Emojis with AI',
  description: 'Create custom emojis with AI. Generate unique emojis for chat, social media, and more!',
};

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