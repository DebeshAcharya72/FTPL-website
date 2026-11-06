import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/company';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection guidelines for Flasho Tech Private Limited (FTPL) and JSJ Card."
      />

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-primary-950 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: November 2026 • Flasho Tech Private Limited
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              1. Overview & Commitment
            </h2>
            <p>
              Flasho Tech Private Limited ("FTPL", "we", "us", or "our", CIN: {companyInfo.cin}) operates the website flashotech.in and the JSJ Card platform. We are deeply committed to protecting the privacy, accuracy, and confidentiality of all cardholders, partner merchants, educational institutions, and job applicants who interact with our digital ecosystem.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              2. Information We Collect
            </h2>
            <p>We collect information to deliver seamless verification, membership privilege access, and employment connectivity:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Member Registration:</strong> Name, contact details (phone, email), educational affiliation, batch, and enrollment numbers for college pass issuance.</li>
              <li><strong>Merchant Operations:</strong> Commercial outlet name, proprietor credentials, store address, discount offerings, and counter QR transaction logs.</li>
              <li><strong>Recruitment & Careers:</strong> Verified resumes, academic transcripts, degree verification markers, and interview schedules.</li>
              <li><strong>Technical Logs:</strong> Device identifiers, browser types, and timestamped QR check-ins used exclusively for anti-fraud validation.</li>
            </ul>
          </div>

          <div id="security" className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              3. Data Security & Storage Practices
            </h2>
            <p>
              We enforce industry-standard security frameworks to protect student and commercial data against unauthorized access, modification, or exposure. All cryptographic card tokens and API interactions are transmitted via TLS 1.3 encrypted tunnels and stored within secured Indian cloud datacenters complying with applicable Indian IT rules and digital personal data protection laws.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              4. No Sale of Personal Data
            </h2>
            <p>
              FTPL does <strong>not</strong> sell, rent, or trade student portfolios, candidate phone numbers, or merchant transaction records to third-party ad networks or unsolicited telemarketers. Candidate information is only shared with verified employers when a candidate explicitly registers or consents to participate in an active recruitment drive or job fair.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-primary-950 dark:text-white">
              5. Contact Our Data Governance Team
            </h2>
            <p>
              If you have any questions, corrections, or requests concerning your stored member profile or corporate data, please write to:
            </p>
            <p className="font-semibold text-primary-950 dark:text-white">
              Grievance & Privacy Officer<br />
              Flasho Tech Private Limited<br />
              OCAC Tower, Acharya Vihar, Bhubaneswar, Odisha 751013<br />
              Email: <a href={`mailto:${companyInfo.email}`} className="text-accent underline">{companyInfo.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
