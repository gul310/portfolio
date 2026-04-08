import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#0a0a1a] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* ✨ SOFT BACKGROUND EFFECTS - Matching Hero */}
      <div className="absolute w-[500px] h-[500px] bg-violet-400/10 blur-[150px] top-[-200px] right-[-200px] rounded-full animate-float"></div>
      <div className="absolute w-[400px] h-[400px] bg-rose-300/10 blur-[150px] bottom-[-150px] left-[-150px] rounded-full animate-float-delayed"></div>
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

      <div className="max-w-xl mx-auto relative z-10">
        
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
              📬 Get in Touch 📬
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
            Contact Me
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
            Let's connect! Feel free to reach out for collaborations or just a chat.
          </motion.p>
        </motion.div>

        {/* CONTACT FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, amount: 0.2 }}
          className="group"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl 
            bg-white/5 backdrop-blur-2xl 
            border border-white/15 
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
            hover:shadow-[0_30px_80px_-20px_rgba(139,92,246,0.15)]
            hover:border-white/25
            transition-all duration-500"
          >
            
            <form className="flex flex-col gap-5 sm:gap-6">
              
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-gray-400 text-sm mb-2 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 sm:p-4 rounded-xl 
                  bg-white/5 backdrop-blur-sm 
                  border border-white/10 
                  focus:border-violet-400/50 
                  focus:outline-none 
                  focus:ring-2 focus:ring-violet-400/20
                  transition-all duration-300
                  text-white placeholder-gray-500"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-gray-400 text-sm mb-2 ml-1">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 sm:p-4 rounded-xl 
                  bg-white/5 backdrop-blur-sm 
                  border border-white/10 
                  focus:border-violet-400/50 
                  focus:outline-none 
                  focus:ring-2 focus:ring-violet-400/20
                  transition-all duration-300
                  text-white placeholder-gray-500"
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-gray-400 text-sm mb-2 ml-1">Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full p-3 sm:p-4 rounded-xl 
                  bg-white/5 backdrop-blur-sm 
                  border border-white/10 
                  focus:border-violet-400/50 
                  focus:outline-none 
                  focus:ring-2 focus:ring-violet-400/20
                  transition-all duration-300
                  text-white placeholder-gray-500
                  resize-none"
                />
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-2"
              >
                <motion.button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://wa.me/923485640635",
                      "_blank"
                    )
                  }
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full py-3 sm:py-4 rounded-full overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-emerald-500/80 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/80 to-green-500/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-white font-semibold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2">
                    💬 Chat on WhatsApp
                  </span>
                </motion.button>
              </motion.div>

            </form>

            {/* Decorative floating orb inside card */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-32 h-32 bg-green-400/5 rounded-full blur-2xl -z-10"
              style={{ bottom: "-20px", right: "-20px" }}
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
            <span>📧</span> syedagulandam@gmail.com 
            <span className="mx-2">•</span> 
            <span>📱</span> +92 348 5640635
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