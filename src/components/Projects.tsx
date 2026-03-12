"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    title: "Learning Management System",
    subtitle: "Full-Stack Platform",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Cloudinary"],
    description:
      "A complete LMS with 70% faster response via Redis caching. Serves 500+ active users with Razorpay payments and Cloudinary media delivery.",
    link: "https://github.com/sumukhi23/Learning-Management-System",
    isGithub: true,
    accent: "bg-pink",
    borderColor: "border-pink",
    numColor: "text-pink",
  },
  {
    num: "02",
    title: "Content Management System",
    subtitle: "Publishing Platform",
    tech: ["React.js", "Node.js", "PostgreSQL", "Lexical.js", "Azure"],
    description:
      "A CMS boosting publishing speed by 40% with custom rich-text editor plugins. Azure CI/CD pipeline achieving 99.95% uptime.",
    link: "https://coreblock.in",
    isGithub: false,
    accent: "bg-yellow",
    borderColor: "border-yellow",
    numColor: "text-yellow",
  },
  {
    num: "03",
    title: "Recipe Maker API",
    subtitle: "Hardware Integration",
    tech: ["Node.js", "Express", "TypeScript", "REST APIs"],
    description:
      "RESTful API converting recipe inputs to machine-compatible JSON format with real-time webhooks and comprehensive documentation.",
    link: "https://drag-and-drop-recipe-builder.vercel.app",
    isGithub: false,
    accent: "bg-lavender",
    borderColor: "border-lavender",
    numColor: "text-lavender",
  },
  {
    num: "04",
    title: "CMS Documentation",
    subtitle: "Technical Writing",
    tech: ["React.js", "Node.js", "PostgreSQL", "Content Architecture"],
    description:
      "Designed 50+ help articles reducing support queries by 40%. Created content templates and style guides improving readability by 30%.",
    link: "#",
    isGithub: false,
    accent: "bg-warm",
    borderColor: "border-warm",
    numColor: "text-warm",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 relative">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink/10 text-pink font-lilita text-sm tracking-widest uppercase mb-4 border-2 border-pink/20"
          >
            <Sparkles className="w-4 h-4" />
            Things I&apos;ve built
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-lilita text-ink">
            Pro<span className="text-yellow">jects</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link !== "#" ? project.link : undefined}
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 30,
                rotate: idx % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: idx % 2 === 0 ? -1 : 1,
              }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-playful block p-7 md:p-9 group cursor-pointer"
            >
              {/* Project number + link icon */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-4xl font-lilita ${project.numColor} opacity-40`}
                >
                  {project.num}
                </span>
                <div className="flex items-center gap-1 text-ink/30 group-hover:text-pink transition-colors">
                  {project.isGithub ? (
                    <Github className="w-5 h-5" />
                  ) : (
                    <ExternalLink className="w-5 h-5" />
                  )}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Title + subtitle */}
              <h3 className="text-xl md:text-2xl text-ink font-lilita mb-1 group-hover:text-pink transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-ink/40 font-bold tracking-wider mb-4">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-base text-ink/55 leading-[1.7] font-body mb-5">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="tag-playful text-[0.7rem]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Bottom accent stripe */}
              <div
                className={`h-1.5 ${project.accent} rounded-full mt-6 w-16 group-hover:w-full transition-all duration-500`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
