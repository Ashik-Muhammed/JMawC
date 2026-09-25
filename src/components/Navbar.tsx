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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = [
        { id: 'home', name: 'Home' },
        { id: 'studio', name: 'Studio' },
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
    { label: 'Studio', href: '#studio', key: 'Studio' },
    { label: 'About', href: '#about', key: 'About' },
    { label: 'Journal', href: '#journal', key: 'Journal' },
    { label: 'Reach Us', href: '#reach-us', key: 'Reach Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.03)] border-b border-black/[0.04]'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto"
      >
        {/* Logo */}
        <a
          href="#home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
          onClick={() => setActiveItem('Home')}
        >
          <Logo />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
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
        <div className="flex items-center space-x-4">
          {onOpenDoshaQuiz && (
            <button
              onClick={onOpenDoshaQuiz}
              className="hidden lg:inline-flex items-center text-xs tracking-wider uppercase text-[#6F6F6F] hover:text-black transition-colors px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30"
            >
              Dosha Quiz
            </button>
          )}

          <button
            onClick={onOpenBooking}
            className="rounded-full px-6 py-2.5 text-sm bg-[#000000] text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 font-medium shadow-sm hover:shadow-md cursor-pointer"
          >
            Book Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-gray-600 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/10 px-8 py-8 transition-all animate-fade-rise">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`text-xl font-serif tracking-wide ${
                  activeItem === item.key ? 'text-[#000000] font-normal' : 'text-[#6F6F6F]'
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
                  className="w-full text-center py-3 text-sm rounded-full border border-black/20 text-black font-medium"
                >
                  Discover Your Dosha
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center rounded-full py-3 text-sm bg-[#000000] text-white font-medium"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
