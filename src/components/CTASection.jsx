import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export default function CTASection({
  title = "Ready to Join Bharat's Next-Gen Digital Network?",
  subtitle = "Whether you are a merchant looking for verified walk-ins, an institution empowering students, or an employer hiring top talent—FTPL connects you to the future.",
  primaryCtaText = "Explore JSJ Card",
  primaryCtaLink = "/jsj-card",
  secondaryCtaText = "Schedule a Consultation",
  secondaryCtaLink = "/contact",
  badge = "Get Started Today"
}) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Card backdrop */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-br from-primary-950 via-[#0B1F3A] to-[#122B4D] border border-blue-500/20 shadow-2xl text-white text-center">
          
          {/* Subtle glowing elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-highlight/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2F6BFF_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15 mb-6 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-highlight" />
                <span>{badge}</span>
              </motion.div>
            )}

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                to={primaryCtaLink}
                variant="accent"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto shadow-glow-accent text-white"
              >
                {primaryCtaText}
              </Button>

              <Button
                to={secondaryCtaLink}
                variant="outline"
                size="lg"
                icon={MessageSquare}
                iconPosition="left"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/40"
              >
                {secondaryCtaText}
              </Button>
            </motion.div>

            {/* Micro assurance */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-blue-200/70">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Zero setup friction for merchants
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Official campus co-branding
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Backed by IIT Bhubaneswar pedigree
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
