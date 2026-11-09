import React, { useEffect } from 'react';
import { X, MapPin, Check, Phone, ArrowRight } from 'lucide-react';
import { GalleryProject } from '../types';
import { BUSINESS_INFO } from '../data/landscapingData';

interface LightboxModalProps {
  project: GalleryProject | null;
  onClose: () => void;
  onOpenQuote: (service?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose, onOpenQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#141615] border border-[#242725] rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#101211]/80 backdrop-blur-md border border-[#242725] text-white hover:text-[#24CB33] flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto">
          {/* Large Image Showcase */}
          <div className="relative h-72 sm:h-96 md:h-[420px] bg-[#101211] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141615] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="px-3 py-1 rounded-md bg-[#24CB33] text-black text-xs font-bold uppercase tracking-wider">
                {project.categoryLabel}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F7F4]/70">
                  <MapPin className="w-4 h-4 text-[#24CB33]" />
                  <span>{project.location}</span>
                  <span className="text-[#4D4D4D]">·</span>
                  <span>Professional Nuttall Landscapes Installation</span>
                </div>
              </div>

              {/* Direct Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#242725] border border-[#4D4D4D]/40 text-xs font-bold text-white hover:border-[#24CB33] transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#24CB33]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            <p className="text-sm sm:text-base text-[#F5F7F4]/80 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Feature Highlights */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#24CB33] mb-3">
                Key Project Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#191C1A] border border-[#242725] text-xs text-[#F5F7F4]/90"
                  >
                    <Check className="w-3.5 h-3.5 text-[#24CB33] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#242725]">
              <span className="text-xs text-[#F5F7F4]/60">
                Interested in a similar transformation for your outdoor space?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenQuote(project.categoryLabel);
                  }}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#24CB33] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1fb32d] transition-colors flex items-center justify-center gap-2 active:scale-95 shadow-lg"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
