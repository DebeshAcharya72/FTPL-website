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
    accent: "bg-brandBlue/10 text-brandBlue border-brandBlue/20",
    highlight: "bg-brandRed/10 text-brandRed border-brandRed/25",
    primary: "bg-primary-100 text-primary-800 border-primary-200"
  };

  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} px-1 sm:px-0 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-2.5 sm:mb-3"
        >
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border ${badgeStyles[badgeColor] || badgeStyles.accent}`}>
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
        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900"
      >
        {title}{" "}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandBlue via-blue-600 to-brandRed">
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
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
