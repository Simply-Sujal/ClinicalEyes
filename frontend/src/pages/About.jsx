import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import AboutTeam from '../components/AboutTeam';
import WhyClinicalEyes from '../components/WhyClinicalEyes';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="max-w-[1400px] mx-auto">
        <AboutStory />
        <WhyClinicalEyes />
        <AboutTeam />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  );
};

export default About;