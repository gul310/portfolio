import { useEffect, lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// ✅ Lazy load components for better performance
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Teaching = lazy(() => import("./components/Teaching"));
const Certificates = lazy(() => import("./components/Certificates"));
const Github = lazy(() => import("./components/Github"));
const Linkedin = lazy(() => import("./components/Linkedin"));
const Contact = lazy(() => import("./components/Contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center bg-[#0a0a1a]">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-rose-500/20 border-b-rose-500 rounded-full animate-spin"></div>
    </div>
  </div>
);

export default function App() {
  // Smooth scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth page load animation
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title for SEO
    document.title = "Syeda Gul Andam Ali Kazmi | Frontend Developer Portfolio";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Frontend Developer specializing in React, modern web applications, and high-performance websites. View my portfolio and projects.");
    }
  }, []);

  // Section animations variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <div className="bg-[#0a0a1a] relative overflow-x-hidden">
        
        {/* ✨ PROGRESS BAR - Smooth scroll indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-rose-500 to-violet-500 z-50 origin-left"
          style={{ scaleX }}
          role="progressbar"
          aria-label="Scroll progress"
        />

        {/* ✨ CURSOR GLOW EFFECT - Premium touch */}
        <div
          className="fixed w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none z-0"
          aria-hidden="true"
        />
        
        {/* ✨ SOFT BACKGROUND OVERLAY */}
        <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a1a] to-[#0f0f2a] pointer-events-none z-0" aria-hidden="true" />
        
        {/* ✨ FLOATING ORBS BACKGROUND */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div className="absolute w-[500px] h-[500px] bg-violet-400/5 rounded-full blur-[120px] top-[20%] left-[-10%] animate-float-slow" />
          <div className="absolute w-[600px] h-[600px] bg-rose-400/5 rounded-full blur-[120px] bottom-[10%] right-[-15%] animate-float-slower" />
          <div className="absolute w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[100px] top-[50%] left-[30%] animate-float-medium" />
        </div>

        {/* MAIN CONTENT */}
        <div className="relative z-10" id="main-content">
          
          {/* Navbar - Stays on top */}
          <Navbar />
          
          {/* Hero Section - With entrance animation */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="scroll-mt-0"
            aria-label="Hero section"
          >
            <Hero />
          </motion.section>

          {/* Projects Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="Projects section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Projects />
            </Suspense>
          </motion.section>

          {/* Skills Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="Skills section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Skills />
            </Suspense>
          </motion.section>

          {/* Teaching Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="Teaching section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Teaching />
            </Suspense>
          </motion.section>

          {/* Certificates Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="Certificates section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Certificates />
            </Suspense>
          </motion.section>

          {/* Github Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="GitHub section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Github />
            </Suspense>
          </motion.section>

          {/* LinkedIn Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="LinkedIn section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Linkedin />
            </Suspense>
          </motion.section>

          {/* Contact Section - Lazy Loaded */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="scroll-mt-16 sm:scroll-mt-20"
            aria-label="Contact section"
          >
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
            </Suspense>
          </motion.section>

          {/* ✨ FOOTER CREDIT */}
          <footer
            className="text-center py-6 border-t border-white/5 mt-6 sm:mt-8"
            aria-label="Footer"
          >
            <p className="text-gray-500 text-xs sm:text-sm tracking-wide">
              © 2024 Syeda Gul Andam Ali Kazmi | Built with <span aria-label="love">💜</span>
            </p>
          </footer>

        </div>

        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-30px) translateX(20px); }
          }
          @keyframes float-slower {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(40px) translateX(-30px); }
          }
          @keyframes float-medium {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(-15px); }
          }
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          .animate-float-slower {
            animation: float-slower 15s ease-in-out infinite;
          }
          .animate-float-medium {
            animation: float-medium 10s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-float-slow,
            .animate-float-slower,
            .animate-float-medium {
              animation: none;
            }
          }
        `}</style>
      </div>
    </>
  );
}