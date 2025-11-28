
import { NavItem, Program, Testimonial, BlogCategory, Guide, FAQItem, ProcessStep, AudienceItem, BusinessImpact } from './types';
import { Microscope, Activity, Apple, Moon, Heart, FileText, PlayCircle, ClipboardCheck, Zap, PenTool, CheckCircle, Brain, Trophy, ShieldCheck, Flame, Wind, Briefcase, TrendingUp, Battery, Layers, Coffee, Bed, Sun, Crosshair, Anchor, Database } from 'lucide-react';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'Results', path: '/results' },
  { label: 'About', path: '/about' },
  { label: 'Resources', path: '/learn' },
];

export const HERO_CONTENT = {
  headline: "We Rebuild the Biology of High-Performing Leaders.",
  subheadline: "The Operating-System Upgrade for Human Performance. Reverse burnout, enhance cognition, and sustain your legacy through data-driven biohacking.",
  ctaPrimary: "View the CXO Protocols",
  ctaSecondary: "Book Founder Consult"
};

export const TRUST_METRICS = [
  { label: "CXOs & Founders", value: "1,000+", sub: "Optimized" },
  { label: "Productivity Boost", value: "40%", sub: "Documented Increase" },
  { label: "Clinically Backed", value: "100%", sub: "Doctor-Led Biohacking" },
  { label: "Burnout Reversal", value: "6 Wks", sub: "Average Timeframe" }
];

// Based on "The BioReset Model" (PDF Page 2 & 3) - Expanded to all 5 Systems
export const SOLUTION_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Hormones & Adrenal",
    description: "Reset stress and hormone rhythm so energy, focus, and sex drive return naturally.",
    icon: Activity
  },
  {
    id: 2,
    title: "Metabolism & Energy",
    description: "Restart metabolism and train the body to burn fat and fuel efficiently again.",
    icon: Flame
  },
  {
    id: 3,
    title: "Gut & Digestion",
    description: "Heal the gut, improve absorption, and stabilize mood and focus.",
    icon: Apple
  },
  {
    id: 4,
    title: "Sleep & Recovery",
    description: "Repair sleep cycles so the body recovers faster and the mind resets daily.",
    icon: Moon
  },
  {
    id: 5,
    title: "Mind & Behavior",
    description: "Rewire habits and routines that keep leaders calm, focused, and consistent.",
    icon: Brain
  }
];

// PDF Page 6 - Customer Segment
export const TARGET_AUDIENCE: AudienceItem[] = [
  { id: '1', text: "Founders & CXOs facing burnout and decision fatigue" },
  { id: '2', text: "High-performers with sleep issues or brain fog" },
  { id: '3', text: "Leaders struggling with weight gain or low libido" },
  { id: '4', text: "Investors needing sustained energy for 12+ hour days" }
];

// PDF Page 5 - Measurable Business Impact
export const BUSINESS_IMPACT_DATA: BusinessImpact[] = [
    {
        title: "Sharper Mental Clarity",
        description: "Balanced hormones pull the brain out of survival mode.",
        result: "Faster, calmer, more accurate decisions.",
        icon: Brain
    },
    {
        title: "Sustained Energy",
        description: "Stable cellular energy replaces caffeine spikes.",
        result: "10–12 productive hours a day with no burnout.",
        icon: Battery
    },
    {
        title: "Improved Sleep",
        description: "Deep sleep resets emotions and ideas.",
        result: "More creativity & calmer leadership.",
        icon: Moon
    },
    {
        title: "Balanced Hormones",
        description: "Testosterone, cortisol, and dopamine align.",
        result: "Stronger leadership presence & drive.",
        icon: Activity
    },
    {
        title: "Lower Stress",
        description: "Controlled cortisol means emotional stability.",
        result: "Smoother communication & team culture.",
        icon: ShieldCheck
    }
];

// New Program Structure from PDF (Page 7-8)
export const PROGRAMS: Program[] = [
  {
    id: 'metabolic-reset',
    title: 'The Metabolic Reset Cohort',
    tagline: 'MVP Phase - The Foundation',
    price: '₹4,999',
    duration: '5 Weeks',
    bestFor: 'Founders starting their biohacking journey',
    features: [
      'Personalized Lifestyle Plan',
      'Genetic & Metabolic Diet Protocol',
      'Sleep & Recovery Blueprint',
      'Weekly Expert Webinars',
      'Community Support'
    ],
    cta: 'Join Cohort',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
    description: 'A science-backed, expert-led biohacking ecosystem to reverse the side effects of stress.',
    longDescription: 'The Metabolic Reset Cohort is designed to decode, reset, and rewire your biology in just 5 weeks. It is not just a health challenge; it is a biological redesign guided by clinical insight and grounded in science.',
    format: 'WhatsApp + Weekly Zoom + 1:1 Consult',
    deliverables: [
        'Personalized Lifestyle Biohacking Plan',
        'Precision Diet Protocol (Genetic Based)',
        'Exercise Prescription (Hypertrophy & Biomechanics)',
        'Personalized Supplement Stack',
        'Sleep & Recovery Blueprint'
    ],
    timeline: [
        {
            week: "Week 1",
            phaseName: "DECODE",
            title: "Baseline Awareness & Biological Mapping",
            objective: "Understand physiology and limiting variables.",
            description: "Consultation, diagnostics, and the '24-Hour Bio-Map'. We identify food-energy relationships and hidden inflammation.",
            domains: ["Lifestyle", "Diet", "Data"],
            dailyBlocks: [
                {
                    range: "Day 1-2",
                    title: "Baseline Consultation & Diagnostics",
                    goal: "Understand client's physiology, lifestyle, and limiting variables.",
                    methods: ["60-min intake consultation", "Optional metrics: HRV, RHR, BP", "My 24-Hour Bio-Map journaling"],
                    why: "Data replaces guesswork; consultation defines roadmap.",
                    icon: ClipboardCheck
                },
                {
                    range: "Day 3-4",
                    title: "Metabolic Typing & Diet Decoding",
                    goal: "Identify food-energy relationships and hidden inflammation.",
                    methods: ["Guided elimination (gluten, sugar)", "12-hour circadian fast (8PM-8AM)", "1.8 g/kg protein", "Seasonal anti-inflammatory diet"],
                    why: "Precision eating made simple — no expensive tests needed.",
                    icon: Apple
                },
                {
                    range: "Day 5-7",
                    title: "Sleep & Recovery Foundation",
                    goal: "Establish circadian alignment and deep recovery baseline.",
                    methods: ["Fixed sleep/wake window (+/- 15 min)", "Morning sunlight, evening dim-light", "Optional magnesium blend"],
                    why: "Sleep restoration amplifies every other biohack.",
                    icon: Moon
                }
            ]
        },
        {
            week: "Week 2",
            phaseName: "RESET",
            title: "Gut, Cellular & Hormonal Rebalance",
            objective: "Heal gut microbiome and reduce systemic inflammation.",
            description: "Intermittent fasting protocols, removal of inflammatory triggers, and sleep optimization to enter parasympathetic dominance.",
            domains: ["Gut", "Sleep", "Stress"],
            dailyBlocks: [
                {
                    range: "Day 8-10",
                    title: "Gut Reset & Detox Reinforcement",
                    goal: "Heal gut microbiome, reduce systemic inflammation.",
                    methods: ["16:8 fasting window", "Add fermented food (curd, kefir) + fiber", "Remove caffeine after 3 PM"],
                    why: "Gut healing governs immunity, brain clarity, and hormone balance.",
                    icon: Flame
                },
                {
                    range: "Day 11-13",
                    title: "Sleep Optimization & HRV Boost",
                    goal: "Enter parasympathetic dominance.",
                    methods: ["Digital sunset 90 min before bed", "Breathwork + journaling nightly", "Glycine or GABA if poor sleep persists"],
                    why: "Deep sleep is the most potent longevity supplement.",
                    icon: Bed
                }
            ]
        },
        {
            week: "Week 3",
            phaseName: "REWIRE",
            title: "Behavioral Conditioning & Habit Anchoring",
            objective: "Reprogram habits, emotions, and nervous system pathways.",
            description: "Morning gratitude, breathwork resets, and movement screening to reconnect the nervous system.",
            domains: ["Mindset", "CNS", "Movement"],
            dailyBlocks: [
                {
                    range: "Day 14-16",
                    title: "Behavioral Repatterning",
                    goal: "Replace stress-driven habits with performance rituals.",
                    methods: ["5-min morning gratitude", "2-min post-lunch breath reset (4-7-8)", "Structured evening ritual"],
                    why: "Consistency rewires the limbic system; creates resilience.",
                    icon: Brain
                },
                {
                    range: "Day 17-18",
                    title: "Movement & CNS Calibration",
                    goal: "Reconnect the nervous system to movement efficiency.",
                    methods: ["Movement screen", "AM: mobility + Zone-2 cardio", "PM: resistance training"],
                    why: "Physical mobility equals neurological adaptability.",
                    icon: Activity
                },
                {
                    range: "Day 19-21",
                    title: "Supplement Personalization",
                    goal: "Fill genuine nutrient gaps, minimize dependency.",
                    methods: ["Core Stack: Omega-3, D3+K2, Protein", "Optional: MCT, Creatine, Adaptogens"],
                    why: "Foundational micronutrients amplify metabolic repair safely.",
                    icon: Zap
                }
            ]
        },
        {
            week: "Week 4-5",
            phaseName: "UPGRADE",
            title: "Cognitive, Metabolic & Mitochondrial Optimization",
            objective: "Amplify energy production and focus capacity.",
            description: "Mitochondrial conditioning via HIIT/Breathwork, Deep Work cycles, and Metabolic Switching experiments.",
            domains: ["Focus", "Energy", "Recovery"],
            dailyBlocks: [
                {
                    range: "Day 22-25",
                    title: "Mitochondrial Conditioning",
                    goal: "Amplify energy production & recovery capacity.",
                    methods: ["Breathwork (Wim Hof)", "HIIT 2x/week, Zone-2 3x/week", "NAD/NMN boosters (optional)"],
                    why: "Mitochondrial upregulation improves energy and cognition.",
                    icon: Battery
                },
                {
                    range: "Day 26-28",
                    title: "Cognitive & Focus Flow",
                    goal: "Achieve deep work and emotional balance.",
                    methods: ["Deep Work Cycles (90 min focus)", "Morning cold shower + coffee", "Screen fast 8PM-8AM"],
                    why: "Neurochemical stability = sustainable high performance.",
                    icon: Crosshair
                },
                {
                    range: "Day 29-32",
                    title: "Metabolic Switching Experiment",
                    goal: "Train body to alternate between glucose and fat fuel.",
                    methods: ["Two-day low-carb, high-fat phase", "Two-day balanced refeed"],
                    why: "Metabolic flexibility predicts longevity and stable mood.",
                    icon: Layers
                },
                {
                    range: "Day 33-35",
                    title: "Recovery Mastery",
                    goal: "Cement deep restoration & tissue healing.",
                    methods: ["Yoga Nidra / NSDR (20-30 min)", "Gratitude journaling", "Collagen optional"],
                    why: "True recovery completes biological upgrade.",
                    icon: Anchor
                }
            ]
        },
        {
            week: "Week 6",
            phaseName: "SUSTAIN",
            title: "Longevity Blueprint & Integration",
            objective: "Optimization means nothing unless it lasts.",
            description: "Progress analytics, lifestyle anchoring, and creating your 'Morning & Evening Blueprint' for the long term.",
            domains: ["Maintenance", "Reinforcement"],
            dailyBlocks: [
                {
                    range: "Day 36-38",
                    title: "Progress Analytics & Reflection",
                    goal: "Quantify transformation and assess sustainability.",
                    methods: ["Clinician consultation", "Compare baseline vs now (metrics)", "Personalized data visualization"],
                    why: "Feedback anchors identity-level change.",
                    icon: Database
                },
                {
                    range: "Day 39-40",
                    title: "Lifestyle Anchoring & Rituals",
                    goal: "Integrate learned behaviors into lifestyle rhythm.",
                    methods: ["Create 'My Morning & Evening Blueprint'", "15-min daily digital detox"],
                    why: "Lifestyle automation sustains gains long-term.",
                    icon: Sun
                },
                {
                    range: "Day 42",
                    title: "Longevity Blueprint & Transition",
                    goal: "Reveal how far you've come.",
                    methods: ["Final consultation with Dr Giri", "Receive 6-Week BioReset Snapshot", "Performance Potential Index"],
                    why: "Data is a compass used only when it changes care or motivation.",
                    icon: Trophy
                }
            ]
        }
    ],
    impacts: BUSINESS_IMPACT_DATA,
    idealFor: [
        "Founders with decision fatigue",
        "Leaders wanting to lose stress-weight",
        "Anyone facing mid-day crashes"
    ]
  },
  {
    id: 'cxo-reset',
    title: 'The CXO Reset',
    tagline: 'Premium Transformation',
    price: '₹30,000 - ₹50,000',
    duration: '12 Weeks',
    bestFor: 'Executives needing 1:1 deep-dive care',
    features: [
      'Everything in Cohort +',
      'AI-Driven Progress Tracking',
      '1:1 Coaching & Concierge',
      'Private Members Club',
      'Advanced Supplement Protocols'
    ],
    cta: 'Apply for CXO Reset',
    popular: true,
    heroImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60',
    description: 'A 360° biohacking transformation designed by Dr. Harshal Giri to enhance cognition and reverse fatigue.',
    longDescription: 'The comprehensive 12-week transformation for leaders who cannot afford downtime. We dive deeper into your biomarkers, offering a concierge experience where we manage your nutrition, supplementation, and recovery protocols entirely.',
    format: '1:1 Coaching + AI Tracking + Concierge',
    deliverables: [
        'Deep Biomarker Analysis',
        'Continuous Glucose Monitoring (CGM) Insights',
        'Concierge Supplement Management',
        'Private Network Access',
        'Weekly 1:1 Strategy Calls'
    ],
    // Reusing the core methodology but extended
    timeline: [
        {
            week: "Month 1",
            phaseName: "FOUNDATION",
            title: "Biological Reset & Data Mapping",
            objective: "Complete biological overhaul.",
            description: "Intensive deep-dive into bloodwork, genetics, and lifestyle data to build the perfect roadmap.",
            domains: ["Data", "Metabolism"]
        },
        {
            week: "Month 2",
            phaseName: "OPTIMIZATION",
            title: "Performance Enhancement",
            objective: "Peak cognitive and physical output.",
            description: "Advanced protocols for deep work, sleep density, and physical composition changes.",
            domains: ["Cognition", "Physique"]
        },
        {
            week: "Month 3",
            phaseName: "LONGEVITY",
            title: "Age Reversal & Sustainability",
            objective: "Slowing biological aging.",
            description: "Implementation of longevity molecules, stress resilience training, and automated lifestyle systems.",
            domains: ["Longevity", "Automation"]
        }
    ],
    impacts: BUSINESS_IMPACT_DATA,
    idealFor: [
        "CXOs managing large teams",
        "Investors needing high cognitive endurance",
        "Founders post-fundraising"
    ]
  },
  {
    id: 'concierge',
    title: 'BioReset Concierge',
    tagline: 'Flagship Retainer',
    price: '₹2L - ₹5L / Year',
    duration: 'Annual',
    bestFor: 'Top 1% demanding total health management',
    features: [
      'Full Annual Health Management',
      'Quarterly Advanced Labs',
      'Doctor on Speed Dial',
      'Global Supplement Sourcing',
      'Family Protocol Integration'
    ],
    cta: 'Inquire for Elite',
    isElite: true,
    heroImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60',
    description: 'The ultimate health insurance for your legacy. We run your biology so you can run your empire.',
    longDescription: 'For the top 1% who treat their body as their most valuable asset. This is not a program; it is an operating system for your life. You get full access to Dr. Giri and his team of scientists to manage every aspect of your health, from travel protocols to anti-aging therapies.',
    format: 'Annual Retainer',
    deliverables: [
        '24/7 Medical Access',
        'Quarterly Executive Checkups',
        'Travel & Jet Lag Protocols',
        'Custom Supplement Manufacturing',
        'Family Health Optimization'
    ],
    timeline: [], // Customized
    impacts: [
        {
            title: "Better Body = Stronger Brand",
            description: "A fit, energetic leader commands respect.",
            result: "Greater investor trust and company image."
        }
    ],
    idealFor: [
        "UHNIs",
        "Celebrity Founders",
        "Public Figures"
    ]
  }
];


// Simplified testimonials for Home Page
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "My focus improved, and I lost 15kg without burnout.",
    author: "Arjun Malik, CEO",
    metric: "30-40% Productivity"
  },
  {
    id: 2,
    quote: "10-12 productive hours a day with no afternoon crash.",
    author: "Prerna A., Founder",
    metric: "Sustained Energy"
  },
  {
    id: 3,
    quote: "Calmer leadership under pressure. My team noticed.",
    author: "Devansh K., Director",
    metric: "Emotional Stability"
  }
];

// Full Testimonials for Results Page
export const ALL_TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        author: "Ritika Sharma",
        age: "25 yrs",
        location: "Mumbai",
        date: "Feb 2024",
        metric: "-15 kg | Belly Fat Reduced",
        quote: "I never experienced this before. I too gained muscle mass.",
        story: "I was struggling with bloating and fatigue. Diet plan bana-bana ke thak gayi thi — nothing worked long-term. Dr Harshal he is one of my college friend so he gave me scientific approach — balance diet, light movement and deep sleep where I am mostly lagging and his sleep protocol is 🤌 amazing.\n\n2 months mein meri energy level double ho gayi and belly fat visibly kam hua. I lost 15 kg in 5 months from 76 kg to 61 kg.",
        image: "/images/ritika_sharma.jpeg" // Fitness/Exercise
    },
    {
        id: 2,
        author: "Prerna Ahuja",
        age: "33 yrs",
        location: "Delhi",
        date: "Jun 2024",
        metric: "-10 kg | Sleep Restored",
        quote: "Bas 3 months mein 10 kg down with peaceful sleep!",
        story: "After my second baby, mera weight control mein nahi aa raha tha. Sleep disrupted, stress high, aur mood swings har roz. Dr Harshal sir ne mujhe bataya ki hormones tab tak work nahi karenge jab tak main sleep aur light exposure theek nahi karti.\n\nHe added magnesium and omega 3s, taught circadian rhythm hacks — and bas 3 months mein 10 kg down with peaceful sleep! Sir follows a root-cause approach.",
        image: "/images/prerna_ahuja.jpeg" // Peaceful/Morning
    },
    {
        id: 3,
        author: "Arjun Malik",
        age: "31 yrs",
        location: "Bangalore",
        date: "Oct 2023",
        metric: "-15 kg | Improved Focus",
        quote: "Mera focus bhi improve hua aur 15 kg lose ho gaya.",
        story: "Because of my IT job, I was relying too much on junk food. Dr Harshal Giri personally guided me — he didn’t judge me, just explained how to work with metabolism through timing and smart NEAT movement.\n\nIntermittent fasting, daily walks and a clean high-protein Indian diet. Now I feel light and energetic. He knows when to fast when not to; the diet he suggested to me he suggested just the opposite to my wife so it was truly personalised.",
        image: "/images/arjun_malik.jpeg" // Healthy Food/Diet
    },
    {
        id: 4,
        author: "Megha Rathore",
        age: "26 yrs",
        location: "Jaipur",
        date: "Apr 2024",
        metric: "Cycle Normalised | -11.5 lbs",
        quote: "No medicine, no crazy workout, he gave some hacks.",
        story: "Mujhe PCOD aur constant cravings ki problem thi. Dr Harshal Giri ne mere gut aur sleep pattern pe kaam kiya. Unhone meri body ko heal karna sikhaya — when to eat, how to move, and how to breathe for metabolic control.\n\nWithin 6 months my cycle normalised and stubborn weight came down by 11.5 lbs.",
        image: "/images/megha_rathore.jpeg" // Yoga/Health
    },
    {
        id: 5,
        author: "Simran Kaur",
        age: "29 yrs",
        location: "Chandigarh",
        date: "Jan 2025",
        metric: "-13 kg | Skin & Hair Improved",
        quote: "Most importantly – I got disciplined!",
        story: "Hiiij i was too much in junk food and party and I use to fear diet starvation but Dr Giri, he make me eat even more - mujhe protein aur micronutrient balance bataya.\n\nHis biohacking plan help me lose 13 kg and my skin my hair they change a lot. Thank you sir for changing my life naturally. 🌿",
        image: "/images/simran_kaur.jpeg" // Healthy food
    },
    {
        id: 6,
        author: "Devansh Kapoor",
        age: "29 yrs",
        location: "Pune",
        date: "Sep 2023",
        metric: "-20 kg | Stress Reduced",
        quote: "Feels like he doesn’t just train your body; he reprograms your brain too.",
        story: "Bro, stress fat is real! 😂 I was hitting the gym every day but still gaining fat. Harshal explained cortisol and stress hormones like a pro.\n\nWe worked on meal timing, added adaptogens, and got my sleep right. End result — 20 kg down, mind calm, energy high.",
        image: "/images/devanh_kapoor.jpeg" // Gym
    },
    {
        id: 7,
        author: "Siddharth Menon",
        age: "38 yrs",
        location: "Kochi",
        date: "Nov 2023",
        metric: "-11 kg | Energy Restored",
        quote: "He gives logic that just clicks.",
        story: "My sleep was destroyed thanks to work stress. Harshal taught me small hacks — sunlight in the morning, magnesium at night, and better meal timing melatonin cycling.\n\nMan, that stuff works! I lost 11 kg without feeling tired once. He gave me diet and workout too.",
        image: "/images/siddharth_menon.jpeg" // Nature/Morning
    },
    {
        id: 8,
        author: "Vaishnavi Suthar",
        age: "29 yrs",
        location: "Udaipur",
        date: "Feb 2025",
        metric: "Better Recovery | Energy High",
        quote: "He’s less like a doctor and more like that one friend who knows exactly what your body needs.",
        story: "Honestly I didn’t even realise when the weight started dropping. 😅 Harshal just made me fix small things — when I sleep, what I eat, and how I start my mornings and which exercise I should do.\n\nIt help in better recovery and the right supplements. I used to feel tired all the time, now I wake up with actual energy.",
        image: "/images/vaishnavi_suthar.jpeg" // Gym/Active
    },
    {
        id: 9,
        author: "Ananya Rao",
        age: "27 yrs",
        location: "Bangalore",
        date: "Sep 2025",
        metric: "70kg -> 54kg (-16kg)",
        quote: "I finally love the person I see in the mirror.",
        story: "This took time… and patience… but, it was worth it. I started with Harshal at 70 kg, exhausted and low on confidence. He didn’t put me on any ‘diet plan’ — just taught me how my body actually works.\n\nSimple food, good sleep, hydration, a bit of movement and the right supplements — that’s it. 1.5 years later, I’m 54 kg, clear-headed, and I finally love the person I see in the mirror.",
        image: "/images/ananya_rao.jpeg" // Happy/Mirror
    },
    {
        id: 10,
        author: "Rahul Menon",
        age: "32 yrs",
        location: "Chennai",
        date: "Sep 2025",
        metric: "-10 kg | Digestion Improved",
        quote: "The biggest difference wasn’t the weight — it was how I felt.",
        story: "This was 3 months of pure consistency no crazy diets, no 2-hour gym sessions. Harshal just helped me clean up my routine — when to eat, when to move, and when to stop scrolling and actually sleep 😂\n\nThe biggest difference wasn’t the weight — it was how I felt. My energy, focus and digestion all improved big time. 22 lbs (10 Kg) down, confidence way up.",
        image: "/images/rahul_menon.jpeg" // Lifestyle/Meditation
    },
    {
        id: 11,
        author: "Meena S",
        age: "46 yrs",
        location: "Pune",
        date: "Jan 2025",
        metric: "HbA1c 6.4 -> 5.7",
        quote: "I never thought diabetes could be reversed without medicine.",
        story: "When I first met Harshal, my sugar reports were getting worse every year. He explained everything in such a chill way — food, sleep, even mindset.\n\nWithin months, my HbA1c came down from 6.4 to 5.7 naturally! Dr giri ne mujhe khana chhodne ki jagah replace karna sikhaya so that I can still eat some sweets.",
        image: "/images/meena_s.jpeg" // Medical/Health
    }
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: 'focus', title: 'Cognitive Optimization', icon: Brain, count: 12 },
  { id: 'stress', title: 'Stress & Cortisol Control', icon: Activity, count: 8 },
  { id: 'metabolism', title: 'Metabolic Flexibility', icon: Flame, count: 15 },
  { id: 'sleep', title: 'Deep Sleep Science', icon: Moon, count: 6 },
  { id: 'longevity', title: 'Executive Longevity', icon: Heart, count: 5 },
];

export const FEATURED_GUIDES: Guide[] = [
  { id: 'g1', title: 'The CXO Burnout Protocol', type: 'PDF Blueprint', downloadUrl: '#' },
  { id: 'g2', title: 'Circadian Rhythms for Leaders', type: 'Video Masterclass', downloadUrl: '#' },
  { id: 'g3', title: 'Supplements for Focus', type: 'Cheat Sheet', downloadUrl: '#' },
];

export const FAQS: FAQItem[] = [
  {
    question: "I have no time. How much time does this require?",
    answer: "We design for the busiest 1%. The MVP Cohort requires about 3-4 hours of total live time over 6 weeks. The daily protocols (diet, supplements, sleep hacks) integrate into your existing lifestyle rather than adding to it."
  },
  {
    question: "Is this just a weight loss program?",
    answer: "No. Weight loss is a side effect. Our primary goal is 'Biological Reprogramming'—fixing your gut, hormones, and energy systems so you perform better at work and live longer."
  },
  {
    question: "Do I need to stop drinking coffee or alcohol?",
    answer: "Not necessarily. We teach you 'Biological Timing'. We optimize *when* and *how* you consume stimulants to minimize damage and maximize performance, rather than enforcing unrealistic bans."
  },
  {
    question: "How is this different from a gym trainer?",
    answer: "A trainer focuses on muscle. We focus on the 'Operating System'—your hormones, gut microbiome, cellular energy (mitochondria), and nervous system. Dr. Giri is a clinical expert, not just a fitness coach."
  }
];

export const FOUNDER_CREDENTIALS = [
    {
        category: "Clinical Expertise",
        items: [
            "PhD in Exercise Science (Univ. of Bath – in progress)",
            "Master of Physiotherapy (Sports)",
            "Expertise in Metabolic Disorders Reversal"
        ]
    },
    {
        category: "Performance Science",
        items: [
            "ACE Certified Health Coach",
            "NASM Fitness Nutrition Specialist",
            "Genetic Nutrition Expert"
        ]
    },
    {
        category: "Lifestyle Medicine",
        items: [
            "Physician – American College of Lifestyle Medicine",
            "Former Expert at Upgrade Labs (USA)",
            "India's 'Tony Robbins of Biohacking'"
        ]
    }
];

export const CELEBRITY_CLIENTS = [
    "Anant Ambani",
    "Kartik Aaryan",
    "Mandira Bedi",
    "Kalki Koechlin",
    "Cyrus S. Poonawalla",
    "Pranav Adani"
];

// PDF Page 2 - Core Systems (Alternate display if needed, but SOLUTION_STEPS covers it)
export const BIORESET_METHOD_PILLARS = [
    {
        title: "Hormones & Adrenal",
        desc: "Reset stress and hormone rhythm so energy, focus, and drive return naturally.",
        icon: Activity
    },
    {
        title: "Metabolism & Energy",
        desc: "Restart metabolism and train the body to burn fat efficiently and heal inflammation.",
        icon: Flame
    },
    {
        title: "Gut & Digestion",
        desc: "Heal the gut to improve absorption and stabilize mood and focus.",
        icon: Apple
    },
    {
        title: "Sleep & Recovery",
        desc: "Repair sleep cycles so the body recovers faster and the mind resets daily.",
        icon: Moon
    },
    {
        title: "Mind & Behavior",
        desc: "Rewire habits and routines that keep leaders calm, focused, and consistent.",
        icon: Brain
    }
];
