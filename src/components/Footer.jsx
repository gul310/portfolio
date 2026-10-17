import React from "react";
import { personalInfo } from "../data/portfolioData";
import { WhatsAppIcon, MailIcon, GitHubIcon, LinkedInIcon, AcademicCapIcon, BriefcaseIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050811] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Branding & Identities */}
        <div>
          <span className="block text-base font-bold text-white tracking-tight">
            {personalInfo.fullName}
          </span>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Software Engineering Student &bull; Co-Founder & Technical Lead at Jafasa Tech Solutions
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Official WhatsApp:{" "}
            <a
              href={personalInfo.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline"
            >
              {personalInfo.contact.phoneDisplay}
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#academic" className="hover:text-white transition-colors">Academic Journey</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Software</a>
          <a href="#wordpress" className="hover:text-white transition-colors">WordPress</a>
          <a href="#development" className="hover:text-white transition-colors">Development</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 transition-colors"
            aria-label="Official WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="p-2 rounded-xl bg-white/5 hover:bg-violet-500/20 text-gray-400 hover:text-violet-300 transition-colors"
            aria-label="Email Contact"
          >
            <MailIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-600 font-mono">
        <p>&copy; {new Date().getFullYear()} Syeda Gul Andam Ali Kazmi. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with modern React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}
