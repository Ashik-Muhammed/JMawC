import React from 'react';
import { Treatment } from '../data/therapies';
import { X, Clock, HeartHandshake, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookNow: (treatmentName: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onBookNow,
}) => {
  if (!treatment) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-rise"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col border border-black/10">
        {/* Header Image with close button */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100 flex-shrink-0">
          <img
            src={treatment.image}
            alt={treatment.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A4E24A] font-medium">
              {treatment.category} • {treatment.dosha}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal mt-1 leading-tight">
              {treatment.name}
            </h3>
            <p className="text-sm text-stone-200 mt-1 italic font-serif">
              {treatment.sanskritName}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#000000]">
          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-black/5 text-sm text-[#6F6F6F]">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#0B823D]" />
              <span className="font-medium text-black">Duration:</span> {treatment.duration}
            </div>
            <div className="hidden sm:block text-stone-300">|</div>
            <div className="flex items-center gap-2">
              <HeartHandshake size={16} className="text-[#0B823D]" />
              <span className="font-medium text-black">Constitutional Effect:</span> {treatment.dosha}
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F] font-semibold mb-2">
              Clinical Overview
            </h4>
            <p className="text-base leading-relaxed text-[#333333]">
              {treatment.fullDesc}
            </p>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F] font-semibold mb-3">
              Therapeutic Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#444444]">
                  <CheckCircle2 size={16} className="text-[#0B823D] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Protocol Steps */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F] font-semibold mb-3">
              Treatment Protocol Journey
            </h4>
            <div className="space-y-2">
              {treatment.protocolSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 text-sm text-[#444444]">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-serif flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botanical Formulations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#6F6F6F] font-semibold mb-2">
              Sacred Botanical Infusions
            </h4>
            <div className="flex flex-wrap gap-2">
              {treatment.herbalKeynotes.map((herb, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-emerald-50 text-[#075E2B] border border-emerald-200/50"
                >
                  🌿 {herb}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-stone-50 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#6F6F6F]">Personalized by our Senior Vaidyas</p>
            <p className="text-sm font-medium text-black">Private Sanctuary Treatment Rooms</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookNow(treatment.name);
            }}
            className="w-full sm:w-auto rounded-full px-8 py-3.5 bg-black text-white text-sm font-medium hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <span>Book This Therapy</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetailModal;
