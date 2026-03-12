"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Menu, X } from "lucide-react";

export default function Navbar() {
  const sections = ["About", "Skills", "Experience", "Projects", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY && y > 200);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-xl border-b-3 border-ink shadow-[0_4px_0_0_var(--color-ink)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-lilita tracking-wider text-ink hover:text-pink transition-colors relative group"
          >
            Sumukhi
            <span className="text-pink">.</span>
            <span className="absolute -top-1 -right-3 w-2 h-2 rounded-full bg-yellow group-hover:scale-150 transition-transform" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-5">
              {sections.map((s) => (
                <li key={s}>
                  <a
                    href={`#${s.toLowerCase()}`}
                    className="text-sm font-bold tracking-wider text-ink/70 hover:text-pink transition-colors uppercase relative group py-1"
                  >
                    {s}
                    <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-pink rounded-full group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 ml-2 border-l-3 border-ink/10 pl-4">
              <a
                href="mailto:balasumukhi29@gmail.com"
                className="w-9 h-9 rounded-xl bg-pink/10 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition-all hover:scale-110 hover:rotate-6"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kalimireddy-bala-sumukhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all hover:scale-110 hover:-rotate-6"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sumukhi23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-ink/5 flex items-center justify-center text-ink/60 hover:bg-ink hover:text-cream transition-all hover:scale-110 hover:rotate-6"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl border-2 border-ink flex items-center justify-center hover:bg-pink hover:text-white hover:border-pink transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {sections.map((s, i) => (
              <motion.a
                key={s}
                href={`#${s.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-lilita text-ink hover:text-pink transition-colors tracking-wide"
              >
                {s}
              </motion.a>
            ))}
            <div className="flex gap-4 mt-6">
              <a href="mailto:balasumukhi29@gmail.com" className="w-12 h-12 rounded-2xl bg-pink/10 border-2 border-pink flex items-center justify-center text-pink hover:bg-pink hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/kalimireddy-bala-sumukhi/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-navy/10 border-2 border-navy flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/sumukhi23" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-ink/5 border-2 border-ink flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
