import React, { useState } from 'react';
import { Award, BarChart2, Shield, Users, Clock, Zap, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WhyClinicalEyes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const features = [
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '30+ years of delivering exceptional clinical research solutions with a 98% success rate across 50+ countries.'
    },
    {
      icon: BarChart2,
      title: 'Data-Driven Insights',
      description: 'Advanced analytics and AI-powered tools that transform complex clinical data into actionable intelligence.'
    },
    {
      icon: Shield,
      title: 'Regulatory Expertise',
      description: 'Navigating global regulatory landscapes with precision to ensure compliance and accelerate approvals.'
    },
    {
      icon: Users,
      title: 'Patient-Centric Approach',
      description: 'Designing studies with patient experience at the forefront to improve enrollment and retention.'
    },
    {
      icon: Clock,
      title: 'Faster Timelines',
      description: 'Streamlined processes and innovative technologies that reduce study timelines by up to 40%.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Leveraging the latest in AI, machine learning, and automation to optimize clinical trials.'
    }
  ];

  const stats = [
    { value: '98%', label: 'Success Rate' },
    { value: '30+', label: 'Years Experience' },
    { value: '500+', label: 'Trials Completed' },
    { value: '50+', label: 'Countries Served' }
  ];

  const handleNavigation = (href) => {
    setIsOpen(false);
    window.scrollTo(0, 0);
    navigate(href);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            WHY CHOOSE US
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Transforming Clinical Research Through <span className="text-teal-600 font-semibold">Innovation & Excellence</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            At ClinicalEyes, we combine decades of expertise with cutting-edge technology to deliver unparalleled clinical research solutions that accelerate your path to market.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:bg-teal-100 transition-colors duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-oxygen">{feature.title}</h3>
                      <p className="text-gray-600 font-oxygen font-normal">{feature.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClinicalEyes;