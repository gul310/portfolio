import React, { useState } from "react";
import { motion } from "framer-motion";
import { softwareProjects } from "../data/portfolioData";
import { CodeIcon, ExternalLinkIcon, GitHubIcon, DocumentTextIcon, LayersIcon, ArrowRightIcon } from "./Icons";
import CaseStudyModal from "./CaseStudyModal";

export default function SoftwareProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCaseStudy = (proj) => {
    setSelectedProject(proj);
    setModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#080d19] relative border-t border-white/5"
      aria-label="Software Applications and Management Systems"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <LayersIcon className="w-4 h-4" />
            <span>Engineering Systems & Applications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Software Applications & Systems
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Dedicated software engineering projects, enterprise management systems, and functional prototypes, distinct from commercial content websites.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {softwareProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 sm:p-7 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-gray-400">
                    {project.category.split(" ")[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-violet-200 transition-colors">
                  {project.title}
                </h3>

                {/* Tagline / Summary */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-4">
                  {project.tagline}
                </p>

                {/* Status Indicator */}
                <div className="mb-4 text-[11px] font-mono text-emerald-300 bg-emerald-950/20 border border-emerald-500/20 px-3 py-1.5 rounded-xl">
                  <span className="font-semibold uppercase tracking-wider text-[10px] text-gray-400 block">Status:</span>
                  <span>{project.status}</span>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.verifiedStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 p-1 rounded"
                >
                  <DocumentTextIcon className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                  <ArrowRightIcon className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 hover:text-white transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                      title="Live Demo"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                      aria-label={`View source code of ${project.title} on GitHub`}
                      title="GitHub Source"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Case Study Display */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </section>
  );
}
