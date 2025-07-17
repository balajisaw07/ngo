import React, { useState } from 'react';
import { AboutMain, VinaySection, SarlaSection, KantikumarSection, YashadattaSection, LeenaSection } from '../components/About';

const AboutUs = () => {
  const [showSarla, setShowSarla] = useState(true);

  return (
    <div className="min-h-screen pt-40 bg-gradient-to-br from-cream via-white to-heritage-gold/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-2 md:px-0">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-heritage-navy dark:text-white mb-4 drop-shadow-lg">About Us</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Meet the passionate team and visionaries behind our mission to preserve, celebrate, and advance India’s cultural heritage and archaeology.
        </p>
      </div>
      <div className="space-y-16">
        <AboutMain />
        <VinaySection />
        <div className="text-center">
         
        </div>
        {<SarlaSection />}
        <KantikumarSection />
        <YashadattaSection />
        <LeenaSection />
      </div>
    </div>
  );
};

export default AboutUs; 