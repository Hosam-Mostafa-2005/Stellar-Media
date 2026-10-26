import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles, AlertCircle, MapPin, Compass, Cpu, Layers } from 'lucide-react';

export const WorkPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. WORK HERO SECTION */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[#AEBBD0]/10 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#168BFF]/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101E38]/90 border border-[#48D9E8]/30 text-xs font-semibold text-[#48D9E8] uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
                <span>{t.work.heroEyebrow}</span>
              </div>

              <h1 className="headline-font text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F7FC] leading-tight max-w-3xl">
                {t.work.heroTitle}
              </h1>

              <p className="text-lg sm:text-xl text-[#AEBBD0] max-w-2xl leading-relaxed font-light">
                {t.work.heroSub}
              </p>
            </div>

            {/* Design Lab Context Capsule */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#101E38]/60 border border-[#AEBBD0]/15 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#48D9E8]">
                <span className="font-bold">STELLAR DESIGN LAB</span>
                <span className="px-2 py-0.5 rounded-full bg-[#48D9E8]/10 border border-[#48D9E8]/30">
                  3 Concepts
                </span>
              </div>
              <h3 className="headline-font text-base font-semibold text-[#F5F7FC]">
                {t.work.conceptArchiveTitle}
              </h3>
              <p className="text-xs text-[#AEBBD0] leading-relaxed">
                {t.work.conceptArchiveDesc}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-[#AEBBD0]/70 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#48D9E8]" />
                <span>Abu Dhabi · UAE</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. TRANSPARENT ATTRIBUTION NOTICE BANNER */}
      <section className="py-6 bg-[#080D1B] border-b border-[#AEBBD0]/10">
        <Container>
          <div className="p-4 sm:p-5 rounded-2xl bg-[#101E38]/30 border border-[#48D9E8]/20 flex items-start sm:items-center gap-3.5 text-xs text-[#AEBBD0]">
            <AlertCircle className="w-5 h-5 text-[#48D9E8] shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex-1 leading-relaxed">
              <strong className="text-[#F5F7FC] block sm:inline font-semibold">
                {t.work.disclaimerTitle}:
              </strong>{' '}
              <span>{t.work.disclaimerBody}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. THREE FEATURED CONCEPT PROJECTS — DISTINCT ART DIRECTIONS */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="space-y-28">
            {/* Project 01: Cultural Destination — Qasr Al-Nour */}
            <article className="group relative rounded-3xl overflow-hidden bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-500 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                <div className="lg:col-span-7 relative overflow-hidden min-h-[360px] lg:min-h-full">
                  <img
                    src={projectsData[0].heroImage}
                    alt={projectsData[0].title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#101E38] via-[#101E38]/30 to-transparent rtl:lg:bg-gradient-to-r" />
                  <div className="absolute top-4 start-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#080D1B]/90 backdrop-blur-md text-xs font-semibold text-[#48D9E8] border border-[#48D9E8]/30 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                      <span>Concept Project / مشروع تصوري</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#AEBBD0]/70">
                      <span className="text-[#48D9E8] font-bold">MONOGRAPH 01</span>
                      <span>{projectsData[0].refCode}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs text-[#168BFF] font-semibold block uppercase tracking-wider font-mono">
                        {projectsData[0].category[language]}
                      </span>
                      <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                        {projectsData[0].title[language]}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#AEBBD0] leading-relaxed">
                      {projectsData[0].shortDescription[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {projectsData[0].disciplines[language].map((d, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-[#080D1B] border border-[#AEBBD0]/10 text-[#AEBBD0]">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-[#AEBBD0]/10 mt-6">
                    <Button to={`/work/${projectsData[0].slug}`} variant="primary" icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}>
                      {t.common.exploreProject}
                    </Button>
                    <span className="text-xs text-[#AEBBD0]/60 font-mono">
                      {projectsData[0].locationTag[language]}
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 02: Future Mobility Systems — Telemetry Cockpit Aesthetics */}
            <article className="group relative rounded-3xl overflow-hidden bg-[#101E38]/40 border border-[#168BFF]/30 hover:border-[#48D9E8]/50 transition-all duration-500 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between order-2 lg:order-1">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#AEBBD0]/70">
                      <span className="text-[#168BFF] font-bold">MONOGRAPH 02</span>
                      <span>{projectsData[1].refCode}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs text-[#48D9E8] font-semibold block uppercase tracking-wider font-mono">
                        {projectsData[1].category[language]}
                      </span>
                      <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                        {projectsData[1].title[language]}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#AEBBD0] leading-relaxed">
                      {projectsData[1].shortDescription[language]}
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-[#080D1B] border border-[#AEBBD0]/10 text-xs font-mono">
                        <span className="text-[#AEBBD0]/60 block text-[10px]">AUTONOMY</span>
                        <span className="text-[#48D9E8] font-semibold">Level 5 Autonomous</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#080D1B] border border-[#AEBBD0]/10 text-xs font-mono">
                        <span className="text-[#AEBBD0]/60 block text-[10px]">LATENCY</span>
                        <span className="text-[#168BFF] font-semibold">&lt; 12ms Telemetry</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-[#AEBBD0]/10 mt-6">
                    <Button to={`/work/${projectsData[1].slug}`} variant="primary" icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}>
                      {t.common.exploreProject}
                    </Button>
                    <span className="text-xs text-[#AEBBD0]/60 font-mono">
                      {projectsData[1].locationTag[language]}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 relative overflow-hidden min-h-[360px] lg:min-h-full order-1 lg:order-2">
                  <img
                    src={projectsData[1].heroImage}
                    alt={projectsData[1].imageAlt ? projectsData[1].imageAlt[language] : projectsData[1].title[language]}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#101E38] via-[#101E38]/30 to-transparent rtl:lg:bg-gradient-to-l" />
                  <div className="absolute top-4 start-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#080D1B]/90 backdrop-blur-md text-xs font-semibold text-[#48D9E8] border border-[#48D9E8]/30 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                      <span>Concept Project / مشروع تصوري</span>
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 03: Digital Culture & Generative Arts — Computational Geometry */}
            <article className="group relative rounded-3xl overflow-hidden bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-500 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                <div className="lg:col-span-7 relative overflow-hidden min-h-[360px] lg:min-h-full">
                  <img
                    src={projectsData[2].heroImage}
                    alt={projectsData[2].title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#101E38] via-[#101E38]/30 to-transparent rtl:lg:bg-gradient-to-r" />
                  <div className="absolute top-4 start-4">
                    <span className="px-3.5 py-1 rounded-full bg-[#080D1B]/90 backdrop-blur-md text-xs font-semibold text-[#48D9E8] border border-[#48D9E8]/30 flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                      <span>Concept Project / مشروع تصوري</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-xs font-mono text-[#AEBBD0]/70">
                      <span className="text-[#48D9E8] font-bold">MONOGRAPH 03</span>
                      <span>{projectsData[2].refCode}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs text-[#168BFF] font-semibold block uppercase tracking-wider font-mono">
                        {projectsData[2].category[language]}
                      </span>
                      <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                        {projectsData[2].title[language]}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#AEBBD0] leading-relaxed">
                      {projectsData[2].shortDescription[language]}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {projectsData[2].disciplines[language].map((d, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-[#080D1B] border border-[#AEBBD0]/10 text-[#AEBBD0]">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex items-center justify-between border-t border-[#AEBBD0]/10 mt-6">
                    <Button to={`/work/${projectsData[2].slug}`} variant="primary" icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}>
                      {t.common.exploreProject}
                    </Button>
                    <span className="text-xs text-[#AEBBD0]/60 font-mono">
                      {projectsData[2].locationTag[language]}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </div>
  );
};
