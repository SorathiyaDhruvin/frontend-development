# Stage 2: Practical Assignment Walkthrough & Loom Presentation Guide

## 🎯 Executive Overview
This project was developed for **Grow My Therapy - Stage 2: Practical Evaluation Round**. It provides:
1. **Part 1: 1:1 UI Clone** of the benchmark homepage: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home).
2. **Part 2: Bespoke Creative Redesign** for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in **Santa Monica, California**, using her Psychology Today profile as the single source of truth.
3. **Part 3: Custom "Our Office" Section** highlighting her physical therapy space at **123th Street 45 W, Santa Monica, CA 90401** with her actual office photography (`office1.jpeg` & `office2.jpeg`) from Google Drive.
4. **Part 4: Video Walkthrough Guide** with a minute-by-minute client demo script tailored for a 5-minute Loom recording.

---

## 🎨 Design System & Color Palette
- **Primary Color:** Deep Pacific Cypress / Forest Slate (`#1F3833`) — represents clinical authority, deep emotional grounding, and serene reassurance.
- **Secondary Color:** Warm Alabaster Linen (`#F9F6F0` / `#F3EFE6`) — softer than stark clinical white, creating a soothing, sensory-friendly environment.
- **Accent Color:** Warm Terracotta / Desert Clay (`#C2785C`) — evokes human warmth, compassion, and coastal California light.
- **Supporting Accent:** Eucalyptus Sage (`#7A9A8B`) — represents nature, mindfulness, and nervous system regulation.
- **Typography:** Editorial Serif (`Cormorant Garamond` / `Playfair Display`) paired with clean geometric Sans-Serif (`Mulish`).

---

## ✍️ Copywriting & Profile Alignment
All website copy was extracted and expanded directly from **Dr. Maya Reynolds' Psychology Today Profile**:
- **Target Audience:** High-achieving, thoughtful adults and professionals who appear "functional" on the outside while silently carrying chronic worry, body tension, sleep disruption, or burnout.
- **Core Modalities:** Cognitive-Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and somatic/body-oriented techniques.
- **SEO Keyword Integration:** Naturally optimized for *Santa Monica Psychologist*, *Anxiety & Panic Therapy Santa Monica*, *EMDR Trauma Processing California*, and *California Statewide Telehealth*.

---

## 🏛️ Part 3: Custom "Our Office" Section Highlights
- **Location:** 123th Street 45 W, Santa Monica, CA 90401.
- **Visual Assets:** High-resolution photography of her real consultation room (`office1.jpeg`) and calm linen lounge (`office2.jpeg`).
- **Core Pillars:**
  1. *Acoustic Privacy & Confidentiality* (soundproof consultation quarters).
  2. *Natural Coastal Light & Grounding Decor* (soothing nervous system overload).
  3. *Hybrid Availability* (in-person Santa Monica sessions + secure California telehealth).

---

## 🎬 Part 4: 5-Minute Loom Video Script (Client Demo)

### `0:00 - 0:45` | Warm Welcome & Purpose
> *"Hi Dr. Reynolds, it's great to connect with you! Today, I'm thrilled to present the very first draft of your new website. Our goal throughout this design has been simple: to create a digital sanctuary that mirrors the calm, grounded, and specialized clinical care you provide in your Santa Monica practice. Let's take a tour of what we've crafted for you."*

### `0:45 - 1:45` | Aesthetic Choices & The Santa Monica Palette
> *"When potential clients search for therapy, their nervous system is often already in overdrive. Instead of cold blues or harsh clinical whites, we curated an earthy, coastal palette: deep pacific cypress for trust and authority, warm alabaster linen for restfulness, and subtle terracotta accents to communicate human warmth. We paired this with elegant, editorial serif typography so the entire atmosphere feels reassuring, elevated, and deeply calming."*

### `1:45 - 2:45` | Translating Your Profile into Empathetic Copy
> *"Every single line of copy comes directly from your profile. In your bio, you noted that clients often feel 'functional' on the outside while silently carrying chronic worry, body tension, or sleep disruptions. Notice how our headlines speak to that exact experience: 'Ground your mind, heal the past, and finally begin to truly thrive.' We prominently spotlight your three core pillars: Anxiety & Panic Relief, Trauma Processing with EMDR, and Burnout Care for High Achievers. We also integrated local keywords like Santa Monica and California Telehealth so ideal clients can easily find you on Google."*

### `2:45 - 3:45` | The Custom 'Our Office' Sanctuary Feature
> *"Now, here is a special feature we designed exclusively for you that wasn't in the original template: the 'Our Office' section. You mentioned that clients feel at ease the moment they step into your physical space. Here, we showcase your real office photography—the sunlit armchair, the calming linen lounge, and the organic textures at 123th Street 45 W in Santa Monica. We emphasize acoustic privacy, safety, and both in-person and hybrid telehealth availability so visitors know exactly what to expect."*

### `3:45 - 4:30` | Mobile Experience Walkthrough
> *(Switch to Mobile view / responsive mode in browser)*
> *"Over 70% of potential clients will search for therapy from their phone when feeling overwhelmed. Let's look at the mobile experience: notice how our arched photo elements stack naturally, typography stays crisp and legible, and the 'Schedule a Consultation' button is always within comfortable thumb reach. When a visitor taps it, an intuitive consultation modal opens where they can choose between in-person Santa Monica or virtual care."*

### `4:30 - 5:00` | Confident Closing & Next Steps
> *"Dr. Reynolds, this draft is built to turn casual visitors into committed clients while honoring the depth and humanity of your work. I would love to hear your thoughts and walk through any refinements you'd like to explore. Thank you!"*

---

## 🛠️ Tech Stack & Instructions
- **Framework:** Next.js 16 (App Router + Turbopack)
- **Styling:** Tailwind CSS 4 with custom CSS variable design tokens
- **Icons:** Lucide React
- **Running Locally:**
  ```bash
  npm run dev
  # Open http://localhost:3000
  ```
- **Building for Production:**
  ```bash
  npm run build
  ```
