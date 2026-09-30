import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, Sparkles, MessageCircle, Check } from 'lucide-react';

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
  const therapiesList = [
    { name: 'General Vaidya Consultation & Pulse Reading', shortName: 'General Consultation' },
    { name: 'Pizhichil (The Royal Medicated Oil Stream)', shortName: 'Pizhichil' },
    { name: 'Dhara (Continuous Medicated Stream Therapy)', shortName: 'Dhara' },
    { name: 'Shirovasthi (Cranial Medicated Oil Reservoir)', shortName: 'Shirovasthi' },
    { name: 'Abhyangam (Synchronized Classical Herbal Anointment)', shortName: 'Abhyangam' },
    { name: 'Kizhi (Warm Botanical Bolus Poultice Therapy)', shortName: 'Kizhi' },
    { name: 'Kadivasthi (Sacred Lumbar Medicated Oil Pool)', shortName: 'Kadivasthi' },
    { name: 'Shirodhara (Continuous Meditative Oil Stream)', shortName: 'Shirodhara' },
  ];

  const defaultTreatment = therapiesList[0].name;

  interface TimeSlotConfig {
    label: string;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
  }

  const TIME_SLOTS: TimeSlotConfig[] = [
    { label: 'Early Morning (07:30 AM - 09:00 AM)', startHour: 7, startMinute: 30, endHour: 9, endMinute: 0 },
    { label: 'Morning (09:00 AM - 11:00 AM)', startHour: 9, startMinute: 0, endHour: 11, endMinute: 0 },
    { label: 'Midday (11:30 AM - 01:30 PM)', startHour: 11, startMinute: 30, endHour: 13, endMinute: 30 },
    { label: 'Afternoon (03:00 PM - 05:00 PM)', startHour: 15, startMinute: 0, endHour: 17, endMinute: 0 },
    { label: 'Evening Twilight (05:30 PM - 07:30 PM)', startHour: 17, startMinute: 30, endHour: 19, endMinute: 30 },
  ];

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getTomorrowDateString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const isSlotInPast = (slot: TimeSlotConfig, selectedDate: string): boolean => {
    if (!selectedDate) return false;
    const todayStr = getTodayDateString();
    if (selectedDate < todayStr) return true;
    if (selectedDate > todayStr) return false;

    // Selected date is today: check against current local time
    const now = new Date();
    const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
    const slotStartMinutes = slot.startHour * 60 + slot.startMinute;
    return currentTotalMinutes >= slotStartMinutes;
  };

  const todayDate = getTodayDateString();

  const validateName = (name: string): string => {
    const trimmed = name.trim();
    if (!trimmed) return 'Full name is required';
    if (trimmed.length < 2) return 'Full name must be at least 2 characters';
    if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) return 'Name can only contain letters and spaces';
    return '';
  };

  const validatePhone = (phone: string): string => {
    const digits = phone.replace(/\D/g, '');
    if (!digits) return 'Phone number is required';
    if (digits.length !== 10) return `Phone number must be exactly 10 digits (${digits.length}/10 entered)`;
    if (!/^[6-9]\d{9}$/.test(digits)) return 'Please enter a valid 10-digit mobile number';
    return '';
  };

  const validateEmail = (email: string): string => {
    const trimmed = email.trim();
    if (!trimmed) return 'Email address is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) return 'Please enter a valid email address (e.g. name@domain.com)';
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: preselectedTreatment || defaultTreatment,
    date: '',
    timeSlot: 'Morning (09:00 AM - 11:00 AM)',
    notes: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (isOpen) {
      const today = getTodayDateString();
      const availableToday = TIME_SLOTS.filter((s) => !isSlotInPast(s, today));
      const defaultDate = availableToday.length > 0 ? today : getTomorrowDateString();
      const defaultSlot = availableToday.length > 0 ? availableToday[0].label : TIME_SLOTS[0].label;

      setFormData((prev) => ({
        ...prev,
        date: prev.date || defaultDate,
        timeSlot: prev.timeSlot || defaultSlot,
      }));
      setErrors({});
      setTouched({});
    } else {
      setErrors({});
      setTouched({});
    }
  }, [isOpen]);

  useEffect(() => {
    if (preselectedTreatment) {
      const match = therapiesList.find(
        (t) =>
          t.name.toLowerCase().includes(preselectedTreatment.toLowerCase()) ||
          (t.shortName && t.shortName.toLowerCase() === preselectedTreatment.toLowerCase())
      );
      setFormData((prev) => ({ ...prev, treatment: match ? match.name : preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  if (!isOpen) return null;

  const handleNameChange = (val: string) => {
    // Only letters and spaces allowed
    const sanitized = val.replace(/[^a-zA-Z\s.'-]/g, '');
    setFormData((prev) => ({ ...prev, name: sanitized }));
    if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (val: string) => {
    // Only numbers allowed, capped at 10 digits
    const digitsOnly = val.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(digitsOnly) }));
    }
  };

  const handleEmailChange = (val: string) => {
    const trimmed = val.trim();
    setFormData((prev) => ({ ...prev, email: trimmed }));
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(trimmed) }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'name') setErrors((prev) => ({ ...prev, name: validateName(formData.name) }));
    if (field === 'phone') setErrors((prev) => ({ ...prev, phone: validatePhone(formData.phone) }));
    if (field === 'email') setErrors((prev) => ({ ...prev, email: validateEmail(formData.email) }));
  };

  const handleDateChange = (selectedDate: string) => {
    const today = getTodayDateString();
    let dateErr = '';
    if (selectedDate && selectedDate < today) {
      dateErr = 'Please select today or a future date';
    }

    const availableSlots = TIME_SLOTS.filter((s) => !isSlotInPast(s, selectedDate));
    let timeErr = '';
    let updatedTimeSlot = formData.timeSlot;

    if (availableSlots.length === 0 && selectedDate === today) {
      updatedTimeSlot = '';
      timeErr = 'All appointment slots for today have concluded. Please choose tomorrow or an upcoming date.';
    } else if (availableSlots.length > 0) {
      const currentSlotConfig = TIME_SLOTS.find((s) => s.label === formData.timeSlot);
      const isCurrentPast = !currentSlotConfig || isSlotInPast(currentSlotConfig, selectedDate);
      if (isCurrentPast) {
        updatedTimeSlot = availableSlots[0].label;
      }
    }

    setErrors((prev) => ({ ...prev, date: dateErr, timeSlot: timeErr }));
    setFormData((prev) => ({
      ...prev,
      date: selectedDate,
      timeSlot: updatedTimeSlot,
    }));
  };

  const handleTimeSlotChange = (newTimeSlot: string) => {
    const slotConfig = TIME_SLOTS.find((s) => s.label === newTimeSlot);
    let timeErr = '';
    if (slotConfig && isSlotInPast(slotConfig, formData.date)) {
      timeErr = 'This time slot has already passed for today. Please select an upcoming slot.';
    }
    setErrors((prev) => ({ ...prev, timeSlot: timeErr }));
    setFormData((prev) => ({ ...prev, timeSlot: newTimeSlot }));
  };

  const generateWhatsAppUrl = (ref: string) => {
    return `https://wa.me/919443861260?text=${encodeURIComponent(
      `*Jayamahesh Ayurveda - Consultation Booking*\n` +
      `----------------------------------------\n` +
      `*Booking Reference:* ${ref}\n` +
      `*Guest Name:* ${formData.name}\n` +
      `*Phone / WhatsApp:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Therapy / Consultation:* ${formData.treatment}\n` +
      `*Preferred Date:* ${formData.date || 'Flexible / To be confirmed'}\n` +
      `*Preferred Time Slot:* ${formData.timeSlot}\n` +
      (formData.notes ? `*Health Goals / Notes:* ${formData.notes}\n` : '') +
      `----------------------------------------\n` +
      `Please confirm my consultation slot. Thank you!`
    )}`;
  };

  const generateEmailUrl = (ref: string) => {
    const subject = `Consultation Booking: ${formData.treatment} - ${formData.name} [Ref: ${ref}]`;
    const body =
      `Jayamahesh Ayurveda & Wellness - Consultation Booking Request\n\n` +
      `Booking Reference: ${ref}\n` +
      `Guest Name: ${formData.name}\n` +
      `Phone / WhatsApp: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Therapy / Consultation: ${formData.treatment}\n` +
      `Preferred Date: ${formData.date || 'Flexible / To be confirmed'}\n` +
      `Preferred Time Slot: ${formData.timeSlot}\n` +
      (formData.notes ? `Health Goals / Notes: ${formData.notes}\n\n` : '\n') +
      `Please confirm my appointment slot. Thank you!`;
    return `mailto:jayamaheshadmin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleDirectSubmit = (channel: 'whatsapp' | 'email') => {
    const today = getTodayDateString();

    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);
    const dateErr = !formData.date || formData.date < today ? 'Please select today or a future date for your consultation' : '';
    const selectedSlotConfig = TIME_SLOTS.find((s) => s.label === formData.timeSlot);
    const timeErr = !formData.timeSlot || !selectedSlotConfig || isSlotInPast(selectedSlotConfig, formData.date)
      ? 'The selected time slot has already passed. Please select an upcoming slot or future date.'
      : '';

    setTouched({ name: true, phone: true, email: true, date: true, timeSlot: true });
    setErrors({ name: nameErr, phone: phoneErr, email: emailErr, date: dateErr, timeSlot: timeErr });

    if (nameErr || phoneErr || emailErr || dateErr || timeErr) {
      return;
    }

    const refCode = 'JM-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);

    if (channel === 'whatsapp') {
      window.open(generateWhatsAppUrl(refCode), '_blank');
    } else {
      window.location.href = generateEmailUrl(refCode);
    }

    setIsSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDirectSubmit('whatsapp');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-rise"
    >
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl p-5 sm:p-8 md:p-10 border border-black/10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-stone-100 text-stone-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-5 sm:mb-6 pr-8">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#0B823D] font-medium flex items-center gap-1 mb-1">
                <Sparkles size={14} /> Sanctuary Reservation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-black">
                Reserve Your Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6F6F] mt-1 leading-relaxed">
                Consult with Dr. Jayalekshmi (M.D, B.A.M.S) and our clinical therapy team for authentic pulse diagnosis and bespoke Ayurvedic care.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Full Name */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider">
                    Full Name
                  </label>
                  {touched.name && !errors.name && formData.name && (
                    <span className="text-[10px] text-[#0B823D] font-medium flex items-center gap-1">
                      <Check size={12} /> Valid Name
                    </span>
                  )}
                </div>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name.."
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    onBlur={() => handleBlur('name')}
                    className={`w-full pl-10 pr-9 py-3 rounded-xl border text-base sm:text-sm text-black focus:outline-none transition-colors ${touched.name && errors.name
                        ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                        : touched.name && formData.name && !errors.name
                          ? 'border-emerald-500/60 focus:border-[#0B823D]'
                          : 'border-black/15 focus:border-black'
                      }`}
                  />
                  {touched.name && !errors.name && formData.name && (
                    <Check size={16} className="absolute right-3.5 top-3.5 text-[#0B823D]" />
                  )}
                </div>
                {touched.name && errors.name && (
                  <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                    <span>•</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={10}
                      required
                      placeholder="contact number"
                      value={formData.phone}
                      onChange={(e) => handlePhoneChange(e.target.value)}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full pl-10 pr-9 py-3 rounded-xl border text-base sm:text-sm text-black focus:outline-none transition-colors ${touched.phone && errors.phone
                          ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                          : touched.phone && formData.phone.length === 10 && !errors.phone
                            ? 'border-emerald-500/60 focus:border-[#0B823D]'
                            : 'border-black/15 focus:border-black'
                        }`}
                    />
                    {touched.phone && formData.phone.length === 10 && !errors.phone && (
                      <Check size={16} className="absolute right-3.5 top-3.5 text-[#0B823D]" />
                    )}
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                      <span>•</span> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider">
                      Email Address
                    </label>
                    {touched.email && !errors.email && formData.email && (
                      <span className="text-[10px] text-[#0B823D] font-medium flex items-center gap-1">
                        <Check size={12} /> Valid Email
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-3.5 text-stone-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full pl-10 pr-9 py-3 rounded-xl border text-base sm:text-sm text-black focus:outline-none transition-colors ${touched.email && errors.email
                          ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                          : touched.email && formData.email && !errors.email
                            ? 'border-emerald-500/60 focus:border-[#0B823D]'
                            : 'border-black/15 focus:border-black'
                        }`}
                    />
                    {touched.email && !errors.email && formData.email && (
                      <Check size={16} className="absolute right-3.5 top-3.5 text-[#0B823D]" />
                    )}
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                      <span>•</span> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                  Desired Therapy or Consultation
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-black/15 text-base sm:text-sm text-black bg-white focus:outline-none focus:border-black transition-colors"
                >
                  {therapiesList.map((t, idx) => (
                    <option key={idx} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar size={16} className="absolute left-3.5 top-3.5 text-stone-400 pointer-events-none" />
                    <input
                      type="date"
                      required
                      min={todayDate}
                      value={formData.date}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-base sm:text-sm text-black focus:outline-none transition-colors ${errors.date
                          ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                          : 'border-black/15 focus:border-black'
                        }`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                      <span>•</span> {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-3.5 top-3.5 text-stone-400 pointer-events-none" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => handleTimeSlotChange(e.target.value)}
                      disabled={formData.date === todayDate && TIME_SLOTS.every((s) => isSlotInPast(s, formData.date))}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-base sm:text-sm text-black bg-white focus:outline-none transition-colors ${errors.timeSlot
                          ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                          : 'border-black/15 focus:border-black'
                        } ${formData.date === todayDate && TIME_SLOTS.every((s) => isSlotInPast(s, formData.date))
                          ? 'opacity-60 cursor-not-allowed bg-stone-100'
                          : ''
                        }`}
                    >
                      {formData.date === todayDate && TIME_SLOTS.every((s) => isSlotInPast(s, formData.date)) && (
                        <option value="">No slots remaining today</option>
                      )}
                      {TIME_SLOTS.map((slot) => {
                        const isPast = isSlotInPast(slot, formData.date);
                        return (
                          <option
                            key={slot.label}
                            value={slot.label}
                            disabled={isPast}
                            className={isPast ? 'text-stone-400 bg-stone-50' : 'text-black'}
                          >
                            {slot.label} {isPast ? ' • (Passed)' : ''}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {errors.timeSlot && (
                    <div className="mt-1 space-y-1">
                      <p className="text-[11px] text-red-600 font-medium flex items-center gap-1">
                        <span>•</span> {errors.timeSlot}
                      </p>
                      {formData.date === todayDate && TIME_SLOTS.every((s) => isSlotInPast(s, formData.date)) && (
                        <button
                          type="button"
                          onClick={() => handleDateChange(getTomorrowDateString())}
                          className="text-[11px] text-[#0B823D] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          &rarr; Switch date to tomorrow ({getTomorrowDateString()})
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Health Notes */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1.5">
                  Health Context or Key Concerns (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. chronic backache, sleep issues, digestive sluggishness..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-black/15 text-base sm:text-sm text-black focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              {/* Direct Booking CTAs: WhatsApp & Email */}
              <div className="pt-2">
                <span className="block text-[11px] uppercase tracking-wider text-stone-500 font-semibold mb-2">
                  Direct Booking Confirmation Via:
                </span>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => handleDirectSubmit('whatsapp')}
                    className="flex-1 rounded-full py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageCircle size={18} />
                    <span>Book via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDirectSubmit('email')}
                    className="flex-1 rounded-full py-3.5 sm:py-4 bg-black hover:bg-stone-800 active:scale-[0.98] text-white text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Mail size={18} />
                    <span>Book via Email</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4 sm:py-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-[#0B823D] mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-[#0B823D] font-semibold">
              Reservation Dispatched
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-black font-normal mt-1">
              Namaste, {formData.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#6F6F6F] mt-2 max-w-md mx-auto">
              Your consultation booking request has been forwarded directly to our clinic coordinators. Our senior Vaidya desk will confirm your appointment shortly.
            </p>

            {/* Reference Box */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-stone-50 border border-black/5 max-w-md mx-auto text-left space-y-2 text-xs text-[#555555]">
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

            {/* WhatsApp, Email & Done Actions */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={generateWhatsAppUrl(bookingRef)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-full px-5 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Re-open WhatsApp</span>
              </a>

              <a
                href={generateEmailUrl(bookingRef)}
                className="w-full sm:w-auto rounded-full px-5 py-3 bg-black text-white text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={16} />
                <span>Re-open Email</span>
              </a>

              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto rounded-full px-5 py-3 bg-stone-100 hover:bg-stone-200 text-black text-xs uppercase tracking-wider font-semibold transition-colors"
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
