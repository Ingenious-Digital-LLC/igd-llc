import { Brain, Shield, Cloud, Code2, Lightbulb } from 'lucide-react';
import type { BlogPost, BlogCategory } from './types';

export const categories: BlogCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Latest developments in artificial intelligence and machine learning',
    icon: Brain
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Security trends, threats, and best practices',
    icon: Shield
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Cloud technologies and infrastructure solutions',
    icon: Cloud
  },
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Best practices and trends in software development',
    icon: Code2
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    description: 'Business transformation through technology',
    icon: Lightbulb
  }
];

// Import all blog posts
import { posts as aiPosts } from './posts/ai-ml';
import { posts as securityPosts } from './posts/security';
import { posts as cloudPosts } from './posts/cloud-computing';
import { posts as devPosts } from './posts/software-development';
import { posts as transformationPosts } from './posts/digital-transformation';

// Combine all posts and sort by date
export const blogPosts: BlogPost[] = [
  ...aiPosts,
  ...securityPosts,
  ...cloudPosts,
  ...devPosts,
  ...transformationPosts
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// Helper functions
export const getPostsByCategory = (categoryId: string): BlogPost[] => {
  if (categoryId === 'all') return blogPosts;
  return blogPosts.filter(post => {
    const category = categories.find(c => c.id === categoryId);
    return category ? post.category === category.name : false;
  });
};

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};