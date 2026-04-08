import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "Frontend Development",
      issuer: "Cisco",
      date: "2024",
      icon: "🎨",
      description: "Modern Web Technologies"
    },
    {
      title: "React Specialist",
      issuer: "Cisco",
      date: "2024",
      icon: "⚛️",
      description: "Component-Based Development"
    },
    {
      title: "Web Design",
      issuer: "Cisco",
      date: "2023",
      icon: "💎",
      description: "UI/UX Design Principles"
    },
    {
      title: "JavaScript Advanced",
      issuer: "Cisco",
      date: "2023",
      icon: "🚀",
      description: "ES6+ Modern JavaScript"
    }
  ];

  return (
    <section id="certificates" className="min-h-screen bg-[#0a0a1a] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">

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

      <div className="max-w-6xl mx-auto relative z-10">
        
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
              🎓 Cisco Certified 🎓
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
            Certificates
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
            Professional certifications from Cisco Networking Academy
          </motion.p>
        </motion.div>

        {/* CERTIFICATES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="p-6 sm:p-7 md:p-8 rounded-2xl sm:rounded-3xl 
              bg-white/5 backdrop-blur-lg 
              border border-white/10 
              hover:border-white/20
              shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]
              hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.15)]
              transition-all duration-500
              text-center h-full
              flex flex-col items-center"
              >
                {/* Icon with animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="text-5xl sm:text-6xl mb-4 sm:mb-5"
                >
                  {cert.icon}
                </motion.div>

                {/* Certificate Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {cert.title}
                </h3>

                {/* Issuer with Cisco badge */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-cyan-400 text-sm font-medium">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm mb-2">
                  {cert.description}
                </p>

                {/* Date */}
                <p className="text-gray-500 text-xs">
                  {cert.date}
                </p>

                {/* Decorative line on hover */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "40px" }}
                  transition={{ duration: 0.3 }}
                  className="h-[1px] bg-gradient-to-r from-cyan-400/50 to-violet-400/50 rounded-full mt-3"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide">
            Cisco Networking Academy — Certified Professional 🌟
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