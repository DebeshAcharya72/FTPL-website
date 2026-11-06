import { motion } from 'framer-motion';
import {
  Target,
  Cpu,
  Code2,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  Search,
  Award
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';

import { consultingServices, consultingWorkflow } from '../data/services';

const serviceIconMap = {
  Target,
  Cpu,
  Code2,
  UserCheck
};

export default function Services() {
  return (
    <>
      <SEO
        title="Consulting & Technology Services - AI, Strategy, Web & HR"
        description="Flasho Tech provides strategic consulting in Business & Digital Strategy, AI & Data Analytics, Custom Software & Web Development, and HR Solutions for SMEs in Odisha."
      />

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent border border-accent/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consulting by Flasho Tech</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-primary-950 dark:text-white tracking-tight"
          >
            Strategic Technology Consulting &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
              Engineering Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We partner with growing enterprises, academic boards, and regional powerhouses to build bespoke architectures, deploy predictive AI, and streamline high-trust talent pipelines.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          4 CONSULTING SERVICES
         ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {consultingServices.map((service, index) => {
          const Icon = serviceIconMap[service.icon] || Code2;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3.5 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                        Service Area 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-primary-950 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-highlight dark:text-highlight-400">
                    {service.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-elevated border border-slate-200/60 dark:border-dark-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                      Ideal For
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {service.idealFor}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="accent"
                      size="md"
                      icon={ArrowRight}
                    >
                      Inquire About {service.title.split(' ')[0]}
                    </Button>
                  </div>
                </div>

                {/* Right Deliverables Column */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50/70 dark:bg-dark-elevated/40 border border-slate-200/80 dark:border-dark-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary-950 dark:text-white mb-4">
                    Key Deliverables & Outcomes
                  </h4>

                  <ul className="space-y-3">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* =========================================================================
          HOW WE ENGAGE / CONSULTING WORKFLOW
         ========================================================================= */}
      <section className="py-24 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Execution Framework"
            title="How We Deliver"
            highlightText="Predictable Value"
            description="Our battle-tested four-phase engagement cycle guarantees total transparency and zero budget overruns."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingWorkflow.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black font-heading text-accent/25 dark:text-accent/35 block mb-4">
                    {item.step}
                  </span>
                  <h4 className="text-lg font-bold font-heading text-primary-950 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <CTASection
        badge="Direct Advisory"
        title="Discuss Your Project With FTPL Leadership"
        subtitle="Schedule an exploratory discovery call to review your technical requirements, architectural feasibility, and ROI projections."
        primaryCtaText="Book a Tech Discovery Call"
        primaryCtaLink="/contact"
        secondaryCtaText="View Client Case Studies"
        secondaryCtaLink="/about"
      />
    </>
  );
}
