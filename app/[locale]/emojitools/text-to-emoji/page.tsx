'use client';

import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import { callGLM4Api } from '@/app/utils/glm4Api';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
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
  max-width: 600px;
  margin: 0 auto 2rem;
  
  .dark & {
    color: #aaa;
  }
`;

const ChatContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 500px;
  
  .dark & {
    background: #222;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.div<{ $isUser: boolean }>`
  max-width: 80%;
  padding: 0.8rem 1.2rem;
  border-radius: 18px;
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  background: ${props => props.$isUser ? '#6e8efb' : '#f0f0f0'};
  color: ${props => props.$isUser ? 'white' : '#333'};
  font-size: ${props => props.$isUser ? '1rem' : '1.5rem'};
  
  .dark & {
    background: ${props => props.$isUser ? '#6e8efb' : '#333'};
    color: ${props => props.$isUser ? 'white' : '#f0f0f0'};
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #eee;
  
  .dark & {
    border-top: 1px solid #333;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  
  &:focus {
    border-color: #6e8efb;
  }
  
  .dark & {
    background: #333;
    color: white;
    border-color: #444;
    
    &:focus {
      border-color: #6e8efb;
    }
  }
`;

const SendButton = styled.button`
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0 1.2rem;
  margin-left: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Text to Emoji translator using GLM-4 API
const textToEmoji = async (text: string): Promise<string> => {
  const prompt = `You’re a text - to - emoji translation expert. Translate users’ input text into emojis. Requirements:
Ensure translation logic is reasonable;
Preserve the original meaning of the text without distortion;
Use emojis to accurately convey the content, emotion, and semantic core of the text.

Text to translate: "${text}"

Emoji translation:`;

  try {
    const response = await callGLM4Api(prompt);
    // Clean the response to ensure it only contains emojis and spaces
    const emojiOnlyResponse = response.replace(/[^\p{Emoji}\s]/gu, '').trim();
    return emojiOnlyResponse || '❓'; // Fallback if no emojis are returned
  } catch (error) {
    console.error('Error translating text to emoji:', error);
    return '❌🤖💔'; // Error emojis
  }
};

interface Message {
  text: string;
  isUser: boolean;
}

export default function TextToEmojiPage() {
  const [messages, setMessages] = useState<Message[]>([
    { text: '👋 👨‍💻 🤔 ❓', isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Try to get translations, but provide fallbacks if they don't exist
  let title = 'Text to Emoji';
  let subtitle = 'Type any text and see it translated into emojis. No text in responses, just pure emoji expression.';
  let inputPlaceholder = 'Type your text here...';
  let sendButton = 'Translate';
  
  try {
    const t = useTranslations('TextToEmoji');
    title = t('title');
    subtitle = t('subtitle');
    inputPlaceholder = t('inputPlaceholder');
    sendButton = t('sendButton');
  } catch (error) {
    console.error('Translation not found for TextToEmoji, using fallbacks');
  }
  
  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSend = () => {
    if (input.trim() === '' || isLoading) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    // Set loading state
    setIsLoading(true);
    setMessages(prev => [...prev, { text: '...', isUser: false }]);
    
    // Call the API
    textToEmoji(input)
      .then(emojiResponse => {
        // Remove loading message and add the actual response
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove loading message
          return [...newMessages, { text: emojiResponse, isUser: false }];
        });
      })
      .catch(error => {
        console.error('Error in text to emoji:', error);
        // Remove loading message and add error message
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove loading message
          return [...newMessages, { text: '❌🤖💔', isUser: false }];
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
    
    // Clear input
    setInput('');
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };
  
  return (
    <Container>
      <Title>
        <span>Text to</span> Emoji
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
      
      <ChatContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <Message key={index} $isUser={message.isUser}>
              {message.text}
            </Message>
          ))}
          <div ref={messagesEndRef} />
        </MessagesContainer>
        
        <InputContainer>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={inputPlaceholder}
          />
          <SendButton onClick={handleSend} disabled={input.trim() === '' || isLoading}>
            {isLoading ? '...' : sendButton}
          </SendButton>
        </InputContainer>
      </ChatContainer>
    </Container>
  );
} 