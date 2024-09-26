'use client'
import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Inter } from "next/font/google";
import ProfilePhoto from "../../photos/profilePhoto.jpg";
import { StyleContext } from "../../../../Contexts/StyleContext";
const inter = Inter({ subsets: ["latin"] });
function HeroSection() {
  const style = useContext(StyleContext);
  if (!style) {
    throw Error("style is not defined");
  }
  const { mode, setMode,textColor,bgColor } = style;

console.log(mode,textColor)
  
  return (
    <div className={`${mode === 'light' ? 'text-color-dark bg-color-light' : 'text-color-light bg-color-dark'} flex flex-col-reverse lg:flex-row items-center justify-between  px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px] py-[100px] gap-[50px] w-full `}>
      <div className="flex flex-col gap-[50px] md:max-w-[70%] w-full">
        <div>
          <h1
            className={` text-[20px] sm:text-[25px] md:text-[35px]  xl:text-[50px] font-medium ${inter.className}`}
          >
            Hi I'am Imtiaz Ahmed
          </h1>
          <p className={` text-[16px] md:text-[18px] xl:text-[25px] `}>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 3 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-3">
            <FaLocationDot />
            <p className="text-[20px]">Rawalpindi Pakistan</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div className="w-[10px] h-[10px] bg-green-500 rounded-full"></div>
            <p className="text-[20px]">Available for new Projects</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3">
          <FaGithub className="text-[30px] hover:cursor-pointer" />
          <FaLinkedin className="text-[30px] hover:cursor-pointer" />
        </div>
      </div>

      <div className="w-[280px] h-[320px] bg-[#374151] relative flex justify-center">
        <div className="absolute xl:-left-11 -top-6 xl:-top-11 border-l-[10px] xl:border-l-0 border-r-[10px] border-b-[10px] border-[#0A0A0F]">
          {" "}
          <img
            src={ProfilePhoto.src}
            alt=""
            className="w-[230px] xl:w-[280px] h-[320px]"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
