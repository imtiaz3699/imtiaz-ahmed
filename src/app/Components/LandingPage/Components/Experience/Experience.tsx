"use client";
import React, { useContext } from "react";
import Upwork from "../../../../photos/icons/logo-upwork.png";
import { Inter } from "next/font/google";
import { StyleContext } from "../../../../../../Contexts/StyleContext";
const inter = Inter({ subsets: ["latin"] });
function Experience() {
  const style = useContext(StyleContext);
  if (!style) {
    throw Error("style is not defined");
  }
  const { mode } = style;

  return (
    <div
      className={`${
        mode === "light"
          ? "text-color-dark bg-[#F9FAFB]"
          : "text-color-light bg-[#111827]"
      } py-[50px] lg:py-[100px] px-[10px] sm:px-[30px] md:px-[30px] lg:px-[120px] bg-[#111827] flex flex-col justify-center items-center ${
        inter.className
      }`}
    >
      <div className={` text-[18px] px-5 py-2 rounded-[25px] ${
          mode === "light" ? "text-color-dark bg-[#E5E7EB]" : "bg-[#374151]"
        }`}>
        Experience
      </div>
      <p className={`text-[20px] leading-[28px] mt-[16px] ${mode === 'light' ? 'text-color-dark' : 'text-[#4B5563]'}`}>
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col gap-[48px]">
        <div className={` ${mode === 'light' ? 'bg-white text-color-dark' : 'bg-[#1F2937]'}  shadow-xl p-4 md:p-8 rounded-[12px] flex flex-col items-center  md:flex-row md:items-start gap-[25px] md:gap-[50px] mt-[50px]  `}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  gap-[10px]">
            <img src={Upwork.src} alt="" className="w-[100px]  h-auto" />
            <div className="md:hidden">Dec 2015 - May 2017</div>
          </div>
          <div className="flex flex-col ">
            <div className="font-medium text-[20px]">
              Senio Front-end Developer
            </div>
            <ul className={` ${mode === 'light' ? 'text-[#4B5563]' : ' text-[#D1D5DB]'}`}>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <div className="hidden md:block"> Dec 2015 - May 2017</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
