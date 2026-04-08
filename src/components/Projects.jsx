import { motion } from "framer-motion";

const projects = [
  {
    title: "HEC Attendance",
    link: "https://gul310.github.io/hec-attendance-wizard/",
    desc: "Smart attendance management system",
    icon: "📊",
    tech: "React • Firebase"
  },
  {
    title: "Book Store",
    link: "https://gul310.github.io/online-book-store/",
    desc: "Modern online bookstore UI",
    icon: "📚",
    tech: "React • Tailwind"
  },
  {
    title: "Blog Verse",
    link: "https://gul310.github.io/protype-of-project/",
    desc: "Clean blogging platform design",
    icon: "✍️",
    tech: "HTML • CSS • JS"
  },
  {
    title: "Celebration",
    link: "https://gul310.github.io/celebration-symphony/",
    desc: "Event & celebration website",
    icon: "🎉",
    tech: "React • Framer Motion"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a1a] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden"
    >

      {/* ✨ SOFT BACKGROUND EFFECTS - Matching Hero */}
      <div className="absolute w-[500px] h-[500px] bg-violet-400/10 blur-[150px] top-[-200px] right-[-200px] rounded-full animate-float"></div>
      <div className="absolute w-[400px] h-[400px] bg-rose-300/10 blur-[150px] bottom-[-150px] left-[-150px] rounded-full animate-float-delayed"></div>
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

      <div className="relative max-w-6xl mx-auto z-10">

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
              💻 Featured Work 💻
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
            My Projects
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
            className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base"
          >
            Here are some of my recent projects. Each one is built with passion and attention to detail.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group block"
            >
              <div className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl 
              bg-white/5 backdrop-blur-lg 
              border border-white/10 
              hover:border-violet-500/30 
              hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.2)]
              transition-all duration-500
              h-full"
              >
                {/* Icon and Title Row */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl">{project.icon}</span>
                    <h3 className="text-lg sm:text-xl font-semibold 
                    bg-gradient-to-r from-purple-400 to-pink-400 
                    bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                  </div>
                  {/* Arrow Icon on Hover */}
                  <motion.span
                    initial={{ x: 0, opacity: 0 }}
                    whileHover={{ x: 5, opacity: 1 }}
                    className="text-gray-400 text-xl"
                  >
                    →
                  </motion.span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-3 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">🛠️</span>
                  <span className="text-xs text-gray-500">{project.tech}</span>
                </div>

                {/* Decorative line on hover */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "50px" }}
                  transition={{ duration: 0.3 }}
                  className="h-[1px] bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full mt-4"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="https://github.com/gul310"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
            bg-white/5 backdrop-blur-sm 
            border border-white/15 
            hover:bg-white/10 hover:border-white/25
            transition-all duration-400 
            text-gray-300 font-medium text-sm sm:text-base"
          >
            <span>🐙</span>
            View All on GitHub
            <span>→</span>
          </motion.a>
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