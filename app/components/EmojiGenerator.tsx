'use client';

import { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// 图像样式类型
type StyleType = "emoji" | "sticker" | "icon";

export default function EmojiGenerator() {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const [style, setStyle] = useState<StyleType>("emoji");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emojiResult, setEmojiResult] = useState<{ 
    imageUrl: string; 
    text: string;
    prompt?: string;
  } | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      setError(t.generator.errorEmpty);
      return;
    }
    
    try {
      setIsLoading(true);
      setError('');
      
      const response = await fetch('/api/generate-emoji', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text.trim(), style }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t.generator.errorGeneral);
      }
      
      const data = await response.json();
      setEmojiResult(data);
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : t.generator.errorGeneral);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!emojiResult) return;
    
    try {
      // 获取图片数据
      const response = await fetch(emojiResult.imageUrl);
      const blob = await response.blob();
      
      // 创建URL供下载
      const url = URL.createObjectURL(blob);
      
      // 创建临时锚点元素
      const link = document.createElement('a');
      link.href = url;
      
      // 根据图片类型设置文件扩展名
      const extension = blob.type.includes('svg') ? 'svg' : 'png';
      link.download = `ai-${style}-${emojiResult.text.replace(/\s+/g, '-')}.${extension}`;
      
      // 触发下载
      document.body.appendChild(link);
      link.click();
      
      // 清理
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('下载图像时出错:', error);
      setError(t.generator.errorDownload);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-black rounded-xl shadow-md">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          {t.generator.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {t.generator.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="text-input" className="block mb-2 text-sm font-medium">
            {t.generator.inputLabel}
          </label>
          <input
            id="text-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.generator.inputPlaceholder}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 
                     focus:ring-blue-500 focus:border-transparent transition-all"
            maxLength={50}
          />
          {text.length > 0 && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {text.length}/50 {t.generator.charactersCount}
            </p>
          )}
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">
            {t.generator.styleLabel}
          </label>
          <div className="grid grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setStyle("emoji")}
              className={`px-4 py-2 text-center rounded-lg transition-colors ${
                style === "emoji" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {t.generator.styleEmoji}
            </button>
            <button
              type="button"
              onClick={() => setStyle("sticker")}
              className={`px-4 py-2 text-center rounded-lg transition-colors ${
                style === "sticker" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {t.generator.styleSticker}
            </button>
            <button
              type="button"
              onClick={() => setStyle("icon")}
              className={`px-4 py-2 text-center rounded-lg transition-colors ${
                style === "icon" 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {t.generator.styleIcon}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
                   text-white font-medium rounded-lg hover:opacity-90 transition-opacity 
                   focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-70"
        >
          {isLoading ? t.generator.buttonCreating : t.generator.buttonCreate}
        </button>

        {error && (
          <p className="mt-2 text-red-500 text-sm">{error}</p>
        )}
      </form>

      {emojiResult && (
        <div className="text-center bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">{t.generator.resultTitle}</h2>
          
          <div className="mx-auto mb-6 rounded-lg overflow-hidden shadow-lg" style={{ maxWidth: '100%', height: 'auto' }}>
            <img
              ref={imageRef}
              src={emojiResult.imageUrl}
              alt={`AI generated image of ${emojiResult.text}`}
              className="w-full h-auto object-contain"
              style={{ maxHeight: '400px' }}
            />
          </div>
          
          {emojiResult.prompt && (
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 p-3 rounded text-left">
              <strong>{t.generator.promptLabel}:</strong> {emojiResult.prompt}
            </div>
          )}
          
          <button
            onClick={handleDownload}
            className="py-2 px-4 bg-blue-600 text-white font-medium rounded-lg 
                     hover:bg-blue-700 transition-colors focus:ring-4 
                     focus:outline-none focus:ring-blue-300"
          >
            {t.generator.buttonDownload}
          </button>
        </div>
      )}
    </div>
  );
} 