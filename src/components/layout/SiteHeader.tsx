import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X, ArrowUpRight } from "lucide-react";
import stellarLogo from "../../assets/stellar_logo.png";

export const SiteHeader: React.FC = () => {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTopSmoothly = () => {
    const isReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isReduced ? "auto" : "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    if (to === "/" && location.pathname === "/") {
      e.preventDefault();
      scrollToTopSmoothly();
    }
  };

  const navLinks = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/work", label: t.nav.work },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080D1B]/85 backdrop-blur-xl border-b border-[#AEBBD0]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo / Brand Wordmark */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 sm:gap-3.5 lg:gap-4 group focus:outline-none focus:ring-2 focus:ring-[#48D9E8] rounded-xl p-1 shrink-0"
            aria-label={
              language === "ar"
                ? "الصفحة الرئيسية لوكالة ستيلار ميديا"
                : "Stellar Media Homepage"
            }
          >
            {/* Logo Container: 56-64px on desktop, emblem fills the container prominently */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#101E38] border border-[#48D9E8]/35 flex items-center justify-center p-1 sm:p-1.5 shadow-[0_0_20px_rgba(72,217,232,0.18)] group-hover:border-[#48D9E8] group-hover:shadow-[0_0_25px_rgba(72,217,232,0.35)] transition-all overflow-hidden shrink-0">
              <img
                src={stellarLogo}
                alt={
                  language === "ar"
                    ? "شعار ستيلار ميديا الرسمي"
                    : "Stellar Media Official Logo"
                }
                className="w-full h-full object-contain opacity-95 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(72,217,232,0.25)]"
              />
            </div>
            {/* Wordmark and Subtitle: Refined and Compact Beside the Icon */}
            <div className="flex flex-col text-start justify-center">
              <span className="headline-font font-bold text-xs sm:text-sm lg:text-[15px] tracking-wider text-[#F5F7FC] group-hover:text-[#48D9E8] transition-colors leading-none">
                STELLAR MEDIA
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] text-[#AEBBD0]/80 tracking-[0.2em] uppercase font-inter mt-1">
                ABU DHABI · AGENCY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-xl bg-[#101E38]/40 border border-[#AEBBD0]/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={(e) => handleNavClick(e, link.to)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#48D9E8] ${
                    isActive
                      ? "bg-[#101E38] text-[#48D9E8] font-semibold shadow-[0_0_15px_rgba(72,217,232,0.15)] border border-[#48D9E8]/30"
                      : "text-[#AEBBD0] hover:text-[#F5F7FC] hover:bg-[#101E38]/50"
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-3.5">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Direct Contact CTA Button */}
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#168BFF]/15 hover:bg-[#168BFF] text-[#48D9E8] hover:text-white border border-[#48D9E8]/30 hover:border-[#168BFF] transition-all duration-300 shadow-[0_0_20px_rgba(22,139,255,0.15)] flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#48D9E8]"
            >
              <span>{t.nav.contactCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#101E38] border border-[#AEBBD0]/20 text-[#AEBBD0] hover:text-[#F5F7FC] focus:outline-none focus:ring-2 focus:ring-[#48D9E8]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#AEBBD0]/15 bg-[#080D1B]/95 backdrop-blur-2xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.to);
                  }}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#101E38] text-[#48D9E8] border border-[#48D9E8]/30 font-semibold"
                      : "text-[#AEBBD0] hover:text-[#F5F7FC] hover:bg-[#101E38]/40"
                  }`}
                >
                  {link.label}
                </NavLink>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#AEBBD0]/10 flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#168BFF] text-white text-center font-medium text-sm shadow-[0_0_20px_rgba(22,139,255,0.35)] flex items-center justify-center gap-2"
              >
                <span>{t.nav.contactCta}</span>
                <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
