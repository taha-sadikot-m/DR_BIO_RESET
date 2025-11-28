
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface DailyBlock {
  range: string; // e.g., "Day 1-2"
  title: string;
  goal: string;
  methods: string[];
  why: string;
  icon?: React.ElementType;
}

export interface TimelinePhase {
  week: string;
  phaseName: string;
  title: string;
  objective: string;
  description: string;
  domains: string[];
  dailyBlocks?: DailyBlock[]; // Added for detailed curriculum
}

export interface BusinessImpact {
  title: string;
  description: string;
  result: string;
  icon?: React.ElementType;
}

export interface Program {
  id: string;
  title: string;
  price: string;
  tagline?: string;
  description?: string; 
  features: string[];
  cta: string;
  popular?: boolean;
  isElite?: boolean;
  bestFor?: string;
  duration?: string;
  // Detailed Page Props
  heroImage?: string;
  longDescription?: string;
  timeline?: TimelinePhase[];
  impacts?: BusinessImpact[];
  deliverables?: string[];
  idealFor?: string[];
  format?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  metric: string;
  // New fields for detailed page
  age?: string;
  location?: string;
  date?: string;
  image?: string; // URL placeholder
  story?: string; // Longer text
}

export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface BlogCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  count: number;
}

export interface Guide {
  id: string;
  title: string;
  type: string; // e.g., "PDF Guide", "Video Series"
  downloadUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface AudienceItem {
  id: string;
  text: string;
}
