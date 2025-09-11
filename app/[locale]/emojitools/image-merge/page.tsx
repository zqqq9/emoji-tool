'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useTranslations } from 'next-intl';

const Container = styled.div`
  max-width: 900px;
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
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  max-width: 680px;
  margin: 0 auto 2rem;
  
  .dark & {
    color: #aaa;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.25rem;
  
  .dark & {
    background: #222;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DropArea = styled.label<{ $hasFile: boolean }>`
  border: 2px dashed ${props => (props.$hasFile ? '#6e8efb' : '#ddd')};
  border-radius: 12px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: ${props => (props.$hasFile ? 'rgba(110, 142, 251, 0.06)' : 'transparent')};
  transition: border-color 0.2s, background 0.2s;
  
  &:hover {
    border-color: #6e8efb;
  }
  
  .dark & {
    border-color: ${props => (props.$hasFile ? '#6e8efb' : '#444')};
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const Hint = styled.div`
  color: #888;
  text-align: center;
  padding: 0 1rem;
  
  .dark & {
    color: #bbb;
  }
`;

const PreviewImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const Button = styled.button<{ $primary?: boolean }>`
  background: ${props => (props.$primary ? 'linear-gradient(90deg, #6e8efb, #a777e3)' : 'transparent')};
  color: ${props => (props.$primary ? 'white' : '#6e8efb')};
  border: ${props => (props.$primary ? 'none' : '1px solid #6e8efb')};
  border-radius: 10px;
  padding: 0.65rem 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s, background 0.2s;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type FileState = {
  file: File | null;
  previewUrl: string | null;
};

export default function ImageMergePage() {
  const [left, setLeft] = useState<FileState>({ file: null, previewUrl: null });
  const [right, setRight] = useState<FileState>({ file: null, previewUrl: null });
  const [isMerging, setIsMerging] = useState(false);

  let title = 'Image Merge to Emoji';
  let subtitle = '上传两张图片，预览后点击合成，生成一个新的表情。此步骤仅搭建页面，稍后接入 API。';
  let uploadHintLeft = '点击或拖拽上传图片 A (PNG/JPG)';
  let uploadHintRight = '点击或拖拽上传图片 B (PNG/JPG)';
  let mergeButton = '合成表情';
  let resetButton = '重置';

  try {
    const t = useTranslations('ImageMerge');
    title = t('title');
    subtitle = t('subtitle');
    uploadHintLeft = t('uploadHintLeft');
    uploadHintRight = t('uploadHintRight');
    mergeButton = t('mergeButton');
    resetButton = t('resetButton');
  } catch (error) {
    // fallback texts
  }

  useEffect(() => {
    return () => {
      if (left.previewUrl) URL.revokeObjectURL(left.previewUrl);
      if (right.previewUrl) URL.revokeObjectURL(right.previewUrl);
    };
  }, [left.previewUrl, right.previewUrl]);

  const canMerge = useMemo(() => !!left.file && !!right.file && !isMerging, [left.file, right.file, isMerging]);

  const onPick = (side: 'left' | 'right') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    if (side === 'left') {
      if (left.previewUrl) URL.revokeObjectURL(left.previewUrl);
      setLeft({ file, previewUrl: url });
    } else {
      if (right.previewUrl) URL.revokeObjectURL(right.previewUrl);
      setRight({ file, previewUrl: url });
    }
  };

  const onReset = () => {
    if (left.previewUrl) URL.revokeObjectURL(left.previewUrl);
    if (right.previewUrl) URL.revokeObjectURL(right.previewUrl);
    setLeft({ file: null, previewUrl: null });
    setRight({ file: null, previewUrl: null });
  };

  const onMerge = async () => {
    if (!canMerge) return;
    setIsMerging(true);
    // 后续步骤：接入与“文生表情”相同的 API 封装（src/api/index.ts）
    // 这里先占位，完成页面结构。
    try {
      await new Promise((r) => setTimeout(r, 600));
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <Container>
      <Title>
        <span>Image</span> Merge
      </Title>
      <Subtitle>{subtitle}</Subtitle>

      <Card>
        <Grid>
          <DropArea $hasFile={!!left.previewUrl} htmlFor="left-input">
            {left.previewUrl ? (
              <PreviewImg src={left.previewUrl} alt="preview-left" />
            ) : (
              <Hint>{uploadHintLeft}</Hint>
            )}
            <HiddenFileInput id="left-input" type="file" accept="image/*" onChange={onPick('left')} />
          </DropArea>
          <DropArea $hasFile={!!right.previewUrl} htmlFor="right-input">
            {right.previewUrl ? (
              <PreviewImg src={right.previewUrl} alt="preview-right" />
            ) : (
              <Hint>{uploadHintRight}</Hint>
            )}
            <HiddenFileInput id="right-input" type="file" accept="image/*" onChange={onPick('right')} />
          </DropArea>
        </Grid>

        <Actions>
          <Button onClick={onReset} disabled={isMerging}>{resetButton}</Button>
          <Button $primary onClick={onMerge} disabled={!canMerge}>
            {isMerging ? '合成中…' : mergeButton}
          </Button>
        </Actions>
      </Card>
    </Container>
  );
}


