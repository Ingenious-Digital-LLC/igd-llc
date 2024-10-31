import { Stethoscope } from 'lucide-react';
import type { CaseStudy } from './types';

export const healthcare: CaseStudy = {
  id: 'healthcare-platform',
  title: 'Integrated Healthcare Platform',
  client: 'Regional Medical Network',
  industry: 'Healthcare',
  challenge: `
    A growing healthcare network faced critical challenges:
    - Fragmented patient records
    - Inefficient appointment scheduling
    - Limited telehealth capabilities
    - Complex compliance requirements
  `,
  solution: `
    We developed a comprehensive healthcare platform:
    - Unified Electronic Health Records
    - Intelligent scheduling system
    - Advanced telehealth platform
    - HIPAA-compliant infrastructure
  `,
  results: [
    '40% reduction in administrative time',
    '60% increase in patient satisfaction',
    '30% more appointments per day',
    '100% HIPAA compliance',
    'Successful expansion to 5 locations',
    '50% decrease in no-shows'
  ],
  technologies: [
    'React',
    'Node.js',
    'PostgreSQL',
    'AWS Healthcare',
    'Twilio Video',
    'Azure AD'
  ],
  features: [
    'Electronic Health Records',
    'Telehealth Integration',
    'Patient Portal',
    'Prescription Management',
    'Lab Results Integration',
    'Billing System'
  ],
  metrics: {
    efficiency: '40%',
    satisfaction: '60%',
    compliance: '100%',
    roi: '250%'
  },
  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  icon: Stethoscope,
  testimonial: {
    quote: "This platform has transformed how we deliver healthcare. The efficiency gains and patient satisfaction improvements have been remarkable.",
    author: "Dr. Sarah Johnson",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '4 weeks',
    development: '16 weeks',
    testing: '6 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'AI diagnostic assistance',
    'Wearable device integration',
    'Advanced analytics dashboard',
    'Multi-language support'
  ]
};