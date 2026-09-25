import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

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
    service: 'Pulse Diagnosis & Vaidya Consultation',
    message: '',
  });

  const faqs = [
    {
      q: 'Do I need to fast before Nadi Pariksha (Pulse Reading)?',
      a: 'Yes, for the most accurate diagnostic reading, we recommend fasting for 2 to 3 hours prior to your pulse evaluation, and avoiding caffeine or vigorous cardio exercise immediately beforehand.',
    },
    {
      q: 'What is the minimum recommended stay for Panchakarma?',
      a: 'While short rejuvenation packages are available (3 to 5 days), true classical cellular purification requires a minimum of 7 days, with 14 or 21 days recommended for chronic conditions.',
    },
    {
      q: 'Are your medicated oils authentic and organic?',
      a: 'All oils, decoctions, and lehyams are prepared according to strict classical formulations in copper vessels using hand-gathered forest herbs and organic stone-pressed sesame and coconut bases.',
    },
    {
      q: 'Can I combine multiple Ayurvedic therapies in one day?',
      a: 'Yes, our Senior Vaidyas formulate synergistic daily programs (e.g., Abhyanga followed by Shirodhara or Swedana herbal steam) according to your current metabolic tolerance.',
    },
  ];

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            Whether seeking relief from chronic distress or yearning for quiet physical renewal, our gates are open.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Clinic Contact Details & FAQ */}
          <div className="lg:col-span-6 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Address */}
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                  <MapPin size={20} />
                </div>
                <h4 className="font-serif text-xl font-normal text-black mb-1">
                  Sanctuary Location
                </h4>
                <p className="text-xs text-[#6F6F6F] leading-relaxed">
                  Jayamahesh Ayurveda &amp; Wellness<br />
                  Palakkad Heritage Healing Valley,<br />
                  Kerala 678001, India
                </p>
              </div>

              {/* Card 2: Hours */}
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                  <Clock size={20} />
                </div>
                <h4 className="font-serif text-xl font-normal text-black mb-1">
                  Sanctuary Hours
                </h4>
                <p className="text-xs text-[#6F6F6F] leading-relaxed">
                  Monday – Sunday<br />
                  07:30 AM – 07:30 PM IST<br />
                  By Prior Appointment Only
                </p>
              </div>

              {/* Card 3: Phone */}
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0B823D] flex items-center justify-center mb-4">
                  <Phone size={20} />
                </div>
                <h4 className="font-serif text-xl font-normal text-black mb-1">
                  Direct Inquiries
                </h4>
                <p className="text-xs text-[#6F6F6F] leading-relaxed">
                  +91 98470 12345<br />
                  +91 491 2500000
                </p>
              </div>

              {/* Card 4: WhatsApp */}
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                  <MessageCircle size={20} />
                </div>
                <h4 className="font-serif text-xl font-normal text-black mb-1">
                  WhatsApp Concierge
                </h4>
                <a
                  href="https://wa.me/919847012345"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#0B823D] font-medium hover:underline inline-block mt-1"
                >
                  Direct Chat with Clinic Desk &rarr;
                </a>
              </div>
            </div>

            {/* Accordion FAQ */}
            <div className="pt-4">
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
                          className={`text-stone-400 transition-transform duration-200 shrink-0 ${
                            isOpen ? 'rotate-180 text-black' : ''
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
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-xl">
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
                          placeholder="+91 98470 00000"
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
                        <option value="Pulse Diagnosis & Vaidya Consultation">
                          Pulse Diagnosis &amp; Vaidya Consultation
                        </option>
                        <option value="Shirodhara (Nervous Rest & Third Eye Stream)">
                          Shirodhara (Nervous Rest &amp; Third Eye Stream)
                        </option>
                        <option value="Classical Panchakarma 7/14/21 Days">
                          Classical Panchakarma 7/14/21 Days
                        </option>
                        <option value="Abhyanga & Swedana Synchronized Herbal Massage">
                          Abhyanga &amp; Swedana Synchronized Herbal Massage
                        </option>
                        <option value="Elakizhi Pain & Spine Leaf Poultice">
                          Elakizhi Pain &amp; Spine Leaf Poultice
                        </option>
                        <option value="Rasayana & Longevity Protocol">
                          Rasayana &amp; Longevity Protocol
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
