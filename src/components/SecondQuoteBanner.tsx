"use client";

import React from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";

interface SecondQuoteBannerProps {
  data: TherapySiteData;
}

export default function SecondQuoteBanner({ data }: SecondQuoteBannerProps) {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.quoteBanner2.backgroundImage}
          alt="Peaceful nature backdrop"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1F3833]/70 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <span className="block text-4xl md:text-5xl font-serif text-[#C2785C] mb-3 opacity-90">
          “
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.3] tracking-normal mb-6">
          {data.quoteBanner2.quote}
        </h2>
        <div className="w-16 h-[2px] bg-[#C2785C] mx-auto mt-6 opacity-80" />
      </div>
    </section>
  );
}
