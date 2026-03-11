"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Learning Management System",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Cloudinary"],
    description: "Full-stack LMS with 70% faster server response via Redis caching. Cloudinary-powered media delivery serving 500+ active users with Razorpay integration.",
    link: "https://github.com/sumukhi23/Learning-Management-System",
    isGithub: true,
    dotColor: "bg-warm",
  },
  {
    title: "Content Management System",
    tech: ["React.js", "Firebase", "Lexical.js", "Azure"],
    description: "CMS boosting publishing speed by 40%. Custom rich-text editor plugins and fully automated Azure CI/CD pipelines achieving 99.95% uptime.",
    link: "https://coreblock.in",
    isGithub: false,
    dotColor: "bg-navy",
  },
  {
    title: "Recipe Maker API",
    tech: ["Node.js", "Express", "TypeScript", "REST"],
    description: "RESTful API converting recipe inputs into machine-compatible JSON format. Real-time webhook endpoints with comprehensive API documentation.",
    link: "https://drag-and-drop-recipe-builder.vercel.app",
    isGithub: false,
    dotColor: "bg-coral",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-warm">03 / Projects</span>
          <h2 className="text-4xl md:text-5xl text-ink mt-3 mb-3">Selected Work</h2>
          <div className="wave-divider" />
        </motion.div>

        <div className="space-y-5">
          {PROJECTS.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target={project.link !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card block p-8 md:p-10 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-2.5 h-2.5 rounded-full ${project.dotColor}`} />
                    <h3 className="text-2xl md:text-3xl text-ink group-hover:text-warm transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-base md:text-lg text-ink/50 leading-[1.7] tracking-wide mb-6 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-ink/25 group-hover:text-warm transition-colors shrink-0">
                  {project.isGithub ? <Github className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
