import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/landscapingData';

interface HeaderProps {
  onOpenQuoteModal?: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101211]/95 backdrop-blur-md border-b border-[#242725] shadow-lg py-3.5'
            : 'bg-gradient-to-b from-[#101211]/90 via-[#101211]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
              aria-label="Nuttall Landscapes - Home"
            >
              <BrandLogo size="md" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#F5F7F4]/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="whitespace-nowrap shrink-0 hover:text-[#24CB33] transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#24CB33] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action + Quick Phone */}
            <div className="hidden lg:flex items-center gap-5 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F5F7F4]/90 hover:text-[#24CB33] transition-colors whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-full bg-[#242725] border border-[#4D4D4D]/40 flex items-center justify-center text-[#24CB33]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal();
                  } else {
                    handleNavClick('#contact');
                  }
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#24CB33] hover:bg-[#1fb32d] transition-all duration-200 rounded-lg shadow-[0_2px_12px_rgba(36,203,51,0.25)] hover:shadow-[0_4px_20px_rgba(36,203,51,0.4)] whitespace-nowrap shrink-0 active:scale-95"
              >
                GET A FREE QUOTE
              </a>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="p-2.5 rounded-lg bg-[#242725] border border-[#4D4D4D]/40 text-[#24CB33] hover:bg-[#242725]/80 transition-colors"
                aria-label="Call Nuttall Landscapes"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#242725] border border-[#4D4D4D]/40 text-white hover:text-[#24CB33] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-20 right-4 left-4 bg-[#101211] border border-[#242725] rounded-2xl p-6 shadow-2xl flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base font-semibold text-[#F5F7F4] hover:text-[#24CB33] py-2 border-b border-[#242725] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#4D4D4D]" />
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal();
                  } else {
                    handleNavClick('#contact');
                  }
                }}
                className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-black bg-[#24CB33] rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="grid grid-cols-2 gap-3 mt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneTel}`}
                  className="py-2.5 px-3 rounded-xl bg-[#242725] border border-[#4D4D4D]/40 text-xs font-semibold text-[#F5F7F4] flex items-center justify-center gap-2 hover:border-[#24CB33] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#24CB33]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#242725] border border-[#4D4D4D]/40 text-xs font-semibold text-[#F5F7F4] flex items-center justify-center gap-2 hover:border-[#24CB33] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#24CB33]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
