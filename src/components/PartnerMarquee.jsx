import { partners } from '../data/partners';
import { Building2, GraduationCap, Store, Award } from 'lucide-react';

export default function PartnerMarquee() {
  // Duplicate list to create seamless infinite scroll
  const marqueeItems = [...partners, ...partners];

  const getIcon = (category) => {
    if (category.includes('College') || category.includes('Academic')) return GraduationCap;
    if (category.includes('Merchant') || category.includes('Retail')) return Store;
    if (category.includes('Ecosystem') || category.includes('Incubation')) return Award;
    return Building2;
  };

  return (
    <div className="w-full overflow-hidden py-6 marquee-container relative select-none">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background dark:from-dark-bg to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background dark:from-dark-bg to-transparent pointer-events-none" />

      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {marqueeItems.map((partner, index) => {
          const Icon = getIcon(partner.category);
          return (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200 shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-dark-elevated flex items-center justify-center text-accent font-bold text-xs uppercase tracking-wider">
                {partner.initials}
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <Icon className="w-3 h-3 text-accent" />
                  {partner.category} • {partner.location}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
