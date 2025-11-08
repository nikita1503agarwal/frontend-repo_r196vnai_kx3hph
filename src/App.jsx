import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FoundersContact from './components/FoundersContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000] font-inter text-[#F9F7F5]">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
          <a href="#" className="text-sm font-semibold tracking-wide text-white">Navira Studios</a>
          <div className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Work</a>
            <a href="#founders" className="hover:text-white">Founders</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="rounded-xl bg-[#990000] px-3 py-1.5 text-sm font-medium text-white shadow-[0_10px_30px_-12px_rgba(153,0,0,0.6)] hover:brightness-110">Hire Us</a>
        </nav>
      </header>

      <main className="pt-24">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <FoundersContact />
      </main>
    </div>
  );
}
