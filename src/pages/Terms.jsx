import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { companyInfo } from '../data/company';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions governing the use of FTPL platforms, JSJ Card membership, merchant integrations, and consulting services."
      />

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent mb-4">
            <FileCheck className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-primary-950 dark:text-white">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Effective Date: November 2026 • Flasho Tech Private Limited
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website flashotech.in, ordering or activating a JSJ Card, integrating with JSJ Smart Business Solutions, or attending FTPL-powered job fairs, you agree to comply with and be legally bound by these Terms and Conditions. If you do not agree, you must refrain from using our platforms.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              2. Nature of the JSJ Card Pass
            </h2>
            <p>
              The JSJ Card is a universal purpose-driven community and student privilege pass. It is <strong>not</strong> a credit card, debit card, pre-paid payment instrument (PPI), or banking product regulated by the Reserve Bank of India. It does not carry cash balances or extend lines of credit. Discounts and privileges are honored directly by participating third-party merchants in accordance with their individual merchant agreements.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              3. Merchant & Partner Obligations
            </h2>
            <p>
              Merchants onboarded onto the JSJ network agree to honor the stated percentage discount or reward perks to cardholders presenting a valid physical or digital QR pass. FTPL is not liable for merchant inventory availability, goods quality, or disputes occurring at store counters.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              4. Employment Fair Disclaimer
            </h2>
            <p>
              FTPL provides technical matchmaking, queue coordination, and credential verification tools for recruitment events. While we actively connect talent with genuine recruiters, FTPL does not guarantee job offers, salary negotiations, or candidate selection, which remain at the sole discretion of participating corporate hiring teams.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India. The courts situated in <strong>Bhubaneswar, Odisha</strong> shall have exclusive jurisdiction over all matters.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
