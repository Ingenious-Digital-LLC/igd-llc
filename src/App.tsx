import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import { Navbar } from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSequence from './components/LoadingSequence';
import FloatingContactIcons from './components/FloatingContactIcons';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookie from './pages/Cookie';
import GDPR from './pages/GDPR';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

// Industry Pages
import Healthcare from './pages/industries/Healthcare';
import Finance from './pages/industries/Finance';
import Retail from './pages/industries/Retail';
import Manufacturing from './pages/industries/Manufacturing';

// Service Pages
import CustomSoftware from './pages/services/CustomSoftware';
import AiMachineLearning from './pages/services/AiMachineLearning';
import CloudServices from './pages/services/CloudServices';
import Cybersecurity from './pages/services/Cybersecurity';
import BusinessIntelligence from './pages/services/BusinessIntelligence';
import MobileDevelopment from './pages/services/MobileDevelopment';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingSequence key="loading" onComplete={() => setIsLoading(false)} />
          ) : (
            <div className="relative bg-black text-white">
              <ScrollProgress />
              <Navbar />
              <FloatingContactIcons />
              
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500" />
                </div>
              }>
                <ScrollToTop />
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/resources" element={<Resources />} />

                  {/* Legal Pages */}
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookie" element={<Cookie />} />
                  <Route path="/gdpr" element={<GDPR />} />

                  {/* Case Studies */}
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/case-studies/:id" element={<CaseStudyDetail />} />

                  {/* Industry Pages */}
                  <Route path="/industries/healthcare" element={<Healthcare />} />
                  <Route path="/industries/finance" element={<Finance />} />
                  <Route path="/industries/retail" element={<Retail />} />
                  <Route path="/industries/manufacturing" element={<Manufacturing />} />

                  {/* Service Pages */}
                  <Route path="/services/custom-software" element={<CustomSoftware />} />
                  <Route path="/services/ai-ml" element={<AiMachineLearning />} />
                  <Route path="/services/cloud-services" element={<CloudServices />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/business-intelligence" element={<BusinessIntelligence />} />
                  <Route path="/services/mobile-development" element={<MobileDevelopment />} />

                  {/* 404 Page */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </Suspense>
            </div>
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </Router>
  );
};

export default App;