import React from 'react';
import { Stethoscope, Database, Brain, Clock, Shield } from 'lucide-react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const Healthcare = () => {
  const solutions = [
    {
      title: 'Electronic Health Records',
      description: 'Secure and efficient patient data management systems.',
      icon: Database,
      features: [
        'HIPAA Compliant Storage',
        'Patient History Tracking',
        'Document Management',
        'Secure Access Control'
      ]
    },
    {
      title: 'AI Diagnostics',
      description: 'Advanced diagnostic tools powered by artificial intelligence.',
      icon: Brain,
      features: [
        'Image Analysis',
        'Predictive Analytics',
        'Risk Assessment',
        'Treatment Recommendations'
      ]
    },
    {
      title: 'Telemedicine Platform',
      description: 'Virtual healthcare delivery solutions.',
      icon: Clock,
      features: [
        'Video Consultations',
        'Appointment Scheduling',
        'Patient Portal',
        'Prescription Management'
      ]
    },
    {
      title: 'Data Security',
      description: 'Comprehensive security for sensitive medical data.',
      icon: Shield,
      features: [
        'HIPAA Compliance',
        'Encryption',
        'Access Control',
        'Audit Trails'
      ]
    }
  ];

  const stats = [
    {
      value: '50%',
      label: 'Reduced Wait Times'
    },
    {
      value: '99.9%',
      label: 'System Uptime'
    },
    {
      value: '100%',
      label: 'HIPAA Compliant'
    },
    {
      value: '24/7',
      label: 'Support Available'
    }
  ];

  const features = [
    {
      title: 'Patient-Centric',
      description: 'Solutions designed around patient needs and experience',
      icon: Stethoscope
    },
    {
      title: 'Secure',
      description: 'HIPAA-compliant data protection and privacy',
      icon: Shield
    },
    {
      title: 'Efficient',
      description: 'Streamlined workflows and automated processes',
      icon: Clock
    }
  ];

  return (
    <IndustryPageTemplate
      title="Healthcare Solutions"
      description="Innovative digital solutions for modern healthcare providers."
      icon={Stethoscope}
      solutions={solutions}
      stats={stats}
      features={features}
      ctaTitle="Transform Your Healthcare Practice"
      ctaDescription="Let's discuss how our healthcare solutions can help you deliver better patient care."
    />
  );
};

export default Healthcare;