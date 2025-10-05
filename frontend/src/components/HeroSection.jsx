import React, { useState } from 'react';
import { ArrowRight, BarChart3, Activity, FileText, Database, LineChart } from 'lucide-react';
import backgroundImage from '/src/assets/Landingpagebackground.webp';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    setIsOpen(false);
    window.scrollTo(0, 0);
    navigate(href);
  };
  

  return (
    <div className="relative"> 
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh',
        }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>
      
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center"> 
        <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight relative z-10 font-oxygen">
                Trusted by pharma & biotech for <span className="text-[#009689]">statistical & data expertise</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-oxygen font-normal">
                We accelerate clinical development with advanced analytics, regulatory expertise, and innovative solutions that bring life-changing treatments to patients faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 font-oxygen font-bold">
                <Link
                  to="/services" 
                  onClick={() => handleNavigation('/services')}
                  className="inline-flex items-center justify-center px-9 py-4 border-2 border-[#009689] text-[#009689] font-semibold rounded-lg hover:bg-[#009689] hover:text-white transition-all duration-300 text-lg"
                >
                  Our Services <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Right side - Visual elements */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={"https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                  alt="Hero" 
                  className='w-full h-96 object-cover' 
                />
              </div>

              {/* Floating animated elements */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#009689]/20 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-2 h-2 bg-[#009689] rounded-full animate-ping"></div>
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#009689]/20 rounded-full animate-bounce flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#009689] rounded-full"></div>
              </div>

              {/* Animated data dots */}
              <div className="absolute top-1/4 -left-3 w-6 h-6 bg-white/90 rounded-full shadow-lg animate-bounce flex items-center justify-center">
                <div className="w-1 h-1 bg-[#009689] rounded-full"></div>
              </div>
              
              <div className="absolute bottom-1/3 -right-3 w-6 h-6 bg-white/90 rounded-full shadow-lg animate-bounce flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <div className="w-1 h-1 bg-[#009689] rounded-full"></div>
              </div>

              {/* Animated lines */}
              <div className="absolute top-8 -right-1 w-0.5 h-6 bg-[#009689]/60 animate-pulse"></div>
              <div className="absolute bottom-8 -left-1 w-0.5 h-4 bg-[#009689]/60 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;