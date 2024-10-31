import { Factory } from 'lucide-react';
import type { CaseStudy } from './types';

export const manufacturing: CaseStudy = {
  id: 'smart-manufacturing',
  title: 'Smart Factory System',
  client: 'Industrial Innovations Corp',
  industry: 'Manufacturing',
  challenge: `
    A manufacturing company needed modernization:
    - Manual production tracking
    - Quality control issues
    - Equipment downtime
    - Inefficient resource allocation
  `,
  solution: `
    We implemented an IoT-based smart factory system:
    - Real-time monitoring
    - Predictive maintenance
    - Quality control automation
    - Resource optimization
  `,
  results: [
    '35% increase in productivity',
    '60% reduction in downtime',
    '45% quality improvement',
    '25% energy savings',
    'ROI achieved in 8 months',
    '20% reduction in waste'
  ],
  technologies: [
    'Python',
    'Node.js',
    'InfluxDB',
    'Azure IoT',
    'TensorFlow',
    'Docker'
  ],
  features: [
    'IoT Integration',
    'Predictive Analytics',
    'Quality Control',
    'Resource Planning',
    'Maintenance Scheduling',
    'Performance Dashboard'
  ],
  metrics: {
    productivity: '35%',
    quality: '45%',
    efficiency: '60%',
    roi: '180%'
  },
  image: 'https://images.unsplash.com/photo-1565465295423-68c959ca3c30?auto=format&fit=crop&q=80',
  icon: Factory,
  testimonial: {
    quote: "The smart factory system has revolutionized our operations. We've seen dramatic improvements across all metrics.",
    author: "David Chang",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '8 weeks',
    development: '24 weeks',
    testing: '8 weeks',
    deployment: '6 weeks'
  },
  nextSteps: [
    'AI quality inspection',
    'Digital twin integration',
    'Supply chain optimization',
    'Carbon footprint tracking'
  ]
};