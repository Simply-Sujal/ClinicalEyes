import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <>
        <ContactHero />
        <section className='max-w-[1400px] mx-auto'>
            <ContactForm />
        </section>
    </>
  )
}

export default Contact  