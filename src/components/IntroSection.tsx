"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";

interface IntroSectionProps {
  data: TherapySiteData;
}

export default function IntroSection({ data }: IntroSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-[#F3EFE6] relative overflow-hidden border-y border-[#E2DBD0]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Heading and 3 Structured Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-[1.18] tracking-[-0.01em] text-[#1F3833] mb-8 font-normal">
              {data.intro.heading}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#596B64] font-light leading-relaxed">
              {data.intro.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "font-normal text-[#1F3833]" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {data.isRedesign && (
              <div className="mt-10 flex items-center gap-4 text-xs font-semibold tracking-wider uppercase text-[#C2785C]">
                <span className="w-8 h-[2px] bg-[#C2785C]" />
                <span>Santa Monica Clinical Practice • California Telehealth</span>
              </div>
            )}
          </div>

          {/* Right Column: Arched Side Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] h-[480px] sm:h-[560px] rounded-t-full rounded-b-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={data.intro.image}
                alt={data.intro.imageAlt || "Therapy space and grounding reflection"}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
