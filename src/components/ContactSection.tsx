import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Sparkles, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Table Reservation & Dining',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Table Reservation & Dining',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#06120D] text-[#F5F0E6] relative border-t border-[#163627] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4A24C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0F3D2E]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-[#D4A24C] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH ROYAL HOSPITALITY</span>
          </div>
          <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact Our Concierge
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4A24C] to-transparent mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#BACDC2] font-sans-ui leading-relaxed">
            Have a question regarding private banquets, royal catering, dietary preferences, or reservations? Our maître d' and culinary team are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0A1A14] p-8 rounded-2xl border border-[#1E4535] shadow-xl">
              <h3 className="font-serif-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#D4A24C]" />
                <span>Instant Concierge Direct</span>
              </h3>

              <div className="space-y-6 text-sm text-[#BACDC2]">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12382B] flex items-center justify-center text-[#D4A24C] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4A24C] font-semibold block">
                      Direct Concierge Call
                    </span>
                    <a
                      href="tel:+918007243463"
                      className="text-base font-bold text-white hover:text-[#D4A24C] transition-colors block mt-0.5"
                    >
                      +91 (800) 724-3463 / +91 98450 12345
                    </a>
                    <span className="text-xs text-[#8BA496]">Available 10:00 AM – 11:30 PM Daily</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12382B] flex items-center justify-center text-[#D4A24C] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4A24C] font-semibold block">
                      Email Reservations
                    </span>
                    <a
                      href="mailto:concierge@rbrestaurant.com"
                      className="text-base font-bold text-white hover:text-[#D4A24C] transition-colors block mt-0.5"
                    >
                      concierge@rbrestaurant.com
                    </a>
                    <span className="text-xs text-[#8BA496]">Inquiries answered within 2 hours</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12382B] flex items-center justify-center text-[#D4A24C] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4A24C] font-semibold block">
                      Royal Address
                    </span>
                    <p className="text-white font-medium mt-0.5">
                      RB House of Ancient Flavours, 142 Royal Crescent, Heritage Fine Dining District
                    </p>
                    <span className="text-xs text-[#8BA496]">Valet parking & private chauffeur bay available</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#12382B] flex items-center justify-center text-[#D4A24C] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#D4A24C] font-semibold block">
                      Dining Hours
                    </span>
                    <p className="text-white font-medium mt-0.5">
                      Lunch: 12:00 PM – 3:30 PM <br />
                      Dinner: 6:30 PM – 11:30 PM
                    </p>
                    <span className="text-xs text-[#D4A24C]">Open 7 Days a Week Including Holidays</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#173D2E]">
                <a
                  href="tel:+918007243463"
                  className="py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#D4A24C] text-[#0A1A14] flex items-center justify-center gap-2 hover:bg-[#E5B65E] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918007243463?text=Namaste!%20I%20would%20like%20to%20inquire%20about%20dining%20at%20RB%20Restaurant."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase bg-[#12382B] hover:bg-[#184837] text-white flex items-center justify-center gap-2 border border-[#275A44] transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#D4A24C]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#0A1A14] p-8 sm:p-10 rounded-2xl border border-[#1E4535] shadow-2xl">
            <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
              Send a Message to the Kitchen & Maître d'
            </h3>
            <p className="text-xs sm:text-sm text-[#8BA496] mb-8">
              Fill out your details below and our team will get back to you immediately.
            </p>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#123B2C] border-2 border-[#D4A24C] flex items-center justify-center text-[#D4A24C] mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4A24C] font-bold">
                  MESSAGE DISPATCHED
                </span>
                <h4 className="font-serif-display text-2xl font-bold text-white mt-1 mb-2">
                  Thank You for Writing to Us
                </h4>
                <p className="text-sm text-[#A0B8AA] max-w-md">
                  Our Guest Experience Manager has received your request. We will contact you promptly with our traditional royal hospitality.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maharaja Vikram Singh"
                      className="w-full px-4 py-3 rounded-xl bg-[#06140E] border border-[#1C4635] text-sm text-white placeholder-[#4E6D5F] focus:outline-none focus:border-[#D4A24C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#06140E] border border-[#1C4635] text-sm text-white placeholder-[#4E6D5F] focus:outline-none focus:border-[#D4A24C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#06140E] border border-[#1C4635] text-sm text-white placeholder-[#4E6D5F] focus:outline-none focus:border-[#D4A24C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#06140E] border border-[#1C4635] text-sm text-white focus:outline-none focus:border-[#D4A24C] transition-colors"
                    >
                      <option value="Table Reservation & Dining">Table Reservation & Dining</option>
                      <option value="Private Banquet & Celebrations">Private Banquet & Celebrations</option>
                      <option value="Outdoor Catering Services">Outdoor Catering Services</option>
                      <option value="Dietary & Allergen Inquiries">Dietary & Allergen Inquiries</option>
                      <option value="Special Offers & Corporate Bookings">Special Offers & Corporate Bookings</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                    Your Message / Special Requests *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we may curate your dining experience..."
                    className="w-full px-4 py-3 rounded-xl bg-[#06140E] border border-[#1C4635] text-sm text-white placeholder-[#4E6D5F] focus:outline-none focus:border-[#D4A24C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  id="contact-form-submit-btn"
                  className="w-full py-4 rounded-xl text-xs font-bold tracking-[0.2em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'SENDING INQUIRY...' : 'DISPATCH MESSAGE TO CONCIERGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
