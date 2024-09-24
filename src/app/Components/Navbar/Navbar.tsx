'use client'
import React,{useState} from "react";
import Button from "../Button/Button";
import { Inter } from "next/font/google";
import { Stylish } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
const inter = Inter({ subsets: ["latin"] });
const stylish = Stylish({
  weight: "400",
  subsets: ["latin"],
});
function Navbar() {
  const navData = ["Home", "Services", "Work", "About us", "Blog"];
  const [isDropDownOpen,setIsDropDownOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between px-[30px] md:px-[30px] lg:px-[120px] py-[25px]">
      <h1 className={`text-white text-[25px] md:text-[25px] lg:text-[35px] ${stylish.className}`}>
        Imiaz Ahmed <span className="text-green-500 text-[35px]">.</span>{" "}
      </h1>
      <div className="hidden md:flex flex-row gap-[58px]">
        <div className="flex flex-row items-center gap-[38px]  ">
          {navData.map((element, idx) => {
            return (
              <div
                key={element}
                className={` text-white font-bold text-[12px] lg:text-[14px] hover:underline hover:text-gray-400 cursor-pointer transition-all delay-100 ${inter.className}`}
              >
                {element}
              </div>
            );
          })}
        </div>
        <Button
          btnText="Contact"
          className={`text-white px-[16px] py-[10px] border-[1px] border-[#079211] hover:border-[#517a53] font-bold text-[12px] md:text-[14px] hover:text-gray-400 ${inter.className}`}
        />
      </div>

      <div className="md:hidden">
      <RxHamburgerMenu  className="text-white" onClick={()=> setIsDropDownOpen(!isDropDownOpen)}/>
        <div></div>
            

      </div>
    </div>
  );
}

export default Navbar;
