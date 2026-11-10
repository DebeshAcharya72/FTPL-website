import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'accent',
  size = 'md',
  to,
  href,
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-medium gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2 shadow-sm",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary: "bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-500 shadow-primary/20",
    accent: "bg-brandBlue text-white hover:bg-brandBlue-600 focus:ring-brandBlue shadow-brandBlue/25 hover:shadow-glow-blue",
    highlight: "bg-brandRed text-white hover:bg-brandRed-600 focus:ring-brandRed shadow-brandRed/25 hover:shadow-glow-red",
    outline: "border-2 border-slate-300 dark:border-slate-700 bg-transparent text-slate-800 dark:text-slate-100 hover:border-brandBlue hover:text-brandBlue dark:hover:border-blue-400 dark:hover:text-blue-400 focus:ring-brandBlue",
    ghost: "bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-dark-elevated hover:text-primary-900 dark:hover:text-white focus:ring-brandBlue",
    white: "bg-white text-primary-900 hover:bg-slate-100 focus:ring-white shadow-lg",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && !loading && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
