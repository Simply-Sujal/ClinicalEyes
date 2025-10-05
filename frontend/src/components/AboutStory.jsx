import React from 'react';
import { motion } from 'framer-motion';

const AboutStory = () => {
  // Timeline data
  const timeline = [
    {
      year: '1993',
      title: 'Foundation',
      description: 'Clinical Eyes was founded as a specialized statistical consulting firm focused on clinical trial design and analysis.'
    },
    {
      year: '2001',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia, establishing offices in key pharmaceutical hubs.'
    },
    {
      year: '2008',
      title: 'Technology Innovation',
      description: 'Launched our proprietary data visualization platform, transforming how clinical data is analyzed and interpreted.'
    },
    {
      year: '2015',
      title: 'Full-Service CRO',
      description: 'Evolved into a comprehensive clinical research organization offering end-to-end services.'
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Pioneered the integration of artificial intelligence into clinical trial design and data analysis.'
    }
  ];

  return (
    <section id="our-story" className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-700 bg-teal-50 rounded-full mb-4">
            OUR JOURNEY
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Our <span className="text-teal-600 font-semibold">Story</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            From a small consulting firm to a global leader in clinical research
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 font-oxygen">From Vision to Global Impact</h3>
            <div className="space-y-6 text-gray-600 font-oxygen font-normal">
              <p>
                Founded in 1993, Clinical Eyes began with a vision to transform how clinical trials are designed, 
                executed, and analyzed. What started as a small statistical consulting firm has grown into a 
                comprehensive clinical research organization with global reach.
              </p>
              <p>
                Through decades of innovation and dedication to scientific excellence, we've supported hundreds of 
                successful clinical trials across multiple therapeutic areas, helping bring life-changing treatments 
                to patients worldwide.
              </p>
              <p>
                Today, our team of over 200 experts continues to push the boundaries of what's possible in clinical 
                research, combining deep scientific knowledge with cutting-edge technology to accelerate medical advancements.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-teal-400 before:to-teal-300">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-teal-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <span className="text-teal-600 font-bold text-sm font-oxygen">{item.year}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 font-oxygen">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-oxygen font-normal">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80" 
                    alt="Clinical research" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Data analysis" 
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Laboratory research" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
