import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/navigation';
import Button from './Button';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Official Company Logo as Home Link */}
          <Link
            to="/"
            className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue rounded-xl py-1"
            aria-label="Flasho Tech Private Limited Home"
          >
            <Logo size="md" />
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
                      ? 'text-brandBlue font-bold bg-brandBlue/5'
                      : 'text-slate-700 hover:text-brandBlue hover:bg-slate-100/80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brandBlue rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls: Desktop "Get in Touch" Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              to="/contact"
              variant="accent"
              size="md"
              icon={ArrowRight}
              className="shadow-glow-blue"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Right Controls: Accessible Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-3 rounded-xl border border-slate-200 text-slate-700 hover:text-brandBlue active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brandBlue min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-16 sm:top-20 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed top-16 sm:top-20 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-white border-l border-slate-200 z-50 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto lg:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="space-y-4">
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <Logo size="sm" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Menu
                  </span>
                </div>

                <nav className="space-y-1.5" aria-label="Mobile menu links">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold text-base transition-colors min-h-[48px] ${
                          isActive
                            ? 'bg-brandBlue text-white shadow-xs'
                            : 'text-slate-800 hover:bg-slate-100 active:bg-slate-200'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-50" />
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <Button
                  to="/contact"
                  variant="accent"
                  size="lg"
                  icon={ArrowRight}
                  className="w-full shadow-glow-blue justify-center py-3.5 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Button>
                <div className="text-center text-xs text-slate-500 space-y-0.5">
                  <p className="font-semibold text-slate-700">Flasho Tech Private Limited</p>
                  <p>Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
