import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const GlowDot = ({ delay = 0, className = '' }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.05, 0.9] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`pointer-events-none absolute rounded-full bg-[#990000]/60 blur-[6px] ${className}`}
  />
);

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#000]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient gradient + glass particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#990000]/30 blur-[120px]" />
        <GlowDot className="top-24 left-16 h-10 w-10" delay={0.2} />
        <GlowDot className="bottom-28 right-20 h-8 w-8" delay={1.2} />
        <GlowDot className="top-1/3 right-1/3 h-6 w-6" delay={2} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-[#F9F7F5] md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#990000]"></span>
            <span className="text-xs uppercase tracking-widest text-white/80">Navira Studios</span>
          </div>
          <h1 className="text-balance bg-gradient-to-b from-white to-white/80 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
            Crafting Brands that Speak. Designing Experiences that Inspire.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/80 md:text-lg">
            Websites • Branding • Digital Marketing for ambitious creators and businesses.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-xl transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#990000]/60"
            >
              <span>Let’s Build Together</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
            </a>
          </div>
        </motion.div>

        {/* Subtle glass stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: 'Years', v: '5+' },
            { k: 'Projects', v: '120+' },
            { k: 'Industries', v: '15+' },
            { k: 'Satisfaction', v: '100%' },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-white/80 shadow-[0_8px_40px_-12px_rgba(153,0,0,0.25)] backdrop-blur-xl"
            >
              <div className="text-xs uppercase tracking-wider text-white/60">{item.k}</div>
              <div className="mt-1 text-xl font-semibold text-white">{item.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
