import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Check, MapPin, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, IMAGES } from '../data/landscapingData';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden">
      {/* Background Cinematic Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Luxury modern garden transformation in Greater Manchester with porcelain patio, lush lawn and contemporary slatted fencing"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101211]/95 via-[#101211]/80 to-[#101211]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101211] via-transparent to-[#101211]/60" />
        {/* Subtle green ambient glow behind hero text */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#24CB33]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Small Label / Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-4"
          >
            <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
            <span>NUTTALL LANDSCAPES | HEYWOOD & GREATER MANCHESTER</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-balance"
          >
            <span className="text-[#24CB33] drop-shadow-[0_2px_12px_rgba(36,203,51,0.25)]">
              Transform Your Garden.
            </span>{' '}
            <br className="hidden sm:inline" />
            <span>Elevate Your Outdoor Living.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[#F5F7F4]/90 font-normal leading-relaxed mb-8 max-w-2xl"
          >
            From luxury garden transformations and stunning patios to artificial grass and resin driveways, we create outdoor spaces that look exceptional and are built to last.
          </motion.p>

          {/* Buttons Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenQuoteModal) {
                  onOpenQuoteModal();
                } else {
                  scrollToSection('contact');
                }
              }}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-black bg-[#24CB33] hover:bg-[#1fb32d] transition-all duration-200 rounded-xl shadow-[0_4px_20px_rgba(36,203,51,0.35)] hover:shadow-[0_6px_28px_rgba(36,203,51,0.5)] flex items-center justify-center gap-2.5 group active:scale-95"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-[#242725]/80 hover:bg-[#242725] border border-[#4D4D4D]/60 hover:border-[#24CB33] transition-all duration-200 rounded-xl backdrop-blur-sm flex items-center justify-center gap-2 active:scale-95"
            >
              <span>VIEW OUR WORK</span>
            </button>
          </motion.div>

          {/* Subtle Trust Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#F5F7F4]/70"
          >
            <div className="w-4 h-4 rounded-full bg-[#24CB33]/20 flex items-center justify-center text-[#24CB33]">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </div>
            <span className="italic tracking-wide">Quality Work. Done Properly.</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Proof Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="pt-6 border-t border-[#242725]/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-[#F5F7F4]/80">
          <div className="flex items-center gap-3 bg-[#101211]/60 backdrop-blur-md p-3.5 rounded-xl border border-[#242725]">
            <div className="w-8 h-8 rounded-lg bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33] shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Heywood & Greater Manchester</p>
              <p className="text-xs text-[#F5F7F4]/60">Local specialists serving your area</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#101211]/60 backdrop-blur-md p-3.5 rounded-xl border border-[#242725]">
            <div className="w-8 h-8 rounded-lg bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Bespoke Garden Makeovers</p>
              <p className="text-xs text-[#F5F7F4]/60">Tailored to your property & lifestyle</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#101211]/60 backdrop-blur-md p-3.5 rounded-xl border border-[#242725]">
            <div className="w-8 h-8 rounded-lg bg-[#24CB33]/15 flex items-center justify-center text-[#24CB33] shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white">Resin Driveways & Paving</p>
              <p className="text-xs text-[#F5F7F4]/60">Durable, pristine craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
