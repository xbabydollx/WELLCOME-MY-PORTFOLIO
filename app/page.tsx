"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SpiderWebBg from "@/components/SpiderWebBg";

export default function Home() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    initial: { y: 120, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Re-design",
      category: "Web Development / UI/UX",
      size: "md:col-span-2 h-[400px]",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "3D Interactive Map",
      category: "WebGL / Next.js",
      size: "md:col-span-1 h-[400px]",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "AI Dashboard Platform",
      category: "SaaS / Frontend",
      size: "md:col-span-1 h-[500px]",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Creative Studio Portfolio",
      category: "Framer Motion / Design",
      size: "md:col-span-2 h-[500px]",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-[#090507] text-white w-full relative min-h-screen selection:bg-rose-500 selection:text-white overflow-x-hidden">
      
      <Navbar />
      
      {/* EFEK JARING LABA-LABA INTERAKTIF */}
      <SpiderWebBg /> 

      {/* AMBIENT AURORA GLOW EFFECT */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-900/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-fuchsia-900/10 blur-[150px] pointer-events-none z-0" />

      {/* 1. HERO SECTION */}
      <main className="min-h-screen w-full flex flex-col justify-center px-8 md:px-24 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col max-w-5xl z-10"
        >
          <div className="overflow-hidden mb-3">
            <motion.p variants={textVariants} className="text-rose-400/80 text-sm md:text-base font-mono uppercase tracking-[0.3em]">
              // Available for Freelance & Full-time
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.h1 variants={textVariants} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              CREATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-200 to-rose-400">
                FRONTEND DEV.
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden max-w-2xl mt-2">
            <motion.p variants={textVariants} className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
              Halo, saya <span className="text-white font-medium border-b border-rose-500/40 pb-1">Im.bydoll</span>. Saya membangun pengalaman web interaktif dengan harmoni visual yang memikat dan animasi presisi high.
            </motion.p>
          </div>

          <div className="overflow-hidden mt-12">
            <motion.div variants={textVariants}>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-4 border border-rose-500/30 bg-rose-950/10 hover:bg-rose-600 text-white transition-all duration-500 px-8 py-4 rounded-full text-sm tracking-widest uppercase font-semibold shadow-lg shadow-rose-950/20 hover:shadow-rose-600/30 group"
              >
                Lihat Karya Saya
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-12 right-12 hidden md:block font-mono text-xs tracking-widest text-rose-300/20">
          [ IM.BYDOLL // PORTFOLIO ©2026 ]
        </div>
      </main>

      {/* 2. PROJECTS SECTION */}
      <section id="projects" className="w-full min-h-screen px-8 md:px-24 py-32 border-t border-rose-950/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
            <div>
              <p className="text-rose-500/60 font-mono text-xs uppercase tracking-[0.25em] mb-3">// SELECTED WORKS</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Karya Pilihan</h2>
            </div>
            <p className="text-zinc-400 max-w-xs font-light text-sm md:text-base leading-relaxed">
              Eksperimen digital estetis yang mempertemukan baris kode bertenaga dengan keanggunan seni visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-2xl overflow-hidden bg-[#130b0f] border border-rose-950/30 flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 hover:border-rose-500/30 ${project.size}`}
              >
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-102 transition-all duration-700 ease-out grayscale hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090507] via-[#090507]/50 to-transparent opacity-100" />
                </div>

                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mt-4 pt-4 border-t border-rose-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-center translation-y-2 group-hover:translate-y-0">
                    <span className="text-[11px] font-mono text-rose-300 uppercase tracking-wider">Explore Project</span>
                    <span className="text-rose-400 text-lg">↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CONTACT / FOOTER SECTION (MODERN QR CODE SCANNER STYLE) */}
      <section id="contact" className="w-full bg-[#060304] px-8 md:px-24 py-28 border-t border-rose-950/20 relative z-10 overflow-hidden">
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-rose-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <div className="mb-12">
            <p className="text-rose-500/60 font-mono text-xs uppercase tracking-[0.25em] mb-3">// CONNECT WITH ME</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">Mari Bekerja Sama</h2>
            <p className="text-zinc-400 max-w-md mx-auto font-light text-sm md:text-base leading-relaxed">
              Pindai kode di bawah ini langsung menggunakan ponselmu untuk terhubung secara instan.
            </p>
          </div>

          {/* DISPLAY DUA QR CODE MELAYANG */}
          <div className="flex flex-col sm:flex-row gap-12 my-8 justify-center items-center w-full">
            
            {/* QR CODE WHATSAPP */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative p-6 bg-[#0d070b] border border-rose-950/40 rounded-2xl flex flex-col items-center backdrop-blur-sm"
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />

              <div className="w-48 h-48 bg-white rounded-xl overflow-hidden p-2 shadow-xl shadow-rose-950/20 transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="qr-wa.jpeg.jpeg" // <-- Sudah disamakan dengan file kamu
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-4 font-mono text-xs tracking-widest text-zinc-400 group-hover:text-rose-400 transition-colors">
                [ SCAN WHATSAPP ]
              </span>
            </motion.div>

            {/* QR CODE INSTAGRAM */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-6 bg-[#0d070b] border border-rose-950/40 rounded-2xl flex flex-col items-center backdrop-blur-sm"
            >
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-rose-500/40 group-hover:border-rose-500 transition-colors" />

              <div className="w-48 h-48 bg-white rounded-xl overflow-hidden p-2 shadow-xl shadow-rose-950/20 transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="qr-ig.jpeg.jpeg" // <-- Sudah disamakan dengan file kamu
                  alt="Instagram QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-4 font-mono text-xs tracking-widest text-zinc-400 group-hover:text-rose-400 transition-colors">
                [ SCAN INSTAGRAM ]
              </span>
            </motion.div>

          </div>

          {/* TAUTAN CADANGAN */}
          <div className="mt-12 text-zinc-500 text-xs font-mono max-w-xl">
            <p className="mb-4">Membuka lewat ponsel? Tautan langsung:</p>
            <div className="flex flex-wrap justify-center gap-6 text-zinc-400">
              <a 
                href="https://wa.me/6288225004758" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-colors border-b border-zinc-800 pb-1"
              >
                WHATSAPP DIRECT
              </a>
              <a 
                href="https://instagram.com/im.bydoll_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-rose-400 transition-colors border-b border-zinc-800 pb-1"
              >
                INSTAGRAM DIRECT
              </a>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 mt-24 border-t border-rose-950/30 gap-6 text-xs font-mono text-zinc-500">
            <div className="flex gap-8">
              <a href="https://github.com" target="_blank" className="hover:text-rose-400 transition-colors tracking-widest">GITHUB</a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-rose-400 transition-colors tracking-widest">LINKEDIN</a>
            </div>
            <p className="tracking-wider">© 2026 Fadli. Crafted with elegance.</p>
          </div>

        </div>
      </section>

    </div>
  );
}