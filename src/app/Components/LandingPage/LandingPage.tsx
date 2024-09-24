import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import AboutMe from './Components/AboutMe/AboutMe'

function LandingPage() {
  return (
    <div className=''>
      <HeroSection/>
      <AboutMe/>
    </div>
  )
}

export default LandingPage