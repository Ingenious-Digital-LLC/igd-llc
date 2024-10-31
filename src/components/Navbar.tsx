import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface NavItem {
  label: string;
  href?: string;
  path?: string;
  children?: NavItem[];
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    {
      label: 'Services',
      children: [
        { label: 'Custom Software Development', path: '/services/custom-software' },
        { label: 'AI & Machine Learning', path: '/services/ai-ml' },
        { label: 'Cloud Services', path: '/services/cloud-services' },
        { label: 'Cybersecurity', path: '/services/cybersecurity' },
        { label: 'Business Intelligence', path: '/services/business-intelligence' },
        { label: 'Mobile Development', path: '/services/mobile-development' }
      ]
    },
    {
      label: 'Industries',
      children: [
        { label: 'Healthcare', path: '/industries/healthcare' },
        { label: 'Finance', path: '/industries/finance' },
        { label: 'Retail', path: '/industries/retail' },
        { label: 'Manufacturing', path: '/industries/manufacturing' }
      ]
    },
    {
      label: 'Case Studies',
      path: '/case-studies'
    },
    { 
      label: 'Company',
      children: [
        { label: 'About', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' }
      ]
    },
    {
      label: 'Resources',
      path: '/resources'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.path) {
      navigate(item.path);
      setIsOpen(false);
      return;
    }

    if (item.href) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(item.href!);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button
                      className="flex items-center text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-gray-300 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  )}

                  {item.children && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-sm border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavClick(child)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-red-500 hover:bg-gray-700 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-gray-300 font-medium">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavClick(child)}
                          className="block w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};