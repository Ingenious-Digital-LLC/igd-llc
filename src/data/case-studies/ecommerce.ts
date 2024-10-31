import { ShoppingBag } from 'lucide-react';
import type { CaseStudy } from './types';

export const ecommerce: CaseStudy = {
  id: 'ecommerce-platform',
  title: 'Enterprise E-commerce Platform',
  client: 'Global Retail Solutions',
  industry: 'E-commerce',
  challenge: `
    A large retailer needed a modern e-commerce solution:
    - Scalability issues during peak times
    - Limited personalization
    - Complex inventory management
    - Poor mobile experience
  `,
  solution: `
    We built a scalable e-commerce platform:
    - Cloud-native architecture
    - AI-powered personalization
    - Real-time inventory
    - Progressive web app
  `,
  results: [
    '300% increase in online sales',
    '50% improvement in conversion rate',
    '99.99% uptime during peak',
    '40% increase in mobile sales',
    '45% higher average order value',
    '60% faster page loads'
  ],
  technologies: [
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'Elasticsearch',
    'AWS'
  ],
  features: [
    'AI Recommendations',
    'Real-time Inventory',
    'Mobile-first Design',
    'Advanced Search',
    'Cart Abandonment',
    'Analytics Dashboard'
  ],
  metrics: {
    sales: '300%',
    conversion: '50%',
    performance: '60%',
    roi: '250%'
  },
  image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
  icon: ShoppingBag,
  testimonial: {
    quote: "The new platform has transformed our online presence. We've seen unprecedented growth and customer satisfaction.",
    author: "Sarah Chen",
    role: "Digital Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '8 weeks',
    development: '24 weeks',
    testing: '8 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'AR product visualization',
    'Voice commerce',
    'International expansion',
    'Advanced analytics'
  ]
};