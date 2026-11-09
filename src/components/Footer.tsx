import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO, SERVICES } from '../data/landscapingData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0F0E] text-[#F5F7F4] relative border-t border-[#242725] overflow-hidden">
      {/* Subtle Green Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#24CB33] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#242725]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block"
            >
              <BrandLogo size="lg" />
            </a>

            <p className="text-sm text-[#F5F7F4]/80 leading-relaxed font-medium">
              Luxury Garden Transformations & Resin Driveway Specialists.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#24CB33] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Serving Heywood & Greater Manchester</span>
            </div>

            <p className="text-xs text-[#4D4D4D] leading-relaxed pt-2">
              Transforming residential outdoor spaces with premium porcelain, bespoke carpentry, luxury lawns and durable resin surfacing.
            </p>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#24CB33] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F5F7F4]/80">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                  className="hover:text-[#24CB33] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#services');
                  }}
                  className="hover:text-[#24CB33] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#projects');
                  }}
                  className="hover:text-[#24CB33] transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="hover:text-[#24CB33] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="hover:text-[#24CB33] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#24CB33] mb-4">
              Landscaping Services
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F7F4]/75">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#24CB33] mb-4">
              Contact Us
            </h4>

            <a
              href={`tel:${BUSINESS_INFO.phoneTel}`}
              className="flex items-center gap-3 text-xs sm:text-sm text-[#F5F7F4]/90 hover:text-[#24CB33] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#191C1A] border border-[#242725] flex items-center justify-center text-[#24CB33] group-hover:bg-[#24CB33] group-hover:text-black transition-colors shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-3 text-xs sm:text-sm text-[#F5F7F4]/90 hover:text-[#24CB33] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#191C1A] border border-[#242725] flex items-center justify-center text-[#24CB33] group-hover:bg-[#24CB33] group-hover:text-black transition-colors shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold break-all">{BUSINESS_INFO.email}</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs sm:text-sm text-[#F5F7F4]/90 hover:text-[#24CB33] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#191C1A] border border-[#242725] flex items-center justify-center text-[#24CB33] group-hover:bg-[#24CB33] group-hover:text-black transition-colors shrink-0">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">WhatsApp Chat</span>
            </a>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#24CB33] hover:bg-[#1fb32d] text-black font-bold text-xs uppercase tracking-wider text-center block transition-colors"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4D4D4D]">
          <p>© 2026 Nuttall Landscapes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Heywood & Greater Manchester</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#F5F7F4]/60 hover:text-[#24CB33] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
