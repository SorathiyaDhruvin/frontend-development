"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";
import { ArrowRight, Award, GraduationCap, Sparkles } from "lucide-react";

interface HowWeWorkSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function HowWeWorkSection({ data, onOpenBooking }: HowWeWorkSectionProps) {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-[460px] h-[520px] sm:h-[600px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#EFEAE1]">
              <Image
                src={data.howWeWork.image}
                alt={data.howWeWork.imageAlt}
                fill
                sizes="(max-width: 768px) 90vw, 460px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />

              {/* Bio badge */}
              {data.isRedesign && (
                <div className="absolute bottom-6 left-6 right-6 bg-[#1F3833]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C2785C] flex items-center justify-center font-serif text-lg font-bold shrink-0">
                      Ψ
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold leading-tight">
                        Dr. Maya Reynolds, PsyD
                      </p>
                      <p className="text-[11px] text-white/80 tracking-wider uppercase">
                        Licensed Clinical Psychologist • CA PSY 31289
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-[#C2785C]" />
              <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C]">
                {data.howWeWork.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] text-[#1F3833] font-normal tracking-tight mb-8">
              {data.howWeWork.heading}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#596B64] font-light leading-relaxed mb-10">
              {data.howWeWork.paragraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                  data.isRedesign
                    ? "bg-[#1F3833] text-[#FAF8F5] hover:bg-[#C2785C]"
                    : "bg-[#2B2B2B] text-white hover:bg-[#86B2B2]"
                }`}
              >
                <span>{data.howWeWork.buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {data.isRedesign && (
                <a
                  href="#our-office"
                  className="px-6 py-4 rounded-full text-sm font-semibold text-[#1F3833] hover:text-[#C2785C] border border-[#E2DBD0] hover:border-[#C2785C]/50 transition-colors text-center"
                >
                  View Santa Monica Office
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
