import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const industries = ['All', ...new Set(projects.map(project => project.industry))];
  
  const filteredProjects = selectedIndustry === 'All' 
    ? projects 
    : projects.filter(project => project.industry === selectedIndustry);

  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transforming businesses across industries with innovative digital solutions
          </p>
        </div>

        {/* Industry Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedIndustry === industry
                  ? 'bg-red-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project Navigation */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-red-500/20 scrollbar-track-transparent">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`group cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                    activeProject === index
                      ? 'bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20'
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 min-w-0">
                      <Icon className={`w-6 h-6 flex-shrink-0 ${
                        activeProject === index ? 'text-red-500' : 'text-gray-500'
                      }`} />
                      <div className="min-w-0">
                        <h3 className={`font-semibold truncate ${
                          activeProject === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">{project.client}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transform transition-transform ${
                      activeProject === index ? 'translate-x-1 text-red-500' : 'text-gray-500'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Details */}
          <div className="relative group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm h-full">
              <img
                src={filteredProjects[activeProject].image}
                alt={filteredProjects[activeProject].title}
                className="object-cover w-full h-full max-h-[600px] transform transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-y-auto">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-sm">
                      {filteredProjects[activeProject].industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white">
                    {filteredProjects[activeProject].title}
                  </h3>
                  
                  <p className="text-gray-300 max-w-lg text-shadow-lg">
                    {filteredProjects[activeProject].description}
                  </p>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {filteredProjects[activeProject].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-gray-300 text-sm text-shadow-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[activeProject].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-white/10 text-white text-sm backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`transform transition-all duration-500 ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Metrics</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {filteredProjects[activeProject].metrics.map((metric, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm text-shadow-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to={`/projects/${filteredProjects[activeProject].id}`}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;