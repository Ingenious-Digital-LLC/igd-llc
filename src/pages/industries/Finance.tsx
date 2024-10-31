import React from 'react';
import { LineChart, Lock, Globe, BarChart2 } from 'lucide-react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const Finance = () => {
  const solutions = [
    {
      title: 'Trading Platforms',
      description: 'High-performance trading systems with real-time data.',
      icon: LineChart,
      features: [
        'Real-time Market Data',
        'Advanced Trading Tools',
        'Portfolio Management',
        'Risk Analytics'
      ]
    },
    {
      title: 'Banking Solutions',
      description: 'Secure digital banking and financial management systems.',
      icon: Lock,
      features: [
        'Digital Banking',
        'Payment Processing',
        'Account Management',
        'Transaction Security'
      ]
    },
    {
      title: 'Investment Analytics',
      description: 'Advanced analytics for investment decision-making.',
      icon: BarChart2,
      features: [
        'Portfolio Analysis',
        'Risk Assessment',
        'Market Intelligence',
        'Performance Tracking'
      ]
    },
    {
      title: 'Global Payments',
      description: 'Cross-border payment and settlement solutions.',
      icon: Globe,
      features: [
        'International Transfers',
        'Currency Exchange',
        'Payment Gateway',
        'Compliance Management'
      ]
    }
  ];

  const stats = [
    {
      value: '99.99%',
      label: 'System Uptime'
    },
    {
      value: '<10ms',
      label: 'Transaction Speed'
    },
    {
      value: '256-bit',
      label: 'Encryption'
    },
    {
      value: '24/7',
      label: 'Monitoring'
    }
  ];

  const features = [
    {
      title: 'High Performance',
      description: 'Ultra-low latency systems for real-time transactions',
      icon: LineChart
    },
    {
      title: 'Bank-Grade Security',
      description: 'Advanced encryption and security protocols',
      icon: Lock
    },
    {
      title: 'Global Compliance',
      description: 'Adherence to international financial regulations',
      icon: Globe
    }
  ];

  return (
    <IndustryPageTemplate
      title="Financial Technology Solutions"
      description="Empowering financial institutions with cutting-edge technology solutions."
      icon={LineChart}
      solutions={solutions}
      stats={stats}
      features={features}
      ctaTitle="Transform Your Financial Services"
      ctaDescription="Let's discuss how our fintech solutions can help you stay ahead in the digital age."
    />
  );
};

export default Finance;