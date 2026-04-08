import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-[#0a0a1a]">

      {/* 🌸 DREAMY BACKGROUND - Soft & Ethereal */}
      <div className="absolute w-[800px] h-[800px] bg-violet-400/15 blur-[180px] top-[-300px] left-[-200px] rounded-full animate-float"></div>
      <div className="absolute w-[700px] h-[700px] bg-rose-300/15 blur-[180px] bottom-[-250px] right-[-200px] rounded-full animate-float-delayed"></div>
      <div className="absolute w-[500px] h-[500px] bg-indigo-400/10 blur-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] bg-pink-300/10 blur-[100px] top-[20%] left-[10%] rounded-full"></div>
      
      {/* ✨ SOFT SPARKLES */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatDelay: Math.random() * 2 }}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* 💎 SOFT GLASS CARD - No harsh borders */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="max-w-3xl w-full px-8 md:px-14 py-12 md:py-16 rounded-[3rem] 
        bg-white/5 backdrop-blur-3xl 
        border border-white/10 
        shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
        hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.2)]
        transition-all duration-1000
        flex flex-col items-center gap-5"
      >
        
        {/* 👋 SMALL GREETING BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <span className="text-sm text-gray-300 tracking-wide">
            ✨ Welcome to my portfolio ✨
          </span>
        </motion.div>

        {/* 👑 HI I'M - Soft & Elegant */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-5xl font-light tracking-wide text-gray-200"
        >
          Hi, I'm
          <motion.span
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ delay: 0.5, duration: 0.8, repeat: 2 }}
            className="inline-block ml-2 text-4xl"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* 👤 NAME - Soft Gradient, No harsh colors */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 80 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center
          bg-gradient-to-r from-violet-300 via-rose-200 to-indigo-300 
          bg-clip-text text-transparent
          leading-[1.2] tracking-tight"
        >
          Syeda Gul Andam<br className="hidden sm:block" /> Ali Kazmi
        </motion.h2>

        {/* 🌸 SOFT DIVIDER - Tiny & Elegant */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="h-[2px] bg-gradient-to-r from-violet-300/50 via-rose-300/50 to-transparent rounded-full my-2"
        ></motion.div>

        {/* 📝 SUBTEXT - Soft & Flowing */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-gray-400 max-w-lg text-base md:text-lg 
          leading-relaxed font-light tracking-wide"
        >
          Frontend Developer crafting 
          <span className="text-rose-300/80"> modern, clean </span> 
          and 
          <span className="text-violet-300/80"> high-performance </span> 
          web experiences for global clients.
        </motion.p>

        {/* 🚀 SOFT BUTTONS - Gentle & Attractive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-3.5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/80 to-rose-500/80 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/80 to-violet-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-white font-medium text-base tracking-wide">
              ✨ View Work
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-full 
            bg-white/5 backdrop-blur-sm
            border border-white/15 
            hover:bg-white/10 hover:border-white/25
            transition-all duration-400 
            text-gray-300 font-medium text-base tracking-wide"
          >
            💌 Contact Me
          </motion.a>
        </motion.div>

        {/* 🌙 GENTLE FLOATING ORBS */}
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-violet-400/5 rounded-full blur-3xl -z-10"
          style={{ top: "10%", right: "-10%" }}
        />
        <motion.div
          animate={{ 
            y: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute w-40 h-40 bg-rose-400/5 rounded-full blur-3xl -z-10"
          style={{ bottom: "10%", left: "-15%" }}
        />

      </motion.div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(20px) translateX(-10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}