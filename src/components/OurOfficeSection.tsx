"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";
import { MapPin, Shield, Sun, Wifi, Sparkles, ArrowRight, Clock } from "lucide-react";

interface OurOfficeSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function OurOfficeSection({ data, onOpenBooking }: OurOfficeSectionProps) {
  if (!data.officeSection) return null;

  const office = data.officeSection;

  return (
    <section id="our-office" className="py-24 md:py-36 bg-[#FAF8F5] relative overflow-hidden border-t border-[#E2DBD0]">
      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#C2785C]/5 rounded-full blur-3xl pointer-events-none -ml-40" />

      <div className="max-w-[1700px] mx-auto px-5 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-[#C2785C]" />
            <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C]">
              {office.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] text-[#1F3833] font-normal tracking-tight mb-6">
            {office.heading}
          </h2>

          <p className="text-base sm:text-lg text-[#596B64] font-light leading-relaxed">
            {office.description}
          </p>
        </div>

        {/* 3 Images Gallery Grid - featuring official Drive photography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-16">
          {/* Main Large Office Image (office1.jpeg) */}
          <div className="md:col-span-7 group relative rounded-3xl overflow-hidden shadow-lg border-2 border-white h-[380px] sm:h-[480px]">
            <Image
              src={office.images[0].src}
              alt={office.images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-[#1F3833]/90 text-[11px] font-medium tracking-wider uppercase mb-2 w-fit">
                Private Consultation Suite
              </span>
              <p className="text-sm sm:text-base font-light text-white/90 max-w-xl">
                {office.images[0].caption}
              </p>
            </div>
          </div>

          {/* Right Stack: 2 Images (office2.jpeg + neighborhood) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Office 2 Image */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg border-2 border-white h-[220px] sm:h-[228px]">
              <Image
                src={office.images[1].src}
                alt={office.images[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-semibold text-[#E2DBD0]">
                  Lounge & Grounding Area
                </span>
                <p className="text-xs text-white/80 line-clamp-2">
                  {office.images[1].caption}
                </p>
              </div>
            </div>

            {/* Santa Monica Coastal Atmosphere */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg border-2 border-white h-[220px] sm:h-[228px]">
              <Image
                src={office.images[2].src}
                alt={office.images[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-semibold text-[#E2DBD0]">
                  Central Santa Monica, CA
                </span>
                <p className="text-xs text-white/80 line-clamp-2">
                  {office.images[2].caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Details & Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 border border-[#E2DBD0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#F6EDE8] text-[#C2785C] flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-[#1F3833] font-normal mb-3">
              Absolute Privacy & Safety
            </h4>
            <p className="text-sm text-[#596B64] font-light leading-relaxed">
              Quiet acoustic soundproofing and discreet consulting quarters provide the psychological safety needed for honest, deep therapeutic reflection.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E2DBD0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF4F1] text-[#1F3833] flex items-center justify-center mb-6">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-[#1F3833] font-normal mb-3">
              Calm Natural Lighting
            </h4>
            <p className="text-sm text-[#596B64] font-light leading-relaxed">
              Expansive windows with filtered coastal sunlight, organic oak furnishings, and living greenery help regulate sensory overload and downshift cortisol.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E2DBD0] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EFE6] text-[#C2785C] flex items-center justify-center mb-6">
              <Wifi className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-[#1F3833] font-normal mb-3">
              Hybrid In-Person & Telehealth
            </h4>
            <p className="text-sm text-[#596B64] font-light leading-relaxed">
              Clients are welcome to join sessions in-person in Santa Monica or connect seamlessly through secure, encrypted telehealth anywhere in California.
            </p>
          </div>
        </div>

        {/* Office Location Banner Card */}
        <div className="bg-[#1F3833] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#C2785C] flex items-center justify-center shrink-0 shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C2785C] block mb-1">
                Office Location
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-1">
                {office.address}
              </h3>
              <p className="text-sm text-white/70 font-light flex items-center gap-2">
                <span>Near Ocean Avenue & Downtown Santa Monica</span>
                <span>•</span>
                <span>Validated Parking Available</span>
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C2785C] hover:bg-[#A96248] text-white font-semibold text-sm tracking-wide shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            Request In-Person Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
