'use client';

import EmojiGenerator from "./components/EmojiGenerator";
import { useLanguage, LanguageSwitcher } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 relative">
          <div className="absolute right-0 top-0">
            <LanguageSwitcher />
          </div>
          
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            {t.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </header>
        
        <main>
          <EmojiGenerator />
        </main>
        
        <footer className="mt-16 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {t.title}. {t.footer.copyright}</p>
          <p className="mt-2">
            {t.footer.createdWith}
          </p>
          <p className="mt-2 text-xs">
            Powered by <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="underline">OpenRouter AI</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
