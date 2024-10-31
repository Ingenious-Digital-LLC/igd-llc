import React from 'react';
import { Factory, Cpu, Settings, BarChart2, Shield } from 'lucide-react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const Manufacturing = () => {
  const solutions = [
    {
      title: 'Smart Manufacturing',
      description: 'IoT-enabled manufacturing solutions for Industry 4.0.',
      icon: Cpu,
      features: [
        'Real-time Monitoring',
        'Predictive Maintenance',
        'Quality Control',
        'Process Automation'
      ]
    },
    {
      title: 'Production Management',
      description: 'Comprehensive production planning and control systems.',
      icon: Settings,
      features: [
        'Resource Planning',
        'Inventory Management',
        'Supply Chain Integration',
        'Quality Assurance'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Advanced analytics for manufacturing insights.',
      icon: BarChart2,
      features: [
        'Performance Metrics',
        'Production Analytics',
        'Cost Analysis',
        'Efficiency Tracking'
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Secure manufacturing operations and compliance management.',
      icon: Shield,
      features: [
        'OT Security',
        'Compliance Management',
        'Access Control',
        'Data Protection'
      ]
    }
  ];

  const stats = [
    {
      value: '30%',
      label: 'Efficiency Increase'
    },
    {
      value: '50%',
      label: 'Reduced Downtime'
    },
    {
      value: '25%',
      label: 'Cost Savings'
    },
    {
      value: '99.9%',
      label: 'Uptime'
    }
  ];

  const features = [
    {
      title: 'IoT Integration',
      description: 'Connected devices and sensors for real-time monitoring',
      icon: Cpu
    },
    {
      title: 'Process Automation',
      description: 'Streamlined workflows and automated processes',
      icon: Settings
    },
    {
      title: 'Data Analytics',
      description: 'Advanced insights for operational excellence',
      icon: BarChart2
    }
  ];

  return (
    <IndustryPageTemplate
      title="Manufacturing Solutions"
      description="Transform your manufacturing operations with Industry 4.0 technologies."
      icon={Factory}
      solutions={solutions}
      stats={stats}
      features={features}
      ctaTitle="Ready to Modernize Your Manufacturing?"
      ctaDescription="Let's discuss how our solutions can transform your manufacturing operations."
    />
  );
};

export default Manufacturing;