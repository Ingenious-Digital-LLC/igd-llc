import React from 'react';
import { Smartphone, Layers, Zap, Globe, Cpu, Code2, Shield, Rocket } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const MobileDevelopment = () => {
  const solutions = [
    {
      title: 'Native iOS Development',
      description: 'High-performance native applications for Apple devices.',
      icon: Cpu,
      features: [
        'Swift & SwiftUI Development',
        'iOS Design Guidelines',
        'Native Performance',
        'App Store Optimization'
      ]
    },
    {
      title: 'Native Android Development',
      description: 'Robust native applications for Android devices.',
      icon: Code2,
      features: [
        'Kotlin Development',
        'Material Design',
        'Native Features',
        'Play Store Optimization'
      ]
    },
    {
      title: 'Cross-Platform Apps',
      description: 'Efficient multi-platform development with a single codebase.',
      icon: Globe,
      features: [
        'React Native',
        'Flutter Development',
        'Code Reusability',
        'Consistent UX'
      ]
    },
    {
      title: 'Progressive Web Apps',
      description: 'Web applications with native-like functionality.',
      icon: Layers,
      features: [
        'Offline Support',
        'Push Notifications',
        'App-like Experience',
        'Cross-Browser Support'
      ]
    },
    {
      title: 'App Security',
      description: 'Comprehensive security for mobile applications.',
      icon: Shield,
      features: [
        'Data Encryption',
        'Secure Authentication',
        'API Security',
        'Compliance'
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Optimized mobile experiences for maximum efficiency.',
      icon: Zap,
      features: [
        'Fast Load Times',
        'Battery Efficiency',
        'Memory Management',
        'Smooth Animations'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Market Reach',
      description: 'Expand your audience across all mobile platforms'
    },
    {
      title: 'User Experience',
      description: 'Deliver seamless, engaging mobile experiences'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge mobile technologies'
    },
    {
      title: 'Scalability',
      description: 'Grow your mobile presence alongside your business'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy',
      description: 'Define goals and requirements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create intuitive UI/UX'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build and test features'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Quality assurance'
    },
    {
      step: '05',
      title: 'Launch',
      description: 'Deploy and maintain'
    }
  ];

  const technologies = [
    'Swift',
    'Kotlin',
    'React Native',
    'Flutter',
    'SwiftUI',
    'Jetpack Compose',
    'Firebase',
    'GraphQL',
    'REST APIs',
    'SQLite',
    'Core Data',
    'Room Database'
  ];

  const additionalFeatures = [
    {
      title: 'App Store Optimization',
      description: 'Maximize visibility and downloads',
      icon: Rocket
    },
    {
      title: 'Analytics Integration',
      description: 'Track user behavior and app performance',
      icon: BarChart2
    },
    {
      title: 'Offline Functionality',
      description: 'Work seamlessly without internet',
      icon: Cloud
    },
    {
      title: 'Push Notifications',
      description: 'Engage users with timely updates',
      icon: Bell
    }
  ];

  return (
    <ServicePageTemplate
      title="Mobile Development"
      description="Create powerful, engaging mobile experiences that users love with our comprehensive mobile development solutions."
      icon={Smartphone}
      solutions={solutions}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      ctaTitle="Ready to Build Your Mobile App?"
      ctaDescription="Let's discuss how we can bring your mobile app idea to life."
      showcaseMetrics={[
        {
          value: '99%',
          label: 'App Store Rating'
        },
        {
          value: '60fps',
          label: 'Performance'
        },
        {
          value: '40%',
          label: 'Development Time'
        },
        {
          value: '24/7',
          label: 'Support'
        }
      ]}
      additionalFeatures={additionalFeatures}
    />
  );
};

export default MobileDevelopment;