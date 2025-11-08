import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: 'Little Print', img: 'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Brand Refresh', img: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Social Campaign', img: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1200&auto=format&fit=crop' },
  { title: 'SaaS Dashboard', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Startup Identity', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Growth Strategy', img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-[#0c0c0c] py-24 text-[#F9F7F5]">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Portfolio
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-56 w-full overflow-hidden rounded-2xl" style={{ transform: 'translateZ(20px)' }}>
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
              <div className="mt-4 flex items-center justify-between" style={{ transform: 'translateZ(12px)' }}>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs text-white/70">View case</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
