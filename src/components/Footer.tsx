"use client";

import React from "react";
import { TherapySiteData } from "../data/therapyData";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function Footer({ data, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#142622] text-[#FAF8F5] pt-20 pb-12 border-t border-[#2A4C46]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Bio Summary */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C2785C] text-white flex items-center justify-center font-serif text-xl font-bold">
                  {data.isRedesign ? "MR" : "CV"}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white font-medium tracking-tight">
                    {data.practiceName}
                  </h3>
                  <p className="text-xs text-[#E2DBD0] tracking-wider uppercase">
                    {data.therapistTitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/75 font-light leading-relaxed mb-6 max-w-md">
                {data.footer.summary}
              </p>

              <div className="flex flex-col gap-2.5 text-xs text-white/70">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C2785C] shrink-0 mt-0.5" />
                  <span>{data.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C2785C] shrink-0" />
                  <a href={`tel:${data.phone.replace(/[^0-9]/g, "")}`} className="hover:text-white transition-colors">
                    {data.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C2785C] shrink-0" />
                  <a href={`mailto:${data.email}`} className="hover:text-white transition-colors">
                    {data.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C2785C] hover:bg-[#A96248] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all text-center"
              >
                {data.hero.ctaText}
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg text-white font-medium mb-5 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs text-white/75 font-light">
              <li>
                <a href="#" className="hover:text-[#C2785C] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C2785C] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C2785C] transition-colors">
                  Services
                </a>
              </li>
              {data.isRedesign && (
                <li>
                  <a href="#our-office" className="hover:text-[#C2785C] transition-colors">
                    Our Office
                  </a>
                </li>
              )}
              <li>
                <a href="#specialties" className="hover:text-[#C2785C] transition-colors">
                  Specialties
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#C2785C] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C2785C] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Areas Served & Modalities */}
          <div className="lg:col-span-5">
            <h4 className="font-serif text-lg text-white font-medium mb-5 tracking-wide">
              {data.isRedesign ? "Serving Southern California & Telehealth" : "Serving Communities Across CA"}
            </h4>

            <p className="text-xs text-white/75 font-light leading-relaxed mb-6">
              {data.servingAreas}
            </p>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <span className="text-[11px] font-semibold text-[#C2785C] tracking-wider uppercase block mb-2">
                Professional Credentials
              </span>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {data.credentials}
              </p>
              <p className="text-[11px] text-white/50 mt-3">
                Emergency Notice: If you are experiencing a mental health emergency, please dial 988 or visit your nearest emergency room.
              </p>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© 2026 {data.practiceName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Good Faith Estimate</a>
            <span className="text-white/30">•</span>
            <span className="text-white/70">
              Crafted for <strong className="text-white font-normal">Grow My Therapy</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
