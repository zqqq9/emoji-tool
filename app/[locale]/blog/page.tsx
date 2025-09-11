'use client';

import React from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from './blogData';

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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  .dark & {
    background: #1e1e2a;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    
    &:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }
  }
`;

const BlogImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
    line-height: 1.4;
    
    .dark & {
      color: #f0f0f0;
    }
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 1rem;
  
  .dark & {
    color: #777;
  }
  
  span {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.4rem;
    }
  }
`;

const ReadMoreLink = styled.div`
  display: inline-flex;
  align-items: center;
  color: #6e8efb;
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 1rem;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const ComingSoon = styled.div`
  text-align: center;
  padding: 5rem 2rem;
  font-size: 1.5rem;
  color: #888;
  border: 2px dashed #ddd;
  border-radius: 12px;
  margin: 3rem 0;
  
  .dark & {
    color: #777;
    border-color: #333;
  }
`;

// 特色博客文章（置顶）
const featuredBlogPost = {
  slug: 'revolutionize-your-digital-communication-with-ai-generator',
  imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
};

// 添加特色博客样式
const FeaturedBlog = styled.div`
  margin-bottom: 3rem;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  .dark & {
    background: #1e1e2a;
  }
`;

const FeaturedImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FeaturedContent = styled.div`
  padding: 2rem;
  
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #333;
    
    .dark & {
      color: #f0f0f0;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    
    .dark & {
      color: #bbb;
    }
  }
`;

const FeaturedMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1.5rem;
  
  .dark & {
    color: #777;
  }
  
  span {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
    }
  }
`;

const ReadMoreButton = styled.div`
  display: inline-flex;
  align-items: center;
  color: #6e8efb;
  font-weight: 600;
  font-size: 1rem;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

export default function BlogPage() {
  const t = useTranslations('Blog');
  const params = useParams();
  const locale = params.locale as string;
  
  // Get all blog posts except the featured one
  const otherBlogPosts = Object.entries(blogPosts)
    .filter(([slug]) => slug !== featuredBlogPost.slug)
    .map(([slug, post]) => {
      return [slug, {
        ...post,
        title: (locale === 'zh' && post.title_zh) ? post.title_zh : post.title
      } as typeof post];
    });
  
  return (
    <Container>
      <Content>
        <Title>
          {t('title')} <span>{t('highlight')}</span>
        </Title>
        
        <Link href={`/${locale}/blog/${featuredBlogPost.slug}`} style={{ textDecoration: 'none' }}>
          <FeaturedBlog>
            <FeaturedImage style={{ backgroundImage: `url(${featuredBlogPost.imageUrl})` }}>
              <FeaturedBadge>{t('featured')}</FeaturedBadge>
            </FeaturedImage>
            <FeaturedContent>
              <h2>{blogPosts[featuredBlogPost.slug].title}</h2>
              <FeaturedMeta>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  May 25, 2024
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  5 min read
                </span>
              </FeaturedMeta>
              <p>
                {t('featuredDescription')}
              </p>
              <ReadMoreButton>
                {t('readMore')}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </ReadMoreButton>
            </FeaturedContent>
          </FeaturedBlog>
        </Link>
        
        {otherBlogPosts.length > 0 ? (
          <BlogGrid>
            {otherBlogPosts.map(([slug, post]) => (
              <Link href={`/${locale}/blog/${slug}`} style={{ textDecoration: 'none' }} key={slug}>
                <BlogCard>
                  <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
                  <BlogContent>
                    <h3>{post.title}</h3>
                    <BlogMeta>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {post.date}
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        {post.readTime}
                      </span>
                    </BlogMeta>
                    <ReadMoreLink>
                      {t('readMore')}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </ReadMoreLink>
                  </BlogContent>
                </BlogCard>
              </Link>
            ))}
          </BlogGrid>
        ) : (
          <ComingSoon>
            {t('comingSoon')}
          </ComingSoon>
        )}
      </Content>
    </Container>
  );
} 