import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, DollarSign, Check, ChevronRight, BarChart2, Clock, Calendar, Award } from 'lucide-react';

const PreferredResourceModelling = () => {
  const [selectedOption, setSelectedOption] = useState('functionService');

  const options = [
    {
      id: 'functionService',
      title: 'Function Service Provision',
      icon: <Users className="w-5 h-5" />,
      description: 'Optimal for businesses requiring flexible, on-demand expertise with scalable resource allocation',
      features: [
        'Pay-as-you-go service model',
        'Elastic resource scaling',
        'Specialized expertise on demand',
        'Ideal for evolving project scopes'
      ],
      color: 'bg-gradient-to-r from-teal-600 to-teal-500',
      hoverColor: 'hover:from-teal-700 hover:to-teal-600',
      accentColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-gray-800',
      benefits: {
        bestFor: 'Long-term engagements with evolving requirements',
        timeline: 'Flexible, ongoing collaboration',
        advantage: 'Cost optimization through resource efficiency'
      }
    },
    {
      id: 'fixedCost',
      title: 'Fixed Cost Project',
      icon: <DollarSign className="w-5 h-5" />,
      description: 'Structured approach with defined scope, timeline, and budget for predictable project execution',
      features: [
        'Fixed-price engagement',
        'Clearly defined deliverables',
        'Structured project timeline',
        'Budget certainty'
      ],
      color: 'bg-gradient-to-r from-teal-700 to-teal-600',
      hoverColor: 'hover:from-teal-800 hover:to-teal-700',
      accentColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-gray-800',
      benefits: {
        bestFor: 'Projects with well-defined requirements',
        timeline: 'Fixed duration with clear milestones',
        advantage: 'Predictable budgeting and planning'
      }
    }
  ];

  const selectedData = options.find(opt => opt.id === selectedOption);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };


  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            Resource Model
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Choose Your <span className="text-teal-600 font-semibold">Resource Model</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Select the engagement framework that aligns with your project's scope, timeline, and budget requirements
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row border-b border-gray-100">
              {options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`relative px-8 py-6 text-left transition-all duration-300 flex-1 ${
                    selectedOption === option.id 
                      ? `${option.color} text-white`
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >

                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-lg ${
                      selectedOption === option.id 
                        ? 'bg-white/20' 
                        : `${option.bgColor} ${option.accentColor.replace('text', 'bg').replace('-600', '-100')}`
                    }`}>
                      {React.cloneElement(option.icon, {
                        className: `w-5 h-5 ${selectedOption === option.id ? 'text-white' : option.accentColor}`
                      })}
                    </div>
                    <span className={`text-lg font-medium ${
                      selectedOption === option.id ? 'text-white' : 'text-gray-800'
                    }`}>
                      {option.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedOption}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeIn}
                className="p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4">
                      <span className="font-medium">{selectedData.title.split(' ')[0]}</span> {selectedData.title.split(' ').slice(1).join(' ')}
                    </h3>
                    <p className="text-gray-500 mb-8 leading-relaxed">{selectedData.description}</p>
                    
                    <motion.ul 
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="hidden"
                      animate="show"
                    >
                      {selectedData.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start"
                          variants={listItem}
                        >
                          <div className={`${selectedData.accentColor} mt-0.5 mr-3`}>
                            <Check className="w-5 h-5" />
                          </div>
                          <span className="text-gray-800">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                    <h4 className="text-lg font-medium text-gray-900 mb-6 flex items-center">
                      <BarChart2 className="w-5 h-5 mr-2 text-teal-600" />
                      Key Advantages
                    </h4>
                    
                    <div className="space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                            <Clock className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-sm font-medium text-gray-500">Best For</h5>
                          <p className="mt-1 text-gray-700">
                            {selectedData.benefits.bestFor}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                            <Calendar className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-sm font-medium text-gray-500">Project Timeline</h5>
                          <p className="mt-1 text-gray-700">
                            {selectedData.benefits.timeline}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                            <Award className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-sm font-medium text-gray-500">Key Advantage</h5>
                          <p className="mt-1 text-gray-700">
                            {selectedData.benefits.advantage}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`mt-8 w-full py-3.5 px-6 ${selectedData.color} text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <span>Get Started with {selectedData.title.split(' ')[0]}</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-5">Need help determining the best approach?</p>
            <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200 flex items-center justify-center space-x-1.5 mx-auto group">
              <span>Consult with our solutions team</span>
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferredResourceModelling;