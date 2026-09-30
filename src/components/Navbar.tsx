import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenDoshaQuiz?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenDoshaQuiz }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const headerRef = React.useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64);

  // Keep track of header height dynamically for exact drawer positioning
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = [
        { id: 'home', name: 'Home' },
        { id: 'studio', name: 'Treatments' },
        { id: 'about', name: 'About' },
        { id: 'journal', name: 'Journal' },
        { id: 'reach-us', name: 'Reach Us' },
      ];

      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home', key: 'Home' },
    { label: 'Treatments', href: '#studio', key: 'Treatments' },
    { label: 'About', href: '#about', key: 'About' },
    { label: 'Journal', href: '#journal', key: 'Journal' },
    { label: 'Reach Us', href: '#reach-us', key: 'Reach Us' },
  ];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-b border-black/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="flex justify-between items-center px-4 sm:px-8 py-3.5 sm:py-5 max-w-7xl mx-auto"
        >
          {/* Logo */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg shrink-0"
            onClick={() => {
              setActiveItem('Home');
              setMobileMenuOpen(false);
            }}
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {menuItems.map((item) => {
              const isHome = item.key === 'Home';
              const isActive = activeItem === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setActiveItem(item.key)}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    isActive || isHome
                      ? 'text-[#000000] font-medium'
                      : 'text-[#6F6F6F] hover:text-[#000000]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {onOpenDoshaQuiz && (
              <button
                onClick={onOpenDoshaQuiz}
                className="hidden lg:inline-flex items-center text-xs tracking-wider uppercase text-[#6F6F6F] hover:text-black transition-colors px-3.5 py-1.5 rounded-full border border-black/10 hover:border-black/30"
              >
                Dosha Quiz
              </button>
            )}

            <button
              onClick={onOpenBooking}
              className="rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-[#000000] text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 font-medium shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <span className="inline xs:hidden">Book</span>
              <span className="hidden xs:inline">Book Consultation</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-black hover:text-gray-600 transition-colors focus:outline-none rounded-lg active:bg-black/5"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu - Rendered OUTSIDE header so backdrop-filter doesn't create a trapped containing block */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          style={{
            top: `${headerHeight}px`,
            height: `calc(100dvh - ${headerHeight}px)`,
          }}
          className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/98 backdrop-blur-2xl border-b border-black/10 transition-all animate-fade-rise overflow-y-auto overscroll-contain"
        >
          <div className="flex flex-col min-h-full justify-between px-6 pt-5 pb-10 sm:pb-12">
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-medium pb-2 border-b border-black/5">
                Sanctuary Navigation
              </span>
              {menuItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xl font-serif tracking-wide py-1.5 transition-colors ${
                    activeItem === item.key ? 'text-[#0B823D] font-medium' : 'text-[#333333]'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-black/10 flex flex-col gap-3">
                {onOpenDoshaQuiz && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDoshaQuiz();
                    }}
                    className="w-full text-center py-3 text-sm rounded-full border border-black/20 text-black font-medium active:bg-stone-50"
                  >
                    Discover Your Dosha Profile
                  </button>
                )}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center rounded-full py-3.5 text-sm bg-[#000000] text-white font-medium shadow-md active:scale-[0.98]"
                >
                  Book In-Person Consultation
                </button>
              </div>
            </div>

            {/* Quick Clinic Contact Footer in Mobile Drawer */}
            <div className="pt-6 mt-8 border-t border-black/10 text-xs text-[#6F6F6F] space-y-2">
              <p className="font-serif text-black text-sm">Jayamahesh Ayurveda &amp; Wellness</p>
              <p className="text-[11px] leading-tight">Parassala, Kerala 695502 • Near Sree Mahadeva Temple</p>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="tel:+919443861260"
                  className="text-[#0B823D] font-medium hover:underline inline-flex items-center gap-1"
                >
                  <PhoneCall size={13} />
                  <span>+91 94438 61260</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
