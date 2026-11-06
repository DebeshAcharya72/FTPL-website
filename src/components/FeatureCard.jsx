import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeatureCard({
  title,
  subtitle,
  description,
  icon: Icon,
  badge,
  highlights = [],
  ctaText,
  ctaLink,
  index = 0,
  accent = 'accent', // 'accent' | 'highlight' | 'primary'
  className = ''
}) {
  const accentBorders = {
    accent: "group-hover:border-accent/50 dark:group-hover:border-accent/50",
    highlight: "group-hover:border-highlight/60 dark:group-hover:border-highlight/60",
    primary: "group-hover:border-primary-400 dark:group-hover:border-primary-400",
  };

  const accentIcons = {
    accent: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-300",
    highlight: "bg-highlight/15 text-highlight-700 dark:bg-highlight/25 dark:text-highlight-300",
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl transition-all duration-300 ${accentBorders[accent] || accentBorders.accent} ${className}`}
    >
      <div>
        {/* Top bar: Icon & Badge */}
        <div className="flex items-center justify-between mb-6">
          {Icon && (
            <div className={`p-3.5 rounded-2xl ${accentIcons[accent] || accentIcons.accent} group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          {badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-dark-elevated text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-dark-border">
              {badge}
            </span>
          )}
        </div>

        {/* Titles */}
        {subtitle && (
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1">
            {subtitle}
          </span>
        )}
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-primary-950 dark:text-white group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {description}
        </p>

        {/* Bullet Highlights */}
        {highlights.length > 0 && (
          <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-100 dark:border-dark-border">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Optional CTA Link */}
      {ctaText && ctaLink && (
        <div className="mt-7 pt-4 border-t border-slate-100 dark:border-dark-border flex items-center justify-between">
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-accent-hover transition-colors group/link"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}
