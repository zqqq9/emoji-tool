'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, LanguageCode, Translation } from '../i18n';

// 定义语言上下文的类型
interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translation;
}

// 创建语言上下文，默认为中文
const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: translations.zh
});

// 语言提供者属性类型
interface LanguageProviderProps {
  children: ReactNode;
}

// 语言提供者组件
export function LanguageProvider({ children }: LanguageProviderProps) {
  // 从本地存储中获取语言设置，如果没有则默认为中文
  const [language, setLanguage] = useState<LanguageCode>('zh');
  const [isClient, setIsClient] = useState(false);

  // 仅在客户端执行
  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language') as LanguageCode | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    } else {
      // 使用浏览器语言作为回退
      const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
      setLanguage(browserLang);
    }
  }, []);

  // 语言变更处理函数
  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguage(lang);
    if (isClient) {
      localStorage.setItem('language', lang);
    }
  };

  // 当前语言的翻译
  const t = translations[language];

  // 提供上下文值
  const contextValue: LanguageContextType = {
    language,
    setLanguage: handleLanguageChange,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

// 使用语言的自定义Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// 语言切换组件
export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('zh')}
        className={`px-2 py-1 rounded text-sm ${
          language === 'zh' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded text-sm ${
          language === 'en' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        }`}
      >
        English
      </button>
    </div>
  );
} 