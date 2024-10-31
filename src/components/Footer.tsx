import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering businesses through innovative digital solutions and cutting-edge technology. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com/ingeniousdigital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/ingenious-digital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/ingenious-digital" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/custom-software" className="text-gray-400 hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link to="/services/ai-ml" className="text-gray-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link to="/services/cloud-services" className="text-gray-400 hover:text-white transition-colors">Cloud Services</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+19545158586" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  (954) 515-8586
                </a>
              </li>
              <li>
                <a href="mailto:pascal@ingeniousdigital.com" className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  pascal@ingeniousdigital.com
                </a>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>Fort Lauderdale, FL 33304<br />United States</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <Link to="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ingenious Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;