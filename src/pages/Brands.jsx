import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  CreditCard,
  Truck,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import SEO from "../components/SEO";
import Button from "../components/Button";
import JSJCardVisual from "../components/JSJCardVisual";
import { brandsData } from "../data/brands";

const brandIconMap = {
  Briefcase,
  GraduationCap,
  CreditCard,
  Truck,
};

export default function Brands() {
  return (
    <>
      <SEO
        title="Our Brands at Flasho Tech"
        description="Meet Flasho Tech Consultancy Services, BootUp360 for training, JSJ Card for digital identity, and BYER for B2B distribution."
      />

      {/* =========================================================================
          PAGE INTRODUCTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-20 bg-white">
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue border border-brandBlue/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brandRed" />
            <span>Flasho Tech Product & Service Portfolio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
          >
            Meet the brands behind Flasho Tech Private Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our consulting services, training initiative, and digital
            identity product, and B2B distribution platform. Each brand has a
            dedicated website where you can learn more.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          FOUR BRAND PANELS (One panel per brand, Mobile Stacked)
         ========================================================================= */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 bg-white">
        {brandsData.map((brand) => {
          const Icon = brandIconMap[brand.icon] || Briefcase;

          return (
            <motion.div
              key={brand.id}
              id={brand.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-xl hover:border-brandBlue/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Brand Information */}
                <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="h-12 sm:h-14 w-auto min-w-[90px] max-w-[160px] px-3 py-1.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} official logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brandBlue block">
                        {brand.category}
                      </span>
                      {/* <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-slate-900">
                        {brand.name}
                      </h2> */}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-brandRed">
                    {brand.tagline}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
                    {brand.description}
                  </p>

                  {/* Actions - full width on mobile */}
                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Button
                      href={brand.primaryCta.href}
                      variant="outline"
                      size="md"
                      icon={ExternalLink}
                      className="w-full sm:w-auto shadow-glow-blue justify-center"
                    >
                      {brand.primaryCta.label}
                    </Button>

                    {brand.secondaryCta && (
                      <Button
                        to={brand.secondaryCta.to}
                        href={brand.secondaryCta.href}
                        variant="outline"
                        size="md"
                        icon={ArrowRight}
                        className="w-full sm:w-auto justify-center"
                      >
                        {brand.secondaryCta.label}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Brand Showcase Visual Card */}
                <div className="lg:col-span-4 flex items-center justify-center pt-2 lg:pt-0">
                  {brand.id === "jsj-card" ? (
                    <div className="w-full max-w-sm space-y-3">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-3 shadow-xs">
                        <div className="w-14 h-14 p-1.5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
                          <img
                            src={brand.logo}
                            alt="JSJ Official Logo"
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="text-left">
                          <span className="text-xs font-bold text-slate-900 block font-heading">
                            Universal Purpose Pass
                          </span>
                          <span className="text-[11px] text-brandRed font-semibold block">
                            Driven by Purpose
                          </span>
                        </div>
                      </div>
                      <JSJCardVisual interactive={true} canFlip={true} />
                    </div>
                  ) : (
                    <div className="w-full p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3.5 flex flex-col items-center">
                      <div className="w-full h-20 sm:h-24 px-4 py-2 rounded-xl sm:rounded-2xl bg-white shadow-xs border border-slate-200/90 flex items-center justify-center">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} official logo`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                          {brand.shortName}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {brand.tagline}
                        </p>
                      </div>
                      <a
                        href={brand.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue hover:underline pt-1"
                      >
                        <span>
                          Visit{" "}
                          {brand.externalUrl
                            .replace("https://", "")
                            .replace("/", "")}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* =========================================================================
          CLOSING CALL TO ACTION
         ========================================================================= */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl p-6 sm:p-12 bg-white border-2 border-brandBlue/20 shadow-xl text-slate-900 text-center space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-slate-900">
            Have a project or partnership in mind?
          </h2>
          <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reach out to Flasho Tech Private Limited to discuss consulting
            services, workshop schedules, digital passes, or B2B supply
            integrations.
          </p>
          <div className="pt-2">
            <Button
              to="/contact"
              variant="outline"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto shadow-glow-red justify-center"
            >
              Send Enquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
