"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Navbar() {
  const sections = ["About", "Experience", "Projects"];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-ink/5"
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-lg tracking-wider text-ink hover:text-warm transition-colors">
          S.
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex items-center gap-6">
            {sections.map((s) => (
              <li key={s}>
                <a
                  href={`#${s.toLowerCase()}`}
                  className="text-sm tracking-wider text-ink/60 hover:text-ink transition-colors uppercase"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-ink/10 pl-6">
            <a href="mailto:balasumukhi29@gmail.com" className="text-ink/40 hover:text-warm transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/kalimireddy-bala-sumukhi/" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-[#0a66c2] transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/sumukhi23" target="_blank" rel="noopener noreferrer" className="text-ink/40 hover:text-ink transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
