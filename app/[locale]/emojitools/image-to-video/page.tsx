'use client';

import { useEffect, useMemo, useState } from 'react';
import { http } from '@/src/api';
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

const DropArea = styled.label<{ $hasFile: boolean }>`
  border: 2px dashed ${props => (props.$hasFile ? '#6e8efb' : '#ddd')};
  border-radius: 12px;
  height: 280px;
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
  margin-top: 0.75rem;
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

const LoadingWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(167, 119, 227, 0.2);
  border-top-color: #a777e3;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;

const LoadingText = styled.div`
  color: #666;
  .dark & { color: #bbb; }
`;

type FileState = {
  file: File | null;
  previewUrl: string | null;
};

export default function ImageToVideoPage() {
  const [image, setImage] = useState<FileState>({ file: null, previewUrl: null });
  const [isProcessing, setIsProcessing] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  let title = 'Image to Video';
  let subtitle = '上传一张人物或动物图片，让它动起来并输出短视频。此步骤先搭建页面，稍后接入 API。';
  let uploadHint = '点击或拖拽上传图片 (人/动物，PNG/JPG)';
  let animateButton = '开始生成视频';
  let resetButton = '重置';
  let loadingText = '视频生成中…';

  try {
    const t = useTranslations('ImageToVideo');
    title = t('title');
    subtitle = t('subtitle');
    uploadHint = t('uploadHint');
    animateButton = t('animateButton');
    resetButton = t('resetButton');
    // 可选
    try { loadingText = t('loading'); } catch {}
  } catch (error) {
    // fallback texts
  }

  useEffect(() => {
    return () => {
      if (image.previewUrl) URL.revokeObjectURL(image.previewUrl);
    };
  }, [image.previewUrl]);

  const canStart = useMemo(() => !!image.file && !isProcessing, [image.file, isProcessing]);

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const url = URL.createObjectURL(file);
    if (image.previewUrl) URL.revokeObjectURL(image.previewUrl);
    setImage({ file, previewUrl: url });
  };

  const onReset = () => {
    if (image.previewUrl) URL.revokeObjectURL(image.previewUrl);
    setImage({ file: null, previewUrl: null });
    setTaskId(null);
    setVideoUrl(null);
  };

  const onAnimate = async () => {
    if (!canStart) return;
    setIsProcessing(true);
    try {
      const form = new FormData();
      if (image.file) form.append('file', image.file);
      form.append('quality', 'speed');
      form.append('with_audio', 'false');
      form.append('duration', '5');

      const resp = await http.post('/api/image-to-video', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const id = resp?.data?.id || resp?.data?.request_id;
      if (id) setTaskId(id);
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (!taskId) return;
    let timer: any;
    let stopped = false;
    const poll = async () => {
      try {
        const r = await http.get(`/api/image-to-video?taskId=${encodeURIComponent(taskId)}`);
        const status = String(r?.data?.task_status || '').toUpperCase();
        const results = r?.data?.video_result as Array<{ url: string; cover_image_url?: string }> | undefined;
        if (Array.isArray(results) && results.length > 0 && results[0].url) {
          if (!stopped) setVideoUrl(results[0].url);
          return;
        }
        if (['FAILED', 'ERROR', 'CANCELLED'].includes(status)) {
          return;
        }
      } catch (e) {}
      timer = setTimeout(poll, 2000);
    };
    poll();
    return () => { stopped = true; if (timer) clearTimeout(timer); };
  }, [taskId]);

  return (
    <Container>
      <Title>
        <span>Image</span> to Video
      </Title>
      <Subtitle>{subtitle}</Subtitle>

      <Card>
        <DropArea $hasFile={!!image.previewUrl} htmlFor="img-input">
          {image.previewUrl ? (
            <PreviewImg src={image.previewUrl} alt="preview" />
          ) : (
            <Hint>{uploadHint}</Hint>
          )}
          <HiddenFileInput id="img-input" type="file" accept="image/*" onChange={onPick} />
        </DropArea>

        <Actions>
          <Button onClick={onReset} disabled={isProcessing}>{resetButton}</Button>
          <Button $primary onClick={onAnimate} disabled={!canStart}>
            {isProcessing ? '生成中…' : animateButton}
          </Button>
        </Actions>
        {taskId && !videoUrl && (
          <LoadingWrap>
            <Spinner />
            <LoadingText>{loadingText}</LoadingText>
          </LoadingWrap>
        )}
        {videoUrl && (
          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
            <video src={videoUrl} controls style={{ width: '100%', maxWidth: 640, borderRadius: 12 }} />
          </div>
        )}
      </Card>
    </Container>
  );
}


