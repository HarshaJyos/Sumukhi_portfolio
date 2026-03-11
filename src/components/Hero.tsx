"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-14 relative overflow-hidden">
      
      {/* Soft background gradient blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-warm/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-navy/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        
        {/* Left — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-warm/10 text-warm text-sm tracking-widest uppercase mb-6 border border-warm/20">
            Hello, I&apos;m
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-ink mb-4 leading-[0.95]">
            Sumu
            <span className="text-warm">khi</span>
          </h1>

          <p className="text-xl md:text-2xl text-ink/60 mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
            Full-Stack Developer building delightful web experiences with curiosity and craft.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
            <a href="mailto:balasumukhi29@gmail.com" className="btn-primary">
              <Mail className="w-4 h-4" /> Let&apos;s Talk
            </a>
            <a href="tel:+916301608287" className="btn-outline">
              <Phone className="w-4 h-4" /> +91-630-160-8287
            </a>
          </div>

          <div className="flex items-center gap-5 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/kalimireddy-bala-sumukhi/" target="_blank" rel="noopener noreferrer" className="text-ink/25 hover:text-[#0a66c2] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sumukhi23" target="_blank" rel="noopener noreferrer" className="text-ink/25 hover:text-ink transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 m-auto w-[290px] h-[370px] md:w-[320px] md:h-[400px] rounded-[2.5rem] border-2 border-warm/20 rotate-3" style={{ animation: "float-up 6s ease-in-out infinite" }} />
          
          <div className="relative w-[270px] h-[350px] md:w-[300px] md:h-[380px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] border-4 border-white group">
            <Image src="/hero.png" alt="Sumukhi" fill className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
          </div>

          {/* Small accents */}
          <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-xl bg-warm rotate-12 shadow-lg" style={{ animation: "float-up 4s ease-in-out 1s infinite" }} />
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-coral/60 shadow-md" style={{ animation: "float-down 5s ease-in-out infinite" }} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
