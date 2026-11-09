import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/landscapingData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-[#101211] relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#24CB33]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-3">
            <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
            <span>WHAT WE DO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Everything Your Outdoor Space Needs.
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F4]/75 leading-relaxed">
            From complete garden makeovers to beautiful driveways, we deliver quality landscaping solutions tailored to your space.
          </p>
        </div>

        {/* Asymmetric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            // Give featured prominence to Garden Transformations & Resin Driveways
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group flex flex-col justify-between bg-[#191C1A] border border-[#242725] hover:border-[#24CB33]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] ${
                  isFeatured ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-64 overflow-hidden bg-[#242725]">
                    <img
                      src={service.image}
                      alt={`${service.title} in Heywood and Greater Manchester`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191C1A] via-transparent to-black/20" />

                    {/* Subtle Service Index Indicator */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#101211]/85 backdrop-blur-md rounded-md border border-[#242725] text-[11px] font-bold tracking-wider text-[#24CB33]">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 group-hover:text-[#24CB33] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#F5F7F4]/75 leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-xs text-[#F5F7F4]/85">
                          <Check className="w-3.5 h-3.5 text-[#24CB33] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 sm:p-7 pt-0 border-t border-[#242725]/50 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full py-3 px-4 rounded-xl bg-[#242725] hover:bg-[#24CB33] text-[#F5F7F4] hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-between group/btn cursor-pointer"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#24CB33] group-hover/btn:text-black transition-colors" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
