import './globals.css';
import StyledComponentsRegistry from './registry';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Emoji Generator',
  description: 'Create custom emojis with AI. Generate unique emojis for chat, social media, and more!',
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/puzzle-emoji.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/puzzle-emoji-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    shortcut: '/puzzle-emoji.svg',
    apple: '/puzzle-emoji.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/styles.css" as="style" />
        <link rel="stylesheet" href="/styles.css" />
        <style dangerouslySetInnerHTML={{ 
          __html: `
            :root {
              --initial-background: white;
            }
            @media (prefers-color-scheme: dark) {
              :root {
                --initial-background: #111111;
              }
            }
            html {
              background-color: var(--initial-background);
            }
            body {
              visibility: visible;
              opacity: 1;
              background-color: var(--initial-background);
              transition: opacity 0.3s ease;
            }
          `
        }} />
        <script dangerouslySetInnerHTML={{ 
          __html: `
            // 立即设置初始主题，防止闪烁
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                const theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            })();
          `
        }} />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
