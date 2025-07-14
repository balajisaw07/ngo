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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">About Savani Heritage</span>
              <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
                Guardians of 
                <span className="text-heritage-gold"> Cultural Legacy</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For over two decades, Savani Heritage has been at the forefront of cultural preservation, 
                breathing new life into historical treasures while maintaining their authentic character 
                and significance.
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

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-heritage-navy font-serif mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every project we undertake and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-heritage-gold group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-heritage-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-heritage-navy mb-3 font-serif">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;