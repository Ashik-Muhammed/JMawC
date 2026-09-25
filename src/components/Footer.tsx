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
                Ayurvedic Accreditation
              </span>
              <span>NABH Certified Classical Ayurvedic Healthcare Center</span>
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
                  Therapy Studio
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
                  Shirodhara Protocol
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Panchakarma Detox (7-21 Days)
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Abhyanga Warm Anointment
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Elakizhi Leaf Compress
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Nadi Pariksha Reading
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-black transition-colors">
                  Rasayana Longevity
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sanctuary Hours & Contact */}
          <div>
            <h4 className="font-serif text-lg text-black font-normal mb-4">
              Stillness Hours
            </h4>
            <div className="space-y-2 text-sm">
              <p>Monday – Sunday</p>
              <p className="text-black font-medium">07:30 AM – 07:30 PM IST</p>
              <p className="pt-2 text-xs text-[#888888]">
                Advance appointments required to ensure patient tranquility.
              </p>
              <p className="pt-3 text-black font-medium">
                +91 98470 12345
              </p>
              <p className="text-xs text-[#888888]">
                info@jayamaheshayurveda.com
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
