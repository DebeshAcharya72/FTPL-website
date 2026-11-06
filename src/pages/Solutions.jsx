import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Compass,
  QrCode,
  Users,
  Trophy,
  Layers,
  Network,
  Share2,
  DollarSign,
  Lock,
  BarChart2,
  ShieldAlert,
  FileCheck,
  Building,
  Wrench,
  GraduationCap,
  CheckSquare,
  Zap,
  Ticket,
  ScanLine,
  Store,
  Activity,
  BellRing,
  PieChart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

import { solutionsTabs } from '../data/solutions';

const iconMap = {
  Smartphone,
  Compass,
  QrCode,
  Users,
  Trophy,
  Layers,
  Network,
  Share2,
  DollarSign,
  Lock,
  BarChart2,
  ShieldAlert,
  FileCheck,
  Building,
  Wrench,
  GraduationCap,
  CheckSquare,
  Zap,
  Ticket,
  ScanLine,
  Store,
  Activity,
  BellRing,
  PieChart
};

export default function Solutions() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('sbs');

  // Sync tab with URL hash if present (e.g. #amplify, #careers-system)
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const matched = solutionsTabs.find(tab => tab.id === hashId);
      if (matched) {
        setActiveTab(matched.id);
      }
    }
  }, [location.hash]);

  const currentSolution = solutionsTabs.find(tab => tab.id === activeTab) || solutionsTabs[0];

  return (
    <>
      <SEO
        title="Solutions - Smart Business, Amplify, Careers & Events Systems"
        description="Explore FTPL's modular digital platforms: JSJ Smart Business Solutions (SBS), JSJ Amplify, Career Management System, and high-density Event Management System."
      />

      {/* =========================================================================
          SOLUTIONS HERO
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent border border-accent/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>FTPL Integrated Technology Suite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-primary-950 dark:text-white tracking-tight"
          >
            Unified Digital Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
              Real-World Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            From single retail shops to 50,000-attendee state exhibitions and statewide university recruitment drives—our platforms are architected for high concurrency and zero complexity.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          TAB NAVIGATION BAR
         ========================================================================= */}
      <section className="sticky top-20 z-30 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md border-y border-slate-200/80 dark:border-dark-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {solutionsTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    window.history.replaceState(null, '', `#${tab.id}`);
                  }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-accent text-white border-accent shadow-glow-accent'
                      : 'bg-slate-100 dark:bg-dark-card text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600'
                  }`}
                >
                  <span>{tab.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-dark-elevated text-slate-600 dark:text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACTIVE SOLUTION DETAIL SECTION
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSolution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            id={currentSolution.id}
            className="space-y-16"
          >
            {/* Header Box */}
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-dark-card dark:via-dark-card dark:to-dark-elevated border border-slate-200/80 dark:border-dark-border shadow-soft">
              <div className="max-w-4xl space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                  {currentSolution.tagline}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-primary-950 dark:text-white">
                  {currentSolution.title}
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentSolution.description}
                </p>

                {/* Case Study Pill */}
                {currentSolution.caseStudy && (
                  <div className="mt-6 p-4 rounded-2xl bg-accent/5 dark:bg-accent/15 border border-accent/20 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-xs uppercase tracking-wider text-accent block">
                        Field Deployment Proof
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-0.5">
                        {currentSolution.caseStudy}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Feature Modules 6-Grid */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white">
                  Core Modules & Capabilities
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Engineered for seamless integration, minimal learning curve, and high operational reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {currentSolution.features.map((feature, fIdx) => {
                  const Icon = iconMap[feature.icon] || Sparkles;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIdx * 0.08 }}
                      className="p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center mb-5">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-bold font-heading text-primary-950 dark:text-white">
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Solution CTA Box */}
            <div className="rounded-3xl p-8 sm:p-10 bg-primary-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-500/20 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                  Get Started With {currentSolution.shortTitle}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                  Ready to deploy {currentSolution.title} in your workflow?
                </h4>
                <p className="text-xs sm:text-sm text-blue-200/80 mt-1">
                  Our technical onboarding team sets up your account and handles hardware/QR rollout in 24 hours.
                </p>
              </div>
              <Button
                to={currentSolution.ctaLink}
                variant="accent"
                size="lg"
                icon={ArrowRight}
                className="shrink-0 shadow-glow-accent text-white"
              >
                {currentSolution.ctaText}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <CTASection
        badge="Enterprise Customization"
        title="Need a Custom Ecosystem Solution?"
        subtitle="Our engineering team builds bespoke white-labeled portals, multi-tier QR validation networks, and custom APIs tailored to state government and private initiatives."
        primaryCtaText="Consult with our Tech Team"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore Consulting Services"
        secondaryCtaLink="/services"
      />
    </>
  );
}
