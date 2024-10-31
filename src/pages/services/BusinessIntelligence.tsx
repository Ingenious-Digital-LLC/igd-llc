import React from 'react';
import { LineChart, BarChart2, PieChart, Activity, Database, Brain, Zap, Code2 } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const BusinessIntelligence = () => {
  const solutions = [
    {
      title: 'Advanced Analytics',
      description: 'Transform raw data into actionable business insights.',
      icon: BarChart2,
      features: [
        'Predictive Analytics',
        'Data Visualization',
        'Real-time Reporting',
        'Custom Dashboards'
      ]
    },
    {
      title: 'Data Integration',
      description: 'Seamless integration of multiple data sources.',
      icon: Database,
      features: [
        'ETL Processing',
        'Data Warehousing',
        'API Integration',
        'Data Cleansing'
      ]
    },
    {
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of business KPIs.',
      icon: Activity,
      features: [
        'KPI Tracking',
        'Performance Metrics',
        'Goal Monitoring',
        'Automated Alerts'
      ]
    },
    {
      title: 'AI-Powered Insights',
      description: 'Advanced AI algorithms for deeper business insights.',
      icon: Brain,
      features: [
        'Pattern Recognition',
        'Anomaly Detection',
        'Trend Analysis',
        'Predictive Modeling'
      ]
    },
    {
      title: 'Real-time Analytics',
      description: 'Instant insights for rapid decision making.',
      icon: Zap,
      features: [
        'Live Dashboards',
        'Real-time Processing',
        'Instant Alerts',
        'Dynamic Reporting'
      ]
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored BI solutions for your specific needs.',
      icon: Code2,
      features: [
        'Custom Dashboards',
        'Industry-specific Metrics',
        'Workflow Integration',
        'Automated Reporting'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time insights and analytics'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline operations with automated reporting and monitoring'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with predictive analytics and market insights'
    },
    {
      title: 'Cost Optimization',
      description: 'Identify opportunities for cost reduction and optimization'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Evaluate data sources and requirements'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Create analytics architecture'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy BI solutions'
    },
    {
      step: '04',
      title: 'Training',
      description: 'User training and adoption'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuous improvement'
    }
  ];

  const technologies = [
    'Power BI',
    'Tableau',
    'Looker',
    'Snowflake',
    'Apache Spark',
    'TensorFlow',
    'Python',
    'R',
    'SQL',
    'Azure Analytics',
    'AWS QuickSight',
    'Google Data Studio'
  ];

  const additionalFeatures = [
    {
      title: 'Self-service Analytics',
      description: 'Empower users to create their own reports and analyses',
      icon: PieChart
    },
    {
      title: 'Mobile BI',
      description: 'Access insights on any device, anywhere',
      icon: Activity
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality and security',
      icon: Database
    },
    {
      title: 'Automated Reporting',
      description: 'Schedule and automate report generation',
      icon: BarChart2
    }
  ];

  return (
    <ServicePageTemplate
      title="Business Intelligence Solutions"
      description="Transform your data into actionable insights with our advanced business intelligence solutions."
      icon={LineChart}
      solutions={solutions}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      ctaTitle="Ready to Transform Your Data?"
      ctaDescription="Let's discuss how our BI solutions can help you make better decisions."
      showcaseMetrics={[
        {
          value: '60%',
          label: 'Faster Reporting'
        },
        {
          value: '40%',
          label: 'Cost Reduction'
        },
        {
          value: '90%',
          label: 'Automation'
        },
        {
          value: '24/7',
          label: 'Monitoring'
        }
      ]}
      additionalFeatures={additionalFeatures}
    />
  );
};

export default BusinessIntelligence;