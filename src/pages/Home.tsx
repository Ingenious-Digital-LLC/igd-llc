import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <main className="relative z-10">
        <Hero scrollY={0} />
        <Services />
        <Projects />
        <TechStack />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
    </PageTransition>
  );
};

export default Home;