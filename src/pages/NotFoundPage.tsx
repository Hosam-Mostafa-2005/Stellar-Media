import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Compass, Home, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[75vh] flex items-center justify-center relative overflow-hidden star-bg py-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#168BFF]/10 blur-[130px] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-2xl flex flex-col items-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101E38] border border-[#48D9E8]/30 text-xs font-mono text-[#48D9E8]">
          <Compass className="w-4 h-4 text-[#48D9E8]" />
          <span>{t.notFound.tag}</span>
        </div>

        <h1 className="headline-font text-4xl sm:text-6xl font-bold text-[#F5F7FC] leading-tight">
          {t.notFound.title}
        </h1>

        <p className="text-base sm:text-lg text-[#AEBBD0] max-w-lg leading-relaxed">
          {t.notFound.description}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" size="lg" icon={<Home className="w-4 h-4" />}>
            {t.notFound.backHome}
          </Button>
          <Button
            to="/services"
            variant="secondary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
          >
            {t.notFound.exploreServices}
          </Button>
        </div>
      </Container>
    </div>
  );
};
