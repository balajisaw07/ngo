import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Crown, Moon, Sun } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  // Add state for open dropdown (desktop)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Add state for open mobile section
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Replace navItems with a nested structure for dropdowns
  const navItems = [
    {
      name: 'HOME',
      children: [
        { name: 'Vision', path: '/vision' },
        { name: 'Mission', path: '/mission' },
      ],
    },
    {
      name: 'ABOUT',
      children: [
        { name: 'About us', path: '/about-us' },
        { name: 'People', path: '/people' },
        { name: 'Heritage', path: '/heritage' },
      ],
    },
    {
      name: 'EVENTS',
      children: [
        { name: 'Projects', path: '/projects' },
        { name: 'Activities', path: '/activities' },
      ],
    },
    {
      name: 'RESEARCH',
      children: [
        { name: 'Publication', path: '/publication' },
        { name: 'Lectures', path: '/lectures' },
        { name: 'Seminars', path: '/seminars' },
        { name: 'Training Workshop', path: '/training-workshop' },
        { name: 'Blogs and News', path: '/blogs-and-news' },
      ],
    },
    {
      name: 'DONATE/GRANTS',
      children: [
        { name: 'Corporate CSR', path: '/corporate-csr' },
        { name: 'Internships', path: '/internships' },
        { name: 'Donation', path: '/donation' },
        { name: 'MoU/Partners', path: '/mou-partners' },
      ],
    },
    {
      name: 'CONTACT US',
      path: '/contact-us',
    },
  ];

  // Helper for rendering submenu links
  const renderSubmenu = (children: any[]) => (
    <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 shadow-lg rounded-lg py-2 z-50">
      {children.map((child: any) => (
        child.path.startsWith('/') ? (
          <Link
            key={child.name}
            to={child.path}
            className="block px-4 py-2 text-heritage-navy dark:text-white hover:bg-heritage-gold/10 hover:text-heritage-gold dark:hover:text-heritage-gold transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {child.name}
          </Link>
        ) : (
          <a
            key={child.name}
            href={child.path}
            className="block px-4 py-2 text-heritage-navy dark:text-white hover:bg-heritage-gold/10 hover:text-heritage-gold dark:hover:text-heritage-gold transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            {child.name}
          </a>
        )
      ))}
    </div>
  );

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

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newMode;
    });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="VĀRASĀ Logo" className="h-12 w-auto" />
            <span className="text-3xl font-extrabold tracking-wide font-serif text-[#d32f2f] dark:text-white drop-shadow-sm" style={{ letterSpacing: '0.2em' }}>VĀRASĀ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-start space-x-8 text-heritage-navy dark:text-white mt-4">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.name} className="relative" ref={openDropdown === item.name ? dropdownRef : null}>
                  <button
                    type="button"
                    className="font-bold text-base px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-t hover:bg-heritage-gold/20 dark:hover:bg-heritage-gold/20 transition-colors duration-200"
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.name}
                  >
                    {item.name}
                  </button>
                  <div
                    className={
                      (openDropdown === item.name ? 'block' : 'hidden') +
                      ' absolute left-0 mt-2 w-56 bg-white dark:bg-gray-900 shadow-lg rounded-lg py-2 z-50'
                    }
                  >
                    {renderSubmenu(item.children)}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="font-bold text-base px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-t hover:bg-heritage-gold/20 dark:hover:bg-heritage-gold/20 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )
            ))}
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-800" />}
            </button>
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
              item.children ? (
                <div key={item.name} className="mb-2">
                  <button
                    type="button"
                    className="font-bold px-6 py-2 bg-gray-200 dark:bg-gray-800 rounded-t w-full text-left flex justify-between items-center"
                    onClick={() => setOpenMobileSection(openMobileSection === item.name ? null : item.name)}
                    aria-expanded={openMobileSection === item.name}
                  >
                    {item.name}
                    <span>{openMobileSection === item.name ? '▲' : '▼'}</span>
                  </button>
                  <div className={openMobileSection === item.name ? 'block' : 'hidden'}>
                    <div className="pl-4">
                      {item.children.map((child: any) => (
                        child.path.startsWith('/') ? (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-6 py-2 text-heritage-navy hover:text-heritage-gold transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ) : (
                          <a
                            key={child.name}
                            href={child.path}
                            className="block px-6 py-2 text-heritage-navy hover:text-heritage-gold transition-colors duration-200 font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-6 py-2 font-bold text-heritage-navy bg-gray-200 dark:bg-gray-800 rounded-t hover:text-heritage-gold transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;