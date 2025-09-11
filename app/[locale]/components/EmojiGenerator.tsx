// 表情符号生成器组件
'use client';

import { useState, forwardRef, useImperativeHandle } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

// 样式定义
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  background: white;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 8px;
    width: 100%;
    background: linear-gradient(90deg, #6e8efb, #a777e3);
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  span {
    background: linear-gradient(90deg, #6e8efb, #a777e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyleSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const StyleButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.2rem;
  border-radius: 2rem;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.active ? 'linear-gradient(90deg, #6e8efb, #a777e3)' : '#f5f7fa'};
  color: ${props => props.active ? 'white' : '#333'};
  box-shadow: ${props => props.active ? '0 4px 12px rgba(167, 119, 227, 0.3)' : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(167, 119, 227, 0.2);
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #eaecef;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
  box-sizing: border-box;
  
  &:focus {
    border-color: #a777e3;
    outline: none;
    box-shadow: 0 0 0 3px rgba(167, 119, 227, 0.1);
  }
  
  &::placeholder {
    color: #c0c4cc;
  }
  
  &:disabled {
    background-color: #f5f7fa;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const Button = styled.button`
  flex: 1;
  padding: 1rem 1.5rem;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(167, 119, 227, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(167, 119, 227, 0.4);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(167, 119, 227, 0.25);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ExamplesSection = styled.div`
  margin-top: 1.5rem;
`;

const ExamplesTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.75rem;
  text-align: center;
`;

const ExampleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`;

const ExampleTag = styled.button`
  padding: 0.4rem 0.8rem;
  background: #f0f2ff;
  border: 1px solid #e0e4ff;
  color: #5367e0;
  border-radius: 2rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0.25rem;
  
  &:hover {
    background: #e0e4ff;
    transform: translateY(-1px);
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;

const ResultSection = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  border: 1px solid #eee;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    border-radius: 12px;
  }
`;

const GeneratedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const LoadingIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(167, 119, 227, 0.1);
  border-radius: 50%;
  border-top-color: #a777e3;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  color: #666;
  font-size: 1rem;
  font-weight: 500;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: white;
  border: 1px solid #eaecef;
  border-radius: 12px;
  color: #333;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.25rem;
  
  &:hover {
    background-color: #f5f7fa;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
  
  @media (max-width: 480px) {
    flex: 1;
    justify-content: center;
    min-width: 140px;
  }
`;

const RecommendSection = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const RecommendTitle = styled.p`
  color: #666;
  font-size: 0.95rem;
`;

const RecommendButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecommendLink = styled.a`
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  background: rgba(110, 142, 251, 0.08);
  color: #4a5bd4;
  border: 1px solid rgba(110, 142, 251, 0.25);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(110, 142, 251, 0.12);
    box-shadow: 0 6px 16px rgba(110, 142, 251, 0.2);
  }
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem 1.2rem;
  background-color: #fff2f2;
  color: #e53935;
  border-radius: 12px;
  font-size: 0.9rem;
  border-left: 4px solid #e53935;
`;

// 添加新的样式组件用于背景颜色和艺术风格选择
const CustomizeSection = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const CustomizeTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.75rem;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

const ColorOption = styled.button<{ active: boolean; colorPreview: string }>`
  position: relative;
  height: 48px;
  border-radius: 8px;
  border: 2px solid ${props => props.active ? '#6e8efb' : 'transparent'};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  background: ${props => props.colorPreview};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.colorPreview === '#FFFFFF' ? '#333' : props.colorPreview === '#000000' ? '#FFF' : '#FFF'};
  font-size: 0.8rem;
  font-weight: ${props => props.active ? '600' : '400'};
  box-shadow: ${props => props.active ? '0 4px 12px rgba(110, 142, 251, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.05)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const StyleOption = styled.div<{ active: boolean }>`
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  border: 2px solid ${props => props.active ? '#6e8efb' : '#eaecef'};
  background: ${props => props.active ? 'rgba(110, 142, 251, 0.05)' : 'white'};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const StyleIcon = styled.div<{ $styleName: string }>`
  width: 28px;
  height: 28px;
  margin-right: 8px;
  ${props => {
    switch(props.$styleName) {
      case 'cartoon':
        return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M7 4.5C7 3.12 8.12 2 9.5 2S12 3.12 12 4.5v.5H7v-.5m1 .5v-.5c0-.28.22-.5.5-.5s.5.22.5.5V5H8m4-2c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m1 9c0-.28.22-.5.5-.5s.5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5m6-7.5l-6 2.5v2.34c.86.22 1.5 1 1.5 1.91c0 .17-.03.33-.08.5H20c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2s-2 .89-2 2v.5m-9.5 5c-.83 0-1.5.67-1.5 1.5S9.67 14 10.5 14s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m-.74-.53c-.17-.2-.26-.47-.26-.72c0-.18.05-.34.12-.5H4c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h11.41l-4.12-4.12c-1.54-1.54-2.44-3.65-2.53-5.88Z'/%3E%3C/svg%3E");`;
      case 'pixel':
        return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M8 2h8v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h-2v2h-2v-2H8v2H6v-2h2v-2H6v-2h2v-2H6v-2h2v-2H6V8h2V6H6V4h2V2m6 2h-4v2h4V4m-4 4v2h4V8h-4m0 4v2h4v-2h-4m0 4v2h4v-2h-4Z'/%3E%3C/svg%3E");`;
      case 'watercolor':
        return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='m7 14c-1.66 0-3 1.34-3 3c0 1.31-1.16 2-2 2c.92 1.22 2.5 2 4 2c2.21 0 4-1.79 4-4c0-1.66-1.34-3-3-3m11.89-7.9c-1.82-1.21-3.63-.47-4.3.31l-8.01 10.62c.8.34 1.5.82 2.05 1.39L16.3 7.71c.39-.52 1.2-.89 2.29-.22c1.34.83 1.41 1.59 1.41 2.15c0 .56-.11 1.39-1.19 2.7c2.01-.67 3.39-2.73 3.39-4.91c0-.34-.04-1.2-1.31-2.33M9.74 18.33l4.88-6.48c.39-.59.43-1.34.13-1.95c-.3-.65-.92-1.05-1.61-1.05c-.5 0-.89.18-1.19.5c-.29.31-.51.69-.65 1.08c-.14.39-.25.78-.37 1.16l-.11.29c-.09.22-.18.43-.3.63c-.1.2-.23.38-.4.52c-.16.14-.33.21-.51.21c-.62 0-1.12-.77-1.12-1.5c0-1.72 1.28-3.1 3-3.1c1.69 0 2.96 1.15 3.07 2.79c.09.2.65.33.87.47c.36.21.64.49.85.83c.22.35.35.76.37 1.19c0 .18.07.33.33.6c1.43-.44 2.58-1.09 3.49-1.95c-2.36 4.12-5.71 7.23-10.57 7.92l.03-.21c0-.09.04-.19.04-.28c0-.47.09-.89.24-1.29c.15-.39.34-.74.58-1.04c.23-.31.5-.56.8-.74c.3-.18.61-.28.91-.28c.32 0 .59.11.81.31c.23.21.4.51.51.88Z'/%3E%3C/svg%3E");`;
      case 'sketch':
        return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M18.85 10.39c.25.19.35.49.29.8l-1.06 5.42A2.056 2.056 0 0 1 17 18.22a1.93 1.93 0 0 1-1.62-.29L12 15.91l-3.5 2a1.93 1.93 0 0 1-1.62.29c-.49-.12-.92-.44-1.19-.88a1.98 1.98 0 0 1-.19-1.7l.51-1.57l-1.62.5c-.33.1-.64.05-.84-.14a.725.725 0 0 1-.2-.81c.05-.15.13-.28.24-.38L4.85 12l-1.3-.78a.945.945 0 0 1-.24-.34a.729.729 0 0 1 .19-.81c.21-.19.52-.23.84-.14l1.62.51l-.51-1.56c-.18-.56-.13-1.17.13-1.69c.27-.53.75-.89 1.33-1.01c.53-.1 1.09.02 1.53.35L12 9.12l3.38-2.67c.44-.35.99-.5 1.53-.4c.54.1 1.01.41 1.29.86c.32.52.36 1.22.11 1.94l-.33 1.05l1.63-.51c.32-.1.64-.05.84.14a.712.712 0 0 1 .2.8a.777.777 0 0 1-.24.37l-1.3.79M10.04 9.5L7.6 7.53a.939.939 0 0 0-.49-.18c-.22 0-.44.08-.62.23a.94.94 0 0 0-.32.5L5 13.53l1.07-.33c.33-.1.7-.02.96.22l3.01 2.49m2.01 2.52l3.01-2.5c.26-.23.62-.31.95-.21l1.07.33l-1.17-5.46a.945.945 0 0 0-.32-.5a.895.895 0 0 0-.55-.21c-.12 0-.23.03-.34.08'/%3E%3C/svg%3E");`;
      case '3d':
        return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M12 1.38L0 8.31v7.28l12 7.02l12-7.02V8.31l-12-6.93M5 14l2-1.2v-4l4-2.4l4 2.4v4l2 1.2l-6 3.6L5 14m7-12.55l10 5.85L19 9l-10-5.85L7 5L5 6.15L12 1.45m5 10.25l-5 3l-5-3l-2 1.2l7 4.2l7-4.2l-2-1.2Z'/%3E%3C/svg%3E");`;
      case 'realistic':
        return `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M8.5 2C10.7 2 12.5 3.8 12.5 6V8c1.39 0 2.21.53 2.7 1.35c.16.27.3.57.4.9c.8.3.2.61.35.95c.15.35.35.69.65.96c.24.23.53.4.85.5c.84.3 1.47.94 1.85 1.75c.2.45.3.94.3 1.45c0 1.93-1.57 3.5-3.5 3.5c-1.04 0-1.95-.45-2.59-1.16a2.97 2.97 0 0 1-2.92-3.03V8.88c-.43-.09-.88-.14-1.34-.14c-.46 0-.91.05-1.34.14a9.89 9.89 0 0 0-2.25.82c-1.24.63-2.13 1.6-2.53 3.03c-.3 1.02-.26 2.15.02 3.26c.21.81.62 1.66 1.31 2.42c.28.31.59.58.93.84L5.5 20.5c-.31-.22-.61-.47-.88-.75c-1.02-1.06-1.75-2.31-2.14-3.73c-.51-1.86-.37-3.62.16-4.99c.6-1.55 1.64-2.69 2.97-3.38c.55-.28 1.12-.5 1.72-.67C7.84 6.72 8.31 6.65 8.77 6.6l.23-.02V6c0-1.66-1.34-3-3-3H5v-.5h1m3.5 7A1.5 1.5 0 0 1 14.5 10.5a1.5 1.5 0 0 1-3 0a1.5 1.5 0 0 1 1.5-1.5M16.5 16c.28 0 .5-.22.5-.5s-.22-.5-.5-.5s-.5.22-.5.5s.22.5.5.5m-5 1c.55 0 1.11-.12 1.6-.36c.47-.23.9-.56 1.23-.97c.25-.3.43-.64.52-1c.14-.54.11-1.13-.04-1.71a4.6 4.6 0 0 1-.23-.89c-.14-.6-.36-1.23-.85-1.71c-.31-.27-.67-.45-1.14-.53c-.15-.02-.31-.03-.5-.03c-1.53.02-2.34 1.25-2.58 2.49c-.14.74-.07 1.5.26 2.18c.37.78 1.06 1.57 1.98 2.1c.28.16.58.28.88.35c.27.07.55.08.87.08Z'/%3E%3C/svg%3E");`;
      default: 
        return '';
    }
  }}
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyleText = styled.span<{ active: boolean }>`
  font-size: 0.8rem;
  color: ${props => props.active ? '#6e8efb' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
`;

// 导出接口定义，用于ref
export interface EmojiGeneratorRef {
  setInputText: (text: string) => void;
}

// 定义背景色类型
type BackgroundColorType = 'transparent' | 'white' | 'black' | 'colorful' | 'gradient';

// 定义艺术风格类型
type ArtStyleType = 'cartoon' | 'pixel' | 'watercolor' | 'sketch' | 'threeD' | 'realistic';

const EmojiGenerator = forwardRef<EmojiGeneratorRef>((props, ref) => {
  // 使用英语翻译
  const t = useTranslations('EmojiGenerator');
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [style, setStyle] = useState<'emoji' | 'sticker' | 'icon'>('emoji');
  
  // 新增状态 - 背景颜色和艺术风格
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColorType>('transparent');
  const [artStyle, setArtStyle] = useState<ArtStyleType>('cartoon');
  
  // 导出方法给父组件使用
  useImperativeHandle(ref, () => ({
    setInputText: (text: string) => {
      setInputText(text);
    }
  }));
  
  // 背景色选项配置
  const backgroundColors = [
    { id: 'transparent', name: t('transparentBackground'), preview: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'smallGrid\' width=\'10\' height=\'10\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 10 0 L 0 0 0 10\' fill=\'none\' stroke=\'%23E0E0E0\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'white\'/%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23smallGrid)\'/%3E%3C/svg%3E")' },
    { id: 'white', name: t('whiteBackground'), preview: '#FFFFFF' },
    { id: 'black', name: t('blackBackground'), preview: '#000000' },
    { id: 'colorful', name: t('colorfulBackground'), preview: 'linear-gradient(45deg, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%)' },
    { id: 'gradient', name: t('gradientBackground'), preview: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)' },
  ];
  
  // 艺术风格选项配置
  const artStyles = [
    { id: 'cartoon', name: t('cartoonStyle') },
    { id: 'pixel', name: t('pixelStyle') },
    { id: 'watercolor', name: t('watercolorStyle') },
    { id: 'sketch', name: t('sketchStyle') },
    { id: 'threeD', name: t('threeDStyle') },
    { id: 'realistic', name: t('realisticStyle') },
  ];
  
  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    
    try {
      // 调用API生成图像，传递额外的选项参数
      const response = await fetch('/api/generate-emoji', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          style, // 基本风格：emoji, sticker, icon
          backgroundColor, // 背景颜色
          artStyle, // 艺术风格
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || t('errorGenerating'));
      }
      
      // 设置生成的图像URL
      setGeneratedImage(data.imageUrl);
    } catch (err) {
      console.error('Error generating image:', err);
      setError(typeof err === 'string' ? err : (err instanceof Error ? err.message : t('errorGenerating')));
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleDownload = () => {
    if (!generatedImage) return;
    
    // 为URL格式的图像创建下载链接
    fetch(generatedImage)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `ai-emoji-${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      })
      .catch(err => {
        console.error('Error downloading image:', err);
        alert(t('errorCopying'));
      });
  };
  
  const handleCopy = async () => {
    if (!generatedImage) return;
    
    try {
      // 获取图像的blob数据
      const response = await fetch(generatedImage);
      const blob = await response.blob();
      
      // 使用Clipboard API复制图像
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      
      alert(t('copiedToClipboard'));
    } catch (err) {
      console.error('Failed to copy image:', err);
      alert(t('failedToCopy'));
    }
  };
  
  const examples = {
    emoji: [t('exampleEmoji1'), t('exampleEmoji2'), t('exampleEmoji3')],
    sticker: [t('exampleSticker1'), t('exampleSticker2'), t('exampleSticker3')],
    icon: [t('exampleIcon1'), t('exampleIcon2'), t('exampleIcon3')]
  };
  
  const handleExampleClick = (example: string) => {
    setInputText(example);
  };
  
  return (
    <Container>
      <Title>
        <span>AI</span> {t('title')}
      </Title>
      
      <StyleSelector>
        <StyleButton 
          active={style === 'emoji'} 
          onClick={() => setStyle('emoji')}
        >
          {t('categoryEmoji')}
        </StyleButton>
        <StyleButton 
          active={style === 'sticker'} 
          onClick={() => setStyle('sticker')}
        >
          {t('categorySticker')}
        </StyleButton>
        <StyleButton 
          active={style === 'icon'} 
          onClick={() => setStyle('icon')}
        >
          {t('categoryIcon')}
        </StyleButton>
      </StyleSelector>
      
      {/* 添加背景色和艺术风格选择部分 */}
      <CustomizeSection>
        <CustomizeTitle>{t('customizeTitle')}</CustomizeTitle>
        
        {/* 背景颜色选择 */}
        <CustomizeTitle>{t('backgroundColorTitle')}</CustomizeTitle>
        <OptionGrid>
          {backgroundColors.map((color) => (
            <ColorOption
              key={color.id}
              active={backgroundColor === color.id as BackgroundColorType}
              colorPreview={color.preview}
              onClick={() => setBackgroundColor(color.id as BackgroundColorType)}
            >
              {color.name}
            </ColorOption>
          ))}
        </OptionGrid>
        
        {/* 艺术风格选择 */}
        <CustomizeTitle>{t('artStyleTitle')}</CustomizeTitle>
        <OptionGrid>
          {artStyles.map((style) => (
            <StyleOption
              key={style.id}
              active={artStyle === style.id as ArtStyleType}
              onClick={() => setArtStyle(style.id as ArtStyleType)}
            >
              <StyleIcon $styleName={style.id} />
              <StyleText active={artStyle === style.id as ArtStyleType}>
                {style.name}
              </StyleText>
            </StyleOption>
          ))}
        </OptionGrid>
      </CustomizeSection>
      
      <InputContainer>
        <Input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t('inputPlaceholder')}
          disabled={isLoading}
        />
      </InputContainer>
      
      <ButtonGroup>
        <Button 
          onClick={handleGenerate} 
          disabled={isLoading || !inputText.trim()}
        >
          {isLoading ? t('generating') : t('generateButton')}
        </Button>
      </ButtonGroup>
      
      <ExamplesSection>
        <ExamplesTitle>{t('tryExample')}</ExamplesTitle>
        <ExampleTags>
          {examples[style].map((example, index) => (
            <ExampleTag 
              key={index} 
              onClick={() => handleExampleClick(example)}
            >
              {example}
            </ExampleTag>
          ))}
        </ExampleTags>
      </ExamplesSection>
      
      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
      
      {(isLoading || generatedImage) && (
        <ResultSection>
          <ImageContainer>
            {isLoading ? (
              <LoadingIndicator>
                <Spinner />
                <LoadingText>{t('loadingMessage')}</LoadingText>
              </LoadingIndicator>
            ) : generatedImage ? (
              <GeneratedImage src={generatedImage} alt="Generated emoji" />
            ) : null}
          </ImageContainer>
          
          {generatedImage && (
            <ActionButtons>
              <ActionButton onClick={handleCopy}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                {t('copyButton')}
              </ActionButton>
              <ActionButton onClick={handleDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t('downloadButton')}
              </ActionButton>
            </ActionButtons>
          )}

          {generatedImage && (() => {
            let recommendTitle = 'Looking for more? Try these 👇';
            let linkTextToEmoji = 'Text to Emoji';
            let linkEmojiChat = 'Emoji Chat';
            let linkImageMerge = 'Image Merge';
            try {
              recommendTitle = t('recommend.title');
              linkTextToEmoji = t('recommend.textToEmoji');
              linkEmojiChat = t('recommend.emojiChat');
              linkImageMerge = t('recommend.imageMerge');
            } catch (e) {
              const isZh = typeof navigator !== 'undefined' ? /zh/i.test(navigator.language) || /zh/i.test(locale) : /zh/i.test(locale);
              if (isZh) {
                recommendTitle = '想玩点不一样的？试试这些 👇';
                linkTextToEmoji = '文本转Emoji';
                linkEmojiChat = '表情聊天';
                linkImageMerge = '两图合成表情';
              }
            }
            return (
              <RecommendSection>
                <RecommendTitle>{recommendTitle}</RecommendTitle>
                <RecommendButtons>
                  <RecommendLink href={`/${locale}/emojitools/text-to-emoji`}>{linkTextToEmoji}</RecommendLink>
                  <RecommendLink href={`/${locale}/emojitools/emoji-chat`}>{linkEmojiChat}</RecommendLink>
                  <RecommendLink href={`/${locale}/emojitools/image-merge`}>{linkImageMerge}</RecommendLink>
                </RecommendButtons>
              </RecommendSection>
            );
          })()}
        </ResultSection>
      )}
    </Container>
  );
});

// 添加组件名称，方便调试
EmojiGenerator.displayName = 'EmojiGenerator';

export default EmojiGenerator; 