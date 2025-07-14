import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'restoration', name: 'Restoration' },
    { id: 'conservation', name: 'Conservation' },
    { id: 'cultural', name: 'Cultural Sites' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Ancient Temple Complex',
      category: 'restoration',
      location: 'Rajasthan, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/2253890/pexels-photo-2253890.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete restoration of a 12th-century temple complex using traditional techniques and locally sourced materials.'
    },
    {
      id: 2,
      title: 'Colonial Heritage Mansion',
      category: 'conservation',
      location: 'Mumbai, India',
      year: '2023',
      image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Preservation and adaptive reuse of a Victorian-era mansion into a cultural center.'
    },
    {
      id: 3,
      title: 'Traditional Craft Village',
      category: 'cultural',
      location: 'Gujarat, India',
      year: '2022',
      image: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Revitalization of traditional handicraft techniques and establishment of artisan workshops.'
    },
    {
      id: 4,
      title: 'Medieval Fort Complex',
      category: 'restoration',
      location: 'Rajasthan, India',
      year: '2022',
      image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Structural restoration and conservation of a 14th-century fort with modern visitor facilities.'
    },
    {
      id: 5,
      title: 'Sacred Manuscript Collection',
      category: 'conservation',
      location: 'Kerala, India',
      year: '2021',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Digital preservation and conservation of ancient palm leaf manuscripts and religious texts.'
    },
    {
      id: 6,
      title: 'Heritage Stepwell',
      category: 'restoration',
      location: 'Gujarat, India',
      year: '2021',
      image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete restoration of an ancient stepwell including structural repairs and water management systems.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-cream via-white to-heritage-gold/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Events & Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6 dark:text-white">
            Our Key Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-100">
            Explore our major research, conservation, and outreach projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: 'Human Genetic and Micro biome Studies of Central Indian Population',
              icon: '🧬',
            },
            {
              title: 'Archaeological Survey of Tadoba-Andhari Tiger Reserve, Chandrapur, Maharashtra',
              icon: '🗺️',
            },
            {
              title: 'Installation of Cultural Notice Board at Tadoba-Andhari Tiger Reserve, Chandrapur, Maharashtra',
              icon: '📜',
            },
            {
              title: 'Archaeological Documentary Film on Cultural and Historical Heritage of Tadoba',
              icon: '🎬',
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex items-center space-x-6 border border-heritage-gold/20 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:border-heritage-gold transition-all duration-300 group"
            >
              <div className="text-5xl transition-transform duration-300 group-hover:animate-bounce">
                {project.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heritage-navy dark:text-white mb-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;