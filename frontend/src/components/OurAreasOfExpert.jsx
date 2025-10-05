import React from 'react';
import { FlaskConical, LineChart, Activity, FileText, LayoutDashboard, Database, Cpu, FileCode2, Percent } from 'lucide-react';

const expertiseAreas = [
  {
    icon: FlaskConical,
    title: 'Oncology',
    description: 'Oncology trials face many challenges in the collection, analysis and reporting of study data, and selecting a partner that is specialised in data instead of a traditional full-service CRO can make all the difference in your studies success.'
  },
  {
    icon: LineChart,
    title: 'Clinical Data Visualization',
    description: 'Gain early insights into your pre-database lock data with free Tables, Listings and Figures visualizations to give you an idea of the potential trial reporting results that lay ahead.'
  },
  {
    icon: Activity,
    title: 'PK/PD Services',
    description: 'Get the specialist software and expertise you need to discover what the body does to your investigational drug and where it goes with Pharmacokinetics (PK) and Pharmacodynamics (PD) analysis.'
  },
  {
    icon: FileText,
    title: 'Clinical Trial Reporting',
    description: 'Unlock the insights from your data with in-depth reports designed ready for regulatory submissions.'
  },
  {
    icon: LayoutDashboard,
    title: 'Clinical Study Design/Adaptive Trials',
    description: 'An optimally designed trial can reduce costs and save time, either by requiring a smaller sample size or by stopping a trial earlier in time without continued wasted efforts.'
  },
  {
    icon: Database,
    title: 'EDC & Data Capture Options',
    description: 'Utilize the latest data capture technologies such as wearable and ePRO devices and take a flexible approach to selecting the right electronic data capture (EDC) system for your trial.'
  },
  {
    icon: Cpu,
    title: 'CDISC/ADaM Mapping',
    description: 'Convert all your trial research data into one globally regulatory recognized data standard for clinical research.'
  },
  {
    icon: Percent,
    title: 'Protocol Design Power Calculations',
    description: 'Get the right protocol design for the right scientific questions of your trial and boost the chance of success with sound sample size calculation.'
  }
];


const OurAreasOfExpert = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            OUR EXPERTISE
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Areas of <span className="text-teal-600 font-semibold">Expertise</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            Leverage our deep expertise across all aspects of clinical research and drug development to accelerate your path to market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group relative overflow-hidden h-full flex flex-col"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-100 transition-colors duration-300">
                <area.icon className="w-6 h-6" />
              </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-oxygen">{area.title}</h3>
                      <p className="text-gray-600 text-sm flex-grow font-oxygen font-normal">{area.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAreasOfExpert;