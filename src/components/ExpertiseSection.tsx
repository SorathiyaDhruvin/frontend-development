"use client";

import React from "react";
import { TherapySiteData } from "../data/therapyData";
import { Sparkles } from "lucide-react";

interface ExpertiseSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function ExpertiseSection({ data, onOpenBooking }: ExpertiseSectionProps) {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#F3EFE6] border-b border-[#E2DBD0]">
      <div className="max-w-[1500px] mx-auto px-5 md:px-12 text-center">
        <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C] mb-3 block">
          SPECIALIZED KNOWLEDGE
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3833] font-normal tracking-tight mb-12 md:mb-16">
          {data.expertise.heading}
        </h3>

        {/* Tag Pills Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {data.expertise.items.map((item, idx) => (
            <button
              key={idx}
              onClick={onOpenBooking}
              className={`px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                idx === data.expertise.items.length - 1
                  ? "bg-transparent text-[#C2785C] font-semibold italic border border-[#C2785C]/40"
                  : "bg-white text-[#1F3833] hover:bg-[#1F3833] hover:text-[#FAF8F5] border border-[#E2DBD0]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {data.isRedesign && (
          <p className="mt-12 text-xs sm:text-sm text-[#596B64] font-light max-w-xl mx-auto">
            Combining cognitive understanding, EMDR processing, and autonomic nervous system regulation.
          </p>
        )}
      </div>
    </section>
  );
}
