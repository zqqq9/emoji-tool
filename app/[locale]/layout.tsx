// 国际化路由布局
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from '../i18n';
import { SiteProvider } from '../contexts/SiteContext';
import ThemeProviderClient from '../components/ThemeProviderClient';
import '../globals.css';

// 元数据
export const metadata = {
  title: 'AI Sticker Generator - Create Custom Stickers with AI',
  description: 'Create custom stickers and emojis with AI. Generate unique stickers for chat, social media, and more!',
};

// 国际化路由布局
export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // 固定使用英语
  const locale = 'en';
  
  // 获取翻译消息
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProviderClient>
            <SiteProvider>
              {children}
            </SiteProvider>
          </ThemeProviderClient>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 