interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  features: string[];
  metrics: {
    [key: string]: string;
  };
  image: string;
  icon: LucideIcon;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image?: string;
  };
  timeline: {
    planning: string;
    development: string;
    testing: string;
    deployment: string;
  };
  nextSteps: string[];
}

export type { CaseStudy };