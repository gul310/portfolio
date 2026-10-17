import React from "react";
import { motion } from "framer-motion";
import { professionalDevelopment } from "../data/portfolioData";
import { AcademicCapIcon, CheckCircleIcon, SparklesIcon, LayersIcon } from "./Icons";

export default function ProfessionalDevelopment() {
  return (
    <section
      id="development"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#080d19] relative border-t border-white/5"
      aria-label="Professional Development and Continuous Learning"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <SparklesIcon className="w-4 h-4" />
            <span>Credentials & Ongoing Education</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Professional Development
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Verified credentials from recognized academies and structured continuous learning initiatives in emerging software disciplines.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-emerald-400" />
            <span>Verified Credentials & Certifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalDevelopment.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-300">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h4>

                  <span className="block text-xs font-medium text-cyan-300 mb-3">
                    {cert.issuer}
                  </span>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {cert.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircleIcon className="w-3.5 h-3.5" />
                  <span>Credential Verified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Learning Initiatives */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <LayersIcon className="w-5 h-5 text-indigo-400" />
            <span>Active Continuous Learning & Research</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionalDevelopment.continuousLearning.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    {item.area}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
