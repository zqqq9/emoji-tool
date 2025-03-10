'use client';

import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f9f9ff, #ffffff);
  
  .dark & {
    background: linear-gradient(to bottom, #111, #1a1a1a);
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #333;
  
  span {
    background: linear-gradient(90deg, #6e8efb, #a777e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .dark & {
    color: #f0f0f0;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #444;
  
  .dark & {
    color: #e0e0e0;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 1.5rem;
  
  .dark & {
    color: #ccc;
  }
`;

// 国际化About页面
export default function AboutPage() {
  // 使用翻译钩子获取翻译内容
  const t = useTranslations('About');
  
  return (
    <Container>
      <Content>
        <Title>{t('title')} <span>AI Emoji Generator</span></Title>
        
        <Section>
          <Heading>{t('mission.title')}</Heading>
          <Paragraph>
            {t('mission.paragraph1')}
          </Paragraph>
          <Paragraph>
            {t('mission.paragraph2')}
          </Paragraph>
        </Section>
        
        <Section>
          <Heading>{t('howItWorks.title')}</Heading>
          <Paragraph>
            {t('howItWorks.paragraph1')}
          </Paragraph>
          <Paragraph>
            {t('howItWorks.paragraph2')}
          </Paragraph>
        </Section>
        
        <Section>
          <Heading>{t('noAccount.title')}</Heading>
          <Paragraph>
            {t('noAccount.paragraph1')}
          </Paragraph>
          <Paragraph>
            {t('noAccount.paragraph2')}
          </Paragraph>
        </Section>
      </Content>
    </Container>
  );
} 