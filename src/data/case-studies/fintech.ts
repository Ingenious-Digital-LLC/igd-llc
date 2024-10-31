import { Building } from 'lucide-react';
import type { CaseStudy } from './types';

export const fintech: CaseStudy = {
  id: 'fintech-platform',
  title: 'Digital Banking Platform',
  client: 'NextGen Financial',
  industry: 'Finance',
  challenge: `
    A digital bank needed a modern platform:
    - Legacy system limitations
    - Complex regulatory requirements
    - Limited mobile capabilities
    - Scaling challenges
  `,
  solution: `
    We built a comprehensive digital banking platform:
    - Cloud-native architecture
    - Mobile-first approach
    - Real-time processing
    - Advanced security features
  `,
  results: [
    '200% increase in user adoption',
    '75% reduction in transaction time',
    '99.999% uptime achieved',
    '50% cost reduction',
    'Expansion to 3 new markets',
    '0 security incidents'
  ],
  technologies: [
    'React Native',
    'Node.js',
    'MongoDB',
    'AWS',
    'Plaid API',
    'Stripe'
  ],
  features: [
    'Mobile Banking',
    'Real-time Transfers',
    'Investment Platform',
    'Budgeting Tools',
    'Card Management',
    'Security Center'
  ],
  metrics: {
    adoption: '200%',
    performance: '75%',
    reliability: '99.999%',
    roi: '300%'
  },
  image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80',
  icon: Building,
  testimonial: {
    quote: "The platform has exceeded our expectations. We've seen unprecedented growth and customer satisfaction.",
    author: "James Wilson",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '6 weeks',
    development: '20 weeks',
    testing: '8 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'Cryptocurrency integration',
    'Advanced fraud detection',
    'International expansion',
    'Open banking APIs'
  ]
};