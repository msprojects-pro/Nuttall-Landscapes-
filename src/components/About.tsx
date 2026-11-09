import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { IMAGES, BUSINESS_INFO } from '../data/landscapingData';

interface AboutProps {
  onOpenQuoteModal?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 bg-[#141615] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Beautiful Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#242725] shadow-2xl bg-[#191C1A]">
              <img
                src={IMAGES.aboutGarden}
                alt="Beautiful tiered garden makeover in Greater Manchester by Nuttall Landscapes"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Quality Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#101211]/90 backdrop-blur-md border border-[#242725] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Bespoke Craftsmanship
                  </p>
                  <p className="text-[11px] text-[#24CB33]">Built to Last British Weather</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#F5F7F4]/70">
                  <MapPin className="w-3.5 h-3.5 text-[#24CB33]" />
                  <span>Heywood & Greater Manchester</span>
                </div>
              </div>
            </div>

            {/* Subtle Green Decorative Accent Corner */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-l-2 border-b-2 border-[#24CB33] rounded-bl-3xl pointer-events-none -z-0 opacity-60" />
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Label */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-4">
              <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
              <span>ABOUT NUTTALL LANDSCAPES</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6 text-balance">
              Creating Outdoor Spaces You'll Love.
            </h2>

            {/* Paragraph Text strictly faithful to brief */}
            <div className="space-y-4 text-base sm:text-lg text-[#F5F7F4]/80 leading-relaxed mb-8">
              <p>
                Nuttall Landscapes specialises in luxury garden transformations and outdoor improvements across Heywood, Greater Manchester and surrounding areas.
              </p>
              <p>
                From patios, fencing and garden walls to artificial grass, real turfing and resin driveways, the focus is on quality work, carefully finished projects and outdoor spaces that make a difference.
              </p>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F7F4]/90">
                <CheckCircle2 className="w-4 h-4 text-[#24CB33] shrink-0" />
                <span>Bespoke 3D Layout Planning</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F7F4]/90">
                <CheckCircle2 className="w-4 h-4 text-[#24CB33] shrink-0" />
                <span>Clean & Respectful Site Management</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F7F4]/90">
                <CheckCircle2 className="w-4 h-4 text-[#24CB33] shrink-0" />
                <span>Premium Porcelain & Aggregate Sourcing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F5F7F4]/90">
                <CheckCircle2 className="w-4 h-4 text-[#24CB33] shrink-0" />
                <span>Direct Owner Oversight</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={() => {
                  if (onOpenQuoteModal) onOpenQuoteModal();
                  else scrollToContact();
                }}
                className="px-8 py-4 rounded-xl bg-[#24CB33] hover:bg-[#1fb32d] text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2.5 shadow-[0_4px_20px_rgba(36,203,51,0.3)] hover:shadow-[0_6px_28px_rgba(36,203,51,0.45)] active:scale-95 cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
