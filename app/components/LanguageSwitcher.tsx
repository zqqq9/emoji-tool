'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import styled from 'styled-components';
import { locales } from '../i18n';

// 样式组件
const SwitcherContainer = styled.div`
  position: relative;
  display: inline-block;
  font-family: 'Inter', sans-serif;
`;

const CurrentLanguage = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: inherit;
  border: none;
  padding: 8px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
  }
`;

const LanguageIcon = styled.span`
  margin-right: 8px;
  font-size: 16px;
`;

const LanguageName = styled.span`
  margin-right: 4px;
`;

const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  font-size: 12px;
  opacity: 0.6;
`;

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.$isOpen ? 'translateY(5px)' : 'translateY(-10px)'};
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  z-index: 1000;
  overflow: hidden;
  padding: 8px 0;
`;

const LanguageGroup = styled.div`
  padding: 4px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
`;

const GroupTitle = styled.div`
  font-size: 12px;
  color: #888;
  padding: 6px 16px;
`;

const LanguageOption = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${props => props.$isActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent'};
  border: none;
  padding: 8px 16px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:focus {
    outline: none;
  }
`;

interface LanguageMap {
  [key: string]: {
    name: string;
    local: string;
    icon: string;
  }
}

// 语言映射
const languageMap: LanguageMap = {
  en: { name: 'English', local: 'English', icon: '🇺🇸' },
  zh: { name: 'Chinese', local: '中文', icon: '🇨🇳' },
  es: { name: 'Spanish', local: 'Español', icon: '🇪🇸' },
  fr: { name: 'French', local: 'Français', icon: '🇫🇷' },
  ar: { name: 'Arabic', local: 'العربية', icon: '🇦🇪' },
  ru: { name: 'Russian', local: 'Русский', icon: '🇷🇺' },
  pt: { name: 'Portuguese', local: 'Português', icon: '🇵🇹' },
  ja: { name: 'Japanese', local: '日本語', icon: '🇯🇵' },
  de: { name: 'German', local: 'Deutsch', icon: '🇩🇪' },
  hi: { name: 'Hindi', local: 'हिन्दी', icon: '🇮🇳' },
  ko: { name: 'Korean', local: '한국어', icon: '🇰🇷' },
  it: { name: 'Italian', local: 'Italiano', icon: '🇮🇹' },
  nl: { name: 'Dutch', local: 'Nederlands', icon: '🇳🇱' },
  tr: { name: 'Turkish', local: 'Türkçe', icon: '🇹🇷' },
  pl: { name: 'Polish', local: 'Polski', icon: '🇵🇱' },
  sv: { name: 'Swedish', local: 'Svenska', icon: '🇸🇪' },
  he: { name: 'Hebrew', local: 'עברית', icon: '🇮🇱' },
  id: { name: 'Indonesian', local: 'Bahasa Indonesia', icon: '🇮🇩' },
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 获取当前语言
  const getCurrentLanguage = () => {
    return {
      code: locale,
      name: languageMap[locale]?.local || locale,
      icon: languageMap[locale]?.icon || '🌐'
    };
  };

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 切换语言
  const switchLanguage = (langCode: string) => {
    if (langCode === locale) {
      setIsOpen(false);
      return;
    }
    
    // 获取当前路径并替换语言部分
    const pathParts = pathname.split('/');
    if (pathParts.length > 1) {
      if (locales.includes(pathParts[1])) {
        pathParts[1] = langCode;
      } else {
        pathParts.splice(1, 0, langCode);
      }
    } else {
      pathParts.push(langCode);
    }
    
    const newPath = pathParts.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLang = getCurrentLanguage();

  return (
    <SwitcherContainer ref={dropdownRef}>
      <CurrentLanguage onClick={() => setIsOpen(!isOpen)}>
        <LanguageIcon>{currentLang.icon}</LanguageIcon>
        <LanguageName>{currentLang.name}</LanguageName>
        <ChevronIcon $isOpen={isOpen}>▼</ChevronIcon>
      </CurrentLanguage>

      <DropdownContainer $isOpen={isOpen}>
        {/* 主要语言组 */}
        <LanguageGroup>
          <GroupTitle>Languages</GroupTitle>
          {Object.keys(languageMap).map(langCode => (
            <LanguageOption
              key={langCode}
              $isActive={langCode === locale}
              onClick={() => switchLanguage(langCode)}
            >
              <LanguageIcon>{languageMap[langCode]?.icon || '🌐'}</LanguageIcon>
              {languageMap[langCode]?.local || langCode}
            </LanguageOption>
          ))}
        </LanguageGroup>
      </DropdownContainer>
    </SwitcherContainer>
  );
} 