// Structured Data (Schema.org) Generators for Dr. BioReset
// JSON-LD schemas for rich snippets and enhanced search results

import { ORGANIZATION_SCHEMA } from './seo-config';

const SITE_URL = 'https://drbioreset.com'; // Update with actual domain

// Doctor/Physician Schema for Dr. Harshal Giri
export const getDoctorSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Harshal Giri',
  honorificPrefix: 'Dr.',
  jobTitle: 'Chief Biohacker & Exercise Scientist',
  description: 'Physician, Exercise Scientist, and India\'s leading biohacking expert. Specializes in reversing diabetes, PCOD, and optimizing executive performance through evidence-based biohacking protocols.',
  image: `${SITE_URL}/images/founder_image_2.jpg`,
  url: `${SITE_URL}/about`,
  worksFor: {
    '@type': 'Organization',
    name: 'Dr. BioReset'
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Exercise Science Program'
    }
  ],
  knowsAbout: [
    'Biohacking',
    'Diabetes Reversal',
    'PCOD Treatment',
    'Hormone Optimization',
    'Metabolic Health',
    'Executive Wellness',
    'Functional Medicine'
  ],
  medicalSpecialty: [
    'Endocrinology',
    'Preventive Medicine',
    'Exercise Science',
    'Functional Medicine'
  ]
});

// Service Schema Generator
export const getServiceSchema = (service: {
  name: string;
  description: string;
  price: string;
  duration: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalTherapy',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'MedicalBusiness',
    name: 'Dr. BioReset'
  },
  offers: {
    '@type': 'Offer',
    price: service.price,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: service.url,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'INR',
      price: service.price
    }
  },
  duration: service.duration,
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: service.url
  }
});

// Program-specific schemas
export const PROGRAM_SCHEMAS = {
  'metabolic-reset': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Metabolic Reset Cohort - 5 Week Program',
    description: '5-week doctor-led metabolic reset program with group support. Includes personalized meal plans, exercise protocols, and weekly coaching to reverse insulin resistance and balance hormones.',
    brand: {
      '@type': 'Brand',
      name: 'Dr. BioReset'
    },
    offers: {
      '@type': 'Offer',
      price: '15000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/programs/metabolic-reset`,
      seller: {
        '@type': 'Organization',
        name: 'Dr. BioReset'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1000',
      bestRating: '5',
      worstRating: '1'
    }
  },
  
  'cxo-reset': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'CXO Reset Protocol - 12 Week Executive Program',
    description: 'Premium 12-week biohacking protocol designed for CEOs, founders, and executives. Includes 1:1 doctor consultations, advanced lab work, and personalized optimization protocols.',
    brand: {
      '@type': 'Brand',
      name: 'Dr. BioReset'
    },
    offers: {
      '@type': 'Offer',
      price: '50000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/programs/cxo-reset`,
      seller: {
        '@type': 'Organization',
        name: 'Dr. BioReset'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1'
    }
  },

  'concierge': {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Concierge Biohacking - Ultra-Premium Service',
    description: 'Ultra-premium concierge biohacking service with 24/7 WhatsApp access, unlimited consultations, comprehensive lab coverage, and at-home services for peak performance.',
    brand: {
      '@type': 'Brand',
      name: 'Dr. BioReset'
    },
    offers: {
      '@type': 'Offer',
      price: '200000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/programs/concierge`,
      seller: {
        '@type': 'Organization',
        name: 'Dr. BioReset'
      }
    }
  }
};

// FAQ Schema Generator
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

// Review/Testimonial Schema Generator
export const getReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}>) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dr. BioReset',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: reviews.length.toString(),
    bestRating: '5',
    worstRating: '1'
  },
  review: reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished || new Date().toISOString().split('T')[0]
  }))
});

// BreadcrumbList Schema Generator
export const getBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
});

// Article Schema Generator (for blog posts)
export const getArticleSchema = (article: {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  author: {
    '@type': 'Person',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Dr. BioReset',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo_transparent.png`
    }
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  image: article.image || `${SITE_URL}/images/logo_transparent.png`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url
  }
});

// Video Schema Generator (for testimonials)
export const getVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: video.duration,
  contentUrl: video.url,
  embedUrl: video.url,
  publisher: {
    '@type': 'Organization',
    name: 'Dr. BioReset',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/logo_transparent.png`
    }
  }
});

// Export organization schema
export { ORGANIZATION_SCHEMA };

// Helper to inject multiple schemas
export const combineSchemas = (...schemas: any[]) => {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas
  };
};
