import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData } from '../data/services';
import { Container } from '../components/ui/Container';
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
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t, isRTL } = useLanguage();

  const serviceIndex = servicesData.findIndex((s) => s.slug === slug);
  const service = servicesData[serviceIndex];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const prevService = serviceIndex > 0 ? servicesData[serviceIndex - 1] : null;
  const nextService =
    serviceIndex < servicesData.length - 1 ? servicesData[serviceIndex + 1] : null;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#48D9E8]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#48D9E8]" />;
      case 'Film':
        return <Film className="w-8 h-8 text-[#48D9E8]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-[#48D9E8]" />;
      case 'Layers':
      default:
        return <Layers className="w-8 h-8 text-[#48D9E8]" />;
    }
  };

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. SERVICE DETAIL HERO */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[#AEBBD0]/10 overflow-hidden">
        {/* Layered Subtle Cosmic Backdrop */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Background"
            className="w-full h-full object-cover object-[center_top]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1B]/95 via-[#080D1B]/85 to-[#080D1B]" />
        </div>
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#48D9E8]/10 blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumbs & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-[#AEBBD0]">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-[#48D9E8] transition-colors">
                {t.nav.home}
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-[#48D9E8] transition-colors">
                {t.nav.services}
              </Link>
              <span>/</span>
              <span className="text-[#48D9E8] font-medium">{service.title[language]}</span>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs text-[#48D9E8] hover:underline"
            >
              <span>{t.common.backToServices}</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#101E38] border border-[#48D9E8]/40 flex items-center justify-center text-[#48D9E8] shadow-[0_0_20px_rgba(72,217,232,0.2)]">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#48D9E8] tracking-widest block uppercase font-semibold">
                    DISCIPLINE // {service.number}
                  </span>
                  <span className="text-xs text-[#AEBBD0]/60 uppercase tracking-wider font-mono">
                    ABU DHABI · STELLAR MEDIA
                  </span>
                </div>
              </div>

              <h1 className="headline-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FC] leading-tight max-w-3xl">
                {service.title[language]}
              </h1>

              <p className="text-lg sm:text-xl text-[#48D9E8] font-medium leading-relaxed font-mono">
                {service.tagline[language]}
              </p>

              <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light max-w-2xl">
                {service.fullDescription[language]}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  to={`/contact?service=${service.slug}`}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                >
                  {t.services.inquireService}
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  {t.common.backToServices}
                </Button>
              </div>
            </div>

            {/* Strategic Value Card */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-[#101E38]/60 border border-[#48D9E8]/20 shadow-xl space-y-4">
              <span className="text-xs font-mono text-[#48D9E8] tracking-wider uppercase block font-semibold">
                {t.services.strategicValue}
              </span>
              <p className="text-sm text-[#F5F7FC] leading-relaxed font-medium">
                {service.strategicValue[language]}
              </p>
              <div className="pt-4 border-t border-[#AEBBD0]/15 flex items-center justify-between text-xs text-[#AEBBD0] font-mono">
                <span>{t.common.abuDhabi}</span>
                <span className="text-[#48D9E8]">100% Focused</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CAPABILITIES & DELIVERABLES */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Scope of Capabilities */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold text-[#48D9E8] tracking-widest uppercase block mb-2 font-mono">
                  01 // CAPABILITIES
                </span>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC] mb-4">
                  {t.services.capabilitiesTitle}
                </h2>
                <p className="text-sm text-[#AEBBD0] leading-relaxed">
                  {t.services.capabilitiesDesc}
                </p>
              </div>

              <div className="space-y-4">
                {service.capabilities[language].map((cap, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#101E38]/40 border border-[#AEBBD0]/15 flex items-start gap-3.5 hover:border-[#48D9E8]/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#48D9E8] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#F5F7FC] leading-relaxed">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold text-[#48D9E8] tracking-widest uppercase block mb-2 font-mono">
                  02 // DELIVERABLES
                </span>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC] mb-4">
                  {t.services.keyDeliverables}
                </h2>
              </div>

              <div className="space-y-4">
                {service.deliverables[language].map((del, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-[#090E1C] border border-[#AEBBD0]/15 space-y-2"
                  >
                    <div className="flex items-center justify-between text-xs text-[#48D9E8] font-mono">
                      <span>DELIVERABLE 0{i + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#F5F7FC]">
                      {del}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. EXECUTION PATHWAY */}
      <section className="relative py-24 sm:py-32 bg-[#090E1C]/80 border-t border-[#AEBBD0]/10">
        <Container>
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-semibold text-[#48D9E8] tracking-widest uppercase block font-mono">
              03 // PROCESS
            </span>
            <h2 className="headline-font text-3xl sm:text-4xl font-bold text-[#F5F7FC]">
              {t.services.processTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="p-8 rounded-2xl bg-[#101E38]/40 border border-[#AEBBD0]/15 flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-lg bg-[#080D1B] border border-[#48D9E8]/30 flex items-center justify-center text-[#48D9E8] font-bold text-sm mb-6">
                    {p.step}
                  </span>
                  <h3 className="headline-font text-lg font-bold text-[#F5F7FC] mb-2">
                    {p.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AEBBD0] leading-relaxed">
                    {p.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. PREV / NEXT SERVICE NAVIGATION */}
      <section className="relative py-12 border-t border-[#AEBBD0]/10 bg-[#060A16]">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            {prevService ? (
              <Link
                to={`/services/${prevService.slug}`}
                className="flex items-center gap-3 text-sm text-[#AEBBD0] hover:text-[#48D9E8] transition-colors group"
              >
                {isRTL ? (
                  <ChevronRight className="w-5 h-5 text-[#48D9E8] group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ChevronLeft className="w-5 h-5 text-[#48D9E8] group-hover:-translate-x-1 transition-transform" />
                )}
                <div>
                  <span className="text-[11px] font-mono text-[#AEBBD0]/60 uppercase block">
                    {language === 'ar' ? 'الخدمة السابقة' : 'Previous Capability'}
                  </span>
                  <span className="font-semibold text-[#F5F7FC] group-hover:text-[#48D9E8]">
                    {prevService.title[language]}
                  </span>
                </div>
              </Link>
            ) : <div />}

            <Link
              to="/services"
              className="text-xs text-[#AEBBD0] hover:text-[#48D9E8] border border-[#AEBBD0]/20 px-4 py-2 rounded-lg"
            >
              {t.common.backToServices}
            </Link>

            {nextService ? (
              <Link
                to={`/services/${nextService.slug}`}
                className="flex items-center gap-3 text-sm text-[#AEBBD0] hover:text-[#48D9E8] transition-colors group text-end"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#AEBBD0]/60 uppercase block">
                    {language === 'ar' ? 'الخدمة التالية' : 'Next Capability'}
                  </span>
                  <span className="font-semibold text-[#F5F7FC] group-hover:text-[#48D9E8]">
                    {nextService.title[language]}
                  </span>
                </div>
                {isRTL ? (
                  <ChevronLeft className="w-5 h-5 text-[#48D9E8] group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-[#48D9E8] group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
            ) : <div />}
          </div>
        </Container>
      </section>
    </div>
  );
};
