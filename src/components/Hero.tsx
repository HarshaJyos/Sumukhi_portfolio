"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail, Sparkles } from "lucide-react";

/* Small reusable sparkle SVG */
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
    </svg>
  );
}

function Lightning({ className = "" }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-end justify-center"
    >
      {/* Full-bleed hero photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Sumukhi"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
      </div>

      {/* Floating playful decorations */}
      <motion.div
        className="absolute top-[15%] left-[8%] z-10 text-yellow"
        animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Sparkle className="w-8 h-8 md:w-10 md:h-10" />
      </motion.div>

      <motion.div
        className="absolute top-[25%] right-[10%] z-10 text-pink"
        animate={{ y: [10, -10, 10], rotate: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkle className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      <motion.div
        className="absolute top-[10%] right-[25%] z-10 text-yellow hidden md:block"
        animate={{ y: [-8, 8, -8], rotate: [-5, 5, -5] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Lightning className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute bottom-[35%] left-[5%] z-10 text-lavender hidden md:block"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <Sparkle className="w-5 h-5" />
      </motion.div>

      {/* Small floating sticker shapes */}
      <motion.div
        className="absolute top-[40%] right-[6%] z-10 w-12 h-12 rounded-full border-3 border-pink/50 hidden md:block"
        animate={{ y: [-12, 12, -12] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] left-[20%] z-10 w-4 h-4 rounded-full bg-yellow hidden md:block"
        animate={{ scale: [0.8, 1.3, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Content overlay — name + CTA at bottom */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Label sticker */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: -3 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink text-white font-lilita text-sm md:text-base tracking-wider border-3 border-white/30 shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Hello, I&apos;m
          </motion.div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-lilita text-white tracking-tight leading-[0.9] mb-3">
            Sumu
            <span className="text-yellow">khi</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-body max-w-lg mb-8 leading-relaxed tracking-wide">
            A curious soul building delightful web experiences — one question at
            a time.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="mailto:balasumukhi29@gmail.com"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-playful"
            >
              <Mail className="w-4 h-4" />
              Let&apos;s Talk
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline-playful bg-white/10 text-white border-white/40 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              See My Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
