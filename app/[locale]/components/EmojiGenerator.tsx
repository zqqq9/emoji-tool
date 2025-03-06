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

// 导出接口定义，用于ref
export interface EmojiGeneratorRef {
  setInputText: (text: string) => void;
}

const EmojiGenerator = forwardRef<EmojiGeneratorRef>((props, ref) => {
  // 使用英语翻译
  const t = useTranslations('EmojiGenerator');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [style, setStyle] = useState<'emoji' | 'sticker' | 'icon'>('emoji');
  
  // 导出方法给父组件使用
  useImperativeHandle(ref, () => ({
    setInputText: (text: string) => {
      setInputText(text);
    }
  }));
  
  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    
    try {
      // 调用API生成图像
      const response = await fetch('/api/generate-emoji', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          style: style
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