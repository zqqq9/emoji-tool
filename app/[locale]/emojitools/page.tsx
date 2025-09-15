'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    background: linear-gradient(90deg, #6e8efb, #a777e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  
  .dark & {
    color: #aaa;
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ToolCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  .dark & {
    background: #222;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    
    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
    }
  }
`;

const ToolImage = styled.div`
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ToolContent = styled.div`
  padding: 1.5rem;
`;

const ToolTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
  
  .dark & {
    color: #f0f0f0;
  }
`;

const ToolDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
  
  .dark & {
    color: #aaa;
  }
`;

const ToolButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  color: white;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

// Mock data for emoji tools
const emojiTools = [
  {
    id: 'emoji-generator',
    title: 'Emoji Generator',
    description: 'Create custom emojis with AI. Type your idea and generate unique images.',
    imageUrl: '/images/emoji-generator.png',
    link: '/'
  },
  // {
  //   id: 'emoji-mixer',
  //   title: 'Emoji Mixer',
  //   description: 'Combine two emojis to create a new unique emoji with AI technology.',
  //   imageUrl: '/images/emoji-mixer.png',
  //   link: '/emojitools/mixer'
  // },
  // {
  //   id: 'emoji-animator',
  //   title: 'Emoji Animator',
  //   description: 'Create animated emojis with simple controls. Add movement to your expressions.',
  //   imageUrl: '/images/emoji-animator.png',
  //   link: '/emojitools/animator'
  // },
  // {
  //   id: 'emoji-converter',
  //   title: 'Emoji Converter',
  //   description: 'Convert your photos into emoji-style images with AI enhancement.',
  //   imageUrl: '/images/emoji-converter.png',
  //   link: '/emojitools/converter'
  // },
  {
    id: 'text-to-emoji',
    title: 'Text to Emoji',
    description: 'Type any text and see it translated into emojis. No text in responses, just pure emoji expression.',
    imageUrl: '/images/text-to-emoji.png',
    link: '/emojitools/text-to-emoji'
  },
  {
    id: 'emoji-chat',
    title: 'Emoji Chat',
    description: 'Ask any question and get answers using only emojis. AI responds with emoji-only expressions.',
    imageUrl: '/images/emoji-chat-image.png',
    link: '/emojitools/emoji-chat'
  },
  {
    id: 'image-merge',
    title: 'Image Merge',
    description: 'Upload two images and merge them into a new emoji-style image.',
    imageUrl: '/images/emoji-generator.png',
    link: '/emojitools/image-merge'
  },
  {
    id: 'image-to-video',
    title: 'Image to Video',
    description: 'Upload one face (person/animal) and make it move into a short video.',
    imageUrl: '/images/emoji-generator.png',
    link: '/emojitools/image-to-video'
  }
];

export default function EmojiToolsPage() {
  // Try to get translations, but provide fallbacks if they don't exist
  let title = 'Emoji';
  let subtitle = 'Tools';
  let description = 'Discover our collection of AI-powered emoji tools to create, customize, and have fun with emojis.';
  let tryButton = 'Try Now';
  
  try {
    const t = useTranslations('EmojiTools');
    title = t('title');
    subtitle = t('subtitle');
    description = t('description');
    tryButton = t('tryButton');
  } catch (error) {
    console.error('Translation not found for EmojiTools, using fallbacks');
  }
  
  return (
    <Container>
      <Title>
        <span>{title}</span> {subtitle}
      </Title>
      <Subtitle>
        {description}
      </Subtitle>
      
      <ToolsGrid>
        {emojiTools.map((tool) => (
          <ToolCard key={tool.id}>
            <ToolImage style={{ 
              backgroundImage: `url(${tool.imageUrl})`,
              backgroundColor: '#f5f5f5' // Fallback if image doesn't load
            }} />
            <ToolContent>
              <ToolTitle>{tool.title}</ToolTitle>
              <ToolDescription>{tool.description}</ToolDescription>
              <ToolButton href={tool.link}>{tryButton}</ToolButton>
            </ToolContent>
          </ToolCard>
        ))}
      </ToolsGrid>
    </Container>
  );
} 