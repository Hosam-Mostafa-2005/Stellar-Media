import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'stellar_media_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        // Only accept explicit 'en' or 'ar'; otherwise default to Arabic
        if (saved === 'en') {
          return 'en';
        }
        if (saved === 'ar') {
          return 'ar';
        }
      }
    } catch {
      // Ignore localStorage errors (e.g. private browsing or sandboxed iframe)
    }
    // Default to Arabic on first visit or missing/invalid stored preference
    return 'ar';
  });

  const setLanguage = (lang: Language) => {
    const validLang: Language = lang === 'en' ? 'en' : 'ar';
    setLanguageState(validLang);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, validLang);
      }
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  useEffect(() => {
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.title = isArabic
      ? 'Stellar Media | وكالة ستيلار للإبداع والتسويق الرقمي — أبوظبي'
      : 'Stellar Media | Creative & Digital Marketing Agency — Abu Dhabi';
    if (isArabic) {
      document.body.classList.remove('en-mode');
      document.documentElement.classList.remove('en-mode');
    } else {
      document.body.classList.add('en-mode');
      document.documentElement.classList.add('en-mode');
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    isRTL: language === 'ar',
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
