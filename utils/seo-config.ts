// SEO Configuration for Dr. BioReset Website
// Centralized metadata management for all pages

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://drbioreset.com'; // Update with actual domain
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo_transparent.png`;

export const DEFAULT_SEO: SEOConfig = {
  title: 'Dr. BioReset | India\'s #1 Biohacking Program for CXOs & Entrepreneurs',
  description: 'Expert-led biohacking program to naturally reverse diabetes, PCOD, burnout, and optimize performance. Doctor-supervised protocols for busy executives. 1000+ success stories.',
  keywords: [
    'biohacking India',
    'reverse diabetes naturally',
    'PCOD reversal treatment',
    'executive wellness program',
    'CXO health optimization',
    'metabolic reset',
    'hormone balance therapy',
    'burnout recovery',
    'Dr Harshal Giri',
    'corporate wellness India'
  ],
  ogImage: DEFAULT_OG_IMAGE,
  ogType: 'website'
};

export const SEO_CONFIGS: Record<string, SEOConfig> = {
  home: {
    title: 'Dr. BioReset | Reverse Diabetes, PCOD & Burnout Naturally | Expert Biohacking',
    description: 'India\'s premier doctor-led biohacking program for CXOs & entrepreneurs. Reverse diabetes, PCOD, hormonal imbalance in 6-12 weeks. 1000+ executives transformed. Science-backed protocols.',
    keywords: [
      'reverse diabetes naturally India',
      'PCOD reversal without medication',
      'biohacking for executives',
      'CXO wellness program',
      'metabolic reset India',
      'natural hormone therapy',
      'executive burnout recovery',
      'Dr Harshal Giri biohacker',
      'corporate health optimization',
      'diabetes reversal program India'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    canonical: SITE_URL
  },
  
  programs: {
    title: 'Biohacking Programs | Metabolic Reset, CXO Protocol & Concierge | Dr. BioReset',
    description: 'Choose from 3 expert-led programs: 5-week Metabolic Reset cohort, 12-week CXO Protocol, or premium Concierge service. Personalized biohacking for diabetes, PCOD & executive wellness.',
    keywords: [
      'biohacking program India',
      'metabolic reset program',
      'CXO health protocol',
      'executive wellness package',
      'diabetes reversal program',
      'PCOD treatment program',
      'concierge health service',
      'personalized biohacking',
      'hormone optimization program'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    canonical: `${SITE_URL}/programs`
  },

  'programs-metabolic-reset': {
    title: 'Metabolic Reset Cohort | 5-Week Group Program | Dr. BioReset',
    description: '5-week doctor-led metabolic reset program. Group cohort with personalized tracking. Reverse insulin resistance, balance hormones, lose weight naturally. Starting at ₹15,000.',
    keywords: [
      'metabolic reset program',
      'insulin resistance reversal',
      'group biohacking program',
      'weight loss program India',
      'hormone balance program',
      'affordable biohacking',
      'metabolic health India'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    canonical: `${SITE_URL}/programs/metabolic-reset`
  },

  'programs-cxo-reset': {
    title: 'CXO Reset Protocol | 12-Week Executive Health Optimization | Dr. BioReset',
    description: 'Premium 12-week biohacking protocol for CEOs & founders. 1:1 doctor consultations, advanced labs, personalized protocols. Reverse burnout, optimize performance. ₹50,000.',
    keywords: [
      'CXO health program',
      'executive wellness India',
      'CEO health optimization',
      'founder burnout recovery',
      'executive biohacking',
      'performance optimization',
      'leader wellness program'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    canonical: `${SITE_URL}/programs/cxo-reset`
  },

  'programs-concierge': {
    title: 'Concierge Biohacking | Ultra-Premium Health Management | Dr. BioReset',
    description: 'Ultra-premium concierge biohacking service. 24/7 WhatsApp access, unlimited consultations, full lab coverage, at-home services. For leaders who demand excellence. ₹2,00,000.',
    keywords: [
      'concierge health service India',
      'premium biohacking',
      'VIP health management',
      'luxury wellness program',
      'executive health concierge',
      'personalized health optimization'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'product',
    canonical: `${SITE_URL}/programs/concierge`
  },

  about: {
    title: 'About Dr. Harshal Giri | Founder & Chief Biohacker | Dr. BioReset',
    description: 'Meet Dr. Harshal Giri - Exercise Scientist, Physician, and India\'s leading biohacker. Trained 1000+ CXOs. Combines clinical medicine, performance science & biohacking for peak health.',
    keywords: [
      'Dr Harshal Giri',
      'biohacker India',
      'exercise scientist',
      'functional medicine doctor',
      'health optimization expert',
      'celebrity biohacker India',
      'Dr BioReset founder'
    ],
    ogImage: `${SITE_URL}/images/founder_image_2.jpg`,
    ogType: 'profile',
    canonical: `${SITE_URL}/about`
  },

  results: {
    title: 'Success Stories & Results | 1000+ Lives Transformed | Dr. BioReset',
    description: 'Real transformation stories from CXOs, founders & professionals. See documented results: HbA1c reduced, hormones balanced, energy restored. Before/after labs & testimonials.',
    keywords: [
      'diabetes reversal success stories',
      'PCOD reversal testimonials',
      'biohacking results India',
      'executive transformation',
      'health reversal proof',
      'client testimonials biohacking'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    canonical: `${SITE_URL}/results`
  },

  learn: {
    title: 'Biohacking Resources & Health Articles | Learn | Dr. BioReset',
    description: 'Free biohacking resources, health guides, and science-backed articles on diabetes reversal, hormone optimization, metabolic health, and performance enhancement.',
    keywords: [
      'biohacking resources',
      'health optimization guides',
      'diabetes reversal information',
      'hormone balance tips',
      'metabolic health articles',
      'executive wellness tips'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    canonical: `${SITE_URL}/learn`
  },

  quiz: {
    title: 'Health Reversal Quiz | Assess Your Metabolic Health | Dr. BioReset',
    description: 'Take our free 3-minute health assessment quiz. Discover your metabolic health score and get personalized biohacking recommendations from our experts.',
    keywords: [
      'health assessment quiz',
      'metabolic health test',
      'diabetes risk quiz',
      'hormone balance assessment',
      'biohacking quiz India'
    ],
    ogImage: DEFAULT_OG_IMAGE,
    ogType: 'website',
    canonical: `${SITE_URL}/quiz`
  }
};

// Helper function to get SEO config with fallback
export const getSEOConfig = (page: string): SEOConfig => {
  return SEO_CONFIGS[page] || DEFAULT_SEO;
};

// Organization structured data (constant)
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Dr. BioReset',
  alternateName: 'Dr BioReset',
  description: 'India\'s #1 Expert-Led Biohacking Program to Naturally Reverse Diabetes & PCOD',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo_transparent.png`,
  image: `${SITE_URL}/images/logo_transparent.png`,
  founder: {
    '@type': 'Person',
    name: 'Dr. Harshal Giri',
    jobTitle: 'Chief Biohacker & Founder',
    description: 'Exercise Scientist, Physician, and Biohacking Expert'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8824000316',
    contactType: 'Customer Service',
    availableLanguage: ['English', 'Hindi']
  },
  sameAs: [
    'https://www.instagram.com/dr.bioreset',
    'https://www.facebook.com/drbioreset',
    'https://www.youtube.com/@drbioreset',
    'https://www.linkedin.com/company/drbioreset'
  ],
  priceRange: '₹₹₹',
  medicalSpecialty: [
    'Endocrinology',
    'Preventive Medicine',
    'Functional Medicine',
    'Exercise Science'
  ]
};
