"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender/20 text-navy font-lilita text-sm tracking-widest uppercase mb-4 border-2 border-lavender/30"
          >
            <Briefcase className="w-4 h-4" />
            My journey so far
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-lilita text-ink">
            Exper<span className="text-pink">ience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main experience — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {/* Web Developer */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0 }}
              className="card-playful p-8 md:p-10"
            >
              <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink rounded-xl flex items-center justify-center border-2 border-ink/10 shadow-[3px_3px_0_0_var(--color-ink)]">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-ink font-lilita">
                      Web Developer
                    </h3>
                    <p className="text-sm text-ink/50 font-bold tracking-wide">
                      Starfetch Innovations
                    </p>
                  </div>
                </div>
                <span className="tag-playful">Jun — Jul 2024</span>
              </div>

              <ul className="space-y-3 text-base md:text-lg text-ink/65 leading-[1.7] font-body">
                <li className="flex gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink mt-2 shrink-0" />
                  Built an LMS for 500+ users with Next.js, Node.js, and
                  MongoDB with Razorpay payment processing
                </li>
                <li className="flex gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow mt-2 shrink-0" />
                  Cut CPU load by 40% and API response from 500ms to 150ms via
                  Redis caching
                </li>
                <li className="flex gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-lavender mt-2 shrink-0" />
                  Architected secure REST APIs supporting 5,000+ concurrent
                  users at 99.9% uptime
                </li>
                <li className="flex gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-warm mt-2 shrink-0" />
                  Increased customer acquisition by 15% through a reliable,
                  zero-downtime platform
                </li>
              </ul>

              <a
                href="https://github.com/sumukhi23/Learning-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm text-pink font-bold hover:text-yellow transition-colors tracking-wider"
              >
                <Github className="w-4 h-4" /> View Source Code
              </a>
            </motion.div>

            {/* Technical Writing */}
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0, rotate: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0 }}
              className="card-pink p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-yellow rounded-xl flex items-center justify-center border-2 border-ink/10">
                  <BookOpen className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <h3 className="text-xl text-ink font-lilita">
                    Technical Writing
                  </h3>
                  <p className="text-sm text-ink/50 font-bold tracking-wide">
                    GeeksforGeeks Contributor
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg text-ink/60 leading-[1.7] font-body mb-4">
                Authored articles on R programming, contributing to organic
                traffic growth. Publications earned 30,000+ views and 10,000+
                engagements across the platform.
              </p>
              <a
                href="https://www.geeksforgeeks.org/user/balasumx89d/contributions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-pink font-bold hover:text-yellow transition-colors tracking-wider"
              >
                View contributions <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right column — Education + Certs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0 }}
              className="card-navy p-8 relative overflow-hidden"
            >
              <motion.div
                className="absolute -top-2 -right-2 text-yellow/20"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
              >
                <Star className="w-16 h-16" fill="currentColor" />
              </motion.div>

              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center border-2 border-white/20 shadow-[3px_3px_0_0_rgba(255,255,255,0.1)]">
                  <GraduationCap className="w-6 h-6 text-ink" />
                </div>
                <div>
                  <h3 className="text-2xl text-white font-lilita">
                    B.Tech in CS
                  </h3>
                  <p className="text-yellow text-sm font-bold tracking-wide">
                    Data Science
                  </p>
                </div>
              </div>

              <p className="text-white/50 text-sm font-bold tracking-wider mb-4 relative z-10">
                Aditya University &middot; 2022 &ndash; 2026
              </p>

              <div className="relative z-10 bg-white/10 rounded-xl px-4 py-3 border-2 border-white/10 inline-flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow" fill="currentColor" />
                <span className="text-yellow font-lilita tracking-wider">
                  GPA 7.0 / 10.0
                </span>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: -1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0 }}
              className="card-playful p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-lavender rounded-xl flex items-center justify-center border-2 border-ink/10">
                  <Award className="w-5 h-5 text-ink" />
                </div>
                <h3 className="text-xl text-ink font-lilita">Certifications</h3>
              </div>

              <ul className="space-y-4">
                {[
                  {
                    name: "Java Fundamentals",
                    org: "edX",
                    badge: "Top 10%",
                    color: "bg-pink",
                  },
                  {
                    name: "Python Programming",
                    org: "edX",
                    badge: "95%",
                    color: "bg-yellow",
                  },
                  {
                    name: "Python Proficiency",
                    org: "HackerRank",
                    badge: "95th%",
                    color: "bg-lavender",
                  },
                ].map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3">
                    <span
                      className={`w-3 h-3 rounded-full ${cert.color} mt-1.5 shrink-0 border border-ink/10`}
                    />
                    <div>
                      <p className="text-base text-ink font-bold">
                        {cert.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-ink/50 font-medium">
                          {cert.org}
                        </span>
                        <span className="tag-playful text-[0.65rem] py-0.5 px-2">
                          {cert.badge}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fun fact sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-yellow p-6 rounded-2xl border-3 border-ink shadow-[5px_5px_0_0_var(--color-ink)] text-center"
            >
              <Sparkles className="w-6 h-6 text-pink mx-auto mb-2" />
              <p className="font-lilita text-ink text-lg">
                &ldquo;I believe in giving my 100% — always!&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
