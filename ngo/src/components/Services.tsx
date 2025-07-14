import React from 'react';
import { Hammer, Palette, FileText, Users, Shield, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Heritage Restoration',
      description: 'Expert restoration of historical buildings, monuments, and architectural structures using traditional techniques and materials.',
      features: ['Structural Assessment', 'Material Analysis', 'Authentic Restoration', 'Documentation']
    },
    {
      icon: Palette,
      title: 'Cultural Preservation',
      description: 'Safeguarding traditional art forms, crafts, and cultural practices for future generations.',
      features: ['Art Conservation', 'Craft Revival', 'Cultural Documentation', 'Skill Transfer']
    },
    {
      icon: FileText,
      title: 'Heritage Consulting',
      description: 'Professional guidance on heritage management, conservation strategies, and compliance with preservation standards.',
      features: ['Site Evaluation', 'Conservation Planning', 'Regulatory Compliance', 'Project Management']
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Building awareness and involvement of local communities in heritage preservation initiatives.',
      features: ['Educational Programs', 'Workshops', 'Volunteer Training', 'Outreach Activities']
    },
    {
      icon: Shield,
      title: 'Conservation Services',
      description: 'Comprehensive conservation services for artifacts, manuscripts, paintings, and historical objects.',
      features: ['Artifact Restoration', 'Preventive Care', 'Climate Control', 'Storage Solutions']
    },
    {
      icon: Sparkles,
      title: 'Heritage Tourism',
      description: 'Developing sustainable tourism strategies that showcase heritage while ensuring its protection.',
      features: ['Site Development', 'Visitor Management', 'Interpretation', 'Sustainable Tourism']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
            Comprehensive Heritage
            <span className="text-heritage-gold block">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From restoration to preservation, we offer a complete range of services to protect and celebrate cultural heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 bg-heritage-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-heritage-gold group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-heritage-gold group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-heritage-navy mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-heritage-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-heritage-gold font-semibold hover:text-heritage-navy transition-colors duration-200 flex items-center group">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-heritage-navy rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold font-serif mb-4">Ready to Preserve Your Heritage?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help protect and celebrate your cultural treasures for future generations.
          </p>
          <button className="bg-heritage-gold text-white px-8 py-4 rounded-full hover:bg-heritage-gold/90 transition-colors duration-200 font-semibold">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;