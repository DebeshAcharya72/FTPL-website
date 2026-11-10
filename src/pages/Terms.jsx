import { FileCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { companyInfo } from '../data/company';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions governing the use of FTPL platforms and consulting services."
      />

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue mb-4">
            <FileCheck className="w-4 h-4" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-900">
            Terms & Conditions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Effective Date: November 2026 • Flasho Tech Private Limited
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website flashotech.in, submitting an enquiry, or engaging our consulting or training services, you agree to comply with and be bound by these Terms and Conditions.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              2. Intellectual Property
            </h2>
            <p>
              All trademarks, product names, logos, website copy, and system designs associated with Flasho Tech Private Limited, FTCS, BootUp360, JSJ Card, and BYER are the intellectual property of Flasho Tech Private Limited or their respective licensors.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft space-y-4">
            <h2 className="text-xl font-bold font-heading text-slate-900">
              3. Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms and any dispute arising from them shall be governed by the laws of India, and courts in <strong>Bhubaneswar, Odisha</strong> shall have exclusive jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
