import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/#contact' }
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    
    if (path.startsWith('/#')) {
      // Handle anchor links
      if (location.pathname !== '/') {
        window.location.href = path;
      } else {
        const element = document.querySelector(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-heritage-gold rounded-lg flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-heritage-navy font-serif">Savani Heritage</h1>
              <p className="text-xs text-heritage-navy/70">Preserving Legacy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="text-heritage-navy hover:text-heritage-gold transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-heritage-gold transition-all duration-200 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-heritage-navy hover:text-heritage-gold transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-heritage-gold transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )
            ))}
            <Link
              to="/admin"
              className="bg-heritage-gold text-white px-6 py-2 rounded-full hover:bg-heritage-gold/90 transition-colors duration-200 font-medium"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-heritage-navy hover:text-heritage-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-4 bg-white rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              item.path.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full text-left px-6 py-2 text-heritage-navy hover:text-heritage-gold transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-6 py-2 text-heritage-navy hover:text-heritage-gold transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="px-6">
              <Link
                to="/admin"
                className="block w-full bg-heritage-gold text-white py-2 px-4 rounded-full hover:bg-heritage-gold/90 transition-colors duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;