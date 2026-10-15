"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";

interface QuoteBannerSectionProps {
  data: TherapySiteData;
}

export default function QuoteBannerSection({ data }: QuoteBannerSectionProps) {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.quoteBanner1.backgroundImage}
          alt="Peaceful scenery background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#142622]/65 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <span className="block text-4xl md:text-5xl font-serif text-[#C2785C] mb-4 opacity-80">
          “
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.3] tracking-normal mb-6">
          {data.quoteBanner1.quote}
        </h2>
        <div className="w-16 h-[2px] bg-[#C2785C] mx-auto mt-8 opacity-80" />
      </div>
    </section>
  );
}
