import enTranslations from './en';
import zhTranslations from './zh';

export type Translation = typeof enTranslations;
export type LanguageCode = 'en' | 'zh';

export const translations: Record<LanguageCode, Translation> = {
  en: enTranslations,
  zh: zhTranslations
};

export const languageNames: Record<LanguageCode, string> = {
  en: 'English',
  zh: '中文'
}; 