import React from 'react';
import Logo from './Logo';
import { Phone, MessageCircle, Mail, ArrowUp, Clock, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white border-t border-black/8 pt-12 sm:pt-16 pb-8 sm:pb-12 text-[#6F6F6F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main 2-Side Row with Balanced Alignment */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 sm:pb-12 border-b border-black/8 text-center md:text-left">
          
          {/* Brand & Location */}
          <div className="flex flex-col items-center md:items-start space-y-3 max-w-md">
            <Logo size="md" />
            <p className="text-xs sm:text-sm text-[#6F6F6F] leading-relaxed">
              Classical Kerala Ayurvedic healing sanctuary in Parassala, Kerala. Rooted in authentic Vaidya traditions, bespoke botanical formulations, and restorative stillness.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#888888] pt-1">
              <MapPin size={13} className="text-[#0B823D] shrink-0" />
              <span>Temple Road, near Sree Mahadeva Temple, Parassala (NH 66)</span>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col items-center md:items-end space-y-3 text-xs sm:text-sm">
            <span className="text-[11px] font-semibold text-black uppercase tracking-wider">
              Sanctuary Inquiries
            </span>

            <div className="flex flex-col items-center md:items-end space-y-2.5">
              <a
                href="tel:+919443861260"
                className="text-black font-medium hover:text-[#0B823D] transition-colors inline-flex items-center gap-1.5"
              >
                <Phone size={13} className="text-[#0B823D]" />
                <span>+91 94438 61260</span>
              </a>

              <a
                href="https://wa.me/919443861260"
                target="_blank"
                rel="noreferrer"
                className="text-[#0B823D] font-medium hover:underline inline-flex items-center gap-1.5"
              >
                <MessageCircle size={13} />
                <span>WhatsApp Concierge</span>
              </a>

              <a
                href="mailto:jayamaheshadmin@gmail.com"
                className="text-[#6F6F6F] hover:text-black transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={13} className="text-[#0B823D]" />
                <span>jayamaheshadmin@gmail.com</span>
              </a>

              <div className="flex items-center gap-1.5 text-[11px] text-[#888888] pt-1">
                <Clock size={12} className="text-stone-400" />
                <span>Monday to Sunday: 07:30 AM to 07:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#888888] gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-[11px] sm:text-xs">
              &copy; {new Date().getFullYear()} Jayamahesh Ayurveda &amp; Wellness Clinic. All rights reserved.
            </p>
            <p className="text-[11px] text-[#888888] max-w-xl leading-relaxed">
              Traditional Ayurvedic treatments harmonize internal biological rhythms and vitality. Consult your Vaidya for specific clinical conditions.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 hover:border-black/30 hover:bg-stone-50 text-black text-xs transition-colors cursor-pointer shrink-0"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
