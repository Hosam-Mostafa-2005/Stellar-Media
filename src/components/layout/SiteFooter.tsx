import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { servicesData } from "../../data/services";
import { projectsData } from "../../data/projects";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MapPin, Compass, ArrowUpRight } from "lucide-react";
import stellarLogo from "../../assets/stellar_logo.png";

export const SiteFooter: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="relative bg-[#060A16] border-t border-[#AEBBD0]/15 pt-20 pb-12 overflow-hidden text-sm">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#168BFF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#AEBBD0]/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label={
                language === "ar"
                  ? "الصفحة الرئيسية لوكالة ستيلار ميديا"
                  : "Stellar Media Homepage"
              }
            >
              <div className="w-10 h-10 rounded-xl bg-[#101E38] border border-[#48D9E8]/30 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(72,217,232,0.15)] group-hover:border-[#48D9E8] transition-colors overflow-hidden shrink-0">
                <img
                  src={stellarLogo}
                  alt={
                    language === "ar"
                      ? "شعار ستيلار ميديا الرسمي"
                      : "Stellar Media Official Logo"
                  }
                  className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex flex-col text-start justify-center">
                <span className="headline-font font-bold text-base tracking-wider text-[#F5F7FC]">
                  STELLAR MEDIA
                </span>
                <span className="text-[9px] text-[#AEBBD0]/80 tracking-[0.2em] uppercase font-inter mt-0.5">
                  ABU DHABI · AGENCY
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#AEBBD0] leading-relaxed max-w-sm font-normal">
              {language === "ar"
                ? "وكالة تسويق وإبداع متخصصة في أبوظبي. نعمل عند تقاطع التفكير الاستراتيجي والتصميم الاستثنائي لنصنع تجارب تترك أثراً حقيقياً."
                : "A specialized creative and strategic communications consultancy in Abu Dhabi, operating at the nexus of measured strategy and celestial design."}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#AEBBD0]/80">
              <MapPin className="w-3.5 h-3.5 text-[#48D9E8]" />
              <span>{t.common.coordinates}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono">
              {language === "ar" ? "التنقل الرئيسي" : "Navigation"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors"
                >
                  {t.nav.work}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono">
              {language === "ar" ? "الخدمات" : "Services"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title[language]}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-[-90deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Concept Projects */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F5F7FC] font-mono">
              {language === "ar" ? "مشاريع تصورية" : "Concept Projects"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {projectsData.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="text-[#AEBBD0] hover:text-[#48D9E8] transition-colors flex items-center justify-between group"
                  >
                    <span className="truncate">{project.title[language]}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-[-90deg] shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="inline-block text-[11px] text-[#48D9E8] bg-[#101E38] border border-[#48D9E8]/20 px-2.5 py-1 rounded">
                Concept Project / مشروع تصوري
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language, Integrity */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#AEBBD0]/70">
          <div className="flex items-center gap-3">
            <span>
              © {new Date().getFullYear()} Stellar Media.{" "}
              {t.common.rightsReserved}
            </span>
            <span className="hidden sm:inline text-[#AEBBD0]/30">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 whitespace-nowrap text-[#48D9E8]">
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span>Cosmic Editorial</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="pill" />
          </div>
        </div>
      </div>
    </footer>
  );
};
