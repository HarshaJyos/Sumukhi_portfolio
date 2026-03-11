"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-warm">01 / About</span>
          <h2 className="text-4xl md:text-5xl text-ink mt-3 mb-3">A Curious Mind</h2>
          <div className="wave-divider" />
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card p-8 md:p-10"
          >
            <p className="text-lg md:text-xl text-ink/70 leading-[1.8] tracking-wide">
              I approach building software the way a curious child explores — wondering how things work, questioning why they exist the way they do, and genuinely enjoying the process of figuring it all out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-8 md:p-10"
          >
            <p className="text-lg md:text-xl text-ink/70 leading-[1.8] tracking-wide">
              When I hit a roadblock, I don&apos;t stop. I give my 100% to crack it. It might take a moment, but once the puzzle clicks, I move fast and deliver with care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card-dark p-8 md:p-10"
          >
            <p className="text-lg md:text-xl text-white/75 leading-[1.8] tracking-wide">
              For me, technology is not just about the code — it&apos;s about crafting experiences that feel alive, peaceful, and genuinely joyful to use.
            </p>
            <div className="flex items-center gap-2 mt-6 text-warm-light text-sm tracking-widest">
              <Heart className="w-4 h-4 text-coral" fill="currentColor" />
              Explorer at heart, builder by passion
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
