import { Building2 } from 'lucide-react';
import type { CaseStudy } from './types';

export const realestate: CaseStudy = {
  id: 'property-management-platform',
  title: 'Smart Property Management Platform',
  client: 'Urban Living Properties',
  industry: 'Real Estate',
  challenge: `
    A property management company faced challenges:
    - Manual property management processes
    - Poor tenant communication
    - Inefficient maintenance tracking
    - Limited property analytics
  `,
  solution: `
    We built a comprehensive property management system:
    - Automated property management
    - Tenant portal
    - Maintenance automation
    - Analytics dashboard
  `,
  results: [
    '40% reduction in management costs',
    '60% faster maintenance response',
    '30% increase in tenant satisfaction',
    '50% reduction in paperwork',
    '25% increase in occupancy rates',
    '35% improvement in cash flow'
  ],
  technologies: [
    'React',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'IoT Integration',
    'Mobile Apps'
  ],
  features: [
    'Tenant Portal',
    'Maintenance Tracking',
    'Payment Processing',
    'Property Analytics',
    'Document Management',
    'Communication Platform'
  ],
  metrics: {
    efficiency: '40%',
    satisfaction: '30%',
    occupancy: '25%',
    roi: '180%'
  },
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
  icon: Building2,
  testimonial: {
    quote: "The platform has streamlined our entire operation. We've seen significant improvements in efficiency and tenant satisfaction.",
    author: "Rachel Martinez",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '6 weeks',
    development: '16 weeks',
    testing: '6 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'Smart building integration',
    'Virtual property tours',
    'Predictive maintenance',
    'Market analytics integration'
  ]
};