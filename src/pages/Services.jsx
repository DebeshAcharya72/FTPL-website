import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Cpu,
  Activity,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import Button from "../components/Button";
import { consultingData } from "../data/services";

const sectionIconMap = {
  "business-consulting": TrendingUp,
  "technology-consulting": Cpu,
  "industrial-monitoring": Activity,
};

export default function Services() {
  const location = useLocation();

  // Scroll to anchor smoothly if hash is present
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Consulting Services at Flasho Tech"
        description="Explore business strategy, market research, digital marketing, marketplace listings, website and software development, AI, and industrial monitoring services from FTCS."
      />

      {/* =========================================================================
          PAGE INTRODUCTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-20 bg-white">
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue border border-brandBlue/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brandRed" />
            <span>Flasho Tech Consultancy Services (FTCS)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
          >
            {consultingData.pageTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {consultingData.introduction}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-4"
          >
            <a
              href={consultingData.ftcsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-brandBlue hover:underline p-2"
            >
              <span>Visit FTCS (Dedicated Site)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          IN-PAGE ANCHOR NAVIGATION MENU (Optimized for Mobile Swipe)
         ========================================================================= */}
      <section className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200 py-2.5 sm:py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {consultingData.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap bg-slate-100 text-slate-700 hover:bg-brandBlue hover:text-white border border-slate-200 transition-colors shrink-0"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE THREE CONSULTING SECTIONS
         ========================================================================= */}
      <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16 bg-white">
        {consultingData.sections.map((section, idx) => {
          const Icon = sectionIconMap[section.id] || TrendingUp;

          return (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft scroll-mt-28 sm:scroll-mt-36"
            >
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brandBlue/10 text-brandBlue flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brandBlue block">
                      Section 0{idx + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-slate-900">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <Button
                  to={section.ctaTo}
                  variant="accent"
                  size="md"
                  icon={ArrowRight}
                  className="w-full sm:w-auto shadow-glow-blue justify-center"
                >
                  {section.ctaLabel}
                </Button>
              </div>

              {/* Section Intro */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl">
                {section.introduction}
              </p>

              {/* Services List / Cards */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {section.services.map((svc) => (
                  <div
                    key={svc.name}
                    className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between hover:border-brandBlue/40 transition-colors"
                  >
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-heading text-slate-900 mb-1.5 sm:mb-2">
                        {svc.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Section Link */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-xs text-slate-500">
                  Preselects topic on the enquiry form.
                </span>
                <Button
                  to={section.ctaTo}
                  variant="outline"
                  size="sm"
                  icon={ArrowRight}
                  className="w-full sm:w-auto justify-center"
                >
                  {section.ctaLabel}
                </Button>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* =========================================================================
          CLOSING FTCS CALLOUT
         ========================================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-white border border-slate-200 shadow-soft text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900">
            Flasho Tech Consultancy Services (FTCS)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Our consulting wing provides dedicated advisory for startups,
            growing SMEs, and industrial manufacturing plants.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={consultingData.ftcsUrl}
              variant="outline"
              size="md"
              icon={ExternalLink}
              className="w-full sm:w-auto justify-center"
            >
              Visit FTCS
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="md"
              className="w-full sm:w-auto justify-center"
            >
              Contact Flasho Tech
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
