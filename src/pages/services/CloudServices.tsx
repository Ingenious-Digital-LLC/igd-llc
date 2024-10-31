import React from 'react';
import { Cloud, Database, Shield, Cpu, GitBranch } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const CloudServices = () => {
  const solutions = [
    {
      title: 'Cloud Migration',
      description: 'Seamless transition of your infrastructure to the cloud.',
      icon: Database,
      features: [
        'Infrastructure Assessment',
        'Migration Strategy',
        'Data Transfer',
        'Legacy System Integration'
      ]
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for cloud infrastructure.',
      icon: Shield,
      features: [
        'Access Management',
        'Data Encryption',
        'Threat Detection',
        'Compliance Management'
      ]
    },
    {
      title: 'Infrastructure Design',
      description: 'Scalable and efficient cloud architecture solutions.',
      icon: Cpu,
      features: [
        'High Availability',
        'Load Balancing',
        'Auto-scaling',
        'Disaster Recovery'
      ]
    },
    {
      title: 'DevOps Implementation',
      description: 'Streamline development and operations workflows.',
      icon: GitBranch,
      features: [
        'CI/CD Pipelines',
        'Container Orchestration',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs with cloud efficiency'
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand'
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications worldwide with ease'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate current infrastructure'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Design cloud architecture'
    },
    {
      step: '03',
      title: 'Migration',
      description: 'Execute cloud transition'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Monitor and enhance'
    }
  ];

  return (
    <ServicePageTemplate
      title="Cloud Services"
      description="Transform your infrastructure with scalable, secure, and efficient cloud solutions."
      icon={Cloud}
      solutions={solutions}
      benefits={benefits}
      processSteps={processSteps}
      ctaTitle="Ready to Move to the Cloud?"
      ctaDescription="Let's discuss how our cloud solutions can transform your infrastructure."
    />
  );
};

export default CloudServices;