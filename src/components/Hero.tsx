import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTherapies: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTherapies }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isResettingRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;

    // Initially start transparent for smooth fade in
    video.style.opacity = '0';

    // Ended handler as per prompt:
    // On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
    const handleEnded = () => {
      isResettingRef.current = true;
      video.style.opacity = '0';
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                isResettingRef.current = false;
              })
              .catch((err) => {
                console.warn('Video replay interrupted:', err);
                isResettingRef.current = false;
              });
          } else {
            isResettingRef.current = false;
          }
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);

    // Continuously monitor currentTime and duration via requestAnimationFrame
    const monitorLoop = () => {
      if (video && !isResettingRef.current) {
        const cur = video.currentTime;
        const dur = video.duration;

        if (!isNaN(dur) && dur > 0) {
          if (cur < 0.5) {
            // Fade in over 0.5s at the start (opacity 0 to 1)
            const opacity = Math.min(1, Math.max(0, cur / 0.5));
            video.style.opacity = opacity.toString();
          } else if (cur > dur - 0.5) {
            // Fade out over 0.5s before the end (opacity 1 to 0)
            const remaining = dur - cur;
            const opacity = Math.min(1, Math.max(0, remaining / 0.5));
            video.style.opacity = opacity.toString();
          } else {
            video.style.opacity = '1';
          }
        }
      }
      animationFrameId = requestAnimationFrame(monitorLoop);
    };

    animationFrameId = requestAnimationFrame(monitorLoop);

    // Initial play trigger
    const startPlay = () => {
      video.play().catch((err) => {
        console.warn('Autoplay prevented or pending interaction:', err);
      });
    };
    startPlay();

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#FFFFFF] flex flex-col justify-between"
    >
      {/* Background Video Layer (z-0) positioned top: '300px' with inset: 'auto 0 0 0' */}
      <div
        className="absolute z-0 pointer-events-none overflow-hidden"
        style={{
          top: '300px',
          inset: 'auto 0 0 0',
          height: 'calc(100% - 300px)',
          minHeight: '480px',
        }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          className="w-full h-full object-cover object-center will-change-[opacity] transition-opacity duration-75"
        />

        {/* Gradient overlays: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-transparent to-[#FFFFFF]" />

        {/* Subtle radial aura to blend seamlessly */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(255,255,255,0.7)_85%,#FFFFFF_100%]" />
      </div>

      {/* Hero Content Section (z-10) */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto w-full pt-36 sm:pt-44 md:pt-48 pb-28 sm:pb-36"
      >
        {/* Main Headline */}
        {/* Styling: text-5xl sm:text-7xl md:text-8xl, max-w-7xl, font-normal, line height: 0.95, letter spacing: -2.46px */}
        {/* Color: #000000 for main text, #6F6F6F for italic emphasized words ("silence," and "the eternal.") */}
        <h1
          className="font-serif font-normal text-5xl sm:text-7xl md:text-8xl max-w-7xl text-[#000000] tracking-[-2.46px] leading-[0.98] animate-fade-rise"
        >
          Healing awakened in{' '}
          <span className="italic text-[#6F6F6F] font-serif">silence,</span>
          <br className="hidden sm:inline" /> honoring{' '}
          <span className="italic text-[#6F6F6F] font-serif">the eternal.</span>
        </h1>

        {/* Description */}
        {/* Styling: text-base sm:text-lg, max-w-2xl, mt-8, leading-relaxed, Color: #6F6F6F, Animation: animate-fade-rise-delay */}
        <p className="text-base sm:text-lg max-w-2xl mt-8 sm:mt-9 leading-relaxed text-[#6F6F6F] font-sans font-normal animate-fade-rise-delay">
          Rooted in authentic Kerala lineage, Jayamahesh Ayurveda and Wellness Clinic harmonizes body, mind, and spirit through bespoke Panchakarma therapies, sacred herbal alchemy, and tranquil restorative care.
        </p>

        {/* Hero CTA Button */}
        {/* Styling: rounded-full, px-14 py-5, text-base, mt-12, Colors: black bg (#000000), white text (#FFFFFF), Hover: scale 1.03, Animation: animate-fade-rise-delay-2 */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 animate-fade-rise-delay-2">
          <button
            onClick={onOpenBooking}
            className="rounded-full px-14 py-5 text-base bg-[#000000] text-[#FFFFFF] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 font-medium cursor-pointer shadow-lg hover:shadow-2xl flex items-center gap-3 group"
          >
            <span>Begin Your Healing Journey</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreTherapies}
            className="rounded-full px-8 py-5 text-base bg-white/80 hover:bg-white text-black border border-black/10 hover:border-black/30 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium cursor-pointer"
          >
            Explore Therapies
          </button>
        </div>

        {/* Quiet Accents / Trust Indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs tracking-wider uppercase text-[#6F6F6F] animate-fade-rise-delay-2">
          <div className="flex items-center gap-2">
            <span className="text-[#0B823D] font-serif text-lg">✦</span>
            <span>Nadi Pariksha (Pulse Reading)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0B823D] font-serif text-lg">✦</span>
            <span>Authentic Kerala Medicated Oils</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#0B823D] font-serif text-lg">✦</span>
            <span>Senior Classical Vaidyas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
