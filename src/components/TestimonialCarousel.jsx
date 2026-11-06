import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const prev = () => {
    setAutoplay(false);
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setAutoplay(false);
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  const currentItem = testimonials[current];

  return (
    <div
      className="relative max-w-4xl mx-auto px-4"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border p-8 sm:p-12 shadow-soft-xl">
        {/* Background decorative quote icon */}
        <Quote className="absolute right-6 bottom-6 w-32 h-32 text-slate-100 dark:text-dark-elevated -rotate-12 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Top row: badge & stars */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-300">
                {currentItem.tag}
              </span>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(currentItem.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed italic">
              "{currentItem.content}"
            </blockquote>

            {/* Author details */}
            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-dark-border">
              <img
                src={currentItem.avatar}
                alt={currentItem.name}
                loading="lazy"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/30"
              />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-primary-950 dark:text-white">
                  {currentItem.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {currentItem.role} • <span className="font-semibold text-slate-700 dark:text-slate-300">{currentItem.organization}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="mt-8 flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === idx ? "w-8 bg-accent" : "w-2.5 bg-slate-300 dark:bg-dark-border hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:text-accent hover:border-accent dark:hover:border-accent bg-slate-50 dark:bg-dark-elevated transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:text-accent hover:border-accent dark:hover:border-accent bg-slate-50 dark:bg-dark-elevated transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
