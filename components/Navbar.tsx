"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika halaman di-scroll lebih dari 20px, navbar akan sedikit mengecil/berubah background
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Karya", href: "#projects" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-6 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO INI */}
        <a href="#" className="text-xl font-black tracking-tighter text-white group relative">
          FADLI<span className="text-rose-500">.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* MENU NAVIGASI MELAYANG */}
        <nav className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-500 ${
          scrolled 
            ? "bg-[#090507]/60 backdrop-blur-md border-rose-950/40 shadow-lg shadow-rose-950/10" 
            : "bg-transparent border-transparent"
        }`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-xs md:text-sm font-mono tracking-widest text-zinc-400 hover:text-white uppercase rounded-full transition-colors relative group"
            >
              {item.name}
              {/* Efek Garis Bawah saat Hover */}
              <span className="absolute bottom-1 left-4 right-4 h-[1px] bg-rose-500 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
            </a>
          ))}
        </nav>

        {/* TOMBOL CALL TO ACTION (CTA) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-xs font-mono tracking-wider uppercase border border-rose-500/30 bg-rose-950/10 hover:bg-rose-600 text-white transition-all duration-300 px-5 py-2.5 rounded-full"
          >
            Let's Talk
          </a>
        </div>

      </div>
    </motion.header>
  );
}