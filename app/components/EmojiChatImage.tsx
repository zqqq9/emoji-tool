'use client';

import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  position: relative;
  overflow: hidden;
`;

const EmojiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  transform: rotate(-5deg);
`;

const EmojiItem = styled.div`
  font-size: 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ChatBubble = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: white;
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 1.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  &:before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 15px;
    width: 20px;
    height: 20px;
    background: white;
    transform: rotate(45deg);
    z-index: -1;
  }
`;

export default function EmojiChatImage() {
  return (
    <ImageContainer>
      <EmojiGrid>
        <EmojiItem>😊</EmojiItem>
        <EmojiItem>🎉</EmojiItem>
        <EmojiItem>👍</EmojiItem>
        <EmojiItem>❤️</EmojiItem>
        <EmojiItem>🤔</EmojiItem>
        <EmojiItem>🌟</EmojiItem>
        <EmojiItem>🚀</EmojiItem>
        <EmojiItem>🔥</EmojiItem>
        <EmojiItem>✨</EmojiItem>
      </EmojiGrid>
      <ChatBubble>
        💬 🙋‍♂️ 🤖
      </ChatBubble>
    </ImageContainer>
  );
} 