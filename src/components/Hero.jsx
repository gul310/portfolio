import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  // Performance: Detect mobile for reduced animations
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    
    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 relative overflow-hidden bg-[#0a0a1a]">

      {/* 🔥 DREAMY BACKGROUND - Optimized for performance */}
      <div className="absolute w-[400px] sm:w-[600px] md:w-[800px] lg:w-[900px] h-[400px] sm:h-[600px] md:h-[800px] lg:h-[900px] bg-violet-400/15 blur-[100px] sm:blur-[150px] md:blur-[180px] lg:blur-[200px] top-[-200px] sm:top-[-250px] lg:top-[-350px] left-[-150px] sm:left-[-200px] lg:left-[-250px] rounded-full animate-float"></div>
      
      <div className="absolute w-[350px] sm:w-[500px] md:w-[700px] lg:w-[800px] h-[350px] sm:h-[500px] md:h-[700px] lg:h-[800px] bg-rose-300/15 blur-[100px] sm:blur-[150px] md:blur-[180px] lg:blur-[200px] bottom-[-150px] sm:bottom-[-200px] lg:bottom-[-250px] right-[-150px] sm:right-[-200px] lg:right-[-250px] rounded-full animate-float-delayed"></div>
      
      <div className="absolute w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-indigo-400/10 blur-[80px] sm:blur-[120px] md:blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      
      {/* ✨ SOFT SPARKLES - Reduced on mobile for performance */}
      {!isMobile && !isReducedMotion && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.3, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatDelay: Math.random() * 4 }}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* 💎 MAIN GLASS CARD - Optimized */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-4xl xl:max-w-5xl 
        px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 
        py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 
        rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] lg:rounded-[3rem]
        bg-white/5 backdrop-blur-lg sm:backdrop-blur-xl md:backdrop-blur-2xl lg:backdrop-blur-3xl
        border border-white/10 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
        hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.15)]
        transition-all duration-500
        flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"
      >
        
        {/* 👋 SMALL GREETING BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wide">
            ✨ Welcome to my portfolio ✨
          </span>
        </motion.div>

        {/* 👑 HI I'M */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-wide text-gray-200"
        >
          Hi, I'm
          {!isReducedMotion && (
            <motion.span
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, 12, 0]
              }}
              transition={{ delay: 0.5, duration: 0.6, repeat: 1 }}
              className="inline-block ml-1 sm:ml-2 text-2xl sm:text-3xl md:text-4xl"
            >
              👋
            </motion.span>
          )}
          {isReducedMotion && <span className="inline-block ml-1 sm:ml-2 text-2xl sm:text-3xl md:text-4xl">👋</span>}
        </motion.h1>

        {/* 👤 NAME */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6, type: "spring", stiffness: 80, damping: 15 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-center
          bg-gradient-to-r from-violet-300 via-rose-200 to-indigo-300 
          bg-clip-text text-transparent
          leading-tight tracking-tight px-2"
        >
          <span className="block sm:inline">Syeda Gul Andam</span>
          <span className="hidden sm:inline"> </span>
          <span className="block sm:inline">Ali Kazmi</span>
        </motion.h2>

        {/* 🌸 SOFT DIVIDER */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "40px" }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="h-[2px] bg-gradient-to-r from-violet-300/50 via-rose-300/50 to-transparent rounded-full my-1 sm:my-2"
        ></motion.div>

        {/* 📝 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-400 max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl 
          text-xs sm:text-sm md:text-base lg:text-lg 
          leading-relaxed sm:leading-relaxed md:leading-relaxed 
          font-light tracking-wide px-2"
        >
          Frontend Developer crafting 
          <span className="text-rose-300/80"> modern, clean </span> 
          and
          <span className="text-violet-300/80"> high-performance </span> 
          web experiences for global clients.
        </motion.p>

        {/* 🚀 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-5 mt-3 sm:mt-4 md:mt-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.a
            href="#projects"
            whileHover={!isReducedMotion ? { scale: 1.05, y: -2 } : {}}
            whileTap={{ scale: 0.98 }}
            className="group relative px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full overflow-hidden text-center cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/80 to-rose-500/80 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/80 to-violet-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-white font-medium text-sm sm:text-base tracking-wide">
              ✨ View Work
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={!isReducedMotion ? { scale: 1.05, y: -2 } : {}}
            whileTap={{ scale: 0.98 }}
            className="px-5 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full 
            bg-white/5 backdrop-blur-sm
            border border-white/15 
            hover:bg-white/10 hover:border-white/25
            transition-all duration-400 
            text-gray-300 font-medium text-sm sm:text-base tracking-wide text-center cursor-pointer"
          >
            💌 Contact Me
          </motion.a>
        </motion.div>

      </motion.div>

      {/* 🎯 SCROLL INDICATOR - Hidden on mobile */}
      {!isReducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/20 rounded-full flex justify-center cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 sm:w-1.5 sm:h-2 bg-white/30 rounded-full mt-1.5 sm:mt-2"
            />
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(8px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(15px) translateX(-8px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-float-delayed {
            animation: none;
          }
        }
        @media (max-width: 640px) {
          .animate-float, .animate-float-delayed {
            animation-duration: 12s;
          }
        }
      `}</style>
    </section>
  );
}