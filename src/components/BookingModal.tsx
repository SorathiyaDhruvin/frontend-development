"use client";

import React, { useState } from "react";
import { TherapySiteData } from "../data/therapyData";
import { X, CheckCircle, Calendar, MapPin, Video, Phone, Mail, Clock } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: TherapySiteData;
}

export default function BookingModal({ isOpen, onClose, data }: BookingModalProps) {
  const [sessionType, setSessionType] = useState<"in-person" | "telehealth">("in-person");
  const [specialty, setSpecialty] = useState("Anxiety & Overthinking");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl border border-[#E2DBD0] relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFEAE1] hover:bg-[#E2DBD0] flex items-center justify-center text-[#1F3833] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#EEF4F1] text-[#1F3833] mx-auto flex items-center justify-center mb-6">
              <CheckCircle className="w-9 h-9 text-[#C2785C]" />
            </div>
            <h3 className="font-serif text-3xl text-[#1F3833] font-medium mb-3">
              Consultation Request Received
            </h3>
            <p className="text-sm text-[#596B64] font-light leading-relaxed mb-6 max-w-md mx-auto">
              Thank you, {formData.name || "friend"}. Dr. Maya Reynolds or our clinical intake coordinator will reach out within 24 business hours to confirm your complimentary 15-minute phone consultation.
            </p>
            <div className="bg-white rounded-2xl p-4 border border-[#E2DBD0] text-xs text-[#596B64] max-w-sm mx-auto mb-6 text-left">
              <p><strong>Session Preference:</strong> {sessionType === "in-person" ? "In-Person (Santa Monica Office)" : "Telehealth (California)"}</p>
              <p className="mt-1"><strong>Focus Area:</strong> {specialty}</p>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#1F3833] text-white text-sm font-semibold hover:bg-[#C2785C] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#C2785C] block mb-1">
                COMPLIMENTARY 15-MIN CONSULTATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F3833] font-medium">
                {data.isRedesign ? "Connect with Dr. Maya Reynolds" : "Book an Appointment"}
              </h3>
              <p className="text-xs sm:text-sm text-[#596B64] font-light mt-1">
                Take the first step toward grounded relief. Tell us a bit about what brings you to therapy.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Session Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#1F3833] uppercase tracking-wider mb-2">
                  Session Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSessionType("in-person")}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold border transition-all ${
                      sessionType === "in-person"
                        ? "bg-[#1F3833] text-white border-[#1F3833] shadow-sm"
                        : "bg-white text-[#596B64] border-[#E2DBD0] hover:border-[#1F3833]"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#C2785C]" />
                    <span>In-Person (Santa Monica)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionType("telehealth")}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold border transition-all ${
                      sessionType === "telehealth"
                        ? "bg-[#1F3833] text-white border-[#1F3833] shadow-sm"
                        : "bg-white text-[#596B64] border-[#E2DBD0] hover:border-[#1F3833]"
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#C2785C]" />
                    <span>Telehealth (California)</span>
                  </button>
                </div>
              </div>

              {/* Focus Area */}
              <div>
                <label className="block text-xs font-semibold text-[#1F3833] uppercase tracking-wider mb-1.5">
                  Primary Focus / Challenge
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full bg-white rounded-xl border border-[#E2DBD0] px-4 py-3 text-xs sm:text-sm text-[#1F3833] focus:outline-none focus:border-[#C2785C]"
                >
                  <option value="Anxiety & Overthinking">Anxiety, Constant Worry & Overthinking</option>
                  <option value="Trauma & EMDR">Trauma Processing & EMDR Therapy</option>
                  <option value="Burnout & Perfectionism">Burnout, Perfectionism & Career Stress</option>
                  <option value="Somatic & Sleep Tension">Nervous System Regulation & Physical Tension</option>
                  <option value="General Consultation">General Consultation / Not Sure Yet</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1F3833] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white rounded-xl border border-[#E2DBD0] px-4 py-3 text-xs sm:text-sm text-[#1F3833] focus:outline-none focus:border-[#C2785C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F3833] uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white rounded-xl border border-[#E2DBD0] px-4 py-3 text-xs sm:text-sm text-[#1F3833] focus:outline-none focus:border-[#C2785C]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-[#1F3833] uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(310) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white rounded-xl border border-[#E2DBD0] px-4 py-3 text-xs sm:text-sm text-[#1F3833] focus:outline-none focus:border-[#C2785C]"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#1F3833] uppercase tracking-wider mb-1.5">
                  Brief Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a bit about what you're hoping for from therapy..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white rounded-xl border border-[#E2DBD0] px-4 py-2.5 text-xs sm:text-sm text-[#1F3833] focus:outline-none focus:border-[#C2785C] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1F3833] hover:bg-[#C2785C] text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
                >
                  Submit Consultation Request
                </button>
              </div>

              <p className="text-[11px] text-center text-[#596B64] font-light mt-2">
                🔒 Your privacy is strictly protected. HIPAA-compliant communications.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
