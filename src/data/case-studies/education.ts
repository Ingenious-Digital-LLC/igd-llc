import { GraduationCap } from 'lucide-react';
import type { CaseStudy } from './types';

export const education: CaseStudy = {
  id: 'learning-management-system',
  title: 'Modern Learning Management System',
  client: 'Metropolitan University',
  industry: 'Education',
  challenge: `
    A large university needed to modernize their learning platform:
    - Outdated learning management system
    - Limited remote learning capabilities
    - Poor student engagement tracking
    - Inefficient assessment processes
  `,
  solution: `
    We developed a comprehensive digital learning platform:
    - Modern learning management system
    - Advanced virtual classrooms
    - AI-powered student analytics
    - Automated assessment tools
  `,
  results: [
    '95% student engagement rate',
    '40% improvement in course completion',
    '60% reduction in administrative tasks',
    '200% increase in online enrollment',
    'Support for 50,000+ concurrent users',
    '30% increase in student satisfaction'
  ],
  technologies: [
    'React',
    'Node.js',
    'MongoDB',
    'AWS',
    'WebRTC',
    'TensorFlow'
  ],
  features: [
    'Virtual Classrooms',
    'Interactive Assessments',
    'Progress Tracking',
    'Resource Library',
    'Discussion Forums',
    'Mobile Learning'
  ],
  metrics: {
    engagement: '95%',
    completion: '40%',
    efficiency: '60%',
    roi: '250%'
  },
  image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
  icon: GraduationCap,
  testimonial: {
    quote: "This platform has revolutionized how we deliver education. The engagement levels and learning outcomes have exceeded our expectations.",
    author: "Dr. Emily Thompson",
    role: "Dean of Digital Learning",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  timeline: {
    planning: '6 weeks',
    development: '20 weeks',
    testing: '8 weeks',
    deployment: '4 weeks'
  },
  nextSteps: [
    'AR/VR learning experiences',
    'Advanced analytics dashboard',
    'Personalized learning paths',
    'Global campus integration'
  ]
};