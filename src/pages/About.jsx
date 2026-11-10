import { motion } from "framer-motion";
import { Building2, Linkedin, ArrowRight, Zap } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import Logo from "../components/Logo";
import {
  teamMembers,
  teamIntroduction,
  howWeWorkPrinciples,
} from "../data/team";

export default function About() {
  return (
    <>
      <SEO
        title="About Flasho Tech Private Limited"
        description="Learn how Flasho Tech supports businesses and institutions through consulting, technology, training, and digital products."
      />

      {/* =========================================================================
          PAGE INTRODUCTION
         ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-24 bg-white">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brandBlue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brandRed/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue border border-brandBlue/20"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Bhubaneswar, Odisha</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="py-2"
            >
              <Logo size="lg" className="justify-center" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 tracking-tight leading-tight"
            >
              About Flasho Tech Private Limited
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal"
            >
              We are a Bhubaneswar-based company working across business
              consulting, technology development, skills training, and digital
              products. We work with startups, SMEs, educational institutions,
              professionals, and individuals through our consulting wing and
              product brands.
            </motion.p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR MISSION
         ========================================================================= */}
      <section className="py-16 bg-slate-50/80 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-brandBlue/20 shadow-soft text-center space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-brandBlue block">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900">
              Make technology easier to use at work
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our mission is to help organisations improve productivity and
              pursue growth through technology, informed business decisions, and
              practical training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK (Three Principles in Sequence)
         ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <SectionHeading
          badge="Working Principles"
          title="How We Work"
          // highlightText="Work"
          description="Every engagement—from bespoke software builds to business strategy plans and training workshops—follows our structured three-phase approach."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howWeWorkPrinciples.map((principle, index) => (
            <motion.div
              key={principle.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between hover:border-brandBlue/40 transition-colors"
            >
              <div>
                <span className="text-3xl font-extrabold font-heading text-brandBlue/30 block mb-4">
                  {principle.step}
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          OUR TEAM
         ========================================================================= */}
      <section className="py-12 bg-slate-50/80 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Team"
            title="Meet the Team Behind FTPL"
            description={teamIntroduction}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft hover:shadow-md hover:border-brandBlue/30 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="relative mb-5 shrink-0">
                  <img
                    src={member.avatar || member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-slate-100 group-hover:ring-brandBlue/20 transition-all duration-300 shadow-xs"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80";
                    }}
                  />
                </div>

                <div className="w-full flex-1 flex flex-col items-center">
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-brandBlue transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-brandBlue mt-1">
                    {member.role}
                  </p>

                  {member.credentials && (
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {member.credentials}
                    </p>
                  )}

                  <p className="text-sm text-slate-600 leading-relaxed mt-3 flex-1">
                    {member.description || member.bio}
                  </p>

                  {member.linkedin && (
                    <div className="pt-4 mt-auto">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-brandBlue hover:bg-brandBlue hover:text-white transition-colors border border-brandBlue/20"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR COMPANY AND BRANDS SUMMARY + CTAs (Clean White Card)
         ========================================================================= */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 lg:p-14 bg-white border-2 border-brandBlue/20 shadow-xl text-slate-900 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brandBlue/10 text-brandBlue border border-brandBlue/20">
              <Zap className="w-3.5 h-3.5 text-brandRed" />
              <span>Our Brands & Consulting</span>
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900">
              Our company and brands
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Flasho Tech Consultancy Services is our consulting wing. BootUp360
              is our training initiative. JSJ Card is our digital identity
              product for businesses and individuals. BYER is our B2B
              distribution platform.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/brands"
                variant="outline"
                size="lg"
                icon={ArrowRight}
                className="w-full sm:w-auto border-slate-300 text-slate-800 hover:border-brandBlue hover:text-brandBlue"
              >
                Meet Our Brands
              </Button>

              <Button
                to="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-300 text-slate-800 hover:border-brandBlue hover:text-brandBlue"
              >
                Contact Flasho Tech
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
