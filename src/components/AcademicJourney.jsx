import React from "react";
import { motion } from "framer-motion";
import { academicJourney } from "../data/portfolioData";
import { AcademicCapIcon, CodeIcon, LayersIcon, CheckCircleIcon } from "./Icons";

export default function AcademicJourney() {
  return (
    <section
      id="academic"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#080d19] relative border-t border-white/5"
      aria-label="Academic Journey"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <AcademicCapIcon className="w-4 h-4" />
            <span>Formal Education & Engineering Foundations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Academic Journey
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            {academicJourney.overview}
          </p>
        </div>

        {/* Education Institution Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 mb-2">
                {academicJourney.status}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {academicJourney.degree}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">
                {academicJourney.institution}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-300">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                Major: Software Engineering
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                Focus: Systems & Web Architecture
              </span>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              My coursework emphasizes algorithmic problem solving, software design patterns, database architecture, and systematic software engineering methodologies. Rather than treating academia in isolation, I continuously apply theoretical computer science concepts to live production codebases and real business requirements.
            </p>
          </div>
        </motion.div>

        {/* Academic Development Bridge: Curriculum to Industry */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-8">
            <LayersIcon className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Curriculum to Industry Bridge
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicJourney.curriculumBridge.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>

                  <div className="space-y-3 mb-4 text-xs sm:text-sm">
                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-violet-300 mb-1">
                        Academic Foundation:
                      </span>
                      <p className="text-gray-300 font-light leading-relaxed">
                        {item.academicFocus}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-300 mb-1">
                        Practical Implementation:
                      </span>
                      <p className="text-gray-200 leading-relaxed">
                        {item.practicalApplication}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-300 mb-1.5">
                    Demonstrated in:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.relatedProjects.map((p, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
