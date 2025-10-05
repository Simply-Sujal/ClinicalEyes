import React from 'react'
import HeroSection from '../components/HeroSection'
import ServiceSection from '../components/ServiceSection'
import WhyClinicalEyes from '../components/WhyClinicalEyes'
import OurAreasOfExpert from '../components/OurAreasOfExpert'
import PreferredResourceModelling from '../components/PrefferedResourceModelling'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <>
        <section className='max-w-[1400px] mx-auto'>
            <HeroSection/>
            <ServiceSection/>
            <OurAreasOfExpert/>
            <WhyClinicalEyes/>
            {/* <PreferredResourceModelling/> */}
            <Newsletter/>
            <Testimonials/>
            <FAQ/>
        </section>  
    </>
  )
}

export default Home