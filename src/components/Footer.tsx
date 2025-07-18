import React from 'react';
import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Blog', href: '#blog' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Heritage Restoration', href: '#' },
      { name: 'Cultural Preservation', href: '#' },
      { name: 'Heritage Consulting', href: '#' },
      { name: 'Conservation Services', href: '#' }
    ],
    resources: [
      { name: 'Case Studies', href: '#' },
      { name: 'Research Papers', href: '#' },
      { name: 'News & Updates', href: '#' },
      { name: 'Documentation', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-heritage-navy dark:bg-gray-900 text-white dark:text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 mt-24 relative z-10">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-heritage-gold rounded-full flex items-center justify-center hover:bg-heritage-gold/90 transition-colors duration-200 shadow-lg hover:scale-110 transform transition-transform"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-heritage-gold rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Varasa</h3>
                <p className="text-sm text-white/70">Preserving Legacy</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Dedicated to preserving cultural heritage for future generations through expert restoration, conservation, and community engagement.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail size={16} />
                <span>varasa.acha@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={16} />
                <span>+91 9881409532</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={16} />
                <span>A-903 Ruturang Society, Behind Paranjape School, Kothrud, Pune - 411038</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-heritage-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-heritage-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold font-serif mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-heritage-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:border-heritage-gold"
                />
                <button className="bg-heritage-gold px-4 py-2 rounded-r-lg hover:bg-heritage-gold/90 transition-colors duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Savani Heritage. All rights reserved. | Privacy Policy | Terms of Service
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-heritage-gold transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;