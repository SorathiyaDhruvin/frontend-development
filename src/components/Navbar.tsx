"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TherapySiteData } from "../data/therapyData";
import { Menu, X, ChevronDown, Phone, MapPin, Calendar } from "lucide-react";

interface NavbarProps {
  data: TherapySiteData;
  onOpenBooking: () => void;
}

export default function Navbar({ data, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1700px] mx-auto px-5 md:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          {data.isRedesign ? (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F3833] text-[#FAF8F5] flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-sm group-hover:bg-[#C2785C] transition-colors">
                MR
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-[#1F3833]">
                  Dr. Maya Reynolds<span className="text-[#C2785C]">, PsyD</span>
                </span>
                <span className="text-[11px] tracking-widest uppercase font-semibold text-[#596B64]">
                  Licensed Clinical Psychologist
                </span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#86B2B2] text-white flex items-center justify-center font-serif text-lg font-bold">
                CV
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-normal tracking-tight text-[#2B2B2B]">
                  Conejo Valley Family Counseling
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[#777]">
                  Newbury Park, California
                </span>
              </div>
            </div>
          )}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#2B2B2B]/90">
          {data.navItems.map((item) => (
            <div
              key={item.label}
              className="relative group py-2"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 hover:text-[#C2785C] transition-colors py-1"
              >
                <span>{item.label}</span>
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform" />}
              </a>

              {/* Dropdown Menu */}
              {item.children && (
                <div
                  className={`absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-black/5 py-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2 pointer-events-none"
                  }`}
                >
                  {item.children.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-sm text-[#444] hover:text-[#1F3833] hover:bg-[#F3EFE6] transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${data.phone.replace(/[^0-9]/g, "")}`}
            className="hidden xl:flex items-center gap-1.5 text-xs text-[#596B64] hover:text-[#1F3833] font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#C2785C]" />
            <span>{data.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all ${
              data.isRedesign
                ? "bg-[#1F3833] text-[#FAF8F5] hover:bg-[#C2785C]"
                : "bg-[#2B2B2B] text-white hover:bg-[#86B2B2]"
            }`}
          >
            {data.hero.ctaText}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1F3833] hover:bg-black/5 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[100px] z-50 bg-[#FAF8F5] px-6 py-8 flex flex-col justify-between overflow-y-auto border-t border-[#E2DBD0]">
          <div className="flex flex-col gap-4">
            {data.navItems.map((item) => (
              <div key={item.label} className="border-b border-[#E2DBD0]/60 pb-3">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#1F3833] font-medium block"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {item.children.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm text-[#596B64] hover:text-[#1F3833]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#E2DBD0] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#1F3833] text-white text-center font-medium shadow-md"
            >
              {data.hero.ctaText}
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-[#596B64]">
              <MapPin className="w-3.5 h-3.5 text-[#C2785C]" />
              <span>{data.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
