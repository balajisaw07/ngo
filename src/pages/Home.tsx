import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import { ShowHeroOnlyContext } from '../components/Header';

const Home = () => {
  const [showHeroOnly, setShowHeroOnly] = useState(false);
  return (
    <ShowHeroOnlyContext.Provider value={{ showHeroOnly, setShowHeroOnly }}>
      <div className="min-h-screen bg-cream dark:bg-gray-900 text-heritage-navy dark:text-gray-100 transition-colors duration-300">
        {showHeroOnly ? (
          <Hero />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
          </>
        )}
      </div>
    </ShowHeroOnlyContext.Provider>
  );
};

export default Home;