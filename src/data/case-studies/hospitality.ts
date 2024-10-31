import { Hotel } from 'lucide-react';
import type { CaseStudy } from './types';

export const hospitality: CaseStudy = {
  id: 'hotel-management-platform',
  title: 'Smart Hotel Management System',
  client: 'Coastal Luxury Hotels',
  industry: 'Hospitality',
  challenge: `
    A luxury hotel chain faced operational challenges:
    - Manual booking processes
    - Inefficient staff management
    - Limited guest experience personalization
    - Fragmented service delivery
  `,
  solution: `
    We created an integrated hospitality management platform:
    - Automated booking system
    - Smart staff scheduling
    - Guest experience personalization
    - Service delivery automation
  `,
  results: [
    '50% increase in booking efficiency',
    '35% improvement in staff productivity',
    '70% faster check-in process',
    '45% increase in guest satisfaction',
    '25% reduction in operational costs',
    '90% positive guest reviews'
  ],
  technologies: [
    'React Native',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'IoT Integration',
    'AI/ML'
  ],
  features: [
    'Smart Room Controls',
    'Mobile Check-in',
    'Guest Services App',
    'Staff Management',
    'Analytics Dashboard',
    'Maintenance Tracking'
  ],
  metrics: {
    efficiency: '50%',
    satisfaction: '45%',
    productivity: '35%',
    roi: '180%'
  },
  image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  icon: Hotel,
  testimonial: {
    quote: "The platform has transformed our guest experience and operational efficiency. We've seen remarkable improvements across all metrics.",
    author: "Alexandra Chen",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '8 weeks',
    development: '16 weeks',
    testing: '6 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'Voice-controlled room features',
    'Predictive maintenance',
    'Virtual concierge service',
    'Sustainability tracking'
  ]
};