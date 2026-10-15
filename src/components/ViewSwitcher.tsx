"use client";

import React from "react";
import { Sparkles, History, Video, Compass, Smartphone, Monitor } from "lucide-react";

interface ViewSwitcherProps {
  isRedesign: boolean;
  onToggle: (redesign: boolean) => void;
  onOpenVideoGuide: () => void;
}

export default function ViewSwitcher({
  isRedesign,
  onToggle,
  onOpenVideoGuide,
}: ViewSwitcherProps) {
  return (
    <div className="sticky top-0 z-50 bg-[#142622]/95 backdrop-blur-md text-white border-b border-[#2A4C46] shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Left: Project Context */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#C2785C] text-white">
            Grow My Therapy
          </span>
          <span className="hidden md:inline text-white/80 font-medium">
            Stage 2: Practical Evaluation Assignment
          </span>
        </div>

        {/* Center: Mode Toggle */}
        <div className="flex items-center bg-[#0D1A17] p-1 rounded-full border border-white/10 shadow-inner">
          <button
            onClick={() => onToggle(true)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all ${
              isRedesign
                ? "bg-[#C2785C] text-white shadow-md font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dr. Maya Reynolds (Redesign + Office)</span>
          </button>

          <button
            onClick={() => onToggle(false)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-medium transition-all ${
              !isRedesign
                ? "bg-[#86B2B2] text-[#142622] shadow-md font-semibold"
                : "text-white/70 hover:text-white"
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Original 1:1 Clone (Conejo Valley)</span>
          </button>
        </div>

        {/* Right: Video Demo Helper Modal Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenVideoGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium border border-white/15 transition-colors"
            title="Open 5-Minute Loom Presentation Guide"
          >
            <Video className="w-3.5 h-3.5 text-[#C2785C]" />
            <span>5-Min Video Script</span>
          </button>
        </div>
      </div>
    </div>
  );
}
