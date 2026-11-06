import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items = [], allowMultiple = false, className = "" }) {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndices(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices(prev => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? 'bg-white dark:bg-dark-card border-accent/40 shadow-soft'
                : 'bg-white/60 dark:bg-dark-card/60 border-slate-200/80 dark:border-dark-border hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl gap-4"
            >
              <span className="font-heading font-bold text-base sm:text-lg text-primary-950 dark:text-white">
                {item.q || item.title}
              </span>
              <span className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                isOpen ? 'rotate-180 bg-accent/10 text-accent' : 'bg-slate-100 dark:bg-dark-elevated text-slate-500'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-dark-border/60 mt-1">
                    {item.a || item.description || item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
