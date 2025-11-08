import React from 'react';
import { motion } from 'framer-motion';

function GlassWave() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 top-10 h-64 w-[36rem] rotate-6 rounded-[3rem] bg-gradient-to-r from-white/10 to-transparent blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-[40rem] -rotate-6 rounded-[3rem] bg-gradient-to-l from-[#990000]/20 to-transparent blur-3xl" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0c0c0c] py-24 text-[#F9F7F5]">
      <GlassWave />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85"
        >
          Navira Studios blends design, technology, and strategy to create meaningful digital experiences.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            'Design Precision',
            'Innovative Technology',
            'Strategic Thinking',
          ].map((pill, i) => (
            <motion.div
              key={pill}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white/80 backdrop-blur-xl"
            >
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
