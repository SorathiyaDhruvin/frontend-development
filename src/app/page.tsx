"use client";

import React, { useState } from "react";
import { mayaReynoldsData, conejoValleyCloneData } from "../data/therapyData";
import ViewSwitcher from "../components/ViewSwitcher";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import WhoWeHelpSection from "../components/WhoWeHelpSection";
import QuoteBannerSection from "../components/QuoteBannerSection";
import ExpertiseSection from "../components/ExpertiseSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import SecondQuoteBanner from "../components/SecondQuoteBanner";
import SpecialtiesSection from "../components/SpecialtiesSection";
import OurOfficeSection from "../components/OurOfficeSection";
import ScheduleSection from "../components/ScheduleSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

export default function Home() {
  const [isRedesign, setIsRedesign] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const currentData = isRedesign ? mayaReynoldsData : conejoValleyCloneData;

  return (
    <div className={`min-h-screen ${isRedesign ? "" : "theme-clone"}`}>
      {/* Stage 2 Evaluation Switcher Bar */}
      <ViewSwitcher
        isRedesign={isRedesign}
        onToggle={(val) => setIsRedesign(val)}
      />

      {/* Main Navigation */}
      <Navbar
        data={currentData}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      <main>
        {/* Section 1: Hero */}
        <HeroSection
          data={currentData}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 2: Intro */}
        <IntroSection
          data={currentData}
        />

        {/* Section 3: Who We Help */}
        <WhoWeHelpSection
          data={currentData}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 4: Quote Banner 1 */}
        <QuoteBannerSection
          data={currentData}
        />

        {/* Section 5: Expertise Areas */}
        <ExpertiseSection
          data={currentData}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 6: How We Work / About Therapist */}
        <HowWeWorkSection
          data={currentData}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Section 7: Second Quote Banner */}
        <SecondQuoteBanner
          data={currentData}
        />

        {/* Section 8: Specialties Grid */}
        <SpecialtiesSection
          data={currentData}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* Part 3: Custom "Our Office" Section (Exclusive to Dr. Maya Reynolds) */}
        {isRedesign && (
          <OurOfficeSection
            data={currentData}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {/* Section 9: Schedule Appointment */}
        <ScheduleSection
          data={currentData}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* FAQs Section */}
        {isRedesign && (
          <FaqSection
            data={currentData}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        data={currentData}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        data={currentData}
      />
    </div>
  );
}
