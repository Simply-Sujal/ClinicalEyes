import React from 'react';

const BlogHero = () => {
  return (
    <section className="relative h-[70vh] md:h-[70vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20"></div>
   
      
      {/* Content Container - Proper spacing from top */}
      <div className="relative z-10 h-full flex items-center pt-24 md:pt-28">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side Content */}
            <div className="text-white">
              {/* Main Heading */}
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-lg font-oxygen"
              >
                Blog
              </h1>

              {/* Description */}
              <div className="max-w-2xl mb-8 md:mb-12">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed drop-shadow-md font-oxygen font-normal">
                  Raising CRO standards for innovation and delivery to help bring life-changing treatments to patients faster.
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <a 
                  href="#contact" 
                  className="inline-block px-6 py-3 md:px-8 md:py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  CONNECT WITH US
                </a>
              </div>
            </div>

            {/* Right Side - Empty for now */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
