import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Compass, CheckCircle2, Sparkles } from 'lucide-react';
import { BENEFITS } from '../data/landscapingData';

const iconMap = {
  ShieldCheck,
  Compass,
  CheckCircle2,
  Sparkles,
};

export const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-[#141615] relative border-y border-[#242725]">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,203,51,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#24CB33] uppercase mb-3">
            <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
            <span>THE NUTTALL STANDARD</span>
            <span className="inline-block w-2 h-0.5 bg-[#24CB33]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight mb-4 text-balance">
            Why Choose Nuttall Landscapes?
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F4]/75 leading-relaxed">
            We believe great landscaping is about more than appearance. It's about quality workmanship, attention to detail and getting the job done properly.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName as keyof typeof iconMap] || ShieldCheck;

            return (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#101211] border border-[#242725] hover:border-[#24CB33]/40 rounded-2xl p-7 transition-all duration-300 hover:translate-y-[-4px] relative group"
              >
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-2xl text-[#24CB33] tracking-tight">
                    {benefit.number}.
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[#242725] border border-[#4D4D4D]/30 flex items-center justify-center text-[#24CB33] group-hover:bg-[#24CB33] group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#24CB33] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#F5F7F4]/70 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Subtle bottom accent line on hover */}
                <div className="absolute bottom-0 inset-x-7 h-0.5 bg-gradient-to-r from-transparent via-[#24CB33] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
