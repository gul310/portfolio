import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { WhatsAppIcon, MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon, ArrowRightIcon, CheckCircleIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Development / WordPress",
    message: ""
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Syeda Gul Andam,%0A%0AMy name is ${encodeURIComponent(formData.name || "a visitor")}.${formData.email ? `%0AMy email: ${encodeURIComponent(formData.email)}` : ""}%0AProject Type: ${encodeURIComponent(formData.projectType)}%0A%0AMessage:%0A${encodeURIComponent(formData.message || "I would like to discuss a project with you.")}`;
    window.open(`https://wa.me/${personalInfo.contact.whatsappNumber}?text=${text}`, "_blank");
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(`Hello Syeda Gul Andam,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative border-t border-white/5"
      aria-label="Contact and Inquiries"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
            <span>Direct Inquiries & Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Discuss Your Project
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Available for software engineering roles, full-stack opportunities, business website development, and technical collaboration.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Verified Contact Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  Official Communication Channels
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Fastest response via official WhatsApp. Inquiries are handled directly with complete confidentiality.
                </p>
              </div>

              {/* Direct Links */}
              <div className="space-y-4 text-sm">
                {/* Official WhatsApp */}
                <a
                  href={personalInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 hover:border-emerald-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono text-emerald-300">Official WhatsApp</span>
                    <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {personalInfo.contact.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Email Address */}
                <div className="flex items-center justify-between gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-300">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase font-mono text-gray-400">Direct Email</span>
                      <a
                        href={`mailto:${personalInfo.contact.email}`}
                        className="font-medium text-white hover:text-violet-300 text-xs sm:text-sm transition-colors break-all"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition-colors"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                {/* Telephone */}
                <a
                  href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-300">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono text-gray-400">Direct Telephone</span>
                    <span className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                      {personalInfo.contact.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-gray-400">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-mono text-gray-400">Location</span>
                    <span className="font-medium text-gray-200">
                      {personalInfo.contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Profiles Row */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">Verified Profiles:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Direct Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-light mb-6">
                Fill in your project details to launch an encoded WhatsApp message or prefilled email draft directly.
              </p>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Name or Organization
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Tech Corp"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Email Address (Optional for WhatsApp)
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all"
                  />
                </div>

                {/* Project Category */}
                <div>
                  <label htmlFor="inquiry-type" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Project / Inquiry Type
                  </label>
                  <select
                    id="inquiry-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090e1b] border border-white/10 text-white text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all"
                  >
                    <option value="WordPress / Business Website">WordPress / Business Website Development</option>
                    <option value="Custom Web App / Software System">Custom Web App / Software Engineering</option>
                    <option value="Frontend Development (React)">Frontend Development (React / Tailwind)</option>
                    <option value="Full-Stack / Backend Integration">Full-Stack / Backend API Development</option>
                    <option value="Technical Training / Mentorship">Technical Training / Mentorship</option>
                    <option value="Internship / Employment Opportunity">Internship / Employment Opportunity</option>
                    <option value="Other Consultation">Other Consultation</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Project Scope / Message
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements, timeline, or position details..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-all resize-none"
                  />
                </div>

                {/* Dual Action Triggers */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-lg shadow-emerald-900/30 hover:scale-[1.01]"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Send via WhatsApp (+92 323 5848356)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 text-sm font-medium transition-colors"
                  >
                    <MailIcon className="w-4 h-4 text-violet-300" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <p className="text-[11px] text-gray-500 font-mono text-center pt-2">
                  Guaranteed direct delivery without intermediary third-party databases.
                </p>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}