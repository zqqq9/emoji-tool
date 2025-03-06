# AI 图像生成器 (AI Image Generator)

一个基于文字生成自定义AI图像的Web应用。

## 功能特点

- 输入任意文字描述，生成相关的AI图像
- 支持多种图像风格：Emoji表情、贴纸、图标
- 使用先进的AI模型生成高质量图像
- 支持下载生成的图像
- 简洁美观的用户界面
- 支持中英文
- 响应式设计，适配各种设备

## 技术栈

- Next.js 15+
- React 19
- TypeScript
- TailwindCSS 4
- OpenRouter AI API

## 如何使用

1. 在输入框中输入文字描述
2. 选择想要的图像风格（Emoji、贴纸或图标）
3. 点击"创建图像"按钮
4. AI会分析你的描述并生成相应图像
5. 点击"下载图像"按钮可以保存图片到本地

## 如何运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 环境变量

创建一个`.env.local`文件并添加：

```
OPENROUTER_API_KEY=your_openrouter_api_key
SITE_URL=your_site_url
```

## 在线预览

访问 [https://ai-image-generator.vercel.app](https://ai-image-generator.vercel.app) 体验在线版本

## 许可证

MIT

## 致谢

本项目使用了[OpenRouter](https://openrouter.ai)提供的AI API服务。
