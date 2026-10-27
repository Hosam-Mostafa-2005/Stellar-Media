import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Analytics } from "@vercel/analytics/react";
// Helper component to scroll to top upon page navigation and manage scroll restoration
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#080D1B] text-[#F5F7FC] selection:bg-[#168BFF] selection:text-white">
          <SiteHeader />
          <main className="flex-1">
            <Routes>
              {/* Primary 5 Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Detail Routes */}
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/work/:slug" element={<ProjectDetailPage />} />

              {/* 404 Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <SiteFooter />
        </div>
        <Analytics />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
