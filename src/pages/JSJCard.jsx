import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  UserPlus,
  CreditCard,
  Scan,
  Award,
  Percent,
  Key,
  Gift,
  TrendingUp,
  QrCode,
  Radio,
  MapPin,
  GraduationCap,
  BarChart3,
  BookOpen,
  Zap,
  HelpCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import JSJCardVisual from '../components/JSJCardVisual';
import CTASection from '../components/CTASection';

import { cardSpecs, howItWorksSteps, cardBenefits, cardFaqs } from '../data/jsjCard';
import { companyInfo } from '../data/company';

const stepIconMap = {
  UserPlus,
  CreditCard,
  Scan,
  Award
};

const benefitIconMap = {
  Percent,
  Sparkles,
  Key,
  Gift,
  TrendingUp,
  QrCode,
  Radio,
  MapPin,
  GraduationCap,
  BarChart3,
  CheckCircle2,
  BookOpen
};

export default function JSJCard() {
  const [activeBenefitTab, setActiveBenefitTab] = useState('members');

  return (
    <>
      <SEO
        title="JSJ Card - The World's First Purpose Driven Universal Card"
        description="Discover JSJ Card by FTPL. A unified member pass connecting students, youth, merchants, and campuses with exclusive privileges, discounts, and verified job drives."
      />

      {/* =========================================================================
          HERO WITH LARGE INTERACTIVE CARD FLIP ANIMATION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32">
        {/* Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Intro & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-highlight/15 text-highlight-700 dark:text-highlight-300 border border-highlight/30"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>The World's First Purpose Driven Universal Card</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-primary-950 dark:text-white tracking-tight leading-[1.12]"
              >
                One Card. Universal Pass for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
                  Bharat's Youth
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
              >
                {cardSpecs.tagline} Designed to eliminate fragmented student ID cards, disparate discount schemes, and isolated campus placement portals into one seamless member pass.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  href={companyInfo.jsjCardWebsite}
                  variant="accent"
                  size="lg"
                  icon={ExternalLink}
                  className="w-full sm:w-auto shadow-glow-accent text-white"
                >
                  Visit JSJCard.com
                </Button>

                <Button
                  to="/contact?type=Student"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Apply for Card Pass
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  No credit check or debt liability
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Instant digital activation
                </span>
              </div>
            </div>

            {/* Right Column: Hero Interactive Card Flip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-6 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-lg">
                <JSJCardVisual interactive={true} canFlip={true} className="shadow-2xl" />

                <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border text-center shadow-soft">
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                    💡 Click or hover the card to view front pass details and back QR verification code.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW IT WORKS (4 STEPS)
         ========================================================================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple 4-Step Process"
            title="How JSJ Card Works for"
            highlightText="Every Member"
            description="From campus registration to unlocking everyday merchant discounts and corporate placement fast-passes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, idx) => {
              const Icon = stepIconMap[step.icon] || CreditCard;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold font-heading text-accent/20 dark:text-accent/30">
                        {step.step}
                      </span>
                      <div className="p-3 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-primary-950 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                    {step.detail}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BENEFITS TABS (MEMBERS, BUSINESSES, INSTITUTIONS)
         ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Multi-Stakeholder Value"
          title="Designed for Symbiotic"
          highlightText="Ecosystem Growth"
          description="JSJ Card connects cardholders, local merchants, and educational institutions in a win-win cycle where everyone benefits."
        />

        {/* Tab Switcher Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
          {[
            { id: 'members', label: 'For Members & Students', icon: Sparkles },
            { id: 'businesses', label: 'For Partner Merchants', icon: TrendingUp },
            { id: 'institutions', label: 'For Colleges & Campuses', icon: GraduationCap }
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeBenefitTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveBenefitTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                  isActive
                    ? 'bg-accent text-white border-accent shadow-glow-accent'
                    : 'bg-white dark:bg-dark-card text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardBenefits[activeBenefitTab].map((benefit, index) => {
            const Icon = benefitIconMap[benefit.icon] || Sparkles;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-primary-950 dark:text-white">
                    {benefit.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
         ========================================================================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Everything You Need to Know About"
            highlightText="JSJ Card"
            description="Have questions? Here are clear answers regarding eligibility, fees, merchant onboarding, and card verification."
          />

          <Accordion items={cardFaqs} />
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA BANNER LINKING TO WWW.JSJCARD.COM
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-primary-950 via-[#0B1F3A] to-[#143765] border border-blue-400/20 shadow-2xl text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-highlight/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-highlight border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Universal Card Portal</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
              Ready to Activate Your JSJ Card Pass?
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed">
              Explore participating merchant stores, download the digital pass, or register your college campus directly on our flagship portal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={companyInfo.jsjCardWebsite}
                variant="highlight"
                size="lg"
                icon={ExternalLink}
                className="w-full sm:w-auto shadow-glow-highlight text-primary-950"
              >
                Go to www.jsjcard.com
              </Button>

              <Button
                to="/contact?type=Business"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10"
              >
                Onboard as Merchant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
