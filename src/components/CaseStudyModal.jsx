import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon, ExternalLinkIcon, GitHubIcon, CheckCircleIcon, LayersIcon, ShieldCheckIcon, DocumentTextIcon } from "./Icons";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#060913]/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0d1424] border border-white/10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.7)] text-gray-200 z-10 p-6 sm:p-8 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Close case study"
          >
            <XIcon className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300">
              {project.badge || "Engineering Case Study"}
            </span>
            <span className="text-xs text-gray-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h2 id="case-study-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
            {project.title || project.name}
          </h2>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 font-light">
            {project.tagline || project.businessScope}
          </p>

          {/* Verified Stack / Tools */}
          <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-white/10">
            {(project.verifiedStack || project.verifiedTools || []).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Content Grid */}
          <div className="space-y-6 text-sm sm:text-base leading-relaxed">
            {/* Overview */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-300 flex items-center gap-2 mb-2">
                <DocumentTextIcon className="w-4 h-4" />
                Project Overview
              </h3>
              <p className="text-gray-300">{project.overview || project.highlights}</p>
            </div>

            {/* Problem Statement */}
            {project.problemStatement && (
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-rose-300 flex items-center gap-2 mb-2">
                  <ShieldCheckIcon className="w-4 h-4" />
                  Problem Being Addressed
                </h3>
                <p className="text-gray-300">{project.problemStatement}</p>
              </div>
            )}

            {/* Architecture */}
            {project.architecture && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-2 mb-2">
                  <LayersIcon className="w-4 h-4" />
                  Technical Architecture & Design
                </h3>
                <p className="text-gray-300">{project.architecture}</p>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-300 flex items-center gap-2 mb-3">
                  <CheckCircleIcon className="w-4 h-4" />
                  Key Implemented Features
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Role & Contribution */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 mb-2">
                My Role & Contribution
              </h3>
              <p className="text-gray-300">{project.roleContribution || project.contribution}</p>
            </div>

            {/* Technical Challenges */}
            {project.technicalChallenges && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Technical Challenge & Solution
                </h3>
                <p className="text-gray-300">{project.technicalChallenges}</p>
              </div>
            )}

            {/* Verification Status */}
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-300 mb-1">
                Implementation & Verification Status
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                {project.currentVerificationStatus || project.liveStatus || "Verified in Project Portfolio"}
              </p>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-end items-center">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors shadow-lg shadow-violet-900/20"
              >
                <span>Live Demonstration</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}
            {project.verifiedUrl && (
              <a
                href={project.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-colors shadow-lg shadow-violet-900/20"
              >
                <span>Visit Live Website</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 font-medium text-sm transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
