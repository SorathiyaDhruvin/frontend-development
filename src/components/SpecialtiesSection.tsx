"use client";

import React from "react";
import { TherapySiteData } from "../data/therapyData";
import { ArrowRight, Activity, ShieldCheck, HeartPulse, Brain } from "lucide-react";

interface SpecialtiesSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function SpecialtiesSection({ data, onOpenBooking }: SpecialtiesSectionProps) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-6 h-6 text-[#C2785C]" />;
      case 1:
        return <Brain className="w-6 h-6 text-[#C2785C]" />;
      case 2:
        return <Activity className="w-6 h-6 text-[#C2785C]" />;
      default:
        return <HeartPulse className="w-6 h-6 text-[#C2785C]" />;
    }
  };

  return (
    <section id="specialties" className="py-24 md:py-32 bg-[#F3EFE6] relative">
      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C] mb-3 block">
            EVIDENCE-BASED APPROACHES
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3833] font-normal tracking-tight">
            {data.specialties.heading}
          </h3>
          {data.isRedesign && (
            <p className="mt-4 text-base md:text-lg text-[#596B64] font-light">
              Structured enough to provide safety and tangible relief, deep enough to facilitate lasting neurological transformation.
            </p>
          )}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.specialties.cards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white rounded-3xl p-7 sm:p-8 shadow-sm hover:shadow-xl border border-[#E2DBD0] transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F9F6F0] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(idx)}
              </div>

              {card.tag && (
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#596B64] mb-2 block">
                  {card.tag}
                </span>
              )}

              <h4 className="font-serif text-2xl text-[#1F3833] font-normal mb-4 group-hover:text-[#C2785C] transition-colors">
                {card.title}
              </h4>

              <p className="text-sm text-[#596B64] font-light leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>

              <div className="pt-4 border-t border-[#F3EFE6]">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F3833] group-hover:text-[#C2785C] group-hover:translate-x-1 transition-all"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
