import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const founders = [
  {
    name: 'Diya Shah',
    role: 'Co-founder, Web Developer & Creative Strategist',
    link: 'https://www.linkedin.com/in/diya-shah-795739255/',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Tanishq Patil',
    role: 'Co-founder, Developer & Brand Architect',
    link: 'https://www.linkedin.com/in/tanishq-patil-bb45432b7/',
    img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function FoundersContact() {
  return (
    <section id="founders" className="relative w-full bg-[#000] py-24 text-[#F9F7F5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(153,0,0,0.2),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Meet the Founders
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {founders.map((f, i) => (
            <motion.a
              key={f.name}
              href={f.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/10 bg-white/10 p-1 shadow-[0_8px_30px_-12px_rgba(153,0,0,0.35)]">
                  <img src={f.img} alt={f.name} className="h-full w-full rounded-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                  <div className="pointer-events-none absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-[#0e76a8] text-white shadow-lg">
                    <Linkedin className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{f.role}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Let’s collaborate</h3>
              <p className="mt-2 text-white/80">
                Email: <a href="mailto:navirastudio07@gmail.com" className="underline decoration-[#990000]/60 underline-offset-4">navirastudio07@gmail.com</a>
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a href="https://instagram.com/navirastudio07" target="_blank" rel="noreferrer" className="group grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/navira-studios" target="_blank" rel="noreferrer" className="group grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:navirastudio07@gmail.com" className="group grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Name</label>
                <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-md transition focus:border-[#990000]/60" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-md transition focus:border-[#990000]/60" placeholder="you@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Message</label>
                <textarea rows={4} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-md transition focus:border-[#990000]/60" placeholder="Tell us about your project..." />
              </div>
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl border border-white/10 bg-[#990000] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_-12px_rgba(153,0,0,0.6)] transition hover:brightness-110">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2025 Navira Studios. All rights reserved.
        </div>
      </div>
    </section>
  );
}
