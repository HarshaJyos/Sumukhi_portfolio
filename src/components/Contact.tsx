"use client";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Heart,
  Sparkles,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow/20 text-warm-deep font-lilita text-sm tracking-widest uppercase mb-4 border-2 border-yellow/30"
          >
            <Send className="w-4 h-4" />
            Say hello
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-lilita text-ink mb-4">
            Let&apos;s <span className="text-pink">Connect</span>
          </h2>
          <p className="text-lg text-ink/50 font-body max-w-md mx-auto leading-relaxed">
            Open to new opportunities and collaborations. Drop me a line — I
            promise I&apos;m friendly!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <motion.a
            href="mailto:balasumukhi29@gmail.com"
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="card-playful p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-pink rounded-xl flex items-center justify-center border-2 border-ink/10 shadow-[3px_3px_0_0_var(--color-ink)] group-hover:shadow-[3px_3px_0_0_var(--color-pink)] transition-all">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-lilita text-ink text-sm tracking-wider">
                Email
              </p>
              <p className="text-ink/60 text-sm font-body">
                balasumukhi29@gmail.com
              </p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+916301608287"
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="card-playful p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center border-2 border-ink/10 shadow-[3px_3px_0_0_var(--color-ink)] group-hover:shadow-[3px_3px_0_0_var(--color-yellow)] transition-all">
              <Phone className="w-6 h-6 text-ink" />
            </div>
            <div>
              <p className="font-lilita text-ink text-sm tracking-wider">
                Phone
              </p>
              <p className="text-ink/60 text-sm font-body">+91-630-160-8287</p>
            </div>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kalimireddy-bala-sumukhi/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="card-playful p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center border-2 border-ink/10 shadow-[3px_3px_0_0_var(--color-ink)] group-hover:shadow-[3px_3px_0_0_var(--color-navy)] transition-all">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-lilita text-ink text-sm tracking-wider">
                LinkedIn
              </p>
              <p className="text-ink/60 text-sm font-body">Kalimireddy Bala Sumukhi</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/sumukhi23"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="card-playful p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-ink rounded-xl flex items-center justify-center border-2 border-ink/10 shadow-[3px_3px_0_0_var(--color-pink)] group-hover:shadow-[3px_3px_0_0_var(--color-yellow)] transition-all">
              <Github className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-lilita text-ink text-sm tracking-wider">
                GitHub
              </p>
              <p className="text-ink/60 text-sm font-body">sumukhi23</p>
            </div>
          </motion.a>
        </div>

        {/* Location sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.05 }}
          className="bg-lavender-light p-5 rounded-2xl border-3 border-lavender shadow-[4px_4px_0_0_var(--color-lavender)] text-center max-w-xs mx-auto"
        >
          <MapPin className="w-6 h-6 text-pink mx-auto mb-2" />
          <p className="font-lilita text-ink text-base tracking-wider">
            Rajahmundry, India
          </p>
          <p className="text-sm text-ink/50 font-body mt-1">
            Open to remote opportunities worldwide
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t-3 border-ink/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 font-lilita text-sm tracking-[0.15em] text-ink/30"
        >
          Crafted with{" "}
          <Heart className="w-4 h-4 text-pink" fill="currentColor" /> and{" "}
          <Sparkles className="w-4 h-4 text-yellow" /> by Sumukhi
        </motion.div>
      </div>
    </section>
  );
}
