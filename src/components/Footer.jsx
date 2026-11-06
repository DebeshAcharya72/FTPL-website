import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Building2,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/company';
import { footerQuickLinks, footerSolutions, legalLinks } from '../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-accent to-blue-500 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-primary-950 flex items-center justify-center font-heading font-extrabold text-white text-base">
                  FT<span className="text-highlight">PL</span>
                </div>
              </div>
              <div>
                <span className="font-heading text-xl font-extrabold text-white tracking-tight">
                  {companyInfo.name}
                </span>
                <span className="block text-xs text-blue-200/70">
                  {companyInfo.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {companyInfo.description}
            </p>

            {/* Official Credential Strip */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong className="text-slate-200">CIN:</strong> {companyInfo.cin}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent shrink-0" />
                <span>
                  <strong className="text-slate-200">Incorporated:</strong> {companyInfo.foundedYear} • Bhubaneswar, Odisha
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-highlight shrink-0" />
                <span>
                  <strong className="text-slate-200">Flagship:</strong> Creators of JSJ Card Universal Pass
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow FTPL on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent hover:border-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow JSJ Card on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.jsjCardWebsite}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit JSJ Card Official Portal"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-highlight hover:border-highlight/50 transition-colors"
              >
                <span>jsjcard.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerQuickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-accent transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions & Systems */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Ecosystem & Tech
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerSolutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-highlight transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Registered Office & Contacts */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-highlight shrink-0 mt-0.5" />
                <span>
                  OCAC Tower, Acharya Vihar, Bhubaneswar, Odisha 751013, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
            </ul>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs">
              <span className="text-highlight font-semibold block mb-0.5">Visit JSJ Card</span>
              <p className="text-slate-400 text-[11px]">
                The World's First Purpose Driven Universal Card.
              </p>
              <a
                href={companyInfo.jsjCardWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-accent hover:underline inline-flex items-center gap-1 font-semibold text-xs"
              >
                Explore Portal <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Flasho Tech Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-slate-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
