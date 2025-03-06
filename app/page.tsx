// 简单的根路由页面
// 这个页面不会被访问到，因为中间件会自动重定向到语言前缀路径
export default function RootPage() {
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}
