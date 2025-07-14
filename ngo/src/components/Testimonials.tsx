import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Archaeological Survey of India',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Savani Heritage\'s work on the temple complex was exceptional. Their attention to historical accuracy and use of traditional techniques exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      role: 'Heritage Trust Director',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The team\'s expertise in conservation is unmatched. They transformed our heritage site while preserving its authentic character and cultural significance.',
      rating: 5
    },
    {
      id: 3,
      name: 'Meera Joshi',
      role: 'Cultural Heritage Foundation',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Working with Savani Heritage was a remarkable experience. Their commitment to quality and cultural sensitivity made our project a tremendous success.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-heritage-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-heritage-gold font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mt-2 mb-6">
            What Our Clients
            <span className="text-heritage-gold block">Say About Us</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from those who have trusted us with their most precious cultural treasures.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-heritage-gold/20" />
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light italic">
                "{testimonials[currentSlide].content}"
              </p>

              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-heritage-gold fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-heritage-navy font-serif">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-heritage-gold hover:text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-heritage-gold hover:text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-heritage-gold w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { number: '98%', label: 'Client Satisfaction' },
            { number: '150+', label: 'Projects Completed' },
            { number: '25+', label: 'Years Experience' },
            { number: '50+', label: 'Awards Won' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heritage-gold font-serif mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;