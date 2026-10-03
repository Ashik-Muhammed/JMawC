import React, { useState } from 'react';
import { TREATMENTS, Treatment } from '../data/therapies';
import { Clock, ArrowUpRight, Sparkles } from 'lucide-react';

interface StudioSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
  onBookTreatment: (treatmentName: string) => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({
  onSelectTreatment,
  onBookTreatment,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Mind & Sleep', 'Pain Relief', 'Longevity'];

  const filtered = activeCategory === 'All'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === activeCategory);

  return (
    <section id="studio" className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full scroll-mt-20">
      <div id="treatments" className="scroll-mt-24" />
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium mb-2 sm:mb-3">
          The Healing Studio
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-black font-normal tracking-tight">
          Classical Vedic Therapies
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#6F6F6F] mt-3 sm:mt-4 leading-relaxed">
          Each protocol is preserved from the Charaka and Sushruta Samhitas, tailored specifically to your biological constitution (Prakriti) using freshly gathered botanical oils and medicinal roots.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 sm:px-5 py-2 text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer ${activeCategory === category
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-stone-100 text-[#6F6F6F] hover:bg-stone-200 hover:text-black'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Treatments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((item) => (
          <div
            key={item.id}
            id={`treatment-${item.id}`}
            className="group relative flex flex-col justify-between rounded-3xl overflow-hidden border border-black/8 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 scroll-mt-24"
          >
            {/* Image Container with subtle zoom */}
            <div className="relative h-64 w-full overflow-hidden bg-stone-100">
              <img
                src={item.image}
                alt={`${item.name} (${item.sanskritName}) - Authentic Kerala Ayurvedic Therapy at Jayamahesh Clinic, Parassala`}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-medium tracking-wide text-black uppercase">
                  {item.category}
                </span>
              </div>

              {/* Duration badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] backdrop-blur-md">
                <Clock size={12} />
                <span>{item.duration}</span>
              </div>

              {/* Title on image bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-stone-300 italic font-serif">
                  {item.sanskritName}
                </p>
                <h3 className="font-serif text-2xl font-normal text-white mt-0.5">
                  {item.name}
                </h3>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
              <div>
                <p className="text-sm text-[#6F6F6F] leading-relaxed line-clamp-3">
                  {item.shortDesc}
                </p>

                {/* Constitutional resonance */}
                <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#6F6F6F]">
                  <span className="font-medium text-black">Focus:</span>
                  <span className="italic">{item.dosha}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between gap-2 sm:gap-3">
                <button
                  onClick={() => onSelectTreatment(item)}
                  className="text-xs uppercase tracking-wider text-black font-semibold hover:text-[#0B823D] transition-colors flex items-center gap-1 cursor-pointer py-1"
                >
                  <span>Protocol Details</span>
                  <ArrowUpRight size={14} />
                </button>

                <button
                  onClick={() => onBookTreatment(item.name)}
                  className="rounded-full px-4 py-2 bg-black text-white text-xs font-medium hover:bg-[#1a1a1a] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudioSection;
