import { Zap } from 'lucide-react';
import type { CaseStudy } from './types';

export const energy: CaseStudy = {
  id: 'smart-grid-platform',
  title: 'Smart Grid Management System',
  client: 'EcoGrid Solutions',
  industry: 'Energy',
  challenge: `
    An energy provider needed to modernize their grid:
    - Inefficient energy distribution
    - Limited usage monitoring
    - Poor predictive maintenance
    - High operational costs
  `,
  solution: `
    We developed an intelligent grid management system:
    - Real-time monitoring
    - Predictive maintenance
    - Smart metering
    - Energy optimization
  `,
  results: [
    '30% reduction in energy waste',
    '45% improvement in grid reliability',
    '60% faster issue resolution',
    '25% cost reduction',
    '40% decrease in outages',
    '20% increase in renewable integration'
  ],
  technologies: [
    'Python',
    'Node.js',
    'InfluxDB',
    'Azure IoT',
    'TensorFlow',
    'MQTT'
  ],
  features: [
    'Grid Monitoring',
    'Load Balancing',
    'Outage Management',
    'Asset Tracking',
    'Energy Analytics',
    'Maintenance Planning'
  ],
  metrics: {
    efficiency: '30%',
    reliability: '45%',
    savings: '25%',
    roi: '200%'
  },
  image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80',
  icon: Zap,
  testimonial: {
    quote: "This system has revolutionized our grid management capabilities. The efficiency gains and reliability improvements are outstanding.",
    author: "Thomas Anderson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '10 weeks',
    development: '24 weeks',
    testing: '8 weeks',
    deployment: '6 weeks'
  },
  nextSteps: [
    'AI-powered grid optimization',
    'Renewable energy integration',
    'Microgrid support',
    'Advanced weather integration'
  ]
};