import { motion } from "framer-motion";

export default function Teaching() {
  return (
    <section
      id="teaching"
      className="min-h-screen bg-[#0a0a1a] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden"
    >

      {/* ✨ SOFT BACKGROUND EFFECTS - Matching Hero */}
      <div className="absolute w-[500px] h-[500px] bg-violet-400/10 blur-[150px] top-[-200px] left-[-200px] rounded-full animate-float"></div>
      <div className="absolute w-[400px] h-[400px] bg-rose-300/10 blur-[150px] bottom-[-150px] right-[-150px] rounded-full animate-float-delayed"></div>
      <div className="absolute w-[300px] h-[300px] bg-indigo-400/8 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      
      {/* ✨ SOFT SPARKLES */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, repeatDelay: Math.random() * 3 }}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
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
              📚 Education & Mentorship 📚
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
            Teaching & Mentorship
          </motion.h2>

          {/* Soft divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-violet-300/50 via-rose-300/50 to-transparent rounded-full mx-auto"
          ></motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed"
          >
            I provide Computer Science tutoring from school to university level.
            Learn programming, web development, and core CS concepts with practical
            examples and personalized guidance.
          </motion.p>
        </motion.div>

        {/* Teaching Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          
          {/* School Level Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl 
            bg-white/5 backdrop-blur-lg 
            border border-white/10 
            hover:border-violet-500/30 
            hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)]
            transition-all duration-500
            text-center h-full"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl mb-4"
              >
                🎒
              </motion.div>
              
              <h3 className="text-lg sm:text-xl font-semibold 
              bg-gradient-to-r from-purple-400 to-pink-400 
              bg-clip-text text-transparent mb-3">
                School Level
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Basics, HTML, CSS, JavaScript, Computer Studies
              </p>

              {/* Decorative line on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "40px" }}
                transition={{ duration: 0.3 }}
                className="h-[1px] bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full mx-auto mt-4"
              />
            </div>
          </motion.div>

          {/* University Level Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl 
            bg-white/5 backdrop-blur-lg 
            border border-white/10 
            hover:border-violet-500/30 
            hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)]
            transition-all duration-500
            text-center h-full"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl mb-4"
              >
                🎓
              </motion.div>
              
              <h3 className="text-lg sm:text-xl font-semibold 
              bg-gradient-to-r from-purple-400 to-pink-400 
              bg-clip-text text-transparent mb-3">
                University Level
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Programming, OOP, Database, Web Development
              </p>

              {/* Decorative line on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "40px" }}
                transition={{ duration: 0.3 }}
                className="h-[1px] bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full mx-auto mt-4"
              />
            </div>
          </motion.div>

          {/* Special Course Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group"
          >
            <div className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl 
            bg-white/5 backdrop-blur-lg 
            border border-white/10 
            hover:border-violet-500/30 
            hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)]
            transition-all duration-500
            text-center h-full"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl mb-4"
              >
                💻
              </motion.div>
              
              <h3 className="text-lg sm:text-xl font-semibold 
              bg-gradient-to-r from-purple-400 to-pink-400 
              bg-clip-text text-transparent mb-3">
                Web Development Course
              </h3>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                HTML → CSS → JS → React with real projects
              </p>

              {/* Decorative line on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "40px" }}
                transition={{ duration: 0.3 }}
                className="h-[1px] bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full mx-auto mt-4"
              />
            </div>
          </motion.div>

        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://wa.me/923485640635"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-emerald-500/80 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/80 to-green-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-white font-semibold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2">
              💬 Book Free Demo Class
            </span>
          </motion.a>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2">
            <span>⭐</span> 50+ Students Mentored 
            <span className="mx-2">•</span> 
            <span>📚</span> 1000+ Hours of Teaching
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