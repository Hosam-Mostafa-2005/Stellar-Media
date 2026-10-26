import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import backgroundAsset from '../assets/background.png';
import {
  ArrowRight,
  AlertCircle,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t, isRTL } = useLanguage();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. CONCEPT DISCLAIMER BANNER */}
      <div className="bg-[#080D1B] border-b border-[#AEBBD0]/10 py-3 text-xs">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[#48D9E8]">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span className="font-semibold">Concept Project / مشروع تصوري</span>
            </div>
            <span className="text-[#AEBBD0]/70 hidden sm:inline font-mono">
              Stellar Media Design Lab Monograph
            </span>
          </div>
        </Container>
      </div>

      {/* 2. PROJECT HERO & TITLE */}
      <section className="relative pt-12 pb-16 border-b border-[#AEBBD0]/10 overflow-hidden">
        {/* Subtle cosmic background layer */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Background"
            className="w-full h-full object-cover object-[center_top]"
          />
          <div className="absolute inset-0 bg-[#080D1B]/90" />
        </div>

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-[#AEBBD0]">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-[#48D9E8] transition-colors">
                {t.nav.home}
              </Link>
              <span>/</span>
              <Link to="/work" className="hover:text-[#48D9E8] transition-colors">
                {t.nav.work}
              </Link>
              <span>/</span>
              <span className="text-[#48D9E8] font-medium">{project.title[language]}</span>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs text-[#48D9E8] hover:underline"
            >
              <span>{t.common.backToWork}</span>
            </Link>
          </div>

          <div className="space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#101E38] border border-[#48D9E8]/30 text-xs font-mono text-[#48D9E8] font-semibold">
                CONCEPT // {project.number}
              </span>
              <span className="text-xs text-[#168BFF] font-semibold uppercase tracking-wider font-mono">
                {project.category[language]}
              </span>
              <span className="text-xs text-[#AEBBD0]/60 font-mono">
                {project.refCode}
              </span>
            </div>

            <h1 className="headline-font text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F7FC] leading-tight">
              {project.title[language]}
            </h1>

            <p className="text-lg sm:text-xl text-[#48D9E8] font-medium leading-relaxed font-mono">
              {project.subtitle[language]}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#AEBBD0]">
              <MapPin className="w-4 h-4 text-[#48D9E8]" />
              <span>{project.locationTag[language]}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. HERO IMAGE SHOWCASE */}
      <section className="relative py-8">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-[#080D1B] border border-[#AEBBD0]/15 shadow-2xl aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={project.heroImage}
              alt={project.imageAlt ? project.imageAlt[language] : project.title[language]}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1B] via-transparent to-transparent opacity-60" />
          </div>
        </Container>
      </section>

      {/* 4. OVERVIEW & STRATEGIC RATIONALE */}
      <section className="relative py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-10">
              {/* Concept Overview */}
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#48D9E8] tracking-widest uppercase block font-semibold">
                  01 // OVERVIEW
                </span>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {t.work.projectOverview}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.overview[language]}
                </p>
              </div>

              {/* Strategic Rationale */}
              <div className="space-y-4 pt-6 border-t border-[#AEBBD0]/10">
                <span className="text-xs font-mono text-[#48D9E8] tracking-widest uppercase block font-semibold">
                  02 // STRATEGY
                </span>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {t.work.strategicContext}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.strategicRationale[language]}
                </p>
              </div>

              {/* Creative Execution */}
              <div className="space-y-4 pt-6 border-t border-[#AEBBD0]/10">
                <span className="text-xs font-mono text-[#48D9E8] tracking-widest uppercase block font-semibold">
                  03 // EXECUTION
                </span>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {t.work.creativeExecution}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.creativeExecution[language]}
                </p>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Stats Card */}
              <div className="p-8 rounded-2xl bg-[#101E38]/60 border border-[#AEBBD0]/15 space-y-6">
                <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block font-semibold">
                  EXPLORATION METRICS
                </span>
                <div className="space-y-4">
                  {project.stats.map((st, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between pb-3 border-b border-[#AEBBD0]/10"
                    >
                      <span className="text-sm text-[#AEBBD0]">{st.label[language]}</span>
                      <span className="headline-font text-lg font-bold text-[#F5F7FC]">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disciplines Chips */}
              <div className="p-8 rounded-2xl bg-[#101E38]/40 border border-[#AEBBD0]/15 space-y-4">
                <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block font-semibold">
                  {t.work.keyDisciplines}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.disciplines[language].map((disc, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#080D1B] border border-[#AEBBD0]/15 text-xs text-[#F5F7FC]"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Suite */}
              <div className="p-8 rounded-2xl bg-[#080D1B] border border-[#AEBBD0]/15 space-y-4">
                <span className="text-xs font-mono text-[#168BFF] uppercase tracking-wider block font-semibold">
                  PROTOTYPE ASSETS
                </span>
                <ul className="space-y-2.5">
                  {project.deliverables[language].map((del, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-[#AEBBD0] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#48D9E8] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. PREV / NEXT NAVIGATION */}
      <section className="relative py-12 border-t border-[#AEBBD0]/10 bg-[#060A16]">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6">
            {prevProject ? (
              <Link
                to={`/work/${prevProject.slug}`}
                className="flex items-center gap-3 text-sm text-[#AEBBD0] hover:text-[#48D9E8] transition-colors group"
              >
                {isRTL ? (
                  <ChevronRight className="w-5 h-5 text-[#48D9E8] group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ChevronLeft className="w-5 h-5 text-[#48D9E8] group-hover:-translate-x-1 transition-transform" />
                )}
                <div>
                  <span className="text-[11px] font-mono text-[#AEBBD0]/60 uppercase block">
                    {language === 'ar' ? 'المشروع السابق' : 'Previous Concept'}
                  </span>
                  <span className="font-semibold text-[#F5F7FC] group-hover:text-[#48D9E8]">
                    {prevProject.title[language]}
                  </span>
                </div>
              </Link>
            ) : <div />}

            <Link
              to="/work"
              className="text-xs text-[#AEBBD0] hover:text-[#48D9E8] border border-[#AEBBD0]/20 px-4 py-2 rounded-lg"
            >
              {t.common.backToWork}
            </Link>

            {nextProject ? (
              <Link
                to={`/work/${nextProject.slug}`}
                className="flex items-center gap-3 text-sm text-[#AEBBD0] hover:text-[#48D9E8] transition-colors group text-end"
              >
                <div>
                  <span className="text-[11px] font-mono text-[#AEBBD0]/60 uppercase block">
                    {language === 'ar' ? 'المشروع التالي' : 'Next Concept'}
                  </span>
                  <span className="font-semibold text-[#F5F7FC] group-hover:text-[#48D9E8]">
                    {nextProject.title[language]}
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
