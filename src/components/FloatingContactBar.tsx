import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/landscapingData';

export const FloatingContactBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down a bit (past hero)
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 md:hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
      <div className="bg-[#101211]/95 backdrop-blur-md border border-[#242725] rounded-2xl p-2 shadow-2xl flex items-center gap-2">
        {/* Direct Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneTel}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#24CB33] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-black" />
          <span>Call Us</span>
        </a>

        {/* WhatsApp */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#242725] border border-[#4D4D4D]/40 text-[#F5F7F4] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform hover:border-[#24CB33]"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#24CB33]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
