import { BlogPost } from '../types';

export const posts: BlogPost[] = [
  {
    id: 'cybersecurity-best-practices-2024',
    title: 'Cybersecurity Best Practices for South Florida Businesses',
    excerpt: 'Essential security measures and strategies to protect your business in the digital age.',
    content: `
      As cyber threats evolve, businesses in South Florida need robust security strategies.
      This comprehensive guide covers essential security measures and compliance requirements.

      ## Essential Security Measures
      - Regular security audits
      - Employee training
      - Data encryption
      - Incident response planning

      ## Local Compliance Requirements
      - Florida Information Protection Act
      - Industry-specific regulations
      - Data breach notification laws
    `,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80',
    category: 'Cybersecurity',
    author: 'Pascal',
    date: '2024-03-07',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Business', 'Florida']
  },
  {
    id: 'zero-trust-security',
    title: 'Implementing Zero Trust Security in Modern Organizations',
    excerpt: 'A comprehensive guide to implementing zero trust security architecture.',
    content: `
      Zero trust security has become essential in today's distributed work environment.
      Learn how to implement this security model effectively in your organization.

      ## Key Principles
      - Never trust, always verify
      - Least privilege access
      - Micro-segmentation
      - Continuous monitoring

      ## Implementation Steps
      1. Asset inventory
      2. Network segmentation
      3. Access control implementation
      4. Monitoring and analytics
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    category: 'Cybersecurity',
    author: 'Pascal',
    date: '2024-03-05',
    readTime: '12 min read',
    tags: ['Zero Trust', 'Security', 'Enterprise']
  }
];