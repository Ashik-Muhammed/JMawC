import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const imgHeights = {
    sm: 'h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Attached Official Emblem from /logo.jpg */}
      <div className="relative overflow-hidden flex items-center justify-center">
        <img
          src="/logo.jpg"
          alt="Jayamahesh Ayurveda & Wellness Logo"
          className={`${imgHeights[size]} w-auto object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105`}
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className="font-serif text-2xl sm:text-3xl tracking-tight text-black font-normal">
            Jaya Mahesh
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#6F6F6F] mt-1 font-sans font-medium">
            Ayurveda &amp; Wellness
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
