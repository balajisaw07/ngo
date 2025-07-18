import { ArrowRight, Play } from 'lucide-react';
import AboutUs from './pages/AboutUs';
import { useState, useEffect } from 'react';
import img1 from '../assets/a-cinematic-full-width-photo-banner-with_l0YW7y3LQ0ybFF_6mlpONg_V2mhemaUREWehICnn3Ac5w.jpeg';
import img2 from '../assets/a-cinematic-image-of-an-ancient-indian-s_csd47X2aSFCeQ6KDuuUWEQ_RsYu3jZvQ86DVMuFdpD09A.jpeg';
import img3 from '../assets/a-cinematic-photo-of-a-wide-angle-shot-o_tbbNSRM_QhGPpSQyAPxrhw_V2mhemaUREWehICnn3Ac5w.jpeg';
import img4 from '../assets/a-medium-shot-of-a-master-artisan-s-hand_YmLz891CTEiz96OOSSFc0w_ZwIS93TkTWWn8o1-7LL1nw.jpeg';
import img5 from '../assets/img5.jpg';

const sliderImages = [img1, img2, img3, img4, img5];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        <img
          src={sliderImages[current]}
          alt="Heritage Banner"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-heritage-navy/80 via-heritage-navy/60 to-transparent"></div>
        {/* Slider Controls */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/40 rounded-full p-2"
          onClick={() => setCurrent((current - 1 + sliderImages.length) % sliderImages.length)}
          aria-label="Previous image"
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/40 rounded-full p-2"
          onClick={() => setCurrent((current + 1) % sliderImages.length)}
          aria-label="Next image"
        >
          &#8594;
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            Preserving 
            <span className="text-heritage-gold block">Cultural Heritage</span>
            for Future Generations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light leading-relaxed">
            We specialize in the restoration, preservation, and celebration of architectural and cultural treasures, 
            bridging the gap between history and modernity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-heritage-gold text-white px-8 py-4 rounded-full hover:bg-heritage-gold/90 transition-all duration-300 font-semibold flex items-center space-x-2 hover:scale-105">
              <span>Explore Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-heritage-navy transition-all duration-300 font-semibold flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '150+', label: 'Projects Completed' },
            { number: '25+', label: 'Years Experience' },
            { number: '50+', label: 'Heritage Sites' },
            { number: '98%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-heritage-gold font-serif">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-white/80 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Add contact info in the Hero section, e.g. below the stats or in a visible place */}
       
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;