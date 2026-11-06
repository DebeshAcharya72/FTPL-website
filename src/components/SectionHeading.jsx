import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  highlightText,
  description,
  align = 'center',
  className = '',
  badgeColor = 'accent', // 'accent' | 'highlight' | 'primary'
}) {
  const isCenter = align === 'center';

  const badgeStyles = {
    accent: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-300 border-accent/20",
    highlight: "bg-highlight/10 text-highlight-700 dark:bg-highlight/20 dark:text-highlight-300 border-highlight/30",
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900/60 dark:text-primary-200 border-primary-200 dark:border-primary-700"
  };

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-3"
        >
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${badgeStyles[badgeColor] || badgeStyles.accent}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-primary-950 dark:text-white"
      >
        {title}{" "}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-highlight">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
