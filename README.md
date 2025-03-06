# AI Sticker Generator

使用 Replicate 的 sticker-maker 模型生成自定义贴纸和表情符号。

## 功能特点

- 基于文本描述生成高质量的贴纸和表情符号
- 支持中英文双语界面
- 多种风格选项：表情符号、贴纸和图标
- 现代化、响应式的用户界面
- 复制和下载生成的图像
- 暗色/亮色主题支持

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式**: Styled Components + Tailwind CSS
- **API集成**: Replicate API (sticker-maker 模型)
- **国际化**: next-intl
- **主题**: next-themes

## 开始使用

### 环境变量设置

创建一个 `.env.local` 文件，并设置以下变量：

```
REPLICATE_API_TOKEN=your_replicate_api_token_here
SITE_URL=http://localhost:3000
```

### 安装

```bash
npm install
```

### 开发

```bash
npm run dev
```

### 构建

```bash
npm run build
npm start
```

## API 端点

- `/api/generate-emoji` - 使用 Replicate API 生成图像

## 贡献

欢迎提交 Pull Requests 和 Issues。

## 许可证

MIT
