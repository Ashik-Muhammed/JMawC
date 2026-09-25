import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Sparkles, MessageCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: preselectedTreatment || 'Pulse Diagnosis & General Vaidya Consultation',
    date: '',
    timeSlot: 'Morning (09:00 AM - 11:00 AM)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = 'JM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const timeSlots = [
    'Early Morning (07:30 AM - 09:00 AM)',
    'Morning (09:00 AM - 11:00 AM)',
    'Midday (11:30 AM - 01:30 PM)',
    'Afternoon (03:00 PM - 05:00 PM)',
    'Evening Twilight (05:30 PM - 07:30 PM)',
  ];

  const therapiesList = [
    'Pulse Diagnosis & General Vaidya Consultation',
    'Shirodhara (Mind Equanimity & Sleep Restoration)',
    'Classical Panchakarma Detoxification',
    'Abhyanga & Swedana (Herbal Oil Anointment)',
    'Elakizhi & Podikizhi (Pain & Joint Therapy)',
    'Rasayana & Ojas Vitality Rejuvenation',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-rise"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 border border-black/10">
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#0B823D] font-medium flex items-center gap-1 mb-1">
                <Sparkles size={14} /> Sanctuary Reservation
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-black">
                Reserve Your Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6F6F] mt-1 leading-relaxed">
                Connect with our Senior Vaidyas for authentic pulse diagnosis and bespoke Ayurvedic rejuvenation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/15 text-sm text-black focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98470 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/15 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/15 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                  Desired Therapy or Consultation
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm text-black bg-white focus:outline-none focus:border-black transition-colors"
                >
                  {therapiesList.map((t, idx) => (
                    <option key={idx} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3.5 top-3.5 text-stone-400 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/15 text-sm text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3.5 top-3.5 text-stone-400 pointer-events-none" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-black/15 text-sm text-black bg-white focus:outline-none focus:border-black transition-colors"
                    >
                      {timeSlots.map((ts, i) => (
                        <option key={i} value={ts}>
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Health Notes */}
              <div>
                <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                  Health Context or Key Concerns (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. chronic backache, sleep issues, digestive sluggishness..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-sm text-black focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full py-4 bg-black text-white text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg"
                >
                  Confirm Sanctuary Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#0B823D] mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 size={36} />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-[#0B823D] font-semibold">
              Reservation Confirmed
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-black font-normal mt-1">
              Namaste, {formData.name}
            </h3>

            <p className="text-sm text-[#6F6F6F] mt-2 max-w-md mx-auto">
              Your consultation request has been received by our clinic coordinators. Our senior Vaidya desk will reach out shortly.
            </p>

            {/* Reference Box */}
            <div className="mt-6 p-5 rounded-2xl bg-stone-50 border border-black/5 max-w-md mx-auto text-left space-y-2 text-xs text-[#555555]">
              <div className="flex justify-between">
                <span className="text-[#888888]">Reference Code:</span>
                <span className="font-mono font-bold text-black">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888888]">Therapy:</span>
                <span className="font-medium text-black">{formData.treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888888]">Date &amp; Slot:</span>
                <span className="font-medium text-black">{formData.date || 'To be confirmed'} • {formData.timeSlot}</span>
              </div>
            </div>

            {/* WhatsApp & Done Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919847000000?text=Hello%20Jayamahesh%20Ayurveda,%20I%20have%20booked%20reference%20${bookingRef}%20for%20${encodeURIComponent(formData.treatment)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-full px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Instant WhatsApp Connect</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto rounded-full px-6 py-3 bg-stone-100 hover:bg-stone-200 text-black text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultationModal;
