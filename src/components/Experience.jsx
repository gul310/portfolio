import React from "react";
import { motion } from "framer-motion";
import { professionalExperience } from "../data/portfolioData";
import { BriefcaseIcon, CheckCircleIcon, ExternalLinkIcon } from "./Icons";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#080d19] relative border-t border-white/5"
      aria-label="Professional Experience and Leadership"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BriefcaseIcon className="w-4 h-4" />
            <span>Professional Experience & Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Experience & Responsibilities
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Verified roles encompassing technical leadership, commercial software and web engineering, and technical training.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {professionalExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/25 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/30">
                      {exp.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
                    <span className="font-medium text-gray-200">{exp.company}</span>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 text-xs"
                      >
                        <span>Visit Site</span>
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-left md:text-right">
                  <span className="inline-block px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-gray-300">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="py-4">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                  {exp.summary}
                </p>
              </div>

              {/* Responsibilities list */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 font-mono">
                  Verified Responsibilities & Contributions:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
