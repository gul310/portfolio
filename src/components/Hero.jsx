import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { ArrowRightIcon, WhatsAppIcon, CodeIcon, AcademicCapIcon, BriefcaseIcon } from "./Icons";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070b14]"
      aria-label="Hero Introduction"
    >
      {/* Background radial gradient layers */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[500px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto w-full z-10 text-center">
        
        {/* Academic & Leadership Dual Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6"
        >
          <div className="flex items-center gap-1.5 text-xs text-violet-300 font-medium">
            <AcademicCapIcon className="w-3.5 h-3.5" />
            <span>Software Engineering Student</span>
          </div>
          <span className="text-gray-600 hidden sm:inline">&bull;</span>
          <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            <span>Co-Founder & Technical Lead at Jafasa Tech</span>
          </div>
        </motion.div>

        {/* Full Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4"
        >
          <span className="block">{personalInfo.fullName}</span>
        </motion.h1>

        {/* Primary Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl md:text-2xl font-semibold bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent max-w-3xl mx-auto mb-4"
        >
          {personalInfo.headline}
        </motion.h2>

        {/* Supporting Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 font-normal leading-relaxed"
        >
          {personalInfo.supportingHeadline}
        </motion.p>

        {/* Verified Professional Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md mb-8 text-left"
        >
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-light">
            {personalInfo.introduction}
          </p>
        </motion.div>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Software Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-violet-900/30 hover:shadow-violet-900/50 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <CodeIcon className="w-4 h-4" />
            <span>Explore Projects</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>

          {/* Academic Journey */}
          <a
            href="#academic"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-gray-200 font-medium text-sm transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <AcademicCapIcon className="w-4 h-4 text-violet-300" />
            <span>Academic Journey</span>
          </a>

          {/* Official WhatsApp */}
          <a
            href={personalInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-medium text-sm transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Discussion</span>
          </a>

          {/* Contact Direct */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-gray-400 hover:text-white font-medium text-sm transition-colors"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Quick Highlights Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 sm:mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left max-w-4xl mx-auto"
        >
          <div className="p-3">
            <span className="block text-xs uppercase tracking-wider text-gray-300 font-mono">Academic Status</span>
            <span className="text-sm font-semibold text-white">Degree in Progress</span>
            <span className="block text-xs text-gray-300">City University (CUSIT)</span>
          </div>

          <div className="p-3">
            <span className="block text-xs uppercase tracking-wider text-gray-300 font-mono">Leadership Role</span>
            <span className="text-sm font-semibold text-white">Co-Founder & Tech Lead</span>
            <span className="block text-xs text-gray-300">Jafasa Tech Solutions</span>
          </div>

          <div className="p-3">
            <span className="block text-xs uppercase tracking-wider text-gray-300 font-mono">Verified Portfolios</span>
            <span className="text-sm font-semibold text-white">12 Business Sites</span>
            <span className="block text-xs text-gray-300">Audited UAE & Regional</span>
          </div>

          <div className="p-3">
            <span className="block text-xs uppercase tracking-wider text-gray-300 font-mono">Instruction</span>
            <span className="text-sm font-semibold text-white">Technical Trainer</span>
            <span className="block text-xs text-gray-300">Six-Month Program</span>
          </div>
        </motion.div>

      </div>
    </header>
  );
}