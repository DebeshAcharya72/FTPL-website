import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Linkedin,
  Instagram,
  ArrowUpRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { companyInfo } from "../data/company";
import {
  footerCompanyLinks,
  footerBrandLinks,
  legalLinks,
} from "../data/navigation";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-slate-200">
          {/* Col 1 & 2: Logo & Summary */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link to="/" className="inline-block" aria-label="Flasho Tech Home">
              <Logo size="md" />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Flasho Tech Private Limited provides business consulting,
              technology solutions, training, and digital products. Based in
              Bhubaneswar, Odisha.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-500">
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <Building2 className="w-4 h-4 text-brandBlue shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Location:</strong>{" "}
                  Bhubaneswar, Odisha, India
                </span>
              </div>
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="break-all">
                  <strong className="text-slate-800">CIN:</strong>{" "}
                  {companyInfo.cin}
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-3 flex items-center gap-3 justify-center sm:justify-start">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Flasho Tech on LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-brandBlue hover:border-brandBlue transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Flasho Tech on Instagram"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-brandRed hover:border-brandRed transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:contents">
            {/* Company Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm flex flex-col items-center sm:items-start">
                {footerCompanyLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-600 hover:text-brandBlue transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brandBlue transition-colors shrink-0" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Brands Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
                Our Brands
              </h4>
              <ul className="space-y-2.5 text-sm flex flex-col items-center sm:items-start">
                {footerBrandLinks.map((brand) => (
                  <li key={brand.name}>
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-brandRed transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brandRed transition-colors shrink-0" />
                      <span>{brand.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 flex flex-col items-center sm:items-start">
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-brandRed shrink-0 mt-0.5" />
                <span>Bhubaneswar, Odisha, India</span>
              </li>
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-brandBlue shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-brandBlue transition-colors break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-brandBlue shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyInfo.corporateEmail}`}
                  className="hover:text-brandBlue transition-colors break-all"
                >
                  {companyInfo.corporateEmail}
                </a>
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-center sm:text-left">
              <span className="text-brandRed font-semibold block mb-0.5">
                Project Discussion
              </span>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Tell us what you're working on and get in touch with our team.
              </p>
              <Link
                to="/contact"
                className="mt-2 text-brandBlue hover:underline inline-flex items-center gap-1 font-semibold text-xs"
              >
                Send Enquiry <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Flasho Tech Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="hover:text-slate-700 transition-colors"
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
