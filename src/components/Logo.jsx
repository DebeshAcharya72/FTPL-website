import React from 'react';

export default function Logo({
  size = "md",
  className = "",
  variant = "badge",
  alt = "Flasho Tech Pvt. Ltd. (FTPL) Official Logo"
}) {
  const sizeMap = {
    sm: "h-7 sm:h-8 max-w-[130px] sm:max-w-[160px]",
    md: "h-8 sm:h-10 md:h-11 max-w-[150px] sm:max-w-[190px] md:max-w-[220px]",
    lg: "h-12 sm:h-14 md:h-16 max-w-[220px] sm:max-w-[280px]",
    xl: "h-16 sm:h-20 max-w-[260px] sm:max-w-[340px]"
  };

  const currentStyles = sizeMap[size] || sizeMap.md;

  if (variant === "plain") {
    return (
      <img
        src="/ftpl-logo.jpg"
        alt={alt}
        className={`${currentStyles} w-auto object-contain block ${className}`}
        loading="eager"
      />
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <div className="bg-white px-2 py-1 sm:px-2.5 sm:py-1 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-sm transition-all duration-200 flex items-center justify-center">
        <img
          src="/ftpl-logo.jpg"
          alt={alt}
          className={`${currentStyles} w-auto object-contain block`}
          loading="eager"
        />
      </div>
    </div>
  );
}

// Dedicated Emblem Icon using the same blue ring and red lightning bolt
export function LogoEmblem({ className = "w-8 h-8 sm:w-10 sm:h-10" }) {
  return (
    <div className={`relative shrink-0 flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-xs select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="46" stroke="#0056B3" strokeWidth="14" fill="none" />
        <path
          d="M 80 8 L 46 54 L 66 54 L 38 112 L 74 64 L 54 64 Z"
          fill="#E51A1A"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
