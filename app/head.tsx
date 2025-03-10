export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Create custom emojis with AI. Generate unique emojis for chat, social media, and more!" />
      <meta name="theme-color" content="#6e8efb" />
      <link rel="icon" href="/puzzle-emoji.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
      <link rel="icon" href="/puzzle-emoji-dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
      <link rel="preload" href="/styles.css" as="style" />
      <style dangerouslySetInnerHTML={{ 
        __html: `
          body {
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          .js-loaded body {
            visibility: visible;
            opacity: 1;
          }
        `
      }} />
      <script dangerouslySetInnerHTML={{ 
        __html: `
          // 在DOMContentLoaded事件后添加js-loaded类，使body可见
          document.addEventListener('DOMContentLoaded', function() {
            document.documentElement.classList.add('js-loaded');
          });
        `
      }} />
    </>
  );
} 