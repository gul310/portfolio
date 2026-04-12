import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Teaching from "./components/Teaching";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Github from "./components/Github";
import Linkedin from "./components/Linkedin";

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
    <div className="bg-[#0a0a1a] relative overflow-x-hidden">
      
      {/* ✨ PROGRESS BAR - Smooth scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-rose-500 to-violet-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ✨ CURSOR GLOW EFFECT - Premium touch */}
      <motion.div
        className="fixed w-96 h-96 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ✨ SOFT BACKGROUND OVERLAY */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0a0a1a] to-[#0f0f2a] pointer-events-none z-0" />
      
      {/* ✨ FLOATING ORBS BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] bg-violet-400/5 rounded-full blur-[120px] top-[20%] left-[-10%] animate-float-slow" />
        <div className="absolute w-[600px] h-[600px] bg-rose-400/5 rounded-full blur-[120px] bottom-[10%] right-[-15%] animate-float-slower" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-400/5 rounded-full blur-[100px] top-[50%] left-[30%] animate-float-medium" />
      </div>

      {/* MAIN CONTENT - Mobile gaps fixed */}
      <div className="relative z-10">
        
        {/* Navbar - Stays on top */}
        <Navbar />
        
        {/* Hero Section - No extra gap */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="scroll-mt-0"
        >
          <Hero />
        </motion.section>

        {/* Projects Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Projects />
        </motion.section>

        {/* Skills Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Skills />
        </motion.section>

        {/* Teaching Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Teaching />
        </motion.section>

        {/* Certificates Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Certificates />
        </motion.section>

        {/* Github Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Github />
        </motion.section>

        {/* LinkedIn Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Linkedin />
        </motion.section>

        {/* Contact Section - Reduced gap */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-16 sm:scroll-mt-20"
        >
          <Contact />
        </motion.section>

        {/* ✨ FOOTER CREDIT */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-6 border-t border-white/5 mt-6 sm:mt-8"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide">
            © 2026 Syeda Gul Andam Ali Kazmi | Built with 💜
          </p>
        </motion.footer>

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
      `}</style>
    </div>
  );
}