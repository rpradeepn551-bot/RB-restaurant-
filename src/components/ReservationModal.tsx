import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { ReservationDetails } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState<ReservationDetails>({
    guests: 2,
    date: '2026-09-25',
    time: '19:30',
    seatingArea: 'Main Dining Hall',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  if (!isOpen) return null;

  const timeSlots = [
    '12:30 PM',
    '01:15 PM',
    '02:00 PM',
    '06:30 PM',
    '07:15 PM',
    '08:00 PM',
    '08:45 PM',
    '09:30 PM',
  ];

  const seatingOptions: ReservationDetails['seatingArea'][] = [
    'Main Dining Hall',
    "Chef's Counter",
    'Royal Verandah',
    'Private Maharaja Chamber',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#091C14] text-[#F5F0E6] rounded-3xl border border-[#214D3C] shadow-2xl overflow-hidden">
        {/* Modal Top Decorative Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#D4A24C] via-[#1F4D3C] to-[#D4A24C]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#112E22] hover:bg-[#1A4232] text-[#E0DACE] hover:text-[#D4A24C] border border-[#214D3C] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.25em] text-[#D4A24C] uppercase mb-1">
                <Sparkles className="w-3 h-3" />
                <span>EXPERIENCE REGAL HOSPITALITY</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#F5F0E6]">
                Reserve Your Table at RB
              </h3>
              <p className="text-xs sm:text-sm text-[#A0B8AB] mt-1">
                Tables are held for 15 minutes past reservation time. Formal or smart elegant dress code is recommended.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Guest Count Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                  Number of Guests
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setFormData({ ...formData, guests: num })}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                        formData.guests === num
                          ? 'bg-[#D4A24C] text-[#0A1A14] shadow-md'
                          : 'bg-[#0E2B1F] text-[#E0DACE] hover:bg-[#163D2D] border border-[#1A4734]'
                      }`}
                    >
                      {num} {num === 8 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0E2B1F] border border-[#1E4D39] text-sm text-[#F5F0E6] focus:outline-none focus:border-[#D4A24C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                    Seating Area
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        seatingArea: e.target.value as ReservationDetails['seatingArea'],
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E2B1F] border border-[#1E4D39] text-sm text-[#F5F0E6] focus:outline-none focus:border-[#D4A24C]"
                  >
                    {seatingOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#091C14]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-2">
                  Select Time
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                        formData.time === slot
                          ? 'bg-[#D4A24C] text-[#0A1A14] font-bold shadow'
                          : 'bg-[#0E2B1F] text-[#D1DFD8] hover:bg-[#163D2D] border border-[#1A4734]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rathore"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E2B1F] border border-[#1E4D39] text-sm text-[#F5F0E6] placeholder-[#6E877B] focus:outline-none focus:border-[#D4A24C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0E2B1F] border border-[#1E4D39] text-sm text-[#F5F0E6] placeholder-[#6E877B] focus:outline-none focus:border-[#D4A24C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="vikram@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0E2B1F] border border-[#1E4D39] text-sm text-[#F5F0E6] placeholder-[#6E877B] focus:outline-none focus:border-[#D4A24C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#D4A24C] mb-1.5">
                  Special Notes / Dietary Preferences (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Anniversary celebration, Jain food requirement, quiet table..."
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#0E2B1F] border border-[#1E4D39] text-sm text-[#F5F0E6] placeholder-[#6E877B] focus:outline-none focus:border-[#D4A24C]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="confirm-reservation-btn"
                  className="w-full py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#D4A24C] hover:bg-[#E5B65E] text-[#0A1A14] shadow-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>CONFIRM RESERVATION</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Pass View */
          <div className="p-8 sm:p-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#D4A24C]/20 border-2 border-[#D4A24C] flex items-center justify-center text-[#D4A24C] mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[11px] uppercase tracking-[0.28em] text-[#D4A24C] font-bold">
              RESERVATION CONFIRMED
            </span>
            <h3 className="font-serif-display text-3xl font-bold text-white mt-1 mb-2">
              We Await Your Presence
            </h3>
            <p className="text-sm text-[#9BB3A5] max-w-md mb-6">
              A confirmation concierge letter has been sent to{' '}
              <span className="text-[#D4A24C] font-medium">{formData.email || 'your email'}</span>.
            </p>

            {/* Ticket Card */}
            <div className="w-full bg-[#0E2A1E] border border-[#1E4D39] rounded-2xl p-6 text-left mb-6 space-y-3">
              <div className="flex justify-between items-center border-b border-[#184232] pb-3">
                <span className="text-xs text-[#8FA89A]">Guest Name</span>
                <span className="text-sm font-bold text-white">{formData.fullName || 'Valued Guest'}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#184232] pb-3">
                <span className="text-xs text-[#8FA89A]">Date & Time</span>
                <span className="text-sm font-bold text-[#D4A24C]">
                  {formData.date} at {formData.time}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#184232] pb-3">
                <span className="text-xs text-[#8FA89A]">Party Size</span>
                <span className="text-sm font-bold text-white">{formData.guests} Guests</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#8FA89A]">Seating Area</span>
                <span className="text-sm font-bold text-white">{formData.seatingArea}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase bg-[#D4A24C] text-[#0A1A14] hover:bg-[#E5B65E] transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
