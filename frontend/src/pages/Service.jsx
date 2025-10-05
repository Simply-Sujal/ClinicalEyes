import React from 'react'
import ServiceHero from '../components/Services/ServiceHero'
import ServiceSection from '../components/ServiceSection'
import PreferredResourceModelling from '../components/PrefferedResourceModelling'
import Newsletter from '../components/Newsletter'

const Services = () => {
  return (
    <>     
        <ServiceHero />
        <section className='max-w-[1400px] mx-auto'>
            <ServiceSection/>
            <PreferredResourceModelling/>
            <Newsletter/>
        </section>
    </>
  )
}

export default Services