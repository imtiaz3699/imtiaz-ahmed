import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import AboutMe from "./Components/AboutMe/AboutMe";
import SkillSet from "./Components/SkillSet/SkillSet";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/page";
import Testimonials from "./Components/Testimonials/Testimonials";
import GetInTouch from "./Components/GetInTouch/GetInTouch";

function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <AboutMe />
      <SkillSet />
      <Experience />
      <Work />
      <Testimonials/>
      <GetInTouch/>
    </div>
  );
}

export default LandingPage;
