import EmojiGenerator from "./components/EmojiGenerator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Emoji 工具
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            根据文字创建自定义emoji图片。输入文字，生成emoji，然后下载！
          </p>
        </header>
        
        <main>
          <EmojiGenerator />
        </main>
        
        <footer className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Emoji 工具. 保留所有权利.</p>
          <p className="mt-2">
            使用 Next.js 和 TailwindCSS 创建
          </p>
        </footer>
      </div>
    </div>
  );
}
