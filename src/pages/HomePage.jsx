import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'



const HomePage = () => {
  return (
    <div className='page-container'>
        <Navbar/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default HomePage