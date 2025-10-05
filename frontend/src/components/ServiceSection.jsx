import React from 'react';
import ServiceCard from './ServiceCard';

import service1 from '../assets/Consulting.webp';
import service2 from '../assets/Consulting.webp';
import service3 from '../assets/Consulting.webp';
import service4 from '../assets/Consulting.webp';
import service5 from '../assets/Consulting.webp';
import service6 from '../assets/Consulting.webp';

const services = [
  {
    image: service1,
    title: 'Consulting',
    description: <p>Our consulting services in clinical development focus on scientifically sound statistical protocol design. Leveraging both Frequentist and <span className="text-teal-600 font-semibold text-[16px]">Bayesian statistical framework</span>, we enable clients to optimize study power, adaptive features, and operational feasibility. Our expertise ensures regulatory compliance and strengthens the statistical integrity of your trials, improving the likelihood of approval.</p>
  },
  {
    image: service2,
    title: 'Clinical Trial Services',
    description: <p>We offer expertise, resources and services in <span className="text-teal-600 font-semibold text-[16px]">Statistics, Statistical Programming, Clinical Data Management, Pharmacovigilance, and Medical Writing</span> to ensure quality and data integrity in clinical trials. Our approach streamlines processes across studies and portfolios, improving efficiency and decision-making. We also deliver prompt solutions for rescue studies, stabilizing underperforming trials and ensuring data quality and successful delivery.anagement including study design, site selection, monitoring, and data management.</p>
  },
  {
    image: service3,
    title: 'ISS/ISE Submission',
    description: <p>We specialize in providing expert support for <span className="text-teal-600 font-semibold text-[16px]">Integrated Summary of Safety (ISS)</span> and <span className="text-teal-600 font-semibold text-[16px]">Integrated Summary of Efficacy/Efficiency (ISE)</span>, ensuring data standardization and regulatory compliance to accelerate submission and approval processes.</p>
  },
  {
    image: service4,
    title: 'AI and Automation',
    description: <p>We integrate <span className="text-teal-600 font-semibold text-[16px]">Artificial Intelligence (AI)</span> and automation throughout our processes to drive speed, efficiency, and quality. One example is <span className="text-teal-600 font-semibold text-[16px]">QSummarise</span>, our <span className="text-teal-600 font-semibold text-[16px]">SDTM dataset automation tool</span>, which automates data extraction, mapping, and CDISC standard translation. From the eCRF, the solution seamlessly integrates annotated mappings, generates adaptable SAS code, and ensures define.xml readiness. Our evolving tools manage 80-95% of complex mappings, balancing automation with expert oversight to streamline clinical research and accelerate data submission.  For more information on how our AI and automation tools can benefit your clinical research, please contact us.</p>
  },
  {
    image: service5,
    title: 'Post-Marketing Safety',
    description: <p>We deliver expert <span className="text-teal-600 font-semibold text-[16px]">post-marketing safety services</span>, including adverse event management, risk assessments, and regulatory reporting. Our team ensures ongoing patient safety and product integrity throughout the lifecycle.</p>
  },
  {
    image: service6,
    title: 'Real World Data',
    description: <p>We harness <span className="text-teal-600 font-semibold text-[16px]">Real World Data</span> from secondary sources—such as electronic medical records, claims data, and healthcare databases—to generate insights that support health economics and outcomes research (HEOR). Our specialist team supports sponsors with observational studies and post-approval safety research, enabling evidence-based decision-making, value demonstration, and regulatory submissions.</p>
  }
];

const ServiceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full mb-4">
            OUR SERVICES
          </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight font-oxygen">
            Comprehensive <span className="text-teal-600 font-semibold">Solutions</span> for Your <br className="hidden lg:block" /> Clinical Development Needs
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-teal-500 to-teal-300 mx-auto mb-6"></div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed font-oxygen font-normal">
            Discover how our end-to-end services can accelerate your clinical development and ensure regulatory success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              image={service.image}
              title={service.title}
              description={service.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;