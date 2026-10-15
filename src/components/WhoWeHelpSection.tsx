"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";
import { ArrowRight } from "lucide-react";

interface WhoWeHelpSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function WhoWeHelpSection({ data, onOpenBooking }: WhoWeHelpSectionProps) {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C] mb-3 block">
            {data.isRedesign ? "TAILORED CLINICAL CARE" : "POPULATIONS WE SERVE"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3833] font-normal tracking-tight">
            {data.whoWeHelp.heading}
          </h2>
          {data.isRedesign && (
            <p className="mt-4 text-base md:text-lg text-[#596B64] font-light">
              Collaborative, respectful psychotherapy tailored specifically to your nervous system, history, and goals.
            </p>
          )}
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {data.whoWeHelp.cards.map((card, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-[#E2DBD0]/60 transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Arched Photo Header */}
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-t-full rounded-b-xl overflow-hidden mb-8 border-2 border-[#F3EFE6] shadow-inner">
                <Image
                  src={card.image}
                  alt={card.imageAlt || card.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Title & Subtitle */}
              {card.subtitle && (
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C2785C] mb-1.5">
                  {card.subtitle}
                </span>
              )}
              <h4 className="font-serif text-2xl sm:text-3xl text-[#1F3833] mb-4 font-normal group-hover:text-[#C2785C] transition-colors">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#596B64] font-light leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>

              {/* Link / CTA */}
              <div className="pt-4 border-t border-[#F3EFE6]">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1F3833] group-hover:text-[#C2785C] group-hover:translate-x-1 transition-all"
                >
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
