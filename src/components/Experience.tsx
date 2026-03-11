"use client";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-warm">02 / Experience & Education</span>
          <h2 className="text-4xl md:text-5xl text-ink mt-3 mb-3">My Journey</h2>
          <div className="wave-divider" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Experience — 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 md:p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl text-ink mb-1">Web Developer</h3>
                  <p className="text-base text-ink/45 tracking-wide">Starfetch Innovations</p>
                </div>
                <span className="tag shrink-0 mt-1">2024</span>
              </div>

              <ul className="space-y-4 text-base md:text-lg text-ink/60 leading-[1.7] tracking-wide">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm mt-3 shrink-0" />
                  Built an LMS for 500+ users with Next.js, Node.js, and MongoDB with Razorpay payments
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm mt-3 shrink-0" />
                  Cut CPU load by 40% and API response from 500ms → 150ms via Redis caching
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm mt-3 shrink-0" />
                  Architected secure REST APIs supporting 5,000+ concurrent users at 99.9% uptime
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 md:p-10"
            >
              <h3 className="text-xl text-ink mb-1">Technical Writing</h3>
              <p className="text-base text-ink/45 tracking-wide mb-4">GeeksforGeeks Contributor</p>
              <p className="text-base md:text-lg text-ink/60 leading-[1.7] tracking-wide mb-4">
                Authored articles on R programming, contributing to organic traffic growth and reader engagement across the platform.
              </p>
              <a
                href="https://www.geeksforgeeks.org/user/balasumx89d/contributions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-warm hover:text-warm-deep transition-colors tracking-wider"
              >
                View contributions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Education + Skills — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-dark p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-warm/25" style={{ animation: "rotate-slow 20s linear infinite" }}>
                <Star className="w-8 h-8" fill="currentColor" />
              </div>

              <h3 className="text-2xl text-white mb-1">B.Tech in CS</h3>
              <p className="text-warm-light text-base mb-1 tracking-wide">Data Science</p>
              <p className="text-white/45 text-sm tracking-wider mb-6">Aditya University · 2022–2026</p>
              
              <div className="bg-white/[0.08] rounded-xl px-4 py-3 border border-white/[0.06] inline-flex items-center gap-2">
                <Star className="w-4 h-4 text-warm" fill="currentColor" />
                <span className="text-warm-light tracking-wider">GPA 7.0 / 10.0</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <h3 className="text-xl text-ink mb-5">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "TypeScript", "Python", "MongoDB", "PostgreSQL", "Redis", "Docker", "Azure", "REST APIs", "Git"].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="tag cursor-default hover:bg-warm/10 hover:text-warm-deep hover:border-warm/20 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="card p-8"
            >
              <h3 className="text-xl text-ink mb-5">Certifications</h3>
              <ul className="space-y-3 text-base text-ink/55 leading-[1.6] tracking-wide">
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2.5 shrink-0" />
                  Java Fundamentals — edX (Top 10%)
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm mt-2.5 shrink-0" />
                  Python Programming — edX (95%)
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy mt-2.5 shrink-0" />
                  Python Proficiency — HackerRank (95th%)
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
