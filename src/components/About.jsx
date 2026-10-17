import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { AcademicCapIcon, BriefcaseIcon, CodeIcon, ShieldCheckIcon, CheckCircleIcon } from "./Icons";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative"
      aria-label="About Syeda Gul Andam Ali Kazmi"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Professional Profile & Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About Me
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Bridging academic rigor with executive and technical execution in software development.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Biography Text (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed font-light"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md space-y-4">
              <h3 className="text-xl font-bold text-white">
                Engineering Practical Solutions Through Continuous Learning
              </h3>

              <p>
                I am a Software Engineering student at City University of Science and Information Technology, Peshawar, and Co-Founder & Technical Lead at Jafasa Tech Solutions. My journey combines deep theoretical coursework with real-world entrepreneurial and software development responsibility.
              </p>

              <p>
                At Jafasa Tech Solutions, I translate client business requirements into dependable software solutions, enterprise WordPress implementations, and custom web applications. I participate actively in project architecture, technical decisions, and digital optimization initiatives, including Technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).
              </p>

              <p>
                Alongside active project development, I served as a Technical Trainer delivering a comprehensive six-month web engineering program. Teaching reinforced my commitment to clean code, modular architecture, and systematic debugging practices.
              </p>

              <p>
                I believe in honest, evidence-based engineering: software should solve measurable business problems, respect user privacy, and maintain high standards of performance and accessibility across all screen sizes.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-violet-300 font-semibold text-sm">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Disciplined Engineering</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Focusing on structured architecture, database normalization, and maintainable component design over shortcuts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 mb-2 text-cyan-300 font-semibold text-sm">
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Business Impact</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Delivering fast, high-converting digital portals that serve verified commercial operations across the UAE and region.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Facts & Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl">
              
              {/* Profile Monogram Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-mono font-bold text-xl text-white shadow-lg shadow-violet-900/30">
                  SG
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {personalInfo.fullName}
                  </h4>
                  <p className="text-xs text-gray-300 font-mono">
                    {personalInfo.academicTitle}
                  </p>
                </div>
              </div>

              {/* Verified Identity Records */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-300">
                    Academic Institution
                  </span>
                  <span className="text-gray-200 font-medium">
                    City University of Science & IT, Peshawar
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-300">
                    Current Degree
                  </span>
                  <span className="text-gray-200 font-medium">
                    BS Software Engineering (In Progress)
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-300">
                    Enterprise Role
                  </span>
                  <span className="text-gray-200 font-medium">
                    Co-Founder & Technical Lead &bull; Jafasa Tech
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-300">
                    Instructional Role
                  </span>
                  <span className="text-gray-200 font-medium">
                    Technical Trainer (Six-Month Training Program)
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-300">
                    Industrial Programs
                  </span>
                  <span className="text-gray-200 font-medium">
                    DecodeLabs Full Stack &bull; DevSpire Internship
                  </span>
                </div>

                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-gray-300">
                    Official WhatsApp
                  </span>
                  <a
                    href={personalInfo.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-medium hover:underline"
                  >
                    {personalInfo.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp direct card CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={personalInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-900/30"
                >
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}