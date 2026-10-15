"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function HeroSection({ data, onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-32">
      {/* Subtle organic background glow for redesign */}
      {data.isRedesign && (
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C2785C]/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-24" />
      )}

      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-6 h-[1.5px] bg-[#C2785C]" />
              <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#596B64]">
                {data.hero.eyebrow}
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-[-0.015em] text-[#1F3833] mb-8 font-normal">
              {data.hero.heading}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#596B64] max-w-2xl mb-10 font-light">
              {data.hero.subtext}
            </p>

            {/* CTA & Trust badges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                  data.isRedesign
                    ? "bg-[#1F3833] text-[#FAF8F5] hover:bg-[#C2785C]"
                    : "bg-[#2B2B2B] text-white hover:bg-[#86B2B2]"
                }`}
              >
                <span>{data.hero.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="flex items-center justify-center px-6 py-4 rounded-full text-sm font-semibold text-[#1F3833] hover:text-[#C2785C] border border-[#E2DBD0] hover:border-[#C2785C]/50 transition-colors bg-white/50"
              >
                Explore Clinical Services
              </a>
            </div>

            {/* Quick trust metrics */}
            {data.isRedesign && (
              <div className="mt-12 pt-8 border-t border-[#E2DBD0]/60 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#596B64]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C2785C] shrink-0" />
                  <span>Licensed Psychologist (PsyD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C2785C] shrink-0" />
                  <span>In-Person Santa Monica Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C2785C] shrink-0" />
                  <span>Statewide California Telehealth</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Arched Photography (faithful to original template layout) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] h-[520px] sm:h-[620px]">
              {/* Back / Main Arched Image */}
              <div className="absolute right-0 top-0 w-[78%] h-[88%] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={data.hero.image1}
                  alt={data.hero.image1Alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Front Offset Arched Image */}
              <div className="absolute left-0 bottom-0 w-[62%] h-[68%] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
                <Image
                  src={data.hero.image2}
                  alt={data.hero.image2Alt}
                  fill
                  sizes="(max-width: 768px) 60vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Decorative Accent Ring */}
              <div className="absolute -bottom-4 right-8 w-24 h-24 rounded-full border border-[#C2785C]/30 pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
