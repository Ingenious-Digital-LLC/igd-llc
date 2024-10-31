import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ExternalLink, Clock, Users, Target, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { caseStudies } from '../data/case-studies';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('challenge');
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Case Study Not Found</h2>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-red-500 hover:text-red-400"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'solution', label: 'Solution' },
    { id: 'results', label: 'Results' },
    { id: 'timeline', label: 'Timeline' }
  ];

  const Icon = study.icon;

  return (
    <PageTransition>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-8 h-8 text-red-500" />
                  <span className="px-3 py-1 bg-red-500/90 text-white text-sm rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                  {study.title}
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {study.client}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <Clock className="w-6 h-6 text-red-500 mb-2" />
                    <div className="text-sm text-gray-400">Timeline</div>
                    <div className="text-lg text-white">3 months</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <Users className="w-6 h-6 text-red-500 mb-2" />
                    <div className="text-sm text-gray-400">Team Size</div>
                    <div className="text-lg text-white">8 experts</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <Target className="w-6 h-6 text-red-500 mb-2" />
                    <div className="text-sm text-gray-400">ROI</div>
                    <div className="text-lg text-white">250%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-2xl overflow-hidden aspect-video"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-4 mb-12 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-red-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {activeTab === 'challenge' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                  >
                    <h2 className="text-3xl font-bold text-gradient mb-6">The Challenge</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {study.challenge}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'solution' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                  >
                    <h2 className="text-3xl font-bold text-gradient mb-6">Our Solution</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {study.solution}
                    </p>
                  </motion.div>
                )}

                {activeTab === 'results' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-gradient mb-6">Key Results</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {study.results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-start bg-white/5 rounded-lg p-4 backdrop-blur-sm"
                        >
                          <CheckCircle className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'timeline' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="text-3xl font-bold text-gradient mb-6">Project Timeline</h2>
                    <div className="space-y-6">
                      {[
                        { phase: 'Discovery', duration: '2 weeks', tasks: ['Requirements gathering', 'Stakeholder interviews'] },
                        { phase: 'Planning', duration: '3 weeks', tasks: ['Architecture design', 'Technology selection'] },
                        { phase: 'Development', duration: '8 weeks', tasks: ['Core functionality', 'Integration'] },
                        { phase: 'Testing', duration: '3 weeks', tasks: ['QA', 'User acceptance'] },
                        { phase: 'Deployment', duration: '2 weeks', tasks: ['Launch preparation', 'Go-live'] }
                      ].map((phase, index) => (
                        <div
                          key={phase.phase}
                          className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-red-500/20"
                        >
                          <div className="absolute left-0 top-0 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2" />
                          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                            <p className="text-red-500 mb-4">{phase.duration}</p>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                  <ChevronRight className="w-4 h-4 text-red-500 mr-2" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              <div>
                <div className="sticky top-24 space-y-8">
                  {/* Technologies Used */}
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'AWS', 'MongoDB'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-xl p-6 backdrop-blur-sm border border-red-500/20">
                      <p className="text-gray-300 italic mb-4">"{study.testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-white">{study.testimonial.author}</div>
                        <div className="text-sm text-gray-400">{study.testimonial.role}</div>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
                    <p className="text-gray-300 mb-6">Let's discuss how we can help you achieve similar results.</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                      Start Your Project
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default CaseStudyDetail;