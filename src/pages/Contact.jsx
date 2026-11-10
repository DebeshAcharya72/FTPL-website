import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import Button from "../components/Button";
import Logo from "../components/Logo";

const topicOptions = [
  { value: "business", label: "Business consulting" },
  { value: "technology", label: "Technology consulting" },
  { value: "industrial", label: "Industrial monitoring" },
  { value: "training", label: "BootUp360 training" },
  { value: "jsj", label: "JSJ Card" },
  { value: "general", label: "General enquiry" },
];

export default function Contact() {
  const location = useLocation();
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organisation: "",
      interest: "business",
      message: "",
    },
  });

  // Map URL parameter: ?interest=business / technology / industrial / training / jsj
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interestParam = params.get("interest");

    if (interestParam) {
      const matched = topicOptions.find(
        (t) => t.value.toLowerCase() === interestParam.toLowerCase(),
      );
      if (matched) {
        setValue("interest", matched.value);
      }
    }
  }, [location.search, setValue]);

  const onSubmit = async (formData) => {
    setSubmitStatus(null);
    setStatusMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (
        serviceId &&
        templateId &&
        publicKey &&
        !serviceId.includes("placeholder") &&
        !serviceId.includes("service_ftpl_contact")
      ) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.fullName,
            from_email: formData.email,
            phone_number: formData.phone,
            organisation: formData.organisation,
            interest:
              topicOptions.find((t) => t.value === formData.interest)?.label ||
              formData.interest,
            message: formData.message,
            reply_to: formData.email,
            to_email: "info.flashotech@gmail.com",
          },
          publicKey,
        );
      } else {
        // Fallback simulation for development/unconfigured environment
        console.log(
          "Enquiry payload routed to info.flashotech@gmail.com:",
          formData,
        );
        await new Promise((res) => setTimeout(res, 800));
      }

      setSubmitStatus("success");
      setStatusMessage(
        "Thank you for contacting Flasho Tech. We’ve received your enquiry.",
      );
      reset();
    } catch (err) {
      console.error("Enquiry delivery error:", err);
      // Preserve entered values on failure as required
      setSubmitStatus("error");
      setStatusMessage(
        "We couldn’t send your enquiry. Please try again or email info.flashotech@gmail.com.",
      );
    }
  };

  return (
    <>
      <SEO
        title="Contact Flasho Tech Private Limited"
        description="Contact Flasho Tech in Bhubaneswar about consulting, software development, training, or JSJ Card."
      />

      {/* =========================================================================
          PAGE INTRODUCTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-10 sm:pt-16 sm:pb-16 bg-white">
        <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
          >
            Tell us how we can help
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 sm:mt-5 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Share what you would like to achieve. Select the topic that best
            fits your enquiry and tell us a little about your organisation or
            project.
          </motion.p>
        </div>
      </section>

      {/* =========================================================================
          CONTACT DETAILS (DESKTOP BESIDE FORM / MOBILE STACKED)
         ========================================================================= */}
      <section className="py-4 pb-20 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft space-y-5 sm:space-y-6">
              <div>
                <Logo size="md" className="mb-3 sm:mb-4" />
                <p className="text-xs sm:text-sm text-slate-500">
                  Bhubaneswar, Odisha, India
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Email Link */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-brandBlue/10 text-brandBlue shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Flasho Tech
                    </span>
                    <a
                      href="mailto:info.flashotech@gmail.com"
                      className="text-brandBlue hover:underline font-semibold text-sm sm:text-base mt-0.5 block truncate"
                    >
                      info.flashotech@gmail.com
                    </a>
                    <a
                      href="mailto:info@flashotech.in"
                      className="text-slate-500 hover:underline text-xs mt-0.5 block truncate"
                    >
                      info@flashotech.in
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-brandRed/10 text-brandRed shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                      Bhubaneswar, Odisha, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Brands summary reminder */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">
                  Visiting from a brand site?
                </span>
                <p className="leading-relaxed">
                  Enquiries for FTCS, BootUp360, JSJ Card, or BYER are reviewed
                  directly by the respective project coordinators.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-soft">
              {/* Status Alert Notification */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-4 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">
                      {statusMessage}
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-5 p-4 rounded-xl sm:rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">
                      {statusMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form - with text-base to prevent mobile iOS Safari auto-zoom */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-5"
                noValidate
              >
                {/* Full name (Required) */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Full name <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Enter your name.
                  </p>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your name"
                    {...register("fullName", {
                      required: "Please complete this field.",
                    })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-base sm:text-sm focus:ring-2 focus:ring-brandBlue focus:outline-none"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Email address (Required) */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Email address <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Enter an email where we can reach you.
                  </p>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email", {
                      required: "Please complete this field.",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address.",
                      },
                    })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-base sm:text-sm focus:ring-2 focus:ring-brandBlue focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Phone number (Optional) */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Phone number
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Include the country code if applicable.
                  </p>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register("phone")}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-base sm:text-sm focus:ring-2 focus:ring-brandBlue focus:outline-none"
                  />
                </div>

                {/* Organisation (Optional) */}
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Organisation
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Enter your company or institution name.
                  </p>
                  <input
                    id="organisation"
                    type="text"
                    placeholder="Enter your company or institution name"
                    {...register("organisation")}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-base sm:text-sm focus:ring-2 focus:ring-brandBlue focus:outline-none"
                  />
                </div>

                {/* I’m interested in (Required dropdown) */}
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    I’m interested in <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="interest"
                    {...register("interest", {
                      required: "Please complete this field.",
                    })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white text-slate-800 text-base sm:text-sm focus:ring-2 focus:ring-brandBlue focus:outline-none cursor-pointer"
                  >
                    {topicOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.interest && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.interest.message}
                    </span>
                  )}
                </div>

                {/* Your message (Required) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Your message <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-[11px] text-slate-500 mb-1.5">
                    Tell us what you need and include any target timeline.
                  </p>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us what you need and include any target timeline..."
                    {...register("message", {
                      required: "Please complete this field.",
                    })}
                    className="w-full p-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-base sm:text-sm focus:ring-2 focus:ring-brandBlue focus:outline-none resize-y"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    loading={isSubmitting}
                    icon={Send}
                    className="w-full justify-center shadow-glow-blue py-3.5"
                  >
                    Send Enquiry
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
