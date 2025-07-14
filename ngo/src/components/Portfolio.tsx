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
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
            Celebrating Our
            <span className="text-heritage-gold block">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most significant heritage preservation projects that showcase our commitment to cultural conservation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-heritage-gold text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-heritage-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.year}
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-heritage-gold hover:text-white">
                  <ExternalLink size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-heritage-navy mb-2 font-serif group-hover:text-heritage-gold transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-heritage-navy text-white px-8 py-4 rounded-full hover:bg-heritage-navy/90 transition-colors duration-200 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;