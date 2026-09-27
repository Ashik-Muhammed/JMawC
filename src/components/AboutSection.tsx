import React from 'react';
import { Sparkles, ShieldCheck, Leaf, HeartHandshake, Award, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
  onOpenDoshaQuiz: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenBooking,
  onOpenDoshaQuiz,
}) => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-28 bg-stone-50/60 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Intro Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium">
              Lineage &amp; Vaidyas
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-black font-normal tracking-tight leading-[1.05]">
              Where ancient medicine meets unbroken{' '}
              <span className="italic text-[#6F6F6F] font-serif">stillness.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6F6F6F] leading-relaxed">
              At Jayamahesh Ayurveda and Wellness Clinic, healing is not an industrial assembly line; it is a sacred pilgrimage back to biological equilibrium. Rooted in the authentic Ashtavaidya and classical traditions of Kerala, we practice time-tested Ayurveda in its unadulterated form.
            </p>
            <p className="text-sm sm:text-base text-[#6F6F6F] leading-relaxed">
              Every therapeutic oil is prepared inside our traditional apothecaries—slow-simmered in copper cauldrons with mountain herbs, unpasteurized milk, and stone-pressed sesame base. Guided by pulse masters, each guest is treated not as a set of symptoms, but as an interplay of space, air, fire, water, and earth.
            </p>

            {/* Philosophy quote */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 shadow-sm italic text-[#333333] font-serif text-base sm:text-lg leading-relaxed relative">
              <span className="text-3xl sm:text-4xl text-[#0B823D] leading-none absolute -top-3 left-4 font-serif">“</span>
              <p className="pt-2">
                True health is not merely the absence of disease, but a joyful awareness where digestion is strong, tissues are nourished, emotions are clear, and the soul resides in peace.
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#6F6F6F] not-italic font-sans mt-3 font-medium">
                — Sushruta Samhita, Sutrasthana
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto text-center justify-center rounded-full px-8 py-3.5 bg-black text-white text-sm font-medium hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-md"
              >
                Schedule Consultation
              </button>
              <button
                onClick={onOpenDoshaQuiz}
                className="w-full sm:w-auto text-center justify-center rounded-full px-6 py-3.5 bg-white border border-black/15 text-black text-sm font-medium hover:border-black/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Discover Your Dosha Profile
              </button>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-black/10">
              <img
                src="/images/ayurveda_hero_sanctuary_1790273136594.jpg"
                alt="Jayamahesh Ayurveda Sanctuary and Medicinal Greenery in Parassala Kerala"
                loading="lazy"
                className="w-full h-[280px] xs:h-[360px] sm:h-[440px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#A4E24A] font-medium">
                  The Healing Grounds
                </span>
                <p className="font-serif text-xl sm:text-2xl font-normal mt-1">
                  Tranquil private pavilions surrounded by sacred medicinal greenery
                </p>
              </div>
            </div>

            {/* Responsive Tradition Badge */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-md sm:shadow-xl border border-black/10 sm:max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B823D]/10 flex items-center justify-center text-[#0B823D] shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-black uppercase tracking-wider">
                    Classical Tradition
                  </p>
                  <p className="text-[11px] text-[#6F6F6F]">
                    Authentic Kerala Ayurvedic Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Doctors & Therapists Section */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-20 border-t border-black/10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#0B823D] font-medium mb-2">
              Clinical Team &amp; Healers
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-black font-normal tracking-tight">
              Our Doctors &amp; Practitioners
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#6F6F6F] mt-2 sm:mt-3 leading-relaxed">
              Every therapeutic journey is medically supervised and personalized by certified Ayurvedic physicians and experienced traditional therapists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Dr. Jayalekshmi */}
            <div className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/dr_jayalekshmi.jpg"
                  alt="Dr. Jayalekshmi (M.D, B.A.M.S) - Senior Ayurvedic Physician & Nadi Pariksha Specialist Parassala"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-black uppercase">
                    Chief Physician
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-[#A4E24A] font-medium uppercase tracking-wider block">
                    M.D, B.A.M.S
                  </span>
                  <h4 className="font-serif text-2xl font-normal text-white mt-0.5">
                    Dr. Jayalekshmi
                  </h4>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#0B823D] font-semibold mb-1">
                    Senior Ayurvedic Doctor &amp; Vaidya
                  </p>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed">
                    Oversees clinical diagnosis, pulse evaluation (Nadi Pariksha), and custom medicinal formulations. Brings rigorous academic and clinical mastery to chronic disease management.
                  </p>
                </div>
                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#888888]">
                  <span>Specialization:</span>
                  <span className="font-medium text-black">Nadi Pariksha &amp; Medicine</span>
                </div>
              </div>
            </div>

            {/* Maya */}
            <div className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/therapist_maya.jpg"
                  alt="Maya - Classical Ayurvedic Therapist at Jayamahesh Clinic"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-black uppercase">
                    Therapist
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-[#A4E24A] font-medium uppercase tracking-wider block">
                    Classical Practitioner
                  </span>
                  <h4 className="font-serif text-2xl font-normal text-white mt-0.5">
                    Maya
                  </h4>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#0B823D] font-semibold mb-1">
                    Senior Ayurvedic Therapist
                  </p>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed">
                    Master of deep rhythmic oleation therapies. Specializes in Shirodhara streaming, cranial Marma rejuvenation, and synchronized full-body Abhyangam massage.
                  </p>
                </div>
                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#888888]">
                  <span>Specialization:</span>
                  <span className="font-medium text-black">Shirodhara &amp; Abhyangam</span>
                </div>
              </div>
            </div>

            {/* Rajalekshmi */}
            <div className="bg-white rounded-3xl overflow-hidden border border-black/8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-stone-100">
                <img
                  src="/images/therapist_rajalekshmi.jpg"
                  alt="Rajalekshmi - Classical Ayurvedic Therapist at Jayamahesh Clinic"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-black uppercase">
                    Therapist
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-[#A4E24A] font-medium uppercase tracking-wider block">
                    Classical Practitioner
                  </span>
                  <h4 className="font-serif text-2xl font-normal text-white mt-0.5">
                    Rajalekshmi
                  </h4>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#0B823D] font-semibold mb-1">
                    Senior Ayurvedic Therapist
                  </p>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed">
                    Specialist in spinal restoration, warm herbal bolus compresses (Kizhi), royal continuous oil streaming (Pizhichil), and localized dough reservoirs (Kadivasthi).
                  </p>
                </div>
                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs text-[#888888]">
                  <span>Specialization:</span>
                  <span className="font-medium text-black">Pizhichil, Kizhi &amp; Kadivasthi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 sm:mt-20 pt-10 sm:pt-16 border-t border-black/10">
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <Leaf size={20} />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-black mb-2">
              72-Hour Herbal Decoctions
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              Oils hand-crafted with up to 48 sacred forest herbs, slow-simmered over wood flames following classical texts.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <HeartHandshake size={20} />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-black mb-2">
              Bespoke Prakriti Alignment
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              Zero cookie-cutter remedies. Every dietary regimen and herb dosage is tailored to your unique bio-energy.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-black mb-2">
              Master Classical Vaidyas
            </h3>
            <p className="text-xs text-[#6F6F6F] leading-relaxed">
              Led by Dr. Jayalekshmi (M.D, B.A.M.S) with deep clinical diagnostics and pulse-reading expertise.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-colors">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-normal text-black mb-2">
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
