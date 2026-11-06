import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Flag,
  Users,
  Linkedin,
  ArrowRight,
  Target,
  Eye,
  CheckCircle2,
  Calendar,
  Briefcase,
  Rocket
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

import { companyInfo } from '../data/company';
import { leadership, advisoryTeam } from '../data/leadership';
import { companyTimeline } from '../data/timeline';

const timelineIconMap = {
  Building: Building2,
  CreditCard: Sparkles,
  Briefcase: Briefcase,
  Rocket: Rocket
};

const valueIconMap = {
  Flag,
  Sparkles,
  ShieldCheck,
  Users
};

export default function About() {
  return (
    <>
      <SEO
        title="About Us - Our Story, Mission & Leadership"
        description="Learn about Flasho Tech Private Limited (FTPL), founded in 2020 in Bhubaneswar, Odisha. Discover our mission to build digital infrastructure for Bharat, our leadership, and milestones."
      />

      {/* =========================================================================
          HERO / STORY SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent border border-accent/20"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Founded 2020 in Bhubaneswar, Odisha</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-primary-950 dark:text-white tracking-tight leading-tight"
            >
              Bridging Traditional Commerce & Modern{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
                Digital Systems
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
            >
              Flasho Tech Private Limited (FTPL) was born from a fundamental observation: while metro cities enjoyed frictionless digital convenience, the vibrant economic engines of Tier-2 and Tier-3 Bharat remained fragmented. We engineer the connective digital tissue between local merchants, youth talent, and regional institutions.
            </motion.p>
          </div>

          {/* Quick Pillars Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">Corporate Identity</span>
              <h3 className="font-heading font-bold text-lg text-primary-950 dark:text-white">Govt. Registered Entity</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Incorporated under the Ministry of Corporate Affairs (CIN: {companyInfo.cin}), operating from OCAC Tower, Bhubaneswar.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-highlight block mb-2">Flagship Innovation</span>
              <h3 className="font-heading font-bold text-lg text-primary-950 dark:text-white">JSJ Card Ecosystem</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                The World's First Purpose Driven Universal Card unifying student identity, merchant loyalty, and career pathways.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 block mb-2">Engineering DNA</span>
              <h3 className="font-heading font-bold text-lg text-primary-950 dark:text-white">IIT Pedigree & Scale</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Founded and directed by IIT Bhubaneswar M.Tech leadership, committed to high-reliability, fault-tolerant architectures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          MISSION, VISION & VALUES SECTION
         ========================================================================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Mission, Vision &"
            highlightText="Core Values"
            description="Clear commitments driving every product release, partnership discussion, and engineering decision at FTPL."
          />

          {/* Mission & Vision 2-Column Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-accent/20 shadow-soft relative overflow-hidden"
            >
              <div className="p-3.5 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent inline-flex mb-5">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {companyInfo.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-highlight/20 shadow-soft relative overflow-hidden"
            >
              <div className="p-3.5 rounded-2xl bg-highlight/15 text-highlight inline-flex mb-5">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {companyInfo.vision}
              </p>
            </motion.div>
          </div>

          {/* Core Values 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.values.map((val, idx) => {
              const Icon = valueIconMap[val.icon] || Sparkles;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-dark-elevated text-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-primary-950 dark:text-white">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP TEAM SECTION
         ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Leadership"
          title="Meet the Minds Guiding"
          highlightText="Flasho Tech"
          description="Combining premier technical academic pedigree from IIT with extensive on-ground operational execution across Eastern India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-accent/20 shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white">
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold text-accent mt-0.5">
                      {leader.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      {leader.credentials}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-dark-elevated text-accent hover:bg-accent hover:text-white transition-colors border border-accent/20"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>

                <blockquote className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-dark-elevated border-l-4 border-highlight text-xs sm:text-sm italic text-slate-700 dark:text-slate-300">
                  "{leader.quote}"
                </blockquote>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-dark-border flex flex-wrap gap-2">
                {leader.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Boards Note */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisoryTeam.map((board) => (
            <div
              key={board.name}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-elevated/50 border border-slate-200/80 dark:border-dark-border"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-highlight">
                {board.role}
              </span>
              <h4 className="text-base font-bold text-primary-950 dark:text-white mt-1">
                {board.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {board.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          VERTICAL ANIMATED TIMELINE (2020 -> 2024 -> 2025 -> 2026)
         ========================================================================= */}
      <section className="py-24 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The FTPL Journey"
            title="Our Evolution &"
            highlightText="Milestones"
            description="From our incorporation in Bhubaneswar to orchestrating state-level employment drives and grassroots merchant QR networks."
          />

          <div className="relative mt-16">
            {/* Center vertical line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent via-blue-400 to-highlight" />

            <div className="space-y-12 md:space-y-16">
              {companyTimeline.map((item, index) => {
                const IconComponent = timelineIconMap[item.icon] || Calendar;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    } gap-8`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl transition-all">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-black font-heading text-accent">
                            {item.year}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-highlight/15 text-highlight-700 dark:text-highlight-300">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-dark-border/80 space-y-1.5">
                          {item.highlights.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node Badge in Center */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-dark-card border-4 border-accent text-accent shadow-md shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Empty spacer for alternating balance */}
                    <div className="hidden md:block w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA SECTION
         ========================================================================= */}
      <CTASection
        badge="Collaborate With Us"
        title="Be Part of Our Mission for Digital Bharat"
        subtitle="Whether you represent a college, a retail trade association, or wish to explore investment and strategic partnerships, we welcome your dialogue."
        primaryCtaText="Explore Solutions"
        primaryCtaLink="/solutions"
        secondaryCtaText="Contact Our Office"
        secondaryCtaLink="/contact"
      />
    </>
  );
}
