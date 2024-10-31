import { Car } from 'lucide-react';
import type { CaseStudy } from './types';

export const automotive: CaseStudy = {
  id: 'automotive-platform',
  title: 'Connected Vehicle Platform',
  client: 'AutoTech Innovations',
  industry: 'Automotive',
  challenge: `
    An automotive company needed a modern connected vehicle platform:
    - Limited vehicle connectivity
    - Poor maintenance tracking
    - Inefficient fleet management
    - Limited driver insights
  `,
  solution: `
    We developed an integrated connected vehicle platform:
    - Real-time vehicle monitoring
    - Predictive maintenance
    - Fleet optimization
    - Driver behavior analytics
  `,
  results: [
    '40% reduction in maintenance costs',
    '30% improvement in fleet efficiency',
    '50% decrease in vehicle downtime',
    '25% fuel savings',
    '60% fewer maintenance emergencies',
    '35% increase in driver safety'
  ],
  technologies: [
    'React Native',
    'Node.js',
    'MongoDB',
    'AWS IoT',
    'TensorFlow',
    'CAN Bus Integration'
  ],
  features: [
    'Vehicle Tracking',
    'Maintenance Scheduling',
    'Driver Analytics',
    'Fleet Management',
    'Fuel Optimization',
    'Safety Monitoring'
  ],
  metrics: {
    efficiency: '30%',
    savings: '25%',
    safety: '35%',
    roi: '200%'
  },
  image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
  icon: Car,
  testimonial: {
    quote: "This platform has revolutionized how we manage our fleet. The efficiency gains and cost savings have been remarkable.",
    author: "John Anderson",
    role: "Fleet Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '6 weeks',
    development: '20 weeks',
    testing: '8 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'EV fleet integration',
    'Autonomous vehicle support',
    'Advanced route optimization',
    'Carbon footprint tracking'
  ]
};