import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";

export default function Page() {
  return (
    <main className="relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-ink/[0.06]">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-3xl md:text-4xl text-ink mb-3">
            Let&apos;s build something
            <span className="text-warm"> wonderful</span>
          </p>
          <p className="text-base text-ink/40 tracking-wider mb-10 max-w-md mx-auto">
            Open to new opportunities and collaborations. Drop me a line!
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="mailto:balasumukhi29@gmail.com" className="btn-primary">
              <Mail className="w-4 h-4" /> balasumukhi29@gmail.com
            </a>
            <a href="tel:+916301608287" className="btn-outline">
              <Phone className="w-4 h-4" /> +91-630-160-8287
            </a>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.linkedin.com/in/kalimireddy-bala-sumukhi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/30 hover:text-[#0a66c2] hover:border-[#0a66c2]/30 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/sumukhi23" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/30 hover:text-ink hover:border-ink/30 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase text-ink/25">
            Crafted with <Heart className="w-3 h-3 text-coral/50" fill="currentColor" /> by Sumukhi
          </div>
        </div>
      </footer>
    </main>
  );
}
