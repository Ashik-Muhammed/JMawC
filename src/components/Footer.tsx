import React from 'react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-black/8 pt-20 pb-12 text-[#6F6F6F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-black/8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-sm leading-relaxed max-w-sm text-[#6F6F6F]">
              Preserving thousands of years of classical Kerala Ayurvedic science. Dedicated to genuine cellular rejuvenation, restorative stillness, and individual constitutional harmony.
            </p>
            <div className="pt-2 text-xs text-[#888888]">
              <span className="font-semibold text-black uppercase tracking-wider block mb-1">
                Authentic Care
              </span>
              <span>Traditional Kerala Classical Healthcare Sanctuary</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg text-black font-normal mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-black transition-colors">
                  Home Sanctuary
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition-colors">
                  Lineage &amp; Vaidyas
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-black transition-colors">
                  Vedic Journal
                </a>
              </li>
              <li>
                <a href="#reach-us" className="hover:text-black transition-colors">
                  Sanctuary Coordinates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Therapies */}
          <div>
            <h4 className="font-serif text-lg text-black font-normal mb-4">
              Sacred Therapies
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Pizhichil (Royal Oil Stream)
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Dhara Stream Therapy
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Shirovasthi Cranial Therapy
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Abhyangam Herbal Anointment
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Kizhi Botanical Poultice
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Kadivasthi Lumbar Reservoir
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Shirodhara Meditative Stream
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sanctuary Contact & Location */}
          <div>
            <h4 className="font-serif text-lg text-black font-normal mb-4">
              Sanctuary Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-black font-medium">Jayamahesh Ayurveda</p>
              <p className="text-xs text-[#888888] leading-relaxed">
                Temple Road, near Sree Mahadeva Temple,<br />
                Parassala, Kerala 695502
              </p>
              <p className="pt-1 text-[11px] text-[#888888]">
                Salem - Kochi - Kanyakumari Hwy<br />
                Plus Code: 85R4+79Q
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919443861260"
                  className="text-black font-medium hover:text-[#0B823D] transition-colors block"
                >
                  +91 94438 61260
                </a>
                <a
                  href="https://wa.me/919443861260"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#0B823D] hover:underline block mt-0.5"
                >
                  WhatsApp: +91 94438 61260
                </a>
              </div>
              <p className="text-xs text-[#888888] pt-1">
                <a href="mailto:jayamaheshadmin@gmail.com" className="hover:text-black transition-colors">
                  jayamaheshadmin@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] gap-4">
          <p>
            &copy; {new Date().getFullYear()} Jayamahesh Ayurveda and Wellness Clinic. All rights reserved.
          </p>

          <p className="text-[11px] text-center sm:text-right max-w-md">
            Traditional Ayurvedic treatments harmonize internal biological rhythms and vitality. Consult your Vaidya for specific clinical conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
