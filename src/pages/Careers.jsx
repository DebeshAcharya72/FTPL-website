import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  HeartHandshake,
  Code,
  Zap,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  FileText,
  User,
  Mail,
  Phone,
  Link as LinkIcon
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Modal from '../components/Modal';
import CTASection from '../components/CTASection';

import { companyCulture, openJobs } from '../data/jobs';

const cultureIconMap = {
  HeartHandshake,
  Code,
  Zap,
  Sparkles
};

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset();
    setIsSubmitted(false);
  };

  const onSubmit = async (data) => {
    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Job Application Submitted:", {
      role: selectedJob?.title,
      ...data
    });
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      <SEO
        title="Careers - Join the Innovation Hub in Bhubaneswar"
        description="Explore open engineering, product, and growth roles at Flasho Tech Private Limited (FTPL). Build the future of digital ecosystems for Bharat."
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>We are Hiring Across Engineering & Growth</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-primary-950 dark:text-white tracking-tight"
          >
            Build Meaningful Technology for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
              Real Bharat
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {companyCulture.tagline}. Work directly alongside founders with IIT pedigree, solve foundational ecosystem challenges, and take extreme ownership of products used by thousands.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          CULTURE & VALUES SECTION
         ========================================================================= */}
      <section className="py-20 bg-slate-50/70 dark:bg-dark-card/30 border-y border-slate-200/80 dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Life at FTPL"
            title="Our Principles &"
            highlightText="Culture"
            description="We balance the relentless velocity of a startup with the rigor and architectural discipline of premier engineering institutions."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyCulture.values.map((val, idx) => {
              const Icon = cultureIconMap[val.icon] || Sparkles;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-7 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-primary-950 dark:text-white">
                    {val.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Perks Strip */}
          <div className="mt-14 p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft">
            <h4 className="text-base font-bold font-heading text-primary-950 dark:text-white mb-6 text-center">
              Benefits & Life at Flasho Tech
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyCulture.perks.map((perk, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-dark-elevated">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OPEN ROLES SECTION (Loaded from src/data/jobs.js)
         ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Current Opportunities"
          title="Explore Open Roles at"
          highlightText="FTPL Bhubaneswar"
          description="Find your next career step. All positions offer competitive compensation, fast-track career mobility, and direct mentorship from core founders."
        />

        <div className="space-y-6">
          {openJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/10 dark:bg-accent/20 text-accent">
                    {job.department}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-highlight" />
                    {job.location}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-300 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-500" />
                    {job.type} • {job.experience}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white">
                  {job.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {job.summary}
                </p>

                {/* Requirements highlights */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-dark-elevated/60 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-dark-border"
                      >
                        ✓ {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 dark:border-dark-border flex items-center justify-end">
                <Button
                  onClick={() => handleOpenModal(job)}
                  variant="accent"
                  size="md"
                  icon={ArrowRight}
                  className="w-full sm:w-auto shadow-glow-accent"
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CAREER APPLICATION MODAL (React Hook Form)
         ========================================================================= */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={isSubmitted ? "Application Received!" : `Apply for ${selectedJob?.title || 'Position'}`}
        subtitle={
          isSubmitted
            ? "Thank you for your interest in joining FTPL."
            : `${selectedJob?.department} • ${selectedJob?.location} • ${selectedJob?.type}`
        }
      >
        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-500 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              Application Successfully Submitted
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
              Our hiring panel will review your profile and reach out via email or phone within 3 to 5 business days for next steps.
            </p>
            <div className="pt-4">
              <Button onClick={handleCloseModal} variant="accent" size="md">
                Done
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  {...register("name", { required: "Full name is required" })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                />
              </div>
              {errors.name && (
                <span className="text-xs text-rose-500 mt-1 block font-medium">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email & Phone 2-Col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
                {errors.email && (
                  <span className="text-xs text-rose-500 mt-1 block font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone", { required: "Phone number is required" })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                </div>
                {errors.phone && (
                  <span className="text-xs text-rose-500 mt-1 block font-medium">
                    {errors.phone.message}
                  </span>
                )}
              </div>
            </div>

            {/* Resume / Portfolio Link */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Resume Link (Google Drive / LinkedIn / Portfolio) *
              </label>
              <div className="relative">
                <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="url"
                  placeholder="https://drive.google.com/... or linkedin.com/in/..."
                  {...register("resumeLink", { required: "Resume or profile link is required" })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                />
              </div>
              {errors.resumeLink && (
                <span className="text-xs text-rose-500 mt-1 block font-medium">
                  {errors.resumeLink.message}
                </span>
              )}
            </div>

            {/* Message / Cover Note */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Why do you want to join FTPL?
              </label>
              <textarea
                rows={3}
                placeholder="Briefly highlight your experience, key projects, and why this role fits your career..."
                {...register("message")}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="ghost"
                size="md"
                onClick={handleCloseModal}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="accent"
                size="md"
                loading={isSubmitting}
                icon={Send}
              >
                Submit Application
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <CTASection
        badge="General Inquiries"
        title="Don't See Your Exact Role?"
        subtitle="We are always looking for passionate builders, researchers, and campus ambassadors. Send us an open application."
        primaryCtaText="Send Open Application"
        primaryCtaLink="/contact?type=Careers"
        secondaryCtaText="Learn About Our Founders"
        secondaryCtaLink="/about"
      />
    </>
  );
}
