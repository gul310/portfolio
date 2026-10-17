import React, { useEffect, lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import AcademicJourney from "./components/AcademicJourney";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

// Lazy load below-the-fold sections for maximum performance
const SoftwareProjects = lazy(() => import("./components/SoftwareProjects"));
const WordPressProjects = lazy(() => import("./components/WordPressProjects"));
const ProfessionalDevelopment = lazy(() => import("./components/ProfessionalDevelopment"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const LoadingFallback = () => (
  <div className="py-20 flex items-center justify-center bg-[#070b14]">
    <div className="w-8 h-8 border-2 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Set official metadata
    document.title = "Syeda Gul Andam Ali Kazmi | Software Engineering Student & Co-Founder at Jafasa Tech";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Official portfolio of Syeda Gul Andam Ali Kazmi: Software Engineering Student, Co-Founder & Technical Lead at Jafasa Tech Solutions. Practical software engineering, enterprise WordPress portals, and management systems."
      );
    }
  }, []);

  return (
    <>
      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <div className="bg-[#070b14] text-white selection:bg-violet-500/30 selection:text-white min-h-screen relative overflow-x-hidden font-sans">
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 z-50 origin-left"
          style={{ scaleX }}
          role="progressbar"
          aria-label="Page scroll progress"
        />

        {/* Ambient background glows */}
        <div
          className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Main Content Body */}
        <main id="main-content" tabIndex={-1}>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Academic Journey Section */}
          <AcademicJourney />

          {/* Professional Experience Section */}
          <Experience />

          {/* Technical Skills Section */}
          <Skills />

          {/* Software Applications & Systems Section */}
          <Suspense fallback={<LoadingFallback />}>
            <SoftwareProjects />
          </Suspense>

          {/* WordPress & Business Websites Section */}
          <Suspense fallback={<LoadingFallback />}>
            <WordPressProjects />
          </Suspense>

          {/* Professional Development & Credentials */}
          <Suspense fallback={<LoadingFallback />}>
            <ProfessionalDevelopment />
          </Suspense>

          {/* Contact Section */}
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </main>

        {/* Professional Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}