import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'pill' | 'toggle' | 'header';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  if (variant === 'pill') {
    return (
      <div
        className={`inline-flex items-center p-1 rounded-xl bg-[#101E38]/80 border border-[#AEBBD0]/20 backdrop-blur-md ${className}`}
        role="group"
        aria-label="Language selection"
      >
        <button
          type="button"
          onClick={() => setLanguage('ar')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
            language === 'ar'
              ? 'bg-[#168BFF] text-white shadow-sm'
              : 'text-[#AEBBD0] hover:text-[#F5F7FC]'
          }`}
        >
          العربية
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
            language === 'en'
              ? 'bg-[#168BFF] text-white shadow-sm'
              : 'text-[#AEBBD0] hover:text-[#F5F7FC]'
          }`}
        >
          English
        </button>
      </div>
    );
  }

  // Header quick switch button
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#AEBBD0]/20 hover:border-[#48D9E8]/40 bg-[#101E38]/50 hover:bg-[#101E38] text-xs font-medium text-[#AEBBD0] hover:text-[#48D9E8] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#48D9E8] ${className}`}
      title={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
      aria-label={language === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
    >
      <Globe className="w-3.5 h-3.5 opacity-80" />
      <span className="font-semibold">{language === 'ar' ? 'English' : 'عربي'}</span>
    </button>
  );
};
