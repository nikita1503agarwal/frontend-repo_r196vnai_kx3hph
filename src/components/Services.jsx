import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, BadgeCheck, ChartBar } from 'lucide-react';

const services = [
  {
    title: 'Website Design & Development',
    desc: 'High-performance websites that merge aesthetics with conversion-focused UX.',
    Icon: Laptop,
  },
  {
    title: 'Brand Identity & Logo Design',
    desc: 'Distinctive visual systems and logos that build recognition and trust.',
    Icon: BadgeCheck,
  },
  {
    title: 'Digital Marketing & Strategy',
    desc: 'Data-driven campaigns and content that scale your growth sustainably.',
    Icon: ChartBar,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#000] py-24 text-[#F9F7F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(153,0,0,0.18),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Services
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ title, desc, Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_50px_-12px_rgba(153,0,0,0.35)] backdrop-blur-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
              <div className="relative flex items-start gap-4" style={{ transform: 'translateZ(24px)' }}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-b from-white/20 to-white/5 text-white shadow-inner">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-white/80">{desc}</p>
                </div>
              </div>
              <div className="mt-6 h-32 w-full rounded-2xl bg-gradient-to-tr from-white/10 to-transparent" style={{ transform: 'translateZ(12px)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
