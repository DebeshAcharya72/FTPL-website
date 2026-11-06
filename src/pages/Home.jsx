import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  MapPin,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShoppingBag,
  GraduationCap,
  Building2,
  Ticket,
  Landmark,
  Store,
  CalendarCheck,
  TrendingUp,
  Award
} from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import JSJCardVisual from '../components/JSJCardVisual';
import TestimonialCarousel from '../components/TestimonialCarousel';
import PartnerMarquee from '../components/PartnerMarquee';
import CTASection from '../components/CTASection';

import { statsData } from '../data/stats';
import { ecosystemGateways } from '../data/ecosystem';
import { audiences } from '../data/audiences';
import { milestones } from '../data/milestones';
import { companyInfo } from '../data/company';

const audienceIconMap = {
  ShoppingBag,
  GraduationCap,
  Sparkles,
  Building2,
  Ticket,
  Landmark
};

const ecosystemIconMap = {
  Store,
  GraduationCap,
  CalendarCheck
};

export default function Home() {
  return (
    <>
      <SEO
        title="Building Digital Ecosystems for Bharat"
        description="Flasho Tech Private Limited (FTPL) is a pioneer technology company from Bhubaneswar, Odisha. Creators of JSJ Card, Smart Business Solutions, Career & Event Management systems."
      />

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent border border-accent/20"
              >
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>Bhubaneswar, Odisha • Powered by IIT Pedigree</span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="text-highlight font-bold">CIN: {companyInfo.cin.slice(0, 5)}...</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-primary-950 dark:text-white leading-[1.12]"
              >
                Building Digital Ecosystems for{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
                  Bharat
                  {/* Subtle decorative underline curve */}
                  <svg className="absolute -bottom-2 left-0 w-full text-highlight/50" viewBox="0 0 250 12" fill="none">
                    <path d="M2 9C50 2 150 2 248 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Connecting local businesses, students, academic institutions, corporate employers, and high-density events through a unified high-trust digital network.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Button
                  to="/jsj-card"
                  variant="accent"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full sm:w-auto shadow-glow-accent text-white"
                >
                  Explore JSJ Card
                </Button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Talk to Us
                </Button>
              </motion.div>

              {/* Micro Trust Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 dark:text-slate-400"
              >
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Universal Purpose Pass</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-highlight" />
                  <span>1.4K+ Active Members</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>OCAC Tower Tech Hub</span>
                </div>
              </motion.div>
            </div>

            {/* Right: 3D Tilt JSJ Card Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <div className="w-full max-w-md">
                <JSJCardVisual interactive={true} canFlip={true} />
                
                {/* Floating caption below card */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Interactive 3D Preview: Hover to tilt, click to flip</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARTNER & COLLEGE LOGOS INFINITE MARQUEE
         ========================================================================= */}
      <section className="py-8 bg-slate-100/60 dark:bg-dark-card/40 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Trusted by Premier Institutions, Merchants & Ecosystem Partners Across Odisha
          </p>
        </div>
        <PartnerMarquee />
      </section>

      {/* =========================================================================
          ANIMATED STATS COUNTER SECTION
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Ecosystem Scale"
          title="Tangible Impact Across"
          highlightText="Every District"
          description="We measure our success not by vanity metrics, but by the physical footfalls, jobs filled, and college communities empowered across Odisha."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.id} item={stat} index={idx} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          ONE ECOSYSTEM. THREE WAYS IN. (3 Gateway Cards)
         ========================================================================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Unified Architecture"
            title="One Ecosystem."
            highlightText="Three Ways In."
            description="Our three interconnected pillars synchronize local commerce, university placements, and event operations under a single digital roof."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ecosystemGateways.map((item, index) => {
              const IconComponent = ecosystemIconMap[item.icon] || Store;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative flex flex-col justify-between rounded-3xl p-8 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-300"
                >
                  <div>
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-300">
                        {item.badge}
                      </span>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-accent-300 block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Feature highlights */}
                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-dark-border/80 space-y-2.5">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 dark:border-dark-border">
                    <Button
                      to={item.ctaLink}
                      variant="outline"
                      size="md"
                      icon={ArrowRight}
                      className="w-full justify-between group-hover:border-accent group-hover:text-accent"
                    >
                      {item.ctaText}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHO WE SERVE (6 CARDS GRID)
         ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Empowering Stakeholders"
          title="Tailored Value for"
          highlightText="Every Participant"
          description="Whether you run a local retail store, head a university placement cell, or seek employment opportunities, FTPL delivers direct, measurable value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {audiences.map((aud, index) => {
            const Icon = audienceIconMap[aud.icon] || Sparkles;
            return (
              <motion.div
                key={aud.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-accent/10 to-highlight/10 text-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-300">
                      {aud.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-primary-950 dark:text-white group-hover:text-accent transition-colors">
                    {aud.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {aud.benefit}
                  </p>

                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {aud.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border flex items-center justify-between text-xs font-bold text-accent">
                  <span className="group-hover:underline">Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          HIGHLIGHTS & MILESTONES STRIP (Toshali Mela 2026, Job Fairs, USBM)
         ========================================================================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Field Deployments"
            title="Real-World Milestones &"
            highlightText="Field Demonstrations"
            description="Our solutions are battle-tested in high-density live environments—from national craft summits to district-scale employment rallies."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl transition-all duration-300 flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={milestone.image}
                    alt={milestone.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-highlight text-primary-950 uppercase tracking-wider">
                      {milestone.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 bg-primary-950/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {milestone.badge}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-primary-950 dark:text-white group-hover:text-accent transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-accent dark:text-accent-300">
                      {milestone.subtitle}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-dark-border">
                    <div className="flex items-center justify-between text-xs font-bold text-primary-950 dark:text-white">
                      <span className="text-highlight font-extrabold">{milestone.stats}</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {milestone.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TESTIMONIALS CAROUSEL SECTION
         ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Voices from the Ground"
          title="What Our Partners &"
          highlightText="Members Say"
          description="From college deans and corporate recruiters to local cafe owners and students holding the JSJ Card pass."
        />

        <TestimonialCarousel />
      </section>

      {/* =========================================================================
          FINAL CTA BANNER
         ========================================================================= */}
      <CTASection
        badge="Get In Touch"
        title="Ready to Transform Your Organization's Reach?"
        subtitle="Connect with our Bhubaneswar technology team for merchant onboarding, campus card integration, or custom software solutions."
        primaryCtaText="Explore JSJ Card Pass"
        primaryCtaLink="/jsj-card"
        secondaryCtaText="Talk with our Directors"
        secondaryCtaLink="/contact"
      />
    </>
  );
}
