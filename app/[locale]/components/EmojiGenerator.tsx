// 表情符号生成器组件
'use client';

import { useState, forwardRef, useImperativeHandle } from 'react';
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

const StyleIcon = styled.div<{ styleName: string }>`
  width: 24px;
  height: 24px;
  background-image: ${props => {
    switch(props.styleName) {
      case 'cartoon': return 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath fill=\'%236e8efb\' d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm5-3c-.83 0-1.5.67-1.5 1.5S11.17 11 12 11s1.5-.67 1.5-1.5S12.83 8 12 8zm5 3c.83 0 1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5z\'/%3E%3C/svg%3E")';
      case 'pixel': return 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath fill=\'%236e8efb\' d=\'M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z\'/%3E%3C/svg%3E")';
      case 'watercolor': return 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath fill=\'%236e8efb\' d=\'M7.73 11.93C7.73 13.65 7.73 15.22 5.94 16.3c.47.42 1.08.69 1.73.69 1.59 0 2.81-1.28 2.81-2.85 0-1.59-1.21-2.84-2.75-2.84zM11.5 1A8.5 8.5 0 0 0 3 9.5a8.4 8.4 0 0 0 .91 3.82 9.57 9.57 0 0 0 .41 3.43c.21.58.75 1.17 1.45 1.53.85-1.13 1.03-2.83 1.03-4.4 0-5.39 2.59-5.44 2.59-5.85 0-.29-.09-.54-.21-.77.27-.14.55-.26.84-.37.45.26.84.71.84 1.12 0 .85-1.05 1.11-1.16 1.76-.15.92.68 1.41 1.04 1.94.36.52.28 1.11.21 1.29-.28.69.05 1.41.68 1.75.65.33 1.49.25 1.98-.63.21-.39.31-.94.12-1.5-.11-.34-.28-.56-.32-.56-.08-.12-.16-.18-.22-.25-.12-.12-.2-.27-.2-.45 0-.05 0-.11.03-.18.71-.15 1.43-.47 1.95-.94.05-.05.12-.1.2-.16.4-.35.8-.83 1.17-1.39.25.25.54.48.86.68a2.9 2.9 0 0 1 .83 3.56c-.19.4-.52.74-.94.93l.38.09c.57 0 1.08-.17 1.56-.47.85-.47 1.43-1.34 1.48-2.26.06-1.03-.39-1.99-1.13-2.65-.25-.21-.86-.53-.86-.53.23-.38.4-.8.5-1.25.1.19.22.38.36.56.32.42.7.79 1.14 1.1.22.15.47.27.73.36.82.27 1.92.32 2.76.06.15-.04.29-.1.44-.17.14-.7.25-.14.37-.22.35-.22.69-.5.97-.81.27-.3.49-.63.67-.99.14-.27.24-.55.32-.84.21-.74.3-1.54.17-2.33-.13-.77-.45-1.53-.86-2.18-.86-1.36-2.2-2.33-3.71-2.87-.43-.16-.88-.27-1.33-.37-.47-.1-.95-.16-1.44-.21-.51-.05-1.03-.08-1.55-.08z\'/%3E%3C/svg%3E")';
      case 'sketch': return 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath fill=\'%236e8efb\' d=\'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z\'/%3E%3C/svg%3E")';
      case 'threeD': return 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath fill=\'%236e8efb\' d=\'M12.04 8.04h-.09l-1.6 5.11h3.29l-1.6-5.11zM3 9h.09l1.6 5.11H1.3L3 9zm18 0h.09l1.6 5.11h-3.29L21 9zM19.81 4H4.19C3 4 2 5 2 6.19v11.62C2 19 3 20 4.19 20h15.62c1.19 0 2.19-1 2.19-2.19V6.19C22 5 21 4 19.81 4zm-5.77 12.61c-.28.9-1.1 1.39-2.04 1.39H4.81L7.89 9H9.5l1.69 5.39h2.08L15 9h1.42l3.27 9h-5.16c-.95 0-1.77-.49-2.05-1.39h-.04z\'/%3E%3C/svg%3E")';
      case 'realistic': return 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' width=\'24\' height=\'24\'%3E%3Cpath fill=\'%236e8efb\' d=\'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\'/%3E%3C/svg%3E")';
      default: return 'none';
    }
  }};
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
              <StyleIcon styleName={style.id} />
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
        </ResultSection>
      )}
    </Container>
  );
});

// 添加组件名称，方便调试
EmojiGenerator.displayName = 'EmojiGenerator';

export default EmojiGenerator; 