import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import AboutMe from './Components/AboutMe/AboutMe'
import SkillSet from './Components/SkillSet/SkillSet'
import Experience from './Components/Experience/Experience'

function LandingPage() {
  return (
    <div className=''>
      <HeroSection/>
      <AboutMe/>
      <SkillSet/>
      <Experience/>
    </div>
  )
}

export default LandingPage