"use client";
import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Coffee, Music, Lightbulb, TreePine } from "lucide-react";

const traits = [
  { icon: Sparkles, text: "Playful", bg: "bg-pink", color: "text-white", rotate: "-3deg" },
  { icon: Heart, text: "Passionate", bg: "bg-yellow", color: "text-ink", rotate: "2deg" },
  { icon: Star, text: "Curious", bg: "bg-lavender", color: "text-ink", rotate: "-2deg" },
  { icon: Coffee, text: "Dedicated", bg: "bg-warm", color: "text-white", rotate: "3deg" },
  { icon: Lightbulb, text: "Creative", bg: "bg-pink-light", color: "text-ink", rotate: "-1deg" },
  { icon: Music, text: "Joyful", bg: "bg-yellow-light", color: "text-ink", rotate: "4deg" },
  { icon: TreePine, text: "Peaceful", bg: "bg-navy", color: "text-white", rotate: "-4deg" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 relative">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink/10 text-pink font-lilita text-sm tracking-widest uppercase mb-4 border-2 border-pink/20"
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            Get to know me
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-lilita text-ink">
            About <span className="text-pink">Me</span>
          </h2>
        </motion.div>

        {/* Personality content — scrapbook style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Main intro card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="card-playful p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl text-ink mb-4 font-lilita">
              Hey there! <span className="text-pink">I&apos;m Sumukhi</span>
            </h3>
            <p className="text-lg text-ink/70 leading-[1.9] font-body">
              A 25-year-old who still looks at the world with the wonder of a
              child. I love asking <em>&ldquo;how does this work?&rdquo;</em> and{" "}
              <em>&ldquo;why was this made this way?&rdquo;</em> — and that curiosity
              is what drives everything I build.
            </p>
          </motion.div>

          {/* Personality card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className="card-pink p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl text-ink mb-4 font-lilita">
              My <span className="text-yellow">Superpower</span>
            </h3>
            <p className="text-lg text-ink/70 leading-[1.9] font-body">
              When I hit a wall, I don&apos;t stop. I give it my absolute 100%.
              It might take a moment to figure things out, but once the puzzle
              clicks — I work faster than ever. I believe in finishing what I start,
              always.
            </p>
          </motion.div>
        </div>

        {/* Philosophy card — full width, dark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-navy p-8 md:p-12 mb-12 relative overflow-hidden"
        >
          {/* Floating star decoration */}
          <motion.div
            className="absolute top-4 right-4 text-yellow/30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            <Star className="w-12 h-12" fill="currentColor" />
          </motion.div>

          <p className="text-xl md:text-2xl text-white/80 leading-[1.8] font-body max-w-3xl relative z-10">
            I like to enjoy what I do. I explore things like a child — sometimes
            wondering how certain things work, sometimes questioning why they exist
            the way they do. For me, building software is not just about the code.
            It&apos;s about the journey of discovering, creating, and making something
            that brings a little joy into the world.
          </p>
          <div className="flex items-center gap-2 mt-6 text-yellow font-lilita text-sm tracking-widest">
            <Sparkles className="w-4 h-4" />
            Explorer at heart, builder by passion
          </div>
        </motion.div>

        {/* Personality trait badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {traits.map((trait, idx) => (
            <motion.div
              key={trait.text}
              initial={{ scale: 0, rotate: Number(trait.rotate.replace("deg", "")) * 3 }}
              whileInView={{ scale: 1, rotate: Number(trait.rotate.replace("deg", "")) }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: idx * 0.08,
              }}
              whileHover={{
                scale: 1.15,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              className={`${trait.bg} ${trait.color} px-5 py-2.5 rounded-full font-lilita text-sm md:text-base tracking-wider border-2 border-ink/20 shadow-[3px_3px_0_0_rgba(15,23,42,0.15)] cursor-default flex items-center gap-2`}
            >
              <trait.icon className="w-4 h-4" />
              {trait.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
