import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { ProjectCarousel } from '../components/portfolio/ProjectCarousel';
import { ArrowRight, Sparkles, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

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

            {/* Studio Portfolio Context Capsule */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#101E38]/60 border border-[#AEBBD0]/15 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#48D9E8]">
                <span className="font-bold">STELLAR STUDIO PORTFOLIO</span>
                <span className="px-2 py-0.5 rounded-full bg-[#48D9E8]/10 border border-[#48D9E8]/30">
                  {projectsData.length} Case Studies
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
          <div className="p-4 sm:p-5 rounded-2xl bg-[#101E38]/40 border border-[#48D9E8]/20 flex items-start sm:items-center gap-3.5 text-xs text-[#AEBBD0]">
            <ShieldCheck className="w-5 h-5 text-[#48D9E8] shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex-1 leading-relaxed">
              <strong className="text-[#F5F7FC] block sm:inline font-semibold">
                {t.work.disclaimerTitle}:
              </strong>{' '}
              <span>{t.work.disclaimerBody}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FEATURED INTERACTIVE CAROUSEL */}
      <section className="relative py-14 sm:py-16 border-b border-[#AEBBD0]/10">
        <Container>
          <div className="mb-8">
            <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block font-semibold mb-2">
              FEATURED SHOWCASE
            </span>
            <h2 className="headline-font text-3xl sm:text-4xl font-bold text-[#F5F7FC]">
              {language === 'ar' ? 'استعراض الأعمال التفاعلي' : 'Interactive Case Study Showcase'}
            </h2>
          </div>
          <ProjectCarousel projects={projectsData} />
        </Container>
      </section>

      {/* 4. DETAILED CASE STUDY MONOGRAPHS */}
      <section className="relative py-24 sm:py-32">
        <Container>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider font-semibold">
                {t.work.chapterTag}
              </span>
              <span className="w-8 h-px bg-[#AEBBD0]/20" />
            </div>
            <h2 className="headline-font text-3xl sm:text-4xl font-bold text-[#F5F7FC]">
              {t.work.chapterTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#AEBBD0] mt-2 max-w-2xl">
              {t.work.chapterSub}
            </p>
          </div>

          <div className="space-y-24">
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="group relative rounded-3xl overflow-hidden bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-500 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
                    {/* Visual Column */}
                    <div
                      className={`lg:col-span-7 relative overflow-hidden min-h-[360px] lg:min-h-full ${
                        isEven ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={project.heroImage}
                        alt={project.imageAlt[language]}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          isEven
                            ? 'lg:bg-gradient-to-r from-[#101E38] via-[#101E38]/30 to-transparent'
                            : 'lg:bg-gradient-to-l from-[#101E38] via-[#101E38]/30 to-transparent rtl:lg:bg-gradient-to-r'
                        }`}
                      />
                      <div className="absolute top-4 start-4">
                        <span className="px-3.5 py-1 rounded-full bg-[#080D1B]/90 backdrop-blur-md text-xs font-semibold text-[#48D9E8] border border-[#48D9E8]/30 flex items-center gap-1.5 shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                          <span>{project.category[language]}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                        isEven ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="space-y-5">
                        <div className="flex items-center justify-between text-xs font-mono text-[#AEBBD0]/70">
                          <span className="text-[#48D9E8] font-bold">CASE STUDY {project.number}</span>
                          <span>{project.refCode}</span>
                        </div>

                        <div className="space-y-2">
                          <span className="text-xs font-mono text-[#168BFF] uppercase tracking-wider block">
                            {project.subtitle[language]}
                          </span>
                          <h3 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC] leading-snug">
                            {project.title[language]}
                          </h3>
                        </div>

                        <p className="text-sm sm:text-base text-[#AEBBD0] leading-relaxed">
                          {project.shortDescription[language]}
                        </p>

                        {/* Disciplines Chips */}
                        <div className="space-y-2 pt-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-[#AEBBD0]/60 block font-semibold">
                            {language === 'ar' ? 'التخصصات:' : 'Disciplines:'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.disciplines[language].slice(0, 3).map((disc, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded bg-[#080D1B]/70 border border-[#AEBBD0]/15 text-xs text-[#AEBBD0]"
                              >
                                {disc}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Deliverables Preview */}
                        <div className="pt-2">
                          <ul className="space-y-1.5">
                            {project.deliverables[language].slice(0, 2).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#AEBBD0]/80">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#48D9E8] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-8 border-t border-[#AEBBD0]/15 flex items-center justify-between">
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#168BFF] hover:text-[#48D9E8] transition-colors group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                        >
                          <span>{t.common.exploreProject}</span>
                          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                        </Link>
                        <span className="text-xs font-mono text-[#AEBBD0]/60">
                          {project.locationTag[language]}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. WORK CTA */}
      <section className="relative py-28 bg-[#090E1C]/80 border-t border-[#AEBBD0]/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" />
        <Container className="relative z-10 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101E38] border border-[#48D9E8]/20 text-xs font-semibold text-[#48D9E8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'شراكة إبداعية' : 'Creative Collaboration'}</span>
          </div>

          <h2 className="headline-font text-3xl sm:text-5xl font-bold text-[#F5F7FC]">
            {language === 'ar' ? 'هل لديك مشروع أو فكرة طموحة؟' : 'Have a Project or Bold Ambition?'}
          </h2>

          <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed">
            {language === 'ar'
              ? 'يسعدنا مناقشة أهداف علامتك، واستكشاف كيف يمكن للتفكير الاستراتيجي والتصميم الاستثنائي أن يقدما قيمة حقيقية لأعمالك.'
              : 'We welcome the opportunity to discuss your commercial objectives and explore how measured strategy and design excellence can elevate your brand.'}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
            >
              {t.common.discussProject}
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              {t.common.exploreService}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
