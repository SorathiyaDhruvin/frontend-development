"use client";

import React, { useState } from "react";
import { TherapySiteData } from "../data/therapyData";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

interface FaqSectionProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function FaqSection({ data, onOpenBooking }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!data.faqs || data.faqs.length === 0) return null;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 md:py-32 bg-[#FAF8F5] relative border-t border-[#E2DBD0]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C2785C]" />
            <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#C2785C]">
              QUESTIONS & CLARITY
            </span>
            <span className="w-6 h-[1.5px] bg-[#C2785C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F3833] font-normal tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#596B64] font-light">
            Insights on scheduling, therapeutic modalities, and what to expect in our practice.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {data.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2DBD0] overflow-hidden transition-all duration-300 shadow-sm hover:border-[#C2785C]/50"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-serif text-xl sm:text-2xl text-[#1F3833] font-medium"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F3EFE6] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#C2785C] text-white" : "text-[#1F3833]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#596B64] font-light leading-relaxed border-t border-[#F3EFE6]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions? */}
        <div className="mt-14 text-center">
          <p className="text-sm text-[#596B64] mb-4">
            Have a question not listed here?
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1F3833] hover:text-[#C2785C] underline underline-offset-4 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#C2785C]" />
            <span>Reach out directly to Dr. Maya Reynolds</span>
          </button>
        </div>
      </div>
    </section>
  );
}
