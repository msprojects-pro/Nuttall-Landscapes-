import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'md' }) => {
  const isLg = size === 'lg';
  const isSm = size === 'sm';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Monogram Badge */}
      <div
        className={`flex items-center justify-center font-display font-black tracking-tighter shrink-0 transition-transform group-hover:scale-105 ${
          isLg
            ? 'w-12 h-12 text-2xl rounded-lg'
            : isSm
            ? 'w-8 h-8 text-base rounded-md'
            : 'w-10 h-10 text-xl rounded-md'
        } bg-[#101211] border border-[#242725] relative overflow-hidden shadow-[0_0_15px_rgba(36,203,51,0.15)]`}
      >
        <span className="text-[#24CB33] font-black mr-[-1px]">N</span>
        <span className="text-white font-extrabold">L</span>
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-[#24CB33]" />
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold tracking-wider text-white uppercase ${
            isLg ? 'text-xl' : isSm ? 'text-sm' : 'text-base'
          }`}
        >
          NUTTALL
        </span>
        <span
          className={`font-display font-bold tracking-[0.22em] text-[#24CB33] uppercase mt-0.5 ${
            isLg ? 'text-xs' : isSm ? 'text-[9px]' : 'text-[10px]'
          }`}
        >
          LANDSCAPES
        </span>
      </div>
    </div>
  );
};
