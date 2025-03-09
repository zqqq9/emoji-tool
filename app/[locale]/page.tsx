'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import EmojiGenerator, { EmojiGeneratorRef } from './components/EmojiGenerator';
import styled from 'styled-components';

// 样式定义
const Hero = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  padding: 4rem 2rem;
  border-radius: 0 0 2rem 2rem;
  margin-bottom: 3rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  opacity: 0.9;
`;

const FeatureSection = styled.section`
  margin: 4rem 0;
`;

const FeatureTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  
  span {
    background: linear-gradient(90deg, #6e8efb, #a777e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const FeatureCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureCardText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const HowSection = styled.section`
  background: #f8f9fa;
  padding: 4rem 2rem;
  border-radius: 2rem;
  margin: 4rem auto;
  max-width: 1200px;
`;

const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const StepText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const ExampleSection = styled.section`
  margin: 4rem auto;
  max-width: 1200px;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 3rem auto;
  }
  
  @media (max-width: 480px) {
    margin: 2rem auto;
  }
`;

const ExampleGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
`;

const ExampleTag = styled.button`
  background: #f0f2ff;
  border: 1px solid #e0e4ff;
  color: #5367e0;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0.25rem;
  
  &:hover {
    background: #e0e4ff;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  border-top: 1px solid #eee;
  margin-top: 4rem;
  color: #888;
`;

export default function Home() {
  const t = useTranslations('Home');
  const generatorRef = useRef<EmojiGeneratorRef>(null);
  
  const examplePrompts = [
    'Happy cat ',
    'Dancing Pizza ',
    'Angry Crocodile ',
    'Rainbow Unicorn ',
    'Crying clouds',
    'Dinosaur Astronaut ',
    'Cactus with sunglasses',
    'Sneezing Volcano'
  ];
  
  const handleExampleClick = (example: string) => {
    // 平滑滚动到生成器
    const generator = document.getElementById('emoji-generator');
    if (generator) {
      generator.scrollIntoView({ behavior: 'smooth' });
    }
    
    // 设置输入文本
    setTimeout(() => {
      if (generatorRef.current) {
        generatorRef.current.setInputText(example);
      }
    }, 500);
  };
  
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Hero>
        <HeroContent>
          <HeroTitle>{t('title')}</HeroTitle>
          <HeroSubtitle>{t('subtitle')}</HeroSubtitle>
        </HeroContent>
      </Hero>

      <div className="container mx-auto px-4">
        <div id="emoji-generator">
          <EmojiGenerator ref={generatorRef} />
        </div>

        
        <ExampleSection>
          <FeatureTitle>
            <span>{t('examples.title').split(' ')[0]}</span> {t('examples.title').split(' ').slice(1).join(' ')}
          </FeatureTitle>
          <ExampleGrid>
            {examplePrompts.map((prompt, index) => (
              <ExampleTag 
                key={index} 
                onClick={() => handleExampleClick(prompt)}
              >
                {prompt}
              </ExampleTag>
            ))}
          </ExampleGrid>
        </ExampleSection>
        
        <FeatureSection>
          <FeatureTitle>
            <span>{t('features.title').split(' ')[0]}</span> {t('features.title').split(' ').slice(1).join(' ')}
          </FeatureTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </FeatureIcon>
              <FeatureCardTitle>{t('features.instant.title')}</FeatureCardTitle>
              <FeatureCardText>
                {t('features.instant.description')}
              </FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </FeatureIcon>
              <FeatureCardTitle>{t('features.quality.title')}</FeatureCardTitle>
              <FeatureCardText>
                {t('features.quality.description')}
              </FeatureCardText>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </FeatureIcon>
              <FeatureCardTitle>{t('features.limitless.title')}</FeatureCardTitle>
              <FeatureCardText>
                {t('features.limitless.description')}
              </FeatureCardText>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        
        <HowSection>
          <FeatureTitle>
            <span>{t('howToUse.title').split(' ')[0]}</span> {t('howToUse.title').split(' ').slice(1).join(' ')}
          </FeatureTitle>
          <StepGrid>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepTitle>{t('howToUse.step1.title')}</StepTitle>
              <StepText>
                {t('howToUse.step1.description')}
              </StepText>
            </StepCard>
            
            <StepCard>
              <StepNumber>2</StepNumber>
              <StepTitle>{t('howToUse.step2.title')}</StepTitle>
              <StepText>
                {t('howToUse.step2.description')}
              </StepText>
            </StepCard>
            
            <StepCard>
              <StepNumber>3</StepNumber>
              <StepTitle>{t('howToUse.step3.title')}</StepTitle>
              <StepText>
                {t('howToUse.step3.description')}
              </StepText>
            </StepCard>
          </StepGrid>
        </HowSection>
        
        
        <Footer>
          <p>© {new Date().getFullYear()} AI Emoji Generator | Powered by AI</p>
          <p className="mt-2 text-sm">Using advanced intelligent spectrum AI technology to create</p>
        </Footer>
      </div>
    </main>
  );
} 