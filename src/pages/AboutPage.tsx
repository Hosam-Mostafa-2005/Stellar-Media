import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import backgroundAsset from '../assets/background.png';
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Layers,
  Flame,
  Infinity as InfinityIcon,
  Eye,
  MapPin,
  CircleDot,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="relative overflow-hidden star-bg text-start">
      {/* 1. HERO SECTION WITH LAYERED COSMIC BACKGROUND */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-[#AEBBD0]/10 overflow-hidden">
        {/* Layered Deep Space Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundAsset}
            alt="Stellar Media Cosmic Nebula Background"
            className="w-full h-full object-cover object-[center_top] opacity-45 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1B]/90 via-[#080D1B]/75 to-[#080D1B]" />
          <div className="absolute top-10 start-1/4 w-[500px] h-[500px] rounded-full bg-[#48D9E8]/10 blur-[140px] pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101E38]/90 border border-[#48D9E8]/30 text-xs font-semibold text-[#48D9E8] tracking-widest uppercase shadow-[0_0_16px_rgba(72,217,232,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
              <span>{t.about.heroEyebrow}</span>
            </div>

            <h1 className="headline-font text-4xl sm:text-6xl font-bold tracking-tight text-[#F5F7FC] leading-[1.18] max-w-3xl">
              {t.about.heroTitle}
            </h1>

            <p className="text-lg sm:text-xl text-[#AEBBD0] max-w-2xl leading-relaxed font-light">
              {t.about.heroSub}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="#philosophy"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 rtl:rotate-90 ltr:rotate-90" />}
              >
                {t.about.heroCta}
              </Button>
              <span className="text-xs text-[#AEBBD0]/80 font-mono tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#48D9E8]" />
                <span>{t.common.coordinates}</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STRATEGIC PERSPECTIVE SECTION — EDITORIAL SPLIT (MATCHING STITCH) */}
      <section className="relative py-28 sm:py-36 border-b border-[#AEBBD0]/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Start Column: Editorial Perspective Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#101E38] border border-[#AEBBD0]/20 text-xs text-[#48D9E8] font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8]" />
                <span>{t.about.perspectiveTag}</span>
              </div>

              <h2 className="headline-font text-3xl sm:text-5xl font-bold text-[#F5F7FC] leading-tight">
                {t.about.perspectiveTitle}
              </h2>

              <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed">
                {t.about.perspectiveBody1}
              </p>

              <p className="text-sm sm:text-base text-[#AEBBD0]/80 leading-relaxed font-light">
                {t.about.perspectiveBody2}
              </p>

              {/* Metric Strip with Hairline Dividers */}
              <div className="pt-6 grid grid-cols-2 gap-6 border-t border-[#AEBBD0]/15">
                <div>
                  <span className="block headline-font text-3xl sm:text-4xl font-bold text-[#F5F7FC]">
                    {t.about.metric1Val}
                  </span>
                  <span className="text-xs text-[#AEBBD0] uppercase tracking-wider mt-1 block">
                    {t.about.metric1Label}
                  </span>
                </div>
                <div>
                  <span className="block headline-font text-3xl sm:text-4xl font-bold text-[#48D9E8]">
                    {t.about.metric2Val}
                  </span>
                  <span className="text-xs text-[#AEBBD0] uppercase tracking-wider mt-1 block">
                    {t.about.metric2Label}
                  </span>
                </div>
              </div>
            </div>

            {/* End Column: Astral Geometry Diagram Container */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden bg-[#101E38]/50 border border-[#AEBBD0]/20 p-4 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-square flex items-center justify-center bg-[#090E1C]">
                  {/* Concentric orbital lines */}
                  <div className="absolute w-[82%] h-[82%] rounded-full border border-[#48D9E8]/20 pointer-events-none" />
                  <div className="absolute w-[62%] h-[62%] rounded-full border border-[#168BFF]/25 pointer-events-none" />
                  <div className="absolute w-[42%] h-[42%] rounded-full border border-[#AEBBD0]/15 pointer-events-none" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#48D9E8]/20 to-transparent pointer-events-none" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#48D9E8]/20 to-transparent pointer-events-none" />

                  {/* Center Core Glyph */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#101E38] border border-[#48D9E8]/40 flex items-center justify-center text-[#48D9E8] shadow-[0_0_30px_rgba(72,217,232,0.25)] mb-4">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <span className="headline-font font-bold text-lg text-[#F5F7FC]">
                      STELLAR CORE MATRIX
                    </span>
                    <span className="text-xs text-[#48D9E8] font-mono tracking-widest mt-1">
                      01 // ORBITAL ALIGNMENT
                    </span>
                  </div>

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090E1C]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Coordinates Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 rounded-xl bg-[#101E38]/90 backdrop-blur-md border border-[#AEBBD0]/20 text-xs">
                    <span className="text-[#48D9E8] font-mono font-semibold">AUH • SYSTEM</span>
                    <span className="text-[#AEBBD0]">ABU DHABI · UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE PHILOSOPHY / 3 DISTINCT PILLARS */}
      <section id="philosophy" className="relative py-28 sm:py-36 bg-[#090E1C]/60 border-b border-[#AEBBD0]/10">
        <Container>
          <div className="max-w-2xl space-y-3 mb-16">
            <span className="text-xs font-semibold text-[#48D9E8] tracking-widest uppercase">
              {t.about.corePillarsTag}
            </span>
            <h2 className="headline-font text-3xl sm:text-4xl font-bold text-[#F5F7FC]">
              {t.about.corePillarsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 01 — Clarity Over Noise */}
            <div className="relative p-8 rounded-2xl bg-[#101E38]/50 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#48D9E8] tracking-widest font-semibold">
                    01 // COSMOS
                  </span>
                  <Eye className="w-4 h-4 text-[#48D9E8]/70" />
                </div>
                <h3 className="headline-font text-xl font-bold text-[#F5F7FC] group-hover:text-[#48D9E8] transition-colors">
                  {t.about.p1Title}
                </h3>
                <p className="text-sm text-[#AEBBD0] leading-relaxed">
                  {t.about.p1Desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#AEBBD0]/10 text-xs text-[#AEBBD0]/70 font-mono tracking-wider">
                {t.about.p1Sub}
              </div>
            </div>

            {/* Principle 02 — Strategy Meets Creativity (Featured Cyan Border) */}
            <div className="relative p-8 rounded-2xl bg-[#101E38]/50 border border-[#48D9E8]/35 shadow-[0_0_25px_rgba(72,217,232,0.06)] hover:border-[#48D9E8]/60 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#48D9E8] tracking-widest font-semibold">
                    02 // SYNTHESIS
                  </span>
                  <InfinityIcon className="w-4 h-4 text-[#48D9E8]" />
                </div>
                <h3 className="headline-font text-xl font-bold text-[#F5F7FC] group-hover:text-[#48D9E8] transition-colors">
                  {t.about.p2Title}
                </h3>
                <p className="text-sm text-[#AEBBD0] leading-relaxed">
                  {t.about.p2Desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#AEBBD0]/10 text-xs text-[#AEBBD0]/70 font-mono tracking-wider">
                {t.about.p2Sub}
              </div>
            </div>

            {/* Principle 03 — Impact Beyond Appearance */}
            <div className="relative p-8 rounded-2xl bg-[#101E38]/50 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#48D9E8] tracking-widest font-semibold">
                    03 // RESONANCE
                  </span>
                  <Flame className="w-4 h-4 text-[#48D9E8]/70" />
                </div>
                <h3 className="headline-font text-xl font-bold text-[#F5F7FC] group-hover:text-[#48D9E8] transition-colors">
                  {t.about.p3Title}
                </h3>
                <p className="text-sm text-[#AEBBD0] leading-relaxed">
                  {t.about.p3Desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#AEBBD0]/10 text-xs text-[#AEBBD0]/70 font-mono tracking-wider">
                {t.about.p3Sub}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. WHAT WE BELIEVE — EMOTIONAL CENTERPIECE (ATMOSPHERIC BACKDROP) */}
      <section className="relative py-32 sm:py-44 border-b border-[#AEBBD0]/10 overflow-hidden flex items-center justify-center">
        {/* Ambient Nebula Layer */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
          <img
            src={backgroundAsset}
            alt="Deep celestial star cloud"
            className="w-full h-full object-cover object-center scale-110"
          />
        </div>
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#168BFF]/10 blur-[150px] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl space-y-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#101E38]/70 border border-[#48D9E8]/20">
            <Sparkles className="w-6 h-6 text-[#48D9E8]" />
          </div>

          <blockquote className="headline-font text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F5F7FC] leading-[1.28] text-balance">
            {t.about.statement}
          </blockquote>

          <p className="text-base sm:text-xl text-[#AEBBD0] max-w-2xl mx-auto font-light leading-relaxed">
            {t.about.statementSub}
          </p>

          <div className="pt-4 flex items-center justify-center gap-3 text-xs text-[#48D9E8] font-mono tracking-widest uppercase">
            <span className="w-8 h-px bg-[#48D9E8]/40" />
            <span>{t.about.statementAuthor}</span>
            <span className="w-8 h-px bg-[#48D9E8]/40" />
          </div>
        </Container>
      </section>

      {/* 5. METHODOLOGY (4 STEPS WITH DELICATE HAIRLINE) */}
      <section className="relative py-28 sm:py-36 border-b border-[#AEBBD0]/10">
        <Container>
          <div className="max-w-2xl mb-16">
            <SectionHeading
              eyebrow={t.about.methodologyTag}
              title={t.about.methodologyTitle}
              description={t.about.methodologySub}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: t.about.s1Title,
                sub: t.about.s1Sub,
                desc: t.about.s1Desc,
              },
              {
                num: '02',
                title: t.about.s2Title,
                sub: t.about.s2Sub,
                desc: t.about.s2Desc,
              },
              {
                num: '03',
                title: t.about.s3Title,
                sub: t.about.s3Sub,
                desc: t.about.s3Desc,
              },
              {
                num: '04',
                title: t.about.s4Title,
                sub: t.about.s4Sub,
                desc: t.about.s4Desc,
              },
            ].map((st) => (
              <div
                key={st.num}
                className="p-8 rounded-2xl bg-[#101E38]/40 border border-[#AEBBD0]/15 hover:border-[#48D9E8]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#080D1B] border border-[#AEBBD0]/20 flex items-center justify-center text-[#48D9E8] font-bold text-lg mb-6 shadow-inner">
                    {st.num}
                  </div>
                  <h4 className="headline-font text-xl font-bold text-[#F5F7FC] mb-1">
                    {st.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[#AEBBD0] uppercase tracking-wider block mb-3">
                    {st.sub}
                  </span>
                  <p className="text-sm text-[#AEBBD0] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. BRIDGE TO SERVICES */}
      <section className="relative py-28 bg-[#090E1C]/80 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 rounded-full bg-[#48D9E8]/10 blur-[130px] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101E38] border border-[#48D9E8]/20 text-xs font-semibold text-[#48D9E8]">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.about.bridgeTag}</span>
          </div>

          <h2 className="headline-font text-3xl sm:text-5xl font-bold text-[#F5F7FC]">
            {t.about.bridgeTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed">
            {t.about.bridgeSub}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              to="/services"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 rtl:rotate-180" />}
            >
              {t.about.bridgeCta}
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              {t.common.getInTouch}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
