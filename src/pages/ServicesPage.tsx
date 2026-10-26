import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData } from '../data/services';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import backgroundAsset from '../assets/background.png';
import {
  Compass,
  Sparkles,
  Film,
  TrendingUp,
  Layers,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  Shield,
  Activity,
  Globe2,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#48D9E8]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#48D9E8]" />;
      case 'Film':
        return <Film className="w-6 h-6 text-[#48D9E8]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#48D9E8]" />;
      case 'Layers':
      default:
        return <Layers className="w-6 h-6 text-[#48D9E8]" />;
    }
  };

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. SERVICES HERO */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[#AEBBD0]/10 overflow-hidden">
        {/* Layered Subtle Cosmic Background */}
        <div className="absolute inset-0 z-0 opacity-35">
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Background"
            className="w-full h-full object-cover object-[center_top]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1B]/95 via-[#080D1B]/80 to-[#080D1B]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101E38]/90 border border-[#48D9E8]/30 text-xs font-semibold text-[#48D9E8] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
              <span>{t.services.heroEyebrow}</span>
            </div>

            <h1 className="headline-font text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F7FC] leading-tight">
              {t.services.heroTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#48D9E8] to-[#F5F7FC]">
                {t.services.heroTitleHighlight}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#AEBBD0] max-w-2xl leading-relaxed font-light">
              {t.services.heroSub}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#AEBBD0]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                {t.common.abuDhabi}
              </span>
              <span className="text-[#AEBBD0]/30">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
                {t.common.officialCapabilities}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. FIVE PRIMARY SERVICES — ASYMMETRIC EDITORIAL SHOWCASES */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Background number watermark */}
                <div className="absolute top-4 end-8 text-8xl sm:text-9xl font-mono font-bold text-[#AEBBD0]/5 pointer-events-none select-none">
                  {service.number}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative z-10">
                  {/* Start Column: Title, Tagline, Narrative & Actions */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#080D1B] border border-[#48D9E8]/30 flex items-center justify-center shadow-[0_0_20px_rgba(72,217,232,0.15)]">
                        {getServiceIcon(service.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#48D9E8] tracking-widest block uppercase font-semibold">
                          DISCIPLINE // {service.number}
                        </span>
                        <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                          {service.title[language]}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm font-mono text-[#48D9E8] font-medium">
                      {service.tagline[language]}
                    </p>

                    <p className="text-base text-[#AEBBD0] font-normal leading-relaxed">
                      {service.fullDescription[language]}
                    </p>

                    <div className="p-4 rounded-xl bg-[#080D1B]/70 border border-[#AEBBD0]/15 text-xs text-[#AEBBD0] space-y-1.5">
                      <span className="font-semibold text-[#48D9E8] block uppercase tracking-wider font-mono">
                        {t.services.strategicValue}
                      </span>
                      <p className="leading-relaxed text-[#F5F7FC] font-medium">{service.strategicValue[language]}</p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Button
                        to={`/services/${service.slug}`}
                        variant="primary"
                        icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                      >
                        {t.common.exploreService}
                      </Button>
                      <Button
                        to={`/contact?service=${service.slug}`}
                        variant="secondary"
                      >
                        {t.services.inquireService}
                      </Button>
                    </div>
                  </div>

                  {/* End Column: Scope of Capabilities & Key Deliverables */}
                  <div className="lg:col-span-6 space-y-8 bg-[#080D1B]/60 p-6 sm:p-8 rounded-2xl border border-[#AEBBD0]/15">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] mb-4 flex items-center gap-2 font-mono">
                        <span className="w-2 h-2 rounded-full bg-[#48D9E8]" />
                        <span>{t.services.capabilitiesTitle}</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.capabilities[language].map((cap, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-[#AEBBD0] leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#48D9E8] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#AEBBD0]/10">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#48D9E8] mb-3 font-mono">
                        {t.services.keyDeliverables}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables[language].map((del, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-[#101E38] border border-[#AEBBD0]/15 text-xs text-[#F5F7FC]"
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CONSULTATION CALL TO ACTION */}
      <section className="relative py-28 bg-[#090E1C]/80 border-t border-[#AEBBD0]/10">
        <Container className="max-w-3xl space-y-6">
          <h2 className="headline-font text-3xl sm:text-5xl font-bold text-[#F5F7FC]">
            {language === 'ar' ? 'هل لديك مشروع يحتاج إلى صياغة استثنائية؟' : 'Ready to Elevate Your Brand Strategy?'}
          </h2>
          <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
            {language === 'ar'
              ? 'تحدث مباشرة مع فريق الاستراتيجية والإبداع في أبوظبي لبدء حوار هادف حول أهدافك.'
              : 'Connect directly with our strategy and creative leads in Abu Dhabi to initiate a meaningful dialogue.'}
          </p>
          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
            >
              {t.common.discussProject}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
