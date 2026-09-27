import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';

interface DoshaQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTreatment: (treatmentName: string) => void;
}

export const DoshaQuizModal: React.FC<DoshaQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectTreatment,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<'Vata' | 'Pitta' | 'Kapha' | null>(null);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'Physical Frame & Thermal Nature',
      subtitle: 'Select the description that best mirrors your natural constitution:',
      options: [
        {
          dosha: 'Vata',
          label: 'Slender, nimble build',
          desc: 'Tend to have dry skin, cold hands/feet, and sensitive to drafty winds.',
        },
        {
          dosha: 'Pitta',
          label: 'Moderate, athletic frame',
          desc: 'Warm skin temperature, prone to flushed redness, easily perspires in heat.',
        },
        {
          dosha: 'Kapha',
          label: 'Sturdy, grounded build',
          desc: 'Soft, naturally lubricated skin, strong physical endurance, dislike cold dampness.',
        },
      ],
    },
    {
      title: 'Mental Temperament & Stress Response',
      subtitle: 'How does your consciousness typically react under strain?',
      options: [
        {
          dosha: 'Vata',
          label: 'Active, imaginative, restless',
          desc: 'Thoughts move rapidly. Under stress, mind spins with worry or restlessness.',
        },
        {
          dosha: 'Pitta',
          label: 'Decisive, ambitious, incisive',
          desc: 'Sharp intellect. Under stress, irritation, perfectionism, or impatience surface.',
        },
        {
          dosha: 'Kapha',
          label: 'Tranquil, forgiving, methodical',
          desc: 'Slow to anger and steady. Under stress, tends toward withdrawal or lethargy.',
        },
      ],
    },
    {
      title: 'Sleep Patterns & Digestive Fire (Agni)',
      subtitle: 'Observe your biological rhythms over time:',
      options: [
        {
          dosha: 'Vata',
          label: 'Variable appetite & light sleep',
          desc: 'Digestion fluctuates; sleep is light, wakeful around 2:00 - 4:00 AM.',
        },
        {
          dosha: 'Pitta',
          label: 'Strong appetite & moderate sleep',
          desc: 'Intense hunger; can become irritable if meals delayed. Sleeps soundly 6-7 hours.',
        },
        {
          dosha: 'Kapha',
          label: 'Slow, steady appetite & deep sleep',
          desc: 'Can comfortably fast; enjoys heavy, prolonged sleep and feels slow to awaken.',
        },
      ],
    },
  ];

  const handleSelectOption = (dosha: string) => {
    const updated = [...answers, dosha];
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate winner
      const counts: Record<string, number> = { Vata: 0, Pitta: 0, Kapha: 0 };
      updated.forEach((d) => {
        counts[d] = (counts[d] || 0) + 1;
      });
      let highestDosha: 'Vata' | 'Pitta' | 'Kapha' = 'Vata';
      let maxCount = -1;
      (Object.keys(counts) as Array<'Vata' | 'Pitta' | 'Kapha'>).forEach((key) => {
        if (counts[key] > maxCount) {
          maxCount = counts[key];
          highestDosha = key;
        }
      });
      setResult(highestDosha);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const doshaProfiles = {
    Vata: {
      elements: 'Ether (Space) & Air',
      qualities: 'Dry, Light, Cold, Rough, Subtle, Mobile',
      summary: 'You embody movement, creativity, and expansive perception. When balanced, you are energetic, intuitive, and radiant. When imbalanced, you may experience nervous exhaustion, insomnia, joint stiffness, and dry skin.',
      recommendedTherapy: 'Shirodhara & Abhyangam',
      lifestyleTip: 'Favor warm cooked foods, spiced golden milk, grounding daily oiling, and consistent sleep hours.',
    },
    Pitta: {
      elements: 'Fire & Water',
      qualities: 'Hot, Sharp, Light, Liquid, Spreading, Oily',
      summary: 'You embody transformation, intellect, and digestive brilliance. When balanced, you radiate courage, discernment, and leadership. When aggravated, heat manifests as inflammation, hyperacidity, irritability, or skin flushing.',
      recommendedTherapy: 'Dhara (Continuous Medicated Stream)',
      lifestyleTip: 'Favor cooling sweet herbs (fennel, coriander), moonlight walks, moderate exercise, and sweet juicy fruits.',
    },
    Kapha: {
      elements: 'Water & Earth',
      qualities: 'Heavy, Slow, Cool, Oily, Smooth, Dense, Soft',
      summary: 'You embody structural stability, lubrication, and emotional endurance. When balanced, you are loving, grounded, and resilient. When imbalanced, stagnation can lead to sluggish metabolism, fluid retention, or morning inertia.',
      recommendedTherapy: 'Kizhi (Warm Botanical Bolus Therapy)',
      lifestyleTip: 'Favor warming pungent spices (ginger, black pepper), brisk aerobic movement at sunrise, and dry light foods.',
    },
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-rise"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 md:p-10 border border-black/10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!result ? (
          <div>
            {/* Header */}
            <div className="mb-6 sm:mb-8 pr-8">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#0B823D] font-medium flex items-center gap-1.5">
                  <Sparkles size={14} />
                  Prakriti Constitution Explorer
                </span>
                <span className="text-xs text-[#6F6F6F]">
                  Question {currentStep + 1} of {questions.length}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black">
                {questions[currentStep].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6F6F] mt-1">
                {questions[currentStep].subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5 sm:space-y-3.5">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.dosha)}
                  className="w-full text-left p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-black/10 hover:border-black/40 hover:bg-stone-50/80 transition-all duration-200 group flex items-start justify-between cursor-pointer"
                >
                  <div className="pr-3 sm:pr-4">
                    <p className="font-medium text-sm sm:text-base text-black group-hover:text-[#0B823D] transition-colors">
                      {option.label}
                    </p>
                    <p className="text-xs text-[#6F6F6F] mt-1 leading-relaxed">
                      {option.desc}
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-black/20 group-hover:border-black flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-black transition-colors" />
                  </div>
                </button>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex items-center gap-2 mt-6 sm:mt-8 justify-center">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? 'w-8 bg-black'
                      : i < currentStep
                      ? 'w-4 bg-[#0B823D]'
                      : 'w-4 bg-stone-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="text-center py-2 sm:py-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0B823D]/10 text-[#0B823D] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3">
              Your Primary Doshic Imprint
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl font-normal text-black">
              Dominant {result} Prakriti
            </h3>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#6F6F6F] mt-1">
              Governed by: {doshaProfiles[result].elements}
            </p>

            <div className="mt-5 sm:mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-stone-50 border border-black/5 text-left space-y-3.5 sm:space-y-4">
              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                {doshaProfiles[result].summary}
              </p>

              <div className="pt-3 border-t border-black/5">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6F6F6F] font-semibold">
                  Personal Sanctuary Recommendation:
                </p>
                <p className="font-serif text-base sm:text-lg text-black mt-0.5">
                  {doshaProfiles[result].recommendedTherapy}
                </p>
              </div>

              <div className="pt-2">
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#6F6F6F] font-semibold">
                  Prescribed Daily Vedic Ritual:
                </p>
                <p className="text-xs text-[#555555] mt-0.5 leading-relaxed">
                  {doshaProfiles[result].lifestyleTip}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={() => {
                  onClose();
                  onSelectTreatment(doshaProfiles[result].recommendedTherapy);
                }}
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-3.5 bg-black text-white text-xs sm:text-sm font-medium hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Book Prescribed Protocol</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto rounded-full px-5 py-3.5 bg-stone-100 hover:bg-stone-200 text-black text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoshaQuizModal;
