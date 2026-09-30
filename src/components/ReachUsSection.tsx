import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, CheckCircle2, ExternalLink, Check } from 'lucide-react';

interface ReachUsSectionProps {
  onOpenBooking: () => void;
}

export const ReachUsSection: React.FC<ReachUsSectionProps> = ({ onOpenBooking }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Vaidya Consultation & Pulse Reading',
    message: '',
  });

  const faqs = [
    {
      q: 'Where is Jayamahesh Ayurveda located?',
      a: 'We are situated on Temple Road, near Sree Mahadeva Temple in Parassala, Kerala 695502, just off the Salem - Kochi - Kanyakumari Highway (NH 66). You can find us using Plus Code 85R4+79Q Parassala on Google Maps.',
    },
    {
      q: 'Do I need an advance appointment for treatments?',
      a: 'Yes, to preserve the tranquil, unhurried environment of our sanctuary and ensure adequate preparation time for authentic medicated decoctions and warm oils, all consultations and treatments are by prior appointment.',
    },
    {
      q: 'Are your medicated oils authentic and organic?',
      a: 'All oils, decoctions, and lehyams are prepared according to strict classical formulations in copper vessels using hand-gathered forest herbs and organic stone-pressed sesame and coconut bases.',
    },
    {
      q: 'Can I combine multiple Ayurvedic therapies in one day?',
      a: 'Yes, our Senior Vaidyas formulate synergistic daily programs (e.g., Abhyangam followed by Kizhi or Shirodhara) according to your personal constitutional tolerance and clinical goals.',
    },
  ];

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

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

  const handleNameChange = (val: string) => {
    const sanitized = val.replace(/[^a-zA-Z\s.'-]/g, '');
    setFormData((prev) => ({ ...prev, name: sanitized }));
    if (touched.name) {
      setErrors((prev) => ({ ...prev, name: validateName(sanitized) }));
    }
  };

  const handlePhoneChange = (val: string) => {
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

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameErr = validateName(formData.name);
    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);

    setTouched({ name: true, phone: true, email: true });
    setErrors({ name: nameErr, phone: phoneErr, email: emailErr });

    if (nameErr || phoneErr || emailErr) {
      return;
    }

    setFormSubmitted(true);
  };

  const googleMapsUrl =
    'https://www.google.com/maps/place/JayaMahesh+Ayurveda/@8.3404361,77.1536364,17z/data=!4m6!3m5!1s0x3b05abb5de58e9a9:0xe7a1f43e7d0dc5d9!8m2!3d8.3404308!4d77.1562113!16s%2Fg%2F11v5bkdzhl';
  return (
    <section id="reach-us" className="py-16 sm:py-24 md:py-28 bg-stone-50/70 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium mb-2 sm:mb-3">
            Sanctuary Coordinates
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-black font-normal tracking-tight">
            Reach Our Vaidyas
          </h2>
          <p className="text-sm sm:text-base text-[#6F6F6F] mt-3 sm:mt-4 leading-relaxed">
            Whether seeking relief from chronic distress or yearning for quiet physical renewal, our sanctuary doors are open.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Clinic Contact Details, Map & FAQ */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Address */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-normal text-black mb-1">
                    Sanctuary Address
                  </h4>
                  <p className="text-xs font-semibold text-black leading-relaxed">
                    Jayamahesh Ayurveda
                  </p>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed mt-0.5">
                    Temple Road, near Sree Mahadeva Temple,<br />
                    Parassala, Kerala – 695502
                  </p>
                  <div className="mt-2 pt-2 border-t border-black/5 text-[11px] text-[#888888] leading-tight">
                    <span>Salem - Kochi - Kanyakumari Hwy</span>
                    <span className="block font-mono text-[#0B823D] mt-0.5">Plus Code: 85R4+79Q</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#0B823D] font-medium hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Card 2: Hours */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-normal text-black mb-1">
                    Sanctuary Hours
                  </h4>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed">
                    Monday – Sunday<br />
                    <span className="text-black font-medium">07:30 AM – 07:30 PM IST</span><br />
                    By Prior Appointment Only
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] text-[#888888]">
                  Open all 7 days for inpatient &amp; outpatient sessions.
                </div>
              </div>

              {/* Card 3: Phone */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-normal text-black mb-1">
                    Direct Inquiries
                  </h4>
                  <p className="text-sm font-semibold text-black mt-1">
                    <a href="tel:+919443861260" className="hover:text-[#0B823D] transition-colors">
                      +91 94438 61260
                    </a>
                  </p>
                  <p className="text-xs text-[#6F6F6F] mt-1 leading-relaxed">
                    Direct clinic line for appointment confirmations and Vaidya availability.
                  </p>
                  <p className="text-xs text-[#6F6F6F] mt-1.5 pt-1.5 border-t border-black/5">
                    <a href="mailto:jayamaheshadmin@gmail.com" className="hover:text-black transition-colors">
                      jayamaheshadmin@gmail.com
                    </a>
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                  <a
                    href="tel:+919443861260"
                    className="text-xs text-[#0B823D] font-medium hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Call Sanctuary</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a
                    href="mailto:jayamaheshadmin@gmail.com"
                    className="text-xs text-[#6F6F6F] hover:text-black hover:underline"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Card 4: WhatsApp */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                    <MessageCircle size={20} />
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-normal text-black mb-1">
                    WhatsApp Concierge
                  </h4>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed">
                    Message us directly for consultation slots, route guidance, and treatment questions.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/5">
                  <a
                    href="https://wa.me/919443861260?text=Hello%20Jayamahesh%20Ayurveda,%20I%20would%20like%20to%20inquire%20about%20treatments%20and%20consultations."
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#0B823D] font-medium hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Chat on WhatsApp</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-white">
              <div className="p-3.5 sm:p-4 bg-stone-50/90 border-b border-black/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B823D] animate-pulse" />
                  <span className="font-medium text-black">Location Map</span>
                  <span className="text-[#6F6F6F] hidden sm:inline">• Near Sree Mahadeva Temple, Parassala</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0B823D] hover:underline font-medium inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
              <div className="relative h-48 sm:h-60 w-full bg-stone-100">
                <iframe
                  title="Jayamahesh Ayurveda Location Map"
                  src="https://www.google.com/maps/place/JayaMahesh+Ayurveda/@8.3404361,77.1536364,17z/data=!4m6!3m5!1s0x3b05abb5de58e9a9:0xe7a1f43e7d0dc5d9!8m2!3d8.3404308!4d77.1562113!16s%2Fg%2F11v5bkdzhl"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="pt-2">
              <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#6F6F6F] font-semibold mb-3 sm:mb-4">
                Frequently Addressed Inquiries
              </h4>
              <div className="space-y-2.5 sm:space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-black/10 bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between text-xs sm:text-sm font-medium text-black cursor-pointer"
                      >
                        <span className="pr-3 sm:pr-4">{faq.q}</span>
                        <ChevronDown
                          size={16}
                          className={`text-stone-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-black' : ''
                            }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-[#6F6F6F] leading-relaxed border-t border-black/5 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Quick Booking / Inquiry Box */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-black/10 shadow-xl lg:sticky lg:top-28">
              {!formSubmitted ? (
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#0B823D] font-medium block mb-1.5 sm:mb-2">
                    Priority Direct Booking
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black mb-2">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed mb-5 sm:mb-6">
                    Fill in your details below and our patient coordinator will confirm your session within 2 hours.
                  </p>

                  <form onSubmit={handleInlineSubmit} className="space-y-3.5 sm:space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
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
                        <input
                          type="text"
                          required
                          placeholder="e.g. Eleanor Vance (letters only)"
                          value={formData.name}
                          onChange={(e) => handleNameChange(e.target.value)}
                          onBlur={() => handleBlur('name')}
                          className={`w-full px-4 py-3 pr-9 rounded-xl border text-base sm:text-sm focus:outline-none transition-colors ${
                            touched.name && errors.name
                              ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                              : touched.name && formData.name && !errors.name
                              ? 'border-emerald-500/60 focus:border-[#0B823D]'
                              : 'border-black/15 focus:border-black'
                          }`}
                        />
                        {touched.name && !errors.name && formData.name && (
                          <Check size={16} className="absolute right-3 top-3.5 text-[#0B823D]" />
                        )}
                      </div>
                      {touched.name && errors.name && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                          <span>•</span> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={10}
                            required
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            className={`w-full px-4 py-3 pr-9 rounded-xl border text-base sm:text-sm focus:outline-none transition-colors ${
                              touched.phone && errors.phone
                                ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                                : touched.phone && formData.phone.length === 10 && !errors.phone
                                ? 'border-emerald-500/60 focus:border-[#0B823D]'
                                : 'border-black/15 focus:border-black'
                            }`}
                          />
                          {touched.phone && formData.phone.length === 10 && !errors.phone && (
                            <Check size={16} className="absolute right-3 top-3.5 text-[#0B823D]" />
                          )}
                        </div>
                        {touched.phone && errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                            <span>•</span> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
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
                          <input
                            type="email"
                            required
                            placeholder="eleanor@example.com"
                            value={formData.email}
                            onChange={(e) => handleEmailChange(e.target.value)}
                            onBlur={() => handleBlur('email')}
                            className={`w-full px-4 py-3 pr-9 rounded-xl border text-base sm:text-sm focus:outline-none transition-colors ${
                              touched.email && errors.email
                                ? 'border-red-500 focus:border-red-600 bg-red-50/20'
                                : touched.email && formData.email && !errors.email
                                ? 'border-emerald-500/60 focus:border-[#0B823D]'
                                : 'border-black/15 focus:border-black'
                            }`}
                          />
                          {touched.email && !errors.email && formData.email && (
                            <Check size={16} className="absolute right-3 top-3.5 text-[#0B823D]" />
                          )}
                        </div>
                        {touched.email && errors.email && (
                          <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                            <span>•</span> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1">
                        Select Therapy / Consultation
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/15 text-base sm:text-sm bg-white focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="General Vaidya Consultation & Pulse Reading">
                          General Vaidya Consultation &amp; Pulse Reading
                        </option>
                        <option value="Pizhichil (The Royal Medicated Oil Stream)">
                          Pizhichil (The Royal Medicated Oil Stream)
                        </option>
                        <option value="Dhara (Continuous Medicated Stream Therapy)">
                          Dhara (Continuous Medicated Stream Therapy)
                        </option>
                        <option value="Shirovasthi (Cranial Medicated Oil Reservoir)">
                          Shirovasthi (Cranial Medicated Oil Reservoir)
                        </option>
                        <option value="Abhyangam (Synchronized Classical Herbal Anointment)">
                          Abhyangam (Synchronized Classical Herbal Anointment)
                        </option>
                        <option value="Kizhi (Warm Botanical Bolus Poultice Therapy)">
                          Kizhi (Warm Botanical Bolus Poultice Therapy)
                        </option>
                        <option value="Kadivasthi (Sacred Lumbar Medicated Oil Pool)">
                          Kadivasthi (Sacred Lumbar Medicated Oil Pool)
                        </option>
                        <option value="Shirodhara (Continuous Meditative Oil Stream)">
                          Shirodhara (Continuous Meditative Oil Stream)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-black uppercase tracking-wider mb-1">
                        Brief Note on Health Goals
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about symptoms, desired focus, or any queries..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/15 text-base sm:text-sm focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full py-3.5 sm:py-4 bg-black text-white text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg mt-2"
                    >
                      Submit Appointment Request
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 sm:py-10 space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 text-[#0B823D] mx-auto flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6F6F] max-w-sm mx-auto leading-relaxed">
                    Your appointment request for <strong>{formData.service}</strong> has been logged. Our Ayurvedic coordinators will contact you at {formData.phone} today.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919443861260?text=${encodeURIComponent(
                        `*Jayamahesh Ayurveda - Appointment Request*\n` +
                        `----------------------------------------\n` +
                        `*Guest Name:* ${formData.name}\n` +
                        `*Phone / WhatsApp:* ${formData.phone}\n` +
                        `*Email:* ${formData.email}\n` +
                        `*Therapy / Consultation:* ${formData.service}\n` +
                        (formData.message ? `*Health Goals / Message:* ${formData.message}\n` : '') +
                        `----------------------------------------\n` +
                        `Please confirm availability for this session. Thank you!`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto rounded-full px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle size={16} />
                      <span>Send Details via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="w-full sm:w-auto rounded-full px-6 py-3 bg-stone-100 hover:bg-stone-200 text-black text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUsSection;
