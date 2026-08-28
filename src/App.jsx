import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Vehicles from './components/Vehicles'
import WhyChooseRemyAutos from './components/WhyRemyAutos'
import Contacts from './components/Contact'
import FAQ from './components/FAQ'
import ContactForm from './components/Contactform'
import Newsletter from './components/Newsletter'

function App() {
 return (
    <div className='thePage'>
    <Navbar />
    <Hero />
    <div className='content'>
    <Vehicles />
    <WhyChooseRemyAutos />
    <Contacts />
    <FAQ />
    <ContactForm />
    <Newsletter />
    </div>
    </div>
  )
}

export default App
