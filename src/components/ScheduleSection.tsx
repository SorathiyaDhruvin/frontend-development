"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

interface ScheduleSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function ScheduleSection({ data, onOpenBooking }: ScheduleSectionProps) {
  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F3EFE6] relative overflow-hidden border-t border-[#E2DBD0]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Stacked / Offset Photographs */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] h-[520px] sm:h-[600px]">
              {/* Back Image */}
              <div className="absolute left-0 top-0 w-[78%] h-[84%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={data.schedule.image1}
                  alt={data.schedule.image1Alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Front Offset Image */}
              <div className="absolute right-0 bottom-0 w-[65%] h-[68%] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
                <Image
                  src={data.schedule.image2}
                  alt={data.schedule.image2Alt}
                  fill
                  sizes="(max-width: 768px) 60vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-[#C2785C]/40 -z-10" />
            </div>
          </div>

          {/* Right Column: CTA Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#C2785C]" />
              <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C]">
                {data.schedule.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] text-[#1F3833] font-normal tracking-tight mb-8">
              {data.schedule.heading}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#596B64] font-light leading-relaxed mb-10">
              {data.schedule.paragraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className={`group flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                  data.isRedesign
                    ? "bg-[#1F3833] text-[#FAF8F5] hover:bg-[#C2785C]"
                    : "bg-[#2B2B2B] text-white hover:bg-[#86B2B2]"
                }`}
              >
                <Calendar className="w-4 h-4 text-[#C2785C]" />
                <span>{data.schedule.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${data.phone.replace(/[^0-9]/g, "")}`}
                className="px-6 py-4 rounded-full text-sm font-semibold text-[#1F3833] hover:text-[#C2785C] border border-[#E2DBD0] hover:border-[#C2785C]/50 transition-colors text-center"
              >
                Call: {data.phone}
              </a>
            </div>

            {data.isRedesign && (
              <p className="mt-8 text-xs text-[#596B64] font-light">
                * We offer a complimentary 15-minute phone consultation to answer questions and ensure we are the right therapeutic match.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
