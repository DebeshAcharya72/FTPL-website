import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Briefcase,
  GraduationCap,
  CreditCard,
  Truck,
  Sparkles,
  ShieldCheck,
  Building2,
  ExternalLink,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import Logo from "../components/Logo";
import JSJCardVisual from "../components/JSJCardVisual";
import { brandsData } from "../data/brands";
import { companyInfo } from "../data/company";

const brandIconMap = {
  Briefcase,
  GraduationCap,
  CreditCard,
  Truck,
};

export default function Home() {
  return (
    <>
      <SEO
        title="Flasho Tech Private Limited"
        description="Business consulting, technology solutions, training, and digital products from Flasho Tech Private Limited in Bhubaneswar."
      />

      {/* =========================================================================
          HERO SECTION (Two-column desktop with logo theme & visual)
         ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28 bg-white">
        {/* Subtle background ambient glows matching logo blue and red */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brandBlue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-brandRed/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Subtext, Buttons (shown before visual on mobile) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue border border-brandBlue/20"
              >
                <span className="flex h-2 w-2 rounded-full bg-brandRed animate-pulse" />
                <span>
                  Bhubaneswar, Odisha • Technology, Consulting & Digital
                  Platforms
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-slate-900 leading-[1.14]"
              >
                Helping Businesses Grow Through{" "}
                <span className="bg-clip-text bg-gradient-to-r from-brandBlue via-blue-600 to-brandRed">
                  Technology and Expertise
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Flasho Tech Private Limited brings together business consulting,
                technology solutions, practical training, and digital platforms
                to help organisations improve productivity and expand into new
                markets. Discover our services and explore the brands turning
                ideas into opportunities.
              </motion.p>

              {/* Action Buttons: [Explore Services] → /services/ and [Meet Our Brands] → /brands/ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
              >
                <Button
                  to="/services"
                  variant="outline"
                  size="lg"
                  // icon={ArrowRight}
                  className="flex-1 sm:flex-none sm:w-auto text-sm sm:text-base px-4 sm:px-6"
                >
                  Explore Services
                </Button>

                <Button
                  to="/brands"
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none sm:w-auto text-sm sm:text-base px-4 sm:px-6"
                >
                  Meet Our Brands
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500"
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Govt. Registered Entity (CIN: {companyInfo.cin})
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-brandBlue" />
                  Headquartered in Bhubaneswar
                </span>
              </motion.div>
            </div>

            {/* Right Column: Branded Visual / Logo Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center order-2"
            >
              <div className="w-full max-w-md space-y-4">
                {/* Official Logo Banner Card */}
                <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-soft-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brandRed/5 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-brandBlue/5 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs">
                      <Logo size="lg" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brandBlue">
                          Technology & Consulting
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brandRed" />
                        <span className="text-xs font-bold uppercase tracking-wider text-brandRed">
                          Digital Platforms
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        {companyInfo.tagline}
                      </p>
                    </div>

                    {/* Quick Brand Badges */}
                    <div className="pt-3 border-t border-slate-100 w-full grid grid-cols-4 gap-2 text-center">
                      <div className="p-1.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-700">
                        FTCS
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-700">
                        BootUp
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-700">
                        JSJ Card
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-50 text-[11px] font-bold text-slate-700">
                        BYER
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Card Pass Visual */}
                <JSJCardVisual interactive={true} canFlip={true} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE CAN HELP (Two Service Cards)
         ========================================================================= */}
      <section className="py-20 bg-slate-50/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Consulting Services"
            title="How We Can Help"
            // highlightText="Help"
            description="Flasho Tech Consultancy Services (FTCS) helps startups and SMEs make informed business decisions and build technology tailored to their daily work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Plan your next stage of growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-xl hover:border-brandBlue/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brandBlue/10 text-brandBlue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 group-hover:text-brandBlue transition-colors">
                  Plan your next stage of growth
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Use market research, financial analysis, and marketing
                  strategy to evaluate new opportunities and decide where to
                  focus.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button
                  to="/services/#business-consulting"
                  variant="outline"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-between group-hover:border-brandBlue group-hover:text-brandBlue"
                >
                  Explore Business Consulting
                </Button>
              </div>
            </motion.div>

            {/* Card 2: Build technology around your work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-xl hover:border-brandRed/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brandRed/10 text-brandRed flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 group-hover:text-brandRed transition-colors">
                  Build technology around your work
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Develop a website, replace a manual workflow with custom
                  software, or explore where AI and machine learning can support
                  your operations.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Button
                  to="/services/#technology-consulting"
                  variant="outline"
                  size="md"
                  icon={ArrowRight}
                  className="w-full justify-between group-hover:border-brandRed group-hover:text-brandRed"
                >
                  Explore Technology Consulting
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET OUR BRANDS (4 Brand Cards + [Meet Our Brands] Button)
         ========================================================================= */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <SectionHeading
          badge="Product & Consulting Wings"
          title="Meet Our Brands"
          // highlightText="Brands"
          description="Explore the consulting wing, training initiative, and digital products turning ideas into tangible opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {brandsData.map((brand, index) => {
            const Icon = brandIconMap[brand.icon] || Briefcase;
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-7 rounded-3xl bg-white border border-slate-200 shadow-soft hover:shadow-soft-xl hover:border-brandBlue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Brand Header & Official Logo */}
                  <div className="flex items-center justify-between mb-5 gap-3">
                    <div className="h-14 w-32 px-3 py-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center group-hover:border-brandBlue/40 group-hover:shadow-sm transition-all shrink-0">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} official logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 shrink-0 text-right">
                      {brand.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brandBlue transition-colors">
                    {brand.name}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {brand.homeSummary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={brand.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brandBlue hover:underline"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Action Button */}
        <div className="mt-12 text-center">
          <Button
            to="/brands"
            variant="outline"
            size="lg"
            icon={ArrowRight}
            className="shadow-glow-blue"
          >
            Meet Our Brands
          </Button>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CALL TO ACTION (Clean Light Card)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-t border-slate-200">
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 lg:p-16 bg-white border-2 border-brandBlue/20 shadow-xl text-slate-900 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brandBlue/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brandRed/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue border border-brandBlue/20">
              <Zap className="w-3.5 h-3.5 text-brandRed" />
              <span>Project Discussion</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight">
              Tell us what you’re working on
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you’re planning a business expansion, a software project,
              or a training programme, share what you want to achieve and where
              you need support.
            </p>

            <div className="pt-2">
              <Button
                to="/contact"
                variant="outline"
                size="lg"
                icon={ArrowRight}
                className="shadow-glow-red"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
