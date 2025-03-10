'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { blogPosts } from '../blogData';

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 4rem 2rem;
  background: linear-gradient(to bottom, #f9f9ff, #ffffff);
  
  .dark & {
    background: linear-gradient(to bottom, #111, #1a1a1a);
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #333;
  
  .dark & {
    color: #f0f0f0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  color: #666;
  
  .dark & {
    color: #aaa;
  }
`;

const MetaItem = styled.span`
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  .dark & {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const BlogContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  
  .dark & {
    color: #ddd;
  }
  
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
    color: #333;
    
    .dark & {
      color: #f0f0f0;
    }
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #444;
    
    .dark & {
      color: #e0e0e0;
    }
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  strong {
    font-weight: 600;
    color: #333;
    
    .dark & {
      color: #f0f0f0;
    }
  }
  
  blockquote {
    border-left: 4px solid #6e8efb;
    padding-left: 1rem;
    margin-left: 0;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #555;
    
    .dark & {
      color: #bbb;
    }
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #6e8efb;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: #a777e3;
  }
  
  .dark & {
    color: #a777e3;
    
    &:hover {
      color: #6e8efb;
    }
  }
`;

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const t = useTranslations('Blog');
  
  // 获取当前的locale
  const locale = params.locale as string;
  
  // 获取博客文章数据
  const post = blogPosts[slug];
  
  if (!post) {
    return (
      <Container>
        <Content>
          <BackLink href={`/${locale}/blog`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            {t('backToBlog')}
          </BackLink>
          <Title>Blog post not found</Title>
        </Content>
      </Container>
    );
  }
  
  return (
    <Container>
      <Content>
        <BackLink href={`/${locale}/blog`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {t('backToBlog')}
        </BackLink>
        
        <Title>{post.title}</Title>
        
        <Meta>
          <MetaItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            {post.date}
          </MetaItem>
          <MetaItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            {post.author}
          </MetaItem>
          <MetaItem>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            {post.readTime}
          </MetaItem>
        </Meta>
        
        <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
        
        <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content>
    </Container>
  );
} 