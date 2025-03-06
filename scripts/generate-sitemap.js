const fs = require('fs');
const path = require('path');

// 配置
const SITE_URL = 'https://yourdomain.com'; // 更改为您的实际域名
const LAST_MOD = new Date().toISOString().split('T')[0]; // 今天的日期，格式为YYYY-MM-DD

// 主要路由
const routes = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: 'en', priority: 1.0, changefreq: 'weekly' },
  // 添加更多路由如需要
];

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
const sitemap = generateSitemapXml();
const outputPath = path.join(__dirname, '../public/sitemap.xml');

// 确保public目录存在
if (!fs.existsSync(path.join(__dirname, '../public'))) {
  fs.mkdirSync(path.join(__dirname, '../public'), { recursive: true });
}

// 写入文件
fs.writeFileSync(outputPath, sitemap);
console.log(`站点地图已生成至: ${outputPath}`); 