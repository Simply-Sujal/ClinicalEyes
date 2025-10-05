import React from 'react'
import CarrersHero from '../components/Carrers/CarrersHero'
import ComingSoon from '../components/Carrers/ComingSoon'
import Newsletter from '../components/Newsletter'

const Carrers = () => {
  return (
    <>
        <CarrersHero />
        <section className='max-w-[1400px] mx-auto'>
            <ComingSoon />
        </section>
    </>
  )
}

export default Carrers