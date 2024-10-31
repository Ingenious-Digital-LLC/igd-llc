import React from 'react';
import { Shield, Lock, Eye, AlertTriangle, FileCheck } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const Cybersecurity = () => {
  const solutions = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your security posture.',
      icon: Eye,
      features: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Risk Analysis',
        'Compliance Audit'
      ]
    },
    {
      title: 'Threat Protection',
      description: 'Advanced threat detection and prevention systems.',
      icon: AlertTriangle,
      features: [
        'Real-time Monitoring',
        'Intrusion Detection',
        'Malware Protection',
        'Zero-day Defense'
      ]
    },
    {
      title: 'Data Security',
      description: 'Robust data protection and encryption solutions.',
      icon: Lock,
      features: [
        'Data Encryption',
        'Access Control',
        'Data Loss Prevention',
        'Secure Data Transfer'
      ]
    },
    {
      title: 'Compliance Management',
      description: 'Ensure adherence to security standards and regulations.',
      icon: FileCheck,
      features: [
        'HIPAA Compliance',
        'PCI DSS',
        'GDPR',
        'SOC 2'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Protection',
      description: 'Comprehensive security against cyber threats'
    },
    {
      title: 'Risk Mitigation',
      description: 'Proactive approach to security risks'
    },
    {
      title: 'Compliance',
      description: 'Meet industry security standards'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate security posture'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Design security strategy'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy security measures'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Continuous security oversight'
    }
  ];

  return (
    <ServicePageTemplate
      title="Cybersecurity Solutions"
      description="Protect your business with comprehensive security solutions designed to defend against evolving cyber threats."
      icon={Shield}
      solutions={solutions}
      benefits={benefits}
      processSteps={processSteps}
      ctaTitle="Ready to Secure Your Business?"
      ctaDescription="Let's discuss how our cybersecurity solutions can protect your digital assets."
    />
  );
};

export default Cybersecurity;