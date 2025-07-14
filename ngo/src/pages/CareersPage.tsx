import React from 'react';
import { useContent } from '../context/ContentContext';
import { MapPin, Clock, Briefcase, Users, GraduationCap, Heart, ArrowRight, Calendar } from 'lucide-react';

const CareersPage = () => {
  const { careers } = useContent();

  const benefits = [
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Contribute to preserving cultural heritage for future generations'
    },
    {
      icon: GraduationCap,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and skill development programs'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with passionate experts and heritage enthusiasts'
    },
    {
      icon: Briefcase,
      title: 'Diverse Projects',
      description: 'Engage with varied heritage sites and conservation challenges'
    }
  ];

  const getJobTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-blue-100 text-blue-800';
      case 'contract':
        return 'bg-purple-100 text-purple-800';
      case 'internship':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getExperienceColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'entry':
        return 'bg-emerald-100 text-emerald-800';
      case 'mid':
        return 'bg-amber-100 text-amber-800';
      case 'senior':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-heritage-navy via-heritage-navy/95 to-heritage-burgundy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Join Our <span className="text-heritage-gold">Heritage Mission</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Be part of a passionate team dedicated to preserving cultural treasures and building a legacy for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-heritage-gold text-white px-8 py-4 rounded-full hover:bg-heritage-gold/90 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 hover:scale-105">
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-heritage-navy transition-all duration-300 font-semibold">
              Learn About Our Culture
            </button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
              Build Your Career in
              <span className="text-heritage-gold block">Heritage Preservation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team where your passion for culture and history can make a real difference in preserving our shared heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-heritage-gold group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-heritage-gold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-heritage-navy mb-3 font-serif">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Current Openings</span>
            <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy font-serif mt-2 mb-6">
              Available <span className="text-heritage-gold">Positions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting opportunities to contribute to heritage preservation and cultural conservation.
            </p>
          </div>

          {careers.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-heritage-gold" />
              </div>
              <h3 className="text-2xl font-semibold text-heritage-navy mb-4">No Open Positions Currently</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We're not actively hiring right now, but we're always interested in connecting with talented individuals who share our passion for heritage preservation.
              </p>
              <button className="bg-heritage-gold text-white px-8 py-3 rounded-full hover:bg-heritage-gold/90 transition-colors duration-200 font-semibold">
                Join Our Talent Network
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {careers.map((career) => (
                <div key={career.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-heritage-navy font-serif group-hover:text-heritage-gold transition-colors duration-200">
                          {career.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getJobTypeColor(career.type)}`}>
                          {career.type}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getExperienceColor(career.experience)}`}>
                          {career.experience} Level
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {career.description}
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="flex items-center text-gray-500">
                          <MapPin className="w-5 h-5 mr-2 text-heritage-gold" />
                          <span>{career.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Briefcase className="w-5 h-5 mr-2 text-heritage-gold" />
                          <span>{career.department}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Calendar className="w-5 h-5 mr-2 text-heritage-gold" />
                          <span>Posted {new Date(career.postedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {career.requirements && career.requirements.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-heritage-navy mb-3">Key Requirements:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {career.requirements.slice(0, 4).map((req, index) => (
                              <li key={index} className="flex items-start text-gray-600">
                                <div className="w-2 h-2 bg-heritage-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="lg:ml-8 flex flex-col space-y-3">
                      <button className="bg-heritage-gold text-white px-8 py-3 rounded-full hover:bg-heritage-gold/90 transition-all duration-200 font-semibold hover:scale-105 flex items-center justify-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="border-2 border-heritage-navy text-heritage-navy px-8 py-3 rounded-full hover:bg-heritage-navy hover:text-white transition-all duration-200 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-heritage-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Ready to Make a <span className="text-heritage-gold">Difference?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Don't see the perfect role? We're always looking for passionate individuals who want to contribute to heritage preservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-heritage-gold text-white px-8 py-4 rounded-full hover:bg-heritage-gold/90 transition-all duration-300 font-semibold hover:scale-105">
              Submit Your Resume
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-heritage-navy transition-all duration-300 font-semibold">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;