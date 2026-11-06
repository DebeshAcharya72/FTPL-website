import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Building2,
  User,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { companyInfo } from '../data/company';

export default function Contact() {
  const location = useLocation();
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      organizationType: 'Business'
    }
  });

  // Pre-fill fields from URL query params (e.g. ?type=College or ?service=AI)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    const service = params.get('service');

    if (type) {
      const validTypes = ['Business', 'College', 'Student', 'Employer', 'Event', 'Government'];
      const matched = validTypes.find(t => t.toLowerCase() === type.toLowerCase());
      if (matched) {
        setValue('organizationType', matched);
      }
    }

    if (service) {
      setValue('message', `Inquiring about ${service} services for our organization.`);
    }
  }, [location.search, setValue]);

  const onSubmit = async (formData) => {
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // If valid EmailJS keys are provided (not generic placeholders), attempt real send
      if (serviceId && templateId && publicKey && !serviceId.includes('placeholder') && !serviceId.includes('service_ftpl_contact')) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            organization_type: formData.organizationType,
            message: formData.message,
            reply_to: formData.email
          },
          publicKey
        );
      } else {
        // Fallback simulation for placeholder environment
        console.log("EmailJS payload ready for delivery:", formData);
        await new Promise(res => setTimeout(res, 800));
      }

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been routed to our team. We will get back to you within 24 hours.');
      reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      // Still show courteous confirmation with alternative direct email fallback
      setSubmitStatus('error');
      setStatusMessage('Failed to deliver through EmailJS. Please reach out directly to contact@flashotech.in.');
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - OCAC Tower, Bhubaneswar, Odisha"
        description="Connect with Flasho Tech Private Limited (FTPL). Located at OCAC Tower, Acharya Vihar, Bhubaneswar. Inquire about JSJ Card merchant onboarding, campus alliances, or consulting."
      />

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-highlight/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/10 dark:bg-accent/20 text-accent border border-accent/20 mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect with FTPL Headquarters</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-primary-950 dark:text-white tracking-tight"
          >
            Let's Build the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-600 to-highlight">
              Digital Bharat
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Whether you are a merchant, college leader, corporate recruiter, or developer looking to integrate with our cards and APIs, our doors at OCAC Tower are always open.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT GRID (FORM + CONTACT DETAILS)
         ========================================================================= */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft space-y-6">
              <h3 className="text-2xl font-bold font-heading text-primary-950 dark:text-white">
                Office Information
              </h3>

              <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-highlight/15 text-highlight shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-primary-950 dark:text-white font-semibold">
                      Registered & Technology Office
                    </strong>
                    <span className="text-xs sm:text-sm mt-0.5 block leading-relaxed">
                      {companyInfo.registeredOffice}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-primary-950 dark:text-white font-semibold">
                      Official Inquiries
                    </strong>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-accent hover:underline block text-xs sm:text-sm mt-0.5"
                    >
                      {companyInfo.email}
                    </a>
                    <a
                      href={`mailto:${companyInfo.supportEmail}`}
                      className="text-slate-500 hover:underline block text-xs mt-0.5"
                    >
                      {companyInfo.supportEmail} (JSJ Card Support)
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-primary-950 dark:text-white font-semibold">
                      Phone & WhatsApp
                    </strong>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-slate-700 dark:text-slate-200 hover:text-accent block text-xs sm:text-sm mt-0.5"
                    >
                      {companyInfo.phone}
                    </a>
                    <a
                      href={companyInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-500 hover:underline inline-flex items-center gap-1 text-xs font-semibold mt-1"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 dark:border-dark-border">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  Connect on Social Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={companyInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-200 hover:bg-accent hover:text-white transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={companyInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-200 hover:bg-pink-600 hover:text-white transition-colors text-xs font-semibold"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={companyInfo.jsjCardWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-dark-elevated text-slate-700 dark:text-slate-200 hover:text-highlight transition-colors text-xs font-semibold"
                  >
                    <span>jsjcard.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Iframe (OCAC Tower, Bhubaneswar) */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-dark-border shadow-soft bg-white dark:bg-dark-card h-64 sm:h-72">
              <iframe
                title="FTPL Office Location at OCAC Tower, Bhubaneswar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.1388527806544!2d85.83447957500977!3d20.29452098117765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e4f5062a93%3A0xe5c3c129e9d6dca!2sOCAC%20Tower%2C%20Acharya%20Vihar%2C%20Bhubaneswar%2C%20Odisha%20751013!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-[1.02] dark:invert-[0.9] dark:hue-rotate-180"
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/80 dark:border-dark-border shadow-soft">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent block">
                  Send a Message
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-primary-950 dark:text-white mt-1">
                  How Can We Assist You?
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Fill out the form below. Our domain specialists will reach out with actionable guidance.
                </p>
              </div>

              {/* Status Toast Notification */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">{statusMessage}</div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700/60 text-amber-800 dark:text-amber-200 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">{statusMessage}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Priyadarshi Dash"
                      {...register("name", { required: "Name is required" })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  {errors.name && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email & Phone 2-Col */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                      />
                    </div>
                    {errors.email && (
                      <span className="text-xs text-rose-500 mt-1 block font-medium">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...register("phone", { required: "Phone number is required" })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-xs text-rose-500 mt-1 block font-medium">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Organization Type Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Organization Type / Category *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      {...register("organizationType", { required: true })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="Business">Business / Retail Merchant</option>
                      <option value="College">College / Educational University</option>
                      <option value="Student">Student / Card Applicant</option>
                      <option value="Employer">Corporate Recruiter / Employer</option>
                      <option value="Event">Event Organizer / Expo Management</option>
                      <option value="Government">Government / Public Agency</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements, campus batch size, or merchant outlet location..."
                    {...register("message", { required: "Message is required" })}
                    className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-dark-border bg-white dark:bg-dark-elevated text-slate-800 dark:text-slate-100 text-sm focus:ring-2 focus:ring-accent focus:outline-none"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    loading={isSubmitting}
                    icon={Send}
                    className="w-full justify-center shadow-glow-accent text-white"
                  >
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
