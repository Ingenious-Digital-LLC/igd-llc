import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const GDPR = () => {
  const sections = [
    {
      title: 'Data Collection',
      content: 'We collect and process personal data only with explicit consent and for specific, legitimate purposes.',
      items: [
        'Contact information',
        'Usage data',
        'Technical information',
        'Communication records'
      ]
    },
    {
      title: 'Data Processing',
      content: 'All data processing activities are conducted in accordance with GDPR principles.',
      items: [
        'Lawful processing',
        'Purpose limitation',
        'Data minimization',
        'Accuracy maintenance'
      ]
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate technical and organizational measures to ensure data security.',
      items: [
        'Encryption',
        'Access controls',
        'Regular audits',
        'Security monitoring'
      ]
    },
    {
      title: 'User Rights',
      content: 'We respect and uphold all GDPR-mandated user rights regarding personal data.',
      items: [
        'Right to access',
        'Right to rectification',
        'Right to erasure',
        'Right to data portability'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Shield className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                GDPR Compliance
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our commitment to protecting your privacy and ensuring GDPR compliance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-red-500/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 mb-6">{section.content}</p>
                  
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Request Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-12 backdrop-blur-sm border border-red-500/20">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gradient mb-6">
                  Exercise Your Data Rights
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Want to access, modify, or delete your personal data? We're here to help.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  Submit Data Request
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  For detailed information about how we process your data and comply with GDPR regulations, 
                  please refer to our Privacy Policy and Terms of Service.
                </p>
                <div className="flex space-x-4">
                  <Link
                    to="/privacy"
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/terms"
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default GDPR;