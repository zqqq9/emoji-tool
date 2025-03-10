'use client';

import React, { useState, useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // 只允许客户端渲染此组件
  const [isClient, setIsClient] = useState(false);
  
  // 在客户端加载后标记为客户端环境
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // 用于服务端样式收集和注入
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  // 将收集到的样式注入到HTML中
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // 如果是服务端渲染，收集所有样式
  if (typeof window === 'undefined') {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <>{children}</>
      </StyleSheetManager>
    );
  }

  // 客户端渲染则直接返回内容
  return <>{children}</>;
} 