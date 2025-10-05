import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import ClinicalEyes1 from '../assets/Ceyes.webp';

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (href) => {
    window.scrollTo(0, 0);
    navigate(href);
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Clinical Trial Management',
    'Data Management',
    'Regulatory Affairs',
    'Patient Recruitment',
    'Biostatistics',
    'Medical Writing'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' }
  ];

  return (
    <footer className="bg-[#f8fafc] text-gray-700 border-t border-b-2 border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
              <div className="w-40 h-auto">
                <img 
                  src={ClinicalEyes1} 
                  alt="ClinicalEyes Logo" 
                  className="h-18 md:h-24 w-auto transition-opacity duration-300 group-hover:opacity-90"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'path/to/fallback-logo.png';
                  }}
                />
              </div>
            </Link>
            <p className="text-[#7b899d] mb-6 leading-relaxed font-oxygen font-normal">
              Leading the future of clinical research with innovative solutions, 
              regulatory excellence, and unwavering commitment to advancing healthcare.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@clinicalresearchpro.com" className="inline-flex items-center text-gray-600 hover:text-[#009689] transition-colors duration-300 font-oxygen font-normal">
                <Mail className="w-5 h-5 mr-2 text-teal-600" />
                info@clinicalresearch.com
              </a>
              <a href="tel:+91 9123227497" className="inline-flex items-center text-gray-600 hover:text-[#009689] transition-colors duration-300 font-oxygen font-normal">
                <Phone className="w-5 h-5 mr-2 text-teal-600" />
                +91 9123227497
              </a>
              <a href="#" className="inline-flex items-start text-gray-600 hover:text-[#009689] transition-colors duration-300 font-oxygen font-normal">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-teal-600" />
                HSR Layout, Sector 6<br />
                Bangalore, Karnataka 560068, India
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-oxygen">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-600 hover:text-[#009689] transition-colors duration-300 font-oxygen font-normal text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-oxygen">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-600 hover:text-[#009689] cursor-pointer transition-colors duration-300 inline-flex items-center font-oxygen font-normal">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 font-oxygen">Stay Connected</h4>
            <p className="text-gray-600 mt-4 font-oxygen font-normal">
              Accelerating clinical research through innovative solutions and expert consulting services.
            </p>
            <div className="flex space-x-2 mb-6 mt-6">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-2 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#009689] focus:border-transparent transition-all duration-300 font-oxygen"
              />
              <button className="px-4 py-2 bg-[#009689] text-white rounded-lg hover:bg-[#007a6e] transition-colors duration-300 text-sm font-medium whitespace-nowrap font-oxygen">
                Subscribe
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#e6f7f6] hover:text-[#009689] hover:border-[#b2e5e1] transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                  style={{ '--icon-color': social.color }}
                >
                  <social.icon className="h-5 w-5" style={{ color: social.color }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#7b899d] font-oxygen font-normal">
            <button onClick={() => handleNavigation('/privacy')} className="hover:text-[#009689] hover:underline transition-colors duration-300 font-oxygen font-normal">
              Privacy Policy
            </button>
            <button onClick={() => handleNavigation('/terms')} className="hover:text-[#009689] hover:underline transition-colors duration-300 font-oxygen font-normal">
              Terms & Conditions
            </button>
            <button onClick={() => handleNavigation('/compliance')} className="hover:text-[#009689] hover:underline transition-colors duration-300 font-oxygen font-normal">
              Compliance
            </button>
          </div>
          
          <div className="text-sm text-[#7b899d] font-oxygen font-normal">
            © {new Date().getFullYear()} ClinicalResearch Pro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;