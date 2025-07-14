import React from 'react';
import { Award, Users, Building, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising quality in every restoration and preservation project we undertake.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Deep love for cultural heritage drives our commitment to preserving history.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with communities, historians, and architects to honor legacy.'
    },
    {
      icon: Building,
      title: 'Innovation',
      description: 'Blending traditional craftsmanship with modern conservation techniques.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream via-white to-heritage-gold/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-heritage-gold/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">About VARASA</span>
              <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
                Guardians of 
                <span className="text-heritage-gold"> Cultural Legacy</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed dark:text-gray-100">
              <p className="text-lg">
                VĀRASĀ Association for Cultural Heritage and Archaeology, Pune, established under the Societies Registration Act, 1860 and Bombay Public Trust Act (est. 4th November 2011 Reg. No. Maha. 1918/2011), is a non-profit organization committed to the heritage preservation, research, and promotion of tangible and intangible cultural heritage and archaeology. Our mission is to safeguard historical treasures, raise awareness about the significance of cultural heritage, and support archaeological research and conservation efforts. With a team of passionate archaeologists, scientists, historians, conservationists, and heritage professionals, VĀRASĀ actively engages in excavation projects, documentation, conservation, and restoration of heritage sites, ensuring that history remains accessible and meaningful for future generations.
              </p>
              
              <p>
                Our team of master craftsmen, historians, and conservation experts work tirelessly to 
                ensure that the stories embedded in stone, wood, and mortar continue to inspire 
                future generations. We believe that heritage is not just about preserving the past, 
                but about creating a bridge to the future.
              </p>
              
              <p>
                From ancient temples to colonial mansions, from traditional art forms to architectural 
                marvels, we approach each project with reverence, expertise, and an unwavering 
                commitment to authenticity.
              </p>
            </div>

            <div className="mt-8 flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage-gold font-serif">25+</div>
                <div className="text-sm text-gray-500">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage-gold font-serif">150+</div>
                <div className="text-sm text-gray-500">Heritage Projects</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Heritage restoration work"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-heritage-gold rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold font-serif">Est.</div>
                <div className="text-xl font-bold">1998</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center mb-10">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-heritage-gold/20 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-heritage-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mb-4 text-center drop-shadow dark:text-white">Our Mission</h2>
            <p className="text-lg text-heritage-navy/80 max-w-2xl text-center mb-2 italic dark:text-gray-100">“Preserving the past, empowering the future.”</p>
            <p className="text-base text-gray-600 max-w-2xl text-center mb-8 dark:text-gray-100">We are dedicated to advancing archaeology and cultural heritage through research, education, and community engagement, ensuring that history remains alive for generations to come.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Row: 4 cards */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Heritage Research & Conservation</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Research, exploration, and documentation for the conservation of monuments and sites, ensuring their stories endure.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 150+ sites preserved</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group delay-100">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Scholarship & Academic Support</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Providing financial aid and research opportunities to empower the next generation of heritage professionals.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 200+ scholars supported</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group delay-200">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H7a1 1 0 00-1 1v9m0 0l4 4 4-4" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Educational Programs & Public Awareness</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Seminars, workshops, and tours to inspire appreciation and understanding of India’s rich heritage.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 10,000+ participants reached</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group delay-300">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Publications & Knowledge Dissemination</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Journals, brochures, and digital content to broaden public knowledge and scholarly discourse.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 50+ publications released</div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group delay-400">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20H4v-2a3 3 0 013-3h4a3 3 0 013 3v2H9z" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Community Engagement & Outreach</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Exhibitions, lectures, and campaigns to foster community participation in heritage protection.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 30+ outreach events</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group delay-500">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Museums & Cultural Spaces</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Establishing museums and galleries to showcase and preserve artifacts and cultural narratives.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 5+ museums established</div>
                </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-heritage-gold/30 dark:border-gray-700 aspect-square flex flex-col items-center justify-between p-6 min-h-[19rem] max-h-[19rem] min-w-[16rem] max-w-[16rem] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-heritage-gold/70 group delay-600">
              <span className="text-heritage-gold mb-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg></span>
              <h4 className="text-lg font-semibold text-heritage-navy dark:text-white mb-1 text-center">Digital & Technological Integration</h4>
              <p className="text-gray-600 dark:text-gray-100 text-center text-sm font-normal leading-snug mb-2">Online platforms and digital repositories to foster global collaboration and knowledge sharing.</p>
              <div className="mt-auto text-xs text-heritage-gold font-semibold">Impact: 1,000+ digital resources</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;