import React from 'react';
import { Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            CAREERS
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Hiring Hiring <span className="text-teal-600 font-semibold">Hiring</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            We're currently not accepting applications, but we're always looking for exceptional talent. 
            Check back soon for new opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-50 rounded-full mb-6">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-oxygen">
                New Opportunities Coming Soon
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg font-oxygen font-normal">
                We're actively building our team and will be opening new positions in the coming months. 
                Stay tuned for exciting career opportunities with Clinical Eyes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
