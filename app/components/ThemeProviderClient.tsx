'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export default function ThemeProviderClient({ 
  children 
}: { 
  children: ReactNode 
}) {
  const [mounted, setMounted] = useState(false);

  // useEffect只在客户端执行
  useEffect(() => {
    // 在组件挂载后设置mounted为true
    setMounted(true);
    
    // 添加一个可见性类来确保平滑过渡
    document.documentElement.classList.add('theme-loaded');
    
    // 如果直接从localStorage加载了主题，确保不会在加载过程中闪烁
    try {
      const activeTheme = localStorage.getItem('theme');
      if (activeTheme) {
        document.documentElement.classList.add(activeTheme);
      }
    } catch (e) {
      console.error('Error accessing localStorage:', e);
    }
  }, []);

  // 避免在服务器端渲染主题相关内容
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme={false}
      storageKey="theme"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
} 