"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Zap,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "bg-pink",
    borderColor: "border-pink",
    shadowColor: "shadow-pink/20",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "SQL"],
  },
  {
    title: "Frameworks",
    icon: Zap,
    color: "bg-yellow",
    borderColor: "border-yellow",
    shadowColor: "shadow-yellow/20",
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "Flask", "Redux"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "bg-lavender",
    borderColor: "border-lavender",
    shadowColor: "shadow-lavender/20",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "bg-warm",
    borderColor: "border-warm",
    shadowColor: "shadow-warm/20",
    skills: ["Git", "Docker", "Azure", "Cloudinary", "Razorpay"],
  },
  {
    title: "Specializations",
    icon: Cloud,
    color: "bg-navy",
    borderColor: "border-navy",
    shadowColor: "shadow-navy/20",
    skills: ["REST APIs", "AI Integration", "Performance", "Scalability"],
  },
];

const skillColors = [
  "bg-pink/15 text-pink border-pink/30",
  "bg-yellow/20 text-ink border-yellow/40",
  "bg-lavender/20 text-navy border-lavender/40",
  "bg-warm/15 text-warm-deep border-warm/30",
  "bg-pink-light/20 text-pink border-pink-light/40",
  "bg-yellow-light/30 text-ink border-yellow/30",
  "bg-navy/10 text-navy border-navy/20",
  "bg-coral/15 text-coral border-coral/30",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ scale: 0, rotate: 10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow/20 text-warm-deep font-lilita text-sm tracking-widest uppercase mb-4 border-2 border-yellow/30"
          >
            <Sparkles className="w-4 h-4" />
            What I work with
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-lilita text-ink">
            My <span className="text-yellow">Skills</span>
          </h2>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="card-playful p-6 md:p-8"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 ${cat.color} rounded-xl flex items-center justify-center border-2 border-ink/10`}
                >
                  <cat.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-lilita text-ink">{cat.title}</h3>
              </div>

              {/* Skills as sticker badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.1,
                      rotate: si % 2 === 0 ? -5 : 5,
                    }}
                    className={`px-3 py-1.5 rounded-full font-bold text-xs tracking-wider border-2 cursor-default ${
                      skillColors[si % skillColors.length]
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
