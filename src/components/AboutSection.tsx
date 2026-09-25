import React from 'react';
import { Sparkles, ShieldCheck, Leaf, HeartHandshake, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenDoshaQuiz: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onOpenDoshaQuiz,
}) => {
  return (
    <section id="about" className="py-28 bg-stone-50/60 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Intro Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium">
              Lineage &amp; Sanctuary
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-black font-normal tracking-tight leading-[1.05]">
              Where ancient medicine meets unbroken{' '}
              <span className="italic text-[#6F6F6F] font-serif">stillness.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6F6F6F] leading-relaxed">
              At Jayamahesh Ayurveda and Wellness Clinic, healing is not an industrial assembly line; it is a sacred pilgrimage back to biological equilibrium. Rooted in the Ashtavaidya and Palakkad traditions of Kerala, we practice classical Ayurveda in its unadulterated form.
            </p>
            <p className="text-base text-[#6F6F6F] leading-relaxed">
              Every therapeutic oil is prepared inside our traditional apothecaries—slow-simmered in copper cauldrons with mountain herbs, unpasteurized milk, and stone-pressed sesame base. Guided by pulse masters, each guest is treated not as a set of symptoms, but as an interplay of space, air, fire, water, and earth.
            </p>

            {/* Philosophy quote */}
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm italic text-[#333333] font-serif text-lg leading-relaxed relative">
              <span className="text-4xl text-[#0B823D] leading-none absolute -top-3 left-4 font-serif">“</span>
              <p className="pt-2">
                True health is not merely the absence of disease, but a joyful awareness where digestion is strong, tissues are nourished, emotions are clear, and the soul resides in peace.
              </p>
              <p className="text-xs uppercase tracking-widest text-[#6F6F6F] not-italic font-sans mt-3 font-medium">
                — Sushruta Samhita, Sutrasthana
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="rounded-full px-8 py-3.5 bg-black text-white text-sm font-medium hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
              >
                Schedule Consultation
              </button>
              <button
                onClick={onOpenDoshaQuiz}
                className="rounded-full px-6 py-3.5 bg-white border border-black/15 text-black text-sm font-medium hover:border-black/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Discover Your Dosha Profile
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/10">
              <img
                src="/images/ayurveda_hero_sanctuary_1790273136594.jpg"
                alt="Ayurveda Sanctuary Ambiance"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-[#A4E24A] font-medium">
                  The Healing Grounds
                </span>
                <p className="font-serif text-2xl font-normal mt-1">
                  Tranquil private pavilions surrounded by sacred medicinal greenery
                </p>
              </div>
            </div>

            {/* Floating Glass Pill Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-black/10 max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B823D]/10 flex items-center justify-center text-[#0B823D]">
                  <Award size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-black uppercase tracking-wider">
                    NABH Accredited
                  </p>
                  <p className="text-[11px] text-[#6F6F6F]">
                    Authentic Traditional Ayurveda Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-black/10">
          <div className="p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <Leaf size={20} />
            </div>
            <h3 className="font-serif text-xl font-normal text-black mb-2">
              72-Hour Herbal Decoctions
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              Oils hand-crafted with up to 48 sacred forest herbs, slow-simmered over wood flames following classical texts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <HeartHandshake size={20} />
            </div>
            <h3 className="font-serif text-xl font-normal text-black mb-2">
              Bespoke Prakriti Alignment
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              Zero cookie-cutter remedies. Every dietary regimen and herb dosage is tailored to your unique bio-energy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-serif text-xl font-normal text-black mb-2">
              Master Classical Vaidyas
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              Led by Dr. Jaya Mahesh and senior practitioners with decades of deep clinical and pulse diagnostics mastery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-serif text-xl font-normal text-black mb-2">
              Deep Sensory Stillness
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              A tranquil environment free of digital noise, allowing your parasympathetic nervous system to initiate self-repair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
