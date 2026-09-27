import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, CheckCircle2, ExternalLink } from 'lucide-react';

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

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const googleMapsUrl =
    'https://www.google.com/maps/place/JayaMahesh+Ayurveda/@8.3404361,77.1536364,17z/data=!4m6!3m5!1s0x3b05abb5de58e9a9:0xe7a1f43e7d0dc5d9!8m2!3d8.3404308!4d77.1562113!16s%2Fg%2F11v5bkdzhl';
  return (
    <section id="reach-us" className="py-28 bg-stone-50/70 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#6F6F6F] font-medium mb-3">
            Sanctuary Coordinates
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-black font-normal tracking-tight">
            Reach Our Vaidyas
          </h2>
          <p className="text-base text-[#6F6F6F] mt-4 leading-relaxed">
            Whether seeking relief from chronic distress or yearning for quiet physical renewal, our sanctuary doors are open in Parassala.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Clinic Contact Details, Map & FAQ */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Address */}
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-black mb-1">
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
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-black mb-1">
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
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-black mb-1">
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
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                    <MessageCircle size={20} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-black mb-1">
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
              <div className="p-4 bg-stone-50/90 border-b border-black/5 flex items-center justify-between text-xs">
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
              <div className="relative h-60 w-full bg-stone-100">
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
              <h4 className="text-xs uppercase tracking-widest text-[#6F6F6F] font-semibold mb-4">
                Frequently Addressed Inquiries
              </h4>
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-black/10 bg-white overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full text-left p-5 flex items-center justify-between text-sm font-medium text-black cursor-pointer"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <ChevronDown
                          size={16}
                          className={`text-stone-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-black' : ''
                            }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs text-[#6F6F6F] leading-relaxed border-t border-black/5 pt-3">
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
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-xl sticky top-28">
              {!formSubmitted ? (
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#0B823D] font-medium block mb-2">
                    Priority Direct Booking
                  </span>
                  <h3 className="font-serif text-3xl font-normal text-black mb-2">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-[#6F6F6F] leading-relaxed mb-6">
                    Fill in your details below and our patient coordinator will confirm your session within 2 hours.
                  </p>

                  <form onSubmit={handleInlineSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="eleanor@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1">
                        Select Therapy / Consultation
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm bg-white focus:outline-none focus:border-black transition-colors"
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
                      <label className="block text-xs font-semibold text-black uppercase tracking-wider mb-1">
                        Brief Note on Health Goals
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about symptoms, desired focus, or any queries..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/15 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full py-4 bg-black text-white text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg mt-2"
                    >
                      Submit Appointment Request
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-[#0B823D] mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-3xl font-normal text-black">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-sm text-[#6F6F6F] max-w-sm mx-auto leading-relaxed">
                    Your appointment request for <strong>{formData.service}</strong> has been logged. Our Ayurvedic coordinators will contact you at {formData.phone} today.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="rounded-full px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-black text-xs uppercase tracking-wider font-semibold mt-4 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
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
