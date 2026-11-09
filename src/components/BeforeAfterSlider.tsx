import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { IMAGES } from '../data/landscapingData';

interface BeforeAfterSliderProps {
  onOpenQuoteModal?: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuoteModal }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="my-16 max-w-5xl mx-auto">
      <div className="bg-[#191C1A] border border-[#242725] rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#24CB33] uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE COMPARISON</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              The Power of a Full Garden Transformation
            </h3>
          </div>
          <p className="text-xs text-[#F5F7F4]/60 sm:text-right">
            Drag the slider to reveal the finished transformation
          </p>
        </div>

        {/* Comparison Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative h-[340px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#242725]"
        >
          {/* AFTER Image (Full width background) */}
          <div className="absolute inset-0">
            <img
              src={IMAGES.gardenMakeover}
              alt="Transformed modern garden with porcelain patio and outdoor seating"
              className="w-full h-full object-cover object-center pointer-events-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 bg-[#101211]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#242725] text-xs font-bold text-[#24CB33]">
              AFTER: Bespoke Makeover
            </div>
          </div>

          {/* BEFORE Image (Clipped with width percentage) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="relative h-full"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '1000px',
              }}
            >
              <img
                src={IMAGES.aboutGarden}
                alt="Previous garden state prior to full renovation"
                className="w-full h-full object-cover object-center filter saturate-50 contrast-90 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute bottom-4 left-4 bg-[#101211]/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#242725] text-xs font-bold text-white">
                BEFORE: Excavation & Preparation
              </div>
            </div>
          </div>

          {/* Divider Handle Bar */}
          <div
            className="absolute inset-y-0 w-1 bg-[#24CB33] shadow-[0_0_12px_#24CB33]"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#101211] border-2 border-[#24CB33] flex items-center justify-center text-[#24CB33] shadow-lg">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Quick CTA footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-5 border-t border-[#242725]">
          <p className="text-xs sm:text-sm text-[#F5F7F4]/80">
            Have an outdoor space ready for a transformation in Heywood or Greater Manchester?
          </p>
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="px-5 py-2.5 rounded-xl bg-[#24CB33] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#1fb32d] transition-colors whitespace-nowrap active:scale-95"
          >
            Discuss Your Garden
          </button>
        </div>
      </div>
    </div>
  );
};
