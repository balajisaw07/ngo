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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6 dark:text-white">
            Comprehensive Heritage
            <span className="text-heritage-gold block">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-100">
            From restoration to preservation, we offer a complete range of services to protect and celebrate cultural heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center dark:text-white">
              <service.icon className="w-10 h-10 mb-4 text-heritage-gold" />
              <h3 className="text-xl font-semibold mb-2 text-heritage-navy dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-100 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-300 text-sm mb-2">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
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