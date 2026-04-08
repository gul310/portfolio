import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a1a] text-white py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* ✨ SOFT BACKGROUND EFFECTS - Matching Hero */}
      <div className="absolute w-[600px] h-[600px] bg-violet-400/10 blur-[150px] top-[-200px] right-[-200px] rounded-full animate-float"></div>
      <div className="absolute w-[500px] h-[500px] bg-rose-300/10 blur-[150px] bottom-[-150px] left-[-150px] rounded-full animate-float-delayed"></div>
      
      {/* ✨ SOFT SPARKLES */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, repeatDelay: Math.random() * 3 }}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">

        {/* LEFT SIDE - About Me Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          {/* ✨ Small Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <span className="text-sm text-gray-300 tracking-wide">
              ✨ Get to know me ✨
            </span>
          </motion.div>

          {/* 👤 Title with gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold
            bg-gradient-to-r from-violet-300 via-rose-200 to-indigo-300 
            bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          {/* Soft divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-gradient-to-r from-violet-300/50 to-transparent rounded-full"
          ></motion.div>

          {/* Description text with animated words */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed tracking-wide"
          >
            I build 
            <span className="text-violet-300/80"> modern, responsive </span> 
            and 
            <span className="text-rose-300/80"> interactive web applications </span> 
            using React. I also have experience in backend technologies and databases.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-2 items-center"
          >
            <div className="w-8 h-[1px] bg-violet-400/30"></div>
            <span className="text-xs text-gray-500 tracking-wider">PASSIONATE DEVELOPER</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-violet-400/30 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Glass Card with Skills */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.3 }}
          className="group"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="p-8 md:p-10 rounded-3xl 
            bg-white/5 backdrop-blur-2xl 
            border border-white/15 
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
            hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.2)]
            hover:border-white/25
            transition-all duration-500"
          >
            {/* Card Title */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-white/80 mb-6 text-center"
            >
              💎 Skills & Expertise
            </motion.h3>

            {/* Skills List with animations */}
            <ul className="space-y-4">
              {[
                { icon: "🎨", text: "Frontend Developer", color: "from-violet-400/20" },
                { icon: "⚛️", text: "React Specialist", color: "from-cyan-400/20" },
                { icon: "🚀", text: "Full Stack Experience", color: "from-rose-400/20" },
                { icon: "📚", text: "CS Tutor", color: "from-indigo-400/20" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className={`flex items-center gap-4 p-3 rounded-xl 
                  bg-gradient-to-r ${item.color} to-transparent
                  hover:bg-white/10 transition-all duration-300 cursor-pointer`}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-200 font-medium">{item.text}</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-xs text-violet-400 ml-auto"
                  >
                    →
                  </motion.span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative floating orb inside card */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-24 h-24 bg-violet-400/5 rounded-full blur-2xl -z-10"
              style={{ bottom: "-20px", right: "-20px" }}
            />
          </motion.div>
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