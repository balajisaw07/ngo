import React from 'react';
import { useContent } from '../context/ContentContext';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const { projects } = useContent();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-heritage-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Our <span className="text-heritage-gold">Projects</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our comprehensive portfolio of heritage preservation projects that showcase our commitment to cultural conservation and restoration excellence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-heritage-navy mb-4">No Projects Yet</h3>
              <p className="text-gray-600">Projects will appear here once they are published by the admin.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-heritage-gold font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.status}</span>
                    </div>
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
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;