'use client';

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// 定义上下文类型
type SiteContextType = {
  loadedEmoji: string | null;
  setLoadedEmoji: (emoji: string | null) => void;
};

// 创建上下文
const SiteContext = createContext<SiteContextType | undefined>(undefined);

// 上下文提供者组件
export function SiteProvider({ children }: { children: ReactNode }) {
  const [loadedEmoji, setLoadedEmoji] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  // 仅在客户端加载后渲染
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 避免服务器端渲染与客户端渲染不匹配
  if (!hasMounted) {
    return <>{children}</>;
  }

  return (
    <SiteContext.Provider value={{ loadedEmoji, setLoadedEmoji }}>
      {children}
    </SiteContext.Provider>
  );
}

// 使用上下文的钩子
export function useSiteContext() {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error('useSiteContext must be used within a SiteProvider');
  }
  return context;
} 