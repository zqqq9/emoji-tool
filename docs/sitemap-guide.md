# 站点地图使用指南

## 站点地图介绍

站点地图是一个XML文件，它可以帮助搜索引擎更好地理解您的网站结构，从而更有效地抓取和索引您的网站内容。它对SEO非常重要，尤其是对于较大的网站。

## 文件说明

本项目包含以下与站点地图相关的文件：

1. `public/sitemap.xml` - 生成的站点地图文件
2. `public/robots.txt` - 告诉搜索引擎可以抓取哪些页面，同时也指向站点地图
3. `scripts/generate-sitemap.js` - 用于动态生成站点地图的脚本

## 如何使用

### 自动生成站点地图

每次构建项目时，站点地图会自动生成。这是通过在`package.json`中的`prebuild`脚本实现的。

### 手动生成站点地图

如果您需要手动生成站点地图，可以运行：

```bash
npm run generate-sitemap
```

### 更新站点地图内容

如果您需要添加新页面到站点地图，请编辑`scripts/generate-sitemap.js`文件中的`routes`数组：

```javascript
const routes = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: 'en', priority: 1.0, changefreq: 'weekly' },
  // 添加您的新页面，例如:
  // { path: 'about', priority: 0.8, changefreq: 'monthly' },
];
```

### 更新网站域名

在部署到生产环境前，请务必更新以下文件中的域名：

1. `scripts/generate-sitemap.js` - 更新`SITE_URL`变量
2. `public/robots.txt` - 更新Sitemap行中的网址

## 提交到Google搜索控制台

1. 登录[Google搜索控制台](https://search.google.com/search-console)
2. 添加您的网站作为资源
3. 验证网站所有权（通常通过DNS记录或HTML文件）
4. 导航到"索引" > "站点地图"
5. 输入`sitemap.xml`并提交

## 最佳实践

- 每当网站结构有重大变更时，重新生成并提交站点地图
- 确保站点地图中的URL是可访问的（不是404页面）
- 定期检查Google搜索控制台中的站点地图状态
- 对于大型网站，考虑创建多个站点地图或站点地图索引

## 问题排查

如果Google无法正确抓取您的站点地图：

1. 验证站点地图格式是否正确（可以使用在线XML验证工具）
2. 确认robots.txt中的站点地图URL是否正确
3. 检查所有URL是否可以公开访问
4. 查看Google搜索控制台中的错误报告 