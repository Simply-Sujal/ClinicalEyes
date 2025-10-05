import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ClinicalEyes1 from '../assets/Ceyes.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (href) => {
    setIsOpen(false);
    window.scrollTo(0, 0);
    navigate(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },  
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 shadow-md backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={ClinicalEyes1} 
              alt="ClinicalEyes Logo" 
              className={`h-18 md:h-24 w-auto transition-all duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-90 hover:opacity-100'
              }`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'path/to/fallback-logo.png';
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 py-2 text-[17px] font-light transition-all duration-300 rounded-lg relative group font-oxygen
                  ${
                    location.pathname === item.href
                      ? 'bg-teal-50 text-black font-bold' 
                      : isScrolled 
                        ? 'text-gray-900 hover:bg-teal-50 hover:text-teal-600' 
                        : 'text-gray-900 hover:bg-teal-50 hover:text-teal-600'
                  }`}
              >
                {item.name}
                <span className={`absolute inset-0 rounded-lg bg-teal-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  location.pathname === item.href ? 'opacity-100' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              isOpen 
                ? 'bg-teal-50 text-teal-600' 
                : 'text-gray-900 hover:bg-teal-50'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 transform transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transform transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white fixed inset-x-0 top-20 bottom-0 z-40 transform transition-all duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
        style={{
          maxHeight: 'calc(100vh - 5rem)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className="px-4 py-2 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-1 font-oxygen ${
                location.pathname === item.href
                  ? 'bg-teal-50 text-teal-600 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-teal-600'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            className="w-full mt-4 px-4 py-2.5 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 font-oxygen"
            onClick={() => handleNavigation('/contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;