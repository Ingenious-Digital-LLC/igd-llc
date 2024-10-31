import { Heart } from 'lucide-react';
import type { CaseStudy } from './types';

export const nonprofit: CaseStudy = {
  id: 'nonprofit-platform',
  title: 'Digital Transformation for Nonprofit',
  client: 'Community Impact Foundation',
  industry: 'Nonprofit',
  challenge: `
    A growing nonprofit organization faced several challenges:
    - Limited donor engagement
    - Manual volunteer management
    - Inefficient fund tracking
    - Poor impact measurement
  `,
  solution: `
    We developed an integrated nonprofit management platform:
    - Digital donor engagement system
    - Volunteer management portal
    - Financial tracking dashboard
    - Impact measurement tools
  `,
  results: [
    '75% increase in online donations',
    '50% improvement in volunteer retention',
    '40% reduction in administrative costs',
    '200% increase in donor engagement',
    'Impact tracking across 50+ programs',
    '30% increase in grant success rate'
  ],
  technologies: [
    'React',
    'Node.js',
    'MongoDB',
    'AWS',
    'Stripe Donations',
    'Analytics'
  ],
  features: [
    'Donor Management',
    'Volunteer Portal',
    'Program Tracking',
    'Impact Analytics',
    'Grant Management',
    'Event Planning'
  ],
  metrics: {
    donations: '75%',
    engagement: '200%',
    efficiency: '40%',
    roi: '150%'
  },
  image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80',
  icon: Heart,
  testimonial: {
    quote: "This platform has transformed how we operate and engage with our community. We can now focus more on our mission and less on administration.",
    author: "Maria Rodriguez",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '4 weeks',
    development: '14 weeks',
    testing: '4 weeks',
    deployment: '2 weeks'
  },
  nextSteps: [
    'Mobile app development',
    'AI-powered donor matching',
    'International expansion',
    'Advanced impact visualization'
  ]
};