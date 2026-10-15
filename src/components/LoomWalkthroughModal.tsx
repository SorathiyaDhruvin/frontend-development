"use client";

import React, { useState } from "react";
import { X, Video, Clock, CheckCircle, Smartphone, Monitor, Sparkles, BookOpen, UserCheck, MessageSquare } from "lucide-react";

interface LoomWalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoomWalkthroughModal({ isOpen, onClose }: LoomWalkthroughModalProps) {
  const [activeTab, setActiveTab] = useState<"script" | "tips" | "checklist">("script");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#E2DBD0] relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFEAE1] hover:bg-[#E2DBD0] flex items-center justify-center text-[#1F3833] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-[#E2DBD0] pb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EDE8] text-[#C2785C] text-xs font-semibold mb-2">
            <Video className="w-3.5 h-3.5" />
            <span>Stage 2 • Part 4: Communication & Client Demo Guide</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1F3833] font-medium">
            5-Minute Loom Video Client Walkthrough
          </h2>
          <p className="text-xs sm:text-sm text-[#596B64] font-light mt-1">
            Complete script and presentation plan addressing <strong>Dr. Maya Reynolds</strong> as your client.
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5">
            <button
              onClick={() => setActiveTab("script")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "script"
                  ? "bg-[#1F3833] text-white shadow-sm"
                  : "bg-white text-[#596B64] hover:bg-[#F3EFE6] border border-[#E2DBD0]"
              }`}
            >
              Minute-by-Minute Script (5:00)
            </button>
            <button
              onClick={() => setActiveTab("tips")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "tips"
                  ? "bg-[#1F3833] text-white shadow-sm"
                  : "bg-white text-[#596B64] hover:bg-[#F3EFE6] border border-[#E2DBD0]"
              }`}
            >
              Non-Technical Talking Points
            </button>
            <button
              onClick={() => setActiveTab("checklist")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "checklist"
                  ? "bg-[#1F3833] text-white shadow-sm"
                  : "bg-white text-[#596B64] hover:bg-[#F3EFE6] border border-[#E2DBD0]"
              }`}
            >
              Evaluation Checklist
            </button>
          </div>
        </div>

        {/* Tab 1: Minute-by-Minute Script */}
        {activeTab === "script" && (
          <div className="space-y-6 text-sm text-[#1F3833]">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2DBD0]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-lg font-semibold text-[#1F3833]">
                  1. Warm Welcome & High-Level Purpose
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFE6] text-[11px] font-bold text-[#C2785C]">
                  0:00 – 0:45
                </span>
              </div>
              <p className="text-xs text-[#596B64] italic mb-3">
                Goal: Set a warm, professional tone. Address Dr. Reynolds directly as a partner.
              </p>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2DBD0]/60 text-xs text-[#2A4C46] leading-relaxed">
                “Hi Dr. Reynolds, it’s great to meet with you! Today, I’m thrilled to present the very first draft of your new website. Our goal throughout this project has been simple: to create an online home that truly reflects your clinical warmth, your grounding presence, and the specialized care you bring to adults and high achievers in Santa Monica and across California. Let’s take a walk through what we’ve built for you.”
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2DBD0]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-lg font-semibold text-[#1F3833]">
                  2. Aesthetic Choices & The Santa Monica Palette
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFE6] text-[11px] font-bold text-[#C2785C]">
                  0:45 – 1:45
                </span>
              </div>
              <p className="text-xs text-[#596B64] italic mb-3">
                Goal: Explain color choices in client benefits (nervous system regulation, coastal warmth).
              </p>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2DBD0]/60 text-xs text-[#2A4C46] leading-relaxed">
                “When someone lands on a therapy site, their nervous system is often already in overdrive. Instead of harsh clinical whites or cold blues, we chose an earthy, coastal palette inspired by Santa Monica: deep pacific cypress for trust and authority, warm linen alabaster for restfulness, and subtle terracotta accents to communicate human warmth. We paired this with elegant, editorial serif typography so the entire atmosphere feels reassuring, elevated, and deeply calming.”
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2DBD0]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-lg font-semibold text-[#1F3833]">
                  3. Translating Your Profile & Clinical Specialties
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFE6] text-[11px] font-bold text-[#C2785C]">
                  1:45 – 2:45
                </span>
              </div>
              <p className="text-xs text-[#596B64] italic mb-3">
                Goal: Demonstrate how her Psychology Today profile directly informed copy and SEO.
              </p>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2DBD0]/60 text-xs text-[#2A4C46] leading-relaxed">
                “Every line of copy comes directly from your profile. In your bio, you noted that clients often feel ‘functional’ on the outside while silently carrying chronic worry, body tension, or sleep disruptions. Notice how our headlines speak to that exact experience: ‘Ground your mind, heal the past, and finally begin to thrive.’ We prominently spotlight your three core pillars: Anxiety & Panic Relief, Trauma Processing with EMDR, and Burnout Care for High Achievers. We also integrated local keywords like Santa Monica and California Telehealth so ideal clients can easily find you on Google.”
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2DBD0]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-lg font-semibold text-[#1F3833]">
                  4. The Custom ‘Our Office’ Sanctuary Feature
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFE6] text-[11px] font-bold text-[#C2785C]">
                  2:45 – 3:45
                </span>
              </div>
              <p className="text-xs text-[#596B64] italic mb-3">
                Goal: Highlight Part 3—the brand new office section and her real photographs.
              </p>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2DBD0]/60 text-xs text-[#2A4C46] leading-relaxed">
                “Now, here is a special feature we designed exclusively for you that wasn’t in the original template: the ‘Our Office’ section. You mentioned that clients feel at ease the moment they step into your physical space. Here, we showcase your real office photography—the sunlit armchair, the calming linen lounge, and the organic textures at 123th Street 45 W in Santa Monica. We emphasize acoustic privacy, safety, and both in-person and hybrid telehealth availability so visitors know exactly what to expect.”
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E2DBD0]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-serif text-lg font-semibold text-[#1F3833]">
                  5. Mobile Walkthrough & Seamless Next Steps
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F3EFE6] text-[11px] font-bold text-[#C2785C]">
                  3:45 – 5:00
                </span>
              </div>
              <p className="text-xs text-[#596B64] italic mb-3">
                Goal: Show mobile responsiveness, booking flow, and confident closing.
              </p>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E2DBD0]/60 text-xs text-[#2A4C46] leading-relaxed">
                “Over 70% of potential clients will search for therapy from their phone when feeling overwhelmed. Let’s switch to the mobile view. Notice how our arched photo elements stack naturally, typography stays crisp, and the ‘Schedule a Consultation’ button is always within comfortable thumb reach. When a visitor taps it, an intuitive consultation modal opens where they can choose between in-person Santa Monica or virtual care. Dr. Reynolds, this draft is built to turn casual visitors into committed clients. I’d love to hear your thoughts and walk through any refinements!”
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Non-Technical Talking Points */}
        {activeTab === "tips" && (
          <div className="space-y-4 text-xs sm:text-sm text-[#1F3833]">
            <div className="p-4 bg-white rounded-2xl border border-[#E2DBD0]">
              <h4 className="font-serif text-base text-[#1F3833] font-semibold mb-1">
                Say This Instead of Technical Jargon:
              </h4>
              <ul className="space-y-2 mt-3 text-xs text-[#596B64]">
                <li>❌ <em>Don't say:</em> “We implemented CSS Grid with flexbox columns and custom breakpoints.”</li>
                <li>✅ <em>Do say:</em> “The page organizes your information into clean, uncluttered sections so a stressed reader never feels overwhelmed.”</li>
                <li className="pt-2">❌ <em>Don't say:</em> “We used Next.js Turbopack with responsive Tailwind utility classes.”</li>
                <li>✅ <em>Do say:</em> “The website loads lightning fast whether your client is on desktop at their office or on their phone during a quick break.”</li>
                <li className="pt-2">❌ <em>Don't say:</em> “We injected schema meta tags and H1 keyword density.”</li>
                <li>✅ <em>Do say:</em> “We thoughtfully placed terms like ‘Santa Monica Clinical Psychologist’ and ‘Anxiety Therapy’ in your headlines to help local clients find you naturally.”</li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-[#E2DBD0]">
              <h4 className="font-serif text-base text-[#1F3833] font-semibold mb-1">
                Loom Recording Tips:
              </h4>
              <ul className="space-y-1.5 mt-2 text-xs text-[#596B64]">
                <li>• Keep your webcam on in the bottom-left corner with good lighting and warm eye contact.</li>
                <li>• Use the toggle at the top of the page if you wish to show the contrast between the original Conejo Valley template and her bespoke redesign.</li>
                <li>• Open Chrome DevTools (or press F12 → Toggle Device Toolbar) to show the smooth mobile experience during minute 3:45.</li>
                <li>• Keep your voice confident, warm, and conversational.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Evaluation Checklist */}
        {activeTab === "checklist" && (
          <div className="space-y-3 text-xs sm:text-sm text-[#1F3833]">
            <div className="p-4 bg-white rounded-2xl border border-[#E2DBD0] space-y-2.5">
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Video duration is exactly 5 minutes</span>
              </div>
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Presented as a live client demo to Dr. Maya Reynolds</span>
              </div>
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Walkthrough covers both Desktop and Mobile views</span>
              </div>
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Explains design choices (palette, typography, arches) in client-first terms</span>
              </div>
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Highlights how her Psychology Today profile data was extracted</span>
              </div>
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Deep dive into the Part 3 custom 'Our Office' section with her real photos</span>
              </div>
              <div className="flex items-center gap-2 text-[#1F3833] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C2785C]" />
                <span>Clear, confident English communication without technical jargon</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
