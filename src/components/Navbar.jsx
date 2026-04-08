import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full backdrop-blur-xl border-b transition-all duration-500 z-50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center
        ${scrolled 
          ? "bg-[#0a0a1a]/80 border-white/20 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]" 
          : "bg-white/5 border-white/10"
        }`}
    >
      {/* Logo with gradient and hover effect */}
      <motion.h1 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="text-lg sm:text-xl font-bold
        bg-gradient-to-r from-violet-300 via-rose-200 to-indigo-300 
        bg-clip-text text-transparent cursor-pointer"
      >
        <a href="/">Gul Andam</a>
      </motion.h1>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base">
        {[
          { name: "Projects", href: "#projects", icon: "💻" },
          { name: "Skills", href: "#skills", icon: "⚡" },
          { name: "Contact", href: "#contact", icon: "📬" }
        ].map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -2, scale: 1.05 }}
            className="relative group text-gray-300 hover:text-white transition-all duration-300 font-medium"
          >
            <span className="flex items-center gap-1">
              <span className="text-sm opacity-70 group-hover:opacity-100 transition">{item.icon}</span>
              {item.name}
            </span>
            {/* Underline animation */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button - Hamburger (Optional) */}
      <div className="md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="text-gray-300 hover:text-white focus:outline-none"
          id="mobile-menu-button"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu?.classList.toggle("hidden");
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        id="mobile-menu"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0, y: -20 }}
        className="hidden md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl 
        bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/10 shadow-xl z-40"
      >
        <div className="flex flex-col gap-3">
          {[
            { name: "Projects", href: "#projects", icon: "💻" },
            { name: "Skills", href: "#skills", icon: "⚡" },
            { name: "Contact", href: "#contact", icon: "📬" }
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.add("hidden");
              }}
            >
              <span>{item.icon}</span>
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}