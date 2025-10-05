import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// Simplified FAQ data - just 7 most important questions
const faqData = [
  {
    id: 1,
    question: 'What clinical research services does Clinical Eyes offer?',
    answer: 'Clinical Eyes offers a comprehensive range of services including clinical trial design, data management, biostatistics, PK/PD modeling, regulatory strategy, and clinical operations. Our expertise spans across multiple therapeutic areas with particular focus on oncology, rare diseases, and CNS disorders.'
  },
  {
    id: 2,
    question: 'Do you provide support for global clinical trials?',
    answer: 'Yes, Clinical Eyes has extensive experience supporting global clinical trials across North America, Europe, Asia-Pacific, and other regions. We have established relationships with regulatory bodies worldwide and can help navigate the complexities of multi-regional clinical trials.'
  },
  {
    id: 3,
    question: 'What data visualization technologies do you use?',
    answer: 'We utilize cutting-edge data visualization tools including Tableau, Power BI, and custom R-based solutions. Our proprietary analytics platform integrates seamlessly with common EDC systems to provide real-time insights and interactive dashboards tailored to your specific trial needs.'
  },
  {
    id: 4,
    question: 'How do you ensure data security and compliance?',
    answer: 'Clinical Eyes implements robust data security measures compliant with GDPR, HIPAA, and 21 CFR Part 11 requirements. Our infrastructure includes end-to-end encryption, secure access controls, comprehensive audit trails, and regular security assessments to protect sensitive clinical data.'
  },
  {
    id: 5,
    question: 'What is your approach to adaptive trial design?',
    answer: 'Our approach to adaptive trial design combines statistical rigor with practical implementation strategies. We work closely with sponsors to identify key decision points, develop appropriate adaptation rules, and implement efficient processes for rapid data review and decision-making, all while maintaining trial integrity and regulatory compliance.'
  },
  {
    id: 6,
    question: 'What therapeutic areas do you specialize in?',
    answer: 'While we support studies across various therapeutic areas, our core expertise lies in oncology, immunology, neurology, rare diseases, and cardiovascular disorders. Our team includes specialists with deep domain knowledge in these areas who understand the unique challenges and requirements of trials in these fields.'
  },
  {
    id: 7,
    question: 'What experience do you have with regulatory submissions?',
    answer: 'Our regulatory affairs team has successfully supported numerous IND, NDA, BLA, and MAA submissions across FDA, EMA, PMDA, and other regulatory authorities. We have particular expertise in complex regulatory pathways including accelerated approval, breakthrough therapy, and orphan drug designations.'
  }
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Common <span className="text-teal-600 font-semibold">Questions</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            Find answers to frequently asked questions about our clinical research services, technology, and expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ accordion */}
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                          <span className="text-lg font-medium text-gray-900 font-oxygen">{faq.question}</span>
                  <span className="ml-4 flex-shrink-0">
                    {expandedId === faq.id ? (
                      <Minus className="h-5 w-5 text-teal-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-teal-600" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 border-t border-gray-100">
                                <p className="text-gray-600 leading-relaxed font-oxygen font-normal">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
