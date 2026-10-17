import React, { useState } from "react";
import { motion } from "framer-motion";
import { wordPressProjects } from "../data/portfolioData";
import { GlobeAltIcon, ExternalLinkIcon, FilterIcon, SearchIcon, DocumentTextIcon } from "./Icons";
import CaseStudyModal from "./CaseStudyModal";

const filterCategories = [
  { key: "all", label: "All Websites (12)" },
  { key: "moving", label: "Moving & Relocation" },
  { key: "transport", label: "Transport & Commercial Fleet" },
  { key: "landscaping", label: "Landscaping & Palm Services" },
  { key: "maintenance", label: "Maintenance & Services" },
  { key: "agency", label: "Agency & Solutions" }
];

export default function WordPressProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSite, setSelectedSite] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = wordPressProjects.filter((item) => {
    const matchesCategory = activeFilter === "all" || item.categoryKey === activeFilter;
    const matchesSearch = searchQuery.trim() === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.businessScope.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contribution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenDetails = (site) => {
    setSelectedSite(site);
    setModalOpen(true);
  };

  return (
    <section
      id="wordpress"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative border-t border-white/5"
      aria-label="WordPress & Business Websites Complete Portfolio"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <GlobeAltIcon className="w-4 h-4" />
            <span>Complete Commercial Web Audit</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            WordPress & Business Websites
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Every verified WordPress client website, commercial logistics platform, and enterprise portal customized, developed, optimized, or maintained.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <SearchIcon className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search websites by name, category, or service..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all"
              aria-label="Search WordPress business websites"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === cat.key
                    ? "bg-cyan-600 text-white shadow-md shadow-cyan-900/30"
                    : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-6 px-1">
          <span>Showing {filteredProjects.length} of {wordPressProjects.length} Verified Websites</span>
          <span>UAE, Qatar & Regional Deployments</span>
        </div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {site.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Live
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {site.name}
                </h3>

                {/* Business Scope */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-4">
                  {site.businessScope}
                </p>

                {/* Contribution details */}
                <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-4">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">
                    My Technical Contribution:
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {site.contribution}
                  </p>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {site.verifiedTools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenDetails(site)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
                >
                  <DocumentTextIcon className="w-3.5 h-3.5" />
                  <span>Project Details</span>
                </button>

                <a
                  href={site.verifiedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-medium transition-colors"
                  aria-label={`Visit live website for ${site.name}`}
                >
                  <span>Visit Website</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Case Study / Details */}
        <CaseStudyModal
          project={selectedSite}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </section>
  );
}
