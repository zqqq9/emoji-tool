'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
  .dark & {
    background-color: rgba(17, 17, 17, 0.8);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: #333;
  
  .dark & {
    color: #f0f0f0;
  }
`;

const Logo = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const LogoText = styled.span`
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${props => props.$active ? '#6e8efb' : '#666'};
  font-weight: ${props => props.$active ? '600' : '500'};
  font-size: 0.95rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: #6e8efb;
  }
  
  .dark & {
    color: ${props => props.$active ? '#a777e3' : '#ccc'};
    
    &:hover {
      color: #a777e3;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  // 获取翻译
  const t = useTranslations('Navbar');
  
  // 当页面滚动时改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 根据路径获取当前的语言代码
  const getLocale = () => {
    const pathParts = pathname?.split('/') || [];
    return pathParts[1] || 'en';
  };
  
  const currentLocale = getLocale();
  
  // 检查链接是否处于活动状态
  const isActive = (path: string) => {
    const pathWithoutLocale = pathname?.split('/').slice(2).join('/') || '';
    return pathWithoutLocale === path;
  };
  
  return (
    <NavbarContainer style={{
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '',
      backgroundColor: scrolled ? 'white' : '',
    }}>
      <NavbarContent>
        <LogoContainer>
          <Logo>🧩</Logo>
          <LogoText>AI Emoji</LogoText>
        </LogoContainer>
        
        <NavLinks>
          <NavLink href={`/${currentLocale}`} $active={isActive('')}>
            {t('home')}
          </NavLink>
          <NavLink href={`/${currentLocale}/blog`} $active={isActive('blog')}>
            {t('blog')}
          </NavLink>
          <NavLink href={`/${currentLocale}/about`} $active={isActive('about')}>
            {t('about')}
          </NavLink>
        </NavLinks>
        
        <NavActions>
          <LanguageSwitcher />
        </NavActions>
      </NavbarContent>
    </NavbarContainer>
  );
} 