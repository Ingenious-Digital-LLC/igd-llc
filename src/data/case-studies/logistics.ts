import { Truck } from 'lucide-react';
import type { CaseStudy } from './types';

export const logistics: CaseStudy = {
  id: 'logistics-platform',
  title: 'Smart Logistics Management System',
  client: 'Global Transport Solutions',
  industry: 'Logistics',
  challenge: `
    A logistics company needed to modernize operations:
    - Manual route planning
    - Limited shipment tracking
    - Inefficient resource allocation
    - Poor delivery time predictions
  `,
  solution: `
    We created an AI-powered logistics platform:
    - Intelligent route optimization
    - Real-time fleet tracking
    - Predictive analytics
    - Automated dispatching
  `,
  results: [
    '30% reduction in fuel costs',
    '45% improvement in delivery times',
    '80% more accurate ETAs',
    '50% reduction in empty miles',
    'Carbon footprint reduced by 25%',
    '35% increase in fleet utilization'
  ],
  technologies: [
    'React',
    'Python',
    'TensorFlow',
    'MongoDB',
    'Google Maps API',
    'IoT Sensors'
  ],
  features: [
    'Route Optimization',
    'Fleet Management',
    'Shipment Tracking',
    'Analytics Dashboard',
    'Mobile Driver App',
    'Customer Portal'
  ],
  metrics: {
    efficiency: '30%',
    accuracy: '80%',
    utilization: '35%',
    roi: '180%'
  },
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  icon: Truck,
  testimonial: {
    quote: "This system has transformed our logistics operations. The efficiency gains and cost savings have been remarkable.",
    author: "Robert Martinez",
    role: "Logistics Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '8 weeks',
    development: '20 weeks',
    testing: '8 weeks',
    deployment: '6 weeks'
  },
  nextSteps: [
    'Autonomous vehicle integration',
    'Blockchain tracking',
    'Advanced weather integration',
    'Sustainability tracking'
  ]
};