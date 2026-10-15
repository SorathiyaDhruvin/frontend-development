export interface TherapySiteData {
  isRedesign: boolean;
  therapistName: string;
  therapistTitle: string;
  practiceName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  servingAreas: string;
  credentials: string;

  // Header & Nav
  navItems: { label: string; href: string; children?: { label: string; href: string }[] }[];

  // Hero Section (Sec 1)
  hero: {
    eyebrow: string;
    heading: string;
    subtext: string;
    ctaText: string;
    ctaHref: string;
    image1: string;
    image2: string;
    image1Alt: string;
    image2Alt: string;
  };

  // Section 2 - Intro
  intro: {
    heading: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
  };

  // Section 3 - Who We Help (3 columns)
  whoWeHelp: {
    heading: string;
    cards: {
      title: string;
      subtitle?: string;
      description: string;
      image: string;
      imageAlt: string;
      linkText: string;
      linkHref: string;
    }[];
  };

  // Section 4 - Quote Banner 1
  quoteBanner1: {
    quote: string;
    backgroundImage: string;
  };

  // Section 5 - Areas of Expertise (Pills)
  expertise: {
    heading: string;
    items: string[];
  };

  // Section 6 - How We Work / About
  howWeWork: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
    image: string;
    imageAlt: string;
    badge?: string;
  };

  // Section 7 - Quote Banner 2
  quoteBanner2: {
    quote: string;
    backgroundImage: string;
  };

  // Section 8 - Specialties (4 cards)
  specialties: {
    heading: string;
    cards: {
      title: string;
      tag?: string;
      description: string;
      linkText: string;
      linkHref: string;
    }[];
  };

  // Part 3: Custom "Our Office" Section (only in redesign)
  officeSection?: {
    eyebrow: string;
    heading: string;
    description: string;
    highlights: { title: string; desc: string; icon: string }[];
    images: { src: string; caption: string; alt: string }[];
    address: string;
    sessionTypes: string;
  };

  // Section 9 - Schedule Appointment
  schedule: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
    image1: string;
    image2: string;
    image1Alt: string;
    image2Alt: string;
  };

  // FAQs Section
  faqs?: {
    question: string;
    answer: string;
  }[];

  // Footer
  footer: {
    summary: string;
    licenseInfo: string;
  };
}

export const mayaReynoldsData: TherapySiteData = {
  isRedesign: true,
  therapistName: "Dr. Maya Reynolds, PsyD",
  therapistTitle: "Licensed Clinical Psychologist",
  practiceName: "Dr. Maya Reynolds, PsyD",
  tagline: "Clinical Psychology & Integrative Healing in Santa Monica, California",
  phone: "(310) 896-4120",
  email: "hello@drmayareynolds.com",
  address: "123th Street 45 W, Santa Monica, CA 90401",
  servingAreas: "Santa Monica, Venice, Brentwood, Pacific Palisades, West Los Angeles & Telehealth across all of California",
  credentials: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | PSY 31289",

  navItems: [
    {
      label: "About",
      href: "#about",
      children: [
        { label: "Meet Dr. Reynolds", href: "#about" },
        { label: "Our Clinical Philosophy", href: "#how-we-work" },
        { label: "Our Santa Monica Office", href: "#our-office" },
      ],
    },
    {
      label: "Services",
      href: "#services",
      children: [
        { label: "Anxiety & Panic Therapy", href: "#services" },
        { label: "Trauma Recovery & EMDR", href: "#services" },
        { label: "Burnout & Perfectionism", href: "#services" },
        { label: "Mindfulness & Somatics", href: "#expertise" },
      ],
    },
    { label: "Our Office", href: "#our-office" },
    { label: "Specialties", href: "#specialties" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "ONLINE & IN-PERSON CLINICAL PSYCHOLOGY IN SANTA MONICA & ACROSS CALIFORNIA",
    heading: "Ground your mind, heal the past, and finally begin to truly thrive.",
    subtext: "Specialized, evidence-based therapy for thoughtful, high-achieving adults, professionals, and creatives ready to move beyond anxiety, emotional exhaustion, and trauma.",
    ctaText: "Schedule a Consultation",
    ctaHref: "#contact",
    image1: "/images/redesign/hero-coast.jpg",
    image2: "/images/redesign/hero-mindful.jpg",
    image1Alt: "Calm coastal Santa Monica coastline representing tranquility and mental grounding",
    image2Alt: "Woman finding peace and mindfulness in soft natural morning light",
  },

  intro: {
    heading: "You’ve been holding it all together on the outside, while quietly feeling exhausted within.",
    paragraphs: [
      "At our Santa Monica psychology practice, Dr. Maya Reynolds provides a warm, grounded sanctuary to help you move from chronic survival mode into authentic vitality.",
      "Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, trapped in overthinking, or emotionally on edge. You may feel fully functional to the outside world while silently carrying constant worry, physical body tension, disrupted sleep, or a persistent feeling that something is about to go wrong.",
      "Whether you are navigating the lingering weight of earlier life experiences, recovering from professional burnout, or working through acute anxiety, therapy provides a collaborative, safe space to slow down, reconnect, and rebuild resilient roots."
    ],
    image: "/images/redesign/sec2-grounding.jpg",
    imageAlt: "Reflective person taking a mindful walk on a peaceful coastal path",
  },

  whoWeHelp: {
    heading: "Who We Help",
    cards: [
      {
        title: "High Achievers & Overthinking",
        subtitle: "Quiet Anxiety & Perfectionism",
        description: "For thoughtful professionals, founders, and creatives who look successful on paper but struggle with internal pressure, imposter syndrome, chronic worry, and an inability to truly relax.",
        image: "/images/redesign/help-anxiety.jpg",
        imageAlt: "Professional finding moments of calm reflection and relief from anxiety",
        linkText: "Explore Anxiety Support",
        linkHref: "#services",
      },
      {
        title: "Trauma & Lingering Wounds",
        subtitle: "Single-Incident & Complex Trauma",
        description: "Helping adults gently process single-incident shocks or complex, long-standing relationship patterns from childhood with careful pacing, nervous system regulation, and EMDR.",
        image: "/images/redesign/help-trauma.jpg",
        imageAlt: "Safe, supportive therapeutic connection promoting trauma recovery",
        linkText: "Explore Trauma Care",
        linkHref: "#services",
      },
      {
        title: "Burnout & Life Transitions",
        subtitle: "Reconnecting With Yourself",
        description: "Support for executives and driven individuals who feel detached, depleted, or numb after years of pushing through stress, helping you develop sustainable rhythms and deeper meaning.",
        image: "/images/redesign/help-burnout.jpg",
        imageAlt: "Restorative peaceful atmosphere supporting burnout recovery",
        linkText: "Explore Burnout Therapy",
        linkHref: "#services",
      },
    ],
  },

  quoteBanner1: {
    quote: "You deserve a place where your whole story is heard, valued, and understood. Nothing you carry will ever be too heavy for us to explore together.",
    backgroundImage: "/images/redesign/banner-ocean.jpg",
  },

  expertise: {
    heading: "Our Clinical Modalities & Areas of Focus",
    items: [
      "Anxiety & Panic Disorders",
      "Single-Incident Trauma",
      "Complex Developmental Trauma",
      "EMDR Therapy",
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness-Based Practices",
      "Body-Oriented Somatic Techniques",
      "Professional Burnout",
      "High-Functioning Perfectionism",
      "Nervous System Regulation",
      "Sleep & Physical Tension",
      "…and sustainable self-compassion.",
    ],
  },

  howWeWork: {
    eyebrow: "OUR CLINICAL PHILOSOPHY",
    heading: "Grounded depth meets evidence-based clinical psychology.",
    paragraphs: [
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive and goal-directed, while still leaving plenty of space for deep reflection, insight, and nuance.",
      "Rather than offering superficial advice or one-size-fits-all fixes, I integrate proven methodologies including Cognitive-Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and somatic body-oriented techniques. Together, we explore both the emotional mindset and the physiological responses of what you are experiencing.",
      "Trauma work is a cornerstone of my practice. My approach is paced carefully, with an uncompromising emphasis on safety, stabilization, and helping you feel more regulated in your day-to-day life—not just during the hour we spend together in session. My goal is not just short-term symptom relief, but helping you develop lasting self-awareness, autonomic resilience, and an enduring sense of trust in yourself."
    ],
    buttonText: "Schedule a Consultation with Dr. Reynolds",
    buttonHref: "#contact",
    image: "/images/maya-reynolds.png",
    imageAlt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica",
    badge: "Dr. Maya Reynolds, PsyD | Clinical Psychologist",
  },

  quoteBanner2: {
    quote: "Honoring what you have survived while intentionally shaping the peace, confidence, and purpose you step into next.",
    backgroundImage: "/images/redesign/banner-calm.jpg",
  },

  specialties: {
    heading: "Core Clinical Specialties",
    cards: [
      {
        title: "Trauma & PTSD Recovery",
        tag: "Safety & Stabilization",
        description: "Carefully paced therapy for single-incident trauma and complex developmental wounds. We focus on somatic grounding, safety, and autonomic regulation so you feel centered in your daily life.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "EMDR Therapy",
        tag: "Neurological Reprocessing",
        description: "Eye Movement Desensitization and Reprocessing (EMDR) helps reprocess painful, distressing memories stored maladaptively in the brain, releasing persistent emotional pain and somatic triggers.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "Anxiety & Panic Relief",
        tag: "CBT & Somatic Grounding",
        description: "Untangle chronic worry, overthinking, and physiological panic. Learn practical cognitive tools paired with body-oriented regulation to quiet a hypervigilant nervous system.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "Burnout & Perfectionism",
        tag: "Sustainable Living",
        description: "Specialized care for high-achieving entrepreneurs, executives, and creatives who feel disconnected from themselves after years of high internal pressure and chronic hustle.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
    ],
  },

  // Part 3: Custom Office Section!
  officeSection: {
    eyebrow: "A QUIET SANCTUARY FOR HEALING",
    heading: "Our Santa Monica Office: Designed for Calm, Privacy & Grounding",
    description: "Located at 123th Street 45 W in Santa Monica, California, our private therapy suite is intentionally curated with natural coastal light, warm organic materials, and an uncluttered, peaceful environment. Clients often share that simply walking through the door invites an immediate sigh of relief and a deeper sense of ease.",
    highlights: [
      {
        title: "Acoustic Privacy & Comfort",
        desc: "Engineered with soundproofing and discreet private entryways to ensure your therapeutic journey is held with absolute safety and confidentiality.",
        icon: "Shield",
      },
      {
        title: "Natural Light & Grounding Decor",
        desc: "Sunlit space designed with calming textiles, living plants, and ergonomic seating to soothe sensory fatigue and ease nervous system tension.",
        icon: "Sun",
      },
      {
        title: "In-Person & California Telehealth",
        desc: "Enjoy in-person appointments in central Santa Monica or seamless HIPAA-compliant virtual therapy from anywhere across California.",
        icon: "MapPin",
      },
    ],
    images: [
      {
        src: "/images/office1.jpeg",
        caption: "Individual consultation space featuring warm natural wood, mindful reading resources, and gentle ambient lighting.",
        alt: "Dr. Maya Reynolds Santa Monica therapy room armchair and private counseling corner",
      },
      {
        src: "/images/office2.jpeg",
        caption: "Comfortable linen lounge seating with open natural daylight, designed for grounding conversations and somatic safety.",
        alt: "Dr. Maya Reynolds therapy sofa and serene sunlit consulting environment",
      },
      {
        src: "/images/redesign/office-neighborhood.jpg",
        caption: "Conveniently situated in Santa Monica, California, offering quiet accessibility near coastal green spaces and ocean breezes.",
        alt: "Santa Monica coastal street and neighborhood atmosphere",
      },
    ],
    address: "123th Street 45 W, Santa Monica, CA 90401",
    sessionTypes: "In-Person Sessions in Santa Monica & Secure Telehealth Across California",
  },

  schedule: {
    eyebrow: "SCHEDULE A CONSULTATION",
    heading: "Find a therapist who is the right fit for your mind and life.",
    paragraphs: [
      "Beginning therapy is a courageous, intentional decision. Finding a psychologist whose clinical training, grounded presence, and therapeutic approach resonate with you makes all the difference.",
      "I work with clients who are ready to examine what isn't working, develop deep personal insight, and build sustainable emotional resilience. If you are seeking a therapist who pairs practical tools with depth-oriented work, I invite you to connect.",
      "Reach out today to schedule a confidential 15-minute consultation."
    ],
    buttonText: "Request an Appointment",
    buttonHref: "#contact",
    image1: "/images/redesign/cta-space1.jpg",
    image2: "/images/redesign/cta-space2.jpg",
    image1Alt: "Warm and inviting Santa Monica consulting environment",
    image2Alt: "Tranquil coastal horizon inspiring healing and forward vision",
  },

  faqs: [
    {
      question: "Do you offer in-person or telehealth sessions?",
      answer: "I provide both! Clients can attend in-person therapy at my private office located at 123th Street 45 W, Santa Monica, CA 90401. I also offer secure, HIPAA-compliant virtual telehealth sessions for adults located anywhere throughout California.",
    },
    {
      question: "What types of clients do you typically work with?",
      answer: "I specialize in working with thoughtful, high-achieving adults, professionals, and creatives who feel overwhelmed by anxiety, stress, or the lingering effects of earlier life trauma. Many appear high-functioning on the outside while internally struggling with chronic overthinking, perfectionism, or emotional exhaustion.",
    },
    {
      question: "What modalities and approaches do you use?",
      answer: "I combine evidence-based methods including Cognitive-Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented somatic techniques. This integrative model addresses both cognitive mindset and physical nervous system regulation.",
    },
    {
      question: "How does EMDR and trauma therapy work?",
      answer: "Trauma work is paced with great intentionality. We begin by establishing emotional safety, stabilization, and grounding techniques before processing distressful memories with EMDR, ensuring you feel regulated both inside and outside of sessions.",
    },
    {
      question: "How do I get started?",
      answer: "You can click any 'Schedule a Consultation' button on this page or send an inquiry through our contact form. We will schedule a brief initial consultation call to discuss what you're experiencing, answer your questions, and ensure we're a mutual fit.",
    },
  ],

  footer: {
    summary: "Dr. Maya Reynolds, PsyD provides specialized individual psychotherapy in Santa Monica, California and statewide via telehealth. Grounded, evidence-based care for anxiety, trauma, and burnout.",
    licenseInfo: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist (PSY 31289) | 123th Street 45 W, Santa Monica, CA 90401",
  },
};

export const conejoValleyCloneData: TherapySiteData = {
  isRedesign: false,
  therapistName: "Conejo Valley Family Counseling",
  therapistTitle: "Counseling in Newbury Park, CA",
  practiceName: "Conejo Valley Family Counseling",
  tagline: "Counseling for adults, couples, and children in Newbury Park & across CA",
  phone: "805.242.3120",
  email: "info@conejovalleycounseling.com",
  address: "925 Broadbeck Dr Suites 200 and 225, Newbury Park, CA 91320",
  servingAreas: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
  credentials: "Conejo Valley Family Counseling | Licensed Marriage and Family Therapists & Associate Counselors",

  navItems: [
    {
      label: "About",
      href: "#about",
      children: [
        { label: "Our Team", href: "#about" },
        { label: "Jennifer Anderson, LMFT", href: "#about" },
        { label: "Candace Bletscher, AMFT", href: "#about" },
        { label: "Heather Williams-Baumgart, AMFT", href: "#about" },
      ],
    },
    {
      label: "Specialties",
      href: "#specialties",
      children: [
        { label: "Dissociation", href: "#specialties" },
        { label: "Trauma", href: "#specialties" },
        { label: "Special Needs Parenting", href: "#specialties" },
        { label: "Couples", href: "#who-we-help" },
        { label: "Children & Teens", href: "#who-we-help" },
      ],
    },
    { label: "Methods", href: "#specialties" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
    heading: "Rebuild your foundation on solid ground and finally begin to thrive.",
    subtext: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    ctaText: "Book an Appointment",
    ctaHref: "#contact",
    image1: "/images/original/hero1.jpg",
    image2: "/images/original/hero2.jpg",
    image1Alt: "Counseling client reflecting in Newbury Park therapy session",
    image2Alt: "Warm and inviting counseling environment in California",
  },

  intro: {
    heading: "You’re holding onto hope that life can be better than it is right now.",
    paragraphs: [
      "At Conejo Valley Family Counseling we want to make that hope a reality.",
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward."
    ],
    image: "/images/original/sec2.jpg",
    imageAlt: "Serene counseling setting in Newbury Park",
  },

  whoWeHelp: {
    heading: "Who we help",
    cards: [
      {
        title: "Adults",
        description: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: "/images/original/help-adults.jpg",
        imageAlt: "Adult counseling client",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "Couples",
        description: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: "/images/original/help-couples.jpg",
        imageAlt: "Couples counseling support",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "Children & Teens",
        description: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: "/images/original/help-teens.jpg",
        imageAlt: "Children and teen counseling",
        linkText: "Learn more",
        linkHref: "#contact",
      },
    ],
  },

  quoteBanner1: {
    quote: "You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.",
    backgroundImage: "/images/original/banner-quote1.png",
  },

  expertise: {
    heading: "Our areas of expertise",
    items: [
      "Dissociation",
      "Trauma",
      "Family conflict",
      "Special needs parenting",
      "Depression",
      "Marriage",
      "Anxiety",
      "Relationships",
      "Children",
      "Teens",
      "Intimacy & connection",
      "…and more.",
    ],
  },

  howWeWork: {
    eyebrow: "HOW WE WORK",
    heading: "We’re here to make a difference.",
    paragraphs: [
      "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships."
    ],
    buttonText: "Learn more about us",
    buttonHref: "#about",
    image: "/images/original/sec6-work.jpg",
    imageAlt: "Therapy team member at Conejo Valley Family Counseling",
  },

  quoteBanner2: {
    quote: "Honoring where you’ve been & helping shape where you’re headed.",
    backgroundImage: "/images/original/banner-quote2.jpg",
  },

  specialties: {
    heading: "Our specialties include…",
    cards: [
      {
        title: "Trauma",
        description: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay 'stuck,' and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "Dissociation",
        description: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "EMDR",
        description: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
      {
        title: "Special Needs Parenting",
        description: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        linkText: "Learn more",
        linkHref: "#contact",
      },
    ],
  },

  schedule: {
    eyebrow: "SCHEDULE AN APPOINTMENT",
    heading: "Find a therapist who is the right fit for you.",
    paragraphs: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way.",
      "Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment."
    ],
    buttonText: "Book now",
    buttonHref: "#contact",
    image1: "/images/original/sec9-cta1.jpg",
    image2: "/images/original/sec9-cta2.jpg",
    image1Alt: "Therapy meeting space at Newbury Park office",
    image2Alt: "Comfortable client seating area",
  },

  footer: {
    summary: "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    licenseInfo: "Conejo Valley Family Counseling | 925 Broadbeck Dr Suites 200 and 225 Newbury Park, CA 91320 | 805.242.3120",
  },
};
