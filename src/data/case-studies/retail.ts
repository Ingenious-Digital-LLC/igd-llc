import { ShoppingCart } from 'lucide-react';
import type { CaseStudy } from './types';

export const retail: CaseStudy = {
  id: 'retail-platform',
  title: 'Smart Retail Management Platform',
  client: 'Coastal Properties Group',
  industry: 'Retail',
  challenge: `
    A growing retail chain faced significant challenges:
    - Fragmented inventory management
    - Inconsistent customer experience
    - Limited omnichannel capabilities
    - Manual reporting processes
  `,
  solution: `
    We developed an integrated retail management system:
    - Unified inventory system
    - Omnichannel commerce platform
    - Real-time analytics dashboard
    - Automated reporting tools
  `,
  results: [
    '150% increase in online sales',
    '40% reduction in inventory costs',
    '90% faster reporting process',
    '60% improvement in customer satisfaction',
    'Successful expansion to 12 locations',
    '25% increase in repeat customers'
  ],
  technologies: [
    'React',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'Shopify API',
    'Stripe'
  ],
  features: [
    'Inventory Management',
    'POS Integration',
    'Customer Analytics',
    'Order Management',
    'Loyalty Program',
    'Multi-store Support'
  ],
  metrics: {
    sales: '150%',
    efficiency: '40%',
    satisfaction: '60%',
    roi: '200%'
  },
  image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
  icon: ShoppingCart,
  testimonial: {
    quote: "The platform has revolutionized how we manage our retail operations. We've seen incredible growth and efficiency improvements.",
    author: "Michael Chen",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '6 weeks',
    development: '18 weeks',
    testing: '6 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'AI-powered inventory optimization',
    'Advanced customer segmentation',
    'Mobile app development',
    'International expansion'
  ]
};