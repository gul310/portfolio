import React, { useState } from "react";
import { motion } from "framer-motion";
import { technicalSkills } from "../data/portfolioData";
import { CodeIcon, LayersIcon, DatabaseIcon, ServerIcon, GlobeAltIcon, SparklesIcon } from "./Icons";

const categoryIcons = {
  frontend: <CodeIcon className="w-5 h-5 text-cyan-400" />,
  backend: <ServerIcon className="w-5 h-5 text-violet-400" />,
  databases: <DatabaseIcon className="w-5 h-5 text-emerald-400" />,
  cms: <GlobeAltIcon className="w-5 h-5 text-indigo-400" />,
  engineering: <LayersIcon className="w-5 h-5 text-amber-400" />,
  optimization: <SparklesIcon className="w-5 h-5 text-rose-400" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const categories = Object.entries(technicalSkills);

  const displayedCategories = activeTab === "all" 
    ? categories 
    : categories.filter(([key]) => key === activeTab);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative border-t border-white/5"
      aria-label="Technical Skills and Technology Stack"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <CodeIcon className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Skills & Technology Stack
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Categorized competencies grounded in practical project implementation and software engineering coursework, presented without fabricated percentage ratings.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === "all"
                  ? "bg-violet-600 text-white shadow-md shadow-violet-900/30"
                  : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              All Domains
            </button>
            {categories.map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === key
                    ? "bg-violet-600 text-white shadow-md shadow-violet-900/30"
                    : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.category.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map(([key, group], idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {categoryIcons[key]}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-gray-400 font-light mb-5">
                  {group.description}
                </p>

                <div className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/20 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-gray-200">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          skill.level.includes("Production") || skill.level.includes("Practical")
                            ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                            : "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 font-light">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}