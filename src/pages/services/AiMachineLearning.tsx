import React from 'react';
import { Brain, Network, Cpu, Database, LineChart, Bot, Zap, Code2, Search, Layers } from 'lucide-react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

const AiMachineLearning = () => {
  const solutions = [
    {
      title: 'Advanced Predictive Analytics',
      description: 'Transform raw data into actionable insights with state-of-the-art predictive models.',
      icon: LineChart,
      features: [
        'Deep Learning Models',
        'Time Series Forecasting',
        'Anomaly Detection',
        'Pattern Recognition'
      ]
    },
    {
      title: 'Natural Language Processing',
      description: 'Unlock insights from text data with cutting-edge NLP solutions.',
      icon: Bot,
      features: [
        'Advanced Text Analytics',
        'Multilingual Processing',
        'Sentiment Analysis',
        'Named Entity Recognition'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Harness the power of visual AI for automation and insights.',
      icon: Cpu,
      features: [
        'Object Detection & Tracking',
        'Image Classification',
        'Facial Recognition',
        'Scene Understanding'
      ]
    },
    {
      title: 'MLOps & Deployment',
      description: 'Enterprise-grade ML infrastructure and deployment solutions.',
      icon: Network,
      features: [
        'Automated ML Pipelines',
        'Model Versioning',
        'A/B Testing',
        'Performance Monitoring'
      ]
    },
    {
      title: 'Reinforcement Learning',
      description: 'Optimize complex decision-making processes with RL algorithms.',
      icon: Brain,
      features: [
        'Policy Optimization',
        'Multi-Agent Systems',
        'Real-time Decision Making',
        'Reward Engineering'
      ]
    },
    {
      title: 'Edge AI Solutions',
      description: 'Deploy AI models at the edge for real-time processing.',
      icon: Zap,
      features: [
        'Model Optimization',
        'Edge Device Integration',
        'Low-latency Inference',
        'Distributed AI Systems'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Decision Making',
      description: 'Make data-driven decisions with AI-powered insights and predictions'
    },
    {
      title: 'Operational Efficiency',
      description: 'Automate complex tasks and optimize business processes'
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead with cutting-edge AI technologies and innovations'
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your AI capabilities alongside your business needs'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your business needs and data landscape'
    },
    {
      step: '02',
      title: 'Data Strategy',
      description: 'Design data pipeline and model architecture'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build and train custom AI models'
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'Implement and scale AI solutions'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Monitor and enhance model performance'
    }
  ];

  const technologies = [
    'TensorFlow',
    'PyTorch',
    'scikit-learn',
    'OpenAI',
    'Hugging Face',
    'NVIDIA CUDA',
    'Apache Spark',
    'Kubernetes',
    'MLflow',
    'Ray',
    'DVC',
    'Weights & Biases'
  ];

  const additionalFeatures = [
    {
      title: 'Custom AI Models',
      description: 'Tailored solutions for your specific business needs',
      icon: Brain
    },
    {
      title: 'Real-time Processing',
      description: 'Process and analyze data as it arrives',
      icon: Zap
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Enterprise-grade AI infrastructure that grows with you',
      icon: Database
    },
    {
      title: 'Continuous Learning',
      description: 'Models that improve over time with new data',
      icon: Network
    },
    {
      title: 'Explainable AI',
      description: 'Transparent and interpretable AI decisions',
      icon: Search
    },
    {
      title: 'AutoML Capabilities',
      description: 'Automated model selection and optimization',
      icon: Code2
    }
  ];

  return (
    <ServicePageTemplate
      title="AI & Machine Learning Solutions"
      description="Transform your business with state-of-the-art artificial intelligence and machine learning solutions that deliver measurable results."
      icon={Brain}
      solutions={solutions}
      benefits={benefits}
      processSteps={processSteps}
      technologies={technologies}
      ctaTitle="Ready to Harness the Power of AI?"
      ctaDescription="Let's discuss how our advanced AI solutions can transform your business operations and drive innovation."
      showcaseMetrics={[
        {
          value: '99%',
          label: 'Model Accuracy'
        },
        {
          value: '10x',
          label: 'Faster Processing'
        },
        {
          value: '60%',
          label: 'Cost Reduction'
        },
        {
          value: '24/7',
          label: 'Model Monitoring'
        }
      ]}
      additionalFeatures={additionalFeatures}
    />
  );
};

export default AiMachineLearning;