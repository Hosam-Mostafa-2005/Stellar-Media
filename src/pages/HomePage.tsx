import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import backgroundAsset from '../assets/background.png';
import {
  Compass,
  Sparkles,
  Film,
  TrendingUp,
  Layers,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Calendar,
  Eye,
  ArrowUpRight,
  Shield,
  Activity,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#48D9E8]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#48D9E8]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#48D9E8]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#48D9E8]" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-[#48D9E8]" />;
    }
  };

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. COSMIC HERO SECTION — CINEMATIC BLUE NEBULA ATMOSPHERE */}
      <section className="relative min-h-[88vh] lg:min-h-[94vh] flex items-center overflow-hidden py-24 sm:py-32 lg:py-36">
        {/* Layered Cosmic Nebula & Space Atmospheric Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
          {/* Base Cosmic Background Asset (Stars & Deep Space Texture) */}
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Space Nebula"
            className="w-full h-full object-cover object-[center_right] rtl:object-[center_left] opacity-70 scale-105 transition-transform duration-1000"
          />

          {/* Layer 1: Expansive Electric Blue & Deep Navy Distant Nebula Cloud */}
          <div
            className="absolute top-1/2 end-[-5%] -translate-y-1/2 w-[650px] sm:w-[850px] lg:w-[1100px] h-[550px] sm:h-[750px] lg:h-[950px] opacity-70 blur-[130px] lg:blur-[170px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 60% 50%, rgba(22, 139, 255, 0.28) 0%, rgba(16, 30, 56, 0.55) 45%, rgba(8, 13, 27, 0) 75%)',
            }}
          />

          {/* Layer 2: Soft Radiant Cyan Core Glow — Natural Cosmic Luminescence */}
          <div
            className="absolute top-1/2 end-[8%] -translate-y-1/2 w-[400px] sm:w-[550px] lg:w-[700px] h-[320px] sm:h-[450px] lg:h-[550px] opacity-60 blur-[90px] lg:blur-[130px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 52% 48%, rgba(72, 217, 232, 0.25) 0%, rgba(22, 139, 255, 0.12) 42%, rgba(8, 13, 27, 0) 70%)',
            }}
          />

          {/* Layer 3: Ambient Upper Nebula Atmosphere */}
          <div
            className="absolute top-[28%] end-[18%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] opacity-40 blur-[90px] pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(72, 217, 232, 0.18) 0%, rgba(22, 139, 255, 0.08) 50%, transparent 70%)',
            }}
          />

          {/* Directional Midnight Gradient: Shields Headline & Text for 100% Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080D1B] via-[#080D1B]/85 via-45% to-transparent rtl:bg-gradient-to-l" />

          {/* Top & Bottom Atmospheric Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1B]/80 via-transparent to-[#080D1B]" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl lg:max-w-4xl flex flex-col items-start space-y-8">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101E38]/85 border border-[#48D9E8]/30 text-xs font-semibold text-[#48D9E8] shadow-[0_0_15px_rgba(72,217,232,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
              <span>{t.home.heroEyebrow}</span>
            </div>

            {/* Main Confident Editorial Headline — Uncontested Visual Focus */}
            <h1 className="headline-font text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#F5F7FC] leading-[1.12] drop-shadow-sm">
              {t.home.heroHeadline}
            </h1>

            {/* Supporting Copy — Controlled Width for Flawless Typography */}
            <p className="text-base sm:text-xl lg:text-2xl text-[#AEBBD0] max-w-2xl leading-relaxed font-light">
              {t.home.heroSub}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                to="/services"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
              >
                {t.home.primaryCta}
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                {t.home.secondaryCta}
              </Button>
            </div>

            {/* Trust Indicator & Location Anchor */}
            <div className="pt-8 border-t border-[#AEBBD0]/15 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#AEBBD0] w-full max-w-2xl">
              <span className="flex items-center gap-1.5 font-medium text-[#F5F7FC]">
                <MapPin className="w-4 h-4 text-[#48D9E8]" />
                <span>{t.home.trustText}</span>
              </span>
              <span className="text-[#AEBBD0]/30 hidden sm:inline">·</span>
              <span className="text-[#AEBBD0]/80">{t.home.partnerText}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. ABOUT PREVIEW SECTION — EDITORIAL SPLIT */}
      <section className="relative py-28 border-t border-[#AEBBD0]/10 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Narrative Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              <SectionHeading
                eyebrow={t.home.aboutTag}
                title={t.home.aboutHeadline}
                description={t.home.aboutBody}
              />
              <p className="text-base text-[#AEBBD0]/80 leading-relaxed max-w-2xl">
                {t.home.aboutSecondary}
              </p>

              <div className="pt-2">
                <Button
                  to="/about"
                  variant="cyan"
                  icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                >
                  {t.common.learnMore}
                </Button>
              </div>
            </div>

            {/* Editorial Principle Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#101E38]/60 border border-[#AEBBD0]/15 shadow-2xl overflow-hidden">
                <div className="relative z-10 flex flex-col gap-6">
                  <div className="flex items-center justify-between pb-6 border-b border-[#AEBBD0]/10">
                    <span className="text-xs uppercase tracking-widest text-[#AEBBD0]/60 font-inter">
                      {t.home.quoteTitle}
                    </span>
                    <span className="text-xs text-[#48D9E8] font-mono">01 // COSMOS</span>
                  </div>

                  <blockquote className="headline-font text-xl sm:text-2xl font-semibold text-[#F5F7FC] leading-relaxed italic">
                    {t.home.quoteText}
                  </blockquote>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#168BFF]" />
                    <span className="text-xs text-[#AEBBD0]">
                      {language === 'ar'
                        ? 'رؤية إبداعية مرتكزة في أبوظبي بمعايير عالمية'
                        : 'Creative vision based in Abu Dhabi with world-class standards'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SERVICES OVERVIEW — EDITORIAL NUMBERED SHOWCASE (NO GENERIC CARDS) */}
      <section className="relative py-28 bg-[#090E1C]/80 border-t border-[#AEBBD0]/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow={t.home.servicesTag}
              title={t.home.servicesTitle}
              description={t.home.servicesSub}
            />
            <Button
              to="/services"
              variant="secondary"
              icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
            >
              {t.common.viewAll}
            </Button>
          </div>

          {/* Editorial Numbered Rows with Hairline Separators */}
          <div className="divide-y divide-[#AEBBD0]/15 border-y border-[#AEBBD0]/15">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="py-8 sm:py-10 group hover:bg-[#101E38]/30 transition-all duration-300 px-4 sm:px-6 rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Number & Icon */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-[#48D9E8]">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#080D1B] border border-[#AEBBD0]/15 flex items-center justify-center group-hover:border-[#48D9E8]/40 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="lg:col-span-4 space-y-1">
                    <h3 className="headline-font text-xl sm:text-2xl font-bold text-[#F5F7FC] group-hover:text-[#48D9E8] transition-colors">
                      <Link to={`/services/${service.slug}`}>{service.title[language]}</Link>
                    </h3>
                    <p className="text-xs text-[#48D9E8] font-mono">
                      {service.tagline[language]}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-sm text-[#AEBBD0] leading-relaxed">
                      {service.shortDescription[language]}
                    </p>
                  </div>

                  {/* CTA Action */}
                  <div className="lg:col-span-2 flex justify-start lg:justify-end">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#168BFF] group-hover:text-[#48D9E8] transition-colors"
                    >
                      <span>{t.common.exploreService}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SELECTED WORK — BESPOKE MONOGRAPHS (DISTINCT VISUAL DIRECTIONS) */}
      <section className="relative py-28 border-t border-[#AEBBD0]/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow={t.home.workTag}
              title={t.home.workTitle}
              description={t.home.workSub}
            />
            <Button
              to="/work"
              variant="secondary"
              icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
            >
              {t.common.viewAll}
            </Button>
          </div>

          <div className="space-y-16">
            {/* Project 01: Cultural Destination — Grand Architectural Framing */}
            <article className="p-8 sm:p-12 rounded-3xl bg-[#101E38]/50 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-500 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-[#080D1B] relative">
                  <img
                    src={projectsData[0].heroImage}
                    alt={projectsData[0].title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute top-3 start-3">
                    <span className="px-3 py-1 rounded-full bg-[#080D1B]/90 backdrop-blur-md text-[11px] font-medium text-[#48D9E8] border border-[#48D9E8]/30">
                      Concept Project / مشروع تصوري
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center justify-between text-xs font-mono text-[#AEBBD0]/70">
                    <span className="text-[#48D9E8] font-bold">MONOGRAPH 01</span>
                    <span>{projectsData[0].refCode}</span>
                  </div>
                  <h3 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                    {projectsData[0].title[language]}
                  </h3>
                  <p className="text-sm text-[#AEBBD0] leading-relaxed">
                    {projectsData[0].shortDescription[language]}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {projectsData[0].disciplines[language].slice(0, 3).map((d, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-[#080D1B] border border-[#AEBBD0]/10 text-[#AEBBD0]">
                        {d}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button to={`/work/${projectsData[0].slug}`} variant="primary" icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}>
                      {t.common.exploreProject}
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 02 & 03: Split Asymmetric Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Future Mobility — Technical HUD Style */}
              <article className="p-8 rounded-3xl bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#080D1B]">
                    <img
                      src={projectsData[1].heroImage}
                      alt={projectsData[1].imageAlt ? projectsData[1].imageAlt[language] : projectsData[1].title[language]}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080D1B]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 start-3">
                      <span className="px-3 py-1 rounded-full bg-[#080D1B]/90 backdrop-blur-md text-[11px] font-medium text-[#48D9E8] border border-[#48D9E8]/30">
                        Concept Project / مشروع تصوري
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#168BFF] uppercase tracking-wider block">
                      {projectsData[1].category[language]}
                    </span>
                    <h3 className="headline-font text-2xl font-bold text-[#F5F7FC]">
                      {projectsData[1].title[language]}
                    </h3>
                    <p className="text-sm text-[#AEBBD0] leading-relaxed">
                      {projectsData[1].shortDescription[language]}
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-[#AEBBD0]/10 flex items-center justify-between">
                  <Link
                    to={`/work/${projectsData[1].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168BFF] hover:text-[#48D9E8] transition-colors"
                  >
                    <span>{t.common.exploreProject}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                  <span className="text-xs font-mono text-[#AEBBD0]/60">Level 5 Autonomy</span>
                </div>
              </article>

              {/* Digital Culture — Generative Media Canvas */}
              <article className="p-8 rounded-3xl bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#080D1B]">
                    <img
                      src={projectsData[2].heroImage}
                      alt={projectsData[2].title[language]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 start-3">
                      <span className="px-3 py-1 rounded-full bg-[#080D1B]/90 text-[11px] font-medium text-[#48D9E8] border border-[#48D9E8]/30">
                        Concept Project
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block">
                      {projectsData[2].category[language]}
                    </span>
                    <h3 className="headline-font text-2xl font-bold text-[#F5F7FC]">
                      {projectsData[2].title[language]}
                    </h3>
                    <p className="text-sm text-[#AEBBD0] leading-relaxed">
                      {projectsData[2].shortDescription[language]}
                    </p>
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-[#AEBBD0]/10 flex items-center justify-between">
                  <Link
                    to={`/work/${projectsData[2].slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#168BFF] hover:text-[#48D9E8] transition-colors"
                  >
                    <span>{t.common.exploreProject}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                  <span className="text-xs font-mono text-[#AEBBD0]/60">60 FPS WebGL</span>
                </div>
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. METHODOLOGY (4 SEQUENTIAL STEPS WITH HAIRLINE) */}
      <section className="relative py-28 bg-[#090E1C]/80 border-t border-[#AEBBD0]/10">
        <Container>
          <div className="max-w-2xl mb-16">
            <SectionHeading
              eyebrow={t.home.approachTag}
              title={t.home.approachTitle}
              description={t.home.approachSub}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                num: '01',
                title: { ar: 'اكتشف', en: 'Discover' },
                sub: 'DISCOVER',
                desc: {
                  ar: 'نفهم الفكرة والسياق والهدف، ونغوص في طبيعة الجمهور المستهدف لخلق قاعدة صلبة.',
                  en: 'Immersing in vision, culture, and audience expectations to construct an unshakeable ground.',
                },
              },
              {
                num: '02',
                title: { ar: 'حدّد', en: 'Define' },
                sub: 'DEFINE',
                desc: {
                  ar: 'نرسم الاتجاه والاستراتيجية المناسبة، ونحدد القنوات والرسائل الأساسية بوضوح تام.',
                  en: 'Mapping trajectory, message architecture, and core brand milestones with precision.',
                },
              },
              {
                num: '03',
                title: { ar: 'ابتكر', en: 'Create' },
                sub: 'CREATE',
                desc: {
                  ar: 'نحوّل الاستراتيجية إلى حلول وتجارب إبداعية، تدمج التصميم البصري بالإنتاج المبتكر.',
                  en: 'Synthesizing strategy into bespoke identities and experiential environments.',
                },
              },
              {
                num: '04',
                title: { ar: 'نفّذ', en: 'Deliver' },
                sub: 'DELIVER',
                desc: {
                  ar: 'نصقل التفاصيل ونجهّز العمل للتقديم بأعلى معايير الإتقان لضمان التأثير المرجو.',
                  en: 'Refining touchpoints to world-class benchmarks for sustained institutional impact.',
                },
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-2xl bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#080D1B] border border-[#48D9E8]/30 flex items-center justify-center text-[#48D9E8] font-bold text-lg mb-6 shadow-sm">
                    {step.num}
                  </div>
                  <h4 className="headline-font text-xl font-bold text-[#F5F7FC] mb-1">
                    {step.title[language]}
                  </h4>
                  <span className="text-[11px] font-mono text-[#48D9E8] uppercase tracking-wider block mb-3">
                    {step.sub}
                  </span>
                  <p className="text-sm text-[#AEBBD0] leading-relaxed">
                    {step.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CLOSING CTA SECTION WITH SUBTLE COSMIC CROP */}
      <section className="relative py-28 border-t border-[#AEBBD0]/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Nebula"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#080D1B]/80" />
        </div>

        <Container className="relative z-10 flex flex-col items-start max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101E38] border border-[#48D9E8]/20 text-xs font-medium text-[#48D9E8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.home.contactTag}</span>
          </div>

          <h2 className="headline-font text-3xl sm:text-5xl font-bold text-[#F5F7FC] leading-tight max-w-2xl">
            {t.home.contactTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#AEBBD0] max-w-xl leading-relaxed font-light">
            {t.home.contactSub}
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
