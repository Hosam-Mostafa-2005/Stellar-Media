import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import backgroundAsset from '../assets/background.png';
import {
  ArrowRight,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Target,
  Users,
  Compass,
} from 'lucide-react';

const LEGACY_PROJECT_SLUG_ALIASES: Record<string, string> = {
  'cultural-destination': 'qasr-al-nour',
  'future-mobility': 'lumina-parfums',
};

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t, isRTL } = useLanguage();

  const resolvedSlug = slug ? LEGACY_PROJECT_SLUG_ALIASES[slug] || slug : '';
  const projectIndex = projectsData.findIndex((p) => p.slug === resolvedSlug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. PROJECT HERO & TITLE */}
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
                CASE STUDY // {project.number}
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

      {/* 2. HERO IMAGE SHOWCASE */}
      <section className="relative py-8">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-[#080D1B] border border-[#AEBBD0]/15 shadow-2xl aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={project.heroImage}
              alt={project.imageAlt[language]}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1B] via-transparent to-transparent opacity-60" />
          </div>
        </Container>
      </section>

      {/* 3. CASE STUDY DETAILED NARRATIVE & STRATEGY */}
      <section className="relative py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-12">
              {/* 1. Project Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#48D9E8] tracking-widest uppercase font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span>01 // OVERVIEW</span>
                </div>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {t.work.projectOverview}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.overview[language]}
                </p>
              </div>

              {/* 2. Marketing / Communication Objective */}
              <div className="space-y-4 pt-8 border-t border-[#AEBBD0]/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#48D9E8] tracking-widest uppercase font-semibold">
                  <Target className="w-4 h-4" />
                  <span>02 // OBJECTIVE</span>
                </div>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {language === 'ar' ? 'الأهداف التسويقية والاتصالية' : 'Marketing & Communication Objective'}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.objective[language]}
                </p>
              </div>

              {/* 3. Audience and Positioning */}
              <div className="space-y-4 pt-8 border-t border-[#AEBBD0]/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#48D9E8] tracking-widest uppercase font-semibold">
                  <Users className="w-4 h-4" />
                  <span>03 // AUDIENCE & POSITIONING</span>
                </div>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {language === 'ar' ? 'الجمهور المستهدف والتموضع' : 'Audience & Strategic Positioning'}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.audience[language]}
                </p>
              </div>

              {/* 4. Creative Strategy & Visual Direction */}
              <div className="space-y-4 pt-8 border-t border-[#AEBBD0]/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#48D9E8] tracking-widest uppercase font-semibold">
                  <Compass className="w-4 h-4" />
                  <span>04 // CREATIVE STRATEGY</span>
                </div>
                <h2 className="headline-font text-2xl sm:text-3xl font-bold text-[#F5F7FC]">
                  {language === 'ar' ? 'الاستراتيجية الإبداعية والتنفيذ' : 'Creative Strategy & Visual Direction'}
                </h2>
                <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-light">
                  {project.creativeStrategy[language]}
                </p>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Project Metadata Card */}
              <div className="p-8 rounded-2xl bg-[#101E38]/60 border border-[#AEBBD0]/15 space-y-6 shadow-xl">
                <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block font-semibold">
                  {language === 'ar' ? 'بيانات المشروع' : 'PROJECT SCOPE'}
                </span>
                <div className="space-y-4">
                  {project.metadata.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between pb-3 border-b border-[#AEBBD0]/10"
                    >
                      <span className="text-xs text-[#AEBBD0]">{item.label[language]}</span>
                      <span className="headline-font text-xs sm:text-sm font-semibold text-[#F5F7FC] text-end">
                        {item.value[language]}
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
                  {language === 'ar' ? 'مخرجات العمل الرئيسية' : 'SELECTED DELIVERABLES'}
                </span>
                <ul className="space-y-3">
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

              {/* Direct Project CTA Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#101E38] to-[#080D1B] border border-[#48D9E8]/30 space-y-4 shadow-xl">
                <span className="text-xs font-mono text-[#48D9E8] uppercase tracking-wider block font-semibold">
                  {language === 'ar' ? 'هل لديك مشروع مماثل؟' : 'INTERESTED IN A SIMILAR BRIEF?'}
                </span>
                <h3 className="headline-font text-lg font-bold text-[#F5F7FC]">
                  {language === 'ar'
                    ? 'لنتحدث عن أهداف علامتك وكيف يمكننا مساعدتك.'
                    : 'Let’s discuss your brand objectives and how we can collaborate.'}
                </h3>
                <div className="pt-2">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
                  >
                    {t.common.discussProject}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PREV / NEXT NAVIGATION */}
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
                    {language === 'ar' ? 'المشروع السابق' : 'Previous Project'}
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
                    {language === 'ar' ? 'المشروع التالي' : 'Next Project'}
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
