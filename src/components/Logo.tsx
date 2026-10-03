import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const imgHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-16',
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Attached Official Emblem from /logo.jpg */}
      <div className="relative overflow-hidden flex items-center justify-center shrink-0">
        <img
          src="/logo.jpg"
          alt="Jayamahesh Ayurveda & Wellness Clinic Emblem"
          width={48}
          height={48}
          decoding="async"
          className={`${imgHeights[size]} w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-tight text-black font-normal whitespace-nowrap">
            Jaya Mahesh
          </span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#6F6F6F] mt-0.5 sm:mt-1 font-sans font-medium whitespace-nowrap">
            Ayurveda &amp; Wellness
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
