import React from 'react';
import { Code2, Globe, Smartphone, Database, Cog } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const CustomSoftware = () => {
  const solutions = [
    {
      title: 'Web Applications',
      description: 'Modern, scalable web applications built with cutting-edge technologies.',
      icon: Globe,
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'Enterprise Web Portals',
        'Custom CMS Solutions'
      ]
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      features: [
        'iOS Development',
        'Android Development',
        'Cross-Platform Solutions',
        'Mobile-First Design'
      ]
    },
    {
      title: 'Enterprise Software',
      description: 'Robust enterprise solutions tailored to your business needs.',
      icon: Cog,
      features: [
        'ERP Systems',
        'CRM Solutions',
        'Business Process Automation',
        'Legacy System Integration'
      ]
    },
    {
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs.',
      icon: Database,
      features: [
        'RESTful APIs',
        'GraphQL Implementation',
        'Microservices Architecture',
        'API Gateway Solutions'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and automate manual processes'
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with flexible, scalable software'
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead with innovative custom solutions'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your needs and requirements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Creating the perfect solution architecture'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your custom software'
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Launching and maintaining your solution'
    }
  ];

  return (
    <ServicePageTemplate
      title="Custom Software Development"
      description="Transform your business with tailored software solutions designed to meet your unique needs and challenges."
      icon={Code2}
      solutions={solutions}
      benefits={benefits}
      processSteps={processSteps}
      ctaTitle="Ready to Build Your Custom Solution?"
      ctaDescription="Let's discuss how our custom software development can help you achieve your goals."
    />
  );
};

export default CustomSoftware;