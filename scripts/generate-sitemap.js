const fs = require('fs');
const path = require('path');

// 配置
const SITE_URL = 'https://emoji-gen.com'; // 更改为您的实际域名
const LAST_MOD = '2023-06-10'; // 使用固定日期以便于调试

// 支持的语言列表
const locales = ['en', 'zh', 'es', 'fr', 'ar', 'ru', 'pt', 'ja', 'de', 'hi'];

// 主要路由
const routes = [];

// 添加根路由
routes.push({ path: '', priority: 1.0, changefreq: 'weekly' });

// 为每种语言添加主要页面
locales.forEach(locale => {
  // 语言首页
  routes.push({ path: locale, priority: 1.0, changefreq: 'weekly' });
  
  // 博客页面
  routes.push({ path: `${locale}/blog`, priority: 0.8, changefreq: 'weekly' });
  
  // 关于页面
  routes.push({ path: `${locale}/about`, priority: 0.7, changefreq: 'monthly' });
  
  // Emoji工具页面
  routes.push({ path: `${locale}/emojitools`, priority: 0.9, changefreq: 'weekly' });
  
  // 具体的Emoji工具页面
  routes.push({ path: `${locale}/emojitools/emoji-chat`, priority: 0.8, changefreq: 'weekly' });
  routes.push({ path: `${locale}/emojitools/text-to-emoji`, priority: 0.8, changefreq: 'weekly' });
});

// 生成XML
function generateSitemapXml() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // 为每个路由添加URL条目
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}/${route.path}</loc>\n`;
    xml += `    <lastmod>${LAST_MOD}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
}

// 将站点地图写入文件
try {
  const sitemap = generateSitemapXml();
  const outputPath = path.join(__dirname, '../public/sitemap.xml');

  // 确保public目录存在
  if (!fs.existsSync(path.join(__dirname, '../public'))) {
    fs.mkdirSync(path.join(__dirname, '../public'), { recursive: true });
  }

  // 写入文件
  fs.writeFileSync(outputPath, sitemap);
  console.log(`站点地图已生成至: ${outputPath}`);
  console.log(`总共包含 ${routes.length} 个URL`);
} catch (error) {
  console.error('生成站点地图时出错:', error);
} 