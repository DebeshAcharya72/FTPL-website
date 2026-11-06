import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ftpl-theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ftpl-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`p-2 rounded-xl transition-all duration-200 border text-slate-600 hover:text-primary-800 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200/80 border-slate-200 dark:bg-dark-card dark:border-dark-border dark:hover:bg-dark-elevated focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-highlight transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 text-accent transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
