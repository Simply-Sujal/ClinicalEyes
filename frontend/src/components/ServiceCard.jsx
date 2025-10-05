import React from 'react';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ image, title, description, delay = 0 }) => {
  // Generate two key features based on the service title
  const generateFeatures = (title) => {
    const featureMap = {
      'Consulting': ['Strategic Planning', 'Regulatory Guidance'],
      'Clinical Trial Services': ['Protocol Design', 'Site Management'],
      'ISS/ISE Submission': ['Regulatory Compliance', 'Documentation'],
      'AI and Automation': ['Process Optimization', 'Data Analysis'],
      'Post-Marketing Safety': ['Pharmacovigilance', 'Risk Assessment'],
      'Real World Data': ['Evidence Generation', 'Market Insights'],
      // Default features for any other service
      'default': ['Expert Support', 'Quality Assurance']
    };
    
    return featureMap[title] || featureMap['default'];
  };
  
  const features = generateFeatures(title);

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Action button that appears on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200">
            <ArrowUpRight className="w-5 h-5 text-teal-600" />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300 font-oxygen">
          {title}
        </h3>
        
        <p className="text-gray-600 text-md leading-relaxed mb-5 font-oxygen font-normal">
          {description}
        </p>
      
      </div>
    </div>
  );
};

export default ServiceCard;