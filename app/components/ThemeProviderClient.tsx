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
    setMounted(true);
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