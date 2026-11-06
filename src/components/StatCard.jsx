import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Store, GraduationCap, Briefcase, CreditCard, TrendingUp, Award, Users } from 'lucide-react';

const iconMap = {
  Store,
  GraduationCap,
  Briefcase,
  CreditCard,
  TrendingUp,
  Award,
  Users
};

export default function StatCard({ item, index = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const IconComponent = iconMap[item.icon] || Award;
  const isK = item.displayNum && item.displayNum.includes('K');
  const target = item.numeric;

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1800; // 1.8 seconds

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  // Format display string
  const displayValue = () => {
    if (item.displayNum) {
      if (item.id === 'members') {
        const val = (count / 1000).toFixed(1);
        return `${val}K`;
      }
      if (item.id === 'openings') {
        return `${count}K`;
      }
    }
    return count;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative group p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft hover:shadow-soft-xl hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-accent/10 dark:bg-accent/20 text-accent group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-dark-elevated text-slate-500 dark:text-slate-400">
          Verified
        </span>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-primary-950 dark:text-white">
          {item.prefix}{displayValue()}{item.suffix}
        </span>
      </div>

      <h3 className="mt-2 text-base font-bold text-slate-900 dark:text-slate-100">
        {item.label}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-normal">
        {item.description}
      </p>

      {/* Decorative subtle saffron bottom line on hover */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-accent to-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.div>
  );
}
