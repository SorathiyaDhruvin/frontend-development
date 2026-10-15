import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist Santa Monica, CA",
  description:
    "Grounded, evidence-based therapy for high-achieving adults, professionals, and creatives dealing with anxiety, trauma, and burnout in Santa Monica and across California.",
  keywords: [
    "Dr. Maya Reynolds PsyD",
    "Santa Monica Clinical Psychologist",
    "Anxiety Therapy Santa Monica",
    "Trauma Therapy Santa Monica",
    "EMDR California",
    "Burnout Therapy for High Achievers",
    "CBT Santa Monica",
    "Telehealth California Psychologist"
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description: "Therapy for anxiety, trauma, and burnout in Santa Monica & across CA.",
    images: [{ url: "/images/maya-reynolds.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--secondary)] text-[var(--text-main)] selection:bg-[#C2785C]/20 selection:text-[#1F3833]">
        {children}
      </body>
    </html>
  );
}
