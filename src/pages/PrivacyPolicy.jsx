import { ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { companyInfo } from '../data/company';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection guidelines for Flasho Tech Private Limited (FTPL)."
      />

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Last Updated: November 2026 • Flasho Tech Private Limited
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              1. Overview & Commitment
            </h2>
            <p>
              Flasho Tech Private Limited ("FTPL", "we", "us", or "our", CIN: {companyInfo.cin}) operates the website flashotech.in and related brand initiatives including FTCS, BootUp360, JSJ Card, and BYER. We are committed to protecting the privacy, accuracy, and confidentiality of all clients, students, partner merchants, and users.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              2. Information We Collect
            </h2>
            <p>We collect information necessary to provide consulting, training workshops, and digital products:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact & Enquiries:</strong> Name, work email, phone number, organisation name, and project scope details submitted via our contact forms.</li>
              <li><strong>Consulting Engagements:</strong> Business workflow documents, operational datasets, and technical requirements shared for project evaluation.</li>
              <li><strong>Training & Workshops:</strong> Participant names, institutional affiliations, and workshop evaluation data.</li>
            </ul>
          </div>

          <div id="security" className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              3. Data Security & Storage Practices
            </h2>
            <p>
              We enforce appropriate administrative and technical security measures to safeguard all corporate and personal records against unauthorized access, loss, or misuse. Data is handled in accordance with applicable Indian Information Technology rules.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              4. Contact Information
            </h2>
            <p>
              For any questions regarding privacy practices, please contact:
            </p>
            <p className="font-semibold text-slate-900">
              Flasho Tech Private Limited<br />
              Bhubaneswar, Odisha, India<br />
              Email: <a href={`mailto:${companyInfo.email}`} className="text-brandBlue underline">{companyInfo.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
