import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { navLinks } from '../data/navigation';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-slate-200/80 dark:border-dark-border shadow-sm'
          : 'bg-white/70 dark:bg-dark-bg/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-xl"
            aria-label="FTPL Home"
          >
            {/* Logo Emblem */}
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary-900 to-primary-700 dark:from-dark-elevated dark:to-[#173868] p-0.5 shadow-md flex items-center justify-center border border-accent/30 group-hover:border-accent transition-colors">
              <div className="w-full h-full rounded-[14px] bg-primary-950 dark:bg-dark-card flex items-center justify-center relative overflow-hidden">
                <span className="font-heading font-extrabold text-base tracking-wider text-white">
                  FT<span className="text-highlight">PL</span>
                </span>
                {/* Micro accent dot */}
                <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-heading text-xl font-extrabold tracking-tight text-primary-950 dark:text-white group-hover:text-accent transition-colors">
                FTPL
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                Flasho Tech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-accent font-bold bg-accent/5 dark:bg-accent/15'
                      : 'text-slate-700 dark:text-slate-200 hover:text-accent dark:hover:text-accent hover:bg-slate-100/70 dark:hover:bg-dark-elevated'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] uppercase font-extrabold tracking-wider rounded-md bg-highlight/20 text-highlight dark:bg-highlight/30">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls: ThemeToggle + CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />
            <Button
              to="/contact"
              variant="accent"
              size="md"
              icon={ArrowRight}
              className="shadow-glow-accent"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Right Controls: ThemeToggle + Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-200 hover:text-accent bg-slate-50 dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-20 bg-primary-950/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-dark-card border-l border-slate-200 dark:border-dark-border z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-3">
                  Menu
                </div>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-base transition-colors ${
                        isActive
                          ? 'bg-accent text-white shadow-md'
                          : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-dark-elevated'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-highlight text-primary-950 uppercase font-black">
                        {link.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-slate-100 dark:border-dark-border space-y-4">
                <Button
                  to="/contact"
                  variant="accent"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full shadow-glow-accent justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-elevated border border-slate-200/60 dark:border-dark-border text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 text-highlight" />
                    <span>JSJ Card Universal Pass</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Odisha's unified student & merchant privilege ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
