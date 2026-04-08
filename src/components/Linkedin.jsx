// 📁 components/Linkedin.jsx
import { motion } from "framer-motion";

export default function Linkedin() {
  return (
    <section id="linkedin" className="min-h-screen bg-[#0a0a1a] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* ✨ SOFT BACKGROUND EFFECTS */}
      <div className="absolute w-[500px] h-[500px] bg-violet-400/10 blur-[150px] top-[-200px] left-[-200px] rounded-full animate-float"></div>
      <div className="absolute w-[400px] h-[400px] bg-rose-300/10 blur-[150px] bottom-[-150px] right-[-150px] rounded-full animate-float-delayed"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-400/8 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      
      {/* ✨ SOFT SPARKLES */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, repeatDelay: Math.random() * 3 }}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10 sm:mb-12 md:mb-14"
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"
          >
            <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wide">
              🔗 Professional Network 🔗
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold
            bg-gradient-to-r from-violet-300 via-rose-200 to-indigo-300 
            bg-clip-text text-transparent mb-4"
          >
            LinkedIn
          </motion.h2>

          {/* Soft divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-violet-300/50 via-rose-300/50 to-transparent rounded-full mx-auto"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md mx-auto mt-4 text-sm sm:text-base"
          >
            Connect with me professionally on LinkedIn.
          </motion.p>
        </motion.div>

        {/* LINKEDIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.2 }}
          className="group"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 md:p-12 rounded-3xl 
            bg-white/5 backdrop-blur-2xl 
            border border-white/15 
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
            hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.2)]
            hover:border-white/25
            transition-all duration-500
            text-center"
          >
            
            {/* REAL LINKEDIN ICON with animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <svg 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-white hover:text-[#0077b5] transition-colors duration-300"
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.203 0 22.225 0z"/>
              </svg>
            </motion.div>

            {/* LinkedIn Stats Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-6"
            >
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm text-gray-300">
                👥 500+ Connections
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm text-gray-300">
                💼 Frontend Developer
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm text-gray-300">
                🌟 Open to Work
              </span>
            </motion.div>

            {/* LinkedIn Username */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#0077b5]/20 to-[#00a0dc]/20 text-[#0077b5] text-sm font-mono">
                Syeda Gul Andam Ali Kazmi
              </span>
            </motion.div>

            {/* LinkedIn Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.linkedin.com/in/syeda-gul-andam-ali-kazmi-bbb41a3a1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0077b5] to-[#00a0dc] rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a0dc] to-[#0077b5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-white font-semibold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.203 0 22.225 0z"/>
                  </svg>
                  Connect on LinkedIn
                </span>
              </motion.a>
            </motion.div>

            {/* LinkedIn Stats Line */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-6 pt-4 border-t border-white/10"
            >
              <p className="text-gray-500 text-xs sm:text-sm">
                🤝 Let's grow our professional network together
              </p>
            </motion.div>

            {/* Decorative floating orb inside card */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-40 h-40 bg-[#0077b5]/5 rounded-full blur-2xl -z-10"
              style={{ bottom: "-30px", left: "-30px" }}
            />

          </motion.div>
        </motion.div>

        {/* BOTTOM DECORATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2">
            <span>🔗</span> linkedin.com/in/syeda-gul-andam-ali-kazmi
            <span className="mx-2">•</span> 
            <span>💼</span> Available for opportunities
          </p>
        </motion.div>

      </div>

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